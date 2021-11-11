function getNotificationTime() {
    return 2000;
}

function newIntelInit() {
    app.submittingLocation = true;
    app.currentContribType = markerTypes.intel.id;

    showNotification("Click exactly where the intel is located. Next time you click on the map you will be redirected to our new intel form.", true);
}

function newMiscInit() {
    app.submittingLocation = true;
    app.currentContribType = markerTypes.misc.id;

    showNotification("Click exactly where the marker is located. Next time you click on the map you will be redirected to our new icon form.", true);
}

/////////////////////Modal Functions/////////////////////////

function openModal(x) {
    document.getElementsByClassName("modal-bg")[0].classList.remove("-hidden")
    let modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
        if (x.indexOf(modal.id) != -1) {
            modal.classList.remove("-hidden")
        } else {
            modal.classList.add("-hidden")
        }
    })
}

function GenerateDetailModal(intel) {
    let detailModal = document.getElementById("description");
    const mapName = findMapById(intel.map).title ?? "Map Not Found";
    detailModal.replaceChildren();
    if (!intel) {
        intel.name = "Intel Not Found";
        intel.desc = "If you see this please report an issue on the github page."
    }

    const imgEle = intel.img ? `<img src="https://i.imgur.com/${intel.img}.jpg" onclick="expandImage(this)"></img>` : '';

    var elementsToAdd = htmlToElements(
        `<button class="close-submodal btn inverted" onclick="openModal(modalSet.intelOverview)"><i class="fas fa-x"></i></button>
    
        <h2>${intel.name}</h2>
        <h4>${mapName} - ${intel.season}</h4>
        <h5>${intel.intelType} - ${intel.faction}</h5>
        <p>${intel.desc}</p>
        ${imgEle}
        `
    );

    elementsToAdd.forEach(element => {
        detailModal.append(element);
    });



    let btnContainer = document.createElement("div");
    btnContainer.className = "buttonContainer noselect";
    btnContainer.appendChild(genCollectedButton(intel.id));

    //Only Generate locate and share buttons if intel has location
    if (intel.loc[0] != 0 && intel.loc[1] != 0) {
        let location = createElement("button", ["btn", "inverted", "locate-intel"], "Locate Intel", "locate-intel");
        location.onclick = goToIntel(intel);
        location.appendChild(genIcon("fa-map-marker-alt"));
        btnContainer.appendChild(location);
        btnContainer.appendChild(genShareButton(intel.id));
    }

    //Always add bug button and button container
    btnContainer.appendChild(genBugButton(intel.id));
    detailModal.appendChild(btnContainer);


    /*     detailModal.querySelector("p").innerHTML = `
        "id": ${intel.id}<br>
        "faction": ${intel.faction}<br>
        "season": ${intel.season}<br>
        "intelType": ${intel.intelType}<br>
        "loc": ${intel.loc}<br>
        "map": ${intel.map}<br>
        "name": ${intel.name}<br>
        "desc": ${intel.desc}
    ` */
}

function openModal(modalArr) {
    document.getElementsByClassName("modal-bg")[0].classList.remove("-hidden");
    let modals = document.querySelectorAll(".modal");
    //If modal is in modalArr then only show those modals
    modals.forEach((modal) => {
        if (modalArr.indexOf(modal.id) != -1) {
            modal.classList.remove("-hidden");
        } else {
            modal.classList.add("-hidden");
        }
    })
}

function closeModal(modalId) {
    let modals = document.querySelectorAll(".modal");
    if (modalId) {
        modals.forEach((modal) => {
            if (modal.id === modalId) {
                modal.classList.add("-hidden");
            }
        })
    } else {
        document.getElementsByClassName("modal-bg")[0].classList.add("-hidden");
        modals.forEach((modal) => {
            modal.classList.add("-hidden");
        })
    }
}

function OpenIntelDetail(intelID) {
    openModal(modalSet.intelDescription);
    openSubModal("intel-detail");

    //use target to get intel instead of predefined obj

    let intel = getIntelById(intelID);
    GenerateDetailModal(intel);
    closeSubModal("intel-stats");
    closeSubModal("intel-filters");
}

