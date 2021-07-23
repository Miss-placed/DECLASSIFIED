function DonutChart(parent, spec) {
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
            "M", cx + start.x, cy + start.y,
            "A", r, r, 0, +(offset > .5), 0, cx + end.x, cy + end.y,
        ].join(" ")
    }

    var __gen_chart_item = function(out, c, r, prev, cur, i, stroke) {
        out.push(["path", {
            d: __gen_arc_path(c, c, r, prev, cur),
            class: "chart-item-" + i,
            fill: "transparent",
            "stroke-width": stroke - 5,
        }])
    }

    var __gen_chart = function(chart) {
        var prev = 0,
            out = []
            // FIXME get radius and stroke-width from CSS
        var c = chart.r,
            r = chart.r - chart.stroke / 2
        for (var i in chart.items) {
            cur = chart.items[i]
            __gen_chart_item(out, c, r, prev, cur.value, i, chart.stroke)
            prev += cur.value
        }
        if (prev < 1) {
            __gen_chart_item(out, c, r, prev, 1 - prev, "bg", chart.stroke)
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
                root.appendChild(c)
            }
        }
        return root
    }


    /* Transformation matrix (rotate and mirror) to correct orientation:
     * \[
     *   \left[
     *   \begin{array}{ccc}
     *      0 & -1 & 0 \\
     *     -1 &  0 & 0 \\
     *      0 &  0 & 1
     *   \end{array}
     *   \right]
     * \]
     */
    var correct_orientation = "matrix(0 -1 -1 0 0 0)"

    var __gen_code = function(spec) {
        return __create_tag_tree(
            ["svg", {
                transform: correct_orientation,
                class: "chart-donut",
                width: spec.r * 2,
                height: spec.r * 2,
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
}
