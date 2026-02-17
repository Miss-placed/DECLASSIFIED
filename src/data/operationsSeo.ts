import { MiscMarker } from '../classes';
import { StaticEggStore } from './easterEggs';
import { IntelStore } from './intel';
import { DefaultPOIData } from './IntelTypes';
import {
	MapGroupDefinitions,
	type MapGroupGameKey,
	getMapTitleFromGroupDefinitions,
} from './mapGroups';
import { StaticQuestStore } from './mainQuest';
import { AllMiscStores } from './misc';

export type OperationSourceKind = 'sideEgg' | 'mainQuest';

export interface ParsedLink {
	label: string;
	href: string;
	type: 'operation' | 'intel' | 'help';
}

export interface OperationRouteItem {
	id: string;
	title: string;
	desc: string;
	icon: string;
	img?: string;
	mapId: string;
	mapTitle: string;
	mapSlug: string;
	mapGroupTitle: string;
	gameSlug: string;
	gameTitle: string;
	sourceKind: OperationSourceKind;
	sourceRoot: '/eggs' | '/quests';
	mapPath: string;
	itemPath: string;
	openOnMapPath: string;
	hasLocation: boolean;
	stepNumber?: number;
	dossierCategory?: string;
	groupingTitle: string;
	dossierCategoryInferred: boolean;
	linkedItemIds: string[];
	linkedIntelIds: string[];
	externalLinks: string[];
	helpLinks: string[];
	spoilerTags: string[];
	anchorLabel?: string;
	crossLinks: string[];
	anchorId: string;
	stepAnchorId?: string;
	urlValidationErrors: string[];
}

export interface OperationValidationResult {
	errors: string[];
	warnings: string[];
}

interface MapMeta {
	mapId: string;
	mapTitle: string;
	mapSlug: string;
	mapGroupTitle: string;
	mapLayerIndex: number;
	gameSlug: string;
	gameTitle: string;
}

interface MapItemReference {
	id: string;
	title: string;
	mapId: string;
}

const slugify = (value: string) =>
	value
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, '-');

const slugifyAnchor = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

const parseCsv = (value?: string) =>
	(value ?? '')
		.split(',')
		.map(v => v.trim())
		.filter(Boolean);

const normalizeExternalUrl = (raw: string) => {
	const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
	try {
		const parsed = new URL(withProtocol);
		if (!/^https?:$/i.test(parsed.protocol)) {
			return { url: '', error: `Unsupported protocol for URL: ${raw}` };
		}
		return { url: parsed.toString(), error: '' };
	} catch {
		return { url: '', error: `Malformed URL: ${raw}` };
	}
};

const getGameSlugAndTitle = (game: MapGroupGameKey) =>
	game === 'bo6'
		? { gameSlug: 'black-ops-6', gameTitle: 'Black Ops 6' }
		: { gameSlug: 'black-ops-cold-war', gameTitle: 'Black Ops Cold War' };

const getCanonicalMapGroupsForGame = (gameSlug: string) => {
	const mapGame = gameSlug === 'black-ops-6' ? 'bo6' : 'coldWar';
	return MapGroupDefinitions.filter(group => group.game === mapGame);
};

const getMapMetaById = () => {
	const mapMeta = new Map<string, MapMeta>();
	MapGroupDefinitions.forEach(group => {
		const { gameSlug, gameTitle } = getGameSlugAndTitle(group.game);
		const groupSlug = slugify(group.mapName);
		group.mapLayers.forEach((layer, index) => {
			if (!layer.id) return;
			mapMeta.set(layer.id, {
				mapId: layer.id,
				mapTitle: layer.title,
				mapSlug: groupSlug,
				mapGroupTitle: group.mapName,
				mapLayerIndex: index,
				gameSlug,
				gameTitle,
			});
		});
	});
	return mapMeta;
};

const getMapItemReferencesById = () => {
	const output = new Map<string, MapItemReference>();
	const stores = AllMiscStores();
	Object.entries(stores).forEach(([mapId, markers]) => {
		(markers ?? []).forEach(marker => {
			const markerId = marker.id ?? '';
			if (!markerId || output.has(markerId)) return;
			output.set(markerId, {
				id: markerId,
				title: marker.title || markerId,
				mapId,
			});
		});
	});
	return output;
};

