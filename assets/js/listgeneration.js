/////////////////////V2/////////////////////////

function GenerateList(intelToRender) {
    const intelListEle = document.querySelector("#filtered-intel");
    intelListEle.replaceChildren(); // Empty First

    intelToRender.forEach(intel => {
        const isCollected = hasUserCollected(intel.id);
        const buttonTemplate = htmlToElement(`<button class="btn to-intel" faction="${intel.faction}" type="${intel.intelType}"target="intel-detail" id="${intel.id}" ${isCollected ? "collected" : ""}>${intel.name}</button>`);
        intelListEle.appendChild(buttonTemplate);
    });
    InitialiseButtons();
}

function InitialiseButtons() {
    document.querySelectorAll(".to-intel").forEach(element => {
        element.addEventListener('click', (event) => OpenIntelDetail(event.target.getAttribute('id')));
        //Event listener for right clicking intel buttons and marking them as collected
        $(element).contextmenu(function(event) {
            markIntelCollected(event.target.getAttribute('id'));
            return false; // Cancels the normal right-click menu
          });
    });
}

/////////////////////V1/////////////////////////
function GenerateFullIntelList(pointsOfInterest) {
    let intelList = document.getElementById("intelList")
    intelList.innerHTML = "";
    for (const [factionKey, factionValue] of Object.entries(factions)) {
        if (pointsOfInterest.some(intel => intel.faction == factionValue)) {
            intelList.appendChild(GenerateFactionList(pointsOfInterest, factionKey, factionValue));
        }
    }
}

function GenerateFactionList(pointsOfInterest, factionKey, factionValue) {
    let factionElement = createElement("section", [factionKey, 'faction-list'], `<img class="faction-icon" src="./assets/img/icons/faction-${factionKey}-icon.png">${factionValue}`);
    let seasonList = createElement("div", ["season-list", "visible"], "");
    for (const [seasonKey, seasonValue] of Object.entries(seasons)) {
        if (pointsOfInterest.some(intel => intel.season == seasonValue && intel.faction == factionValue)) {
            seasonList.appendChild(GenerateSeasonList(pointsOfInterest, seasonValue, factionValue));
        }
    }

    factionElement.appendChild(seasonList);
    return factionElement;
}

function GenerateSeasonList(pointsOfInterest, seasonValue, factionValue) {
    let seasonItems = createElement("div", ["season-item", "visible"], seasonValue);
    let categoryList = createElement("div", ["category-list", "visible"], "");
    for (const [intelTypeKey, intelTypeValue] of Object.entries(intelTypes)) {
        if (pointsOfInterest.some(intel => intel.intelType == intelTypeValue && intel.season == seasonValue && intel.faction == factionValue)) {
            categoryList.appendChild(GenerateIntelTypeList(pointsOfInterest, intelTypeValue, factionValue, seasonValue));
        }
    }
    seasonItems.appendChild(categoryList);
    return seasonItems;
}

function GenerateIntelTypeList(pointsOfInterest, intelTypeValue, factionValue, seasonValue) {
    let categoryItems = createElement("div", "category-item", intelTypeValue);
    let intelList = createElement("div", ["category-list", "visible"], "");
    for (item of pointsOfInterest) {
        if (item.faction == factionValue && item.season == seasonValue && item.intelType == intelTypeValue) {
            intelList.appendChild(GenerateIntelListItem(item));
        }
    }
    categoryItems.appendChild(intelList);
    return categoryItems;
}

function GenerateIntelListItem(item) {

    let intelItem = createElement("div", "intel-item", `${item.name}`, item.id, item.map);
    let intelDesc = createElement("div", ["intel-desc", "visible"], "");
    let intelLocation = createElement("p", ["intel-subtitle"], item.map);
    let description = createElement("p", ["intel-description"], item.desc);
    intelDesc.appendChild(intelLocation);
    intelDesc.appendChild(description);

    let btnContainer = document.createElement("div");
    btnContainer.className = "buttonContainer";
    btnContainer.appendChild(genCollectedButton(item.id));

    //Only Generate locate and share buttons if intel has location
    if (item.loc[0] != 0 && item.loc[1] != 0) {
        let location = createElement("button", ["btn", "btn-info", "inverted", "remove-button"], "Locate Intel");
        location.onclick = goToIntel(item);
        btnContainer.appendChild(location);
        btnContainer.appendChild(genShareButton(item.id));
    }

    //Always add bug button and button container
    btnContainer.appendChild(genBugButton(item.id));
    intelDesc.appendChild(btnContainer);
    intelItem.appendChild(intelDesc);
    return intelItem;
}

