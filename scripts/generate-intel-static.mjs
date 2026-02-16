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
		{ name: 'Reckoning', mapIds: ['reckoning', 'reckoningBossArena'] },
		{ name: 'Shattered Veil', mapIds: ['shatteredVeil'] },
		{ name: 'The Tomb', mapIds: ['tomb'] },
		{ name: 'Citadelle Des Morts', mapIds: ['citadelle'] },
		{ name: 'Terminus', mapIds: ['terminusBiolabs', 'terminusPrison'] },
		{ name: 'Liberty Falls', mapIds: ['libertyFalls'] },
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
const INTEL_HUB_CRUMB_HTML = `<a href="/intel/">Intel Hub</a>`;
const EXTERNAL_LINK_ICON_HTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" /><path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" /></svg>`;

function pageShell({ title, description, canonicalPath, body, schema, type = 'article' }) {
	const canonicalUrl = `https://declassified.app${canonicalPath}`;
	const cssLinks = getCssLinks();
	const baseStyles = `html,body{margin:0;padding:0;min-height:100%;background:#1f2223;color:#e3ddd9;font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace}a{color:inherit}@media(max-width:768px){html{font-size:16px}}.intel-static-notice{margin:1rem 0;padding:.55rem .8rem;border:1px solid #4d5760;border-radius:8px;background:#2a3135;color:#ebe7e2;font-size:.8rem;line-height:1.35}.intel-static-notice a{font-weight:700;text-decoration:underline}.intel-static-notice a:hover{opacity:.85}.dossier-header-content{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.dossier-header-copy{min-width:0}.dossier-header-actions{flex-shrink:0}.dossier-subtitle{display:flex;align-items:center;gap:.35rem;flex-wrap:wrap}.dossier-subtitle a{font-weight:700;text-decoration:none}.dossier-subtitle a:hover{opacity:.85}.dossier-breadcrumb-home{display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:6px;border:1px solid var(--clr-grey);background:var(--clr-grey-d);color:var(--clr-white-d)}.dossier-breadcrumb-home svg{width:.85rem;height:.85rem;fill:currentColor}.map-intel-grid .homepage-box h3{font-size:var(--fs-base,1rem);line-height:1.25}.map-intel-grid .homepage-box p{font-size:var(--fs-sm,.85rem);line-height:1.2;opacity:.9}.intel-header-links{display:flex;align-items:center;justify-content:flex-end;gap:.5rem;flex-wrap:wrap}.intel-header-link{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;width:36px;height:36px;border-radius:8px;border:1px solid transparent;text-decoration:none;color:var(--clr-white-d);background:var(--clr-black)}.intel-header-link svg{width:18px;height:18px;fill:currentColor}.intel-header-link.social-link#discord{background:var(--clr-social-discord);color:var(--clr-white-d)}.intel-header-link.social-link#github{background:var(--clr-social-github);color:var(--clr-white)}.intel-header-link.social-link#coffee{background:var(--clr-social-coffee);color:var(--clr-white)}.intel-header-link:hover{filter:brightness(1.08)}.intel-dossier-actions .intel-action-with-icon{display:inline-flex;align-items:center;gap:.35rem}.intel-dossier-actions .intel-action-with-icon svg{width:.85rem;height:.85rem;fill:currentColor}.map-group-wiki-link{display:inline-flex;align-items:center;gap:.35rem;font-size:var(--fs-sm,.85rem);text-decoration:none;padding:.2rem .55rem;border:1px solid var(--clr-grey);border-radius:6px;background:var(--clr-grey-d);color:var(--clr-white-d)}.map-group-wiki-link svg{width:.8rem;height:.8rem;fill:currentColor}@media(max-width:768px){.dossier-header-content{flex-direction:column}.dossier-header-actions{width:100%}.intel-header-links{justify-content:flex-start}}`;

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

function renderDossierCard({ title, subtitle, href, actionHref, actionLabel, openInNewTab }) {
	const actionAttrs = openInNewTab ? ' target="_blank" rel="noreferrer"' : '';
	return `<div class="dossier-grid-item"><div class="dossier-card"><a class="dossier-card-link" href="${href}"><div class="homepage-box" style="padding:16px;"><h3>${escapeHtml(
		title
	)}</h3>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ''}</div></a>${
		actionHref && actionLabel
			? `<div class="intel-dossier-actions"><a href="${actionHref}"${actionAttrs}>${escapeHtml(
					actionLabel
				)}</a></div>`
			: ''
	}</div></div>`;
}

