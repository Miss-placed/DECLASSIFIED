import { useContext } from 'react';
import { LayerGroup, LayersControl } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { useUserContext } from '../../contexts/UserContext/userContextProvider';
import { DoorStore } from '../../data/doors';
import { StaticEggStore } from '../../data/easterEggs';
import { IntelStore, IntelType } from '../../data/intel';
import { StaticQuestStore } from '../../data/mainQuest';
import { MiscStore } from '../../data/misc';
import { PerkStore } from '../../data/perks';
import { LayerGrouping, MarkerLayerTypes, MarkerStore } from '../../data/types';
import { WallbuyStore } from '../../data/wallbuys';
import { IntelMapMarker } from '../Intel/IntelMapMarker';
import { MiscMapMarker } from '../MiscMapMarker';

const renderIntelMapMarkers = (
	mapId: string,
	intelType: IntelType
): JSX.Element[] => {
	if (mapId) {
		return IntelStore.filter(
			intel => intel.map === mapId && intel.typeDesc === intelType
		).map(intel => {
			return <IntelMapMarker key={intel.id} {...intel} />;
		});
	} else {
		return [<></>];
	}
};

const renderMiscMapMarkers = (markerStore: MarkerStore, mapId: string): JSX.Element[] => {
	if (mapId && markerStore[mapId]) {
		return markerStore[mapId].map((misc, index) => {
			return <MiscMapMarker key={index} {...misc} />;
		});
	} else {
		return [<></>];
	}
};

export const MapMarkers = () => {
	// const center: LatLngExpression = [0, 0]
	// const rectangle: LatLngBoundsExpression = [
	//     [0, 0],
	//     [0, 0],
	// ]
	const { currentMap } = useContext(DeclassifiedContext);
	//set state of isLayerChecked to be true for every array entry:
	const { layerCheckboxStates } = useUserContext();

	function AnyResultsInMarkerStore(markerStore: MarkerStore) {
		return markerStore[currentMap!.id!] && markerStore[currentMap!.id!].length > 0;
	}

	// TODO : Refactor this so it's neater. This is a hacky solution to force the layer controls to be rendered in order (I don't think this works)
	const renderOrderOfLayers = [
		RenderIntelLayerControlGroup(MarkerLayerTypes.intelAudio),
		RenderIntelLayerControlGroup(MarkerLayerTypes.intelArtifacts),
		RenderIntelLayerControlGroup(MarkerLayerTypes.intelDocuments),
		RenderLayerControlGroup(PerkStore, MarkerLayerTypes.perks),
		RenderLayerControlGroup(MiscStore, MarkerLayerTypes.misc),
		RenderLayerControlGroup(DoorStore, MarkerLayerTypes.doors),
		RenderLayerControlGroup(WallbuyStore, MarkerLayerTypes.wallbuy),
		RenderLayerControlGroup(StaticEggStore, MarkerLayerTypes.easterEggs),
		RenderLayerControlGroup(StaticQuestStore, MarkerLayerTypes.mainQuest),
	]
	return (
		<>
			{renderOrderOfLayers.map((layer) => layer)}
			{/* 
			Example of how we could use shape overlays and point to point connections
			<LayersControl.Overlay checked name="Misc Markers">
                <LayerGroup>
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'blue' }}
                        radius={200}
                    />
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'red' }}
                        radius={100}
                        stroke={false}
                    />
                    <LayerGroup>
                        <Circle
                            center={[0, 0]}
                            pathOptions={{ color: 'green', fillColor: 'green' }}
                            radius={100}
                        />
                    </LayerGroup>
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Easter Eggs">
                <FeatureGroup pathOptions={{ color: 'purple' }}>
                    <Popup>Popup in FeatureGroup</Popup>
                    <Circle center={[0, 0]} radius={200} />
                    <Rectangle bounds={rectangle} />
                </FeatureGroup>
            </LayersControl.Overlay> */}
		</>
	);

	function RenderLayerControlGroup(markerStore: MarkerStore, markerLayerType: LayerGrouping) {
		return AnyResultsInMarkerStore(markerStore) ? (
			<LayersControl.Overlay
				key={markerLayerType.id}
				name={markerLayerType.id}
				checked={layerCheckboxStates[markerLayerType.id!]}
			>
				<LayerGroup>{renderMiscMapMarkers(markerStore, currentMap!.id!)}</LayerGroup>
			</LayersControl.Overlay>
		) : null;
	}

	function RenderIntelLayerControlGroup(layerGroup: LayerGrouping) {
		var renderedIntelMarkers = renderIntelMapMarkers(currentMap!.id!, layerGroup.intelType!);
		return renderedIntelMarkers.length > 0 ? (
			<LayersControl.Overlay
				key={layerGroup.id}
				name={layerGroup.id}
				checked={layerCheckboxStates[layerGroup.id!]}
			>
				<LayerGroup>
					{renderedIntelMarkers}
				</LayerGroup>
			</LayersControl.Overlay>
		) : null
	}
};

