/**
 * mapToSvgPreview.ts  —  DECLASSIFIED Map SVG Builder
 *
 * A self-contained local dev app for interactively building SVG map layers
 * from a raw map image. No CLI arguments needed — just drop PNG/JPG files into
 * the scripts/map-workspace/ folder and launch:
 *
 *   npm run map:build           (starts server on http://localhost:9090)
 *   npm run map:build -- --port 9091
 *
 * Workflow
 *  1. Drop PNG/JPG files into scripts/map-workspace/
 *  2. Open http://localhost:9090 — select an image from the dropdown
 *  3. Optionally name and save your session (saved as JSON in the workspace)
 *  4. Use Fill mode    — click the map to flood-fill regions
 *  5. Use Select mode  — click any SVG path to reassign or exclude it
 *  6. Use Outline mode — click vertices to draw the map boundary polygon
 *  7. Save Progress    — persists annotations + config as a JSON session file
 *  8. Export SVG       — downloads a clean 512 × 512 SVG for use in the app
 *
 * Exported SVG: outlines, walls, thickerWalls, inaccessible, stairs (512×512)
 * When a closed outline exists, all fill layers are clipped to it on export.
 */

import fs   from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import sharp from 'sharp';
import {
    defaultConfig,
    extractGrayPixels,
    fillRegion,
    processMap,
    type MapConfig,
} from './mapToSvg.js';

// ── constants ────────────────────────────────────────────────────────────────

const WORKSPACE_DIR = path.join(process.cwd(), 'scripts', 'map-workspace');

const PORT = (() => {
    const idx = process.argv.indexOf('--port');
    if (idx !== -1 && process.argv[idx + 1]) {
        const v = Number(process.argv[idx + 1]);
        if (!isNaN(v)) return v;
    }
    return 9090;
})();

// Ensure the workspace folder exists on startup
if (!fs.existsSync(WORKSPACE_DIR)) {
    fs.mkdirSync(WORKSPACE_DIR, { recursive: true });
    console.log(`\nCreated workspace folder: ${WORKSPACE_DIR}`);
    console.log('Drop PNG or JPG map images there to get started.\n');
}

// ── server state  ────────────────────────────────────────────────────────────

let currentPngPath:   string | null = null;
let currentPngBuffer: Buffer | null = null;
let currentPngMime:   string        = 'image/png';

// ── gray-pixel cache (refreshed after every /process call) ──────────────────

interface GrayCache {
    pixels: Uint8Array;
    width:  number;
    height: number;
    vW:     number; // SVG viewBox width  from last render
    vH:     number; // SVG viewBox height from last render
}
let grayCache: GrayCache | null = null;

// ── annotation types (shared server ↔ session JSON) ────────────────────────

interface FilledShapeServer {
    kind:      'fill';
    id:        string;
    group:     string;
    mode:      'add' | 'subtract';
    type:      'fill' | 'outline';
    lineStyle: 'solid' | 'dashed';
    path:      string;  // potrace `d` captured at vW × vH
    vW:        number;
    vH:        number;
}

interface ReassignmentServer {
    kind:      'reassign';
    id:        string;
    d:         string;
    fromGroup: string;
    toGroup:   string;
    type:      'fill' | 'outline' | 'line';
    lineStyle: 'solid' | 'dashed';
}

interface ExclusionServer {
    kind:      'exclude';
    id:        string;
    d:         string;
    fromGroup: string;
}

interface MoveServer {
    kind:      'move';
    id:        string;
    d:         string;
    fromGroup: string;
    dx:        number;
    dy:        number;
}

interface ReshapeServer {
    kind:      'reshape';
    id:        string;
    origD:     string;  // original d attribute for matching
    newD:      string;  // new d attribute after node editing
    fromGroup: string;
}

interface MapOutlineServer {
    kind:   'map-outline';
    id:     string;
    points: { nx: number; ny: number }[]; // normalised 0-1 coords relative to image
    closed: boolean;
}

type AnnotationServer =
    | FilledShapeServer
    | ReassignmentServer
    | ExclusionServer
    | MoveServer
    | ReshapeServer
    | MapOutlineServer;

// ── session types ────────────────────────────────────────────────────────────

interface SessionInfo {
    name:      string;
    pngFile:   string;
    updatedAt: string;
}

interface SessionData {
    name:        string;
    pngFile:     string;
    config:      Partial<MapConfig>;
    annotations: AnnotationServer[];
    updatedAt:   string;
}

// ── workspace helpers ────────────────────────────────────────────────────────

/** Scans workspace root + one level of subdirectories for PNGs and JSON sessions.
 *  PNG values are relative paths like "Astra Malorum/Mars.png" or "flat.png".
 *  Session identifiers are "subdir/name" or "name" for root-level sessions.
 */
function scanWorkspace(): { pngs: string[]; sessions: SessionInfo[] } {
    const pngs: string[]        = [];
    const sessions: SessionInfo[] = [];

    function readJsonSession(fp: string, prefix: string): SessionInfo | null {
        try {
            const d = JSON.parse(fs.readFileSync(fp, 'utf8')) as SessionData;
            return { name: prefix ? prefix + '/' + d.name : d.name, pngFile: d.pngFile, updatedAt: d.updatedAt };
        } catch { return null; }
    }

    const entries = fs.readdirSync(WORKSPACE_DIR).sort();
    for (const entry of entries) {
        const fp   = path.join(WORKSPACE_DIR, entry);
        const stat = fs.statSync(fp);
        if (stat.isDirectory()) {
            // One level deep only
            const sub = fs.readdirSync(fp).sort();
            for (const sf of sub) {
                if (/\.(png|jpg|jpeg)$/i.test(sf)) {
                    pngs.push(entry + '/' + sf);
                } else if (sf.endsWith('.json')) {
                    const s = readJsonSession(path.join(fp, sf), entry);
                    if (s) sessions.push(s);
                }
            }
        } else if (/\.(png|jpg|jpeg)$/i.test(entry)) {
            pngs.push(entry);
        } else if (entry.endsWith('.json')) {
            const s = readJsonSession(fp, '');
            if (s) sessions.push(s);
        }
    }
    return { pngs, sessions };
}

function loadPngFile(filename: string): void {
    // Allow "subdir/file.png" (one level) — prevent traversal
    const parts = filename.split('/');
    if (parts.length > 2 || parts.some(p => !p || p === '.' || p === '..')) {
        throw new Error('Invalid path');
    }
    const fp  = path.join(WORKSPACE_DIR, ...parts);
    const abs = path.resolve(fp);
    if (!abs.startsWith(path.resolve(WORKSPACE_DIR))) throw new Error('Path traversal denied');
    if (!fs.existsSync(fp)) throw new Error(`File not found: ${filename}`);
    const ext         = path.extname(parts[parts.length - 1]).slice(1).toLowerCase();
    currentPngPath   = fp;
    currentPngBuffer = fs.readFileSync(fp);
    currentPngMime   = (ext === 'jpg' || ext === 'jpeg') ? 'image/jpeg' : 'image/png';
    grayCache        = null;
}

function safeSessionName(name: string): string {
    return name.replace(/[^a-zA-Z0-9_\-. ]/g, '_').trim().slice(0, 64) || 'session';
}

/** Resolve the directory to save a session into — same folder as the PNG. */
function sessionDir(pngFile: string): string {
    const parts = pngFile.split('/');
    const dir   = parts.length === 2 ? path.join(WORKSPACE_DIR, parts[0]) : WORKSPACE_DIR;
    const abs   = path.resolve(dir);
    if (!abs.startsWith(path.resolve(WORKSPACE_DIR))) throw new Error('Path traversal denied');
    return dir;
}

/** Session identifier is "subdir/name" or "name". Resolve to an absolute .json path. */
function resolveSessionPath(sessionId: string): string {
    const parts = sessionId.split('/');
    if (parts.length > 2 || parts.some(p => !p || p === '.' || p === '..')) {
        throw new Error('Invalid session id');
    }
    const safeName  = safeSessionName(parts[parts.length - 1]);
    const safeparts = parts.length === 2 ? [parts[0], safeName] : [safeName];
    const fp  = path.join(WORKSPACE_DIR, ...safeparts) + '.json';
    const abs = path.resolve(fp);
    if (!abs.startsWith(path.resolve(WORKSPACE_DIR))) throw new Error('Path traversal denied');
    return fp;
}

function saveSessionFile(session: SessionData): void {
    const name = safeSessionName(session.name);
    const dir  = sessionDir(session.pngFile);
    fs.writeFileSync(
        path.join(dir, name + '.json'),
        JSON.stringify({ ...session, name }, null, 2),
        'utf8',
    );
}

function loadSessionFile(sessionId: string): SessionData {
    const fp = resolveSessionPath(sessionId);
    if (!fs.existsSync(fp)) throw new Error(`Session not found: ${sessionId}`);
    return JSON.parse(fs.readFileSync(fp, 'utf8')) as SessionData;
}

function deleteSessionFile(sessionId: string): void {
    const fp = resolveSessionPath(sessionId);
    if (fs.existsSync(fp)) fs.unlinkSync(fp);
}

// ── HTML UI ──────────────────────────────────────────────────────────────────

function buildHtml(): string {
    const cfg = defaultConfig;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DECLASSIFIED \u2014 Map SVG Builder</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:     #0e0e0e;
  --panel:  #161616;
  --border: #252525;
  --text:   #c8c8c8;
  --muted:  #555;
  --accent: #5ba4e6;
  --green:  #4caf50;
  --red:    #f44336;
  --orange: #f0a500;
  --yellow: #f0c040;
  --row-bg: #1c1c1c;
}

body {
  display: flex; height: 100vh; overflow: hidden;
  background: var(--bg); color: var(--text);
  font: 13px/1.5 'Segoe UI', system-ui, sans-serif;
}

/* ─── LEFT PANEL ─────────────────────────────────────────── */
#panel {
  width: 300px; flex-shrink: 0; display: flex;
  flex-direction: column; background: var(--panel);
  border-right: 1px solid var(--border); overflow: hidden;
}
#panel-header {
  padding: 10px 14px 8px; border-bottom: 1px solid var(--border); flex-shrink: 0;
  display: flex; align-items: center;
}
#panel-header h1 { font-size: 13.5px; font-weight: 600; color: #eee; flex: 1; }
#btn-undo, #btn-redo {
  background: transparent; border: 1px solid var(--border); color: var(--muted);
  border-radius: 4px; padding: 2px 7px; font-size: 14px; cursor: pointer; margin-left: 4px;
}
#btn-undo:hover:not(:disabled), #btn-redo:hover:not(:disabled) { background: var(--border); color: #eee; }
#btn-undo:disabled, #btn-redo:disabled { opacity: 0.28; cursor: not-allowed; }
#preview.is-panning, #preview.is-panning * { cursor: grabbing !important; }

/* workspace / session */
#workspace-section {
  padding: 8px 14px 10px; border-bottom: 1px solid var(--border);
  flex-shrink: 0; background: #111;
}
.ws-row { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; }
.ws-label {
  font-size: 10px; color: var(--muted); width: 46px; flex-shrink: 0;
  text-transform: uppercase; letter-spacing: 0.04em;
}
#png-picker, #session-picker, #session-name {
  flex: 1; min-width: 0; background: var(--row-bg); border: 1px solid var(--border);
  color: var(--text); font-size: 11.5px; padding: 4px 6px; border-radius: 3px;
}
#png-picker, #session-picker { cursor: pointer; }
#session-name::placeholder { color: var(--muted); }
.ws-actions { display: flex; gap: 5px; margin-top: 2px; }
.ws-btn {
  flex: 1; padding: 5px 8px; background: var(--row-bg);
  border: 1px solid var(--border); border-radius: 3px;
  color: var(--muted); font-size: 11px; cursor: pointer; text-align: center;
}
.ws-btn:hover { border-color: var(--accent); color: var(--accent); }
.ws-btn.danger:hover { border-color: var(--red); color: var(--red); }
#btn-refresh-ws { flex: 0; padding: 5px 9px; font-size: 13px; }

/* mode toggle */
#mode-toggle {
  display: flex; padding: 8px 14px;
  border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 0;
}
.mode-btn {
  flex: 1; padding: 6px 4px; font-size: 11.5px; background: var(--row-bg);
  border: 1px solid var(--border); color: var(--muted);
  cursor: pointer; text-align: center; transition: all 0.15s;
}
.mode-btn + .mode-btn { border-left: none; border-radius: 0; }
.mode-btn:first-child { border-radius: 4px 0 0 4px; }
.mode-btn:last-child  { border-radius: 0 4px 4px 0; }
.mode-btn.active { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 600; }

#panel-body { flex: 1; overflow-y: auto; overflow-x: hidden; }

/* collapsible sections */
details { border-bottom: 1px solid var(--border); }
details summary {
  list-style: none; padding: 9px 14px;
  font-size: 12px; font-weight: 600; color: #ccc;
  cursor: pointer; user-select: none;
  display: flex; align-items: center; gap: 6px;
}
details summary::-webkit-details-marker { display: none; }
details summary::before {
  content: '\u25b6'; font-size: 9px; color: var(--muted);
  transition: transform 0.18s; flex-shrink: 0;
}
details[open] summary::before { transform: rotate(90deg); }
details summary:hover { background: #1c1c1c; }
.section-body { padding: 8px 14px 12px; }

/* sliders */
.slider-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.slider-label { width: 120px; flex-shrink: 0; font-size: 12px; color: #aaa; line-height: 1.3; }
.slider-hint  { font-size: 10px; color: var(--muted); display: block; }
input[type=range] { flex: 1; accent-color: var(--accent); height: 3px; cursor: pointer; }
.slider-val {
  width: 34px; text-align: right; font-family: monospace;
  font-size: 11.5px; color: var(--accent); flex-shrink: 0;
}

/* layer rows */
.layer-row {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 8px; border-radius: 4px; margin-bottom: 3px;
  background: var(--row-bg); border: 1px solid var(--border);
}
.layer-swatch { width: 12px; height: 12px; border-radius: 2px; flex-shrink: 0; }
.layer-name   { flex: 1; font-size: 12px; color: #ccc; }
.layer-count  { font-family: monospace; font-size: 11px; color: var(--muted); min-width: 24px; text-align: right; }
.layer-toggle {
  width: 26px; height: 15px; border-radius: 8px; background: var(--muted);
  position: relative; cursor: pointer; flex-shrink: 0; transition: background 0.2s;
}
.layer-toggle.on { background: var(--accent); }
.layer-toggle::after {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: 11px; height: 11px; border-radius: 50%; background: #fff; transition: left 0.2s;
}
.layer-toggle.on::after { left: 13px; }

/* annotation chips */
.chip {
  display: flex; align-items: center; gap: 6px; padding: 4px 7px;
  border-radius: 4px; margin-bottom: 3px;
  background: var(--row-bg); border: 1px solid var(--border); font-size: 11.5px;
}
.chip-swatch { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
.chip-label  { flex: 1; color: #bbb; }
.chip-del {
  background: none; border: none; color: var(--muted);
  cursor: pointer; font-size: 15px; padding: 0 1px; line-height: 1;
}
.chip-del:hover { color: var(--red); }

/* status bar */
#status-bar {
  padding: 7px 14px; border-top: 1px solid var(--border);
  flex-shrink: 0; display: flex; align-items: center; gap: 8px;
}
#status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; }
#status-dot.busy  { background: var(--orange); }
#status-dot.error { background: var(--red); }
#status-msg  { flex: 1; font-size: 11px; color: var(--muted); }
#status-time { font-family: monospace; font-size: 11px; color: var(--muted); }

/* export footer */
#export-bar {
  padding: 8px 14px; flex-shrink: 0;
  border-top: 1px solid var(--border); background: #0f1620;
}
#btn-export {
  width: 100%; padding: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;
  background: #1a3a5c; border: 1px solid #2a5a8c; border-radius: 5px;
  color: #7ecfff; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s;
}
#btn-export:hover:not(:disabled) { background: #1e4a70; border-color: #4a9adf; color: #aadeff; }
#btn-export:disabled { opacity: 0.5; cursor: not-allowed; }
#btn-gen-walls {
  width: 100%; padding: 7px 10px; margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 5px;
  background: #1e3a1e; border: 1px solid #3a7a3a; border-radius: 5px;
  color: #7ecf7e; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s;
}
#btn-gen-walls:hover:not(:disabled) { background: #254d25; border-color: #5aaf5a; color: #adfaad; }
#btn-gen-walls:disabled { opacity: 0.5; cursor: not-allowed; }

/* ─── PREVIEW ────────────────────────────────────────────── */
#preview {
  flex: 1; overflow: auto; background: #0a0a0a; padding: 16px;
  display: flex; align-items: flex-start; justify-content: flex-start;
}
#zoom-root { display: inline-block; line-height: 0; }
#canvas-wrap { position: relative; display: inline-block; flex-shrink: 0; }
#map-img { display: none; image-rendering: pixelated; }

