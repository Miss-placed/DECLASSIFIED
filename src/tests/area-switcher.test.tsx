import { fireEvent, render, screen } from '@testing-library/react';
import type { MapItem } from '../classes';
import { AreaSwitcher } from '../components/MapControls/AreaSwitcher';

const makeArea = (id: string, title: string) => ({ id, title } as MapItem);

const nuked = makeArea('paradoxJunction', 'Paradox Junction');
const past = makeArea('paradoxJunctionPast', 'Paradox Junction (Past)');

describe('AreaSwitcher', () => {
	it('renders nothing when the map only has one area', () => {
		const { container } = render(
			<AreaSwitcher
				areas={[nuked]}
				currentAreaId={nuked.id}
				mapName="Paradox Junction"
				onSelect={jest.fn()}
			/>
		);

		expect(container).toBeEmptyDOMElement();
	});

	it('renders a button per area and marks the current one', () => {
		render(
			<AreaSwitcher
				areas={[nuked, past]}
				currentAreaId={past.id}
				mapName="Paradox Junction"
				onSelect={jest.fn()}
			/>
		);

		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(2);
		expect(buttons.map(button => button.textContent)).toEqual([
			'Main',
			'Past',
		]);
		expect(buttons[0]).toHaveAttribute('aria-pressed', 'false');
		expect(buttons[1]).toHaveAttribute('aria-pressed', 'true');
	});

	it('reports the area the user picked', () => {
		const onSelect = jest.fn();
		render(
			<AreaSwitcher
				areas={[nuked, past]}
				currentAreaId={nuked.id}
				mapName="Paradox Junction"
				onSelect={onSelect}
			/>
		);

		fireEvent.click(screen.getByText('Past'));

		expect(onSelect).toHaveBeenCalledWith(past);
	});
});
