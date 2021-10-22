function filterIntel(searchTerm, factionsArr, seasonsArr, intelTypeArr, mapArr) {
    let results = intelCache;
    results = results.filter((intel) => {
        return intel.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    });

    results = results.filter((intel) => {
        return factionsArr.includes(intel.faction);
    });

    results = results.filter((intel) => {
        return seasonsArr.includes(intel.season);
    });

    results = results.filter((intel) => {
        return intelTypeArr.includes(intel.intelType);
    });

    results = results.filter((intel) => {
        return mapArr.includes(intel.map) || intel.map == mapDetails.allOutbreakMaps.id && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
    });

    return results;
}

function TriggerSearch() {
    let factionFilters = $('#factionFilterCollapse').find("input[type=checkbox]:checked");
    let factionsArr = [];
    $.each(factionFilters, function() {
        factionsArr.push(factions[$(this).val()]);
    });

    let seasonsFilters = $('#seasonFilterCollapse').find("input[type=checkbox]:checked");
    let seasonsArr = [];
    $.each(seasonsFilters, function() {
        seasonsArr.push(seasons[$(this).val()]);
    });

    let intelTypeFilters = $('#intelTypeFilterCollapse').find("input[type=checkbox]:checked");
    let intelTypeArr = [];
    $.each(intelTypeFilters, function() {
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