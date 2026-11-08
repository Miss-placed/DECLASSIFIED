import { useContext, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { AreaSwitcher } from './AreaSwitcher';

export const AreaSwitcherContainer = () => {
	const { currentMap, currentMapGroup, setCurrentMapWithValidation } =
		useContext(DeclassifiedContext);
	// The switcher is painted above the map pane, so it would sit on top of an open
	// marker popup. Hide it while one is open instead of fighting stacking contexts.
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	useMapEvents({
		popupopen: () => setIsPopupOpen(true),
		popupclose: () => setIsPopupOpen(false),
	});

	if (!currentMapGroup || !currentMapGroup.mapLayersAreAreas) return null;
	if (isPopupOpen) return null;

	return (
		<AreaSwitcher
			areas={currentMapGroup.mapLayers}
			currentAreaId={currentMap?.id}
			mapName={currentMapGroup.mapName}
			onSelect={area => {
				void setCurrentMapWithValidation(area);
			}}
		/>
	);
};
