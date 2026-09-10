import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const baseUrl = 'https://declassified.app';

export type LlmsManifest = {
  urls: string[];
};

export type LlmsManifestMap = {
  intel: LlmsManifest;
  operations: LlmsManifest;
};

type LlmsCatalog = {
  allUrls: string[];
  intelGameHubs: string[];
  intelMapHubs: string[];
  intelDetailPages: string[];
  questMapHubs: string[];
  eggMapHubs: string[];
  operationsHubs: string[];
};

const uniqueSorted = (urls: string[]) =>
  Array.from(new Set(urls)).sort((left, right) => left.localeCompare(right));

const toAbsoluteUrl = (url: string) => `${baseUrl}${url}`;

const splitRoute = (url: string) => url.split('/').filter(Boolean);

const humanizeToken = (token: string) => {
  if (/^\d+$/.test(token)) {
    return token;
  }

  if (/^[a-z]{2,}\d+[a-z0-9]*$/i.test(token)) {
    return token.toUpperCase();
  }

  return token.charAt(0).toUpperCase() + token.slice(1);
};

const humanizeSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map(humanizeToken)
    .join(' ');

const stripTrailingRouteId = (slug: string) =>
  slug.replace(/-[a-z0-9]*\d[a-z0-9]*$/i, '');

const getRouteMetadata = (url: string) => {
  const parts = splitRoute(url);
  const [family, game, map, leaf] = parts;
  const gameTitle = game ? humanizeSlug(game) : '';
  const mapTitle = map ? humanizeSlug(map) : '';

  if (family === 'intel' && parts.length === 2) {
    return {
      label: `${gameTitle} Intel Dossiers`,
      description: `Game-level intel index for ${gameTitle}.`,
    };
  }

  if (family === 'intel' && parts.length === 3) {
    return {
      label: `${mapTitle} Intel Dossiers`,
      description: `Map-level intel hub for ${mapTitle}.`,
    };
  }

  if (family === 'intel' && parts.length >= 4) {
    const intelTitle = humanizeSlug(stripTrailingRouteId(leaf));
    return {
      label: intelTitle,
      description: `Intel entry for ${intelTitle} on ${mapTitle}.`,
    };
  }

  if (family === 'quests' && parts.length === 3) {
    return {
      label: `${mapTitle} Main Quest`,
      description: `Main quest walkthrough for ${mapTitle}.`,
    };
  }

  if (family === 'eggs' && parts.length === 3) {
    return {
      label: `${mapTitle} Side Eggs`,
      description: `Side egg guide for ${mapTitle}.`,
    };
  }

  if (family === 'operations' && parts.length === 2) {
    return {
      label: `${gameTitle} Operations`,
      description:
        'Game hub that routes players into main quest walkthroughs and side egg guides, depending on whether they want core progression or optional rewards and secrets.',
    };
  }

  return {
    label: url,
    description: 'Canonical site route.',
  };
};

const formatHubLabel = (url: string) => {
  const [family, game, map] = splitRoute(url);

  if (family === 'operations') {
    return `Operations hub · ${humanizeSlug(game)}`;
  }

  const familyLabel =
    family === 'intel'
      ? 'Intel hub'
      : family === 'quests'
        ? 'Main quest'
        : 'Side eggs';

  if (!map) {
    return `${familyLabel} · ${humanizeSlug(game)}`;
  }

  return `${familyLabel} · ${humanizeSlug(game)} · ${humanizeSlug(map)}`;
};

const classifyUrls = (manifests: LlmsManifestMap): LlmsCatalog => {
  const allUrls = uniqueSorted(['/', ...manifests.intel.urls, ...manifests.operations.urls]);
  const intelUrls = uniqueSorted(manifests.intel.urls);
  const operationUrls = uniqueSorted(manifests.operations.urls);

  return {
    allUrls,
    intelGameHubs: intelUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'intel' && parts.length === 2;
    }),
    intelMapHubs: intelUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'intel' && parts.length === 3;
    }),
    intelDetailPages: intelUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'intel' && parts.length >= 4;
    }),
    questMapHubs: operationUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'quests' && parts.length === 3;
    }),
    eggMapHubs: operationUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'eggs' && parts.length === 3;
    }),
    operationsHubs: operationUrls.filter(url => {
      const parts = splitRoute(url);
      return parts[0] === 'operations' && parts.length === 2;
    }),
  };
};

