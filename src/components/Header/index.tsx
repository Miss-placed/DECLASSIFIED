import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Chip, Divider, Drawer, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { getMapMenuRows } from '../../helpers/mapAreas';
import { Game, MapGroupings, MapGroupItem } from '../MapControls/types';

const StyledHeader = styled.header`
	user-select: none;
	margin: 0 auto;
	position: absolute;
	z-index: var(--z-index-menu);
	left: calc((100vw - 375px) / 2);
	button {
		color: var(--clr-white);
		width: 375px;
		background: var(--clr-grey-d);
		//TODO: change the --clr-orange depending on the map pack vars
		background: linear-gradient(
			135deg,
			var(--clr-grey-d) 15%,
			var(--clr-orange) 15%,
			var(--clr-orange) 16%,
			var(--clr-grey-d) 16%
		);
		background-position-x: -454px;
		background-repeat: no-repeat;
		background-size: 825%;
		display: flex;
		margin: auto;
		height: 70px;
		align-items: center;
		justify-content: space-evenly;
		box-shadow: var(--shadow);
		/* text-transform: uppercase; */
		font-weight: 900;

		.area-count {
			font-size: 0.55rem;
			font-weight: 400;
			letter-spacing: 0.12em;
			text-transform: uppercase;
			background: rgba(255, 255, 255, 0.16);
			border-radius: 999px;
			padding: 2px 8px;
		}
	}
`;

const MapDrawer = styled(Drawer)`
	.MuiPaper-root {
		background-color: var(--clr-bg-inverted);
	}
	.MuiPaper-root li {
		background-color: var(--clr-bg-inverted);
	}
`;
const MapMenu = styled(Menu)`
	.current-map-indicator {
		height: 10px;
		width: 10px;
		background-color: var(--clr-red);
		border-radius: 50%;
		display: inline-block;
		margin-left: 10px;
	}
	// areas of a map, nested under the map they belong to
	.MuiPaper-root {
		width: 375px;
		background-color: var(--clr-bg-inverted);
	}
	.MuiPaper-root ul {
		padding: unset !important;
	}
	.MuiPaper-root li {
		background-color: var(--clr-bg-inverted);
		transition: all 0.3s ease;
		&:hover {
			background-color: var(--clr-white-extra-dark);
		}
	}
`;

const GameSeparator = styled(Divider)`
	background-color: var(--clr-bg-inverted);
	color: var(--clr-color);
	font-size: 0.6rem;
	margin-bottom: 8px;
	padding: 1ch;
	font-weight: lighter;
`;
const GameTitle = styled(Chip)`
	// TODO: needs to be dynamic once we add more shit
	--clr-map-pack: var(--game-base-color, var(--clr-bg));
	background-color: var(--clr-map-pack);
	padding: 1.7ch;
	border-radius: 5em;
	color: var(--clr-color);
`;

