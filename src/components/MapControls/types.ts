import { MapItem } from '../../classes';
import { MapDetails } from '../../data/maps/mapDetails';

// TODO: add game styles per game preferably {baseColor: string, textColor:string}
export enum Game {
	coldWar = 'Black Ops: Cold War',
	bo6 = 'Black Ops 6',
}
export interface MapGroupItem {
	mapName: string;
	mapLayers: MapItem[];
	game: Game;
}

export type MapGroupDictionary = Record<string, MapGroupItem>;

export const MapGroupings: MapGroupDictionary = {
	dieMachine_Group: {
		mapName: 'Die Maschine',
		mapLayers: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground],
		game: Game.coldWar,
	},
	firebaseZ_Group: {
		mapName: 'Firebase Z',
		mapLayers: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn],
		game: Game.coldWar,
	},
	mauerDerToten_Group: {
		mapName: 'Mauer Der Toten',
		mapLayers: [MapDetails.mauerDerTotenStreets, MapDetails.mauerDerToten],
		game: Game.coldWar,
	},
	forsaken_Group: {
		mapName: 'Forsaken',
		mapLayers: [MapDetails.forsaken, MapDetails.forsakenUnderground],
		game: Game.coldWar,
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
		game: Game.coldWar,
	},
	liberty_falls: {
		mapName: 'Liberty Falls',
		mapLayers: [MapDetails.libertyFalls],
		game: Game.bo6,
	},
	terminus_Group: {
		mapName: 'Terminus',
		mapLayers: [MapDetails.terminusBiolabs, MapDetails.terminusPrison],
		game: Game.bo6,
	},
};

export interface MapControlsProps {
	currentMap: MapItem;
}
