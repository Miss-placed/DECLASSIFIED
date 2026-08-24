# Map Builder — Unit Test Plan

Goal: lock down the map SVG generator so the class of regression we just hit
(embedded browser JS corrupted, `tsc --noEmit` still green, browser throws
`Uncaught SyntaxError` at runtime) cannot slip through again.

This is a plan for an implementing agent, not the implementation itself.

---

## 1. Why the last bug slipped through

- `mapToSvgPreview.ts` serves the UI as one giant template literal. The entire
  browser `<script>` block is a plain string from TypeScript's point of view.
- `tsc --noEmit` validates the outer TS file only. It never parses the embedded
  JS, so a corrupted line inside the script produces zero compile errors.
- Only the browser parses that JS. A bad line → `Uncaught SyntaxError` at load.
- Implication: any useful test plan must do two things:
  1. Syntax-check the embedded browser JS at build/test time.
  2. Unit-test the pure logic directly, so it is covered by real assertions
     rather than "it happens to parse".

---

## 2. Code map — what is testable today

| Function(s) | File | Exported | Pure | Notes |
|---|---|---|---|---|
| `stripBeziers` | `mapToSvg.ts` | yes | yes | curve→polyline sampler |
| `processMap` | `mapToSvg.ts` | yes | no (`sharp`, `potrace`) | integration only |
| `fillRegion` | `mapToSvg.ts` | yes | no (`sharp`, `potrace`) | integration only |
| `extractGrayPixels` | `mapToSvg.ts` | yes | no (`sharp`) | integration only |
| `injectAnnotations` | `mapToSvgPreview.ts` | **no** | yes | string→string, high value |
| `flattenPath`, `rebuildPolylinePath`, `parsePathToPolyline`, `samePoint`, `rdpSimplify`, `simplifyClosedPolygon`, `polyPerimeter`, `pointSegDist`, `rotateLocal`, `rotateGlobal`, `distanceToRectBoundary`, `detectRectangleQuickFix` | `mapToSvgPreview.ts` (embedded browser JS) | **no** | yes | geometry logic, currently trapped inside the template literal |

Two structural problems block clean testing and must be resolved first:
duplication (`stripBeziers` ≈ `flattenPath`) and the geometry functions living
inside a string.

---

## 3. Blocking refactors (do these first)

1. **Extract `scripts/mapGeometry.ts`** — move the pure functions out of the
   embedded script into a TS module that imports nothing from `sharp`,
   `potrace`, Node, or the DOM:
   - `parsePathToPolyline`, `flattenPath`, `rebuildPolylinePath`, `samePoint`
   - `polyPerimeter`, `pointSegDist`, `rdpSimplify`, `simplifyClosedPolygon`
   - `rotateLocal`, `rotateGlobal`, `distanceToRectBoundary`
   - `detectRectangleQuickFix`
   - Reconcile `stripBeziers` in `mapToSvg.ts` with `flattenPath` — one shared
     implementation, both call sites delegate to it.
   - The browser template still needs these functions. Pick one strategy and
     document it: inject `fn.toString()` into the template literal, or keep a
     thin inline wrapper that calls a pre-serialised copy. Do not leave two
     hand-maintained copies.

2. **Export `injectAnnotations`** from `mapToSvgPreview.ts` and gate the server
   side effects behind the same "am I the entry point?" check already used in
   `mapToSvg.ts` (`path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))`).
   Importing the module in a test must not open a port.

3. **Pick a runner for `scripts/` tests.** CRA Jest only discovers `src/**` and
   `sharp`/`potrace` native modules break jsdom. Use `node:test` + `tsx --test`
   (both already present). Add `npm run test:map`.

---

## 4. Test suites & cases

### 4.1 `mapGeometry.test.ts` — pure, deterministic

- `stripBeziers` / `flattenPath`
  - cubic curve → polyline with more than 4 points (densification, not
    endpoint collapse).
  - `Z` produces a closed path ending in ` Z`.
  - `M`/`L`-only input → point count preserved, correct formatting.
  - relative commands (`c`, `s`, `q`, `t`) resolve to the same geometry as
    absolute.
  - reflected controls (`S` after `C`, `T` after `Q`) match expected points.
  - `A` arcs preserve endpoints.
  - empty/whitespace input returned unchanged.
- `rebuildPolylinePath`
  - open vs closed (`Z`), 3-decimal formatting.
- `rdpSimplify` / `simplifyClosedPolygon`
  - collinear chain collapses to 2 points.
  - square corners preserved across the epsilon sweep.
  - duplicated closing point removed.
- `detectRectangleQuickFix` — the diamond regression is the golden case:
  - axis-aligned 100×100 square → non-null, `cornerCount` 4, high `confidence`,
    `squarePath` corners equal the four input corners.
  - 45° rotated rectangle → `rectanglePath` aligns to the edges, **not** the
    diagonal (this is the bug we fixed with edge-based orientation scoring).
  - near-closed trace (no `Z`, tiny end gap) → accepted.
  - circle / noisy blob → returns `null` (no quick-fix row offered).
  - long thin rectangle → `nearSquare` false.

### 4.2 `injectAnnotations.test.ts` — pure, server-side

- `fill` add → path lands in the correct group with `data-ann-id`.
- `fill` subtract → `class="subtract"`.
- `reassign` → path removed from source group, added to target; `removeBends`
  applied.
- `reassign` with unmatched `d` → warning pushed, svg unchanged.
- `exclude` → removed from all groups.
- `reshape` by `annId` → replaces the right path (the annId-vs-`origD` fix).
- `reshape` with only `origD` (legacy, no annId) → fallback match still works.
- `move` → `transform="translate(...)"` applied to the matching path.

### 4.3 `embedded-script-integrity.test.ts` — the regression guard

- Read `mapToSvgPreview.ts`, extract the `<script>…</script>` block, run it
  through `new Function(code)` (or `vm.Script`). Must not throw.
  **This is the test that would have caught the corrupted
  `clearFillShapeFix()` line.**
- Assert the quick-fix UI ids exist in the template HTML:
  `fp-fill-shape-row`, `fp-shape-original`, `fp-shape-rectangle`,
  `fp-shape-square`, `fp-fill-shape-hint`.
- Optional static check: every `getElementById('…')` / `querySelector('#…')`
  id referenced in the JS has a matching `id="…"` in the HTML template.

### 4.4 Integration — `node:test` + `tsx`, tiny committed fixtures

- `fillRegion` on a synthetic PNG (dark square on light background) → returns a
  closed `d` path and the expected `pixelCount`.
- `processMap` on a small fixture → SVG contains the expected group ids
  (`outlines`, `walls`, `thickerWalls`, `inaccessible`, `stairs`,
  `unclassified`) and a `viewBox`.

---

## 5. Out of scope (future)

Real browser interaction (click → wand → quick-fix → confirm) needs Playwright
and is a separate effort. The unit/integrity suites above cover the logic; the
integrity suite covers the "does the served script even parse" gap.

---

## 6. Suggested order for the implementing agent

1. Add the integrity test first — it passes on the fixed file and would have
   failed on the corrupted one, proving the guard works.
2. Extract `mapGeometry.ts`; move the pure functions; add the geometry tests
   (red/green per the usual TDD flow).
3. Export + gate `injectAnnotations`; add its tests.
4. Add integration tests.
5. Add `npm run test:map` and note it in `MAP_BUILDER.md`.
