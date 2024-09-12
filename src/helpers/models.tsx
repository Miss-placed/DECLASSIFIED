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
	intelNewId = 'newIntel',
	intelNewTitle = 'New Intel',
	intelEditId = 'editIntel',
	intelEditTitle = 'Intel Fix',
	miscNewId = 'newMisc',
	miscNewTitle = 'New Misc Marker',
	miscEditId = 'editMisc',
	miscEditTitle = 'Misc Marker Fix',
};
