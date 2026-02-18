import fs from 'node:fs';
import path from 'node:path';
import {
	getOperationsGames,
	getOperationsMapGroups,
	getOperationsMapItems,
	resolveRelatedLinksForItem,
	validateOperationsModel,
	type OperationRouteItem,
	type OperationSourceKind,
} from '../src/data/operationsSeo';
import { getMiscIconUri } from '../src/data/icons';
import { getWikiMapUrlForMap } from '../src/helpers/wiki';

const root = process.cwd();
const buildRoot = path.join(root, 'build');
const assetManifestPath = path.join(buildRoot, 'asset-manifest.json');
const hasAssetManifest = fs.existsSync(assetManifestPath);
const buildExists = fs.existsSync(buildRoot);
const isProdLike =
	process.env.NETLIFY === 'true' ||
	process.env.CI === 'true' ||
	process.env.NODE_ENV === 'production';

if (!isProdLike && !buildExists) {
	console.log('Skipping operations static generation in dev (no build output found).');
	process.exit(0);
}

const FONT_STYLESHEET =
	'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap';
const outputRoots = {
	operations: path.join(buildRoot, 'operations'),
	eggs: path.join(buildRoot, 'eggs'),
	quests: path.join(buildRoot, 'quests'),
};

const QUICK_LINKS_HTML = `<div class="intel-header-links" aria-label="Quick links"><a id="discord" class="intel-header-link social-link" href="https://discord.gg/4Xqj8XntFe" target="_blank" rel="noreferrer" title="Discord" aria-label="Discord"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v11H8l-4 4V4z" /><circle cx="9" cy="10" r="1.2" /><circle cx="12" cy="10" r="1.2" /><circle cx="15" cy="10" r="1.2" /></svg></a><a id="github" class="intel-header-link social-link" href="https://github.com/Miss-placed/DECLASSIFIED" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 7 3 12l5 5 1.4-1.4L5.8 12l3.6-3.6L8 7zm8 0-1.4 1.4 3.6 3.6-3.6 3.6L16 17l5-5-5-5zM13.7 4 9.3 20h2l4.4-16h-2z" /></svg></a><a id="coffee" class="intel-header-link social-link" href="https://buymeacoffee.com/declassified.map" target="_blank" rel="noreferrer" title="Buy me a coffee" aria-label="Buy me a coffee"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7zm12 2h2a2 2 0 1 1 0 4h-2V9zM7 4h2v2H7V4zm3 0h2v2h-2V4z" /></svg></a></div>`;
const STATIC_SITE_NOTICE_HTML = `<aside class="intel-static-notice" role="note">You are viewing the static Operations archive outside the app. <a href="/">Click here</a> to return to the homepage.</aside>`;
const HOME_CRUMB_HTML = `<a class="dossier-breadcrumb-home" href="/" title="Home" aria-label="Home"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z" /></svg></a>`;
const EXTERNAL_LINK_ICON_HTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3z" /><path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" /></svg>`;

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

const ensureDir = (dirPath: string) => {
	fs.mkdirSync(dirPath, { recursive: true });
};

const writeFile = (filePath: string, content: string) => {
	ensureDir(path.dirname(filePath));
	fs.writeFileSync(filePath, content, 'utf8');
};

const cleanOutputs = () => {
	Object.values(outputRoots).forEach(target => {
		fs.rmSync(target, { recursive: true, force: true });
		ensureDir(target);
	});
};

const getCssLinks = () => {
	if (!hasAssetManifest) return '';
	const manifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));
	const cssFiles = Object.values(manifest.files ?? {}).filter(
		file => typeof file === 'string' && file.endsWith('.css')
	);
	return cssFiles
		.map(href => `<link rel="stylesheet" href="${href}" />`)
		.join('');
};

const pageShell = ({
	title,
	description,
	canonicalPath,
	body,
	type = 'article',
	schema,
}: {
	title: string;
	description: string;
	canonicalPath: string;
	body: string;
	type?: string;
	schema: Record<string, unknown>;
}) => {
	const canonicalUrl = `https://declassified.app${canonicalPath}`;
	const cssLinks = getCssLinks();
	const baseStyles = `:root{--clr-white:#ffffff;--clr-white-d:#e3ddd9;--clr-white-extra-dark:#d3ceca;--clr-grey-l:#6a6a6b;--clr-grey:#565555;--clr-grey-d:#3c3c3b;--clr-black:#1f2223;--clr-black-50:#1f222363;--clr-red:#b33536;--clr-social-discord:#5865f2;--clr-social-github:#0f1114;--clr-social-coffee:#2f8f76;--clr-bg:var(--clr-grey-d);--clr-bg-lighter:#50504f;--clr-bg-inverted:var(--clr-white-d);--clr-color:var(--clr-white-d);--fs-sm:clamp(.8rem,.17vi + .76rem,.89rem);--fs-base:clamp(1rem,.34vi + .91rem,1.19rem);--fs-md:clamp(1.25rem,.61vi + 1.1rem,1.58rem);--fs-xl:clamp(1.95rem,1.56vi + 1.56rem,2.81rem)}*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100%}html{font-size:x-large}body{background:var(--clr-black);color:var(--clr-white-d);font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace}a{color:inherit}.intel-dossier-page{margin:0 auto;padding:20px;color:var(--clr-color);width:100%;max-width:1200px}.link-reset a{text-decoration:none;color:inherit}.title{font-weight:700;align-content:center}.text-sm{font-size:var(--fs-sm)!important}.text-md{font-size:var(--fs-md)!important}.rounded-box{border-radius:8px;border:1px solid var(--clr-grey-d);padding:10px;height:100%;width:100%}.filled{background:var(--clr-bg);color:var(--clr-white-d)}.homepage-box{border-radius:8px;border:1px solid var(--clr-grey-d);padding:10px;height:100%;text-align:center;vertical-align:middle;display:flex;justify-content:center;align-items:center;flex-direction:column}.homepage-box:hover{background:var(--clr-bg);color:var(--clr-white-d)}.intel-static-notice{margin:1rem 0;padding:.55rem .8rem;border:1px solid #4d5760;border-radius:8px;background:#2a3135;color:#ebe7e2;font-size:.8rem;line-height:1.35}.intel-static-notice a{font-weight:700;text-decoration:underline}.intel-static-notice a:hover{opacity:.85}.dossier-header{padding:1rem;margin-bottom:1.5rem}.dossier-header-content{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.dossier-header-copy{min-width:0}.dossier-kicker{color:var(--clr-white-extra-dark);font-size:.75rem;letter-spacing:.12em;margin:0}.dossier-header h1{margin:.35rem 0 .5rem;font-size:var(--fs-xl)}.dossier-header p{margin:0}.dossier-header-actions{flex-shrink:0}.dossier-subtitle{display:flex;align-items:center;gap:.35rem;flex-wrap:wrap}.dossier-subtitle a{font-weight:700;text-decoration:none}.dossier-subtitle a:hover{opacity:.85}.dossier-breadcrumb-home{display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:6px;border:1px solid var(--clr-grey);background:var(--clr-grey-d);color:var(--clr-white-d)}.dossier-breadcrumb-home svg{width:.85rem;height:.85rem;fill:currentColor}.intel-header-links{display:flex;align-items:center;justify-content:flex-end;gap:.5rem;flex-wrap:wrap}.intel-header-link{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;width:36px;height:36px;border-radius:8px;border:1px solid transparent;text-decoration:none;color:var(--clr-white-d);background:var(--clr-black)}.intel-header-link svg{width:18px;height:18px;fill:currentColor}.intel-header-link.social-link#discord{background:var(--clr-social-discord);color:var(--clr-white-d)}.intel-header-link.social-link#github{background:var(--clr-social-github);color:var(--clr-white)}.intel-header-link.social-link#coffee{background:var(--clr-social-coffee);color:var(--clr-white)}.intel-header-link:hover{filter:brightness(1.08)}.dossier-game-groups-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1rem}.dossier-game-group{display:flex;flex-direction:column}.dossier-game-group .map-group-header{margin-top:0}.intel-dossier-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:1rem;align-items:stretch}.dossier-grid-item{display:flex;height:100%;align-self:stretch}.dossier-card{background:transparent;box-shadow:none;display:flex;flex-direction:column;gap:.5rem;height:100%;width:100%;align-items:stretch;flex:1}.dossier-grid-item-link{display:flex;flex:1;text-decoration:none;color:inherit;width:100%}.dossier-grid-item-link-disabled{opacity:.75;cursor:default;pointer-events:none}.dossier-card .homepage-box{height:100%;min-height:110px;width:100%;display:flex;flex-direction:column;justify-content:center}.dossier-card .intel-dossier-actions{margin:0;justify-content:center;margin-top:auto}.dossier-placeholder-card .homepage-box{justify-content:center;text-align:center}.map-group-title{display:flex;flex-direction:column;gap:.45rem;min-width:0}.map-group-actions{display:flex;flex-wrap:wrap;gap:.5rem}.map-group-action{display:inline-flex;align-items:center;gap:.35rem;font-size:var(--fs-sm);text-decoration:none;padding:.2rem .55rem;border:1px solid var(--clr-grey);border-radius:6px;background:var(--clr-grey-d);color:var(--clr-white-d)}.map-group-action svg{width:.8rem;height:.8rem;fill:currentColor}.map-group-header{margin-top:1.5rem}.map-group-grid{margin-top:.75rem}.intel-dossier-actions{display:flex;flex-wrap:wrap;gap:.5rem;margin:.75rem 0 1.25rem}.intel-dossier-actions a,.intel-dossier-actions button,.intel-dossier-actions span{border:1px solid var(--clr-grey-d);border-radius:6px;padding:.35rem .7rem;color:inherit;background:var(--clr-bg);text-decoration:none;font-size:.9rem;font-family:inherit}.intel-dossier-actions a:hover,.intel-dossier-actions button:hover{background:var(--clr-bg-lighter)}.intel-dossier-actions .intel-action-with-icon{display:inline-flex;align-items:center;gap:.35rem}.intel-dossier-actions .intel-action-with-icon svg{width:.85rem;height:.85rem;fill:currentColor}.intel-type-header{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;margin-top:1.5rem}.intel-group-count{margin-left:auto;font-size:var(--fs-base);opacity:.85}.operation-map-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}.operation-item-static{background:var(--clr-bg-inverted);border:1px solid var(--clr-grey);border-radius:10px;padding:.75rem}.operation-item-static-header{display:flex;gap:.75rem;align-items:flex-start}.operation-item-static-header img{width:38px;height:38px;object-fit:contain}.operation-item-static-links{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.4rem}.operation-item-static-links a{font-size:var(--fs-sm,.85rem);padding:.2rem .45rem;border:1px solid var(--clr-grey-d);border-radius:6px;text-decoration:none;background:var(--clr-bg)}.operations-spoiler{border:1px dashed var(--clr-red);background:var(--clr-black-50);border-radius:8px;padding:.45rem .55rem;margin-top:.5rem}.operations-spoiler summary{cursor:pointer;font-weight:700}.operation-disabled-link{opacity:.8}@media(min-width:1200px){.dossier-game-groups-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){html{font-size:16px}.dossier-header-content{flex-direction:column}.dossier-header-actions{width:100%}.intel-header-links{justify-content:flex-start}}`;

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${canonicalUrl}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="${type}" />
<meta property="og:url" content="${canonicalUrl}" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="${FONT_STYLESHEET}" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="${FONT_STYLESHEET}" /></noscript>
${cssLinks}
<style>${baseStyles}</style>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body class="dark">
<main class="intel-dossier-page link-reset">${STATIC_SITE_NOTICE_HTML}${body}</main>
</body>
</html>`;
};

const renderDossierHeader = ({
	title,
	subtitleHtml,
}: {
	title: string;
	subtitleHtml: string;
}) =>
	`<header class="dossier-header rounded-box filled"><div class="dossier-header-content"><div class="dossier-header-copy"><p class="dossier-kicker">DECLASSIFIED OPERATIONS DOSSIER</p><h1>${escapeHtml(
		title
	)}</h1><p class="dossier-subtitle">${subtitleHtml}</p></div><div class="dossier-header-actions">${QUICK_LINKS_HTML}</div></div></header>`;

const renderOperationItem = (item: OperationRouteItem) => {
	const links = resolveRelatedLinksForItem(item);
	const renderLinks = links
		.map(link => {
			const isExternal = /^https?:\/\//i.test(link.href);
			const attrs = isExternal ? ' target="_blank" rel="noreferrer"' : '';
			return `<a href="${link.href}"${attrs}>${escapeHtml(link.label)}</a>`;
		})
		.join('');
	const imageBlock =
		item.img && item.img !== 'placeholder'
			? `<a href="https://i.imgur.com/${item.img}.jpg" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/${item.img}l.jpg" alt="${escapeHtml(item.title)}" loading="lazy" style="width:100%;margin-top:.5rem;border-radius:8px;" /></a>`
			: '';
	const description = item.spoilerTags.length
		? `<details class="operations-spoiler"><summary>Classified content (click to reveal)</summary><p>${escapeHtml(
				item.desc
			)}</p></details>`
		: `<p>${escapeHtml(item.desc)}</p>`;
	return `<article class="operation-item-static rounded-box" id="${item.anchorId}">${
		item.stepAnchorId ? `<span id="${item.stepAnchorId}"></span>` : ''
	}<div class="operation-item-static-header"><img src="/${getMiscIconUri(item.icon)}" alt="${escapeHtml(
		item.icon
	)} icon" loading="lazy" /><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(
		item.mapTitle
	)}${
		typeof item.stepNumber === 'number'
			? ` · Step ${item.stepNumber}`
			: ''
	}${item.dossierCategory ? ` · ${escapeHtml(item.dossierCategory)}` : ''}</p></div></div>${description}${imageBlock}<div class="intel-dossier-actions">${
		item.hasLocation
			? `<a href="${item.openOnMapPath}" target="_blank" rel="noreferrer">Open on map</a>`
			: `<span class="operation-disabled-link">No fixed location</span>`
	}</div>${renderLinks ? `<div class="operation-item-static-links">${renderLinks}</div>` : ''}</article>`;
};

