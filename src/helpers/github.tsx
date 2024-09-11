import { MapItem, MiscMarker } from '../classes';
import { IconFileNames } from '../data/icons';
import { IntelStore, IntelType, MapIds } from '../data/intel';
import { AllMiscStores } from '../data/misc';
import { ContribTemplates, RepoDomain } from './models';

export function redirectToGithub(
	id = '',
	itemType: IntelType | IconFileNames,
	issueType = 'New',
	currentMap,
	location = ''
) {
	const domain = `${RepoDomain}/issues/new`;
	let assignees = 'Odinnh,sol3uk';

	const isIntel = Object.values(IntelType).includes(itemType as IntelType);
	const isMisc = Object.values(IconFileNames).includes(
		itemType as IconFileNames
	);
	let label = '';
	let issueTemplate = '';
	let entityName = '';
	let map = currentMap ?? '';
	if (isIntel) {
		if (issueType !== 'New') {
			issueTemplate = ContribTemplates.intel.editId;
			label = ContribTemplates.intel.editTitle;
			let intel = getIntelById(id);
			entityName = intel ? intel.title : '';
			map = intel ? intel.map : '';
		} else {
			//NEW Issue
			issueTemplate = ContribTemplates.intel.newId;
			label = ContribTemplates.intel.newTitle;
			map = currentMap.id ?? '';
		}
	} else if (isMisc) {
		issueTemplate =
			issueType === 'New'
				? ContribTemplates.misc.newId
				: ContribTemplates.misc.editId;
		label =
			issueType === 'New'
				? ContribTemplates.misc.newTitle
				: ContribTemplates.misc.editTitle;
		let miscItem = getMiscMarkerByIdAndMap(id, currentMap);
		entityName = miscItem ? miscItem.title : '';
		// Don't yet keep map against misc markers, need to change this, this will do for now since miscs are only on the current map
		map = currentMap.id;
	}
	let labels = `${label},${map}`;
	let intelIdPlaceholder = id ? `[${id}]` : '';

	let issueTitle = `${label}: ${entityName} [${map}]${intelIdPlaceholder}`;
	let finalURL = `${domain}?assignees=${assignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`;

	if (isIntel) {
		let intelParams = `&intelId=${id}&intelName=${entityName}&intelLocation=${location}&intelMap=${map}`;
		finalURL += intelParams;
	}
	if (isMisc) {
		let miscParams = `&markerId=${id}&markerName=${entityName}&markerLocation=${location}&markerMap=${map}`;
		finalURL += miscParams;
	}
	window.open(encodeURI(finalURL));
}

export const getIntelById = (intelId: string) => {
	if (intelId) {
		let matchedIntel = IntelStore.find(item => item.id === intelId);
		return matchedIntel;
	}
	return null;
};

const getMiscMarkerByIdAndMap = (itemId, currentMap: MapItem) => {
	if (itemId) {
		let matchedMisc = AllMiscStores()[currentMap.id!].find(
			item => item.id === itemId
		);
		return matchedMisc;
	}
	return null;
};

export const getMiscMarkerById = (
	markerId: string
): [MapIds, MiscMarker] | null => {
	if (markerId) {
		let matchedMiscMarker: MiscMarker | undefined;
		let foundMap: MapIds | undefined;
		Object.entries(AllMiscStores()).map(([key, miscMarkersForMap]) => {
			let matchedMisc = miscMarkersForMap.find(item => item.id === markerId);
			if (matchedMisc) {
				matchedMiscMarker = matchedMisc;
				foundMap = key as MapIds;
				return [foundMap, matchedMiscMarker];
			}
		});
		if (foundMap && matchedMiscMarker) return [foundMap!, matchedMiscMarker!];
	}
	return null;
};
