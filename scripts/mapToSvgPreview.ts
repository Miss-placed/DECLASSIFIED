/**
 * mapToSvgPreview.ts
 *
 * Live-preview HTTP server for map SVG parameter tuning.
 *
 * Serves a browser UI at http://localhost:9090 where you can:
 *  - Tune all pipeline parameters with sliders and see the SVG update live
 *  - Click the map in Fill mode → BFS flood fill from that point → confirm as a layer
 *  - Click existing SVG paths in Select mode → reassign to any layer
 *  - Toggle layer visibility and map image opacity
 *
 * Usage:
 *   npx tsx scripts/mapToSvgPreview.ts --input <path-to-image> [--port 9090]
 */

import fs from 'node:fs';
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

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function requiredArg(name: string): string {
    const idx = process.argv.indexOf(`--${name}`);
    if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
    console.error(`Missing required argument: --${name}`);
    process.exit(1);
}

function optionalArg(name: string, fallback: number): number {
    const idx = process.argv.indexOf(`--${name}`);
    if (idx !== -1 && process.argv[idx + 1] !== undefined) {
        const v = Number(process.argv[idx + 1]);
        if (!isNaN(v)) return v;
    }
    return fallback;
}

const inputPath = requiredArg('input');
const PORT = optionalArg('port', 9090);

if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
}

const rawBuffer = fs.readFileSync(inputPath);
const imageBase64 = rawBuffer.toString('base64');
const imageExt = path.extname(inputPath).slice(1).toLowerCase();
const imageMime = imageExt === 'jpg' || imageExt === 'jpeg' ? 'image/jpeg' : 'image/png';
const imageDataUrl = `data:${imageMime};base64,${imageBase64}`;

console.log(`Image loaded: ${inputPath} (${(rawBuffer.length / 1024 / 1024).toFixed(1)} MB)`);

// ---------------------------------------------------------------------------
// Gray pixel cache — populated/refreshed after every /process call
// ---------------------------------------------------------------------------

interface GrayCache {
    pixels: Uint8Array;
    width:  number;
    height: number;
    vW:     number; // SVG viewBox width  from last render
    vH:     number; // SVG viewBox height from last render
}
let grayCache: GrayCache | null = null;

// ---------------------------------------------------------------------------
// Annotation types (server-side)
// ---------------------------------------------------------------------------

interface FilledShapeServer {
    kind:  'fill';
    id:    string;
    group: string;
    mode:  'add' | 'subtract';
    type:  'fill' | 'outline'; // fill = solid area; outline = stroke-only path
    path:  string; // potrace `d` string captured at vW x vH
    vW:    number;
    vH:    number;
}

interface ReassignmentServer {
    kind:      'reassign';
    id:        string;
    d:         string; // exact `d` attribute from the rendered SVG
    fromGroup: string;
    toGroup:   string;
    type:      'fill' | 'outline' | 'line'; // how to render in the target group
}

interface ExclusionServer {
    kind:      'exclude';
    id:        string;
    d:         string;     // `d` attribute of the path to remove everywhere
    fromGroup: string;     // original group (informational)
}

type AnnotationServer = FilledShapeServer | ReassignmentServer | ExclusionServer;

// ---------------------------------------------------------------------------
// HTML UI
// ---------------------------------------------------------------------------

function buildHtml(): string {
    const cfg = defaultConfig;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Map SVG Tuner \u2014 ${path.basename(inputPath)}</title>
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
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  font: 13px/1.5 'Segoe UI', system-ui, sans-serif;
}

/* ── LEFT PANEL ── */
#panel {
  width: 300px; flex-shrink: 0; display: flex;
  flex-direction: column; background: var(--panel);
  border-right: 1px solid var(--border); overflow: hidden;
}
#panel-header {
  padding: 10px 14px 8px; border-bottom: 1px solid var(--border); flex-shrink: 0;
}
#panel-header h1 { font-size: 13.5px; font-weight: 600; color: #eee; }
#panel-header .sub {
  font-size: 11px; color: var(--muted); margin-top: 1px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* mode toggle */
