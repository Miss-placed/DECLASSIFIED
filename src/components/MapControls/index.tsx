import { cloneElement, isValidElement, useContext } from 'react';
import { LayersControl } from 'react-leaflet';
import { MapItem } from '../../classes';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { MapMarkers } from '../MapMarkers';

export const MapControls = () => {
	const { currentMap } = useContext(DeclassifiedContext);
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
			{/* Areas are switched through the header menu and the on-map area
			    switcher, the leaflet base-layer radios are no longer needed. */}
			{currentMap ? renderMapOverlay(currentMap) : null}

			<MapMarkers />
		</LayersControl>
	);
};
