import { useContext } from 'react';
import { LayersControl } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { MapMarkers } from '../MapMarkers';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';

export const MapControls = () => {
	const { currentMap, currentMapGroup } = useContext(DeclassifiedContext);
	const { isMobile } = useUserContext();

	return (
		<LayersControl
			position={isMobile ? 'bottomright' : 'topright'}
			collapsed={isMobile}
		>
			{currentMapGroup ? (
				currentMapGroup!.mapLayers.length > 1 ? currentMapGroup!.mapLayers.map(mapLayer => (
					<LayersControl.BaseLayer
						key={`layer-${mapLayer.id}`}
						checked={
							mapLayer.id === currentMap!.id /* TODO: SWAP WITH USER PREFS */
						}
						name={mapLayer.title}
					>
						{mapLayer.mapOverlay}
					</LayersControl.BaseLayer>
				)) : (
					<>
						{currentMapGroup!.mapLayers[0].mapOverlay}
					</>
				)
			) : (null)}

			<MapMarkers />
		</LayersControl>
	);
};