function debugModal() {
    const currentPrefs = getUserPrefs();
    const settingsDetailModal = document.querySelector("#settings-detail");
    settingsDetailModal.replaceChildren();
    var elementsToAdd = htmlToElements(
        `<h2>Debug options: </h2>
        <div class="button-list">
            <p>Misc bug report: </p>
            <label class="btn chk-btn" for="debug-button-toggle">
                <p>Show buttons</p><input type="checkbox" name="debug-button-toggle" id="debug-button-toggle"
                    class="toggle" placeholder="_" onchange="toggleDebugButton()" ${!currentPrefs.hideBugRepButton ? 'checked' : ''}>
            </label>
            <p>Click for co-ordinates: </p>
            <label class="btn chk-btn" for="debug-toggle">
                <p>Copy on click</p><input type="checkbox" name="debug-toggle" id="debug-toggle" class="toggle"
                    placeholder="_" onchange="toggleClickCoord()" ${debug ? 'checked' : ''}>
            </label>

        </div>`);

    elementsToAdd.forEach(element => {
        settingsDetailModal.append(element);
    });

    if (settingsDetailModal.classList.contains("-hidden")) {
        openModal(modalSet.settingsDetail);
    } /* else {
        closeModal("settings-detail");
    } */
}

function importExportModal() {
    const settingsDetailModal = document.querySelector("#settings-detail");
    settingsDetailModal.replaceChildren();
    settingsDetailModal.append(htmlToElement(`<div class="sub-modal" id="settings-desc"></div>`));
    const detailSubModal = document.querySelector("#settings-desc");

    var elementsToAdd = htmlToElements(
        `<textarea id="import-export"></textarea>
        <p>Copy the contents of the textbox and save somewhere. Import again any time by copying it back in and pressing import.</p>
        <div class="button-list">
            <a onclick="importUserPrefs()" target="_blank" class="btn chk-btn inverted">Import data</a>
            <a onclick="exportUserPrefs()" target="_blank" class="btn chk-btn inverted">Export data</a>
        </div>`);

    elementsToAdd.forEach(element => {
        detailSubModal.append(element);
    });

    if (settingsDetailModal.classList.contains("-hidden")) {
        openModal(modalSet.settingsDetail);
    } /* else {
        closeModal("settings-detail")
    } */
}

function renderSettingsModal() {
    const settingsModal = document.querySelector("#settings");
    let currentPrefs = getUserPrefs();
    settingsModal.replaceChildren(); // Empty Out First

    let htmlToAdd = htmlToElements(
        `<h2>Settings</h2>
        <div class="button-list">
            <p>Marker visibility:</p>
            <label class="btn chk-btn" for="show-intel">
                <p>Intel Markers: </p><input type="checkbox" name="show-intel" id="show-intel" class="toggle"
                    placeholder="_" onchange="changeMarkerVisibility('${markerTypes.intel.id}')" ${!currentPrefs.hideIntel ? 'checked' : ''}>
            </label>
            <label class="btn chk-btn" for="show-misc">
                <p>Misc Markers: </p><input type="checkbox" name="show-misc" id="show-misc" class="toggle"
                    placeholder="_" onchange="changeMarkerVisibility('${markerTypes.misc.id}')" ${!currentPrefs.hideMisc ? 'checked' : ''}>
            </label>
            <!-- <label class="btn chk-btn" for="checkbox">
                <p>EE markers</p><input type="checkbox" name="checkbox" id="show-ee" class="toggle" placeholder="_">
            </label> -->
            <p>Theme: </p>
            <label class="btn chk-btn" for="system-theme">
                <p>Use System Theme</p><input type="checkbox" name="system-theme" id="system-theme" class="toggle"
                    placeholder="_" onchange="changePreferredMode()">
            </label>
            <p>Debug: </p>
            <button class="btn chk-btn" onclick="debugModal()"> Debug options<i class="fas fa-caret-right"></i></button>

            <p>Collected Markers:</p>
            <a onclick="importExportModal()" target="_blank" class="btn chk-btn">Import/Export Markers
            </a>
        </div>`)
    htmlToAdd.forEach(element => {
        settingsModal.append(element);
    });
}