const inferSideEggCategory = (marker: MiscMarker, linkedItemIds: string[]) => {
	const forced = (marker.dossierCategory ?? '').trim();
	if (forced) return forced;

	const haystack = `${marker.title} ${marker.desc}`.toLowerCase();
	const icon = (marker.icon ?? '').toLowerCase();

	if (icon.includes('cassette') || haystack.includes('music') || haystack.includes('song')) {
		return 'Music';
	}
	if (linkedItemIds.length > 0) {
		return 'Multi-step';
	}
	if (
		haystack.includes('perk') ||
		icon.includes('perk') ||
		icon.includes('bonus') ||
		icon.includes('max_') ||
		icon.includes('double_points')
	) {
		return 'Powerups';
	}
	if (icon.includes('objective') || icon.includes('upgrade')) {
		return 'Quests';
	}
	if (icon.includes('interactable') || icon.includes('secret') || icon.includes('door')) {
		return 'Interactables';
	}
	return 'General';
};

const resolveGroupingTitle = (marker: MiscMarker) => {
	const markerGrouping = (marker.typeDesc ?? '').trim();
	if (markerGrouping) return markerGrouping;
	const explicitCategory = (marker.dossierCategory ?? '').trim();
	if (explicitCategory) return explicitCategory;
	return 'General';
};

const buildRouteItem = (
	marker: MiscMarker,
	mapMeta: MapMeta,
	sourceKind: OperationSourceKind
): OperationRouteItem => {
	const sourceRoot = sourceKind === 'sideEgg' ? '/eggs' : '/quests';
	const linkedItemIds = parseCsv(marker.linkedItems);
	const linkedIntelIds = parseCsv(marker.linkedIntelIds);
	const externalLinkRaw = parseCsv(marker.externalLinks);
	const helpLinkRaw = parseCsv(marker.helpLinks);
	const spoilerTags = parseCsv(marker.spoilerTags);
	const crossLinks = parseCsv(marker.crossLinks);
	const urlValidationErrors: string[] = [];
	const externalLinks: string[] = [];
	const helpLinks: string[] = [];
	const urls = [...externalLinkRaw, ...helpLinkRaw];
	const uniqueUrls = new Set<string>();
	urls.forEach(raw => {
		const { url, error } = normalizeExternalUrl(raw);
		if (error) {
			urlValidationErrors.push(`${marker.id}: ${error}`);
			return;
		}
		if (uniqueUrls.has(url)) return;
		uniqueUrls.add(url);
		if (externalLinkRaw.includes(raw)) externalLinks.push(url);
		if (helpLinkRaw.includes(raw)) helpLinks.push(url);
	});

	const markerId = marker.id ?? '';
	const hasExplicitDossierCategory = !!(marker.dossierCategory ?? '').trim();
	const anchorSafeId = slugifyAnchor(markerId);
	const anchorId = `item-${anchorSafeId}`;
	const stepAnchorId =
		typeof marker.stepNumber === 'number'
			? `step-${marker.stepNumber}-${anchorSafeId}`
			: undefined;
	const mapPath = `${sourceRoot}/${mapMeta.gameSlug}/${mapMeta.mapSlug}`;
	const itemPath = `${mapPath}#${stepAnchorId ?? anchorId}`;
	const hasLocation =
		marker.loc !== null && marker.loc.toString() !== DefaultPOIData.nullLoc.toString();

	return {
		id: markerId,
		title: marker.title,
		desc: marker.desc ?? '',
		icon: marker.icon ?? '',
		img: marker.img ?? '',
		mapId: mapMeta.mapId,
		mapTitle: mapMeta.mapTitle,
		mapSlug: mapMeta.mapSlug,
		mapGroupTitle: mapMeta.mapGroupTitle,
		gameSlug: mapMeta.gameSlug,
		gameTitle: mapMeta.gameTitle,
		sourceKind,
		sourceRoot,
		mapPath,
		itemPath,
		openOnMapPath: `/${markerId}`,
		hasLocation,
		stepNumber: marker.stepNumber ?? undefined,
		dossierCategory:
			sourceKind === 'sideEgg'
				? inferSideEggCategory(marker, linkedItemIds)
				: (marker.dossierCategory ?? '').trim() || undefined,
		groupingTitle: resolveGroupingTitle(marker),
		dossierCategoryInferred:
			sourceKind === 'sideEgg' && !hasExplicitDossierCategory,
		linkedItemIds,
		linkedIntelIds,
		externalLinks,
		helpLinks,
		spoilerTags,
		anchorLabel: (marker.anchorLabel ?? '').trim() || undefined,
		crossLinks,
		anchorId,
		stepAnchorId,
		urlValidationErrors,
	};
};

