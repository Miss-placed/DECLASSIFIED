function DonutChart(parent, spec) {
    var style = document.createElement('style');
    let label = document.createElement("label")
    label.classList.add("graph-label")
    label.innerHTML = `${spec.collected} / ${spec.total}`
    const total = spec.total

    var __polar2xy = function(a, r) {
        return {
            x: Math.cos(a * 2 * Math.PI) * r,
            y: -Math.sin(a * 2 * Math.PI) * r,
        }
    }

    var __gen_arc_path = function(cx, cy, r, start, offset) {
        var end = __polar2xy(start + offset, r)
        start = __polar2xy(start, r)
        return [
            "M", cx + start.x + 10, cy + start.y + 10,
            "A", r, r, 0, +(offset > .5), 0, cx + end.x + 10, cy + end.y + 10,
        ].join(" ")
    }

    var __gen_chart_item = function(out, c, r, prev, cur, name, stroke, color) {

        out.push(["path", {
            d: __gen_arc_path(c, c, r, prev / total, cur / total),
            class: name,
            fill: "transparent",
            "stroke-width": stroke - 5,
            style: `stroke: var(${color});`,
            value: cur
        }])
        let temp1 = __polar2xy((prev / total) + (cur / total) / 2, r + 7)
        let temp2 = __polar2xy((prev / total) + (cur / total) / 2, r)

        var css = `.${name}:hover{ transform: translate(${temp1.x - temp2.x}px, ${temp1.y - temp2.y}px) }`;

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    var __gen_chart = function(chart) {
        var prev = 0
        var c = chart.r,
            r = chart.r - chart.stroke / 2
        var out = [{
                0: "circle",
                1: {
                    "cx": c + 5,
                    "cy": c + 10,
                    "r": r,
                    "stroke-width": chart.stroke - 5,
                    "fill": "none",
                    "class": "graph-bg",
                    "style": "stroke:var(--clr-black);"
                }
            }]
            // FIXME get radius and stroke-width from CSS
        for (var i in chart.items) {
            cur = chart.items[i]
            __gen_chart_item(out, c, r, prev, cur.value, cur.label, chart.stroke, cur.color)
            prev += cur.value
        }
        if (prev < 1) {
            __gen_chart_item(out, c, r, prev, 1 - prev, "bg", chart.stroke, cur.color)
        }
        return out

    }

    var __create_tag_tree = function(elem) {
        var root = document.createElementNS("http://www.w3.org/2000/svg", elem[0])
        var attr = elem[1]
            // Set attributes
        for (var i in attr) {
            var a = document.createAttribute(i)
            a.value = attr[i]
            root.setAttributeNode(a)
        }
        // Create children nodes
        if (elem.length > 2) {
            var children = elem[2]
            for (var i in children) {
                var c = __create_tag_tree(children[i])
                    //event to be animated
                if (i != 0) {
                    c.addEventListener('mouseover', function() {
                        let facName = this.getAttribute("class")
                        let collected = this.getAttribute("value")
<<<<<<< Updated upstream
                        label.innerHTML = `${facName}: ${collected}`
=======
                        parent.getElementsByClassName("graph-label")[0].innerHTML = `${facName}: ${collected}`
>>>>>>> Stashed changes
                    })
                    c.addEventListener('mouseout', function() {
                        label.innerHTML = `${spec.collected} / ${spec.total}`
                    })
                }
                root.appendChild(c)
            }
        }
        return root
    }

<<<<<<< Updated upstream
    var correct_orientation = "matrix(0 -1 -1 0 0 0)"
=======
    var correct_orientation = `
        transform: 
            rotateZ(90deg) 
            rotateY(180deg)
        ;`
>>>>>>> Stashed changes
        // var correct_orientation = ""
    var __gen_code = function(spec) {
        return __create_tag_tree(
            ["svg", {
<<<<<<< Updated upstream
                transform: correct_orientation,
=======
                style: correct_orientation,
>>>>>>> Stashed changes
                class: "chart-donut",
                width: spec.r * 2 + 20,
                height: spec.r * 2 + 20,
            }, __gen_chart(spec)])
    }

    var __is_dict = function(v) {
        return v && typeof v === "object" && !(v instanceof Array)
    }

    DonutChart.prototype.update = function(spec) {
        // Merge the new spec
        for (var i in spec) {
            this.spec[i] = spec[i]
        }

        var code = __gen_code(this.spec)
            // TODO can we switch the elements in place?
        if (this.element != undefined) {
            this.element.remove()
        }
        this.element = this.parent.appendChild(code)
    }

    this.parent = parent
    this.spec = spec
    this.update({})
    document.getElementsByTagName('head')[0].appendChild(style);
    this.parent.appendChild(label)
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
