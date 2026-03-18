/**
 * mapToSvg.ts
 *
 * Converts a map image into a grouped SVG overlay with the following groups:
 *   - outlines      : outer boundary ring — traced from the interior mask perimeter
 *   - inaccessible  : MANUAL — auto-detection unreliable; empty placeholder for SVG-editor fill
 *   - walls         : thin interior dividing lines (Laplacian edge detection)
 *   - thickerWalls  : heavier dividing lines
 *   - stairs        : MANUAL — populate from `unclassified` group in SVG editor
 *   - unclassified  : larger non-wall shapes — review manually for stairs/features
 *
 * Pipeline:
 *   Pre-pass : BFS flood fill from image edges stops at the bright outer ring → interior mask
 *   Pass 1   : Negate the mask → trace with potrace → outline boundary path
 *   Pass 2   : Threshold bright pixels on masked image → trace → keep only elongated shapes as walls
 *              Round shapes (light discs, aspect≈1) are filtered; elongated strips (walls, aspect≥4) are kept.
 *              Dark room floors are below threshold so they don't appear at all.
 *
 * NOTE: inaccessible detection is intentionally omitted. Dark walkable floors and dark
 * inaccessible blockers have overlapping luminance and cannot be separated automatically.
 * Trace inaccessible regions manually in an SVG editor.
 *
 * Usage:
 *   npx tsx scripts/mapToSvg.ts --input <path-to-image> --output <path-to-svg> [--debug]
 *
 * Optional flags:
 *   --boundaryThreshold <n>  Luminance cutoff for BFS ring barrier (default: 128)
 *   --wallThreshold     <n>  Luminance cutoff to isolate bright wall pixels (default: 35)
 *                            Pixels above this = bright walls/lights; below = dark floors (ignored)
 *   --wallTurd          <n>  potrace turdSize for wall pass — raise to drop short stubs (default: 5)
 *   --strokeThreshold   <n>  SVG-px short-side cutoff: thickerWalls vs walls (default: 3)
 *   --aspectThreshold   <n>  Min long/short ratio to classify as a wall (default: 4)
 *                            Light discs aspect≈1 are filtered; wall strips aspect≥4 are kept.
 *   --minPathArea       <n>  Min bbox area to include at all — noise filter (default: 30)
 *   --minUnclassified   <n>  Min bbox area to keep in unclassified/stairs group (default: 500)
 *   --maxSize           <n>  Resize longest edge to this before processing (default: 2048)
 *   --debug                  Save intermediate bitmap PNGs alongside output SVG
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import potrace from 'potrace';
import sharp from 'sharp';

// ---------------------------------------------------------------------------
// CLI argument parsing (used only when run directly)
// ---------------------------------------------------------------------------

function arg(name: string, fallback: number): number {
    const idx = process.argv.indexOf(`--${name}`);
    if (idx !== -1 && process.argv[idx + 1] !== undefined) {
        const val = Number(process.argv[idx + 1]);
        if (!isNaN(val)) return val;
    }
    return fallback;
}

function requiredArg(name: string): string {
    const idx = process.argv.indexOf(`--${name}`);
    if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
    console.error(`Missing required argument: --${name}`);
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Config type — exported so the preview server can construct it
// ---------------------------------------------------------------------------

export interface MapConfig {
    boundaryThreshold: number;
    wallThreshold: number;
    wallTurd: number;
    strokeThreshold: number;
    aspectThreshold: number;
    minPathArea: number;
    minUnclassified: number;
    maxSize: number;
}

export const defaultConfig: MapConfig = {
    boundaryThreshold: 128,
    wallThreshold: 35,
    wallTurd: 5,
    strokeThreshold: 8,
    aspectThreshold: 4,
    minPathArea: 30,
    minUnclassified: 500,
    maxSize: 2048,
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BBox {
    x: number;
    y: number;
    width: number;
    height: number;
    area: number;
}

// ---------------------------------------------------------------------------
// Image preprocessing helpers
// ---------------------------------------------------------------------------

/**
 * Creates a binary interior mask by BFS flood-filling from all image edges.
 *
 * The bright white outer boundary ring (luminance > boundaryThreshold) acts as
 * a barrier. The flood fill seeds from every edge pixel and propagates through
 * dark/medium pixels (everything BELOW the threshold). Pixels the fill reaches
 * are exterior; all others are interior.
 *
 * Returns a 1-channel PNG: 255 = inside the map boundary, 0 = outside.
 *
 * Prerequisite: the outer ring must be continuous (no gaps). If the ring has
 * gaps the fill will leak through them. Use --boundaryThreshold to tune.
 */
