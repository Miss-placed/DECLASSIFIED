import type { MapItem } from '../classes';
import { getMapMenuRows } from '../helpers/mapAreas';

const layer = (id: string, title: string) => ({ id, title } as MapItem);

describe('getMapMenuRows', () => {
	it('lists every layer of a group that holds several separate maps', () => {
		// Outbreak is a collection: without these rows its maps are unreachable
		const rows = getMapMenuRows('Outbreak', [
			layer('zoo', 'Zoo'),
			layer('ruka', 'Ruka'),
		]);

		expect(rows.map(row => row.label)).toEqual(['Zoo', 'Ruka']);
	});

	it('uses area labels for maps that are split into areas', () => {
		const rows = getMapMenuRows('Paradox Junction', [
			layer('paradoxJunction', 'Paradox Junction'),
			layer('paradoxJunctionPast', 'Paradox Junction (Past)'),
		]);

		expect(rows.map(row => row.label)).toEqual(['Main', 'Past']);
	});

	it('does not nest maps that only have one layer', () => {
		expect(
			getMapMenuRows('Rex Infernus', [layer('rexInfernus', 'Rex Infernus')])
		).toEqual([]);
	});
});