const renderList = (
  urls: string[],
  describe: (url: string) => string,
  label: (url: string) => string = url => url
) => urls.map(url => `- [${label(url)}](${toAbsoluteUrl(url)}): ${describe(url)}`).join('\n');

const renderMetadataList = (urls: string[]) =>
  urls
    .map(url => {
      const metadata = getRouteMetadata(url);
      return `- [${metadata.label}](${toAbsoluteUrl(url)}): ${metadata.description}`;
    })
    .join('\n');

export const buildLlmsText = (manifests: LlmsManifestMap) => {
  const catalog = classifyUrls(manifests);
  const lines = [
    '# DECLASSIFIED',
    '',
    '> DECLASSIFIED is a Call of Duty Zombies reference site with interactive map data, collectible intel hubs, main quest walkthroughs, side egg guides, and operations indexes for Black Ops 6 and Black Ops Cold War.',
    '',
    'Use map hub pages before deep links when you need context. Canonical URLs use trailing slashes.',
    'Only `/intel/` currently exposes item-level deep links in the published static route set; `/quests/` and `/eggs/` are map-level guides.',
    '',
    'Primary route patterns:',
    '- `/intel/{game}/`: Game-level intel index.',
    '- `/intel/{game}/{map}/`: Map-specific intel hub.',
    '- `/intel/{game}/{map}/{item-slug}/`: Individual intel detail page.',
    '- `/quests/{game}/{map}/`: Main quest walkthrough for a map.',
    '- `/eggs/{game}/{map}/`: Side eggs and auxiliary tasks for a map.',
    '- `/operations/{game}/`: Game-wide operations hub.',
    '',
    'Deployment note: production `robots.txt` may be overridden at the CDN or Cloudflare layer. Repo file alone does not guarantee live crawler access.',
    '',
    '## Start Here',
    '',
    `- [Homepage](${baseUrl}/): Interactive app entry point.`,
    `- [Sitemap](${baseUrl}/sitemap.xml): Complete canonical URL inventory.`,
    `- [Full llms index](${baseUrl}/llms-full.txt): Exhaustive route listing for direct deep links.`,
  ];

  if (catalog.intelGameHubs.length > 0) {
    lines.push('', '## Intel Game Hubs', '', renderList(catalog.intelGameHubs, () => 'Top-level intel index for this game.', formatHubLabel));
  }

  if (catalog.intelMapHubs.length > 0) {
    lines.push('', '## Intel Map Hubs', '', renderList(catalog.intelMapHubs, () => 'Collectible intel hub for this map.', formatHubLabel));
  }

  if (catalog.questMapHubs.length > 0) {
    lines.push('', '## Main Quest Guides', '', renderList(catalog.questMapHubs, () => 'Main quest walkthrough and step navigation for this map.', formatHubLabel));
  }

  if (catalog.eggMapHubs.length > 0) {
    lines.push('', '## Side Egg Guides', '', renderList(catalog.eggMapHubs, () => 'Side egg and auxiliary objective guide for this map.', formatHubLabel));
  }

  if (catalog.operationsHubs.length > 0) {
    lines.push('', '## Operations Hubs', '', renderList(catalog.operationsHubs, () => 'Game-wide operations overview.', formatHubLabel));
  }

  lines.push('', '## Optional', '', `- [robots.txt](${baseUrl}/robots.txt): Origin crawl policy file. Deployed response may differ if CDN-managed rules are enabled.`);

  return `${lines.join('\n')}\n`;
};

