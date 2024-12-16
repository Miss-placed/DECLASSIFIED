import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Chip, Divider, Drawer, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
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
	const { currentMapGroup } = useContext(DeclassifiedContext);
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

	const bo6Maps = Object.entries(MapGroupings).filter(
		([key, mapGroupItem]) => mapGroupItem.game === Game.bo6
	);
	const coldWarMaps = Object.entries(MapGroupings).filter(
		([key, mapGroupItem]) => mapGroupItem.game === Game.coldWar
	);
	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const bo6StyleVars = {
		'--game-base-color': 'var(--clr-orange)',
	} as React.CSSProperties;
	// TODO: set --game-base-color to somethingdynamic from the mappacks
	const bocwStyleVars = {
		'--game-base-color': 'var(--clr-purple)',
	} as React.CSSProperties;

	const MapMenuItems = [
		<GameSeparator key="BlackOps6" style={bo6StyleVars}>
			<GameTitle label="Black Ops 6" size="small" />
		</GameSeparator>,
		buildMapItems(bo6Maps),
		<GameSeparator key="BlackOpsColdWar" style={bocwStyleVars}>
			<GameTitle label="Black Ops: Cold War" size="small" />
		</GameSeparator>,
		buildMapItems(coldWarMaps),
	];
	return (
		<>
			{isMobile ? (
				<StyledHeader>
					<Button onClick={toggleHeader(true)}>
						{currentMapGroup!.mapName}
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

		return mapGroup
			? mapGroup.map(([key, mapGroupItem]) => {
				// TODO : maybe swap this out for some better styling instead of removing the current map
				if (currentMapGroup!.mapName !== mapGroupItem.mapName) {
					return (
						<MenuItem
							onClick={
								() => {
									setCurrentMap(mapGroupItem.mapLayers[0])
									navigate(`/${mapGroupItem.mapLayers[0].id!}`, { replace: true })
								}
							}
							key={key}
						>
							{mapGroupItem.mapName}
						</MenuItem>
					)
				}
				return null;
			})
			: null;
	}
};

export default Header;