/**
 *  
 * @param {string} target Class of the targeted submodal that you want to open.
 */
function openSubModal(target) {
    document.getElementById(target).classList.remove("-hidden")

}

function closeSubModal(target) {
    document.getElementById(target).classList.add("-hidden")
}

/////////////////////Link Sharing/////////////////////////
function goToIntelById(intelId) {
    let matchedIntel = intelCache.find((item) => {
        return item.id == intelId;
    })
    switchAndFly(matchedIntel.loc, matchedIntel.map);
}

function CheckIfSharingURL() {
    let urlId = (getUrlVars()["id"] === "" ? undefined : getUrlVars()["id"]);
    if (urlId != undefined) {
        goToIntelById(urlId);
    }
}

function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function toggleAside(changePrefs = true) {
    let sidebar = document.getElementById("aside")
    let worldmap = document.getElementById("worldMap")
    sidebar.classList.toggle("menu-closed")
    worldmap.classList.toggle("menu-closed")
    window.dispatchEvent(new Event('resize'));
    if (changePrefs) {
        let currentPrefs = getUserPrefs();
        currentPrefs.asideShow = !currentPrefs.asideShow;
        setUserPrefs(currentPrefs);
    }
}

/////////////////////Intel Collected/////////////////////////
function getIntelSelectors(intelId) {
    const collectButtonSelector = `#${intelId}-collect-btn`;
    const popupCollectButtonSelector = `#${intelId}-popup-collect-btn`;
    const buttonSelector = `#${intelId}.to-intel`;
    return { collectButtonSelector, popupCollectButtonSelector, buttonSelector }
}


function toggleIntelCollected(intelId, options) {
    const { ignoreCollect = false, ignoreUnmark = false, refresh = true } = options ?? {};
    const isCollected = hasUserCollected(intelId);
    if (isCollected && !ignoreUnmark) {
        unMarkCollectedIntel(intelId);
    } else if (!isCollected && !ignoreCollect) {
        markCollectedIntel(intelId);
    }
    if (refresh) {
        CalcStats();
        TriggerSearch();
    }
}

function markCollectedIntel(intelId) {
    const { collectButtonSelector, popupCollectButtonSelector, buttonSelector } = getIntelSelectors(intelId);
    const intelHasMarker = doesIntelHaveMarker(intelId);
    $(buttonSelector).attr("collected", "");
    markButtonAsCollected(collectButtonSelector);
    markButtonAsCollected(popupCollectButtonSelector);
    if (intelHasMarker) {
        app.disableMarkers.push(intelId.toString());
        app.visibleMarkers[intelId].setOpacity(0.35);
    }
    addCollectedIntel(intelId);
}

