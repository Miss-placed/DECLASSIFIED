function getIconByFaction(faction) {
    switch (faction) {
        case factions.requiem:
            return requiemIcon;
        case factions.omega:
            return omegaIcon;
        case factions.maxis:
            return maxisIcon;
        case factions.darkAether:
            return darkAetherIcon;
        default:
            return generalIcon;
    }
}

/////////////////////Factions/////////////////////////
var darkAetherIcon = L.icon({
    iconUrl: 'assets/img/icons/faction/darkAether.png',
    iconSize: [30, 48],
    iconAnchor: [15, 48],
    popupAnchor: [0, -30]
});
var maxisIcon = L.icon({
    iconUrl: 'assets/img/icons/faction/maxis.png',
    iconSize: [34, 48],
    iconAnchor: [17, 48],
    popupAnchor: [0, -30]
});
var omegaIcon = L.icon({
    iconUrl: 'assets/img/icons/faction/omega.png',
    iconSize: [55, 48],
    iconAnchor: [27.5, 48],
    popupAnchor: [0, -30]
});
var requiemIcon = L.icon({
    iconUrl: 'assets/img/icons/faction/requiem.png',
    iconSize: [40, 40],
    iconAnchor: [24, 48],
    popupAnchor: [0, -30]
});
/////////////////////Misc/////////////////////////
var generalIcon = L.icon({
    iconUrl: 'assets/img/icons/generalIcon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});
var riftIcon = L.icon({
    iconUrl: 'assets/img/icons/Rift.png',
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});
var monkeyIcon = L.icon({
    iconUrl: 'assets/img/icons/monkeyIcon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -30]
});
var radioIcon = L.icon({
    iconUrl: 'assets/img/icons/radioIcon.png',
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30]
});
var dementedIcon = L.icon({
    iconUrl: 'assets/img/icons/dementedIcon.png',
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
var fishingIcon = L.icon({
    iconUrl: 'assets/img/icons/fishIcon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -30]
});
var redRiftIcon = L.icon({
    iconUrl: 'assets/img/icons/redRiftIcon.png',
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});
var wunderFizzIcon = L.icon({
    iconUrl: 'assets/img/icons/perk/wunderFizz.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var mysteryBoxIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/mysteryBox.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var arsenalIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/arsenal.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var wallbuyIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/wallbuy.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var ammoCrateIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/ammoCrate.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var craftingTableIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/craftingTable.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var ziplineIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/zipline.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var trialComputerIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/trialComputer.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
var papMachineIcon = L.icon({
    iconUrl: 'assets/img/icons/misc/papMachine.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});
function iconInit(id, type) {
    return L.icon({
        iconUrl: `assets/img/icons/${type}/${id}.png`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}