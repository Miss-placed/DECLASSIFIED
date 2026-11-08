import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Chip, Drawer, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { getMapMenuRows } from '../../helpers/mapAreas';
import { getGameMenuSections } from '../../helpers/mapMenu';
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

const GameSectionHeader = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 10px 16px 8px;
	background: none;
	border: 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	cursor: pointer;
	font-family: inherit;
	text-align: left;

	.chevron {
		margin-left: auto;
		color: var(--clr-grey);
		transition: transform 0.2s ease;
	}

	&[aria-expanded='true'] .chevron {
		transform: rotate(180deg);
	}
`;
const GameTitle = styled(Chip)`
	// TODO: needs to be dynamic once we add more shit
	--clr-map-pack: var(--game-base-color, var(--clr-bg));
	background-color: var(--clr-map-pack);
	padding: 1.7ch;
	border-radius: 5em;
	color: var(--clr-color);
`;

// One definition for both branches: the desktop menu renders through a portal and
// the mobile drawer does not, so a `.MapMenu .current-map-indicator` rule never
// reached the drawer and the dot was invisible there.
const CurrentMapIndicator = styled.span`
	height: 10px;
	width: 10px;
	background-color: var(--clr-red);
	border-radius: 50%;
	display: inline-block;
	margin-left: 10px;
	flex: 0 0 auto;
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

	const gameSections = getGameMenuSections(MapGroupings);
	const currentGameTitle = (currentMapGroup?.game as string | undefined) ?? null;
	const [expandedGame, setExpandedGame] = React.useState<string | null>(
		currentGameTitle
	);

	// Keep the current map's game open when the map changes, so the menu never
	// opens on a game the user is not looking at.
	React.useEffect(() => {
		setExpandedGame(currentGameTitle);
	}, [currentGameTitle]);

	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const gameStyleVars: Record<string, React.CSSProperties> = {
		[Game.bo7]: { '--game-base-color': 'var(--clr-red)' } as React.CSSProperties,
		[Game.bo6]: {
			'--game-base-color': 'var(--clr-orange)',
		} as React.CSSProperties,
		[Game.coldWar]: {
			'--game-base-color': 'var(--clr-purple)',
		} as React.CSSProperties,
	};

	// MUI menus only accept elements or arrays, never Fragments, so each section
	// is flattened into a header + its map rows.
	const MapMenuItems = gameSections.flatMap(section => {
		const isExpanded = expandedGame === section.title;

		const header = (
			<GameSectionHeader
				key={`section-${section.title}`}
				type="button"
				aria-expanded={isExpanded}
				style={gameStyleVars[section.title]}
				onClick={() =>
					setExpandedGame(currentSection =>
						currentSection === section.title ? null : section.title
					)
				}
			>
				<GameTitle label={section.title} size="small" />
				<KeyboardArrowDownIcon className="chevron" />
			</GameSectionHeader>
		);

		if (!isExpanded) return [header];

		return [header, ...(buildMapItems(section.maps) ?? [])];
	});

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
					<Button
						onClick={toggleHeader(true)}
						aria-expanded={isDrawerOpen ? 'true' : 'false'}
					>
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
					sx={{ minHeight: 'auto', py: '5px' }}
					onClick={() => {
						setCurrentMap(mapGroupItem.mapLayers[0]);
						navigate(`/${mapGroupItem.mapLayers[0].id!}`, { replace: true });
						// both the menu and the drawer are controlled, so neither closes itself
						handleClose();
						setIsDrawerOpen(false);
					}}
				>
					{mapGroupItem.mapName}
					{isCurrentGroup ? (
						<CurrentMapIndicator className="current-map-indicator" />
					) : null}
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
						minHeight: 'auto',
						py: '4px',
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
					{currentMap?.id === mapLayer.id ? (
						<CurrentMapIndicator className="current-map-indicator" />
					) : null}
				</MenuItem>
			));

			return [mapItem, ...areaItems];
		});
	}
};

export default Header;