const getRawOperations = () => {
	const mapMetaById = getMapMetaById();
	const fallbackMapMeta = (mapId: string): MapMeta => ({
		mapId,
		mapTitle: getMapTitleFromGroupDefinitions(mapId),
		mapSlug: slugify(getMapTitleFromGroupDefinitions(mapId)),
		mapGroupTitle: getMapTitleFromGroupDefinitions(mapId),
		mapLayerIndex: 0,
		gameSlug: 'black-ops-cold-war',
		gameTitle: 'Black Ops Cold War',
	});

	const sideEggs: OperationRouteItem[] = Object.entries(StaticEggStore).flatMap(
		([mapId, markers]) =>
			(markers ?? []).map(marker =>
				buildRouteItem(
					marker,
					mapMetaById.get(mapId) ?? fallbackMapMeta(mapId),
					'sideEgg'
				)
			)
	);

	const quests: OperationRouteItem[] = Object.entries(StaticQuestStore).flatMap(
		([mapId, markers]) =>
			(markers ?? []).map(marker =>
				buildRouteItem(
					marker,
					mapMetaById.get(mapId) ?? fallbackMapMeta(mapId),
					'mainQuest'
				)
			)
	);

	return [...sideEggs, ...quests];
};

const mapItemReferencesById = getMapItemReferencesById();
const intelById = new Map(IntelStore.map(intel => [intel.id, intel]));
const mapMetaByIdForSort = getMapMetaById();

export const getOperationsRouteModel = () =>
	getRawOperations().sort((a, b) => {
		if (a.gameSlug !== b.gameSlug) return a.gameSlug.localeCompare(b.gameSlug);
		if (a.mapSlug !== b.mapSlug) return a.mapSlug.localeCompare(b.mapSlug);
		const aMeta = mapMetaByIdForSort.get(a.mapId);
		const bMeta = mapMetaByIdForSort.get(b.mapId);
		if ((aMeta?.mapLayerIndex ?? 0) !== (bMeta?.mapLayerIndex ?? 0)) {
			return (aMeta?.mapLayerIndex ?? 0) - (bMeta?.mapLayerIndex ?? 0);
		}
		if (a.sourceKind !== b.sourceKind) return a.sourceKind.localeCompare(b.sourceKind);
		if ((a.stepNumber ?? Infinity) !== (b.stepNumber ?? Infinity)) {
			return (a.stepNumber ?? Infinity) - (b.stepNumber ?? Infinity);
		}
		return a.title.localeCompare(b.title);
	});

export const getOperationsGames = (sourceKind?: OperationSourceKind) => {
	const items = getOperationsRouteModel().filter(item =>
		sourceKind ? item.sourceKind === sourceKind : true
	);
	const byGame = new Map<string, { slug: string; title: string; count: number }>();
	items.forEach(item => {
		const current = byGame.get(item.gameSlug) ?? {
			slug: item.gameSlug,
			title: item.gameTitle,
			count: 0,
		};
		current.count += 1;
		byGame.set(item.gameSlug, current);
	});
	return Array.from(byGame.values()).sort((a, b) =>
		a.title.localeCompare(b.title)
	);
};

