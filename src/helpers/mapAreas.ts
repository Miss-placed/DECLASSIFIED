import type { MapItem } from '../classes';

/**
 * Map "areas" are the layers of a map group (Reckoning / Reckoning Boss Area,
 * Paradox Junction / Paradox Junction (Past), ...). The stored titles repeat the
 * map name, which is redundant when they are listed underneath it, so the label
 * used in the area switcher and menu is the title with that prefix removed.
 */
export const getAreaLabel = (
	areaTitle: string | undefined,
	mapName: string | undefined
): string => {
	const title = (areaTitle ?? '').trim();
	const name = (mapName ?? '').trim();

	if (!name) return title;

	const withoutMapName = title.startsWith(name)
		? title.slice(name.length).trim()
		: title;

	const cleaned = withoutMapName
		.replace(/^[:\-–—]\s*/, '')
		.replace(/^\((.*)\)$/, '$1')
		.trim();

	return cleaned || 'Main';
};

export interface MapMenuRow {
	layer: MapItem;
	label: string;
}

/**
 * Rows to nest under a map in the map menu. Every extra layer is listed so no
 * map becomes unreachable — Outbreak is a group of separate maps, while
 * Paradox Junction / Totenreich etc. are areas of one map.
 */
export const getMapMenuRows = (
	mapName: string,
	mapLayers: MapItem[]
): MapMenuRow[] => {
	if (mapLayers.length < 2) return [];

	return mapLayers.map(layer => ({
		layer,
		label: getAreaLabel(layer.title, mapName),
	}));
};
