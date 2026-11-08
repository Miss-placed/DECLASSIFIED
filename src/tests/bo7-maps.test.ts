import { MapIds } from '../components/MapControls/MapIds';
import { MapGroupDefinitions } from '../data/mapGroups';
import { MapDetails } from '../data/maps/mapDetails';
import { blackOps7Maps } from '../data/maps/blackOps7Maps';

// react-leaflet v4 ships ESM only, and these tests never render a map, so the
// overlay component is stubbed out to keep Jest happy.
jest.mock('react-leaflet', () => ({
	SVGOverlay: () => null,
}));

const bo7Groups = MapGroupDefinitions.filter(group => group.game === 'bo7');

// map group key -> the layers we expect to be selectable for that map
const expectedBo7Layers: Record<string, string[]> = {
	ashesOfTheDamned_Group: [MapIds.ashesOfTheDamned],
	astraMalorum_Group: [MapIds.astraMalorum],
	paradoxJunction_Group: [MapIds.paradoxJunction, 'paradoxJunctionNuked'],
	totenreich_Group: [MapIds.totenreich, 'totenreichBoss'],
	kowakujo_Group: [MapIds.kowakujo],
	rexInfernus_Group: ['rexInfernus'],
};

describe('Black Ops 7 map wiring', () => {
	it('exposes a map id for every Black Ops 7 map', () => {
		expect(Object.values(MapIds)).toEqual(
			expect.arrayContaining(['rexInfernus', 'paradoxJunctionNuked', 'totenreichBoss'])
		);
	});

	it('lists the expected layers for every Black Ops 7 map group', () => {
		const actual = Object.fromEntries(
			bo7Groups.map(group => [group.key, group.mapLayers.map(layer => layer.id)])
		);

		expect(actual).toEqual(expectedBo7Layers);
	});

	it('resolves every Black Ops 7 map layer to a map with an SVG overlay', () => {
		const problems = bo7Groups.flatMap(group =>
			group.mapLayers
				.filter(
					layer =>
						!MapDetails[layer.id as keyof typeof MapDetails]?.mapOverlay ||
						!blackOps7Maps[layer.id as keyof typeof blackOps7Maps]
				)
				.map(layer => `${group.key}:${layer.id}`)
		);

		expect(problems).toEqual([]);
	});
});