const rootsForKind = (kind: OperationSourceKind) =>
	kind === 'sideEgg'
		? { routeRoot: '/eggs', dirRoot: 'eggs', label: 'Side Eggs' }
		: { routeRoot: '/quests', dirRoot: 'quests', label: 'Main Quest' };

const buildMapSections = (items: OperationRouteItem[], kind: OperationSourceKind) => {
	const byCategory = new Map<string, OperationRouteItem[]>();
	items.forEach(item => {
		const key = item.groupingTitle || 'General';
		const current = byCategory.get(key) ?? [];
		current.push(item);
		byCategory.set(key, current);
	});

	return [...byCategory.entries()]
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map(([category, categoryItems]) => {
			const sortedItems =
				kind === 'mainQuest'
					? categoryItems.sort(
							(a, b) =>
								(a.stepNumber ?? Number.MAX_SAFE_INTEGER) -
									(b.stepNumber ?? Number.MAX_SAFE_INTEGER) ||
								a.title.localeCompare(b.title)
					  )
					: categoryItems.sort((a, b) => a.title.localeCompare(b.title));
			const content = sortedItems.map(renderOperationItem).join('');
			return `<section class="intel-group"><div class="intel-type-header rounded-box filled map-group-header"><h2 class="title text-md">${escapeHtml(
				category
			)}</h2><span class="intel-group-count">${sortedItems.length} Steps</span></div><div class="operation-map-grid map-group-grid">${content}</div></section>`;
		})
		.join('');
};

