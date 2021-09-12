function filterIntel(searchTerm, factionsArr, seasonsArr, intelTypeArr, mapArr) {
    var results = intelCache;
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
        return mapArr.includes(intel.map) || intel.map == mapStrings.allOutbreakMaps && mapArr.some((e) => { return allOutbreakMapsArr.includes(e) });
    });

    return results;
}

function TriggerSearch() {
    var factionFilters = $('#factionFilterCollapse').find("input[type=checkbox]:checked");
    let factionsArr = [];
    $.each(factionFilters, function() {
        factionsArr.push(factions[$(this).val()]);
    });

    var seasonsFilters = $('#seasonFilterCollapse').find("input[type=checkbox]:checked");
    let seasonsArr = [];
    $.each(seasonsFilters, function() {
        seasonsArr.push(seasons[$(this).val()]);
    });

    var intelTypeFilters = $('#intelTypeFilterCollapse').find("input[type=checkbox]:checked");
    let intelTypeArr = [];
    $.each(intelTypeFilters, function() {
        intelTypeArr.push(intelTypes[$(this).val()]);
    });

    var mapFilters = $('#mapFilterCollapse').find("input[type=checkbox]:checked");
    let mapArr = [];
    $.each(mapFilters, function() {
        mapArr.push(mapStrings[$(this).val()]);
    });

    var filteredIntel = filterIntel($('#searchTerm').val().toLowerCase(), factionsArr, seasonsArr, intelTypeArr, mapArr);
    GenerateFullIntelList(filteredIntel);

    return filteredIntel;
}