#mode-toggle {
  display: flex; padding: 8px 14px;
  border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 0;
}
.mode-btn {
  flex: 1; padding: 6px 8px; font-size: 12px; background: var(--row-bg);
  border: 1px solid var(--border); color: var(--muted); cursor: pointer;
  text-align: center; transition: all 0.15s;
}
.mode-btn:first-child { border-radius: 4px 0 0 4px; }
.mode-btn:last-child  { border-radius: 0 4px 4px 0; border-left: none; }
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

/* ── PREVIEW ── */
#preview {
  flex: 1; overflow: auto; background: #0a0a0a; padding: 16px;
}
#zoom-root { display: inline-block; line-height: 0; }
#canvas-wrap { position: relative; display: inline-block; flex-shrink: 0; }
#map-img { display: block; max-width: calc(100vw - 300px - 32px); image-rendering: pixelated; }

#svg-overlay { position: absolute; inset: 0; pointer-events: none; }
#svg-overlay svg { width: 100%; height: 100%; }
/* hide the SVG black background rect — the image IS the background */
#svg-overlay #background { display: none !important; }

/* select mode — overlay + paths become clickable */
#svg-overlay.select-mode { pointer-events: auto; cursor: default; }
#svg-overlay.select-mode svg { pointer-events: auto; }
/* Every path/polygon in select mode gets a pointer cursor */
#svg-overlay.select-mode path,
#svg-overlay.select-mode polygon { pointer-events: all; cursor: pointer; }
/* Except pending preview and background — they should not be clicked */
#svg-overlay.select-mode #pending path,
#svg-overlay.select-mode #pending polygon { pointer-events: none; }
#svg-overlay.select-mode #background     { pointer-events: none; }

/* selected path highlight */
#svg-overlay .path-selected { filter: drop-shadow(0 0 4px #ffe066); outline: none; }

/* pending fill preview — solid fill */
#svg-overlay #pending path, #svg-overlay #pending polygon {
  fill: rgba(255,220,40,0.22);
  stroke: #ffe066;
  stroke-width: 1.5;
  animation: fadeIn 0.3s ease;
}
/* pending fill preview — outline mode: dashed stroke only */
#svg-overlay #pending.outline path,
#svg-overlay #pending.outline polygon {
  fill: none;
  stroke: #ffe066;
  stroke-width: 3;
  stroke-dasharray: 7 3;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* subtract compositing */
#inaccessible, #stairs { isolation: isolate; }
.subtract { fill: #000 !important; mix-blend-mode: destination-out; }

#busy-veil {
  position: absolute; inset: 0; background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  color: var(--orange); font-size: 13px; letter-spacing: 0.05em;
  opacity: 0; pointer-events: none; transition: opacity 0.15s;
}
#busy-veil.show { opacity: 1; }

/* sonar ping ring */
.ping-ring {
  position: fixed; width: 40px; height: 40px;
  margin-left: -20px; margin-top: -20px;
  border-radius: 50%; border: 2px solid var(--accent);
  pointer-events: none;
  animation: sonar 0.65s ease-out forwards;
}
@keyframes sonar {
  0%   { transform: scale(0.1); opacity: 1; }
  100% { transform: scale(4.5); opacity: 0; }
}

/* floating confirmation panel */
#float-panel {
  position: fixed; width: 248px;
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

