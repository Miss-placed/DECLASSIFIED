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
    shadowAnchor: [(33 / 2), 44],
    popupAnchor: [0, -25]
}
var defaultIcon = {
    iconSize: [25, 25],
    iconAnchor: [12.5, 40],
}

function intelIconInit(faction, type) {
    const iconHtml =
        `<div>
        <img class="icon" src="assets/img/icons/type/${type}.png" alt="Icon">
        <img class="background" src="assets/img/icons/markers/${faction}.png" alt="Background">
        <!-- Shadow here -->
    </div>`;

    return L.divIcon(Object.assign({
        html: iconHtml,
        className: 'intel-icon'
    },
        defaultIcon,
        defaultMarker,
    ));
}

/////////////////////Misc/////////////////////////
var generalIcon = miscIconInit('generalIcon', 'misc', {
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});
var radioIcon = miscIconInit('radioIcon', 'misc', {
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30]
});
var riftIcon = miscIconInit('rift', 'outbreak', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});
var dementedIcon = miscIconInit('dementedIcon', 'outbreak', {
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
var fishingIcon = miscIconInit('fishIcon', 'outbreak', {

    popupAnchor: [0, -30]
});
var monkeyIcon = miscIconInit('monkeyIcon', 'outbreak', {

    popupAnchor: [0, -30]
});
var redRiftIcon = miscIconInit('redRift', 'outbreak', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});

var wunderFizzIcon = miscIconInit('wunderFizz', 'perk')
var mysteryBoxIcon = miscIconInit('mysteryBox', 'misc')
var arsenalIcon = miscIconInit('arsenal', 'misc', { iconAnchor: [15, 30] })
var craftingTableIcon = miscIconInit('craftingTable', 'misc', { iconAnchor: [15, 30] })
var wallbuyIcon = miscIconInit('wallBuy', 'misc')
var ammoCrateIcon = miscIconInit('ammoCrate', 'misc')
var ziplineIcon = miscIconInit('zipline', 'misc')
var trialComputerIcon = miscIconInit('trialComputer', 'misc')
var papMachineIcon = miscIconInit('papMachine', 'misc')

function miscIconInit(id, type, bounds = {}) {
    let { iconSize = [30, 30], iconAnchor = [15, 15], popupAnchor = [0, -15] } = bounds;
    return L.icon({
        iconUrl: `assets/img/icons/${type}/${id}.png`,
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor,
        className: 'misc-icon'
    });
}