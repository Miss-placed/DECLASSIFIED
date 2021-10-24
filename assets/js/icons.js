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
var defaultMarker = {
    shadowSize: [33, 44],
    shadowAnchor: [(33/2), 44],
    popupAnchor: [0, -25]
}
var defaultIcon = {
    iconSize: [25, 25],
    iconAnchor: [12.5, 40],
}
function returnMarker(faction, type){
    return L.icon(Object.assign({
        shadowUrl: `assets/img/icons/markers/${faction}.png`,
        iconUrl:`assets/img/icons/type/${type}.png`,

    },
    defaultIcon,
    defaultMarker,
    ))
}
/////////////////////Factions/////////////////////////

// var darkAetherIcon = L.icon(returnMarker('dark Aether','documents'));
// var maxisIcon = L.icon(returnMarker('maxis','documents'));
// var omegaIcon = L.icon(returnMarker('omega','documents'));
// var requiemIcon = L.icon(returnMarker('requiem','artifacts'));

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