const Header = () => {
	const navigate = useNavigate();
	const { isMobile } = useUserContext();
	const { currentMap, currentMapGroup } = useContext(DeclassifiedContext);
	const { setCurrentMapWithValidation: setCurrentMap } =
		useContext(DeclassifiedContext);
	const [menuAnchorElement, setMenuAnchorElement] =
		React.useState<null | HTMLElement>(null);
	const isOpen = Boolean(menuAnchorElement);

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorElement(event.currentTarget);
	};

	const handleClose = () => {
		setMenuAnchorElement(null);
	};

	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

	const toggleHeader =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setIsDrawerOpen(open);
		};

	const bo7Maps = Object.entries(MapGroupings).filter(
		([key, mapGroupItem]) => mapGroupItem.game === Game.bo7
	);
	const bo6Maps = Object.entries(MapGroupings).filter(
		([key, mapGroupItem]) => mapGroupItem.game === Game.bo6
	);
	const coldWarMaps = Object.entries(MapGroupings).filter(
		([key, mapGroupItem]) => mapGroupItem.game === Game.coldWar
	);
	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const bo7StyleVars = {
		'--game-base-color': 'var(--clr-red)',
	} as React.CSSProperties;
	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const bo6StyleVars = {
		'--game-base-color': 'var(--clr-orange)',
	} as React.CSSProperties;
	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const bocwStyleVars = {
		'--game-base-color': 'var(--clr-purple)',
	} as React.CSSProperties;

	const MapMenuItems = [
		<GameSeparator key="BlackOps7" style={bo7StyleVars}>
			<GameTitle label="Black Ops 7" size="small" />
		</GameSeparator>,
		buildMapItems(bo7Maps),
		<GameSeparator key="BlackOps6" style={bo6StyleVars}>
			<GameTitle label="Black Ops 6" size="small" />
		</GameSeparator>,
		buildMapItems(bo6Maps),
		<GameSeparator key="BlackOpsColdWar" style={bocwStyleVars}>
			<GameTitle label="Black Ops: Cold War" size="small" />
		</GameSeparator>,
		buildMapItems(coldWarMaps),
	];

	const areaCount =
		currentMapGroup &&
		currentMapGroup.mapLayersAreAreas &&
		currentMapGroup.mapLayers.length > 1 ? (
			<span className="area-count">
				{currentMapGroup.mapLayers.length} areas
			</span>
		) : null;

	return (
		<>
			{isMobile ? (
				<StyledHeader>
					<Button onClick={toggleHeader(true)}>
						{currentMapGroup!.mapName}
						{areaCount}
						<KeyboardArrowDownIcon />
					</Button>
					<MapDrawer
						anchor={'top'}
						open={isDrawerOpen}
						onClose={toggleHeader(false)}
					>
						{MapMenuItems}
					</MapDrawer>
				</StyledHeader>
			) : (
				<StyledHeader>
					<Button
						id="basic-button"
						aria-controls={isOpen ? 'map-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={isOpen ? 'true' : undefined}
						onClick={handleMenuClick}
					>
						{currentMapGroup!.mapName}
						{areaCount}
						<KeyboardArrowDownIcon />
					</Button>
					<MapMenu
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						transformOrigin={{ vertical: 'top', horizontal: 'center' }}
						id="map-menu"
						open={isOpen}
						anchorEl={menuAnchorElement}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						{MapMenuItems}
					</MapMenu>
				</StyledHeader>
			)}
		</>
	);

	function buildMapItems(mapGroup: [string, MapGroupItem][]) {
		if (!mapGroup) return null;

		// MUI menus only accept MenuItems / arrays, so the map row and its area
		// rows are flattened into a single array instead of a Fragment.
		return mapGroup.flatMap(([key, mapGroupItem]) => {
			const isCurrentGroup = currentMapGroup!.mapName === mapGroupItem.mapName;

			const mapItem = (
				<MenuItem
					key={key}
					onClick={() => {
						setCurrentMap(mapGroupItem.mapLayers[0]);
						navigate(`/${mapGroupItem.mapLayers[0].id!}`, { replace: true });
					}}
				>
					{mapGroupItem.mapName}
					<span className={isCurrentGroup ? 'current-map-indicator' : ''}></span>
				</MenuItem>
			);

			// Multi-layer groups always list their layers so every map stays reachable
			// in the menu. Only real area groups also get the on-map switcher.
			const layerRows = getMapMenuRows(
				mapGroupItem.mapName,
				mapGroupItem.mapLayers
			);

			if (layerRows.length === 0) {
				return [mapItem];
			}

			const areaItems = layerRows.map(({ layer: mapLayer, label }) => (
				<MenuItem
					key={`${key}-${mapLayer.id}`}
					className="map-area-item"
					aria-label={`${mapGroupItem.mapName} ${label}`}
					// styled on the item so the menu and the mobile drawer match
					sx={{
						position: 'relative',
						pl: '2.5rem',
						fontSize: '0.8rem',
						opacity: 0.85,
						'&::before': {
							content: '""',
							position: 'absolute',
							left: '1.25rem',
							height: '1px',
							width: '0.7rem',
							backgroundColor: 'var(--clr-grey-l)',
						},
					}}
					onClick={() => {
						setCurrentMap(mapLayer);
						handleClose();
						setIsDrawerOpen(false);
					}}
				>
					{label}
					<span
						className={
							currentMap?.id === mapLayer.id ? 'current-map-indicator' : ''
						}
					></span>
				</MenuItem>
			));

			return [mapItem, ...areaItems];
		});
	}
};

export default Header;
