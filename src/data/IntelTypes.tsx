import { LatLngExpression } from 'leaflet';
import { MapId } from '../components/MapControls/MapIds';

interface IDefaultPOIData {
    challenge: string;
    special: string;
    chests: string;
    onslaught: string;
    nullLoc: LatLngExpression;
}

export const DefaultPOIData: IDefaultPOIData = {
    challenge: `Obtained through the Challenge Machine`,
    special: `Dropped from Special/Elite kills`,
    chests: `Dropped from Special/Elite kills or golden chests`,
    onslaught: `Dropped during the onslaught gamemode.`,
    nullLoc: [0, 0],
};

export enum Faction {
    Requiem = `Requiem`,
    Omega = `Omega`,
    Maxis = `Maxis`,
    Dark_Aether = `Dark Aether`,
    None = `None`
}

export enum Season {
    Preseason = `Preseason`,
    Onslaught = `Onslaught`,
    Season1 = `Season 1`,
    Season2 = `Season 2`,
    Season3 = `Season 3`,
    Season4 = `Season 4`,
    Season5 = `Season 5`,
    Season6 = `Season 6`
}

export enum IntelType {
    Audio = `Audio Logs`,
    Docs = `Documents`,
    Radio = `Radio Transmissions`,
    Artifact = `Artifacts`
}

export enum MiscIconTypes {
    general = `general`,

    ammoCrate = `ammo_crate`,
    arsenal = `arsenal`,
    craftingTable = `crafting_table`,
    demented = `demented`,
    fishing = `fishing`,
    monkey = `monkey`,
    mysteryBox = `mystery_box`,
    papMachine = `pap_machine`,
    radio = `radio`,
    redRift = `tunnel_red`,
    rift = `tunnel_pink`,
    trialComputer = `trial_computer`,
    wallbuy = `wallbuy`,
    wunderFizz = `wunder_fizz`,
    zipline = `zipline`,
    ziplineUp = `ziplineUp`,
    ziplineDown = `ziplineDown`,
    tunnel = `tunnel`,
    tunnelRed = `tunnel_red`,
    tunnelPink = `tunnel_pink`,
    portal = `portal`,

    rampageInducer = `rampage_inducer`,

    staminUp = `stamin_up`,
    quickRevive = `quick_revive`,
    juggernog = `juggernog`,
    speedCola = `speed_cola`,
    muleKick = `mule_kick`,
    elementalPop = `elemental_pop`,
    deathPerception = `death_perception`,
    tombstoneSoda = `tombstone_soda`,
    deadshotDaiquiri = `deadshot_daiquiri`,
    phdSlider = `phd`
}

export interface IIntelItem {
    readonly id: string;
    readonly faction: Faction;
    readonly season: Season;
    readonly typeDesc: IntelType;
    readonly loc: LatLngExpression;
    readonly map: string | undefined;
    readonly title: string;
    readonly desc: string;
    readonly img?: string;
}

export class IntelItem implements IIntelItem {
    id!: string;
    faction!: Faction;
    season!: Season;
    typeDesc!: IntelType;
    loc!: LatLngExpression;
    map!: MapId | undefined;
    title!: string;
    desc!: string;
    img?: string | undefined;

    constructor(id, faction, season, typeDesc, loc, map, title, desc, img = ``) {
        this.id = id;
        this.faction = faction;
        this.season = season;
        this.typeDesc = typeDesc;
        this.loc = loc;
        this.map = map;
        this.title = title;
        this.desc = desc;
        this.img = img;
    }
}
