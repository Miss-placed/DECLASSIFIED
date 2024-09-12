import { LatLngExpression } from 'leaflet';
import { MapItem, MiscMarker } from '../classes';
import { IconFileNames } from '../data/icons';
import { IntelStore, IntelType, MapIds } from '../data/intel';
import { AllMiscStores } from '../data/misc';
import { ContributionTemplates, RepoDomain } from './models';

export type GithubIssueType = 'New' | 'Fix';
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
	let map = currentMap.id ?? '';
	if (isIntel) {
		issueTemplate = ContributionTemplates.intelEditId;
		label = ContributionTemplates.intelEditTitle;
		let intel = getIntelById(id);
		entityName = intel?.title ?? '';
		map = intel?.map ?? '';
	} else if (isMisc) {
		issueTemplate = ContributionTemplates.miscEditId;
		label = ContributionTemplates.miscEditTitle;
		const miscResult = getMiscMarkerById(id);
		if (miscResult) {
			const [mapId, miscItem] = miscResult;
			entityName = miscItem.title ?? '';
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
	id: string | null,
	newMarkerName: string | null,
	itemType: IntelType | IconFileNames,
	currentMap: MapItem,
	location: LatLngExpression | null = null
) => {
	const isIntel = Object.values(IntelType).includes(itemType as IntelType);
	const isMisc = Object.values(IconFileNames).includes(itemType as IconFileNames);
	let issueTemplate = '';
	let label = '';
	let map = currentMap.id ?? '';
	if (isIntel) {
		issueTemplate = ContributionTemplates.intelNewId;
		label = ContributionTemplates.intelNewTitle;
	}
	else if (isMisc) {
		issueTemplate = ContributionTemplates.miscNewId;
		label = ContributionTemplates.miscNewTitle;
	}
	let labels = `${label},${map}`;

	let issueTitle = `${label}: ${newMarkerName ?? 'YOUR_NEW_MARKER_NAME'} [${map}]`;
	let finalURL = `${domain}?assignees=${githubAssignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`;

	if (isIntel) {
		let intelParams = `&intelId=${id}&intelName=${newMarkerName}&intelLocation=${location}&intelMap=${map}`;
		finalURL += intelParams;
	}
	if (isMisc) {
		let miscParams = `&markerId=${id}&markerName=${newMarkerName}&markerLocation=${location}&markerMap=${map}`;
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

const getMiscMarkerByIdAndMap = (itemId: string, currentMap: MapItem) => {
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
