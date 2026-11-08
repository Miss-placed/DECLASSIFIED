import styled from '@emotion/styled';
import type { MapItem } from '../../classes';
import { getAreaLabel } from '../../helpers/mapAreas';

/**
 * Small, deliberately quiet switcher for maps that have more than one area.
 * Sits at the bottom centre of the map so it does not fight with the header.
 */
const StyledAreaSwitcher = styled.div`
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	/* below Leaflet's popup pane (700) so an open marker is never covered,
	   but above the overlay/marker panes */
	z-index: 500;
	display: flex;
	align-items: center;
	gap: 2px;
	padding: 3px;
	border-radius: 10px;
	background: rgba(31, 34, 35, 0.82);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
	opacity: 0.72;
	transition: opacity 0.2s ease;

	@media (max-width: 768px) {
		bottom: 92px;
	}

	&:hover,
	&:focus-within {
		opacity: 1;
	}

	button {
		font-family: inherit;
		font-size: 11px;
		line-height: 1;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		white-space: nowrap;
		padding: 8px 12px;
		border: 0;
		border-radius: 7px;
		background: transparent;
		color: var(--clr-white-d);
		cursor: pointer;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	button:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	button[aria-pressed='true'] {
		background: var(--clr-red);
		color: var(--clr-white);
	}
`;

export interface AreaSwitcherProps {
	areas: MapItem[];
	currentAreaId?: string;
	mapName: string;
	onSelect: (area: MapItem) => void;
}

export const AreaSwitcher = ({
	areas,
	currentAreaId,
	mapName,
	onSelect,
}: AreaSwitcherProps) => {
	if (areas.length < 2) return null;

	return (
		<StyledAreaSwitcher role="group" aria-label={`${mapName} areas`}>
			{areas.map(area => (
				<button
					key={area.id}
					type="button"
					aria-pressed={area.id === currentAreaId}
					aria-label={`Show ${getAreaLabel(area.title, mapName)}`}
					onClick={() => onSelect(area)}
				>
					{getAreaLabel(area.title, mapName)}
				</button>
			))}
		</StyledAreaSwitcher>
	);
};
