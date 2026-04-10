/**
 * download-imgur-images.mjs
 *
 * Extracts every imgur image ID used across the DECLASSIFIED codebase and
 * downloads the originals to ./imgur-downloads/{ID}.jpg
 *
 * Usage:
 *   node scripts/download-imgur-images.mjs
 *   node scripts/download-imgur-images.mjs --dry-run   # list IDs only, no downloads
 *   node scripts/download-imgur-images.mjs --force     # re-download already-saved files
 *
 * Output directory: scripts/imgur-downloads/
 * Manifest:         scripts/imgur-downloads/manifest.json
 */

import fs   from 'node:fs';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

// ─── Config ──────────────────────────────────────────────────────────────────
const ROOT         = process.cwd();
const OUT_DIR      = path.join(ROOT, 'scripts', 'imgur-downloads');
const MANIFEST     = path.join(OUT_DIR, 'manifest.json');
const DELAY_MS     = 300;   // delay between requests (ms) — be polite to Imgur
const MAX_RETRIES  = 3;     // retry failed fetches this many times
const DRY_RUN      = process.argv.includes('--dry-run');
const FORCE        = process.argv.includes('--force');

// ─── Sources ─────────────────────────────────────────────────────────────────
// Add/remove source entries here as the codebase evolves.
const SOURCES = [
  {
    label: 'Intel data (src/data/intel.tsx)',
    file: path.join(ROOT, 'src', 'data', 'intel.tsx'),
    extract(content) {
      const ids = [];
      // Match:  img: 'XYZABC'  or  img: `XYZABC`
      const re = /\bimg:\s*['`]([A-Za-z0-9]{5,10})['`]/g;
      let m;
      while ((m = re.exec(content)) !== null) ids.push(m[1]);
      return ids;
    },
  },
  {
    label: 'Legacy challenge store (public/legacy/challenges/challengeStore.js)',
    file: path.join(ROOT, 'public', 'legacy', 'challenges', 'challengeStore.js'),
    extract(content) {
      const ids = [];
      // The 6th positional argument to new Challenge(...) is the imgur ID.
      // Pattern: new Challenge( "id", type, cat, "name", "desc", "IMGID" )
      // We match a double-quoted 6th arg that looks like an imgur hash.
      const re = /new\s+Challenge\s*\(\s*"[^"]*"\s*,\s*[^,]+,\s*[^,]+,\s*"[^"]*"\s*,\s*"[^"]*"\s*,\s*"([A-Za-z0-9]{5,10})"/g;
      let m;
      while ((m = re.exec(content)) !== null) ids.push(m[1]);
      return ids;
    },
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function loadManifest() {
  if (fs.existsSync(MANIFEST)) {
    try { return JSON.parse(fs.readFileSync(MANIFEST, 'utf8')); } catch { /* ignore */ }
  }
  return { downloaded: [], failed: [], skipped: [] };
}

function saveManifest(data) {
  fs.writeFileSync(MANIFEST, JSON.stringify(data, null, 2));
}

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          // Imgur doesn't require auth for direct image URLs, but a real UA helps.
          'User-Agent': 'Mozilla/5.0 (compatible; declassified-migrator/1.0)',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
      });
      if (res.status === 404) return { ok: false, reason: '404 not found' };
      if (!res.ok) {
        if (attempt === retries) return { ok: false, reason: `HTTP ${res.status}` };
        await sleep(DELAY_MS * attempt * 2);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      return { ok: true, buffer };
    } catch (err) {
      if (attempt === retries) return { ok: false, reason: err.message };
      await sleep(DELAY_MS * attempt * 2);
    }
  }
}

function pad(n, w = 4) { return String(n).padStart(w, ' '); }

// ─── Main ─────────────────────────────────────────────────────────────────────
const allIds = new Set();

for (const src of SOURCES) {
  if (!fs.existsSync(src.file)) {
    console.warn(`  [skip] Source not found: ${src.file}`);
    continue;
  }
  const content = fs.readFileSync(src.file, 'utf8');
  const ids = src.extract(content);
  console.log(`  [src] ${src.label}: ${ids.length} IDs`);
  for (const id of ids) allIds.add(id);
}

const sorted = [...allIds].sort();
console.log(`\nTotal unique imgur IDs found: ${sorted.length}\n`);

if (DRY_RUN) {
  console.log('Dry-run mode — IDs that would be downloaded:');
  sorted.forEach(id => console.log(`  ${id}`));
  process.exit(0);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const manifest = loadManifest();
const existingSet  = new Set(manifest.downloaded);
const failedSet    = new Set(manifest.failed);

let downloaded = 0, skipped = 0, failed = 0;
const newFailed = [];

for (let i = 0; i < sorted.length; i++) {
  const id      = sorted[i];
  const outPath = path.join(OUT_DIR, `${id}.jpg`);
  const prefix  = `[${pad(i + 1)}/${pad(sorted.length)}]`;

  if (!FORCE && fs.existsSync(outPath)) {
    console.log(`${prefix} skip  ${id}.jpg  (already exists)`);
    skipped++;
    if (!existingSet.has(id)) { existingSet.add(id); manifest.downloaded.push(id); }
    continue;
  }

  // Pull the original-size image from imgur.
  // Imgur serves direct image URLs without authentication.
  const url = `https://i.imgur.com/${id}.jpg`;
  process.stdout.write(`${prefix} fetch ${id}.jpg  → `);

  const result = await fetchWithRetry(url);
  if (!result.ok) {
    console.log(`FAILED (${result.reason})`);
    failed++;
    newFailed.push(id);
    if (!failedSet.has(id)) { failedSet.add(id); manifest.failed.push(id); }
  } else {
    fs.writeFileSync(outPath, result.buffer);
    const kb = (result.buffer.length / 1024).toFixed(1);
    console.log(`OK  (${kb} KB)`);
    downloaded++;
    existingSet.add(id);
    if (!manifest.downloaded.includes(id)) manifest.downloaded.push(id);
    // Remove from failed list if it was previously failing
    manifest.failed = manifest.failed.filter(x => x !== id);
  }

  // Rate limit — one request per DELAY_MS
  if (i < sorted.length - 1) await sleep(DELAY_MS);
}

// ── Summary ───────────────────────────────────────────────────────────────────
manifest.lastRun   = new Date().toISOString();
manifest.total     = sorted.length;
saveManifest(manifest);

console.log('\n────────────────────────────────────────────');
console.log(`Downloaded : ${downloaded}`);
console.log(`Skipped    : ${skipped}  (already on disk)`);
console.log(`Failed     : ${failed}`);
console.log(`Manifest   : ${MANIFEST}`);
if (newFailed.length) {
  console.log('\nFailed IDs (404 or network error — may be deleted from Imgur):');
  newFailed.forEach(id => console.log(`  ${id}`));
}
console.log('\nDone. Next step: run upload-to-cdn.mjs to push images to your server.');