function build() {
	const intelSource = fs.readFileSync(intelPath, 'utf8');
	const mapSource = fs.readFileSync(mapDetailsPath, 'utf8');
	const mapTitleById = parseMapTitles(mapSource);
	const items = parseIntelItems(intelSource).map(item => {
		const gameSlug = inferGameSlug(item.id);
		const mapTitle = mapTitleById[item.mapId] ?? item.mapId;
		const type = INTEL_TYPE_LABELS[item.typeKey] ?? item.typeKey;
		const mapSlug = slugify(mapTitle);
		const intelSlug = `${slugify(item.title)}-${slugify(item.id)}`;
		return {
			...item,
			type,
			gameSlug,
			gameName: GAME_INFO[gameSlug].name,
			mapTitle,
			mapSlug,
			intelSlug,
			transcript: PLACEHOLDER_TRANSCRIPT,
			url: `/intel/${gameSlug}/${mapSlug}/${intelSlug}/`,
		};
	});

	const urlManifest = new Set(['/intel/']);
	const itemsByGame = new Map();
	const mapMetaByGame = new Map();
	const mapGroupNameByMapId = new Map();

	for (const [gameSlug, groups] of Object.entries(MAP_GROUPS)) {
		for (const group of groups) {
			for (const mapId of group.mapIds) {
				mapGroupNameByMapId.set(mapId, group.name);
			}
		}
	}

	for (const item of items) {
		const gameItems = itemsByGame.get(item.gameSlug) ?? [];
		gameItems.push(item);
		itemsByGame.set(item.gameSlug, gameItems);

		const mapMeta = mapMetaByGame.get(item.gameSlug) ?? new Map();
		if (!mapMeta.has(item.mapId)) {
			mapMeta.set(item.mapId, {
				mapId: item.mapId,
				mapTitle: item.mapTitle,
				mapSlug: item.mapSlug,
				groupName: mapGroupNameByMapId.get(item.mapId) ?? item.mapTitle,
			});
		}
		mapMetaByGame.set(item.gameSlug, mapMeta);
	}

	fs.rmSync(outputRoot, { recursive: true, force: true });
	ensureDir(outputRoot);

	const homeBody = `${renderDossierHeader({ title: 'Intel Dossier Archive', subtitleHtml: `${HOME_CRUMB_HTML} / Intel Hub` })}<p class="rounded-box filled text-sm">Browse each game hub for map dossiers and individual intel pages. Each dossier links back to the interactive map.</p><div class="intel-type-header rounded-box filled map-group-header"><h2 class="title text-md">Intel Hubs</h2></div><div class="intel-dossier-grid map-group-grid">${Object.entries(
		GAME_INFO
	)
		.map(
			([slug, game]) =>
				renderDossierCard({
					title: game.name,
					subtitle: 'Explore map hubs and dossiers.',
					href: `/intel/${slug}/`,
				})
		)
		.join('')}</div>`;

	writeFile(
		path.join(outputRoot, 'index.html'),
		pageShell({
			title: 'Intel Dossier Archive',
			description: 'Browse each game hub for map dossiers and individual intel pages.',
			canonicalPath: '/intel/',
			body: homeBody,
			type: 'website',
			schema: {
				'@context': 'https://schema.org',
				'@type': 'CollectionPage',
				name: 'Intel Dossier Archive',
			},
		})
	);

	for (const [gameSlug, game] of Object.entries(GAME_INFO)) {
		const gameItems = itemsByGame.get(gameSlug) ?? [];
		const gameMapMeta = mapMetaByGame.get(gameSlug) ?? new Map();
		const groups = MAP_GROUPS[gameSlug] ?? [];
		const groupSections = groups
			.map(group => {
				const maps = group.mapIds
					.map(mapId => gameMapMeta.get(mapId))
					.filter(Boolean);
				if (maps.length === 0) return '';

				const intelCount = gameItems.filter(item => group.mapIds.includes(item.mapId)).length;
				const wikiUrl = getWikiIntelUrlForMap(group.name);

				return `<div class="intel-group"><div class="intel-type-header rounded-box filled map-group-header"><h2 class="title text-md">${escapeHtml(
					group.name
				)}</h2>${
					wikiUrl
						? `<a class="map-group-wiki-link" href="${wikiUrl}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
						: ''
				}<span class="intel-group-count">${intelCount} Intel</span></div><div class="intel-dossier-grid map-group-grid">${maps
					.map(mapInfo =>
						renderDossierCard({
							title: mapInfo.mapTitle,
							href: `/intel/${gameSlug}/${mapInfo.mapSlug}/`,
							actionHref: `/${mapInfo.mapId}`,
							actionLabel: 'Open map',
							openInNewTab: true,
						})
					)
					.join('')}</div></div>`;
			})
			.filter(Boolean)
			.join('');

		const gameBody = `${renderDossierHeader({ title: 'Intel Maps', subtitleHtml: `${HOME_CRUMB_HTML} / ${INTEL_HUB_CRUMB_HTML} / ${escapeHtml(game.name)}` })}<p class="rounded-box filled text-sm">Select a map hub to view intel dossiers. Open the map to jump into the interactive tracker.</p>${groupSections}`;

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

		for (const mapInfo of gameMapMeta.values()) {
			const mapItems = gameItems.filter(item => item.mapId === mapInfo.mapId);
			if (mapItems.length === 0) continue;
			const wikiUrl = getWikiIntelUrlForMap(mapInfo.groupName);

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
							href: `/intel/${gameSlug}/${mapInfo.mapSlug}/${intel.intelSlug}/`,
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
				subtitleHtml: `${HOME_CRUMB_HTML} / ${INTEL_HUB_CRUMB_HTML} / <a href="/intel/${gameSlug}/">${escapeHtml(game.name)}</a> / ${escapeHtml(mapInfo.mapTitle)}`,
			})}<div class="intel-dossier-actions"><a href="/${mapInfo.mapId}" target="_blank" rel="noreferrer">Open map</a>${
				wikiUrl
					? `<a class="intel-action-with-icon" href="${wikiUrl}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
					: ''
			}</div>${typeSections}`;

			writeFile(
				path.join(outputRoot, gameSlug, mapInfo.mapSlug, 'index.html'),
				pageShell({
					title: `${mapInfo.mapTitle} Intel Dossiers`,
					description: `Browse ${mapInfo.mapTitle} intel dossiers in ${game.name}.`,
					canonicalPath: `/intel/${gameSlug}/${mapInfo.mapSlug}/`,
					body: mapBody,
					type: 'website',
					schema: {
						'@context': 'https://schema.org',
						'@type': 'CollectionPage',
						name: `${mapInfo.mapTitle} Intel Dossiers`,
					},
				})
			);
			urlManifest.add(`/intel/${gameSlug}/${mapInfo.mapSlug}/`);

			for (const intel of mapItems) {
				const leafBody = `${renderDossierHeader({
					title: intel.title,
					subtitleHtml: `${HOME_CRUMB_HTML} / ${INTEL_HUB_CRUMB_HTML} / <a href="/intel/${gameSlug}/">${escapeHtml(game.name)}</a> / <a href="/intel/${gameSlug}/${mapInfo.mapSlug}/">${escapeHtml(mapInfo.mapTitle)}</a> • ${escapeHtml(intel.type)}`,
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
						mapInfo.mapSlug,
						intel.intelSlug,
						'index.html'
					),
					pageShell({
						title: `${intel.title} | ${mapInfo.mapTitle} Intel`,
						description: `${intel.title} dossier for ${mapInfo.mapTitle}. ${intel.desc}`,
						canonicalPath: `/intel/${gameSlug}/${mapInfo.mapSlug}/${intel.intelSlug}/`,
						body: leafBody,
						schema: {
							'@context': 'https://schema.org',
							'@type': 'Article',
							headline: intel.title,
							description: intel.desc,
							about: mapInfo.mapTitle,
							inLanguage: 'en',
						},
					})
				);
				urlManifest.add(
					`/intel/${gameSlug}/${mapInfo.mapSlug}/${intel.intelSlug}/`
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
