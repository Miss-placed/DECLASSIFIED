import { MapItem } from '../../classes';
import { MapDetails } from '../../data/mapDetails';

export interface MapGroupItem {
	mapName: string;
	mapLayers: MapItem[];
}

export type MapGroupDictionary = Record<string, MapGroupItem>;

export const MapGroupings: MapGroupDictionary = {
	dieMachine_Group: {
		mapName: 'Die Maschine',
		mapLayers: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground],
	},
	firebaseZ_Group: {
		mapName: 'Firebase Z',
		mapLayers: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn],
	},
	mauerDerToten_Group: {
		mapName: 'Mauer Der Toten',
		mapLayers: [MapDetails.mauerDerTotenStreets, MapDetails.mauerDerToten],
	},
	forsaken_Group: {
		mapName: 'Forsaken',
		mapLayers: [MapDetails.forsaken, MapDetails.forsakenUnderground],
	},
	outbreak_Group: {
		mapName: 'Outbreak',
		mapLayers: [
			MapDetails.zoo,
			MapDetails.ruka,
			MapDetails.duga,
			MapDetails.alpine,
			MapDetails.golova,
			MapDetails.sanatorium,
			MapDetails.collateral,
			MapDetails.armada,
		],
	},
	liberty_falls: {
		mapName: 'Liberty Falls',
		mapLayers: [MapDetails.libertyFalls],
	},
};

export interface MapControlsProps {
	currentMap: MapItem;
}
