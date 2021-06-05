function generateList() {
    let pointsOfInterest = poi
    let aside = document.getElementById("aside")

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
                    intelDesc.appendChild(description)



                    if (item.loc[0] != 0 && item.loc[1] != 0) {
                        let location = createElement("button", "item-location", "Locate Intel")
                        location.onclick = function() {
                            switchAndFly(item.loc, item.map)
                        }
                        intelDesc.appendChild(location)
                    }

                    intelItem.appendChild(intelDesc)
                    intelList.appendChild(intelItem)
                }
                categoryItems.appendChild(intelList)
                if (pointsOfInterest[faction][season][category][1] !== undefined) categoryList.appendChild(categoryItems)
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