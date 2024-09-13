import styled from '@emotion/styled';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faAdd,
	faFolderOpen,
	faGear,
	faList,
	faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LatLngTuple } from 'leaflet';
import { useContext } from 'react';
import { useMapEvent, useMapEvents } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useNotification } from '../../contexts/NotificationContext/notificationContext';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { redirectNewContributionToGithub } from '../../helpers/github';
import { IntelAndEasterEggDrawerContent } from '../DrawerMenu/IntelAndEasterEggDrawerContent';
import { SettingsDrawerContent } from '../DrawerMenu/SettingsDrawerContent';

const StyledUiContainer = styled.div<{ $isMobile?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: absolute;
	width: 100vw;
	height: 100svh;
	bottom: 0;
	padding: 20px;
	z-index: var(--z-index-ui);
	pointer-events: none;

	> div {
		display: flex;
		justify-content: ${props =>
		props.$isMobile ? 'flex-start' : 'space-between'};

		.zoom-container {
			visibility: ${props => (props.$isMobile ? 'hidden' : 'visible')};
		}
	}
`;

export const UserInterface = () => {
	const { isMobile, isDebugMode, contributionState, setContributionState } = useUserContext();
	const { triggerNotification } = useNotification();
	const { toggleDrawer, currentMap } = useContext(DeclassifiedContext);
	const mapInstance = useMapEvents({});

	useMapEvent('click', props => {
		let clickLocation: LatLngTuple = [props.latlng.lat, props.latlng.lng]

		if (isDebugMode) {
			console.log(clickLocation);
			navigator.clipboard.writeText(clickLocation.toString());
			triggerNotification('Location Copied to Clipboard');
		}

		if (contributionState.isContributing && currentMap) {
			redirectNewContributionToGithub(contributionState.isIntel, contributionState.markerName, contributionState.itemType, currentMap, clickLocation);
			setContributionState({ isContributing: false, markerName: null, itemType: null });
		}
	});

	return (
		<StyledUiContainer $isMobile={isMobile} id="ui">
			<div>
				<div className="zoom-container ui">
					<button className="zoom- btn ui" onClick={() => mapInstance.zoomIn()}>
						<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
					</button>
					<button
						className="zoom- btn ui"
						onClick={() => mapInstance.zoomOut()}
					>
						{' '}
						<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
					</button>
				</div>
				{/* <div>
                    <!-- <button className="btn ui" id="color-scheme-toggle">
                        <i className="fas fa-layer-group"></i>
                    </button> -->
                </div> */}
			</div>
			<div>
				<div className="bottom-left-ui">
					<button className="btn ui" onClick={() => toggleDrawer({ isOpen: true, content: <IntelAndEasterEggDrawerContent /> })}>
						<FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
					</button>
					<button className="btn ui" onClick={() => toggleDrawer({ isOpen: true, content: <SettingsDrawerContent /> })}>
						<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
					</button>
					<a className="btn ui" href="./legacy/challenge.html" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faList}></FontAwesomeIcon>
					</a>
					{/* <a className="btn ui" href="./challenge.html"><FontAwesomeIcon icon={faList}></FontAwesomeIcon > </a> */}
				</div>
				<div className="bottom-right-ui">
					{/* <button className="btn ui" id="color-scheme-toggle" onClick="setColorScheme()"><i className="fas fa-moon"></i>
                    </button> */}
					<a
						title="Join us on discord!"
						href="https://discord.gg/4Xqj8XntFe"
						target="_blank"
						className="btn ui"
						id="discord"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>{' '}
					</a>
					<a
						title="Help us out on Github!"
						href="https://github.com/Miss-placed/DECLASSIFIED"
						target="_blank"
						className="btn ui"
						id="github"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{' '}
					</a>
				</div>
			</div>
		</StyledUiContainer>
	);
};