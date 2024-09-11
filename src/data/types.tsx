import { Item, MiscMarker } from "../classes";
import { IconFileNames } from "./icons";

/////////////////////Misc/////////////////////////
export const MiscTypes = {
    dementedEcho: new Item({ title: 'Demented Echo', desc: 'Destroy it before it touches you to get a reward.', icon: IconFileNames.demented, }),
    rift: new Item({ title: 'Aether Rift', desc: 'Jump through to teleport and gain a random powerup.', icon: IconFileNames.rift, }),
    redRift: new Item({ title: 'Red Aether Rift', desc: 'Jump through all the rifts to continue the Easter Egg', icon: IconFileNames.redRift, }),
    radio: new Item({ title: 'Radio', icon: IconFileNames.radio }),
    exfillRadio: new Item({ title: 'Exfill Radio', icon: IconFileNames.radio }),
    //TODO STANDARDISE STRING
    requiemRadio: new Item({ title: 'Requiem Radio', icon: IconFileNames.radio, layer: 'Markers', }),
    omegaRadio: new Item({ title: 'Omega Radio', icon: IconFileNames.radio }),
    maxisRadio: new Item({ title: 'Maxis Radio', icon: IconFileNames.radio }),
    monkey: new Item({ title: 'Stone Monkey', icon: IconFileNames.monkey }),
    projector: new Item({ title: 'Projector', desc: 'The projector for the Main Quest', icon: IconFileNames.projector, }), signal: new Item({ title: 'Signal' }), fishing: new Item({ title: 'Fishing', desc: 'Fish up to 3 times for a small reward each time.', icon: IconFileNames.fishing, }),
    essenceDrop: new Item({ title: 'Essence Drop' }),
    scrapHeap: new Item({ title: 'Scrap Heap' }),

    trialComputer: new Item({ title: 'Trial Computer', icon: IconFileNames.trialComputer, }),
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
    worldEvents: new Item({ id: 'worldEvents', title: 'World Events' }),
};

//TODO: Decide the structure for how we store and retrieve EE steps (maybe new datastore)
/*  
    These are just the initial labels for the easter eggs.
    We will need to break these down further and make step-by-step markers 
*/

// Gonna have to add a way to bring through the full description along with the unique description from the misc markers
export const OutbreakEE2Steps = {
    step2Helicopter: new Item({ title: 'Crashed Helicopter', desc: `The transport chopper that the Omega Eight were using is located in the "Carved Hills", located south of the lone shack, having crashed by unknown means. Nearing it will spawn a horde needs to be eliminated, as one of the corpses is holding a message from Hugo Jager about where the surviving members of the crash went.`, }),
    step3Orb: new Item({ title: 'Red Aetherial Orb', desc: 'The Aetherium Orb can spawn within three places and is visually distinct, having a darker hue of red and will not produce Essence upon being damaged. When damaged, it will flee like the standard variant for a total of three times before it will flee to hover over the Recon Rover to where it will stay above, unwilling to enter it.', icon: IconFileNames.orb, }),
};

export interface IMisc {
    [key: string]: MiscMarker[];
}