/* fill type / select treat-as buttons */
.fp-type-btn {
  flex: 1; padding: 4px 6px; background: var(--row-bg); border: 1px solid var(--border);
  border-radius: 3px; color: var(--muted); font-size: 11px; cursor: pointer;
}
.fp-type-btn:hover { border-color: #444; color: var(--text); }
.fp-type-btn.active     { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 600; }
.fp-type-btn.excl-active { background: #b22; border-color: #c33; color: #fff; font-weight: 600; }

/* debug bitmaps */
.debug-bitmap { margin-bottom: 12px; }
.debug-bitmap h3 {
  font-size: 11px; color: var(--muted); text-transform: uppercase;
  letter-spacing: 0.05em; margin-bottom: 5px;
}
.debug-bitmap img { width: 100%; border-radius: 4px; border: 1px solid var(--border); image-rendering: pixelated; display: block; }
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

<!-- ════════ LEFT PANEL ════════ -->
<div id="panel">
  <div id="panel-header">
    <h1>Map SVG Tuner</h1>
    <div class="sub">${path.basename(inputPath)}</div>
  </div>

  <div id="mode-toggle">
    <button class="mode-btn active" id="btn-fill-mode">&#x25C9;&nbsp; Fill</button>
    <button class="mode-btn" id="btn-select-mode">&#x25A1;&nbsp; Select paths</button>
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
    <div id="status-msg">Initialising\u2026</div>
    <div id="status-time"></div>
  </div>
</div>

<!-- ════════ PREVIEW ════════ -->
<div id="preview">
  <div id="canvas-wrap">
    <img id="map-img" src="${imageDataUrl}" alt="map">
    <div id="svg-overlay"></div>
    <div id="busy-veil">Processing\u2026</div>
  </div>
</div>

<!-- ════════ FLOATING PANEL ════════ -->
<div id="float-panel">
  <!-- fill variant -->
  <div id="fp-fill">
    <h3>Fill region</h3>
    <div class="fp-row">
      <div class="fp-label">Fill sensitivity</div>
      <div style="display:flex;align-items:center;gap:6px">
        <input type="range" id="fp-sensitivity" min="10" max="255" step="1" value="${cfg.wallThreshold}"
               style="flex:1;accent-color:var(--accent);height:3px;cursor:pointer">
        <div id="fp-sensitivity-v" style="width:28px;text-align:right;font-family:monospace;font-size:11.5px;color:var(--accent)">${cfg.wallThreshold}</div>
      </div>
    </div>
    <div class="fp-row">
      <div class="fp-label">Layer</div>
      <div class="fp-btns">
        <button class="fp-btn active" data-group="inaccessible">Inaccessible</button>
        <button class="fp-btn" data-group="stairs">Stairs</button>
        <button class="fp-btn" data-group="walls">Walls</button>
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
    <div class="fp-actions">
      <button class="fp-confirm" id="fp-fill-confirm">Confirm</button>
      <button class="fp-discard" id="fp-fill-discard">Discard</button>
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
      Removes path from all groups. Its outline is kept in Outlines and will survive re-scans.
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

  // ── scroll-to-zoom
  let zoom = 1, baseW = 0, baseH = 0;
  function captureBase() {
    if (!baseW && mapImg.offsetWidth > 0) { baseW = mapImg.offsetWidth; baseH = mapImg.offsetHeight; }
  }
  mapImg.addEventListener('load', captureBase);
  setTimeout(captureBase, 0);
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
  }, { passive: false });

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

  // ── status ───────────────────────────────────────────────────────────────
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

  // ── annotations ──────────────────────────────────────────────────────────
  let annotations = [];
  const GROUP_COLORS = {
    inaccessible: 'rgba(0,40,100,0.8)', stairs: '#00ccff',
    walls: '#888', thickerWalls: '#aaa', outlines: '#ff4444', unclassified: '#f0c040',
  };
  function renderAnnotationList() {
    const list = document.getElementById('annotation-list');
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
        const ti = a.type === 'outline' || a.type === 'line' ? '\u25a1' : '\u25a3';
        label = a.fromGroup + ' \u2192 ' + ti + ' ' + a.toGroup;
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
        annotations = annotations.filter(a => a.id !== e.currentTarget.dataset.id);
        renderAnnotationList();
        process(getConfig());
      })
    );
  }
  function updateStats(stats) {
    document.getElementById('wall-count').textContent      = stats.walls;
    document.getElementById('thick-count').textContent     = stats.thickerWalls;
    document.getElementById('unclass-count').textContent   = stats.unclassified;
    document.getElementById('lc-outlines').textContent     = stats.outlines;
    document.getElementById('lc-walls').textContent        = stats.walls;
    document.getElementById('lc-thicker').textContent      = stats.thickerWalls;
    document.getElementById('lc-unclassified').textContent = stats.unclassified;
    const fills = annotations.filter(a => a.kind === 'fill');
    document.getElementById('lc-inaccessible').textContent =
      fills.filter(a => a.group === 'inaccessible').length || '\u2014';
    document.getElementById('lc-stairs').textContent =
      fills.filter(a => a.group === 'stairs').length || '\u2014';
  }

  // ── mode toggle ──────────────────────────────────────────────────────────
  let interactionMode = 'fill';
  const svgOverlay = document.getElementById('svg-overlay');
  document.getElementById('btn-fill-mode').addEventListener('click',   () => setMode('fill'));
  document.getElementById('btn-select-mode').addEventListener('click', () => setMode('select'));
  function setMode(mode) {
    interactionMode = mode;
    document.getElementById('btn-fill-mode').classList.toggle('active', mode === 'fill');
    document.getElementById('btn-select-mode').classList.toggle('active', mode === 'select');
    svgOverlay.classList.toggle('select-mode', mode === 'select');
    if (mode === 'fill') clearSelectHighlight();
    hideFloatPanel();
  }

  // ── fill interaction ─────────────────────────────────────────────────────
  let pendingFill   = null;
  let fillDebouncer = null;
  const canvasWrap  = document.getElementById('canvas-wrap');

  canvasWrap.addEventListener('click', e => {
    if (interactionMode !== 'fill') return;
    if (e.target.closest('#float-panel')) return;
    // Clicks on SVG paths in fill mode should still fill (overlay has pointer-events:none)
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
    ring.style.left = cx + 'px';
    ring.style.top  = cy + 'px';
    document.body.appendChild(ring);
    ring.addEventListener('animationend', () => ring.remove());
  }

  function requestFill(nx, ny) {
    const sensitivity = Number(document.getElementById('fp-sensitivity').value);
    clearTimeout(fillDebouncer);
    fillDebouncer = setTimeout(async () => {
      try {
        setStatus('busy', 'Filling\u2026');
        const res = await fetch('/fill', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nx, ny, threshold: sensitivity }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: 'Server error' }));
          setStatus('error', err.error || 'Fill failed');
          return;
        }
        const data = await res.json();
        setStatus('', 'Ready');
        if (!data.path) {
          setStatus('', 'No fill — try a darker area');
          return;
        }
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

  function showPendingPath(d) {
    const svg = document.querySelector('#svg-overlay svg');
    if (!svg) return;
    let g = svg.getElementById('pending');
    if (!g) {
      g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.id = 'pending';
      svg.appendChild(g);
    }
    g.className.baseVal = fillType === 'outline' ? 'outline' : '';
    g.innerHTML = '<path d="' + d.replace(/"/g, '&quot;') + '"/>';
  }

  function clearPendingPath() {
    const svg = document.querySelector('#svg-overlay svg');
    if (svg) { const g = svg.getElementById('pending'); if (g) g.innerHTML = ''; }
  }

  // Fill group buttons
  document.querySelectorAll('[data-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-group]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Fill mode (add / subtract)
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

  // Fill type (solid area vs stroke outline)
  let fillType = 'fill';
  document.getElementById('fp-type-fill').addEventListener('click', () => {
    fillType = 'fill';
    document.getElementById('fp-type-fill').classList.add('active');
    document.getElementById('fp-type-outline').classList.remove('active');
    if (pendingFill && pendingFill.path) showPendingPath(pendingFill.path);
  });
  document.getElementById('fp-type-outline').addEventListener('click', () => {
    fillType = 'outline';
    document.getElementById('fp-type-outline').classList.add('active');
    document.getElementById('fp-type-fill').classList.remove('active');
    if (pendingFill && pendingFill.path) showPendingPath(pendingFill.path);
  });

  document.getElementById('fp-fill-confirm').addEventListener('click', () => {
    if (!pendingFill || !pendingFill.path) { hideFloatPanel(); return; }
    const group = document.querySelector('[data-group].active')?.dataset?.group || 'inaccessible';
    annotations.push({ kind:'fill', id:'ann-'+Date.now(), group, mode: fillMode, type: fillType,
                        path: pendingFill.path, vW: pendingFill.vW, vH: pendingFill.vH });
    pendingFill = null;
    hideFloatPanel();
    renderAnnotationList();
    process(getConfig());
  });
  document.getElementById('fp-fill-discard').addEventListener('click', () => {
    pendingFill = null; clearPendingPath(); hideFloatPanel();
  });

  // ── select interaction ───────────────────────────────────────────────────
  let selectedPathEl    = null;
  let selectedFromGroup = null;
  let selectedD         = null;
  let selectedToGroup   = null;

  function attachSelectListeners() {
    const SELECTABLE = ['outlines','walls','thickerWalls','unclassified','inaccessible','stairs'];
    const svg = document.querySelector('#svg-overlay svg');
    if (!svg) return;
    SELECTABLE.forEach(gId => {
      const g = svg.getElementById(gId);
      if (!g) return;
      g.querySelectorAll('path, polygon').forEach(el => {
        el.addEventListener('click', ev => {
          if (interactionMode !== 'select') return;
          ev.stopPropagation();
          selectPath(el, gId, el.getAttribute('d') || '');
          showSelectPanel(ev.clientX, ev.clientY, gId);
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

  document.querySelectorAll('.fp-layer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fp-layer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedToGroup = btn.dataset.togroup;
    });
  });

  // Select panel type (Line / Fill / Exclude)
  let selPathType = 'line';
  const SEL_TYPE_IDS = ['fp-sel-type-line', 'fp-sel-type-fill', 'fp-sel-type-exclude'];
  SEL_TYPE_IDS.forEach(btnId => {
    document.getElementById(btnId).addEventListener('click', () => {
      selPathType = btnId.replace('fp-sel-type-', '');
      SEL_TYPE_IDS.forEach(id => document.getElementById(id).classList.remove('active', 'excl-active'));
      document.getElementById(btnId).classList.add(selPathType === 'exclude' ? 'excl-active' : 'active');
      document.getElementById('fp-excl-hint').style.display     = selPathType === 'exclude' ? '' : 'none';
      document.getElementById('fp-sel-layer-row').style.display = selPathType === 'exclude' ? 'none' : '';
    });
  });

  document.getElementById('fp-select-confirm').addEventListener('click', () => {
    if (!selectedD) { hideFloatPanel(); clearSelectHighlight(); return; }
    if (selPathType === 'exclude') {
      annotations.push({ kind:'exclude', id:'ann-'+Date.now(),
                          d: selectedD, fromGroup: selectedFromGroup });
    } else {
      if (!selectedToGroup) { hideFloatPanel(); clearSelectHighlight(); return; }
      annotations.push({ kind:'reassign', id:'ann-'+Date.now(), d: selectedD,
                          fromGroup: selectedFromGroup, toGroup: selectedToGroup,
                          type: selPathType });
    }
    clearSelectHighlight(); hideFloatPanel();
    renderAnnotationList(); process(getConfig());
  });
  document.getElementById('fp-select-discard').addEventListener('click', () => {
    clearSelectHighlight(); hideFloatPanel();
  });

  // ── floating panel ───────────────────────────────────────────────────────
  const floatPanel = document.getElementById('float-panel');

  // Drag float panel by its header
  let fpDragging = false, fpDragOX = 0, fpDragOY = 0;
  floatPanel.addEventListener('mousedown', e => {
    if (!e.target.closest('h3')) return;
    fpDragging = true;
    const rect = floatPanel.getBoundingClientRect();
    fpDragOX = e.clientX - rect.left;
    fpDragOY = e.clientY - rect.top;
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
    positionPanel(cx, cy);
    floatPanel.classList.add('visible');
  }
  function showSelectPanel(cx, cy, fromGroup) {
    document.getElementById('fp-fill').style.display   = 'none';
    document.getElementById('fp-select').style.display = '';
    document.getElementById('fp-select-current').textContent = 'Currently in: ' + fromGroup;
    // Reset treat-as state
    selPathType = 'line';
    SEL_TYPE_IDS.forEach(id => document.getElementById(id).classList.remove('active', 'excl-active'));
    document.getElementById('fp-sel-type-line').classList.add('active');
    document.getElementById('fp-excl-hint').style.display     = 'none';
    document.getElementById('fp-sel-layer-row').style.display = '';
    document.querySelectorAll('.fp-layer-btn').forEach(b => b.classList.remove('active'));
    selectedToGroup = null;
    positionPanel(cx, cy);
    floatPanel.classList.add('visible');
  }
  function positionPanel(cx, cy) {
    const W = 248, H = floatPanel.scrollHeight || 220;
    const vw = window.innerWidth, vh = window.innerHeight;
    let left = cx + 14, top = cy + 14;
    if (left + W > vw - 8) left = cx - W - 14;
    if (top  + H > vh - 8) top  = cy - H - 14;
    floatPanel.style.left = Math.max(4, left) + 'px';
    floatPanel.style.top  = Math.max(4, top)  + 'px';
  }
  function hideFloatPanel() {
    floatPanel.classList.remove('visible');
    clearPendingPath();
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      pendingFill = null; clearSelectHighlight(); clearPendingPath(); hideFloatPanel();
    }
  });

  // ── process ──────────────────────────────────────────────────────────────
  let debounceTimer = null, inFlight = false, pendingCfg = null;

  function scheduleProcess() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => process(getConfig()), 350);
  }

  async function process(cfg) {
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
      if (interactionMode === 'select') attachSelectListeners();
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
      const data = await res.json();
      const slots = { 'dbg-mask': data.mask, 'dbg-masked': data.masked,
                      'dbg-negmask': data.negatedMask, 'dbg-wallbmp': data.wallBitmap };
      for (const [id, src] of Object.entries(slots)) {
        const el = document.getElementById(id);
        if (src) el.outerHTML = '<img id="' + id + '" src="data:image/png;base64,' + src +
          '" style="width:100%;border-radius:4px;border:1px solid var(--border)">';
      }
      btn.textContent = 'Reload Debug Bitmaps';
    } catch (err) {
      btn.textContent = 'Error: ' + err.message;
    } finally { btn.disabled = false; }
  });

  // ── kick off ─────────────────────────────────────────────────────────────
  process(getConfig());
})();
</script>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Annotation injection — server side
// ---------------------------------------------------------------------------