export const getOperationsMapGroups = (
	sourceKind: OperationSourceKind,
	gameSlug: string
) => {
	const canonicalGroups = getCanonicalMapGroupsForGame(gameSlug);
	const groupOrder = new Map(
		canonicalGroups.map((group, index) => [group.mapName, index])
	);
	const mapOrderByGroup = new Map<string, Map<string, number>>(
		canonicalGroups.map(group => [
			group.mapName,
			new Map(
				group.mapLayers
					.filter(layer => !!layer.id)
					.map((layer, index) => [layer.id, index])
			),
		])
	);

	const items = getOperationsRouteModel().filter(
		item => item.sourceKind === sourceKind && item.gameSlug === gameSlug
	);
	const groups = new Map<
		string,
		{
			groupName: string;
			mapSlug: string;
			maps: { mapSlug: string; mapTitle: string; mapId: string; count: number }[];
			count: number;
		}
	>();
	items.forEach(item => {
		const key = item.mapGroupTitle;
		const current = groups.get(key) ?? {
			groupName: item.mapGroupTitle,
			mapSlug: item.mapSlug,
			maps: [],
			count: 0,
		};
		current.count += 1;
		const existingMap = current.maps.find(map => map.mapId === item.mapId);
		if (existingMap) {
			existingMap.count += 1;
		} else {
			current.maps.push({
				mapSlug: slugify(item.mapTitle),
				mapTitle: item.mapTitle,
				mapId: item.mapId,
				count: 1,
			});
		}
		groups.set(key, current);
	});
	return Array.from(groups.values())
		.map(group => {
			const sortedMaps = group.maps.sort((a, b) => {
				const orderMap = mapOrderByGroup.get(group.groupName);
				const aIndex = orderMap?.get(a.mapId);
				const bIndex = orderMap?.get(b.mapId);
				if (typeof aIndex === 'number' && typeof bIndex === 'number') {
					return aIndex - bIndex;
				}
				if (typeof aIndex === 'number') return -1;
				if (typeof bIndex === 'number') return 1;
				return a.mapTitle.localeCompare(b.mapTitle);
			});
			return {
				...group,
				maps: sortedMaps,
				primaryMapId: sortedMaps[0]?.mapId,
			};
		})
		.sort((a, b) => {
			const aIndex = groupOrder.get(a.groupName);
			const bIndex = groupOrder.get(b.groupName);
			if (typeof aIndex === 'number' && typeof bIndex === 'number') {
				return aIndex - bIndex;
			}
			if (typeof aIndex === 'number') return -1;
			if (typeof bIndex === 'number') return 1;
			return a.groupName.localeCompare(b.groupName);
		});
};

export const getOperationsMapItems = (
	sourceKind: OperationSourceKind,
	gameSlug: string,
	mapSlug: string
) =>
	getOperationsRouteModel().filter(
		item =>
			item.sourceKind === sourceKind &&
			item.gameSlug === gameSlug &&
			item.mapSlug === mapSlug
	);

export const getOperationItemById = (itemId: string) =>
	getOperationsRouteModel().find(item => item.id === itemId);

const gameForIntelId = (intelId: string) =>
	intelId.startsWith('BO6')
		? { slug: 'black-ops-6', title: 'Black Ops 6' }
		: { slug: 'black-ops-cold-war', title: 'Black Ops Cold War' };

const intelSlug = (title: string, id: string) =>
	`${slugify(title)}-${slugify(id)}`;

const buildIntelRouteLink = (intel: (typeof IntelStore)[number]) => {
	const intelGame = gameForIntelId(intel.id);
	const intelMapTitle = getMapTitleFromGroupDefinitions(intel.map);
	const intelMapSlug = slugify(intelMapTitle);
	return {
		id: intel.id,
		title: intel.title,
		routePath: `/intel/${intelGame.slug}/${intelMapSlug}/${intelSlug(intel.title, intel.id)}`,
		mapPath: `/${intel.id}`,
	};
};

export const getLinkedIntelForItem = (item: OperationRouteItem) =>
	item.linkedIntelIds
		.map(intelId => intelById.get(intelId))
		.filter((intel): intel is (typeof IntelStore)[number] => !!intel)
		.map(buildIntelRouteLink);

export const resolveRelatedLinksForItem = (item: OperationRouteItem): ParsedLink[] => {
	const allItems = getOperationsRouteModel();
	const itemById = new Map(allItems.map(operation => [operation.id, operation]));
	const output: ParsedLink[] = [];
	const seen = new Set<string>();

	const pushIfNew = (link: ParsedLink) => {
		const key = `${link.type}:${link.href}`;
		if (seen.has(key)) return;
		seen.add(key);
		output.push(link);
	};

	item.linkedItemIds.forEach(linkedId => {
		const linked = itemById.get(linkedId);
		if (linked) {
			pushIfNew({
				label: linked.anchorLabel ?? linked.title,
				href: linked.itemPath,
				type: 'operation',
			});
			return;
		}

		const linkedIntel = intelById.get(linkedId);
		if (linkedIntel) {
			const intelLink = buildIntelRouteLink(linkedIntel);
			pushIfNew({
				label: intelLink.title,
				href: intelLink.routePath,
				type: 'intel',
			});
			return;
		}

		const linkedMapItem = mapItemReferencesById.get(linkedId);
		if (linkedMapItem) {
			pushIfNew({
				label: linkedMapItem.title,
				href: `/${linkedMapItem.id}`,
				type: 'operation',
			});
		}
	});

	item.crossLinks.forEach(linkedValue => {
		if (linkedValue.startsWith('/')) {
			pushIfNew({
				label: linkedValue.split('#')[1] ?? 'Cross Link',
				href: linkedValue,
				type: 'operation',
			});
			return;
		}
		const linked = itemById.get(linkedValue);
		if (!linked) return;
		pushIfNew({
			label: linked.anchorLabel ?? linked.title,
			href: linked.itemPath,
			type: 'operation',
		});
	});

	getLinkedIntelForItem(item).forEach(intel => {
		pushIfNew({
			label: intel.title,
			href: intel.routePath,
			type: 'intel',
		});
	});

	[...item.helpLinks, ...item.externalLinks].forEach(link => {
		pushIfNew({
			label: new URL(link).hostname.replace(/^www\./, ''),
			href: link,
			type: 'help',
		});
	});

	return output;
};