#map-placeholder {
  width: 380px; height: 260px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 10px;
  border: 2px dashed var(--border); border-radius: 8px;
  color: var(--muted); font-size: 12px; text-align: center; padding: 20px;
}
#map-placeholder .ph-title { font-size: 14px; color: #666; }
#map-placeholder .ph-hint  { font-size: 10px; font-family: monospace; color: #3a3a3a; margin-top: 4px; }

#svg-overlay { position: absolute; inset: 0; pointer-events: none; }
#svg-overlay svg { width: 100%; height: 100%; }
#svg-overlay #background { display: none !important; }

/* select mode */
#svg-overlay.select-mode { pointer-events: auto; cursor: default; }
#svg-overlay.select-mode svg { pointer-events: auto; overflow: visible; }
/* Give all paths a transparent fill so stroke-only paths are still click/hover-hittable */
#svg-overlay.select-mode path,
#svg-overlay.select-mode polygon {
  fill: rgba(0,0,0,0) !important; pointer-events: all !important; cursor: grab;
}
/* Outline paths stay stroke-only even in select mode (no fill wash) */
#svg-overlay.select-mode #outlines path,
#svg-overlay.select-mode #outlines polygon { fill: none !important; pointer-events: stroke !important; }
/* Hover highlight */
#svg-overlay.select-mode path:hover,
#svg-overlay.select-mode polygon:hover {
  filter: drop-shadow(0 0 5px rgba(91,164,230,0.9));
  stroke: #5ba4e6 !important; stroke-width: 2.5 !important; stroke-opacity: 0.9 !important;
  fill: rgba(91,164,230,0.08) !important;
}
#svg-overlay.select-mode #outlines path:hover,
#svg-overlay.select-mode #outlines polygon:hover { fill: none !important; }
/* Non-interactive zones in select mode */
#svg-overlay.select-mode #pending path,
#svg-overlay.select-mode #pending polygon { pointer-events: none !important; cursor: default; }
#svg-overlay.select-mode #background { pointer-events: none; }
/* Selection & drag visual states */
#svg-overlay .path-selected { filter: drop-shadow(0 0 6px #ffe066) !important; stroke: #ffe066 !important; stroke-width: 2 !important; }
#svg-overlay .path-dragging { cursor: grabbing !important; filter: drop-shadow(0 0 8px rgba(255,160,0,0.9)) !important; opacity: 0.85; }