async function createInteriorMask(buf: Buffer, cfg: MapConfig): Promise<Buffer> {
    const { data, info } = await sharp(buf)
        .flatten({ background: { r: 0, g: 0, b: 0 } })
        .greyscale()
        .raw()
        .toBuffer({ resolveWithObject: true });

    const { width, height } = info;
    const pixels = new Uint8Array(data.buffer);
    const exterior = new Uint8Array(width * height); // 0 = unknown, 1 = outside
    const queue: number[] = [];
    let head = 0;

    const seed = (i: number) => {
        if (!exterior[i] && pixels[i] < cfg.boundaryThreshold) {
            exterior[i] = 1;
            queue.push(i);
        }
    };

    // Seed from all 4 image edges
    for (let x = 0; x < width; x++) {
        seed(x);                          // top row
        seed((height - 1) * width + x);   // bottom row
    }
    for (let y = 1; y < height - 1; y++) {
        seed(y * width);                  // left column
        seed(y * width + width - 1);      // right column
    }

    // BFS — O(n) with head-pointer array (avoids O(n²) shift())
    while (head < queue.length) {
        const idx = queue[head++];
        const x = idx % width;
        const y = Math.floor(idx / width);
        if (y > 0) seed(idx - width);
        if (y < height - 1) seed(idx + width);
        if (x > 0) seed(idx - 1);
        if (x < width - 1) seed(idx + 1);
    }

    // Interior = not exterior. Ring pixels themselves are also included (they're
    // the boundary, so they belong to the interior group for rendering purposes).
    const maskPixels = Buffer.alloc(width * height);
    for (let i = 0; i < width * height; i++) {
        maskPixels[i] = exterior[i] ? 0 : 255;
    }

    return sharp(maskPixels, { raw: { width, height, channels: 1 } })
        .png()
        .toBuffer();
}

/**
 * Applies the interior mask to the image: exterior pixels become black.
 *
 * Uses sharp's joinChannel to attach the mask as the alpha channel, then
 * flattens with a black background — making all alpha=0 (exterior) pixels black.
 * This completely isolates all processing passes to inside the boundary ring.
 */
async function applyMask(imageBuf: Buffer, maskBuf: Buffer): Promise<Buffer> {
    return sharp(imageBuf)
        .flatten({ background: { r: 0, g: 0, b: 0 } })  // remove original alpha; exterior → black
        .joinChannel(maskBuf)                              // attach interior mask as alpha
        .flatten({ background: { r: 0, g: 0, b: 0 } })  // exterior (alpha=0) → black
        .png()
        .toBuffer();
}

/** Resize a buffer to fit within maxSize (longest edge), preserving aspect ratio. */
async function maybeResize(inputBuffer: Buffer, cfg: MapConfig): Promise<Buffer> {
    if (cfg.maxSize <= 0) return inputBuffer;
    const meta = await sharp(inputBuffer).metadata();
    const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
    if (longest <= cfg.maxSize) return inputBuffer;
    console.log(`  Resizing from ${meta.width}x${meta.height} → max ${cfg.maxSize}px...`);
    return sharp(inputBuffer)
        .resize(cfg.maxSize, cfg.maxSize, { fit: 'inside', withoutEnlargement: true })
        .png()
        .toBuffer();
}

/**
 * Wall pass: isolates bright wall pixels from the masked image using a luminance threshold.
 *
 * WHY this works better than Laplacian for this map:
 *   - Laplacian responds to transitions → it traces the EDGE RING of every light halo.
 *     Those rings are thin and circular → high aspect ratio → falsely classfied as walls.
 *   - This pass traces the FILLED AREA of bright pixels directly.
 *     Light sources → large circular disc shapes (aspect≈1) → filtered by aspectThreshold.
 *     Wall lines   → elongated thin strips (aspect≥4) → kept as walls.
 *     Dark floors  → below threshold → not traced at all.
 *
 * Pipeline: flatten(black) → greyscale → threshold(n) → negate → potrace input
 */
async function wallPass(buf: Buffer, cfg: MapConfig): Promise<Buffer> {
    return sharp(buf)
        .flatten({ background: { r: 0, g: 0, b: 0 } })
        .greyscale()
        .threshold(cfg.wallThreshold)
        .negate()  // bright walls → black for potrace
        .png()
        .toBuffer();
}

