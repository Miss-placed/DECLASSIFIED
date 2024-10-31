import { MapItem } from '../../classes';
import { MapIds } from '../intel';
import { mapSVGs } from './mapSVGs';

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
	zoo: new MapItem(MapIds.zoo, { title: 'Zoo', mapOverlay: mapSVGs.zoo }),
	ruka: new MapItem(MapIds.ruka, { title: 'Ruka', mapOverlay: mapSVGs.ruka }),
	duga: new MapItem(MapIds.duga, { title: 'Duga', mapOverlay: mapSVGs.duga }),
	alpine: new MapItem(MapIds.alpine, {
		title: 'Alpine',
		mapOverlay: mapSVGs.alpine,
	}),
	golova: new MapItem(MapIds.golova, {
		title: 'Golova',
		mapOverlay: mapSVGs.golova,
	}),
	sanatorium: new MapItem(MapIds.sanatorium, {
		title: 'Sanatorium',
		mapOverlay: mapSVGs.sanatorium,
	}),
	collateral: new MapItem(MapIds.collateral, {
		title: 'Collateral',
		mapOverlay: mapSVGs.collateral,
	}),
	armada: new MapItem(MapIds.armada, {
		title: 'Armada',
		mapOverlay: mapSVGs.armada,
	}),
	//roundbased
	dieMaschine: new MapItem(MapIds.dieMaschine, {
		title: 'Die Maschine',
		mapOverlay: mapSVGs.dieMaschine,
	}),
	dieMaschineUnderground: new MapItem(MapIds.dieMaschineUnderground, {
		title: 'Die Maschine Underground',
		mapOverlay: mapSVGs.dieMaschine_underground,
	}),
	firebaseZ: new MapItem(MapIds.firebaseZ, {
		title: 'Firebase Z',
		mapOverlay: mapSVGs.firebaseZ,
	}),
	firebaseZSpawn: new MapItem(MapIds.firebaseZSpawn, {
		title: 'Firebase Z Spawn',
		mapOverlay: mapSVGs.firebaseZ_spawn,
	}),
	mauerDerToten: new MapItem(MapIds.mauerDerToten, {
		title: 'Mauer Der Toten Underground',
		mapOverlay: mapSVGs.mauerDerToten,
	}),
	mauerDerTotenStreets: new MapItem(MapIds.mauerDerTotenStreets, {
		title: 'Mauer Der Toten',
		mapOverlay: mapSVGs.mauerDerToten_streets,
	}),
	forsaken: new MapItem(MapIds.forsaken, {
		title: 'Forsaken',
		mapOverlay: mapSVGs.forsaken,
	}),
	forsakenUnderground: new MapItem(MapIds.forsakenUnderground, {
		title: 'Forsaken Underground',
		mapOverlay: mapSVGs.forsaken_underground,
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
		mapOverlay: mapSVGs.liberty_falls,
	}),
	terminusBiolabs: new MapItem(MapIds.terminusBiolabs, {
		title: 'Terminus Biolabs',
		mapOverlay: mapSVGs.terminus_biolab,
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
	MapIds.armada,
];
