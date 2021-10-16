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
var riftIcon = iconInit('rift', 'outbreak', bounds = {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
})
var radioIcon = L.icon({
    iconUrl: 'assets/img/icons/radioIcon.png',
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30]
});
var dementedIcon = L.icon({
    iconUrl: 'assets/img/icons/outbreak/dementedIcon.png',
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
var fishingIcon = iconInit('fishIcon', 'outbreak', {
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -30]
})

var monkeyIcon = L.icon({
    iconUrl: 'assets/img/icons/outbreak/monkeyIcon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -30]
});
var redRiftIcon = iconInit('redRift', 'outbreak', bounds = {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
})

var wunderFizzIcon = iconInit('wunderFizz', 'perk')
var mysteryBoxIcon = iconInit('mysteryBox', 'misc')
var arsenalIcon = iconInit('arsenal', 'misc')
var wallbuyIcon = iconInit('wallBuy', 'misc')
var ammoCrateIcon = iconInit('ammoCrate', 'misc')
var craftingTableIcon = iconInit('craftingTable', 'misc')
var ziplineIcon = iconInit('zipline', 'misc')
var trialComputerIcon = iconInit('trialComputer', 'misc')
var papMachineIcon = iconInit('papMachine', 'misc')

//idk how to do an override where you specify only a few bound properties
function iconInit(id, type,
    bounds = {
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    }) {
    return L.icon({
        iconUrl: `assets/img/icons/${type}/${id}.png`,
        iconSize: bounds.iconSize,
        iconAnchor: bounds.iconAnchor,
        popupAnchor: bounds.popupAnchor
    });
}