// ---------------------------------------------------------------------------
// potrace wrapper — returns a promise with the raw SVG string
// ---------------------------------------------------------------------------

function trace(
    imageBuffer: Buffer,
    options: potrace.PotraceOptions,
): Promise<string> {
    return new Promise((resolve, reject) => {
        potrace.trace(imageBuffer, options, (err: Error | null, svg: string) => {
            if (err) reject(err);
            else resolve(svg);
        });
    });
}

// ---------------------------------------------------------------------------
// Compound path splitting + extraction
// ---------------------------------------------------------------------------

/**
 * Potrace emits compound paths: one <path d="M...z M...z"/> element where each
 * M...{next M} block is a separate closed contour. Split these into individual segments
 * so each can be classified independently.
 */
function splitCompoundPath(d: string): string[] {
    // Potrace does NOT emit 'z' close-path commands.
    // Subpaths are separated only by 'M ' (capital M + space).
    const segments = d.match(/M [^M]+/g) ?? [];
    return segments.map((s) => s.trim()).filter((s) => s.length > 5);
}

/** Extract and split all subpaths from a potrace SVG string. */
function extractSubpaths(svg: string): string[] {
    // Use [\s\S] to handle newlines within d values
    const regex = /\bd="([\s\S]*?)"/g;
    const all: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(svg)) !== null) {
        all.push(...splitCompoundPath(match[1]));
    }
    return all;
}

// ---------------------------------------------------------------------------
// Bounding box estimation from SVG path data
// ---------------------------------------------------------------------------

/**
 * Very lightweight bounding-box estimator.
 * Parses absolute M/L/H/V/Z commands and coordinate pairs from the `d` string.
 * This covers the majority of what potrace emits (mostly M, L, C, z).
 * Cubic bezier control points are included as approximate bounds — good enough
 * for classification purposes.
 */
function estimateBBox(d: string): BBox {
    const nums = d.match(/-?\d+(\.\d+)?/g);
    if (!nums || nums.length < 2) {
        return { x: 0, y: 0, width: 0, height: 0, area: 0 };
    }

    const values = nums.map(Number);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    // potrace paths are sequences of coordinate pairs
    for (let i = 0; i < values.length - 1; i += 2) {
        const x = values[i];
        const y = values[i + 1];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }

    const width = maxX - minX;
    const height = maxY - minY;
    return { x: minX, y: minY, width, height, area: width * height };
}

// ---------------------------------------------------------------------------
// Path classification
// ---------------------------------------------------------------------------

type Group = 'outline' | 'inaccessible' | 'wall' | 'thickerWall' | 'unclassified' | 'skip';

/**
 * Classify a subpath from the EDGE pass (Laplacian) — used for wall detection.
 * The Laplacian pass rejects soft light halos, so these are genuinely sharp edges.
 */
function classifyEdgePath(bbox: BBox, imageArea: number, cfg: MapConfig): 'wall' | 'thickerWall' | 'unclassified' | 'skip' {
    const { width, height, area } = bbox;

    if (area < cfg.minPathArea) return 'skip';
    // Skip very large shapes — probably rings from light-halo edges that slipped through
    if (area > imageArea * 0.05) return 'skip';
    if (width === 0 || height === 0) return 'skip';

    const long = Math.max(width, height);
    const short = Math.min(width, height);
    const aspect = long / short;

    if (aspect >= cfg.aspectThreshold) return short < cfg.strokeThreshold ? 'wall' : 'thickerWall';

    // Not elongated enough to be a wall — could be a stair shape or noise.
    // Only keep in unclassified if large enough to plausibly be a stair/feature.
    if (area < cfg.minUnclassified) return 'skip';
    return 'unclassified';
}

// ---------------------------------------------------------------------------
// SVG dimensions from potrace output
// ---------------------------------------------------------------------------

function extractViewBox(svg: string): string {
    const m = svg.match(/viewBox="([^"]+)"/);
    return m ? m[1] : '0 0 1000 1000';
}

function extractWidthHeight(svg: string): { width: string; height: string } {
    const w = svg.match(/\bwidth="([^"]+)"/);
    const h = svg.match(/\bheight="([^"]+)"/);
    return {
        width: w ? w[1] : '100%',
        height: h ? h[1] : '100%',
    };
}

// ---------------------------------------------------------------------------
// Core pipeline — exported so the preview server can call it
// ---------------------------------------------------------------------------