/////////////////////Utils/////////////////////////
function markIntelCollectedForButton(intelId) {
    return function () {
        markIntelCollected(intelId) // Only used for detail modal button, otherwise use event listeners
    }
}

function goToIntel(item) {
    return function () {
        // REMOVE THIS IF WHEN WE MOVE TO V2
        if (typeof closeModal !== "undefined") { 
            closeModal();
        }
        
        switchAndFly(item.loc, item.map)
        if (app.isMobile)
            toggleAside()
    }
}

function copyClipboardForButton(intelId) {
    return function () {
        copyToClipboard(`${window.location.origin}${window.location.pathname}?id=${intelId}`, "Link Copied To Clipboard")
    }
}

function redirectToGithubForButton(itemId) {
    return function () {
        //This is only for intel in the side panel. Misc markers are only on the map
        redirectToGithub({ itemType: markerTypes.intel.id, issueType: "Fix", itemId: itemId })
    }
}

function genShareButton(intelId) {
    let shareBtn = createElement("button", ["btn", "btn-info", "inverted", "action-buttons", "share", "fas", "fa-link"], "")
    shareBtn.title = "Copy Sharing Link";
    shareBtn.onclick = copyClipboardForButton(intelId);
    return shareBtn;
}

function genBugButton(itemId) {
    let bugBtn = createElement("button", ["btn", "btn-info", "inverted", "action-buttons", "bugRep", "fas", "fa-bug"], "")
    bugBtn.title = "Submit Bug Report";
    bugBtn.onclick = redirectToGithubForButton(itemId);
    return bugBtn;
}

function genCollectedButton(itemId, isForPopup = false) {
    let collectedBtn = createElement("button", ["btn", "btn-info", "inverted", "action-buttons", "mark-collected"], "Collected:")
    if(hasUserCollected(itemId))
        collectedBtn.appendChild(genIcon("fa-check-square"));
    else 
        collectedBtn.appendChild(genIcon("fa-square"));

    collectedBtn.id = `${itemId}${isForPopup ? '-popup' : ''}-collect-btn`;
    collectedBtn.title = "Mark As Collected";
    collectedBtn.onclick = markIntelCollectedForButton(itemId);
    return collectedBtn;
}

function genIcon(fontAwesomeClass) {
    return htmlToElement(`<i class="fas ${fontAwesomeClass}" aria-hidden="true" style="margin-left: 5px;"></i>`);
}


function genMoreButton(intel) {
    let moreBtn = createElement("button", ["btn", "btn-info", "inverted", "action-buttons", "moreInfo", "fas", "fa-ellipsis-h"], "")
    moreBtn.title = "More Info";
    return moreBtn;
}

function copyToClipboard(text, notif) {
    const listener = function (ev) {
        ev.preventDefault();
        ev.clipboardData.setData('text/plain', text);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    showNotification(notif)
}

function createElement(type, className, inside = undefined, id, map, iconClass) {
    element = document.createElement(type)
    if (className != "") {
        if (Array.isArray(className)) {
            for (i in className) element.classList.add(className[i])
        } else {
            element.classList.add(className)
        }
    }
    if (inside != "") {
        if (Array.isArray(inside)) {
            for (i in inside) element.appendChild(inside[i])
        }
        let tempElement = undefined
        if (type == "section" || type == "div") {
            tempElement = document.createElement("h2");
            tempElement.className = "category";
            if (id) {
                tempElement.className += " searchable";
                tempElement.setAttribute("data-id", id);
            }
            if (map) tempElement.setAttribute("data-map", map);
            tempElement.onclick = function () {
                if (this.nextSibling != undefined) this.nextSibling.classList.toggle("visible")
            }
            tempElement.innerHTML = inside
        } else {
            tempElement = document.createTextNode(inside)
        }
        element.appendChild(tempElement)

    }
    if (iconClass) {
        element.appendChild(genIcon(iconClass))
    }
    return element
}