import { MapItem } from '../../classes';
import { MapGroupDefinitions, MapGroupGameKey } from '../../data/mapGroups';
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

const gameFromKey = (game: MapGroupGameKey) =>
	game === 'bo6' ? Game.bo6 : Game.coldWar;

const mapDetailsById = new Map<string, MapItem>();
Object.values(MapDetails)
	.filter(map => !!map.id)
	.forEach(map => {
		const mapId = map.id as string;
		if (!mapDetailsById.has(mapId)) {
			mapDetailsById.set(mapId, map);
		}
	});

export const MapGroupings: MapGroupDictionary = MapGroupDefinitions.reduce(
	(acc, group) => {
		acc[group.key] = {
			mapName: group.mapName,
			mapLayers: group.mapLayers
				.map(layer => mapDetailsById.get(layer.id))
				.filter((layer): layer is MapItem => !!layer),
			game: gameFromKey(group.game),
		};
		return acc;
	},
	{} as MapGroupDictionary
);

export interface MapControlsProps {
	currentMap: MapItem;
}
