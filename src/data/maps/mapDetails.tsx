import { MapItem } from '../../classes';
import { MapIds } from '../../components/MapControls/MapIds';
import { allGameMapSVGs } from './mapSVGs';

export const GetMapById = (mapId: string) =>
	Object.values(MapDetails).find(map => map.id === mapId);
export const GetMapByTitle = (mapId: string) =>
	Object.keys(MapDetails).find(
		mapString => MapDetails[mapString].title === mapId
	);

export const MapDetails = {
	allOutbreakMaps: new MapItem(MapIds.allOutbreakMaps, {
		title: 'All Outbreak Maps',
	}),
	//outbreak
	zoo: new MapItem(MapIds.zoo, { title: 'Zoo', mapOverlay: allGameMapSVGs.zoo }),
	ruka: new MapItem(MapIds.ruka, { title: 'Ruka', mapOverlay: allGameMapSVGs.ruka }),
	duga: new MapItem(MapIds.duga, { title: 'Duga', mapOverlay: allGameMapSVGs.duga }),
	alpine: new MapItem(MapIds.alpine, {
		title: 'Alpine',
		mapOverlay: allGameMapSVGs.alpine,
	}),
	golova: new MapItem(MapIds.golova, {
		title: 'Golova',
		mapOverlay: allGameMapSVGs.golova,
	}),
	sanatorium: new MapItem(MapIds.sanatorium, {
		title: 'Sanatorium',
		mapOverlay: allGameMapSVGs.sanatorium,
	}),
	collateral: new MapItem(MapIds.collateral, {
		title: 'Collateral',
		mapOverlay: allGameMapSVGs.collateral,
	}),
	armada: new MapItem(MapIds.armada, {
		title: 'Armada',
		mapOverlay: allGameMapSVGs.armada,
	}),
	//roundbased
	dieMaschine: new MapItem(MapIds.dieMaschine, {
		title: 'Die Maschine',
		mapOverlay: allGameMapSVGs.dieMaschine,
	}),
	dieMaschineUnderground: new MapItem(MapIds.dieMaschineUnderground, {
		title: 'Die Maschine Underground',
		mapOverlay: allGameMapSVGs.dieMaschineUnderground,
	}),
	firebaseZ: new MapItem(MapIds.firebaseZ, {
		title: 'Firebase Z',
		mapOverlay: allGameMapSVGs.firebaseZ,
	}),
	firebaseZSpawn: new MapItem(MapIds.firebaseZSpawn, {
		title: 'Firebase Z Spawn',
		mapOverlay: allGameMapSVGs.firebaseZSpawn,
	}),
	mauerDerToten: new MapItem(MapIds.mauerDerToten, {
		title: 'Mauer Der Toten Underground',
		mapOverlay: allGameMapSVGs.mauerDerToten,
	}),
	mauerDerTotenStreets: new MapItem(MapIds.mauerDerTotenStreets, {
		title: 'Mauer Der Toten',
		mapOverlay: allGameMapSVGs.mauerDerTotenStreets,
	}),
	forsaken: new MapItem(MapIds.forsaken, {
		title: 'Forsaken',
		mapOverlay: allGameMapSVGs.forsaken,
	}),
	forsakenUnderground: new MapItem(MapIds.forsakenUnderground, {
		title: 'Forsaken Underground',
		mapOverlay: allGameMapSVGs.forsakenUnderground,
	}),
	//onslaught
	miami: new MapItem(MapIds.miami, { title: 'Miami' }),
	satellite: new MapItem(MapIds.satellite, { title: 'Satellite' }),
	moscow: new MapItem(MapIds.moscow, { title: 'Moscow' }),
	nuketown: new MapItem(MapIds.nuketown, { title: 'Nuketown' }),
	thePines: new MapItem(MapIds.thePines, { title: 'The Pines' }),
	express: new MapItem(MapIds.express, { title: 'Express' }),
	rush: new MapItem(MapIds.rush, { title: 'Rush' }),
	echelon: new MapItem(MapIds.echelon, { title: 'Echelon' }),
	driveIn: new MapItem(MapIds.driveIn, { title: 'Drive-In' }),
	cartel: new MapItem(MapIds.cartel, { title: 'Cartel' }),
	crossroads: new MapItem(MapIds.crossroads, { title: 'Crossroads' }),
	raid: new MapItem(MapIds.raid, { title: 'Raid' }),
	apocalypse: new MapItem(MapIds.apocalypse, { title: 'Apocalypse' }),
	yamantau: new MapItem(MapIds.yamantau, { title: 'Yamantau' }),
	standoff: new MapItem(MapIds.standoff, { title: 'Standoff' }),
	collateralOn: new MapItem(MapIds.collateralOn, {
		title: 'Collateral (Onslaught)',
	}),
	checkmate: new MapItem(MapIds.checkmate, { title: 'Checkmate' }),
	garrison: new MapItem(MapIds.garrison, { title: 'Garrison' }),
	deprogram: new MapItem(MapIds.deprogram, { title: 'Deprogram' }),
	//bo6
	libertyFalls: new MapItem(MapIds.libertyFalls, {
		title: 'Liberty Falls',
		mapOverlay: allGameMapSVGs.libertyFalls,
	}),
	terminusBiolabs: new MapItem(MapIds.terminusBiolabs, {
		title: 'Terminus Biolabs & Islands',
		mapOverlay: allGameMapSVGs.terminus_biolab,
	}),
	terminusPrison: new MapItem(MapIds.terminusPrison, {
		title: 'Terminus Prison',
		mapOverlay: allGameMapSVGs.terminus_prison,
	}),
	terminusIslands: new MapItem(MapIds.terminusIslands, {
		title: 'Terminus Islands',// TODO: add a way of showing the same marker over multiple map layers e.g. terminus and its islands vs the main island
	}),
	citadelle: new MapItem(MapIds.citadelle, {
		title: 'Citadelle Des Morts',
		mapOverlay: allGameMapSVGs.citadelle,
	}),
	tomb: new MapItem(MapIds.tomb, {
		title: 'The Tomb Spawn',
		mapOverlay: allGameMapSVGs.tomb,
	}),
};

export const allOutbreakMapsArr: string[] = [
	MapIds.zoo,
	MapIds.ruka,
	MapIds.duga,
	MapIds.alpine,
	MapIds.golova,
	MapIds.sanatorium,
	MapIds.collateral,
	MapIds.armada
];
