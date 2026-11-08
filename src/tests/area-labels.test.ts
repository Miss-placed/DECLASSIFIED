import { getAreaLabel } from '../helpers/mapAreas';

describe('getAreaLabel', () => {
	it('strips the map name so the area reads on its own', () => {
		expect(getAreaLabel('Reckoning Boss Area', 'Reckoning')).toBe('Boss Area');
		expect(getAreaLabel('Terminus Prison', 'Terminus')).toBe('Prison');
		expect(getAreaLabel('Totenreich Boss Area', 'Totenreich')).toBe('Boss Area');
		expect(getAreaLabel('Die Maschine Underground', 'Die Maschine')).toBe(
			'Underground'
		);
	});

	it('falls back to Main when the area title is just the map name', () => {
		expect(getAreaLabel('Paradox Junction', 'Paradox Junction')).toBe('Main');
		expect(getAreaLabel('Reckoning', 'Reckoning')).toBe('Main');
	});

	it('leaves titles that do not mention the map name alone', () => {
		expect(getAreaLabel('Courtyard', 'Paradox Junction')).toBe('Courtyard');
		expect(getAreaLabel('Biolabs & Islands', 'Terminus')).toBe(
			'Biolabs & Islands'
		);
	});
});