/** Inject pathEl into <g id="groupId"> or create the group before </svg>. */
function ensureGroupAndAppend(svg: string, groupId: string, pathEl: string): string {
    const openTag = `<g id="${groupId}"`;
    const idx = svg.indexOf(openTag);
    if (idx !== -1) {
        const closeIdx = svg.indexOf('</g>', idx);
        if (closeIdx !== -1) {
            return svg.slice(0, closeIdx) + pathEl + '\n  ' + svg.slice(closeIdx);
        }
    }
    return svg.replace('</svg>', `  <g id="${groupId}">\n${pathEl}\n  </g>\n\n</svg>`);
}

/**
 * Injects user annotations into the rendered SVG.
 *
 * FilledShape (add):      appends <path d="..."/> into target group
 * FilledShape (subtract): appends <path class="subtract" .../> — mix-blend-mode punch-through
 * Reassignment:           removes exact path from fromGroup, appends to toGroup
 */
function injectAnnotations(svg: string, annotations: AnnotationServer[]): string {
    if (annotations.length === 0) return svg;

    const vbMatch = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    const currentVW = vbMatch ? parseFloat(vbMatch[1]) : 0;
    const currentVH = vbMatch ? parseFloat(vbMatch[2]) : 0;

    // Ensure pending group exists (client uses it for fill preview)
    if (!svg.includes('id="pending"')) {
        svg = svg.replace('</svg>', '  <g id="pending"></g>\n\n</svg>');
    }

    // Inject annotation override styles once so outline paths override group fills
    if (!svg.includes('ann-outline')) {
        svg = svg.replace(
            '  </style>',
            `    path.ann-outline { fill: none !important; stroke: #7ecfff; stroke-width: 1.5; stroke-dasharray: 5 2; }\n  </style>`,
        );
    }

    for (const ann of annotations) {
        if (ann.kind === 'fill') {
            const isOutline = ann.type === 'outline';
            let attrs: string;
            if (isOutline) {
                attrs = ' class="ann-outline"';
            } else if (ann.mode === 'subtract') {
                attrs = ' class="subtract"';
            } else {
                attrs = '';
            }
            let pathEl = `    <path${attrs} d="${ann.path}"/>`;

            // Scale if SVG viewBox changed (e.g. maxSize slider moved)
            if (ann.vW && ann.vH && currentVW && currentVH &&
                (Math.abs(ann.vW - currentVW) > 1 || Math.abs(ann.vH - currentVH) > 1)) {
                const sx = (currentVW / ann.vW).toFixed(5);
                const sy = (currentVH / ann.vH).toFixed(5);
                pathEl = `    <path${attrs} transform="scale(${sx},${sy})" d="${ann.path}"/>`;
            }
            svg = ensureGroupAndAppend(svg, ann.group, pathEl);

        } else if (ann.kind === 'reassign') {
            // Remove path from source group (handles paths with or without extra attributes)
            const esc = ann.d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re  = new RegExp(`[ \\t]*<path(?:[^>]*)? d="${esc}"[^/]*/?>\\r?\\n?`, 'g');
            const before = svg;
            svg = svg.replace(re, '');
            if (svg !== before) {
                const isOutline = ann.type === 'outline' || ann.type === 'line';
                const attrs = isOutline ? ' class="ann-outline"' : '';
                svg = ensureGroupAndAppend(svg, ann.toGroup, `    <path${attrs} d="${ann.d}"/>`);
            }

        } else if (ann.kind === 'exclude') {
            // Remove path from all groups; preserve its outline in the outlines group
            const esc = ann.d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re  = new RegExp(`[ \\t]*<path(?:[^>]*)? d="${esc}"[^/]*/?>\\r?\\n?`, 'g');
            svg = svg.replace(re, '');
            // Plain path in outlines group — inherits #outlines CSS (fill:none, stroke:#ff3333)
            svg = ensureGroupAndAppend(svg, 'outlines', `    <path d="${ann.d}"/>`);
        }
    }

    return svg;
}