export const isOperationsExplicitCrossLink = (value: string) =>
	/^\/(eggs|quests)\/[a-z0-9-]+\/[a-z0-9-]+#[a-z0-9-]+$/i.test(value);

export const validateOperationsModel = (
	items: OperationRouteItem[] = getOperationsRouteModel()
): OperationValidationResult => {
	const errors: string[] = [];
	const warnings: string[] = [];
	const ids = new Set(items.map(item => item.id));
	const intelIds = new Set(IntelStore.map(intel => intel.id));
	const mapItemIds = new Set(mapItemReferencesById.keys());

	items.forEach(item => {
		item.urlValidationErrors.forEach(error => errors.push(error));

		item.linkedItemIds.forEach(linkedId => {
			if (ids.has(linkedId) || mapItemIds.has(linkedId)) {
				return;
			}
			if (intelIds.has(linkedId)) {
				warnings.push(
					`${item.id}: linkedItems references intel "${linkedId}". Prefer linkedIntelIds for dossier links.`
				);
				return;
			}
			if (!ids.has(linkedId)) {
				errors.push(`${item.id}: linkedItems contains unknown id "${linkedId}"`);
			}
		});

		item.linkedIntelIds.forEach(linkedIntelId => {
			if (!intelIds.has(linkedIntelId)) {
				errors.push(`${item.id}: linkedIntelIds contains unknown intel "${linkedIntelId}"`);
			}
		});

		item.crossLinks.forEach(linkedValue => {
			if (linkedValue.startsWith('/')) {
				if (!isOperationsExplicitCrossLink(linkedValue)) {
					errors.push(`${item.id}: invalid crossLinks route+anchor "${linkedValue}"`);
				}
				return;
			}
			if (!ids.has(linkedValue)) {
				errors.push(`${item.id}: crossLinks contains unknown id "${linkedValue}"`);
			}
		});
	});

	const sideEggsWithoutCategory = items.filter(
		item => item.sourceKind === 'sideEgg' && item.dossierCategoryInferred
	).length;
	if (sideEggsWithoutCategory > 0) {
		warnings.push(
			`${sideEggsWithoutCategory} side egg markers have no explicit dossierCategory and rely on icon/title inference.`
		);
	}

	const mapQuestGroups = new Map<string, OperationRouteItem[]>();
	items
		.filter(item => item.sourceKind === 'mainQuest')
		.forEach(item => {
			const key = `${item.gameSlug}:${item.mapSlug}`;
			const current = mapQuestGroups.get(key) ?? [];
			current.push(item);
			mapQuestGroups.set(key, current);
		});
	mapQuestGroups.forEach((groupItems, key) => {
		const hasStep = groupItems.some(item => typeof item.stepNumber === 'number');
		const hasNonStep = groupItems.some(item => typeof item.stepNumber !== 'number');
		if (hasStep && hasNonStep) {
			warnings.push(
				`${key} has a mixed quest sequence (ordered + supplemental markers).`
			);
		}
	});

	return {
		errors: Array.from(new Set(errors)),
		warnings: Array.from(new Set(warnings)),
	};
};

const isSubsequenceMatch = (text: string, pattern: string) => {
	let p = 0;
	for (let i = 0; i < text.length && p < pattern.length; i += 1) {
		if (text[i] === pattern[p]) p += 1;
	}
	return p === pattern.length;
};

export const matchesOperationQuery = (item: OperationRouteItem, rawQuery: string) => {
	const query = rawQuery.trim().toLowerCase();
	if (!query) return true;
	const haystack = [
		item.title,
		item.desc,
		item.dossierCategory ?? '',
		item.anchorLabel ?? '',
		item.icon,
		item.stepNumber ? `step ${item.stepNumber}` : '',
		item.id,
	]
		.join(' ')
		.toLowerCase();

	return haystack.includes(query) || isSubsequenceMatch(haystack, query);
};
