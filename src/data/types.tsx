import { Item, MiscMarker } from "../classes";
import { IconFileNames } from "./icons";

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
    wallArmor: new Item({ title: 'Armour Wall Buy', icon: IconFileNames.armourWall, }),
    door: new Item({ title: 'Door Buy', icon: IconFileNames.door }),
    doorPower: new Item({ title: 'Power Door', desc: 'enable power to open this door', icon: IconFileNames.doorPower, }),
    gumball: new Item({ title: 'Gobblegum Machine', icon: IconFileNames.gobblegum }),
};

/////////////////////Markers/////////////////////////
export const MarkerLayerTypes = {
    intelAudio: new Item({ id: 'intel', title: 'Intel - Audio Logs' }),
    intelArtifacts: new Item({ id: 'intel', title: 'Intel - Artifacts' }),
    perks: new Item({ id: 'perks', title: 'Perks' }),
    misc: new Item({ id: 'misc', title: 'Miscellaneous' }),
    easterEggs: new Item({ id: 'easterEggs', title: 'Easter Eggs' }),
};

export interface IMisc {
    [key: string]: MiscMarker[];
}