import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const intelPath = path.join(root, 'src/data/intel.tsx');
const mapDetailsPath = path.join(root, 'src/data/maps/mapDetails.tsx');
const buildRoot = path.join(root, 'build');
const assetManifestPath = path.join(buildRoot, 'asset-manifest.json');
const hasAssetManifest = fs.existsSync(assetManifestPath);
const buildExists = fs.existsSync(buildRoot);
const isProdLike =
	process.env.NETLIFY === 'true' ||
	process.env.CI === 'true' ||
	process.env.NODE_ENV === 'production';

if (!isProdLike && !buildExists) {
	console.log('Skipping intel static generation in dev (no build output found).');
	process.exit(0);
}

const outputRoot = path.join(buildRoot, 'intel');
const FONT_STYLESHEET =
	'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap';
const PLACEHOLDER_TRANSCRIPT = 'DATA REDACTED - PENDING DECLASSIFICATION';

const GAME_INFO = {
	'black-ops-6': { name: 'Black Ops 6' },
	'black-ops-cold-war': { name: 'Black Ops Cold War' },
};

const INTEL_TYPE_LABELS = {
	Audio: 'Audio Logs',
	Docs: 'Documents',
	Radio: 'Radio Transmissions',
	Artifact: 'Artifacts',
};

const INTEL_TYPE_ORDER = [
	'Audio Logs',
	'Documents',
	'Radio Transmissions',
	'Artifacts',
];

const MAP_GROUPS = {
	'black-ops-6': [
		{ name: 'Liberty Falls', mapIds: ['libertyFalls'] },
		{ name: 'Terminus', mapIds: ['terminusBiolabs', 'terminusPrison'] },
		{ name: 'Citadelle Des Morts', mapIds: ['citadelle'] },
		{ name: 'The Tomb', mapIds: ['tomb'] },
		{ name: 'Shattered Veil', mapIds: ['shatteredVeil'] },
		{ name: 'Reckoning', mapIds: ['reckoning', 'reckoningBossArena'] },
	],
	'black-ops-cold-war': [
		{ name: 'Die Maschine', mapIds: ['dieMaschine', 'dieMaschineUnderground'] },
		{ name: 'Firebase Z', mapIds: ['firebaseZ', 'firebaseZSpawn'] },
		{ name: 'Mauer Der Toten', mapIds: ['mauerDerTotenStreets', 'mauerDerToten'] },
		{ name: 'Forsaken', mapIds: ['forsaken', 'forsakenUnderground'] },
		{
			name: 'Outbreak',
			mapIds: [
				'zoo',
				'ruka',
				'duga',
				'alpine',
				'golova',
				'sanatorium',
				'collateral',
				'armada',
			],
		},
	],
};

const WIKI_MAP_NAME_OVERRIDES = {
	'Die Maschine': 'Die_Maschine',
	'Firebase Z': 'Firebase_Z',
	'Liberty Falls': 'Liberty_Falls',
	'Mauer Der Toten': 'Mauer_der_Toten',
	'Shattered Veil': 'Shattered_Veil',
	'The Tomb': 'The_Tomb',
	'Citadelle Des Morts': 'Citadelle_des_Morts',
	Outbreak: 'Outbreak_(Cold_War)',
	Terminus: 'Terminus_(Zombies)',
	Reckoning: 'Reckoning_(Zombies)',
};

const slugify = value =>
	value
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, '-');

const toSnakeCase = value => value.toLowerCase().replace(/\s+/g, '_');

const escapeHtml = value =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

function parseMapTitles(fileContent) {
	const mapTitleById = {};
	const mapRegex =
		/[A-Za-z0-9_]+:\s*new MapItem\(MapIds\.([A-Za-z0-9_]+),\s*\{[\s\S]*?title:\s*'([^']+)'/g;
	let match;
	while ((match = mapRegex.exec(fileContent)) !== null) {
		mapTitleById[match[1]] = match[2];
	}
	return mapTitleById;
}