export interface ProcessResult {
    svg: string;
    stats: {
        outlines: number;
        walls: number;
        thickerWalls: number;
        unclassified: number;
        skipped: number;
    };
    debugBitmaps?: {
        mask: Buffer;
        masked: Buffer;
        negatedMask: Buffer;
        wallBitmap: Buffer;
    };
}

export async function processMap(
    rawBuffer: Buffer,
    cfg: MapConfig,
    emitDebug = false,
): Promise<ProcessResult> {
    const inputBuffer = await maybeResize(rawBuffer, cfg);

    const meta = await sharp(inputBuffer).metadata();
    const imageArea = (meta.width ?? 2048) * (meta.height ?? 2048);

    // Pre-pass: BFS interior mask
    const interiorMask = await createInteriorMask(inputBuffer, cfg);
    const maskedBuffer = await applyMask(inputBuffer, interiorMask);

    // Pass 1: trace negated mask perimeter → outline
    const negatedMask = await sharp(interiorMask).negate().png().toBuffer();
    const outlineSvg = await trace(negatedMask, {
        turdSize: 100,
        optTolerance: 0.2,
        alphaMax: 1.0,
    });
    const allOutlineSubpaths = extractSubpaths(outlineSvg).map((d) => ({
        d,
        bbox: estimateBBox(d),
    }));
    const outlinePaths = allOutlineSubpaths
        .sort((a, b) => b.bbox.area - a.bbox.area)
        .slice(0, 1);

    // Pass 2: luminance threshold → wall classification
    const wallBitmap = await wallPass(maskedBuffer, cfg);
    const wallSvg = await trace(wallBitmap, {
        turdSize: cfg.wallTurd,
        optTolerance: 0.2,
        alphaMax: 0.5,
    });
    const wallSubpaths = extractSubpaths(wallSvg);

    const walls: string[] = [];
    const thickerWalls: string[] = [];
    const unclassified: string[] = [];
    let skipped = 0;

    for (const d of wallSubpaths) {
        const bbox = estimateBBox(d);
        const group = classifyEdgePath(bbox, imageArea, cfg);
        switch (group) {
            case 'wall': walls.push(d); break;
            case 'thickerWall': thickerWalls.push(d); break;
            case 'unclassified': unclassified.push(d); break;
            case 'skip': skipped++; break;
        }
    }

    // Build SVG
    const viewBox = extractViewBox(outlineSvg);
    const { width, height } = extractWidthHeight(outlineSvg);
    const pathEl = (d: string) => `    <path d="${d}"/>`;

    const styles = [
        `<defs>`,
        `  <style>`,
        `    #background rect   { fill: #111111; }`,
        `    #outlines path     { fill: none; stroke: #ff3333; stroke-width: 2; }`,
        `    #walls path        { fill: #888888; }`,
        `    #thickerWalls path { fill: #aaaaaa; }`,
        `    #inaccessible path { fill: rgba(0,40,100,0.5); }`,
        `    #stairs path       { fill: #00ccff; }`,
        `    #unclassified path { fill: none; stroke: #ffcc00; stroke-width: 0.5; opacity: 0.6; }`,
        `  </style>`,
        `</defs>`,
    ].join('\n');

    const groups = [
        styles,
        `  <g id="background"><rect x="0" y="0" width="${width}" height="${height}"/></g>`,
        outlinePaths.length > 0
            ? `  <g id="outlines">\n${outlinePaths.map((p) => pathEl(p.d)).join('\n')}\n  </g>`
            : `  <!-- outlines: no paths found -->`,
        `  <!-- inaccessible: manual — trace in SVG editor -->\n  <g id="inaccessible">\n  </g>`,
        walls.length > 0
            ? `  <g id="walls">\n${walls.map(pathEl).join('\n')}\n  </g>`
            : `  <!-- walls: none found -->`,
        thickerWalls.length > 0
            ? `  <g id="thickerWalls">\n${thickerWalls.map(pathEl).join('\n')}\n  </g>`
            : `  <!-- thickerWalls: none found -->`,
        `  <!-- stairs: populate manually -->\n  <g id="stairs">\n  </g>`,
        unclassified.length > 0
            ? `  <!-- MANUAL STEP: review for stairs -->\n  <g id="unclassified">\n${unclassified.map(pathEl).join('\n')}\n  </g>`
            : `  <!-- unclassified: none found -->`,
    ];

    const svg = [
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">`,
        '',
        ...groups.flatMap((g) => [g, '']),
        '</svg>',
    ].join('\n');

    return {
        svg,
        stats: {
            outlines: outlinePaths.length,
            walls: walls.length,
            thickerWalls: thickerWalls.length,
            unclassified: unclassified.length,
            skipped,
        },
        ...(emitDebug && {
            debugBitmaps: { mask: interiorMask, masked: maskedBuffer, negatedMask, wallBitmap },
        }),
    };
}

