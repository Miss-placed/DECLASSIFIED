const wikiMapNameOverrides: Record<string, string> = {
	'Die Maschine': 'Die_Maschine',
	'Firebase Z': 'Firebase_Z',
	'Liberty Falls': 'Liberty_Falls',
	'Mauer Der Toten': 'Mauer_der_Toten',
	'Shattered Veil': 'Shattered_Veil',
	'The Tomb': 'The_Tomb',
	'Citadelle Des Morts': 'Citadelle_des_Morts',
	'Outbreak': 'Outbreak_(Cold_War)',
	'Terminus': 'Terminus_(Zombies)',
	'Reckoning': 'Reckoning_(Zombies)',
};

export const wikiMapGroupNames = [
	'Die Maschine',
	'Firebase Z',
	'Mauer Der Toten',
	'Forsaken',
	'Outbreak',
	'Liberty Falls',
	'Terminus',
	'Citadelle Des Morts',
	'The Tomb',
	'Shattered Veil',
	'Reckoning',
];

export const getWikiMapSlug = (mapName: string) => {
	const base = wikiMapNameOverrides[mapName] ?? mapName;
	return encodeURIComponent(
		base
			.replace(/&/g, 'and')
			.replace(/[’']/g, '')
			.replace(/\s+/g, '_')
	);
};

export const getWikiIntelUrlForMap = (mapName?: string) =>
	mapName
		? `https://callofduty.fandom.com/wiki/${getWikiMapSlug(mapName)}/Intel`
		: undefined;

export const getMapGroupNameByMapId = (mapId?: string) => {
	if (!mapId) return undefined;
	// Lazy-load to avoid pulling map rendering deps into tooling/test contexts.
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const mapGroupings = require('../components/MapControls/types')
		.MapGroupings as Record<string, { mapName: string; mapLayers: { id?: string }[] }>;
	const groups = Object.values(mapGroupings);
	const match = groups.find(group =>
		group.mapLayers.some(layer => layer.id === mapId)
	);
	return match?.mapName;
};
