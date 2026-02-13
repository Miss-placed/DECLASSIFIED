import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const intelPath = path.join(root, 'src/data/intel.tsx');
const mapDetailsPath = path.join(root, 'src/data/maps/mapDetails.tsx');
const outputRoot = path.join(root, 'public/intel');

const GAME_INFO = {
  'black-ops-6': { name: 'Black Ops 6' },
  'black-ops-cold-war': { name: 'Black Ops Cold War' },
};

const PLACEHOLDER_TRANSCRIPT = 'DATA REDACTED - PENDING DECLASSIFICATION';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function parseMapTitles(fileContent) {
  const mapTitleById = {};
  const mapRegex = /[A-Za-z0-9_]+:\s*new MapItem\(MapIds\.([A-Za-z0-9_]+),\s*\{[\s\S]*?title:\s*'([^']+)'/g;
  let match;
  while ((match = mapRegex.exec(fileContent)) !== null) {
    mapTitleById[match[1]] = match[2];
  }
  return mapTitleById;
}

function parseIntelItems(fileContent) {
  const intelRegex = /\{\s*id:\s*`([^`]+)`[\s\S]*?typeDesc:\s*IntelType\.([A-Za-z0-9_]+),[\s\S]*?map:\s*MapIds\.([A-Za-z0-9_]+),[\s\S]*?title:\s*`([^`]+)`[\s\S]*?desc:\s*`([^`]+)`/g;
  const items = [];
  let match;

  while ((match = intelRegex.exec(fileContent)) !== null) {
    const [, id, typeDesc, mapId, title, desc] = match;
    items.push({ id, typeDesc, mapId, title, desc });
  }

  return items;
}

function inferGameSlug(intelId) {
  return intelId.startsWith('BO6') ? 'black-ops-6' : 'black-ops-cold-war';
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function pageShell({ title, description, canonicalPath, body, schema }) {
  const canonicalUrl = `https://declassified.app${canonicalPath}`;
  return `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n<title>${escapeHtml(title)}</title>\n<meta name="description" content="${escapeHtml(description)}" />\n<link rel="canonical" href="${canonicalUrl}" />\n<meta property="og:title" content="${escapeHtml(title)}" />\n<meta property="og:description" content="${escapeHtml(description)}" />\n<meta property="og:type" content="article" />\n<meta property="og:url" content="${canonicalUrl}" />\n<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0a0d14;color:#eaf2ff;margin:0;padding:24px;line-height:1.55}main{max-width:900px;margin:0 auto}.breadcrumbs{font-size:.85rem;opacity:.8;margin-bottom:12px}a{color:#90c2ff}h1{margin-top:0}.meta{opacity:.9;background:#121826;padding:12px;border-radius:8px}.transcript{background:#111924;border:1px solid #273146;border-radius:8px;padding:12px;white-space:pre-wrap}</style>\n<script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>\n<body>\n<main>${body}</main>\n</body>\n</html>`;
}

