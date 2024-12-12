import { Item, MiscMarker } from "../classes";
import { IconFileNames } from "./icons";
import { IntelType } from "./intel";

/////////////////////Misc/////////////////////////
export const MiscTypes = {
    //TODO STANDARDISE STRING
    essenceDrop: new Item({ title: 'Essence Drop' }),
    scrapHeap: new Item({ title: 'Scrap Heap' }),
    fishing: new Item({ title: 'Fishing', desc: 'Fish up to 3 times for a small reward each time.', icon: IconFileNames.fishing, }),
    rift: new Item({ title: 'Aether Rift', desc: 'Jump through to teleport and gain a random powerup.', icon: IconFileNames.rift, }),

    requiemRadio: new Item({ title: 'Requiem Radio', icon: IconFileNames.radio, layer: 'Markers', }),
    omegaRadio: new Item({ title: 'Omega Radio', icon: IconFileNames.radio }),
    maxisRadio: new Item({ title: 'Maxis Radio', icon: IconFileNames.radio }),
    radio: new Item({ title: 'Radio', icon: IconFileNames.radio }),
    exfillRadio: new Item({ title: 'Exfill Radio', icon: IconFileNames.radio }),
    trialComputer: new Item({ title: 'Trial Computer', desc: `Possible spawn, start and complete trials to earn rewards and intel.`, icon: IconFileNames.trialComputer, }),
    papMachine: new Item({ title: 'Pack-a-Punch', icon: IconFileNames.papMachine, }),
    mysteryBox: new Item({ title: 'Mystery Box Location', icon: IconFileNames.mysteryBox, }),
    wallbuy: new Item({ title: 'Wall Buy', icon: IconFileNames.wallbuy }),
    power: new Item({ title: 'Power Switch', icon: IconFileNames.power }),
    jumpPad: new Item({ title: 'Jump Pad', icon: IconFileNames.jumpPad }),
    landingPad: new Item({ title: 'Landing Pad', icon: IconFileNames.landingPad, }),
    airSupport: new Item({ title: 'Air Support Console' }),
    teleporter: new Item({ title: 'Teleporter', icon: IconFileNames.portal }),
    collector: new Item({ title: 'Collection Unit', icon: IconFileNames.reactor, }),
    reactor: new Item({ title: 'Aether Reactor', icon: IconFileNames.reactor }),
    craftingTable: new Item({ title: 'Crafting Table', icon: IconFileNames.craftingTable, }),
    workbench: new Item({ title: 'Workbench', icon: IconFileNames.workbench, desc: 'Used for quest item crafting.' }),
    arsenal: new Item({ title: 'Arsenal', icon: IconFileNames.arsenal }),
    ammoCrate: new Item({ title: 'Ammo Crate', icon: IconFileNames.ammoCrate }),
    trap: new Item({ title: 'Trap', icon: IconFileNames.trap }),
    zipline: new Item({ title: 'Zipline', icon: IconFileNames.zipline }),
    ziplineUp: new Item({ title: 'Zipline', icon: IconFileNames.ziplineUp }),
    ziplineDown: new Item({ title: 'Zipline', icon: IconFileNames.ziplineDown }),
    rampageInducer: new Item({ title: 'Rampage Inducer', icon: IconFileNames.rampageInducer, }),

    klausRadio: new Item({ title: 'Klaus recall radio', icon: IconFileNames.trap, }),
    aetherTunnel: new Item({ title: 'Aether Tunnel', icon: IconFileNames.tunnel, }),
    aetherCrystal: new Item({ title: 'Aether Crystal' }),

    //bo6 new markers
    wallArmor1: new Item({ title: 'Armor Wall Buy', icon: IconFileNames.armorWall1, desc: `Level 2 Vest\nCost: 4,000` }),
    wallArmor2: new Item({ title: 'Armor Wall Buy', icon: IconFileNames.armorWall2, desc: `Level 3 Vest\nCost: 10,000\n(Or 14,000 if lvl 2 vest not acquired)` }),
    door: new Item({ title: 'Door Buy', icon: IconFileNames.door }),
    doorPower: new Item({ title: 'Power Door', desc: 'Enable power to open this door.', icon: IconFileNames.doorPower, }),
    boatStation: new Item({ title: 'Boat Station', icon: IconFileNames.boatStation }),
    gobblegum: new Item({ title: 'Gobblegum Machine', icon: IconFileNames.gobblegum }),
    ampUnit: new Item({ title: 'A.M.P Unit', desc: `Protect for a short time to provide local power to the area.`, icon: IconFileNames.power }),
    elevator: new Item({ title: 'Elevator', icon: IconFileNames.jumpPad, }),
};

/////////////////////Markers/////////////////////////
export class LayerGrouping {
    id: LayerGroupingId;
    intelType: IntelType | null;
    constructor(id: LayerGroupingId, intelType: IntelType | null) {
        this.id = id;
        if (intelType) {
            this.intelType = intelType;
        } else {
            this.intelType = null;
        }
    }
}
export type LayerGroupingId =
    'Intel - Audio' |
    'Intel - Artifacts' |
    'Intel - Documents' |
    'Perks' |
    'Miscellaneous' |
    'Doors' |
    'Wall Buys' |
    'Easter Eggs' |
    'Main Quest';

type LayerGroupings = {
    intelAudio: LayerGrouping;
    intelArtifacts: LayerGrouping;
    intelDocuments: LayerGrouping;
    perks: LayerGrouping;
    misc: LayerGrouping;
    doors: LayerGrouping;
    wallbuy: LayerGrouping;
    easterEggs: LayerGrouping;
    mainQuest: LayerGrouping;
};

//TODO: combine this type with MarkerStore as this should really just be one single thing
export const MarkerLayerTypes: LayerGroupings = {
    intelAudio: new LayerGrouping('Intel - Audio', IntelType.Audio),
    intelArtifacts: new LayerGrouping('Intel - Artifacts', IntelType.Artifact),
    intelDocuments: new LayerGrouping('Intel - Documents', IntelType.Docs),
    perks: new LayerGrouping('Perks', null),
    misc: new LayerGrouping('Miscellaneous', null),
    doors: new LayerGrouping('Doors', null),
    wallbuy: new LayerGrouping('Wall Buys', null),
    easterEggs: new LayerGrouping('Easter Eggs', null),
    mainQuest: new LayerGrouping('Main Quest', null),
};

export interface MarkerStore {
    [key: string]: MiscMarker[];
}