# Intel Dossier SEO Implementation Plan (Repository Discovery)

## 1) Framework detection and rendering implication

This repository is a **Create React App (CRA) SPA** using `react-scripts` and client-side routing with `react-router-dom`.

Evidence:
- `react-scripts` in dependencies and scripts (`start`, `build`, `test`).
- BrowserRouter routes are defined in `src/App.tsx`.
- App bootstraps from `src/index.tsx` into a single `public/index.html` shell.

**Conclusion:** this is not currently SSG-capable like Next.js/Nuxt/SvelteKit. To satisfy the requirement that transcript text exists in initial HTML, implement a **parallel static generation pipeline** that writes crawlable HTML files into `public/intel/...` during build.

---

## 2) Current data structures relevant to Intel pages

Primary intel and map data already exists in typed TS files:

- `src/data/intel.tsx`
  - Canonical intel records (`id`, `map`, `title`, `desc`, `typeDesc`, etc.).
- `src/data/IntelTypes.tsx`
  - Intel type enums/interfaces.
- `src/components/MapControls/MapIds.ts`
  - Canonical map IDs used in URLs and lookups.
- `src/data/maps/mapDetails.tsx`
  - Human-readable map titles and map metadata.

This means the page generator can build URLs from existing map IDs and create dossier metadata with no schema redesign.

---

## 3) Proposed file paths for new `/intel` directory architecture

### Runtime app integration (React)

- `src/pages/intel/IntelHomePage.tsx`
  - Route component for `/intel` (list supported games).
- `src/pages/intel/IntelGamePage.tsx`
  - Route component for `/intel/:gameSlug` (maps for game).
- `src/pages/intel/IntelMapPage.tsx`
  - Route component for `/intel/:gameSlug/:mapSlug` (intel grouped by type).
- `src/pages/intel/IntelLeafPage.tsx`
  - Route component for `/intel/:gameSlug/:mapSlug/:intelSlug`.
- `src/pages/intel/components/DossierHeader.tsx`
  - Top-secret header component.
- `src/styles/intel-dossier.css`
  - Scoped dossier styling (terminal/manila look + redaction styles).

> Note: these routes help app navigation consistency, but SEO-critical indexing should come from static HTML output below.

### Static generation pipeline (SEO-critical)

- `scripts/generate-intel-static.mjs`
  - Node build script that imports/reads intel data and emits static HTML under `public/intel/...`.
- `scripts/templates/intel-page-template.html`
  - HTML template for leaf dossier pages with metadata + schema.
- `scripts/templates/intel-hub-template.html`
  - HTML template for `/intel`, game hubs, and map hubs.
- `src/data/intelTranscripts.ts`
  - Transcript payloads keyed by intel ID (or merged into intel records).
- `src/data/intelSeo.ts`
  - Slug helpers and SEO text builders (`title`, `description`, breadcrumb labels).

### Generated output (committed or build artifact)

- `public/intel/index.html`
- `public/intel/black-ops-6/index.html`
- `public/intel/black-ops-6/terminus/index.html`
- `public/intel/black-ops-6/terminus/<intel-slug>/index.html`

### SEO/support files

- `public/sitemap.xml` (or generated to `build/sitemap.xml` during CI)
  - Add all `/intel/...` URLs.
- `scripts/generate-sitemap.mjs`
  - Deterministic sitemap generation from same URL manifest.
- `src/data/intelSources.ts`
  - Canonical external source links (CoD Wiki) by intel ID.

---

## 4) Recommended URL and data conventions

- URL pattern: `/intel/[game]/[map]/[intel-id-or-slug]`
- Slugs:
  - game: `black-ops-6`
  - map: derived from `MapDetails` title (e.g., `terminus`, `liberty-falls`)
  - intel: `${slug(title)}-${id}` to guarantee uniqueness
- Missing transcript handling:
  - Render placeholder text in HTML: `DATA REDACTED - PENDING DECLASSIFICATION`
  - Keep page indexable even when transcript unavailable.

---

## 5) Minimal routing updates required

- Update `src/App.tsx` to register the `/intel/*` routes.
- Preserve existing map route behavior (`/:id`) for the interactive tracker.

---

## 6) Build pipeline updates required

- `package.json`
  - Pre-build hook: run `node scripts/generate-intel-static.mjs`
  - Post-build hook (or integrated step): generate sitemap.

Example:
- `"build": "node scripts/generate-intel-static.mjs && react-scripts build && node scripts/generate-sitemap.mjs && npx workbox injectManifest workbox-config.js"`

This keeps the existing app intact while adding SEO-first crawlable intel pages.
