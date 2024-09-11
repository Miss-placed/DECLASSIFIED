/////////////////////Maps/////////////////////////

/* export function findMapById(mapId) {
    const maps = Object.values(MapDetails);
    const foundMap = maps.find(map => map.id === mapId);
    return foundMap;
} */

/////////////////////Metadata/////////////////////////
export const RepoDomain = 'https://github.com/Miss-placed/DECLASSIFIED';
export const AppDomain = 'https://declassified.netlify.app/';

export const ContribTemplates = {
	intel: {
		newId: 'newIntel',
		newTitle: 'New Intel',
		editId: 'editIntel',
		editTitle: 'Intel Fix',
	},
	misc: {
		newId: 'newMisc',
		newTitle: 'New Misc Marker',
		editId: 'editMisc',
		editTitle: 'Misc Marker Fix',
	},
};

export const ModalSet = {
	intelOverview: ['intel-filters', 'intel-list', 'intel-stats'],
	intelDescription: ['intel-list', 'intel-detail'],
	settingsMain: ['settings'],
	settingsDetail: ['settings', 'settings-detail'],
};
