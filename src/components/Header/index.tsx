import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Divider, Drawer, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
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
		background: linear-gradient(
			135deg,
			var(--clr-grey-d) 15%,
			var(--clr-red) 15%,
			var(--clr-red) 16%,
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
`;
const MapMenu = styled(Menu)`
	.MuiPaper-root {
		background-color: var(--clr-bg-inverted);
	}
`;

const GameSeparator = styled(Divider)`
	font-size: 0.8rem;
	font-weight: 900;
	width: 100%;
	padding: 0 3rem;
`

const Header = () => {
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

	const bo6Maps = Object.entries(MapGroupings).filter(([key, mapGroupItem]) => mapGroupItem.game === Game.bo6);
	const coldWarMaps = Object.entries(MapGroupings).filter(([key, mapGroupItem]) => mapGroupItem.game === Game.coldWar);
	const MapMenuItems = [
		<GameSeparator key="BlackOps6" >Black Ops 6</GameSeparator>,
		buildMapItems(bo6Maps),
		<GameSeparator key="BlackOpsColdWar" >Black Ops: Cold War</GameSeparator>,
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
		return mapGroup ? (
			mapGroup.map(([key, mapGroupItem]) => (
				<MenuItem onClick={() => setCurrentMap(mapGroupItem.mapLayers[0])} key={key}>
					{mapGroupItem.mapName}
				</MenuItem>
			))
		) : null;
	}
};

export default Header;
