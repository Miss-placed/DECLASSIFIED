# Tracing Map Images to SVG in Node.js

# Task: Automate Map Image → Grouped SVG Outline Conversion

## What This Is

We have a website that displays interactive game maps. Each map area is represented as an SVG shape with its own pre-defined styling (colours, strokes, fills etc.). Currently, the process of converting a raw map image into usable SVG paths is **entirely manual** — done by hand in Figma by tracing shapes.

The goal is to automate the extraction of SVG outline paths from a map image, so that a developer only needs to drop in a source image and get back clean, unstyled SVG `<path>` elements organised into labelled groups representing the different structural layers of the map.

**Styling is explicitly out of scope for this task.** Each map area has its own predetermined styling that is applied separately downstream. This task only concerns producing accurate, clean outlines in the correct groups.

---

## Why Automate This

- Tracing is tedious, time-consuming, and doesn't scale as new maps are added
- Source images have sufficient structural contrast that automated contour and edge detection can reliably extract geometry
- The output SVG paths only need to represent shape outlines — no colour, no fill logic — which keeps the problem well-scoped
- Even if some groups require a manual cleanup pass, automated extraction saves the bulk of the tracing work

---

## Source Image Considerations — Gradients

> **This is a significant change from a simple high-contrast assumption.**

Map images are not guaranteed to be dark-on-light bitmaps with uniform fills. They frequently contain **gradient shading** — areas that transition between light and dark to suggest depth, elevation, or material texture. A single luminance threshold will produce broken or incomplete outlines when applied to these images.

### How to handle gradients

Instead of a single threshold pass, the pipeline uses **edge detection** as the primary preprocessing step for structural outlines. Sharp's `convolve()` method applies a convolution kernel that highlights pixel intensity transitions regardless of the underlying gradient:

```ts
// Laplacian edge detection kernel — finds edges in all directions
await sharp(inputPath)
	.greyscale()
	.normalise() // stretch contrast to 0–255 first
	.convolve({
		width: 3,
		height: 3,
		kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1], // Laplacian operator
	})
	.threshold(30) // lower threshold — we're working on an edge map now
	.toBuffer();
```

`.normalise()` is important — it stretches the dynamic range before the convolution, so gradients that span a narrow luminance band are expanded and edges become detectable.

For interior features (inaccessible areas, thick fills), **targeted luminance band passes** are used in addition to edge detection — see the per-group pipeline below.

---

## Output Structure — SVG Groups

The output SVG organises all paths into named `<g>` elements. Each group corresponds to a distinct structural layer of the map. Styling is applied downstream per group; the script emits no `fill`, `stroke`, or `style` attributes.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">

  <g id="outlines">
    <!-- Outer boundary paths of the entire map -->
    <path d="M 0 0 L 1000 0 L 1000 1000 L 0 1000 Z"/>
  </g>

  <g id="inaccessible">
    <!-- Solid interior shapes: barriers, rubble, debris -->
    <path d="M 300 200 L 400 200 L 400 300 L 300 300 Z"/>
  </g>

  <g id="walls">
    <!-- Thin dividing lines between areas (no fill, no closed shape) -->
    <path d="M 120 80 L 120 420"/>
  </g>

  <g id="thickerWalls">
    <!-- Same as walls but with visually heavier stroke weight -->
    <path d="M 200 80 L 200 420"/>
  </g>

  <g id="stairs">
    <!-- Complex stair shapes — see manual step note below -->
    <path d="M 500 300 L 560 300 L 560 380 L 500 380 Z"/>
  </g>

