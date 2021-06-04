function generateList() {
    let pointsOfInterest = poi
    poi.requiem[0].Artifacts[0]
    let aside = document.getElementsByTagName("aside")[0]

    for (faction in pointsOfInterest) {
        let factionElement = createElement("section", [faction, 'faction-list'], faction.toString())
        let seasonList = createElement("div", "season-list", "")
        for (season in pointsOfInterest[faction]) {
            let seasonItems = createElement("div", "season-item", `- season ${season}`)
            let categoryList = createElement("div", "category-list", "")
            for (category in pointsOfInterest[faction][season]) {
                let categoryItems = createElement("div", "category-item", `-> ${category}`)
                let intelList = createElement("div", "category-list", "")
                for (intel in pointsOfInterest[faction][season][category]) {
                    let item = pointsOfInterest[faction][season][category][intel]
                    let intelItem = createElement("div", "intel-item", `-> -> ${item.name}`)
                    let intelDesc = createElement("div", "intel-desc", "")
                    let description = createElement("p", "intel-description", item.desc)
                    let location = createElement("button", "item-location", "Locate Intel")
                    location.onclick = function() {
                        map.flyTo(item.loc, 5)
                    }
                    intelDesc.appendChild(description)
                    intelDesc.appendChild(location)

                    intelItem.appendChild(intelDesc)
                    intelList.appendChild(intelItem)
                }
                categoryItems.appendChild(intelList)
                categoryList.appendChild(categoryItems)
            }
            seasonItems.appendChild(categoryList)
            seasonList.appendChild(seasonItems)
        }

        factionElement.appendChild(seasonList)
        aside.appendChild(factionElement)
    }


}

function createElement(type, className, inside = undefined) {
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
            tempElement = document.createElement("h2")
            tempElement.onclick = function() {
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