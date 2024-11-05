import { LatLngExpression } from 'leaflet';
import { Faction, IntelType, Season } from '../data/intel';
// import { generalIcon, renderIntelMapMarkers, renderMiscMapMarkers } from "../helpers/markers";

/////////////////////Classes/////////////////////////

export interface IItem {
	id?: string;
	title: string;
	desc?: string;
	icon?: string;
	layer?: string;
}
export class Item {
	id?: string;
	title: string;
	desc?: string;
	icon?: string;
	layer?: string;

	constructor({ id, title, desc, icon, layer }: IItem) {
		this.id = id;
		this.title = title ?? '';
		this.desc = desc ?? '';
		this.icon = icon ?? 'general'; // Using MiscIconTypes.general here causes loop race condition
		this.layer = layer ?? 'MiscMarkers';
	}
}

export class BaseMarker extends Item {
	typeDesc: IntelType;
	loc: LatLngExpression;
	img?: string;
	linkedItem?: string;

	constructor({ id, title, desc, icon, layer, typeDesc, loc, img, linkedItem }: any) {
		super({ id, title, desc, icon, layer });
		this.typeDesc = typeDesc;
		this.loc = loc ?? [0, 0];
		this.img = img ?? '';
		this.linkedItem = linkedItem ?? '';
	}
}

export class IntelMarker extends BaseMarker {
	faction: Faction;
	season: Season;
	map: string;

	constructor({
		id,
		title,
		desc,
		icon,
		layer,
		typeDesc,
		loc,
		faction,
		season,
		img,
		map,
	}: any) {
		super({ id, title, desc, icon, layer, typeDesc, loc, img });
		this.faction = faction;
		this.season = season;
		this.map = map;
	}
}

export class MiscMarker extends BaseMarker {
	constructor(
		id: string,
		{ title, desc, icon }: any,
		loc: LatLngExpression,
		optional?: {
			uniqueDesc?: string;
			img?: string;
			linkedItem?: string;
		}
	) {
		desc = optional?.uniqueDesc ? `${optional?.uniqueDesc}\n${desc}` : desc;
		super({ id, title, desc, icon, loc, typeDesc: 'Misc', img: optional?.img, linkedItem: optional?.linkedItem });
	}
}

export class MiscType extends Item {
	constructor({ id, title, desc, icon, layer }: any) {
		super({ id, title, desc, icon, layer });
	}
}

export class MapItem extends Item {
	get mapCanRender(): boolean {
		return this.mapOverlay !== undefined && this.mapOverlay !== null;
	}
	mapOverlay?: JSX.Element;
	intelMapMarkers?: JSX.Element[];
	miscMapMarkers?: JSX.Element[];
	constructor(id, { title, desc, icon, layer, mapOverlay }: any) {
		super({ id, title, desc, icon, layer });
		this.mapOverlay = mapOverlay;
	}
}
