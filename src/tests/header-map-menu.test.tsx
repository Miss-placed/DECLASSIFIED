import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import { MapGroupings } from '../components/MapControls/types';
import { DeclassifiedContext } from '../contexts/DeclassifiedContext/declassifiedContextProvider';
import { UserContext } from '../contexts/UserContext/userContextProvider';

// Header reaches map data through MapControls/types -> MapDetails -> mapSVGs, and
// react-leaflet v4 ships ESM only, so the overlay component is stubbed out.
jest.mock('react-leaflet', () => ({ SVGOverlay: () => null }));

const totenreichGroup = MapGroupings.totenreich_Group;

const renderHeader = (isMobile: boolean) => {
	const setCurrentMap = jest.fn();

	render(
		<MemoryRouter initialEntries={['/totenreich']}>
			<UserContext.Provider value={{ isMobile } as never}>
				<DeclassifiedContext.Provider
					value={
						{
							currentMap: totenreichGroup.mapLayers[0],
							currentMapGroup: totenreichGroup,
							setCurrentMapWithValidation: setCurrentMap,
						} as never
					}
				>
					<Header />
				</DeclassifiedContext.Provider>
			</UserContext.Provider>
		</MemoryRouter>
	);

	return { setCurrentMap, trigger: screen.getByRole('button', { name: /totenreich/i }) };
};

const currentMapIndicators = () =>
	Array.from(document.querySelectorAll('.current-map-indicator'));

describe('Header map menu', () => {
	it('closes the menu after a map is selected', () => {
		const { trigger, setCurrentMap } = renderHeader(false);
		fireEvent.click(trigger);
		expect(trigger).toHaveAttribute('aria-expanded', 'true');

		fireEvent.click(screen.getByRole('menuitem', { name: 'Kowakujō' }));

		expect(setCurrentMap).toHaveBeenCalled();
		expect(trigger).not.toHaveAttribute('aria-expanded', 'true');
	});

	it('closes the mobile drawer after a map is selected', () => {
		const { trigger } = renderHeader(true);
		fireEvent.click(trigger);
		expect(trigger).toHaveAttribute('aria-expanded', 'true');

		fireEvent.click(screen.getByRole('menuitem', { name: 'Kowakujō' }));

		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('marks the current map in the menu', () => {
		const { trigger } = renderHeader(false);
		fireEvent.click(trigger);

		const indicators = currentMapIndicators();
		expect(indicators.length).toBeGreaterThan(0);
		expect(indicators.map(indicator => indicator.closest('li')?.textContent)).toContain(
			'Totenreich'
		);
	});

	it('renders the current-map indicator dot in the mobile drawer', () => {
		const { trigger } = renderHeader(true);
		fireEvent.click(trigger);

		const indicators = currentMapIndicators();
		expect(indicators.length).toBeGreaterThan(0);
		indicators.forEach(indicator => {
			expect(indicator).toHaveStyle({ width: '10px', height: '10px' });
		});
	});
});
