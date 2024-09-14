/////////////////////Maps/////////////////////////

/* export function findMapById(mapId) {
	const maps = Object.values(MapDetails);
	const foundMap = maps.find(map => map.id === mapId);
	return foundMap;
} */

/////////////////////Metadata/////////////////////////
export const RepoDomain = 'https://github.com/Miss-placed/DECLASSIFIED';
export const AppDomain = 'https://declassified.netlify.app/';

export enum ContributionTemplates {
	intelNewId = 'newIntelV2',
	intelNewTitle = 'New Intel',
	intelEditId = 'editIntel',
	intelEditTitle = 'Intel Fix',
	miscNewId = 'newMiscV2',
	miscNewTitle = 'New Misc Marker',
	miscEditId = 'editMisc',
	miscEditTitle = 'Misc Marker Fix',
};