function parseIntelItems(fileContent) {
	const intelRegex =
		/\{\s*id:\s*`([^`]+)`[\s\S]*?typeDesc:\s*IntelType\.([A-Za-z0-9_]+),[\s\S]*?map:\s*MapIds\.([A-Za-z0-9_]+),[\s\S]*?title:\s*`([^`]+)`[\s\S]*?desc:\s*`([^`]+)`/g;
	const items = [];
	let match;

	while ((match = intelRegex.exec(fileContent)) !== null) {
		const [, id, typeKey, mapId, title, desc] = match;
		items.push({ id, typeKey, mapId, title, desc });
	}

	return items;
}

const inferGameSlug = intelId =>
	intelId.startsWith('BO6') ? 'black-ops-6' : 'black-ops-cold-war';

const ensureDir = dirPath => {
	fs.mkdirSync(dirPath, { recursive: true });
};

const writeFile = (filePath, content) => {
	ensureDir(path.dirname(filePath));
	fs.writeFileSync(filePath, content, 'utf8');
};

function getCssLinks() {
	if (!hasAssetManifest) return '';
	const manifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));
	const cssFiles = Object.values(manifest.files ?? {}).filter(
		file => typeof file === 'string' && file.endsWith('.css')
	);
	return cssFiles
		.map(href => `<link rel="stylesheet" href="${href}" />`)
		.join('');
}

const getWikiMapSlug = mapName => {
	const base = WIKI_MAP_NAME_OVERRIDES[mapName] ?? mapName;
	return encodeURIComponent(
		base.replace(/&/g, 'and').replace(/[’']/g, '').replace(/\s+/g, '_')
	);
};

const getWikiIntelUrlForMap = mapName =>
	mapName
		? `https://callofduty.fandom.com/wiki/${getWikiMapSlug(mapName)}/Intel`
		: undefined;

