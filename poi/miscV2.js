// Used to generate IDs for all of the below misc markers:
// https://nanoid.jormaechea.com.ar/?alphabet=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&length=5
// Please use the existing settings included in the URL and check for duplicate ids when possible (it's very very unlikely but still possible)

// Non collectible items that need icons on the respective maps
let miscPOI = {};

/////////////////////Round Based Misc Items/////////////////////////
miscPOI[mapStrings.dieMaschine] = [
    new Marker("", miscTypes.craftingTable, [-136.5233027437026, 156.62646537136334]),
    new Marker("", miscTypes.rampageInducer, [-162.38736070793146, 148.98356235601133]),
    
    new Marker("", miscTypes.ammoCrate, [-169.38704934919, 146.75]),
    new Marker("", miscTypes.mysteryBox, [-152.76796516527764, 172]),
    new Marker("", miscTypes.radio, [-134.72470912538628, 168.75], "Exfill Radio"),
    new Marker("", miscTypes.radio, [-161.4085840200393, 128.125], "Requiem Radio"),

    new Marker("", miscTypes.wallbuy, [-125.44612674407716, 177.5], "1911"),
    new Marker("", miscTypes.wallbuy, [-117.64812482442176, 127.875], "MP5"),
    new Marker("", miscTypes.ammoCrate, [-130.76734244779473, 150.625]),
    new Marker("", miscTypes.perkMachine, [-130.01760932671598, 174.875], perks.staminup),
    new Marker("", miscTypes.mysteryBox, [-62.91649499016762, 143.625]),
    new Marker("", miscTypes.perkMachine, [-74.91222492742766, 129.875], perks.jugg),
    new Marker("", miscTypes.ammoCrate, [-88.1361398539189, 131.9375]),
    new Marker("", miscTypes.wallbuy, [-85.51207393014327, 159.375], "Gallo"),
    new Marker("", miscTypes.trialComputer, [-141.8944329993445, 152]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
];
miscPOI[mapStrings.dieMaschineUnderground] = [
    new Marker("", miscTypes.craftingTable, [-104.52748384680213, 99.75]),
    new Marker("", miscTypes.wallbuy, [-93.28148703062084, 94.125], "XM4"),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
    new Marker("", miscTypes.mysteryBox, [0, 0]),
];
miscPOI[mapStrings.firebaseZ] = [/*TODO*/];
miscPOI[mapStrings.firebaseZSpawn] = [/*TODO*/];
miscPOI[mapStrings.mauerDerToten] = [
    new Marker("Vz7PI", miscTypes.ammoCrate, [-75.66101239554577, 83.375]),
    new Marker("lgFlW", miscTypes.ammoCrate, [-99.28174389950158, 153.8789236277639]),
    new Marker("028Bw", miscTypes.ammoCrate, [-152.0086771136351, 112.42974680404187]),
    
    new Marker("qXZCX", miscTypes.craftingTable, [-102.27888356710085, 99.75]),
    new Marker("2Z69d", miscTypes.arsenal, [-161.3178987326527, 104.42802685762481]),
    new Marker("rvI3J", miscTypes.mysteryBox, [-66.66136443645661, 109.5]),
    new Marker("lUa4E", miscTypes.perkMachine, [-101.64992310685368, 134.375], perks.mule),
    new Marker("mYtJL", miscTypes.perkMachine, [-128.9423486687295, 106.49040592389237], perks.elemental),
    new Marker("htMzr", miscTypes.zipline, [-182.69490096533323, 87.42872558585674]),
    
    new Marker("qUsdq", miscTypes.wallbuy, [-89.40617183302145, 100.375], "Krig 6"),
    new Marker("_MhF2", miscTypes.wallbuy, [-112.02127068240351, 156], "M16"),
    new Marker("9iDLM", miscTypes.wallbuy, [-123.7682783346612, 103.10930548894439], "Milano 821"),
    new Marker("6n4vD", miscTypes.wallbuy, [-176.43757411387597, 98.42673689781202], "XM4"),
    new Marker("ROB5S", miscTypes.power, [-114.27162272331438, 103.23433236310714], "2 fuses are required to activate."),
];
miscPOI[mapStrings.mauerDerTotenStreets] = [
    new Marker("WLKGz", miscTypes.ammoCrate, [-142.88592137444184, 52.11727367820464]),
    new Marker("O9joh", miscTypes.ammoCrate, [-106.77844351596228, 85.74172275786793]),
    new Marker("KtnDa", miscTypes.ammoCrate, [-71.5698129551055, 164.75]),
    new Marker("uuvse", miscTypes.ammoCrate, [-111.40353152619, 176.625]),
    new Marker("8NpKm", miscTypes.ammoCrate, [-198.25754108688, 143.875]),
    new Marker("lS2oV", miscTypes.ammoCrate, [-193.74711187489578, 221.5]),
    new Marker("fEYzo", miscTypes.ammoCrate, [-86.19960951251598, 222.0625]),

    new Marker("MvQgd", miscTypes.craftingTable, [-99.13255498323173, 206.375]),
    new Marker("g7EFo", miscTypes.arsenal, [-49.88994784235979, 193.4375]),
    new Marker("d4_OW", miscTypes.arsenal, [-166.56954892442238, 194.75]),
    new Marker("X3VOB", miscTypes.mysteryBox, [-197.62074771636617, 206.875]),
    new Marker("ePWVb", miscTypes.mysteryBox, [-206.62890255878156, 135.5625]),
    new Marker("N8ZNs", miscTypes.mysteryBox, [-117.50473865594486, 134.625]),
    new Marker("5Jio9", miscTypes.perkMachine, [-91.94925747160512, 193.0625], perks.jugg),
    new Marker("npHck", miscTypes.perkMachine, [-178.51449389486947, 150], perks.speed),
    new Marker("YWNji", miscTypes.perkMachine, [-196.05916371755202, 182.25], perks.staminup),
    new Marker("kU1ty", miscTypes.perkMachine, [-110.94089649997221, 192.125], perks.tomb),
    new Marker("7_Xve", miscTypes.zipline, [-163.38575346019158, 51.854360642995346]),
    new Marker("iSOF5", miscTypes.zipline, [-176.64015397157732, 169.125]),
    new Marker("PYHwG", miscTypes.zipline, [-155.52259083581924, 153]),
    new Marker("enALO", miscTypes.zipline, [-112.27589121935854, 213.25]),
    new Marker("99LL2", miscTypes.zipline, [-151.26216162383503, 212]),

    new Marker("0NXak", miscTypes.wallbuy, [-56.07526958922384, 163], "Type 63"),
    new Marker("8kTWI", miscTypes.wallbuy, [-112.63949389486946, 190.125], "AK-74u"),
    new Marker("X4lhW", miscTypes.wallbuy, [-185.76194159826574, 170], "MP5"),
    new Marker("jQOwR", miscTypes.wallbuy, [-162.75839108039503, 202.1875], "Gallo SA12"),
    new Marker("ZEXRC", miscTypes.wallbuy, [-85.57482953808527, 206.875], "Diamatti"),

    new Marker("Awvc5", miscTypes.wunderFizz, [-97.90163930629413, 28.60234508078787]),
    new Marker("7EMcB", miscTypes.papMachine, [-130.0202585647848, 98.36943704830733]),
    new Marker("slGlH", miscTypes.trialComputer, [-129.51562992162457, 19.797826707129513]),
    new Marker("UvjK8", miscTypes.rampageInducer, [-87.0118234792759, 192.375]),
];

/////////////////////Outbreak Misc Items/////////////////////////
miscPOI[mapStrings.zoo] = [
    new Marker("AuC64", miscTypes.dementedEcho, [-150.26326919666607, 161.5]),
    new Marker("tzc4_", miscTypes.dementedEcho, [-174.31503434714938, 148.222502654611]), //issue #8 by markisdabomb214
    new Marker("cl6IT", miscTypes.dementedEcho, [-154.4547581108373, 166.8768944269258]), //issue #7 by markisdabomb214
    new Marker("s9ryH", miscTypes.dementedEcho, [0, 0]),
    new Marker("a0AnD", miscTypes.dementedEcho, [0, 0]),
    new Marker("OygKx", miscTypes.dementedEcho, [0, 0]),
    new Marker("DTQRG", miscTypes.dementedEcho, [0, 0]),
    new Marker("uN04o", miscTypes.dementedEcho, [0, 0]),
    new Marker("IZgYD", miscTypes.dementedEcho, [0, 0]),
    new Marker("lL22O", miscTypes.rift, [-38.27518620322752, 135]), //done
    new Marker("9JAf2", miscTypes.rift, [-152.2630563929775, 234.25]), //done
    new Marker("6Z0Tt", miscTypes.rift, [-195.7584279127505, 90]), //done
    new Marker("NFKKy", miscTypes.rift, [-111.51739226813265, 21.75]), //done
    new Marker("9gKgQ", miscTypes.fishing, [-131.5152642312467, 172.75]), //done
    new Marker("dz6u_", miscTypes.fishing, [-169.76119436070226, 166.25]), //done
    new Marker("RDvrx", miscTypes.radio, [-64.77236655435361, 138.75], "Requiem Radio"), //done
    new Marker("dsmm6", miscTypes.radio, [-197.50824170952296, 188], "Omega Radio"), //done
    new Marker("g64Z9", miscTypes.radio, [-124.51600904415677, 59], "Maxis Radio"), //done
    new Marker("G6f1o", miscTypes.monkey, [-77.15817501439264, 174.77497502497502], "Midway up the stairs in the book nook."),
    new Marker("dkJOS", miscTypes.monkey, [-88.66479562464018, 131.2971467308202], "In the corner on a green cabinet."),
    new Marker("AqCfQ", miscTypes.monkey, [-153.7372985031664, 139.75984347285367], "Between a wall and a rock."),
    new Marker("t1Csu", miscTypes.monkey, [-122.72992227979275, 58.785806030703995], "In the middle of the large shelves."),
    new Marker("a84zo", miscTypes.projector, [-135.17490644789868, 147.82830052600463]),
];
miscPOI[mapStrings.duga] = [
    new Marker("BcM6G", miscTypes.dementedEcho, [-146.8813286930307, 129]),
    new Marker("X69Ma", miscTypes.dementedEcho, [0, 0]),
    new Marker("M6PhI", miscTypes.dementedEcho, [0, 0]),
    new Marker("ZeAyZ", miscTypes.dementedEcho, [0, 0]),
    new Marker("UtKcD", miscTypes.dementedEcho, [0, 0]),
    new Marker("xeydw", miscTypes.dementedEcho, [0, 0]),
    new Marker("xCH_G", miscTypes.dementedEcho, [0, 0]),
    new Marker("a78ns", miscTypes.dementedEcho, [0, 0]),
    new Marker("KGNAI", miscTypes.dementedEcho, [0, 0]),
    new Marker("j0woJ", miscTypes.rift, [-125.51568983862387, 243]),
    new Marker("YzOdE", miscTypes.rift, [-186.25922592658273, 96.5]),
    new Marker("8Dwkm", miscTypes.rift, [-100.76832328427027, 15.25]),
    new Marker("pWvAS", miscTypes.rift, [-44.274334988473136, 130.25]),
    new Marker("8wQJ4", miscTypes.fishing, [-210.25667228231958, 179.75]),
    new Marker("fXMwv", miscTypes.fishing, [-160.01201897499558, 80.25]),
    new Marker("XaCK_", miscTypes.fishing, [-194.25837471182834, 130.5]),
    new Marker("pqtg9", miscTypes.fishing, [-112.26709966306083, 32.25]),
    new Marker("JFoDx", miscTypes.radio, [-146.90867008778153, 131.25], "Requiem Radio"),
    new Marker("SpPAk", miscTypes.radio, [-109.76949370455758, 130.75], "Omega Radio"),
    new Marker("JG472", miscTypes.radio, [-170.50135606933853, 179.25], "Maxis Radio"),
    new Marker("uReU5", miscTypes.monkey, [-164.63142350407898, 121], "On top of the small building"),
    new Marker("knmox", miscTypes.monkey, [-86.25143297302276, 107.875], "On top of a stack of barrels."),
    new Marker("FIUz1", miscTypes.monkey, [-76.7606662776204, 180.25], "At the back on top of the bus stop."),
    new Marker("P79of", miscTypes.monkey, [-202.37940015960277, 165], "Behind the wall"),
    new Marker("d2US7", miscTypes.projector, [-169.37629954335875, 177.28125]),
];
miscPOI[mapStrings.ruka] = [
    new Marker("vi0sy", miscTypes.dementedEcho, [0, 0]),
    new Marker("JzRzZ", miscTypes.dementedEcho, [0, 0]),
    new Marker("Rek6g", miscTypes.dementedEcho, [0, 0]),
    new Marker("PZmtJ", miscTypes.dementedEcho, [0, 0]),
    new Marker("izKFx", miscTypes.dementedEcho, [0, 0]),
    new Marker("QaKjR", miscTypes.dementedEcho, [0, 0]),
    new Marker("3XNUe", miscTypes.dementedEcho, [0, 0]),
    new Marker("18A2Y", miscTypes.dementedEcho, [0, 0]),
    new Marker("NFpUv", miscTypes.dementedEcho, [0, 0]),
    new Marker("oKjiO", miscTypes.rift, [235.467130697, 449.5]),
    new Marker("5IzIg", miscTypes.rift, [444.44909558432346, 244.5]),
    new Marker("kbFXC", miscTypes.rift, [287.1108249260276, 62]),
    new Marker("7jxeH", miscTypes.rift, [61.506318847812906, 204]),
    new Marker("KDAvD", miscTypes.redRift, [244.73564018442983, 88.5]), //done
    new Marker("WD73g", miscTypes.fishing, [244.5885797297779, 319]),
    new Marker("qRfcl", miscTypes.fishing, [292.11059320523333, 226.5]),
    new Marker("osAam", miscTypes.fishing, [289.1092028804677, 101]),
    new Marker("51o_O", miscTypes.radio, [329.11800827064985, 336], "Requiem Radio"),
    new Marker("rVWEx", miscTypes.radio, [152.53621083027343, 224.5], "Omega Radio"),
    new Marker("lPmDl", miscTypes.radio, [269.0902017753378, 126], "Maxis Radio"),
    new Marker("X6iHS", miscTypes.monkey, [126.02392962817726, 148], "On the third shelf next to three boxed."),
    new Marker("NXZCq", miscTypes.monkey, [312.61036148443907, 345], "Behind some pallets next to the train platform."),
    new Marker("FqjzW", miscTypes.monkey, [366.728066736379, 131], "Leaning against the broken down car."),
    new Marker("SGa0I", miscTypes.monkey, [238.30978121120768, 448.3125], "At the end of the railroad, under rafters."),
    new Marker("fDb0E", miscTypes.projector, [0, 0]),
];
miscPOI[mapStrings.alpine] = [
    new Marker("BXDDX", miscTypes.dementedEcho, [-72.27130253591062, 113.75]),
    new Marker("yfDA4", miscTypes.dementedEcho, [0, 0]),
    new Marker("JnfGP", miscTypes.dementedEcho, [0, 0]),
    new Marker("sKxXQ", miscTypes.dementedEcho, [0, 0]),
    new Marker("aGYxW", miscTypes.dementedEcho, [0, 0]),
    new Marker("4XqSR", miscTypes.dementedEcho, [0, 0]),
    new Marker("vz5O2", miscTypes.dementedEcho, [0, 0]),
    new Marker("ny9d7", miscTypes.dementedEcho, [0, 0]),
    new Marker("Y5vqk", miscTypes.dementedEcho, [0, 0]),
    new Marker("gWtba", miscTypes.rift, [-50.63711429331442, 114.375]),
    new Marker("y5uTI", miscTypes.rift, [-127.50909514098245, 19.25]),
    new Marker("RG6Zt", miscTypes.rift, [-164.50515827274342, 212.875]),
    new Marker("3FXOt", miscTypes.rift, [-62.01198129100904, 211.125]),
    new Marker("gtLZ1", miscTypes.fishing, [-92.51914789856357, 45.75]),
    new Marker("1RmkQ", miscTypes.radio, [-173.76050274871432, 101.5], "Requiem Radio"),
    new Marker("UxCH9", miscTypes.radio, [-122.75707350594077, 71.625], "Omega Radio"),
    new Marker("GH3ng", miscTypes.radio, [-187.49270371519773, 173.8125], "Maxis Radio"),
    new Marker("EXt18", miscTypes.monkey, [-127.75906854052137, 34.625], "On the balcony against the wall."),
    new Marker("VPl2_", miscTypes.monkey, [-186.87777753147722, 97.5], "Upstairs on a shelf."),
    new Marker("VcAW0", miscTypes.monkey, [-191.0023386238695, 169.75], "On top of some wall mounted cases."),
    new Marker("aFKUh", miscTypes.monkey, [-51.389667937577585, 106.125], "Behind the porta-potties, by the gasoline tank."),
    new Marker("rYPHj", miscTypes.projector, [0, 0]),
];
miscPOI[mapStrings.golova] = [
    new Marker("_9qob", miscTypes.dementedEcho, [0, 0]),
    new Marker("1blw4", miscTypes.dementedEcho, [0, 0]),
    new Marker("qAgVa", miscTypes.dementedEcho, [0, 0]),
    new Marker("I5d6u", miscTypes.dementedEcho, [0, 0]),
    new Marker("Sjjf7", miscTypes.dementedEcho, [0, 0]),
    new Marker("NMtT4", miscTypes.dementedEcho, [0, 0]),
    new Marker("VZH6s", miscTypes.dementedEcho, [0, 0]),
    new Marker("ldlEI", miscTypes.dementedEcho, [0, 0]),
    new Marker("BVr7n", miscTypes.dementedEcho, [0, 0]),
    new Marker("jMyYI", miscTypes.rift, [-173.26079535378614, 64.5]),
    new Marker("hVgX3", miscTypes.rift, [-145.51054486611102, 211.375]),
    new Marker("5ySfH", miscTypes.rift, [-43.52139785422946, 150.5]),
    new Marker("Pu7ID", miscTypes.rift, [-215.2513145061181, 117.75]),
    new Marker("oI3EF", miscTypes.redRift, [-209.7518143731158, 165.8125]),
    new Marker("YRGBh", miscTypes.fishing, [-56.46100796505169, 118.5]),
    new Marker("58PeR", miscTypes.fishing, [-55.960885570640414, 129]),
    new Marker("IEzsn", miscTypes.fishing, [-90.2192695878133, 49.75]),
    new Marker("pDoZ4", miscTypes.radio, [-118.76510462848023, 59.75], "Requiem Radio"),
    new Marker("vRPj2", miscTypes.radio, [-172.7593589288881, 157], "Omega Radio"),
    new Marker("ksOb3", miscTypes.radio, [-120.51491842525272, 179.5], "Maxis Radio"),
    new Marker("QkQhl", miscTypes.monkey, [-166.26154016669622, 75.5], "In the elevated building behind a chain link fence."),
    new Marker("mk0gS", miscTypes.monkey, [-80.27069072530591, 113.5], "Up in the rafters."),
    new Marker("xsRN7", miscTypes.monkey, [-202.7544533605249, 169.75], "On a pillar at the top of the scaffolding."),
    new Marker("8xhDt", miscTypes.monkey, [-163.25865623337472, 208.375], "On the top shelf."),
    new Marker("iMHwr", miscTypes.projector, [-167.4964329090327, 173.8125]),
];
miscPOI[mapStrings.sanatorium] = [
    new Marker("ijcwV", miscTypes.dementedEcho, [0, 0]),
    new Marker("FpAjy", miscTypes.dementedEcho, [0, 0]),
    new Marker("H8LVB", miscTypes.dementedEcho, [0, 0]),
    new Marker("U0DjB", miscTypes.dementedEcho, [0, 0]),
    new Marker("p4_rK", miscTypes.dementedEcho, [0, 0]),
    new Marker("M16h3", miscTypes.dementedEcho, [0, 0]),
    new Marker("hrZGQ", miscTypes.dementedEcho, [0, 0]),
    new Marker("LOMUF", miscTypes.dementedEcho, [0, 0]),
    new Marker("rAys5", miscTypes.dementedEcho, [0, 0]),
    new Marker("d3n29", miscTypes.rift, [-124.7678976768931, 204.5]),
    new Marker("vLJwe", miscTypes.rift, [-129.01744546905482, 7.75]),
    new Marker("VPGKZ", miscTypes.rift, [-206.5091993261217, 120.5]),
    new Marker("VF463", miscTypes.rift, [-60.27476059585035, 108]),
    new Marker("Slo09", miscTypes.fishing, [-145.76566323816283, 219.75],),
    new Marker("SgHF_", miscTypes.fishing, [-86.2719941478986, 136.75],),
    new Marker("oDnxX", miscTypes.fishing, [-109.26954690547973, 135.75],),
    new Marker("yE4r8", miscTypes.fishing, [-133.01701986167762, 166],),
    new Marker("43xpY", miscTypes.radio, [-179.76204557545668, 190], "Requiem Radio"),
    new Marker("K0GoW", miscTypes.radio, [-98.27071732576701, 106], "Omega Radio"),
    new Marker("of73n", miscTypes.radio, [-171.75627549210853, 70.125], "Maxis Radio"),
    new Marker("xpCIP", miscTypes.monkey, [-97.2708237276113, 104.75], "In the Admins office on a bookshelf floor 2."),
    new Marker("nOKZv", miscTypes.monkey, [-191.12750598510377, 139.1875], "Up in the rafters."),
    new Marker("BDOca", miscTypes.monkey, [-123.446868904061, 174], "Underneath the bridge, on a support pillar."),
    new Marker("bEmlA", miscTypes.monkey, [-158.75765871608442, 33.875], "On the top shelf above the bed."),
    new Marker("ZO8MP", miscTypes.projector, [-73.77332417095232, 89.75]),
    new Marker("QN21y", worldEventTypes.orb, [-59.27484039723356, 81.75]),
    //Don't really need this for now, not until we re-work easter eggs
    //new Marker(new Item("oEPK3", "Chopper Gunner", "Hold out until the wave is dead to continue with the Easter Egg"), [-170.51300319205535, 39.25])
];
miscPOI[mapStrings.collateral] = [
    new Marker("0FS1A", miscTypes.radio, [-94.07362634563005, 176.0625], "Requiem Radio"),
    new Marker("W6wPV", miscTypes.radio, [-166.0680266948917, 89.59375], "Omega Radio"),
    new Marker("bUGza", miscTypes.radio, [-107.65357553130384, 206.7470367111893], "Maxis Radio"),
];
miscPOI[mapStrings.armada] = [
    new Marker("iC2vJ", miscTypes.radio, [-151.2655940227159, 92.625], "Requiem Radio"),
    new Marker("S1EN7", miscTypes.radio, [-153.13993394600806, 164.75], "Omega Radio"),
    new Marker("G5tYA", miscTypes.radio, [-130.19513894035686, 156.125], "Maxis Radio"),
];