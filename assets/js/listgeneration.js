

function generateList(pointsOfInterest) {
    let intelList = document.getElementById("intelList")
    intelList.innerHTML = "";
    for (const [factionKey, factionValue] of Object.entries(factions)) {
        if (pointsOfInterest.some(intel => intel.faction == factionValue)) {
            let factionElement = createElement("section", [factionKey, 'faction-list'], `<img class="faction-icon" src="./assets/img/icons/faction-${factionKey}-icon.png">${factionValue}`)
            let seasonList = createElement("div", ["season-list", "visible"], "")
            for (const [seasonKey, seasonValue] of Object.entries(seasons)) {
                let seasonItems = createElement("div", ["season-item", "visible"], seasonValue)
                let categoryList = createElement("div", ["category-list", "visible"], "")
                for (const [categoryKey, categoryValue] of Object.entries(intelTypes)) {
                    let categoryItems = createElement("div", "category-item", categoryValue)
                    let intelList = createElement("div", ["category-list", "visible"], "")
                    for (item of pointsOfInterest) {
                        if (item.faction == factionValue && item.season == seasonValue && item.intelType == categoryValue) {

                            let intelItem = createElement("div", "intel-item", `${item.name}`, item.id, item.map)
                            let intelDesc = createElement("div", ["intel-desc", "visible"], "")
                            let intelLocation = createElement("p", ["intel-subtitle"], item.map)
                            let description = createElement("p", ["intel-description"], item.desc)
                            intelDesc.appendChild(intelLocation)
                            intelDesc.appendChild(description)



                            if (item.loc[0] != 0 && item.loc[1] != 0) {
                                let location = createElement("button", "item-location", "Locate Intel")
                                location.onclick = goToIntel(item)
                                intelDesc.appendChild(location)
                                intelDesc.appendChild(genShareButton(item.id))
                            }
                            intelItem.appendChild(intelDesc)
                            intelList.appendChild(intelItem)
                        }
                    }
                    categoryItems.appendChild(intelList)
                    categoryList.appendChild(categoryItems)
                    /* if (pointsOfInterest[faction][season][category][1] !== undefined) categoryList.appendChild(categoryItems) Need to find out what this was for*/
                }
                seasonItems.appendChild(categoryList)
                seasonList.appendChild(seasonItems)
            }

            factionElement.appendChild(seasonList)
            intelList.appendChild(factionElement)
        }
    }


}

function goToIntel(item) {
    return function () {
        switchAndFly(item.loc, item.map)
        if (isMobile)
            toggleAside()
    }
}

function genShareButton(intelId) {
    let shareBtn = createElement("button", ["share-intel", "fas", "fa-external-link-alt"], "")
    shareBtn.setAttribute("onclick", `copyToClipboard("${window.location.origin}${window.location.pathname}?id=${intelId}", "Link Copied To Clipboard")`)
    return shareBtn;
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
// function copyShareLink(intelId) {
//     var cb = document.getElementById("cb")
//     cb.value = window.location.origin + window.location.pathname + "?id=" + intelId
//     cb.style.display = 'block'
//     cb.select()
//     document.execCommand('copy')
//     cb.style.display = 'none'
//     
// }

function createElement(type, className, inside = undefined, id, map) {
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
    return element
}