// ---------------------------------------------------------------------------
// HTTP server
// ---------------------------------------------------------------------------

const server = http.createServer(async (req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(buildHtml());
        return;
    }

    if (req.method === 'POST' && req.url === '/process') {
        let body = '';
        req.on('data', c => { body += c; });
        req.on('end', async () => {
            let cfg: MapConfig;
            let annotations: AnnotationServer[] = [];
            try {
                const parsed = JSON.parse(body);
                cfg = (parsed.config ?? parsed) as MapConfig;
                annotations = Array.isArray(parsed.annotations) ? parsed.annotations as AnnotationServer[] : [];
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
                return;
            }
            const t0 = Date.now();
            try {
                const result = await processMap(rawBuffer, cfg, false);
                const ms = Date.now() - t0;

                // Refresh gray pixel cache for /fill endpoint
                try {
                    const resized = cfg.maxSize > 0
                        ? await sharp(rawBuffer)
                            .resize(cfg.maxSize, cfg.maxSize, { fit: 'inside', withoutEnlargement: true })
                            .png().toBuffer()
                        : rawBuffer;
                    const gray = await extractGrayPixels(resized);
                    const vbm  = result.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
                    grayCache = {
                        pixels: gray.pixels, width: gray.width, height: gray.height,
                        vW: vbm ? parseFloat(vbm[1]) : gray.width,
                        vH: vbm ? parseFloat(vbm[2]) : gray.height,
                    };
                } catch (cacheErr) {
                    console.warn('[/process] gray cache refresh failed:', cacheErr);
                }

                res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
                res.end(JSON.stringify({
                    svg:   injectAnnotations(result.svg, annotations),
                    stats: result.stats,
                    ms,
                }));
            } catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                console.error('[/process] Error:', message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: message }));
            }
        });
        return;
    }

    if (req.method === 'POST' && req.url === '/fill') {
        let body = '';
        req.on('data', c => { body += c; });
        req.on('end', async () => {
            if (!grayCache) {
                res.writeHead(503, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No cache — run /process first' }));
                return;
            }
            let nx: number, ny: number, threshold: number;
            try {
                const p = JSON.parse(body);
                nx = Number(p.nx); ny = Number(p.ny); threshold = Number(p.threshold);
                if (isNaN(nx) || isNaN(ny) || isNaN(threshold)) throw new Error('bad values');
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Expected { nx, ny, threshold }' }));
                return;
            }
            const px = Math.round(nx * grayCache.width);
            const py = Math.round(ny * grayCache.height);
            try {
                const result = await fillRegion(
                    grayCache.pixels, grayCache.width, grayCache.height, px, py, threshold,
                );
                res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
                res.end(JSON.stringify({
                    path: result.path, pixelCount: result.pixelCount,
                    vW: grayCache.vW, vH: grayCache.vH,
                }));
            } catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                console.error('[/fill] Error:', message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: message }));
            }
        });
        return;
    }

    if (req.method === 'POST' && req.url === '/debug') {
        let body = '';
        req.on('data', c => { body += c; });
        req.on('end', async () => {
            let cfg: MapConfig;
            try { cfg = JSON.parse(body) as MapConfig; }
            catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
                return;
            }
            try {
                const result = await processMap(rawBuffer, cfg, true);
                const d = result.debugBitmaps!;
                res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
                res.end(JSON.stringify({
                    mask:        d.mask.toString('base64'),
                    masked:      d.masked.toString('base64'),
                    negatedMask: d.negatedMask.toString('base64'),
                    wallBitmap:  d.wallBitmap.toString('base64'),
                }));
            } catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                console.error('[/debug] Error:', message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: message }));
            }
        });
        return;
    }

    res.writeHead(404);
    res.end('Not found');
});

server.listen(PORT, () => {
    console.log(`\nMap SVG Preview  \u2192  http://localhost:${PORT}`);
    console.log(`Input: ${inputPath}`);
    console.log('\nFill mode  : click the map to flood-fill a region from that point');
    console.log('Select mode: click any SVG path to reassign it to a different layer');
    console.log('\nPress Ctrl+C to stop.\n');
});

server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EACCES' || err.code === 'EADDRINUSE') {
        console.error(`\nPort ${PORT} unavailable: ${err.message}`);
        console.error(`Try: npx tsx scripts/mapToSvgPreview.ts --input <image> --port 9091\n`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});