/* vertex edit mode */
/* draw mode */
#svg-overlay.draw-mode { pointer-events: auto; cursor: crosshair; }
#svg-overlay.draw-mode svg { pointer-events: auto; overflow: visible; }
#svg-overlay.draw-mode path,
#svg-overlay.draw-mode polygon { pointer-events: none !important; }
.draw-preview-line { stroke: #ffe066; stroke-width: 1.5; stroke-dasharray: 5 3; fill: none; }
.draw-rubber-band  { stroke: rgba(255,224,102,0.55); stroke-width: 1; stroke-dasharray: 3 2; fill: none; }
.draw-preview-pt   { fill: #ffe066; stroke: #1f1f1f; stroke-width: 1; }
.draw-preview-pt.snap-target { fill: #ff4444; stroke: #fff; stroke-width: 1.5; }

/* vertex edit mode */
#svg-overlay.vertex-mode { pointer-events: auto; cursor: default; }
#svg-overlay.vertex-mode svg { pointer-events: auto; overflow: visible; }
#svg-overlay.vertex-mode path,
#svg-overlay.vertex-mode polygon {
  fill: rgba(0,0,0,0) !important; pointer-events: all !important; cursor: pointer;
}
#svg-overlay.vertex-mode #outlines path,
#svg-overlay.vertex-mode #outlines polygon { fill: none !important; pointer-events: stroke !important; }
#svg-overlay.vertex-mode path:hover,
#svg-overlay.vertex-mode polygon:hover {
  filter: drop-shadow(0 0 4px rgba(176,123,232,0.8));
  stroke: #b07be8 !important; stroke-width: 2 !important; stroke-opacity: 0.7 !important;
}
#svg-overlay.vertex-mode #node-editor-layer path,
#svg-overlay.vertex-mode #node-editor-layer circle,
#svg-overlay.vertex-mode #node-editor-layer line {
  pointer-events: all !important; cursor: default;
}
#svg-overlay.vertex-mode #node-editor-layer path:hover { filter: none; stroke: none !important; }
#svg-overlay.vertex-mode #pending path,
#svg-overlay.vertex-mode #pending polygon { pointer-events: none !important; cursor: default; }
/* node editor handles — styled as SVG elements via page CSS */
.node-handle {
  fill: #4faeff; stroke: #fff; stroke-width: 1.5px;
  cursor: grab; pointer-events: all;
  transition: fill 0.1s;
}
.node-handle:hover { fill: #90d0ff; }
.node-handle.node-dragging { fill: #ff9900 !important; cursor: grabbing !important; }
.node-handle-active { fill: #ffd166 !important; stroke: #111 !important; stroke-width: 1.8px; }
.node-segment {
  stroke: rgba(255,153,0,0.42);
  stroke-width: 1.2;
  pointer-events: stroke;
  cursor: copy;
}
.node-segment:hover { stroke: rgba(255,194,102,0.9); }
.node-insert-marker {
  fill: rgba(255,209,102,0.9);
  stroke: #1f1f1f;
  stroke-width: 1;
  pointer-events: none;
}
#svg-overlay #pending path, #svg-overlay #pending polygon {
  fill: rgba(255,220,40,0.22); stroke: #ffe066; stroke-width: 1.5;
  animation: fadeIn 0.3s ease;
}
#svg-overlay #pending.outline path, #svg-overlay #pending.outline polygon {
  fill: none; stroke: #ffe066; stroke-width: 3; stroke-dasharray: 7 3;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.subtract { fill: #000 !important; mix-blend-mode: destination-out; }
#inaccessible, #stairs { isolation: isolate; }

#busy-veil {
  position: absolute; inset: 0; background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  color: var(--orange); font-size: 13px; letter-spacing: 0.05em;
  opacity: 0; pointer-events: none; transition: opacity 0.15s;
}
#busy-veil.show { opacity: 1; }

.ping-ring {
  position: fixed; width: 40px; height: 40px;
  margin-left: -20px; margin-top: -20px;
  border-radius: 50%; border: 2px solid var(--accent);
  pointer-events: none; animation: sonar 0.65s ease-out forwards;
}
@keyframes sonar {
  0%   { transform: scale(0.1); opacity: 1; }
  100% { transform: scale(4.5); opacity: 0; }
}

/* floating panel */
#float-panel {
  position: fixed; width: 252px;
  background: #1a1a1a; border: 1px solid #333;
  border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.75);
  padding: 12px; z-index: 9999; display: none;
}
#float-panel.visible { display: block; }
#float-panel h3 {
  font-size: 12px; font-weight: 600; color: #ddd; margin-bottom: 10px;
  cursor: grab; user-select: none; display: flex; align-items: center; gap: 5px;
  padding-bottom: 8px; border-bottom: 1px solid var(--border);
}
#float-panel h3::before {
  content: '\u205e\u205e'; font-size: 9px; color: var(--muted); letter-spacing: 3px; flex-shrink: 0;
}
#float-panel h3:active { cursor: grabbing; }
.fp-row { margin-bottom: 9px; }
.fp-label {
  font-size: 10.5px; color: var(--muted); margin-bottom: 4px;
  text-transform: uppercase; letter-spacing: 0.05em;
}
.fp-btns { display: flex; gap: 5px; }
.fp-btn {
  flex: 1; padding: 5px 6px; background: var(--row-bg);
  border: 1px solid var(--border); border-radius: 4px;
  color: var(--muted); font-size: 11.5px; cursor: pointer; text-align: center;
}
.fp-btn:hover { border-color: #444; color: var(--text); }
.fp-btn.active     { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 600; }
.fp-btn.active-sub { background: #b22; border-color: #c33; color: #fff; font-weight: 600; }
.fp-actions { display: flex; gap: 6px; margin-top: 10px; }
.fp-confirm {
  flex: 1; padding: 6px; background: var(--green); border: none;
  border-radius: 4px; color: #000; font-size: 12px; font-weight: 600; cursor: pointer;
}
.fp-confirm:hover { filter: brightness(1.1); }
.fp-discard {
  padding: 6px 10px; background: none; border: 1px solid var(--border);
  border-radius: 4px; color: var(--muted); font-size: 12px; cursor: pointer;
}
.fp-discard:hover { color: var(--text); }
.fp-current { font-size: 11px; color: #888; margin-bottom: 8px; }
.fp-layer-btns { display: flex; flex-wrap: wrap; gap: 4px; }
.fp-layer-btn {
  padding: 4px 8px; background: var(--row-bg); border: 1px solid var(--border);
  border-radius: 3px; color: var(--muted); font-size: 11px; cursor: pointer;
}
.fp-layer-btn:hover { border-color: #444; color: var(--text); }
.fp-layer-btn.active { background: var(--accent); border-color: var(--accent); color: #000; }
.fp-type-btn {
  flex: 1; padding: 4px 6px; background: var(--row-bg); border: 1px solid var(--border);
  border-radius: 3px; color: var(--muted); font-size: 11px; cursor: pointer;
}
.fp-type-btn:hover { border-color: #444; color: var(--text); }
.fp-type-btn.active      { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 600; }
.fp-type-btn.excl-active { background: #b22; border-color: #c33; color: #fff; font-weight: 600; }

/* debug bitmaps */
.debug-bitmap { margin-bottom: 12px; }
.debug-bitmap h3 {
  font-size: 11px; color: var(--muted); text-transform: uppercase;
  letter-spacing: 0.05em; margin-bottom: 5px;
}
.debug-bitmap img { width: 100%; border-radius: 4px; border: 1px solid var(--border); image-rendering: pixelated; }
.placeholder {
  width: 100%; padding: 18px; text-align: center; color: var(--muted);
  font-size: 11px; background: var(--row-bg); border-radius: 4px; border: 1px dashed var(--border);
}
.debug-load-btn {
  width: 100%; padding: 7px; margin-bottom: 12px;
  background: var(--accent); color: #000; border: none;
  border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #2e2e2e; border-radius: 3px; }
</style>
</head>
<body>

<!-- ═══════════════ LEFT PANEL ═══════════════ -->
<div id="panel">
  <div id="panel-header">
    <h1>Map SVG Builder</h1>
    <button id="btn-undo" title="Undo (Ctrl+Z)" disabled>&#x21A9;</button>
    <button id="btn-redo" title="Redo (Ctrl+Y)" disabled>&#x21AA;</button>
  </div>

  <!-- Workspace / Session -->
  <div id="workspace-section">
    <div class="ws-row">
      <div class="ws-label">Image</div>
      <select id="png-picker"><option value="">— no images found —</option></select>
      <button class="ws-btn" id="btn-refresh-ws" title="Refresh workspace">\u21bb</button>
    </div>
    <div class="ws-row">
      <div class="ws-label">Session</div>
      <input type="text" id="session-name" placeholder="session name\u2026" autocomplete="off">
    </div>
    <div class="ws-actions">
      <button class="ws-btn" id="btn-save-session">\ud83d\udcbe&nbsp; Save progress</button>
      <select id="session-picker" style="flex:1;min-width:0">
        <option value="">Load session\u2026</option>
      </select>
    </div>
  </div>

  <!-- Mode toggle -->
  <div id="mode-toggle">
    <button class="mode-btn active" id="btn-fill-mode">\u2728&nbsp; Magic Wand</button>
    <button class="mode-btn" id="btn-select-mode">\u26f6&nbsp; Select / Move</button>
    <button class="mode-btn" id="btn-vertex-mode">\u25ce&nbsp; Vertex Edit</button>
    <button class="mode-btn" id="btn-draw-mode">&#x270f;&nbsp; Draw Shape</button>
  </div>

  <!-- Select mode hint banner -->
  <div id="select-hint" style="display:none;padding:5px 14px 6px;background:rgba(91,164,230,0.07);
       border-bottom:1px solid rgba(91,164,230,0.15);flex-shrink:0">
    <div style="font-size:10.5px;color:#7bb8e8;line-height:1.6">
      <b>Click</b> a path to reassign or exclude it<br>
      <b>Drag</b> a path to move its position
    </div>
  </div>

  <!-- Vertex Edit hint banner -->
  <div id="vertex-hint" style="display:none;padding:5px 14px 6px;background:rgba(150,91,230,0.07);
       border-bottom:1px solid rgba(150,91,230,0.15);flex-shrink:0">
    <div style="font-size:10.5px;color:#b07be8;line-height:1.6">
      <b>Click</b> any path to activate node editing<br>
      <b>Drag</b> points to move, <b>right-click</b> a point to delete, <b>hover/click</b> a line to add
    </div>
  </div>

  <!-- Draw Shape hint banner -->
  <div id="draw-hint" style="display:none;padding:5px 14px 6px;background:rgba(255,224,102,0.06);
       border-bottom:1px solid rgba(255,224,102,0.18);flex-shrink:0">
    <div style="font-size:10.5px;color:#ffe066;line-height:1.6">
      <b>Click</b> to place vertices &nbsp;\u00b7&nbsp; <b>Enter</b> or click first point to close<br>
      <b>Right-click</b> to remove last &nbsp;\u00b7&nbsp; <b>Esc</b> to cancel
    </div>
  </div>

  <!-- Node controls bar (visible while editing a path's vertices) -->
  <div id="node-controls" style="display:none;padding:5px 14px 6px;
       background:rgba(255,153,0,0.08);border-bottom:1px solid rgba(255,153,0,0.2);flex-shrink:0">
    <div style="display:flex;align-items:center;gap:8px">
      <span style="font-size:10.5px;color:#ffa724;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
        Editing: <b id="node-edit-group-label" style="color:#ffcc70"></b>
      </span>
      <button id="node-save-btn" style="padding:3px 10px;font-size:11px;background:#ff9900;border:none;
              color:#000;border-radius:3px;cursor:pointer;font-weight:600">Save</button>
      <button id="node-cancel-btn" style="padding:3px 10px;font-size:11px;background:rgba(255,255,255,0.1);
              border:1px solid #555;color:#ccc;border-radius:3px;cursor:pointer">Cancel</button>
    </div>
  </div>

  <div id="panel-body">

    <!-- SVG Generation -->
    <details open>
      <summary>SVG Generation</summary>
      <div class="section-body">
        <div class="slider-row">
          <div class="slider-label">Wall sensitivity<span class="slider-hint">min brightness = wall</span></div>
          <input type="range" id="wallThreshold" min="10" max="200" step="1" value="${cfg.wallThreshold}">
          <div class="slider-val" id="wallThreshold_v">${cfg.wallThreshold}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Outer boundary<span class="slider-hint">ring luminance cutoff</span></div>
          <input type="range" id="boundaryThreshold" min="50" max="240" step="1" value="${cfg.boundaryThreshold}">
          <div class="slider-val" id="boundaryThreshold_v">${cfg.boundaryThreshold}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Max resolution<span class="slider-hint">longest edge px</span></div>
          <input type="range" id="maxSize" min="256" max="4096" step="256" value="${cfg.maxSize}">
          <div class="slider-val" id="maxSize_v">${cfg.maxSize}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Noise filter<span class="slider-hint">min blob size (turd)</span></div>
          <input type="range" id="wallTurd" min="0" max="50" step="1" value="${cfg.wallTurd}">
          <div class="slider-val" id="wallTurd_v">${cfg.wallTurd}</div>
        </div>
        <div style="font-size:11px;color:var(--muted);padding-top:2px">
          Walls: <span id="wall-count" style="color:var(--accent);font-family:monospace">\u2014</span>
          &nbsp;\u00b7&nbsp; Thick: <span id="thick-count" style="color:var(--accent);font-family:monospace">\u2014</span>
          &nbsp;\u00b7&nbsp; Unclassified: <span id="unclass-count" style="color:var(--yellow);font-family:monospace">\u2014</span>
        </div>
        <button id="btn-gen-walls" disabled>&#x2699;&#xFE0F;&nbsp; Generate Walls</button>
      </div>
    </details>

    <!-- Layers & Regions -->
    <details open>
      <summary>Layers &amp; Regions</summary>
      <div class="section-body">
        <div class="slider-row" style="margin-bottom:10px">
          <div class="slider-label">Map opacity</div>
          <input type="range" id="img-opacity" min="0" max="100" step="1" value="100">
          <div class="slider-val" id="img-opacity-v">100%</div>
        </div>

        <div class="layer-row">
          <div class="layer-swatch" style="background:#ff4444;border:1px solid #ff6666"></div>
          <div class="layer-name">Outline</div>
          <div class="layer-count" id="lc-outlines">\u2014</div>
          <div class="layer-toggle on" data-layer="outlines"></div>
        </div>
        <div class="layer-row">
          <div class="layer-swatch" style="background:#888"></div>
          <div class="layer-name">Walls</div>
          <div class="layer-count" id="lc-walls">\u2014</div>
          <div class="layer-toggle on" data-layer="walls"></div>
        </div>
        <div class="layer-row">
          <div class="layer-swatch" style="background:#aaa"></div>
          <div class="layer-name">Thick Walls</div>
          <div class="layer-count" id="lc-thicker">\u2014</div>
          <div class="layer-toggle on" data-layer="thickerWalls"></div>
        </div>
        <div class="layer-row">
          <div class="layer-swatch" style="background:var(--yellow)"></div>
          <div class="layer-name">Unclassified</div>
          <div class="layer-count" id="lc-unclassified">\u2014</div>
          <div class="layer-toggle on" data-layer="unclassified"></div>
        </div>
        <div class="layer-row">
          <div class="layer-swatch" style="background:rgba(0,40,100,0.8);border:1px solid #336"></div>
          <div class="layer-name">Inaccessible</div>
          <div class="layer-count" id="lc-inaccessible">\u2014</div>
          <div class="layer-toggle on" data-layer="inaccessible"></div>
        </div>
        <div class="layer-row">
          <div class="layer-swatch" style="background:#00ccff"></div>
          <div class="layer-name">Stairs</div>
          <div class="layer-count" id="lc-stairs">\u2014</div>
          <div class="layer-toggle on" data-layer="stairs"></div>
        </div>

        <div style="margin-top:10px;margin-bottom:5px;font-size:10.5px;font-weight:700;
                    text-transform:uppercase;letter-spacing:0.06em;color:var(--muted)">
          Annotations <span id="annotation-count" style="color:var(--accent);font-weight:normal;text-transform:none">(0)</span>
        </div>
        <div id="annotation-list"></div>
      </div>
    </details>

    <!-- Advanced -->
    <details>
      <summary>Advanced</summary>
      <div class="section-body">
        <div class="slider-row">
          <div class="slider-label">Aspect filter<span class="slider-hint">min long/short ratio</span></div>
          <input type="range" id="aspectThreshold" min="1" max="20" step="0.5" value="${cfg.aspectThreshold}">
          <div class="slider-val" id="aspectThreshold_v">${cfg.aspectThreshold}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Stroke width<span class="slider-hint">thin vs thick wall px</span></div>
          <input type="range" id="strokeThreshold" min="1" max="40" step="0.5" value="${cfg.strokeThreshold}">
          <div class="slider-val" id="strokeThreshold_v">${cfg.strokeThreshold}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Min path area<span class="slider-hint">px\u00b2 drop threshold</span></div>
          <input type="range" id="minPathArea" min="0" max="500" step="10" value="${cfg.minPathArea}">
          <div class="slider-val" id="minPathArea_v">${cfg.minPathArea}</div>
        </div>
        <div class="slider-row">
          <div class="slider-label">Min unclassified<span class="slider-hint">px\u00b2 to keep for review</span></div>
          <input type="range" id="minUnclassified" min="0" max="5000" step="50" value="${cfg.minUnclassified}">
          <div class="slider-val" id="minUnclassified_v">${cfg.minUnclassified}</div>
        </div>

        <div style="margin-top:10px">
          <button class="debug-load-btn" id="load-debug">Load Debug Bitmaps</button>
          <div class="debug-bitmap"><h3>Interior Mask</h3><div class="placeholder" id="dbg-mask">Not loaded</div></div>
          <div class="debug-bitmap"><h3>Masked Image</h3><div class="placeholder" id="dbg-masked">Not loaded</div></div>
          <div class="debug-bitmap"><h3>Pass 1 Input</h3><div class="placeholder" id="dbg-negmask">Not loaded</div></div>
          <div class="debug-bitmap"><h3>Pass 2 Input</h3><div class="placeholder" id="dbg-wallbmp">Not loaded</div></div>
        </div>
      </div>
    </details>

  </div><!-- /panel-body -->

  <div id="status-bar">
    <div id="status-dot"></div>
    <div id="status-msg">Select an image to begin\u2026</div>
    <div id="status-time"></div>
  </div>

  <div id="export-bar">
    <button id="btn-export">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a.5.5 0 0 1 .5.5v7.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 9.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M.5 13a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
      </svg>
      Export SVG (512\u00d7512)
    </button>
  </div>
</div><!-- /panel -->

<!-- ═══════════════ PREVIEW ═══════════════ -->
<div id="preview">
  <div id="zoom-root">
    <div id="canvas-wrap">
      <div id="map-placeholder">
        <div class="ph-title">No image loaded</div>
        <div>Select a PNG from the dropdown above</div>
        <div class="ph-hint">Drop images into: scripts/map-workspace/</div>
      </div>
      <img id="map-img" alt="map">
      <div id="svg-overlay"></div>
      <div id="busy-veil">Processing\u2026</div>
    </div>
  </div>
</div>

<!-- ═══════════════ FLOATING PANEL ═══════════════ -->
<div id="float-panel">
  <!-- fill variant -->
  <div id="fp-fill">
    <h3>Magic Wand</h3>
    <div class="fp-row">
      <div class="fp-label">Fill sensitivity</div>
      <div style="display:flex;align-items:center;gap:6px">
        <input type="range" id="fp-sensitivity" min="10" max="255" step="1" value="${cfg.wallThreshold}"
               style="flex:1;accent-color:var(--accent);height:3px;cursor:pointer">
        <div id="fp-sensitivity-v" style="width:28px;text-align:right;font-family:monospace;font-size:11.5px;color:var(--accent)">${cfg.wallThreshold}</div>
      </div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Edge offset</div>
      <div style="display:flex;align-items:center;gap:6px">
        <input type="range" id="fp-offset" min="-15" max="15" step="1" value="0"
               style="flex:1;accent-color:var(--accent);height:3px;cursor:pointer">
        <div id="fp-offset-v" style="width:28px;text-align:right;font-family:monospace;font-size:11.5px;color:var(--accent)">0</div>
      </div>
      <div style="font-size:10px;color:var(--muted);margin-top:2px">(&#8722;) shrink &nbsp;/&nbsp; (+) expand</div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Layer</div>
      <div class="fp-layer-btns">
        <button class="fp-btn" data-wand-group="outlines">Outlines</button>
        <button class="fp-btn" data-wand-group="walls">Walls</button>
        <button class="fp-btn" data-wand-group="thickerWalls">Thick Walls</button>
        <button class="fp-btn active" data-wand-group="inaccessible">Inaccessible</button>
        <button class="fp-btn" data-wand-group="stairs">Stairs</button>
        <button class="fp-btn" data-wand-group="unclassified">Unclassified</button>
      </div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Mode</div>
      <div class="fp-btns">
        <button class="fp-btn active" id="fp-add">Add \u271a</button>
        <button class="fp-btn" id="fp-sub">Subtract \u2716</button>
      </div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Type</div>
      <div style="display:flex;gap:5px">
        <button class="fp-type-btn active" id="fp-type-fill">\u25a3 Fill</button>
        <button class="fp-type-btn" id="fp-type-outline">\u25a1 Outline</button>
      </div>
    </div>
    <div class="fp-row" id="fp-fill-line-style-row" style="display:none">
      <div class="fp-label">Line style</div>
      <div style="display:flex;gap:5px">
        <button class="fp-type-btn active" id="fp-fill-ls-solid">\u2014 Solid</button>
        <button class="fp-type-btn" id="fp-fill-ls-dashed">- - Dashed</button>
      </div>
    </div>
    <div class="fp-actions">
      <button class="fp-confirm" id="fp-fill-confirm">Confirm</button>
      <button class="fp-discard" id="fp-fill-discard">Discard</button>
    </div>
  </div>

  <!-- draw variant -->
  <div id="fp-draw" style="display:none">
    <h3>New Shape</h3>
    <div class="fp-row">
      <div class="fp-label">Layer</div>
      <div class="fp-layer-btns">
        <button class="fp-btn active" data-draw-group="outlines">Outlines</button>
        <button class="fp-btn" data-draw-group="walls">Walls</button>
        <button class="fp-btn" data-draw-group="thickerWalls">Thick Walls</button>
        <button class="fp-btn" data-draw-group="inaccessible">Inaccessible</button>
        <button class="fp-btn" data-draw-group="stairs">Stairs</button>
        <button class="fp-btn" data-draw-group="unclassified">Unclassified</button>
      </div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Line style</div>
      <div style="display:flex;gap:5px">
        <button class="fp-type-btn active" id="fp-draw-ls-solid">\u2014 Solid</button>
        <button class="fp-type-btn" id="fp-draw-ls-dashed">- - Dashed</button>
      </div>
    </div>
    <div class="fp-actions">
      <button class="fp-confirm" id="fp-draw-confirm">Add Shape</button>
      <button class="fp-discard" id="fp-draw-discard">Discard</button>
    </div>
  </div>

  <!-- select/reassign/exclude variant -->
  <div id="fp-select" style="display:none">
    <h3>Edit path</h3>
    <div class="fp-current" id="fp-select-current"></div>
    <div class="fp-row">
      <div class="fp-label">Treat as</div>
      <div style="display:flex;gap:5px">
        <button class="fp-type-btn active" id="fp-sel-type-line">\u2571 Line</button>
        <button class="fp-type-btn" id="fp-sel-type-fill">\u25a3 Fill</button>
        <button class="fp-type-btn" id="fp-sel-type-exclude">\u2205 Exclude</button>
      </div>
    </div>
    <div class="fp-row" id="fp-sel-layer-row">
      <div class="fp-label">Move to layer</div>
      <div class="fp-layer-btns">
        <button class="fp-layer-btn" data-togroup="outlines">Outlines</button>
        <button class="fp-layer-btn" data-togroup="walls">Walls</button>
        <button class="fp-layer-btn" data-togroup="thickerWalls">Thick Walls</button>
        <button class="fp-layer-btn" data-togroup="unclassified">Unclassified</button>
        <button class="fp-layer-btn" data-togroup="inaccessible">Inaccessible</button>
        <button class="fp-layer-btn" data-togroup="stairs">Stairs</button>
      </div>
    </div>
    <div id="fp-excl-hint" style="display:none;font-size:10.5px;color:var(--muted);line-height:1.5;padding:4px 0 8px">
      Removes path from all groups. Its outline is kept in Outlines for review.
    </div>
    <div class="fp-row" id="fp-sel-line-style-row" style="display:none">
      <div class="fp-label">Line style</div>
      <div style="display:flex;gap:5px">
        <button class="fp-type-btn active" id="fp-sel-ls-solid">\u2014 Solid</button>
        <button class="fp-type-btn" id="fp-sel-ls-dashed">- - Dashed</button>
      </div>
    </div>
    <div class="fp-actions">
      <button class="fp-confirm" id="fp-select-confirm">Confirm</button>
      <button class="fp-discard" id="fp-select-discard">Discard</button>
    </div>
  </div>
</div>

<script>
(function () {
  'use strict';

  // ── module state ─────────────────────────────────────────────────────────
  let currentPngLoaded = false;
  let annotations      = []; // AnnotationServer[]
  let interactionMode  = 'fill'; // 'fill' | 'select' | 'vertex' | 'draw'
  let _undoStack       = []; // JSON snapshots (max 50) for Ctrl+Z
  let _redoStack       = []; // JSON snapshots for Ctrl+Y
  let _lastStats       = { outlines: 0, walls: 0, thickerWalls: 0, unclassified: 0 };
  // draw-shape mode state
  let _drawPoints      = []; // [{x, y}] in current SVG user units
  let _drawCursor      = null; // rubber-band cursor pos
  let _drawCleanup     = null;

  // ── slider wiring ────────────────────────────────────────────────────────
  const SLIDER_IDS = [
    'boundaryThreshold','wallThreshold','wallTurd',
    'strokeThreshold','aspectThreshold','minPathArea',
    'minUnclassified','maxSize',
  ];
  function getConfig() {
    const c = {};
    for (const k of SLIDER_IDS) c[k] = Number(document.getElementById(k).value);
    return c;
  }
  for (const k of SLIDER_IDS) {
    const el  = document.getElementById(k);
    const val = document.getElementById(k + '_v');
    el.addEventListener('input', () => { val.textContent = el.value; scheduleProcess(); });
  }

  // ── map image opacity ────────────────────────────────────────────────────
  const mapImg = document.getElementById('map-img');
  document.getElementById('img-opacity').addEventListener('input', function () {
    document.getElementById('img-opacity-v').textContent = this.value + '%';
    mapImg.style.opacity = String(Number(this.value) / 100);
  });

  // ── scroll-to-zoom ───────────────────────────────────────────────────────
  let zoom = 1, baseW = 0, baseH = 0;
  function captureBase() {
    if (!baseW && mapImg.naturalWidth > 0) {
      baseW = mapImg.naturalWidth;
      baseH = mapImg.naturalHeight;
      // Auto-fit: scale down so the image fills (but doesn't overflow) the preview pane
      const fitZoom = Math.min(
        (preview.clientWidth  - 8) / baseW,
        (preview.clientHeight - 8) / baseH,
        1
      );
      zoom = fitZoom;
      mapImg.style.maxWidth = 'none';
      mapImg.style.width  = Math.round(baseW * zoom) + 'px';
      mapImg.style.height = Math.round(baseH * zoom) + 'px';
    }
  }
  mapImg.addEventListener('load', captureBase);
  const preview = document.getElementById('preview');
  preview.addEventListener('wheel', e => {
    e.preventDefault();
    captureBase();
    if (!baseW) return;
    const factor  = e.deltaY < 0 ? 1.1 : (1 / 1.1);
    const newZoom = Math.max(0.1, Math.min(8, zoom * factor));
    const pRect   = preview.getBoundingClientRect();
    const cx      = e.clientX - pRect.left + preview.scrollLeft;
    const cy      = e.clientY - pRect.top  + preview.scrollTop;
    const ratio   = newZoom / zoom;
    zoom = newZoom;
    mapImg.style.maxWidth = 'none';
    mapImg.style.width    = Math.round(baseW * zoom) + 'px';
    mapImg.style.height   = Math.round(baseH * zoom) + 'px';
    preview.scrollLeft = cx * ratio - (e.clientX - pRect.left);
    preview.scrollTop  = cy * ratio - (e.clientY - pRect.top);
    refreshVertexHandleRadius();
  }, { passive: false });

  // ── right-click drag to pan ───────────────────────────────────────────────
  let _panDragging = false, _panStartX = 0, _panStartY = 0;
  let _panScrollX = 0, _panScrollY = 0, _panMoved = false;
  preview.addEventListener('mousedown', e => {
    if (e.button !== 2) return;
    _panDragging = true; _panMoved = false;
    _panStartX = e.clientX; _panStartY = e.clientY;
    _panScrollX = preview.scrollLeft; _panScrollY = preview.scrollTop;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!_panDragging) return;
    const dx = e.clientX - _panStartX;
    const dy = e.clientY - _panStartY;
    if (!_panMoved && Math.hypot(dx, dy) > 3) {
      _panMoved = true;
      preview.classList.add('is-panning');
    }
    preview.scrollLeft = _panScrollX - dx;
    preview.scrollTop  = _panScrollY - dy;
  });
  document.addEventListener('mouseup', e => {
    if (e.button !== 2 || !_panDragging) return;
    _panDragging = false;
    preview.classList.remove('is-panning');
  });
  preview.addEventListener('contextmenu', e => {
    if (_panMoved) { e.preventDefault(); _panMoved = false; }
  });

  // ── layer toggles ────────────────────────────────────────────────────────
  const layerState = {
    outlines: true, walls: true, thickerWalls: true,
    unclassified: true, inaccessible: true, stairs: true,
  };
  document.querySelectorAll('.layer-toggle[data-layer]').forEach(tog => {
    tog.addEventListener('click', () => {
      const layer = tog.dataset.layer;
      layerState[layer] = !layerState[layer];
      tog.classList.toggle('on', layerState[layer]);
      applyLayerVisibility();
    });
  });
  function applyLayerVisibility() {
    const svg = document.querySelector('#svg-overlay svg');
    if (!svg) return;
    for (const [layer, visible] of Object.entries(layerState)) {
      const g = svg.getElementById(layer);
      if (g) g.style.display = visible ? '' : 'none';
    }
  }

  // ── status helpers ───────────────────────────────────────────────────────
  const dot  = document.getElementById('status-dot');
  const msg  = document.getElementById('status-msg');
  const time = document.getElementById('status-time');
  const veil = document.getElementById('busy-veil');
  function setStatus(state, text, ms) {
    dot.className = state;
    msg.textContent = text;
    time.textContent = ms !== undefined ? ms + ' ms' : '';
    veil.classList.toggle('show', state === 'busy');
  }

  // ── annotation list ──────────────────────────────────────────────────────
  const GROUP_COLORS = {
    inaccessible: 'rgba(0,40,100,0.8)', stairs: '#00ccff',
    walls: '#888', thickerWalls: '#aaa', outlines: '#ff4444', unclassified: '#f0c040',
  };
  function renderAnnotationList() {
    const list  = document.getElementById('annotation-list');
    const fills = annotations.filter(a => a.kind === 'fill');
    document.getElementById('annotation-count').textContent = '(' + annotations.length + ')';
    if (!annotations.length) { list.innerHTML = ''; return; }
    list.innerHTML = annotations.map(a => {
      let col, label;
      if (a.kind === 'fill') {
        col = GROUP_COLORS[a.group] || '#555';
        const ti = a.type === 'outline' ? '\u25a1' : '\u25a3';
        label = (a.mode === 'add' ? '+' : '\u2212') + ' ' + ti + ' ' + a.group;
      } else if (a.kind === 'reassign') {
        col = GROUP_COLORS[a.toGroup] || '#555';
        const ti = (a.type === 'outline' || a.type === 'line') ? '\u25a1' : '\u25a3';
        label = a.fromGroup + ' \u2192 ' + ti + ' ' + a.toGroup;
      } else if (a.kind === 'map-outline') {
        col = '#ff4444';
        label = '\ud83d\udd34 Boundary (' + a.points.length + ' pts' + (a.closed ? ', closed' : '') + ')';
      } else if (a.kind === 'move') {
        col = GROUP_COLORS[a.fromGroup] || '#555';
        label = '\u2195 moved \u00b7 ' + a.fromGroup + ' (\u0394' + a.dx.toFixed(1) + ', \u0394' + a.dy.toFixed(1) + ')';
      } else if (a.kind === 'reshape') {
        col = GROUP_COLORS[a.fromGroup] || '#555';
        label = '\u270e reshaped \u00b7 ' + a.fromGroup;
      } else {
        col = '#555'; label = '\u2205 excl \u00b7 ' + a.fromGroup;
      }
      return '<div class="chip">'
        + '<div class="chip-swatch" style="background:' + col + '"></div>'
        + '<div class="chip-label">' + label + '</div>'
        + '<button class="chip-del" data-id="' + a.id + '" title="Remove">\xd7</button>'
        + '</div>';
    }).join('');
    list.querySelectorAll('.chip-del').forEach(btn =>
      btn.addEventListener('click', e => {
        snapshotForUndo();
        annotations = annotations.filter(a => a.id !== e.currentTarget.dataset.id);
        renderAnnotationList();
        process({ ...getConfig(), skipWalls: true });
      })
    );
    // Update layer counts including annotation fills
    refreshLayerCounts();
  }

  function updateStats(stats) {
    _lastStats = { outlines: stats.outlines, walls: stats.walls, thickerWalls: stats.thickerWalls, unclassified: stats.unclassified };
    document.getElementById('wall-count').textContent      = stats.walls;
    document.getElementById('thick-count').textContent     = stats.thickerWalls;
    document.getElementById('unclass-count').textContent   = stats.unclassified;
    refreshLayerCounts();
  }

  function refreshLayerCounts() {
    const fills = annotations.filter(a => a.kind === 'fill');
    const byGroup = g => fills.filter(a => a.group === g).length;
    const lc = (id, base, extra) => {
      const total = (base || 0) + extra;
      document.getElementById(id).textContent = total || '\u2014';
    };
    lc('lc-outlines',    _lastStats.outlines,      byGroup('outlines'));
    lc('lc-walls',       _lastStats.walls,          byGroup('walls'));
    lc('lc-thicker',     _lastStats.thickerWalls,   byGroup('thickerWalls'));
    lc('lc-unclassified',_lastStats.unclassified,   byGroup('unclassified'));
    lc('lc-inaccessible',0,                          byGroup('inaccessible'));
    lc('lc-stairs',      0,                          byGroup('stairs'));
  }

  // ── workspace & PNG management ───────────────────────────────────────────
  async function loadWorkspace(restoreCurrentPng) {
    try {
      const res  = await fetch('/workspace');
      const data = await res.json();

      // Populate PNG picker — group by subdirectory
      const pp = document.getElementById('png-picker');
      if (data.pngs.length === 0) {
        pp.innerHTML = '<option value="">\u2014 drop PNGs into map-workspace/ \u2014</option>';
      } else {
        const grouped = {};
        for (const f of data.pngs) {
          const parts = f.split('/');
          const grp   = parts.length === 2 ? parts[0] : '';
          const label = parts[parts.length - 1].replace(/\.[^.]+$/, '');
          if (!grouped[grp]) grouped[grp] = [];
          grouped[grp].push({ value: f, label });
        }
        let html = '<option value="">\u2014 select image \u2014</option>';
        for (const [grp, items] of Object.entries(grouped)) {
          if (grp) {
            html += '<optgroup label="' + grp + '">';
            for (const i of items)
              html += '<option value="' + i.value + '">' + grp + ' \u2014 ' + i.label + '</option>';
            html += '</optgroup>';
          } else {
            for (const i of items)
              html += '<option value="' + i.value + '">' + i.label + '</option>';
          }
        }
        pp.innerHTML = html;
      }

      // Populate session picker
      const sp = document.getElementById('session-picker');
      sp.innerHTML = '<option value="">Load session\u2026</option>'
        + data.sessions.map(s => {
            const parts = s.name.split('/');
            const label = parts.length === 2
              ? parts[0] + ' \u2014 ' + parts[1]
              : s.name;
            return '<option value="' + s.name + '">' + label + '</option>';
          }).join('');

      // Restore active PNG if server already has one loaded
      if (restoreCurrentPng && data.currentPng) {
        pp.value = data.currentPng;
        await switchToPng(data.currentPng, /* resetAnnotations */ false);
      }
    } catch (err) {
      setStatus('error', 'Workspace load failed: ' + err.message);
    }
  }

  document.getElementById('btn-refresh-ws').addEventListener('click', () => loadWorkspace(false));

  document.getElementById('png-picker').addEventListener('change', function () {
    if (this.value) switchToPng(this.value, true);
  });

  async function switchToPng(filename, resetAnnotations) {
    setStatus('busy', 'Loading image\u2026');
    try {
      const res = await fetch('/load-png', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'HTTP ' + res.status);
      }

      // Bust the cached /current-image so the <img> reloads
      document.getElementById('map-placeholder').style.display = 'none';
      mapImg.style.display = 'block';
      mapImg.src = '/current-image?v=' + Date.now();
      baseW = 0; baseH = 0; zoom = 1;
      mapImg.style.width = ''; mapImg.style.height = ''; mapImg.style.maxWidth = '';

      if (resetAnnotations) {
        annotations = [];
        _undoStack = []; _redoStack = []; refreshUndoRedoButtons();
        renderAnnotationList();
        // Default session name: "Subdir - MapName" or just "MapName"
        const fParts = filename.split('/');
        const mapBase = fParts[fParts.length - 1].replace(/\.[^.]+$/, '');
        document.getElementById('session-name').value =
          fParts.length === 2 ? fParts[0] + ' - ' + mapBase : mapBase;
      }

      currentPngLoaded = true;
      document.getElementById('btn-gen-walls').disabled = false;
      setStatus('', 'Image loaded \u2014 ' + filename);
      process({ ...getConfig(), skipWalls: true });
    } catch (err) {
      setStatus('error', 'Load failed: ' + err.message);
    }
  }

  // ── session save ─────────────────────────────────────────────────────────
  document.getElementById('btn-save-session').addEventListener('click', async () => {
    const name    = document.getElementById('session-name').value.trim();
    const pngFile = document.getElementById('png-picker').value;
    if (!name)    { setStatus('error', 'Enter a session name first'); return; }
    if (!pngFile) { setStatus('error', 'No image loaded'); return; }
    try {
      const res = await fetch('/save-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, pngFile,
          config:      getConfig(),
          annotations,
          updatedAt:   new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('', 'Session saved: ' + name);
      await loadWorkspace(false); // refresh session picker
    } catch (err) {
      setStatus('error', 'Save failed: ' + err.message);
    }
  });

  // ── session load ─────────────────────────────────────────────────────────
  document.getElementById('session-picker').addEventListener('change', async function () {
    const name = this.value;
    if (!name) return;
    this.value = '';
    try {
      const res = await fetch('/session/' + encodeURIComponent(name));
      if (!res.ok) throw new Error('Session not found');
      const session = await res.json();

      // Switch to session PNG if different
      const pp = document.getElementById('png-picker');
      if (pp.value !== session.pngFile) {
        pp.value = session.pngFile;
        await switchToPng(session.pngFile, false);
      }

      // Restore config sliders
      for (const [key, val] of Object.entries(session.config || {})) {
        const el = document.getElementById(key);
        if (el) {
          el.value = String(val);
          const vEl = document.getElementById(key + '_v');
          if (vEl) vEl.textContent = String(val);
        }
      }

      // Restore annotations
      annotations = Array.isArray(session.annotations) ? session.annotations : [];
      _undoStack = []; _redoStack = []; refreshUndoRedoButtons();
      renderAnnotationList();

      document.getElementById('session-name').value = session.name;
      currentPngLoaded = true;
      document.getElementById('btn-gen-walls').disabled = false;
      setStatus('', 'Session loaded: ' + session.name);
      process({ ...getConfig(), skipWalls: true });
    } catch (err) {
      setStatus('error', 'Load failed: ' + err.message);
    }
  });

  // ── mode toggle ──────────────────────────────────────────────────────────
  const svgOverlay = document.getElementById('svg-overlay');
  document.getElementById('btn-fill-mode').addEventListener('click',   () => setMode('fill'));
  document.getElementById('btn-select-mode').addEventListener('click', () => setMode('select'));
  document.getElementById('btn-vertex-mode').addEventListener('click', () => setMode('vertex'));
  document.getElementById('btn-draw-mode').addEventListener('click',   () => setMode('draw'));

  function setMode(mode) {
    interactionMode = mode;
    document.getElementById('btn-fill-mode').classList.toggle('active',   mode === 'fill');
    document.getElementById('btn-select-mode').classList.toggle('active', mode === 'select');
    document.getElementById('btn-vertex-mode').classList.toggle('active', mode === 'vertex');
    document.getElementById('btn-draw-mode').classList.toggle('active',   mode === 'draw');
    svgOverlay.classList.toggle('select-mode', mode === 'select');
    svgOverlay.classList.toggle('vertex-mode', mode === 'vertex');
    svgOverlay.classList.toggle('draw-mode',   mode === 'draw');
    document.getElementById('select-hint').style.display = mode === 'select' ? '' : 'none';
    document.getElementById('vertex-hint').style.display = mode === 'vertex' ? '' : 'none';
    document.getElementById('draw-hint').style.display   = mode === 'draw'   ? '' : 'none';
    if (mode !== 'select') {
      clearSelectHighlight();
      if (window._selectCleanup) { window._selectCleanup(); window._selectCleanup = null; }
    }
    if (mode !== 'vertex') {
      cancelVertexEdit();
      if (_vertexPickerCleanup) { _vertexPickerCleanup(); _vertexPickerCleanup = null; }
    }
    if (mode !== 'draw') cancelDraw();
    if (mode === 'select') attachSelectListeners();
    if (mode === 'vertex') attachVertexPickerListeners();
    if (mode === 'draw')   _attachDrawListeners();
    hideFloatPanel();
  }

  // ── undo / redo ──────────────────────────────────────────────────────────
  function snapshotForUndo() {
    _undoStack.push(JSON.stringify(annotations));
    if (_undoStack.length > 50) _undoStack.shift();
    _redoStack = [];
    refreshUndoRedoButtons();
  }
  function execUndo() {
    if (!_undoStack.length) return;
    _redoStack.push(JSON.stringify(annotations));
    annotations = JSON.parse(_undoStack.pop());
    renderAnnotationList(); process({ ...getConfig(), skipWalls: true });
    refreshUndoRedoButtons();
  }
  function execRedo() {
    if (!_redoStack.length) return;
    _undoStack.push(JSON.stringify(annotations));
    annotations = JSON.parse(_redoStack.pop());
    renderAnnotationList(); process({ ...getConfig(), skipWalls: true });
    refreshUndoRedoButtons();
  }
  function refreshUndoRedoButtons() {
    const u = document.getElementById('btn-undo');
    const r = document.getElementById('btn-redo');
    if (u) u.disabled = _undoStack.length === 0;
    if (r) r.disabled = _redoStack.length === 0;
  }
  document.getElementById('btn-undo').addEventListener('click', execUndo);
  document.getElementById('btn-redo').addEventListener('click', execRedo);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key === 'z') { e.preventDefault(); execUndo(); }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) { e.preventDefault(); execRedo(); }
  });

  // ── draw-shape mode ──────────────────────────────────────────────────────
  function _getDrawLayer() {
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl) return null;
    let g = svgEl.getElementById('draw-preview-layer');
    if (!g) {
      g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.id = 'draw-preview-layer';
      svgEl.appendChild(g);
    }
    return g;
  }

  function _updateDrawCanvas() {
    const g = _getDrawLayer();
    if (!g) return;
    const pts = _drawPoints;
    const cur = _drawCursor;
    const s   = getSvgScaleForVertex();
    const r   = Math.max(1.5, 5 * Math.max(s.sx, s.sy));
    const SNAP_THRESH = r * 2.5;
    const nearFirst = pts.length >= 3 && cur &&
      Math.hypot(cur.x - pts[0].x, cur.y - pts[0].y) < SNAP_THRESH;
    let html = '';
    if (pts.length >= 2) {
      const d = 'M ' + pts.map(p => p.x.toFixed(2) + ',' + p.y.toFixed(2)).join(' L ');
      html += `<path class="draw-preview-line" d="${d}"/>`;
    }
    if (pts.length >= 1 && cur) {
      const last = pts[pts.length - 1];
      html += `<line class="draw-rubber-band" x1="${last.x.toFixed(2)}" y1="${last.y.toFixed(2)}" x2="${cur.x.toFixed(2)}" y2="${cur.y.toFixed(2)}"/>`;
    }
    pts.forEach((p, i) => {
      const snap = i === 0 && pts.length >= 3 && nearFirst;
      const cls  = snap ? 'draw-preview-pt snap-target' : 'draw-preview-pt';
      html += `<circle class="${cls}" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="${r}"/>`;
    });
    g.innerHTML = html;
  }

  function _clearDrawCanvas() {
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl) return;
    const g = svgEl.getElementById('draw-preview-layer');
    if (g) g.remove();
  }

  function cancelDraw() {
    _drawPoints = []; _drawCursor = null;
    _clearDrawCanvas();
    if (_drawCleanup) { _drawCleanup(); _drawCleanup = null; }
    const fp = document.getElementById('fp-draw');
    if (fp) fp.style.display = 'none';
  }

  function _finishDraw() {
    if (_drawPoints.length < 2) { cancelDraw(); return; }
    _clearDrawCanvas();
    if (_drawCleanup) { _drawCleanup(); _drawCleanup = null; }
    // Show the float panel group picker — reuse existing float-panel positioning
    const panel = document.getElementById('float-panel');
    document.getElementById('fp-fill').style.display = 'none';
    document.getElementById('fp-select').style.display = 'none';
    document.getElementById('fp-draw').style.display = '';
    // Reset active state
    document.querySelectorAll('[data-draw-group]').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-draw-group="outlines"]').classList.add('active');
    document.getElementById('fp-draw-ls-solid').classList.add('active');
    document.getElementById('fp-draw-ls-dashed').classList.remove('active');
    panel.style.display = '';
    // Anchor panel near the last placed point
    const last = _drawPoints[_drawPoints.length - 1];
    const svgEl = document.querySelector('#svg-overlay svg');
    if (svgEl && last) {
      const rect = svgEl.getBoundingClientRect();
      const s    = getSvgScaleForVertex();
      const cx   = rect.left + last.x / s.sx;
      const cy   = rect.top  + last.y / s.sy;
      panel.style.left = (cx + 20) + 'px';
      panel.style.top  = (cy - 20) + 'px';
    }
  }

  // Draw mode canvas listeners (attached/removed when mode switches)
  function _attachDrawListeners() {
    if (_drawCleanup) { _drawCleanup(); _drawCleanup = null; }
    const cw = document.getElementById('canvas-wrap');

    function onMousemove(ev) {
      if (interactionMode !== 'draw') return;
      _drawCursor = clientToSvgPoint(ev);
      _updateDrawCanvas();
    }

    function onClick(ev) {
      if (interactionMode !== 'draw') return;
      if (ev.button !== 0) return;
      if (ev.target.closest('#float-panel')) return;
      const p = clientToSvgPoint(ev);
      const s = getSvgScaleForVertex();
      const r = Math.max(1.5, 5 * Math.max(s.sx, s.sy));
      // Snap-close if clicking near first vertex
      if (_drawPoints.length >= 3) {
        const first = _drawPoints[0];
        if (Math.hypot(p.x - first.x, p.y - first.y) < r * 2.5) {
          _finishDraw(); return;
        }
      }
      _drawPoints.push(p);
      _updateDrawCanvas();
    }

    function onContextmenu(ev) {
      if (interactionMode !== 'draw') return;
      ev.preventDefault();
      if (_drawPoints.length > 0) { _drawPoints.pop(); _updateDrawCanvas(); }
    }

    function onKeydown(ev) {
      if (interactionMode !== 'draw') return;
      if (ev.key === 'Enter') { ev.preventDefault(); if (_drawPoints.length >= 2) _finishDraw(); }
      if (ev.key === 'Escape') { ev.preventDefault(); cancelDraw(); }
    }

    cw.addEventListener('mousemove', onMousemove);
    cw.addEventListener('click', onClick);
    cw.addEventListener('contextmenu', onContextmenu);
    document.addEventListener('keydown', onKeydown);

    _drawCleanup = () => {
      cw.removeEventListener('mousemove', onMousemove);
      cw.removeEventListener('click', onClick);
      cw.removeEventListener('contextmenu', onContextmenu);
      document.removeEventListener('keydown', onKeydown);
    };
  }

  // Wire up draw float panel
  document.querySelectorAll('[data-draw-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-draw-group]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.getElementById('fp-draw-ls-solid').addEventListener('click', () => {
    document.getElementById('fp-draw-ls-solid').classList.add('active');
    document.getElementById('fp-draw-ls-dashed').classList.remove('active');
  });
  document.getElementById('fp-draw-ls-dashed').addEventListener('click', () => {
    document.getElementById('fp-draw-ls-dashed').classList.add('active');
    document.getElementById('fp-draw-ls-solid').classList.remove('active');
  });
  document.getElementById('fp-draw-confirm').addEventListener('click', () => {
    if (_drawPoints.length < 2) { hideFloatPanel(); return; }
    const group = document.querySelector('[data-draw-group].active')?.dataset?.drawGroup || 'outlines';
    const isDashed = document.getElementById('fp-draw-ls-dashed').classList.contains('active');
    const svgEl = document.querySelector('#svg-overlay svg');
    const vb = (svgEl?.getAttribute('viewBox') || '0 0 512 512').split(' ');
    const vW = parseFloat(vb[2]) || 512;
    const vH = parseFloat(vb[3]) || 512;
    const d  = 'M ' + _drawPoints.map(p => p.x.toFixed(3) + ',' + p.y.toFixed(3)).join(' L ') + ' Z';
    snapshotForUndo();
    annotations.push({
      kind: 'fill', id: 'ann-' + Date.now(), group, mode: 'add', type: 'outline',
      lineStyle: isDashed ? 'dashed' : 'solid',
      path: d, vW, vH,
    });
    _drawPoints = []; _drawCursor = null;
    hideFloatPanel();
    renderAnnotationList();
    process({ ...getConfig(), skipWalls: true });
  });
  document.getElementById('fp-draw-discard').addEventListener('click', () => {
    _drawPoints = []; _drawCursor = null;
    hideFloatPanel();
    _attachDrawListeners(); // re-arm so user can keep drawing
  });

  // ── fill interaction ─────────────────────────────────────────────────────
  let pendingFill   = null;
  let fillDebouncer = null;
  const canvasWrap  = document.getElementById('canvas-wrap');

  canvasWrap.addEventListener('click', e => {
    if (e.target.closest('#float-panel')) return;
    if (interactionMode !== 'fill') return;

    const rect = mapImg.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top)  / rect.height;
    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return;
    spawnPing(e.clientX, e.clientY);
    pendingFill = { nx, ny, path: null };
    showFillPanel(e.clientX, e.clientY);
    requestFill(nx, ny);
  });

  function spawnPing(cx, cy) {
    const ring = document.createElement('div');
    ring.className = 'ping-ring';
    ring.style.left = cx + 'px'; ring.style.top = cy + 'px';
    document.body.appendChild(ring);
    ring.addEventListener('animationend', () => ring.remove());
  }

  function requestFill(nx, ny) {
    const sensitivity = Number(document.getElementById('fp-sensitivity').value);
    const offset      = Number(document.getElementById('fp-offset').value);
    clearTimeout(fillDebouncer);
    fillDebouncer = setTimeout(async () => {
      try {
        setStatus('busy', 'Filling\u2026');
        const res = await fetch('/fill', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nx, ny, threshold: sensitivity, offset }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: 'Server error' }));
          setStatus('error', err.error || 'Fill failed'); return;
        }
        const data = await res.json();
        setStatus('', 'Ready');
        if (!data.path) { setStatus('', 'No fill \u2014 try a darker area'); return; }
        if (pendingFill) pendingFill = { ...pendingFill, path: data.path, vW: data.vW, vH: data.vH };
        showPendingPath(data.path);
      } catch (err) {
        setStatus('error', 'Fill error: ' + err.message);
      }
    }, 200);
  }

  document.getElementById('fp-sensitivity').addEventListener('input', function () {
    document.getElementById('fp-sensitivity-v').textContent = this.value;
    if (pendingFill) requestFill(pendingFill.nx, pendingFill.ny);
  });

  document.getElementById('fp-offset').addEventListener('input', function () {
    const v = Number(this.value);
    document.getElementById('fp-offset-v').textContent = (v > 0 ? '+' : '') + v;
    if (pendingFill) requestFill(pendingFill.nx, pendingFill.ny);
  });

  function showPendingPath(d) {
    const svg = document.querySelector('#svg-overlay svg');
    if (!svg) return;
    let g = svg.getElementById('pending');
    if (!g) {
      g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.id = 'pending'; svg.appendChild(g);
    }
    g.className.baseVal = fillType === 'outline' ? 'outline' : '';
    g.innerHTML = '<path d="' + d.replace(/"/g, '&quot;') + '"/>';
  }
  function clearPendingPath() {
    const svg = document.querySelector('#svg-overlay svg');
    if (svg) { const g = svg.getElementById('pending'); if (g) g.innerHTML = ''; }
  }

  document.querySelectorAll('[data-wand-group]').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-wand-group]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    })
  );

  let fillMode = 'add';
  document.getElementById('fp-add').addEventListener('click', () => {
    fillMode = 'add';
    document.getElementById('fp-add').classList.add('active');
    document.getElementById('fp-sub').classList.remove('active', 'active-sub');
  });
  document.getElementById('fp-sub').addEventListener('click', () => {
    fillMode = 'subtract';
    document.getElementById('fp-sub').classList.add('active-sub');
    document.getElementById('fp-add').classList.remove('active');
  });

  let fillLineStyle = 'solid';
  function updateFillLineStyleVisibility() {
    const isOutline = fillType === 'outline';
    document.getElementById('fp-fill-line-style-row').style.display = isOutline ? '' : 'none';
  }
  document.getElementById('fp-fill-ls-solid').addEventListener('click', () => {
    fillLineStyle = 'solid';
    document.getElementById('fp-fill-ls-solid').classList.add('active');
    document.getElementById('fp-fill-ls-dashed').classList.remove('active');
  });
  document.getElementById('fp-fill-ls-dashed').addEventListener('click', () => {
    fillLineStyle = 'dashed';
    document.getElementById('fp-fill-ls-dashed').classList.add('active');
    document.getElementById('fp-fill-ls-solid').classList.remove('active');
  });

  let fillType = 'fill';
  document.getElementById('fp-type-fill').addEventListener('click', () => {
    fillType = 'fill';
    document.getElementById('fp-type-fill').classList.add('active');
    document.getElementById('fp-type-outline').classList.remove('active');
    updateFillLineStyleVisibility();
    clearPendingPath();
  });
  document.getElementById('fp-type-outline').addEventListener('click', () => {
    fillType = 'outline';
    document.getElementById('fp-type-outline').classList.add('active');
    document.getElementById('fp-type-fill').classList.remove('active');
    updateFillLineStyleVisibility();
    if (pendingFill && pendingFill.path) showPendingPath(pendingFill.path);
  });

  document.getElementById('fp-fill-confirm').addEventListener('click', () => {
    if (!pendingFill || !pendingFill.path) { hideFloatPanel(); return; }
    const group = document.querySelector('[data-wand-group].active')?.dataset?.wandGroup || 'inaccessible';
    snapshotForUndo();
    annotations.push({
      kind: 'fill', id: 'ann-' + Date.now(), group, mode: fillMode, type: fillType,
      lineStyle: fillType === 'outline' ? fillLineStyle : 'solid',
      path: pendingFill.path, vW: pendingFill.vW, vH: pendingFill.vH,
    });
    pendingFill = null; hideFloatPanel(); renderAnnotationList(); process({ ...getConfig(), skipWalls: true });
  });
  document.getElementById('fp-fill-discard').addEventListener('click', () => {
    pendingFill = null; clearPendingPath(); hideFloatPanel();
  });

  // ── vertex editor ────────────────────────────────────────────────────────
  // Vertex editing is always saved as straight M/L segments (plus optional Z).
  let _vertexEditPath         = null; // { el, d, fromGroup, prevStroke, prevStrokeWidth }
  let _vertexNodes            = [];   // [{x, y}]
  let _vertexClosed           = false;
  let _vertexActiveIndex      = -1;
  let _nodeDragging           = null; // { index }
  let _vertexInsertCandidate  = null; // { segIdx, x, y }
  let _vertexPickerCleanup    = null;
  let _vertexDragCleanup      = null;

  function samePoint(a, b) {
    return Math.abs(a.x - b.x) < 0.001 && Math.abs(a.y - b.y) < 0.001;
  }

  function parsePathToPolyline(d) {
    const points = [];
    let closed = false;
    const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
    let m; let cx = 0; let cy = 0; let sx = 0; let sy = 0;

    while ((m = re.exec(d)) !== null) {
      const cmd = m[1];
      const nums = (m[2].trim().match(/[-+]?(?:[0-9]+[.][0-9]+|[.][0-9]+|[0-9]+)(?:[eE][-+]?[0-9]+)?/g) || []).map(Number);
      const abs = cmd.toUpperCase();
      const rel = cmd !== abs;
      let i = 0;

      if (abs === 'Z') {
        closed = true;
        cx = sx; cy = sy;
        continue;
      }

      if (abs === 'M' || abs === 'L' || abs === 'T') {
        while (i + 1 < nums.length) {
          const x = rel ? cx + nums[i] : nums[i];
          const y = rel ? cy + nums[i + 1] : nums[i + 1];
          if (abs === 'M' && points.length === 0) { sx = x; sy = y; }
          points.push({ x, y });
          cx = x; cy = y;
          i += 2;
        }
      } else if (abs === 'H') {
        while (i < nums.length) {
          const x = rel ? cx + nums[i] : nums[i];
          points.push({ x, y: cy });
          cx = x;
          i += 1;
        }
      } else if (abs === 'V') {
        while (i < nums.length) {
          const y = rel ? cy + nums[i] : nums[i];
          points.push({ x: cx, y });
          cy = y;
          i += 1;
        }
      } else if (abs === 'C') {
        while (i + 5 < nums.length) {
          const x = rel ? cx + nums[i + 4] : nums[i + 4];
          const y = rel ? cy + nums[i + 5] : nums[i + 5];
          points.push({ x, y });
          cx = x; cy = y;
          i += 6;
        }
      } else if (abs === 'S' || abs === 'Q') {
        while (i + 3 < nums.length) {
          const x = rel ? cx + nums[i + 2] : nums[i + 2];
          const y = rel ? cy + nums[i + 3] : nums[i + 3];
          points.push({ x, y });
          cx = x; cy = y;
          i += 4;
        }
      } else if (abs === 'A') {
        while (i + 6 < nums.length) {
          const x = rel ? cx + nums[i + 5] : nums[i + 5];
          const y = rel ? cy + nums[i + 6] : nums[i + 6];
          points.push({ x, y });
          cx = x; cy = y;
          i += 7;
        }
      }
    }

    if (closed && points.length > 1 && samePoint(points[0], points[points.length - 1])) {
      points.pop();
    }
    return { points, closed };
  }

  function rebuildPolylinePath(points, closed) {
    if (!points.length) return '';
    let d = 'M ' + points[0].x.toFixed(3) + ' ' + points[0].y.toFixed(3);
    for (let i = 1; i < points.length; i++) {
      d += ' L ' + points[i].x.toFixed(3) + ' ' + points[i].y.toFixed(3);
    }
    if (closed) d += ' Z';
    return d;
  }

  function getVertexMinCount() {
    return _vertexClosed ? 3 : 2;
  }

  function getVertexLayer() {
    const svgEl = document.querySelector('#svg-overlay svg');
    return svgEl ? svgEl.getElementById('node-editor-layer') : null;
  }

  function getSvgScaleForVertex() {
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl) return { sx: 1, sy: 1 };
    const rect = svgEl.getBoundingClientRect();
    const vb = (svgEl.getAttribute('viewBox') || '0 0 512 512').split(' ');
    return {
      sx: (parseFloat(vb[2]) || 512) / (rect.width || 1),
      sy: (parseFloat(vb[3]) || 512) / (rect.height || 1),
    };
  }

  function clientToSvgPoint(ev) {
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl) return { x: 0, y: 0 };
    const rect = svgEl.getBoundingClientRect();
    const s = getSvgScaleForVertex();
    return {
      x: (ev.clientX - rect.left) * s.sx,
      y: (ev.clientY - rect.top) * s.sy,
    };
  }

  function projectPointToSegment(px, py, ax, ay, bx, by) {
    const vx = bx - ax;
    const vy = by - ay;
    const len2 = vx * vx + vy * vy;
    if (len2 < 1e-9) return { x: ax, y: ay, t: 0 };
    let t = ((px - ax) * vx + (py - ay) * vy) / len2;
    t = Math.max(0, Math.min(1, t));
    return { x: ax + t * vx, y: ay + t * vy, t };
  }

  function updateEditedPathPreview() {
    if (!_vertexEditPath || !_vertexEditPath.el) return;
    _vertexEditPath.el.setAttribute('d', rebuildPolylinePath(_vertexNodes, _vertexClosed));
  }

  function updateVertexLayerGeometry() {
    const layer = getVertexLayer();
    if (!layer) return;

    layer.querySelectorAll('.node-handle').forEach(h => {
      const idx = Number(h.dataset.ptIdx);
      const p = _vertexNodes[idx];
      if (!p) return;
      h.setAttribute('cx', p.x);
      h.setAttribute('cy', p.y);
      h.classList.toggle('node-handle-active', idx === _vertexActiveIndex);
    });

    layer.querySelectorAll('.node-segment').forEach(line => {
      const i = Number(line.dataset.segIdx);
      const a = _vertexNodes[i];
      const b = _vertexClosed ? _vertexNodes[(i + 1) % _vertexNodes.length] : _vertexNodes[i + 1];
      if (!a || !b) return;
      line.setAttribute('x1', a.x);
      line.setAttribute('y1', a.y);
      line.setAttribute('x2', b.x);
      line.setAttribute('y2', b.y);
    });

    const marker = layer.querySelector('.node-insert-marker');
    if (marker && _vertexInsertCandidate) {
      marker.setAttribute('cx', _vertexInsertCandidate.x);
      marker.setAttribute('cy', _vertexInsertCandidate.y);
      marker.style.display = '';
    } else if (marker) {
      marker.style.display = 'none';
    }

    updateEditedPathPreview();
  }

  function removeVertexAt(index) {
    if (index < 0 || index >= _vertexNodes.length) return;
    if (_vertexNodes.length <= getVertexMinCount()) {
      setStatus('', 'Need at least ' + getVertexMinCount() + ' vertices for this shape');
      return;
    }
    _vertexNodes.splice(index, 1);
    if (_vertexActiveIndex >= _vertexNodes.length) _vertexActiveIndex = _vertexNodes.length - 1;
    if (_vertexActiveIndex === index) _vertexActiveIndex = -1;
    if (_vertexInsertCandidate && _vertexInsertCandidate.segIdx >= _vertexNodes.length) {
      _vertexInsertCandidate = null;
    }
    redrawVertexEditorLayer();
  }

  function insertVertexAfter(segIdx, x, y) {
    const idx = segIdx + 1;
    _vertexNodes.splice(idx, 0, { x, y });
    _vertexActiveIndex = idx;
    _vertexInsertCandidate = null;
    redrawVertexEditorLayer();
  }

  function redrawVertexEditorLayer() {
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl || !_vertexEditPath) return;

    const prev = svgEl.getElementById('node-editor-layer');
    if (prev) prev.remove();

    const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    layer.id = 'node-editor-layer';
    svgEl.appendChild(layer);

    if (_vertexNodes.length < 2) {
      updateEditedPathPreview();
      return;
    }

    const segCount = _vertexClosed ? _vertexNodes.length : (_vertexNodes.length - 1);
    for (let i = 0; i < segCount; i++) {
      const a = _vertexNodes[i];
      const b = _vertexClosed ? _vertexNodes[(i + 1) % _vertexNodes.length] : _vertexNodes[i + 1];
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.classList.add('node-segment');
      line.dataset.segIdx = String(i);
      line.setAttribute('x1', a.x);
      line.setAttribute('y1', a.y);
      line.setAttribute('x2', b.x);
      line.setAttribute('y2', b.y);
      line.addEventListener('mousemove', ev => {
        const p = clientToSvgPoint(ev);
        const proj = projectPointToSegment(p.x, p.y, a.x, a.y, b.x, b.y);
        _vertexInsertCandidate = { segIdx: i, x: proj.x, y: proj.y };
        updateVertexLayerGeometry();
      });
      line.addEventListener('mouseleave', () => {
        if (_nodeDragging) return;
        _vertexInsertCandidate = null;
        updateVertexLayerGeometry();
      });
      line.addEventListener('click', ev => {
        ev.stopPropagation();
        const p = clientToSvgPoint(ev);
        const proj = projectPointToSegment(p.x, p.y, a.x, a.y, b.x, b.y);
        insertVertexAfter(i, proj.x, proj.y);
      });
      layer.appendChild(line);
    }

    const s = getSvgScaleForVertex();
    const r = Math.max(3, Math.min(6, 4 * Math.max(s.sx, s.sy)));
    _vertexNodes.forEach((pt, idx) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.classList.add('node-handle');
      if (idx === _vertexActiveIndex) c.classList.add('node-handle-active');
      c.dataset.ptIdx = String(idx);
      c.setAttribute('cx', pt.x);
      c.setAttribute('cy', pt.y);
      c.setAttribute('r', r);
      c.addEventListener('mousedown', ev => {
        _nodeDragging = { index: idx };
        _vertexActiveIndex = idx;
        c.classList.add('node-dragging');
        ev.preventDefault();
        ev.stopPropagation();
      });
      c.addEventListener('click', ev => {
        _vertexActiveIndex = idx;
        updateVertexLayerGeometry();
        ev.stopPropagation();
      });
      c.addEventListener('contextmenu', ev => {
        ev.preventDefault();
        ev.stopPropagation();
        removeVertexAt(idx);
      });
      layer.appendChild(c);
    });

    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    marker.classList.add('node-insert-marker');
    marker.setAttribute('r', Math.max(2.4, r * 0.8));
    marker.style.display = 'none';
    layer.appendChild(marker);

    updateVertexLayerGeometry();
  }

  function startVertexEdit(pathEl, fromGroup, d) {
    cancelVertexEdit();
    const parsed = parsePathToPolyline(d);
    if (!parsed.points.length) return;

    _vertexEditPath = {
      el: pathEl,
      d,
      fromGroup,
      prevStroke: pathEl.getAttribute('stroke'),
      prevStrokeWidth: pathEl.getAttribute('stroke-width'),
    };
    _vertexNodes = parsed.points.map(p => ({ x: p.x, y: p.y }));
    _vertexClosed = parsed.closed;
    _vertexActiveIndex = -1;
    _vertexInsertCandidate = null;

    pathEl.style.opacity = '1';
    pathEl.setAttribute('stroke', '#ffa724');
    pathEl.setAttribute('stroke-width', '1.5');

    document.getElementById('node-controls').style.display = '';
    document.getElementById('node-edit-group-label').textContent = fromGroup;

    function onMousemove(ev) {
      if (!_nodeDragging) return;
      const p = clientToSvgPoint(ev);
      const idx = _nodeDragging.index;
      if (!_vertexNodes[idx]) return;
      _vertexNodes[idx].x = p.x;
      _vertexNodes[idx].y = p.y;
      updateVertexLayerGeometry();
    }

    function onMouseup() {
      if (!_nodeDragging) return;
      const layer = getVertexLayer();
      if (layer) {
        const h = layer.querySelector('.node-handle.node-dragging');
        if (h) h.classList.remove('node-dragging');
      }
      _nodeDragging = null;
    }

    function onKeydown(ev) {
      if (!_vertexEditPath) return;
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && _vertexActiveIndex >= 0) {
        ev.preventDefault();
        removeVertexAt(_vertexActiveIndex);
      }
    }

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
    document.addEventListener('keydown', onKeydown);
    _vertexDragCleanup = () => {
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
      document.removeEventListener('keydown', onKeydown);
    };

    redrawVertexEditorLayer();
  }

  /** Refresh vertex handle radii after a zoom change without rebuilding the full layer. */
  function refreshVertexHandleRadius() {
    const layer = getVertexLayer();
    if (!layer || !_vertexEditPath) return;
    const s  = getSvgScaleForVertex();
    const r  = Math.max(0.5, 6 * Math.max(s.sx, s.sy));
    const ir = Math.max(0.4, r * 0.8);
    layer.querySelectorAll('.node-handle').forEach(h => h.setAttribute('r', String(r)));
    const m = layer.querySelector('.node-insert-marker');
    if (m) m.setAttribute('r', String(ir));
  }

  function cancelVertexEdit() {
    if (_vertexDragCleanup) { _vertexDragCleanup(); _vertexDragCleanup = null; }

    const svgEl = document.querySelector('#svg-overlay svg');
    if (svgEl) {
      const l = svgEl.getElementById('node-editor-layer');
      if (l) l.remove();
    }

    if (_vertexEditPath && _vertexEditPath.el) {
      if (_vertexEditPath.prevStroke == null) _vertexEditPath.el.removeAttribute('stroke');
      else _vertexEditPath.el.setAttribute('stroke', _vertexEditPath.prevStroke);

      if (_vertexEditPath.prevStrokeWidth == null) _vertexEditPath.el.removeAttribute('stroke-width');
      else _vertexEditPath.el.setAttribute('stroke-width', _vertexEditPath.prevStrokeWidth);
    }

    document.getElementById('node-controls').style.display = 'none';

    _vertexEditPath = null;
    _vertexNodes = [];
    _vertexClosed = false;
    _vertexActiveIndex = -1;
    _nodeDragging = null;
    _vertexInsertCandidate = null;
  }

  document.getElementById('node-save-btn').addEventListener('click', () => {
    if (!_vertexEditPath) { cancelVertexEdit(); return; }
    const origD = _vertexEditPath.d;
    const newD = rebuildPolylinePath(_vertexNodes, _vertexClosed);
    const grp = _vertexEditPath.fromGroup;
    snapshotForUndo();
    annotations.push({ kind: 'reshape', id: 'ann-' + Date.now(), origD, newD, fromGroup: grp });
    cancelVertexEdit();
    renderAnnotationList();
    process({ ...getConfig(), skipWalls: true });
  });

  document.getElementById('node-cancel-btn').addEventListener('click', () => {
    cancelVertexEdit();
    if (interactionMode === 'vertex') attachVertexPickerListeners();
  });

  function attachVertexPickerListeners() {
    if (_vertexPickerCleanup) { _vertexPickerCleanup(); _vertexPickerCleanup = null; }
    const SELECTABLE = ['outlines', 'walls', 'thickerWalls', 'unclassified', 'inaccessible', 'stairs'];
    const svgEl = document.querySelector('#svg-overlay svg');
    if (!svgEl) return;

    const handlers = [];
    SELECTABLE.forEach(gId => {
      const g = svgEl.getElementById(gId);
      if (!g) return;
      g.querySelectorAll('path').forEach(el => {
        const handler = ev => {
          if (interactionMode !== 'vertex') return;
          ev.stopPropagation();
          const d = el.getAttribute('d') || '';
          if (!d) return;
          startVertexEdit(el, gId, d);
        };
        el.addEventListener('click', handler);
        handlers.push({ el, handler });
      });
    });

    _vertexPickerCleanup = () => {
      handlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
    };
  }
  let selectedPathEl = null, selectedFromGroup = null, selectedD = null, selectedToGroup = null;

  function attachSelectListeners() {
    // Cleanup any previous listeners first
    if (window._selectCleanup) { window._selectCleanup(); window._selectCleanup = null; }

    const SELECTABLE = ['outlines','walls','thickerWalls','unclassified','inaccessible','stairs'];
    const svg = document.querySelector('#svg-overlay svg');
    if (!svg) return;

    // ── drag-to-move state ─────────────────────────────────────────────
    let dragEl = null, dragFromGroup = null, dragOrigD = null;
    let dragStartX = 0, dragStartY = 0, dragDx = 0, dragDy = 0;
    let isDragging = false, dragMoved = false;

    // Scale factor: converts screen px → SVG user units
    function getSvgScale() {
      const svgEl = document.querySelector('#svg-overlay svg');
      if (!svgEl) return { sx: 1, sy: 1 };
      const rect = svgEl.getBoundingClientRect();
      const vb = (svgEl.getAttribute('viewBox') || '0 0 512 512').split(' ');
      return {
        sx: (parseFloat(vb[2]) || 512) / (rect.width  || 1),
        sy: (parseFloat(vb[3]) || 512) / (rect.height || 1),
      };
    }

    function onMousemove(ev) {
      if (!isDragging || !dragEl) return;
      const dx = ev.clientX - dragStartX;
      const dy = ev.clientY - dragStartY;
      if (!dragMoved && Math.hypot(dx, dy) > 5) {
        dragMoved = true;
        hideFloatPanel();
        clearSelectHighlight();
        dragEl.classList.add('path-dragging');
      }
      if (!dragMoved) return;
      const { sx, sy } = getSvgScale();
      dragDx = dx * sx;
      dragDy = dy * sy;
      dragEl.setAttribute('transform',
        'translate(' + dragDx.toFixed(2) + ',' + dragDy.toFixed(2) + ')');
    }

    function onMouseup(ev) {
      if (!isDragging) return;
      isDragging = false;
      if (dragEl) {
        dragEl.classList.remove('path-dragging');
        if (dragMoved && (Math.abs(dragDx) > 0.5 || Math.abs(dragDy) > 0.5)) {
          // Commit move annotation
          snapshotForUndo();
          annotations.push({
            kind: 'move', id: 'ann-' + Date.now(),
            d: dragOrigD, fromGroup: dragFromGroup, dx: dragDx, dy: dragDy,
          });
          renderAnnotationList();
          process({ ...getConfig(), skipWalls: true });
          // Pure click → show float panel
          selectPath(dragEl, dragFromGroup, dragOrigD);
          showSelectPanel(ev.clientX, ev.clientY, dragFromGroup);
        }
      }
      dragEl = null; dragFromGroup = null; dragOrigD = null;
      dragDx = 0; dragDy = 0; dragMoved = false;
    }

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
    window._selectCleanup = () => {
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    SELECTABLE.forEach(gId => {
      const g = svg.getElementById(gId);
      if (!g) return;
      g.querySelectorAll('path, polygon').forEach(el => {
        el.addEventListener('mousedown', ev => {
          if (interactionMode !== 'select') return;
          ev.stopPropagation();
          ev.preventDefault();
          isDragging  = true;
          dragMoved   = false;
          dragEl      = el;
          dragFromGroup = gId;
          dragOrigD   = el.getAttribute('d') || '';
          dragStartX  = ev.clientX;
          dragStartY  = ev.clientY;
          dragDx = 0; dragDy = 0;
        });
      });
    });
  }

  function selectPath(el, fromGroup, d) {
    clearSelectHighlight();
    selectedPathEl = el; selectedFromGroup = fromGroup; selectedD = d; selectedToGroup = null;
    el.classList.add('path-selected');
    document.querySelectorAll('.fp-layer-btn').forEach(b => b.classList.remove('active'));
  }
  function clearSelectHighlight() {
    if (selectedPathEl) { selectedPathEl.classList.remove('path-selected'); selectedPathEl = null; }
    selectedFromGroup = null; selectedD = null; selectedToGroup = null;
  }

  document.querySelectorAll('.fp-layer-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fp-layer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedToGroup = btn.dataset.togroup;
    })
  );

  let selPathType  = 'line';
  let selLineStyle  = 'solid';
  function updateSelLineStyleVisibility() {
    const show = selPathType === 'line' || selPathType === 'outline';
    document.getElementById('fp-sel-line-style-row').style.display = show ? '' : 'none';
  }
  document.getElementById('fp-sel-ls-solid').addEventListener('click', () => {
    selLineStyle = 'solid';
    document.getElementById('fp-sel-ls-solid').classList.add('active');
    document.getElementById('fp-sel-ls-dashed').classList.remove('active');
  });
  document.getElementById('fp-sel-ls-dashed').addEventListener('click', () => {
    selLineStyle = 'dashed';
    document.getElementById('fp-sel-ls-dashed').classList.add('active');
    document.getElementById('fp-sel-ls-solid').classList.remove('active');
  });

  const SEL_TYPE_IDS = ['fp-sel-type-line', 'fp-sel-type-fill', 'fp-sel-type-exclude'];
  SEL_TYPE_IDS.forEach(btnId => {
    document.getElementById(btnId).addEventListener('click', () => {
      selPathType = btnId.replace('fp-sel-type-', '');
      SEL_TYPE_IDS.forEach(id => document.getElementById(id).classList.remove('active', 'excl-active'));
      document.getElementById(btnId).classList.add(selPathType === 'exclude' ? 'excl-active' : 'active');
      document.getElementById('fp-excl-hint').style.display     = selPathType === 'exclude' ? '' : 'none';
      document.getElementById('fp-sel-layer-row').style.display = selPathType === 'exclude' ? 'none' : '';
      updateSelLineStyleVisibility();
    });
  });

  document.getElementById('fp-select-confirm').addEventListener('click', () => {
    if (!selectedD) { hideFloatPanel(); clearSelectHighlight(); return; }
    snapshotForUndo();
    if (selPathType === 'exclude') {
      annotations.push({ kind: 'exclude', id: 'ann-' + Date.now(),
                          d: selectedD, fromGroup: selectedFromGroup });
    } else {
      if (!selectedToGroup) { hideFloatPanel(); clearSelectHighlight(); return; }
      const isLineLike = selPathType === 'line' || selPathType === 'outline';
      annotations.push({ kind: 'reassign', id: 'ann-' + Date.now(), d: selectedD,
                          fromGroup: selectedFromGroup, toGroup: selectedToGroup, type: selPathType,
                          lineStyle: isLineLike ? selLineStyle : 'solid' });
    }
    clearSelectHighlight(); hideFloatPanel(); renderAnnotationList(); process({ ...getConfig(), skipWalls: true });
  });
  document.getElementById('fp-select-discard').addEventListener('click', () => {
    clearSelectHighlight(); hideFloatPanel();
  });

  // ── floating panel helpers ───────────────────────────────────────────────
  const floatPanel = document.getElementById('float-panel');

  let fpDragging = false, fpDragOX = 0, fpDragOY = 0;
  floatPanel.addEventListener('mousedown', e => {
    if (!e.target.closest('h3')) return;
    fpDragging = true;
    const rect = floatPanel.getBoundingClientRect();
    fpDragOX = e.clientX - rect.left; fpDragOY = e.clientY - rect.top;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!fpDragging) return;
    floatPanel.style.left = Math.max(0, e.clientX - fpDragOX) + 'px';
    floatPanel.style.top  = Math.max(0, e.clientY - fpDragOY) + 'px';
  });
  document.addEventListener('mouseup', () => { fpDragging = false; });

  function showFillPanel(cx, cy) {
    document.getElementById('fp-fill').style.display   = '';
    document.getElementById('fp-select').style.display = 'none';
    positionPanel(cx, cy); floatPanel.classList.add('visible');
  }
  function showSelectPanel(cx, cy, fromGroup) {
    document.getElementById('fp-fill').style.display   = 'none';
    document.getElementById('fp-select').style.display = '';
    document.getElementById('fp-select-current').textContent = 'Currently in: ' + fromGroup;
    selPathType  = 'line';
    selLineStyle = 'solid';
    SEL_TYPE_IDS.forEach(id => document.getElementById(id).classList.remove('active', 'excl-active'));
    document.getElementById('fp-sel-type-line').classList.add('active');
    document.getElementById('fp-excl-hint').style.display     = 'none';
    document.getElementById('fp-sel-layer-row').style.display = '';
    document.getElementById('fp-sel-ls-solid').classList.add('active');
    document.getElementById('fp-sel-ls-dashed').classList.remove('active');
    document.querySelectorAll('.fp-layer-btn').forEach(b => b.classList.remove('active'));
    selectedToGroup = null;
    updateSelLineStyleVisibility();
    positionPanel(cx, cy); floatPanel.classList.add('visible');
  }
  function positionPanel(cx, cy) {
    const W = 252, H = floatPanel.scrollHeight || 220;
    const vw = window.innerWidth, vh = window.innerHeight;
    let left = cx + 14, top = cy + 14;
    if (left + W > vw - 8) left = cx - W - 14;
    if (top  + H > vh - 8) top  = cy - H - 14;
    floatPanel.style.left = Math.max(4, left) + 'px';
    floatPanel.style.top  = Math.max(4, top)  + 'px';
  }
  function hideFloatPanel() { floatPanel.classList.remove('visible'); clearPendingPath(); }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      pendingFill = null; clearSelectHighlight(); clearPendingPath(); hideFloatPanel();
    }
  });

  // ── process ──────────────────────────────────────────────────────────────
  let debounceTimer = null, inFlight = false, pendingCfg = null;

  function scheduleProcess() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => process({ ...getConfig(), skipWalls: true }), 350);
  }

  async function process(cfg) {
    if (!currentPngLoaded) { setStatus('', 'Select an image to begin'); return; }
    if (inFlight) { pendingCfg = cfg; return; }
    inFlight = true; pendingCfg = null;
    setStatus('busy', 'Processing\u2026');
    try {
      const res = await fetch('/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config: cfg, annotations }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      svgOverlay.innerHTML = data.svg;
      applyLayerVisibility();
      updateStats(data.stats);
      // Always re-attach listeners after re-render (SVG DOM is replaced)
      if (interactionMode === 'select') attachSelectListeners();
      if (interactionMode === 'vertex') { cancelVertexEdit(); attachVertexPickerListeners(); }
      setStatus('', 'Ready', data.ms);
    } catch (err) {
      setStatus('error', 'Error: ' + err.message);
    } finally {
      inFlight = false;
      if (pendingCfg) process(pendingCfg);
    }
  }

  // ── debug bitmaps ────────────────────────────────────────────────────────
  document.getElementById('load-debug').addEventListener('click', async () => {
    const btn = document.getElementById('load-debug');
    btn.textContent = 'Loading\u2026'; btn.disabled = true;
    try {
      const res = await fetch('/debug', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getConfig()),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data  = await res.json();
      const slots = { 'dbg-mask': data.mask, 'dbg-masked': data.masked,
                      'dbg-negmask': data.negatedMask, 'dbg-wallbmp': data.wallBitmap };
      for (const [id, src] of Object.entries(slots)) {
        if (!src) continue;
        const el = document.getElementById(id);
        el.outerHTML = '<img id="' + id + '" src="data:image/png;base64,' + src
          + '" style="width:100%;border-radius:4px;border:1px solid var(--border)">';
      }
      btn.textContent = 'Reload Debug Bitmaps';
    } catch (err) { btn.textContent = 'Error: ' + err.message; }
    finally { btn.disabled = false; }
  });

  // ── generate walls button ───────────────────────────────────────────────
  const btnGenWalls = document.getElementById('btn-gen-walls');
  btnGenWalls.addEventListener('click', () => {
    if (!currentPngLoaded) return;
    process(getConfig());
  });

  // ── export SVG ───────────────────────────────────────────────────────────
  const btnExport = document.getElementById('btn-export');
  btnExport.addEventListener('click', async () => {
    if (!currentPngLoaded) { setStatus('error', 'No image loaded'); return; }
    const orig = btnExport.innerHTML;
    btnExport.textContent = 'Exporting\u2026'; btnExport.disabled = true;
    try {
      const res = await fetch('/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config: getConfig(), annotations }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'HTTP ' + res.status }));
        throw new Error(err.error || 'HTTP ' + res.status);
      }
      const blob = await res.blob();
      const cd   = res.headers.get('content-disposition') || '';
      const name = cd.match(/filename="([^"]+)"/)?.[1] || 'map.svg';
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setStatus('', 'SVG exported \u2014 ' + name);
    } catch (err) {
      setStatus('error', 'Export failed: ' + err.message);
    } finally {
      btnExport.innerHTML = orig; btnExport.disabled = false;
    }
  });

  // ── init ─────────────────────────────────────────────────────────────────
  loadWorkspace(/* restoreCurrentPng */ true);
})();
</script>
</body>
</html>`;
}

// ── Annotation injection (server-side) ───────────────────────────────────────

function ensureGroupAndAppend(svg: string, groupId: string, pathEl: string): string {
    const openTag = `<g id="${groupId}"`;
    const idx = svg.indexOf(openTag);
    if (idx !== -1) {
        const closeIdx = svg.indexOf('</g>', idx);
        if (closeIdx !== -1) return svg.slice(0, closeIdx) + pathEl + '\n  ' + svg.slice(closeIdx);
    }
    return svg.replace('</svg>', `  <g id="${groupId}">\n${pathEl}\n  </g>\n\n</svg>`);
}

function injectAnnotations(svg: string, annotations: AnnotationServer[]): string {
    if (annotations.length === 0) return svg;

    const vbMatch   = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    const currentVW = vbMatch ? parseFloat(vbMatch[1]) : 512;
    const currentVH = vbMatch ? parseFloat(vbMatch[2]) : 512;

    if (!svg.includes('id="pending"'))
        svg = svg.replace('</svg>', '  <g id="pending"></g>\n\n</svg>');

    if (!svg.includes('ann-outline'))
        svg = svg.replace(
            '  </style>',
            `    path.ann-outline        { fill: none !important; stroke: #7ecfff; stroke-width: 1.5; }\n    path.ann-outline-dashed { fill: none !important; stroke: #7ecfff; stroke-width: 1.5; stroke-dasharray: 5 2; }\n  </style>`,
        );

    if (!svg.includes('map-boundary-path'))
        svg = svg.replace(
            '  </style>',
            `    path.map-boundary-path { fill: none !important; stroke: #ff2200 !important; stroke-width: 2.5 !important; }\n  </style>`,
        );

    for (const ann of annotations) {
        if (ann.kind === 'fill') {
            const isOutline = ann.type === 'outline';
            let attrs: string;
            if (isOutline) {
                const cls = (ann.lineStyle === 'dashed') ? 'ann-outline-dashed' : 'ann-outline';
                attrs = ` class="${cls}"`;
            } else if (ann.mode === 'subtract') attrs = ' class="subtract"';
            else                        attrs = '';
            let pathEl = `    <path${attrs} d="${ann.path}"/>`;
            if (ann.vW && ann.vH && currentVW && currentVH &&
                (Math.abs(ann.vW - currentVW) > 1 || Math.abs(ann.vH - currentVH) > 1)) {
                const sx = (currentVW / ann.vW).toFixed(5);
                const sy = (currentVH / ann.vH).toFixed(5);
                pathEl = `    <path${attrs} transform="scale(${sx},${sy})" d="${ann.path}"/>`;
            }
            svg = ensureGroupAndAppend(svg, ann.group, pathEl);

        } else if (ann.kind === 'reassign') {
            const esc  = ann.d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re   = new RegExp(`[ \\t]*<path(?:[^>]*)? d="${esc}"[^/]*/?>\\r?\\n?`, 'g');
            const prev = svg;
            svg = svg.replace(re, '');
            if (svg !== prev) {
                const isOutline = ann.type === 'outline' || ann.type === 'line';
                let attrs = '';
                if (isOutline) {
                    const cls = (ann.lineStyle === 'dashed') ? 'ann-outline-dashed' : 'ann-outline';
                    attrs = ` class="${cls}"`;
                }
                svg = ensureGroupAndAppend(svg, ann.toGroup, `    <path${attrs} d="${ann.d}"/>`);
            }

        } else if (ann.kind === 'exclude') {
            const esc = ann.d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re  = new RegExp(`[ \\t]*<path(?:[^>]*)? d="${esc}"[^/]*/?>\\r?\\n?`, 'g');
            svg = svg.replace(re, '');
            svg = ensureGroupAndAppend(svg, 'outlines', `    <path d="${ann.d}"/>`);

        } else if (ann.kind === 'move') {
            const esc = ann.d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re  = new RegExp(`(<path\\b)([^>]*\\bd="${esc}")([^/]*/>)`, 'g');
            svg = svg.replace(re, (_, open, mid, end) => {
                const tx = `translate(${ann.dx.toFixed(2)},${ann.dy.toFixed(2)})`;
                if (mid.includes('transform=')) {
                    return open + mid.replace(/transform="([^"]*)"/, `transform="${tx} $1"`) + end;
                }
                return `${open} transform="${tx}"${mid}${end}`;
            });

        } else if (ann.kind === 'reshape') {
            const esc = ann.origD.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re  = new RegExp(`(<path\\b)([^>]*\\bd="${esc}")([^/]*/>)`, 'g');
            svg = svg.replace(re, (_, open, mid, end) => {
                return open + mid.replace(/d="[^"]*"/, `d="${ann.newD}"`) + end;
            });

        } else if (ann.kind === 'map-outline') {
            if (ann.points.length < 2) continue;
            const pts = ann.points.map(p =>
                `${(p.nx * currentVW).toFixed(2)},${(p.ny * currentVH).toFixed(2)}`
            );
            const d = 'M ' + pts.join(' L ') + (ann.closed ? ' Z' : '');
            svg = ensureGroupAndAppend(svg, 'outlines', `    <path class="map-boundary-path" d="${d}"/>`);
        }
    }

    return svg;
}

