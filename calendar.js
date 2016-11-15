define("arale/calendar/1.0.0/calendar", ["$", "gallery/moment/2.0.0/moment", "./base-calendar", "arale/position/1.0.1/position", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events", "arale/iframe-shim/1.0.2/iframe-shim", "./i18n/zh-cn", "./date-column", "./base-column", "./month-column", "./year-column"], function (a, b, c) {
    a("$");
    var d = a("gallery/moment/2.0.0/moment"), e = a("./base-calendar"), f = a("./date-column"), g = a("./month-column"), h = a("./year-column"), i = ['<div class="ui-calendar">', '<div class="ui-calendar-pannel" data-role="pannel">', '<span class="ui-calendar-control" data-role="prev-year">&lt;&lt;</span>', '<span class="ui-calendar-control" data-role="prev-month">&lt;</span>', '<span class="ui-calendar-control month" data-role="current-month"></span>', '<span class="ui-calendar-control year" data-role="current-year"></span>', '<span class="ui-calendar-control" data-role="next-month">&gt;</span>', '<span class="ui-calendar-control" data-role="next-year">&gt;&gt;</span>', "</div>", '<div class="ui-calendar-container" data-role="container">', "</div>", "</div>"].join(""), j = e.extend({
        attrs: {
            mode: "dates",
            template: i
        }, events: {
            "click [data-role=current-month]": function () {
                "months" === this.get("mode") ? this.renderContainer("dates") : this.renderContainer("months")
            }, "click [data-role=current-year]": function () {
                "years" === this.get("mode") ? this.renderContainer("dates") : this.renderContainer("years")
            }, "click [data-role=prev-year]": function () {
                var a = this.years.prev();
                this.dates.select(a), this.months.select(a)
            }, "click [data-role=next-year]": function () {
                var a = this.years.next();
                this.dates.select(a), this.months.select(a)
            }, "click [data-role=prev-month]": function () {
                var a = this.months.prev();
                this.dates.select(a), this.years.select(a)
            }, "click [data-role=next-month]": function () {
                var a = this.months.next();
                this.dates.select(a), this.years.select(a)
            }
        }, setup: function () {
            j.superclass.setup.call(this), this.renderPannel();
            var a = {
                lang: this.get("lang"),
                focus: this.get("focus"),
                range: this.get("range"),
                format: this.get("format"),
                startDay: this.get("startDay"),
                process: this.get("process")
            };
            this.dates = new f(a), this.months = new g(a), this.years = new h(a);
            var b = this;
            this.dates.on("select", function (a, c) {
                b.set("focus", a);
                var e = b.get("focus");
                b.months.select(e), b.years.select(e), c && (b.trigger("selectDate", a), d.isMoment(a) && (a = a.format(this.get("format"))), b.output(a))
            }), this.months.on("select", function (a, c) {
                var d = b.get("focus");
                d.month(a), b.set("focus", d), b.renderPannel(), c && (b.renderContainer("dates", d), b.trigger("selectMonth", d))
            }), this.years.on("select", function (a, c) {
                var d = b.get("focus");
                d.year(a), b.set("focus", d), b.renderPannel(), c && "year" === c.data("role") && (b.renderContainer("dates", d), b.trigger("selectYear", d))
            });
            var c = this.element.find("[data-role=container]");
            c.append(this.dates.element), c.append(this.months.element), c.append(this.years.element), this.renderContainer("dates")
        }, renderContainer: function (a, b) {
            return this.set("mode", a), b = b || this.get("focus"), this.dates.hide(), this.months.hide(), this.years.hide(), this.dates.select(b, null), this.months.select(b, null), this.years.select(b, null), "dates" === a ? this.dates.element.show() : "months" === a ? this.months.element.show() : "years" === a && this.years.element.show(), this
        }, renderPannel: function () {
            var a = this.get("focus"), b = this.element.find("[data-role=current-month]"), c = this.element.find("[data-role=current-year]"), d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], e = d[a.month()];
            e = this.get("lang")[e] || e, b.text(e), c.text(a.year())
        }, focus: function (a) {
            a = d(a, this.get("format")), this.dates.focus(a), this.months.focus(a), this.years.focus(a)
        }, range: function (a) {
            this.set("range", a), this.dates.set("range", a), this.months.set("range", a), this.years.set("range", a), this.renderContainer(this.get("mode"))
        }, show: function () {
            var a = this._outputTime();
            a && this.dates.select(a), j.superclass.show.call(this)
        }, destroy: function () {
            this.dates.destroy(), this.months.destroy(), this.years.destroy(), j.superclass.destroy.call(this)
        }
    });
    j.BaseColumn = a("./base-column"), j.BaseCalendar = e, j.DateColumn = f, j.MonthColumn = g, j.YearColumn = h, c.exports = j
}), define("arale/calendar/1.0.0/base-calendar", ["$", "arale/position/1.0.1/position", "gallery/moment/2.0.0/moment", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events", "arale/iframe-shim/1.0.2/iframe-shim", "arale/calendar/1.0.0/i18n/zh-cn"], function (a, b, c) {
    var d = a("$"), e = a("arale/position/1.0.1/position"), f = a("gallery/moment/2.0.0/moment"), g = a("arale/widget/1.1.1/widget"), h = a("arale/iframe-shim/1.0.2/iframe-shim"), i = a("arale/calendar/1.0.0/i18n/zh-cn") || {}, j = (window.navigator.userAgent || "").toLowerCase(), k = j.match(/msie\s+(\d+)/), l = !1;
    k && k[1] && (l = parseInt(k[1], 10) < 9), document.documentMode && document.documentMode < 9 && (l = !0);
    var m = f();
    m = f([m.year(), m.month(), m.date()]);
    var n = g.extend({
        attrs: {
            lang: i, trigger: null, triggerType: "click", output: {
                value: "", getter: function (a) {
                    return a = a ? a : this.get("trigger"), d(a)
                }
            }, hideOnSelect: !0, focus: {
                value: "", getter: function (a) {
                    return a = a || this._outputTime(), a ? f(a, this.get("format")) : m
                }, setter: function (a) {
                    return a ? f(a, this.get("format")) : m
                }
            }, format: "YYYY-MM-DD", startDay: "Sun", range: {
                value: null, setter: function (a) {
                    if (d.isArray(a)) {
                        var b = this.get("format"), c = [];
                        return d.each(a, function (a, d) {
                            d = null === d ? null : f(d, b), c.push(d)
                        }), c
                    }
                    return a
                }
            }, process: null, align: {
                getter: function (a) {
                    if (a)return a;
                    var b = d(this.get("trigger"));
                    return b ? {selfXY: [0, 0], baseElement: b, baseXY: [0, "100%"]} : {selfXY: [0, 0], baseXY: [0, 0]}
                }
            }
        }, setup: function () {
            n.superclass.setup.call(this), this.enable(), this._shim = new h(this.element).sync();
            var a = this;
            this.element.on("mousedown", function (b) {
                if (l) {
                    var c = d(a.get("trigger"))[0];
                    c.onbeforedeactivate = function () {
                        window.event.returnValue = !1, c.onbeforedeactivate = null
                    }
                }
                b.preventDefault()
            })
        }, show: function () {
            this.trigger("show"), this.rendered || (this._pin(), this.render()), this._pin(), this.element.show()
        }, hide: function () {
            this.trigger("hide"), this.element.hide()
        }, _pin: function (a) {
            a = a || this.get("align"), e.pin({
                element: this.element,
                x: a.selfXY[0],
                y: a.selfXY[1]
            }, {element: a.baseElement, x: a.baseXY[0], y: a.baseXY[1]})
        }, _outputTime: function () {
            var a = d(this.get("output")), b = a.val() || a.text();
            return b && (b = f(b, this.get("format")), b.isValid()) ? b : void 0
        }, output: function (a) {
            var b = this.get("output");
            if (b.length) {
                a = a || this.get("focus");
                var c = b[0].tagName.toLowerCase();
                "input" === c || "textarea" === c ? b.val(a) : b.text(a), this.get("hideOnSelect") && this.hide()
            }
        }, enable: function () {
            var a = this.get("trigger");
            if (a) {
                var b = this, c = d(a);
                if ("date" === c.attr("type"))try {
                    c.attr("type", "text")
                } catch (e) {
                }
                var f = this.get("triggerType") + ".calendar";
                c.on(f, function () {
                    b.show()
                }), c.on("blur.calendar", function () {
                    b.hide()
                }), "input" !== c[0].tagName.toLowerCase() && b.autohide()
            }
        }, disable: function () {
            var a = this.get("trigger");
            if (a) {
                var b = d(a), c = this.get("triggerType") + ".calendar";
                b.off(c), b.off("blur.calendar")
            }
        }, autohide: function () {
            var a = this, b = d(this.get("trigger"))[0], c = this.element;
            d("body").on("mousedown.calendar", function (d) {
                c.find(d.target).length || c[0] === d.target || b !== d.target && a.hide()
            })
        }, destroy: function () {
            this._shim && this._shim.destroy(), d("body").off("mousedown.calendar"), n.superclass.destroy.call(this)
        }
    });
    c.exports = n
}), define("arale/calendar/1.0.0/i18n/zh-cn", [], {
    Su: "日",
    Mo: "一",
    Tu: "二",
    We: "三",
    Th: "四",
    Fr: "五",
    Sa: "六",
    Jan: "一月",
    Feb: "二月",
    Mar: "三月",
    Apr: "四月",
    May: "五月",
    Jun: "六月",
    Jul: "七月",
    Aug: "八月",
    Sep: "九月",
    Oct: "十月",
    Nov: "十一月",
    Dec: "十二月"
}), define("arale/calendar/1.0.0/date-column", ["$", "gallery/moment/2.0.0/moment", "arale/calendar/1.0.0/base-column", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events"], function (a, b, c) {
    function d(a) {
        if (a = (a || 0).toString().toLowerCase(), h.isNumeric(a))return a = parseInt(a, 10);
        for (var b = 0; b < l.length; b++)if (0 === l[b].indexOf(a)) {
            a = b;
            break
        }
        return a
    }

    function e(a) {
        a = d(a);
        for (var b = [], c = a; 7 > c; c++)b.push({label: m[c], value: c});
        for (c = 0; a > c; c++)b.push({label: m[c], value: c});
        var e = {value: a, label: m[a]};
        return {current: e, items: b}
    }

    function f(a, b, c, e) {
        var f, g, h, i = [];
        b = d(b);
        var k = function (a, b) {
            var d = {
                value: a.format("YYYY-MM-DD"),
                label: a.date(),
                day: a.day(),
                className: b,
                available: j.isInRange(a, c)
            };
            e && (d.type = "date", d = e(d)), i.push(d)
        }, l = a.clone().date(1), m = l.clone().add("months", -1), n = l.clone().add("months", 1);
        if (f = l.day() - b, 0 > f && (f += 7), 0 != f)for (h = m.daysInMonth(), p = f - 1; p >= 0; p--)g = m.date(h - p), k(g, "previous-month");
        for (h = l.daysInMonth(), p = 1; h >= p; p++)g = l.date(p), k(g, "current-month");
        if (f = 35 - i.length, 0 != f)for (0 > f && (f += 7), p = 1; f >= p; p++)g = n.date(p), k(g, "next-month");
        for (var o = [], p = 0; p < i.length / 7; p++)o.push(i.slice(7 * p, 7 * p + 7));
        var q = {value: a.format("YYYY-MM-DD"), label: a.date()};
        return {current: q, items: o}
    }

    function g(a, b) {
        var c = b.helpers._, d = '<table class="ui-calendar-date" data-role="date-column">';
        return d += '<tr class="ui-calendar-day-column">', h.each(a.day.items, function (a, b) {
            d += '<th class="ui-calendar-day ui-calendar-day-' + b.value + '" ', d += 'data-role="day" data-value="' + b.value + '">', d += c(b.label), d += "</th>"
        }), d += "</tr>", h.each(a.date.items, function (a, b) {
            d += '<tr class="ui-calendar-date-column">', h.each(b, function (a, b) {
                var c = ["ui-calendar-day-" + b.day, b.className || ""];
                b.available || c.push("disabled-element"), d += '<td class="' + c.join(" ") + '" data-role="date"', d += 'data-value="' + b.value + '">', d += b.label + "</td>"
            }), d += "</tr>"
        }), d += "</table>"
    }

    var h = a("$"), i = a("gallery/moment/2.0.0/moment"), j = a("arale/calendar/1.0.0/base-column"), k = j.extend({
        attrs: {
            startDay: "Sun",
            template: g,
            range: {
                value: null, setter: function (a) {
                    if (h.isArray(a)) {
                        var b = this.get("format"), c = [];
                        return h.each(a, function (a, d) {
                            d = null === d ? null : i(d, b), c.push(d)
                        }), c
                    }
                    return a
                }
            },
            process: null,
            model: {
                getter: function () {
                    var a = f(this.get("focus"), this.get("startDay"), this.get("range"), this.get("process")), b = e(this.get("startDay"));
                    return {date: a, day: b}
                }
            }
        }, events: {
            "click [data-role=date]": function (a) {
                var b = h(a.target), c = b.data("value");
                this.select(c, b)
            }
        }, prev: function () {
            var a = this.get("focus").format("YYYY-MM-DD"), b = this.get("focus").add("days", -1);
            return this._sync(b, a)
        }, next: function () {
            var a = this.get("focus").format("YYYY-MM-DD"), b = this.get("focus").add("days", 1);
            return this._sync(b, a)
        }, select: function (a, b) {
            if (b && b.hasClass("disabled-element"))return this.trigger("selectDisable", a, b), a;
            var c = this.get("focus").format("YYYY-MM-DD");
            return this.set("focus", a), this._sync(this.get("focus"), c, b)
        }, focus: function (a) {
            a = a || this.get("focus");
            var b = "[data-value=" + a.format("YYYY-MM-DD") + "]";
            this.element.find(".focused-element").removeClass("focused-element"), this.element.find(b).addClass("focused-element")
        }, inRange: function (a) {
            return i.isMoment(a) || (a = i(a, this.get("format"))), j.isInRange(a, this.get("range"))
        }, _sync: function (a, b, c) {
            return this.set("focus", a), a.format("YYYY-MM") !== b && this.refresh(), this.focus(a), null !== c && this.trigger("select", a, c), a
        }
    });
    c.exports = k;
    var l = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], m = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
}), define("arale/calendar/1.0.0/base-column", ["$", "gallery/moment/2.0.0/moment", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events"], function (a, b, c) {
    var d = a("$"), e = a("gallery/moment/2.0.0/moment"), f = a("arale/widget/1.1.1/widget"), g = e();
    g = e([g.year(), g.month(), g.date()]);
    var h = f.extend({
        attrs: {
            focus: {
                value: "", getter: function (a) {
                    return a ? a : g
                }, setter: function (a) {
                    return a ? e.isMoment(a) ? a : e(a, this.get("format")) : g
                }
            }, template: null, format: "YYYY-MM-DD", range: {
                value: "", getter: function (a) {
                    if (!a)return null;
                    if (d.isArray(a)) {
                        var b = a[0];
                        b && b.length > 4 && (b = e(b, this.get("format")));
                        var c = a[1];
                        return c && c.length > 4 && (c = e(c, this.get("format"))), [b, c]
                    }
                    return a
                }
            }, lang: {}
        }, compileTemplate: function () {
            var a = this.get("template");
            if (!a)return "";
            var b = this.get("model"), c = this.get("lang") || {};
            return a(b, {
                helpers: {
                    _: function (a) {
                        return c[a] || a
                    }
                }
            })
        }, parseElement: function () {
            this.element = d(this.compileTemplate())
        }, show: function () {
            this.render(), this.focus()
        }, hide: function () {
            this.element.hide()
        }, refresh: function () {
            this.element.html(d(this.compileTemplate()).html())
        }
    });
    c.exports = h, h.isInRange = function (a, b) {
        if (null == b)return !0;
        if (d.isArray(b)) {
            var c = b[0], e = b[1], f = !0;
            return c && (f = f && a >= c), e && (f = f && e >= a), f
        }
        return d.isFunction(b) ? b(a) : !0
    }
}), define("arale/calendar/1.0.0/month-column", ["$", "gallery/moment/2.0.0/moment", "arale/calendar/1.0.0/base-column", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events"], function (a, b, c) {
    function d(a, b, c) {
        var d = a.month(), e = [];
        for (i = 0; i < k.length; i++) {
            var f = {value: i, available: c.inRange.call(c, i), label: k[i]};
            b && (f.type = "month", f = b(f)), e.push(f)
        }
        for (var g = {
            year: a.year(),
            value: d,
            label: k[d]
        }, h = [], i = 0; i < e.length / 3; i++)h.push(e.slice(3 * i, 3 * i + 3));
        return {current: g, items: h}
    }

    function e(a, b) {
        if (null == b)return !0;
        if (g.isArray(b)) {
            var c = b[0], d = b[1], e = !0;
            if (c && c.month) {
                var f = a.clone().date(a.daysInMonth());
                f.hour(23).minute(59).second(59).millisecond(999), e = e && f >= c
            } else c && (e = e && a.month() + 1 >= c);
            if (d && d.month) {
                var h = a.clone().date(1);
                h.hour(0).minute(0).second(0).millisecond(0), e = e && d >= h
            } else d && (e = e && a.month() + 1 <= d);
            return e
        }
        return !0
    }

    function f(a, b) {
        var c = b.helpers._, d = '<table class="ui-calendar-month" data-role="month-column">';
        return g.each(a.items, function (b, e) {
            d += '<tr class="ui-calendar-month-column" data-year="' + a.current.year + '">', g.each(e, function (a, b) {
                d += '<td data-role="month"', b.available || (d += ' class="disabled-element"'), d += 'data-value="' + b.value + '">', d += c(b.label) + "</td>"
            }), d += "</tr>"
        }), d += "</table>"
    }

    var g = a("$"), h = a("gallery/moment/2.0.0/moment"), i = a("arale/calendar/1.0.0/base-column"), j = i.extend({
        attrs: {
            template: f,
            process: null,
            model: {
                getter: function () {
                    return d(this.get("focus"), this.get("process"), this)
                }
            }
        }, events: {
            "click [data-role=month]": function (a) {
                var b = g(a.target), c = b.data("value");
                this.select(c, b)
            }
        }, setup: function () {
            j.superclass.setup.call(this), this.on("change:range", function () {
                this.element.html(g(this.compileTemplate()).html())
            })
        }, prev: function () {
            var a = this.get("focus").add("months", -1);
            return this._sync(a)
        }, next: function () {
            var a = this.get("focus").add("months", 1);
            return this._sync(a)
        }, select: function (a, b) {
            if (b && b.hasClass("disabled-element"))return this.trigger("selectDisable", a, b), a;
            var c;
            return c = a.month ? a : this.get("focus").month(a), this._sync(c, b)
        }, focus: function (a) {
            a = a || this.get("focus");
            var b = "[data-value=" + a.month() + "]";
            this.element.find(".focused-element").removeClass("focused-element"), this.element.find(b).addClass("focused-element")
        }, refresh: function () {
            var a = this.get("focus").year(), b = this.element.find("[data-year]").data("year");
            parseInt(b, 10) !== a && this.element.html(g(this.compileTemplate()).html())
        }, inRange: function (a) {
            var b = this.get("range");
            if (a.month)return e(a, b);
            if (a.toString().length < 3) {
                var c = this.get("focus");
                return e(c.clone().month(a), b)
            }
            return e(h(a, this.get("format")), b)
        }, _sync: function (a, b) {
            return this.set("focus", a), this.refresh(), this.focus(a), null !== b && this.trigger("select", a.month(), b), a
        }
    });
    c.exports = j;
    var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}), define("arale/calendar/1.0.0/year-column", ["$", "arale/calendar/1.0.0/base-column", "gallery/moment/2.0.0/moment", "arale/widget/1.1.1/widget", "arale/base/1.1.1/base", "arale/class/1.1.0/class", "arale/events/1.1.0/events"], function (a, b, c) {
    function d(a, b, c) {
        for (var d = a.year(), g = [e({
            value: d - 10,
            label: ". . .",
            available: !0,
            role: "previous-10-year"
        }, c)], h = d - 6; d + 4 > h; h++)g.push(e({value: h, label: h, available: f(h, b), role: "year"}, c));
        g.push(e({value: d + 10, label: ". . .", available: !0, role: "next-10-year"}, c));
        var i = [];
        for (h = 0; h < g.length / 3; h++)i.push(g.slice(3 * h, 3 * h + 3));
        var j = {value: d, label: d};
        return {current: j, items: i}
    }

    function e(a, b) {
        return b ? (a.type = "year", b(a)) : a
    }

    function f(a, b) {
        if (null == b)return !0;
        if (h.isArray(b)) {
            var c = b[0];
            c && c.year && (c = c.year());
            var d = b[1];
            d && d.year && (d = d.year());
            var e = !0;
            return c && (e = e && a >= c), d && (e = e && d >= a), e
        }
        return !0
    }

    function g(a, b) {
        var c = b.helpers._, d = '<table class="ui-calendar-year" data-role="year-column">';
        return h.each(a.items, function (a, b) {
            d += '<tr class="ui-calendar-year-column">', h.each(b, function (a, b) {
                d += '<td data-role="' + b.role + '"', b.available || (d += ' class="disabled-element"'), d += 'data-value="' + b.value + '">', d += c(b.label) + "</td>"
            }), d += "</tr>"
        }), d += "</table>"
    }

    var h = a("$"), i = a("arale/calendar/1.0.0/base-column"), j = i.extend({
        attrs: {
            process: null,
            template: g,
            model: {
                getter: function () {
                    return d(this.get("focus"), this.get("range"), this.get("process"))
                }
            }
        }, events: {
            "click [data-role=year],[data-role=previous-10-year],[data-role=next-10-year]": function (a) {
                var b = h(a.target), c = b.data("value");
                this.select(c, b)
            }
        }, setup: function () {
            j.superclass.setup.call(this), this.on("change:range", function () {
                this.element.html(h(this.compileTemplate()).html())
            })
        }, prev: function () {
            var a = this.get("focus").add("years", -1);
            return this._sync(a)
        }, next: function () {
            var a = this.get("focus").add("years", 1);
            return this._sync(a)
        }, select: function (a, b) {
            if (b && b.hasClass("disabled-element"))return this.trigger("selectDisable", a, b), a;
            var c;
            return c = a.year ? a : this.get("focus").year(a), this._sync(c, b)
        }, focus: function (a) {
            a = a || this.get("focus");
            var b = "[data-value=" + a.year() + "]";
            this.element.find(".focused-element").removeClass("focused-element"), this.element.find(b).addClass("focused-element")
        }, refresh: function () {
            var a = this.get("focus").year(), b = this.element.find("[data-role=year]");
            (a < b.first().data("value") || a > b.last().data("value")) && this.element.html(h(this.compileTemplate()).html())
        }, inRange: function (a) {
            return f(a, this.get("range"))
        }, _sync: function (a, b) {
            return this.set("focus", a), this.refresh(), this.focus(a), null !== b && this.trigger("select", a.year(), b), a
        }
    });
    c.exports = j
});
