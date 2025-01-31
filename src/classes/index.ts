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
	linkedItems?: string;
	externalLinks?: string;
	stepNumber?: number;

	constructor({ id, title, desc, icon, layer, typeDesc, loc, img, linkedItems, externalLinks, stepNumber }: any) {
		super({ id, title, desc, icon, layer });
		this.typeDesc = typeDesc;
		this.loc = loc ?? [0, 0];
		this.img = img ?? '';
		this.linkedItems = linkedItems ?? '';
		this.externalLinks = externalLinks ?? '';
		this.stepNumber = stepNumber ?? null;
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
			uniqueTitle?: string;
			uniqueDesc?: string;
			img?: string;
			linkedItems?: string;
			externalLinks?: string;
			stepNumber?: number;
		}
	) {
		var newTitle = optional?.uniqueTitle ? optional?.uniqueTitle : title;
		desc = optional?.uniqueDesc ? `${desc}\n${optional?.uniqueDesc}` : desc;
		super({ id, title: newTitle, desc, icon, loc, typeDesc: title, img: optional?.img, linkedItems: optional?.linkedItems, externalLinks: optional?.externalLinks });
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