// ---------------------------------------------------------------------------
// Main (CLI entry point)
// ---------------------------------------------------------------------------

async function main() {
    const inputPath = requiredArg('input');
    const outputPath = requiredArg('output');
    const debugMode = process.argv.includes('--debug');

    if (!fs.existsSync(inputPath)) {
        console.error(`Input file not found: ${inputPath}`);
        process.exit(1);
    }

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const cfg: MapConfig = {
        boundaryThreshold: arg('boundaryThreshold', defaultConfig.boundaryThreshold),
        wallThreshold: arg('wallThreshold', defaultConfig.wallThreshold),
        wallTurd: arg('wallTurd', defaultConfig.wallTurd),
        strokeThreshold: arg('strokeThreshold', defaultConfig.strokeThreshold),
        aspectThreshold: arg('aspectThreshold', defaultConfig.aspectThreshold),
        minPathArea: arg('minPathArea', defaultConfig.minPathArea),
        minUnclassified: arg('minUnclassified', defaultConfig.minUnclassified),
        maxSize: arg('maxSize', defaultConfig.maxSize),
    };

    console.log(`Reading: ${inputPath}`);
    const rawBuffer = fs.readFileSync(inputPath);

    console.log('Processing...');
    const result = await processMap(rawBuffer, cfg, debugMode);

    if (debugMode && result.debugBitmaps) {
        const d = result.debugBitmaps;
        fs.writeFileSync(outputPath.replace('.svg', '_debug_mask.png'), d.mask as unknown as Uint8Array);
        fs.writeFileSync(outputPath.replace('.svg', '_debug_masked.png'), d.masked as unknown as Uint8Array);
        fs.writeFileSync(outputPath.replace('.svg', '_debug_pass1_negatedmask.png'), d.negatedMask as unknown as Uint8Array);
        fs.writeFileSync(outputPath.replace('.svg', '_debug_pass2_walls.png'), d.wallBitmap as unknown as Uint8Array);
        console.log('  Saved debug bitmaps.');
    }

    fs.writeFileSync(outputPath, result.svg, 'utf8');

    const s = result.stats;
    console.log('\nDone.');
    console.log(`  outlines:     ${s.outlines} path(s)`);
    console.log(`  inaccessible: 0 path(s)  (manual — trace in SVG editor)`);
    console.log(`  walls:        ${s.walls} path(s)`);
    console.log(`  thickerWalls: ${s.thickerWalls} path(s)`);
    console.log(`  unclassified: ${s.unclassified} path(s)  <- review manually for stairs`);
    console.log(`  skipped:      ${s.skipped} (noise filtered out)`);
    console.log(`\nOutput: ${outputPath}`);
    console.log('\nTip: run  npx tsx scripts/mapToSvgPreview.ts --input <image>  for live parameter tuning.');
}

// ---------------------------------------------------------------------------
// fillRegion — BFS flood fill from a single pixel, returns a traced SVG path
// ---------------------------------------------------------------------------

export interface FillResult {
    path: string;       // potrace `d` attribute string in grayPixels pixel space
    pixelCount: number; // number of pixels filled
}

/**
 * BFS flood fill from pixel (px, py) through dark pixels (luminance < threshold).
 * Builds a 1-bit PNG of the filled region, traces it with potrace, and returns
 * the first (largest) subpath as an SVG `d` string plus the fill pixel count.
 *
 * @param grayPixels  Raw 1-channel greyscale pixel data (Uint8Array, row major)
 * @param width       Image width in pixels
 * @param height      Image height in pixels
 * @param px          Click x coordinate in pixel space
 * @param py          Click y coordinate in pixel space
 * @param threshold   Luminance cutoff — pixels < threshold are walkable (fillable)
 */
/**
 * Two-pass separable morphological dilation (radius > 0) or erosion (radius < 0).
 * Diamond-shaped structuring element (horizontal + vertical passes).
 * O(n × r) per pass — fast enough for ≤ 2048 × 2048 images with r ≤ 20.
 */