const QUICK_LINKS_HTML = `<div class="intel-header-links" aria-label="Quick links"><a id="discord" class="intel-header-link social-link" href="https://discord.gg/4Xqj8XntFe" target="_blank" rel="noreferrer" title="Discord" aria-label="Discord"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v11H8l-4 4V4z" /><circle cx="9" cy="10" r="1.2" /><circle cx="12" cy="10" r="1.2" /><circle cx="15" cy="10" r="1.2" /></svg></a><a id="github" class="intel-header-link social-link" href="https://github.com/Miss-placed/DECLASSIFIED" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 7 3 12l5 5 1.4-1.4L5.8 12l3.6-3.6L8 7zm8 0-1.4 1.4 3.6 3.6-3.6 3.6L16 17l5-5-5-5zM13.7 4 9.3 20h2l4.4-16h-2z" /></svg></a><a id="coffee" class="intel-header-link social-link" href="https://buymeacoffee.com/declassified.map" target="_blank" rel="noreferrer" title="Buy me a coffee" aria-label="Buy me a coffee"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7zm12 2h2a2 2 0 1 1 0 4h-2V9zM7 4h2v2H7V4zm3 0h2v2h-2V4z" /></svg></a></div>`;
const STATIC_SITE_NOTICE_HTML = `<aside class="intel-static-notice" role="note">You are viewing the static Intel archive outside the app. <a href="/">Click here</a> to return to the homepage.</aside>`;
const HOME_CRUMB_HTML = `<a class="dossier-breadcrumb-home" href="/" title="Home" aria-label="Home"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z" /></svg></a>`;
const EXTERNAL_LINK_ICON_HTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" /><path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" /></svg>`;
const GITHUB_ISSUES_NEW = 'https://github.com/Miss-placed/DECLASSIFIED/issues/new';

function pageShell({ title, description, canonicalPath, body, schema, type = 'article' }) {
	const canonicalUrl = `https://declassified.app${canonicalPath}`;
	const cssLinks = getCssLinks();
	const baseStyles = `:root{--clr-white:#ffffff;--clr-white-d:#e3ddd9;--clr-white-extra-dark:#d3ceca;--clr-grey-l:#6a6a6b;--clr-grey:#565555;--clr-grey-d:#3c3c3b;--clr-black:#1f2223;--clr-black-50:#1f222363;--clr-social-discord:#5865f2;--clr-social-github:#0f1114;--clr-social-coffee:#2f8f76;--clr-bg:var(--clr-grey-d);--clr-bg-lighter:#50504f;--clr-bg-inverted:var(--clr-white-d);--clr-color:var(--clr-white-d);--fs-sm:clamp(.8rem,.17vi + .76rem,.89rem);--fs-base:clamp(1rem,.34vi + .91rem,1.19rem);--fs-md:clamp(1.25rem,.61vi + 1.1rem,1.58rem);--fs-xl:clamp(1.95rem,1.56vi + 1.56rem,2.81rem)}*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100%}html{font-size:x-large}body{background:var(--clr-black);color:var(--clr-white-d);font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace}a{color:inherit}.intel-dossier-page{margin:0 auto;padding:20px;color:var(--clr-color);width:100%;max-width:1200px}.link-reset a{text-decoration:none;color:inherit}.title{font-weight:700;align-content:center}.text-sm{font-size:var(--fs-sm)!important}.text-md{font-size:var(--fs-md)!important}.rounded-box{border-radius:8px;border:1px solid var(--clr-grey-d);padding:10px;height:100%;width:100%}.filled{background:var(--clr-bg);color:var(--clr-white-d)}.homepage-box{border-radius:8px;border:1px solid var(--clr-grey-d);padding:10px;height:100%;text-align:center;vertical-align:middle;display:flex;justify-content:center;align-items:center;flex-direction:column}.homepage-box:hover{background:var(--clr-bg);color:var(--clr-white-d)}.intel-static-notice{margin:1rem 0;padding:.55rem .8rem;border:1px solid #4d5760;border-radius:8px;background:#2a3135;color:#ebe7e2;font-size:.8rem;line-height:1.35}.intel-static-notice a{font-weight:700;text-decoration:underline}.intel-static-notice a:hover{opacity:.85}.dossier-header{padding:1rem;margin-bottom:1.5rem}.dossier-header-content{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.dossier-header-copy{min-width:0}.dossier-kicker{color:var(--clr-white-extra-dark);font-size:.75rem;letter-spacing:.12em;margin:0}.dossier-header h1{margin:.35rem 0 .5rem;font-size:var(--fs-xl)}.dossier-header p{margin:0}.dossier-header-actions{flex-shrink:0}.dossier-subtitle{display:flex;align-items:center;gap:.35rem;flex-wrap:wrap}.dossier-subtitle a{font-weight:700;text-decoration:none}.dossier-subtitle a:hover{opacity:.85}.dossier-breadcrumb-home{display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:6px;border:1px solid var(--clr-grey);background:var(--clr-grey-d);color:var(--clr-white-d)}.dossier-breadcrumb-home svg{width:.85rem;height:.85rem;fill:currentColor}.intel-header-links{display:flex;align-items:center;justify-content:flex-end;gap:.5rem;flex-wrap:wrap}.intel-header-link{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;width:36px;height:36px;border-radius:8px;border:1px solid transparent;text-decoration:none;color:var(--clr-white-d);background:var(--clr-black)}.intel-header-link svg{width:18px;height:18px;fill:currentColor}.intel-header-link.social-link#discord{background:var(--clr-social-discord);color:var(--clr-white-d)}.intel-header-link.social-link#github{background:var(--clr-social-github);color:var(--clr-white)}.intel-header-link.social-link#coffee{background:var(--clr-social-coffee);color:var(--clr-white)}.intel-header-link:hover{filter:brightness(1.08)}.dossier-game-groups-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1rem}.dossier-game-group{display:flex;flex-direction:column}.dossier-game-group .map-group-header{margin-top:0}.intel-dossier-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:1rem;align-items:stretch}.dossier-grid-item{display:flex;height:100%;align-self:stretch}.dossier-card{background:transparent;box-shadow:none;display:flex;flex-direction:column;gap:.5rem;height:100%;width:100%;align-items:stretch;flex:1}.dossier-grid-item-link{display:flex;flex:1;text-decoration:none;color:inherit;width:100%}.dossier-grid-item-link-disabled{opacity:.75;cursor:default;pointer-events:none}.dossier-card .homepage-box{height:100%;min-height:110px;width:100%;display:flex;flex-direction:column;justify-content:center}.dossier-card .intel-dossier-actions{margin:0;justify-content:center;margin-top:auto}.dossier-placeholder-card .homepage-box{justify-content:center;text-align:center}.map-group-title{display:flex;flex-direction:column;gap:.45rem;min-width:0}.map-group-actions{display:flex;flex-wrap:wrap;gap:.5rem}.map-group-action{display:inline-flex;align-items:center;gap:.35rem;font-size:var(--fs-sm);text-decoration:none;padding:.2rem .55rem;border:1px solid var(--clr-grey);border-radius:6px;background:var(--clr-grey-d);color:var(--clr-white-d)}.map-group-action svg{width:.8rem;height:.8rem;fill:currentColor}.map-group-header{margin-top:1.5rem}.map-group-grid{margin-top:.75rem}.intel-dossier-actions{display:flex;flex-wrap:wrap;gap:.5rem;margin:.75rem 0 1.25rem}.intel-dossier-actions a,.intel-dossier-actions button{border:1px solid var(--clr-grey-d);border-radius:6px;padding:.35rem .7rem;color:inherit;background:var(--clr-bg);text-decoration:none;font-size:.9rem;cursor:pointer;font-family:inherit}.intel-dossier-actions a:hover,.intel-dossier-actions button:hover{background:var(--clr-bg-lighter)}.intel-dossier-actions .intel-action-with-icon{display:inline-flex;align-items:center;gap:.35rem}.intel-dossier-actions .intel-action-with-icon svg{width:.85rem;height:.85rem;fill:currentColor}.intel-type-header{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;margin-top:1.5rem}.intel-group-count{margin-left:auto;font-size:var(--fs-base);opacity:.85}.intel-type-icon{width:34px;height:34px;object-fit:contain}.map-intel-grid .homepage-box h3{font-size:var(--fs-base);line-height:1.25}.map-intel-grid .homepage-box p{font-size:var(--fs-sm);line-height:1.2;opacity:.9}@media(min-width:1200px){.dossier-game-groups-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){html{font-size:16px}.dossier-header-content{flex-direction:column}.dossier-header-actions{width:100%}.intel-header-links{justify-content:flex-start}}`;

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(
		title
	)}</title>
