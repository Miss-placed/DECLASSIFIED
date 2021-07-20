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

var darkAetherIcon = L.icon({
    iconUrl: 'assets/img/icons/darkAetherIcon.png',
    iconSize: [30, 48],
    iconAnchor: [15, 48],
    popupAnchor: [0, -30]
});
var maxisIcon = L.icon({
    iconUrl: 'assets/img/icons/maxisIcon.png',
    iconSize: [34, 48],
    iconAnchor: [17, 48],
    popupAnchor: [0, -30]
});
var omegaIcon = L.icon({
    iconUrl: 'assets/img/icons/omegaIcon.png',
    iconSize: [55, 48],
    iconAnchor: [27.5, 48],
    popupAnchor: [0, -30]
});
var requiemIcon = L.icon({
    iconUrl: 'assets/img/icons/requiemIcon.png',
    iconSize: [40, 40],
    iconAnchor: [24, 48],
    popupAnchor: [0, -30]
});
var generalIcon = L.icon({
    iconUrl: 'assets/img/icons/generalIcon.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
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
    iconSize: [48, 48],
    iconAnchor: [24, 24],
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
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
var redRiftIcon = L.icon({
    iconUrl: 'assets/img/icons/redRiftIcon.png',
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});