function build() {
  const intelSource = fs.readFileSync(intelPath, 'utf8');
  const mapSource = fs.readFileSync(mapDetailsPath, 'utf8');
  const mapTitleById = parseMapTitles(mapSource);
  const items = parseIntelItems(intelSource);

  const urlManifest = [];
  const grouped = {};

  for (const item of items) {
    const gameSlug = inferGameSlug(item.id);
    const mapTitle = mapTitleById[item.mapId] ?? item.mapId;
    const mapSlug = slugify(mapTitle);
    const intelSlug = `${slugify(item.title)}-${slugify(item.id)}`;

    const normalized = {
      ...item,
      gameSlug,
      gameName: GAME_INFO[gameSlug].name,
      mapTitle,
      mapSlug,
      intelSlug,
      transcript: PLACEHOLDER_TRANSCRIPT,
      url: `/intel/${gameSlug}/${mapSlug}/${intelSlug}/`,
    };

    grouped[gameSlug] ??= {};
    grouped[gameSlug][mapSlug] ??= { mapTitle, items: [] };
    grouped[gameSlug][mapSlug].items.push(normalized);
    urlManifest.push(normalized.url);
  }

  fs.rmSync(outputRoot, { recursive: true, force: true });
  ensureDir(outputRoot);

  const homeBody = `<h1>Intel Dossiers</h1><p>Browse declassified intel dossiers by game and map. Static HTML is generated at build time for crawler-friendly indexing.</p><ul>${Object.keys(grouped)
    .map((slug) => `<li><a href="/intel/${slug}/">${GAME_INFO[slug].name}</a></li>`)
    .join('')}</ul>`;
  writeFile(path.join(outputRoot, 'index.html'), pageShell({
    title: 'Intel Dossiers',
    description: 'Crawlable index of all Intel dossier pages grouped by game and map.',
    canonicalPath: '/intel/',
    body: homeBody,
    schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Intel Dossiers' },
  }));
  urlManifest.push('/intel/');

  for (const [gameSlug, gameMaps] of Object.entries(grouped)) {
    const gameName = GAME_INFO[gameSlug].name;
    const gameBody = `<div class="breadcrumbs"><a href="/intel/">Intel</a> / ${escapeHtml(gameName)}</div><h1>${escapeHtml(gameName)} Intel</h1><ul>${Object.entries(gameMaps)
      .map(([mapSlug, mapData]) => `<li><a href="/intel/${gameSlug}/${mapSlug}/">${escapeHtml(mapData.mapTitle)}</a> (${mapData.items.length})</li>`)
      .join('')}</ul>`;

    writeFile(path.join(outputRoot, gameSlug, 'index.html'), pageShell({
      title: `${gameName} Intel Dossiers`,
      description: `Browse ${gameName} maps and intel dossiers.`,
      canonicalPath: `/intel/${gameSlug}/`,
      body: gameBody,
      schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${gameName} Intel` },
    }));
    urlManifest.push(`/intel/${gameSlug}/`);

    for (const [mapSlug, mapData] of Object.entries(gameMaps)) {
      const mapBody = `<div class="breadcrumbs"><a href="/intel/">Intel</a> / <a href="/intel/${gameSlug}/">${escapeHtml(gameName)}</a> / ${escapeHtml(mapData.mapTitle)}</div><h1>${escapeHtml(mapData.mapTitle)} Intel</h1><ul>${mapData.items
        .map((intel) => `<li><a href="${intel.url}">${escapeHtml(intel.title)}</a> <small>(${escapeHtml(intel.typeDesc)})</small></li>`)
        .join('')}</ul>`;

      writeFile(path.join(outputRoot, gameSlug, mapSlug, 'index.html'), pageShell({
        title: `${mapData.mapTitle} Intel Dossiers`,
        description: `Static dossiers for ${mapData.mapTitle} in ${gameName}.`,
        canonicalPath: `/intel/${gameSlug}/${mapSlug}/`,
        body: mapBody,
        schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${mapData.mapTitle} Intel` },
      }));
      urlManifest.push(`/intel/${gameSlug}/${mapSlug}/`);

      for (const intel of mapData.items) {
        const body = `<div class="breadcrumbs"><a href="/intel/">Intel</a> / <a href="/intel/${gameSlug}/">${escapeHtml(gameName)}</a> / <a href="/intel/${gameSlug}/${mapSlug}/">${escapeHtml(mapData.mapTitle)}</a> / ${escapeHtml(intel.title)}</div><h1>${escapeHtml(intel.title)}</h1><p>${escapeHtml(intel.desc)}</p><div class="meta"><p><strong>Intel ID:</strong> ${escapeHtml(intel.id)}</p><p><strong>Type:</strong> ${escapeHtml(intel.typeDesc)}</p></div><h2>Transcript</h2><div class="transcript">${escapeHtml(intel.transcript)}</div>`;

        writeFile(path.join(outputRoot, gameSlug, mapSlug, intel.intelSlug, 'index.html'), pageShell({
          title: `${intel.title} | ${mapData.mapTitle} Intel`,
          description: `${intel.title} dossier for ${mapData.mapTitle}. ${intel.desc}`,
          canonicalPath: intel.url,
          body,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: intel.title,
            description: intel.desc,
            about: mapData.mapTitle,
            inLanguage: 'en',
          },
        }));
      }
    }
  }

  writeFile(path.join(outputRoot, 'manifest.json'), JSON.stringify({ urls: urlManifest.sort() }, null, 2));
  console.log(`Generated ${urlManifest.length} intel URLs in public/intel`);
}

build();