function applyMorphology(filled: Uint8Array, width: number, height: number, radius: number): Uint8Array {
    if (radius === 0) return filled;
    const r      = Math.abs(radius);
    const dilate = radius > 0;
    const tmp    = new Uint8Array(width * height);
    const out    = new Uint8Array(width * height);

    // Horizontal pass
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const lo = Math.max(0, x - r), hi = Math.min(width - 1, x + r);
            let hit = !dilate;
            for (let k = lo; k <= hi; k++) {
                const v = filled[y * width + k];
                if (dilate ? v : !v) { hit = dilate; break; }
            }
            tmp[y * width + x] = hit ? 1 : 0;
        }
    }
    // Vertical pass
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const lo = Math.max(0, y - r), hi = Math.min(height - 1, y + r);
            let hit = !dilate;
            for (let k = lo; k <= hi; k++) {
                const v = tmp[k * width + x];
                if (dilate ? v : !v) { hit = dilate; break; }
            }
            out[y * width + x] = hit ? 1 : 0;
        }
    }
    return out;
}

export async function fillRegion(
    grayPixels: Uint8Array,
    width: number,
    height: number,
    px: number,
    py: number,
    threshold: number,
    offset: number = 0,
): Promise<FillResult> {
    // Clamp click point to image bounds
    px = Math.max(0, Math.min(width - 1, Math.round(px)));
    py = Math.max(0, Math.min(height - 1, Math.round(py)));

    // The seed pixel itself must be dark (walkable) — if the user clicked a wall pixel
    // the fill would spread everywhere. Treat it as an empty fill.
    if (grayPixels[py * width + px] >= threshold) {
        return { path: '', pixelCount: 0 };
    }

    const filled = new Uint8Array(width * height); // 0 = unfilled, 1 = filled
    const queue: number[] = [];
    let head = 0;

    const enqueue = (i: number) => {
        if (!filled[i] && grayPixels[i] < threshold) {
            filled[i] = 1;
            queue.push(i);
        }
    };

    enqueue(py * width + px);

    while (head < queue.length) {
        const idx = queue[head++];
        const x = idx % width;
        const y = Math.floor(idx / width);
        if (y > 0)          enqueue(idx - width);
        if (y < height - 1) enqueue(idx + width);
        if (x > 0)          enqueue(idx - 1);
        if (x < width - 1)  enqueue(idx + 1);
    }

    const pixelCount = queue.length;
    if (pixelCount === 0) return { path: '', pixelCount: 0 };

    // Apply morphological dilation (+) or erosion (−) for edge offset
    const finalFilled = applyMorphology(filled, width, height, offset);

    // Build a 1-bit PNG: filled pixels → black (0), unfilled → white (255)
    // Potrace traces dark shapes on a light background.
    const bitmapData = Buffer.alloc(width * height);
    for (let i = 0; i < width * height; i++) {
        bitmapData[i] = finalFilled[i] ? 0 : 255;
    }
    const bitmapPng = await sharp(bitmapData, { raw: { width, height, channels: 1 } })
        .png()
        .toBuffer();

    const svg = await trace(bitmapPng, { turdSize: 2, optTolerance: 0.3, alphaMax: 1.0 });
    const subpaths = extractSubpaths(svg);

    if (subpaths.length === 0) return { path: '', pixelCount };

    // Return the largest subpath (by bounding box area)
    const best = subpaths
        .map(d => ({ d, area: estimateBBox(d).area }))
        .sort((a, b) => b.area - a.area)[0];

    return { path: best.d, pixelCount };
}

/**
 * Extract raw greyscale pixels from a masked image buffer (the output of applyMask).
 * Returns { pixels, width, height } suitable for passing to fillRegion.
 */
export async function extractGrayPixels(
    maskedBuffer: Buffer,
): Promise<{ pixels: Uint8Array; width: number; height: number }> {
    const { data, info } = await sharp(maskedBuffer)
        .flatten({ background: { r: 0, g: 0, b: 0 } })
        .greyscale()
        .raw()
        .toBuffer({ resolveWithObject: true });
    return { pixels: new Uint8Array(data.buffer), width: info.width, height: info.height };
}

// ---------------------------------------------------------------------------
// Main CLI
// ---------------------------------------------------------------------------

// Only run the CLI entry point when this file is executed directly (not imported).
const _isMain = process.argv[1] &&
    path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (_isMain) {
    main().catch((err) => {
        console.error('Fatal error:', err);
        process.exit(1);
    });
}