const renderOperationsHubCard = (label: string, count: number, href?: string) => {
	const subtitle = `${label} · ${count}`;
	if (!href) {
		return `<div class="dossier-grid-item"><div class="dossier-card"><span class="dossier-grid-item-link dossier-grid-item-link-disabled" aria-disabled="true"><div class="homepage-box" style="padding:16px;"><p>${escapeHtml(
			subtitle
		)}</p></div></span></div></div>`;
	}
	return `<div class="dossier-grid-item"><div class="dossier-card"><a class="dossier-grid-item-link" href="${href}"><div class="homepage-box" style="padding:16px;"><p>${escapeHtml(
		subtitle
	)}</p></div></a></div></div>`;
};

const writeSharedOperationsGamePages = (urlManifest: Set<string>) => {
	const games = getOperationsGames();

	games.forEach(game => {
		const sideEggGroups = getOperationsMapGroups('sideEgg', game.slug);
		const questGroupsBySlug = new Map(
			getOperationsMapGroups('mainQuest', game.slug).map(group => [
				group.mapSlug,
				group,
			])
		);

		const groupsMarkup = sideEggGroups
			.map(group => {
				const sideEggCount = group.count;
				const mainQuestCount = questGroupsBySlug.get(group.mapSlug)?.count ?? 0;
				const wikiUrl = getWikiMapUrlForMap(group.groupName);
				const sideEggHref =
					sideEggCount > 0 ? `/eggs/${game.slug}/${group.mapSlug}/` : undefined;
				const mainQuestHref =
					mainQuestCount > 0
						? `/quests/${game.slug}/${group.mapSlug}/`
						: undefined;

				return `<section class="intel-group dossier-game-group"><div class="intel-type-header rounded-box filled map-group-header"><div class="map-group-title"><h2 class="title text-md">${escapeHtml(
					group.groupName
				)}</h2><div class="map-group-actions">${
					wikiUrl
						? `<a class="map-group-action" href="${escapeHtml(wikiUrl)}" target="_blank" rel="noreferrer">${EXTERNAL_LINK_ICON_HTML}Wiki</a>`
						: ''
				}${
					group.primaryMapId
						? `<a class="map-group-action" href="/${group.primaryMapId}" target="_blank" rel="noreferrer">Open map</a>`
						: ''
				}</div></div></div><div class="intel-dossier-grid map-group-grid">${renderOperationsHubCard(
					'Eggs',
					sideEggCount,
					sideEggHref
				)}${renderOperationsHubCard(
					'Quests',
					mainQuestCount,
					mainQuestHref
				)}</div></section>`;
			})
			.join('');

		const gameBody = `${renderDossierHeader({
			title: `${game.title} Operations`,
			subtitleHtml: `${HOME_CRUMB_HTML} / ${escapeHtml(game.title)}`,
		})}<div class="dossier-game-groups-grid">${groupsMarkup}</div>`;

		writeFile(
			path.join(outputRoots.operations, game.slug, 'index.html'),
			pageShell({
				title: `${game.title} Operations Dossiers`,
				description: `Browse Side Eggs and Main Quest map dossiers in ${game.title}.`,
				canonicalPath: `/operations/${game.slug}/`,
				body: gameBody,
				type: 'website',
				schema: {
					'@context': 'https://schema.org',
					'@type': 'CollectionPage',
					name: `${game.title} Operations Dossiers`,
				},
			})
		);
		urlManifest.add(`/operations/${game.slug}/`);
	});
};

