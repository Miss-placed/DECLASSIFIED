import { useContext } from 'react';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { AreaSwitcher } from './AreaSwitcher';

export const AreaSwitcherContainer = () => {
	const { currentMap, currentMapGroup, setCurrentMapWithValidation } =
		useContext(DeclassifiedContext);

	if (!currentMapGroup || !currentMapGroup.mapLayersAreAreas) return null;

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