// ── Export SVG builder ───────────────────────────────────────────────────────

const EXPORT_EXCLUDE_GROUPS = ['background', 'unclassified', 'pending'];

/**
 * Strips internal-only groups, applies 512×512 dimensions, and optionally
 * adds a clip-path from closed map-outline annotations so all fill layers
 * are masked to the hand-drawn map boundary.
 */
function buildExportSvg(
    svg:             string,
    sourceBasename:  string,
    outlineAnns:     MapOutlineServer[],
): string {
    let out = svg;

    // Remove internal-only groups and their CSS
    for (const id of EXPORT_EXCLUDE_GROUPS) {
        out = out.replace(new RegExp(`[ \\t]*<!--[^\\n]*${id}[^\\n]*-->\\s*`, 'gi'), '');
        out = out.replace(new RegExp(`[ \\t]*<g id="${id}">[\\s\\S]*?<\\/g>\\s*`, 'm'), '');
        out = out.replace(new RegExp(`\\s*#${id}[^{]*\\{[^}]*\\}`, 'g'), '');
    }

    // Convert annotation-outline dashes to a clean stroke for the final file
    out = out.replace(
        /path\.ann-outline\s*\{[^}]*\}/,
        'path.ann-outline { fill: none; stroke: #4aa8ff; stroke-width: 1.2; }',
    );

    // ── 512 × 512 sizing ──────────────────────────────────────────────────
    // Replace or inject width/height on the <svg> root element
    out = out.replace(/(<svg\b[^>]*?)(\s+width="[^"]*")?(\s+height="[^"]*")?(>)/,
        (_, pre, _w, _h, close) => pre + ' width="512" height="512"' + close,
    );

    // ── Clip-path from closed boundary outlines ────────────────────────────
    const closedOutlines = outlineAnns.filter(o => o.closed && o.points.length >= 3);
    if (closedOutlines.length > 0) {
        const vbMatch = out.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
        const vW = vbMatch ? parseFloat(vbMatch[1]) : 512;
        const vH = vbMatch ? parseFloat(vbMatch[2]) : 512;

        const clipPaths = closedOutlines.map(o => {
            const pts = o.points.map(p =>
                `${(p.nx * vW).toFixed(2)},${(p.ny * vH).toFixed(2)}`
            );
            return `    <path d="M ${pts.join(' L ')} Z"/>`;
        }).join('\n');

        const clipEl = `  <clipPath id="map-boundary">\n${clipPaths}\n  </clipPath>`;
        if (out.includes('</defs>')) {
            out = out.replace('</defs>', clipEl + '\n</defs>');
        } else {
            out = out.replace('<svg', '<svg');
            out = out.replace(/(<svg[^>]*>)/, '$1\n<defs>\n' + clipEl + '\n</defs>');
        }

        // Clip fill layers to the boundary (outlines group is intentionally NOT clipped
        // so the boundary stroke always renders as the full map border)
        for (const layerId of ['walls', 'thickerWalls', 'inaccessible', 'stairs']) {
            out = out.replace(
                `<g id="${layerId}"`,
                `<g id="${layerId}" clip-path="url(#map-boundary)"`,
            );
        }
    }

    // Generator comment
    const stamp = new Date().toISOString().slice(0, 10);
    out = out.replace(
        '<svg ',
        `<!-- DECLASSIFIED Map SVG Builder \u2014 ${sourceBasename} \u2014 ${stamp} -->\n<svg `,
    );

    out = out.replace(/\n{3,}/g, '\n\n');
    return out;
}