const writeSectionPages = (
	kind: OperationSourceKind,
	urlManifest: Set<string>
) => {
	const { routeRoot, dirRoot, label: sectionLabel } = rootsForKind(kind);
	const games = getOperationsGames(kind);

	games.forEach(game => {
		const groups = getOperationsMapGroups(kind, game.slug);
		groups.forEach(group => {
			const mapItems = getOperationsMapItems(kind, game.slug, group.mapSlug);
			if (mapItems.length === 0) return;
			const oppositeRoot = kind === 'sideEgg' ? '/quests' : '/eggs';
			const oppositeLabel = kind === 'sideEgg' ? 'Main Quest' : 'Side Eggs';
			const mapSections = buildMapSections(mapItems, kind);
			const mapAreas = group.maps;
			const openMapAction =
				mapAreas.length === 1 && group.primaryMapId
					? `<a href="/${group.primaryMapId}" target="_blank" rel="noreferrer">Open map</a>`
					: '';
			const mapAreaInfo =
				mapAreas.length > 1
					? `<p class="rounded-box filled text-sm">Map areas in this dossier: ${mapAreas
							.map(
								(area, index) =>
									`${index > 0 ? ' · ' : ''}<a href="/${area.mapId}" target="_blank" rel="noreferrer">${escapeHtml(area.mapTitle)}</a>`
							)
							.join('')}</p>`
					: '';
			const mapBody = `${renderDossierHeader({
				title: `${sectionLabel} List`,
				subtitleHtml: `${HOME_CRUMB_HTML} / <a href="/operations/${game.slug}/">${escapeHtml(
					game.title
				)}</a> / ${sectionLabel} / ${escapeHtml(group.groupName)}`,
			})}<div class="intel-dossier-actions">${openMapAction}<a href="${oppositeRoot}/${game.slug}/${group.mapSlug}/">Open ${oppositeLabel} Dossier</a></div>${mapAreaInfo}${mapSections}`;

			writeFile(
				path.join(buildRoot, dirRoot, game.slug, group.mapSlug, 'index.html'),
				pageShell({
					title: `${group.groupName} ${sectionLabel} Dossier`,
					description: `${sectionLabel} dossier for ${group.groupName}.`,
					canonicalPath: `${routeRoot}/${game.slug}/${group.mapSlug}/`,
					body: mapBody,
					type: 'website',
					schema: {
						'@context': 'https://schema.org',
						'@type': 'CollectionPage',
						name: `${group.groupName} ${sectionLabel} Dossier`,
					},
				})
			);
			urlManifest.add(`${routeRoot}/${game.slug}/${group.mapSlug}/`);
		});
	});
};

const build = () => {
	const validation = validateOperationsModel();
	validation.warnings.forEach(warning => console.warn(`operations:warn: ${warning}`));
	if (validation.errors.length > 0) {
		console.error('Operations validation failed:');
		validation.errors.forEach(error => console.error(` - ${error}`));
		process.exit(1);
	}

	cleanOutputs();
	const urlManifest = new Set<string>();

	writeSharedOperationsGamePages(urlManifest);
	writeSectionPages('sideEgg', urlManifest);
	writeSectionPages('mainQuest', urlManifest);

	writeFile(
		path.join(outputRoots.operations, 'manifest.json'),
		JSON.stringify({ urls: [...urlManifest].sort() }, null, 2)
	);
	console.log(`Generated ${urlManifest.size} operations URLs in ${outputRoots.operations}`);
};

build();
