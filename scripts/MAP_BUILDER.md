# Map SVG Builder — Developer Guide

An interactive local tool for converting raw map images (PNG/JPG) into clean, layered SVG files ready for use in the DECLASSIFIED app.

## Quick Start

```bash
npm run map:build
# → http://localhost:9090
```

Drop a PNG or JPG into `scripts/map-workspace/`, open the browser, and select it from the dropdown.

---

## How It Works

The tool is a local HTTP server (`scripts/mapToSvgPreview.ts`) that serves a full browser UI. Behind the scenes, processing is done by `scripts/mapToSvg.ts` using [potrace](https://www.npmjs.com/package/potrace) and [sharp](https://www.npmjs.com/package/sharp).

### SVG Layer Groups

Every exported SVG contains these groups:

| Group | How it's populated | Description |
|-------|--------------------|-------------|
| `outlines` | Auto + manual boundary tool | Outer map boundary ring |
| `walls` | Auto | Thin interior dividing lines |
| `thickerWalls` | Auto | Heavier dividing lines / thick walls |
| `inaccessible` | Manual (fill tool) | Blocked/unreachable areas — fill `#7C2728` |
| `stairs` | Manual (reassign from unclassified) | Stairwells |
| `unclassified` | Auto | Shapes the algorithm couldn't categorise — review these |

> **Why is `inaccessible` manual?** Dark walkable floors and dark blocked areas have overlapping luminance values — the algorithm can't tell them apart reliably. You draw these yourself using the Fill tool.

---

## UI Modes

Switch between modes using the toolbar buttons (or keyboard shortcuts).

### Fill Mode (default)
Click anywhere on the map to flood-fill that region and assign it to a layer group (inaccessible, walls, etc.). The fill uses luminance thresholding on the original image to find the region boundary — tune the **Threshold** and **Offset** sliders if it's over/under-filling.

- **Threshold** — how aggressively the flood fill expands across pixels
- **Offset** — expands or contracts the filled region boundary

### Select Mode
Click any SVG path to select it. Once selected:
- **Reassign** it to a different group
- **Exclude** it (removes it from the SVG entirely)
- **Move** it — drag to reposition (useful for fine-tuning)

### Vertex Mode
Click a path to enter vertex editing. Drag individual nodes to reshape a path. Right-click a node to delete it. Click anywhere on a path edge to insert a new node.

### Outline Mode
Draw the map boundary polygon by clicking vertices. Close it by clicking the first point again. When a closed boundary exists, all fill layers are clipped to it on export.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` / `Ctrl+Shift+Z` | Redo |
| Right-click drag | Pan the canvas |
| Scroll wheel | Zoom in/out |

---

## Saving & Sessions

Click **Save Progress** to persist the current image, config sliders, and all annotations as a `.json` file in `scripts/map-workspace/`. The next time you open the tool and select that image, the session is restored automatically.

Session files are committed to git so work-in-progress maps can be shared across the team.

---

## Exporting

Click **Export SVG** to download the final `map.svg`. The export:
- Strips internal-only groups (`background`, `unclassified`, `pending`)
- Fixes the canvas at **512 × 512**
- Clips all fill layers to the map boundary polygon (if one exists)
- Bakes annotations into the SVG paths directly

Place the exported SVG in the appropriate location in `public/` or `src/`.

---

## Algorithm Tuning

If auto-detection is producing bad results (too many stubs, missing walls, etc.) adjust the sliders in the **Config** panel. The main ones:

| Slider | Effect | Default |
|--------|--------|---------|
| **Boundary Threshold** | Luminance cutoff for the outer ring BFS flood fill. Lower = tighter boundary detection. | 128 |
| **Wall Threshold** | Luminance cutoff to isolate bright wall pixels. Raise if dark walls are being missed. | 35 |
| **Stroke Threshold** | SVG-px short-side cutoff — paths below this become `walls`, above become `thickerWalls`. | 8 |
| **Aspect Threshold** | Min long/short ratio to count as a wall. Prevents round light fixtures being classified as walls. | 4 |
| **Wall Turd** | potrace noise filter — raise to discard short wall stubs. | 5 |
| **Min Path Area** | Minimum bounding box area to include at all. Noise filter. | 30 |
| **Min Unclassified** | Minimum area to keep in the `unclassified` group. | 500 |
| **Max Size** | Resize the image before processing (0 = no resize). Lower = faster, less detail. | 0 |

---

## Adding a New Map

1. Get a clean top-down map image (PNG preferred, higher resolution = more detail)
2. Drop it into `scripts/map-workspace/`
3. `npm run map:build` → select it from the dropdown
4. Name your session and click **Save Progress**
5. Work through the layers:
   - Check `unclassified` — reassign any stairs or features
   - Use Fill to paint `inaccessible` areas
   - Draw the boundary outline
6. Export SVG and add it to the app

---

## Imgur / CDN Images

Images used in intel and challenge data are hosted at `https://declassified-cdn.sol3.me/`. If you've added new intel with imgur IDs:

```bash
# Download any new images
node scripts/download-imgur-images.mjs

# Copy to the CDN server
scp -r scripts/imgur-downloads/. root@192.168.86.235:/mnt/user/appdata/declassified-cdn/images/
```

See `scripts/imgur-cdn/MIGRATION.md` for full CDN setup details.