function unMarkCollectedIntel(intelId) {
    const { collectButtonSelector, popupCollectButtonSelector, buttonSelector } = getIntelSelectors(intelId);
    const intelHasMarker = doesIntelHaveMarker(intelId);
    $(buttonSelector).removeAttr("collected");
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

function markButtonAsCollected(btnSelector) {
    $(btnSelector).attr("collected", "");
    $(btnSelector + " i").removeClass("fa-square");
    $(btnSelector + " i").addClass("fa-check-square");
}

function markButtonAsUnCollected(btnSelector) {
    $(btnSelector).removeAttr("collected");
    $(btnSelector + " i").removeClass("fa-check-square");
    $(btnSelector + " i").addClass("fa-square");
}

function markSelected() {
    let selected = []
    document.querySelectorAll('[selected]').forEach(element => {
        const intelId = element.getAttribute('id')
        selected.push(intelId)
        toggleIntelCollected(intelId, { ignoreUnmark: true, refresh: false })
    })
    fullDynamicRefresh();
    selected.forEach(id => {
        document.getElementById(id).toggleAttribute('selected')
    })
}

function unmarkSelected() {
    let selected = []
    document.querySelectorAll('[selected]').forEach(element => {
        const intelId = element.getAttribute('id')
        selected.push(intelId)
        toggleIntelCollected(intelId, { ignoreCollect: true, refresh: false })
    })
    fullDynamicRefresh();
    selected.forEach(id => {
        document.getElementById(id).toggleAttribute('selected')
    })
}

function hasUserCollected(intelId, getIndex = false) {
    let currentPrefs = getUserPrefs();
    //Search all arrays of intel to see if the intel exists
    let indexOfIntel = currentPrefs.collectedIntel.indexOf(intelId);
    if (indexOfIntel > -1 && getIndex) return indexOfIntel;
    if (indexOfIntel > -1 && !getIndex) return true;

    //Couldn't find the intel, assume they haven't collected
    return false;
}

function doesIntelHaveMarker(intelId) {
    const intel = getIntelById(intelId);
    return JSON.stringify(intel.loc) != defaultPOIData.nullLoc;
}

/////////////////////Notifications/////////////////////////
function notificationAnimationEnd() {
    //Check if supposed to be a fixed notification of not
    if (app.fixedNotification) {
        //Fixed notification, Keep fixed class after animation
        app.notificationEle.classList.remove("animated");
        app.notificationEle.classList.add("fixed");
    } else {
        //Normal notification behaviour
        app.notificationEle.classList.remove("animated", "fixed");
    }
}

function showNotification(message, isStatic = false) {
    app.fixedNotification = isStatic;
    //Notification end animation function
    setTimeout(() => {
        notificationAnimationEnd();
    }, getNotificationTime());
    app.notificationEle.classList.remove("animated", "fixed");
    void app.notificationEle.offsetWidth; //https://css-tricks.com/restart-css-animation/
    app.notificationEle.innerHTML = message;
    app.notificationEle.classList.add("animated");
}

function redirectToGithub({ itemId: id = "", itemType, issueType = "New", location }) {
    const domain = `${repoDomain}/issues/new`;
    let assignees = "Odinnh,sol3uk";

    const isIntel = (itemType == markerTypes.intel.id);
    const isMisc = (itemType == markerTypes.misc.id);
    let label = ""; issueTemplate = ""; entityName = ""; map = app.currentMap ?? "";

    if (isIntel) {
        if (issueType != "New") {
            issueTemplate = contribTemplates.intel.editId
            label = contribTemplates.intel.editTitle
            let intel = getIntelById(id);
            entityName = intel ? intel.name : "";
            map = intel ? intel.map : "";
        } else { //NEW Issue
            issueTemplate = contribTemplates.intel.newId
            label = contribTemplates.intel.newTitle
            map = app.currentMap ?? "";
        }
    } else if (isMisc) {
        issueTemplate = issueType == "New" ? contribTemplates.misc.newId : contribTemplates.misc.editId;
        label = issueType == "New" ? contribTemplates.misc.newTitle : contribTemplates.misc.editTitle;
        let miscItem = getMiscMarkerById(id);
        entityName = miscItem ? miscItem.title : "";
        // Don't yet keep map against misc markers, need to change this, this will do for now since miscs are only on the current map
        map = app.currentMap;
    }

    let labels = `${label},${map}`;

    let intelIdPlaceholder = id ? `[${id}]` : "";

    let issueTitle = `${label}: ${entityName} [${map}]${intelIdPlaceholder}`;
    let finalURL = `${domain}?assignees=${assignees}&labels=${labels}&template=${issueTemplate}.yml&title=${issueTitle}`

    if (isIntel) {
        let intelParams = `&intelId=${id}&intelName=${entityName}&intelLocation=${location}&intelMap=${map}`
        finalURL += intelParams;
    }
    if (isMisc) {
        let miscParams = `&markerId=${id}&markerName=${entityName}&markerLocation=${location}&markerMap=${map}`
        finalURL += miscParams;
    }
    window.open(encodeURI(finalURL));
    app.submittingLocation = false;
    setTimeout(() => {
        app.notificationEle.classList.remove("fixed");
    }, getNotificationTime());
}


/////////////////////Helpers For HTML Generation/////////////////////////
// Thank you https://stackoverflow.com/a/35385518/4459118
/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * NOTE: It's a bit picky about starting with empty lines
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList} 
 */
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

/////////////////////Other Util Methods/////////////////////////
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}