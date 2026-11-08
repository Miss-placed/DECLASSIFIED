import type { MapGroupItem } from '../components/MapControls/types';
import { getGameMenuSections } from '../helpers/mapMenu';

const group = (mapName: string, game: string) =>
	({
		mapName,
		game,
		mapLayers: [{ id: mapName, title: mapName }],
		mapLayersAreAreas: false,
	} as unknown as MapGroupItem);

describe('getGameMenuSections', () => {
	it('splits the maps into one section per game in a fixed order', () => {
		const sections = getGameMenuSections({
			libertyFalls: group('Liberty Falls', 'Black Ops 6'),
			coldWarMap: group('Die Maschine', 'Black Ops: Cold War'),
			ashes: group('Ashes of the Damned', 'Black Ops 7'),
		});

		expect(sections.map(section => section.title)).toEqual([
			'Black Ops 7',
			'Black Ops 6',
			'Black Ops: Cold War',
		]);
		expect(sections.map(section => section.maps.map(([key]) => key))).toEqual([
			['ashes'],
			['libertyFalls'],
			['coldWarMap'],
		]);
	});

	it('keeps unknown games at the end so nothing is dropped', () => {
		const sections = getGameMenuSections({
			ashes: group('Ashes of the Damned', 'Black Ops 7'),
			something: group('Something', 'Black Ops 9'),
		});

		expect(sections.map(section => section.title)).toEqual([
			'Black Ops 7',
			'Black Ops 9',
		]);
	});
});
