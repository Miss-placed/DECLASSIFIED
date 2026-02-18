import { cloneElement, isValidElement, useContext } from 'react';
import { LayersControl } from 'react-leaflet';
import { MapItem } from '../../classes';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { MapMarkers } from '../MapMarkers';

export const MapControls = () => {
	const { currentMap, currentMapGroup } = useContext(DeclassifiedContext);
	const { isMobile } = useUserContext();

	const renderMapOverlay = (mapLayer: MapItem) => {
		if (!mapLayer.mapOverlay) {
			return null;
		}

		// Force remount per map id so SVG root attributes (e.g. fill="none") are reapplied.
		return isValidElement(mapLayer.mapOverlay)
			? cloneElement(mapLayer.mapOverlay, { key: `map-overlay-${mapLayer.id}` })
			: mapLayer.mapOverlay;
	};

	return (
		<LayersControl
			position={isMobile ? 'bottomright' : 'topright'}
		// collapsed={isMobile}
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
						{renderMapOverlay(mapLayer)}
					</LayersControl.BaseLayer>
				)) : (
					<>
						{renderMapOverlay(currentMapGroup!.mapLayers[0])}
					</>
				)
			) : (null)}

			<MapMarkers />
		</LayersControl>
	);
};
