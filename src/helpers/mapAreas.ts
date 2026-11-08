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
