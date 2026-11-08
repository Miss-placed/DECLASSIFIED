import { MapGroupings } from '../components/MapControls/types';

// react-leaflet v4 ships ESM only, and these tests never render a map.
jest.mock('react-leaflet', () => ({
	SVGOverlay: () => null,
}));

describe('map group areas', () => {
	it('treats layers of the same map as areas', () => {
		expect(MapGroupings.paradoxJunction_Group.mapLayersAreAreas).toBe(true);
		expect(MapGroupings.totenreich_Group.mapLayersAreAreas).toBe(true);
		expect(MapGroupings.reckoning_Group.mapLayersAreAreas).toBe(true);
		expect(MapGroupings.terminus_Group.mapLayersAreAreas).toBe(true);
	});

	it('does not treat a collection of maps like Outbreak as areas', () => {
		expect(MapGroupings.outbreak_Group.mapLayersAreAreas).toBe(false);
		expect(MapGroupings.outbreak_Group.mapLayers.length).toBeGreaterThan(1);
	});
});
