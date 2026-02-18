import { MapIds } from '../components/MapControls/MapIds';

export type MapGroupGameKey = 'coldWar' | 'bo6';

export interface MapLayerDefinition {
	id: string;
	title: string;
}

export interface MapGroupDefinition {
	key: string;
	mapName: string;
	game: MapGroupGameKey;
	mapLayers: MapLayerDefinition[];
}

export const MapGroupDefinitions: MapGroupDefinition[] = [
	{
		key: 'dieMachine_Group',
		mapName: 'Die Maschine',
		game: 'coldWar',
		mapLayers: [
			{ id: MapIds.dieMaschine, title: 'Die Maschine' },
			{ id: MapIds.dieMaschineUnderground, title: 'Die Maschine Underground' },
		],
	},
	{
		key: 'firebaseZ_Group',
		mapName: 'Firebase Z',
		game: 'coldWar',
		mapLayers: [
			{ id: MapIds.firebaseZ, title: 'Firebase Z' },
			{ id: MapIds.firebaseZSpawn, title: 'Firebase Z Spawn' },
		],
	},
	{
		key: 'mauerDerToten_Group',
		mapName: 'Mauer Der Toten',
		game: 'coldWar',
		mapLayers: [
			{ id: MapIds.mauerDerTotenStreets, title: 'Mauer Der Toten' },
			{
				id: MapIds.mauerDerToten,
				title: 'Mauer Der Toten Underground',
			},
		],
	},
	{
		key: 'forsaken_Group',
		mapName: 'Forsaken',
		game: 'coldWar',
		mapLayers: [
			{ id: MapIds.forsaken, title: 'Forsaken' },
			{ id: MapIds.forsakenUnderground, title: 'Forsaken Underground' },
		],
	},
	{
		key: 'outbreak_Group',
		mapName: 'Outbreak',
		game: 'coldWar',
		mapLayers: [
			{ id: MapIds.zoo, title: 'Zoo' },
			{ id: MapIds.ruka, title: 'Ruka' },
			{ id: MapIds.duga, title: 'Duga' },
			{ id: MapIds.alpine, title: 'Alpine' },
			{ id: MapIds.golova, title: 'Golova' },
			{ id: MapIds.sanatorium, title: 'Sanatorium' },
			{ id: MapIds.collateral, title: 'Collateral' },
			{ id: MapIds.armada, title: 'Armada' },
		],
	},
	{
		key: 'libertyFalls',
		mapName: 'Liberty Falls',
		game: 'bo6',
		mapLayers: [{ id: MapIds.libertyFalls, title: 'Liberty Falls' }],
	},
	{
		key: 'terminus_Group',
		mapName: 'Terminus',
		game: 'bo6',
		mapLayers: [
			{ id: MapIds.terminusBiolabs, title: 'Terminus Biolabs & Islands' },
			{ id: MapIds.terminusPrison, title: 'Terminus Prison' },
		],
	},
	{
		key: 'citadelle_Group',
		mapName: 'Citadelle Des Morts',
		game: 'bo6',
		mapLayers: [{ id: MapIds.citadelle, title: 'Citadelle Des Morts' }],
	},
	{
		key: 'tomb_Group',
		mapName: 'The Tomb',
		game: 'bo6',
		mapLayers: [{ id: MapIds.tomb, title: 'The Tomb' }],
	},
	{
		key: 'shatteredVeil_Group',
		mapName: 'Shattered Veil',
		game: 'bo6',
		mapLayers: [{ id: MapIds.shatteredVeil, title: 'Shattered Veil' }],
	},
	{
		key: 'reckoning_Group',
		mapName: 'Reckoning',
		game: 'bo6',
		mapLayers: [
			{ id: MapIds.reckoning, title: 'Reckoning' },
			{ id: MapIds.reckoningBossArena, title: 'Reckoning Boss Area' },
		],
	},
];

export const getMapTitleFromGroupDefinitions = (mapId: string | undefined) => {
	if (!mapId) return 'Unknown Map';
	for (const group of MapGroupDefinitions) {
		const layer = group.mapLayers.find(mapLayer => mapLayer.id === mapId);
		if (layer) return layer.title;
	}
	return mapId;
};
