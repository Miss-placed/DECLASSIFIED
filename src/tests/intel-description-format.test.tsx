import { render } from '@testing-library/react';
import { blackOps7Intel } from '../data/blackOps7Intel';
import { withIntelDescription } from '../helpers/intelDescription';

const descFor = (id: string) =>
	blackOps7Intel.find(item => item.id === id)?.desc ?? '';

describe('withIntelDescription', () => {
	it('renders the location text before an italic in-game description', () => {
		const { container } = render(
			<p>{withIntelDescription('In the farmhouse kitchen. *The Vandorn family gives thanks.*')}</p>
		);

		expect(container.textContent).toBe(
			'In the farmhouse kitchen. The Vandorn family gives thanks.'
		);
		expect(container.querySelector('em')?.textContent).toBe(
			'The Vandorn family gives thanks.'
		);
		expect(container.querySelector('p')?.firstChild?.textContent).toBe(
			'In the farmhouse kitchen. '
		);
	});

	it('leaves descriptions without markup as plain text', () => {
		const { container } = render(<p>{withIntelDescription('Progress through Main Quest.')}</p>);

		expect(container.querySelector('em')).toBeNull();
		expect(container.textContent).toBe('Progress through Main Quest.');
	});

	it('keeps authored line breaks', () => {
		const { container } = render(<p>{withIntelDescription('Line one.\n*Line two.*')}</p>);

		expect(container.querySelectorAll('br')).toHaveLength(1);
		expect(container.querySelector('em')?.textContent).toBe('Line two.');
	});
});

describe('Black Ops 7 intel descriptions', () => {
	it('startsWith the location guide text for every item', () => {
		const offenders = blackOps7Intel
			.filter(item => !item.desc.trim() || item.desc.trim().startsWith('*'))
			.map(item => item.id);

		expect(offenders).toEqual([]);
	});

	it('keeps the in-game description in italics', () => {
		expect(descFor('BO7S1AdAu1')).toBe(
			'Main Quest. In Vandorn Farm, in the pan in the kitchen of the Farmhouse. *The Vandorn family gives thanks.*'
		);
		expect(descFor('BO7S1TrAu1')).toContain('*Nothing is native in the Dark Aether.*');
		expect(descFor('BO7S1PjAr4')).toContain('*Check, check... is this thing on?*');
		expect(descFor('BO7S1KoAu1')).toContain(`*Takeo knows where his loyalty lies.*`);
		expect(descFor('BO7S1RiAr3')).toContain(`*The definition is in the name.*`);
	});

	it('has balanced markup in every description', () => {
		const offenders = blackOps7Intel
			.filter(item => (item.desc.match(/\*/g) ?? []).length % 2 !== 0)
			.map(item => item.id);

		expect(offenders).toEqual([]);
	});
});
