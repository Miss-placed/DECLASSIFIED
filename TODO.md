███████████████[^1]

<<<<<<< Updated upstream
██████

█████████ ██████ ████████████

# CLASSIFIED

- ~~**dont start over from scratch again!**~~
- █ ████ ███ ███ ████
- ~~system to track collected intel~~
- ~~collect data for markers~~

# DECLASSIFIED

- get icons for markers
- style the intel list
- refactored the layer generation
- intel category selector
- list of all intel
- general UI
- change level selector to more appealing menu (might be with UI setup)
- generate markers through loop
- vector tiles of ruka
- vector tiles of duga
- vector tiles of sanitorium
- vector tiles of alpine
  -█████████ █████████████ █████
- vector tiles of golova
- vector tiles of firebase z
- vector tiles of die maschine
- description of fixed location intel written
- multiple instaned maps(map/level selector)
- set up initial map
- set up structure for markers
- set up possible level selector
- generate one map with markers at a time
- added get co-ordinates dev tool ( "debug = true" in colsole, copies the latLong on click)

# [^1]: ██████ is property of the CIA. a U.S. government agency.

## Completed ✅

- ~~Make the vertex interaction dots scale up and down with zoom~~ — vertex handles now maintain a constant ~6px screen radius at all zoom levels via `refreshVertexHandleRadius()` called on every zoom event.
- ~~Add Undo/Redo mechanics with proper Ctrl+Z and Ctrl+Y shortcut keys~~ — full undo/redo stack (max 50) wraps all annotation mutations; ↩/↪ buttons in panel header; Ctrl+Z / Ctrl+Y / Ctrl+Shift+Z all wired.
- ~~Add a better pan tool~~ — right-click drag on the preview area now pans the canvas; suppresses context menu when any drag occurred.
- ~~Fix the move-outlines bug~~ — multiple drags on the same path now accumulate into a single `move` annotation (`existing.dx += newDx`) instead of stacking separate translate transforms.

## Imgur Migration

- [ ] **Run the downloader**: `node scripts/download-imgur-images.mjs` → saves 515 images to `scripts/imgur-downloads/`
- [ ] **Stand up MinIO + Nginx** on the Docker host: see `scripts/imgur-cdn/MIGRATION.md`
- [ ] **Upload**: `cp scripts/imgur-cdn/.env.cdn.example .env.cdn` → edit → `node scripts/upload-to-cdn.mjs`
- [ ] **Update app code** — swap `i.imgur.com` base URL:
  - `src/components/CustomImage/index.tsx` (add `REACT_APP_CDN_URL` env var)
  - `scripts/generate-operations-static.ts`
  - `public/legacy/challenges/challengeStore.js`
  - `public/legacy/assets/js/mapUtils.js` and `utils.js`
- [ ] **Thumbnail sizing** — imgur's `{ID}l.jpg` trick no longer exists; either serve originals or add a resize proxy (see MIGRATION.md options).

## Remaining Future Work

- Improve vertex hint visibility — currently the hint text (right-click to delete, etc.) is easy to miss.
- Consider adding a keyboard shortcut reference panel (e.g. `?` key to show/hide).

> > > > > > > Stashed changes