<meta name="description" content="${escapeHtml(
		description
	)}" />
<link rel="canonical" href="${canonicalUrl}" />
<meta property="og:title" content="${escapeHtml(
		title
	)}" />
<meta property="og:description" content="${escapeHtml(
		description
	)}" />
<meta property="og:type" content="${type}" />
<meta property="og:url" content="${canonicalUrl}" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="${FONT_STYLESHEET}" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="${FONT_STYLESHEET}" /></noscript>
${cssLinks}
<style>${baseStyles}</style>
<script type="application/ld+json">${JSON.stringify(
		schema
	)}</script>
</head>
<body class="dark">
<main class="intel-dossier-page link-reset">${STATIC_SITE_NOTICE_HTML}${body}</main>
</body>
</html>`;
}

function renderDossierHeader({ title, subtitle, subtitleHtml }) {
	return `<header class="dossier-header rounded-box filled"><div class="dossier-header-content"><div class="dossier-header-copy"><p class="dossier-kicker">DECLASSIFIED INTEL DOSSIER</p><h1>${escapeHtml(
		title
	)}</h1>${subtitleHtml ? `<p class="dossier-subtitle">${subtitleHtml}</p>` : subtitle ? `<p class="dossier-subtitle">${escapeHtml(subtitle)}</p>` : ''}</div><div class="dossier-header-actions">${QUICK_LINKS_HTML}</div></div></header>`;
}

function renderDossierCard({ title, subtitle, href, actionHref, actionLabel, openInNewTab, hideTitle = false }) {
	const actionAttrs = openInNewTab ? ' target="_blank" rel="noreferrer"' : '';
	return `<div class="dossier-grid-item"><div class="dossier-card"><a class="dossier-grid-item-link" href="${href}"><div class="homepage-box" style="padding:16px;">${
		hideTitle ? '' : `<h3>${escapeHtml(title)}</h3>`
	}${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ''}</div></a>${
		actionHref && actionLabel
			? `<div class="intel-dossier-actions"><a href="${actionHref}"${actionAttrs}>${escapeHtml(
					actionLabel
				)}</a></div>`
			: ''
	}</div></div>`;
}

function buildGithubHelpLink(gameName, mapGroupName) {
	return `${GITHUB_ISSUES_NEW}?title=${encodeURIComponent(
		`[Intel] ${gameName} - ${mapGroupName} dossier missing data`
	)}`;
}

function renderComingSoonCard({ message, helpHref }) {
	return `<div class="dossier-grid-item"><div class="dossier-card dossier-placeholder-card"><div class="homepage-box" style="padding:16px;"><h3>Coming Soon</h3><p>${escapeHtml(
		message
	)}</p></div><div class="intel-dossier-actions"><a href="${helpHref}" target="_blank" rel="noreferrer">Help on GitHub</a></div></div></div>`;
}

function build() {
	const intelSource = fs.readFileSync(intelPath, 'utf8');
	const mapSource = fs.readFileSync(mapDetailsPath, 'utf8');
	const mapTitleById = parseMapTitles(mapSource);
	const mapGroupNameByMapId = new Map();

	for (const [gameSlug, groups] of Object.entries(MAP_GROUPS)) {
		for (const group of groups) {
			for (const mapId of group.mapIds) {
				mapGroupNameByMapId.set(mapId, group.name);
			}
		}
	}

	const items = parseIntelItems(intelSource).map(item => {
		const gameSlug = inferGameSlug(item.id);
		const mapTitle = mapTitleById[item.mapId] ?? item.mapId;
		const mapGroupName = mapGroupNameByMapId.get(item.mapId) ?? mapTitle;
		const mapGroupSlug = slugify(mapGroupName);
		const type = INTEL_TYPE_LABELS[item.typeKey] ?? item.typeKey;
		const mapSlug = slugify(mapTitle);
		const intelSlug = `${slugify(item.title)}-${slugify(item.id)}`;
		return {
			...item,
			type,
			gameSlug,
			gameName: GAME_INFO[gameSlug].name,
			mapTitle,
			mapGroupName,
			mapGroupSlug,
			mapSlug,
			intelSlug,
			transcript: PLACEHOLDER_TRANSCRIPT,
			url: `/intel/${gameSlug}/${mapGroupSlug}/${intelSlug}/`,
		};
	});

	const urlManifest = new Set();
	const itemsByGame = new Map();

	for (const item of items) {
		const gameItems = itemsByGame.get(item.gameSlug) ?? [];
		gameItems.push(item);
		itemsByGame.set(item.gameSlug, gameItems);
	}

	fs.rmSync(outputRoot, { recursive: true, force: true });
	ensureDir(outputRoot);

	for (const [gameSlug, game] of Object.entries(GAME_INFO)) {
		const gameItems = itemsByGame.get(gameSlug) ?? [];
		const groups = MAP_GROUPS[gameSlug] ?? [];
		const groupSections = groups
			.map(group => {
				const intelCount = gameItems.filter(item => group.mapIds.includes(item.mapId)).length;
				const wikiUrl = getWikiIntelUrlForMap(group.name);
				const mapGroupSlug = slugify(group.name);
				const primaryMapId = group.mapIds[0];
				const cards =
					intelCount > 0
						? renderDossierCard({
								title: group.name,
								subtitle: `${intelCount} Intel${
									group.mapIds.length > 1 ? ` • ${group.mapIds.length} Areas` : ''
								}`,
								href: `/intel/${gameSlug}/${mapGroupSlug}/`,
								actionHref: primaryMapId ? `/${primaryMapId}` : undefined,
								actionLabel: 'Open map',
								openInNewTab: true,
								hideTitle: true,
							})
						: renderComingSoonCard({
								message: `No intel dossier items yet for ${group.name}.`,
								helpHref: buildGithubHelpLink(game.name, group.name),
							});

				return `<div class="intel-group dossier-game-group"><div class="intel-type-header rounded-box filled map-group-header"><div class="map-group-title"><h2 class="title text-md">${escapeHtml(
					group.name
				)}</h2><div class="map-group-actions">${
					wikiUrl
						? `<a class="map-group-action" href="${wikiUrl}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
						: ''
				}${
					primaryMapId
						? `<a class="map-group-action" href="/${primaryMapId}" target="_blank" rel="noreferrer">Open map</a>`
						: ''
				}</div></div></div><div class="intel-dossier-grid map-group-grid">${cards}</div></div>`;
			})
			.join('');

		const gameBody = `${renderDossierHeader({ title: 'Intel Maps', subtitleHtml: `${HOME_CRUMB_HTML} / ${escapeHtml(game.name)}` })}<div class="dossier-game-groups-grid">${groupSections}</div>`;

		writeFile(
			path.join(outputRoot, gameSlug, 'index.html'),
			pageShell({
				title: `${game.name} Intel Dossiers`,
				description: `Browse ${game.name} maps and intel dossiers.`,
				canonicalPath: `/intel/${gameSlug}/`,
				body: gameBody,
				type: 'website',
				schema: {
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: `${game.name} Intel Dossiers`,
				},
			})
		);
		urlManifest.add(`/intel/${gameSlug}/`);

		for (const group of groups) {
			const mapItems = gameItems.filter(item => group.mapIds.includes(item.mapId));
			if (mapItems.length === 0) continue;
			const mapGroupSlug = slugify(group.name);
			const wikiUrl = getWikiIntelUrlForMap(group.name);
			const primaryMapId = group.mapIds[0];

			const typeSections = INTEL_TYPE_ORDER.map(type => {
				const typeItems = mapItems.filter(item => item.type === type);
				if (typeItems.length === 0) return '';
				return `<div class="intel-group"><div class="intel-type-header rounded-box filled"><img class="intel-type-icon" src="/assets/img/markers/${toSnakeCase(
					type
				)}.svg" alt="${escapeHtml(type)} icon" loading="lazy" /><h2 class="title text-md">${escapeHtml(
					type
				)}</h2><span class="intel-group-count">${typeItems.length} Intel</span></div><div class="intel-dossier-grid map-intel-grid">${typeItems
					.map(intel =>
						renderDossierCard({
							title: intel.title,
							href: `/intel/${gameSlug}/${mapGroupSlug}/${intel.intelSlug}/`,
							actionHref: `/${intel.id}`,
							actionLabel: 'Open on map',
							openInNewTab: true,
						})
					)
					.join('')}</div></div>`;
			})
				.filter(Boolean)
				.join('');

			const mapBody = `${renderDossierHeader({
				title: 'Intel List',
				subtitleHtml: `${HOME_CRUMB_HTML} / <a href="/intel/${gameSlug}/">${escapeHtml(game.name)}</a> / ${escapeHtml(group.name)}`,
			})}<div class="intel-dossier-actions"><a href="/${primaryMapId}" target="_blank" rel="noreferrer">Open map</a>${
				wikiUrl
					? `<a class="intel-action-with-icon" href="${wikiUrl}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
					: ''
			}</div>${typeSections}`;

			writeFile(
				path.join(outputRoot, gameSlug, mapGroupSlug, 'index.html'),
				pageShell({
					title: `${group.name} Intel Dossiers`,
					description: `Browse ${group.name} intel dossiers in ${game.name}.`,
					canonicalPath: `/intel/${gameSlug}/${mapGroupSlug}/`,
					body: mapBody,
					type: 'website',
					schema: {
						'@context': 'https://schema.org',
						'@type': 'CollectionPage',
						name: `${group.name} Intel Dossiers`,
					},
				})
			);
			urlManifest.add(`/intel/${gameSlug}/${mapGroupSlug}/`);

			for (const intel of mapItems) {
				const leafBody = `${renderDossierHeader({
					title: intel.title,
					subtitleHtml: `${HOME_CRUMB_HTML} / <a href="/intel/${gameSlug}/">${escapeHtml(game.name)}</a> / <a href="/intel/${gameSlug}/${mapGroupSlug}/">${escapeHtml(group.name)}</a> • ${escapeHtml(intel.type)}`,
				})}<p class="rounded-box filled text-sm">${escapeHtml(
					intel.desc
				)}</p><h2 class="title text-md">Transcript</h2><div class="intel-dossier-actions"><a href="/${intel.id}" target="_blank" rel="noreferrer">Open intel on map</a>${
					wikiUrl
						? `<a class="intel-action-with-icon" href="${wikiUrl}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
						: ''
				}</div><p class="rounded-box text-sm">${escapeHtml(intel.transcript)}</p>`;

				writeFile(
					path.join(
						outputRoot,
						gameSlug,
						mapGroupSlug,
						intel.intelSlug,
						'index.html'
					),
					pageShell({
						title: `${intel.title} | ${group.name} Intel`,
						description: `${intel.title} dossier for ${group.name}. ${intel.desc}`,
						canonicalPath: `/intel/${gameSlug}/${mapGroupSlug}/${intel.intelSlug}/`,
						body: leafBody,
						schema: {
							'@context': 'https://schema.org',
							'@type': 'Article',
							headline: intel.title,
							description: intel.desc,
							about: group.name,
							inLanguage: 'en',
						},
					})
				);
				urlManifest.add(
					`/intel/${gameSlug}/${mapGroupSlug}/${intel.intelSlug}/`
				);
			}
		}
	}

	writeFile(
		path.join(outputRoot, 'manifest.json'),
		JSON.stringify({ urls: [...urlManifest].sort() }, null, 2)
	);
	console.log(`Generated ${urlManifest.size} intel URLs in ${outputRoot}`);
}

build();