// ── HTTP server ──────────────────────────────────────────────────────────────

function readBody(req: http.IncomingMessage): Promise<string> {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (c: Buffer | string) => { body += c; });
        req.on('end', () => resolve(body));
        req.on('error', reject);
    });
}

const server = http.createServer(async (req, res) => {
    const url    = req.url ?? '/';
    const method = req.method ?? 'GET';

    // ── Serve UI ──────────────────────────────────────────────────────────
    if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(buildHtml());
        return;
    }

    // ── Serve current PNG image ───────────────────────────────────────────
    if (method === 'GET' && url.startsWith('/current-image')) {
        if (!currentPngBuffer) {
            res.writeHead(404); res.end('No image loaded'); return;
        }
        res.writeHead(200, { 'Content-Type': currentPngMime, 'Cache-Control': 'no-cache' });
        res.end(currentPngBuffer);
        return;
    }

    // ── Workspace info ────────────────────────────────────────────────────
    if (method === 'GET' && url === '/workspace') {
        const { pngs, sessions } = scanWorkspace();
        res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
        res.end(JSON.stringify({
            pngs,
            sessions,
            currentPng: currentPngPath
                ? path.relative(WORKSPACE_DIR, currentPngPath).replace(/\\/g, '/')
                : null,
        }));
        return;
    }

    // ── Load a PNG into server state ──────────────────────────────────────
    if (method === 'POST' && url === '/load-png') {
        try {
            const body = await readBody(req);
            const { filename } = JSON.parse(body) as { filename: string };
            if (!filename) throw new Error('Missing filename');
            loadPngFile(filename);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Save session ──────────────────────────────────────────────────────
    if (method === 'POST' && url === '/save-session') {
        try {
            const body    = await readBody(req);
            const session = JSON.parse(body) as SessionData;
            if (!session.name)    throw new Error('Missing name');
            if (!session.pngFile) throw new Error('Missing pngFile');
            saveSessionFile(session);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Load session ──────────────────────────────────────────────────────
    const sessionLoadMatch = method === 'GET' && url.match(/^\/session\/(.+)$/);
    if (sessionLoadMatch) {
        try {
            const name    = decodeURIComponent(sessionLoadMatch[1]);
            const session = loadSessionFile(name);
            res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
            res.end(JSON.stringify(session));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Delete session ────────────────────────────────────────────────────
    const sessionDeleteMatch = method === 'DELETE' && url.match(/^\/session\/(.+)$/);
    if (sessionDeleteMatch) {
        try {
            const name = decodeURIComponent(sessionDeleteMatch[1]);
            deleteSessionFile(name);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Process SVG ───────────────────────────────────────────────────────
    if (method === 'POST' && url === '/process') {
        if (!currentPngBuffer) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No image loaded' }));
            return;
        }
        try {
            const body     = await readBody(req);
            const parsed   = JSON.parse(body);
            const cfg      = (parsed.config ?? parsed) as MapConfig;
            const anns     = Array.isArray(parsed.annotations) ? parsed.annotations as AnnotationServer[] : [];
            const t0       = Date.now();
            const result   = await processMap(currentPngBuffer, cfg, false);
            const ms       = Date.now() - t0;

            // Refresh gray pixel cache
            try {
                const resized = cfg.maxSize > 0
                    ? await sharp(currentPngBuffer)
                        .resize(cfg.maxSize, cfg.maxSize, { fit: 'inside', withoutEnlargement: true })
                        .png().toBuffer()
                    : currentPngBuffer;
                const gray = await extractGrayPixels(resized);
                const vbm  = result.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
                grayCache  = {
                    pixels: gray.pixels, width: gray.width, height: gray.height,
                    vW: vbm ? parseFloat(vbm[1]) : gray.width,
                    vH: vbm ? parseFloat(vbm[2]) : gray.height,
                };
            } catch (e) { console.warn('[/process] gray cache error:', e); }

            res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
            res.end(JSON.stringify({
                svg:   injectAnnotations(result.svg, anns),
                stats: result.stats,
                ms,
            }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('[/process]', message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Flood fill ────────────────────────────────────────────────────────
    if (method === 'POST' && url === '/fill') {
        if (!grayCache) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No cache — run /process first' }));
            return;
        }
        try {
            const body = await readBody(req);
            const p    = JSON.parse(body);
            const nx   = Number(p.nx), ny = Number(p.ny), threshold = Number(p.threshold);
            const offset = Number(p.offset) || 0;
            if (isNaN(nx) || isNaN(ny) || isNaN(threshold)) throw new Error('bad values');
            const px   = Math.round(nx * grayCache.width);
            const py   = Math.round(ny * grayCache.height);
            const fill = await fillRegion(
                grayCache.pixels, grayCache.width, grayCache.height, px, py, threshold, offset,
            );
            res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
            res.end(JSON.stringify({
                path: fill.path, pixelCount: fill.pixelCount,
                vW: grayCache.vW, vH: grayCache.vH,
            }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('[/fill]', message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Debug bitmaps ─────────────────────────────────────────────────────
    if (method === 'POST' && url === '/debug') {
        if (!currentPngBuffer) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No image loaded' }));
            return;
        }
        try {
            const body   = await readBody(req);
            const cfg    = JSON.parse(body) as MapConfig;
            const result = await processMap(currentPngBuffer, cfg, true);
            const d      = result.debugBitmaps!;
            res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
            res.end(JSON.stringify({
                mask:        d.mask.toString('base64'),
                masked:      d.masked.toString('base64'),
                negatedMask: d.negatedMask.toString('base64'),
                wallBitmap:  d.wallBitmap.toString('base64'),
            }));
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('[/debug]', message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    // ── Export SVG ────────────────────────────────────────────────────────
    if (method === 'POST' && url === '/export') {
        if (!currentPngBuffer) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No image loaded' }));
            return;
        }
        try {
            const body     = await readBody(req);
            const parsed   = JSON.parse(body);
            const cfg      = (parsed.config ?? parsed) as MapConfig;
            const anns     = Array.isArray(parsed.annotations) ? parsed.annotations as AnnotationServer[] : [];
            const result   = await processMap(currentPngBuffer, cfg, false);
            const annotated = injectAnnotations(result.svg, anns);
            const outlineAnns = anns.filter((a): a is MapOutlineServer => a.kind === 'map-outline');
            const basename = currentPngPath
                ? path.basename(currentPngPath, path.extname(currentPngPath))
                : 'map';
            const clean    = buildExportSvg(annotated, basename, outlineAnns);
            const filename = basename + '.svg';
            res.writeHead(200, {
                'Content-Type': 'image/svg+xml; charset=utf-8',
                'Content-Disposition': `attachment; filename="${filename}"`,
                'Cache-Control': 'no-store',
            });
            res.end(clean);
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('[/export]', message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
        return;
    }

    res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
    console.log(`\nDECLASSIFIED  Map SVG Builder`);
    console.log(`\u2192  http://localhost:${PORT}`);
    console.log(`\nWorkspace: ${WORKSPACE_DIR}`);
    console.log('Drop PNG/JPG map images into that folder, then select them in the browser.\n');
    console.log('Fill mode   : click the map to flood-fill a region');
    console.log('Select mode : click any SVG path to reassign or exclude it');
    console.log('Outline mode: click to place map boundary vertices (Enter or Close to finish)');
    console.log('Export SVG  : downloads a clean 512\u00d7512 SVG');
    console.log('\nPress Ctrl+C to stop.\n');
});

server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EACCES' || err.code === 'EADDRINUSE') {
        console.error(`\nPort ${PORT} unavailable: ${err.message}`);
        console.error(`Try: npm run map:build -- --port 9091\n`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});
