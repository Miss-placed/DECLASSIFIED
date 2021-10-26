/////////////////////Filtering/////////////////////////
function filterIntel(searchTermDirty, factionsArr = [], seasonsArr = [], intelTypeArr = [], mapArr = []) {
    let results = intelCache;
    let searchTerm = searchTermDirty.toLowerCase()
    results = results.filter((intel) => {
        return intel.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    });

    if (factionsArr.some(item => item)) {
        results = results.filter((intel) => {
            return factionsArr.includes(intel.faction);
        });
    }

    if (seasonsArr.some(item => item)) {
        results = results.filter((intel) => {
            return seasonsArr.includes(intel.season);
        });
    }

    if (intelTypeArr.some(item => item)) {
        results = results.filter((intel) => {
            return intelTypeArr.includes(intel.intelType);
        });
    }

    if (mapArr.some(item => item)) {
        results = results.filter((intel) => {
            return mapArr.includes(intel.map) || intel.map == mapDetails.allOutbreakMaps.id && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
        });
    }

    return results;
}

function TriggerSearchV1() {
    let factionFilters = $('#factionFilterCollapse').find("input[type=checkbox]:checked");
    let factionsArr = [];
    $.each(factionFilters, function () {
        factionsArr.push(factions[$(this).val()]);
    });

    let seasonsFilters = $('#seasonFilterCollapse').find("input[type=checkbox]:checked");
    let seasonsArr = [];
    $.each(seasonsFilters, function () {
        seasonsArr.push(seasons[$(this).val()]);
    });

    let intelTypeFilters = $('#intelTypeFilterCollapse').find("input[type=checkbox]:checked");
    let intelTypeArr = [];
    $.each(intelTypeFilters, function () {
        intelTypeArr.push(intelTypes[$(this).val()]);
    });

    let mapFilters = $('#mapFilterCollapse').find("input[type=checkbox]:checked");
    let mapArr = [];
    $.each(mapFilters, function () {
        var mapId = $(this).val();
        mapArr.push(mapId);
    });

    let filteredIntel = filterIntel($('#searchTerm').val().toLowerCase(), factionsArr, seasonsArr, intelTypeArr, mapArr);
    GenerateFullIntelList(filteredIntel);

    return filteredIntel;
}

function TriggerSearch() {
    const searchTerm = $('#search-term').val();
    const factionsArr = [];
    $('#faction-multi-select input[type=checkbox]:checked').each(function () {
        factionsArr.push(factions[$(this).data("filter")]);
    });
    const seasonsArr = [];
    $('#season-multi-select input[type=checkbox]:checked').each(function () {
        seasonsArr.push(seasons[$(this).data("filter")]);
    });
    const intelTypeArr = [];
    $('#intel-type-select input[type=checkbox]:checked').each(function () {
        intelTypeArr.push(intelTypes[$(this).data("filter")]);
    });
    const mapArr = [];
    //Filter by current map
    if ($('#curr-map-filter:checked').length > 0) mapArr.push(app.currentMap);

    let filteredIntel = filterIntel(searchTerm, factionsArr, seasonsArr, intelTypeArr, mapArr);
    //Sort by Intel Faction A=>Z first then by Intel type A=>Z then by Intel Name A=>Z
    let sortedIntel = filteredIntel.sort(function (a, b) {
        if (a.faction > b.faction) return -1;
        if (a.faction < b.faction) return 1;
        if (b.intelType > a.intelType) return -1;
        if (b.intelType < a.intelType) return 1;
        if (b.name > a.name) return -1;
        if (b.name < a.name) return 1;
    });
    GenerateList(sortedIntel);
}

function getIntelById(intelId) {
    if (intelId) {
        let matchedIntel = intelCache.find((item) => item.id == intelId)
        return matchedIntel;
    }
    return null;
}

function getMiscMarkerById(itemId) {
    if (itemId) {
        let matchedMisc = miscPOI[app.currentMap].find((item) => item.id == itemId)
        return matchedMisc;
    }
    return null;
}

