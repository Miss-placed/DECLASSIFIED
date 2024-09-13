import styled from '@emotion/styled';
import L from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { DeclassifiedContextProvider } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { NotificationProvider } from '../../contexts/NotificationContext/notificationProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { ApplicationContent } from '../ApplicationContent';

const StyledMapContainer = styled(MapContainer)`
	&&& {
		color: var(--clr-color);
		width: 100vw;
		height: 100svh;
		z-index: var(--z-index-map);
		display: block;
		grid-column: 1;
		float: right;
		z-index: 0;
		background-color: var(--svg-background);

		
	}
`;

const MapWrapper = styled.div <{ $isContributing?: boolean }>`
${({ $isContributing }) =>
		$isContributing &&
		`
		#worldMap {
			cursor: crosshair;
		}
		`}

`

const MapProvider = () => {
	const { isMobile, contributionState } = useUserContext();
	console.log("isContributing MAP: ", contributionState.isContributing)

	return (
		<MapWrapper $isContributing={contributionState.isContributing} >
			<StyledMapContainer
				id={'worldMap'}
				center={[256, 256]}
				zoom={0.8}
				scrollWheelZoom={true}
				crs={L.CRS.Simple}
				maxBounds={
					isMobile
						? [
							// TODO - figure out the best bounds for mobile and desktop
							[-256, -256],
							[768, 768],
						]
						: [
							[-256, -256],
							[768, 768],
						]
				}
				zoomControl={false}
				maxZoom={5}
				minZoom={0.1}
				tap={true}
				tapTolerance={30}
				/* noWrap={true} */
				doubleClickZoom={false}
				zoomDelta={0.5}
				wheelPxPerZoomLevel={80}
				zoomSnap={0}
				maxBoundsViscosity={0.2}
			>
				<NotificationProvider>
					<DeclassifiedContextProvider>
						<ApplicationContent />
					</DeclassifiedContextProvider>
				</NotificationProvider>
			</StyledMapContainer>
		</MapWrapper>
	);
};

export default MapProvider;
