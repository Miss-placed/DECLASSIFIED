import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
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

const MapWrapper = styled.div <{ $shouldShowCrosshair?: boolean, $isStartingUp?: boolean }>`
	#worldMap .leaflet-pane,leaflet-map-pane{
		opacity: ${({ $isStartingUp }) => ($isStartingUp ? `0` : `1`)};
	}

${({ $shouldShowCrosshair }) =>
		$shouldShowCrosshair ??
		`
	#worldMap {
		cursor: crosshair;
	}
	`
	}
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top */
`;

const Spinner = styled(CircularProgress)`
  && {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const MapProvider = () => {
	const { isOnStartup, isMobile, contributionState, isDebugMode } = useUserContext();

	return (<>
		{isOnStartup ? <LoaderWrapper>
			<Spinner />
		</LoaderWrapper> : null}

		<MapWrapper $shouldShowCrosshair={contributionState.isContributing || isDebugMode} $isStartingUp={isOnStartup} >
			{ }
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
	</>
	);
};

export default MapProvider;