/////////////////////Totals/////////////////////////
const factionTotal = {
    requiem: findTotal(intelStoreV2, "faction", factions.requiem),
    omega: findTotal(intelStoreV2, "faction", factions.omega),
    maxis: findTotal(intelStoreV2, "faction", factions.maxis),
    darkAether: findTotal(intelStoreV2, "faction", factions.darkAether),
    all: intelStoreV2.length
}
const seasonTotal = {
    preSeason: findTotal(intelStoreV2, "season", seasons.preSeason),
    season1: findTotal(intelStoreV2, "season", seasons.season1),
    season2: findTotal(intelStoreV2, "season", seasons.season2),
    season3: findTotal(intelStoreV2, "season", seasons.season3),
    season4: findTotal(intelStoreV2, "season", seasons.season4),
    season5: findTotal(intelStoreV2, "season", seasons.season5),
    season6: findTotal(intelStoreV2, "season", seasons.season6),
    all: intelStoreV2.length
}

let collectedFaction = calcCollectedForFaction();

let collectedSeason = calcCollectedForSeason();

function calcCollectedForFaction() {
    var collectedStats = {
        darkAether: findCollectedTotalFrom(factionTotal.darkAether),
        requiem: findCollectedTotalFrom(factionTotal.requiem),
        omega: findCollectedTotalFrom(factionTotal.omega),
        maxis: findCollectedTotalFrom(factionTotal.maxis),
        all: 0,
        not: 0,
    };
    collectedStats.all = getUserPrefs().collectedIntel.length
    collectedStats.not = factionTotal.all - collectedStats.all;
    return collectedStats;
}

function calcCollectedForSeason() {
    var collectedStats = {
        preSeason: findCollectedTotalFrom(seasonTotal.preSeason),
        season1: findCollectedTotalFrom(seasonTotal.season1),
        season2: findCollectedTotalFrom(seasonTotal.season2),
        season3: findCollectedTotalFrom(seasonTotal.season2),
        season4: findCollectedTotalFrom(seasonTotal.season3),
        season5: findCollectedTotalFrom(seasonTotal.season4),
        season5: findCollectedTotalFrom(seasonTotal.season5),
        all: 0,
        not: 0,
    };
    collectedStats.all = getUserPrefs().collectedIntel.length
    collectedStats.not = seasonTotal.all - collectedStats.all;
    return collectedStats;
}

function fillTotals() {
    let requiemTotalEle = document.getElementById("requiem-totals");
    let omegaTotalEle = document.getElementById("omega-totals");
    let maxisTotalEle = document.getElementById("maxis-totals");
    let darkTotalEle = document.getElementById("dark-aether-totals");
    // console.log(findObjectByKey(intelStoreV2, "faction", factions.requiem))
    requiemTotalEle.innerHTML = `${collectedFaction.requiem} / ${factionTotal.requiem.length}`
    omegaTotalEle.innerHTML = `${collectedFaction.omega} / ${factionTotal.omega.length}`
    maxisTotalEle.innerHTML = `${collectedFaction.maxis} / ${factionTotal.maxis.length}`
    darkTotalEle.innerHTML = `${collectedFaction.darkAether} / ${factionTotal.darkAether.length}`
}

/////////////////////Stats/////////////////////////
function CalcStats() {
    document.querySelectorAll("#intel-type-select label").forEach(element => {
        const intelTypeCheck = $(element);
        const intelType = intelTypeCheck.attr("type");
        const intelCollected = getIntelCollectedAndTotalByType(intelType);
        intelTypeCheck.attr("value", `${intelCollected[0]}/${intelCollected[1]}`);
    });

    fillTotals();
}

function getIntelCollectedAndTotalByType(intelType, totalsOnly = false) {
    let intelCount = 0;
    let collectedCount = 0;
    switch (intelType) {
        case intelTypes.audio:
        case intelTypes.docs:
        case intelTypes.radio:
        case intelTypes.artifact:
            let intelTypeArr = intelCache.filter((intel) => {
                return intelType == intel.intelType;
            });
            intelCount = intelTypeArr.length;
            if (!totalsOnly) {
                collectedCount = intelTypeArr.filter((intel) => {
                    return hasUserCollected(intel.id);
                }).length;
            }
            break;
        default:
            intelCount = intelCache.length;
            break;
    }
    if (totalsOnly)
        return intelCount;
    else
        return [collectedCount, intelCount];
}





function findTotal(array, key, value) {
    let total = []
    for (let i = 0; i < array.length; i++) {

        if (array[i][key] === value) {
            total.push(array[i])
        }
    }
    return total;
}


function findCollectedTotalFrom(array) {
    let collectedIntel = getUserPrefs().collectedIntel
    let total = 0
    for (let i = 0; i < collectedIntel.length; i++) {
        total += findTotal(array, "id", collectedIntel[i]).length
    }
    return total;
}