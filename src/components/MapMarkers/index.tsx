import { useContext, useState } from 'react';
import { LayerGroup, LayersControl } from 'react-leaflet';
import { Item } from '../../classes';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { StaticEggStore } from '../../data/easterEggs';
import { IntelStore, IntelType } from '../../data/intel';
import { StaticQuestStore } from '../../data/mainQuest';
import { MiscStore } from '../../data/misc';
import { PerkStore } from '../../data/perks';
import { MarkerLayerTypes, MarkerStore } from '../../data/types';
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
	const [isChecked, setIsChecked] = useState(true);

	const renderedAudioMarkers = renderIntelMapMarkers(currentMap!.id!, IntelType.Audio);
	const renderedArtifactMarkers = renderIntelMapMarkers(currentMap!.id!, IntelType.Artifact);
	const renderedDocumentMarkers = renderIntelMapMarkers(currentMap!.id!, IntelType.Docs);

	function AnyResultsInMarkerStore(markerStore: MarkerStore) {
		return markerStore[currentMap!.id!] && markerStore[currentMap!.id!].length > 0;
	}

	// TODO : Refactor this so it's neater. This is a hacky solution to force the layer controls to be rendered in order (I don't think this works)
	const renderOrderOfLayers = [
		renderedAudioMarkers.length > 0 ? (
			<LayersControl.Overlay
				name={MarkerLayerTypes.intelAudio.title}
				checked={isChecked /* TODO: SWAP WITH USER PREFS */}
			>
				<LayerGroup>
					{renderedAudioMarkers}
				</LayerGroup>
			</LayersControl.Overlay>
		) : null
		,
		renderedArtifactMarkers.length > 0 ? (
			<LayersControl.Overlay
				name={MarkerLayerTypes.intelArtifacts.title}
				checked={isChecked /* TODO: SWAP WITH USER PREFS */}
			>
				<LayerGroup>
					{renderedArtifactMarkers}
				</LayerGroup>
			</LayersControl.Overlay>
		) : null
		,
		renderedDocumentMarkers.length > 0 ? (
			<LayersControl.Overlay
				name={MarkerLayerTypes.intelDocuments.title}
				checked={isChecked /* TODO: SWAP WITH USER PREFS */}
			>
				<LayerGroup>
					{renderedDocumentMarkers}
				</LayerGroup>
			</LayersControl.Overlay>
		) : null
		,
		RenderLayerControlGroup(PerkStore, MarkerLayerTypes.perks),
		RenderLayerControlGroup(MiscStore, MarkerLayerTypes.misc),
		RenderLayerControlGroup(StaticEggStore, MarkerLayerTypes.easterEggs),
		RenderLayerControlGroup(StaticQuestStore, MarkerLayerTypes.mainQuest),
	]
	return (
		<>
			{renderOrderOfLayers[0]}
			{renderOrderOfLayers[1]}
			{renderOrderOfLayers[2]}
			{renderOrderOfLayers[3]}
			{renderOrderOfLayers[4]}
			{renderOrderOfLayers[5]}
			{renderOrderOfLayers[6]}


			{/* <LayersControl.Overlay checked name="Misc Markers">
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

	function RenderLayerControlGroup(markerStore: MarkerStore, markerLayerType: Item) {
		return AnyResultsInMarkerStore(markerStore) ? (
			<LayersControl.Overlay
				name={markerLayerType.title}
				checked={isChecked /* TODO: SWAP WITH USER PREFS */}
			>
				<LayerGroup>{renderMiscMapMarkers(markerStore, currentMap!.id!)}</LayerGroup>
			</LayersControl.Overlay>
		) : null;
	}
};