</svg>
```

---

## How It Works — Multi-Pass Pipeline

Because different feature types require different preprocessing, the script runs **multiple independent passes** on the source image and merges the results into a single grouped SVG.

### Pass 1 — `outlines` group

**Goal**: The single continuous outer boundary of the map — the edge of the playable area.

**Method**:

- Greyscale → `.normalise()` → Laplacian `convolve()` → low threshold (~30)
- Produces a strong edge map; gradient fill areas become uniform and only transitions are retained
- Run potrace with a **high `turdSize`** (e.g. `200`) to suppress small interior detail and retain only the largest closed contours
- Post-processing: filter traced paths to keep only the N paths with the largest bounding-box area — these are the outer edges

**Feasibility**: ✅ Reliable. Edge detection is gradient-agnostic and the outer boundary is almost always the dominant shape.

---

### Pass 2 — `inaccessible` group

**Goal**: Solid filled interior regions that represent areas the player cannot enter — barriers, rubble piles, structural debris, wall masses.

**Method**:

- Greyscale → `.normalise()` → threshold at a **low luminance band** (e.g. `< 80`) to isolate only the darkest fills
- This captures solid dark interior shapes while ignoring lighter gradient floor areas
- Run potrace with a moderate `turdSize` (e.g. `30`) — small debris shapes should be captured
- Post-processing: subtract any paths that spatially overlap with the outer boundary (already in `outlines`) to avoid duplication

**Feasibility**: ⚠️ Partially automated — works reliably only if inaccessible areas are **consistently darker** than walkable floor in the source image. Gradient maps can produce false positives where a dark gradient edge of a walkable area is mistakenly included. **A manual review and cleanup pass on this group is recommended** before the SVG is used in production.

---

### Pass 3 — `walls` and `thickerWalls` groups

**Goal**: Lines that divide areas of the map without forming closed shapes or filled regions — structural dividers, room partitions, corridor borders.

> **Important note on how potrace handles lines**: Potrace traces **filled shapes**, not strokes. A thin wall in the source image will trace as a very narrow elongated rectangle (two parallel paths close together), not a single line. This is unavoidable with potrace but the geometry is still usable downstream — it can be styled as a stroke of the appropriate weight.

**Method**:

- Greyscale → `.normalise()` → Laplacian edge detection → threshold (~30)
- Run potrace with a **low `turdSize`** (e.g. `5`) to retain thin elements that would otherwise be filtered as noise
- Post-processing — classify each traced path into `walls` or `thickerWalls` by analysing geometry:
  - Compute the **aspect ratio** of the path's bounding box (e.g. width/height or height/width). Values above ~4 suggest a linear element.
  - Compute the **estimated stroke width** as `min(boundingBox.width, boundingBox.height)` in SVG units.
  - Paths below a stroke-width threshold (e.g. `< 8px`) → `walls`
  - Paths above that threshold but still elongated → `thickerWalls`
  - Paths that are not elongated (aspect ratio close to 1) likely belong to a different group entirely and should be excluded from both

**Feasibility**: ⚠️ Extraction is reliable; **automated classification into thin vs thick is approximate**. The stroke-width threshold will need calibration per map and some paths will be misclassified — particularly where a wall terminates in a corner cap that widens the bounding box. **A manual pass to verify the thin/thick split is recommended.**

---

### Pass 4 — `stairs` group

**Goal**: Complex step shapes representing staircases on the map.

**Feasibility**: ❌ **This is a manual step. Do not attempt to automate it.**

Stairs are semantically specific — a series of parallel tread lines forming a progressive shape. Potrace will produce geometric paths for the stair region, but it has no mechanism to identify that those paths _are_ stairs rather than any other complex geometry. There is no reliable heuristic (aspect ratio, area, path count) that distinguishes stairs from other similarly shaped map features.

**Recommended workflow**:

1. The script outputs all unclassified paths (those not placed into outlines, inaccessible, or walls groups) into a temporary `<g id="unclassified">` group
2. Open the SVG in a browser or Figma
3. Manually identify stair paths in `unclassified`, move them to `<g id="stairs">`, and delete the `unclassified` group when done

---

## Setup

### Dependencies

```bash
npm install sharp potrace
npm install --save-dev @types/node
```

> `potrace` ships with its own native bindings. If it fails to install, check that your Node version is compatible and that build tools are available (`node-gyp` dependencies).

### Expected Project Integration

This should be implemented as a standalone utility/script within the existing Node project, callable either:

- As a CLI script: `npx ts-node scripts/mapToSvg.ts --input map.png --output map.svg`
- Or as an importable function for use in a broader pipeline

---

## Key Tuning Parameters

These are the main levers to adjust output quality. Because the pipeline now runs multiple passes, some parameters apply per-pass rather than globally.

| Parameter                     | Applies To             | What It Does                                                               | Start Value                   |
| ----------------------------- | ---------------------- | -------------------------------------------------------------------------- | ----------------------------- |
| `normalise` (sharp)           | All passes             | Stretches luminance range before processing — critical for gradient images | Always on                     |
| `threshold` (sharp, edges)    | Outlines, Walls        | Cutoff after edge convolution — lower captures finer edges                 | `30`                          |
| `threshold` (sharp, fills)    | Inaccessible           | Luminance cutoff to isolate dark filled regions                            | `80`                          |
| `turdSize` (potrace)          | All passes             | Minimum area to trace — higher filters more noise                          | `200` / `30` / `5` (per pass) |
| `optTolerance` (potrace)      | All passes             | Path simplification — higher = fewer points, less accurate                 | `0.2`                         |
| `alphaMax` (potrace)          | Outlines, Inaccessible | Corner smoothing — `0` = sharp corners, `1.33` = rounded                   | `1.0`                         |
| Stroke-width threshold (post) | Walls classification   | Min bounding-box short dimension to promote a path to `thickerWalls`       | `8` (SVG px)                  |
| Aspect-ratio threshold (post) | Walls classification   | Min bounding-box ratio to classify a path as a linear wall element         | `4.0`                         |

---

## Manual Steps Summary

| Group          | Automated? | Notes                                                                                       |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- |
| `outlines`     | ✅ Yes     | Edge detection + largest-path selection is reliable                                         |
| `inaccessible` | ⚠️ Partial | Automated extraction likely works; manual review pass recommended to remove false positives |
| `walls`        | ⚠️ Partial | Automated extraction works; thin/thick classification needs calibration and verification    |
| `thickerWalls` | ⚠️ Partial | Classified from same pass as walls; threshold needs manual tuning per map                   |
| `stairs`       | ❌ Manual  | Cannot be reliably automated; move from `unclassified` group in a post-script editing step  |

---

## Known Considerations

- **Gradient fills**: Handled via `.normalise()` + edge detection rather than a single threshold. The Laplacian kernel highlights transitions, not absolute luminance, so gradients do not break edge outlines.
- **Interior holes**: Potrace handles hole detection internally for closed shapes. Verify that walkable corridors inside an `inaccessible` mass appear as holes (negative space) in the traced paths, not as filled-over regions.
- **Multiple disconnected regions**: Maps with separate landmass sections each produce their own `<path>` elements naturally — no special handling needed.
- **Image format**: Source images should be PNG. Sharp can convert other formats prior to processing.
- **Coordinate system**: All passes must use the same source image dimensions so that paths from different passes align correctly when merged into a single SVG.
