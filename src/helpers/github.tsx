import { LatLngExpression, LatLngTuple } from 'leaflet';
import { MapItem, MiscMarker } from '../classes';
import { MapId } from '../components/MapControls/MapIds';
import { IconFileNames } from '../data/icons';
import { IntelStore } from '../data/intel';
import { IntelType } from '../data/IntelTypes';
import { AllMiscStores } from '../data/misc';
import { ContributionTemplates, RepoDomain } from './models';

const githubAssignees = 'Odinnh,sol3uk';
const domain = `${RepoDomain}/issues/new`;

export const redirectBugReportToGithub = (
	id: string,
	itemType: IntelType | IconFileNames,
	currentMap: MapItem,
	location: LatLngExpression | null = null
) => {
	const isIntel = Object.values(IntelType).includes(itemType as IntelType);
	const isMisc = Object.values(IconFileNames).includes(itemType as IconFileNames);
	let issueTemplate = '';
	let label = '';
	let entityName = '';
	let map = currentMap.id || '';
	if (isIntel) {
		issueTemplate = ContributionTemplates.intelEditId;
		label = ContributionTemplates.intelEditTitle;
		let intel = getIntelById(id);
		entityName = intel?.title || '';
		map = intel?.map || '';
	} else if (isMisc) {
		issueTemplate = ContributionTemplates.miscEditId;
		label = ContributionTemplates.miscEditTitle;
		const miscResult = getMiscMarkerById(id);
		if (miscResult) {
			const [mapId, miscItem] = miscResult;
			entityName = miscItem.title || '';
			map = mapId;
		}
	}
	let labels = `${label},${map}`;
	let intelIdPlaceholder = id ? `[${id}]` : '';

	let issueTitle = `${label}: ${entityName} [${map}]${intelIdPlaceholder}`;
	let finalURL = `${domain}?assignees=${githubAssignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`;

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

export const redirectNewContributionToGithub = (
	isIntel: boolean,
	newMarkerName: string | null,
	itemType: string | null, //TODO: Maybe refactor this to enforce dropdown selection?
	currentMap: MapItem,
	location: LatLngTuple
) => {
	let issueTemplate = '';
	let label = '';
	let map = currentMap.id || '';
	if (isIntel) {
		issueTemplate = ContributionTemplates.intelNewId;
		label = ContributionTemplates.intelNewTitle;
	}
	else if (!isIntel) {
		issueTemplate = ContributionTemplates.miscNewId;
		label = ContributionTemplates.miscNewTitle;
	}
	let labels = `${label},${map}`;
	let markerName = newMarkerName || 'YOUR_NEW_MARKER_NAME';
	let issueTitle = `${label}: ${markerName} [${map}]`;
	let finalURL = `${domain}?assignees=${githubAssignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`;

	if (isIntel) {
		let intelParams = `&intelName=${markerName}&intelType=${itemType}&intelLocation=${JSON.stringify(location)}&intelMap=${map}`;
		finalURL += intelParams;
	} else if (!isIntel) {
		let miscParams = `&markerName=${markerName}&markerType=${itemType}&markerLocation=${JSON.stringify(location)}&markerMap=${map}`;
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

export const getMiscMarkerById = (
	markerId: string
): [MapId, MiscMarker] | null => {
	if (markerId) {
		let matchedMiscMarker: MiscMarker | undefined;
		let foundMap: MapId | undefined;
		Object.entries(AllMiscStores()).map(([key, miscMarkersForMap]) => {
			let matchedMisc = miscMarkersForMap.find(item => item.id === markerId);
			if (matchedMisc) {
				matchedMiscMarker = matchedMisc;
				foundMap = key as MapId;
				return [foundMap, matchedMiscMarker];
			}
		});
		if (foundMap && matchedMiscMarker) return [foundMap!, matchedMiscMarker!];
	}
	return null;
};
