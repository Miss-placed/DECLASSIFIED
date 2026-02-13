import { IntelStore } from './intel';
import { MapDetails } from './maps/mapDetails';

export const slugifyIntel = (value: string): string =>
	value
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, '-');

export const gameForIntel = (intelId: string) =>
	intelId.startsWith('BO6')
		? { slug: 'black-ops-6', title: 'Black Ops 6' }
		: { slug: 'black-ops-cold-war', title: 'Black Ops Cold War' };

export const mapTitleFromId = (mapId: string | undefined) => {
	const match = Object.values(MapDetails).find(map => map.id === mapId);
	return match?.title ?? mapId ?? 'Unknown Map';
};

export const intelSlug = (title: string, id: string) =>
	`${slugifyIntel(title)}-${slugifyIntel(id)}`;

export const getIntelRouteModel = () =>
	IntelStore.map(intel => {
		const game = gameForIntel(intel.id);
		const mapTitle = mapTitleFromId(intel.map);
		const mapSlug = slugifyIntel(mapTitle);
		return {
			id: intel.id,
			title: intel.title,
			type: intel.typeDesc,
			desc: intel.desc,
			gameSlug: game.slug,
			gameTitle: game.title,
			mapId: intel.map,
			mapSlug,
			mapTitle,
			intelSlug: intelSlug(intel.title, intel.id),
		};
	});