export const buildLlmsFullText = (manifests: LlmsManifestMap) => {
  const catalog = classifyUrls(manifests);
  const lines = [
    '# DECLASSIFIED Full Index',
    '',
    '> Exhaustive canonical route index for DECLASSIFIED. Prefer `/llms.txt` for curated discovery and use this file when you need direct deep links.',
    '',
    'All listed URLs are canonical site paths with trailing slashes.',
    '',
    '## Entry Points',
    '',
    `- [Homepage](${baseUrl}/): Interactive app entry point.`,
    `- [llms.txt](${baseUrl}/llms.txt): Curated LLM discovery file.`,
    `- [Sitemap](${baseUrl}/sitemap.xml): Complete machine-generated sitemap.`,
  ];

  if (catalog.intelGameHubs.length > 0) {
    lines.push('', '## Intel Game Hubs', '', renderMetadataList(catalog.intelGameHubs));
  }

  if (catalog.intelMapHubs.length > 0) {
    lines.push('', '## Intel Map Hubs', '', renderMetadataList(catalog.intelMapHubs));
  }

  if (catalog.intelDetailPages.length > 0) {
    lines.push('', '## Intel Detail Pages', '', renderMetadataList(catalog.intelDetailPages));
  }

  if (catalog.questMapHubs.length > 0) {
    lines.push('', '## Main Quest Guides', '', renderMetadataList(catalog.questMapHubs));
  }

  if (catalog.eggMapHubs.length > 0) {
    lines.push('', '## Side Egg Guides', '', renderMetadataList(catalog.eggMapHubs));
  }

  if (catalog.operationsHubs.length > 0) {
    lines.push('', '## Operations Hubs', '', renderMetadataList(catalog.operationsHubs));
  }

  return `${lines.join('\n')}\n`;
};

const root = process.cwd();
const buildRoot = path.join(root, 'build');
const publicRoot = path.join(root, 'public');
const buildIntelManifestPath = path.join(buildRoot, 'intel', 'manifest.json');
const publicIntelManifestPath = path.join(publicRoot, 'intel', 'manifest.json');
const buildOperationsManifestPath = path.join(buildRoot, 'operations', 'manifest.json');
const publicOperationsManifestPath = path.join(publicRoot, 'operations', 'manifest.json');

const loadManifest = (candidates: string[]) => {
  for (const manifestPath of candidates) {
    if (fs.existsSync(manifestPath)) {
      return JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as LlmsManifest;
    }
  }

  return null;
};

const writeTextFile = (filePath: string, content: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

const generateLlmsFiles = () => {
  const intelManifest = loadManifest([buildIntelManifestPath, publicIntelManifestPath]);
  const operationsManifest = loadManifest([buildOperationsManifestPath, publicOperationsManifestPath]);
  const missing: string[] = [];

  if (!intelManifest) {
    missing.push('intel');
  }

  if (!operationsManifest) {
    missing.push('operations');
  }

  if (missing.length > 0) {
    throw new Error(`Missing manifest(s): ${missing.join(', ')}. Run static generators first (intel + operations).`);
  }

  const manifests: LlmsManifestMap = {
    intel: intelManifest as LlmsManifest,
    operations: operationsManifest as LlmsManifest,
  };
  const outputs = new Set<string>();

  if (fs.existsSync(buildIntelManifestPath) || fs.existsSync(buildOperationsManifestPath)) {
    outputs.add(buildRoot);
    outputs.add(publicRoot);
  } else {
    outputs.add(publicRoot);
  }

  const llmsText = buildLlmsText(manifests);
  const llmsFullText = buildLlmsFullText(manifests);

  outputs.forEach(outputRoot => {
    writeTextFile(path.join(outputRoot, 'llms.txt'), llmsText);
    writeTextFile(path.join(outputRoot, 'llms-full.txt'), llmsFullText);
  });

  console.log(`Generated llms files in ${Array.from(outputs).join(', ')}`);
};

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  generateLlmsFiles();
}