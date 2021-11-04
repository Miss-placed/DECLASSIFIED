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

/////////////////////Modal helpers/////////////////////////

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
    var elementsToAdd = htmlToElements(
        `<button class="close-submodal btn inverted" onclick="openModal(modalSet.intelOverview)"><i class="fas fa-x"></i></button>
    
        <h2>${intel.name}</h2>
        <h4>${mapName}</h4>
        <p>${intel.desc}</p>
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
function markIntelCollected(intelId) {
    const collectButtonSelector = `#${intelId}-collect-btn`;
    const buttonSelector = `#${intelId}.to-intel`;
    const intelHasMarker = doesIntelHaveMarker(intelId);
    if (hasUserCollected(intelId)) {
        // "Un"Collect?
        $(buttonSelector).removeAttr("collected")
        $(collectButtonSelector).removeAttr("collected")
        $(collectButtonSelector + " i").removeClass("fa-check-square")
        $(collectButtonSelector + " i").addClass("fa-square")
        if (intelHasMarker) {
            app.disableMarkers = $.grep(app.disableMarkers, function (value) {
                return value != intelId.toString();
            });
            app.visibleMarkers[intelId].setOpacity(1);
        }
        removeCollectedIntel(intelId);
    } else {
        // Collect
        $(buttonSelector).attr("collected", "")
        $(collectButtonSelector).attr("collected", "")
        $(collectButtonSelector + " i").removeClass("fa-square")
        $(collectButtonSelector + " i").addClass("fa-check-square")
        if (intelHasMarker) {
            app.disableMarkers.push(intelId.toString());
            app.visibleMarkers[intelId].setOpacity(0.35);
        }
        addCollectedIntel(intelId);
    }
    CalcStats();
    TriggerSearch();
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