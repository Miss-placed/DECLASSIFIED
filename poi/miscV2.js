// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it's very very unlikely but still possible)

// Non collectible items that need icons on the respective maps
var miscPOI = {};
class Marker {
    constructor(item, loc, uniqueDesc) {
        if (item instanceof Item) {
            this.title = item.title ?? "";
            this.desc = item.desc ?? "";
            this.icon = item.icon ?? generalIcon;
        }
        //Override static description with unique description
        if (uniqueDesc) this.desc = uniqueDesc;
        // Could do map in the future depending on how the data structure needs to change
        /* this.map = map; */
        this.loc = loc ?? [0, 0];
    }
}

/////////////////////Round Based Misc Items/////////////////////////
miscPOI[mapStrings.dieMaschine] = [/*TODO*/];
miscPOI[mapStrings.firebaseZ] = [/*TODO*/];
miscPOI[mapStrings.mauerDerToten] = [/*TODO*/];

/////////////////////Outbreak Misc Items/////////////////////////
miscPOI[mapStrings.zoo] = [
    new Marker(miscTypes.dementedEcho, [-150.26326919666607, 161.5]),
    new Marker(miscTypes.dementedEcho, [-174.31503434714938, 148.222502654611]), //issue #8 by markisdabomb214
    new Marker(miscTypes.dementedEcho, [-154.4547581108373, 166.8768944269258]), //issue #7 by markisdabomb214
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-38.27518620322752, 135]), //done
    new Marker(miscTypes.rift, [-152.2630563929775, 234.25]), //done
    new Marker(miscTypes.rift, [-195.7584279127505, 90]), //done
    new Marker(miscTypes.rift, [-111.51739226813265, 21.75]), //done
    new Marker(miscTypes.fishing, [-131.5152642312467, 172.75]), //done
    new Marker(miscTypes.fishing, [-169.76119436070226, 166.25]), //done
    new Marker(miscTypes.radio, [-64.77236655435361, 138.75], "Requiem Radio"), //done
    new Marker(miscTypes.radio, [-197.50824170952296, 188], "Omega Radio"), //done
    new Marker(miscTypes.radio, [-124.51600904415677, 59], "Maxis Radio"), //done
    new Marker(miscTypes.monkey, [-77.15817501439264, 174.77497502497502], "Midway up the stairs in the book nook."),
    new Marker(miscTypes.monkey, [-88.66479562464018, 131.2971467308202], "In the corner on a green cabinet."),
    new Marker(miscTypes.monkey, [-153.7372985031664, 139.75984347285367], "Between a wall and a rock."),
    new Marker(miscTypes.monkey, [-122.72992227979275, 58.785806030703995], "In the middle of the large shelves."),
    new Marker(miscTypes.projector, [-135.17490644789868, 147.82830052600463]),
];
miscPOI[mapStrings.duga] = [
    new Marker(miscTypes.dementedEcho, [-146.8813286930307, 129]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-125.51568983862387, 243]),
    new Marker(miscTypes.rift, [-186.25922592658273, 96.5]),
    new Marker(miscTypes.rift, [-100.76832328427027, 15.25]),
    new Marker(miscTypes.rift, [-44.274334988473136, 130.25]),
    new Marker(miscTypes.fishing, [-210.25667228231958, 179.75]),
    new Marker(miscTypes.fishing, [-160.01201897499558, 80.25]),
    new Marker(miscTypes.fishing, [-194.25837471182834, 130.5]),
    new Marker(miscTypes.fishing, [-112.26709966306083, 32.25]),
    new Marker(miscTypes.radio, [-146.90867008778153, 131.25], "Requiem Radio"),
    new Marker(miscTypes.radio, [-109.76949370455758, 130.75], "Omega Radio"),
    new Marker(miscTypes.radio, [-170.50135606933853, 179.25], "Maxis Radio"),
    new Marker(miscTypes.monkey, [-164.63142350407898, 121], "On top of the small building"),
    new Marker(miscTypes.monkey, [-86.25143297302276, 107.875], "On top of a stack of barrels."),
    new Marker(miscTypes.monkey, [-76.7606662776204, 180.25], "At the back on top of the bus stop."),
    new Marker(miscTypes.monkey, [-202.37940015960277, 165], "Behind the wall"),
    new Marker(miscTypes.projector, [-169.37629954335875, 177.28125]),
];
miscPOI[mapStrings.ruka] = [
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-138.26643465153398, 224.75]),
    new Marker(miscTypes.rift, [-33.77545220783827, 122.25]),
    new Marker(miscTypes.rift, [-112.4445875369862, 31]),
    new Marker(miscTypes.rift, [-225.24684057609355, 102]),
    new Marker(miscTypes.redRift, [-133.6321799077851, 44.25]), //done
    new Marker(miscTypes.fishing, [-133.70571013511105, 159.5]),
    new Marker(miscTypes.fishing, [-109.94470339738334, 113.25]),
    new Marker(miscTypes.fishing, [-111.44539855976613, 50.5]),
    new Marker(miscTypes.radio, [-91.44099586467506, 168], "Requiem Radio"),
    new Marker(miscTypes.radio, [-179.73189458486328, 112.25], "Omega Radio"),
    new Marker(miscTypes.radio, [-121.4548991123311, 63], "Maxis Radio"),
    new Marker(miscTypes.monkey, [-192.98803518591137, 74], "On the third shelf next to three boxed."),
    new Marker(miscTypes.monkey, [-99.69481925778047, 172.5], "Behind some pallets next to the train platform."),
    new Marker(miscTypes.monkey, [-72.6359666318105, 65.5], "Leaning against the broken down car."),
    new Marker(miscTypes.monkey, [-136.84510939439616, 224.15625], "At the end of the railroad, under rafters."),
    new Marker(miscTypes.projector, [0, 0]),
];
miscPOI[mapStrings.alpine] = [
    new Marker(miscTypes.dementedEcho, [-72.27130253591062, 113.75]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-50.63711429331442, 114.375]),
    new Marker(miscTypes.rift, [-127.50909514098245, 19.25]),
    new Marker(miscTypes.rift, [-164.50515827274342, 212.875]),
    new Marker(miscTypes.rift, [-62.01198129100904, 211.125]),
    new Marker(miscTypes.fishing, [-92.51914789856357, 45.75]),
    new Marker(miscTypes.radio, [-173.76050274871432, 101.5], "Requiem Radio"),
    new Marker(miscTypes.radio, [-122.75707350594077, 71.625], "Omega Radio"),
    new Marker(miscTypes.radio, [-187.49270371519773, 173.8125], "Maxis Radio"),
    new Marker(miscTypes.monkey, [-127.75906854052137, 34.625], "On the balcony against the wall."),
    new Marker(miscTypes.monkey, [-186.87777753147722, 97.5], "Upstairs on a shelf."),
    new Marker(miscTypes.monkey, [-191.0023386238695, 169.75], "On top of some wall mounted cases."),
    new Marker(miscTypes.monkey, [-51.389667937577585, 106.125], "Behind the porta-potties, by the gasoline tank."),
    new Marker(miscTypes.projector, [0, 0]),
];
miscPOI[mapStrings.golova] = [
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-173.26079535378614, 64.5]),
    new Marker(miscTypes.rift, [-145.51054486611102, 211.375]),
    new Marker(miscTypes.rift, [-43.52139785422946, 150.5]),
    new Marker(miscTypes.rift, [-215.2513145061181, 117.75]),
    new Marker(miscTypes.redRift, [-209.7518143731158, 165.8125]),
    new Marker(miscTypes.fishing, [-56.46100796505169, 118.5]),
    new Marker(miscTypes.fishing, [-55.960885570640414, 129]),
    new Marker(miscTypes.fishing, [-90.2192695878133, 49.75]),
    new Marker(miscTypes.radio, [-118.76510462848023, 59.75], "Requiem Radio"),
    new Marker(miscTypes.radio, [-172.7593589288881, 157], "Omega Radio"),
    new Marker(miscTypes.radio, [-120.51491842525272, 179.5], "Maxis Radio"),
    new Marker(miscTypes.monkey, [-166.26154016669622, 75.5], "In the elevated building behind a chain link fence."),
    new Marker(miscTypes.monkey, [-80.27069072530591, 113.5], "Up in the rafters."),
    new Marker(miscTypes.monkey, [-202.7544533605249, 169.75], "On a pillar at the top of the scaffolding."),
    new Marker(miscTypes.monkey, [-163.25865623337472, 208.375], "On the top shelf."),
    new Marker(miscTypes.projector, [-167.4964329090327, 173.8125]),
];
miscPOI[mapStrings.sanatorium] = [
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.dementedEcho, [0, 0]),
    new Marker(miscTypes.rift, [-124.7678976768931, 204.5]),
    new Marker(miscTypes.rift, [-129.01744546905482, 7.75]),
    new Marker(miscTypes.rift, [-206.5091993261217, 120.5]),
    new Marker(miscTypes.rift, [-60.27476059585035, 108]),
    new Marker(miscTypes.fishing, [-145.76566323816283, 219.75],),
    new Marker(miscTypes.fishing, [-86.2719941478986, 136.75],),
    new Marker(miscTypes.fishing, [-109.26954690547973, 135.75],),
    new Marker(miscTypes.fishing, [-133.01701986167762, 166],),
    new Marker(miscTypes.radio, [-179.76204557545668, 190], "Requiem Radio"),
    new Marker(miscTypes.radio, [-98.27071732576701, 106], "Omega Radio"),
    new Marker(miscTypes.radio, [-171.75627549210853, 70.125], "Maxis Radio"),
    new Marker(miscTypes.monkey, [-97.2708237276113, 104.75], "In the Admins office on a bookshelf floor 2."),
    new Marker(miscTypes.monkey, [-191.12750598510377, 139.1875], "Up in the rafters."),
    new Marker(miscTypes.monkey, [-123.446868904061, 174], "Underneath the bridge, on a support pillar."),
    new Marker(miscTypes.monkey, [-158.75765871608442, 33.875], "On the top shelf above the bed."),
    new Marker(miscTypes.projector, [-73.77332417095232, 89.75]),
    new Marker(worldEventTypes.orb, [-59.27484039723356, 81.75]),
    //Don't really need this for now, not until we re-work easter eggs
    //new Marker(new Item("Chopper Gunner", "Hold out until the wave is dead to continue with the Easter Egg"), [-170.51300319205535, 39.25])
];
miscPOI[mapStrings.collateral] = [/*TODO*/];
miscPOI[mapStrings.armada] = [/*TODO*/];