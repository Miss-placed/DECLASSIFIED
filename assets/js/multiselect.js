function setSelected(){
    let selected = []
    document.querySelectorAll('[selected]').forEach(element =>{
        const intelId = element.getAttribute('id')
        selected.push(intelId)
        const collectButtonSelector = `#${intelId}-collect-btn`;
        const popupCollectButtonSelector = `#${intelId}-popup-collect-btn`;
        const buttonSelector = `#${intelId}.to-intel`;
        const intelHasMarker = doesIntelHaveMarker(intelId);
        if (!hasUserCollected(intelId)) {
            // Collect
            $(buttonSelector).attr("collected", "")
            markButtonAsCollected(collectButtonSelector);
            markButtonAsCollected(popupCollectButtonSelector);
            if (intelHasMarker) {
                app.disableMarkers.push(intelId.toString());
                app.visibleMarkers[intelId].setOpacity(0.35);
            }
            addCollectedIntel(intelId);
        }
    })
    CalcStats();
    TriggerSearch();
    selected.forEach(id =>{
        document.getElementById(id).toggleAttribute('selected')
    })
}

function unsetSelected(){
    let selected = []
    document.querySelectorAll('[selected]').forEach(element =>{
        const intelId = element.getAttribute('id')
        selected.push(intelId)
        const collectButtonSelector = `#${intelId}-collect-btn`;
        const popupCollectButtonSelector = `#${intelId}-popup-collect-btn`;
        const buttonSelector = `#${intelId}.to-intel`;
        const intelHasMarker = doesIntelHaveMarker(intelId);
        if (hasUserCollected(intelId)) {
            // "Un"Collect?
            $(buttonSelector).removeAttr("collected")
            markButtonAsUnCollected(collectButtonSelector);
            markButtonAsUnCollected(popupCollectButtonSelector);
            if (intelHasMarker) {
                app.disableMarkers = $.grep(app.disableMarkers, function (value) {
                    return value != intelId.toString();
                });
                app.visibleMarkers[intelId].setOpacity(1);
            }
            removeCollectedIntel(intelId);
        }
    })
    CalcStats();
    TriggerSearch();
    selected.forEach(id =>{
        document.getElementById(id).toggleAttribute('selected')
    })
}