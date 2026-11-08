import { render } from '@testing-library/react';
import { blackOps7Intel } from '../data/blackOps7Intel';
import { withIntelDescription } from '../helpers/intelDescription';

const descFor = (id: string) =>
	blackOps7Intel.find(item => item.id === id)?.desc ?? '';

describe('withIntelDescription', () => {
	it('puts the in-game hint on its own line above the location', () => {
		const { container } = render(
			<p>{withIntelDescription('*Barrels of Fun!* In Eidskallen Landing, on some barrels.')}</p>
		);

		expect(container.querySelector('em')?.textContent).toBe('Barrels of Fun!');
		expect(container.querySelectorAll('br')).toHaveLength(1);
		expect(container.querySelector('p')?.childNodes[0].nodeName).toBe('EM');
		expect(container.querySelector('p')?.textContent).toBe(
			'Barrels of Fun!In Eidskallen Landing, on some barrels.'
		);
	});

	it('does not add a line break when the hint has no location after it', () => {
		const { container } = render(<p>{withIntelDescription('*Progress through Main Quest*')}</p>);

		expect(container.querySelectorAll('br')).toHaveLength(0);
		expect(container.textContent).toBe('Progress through Main Quest');
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
	it('startsWith the in-game hint for every item', () => {
		const offenders = blackOps7Intel
			.filter(item => !/^\*[^*]+\*/.test(item.desc.trim()))
			.map(item => item.id);

		expect(offenders).toEqual([]);
	});

	it('keeps the hint text from the intel guides', () => {
		expect(descFor('BO7S1AdAu1')).toBe(
			'*Progress through Main Quest* In Vandorn Farm, in the pan in the kitchen of the Farmhouse.'
		);
		expect(descFor('BO7S1TrAu1')).toBe(
			'*Barrels of Fun!* In Eidskallen Landing, on some barrels. Across from the ammo crate around the corner of Quick Revive.'
		);
		expect(descFor('BO7S1KoAu8')).toBe(
			'*A bridge too far* On a post of the bridge in the Outer Ward near the ammo box and trap.'
		);
		expect(descFor('BO7S1RiAu3')).toBe(
			'*Bone-picked* Play the Paradox Junction song on the piano in Her House.'
		);
		expect(descFor('BO7S1PjAr2')).toBe('*Build the Sundergat*');
	});

	it('does not carry the post-pickup wiki description', () => {
		const wikiDescriptions = [
			'The Vandorn family gives thanks.',
			'Nothing is native in the Dark Aether.',
			'Check, check... is this thing on?',
			'Takeo knows where his loyalty lies.',
			'The definition is in the name.',
		];
		const offenders = blackOps7Intel
			.filter(item => wikiDescriptions.some(text => item.desc.includes(text)))
			.map(item => item.id);

		expect(offenders).toEqual([]);
	});

	it('has balanced markup in every description', () => {
		const offenders = blackOps7Intel
			.filter(item => (item.desc.match(/\*/g) ?? []).length % 2 !== 0)
			.map(item => item.id);

		expect(offenders).toEqual([]);
	});
});
