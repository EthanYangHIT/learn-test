if ("undefined" == typeof I$)I$ = function () {
    var e = {}, t = function () {
        return !1
    }, i = {};
    var n = function (t, i) {
        return e.toString.call(t) === "[object " + i + "]"
    };
    return function (e, s) {
        var r = i[e], a = n(s, "Function");
        if (null != s && !a)r = s;
        if (a) {
            var o = [];
            for (var l = 2, c = arguments.length; l < c; l++)o.push(arguments.callee(arguments[l]));
            var d = {};
            o.push.call(o, d, {}, t, []);
            var u = s.apply(null, o) || d;
            if (!r || !n(u, "Object"))r = u; else if (Object.keys)for (var f = Object.keys(u), l = 0, c = f.length, _; l < c; l++) {
                _ = f[l];
                r[_] = u[_]
            } else for (var _ in u)r[_] = u[_]
        }
        if (null == r)r = {};
        i[e] = r;
        return r
    }
}();
I$(132, function (e, t, i, n) {
    var s = Function.prototype;
    s._$aop = function (e, t) {
        var t = t || i, e = e || i, s = this;
        return function () {
            var i = {args: n.slice.call(arguments, 0)};
            e(i);
            if (!i.stopped) {
                i.value = s.apply(this, i.args);
                t(i)
            }
            return i.value
        }
    };
    s._$bind = function () {
        var e = arguments, t = arguments[0], i = this;
        return function () {
            var s = n.slice.call(e, 1);
            n.push.apply(s, arguments);
            return i.apply(t || null, s)
        }
    };
    s._$bind2 = function () {
        var e = arguments, t = n.shift.call(e), i = this;
        return function () {
            n.push.apply(arguments, e);
            return i.apply(t || null, arguments)
        }
    };
    var s = String.prototype;
    if (!s.trim)s.trim = function () {
        var e = /(?:^\s+)|(?:\s+$)/g;
        return function () {
            return this.replace(e, "")
        }
    }();
    if (!this.console)this.console = {log: i, error: i};
    if (!0) {
        NEJ = this.NEJ || {};
        NEJ.copy = function (e, i) {
            e = e || {};
            i = i || t;
            for (var n in i)if (i.hasOwnProperty(n))e[n] = i[n];
            return e
        };
        NEJ = NEJ.copy(NEJ, {
            O: t, R: n, F: i, P: function (e) {
                if (!e || !e.length)return null;
                var t = window;
                for (var i = e.split("."), n = i.length, s = "window" == i[0] ? 1 : 0; s < n; t = t[i[s]] = t[i[s]] || {}, s++);
                return t
            }
        });
        return NEJ
    }
    return e
});
(function () {
    var e, t, i = [].slice;
    e = "0.0.1";
    t = {};
    setTimeout(function () {
        var e, i, n, s, r, a;
        a = t.cookieInit({});
        a = t.toolInit(a);
        s = t.packerInit(a);
        i = !1;
        e = !1;
        n = null;
        r = function (e) {
            var t, n, r;
            n = e.shift();
            if (a.isFunction(n))return n.apply(null, e);
            if ("_setAccount" === n)i = !0;
            if (i)if (t = s[n]) {
                r = t.apply(null, e);
                if (a.isObject(r) && r.send === !0)return a.request(r); else return r
            }
        };
        if ("undefined" != typeof _smq) {
            for (; _smq.length;)r(_smq.shift());
            _smq.push = r;
            return a.event.add(window, "unload", function (e) {
                return r(["pageClose"])
            })
        }
    }, 0);
    t.cookieInit = function (e) {
        var t, n, s, r, a, o, l, c, d, u;
        if (null == e)e = {};
        r = encodeURIComponent;
        n = decodeURIComponent;
        c = /\+/g;
        a = function (e) {
            if (t.raw)return e; else return r(e)
        };
        s = function (e) {
            if (t.raw)return e; else try {
                return n(e)
            } catch (i) {
            }
        };
        u = function (e) {
            return a(String(e))
        };
        l = function (e) {
            if (0 === e.indexOf('"'))e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
            try {
                e = n(e.replace(c, " "))
            } catch (t) {
            }
            return e
        };
        d = function (e, i) {
            var n;
            n = t.raw ? e : l(e);
            return ("function" == typeof i ? i(n) : void 0) || n
        };
        o = function () {
            var e, t, n, s, r, a, o;
            n = 1 <= arguments.length ? i.call(arguments, 0) : [];
            s = n.shift();
            for (a = 0, o = n.length; a < o; a++) {
                t = n[a];
                for (e in t) {
                    r = t[e];
                    s[e] = r
                }
            }
            return s
        };
        t = e.cookie = function (e, i, n) {
            var r, l, c, f, _, h, p, m, v, g;
            if (void 0 !== i) {
                n = o({}, t.defaults, n);
                if ("number" == typeof n.expires) {
                    c = n.expires;
                    m = n.expires = new Date;
                    m.setDate(m.getDate() + c)
                }
                return document.cookie = [a(e), "=", u(i), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain.split(":")[0] : "", n.secure ? "; secure" : ""].join("")
            }
            p = e ? void 0 : {};
            l = document.cookie ? document.cookie.split("; ") : [];
            for (v = 0, g = l.length; v < g; v++) {
                f = l[v];
                h = f.split("=");
                _ = s(h.shift());
                r = h.join("=");
                if (e === _) {
                    p = d(r, i);
                    break
                }
                if (!e && void 0 !== (r = d(r)))p[_] = r
            }
            return p
        };
        t.defaults = {expires: 720, path: "/"};
        e.removeCookie = function (t, i) {
            if (void 0 === e.cookie(t))return !1;
            e.cookie(t, "", o({}, i, {expires: -1}));
            return !0
        };
        return e
    };
    t.toolInit = function (e, t) {
        var i, n, s, r, a, o, l, c, d, u;
        if (null == e)e = {};
        u = window;
        r = document;
        o = encodeURIComponent;
        a = r.documentElement;
        c = navigator;
        n = Object.prototype;
        l = Array.isArray;
        d = n.toString;
        i = "_smt_uid";
        s = function () {
            var t, i;
            i = e.time();
            t = e.intval(Math.random() * i);
            if (t < 1e8)t += 1e8;
            return [i.toString(16), t.toString(16)].join(".")
        };
        e.time = function () {
            return e.intval((new Date).valueOf() / 1e3)
        };
        e.uid = function (t) {
            var n;
            if (null == t)t = "";
            n = e.cookie(i);
            if (n)return n;
            n = s();
            e.cookie(i, n, {domain: t});
            return n
        };
        e.isFunction = function (e) {
            return "[object Function]" === d.call(e)
        };
        e.isArray = l || function (e) {
                return "[object Array]" === d.call(e)
            };
        e.isUndefined = function (e) {
            return e === t
        };
        e.isNumber = function (e) {
            return "[object Number]" === d.call(e)
        };
        e.isObject = function (e) {
            return e === Object(e)
        };
        e.map = e.collect = function (e, t, i) {
            var n, s, r, a, o;
            s = [];
            if (!e)return s;
            for (n = a = 0, o = e.length; a < o; n = ++a) {
                r = e[n];
                s[s.length] = t.call(i, r, n, e)
            }
            return s
        };
        e.intval = function (e, t) {
            if (null == t)t = 10;
            return parseInt(e, t) || 0
        };
        e.parseUrl = function (t) {
            var i, n, s, r, a, o;
            if (!t)return {};
            i = new RegExp("#.*$").exec(t);
            n = e.isArray(i) ? i[0] : "";
            o = t.replace(n, "").split("?");
            a = o.shift();
            r = o.join("?") || "";
            s = r.length > 0 ? e.map(r.split("&"), function (e) {
                return e.split("=")
            }) : [];
            return {uri: a, params: s, hash: n, qs: r}
        };
        e.findUrl = function (t, i) {
            var n, s;
            n = e.parseUrl(t).params;
            s = "";
            e.map(n, function (e) {
                if (e[0] === i)return s = e[1]
            });
            return s
        };
        e.decodeSmtb = function (e) {
            var t, i, n, s, r, a, o, l;
            l = [];
            a = [];
            e = e.split("").reverse();
            if (23 === e.length)e.push(0);
            i = 0;
            for (; i < e.length;) {
                l = [];
                l.push(e[i + 1]);
                l.push(e[i]);
                o = l.join("");
                s = parseInt(o, 16);
                if (s < i / 2 + 1)s += 256;
                s -= i / 2 + 1;
                a.push(s);
                i += 2
            }
            r = (a[0] << 24) + (a[1] << 16) + (a[2] << 8) + a[3];
            t = (a[4] << 24) + (a[5] << 16) + (a[6] << 8) + a[7];
            n = (a[8] << 24) + (a[9] << 16) + (a[10] << 8) + a[11];
            if (!isNaN(r) && !isNaN(t) && !isNaN(n))return [r, t, n]
        };
        e.encodeSmtb = function (e, t, i, n) {
            var s, r, a, o, l, c, d, u, f, _, h, p;
            c = [];
            r = 1;
            o = "";
            try {
                h = [e, t, i];
                for (d = 0, f = h.length; d < f; d++) {
                    a = h[d];
                    p = [24, 16, 8, 0];
                    for (u = 0, _ = p.length; u < _; u++) {
                        l = p[u];
                        o = (a >> l & 255) + r;
                        o = o >= 256 ? o - 256 : o;
                        o = (o << 4 & 240) + (o >> 4);
                        o = o.toString(16);
                        if (1 === o.length)o = "0" + o;
                        c.push(o);
                        r += 1
                    }
                }
                o = c.join("").split("").reverse().join("").replace(/^0+/, "").toUpperCase();
                if (n)return n(null, o); else return o
            } catch (m) {
                s = m;
                if (s)return n(s)
            }
        };
        e.pageLoadTime = function () {
            var t, i;
            if (!(t = u.performance) || !(i = t.timing))return 0;
            if (i.domContentLoadedEventEnd < i.fetchStart)return 0; else return e.intval(i.domContentLoadedEventEnd - i.fetchStart)
        };
        e.flashVersion = function () {
            var e, t, i, n, s, r, a;
            if (c.plugins && c.plugins.length) {
                a = c.plugins;
                for (n = 0, r = a.length; n < r; n++) {
                    t = a[n];
                    if (t.name.indexOf("Shockwave Flash") !== -1)return t.description.split("Shockwave Flash ")[1] || ""; else;
                }
            }
            if (u.ActiveXObject)for (i = s = 10; s >= 2; i = --s)try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                if (e)return "" + i + ".0"
            } catch (o) {
            }
            return ""
        };
        e.viewHeight = function () {
            var e;
            try {
                return a.clientHeight || r.body.clientHeight
            } catch (t) {
                e = t;
                return 0
            }
        };
        e.scrollTop = function () {
            try {
                return e.intval(u.pageYOffset || a.scrollTop)
            } catch (t) {
            }
            return 0
        };
        e.scrollLeft = function () {
            try {
                return e.intval(u.pageXOffset || a.scrollLeft)
            } catch (t) {
            }
            return 0
        };
        e.throttle = function (e, t) {
            var i;
            i = !1;
            return function () {
                if (!i) {
                    i = !0;
                    setTimeout(function () {
                        return i = !1
                    }, t);
                    return e.apply(null, arguments)
                }
            }
        };
        e.debounce = function (e, t, i) {
            var n;
            n = null;
            return function () {
                var i;
                i = arguments;
                if (n)clearTimeout(n);
                return n = setTimeout(function () {
                    return e.apply(null, i)
                }, t)
            }
        };
        e.request = function (t) {
            var i, n, s, r, a;
            n = e.urlFormat(t);
            a = [];
            for (s = 0, r = n.length; s < r; s++) {
                i = n[s];
                a.push(e.send(i, new Image(0, 0)))
            }
            return a
        };
        e.urlFormat = function (e) {
            var t, i, n, s;
            i = function () {
                var i, n;
                i = e.params;
                n = [];
                for (t in i) {
                    s = i[t];
                    n.push("" + t + "=" + o(s))
                }
                return n
            }().join("&");
            n = ["" + e.protocol + "//" + e.host + e.path + "?" + i];
            if (e.localPath)n.push("" + e.localPath + e.path + "?" + i);
            return n
        };
        e.send = function (t, i) {
            var n;
            i.src = t;
            n = function () {
                e.event.remove(i, "error", n);
                return setTimeout(function () {
                    return i.src = "" + t + "&retry=yes"
                }, 2e3)
            };
            return e.event.add(i, "error", n)
        };
        e.random = function (e) {
            if (null == e)e = 8;
            return Math.random().toString().substr(2, e)
        };
        e.event = {
            add: function (e, t, i) {
                var n, s, r;
                n = "addEventListener";
                s = "attachEvent";
                r = "on" + t;
                if (e[n])return e[n](t, i, !1); else if (e[s])return e[s](r, i); else return e[r] = i
            }, remove: function (e, t, i) {
                var n, s, r;
                r = "removeEventListener";
                n = "detachEvent";
                s = "on" + t;
                if (e[r])return e[r](t, i, !1); else if (e[n])return e[n](s, i); else return e[s] = null
            }, event: function (e) {
                return e || window.event
            }, target: function (e) {
                return e && (e.target || e.srcElement || null)
            }
        };
        e.customVars = function (t, i) {
            var n, s, r, a;
            if (null == i)i = !1;
            if (!i)return e.map(t, function (e) {
                return "v" + e[0] + "=" + e[1] + "&s" + e[0] + "=" + e[2]
            }).join("&");
            n = [];
            t.sort(function (e, t) {
                if (e[0] > t[0])return 1;
                if (e[0] < t[0])return -1; else;
            });
            for (r = 0, a = t.length; r < a; r++) {
                s = t[r];
                if (1 === +s[2])n.push("" + s[0] + "=" + s[1])
            }
            return n.join("&")
        };
        e.pageWidth = function () {
            var e, t, i, n, s, a, o, l, c, d, u;
            s = document;
            e = s.body;
            r = s.documentElement;
            n = e.children;
            i = 0;
            l = null;
            t = r.clientWidth || e.clientWidth;
            d = function (e) {
                var n, s, r, a;
                s = 0;
                for (r = 0, a = e.length; r < a; r++) {
                    n = e[r];
                    i = n.offsetWidth;
                    if (i > 600 && (i < t - 10 || i > t))if (i > s)s = i
                }
                return s
            };
            o = function (e) {
                var t, i, n, s, r, o;
                i = -1;
                for (r = 0, o = e.length; r < o; r++) {
                    n = e[r];
                    t = n.offsetHeight;
                    if (t > i) {
                        s = e[a];
                        i = t
                    }
                }
                return s
            };
            if (c = d(n))return c;
            for (a = u = 0; u < 3; a = ++u) {
                l = o(n);
                if (l) {
                    n = l.children;
                    c = d(n);
                    if (c)break
                }
            }
            return c || e.offsetWidth
        };
        return e
    };
    t.packerInit = function (t, i) {
        var n, s, r, a, o, l, c, d, u, f, _, h, p, m, v, g, $, y, b, x, w, T, I, C, S, k, E, N;
        y = window;
        _ = navigator;
        l = document;
        f = l.location;
        c = encodeURIComponent;
        s = "_smtv";
        n = "_smtb";
        o = [];
        h = {
            isSSL: "http:" === f.protocol ? "no" : "yes",
            allowLinker: !1,
            referrerSmtEnabled: !1,
            siteId: "",
            domain: f.host || f.hostname,
            heatmapEnabled: "no",
            clickTimeout: 0,
            host: f.host || f.hostname,
            smtb: function () {
                var e;
                e = t.findUrl(f.href, "smt_b");
                if (e)return t.cookie(n, e)
            }(),
            params: {
                sid: "",
                uid: function () {
                    var e;
                    e = null;
                    return function () {
                        if (e)return e; else return e = t.uid(h.domain)
                    }
                }(),
                url: f.href,
                tl: l.title,
                cs: (l.charset || l.characterSet || "").toLowerCase(),
                rl: function () {
                    return l.referrer
                },
                fv: t.flashVersion(),
                sr: [y.screen.width, y.screen.height].join("x"),
                sc: screen.colorDepth,
                tz: (new Date).getTimezoneOffset() / -60,
                je: function () {
                    try {
                        if ("javaEnabled" in _ && _.javaEnabled())return 1; else return 0
                    } catch (e) {
                    }
                    return 0
                }(),
                sp: t.scrollTop,
                vh: t.viewHeight,
                pw: t.pageWidth,
                pt: t.pageLoadTime,
                vars: function () {
                    var e, n, r, a, l, c, d;
                    r = t.cookie(s);
                    if (!r)return i;
                    d = r.split("&");
                    for (l = 0, c = d.length; l < c; l++) {
                        a = d[l];
                        n = a.split("=");
                        e = t.intval(n[0]);
                        if (!(e < 1 || e > 5)) {
                            n.push(1);
                            o.push(n)
                        } else;
                    }
                    return t.customVars(o)
                }()
            }
        };
        v = h.params;
        m = function (e, t) {
            var i, n;
            i = "sid,uid,url,tl,cs,rl,fv,sr,sc,tz,je,sp,vh,pt,vars";
            if (e)v.url = "" + f.protocol + "//" + h.host + e;
            if (t)v.tl = t;
            n = g("pageview", i.split(","));
            return n
        };
        a = function (e, t, i, n, s) {
            var r;
            if (null == s)s = 0;
            if (e) {
                r = g("event", ["sid", "uid", "url"]);
                r.params.cat = e;
                if (t)r.params.act = t;
                if (i)r.params.lab = i;
                if (n)r.params.val = n;
                if (n)r.params.val = n;
                r.params.brf = s ? 1 : 0;
                return r
            }
        };
        r = function (e, t) {
            var i, n;
            if (h.heatmapEnabled) {
                i = "sid,uid,url,pw";
                n = g("click", i.split(","));
                n.params.x = e;
                n.params.y = t;
                return n
            }
        };
        p = function (e, t) {
            var i, n;
            i = "sid,uid,url,sp,vh";
            n = g("close", i.split(","));
            return n
        };
        g = function (e, i) {
            return {
                send: !0,
                protocol: "yes" === h.isSSL ? "https:" : "http:",
                localPath: h.localPath,
                host: u(),
                path: "/p.gif",
                params: function () {
                    var n, s, r, a, o, l;
                    s = {type: e};
                    for (o = 0, l = i.length; o < l; o++) {
                        n = i[o];
                        if (a = h.params[n]) {
                            r = t.isFunction(a) ? a() : a;
                            if (!t.isUndefined(r))s[n] = r
                        } else;
                    }
                    s._ = t.random();
                    return s
                }()
            }
        };
        u = function () {
            return "smtvip.admaster.com.cn"
        };
        $ = function (t) {
            if ("function" == typeof t)t(e);
            return e
        };
        N = function (e) {
            return h.isSSL = "yes" === e ? "yes" : "no"
        };
        w = function (e, t) {
            return h.siteId = h.params.sid = e.toLowerCase()
        };
        C = function (e) {
            if (e === h.domain.substr(-e.length))return h.domain = e
        };
        S = function (e) {
            return h.heatmapEnabled = "yes" === e
        };
        T = function (e) {
            return h.clickTimeout = Math.max(0, t.intval(e))
        };
        k = function (e) {
            return h.localPath = e
        };
        I = function (e, i, n) {
            var r, a, l, d, u, f;
            f = l = !1;
            for (d = 0, u = o.length; d < u; d++) {
                a = o[d];
                if (+a[0] === +e) {
                    l = !0;
                    f = a[1] !== c(i) || +a[2] !== +n;
                    a[1] = c(i);
                    a[2] = n
                }
            }
            if (l === !1)o.push([e, i, n]);
            f = l === !1 && 1 === +n;
            t.cookie.apply(null, [s, t.customVars(o, r = !0), {domain: h.domain}]);
            return h.params.vars = t.customVars(o)
        };
        b = function (e) {
            var i, s;
            if (!e)return console.log("decode smtb need cb");
            s = t.cookie(n);
            if (!s)return e(Error("Smtb not found"));
            i = t.decodeSmtb(s);
            if (!i)return e(Error("Smtb is invalid")); else return e(null, i)
        };
        x = t.encodeSmtb;
        E = function (e) {
            var i;
            if ("yes" === e)h.referrerSmtEnabled = !0; else h.referrerSmtEnabled = !1;
            if (h.referrerSmtEnabled) {
                i = t.findUrl(f.referrer, "smt_b");
                if (i)return t.cookie(n, i, h.domain)
            }
        };
        d = function (e, t) {
            if (t)t(h[e]);
            return h[e]
        };
        return {
            pageview: m,
            custom: a,
            pageClose: p,
            version: $,
            _setAccount: w,
            _setCustomVar: I,
            _setDomainName: C,
            _setClickTimeOut: T,
            _setSSL: N,
            _setHeatmapEnabled: S,
            _setLocalPath: k,
            _decodeSmt_b: b,
            _encodeSmt_b: x,
            _setReferrerSmtEnabled: E,
            options: d
        }
    }
}).call(this);
I$(27, function () {
    var e = {};
    e.UPLOAD_URL = "/upload";
    e.UPLOAD_PARAM = {};
    e.COLOR_SUCCESS = "#5cb85c";
    e.COLOR_INFO = "#5bc0de";
    e.COLOR_DANGER = "#d9534f";
    e.COLOR_WARNING = "#f0ad4e";
    e.EMAIL_SUFFIX = ["@163.com", "@126.com", "@yeah.net", "@vip.163.com", "@vip.126.com", "@popo.163.com", "@188.com", "@qq.com", "@yahoo.com", "@sina.com"];
    if (!1) {
        e.ORIGINAL_DOMAIN_URL = "http://m.siji.163.com";
        e.DOMAIN_URL = "http://m.siji.163.com";
        e.MAINSITE = "http://m.siji.163.com";
        e.PUSH_PORT = "6003";
        e.PUSH_HOST = "123.58.180.233";
        e.PUSH_PRODUCT_KEY = "7c48f34241f94364b84432a8794e94e7";
        e.IM_DOMAIN_URL = "http://laike.yixin.im/user/init/2cd06fe49259d7d0?account="
    } else {
        e.ORIGINAL_DOMAIN_URL = "http://m.siji.163.com";
        e.DOMAIN_URL = "http://m.siji.163.com";
        e.MAINSITE = "http://m.siji.163.com";
        e.PUSH_PORT = "6003";
        e.PUSH_HOST = "123.58.180.233";
        e.PUSH_PRODUCT_KEY = "2f21a80299484573807cd4ce58a324a3";
        e.IM_DOMAIN_URL = "http://laike.yixin.im/user/init/2cd06fe49259d7d0?account="
    }
    e.helpColors = ["#fc8d8d", "#89d4fa", "#9ce593", "#ffc483", "#ffa6f0", "#8bf6f9", "#fff98c", "#b6a8fb", "#89a1fd"];
    e.maxTaxPrice = 1e3;
    e.MAX_PICK = 2;
    e.PAYMETHOD_MAP = {0: "网易宝", 1: "货到付款", 2: "支付宝"};
    e.ACT0422_TIME = {warmup: 14291496e5, start: 1429668e6, end: 1430064e6};
    return e
}, 132, 155);
I$(254, function (e, t, i, n) {
    e.__forIn = function (e, t, i) {
        if (!e || !t)return null;
        var n = Object.keys(e);
        for (var s = 0, r = n.length, a, o; s < r; s++) {
            a = n[s];
            o = t.call(i || null, e[a], a, e);
            if (o)return a
        }
        return null
    };
    e.__forEach = function (e, t, i) {
        e.forEach(t, i)
    };
    e.__col2array = function (e) {
        return n.slice.call(e, 0)
    };
    e.__str2time = function (e) {
        return Date.parse(e)
    };
    return e
});
I$(249, function (e, t, i, n, s) {
    var r = this.navigator.platform, a = this.navigator.userAgent;
    var o = {mac: r, win: r, linux: r, ipad: a, ipod: a, iphone: r, android: a};
    t._$IS = o;
    for (var l in o)o[l] = new RegExp(l, "i").test(o[l]);
    o.ios = o.ipad || o.iphone || o.ipod;
    o.tablet = o.ipad;
    o.desktop = o.mac || o.win || o.linux && !o.android;
    t._$is = function (e) {
        return !!o[e]
    };
    var c = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    t._$KERNEL = c;
    if (/msie\s+(.*?);/i.test(a) || /trident\/.+rv:([\d\.]+)/i.test(a)) {
        c.engine = "trident";
        c.browser = "ie";
        c.version = RegExp.$1;
        c.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var d = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        c.release = d[document.documentMode] || d[parseInt(c.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(a)) {
        c.engine = "webkit";
        c.release = RegExp.$1 || "";
        c.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(a)) {
        c.engine = "gecko";
        c.release = RegExp.$1 || "";
        c.browser = "firefox";
        c.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(a))c.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(a)) {
        c.engine = "presto";
        c.release = RegExp.$1 || "";
        c.browser = "opera";
        c.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(a))c.version = RegExp.$1 || ""
    }
    if ("unknow" == c.browser) {
        var d = ["chrome", "maxthon", "safari"];
        for (var u = 0, f = d.length, _; u < f; u++) {
            _ = "safari" == d[u] ? "version" : d[u];
            if (new RegExp(_ + "/(.*?)(?=\\s|$)", "i").test(a)) {
                c.browser = d[u];
                c.version = RegExp.$1.trim();
                break
            }
        }
    }
    t._$SUPPORT = {};
    t._$support = function (e) {
        return !!t._$SUPPORT[e]
    };
    if (!0)e.copy(e.P("nej.p"), t);
    return t
}, 132);
I$(138, function (e, t, i, n, s, r) {
    return e
}, 254, 249);
I$(28, function (e, t, i, n, s, r) {
    var a = function (e, t) {
        try {
            t = t.toLowerCase();
            if (null === e)return "null" == t;
            if (void 0 === e)return "undefined" == t; else return n.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch (i) {
            return !1
        }
    };
    i._$isFunction = function (e) {
        return a(e, "function")
    };
    i._$isString = function (e) {
        return a(e, "string")
    };
    i._$isNumber = function (e) {
        return a(e, "number")
    };
    i._$isBoolean = function (e) {
        return a(e, "boolean")
    };
    i._$isDate = function (e) {
        return a(e, "date")
    };
    i._$isArray = function (e) {
        return a(e, "array")
    };
    i._$isObject = function (e) {
        return a(e, "object")
    };
    i._$length = function () {
        var e = /[^\x00-\xff]/g;
        return function (t) {
            return ("" + (t || "")).replace(e, "**").length
        }
    }();
    i._$loop = function (e, n, s) {
        if (i._$isObject(e) && i._$isFunction(n))return t.__forIn.apply(t, arguments); else return null
    };
    i._$indexOf = function (e, t) {
        var n = i._$isFunction(t) ? t : function (e) {
            return e === t
        }, s = i._$forIn(e, n);
        return null != s ? s : -1
    };
    i._$binSearch = function () {
        var e;
        var t = function (i, n, s) {
            if (n > s)return -1;
            var r = Math.ceil((n + s) / 2), a = e(i[r], r, i);
            if (0 == a)return r;
            if (a < 0)return t(i, n, r - 1); else return t(i, r + 1, s)
        };
        return function (i, n) {
            e = n || s;
            return t(i, 0, i.length - 1)
        }
    }();
    i._$reverseEach = function (e, t, n) {
        if (e && e.length && i._$isFunction(t))for (var s = e.length - 1; s >= 0; s--)if (t.call(n, e[s], s, e))return s;
        return null
    };
    i._$forEach = function (e, n, s) {
        if (e && e.length && i._$isFunction(n))if (!e.forEach)i._$forIn.apply(i, arguments); else t.__forEach(e, n, s)
    };
    i._$forIn = function (e, t, n) {
        if (!e || !i._$isFunction(t))return null;
        if (i._$isNumber(e.length)) {
            for (var s = 0, r = e.length; s < r; s++)if (t.call(n, e[s], s, e))return s
        } else if (i._$isObject(e))return i._$loop(e, t, n);
        return null
    };
    i._$encode = function (e, t) {
        t = "" + t;
        if (!e || !t)return t || ""; else return t.replace(e.r, function (t) {
            var i = e[!e.i ? t.toLowerCase() : t];
            return null != i ? i : t
        })
    };
    i._$escape = function () {
        var e = /<br\/?>$/, t = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": ""
        };
        return function (n) {
            n = i._$encode(t, n);
            return n.replace(e, "<br/><br/>")
        }
    }();
    i._$unescape = function () {
        var e = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (t) {
            return i._$encode(e, t)
        }
    }();
    i._$format = function () {
        var e = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }, t = ["上午", "下午"], n = ["A.M.", "P.M."], s = ["日", "一", "二", "三", "四", "五", "六"], r = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var o = function (e) {
            e = parseInt(e) || 0;
            return (e < 10 ? "0" : "") + e
        };
        var l = function (e) {
            return e < 12 ? 0 : 1
        };
        return function (c, d, u) {
            if (!c || !d)return "";
            c = i._$var2date(c);
            e.yyyy = c.getFullYear();
            e.yy = ("" + e.yyyy).substr(2);
            e.M = c.getMonth() + 1;
            e.MM = o(e.M);
            e.eM = a[e.M - 1];
            e.cM = r[e.M - 1];
            e.d = c.getDate();
            e.dd = o(e.d);
            e.H = c.getHours();
            e.HH = o(e.H);
            e.m = c.getMinutes();
            e.mm = o(e.m);
            e.s = c.getSeconds();
            e.ss = o(e.s);
            e.ms = c.getMilliseconds();
            e.w = s[c.getDay()];
            var f = l(e.H);
            e.ct = t[f];
            e.et = n[f];
            if (u)e.H = e.H % 12;
            return i._$encode(e, d)
        }
    }();
    i._$var2date = function (e) {
        var n = e;
        if (i._$isString(e))n = new Date(t.__str2time(e));
        if (!i._$isDate(n))n = new Date(e);
        return n
    };
    i._$fixed = function (e, t) {
        return parseFloat(new Number(e).toFixed(t))
    };
    i._$absolute = function () {
        var e = /([^\/:])\/.*$/, t = /\/[^\/]+$/, i = /[#\?]/, n = location.href.split(/[?#]/)[0], s = document.createElement("a");
        var r = function (e) {
            return (e || "").indexOf("://") > 0
        };
        var a = function (e) {
            return (e || "").split(i)[0].replace(t, "/")
        };
        var o = function (t, i) {
            if (0 == t.indexOf("/"))return i.replace(e, "$1") + t; else return a(i) + t
        };
        n = a(n);
        return function (e, t) {
            e = (e || "").trim();
            if (!r(t))t = n;
            if (!e)return t;
            if (r(e))return e;
            e = o(e, t);
            s.href = e;
            e = s.href;
            return r(e) ? e : s.getAttribute("href", 4)
        }
    }();
    i._$url2origin = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            if (e.test(t || ""))return RegExp.$1.toLowerCase(); else return ""
        }
    }();
    i._$string2object = function (e, t) {
        var n = {};
        i._$forEach((e || "").split(t), function (e) {
            var t = e.split("=");
            if (t && t.length) {
                var i = t.shift();
                if (i)n[decodeURIComponent(i)] = decodeURIComponent(t.join("="))
            }
        });
        return n
    };
    i._$object2string = function (e, t, n) {
        if (!e)return "";
        var s = [];
        i._$loop(e, function (e, t) {
            if (!i._$isFunction(e)) {
                if (i._$isDate(e))e = e.getTime(); else if (i._$isArray(e))e = e.join(","); else if (i._$isObject(e))e = JSON.stringify(e);
                if (n)e = encodeURIComponent(e);
                s.push(encodeURIComponent(t) + "=" + e)
            }
        });
        return s.join(t || ",")
    };
    i._$query2object = function (e) {
        return i._$string2object(e, "&")
    };
    i._$object2query = function (e) {
        return i._$object2string(e, "&", !0)
    };
    i._$object2array = function (e) {
        return t.__col2array(e)
    };
    i._$array2object = function (e, t) {
        var n = {};
        i._$forEach(e, function (e) {
            var i = e;
            if (t)i = t(e);
            if (null != i)n[i] = e
        });
        return n
    };
    i._$number2string = function (e, t) {
        var i = ("" + e).length, n = Math.max(1, parseInt(t) || 0), s = n - i;
        if (s > 0)e = new Array(s + 1).join("0") + e;
        return "" + e
    };
    i._$safeDelete = function (e, t) {
        if (!i._$isArray(t))try {
            delete e[t]
        } catch (n) {
            e[t] = void 0
        } else i._$forEach(t, function (t) {
            i._$safeDelete(e, t)
        })
    };
    i._$randString = function () {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (t) {
            t = t || 10;
            var i = [];
            for (var n = 0, s; n < t; ++n) {
                s = Math.floor(Math.random() * e.length);
                i.push(e.charAt(s))
            }
            return i.join("")
        }
    }();
    i._$randNumber = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    };
    i._$randNumberString = function (e) {
        e = Math.max(0, Math.min(e || 8, 30));
        var t = Math.pow(10, e - 1), n = 10 * t;
        return i._$randNumber(t, n).toString()
    };
    i._$uniqueID = function () {
        var e = +new Date;
        return function () {
            return "" + e++
        }
    }();
    i._$query = function (e, t) {
        e = e || n;
        var i = (t || "").split(".");
        for (var s = 0, r = i.length; s < r; s++) {
            e = e[i[s]];
            if (!e)break
        }
        return e
    };
    i._$merge = function () {
        var e = arguments.length - 1, t = arguments[e];
        if (i._$isFunction(t))e -= 1; else t = s;
        var n = arguments[0] || {};
        for (var r = 1; r <= e; r++)i._$loop(arguments[r], function (e, i) {
            if (!t(e, i))n[i] = e
        });
        return n
    };
    i._$fetch = function (e, t) {
        if (t)i._$loop(e, function (e, i, n) {
            var s = t[i];
            if (null != s)n[i] = s
        });
        return e
    };
    i._$hasProperty = function (e) {
        if (!e)return !1;
        if (null != e.length)return e.length > 0;
        var t = 0;
        i._$loop(e, function () {
            t++;
            return t > 0
        });
        return t > 0
    };
    if (!0) {
        e.Q = i._$query;
        e.X = i._$merge;
        e.EX = i._$fetch;
        e.copy(this.NEJ, e);
        e.copy(e.P("nej.u"), i)
    }
    return i
}, 132, 138);
I$(308, function (e, t, i, n, s, r) {
    var a = {};
    i.__url2host = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t))return RegExp.$1; else return location.protocol + "//" + location.host
        }
    }();
    i.__set = function (e, t) {
        a[e] = t
    };
    i.__get = function (e) {
        return a[e]
    };
    var o = function () {
        var e = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"},
            "upload.image.swf": {name: "uploadimage", dft: "nej_upload_image.swf"}
        };
        var s = function (e) {
            var t = {};
            if (!e || !e.length)return t;
            for (var n = 0, s = e.length, r; n < s; n++) {
                r = e[n];
                if (r.indexOf("://") > 0)t[i.__url2host(r)] = r
            }
            return t
        };
        return function (r) {
            i.__set("root", r.root || "/res/");
            var a = i.__get("root");
            t._$loop(e, function (e, t, n) {
                i.__set(t, r[e.name] || a + e.dft)
            });
            var o = r.p_csrf;
            if (o === !0)o = {cookie: "AntiCSRF", param: "AntiCSRF"};
            o = o || n;
            i.__set("csrf", {param: o.param || "", cookie: o.cookie || ""});
            i.__set("frames", s(r.p_frame));
            i.__set("flashs", s(r.p_flash))
        }
    }();
    o(this.NEJ_CONF || n);
    return i
}, 132, 28);
I$(260, function (e, t, i, n, s, r) {
    return e
}, 308, 249);
I$(158, function (e, t, i, n, s, r) {
    i._$getFrameProxy = function (e) {
        var n = t.__url2host(e);
        return i._$get("frames")[n] || n + "/res/nej_proxy_frame.html"
    };
    i._$getFlashProxy = function (e) {
        return i._$get("flashs")[t.__url2host(e)]
    };
    i._$get = function (e) {
        return t.__get(e)
    };
    if (!0)e.copy(e.P("nej.c"), i);
    return i
}, 132, 260);
I$(135, function (e, t, i, n, s, r) {
    var a = +new Date;
    i._$CODE_NOTFUND = 1e4 - a;
    i._$CODE_NOTASGN = 10001 - a;
    i._$CODE_NOTSPOT = 10002 - a;
    i._$CODE_TIMEOUT = 10003 - a;
    i._$CODE_ERREVAL = 10004 - a;
    i._$CODE_ERRCABK = 10005 - a;
    i._$CODE_ERRSERV = 10006 - a;
    i._$CODE_ERRABRT = 10007 - a;
    i._$HEAD_CT = "Content-Type";
    i._$HEAD_CT_PLAN = "text/plain";
    i._$HEAD_CT_FILE = "multipart/form-data";
    i._$HEAD_CT_FORM = "application/x-www-form-urlencoded";
    i._$BLANK_IMAGE = t._$get("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0)e.copy(e.P("nej.g"), i);
    return i
}, 132, 158);
I$(133, function (e, t) {
    var i = {};
    t._$merge = function (t) {
        e._$merge(i, t)
    };
    t._$dump = function () {
        return i
    };
    t._$clear = function () {
        i = {}
    };
    return t
}, 28);
I$(250, function (e, t, i, n, s, r) {
    i.__checkEvent = function () {
        var e = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }, i = t._$KERNEL.prefix, n = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration",
            visibilitychange: "visibilitychange"
        };
        var s = {
            enter: function (e, t, i) {
                var n = {type: "keypress"};
                if (i)n.handler = function (t) {
                    if (13 === t.keyCode)i.call(e, t)
                };
                return n
            }
        };
        var r = function (e) {
            return (i.evt || i.pro) + e
        };
        return function (t, i, a) {
            var o = {type: i, handler: a};
            if (!("on" + i in t)) {
                var l = e[i];
                if (l) {
                    o.type = l;
                    return o
                }
                var l = n[i];
                if (l) {
                    o.type = r(l);
                    return o
                }
                var c = s[i];
                if (c)return c.apply(null, arguments)
            }
            return o
        }
    }();
    i.__addEvent = function () {
        var e = arguments;
        if (!1)if (!("on" + e[1] in e[0]))console.log("not support event[" + e[1] + "] for " + e[0]);
        e[0].addEventListener(e[1], e[2], e[3])
    };
    i.__delEvent = function () {
        var e = arguments;
        e[0].removeEventListener(e[1], e[2], e[3])
    };
    i.__dispatchEvent = function (t, i, n) {
        var s = document.createEvent("Event");
        s.initEvent(i, !0, !0);
        e._$merge(s, n);
        t.dispatchEvent(s)
    };
    return i
}, 28, 249);
I$(134, function (e, t, i, n, s, r, a) {
    return t
}, 249, 250, 28);
I$(5, function (e, t, i, n, s, r, a, o, l) {
    var c = {}, d = {};
    var u = function () {
        var e = /[\s,;]+/;
        return function (t) {
            var t = (t || "").trim().toLowerCase();
            return !t ? null : t.split(e)
        }
    }();
    var f = function (e, i, n) {
        var s = "page" + i;
        return null != e[s] ? e[s] : e["client" + i] + t._$getPageBox()["scroll" + n]
    };
    var _ = function (e, t, i) {
        var n = "scroll" + i;
        _node = r._$getElement(e), _xret = f(e, t, i);
        for (; _node && _node != document.body && _node != document.documentElement;) {
            _xret += _node[n] || 0;
            _node = _node.parentNode
        }
        return _xret
    };
    var h = function (e, n, s, r) {
        var a = {};
        e = t._$get(e);
        if (!e)return null;
        t._$id(e);
        a.element = e;
        if (!i._$isFunction(s))return null;
        a.handler = s;
        var n = u(n);
        if (!n)return null;
        a.type = n;
        a.capture = !!r;
        return a
    };
    r._$addEvent = d._$addEvent = function () {
        var e = function (e, i, n) {
            var s = t._$id(i.element), r = c[s] || {}, a = r[e] || [];
            a.push({type: n.type || e, func: n.handler || i.handler, sfun: i.handler, capt: i.capture, link: n.link});
            r[e] = a;
            c[s] = r
        };
        return function () {
            var n = h.apply(null, arguments);
            if (n)i._$forEach(n.type, function (r) {
                var a = s.__checkEvent(n.element, r, n.handler);
                s.__addEvent(n.element, a.type, a.handler, n.capture);
                i._$forIn(a.link, function (e) {
                    e[3] = !!e[3];
                    s.__addEvent.apply(s, e);
                    e[0] = t._$id(e[0])
                });
                e(r, n, a)
            })
        }
    }();
    r._$delEvent = d._$delEvent = function () {
        var e = function (e, n) {
            var s = t._$id(n.element), r = c[s] || a, o = r[e], l = i._$indexOf(o, function (e) {
                return e.sfun === n.handler && e.capt === n.capture
            });
            var d = null;
            if (l >= 0) {
                var u = o.splice(l, 1)[0];
                d = [[n.element, u.type, u.func, n.capture]];
                if (u.link)d.push.apply(d, u.link);
                if (!o.length)delete r[e];
                if (!i._$hasProperty(r))delete c[s]
            }
            return d
        };
        return function () {
            var t = h.apply(null, arguments);
            if (t)i._$forEach(t.type, function (n) {
                i._$forEach(e(n, t), function (e) {
                    s.__delEvent.apply(s, e)
                })
            })
        }
    }();
    r._$clearEvent = d._$clearEvent = function () {
        var e = function (e, t, n) {
            i._$reverseEach(n, function (i) {
                r._$delEvent(e, t, i.sfun, i.capt)
            })
        };
        return function (n, s) {
            var a = t._$id(n);
            if (a) {
                var o = c[a];
                if (o) {
                    s = u(s);
                    if (s)i._$forEach(s, function (t) {
                        e(a, t, o[t])
                    }); else i._$loop(o, function (e, t) {
                        r._$clearEvent(n, t)
                    })
                }
            }
        }
    }();
    r._$dispatchEvent = d._$dispatchEvent = function (e, n, r) {
        var e = t._$get(e);
        if (e)i._$forEach(u(n), function (t) {
            var i = s.__checkEvent(e, t);
            s.__dispatchEvent(e, i.type, r)
        })
    };
    r._$getElement = function () {
        var e;
        var n = function (i, n) {
            var s = i.split(":");
            if (s.length > 1) {
                if (!e)e = {
                    a: t._$attr, d: t._$dataset, c: t._$hasClassName, t: function (e, t) {
                        return (e.tagName || "").toLowerCase() === t
                    }
                };
                var r = e[s[0]];
                if (r)return !!r(n, s[1]);
                i = s[1]
            }
            return !!t._$attr(n, i) || !!t._$dataset(n, i) || t._$hasClassName(n, i)
        };
        return function (e) {
            if (!e)return null;
            var t = e.target || e.srcElement, s = arguments[1];
            if (!s)return t;
            if (i._$isString(s))s = n._$bind(null, s);
            if (i._$isFunction(s)) {
                for (; t;) {
                    if (s(t))return t;
                    t = t.parentNode
                }
                return null
            }
            return t
        }
    }();
    r._$stop = function (e) {
        r._$stopBubble(e);
        r._$stopDefault(e)
    };
    r._$stopBubble = function (e) {
        if (e)e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    };
    r._$stopDefault = function (e) {
        if (e)e.preventDefault ? e.preventDefault() : e.returnValue = !1
    };
    r._$page = function (e) {
        return {x: r._$pageX(e), y: r._$pageY(e)}
    };
    r._$pageX = function (e) {
        return _(e, "X", "Left")
    };
    r._$pageY = function (e) {
        return _(e, "Y", "Top")
    };
    r._$clientX = function (e) {
        return f(e, "X", "Left")
    };
    r._$clientY = function (e) {
        return f(e, "Y", "Top")
    };
    n._$merge(d);
    if (!0)e.copy(e.P("nej.v"), r);
    return r
}, 132, 3, 28, 133, 134);
I$(251, function (e, t, i, n, s, r) {
    i.__getElementById = function (e, t) {
        if (e.getElementById)return e.getElementById("" + t);
        try {
            return e.querySelector("#" + t)
        } catch (i) {
            return null
        }
    };
    i.__getChildren = function (t) {
        return e._$object2array(t.children)
    };
    i.__getElementsByClassName = function (t, i) {
        return e._$object2array(t.getElementsByClassName(i))
    };
    i.__nextSibling = function (e) {
        return e.nextElementSibling
    };
    i.__previousSibling = function (e) {
        return e.previousElementSibling
    };
    i.__dataset = function (e, t, i) {
        e.dataset = e.dataset || {};
        if (void 0 !== i)e.dataset[t] = i;
        return e.dataset[t]
    };
    i.__getAttribute = function (e, t) {
        return e.getAttribute(t)
    };
    i.__serializeDOM2XML = function (e) {
        return (new XMLSerializer).serializeToString(e) || ""
    };
    i.__parseDOMFromXML = function (e) {
        var t = (new DOMParser).parseFromString(e, "text/xml").documentElement;
        return "parsererror" == t.nodeName ? null : t
    };
    i.__fullScreen = function () {
    };
    i.__mask = function () {
    };
    i.__unmask = function () {
    };
    var a = t._$SUPPORT, o = t._$KERNEL.prefix;
    i.__isMatchedName = function () {
        var e = /^([a-z]+?)[A-Z]/;
        return function (t, i) {
            return !!(i[t] || e.test(t) && i[RegExp.$1])
        }
    }();
    i.__isNeedPrefixed = function () {
        var t = e._$array2object(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function (e) {
            return i.__isMatchedName(e, t)
        }
    }();
    i.__fmtStyleName = function () {
        var e = /-([a-z])/g;
        return function (t) {
            t = t || "";
            return t.replace(e, function (e, t) {
                return t.toUpperCase()
            })
        }
    }();
    i.__getStyleName = function () {
        var e = /^[a-z]/, t = o.css || "";
        return function (n) {
            n = i.__fmtStyleName(n);
            if (!i.__isNeedPrefixed(n))return n; else return t + n.replace(e, function (e) {
                    return e.toUpperCase()
                })
        }
    }();
    i.__getStyleValue = function (e, t) {
        var n = window.getComputedStyle(e, null);
        return n[i.__getStyleName(t)] || ""
    };
    i.__setStyleValue = function (e, t, n) {
        e.style[i.__getStyleName(t)] = n
    };
    i.__getCSSMatrix = function () {
        var t = /\((.*?)\)/, i = /\s*,\s*/, n = ["CSSMatrix", o.clz + "CSSMatrix"], s = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var r = function (n) {
            var r = {};
            if (t.test(n || ""))e._$forEach(RegExp.$1.split(i), function (e, t) {
                r[s[t]] = e
            });
            return r
        };
        return function (t) {
            var i;
            e._$forIn(n, function (e) {
                if (this[e]) {
                    i = new this[e](t || "");
                    return !0
                }
            });
            return !i ? r(t) : i;
        }
    }();
    i.__injectCSSText = function (e, t) {
        e.textContent = t
    };
    i.__processCSSText = function () {
        var t = /\$<(.*?)>/gi, s = /\{(.*?)\}/g, r = "-" + o.css.toLowerCase() + "-", l = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})",
            matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})"
        }, c = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})",
            matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})"
        };
        var d = function (e, t) {
            t = t || n;
            return e.replace(s, function (e, i) {
                var n = i.split("|");
                return t[n[0]] || n[1] || "0"
            })
        };
        i.__processTransformValue = function (e, t) {
            var i = (!a.css3d ? l : c)[e.trim()];
            if (i)return d(i, t); else return ""
        };
        return function (n) {
            if (!n.replace)return n; else return n.replace(t, function (t, n) {
                if ("vendor" === n)return r;
                var s = (n || "").split("|");
                return i.__processTransformValue(s[0], e._$query2object(s[1])) || t
            })
        }
    }();
    i.__appendCSSText = function (e, t) {
        var i = e.sheet, n = i.cssRules.length;
        i.insertRule(t, n);
        return i.cssRules[n]
    };
    i.__getClassList = function () {
        var e = /\s+/;
        return function (t) {
            t = (t || "").trim();
            return t ? t.split(e) : null
        }
    }();
    i.__processClassName = function (t, n, s) {
        if ("replace" != n)e._$forEach(i.__getClassList(s), function (e) {
            t.classList[n](e)
        }); else {
            i.__processClassName(t, "remove", s);
            i.__processClassName(t, "add", arguments[3])
        }
    };
    i.__hasClassName = function (t, n) {
        var s = t.classList;
        if (!s || !s.length)return !1; else return e._$indexOf(i.__getClassList(n), function (e) {
                return s.contains(e)
            }) >= 0
    };
    !function () {
        if (!a.css3d) {
            var e = i.__getCSSMatrix();
            a.css3d = !!e && null != e.m41
        }
    }();
    return i
}, 28, 249);
I$(136, function (e, t, i, n, s, r, a) {
    return e
}, 251, 249, 28);
I$(3, function (e, t, i, n, s, r, a, o, l, c) {
    var d = {}, u, f = {}, _ = {}, h = document.createDocumentFragment();
    if (!document.head)document.head = document.getElementsByTagName("head")[0] || document.body;
    a._$id = d._$id = function (e) {
        e = a._$get(e);
        if (e) {
            var t = e.id ? e.id : "auto-id-" + i._$uniqueID();
            if (!("id" in e))f[t] = e;
            e.id = t;
            if (!a._$get(t))_[t] = e;
            return t
        }
    };
    a._$get = function (e) {
        var t = f["" + e];
        if (t)return t;
        if (!i._$isString(e) && !i._$isNumber(e))return e;
        var t = document.getElementById(e);
        if (!t)t = r.__getElementById(h, e);
        if (t)delete _[e];
        return t || _[e]
    };
    a._$getChildren = d._$getChildren = function (e, t) {
        e = a._$get(e);
        if (!e)return null;
        var n = r.__getChildren(e);
        if (t)i._$reverseEach(n, function (e, i, n) {
            if (!a._$hasClassName(e, t))n.splice(i, 1)
        });
        return n
    };
    a._$getByClassName = d._$getByClassName = function (e, t) {
        e = a._$get(e);
        return !e ? null : r.__getElementsByClassName(e, t.trim())
    };
    a._$getSibling = d._$getSibling = function () {
        var e = function () {
            return !0
        };
        return function (t, n) {
            t = a._$get(t);
            if (!t)return null;
            var s = {backward: !1, filter: e};
            if (i._$isFunction(n))s.filter = n; else s = i._$fetch(s, n);
            var o = s.backward ? r.__previousSibling : r.__nextSibling;
            for (; (t = o(t)) && !s.filter(t););
            return t
        }
    }();
    a._$getScrollViewPort = function (e) {
        e = a._$get(e);
        if (e) {
            e = e.parentNode;
            for (; e && !(e.scrollHeight > e.clientHeight);)e = e.parentNode;
            if (e)return e
        }
        var t = document.body.scrollHeight, i = document.documentElement.scrollHeight;
        return i >= t ? document.documentElement : document.body
    };
    a._$getPageBox = function () {
        var e = function (e) {
            var t = 0;
            i._$forEach(e, function (e) {
                if (e)if (!t)t = e; else t = Math.min(t, e)
            });
            return t
        };
        var t = [{
            main: "scroll", sub: ["Top", "Left"], func: function (e, t, i) {
                return Math.max(t["scroll" + e], i["scroll" + e])
            }
        }, {
            main: "client", sub: ["Width", "Height"], func: function (t, i, n) {
                return e([i["client" + t], i["offset" + t], n["client" + t], n["offset" + t]])
            }
        }, {
            main: "scroll", sub: ["Width", "Height"], func: function (e, t, i, n) {
                return Math.max(n["client" + e], t["scroll" + e], i["scroll" + e])
            }
        }];
        return function (e) {
            var n = {}, s = e || document, r = s.body, a = s.documentElement;
            i._$forEach(t, function (e) {
                var t = e.main;
                i._$forEach(e.sub, function (i) {
                    n[t + i] = e.func(i, r, a, n)
                })
            });
            return n
        }
    }();
    a._$getMaxBox = function (e, t) {
        var n = i._$merge({}, e), s = t.width / t.height, r = e.width / e.height;
        if (s > r && e.height > t.height) {
            n.height = t.height;
            n.width = n.height * r
        }
        if (s < r && e.width > t.width) {
            n.width = t.width;
            n.height = n.width / r
        }
        return n
    };
    a._$scrollTo = d._$scrollTo = function (e) {
        var t = a._$offset(e);
        window.scrollTo(t.x, t.y)
    };
    a._$align = function () {
        var e = /\s+/;
        var t = {
            left: function () {
                return 0
            }, center: function (e, t) {
                return (e.width - t.width) / 2
            }, right: function (e, t) {
                return e.width - t.width
            }, top: function () {
                return 0
            }, middle: function (e, t) {
                return (e.height - t.height) / 2
            }, bottom: function (e, t) {
                return e.height - t.height
            }
        };
        return function (i, n, s) {
            var r = {}, a = (s || "").split(e), o = t[a[1]] || t.middle, l = t[a[0]] || t.center;
            r.top = o(i, n);
            r.left = l(i, n);
            return r
        }
    }();
    a._$offset = d._$offset = function () {
        var e = function (e) {
            return e == document.body || e == document.documentElement
        };
        return function (t, i) {
            t = a._$get(t);
            if (!t)return null;
            i = a._$get(i) || null;
            var n = t, s = {x: 0, y: 0}, r, o, l;
            for (; n && n != i;) {
                r = e(n) || n == t;
                o = r ? 0 : n.scrollLeft;
                l = parseInt(a._$getStyle(n, "borderLeftWidth")) || 0;
                s.x += n.offsetLeft + l - o;
                o = r ? 0 : n.scrollTop;
                l = parseInt(a._$getStyle(n, "borderTopWidth")) || 0;
                s.y += n.offsetTop + l - o;
                n = n.offsetParent
            }
            return s
        }
    }();
    a._$fullScreen = d._$fullScreen = function (e) {
        e = a._$get(e);
        if (e)r.__fullScreen(e, a._$getPageBox())
    };
    a._$mask = d._$mask = function (e) {
        e = a._$get(e);
        if (e) {
            a._$id(e);
            return r.__mask(e)
        }
        return null
    };
    a._$unmask = d._$unmask = function (e) {
        e = a._$get(e);
        if (e) {
            a._$id(e);
            return r.__unmask(e)
        }
        return null
    };
    a._$create = function () {
        var e = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (t, n, s) {
            var r = document.createElement(t), o = e[t.toLowerCase()];
            i._$merge(r, o);
            if (n)r.className = n;
            s = a._$get(s);
            if (s)s.appendChild(r); else if (!o)h.appendChild(r);
            return r
        }
    }();
    a._$createXFrame = function () {
        var e = function () {
            if (location.hostname == document.domain)return "about:blank"; else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var t = function (e) {
            e = e.trim();
            if (!e)return a._$create("iframe");
            var t;
            try {
                t = document.createElement('<iframe name="' + e + '"></iframe>');
                t.frameBorder = 0
            } catch (i) {
                t = a._$create("iframe");
                t.name = e
            }
            return t
        };
        return function (s) {
            s = s || o;
            var r = t(s.name || "");
            if (!s.visible)r.style.display = "none";
            if (i._$isFunction(s.onload))n._$addEvent(r, "load", function (e) {
                if (r.src) {
                    n._$clearEvent(r, "load");
                    s.onload(e)
                }
            });
            var l = s.parent;
            if (i._$isFunction(l))try {
                l(r)
            } catch (c) {
            } else(a._$get(l) || document.body).appendChild(r);
            var d = s.src || e();
            window.setTimeout(function () {
                r.src = d
            }, 0);
            return r
        }
    }();
    a._$remove = d._$remove = function () {
        var e = {
            img: function (e) {
                e.src = t._$BLANK_IMAGE
            }, iframe: function (e) {
                e.src = "about:blank"
            }
        };
        var s = function (t, n) {
            if (n) {
                if (t.getElementsByTagName)i._$forEach(t.getElementsByTagName(n), s)
            } else {
                var r = (t.tagName || "").toLowerCase(), a = e[r];
                if (a)a(t)
            }
        };
        return function (e) {
            e = a._$get(e);
            if (e) {
                if (!arguments[1])n._$clearEvent(e);
                s(e);
                s(e, "img");
                s(e, "iframe");
                if (e.parentNode)e.parentNode.removeChild(e)
            }
        }
    }();
    a._$removeByEC = d._$removeByEC = function (e) {
        e = a._$get(e);
        if (e)try {
            h.appendChild(e)
        } catch (t) {
            console.error(t)
        }
    };
    a._$clearChildren = d._$clearChildren = function (e) {
        e = a._$get(e);
        if (e)i._$reverseEach(e.childNodes, function (e) {
            a._$remove(e)
        })
    };
    a._$wrapInline = d._$wrapInline = function () {
        var e, t = /\s+/;
        var i = function () {
            if (!e) {
                e = a._$pushCSSText(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                a._$dumpCSSText()
            }
        };
        return function (n, s) {
            n = a._$get(n);
            if (!n)return null;
            i();
            s = s || o;
            var r = n.parentNode;
            if (!a._$hasClassName(r, e)) {
                r = a._$create("span", e);
                n.insertAdjacentElement("beforeBegin", r);
                r.appendChild(n)
            }
            var l = s.nid || "", c = a._$getByClassName(r, l || e + "-show")[0];
            if (!c) {
                var d = ((s.clazz || "") + " " + l).trim();
                d = e + "-show" + (!d ? "" : " ") + d;
                c = a._$create(s.tag || "span", d);
                r.appendChild(c)
            }
            var d = s.clazz;
            if (d) {
                d = (d || "").trim().split(t)[0] + "-parent";
                a._$addClassName(r, d)
            }
            return c
        }
    }();
    a._$dataset = d._$dataset = function (e, t, n) {
        var s = a._$id(e);
        if (!s)return null;
        if (i._$isString(t))return r.__dataset(a._$get(e), t, n);
        if (i._$isObject(t)) {
            var o = {};
            i._$forIn(t, function (e, t) {
                o[t] = a._$dataset(s, t, e)
            });
            return o
        }
        if (i._$isArray(t)) {
            var o = {};
            i._$forEach(t, function (e) {
                o[e] = a._$dataset(s, e)
            });
            return o
        }
        return null
    };
    a._$attr = d._$attr = function (e, t, i) {
        e = a._$get(e);
        if (!e)return "";
        if (void 0 !== i && e.setAttribute)e.setAttribute(t, i);
        return r.__getAttribute(e, t)
    };
    a._$html2node = function () {
        var e = /<(.*?)(?=\s|>)/i, t = {li: "ul", tr: "tbody", td: "tr", th: "tr", option: "select"};
        return function (i) {
            var n;
            if (e.test(i))n = t[(RegExp.$1 || "").toLowerCase()] || "";
            var s = a._$create(n || "div");
            s.innerHTML = i;
            var r = a._$getChildren(s);
            return r.length > 1 ? s : r[0]
        }
    }();
    a._$dom2xml = d._$dom2xml = function (e) {
        e = a._$get(e);
        return !e ? "" : r.__serializeDOM2XML(e)
    };
    a._$xml2dom = function (e) {
        e = (e || "").trim();
        return !e ? null : r.__parseDOMFromXML(e)
    };
    a._$dom2object = d._$dom2object = function (e, t) {
        t = t || {};
        e = a._$get(e);
        if (!e)return t;
        var n = e.tagName.toLowerCase(), s = a._$getChildren(e);
        if (!s || !s.length) {
            t[n] = e.textContent || e.text || "";
            return t
        }
        var r = {};
        t[n] = r;
        i._$forEach(s, function (e) {
            a._$dom2object(e, r)
        });
        return t
    };
    a._$xml2object = function (e) {
        try {
            return a._$dom2object(a._$xml2dom(e))
        } catch (t) {
            return null
        }
    };
    a._$text2type = function () {
        var e = {
            xml: function (e) {
                return a._$xml2dom(e)
            }, json: function (e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return null
                }
            }, dft: function (e) {
                return e
            }
        };
        return function (t, i) {
            i = (i || "").toLowerCase();
            return (e[i] || e.dft)(t || "")
        }
    }();
    a._$style = d._$style = function (e, t) {
        e = a._$get(e);
        if (e)i._$loop(t, function (t, i) {
            a._$setStyle(e, i, t)
        })
    };
    a._$setStyle = d._$setStyle = function (e, t, i) {
        e = a._$get(e);
        if (e)r.__setStyleValue(e, t, r.__processCSSText(i))
    };
    a._$getStyle = d._$getStyle = function (e, t) {
        e = a._$get(e);
        return !e ? "" : r.__getStyleValue(e, t)
    };
    a._$addScript = function (e) {
        try {
            e = e.trim();
            if (e)return new Function(e)()
        } catch (t) {
            console.error(t.message);
            console.error(t.stack)
        }
    };
    a._$addStyle = function () {
        var e = /[\s\r\n]+/gi;
        return function (t) {
            t = (t || "").replace(e, " ").trim();
            var i = null;
            if (t) {
                i = a._$create("style");
                document.head.appendChild(i);
                r.__injectCSSText(i, r.__processCSSText(t))
            }
            return i
        }
    }();
    a._$pushCSSText = function () {
        var e = /#<(.*?)>/g, t = +new Date;
        return function (t, n) {
            if (!u)u = [];
            var s = "auto-" + i._$uniqueID(), r = i._$merge({uispace: s}, n);
            u.push(t.replace(e, function (e, t) {
                return r[t] || e;
            }));
            return s
        }
    }();
    a._$dumpCSSText = function () {
        if (u) {
            a._$addStyle(u.join(" "));
            u = null
        }
    };
    a._$appendCSSText = d._$appendCSSText = function (e, t) {
        e = a._$get(e);
        return !e ? null : r.__appendCSSText(e, r.__processCSSText(t))
    };
    a._$addClassName = d._$addClassName = function (e, t) {
        e = a._$get(e);
        if (e)r.__processClassName(e, "add", t)
    };
    a._$delClassName = d._$delClassName = function (e, t) {
        e = a._$get(e);
        if (e)r.__processClassName(e, "remove", t)
    };
    a._$replaceClassName = d._$replaceClassName = function (e, t, i) {
        e = a._$get(e);
        if (e)r.__processClassName(e, "replace", t, i)
    };
    a._$hasClassName = d._$hasClassName = function (e, t) {
        e = a._$get(e);
        if (e)return r.__hasClassName(e, t); else return !1
    };
    a._$matrix = function (e) {
        e = (e || "").trim();
        return r.__getCSSMatrix(e)
    };
    a._$css3d = d._$css3d = function (e, t, i) {
        e = a._$get(e);
        if (e) {
            var n = r.__processTransformValue(t, i);
            if (n)a._$setStyle(e, "transform", n)
        }
    };
    s._$merge(d);
    if (!0)e.copy(e.P("nej.e"), a);
    return a
}, 132, 135, 28, 5, 133, 136);
!function (e, t, i) {
    function n(e) {
        e = e || {};
        if (e.macros)this._macros = e.macros;
        this._links = {};
        this._rules = {};
        this.TRUNK = null;
        this.cache = H(e.maxCache || 200);
        this.cache.set("", [[]])
    }

    function s(e) {
        return oe.parse(e)
    }

    function r(e, t) {
        return t ? e.nodeName === t : 1 === e.nodeType
    }

    function a(e, t) {
        var e = e.firstChild;
        return !e || r(e, t) ? e : c(e, t)
    }

    function o(e, t) {
        var e = e.lastChild;
        return !e || r(e, t) ? e : l(e, t)
    }

    function l(e, t) {
        for (; e = e.previousSibling;)if (r(e, t))return e;
        return e
    }

    function c(e, t) {
        for (; e = e.nextSibling;)if (r(e, t))return e;
        return e
    }

    function d(e, t) {
        var i = ce[t];
        if (i)return "function" == typeof i ? i(e) : e[i];
        if (ue)return e.getAttribute(t);
        var n = e.getAttributeNode(t);
        return "boolean" == typeof e[t] ? e[t] ? t : null : n && n.specified ? n.value : null
    }

    function u(e) {
        for (var t = e.length; t--;) {
            var i = e[t];
            e.splice(t, 1, null);
            if (~e.indexOf(i))e.splice(t, 1); else e.splice(t, 1, i)
        }
        return e
    }

    function f(e, t) {
        if (e && t) {
            var i = e.nextSibling;
            for (; i;) {
                if (i === t)return -1;
                i = i.nextSibling
            }
        }
        return e ? 1 : -1
    }

    function _(e) {
        return u(e.sort(fe))
    }

    function h(e, t) {
        var i, n, s, r;
        if (e) {
            s = t ? "type" : "child";
            i = c;
            n = l;
            r = a
        } else {
            s = "last" + (t ? "type" : "child");
            n = c;
            i = l;
            r = o
        }
        return function (e, a) {
            var o = he[s];
            if (e === le)return !1;
            var l = _e(e), c = e.parentNode, d = a.step > 0 ? i : n, u = a.step, f = a.start, _ = t && e.nodeName;
            if (null === u)return !1;
            if (!o[l]) {
                var h = r(c, _), p = 0;
                do {
                    o[_e(h)] = ++p;
                    he.length++
                } while (h = i(h, _))
            }
            var m = o[l];
            if (0 === u)return m === f; else return (m - f) / u >= 0 && (m - f) % u === 0
        }
    }

    function p() {
        if (he.length)he = {child: {}, lastchild: {}, type: {}, lasttype: {}, length: 0}
    }

    function m(e, t, i) {
        var n;
        for (var s in t)if (i !== s && (n = me[s]) && !n(e, t[s]))return !1;
        return !0
    }

    function v(e, t, i) {
        var n = t.length, s = t[n - 1];
        if (!m(e, s, i))return !1; else {
            if (1 == n)return !0;
            var r = t[n - 2], a = ve.combos[r.combo], o = ge[n - 2], l = a(e, o);
            if (l)return !0; else return !1
        }
    }

    function g(e) {
        return function (i) {
            if (i == le || null == i || i == t)return null; else return v(i, e)
        }
    }

    function $(e) {
        var t = [];
        for (var i = 0, n = e.length; i < n; i++)t.push(g(e.slice(0, i + 1)));
        return t
    }

    function y(e, t, i) {
        if (!t.length)return e;
        var n = ge;
        ge = $(t);
        for (var s = e.length; s--;)if (!v(e[s], t, i))e.splice(s, 1);
        ge = n;
        return e
    }

    function b(e, t) {
        var i, n, s = e[e.length - 1];
        if (s.id) {
            i = pe.byId(s.id);
            n = "id"
        } else if (s.classList && s.classList.length && pe.byClassName) {
            i = pe.byClassName(s.classList, t);
            n = "classList"
        } else {
            i = pe.byTagName(s.tag || "*", t);
            n = "tag"
        }
        if (!i.length)return i; else return y(i, e, n)
    }

    function x(e, t) {
        if (!e[0][0])return [];
        var i = [], n = 0;
        for (var s = 0, r = e.length; s < r; s++) {
            var a = e[s], o = a.length, l = a[o - 1], c = b(a, t);
            if (c && c.length)n++;
            if (!i)i = c; else i = i.concat(c)
        }
        p();
        if (n > 1)_(i);
        return i
    }

    function w(e, i) {
        var n = s(e);
        var r = x(n, i || t);
        return r
    }

    function T(e, i) {
        var n;
        if ($e && !E.debug)try {
            n = (i || t).querySelector(e)
        } catch (s) {
            n = w(e, i)[0]
        } else n = w(e, i)[0];
        return n
    }

    function I(e, i) {
        var n;
        if ($e && !E.debug)try {
            n = R((i || t).querySelectorAll(e))
        } catch (s) {
            n = w(e, i)
        } else n = w(e, i);
        return n
    }

    function C(e, t) {
        if (!e || 1 !== e.nodeType)return !1;
        var i = s(t), n = i.length;
        if (!i[n - 1][0])return !1;
        for (; n--;)if (S(e, i[n]))return !0;
        return !1
    }

    function S(e, t) {
        var i = t.length;
        if (!m(e, t[i - 1]))return !1; else return 1 === y([e], t.slice(0)).length
    }

    function k(e) {
        return function (t, i) {
            var n = i.split(/\s+of\s+/);
            if (n.length < 2)throw Error("no 'of' keyword in nth-match\"s selector");
            var s = ne(n[0]), r = n[1], a = t.parentNode[e ? "firstChild" : "lastChild"], o = e ? "nextSibling" : "previousSibling", l = s.step, c = s.start, d = 0;
            if (!C(t, r))return !1;
            if (null === l)return !1;
            do {
                if (1 === a.nodeType && E.matches(a, r))d++;
                if (a === t)break
            } while (a = a[o]);
            if (0 === l)return d === c; else return (d - c) / l >= 0 && (d - c) % l === 0
        }
    }

    var E = function (e, t) {
        return I(e, t)
    }, N = {};
    var L = Array.prototype, M = Object.prototype, A = String.prototype, P = Function.prototype, D = L.slice, O = t.body, j = t.createElement("div"), R = function (e) {
        return D.call(e)
    }, B = function (e) {
        return null == e ? String(e) : M.toString.call(e).slice(8, -1).toLowerCase()
    }, F = function (e, t, i) {
        for (var n in t)if (null == e[n] || i)e[n] = t[n]
    }, H = function (e) {
        var t = [], n = {};
        return {
            set: function (e, i) {
                if (t.length > this.length)delete n[t.shift()];
                n[e] = i;
                t.push(e);
                return i
            }, get: function (e) {
                if (e === i)return n; else return n[e]
            }, length: e, len: function () {
                return t.length
            }
        }
    }, z = function (e) {
        return function (t, i) {
            if ("object" == B(t))for (var n in t)e.call(this, n, t[n]); else e.call(this, t, i);
            return this
        }
    }, q = function (e) {
        try {
            return e()
        } catch (t) {
            return !1
        } finally {
            j = document.createElement("div")
        }
    };
    try {
        D.call(t.getElementsByTagName("body"))
    } catch (U) {
        R = function (e) {
            var t = [], i = e.length;
            for (var n = 0; n < i; n++)t.push(e[n]);
            return t
        }
    }
    var W = /^\s+|\s+$/g;
    A.trim = A.trim || function () {
            return this.replace(W, "")
        };
    P.bind = P.bind || function (e, t) {
            t = D.call(arguments, 1);
            var i = this;
            return function () {
                return i.apply(e, t.concat(D.call(arguments)))
            }
        };
    L.indexOf = L.indexOf || function (e) {
            for (var t = 0, i = this.length; t < i; t++)if (e === this[t])return t;
            return -1
        };
    var V = /\(\?\!|\(\?\:/, G = function (e) {
        var t = 0, i = 0, n = e.length, s = e.split(V).length - 1;
        for (; n--;) {
            var r = e.charAt(n);
            if (0 === n || "\\" !== e.charAt(n - 1)) {
                if ("(" === r)t++;
                if (")" === r)i++
            }
        }
        if (t !== i)throw e + "中的括号不匹配"; else return t - s
    }, Y = /\\(\d+)/g, X = function (e, t) {
        return e
    }, J = Object.keys || function (e) {
            var t = [];
            for (var i in e)if (e.hasOwnProperty(i))t.push(i);
            return t
        }, K = function (e) {
        var t = e.reg;
        if ("regexp" === B(t))t = t.toString().slice(1, -1);
        e.regexp = t.replace(Z, function (e, t) {
            if (t in se)return se[t]; else throw new Error('can"t replace undefined macros:' + t)
        });
        return e
    }, Q = function (e) {
        for (var t in e)if (e.hasOwnProperty(t))K(e[t]);
        return e
    };
    F(n.prototype, {
        parse: function (e) {
            e = clean(e);
            if (t = this.cache.get(e))return t;
            var t = this.parsed = [[null]];
            var i = this.input = e;
            var n = this.TRUNK;
            var s;
            for (; s != (i = i.replace(n, this._process.bind(this)));)s = i;
            if ("" !== i)this.error(i);
            return this.cache.set(e, t)
        }, on: function (e) {
            if ("string" === B(e)) {
                var t = {};
                t[e] = arguments[1];
                e = t
            }
            for (var n in e) {
                var s = e[n];
                if ("object" !== B(s))s = {regexp: s};
                var r = s.regexp;
                if ("regexp" === B(r))s.regexp = r.toString().slice(1, -1);
                if (s.order === i)s.order = 1;
                this._rules[n] = s
            }
            this.setup();
            return this
        }, off: function (e) {
            if ("array" === B(e))for (var t = e.length; t--;)this.off(e[t]); else if (this._rules[e])delete this._rules[e];
            return this
        }, current: function () {
            var e = this.parsed;
            var t = e[e.length - 1], i = t.length;
            return t[i - 1] || (t[i - 1] = {tag: "*"})
        }, error: function (e) {
            throw Error("输入  " + this.input + "  含有未识别语句:" + e || "")
        }, clone: function (e) {
            return (new n).on(this._rules)
        }, _process: function () {
            var e = this._links, t = this._rules, i = D.call(arguments);
            for (var n in e) {
                var s = e[n], r = s[1], a = parseInt(s[0]);
                if (i[a] && (rule = t[n])) {
                    rule.action.apply(this, i.slice(a, a + r));
                    return ""
                }
            }
            return ""
        }, setup: function () {
            Q(this._rules);
            var e = 1, t = [], i = this._rules, n = this._links, s = J(i).sort(function (e, t) {
                return i[e].order >= i[t].order
            }), r = s.length;
            for (; r--;) {
                var a = s[r], o = i[a], l = G(o.regexp) + 1;
                if (o.filter && !me[a])me[a] = o.filter;
                n[a] = [e, l];
                var c = X(o.regexp, e - 1);
                e += l;
                t.push(c)
            }
            this.TRUNK = new RegExp("^(?:(" + t.join(")|(") + "))");
            return this
        }
    });
    var Z = /\{\{([^\}]*)\}\}/g, ee = /^(?:(\d+)|([+-]?\d*)?n([+-]\d+)?)$/, te = /^(nth)[\w-]*(-of-type|-child)/, ie = H(100), ne = function (e) {
        var t, i, n;
        if (!e || !(e = e.replace(/\s+/g, "")))return {start: 1, step: 0};
        if (n = ie.get(e))return n;
        if ("even" == e) {
            i = 2;
            t = 2
        } else if ("odd" == e) {
            t = 2;
            i = 1
        } else {
            n = e.match(ee);
            if (!n)t = null; else if (n[1]) {
                t = 0;
                i = parseInt(n[1])
            } else {
                if ("-" == n[2])n[2] = "-1";
                t = n[2] ? parseInt(n[2]) : 1;
                i = n[3] ? parseInt(n[3]) : 0
            }
        }
        if (i < 1)if (t < 1)t = null; else i = --i % t + t;
        return ie.set(e, {start: i, step: t})
    };
    var se = {
        split: "\\s*,\\s*",
        operator: "[*^$|~!]?=",
        combo: "[>\\s+~](?!=)",
        word: "[\\\\\\w\\u00A1-\\uFFFF-]"
    }, re = {
        split: {
            reg: "{{split}}", action: function (e) {
                this.parsed.push([null])
            }, order: 0
        },
        id: {
            reg: "#({{word}}+)", action: function (e, t) {
                this.current().id = t
            }
        },
        tag: {
            reg: "\\*|[a-zA-Z-]\\w*", action: function (e) {
                this.current().tag = e.toLowerCase()
            }
        },
        classList: {
            reg: "\\.({{word}}+)", action: function (e, t) {
                var i = this.current(), n = i.classList || (i.classList = []);
                n.push(t)
            }
        },
        pesudos: {
            reg: ":({{word}}+)(?:\\(([^\\(\\)]*|(?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\))?", action: function (e, t, i) {
                var n = this.current(), s = n.pesudos || (n.pesudos = []), t = t.toLowerCase(), r = {name: t};
                if (i)i = i.trim();
                if (te.test(t))i = ne(i);
                if (i)r.param = i;
                s.push(r)
            }
        },
        attributes: {
            reg: "\\[\\s*({{word}}+)(?:({{operator}})['\"]?([^'\"\\[]+)['\"]?)?\\s*\\]",
            action: function (e, t, i, n) {
                var s = this.current(), r = s.attributes || (s.attributes = []);
                var a = {};
                r.push({key: t, operator: i, value: n})
            }
        },
        combo: {
            reg: "\\s*({{combo}})\\s*", action: function (e, t) {
                var i = this.parsed, n = i[i.length - 1];
                this.current().combo = t;
                n.push(null)
            }, order: 0
        }
    };
    var ae = new RegExp("\\s*(,|" + se.combo + "|" + se.operator + ")\\s*", "g");
    clean = function (e) {
        return e.trim().replace(/\s+/g, " ").replace(ae, "$1")
    };
    var oe = new n;
    oe.on(re);
    var le = t.documentElement || t;
    var ce = {
        "for": "htmlFor", href: function (e) {
            return "href" in e ? e.getAttribute("href", 2) : e.getAttribute("href")
        }, type: function (e) {
            return "type" in e ? e.getAttribute("type") : e.type
        }
    };
    var de = q(function () {
        j.appendChild(t.createComment(""));
        return !j.getElementsByTagName("*").length || "number" != typeof t.getElementsByTagName("input").length
    });
    var ue = q(function () {
        j.innerHTML = "<select></select>";
        var e = B(j.lastChild.getAttribute("multiple"));
        return "boolean" !== e && "string" !== e
    });
    var fe = t.compareDocumentPosition ? function (e, t) {
        if (!e.compareDocumentPosition || !t.compareDocumentPosition)return 0; else return 4 & e.compareDocumentPosition(t) ? -1 : e === t ? 0 : 1
    } : "sourceIndex" in t ? function (e, t) {
        if (!e.sourceIndex || !t.sourceIndex)return 0; else return e.sourceIndex - t.sourceIndex;
    } : function (e, i) {
        var n = 0, s = [e], r = [i], a = e.parentNode, o = i.parentNode, l = a;
        if (e === t)return -1; else if (i === t)return 1; else if (!a && !o)return 0; else if (!o)return -1; else if (!a)return 1; else if (a === o)return f(e, i);
        for (; l;) {
            s.unshift(l);
            l = l.parentNode
        }
        l = o;
        for (; l;) {
            r.unshift(l);
            l = l.parentNode
        }
        for (; s[n] === r[n];)n++;
        return f(s[n], r[n])
    };
    var _e = function (e) {
        var t = 0;
        return function (i) {
            return i._uid || (i._uid = e + t++)
        }
    }("nes_" + (+new Date).toString(36));
    var he = {length: 1};
    p();
    var pe = {
        byId: function (e) {
            var i = t.getElementById(e);
            return i ? [i] : []
        }, byClassName: t.getElementsByClassName ? function (e, i) {
            e = e.join(" ");
            return R((i || t).getElementsByClassName(e))
        } : null, byTagName: de ? function (e, i) {
            var n = (i || t).getElementsByTagName(e);
            return R(n)
        } : function (e, i) {
            var n = (i || t).getElementsByTagName(e);
            var s, r = [], a = 0;
            for (; s = n[a]; a++)if (1 === s.nodeType)r.push(s);
            return r
        }
    };
    var me = {
        id: function (e, t) {
            return e.id === t
        }, classList: function (e, t) {
            var i = t.length, n = " " + e.className + " ";
            for (; i--;)if (n.indexOf(" " + t[i] + " ") === -1)return !1;
            return !0
        }, tag: function (e, t) {
            if ("*" == t)return !0; else return e.tagName.toLowerCase() === t
        }, pesudos: function (e, t) {
            var i = t.length, n = ve["pesudos"];
            for (; i--;) {
                var s = t[i], r = s.name, a = n[r];
                if (!a)throw Error("不支持的伪类:" + r);
                if (!a(e, s.param))return !1
            }
            return !0
        }, attributes: function (e, t) {
            var i = t.length, n = ve["operators"];
            for (; i--;) {
                var s = t[i], r = s["operator"], a = n[r], o = d(e, s.key);
                if (null !== o)if (r) {
                    if (!a)throw Error("不支持的操作符:" + r);
                    if (!a(s.value, o + ""))return !1
                } else; else if ("!=" !== r)return !1
            }
            return !0
        }
    };
    var ve = {
        combos: {
            ">": function (e, t) {
                var i = e.parentNode;
                if (t(i))return i
            }, "~": function (e, t) {
                var i = l(e);
                for (; i;) {
                    if (t(i))return i;
                    i = l(i)
                }
            }, " ": function (e, t) {
                var i = e.parentNode;
                for (; i;) {
                    var n = t(i);
                    if (n)return i;
                    if (null === n)return null;
                    i = i.parentNode
                }
                return null
            }, "+": function (e, t) {
                var i = l(e);
                if (i && t(i))return i
            }
        }, operators: {
            "^=": function (e, t) {
                if (null == t)return !1; else return 0 === t.indexOf(e)
            }, "=": function (e, t) {
                return t === e
            }, "~=": function (e, t) {
                if (null == t)return !1; else return ~(" " + t + " ").indexOf(e)
            }, "$=": function (e, t) {
                return t.substr(t.length - e.length) === e
            }, "|=": function (e, t) {
                return ~("-" + t + "-").indexOf("-" + e + "-")
            }, "*=": function (e, t) {
                return ~t.indexOf(e)
            }, "!=": function (e, t) {
                return t !== e
            }
        }, pesudos: {
            not: function (e, t) {
                return !C(e, t)
            },
            matches: function (e, t) {
                return C(e, t)
            },
            "nth-child": h(!0, !1),
            "nth-last-child": h(!1, !1),
            "nth-of-type": h(!0, !0),
            "nth-last-of-type": h(!1, !0),
            "first-child": function (e) {
                return !l(e)
            },
            "last-child": function (e) {
                return !c(e)
            },
            "last-of-type": function (e) {
                return !c(e, e.nodeName)
            },
            "first-of-type": function (e) {
                return !l(e, e.nodeName)
            },
            "only-child": function (e) {
                return !l(e) && !c(e)
            },
            "only-of-type": function (e) {
                return !l(e, e.nodeName) && !c(e, e.nodeName)
            },
            contains: function (e, t) {
                return ~(e.innerText || e.textContent || "").indexOf(t)
            },
            checked: function (e) {
                return !!e.checked || !!e.selected
            },
            selected: function (e) {
                return e.selected
            },
            enabled: function (e) {
                return e.disabled === !1
            },
            disabled: function (e) {
                return e.disabled === !0
            },
            empty: function (e) {
                var t;
                e = e.firstChild;
                for (; e;) {
                    if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)return !1;
                    e = e.nextSibling
                }
                return !0
            },
            focus: function (e) {
                return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            target: function (e, t) {
                var i = e.id || e.name;
                if (!i)return !1; else return "#" + i === location.hash
            }
        }
    };
    var ge = null;
    var $e = !!t.querySelector;
    !function ye(e, t) {
        for (var i in e)E[i] = function (i) {
            var n = e[i];
            return z(function (e, s) {
                n[e] = s;
                if (i in t)t[i](e, s)
            })
        }(i)
    }(ve, {
        operators: function (e) {
            var t = se.operator.split("]");
            t.splice(1, 0, e.charAt(0) + "]");
            se.operator = t.join("");
            oe.setup()
        }, combos: function (e) {
            var t = se.combo.split("]");
            t.splice(1, 0, e + "]");
            se.combo = t.join("");
            oe.setup()
        }
    });
    E.debug = !1;
    E._nthCache = ie;
    E.parser = oe;
    E.parse = s;
    E._find = x;
    E._get = w;
    E.one = T;
    E.all = I;
    E.matches = C;
    E._uniqueSort = _;
    E._cleanSelector = clean;
    E._getUid = _e;
    if ("object" == typeof exports)module.exports = E; else if ("function" == typeof define && define.amd)define(function () {
        return E
    }); else e.nes = E;
    E.pesudos({
        "nth-match": k(!0), "nth-last-match": k(!1), "local-link": function (e, t) {
            if (t)t = parseInt(t)
        }
    })
}(window, document, void 0);
I$(50, function (e, t, i, n, s, r) {
    i._$all = function () {
        try {
            return nes.all.apply(nes, arguments)
        } catch (e) {
            return null
        }
    };
    i._$one = function () {
        try {
            return nes.one.apply(nes, arguments)
        } catch (e) {
            return null
        }
    };
    i._$g = nes._get;
    if (!0)e.copy(e.P("nej.e"), i);
    return i
}, 132, 191);
I$(139, function (e, t, i, n, s) {
    function r(e, t) {
        this.length = 0;
        this._signs = {};
        this._context = t || l;
        if (e)if ("string" == typeof e) {
            if (t && t instanceof r)t = t[0];
            if ("string" == typeof t)t = $(t)[0];
            this._$add(s._$all(e, t))
        } else if (e instanceof r || m(e) || e.length)this._$add(e)
    }

    var a = /^\s*<(\w+|!)[^>]*>/, o = [].slice, l = document, c = "documentElement", d = l[c], u = l.createElement("div"), f = null == u.textContent ? "innerText" : "textContent", _ = function (e, t, i) {
        i = i || {};
        if (null == this[e] || i.override)this[e] = t;
        return this
    }, h = function (e, t, i) {
        for (; t && t !== i;) {
            if (nes.matches(t, e))return t;
            t = t.parentNode
        }
    }, p = function (i, n, s) {
        return i === s || "undefined" === i || i === this || i === t || i === e
    }, m = function (e) {
        if (!e)return !1;
        var t = e.nodeType;
        return 1 === t || 9 === t || 11 === t || e.window === e
    }, v = function (e) {
        var t = e.prototype, i = {};
        return {
            extend: function (e, n) {
                i[e] = t[e];
                t[e] = n;
                return this
            }, reset: function () {
                for (var e in i)if (i.hasOwnProperty(e))if (void 0 === i[e])delete t[e]; else t[e] = i[e]
            }
        }
    }, g = v(Function);
    g.extend("autoSet", function () {
        var e = this;
        return function (t, n) {
            if (i._$isObject(t)) {
                var s = o.call(arguments, 1);
                for (var r in t)e.apply(this, [r, t[r]].concat(s));
                return this
            } else return e.apply(this, arguments)
        }
    }).extend("splitProcess", function (e) {
        var t = this;
        return function (n) {
            if (i._$isArray(n)) {
                var s = o.call(arguments, 1), r = n.length, a;
                if (e)a = {};
                for (var l = 0; l < r; l++) {
                    var c = n[l], d = t.apply(this, [c].concat(s));
                    if (e && "string" == typeof c)a[c] = d
                }
                return e ? a : this
            } else return t.apply(this, arguments)
        }
    });
    _ = _.autoSet();
    var $ = function (e, t) {
        $._$implement(n._$dump(), {statics: !0});
        n._$clear();
        if ("string" == typeof e && 0 == e.trim().indexOf("<")) {
            var i = document.createElement("div");
            i.innerHTML = e;
            var s = $(i.childNodes);
            return s
        }
        return new r(e, t)
    };
    $._$extend = _._$bind($);
    $._$extend({
        _$signal: "_uid",
        _$instances: {},
        _$handlers: [],
        _$fragment: function () {
        },
        _$implement: function (e, t, i) {
            i = i || {};
            _.call(r.prototype, e, i.statics ? this._transport(t) : t)
        }.autoSet(),
        _transport: function (e) {
            return function () {
                var t = o.call(arguments);
                t.unshift(this[0]);
                var i = e.apply(this, t);
                if (!p.call(this, i))return i;
                this._$forEach(function (i, n) {
                    if (0 !== n) {
                        t[0] = i;
                        e.apply(this, t)
                    }
                });
                return this
            }
        },
        _merge: function (e, t, i) {
            var n = e.length || 0, s = 0;
            for (; void 0 !== t[s];) {
                var r = t[s++];
                if (!i || i.call(e, r))e[n++] = r
            }
            e.length = n;
            return e
        },
        _toArray: function (e) {
            return $._merge([], e)
        },
        _contains: d.contains ? function (e, t) {
            return e === t || (9 == e.nodeType ? e[c] : e).contains(t)
        } : d.compareDocumentPosition ? function (e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;)if (t === e)return !0;
            return !1
        },
        _$cloneNode: function (e, t) {
            t = !!t;
            var i = e.cloneNode(t), n, s;
            if (t) {
                s = nes.all("*", e);
                s.push(e);
                n = nes.all("*", i);
                n.push(i)
            } else {
                s = [e];
                n = [i]
            }
            for (_i = n.length; _i--;)x.fixture.clone(n[_i], s[_i]);
            return i
        },
        _delegateHandlers: {},
        _cleanSelector: nes._cleanSelector,
        _$uniqueSort: nes._uniqueSort,
        _$matches: nes.matches,
        _$fn: r.prototype,
        _$uid: nes._getUid
    });
    var y = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/, b = /^key(?:)/, x = {
        insertor: {
            top: function (e, t) {
                e.insertBefore(t, e.firstChild)
            }, bottom: function (e, t) {
                e.appendChild(t)
            }, before: function (e, t) {
                var i = e.parentNode;
                if (i)i.insertBefore(t, e)
            }, after: function (e, t) {
                var i = e.parentNode;
                if (i)i.insertBefore(t, e.nextSibling)
            }
        },
        fixProps: {input: "checked", option: "selected", textarea: "value", script: "text"},
        fixture: {
            clone: function (e, t) {
                var i, n;
                if (1 === e.nodeType) {
                    if (e.clearAttributes) {
                        e.clearAttributes();
                        e.mergeAttributes(t)
                    }
                    i = e.nodeName.toLowerCase();
                    if (_prop = x.fixProps[i])e[_prop] = t[_prop];
                    e.removeAttribute($._$signal);
                    e.removeAttribute("id")
                }
            }, event: function (t) {
                var i = t.type;
                var n = t.button;
                t.__fixed = !0;
                t.target = t.target || t.srcElement || document;
                t.metaKey = !!t.metaKey;
                if (3 === t.target.nodeType)t.target = t.target.parentNode;
                if (y.test(i)) {
                    t.pageX = e._$pageX(t);
                    t.pageY = e._$pageY(t);
                    if ("mouseover" === i || "mouseout" === i) {
                        var s = t.relatedTarget || t[("mouseover" == i ? "from" : "to") + "Element"];
                        for (; s && 3 == s.nodeType;)s = s.parentNode;
                        t.relatedTarget = s
                    }
                }
                t.which = null != t.charCode ? t.charCode : t.keyCode;
                if (!t.which && void 0 !== n)t.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0;
                if (!t.preventDefault)t.preventDefault = function () {
                    this.returnValue = !1;
                    return this
                };
                if (!t.stopPropagation)t.stopPropagation = function () {
                    this.cancelBubble = !0;
                    return this
                }
            }
        }
    }, w = function (e) {
        var t = $._$matches;
        return function (i, n) {
            var s = $([]);
            if ("boolean" == typeof i) {
                n = i;
                i = null
            }
            this._$forEach(function (r) {
                var a = r[e];
                for (; a;) {
                    if (1 === a.nodeType && (!i || t(a, i))) {
                        s._$add(a);
                        if (!n)break
                    }
                    a = a[e]
                }
            });
            return s
        }
    };
    $._$implement({
        _$style: function (e, i) {
            if (!e)throw Error("缺少css样式名");
            if (void 0 === i)return t._$getStyle(this[0], e); else return this._$forEach(function (n) {
                t._$setStyle(n, e, i)
            })
        }.splitProcess(!0).autoSet(),
        _$attr: function (e, i) {
            if (!e)throw Error("缺少属性名");
            if (void 0 === i)return t._$attr(this[0], e); else return this._$forEach(function (n) {
                t._$attr(n, e, i)
            })
        }.splitProcess(!0).autoSet(),
        _$forEach: function (e) {
            i._$forEach(this, e);
            return this
        },
        _$filter: function (e) {
            var t = [], i = "string" == typeof e;
            this._$forEach(function (n, s) {
                var r = i ? $._$matches(n, e) : e.call(this, n, s);
                if (r)t.push(n)
            });
            return $(t)
        },
        _$map: function (e) {
            var t = [], i = !1;
            this._$forEach(function (n, s) {
                var r = e.call(this, n, s);
                if (!m(r))i = !0;
                t.push(r)
            });
            return i ? t : $([])._$add(t)
        },
        _$sort: function () {
            var e = this._$get();
            $._$uniqueSort(e);
            return $(e)
        },
        _$add: function (e) {
            if (e) {
                if (e.tagName || "number" != typeof e.length || e === window)e = [e];
                $._merge(this, e, function (e) {
                    if (!m(e))return !1;
                    var t = $._$uid(e);
                    if (this._signs[t])return !1; else {
                        this._signs[t] = 1;
                        return !0
                    }
                });
                return this
            }
        },
        _$get: function (e, t) {
            if ("number" != typeof e)return $._toArray(this); else return t ? $(this[e]) : this[e]
        },
        _$last: function (e) {
            return e ? $(this[this.length - 1]) : this[this.length - 1]
        },
        _$first: function (e) {
            return e ? $(this[0]) : this[0]
        },
        _$matches: function (e) {
            return $._$matches(this[0], e)
        },
        _$parent: w("parentNode"),
        _$prev: w("previousSibling"),
        _$next: w("nextSibling"),
        _$children: function (e, t) {
            var i = $([]);
            if ("boolean" == typeof e) {
                t = e;
                e = null
            }
            this._$forEach(function (n) {
                var r = t ? s._$all(e || "*", n) : e ? $(n.childNodes)._$filter(e) : $(n.childNodes);
                i._$add(r)
            });
            return i
        },
        _$siblings: function (e) {
            return this._$prev(e, !0)._$add(this._$next(e, !0))
        },
        _$insert: function (e, t) {
            t = t && t.toLowerCase() || "bottom";
            if (!x.insertor[t])t = "bottom";
            var i = $(e)[0], n = x.insertor[t];
            if (!i)throw Error("The Element to be inserted is not exist");
            return this._$forEach(function (e, t) {
                n(e, 0 === t ? i : $._$cloneNode(i, !0))
            })
        },
        _$insert2: function (e, t) {
            $(e)._$insert(this, t);
            return this
        },
        _$clone: function (e) {
            return this._$map(function (t) {
                return $._$cloneNode(t, e)
            })
        },
        _$text: function (e) {
            if (void 0 === e) {
                if (!this[0])throw Error("内部节点为空，无法完成get操作");
                return this[0][f]
            }
            return this._$forEach(function (t) {
                t[f] = e
            })
        },
        _$html: function (e) {
            if (void 0 === e) {
                if (!this[0])throw Error("内部节点为空，无法完成get操作");
                return this[0].innerHTML
            }
            return this._$forEach(function (t) {
                t.innerHTML = e
            })
        },
        _$val: function (e) {
            if (void 0 === e) {
                if (!this[0])throw Error("内部节点为空，无法完成get操作");
                return this[0].value
            }
            return this._$forEach(function (t) {
                t.value = e
            })
        },
        _delegate: function (t, i, n) {
            i = $._cleanSelector(i);
            return this._$forEach(function (s) {
                var r = $._$uid(s), a = $._delegateHandlers[r] || ($._delegateHandlers[r] = {}), o = a[t] || (a[t] = {}), l = o[i] || (o[i] = []);
                var c = function (e) {
                    var t;
                    if (t = h(i, e.target || e.srcElement, s))n.apply(t, arguments)
                };
                c._raw = n;
                l.push(c);
                e._$addEvent(s, t, c)
            })
        },
        _undelegate: function (t, i, n) {
            i = $._cleanSelector(i);
            return this._$forEach(function (s) {
                var r = $._$uid(s);
                var a, o, l;
                if ((a = $._delegateHandlers[r]) && (o = a[t]) && (l = o[i])) {
                    for (var c = l.length; c--;) {
                        var d = l[c];
                        if (!n || d._raw === n) {
                            e._$delEvent(s, t, d);
                            l.splice(c, 1)
                        }
                    }
                    if (!l.length)delete o[i]
                }
            })
        },
        _$on: function (t, i, n) {
            if (void 0 === t)throw Error("缺少事件名参数");
            if ("function" == typeof i) {
                n = i;
                i = null
            }
            var s = t.indexOf(" ");
            if (~s) {
                i = t.slice(s + 1);
                t = t.slice(0, s)
            }
            if (!n)throw Error("缺少回调函数"); else {
                var r = n;
                var n = function (e) {
                    x.fixture.event(e);
                    r.apply(this, arguments)
                };
                r.real = n
            }
            if (i)return this._delegate(t, i, n); else return this._$forEach(function (i) {
                e._$addEvent(i, t, n)
            })
        }.splitProcess().autoSet(),
        _$off: function (t, i, n) {
            if ("function" == typeof i) {
                n = i;
                i = null
            }
            var s;
            if (t && ~(s = t.indexOf(" "))) {
                i = t.slice(s + 1);
                t = t.slice(0, s)
            }
            if (n)n = n.real || n;
            if (i)return this._undelegate(t, i, n); else return this._$forEach(function (i) {
                var s = $._$uid(i), r = $._delegateHandlers[s], a;
                if (!t) {
                    if (r)delete $._delegateHandlers[s];
                    e._$clearEvent(i, t)
                } else {
                    if (r)a = r[t];
                    if (!n) {
                        if (a)delete r[t];
                        e._$clearEvent(i, t)
                    } else e._$delEvent(i, t, n)
                }
            })
        }.splitProcess().autoSet(),
        _$trigger: function (t, i) {
            if ("string" != typeof t)throw Error("事件类型参数错误");
            this._$forEach(function (n) {
                e._$dispatchEvent(n, t, i)
            });
            return this
        }.splitProcess().autoSet(),
        splice: function () {
            throw Error("don't use the NodeList#splice")
        }
    });
    g.reset();
    if (!0)nej.$ = $;
    return $
}, 5, 3, 28, 133, 50);
I$(8, function (e) {
    return e
}, 139);
I$(128, function (e, t, i, n, s, r) {
    i._$cookie = function () {
        var e = new Date, i = +e, s = 864e5;
        var r = function (e) {
            var t = document.cookie, i = "\\b" + e + "=", n = t.search(i);
            if (n < 0)return "";
            n += i.length - 2;
            var s = t.indexOf(";", n);
            if (s < 0)s = t.length;
            return t.substring(n, s) || ""
        };
        return function (a, o) {
            if (void 0 === o)return r(a);
            if (t._$isString(o)) {
                if (o) {
                    document.cookie = a + "=" + o + ";";
                    return o
                }
                o = {expires: -100}
            }
            o = o || n;
            var l = a + "=" + (o.value || "") + ";";
            delete o.value;
            if (void 0 !== o.expires) {
                e.setTime(i + o.expires * s);
                o.expires = e.toGMTString()
            }
            l += t._$object2string(o, ";");
            document.cookie = l
        }
    }();
    if (!0)e.copy(e.P("nej.j"), i);
    return i
}, 132, 28);
I$(2, function (e, t, i, n, s, r) {
    i._$klass = function () {
        var e = function () {
            return "[object Function]" !== n.toString.call(arguments[0])
        };
        var i = function (e, i) {
            for (; i;) {
                var n = i.prototype, s = t.__forIn(n, function (t) {
                    return e === t
                });
                if (null != s)return {name: s, klass: i};
                i = i._$super
            }
        };
        return function () {
            var n = function () {
                return this.__init.apply(this, arguments)
            };
            n.prototype.__init = s;
            n._$extend = function (n, s) {
                if (!e(n)) {
                    var r = this;
                    if (s !== !1)t.__forIn(n, function (t, i) {
                        if (!e(t))r[i] = t
                    });
                    this._$super = n;
                    var a = function () {
                    };
                    a.prototype = n.prototype;
                    this.prototype = new a;
                    this.prototype.constructor = this;
                    var o = [], l = {};
                    var c = function (e, t) {
                        var n = i(e, t);
                        if (n) {
                            if (o[o.length - 1] != n.name)o.push(n.name);
                            l[n.name] = n.klass._$super;
                            return n.name
                        }
                    };
                    this.prototype.__super = function () {
                        var e = o[o.length - 1], t = arguments.callee.caller;
                        if (!e)e = c(t, this.constructor); else {
                            var i = l[e].prototype;
                            if (!i.hasOwnProperty(t) || t != i[e])e = c(t, this.constructor); else l[e] = l[e]._$super
                        }
                        var n = l[e].prototype[e].apply(this, arguments);
                        if (e == o[o.length - 1]) {
                            o.pop();
                            delete l[e]
                        }
                        return n
                    };
                    if (!0) {
                        var d = this.prototype;
                        d.__supInit = d.__super;
                        d.__supReset = d.__super;
                        d.__supDestroy = d.__super;
                        d.__supInitNode = d.__super;
                        d.__supDoBuild = d.__super;
                        d.__supOnShow = d.__super;
                        d.__supOnHide = d.__super;
                        d.__supOnRefresh = d.__super;
                        this._$supro = n.prototype
                    }
                    return this.prototype
                }
            };
            return n
        }
    }();
    if (!0) {
        e.C = i._$klass;
        e.copy(this.NEJ, e)
    }
    return i
}, 132, 138);
I$(4, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$EventTarget = t._$klass();
    l = s._$$EventTarget.prototype;
    s._$$EventTarget._$allocate = function (e) {
        e = e || {};
        var t = !!this.__pool && this.__pool.shift();
        if (!t) {
            t = new this(e);
            this.__inst__ = (this.__inst__ || 0) + 1
        }
        t.__reset(e);
        return t
    };
    s._$$EventTarget._$recycle = function () {
        var e = function (e, t, i) {
            e._$recycle();
            i.splice(t, 1)
        };
        return function (t) {
            if (!t)return null;
            if (!n._$isArray(t)) {
                if (!(t instanceof this)) {
                    var i = t.constructor;
                    if (i._$recycle)i._$recycle(t);
                    return null
                }
                if (t == this.__instance)delete this.__instance;
                if (t == this.__inctanse)delete this.__inctanse;
                t.__destroy();
                if (!this.__pool)this.__pool = [];
                if (n._$indexOf(this.__pool, t) < 0)this.__pool.push(t);
                return null
            }
            n._$reverseEach(t, e, this)
        }
    }();
    s._$$EventTarget._$getInstance = function (e) {
        if (!this.__instance)this.__instance = this._$allocate(e);
        return this.__instance
    };
    s._$$EventTarget._$getInstanceWithReset = function (e, t) {
        if (t && this.__inctanse) {
            this.__inctanse._$recycle();
            delete this.__inctanse
        }
        if (!this.__inctanse)this.__inctanse = this._$allocate(e); else this.__inctanse.__reset(e);
        return this.__inctanse
    };
    l.__init = function () {
        this.__events = {};
        this.__events_dom = {};
        this.id = n._$uniqueID()
    };
    l.__reset = function (e) {
        this._$batEvent(e)
    };
    l.__destroy = function () {
        this._$clearEvent();
        this.__doClearDomEvent()
    };
    l.__doInitDomEvent = function () {
        var e = function (e) {
            if (e && !(e.length < 3)) {
                this.__events_dom["de-" + n._$uniqueID()] = e;
                i._$addEvent.apply(i, e)
            }
        };
        return function (t) {
            n._$forEach(t, e, this)
        }
    }();
    l.__doClearDomEvent = function () {
        var e = function (e, t, n) {
            delete n[t];
            i._$delEvent.apply(i, e)
        };
        return function () {
            n._$loop(this.__events_dom, e)
        }
    }();
    l.__doClearComponent = function (e) {
        e = e || a;
        n._$loop(this, function (t, i, n) {
            if (t && t._$recycle && !e(t)) {
                delete n[i];
                t._$recycle()
            }
        })
    };
    l._$recycle = function () {
        this.constructor._$recycle(this)
    };
    l._$hasEvent = function (e) {
        var e = (e || "").toLowerCase(), t = this.__events[e];
        return !!t && t !== a
    };
    l._$delEvent = function (e, t) {
        var e = (e || "").toLowerCase(), i = this.__events[e];
        if (n._$isArray(i)) {
            n._$reverseEach(i, function (e, i, n) {
                if (e == t)n.splice(i, 1)
            });
            if (!i.length)delete this.__events[e]
        } else if (i == t)delete this.__events[e]
    };
    l._$setEvent = function (e, t) {
        if (e && n._$isFunction(t))this.__events[e.toLowerCase()] = t
    };
    l._$batEvent = function () {
        var e = function (e, t) {
            this._$setEvent(t, e)
        };
        return function (t) {
            n._$loop(t, e, this)
        }
    }();
    l._$clearEvent = function () {
        var e = function (e, t) {
            this._$clearEvent(t)
        };
        return function (t) {
            var t = (t || "").toLowerCase();
            if (t)delete this.__events[t]; else n._$loop(this.__events, e, this)
        }
    }();
    l._$addEvent = function (e, t) {
        if (e && n._$isFunction(t)) {
            e = e.toLowerCase();
            var i = this.__events[e];
            if (i) {
                if (!n._$isArray(i))this.__events[e] = [i];
                this.__events[e].push(t)
            } else this.__events[e] = t
        }
    };
    l._$dispatchEvent = function (e) {
        var e = (e || "").toLowerCase(), t = this.__events[e];
        if (t) {
            var i = o.slice.call(arguments, 1);
            if (n._$isArray(t))n._$forEach(t, function (e) {
                if (!1)e.apply(this, i); else try {
                    e.apply(this, i)
                } catch (t) {
                    console.error(t.message);
                    console.error(t.stack)
                }
            }, this); else t.apply(this, i)
        }
    };
    if (!0) {
        s._$$Event = s._$$EventTarget;
        e.copy(e.P("nej.ut"), s)
    }
    return s
}, 132, 2, 5, 28);
I$(342, function (e, t, i, n, s) {
    var r = this, a = e._$KERNEL.prefix.pro;
    t.__requestAnimationFrame = function () {
        var e = r.requestAnimationFrame || r[a + "RequestAnimationFrame"];
        return function () {
            if (e)return e.apply(this, arguments)
        }
    }();
    t.__cancelAnimationFrame = function () {
        var e = r.cancelAnimationFrame || r[a + "CancelAnimationFrame"];
        return function () {
            if (e)return e.apply(this, arguments)
        }
    }();
    return t
}, 249);
I$(336, function (e, t) {
    return e
}, 342, 249);
I$(323, function (e, t, i, n, s, r) {
    i.requestAnimationFrame = function () {
        t.__requestAnimationFrame.apply(null, arguments)
    };
    i.cancelAnimationFrame = function () {
        t.__cancelAnimationFrame.apply(null, arguments)
    };
    if (!0) {
        if (!this.requestAnimationFrame)this.requestAnimationFrame = i.requestAnimationFrame;
        if (!this.cancelAnimationFrame)this.cancelAnimationFrame = i.cancelAnimationFrame
    }
    return i
}, 249, 336);
I$(300, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$Animation = t._$klass();
    l = s._$$Animation._$extend(i._$$EventTarget);
    l.__reset = function (e) {
        this.__super(e);
        this.__end = e.to || r;
        this.__begin = e.from || {};
        this.__delay = Math.max(0, parseInt(e.delay) || 0)
    };
    l.__destroy = function () {
        this.__super();
        this._$stop();
        if (this.__dtime) {
            window.clearTimeout(this.__dtime);
            delete this.__dtime
        }
        delete this.__end;
        delete this.__begin
    };
    l.__onAnimationFrame = function (e) {
        if (this.__begin) {
            if (("" + e).indexOf(".") >= 0)e = +new Date;
            if (!this.__doAnimationFrame(e))this.__timer = n.requestAnimationFrame(this.__onAnimationFrame._$bind(this)); else this._$stop()
        }
    };
    l.__doAnimationFrame = a;
    l._$play = function () {
        var e = function () {
            this.__dtime = window.clearTimeout(this.__dtime);
            this.__begin.time = +new Date;
            this.__timer = n.requestAnimationFrame(this.__onAnimationFrame._$bind(this))
        };
        return function () {
            this.__dtime = window.setTimeout(e._$bind(this), this.__delay)
        }
    }();
    l._$stop = function () {
        this.__timer = n.cancelAnimationFrame(this.__timer);
        this._$dispatchEvent("onstop")
    };
    if (!0)e.copy(e.P("nej.ut"), s);
    return s
}, 132, 2, 4, 323);
I$(252, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$AnimBezier = t._$klass();
    l = s._$$AnimBezier._$extend(n._$$Animation);
    l.__reset = function (e) {
        this.__super(e);
        this.__duration = e.duration || 200;
        this.__epsilon = 1 / (200 * this.__duration);
        this.__doParseTiming(e.timing);
        this.__doCalPolynomialCoefficients()
    };
    l.__destroy = function () {
        this.__super();
        delete this.__pointer;
        delete this.__coefficient
    };
    l.__doParseTiming = function () {
        var e = /^cubic\-bezier\((.*?)\)$/i, t = /\s*,\s*/i, n = {
            linear: [0, 0, 1, 1],
            ease: [.25, .1, .25, 1],
            easein: [.42, 0, 1, 1],
            easeout: [0, 0, .58, 1],
            easeinout: [0, 0, .58, 1]
        };
        var s = function (e, t, i) {
            i[t] = parseFloat(e)
        };
        return function (r) {
            r = (r || "").toLowerCase();
            this.__pointer = n[r];
            if (e.test(r)) {
                this.__pointer = RegExp.$1.split(t);
                i._$forEach(this.__pointer, s)
            }
            if (!this.__pointer)this.__pointer = n.ease
        }
    }();
    l.__doCalPolynomialCoefficients = function () {
        var e = this.__pointer, t = 3 * e[0], i = 3 * (e[2] - e[0]) - t, n = 1 - t - i, s = 3 * e[1], r = 3 * (e[3] - e[1]) - s, a = 1 - s - r;
        this.__coefficient = {ax: n, ay: a, bx: i, by: r, cx: t, cy: s}
    };
    l.__doCalCubicBezierAtTime = function () {
        var e = function (e, t) {
            return ((t.ax * e + t.bx) * e + t.cx) * e
        };
        var t = function (e, t) {
            return ((t.ay * e + t.by) * e + t.cy) * e
        };
        var i = function (e, t) {
            return (3 * t.ax * e + 2 * t.bx) * e + t.cx
        };
        var n = function (t, n, s) {
            var r, a, o, l, c, d;
            for (o = t, d = 0; d < 8; d++) {
                l = e(o, s) - t;
                if (Math.abs(l) < n)return o;
                c = i(o, s);
                if (Math.abs(c) < 1e-6)break;
                o -= l / c
            }
            r = 0;
            a = 1;
            o = t;
            if (o < r)return r;
            if (o > a)return a;
            for (; r < a;) {
                l = e(o, s);
                if (Math.abs(l - t) < n)return o;
                if (t > l)r = o; else a = o;
                o = .5 * (a - r) + r
            }
            return o
        };
        return function (e) {
            return t(n(e / this.__duration, this.__epsilon, this.__coefficient), this.__coefficient)
        }
    }();
    l.__doAnimationFrame = function (e) {
        var t = e - this.__begin.time, n = this.__doCalCubicBezierAtTime(t), s = i._$fixed(this.__begin.offset * (1 - n) + this.__end.offset * n, 2), r = !1;
        if (t >= this.__duration) {
            s = this.__end.offset;
            r = !0
        }
        this._$dispatchEvent("onupdate", {offset: 1 * s});
        return r
    };
    l._$stop = function () {
        this._$dispatchEvent("onupdate", {offset: this.__end.offset});
        this.__super()
    };
    if (!0)e.copy(e.P("nej.ut"), s);
    return s
}, 132, 2, 28, 300);
I$(129, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$AnimEaseOut = t._$klass();
    l = s._$$AnimEaseOut._$extend(n._$$AnimBezier);
    l.__reset = function (e) {
        e = i._$merge({}, e);
        e.timing = "easeout";
        this.__super(e)
    };
    if (!0)e.copy(e.P("nej.ut"), s);
    return s
}, 132, 2, 28, 252);
I$(340, function (e, t, i, n, s) {
    return JSON
}, 249);
I$(324, function () {
    return JSON
}, 340);
I$(302, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    var f;
    l._$$ProxyAbstract = e._$klass();
    f = l._$$ProxyAbstract._$extend(r._$$EventTarget);
    f.__reset = function (e) {
        this.__super(e);
        this.__request = t._$fetch({url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4}, e);
        var i = n._$get("csrf");
        if (i.cookie && i.param) {
            var r = encodeURIComponent(i.param) + "=" + encodeURIComponent(a._$cookie(i.cookie) || ""), o = this.__request.url.indexOf("?") < 0 ? "?" : "&";
            this.__request.url += o + r
        }
        this.__headers = e.headers || {};
        var l = this.__headers[s._$HEAD_CT];
        if (null == l)this.__headers[s._$HEAD_CT] = s._$HEAD_CT_FORM
    };
    f.__destroy = function () {
        this.__super();
        delete this.__rkey;
        delete this.__request;
        delete this.__headers
    };
    f.__onLoadRequest = function (e) {
        var t = e.status;
        if (t != -1)if (0 == ("" + t).indexOf("2"))this._$dispatchEvent("onload", i._$text2type(e.result, this.__request.type)); else this._$dispatchEvent("onerror", {
            data: t,
            result: e.result,
            code: s._$CODE_ERRSERV,
            message: "服务器返回异常状态[" + t + "]!"
        }); else this._$dispatchEvent("onerror", {code: s._$CODE_TIMEOUT, message: "请求[" + this.__request.url + "]超时！"})
    };
    f.__doSendRequest = d;
    f.__getResponseHeader = d;
    f._$send = function (e) {
        var t = this.__request.url;
        if (t)try {
            this.__request.data = null == e ? null : e;
            var i = {request: this.__request, headers: this.__headers};
            try {
                this._$dispatchEvent("onbeforerequest", i)
            } catch (n) {
                console.error(n.message);
                console.error(n.stack)
            }
            this.__doSendRequest(i)
        } catch (r) {
            this._$dispatchEvent("onerror", {code: s._$CODE_ERRSERV, message: "请求[" + t + "]失败:" + r.message + "！"})
        } else this._$dispatchEvent("onerror", {code: s._$CODE_NOTASGN, message: "没有输入请求地址！"})
    };
    f._$abort = d;
    f._$header = function (e) {
        if (!t._$isArray(e))return this.__getResponseHeader(e) || "";
        var i = {};
        t._$forEach(e, function (e) {
            i[e] = this._$header(e)
        }, this);
        return i
    };
    return l
}, 2, 28, 3, 158, 135, 4, 128, 324);
I$(325, function (e, t, i, n) {
    e.__getXMLHttpRequest = function () {
        return new XMLHttpRequest
    };
    return e
});
I$(303, function (e, t, i, n, s, r, a) {
    return t
}, 249, 325, 28);
I$(258, function (e, t, i, n, s, r, a, o, l) {
    var c;
    r._$$ProxyXHR = i._$klass();
    c = r._$$ProxyXHR._$extend(e._$$ProxyAbstract);
    c.__destroy = function () {
        this.__super();
        window.clearTimeout(this.__timer);
        delete this.__timer;
        try {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        } catch (e) {
        }
        delete this.__xhr
    };
    c.__doSendRequest = function () {
        var e = function (e, t) {
            this.__xhr.setRequestHeader(t, e)
        };
        var i = function (e) {
            var i = [];
            t._$reverseEach(e.getElementsByTagName("input"), function (e) {
                if ("file" == e.type)if (e.name) {
                    if (e.files.length > 1) {
                        t._$forEach(e.files, function (t) {
                            i.push({name: e.name, file: t})
                        });
                        e.parentNode.removeChild(e)
                    }
                } else e.parentNode.removeChild(e)
            });
            return i.length > 0 ? i : null
        };
        return function (r) {
            var a = r.request, o = r.headers;
            if (this.__xhr)this.__xhr.abort(); else this.__xhr = s.__getXMLHttpRequest();
            if (o[n._$HEAD_CT] === n._$HEAD_CT_FILE) {
                delete o[n._$HEAD_CT];
                this.__xhr.upload.onprogress = this.__onStateChange._$bind(this, 1);
                if ("FORM" === a.data.tagName) {
                    var l = i(a.data);
                    a.data = new FormData(a.data);
                    t._$forEach(l, function (e) {
                        var i = e.file;
                        a.data.append(e.name || i.name || "file-" + t._$uniqueID(), i)
                    })
                }
            }
            this.__xhr.onreadystatechange = this.__onStateChange._$bind(this, 2);
            if (0 !== a.timeout)this.__timer = window.setTimeout(this.__onStateChange._$bind(this, 3), a.timeout);
            this.__xhr.open(a.method, a.url, !a.sync);
            t._$loop(o, e, this);
            if (this.__request.cookie && "withCredentials" in this.__xhr)this.__xhr.withCredentials = !0;
            this.__xhr.send(a.data)
        }
    }();
    c.__onStateChange = function (e) {
        switch (e) {
            case 1:
                this._$dispatchEvent("onuploading", arguments[1]);
                break;
            case 2:
                if (4 == this.__xhr.readyState)this.__onLoadRequest({
                    status: this.__xhr.status,
                    result: this.__xhr.responseText || ""
                });
                break;
            case 3:
                this.__onLoadRequest({status: -1})
        }
    };
    c.__getResponseHeader = function (e) {
        return !this.__xhr ? "" : this.__xhr.getResponseHeader(e)
    };
    c._$abort = function () {
        this.__onLoadRequest({status: 0})
    };
    return r
}, 302, 28, 2, 135, 303);
!function () {
    if ("undefined" == typeof TrimPath) {
        TrimPath = {};
        if ("undefined" != typeof exports)TrimPath = exports
    }
    var e = {}, t = [], i = /\s+/g, n = +new Date, s, r, a;
    var o = function () {
        var e = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, t = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/, i = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, n = /^new\s+/, s = /['"]/;
        var r = function (t) {
            if (!e.test(t)) {
                t = t.split(".")[0].trim();
                if (t && !s.test(t)) {
                    t = t.replace(n, "");
                    try {
                        if (i.test(t))return;
                        a[t] = 1
                    } catch (r) {
                    }
                }
            }
        };
        return function (i) {
            i = i || "";
            if (i && !e.test(i)) {
                var n = i.split(t);
                for (var s = 0, a = n.length; s < a; s++)r(n[s])
            }
        }
    }();
    var l = function (e) {
        if ("in" != e[2])throw"bad for loop statement: " + e.join(" ");
        t.push(e[1]);
        o(e[3]);
        return "var __HASH__" + e[1] + " = " + e[3] + "," + e[1] + "," + e[1] + "_count=0;if (!!__HASH__" + e[1] + ")for(var " + e[1] + "_key in __HASH__" + e[1] + "){" + e[1] + " = __HASH__" + e[1] + "[" + e[1] + "_key];if (typeof(" + e[1] + ')=="function") continue;' + e[1] + "_count++;"
    };
    var c = function () {
        var e = t[t.length - 1];
        return "}; if(!__HASH__" + e + "||!" + e + "_count){"
    };
    var d = function () {
        t.pop();
        return "};"
    };
    var u = function (e) {
        if ("as" != e[2])throw"bad for list loop statement: " + e.join(" ");
        var t = e[1].split("..");
        if (t.length > 1) {
            o(t[0]);
            o(t[1]);
            return "for(var " + e[3] + "," + e[3] + "_index=0," + e[3] + "_beg=" + t[0] + "," + e[3] + "_end=" + t[1] + "," + e[3] + "_length=parseInt(" + e[3] + "_end-" + e[3] + "_beg+1);" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = " + e[3] + "_beg+" + e[3] + "_index;"
        } else {
            o(e[1]);
            return "for(var __LIST__" + e[3] + " = " + e[1] + "," + e[3] + "," + e[3] + "_index=0," + e[3] + "_length=__LIST__" + e[3] + ".length;" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = __LIST__" + e[3] + "[" + e[3] + "_index];"
        }
    };
    var f = function (e) {
        if (e && e.length) {
            e.shift();
            var t = e[0].split("(")[0];
            return "var " + t + " = function" + e.join("").replace(t, "") + "{var __OUT=[];"
        }
    };
    var _ = function (e) {
        if (!e[1])throw"bad include statement: " + e.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var h = function (e, t) {
        o(t.slice(1).join(" "));
        return e
    };
    var p = function (e) {
        return h("if(", e)
    };
    var m = function (e) {
        return h("}else if(", e)
    };
    var v = function (e) {
        return h("var ", e)
    };
    r = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: p, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: m, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: l, pmin: 3},
            forelse: {pfix: c},
            "/for": {pfix: d},
            list: {pfix: u, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: v, sfix: ";"},
            macro: {pfix: f},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    s = !0
                }
            },
            "/trim": {
                pfix: function () {
                    s = null
                }
            },
            inline: {pfix: _, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (e) {
                return (e || "") + "" + n
            }, "default": function (e, t) {
                return e || t
            }
        }
    };
    var g = function () {
        var e = /\\([\{\}])/g;
        return function (t, n) {
            t = t.replace(e, "$1");
            var s = t.slice(1, -1).split(i), a = r.def[s[0]];
            if (a) {
                if (a.pmin && a.pmin >= s.length)throw"Statement needs more parameters:" + t;
                n.push(a.pfix && "string" != typeof a.pfix ? a.pfix(s) : a.pfix || "");
                if (a.sfix) {
                    if (s.length <= 1) {
                        if (a.pdft)n.push(a.pdft)
                    } else for (var o = 1, l = s.length; o < l; o++) {
                        if (o > 1)n.push(" ");
                        n.push(s[o])
                    }
                    n.push(a.sfix)
                }
            } else y(t, n)
        }
    }();
    var $ = function (e, t) {
        if (e && e.length)if (1 != e.length) {
            var i = e.pop().split(":");
            t.push("__MDF['" + i.shift() + "'](");
            $(e, t);
            if (i.length > 0) {
                var n = i.join(":");
                o(n);
                t.push("," + n)
            }
            t.push(")")
        } else {
            var s = e.pop();
            o(s);
            t.push("" == s ? '""' : s)
        }
    };
    var y = function (e, t) {
        if (e) {
            var i = e.split("\n");
            if (i && i.length)for (var n = 0, r = i.length, a; n < r; n++) {
                a = i[n];
                if (s) {
                    a = a.trim();
                    if (!a)continue
                }
                b(a, t);
                if (s && n < r - 1)t.push("__OUT.push('\\n');")
            }
        }
    };
    var b = function () {
        var e = /\|\|/g, t = /#@@#/g;
        return function (i, n) {
            var s = "}", r = -1, a = i.length, o, l, c, d, u;
            for (; r + s.length < a;) {
                o = "${";
                l = "}";
                c = i.indexOf(o, r + s.length);
                if (c < 0)break;
                if ("%" == i.charAt(c + 2)) {
                    o = "${%";
                    l = "%}"
                }
                d = i.indexOf(l, c + o.length);
                if (d < 0)break;
                x(i.substring(r + s.length, c), n);
                u = i.substring(c + o.length, d).replace(e, "#@@#").split("|");
                for (var f = 0, _ = u.length; f < _; u[f] = u[f].replace(t, "||"), f++);
                n.push("__OUT.push(");
                $(u, n);
                n.push(");");
                s = l;
                r = d
            }
            x(i.substring(r + s.length), n)
        }
    }();
    var x = function () {
        var e = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var t = function (t) {
            return (t || "").replace(e.r, function (t) {
                return e[t] || t
            })
        };
        return function (e, i) {
            if (e)i.push("__OUT.push('" + t(e) + "');")
        }
    }();
    var w = function () {
        var e = /\t/g, t = /\n/g, n = /\r\n?/g;
        var s = function (e, t) {
            var i = e.indexOf("}", t + 1);
            for (; "\\" == e.charAt(i - 1);)i = e.indexOf("}", i + 1);
            return i
        };
        var o = function () {
            var e = [], t = arguments[0];
            for (var i in t) {
                i = (i || "").trim();
                if (i)e.push(i + "=$v('" + i + "')"); else;
            }
            return e.length > 0 ? "var " + e.join(",") + ";" : ""
        };
        return function (l) {
            a = {};
            l = l.replace(n, "\n").replace(e, "    ");
            var c = ["if(!__CTX) return '';", ""];
            c.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            c.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            c.push("__OUT=[];");
            var d = -1, u = l.length;
            var f, _, h, p, m, v, $, b;
            for (; d + 1 < u;) {
                f = d;
                f = l.indexOf("{", f + 1);
                for (; f >= 0;) {
                    _ = s(l, f);
                    h = l.substring(f, _);
                    p = h.match(r.blk);
                    if (p) {
                        m = p[1].length + 1;
                        v = l.indexOf("}", f + m);
                        if (v >= 0) {
                            $ = v - f - m <= 0 ? "{/" + p[1] + "}" : h.substr(m + 1);
                            m = l.indexOf($, v + 1);
                            if (m >= 0) {
                                y(l.substring(d + 1, f), c);
                                b = l.substring(v + 1, m);
                                switch (p[1]) {
                                    case"cdata":
                                        x(b, c);
                                        break;
                                    case"minify":
                                        x(b.replace(t, " ").replace(i, " "), c);
                                        break;
                                    case"eval":
                                        if (b)c.push("__OUT.push((function(){" + b + "})());")
                                }
                                f = d = m + $.length - 1
                            }
                        }
                    } else if ("$" != l.charAt(f - 1) && "\\" != l.charAt(f - 1) && 0 == h.substr("/" == h.charAt(1) ? 2 : 1).search(r.tag))break;
                    f = l.indexOf("{", f + 1)
                }
                if (f < 0)break;
                _ = s(l, f);
                if (_ < 0)break;
                y(l.substring(d + 1, f), c);
                g(l.substring(f, _ + 1), c);
                d = _
            }
            y(l.substring(d + 1), c);
            c.push(';return __OUT.join("");');
            c[1] = o(a);
            a = null;
            return new Function("__CTX", "__MDF", c.join(""))
        }
    }();
    TrimPath.seed = function () {
        return n
    };
    TrimPath.merge = function () {
        var t = {};
        TrimPath.dump = function () {
            return {func: t, text: e}
        };
        return function (i, n, s) {
            try {
                n = n || {};
                if (!t[i] && !e[i])return "";
                if (!t[i]) {
                    t[i] = w(e[i]);
                    delete e[i]
                }
                if (s)for (var a in r.ext)if (!s[a])s[a] = r.ext[a];
                return t[i](n, s || r.ext)
            } catch (o) {
                return o.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var t = +new Date;
        return function (i, n) {
            if (!i)return "";
            n = n || "ck_" + t++;
            e[n] = i;
            return n
        }
    }()
}();
I$(29, function (e, t, i, n, s, r, a, o, l) {
    var c = {};
    r._$seed = TrimPath.seed;
    r._$get = function () {
        var e = function (e) {
            return !r._$getTextTemplate ? "" : r._$getTextTemplate(e)
        };
        return function (i, n, s) {
            n = n || {};
            n.inline = e;
            s = t._$merge({}, c, s);
            s.rand = t._$uniqueID;
            s.format = t._$format;
            s.escape = t._$escape;
            s.inline = e;
            return TrimPath.merge(i, n, s)
        }
    }();
    r._$add = function (e, t) {
        if (!e)return "";
        var n, s = i._$get(e);
        if (s) {
            n = s.id;
            e = s.value || s.innerText;
            if (!t)i._$remove(s)
        }
        return TrimPath.parse(e, n)
    };
    r._$render = function (e, t, n, s) {
        e = i._$get(e);
        if (e)e.innerHTML = r._$get(t, n, s)
    };
    r._$extend = function (e) {
        t._$merge(c, e)
    };
    n._$merge({_$render: r._$render});
    if (!0) {
        var d = e.P("nej.e");
        d._$addHtmlTemplate = r._$add;
        d._$getHtmlTemplate = r._$get;
        d._$getHtmlTemplateSeed = r._$seed;
        d._$renderHtmlTemplate = r._$render;
        d._$registJSTExt = r._$extend
    }
    return r
}, 132, 28, 3, 133, 156);
I$(343, function (e, t, i, n, s) {
    t.__canFlashEventBubble = function (e) {
        return "transparent" != (e || "").toLowerCase()
    };
    return t
}, 249);
I$(337, function (e, t, i, n, s, r) {
    if ("webkit" === t._$KERNEL.engine)I$(344, function () {
        e.__canFlashEventBubble = function (e) {
            return !0
        }
    });
    return e
}, 343, 249);
I$(338, '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$(326, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    var f = s._$add(o);
    l._$flash = function () {
        var o = {}, l = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (e) {
            var t = decodeURIComponent(e.target), i = e.type.toLowerCase();
            var n = o[t + "-tgt"];
            if (n && l.test(i))d(n, e);
            var s = o[t + "-on" + i];
            if (s) {
                var r = "";
                try {
                    r = s(e)
                } catch (a) {
                }
                return r
            }
        };
        var c = function (e) {
            var i = t._$get(e.parent) || document.body, n = s._$get(f, e);
            i.insertAdjacentHTML(!e.hidden ? "beforeEnd" : "afterBegin", n)
        };
        var d = function (e, t) {
            var n = t.type.toLowerCase();
            r.requestAnimationFrame(function () {
                i._$dispatchEvent(e, n)
            })
        };
        var u = function (e) {
            return !!e && !!e.inited && !!e.inited()
        };
        var _ = function (e) {
            var i = [document.embeds[e], t._$get(e), document[e], window[e]], s = n._$forIn(i, u), r = i[s], a = e + "-count";
            o[a]++;
            if (!(r || o[a] > 100))window.setTimeout(_._$bind(null, e), 300); else {
                o[e](r);
                delete o[e];
                delete o[a]
            }
        };
        var h = function (e) {
            var i = e.id, s = e.params;
            if (!s) {
                s = {};
                e.params = s
            }
            var r = s.flashvars || "";
            r += (!r ? "" : "&") + ("id=" + i);
            if (!e.hidden && (e.target || a.__canFlashEventBubble(s.wmode))) {
                var l = t._$id(e.target) || t._$id(e.parent);
                o[i + "-tgt"] = l
            }
            s.flashvars = r;
            n._$loop(e, function (e, t) {
                if (n._$isFunction(e) && "onready" != t)o[i + "-" + t] = e
            })
        };
        return function (t) {
            t = e.X({}, t);
            if (t.src) {
                var i = "_" + n._$uniqueID();
                t.id = i;
                h(t);
                c(t);
                if (t.onready) {
                    o[i] = t.onready;
                    o[i + "-count"] = 0;
                    _(i)
                }
            }
        }
    }();
    if (!0)e.copy(e.P("nej.e"), l);
    return l
}, 132, 3, 5, 28, 29, 323, 337, 338);
I$(304, function (e, t, i, n, s, r, a, o, l) {
    var c, d = {}, u = n._$uniqueID();
    this["ld" + u] = function (e, t) {
        var i = d[e];
        if (i) {
            delete d[e];
            i.__onLoadRequest({status: 200, result: t})
        }
    };
    this["er" + u] = function (e, t) {
        var i = d[e];
        if (i) {
            delete d[e];
            i.__onLoadRequest({status: t || 0})
        }
    };
    r._$$ProxyFlash = t._$klass();
    c = r._$$ProxyFlash._$extend(e._$$ProxyAbstract);
    c.__doSendRequest = function (e) {
        var t = d.flash;
        if (!n._$isArray(t))if (t) {
            this.__rkey = n._$uniqueID();
            d[this.__rkey] = this;
            var r = n._$fetch({url: "", data: null, method: "GET"}, e.request);
            r.key = this.__rkey;
            r.headers = e.headers;
            r.onerror = "cb.er" + u;
            r.onloaded = "cb.ld" + u;
            var a = i._$getFlashProxy(r.url);
            if (a)r.policyURL = a;
            t.request(r)
        } else {
            d.flash = [this.__doSendRequest._$bind(this, e)];
            s._$flash({
                hidden: !0, src: i._$get("ajax.swf"), onready: function (e) {
                    if (e) {
                        var t = d.flash;
                        d.flash = e;
                        n._$reverseEach(t, function (e, t, i) {
                            try {
                                e()
                            } catch (n) {
                            }
                        })
                    }
                }
            })
        } else t.push(this.__doSendRequest._$bind(this, e))
    };
    c._$abort = function () {
        delete d[this.__rkey];
        this.__onLoadRequest({status: 0})
    };
    return r
}, 302, 2, 158, 28, 326);
I$(345, function (e, t, i, n) {
    e.__formatOrigin = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t))return RegExp.$1; else return "*"
        }
    }();
    e.__formatPassData = function (e) {
        return e
    };
    e.__postMessage = function (i, n) {
        if (i.postMessage) {
            n = n || t;
            i.postMessage(e.__formatPassData(n.data), e.__formatOrigin(n.origin))
        }
    };
    return e
});
I$(339, function (e, t, i, n, s, r, a, o) {
    return t
}, 249, 345, 28, 5);
I$(327, function (e, t, i, n, s, r, a, o) {
    s._$postMessage = function () {
        var e = window.name || "_parent", s = {_top: window.top, _self: window, _parent: window.parent};
        return function (a, o) {
            if (t._$isString(a)) {
                a = s[a] || window.frames[a] || (i._$get(a) || r).contentWindow;
                if (!a)return
            }
            var l = t._$fetch({origin: "*", source: e}, o);
            n.__postMessage(a, l)
        }
    }();
    if (!0)e.copy(e.P("nej.j"), s);
    return s
}, 132, 28, 3, 339);
I$(305, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u, f = {};
    o._$$ProxyFrame = i._$klass();
    u = o._$$ProxyFrame._$extend(e._$$ProxyAbstract);
    u.__init = function () {
        var e = "NEJ-AJAX-DATA:", t = !1;
        var i = function (t) {
            var i = t.data;
            if (0 == i.indexOf(e)) {
                i = JSON.parse(i.replace(e, ""));
                var n = f[i.key];
                if (n) {
                    delete f[i.key];
                    i.result = decodeURIComponent(i.result || "");
                    n.__onLoadRequest(i)
                }
            }
        };
        var s = function () {
            if (!t) {
                t = !0;
                n._$addEvent(window, "message", i)
            }
        };
        return function () {
            this.__super();
            s()
        }
    }();
    u.__doSendRequest = function (e) {
        var i = e.request, o = s._$getFrameProxy(i.url), l = f[o];
        if (!t._$isArray(l))if (l) {
            this.__rkey = t._$uniqueID();
            f[this.__rkey] = this;
            var c = t._$fetch({url: "", data: null, timeout: 0, method: "GET"}, i);
            c.key = this.__rkey;
            c.headers = e.headers;
            a._$postMessage(f[o], {data: c})
        } else {
            f[o] = [this.__doSendRequest._$bind(this, e)];
            r._$createXFrame({
                src: o, visible: !1, onload: function (e) {
                    var i = f[o];
                    f[o] = n._$getElement(e).contentWindow;
                    t._$reverseEach(i, function (e) {
                        try {
                            e()
                        } catch (t) {
                        }
                    })
                }
            })
        } else l.push(this.__doSendRequest._$bind(this, e))
    };
    u._$abort = function () {
        delete f[this.__rkey];
        this.__onLoadRequest({status: 0})
    };
    return o
}, 302, 28, 2, 5, 158, 3, 327);
I$(306, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    var f, _ = {}, h = "NEJ-UPLOAD-RESULT:";
    l._$$ProxyUpload = t._$klass();
    f = l._$$ProxyUpload._$extend(e._$$ProxyAbstract);
    f.__init = function () {
        var e = !1;
        var t = function (e) {
            var t = e.data;
            if (0 == t.indexOf(h)) {
                t = JSON.parse(t.replace(h, ""));
                var i = _[t.key];
                if (i) {
                    delete _[t.key];
                    i.__onLoadRequest(decodeURIComponent(t.result))
                }
            }
        };
        var i = function () {
            if (!e) {
                e = !0;
                n._$addEvent(window, "message", t)
            }
        };
        return function () {
            this.__super();
            i()
        }
    }();
    f.__destroy = function () {
        this.__super();
        s._$remove(this.__frame);
        delete this.__frame;
        window.clearTimeout(this.__timer);
        delete this.__timer
    };
    f.__onLoadRequest = function (e) {
        var t;
        try {
            t = JSON.parse(e);
            this._$dispatchEvent("onload", t)
        } catch (i) {
            this._$dispatchEvent("onerror", {code: r._$CODE_ERREVAL, message: e})
        }
    };
    f.__doSendRequest = function () {
        var e = function () {
            var e, t;
            try {
                var e = this.__frame.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim();
                if (t.indexOf(h) >= 0 || e.innerHTML.indexOf(h) >= 0)return
            } catch (i) {
                return
            }
            this.__onLoadRequest(t)
        };
        var t = function (e, i, n) {
            a._$request(e, {
                type: "json", method: "POST", cookie: n, mode: parseInt(i) || 0, onload: function (s) {
                    if (this.__timer) {
                        this._$dispatchEvent("onuploading", s);
                        this.__timer = window.setTimeout(t._$bind(this, e, i, n), 1e3)
                    }
                }._$bind(this), onerror: function (s) {
                    if (this.__timer)this.__timer = window.setTimeout(t._$bind(this, e, i, n), 1e3)
                }._$bind(this)
            })
        };
        return function (a) {
            var o = a.request, l = a.headers, d = o.data, u = i._$uniqueID();
            _[u] = this;
            d.target = u;
            d.method = "POST";
            d.enctype = r._$HEAD_CT_FILE;
            d.encoding = r._$HEAD_CT_FILE;
            var f = d.action || "", h = f.indexOf("?") <= 0 ? "?" : "&";
            d.action = f + h + "_proxy_=form";
            this.__frame = s._$createXFrame({
                name: u, onload: function (i) {
                    var s = n._$getElement(i);
                    n._$addEvent(s, "load", e._$bind(this));
                    d.submit();
                    var r = (d.nej_query || c).value;
                    if (r) {
                        var a = (d.nej_mode || c).value, o = "true" === (d.nej_cookie || c).value;
                        this.__timer = window.setTimeout(t._$bind(this, r, a, o), 100)
                    }
                }._$bind(this)
            })
        }
    }();
    f._$abort = function () {
        this._$dispatchEvent("onerror", {code: r._$CODE_ERRABRT, message: "客户端终止文件上传"})
    };
    return l
}, 302, 2, 28, 5, 3, 135, 150, 327);
I$(307, function (e, t, i, n, s, r, a, o) {
    s.__getProxyByMode = function (s, r, a) {
        var o = r ? {2: n._$$ProxyUpload} : {2: i._$$ProxyFrame, 3: t._$$ProxyFlash};
        return (o[s] || e._$$ProxyXHR)._$allocate(a)
    };
    return s
}, 258, 304, 305, 306);
I$(259, function (e, t, i, n, s, r) {
    return t
}, 249, 307);
I$(150, function (e, t, i, n, s, r, a, o, l, c) {
    var d = {}, u = l;
    a._$abort = function (e) {
        var t = d[e];
        if (t)t.req._$abort()
    };
    a._$filter = function (e) {
        u = e || l
    };
    a._$request = function () {
        var e = (location.protocol + "//" + location.host).toLowerCase();
        var n = function (t) {
            var n = i._$url2origin(t);
            return !!n && n != e
        };
        var a = function (e) {
            return (e || o)[t._$HEAD_CT] == t._$HEAD_CT_FILE
        };
        var c = function (e) {
            var t = a(e.headers);
            if (!n(e.url) && !t)return s._$$ProxyXHR._$allocate(e); else return r.__getProxyByMode(e.mode, t, e)
        };
        var f = function (e, t) {
            var i = {data: t};
            var n = e.result.headers;
            if (n)i.headers = e.req._$header(n);
            return i
        };
        var _ = function (e) {
            var t = d[e];
            if (t) {
                if (t.req)t.req._$recycle();
                delete d[e]
            }
        };
        var h = function (e, t) {
            var i = d[e];
            if (i) {
                var n = arguments[2];
                if ("onload" == t && i.result)n = f(i, n);
                _(e);
                try {
                    var s = {type: t, result: n};
                    u(s);
                    if (!s.stopped)(i[t] || l)(s.result)
                } catch (r) {
                    if (!1)throw r;
                    console.error(r.message);
                    console.error(r)
                }
            }
        };
        var p = function (e, t) {
            h(e, "onload", t)
        };
        var m = function (e, t) {
            h(e, "onerror", t)
        };
        return function (e, t) {
            t = t || {};
            var n = i._$uniqueID(), s = {result: t.result, onload: t.onload || l, onerror: t.onerror || l};
            d[n] = s;
            t.onload = p._$bind(null, n);
            t.onerror = m._$bind(null, n);
            if (t.query) {
                var r = e.indexOf("?") < 0 ? "?" : "&", a = t.query;
                if (i._$isObject(a))a = i._$object2query(a);
                if (a)e += r + a
            }
            t.url = e;
            s.req = c(t);
            s.req._$send(t.data);
            return n
        }
    }();
    a._$upload = function (e, s) {
        e = n._$get(e);
        if (!e)return "";
        var r = i._$fetch({
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        }, s);
        r.data = e;
        r.method = "POST";
        r.timeout = 0;
        r.headers[t._$HEAD_CT] = t._$HEAD_CT_FILE;
        return a._$request(e.action, r)
    };
    if (!0)e.copy(e.P("nej.j"), a);
    return a
}, 132, 135, 28, 3, 258, 259);
I$(243, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$CustomEvent = t._$klass();
    d = a._$$CustomEvent._$extend(r._$$EventTarget);
    d.__init = function () {
        this.__cache = {};
        this.__super()
    };
    d.__reset = function (e) {
        this.__super(e);
        this.__element = i._$get(e.element) || window;
        this.__doEventInit(e.event);
        this.__doEventAPIEnhance();
        this._$dispatchEvent("oninit")
    };
    d.__destroy = function () {
        var e = function (e, t, i) {
            if (!s._$isArray(e))s._$safeDelete(this.__element, t);
            delete i[t]
        };
        return function () {
            this.__super();
            s._$loop(this.__cache, e, this);
            delete this.__element
        }
    }();
    d.__isDelegate = function (e, t) {
        e = i._$get(e);
        return !(e !== this.__element || t && !this.__cache["on" + t])
    };
    d.__doEventInit = function (e) {
        if (!s._$isString(e)) {
            if (s._$isArray(e))s._$forEach(e, this.__doEventInit, this)
        } else {
            var t = "on" + e;
            if (!this.__cache[t])this.__cache[t] = this.__doEventDispatch._$bind(this, e);
            this.__doEventBind(e)
        }
    };
    d.__doEventBind = function (e) {
        var t = "on" + e, i = this.__element[t], n = this.__cache[t];
        if (i != n) {
            this.__doEventDelete(e);
            if (i && i != l)this.__doEventAdd(e, i);
            this.__element[t] = n
        }
    };
    d.__doEventAdd = function (e, t, i) {
        var n = this.__cache[e];
        if (!n) {
            n = [];
            this.__cache[e] = n
        }
        if (s._$isFunction(t))!i ? n.push(t) : n.unshift(t)
    };
    d.__doEventDelete = function (e, t) {
        var i = this.__cache[e];
        if (i && i.length)if (t)s._$reverseEach(i, function (e, i, n) {
            if (t === e) {
                n.splice(i, 1);
                return !0
            }
        }); else delete this.__cache[e]
    };
    d.__doEventDispatch = function (e, t) {
        t = t || {noargs: !0};
        if (t == o)t = {};
        t.type = e;
        this._$dispatchEvent("ondispatch", t);
        if (!t.stopped)s._$forEach(this.__cache[e], function (e) {
            if (!1)e(t); else try {
                e(t)
            } catch (i) {
                console.error(i.message);
                console.error(i.stack)
            }
        })
    };
    d.__doEventAPIEnhance = function () {
        var t = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                this.__doEventBind(i);
                this.__doEventAdd(i, t[2], t[3]);
                this._$dispatchEvent("oneventadd", {type: i, listener: t[2]})
            }
        };
        var i = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                this.__doEventDelete(i, t[2])
            }
        };
        var r = function (e) {
            var t = e.args, i = (t[1] || "").toLowerCase();
            if (this.__isDelegate(t[0])) {
                if (i) {
                    this.__doEventDelete(i);
                    return
                }
                s._$loop(this.__cache, function (e, t) {
                    if (s._$isArray(e))this.__doEventDelete(t)
                }, this)
            }
        };
        var a = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                t[0]["on" + i].apply(t[0], t.slice(2))
            }
        };
        return function () {
            if (!this.__enhanced) {
                this.__enhanced = !0;
                n._$addEvent = n._$addEvent._$aop(t._$bind(this));
                n._$delEvent = n._$delEvent._$aop(i._$bind(this));
                n._$clearEvent = n._$clearEvent._$aop(r._$bind(this));
                n._$dispatchEvent = n._$dispatchEvent._$aop(a._$bind(this));
                if (!0)e.copy(e.P("nej.v"), n)
            }
        }
    }();
    if (!0)e.copy(e.P("nej.ut"), a);
    return a
}, 132, 2, 3, 5, 28, 4);
I$(130, function (e, t, i, n, s, r, a, o, l, c) {
    a._$request = function () {
        var e = {}, r = /\{(.*?)\}/gi, a = /^get|delete|head$/i, d = /json/i, u = /xml/i;
        var f = function (t) {
            var i = e[t];
            if (i) {
                delete i.s;
                delete i.f;
                delete e[t]
            }
        };
        var _ = function (t, i) {
            var n = e[t];
            if (n) {
                var s = n[i], r = c.slice.call(arguments, 2);
                try {
                    (s || l).apply(null, r)
                } catch (a) {
                    if (!1)throw a;
                    console.error(a.message);
                    console.error(a)
                }
                f(t)
            }
        };
        var h = function (e, t) {
            _(e, "s", t)
        };
        var p = function (e, i) {
            i = i || {};
            if (i.code != n._$CODE_ERRSERV || 204 != i.data) {
                t._$dispatchEvent(window, "resterror", i);
                if (!i.stopped)_(e, "f", i); else f(e)
            } else h(e, null)
        };
        var m = function (e, t, i) {
            var n = e[t] || e[t.toLowerCase()];
            if (!n) {
                n = i;
                e[t] = n
            }
            return n
        };
        var v = function (e, t, n) {
            if (i._$isArray(e))n[t] = JSON.stringify(e)
        };
        return function (t, n) {
            n = i._$merge({}, n);
            var c = {}, f = n.param || o;
            t = t.replace(r, function (e, t) {
                var i = f[t];
                if (null != i)c[t] = !0;
                return encodeURIComponent(i || "") || e
            });
            var _ = n.data || {};
            i._$loop(f, function (e, t) {
                if (!c[t])_[t] = e
            });
            var g = "text", $ = n.headers || {}, y = m($, "Accept", "application/json"), b = m($, "Content-Type", "application/json");
            if (d.test(y))g = "json"; else if (u.test(y))g = "xml";
            var x = i._$uniqueID();
            e[x] = {s: n.onload || l, f: n.onerror || l};
            n.method = n.method || "GET";
            if (a.test(n.method.trim())) {
                i._$forIn(_, v);
                n.query = _;
                _ = null
            } else if (d.test(b))_ = JSON.stringify(_);
            n.type = g;
            n.data = _;
            n.headers = $;
            n.onload = h._$bind(null, x);
            n.onerror = p._$bind(null, x);
            s._$request(t, n)
        }
    }();
    r._$$CustomEvent._$allocate({element: window, event: "resterror"});
    if (!0)e.P("nej.j")._$requestByREST = a._$request;
    return a
}, 132, 5, 28, 135, 150, 243);
window.Modernizr = function (e, t, i) {
    function n(e) {
        v.cssText = e
    }

    function s(e, t) {
        return n(b.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function o(e, t) {
        for (var n in e) {
            var s = e[n];
            if (!a(s, "-") && v[s] !== i)return "pfx" == t ? s : !0
        }
        return !1
    }

    function l(e, t, n) {
        for (var s in e) {
            var a = t[e[s]];
            if (a !== i) {
                if (n === !1)return e[s];
                if (r(a, "function"))return a.bind(n || t); else return a
            }
        }
        return !1
    }

    function c(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + w.join(n + " ") + n).split(" ");
        if (r(t, "string") || r(t, "undefined"))return o(s, t); else {
            s = (e + " " + T.join(n + " ") + n).split(" ");
            return l(s, t, i)
        }
    }

    function d() {
        f["input"] = function (i) {
            for (var n = 0, s = i.length; n < s; n++)k[i[n]] = !!(i[n] in g);
            if (k.list)k.list = !(!t.createElement("datalist") || !e.HTMLDataListElement);
            return k
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        f["inputtypes"] = function (e) {
            for (var n = 0, s, r, a, o = e.length; n < o; n++) {
                g.setAttribute("type", r = e[n]);
                s = "text" !== g.type;
                if (s) {
                    g.value = $;
                    g.style.cssText = "position:absolute;visibility:hidden;";
                    if (/^range$/.test(r) && g.style.WebkitAppearance !== i) {
                        h.appendChild(g);
                        a = t.defaultView;
                        s = a.getComputedStyle && "textfield" !== a.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight;
                        h.removeChild(g)
                    } else if (/^(search|tel)$/.test(r)); else if (/^(url|email)$/.test(r))s = g.checkValidity && g.checkValidity() === !1; else s = g.value != $
                }
                S[e[n]] = !!s
            }
            return S
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var u = "2.8.3", f = {}, _ = !0, h = t.documentElement, p = "modernizr", m = t.createElement(p), v = m.style, g = t.createElement("input"), $ = ":)", y = {}.toString, b = " -webkit- -moz- -o- -ms- ".split(" "), x = "Webkit Moz O ms", w = x.split(" "), T = x.toLowerCase().split(" "), I = {svg: "http://www.w3.org/2000/svg"}, C = {}, S = {}, k = {}, E = [], N = E.slice, L, M = function (e, i, n, s) {
        var r, a, o, l, c = t.createElement("div"), d = t.body, u = d || t.createElement("body");
        if (parseInt(n, 10))for (; n--;) {
            o = t.createElement("div");
            o.id = s ? s[n] : p + (n + 1);
            c.appendChild(o)
        }
        r = ["&#173;", '<style id="s', p, '">', e, "</style>"].join("");
        c.id = p;
        (d ? c : u).innerHTML += r;
        u.appendChild(c);
        if (!d) {
            u.style.background = "";
            u.style.overflow = "hidden";
            l = h.style.overflow;
            h.style.overflow = "hidden";
            h.appendChild(u)
        }
        a = i(c, e);
        if (!d) {
            u.parentNode.removeChild(u);
            h.style.overflow = l
        } else c.parentNode.removeChild(c);
        return !!a
    }, A = function (t) {
        var i = e.matchMedia || e.msMatchMedia;
        if (i)return i(t) && i(t).matches || !1;
        var n;
        M("@media " + t + " { #" + p + " { position: absolute; } }", function (t) {
            n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"]
        });
        return n
    }, P = function () {
        function e(e, s) {
            s = s || t.createElement(n[e] || "div");
            e = "on" + e;
            var a = e in s;
            if (!a) {
                if (!s.setAttribute)s = t.createElement("div");
                if (s.setAttribute && s.removeAttribute) {
                    s.setAttribute(e, "");
                    a = r(s[e], "function");
                    if (!r(s[e], "undefined"))s[e] = i;
                    s.removeAttribute(e)
                }
            }
            s = null;
            return a
        }

        var n = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), D = {}.hasOwnProperty, O;
    if (!r(D, "undefined") && !r(D.call, "undefined"))O = function (e, t) {
        return D.call(e, t)
    }; else O = function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    };
    if (!Function.prototype.bind)Function.prototype.bind = function R(e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var i = N.call(arguments, 1), n = function () {
            if (this instanceof n) {
                var s = function () {
                };
                s.prototype = t.prototype;
                var r = new s;
                var a = t.apply(r, i.concat(N.call(arguments)));
                if (Object(a) === a)return a; else return r
            } else return t.apply(e, i.concat(N.call(arguments)))
        };
        return n
    };
    C["flexbox"] = function () {
        return c("flexWrap")
    };
    C["flexboxlegacy"] = function () {
        return c("boxDirection")
    };
    C["canvas"] = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    };
    C["canvastext"] = function () {
        return !(!f["canvas"] || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    };
    C["webgl"] = function () {
        return !!e.WebGLRenderingContext
    };
    C["touch"] = function () {
        var i;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch)i = !0; else M(["@media (", b.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            i = 9 === e.offsetTop
        });
        return i
    };
    C["geolocation"] = function () {
        return "geolocation" in navigator
    };
    C["postmessage"] = function () {
        return !!e.postMessage
    };
    C["websqldatabase"] = function () {
        return !!e.openDatabase
    };
    C["indexedDB"] = function () {
        return !!c("indexedDB", e)
    };
    C["hashchange"] = function () {
        return P("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
    };
    C["history"] = function () {
        return !(!e.history || !history.pushState)
    };
    C["draganddrop"] = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    };
    C["websockets"] = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    };
    C["rgba"] = function () {
        n("background-color:rgba(150,255,150,.5)");
        return a(v.backgroundColor, "rgba")
    };
    C["hsla"] = function () {
        n("background-color:hsla(120,40%,100%,.5)");
        return a(v.backgroundColor, "rgba") || a(v.backgroundColor, "hsla")
    };
    C["multiplebgs"] = function () {
        n("background:url(https://),url(https://),red url(https://)");
        return /(url\s*\(.*?){3}/.test(v.background)
    };
    C["backgroundsize"] = function () {
        return c("backgroundSize")
    };
    C["borderimage"] = function () {
        return c("borderImage")
    };
    C["borderradius"] = function () {
        return c("borderRadius")
    };
    C["boxshadow"] = function () {
        return c("boxShadow")
    };
    C["textshadow"] = function () {
        return "" === t.createElement("div").style.textShadow
    };
    C["opacity"] = function () {
        s("opacity:.55");
        return /^0.55$/.test(v.opacity)
    };
    C["cssanimations"] = function () {
        return c("animationName")
    };
    C["csscolumns"] = function () {
        return c("columnCount")
    };
    C["cssgradients"] = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "linear-gradient(left top,#9f9, white);";
        n((e + "-webkit- ".split(" ").join(t + e) + b.join(i + e)).slice(0, -e.length));
        return a(v.backgroundImage, "gradient")
    };
    C["cssreflections"] = function () {
        return c("boxReflect")
    };
    C["csstransforms"] = function () {
        return !!c("transform")
    };
    C["csstransforms3d"] = function () {
        var e = !!c("perspective");
        if (e && "webkitPerspective" in h.style)M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, i) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        });
        return e
    };
    C["csstransitions"] = function () {
        return c("transition")
    };
    C["fontface"] = function () {
        var e;
        M('@font-face {font-family:"font";src:url("https://")}', function (i, n) {
            var s = t.getElementById("smodernizr"), r = s.sheet || s.styleSheet, a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0])
        });
        return e
    };
    C["generatedcontent"] = function () {
        var e;
        M(["#", p, "{font:0/0 a}#", p, ':after{content:"', $, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        });
        return e
    };
    C["video"] = function () {
        var e = t.createElement("video"), i = !1;
        try {
            if (i = !!e.canPlayType) {
                i = new Boolean(i);
                i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "");
                i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            }
        } catch (n) {
        }
        return i
    };
    C["audio"] = function () {
        var e = t.createElement("audio"), i = !1;
        try {
            if (i = !!e.canPlayType) {
                i = new Boolean(i);
                i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
                i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "");
                i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
                i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
            }
        } catch (n) {
        }
        return i
    };
    C["localstorage"] = function () {
        try {
            localStorage.setItem(p, p);
            localStorage.removeItem(p);
            return !0
        } catch (e) {
            return !1
        }
    };
    C["sessionstorage"] = function () {
        try {
            sessionStorage.setItem(p, p);
            sessionStorage.removeItem(p);
            return !0
        } catch (e) {
            return !1
        }
    };
    C["webworkers"] = function () {
        return !!e.Worker
    };
    C["applicationcache"] = function () {
        return !!e.applicationCache
    };
    C["svg"] = function () {
        return !!t.createElementNS && !!t.createElementNS(I.svg, "svg").createSVGRect
    };
    C["inlinesvg"] = function () {
        var e = t.createElement("div");
        e.innerHTML = "<svg/>";
        return (e.firstChild && e.firstChild.namespaceURI) == I.svg
    };
    C["smil"] = function () {
        return !!t.createElementNS && /SVGAnimate/.test(y.call(t.createElementNS(I.svg, "animate")))
    };
    C["svgclippaths"] = function () {
        return !!t.createElementNS && /SVGClipPath/.test(y.call(t.createElementNS(I.svg, "clipPath")))
    };
    for (var j in C)if (O(C, j)) {
        L = j.toLowerCase();
        f[L] = C[j]();
        E.push((f[L] ? "" : "no-") + L)
    }
    f.input || d();
    f.addTest = function (e, t) {
        if ("object" == typeof e) {
            for (var n in e)if (O(e, n))f.addTest(n, e[n])
        } else {
            e = e.toLowerCase();
            if (f[e] !== i)return f;
            t = "function" == typeof t ? t() : t;
            if ("undefined" != typeof _ && _)h.className += " " + (t ? "" : "no-") + e;
            f[e] = t
        }
        return f
    };
    n("");
    m = g = null;
    !function (e, t) {
        function i(e, t) {
            var i = e.createElement("p"), n = e.getElementsByTagName("head")[0] || e.documentElement;
            i.innerHTML = "x<style>" + t + "</style>";
            return n.insertBefore(i.lastChild, n.firstChild)
        }

        function n() {
            var e = g.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function s(e) {
            var t = m[e[h]];
            if (!t) {
                t = {};
                p++;
                e[h] = p;
                m[p] = t
            }
            return t
        }

        function r(e, i, n) {
            if (!i)i = t;
            if (v)return i.createElement(e);
            if (!n)n = s(i);
            var r;
            if (n.cache[e])r = n.cache[e].cloneNode(); else if (f.test(e))r = (n.cache[e] = n.createElem(e)).cloneNode(); else r = n.createElem(e);
            return r.canHaveChildren && !u.test(e) && !r.tagUrn ? n.frag.appendChild(r) : r
        }

        function a(e, i) {
            if (!e)e = t;
            if (v)return e.createDocumentFragment();
            i = i || s(e);
            var r = i.frag.cloneNode(), a = 0, o = n(), l = o.length;
            for (; a < l; a++)r.createElement(o[a]);
            return r
        }

        function o(e, t) {
            if (!t.cache) {
                t.cache = {};
                t.createElem = e.createElement;
                t.createFrag = e.createDocumentFragment;
                t.frag = t.createFrag()
            }
            e.createElement = function (i) {
                if (!g.shivMethods)return t.createElem(i); else return r(i, e, t)
            };
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function (e) {
                    t.createElem(e);
                    t.frag.createElement(e);
                    return 'c("' + e + '")'
                }) + ");return n}")(g, t.frag)
        }

        function l(e) {
            if (!e)e = t;
            var n = s(e);
            if (g.shivCSS && !_ && !n.hasCSS)n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}");
            if (!v)o(e, n);
            return e
        }

        var c = "3.7.0";
        var d = e.html5 || {};
        var u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var _;
        var h = "_html5shiv";
        var p = 0;
        var m = {};
        var v;
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>";
                _ = "hidden" in e;
                v = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
            } catch (i) {
                _ = !0;
                v = !0
            }
        }();
        var g = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: v,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: a
        };
        e.html5 = g;
        l(t)
    }(this, t);
    f._version = u;
    f._prefixes = b;
    f._domPrefixes = T;
    f._cssomPrefixes = w;
    f.mq = A;
    f.hasEvent = P;
    f.testProp = function (e) {
        return o([e])
    };
    f.testAllProps = c;
    f.testStyles = M;
    f.prefixed = function (e, t, i) {
        if (!t)return c(e, "pfx"); else return c(e, t, i)
    };
    h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (_ ? " js " + E.join(" ") : "");
    return f
}(this, this.document);
I$(1, function (e, t, i, n, s, r, a, o, l, c) {
    var d = {}, u = function () {
    };
    d.fixfixed = function (e) {
        if (Modernizr.touch)n(e)._$children("input, textarea", !0)._$on({
            focus: function (e) {
                n("body")._$addClassName("fixfixed")
            }, blur: function (e) {
                n("body")._$delClassName("fixfixed")
            }
        })
    };
    d.findParent = function (e, t, i) {
        if ("undefined" == typeof i)i = !0;
        if ("string" == typeof t)t = function (e, t) {
            return nes.matches(e, t)
        }._$bind2(this, t);
        var n = e.parentNode, s = [];
        for (; n;) {
            if (t(e)) {
                s.push(n);
                if (i)break
            }
            n = n.parentNode
        }
        return i ? s[0] : s
    };
    d.typeOf = function (e) {
        return null == e ? String(e) : {}.toString.call(e).slice(8, -1).toLowerCase()
    };
    d.extend = function (e, t, i) {
        for (var n in t)if (void 0 == e[n] || i)e[n] = t[n];
        return e
    };
    d.string2Obj = function (e, t, i) {
        var n = e.split(t), r = {}, i = i || ":";
        s._$forEach(n, function (e) {
            var t = e.split(i);
            if (t.length > 1)r[t[0]] = t[1]
        });
        return r
    };
    d.random = function f(e, t) {
        return Math.floor(e + Math.random() * (t - e + 1))
    };
    d.merge = function (e, t) {
        var i = d.typeOf(e), n = d.typeOf(t), s;
        if (i !== n)return t;
        switch (n) {
            case"object":
                for (var r in t)if (t.hasOwnProperty(r))e[r] = d.merge(e[r], t[r]);
                break;
            case"array":
                for (var r = 0, s = t.length; r < s; r++)e[r] = d.merge(e[r], t[r]);
                e.length = t.length;
                break;
            default:
                return t
        }
        return e
    };
    d.mergeList = function (e, t, i) {
        i = i || "id";
        var n = e.length;
        for (; n--;)for (var s = 0, r = t.length; s < r; s++)if (t[s][i] && t[s][i] === e[n][i]) {
            e.splice(n, 1, d.merge(t[s], e[n]));
            break
        }
    };
    d.findInList = function (e, t, i) {
        i = i || "id";
        var n = t.length;
        for (; n--;)if (t[n][i] === e)return n;
        return -1
    };
    d.getDoc = function () {
        return !document.compatMode || "CSS1Compat" == document.compatMode ? document.documentElement : document.body
    };
    d.getScroll = function () {
        var e = d.getDoc();
        return {x: window.pageXOffset || e.scrollLeft, y: window.pageYOffset || e.scrollTop}
    };
    d.smoothTo = function (e, i, n) {
        function s() {
            f += .05;
            if (f > 1)f = 1;
            window.scrollTo(c.x * f + a.x, a.y + f * c.y);
            if (f < 1)_ = setTimeout(s, u); else r()
        }

        function r() {
            clearTimeout(_);
            document.onmousewheel = null
        }

        if ("string" == typeof e)e = nes.one(e);
        if (e) {
            var a = {
                x: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft),
                y: Math.max(document.body.scrollTop, document.documentElement.scrollTop)
            };
            var o = t._$offset(e);
            var l = "undefined" === i ? 40 : i;
            o.y -= l;
            var c = {x: o.x - a.x, y: o.y - a.y};
            var d = 1, n = n || 500, u = n / 60;
            var f = .01;
            var _;
            document.onmousewheel = r;
            _ = setTimeout(s, u);
            return this
        }
    };
    d.getRemainTime = function (e) {
        var t = 1e3, i = 60 * t, n = 60 * i, s = 24 * n;
        var r = Math.floor(e / s);
        var a = Math.floor(e % s / n);
        var o = Math.floor(e % s % n / i);
        var l = Math.floor(e % s % n % i / t);
        return {days: r, hours: a, minutes: o, seconds: l}
    };
    d.setDate = function (e) {
        var t = new Date;
        var i = e.split("-");
        t.setFullYear(parseInt(i[0]), parseInt(i[1]) - 1, parseInt(i[2]));
        t.setHours(0);
        t.setMinutes(0);
        t.setSeconds(0);
        return t
    };
    d.isLogin = function () {
        return "" != a._$cookie("S_INFO") || "" != a._$cookie("S_OINFO")
    };
    d.trim = function (e) {
        return e.replace(/(^\s*)|(\s*$)/g, "");
    };
    d.getFullUserName = function () {
        var e = "";
        if ("" != a._$cookie("S_INFO"))e = "P_INFO"; else if ("" != a._$cookie("S_OINFO"))e = "P_OINFO"; else return "";
        var t = decodeURIComponent(a._$cookie(e)).replace(/(^\"*)|(\"*$)/g, "") || "", i = t.indexOf("|");
        if (i > 0)t = t.substring(0, i) + "";
        var n = a._$cookie("userNickName");
        return n || t
    };
    d._$grepArray = function (e, t) {
        var i = [];
        s._$forEach(e, function (e, n) {
            if (s._$indexOf(t, e) === -1)i.push(e)
        });
        return i
    };
    d._$throttle = function (e, t) {
        clearTimeout(e.tId);
        e.tId = setTimeout(function () {
            e.call(t)
        }, 100)
    };
    d._$scrollTopTo = function (e, i) {
        var n = document.documentElement, s = document.body, r = t._$getPageBox().scrollTop;
        if (r == e.scrollTop)return !1;
        o._$$AnimEaseOut._$allocate({
            from: {offset: r},
            to: {offset: e.scrollTop},
            duration: i || 300,
            onupdate: function (e) {
                window.scrollTo(0, Math.ceil(e.offset))
            },
            onstop: function () {
                this._$recycle()
            }
        })._$play()
    };
    d._$unescape = function () {
        var e = {
            r: /\&(?:lt|gt|amp|#39|quot|#34)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n",
            "&#34;": '"'
        };
        return function (t) {
            return s._$encode(e, t)
        }
    }();
    d._$openKefuWin = function () {
        var i = t._$getPageBox();
        var n = 500, s = 520, r = Math.floor((i.clientHeight - s) / 2), a = Math.floor((i.clientWidth - n) / 2);
        window.open(e.IM_DOMAIN_URL + d.getFullUserName(), "_blank", "height=" + s + ",width=" + n + ",top=" + r + ", left=" + a + ", scrollbars=no,location=no")
    };
    d.tpopup = function () {
        var e = t._$html2node("<div class='u-tpopup fadeInY animated'><div class='cnt'></div><i></i></div>");
        var n = i._$one("i", e);
        var s = i._$one(".cnt", e);
        var r = !1;
        var a = 30;
        if (i._$one("#topbar-box"))i._$one("#topbar-box").appendChild(e);
        var o = {
            show: function (i, r) {
                r = d.extend(r || {}, {index: 0, duration: -1});
                if (i && 1 === i.nodeType)s.appendChild(i); else s.innerHTML = i;
                t._$setStyle(n, "right", "" + (r.index * a + 16) + "px");
                t._$addClassName(e, "fadeInY z-active");
                t._$delClassName(e, "fadeOutY");
                if (r.duration !== -1)return setTimeout(function () {
                    o.hide()
                }, r.duration)
            }, hide: function () {
                t._$addClassName(e, "fadeOutY");
                setTimeout(function () {
                    t._$delClassName(e, "fadeInY z-active")
                }, 400)
            }
        };
        return o
    }();
    d.showTopMessage = function () {
    };
    d.transform = function () {
        var e = "transform WebkitTransform MozTransform OTransform msTransform".split(" "), t = document.createElement("div"), i = function (e) {
            var i = e.length;
            for (; i--;)if ("undefined" != typeof t.style[e[i]])return e[i]
        }, n = i(e);
        return function (e, t) {
            e.style[n] = t
        }
    }();
    d.throttle = function (e, t) {
        var t = t || 100;
        var i, n, s;
        var r = null;
        var a = 0;
        var o = function () {
            a = +new Date;
            r = null;
            s = e.apply(i, n);
            i = n = null
        };
        return function () {
            var l = +new Date;
            var c = t - (l - a);
            i = this;
            n = arguments;
            if (c <= 0 || c > t) {
                clearTimeout(r);
                r = null;
                a = l;
                s = e.apply(i, n);
                i = n = null
            } else if (!r)r = setTimeout(o, c);
            return s
        }
    };
    d.$removeTipbar = function (e) {
    };
    d._$title = function () {
        var e = t._$get("title") || document.createElement("div");
        var i = e.innerText;
        return function (t) {
            if (!t) {
                if (e)e.innerText = i
            } else if (e)e.innerText = t
        }
    }();
    d.delay = function () {
        var e = {};
        return function (t, i, n) {
            if (e[t]) {
                window.clearTimeout(e[t]);
                delete e[t]
            }
            return e[t] = window.setTimeout(function () {
                i();
                delete e[t]
            }, n)
        }
    }();
    d._$formSubmit = function (e, t, n) {
        var s = "js-formSubmit", r = i._$one(s);
        if (!r) {
            r = document.createElement("form");
            r.id = s;
            r.method = "POST";
            r.target = n || "_self";
            r.style.display = "none";
            document.body.appendChild(r)
        }
        r.innerHTML = "";
        if ("object" == typeof t) {
            var a;
            for (key in t) {
                a = document.createElement("input");
                a.type = "hidden";
                a.name = key;
                a.value = t[key];
                r.appendChild(a)
            }
        }
        r.action = e;
        r.submit()
    };
    d.isWeiXin = function () {
        var e = navigator.userAgent.toLowerCase();
        if ("micromessenger" == e.match(/MicroMessenger/i))return !0; else return !1
    };
    d.platform = function () {
        var e = navigator.userAgent;
        var t = !!e.match(/(iPhone|iPod|iPad)/i);
        var i = !!e.match(/Android/i);
        var n = !!e.match(/Windows Phone/i);
        var s = !t && !i && !n;
        var r = {IOS: t, AOS: i, WinPhone: n, PC: s};
        return r
    };
    d.isEmpty = function (e) {
        return Array.isArray(e) && 0 === e.length || Object.prototype.isPrototypeOf(e) && 0 === Object.keys(e).length
    };
    d.isSupportWeiXinPay = function () {
        var e = navigator.userAgent.match(/MicroMessenger\/([\d\\.]+)/i);
        if (!e)return !1; else if (e[1] < "5.0")return !1;
        return !0
    };
    d.payOfWeiXin = function (e) {
        var t = {
            appId: e.appId,
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            "package": e.packageStr,
            signType: e.signType,
            paySign: e.paySign
        };
        WeixinJSBridge.invoke("getBrandWCPayRequest", t, function (t) {
            if ("get_brand_wcpay_request:ok" == t.err_msg)window.location.href = "/purchase/paysucc?tradeSerialId=" + e.tradeSerialId + "&type=3"; else {
                try {
                    if (location.href.indexOf("purchase") > 0)history.replaceState({}, "我的订单页", "/myorder/index/list/#state=1"); else history.replaceState({}, "个人中心", "/profile/index")
                } catch (i) {
                }
                var n, s;
                if (void 0 == e.orderId || !e.orderId)n = -1; else n = e.orderId;
                if (void 0 == e.failType || !e.failType)s = 3; else s = e.failType;
                window.location.href = "/purchase/payfail?orderId=" + n + "&failType=" + s + "&err_msg=" + t.err_msg
            }
        })
    };
    return d
}, 27, 3, 50, 8, 28, 5, 128, 129, 130, 131);
I$(253, function (e, t, i, n, s, r, a, o, l) {
    s._$$LazyLoading = e._$klass();
    l = s._$$LazyLoading._$extend(n._$$EventTarget);
    l.__reset = function (e) {
        this.__super(e);
        this.__name = e.attr || "";
        this.__parent = t._$get(e.parent);
        this.__doInitDomEvent([[this.__parent || window, "scroll", this.__doCheckScrollPosition._$bind(this)]]);
        this._$refresh()
    };
    l.__destroy = function () {
        delete this.__parent;
        this.__super()
    };
    l.__getScrollViewPort = function () {
        return this.__parent || t._$getPageBox()
    };
    l.__getSettingInfo = function (e) {
        var n = {};
        i._$forEach(this.__name.split(","), function (i) {
            n[i] = t._$dataset(e, i)
        });
        return n
    };
    l.__doCheckScrollPosition = function () {
        var e = {"-1": "onremove", 1: "onappend"};
        return function (t) {
            var n = this.__getResourceList(this.__parent || document);
            var s = this.__getScrollViewPort();
            i._$forEach(n, function (t) {
                var i = {target: t, config: s};
                this._$dispatchEvent("oncheck", i);
                var n = i.value;
                if (null == n)n = this.__doCheckResource(t, s);
                var r = e[n];
                if (r) {
                    var i = {target: t, config: this.__getSettingInfo(t)};
                    this._$dispatchEvent(r, i);
                    if (!i.stopped)if (n == -1)this.__doRemoveResource(t); else this.__doAppendResource(t, i.config)
                }
            }, this)
        }
    }();
    l.__getResourceList = a;
    l.__doCheckResource = a;
    l.__doRemoveResource = a;
    l.__doAppendResource = a;
    l._$refresh = function () {
        this.__doCheckScrollPosition()
    }
}, 2, 3, 28, 4);
I$(137, function (e, t, i, n, s, r, a, o, l) {
    s._$$LazyImage = e._$klass();
    l = s._$$LazyImage._$extend(n._$$LazyLoading);
    l.__reset = function (e) {
        this.__super(e);
        this.__holder = e.holder || t._$BLANK_IMAGE
    };
    l.__getResourceList = function (e) {
        return e.getElementsByTagName("img")
    };
    l.__doCheckResource = function (e, t) {
        var n = t.clientHeight, s = i._$offset(e, t).y - t.scrollTop, r = s + e.offsetHeight, a = this.__getSettingInfo(e), o = !e.src || e.src.indexOf(this.__holder) >= 0 || e.src.indexOf(a.src) < 0;
        if (o && 0 <= r && s <= n)return 1;
        if (!o && (r < 0 || s > n))return -1; else return 0
    };
    l.__doRemoveResource = function (e) {
        e.src = this.__holder
    };
    l.__doAppendResource = function (e, t) {
        e.src = t.src || this.__holder
    }
}, 2, 135, 3, 253);
!function () {
    "use strict";
    function e(t, i, n) {
        function s() {
            n = n || t;
            i = i || "root";
            var e = new Error('Failed to require "' + n + '" from "' + i + '"');
            e.path = n;
            e.parent = i;
            e.require = !0;
            throw e
        }

        var r = e.resolve(t);
        if (null != r) {
            var a = e.modules[r];
            if (!a._resolving && !a.exports) {
                var o = {};
                o.exports = {};
                o.client = o.component = !0;
                a._resolving = !0;
                a.call(this, o.exports, e.relative(r), o);
                delete a._resolving;
                a.exports = o.exports
            }
            return a.exports
        } else s()
    }

    e.modules = {};
    e.aliases = {};
    e.exts = ["", ".js", ".json", "/index.js", "/index.json"];
    e.resolve = function (t) {
        if ("/" === t.charAt(0))t = t.slice(1);
        for (var i = 0; i < 5; i++) {
            var n = t + e.exts[i];
            if (e.modules.hasOwnProperty(n))return n;
            if (e.aliases.hasOwnProperty(n))return e.aliases[n]
        }
    };
    e.normalize = function (e, t) {
        var i = [];
        if ("." != t.charAt(0))return t;
        e = e.split("/");
        t = t.split("/");
        for (var n = 0; n < t.length; ++n)if (".." === t[n])e.pop(); else if ("." != t[n] && "" != t[n])i.push(t[n]);
        return e.concat(i).join("/")
    };
    e.register = function (t, i) {
        e.modules[t] = i
    };
    e.alias = function (t, i) {
        function n() {
            throw new Error('Failed to alias "' + t + '", it does not exist')
        }

        if (e.modules.hasOwnProperty(t))e.aliases[i] = t; else n()
    };
    e.relative = function (t) {
        function i(n) {
            var s = i.resolve(n);
            return e(s, t, n)
        }

        var n = e.normalize(t, "..");
        i.resolve = function (i) {
            var s = i.charAt(0);
            if ("/" === s)return i.slice(1);
            if ("." === s)return e.normalize(n, i);
            var r = t.split("/");
            var a = r.length;
            for (; a-- && "deps" !== r[a];);
            i = r.slice(0, a + 2).join("/") + "/deps/" + i;
            return i
        };
        i.exists = function (t) {
            return e.modules.hasOwnProperty(i.resolve(t))
        };
        return i
    };
    e.register("regularjs/src/Regular.js", function (e, t, i) {
        var n = t("./parser/Lexer.js");
        var s = t("./parser/Parser.js");
        var r = t("./dom.js");
        var a = t("./config.js");
        var o = t("./group.js");
        var l = t("./util");
        var c = t("./helper/extend.js");
        var d = t("./helper/event.js");
        var u = t("./helper/combine.js");
        var f = t("./helper/watcher.js");
        var _ = t("./helper/parse.js");
        var h = "undefined" == typeof document ? {} : document;
        var p = t("./env.js");
        var m = function (e) {
            var t = p.isRunning;
            p.isRunning = !0;
            var i, n;
            e = e || {};
            e.data = e.data || {};
            e.computed = e.computed || {};
            if (this.data)l.extend(e.data, this.data);
            if (this.computed)l.extend(e.computed, this.computed);
            l.extend(this, e, !0);
            if (this.$parent)this.$parent._append(this);
            this._children = [];
            this.$refs = {};
            n = this.template;
            if ("string" == typeof n && n.length < 40 && (i = r.find(n)))n = i.innerHTML;
            if (n && n.nodeType)n = n.innerHTML;
            if ("string" == typeof n)this.template = new s(n).parse();
            this.computed = g(this.computed);
            this.$context = this.$context || this;
            this.$root = this.$root || this;
            if (this.events) {
                this.$on(this.events);
                this.events = null
            }
            this.config && this.config(this.data);
            if (n) {
                this.group = this.$compile(this.template, {namespace: e.namespace});
                u.node(this)
            }
            if (this.$root === this)this.$update();
            this.$ready = !0;
            if (this.$context === this)this.$emit("$init");
            if (this.init)this.init(this.data);
            p.isRunning = t
        };
        var v = t("./walkers.js");
        v.Regular = m;
        l.extend(m, {
            _directives: {__regexp__: []},
            _plugins: {},
            _exprCache: {},
            _running: !1,
            _config: a,
            _protoInheritCache: ["use", "directive"],
            __after__: function (e, t) {
                var i;
                this.__after__ = e.__after__;
                if (t.name)m.component(t.name, this);
                if (i = t.template) {
                    var n, a;
                    if ("string" == typeof i && i.length < 20 && (n = r.find(i))) {
                        i = n.innerHTML;
                        if (a = r.attr(n, "name"))m.component(a, this)
                    }
                    if (i.nodeType)i = i.innerHTML;
                    if ("string" == typeof i)this.prototype.template = new s(i).parse()
                }
                if (t.computed)this.prototype.computed = g(t.computed);
                m._inheritConfig(this, e)
            },
            directive: function (e, t) {
                if ("object" === l.typeOf(e)) {
                    for (var i in e)if (e.hasOwnProperty(i))this.directive(i, e[i]);
                    return this
                }
                var n = l.typeOf(e);
                var s = this._directives, r;
                if (null != t) {
                    if ("function" == typeof t)t = {link: t};
                    if ("string" === n)s[e] = t; else if ("regexp" === n) {
                        t.regexp = e;
                        s.__regexp__.push(t)
                    }
                    return this
                } else if ("string" === n && (r = s[e]))return r; else {
                    var a = s.__regexp__;
                    for (var o = 0, c = a.length; o < c; o++) {
                        r = a[o];
                        var d = r.regexp.test(e);
                        if (d)return r
                    }
                }
            },
            plugin: function (e, t) {
                var i = this._plugins;
                if (null == t)return i[e];
                i[e] = t;
                return this
            },
            use: function (e) {
                if ("string" == typeof e)e = m.plugin(e);
                if ("function" != typeof e)return this;
                e(this, m);
                return this
            },
            config: function (e, t) {
                var i = !1;
                if ("object" == typeof e)for (var s in e) {
                    if ("END" === s || "BEGIN" === s)i = !0;
                    a[s] = e[s]
                }
                if (i)n.setup()
            },
            expression: _.expression,
            parse: _.parse,
            Parser: s,
            Lexer: n,
            _addProtoInheritCache: function (e) {
                if (Array.isArray(e))return e.forEach(m._addProtoInheritCache);
                var t = "_" + e + "s";
                m._protoInheritCache.push(e);
                m[t] = {};
                m[e] = function (i, n) {
                    var s = this[t];
                    if ("object" == typeof i) {
                        for (var r in i)if (i.hasOwnProperty(r))this[e](r, i[r]);
                        return this
                    }
                    if (null == n)return s[i];
                    s[i] = n;
                    return this
                }
            },
            _inheritConfig: function (e, t) {
                var i = m._protoInheritCache;
                var n = l.slice(i);
                n.forEach(function (i) {
                    e[i] = t[i];
                    var n = "_" + i + "s";
                    if (t[n])e[n] = l.createObject(t[n])
                });
                return e
            }
        });
        c(m);
        m._addProtoInheritCache(["filter", "component"]);
        d.mixTo(m);
        f.mixTo(m);
        m.implement({
            init: function () {
            }, config: function () {
            }, destroy: function () {
                if (this.$context === this)this.$emit("$destroy");
                this.group && this.group.destroy(!0);
                this.group = null;
                this.parentNode = null;
                this._watchers = null;
                this._children = [];
                var e = this.$parent;
                if (e) {
                    var t = e._children.indexOf(this);
                    e._children.splice(t, 1)
                }
                this.$parent = null;
                this.$root = null;
                this._handles = null;
                this.$refs = null
            }, $compile: function (e, t) {
                t = t || {};
                if ("string" == typeof e)e = new s(e).parse();
                var i = this.__ns__, n = t.record, r;
                if (t.namespace)this.__ns__ = t.namespace;
                if (n)this._record();
                var a = this._walk(e, t);
                if (n) {
                    r = this._release();
                    var o = this;
                    if (r.length)a.ondestroy = function () {
                        o.$unwatch(r)
                    }
                }
                if (t.namespace)this.__ns__ = i;
                return a
            }, $bind: function (e, t, i) {
                var n = l.typeOf(t);
                if ("expression" === t.type || "string" === n)this._bind(e, t, i); else if ("array" === n)for (var s = 0, r = t.length; s < r; s++)this._bind(e, t[s]); else if ("object" === n)for (var s in t)if (t.hasOwnProperty(s))this._bind(e, s, t[s]);
                e.$update();
                return this
            }, $unbind: function () {
            }, $get: function (e) {
                return _.expression(e).get(this)
            }, $inject: function (e, t, i) {
                var n = u.node(this);
                if (e === !1) {
                    if (!this._fragContainer)this._fragContainer = r.fragment();
                    return this.$inject(this._fragContainer)
                }
                if ("string" == typeof e)e = r.find(e);
                if (!e)throw"injected node is not found";
                if (n) {
                    r.inject(n, e, t);
                    this.$emit("$inject", e);
                    this.parentNode = Array.isArray(n) ? n[0].parentNode : n.parentNode;
                    return this
                }
            }, $mute: function (e) {
                e = !!e;
                var t = 0 == e && this._mute;
                this._mute = !!e;
                if (t)this.$update();
                return this
            }, _bind: function (e, t, i) {
                var n = this;
                if (!(e && e instanceof m))throw"$bind() should pass Regular component as first argument";
                if (!t)throw"$bind() should  pass as least one expression to bind";
                if (!i)i = t;
                t = _.expression(t);
                i = _.expression(i);
                if (i.set) {
                    var s = this.$watch(t, function (t) {
                        e.$update(i, t)
                    });
                    e.$on("$destroy", function () {
                        n.$unwatch(s)
                    })
                }
                if (t.set) {
                    var r = e.$watch(i, function (e) {
                        n.$update(t, e)
                    });
                    this.$on("$destroy", e.$unwatch.bind(e, r))
                }
                i.set(e, t.get(this))
            }, _walk: function (e, t) {
                if ("array" === l.typeOf(e)) {
                    var i = [];
                    for (var n = 0, s = e.length; n < s; n++)i.push(this._walk(e[n], t));
                    return new o(i)
                }
                if ("string" == typeof e)return h.createTextNode(e); else return v[e.type || "default"].call(this, e, t)
            }, _append: function (e) {
                this._children.push(e);
                e.$root = this.$root;
                e.$parent = this
            }, _handleEvent: function (e, t, i, n) {
                var s = this.constructor, a = "function" != typeof i ? l.handleEvent.call(this, i, t) : i, o = s.event(t), c;
                if (o)c = o.call(this, e, a, n); else r.on(e, t, a);
                return o ? c : function () {
                    r.off(e, t, a)
                }
            }, _f_: function (e) {
                var t = this.constructor;
                var i = t.filter(e);
                if ("function" != typeof i)throw"filter " + e + "is undefined";
                return i
            }, _sg_: function (e, t) {
                var i = this.computed, n = i[e];
                if (n)if (n.get)return n.get(this); else l.log("the computed '" + e + "' don't define the get function,  get data." + e + " altnately", "error");
                return t
            }, _ss_: function (e, t, i, n) {
                var s = this.computed, n = n || "=", r = s[e], a;
                if ("=" !== n) {
                    a = r ? r.get(this) : i[e];
                    switch (n) {
                        case"+=":
                            t = a + t;
                            break;
                        case"-=":
                            t = a - t;
                            break;
                        case"*=":
                            t = a * t;
                            break;
                        case"/=":
                            t = a / t;
                            break;
                        case"%=":
                            t = a % t
                    }
                }
                if (r)if (r.set)return r.set(this, t); else l.log("the computed '" + e + "' don't define the set function,  assign data." + e + " altnately", "error");
                i[e] = t;
                return t
            }
        });
        m.prototype.inject = m.prototype.$inject;
        i.exports = m;
        var g = function () {
            function e(e) {
                return function (t) {
                    var i = t.$context;
                    return e.call(i, i.data)
                }
            }

            function t(e) {
                return function (t, i) {
                    var n = t.$context;
                    e.call(n, i, n.data);
                    return i
                }
            }

            return function (i) {
                if (i) {
                    var n = {}, s, r, a;
                    for (var o in i) {
                        s = i[o];
                        a = typeof s;
                        if ("expression" !== s.type)if ("string" === a)n[o] = _.expression(s); else {
                            r = n[o] = {type: "expression"};
                            if ("function" === a)r.get = e(s); else {
                                if (s.get)r.get = e(s.get);
                                if (s.set)r.set = t(s.set)
                            }
                        } else n[o] = s
                    }
                    return n
                }
            }
        }()
    });
    e.register("regularjs/src/util.js", function (e, t, i) {
        t("./helper/shim.js");
        var n = i.exports;
        var s = t("./helper/entities.js");
        var r = [].slice;
        var a = {}.toString;
        var o = "undefined" != typeof window ? window : global;
        n.noop = function () {
        };
        n.uid = function () {
            var e = 0;
            return function () {
                return e++
            }
        }();
        n.varName = "_d_";
        n.setName = "_p_";
        n.ctxName = "_c_";
        n.rWord = /^[\$\w]+$/;
        n.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/;
        n.nextTick = "function" == typeof setImmediate ? setImmediate.bind(o) : function (e) {
            setTimeout(e, 0)
        };
        var l = "var " + n.ctxName + "=context.$context||context;var " + n.varName + "=context.data;";
        n.host = "data";
        n.slice = function (e, t, i) {
            var n = [];
            for (var s = t || 0, r = i || e.length; s < r; s++) {
                var a = e[s];
                n.push(a)
            }
            return n
        };
        n.typeOf = function (e) {
            return null == e ? String(e) : {}.toString.call(e).slice(8, -1).toLowerCase()
        };
        n.extend = function (e, t, i) {
            if ("array" === n.typeOf(i))for (var s = 0, r = i.length; s < r; s++) {
                var a = i[s];
                e[a] = t[a]
            } else for (var s in t)if ("undefined" == typeof e[s] || i === !0)e[s] = t[s];
            return e
        };
        n.makePredicate = function f(e, t) {
            function i(e) {
                if (1 === e.length)return n += "return str === '" + e[0] + "';";
                n += "switch(str){";
                for (var t = 0; t < e.length; ++t)n += "case '" + e[t] + "':";
                n += "return true}return false;"
            }

            if ("string" == typeof e)e = e.split(" ");
            var n = "", s = [];
            e:for (var r = 0; r < e.length; ++r) {
                for (var a = 0; a < s.length; ++a)if (s[a][0].length === e[r].length) {
                    s[a].push(e[r]);
                    continue e
                }
                s.push([e[r]])
            }
            if (s.length > 3) {
                s.sort(function (e, t) {
                    return t.length - e.length
                });
                n += "switch(str.length){";
                for (var r = 0; r < s.length; ++r) {
                    var o = s[r];
                    n += "case " + o[0].length + ":";
                    i(o)
                }
                n += "}"
            } else i(e);
            return new Function("str", n)
        };
        n.trackErrorPos = function () {
            function e(e, t) {
                var i = 0;
                for (var n = 0, s = e.length; n < s; n++) {
                    var r = (e[n] || "").length;
                    if (i + r > t)return {num: n, line: e[n], start: t - i};
                    i = i + r + 1
                }
            }

            var t = /\r\n|[\n\r\u2028\u2029]/g;
            return function (i, n) {
                if (n > i.length - 1)n = i.length - 1;
                t.lastIndex = 0;
                var s = i.split(t);
                var r = e(s, n);
                var a = r.line.length;
                var o = r.start - 10;
                if (o < 0)o = 0;
                var l = r.start + 10;
                if (l > a)l = a;
                var c = r.line.slice(o, l);
                var d = r.num + 1 + "> " + (o > 0 ? "..." : "");
                var u = l < a ? "..." : "";
                return d + c + u + "\n" + new Array(r.start + d.length + 1).join(" ") + "^"
            }
        }();
        var c = /\((\?\!|\?\:|\?\=)/g;
        n.findSubCapture = function (e) {
            var t = 0, i = 0, n = e.length, s = e.match(c);
            if (s)s = s.length; else s = 0;
            for (; n--;) {
                var r = e.charAt(n);
                if (0 === n || "\\" !== e.charAt(n - 1)) {
                    if ("(" === r)t++;
                    if (")" === r)i++
                }
            }
            if (t !== i)throw"RegExp: " + e + "'s bracket is not marched"; else return t - s
        };
        n.escapeRegExp = function (e) {
            return e.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function (e) {
                return "\\" + e
            })
        };
        var d = new RegExp("&(" + Object.keys(s).join("|") + ");", "gi");
        n.convertEntity = function (e) {
            return ("" + e).replace(d, function (e, t) {
                return String.fromCharCode(s[t])
            })
        };
        n.createObject = function (e, t) {
            function i() {
            }

            i.prototype = e;
            var s = new i;
            if (t)n.extend(s, t);
            return s
        };
        n.createProto = function (e, t) {
            function i() {
                this.constructor = e
            }

            i.prototype = t;
            return e.prototype = new i
        };
        n.clone = function _(e) {
            var t = n.typeOf(e);
            if ("array" === t) {
                var i = [];
                for (var s = 0, r = e.length; s < r; s++)i[s] = e[s];
                return i
            }
            if ("object" === t) {
                var i = {};
                for (var s in e)if (e.hasOwnProperty(s))i[s] = e[s];
                return i
            }
            return e
        };
        n.equals = function (e, t) {
            var i = n.typeOf(e);
            if ("array" === i) {
                var s = u(e, t || []);
                return s
            }
            if ("number" === i && "number" == typeof t && isNaN(e) && isNaN(t))return !0; else return e === t
        };
        var u = function () {
            function e(e, t) {
                return e === t
            }

            function t(t, i) {
                var n = t.length;
                var s = i.length;
                var r = [];
                for (var a = 0; a <= n; a++)r.push([a]);
                for (var o = 1; o <= s; o++)r[0][o] = o;
                for (var a = 1; a <= n; a++)for (var o = 1; o <= s; o++)if (e(t[a - 1], i[o - 1]))r[a][o] = r[a - 1][o - 1]; else r[a][o] = Math.min(r[a - 1][o] + 1, r[a][o - 1] + 1);
                return r
            }

            function i(e, i) {
                var n = t(i, e);
                var s = i.length;
                var r = s;
                var a = e.length;
                var o = a;
                var l = [];
                var c = n[r][o];
                for (; r > 0 || o > 0;)if (0 !== r)if (0 !== o) {
                    var d = n[r - 1][o - 1];
                    var u = n[r - 1][o];
                    var f = n[r][o - 1];
                    var _ = Math.min(f, u, d);
                    if (_ === u) {
                        l.unshift(2);
                        r--;
                        c = u
                    } else if (_ === d) {
                        if (d === c)l.unshift(0); else {
                            l.unshift(1);
                            c = d
                        }
                        r--;
                        o--
                    } else {
                        l.unshift(3);
                        o--;
                        c = f
                    }
                } else {
                    l.unshift(2);
                    r--
                } else {
                    l.unshift(3);
                    o--
                }
                var h = 0;
                var p = 3;
                var m = 2;
                var v = 1;
                var s = 0;
                a = 0;
                var g = [];
                var $ = {index: null, add: 0, removed: []};
                for (var r = 0; r < l.length; r++) {
                    if (l[r] > 0) {
                        if (null === $.index)$.index = a
                    } else if (null != $.index) {
                        g.push($);
                        $ = {index: null, add: 0, removed: []}
                    }
                    switch (l[r]) {
                        case h:
                            s++;
                            a++;
                            break;
                        case p:
                            $.add++;
                            a++;
                            break;
                        case m:
                            $.removed.push(i[s]);
                            s++;
                            break;
                        case v:
                            $.add++;
                            $.removed.push(i[s]);
                            s++;
                            a++
                    }
                }
                if (null != $.index)g.push($);
                return g
            }

            return i
        }();
        n.throttle = function h(e, t) {
            var t = t || 100;
            var i, n, s;
            var r = null;
            var a = 0;
            var o = function () {
                a = +new Date;
                r = null;
                s = e.apply(i, n);
                i = n = null
            };
            return function () {
                var l = +new Date;
                var c = t - (l - a);
                i = this;
                n = arguments;
                if (c <= 0 || c > t) {
                    clearTimeout(r);
                    r = null;
                    a = l;
                    s = e.apply(i, n);
                    i = n = null
                } else if (!r)r = setTimeout(o, c);
                return s
            }
        };
        n.escape = function () {
            var e = /&/g, t = /</g, i = />/g, n = /\'/g, s = /\"/g, r = /[&<>\"\']/;
            return function (a) {
                return r.test(a) ? a.replace(e, "&amp;").replace(t, "&lt;").replace(i, "&gt;").replace(n, "&#39;").replace(s, "&quot;") : a
            }
        }();
        n.cache = function (e) {
            e = e || 1e3;
            var t = [], i = {};
            return {
                set: function (e, n) {
                    if (t.length > this.max)i[t.shift()] = void 0;
                    if (void 0 === i[e])t.push(e);
                    i[e] = n;
                    return n
                }, get: function (e) {
                    if (void 0 === e)return i; else return i[e]
                }, max: e, len: function () {
                    return t.length
                }
            }
        };
        n.touchExpression = function (e) {
            if ("expression" === e.type)if (!e.get) {
                e.get = new Function("context", l + "return (" + e.body + ")");
                e.body = null;
                if (e.setbody)e.set = function (t, i) {
                    if (e.setbody) {
                        e.set = new Function("context", n.setName, l + e.setbody);
                        e.setbody = null
                    }
                    return e.set(t, i)
                }
            }
            return e
        };
        n.handleEvent = function (e, t) {
            var i = this, n;
            if ("expression" === e.type)n = e.get;
            if (n)return function s(e) {
                i.data.$event = e;
                var t = n(i);
                if (t === !1 && e && e.preventDefault)e.preventDefault();
                delete i.data.$event;
                i.$update()
            }; else return function a() {
                var t = r.call(arguments);
                t.unshift(e);
                i.$emit.apply(i.$context, t);
                i.$update()
            }
        };
        n.once = function (e) {
            var t = 0;
            return function () {
                if (0 === t++)e.apply(this, arguments)
            }
        };
        n.log = function (e, t) {
            if ("undefined" != typeof console)console[t || "log"](e)
        };
        n.isVoidTag = n.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content");
        n.isBooleanAttr = n.makePredicate("selected checked disabled readOnly required open autofocus controls autoplay compact loop defer multiple");
        n.isFalse - function () {
            return !1
        };
        n.isTrue - function () {
            return !0
        };
        n.assert = function (e, t) {
            if (!e)throw t
        };
        n.defineProperty = function () {
        }
    });
    e.register("regularjs/src/walkers.js", function (e, t, i) {
        function n(e, t) {
            var i = [];
            for (var n = 0, s = e.length; n < s; n++) {
                var r = this._walk(e[n], {element: t, fromElement: !0, attrs: e});
                if (r)i.push(r)
            }
            return i
        }

        var s = t("./parser/node.js");
        var r = t("./dom.js");
        var a = t("./helper/animate.js");
        var o = t("./group.js");
        var l = t("./util");
        var c = t("./helper/combine.js");
        var d = i.exports = {};
        d.list = function (e) {
            function t(e, t) {
                e = e || [];
                if (t && t.length) {
                    var i = n;
                    var o = 0, d = e.length, p = t[0].index;
                    for (var m = 0; m < t.length; m++) {
                        var v = t[m];
                        var g = v.index;
                        for (var $ = o; $ < g; $++) {
                            var y = f.get($ + 1);
                            y.data[_] = $
                        }
                        for (var b = 0, x = v.removed.length; b < x; b++) {
                            var w = f.children.splice(g + 1, 1)[0];
                            w.destroy(!0)
                        }
                        for (var T = g; T < g + v.add; T++) {
                            var I = e[T];
                            var C = l.createObject(u.data);
                            C[_] = T;
                            C[h] = I;
                            var S = new r({data: C, $parent: u, namespace: s});
                            var k = c.last(f.get(T));
                            if (k.parentNode)a.inject(c.node(S), k, "after");
                            f.children.splice(T + 1, 0, S)
                        }
                        o = g + v.add - v.removed.length;
                        o = o < 0 ? 0 : o
                    }
                    if (o < d)for (var m = o; m < d; m++) {
                        var E = f.get(m + 1);
                        E.data[_] = m
                    }
                }
            }

            var i = d.Regular;
            var n = document.createComment("Regular list"), s = this.__ns__;
            var r = i.extend({
                template: e.body,
                $context: this.$context,
                $on: this.$context.$on.bind(this.$context),
                $off: this.$context.$off.bind(this.$context),
                $emit: this.$context.$emit.bind(this.$context)
            });
            i._inheritConfig(r, this.constructor);
            var u = this;
            var f = new o;
            f.push(n);
            var _ = e.variable + "_index";
            var h = e.variable;
            this.$watch(e.sequence, t, {init: !0});
            return f
        };
        d.template = function (e) {
            var t = e.content, i;
            var n = document.createComment("template");
            var i, s = this.__ns__;
            var r = new o;
            r.push(n);
            if (t) {
                var l = this;
                this.$watch(t, function (e) {
                    if (i = r.get(1)) {
                        i.destroy(!0);
                        r.children.pop()
                    }
                    r.push(i = l.$compile(e, {record: !0, namespace: s}));
                    if (n.parentNode)a.inject(c.node(i), n, "before")
                }, {init: !0})
            }
            return r
        };
        var u = 0;
        d["if"] = function (e, t) {
            var i = this, n, s;
            if (t && t.element) {
                var r = function (r) {
                    if (r) {
                        if (s)c.destroy(s);
                        if (e.consequent)n = i.$compile(e.consequent, {record: !0, element: t.element})
                    } else {
                        if (n)c.destroy(n);
                        if (e.alternate)s = i.$compile(e.alternate, {record: !0, element: t.element})
                    }
                };
                this.$watch(e.test, r, {force: !0});
                return {
                    destroy: function () {
                        if (n)c.destroy(n); else if (s)c.destroy(s)
                    }
                }
            }
            var l, n, s, d;
            var f = document.createComment("Regular if" + u++);
            var _ = new o;
            _.push(f);
            var h = null, p = this.__ns__;
            var r = function (t, r) {
                var o = !!t;
                if (o !== h) {
                    h = o;
                    if (_.children[1]) {
                        _.children[1].destroy(!0);
                        _.children.pop()
                    }
                    if (o) {
                        if (e.consequent && e.consequent.length) {
                            n = i.$compile(e.consequent, {record: !0, namespace: p});
                            _.push(n);
                            if (f.parentNode)a.inject(c.node(n), f, "before")
                        }
                    } else if (e.alternate && e.alternate.length) {
                        s = i.$compile(e.alternate, {record: !0, namespace: p});
                        _.push(s);
                        if (f.parentNode)a.inject(c.node(s), f, "before")
                    }
                }
            };
            this.$watch(e.test, r, {force: !0, init: !0});
            return _
        };
        d.expression = function (e) {
            var t = document.createTextNode("");
            this.$watch(e, function (e) {
                r.text(t, "" + (null == e ? "" : "" + e))
            });
            return t
        };
        d.text = function (e) {
            var t = document.createTextNode(l.convertEntity(e.text));
            return t
        };
        var f = /^on-(.+)$/;
        d.element = function (e) {
            var t = e.attrs, i, s = this, o = this.constructor, d = e.children, u = this.__ns__, _, h, p = o.component(e.tag);
            if ("svg" === e.tag)var u = "svg";
            if (d && d.length)h = this.$compile(d, {namespace: u});
            if (p) {
                var m = {}, v;
                for (var g = 0, $ = t.length; g < $; g++) {
                    var y = t[g];
                    var b = y.value || "";
                    l.touchExpression(b);
                    var x = y.name;
                    var w = x.match(f);
                    if (!w) {
                        if ("expression" !== b.type)m[y.name] = b; else m[y.name] = b.get(s);
                        if ("ref" === y.name && null != b)_ = "expression" === b.type ? b.get(s) : b
                    } else {
                        v = v || {};
                        v[w[1]] = l.handleEvent.call(this, b, w[1])
                    }
                }
                var T;
                if (e.children)T = this.$compile(e.children);
                var i = new p({data: m, events: v, $body: T, $parent: this, namespace: u});
                if (_ && s.$context.$refs)s.$context.$refs[_] = i;
                for (var g = 0, $ = t.length; g < $; g++) {
                    var y = t[g];
                    var b = y.value || "";
                    if ("expression" === b.type && y.name.indexOf("on-") === -1) {
                        this.$watch(b, i.$update.bind(i, y.name));
                        if (b.set)i.$watch(y.name, s.$update.bind(s, b))
                    }
                }
                if (_)i.$on("destroy", function () {
                    if (s.$context.$refs)s.$context.$refs[_] = null
                });
                return i
            } else if ("r-content" === e.tag && this.$body)return this.$body;
            var I = r.create(e.tag, u, t);
            var C;
            if (h && !l.isVoidTag(e.tag))r.inject(c.node(h), I);
            t.sort(function (e, t) {
                var i = o.directive(e.name), n = o.directive(t.name);
                if (i && n)return (n.priority || 1) - (i.priority || 1);
                if (i)return 1;
                if (n)return -1;
                if ("type" === t.name)return 1; else return -1
            });
            var S = n.call(this, t, I, S);
            var k = {
                type: "element", group: h, node: function () {
                    return I
                }, last: function () {
                    return I
                }, destroy: function (e) {
                    if (e)a.remove(I, h ? h.destroy.bind(h) : l.noop); else if (h)h.destroy();
                    if (S.length)S.forEach(function (e) {
                        if (e)if ("function" == typeof e.destroy)e.destroy(); else e()
                    })
                }
            };
            return k
        };
        d.attribute = function (e, t) {
            var i = e;
            var n = this.constructor;
            var s = this;
            var a = t.element;
            var o = i.name, c = i.value || "", d = n.directive(o);
            l.touchExpression(c);
            if (d && d.link) {
                var u = d.link.call(s, a, c, o, t.attrs);
                if ("function" == typeof u)u = {destroy: u};
                return u
            } else {
                if ("ref" === o && null != c && t.fromElement) {
                    var f = "expression" === c.type ? c.get(s) : c;
                    var _ = this.$context.$refs;
                    if (_) {
                        _[f] = a;
                        return {
                            destroy: function () {
                                _[f] = null
                            }
                        }
                    }
                }
                if ("expression" === c.type)this.$watch(c, function (e, t) {
                    r.attr(a, o, e)
                }, {init: !0}); else if (l.isBooleanAttr(o))r.attr(a, o, !0); else r.attr(a, o, c);
                if (!t.fromElement)return {
                    destroy: function () {
                        r.attr(a, o, null)
                    }
                }
            }
        }
    });
    e.register("regularjs/src/env.js", function (e, t, i) {
        var n = t("./util");
        e.svg = function () {
            return "undefined" != typeof document && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
        }();
        e.transition = function () {
        }();
        e.exprCache = n.cache(100);
        e.isRunning = !1
    });
    e.register("regularjs/src/index.js", function (e, t, i) {
        i.exports = t("./Regular.js");
        t("./directive/base.js");
        t("./directive/animation.js");
        t("./module/timeout.js");
        i.exports.dom = t("./dom.js");
        i.exports.util = t("./util.js");
        i.exports.env = t("./env.js")
    });
    e.register("regularjs/src/dom.js", function (e, t, i) {
        function n(e) {
            return ("" + e).replace(/-\D/g, function (e) {
                return e.charAt(1).toUpperCase()
            })
        }

        function s(e, t) {
            return "change" === t && a.msie < 9 && e && e.tagName && "input" === e.tagName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) ? "click" : t
        }

        function r(e) {
            e = e || window.event;
            if (e._fixed)return e;
            this.event = e;
            this.target = e.target || e.srcElement;
            var t = this.type = e.type;
            var i = this.button = e.button;
            if (p.test(t)) {
                this.pageX = null != e.pageX ? e.pageX : e.clientX + m.scrollLeft;
                this.pageY = null != e.pageX ? e.pageY : e.clientY + m.scrollTop;
                if ("mouseover" === t || "mouseout" === t) {
                    var n = e.relatedTarget || e[("mouseover" === t ? "from" : "to") + "Element"];
                    for (; n && 3 === n.nodeType;)n = n.parentNode;
                    this.relatedTarget = n
                }
            }
            if ("DOMMouseScroll" === t || "mousewheel" === t)this.wheelDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            this.which = e.which || e.keyCode;
            if (!this.which && void 0 !== i)this.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0;
            this._fixed = !0
        }

        var a = i.exports;
        var o = t("./env.js");
        var l = t("./util");
        var c = document.createElement("div");
        var d, u;
        var f = function () {
        };
        var _ = {html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg"};
        a.body = document.body;
        a.doc = document;
        a.tNode = c;
        if (c.addEventListener) {
            d = function (e, t, i) {
                e.addEventListener(t, i, !1)
            };
            u = function (e, t, i) {
                e.removeEventListener(t, i, !1)
            }
        } else {
            d = function (e, t, i) {
                e.attachEvent("on" + t, i)
            };
            u = function (e, t, i) {
                e.detachEvent("on" + t, i)
            }
        }
        a.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
        if (isNaN(a.msie))a.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
        a.find = function (e) {
            if (document.querySelector)try {
                return document.querySelector(e)
            } catch (t) {
            }
            if (e.indexOf("#") !== -1)return document.getElementById(e.slice(1))
        };
        a.inject = function (e, t, i) {
            i = i || "bottom";
            if (Array.isArray(e)) {
                var n = e;
                e = a.fragment();
                for (var s = 0, r = n.length; s < r; s++)e.appendChild(n[s])
            }
            var o, l;
            switch (i) {
                case"bottom":
                    t.appendChild(e);
                    break;
                case"top":
                    if (o = t.firstChild)t.insertBefore(e, t.firstChild); else t.appendChild(e);
                    break;
                case"after":
                    if (l = t.nextSibling)l.parentNode.insertBefore(e, l); else t.parentNode.appendChild(e);
                    break;
                case"before":
                    t.parentNode.insertBefore(e, t)
            }
        };
        a.id = function (e) {
            return document.getElementById(e)
        };
        a.create = function (e, t, i) {
            if ("svg" === t) {
                if (!o.svg)throw Error("the env need svg support");
                t = _.svg
            }
            return !t ? document.createElement(e) : document.createElementNS(t, e)
        };
        a.fragment = function () {
            return document.createDocumentFragment()
        };
        var h = {
            "class": function (e, t) {
                "className" in e && (e.namespaceURI === _.html || !e.namespaceURI) ? e.className = t || "" : e.setAttribute("class", t)
            }, "for": function (e, t) {
                "htmlFor" in e ? e.htmlFor = t : e.setAttribute("for", t)
            }, style: function (e, t) {
                e.style ? e.style.cssText = t : e.setAttribute("style", t)
            }, value: function (e, t) {
                e.value = null != t ? t : ""
            }
        };
        a.attr = function (e, t, i) {
            if (l.isBooleanAttr(t))if ("undefined" != typeof i)if (i) {
                e[t] = !0;
                e.setAttribute(t, t);
                if (a.msie && a.msie <= 7)e.defaultChecked = !0
            } else {
                e[t] = !1;
                e.removeAttribute(t)
            } else return e[t] || (e.attributes.getNamedItem(t) || f).specified ? t : void 0; else if ("undefined" != typeof i)if (h[t])h[t](e, i); else if (null === i)e.removeAttribute(t); else e.setAttribute(t, i); else if (e.getAttribute) {
                var n = e.getAttribute(t, 2);
                return null === n ? void 0 : n
            }
        };
        a.on = function (e, t, i) {
            var n = t.split(" ");
            i.real = function (t) {
                i.call(e, new r(t))
            };
            n.forEach(function (t) {
                t = s(e, t);
                d(e, t, i.real)
            })
        };
        a.off = function (e, t, i) {
            var n = t.split(" ");
            i = i.real || i;
            n.forEach(function (t) {
                t = s(e, t);
                u(e, t, i)
            })
        };
        a.text = function () {
            var e = {};
            if (a.msie && a.msie < 9) {
                e[1] = "innerText";
                e[3] = "nodeValue"
            } else e[1] = e[3] = "textContent";
            return function (t, i) {
                var n = e[t.nodeType];
                if (null == i)return n ? t[n] : "";
                t[n] = i
            }
        }();
        a.html = function (e, t) {
            if ("undefined" == typeof t)return e.innerHTML; else e.innerHTML = t
        };
        a.replace = function (e, t) {
            if (t.parentNode)t.parentNode.replaceChild(e, t)
        };
        a.remove = function (e) {
            if (e.parentNode)e.parentNode.removeChild(e)
        };
        a.css = function (e, t, i) {
            if ("object" !== l.typeOf(t))if ("undefined" != typeof i) {
                t = n(t);
                if (t)e.style[t] = i
            } else {
                var s;
                if (a.msie <= 8) {
                    s = e.currentStyle && e.currentStyle[t];
                    if ("" === s)s = "auto"
                }
                s = s || e.style[t];
                if (a.msie <= 8)s = "" === s ? void 0 : s;
                return s
            } else for (var r in t)if (t.hasOwnProperty(r))a.css(e, r, t[r])
        };
        a.addClass = function (e, t) {
            var i = e.className || "";
            if ((" " + i + " ").indexOf(" " + t + " ") === -1)e.className = i ? i + " " + t : t
        };
        a.delClass = function (e, t) {
            var i = e.className || "";
            e.className = (" " + i + " ").replace(" " + t + " ", " ").trim()
        };
        a.hasClass = function (e, t) {
            var i = e.className || "";
            return (" " + i + " ").indexOf(" " + t + " ") !== -1
        };
        var p = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/;
        var m = document;
        m = !m.compatMode || "CSS1Compat" === m.compatMode ? m.documentElement : m.body;
        l.extend(r.prototype, {
            immediateStop: l.isFalse, stop: function () {
                this.preventDefault().stopPropagation()
            }, preventDefault: function () {
                if (this.event.preventDefault)this.event.preventDefault(); else this.event.returnValue = !1;
                return this
            }, stopPropagation: function () {
                if (this.event.stopPropagation)this.event.stopPropagation(); else this.event.cancelBubble = !0;
                return this
            }, stopImmediatePropagation: function () {
                if (this.event.stopImmediatePropagation)this.event.stopImmediatePropagation()
            }
        });
        a.nextFrame = function () {
            var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                    setTimeout(e, 16)
                };
            var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || function (e) {
                    clearTimeout(e)
                };
            return function (i) {
                var n = e(i);
                return function () {
                    t(n)
                }
            }
        }();
        var v;
        a.nextReflow = function (e) {
            a.nextFrame(function () {
                v = document.body.offsetWidth;
                e()
            })
        }
    });
    e.register("regularjs/src/group.js", function (e, t, i) {
        function n(e) {
            this.children = e || []
        }

        var s = t("./util");
        var r = t("./helper/combine");
        s.extend(n.prototype, {
            destroy: function (e) {
                r.destroy(this.children, e);
                if (this.ondestroy)this.ondestroy();
                this.children = null
            }, get: function (e) {
                return this.children[e]
            }, push: function (e) {
                this.children.push(e)
            }
        });
        i.exports = n
    });
    e.register("regularjs/src/config.js", function (e, t, i) {
        i.exports = {BEGIN: "{{", END: "}}"}
    });
    e.register("regularjs/src/parser/Lexer.js", function (e, t, i) {
        function n(e) {
            return function (t) {
                return {type: e, value: t}
            }
        }

        function s(e, t) {
            if (c[l.END]) {
                this.markStart = c[l.END];
                this.markEnd = l.END
            }
            this.input = (e || "").trim();
            this.opts = t || {};
            this.map = 2 !== this.opts.mode ? d : u;
            this.states = ["INIT"];
            if (this.opts.state)this.states.push(this.opts.state)
        }

        function r(e) {
            var t, i = {}, n;
            for (var s = 0, r = e.length; s < r; s++) {
                t = e[s];
                n = t[2] || "INIT";
                (i[n] || (i[n] = {rules: [], links: []})).rules.push(t)
            }
            return a(i)
        }

        function a(e) {
            function t(e, t) {
                return "string" == typeof f[t] ? o.escapeRegExp(f[t]) : String(f[t]).slice(1, -1)
            }

            var i, s, r, a, l, c, d;
            for (var u in e) {
                i = e[u];
                i.curIndex = 1;
                s = i.rules;
                r = [];
                for (var _ = 0, h = s.length; _ < h; _++) {
                    d = s[_];
                    l = d[0];
                    a = d[1];
                    if ("string" == typeof a)a = n(a);
                    if ("regexp" === o.typeOf(l))l = l.toString().slice(1, -1);
                    l = l.replace(/\{(\w+)\}/g, t);
                    c = o.findSubCapture(l) + 1;
                    i.links.push([i.curIndex, c, a]);
                    i.curIndex += c;
                    r.push(l)
                }
                i.TRUNK = new RegExp("^(?:(" + r.join(")|(") + "))")
            }
            return e
        }

        var o = t("../util.js");
        var l = t("../config.js");
        var c = {"}": "{", "]": "["}, d, u;
        var f = {NAME: /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/, IDENT: /[\$_A-Za-z][_0-9A-Za-z\$]*/, SPACE: /[\r\n\f ]/};
        var _ = /a|(b)/.exec("a");
        var h = _ && void 0 === _[1] ? function (e) {
            return void 0 !== e
        } : function (e) {
            return !!e
        };
        var p = s.prototype;
        p.lex = function (e) {
            e = (e || this.input).trim();
            var t = [], i, n, s, r, a;
            this.input = e, this.marks = 0;
            this.index = 0;
            var o = 0;
            for (; e;) {
                o++;
                a = this.state();
                i = this.map[a];
                n = i.TRUNK.exec(e);
                if (!n)this.error("Unrecoginized Token");
                s = n[0].length;
                e = e.slice(s);
                r = this._process.call(this, n, i, e);
                if (r)t.push(r);
                this.index += s
            }
            t.push({type: "EOF"});
            return t
        };
        p.error = function (e) {
            throw"Parse Error: " + e + ":\n" + o.trackErrorPos(this.input, this.index)
        };
        p._process = function (e, t, i) {
            var n = t.links, s = !1, r;
            for (var a = n.length, o = 0; o < a; o++) {
                var l = n[o], c = l[2], d = l[0];
                if (h(e[d])) {
                    s = !0;
                    if (c) {
                        r = c.apply(this, e.slice(d, d + l[1]));
                        if (r)r.pos = this.index
                    }
                    break
                }
            }
            if (!s)switch (i.charAt(0)) {
                case"<":
                    this.enter("TAG");
                    break;
                default:
                    this.enter("JST")
            }
            return r
        };
        p.enter = function (e) {
            this.states.push(e);
            return this
        };
        p.state = function () {
            var e = this.states;
            return e[e.length - 1]
        };
        p.leave = function (e) {
            var t = this.states;
            if (!e || t[t.length - 1] === e)t.pop()
        };
        s.setup = function () {
            f.END = l.END;
            f.BEGIN = l.BEGIN;
            d = r([m.ENTER_JST, m.ENTER_TAG, m.TEXT, m.TAG_NAME, m.TAG_OPEN, m.TAG_CLOSE, m.TAG_PUNCHOR, m.TAG_ENTER_JST, m.TAG_UNQ_VALUE, m.TAG_STRING, m.TAG_SPACE, m.TAG_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_COMMENT, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT]);
            u = r([m.ENTER_JST2, m.TEXT, m.JST_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT])
        };
        var m = {
            ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function (e) {
                this.enter("JST");
                if (e)return {type: "TEXT", value: e}
            }],
            ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function (e) {
                this.enter("JST");
                if (e)return {type: "TEXT", value: e}
            }],
            ENTER_TAG: [/[^\x00<>]*?(?=<)/, function (e) {
                this.enter("TAG");
                if (e)return {type: "TEXT", value: e}
            }],
            TEXT: [/[^\x00]+/, "TEXT"],
            TAG_NAME: [/{NAME}/, "NAME", "TAG"],
            TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f ]+/, "UNQ", "TAG"],
            TAG_OPEN: [/<({NAME})\s*/, function (e, t) {
                return {type: "TAG_OPEN", value: t}
            }, "TAG"],
            TAG_CLOSE: [/<\/({NAME})[\r\n\f ]*>/, function (e, t) {
                this.leave();
                return {type: "TAG_CLOSE", value: t}
            }, "TAG"],
            TAG_ENTER_JST: [/(?={BEGIN})/, function () {
                this.enter("JST")
            }, "TAG"],
            TAG_PUNCHOR: [/[\>\/=&]/, function (e) {
                if (">" === e)this.leave();
                return {type: e, value: e}
            }, "TAG"],
            TAG_STRING: [/'([^']*)'|"([^"]*)"/, function (e, t, i) {
                var n = t || i || "";
                return {type: "STRING", value: n}
            }, "TAG"],
            TAG_SPACE: [/{SPACE}+/, null, "TAG"],
            TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, null, "TAG"],
            JST_OPEN: ["{BEGIN}#{SPACE}*({IDENT})", function (e, t) {
                return {type: "OPEN", value: t}
            }, "JST"],
            JST_LEAVE: [/{END}/, function () {
                this.firstEnterStart = !1;
                if (!this.markEnd || !this.marks) {
                    this.leave("JST");
                    return {type: "END"}
                } else {
                    this.marks--;
                    return {type: this.markEnd, value: this.markEnd}
                }
            }, "JST"],
            JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function (e, t) {
                this.leave("JST");
                return {type: "CLOSE", value: t}
            }, "JST"],
            JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function () {
                this.leave()
            }, "JST"],
            JST_EXPR_OPEN: ["{BEGIN}", function (e, t) {
                if (e === this.markStart)if (this.firstEnterStart) {
                    this.marks++;
                    this.firstEnterStart = !1;
                    return {type: this.markStart, value: this.markStart}
                } else this.firstEnterStart = !0;
                return {type: "EXPR_OPEN", escape: !1}
            }, "JST"],
            JST_IDENT: ["{IDENT}", "IDENT", "JST"],
            JST_SPACE: [/[ \r\n\f]+/, null, "JST"],
            JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function (e) {
                return {type: e, value: e}
            }, "JST"],
            JST_STRING: [/'([^']*)'|"([^"]*)"/, function (e, t, i) {
                return {type: "STRING", value: t || i || ""}
            }, "JST"],
            JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function (e) {
                return {type: "NUMBER", value: parseFloat(e, 10)}
            }, "JST"]
        };
        s.setup();
        i.exports = s
    });
    e.register("regularjs/src/parser/node.js", function (e, t, i) {
        i.exports = {
            element: function (e, t, i) {
                return {type: "element", tag: e, attrs: t, children: i}
            }, attribute: function (e, t) {
                return {type: "attribute", name: e, value: t}
            }, "if": function (e, t, i) {
                return {type: "if", test: e, consequent: t, alternate: i}
            }, list: function (e, t, i) {
                return {type: "list", sequence: e, variable: t, body: i}
            }, expression: function (e, t, i) {
                return {type: "expression", body: e, constant: i || !1, setbody: t || !1}
            }, text: function (e) {
                return {type: "text", text: e}
            }, template: function (e) {
                return {type: "template", content: e}
            }
        }
    });
    e.register("regularjs/src/parser/Parser.js", function (e, t, i) {
        function n(e, t) {
            t = t || {};
            this.input = e;
            this.tokens = new o(e, t).lex();
            this.pos = 0;
            this.noComputed = t.noComputed;
            this.length = this.tokens.length
        }

        var s = t("../util.js");
        var r = t("../config.js");
        var a = t("./node.js");
        var o = t("./Lexer.js");
        var l = s.varName;
        var c = s.ctxName;
        var d = s.makePredicate("STRING IDENT NUMBER");
        var u = s.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object");
        var f = n.prototype;
        f.parse = function () {
            this.pos = 0;
            var e = this.program();
            if ("TAG_CLOSE" === this.ll().type)this.error("You may got a unclosed Tag");
            return e
        };
        f.ll = function (e) {
            e = e || 1;
            if (e < 0)e += 1;
            var t = this.pos + e - 1;
            if (t > this.length - 1)return this.tokens[this.length - 1]; else return this.tokens[t]
        };
        f.la = function (e) {
            return (this.ll(e) || "").type
        };
        f.match = function (e, t) {
            var i;
            if (!(i = this.eat(e, t))) {
                i = this.ll();
                this.error("expect [" + e + (null == t ? "" : ":" + t) + ']" -> got "[' + i.type + (null == t ? "" : ":" + i.value) + "]", i.pos)
            } else return i
        };
        f.error = function (e, t) {
            e = "Parse Error: " + e + ":\n" + s.trackErrorPos(this.input, "number" == typeof t ? t : this.ll().pos || 0);
            throw new Error(e)
        };
        f.next = function (e) {
            e = e || 1;
            this.pos += e
        };
        f.eat = function (e, t) {
            var i = this.ll();
            if ("string" != typeof e) {
                for (var n = e.length; n--;)if (i.type === e[n]) {
                    this.next();
                    return i
                }
            } else if (i.type === e && ("undefined" == typeof t || i.value === t)) {
                this.next();
                return i
            }
            return !1
        };
        f.program = function () {
            var e = [], t = this.ll();
            for (; "EOF" !== t.type && "TAG_CLOSE" !== t.type;) {
                e.push(this.statement());
                t = this.ll()
            }
            return e
        };
        f.statement = function () {
            var e = this.ll();
            switch (e.type) {
                case"NAME":
                case"TEXT":
                    var t = e.value;
                    this.next();
                    for (; e = this.eat(["NAME", "TEXT"]);)t += e.value;
                    return a.text(t);
                case"TAG_OPEN":
                    return this.xml();
                case"OPEN":
                    return this.directive();
                case"EXPR_OPEN":
                    return this.interplation();
                case"PART_OPEN":
                    return this.template();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        };
        f.xml = function () {
            var e, t, i, n;
            e = this.match("TAG_OPEN").value;
            t = this.attrs();
            n = this.eat("/");
            this.match(">");
            if (!n && !s.isVoidTag(e)) {
                i = this.program();
                if (!this.eat("TAG_CLOSE", e))this.error("expect </" + e + "> gotno matched closeTag");
            }
            return a.element(e, t, i)
        };
        f.xentity = function (e) {
            var t = e.value, i;
            if ("NAME" === e.type) {
                if (this.eat("="))i = this.attvalue();
                return a.attribute(t, i)
            } else {
                if ("if" !== t)this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + t + " is invalid");
                return this["if"](!0)
            }
        };
        f.attrs = function (e) {
            var t;
            if (!e)t = ["NAME", "OPEN"]; else t = ["NAME"];
            var i = [], n;
            for (; n = this.eat(t);)i.push(this.xentity(n));
            return i
        };
        f.attvalue = function () {
            var e = this.ll();
            switch (e.type) {
                case"NAME":
                case"UNQ":
                case"STRING":
                    this.next();
                    var t = e.value;
                    if (~t.indexOf(r.BEGIN) && ~t.indexOf(r.END)) {
                        var i = !0;
                        var s = new n(t, {mode: 2}).parse();
                        if (1 === s.length && "expression" === s[0].type)return s[0];
                        var o = [];
                        s.forEach(function (e) {
                            if (!e.constant)i = !1;
                            o.push(e.body || "'" + e.text + "'")
                        });
                        o = "[" + o.join(",") + "].join('')";
                        t = a.expression(o, null, i)
                    }
                    return t;
                case"EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        };
        f.directive = function () {
            var e = this.ll().value;
            this.next();
            if ("function" == typeof this[e])return this[e](); else this.error("Undefined directive[" + e + "]")
        };
        f.interplation = function () {
            this.match("EXPR_OPEN");
            var e = this.expression(!0);
            this.match("END");
            return e
        };
        f.include = function () {
            var e = this.expression();
            this.match("END");
            return a.template(e)
        };
        f["if"] = function (e) {
            var t = this.expression();
            var i = [], n = [];
            var s = i;
            var r = !e ? "statement" : "attrs";
            this.match("END");
            var o, l;
            for (; !(l = this.eat("CLOSE"));) {
                o = this.ll();
                if ("OPEN" === o.type)switch (o.value) {
                    case"else":
                        s = n;
                        this.next();
                        this.match("END");
                        break;
                    case"elseif":
                        this.next();
                        n.push(this["if"](e));
                        return a["if"](t, i, n);
                    default:
                        s.push(this[r](!0))
                } else s.push(this[r](!0))
            }
            if ("if" !== l.value)this.error("Unmatched if directive");
            return a["if"](t, i, n)
        };
        f.list = function () {
            var e = this.expression(), t, i;
            var n = [], s = [];
            var r = n;
            this.match("IDENT", "as");
            t = this.match("IDENT").value;
            this.match("END");
            for (; !(i = this.eat("CLOSE"));)if (this.eat("OPEN", "else")) {
                r = s;
                this.match("END")
            } else r.push(this.statement());
            if ("list" !== i.value)this.error("expect list got /" + i.value + " ", i.pos);
            return a.list(e, t, n, s)
        };
        f.expression = function () {
            var e;
            if (this.eat("@(")) {
                e = this.expr();
                e.once = !0;
                this.match(")")
            } else e = this.expr();
            return e
        };
        f.expr = function () {
            this.depend = [];
            var e = this.filter();
            var t = e.get || e;
            var i = e.set;
            return a.expression(t, i, !this.depend.length)
        };
        f.filter = function () {
            var e = this.assign();
            var t = this.eat("|");
            var i, n;
            if (t) {
                i = ["(function(){", "var ", n = "_f_", "=", e.get, ";"];
                do {
                    i.push(n + " = " + c + "._f_('" + this.match("IDENT").value + "')(" + n);
                    if (this.eat(":"))i.push(", " + this.arguments("|").join(",") + ");"); else i.push(");")
                } while (t = this.eat("|"));
                i.push("return " + n + "})()");
                return this.getset(i.join(""))
            }
            return e
        };
        f.assign = function () {
            var e = this.condition(), t;
            if (t = this.eat(["=", "+=", "-=", "*=", "/=", "%="])) {
                if (!e.set)this.error("invalid lefthand expression in assignment expression");
                return this.getset(e.set.replace("_p_", this.condition().get).replace("'='", "'" + t.type + "'"), e.set)
            }
            return e
        };
        f.condition = function () {
            var e = this.or();
            if (this.eat("?"))return this.getset([e.get + "?", this.assign().get, this.match(":").type, this.assign().get].join("")); else return e
        };
        f.or = function () {
            var e = this.and();
            if (this.eat("||"))return this.getset(e.get + "||" + this.or().get); else return e
        };
        f.and = function () {
            var e = this.equal();
            if (this.eat("&&"))return this.getset(e.get + "&&" + this.and().get); else return e
        };
        f.equal = function () {
            var e = this.relation(), t;
            if (t = this.eat(["==", "!=", "===", "!=="]))return this.getset(e.get + t.type + this.equal().get); else return e
        };
        f.relation = function () {
            var e = this.additive(), t;
            if (t = this.eat(["<", ">", ">=", "<="]) || this.eat("IDENT", "in"))return this.getset(e.get + t.value + this.relation().get); else return e
        };
        f.additive = function () {
            var e = this.multive(), t;
            if (t = this.eat(["+", "-"]))return this.getset(e.get + t.value + this.additive().get); else return e
        };
        f.multive = function () {
            var e = this.range(), t;
            if (t = this.eat(["*", "/", "%"]))return this.getset(e.get + t.type + this.multive().get); else return e
        };
        f.range = function () {
            var e = this.unary(), t, i;
            if (t = this.eat("..")) {
                i = this.unary();
                var n = "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(" + e.get + "," + i.get + ")";
                return this.getset(n)
            }
            return e
        };
        f.unary = function () {
            var e;
            if (e = this.eat(["+", "-", "~", "!"]))return this.getset("(" + e.type + this.unary().get + ")"); else return this.member()
        };
        f.member = function (e, t, i) {
            var n, r;
            var a = !1;
            if (!e) {
                r = this.primary();
                var o = typeof r;
                if ("string" === o) {
                    i = [];
                    i.push(r);
                    t = r;
                    e = c + "._sg_('" + r + "', " + l + "['" + r + "'])";
                    a = !0
                } else if ("this" === r.get) {
                    e = c;
                    i = ["this"]
                } else {
                    i = null;
                    e = r.get
                }
            } else if ("string" == typeof t && d(t))i.push(t); else {
                if (i && i.length)this.depend.push(i);
                i = null
            }
            if (n = this.eat(["[", ".", "("]))switch (n.type) {
                case".":
                    var u = this.match("IDENT").value;
                    e += "['" + u + "']";
                    return this.member(e, u, i);
                case"[":
                    r = this.assign();
                    e += "[" + r.get + "]";
                    this.match("]");
                    return this.member(e, r, i);
                case"(":
                    var f = this.arguments().join(",");
                    e = e + "(" + f + ")";
                    this.match(")");
                    return this.member(e, null, i)
            }
            if (i && i.length)this.depend.push(i);
            var _ = {get: e};
            if (t)if (a)_.set = c + "._ss_('" + r + "'," + s.setName + "," + s.varName + ", '=')"; else _.set = e + "=" + s.setName;
            return _
        };
        f.arguments = function (e) {
            e = e || ")";
            var t = [];
            do if (this.la() !== e)t.push(this.assign().get); while (this.eat(","));
            return t
        };
        f.primary = function () {
            var e = this.ll();
            switch (e.type) {
                case"{":
                    return this.object();
                case"[":
                    return this.array();
                case"(":
                    return this.paren();
                case"STRING":
                    this.next();
                    return this.getset("'" + e.value + "'");
                case"NUMBER":
                    this.next();
                    return this.getset("" + e.value);
                case"IDENT":
                    this.next();
                    if (u(e.value))return this.getset(e.value); else return e.value;
                default:
                    this.error("Unexpected Token: " + e.type)
            }
        };
        f.object = function () {
            var e = [this.match("{").type];
            var t = this.eat(["STRING", "IDENT", "NUMBER"]);
            for (; t;) {
                e.push("'" + t.value + "'" + this.match(":").type);
                var i = this.assign().get;
                e.push(i);
                t = null;
                if (this.eat(",") && (t = this.eat(["STRING", "IDENT", "NUMBER"])))e.push(",")
            }
            e.push(this.match("}").type);
            return {get: e.join("")}
        };
        f.array = function () {
            var e = [this.match("[").type], t;
            if (this.eat("]"))e.push("]"); else {
                for (; t = this.assign();) {
                    e.push(t.get);
                    if (this.eat(","))e.push(","); else break
                }
                e.push(this.match("]").type)
            }
            return {get: e.join("")}
        };
        f.paren = function () {
            this.match("(");
            var e = this.filter();
            e.get = "(" + e.get + ")";
            this.match(")");
            return e
        };
        f.getset = function (e, t) {
            return {get: e, set: t}
        };
        i.exports = n
    });
    e.register("regularjs/src/helper/extend.js", function (e, t, i) {
        function n(e, t, i) {
            return function () {
                var n = this.supr;
                this.supr = i[e];
                var s = t.apply(this, arguments);
                this.supr = n;
                return s
            }
        }

        function s(e, t, i) {
            for (var s in t)if (t.hasOwnProperty(s))e[s] = o(t[s]) && o(i[s]) && a.test(t[s]) ? n(s, t[s], i) : t[s]
        }

        var r = t("../util.js"), a = /xy/.test(function () {
            "xy"
        }) ? /\bsupr\b/ : /.*/, o = function (e) {
            return "function" == typeof e
        };
        i.exports = function l(e) {
            function t() {
                n.apply(this, arguments)
            }

            function i(e) {
                s(a, e, o);
                return this
            }

            e = e || {};
            var n = this, a, o = n && n.prototype || {};
            if ("function" == typeof e) {
                a = e.prototype;
                e.implement = i;
                e.extend = l;
                return e
            }
            a = r.createProto(t, o);
            t.implement = i;
            t.implement(e);
            if (n.__after__)n.__after__.call(t, n, e);
            t.extend = l;
            return t
        }
    });
    e.register("regularjs/src/helper/shim.js", function (e, t, i) {
        function n(e, t) {
            for (var i in t)if (void 0 === e[i])e[i] = t[i]
        }

        var s = [].slice;
        var r = {}.toString;
        n(String.prototype, {
            trim: function () {
                return this.replace(/^\s+|\s+$/g, "")
            }
        });
        n(Array.prototype, {
            indexOf: function (e, t) {
                t = t || 0;
                for (var i = t, n = this.length; i < n; i++)if (this[i] === e)return i;
                return -1
            }, forEach: function (e, t) {
                for (var i = 0, n = this.length; i < n; i++)e.call(t, this[i], i, this)
            }, filter: function (e, t) {
                var i = [];
                for (var n = 0, s = this.length; n < s; n++) {
                    var r = e.call(t, this[n], n, this);
                    if (r)i.push(this[n])
                }
                return i
            }, map: function (e, t) {
                var i = [];
                for (var n = 0, s = this.length; n < s; n++)i.push(e.call(t, this[n], n, this));
                return i
            }
        });
        n(Function.prototype, {
            bind: function (e) {
                var t = this;
                var i = s.call(arguments, 1);
                return function () {
                    var n = i.concat(s.call(arguments));
                    return t.apply(e, n)
                }
            }
        });
        n(Object, {
            keys: function (e) {
                var t = [];
                for (var i in e)if (e.hasOwnProperty(i))t.push(i);
                return t
            }
        });
        n(Date, {
            now: function () {
                return +new Date
            }
        });
        n(Array, {
            isArray: function (e) {
                return "[object Array]" === r.call(e)
            }
        })
    });
    e.register("regularjs/src/helper/parse.js", function (e, t, i) {
        var n = t("../env").exprCache;
        var s = t("../util");
        var r = t("../parser/Parser.js");
        i.exports = {
            expression: function (e, t) {
                if ("string" == typeof e && (e = e.trim()))e = n.get(e) || n.set(e, new r(e, {
                        state: "JST",
                        mode: 2
                    }).expression());
                if (e)return s.touchExpression(e)
            }, parse: function (e) {
                return new r(e).parse()
            }
        }
    });
    e.register("regularjs/src/helper/watcher.js", function (e, t, i) {
        function n() {
        }

        var s = t("../util.js");
        var r = t("./parse.js").expression;
        var a = {
            $watch: function (e, t, i) {
                var n, a, o, l;
                if (!this._watchers)this._watchers = [];
                i = i || {};
                if (i === !0)i = {deep: !0};
                var c = s.uid("w_");
                if (Array.isArray(e)) {
                    var d = [];
                    for (var u = 0, f = e.length; u < f; u++)d.push(r(e[u]).get);
                    var _ = [];
                    o = function (e) {
                        var t = !0;
                        for (var i = 0, n = d.length; i < n; i++) {
                            var r = d[i](e);
                            if (!s.equals(r, _[i])) {
                                t = !1;
                                _[i] = s.clone(r)
                            }
                        }
                        return t ? !1 : _
                    }
                } else {
                    e = this.$expression ? this.$expression(e) : r(e);
                    n = e.get;
                    a = e.once || e.constant
                }
                var h = {id: c, get: n, fn: t, once: a, force: i.force, test: o, deep: i.deep};
                this._watchers.push(h);
                l = this._records && this._records.length;
                if (l)this._records[l - 1].push(c);
                if (i.init === !0) {
                    this.$phase = "digest";
                    this._checkSingleWatch(h, this._watchers.length - 1);
                    this.$phase = null
                }
                return c
            }, $unwatch: function (e) {
                if (!this._watchers)this._watchers = [];
                if (Array.isArray(e))for (var t = 0, i = e.length; t < i; t++)this.$unwatch(e[t]); else {
                    var n = this._watchers, s, r;
                    if (!e || !n || !(r = n.length))return;
                    for (; r--;) {
                        s = n[r];
                        if (s && s.id === e)n.splice(r, 1)
                    }
                }
            }, $digest: function () {
                if ("digest" !== this.$phase && !this._mute) {
                    this.$phase = "digest";
                    var e = !1, t = 0;
                    for (; e = this._digest();)if (++t > 20)throw"there may a circular dependencies reaches";
                    if (t > 0 && this.$emit)this.$emit("$update");
                    this.$phase = null
                }
            }, _digest: function () {
                var e = this._watchers;
                var t = !1, i, n, s;
                if (e && e.length)for (var r = 0, a = e.length; r < a; r++) {
                    n = e[r];
                    s = this._checkSingleWatch(n, r);
                    if (s)t = !0
                }
                i = this._children;
                if (i && i.length)for (var o = 0, l = i.length; o < l; o++)if (i[o]._digest())t = !0;
                return t
            }, _checkSingleWatch: function (e, t) {
                var i = !1;
                if (e)if (e.test) {
                    var n = e.test(this);
                    if (n) {
                        i = !0;
                        e.fn.apply(this, n)
                    }
                } else {
                    var r = e.get(this);
                    var a = e.last;
                    var o = !0;
                    if ("object" === s.typeOf(r) && e.deep)if (!e.last)o = !1; else {
                        for (var l in r)if (e.last[l] !== r[l]) {
                            o = !1;
                            break
                        }
                        if (o !== !1)for (var c in a)if (a[c] !== r[c]) {
                            o = !1;
                            break
                        }
                    } else o = s.equals(r, e.last);
                    if (o === !1 || e.force) {
                        o = !1;
                        e.force = null;
                        i = !0;
                        e.fn.call(this, r, e.last);
                        if ("object" != typeof r || e.deep)e.last = s.clone(r); else e.last = r
                    } else if ("array" === s.typeOf(o) && o.length) {
                        e.last = s.clone(r);
                        e.fn.call(this, r, o);
                        i = !0
                    } else o = !0;
                    if (i && e.once)this._watchers.splice(t, 1);
                    return i
                }
            }, $update: function (e, t) {
                if (null != e) {
                    var i = s.typeOf(e);
                    if ("string" === i || "expression" === e.type) {
                        e = r(e);
                        e.set(this, t)
                    } else if ("function" === i)e.call(this, this.data); else for (var n in e)if (e.hasOwnProperty(n))this.data[n] = e[n]
                }
                if (this.$root)this.$root.$digest()
            }, _record: function () {
                if (!this._records)this._records = [];
                this._records.push([])
            }, _release: function () {
                return this._records.pop()
            }
        };
        s.extend(n.prototype, a);
        n.mixTo = function (e) {
            e = "function" == typeof e ? e.prototype : e;
            return s.extend(e, a)
        };
        i.exports = n
    });
    e.register("regularjs/src/helper/event.js", function (e, t, i) {
        function n() {
            if (arguments.length)this.$on.apply(this, arguments)
        }

        var s = [].slice, r = t("../util.js");
        var a = ["$inject", "$init", "$destroy", "$update"];
        var o = {
            $on: function (e, t) {
                if ("object" == typeof e)for (var i in e)this.$on(i, e[i]); else {
                    var n = this;
                    var s = n._handles || (n._handles = {}), r = s[e] || (s[e] = []);
                    r.push(t)
                }
                return this
            }, $off: function (e, t) {
                var i = this;
                if (i._handles) {
                    if (!e)this._handles = {};
                    var n = i._handles, s;
                    if (s = n[e]) {
                        if (!t) {
                            n[e] = [];
                            return i
                        }
                        for (var r = 0, a = s.length; r < a; r++)if (t === s[r]) {
                            s.splice(r, 1);
                            return i
                        }
                    }
                    return i
                }
            }, $emit: function (e) {
                var t = this;
                var i = t._handles, n, r, o;
                if (e) {
                    var r = s.call(arguments, 1);
                    var o = e;
                    if (!i)return t;
                    var l = ~a.indexOf(o);
                    if (n = i[o.slice(1)])for (var c = 0, d = n.length; c < d; c++)n[c].apply(t, r);
                    if (!(n = i[o]))return t;
                    for (var u = 0, d = n.length; u < d; u++)n[u].apply(t, r);
                    return t
                }
            }, $broadcast: function () {
            }
        };
        r.extend(n.prototype, o);
        n.mixTo = function (e) {
            e = "function" == typeof e ? e.prototype : e;
            r.extend(e, o)
        };
        i.exports = n
    });
    e.register("regularjs/src/helper/animate.js", function (e, t, i) {
        function n(e) {
            var t = 0, i = 0, n = 0, r = 0, a = 0, o = 5 / 3, l;
            if (window.getComputedStyle) {
                l = window.getComputedStyle(e), i = s(l[u + "Duration"]) || i;
                n = s(l[u + "Delay"]) || n;
                r = s(l[f + "Duration"]) || r;
                a = s(l[f + "Delay"]) || a;
                t = Math.max(i + n, r + a)
            }
            return 1e3 * t * o
        }

        function s(e) {
            var t = 0, i;
            if (!e)return 0;
            e.split(",").forEach(function (e) {
                i = parseFloat(e);
                if (i > t)t = i
            });
            return t
        }

        var r = t("../util");
        var a = t("../dom.js");
        var o = {};
        var l = t("../env.js");
        var c = "transitionend", d = "animationend", u = "transition", f = "animation";
        if (!("ontransitionend" in window))if ("onwebkittransitionend" in window) {
            c += " webkitTransitionEnd";
            u = "webkitTransition"
        } else if ("onotransitionend" in a.tNode || "Opera" === navigator.appName) {
            c += " oTransitionEnd";
            u = "oTransition"
        }
        if (!("onanimationend" in window))if ("onwebkitanimationend" in window) {
            d += " webkitAnimationEnd";
            f = "webkitAnimation"
        } else if ("onoanimationend" in a.tNode) {
            d += " oAnimationEnd";
            f = "oAnimation"
        }
        o.inject = function (e, t, i, n) {
            n = n || r.noop;
            if (Array.isArray(e)) {
                var s = a.fragment();
                var o = 0;
                for (var l = 0, c = e.length; l < c; l++)s.appendChild(e[l]);
                a.inject(s, t, i);
                var d = function () {
                    o++;
                    if (o === c)n()
                };
                if (c === o)n();
                for (l = 0; l < c; l++)if (e[l].onenter)e[l].onenter(d); else d()
            } else {
                a.inject(e, t, i);
                if (e.onenter)e.onenter(n); else n()
            }
        };
        o.remove = function (e, t) {
            t = t || r.noop;
            if (e.onleave)e.onleave(function () {
                a.remove(e)
            }); else {
                a.remove(e);
                t && t()
            }
        };
        o.startClassAnimate = function (e, t, i, s) {
            var o, u, f, _;
            if (!d && !c || l.isRunning)return i();
            _ = r.once(function h() {
                if (f)clearTimeout(f);
                if (2 === s)a.delClass(e, o);
                if (3 !== s)a.delClass(e, t);
                a.off(e, d, _);
                a.off(e, c, _);
                i()
            });
            if (2 === s) {
                a.addClass(e, t);
                o = t.split(/\s+/).map(function (e) {
                    return e + "-active"
                }).join(" ");
                a.nextReflow(function () {
                    a.addClass(e, o);
                    u = n(e);
                    f = setTimeout(_, u)
                })
            } else a.nextReflow(function () {
                a.addClass(e, t);
                u = n(e);
                f = setTimeout(_, u)
            });
            a.on(e, d, _);
            a.on(e, c, _);
            return _
        };
        o.startStyleAnimate = function (e, t, i) {
            var s, o, l;
            a.nextReflow(function () {
                a.css(e, t);
                s = n(e);
                l = setTimeout(o, s)
            });
            o = r.once(function u() {
                if (l)clearTimeout(l);
                a.off(e, d, o);
                a.off(e, c, o);
                i()
            });
            a.on(e, d, o);
            a.on(e, c, o);
            return o
        };
        i.exports = o
    });
    e.register("regularjs/src/helper/combine.js", function (e, t, i) {
        var n = t("../dom.js");
        var s = i.exports = {
            node: function (e) {
                var t, i;
                if (e.element)return e.element;
                if ("function" == typeof e.node)return e.node();
                if ("number" == typeof e.nodeType)return e;
                if (e.group)return s.node(e.group);
                if (t = e.children) {
                    if (1 === t.length)return s.node(t[0]);
                    var n = [];
                    for (var r = 0, a = t.length; r < a; r++) {
                        i = s.node(t[r]);
                        if (Array.isArray(i))n.push.apply(n, i); else n.push(i)
                    }
                    return n
                }
            }, last: function (e) {
                var t = e.children;
                if ("function" == typeof e.last)return e.last();
                if ("number" == typeof e.nodeType)return e;
                if (t && t.length)return s.last(t[t.length - 1]);
                if (e.group)return s.last(e.group); else;
            }, destroy: function (e, t) {
                if (e) {
                    if (Array.isArray(e))for (var i = 0, r = e.length; i < r; i++)s.destroy(e[i], t);
                    var a = e.children;
                    if ("function" == typeof e.destroy)return e.destroy(t);
                    if ("number" == typeof e.nodeType && t)n.remove(e);
                    if (a && a.length) {
                        s.destroy(a, !0);
                        e.children = null
                    }
                }
            }
        }
    });
    e.register("regularjs/src/helper/entities.js", function (e, t, i) {
        var n = {
            quot: 34,
            amp: 38,
            apos: 39,
            lt: 60,
            gt: 62,
            nbsp: 160,
            iexcl: 161,
            cent: 162,
            pound: 163,
            curren: 164,
            yen: 165,
            brvbar: 166,
            sect: 167,
            uml: 168,
            copy: 169,
            ordf: 170,
            laquo: 171,
            not: 172,
            shy: 173,
            reg: 174,
            macr: 175,
            deg: 176,
            plusmn: 177,
            sup2: 178,
            sup3: 179,
            acute: 180,
            micro: 181,
            para: 182,
            middot: 183,
            cedil: 184,
            sup1: 185,
            ordm: 186,
            raquo: 187,
            frac14: 188,
            frac12: 189,
            frac34: 190,
            iquest: 191,
            Agrave: 192,
            Aacute: 193,
            Acirc: 194,
            Atilde: 195,
            Auml: 196,
            Aring: 197,
            AElig: 198,
            Ccedil: 199,
            Egrave: 200,
            Eacute: 201,
            Ecirc: 202,
            Euml: 203,
            Igrave: 204,
            Iacute: 205,
            Icirc: 206,
            Iuml: 207,
            ETH: 208,
            Ntilde: 209,
            Ograve: 210,
            Oacute: 211,
            Ocirc: 212,
            Otilde: 213,
            Ouml: 214,
            times: 215,
            Oslash: 216,
            Ugrave: 217,
            Uacute: 218,
            Ucirc: 219,
            Uuml: 220,
            Yacute: 221,
            THORN: 222,
            szlig: 223,
            agrave: 224,
            aacute: 225,
            acirc: 226,
            atilde: 227,
            auml: 228,
            aring: 229,
            aelig: 230,
            ccedil: 231,
            egrave: 232,
            eacute: 233,
            ecirc: 234,
            euml: 235,
            igrave: 236,
            iacute: 237,
            icirc: 238,
            iuml: 239,
            eth: 240,
            ntilde: 241,
            ograve: 242,
            oacute: 243,
            ocirc: 244,
            otilde: 245,
            ouml: 246,
            divide: 247,
            oslash: 248,
            ugrave: 249,
            uacute: 250,
            ucirc: 251,
            uuml: 252,
            yacute: 253,
            thorn: 254,
            yuml: 255,
            fnof: 402,
            Alpha: 913,
            Beta: 914,
            Gamma: 915,
            Delta: 916,
            Epsilon: 917,
            Zeta: 918,
            Eta: 919,
            Theta: 920,
            Iota: 921,
            Kappa: 922,
            Lambda: 923,
            Mu: 924,
            Nu: 925,
            Xi: 926,
            Omicron: 927,
            Pi: 928,
            Rho: 929,
            Sigma: 931,
            Tau: 932,
            Upsilon: 933,
            Phi: 934,
            Chi: 935,
            Psi: 936,
            Omega: 937,
            alpha: 945,
            beta: 946,
            gamma: 947,
            delta: 948,
            epsilon: 949,
            zeta: 950,
            eta: 951,
            theta: 952,
            iota: 953,
            kappa: 954,
            lambda: 955,
            mu: 956,
            nu: 957,
            xi: 958,
            omicron: 959,
            pi: 960,
            rho: 961,
            sigmaf: 962,
            sigma: 963,
            tau: 964,
            upsilon: 965,
            phi: 966,
            chi: 967,
            psi: 968,
            omega: 969,
            thetasym: 977,
            upsih: 978,
            piv: 982,
            bull: 8226,
            hellip: 8230,
            prime: 8242,
            Prime: 8243,
            oline: 8254,
            frasl: 8260,
            weierp: 8472,
            image: 8465,
            real: 8476,
            trade: 8482,
            alefsym: 8501,
            larr: 8592,
            uarr: 8593,
            rarr: 8594,
            darr: 8595,
            harr: 8596,
            crarr: 8629,
            lArr: 8656,
            uArr: 8657,
            rArr: 8658,
            dArr: 8659,
            hArr: 8660,
            forall: 8704,
            part: 8706,
            exist: 8707,
            empty: 8709,
            nabla: 8711,
            isin: 8712,
            notin: 8713,
            ni: 8715,
            prod: 8719,
            sum: 8721,
            minus: 8722,
            lowast: 8727,
            radic: 8730,
            prop: 8733,
            infin: 8734,
            ang: 8736,
            and: 8743,
            or: 8744,
            cap: 8745,
            cup: 8746,
            "int": 8747,
            there4: 8756,
            sim: 8764,
            cong: 8773,
            asymp: 8776,
            ne: 8800,
            equiv: 8801,
            le: 8804,
            ge: 8805,
            sub: 8834,
            sup: 8835,
            nsub: 8836,
            sube: 8838,
            supe: 8839,
            oplus: 8853,
            otimes: 8855,
            perp: 8869,
            sdot: 8901,
            lceil: 8968,
            rceil: 8969,
            lfloor: 8970,
            rfloor: 8971,
            lang: 9001,
            rang: 9002,
            loz: 9674,
            spades: 9824,
            clubs: 9827,
            hearts: 9829,
            diams: 9830,
            OElig: 338,
            oelig: 339,
            Scaron: 352,
            scaron: 353,
            Yuml: 376,
            circ: 710,
            tilde: 732,
            ensp: 8194,
            emsp: 8195,
            thinsp: 8201,
            zwnj: 8204,
            zwj: 8205,
            lrm: 8206,
            rlm: 8207,
            ndash: 8211,
            mdash: 8212,
            lsquo: 8216,
            rsquo: 8217,
            sbquo: 8218,
            ldquo: 8220,
            rdquo: 8221,
            bdquo: 8222,
            dagger: 8224,
            Dagger: 8225,
            permil: 8240,
            lsaquo: 8249,
            rsaquo: 8250,
            euro: 8364
        };
        i.exports = n
    });
    e.register("regularjs/src/directive/base.js", function (e, t, i) {
        var n = t("../util.js");
        var s = t("../dom.js");
        var r = t("../helper/animate.js");
        var a = t("../Regular.js");
        t("./event.js");
        t("./form.js");
        a.directive("r-class", function (e, t) {
            this.$watch(t, function (t) {
                var i = " " + e.className.replace(/\s+/g, " ") + " ";
                for (var n in t)if (t.hasOwnProperty(n)) {
                    i = i.replace(" " + n + " ", " ");
                    if (t[n] === !0)i += n + " "
                }
                e.className = i.trim()
            }, !0)
        });
        a.directive("r-style", function (e, t) {
            this.$watch(t, function (t) {
                for (var i in t)if (t.hasOwnProperty(i))s.css(e, i, t[i])
            }, !0)
        });
        a.directive("r-hide", function (e, t) {
            var i = null, n;
            this.$watch(t, function (t) {
                var s = !!t;
                if (s !== i) {
                    i = s;
                    if (s)if (e.onleave)n = e.onleave(function () {
                        e.style.display = "none";
                        n = null
                    }); else e.style.display = "none"; else {
                        if (n)n();
                        e.style.display = "";
                        if (e.onenter)e.onenter()
                    }
                }
            })
        });
        a.directive("r-html", function (e, t) {
            this.$watch(t, function (t) {
                t = t || "";
                s.html(e, t)
            }, {force: !0})
        })
    });
    e.register("regularjs/src/directive/form.js", function (e, t, i) {
        function n(e, t) {
            function i() {
                t.set(n, this.value);
                s = !0;
                n.$update();
                s = !1
            }

            var n = this;
            var s = !1;
            this.$watch(t, function (t) {
                if (!s) {
                    var i = o.slice(e.getElementsByTagName("option"));
                    i.forEach(function (i, n) {
                        if (i.value == t)e.selectedIndex = n
                    })
                }
            });
            l.on(e, "change", i);
            if (void 0 === t.get(n) && e.value)t.set(n, e.value);
            return function r() {
                l.off(e, "change", i)
            }
        }

        function s(e, t) {
            var i = !1;
            var n = this;
            this.$watch(t, function (t) {
                if (!i)if (e.value !== t)e.value = null == t ? "" : "" + t
            });
            var s = function r(e) {
                var s = this;
                if ("cut" === e.type || "paste" === e.type)o.nextTick(function () {
                    var e = s.value;
                    t.set(n, e);
                    i = !0;
                    n.$update()
                }); else {
                    var r = s.value;
                    t.set(n, r);
                    i = !0;
                    n.$update()
                }
                i = !1
            };
            if (9 !== l.msie && "oninput" in l.tNode)e.addEventListener("input", s); else {
                l.on(e, "paste", s);
                l.on(e, "keyup", s);
                l.on(e, "cut", s);
                l.on(e, "change", s)
            }
            if (void 0 === t.get(n) && e.value)t.set(n, e.value);
            return function a() {
                if (9 !== l.msie && "oninput" in l.tNode)e.removeEventListener("input", s); else {
                    l.off(e, "paste", s);
                    l.off(e, "keyup", s);
                    l.off(e, "cut", s);
                    l.off(e, "change", s)
                }
            }
        }

        function r(e, t) {
            var i = !1;
            var n = this;
            this.$watch(t, function (t) {
                if (!i)l.attr(e, "checked", !!t)
            });
            var s = function r() {
                var e = this.checked;
                t.set(n, e);
                i = !0;
                n.$update();
                i = !1
            };
            if (t.set)l.on(e, "change", s);
            if (void 0 === t.get(n))t.set(n, !!e.checked);
            return function a() {
                if (t.set)l.off(e, "change", s)
            }
        }

        function a(e, t) {
            var i = this;
            var n = !1;
            this.$watch(t, function (t) {
                if (!n)if (t == e.value)e.checked = !0; else e.checked = !1
            });
            var s = function r() {
                var e = this.value;
                t.set(i, e);
                n = !0;
                i.$update();
                n = !1
            };
            if (t.set)l.on(e, "change", s);
            if (void 0 === t.get(i))if (e.checked)t.set(i, e.value);
            return function a() {
                if (t.set)l.off(e, "change", s)
            }
        }

        var o = t("../util.js");
        var l = t("../dom.js");
        var c = t("../Regular.js");
        var d = {text: s, select: n, checkbox: r, radio: a};
        c.directive("r-model", function (e, t) {
            var i = e.tagName.toLowerCase();
            var n = i;
            if ("input" === n)n = e.type || "text"; else if ("textarea" === n)n = "text";
            if ("string" == typeof t)t = c.expression(t);
            if (d[n])return d[n].call(this, e, t); else if ("input" === i)return d.text.call(this, e, t)
        })
    });
    e.register("regularjs/src/directive/animation.js", function (e, t, i) {
        function n(e) {
            var t = [], i = 0, n = r.noop;
            var s;
            var a = {
                type: e, start: function (e) {
                    s = r.uid();
                    if ("function" == typeof e)n = e;
                    if (i > 0)i = 0; else a.step();
                    return a.compelete
                }, compelete: function () {
                    s = null;
                    n && n();
                    n = r.noop;
                    i = 0
                }, step: function () {
                    if (t[i])t[i](a.done.bind(a, s))
                }, done: function (e) {
                    if (e === s)if (i < t.length - 1) {
                        i++;
                        a.step()
                    } else a.compelete()
                }, push: function (e) {
                    t.push(e)
                }
            };
            return a
        }

        function s(e, t) {
            function i(e) {
                u && d.push(u);
                u = n(e)
            }

            function s(e, t) {
                if (t)e()
            }

            function r(e) {
                return function () {
                    e.onenter = void 0;
                    e.onleave = void 0
                }
            }

            t = t.trim();
            var a = t.split(";"), o, c = this, d = [], u, f = [], p, m, v, g = 0, $, y, b = this;
            for (var x = 0, w = a.length; x < w; x++) {
                o = a[x];
                $ = o.split(":");
                m = $[0] && $[0].trim();
                v = $[1] && $[1].trim();
                if (m)if (m !== _)if (m !== h) {
                    var y = l.animation(m);
                    if (y && u)u.push(y.call(this, {
                        element: e,
                        done: u.done,
                        param: v
                    })); else throw"you need start with `on` or `event` in r-animation"
                } else {
                    i(v);
                    if ("leave" === v)e.onleave = u.start; else if ("enter" === v)e.onenter = u.start; else p = this._handleEvent(e, v, u.start);
                    f.push(p ? p : r(e));
                    p = null
                } else {
                    i("when");
                    this.$watch(v, s.bind(this, u.start))
                } else;
            }
            if (f.length)return function () {
                f.forEach(function (e) {
                    e()
                })
            }
        }

        var r = t("../util.js"), a = t("../helper/animate.js"), o = t("../dom.js"), l = t("../Regular.js");
        var c = /^[-\w]+(\s[-\w]+)*$/, d = /[\r\n\f ]*,[\r\n\f ]*(?=\w+\:)/, u = /^\{.*\}$/, f = /\s+/, _ = "when", h = "on", p = "then";
        l._addProtoInheritCache("animation");
        l.animation({
            wait: function (e) {
                var t = parseInt(e.param) || 0;
                return function (e) {
                    setTimeout(e, t)
                }
            }, "class": function (e) {
                var t = e.param.split(","), i = t[0] || "", n = parseInt(t[1]) || 1;
                return function (t) {
                    a.startClassAnimate(e.element, i, t, n)
                }
            }, call: function (e) {
                var t = l.expression(e.param).get, i = this;
                return function (e) {
                    t(i);
                    i.$update();
                    e()
                }
            }, emit: function (e) {
                var t = e.param;
                var i = this;
                return function (n) {
                    i.$emit(t, e);
                    n()
                }
            }, style: function (e) {
                var t = {}, i = e.param, n = i.split(","), s;
                n.forEach(function (e) {
                    e = e.trim();
                    if (e) {
                        var i = e.split(f), n = i.shift(), r = i.join(" ");
                        if (!n || !r)throw"invalid style in command: style";
                        t[n] = r;
                        s = !0
                    }
                });
                return function (i) {
                    if (s)a.startStyleAnimate(e.element, t, i); else i()
                }
            }
        });
        l.directive("r-animation", s)
    });
    e.register("regularjs/src/directive/event.js", function (e, t, i) {
        function n(e, t) {
            var i = e.target;
            for (; i && i !== r.doc;) {
                for (var n = 0, s = t.length; n < s; n++)if (t[n].element === i)t[n].fire(e);
                i = i.parentNode
            }
        }

        var s = t("../util.js");
        var r = t("../dom.js");
        var a = t("../Regular.js");
        a._addProtoInheritCache("event");
        a.event("enter", function (e, t) {
            function i(e) {
                if (13 === e.which) {
                    e.preventDefault();
                    t(e)
                }
            }

            r.on(e, "keypress", i);
            return function () {
                r.off(e, "keypress", i)
            }
        });
        a.directive(/^on-\w+$/, function (e, t, i, n) {
            if (i && t) {
                var s = i.split("-")[1];
                return this._handleEvent(e, s, t, n)
            }
        });
        a.directive(/^delegate-\w+$/, function (e, t, i, a) {
            function o(e) {
                n(e, c[d])
            }

            var l = this.$root;
            var c = l._delegates || (l._delegates = {});
            if (i && t) {
                var d = i.split("-")[1];
                var u = s.handleEvent.call(this, t, d);
                if (!c[d]) {
                    c[d] = [];
                    l.$on("$inject", function (e) {
                        var t = this.parentNode;
                        if (t)r.off(t, d, o);
                        r.on(e, d, o)
                    });
                    l.$on("$destroy", function () {
                        if (l.parentNode)r.off(l.parentNode, d, o);
                        l._delegates[d] = null
                    })
                }
                var f = {element: e, fire: u};
                c[d].push(f);
                return function () {
                    var e = c[d];
                    if (e && e.length)for (var t = 0, i = e.length; t < i; t++)if (e[t] === f)e.splice(t, 1)
                }
            }
        })
    });
    e.register("regularjs/src/module/timeout.js", function (e, t, i) {
        function n(e) {
            e.implement({
                $timeout: function (e, t) {
                    t = t || 0;
                    return setTimeout(function () {
                        e.call(this);
                        this.$update()
                    }.bind(this), t)
                }, $interval: function (e, t) {
                    t = t || 1e3 / 60;
                    return setInterval(function () {
                        e.call(this);
                        this.$update()
                    }.bind(this), t)
                }
            })
        }

        var s = t("../Regular.js");
        s.plugin("timeout", n)
    });
    e.alias("regularjs/src/index.js", "regularjs/index.js");
    if ("object" == typeof exports)module.exports = e("regularjs"); else if ("function" == typeof define && define.amd)define(function () {
        return e("regularjs")
    }); else window["Regular"] = e("regularjs")
}();
I$(179, function (e) {
    function t(e, t) {
        t = t || {};
        if ("string" == typeof e)e = o(e);
        if (!e || e.gesturify === !0)return e;
        e.gesturify = !0;
        var i = {}, n = {hold: null, swip: null}, a = {tap: 150, dbTap: 220, hold: 600, swip: 80}, l = function (e) {
            if (!e)for (var t in n)l(t); else if (n[e])clearTimeout(n[e])
        }, c = function (e) {
            if (~e.type.indexOf("touch")) {
                var t = [], i = e.touches, n = i.length;
                for (var s = 0; s < n; s++)t.push({x: i[s].pageX, y: i[s].pageY});
                return t
            } else return [{x: e.pageX, y: e.pageY}]
        }, d = function (t) {
            i.touches = t.touches || [t];
            if (i.touches && i.touches.length > 1)i.mult = !0; else i.mult = !1;
            i.startPosition = c(t);
            var s = Date.now();
            if (!i.lastTouchStart)i.lastTouchStart = s;
            n.hold = setTimeout(function () {
                if (!i.mult)if (!i.position || m(i.position[0] || i.position, i.startPosition[0] || i.startPosition).distance < 10)h(e, "hold", i.startPosition[0] || i.startPosition)
            }, a.hold);
            if (n.swip)l("swip");
            n.drag = setTimeout(function () {
                if (!i.mult) {
                    h(e, "dragstart", {x: i.startPosition[0].x, y: i.startPosition[0].y});
                    i.drag = !0
                }
            }, 100);
            n.swip = setTimeout(function () {
                if (i.position) {
                    var t = m(i.position[0] || i.position, i.startPosition[0] || i.startPosition).distance;
                    if (t > 8 && !i.mult)h(e, "swip", {
                        end: i.position[0] || i.position,
                        start: i.startPosition[0] || i.startPosition
                    });
                    i.position = null
                }
            }, a.swip)
        }, u = function (n) {
            if (t.stop)n.preventDefault();
            var s = Date.now();
            l("hold");
            if (i.touches && i.touches.length > 1)i.mult = !0; else i.mult = !1;
            i.position = null;
            l("drag");
            if (i.drag)h(e, "dragend");
            if (i.lastTouchStart && s - i.lastTouchStart < a.tap) {
                h(e, "tap", {event: n});
                if (i.lastTap)if (s - i.lastTap < a.dbTap) {
                    h(e, "dbtap");
                    i.lastTap = null
                } else i.lastTap = s; else i.lastTap = s
            }
            i.lastTouchStart = null
        }, _ = function (n) {
            if (t.stop)n.preventDefault();
            if (i.touches && i.touches.length) {
                i.position = c(n);
                if (i.drag && !i.mult)h(e, "dragmove", {
                    x: i.position[0].x - i.startPosition[0].x,
                    y: i.position[0].y - i.startPosition[0].y
                });
                if (i.mult) {
                    var s = m(i.position[0], i.position[1]);
                    var r = m(i.startPosition[0], i.startPosition[1]);
                    h(e, "transform", {scale: s.distance / r.distance, rotate: s.angle - r.angle})
                }
            }
        }, p = function (e) {
            i.position = null;
            console.log("onCancel了")
        }, m = function (e, t) {
            var i = {x: t.x - e.x, y: t.y - e.x}, n = {x: 1, y: 0};
            var a = {
                distance: s(r(e.x - t.x, 2) + r(e.y - t.y, 2)),
                angle: 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
            };
            return a
        }, v = function (e) {
            switch (e.type) {
                case"touchstart":
                    d(e);
                    break;
                case"touchend":
                    u(e);
                    break;
                case"touchmove":
                    _(e);
                    break;
                case"touchcancel":
                    p(e)
            }
        };
        f(e, "touchstart touchmove touchend touchcancel", v);
        return e
    }

    var i = {}.toString, n = [].slice, s = Math.sqrt, r = Math.pow, a = document, o = function (e) {
        return a.querySelector(e)
    }, l = function (e) {
        return a.querySelectorAll(e)
    }, c = {touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove"}, d = function (t, i, n) {
        if ("object" == e.typeOf(i))for (var s in i)d(t, s, i[s]); else t.style[i] = n
    }, u = !0, f = function (e, t, i) {
        var n, s = t.split(" ");
        if (s.length > 1)return s.forEach(function (t) {
            f(e, t, i)
        });
        e.addEventListener(t, i, !1)
    }, _ = function (e, t, i) {
        var n, s = t.split(" ");
        if (s.length > 1)s.forEach(function (t) {
            _(e, t, i)
        }); else e.removeEventListener(t, i, !1)
    }, h = function (t, i, n) {
        var i = p(i), n = n || {};
        e.extend(i, n);
        t.dispatchEvent(i)
    }, p = function (t, i) {
        var n = document.createEvent("Event");
        i && e.extend(n, i);
        n.initEvent(t, !0, !0);
        return n
    };
    return t
}, 1);
I$(255, function (e, t, i, n, s, r) {
    var a = Regular.dom;
    var o = {
        "r-lazy-model": function (e, t) {
            var i = Regular.directive("r-model"), t = this.$get(t);
            var n = i.link.call(this.$context, e, t, "r-model");
            window.app = this.$context;
            return n
        }
    };
    var l = {
        mouseenter: function (e, t, i) {
            v._$addEvent(e, "mouseenter", t);
            return function () {
                v._$delEvent(e, "mouseenter", t)
            }
        }, mouseleave: function (e, t, i) {
            v._$addEvent(e, "mouseleave", t);
            return function () {
                v._$delEvent(e, "mouseleave", t)
            }
        }, tap: function (e, t) {
            i(e);
            e.addEventListener("tap", t)
        }
    };
    return {events: l, directives: o}
}, 1, 27, 179, 150, 5, 148);
I$(49, function (e, t) {
    t.format = function (t, i) {
        return e._$format(t, i || "yyyy-MM-dd")
    };
    t.escape = e._$escape;
    t.status = function () {
        var e = ["未审核", "审核中", "审核通过", "审核拒绝"];
        return function (t) {
            return e[t] || e[0]
        }
    }();
    t.cutstr = function (e, t) {
        var i, n = 0, s = /[^\x00-\xff]/, r = "";
        for (var a = 0; a < e.length && n < t - 1; a++) {
            i = e.substr(a, 1);
            if (null == s.exec(i))n += 1; else n += 2;
            r += i
        }
        return r + "..."
    };
    t.concatObjValue = function (t, i) {
        var n = [];
        e._$forIn(t, function (e, t, i) {
            n.push(e)
        });
        return n.join(i)
    };
    t.fixed = function (t, i) {
        var n = parseFloat(t, 10), s;
        if (null == i)i = 2;
        if (e._$isNumber(n)) {
            s = e._$fixed(n, i);
            var r = s.toString();
            var a = r.indexOf(".");
            if (a < 0) {
                a = r.length;
                r += "."
            }
            for (; r.length <= a + i;)r += "0";
            return r
        } else return ""
    };
    t.fixed2 = function (t) {
        var i = parseFloat(t, 10), n;
        if (e._$isNumber(i)) {
            n = e._$fixed(i, 2);
            var s = n.toString();
            var r = s.indexOf(".");
            if (r < 0) {
                r = s.length;
                s += "."
            }
            for (; s.length <= r + 2;)s += "0";
            return s.replace(/(.\d{2})/, "<small>$1</small>")
        } else return ""
    };
    t.cutstr2 = function (e, t) {
        var i, n = 0, s = /[^\x00-\xff]/, r = "";
        var a = /1[3|5|7|8|][0-9]{9}/;
        if (a.test(e))return e.substr(0, 7) + "...";
        if (null == t)return e;
        for (var o = 0; o < e.length; o++)if (n <= t - 1) {
            i = e.substr(o, 1);
            if (null == s.exec(i))n += 1; else n += 2;
            r += i;
            if (o == e.length - 1)return e
        } else return r + "..."
    };
    return t
}, 28);
I$(257, '<div class="progress progress-fix animated" r-hide=\'!progress\' style=\'display:none\' \n  r-animation= \'on: leave;  wait: 200;class: fadeOut\'>\n  <div class="progress-bar progress-bar-striped active" \n    role="progressbar" \n    style=" background-color: {{currentColor}};width: {{percent||0}}% ;">\n  </div>\n</div>');
I$(149, function (e, t, i) {
    function n(e, t, i) {
        var n = i / 100, s = 0, r = 2 * n - 1, a = ((r * s == -1 ? r : (r + s) / (1 + r * s)) + 1) / 2, o = 1 - a, l = [parseInt(e[0] * a + t[0] * o), parseInt(e[1] * a + t[1] * o), parseInt(e[2] * a + t[2] * o)];
        return l
    }

    function s(e) {
        e = "#" === e.charAt(0) ? e.slice(1) : e;
        var t;
        if (6 === e.length)t = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)]; else {
            var i = e.substr(0, 1);
            var n = e.substr(1, 1);
            var s = e.substr(2, 1);
            t = [parseInt(i + i, 16), parseInt(n + n, 16), parseInt(s + s, 16)]
        }
        return t
    }

    var r = {
        ERROR: s(i.COLOR_DANGER), COMPLETE: s(i.COLOR_SUCCESS)
    };
    var a = Regular.extend({
        template: e,
        data: {startColor: s(i.COLOR_INFO), endColor: r.COMPLETE, percent: 0},
        computed: {
            currentColor: function (e) {
                var t = n(e.startColor, e.endColor, 100 - e.percent);
                return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
            }
        },
        init: function () {
            if (this.$root == this)this.$inject(document.body)
        },
        move: function (e) {
            clearTimeout(this.timer);
            if (1e3 === e)this.end(!0); else this.$update("percent", e)
        },
        start: function () {
            if (this.timer)clearTimeout(this.timer);
            this.data.progress = !0;
            this.data.percent = 2;
            this.data.endColor = r.COMPLETE;
            this.$update();
            this._startTimer()
        },
        end: function (e) {
            clearTimeout(this.timer);
            this.data.progress = !1;
            this.data.percent = 100;
            this.data.endColor = !e ? r.COMPLETE : r.ERROR;
            this.$update()
        },
        _startTimer: function () {
            var e = this.data;
            this.timer = this.$timeout(function () {
                e.percent = e.percent + (100 - e.percent) * (.2 * Math.random());
                this._startTimer();
                console.log(this.$get("currentColor"))
            }, 1e3 * Math.random() + 2e3)
        }
    }).use("timeout");
    return new a
}, 257, 148, 27);
I$(19, function (e, t, i, n) {
    var s = function () {
    };
    var r = function (n, r) {
        r = r || {};
        r.cookie = null != r.cookie ? r.cookie : !0;
        var a = "function" == typeof r.onerror ? r.onerror : s, o = "function" == typeof r.onload ? r.onload : s;
        if (r.progress)e.start();
        r.onload = function (t) {
            if (t && t.code >= 200 && t.code < 400) {
                e.end();
                o.apply(this, arguments)
            } else {
                e.end(!0);
                a.apply(this, arguments)
            }
        };
        r.onerror = function (t) {
            e.end(!0);
            a.apply(this, arguments)
        };
        if (!r.method || "get" == r.method.toLowerCase()) {
            r.data = r.data || {};
            r.data.t = +new Date
        }
        if (r.norest)i._$request(n, r); else t._$request(n, r)
    };
    return r
}, 149, 130, 150, 27);
I$(140, function (e, t, i, n, s, r) {
    var a = Regular.util.slice, o = Regular.dom.msie, l = function () {
    }, c = {BEGIN: "{{", END: "}}"};
    if (Regular.config)Regular.config(c);
    var d = function () {
        function e(e) {
            var t = e.attributes, i = t && t.length, n, s = [];
            if (i)for (var r = 0; r < i; r++)if (!o || o > 8 || t[r].specified) {
                n = t[r];
                s.push(n)
            }
            return s
        }

        function t(e) {
            var t = n.exec(e);
            return t && t[1]
        }

        function i(e) {
            var t = s.exec(e);
            return t && t[1] && Regular.expression(t[1])
        }

        var n = /^on-(\w+)$/, s = new RegExp("^" + c.BEGIN + "(.*)" + c.END + "$");
        return {getAttrs: e, getEventName: t, getExpression: i}
    }();
    var u = Regular.extend({
        scope: Regular, init: function _() {
            var e = this.scope;
            this._initComponents(e._components)
        }, _initComponents: function (e) {
            var t;
            for (var i in e) {
                t = e[i];
                if (t)this._initComponent(i, t)
            }
        }, _initDirective: function () {
        }, _initComponent: function (e, t) {
            var i = this.container || document.body;
            var n = a(i.getElementsByTagName(e));
            n.forEach(this._initTag.bind(this, t))
        }, _initTag: function (e, t) {
            var i = d.getAttrs(t);
            var n = {}, s = {}, r = {}, a = this;
            i.forEach(function (e) {
                var t = e.value, i = e.name, o, l;
                l = d.getEventName(i);
                if (!l) {
                    o = d.getExpression(t);
                    if (!o)n[i] = t; else {
                        r[i] = o;
                        n[i] = o.get(a)
                    }
                } else s[l] = Regular.util.handleEvent.call(a, t, l)
            });
            var o = new e({data: n, events: s, $parent: this});
            o.$bind(this, r);
            o.$inject(t, "after");
            t.parentNode.removeChild(t)
        }
    });
    Regular.dom.find = function (e) {
        return nes.one(e)
    };
    var f = Regular.extend({
        $request: function (e, t) {
            function i() {
                n.$update("loading", !1);
                n.$emit("loaded")
            }

            var n = this;
            var s = t.onerror || l, a = t.onload || l;
            n.$update("loading", !0);
            t.onload = a._$aop(null, i).bind(this);
            t.onerror = s._$aop(null, i).bind(this);
            r(e, t)
        }
    }).directive(n.directives || {}).event(n.events || {}).filter(s || {});
    f.boot = function (e) {
        new u({scope: f, data: e || window.__data__ || {}})
    };
    return f
}, 148, 1, 50, 255, 49, 19);
I$(321, function (e, t, i, n, s, r, a, o, l, c) {
    var d, u = 6e4;
    a._$$LoaderAbstract = t._$klass();
    d = a._$$LoaderAbstract._$extend(r._$$EventTarget);
    d.__init = function () {
        this.__super();
        this.__qopt = {onerror: this.__onQueueError._$bind(this), onload: this.__onQueueLoaded._$bind(this)};
        if (!this.constructor.__cache)this.constructor.__cache = {loaded: {}}
    };
    d.__reset = function (e) {
        this.__super(e);
        this.__version = e.version;
        this.__timeout = e.timeout;
        this.__qopt.version = this.__version;
        this.__qopt.timeout = this.__timeout
    };
    d.__delLoadData = function (e) {
        delete this.constructor.__cache[e]
    };
    d.__getLoadData = function (e) {
        return this.constructor.__cache[e]
    };
    d.__setLoadData = function (e, t) {
        this.constructor.__cache[e] = t
    };
    d.__getRequest = l;
    d.__doClearRequest = function (e) {
        n._$clearEvent(e)
    };
    d.__doRequest = function (e) {
        e.src = this.__url;
        document.head.appendChild(e)
    };
    d.__doClear = function () {
        var e = this.__getLoadData(this.__url);
        if (e) {
            window.clearTimeout(e.timer);
            this.__doClearRequest(e.request);
            delete e.bind;
            delete e.timer;
            delete e.request;
            this.__delLoadData(this.__url);
            this.__getLoadData("loaded")[this.__url] = !0
        }
    };
    d.__doCallback = function (e) {
        var t = this.__getLoadData(this.__url);
        if (t) {
            var i = t.bind;
            this.__doClear();
            if (i && i.length > 0) {
                var n;
                for (; i.length;) {
                    n = i.shift();
                    try {
                        n._$dispatchEvent(e, arguments[1])
                    } catch (s) {
                        if (!1)throw s;
                        console.error(s.message);
                        console.error(s.stack)
                    }
                    n._$recycle()
                }
            }
        }
    };
    d.__onError = function (e) {
        this.__doCallback("onerror", e)
    };
    d.__onLoaded = function () {
        this.__doCallback("onload")
    };
    d.__doLoadQueue = function (e) {
        this.constructor._$allocate(this.__qopt)._$load(e)
    };
    d.__onQueueCheck = function (e) {
        var t = this.__getLoadData(this.__key);
        if (t) {
            if (e)t.error++;
            t.loaded++;
            if (!(t.loaded < t.total)) {
                this.__delLoadData(this.__key);
                this._$dispatchEvent(t.error > 0 ? "onerror" : "onload")
            }
        }
    };
    d.__onQueueError = function (e) {
        this.__onQueueCheck(!0)
    };
    d.__onQueueLoaded = function () {
        this.__onQueueCheck()
    };
    d._$load = function (e) {
        e = s._$absolute(e);
        if (e) {
            this.__url = e;
            if (this.__version)this.__url += (this.__url.indexOf("?") < 0 ? "?" : "&") + this.__version;
            if (!this.__getLoadData("loaded")[this.__url]) {
                var t = this.__getLoadData(this.__url), r;
                if (t) {
                    t.bind.unshift(this);
                    t.timer = window.clearTimeout(t.timer)
                } else {
                    r = this.__getRequest();
                    t = {request: r, bind: [this]};
                    this.__setLoadData(this.__url, t);
                    n._$addEvent(r, "load", this.__onLoaded._$bind(this));
                    n._$addEvent(r, "error", this.__onError._$bind(this, {
                        code: i._$CODE_ERRSERV,
                        message: "无法加载指定资源文件[" + this.__url + "]！"
                    }))
                }
                if (0 != this.__timeout)t.timer = window.setTimeout(this.__onError._$bind(this, {
                    code: i._$CODE_TIMEOUT,
                    message: "指定资源文件[" + this.__url + "]载入超时！"
                }), this.__timeout || u);
                if (r)this.__doRequest(r);
                this._$dispatchEvent("onloading")
            } else {
                try {
                    this._$dispatchEvent("onload")
                } catch (a) {
                    if (!1)throw a;
                    console.error(a.message);
                    console.error(a.stack)
                }
                this._$recycle()
            }
        } else this._$dispatchEvent("onerror", {code: i._$CODE_NOTASGN, message: "请指定要载入的资源地址！"})
    };
    d._$queue = function (e) {
        if (e && e.length) {
            this.__key = s._$uniqueID();
            var t = {error: 0, loaded: 0, total: e.length};
            this.__setLoadData(this.__key, t);
            s._$forEach(e, function (e, i) {
                if (e)this.__doLoadQueue(e); else t.total--
            }, this);
            this._$dispatchEvent("onloading")
        } else this._$dispatchEvent("onerror", {code: i._$CODE_NOTASGN, message: "请指定要载入的资源队列！"})
    };
    return a
}, 132, 2, 135, 5, 28, 4);
I$(296, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$LoaderText = t._$klass();
    l = s._$$LoaderText._$extend(e._$$LoaderAbstract);
    l.__getRequest = function () {
        return null
    };
    l.__doRequest = function () {
        n._$request(this.__url, {
            method: "GET",
            type: "text",
            onload: this.__onLoaded._$bind(this),
            onerror: this.__onError._$bind(this)
        })
    };
    l.__onLoaded = function (e) {
        this.__doCallback("onload", {url: this.__url, content: e})
    };
    return s
}, 321, 2, 3, 150);
I$(335, function (e, t, i, n, s) {
    t.__removeIFrameKeepHistory = function (t) {
        e._$remove(t)
    };
    return t
}, 3);
I$(322, function (e, t, i, n, s, r, a) {
    return e
}, 335, 3, 249);
I$(297, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$LoaderHtml = t._$klass();
    l = s._$$LoaderHtml._$extend(e._$$LoaderAbstract);
    l.__getRequest = function () {
        var e = i._$create("iframe");
        e.width = 0;
        e.height = 0;
        e.style.display = "none";
        return e
    };
    l.__doRequest = function (e) {
        try {
            document.body.appendChild(e);
            e.src = this.__url
        } catch (t) {
            console.log(e);
            console.error(t)
        }
    };
    l.__onError = function (e) {
        var t = (this.__getLoadData(this.__url) || r).request;
        this.__doCallback("onerror", e);
        n.__removeIFrameKeepHistory(t)
    };
    l.__onLoaded = function () {
        var e = null, t = (this.__getLoadData(this.__url) || r).request;
        try {
            if (t.src != this.__url)return;
            e = t.contentWindow.document.body
        } catch (i) {
        }
        this.__doCallback("onload", e);
        n.__removeIFrameKeepHistory(t)
    };
    return s
}, 321, 2, 3, 322);
I$(298, function (e, t, i, n, s, r, a) {
    var o;
    n._$$LoaderStyle = t._$klass();
    o = n._$$LoaderStyle._$extend(e._$$LoaderAbstract);
    o.__getRequest = function () {
        return i._$create("link")
    };
    o.__doRequest = function (e) {
        e.href = this.__url;
        document.head.appendChild(e)
    };
    return n
}, 321, 2, 3);
I$(299, function (e, t, i, n, s, r, a) {
    var o;
    n._$$LoaderScript = t._$klass();
    o = n._$$LoaderScript._$extend(e._$$LoaderAbstract);
    o.__reset = function (e) {
        this.__super(e);
        this.__async = e.async;
        this.__charset = e.charset;
        this.__qopt.async = !1;
        this.__qopt.charset = this.__charset
    };
    o.__getRequest = function () {
        var e = i._$create("script");
        if (null != this.__async)e.async = !!this.__async;
        if (null != this.__charset)e.charset = this.__charset;
        return e
    };
    o.__doClearRequest = function (e) {
        i._$remove(e)
    };
    return n
}, 321, 2, 3);
I$(244, function (e, t, i, n, s, r, a, o, l) {
    r._$loadScript = function (e, t) {
        s._$$LoaderScript._$allocate(t)._$load(e)
    };
    r._$queueScript = function (e, t) {
        s._$$LoaderScript._$allocate(t)._$queue(e)
    };
    r._$loadStyle = function (e, t) {
        n._$$LoaderStyle._$allocate(t)._$load(e)
    };
    r._$queueStyle = function (e, t) {
        n._$$LoaderStyle._$allocate(t)._$queue(e)
    };
    r._$loadHtml = function (e, t) {
        i._$$LoaderHtml._$allocate(t)._$load(e)
    };
    r._$loadText = function (e, i) {
        t._$$LoaderText._$allocate(i)._$load(e)
    };
    if (!0)e.copy(e.P("nej.j"), r);
    return r
}, 132, 296, 297, 298, 299);
I$(118, function (e, t, i, n, s, r, a, o, l, c, d, u, f) {
    var _ = {}, h = +new Date + "-";
    c._$parseTemplate = function () {
        var e = 0;
        var l = function () {
            if (!(e > 0)) {
                e = 0;
                i._$dispatchEvent(document, "templateready");
                i._$clearEvent(document, "templateready")
            }
        };
        var u = function (e, i) {
            var s = n._$dataset(e, "src");
            if (s) {
                i = i || d;
                var r = i.root;
                if (!r)r = e.ownerDocument.location.href; else r = t._$absolute(r);
                s = s.split(",");
                t._$forEach(s, function (e, i, n) {
                    n[i] = t._$absolute(e, r)
                });
                return s
            }
        };
        var f = function (e, t) {
            if (e) {
                var i = u(e, t);
                if (i)a._$queueStyle(i, {version: n._$dataset(e, "version")});
                n._$addStyle(e.value)
            }
        };
        var _ = function (t) {
            e--;
            n._$addScript(t);
            l()
        };
        var h = function (t, i) {
            if (t) {
                var s = u(t, i), r = t.value;
                if (!s)n._$addScript(r); else {
                    e++;
                    var i = {version: n._$dataset(t, "version"), onload: _._$bind(null, r)};
                    window.setTimeout(a._$queueScript._$bind(a, s, i), 0)
                }
            }
        };
        var p = function (t) {
            e--;
            c._$parseTemplate(t);
            l()
        };
        var m = function (t, i) {
            if (t) {
                var s = u(t, i)[0];
                if (s) {
                    e++;
                    var i = {version: n._$dataset(t, "version"), onload: p};
                    window.setTimeout(a._$loadHtml._$bind(a, s, i), 0)
                }
            }
        };
        var v = function (t, i) {
            e--;
            c._$addTextTemplate(t, i || "");
            l()
        };
        var g = function (t, i) {
            if (t && t.id) {
                var s = t.id, r = u(t, i)[0];
                if (r) {
                    e++;
                    var a = r + (r.indexOf("?") < 0 ? "?" : "&") + (n._$dataset(t, "version") || ""), i = {
                        type: "text",
                        method: "GET",
                        onload: v._$bind(null, s)
                    };
                    window.setTimeout(o._$request._$bind(o, a, i), 0)
                }
            }
        };
        var $ = function (e, t) {
            var i = e.name.toLowerCase();
            switch (i) {
                case"jst":
                    s._$add(e, !0);
                    return;
                case"txt":
                    c._$addTextTemplate(e.id, e.value || "");
                    return;
                case"ntp":
                    c._$addNodeTemplate(e.value || "", e.id);
                    return;
                case"js":
                    h(e, t);
                    return;
                case"css":
                    f(e, t);
                    return;
                case"html":
                    m(e, t);
                    return;
                case"res":
                    g(e, t);
                    return
            }
        };
        r._$$CustomEvent._$allocate({element: document, event: "templateready", oneventadd: l});
        return function (e, i) {
            e = n._$get(e);
            if (e) {
                var s = "TEXTAREA" == e.tagName ? [e] : t._$object2array(e.getElementsByTagName("textarea"));
                t._$forEach(s, function (e) {
                    $(e, i)
                });
                n._$remove(e, !0)
            }
            l()
        }
    }();
    c._$addTextTemplate = function (e, t) {
        _[e] = t || ""
    };
    c._$getTextTemplate = function (e) {
        return _[e] || ""
    };
    c._$addNodeTemplate = function (e, i) {
        i = i || t._$uniqueID();
        e = n._$get(e) || e;
        c._$addTextTemplate(h + i, e);
        if (!t._$isString(e))n._$removeByEC(e);
        return i
    };
    c._$getNodeTemplate = function (e) {
        if (!e)return null;
        e = h + e;
        var i = c._$getTextTemplate(e);
        if (!i)return null;
        if (t._$isString(i)) {
            i = n._$html2node(i);
            c._$addTextTemplate(e, i)
        }
        var s = i.cloneNode(!0);
        n._$removeByEC(s);
        return s
    };
    c._$getItemTemplate = function () {
        var e = function (e, t) {
            return "offset" == t || "limit" == t
        };
        return function (i, n, s) {
            var r = [];
            if (!i || !i.length || !n)return r;
            s = s || d;
            var a = i.length, o = parseInt(s.offset) || 0, l = Math.min(a, o + (parseInt(s.limit) || a)), c = {
                total: i.length,
                range: [o, l]
            };
            t._$merge(c, s, e);
            for (var u = o, f; u < l; u++) {
                c.index = u;
                c.data = i[u];
                f = n._$allocate(c);
                var h = f._$getId();
                _[h] = f;
                f._$recycle = f._$recycle._$aop(function (e, t) {
                    delete _[e];
                    delete t._$recycle
                }._$bind(null, h, f));
                r.push(f)
            }
            return r
        }
    }();
    c._$getItemById = function (e) {
        return _[e]
    };
    c._$parseUITemplate = function () {
        var e = /#<(.+?)>/;
        return function (i, s) {
            s = s || {};
            var r = n._$html2node(i);
            t._$forIn(r.getElementsByTagName("textarea"), function (i) {
                i.id = (i.id || "").replace(e, function (e, i) {
                    var n = s[i];
                    if (!n) {
                        n = "tpl-" + t._$uniqueID();
                        s[i] = n
                    }
                    return n
                })
            });
            c._$parseTemplate(r);
            return s
        }
    }();
    l._$merge({_$parseTemplate: c._$parseTemplate, _$addNodeTemplate: c._$addNodeTemplate});
    if (!0)e.copy(e.P("nej.e"), c);
    return c
}, 132, 28, 5, 3, 29, 243, 244, 150, 133);
I$(141, function (e, t, i, n, s, r, a, o) {
    n._$$LazyImage = e._$klass();
    o = n._$$LazyImage._$extend(i._$$LazyImage);
    o.__reset = function (e) {
        e.attr = "src,axis";
        this.__super(e)
    };
    o.__doCheckResource = function (e, i) {
        var n = i.clientHeight, s = -n, r = 2 * n, a = t._$offset(e, i).y - i.scrollTop, o = a + e.offsetHeight, l = this.__getSettingInfo(e), c = !e.src || e.src.indexOf(this.__holder) >= 0 || e.src.indexOf(l.src) < 0;
        if (c && s <= o && a <= r)return 1; else return 0
    };
    o.__doAppendResource = function (e, t) {
        var i = this.__holder;
        if (t.src) {
            i = t.src;
            if (i.indexOf("paopao.nosdn.127.net") >= 0 && i.indexOf("?") < 0)i += "?imageView&quality=85"
        }
        e.src = i;
        if (e.src != this.__holder);
    }
}, 2, 3, 137);
I$(39, function (e, t, i, n) {
    var s = navigator.userAgent;
    var r = !!s.match(/(iPhone|iPod|iPad)/i);
    var a = !!s.match(/Android/i);
    var o = !!s.match(/Windows Phone/i);
    var l = !r && !a && !o;
    var c = {IOS: r, AOS: a, WinPhone: o, PC: l};
    var d = window["DOWNLINK"] || "/download";
    var u = {
        __IOSOpenUrl: "vstore://",
        __AOSOpenUrl: "vstoreandroid://",
        __getUrl: d,
        __jumpUrl: d,
        __openApp: function (e, t) {
            var i = document.createElement("iframe");
            i.src = e;
            i.style.display = "none";
            document.body.appendChild(i);
            setTimeout(function () {
                t();
                document.body.removeChild(i)
            }, 1e3)
        },
        _$platform: function () {
            for (var e in c)if (c[e])return e
        }(),
        _$isApp: function () {
            return !!s.match(/vstore/i)
        },
        _$login: function () {
            var e = function (e) {
                var t = document.cookie, i = "\\b" + e + "=", n = t.search(i);
                return n < 0 ? !1 : !0
            };
            var t = e("S_INFO") || e("S_OINFO");
            if (!t)if (this._$isApp())window.location.href = "vstore-bridge-login://m.xiupin.com?callback=__vstore_login_done"; else window.location.href = "http://m.xiupin.com/login?redirectURL=" + window.location.href
        },
        _$open: function (e, t, i) {
        }
    };
    return u
});
I$(159, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$Abstract = t._$klass();
    d = a._$$Abstract._$extend(s._$$EventTarget);
    d.__init = function () {
        this.__super();
        i._$dumpCSSText();
        this.__initXGui();
        this.__initNode()
    };
    d.__reset = function (e) {
        this.__super(e);
        this.__doInitClass(e.clazz);
        this._$appendTo(e.parent)
    };
    d.__destroy = function () {
        this.__super();
        this.__doDelParentClass();
        delete this.__parent;
        i._$removeByEC(this.__body);
        i._$delClassName(this.__body, this.__class);
        delete this.__class
    };
    d.__initXGui = l;
    d.__initNode = function () {
        if (!this.__seed_html)this.__initNodeTemplate();
        this.__body = r._$getNodeTemplate(this.__seed_html);
        if (!this.__body)this.__body = i._$create("div", this.__seed_css);
        i._$addClassName(this.__body, this.__seed_css)
    };
    d.__initNodeTemplate = l;
    d.__doInitClass = function (e) {
        this.__class = e || "";
        i._$addClassName(this.__body, this.__class)
    };
    d.__doAddParentClass = function () {
        if (this.__seed_css) {
            var e = this.__seed_css.split(/\s+/);
            i._$addClassName(this.__parent, e.pop() + "-parent")
        }
    };
    d.__doDelParentClass = function () {
        if (this.__seed_css) {
            var e = this.__seed_css.split(/\s+/);
            i._$delClassName(this.__parent, e.pop() + "-parent")
        }
    };
    d._$getBody = function () {
        return this.__body
    };
    d._$appendTo = function (e) {
        if (this.__body) {
            this.__doDelParentClass();
            if (n._$isFunction(e))this.__parent = e(this.__body); else {
                this.__parent = i._$get(e);
                if (this.__parent)this.__parent.appendChild(this.__body)
            }
            this.__doAddParentClass()
        }
    };
    d._$show = function () {
        if (this.__parent && this.__body && this.__body.parentNode != this.__parent)this.__parent.appendChild(this.__body)
    };
    d._$hide = function () {
        i._$removeByEC(this.__body)
    };
    if (!0)e.copy(e.P("nej.ui"), a);
    return a
}, 132, 2, 3, 28, 4, 118);
I$(301, ".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(#<blankimage>);}");
I$(256, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u, f = n._$pushCSSText(a, {blankimage: i._$BLANK_IMAGE});
    o._$$Mask = t._$klass();
    u = o._$$Mask._$extend(r._$$Abstract);
    u.__reset = function (e) {
        this.__super(e);
        var t = e.content || "&nbsp;";
        s._$isString(t) ? this.__body.innerHTML = t : this.__body.appendChild(t)
    };
    u.__destroy = function () {
        this.__super();
        this.__body.innerHTML = "&nbsp;"
    };
    u.__initXGui = function () {
        this.__seed_css = f
    };
    u._$show = function () {
        n._$fullScreen(this.__body);
        this.__super()
    };
    if (!0)e.copy(e.P("nej.ui"), o);
    return o
}, 132, 2, 135, 3, 28, 159, 301);
I$(145, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$AnimEaseInOut = t._$klass();
    l = s._$$AnimEaseInOut._$extend(n._$$AnimBezier);
    l.__reset = function (e) {
        e = i._$merge({}, e);
        e.timing = "easeinout";
        this.__super(e)
    };
    if (!0)e.copy(e.P("nej.ut"), s);
    return s
}, 132, 2, 28, 252);
I$(142, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p) {
    u._$$FrmTopBar = e._$klass();
    p = u._$$FrmTopBar._$extend(n._$$EventTarget);
    p.__reset = function (e) {
        this.__super(e);
        this.__menupop = s._$get("menupop");
        this.__topbar = s._$get("topbar-box");
        this.__header = s._$get("paopao-header");
        this.__goTop = s._$get("gotop");
        this.__doInitDomEvent([["menu", "click", this.__onMenuClick._$bind(this)], [document, "click", this.__onHideMenuCard._$bind(this)], ["closedld", "click", this.__onDownloadCloseClick._$bind(this)], [window, "scroll", this.__onWindowScroll._$bind(this)], [this.__goTop, "click", this.__onGotopClick._$bind(this)]]);
        document.body.style.cursor = "pointer";
        if (r.isLogin());
        this.__onWindowScroll()
    };
    p.__initDownload = function () {
        console.log(this.__header.className);
        try {
            if (!localStorage.getItem("isDownloadHide"))console.log("isDownloadHide:null"); else console.log(localStorage.getItem("isDownloadHide"))
        } catch (e) {
            console.log(e)
        }
        if (!localStorage.getItem("isDownloadHide")) {
            console.log("remove hdhide");
            s._$delClassName(this.__header, "hdhide")
        }
    };
    p.__onMenuClick = function (e) {
        a._$stop(e);
        if (s._$hasClassName(this.__menupop, "show"))this.__onHideMenuCard(); else {
            s._$addClassName(this.__menupop, "show");
            this.__mask = c._$$Mask._$allocate({parent: document.body, clazz: "m-mask"});
            this.__mask._$show()
        }
    };
    p.__onDownloadCloseClick = function () {
        s._$addClassName(this.__header, "hdhide");
        localStorage.setItem("isDownloadHide", "1")
    };
    p.__onHideMenuCard = function () {
        if (this.__mask)this.__mask = this.__mask._$recycle();
        s._$delClassName(this.__menupop, "show")
    };
    p.__onDownloadBtnClick = function () {
        this._$open()
    };
    p._$setPage = function (e) {
        this.__appOption = e
    };
    p._$open = function (e) {
        l._$open(this.__appOption)
    };
    p.__onWindowScroll = function () {
        if (document.body.scrollTop - window.innerHeight > 0) {
            if (!s._$hasClassName(this.__goTop, "show"))s._$addClassName(this.__goTop, "show")
        } else s._$delClassName(this.__goTop, "show")
    };
    p.__onGotopClick = function () {
        var e = document.body.scrollTop;
        this.__animation = d._$$AnimEaseInOut._$allocate({
            from: {offset: e},
            to: {offset: 0},
            duration: 500,
            onupdate: function (e) {
                document.body.scrollTop = e.offset
            },
            onstop: function () {
                this.__animation._$recycle()
            }._$bind(this)
        });
        this.__animation._$play()
    };
    return u
}, 2, 28, 27, 4, 3, 1, 5, 19, 39, 256, 145);
I$(143, function (e, t, i, n, s, r, a) {
    i._$$FrmBanner = e._$klass();
    a = i._$$FrmBanner._$extend(t._$$EventTarget);
    a.__reset = function (e) {
        this.__super(e);
        this.__body = e.parent
    };
    return i
}, 2, 4);
I$(152, '<div class="u-cart-count j-cart-count displaynone-{{cartCount}}">\n    <span class="count-normal">{{cartCount}}</span>\n    <ul class="count-more"><li></li><li></li><li></li></ul>\n</div>');
I$(147, '<!-- notify modal -->\n<div class="m-notify {{clazz}}" r-hide={{isHide}} >\n  <!-- <i class="placeholder {{this.iconMap[type]}}"></i> -->\n  <div class="text">{{message}}</div>\n</div>');
I$(20, function (e, t, i, n) {
    var s = Regular.extend({
        template: e,
        duration: 2e3,
        iconMap: {success: "u-ok", fail: "u-fail", error: "u-fail", warning: "u-warning"},
        config: function (e) {
            i.extend(e, {messages: "", isHide: !0, type: "", clazz: "hide"})
        },
        init: function () {
            if (this.$root == this)this.$inject(document.body)
        },
        notify: function (e, t) {
            if (e && "object" == typeof e) {
                t = e.type;
                e = e.message
            }
            this.data.isHide = !1;
            this.data.message = e;
            this.data.type = t || "success";
            this.$update();
            var i = this.clear.bind(this, e);
            this.$timeout(function () {
                this.data.clazz = "show"
            }._$bind(this), 0);
            this.$update();
            if (this.__timer)clearInterval(this.__timer);
            this.__timer = this.$timeout(i, this.duration == -1 ? 36e8 : this.duration);
            return i
        },
        show: function (e, t) {
            return this.notify(e, t)
        },
        showError: function (e, t) {
            t = i.extend(t || {}, {type: "error"});
            return this.show(e, t)
        },
        clear: function (e) {
            this.data.clazz = "hide";
            this.$update();
            this.$timeout(function () {
                this.data.isHide = !0;
            }._$bind(this), 500)
        }
    }).use("timeout");
    var r = new s({});
    r.Notify = s;
    return r
}, 147, 148, 1, 27);
I$(22, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u = function () {
        var s = void 0;
        var r = e.extend({
            urlMap: {CARTCOUNT: "/cart/numberOfSkuCounts"}, template: t, config: function (e) {
                this.$on("getCartCount", this.getCartCount._$bind(this))
            }, init: function () {
                var e = this.data;
                this._parent = n._$get("j-cart-parent");
                if (this._parent)if (i.isLogin())this.getCartCount(); else this.$update("cartCount", 0)
            }, getCartCount: function () {
                var e = this.data;
                this.$request(this.urlMap["CARTCOUNT"], {
                    method: "GET", onload: function (e) {
                        this.$inject(this._parent);
                        if (e.result > 99)n._$addClassName(nes.one(".j-cart-count"), "more"); else this.$update("cartCount", e.result || 0)
                    }._$bind(this), onerror: function (e) {
                    }._$bind(this)
                })
            }
        });
        return {
            getInstance: function () {
                if (!s)s = new r;
                return s
            }
        }
    }();
    return u
}, 140, 152, 1, 3, 5, 28, 20);
I$(153, '<div class="u-cart-count j-cart-count displaynone-{{cartCount}}">\n    <span class="count-normal">{{cartCount}}</span>\n    <ul class="count-more"><li></li><li></li><li></li></ul>\n</div>');
I$(23, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u = function () {
        var s = void 0;
        var r = e.extend({
            urlMap: {CARTCOUNT: "/cart/numberOfSkuCounts"},
            baseParam: {isJoy: !0},
            template: t,
            config: function (e) {
                this.$on("getCartCount", this.getCartCount._$bind(this))
            },
            init: function () {
                var e = this.data;
                this._parent = n._$get(e.widgetId || "j-joycart-parent");
                if (this._parent)if (i.isLogin())this.getCartCount(); else this.$update("cartCount", 0)
            },
            getCartCount: function () {
                if (this._parent) {
                    var e = this.data;
                    this.$request(this.urlMap["CARTCOUNT"], {
                        data: i.extend({}, this.baseParam),
                        method: "GET",
                        onload: function (e) {
                            this.$inject(this._parent);
                            if (e.result > 99)n._$addClassName(nes.one(".j-cart-count"), "more"); else this.$update("cartCount", e.result || 0)
                        }._$bind(this),
                        onerror: function (e) {
                        }._$bind(this)
                    })
                }
            }
        });
        return {
            getInstance: function () {
                if (!s)s = new r;
                return s
            }
        }
    }();
    return u
}, 140, 153, 1, 3, 5, 28, 20);
I$(12, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p) {
    u._$$Module = t._$klass();
    p = u._$$Module._$extend(n._$$EventTarget);
    p.__init = function () {
        s._$parseTemplate("template-box");
        var e = i._$get("topbar-box");
        if (e)this.__topbar = a._$$FrmTopBar._$allocate({parent: e});
        if (!this.__miniCart)this.__miniCart = c.getInstance();
        if (!this.__joyCart)this.__joyCart = d.getInstance();
        this.__super()
    };
    p.__reset = function (e) {
        this.__super(e);
        if (!e.noboot)this.__hub = l.boot(e);
        if (!e.nolazy)this.__lazy = r._$$LazyImage._$allocate({
            oncheck: function (e) {
                if (!i._$hasClassName(e.target, "u-loading-1"))e.value = 0
            }, onappend: function (e) {
                var t = e.target;
                t.onload = function () {
                    if (!/^data:image\//.test(t.src))i._$setStyle(t, "backgroundImage", "none");
                    i._$delClassName(t, "u-loading-hold")
                }
            }
        })
    };
    p.__doLazyRefresh = function () {
        if (this.__lazy)this.__lazy._$refresh()
    };
    return u
}, 1, 2, 3, 4, 118, 141, 142, 143, 140, 22, 23);
I$(125, function () {
    var e = function (e, t) {
        function i(e) {
            if (document.querySelectorAll)return document.querySelectorAll(e); else return jQuery(e)
        }

        function n() {
            var e = S - N;
            if (t.freeMode)e = S - N;
            if (t.slidesPerView > T.slides.length)e = 0;
            if (e < 0)e = 0;
            return e
        }

        function s() {
            var e = 0;
            return e
        }

        function r() {
            function e(e) {
                var i = new Image;
                i.onload = function () {
                    T.imagesLoaded++;
                    if (T.imagesLoaded == T.imagesToLoad.length) {
                        T.reInit();
                        if (t.onImagesReady)t.onImagesReady(T)
                    }
                };
                i.src = e
            }

            if (!T.browser.ie10) {
                if (T.support.touch) {
                    T.h.addEventListener(T.wrapper, "touchstart", h, !1);
                    T.h.addEventListener(T.wrapper, "touchmove", p, !1);
                    T.h.addEventListener(T.wrapper, "touchend", m, !1)
                }
                if (t.simulateTouch) {
                    T.h.addEventListener(T.wrapper, "mousedown", h, !1);
                    T.h.addEventListener(document, "mousemove", p, !1);
                    T.h.addEventListener(document, "mouseup", m, !1)
                }
            } else {
                T.h.addEventListener(T.wrapper, T.touchEvents.touchStart, h, !1);
                T.h.addEventListener(document, T.touchEvents.touchMove, p, !1);
                T.h.addEventListener(document, T.touchEvents.touchEnd, m, !1)
            }
            if (t.autoResize)T.h.addEventListener(window, "resize", T.resizeFix, !1);
            a();
            T._wheelEvent = !1;
            if (t.mousewheelControl) {
                if (void 0 !== document.onmousewheel)T._wheelEvent = "mousewheel";
                try {
                    WheelEvent("wheel");
                    T._wheelEvent = "wheel"
                } catch (n) {
                }
                if (!T._wheelEvent)T._wheelEvent = "DOMMouseScroll";
                if (T._wheelEvent)T.h.addEventListener(T.container, T._wheelEvent, c, !1)
            }
            if (t.keyboardControl)T.h.addEventListener(document, "keydown", l, !1);
            if (t.updateOnImagesReady) {
                if (document.querySelectorAll)T.imagesToLoad = T.container.querySelectorAll("img"); else if (window.jQuery)T.imagesToLoad = i(T.container).find("img");
                for (var s = 0; s < T.imagesToLoad.length; s++)e(T.imagesToLoad[s].getAttribute("src"))
            }
        }

        function a() {
            if (t.preventLinks) {
                var e = [];
                if (document.querySelectorAll)e = T.container.querySelectorAll("a"); else if (window.jQuery)e = i(T.container).find("a");
                for (var n = 0; n < e.length; n++)T.h.addEventListener(e[n], "click", f, !1)
            }
            if (t.releaseFormElements) {
                var s = document.querySelectorAll ? T.container.querySelectorAll("input, textarea, select") : i(T.container).find("input, textarea, select");
                for (var n = 0; n < s.length; n++)T.h.addEventListener(s[n], T.touchEvents.touchStart, _, !0)
            }
            if (t.onSlideClick)for (var n = 0; n < T.slides.length; n++)T.h.addEventListener(T.slides[n], "click", d, !1);
            if (t.onSlideTouch)for (var n = 0; n < T.slides.length; n++)T.h.addEventListener(T.slides[n], T.touchEvents.touchStart, u, !1)
        }

        function o() {
            if (t.onSlideClick)for (var e = 0; e < T.slides.length; e++)T.h.removeEventListener(T.slides[e], "click", d, !1);
            if (t.onSlideTouch)for (var e = 0; e < T.slides.length; e++)T.h.removeEventListener(T.slides[e], T.touchEvents.touchStart, u, !1);
            if (t.releaseFormElements) {
                var n = document.querySelectorAll ? T.container.querySelectorAll("input, textarea, select") : i(T.container).find("input, textarea, select");
                for (var e = 0; e < n.length; e++)T.h.removeEventListener(n[e], T.touchEvents.touchStart, _, !0)
            }
            if (t.preventLinks) {
                var s = [];
                if (document.querySelectorAll)s = T.container.querySelectorAll("a"); else if (window.jQuery)s = i(T.container).find("a");
                for (var e = 0; e < s.length; e++)T.h.removeEventListener(s[e], "click", f, !1)
            }
        }

        function l(e) {
            var t = e.keyCode || e.charCode;
            if (37 == t || 39 == t || 38 == t || 40 == t) {
                var i = !1;
                var n = T.h.getOffset(T.container);
                var s = T.h.windowScroll().left;
                var r = T.h.windowScroll().top;
                var a = T.h.windowWidth();
                var o = T.h.windowHeight();
                var l = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]];
                for (var c = 0; c < l.length; c++) {
                    var d = l[c];
                    if (d[0] >= s && d[0] <= s + a && d[1] >= r && d[1] <= r + o)i = !0
                }
                if (!i)return
            }
            if (P) {
                if (37 == t || 39 == t)if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
                if (39 == t)T.swipeNext();
                if (37 == t)T.swipePrev()
            } else {
                if (38 == t || 40 == t)if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
                if (40 == t)T.swipeNext();
                if (38 == t)T.swipePrev()
            }
        }

        function c(e) {
            var i = T._wheelEvent;
            var s;
            if (e.detail)s = -e.detail; else if ("mousewheel" == i)s = e.wheelDelta; else if ("DOMMouseScroll" == i)s = -e.detail; else if ("wheel" == i)s = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (!t.freeMode)if (s < 0)T.swipeNext(); else T.swipePrev(); else {
                var r = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                var a, o;
                if (P) {
                    a = T.getWrapperTranslate("x") + s;
                    o = T.getWrapperTranslate("y");
                    if (a > 0)a = 0;
                    if (a < -n())a = -n()
                } else {
                    a = T.getWrapperTranslate("x");
                    o = T.getWrapperTranslate("y") + s;
                    if (o > 0)o = 0;
                    if (o < -n())o = -n()
                }
                T.setWrapperTransition(0);
                T.setWrapperTranslate(a, o, 0)
            }
            if (t.autoplay)T.stopAutoplay();
            if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
            return !1
        }

        function d(e) {
            if (T.allowSlideClick) {
                T.clickedSlide = this;
                T.clickedSlideIndex = T.slides.indexOf(this);
                t.onSlideClick(T)
            }
        }

        function u(e) {
            T.clickedSlide = this;
            T.clickedSlideIndex = T.slides.indexOf(this);
            t.onSlideTouch(T)
        }

        function f(e) {
            if (!T.allowLinks) {
                if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
                return !1
            }
        }

        function _(e) {
            if (e.stopPropagation)e.stopPropagation(); else e.returnValue = !1;
            return !1
        }

        function h(e) {
            if (t.preventLinks)T.allowLinks = !0;
            if (T.isTouched || t.onlyExternal)return !1;
            if (t.noSwiping && e.target && e.target.className && e.target.className.indexOf(t.noSwipingClass) > -1)return !1;
            T.allowMomentumBounce = !1;
            T.isTouched = !0;
            H = "touchstart" == e.type;
            if (!H || 1 == e.targetTouches.length) {
                if (t.loop)T.fixLoop();
                T.callPlugins("onTouchStartBegin");
                if (!H)if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
                var i = H ? e.targetTouches[0].pageX : e.pageX || e.clientX;
                var n = H ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                T.touches.startX = T.touches.currentX = i;
                T.touches.startY = T.touches.currentY = n;
                T.touches.start = T.touches.current = P ? i : n;
                T.setWrapperTransition(0);
                T.positions.start = T.positions.current = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                if (P)T.setWrapperTranslate(T.positions.start, 0, 0); else T.setWrapperTranslate(0, T.positions.start, 0);
                T.times.start = (new Date).getTime();
                E = void 0;
                if (t.moveStartThreshold > 0)z = !1;
                if (t.onTouchStart)t.onTouchStart(T);
                T.callPlugins("onTouchStartEnd")
            }
        }

        function p(e) {
            if (T.isTouched && !t.onlyExternal)if (!H || "mousemove" != e.type) {
                var i = H ? e.targetTouches[0].pageX : e.pageX || e.clientX;
                var s = H ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                if ("undefined" == typeof E && P)E = !!(E || Math.abs(s - T.touches.startY) > Math.abs(i - T.touches.startX));
                if ("undefined" == typeof E && !P)E = !!(E || Math.abs(s - T.touches.startY) < Math.abs(i - T.touches.startX));
                if (!E)if (!e.assignedToSwiper) {
                    e.assignedToSwiper = !0;
                    T.isMoved = !0;
                    if (t.preventLinks)T.allowLinks = !1;
                    if (t.onSlideClick)T.allowSlideClick = !1;
                    if (t.autoplay)T.stopAutoplay();
                    if (!H || 1 == e.touches.length) {
                        T.callPlugins("onTouchMoveStart");
                        if (e.preventDefault)e.preventDefault(); else e.returnValue = !1;
                        T.touches.current = P ? i : s;
                        T.positions.current = (T.touches.current - T.touches.start) * t.touchRatio + T.positions.start;
                        if (T.positions.current > 0 && t.onResistanceBefore)t.onResistanceBefore(T, T.positions.current);
                        if (T.positions.current < -n() && t.onResistanceBefore)t.onResistanceAfter(T, Math.abs(T.positions.current + n()));
                        if (t.resistance && "100%" != t.resistance) {
                            if (T.positions.current > 0) {
                                var r = 1 - T.positions.current / N / 2;
                                if (r < .5)T.positions.current = N / 2; else T.positions.current = T.positions.current * r
                            }
                            if (T.positions.current < -n()) {
                                var a = (T.touches.current - T.touches.start) * t.touchRatio + (n() + T.positions.start);
                                var r = (N + a) / N;
                                var o = T.positions.current - a * (1 - r) / 2;
                                var l = -n() - N / 2;
                                if (o < l || r <= 0)T.positions.current = l; else T.positions.current = o
                            }
                        }
                        if (t.resistance && "100%" == t.resistance) {
                            if (T.positions.current > 0 && (!t.freeMode || t.freeModeFluid))T.positions.current = 0;
                            if (T.positions.current < -n() && (!t.freeMode || t.freeModeFluid))T.positions.current = -n()
                        }
                        if (!t.followFinger)return;
                        if (!t.moveStartThreshold)if (P)T.setWrapperTranslate(T.positions.current, 0, 0); else T.setWrapperTranslate(0, T.positions.current, 0); else if (Math.abs(T.touches.current - T.touches.start) > t.moveStartThreshold || z) {
                            z = !0;
                            if (P)T.setWrapperTranslate(T.positions.current, 0, 0); else T.setWrapperTranslate(0, T.positions.current, 0)
                        } else T.positions.current = T.positions.start;
                        if (t.freeMode || t.watchActiveIndex)T.updateActiveSlide(T.positions.current);
                        if (t.grabCursor) {
                            T.container.style.cursor = "move";
                            T.container.style.cursor = "grabbing";
                            T.container.style.cursor = "-moz-grabbin";
                            T.container.style.cursor = "-webkit-grabbing"
                        }
                        if (!q)q = T.touches.current;
                        if (!U)U = (new Date).getTime();
                        T.velocity = (T.touches.current - q) / ((new Date).getTime() - U) / 2;
                        if (Math.abs(T.touches.current - q) < 2)T.velocity = 0;
                        q = T.touches.current;
                        U = (new Date).getTime();
                        T.callPlugins("onTouchMoveEnd");
                        if (t.onTouchMove)t.onTouchMove(T);
                        return !1
                    }
                } else T.isTouched = !1; else T.isTouched = !1
            }
        }

        function m(e) {
            if (E)T.swipeReset();
            if (!t.onlyExternal && T.isTouched) {
                T.isTouched = !1;
                if (t.grabCursor) {
                    T.container.style.cursor = "move";
                    T.container.style.cursor = "grab";
                    T.container.style.cursor = "-moz-grab";
                    T.container.style.cursor = "-webkit-grab"
                }
                if (!T.positions.current && 0 !== T.positions.current)T.positions.current = T.positions.start;
                if (t.followFinger)if (P)T.setWrapperTranslate(T.positions.current, 0, 0); else T.setWrapperTranslate(0, T.positions.current, 0);
                T.times.end = (new Date).getTime();
                T.touches.diff = T.touches.current - T.touches.start;
                T.touches.abs = Math.abs(T.touches.diff);
                T.positions.diff = T.positions.current - T.positions.start;
                T.positions.abs = Math.abs(T.positions.diff);
                var i = T.positions.diff;
                var s = T.positions.abs;
                var r = T.times.end - T.times.start;
                var a = n();
                T.positions.maxPosition = a;
                var o = !!(T.positions.current > 0);
                var l = !!(T.positions.current < -a);
                if (s < 5 && r < 300 && 0 == T.allowLinks) {
                    if (!t.freeMode && 0 != s)T.swipeReset();
                    if (t.preventLinks)T.allowLinks = !0;
                    if (t.onSlideClick)T.allowSlideClick = !0
                }
                setTimeout(function () {
                    if (t.preventLinks)T.allowLinks = !0;
                    if (t.onSlideClick)T.allowSlideClick = !0
                }, 100);
                if (T.isMoved) {
                    T.isMoved = !1;
                    if (!t.freeMode || o || l) {
                        if (t.scrollCallback) {
                            t.scrollCallback(T);
                            if (o || l) {
                                if (t.onTouchEnd)t.onTouchEnd(T);
                                T.callPlugins("onTouchEnd");
                                T.swipeReset();
                                return
                            }
                        }
                        if (!o)if (!l) {
                            k = i < 0 ? "toNext" : "toPrev";
                            if ("toNext" == k && r <= 300)if (s < 30 || !t.shortSwipes)T.swipeReset(); else T.swipeNext(!0);
                            if ("toPrev" == k && r <= 300)if (s < 30 || !t.shortSwipes)T.swipeReset(); else T.swipePrev(!0);
                            var c = 0;
                            if ("auto" == t.slidesPerView) {
                                var d = Math.abs(P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y"));
                                var u = 0;
                                var f;
                                for (var _ = 0; _ < T.slides.length; _++) {
                                    f = P ? T.slides[_].getWidth(!0) : T.slides[_].getHeight(!0);
                                    u += f;
                                    if (u > d) {
                                        c = f;
                                        break
                                    }
                                }
                                if (c > N)c = N
                            } else c = C * t.slidesPerView;
                            if ("toNext" == k && r > 300)if (s >= .5 * c)T.swipeNext(!0); else T.swipeReset();
                            if ("toPrev" == k && r > 300)if (s >= .5 * c)T.swipePrev(!0); else T.swipeReset();
                            if (t.onTouchEnd)t.onTouchEnd(T);
                            T.callPlugins("onTouchEnd")
                        } else {
                            T.swipeReset();
                            if (t.onTouchEnd)t.onTouchEnd(T);
                            T.callPlugins("onTouchEnd")
                        } else {
                            T.swipeReset();
                            if (t.onTouchEnd)t.onTouchEnd(T);
                            T.callPlugins("onTouchEnd")
                        }
                    } else {
                        if (t.freeModeFluid) {
                            var h = 1e3 * t.momentumRatio;
                            var p = T.velocity * h;
                            var m = T.positions.current + p;
                            var v = !1;
                            var g;
                            var $ = 20 * Math.abs(T.velocity) * t.momentumBounceRatio;
                            if (m < -a)if (t.momentumBounce && T.support.transitions) {
                                if (m + a < -$)m = -a - $;
                                g = -a;
                                v = !0;
                                T.allowMomentumBounce = !0
                            } else m = -a;
                            if (m > 0)if (t.momentumBounce && T.support.transitions) {
                                if (m > $)m = $;
                                g = 0;
                                v = !0;
                                T.allowMomentumBounce = !0
                            } else m = 0;
                            if (0 != T.velocity)h = Math.abs((m - T.positions.current) / T.velocity);
                            if (P)T.setWrapperTranslate(m, 0, 0); else T.setWrapperTranslate(0, m, 0);
                            T.setWrapperTransition(h);
                            if (t.momentumBounce && v)T.wrapperTransitionEnd(function () {
                                if (T.allowMomentumBounce) {
                                    if (t.onMomentumBounce)t.onMomentumBounce(T);
                                    if (P)T.setWrapperTranslate(g, 0, 0); else T.setWrapperTranslate(0, g, 0);
                                    T.setWrapperTransition(300)
                                }
                            });
                            T.updateActiveSlide(m);
                            T.positions.end = m
                        }
                        if (!t.freeModeFluid || r >= 300)T.updateActiveSlide(T.positions.current);
                        if (t.onTouchEnd)t.onTouchEnd(T);
                        T.callPlugins("onTouchEnd");
                        if (t.scrollCallback)t.scrollCallback(T)
                    }
                } else {
                    T.isMoved = !1;
                    if (t.onTouchEnd)t.onTouchEnd(T);
                    T.callPlugins("onTouchEnd")
                }
            }
        }

        function v(e, i, n) {
            function s() {
                a += o;
                c = "toNext" == l ? a > e : a < e;
                if (c) {
                    if (P)T.setWrapperTranslate(Math.round(a), 0); else T.setWrapperTranslate(0, Math.round(a));
                    T._DOMAnimating = !0;
                    window.setTimeout(function () {
                        s()
                    }, 1e3 / 60)
                } else {
                    if (t.onSlideChangeEnd)t.onSlideChangeEnd(T);
                    if (P)T.setWrapperTranslate(e, 0); else T.setWrapperTranslate(0, e);
                    T._DOMAnimating = !1
                }
            }

            if (T.support.transitions || !t.DOMAnimation) {
                if (P)T.setWrapperTranslate(e, 0, 0); else T.setWrapperTranslate(0, e, 0);
                var r = "to" == i && n.speed >= 0 ? n.speed : t.speed;
                T.setWrapperTransition(r)
            } else {
                var a = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                var r = "to" == i && n.speed >= 0 ? n.speed : t.speed;
                var o = Math.ceil((e - a) / r * (1e3 / 60));
                var l = a > e ? "toNext" : "toPrev";
                var c = "toNext" == l ? a > e : a < e;
                if (T._DOMAnimating)return;
                s()
            }
            T.updateActiveSlide(e);
            if (t.onSlideNext && "next" == i)t.onSlideNext(T, e);
            if (t.onSlidePrev && "prev" == i)t.onSlidePrev(T, e);
            if (t.onSlideReset && "reset" == i)t.onSlideReset(T, e);
            if ("next" == i || "prev" == i || "to" == i && 1 == n.runCallbacks)g()
        }

        function g() {
            T.callPlugins("onSlideChangeStart");
            if (t.onSlideChangeStart)if (t.queueStartCallbacks && T.support.transitions) {
                if (T._queueStartCallbacks)return;
                T._queueStartCallbacks = !0;
                t.onSlideChangeStart(T);
                T.wrapperTransitionEnd(function () {
                    T._queueStartCallbacks = !1
                })
            } else t.onSlideChangeStart(T);
            if (t.onSlideChangeEnd)if (T.support.transitions)if (t.queueEndCallbacks) {
                if (T._queueEndCallbacks)return;
                T._queueEndCallbacks = !0;
                T.wrapperTransitionEnd(t.onSlideChangeEnd)
            } else T.wrapperTransitionEnd(t.onSlideChangeEnd); else if (!t.DOMAnimation)setTimeout(function () {
                t.onSlideChangeEnd(T)
            }, 10)
        }

        function $() {
            var e = T.paginationButtons;
            for (var t = 0; t < e.length; t++)T.h.removeEventListener(e[t], "click", b, !1)
        }

        function y() {
            var e = T.paginationButtons;
            for (var t = 0; t < e.length; t++)T.h.addEventListener(e[t], "click", b, !1)
        }

        function b(e) {
            var t;
            var i = e.target || e.srcElement;
            var n = T.paginationButtons;
            for (var s = 0; s < n.length; s++)if (i === n[s])t = s;
            T.swipeTo(t)
        }

        function x() {
            T.calcSlides();
            if (t.loader.slides.length > 0 && 0 == T.slides.length)T.loadSlides();
            if (t.loop)T.createLoop();
            T.init();
            r();
            if (t.pagination && t.createPagination)T.createPagination(!0);
            if (t.loop || t.initialSlide > 0)T.swipeTo(t.initialSlide, 0, !1); else T.updateActiveSlide(0);
            if (t.autoplay)T.startAutoplay()
        }

        if (document.body.__defineGetter__)if (HTMLElement) {
            var w = HTMLElement.prototype;
            if (w.__defineGetter__)w.__defineGetter__("outerHTML", function () {
                return (new XMLSerializer).serializeToString(this)
            })
        }
        if (!window.getComputedStyle)window.getComputedStyle = function (e, t) {
            this.el = e;
            this.getPropertyValue = function (t) {
                var i = /(\-([a-z]){1})/g;
                if ("float" === t)t = "styleFloat";
                if (i.test(t))t = t.replace(i, function () {
                    return arguments[2].toUpperCase()
                });
                return e.currentStyle[t] ? e.currentStyle[t] : null
            };
            return this
        };
        if (!Array.prototype.indexOf)Array.prototype.indexOf = function (e, t) {
            for (var i = t || 0, n = this.length; i < n; i++)if (this[i] === e)return i;
            return -1
        };
        if (!document.querySelectorAll)if (!window.jQuery)return;
        if ("undefined" != typeof e) {
            if (!e.nodeType)if (0 === i(e).length)return;
            var T = this;
            T.touches = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0};
            T.positions = {start: 0, abs: 0, diff: 0, current: 0};
            T.times = {start: 0, end: 0};
            T.id = (new Date).getTime();
            T.container = e.nodeType ? e : i(e)[0];
            T.isTouched = !1;
            T.isMoved = !1;
            T.activeIndex = 0;
            T.activeLoaderIndex = 0;
            T.activeLoopIndex = 0;
            T.previousIndex = null;
            T.velocity = 0;
            T.snapGrid = [];
            T.slidesGrid = [];
            T.imagesToLoad = [];
            T.imagesLoaded = 0;
            T.wrapperLeft = 0;
            T.wrapperRight = 0;
            T.wrapperTop = 0;
            T.wrapperBottom = 0;
            var I, C, S, k, E, N;
            var L = {
                mode: "horizontal",
                touchRatio: 1,
                speed: 300,
                freeMode: !1,
                freeModeFluid: !1,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                slidesPerView: 1,
                slidesPerGroup: 1,
                simulateTouch: !0,
                followFinger: !0,
                shortSwipes: !0,
                moveStartThreshold: !1,
                autoplay: !1,
                onlyExternal: !1,
                createPagination: !0,
                pagination: !1,
                paginationElement: "span",
                paginationClickable: !1,
                paginationAsRange: !0,
                resistance: !0,
                scrollContainer: !1,
                preventLinks: !0,
                noSwiping: !1,
                noSwipingClass: "swiper-no-swiping",
                initialSlide: 0,
                keyboardControl: !1,
                mousewheelControl: !1,
                useCSS3Transforms: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                calculateHeight: !1,
                updateOnImagesReady: !0,
                releaseFormElements: !0,
                watchActiveIndex: !1,
                visibilityFullFit: !1,
                offsetPxBefore: 0,
                offsetPxAfter: 0,
                offsetSlidesBefore: 0,
                offsetSlidesAfter: 0,
                centeredSlides: !1,
                queueStartCallbacks: !1,
                queueEndCallbacks: !1,
                autoResize: !0,
                resizeReInit: !1,
                DOMAnimation: !0,
                loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
                slideElement: "div",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                wrapperClass: "swiper-wrapper",
                paginationElementClass: "swiper-pagination-switch",
                paginationActiveClass: "swiper-active-switch",
                paginationVisibleClass: "swiper-visible-switch",
                scrollCallback: !1,
                swiperCallback: !1
            };
            t = t || {};
            for (var M in L)if (M in t && "object" == typeof t[M]) {
                for (var A in L[M])if (!(A in t[M]))t[M][A] = L[M][A]
            } else if (!(M in t))t[M] = L[M];
            T.params = t;
            if (t.scrollContainer) {
                t.freeMode = !0;
                t.freeModeFluid = !0
            }
            if (t.loop)t.resistance = "100%";
            var P = "horizontal" === t.mode;
            T.touchEvents = {
                touchStart: T.support.touch || !t.simulateTouch ? "touchstart" : T.browser.ie10 ? "MSPointerDown" : "mousedown",
                touchMove: T.support.touch || !t.simulateTouch ? "touchmove" : T.browser.ie10 ? "MSPointerMove" : "mousemove",
                touchEnd: T.support.touch || !t.simulateTouch ? "touchend" : T.browser.ie10 ? "MSPointerUp" : "mouseup"
            };
            for (var D = T.container.childNodes.length - 1; D >= 0; D--)if (T.container.childNodes[D].className) {
                var O = T.container.childNodes[D].className.split(" ");
                for (var j = 0; j < O.length; j++)if (O[j] === t.wrapperClass)I = T.container.childNodes[D]
            }
            T.wrapper = I;
            T._extendSwiperSlide = function (e) {
                e.append = function () {
                    if (t.loop) {
                        e.insertAfter(T.slides.length - T.loopedSlides);
                        T.removeLoopedSlides();
                        T.calcSlides();
                        T.createLoop()
                    } else T.wrapper.appendChild(e);
                    T.reInit();
                    return e
                };
                e.prepend = function () {
                    if (t.loop) {
                        T.wrapper.insertBefore(e, T.slides[T.loopedSlides]);
                        T.removeLoopedSlides();
                        T.calcSlides();
                        T.createLoop()
                    } else T.wrapper.insertBefore(e, T.wrapper.firstChild);
                    T.reInit();
                    return e
                };
                e.insertAfter = function (i) {
                    if ("undefined" == typeof i)return !1;
                    var n;
                    if (t.loop) {
                        n = T.slides[i + 1 + T.loopedSlides];
                        T.wrapper.insertBefore(e, n);
                        T.removeLoopedSlides();
                        T.calcSlides();
                        T.createLoop()
                    } else {
                        n = T.slides[i + 1];
                        T.wrapper.insertBefore(e, n)
                    }
                    T.reInit();
                    return e
                };
                e.clone = function () {
                    return T._extendSwiperSlide(e.cloneNode(!0))
                };
                e.remove = function () {
                    T.wrapper.removeChild(e);
                    T.reInit()
                };
                e.html = function (t) {
                    if ("undefined" == typeof t)return e.innerHTML; else {
                        e.innerHTML = t;
                        return e
                    }
                };
                e.index = function () {
                    var t;
                    for (var i = T.slides.length - 1; i >= 0; i--)if (e === T.slides[i])t = i;
                    return t
                };
                e.isActive = function () {
                    if (e.index() === T.activeIndex)return !0; else return !1
                };
                if (!e.swiperSlideDataStorage)e.swiperSlideDataStorage = {};
                e.getData = function (t) {
                    return e.swiperSlideDataStorage[t]
                };
                e.setData = function (t, i) {
                    e.swiperSlideDataStorage[t] = i;
                    return e
                };
                e.data = function (t, i) {
                    if (!i)return e.getAttribute("data-" + t); else {
                        e.setAttribute("data-" + t, i);
                        return e
                    }
                };
                e.getWidth = function (t) {
                    return T.h.getWidth(e, t)
                };
                e.getHeight = function (t) {
                    return T.h.getHeight(e, t)
                };
                e.getOffset = function () {
                    return T.h.getOffset(e)
                };
                return e
            };
            T.calcSlides = function (e) {
                var i = T.slides ? T.slides.length : !1;
                T.slides = [];
                T.displaySlides = [];
                for (var n = 0; n < T.wrapper.childNodes.length; n++)if (T.wrapper.childNodes[n].className) {
                    var s = T.wrapper.childNodes[n].className;
                    var r = s.split(" ");
                    for (var l = 0; l < r.length; l++)if (r[l] === t.slideClass)T.slides.push(T.wrapper.childNodes[n])
                }
                for (n = T.slides.length - 1; n >= 0; n--)T._extendSwiperSlide(T.slides[n]);
                if (i)if (i !== T.slides.length || e) {
                    o();
                    a();
                    T.updateActiveSlide();
                    if (t.createPagination && T.params.pagination)T.createPagination();
                    T.callPlugins("numberOfSlidesChanged")
                }
            };
            T.createSlide = function (e, i, n) {
                var i = i || T.params.slideClass;
                var n = n || t.slideElement;
                var s = document.createElement(n);
                s.innerHTML = e || "";
                s.className = i;
                return T._extendSwiperSlide(s)
            };
            T.appendSlide = function (e, t, i) {
                if (e)if (e.nodeType)return T._extendSwiperSlide(e).append(); else return T.createSlide(e, t, i).append()
            };
            T.prependSlide = function (e, t, i) {
                if (e)if (e.nodeType)return T._extendSwiperSlide(e).prepend(); else return T.createSlide(e, t, i).prepend()
            };
            T.insertSlideAfter = function (e, t, i, n) {
                if ("undefined" == typeof e)return !1;
                if (t.nodeType)return T._extendSwiperSlide(t).insertAfter(e); else return T.createSlide(t, i, n).insertAfter(e)
            };
            T.removeSlide = function (e) {
                if (T.slides[e]) {
                    if (t.loop) {
                        if (!T.slides[e + T.loopedSlides])return !1;
                        T.slides[e + T.loopedSlides].remove();
                        T.removeLoopedSlides();
                        T.calcSlides();
                        T.createLoop()
                    } else T.slides[e].remove();
                    return !0
                } else return !1
            };
            T.removeLastSlide = function () {
                if (T.slides.length > 0) {
                    if (t.loop) {
                        T.slides[T.slides.length - 1 - T.loopedSlides].remove();
                        T.removeLoopedSlides();
                        T.calcSlides();
                        T.createLoop()
                    } else T.slides[T.slides.length - 1].remove();
                    return !0
                } else return !1
            };
            T.removeAllSlides = function () {
                for (var e = T.slides.length - 1; e >= 0; e--)T.slides[e].remove()
            };
            T.getSlide = function (e) {
                return T.slides[e]
            };
            T.getLastSlide = function () {
                return T.slides[T.slides.length - 1]
            };
            T.getFirstSlide = function () {
                return T.slides[0]
            };
            T.activeSlide = function () {
                return T.slides[T.activeIndex]
            };
            var R = [];
            for (var B in T.plugins)if (t[B]) {
                var F = T.plugins[B](T, t[B]);
                if (F)R.push(F)
            }
            T.callPlugins = function (e, t) {
                if (!t)t = {};
                for (var i = 0; i < R.length; i++)if (e in R[i])R[i][e](t)
            };
            if (T.browser.ie10 && !t.onlyExternal)if (P)T.wrapper.classList.add("swiper-wp8-horizontal"); else T.wrapper.classList.add("swiper-wp8-vertical");
            if (t.freeMode)T.container.className += " swiper-free-mode";
            T.initialized = !1;
            T.init = function (e, i) {
                var n = T.h.getWidth(T.container);
                var s = T.h.getHeight(T.container);
                if (n !== T.width || s !== T.height || e) {
                    T.width = n;
                    T.height = s;
                    N = P ? n : s;
                    var r = T.wrapper;
                    if (e)T.calcSlides(i);
                    if ("auto" === t.slidesPerView) {
                        var a = 0;
                        var o = 0;
                        if (t.slidesOffset > 0) {
                            r.style.paddingLeft = "";
                            r.style.paddingRight = "";
                            r.style.paddingTop = "";
                            r.style.paddingBottom = ""
                        }
                        r.style.width = "";
                        r.style.height = "";
                        if (t.offsetPxBefore > 0)if (P)T.wrapperLeft = t.offsetPxBefore; else T.wrapperTop = t.offsetPxBefore;
                        if (t.offsetPxAfter > 0)if (P)T.wrapperRight = t.offsetPxAfter; else T.wrapperBottom = t.offsetPxAfter;
                        if (t.centeredSlides)if (P) {
                            T.wrapperLeft = (N - this.slides[0].getWidth(!0)) / 2;
                            T.wrapperRight = (N - T.slides[T.slides.length - 1].getWidth(!0)) / 2
                        } else {
                            T.wrapperTop = (N - T.slides[0].getHeight(!0)) / 2;
                            T.wrapperBottom = (N - T.slides[T.slides.length - 1].getHeight(!0)) / 2
                        }
                        if (P) {
                            if (T.wrapperLeft >= 0)r.style.paddingLeft = T.wrapperLeft + "px";
                            if (T.wrapperRight >= 0)r.style.paddingRight = T.wrapperRight + "px"
                        } else {
                            if (T.wrapperTop >= 0)r.style.paddingTop = T.wrapperTop + "px";
                            if (T.wrapperBottom >= 0)r.style.paddingBottom = T.wrapperBottom + "px"
                        }
                        var l = 0;
                        var c = 0;
                        T.snapGrid = [];
                        T.slidesGrid = [];
                        var d = 0;
                        for (var u = 0; u < T.slides.length; u++) {
                            var f = T.slides[u].getWidth(!0);
                            var _ = T.slides[u].getHeight(!0);
                            if (t.calculateHeight)d = Math.max(d, _);
                            var h = P ? f : _;
                            if (t.centeredSlides) {
                                var p = u === T.slides.length - 1 ? 0 : T.slides[u + 1].getWidth(!0);
                                var m = u === T.slides.length - 1 ? 0 : T.slides[u + 1].getHeight(!0);
                                var v = P ? p : m;
                                if (h > N) {
                                    for (var g = 0; g <= Math.floor(h / (N + T.wrapperLeft)); g++)if (0 === g)T.snapGrid.push(l + T.wrapperLeft); else T.snapGrid.push(l + T.wrapperLeft + N * g);
                                    T.slidesGrid.push(l + T.wrapperLeft)
                                } else {
                                    T.snapGrid.push(c);
                                    T.slidesGrid.push(c)
                                }
                                c += h / 2 + v / 2
                            } else {
                                if (h > N)for (var g = 0; g <= Math.floor(h / N); g++)T.snapGrid.push(l + N * g); else T.snapGrid.push(l);
                                T.slidesGrid.push(l)
                            }
                            l += h;
                            a += f;
                            o += _
                        }
                        if (t.calculateHeight)T.height = d;
                        if (P) {
                            S = a + T.wrapperRight + T.wrapperLeft;
                            r.style.width = a + "px";
                            r.style.height = T.height + "px"
                        } else {
                            S = o + T.wrapperTop + T.wrapperBottom;
                            r.style.width = T.width + "px";
                            r.style.height = o + "px"
                        }
                    } else if (t.scrollContainer) {
                        r.style.width = "";
                        r.style.height = "";
                        var $ = T.slides[0].getWidth(!0);
                        var y = T.slides[0].getHeight(!0);
                        S = P ? $ : y;
                        r.style.width = $ + "px";
                        r.style.height = y + "px";
                        C = P ? $ : y
                    } else {
                        if (t.calculateHeight) {
                            var d = 0;
                            var y = 0;
                            if (!P)T.container.style.height = "";
                            r.style.height = "";
                            for (var u = 0; u < T.slides.length; u++) {
                                T.slides[u].style.height = "";
                                d = Math.max(T.slides[u].getHeight(!0), d);
                                if (!P)y += T.slides[u].getHeight(!0)
                            }
                            var _ = d;
                            if (P)var y = _;
                            N = T.height = _;
                            if (!P)T.container.style.height = N + "px"
                        } else {
                            var _ = P ? T.height : T.height / t.slidesPerView;
                            var y = P ? T.height : T.slides.length * _
                        }
                        var f = P ? T.width / t.slidesPerView : T.width;
                        var $ = P ? T.slides.length * f : T.width;
                        C = P ? f : _;
                        if (t.offsetSlidesBefore > 0)if (P)T.wrapperLeft = C * t.offsetSlidesBefore; else T.wrapperTop = C * t.offsetSlidesBefore;
                        if (t.offsetSlidesAfter > 0)if (P)T.wrapperRight = C * t.offsetSlidesAfter; else T.wrapperBottom = C * t.offsetSlidesAfter;
                        if (t.offsetPxBefore > 0)if (P)T.wrapperLeft = t.offsetPxBefore; else T.wrapperTop = t.offsetPxBefore;
                        if (t.offsetPxAfter > 0)if (P)T.wrapperRight = t.offsetPxAfter; else T.wrapperBottom = t.offsetPxAfter;
                        if (t.centeredSlides)if (P) {
                            T.wrapperLeft = (N - C) / 2;
                            T.wrapperRight = (N - C) / 2
                        } else {
                            T.wrapperTop = (N - C) / 2;
                            T.wrapperBottom = (N - C) / 2
                        }
                        if (P) {
                            if (T.wrapperLeft > 0)r.style.paddingLeft = T.wrapperLeft + "px";
                            if (T.wrapperRight > 0)r.style.paddingRight = T.wrapperRight + "px"
                        } else {
                            if (T.wrapperTop > 0)r.style.paddingTop = T.wrapperTop + "px";
                            if (T.wrapperBottom > 0)r.style.paddingBottom = T.wrapperBottom + "px"
                        }
                        S = P ? $ + T.wrapperRight + T.wrapperLeft : y + T.wrapperTop + T.wrapperBottom;
                        r.style.width = $ + "px";
                        r.style.height = y + "px";
                        var l = 0;
                        T.snapGrid = [];
                        T.slidesGrid = [];
                        for (var u = 0; u < T.slides.length; u++) {
                            T.snapGrid.push(l);
                            T.slidesGrid.push(l);
                            l += C;
                            T.slides[u].style.width = f + "px";
                            T.slides[u].style.height = _ + "px"
                        }
                    }
                    if (!T.initialized)T.callPlugins("onFirstInit"); else T.callPlugins("onInit");
                    T.initialized = !0
                }
            };
            T.reInit = function (e) {
                T.init(!0, e)
            };
            T.resizeFix = function (e) {
                T.callPlugins("beforeResizeFix");
                T.init(t.resizeReInit || e);
                if (!t.freeMode)if (t.loop)T.swipeTo(T.activeLoopIndex, 0, !1); else T.swipeTo(T.activeIndex, 0, !1); else {
                    var i = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                    if (i < -n()) {
                        var s = P ? -n() : 0;
                        var r = P ? 0 : -n();
                        T.setWrapperTransition(0);
                        T.setWrapperTranslate(s, r, 0)
                    }
                }
                T.callPlugins("afterResizeFix")
            };
            T.destroy = function (e) {
                if (!T.browser.ie10) {
                    if (T.support.touch) {
                        T.h.removeEventListener(T.wrapper, "touchstart", h, !1);
                        T.h.removeEventListener(T.wrapper, "touchmove", p, !1);
                        T.h.removeEventListener(T.wrapper, "touchend", m, !1)
                    }
                    if (t.simulateTouch) {
                        T.h.removeEventListener(T.wrapper, "mousedown", h, !1);
                        T.h.removeEventListener(document, "mousemove", p, !1);
                        T.h.removeEventListener(document, "mouseup", m, !1)
                    }
                } else {
                    T.h.removeEventListener(T.wrapper, T.touchEvents.touchStart, h, !1);
                    T.h.removeEventListener(document, T.touchEvents.touchMove, p, !1);
                    T.h.removeEventListener(document, T.touchEvents.touchEnd, m, !1)
                }
                if (t.autoResize)T.h.removeEventListener(window, "resize", T.resizeFix, !1);
                o();
                if (t.paginationClickable)$();
                if (t.mousewheelControl && T._wheelEvent)T.h.removeEventListener(T.container, T._wheelEvent, c, !1);
                if (t.keyboardControl)T.h.removeEventListener(document, "keydown", l, !1);
                if (t.autoplay)T.stopAutoplay();
                T.callPlugins("onDestroy")
            };
            if (t.grabCursor) {
                T.container.style.cursor = "move";
                T.container.style.cursor = "grab";
                T.container.style.cursor = "-moz-grab";
                T.container.style.cursor = "-webkit-grab"
            }
            T.allowSlideClick = !0;
            T.allowLinks = !0;
            var H = !1;
            var z;
            T.allowMomentumBounce = !0;
            var q, U;
            T.swipeNext = function (e) {
                if (!e && t.loop)T.fixLoop();
                T.callPlugins("onSwipeNext");
                var i = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                var s = i;
                if ("auto" == t.slidesPerView) {
                    for (var r = 0; r < T.snapGrid.length; r++)if (-i >= T.snapGrid[r] && -i < T.snapGrid[r + 1]) {
                        s = -T.snapGrid[r + 1];
                        break
                    }
                } else {
                    var a = C * t.slidesPerGroup;
                    s = -(Math.floor(Math.abs(i) / Math.floor(a)) * a + a)
                }
                if (s < -n())s = -n();
                if (s == i)return !1;
                v(s, "next");
                return !0
            };
            T.swipePrev = function (e) {
                if (!e && t.loop)T.fixLoop();
                if (!e && t.autoplay)T.stopAutoplay();
                T.callPlugins("onSwipePrev");
                var i = Math.ceil(P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y"));
                var n;
                if ("auto" == t.slidesPerView) {
                    n = 0;
                    for (var s = 1; s < T.snapGrid.length; s++) {
                        if (-i == T.snapGrid[s]) {
                            n = -T.snapGrid[s - 1];
                            break
                        }
                        if (-i > T.snapGrid[s] && -i < T.snapGrid[s + 1]) {
                            n = -T.snapGrid[s];
                            break
                        }
                    }
                } else {
                    var r = C * t.slidesPerGroup;
                    n = -(Math.ceil(-i / r) - 1) * r
                }
                if (n > 0)n = 0;
                if (n == i)return !1;
                v(n, "prev");
                return !0
            };
            T.swipeReset = function () {
                T.callPlugins("onSwipeReset");
                var e = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                var i = C * t.slidesPerGroup;
                var s;
                var r = -n();
                if ("auto" == t.slidesPerView) {
                    s = 0;
                    for (var a = 0; a < T.snapGrid.length; a++) {
                        if (-e === T.snapGrid[a])return;
                        if (-e >= T.snapGrid[a] && -e < T.snapGrid[a + 1]) {
                            if (T.positions.diff > 0)s = -T.snapGrid[a + 1]; else s = -T.snapGrid[a];
                            break
                        }
                    }
                    if (-e >= T.snapGrid[T.snapGrid.length - 1])s = -T.snapGrid[T.snapGrid.length - 1];
                    if (e <= -n())s = -n()
                } else s = e < 0 ? Math.round(e / i) * i : 0;
                if (t.scrollContainer)s = e < 0 ? e : 0;
                if (s < -n())s = -n();
                if (t.scrollContainer && N > C)s = 0;
                if (s == e)return !1;
                v(s, "reset");
                return !0
            };
            T.swipeTo = function (e, i, s) {
                e = parseInt(e, 10);
                T.callPlugins("onSwipeTo", {index: e, speed: i});
                if (t.loop)e += T.loopedSlides;
                var r = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                if (!(e > T.slides.length - 1))if (!(e < 0)) {
                    var a;
                    if ("auto" == t.slidesPerView)a = -T.slidesGrid[e]; else a = -e * C;
                    if (a < -n())a = -n();
                    if (a == r)return !1;
                    s = s === !1 ? !1 : !0;
                    v(a, "to", {index: e, speed: i, runCallbacks: s});
                    return !0
                }
            };
            T._queueStartCallbacks = !1;
            T._queueEndCallbacks = !1;
            T.updateActiveSlide = function (e) {
                if (T.initialized)if (0 != T.slides.length) {
                    T.previousIndex = T.activeIndex;
                    if (e > 0)e = 0;
                    if ("undefined" == typeof e)e = P ? T.getWrapperTranslate("x") : T.getWrapperTranslate("y");
                    if ("auto" == t.slidesPerView) {
                        var i = 0;
                        T.activeIndex = T.slidesGrid.indexOf(-e);
                        if (T.activeIndex < 0) {
                            for (var n = 0; n < T.slidesGrid.length - 1 && !(-e > T.slidesGrid[n] && -e < T.slidesGrid[n + 1]); n++);
                            var s = Math.abs(T.slidesGrid[n] + e);
                            var r = Math.abs(T.slidesGrid[n + 1] + e);
                            if (s <= r)T.activeIndex = n; else T.activeIndex = n + 1
                        }
                    } else if (t.visibilityFullFit)T.activeIndex = Math.ceil(-e / C); else T.activeIndex = Math.round(-e / C);
                    if (T.activeIndex == T.slides.length)T.activeIndex = T.slides.length - 1;
                    if (T.activeIndex < 0)T.activeIndex = 0;
                    if (T.slides[T.activeIndex]) {
                        T.calcVisibleSlides(e);
                        var a = new RegExp("\\s*" + t.slideActiveClass);
                        var o = new RegExp("\\s*" + t.slideVisibleClass);
                        for (var n = 0; n < T.slides.length; n++) {
                            T.slides[n].className = T.slides[n].className.replace(a, "").replace(o, "");
                            if (T.visibleSlides.indexOf(T.slides[n]) >= 0)T.slides[n].className += " " + t.slideVisibleClass
                        }
                        T.slides[T.activeIndex].className += " " + t.slideActiveClass;
                        if (t.loop) {
                            var l = T.loopedSlides;
                            T.activeLoopIndex = T.activeIndex - l;
                            if (T.activeLoopIndex >= T.slides.length - 2 * l)T.activeLoopIndex = T.slides.length - 2 * l - T.activeLoopIndex;
                            if (T.activeLoopIndex < 0)T.activeLoopIndex = T.slides.length - 2 * l + T.activeLoopIndex
                        } else T.activeLoopIndex = T.activeIndex;
                        if (t.pagination)T.updatePagination(e)
                    }
                }
            };
            T.createPagination = function (e) {
                if (t.paginationClickable && T.paginationButtons)$();
                var n = "";
                var s = T.slides.length;
                var r = s;
                if (t.loop)r -= 2 * T.loopedSlides;
                for (var a = 0; a < r; a++)n += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
                T.paginationContainer = t.pagination.nodeType ? t.pagination : i(t.pagination)[0];
                T.paginationContainer.innerHTML = n;
                T.paginationButtons = [];
                if (document.querySelectorAll)T.paginationButtons = T.paginationContainer.querySelectorAll("." + t.paginationElementClass); else if (window.jQuery)T.paginationButtons = i(T.paginationContainer).find("." + t.paginationElementClass);
                if (!e)T.updatePagination();
                T.callPlugins("onCreatePagination");
                if (t.paginationClickable)y()
            };
            T.updatePagination = function (e) {
                if (!(T.slides.length < 1)) {
                    if (document.querySelectorAll)var n = T.paginationContainer.querySelectorAll("." + t.paginationActiveClass); else if (window.jQuery)var n = i(T.paginationContainer).find("." + t.paginationActiveClass);
                    if (n) {
                        var s = T.paginationButtons;
                        for (var r = 0; r < s.length; r++)s[r].className = t.paginationElementClass;
                        var a = t.loop ? T.loopedSlides : 0;
                        if (t.paginationAsRange) {
                            if (!T.visibleSlides)T.calcVisibleSlides(e);
                            var o = [];
                            for (var r = 0; r < T.visibleSlides.length; r++) {
                                var l = T.slides.indexOf(T.visibleSlides[r]) - a;
                                if (t.loop && l < 0)l = T.slides.length - 2 * T.loopedSlides + l;
                                if (t.loop && l >= T.slides.length - 2 * T.loopedSlides) {
                                    l = T.slides.length - 2 * T.loopedSlides - l;
                                    l = Math.abs(l)
                                }
                                o.push(l)
                            }
                            for (r = 0; r < o.length; r++)if (s[o[r]])s[o[r]].className += " " + t.paginationVisibleClass;
                            if (t.loop)s[T.activeLoopIndex].className += " " + t.paginationActiveClass; else s[T.activeIndex].className += " " + t.paginationActiveClass
                        } else {
                            if (t.loop)s[T.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass; else s[T.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass;
                            if (t.swiperCallback)t.swiperCallback(T.activeIndex)
                        }
                    }
                }
            };
            T.calcVisibleSlides = function (e) {
                var i = [];
                var n = 0, s = 0, r = 0;
                if (P && T.wrapperLeft > 0)e += T.wrapperLeft;
                if (!P && T.wrapperTop > 0)e += T.wrapperTop;
                for (var a = 0; a < T.slides.length; a++) {
                    n += s;
                    if ("auto" == t.slidesPerView)s = P ? T.h.getWidth(T.slides[a], !0) : T.h.getHeight(T.slides[a], !0); else s = C;
                    r = n + s;
                    var o = !1;
                    if (t.visibilityFullFit) {
                        if (n >= -e && r <= -e + N)o = !0;
                        if (n <= -e && r >= -e + N)o = !0
                    } else {
                        if (r > -e && r <= -e + N)o = !0;
                        if (n >= -e && n < -e + N)o = !0;
                        if (n < -e && r > -e + N)o = !0
                    }
                    if (o)i.push(T.slides[a])
                }
                if (0 == i.length)i = [T.slides[T.activeIndex]];
                T.visibleSlides = i
            };
            var W = void 0;
            T.startAutoplay = function () {
                if ("undefined" != typeof W)return !1;
                if (t.autoplay && !t.loop)W = setInterval(function () {
                    if (!T.swipeNext(!0))T.swipeTo(0)
                }, t.autoplay);
                if (t.autoplay && t.loop)autoPlay = setInterval(function () {
                    T.swipeNext()
                }, t.autoplay);
                T.callPlugins("onAutoplayStart")
            };
            T.stopAutoplay = function () {
                if (W)clearInterval(W);
                W = void 0;
                T.callPlugins("onAutoplayStop")
            };
            T.loopCreated = !1;
            T.removeLoopedSlides = function () {
                if (T.loopCreated)for (var e = 0; e < T.slides.length; e++)if (T.slides[e].getData("looped") === !0)T.wrapper.removeChild(T.slides[e])
            };
            T.createLoop = function () {
                if (0 != T.slides.length) {
                    T.loopedSlides = t.slidesPerView + t.loopAdditionalSlides;
                    var e = "";
                    var i = "";
                    for (var n = 0; n < T.loopedSlides; n++)e += T.slides[n].outerHTML;
                    for (n = T.slides.length - T.loopedSlides; n < T.slides.length; n++)i += T.slides[n].outerHTML;
                    I.innerHTML = i + I.innerHTML + e;
                    T.loopCreated = !0;
                    T.calcSlides();
                    for (n = 0; n < T.slides.length; n++)if (n < T.loopedSlides || n >= T.slides.length - T.loopedSlides)T.slides[n].setData("looped", !0);
                    T.callPlugins("onCreateLoop")
                }
            };
            T.fixLoop = function () {
                if (T.activeIndex < T.loopedSlides) {
                    var e = T.slides.length - 3 * T.loopedSlides + T.activeIndex;
                    T.swipeTo(e, 0, !1)
                } else if (T.activeIndex > T.slides.length - 2 * t.slidesPerView) {
                    var e = -T.slides.length + T.activeIndex + T.loopedSlides;
                    T.swipeTo(e, 0, !1)
                }
            };
            T.loadSlides = function () {
                var e = "";
                T.activeLoaderIndex = 0;
                var i = t.loader.slides;
                var n = t.loader.loadAllSlides ? i.length : t.slidesPerView * (1 + t.loader.surroundGroups);
                for (var s = 0; s < n; s++)if ("outer" == t.loader.slidesHTMLType)e += i[s]; else e += "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + s + '">' + i[s] + "</" + t.slideElement + ">";
                T.wrapper.innerHTML = e;
                T.calcSlides(!0);
                if (!t.loader.loadAllSlides)T.wrapperTransitionEnd(T.reloadSlides, !0)
            };
            T.reloadSlides = function () {
                var e = t.loader.slides;
                var i = parseInt(T.activeSlide().data("swiperindex"), 10);
                if (!(i < 0 || i > e.length - 1)) {
                    T.activeLoaderIndex = i;
                    var n = Math.max(0, i - t.slidesPerView * t.loader.surroundGroups);
                    var s = Math.min(i + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
                    if (i > 0) {
                        var r = -C * (i - n);
                        if (P)T.setWrapperTranslate(r, 0, 0); else T.setWrapperTranslate(0, r, 0);
                        T.setWrapperTransition(0)
                    }
                    if ("reload" === t.loader.logic) {
                        T.wrapper.innerHTML = "";
                        var a = "";
                        for (var o = n; o <= s; o++)a += "outer" == t.loader.slidesHTMLType ? e[o] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + o + '">' + e[o] + "</" + t.slideElement + ">";
                        T.wrapper.innerHTML = a
                    } else {
                        var l = 1e3;
                        var c = 0;
                        for (var o = 0; o < T.slides.length; o++) {
                            var d = T.slides[o].data("swiperindex");
                            if (d < n || d > s)T.wrapper.removeChild(T.slides[o]); else {
                                l = Math.min(d, l);
                                c = Math.max(d, c)
                            }
                        }
                        for (var o = n; o <= s; o++) {
                            if (o < l) {
                                var u = document.createElement(t.slideElement);
                                u.className = t.slideClass;
                                u.setAttribute("data-swiperindex", o);
                                u.innerHTML = e[o];
                                T.wrapper.insertBefore(u, T.wrapper.firstChild)
                            }
                            if (o > c) {
                                var u = document.createElement(t.slideElement);
                                u.className = t.slideClass;
                                u.setAttribute("data-swiperindex", o);
                                u.innerHTML = e[o];
                                T.wrapper.appendChild(u)
                            }
                        }
                    }
                    T.reInit(!0)
                }
            };
            x()
        }
    };
    e.prototype = {
        plugins: {}, wrapperTransitionEnd: function (e, t) {
            function i() {
                e(n);
                if (n.params.queueEndCallbacks)n._queueEndCallbacks = !1;
                if (!t)for (var a = 0; a < r.length; a++)s.removeEventListener(r[a], i, !1)
            }

            var n = this;
            var s = n.wrapper;
            var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            if (e)for (var a = 0; a < r.length; a++)s.addEventListener(r[a], i, !1)
        }, getWrapperTranslate: function (e) {
            var t = this.wrapper;
            var i;
            var n;
            if (window.WebKitCSSMatrix) {
                var s = new WebKitCSSMatrix(window.getComputedStyle(t, null).webkitTransform);
                i = s.toString().split(",")
            } else {
                var s = window.getComputedStyle(t, null).MozTransform || window.getComputedStyle(t, null).OTransform || window.getComputedStyle(t, null).MsTransform || window.getComputedStyle(t, null).msTransform || window.getComputedStyle(t, null).transform || window.getComputedStyle(t, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                i = s.toString().split(",")
            }
            if (this.params.useCSS3Transforms) {
                if ("x" == e)if (16 == i.length)n = parseFloat(i[12]); else if (window.WebKitCSSMatrix)n = s.m41; else n = parseFloat(i[4]);
                if ("y" == e)if (16 == i.length)n = parseFloat(i[13]); else if (window.WebKitCSSMatrix)n = s.m42; else n = parseFloat(i[5])
            } else {
                if ("x" == e)n = parseFloat(t.style.left, 10) || 0;
                if ("y" == e)n = parseFloat(t.style.top, 10) || 0
            }
            return n || 0
        }, setWrapperTranslate: function (e, t, i) {
            var n = this.wrapper.style;
            e = e || 0;
            t = t || 0;
            i = i || 0;
            if (this.params.useCSS3Transforms)if (this.support.transforms3d)n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = "translate3d(" + e + "px, " + t + "px, " + i + "px)"; else {
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = "translate(" + e + "px, " + t + "px)";
                if (!this.support.transforms) {
                    n.left = e + "px";
                    n.top = t + "px"
                }
            } else {
                n.left = e + "px";
                n.top = t + "px"
            }
            this.callPlugins("onSetWrapperTransform", {x: e, y: t, z: i})
        }, setWrapperTransition: function (e) {
            var t = this.wrapper.style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s";
            this.callPlugins("onSetWrapperTransition", {duration: e})
        }, h: {
            getWidth: function (e, t) {
                var i = window.getComputedStyle(e, null).getPropertyValue("width");
                var n = parseFloat(i);
                if (isNaN(n) || i.indexOf("%") > 0)n = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"));
                if (t)n += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"));
                return n
            }, getHeight: function (e, t) {
                if (t)return e.offsetHeight;
                var i = window.getComputedStyle(e, null).getPropertyValue("height");
                var n = parseFloat(i);
                if (isNaN(n) || i.indexOf("%") > 0)n = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"));
                if (t)n += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"));
                return n
            }, getOffset: function (e) {
                var t = e.getBoundingClientRect();
                var i = document.body;
                var n = e.clientTop || i.clientTop || 0;
                var s = e.clientLeft || i.clientLeft || 0;
                var r = window.pageYOffset || e.scrollTop;
                var a = window.pageXOffset || e.scrollLeft;
                if (document.documentElement && !window.pageYOffset) {
                    r = document.documentElement.scrollTop;
                    a = document.documentElement.scrollLeft
                }
                return {top: t.top + r - n, left: t.left + a - s}
            }, windowWidth: function () {
                if (window.innerWidth)return window.innerWidth; else if (document.documentElement && document.documentElement.clientWidth)return document.documentElement.clientWidth
            }, windowHeight: function () {
                if (window.innerHeight)return window.innerHeight; else if (document.documentElement && document.documentElement.clientHeight)return document.documentElement.clientHeight
            }, windowScroll: function () {
                var e = 0, t = 0;
                if ("undefined" != typeof pageYOffset)return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                }; else if (document.documentElement)return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
            }, addEventListener: function (e, t, i, n) {
                if (e.addEventListener)e.addEventListener(t, i, n); else if (e.attachEvent)e.attachEvent("on" + t, i)
            }, removeEventListener: function (e, t, i, n) {
                if (e.removeEventListener)e.removeEventListener(t, i, n); else if (e.detachEvent)e.detachEvent("on" + t, i)
            }
        }, setTransform: function (e, t) {
            var i = e.style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
        }, setTranslate: function (e, t) {
            var i = e.style;
            var n = {x: t.x || 0, y: t.y || 0, z: t.z || 0};
            var s = this.support.transforms3d ? "translate3d(" + n.x + "px," + n.y + "px," + n.z + "px)" : "translate(" + n.x + "px," + n.y + "px)";
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = s;
            if (!this.support.transforms) {
                i.left = n.x + "px";
                i.top = n.y + "px"
            }
        }, setTransition: function (e, t) {
            var i = e.style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t + "ms"
        }, support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div");
                return "webkitPerspective" in e.style || "MozPerspective" in e.style || "OPerspective" in e.style || "MsPerspective" in e.style || "perspective" in e.style
            }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
                var e = document.createElement("div").style;
                return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
            }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
                var e = document.createElement("div").style;
                return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
            }()
        }, browser: {
            ie8: function () {
                var e = -1;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var t = navigator.userAgent;
                    var i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    if (null != i.exec(t))e = parseFloat(RegExp.$1)
                }
                return e != -1 && e < 9
            }(), ie10: window.navigator.msPointerEnabled
        }
    };
    if (window.jQuery || window.Zepto)!function (t) {
        t.fn.swiper = function (i) {
            var n = new e(t(this)[0], i);
            t(this).data("swiper", n);
            return n
        }
    }(window.jQuery || window.Zepto);
    return e
});
I$(10, function (e, t, i, n, s) {
    e.prototype.plugins.scrollbar = function (e, t) {
        function i(e) {
            if (document.querySelectorAll)return document.querySelectorAll(e); else return jQuery(e)
        }

        function n(t) {
            w = !0;
            if (t.preventDefault)t.preventDefault(); else t.returnValue = !1;
            a(t);
            clearTimeout(I);
            e.setTransition(_, 0);
            _.style.opacity = 1;
            e.setWrapperTransition(100);
            e.setTransition(b, 100)
        }

        function s(t) {
            if (w) {
                if (t.preventDefault)t.preventDefault(); else t.returnValue = !1;
                a(t);
                e.setWrapperTransition(0);
                e.setTransition(_, 0);
                e.setTransition(b, 0)
            }
        }

        function r(i) {
            w = !1;
            if (t.hide) {
                clearTimeout(I);
                I = setTimeout(function () {
                    _.style.opacity = 0;
                    e.setTransition(_, 400)
                }, 1e3)
            }
            if (t.snapOnRelease)e.swipeReset()
        }

        function a(t) {
            var i = y = 0;
            var n;
            if (f) {
                i = (t.pageX || t.clientX) - e.h.getOffset(_).left - g / 2;
                if (i < 0)i = 0; else if (i + g > h)i = h - g
            } else {
                y = (t.pageY || t.clientY) - e.h.getOffset(_).top - $ / 2;
                if (y < 0)y = 0; else if (y + $ > p)y = p - $
            }
            e.setTranslate(b, {x: i, y: y});
            var s = -i / v;
            var r = -y / v;
            e.setWrapperTranslate(s, r)
        }

        function o() {
            b.style.width = "";
            b.style.height = "";
            if (f) {
                h = e.h.getWidth(_, !0);
                m = e.width / e.h.getWidth(e.wrapper);
                v = m * (h / e.width);
                g = h * m;
                b.style.width = g + "px"
            } else {
                p = e.h.getHeight(_, !0);
                m = e.height / e.h.getHeight(e.wrapper);
                v = m * (p / e.height);
                $ = p * m;
                if ($ > p)$ = p;
                b.style.height = $ + "px"
            }
        }

        var l = t && t.container;
        if (l) {
            var c = {hide: !0, draggable: !0, snapOnRelease: !1};
            t = t || {};
            for (var d in c)if (!(d in t))t[d] = c[d];
            if (!document.querySelectorAll)if (!window.jQuery)return;
            if (!t.container.nodeType)if (0 == i(t.container).length)return;
            var u = t.container.nodeType ? t.container : i(t.container)[0];
            var f = "horizontal" == e.params.mode, _ = u, h, p, m, v, g, $;
            var b = document.createElement("div");
            b.className = "swiper-scrollbar-drag";
            if (t.draggable)b.className += " swiper-scrollbar-cursor-drag";
            _.appendChild(b);
            if (t.hide)_.style.opacity = 0;
            var x = e.touchEvents;
            if (t.draggable) {
                var w = !1;
                var T = e.support.touch ? _ : document;
                e.h.addEventListener(_, x.touchStart, n, !1);
                e.h.addEventListener(T, x.touchMove, s, !1);
                e.h.addEventListener(T, x.touchEnd, r, !1)
            }
            var I;
            var C = {
                onFirstInit: function (e) {
                    o()
                }, onInit: function (e) {
                    o()
                }, onTouchMoveEnd: function (i) {
                    if (t.hide) {
                        clearTimeout(I);
                        _.style.opacity = 1;
                        e.setTransition(_, 200)
                    }
                }, onTouchEnd: function (i) {
                    if (t.hide) {
                        clearTimeout(I);
                        I = setTimeout(function () {
                            _.style.opacity = 0;
                            e.setTransition(_, 400)
                        }, 1e3)
                    }
                }, onSetWrapperTransform: function (i) {
                    if (f) {
                        var n = i.x * v;
                        var s = g;
                        if (n > 0) {
                            var r = n;
                            n = 0;
                            s = g - r
                        } else if (-n + g > h)s = h + n;
                        e.setTranslate(b, {x: -n});
                        b.style.width = s + "px"
                    } else {
                        var a = i.y * v;
                        var o = $;
                        if (a > 0) {
                            var r = a;
                            a = 0;
                            o = $ - r
                        } else if (-a + $ > p)o = p + a;
                        e.setTranslate(b, {y: -a});
                        b.style.height = o + "px"
                    }
                    if (e.params.freeMode && t.hide) {
                        clearTimeout(I);
                        _.style.opacity = 1;
                        I = setTimeout(function () {
                            _.style.opacity = 0;
                            e.setTransition(_, 400)
                        }, 1e3)
                    }
                }, onSetWrapperTransition: function (t) {
                    e.setTransition(b, t.duration)
                }, onDestroy: function () {
                    var t = e.support.touch ? _ : document;
                    e.h.removeEventListener(_, x.touchStart, n, !1);
                    e.h.removeEventListener(t, x.touchMove, s, !1);
                    e.h.removeEventListener(t, x.touchEnd, r, !1)
                }
            };
            return C
        }
    };
    return e
}, 125);
I$(9, function (e, t, i, n, s, r, a, o) {
    var l = Regular.dom;
    var c = i.extend({
        config: function (t) {
            e.extend(t, {speed: 50, smooth: !0, selected: "active", smoothDistance: 40, spyDistacne: 50})
        }, init: function () {
            function i(i) {
                var n = this;
                var s = l.attr(n, "data-target");
                var r = t._$get(s);
                a.refresh();
                if (r && a.data.smooth) {
                    e.smoothTo(r, a.data.smoothDistance);
                    i.preventDefault()
                }
            }

            var n = this.data;
            if (n.spyDistacne <= n.smoothDistance)n.spyDistacne = n.smoothDistance + 1;
            var s = n.elem;
            this.elem = s;
            this.elemTop = t._$offset(s).y;
            this.links = nes.all("[data-target]", s);
            this.refresh();
            var r = this.handleScroll.bind(this);
            var a = this;
            l.on(window, "scroll", r);
            l.on(window, "load", this.refresh.bind(this));
            this.links.forEach(function (e) {
                l.on(e, "click", i)
            });
            this.$on("destroy", function () {
                l.off(window, "scroll", r);
                this.links.forEach(function (e) {
                    l.off(e, i)
                })
            });
            r()
        }, refresh: function () {
            var e = this.data.spyDistacne;
            var i = this.guides = [];
            var n = this.links;
            this.links.forEach(function (n) {
                var s = t._$get(l.attr(n, "data-target"));
                if (s) {
                    var r = t._$offset(s);
                    i.push({link: n, distance: r.y - e, target: s})
                }
            })
        }, handleScroll: function () {
            var e = this.getScrollTop();
            if (e > this.elemTop) {
                t._$addClassName(this.elem, "z-fixed");
                this.$emit("fix", !0)
            } else {
                t._$delClassName(this.elem, "z-fixed");
                this.$emit("fix", !1)
            }
            setTimeout(function () {
                var e = this.guides;
                var t = this.getScrollTop();
                for (var i = 0, n = e.length; i < n; i++)if (t <= e[i].distance + e[i].target.offsetHeight) {
                    this.touch(e[i].link);
                    break
                }
            }._$bind(this), 200)
        }, touch: function (e) {
            var i = this;
            if (!t._$hasClassName(e, i.data.selected)) {
                this.links.forEach(function (e) {
                    t._$delClassName(e, i.data.selected)
                });
                t._$addClassName(e, i.data.selected)
            }
            this.$emit("touch", e)
        }, getScrollTop: function () {
            return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        }
    });
    return c
}, 1, 3, 140);
I$(7, function (e, t, i, n, s, r, a, o, l, c, d) {
    a._$$GA = e._$klass();
    d = a._$$GA._$extend(i._$$EventTarget);
    d.__reset = function (e) {
        this.__super(e);
        r._$addEvent(document, "click", this.__onGACheck._$bind(this))
    };
    d.__onGACheck = function (e) {
        var t = r._$getElement(e, "d:ganame");
        var i = n._$dataset(t, "ganame");
        var a = n._$dataset(t, "gapoint");
        var o = n._$dataset(t, "gapage");
        var l = n._$dataset(t, "galogin");
        if (i) {
            if (parseInt(l)) {
                var c = s.getFullUserName();
                o += "###" + c
            }
            _gaq.push(["_trackEvent", i, a, o])
        }
    };
    return a
}, 2, 28, 4, 3, 1, 5);
I$(15, function (e, t, i) {
    var n = document.querySelectorAll(".j-focus");
    var s = function (e) {
        var t = document.cookie, i = "\\b" + e + "=", n = t.search(i);
        return n < 0 ? !1 : !0
    };
    for (var r = 0, a = n.length; r < a; r++)n[r].onclick = function (e) {
        e.preventDefault();
        var n = s("P_INFO") || s("P_OINFO");
        if (n) {
            if (this.dataset.type && this.dataset.id) {
                var r = "", a = {}, o = "post";
                if (1 == this.dataset.type) {
                    r = "/brand/followByPo";
                    a = {poId: this.dataset.id}
                } else if (2 == this.dataset.type) {
                    o = "get";
                    r = "/prdtFavorite/add";
                    a = {id: this.dataset.id}
                } else return;
                t(r, {
                    type: "json", method: o, data: a, onload: function (e) {
                        if (200 == e.code)i.notify({type: "success", message: "关注成功！"}); else i.notify({
                            type: "error",
                            message: "关注失败！"
                        })
                    }, onerror: function (e) {
                        i.notify({type: "error", message: "关注失败！"})
                    }
                })
            }
        } else location.href = "/login?redirectURL=" + encodeURIComponent(location.href)
    }
}, 27, 19, 20);
I$(144, function (e, t, i, n) {
    return function (e, t) {
        function i(t, i, n) {
            e.WeixinJSBridge ? WeixinJSBridge.invoke(t, s(i), function (e) {
                a(t, e, n)
            }) : c(t, n)
        }

        function n(t, i, n) {
            e.WeixinJSBridge ? WeixinJSBridge.on(t, function (e) {
                n && n.trigger && n.trigger(e), a(t, e, i)
            }) : n ? c(t, n) : c(t, i)
        }

        function s(e) {
            return e = e || {}, e.appId = I.appId, e.verifyAppId = I.appId, e.verifySignType = "sha1", e.verifyTimestamp = I.timestamp + "", e.verifyNonceStr = I.nonceStr, e.verifySignature = I.signature, e
        }

        function r(e) {
            return {
                timeStamp: e.timestamp + "",
                nonceStr: e.nonceStr,
                "package": e["package"],
                paySign: e.paySign,
                signType: e.signType || "SHA1"
            }
        }

        function a(e, t, i) {
            var n, s, r;
            switch (delete t.err_code, delete t.err_desc, delete t.err_detail, n = t.errMsg, n || (n = t.err_msg, delete t.err_msg, n = o(e, n, i), t.errMsg = n), i = i || {}, i._complete && (i._complete(t), delete i._complete), n = t.errMsg || "", I.debug && !i.isInnerInvoke && alert(JSON.stringify(t)), s = n.indexOf(":"), r = n.substring(s + 1)) {
                case"ok":
                    i.success && i.success(t);
                    break;
                case"cancel":
                    i.cancel && i.cancel(t);
                    break;
                default:
                    i.fail && i.fail(t)
            }
            i.complete && i.complete(t)
        }

        function o(e, t) {
            var i, n, s, r;
            if (t) {
                switch (i = t.indexOf(":"), e) {
                    case h.config:
                        n = "config";
                        break;
                    case h.openProductSpecificView:
                        n = "openProductSpecificView";
                        break;
                    default:
                        n = t.substring(0, i), n = n.replace(/_/g, " "), n = n.replace(/\b\w+\b/g, function (e) {
                            return e.substring(0, 1).toUpperCase() + e.substring(1)
                        }), n = n.substring(0, 1).toLowerCase() + n.substring(1), n = n.replace(/ /g, ""), -1 != n.indexOf("Wcpay") && (n = n.replace("Wcpay", "WCPay")), s = p[n], s && (n = s)
                }
                r = t.substring(i + 1), "confirm" == r && (r = "ok"), "failed" == r && (r = "fail"), -1 != r.indexOf("failed_") && (r = r.substring(7)), -1 != r.indexOf("fail_") && (r = r.substring(5)), r = r.replace(/_/g, " "), r = r.toLowerCase(), ("access denied" == r || "no permission to execute" == r) && (r = "permission denied"), "config" == n && "function not exist" == r && (r = "ok"), t = n + ":" + r
            }
            return t
        }

        function l(e) {
            var t, i, n, s;
            if (e) {
                for (t = 0, i = e.length; i > t; ++t)n = e[t], s = h[n], s && (e[t] = s);
                return e
            }
        }

        function c(e, t) {
            if (I.debug && !t.isInnerInvoke) {
                var i = p[e];
                i && (e = i), t && t._complete && delete t._complete, console.log('"' + e + '",', t || "")
            }
        }

        function d() {
            if (!("6.0.2" > x || T.systemType < 0)) {
                var e = new Image;
                T.appId = I.appId, T.initTime = w.initEndTime - w.initStartTime, T.preVerifyTime = w.preVerifyEndTime - w.preVerifyStartTime, k.getNetworkType({
                    isInnerInvoke: !0,
                    success: function (t) {
                        T.networkType = t.networkType;
                        var i = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;
                        e.src = i
                    }
                })
            }
        }

        function u() {
            return (new Date).getTime()
        }

        function f(t) {
            $ && (e.WeixinJSBridge ? t() : m.addEventListener && m.addEventListener("WeixinJSBridgeReady", t, !1))
        }

        function _() {
            k.invoke || (k.invoke = function (t, i, n) {
                e.WeixinJSBridge && WeixinJSBridge.invoke(t, s(i), n)
            }, k.on = function (t, i) {
                e.WeixinJSBridge && WeixinJSBridge.on(t, i)
            })
        }

        var h, p, m, v, g, $, y, b, x, w, T, I, C, S, k;
        if (!e.jWeixin)return h = {
            config: "preVerifyJSAPI",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest"
        }, p = function () {
            var e, t = {};
            for (e in h)t[h[e]] = e;
            return t
        }(), m = e.document, v = m.title, g = navigator.userAgent.toLowerCase(), $ = -1 != g.indexOf("micromessenger"), y = -1 != g.indexOf("android"), b = -1 != g.indexOf("iphone") || -1 != g.indexOf("ipad"), x = function () {
            var e = g.match(/micromessenger\/(\d+\.\d+\.\d+)/) || g.match(/micromessenger\/(\d+\.\d+)/);
            return e ? e[1] : ""
        }(), w = {initStartTime: u(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0}, T = {
            version: 1,
            appId: "",
            initTime: 0,
            preVerifyTime: 0,
            networkType: "",
            isPreVerifyOk: 1,
            systemType: b ? 1 : y ? 2 : -1,
            clientVersion: x,
            url: encodeURIComponent(location.href)
        }, I = {}, C = {_completes: []}, S = {state: 0, res: {}}, f(function () {
            w.initEndTime = u()
        }), k = {
            config: function (e) {
                I = e, c("config", e);
                var t = I.check === !1 ? !1 : !0;
                f(function () {
                    var e, n, s;
                    if (t)i(h.config, {verifyJsApiList: l(I.jsApiList)}, function () {
                        C._complete = function (e) {
                            w.preVerifyEndTime = u(), S.state = 1, S.res = e
                        }, C.success = function () {
                            T.isPreVerifyOk = 0
                        }, C.fail = function (e) {
                            C._fail ? C._fail(e) : S.state = -1
                        };
                        var e = C._completes;
                        return e.push(function () {
                            I.debug || d()
                        }), C.complete = function () {
                            for (var t = 0, i = e.length; i > t; ++t)e[t]();
                            C._completes = []
                        }, C
                    }()), w.preVerifyStartTime = u(); else {
                        for (S.state = 1, e = C._completes, n = 0, s = e.length; s > n; ++n)e[n]();
                        C._completes = []
                    }
                }), I.beta && _()
            }, ready: function (e) {
                0 != S.state ? e() : (C._completes.push(e), !$ && I.debug && e())
            }, error: function (e) {
                "6.0.2" > x || (-1 == S.state ? e(S.res) : C._fail = e)
            }, checkJsApi: function (e) {
                var t = function (e) {
                    var t, i, n = e.checkResult;
                    for (t in n)i = p[t], i && (n[i] = n[t], delete n[t]);
                    return e
                };
                i("checkJsApi", {jsApiList: l(e.jsApiList)}, function () {
                    return e._complete = function (e) {
                        if (y) {
                            var i = e.checkResult;
                            i && (e.checkResult = JSON.parse(i))
                        }
                        e = t(e)
                    }, e
                }())
            }, onMenuShareTimeline: function (e) {
                n(h.onMenuShareTimeline, {
                    complete: function () {
                        i("shareTimeline", {
                            title: e.title || v,
                            desc: e.title || v,
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareAppMessage: function (e) {
                n(h.onMenuShareAppMessage, {
                    complete: function () {
                        i("sendAppMessage", {
                            title: e.title || v,
                            desc: e.desc || "",
                            link: e.link || location.href,
                            img_url: e.imgUrl || "",
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        }, e)
                    }
                }, e)
            }, onMenuShareQQ: function (e) {
                n(h.onMenuShareQQ, {
                    complete: function () {
                        i("shareQQ", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareWeibo: function (e) {
                n(h.onMenuShareWeibo, {
                    complete: function () {
                        i("shareWeiboApp", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareQZone: function (e) {
                n(h.onMenuShareQZone, {
                    complete: function () {
                        i("shareQZone", {
                            title: e.title || v,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, startRecord: function (e) {
                i("startRecord", {}, e)
            }, stopRecord: function (e) {
                i("stopRecord", {}, e)
            }, onVoiceRecordEnd: function (e) {
                n("onVoiceRecordEnd", e)
            }, playVoice: function (e) {
                i("playVoice", {localId: e.localId}, e)
            }, pauseVoice: function (e) {
                i("pauseVoice", {localId: e.localId}, e)
            }, stopVoice: function (e) {
                i("stopVoice", {localId: e.localId}, e)
            }, onVoicePlayEnd: function (e) {
                n("onVoicePlayEnd", e)
            }, uploadVoice: function (e) {
                i("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadVoice: function (e) {
                i("downloadVoice", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, translateVoice: function (e) {
                i("translateVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, chooseImage: function (e) {
                i("chooseImage", {
                    scene: "1|2",
                    count: e.count || 9,
                    sizeType: e.sizeType || ["original", "compressed"]
                }, function () {
                    return e._complete = function (e) {
                        if (y) {
                            var t = e.localIds;
                            t && (e.localIds = JSON.parse(t))
                        }
                    }, e
                }())
            }, previewImage: function (e) {
                i(h.previewImage, {current: e.current, urls: e.urls}, e)
            }, uploadImage: function (e) {
                i("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadImage: function (e) {
                i("downloadImage", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, getNetworkType: function (e) {
                var t = function (e) {
                    var t, i, n, s = e.errMsg;
                    if (e.errMsg = "getNetworkType:ok", t = e.subtype, delete e.subtype, t)e.networkType = t; else switch (i = s.indexOf(":"), n = s.substring(i + 1)) {
                        case"wifi":
                        case"edge":
                        case"wwan":
                            e.networkType = n;
                            break;
                        default:
                            e.errMsg = "getNetworkType:fail"
                    }
                    return e
                };
                i("getNetworkType", {}, function () {
                    return e._complete = function (e) {
                        e = t(e)
                    }, e
                }())
            }, openLocation: function (e) {
                i("openLocation", {
                    latitude: e.latitude,
                    longitude: e.longitude,
                    name: e.name || "",
                    address: e.address || "",
                    scale: e.scale || 28,
                    infoUrl: e.infoUrl || ""
                }, e)
            }, getLocation: function (e) {
                e = e || {}, i(h.getLocation, {type: e.type || "wgs84"}, function () {
                    return e._complete = function (e) {
                        delete e.type
                    }, e
                }())
            }, hideOptionMenu: function (e) {
                i("hideOptionMenu", {}, e)
            }, showOptionMenu: function (e) {
                i("showOptionMenu", {}, e)
            }, closeWindow: function (e) {
                e = e || {}, i("closeWindow", {immediate_close: e.immediateClose || 0}, e)
            }, hideMenuItems: function (e) {
                i("hideMenuItems", {menuList: e.menuList}, e)
            }, showMenuItems: function (e) {
                i("showMenuItems", {menuList: e.menuList}, e)
            }, hideAllNonBaseMenuItem: function (e) {
                i("hideAllNonBaseMenuItem", {}, e)
            }, showAllNonBaseMenuItem: function (e) {
                i("showAllNonBaseMenuItem", {}, e)
            }, scanQRCode: function (e) {
                e = e || {}, i("scanQRCode", {
                    needResult: e.needResult || 0,
                    scanType: e.scanType || ["qrCode", "barCode"]
                }, function () {
                    return e._complete = function (e) {
                        var t, i;
                        b && (t = e.resultStr, t && (i = JSON.parse(t), e.resultStr = i && i.scan_code && i.scan_code.scan_result))
                    }, e
                }())
            }, openProductSpecificView: function (e) {
                i(h.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0}, e)
            }, addCard: function (e) {
                var t, n, s, r, a = e.cardList, o = [];
                for (t = 0, n = a.length; n > t; ++t)s = a[t], r = {card_id: s.cardId, card_ext: s.cardExt}, o.push(r);
                i(h.addCard, {card_list: o}, function () {
                    return e._complete = function (e) {
                        var t, i, n, s = e.card_list;
                        if (s) {
                            for (s = JSON.parse(s), t = 0, i = s.length; i > t; ++t)n = s[t], n.cardId = n.card_id, n.cardExt = n.card_ext, n.isSuccess = n.is_succ ? !0 : !1, delete n.card_id, delete n.card_ext, delete n.is_succ;
                            e.cardList = s, delete e.card_list
                        }
                    }, e
                }())
            }, chooseCard: function (e) {
                i("chooseCard", {
                    app_id: I.appId,
                    location_id: e.shopId || "",
                    sign_type: e.signType || "SHA1",
                    card_id: e.cardId || "",
                    card_type: e.cardType || "",
                    card_sign: e.cardSign,
                    time_stamp: e.timestamp + "",
                    nonce_str: e.nonceStr
                }, function () {
                    return e._complete = function (e) {
                        e.cardList = e.choose_card_info, delete e.choose_card_info
                    }, e
                }())
            }, openCard: function (e) {
                var t, n, s, r, a = e.cardList, o = [];
                for (t = 0, n = a.length; n > t; ++t)s = a[t], r = {card_id: s.cardId, code: s.code}, o.push(r);
                i(h.openCard, {card_list: o}, e)
            }, chooseWXPay: function (e) {
                i(h.chooseWXPay, r(e), e)
            }
        }, t && (e.wx = e.jWeixin = k), k
    }(this, !0)
});
I$(16, function (e, t, i, n, s, r, a, o, l) {
    s._$$WeixinShare = e._$klass();
    l = s._$$WeixinShare._$extend(i._$$Module);
    l.__reset = function (e) {
        this.__super(e);
        if (!(e.imgUrl && e.title && e.link && e.msg1 && e.msg2))return !1;
        n._$request("/m/openplatform/weixin/gainSign", {
            data: {url: location.href.split("#")[0]}, method: "get", onload: function (i) {
                t.config({
                    debug: !1,
                    appId: i.appid,
                    timestamp: i.timestamp,
                    nonceStr: i.nonceStr,
                    signature: i.signature,
                    jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "chooseImage"]
                });
                t.error(function (t) {
                    if (e.debug)alert(t.errMsg)
                });
                t.ready(function () {
                    t.onMenuShareTimeline({
                        title: e.msg1, link: e.link, imgUrl: e.imgUrl, success: function () {
                            e.success()
                        }, cancel: function () {
                            e.cancel()
                        }
                    });
                    t.onMenuShareAppMessage({
                        title: e.title,
                        desc: e.msg2,
                        link: e.link,
                        imgUrl: e.imgUrl,
                        success: function (t) {
                            e.success()
                        },
                        cancel: function (t) {
                            e.cancel()
                        },
                        fail: function (e) {
                        }
                    })
                })
            }, onerror: function (e) {
            }
        })
    };
    return s
}, 2, 144, 12, 130);
I$(312, function (e, t, i, n) {
    e.__getItemInStorage = function (e) {
        return localStorage.getItem(e)
    };
    e.__setItemToStorage = function (e, t) {
        localStorage.setItem(e, t)
    };
    e.__removeItemFromStorage = function (e) {
        localStorage.removeItem(e)
    };
    e.__clearStorage = function () {
        localStorage.clear()
    };
    e.__initStorage = function () {
        (document.onstorageready || i)()
    };
    e.__isStorageReady = function () {
        return !0
    };
    return e
});
I$(265, function (e, t, i, n, s, r, a) {
    return i
}, 249, 5, 312);
I$(172, function (e, t, i, n, s, r, a, o, l) {
    var c = {};
    r._$setDataInStorage = function (e, t) {
        var i = JSON.stringify(t);
        try {
            s.__setItemToStorage(e, i)
        } catch (n) {
            console.error(n.message);
            console.error(n)
        }
        if (i != s.__getItemInStorage(e))c[e] = t
    };
    r._$getDataInStorage = function (e) {
        var t = JSON.parse(s.__getItemInStorage(e) || "null");
        return null == t ? c[e] : t
    };
    r._$getDataInStorageWithDefault = function (e, t) {
        var i = r._$getDataInStorage(e);
        if (null == i) {
            i = t;
            r._$setDataInStorage(e, i)
        }
        return i
    };
    r._$delDataInStorage = function (e) {
        delete c[e];
        s.__removeItemFromStorage(e)
    };
    r._$clearDataInStorage = function () {
        var e = function (e, t, i) {
            delete i[t]
        };
        return function () {
            t._$loop(c, e);
            s.__clearStorage()
        }
    }();
    n._$$CustomEvent._$allocate({
        element: document, event: "storageready", oneventadd: function () {
            if (s.__isStorageReady())i._$dispatchEvent(document, "storageready")
        }
    });
    var d = function () {
        var e = function (e, t, i) {
            s.__setItemToStorage(t, JSON.stringify(e));
            delete i[t]
        };
        return function () {
            t._$loop(c, e)
        }
    }();
    i._$addEvent(document, "storageready", d);
    s.__initStorage();
    if (!0)e.copy(e.P("nej.j"), r);
    return r
}, 132, 28, 5, 243, 265);
I$(330, function (e, t, i, n, s, r, a, o, l) {
    var c;
    r._$$Layer = t._$klass();
    c = r._$$Layer._$extend(s._$$Abstract);
    c.__reset = function (e) {
        this.__super(e);
        this._$setEvent("oncontentready", e.oncontentready || this.__doInitContent._$bind(this));
        this.__nohack = !!e.nohack;
        this.__destroyable = !!e.destroyable;
        this._$setContent(e.content)
    };
    c.__destroy = function () {
        this._$dispatchEvent("onbeforerecycle");
        this.__super();
        this.__doHide();
        this._$setContent("");
        i._$style(this.__body, {top: "", left: ""})
    };
    c.__doInitContent = o;
    c.__doPositionAlign = o;
    c.__doHide = function () {
        i._$removeByEC(this.__body);
        if (this.__mask) {
            this.__mask = i._$unmask(this.__body);
            delete this.__mask
        }
    };
    c._$setContent = function (e) {
        if (this.__body && this.__ncnt && null != e) {
            e = e || "";
            n._$isString(e) ? this.__ncnt.innerHTML = e : this.__ncnt.appendChild(e);
            this._$dispatchEvent("oncontentready", this.__ncnt)
        }
    };
    c._$setPosition = function (e) {
        var t = e.top;
        if (null != t) {
            t += "px";
            i._$setStyle(this.__body, "top", t);
            i._$setStyle(this.__mask, "top", t)
        }
        var t = e.left;
        if (null != t) {
            t += "px";
            i._$setStyle(this.__body, "left", t);
            i._$setStyle(this.__mask, "left", t)
        }
    };
    c._$show = function () {
        i._$setStyle(this.__body, "visibility", "hidden");
        this.__super();
        this.__doPositionAlign();
        i._$setStyle(this.__body, "visibility", "");
        if (!this.__nohack)this.__mask = i._$mask(this.__body)
    };
    c._$hide = function () {
        this.__destroyable ? this._$recycle() : this.__doHide()
    };
    if (!0)e.copy(e.P("nej.ui"), r);
    return r
}, 132, 2, 3, 28, 159);
I$(334, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$LayerWrapper = t._$klass();
    d = a._$$LayerWrapper._$extend(s._$$Abstract);
    d.__reset = function (e) {
        this.__doInitLayerOptions();
        this.__super(this.__doFilterOptions(e));
        this.__lopt.onbeforerecycle = this._$recycle._$bind(this);
        this.__layer = this.__getLayerInstance()
    };
    d.__destroy = function () {
        this._$dispatchEvent("onbeforerecycle");
        this.__super();
        delete this.__lopt;
        i._$removeByEC(this.__body);
        var e = this.__layer;
        if (e) {
            delete this.__layer;
            e._$recycle()
        }
    };
    d.__getLayerInstance = l;
    d.__doFilterOptions = function (e) {
        var t = {};
        n._$loop(e, function (e, i) {
            this.__lopt.hasOwnProperty(i) ? this.__lopt[i] = e : t[i] = e
        }, this);
        return t
    };
    d.__doInitLayerOptions = function () {
        this.__lopt = {clazz: "", parent: null, content: this.__body, destroyable: !1, oncontentready: null, nohack: !1}
    };
    d._$show = function () {
        if (this.__layer)this.__layer._$show();
        this._$dispatchEvent("onaftershow")
    };
    d._$hide = function () {
        if (this.__layer)this.__layer._$hide()
    };
    if (!0)e.copy(e.P("nej.ui"), a);
    return a
}, 132, 2, 3, 28, 159, 330);
I$(315, function (e) {
    return e
}, 334);
I$(331, function (e, t, i, n, s, r, a, o, l, c) {
    r._$$Draggable = t._$klass();
    c = r._$$Draggable._$extend(s._$$EventTarget);
    c.__reset = function (e) {
        this.__super(e);
        this.__overflow = !!e.overflow;
        this.__body = i._$get(e.body);
        this.__mbar = i._$get(e.mbar) || this.__body;
        this.__view = i._$get(e.view) || i._$getPageBox();
        this.__direction = parseInt(e.direction) || 0;
        this.__doInitDomEvent([[document, "mouseup", this.__onDragEnd._$bind(this)], [document, "mousemove", this.__onDragging._$bind(this)], [this.__mbar, "mousedown", this.__onDragStart._$bind(this)]])
    };
    c.__destroy = function () {
        this.__super();
        delete this.__body;
        delete this.__mbar;
        delete this.__view
    };
    c.__getMaxRange = function () {
        return {
            x: this.__view.clientWidth - this.__body.offsetWidth,
            y: this.__view.clientHeight - this.__body.offsetHeight
        }
    };
    c.__onDragStart = function (e) {
        n._$stop(e);
        if (!this.__offset) {
            this.__offset = {x: n._$pageX(e), y: n._$pageY(e)};
            this.__maxbox = this.__getMaxRange()
        }
    };
    c.__onDragging = function (e) {
        if (this.__offset) {
            var t = {x: n._$pageX(e), y: n._$pageY(e)};
            var s = t.x - this.__offset.x, r = t.y - this.__offset.y, a = parseInt(i._$getStyle(this.__body, "top")) || 0, o = parseInt(i._$getStyle(this.__body, "left")) || 0, l = {
                top: a + r,
                left: o + s
            };
            this.__offset = t;
            this._$setPosition(l)
        }
    };
    c.__onDragEnd = function (e) {
        if (this.__offset) {
            delete this.__maxbox;
            delete this.__offset;
            this._$dispatchEvent("ondragend", this._$getPosition())
        }
    };
    c._$setPosition = function (e) {
        if (!this.__overflow) {
            var t = this.__maxbox || this.__getMaxRange();
            e.top = Math.min(t.y, Math.max(0, e.top));
            e.left = Math.min(t.x, Math.max(0, e.left))
        }
        this._$dispatchEvent("onbeforechange", e);
        var i = this.__body.style;
        if (0 == this.__direction || 2 == this.__direction)i.top = e.top + "px";
        if (0 == this.__direction || 1 == this.__direction)i.left = e.left + "px";
        this._$dispatchEvent("onchange", e)
    };
    c._$getPosition = function () {
        return {
            left: parseInt(i._$getStyle(this.__body, "left")) || 0,
            top: parseInt(i._$getStyle(this.__body, "top")) || 0
        }
    };
    r._$$Dragger = r._$$Draggable;
    if (!0)e.copy(e.P("nej.ut"), r);
    return r
}, 132, 2, 3, 5, 4);
I$(332, ".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}\n.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}\n.#<uispace> .zcnt{padding:10px 5px;}\n.#<uispace> .zttl{margin-right:20px;text-align:left;}\n.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}\n");
I$(333, '<div>\n  <div class="zbar"><div class="zttl">标题</div></div>\n  <div class="zcnt"></div>\n  <span class="zcls" title="关闭窗体">×</span>\n</div>');
I$(316, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h) {
    var p = i._$pushCSSText(c), m = l._$addNodeTemplate(d), v;
    u._$$Window = t._$klass();
    v = u._$$Window._$extend(r._$$Layer);
    v.__init = function () {
        this.__mopt = {};
        this.__dopt = {onchange: this.__onDragging._$bind(this)};
        this.__super()
    };
    v.__reset = function (e) {
        this.__super(e);
        this.__setMask(e.mask);
        this._$setAlign(e.align);
        this._$setTitle(e.title);
        if (e.draggable)this.__dragger = o._$$Dragger._$allocate(this.__dopt)
    };
    v.__destroy = function () {
        this.__super();
        delete this.__align;
        delete this.__mclz;
        if (this.__imask) {
            this.__imask._$recycle();
            delete this.__imask
        }
        if (this.__dragger) {
            this.__dragger._$recycle();
            delete this.__dragger
        }
    };
    v.__initXGui = function () {
        this.__seed_css = p;
        this.__seed_html = m
    };
    v.__initNode = function () {
        this.__super();
        var e = i._$getChildren(this.__body);
        this.__ncnt = e[1];
        this.__dopt.mbar = e[0];
        this.__dopt.body = this.__body;
        n._$addEvent(e[2], "mousedown", this.__onClose._$bind(this));
        n._$addEvent(this.__dopt.mbar, "mousedown", this.__onDragStart._$bind(this));
        this.__nttl = i._$getChildren(this.__dopt.mbar)[0]
    };
    v.__onClose = function (e) {
        n._$stop(e);
        this._$dispatchEvent("onclose");
        this._$hide()
    };
    v.__onDragStart = function (e) {
        n._$dispatchEvent(document, "click")
    };
    v.__onDragging = function (e) {
        if (this.__mask)i._$style(this.__mask, {top: e.top + "px", left: e.left + "px"})
    };
    v.__doPositionAlign = function () {
        var e = [function () {
            return 0
        }, function (e, t, i) {
            return Math.max(0, e[i] + t[i] / 2)
        }, function (e, t, i) {
            return e[i] + t[i]
        }], t = ["left", "top"];
        return function () {
            var n = {}, r = this.__body.style, a = i._$getPageBox(), o = {
                left: a.scrollLeft,
                top: a.scrollTop
            }, l = {left: a.clientWidth - this.__body.offsetWidth, top: a.clientHeight - this.__body.offsetHeight};
            s._$forEach(t, function (t, i) {
                var s = e[this.__align[i]];
                if (s)n[t] = s(o, l, t)
            }, this);
            this._$setPosition(n)
        }
    }();
    v.__doShowMask = function () {
        if (!this.__imask) {
            if (!this.__mclz)return;
            this.__mopt.parent = this.__parent;
            this.__imask = this.__mclz._$allocate(this.__mopt)
        }
        this.__imask._$show()
    };
    v.__doHide = function () {
        if (this.__imask)this.__imask._$hide();
        this.__super()
    };
    v.__setMask = function (e) {
        if (!e)this.__mclz = null; else {
            if (e instanceof a._$$Mask) {
                this.__imask = e;
                return
            }
            if (s._$isFunction(e)) {
                this.__mclz = e;
                return
            }
            this.__mclz = a._$$Mask;
            if (s._$isString(e))this.__mopt.clazz = e
        }
    };
    v._$setTitle = function (e, t) {
        if (this.__nttl) {
            var i = !t ? "innerText" : "innerHTML";
            this.__nttl[i] = e || "标题"
        }
        return this
    };
    v._$setAlign = function () {
        var e = /\s+/, t = {left: 0, center: 1, right: 2, auto: 3}, i = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (n) {
            this.__align = (n || "").split(e);
            var s = t[this.__align[0]];
            if (null == s)s = 1;
            this.__align[0] = s;
            var s = i[this.__align[1]];
            if (null == s)s = 1;
            this.__align[1] = s;
            return this
        }
    }();
    v._$show = function () {
        this.__super();
        this.__doShowMask();
        return this
    };
    if (!0)e.copy(e.P("nej.ui"), u);
    return u
}, 132, 2, 3, 5, 28, 330, 256, 331, 118, 332, 333);
I$(289, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$WindowWrapper = t._$klass();
    l = s._$$WindowWrapper._$extend(i._$$LayerWrapper);
    l.__getLayerInstance = function () {
        return n._$$Window._$allocate(this.__lopt)
    };
    l.__doInitLayerOptions = function () {
        this.__super();
        this.__lopt.mask = null;
        this.__lopt.title = "标题";
        this.__lopt.align = "";
        this.__lopt.draggable = !1;
        this.__lopt.onclose = null
    };
    if (!0)e.copy(e.P("nej.ui"), s);
    return s
}, 132, 2, 315, 316);
I$(226, function (e, t, i) {
    var n;
    i._$$LWindow = e._$klass();
    n = i._$$LWindow._$extend(t._$$WindowWrapper);
    n.__reset = function (e) {
        e.parent = e.parent || document.body;
        if (e.clazz)e.clazz = "m-window " + e.clazz; else e.clazz = " m-window";
        e.draggable = !0;
        if ("none" == e.mask)delete e.mask; else e.mask = "m-mask";
        this.__super(e);
        this.__layer._$setTitle(e.title, !0)
    };
    n._$show = function () {
        this.__super();
        this.__body.focus();
        return this
    };
    return i._$$LWindow
}, 2, 289);
I$(229, '<div class="bd">\n  <p class="f-fs2 txt"><span class="j-flag">确定删除该地址？</span></p>\n  <div class="m-table btns">\n\t  <div class="tr">\n\t  \t<div class="td">\n\t  \t\t<a href="#" class="w-btn3 j-flag">确 定</a>\n\t  \t</div>\n\t  \t<div class="td">\n\t  \t\t<a href="#" class="w-btn3 w-btn3-1 j-flag nb">取 消</a>\n\t  \t</div>\n\t  </div>\n\t</div>\n</div>');
I$(230, ".m-mask{position:fixed;z-index:3000 !important;top:0;left:0;right:0;bottom:0;background:#000;filter:alpha(opacity = 40);opacity:0.4;-webkit-animation-duration:0.3s;-moz-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-name:nodeInserted;-moz-animation-name:nodeInserted;animation-name:nodeInserted;}\n.#<uispace>{width:310px;font-size:18px;}\n.#<uispace> .txt{text-align:center;padding:57px 0;}\n.#<uispace> .btns{border-top:1px solid #dedede}\n.#<uispace> .btns a{display:block;padding:17px 0;border-right:1px solid #dedede;color:#007aff}\n.#<uispace> .btns a.nb{border-right:none}\n.window-nozcls{z-index:4000 !important;}\n.window-nozcls span.zcls{display:none}");
I$(96, function (e, t, i, n, s, r, a, o) {
    var l, c;
    var d = a._$addNodeTemplate(s), u = t._$pushCSSText(r);
    o._$$SureWindow = e._$klass();
    l = o._$$SureWindow._$extend(n);
    c = o._$$SureWindow._$supro;
    l.__reset = function (e) {
        e.clazz += " window-nozcls";
        this.__supReset(e);
        this.__tip.innerHTML = e.txt || "确定删除该地址？"
    };
    l.__initXGui = function () {
        this.__seed_html = d;
        this.__seed_css = u
    };
    l.__destory = function () {
        this.__super()
    };
    l.__initNode = function () {
        this.__super();
        var e = t._$getByClassName(this.__body, "j-flag");
        this.__tip = e[0];
        i._$addEvent(e[1], "click", this.__onOKClick._$bind(this));
        i._$addEvent(e[2], "click", this.__onCCClick._$bind(this))
    };
    l.__onCCClick = function (e) {
        i._$stop(e);
        this._$hide()
    };
    l.__onOKClick = function (e) {
        i._$stop(e);
        this._$dispatchEvent("onok");
        this._$hide()
    };
    return o._$$SureWindow
}, 2, 3, 5, 226, 229, 230, 118);
I$(245, function (e, t, i, n, s, r) {
    var a = {};
    i.requestInterval = function () {
        var e = function (e) {
            try {
                e.cb(+new Date)
            } catch (t) {
            }
        };
        var i = function (i) {
            var n = a[i];
            if (n)t._$forEach(n.fn, e)
        };
        return function (e, n) {
            if (!t._$isFunction(e))return null;
            var s = a[n];
            if (!s) {
                s = {fn: []};
                a[n] = s
            }
            var r = t._$uniqueID();
            a[r] = n;
            s.fn.push({id: r, cb: e});
            if (null == s.tm)s.tm = window.setInterval(i._$bind(null, n), n);
            return r
        }
    }();
    i.cancelInterval = function (e) {
        var i = a[e], n = a[i];
        if (n) {
            var s = n.fn;
            t._$reverseEach(s, function (t, i, n) {
                if (t.id == e) {
                    n.splice(i, 1);
                    return !0
                }
            });
            if (!s.length) {
                window.clearInterval(n.tm);
                delete a[e];
                delete a[i]
            }
        }
    };
    if (!0)e.copy(this, i);
    return i
}, 132, 28);
I$(119, function (e, t, i, n, s, r, a, o, l, c) {
    var d = 1e3, u = "<p><span>${dd}天</span><span>${HH}小时</span><span>${mm}分钟</span><span>${ss}秒</span></p>", f = {};
    a.__getMeta = function (e) {
        var t = e / 1e3, i = Math.floor(t % 60), n = t / 60, s = t / 3600, r = t / 86400, n = Math.floor(n) % 60, s = Math.floor(s) % 24, r = Math.floor(r);
        var a = i > 9 ? i.toString() : "0" + i, o = n > 9 ? n.toString() : "0" + n, l = s > 9 ? s.toString() : "0" + s, c = r > 9 ? r.toString() : "0" + r, d = {
            dd: c,
            HH: l,
            mm: o,
            ss: a
        };
        return d
    };
    a._$clearCountdown = function (e) {
        if (f[e] && f[e].stil) {
            f[e].stil = r.cancelInterval(f[e].stil);
            f[e] = {};
            delete f[e]
        }
    };
    a.__formatTime = function (e) {
        var t = 1e3 * Math.ceil((e.endTime - (new Date).getTime()) / 1e3);
        t = t <= 0 ? 0 : t;
        return t
    };
    a._$formatTemplate = function (e, t) {
        var n = [], s, r = {1: "天", 2: "时", 3: "分", 4: "秒"}, a = {1: "天", 2: "小时", 3: "分钟", 4: "秒"}, o = "后结束";
        i._$loop(t, function (e, t) {
            if ("string" == typeof e)n.push(e)
        });
        for (var l = 0, c = n.length; l < c; l++)if ("00" != n[l]) {
            s = l + 1;
            break
        }
        if (s) {
            var d = r[s] || a[s];
            var u = e.indexOf(d);
            e = parseInt(e.substring(u - 2, u)) + d + o
        } else e = "倒计时结束";
        return e
    };
    a._$countdown = function () {
        var t = function (e, t, i, n) {
            _html = s._$get(e, t);
            var r = {html: _html, key: e, meta: t, isdown: i};
            if (n)n.innerHTML = a._$formatTemplate(_html, t);
            f[e].callback(r)
        };
        var n = function (e, i) {
            var n = a.__formatTime(f[e]);
            if (!(n <= 0)) {
                var s = a.__getMeta(n);
                t.call(this, e, s, !1, i)
            } else {
                var s = {dd: "00", HH: "00", mm: "00", ss: "00"};
                t.call(this, e, s, !0, i);
                a._$clearCountdown(e)
            }
        };
        return function (t, o, c) {
            var _, h, o = parseInt(o), p = (new Date).getTime(), m = new Date(p + o).getTime(), v = l;
            t = e._$get(t);
            if (i._$isString(c))h = c; else {
                h = c.format || u;
                v = c.onchange || l
            }
            _ = s._$get(h) ? h : s._$add(h);
            if (f[_])a._$clearCountdown(_);
            f[_] = {};
            f[_].endTime = m;
            f[_].callback = v;
            var g = s._$get(_, y), $ = a.__formatTime(f[_]), y = a.__getMeta($), b = {
                html: g,
                key: _,
                meta: y,
                isdown: $ <= 0 ? !0 : !1
            };
            f[_].callback(b);
            if ($ > 0)f[_].stil = r.requestInterval(n._$bind(null, _, t), c.updatetime || d);
            return _
        }
    }();
    return a
}, 3, 5, 28, 118, 29, 245);
I$(157, "{{#include this.content || content }}");
I$(31, function (e, t, i, n, s) {
    var r = i.extend({
        name: "m-countdown", template: s, config: function (e) {
            t.extend(e, {
                dd: "--",
                HH: "--",
                mm: "--",
                ss: "--",
                updatetime: 1e3,
                content: "<p><span>{{dd}}天</span><span>{{HH}}小时</span><span>{{mm}}分钟</span><span>{{ss}}秒</span></p>"
            })
        }, init: function (e) {
            this.$watch("time", this.dorefresh._$bind(this));
            this.$update()
        }, dorefresh: function (e, t) {
            var i = this.data;
            if (this.__key)n._$clearCountdown(this.__key);
            this.__key = n._$countdown(0, i.time || 0, {
                format: i.content,
                updatetime: i.updatetime,
                onchange: this.dochange._$bind(this)
            })
        }, dochange: function (t) {
            e._$merge(this.data, t.meta);
            this.$update();
            if (this.data.onchange)this.data.onchange.apply(null, arguments);
            this.$emit("onchange", t)
        }, destroy: function () {
            n._$clearCountdown(this.__key);
            this.supr()
        }
    });
    return r
}, 28, 1, 140, 119, 157);
I$(17, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u;
    o._$$Slide = e._$klass();
    u = o._$$Slide._$extend(s._$$EventTarget);
    u.__reset = function (e) {
        var i = function (e) {
            for (var i = 0, n = e.length; i < n; i++)t._$dataset(e[i], "index", i)
        };
        this.__supReset(e);
        this.__slideBox = e.slideBox;
        this.__iconBox = e.iconBox;
        this.__selected = e.selected || "j-idxcrt";
        this.__stop = e.stop || 4e3;
        this.__duration = e.duration || 500;
        this.__width = -1 * this.__slideBox.clientWidth;
        this.__maxpx = Math.ceil(Math.abs(this.__width) / 4);
        this.__imgs = this.__slideBox;
        this.__manualSlide = e.manualSlide || !1;
        this.__ilist = this.__iconBox.children;
        if (1 != this.__ilist.length) {
            this.__initSlide();
            i(this.__ilist);
            var n = "onorientationchange" in window, s = n ? "orientationchange" : "resize";
            window.addEventListener(s, function () {
                this.__width = -1 * this.__slideBox.clientWidth;
                var e = this.__index * this.__width + "px", i = "translate3d(" + e + ",0,0)";
                t._$setStyle(this.__slideBox, "transform", i)
            }._$bind(this), !1)
        } else t._$addClassName(this.__iconBox, "f-dn")
    };
    u.__initSlide = function () {
        this.__index = 0;
        this.__base = 0;
        this.__slideCount = this.__ilist.length - 1;
        this.__addEvent();
        this.__beforeSetInt();
        if (!this.__manualSlide)this.__timer = setInterval(this.__doSlide._$bind(this, 1), this.__stop);
        t._$addClassName(this.__ilist[this.__index], this.__selected)
    };
    u.__beforeSetInt = function () {
        if (this.__timer)this.__timer = clearInterval(this.__timer)
    };
    u.__addEvent = function () {
        this.__slideBox.addEventListener("touchstart", this.__onTouchstart._$bind(this), !1);
        this.__slideBox.addEventListener("touchmove", this.__onTouchmove._$bind(this), !1);
        this.__slideBox.addEventListener("touchend", this.__onTouchend._$bind(this), !1);
        if (a.isWeiXin())this.__slideBox.addEventListener("webkitTransitionEnd", this.__onTransitionend._$bind(this), !1); else this.__slideBox.addEventListener("transitionend", this.__onTransitionend._$bind(this), !1)
    };
    u.__onTouchstart = function (e) {
        if (!this.__lockAnim) {
            this.__timer = clearInterval(this.__timer);
            this.__x0 = e.touches[0].pageX;
            this.__y0 = e.touches[0].pageY;
            this.__move = 0;
            t._$setStyle(this.__slideBox, "transitionDuration", 0)
        }
    };
    u.__onTouchmove = function (e) {
        if (!this.__lockAnim) {
            var i = e.touches[0], s = i.pageX;
            this.__moveend = s;
            if (!this.__movestart) {
                var r, a;
                r = Math.abs(i.pageY - this.__y0);
                a = Math.abs(s - this.__x0);
                this.__movestart = !0;
                this.__notVertical = r <= a;
                this.__startTime = new Date
            } else this.__move = s - this.__x0;
            var o = this.__move + this.__base, l = "translate3d(" + o + "px,0,0)";
            if (!(o > 0 || o < this.__width * this.__slideCount))if (this.__notVertical) {
                n._$stop(e);
                t._$setStyle(this.__slideBox, "transform", l)
            } else; else this.__move = 0
        }
    };
    u.__onTouchend = function (e) {
        if (!this.__lockAnim) {
            if (!this.__startTime) {
                var i = n._$getElement(e), s = t._$dataset(i, "link");
                if (s)location.href = s
            } else {
                this.__endpoint = e.changedTouches[0].pageX;
                this.__movestart = !1;
                var r = Math.abs(this.__move), a = new Date, o = a.getTime() - this.__startTime.getTime(), l = 1e3 * r / o;
                if (r > this.__maxpx || Math.abs(l) > 100 && 0 != this.__move)if (this.__move < 0)this.__index++; else this.__index--;
                this.__startTime = null;
                this.__doSlide(1, !0, this.__index)
            }
            this.__beforeSetInt();
            if (!this.__manualSlide)this.__timer = setInterval(this.__doSlide._$bind(this, 1), this.__stop)
        }
    };
    u.__onTransitionend = function (e) {
        n._$stop(e);
        i._$forEach(this.__ilist, function (e) {
            t._$delClassName(e, this.__selected)
        }._$bind(this));
        this.__base = this.__width * this.__index;
        t._$addClassName(this.__ilist[this.__index], this.__selected);
        this.__lockAnim = !1
    };
    u.__doSlide = function (e, i, n) {
        if (!this.__lockAnim) {
            if (i)if (0 == this.__move || !this.__notVertical)return;
            if (i)this.__index = n; else this.__index++;
            if (this.__index == this.__ilist.length)this.__index = 0; else if (this.__index < 0)this.__index = this.__ilist.length - 1;
            this.__lockAnim = !0;
            var s = this.__index * this.__width + "px", r = "translate3d(" + s + ",0,0)";
            t._$setStyle(this.__slideBox, "transitionDuration", this.__duration + "ms");
            t._$setStyle(this.__slideBox, "transform", r)
        }
    };
    return o
}, 2, 3, 28, 5, 4, 145, 1);
I$(193, '\n<div class="m-modal {{clazz}}">\n  <div class="placeholder"></div>\n  <div class="w-win container">\n      <span class="close" on-click={{this.close()}}></span>\n      <div class="title">{{title}}</div>\n      <div class="f-cb">\n          {{#include this.content || content }}\n      </div>\n      <div class="btns">\n          <span class="ok" on-click={{this.confirm()}}>{{confirmtext || "保 存"}}</span>\n          <span class="cc" on-click={{this.close()}}>{{concelText || "取 消"}}</span>\n      </div>\n  </div>\n</div>');
I$(53, function (e, t, i, n, s, r, a, o) {
    var l = Regular.dom;
    var c = t._$html2node("<div class='u-modal-anchor'></div>");
    l.inject(c, document.body, "top");
    var d = i.extend({
        template: n, data: {autofix: !0}, init: function () {
            if (this.$root === this)this.inject(document.body);
            if (this.data.autofix)l.addClass(document.documentElement, "z-overy")
        }, show: function (e) {
        }, close: function () {
            this.$emit("close");
            this.destroy()
        }, confirm: function () {
            this.$emit("confirm", this.data);
            this.destroy()
        }, destroy: function () {
            this.supr();
            l.delClass(document.documentElement, "z-overy")
        }
    });
    return d
}, 1, 3, 140, 193);
I$(146, function (e, t, i, n, s, r, a) {
    i._$pullUp = function (i, n, s) {
        var r;
        var a = {
            from: {offset: parseInt(e._$getStyle(i, "height"))},
            to: {offset: 0},
            duration: n,
            onupdate: function (t) {
                e._$setStyle(i, "height", t.offset + "px")
            }._$bind(this),
            onstop: function () {
                t._$$AnimEaseOut._$recycle(r);
                if (s)s()
            }
        };
        r = t._$$AnimEaseOut._$allocate(a);
        r._$play()
    };
    i._$pullDown = function (i, n, s) {
        var r;
        var a = {
            from: {offset: parseInt(e._$getStyle(i, "height"))},
            to: {offset: n},
            duration: s,
            onupdate: function (t) {
                e._$setStyle(i, "height", t.offset + "px")
            }._$bind(this),
            onstop: function () {
                t._$$AnimEaseOut._$recycle(r)
            }
        };
        r = t._$$AnimEaseOut._$allocate(a);
        r._$play()
    };
    i._$widthTransform = function (i, n, s, r) {
        var a;
        var o = {
            from: {offset: i.clientWidth || i.offsetWidth}, to: {offset: n}, duration: s, onupdate: function (t) {
                var n = t.offset;
                if (r && "ceil" == r)n = Math.ceil(n); else if (r && "floor" == r)n = Math.floor(n);
                e._$setStyle(i, "width", n + "px")
            }._$bind(this), onstop: function () {
                t._$$AnimEaseOut._$recycle(a)
            }
        };
        a = t._$$AnimEaseOut._$allocate(o);
        a._$play();
        return a
    };
    i._$move = function (i, n, s) {
        var r;
        var a = {
            from: {offset: parseInt(e._$getStyle(i, "left")) || 0},
            to: {offset: n},
            duration: s,
            onupdate: function (t) {
                e._$setStyle(i, "left", t.offset + "px")
            }._$bind(this),
            onstop: function () {
                t._$$AnimEaseOut._$recycle(r)
            }
        };
        r = t._$$AnimEaseOut._$allocate(a);
        r._$play()
    };
    i._$vmove = function (i, n, s) {
        var r;
        var a = {
            from: {offset: parseInt(e._$getStyle(i, "bottom")) || 0},
            to: {offset: n},
            duration: s,
            onupdate: function (t) {
                e._$setStyle(i, "bottom", t.offset + "px")
            }._$bind(this),
            onstop: function () {
                t._$$AnimEaseOut._$recycle(r)
            }
        };
        r = t._$$AnimEaseOut._$allocate(a);
        r._$play()
    };
    return i
}, 3, 129);
I$(192, '{{#if product.isJoinPic==1 && !!product.prodShowPicList}}\n<ul class="m-plist">\n    {{#list product.prodShowPicList as list}}\n        <li><img src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="{{list}}?imageView&thumbnail=390x390&quality=85" alt="" class="u-loading-1 u-loading-hold"></li>\n    {{/list}}\n</ul>\n{{/if}}\n<div class="html"></div>\n\n');
I$(51, function (e, t, i, n, s, r, a) {
    var o = e.extend({
        template: t, config: function (e) {
        }, init: function () {
            var e = this.data;
            var t = nes.one(".cnt");
            this.$inject(t);
            this.imghandle()
        }, imghandle: function () {
            var e = this.data.product.customEditHTML || "";
            if (e) {
                var t = i._$create("div");
                t.innerHTML = e;
                var n = i._$create("img");
                n.src = "http://paopao.nosdn.127.net/97f385d4b6516b321fab7b838a1630c7.jpg";
                t.appendChild(n);
                var s = t.getElementsByTagName("img");
                for (var r = 0, a = s.length; r < a; r++) {
                    var o = s[r];
                    var l = i._$attr(o, "src");
                    if (l.indexOf("paopao.nosdn.127.net") >= 0 && l.indexOf("?") < 0)l += "?imageView&thumbnail=750x0&quality=75&interlace=1";
                    if (r < 2)o.src = l; else {
                        o.src = "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                        i._$dataset(o, "src", l);
                        i._$addClassName(o, "u-loading-1 u-loading-hold")
                    }
                }
                var c = i._$getByClassName(document, "html");
                c[0].appendChild(t)
            }
        }
    });
    return o
}, 140, 192, 3);
I$(186, function (e, t, i, n, s, r, a, o) {
    n._$$LazyImage = e._$klass();
    o = n._$$LazyImage._$extend(i._$$LazyImage);
    o.__reset = function (e) {
        e.attr = "src,axis";
        this.__super(e)
    };
    o.__doCheckResource = function (e, i) {
        var n = i.clientHeight, s = -n, r = 1.5 * n, a = t._$offset(e, i).y - i.scrollTop, o = a + e.offsetHeight, l = this.__getSettingInfo(e), c = !e.src || e.src.indexOf(this.__holder) >= 0 || e.src.indexOf(l.src) < 0;
        if (c && s <= o && a <= r)return 1; else return 0
    };
    o.__doAppendResource = function (e, t) {
        var i = this.__holder;
        if (t.src) {
            i = t.src;
            if (i.indexOf("paopao.nosdn.127.net") >= 0 && i.indexOf("?") < 0)i += "?imageView&quality=85"
        }
        e.src = i;
        if (e.src != this.__holder);
    }
}, 2, 3, 137);
I$(190, '\n<div class="g-group-rec push-{{push}}">\n    <a href="/groupMemDetail/share?groupRecordId={{list.id}}">\n        <div class="img">\n            {{#if list.imgHeadUrl == "" || list.imgHeadUrl == null}}\n                 <img src="http://paopao.nosdn.127.net/e00e390e2703af58b39dd5f9d803d3d7.jpg">\n            {{#else}}\n                 <img src="{{list.imgHeadUrl}}">\n            {{/if}}\n        </div>\n        {{list.location}}用户<span class="name">{{list.nickName|cutstr2:10}}</span>刚刚开团\n        <div class="circle-wrap"><span class="circle"></span></div>\n    </a>\n</div>\n\n\n');
I$(47, function (e, t, i, n, s, r, a, o, l, c) {
    var d = e.extend({
        name: "message", template: t, config: function () {
            i.extend(this.data, {push: 0, interval: 6e3, duration: 4e3});
            this.data.list = this.data.lists[0]
        }, init: function () {
            this.$inject(document.body);
            this.pushMessage()
        }, pushMessage: function () {
            var e = this.data.lists;
            var t = this.data.duration;
            var i = this.data.interval;
            var n = this;
            for (var s = 0; s < e.length && s < 5; s++)!function (e) {
                setTimeout(function () {
                    n.data.push = 1;
                    n.data.list = n.data.lists[e];
                    n.$update();
                    setTimeout(function () {
                        n.data.push = 0;
                        n.$update()
                    }, t)
                }, i * (e + 1) + t * e)
            }(s)
        }
    });
    return d
}, 140, 190, 1, 3, 5, 28);
I$(55, function (e, t, i, n, s, r, a, o, l, c, d, u, f) {
    l._$$shareModal = e._$klass();
    f = l._$$shareModal._$extend(i._$$EventTarget);
    f.__reset = function (e) {
        this.__super(e);
        this.__onShare()
    };
    f.__onShare = function () {
        if (s.platform().PC)a.notify({
            type: "error",
            message: "抱歉，只能在手机端分享~"
        }); else if (s.isWeiXin())this.__modal = new o({
            data: {
                clazz: "m-share-modal-wrap",
                content: '<div class="m-share-modal-inner"><div>1. 点击右上角<span class="u-dots"></span></div><div class="step2">2. 点击<span class="u-send"></span>或<span class="u-share2"></span>分享</div><div class="txt"><span>发送给朋友</span><span>分享到朋友圈</span></div></div><span class="u-pointer"></span>',
                concelText: "我知道了"
            }
        }); else this.__modal = new o({
            data: {
                clazz: "m-share-modal-wrap",
                content: '<div class="m-share-modal-inner"><div>1. 点击<span class="u-share3"></span></div><div class="step2">2. 点击<span class="u-send"></span>或<span class="u-share2"></span>分享</div><div class="txt"><span>发送给朋友</span><span>分享到朋友圈</span></div></div>',
                concelText: "我知道了"
            }
        })
    };
    f.close = function () {
        if (this.__modal)this.__modal.close()
    };
    return l._$$shareModal
}, 2, 28, 4, 3, 1, 5, 20, 53);
I$(57, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$Tab = t._$klass();
    d = a._$$Tab._$extend(r._$$EventTarget);
    d.__reset = function (e) {
        this.__super(e);
        this.__name = e.event || "click";
        this.__selected = e.selected || "js-selected";
        this.__disabled = e.disabled || "js-disabled";
        this.__inversed = !!e.inverse;
        this.__doTabListCheck(e.list);
        this._$go(e.index || 0)
    };
    d.__destroy = function () {
        var e = function (e) {
            this.__doTabItemSelect(e, !1)
        };
        return function () {
            this.__super();
            n._$forEach(this.__list, e, this);
            delete this.__list;
            delete this.__name;
            delete this.__index;
            delete this.__disabled;
            delete this.__selected;
            delete this.__inversed
        }
    }();
    d.__doTabListCheck = function () {
        var e = function (e) {
            if (e) {
                this.__list.push(e);
                var t = this.__list.length - 1, i = this.__cblist[t];
                if (!i) {
                    i = this._$go._$bind(this, t);
                    this.__cblist[t] = i
                }
                this.__doInitDomEvent([[e, this.__name, i]])
            }
        };
        return function (t) {
            this.__list = [];
            if (!this.__cblist)this.__cblist = [];
            n._$forEach(t, e, this)
        }
    }();
    d.__doTabItemSelect = function (e, t) {
        t && !this.__inversed ? s._$addClassName(e, this.__selected) : s._$delClassName(e, this.__selected)
    };
    d._$go = function (e, t) {
        var n = this.__list[e];
        if (1 != t && (e == this.__index || !n || s._$hasClassName(n, this.__disabled)))i._$stopDefault(arguments[1]);
        var r = {stopped: !0, index: e, last: this.__index, list: this._$getList(), data: s._$dataset(n, "value")};
        this.__index = e;
        n = this.__list[r.last];
        if (n)this.__doTabItemSelect(n, !1);
        n = this.__list[this.__index];
        this.__doTabItemSelect(n, !0);
        this._$dispatchEvent("onchange", r);
        if (r.stopped)i._$stopDefault(arguments[1])
    };
    d._$getIndex = function () {
        return this.__index
    };
    d._$getList = function () {
        return this.__list
    };
    if (!0)e.copy(e.P("nej.ut"), a);
    return a
}, 132, 2, 5, 28, 3, 4);
I$(320, function (e, t, i, n, s, r, a, o, l) {
    var c, d = "dat-" + +new Date;
    r._$$CacheAbstract = t._$klass();
    c = r._$$CacheAbstract._$extend(n._$$EventTarget);
    c.__init = function () {
        this.__super();
        this.__cache = this.constructor[d];
        if (!this.__cache) {
            this.__cache = {};
            this.__cache[d + "-l"] = {};
            this.constructor[d] = this.__cache
        }
    };
    c.__getDataInCache = function (e) {
        return this.__cache[e]
    };
    c.__setDataInCache = function (e, t) {
        this.__cache[e] = t
    };
    c.__getDataInCacheWithDefault = function (e, t) {
        var i = this.__getDataInCache(e);
        if (null == i) {
            i = t;
            this.__setDataInCache(e, i)
        }
        return i
    };
    c.__delDataInCache = function (e) {
        if (null == e)i._$loop(this.__cache, function (e, t) {
            if (t != d + "-l")this.__delDataInCache(t)
        }, this); else delete this.__cache[e]
    };
    c.__delDataInStorage = function (e) {
        return s._$delDataInStorage(e)
    };
    c.__getDataInStorage = function (e) {
        return s._$getDataInStorage(e)
    };
    c.__setDataInStorage = function (e, t) {
        s._$setDataInStorage(e, t)
    };
    c.__getDataLocalWithDefault = function (e, t) {
        var i = this.__getDataLocal(e);
        if (null == i) {
            i = t;
            this.__setDataLocal(e, i)
        }
        return i
    };
    c.__getDataLocal = function (e) {
        var t = this.__getDataInCache(e);
        if (null != t)return t;
        t = this.__getDataInStorage(e);
        if (null != t)this.__setDataInCache(e, t);
        return t
    };
    c.__setDataLocal = function (e, t) {
        this.__setDataInStorage(e, t);
        this.__setDataInCache(e, t)
    };
    c.__delDataLocal = function (e) {
        if (null == e)i._$loop(this.__cache, function (e, t) {
            if (t != d + "-l")this.__delDataLocal(t)
        }, this); else {
            delete this.__cache[e];
            s._$delDataInStorage(e)
        }
    };
    c._$clearDataLocal = function () {
        this.__delDataLocal()
    };
    c.__doCallbackRequest = function (e) {
        var t = this.__cache[d + "-l"], n = l.slice.call(arguments, 1);
        i._$forEach(t[e], function (e) {
            try {
                e.apply(this, n)
            } catch (t) {
                if (!1)throw t;
                console.error(t.message);
                console.error(t.stack)
            }
        });
        delete t[e]
    };
    c.__doQueueRequest = function (e, t) {
        t = t || o;
        var i = this.__cache[d + "-l"][e];
        if (!i) {
            i = [t];
            this.__cache[d + "-l"][e] = i;
            return !1
        }
        i.push(t);
        return !0
    };
    c.__hasFragment = function (e, t, i) {
        if (!e)return !1;
        t = parseInt(t) || 0;
        i = parseInt(i) || 0;
        if (!i) {
            if (!e.loaded)return !1;
            i = e.length
        }
        if (e.loaded)i = Math.min(i, e.length - t);
        for (var n = 0; n < i; n++)if (!e[t + n])return !1;
        return !0
    };
    if (!0)e.copy(e.P("nej.ut"), r);
    return r
}, 132, 2, 28, 4, 172);
I$(295, function (e, t, i, n, s, r, a, o) {
    var l;
    s._$$CacheList = t._$klass();
    l = s._$$CacheList._$extend(n._$$CacheAbstract);
    l.__reset = function (e) {
        this.__super(e);
        this.__key = e.key || "id";
        this.__data = e.data || r;
        this.__auto = !!e.autogc;
        this.__doSwapCache(e.id)
    };
    l.__destroy = function () {
        this.__super();
        if (this.__timer)this.__doGCAction()
    };
    l.__doSwapCache = function (e) {
        var t;
        if (e) {
            t = this.__cache[e];
            if (!t) {
                t = {};
                this.__cache[e] = t
            }
        }
        t = t || this.__cache;
        t.hash = t.hash || {};
        this.__lspl = t
    };
    l.__doGCAction = function () {
        this.__timer = window.clearTimeout(this.__timer);
        var e = {};
        i._$loop(this.__lspl, function (t, n) {
            if ("hash" != n)if (i._$isArray(t))i._$forEach(t, function (t) {
                if (t)e[t[this.__key]] = !0
            }, this)
        }, this);
        i._$loop(this.__getHash(), function (t, i, n) {
            if (!e[i])delete n[i]
        })
    };
    l.__doGCSchedule = function () {
        if (this.__timer)this.__timer = window.clearTimeout(this.__timer);
        this.__timer = window.setTimeout(this.__doGCAction._$bind(this), 150)
    };
    l.__doSaveItemToCache = function (e, t) {
        if (!i._$isArray(e)) {
            e = this.__doFormatItem(e, t) || e;
            if (!e)return null;
            var n = e[this.__key];
            if (null != n) {
                var s = this.__getHash()[n];
                if (s)e = i._$merge(s, e);
                this.__getHash()[n] = e
            }
            delete e.__dirty__;
            return e
        }
        var r = [];
        i._$forEach(e, function (e) {
            r.push(this.__doSaveItemToCache(e, t))
        }, this);
        return r
    };
    l.__doRemoveItemFromList = function (e, t) {
        var n = null, s = this.__key;
        if (!i._$isArray(t)) {
            var n = null, s = this.__key;
            t = t[s] || t;
            var r = this._$getListInCache(e), a = i._$indexOf(r, function (e) {
                return !!e && e[s] == t
            });
            if (a >= 0) {
                n = r[a];
                r.splice(a, 1)
            }
            return n
        }
        var n = [];
        i._$reverseEach(t, function (t) {
            n.unshift(this.__doRemoveItemFromList(e, t))
        }, this);
        return n
    };
    l.__doFormatItem = a;
    l.__doUnshiftToList = function (e, t) {
        if (t)if (i._$isArray(t))i._$reverseEach(t, function (t) {
            this.__doUnshiftToList(e, t)
        }); else {
            var n = this._$getListInCache(e), t = this.__doSaveItemToCache(t, e);
            if (t)n.unshift(t)
        }
    };
    l._$setTotal = function (e, t) {
        var i = this._$getListInCache(e);
        i.length = Math.max(i.length, t);
        this._$setLoaded(e)
    };
    l._$getTotal = function (e) {
        return this._$getListInCache(e).length
    };
    l._$setLoaded = function (e, t) {
        this._$getListInCache(e).loaded = t !== !1
    };
    l._$isLoaded = function (e) {
        return !!this._$getListInCache(e).loaded
    };
    l._$setListInCache = function (e, t) {
        this._$clearListInCache(e);
        this.__getList({key: e, offset: 0, limit: t.length + 1}, {list: t, total: t.length})
    };
    l._$getListInCache = function () {
        var e = function (e) {
            return (e || "") + (!e ? "" : "-") + "list"
        };
        return function (t) {
            var t = e(t), i = this.__lspl[t];
            if (!i) {
                i = [];
                this.__lspl[t] = i
            }
            return i
        }
    }();
    l.__getHash = function () {
        var e = this.__lspl.hash;
        if (!e) {
            e = {};
            this.__lspl.hash = e
        }
        return e
    };
    l._$pullRefresh = function () {
        var e = function (e) {
            return "r-" + e.key
        };
        return function (t) {
            var n = i._$merge({}, t), s = e(n), r = this._$dispatchEvent._$bind(this);
            if (!this.__doQueueRequest(s, r)) {
                n.rkey = s;
                n.onload = this.__pullRefresh._$bind(this, n);
                this._$dispatchEvent("dopullrefresh", n)
            }
        }
    }();
    l.__pullRefresh = function (e, t) {
        var i = e.key, n = parseInt(t.total), s = t.list || t.result;
        this.__doUnshiftToList(i, s || t);
        if (!isNaN(n) && s) {
            this._$getListInCache(i).length = n;
            this._$setLoaded(i)
        }
        this.__doCallbackRequest(e.rkey, "onpullrefresh", e)
    };
    l._$getList = function () {
        var e = function (e) {
            return "r-" + e.key + "-" + e.offset + "-" + e.limit
        };
        return function (t) {
            t = t || r;
            var i = {
                key: "" + t.key || "",
                ext: t.ext || null,
                data: t.data || null,
                offset: parseInt(t.offset) || 0,
                limit: parseInt(t.limit) || 0
            }, n = this._$getListInCache(i.key), s = this.__hasFragment(n, i.offset, i.limit);
            if (!s) {
                var a = e(i), o = this._$dispatchEvent._$bind(this);
                if (!this.__doQueueRequest(a, o)) {
                    i.rkey = a;
                    i.onload = this.__getList._$bind(this, i);
                    this._$dispatchEvent("doloadlist", i)
                }
            } else this._$dispatchEvent("onlistload", i)
        }
    }();
    l.__getList = function () {
        var e = function (e, t, i) {
            if (e)return !0;
            i.splice(t, 1)
        };
        return function (t, n) {
            t = t || r;
            var s = t.key, a = t.offset, o = this._$getListInCache(s);
            var l = n || [];
            if (!i._$isArray(l)) {
                l = n.result || n.list || [];
                var c = parseInt(n.total);
                if (!isNaN(c) || c > l.length)this._$setTotal(s, c)
            }
            i._$forEach(l, function (e, t) {
                o[a + t] = this.__doSaveItemToCache(e, s)
            }, this);
            if (l.length < t.limit) {
                this._$setLoaded(s);
                i._$reverseEach(o, e)
            }
            this.__doCallbackRequest(t.rkey, "onlistload", t)
        }
    }();
    l._$clearListInCache = function () {
        var e = function (e, t, i) {
            i.splice(t, 1)
        };
        return function (t) {
            if (t) {
                var n = this._$getListInCache(t);
                i._$reverseEach(n, e);
                this._$setLoaded(t, !1);
                if (this.__auto)this.__doGCSchedule()
            } else i._$loop(this.__lspl, function (e, t) {
                if ("hash" != t && i._$isArray(e)) {
                    t = t.substr(0, t.length - 5);
                    this._$clearListInCache(t)
                }
            }, this)
        }
    }();
    l.__doCheckItemValidity = function (e, t) {
        return !e.__dirty__
    };
    l._$getItemInCache = function (e) {
        return this.__getHash()[e]
    };
    l._$clearItemInCache = function (e) {
        var t = this._$getItemInCache(e);
        if (t)t.__dirty__ = !0
    };
    l._$getItem = function () {
        var e = function (e) {
            return "r-" + e.key + "-" + e.id
        };
        return function (t) {
            t = t || r;
            var i = t[this.__key], n = {id: i, ext: t.ext, data: t.data || {}, key: "" + t.key || ""};
            _item = this._$getItemInCache(i);
            n.data[this.__key] = i;
            if (!_item || !this.__doCheckItemValidity(_item, n.key)) {
                var s = e(n), a = this._$dispatchEvent._$bind(this);
                if (!this.__doQueueRequest(s, a)) {
                    n.rkey = s;
                    n.onload = this.__getItem._$bind(this, n);
                    this._$dispatchEvent("doloaditem", n)
                }
            } else this._$dispatchEvent("onitemload", n)
        }
    }();
    l.__getItem = function (e, t) {
        e = e || r;
        this.__doSaveItemToCache(t, e.key);
        this.__doCallbackRequest(e.rkey, "onitemload", e)
    };
    l._$addItem = function (e) {
        e = i._$merge({}, e);
        e.onload = this.__addItem._$bind(this, e);
        this._$dispatchEvent("doadditem", e)
    };
    l.__addItem = function (e, t) {
        var i = e.key;
        t = this.__doSaveItemToCache(t, i);
        if (t) {
            var n = 0, s = this._$getListInCache(i);
            if (!e.push) {
                n = -1;
                var r = e.offset || 0;
                s.splice(r, 0, t)
            } else if (s.loaded) {
                n = 1;
                s.push(t)
            } else s.length++
        }
        var a = {key: i, flag: n, data: t, action: "add", ext: e.ext};
        this._$dispatchEvent("onitemadd", a);
        return a
    };
    l._$deleteItem = function (e) {
        e = i._$merge({}, e);
        e.onload = this.__deleteItem._$bind(this, e);
        this._$dispatchEvent("dodeleteitem", e)
    };
    l.__deleteItem = function (e, t) {
        var i, n = e.key;
        if (t) {
            var s = e.id;
            i = this._$getItemInCache(s) || null;
            this.__doRemoveItemFromList(n, s)
        }
        var r = {key: n, data: i, action: "delete", ext: e.ext};
        this._$dispatchEvent("onitemdelete", r);
        return r
    };
    l._$updateItem = function (e) {
        e = i._$merge({}, e);
        e.onload = this.__updateItem._$bind(this, e);
        this._$dispatchEvent("doupdateitem", e)
    };
    l.__updateItem = function (e, t) {
        var i = e.key;
        if (t)t = this.__doSaveItemToCache(t, i);
        var n = {key: i, data: t, action: "update", ext: e.ext};
        this._$dispatchEvent("onitemupdate", n);
        return n
    };
    if (!0)e.P("nej.ut")._$$ListCache = s._$$CacheList;
    return s
}, 132, 2, 28, 320);
I$(247, function (e, t, i, n, s, r, a) {
    var o;
    n._$$CacheListAbstract = t._$klass();
    o = n._$$CacheListAbstract._$extend(i._$$CacheList);
    o.__reset = function (e) {
        this.__super(e);
        this._$batEvent({
            doloadlist: this.__doLoadList._$bind(this),
            doloaditem: this.__doLoadItem._$bind(this),
            doadditem: this.__doAddItem._$bind(this),
            dodeleteitem: this.__doDeleteItem._$bind(this),
            doupdateitem: this.__doUpdateItem._$bind(this),
            dopullrefresh: this.__doPullRefresh._$bind(this)
        })
    };
    o.__doLoadList = r;
    o.__doPullRefresh = r;
    o.__doLoadItem = r;
    o.__doAddItem = r;
    o.__doDeleteItem = r;
    o.__doUpdateItem = r;
    if (!0)e.P("nej.ut")._$$AbstractListCache = n._$$CacheListAbstract;
    return n
}, 132, 2, 295);
I$(319, function (e, t, i, n, s, r, a) {
    var o;
    n._$$Item = t._$klass();
    o = n._$$Item._$extend(i._$$Abstract);
    o.__init = function () {
        this.__id = this.__genId();
        this.__super()
    };
    o.__reset = function (e) {
        this.__super(e);
        this.__index = e.index;
        this.__total = e.total;
        this.__range = e.range;
        this._$refresh(e.data)
    };
    o.__destroy = function () {
        this.__super();
        delete this.__data;
        delete this.__index;
        delete this.__total;
        delete this.__range
    };
    o.__doRefresh = r;
    o.__genId = function () {
        var e = +new Date;
        return function () {
            return "itm-" + ++e
        }
    }();
    o._$getId = function () {
        return this.__id
    };
    o._$getData = function () {
        return this.__data
    };
    o._$refresh = function (e) {
        this.__data = e || {};
        this.__doRefresh(this.__data)
    };
    if (!0)e.copy(e.P("nej.ui"), n);
    return n
}, 132, 2, 159);
I$(294, function (e, t, i, n, s, r, a) {
    var o;
    n._$$ListItem = t._$klass();
    o = n._$$ListItem._$extend(i._$$Item);
    o.__reset = function (e) {
        this.__pkey = e.pkey || "id";
        this.__prefix = e.prefix || "";
        this.__super(e)
    };
    o.__onDelete = function (e) {
        this._$dispatchEvent("ondelete", {ext: e, id: this._$getId(), data: this._$getData(), body: this._$getBody()})
    };
    o.__onUpdate = function (e) {
        this._$dispatchEvent("onupdate", {ext: e, id: this._$getId(), data: this._$getData(), body: this._$getBody()})
    };
    o._$refresh = function (e) {
        this.__super(e);
        var t = this.__data[this.__pkey];
        this.__id = this.__prefix + t || this.__genId()
    };
    if (!0)e.copy(e.P("nej.ui"), n);
    return n
}, 132, 2, 319);
I$(309, ".#<uispace>{font-size:12px;line-height:160%;}\n.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}\n.#<uispace> .js-disabled{cursor:default;}\n.#<uispace> .js-selected{cursor:default;background-color:#bbb;}");
I$(261, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u;
    o._$$AbstractPager = t._$klass();
    u = o._$$AbstractPager._$extend(s._$$Abstract);
    u.__reset = function (e) {
        this.__bopt = n._$merge({}, e);
        this.__popt = n._$merge({}, e);
        delete this.__bopt.onchange;
        this.__popt.onchange = this.__onChange._$bind(this);
        this.__super(e);
        this.__doResetNumber({number: e.number, label: e.label || l})
    };
    u.__destroy = function () {
        if (this.__page) {
            this.__page._$recycle();
            delete this.__page
        }
        this.__super();
        delete this.__bopt;
        delete this.__popt;
        this._$unbind();
        this.__body.innerHTML = "&nbsp;"
    };
    u.__initXGui = function () {
        var e = i._$pushCSSText(a);
        return function () {
            this.__seed_css = e
        }
    }();
    u.__doResetNumber = function (e) {
        var t = e.label;
        if (!e.noprv) {
            this.__popt.pbtn = i._$create("a", "zbtn zprv", this.__body);
            this.__popt.pbtn.innerHTML = t.prev || "上一页"
        }
        var n = [];
        for (var s = 1, r = e.number; s < r; s++)n.push(i._$create("a", "zpgi zpg" + s, this.__body));
        this.__popt.list = n;
        if (!e.nonxt) {
            this.__popt.nbtn = i._$create("a", "zbtn znxt", this.__body);
            this.__popt.nbtn.innerHTML = t.next || "下一页"
        }
    };
    u.__onChange = function (e) {
        if (!this.__flag) {
            var t = e.index, i = e.total;
            this.__flag = !0;
            this._$updatePage(t, i);
            n._$forEach(this.__binders, function (e) {
                e._$updatePage(t, i)
            });
            this.__flag = !1;
            this._$dispatchEvent("onchange", e)
        }
    };
    u._$bind = function (e) {
        e = i._$get(e);
        if (e) {
            var t = n._$merge({}, this.__bopt);
            t.parent = e;
            t.index = this._$getIndex();
            t.total = this._$getTotal();
            var s = this.constructor._$allocate(t);
            s._$setEvent("onchange", this.__popt.onchange);
            if (!this.__binders)this.__binders = [];
            this.__binders.push(s)
        }
    };
    u._$unbind = function () {
        var e = function (e, t, i) {
            e._$recycle();
            i.splice(t, 1)
        };
        return function () {
            n._$reverseEach(this.__binders, e)
        }
    }();
    u._$setIndex = function (e) {
        if (this.__page)this.__page._$setIndex(e)
    };
    u._$getIndex = function () {
        if (!this.__page)return 1; else return this.__page._$getIndex()
    };
    u._$getTotal = function () {
        if (!this.__page)return 1; else return this.__page._$getTotal()
    };
    u._$updatePage = function (e, t) {
        if (this.__page)this.__page._$updatePage(e, t)
    };
    u._$updateTotal = function (e) {
        if (this.__page)this.__page._$updateTotal(e)
    };
    if (!0)e.copy(e.P("nej.ui"), o);
    return o
}, 132, 2, 3, 28, 159, 29, 309);
I$(310, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$PageAbstract = t._$klass();
    d = a._$$PageAbstract._$extend(r._$$EventTarget);
    d.__reset = function (e) {
        this.__super(e);
        this.__pbtn = e.pbtn;
        this.__nbtn = e.nbtn;
        this.__sbtn = e.sbtn;
        this.__ebtn = e.ebtn;
        this.__name = e.event || "click";
        this.__parented = !!e.parented;
        this.__selected = e.selected || "js-selected";
        this.__disabled = e.disabled || "js-disabled";
        this.__doPageListCheck(e.list);
        this.__limit = e.limit || 1 / 0;
        this._$updatePage(e.index || 1, e.total || 1)
    };
    d.__destroy = function () {
        this.__super();
        delete this.__list;
        delete this.__name;
        delete this.__pbtn;
        delete this.__nbtn;
        delete this.__sbtn;
        delete this.__ebtn;
        delete this.__last;
        delete this.__total;
        delete this.__index;
        delete this.__extdata;
        delete this.__selected;
        delete this.__disabled
    };
    d.__getSelectNode = function (e) {
        return !this.__parented ? e : e.parentNode
    };
    d.__doPageListCheck = function () {
        var e = function (e) {
            this.__list.push(e);
            this.__doInitDomEvent([[e, this.__name, this.__onClick._$bind2(this, 0)]])
        };
        return function (t) {
            this.__list = [];
            this.__doInitDomEvent([[this.__pbtn, "click", this.__onClick._$bind2(this, -1)], [this.__nbtn, "click", this.__onClick._$bind2(this, 1)], [this.__sbtn, "click", this.__onClick._$bind2(this, -2)], [this.__ebtn, "click", this.__onClick._$bind2(this, 2)]]);
            i._$forEach(t, e, this)
        }
    }();
    d.__doSetNodeIndex = function (e, t) {
        var i = this.__getSelectNode(e);
        if (null == t) {
            e.innerText = "";
            n._$setStyle(e, "display", "none");
            n._$delClassName(i, this.__selected)
        } else {
            e.innerText = t;
            n._$setStyle(e, "display", "");
            t == this.__index ? n._$addClassName(i, this.__selected) : n._$delClassName(i, this.__selected)
        }
    };
    d.__doSyncBtnState = function () {
        if (this.__index <= 1) {
            n._$addClassName(this.__pbtn, this.__disabled);
            n._$addClassName(this.__sbtn, this.__disabled)
        } else {
            n._$delClassName(this.__pbtn, this.__disabled);
            n._$delClassName(this.__sbtn, this.__disabled)
        }
        if (this.__index >= this.__total) {
            n._$addClassName(this.__nbtn, this.__disabled);
            n._$addClassName(this.__ebtn, this.__disabled)
        } else {
            n._$delClassName(this.__nbtn, this.__disabled);
            n._$delClassName(this.__ebtn, this.__disabled)
        }
    };
    d.__doRefreshPage = l;
    d.__doChangeIndex = function () {
        this.__doRefreshPage();
        this.__doSyncBtnState();
        this._$dispatchEvent("onchange", {
            last: this.__last,
            total: this.__total,
            index: this.__index,
            ext: this.__extdata
        })
    };
    d.__doSaveIndex = function (e) {
        e = parseInt(e);
        if (isNaN(e) || null == this.__total)return !1;
        e = Math.max(1, Math.min(e, this.__total));
        this.__last = this.__index;
        this.__index = e;
        return !0
    };
    d.__doSaveTotal = function (e) {
        e = parseInt(e);
        if (isNaN(e) || e < 1)return !1;
        this.__total = Math.min(e, this.__limit);
        return !0
    };
    d.__onClick = function (e, t) {
        s._$stopDefault(e);
        var i = s._$getElement(e), r = n._$hasClassName(this.__getSelectNode(i), this.__selected), a = n._$hasClassName(i, this.__disabled);
        if (i && !r && !a) {
            var o = i.innerText;
            switch (t) {
                case 1:
                case-1:
                    o = this.__index + t;
                    break;
                case 2:
                    o = this.__total;
                    break;
                case-2:
                    o = 1
            }
            this._$setIndex(o)
        }
    };
    d._$getIndex = function () {
        return this.__index
    };
    d._$setIndex = function (e) {
        var t = this.__index;
        this.__doSaveIndex(e);
        if (t != this.__index)this.__doChangeIndex()
    };
    d._$getTotal = function () {
        return this.__total
    };
    d._$setTotal = function (e) {
        if (this.__doSaveTotal(e) && null != this.__index) {
            this.__index = 1;
            this.__doChangeIndex()
        }
    };
    d._$updateTotal = function (e) {
        if (this.__doSaveTotal(e)) {
            this.__doRefreshPage();
            this.__doSyncBtnState()
        }
    };
    d._$updatePage = function (e, t) {
        if (this.__doSaveTotal(t) && this.__doSaveIndex(e))this.__doChangeIndex()
    };
    if (!0)e.P("nej.ut")._$$AbstractPage = a._$$PageAbstract;
    return a
}, 132, 2, 28, 3, 5, 4);
I$(262, function (e, t, i, n, s, r, a, o, l) {
    var c;
    r._$$PageFragment = t._$klass();
    c = r._$$PageFragment._$extend(s._$$PageAbstract);
    c.__init = function () {
        this.__ndot = [];
        this.__super()
    };
    c.__destroy = function () {
        this.__super();
        this.__doRecycleDotNode()
    };
    c.__doRecycleDotNode = function () {
        var e = function (e, t, n) {
            i._$remove(e);
            n.splice(t, 1)
        };
        return function () {
            n._$reverseEach(this.__ndot, e)
        }
    }();
    c.__doRefreshPage = function () {
        this.__extdata = {last: !1, first: !1, list: this.__list};
        this.__doRecycleDotNode();
        this.__doSetNodeIndex(this.__list[0], 1);
        var e = 1, t = this.__list.length;
        if (!(this.__total < t)) {
            if (this.__index > 1) {
                var n = Math.floor((t - 2) / 2), s = this.__total - t + 2, r = Math.max(2, this.__index - n);
                if (this.__total >= t)r = Math.min(r, s);
                if (r > 2) {
                    var a = i._$create("span", "zdot");
                    this.__ndot.push(a);
                    a.innerText = "...";
                    this.__list[0].insertAdjacentElement("afterEnd", a);
                    this.__extdata.first = !0
                }
                for (var o; ; e++) {
                    o = r + e - 1;
                    if (o > this.__index)break;
                    this.__doSetNodeIndex(this.__list[e], o)
                }
            }
            if (this.__index < this.__total) {
                var o, r = this.__index + 1;
                for (var l = 0, c = t - 2; ; l++, e++) {
                    o = r + l;
                    if (e > c || o > this.__total)break;
                    this.__doSetNodeIndex(this.__list[e], o)
                }
                if (o < this.__total) {
                    var a = i._$create("span", "zdot");
                    this.__ndot.push(a);
                    a.innerText = "...";
                    this.__list[e].insertAdjacentElement("beforeBegin", a);
                    this.__extdata.last = !0
                }
                if (o <= this.__total)this.__doSetNodeIndex(this.__list[e++], this.__total)
            }
            for (; e < t; e++)this.__doSetNodeIndex(this.__list[e])
        } else for (var d; e < t; e++) {
            d = e + 1;
            this.__doSetNodeIndex(this.__list[e], d > this.__total ? null : d)
        }
    };
    if (!0)e.P("nej.ut")._$$Page = r._$$PageFragment;
    return r
}, 132, 2, 3, 28, 310);
I$(160, function (e, t, i, n, s, r, a, o, l) {
    var c;
    r._$$Pager = t._$klass();
    c = r._$$Pager._$extend(n._$$AbstractPager);
    c.__reset = function (e) {
        e.number = parseInt(e.number) || 9;
        this.__super(e);
        this.__page = s._$$PageFragment._$allocate(this.__popt)
    };
    c.__onChange = function (e) {
        if (this.__bopt.noend) {
            var t = e.ext || a, n = t.list || l;
            if (t.last)i._$setStyle(n[n.length - 1], "display", "none")
        }
        this.__super(e)
    };
    if (!0)e.copy(e.P("nej.ui"), r);
    return r
}, 132, 2, 3, 261, 262);
I$(242, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h) {
    var p;
    u._$$ListModule = t._$klass();
    p = u._$$ListModule._$extend(o._$$EventTarget);
    p.__reset = function (e) {
        this.__ropt = {};
        this.__super(e);
        this.__lbox = s._$get(e.parent);
        this.__iopt = {parent: this.__lbox};
        this.__limit = parseInt(e.limit) || 10;
        this.__first = parseInt(e.first) || this.__limit;
        this.__doResetTemplate(e.item);
        this.__doResetCache(e.cache || f);
        this.__doResetPager(e.pager || f);
        this._$refresh()
    };
    p.__destroy = function () {
        this._$dispatchEvent("onbeforerecycle");
        this.__doClearListBox();
        this.__super();
        if (this.__ropt.clear)this.__cache._$clearListInCache(this.__ropt.key);
        this.__cache._$recycle();
        if (this.__pager) {
            this.__pager._$recycle();
            delete this.__pager
        }
        delete this.__pkls;
        delete this.__popt;
        delete this.__pulling;
        delete this.__cache;
        delete this.__lbox;
        delete this.__ikls;
        delete this.__iopt;
        delete this.__iext;
        delete this.__ropt
    };
    p.__getItemBodyId = function (e) {
        return this.__getItemId(e) + l._$seed()
    };
    p.__getItemId = function (e) {
        var t = (this.__iopt || f).prefix || "";
        return t + e
    };
    p.__getPageInfo = function (e, t, i, n) {
        var s = {index: 1, total: 1};
        if (t >= e)s.index = Math.floor((t - e) / i) + 2;
        if (n > e)s.total = Math.ceil((n - e) / i) + 1;
        return s
    };
    p.__doResetJSTTemplate = function (e) {
        delete this.__ikls;
        this.__ikey = e;
        this.__doInitDomEvent([[this.__lbox, "click", this.__onCheckAction._$bind(this)]])
    };
    p.__doResetTemplate = function (e) {
        if (!i._$isString(e)) {
            i._$merge(this.__iopt, e);
            this.__iext = i._$merge({}, e, function (e) {
                return !i._$isFunction(e)
            });
            var t = this.__iopt.klass;
            delete this.__iopt.klass;
            if (!i._$isString(t)) {
                delete this.__ikey;
                this.__ikls = t;
                this.__iopt.ondelete = this._$dispatchEvent._$bind(this, "ondelete");
                this.__iopt.onupdate = this._$dispatchEvent._$bind(this, "onupdate")
            } else this.__doResetJSTTemplate(t)
        } else this.__doResetJSTTemplate(e)
    };
    p.__doResetCache = function (e) {
        var t = e.klass, n = i._$merge({}, e);
        this.__ropt.key = n.lkey;
        this.__ropt.ext = n.ext;
        this.__ropt.data = n.data || {};
        this.__ropt.clear = !!n.clear;
        this.__iopt.pkey = n.key || "id";
        n.onlistload = this.__cbListLoad._$bind(this);
        n.onpullrefresh = this.__cbPullRefresh._$bind(this);
        if (t && "onlistchange" in t)this.__doInitDomEvent([[t, "listchange", this.__cbListChange._$bind(this)]]); else {
            n.onitemadd = this.__cbItemAdd._$bind(this);
            n.onitemdelete = this.__cbItemDelete._$bind(this);
            n.onitemupdate = this.__cbItemUpdate._$bind(this)
        }
        this.__cache = (t || d._$$CacheList)._$allocate(n);
        if (null != e.total)this.__cache._$setTotal(this.__ropt.key, e.total);
        if (e.list)this.__cache._$setListInCache(this.__ropt.key, e.list)
    };
    p.__doResetPager = function (e) {
        this.__pkls = e.klass || a._$$Pager;
        this.__popt = i._$merge({}, e);
        if (i._$isArray(e.parent)) {
            this.__popt.parent = e.parent[0];
            this.__pbid = e.parent.slice(1);
            if (!this.__pbid || !this.__pbid.length)delete this.__pbid
        }
        delete this.__popt.klass
    };
    p.__doClearListBox = function () {
        var e = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this._$dispatchEvent("onbeforelistclear", {parent: this.__lbox});
            if (this.__items && this.__items.length > 0) {
                this.__items = this.__ikls._$recycle(this.__items);
                delete this.__items
            }
            if (e.test(this.__lbox.tagName))s._$clearChildren(this.__lbox); else this.__lbox.innerHTML = ""
        }
    }();
    p.__doSwitchPagerShow = function (e) {
        if (!this.__popt.fixed) {
            s._$setStyle(this.__popt.parent, "display", e);
            i._$forEach(this.__pbid, function (t) {
                s._$setStyle(t, "display", e)
            }, this)
        }
    };
    p.__doRefreshByPager = function () {
        var e = this.__popt.index || 1;
        delete this.__popt.index;
        if (this.__pager)e = this.__pager._$getIndex();
        this.__doChangePage({last: e, index: e})
    };
    p.__doChangePage = function (e) {
        this._$dispatchEvent("onpagechange", e)
    };
    p.__doChangeOffset = function (e) {
        this.__ropt.offset = e;
        this.__doLoadList()
    };
    p.__doGenRequestOpt = function (e) {
        return e
    };
    p.__doLoadList = function () {
        this.__doBeforeListLoad();
        var e = this.__ropt.data;
        e.offset = this.__ropt.offset;
        var t = 0 == e.offset;
        e.total = t;
        this.__ropt.limit = t ? this.__first : this.__limit;
        e.limit = this.__ropt.limit;
        this.__cache._$getList(this.__doGenRequestOpt(i._$merge({}, this.__ropt)))
    };
    p.__cbListLoad = function (e) {
        if (e.key == this.__ropt.key && e.offset == this.__ropt.offset) {
            this.__doBeforeListShow();
            var t = this.__cache._$getListInCache(e.key);
            if (t && t.length) {
                var i = e.limit, n = e.offset;
                if (!this.__doBeforeListRender(t, n, i)) {
                    this._$dispatchEvent("onbeforelistrender", {list: t, offset: n, parent: this.__lbox});
                    if (this.__ikey) {
                        this.__iopt.xlist = t;
                        this.__iopt.beg = n;
                        this.__iopt.end = Math.min(t.length, n + i) - 1;
                        this.__iopt.act = "list";
                        var s = l._$get(this.__ikey, this.__iopt, this.__iext);
                        this.__doShowListByJST(s)
                    } else {
                        this.__iopt.limit = i;
                        this.__iopt.offset = n;
                        var r = c._$getItemTemplate(t, this.__ikls, this.__iopt);
                        this.__doShowListByItem(r)
                    }
                    this._$dispatchEvent("onafterlistrender", {list: t, offset: n, parent: this.__lbox})
                }
            } else this.__doShowEmpty()
        }
    };
    p.__cbPullRefresh = function (e) {
        if (this.__pulling) {
            delete this.__pulling;
            this.__doBeforeListShow("onafterpullrefresh");
            this._$refresh()
        }
    };
    p.__doSyncPager = function (e, t) {
        if (this.__pager) {
            if ((this.__popt || f).limit > 0)t = Math.min(t, this.__popt.limit);
            var n = this.__pager._$getIndex(), s = this.__pager._$getTotal();
            if (n > t || t != s) {
                this.__pager._$recycle();
                delete this.__pager;
                this.__doChangePage({last: n, index: Math.min(e, t)});
                return !0
            }
        } else {
            this.__popt.index = e;
            this.__popt.total = t;
            this.__pager = this.__pkls._$allocate(this.__popt);
            this.__pager._$setEvent("onchange", this.__doChangePage._$bind(this));
            i._$forEach(this.__pbid, function (e) {
                this.__pager._$bind(e)
            }, this)
        }
    };
    p.__doFormatData = function () {
        var e = +new Date;
        return function (t) {
            var i = t[this.__iopt.pkey];
            if (!i) {
                t["dirty-data"] = !0;
                t[this.__iopt.pkey] = "dirty-" + e++
            }
            return t
        }
    }();
    p.__doSplitDirty = function (e) {
        var t = e[this.__iopt.pkey];
        if (e["dirty-data"]) {
            delete e["dirty-data"];
            delete e[this.__iopt.pkey]
        }
        return t
    };
    p.__doInsertOneItem = function () {
        var e = function (e, t) {
            this.__lbox.insertAdjacentElement(e, t)
        };
        return function (t, i) {
            var n = [i];
            if (this.__ikey) {
                this.__iopt.xlist = n;
                this.__iopt.beg = 0;
                this.__iopt.end = 0;
                this.__iopt.act = "add";
                this.__doShowListByJST(l._$get(this.__ikey, this.__iopt, this.__iext), t)
            } else {
                this.__iopt.limit = 1;
                this.__iopt.offset = 0;
                this.__iopt.parent = e._$bind(this, t);
                var s = c._$getItemTemplate(n, this.__ikls, this.__iopt);
                this.__iopt.parent = this.__lbox;
                this.__doShowListByItem(s)
            }
        }
    }();
    p.__doBeforeListLoad = _;
    p.__doBeforeListShow = function (e) {
        var t = {parent: this.__lbox};
        this._$dispatchEvent(e || "onafterlistload", t);
        if (!t.stopped)s._$removeByEC(this.__ntip)
    };
    p.__doBeforeListRender = _;
    p.__doRenderMessage = function (e, t) {
        if (i._$isString(e)) {
            if (!this.__ntip)this.__ntip = s._$create("div");
            this.__ntip.innerHTML = e
        } else this.__ntip = e;
        this.__lbox.insertAdjacentElement(t || "beforeEnd", this.__ntip)
    };
    p.__doShowMessage = function (e, t, i) {
        var n = {parent: this.__lbox};
        this._$dispatchEvent(e, n);
        if (!n.stopped)this.__doRenderMessage(n.value || t, i)
    };
    p.__doShowEmpty = _;
    p.__doShowListByJST = _;
    p.__doShowListByItem = _;
    p.__onCheckAction = function () {
        var e = /^(?:delete|update)$/;
        return function (t) {
            var i = n._$getElement(t, "d:action");
            if (i) {
                var r = s._$dataset(i, "action");
                if (e.test(r)) {
                    var a = s._$dataset(i, "id");
                    if (a) {
                        var o = this.__cache._$getItemInCache(a);
                        if (o) {
                            n._$stop(t);
                            this._$dispatchEvent("on" + r, {
                                data: o,
                                id: o[this.__iopt.pkey],
                                body: s._$get(this.__getItemBodyId(a))
                            })
                        }
                    }
                }
            }
        }
    }();
    p.__cbItemAdd = _;
    p.__doDeleteItem = function (e) {
        var t = e.data || {}, i = {data: t, key: this.__ropt.key, id: t[this.__iopt.pkey]};
        this._$dispatchEvent("onbeforedelete", i);
        this.__cache._$deleteItem(i)
    };
    p.__cbItemDelete = _;
    p.__doUpdateItem = function (e) {
        var t = e.data || {}, i = {data: t, key: this.__ropt.key};
        this._$dispatchEvent("onbeforeupdate", i);
        this.__cache._$updateItem(i)
    };
    p.__cbItemUpdate = function (e) {
        this.__doCheckResult(e, "onafterupdate");
        if (!e.stopped) {
            var t = e.data[this.__iopt.pkey];
            if (this.__items) {
                var n = c._$getItemById(this.__getItemId(t));
                if (n)n._$refresh(e.data)
            } else {
                var r = this._$getItemBody(t);
                if (!r)return;
                var a = this.__cache._$getListInCache(e.key), o = i._$indexOf(a, e.data);
                if (o < 0)return;
                this.__iopt.xlist = a;
                this.__iopt.beg = o;
                this.__iopt.end = o;
                this.__iopt.act = "update";
                var d = l._$get(this.__ikey, this.__iopt, this.__iext);
                r.insertAdjacentHTML("afterEnd", d);
                s._$remove(r)
            }
            this._$dispatchEvent("onafterupdaterender", {data: e.data, parent: this.__lbox})
        }
    };
    p.__doCheckResult = function (e, t) {
        var i = e.data;
        if (!i || null == i[this.__iopt.pkey]) {
            this._$dispatchEvent("onerror", e);
            e.stopped = !0
        }
        if (!e.stopped)this._$dispatchEvent(t, e)
    };
    p.__cbAppendList = _;
    p.__cbUnshiftList = _;
    p.__cbListChange = function (e) {
        if (e.key == this.__ropt.key)switch (e.action) {
            case"add":
                this.__cbItemAdd(e);
                break;
            case"delete":
                this.__cbItemDelete(e);
                break;
            case"update":
                this.__cbItemUpdate(e);
                break;
            case"refresh":
                this._$refresh();
                break;
            case"unshift":
                this.__cbUnshiftList(e.offset, e.limit);
                break;
            case"append":
                this.__cbAppendList(e.offset, e.limit)
        }
    };
    p._$update = function (e) {
        this.__doUpdateItem({data: e})
    };
    p._$delete = function (e) {
        this.__doDeleteItem({data: e})
    };
    p._$add = function (e) {
        this.__cache._$addItem({data: e, key: this.__ropt.key})
    };
    p._$cache = function () {
        return this.__cache
    };
    p._$unshift = function (e) {
        this.__doInsertOneItem("afterBegin", this.__doFormatData(e));
        return this.__doSplitDirty(e)
    };
    p._$append = function (e) {
        this.__doInsertOneItem("beforeEnd", this.__doFormatData(e));
        return this.__doSplitDirty(e)
    };
    p._$refresh = function () {
        this.__doClearListBox();
        this.__doRefreshByPager()
    };
    p._$refreshWithClear = function () {
        this.__cache._$clearListInCache(this.__ropt.key);
        this._$refresh()
    };
    p._$pullRefresh = function () {
        if (!this.__pulling) {
            this.__pulling = !0;
            this.__doShowMessage("onbeforepullrefresh", "列表刷新中...", "afterBegin");
            this.__cache._$pullRefresh({key: this.__ropt.key, data: this.__ropt.data})
        }
    };
    p._$getTotal = function () {
        return this.__cache._$getTotal(this.__ropt.key)
    };
    p._$getPager = function () {
        return this.__pager
    };
    p._$items = function () {
        return this.__items
    };
    p._$getItemBody = function (e) {
        if (this.__ikey)return s._$get(this.__getItemBodyId(e)); else {
            var t = c._$getItemById(this.__getItemId(e));
            if (t)return t._$getBody()
        }
    };
    p._$isLoaded = function () {
        return this.__cache._$isLoaded(this.__ropt.key)
    };
    if (!0)e.copy(e.P("nej.ut"), u);
    return u
}, 132, 2, 28, 5, 3, 294, 160, 4, 29, 118, 295);
I$(313, "<ul class=\"pagination\"><li on-click={{ this.nav(current-1)}} class='pageprv {{current==1? \"disabled\": \"\"}}'><a  href='#' >上一页</a></li>{{#if total - 5 > show * 2}} <li  on-click={{ this.nav(1)}} class={{current==1? 'active': ''}}><a href=\"#\">1</a></li><li>{{#if begin > 2}}<a>...</a>{{/if}}</li>{{#list begin..end as i}}<li on-click={{ this.nav(i)}} class={{current==i? 'active': ''}}><a href=\"#\">{{i}}</a></li> {{/list}}{{#if (end < total-1)}}<li><a>...</a></li> {{/if}}<li on-click={{ this.nav(total)}} class={{current==total? 'active': ''}}><a href=\"#\">{{total}}</a></li> {{#else}}{{#list 1..total as i}} <li on-click={{ this.nav(i)}} class={{current==i? 'active': ''}}><a href=\"#\">{{i}}</a></li> {{/list}}{{/if}}<li on-click={{ this.nav(current + 1)}} class='pagenxt {{current==total? \"disabled\": \"\"}}'><a  href='#' >下一页</a></li></ul>\n\n");
I$(279, function (e, t) {
    var i = t.extend({
        name: "pager", template: e, config: function (e) {
            var t = 5;
            var i = e.show = Math.floor(t / 2);
            e.current = parseInt(e.current || 1);
            e.total = parseInt(e.total || 1);
            this.$watch(["current", "total"], function (t, n) {
                e.begin = t - i;
                e.end = t + i;
                if (e.begin < 2)e.begin = 2;
                if (e.end > e.total - 1)e.end = e.total - 1;
                if (t - e.begin <= 1)e.end = e.end + i + e.begin - t;
                if (e.end - t <= 1)e.begin = e.begin - i - t + e.end
            })
        }, nav: function (e) {
            var t = this.data;
            if (!(e < 1))if (!(e > t.total))if (e !== t.current) {
                t.current = e;
                this.$emit("nav", e)
            }
        }
    });
    return i
}, 313, 140);
I$(198, function (e, t) {
    var i = t.extend({
        watchedAttr: ["current", "status"], config: function (t) {
            e.extend(t, {total: 1, current: 1, limit: 10, list: []});
            this.$watch(this.watchedAttr, function () {
                if (this.shouldUpdateList())this.__getList()
            })
        }, init: function () {
            if (!this.url)throw"ListModule未指定url";
            this.$on("updatelist", this.__getList.bind(this))
        }, shouldUpdateList: function (e) {
            return !0
        }, getExtraParam: function () {
            return this.data.condition
        }, refresh: function (e) {
            this.data.current = 1;
            this.data.condition = e;
            this.$emit("updatelist")
        }, getListParam: function () {
            var t = this.data;
            return e.extend({limit: t.limit, offset: t.limit * (t.current - 1)}, this.getExtraParam(t))
        }, __getList: function () {
            var t = this.data;
            var i = {
                data: this.getListParam(), onload: function (i) {
                    var n = i.result, s = n.list || n || [];
                    e.mergeList(s, t.list, t.key || "id");
                    t.total = n.total;
                    t.list = s
                }, onerror: function (e) {
                }
            };
            if (this.xdrOption) {
                var n = this.xdrOption();
                if (n.norest) {
                    i.data = _ut._$object2query(this.getListParam());
                    i.norest = !0
                }
                i.method = n.method || "GET"
            }
            this.$request(this.url, i)
        }
    });
    return i
}, 1, 140, 279);
I$(314, function (e, t, i, n, s, r) {
    i.__focusElement = function () {
        var i = function (i, n) {
            var s = e._$getElement(n);
            if (!s.value)t._$delClassName(s, i)
        };
        var n = function (i, n) {
            t._$addClassName(e._$getElement(n), i)
        };
        return function (t, s, r) {
            if (1 == s)e._$addEvent(t, "blur", i._$bind(null, r));
            if (1 == s || s == -1)e._$addEvent(t, "focus", n._$bind(null, r))
        }
    }();
    return i
}, 5, 3);
I$(290, function (e, t, i, n, s, r, a, o) {
    return t
}, 249, 314, 5, 3);
I$(236, function (e, t, i, n, s, r, a, o, l) {
    r._$focus = function (e, s) {
        e = i._$get(e);
        if (e) {
            var r = 0, a = "js-focus";
            if (t._$isNumber(s))r = s; else if (t._$isString(s))a = s; else if (t._$isObject(s)) {
                r = s.mode || r;
                a = s.clazz || a
            }
            var o = parseInt(i._$dataset(e, "mode"));
            if (!isNaN(o))r = o;
            o = i._$dataset(e, "focus");
            if (o)a = o;
            n.__focusElement(e, r, a)
        }
    };
    s._$merge(r);
    if (!0)e.copy(e.P("nej.e"), r);
    return r
}, 132, 28, 3, 290, 133);
I$(317, function (e) {
    e.__length = function () {
        var e = /(\r\n|\r|\n)/g;
        return function (t) {
            return (t || "").replace(e, "**").length
        }
    }();
    return e
}, 249);
I$(291, function (e, t) {
    return t
}, 249, 317);
I$(237, function (e, t, i, n, s, r, a, o, l, c) {
    a._$counter = function () {
        var e = /[\r\n]/gi, s = {};
        var a = function (e) {
            return r.__length(e)
        };
        var o = function (e) {
            var i = s[e], n = t._$get(e), r = t._$get(i.xid);
            if (n && i) {
                var a = {input: n.value};
                a.length = i.onlength(a.input);
                a.delta = i.max - a.length;
                i.onchange(a);
                r.innerHTML = a.value || "剩余" + Math.max(0, a.delta) + "个字"
            }
        };
        return function (e, r) {
            var c = t._$id(e);
            if (c && !s[c]) {
                var d = n._$merge({}, r);
                d.onchange = d.onchange || l;
                d.onlength = a;
                if (!d.max) {
                    var u = parseInt(t._$attr(c, "maxlength")), f = parseInt(t._$dataset(c, "maxLength"));
                    d.max = u || f || 100;
                    if (!u && f)d.onlength = n._$length
                }
                s[c] = d;
                i._$addEvent(c, "input", o._$bind(null, c));
                var _ = t._$wrapInline(c, {nid: d.nid || "js-counter", clazz: d.clazz});
                d.xid = t._$id(_);
                o(c)
            }
        }
    }();
    s._$merge(a);
    if (!0)e.copy(e.P("nej.e"), a);
    return a
}, 132, 3, 5, 28, 133, 291);
I$(318, function (e, t, i, n) {
    e.__setPlaceholder = function (e, t) {
    };
    return e
});
I$(292, function (e, t, i, n, s, r, a, o, l) {
    return s
}, 249, 3, 5, 28, 318);
I$(238, function (e, t, i, n, s, r, a, o) {
    s._$placeholder = function (e, i) {
        e = t._$get(e);
        n.__setPlaceholder(e, t._$dataset(e, "holder") || i || "js-placeholder")
    };
    i._$merge(s);
    if (!0)e.copy(e.P("nej.e"), s);
    return s
}, 132, 3, 133, 292);
I$(106, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _) {
    c._$$WebForm = t._$klass();
    _ = c._$$WebForm._$extend(r._$$EventTarget);
    _.__init = function () {
        this.__super();
        this.__wopt = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    _.__reset = function (e) {
        this.__super(e);
        this.__form = document.forms[e.form] || i._$get(e.form);
        this.__doInitDomEvent([[this.__form, "enter", this._$dispatchEvent._$bind(this, "onenter")]]);
        this.__message = e.message || {};
        this.__message.pass = this.__message.pass || "&nbsp;";
        var t = this.__dataset(this.__form, "focusMode", 1);
        if (!isNaN(t))this.__fopt = {mode: t, clazz: e.focus};
        this.__holder = e.holder;
        this.__wopt.tp.clazz = "js-mhd " + (e.tip || "js-tip");
        this.__wopt.ok.clazz = "js-mhd " + (e.pass || "js-pass");
        this.__wopt.er.clazz = "js-mhd " + (e.error || "js-error");
        this.__invalid = e.invalid || "js-invalid";
        this.__doInitValidRule(e);
        this._$refresh();
        if (this.__fnode)this.__fnode.focus()
    };
    _.__destroy = function () {
        this.__super();
        this._$reset();
        delete this.__message;
        delete this.__fnode;
        delete this.__vinfo;
        delete this.__xattr;
        delete this.__form;
        delete this.__treg;
        delete this.__vfun
    };
    _.__dataset = function (e, t, n) {
        var s = i._$dataset(e, t);
        switch (n) {
            case 1:
                return parseInt(s, 10);
            case 2:
                return "true" == (s || "").toLowerCase();
            case 3:
                return this.__doParseDate(s)
        }
        return s
    };
    _.__number = function (e, t, i) {
        if ("date" == t)return this.__doParseDate(e, i); else return parseInt(e, 10)
    };
    _.__isValidElement = function () {
        var e = /^button|submit|reset|image|hidden|file$/i;
        return function (t) {
            t = this._$get(t) || t;
            var i = t.type;
            return !!t.name && !e.test(t.type || "")
        }
    }();
    _.__isValueElement = function () {
        var e = /^hidden$/i;
        return function (t) {
            if (this.__isValidElement(t))return !0;
            t = this._$get(t) || t;
            var i = t.type || "";
            return e.test(i)
        }
    }();
    _.__doParseDate = function () {
        var e = /[:\.]/;
        return function (t, i) {
            if ("now" == (t || "").toLowerCase())return +new Date;
            var n = s._$var2date(t);
            if (n) {
                var r = (i || "").split(e);
                n.setHours(parseInt(r[0], 10) || 0, parseInt(r[1], 10) || 0, parseInt(r[2], 10) || 0, parseInt(r[3], 10) || 0)
            }
            return +n
        }
    }();
    _.__doCheckString = function (e, t) {
        var i = this.__vfun[t], n = this.__dataset(e, t);
        if (n && i) {
            this.__doPushValidRule(e, i);
            this.__doSaveValidInfo(e, t, n)
        }
    };
    _.__doCheckPattern = function (e, t) {
        try {
            var i = this.__dataset(e, t);
            if (!i)return;
            var n = new RegExp(i);
            this.__doSaveValidInfo(e, t, n);
            this.__doPushValidRule(e, this.__vfun[t])
        } catch (s) {
        }
    };
    _.__doCheckBoolean = function (e, t) {
        var i = this.__vfun[t];
        if (i && this.__dataset(e, t, 2))this.__doPushValidRule(e, i)
    };
    _.__doCheckNumber = function (e, t, i) {
        i = parseInt(i, 10);
        if (!isNaN(i)) {
            this.__doSaveValidInfo(e, t, i);
            this.__doPushValidRule(e, this.__vfun[t])
        }
    };
    _.__doCheckDSNumber = function (e, t) {
        this.__doCheckNumber(e, t, this.__dataset(e, t))
    };
    _.__doCheckATNumber = function (e, t) {
        this.__doCheckNumber(e, t, i._$attr(e, t))
    };
    _.__doCheckTPNumber = function (e, t, i) {
        var n = this.__number(this.__dataset(e, t), this.__dataset(e, "type"));
        this.__doCheckNumber(e, t, n)
    };
    _.__doCheckCustomAttr = function (e) {
        s._$loop(this.__xattr, function (t, n) {
            var s = i._$dataset(e, n);
            if (null != s) {
                this.__doSaveValidInfo(e, n, s);
                this.__doPushValidRule(e, this.__vfun[n])
            }
        }, this)
    };
    _.__doPrepareElement = function () {
        var e = /^input|textarea$/i, t = /[:\.]/;
        var s = function (e) {
            this._$showTip(n._$getElement(e))
        };
        var r = function (e) {
            var t = n._$getElement(e);
            if (!this.__dataset(t, "ignore", 2))this.__doCheckValidity(t)
        };
        return function (t) {
            if (this.__dataset(t, "autoFocus", 2))this.__fnode = t;
            var n = i._$attr(t, "placeholder");
            if (n && "null" != n)l._$placeholder(t, this.__holder);
            if (this.__fopt && e.test(t.tagName))a._$focus(t, this.__fopt);
            var c = i._$id(t);
            this.__doCheckBoolean(c, "required");
            this.__doCheckString(c, "type");
            this.__doCheckPattern(c, "pattern");
            this.__doCheckATNumber(c, "maxlength");
            this.__doCheckATNumber(c, "minlength");
            this.__doCheckDSNumber(c, "maxLength");
            this.__doCheckDSNumber(c, "minLength");
            this.__doCheckTPNumber(c, "min");
            this.__doCheckTPNumber(c, "max");
            this.__doCheckCustomAttr(c);
            var u = i._$dataset(c, "time");
            if (u)this.__doSaveValidInfo(c, "time", u);
            var f = t.name;
            this.__message[f + "-tip"] = this.__dataset(t, "tip");
            this.__message[f + "-error"] = this.__dataset(t, "message");
            this._$showTip(t);
            var _ = this.__vinfo[c], h = (_ || d).data || d, p = this.__dataset(t, "counter", 2);
            if (p && (h.maxlength || h.maxLength))o._$counter(c, {nid: this.__wopt.tp.nid, clazz: "js-counter"});
            if (_ && e.test(t.tagName))this.__doInitDomEvent([[t, "focus", s._$bind(this)], [t, "blur", r._$bind(this)]]); else if (this.__dataset(t, "focus", 2))this.__doInitDomEvent([[t, "focus", s._$bind(this)]])
        }
    }();
    _.__doInitValidRule = function () {
        var t = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (e, t) {
                var i = this.__dataset(t, "format") || "yyyy-MM-dd";
                return !e || !isNaN(this.__doParseDate(e)) && s._$format(this.__doParseDate(e), i) == e
            }
        };
        var i = {
            required: function (e) {
                var t = e.type, i = !e.value, n = ("checkbox" == t || "radio" == t) && !e.checked;
                if (n || i)return -1
            }, type: function (e, t) {
                var i = this.__treg[t.type], n = e.value.trim(), r = !!i.test && !i.test(n), a = s._$isFunction(i) && !i.call(this, n, e);
                if (r || a)return -2
            }, pattern: function (e, t) {
                if (!t.pattern.test(e.value))return -3
            }, maxlength: function (e, t) {
                if (e.value.length > t.maxlength)return -4
            }, minlength: function (e, t) {
                if (e.value.length < t.minlength)return -5
            }, maxLength: function (e, t) {
                if (s._$length(e.value) > t.maxLength)return -4
            }, minLength: function (e, t) {
                if (s._$length(e.value) < t.minLength)return -5
            }, min: function (e, t) {
                var i = this.__number(e.value, t.type, t.time);
                if (isNaN(i) || i < t.min)return -6
            }, max: function (e, t) {
                var i = this.__number(e.value, t.type, t.time);
                if (isNaN(i) || i > t.max)return -7
            }
        };
        var n = function (e, t, i, n) {
            var r = e[i];
            if (!s._$isFunction(t) || !s._$isFunction(r))e[i] = t; else e[i] = r._$aop(t)
        };
        return function (r) {
            this.__treg = e.X({}, t);
            s._$loop(r.type, n._$bind(null, this.__treg));
            this.__vfun = e.X({}, i);
            this.__xattr = r.attr;
            s._$loop(this.__xattr, n._$bind(null, this.__vfun))
        }
    }();
    _.__doPushValidRule = function (e, t) {
        if (s._$isFunction(t)) {
            var i = this.__vinfo[e];
            if (!i || !i.func) {
                i = i || {};
                i.func = [];
                this.__vinfo[e] = i
            }
            i.func.push(t)
        }
    };
    _.__doSaveValidInfo = function (e, t, i) {
        if (t) {
            var n = this.__vinfo[e];
            if (!n || !n.data) {
                n = n || {};
                n.data = {};
                this.__vinfo[e] = n
            }
            n.data[t] = i
        }
    };
    _.__doCheckValidity = function (e) {
        e = this._$get(e) || e;
        if (!e)return !0;
        var t = this.__vinfo[i._$id(e)];
        if (!t && this.__isValidElement(e)) {
            this.__doPrepareElement(e);
            t = this.__vinfo[i._$id(e)]
        }
        if (!t)return !0;
        var n;
        s._$forIn(t.func, function (i) {
            n = i.call(this, e, t.data);
            return null != n
        }, this);
        if (null == n) {
            var r = {target: e, form: this.__form};
            this._$dispatchEvent("oncheck", r);
            n = r.value
        }
        var r = {target: e, form: this.__form};
        if (null != n) {
            if (s._$isObject(n))s._$merge(r, n); else r.code = n;
            this._$dispatchEvent("oninvalid", r);
            if (!r.stopped)this._$showMsgError(e, r.value || this.__message[e.name + n])
        } else {
            this._$dispatchEvent("onvalid", r);
            if (!r.stopped)this._$showMsgPass(e, r.value)
        }
        return null == n
    };
    _.__doShowMessage = function () {
        var e = {tp: "tip", ok: "pass", er: "error"};
        var t = function (e, t) {
            return e == t ? "block" : "none"
        };
        var n = function (e, t, n) {
            var s = r.call(this, e, t);
            if (!s && n)s = i._$wrapInline(e, this.__wopt[t]);
            return s
        };
        var r = function (t, n) {
            var s = i._$get(t.name + "-" + e[n]);
            if (!s)s = i._$getByClassName(t.parentNode, this.__wopt[n].nid)[0];
            return s
        };
        return function (e, a, o) {
            e = this._$get(e) || e;
            if (e) {
                "er" == o ? i._$addClassName(e, this.__invalid) : i._$delClassName(e, this.__invalid);
                var l = n.call(this, e, o, a);
                if (l && a)l.innerHTML = a;
                s._$loop(this.__wopt, function (n, s) {
                    i._$setStyle(r.call(this, e, s), "display", t(o, s))
                }, this)
            }
        }
    }();
    _._$showTip = function (e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-tip"], "tp")
    };
    _._$showMsgPass = function (e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-pass"] || this.__message.pass, "ok")
    };
    _._$showMsgError = function (e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-error"], "er")
    };
    _._$setValue = function () {
        var e = /^(?:radio|checkbox)$/i;
        var t = function (e) {
            return null == e ? "" : e
        };
        var i = function (e, i) {
            if (i.multiple) {
                var n;
                if (!s._$isArray(e))n[e] = e; else n = s._$array2object(e);
                s._$forEach(i.options, function (e) {
                    e.selected = null != n[e.value]
                })
            } else i.value = t(e)
        };
        var n = function (n, s) {
            if (e.test(s.type || ""))s.checked = n == s.value; else if ("SELECT" == s.tagName)i(n, s); else s.value = t(n)
        };
        return function (e, t) {
            var i = this._$get(e);
            if (i)if ("SELECT" == i.tagName || !i.length)n(t, i); else s._$forEach(i, n._$bind(null, t))
        }
    }();
    _._$get = function (e) {
        return this.__form.elements[e]
    };
    _._$form = function () {
        return this.__form
    };
    _._$data = function () {
        var e = /^radio|checkbox$/i, t = /^number|date$/;
        var n = function (e) {
            if ("SELECT" == e.tagName && e.multiple) {
                var t = [];
                s._$forEach(e.options, function (e) {
                    if (e.selected)t.push(e.value)
                });
                return t.length > 0 ? t : ""
            }
            return e.value
        };
        var r = function (r, a) {
            var o = a.name, l = n(a), c = r[o], d = this.__dataset(a, "type"), u = i._$dataset(a, "time");
            if (t.test(d))if (s._$isArray(l))s._$forEach(l, function (e, t, i) {
                i[t] = this.__number(e, d, u)
            }, this); else l = this.__number(l, d, u);
            if (e.test(a.type) && !a.checked) {
                l = this.__dataset(a, "value");
                if (!l)return
            }
            if (c) {
                if (!s._$isArray(c)) {
                    c = [c];
                    r[o] = c
                }
                c.push(l)
            } else r[o] = l
        };
        return function () {
            var e = {};
            s._$forEach(this.__form.elements, function (t) {
                if (this.__isValueElement(t))r.call(this, e, t)
            }, this);
            return e
        }
    }();
    _._$reset = function () {
        var e = function (e) {
            if (this.__isValidElement(e))this._$showTip(e)
        };
        return function () {
            this.__form.reset();
            s._$forEach(this.__form.elements, e, this)
        }
    }();
    _._$submit = function () {
        this.__form.submit()
    };
    _._$refresh = function () {
        var e = function (e) {
            if (this.__isValidElement(e))this.__doPrepareElement(e)
        };
        return function () {
            this.__vinfo = {};
            s._$forEach(this.__form.elements, e, this)
        }
    }();
    _._$checkValidity = function (e) {
        e = this._$get(e) || e;
        if (e)return this.__doCheckValidity(e);
        var t = !0;
        s._$forEach(this.__form.elements, function (e) {
            var i = this._$checkValidity(e);
            t = t && i
        }, this);
        return t
    };
    if (!0)e.copy(e.P("nej.ut"), c);
    return c
}, 132, 2, 3, 5, 28, 4, 236, 237, 238);
I$(117, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u;
    o._$$ListModuleWF = t._$klass();
    u = o._$$ListModuleWF._$extend(a._$$ListModule);
    u.__reset = function (e) {
        this.__doResetMoreBtn(e.more);
        this.__sbody = n._$get(e.sbody);
        this.__doInitDomEvent([[this.__sbody, "scroll", this.__onCheckScroll._$bind(this)]]);
        var t = e.delta;
        if (null == t)t = 30;
        this.__delta = Math.max(0, t);
        var i = parseInt(e.count) || 0;
        this.__count = Math.max(0, i);
        var s = parseInt(e.number) || 0;
        if (s > 1 && s <= i)this.__number = s;
        this.__super(e)
    };
    u.__destroy = function () {
        this.__super();
        delete this.__nmore;
        delete this.__sbody;
        delete this.__endskr;
        delete this.__nexting
    };
    u.__getPageInfo = function (e, t) {
        var i = this.__first + (this.__count - 1) * this.__limit, n = this.__count * this.__limit;
        return this.__super(i, e, n, t)
    };
    u.__doResetMoreBtn = function (e) {
        this.__nmore = n._$get(e);
        this.__doInitDomEvent([[this.__nmore, "click", this._$next._$bind(this)]])
    };
    u.__doCheckScroll = function (e) {
        if (!this.__endskr && e && this.__lbox.clientHeight) {
            if (!e.scrollHeight)e = n._$getPageBox();
            var t = n._$offset(this.__lbox, this.__sbody), i = t.y + this.__lbox.offsetHeight - e.scrollTop - e.clientHeight, s = e.scrollHeight <= e.clientHeight;
            if (i <= this.__delta || s && !this.__endskr)this._$next()
        }
    };
    u.__onCheckScroll = function (e) {
        if (!this.__endskr)this.__doCheckScroll(i._$getElement(e))
    };
    u.__doChangePage = function (e) {
        this.__super(e);
        if (!e.stopped) {
            this.__doClearListBox();
            var t = 0;
            if (e.index > 1)t = this.__first + ((e.index - 1) * this.__count - 1) * this.__limit;
            this.__offset = t;
            this._$next()
        }
    };
    u.__doGenRequestOpt = function (e) {
        if (this.__number) {
            var t = e.offset > 0 ? this.__limit : this.__first, i = t + this.__limit * (this.__number - 1);
            this.__offset = e.offset + i;
            e.data.limit = i;
            e.limit = i;
            delete this.__number
        }
        return e
    };
    u.__cbListLoad = function (e) {
        delete this.__nexting;
        this.__super(e);
        this._$resize()
    };
    u.__cbListChange = function (e) {
        if (e.key == this.__ropt.key) {
            switch (e.action) {
                case"refresh":
                case"append":
                    delete this.__nexting
            }
            this.__super(e)
        }
    };
    u.__doBeforeListLoad = function () {
        this.__doShowMessage("onbeforelistload", "列表加载中...");
        n._$setStyle(this.__nmore, "display", "none")
    };
    u.__doBeforeListRender = function (e, t, i) {
        var s = e.length, r = e.loaded ? t + i >= s : t + i > s;
        this.__offset = Math.min(this.__offset, s);
        n._$setStyle(this.__nmore, "display", r ? "none" : "");
        if (r)this.__endskr = !0;
        if (this.__count > 0) {
            var a = this.__getPageInfo(t, e.length);
            if (this.__doSyncPager(a.index, a.total))return !0;
            var o = this.__first - this.__limit, l = this.__count * this.__limit;
            this.__endskr = (t + i - o) % l == 0 || r;
            n._$setStyle(this.__nmore, "display", this.__endskr ? "none" : "");
            this.__doSwitchPagerShow(this.__endskr && a.total > 1 ? "" : "none")
        }
    };
    u.__doShowEmpty = function () {
        this.__offset = 0;
        this.__endskr = !0;
        this.__doShowMessage("onemptylist", "没有列表数据！")
    };
    u.__doShowListByJST = function (e, t) {
        this.__lbox.insertAdjacentHTML(t || "beforeEnd", e)
    };
    u.__doShowListByItem = function (e) {
        this.__items = this.__items || [];
        if (s._$isArray(e))d.push.apply(this.__items, e); else this.__items.push(e)
    };
    u.__cbItemAdd = function (e) {
        n._$removeByEC(this.__ntip);
        this.__doCheckResult(e, "onafteradd");
        var t = e.flag;
        if (!e.stopped && t)if (!(this.__count > 0)) {
            this.__offset += 1;
            t == -1 ? this._$unshift(e.data) : this._$append(e.data)
        } else this.__doRefreshByPager()
    };
    u.__cbItemDelete = function (e) {
        this.__doCheckResult(e, "onafterdelete");
        if (!e.stopped)if (!(this.__count > 0)) {
            var t = e.data[this.__iopt.pkey];
            if (this.__items) {
                var i = r._$getItemById(this.__getItemId(t)), a = s._$indexOf(this.__items, i);
                if (a >= 0) {
                    this.__items.splice(a, 1);
                    this.__offset -= 1
                }
                if (i)i._$recycle()
            } else {
                var o = this._$getItemBody(t);
                if (o)this.__offset -= 1;
                n._$remove(o)
            }
            if (this.__offset <= 0)this._$next()
        } else this.__doRefreshByPager()
    };
    u.__cbAppendList = function (e, t) {
        if (e == this.__offset)if (this._$isLoaded()) {
            this.__endskr = !1;
            this._$resize()
        }
    };
    u.__cbUnshiftList = function (e, t) {
        if (0 == e) {
            var i = this.__cache._$getListInCache(this.__ropt.key);
            for (var n = t - 1; n >= 0; n--)this._$unshift(i[n])
        }
    };
    u._$resize = function () {
        var e = this.__sbody;
        if (e && !this.__endskr)this.__doCheckScroll(this.__sbody)
    };
    u._$refresh = function () {
        delete this.__endskr;
        this.__super()
    };
    u._$next = function () {
        if (!this.__nexting) {
            this.__nexting = !0;
            var e = this.__offset;
            this.__offset += 0 == e ? this.__first : this.__limit;
            this.__doChangeOffset(e)
        }
    };
    if (!0)e.copy(e.P("nej.ut"), o);
    return o
}, 132, 2, 5, 3, 28, 118, 242);
I$(206, function (e, t, i, n, s) {
    var r;
    s._$$ScheduleCache = e._$klass();
    r = s._$$ScheduleCache._$extend(n._$$CacheListAbstract);
    r.__doLoadList = function (e) {
        var n = e.onload;
        var s = e.data || {};
        t._$merge(s, {limit: e.limit, offset: e.offset});
        if (!(s.list && s.list.length > 0))switch (e.key) {
            case"scedule-list-data":
                var r = e.ext.url;
                i._$request(r, {
                    type: "json", data: t._$object2query(s), onload: function (e) {
                        n(200 == e.code ? e.result.list : null)
                    }, onerror: n._$bind(null)
                });
                break;
            case"scedule-list-data2":
                var r = e.ext.url;
                i._$request(r, {
                    type: "json", data: t._$object2query(s), onload: function (e) {
                        n(200 == e.code ? e.result.list : null)
                    }, onerror: n._$bind(null)
                });
                break;
            default:
                n(s.list)
        } else n(s.list)
    }
}, 2, 28, 150, 247);
I$(207, '<#uispace> .p-presell{margin:0 0 30px;}\n<#uispace> .p-brand{margin:0 -1px;}\n<#uispace> .m-list1 .logo .fav{opacity:0;filter:alpha(opacity = 0);}\n<#uispace> .m-list1 .logo:hover .fav{opacity:1;filter:alpha(opacity = 100);}\n<#uispace> .m-list1 .logo .fav-ok{opacity:1;filter:alpha(opacity = 100);}\n<#uispace> .m-list3 .pic .fav-ok{opacity:1;filter:alpha(opacity = 100);}\n<#uispace> .m-banner-img a{position:absolute;top:0;left:0;overflow:hidden;height:390px;}\n<#uispace> .pre-tram{opacity:0;filter:alpha(opacity = 0);-webkit-transition:opacity 1s;-moz-transition:opacity 1s;-ms-transition:opacity 1s;-o-transition:opacity 1s;transition:opacity 1s;}\n<#uispace> .do-tram{opacity:1;filter:alpha(opacity = 100);}\n<#uispace> .pre-transform{opacity:0;filter:alpha(opacity = 0);}\n<#uispace> .pre-transform img{-webkit-transform:scaleX(1) scaleY(1);-moz-transform:scaleX(1) scaleY(1);-ms-transform:scaleX(1) scaleY(1);-o-transform:scaleX(1) scaleY(1);transform:scaleX(1) scaleY(1);}\n<#uispace> .do-transform img{-webkit-transition:transform 4s linear;-moz-transition:transform 4s linear;-ms-transition:transform 4s linear;-o-transition:transform 4s linear;transition:transform 4s linear;-webkit-transform:scaleX(1.05) scaleY(1.05);-moz-transform:scaleX(1.05) scaleY(1.05);-ms-transform:scaleX(1.05) scaleY(1.05);-o-transform:scaleX(1.05) scaleY(1.05);transform:scaleX(1.05) scaleY(1.05);}\n\n<#uispace> .m-list3{padding-top:1px;zoom:1;}\n<#uispace> .m-list3 ul{margin-top:-17px;}\n<#uispace> .m-list3 li{position:relative;float:left;width:100%;margin-top:16px;height:240px;background:#fff;}\n<#uispace> .m-list3 li:hover,<#uispace> .m-list3 li.j-hover{-webkit-box-shadow:0 0 8px rgba(0,0,0,0.2);box-shadow:0 0 8px rgba(0,0,0,0.2);}\n<#uispace> .m-list3 li:hover .u-icon2,<#uispace> .m-list3 li.j-hover .u-icon2{opacity:1;visibility:visible;}\n<#uispace> .m-list3 .pic{position:absolute;left:0;top:0;width:100%;height:100%;}\n<#uispace> .m-list3 .pic img{display:block;width:100%;height:100%;}\n<#uispace> .m-list3 .pic .fav{-webkit-transition: 1s;-moz-transition: 1s;transition: 1s;}\n<#uispace> .m-list3 .pic .fav{filter:alpha(opacity = 0);opacity:0;position:absolute;bottom:20px;right:15px;width:25px;height:25px;color:#e878b2;border-radius:50%;background:#fff;}\n<#uispace> .m-list3 .pic .fav i{display:block;font-size:16px;text-align:center;line-height:28px;}\n<#uispace> .m-list3 .pic:hover .fav{filter:alpha(opacity = 100);opacity:1;}\n<#uispace> .m-list3 .aside{position:absolute;left:0;top:0;height:100%;width:190px;color:#fff;font-size:14px;text-align:center;background:rgba(51,31,52,0.9);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#e5331f34, endColorstr=#e5331f34);}\n<#uispace> .m-list3 .logo{position:relative;display:block;width:100px;height:100px;margin:15px auto 0;overflow:hidden;border-radius:50%;background:#fff;background:url("/res/images/logobg.png") 50% 50% no-repeat\\9;}\n<#uispace> .m-list3 .logo .logobox{position:absolute;top:50%;left:0;margin:-18px auto 0 auto;height:36px;width:100%;}\n<#uispace> .m-list3 .logo img{display:block;position:absolute;top:50%;left:0;margin:-30px auto 0;}\n<#uispace> .m-list3 .xicon{display:block;width:13px;height:13px;margin:10px auto 0;text-align:center;color:#a292a0;background-position:-130px -20px;}\n<#uispace> .m-list3 .info{margin-top:10px;}\n<#uispace> .m-list3 .selloff{line-height:30px;}\n<#uispace> .m-list3 .selloff .num{margin-right:3px;font-family:arial,"simsun";font-size:28px;color:#d6aff7;}\n<#uispace> .m-list3 .countdown{font-family:"simsun",arial;font-size:12px;color:#a090b8;}\n<#uispace> .m-list3 .countdown i{margin-right:3px;font-size:13px;}\n<#uispace> .m-list3 .u-icon2{position:absolute;right:16px;bottom:16px;filter:alpha(opacity = 0);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s linear;-moz-transition:opacity 0.3s linear;transition:opacity 0.3s linear;}\n<#uispace> .m-list3-2 li{height:306px;}\n<#uispace> .m-list3-2 .aside{width:240px;}\n<#uispace> .m-list3-2 .logo{margin-top:38px;}\n<#uispace> .m-list3-2 .x{margin-top:22px;}\n<#uispace> .m-list3-2 .info{margin-top:18px;}\n<#uispace> .m-list3-2 .selloff{margin-top:5px;}\n<#uispace> .m-list3-2 .countdown{margin-top:2px;}');
I$(208, "<textarea name='jst' id='#<seedList>'>\n  {list beg..end as x}\n    {var s = xlist[x]}\n    <section class='w-schedule j-li'>\n      <a href='/schedule?scheduleId=${s.banner.scheduleId}'>\n        <div class='img'>\n          <div class='time'><i class='u-time'></i>\n          {var now = new Date().getTime()}\n          <span data-countdown='${s.endTime-now}' class='j-bcd'></span>后结束</div>\n          <div class='m-img'>\n            <img class='u-loading-1' data-src='${s.banner.homeBannerImgUrl}' />\n          </div>\n        </div>\n      </a>\n      <div class='cnt f-cb'>\n        <img class='logo u-loading-1' data-src='${s.brandLogo}' />\n        <div class='word'>\n          <p title='${s.title}'>${s.title}</p>\n          <p>含${s.prdDetail.productTotalCnt}款新品<i class='price'>${s.prdDetail.minDiscount/10}折起</i></p>\n        </div>\n      </div>\n    </section>\n  {/list}\n</textarea>\n<textarea name='ntp' id='#<seedBox>'>\n<div></div>\n</textarea>\n<textarea name='ntp' id='#<seedLoading>'>\n<div class=\"m-schedule-loading\">\n  <div class=\"load\">\n    <div class=\"w-loading\"></div>\n    <div class=\"text f-fs1 s-fc2\">努力加载中...</div>\n  </div>\n</div>\n</textarea>\n");
I$(71, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p, m) {
    var v, g = t._$pushCSSText(u), $ = o._$parseUITemplate(f), y = $["seedBox"], b = $["seedList"], x = $["seedLoading"], w = 10;
    _._$$ScheduleList = e._$klass();
    v = _._$$ScheduleList._$extend(s._$$Abstract);
    v.__init = function (e) {
        this.__super(e)
    };
    v.__reset = function (e) {
        var i = t._$get("list-box");
        e.parent = t._$get(e.parent) || i;
        this.__super(e);
        var s = e.limit || s;
        this.__listmodule = a._$$ListModuleWF._$allocate({
            limit: s,
            sbody: e.sbody || window,
            parent: this.__body,
            delta: e.delta || 100,
            item: b,
            cache: {
                ext: {url: e.url || ""},
                lkey: e.lkey || "scedule-list-data",
                data: {list: e.list},
                klass: r._$$ScheduleCache
            },
            onbeforelistload: function (e) {
                e.stopped = !0;
                this.__ntip = o._$getNodeTemplate(x);
                this.__body.insertAdjacentElement("beforeEnd", this.__ntip)
            }._$bind(this),
            onafterlistrender: function (e) {
                t._$removeByEC(this.__ntip);
                n._$dispatchEvent(window, "scroll");
                var i = e.parent;
                var r = t._$getByClassName(i, "j-li");
                r = r.slice(e.offset, e.offset + s);
                this.__addCountdown(r)
            }._$bind(this),
            onemptylist: function (e) {
                if (this.__ntip)t._$removeByEC(this.__ntip)
            }._$bind(this),
            pager: {parent: "pager-box"}
        })
    };
    v.__initXGui = function () {
        this.__seed_css = g;
        this.__seed_html = y
    };
    v.__checkLogin = function () {
        var e = l._$cookie("P_INFO");
        return !!e
    };
    v.__addCountdown = function (e) {
        i._$forEach(e, function (e) {
            var i = t._$getByClassName(e, "j-bcd")[0], n = t._$dataset(i, "countdown");
            if (n) {
                var s = new c({
                    data: {
                        content: "", time: n, updatetime: 6e4, onchange: function (e) {
                            if (e.isdown) {
                                var n = i.parentNode.parentNode.parentNode.parentNode;
                                t._$addClassName(n, "f-dn")
                            } else if ("00" == e.meta.dd && "00" == e.meta.HH && "00" == e.meta.mm)i.innerHTML = e.meta.ss + "秒"; else if ("00" == e.meta.dd && "00" == e.meta.HH)i.innerHTML = e.meta.mm + "分钟"; else if ("00" == e.meta.dd)i.innerHTML = e.meta.HH + "小时"; else i.innerHTML = e.meta.dd + "天"
                        }._$bind(i)
                    }
                });
                s.$inject(i)
            }
        }._$bind(this))
    }
}, 2, 3, 28, 5, 159, 206, 117, 118, 128, 31, 19, 207, 208);
I$(328, function (e, t, i, n, s, r) {
    return i
}, 249, 3);
I$(346, function (e, t, i, n, s, r) {
    var a = {opacity: 1, "z-index": 1, background: 1, "font-weight": 1, filter: 1};
    i.__doCheckProp = function (e) {
        return void 0 === a[e] && e.indexOf("color") < 0
    };
    i.__onStart = function (e, i, n) {
        n = n.slice(0, -1);
        t._$setStyle(e, "transition", n);
        t._$style(e, i)
    };
    i.__onStop = function (e, i, n, s) {
        t._$style(e, i);
        t._$setStyle(e, "transition", "none");
        n.call(null, i, s)
    };
    return i
}, 132, 3);
I$(341, function (e, t, i, n, s, r, a) {
    return t
}, 249, 346, 3);
I$(329, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$Effect = t._$klass();
    d = a._$$Effect._$extend(r._$$EventTarget);
    d.__reset = function (e) {
        this.__super(e);
        this.__node = n._$get(e.node);
        this.__styles = e.styles || [];
        this.__onstop = e.onstop || l;
        this.__transition = e.transition || [];
        this.__propMap = {};
        this.__animRule = this.__doParseStyle();
        this.__doInitDomEvent([[this.__node, "transitionend", this.__onTransitionEnd._$bind(this)]])
    };
    d.__destroy = function () {
        if (this.__intvl)this.__intvl = window.clearInterval(this.__intvl);
        delete this.__node;
        delete this.__styles;
        delete this.__animRule;
        delete this.__propMap;
        delete this.__lastProp;
        delete this.__transition;
        delete this.__intvl;
        this.__super()
    };
    d.__onTransitionEnd = function (e) {
        if (this.__start && this.__isLast(e)) {
            this.__start = !1;
            this._$stop()
        }
    };
    d.__isLast = function (e) {
        var t = e.propertyName, i = !1;
        s._$forIn(this.__lastProp, function (e) {
            i = t.indexOf(e) > -1
        }._$bind(this));
        if (i || this.__lastProp[t])return !0; else return !1
    };
    d.__doParseStyle = function () {
        var e = function (e) {
            var t = e.split(":"), s = t[0], r = t[1], a = this.__node;
            if (r.indexOf("=") > -1) {
                var o = parseInt(n._$getStyle(a, s)) || 0;
                var l = parseInt(r.split("=")[1]);
                if (r.indexOf("+") > -1)r = o + l; else r = o - l
            }
            if (i.__doCheckProp(s))if (r.toString().indexOf("px") < 0)r += "px";
            this.__propMap[s] = r
        };
        var t = function (e) {
            if (!this.__transition[e])return "";
            var t = this.__transition[e], i = t.duration + t.delay;
            if (i > this.__sumtime) {
                this.__lastProp = {};
                this.__sumtime = i;
                this.__lastProp[t.property] = t.property
            } else if (i == this.__sumtime)this.__lastProp[t.property] = t.property;
            return t.property + " " + t.duration + "s " + t.timing + " " + t.delay + "s,"
        };
        return function () {
            var i = "";
            this.__sumtime = 0;
            this.__lastProp = {};
            s._$forEach(this.__styles, function (n, s) {
                e.call(this, n);
                i += t.call(this, s)
            }._$bind(this));
            return i
        }
    }();
    d.__onPlayState = function () {
        this.__state = {};
        s._$forIn(this.__propMap, function (e, t) {
            this.__state[t] = n._$getStyle(this.__node, t)
        }._$bind(this));
        this._$dispatchEvent("onplaystate", this.__state)
    };
    d._$start = function () {
        this.__start = !0;
        i.__onStart(this.__node, this.__propMap, this.__animRule, this.__onstop);
        this.__intvl = window.setInterval(this.__onPlayState._$bind(this), 49)
    };
    d._$stop = function (e) {
        this.__intvl = window.clearInterval(this.__intvl);
        i.__onStop(this.__node, this.__propMap, this.__onstop, e)
    };
    d._$paused = function () {
    };
    d._$restart = function () {
    };
    if (!0)e.copy(e.P("nej.ut"), a);
    return a
}, 132, 2, 341, 3, 28, 4);
I$(311, function (e, t, i, n, s, r, a, o, l, c) {
    a.__initOptions = function (e) {
        e = e || {};
        e.onstop = e.onstop || l;
        e.onplaystate = e.onplaystate || l;
        return e
    };
    a.__doBeforeStart = function () {
        var t = function (t, s) {
            var r, a = !0;
            i._$forIn(s, function (i, s) {
                if ("opacity" === s) {
                    r = n.__formatNumber ? n.__formatNumber(t) : e._$getStyle(t, s);
                    i = n.__formatTo ? n.__formatTo(i) : i
                } else r = e._$getStyle(t, s);
                if (parseInt(r) === i)a = !1
            }._$bind(this));
            return a
        };
        return function (e, i) {
            if (!t(e, i))return !1; else return !0
        }
    }();
    a.__doFade = function () {
        var t = function (t) {
            var i = e._$getStyle(t, "display");
            if ("none" === i)return !1; else return !0
        };
        return function (i, n, r) {
            var o = n.opacity || r;
            i = e._$get(i);
            if (!t.call(i))return !1;
            if (i.effect)return !1;
            if (!a.__doBeforeStart(i, {opacity: o}))return !1;
            n = a.__initOptions(n);
            i.effect = s._$$Effect._$allocate({
                node: i,
                transition: [{
                    property: "opacity",
                    timing: n.timing || "ease-in",
                    delay: n.delay || 0,
                    duration: n.duration || 1
                }],
                styles: ["opacity:" + o],
                onstop: function (e, t) {
                    i.effect = s._$$Effect._$recycle(i.effect);
                    n.onstop.call(null, e, t)
                },
                onplaystate: n.onplaystate._$bind(i.effect)
            });
            i.effect._$start()
        }
    }._$bind(this)();
    a._$fadeIn = function (e, t) {
        return a.__doFade(e, t, 1)
    };
    a._$fadeOut = function (e, t) {
        return a.__doFade(e, t, 0)
    };
    a._$fadeStop = function (e) {
        a._$stopEffect(e)
    };
    a._$stopEffect = function (t) {
        t = e._$get(t);
        t.effect && t.effect._$stop(!0)
    };
    a._$moveTo = function (t, i, n) {
        t = e._$get(t);
        if (t.effect)return !1;
        if (!a.__doBeforeStart(t, i))return !1;
        n = a.__initOptions(n);
        n.duration = n.duration || [];
        var r = i.top || 0, o = i.left || 0;
        t.effect = s._$$Effect._$allocate({
            node: t,
            transition: [{
                property: "top",
                timing: n.timing || "ease-in",
                delay: n.delay || 0,
                duration: n.duration[0] || 1
            }, {property: "left", timing: n.timing || "ease-in", delay: n.delay || 0, duration: n.duration[1] || 1}],
            styles: ["top:" + r, "left:" + o],
            onstop: function (e, i) {
                t.effect = s._$$Effect._$recycle(t.effect);
                n.onstop.call(null, e, i)
            },
            onplaystate: n.onplaystate._$bind(t.effect)
        });
        t.effect._$start()
    };
    a._$slide = function (t, i, n) {
        t = e._$get(t);
        if (t.effect)return !1;
        n = a.__initOptions(n);
        var r = i.split(":"), o = r[0], l = [];
        l.push(i);
        t.effect = s._$$Effect._$allocate({
            node: t,
            transition: [{property: o, timing: n.timing || "ease-in", delay: n.delay || 0, duration: n.duration || 1}],
            styles: l,
            onstop: function (e, i) {
                t.effect = s._$$Effect._$recycle(t.effect);
                n.onstop.call(null, e, i)
            },
            onplaystate: n.onplaystate._$bind(t.effect)
        });
        t.effect._$start()
    };
    a._$toggleEffect = function () {
        var t = function (e, t) {
            return "height" == t ? e.clientHeight : e.clientWidth
        };
        return function (i, n, r) {
            i = e._$get(i);
            if (i.effect)return !1;
            r = a.__initOptions(r);
            var o = r.value || !1;
            if (!o) {
                e._$setStyle(i, "display", "block");
                var i = e._$get(i);
                o = t(i, n)
            }
            var l = e._$getStyle(i, "visibility");
            if ("hidden" === l) {
                i.style.height = 0;
                e._$setStyle(i, "visibility", "inherit");
                i.effect = s._$$Effect._$allocate({
                    node: i,
                    transition: [{
                        property: n,
                        timing: r.timing || "ease-in",
                        delay: r.delay || 0,
                        duration: r.duration || 1
                    }],
                    styles: [n + ":" + o],
                    onstop: function (e, t) {
                        i.effect = s._$$Effect._$recycle(i.effect);
                        r.onstop.call(null, e, t);
                        c = window.clearTimeout(c)
                    },
                    onplaystate: r.onplaystate._$bind(i.effect)
                })
            } else {
                i.style.height = o;
                i.effect = s._$$Effect._$allocate({
                    node: i,
                    transition: [{
                        property: n,
                        timing: r.timing || "ease-in",
                        delay: r.delay || 0,
                        duration: r.duration || 1
                    }],
                    styles: [n + ":0"],
                    onstop: function (t, a) {
                        e._$setStyle(i, "visibility", "hidden");
                        e._$setStyle(i, n, "auto");
                        i.effect = s._$$Effect._$recycle(i.effect);
                        r.onstop.call(null, t, a);
                        c = window.clearTimeout(c)
                    },
                    onplaystate: r.onplaystate._$bind(i.effect)
                })
            }
            var c = window.setTimeout(function () {
                i.effect._$start()
            }._$bind(this), 0)
        }
    }();
    r._$merge(a);
    if (!0)NEJ.copy(NEJ.P("nej.e"), a);
    return a
}, 3, 5, 28, 328, 329, 133);
I$(263, function (e) {
    return e
}, 311);
I$(166, function (e, t, i, n, s, r, a, o, l, c) {
    var d;
    a._$$ScrollSpy = e._$klass();
    d = a._$$ScrollSpy._$extend(s._$$EventTarget);
    d.__reset = function (e) {
        this.__body = t._$get(e.target);
        this.__floatBar = t._$getByClassName(this.__body, "j-flag")[0];
        this.__doInitDomEvent([[window, "scroll", this.__position._$bind(this)]]);
        this.__position()
    };
    d.__position = function () {
        var e = t._$offset(this.__body), i = t._$getPageBox();
        if (e.y > i.clientHeight + i.scrollTop - this.__floatBar.clientHeight)t._$addClassName(this.__floatBar, "j-float"); else t._$delClassName(this.__floatBar, "j-float")
    };
    d._$updatewgt = function () {
        this.__position()
    };
    return a
}, 2, 3, 5, 28, 4, 263);
I$(264, '<div class="u-selnum u-selnum-2">\n  <span class="less {{!!(amount<=1) || disabled ? \'z-dis\': \'\'}}"  on-touchstart={{this.setNum(amount-1,$event)}} on-click={{this.setNum(amount-1,$event)}}><i class="hx"></i></span>\n  <input type="text" type=tel r-model={{amount}} on-blur={{this.checkNum(amount)}} maxlength="2" ref="input" />\n  <span class="more {{!!(amount>=max) || disabled ? \'z-dis\': \'\'}}" on-touchstart={{this.setNum(amount+1,$event)}} on-click={{this.setNum(amount+1,$event)}}><i class="sx"></i></span>\n</div>');
I$(167, function (e, t, i, n) {
    var s = t.extend({
        name: "amountpick", template: n, computed: {
            max: function (e) {
                return Math.min(e.inventroyCount || 1, 99)
            }
        }, config: function (t) {
            e.extend(t, {
                min: 1,
                amount: void 0 != t.amount ? parseInt(t.amount, 10) : 1,
                amount_: void 0 != t.amount ? parseInt(t.amount, 10) : 1,
                __isMobile: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|Windows Phone)/i)
            });
            this.$watch("amount_", function (e, t) {
                if (null != e && null != t)this.$emit("change", {oldValue: t, newValue: e})
            })
        }, validate: function (e) {
            var t = this.$get("max");
            if (!/^[0-9]*[1-9][0-9]*$/.test("" + e))return 1; else if (e > t)return 2;
            return 0
        }, checkNum: function (t) {
            var i = this.validate(t);
            if (1 == i)this.$emit("showMsg", {msg: "输入有误！"}); else e.delay("id", this.updateNum._$bind(this, t), 300)
        }, setNum: function (t, i) {
            if (!this.data.__isMobile || "click" !== i.type) {
                var n = this.data, s = this.$get("max"), r = n.min;
                t = parseInt(t, 10) || r;
                if (t > s) {
                    s === n.inventroyCount && this.$emit("showMsg", {msg: "库存不足"});
                    t = s
                }
                if (t < r)t = r;
                n.amount = t;
                e.delay("id", this.updateNum._$bind(this, t), 300)
            }
        }, updateNum: function (e) {
            this.$update("amount_", e);
        }, disable: function () {
            this.$update("disable", !0);
            this.$refs["input"].disabled = "disabled"
        }
    });
    return s
}, 1, 140, 145, 264);
!function (e, t) {
    if ("object" == typeof module && "object" == typeof module.exports)module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    }; else t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
        var t = e.length, i = se.type(e);
        if ("function" === i || se.isWindow(e))return !1;
        if (1 === e.nodeType && t)return !0; else return "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (se.isFunction(t))return se.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType)return se.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (fe.test(t))return se.filter(t, e, i);
            t = se.filter(t, e)
        }
        return se.grep(e, function (e) {
            return se.inArray(e, t) >= 0 !== i
        })
    }

    function s(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = ye[e] = {};
        se.each(e.match($e) || [], function (e, i) {
            t[i] = !0
        });
        return t
    }

    function a() {
        if (he.addEventListener) {
            he.removeEventListener("DOMContentLoaded", o, !1);
            e.removeEventListener("load", o, !1)
        } else {
            he.detachEvent("onreadystatechange", o);
            e.detachEvent("onload", o)
        }
    }

    function o() {
        if (he.addEventListener || "load" === event.type || "complete" === he.readyState) {
            a();
            se.ready()
        }
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(Ie, "-$1").toLowerCase();
            i = e.getAttribute(n);
            if ("string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Te.test(i) ? se.parseJSON(i) : i
                } catch (s) {
                }
                se.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function c(e) {
        var t;
        for (t in e)if ("data" !== t || !se.isEmptyObject(e[t])) {
            if ("toJSON" !== t)return !1
        } else;
        return !0
    }

    function d(e, t, i, n) {
        if (se.acceptData(e)) {
            var s, r, a = se.expando, o = e.nodeType, l = o ? se.cache : e, c = o ? e[a] : e[a] && a;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) {
                if (!c)if (o)c = e[a] = Y.pop() || se.guid++; else c = a;
                if (!l[c])l[c] = o ? {} : {toJSON: se.noop};
                if ("object" == typeof t || "function" == typeof t)if (n)l[c] = se.extend(l[c], t); else l[c].data = se.extend(l[c].data, t);
                r = l[c];
                if (!n) {
                    if (!r.data)r.data = {};
                    r = r.data
                }
                if (void 0 !== i)r[se.camelCase(t)] = i;
                if ("string" == typeof t) {
                    s = r[t];
                    if (null == s)s = r[se.camelCase(t)]
                } else s = r;
                return s
            }
        }
    }

    function u(e, t, i) {
        if (se.acceptData(e)) {
            var n, s, r = e.nodeType, a = r ? se.cache : e, o = r ? e[se.expando] : se.expando;
            if (a[o]) {
                if (t) {
                    n = i ? a[o] : a[o].data;
                    if (n) {
                        if (!se.isArray(t))if (t in n)t = [t]; else {
                            t = se.camelCase(t);
                            if (t in n)t = [t]; else t = t.split(" ")
                        } else t = t.concat(se.map(t, se.camelCase));
                        s = t.length;
                        for (; s--;)delete n[t[s]];
                        if (i ? !c(n) : !se.isEmptyObject(n))return
                    }
                }
                if (!i) {
                    delete a[o].data;
                    if (!c(a[o]))return
                }
                if (r)se.cleanData([e], !0); else if (ie.deleteExpando || a != a.window)delete a[o]; else a[o] = null
            }
        }
    }

    function f() {
        return !0
    }

    function _() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {
        }
    }

    function p(e) {
        var t = Oe.split("|"), i = e.createDocumentFragment();
        if (i.createElement)for (; t.length;)i.createElement(t.pop());
        return i
    }

    function m(e, t) {
        var i, n, s = 0, r = typeof e.getElementsByTagName !== xe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xe ? e.querySelectorAll(t || "*") : void 0;
        if (!r)for (r = [], i = e.childNodes || e; null != (n = i[s]); s++)if (!t || se.nodeName(n, t))r.push(n); else se.merge(r, m(n, t));
        return void 0 === t || t && se.nodeName(e, t) ? se.merge([e], r) : r
    }

    function v(e) {
        if (Ne.test(e.type))e.defaultChecked = e.checked
    }

    function g(e, t) {
        return se.nodeName(e, "table") && se.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function $(e) {
        e.type = (null !== se.find.attr(e, "type")) + "/" + e.type;
        return e
    }

    function y(e) {
        var t = Ge.exec(e.type);
        if (t)e.type = t[1]; else e.removeAttribute("type");
        return e
    }

    function b(e, t) {
        var i, n = 0;
        for (; null != (i = e[n]); n++)se._data(i, "globalEval", !t || se._data(t[n], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && se.hasData(e)) {
            var i, n, s, r = se._data(e), a = se._data(t, r), o = r.events;
            if (o) {
                delete a.handle;
                a.events = {};
                for (i in o)for (n = 0, s = o[i].length; n < s; n++)se.event.add(t, i, o[i][n])
            }
            if (a.data)a.data = se.extend({}, a.data)
        }
    }

    function w(e, t) {
        var i, n, s;
        if (1 === t.nodeType) {
            i = t.nodeName.toLowerCase();
            if (!ie.noCloneEvent && t[se.expando]) {
                s = se._data(t);
                for (n in s.events)se.removeEvent(t, n, s.handle);
                t.removeAttribute(se.expando)
            }
            if ("script" === i && t.text !== e.text) {
                $(t).text = e.text;
                y(t)
            } else if ("object" === i) {
                if (t.parentNode)t.outerHTML = e.outerHTML;
                if (ie.html5Clone && e.innerHTML && !se.trim(t.innerHTML))t.innerHTML = e.innerHTML
            } else if ("input" === i && Ne.test(e.type)) {
                t.defaultChecked = t.checked = e.checked;
                if (t.value !== e.value)t.value = e.value
            } else if ("option" === i)t.defaultSelected = t.selected = e.defaultSelected; else if ("input" === i || "textarea" === i)t.defaultValue = e.defaultValue
        }
    }

    function T(t, i) {
        var n, s = se(i.createElement(t)).appendTo(i.body), r = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
        s.detach();
        return r
    }

    function I(e) {
        var t = he, i = Ze[e];
        if (!i) {
            i = T(e, t);
            if ("none" === i || !i) {
                Qe = (Qe || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                t = (Qe[0].contentWindow || Qe[0].contentDocument).document;
                t.write();
                t.close();
                i = T(e, t);
                Qe.detach()
            }
            Ze[e] = i
        }
        return i
    }

    function C(e, t) {
        return {
            get: function () {
                var i = e();
                if (null != i)if (!i)return (this.get = t).apply(this, arguments); else delete this.get
            }
        }
    }

    function S(e, t) {
        if (t in e)return t;
        var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = ft.length;
        for (; s--;) {
            t = ft[s] + i;
            if (t in e)return t
        }
        return n
    }

    function k(e, t) {
        var i, n, s, r = [], a = 0, o = e.length;
        for (; a < o; a++) {
            n = e[a];
            if (n.style) {
                r[a] = se._data(n, "olddisplay");
                i = n.style.display;
                if (t) {
                    if (!r[a] && "none" === i)n.style.display = "";
                    if ("" === n.style.display && ke(n))r[a] = se._data(n, "olddisplay", I(n.nodeName))
                } else {
                    s = ke(n);
                    if (i && "none" !== i || !s)se._data(n, "olddisplay", s ? i : se.css(n, "display"))
                }
            } else;
        }
        for (a = 0; a < o; a++) {
            n = e[a];
            if (n.style) {
                if (!t || "none" === n.style.display || "" === n.style.display)n.style.display = t ? r[a] || "" : "none"
            } else;
        }
        return e
    }

    function E(e, t, i) {
        var n = lt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function N(e, t, i, n, s) {
        var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; r < 4; r += 2) {
            if ("margin" === i)a += se.css(e, i + Se[r], !0, s);
            if (n) {
                if ("content" === i)a -= se.css(e, "padding" + Se[r], !0, s);
                if ("margin" !== i)a -= se.css(e, "border" + Se[r] + "Width", !0, s)
            } else {
                a += se.css(e, "padding" + Se[r], !0, s);
                if ("padding" !== i)a += se.css(e, "border" + Se[r] + "Width", !0, s)
            }
        }
        return a
    }

    function L(e, t, i) {
        var n = !0, s = "width" === t ? e.offsetWidth : e.offsetHeight, r = it(e), a = ie.boxSizing && "border-box" === se.css(e, "boxSizing", !1, r);
        if (s <= 0 || null == s) {
            s = nt(e, t, r);
            if (s < 0 || null == s)s = e.style[t];
            if (tt.test(s))return s;
            n = a && (ie.boxSizingReliable() || s === e.style[t]);
            s = parseFloat(s) || 0
        }
        return s + N(e, t, i || (a ? "border" : "content"), n, r) + "px"
    }

    function M(e, t, i, n, s) {
        return new M.prototype.init(e, t, i, n, s)
    }

    function A() {
        setTimeout(function () {
            _t = void 0
        });
        return _t = se.now()
    }

    function P(e, t) {
        var i, n = {height: e}, s = 0;
        t = t ? 1 : 0;
        for (; s < 4; s += 2 - t) {
            i = Se[s];
            n["margin" + i] = n["padding" + i] = e
        }
        if (t)n.opacity = n.width = e;
        return n
    }

    function D(e, t, i) {
        var n, s = ($t[t] || []).concat($t["*"]), r = 0, a = s.length;
        for (; r < a; r++)if (n = s[r].call(i, t, e))return n
    }

    function O(e, t, i) {
        var n, s, r, a, o, l, c, d, u = this, f = {}, _ = e.style, h = e.nodeType && ke(e), p = se._data(e, "fxshow");
        if (!i.queue) {
            o = se._queueHooks(e, "fx");
            if (null == o.unqueued) {
                o.unqueued = 0;
                l = o.empty.fire;
                o.empty.fire = function () {
                    if (!o.unqueued)l()
                }
            }
            o.unqueued++;
            u.always(function () {
                u.always(function () {
                    o.unqueued--;
                    if (!se.queue(e, "fx").length)o.empty.fire()
                })
            })
        }
        if (1 === e.nodeType && ("height" in t || "width" in t)) {
            i.overflow = [_.overflow, _.overflowX, _.overflowY];
            c = se.css(e, "display");
            d = "none" === c ? se._data(e, "olddisplay") || I(e.nodeName) : c;
            if ("inline" === d && "none" === se.css(e, "float"))if (!ie.inlineBlockNeedsLayout || "inline" === I(e.nodeName))_.display = "inline-block"; else _.zoom = 1
        }
        if (i.overflow) {
            _.overflow = "hidden";
            if (!ie.shrinkWrapBlocks())u.always(function () {
                _.overflow = i.overflow[0];
                _.overflowX = i.overflow[1];
                _.overflowY = i.overflow[2]
            })
        }
        for (n in t) {
            s = t[n];
            if (pt.exec(s)) {
                delete t[n];
                r = r || "toggle" === s;
                if (s === (h ? "hide" : "show"))if ("show" === s && p && void 0 !== p[n])h = !0; else continue;
                f[n] = p && p[n] || se.style(e, n)
            } else c = void 0
        }
        if (!se.isEmptyObject(f)) {
            if (p) {
                if ("hidden" in p)h = p.hidden
            } else p = se._data(e, "fxshow", {});
            if (r)p.hidden = !h;
            if (h)se(e).show(); else u.done(function () {
                se(e).hide()
            });
            u.done(function () {
                var t;
                se._removeData(e, "fxshow");
                for (t in f)se.style(e, t, f[t])
            });
            for (n in f) {
                a = D(h ? p[n] : 0, n, u);
                if (!(n in p)) {
                    p[n] = a.start;
                    if (h) {
                        a.end = a.start;
                        a.start = "width" === n || "height" === n ? 1 : 0
                    }
                }
            }
        } else if ("inline" === ("none" === c ? I(e.nodeName) : c))_.display = c
    }

    function j(e, t) {
        var i, n, s, r, a;
        for (i in e) {
            n = se.camelCase(i);
            s = t[n];
            r = e[i];
            if (se.isArray(r)) {
                s = r[1];
                r = e[i] = r[0]
            }
            if (i !== n) {
                e[n] = r;
                delete e[i]
            }
            a = se.cssHooks[n];
            if (a && "expand" in a) {
                r = a.expand(r);
                delete e[n];
                for (i in r)if (!(i in e)) {
                    e[i] = r[i];
                    t[i] = s
                }
            } else t[n] = s
        }
    }

    function R(e, t, i) {
        var n, s, r = 0, a = gt.length, o = se.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s)return !1;
            var t = _t || A(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, r = 1 - n, a = 0, l = c.tweens.length;
            for (; a < l; a++)c.tweens[a].run(r);
            o.notifyWith(e, [c, r, i]);
            if (r < 1 && l)return i; else {
                o.resolveWith(e, [c]);
                return !1
            }
        }, c = o.promise({
            elem: e,
            props: se.extend({}, t),
            opts: se.extend(!0, {specialEasing: {}}, i),
            originalProperties: t,
            originalOptions: i,
            startTime: _t || A(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = se.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                c.tweens.push(n);
                return n
            },
            stop: function (t) {
                var i = 0, n = t ? c.tweens.length : 0;
                if (s)return this;
                s = !0;
                for (; i < n; i++)c.tweens[i].run(1);
                if (t)o.resolveWith(e, [c, t]); else o.rejectWith(e, [c, t]);
                return this
            }
        }), d = c.props;
        j(d, c.opts.specialEasing);
        for (; r < a; r++) {
            n = gt[r].call(c, e, d, c.opts);
            if (n)return n
        }
        se.map(d, D, c);
        if (se.isFunction(c.opts.start))c.opts.start.call(e, c);
        se.fx.timer(se.extend(l, {elem: e, anim: c, queue: c.opts.queue}));
        return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(e) {
        return function (t, i) {
            if ("string" != typeof t) {
                i = t;
                t = "*"
            }
            var n, s = 0, r = t.toLowerCase().match($e) || [];
            if (se.isFunction(i))for (; n = r[s++];)if ("+" === n.charAt(0)) {
                n = n.slice(1) || "*";
                (e[n] = e[n] || []).unshift(i)
            } else(e[n] = e[n] || []).push(i)
        }
    }

    function F(e, t, i, n) {
        function s(o) {
            var l;
            r[o] = !0;
            se.each(e[o] || [], function (e, o) {
                var c = o(t, i, n);
                if ("string" == typeof c && !a && !r[c]) {
                    t.dataTypes.unshift(c);
                    s(c);
                    return !1
                } else if (a)return !(l = c)
            });
            return l
        }

        var r = {}, a = e === qt;
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function H(e, t) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in t)if (void 0 !== t[n])(s[n] ? e : i || (i = {}))[n] = t[n];
        if (i)se.extend(!0, e, i);
        return e
    }

    function z(e, t, i) {
        var n, s, r, a, o = e.contents, l = e.dataTypes;
        for (; "*" === l[0];) {
            l.shift();
            if (void 0 === s)s = e.mimeType || t.getResponseHeader("Content-Type")
        }
        if (s)for (a in o)if (o[a] && o[a].test(s)) {
            l.unshift(a);
            break
        }
        if (l[0] in i)r = l[0]; else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                if (!n)n = a
            }
            r = r || n
        }
        if (r) {
            if (r !== l[0])l.unshift(r);
            return i[r]
        }
    }

    function q(e, t, i, n) {
        var s, r, a, o, l, c = {}, d = e.dataTypes.slice();
        if (d[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
        r = d.shift();
        for (; r;) {
            if (e.responseFields[r])i[e.responseFields[r]] = t;
            if (!l && n && e.dataFilter)t = e.dataFilter(t, e.dataType);
            l = r;
            r = d.shift();
            if (r)if ("*" === r)r = l; else if ("*" !== l && l !== r) {
                a = c[l + " " + r] || c["* " + r];
                if (!a)for (s in c) {
                    o = s.split(" ");
                    if (o[1] === r) {
                        a = c[l + " " + o[0]] || c["* " + o[0]];
                        if (a) {
                            if (a === !0)a = c[s]; else if (c[s] !== !0) {
                                r = o[0];
                                d.unshift(o[1])
                            }
                            break
                        }
                    }
                }
                if (a !== !0)if (a && e["throws"])t = a(t); else try {
                    t = a(t)
                } catch (u) {
                    return {state: "parsererror", error: a ? u : "No conversion from " + l + " to " + r}
                }
            }
        }
        return {state: "success", data: t}
    }

    function U(e, t, i, n) {
        var s;
        if (se.isArray(t))se.each(t, function (t, s) {
            if (i || Gt.test(e))n(e, s); else U(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
        }); else if (!i && "object" === se.type(t))for (s in t)U(e + "[" + s + "]", t[s], i, n); else n(e, t)
    }

    function W() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function G(e) {
        return se.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var Y = [];
    var X = Y.slice;
    var J = Y.concat;
    var K = Y.push;
    var Q = Y.indexOf;
    var Z = {};
    var ee = Z.toString;
    var te = Z.hasOwnProperty;
    var ie = {};
    var ne = "1.11.1", se = function (e, t) {
        return new se.fn.init(e, t)
    }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, oe = /-([\da-z])/gi, le = function (e, t) {
        return t.toUpperCase()
    };
    se.fn = se.prototype = {
        jquery: ne, constructor: se, selector: "", length: 0, toArray: function () {
            return X.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        }, pushStack: function (e) {
            var t = se.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        }, each: function (e, t) {
            return se.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(se.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, slice: function () {
            return this.pushStack(X.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: K, sort: Y.sort, splice: Y.splice
    };
    se.extend = se.fn.extend = function () {
        var e, t, i, n, s, r, a = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
        if ("boolean" == typeof a) {
            c = a;
            a = arguments[o] || {};
            o++
        }
        if ("object" != typeof a && !se.isFunction(a))a = {};
        if (o === l) {
            a = this;
            o--
        }
        for (; o < l; o++)if (null != (s = arguments[o]))for (n in s) {
            e = a[n];
            i = s[n];
            if (a !== i) {
                if (c && i && (se.isPlainObject(i) || (t = se.isArray(i)))) {
                    if (t) {
                        t = !1;
                        r = e && se.isArray(e) ? e : []
                    } else r = e && se.isPlainObject(e) ? e : {};
                    a[n] = se.extend(c, r, i)
                } else if (void 0 !== i)a[n] = i
            } else;
        }
        return a
    };
    se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === se.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === se.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !se.isArray(e) && e - parseFloat(e) >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== se.type(e) || e.nodeType || se.isWindow(e))return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)for (t in e)return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        }, type: function (e) {
            if (null == e)return e + ""; else return "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            if (t && se.trim(t))(e.execScript || function (t) {
                e["eval"].call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(ae, "ms-").replace(oe, le)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var s, r = 0, a = e.length, o = i(e);
            if (n)if (o)for (; r < a; r++) {
                s = t.apply(e[r], n);
                if (s === !1)break
            } else for (r in e) {
                s = t.apply(e[r], n);
                if (s === !1)break
            } else if (o)for (; r < a; r++) {
                s = t.call(e[r], r, e[r]);
                if (s === !1)break
            } else for (r in e) {
                s = t.call(e[r], r, e[r]);
                if (s === !1)break
            }
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(re, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            if (null != e)if (i(Object(e)))se.merge(n, "string" == typeof e ? [e] : e); else K.call(n, e);
            return n
        }, inArray: function (e, t, i) {
            var n;
            if (t) {
                if (Q)return Q.call(t, e, i);
                n = t.length;
                i = i ? i < 0 ? Math.max(0, n + i) : i : 0;
                for (; i < n; i++)if (i in t && t[i] === e)return i
            }
            return -1
        }, merge: function (e, t) {
            var i = +t.length, n = 0, s = e.length;
            for (; n < i;)e[s++] = t[n++];
            if (i !== i)for (; void 0 !== t[n];)e[s++] = t[n++];
            e.length = s;
            return e
        }, grep: function (e, t, i) {
            var n, s = [], r = 0, a = e.length, o = !i;
            for (; r < a; r++) {
                n = !t(e[r], r);
                if (n !== o)s.push(e[r])
            }
            return s
        }, map: function (e, t, n) {
            var s, r = 0, a = e.length, o = i(e), l = [];
            if (o)for (; r < a; r++) {
                s = t(e[r], r, n);
                if (null != s)l.push(s)
            } else for (r in e) {
                s = t(e[r], r, n);
                if (null != s)l.push(s)
            }
            return J.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var i, n, s;
            if ("string" == typeof t) {
                s = e[t];
                t = e;
                e = s
            }
            if (se.isFunction(e)) {
                i = X.call(arguments, 2);
                n = function () {
                    return e.apply(t || this, i.concat(X.call(arguments)))
                };
                n.guid = e.guid = e.guid || se.guid++;
                return n
            }
        }, now: function () {
            return +new Date
        }, support: ie
    });
    se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, i, n) {
            var s, r, a, o, l, c, u, _, h, p;
            if ((t ? t.ownerDocument || t : F) !== M)L(t);
            t = t || M;
            i = i || [];
            if (!e || "string" != typeof e)return i;
            if (1 !== (o = t.nodeType) && 9 !== o)return [];
            if (P && !n) {
                if (s = ge.exec(e))if (a = s[1]) {
                    if (9 === o) {
                        r = t.getElementById(a);
                        if (r && r.parentNode) {
                            if (r.id === a) {
                                i.push(r);
                                return i
                            }
                        } else return i
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && R(t, r) && r.id === a) {
                        i.push(r);
                        return i
                    }
                } else if (s[2]) {
                    Z.apply(i, t.getElementsByTagName(e));
                    return i
                } else if ((a = s[3]) && b.getElementsByClassName && t.getElementsByClassName) {
                    Z.apply(i, t.getElementsByClassName(a));
                    return i
                }
                if (b.qsa && (!D || !D.test(e))) {
                    _ = u = B;
                    h = t;
                    p = 9 === o && e;
                    if (1 === o && "object" !== t.nodeName.toLowerCase()) {
                        c = I(e);
                        if (u = t.getAttribute("id"))_ = u.replace(ye, "\\$&"); else t.setAttribute("id", _);
                        _ = "[id='" + _ + "'] ";
                        l = c.length;
                        for (; l--;)c[l] = _ + f(c[l]);
                        h = $e.test(e) && d(t.parentNode) || t;
                        p = c.join(",")
                    }
                    if (p)try {
                        Z.apply(i, h.querySelectorAll(p));
                        return i
                    } catch (m) {
                    } finally {
                        if (!u)t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                if (t.push(i + " ") > x.cacheLength)delete e[t.shift()];
                return e[i + " "] = n
            }

            var t = [];
            return e
        }

        function n(e) {
            e[B] = !0;
            return e
        }

        function s(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                if (t.parentNode)t.parentNode.removeChild(t);
                t = null
            }
        }

        function r(e, t) {
            var i = e.split("|"), n = e.length;
            for (; n--;)x.attrHandle[i[n]] = t
        }

        function a(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === t)return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function (t) {
                t = +t;
                return n(function (i, n) {
                    var s, r = e([], i.length, t), a = r.length;
                    for (; a--;)if (i[s = r[a]])i[s] = !(n[s] = i[s])
                })
            })
        }

        function d(e) {
            return e && typeof e.getElementsByTagName !== G && e
        }

        function u() {
        }

        function f(e) {
            var t = 0, i = e.length, n = "";
            for (; t < i; t++)n += e[t].value;
            return n
        }

        function _(e, t, i) {
            var n = t.dir, s = i && "parentNode" === n, r = z++;
            return t.first ? function (t, i, r) {
                for (; t = t[n];)if (1 === t.nodeType || s)return e(t, i, r)
            } : function (t, i, a) {
                var o, l, c = [H, r];
                if (a) {
                    for (; t = t[n];)if (1 === t.nodeType || s)if (e(t, i, a))return !0
                } else for (; t = t[n];)if (1 === t.nodeType || s) {
                    l = t[B] || (t[B] = {});
                    if ((o = l[n]) && o[0] === H && o[1] === r)return c[2] = o[2]; else {
                        l[n] = c;
                        if (c[2] = e(t, i, a))return !0
                    }
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, i, n) {
                var s = e.length;
                for (; s--;)if (!e[s](t, i, n))return !1;
                return !0
            } : e[0]
        }

        function p(e, i, n) {
            var s = 0, r = i.length;
            for (; s < r; s++)t(e, i[s], n);
            return n
        }

        function m(e, t, i, n, s) {
            var r, a = [], o = 0, l = e.length, c = null != t;
            for (; o < l; o++)if (r = e[o])if (!i || i(r, n, s)) {
                a.push(r);
                if (c)t.push(o)
            }
            return a
        }

        function v(e, t, i, s, r, a) {
            if (s && !s[B])s = v(s);
            if (r && !r[B])r = v(r, a);
            return n(function (n, a, o, l) {
                var c, d, u, f = [], _ = [], h = a.length, v = n || p(t || "*", o.nodeType ? [o] : o, []), g = e && (n || !t) ? m(v, f, e, o, l) : v, $ = i ? r || (n ? e : h || s) ? [] : a : g;
                if (i)i(g, $, o, l);
                if (s) {
                    c = m($, _);
                    s(c, [], o, l);
                    d = c.length;
                    for (; d--;)if (u = c[d])$[_[d]] = !(g[_[d]] = u)
                }
                if (n) {
                    if (r || e) {
                        if (r) {
                            c = [];
                            d = $.length;
                            for (; d--;)if (u = $[d])c.push(g[d] = u);
                            r(null, $ = [], c, l)
                        }
                        d = $.length;
                        for (; d--;)if ((u = $[d]) && (c = r ? te.call(n, u) : f[d]) > -1)n[c] = !(a[c] = u)
                    }
                } else {
                    $ = m($ === a ? $.splice(h, $.length) : $);
                    if (r)r(null, a, $, l); else Z.apply(a, $)
                }
            })
        }

        function g(e) {
            var t, i, n, s = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], o = r ? 1 : 0, l = _(function (e) {
                return e === t
            }, a, !0), c = _(function (e) {
                return te.call(t, e) > -1
            }, a, !0), d = [function (e, i, n) {
                return !r && (n || i !== k) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
            }];
            for (; o < s; o++)if (i = x.relative[e[o].type])d = [_(h(d), i)]; else {
                i = x.filter[e[o].type].apply(null, e[o].matches);
                if (i[B]) {
                    n = ++o;
                    for (; n < s && !x.relative[e[n].type]; n++);
                    return v(o > 1 && h(d), o > 1 && f(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(le, "$1"), i, o < n && g(e.slice(o, n)), n < s && g(e = e.slice(n)), n < s && f(e))
                }
                d.push(i)
            }
            return h(d)
        }

        function $(e, i) {
            var s = i.length > 0, r = e.length > 0, a = function (n, a, o, l, c) {
                var d, u, f, _ = 0, h = "0", p = n && [], v = [], g = k, $ = n || r && x.find["TAG"]("*", c), y = H += null == g ? 1 : Math.random() || .1, b = $.length;
                if (c)k = a !== M && a;
                for (; h !== b && null != (d = $[h]); h++) {
                    if (r && d) {
                        u = 0;
                        for (; f = e[u++];)if (f(d, a, o)) {
                            l.push(d);
                            break
                        }
                        if (c)H = y
                    }
                    if (s) {
                        if (d = !f && d)_--;
                        if (n)p.push(d)
                    }
                }
                _ += h;
                if (s && h !== _) {
                    u = 0;
                    for (; f = i[u++];)f(p, v, a, o);
                    if (n) {
                        if (_ > 0)for (; h--;)if (!p[h] && !v[h])v[h] = K.call(l);
                        v = m(v)
                    }
                    Z.apply(l, v);
                    if (c && !n && v.length > 0 && _ + i.length > 1)t.uniqueSort(l)
                }
                if (c) {
                    H = y;
                    k = g
                }
                return p
            };
            return s ? n(a) : a
        }

        var y, b, x, w, T, I, C, S, k, E, N, L, M, A, P, D, O, j, R, B = "sizzle" + -new Date, F = e.document, H = 0, z = 0, q = i(), U = i(), W = i(), V = function (e, t) {
            if (e === t)N = !0;
            return 0
        }, G = "undefined", Y = 1 << 31, X = {}.hasOwnProperty, J = [], K = J.pop, Q = J.push, Z = J.push, ee = J.slice, te = J.indexOf || function (e) {
                var t = 0, i = this.length;
                for (; t < i; t++)if (this[t] === e)return t;
                return -1
            }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = se.replace("w", "w#"), ae = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), _e = new RegExp("^" + re + "$"), he = {
            ID: new RegExp("^#(" + se + ")"),
            CLASS: new RegExp("^\\.(" + se + ")"),
            TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ie + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $e = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function (e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Z.apply(J = ee.call(F.childNodes), F.childNodes);
            J[F.childNodes.length].nodeType
        } catch (we) {
            Z = {
                apply: J.length ? function (e, t) {
                    Q.apply(e, ee.call(t))
                } : function (e, t) {
                    var i = e.length, n = 0;
                    for (; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        b = t.support = {};
        T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        L = t.setDocument = function (e) {
            var t, i = e ? e.ownerDocument || e : F, n = i.defaultView;
            if (i === M || 9 !== i.nodeType || !i.documentElement)return M;
            M = i;
            A = i.documentElement;
            P = !T(i);
            if (n && n !== n.top)if (n.addEventListener)n.addEventListener("unload", function () {
                L()
            }, !1); else if (n.attachEvent)n.attachEvent("onunload", function () {
                L()
            });
            b.attributes = s(function (e) {
                e.className = "i";
                return !e.getAttribute("className")
            });
            b.getElementsByTagName = s(function (e) {
                e.appendChild(i.createComment(""));
                return !e.getElementsByTagName("*").length
            });
            b.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function (e) {
                    e.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    e.firstChild.className = "i";
                    return 2 === e.getElementsByClassName("i").length
                });
            b.getById = s(function (e) {
                A.appendChild(e).id = B;
                return !i.getElementsByName || !i.getElementsByName(B).length
            });
            if (b.getById) {
                x.find["ID"] = function (e, t) {
                    if (typeof t.getElementById !== G && P) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                };
                x.filter["ID"] = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete x.find["ID"];
                x.filter["ID"] = function (e) {
                    var t = e.replace(be, xe);
                    return function (e) {
                        var i = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }
            }
            x.find["TAG"] = b.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== G)return t.getElementsByTagName(e)
            } : function (e, t) {
                var i, n = [], s = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[s++];)if (1 === i.nodeType)n.push(i);
                    return n
                }
                return r
            };
            x.find["CLASS"] = b.getElementsByClassName && function (e, t) {
                    if (typeof t.getElementsByClassName !== G && P)return t.getElementsByClassName(e)
                };
            O = [];
            D = [];
            if (b.qsa = ve.test(i.querySelectorAll)) {
                s(function (e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowclip^='']").length)D.push("[*^$]=" + ne + "*(?:''|\"\")");
                    if (!e.querySelectorAll("[selected]").length)D.push("\\[" + ne + "*(?:value|" + ie + ")");
                    if (!e.querySelectorAll(":checked").length)D.push(":checked")
                });
                s(function (e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length)D.push("name" + ne + "*[*^$|!~]?=");
                    if (!e.querySelectorAll(":enabled").length)D.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    D.push(",.*:")
                })
            }
            if (b.matchesSelector = ve.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector))s(function (e) {
                b.disconnectedMatch = j.call(e, "div");
                j.call(e, "[s!='']:x");
                O.push("!=", oe)
            });
            D = D.length && new RegExp(D.join("|"));
            O = O.length && new RegExp(O.join("|"));
            t = ve.test(A.compareDocumentPosition);
            R = t || ve.test(A.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            };
            V = t ? function (e, t) {
                if (e === t) {
                    N = !0;
                    return 0
                }
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (n)return n;
                n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n) {
                    if (e === i || e.ownerDocument === F && R(F, e))return -1;
                    if (t === i || t.ownerDocument === F && R(F, t))return 1; else return E ? te.call(E, e) - te.call(E, t) : 0
                }
                return 4 & n ? -1 : 1
            } : function (e, t) {
                if (e === t) {
                    N = !0;
                    return 0
                }
                var n, s = 0, r = e.parentNode, o = t.parentNode, l = [e], c = [t];
                if (!r || !o)return e === i ? -1 : t === i ? 1 : r ? -1 : o ? 1 : E ? te.call(E, e) - te.call(E, t) : 0; else if (r === o)return a(e, t);
                n = e;
                for (; n = n.parentNode;)l.unshift(n);
                n = t;
                for (; n = n.parentNode;)c.unshift(n);
                for (; l[s] === c[s];)s++;
                return s ? a(l[s], c[s]) : l[s] === F ? -1 : c[s] === F ? 1 : 0
            };
            return i
        };
        t.matches = function (e, i) {
            return t(e, null, null, i)
        };
        t.matchesSelector = function (e, i) {
            if ((e.ownerDocument || e) !== M)L(e);
            i = i.replace(ue, "='$1']");
            if (b.matchesSelector && P && (!O || !O.test(i)) && (!D || !D.test(i)))try {
                var n = j.call(e, i);
                if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (s) {
            }
            return t(i, M, null, [e]).length > 0
        };
        t.contains = function (e, t) {
            if ((e.ownerDocument || e) !== M)L(e);
            return R(e, t)
        };
        t.attr = function (e, t) {
            if ((e.ownerDocument || e) !== M)L(e);
            var i = x.attrHandle[t.toLowerCase()], n = i && X.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !P) : void 0;
            return void 0 !== n ? n : b.attributes || !P ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        };
        t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        t.uniqueSort = function (e) {
            var t, i = [], n = 0, s = 0;
            N = !b.detectDuplicates;
            E = !b.sortStable && e.slice(0);
            e.sort(V);
            if (N) {
                for (; t = e[s++];)if (t === e[s])n = i.push(s);
                for (; n--;)e.splice(i[n], 1)
            }
            E = null;
            return e
        };
        w = t.getText = function (e) {
            var t, i = "", n = 0, s = e.nodeType;
            if (!s)for (; t = e[n++];)i += w(t); else if (1 === s || 9 === s || 11 === s)if ("string" == typeof e.textContent)return e.textContent; else for (e = e.firstChild; e; e = e.nextSibling)i += w(e); else if (3 === s || 4 === s)return e.nodeValue;
            return i
        };
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    e[1] = e[1].replace(be, xe);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe);
                    if ("~=" === e[2])e[3] = " " + e[3] + " ";
                    return e.slice(0, 4)
                }, CHILD: function (e) {
                    e[1] = e[1].toLowerCase();
                    if ("nth" === e[1].slice(0, 3)) {
                        if (!e[3])t.error(e[0]);
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]));
                        e[5] = +(e[7] + e[8] || "odd" === e[3])
                    } else if (e[3])t.error(e[0]);
                    return e
                }, PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    if (he["CHILD"].test(e[0]))return null;
                    if (e[3])e[2] = e[4] || e[5] || ""; else if (i && fe.test(i) && (t = I(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = i.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, i, n) {
                    return function (s) {
                        var r = t.attr(s, e);
                        if (null == r)return "!=" === i;
                        if (!i)return !0;
                        r += "";
                        return "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1
                    }
                }, CHILD: function (e, t, i, n, s) {
                    var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
                    return 1 === n && 0 === s ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var c, d, u, f, _, h, p = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = o && t.nodeName.toLowerCase(), g = !l && !o;
                        if (m) {
                            if (r) {
                                for (; p;) {
                                    u = t;
                                    for (; u = u[p];)if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return !1;
                                    h = p = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            h = [a ? m.firstChild : m.lastChild];
                            if (a && g) {
                                d = m[B] || (m[B] = {});
                                c = d[e] || [];
                                _ = c[0] === H && c[1];
                                f = c[0] === H && c[2];
                                u = _ && m.childNodes[_];
                                for (; u = ++_ && u && u[p] || (f = _ = 0) || h.pop();)if (1 === u.nodeType && ++f && u === t) {
                                    d[e] = [H, _, f];
                                    break
                                }
                            } else if (g && (c = (t[B] || (t[B] = {}))[e]) && c[0] === H)f = c[1]; else for (; u = ++_ && u && u[p] || (f = _ = 0) || h.pop();)if ((o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) && ++f) {
                                if (g)(u[B] || (u[B] = {}))[e] = [H, f];
                                if (u === t)break
                            }
                            f -= s;
                            return f === n || f % n === 0 && f / n >= 0
                        }
                    }
                }, PSEUDO: function (e, i) {
                    var s, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    if (r[B])return r(i);
                    if (r.length > 1) {
                        s = [e, e, "", i];
                        return x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                            var n, s = r(e, i), a = s.length;
                            for (; a--;) {
                                n = te.call(e, s[a]);
                                e[n] = !(t[n] = s[a])
                            }
                        }) : function (e) {
                            return r(e, 0, s)
                        }
                    }
                    return r
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [], i = [], s = C(e.replace(le, "$1"));
                    return s[B] ? n(function (e, t, i, n) {
                        var r, a = s(e, null, n, []), o = e.length;
                        for (; o--;)if (r = a[o])e[o] = !(t[o] = r)
                    }) : function (e, n, r) {
                        t[0] = e;
                        s(t, null, r, i);
                        return !i.pop()
                    }
                }), has: n(function (e) {
                    return function (i) {
                        return t(e, i).length > 0
                    }
                }), contains: n(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }), lang: n(function (e) {
                    if (!_e.test(e || ""))t.error("unsupported lang: " + e);
                    e = e.replace(be, xe).toLowerCase();
                    return function (t) {
                        var i;
                        do if (i = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                            i = i.toLowerCase();
                            return i === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (e) {
                    return e === A
                }, focus: function (e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    if (e.parentNode)e.parentNode.selectedIndex;
                    return e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos["empty"](e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: c(function (e, t) {
                    var i = 0;
                    for (; i < t; i += 2)e.push(i);
                    return e
                }), odd: c(function (e, t) {
                    var i = 1;
                    for (; i < t; i += 2)e.push(i);
                    return e
                }), lt: c(function (e, t, i) {
                    var n = i < 0 ? i + t : i;
                    for (; --n >= 0;)e.push(n);
                    return e
                }), gt: c(function (e, t, i) {
                    var n = i < 0 ? i + t : i;
                    for (; ++n < t;)e.push(n);
                    return e
                })
            }
        };
        x.pseudos["nth"] = x.pseudos["eq"];
        for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[y] = o(y);
        for (y in{submit: !0, reset: !0})x.pseudos[y] = l(y);
        u.prototype = x.filters = x.pseudos;
        x.setFilters = new u;
        I = t.tokenize = function (e, i) {
            var n, s, r, a, o, l, c, d = U[e + " "];
            if (d)return i ? 0 : d.slice(0);
            o = e;
            l = [];
            c = x.preFilter;
            for (; o;) {
                if (!n || (s = ce.exec(o))) {
                    if (s)o = o.slice(s[0].length) || o;
                    l.push(r = [])
                }
                n = !1;
                if (s = de.exec(o)) {
                    n = s.shift();
                    r.push({value: n, type: s[0].replace(le, " ")});
                    o = o.slice(n.length)
                }
                for (a in x.filter)if ((s = he[a].exec(o)) && (!c[a] || (s = c[a](s)))) {
                    n = s.shift();
                    r.push({value: n, type: a, matches: s});
                    o = o.slice(n.length)
                }
                if (!n)break
            }
            return i ? o.length : o ? t.error(e) : U(e, l).slice(0)
        };
        C = t.compile = function (e, t) {
            var i, n = [], s = [], r = W[e + " "];
            if (!r) {
                if (!t)t = I(e);
                i = t.length;
                for (; i--;) {
                    r = g(t[i]);
                    if (r[B])n.push(r); else s.push(r)
                }
                r = W(e, $(s, n));
                r.selector = e
            }
            return r
        };
        S = t.select = function (e, t, i, n) {
            var s, r, a, o, l, c = "function" == typeof e && e, u = !n && I(e = c.selector || e);
            i = i || [];
            if (1 === u.length) {
                r = u[0] = u[0].slice(0);
                if (r.length > 2 && "ID" === (a = r[0]).type && b.getById && 9 === t.nodeType && P && x.relative[r[1].type]) {
                    t = (x.find["ID"](a.matches[0].replace(be, xe), t) || [])[0];
                    if (!t)return i; else if (c)t = t.parentNode;
                    e = e.slice(r.shift().value.length)
                }
                s = he["needsContext"].test(e) ? 0 : r.length;
                for (; s--;) {
                    a = r[s];
                    if (x.relative[o = a.type])break;
                    if (l = x.find[o])if (n = l(a.matches[0].replace(be, xe), $e.test(r[0].type) && d(t.parentNode) || t)) {
                        r.splice(s, 1);
                        e = n.length && f(r);
                        if (!e) {
                            Z.apply(i, n);
                            return i
                        }
                        break
                    }
                }
            }
            (c || C(e, u))(n, t, !P, i, $e.test(e) && d(t.parentNode) || t);
            return i
        };
        b.sortStable = B.split("").sort(V).join("") === B;
        b.detectDuplicates = !!N;
        L();
        b.sortDetached = s(function (e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        });
        if (!s(function (e) {
                e.innerHTML = "<a href='#'></a>";
                return "#" === e.firstChild.getAttribute("href")
            }))r("type|href|height|width", function (e, t, i) {
            if (!i)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        });
        if (!b.attributes || !s(function (e) {
                e.innerHTML = "<input/>";
                e.firstChild.setAttribute("value", "");
                return "" === e.firstChild.getAttribute("value")
            }))r("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())return e.defaultValue
        });
        if (!s(function (e) {
                return null == e.getAttribute("disabled")
            }))r(ie, function (e, t, i) {
            var n;
            if (!i)return e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        });
        return t
    }(e);
    se.find = ce;
    se.expr = ce.selectors;
    se.expr[":"] = se.expr.pseudos;
    se.unique = ce.uniqueSort;
    se.text = ce.getText;
    se.isXMLDoc = ce.isXML;
    se.contains = ce.contains;
    var de = se.expr.match.needsContext;
    var ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var fe = /^.[^:#\[\.,]*$/;
    se.filter = function (e, t, i) {
        var n = t[0];
        if (i)e = ":not(" + e + ")";
        return 1 === t.length && 1 === n.nodeType ? se.find.matchesSelector(n, e) ? [n] : [] : se.find.matches(e, se.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    };
    se.fn.extend({
        find: function (e) {
            var t, i = [], n = this, s = n.length;
            if ("string" != typeof e)return this.pushStack(se(e).filter(function () {
                for (t = 0; t < s; t++)if (se.contains(n[t], this))return !0
            }));
            for (t = 0; t < s; t++)se.find(e, n[t], i);
            i = this.pushStack(s > 1 ? se.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + e : e;
            return i
        }, filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        }, is: function (e) {
            return !!n(this, "string" == typeof e && de.test(e) ? se(e) : e || [], !1).length
        }
    });
    var _e, he = e.document, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, me = se.fn.init = function (e, t) {
        var i, n;
        if (!e)return this;
        if ("string" == typeof e) {
            if ("<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3)i = [null, e, null]; else i = pe.exec(e);
            if (i && (i[1] || !t))if (i[1]) {
                t = t instanceof se ? t[0] : t;
                se.merge(this, se.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : he, !0));
                if (ue.test(i[1]) && se.isPlainObject(t))for (i in t)if (se.isFunction(this[i]))this[i](t[i]); else this.attr(i, t[i]);
                return this
            } else {
                n = he.getElementById(i[2]);
                if (n && n.parentNode) {
                    if (n.id !== i[2])return _e.find(e);
                    this.length = 1;
                    this[0] = n
                }
                this.context = he;
                this.selector = e;
                return this
            } else if (!t || t.jquery)return (t || _e).find(e); else return this.constructor(t).find(e)
        } else if (e.nodeType) {
            this.context = this[0] = e;
            this.length = 1;
            return this
        } else if (se.isFunction(e))return "undefined" != typeof _e.ready ? _e.ready(e) : e(se);
        if (void 0 !== e.selector) {
            this.selector = e.selector;
            this.context = e.context
        }
        return se.makeArray(e, this)
    };
    me.prototype = se.fn;
    _e = se(he);
    var ve = /^(?:parents|prev(?:Until|All))/, ge = {children: !0, contents: !0, next: !0, prev: !0};
    se.extend({
        dir: function (e, t, i) {
            var n = [], s = e[t];
            for (; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) {
                if (1 === s.nodeType)n.push(s);
                s = s[t]
            }
            return n
        }, sibling: function (e, t) {
            var i = [];
            for (; e; e = e.nextSibling)if (1 === e.nodeType && e !== t)i.push(e);
            return i
        }
    });
    se.fn.extend({
        has: function (e) {
            var t, i = se(e, this), n = i.length;
            return this.filter(function () {
                for (t = 0; t < n; t++)if (se.contains(this, i[t]))return !0
            })
        }, closest: function (e, t) {
            var i, n = 0, s = this.length, r = [], a = de.test(e) || "string" != typeof e ? se(e, t || this.context) : 0;
            for (; n < s; n++)for (i = this[n]; i && i !== t; i = i.parentNode)if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, e))) {
                r.push(i);
                break
            }
            return this.pushStack(r.length > 1 ? se.unique(r) : r)
        }, index: function (e) {
            if (!e)return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            if ("string" == typeof e)return se.inArray(this[0], se(e)); else return se.inArray(e.jquery ? e[0] : e, this)
        }, add: function (e, t) {
            return this.pushStack(se.unique(se.merge(this.get(), se(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    se.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return se.dir(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return se.dir(e, "parentNode", i)
        }, next: function (e) {
            return s(e, "nextSibling")
        }, prev: function (e) {
            return s(e, "previousSibling")
        }, nextAll: function (e) {
            return se.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return se.dir(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return se.dir(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return se.dir(e, "previousSibling", i)
        }, siblings: function (e) {
            return se.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return se.sibling(e.firstChild)
        }, contents: function (e) {
            return se.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : se.merge([], e.childNodes)
        }
    }, function (e, t) {
        se.fn[e] = function (i, n) {
            var s = se.map(this, t, i);
            if ("Until" !== e.slice(-5))n = i;
            if (n && "string" == typeof n)s = se.filter(n, s);
            if (this.length > 1) {
                if (!ge[e])s = se.unique(s);
                if (ve.test(e))s = s.reverse()
            }
            return this.pushStack(s)
        }
    });
    var $e = /\S+/g;
    var ye = {};
    se.Callbacks = function (e) {
        e = "string" == typeof e ? ye[e] || r(e) : se.extend({}, e);
        var t, i, n, s, a, o, l = [], c = !e.once && [], d = function (r) {
            i = e.memory && r;
            n = !0;
            a = o || 0;
            o = 0;
            s = l.length;
            t = !0;
            for (; l && a < s; a++)if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            t = !1;
            if (l)if (c) {
                if (c.length)d(c.shift())
            } else if (i)l = []; else u.disable()
        }, u = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function r(t) {
                        se.each(t, function (t, i) {
                            var n = se.type(i);
                            if ("function" === n) {
                                if (!e.unique || !u.has(i))l.push(i)
                            } else if (i && i.length && "string" !== n)r(i)
                        })
                    }(arguments);
                    if (t)s = l.length; else if (i) {
                        o = n;
                        d(i)
                    }
                }
                return this
            }, remove: function () {
                if (l)se.each(arguments, function (e, i) {
                    var n;
                    for (; (n = se.inArray(i, l, n)) > -1;) {
                        l.splice(n, 1);
                        if (t) {
                            if (n <= s)s--;
                            if (n <= a)a--
                        }
                    }
                });
                return this
            }, has: function (e) {
                return e ? se.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                l = [];
                s = 0;
                return this
            }, disable: function () {
                l = c = i = void 0;
                return this
            }, disabled: function () {
                return !l
            }, lock: function () {
                c = void 0;
                if (!i)u.disable();
                return this
            }, locked: function () {
                return !c
            }, fireWith: function (e, i) {
                if (l && (!n || c)) {
                    i = i || [];
                    i = [e, i.slice ? i.slice() : i];
                    if (t)c.push(i); else d(i)
                }
                return this
            }, fire: function () {
                u.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!n
            }
        };
        return u
    };
    se.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", se.Callbacks("once memory"), "resolved"], ["reject", "fail", se.Callbacks("once memory"), "rejected"], ["notify", "progress", se.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    s.done(arguments).fail(arguments);
                    return this
                }, then: function () {
                    var e = arguments;
                    return se.Deferred(function (i) {
                        se.each(t, function (t, r) {
                            var a = se.isFunction(e[t]) && e[t];
                            s[r[1]](function () {
                                var e = a && a.apply(this, arguments);
                                if (e && se.isFunction(e.promise))e.promise().done(i.resolve).fail(i.reject).progress(i.notify); else i[r[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                            })
                        });
                        e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? se.extend(e, n) : n
                }
            }, s = {};
            n.pipe = n.then;
            se.each(t, function (e, r) {
                var a = r[2], o = r[3];
                n[r[1]] = a.add;
                if (o)a.add(function () {
                    i = o
                }, t[1 ^ e][2].disable, t[2][2].lock);
                s[r[0]] = function () {
                    s[r[0] + "With"](this === s ? n : this, arguments);
                    return this
                };
                s[r[0] + "With"] = a.fireWith
            });
            n.promise(s);
            if (e)e.call(s, s);
            return s
        }, when: function (e) {
            var t = 0, i = X.call(arguments), n = i.length, s = 1 !== n || e && se.isFunction(e.promise) ? n : 0, r = 1 === s ? e : se.Deferred(), a = function (e, t, i) {
                return function (n) {
                    t[e] = this;
                    i[e] = arguments.length > 1 ? X.call(arguments) : n;
                    if (i === o)r.notifyWith(t, i); else if (!--s)r.resolveWith(t, i)
                }
            }, o, l, c;
            if (n > 1) {
                o = new Array(n);
                l = new Array(n);
                c = new Array(n);
                for (; t < n; t++)if (i[t] && se.isFunction(i[t].promise))i[t].promise().done(a(t, c, i)).fail(r.reject).progress(a(t, l, o)); else--s
            }
            if (!s)r.resolveWith(c, i);
            return r.promise()
        }
    });
    var be;
    se.fn.ready = function (e) {
        se.ready.promise().done(e);
        return this
    };
    se.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            if (e)se.readyWait++; else se.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--se.readyWait : !se.isReady) {
                if (!he.body)return setTimeout(se.ready);
                se.isReady = !0;
                if (!(e !== !0 && --se.readyWait > 0)) {
                    be.resolveWith(he, [se]);
                    if (se.fn.triggerHandler) {
                        se(he).triggerHandler("ready");
                        se(he).off("ready")
                    }
                }
            }
        }
    });
    se.ready.promise = function (t) {
        if (!be) {
            be = se.Deferred();
            if ("complete" === he.readyState)setTimeout(se.ready); else if (he.addEventListener) {
                he.addEventListener("DOMContentLoaded", o, !1);
                e.addEventListener("load", o, !1)
            } else {
                he.attachEvent("onreadystatechange", o);
                e.attachEvent("onload", o);
                var i = !1;
                try {
                    i = null == e.frameElement && he.documentElement
                } catch (n) {
                }
                if (i && i.doScroll)!function s() {
                    if (!se.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        a();
                        se.ready()
                    }
                }()
            }
        }
        return be.promise(t)
    };
    var xe = "undefined";
    var we;
    for (we in se(ie))break;
    ie.ownLast = "0" !== we;
    ie.inlineBlockNeedsLayout = !1;
    se(function () {
        var e, t, i, n;
        i = he.getElementsByTagName("body")[0];
        if (i && i.style) {
            t = he.createElement("div");
            n = he.createElement("div");
            n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            i.appendChild(n).appendChild(t);
            if (typeof t.style.zoom !== xe) {
                t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
                ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth;
                if (e)i.style.zoom = 1
            }
            i.removeChild(n)
        }
    });
    !function () {
        var e = he.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ie.deleteExpando = !1
            }
        }
        e = null
    }();
    se.acceptData = function (e) {
        var t = se.noData[(e.nodeName + " ").toLowerCase()], i = +e.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ie = /([A-Z])/g;
    se.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            e = e.nodeType ? se.cache[e[se.expando]] : e[se.expando];
            return !!e && !c(e)
        },
        data: function (e, t, i) {
            return d(e, t, i)
        },
        removeData: function (e, t) {
            return u(e, t)
        },
        _data: function (e, t, i) {
            return d(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return u(e, t, !0)
        }
    });
    se.fn.extend({
        data: function (e, t) {
            var i, n, s, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length) {
                    s = se.data(r);
                    if (1 === r.nodeType && !se._data(r, "parsedAttrs")) {
                        i = a.length;
                        for (; i--;)if (a[i]) {
                            n = a[i].name;
                            if (0 === n.indexOf("data-")) {
                                n = se.camelCase(n.slice(5));
                                l(r, n, s[n])
                            }
                        }
                        se._data(r, "parsedAttrs", !0)
                    }
                }
                return s
            }
            if ("object" == typeof e)return this.each(function () {
                se.data(this, e)
            }); else return arguments.length > 1 ? this.each(function () {
                se.data(this, e, t)
            }) : r ? l(r, e, se.data(r, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                se.removeData(this, e)
            })
        }
    });
    se.extend({
        queue: function (e, t, i) {
            var n;
            if (e) {
                t = (t || "fx") + "queue";
                n = se._data(e, t);
                if (i)if (!n || se.isArray(i))n = se._data(e, t, se.makeArray(i)); else n.push(i);
                return n || []
            }
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = se.queue(e, t), n = i.length, s = i.shift(), r = se._queueHooks(e, t), a = function () {
                se.dequeue(e, t)
            };
            if ("inprogress" === s) {
                s = i.shift();
                n--
            }
            if (s) {
                if ("fx" === t)i.unshift("inprogress");
                delete r.stop;
                s.call(e, a, r)
            }
            if (!n && r)r.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return se._data(e, i) || se._data(e, i, {
                    empty: se.Callbacks("once memory").add(function () {
                        se._removeData(e, t + "queue");
                        se._removeData(e, i)
                    })
                })
        }
    });
    se.fn.extend({
        queue: function (e, t) {
            var i = 2;
            if ("string" != typeof e) {
                t = e;
                e = "fx";
                i--
            }
            if (arguments.length < i)return se.queue(this[0], e); else return void 0 === t ? this : this.each(function () {
                var i = se.queue(this, e, t);
                se._queueHooks(this, e);
                if ("fx" === e && "inprogress" !== i[0])se.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                se.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, s = se.Deferred(), r = this, a = this.length, o = function () {
                if (!--n)s.resolveWith(r, [r])
            };
            if ("string" != typeof e) {
                t = e;
                e = void 0
            }
            e = e || "fx";
            for (; a--;) {
                i = se._data(r[a], e + "queueHooks");
                if (i && i.empty) {
                    n++;
                    i.empty.add(o)
                }
            }
            o();
            return s.promise(t)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var Se = ["Top", "Right", "Bottom", "Left"];
    var ke = function (e, t) {
        e = t || e;
        return "none" === se.css(e, "display") || !se.contains(e.ownerDocument, e)
    };
    var Ee = se.access = function (e, t, i, n, s, r, a) {
        var o = 0, l = e.length, c = null == i;
        if ("object" === se.type(i)) {
            s = !0;
            for (o in i)se.access(e, t, o, i[o], !0, r, a)
        } else if (void 0 !== n) {
            s = !0;
            if (!se.isFunction(n))a = !0;
            if (c)if (a) {
                t.call(e, n);
                t = null
            } else {
                c = t;
                t = function (e, t, i) {
                    return c.call(se(e), i)
                }
            }
            if (t)for (; o < l; o++)t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)))
        }
        return s ? e : c ? t.call(e) : l ? t(e[0], i) : r
    };
    var Ne = /^(?:checkbox|radio)$/i;
    !function () {
        var e = he.createElement("input"), t = he.createElement("div"), i = he.createDocumentFragment();
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ie.leadingWhitespace = 3 === t.firstChild.nodeType;
        ie.tbody = !t.getElementsByTagName("tbody").length;
        ie.htmlSerialize = !!t.getElementsByTagName("link").length;
        ie.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML;
        e.type = "checkbox";
        e.checked = !0;
        i.appendChild(e);
        ie.appendChecked = e.checked;
        t.innerHTML = "<textarea>x</textarea>";
        ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
        i.appendChild(t);
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked;
        ie.noCloneEvent = !0;
        if (t.attachEvent) {
            t.attachEvent("onclick", function () {
                ie.noCloneEvent = !1
            });
            t.cloneNode(!0).click()
        }
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }();
    !function () {
        var t, i, n = he.createElement("div");
        for (t in{submit: !0, change: !0, focusin: !0}) {
            i = "on" + t;
            if (!(ie[t + "Bubbles"] = i in e)) {
                n.setAttribute(i, "t");
                ie[t + "Bubbles"] = n.attributes[i].expando === !1
            }
        }
        n = null
    }();
    var Le = /^(?:input|select|textarea)$/i, Me = /^key/, Ae = /^(?:mouse|pointer|contextmenu)|click/, Pe = /^(?:focusinfocus|focusoutblur)$/, De = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function (e, t, i, n, s) {
            var r, a, o, l, c, d, u, f, _, h, p, m = se._data(e);
            if (m) {
                if (i.handler) {
                    l = i;
                    i = l.handler;
                    s = l.selector
                }
                if (!i.guid)i.guid = se.guid++;
                if (!(a = m.events))a = m.events = {};
                if (!(d = m.handle)) {
                    d = m.handle = function (e) {
                        return typeof se !== xe && (!e || se.event.triggered !== e.type) ? se.event.dispatch.apply(d.elem, arguments) : void 0
                    };
                    d.elem = e
                }
                t = (t || "").match($e) || [""];
                o = t.length;
                for (; o--;) {
                    r = De.exec(t[o]) || [];
                    _ = p = r[1];
                    h = (r[2] || "").split(".").sort();
                    if (_) {
                        c = se.event.special[_] || {};
                        _ = (s ? c.delegateType : c.bindType) || _;
                        c = se.event.special[_] || {};
                        u = se.extend({
                            type: _,
                            origType: p,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && se.expr.match.needsContext.test(s),
                            namespace: h.join(".")
                        }, l);
                        if (!(f = a[_])) {
                            f = a[_] = [];
                            f.delegateCount = 0;
                            if (!c.setup || c.setup.call(e, n, h, d) === !1)if (e.addEventListener)e.addEventListener(_, d, !1); else if (e.attachEvent)e.attachEvent("on" + _, d)
                        }
                        if (c.add) {
                            c.add.call(e, u);
                            if (!u.handler.guid)u.handler.guid = i.guid
                        }
                        if (s)f.splice(f.delegateCount++, 0, u); else f.push(u);
                        se.event.global[_] = !0
                    } else;
                }
                e = null
            }
        },
        remove: function (e, t, i, n, s) {
            var r, a, o, l, c, d, u, f, _, h, p, m = se.hasData(e) && se._data(e);
            if (m && (d = m.events)) {
                t = (t || "").match($e) || [""];
                c = t.length;
                for (; c--;) {
                    o = De.exec(t[c]) || [];
                    _ = p = o[1];
                    h = (o[2] || "").split(".").sort();
                    if (_) {
                        u = se.event.special[_] || {};
                        _ = (n ? u.delegateType : u.bindType) || _;
                        f = d[_] || [];
                        o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        l = r = f.length;
                        for (; r--;) {
                            a = f[r];
                            if ((s || p === a.origType) && (!i || i.guid === a.guid) && (!o || o.test(a.namespace)) && (!n || n === a.selector || "**" === n && a.selector)) {
                                f.splice(r, 1);
                                if (a.selector)f.delegateCount--;
                                if (u.remove)u.remove.call(e, a)
                            }
                        }
                        if (l && !f.length) {
                            if (!u.teardown || u.teardown.call(e, h, m.handle) === !1)se.removeEvent(e, _, m.handle);
                            delete d[_]
                        }
                    } else for (_ in d)se.event.remove(e, _ + t[c], i, n, !0)
                }
                if (se.isEmptyObject(d)) {
                    delete m.handle;
                    se._removeData(e, "events")
                }
            }
        },
        trigger: function (t, i, n, s) {
            var r, a, o, l, c, d, u, f = [n || he], _ = te.call(t, "type") ? t.type : t, h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            o = d = n = n || he;
            if (3 !== n.nodeType && 8 !== n.nodeType)if (!Pe.test(_ + se.event.triggered)) {
                if (_.indexOf(".") >= 0) {
                    h = _.split(".");
                    _ = h.shift();
                    h.sort()
                }
                a = _.indexOf(":") < 0 && "on" + _;
                t = t[se.expando] ? t : new se.Event(_, "object" == typeof t && t);
                t.isTrigger = s ? 2 : 3;
                t.namespace = h.join(".");
                t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                t.result = void 0;
                if (!t.target)t.target = n;
                i = null == i ? [t] : se.makeArray(i, [t]);
                c = se.event.special[_] || {};
                if (s || !c.trigger || c.trigger.apply(n, i) !== !1) {
                    if (!s && !c.noBubble && !se.isWindow(n)) {
                        l = c.delegateType || _;
                        if (!Pe.test(l + _))o = o.parentNode;
                        for (; o; o = o.parentNode) {
                            f.push(o);
                            d = o
                        }
                        if (d === (n.ownerDocument || he))f.push(d.defaultView || d.parentWindow || e)
                    }
                    u = 0;
                    for (; (o = f[u++]) && !t.isPropagationStopped();) {
                        t.type = u > 1 ? l : c.bindType || _;
                        r = (se._data(o, "events") || {})[t.type] && se._data(o, "handle");
                        if (r)r.apply(o, i);
                        r = a && o[a];
                        if (r && r.apply && se.acceptData(o)) {
                            t.result = r.apply(o, i);
                            if (t.result === !1)t.preventDefault()
                        }
                    }
                    t.type = _;
                    if (!s && !t.isDefaultPrevented())if ((!c._default || c._default.apply(f.pop(), i) === !1) && se.acceptData(n))if (a && n[_] && !se.isWindow(n)) {
                        d = n[a];
                        if (d)n[a] = null;
                        se.event.triggered = _;
                        try {
                            n[_]()
                        } catch (p) {
                        }
                        se.event.triggered = void 0;
                        if (d)n[a] = d
                    }
                    return t.result
                }
            }
        },
        dispatch: function (e) {
            e = se.event.fix(e);
            var t, i, n, s, r, a = [], o = X.call(arguments), l = (se._data(this, "events") || {})[e.type] || [], c = se.event.special[e.type] || {};
            o[0] = e;
            e.delegateTarget = this;
            if (!c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                a = se.event.handlers.call(this, e, l);
                t = 0;
                for (; (s = a[t++]) && !e.isPropagationStopped();) {
                    e.currentTarget = s.elem;
                    r = 0;
                    for (; (n = s.handlers[r++]) && !e.isImmediatePropagationStopped();)if (!e.namespace_re || e.namespace_re.test(n.namespace)) {
                        e.handleObj = n;
                        e.data = n.data;
                        i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, o);
                        if (void 0 !== i)if ((e.result = i) === !1) {
                            e.preventDefault();
                            e.stopPropagation()
                        }
                    }
                }
                if (c.postDispatch)c.postDispatch.call(this, e);
                return e.result
            }
        },
        handlers: function (e, t) {
            var i, n, s, r, a = [], o = t.delegateCount, l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                s = [];
                for (r = 0; r < o; r++) {
                    n = t[r];
                    i = n.selector + " ";
                    if (void 0 === s[i])s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length;
                    if (s[i])s.push(n)
                }
                if (s.length)a.push({elem: l, handlers: s})
            }
            if (o < t.length)a.push({elem: this, handlers: t.slice(o)});
            return a
        },
        fix: function (e) {
            if (e[se.expando])return e;
            var t, i, n, s = e.type, r = e, a = this.fixHooks[s];
            if (!a)this.fixHooks[s] = a = Ae.test(s) ? this.mouseHooks : Me.test(s) ? this.keyHooks : {};
            n = a.props ? this.props.concat(a.props) : this.props;
            e = new se.Event(r);
            t = n.length;
            for (; t--;) {
                i = n[t];
                e[i] = r[i]
            }
            if (!e.target)e.target = r.srcElement || he;
            if (3 === e.target.nodeType)e.target = e.target.parentNode;
            e.metaKey = !!e.metaKey;
            return a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                if (null == e.which)e.which = null != t.charCode ? t.charCode : t.keyCode;
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, s, r = t.button, a = t.fromElement;
                if (null == e.pageX && null != t.clientX) {
                    n = e.target.ownerDocument || he;
                    s = n.documentElement;
                    i = n.body;
                    e.pageX = t.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0);
                    e.pageY = t.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)
                }
                if (!e.relatedTarget && a)e.relatedTarget = a === e.target ? t.toElement : a;
                if (!e.which && void 0 !== r)e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0;
                return e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== h() && this.focus)try {
                        this.focus();
                        return !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === h() && this.blur) {
                        this.blur();
                        return !1
                    }
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (se.nodeName(this, "input") && "checkbox" === this.type && this.click) {
                        this.click();
                        return !1
                    }
                }, _default: function (e) {
                    return se.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    if (void 0 !== e.result && e.originalEvent)e.originalEvent.returnValue = e.result
                }
            }
        },
        simulate: function (e, t, i, n) {
            var s = se.extend(new se.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
            if (n)se.event.trigger(s, null, t); else se.event.dispatch.call(t, s);
            if (s.isDefaultPrevented())i.preventDefault()
        }
    };
    se.removeEvent = he.removeEventListener ? function (e, t, i) {
        if (e.removeEventListener)e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        if (e.detachEvent) {
            if (typeof e[n] === xe)e[n] = null;
            e.detachEvent(n, i)
        }
    };
    se.Event = function (e, t) {
        if (!(this instanceof se.Event))return new se.Event(e, t);
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : _
        } else this.type = e;
        if (t)se.extend(this, t);
        this.timeStamp = e && e.timeStamp || se.now();
        this[se.expando] = !0
    };
    se.Event.prototype = {
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f;
            if (e)if (e.preventDefault)e.preventDefault(); else e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f;
            if (e) {
                if (e.stopPropagation)e.stopPropagation();
                e.cancelBubble = !0
            }
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f;
            if (e && e.stopImmediatePropagation)e.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        se.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var i, n = this, s = e.relatedTarget, r = e.handleObj;
                if (!s || s !== n && !se.contains(n, s)) {
                    e.type = r.origType;
                    i = r.handler.apply(this, arguments);
                    e.type = t
                }
                return i
            }
        }
    });
    if (!ie.submitBubbles)se.event.special.submit = {
        setup: function () {
            if (se.nodeName(this, "form"))return !1;
            se.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, i = se.nodeName(t, "input") || se.nodeName(t, "button") ? t.form : void 0;
                if (i && !se._data(i, "submitBubbles")) {
                    se.event.add(i, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    });
                    se._data(i, "submitBubbles", !0)
                }
            })
        }, postDispatch: function (e) {
            if (e._submit_bubble) {
                delete e._submit_bubble;
                if (this.parentNode && !e.isTrigger)se.event.simulate("submit", this.parentNode, e, !0)
            }
        }, teardown: function () {
            if (se.nodeName(this, "form"))return !1;
            se.event.remove(this, "._submit")
        }
    };
    if (!ie.changeBubbles)se.event.special.change = {
        setup: function () {
            if (Le.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) {
                    se.event.add(this, "propertychange._change", function (e) {
                        if ("checked" === e.originalEvent.propertyName)this._just_changed = !0
                    });
                    se.event.add(this, "click._change", function (e) {
                        if (this._just_changed && !e.isTrigger)this._just_changed = !1;
                        se.event.simulate("change", this, e, !0)
                    })
                }
                return !1
            }
            se.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                if (Le.test(t.nodeName) && !se._data(t, "changeBubbles")) {
                    se.event.add(t, "change._change", function (e) {
                        if (this.parentNode && !e.isSimulated && !e.isTrigger)se.event.simulate("change", this.parentNode, e, !0)
                    });
                    se._data(t, "changeBubbles", !0)
                }
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            se.event.remove(this, "._change");
            return !Le.test(this.nodeName)
        }
    };
    if (!ie.focusinBubbles)se.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = function (e) {
            se.event.simulate(t, e.target, se.event.fix(e), !0)
        };
        se.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this, s = se._data(n, t);
                if (!s)n.addEventListener(e, i, !0);
                se._data(n, t, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, s = se._data(n, t) - 1;
                if (!s) {
                    n.removeEventListener(e, i, !0);
                    se._removeData(n, t)
                } else se._data(n, t, s)
            }
        }
    });
    se.fn.extend({
        on: function (e, t, i, n, s) {
            var r, a;
            if ("object" == typeof e) {
                if ("string" != typeof t) {
                    i = i || t;
                    t = void 0
                }
                for (r in e)this.on(r, t, i, e[r], s);
                return this
            }
            if (null == i && null == n) {
                n = t;
                i = t = void 0
            } else if (null == n)if ("string" == typeof t) {
                n = i;
                i = void 0
            } else {
                n = i;
                i = t;
                t = void 0
            }
            if (n === !1)n = _; else if (!n)return this;
            if (1 === s) {
                a = n;
                n = function (e) {
                    se().off(e);
                    return a.apply(this, arguments)
                };
                n.guid = a.guid || (a.guid = se.guid++)
            }
            return this.each(function () {
                se.event.add(this, e, n, i, t)
            })
        }, one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) {
                n = e.handleObj;
                se(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
                return this
            }
            if ("object" == typeof e) {
                for (s in e)this.off(s, t, e[s]);
                return this
            }
            if (t === !1 || "function" == typeof t) {
                i = t;
                t = void 0
            }
            if (i === !1)i = _;
            return this.each(function () {
                se.event.remove(this, e, i, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                se.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            if (i)return se.event.trigger(e, t, i, !0)
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", je = / jQuery\d+="(?:null|\d+)"/g, Re = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"), Be = /^\s+/, Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, He = /<([\w:]+)/, ze = /<tbody/i, qe = /<|&#?\w+;/, Ue = /<(?:script|style|link)/i, We = /checked\s*(?:[^=]|=\s*.checked.)/i, Ve = /^$|\/(?:java|ecma)script/i, Ge = /^true\/(.*)/, Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Je = p(he), Ke = Je.appendChild(he.createElement("div"));
    Xe.optgroup = Xe.option;
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead;
    Xe.th = Xe.td;
    se.extend({
        clone: function (e, t, i) {
            var n, s, r, a, o, l = se.contains(e.ownerDocument, e);
            if (ie.html5Clone || se.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">"))r = e.cloneNode(!0); else {
                Ke.innerHTML = e.outerHTML;
                Ke.removeChild(r = Ke.firstChild)
            }
            if (!(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || se.isXMLDoc(e))) {
                n = m(r);
                o = m(e);
                for (a = 0; null != (s = o[a]); ++a)if (n[a])w(s, n[a])
            }
            if (t)if (i) {
                o = o || m(e);
                n = n || m(r);
                for (a = 0; null != (s = o[a]); a++)x(s, n[a])
            } else x(e, r);
            n = m(r, "script");
            if (n.length > 0)b(n, !l && m(e, "script"));
            n = o = s = null;
            return r
        }, buildFragment: function (e, t, i, n) {
            var s, r, a, o, l, c, d, u = e.length, f = p(t), _ = [], h = 0;
            for (; h < u; h++) {
                r = e[h];
                if (r || 0 === r)if ("object" === se.type(r))se.merge(_, r.nodeType ? [r] : r); else if (!qe.test(r))_.push(t.createTextNode(r)); else {
                    o = o || f.appendChild(t.createElement("div"));
                    l = (He.exec(r) || ["", ""])[1].toLowerCase();
                    d = Xe[l] || Xe._default;
                    o.innerHTML = d[1] + r.replace(Fe, "<$1></$2>") + d[2];
                    s = d[0];
                    for (; s--;)o = o.lastChild;
                    if (!ie.leadingWhitespace && Be.test(r))_.push(t.createTextNode(Be.exec(r)[0]));
                    if (!ie.tbody) {
                        r = "table" === l && !ze.test(r) ? o.firstChild : "<table>" === d[1] && !ze.test(r) ? o : 0;
                        s = r && r.childNodes.length;
                        for (; s--;)if (se.nodeName(c = r.childNodes[s], "tbody") && !c.childNodes.length)r.removeChild(c)
                    }
                    se.merge(_, o.childNodes);
                    o.textContent = "";
                    for (; o.firstChild;)o.removeChild(o.firstChild);
                    o = f.lastChild
                }
            }
            if (o)f.removeChild(o);
            if (!ie.appendChecked)se.grep(m(_, "input"), v);
            h = 0;
            for (; r = _[h++];)if (!n || se.inArray(r, n) === -1) {
                a = se.contains(r.ownerDocument, r);
                o = m(f.appendChild(r), "script");
                if (a)b(o);
                if (i) {
                    s = 0;
                    for (; r = o[s++];)if (Ve.test(r.type || ""))i.push(r)
                }
            } else;
            o = null;
            return f
        }, cleanData: function (e, t) {
            var i, n, s, r, a = 0, o = se.expando, l = se.cache, c = ie.deleteExpando, d = se.event.special;
            for (; null != (i = e[a]); a++)if (t || se.acceptData(i)) {
                s = i[o];
                r = s && l[s];
                if (r) {
                    if (r.events)for (n in r.events)if (d[n])se.event.remove(i, n); else se.removeEvent(i, n, r.handle);
                    if (l[s]) {
                        delete l[s];
                        if (c)delete i[o]; else if (typeof i.removeAttribute !== xe)i.removeAttribute(o); else i[o] = null;
                        Y.push(s)
                    }
                }
            }
        }
    });
    se.fn.extend({
        text: function (e) {
            return Ee(this, function (e) {
                return void 0 === e ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                if (this.parentNode)this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                if (this.parentNode)this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var i, n = e ? se.filter(e, this) : this, s = 0;
            for (; null != (i = n[s]); s++) {
                if (!t && 1 === i.nodeType)se.cleanData(m(i));
                if (i.parentNode) {
                    if (t && se.contains(i.ownerDocument, i))b(m(i, "script"));
                    i.parentNode.removeChild(i)
                }
            }
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                if (1 === e.nodeType)se.cleanData(m(e, !1));
                for (; e.firstChild;)e.removeChild(e.firstChild);
                if (e.options && se.nodeName(e, "select"))e.options.length = 0
            }
            return this
        }, clone: function (e, t) {
            e = null == e ? !1 : e;
            t = null == t ? e : t;
            return this.map(function () {
                return se.clone(this, e, t)
            })
        }, html: function (e) {
            return Ee(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(je, "") : void 0;
                if ("string" == typeof e && !Ue.test(e) && (ie.htmlSerialize || !Re.test(e)) && (ie.leadingWhitespace || !Be.test(e)) && !Xe[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; i < n; i++) {
                            t = this[i] || {};
                            if (1 === t.nodeType) {
                                se.cleanData(m(t, !1));
                                t.innerHTML = e
                            }
                        }
                        t = 0
                    } catch (s) {
                    }
                }
                if (t)this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            this.domManip(arguments, function (t) {
                e = this.parentNode;
                se.cleanData(m(this));
                if (e)e.replaceChild(t, this)
            });
            return e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = J.apply([], e);
            var i, n, s, r, a, o, l = 0, c = this.length, d = this, u = c - 1, f = e[0], _ = se.isFunction(f);
            if (_ || c > 1 && "string" == typeof f && !ie.checkClone && We.test(f))return this.each(function (i) {
                var n = d.eq(i);
                if (_)e[0] = f.call(this, i, n.html());
                n.domManip(e, t)
            });
            if (c) {
                o = se.buildFragment(e, this[0].ownerDocument, !1, this);
                i = o.firstChild;
                if (1 === o.childNodes.length)o = i;
                if (i) {
                    r = se.map(m(o, "script"), $);
                    s = r.length;
                    for (; l < c; l++) {
                        n = o;
                        if (l !== u) {
                            n = se.clone(n, !0, !0);
                            if (s)se.merge(r, m(n, "script"))
                        }
                        t.call(this[l], n, l)
                    }
                    if (s) {
                        a = r[r.length - 1].ownerDocument;
                        se.map(r, y);
                        for (l = 0; l < s; l++) {
                            n = r[l];
                            if (Ve.test(n.type || "") && !se._data(n, "globalEval") && se.contains(a, n))if (n.src) {
                                if (se._evalUrl)se._evalUrl(n.src)
                            } else se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ye, ""))
                        }
                    }
                    o = i = null
                }
            }
            return this
        }
    });
    se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        se.fn[e] = function (e) {
            var i, n = 0, s = [], r = se(e), a = r.length - 1;
            for (; n <= a; n++) {
                i = n === a ? this : this.clone(!0);
                se(r[n])[t](i);
                K.apply(s, i.get())
            }
            return this.pushStack(s)
        }
    });
    var Qe, Ze = {};
    !function () {
        var e;
        ie.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, i, n;
            i = he.getElementsByTagName("body")[0];
            if (i && i.style) {
                t = he.createElement("div");
                n = he.createElement("div");
                n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                i.appendChild(n).appendChild(t);
                if (typeof t.style.zoom !== xe) {
                    t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                    t.appendChild(he.createElement("div")).style.width = "5px";
                    e = 3 !== t.offsetWidth
                }
                i.removeChild(n);
                return e
            }
        }
    }();
    var et = /^margin/;
    var tt = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i");
    var it, nt, st = /^(top|right|bottom|left)$/;
    if (e.getComputedStyle) {
        it = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
        nt = function (e, t, i) {
            var n, s, r, a, o = e.style;
            i = i || it(e);
            a = i ? i.getPropertyValue(t) || i[t] : void 0;
            if (i) {
                if ("" === a && !se.contains(e.ownerDocument, e))a = se.style(e, t);
                if (tt.test(a) && et.test(t)) {
                    n = o.width;
                    s = o.minWidth;
                    r = o.maxWidth;
                    o.minWidth = o.maxWidth = o.width = a;
                    a = i.width;
                    o.width = n;
                    o.minWidth = s;
                    o.maxWidth = r
                }
            }
            return void 0 === a ? a : a + ""
        }
    } else if (he.documentElement.currentStyle) {
        it = function (e) {
            return e.currentStyle
        };
        nt = function (e, t, i) {
            var n, s, r, a, o = e.style;
            i = i || it(e);
            a = i ? i[t] : void 0;
            if (null == a && o && o[t])a = o[t];
            if (tt.test(a) && !st.test(t)) {
                n = o.left;
                s = e.runtimeStyle;
                r = s && s.left;
                if (r)s.left = e.currentStyle.left;
                o.left = "fontSize" === t ? "1em" : a;
                a = o.pixelLeft + "px";
                o.left = n;
                if (r)s.left = r
            }
            return void 0 === a ? a : a + "" || "auto"
        }
    }
    !function () {
        function t() {
            var t, i, n, s;
            i = he.getElementsByTagName("body")[0];
            if (i && i.style) {
                t = he.createElement("div");
                n = he.createElement("div");
                n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                i.appendChild(n).appendChild(t);
                t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                r = a = !1;
                l = !0;
                if (e.getComputedStyle) {
                    r = "1%" !== (e.getComputedStyle(t, null) || {}).top;
                    a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width;
                    s = t.appendChild(he.createElement("div"));
                    s.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    s.style.marginRight = s.style.width = "0";
                    t.style.width = "1px";
                    l = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)
                }
                t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                s = t.getElementsByTagName("td");
                s[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                o = 0 === s[0].offsetHeight;
                if (o) {
                    s[0].style.display = "";
                    s[1].style.display = "none";
                    o = 0 === s[0].offsetHeight
                }
                i.removeChild(n)
            }
        }

        var i, n, s, r, a, o, l;
        i = he.createElement("div");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        s = i.getElementsByTagName("a")[0];
        n = s && s.style;
        if (n) {
            n.cssText = "float:left;opacity:.5";
            ie.opacity = "0.5" === n.opacity;
            ie.cssFloat = !!n.cssFloat;
            i.style.backgroundClip = "content-box";
            i.cloneNode(!0).style.backgroundClip = "";
            ie.clearCloneStyle = "content-box" === i.style.backgroundClip;
            ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing;
            se.extend(ie, {
                reliableHiddenOffsets: function () {
                    if (null == o)t();
                    return o
                }, boxSizingReliable: function () {
                    if (null == a)t();
                    return a
                }, pixelPosition: function () {
                    if (null == r)t();
                    return r
                }, reliableMarginRight: function () {
                    if (null == l)t();
                    return l
                }
            })
        }
    }();
    se.swap = function (e, t, i, n) {
        var s, r, a = {};
        for (r in t) {
            a[r] = e.style[r];
            e.style[r] = t[r]
        }
        s = i.apply(e, n || []);
        for (r in t)e.style[r] = a[r];
        return s
    };
    var rt = /alpha\([^)]*\)/i, at = /opacity\s*=\s*([^)]*)/, ot = /^(none|table(?!-c[ea]).+)/, lt = new RegExp("^(" + Ce + ")(.*)$", "i"), ct = new RegExp("^([+-])=(" + Ce + ")", "i"), dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ut = {letterSpacing: "0", fontWeight: "400"}, ft = ["Webkit", "O", "Moz", "ms"];
    se.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = nt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, r, a, o = se.camelCase(t), l = e.style;
                t = se.cssProps[o] || (se.cssProps[o] = S(l, o));
                a = se.cssHooks[t] || se.cssHooks[o];
                if (void 0 !== i) {
                    r = typeof i;
                    if ("string" === r && (s = ct.exec(i))) {
                        i = (s[1] + 1) * s[2] + parseFloat(se.css(e, t));
                        r = "number"
                    }
                    if (null == i || i !== i)return;
                    if ("number" === r && !se.cssNumber[o])i += "px";
                    if (!ie.clearCloneStyle && "" === i && 0 === t.indexOf("background"))l[t] = "inherit";
                    if (!(a && "set" in a && void 0 === (i = a.set(e, i, n))))try {
                        l[t] = i
                    } catch (c) {
                    }
                } else if (a && "get" in a && void 0 !== (s = a.get(e, !1, n)))return s; else return l[t]
            }
        },
        css: function (e, t, i, n) {
            var s, r, a, o = se.camelCase(t);
            t = se.cssProps[o] || (se.cssProps[o] = S(e.style, o));
            a = se.cssHooks[t] || se.cssHooks[o];
            if (a && "get" in a)r = a.get(e, !0, i);
            if (void 0 === r)r = nt(e, t, n);
            if ("normal" === r && t in ut)r = ut[t];
            if ("" === i || i) {
                s = parseFloat(r);
                return i === !0 || se.isNumeric(s) ? s || 0 : r
            }
            return r
        }
    });
    se.each(["height", "width"], function (e, t) {
        se.cssHooks[t] = {
            get: function (e, i, n) {
                if (i)return ot.test(se.css(e, "display")) && 0 === e.offsetWidth ? se.swap(e, dt, function () {
                    return L(e, t, n)
                }) : L(e, t, n)
            }, set: function (e, i, n) {
                var s = n && it(e);
                return E(e, i, n ? N(e, t, n, ie.boxSizing && "border-box" === se.css(e, "boxSizing", !1, s), s) : 0)
            }
        }
    });
    if (!ie.opacity)se.cssHooks.opacity = {
        get: function (e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var i = e.style, n = e.currentStyle, s = se.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = n && n.filter || i.filter || "";
            i.zoom = 1;
            if ((t >= 1 || "" === t) && "" === se.trim(r.replace(rt, "")) && i.removeAttribute) {
                i.removeAttribute("filter");
                if ("" === t || n && !n.filter)return
            }
            i.filter = rt.test(r) ? r.replace(rt, s) : r + " " + s;
        }
    };
    se.cssHooks.marginRight = C(ie.reliableMarginRight, function (e, t) {
        if (t)return se.swap(e, {display: "inline-block"}, nt, [e, "marginRight"])
    });
    se.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        se.cssHooks[e + t] = {
            expand: function (i) {
                var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i];
                for (; n < 4; n++)s[e + Se[n] + t] = r[n] || r[n - 2] || r[0];
                return s
            }
        };
        if (!et.test(e))se.cssHooks[e + t].set = E
    });
    se.fn.extend({
        css: function (e, t) {
            return Ee(this, function (e, t, i) {
                var n, s, r = {}, a = 0;
                if (se.isArray(t)) {
                    n = it(e);
                    s = t.length;
                    for (; a < s; a++)r[t[a]] = se.css(e, t[a], !1, n);
                    return r
                }
                return void 0 !== i ? se.style(e, t, i) : se.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return k(this, !0)
        }, hide: function () {
            return k(this)
        }, toggle: function (e) {
            if ("boolean" == typeof e)return e ? this.show() : this.hide(); else return this.each(function () {
                if (ke(this))se(this).show(); else se(this).hide()
            })
        }
    });
    se.Tween = M;
    M.prototype = {
        constructor: M, init: function (e, t, i, n, s, r) {
            this.elem = e;
            this.prop = i;
            this.easing = s || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = n;
            this.unit = r || (se.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = M.propHooks[this.prop];
            if (this.options.duration)this.pos = t = se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration); else this.pos = t = e;
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step)this.options.step.call(this.elem, this.now, this);
            if (i && i.set)i.set(this); else M.propHooks._default.set(this);
            return this
        }
    };
    M.prototype.init.prototype = M.prototype;
    M.propHooks = {
        _default: {
            get: function (e) {
                var t;
                if (null != e.elem[e.prop] && (!e.elem.style || null == e.elem.style[e.prop]))return e.elem[e.prop];
                t = se.css(e.elem, e.prop, "");
                return !t || "auto" === t ? 0 : t
            }, set: function (e) {
                if (se.fx.step[e.prop])se.fx.step[e.prop](e); else if (e.elem.style && (null != e.elem.style[se.cssProps[e.prop]] || se.cssHooks[e.prop]))se.style(e.elem, e.prop, e.now + e.unit); else e.elem[e.prop] = e.now
            }
        }
    };
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (e) {
            if (e.elem.nodeType && e.elem.parentNode)e.elem[e.prop] = e.now
        }
    };
    se.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    };
    se.fx = M.prototype.init;
    se.fx.step = {};
    var _t, ht, pt = /^(?:toggle|show|hide)$/, mt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"), vt = /queueHooks$/, gt = [O], $t = {
        "*": [function (e, t) {
            var i = this.createTween(e, t), n = i.cur(), s = mt.exec(t), r = s && s[3] || (se.cssNumber[e] ? "" : "px"), a = (se.cssNumber[e] || "px" !== r && +n) && mt.exec(se.css(i.elem, e)), o = 1, l = 20;
            if (a && a[3] !== r) {
                r = r || a[3];
                s = s || [];
                a = +n || 1;
                do {
                    o = o || ".5";
                    a /= o;
                    se.style(i.elem, e, a + r)
                } while (o !== (o = i.cur() / n) && 1 !== o && --l)
            }
            if (s) {
                a = i.start = +a || +n || 0;
                i.unit = r;
                i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]
            }
            return i
        }]
    };
    se.Animation = se.extend(R, {
        tweener: function (e, t) {
            if (se.isFunction(e)) {
                t = e;
                e = ["*"]
            } else e = e.split(" ");
            var i, n = 0, s = e.length;
            for (; n < s; n++) {
                i = e[n];
                $t[i] = $t[i] || [];
                $t[i].unshift(t)
            }
        }, prefilter: function (e, t) {
            if (t)gt.unshift(e); else gt.push(e)
        }
    });
    se.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? se.extend({}, e) : {
            complete: i || !i && t || se.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !se.isFunction(t) && t
        };
        n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default;
        if (null == n.queue || n.queue === !0)n.queue = "fx";
        n.old = n.complete;
        n.complete = function () {
            if (se.isFunction(n.old))n.old.call(this);
            if (n.queue)se.dequeue(this, n.queue)
        };
        return n
    };
    se.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(ke).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var s = se.isEmptyObject(e), r = se.speed(t, i, n), a = function () {
                var t = R(this, se.extend({}, e), r);
                if (s || se._data(this, "finish"))t.stop(!0)
            };
            a.finish = a;
            return s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        }, stop: function (e, t, i) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop;
                t(i)
            };
            if ("string" != typeof e) {
                i = t;
                t = e;
                e = void 0
            }
            if (t && e !== !1)this.queue(e || "fx", []);
            return this.each(function () {
                var t = !0, s = null != e && e + "queueHooks", r = se.timers, a = se._data(this);
                if (s) {
                    if (a[s] && a[s].stop)n(a[s])
                } else for (s in a)if (a[s] && a[s].stop && vt.test(s))n(a[s]);
                for (s = r.length; s--;)if (r[s].elem === this && (null == e || r[s].queue === e)) {
                    r[s].anim.stop(i);
                    t = !1;
                    r.splice(s, 1)
                }
                if (t || !i)se.dequeue(this, e)
            })
        }, finish: function (e) {
            if (e !== !1)e = e || "fx";
            return this.each(function () {
                var t, i = se._data(this), n = i[e + "queue"], s = i[e + "queueHooks"], r = se.timers, a = n ? n.length : 0;
                i.finish = !0;
                se.queue(this, e, []);
                if (s && s.stop)s.stop.call(this, !0);
                for (t = r.length; t--;)if (r[t].elem === this && r[t].queue === e) {
                    r[t].anim.stop(!0);
                    r.splice(t, 1)
                }
                for (t = 0; t < a; t++)if (n[t] && n[t].finish)n[t].finish.call(this);
                delete i.finish
            })
        }
    });
    se.each(["toggle", "show", "hide"], function (e, t) {
        var i = se.fn[t];
        se.fn[t] = function (e, n, s) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(P(t, !0), e, n, s)
        }
    });
    se.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        se.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    });
    se.timers = [];
    se.fx.tick = function () {
        var e, t = se.timers, i = 0;
        _t = se.now();
        for (; i < t.length; i++) {
            e = t[i];
            if (!e() && t[i] === e)t.splice(i--, 1)
        }
        if (!t.length)se.fx.stop();
        _t = void 0
    };
    se.fx.timer = function (e) {
        se.timers.push(e);
        if (e())se.fx.start(); else se.timers.pop()
    };
    se.fx.interval = 13;
    se.fx.start = function () {
        if (!ht)ht = setInterval(se.fx.tick, se.fx.interval)
    };
    se.fx.stop = function () {
        clearInterval(ht);
        ht = null
    };
    se.fx.speeds = {slow: 600, fast: 200, _default: 400};
    se.fn.delay = function (e, t) {
        e = se.fx ? se.fx.speeds[e] || e : e;
        t = t || "fx";
        return this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    };
    !function () {
        var e, t, i, n, s;
        t = he.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        n = t.getElementsByTagName("a")[0];
        i = he.createElement("select");
        s = i.appendChild(he.createElement("option"));
        e = t.getElementsByTagName("input")[0];
        n.style.cssText = "top:1px";
        ie.getSetAttribute = "t" !== t.className;
        ie.style = /top/.test(n.getAttribute("style"));
        ie.hrefNormalized = "/a" === n.getAttribute("href");
        ie.checkOn = !!e.value;
        ie.optSelected = s.selected;
        ie.enctype = !!he.createElement("form").enctype;
        i.disabled = !0;
        ie.optDisabled = !s.disabled;
        e = he.createElement("input");
        e.setAttribute("value", "");
        ie.input = "" === e.getAttribute("value");
        e.value = "t";
        e.setAttribute("type", "radio");
        ie.radioValue = "t" === e.value
    }();
    var yt = /\r/g;
    se.fn.extend({
        val: function (e) {
            var t, i, n, s = this[0];
            if (arguments.length) {
                n = se.isFunction(e);
                return this.each(function (i) {
                    var s;
                    if (1 === this.nodeType) {
                        if (n)s = e.call(this, i, se(this).val()); else s = e;
                        if (null == s)s = ""; else if ("number" == typeof s)s += ""; else if (se.isArray(s))s = se.map(s, function (e) {
                            return null == e ? "" : e + ""
                        });
                        t = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()];
                        if (!(t && "set" in t && void 0 !== t.set(this, s, "value")))this.value = s
                    }
                })
            } else if (s) {
                t = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()];
                if (t && "get" in t && void 0 !== (i = t.get(s, "value")))return i;
                i = s.value;
                return "string" == typeof i ? i.replace(yt, "") : null == i ? "" : i
            }
        }
    });
    se.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = se.find.attr(e, "value");
                    return null != t ? t : se.trim(se.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, i, n = e.options, s = e.selectedIndex, r = "select-one" === e.type || s < 0, a = r ? null : [], o = r ? s + 1 : n.length, l = s < 0 ? o : r ? s : 0;
                    for (; l < o; l++) {
                        i = n[l];
                        if ((i.selected || l === s) && (ie.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !se.nodeName(i.parentNode, "optgroup"))) {
                            t = se(i).val();
                            if (r)return t;
                            a.push(t)
                        }
                    }
                    return a
                }, set: function (e, t) {
                    var i, n, s = e.options, r = se.makeArray(t), a = s.length;
                    for (; a--;) {
                        n = s[a];
                        if (se.inArray(se.valHooks.option.get(n), r) >= 0)try {
                            n.selected = i = !0
                        } catch (o) {
                            n.scrollHeight
                        } else n.selected = !1
                    }
                    if (!i)e.selectedIndex = -1;
                    return s
                }
            }
        }
    });
    se.each(["radio", "checkbox"], function () {
        se.valHooks[this] = {
            set: function (e, t) {
                if (se.isArray(t))return e.checked = se.inArray(se(e).val(), t) >= 0
            }
        };
        if (!ie.checkOn)se.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
    });
    var bt, xt, wt = se.expr.attrHandle, Tt = /^(?:checked|selected)$/i, It = ie.getSetAttribute, Ct = ie.input;
    se.fn.extend({
        attr: function (e, t) {
            return Ee(this, se.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                se.removeAttr(this, e)
            })
        }
    });
    se.extend({
        attr: function (e, t, i) {
            var n, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) {
                if (typeof e.getAttribute === xe)return se.prop(e, t, i);
                if (1 !== r || !se.isXMLDoc(e)) {
                    t = t.toLowerCase();
                    n = se.attrHooks[t] || (se.expr.match.bool.test(t) ? xt : bt)
                }
                if (void 0 !== i)if (null === i)se.removeAttr(e, t); else if (n && "set" in n && void 0 !== (s = n.set(e, i, t)))return s; else {
                    e.setAttribute(t, i + "");
                    return i
                } else if (n && "get" in n && null !== (s = n.get(e, t)))return s; else {
                    s = se.find.attr(e, t);
                    return null == s ? void 0 : s
                }
            }
        }, removeAttr: function (e, t) {
            var i, n, s = 0, r = t && t.match($e);
            if (r && 1 === e.nodeType)for (; i = r[s++];) {
                n = se.propFix[i] || i;
                if (se.expr.match.bool.test(i))if (Ct && It || !Tt.test(i))e[n] = !1; else e[se.camelCase("default-" + i)] = e[n] = !1; else se.attr(e, i, "");
                e.removeAttribute(It ? i : n)
            }
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && se.nodeName(e, "input")) {
                        var i = e.value;
                        e.setAttribute("type", t);
                        if (i)e.value = i;
                        return t
                    }
                }
            }
        }
    });
    xt = {
        set: function (e, t, i) {
            if (t === !1)se.removeAttr(e, i); else if (Ct && It || !Tt.test(i))e.setAttribute(!It && se.propFix[i] || i, i); else e[se.camelCase("default-" + i)] = e[i] = !0;
            return i
        }
    };
    se.each(se.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = wt[t] || se.find.attr;
        wt[t] = Ct && It || !Tt.test(t) ? function (e, t, n) {
            var s, r;
            if (!n) {
                r = wt[t];
                wt[t] = s;
                s = null != i(e, t, n) ? t.toLowerCase() : null;
                wt[t] = r
            }
            return s
        } : function (e, t, i) {
            if (!i)return e[se.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    if (!Ct || !It)se.attrHooks.value = {
        set: function (e, t, i) {
            if (se.nodeName(e, "input"))e.defaultValue = t; else return bt && bt.set(e, t, i)
        }
    };
    if (!It) {
        bt = {
            set: function (e, t, i) {
                var n = e.getAttributeNode(i);
                if (!n)e.setAttributeNode(n = e.ownerDocument.createAttribute(i));
                n.value = t += "";
                if ("value" === i || t === e.getAttribute(i))return t
            }
        };
        wt.id = wt.name = wt.coords = function (e, t, i) {
            var n;
            if (!i)return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null;
        };
        se.valHooks.button = {
            get: function (e, t) {
                var i = e.getAttributeNode(t);
                if (i && i.specified)return i.value
            }, set: bt.set
        };
        se.attrHooks.contenteditable = {
            set: function (e, t, i) {
                bt.set(e, "" === t ? !1 : t, i)
            }
        };
        se.each(["width", "height"], function (e, t) {
            se.attrHooks[t] = {
                set: function (e, i) {
                    if ("" === i) {
                        e.setAttribute(t, "auto");
                        return i
                    }
                }
            }
        })
    }
    if (!ie.style)se.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    };
    var St = /^(?:input|select|textarea|button|object)$/i, kt = /^(?:a|area)$/i;
    se.fn.extend({
        prop: function (e, t) {
            return Ee(this, se.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            e = se.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = void 0;
                    delete this[e]
                } catch (t) {
                }
            })
        }
    });
    se.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, i) {
            var n, s, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) {
                r = 1 !== a || !se.isXMLDoc(e);
                if (r) {
                    t = se.propFix[t] || t;
                    s = se.propHooks[t]
                }
                if (void 0 !== i)return s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i; else return s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
            }
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = se.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    });
    if (!ie.hrefNormalized)se.each(["href", "src"], function (e, t) {
        se.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    });
    if (!ie.optSelected)se.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            if (t) {
                t.selectedIndex;
                if (t.parentNode)t.parentNode.selectedIndex
            }
            return null
        }
    };
    se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        se.propFix[this.toLowerCase()] = this
    });
    if (!ie.enctype)se.propFix.enctype = "encoding";
    var Et = /[\t\r\n\f]/g;
    se.fn.extend({
        addClass: function (e) {
            var t, i, n, s, r, a, o = 0, l = this.length, c = "string" == typeof e && e;
            if (se.isFunction(e))return this.each(function (t) {
                se(this).addClass(e.call(this, t, this.className))
            });
            if (c) {
                t = (e || "").match($e) || [];
                for (; o < l; o++) {
                    i = this[o];
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : " ");
                    if (n) {
                        r = 0;
                        for (; s = t[r++];)if (n.indexOf(" " + s + " ") < 0)n += s + " ";
                        a = se.trim(n);
                        if (i.className !== a)i.className = a
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, i, n, s, r, a, o = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (se.isFunction(e))return this.each(function (t) {
                se(this).removeClass(e.call(this, t, this.className))
            });
            if (c) {
                t = (e || "").match($e) || [];
                for (; o < l; o++) {
                    i = this[o];
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : "");
                    if (n) {
                        r = 0;
                        for (; s = t[r++];)for (; n.indexOf(" " + s + " ") >= 0;)n = n.replace(" " + s + " ", " ");
                        a = e ? se.trim(n) : "";
                        if (i.className !== a)i.className = a
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e;
            if ("boolean" == typeof t && "string" === i)return t ? this.addClass(e) : this.removeClass(e);
            if (se.isFunction(e))return this.each(function (i) {
                se(this).toggleClass(e.call(this, i, this.className, t), t)
            }); else return this.each(function () {
                if ("string" === i) {
                    var t, n = 0, s = se(this), r = e.match($e) || [];
                    for (; t = r[n++];)if (s.hasClass(t))s.removeClass(t); else s.addClass(t)
                } else if (i === xe || "boolean" === i) {
                    if (this.className)se._data(this, "__className__", this.className);
                    this.className = this.className || e === !1 ? "" : se._data(this, "__className__") || ""
                }
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", i = 0, n = this.length;
            for (; i < n; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Et, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        se.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    });
    se.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var Nt = se.now();
    var Lt = /\?/;
    var Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var i, n = null, s = se.trim(t + "");
        return s && !se.trim(s.replace(Mt, function (e, t, s, r) {
            if (i && t)n = 0;
            if (0 === n)return e;
            i = s || t;
            n += !r - !s;
            return ""
        })) ? Function("return " + s)() : se.error("Invalid JSON: " + t)
    };
    se.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t)return null;
        try {
            if (e.DOMParser) {
                n = new DOMParser;
                i = n.parseFromString(t, "text/xml")
            } else {
                i = new ActiveXObject("Microsoft.XMLDOM");
                i.async = "false";
                i.loadXML(t)
            }
        } catch (s) {
            i = void 0
        }
        if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length)se.error("Invalid XML: " + t);
        return i
    };
    var At, Pt, Dt = /#.*$/, Ot = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, Ft = /^\/\//, Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zt = {}, qt = {}, Ut = "*/".concat("*");
    try {
        Pt = location.href
    } catch (Wt) {
        Pt = he.createElement("a");
        Pt.href = "";
        Pt = Pt.href
    }
    At = Ht.exec(Pt.toLowerCase()) || [];
    se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pt,
            type: "GET",
            isLocal: Rt.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": se.parseJSON, "text xml": se.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, se.ajaxSettings), t) : H(se.ajaxSettings, e)
        },
        ajaxPrefilter: B(zt),
        ajaxTransport: B(qt),
        ajax: function (e, t) {
            function i(e, t, i, n) {
                var s, d, v, g, y, x = t;
                if (2 !== $) {
                    $ = 2;
                    if (o)clearTimeout(o);
                    c = void 0;
                    a = n || "";
                    b.readyState = e > 0 ? 4 : 0;
                    s = e >= 200 && e < 300 || 304 === e;
                    if (i)g = z(u, b, i);
                    g = q(u, g, b, s);
                    if (s) {
                        if (u.ifModified) {
                            y = b.getResponseHeader("Last-Modified");
                            if (y)se.lastModified[r] = y;
                            y = b.getResponseHeader("etag");
                            if (y)se.etag[r] = y
                        }
                        if (204 === e || "HEAD" === u.type)x = "nocontent"; else if (304 === e)x = "notmodified"; else {
                            x = g.state;
                            d = g.data;
                            v = g.error;
                            s = !v
                        }
                    } else {
                        v = x;
                        if (e || !x) {
                            x = "error";
                            if (e < 0)e = 0
                        }
                    }
                    b.status = e;
                    b.statusText = (t || x) + "";
                    if (s)h.resolveWith(f, [d, x, b]); else h.rejectWith(f, [b, x, v]);
                    b.statusCode(m);
                    m = void 0;
                    if (l)_.trigger(s ? "ajaxSuccess" : "ajaxError", [b, u, s ? d : v]);
                    p.fireWith(f, [b, x]);
                    if (l) {
                        _.trigger("ajaxComplete", [b, u]);
                        if (!--se.active)se.event.trigger("ajaxStop")
                    }
                }
            }

            if ("object" == typeof e) {
                t = e;
                e = void 0
            }
            t = t || {};
            var n, s, r, a, o, l, c, d, u = se.ajaxSetup({}, t), f = u.context || u, _ = u.context && (f.nodeType || f.jquery) ? se(f) : se.event, h = se.Deferred(), p = se.Callbacks("once memory"), m = u.statusCode || {}, v = {}, g = {}, $ = 0, y = "canceled", b = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === $) {
                        if (!d) {
                            d = {};
                            for (; t = jt.exec(a);)d[t[1].toLowerCase()] = t[2]
                        }
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === $ ? a : null
                },
                setRequestHeader: function (e, t) {
                    var i = e.toLowerCase();
                    if (!$) {
                        e = g[i] = g[i] || e;
                        v[e] = t
                    }
                    return this
                },
                overrideMimeType: function (e) {
                    if (!$)u.mimeType = e;
                    return this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if ($ < 2)for (t in e)m[t] = [m[t], e[t]]; else b.always(e[b.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || y;
                    if (c)c.abort(t);
                    i(0, t);
                    return this
                }
            };
            h.promise(b).complete = p.add;
            b.success = b.done;
            b.error = b.fail;
            u.url = ((e || u.url || Pt) + "").replace(Dt, "").replace(Ft, At[1] + "//");
            u.type = t.method || t.type || u.method || u.type;
            u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match($e) || [""];
            if (null == u.crossDomain) {
                n = Ht.exec(u.url.toLowerCase());
                u.crossDomain = !(!n || n[1] === At[1] && n[2] === At[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))
            }
            if (u.data && u.processData && "string" != typeof u.data)u.data = se.param(u.data, u.traditional);
            F(zt, u, t, b);
            if (2 === $)return b;
            l = u.global;
            if (l && 0 === se.active++)se.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !Bt.test(u.type);
            r = u.url;
            if (!u.hasContent) {
                if (u.data) {
                    r = u.url += (Lt.test(r) ? "&" : "?") + u.data;
                    delete u.data
                }
                if (u.cache === !1)u.url = Ot.test(r) ? r.replace(Ot, "$1_=" + Nt++) : r + (Lt.test(r) ? "&" : "?") + "_=" + Nt++
            }
            if (u.ifModified) {
                if (se.lastModified[r])b.setRequestHeader("If-Modified-Since", se.lastModified[r]);
                if (se.etag[r])b.setRequestHeader("If-None-Match", se.etag[r])
            }
            if (u.data && u.hasContent && u.contentType !== !1 || t.contentType)b.setRequestHeader("Content-Type", u.contentType);
            b.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers)b.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(f, b, u) === !1 || 2 === $))return b.abort();
            y = "abort";
            for (s in{success: 1, error: 1, complete: 1})b[s](u[s]);
            c = F(qt, u, t, b);
            if (!c)i(-1, "No Transport"); else {
                b.readyState = 1;
                if (l)_.trigger("ajaxSend", [b, u]);
                if (u.async && u.timeout > 0)o = setTimeout(function () {
                    b.abort("timeout")
                }, u.timeout);
                try {
                    $ = 1;
                    c.send(v, i)
                } catch (x) {
                    if ($ < 2)i(-1, x); else throw x
                }
            }
            return b
        },
        getJSON: function (e, t, i) {
            return se.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return se.get(e, void 0, t, "script")
        }
    });
    se.each(["get", "post"], function (e, t) {
        se[t] = function (e, i, n, s) {
            if (se.isFunction(i)) {
                s = s || n;
                n = i;
                i = void 0
            }
            return se.ajax({url: e, type: t, dataType: s, data: i, success: n})
        }
    });
    se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        se.fn[t] = function (e) {
            return this.on(t, e)
        }
    });
    se._evalUrl = function (e) {
        return se.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    se.fn.extend({
        wrapAll: function (e) {
            if (se.isFunction(e))return this.each(function (t) {
                se(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = se(e, this[0].ownerDocument).eq(0).clone(!0);
                if (this[0].parentNode)t.insertBefore(this[0]);
                t.map(function () {
                    var e = this;
                    for (; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (se.isFunction(e))return this.each(function (t) {
                se(this).wrapInner(e.call(this, t))
            }); else return this.each(function () {
                var t = se(this), i = t.contents();
                if (i.length)i.wrapAll(e); else t.append(e)
            })
        }, wrap: function (e) {
            var t = se.isFunction(e);
            return this.each(function (i) {
                se(this).wrapAll(t ? e.call(this, i) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!se.nodeName(this, "body"))se(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    se.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || se.css(e, "display"))
    };
    se.expr.filters.visible = function (e) {
        return !se.expr.filters.hidden(e)
    };
    var Vt = /%20/g, Gt = /\[\]$/, Yt = /\r?\n/g, Xt = /^(?:submit|button|image|reset|file)$/i, Jt = /^(?:input|select|textarea|keygen)/i;
    se.param = function (e, t) {
        var i, n = [], s = function (e, t) {
            t = se.isFunction(t) ? t() : null == t ? "" : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t)t = se.ajaxSettings && se.ajaxSettings.traditional;
        if (se.isArray(e) || e.jquery && !se.isPlainObject(e))se.each(e, function () {
            s(this.name, this.value)
        }); else for (i in e)U(i, e[i], t, s);
        return n.join("&").replace(Vt, "+")
    };
    se.fn.extend({
        serialize: function () {
            return se.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = se.prop(this, "elements");
                return e ? se.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !se(this).is(":disabled") && Jt.test(this.nodeName) && !Xt.test(e) && (this.checked || !Ne.test(e))
            }).map(function (e, t) {
                var i = se(this).val();
                return null == i ? null : se.isArray(i) ? se.map(i, function (e) {
                    return {name: t.name, value: e.replace(Yt, "\r\n")}
                }) : {name: t.name, value: i.replace(Yt, "\r\n")}
            }).get()
        }
    });
    se.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
    } : W;
    var Kt = 0, Qt = {}, Zt = se.ajaxSettings.xhr();
    if (e.ActiveXObject)se(e).on("unload", function () {
        for (var e in Qt)Qt[e](void 0, !0)
    });
    ie.cors = !!Zt && "withCredentials" in Zt;
    Zt = ie.ajax = !!Zt;
    if (Zt)se.ajaxTransport(function (e) {
        if (!e.crossDomain || ie.cors) {
            var t;
            return {
                send: function (i, n) {
                    var s, r = e.xhr(), a = ++Kt;
                    r.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)for (s in e.xhrFields)r[s] = e.xhrFields[s];
                    if (e.mimeType && r.overrideMimeType)r.overrideMimeType(e.mimeType);
                    if (!e.crossDomain && !i["X-Requested-With"])i["X-Requested-With"] = "XMLHttpRequest";
                    for (s in i)if (void 0 !== i[s])r.setRequestHeader(s, i[s] + "");
                    r.send(e.hasContent && e.data || null);
                    t = function (i, s) {
                        var o, l, c;
                        if (t && (s || 4 === r.readyState)) {
                            delete Qt[a];
                            t = void 0;
                            r.onreadystatechange = se.noop;
                            if (s) {
                                if (4 !== r.readyState)r.abort()
                            } else {
                                c = {};
                                o = r.status;
                                if ("string" == typeof r.responseText)c.text = r.responseText;
                                try {
                                    l = r.statusText
                                } catch (d) {
                                    l = ""
                                }
                                if (!o && e.isLocal && !e.crossDomain)o = c.text ? 200 : 404; else if (1223 === o)o = 204
                            }
                        }
                        if (c)n(o, l, c, r.getAllResponseHeaders())
                    };
                    if (!e.async)t(); else if (4 === r.readyState)setTimeout(t); else r.onreadystatechange = Qt[a] = t
                }, abort: function () {
                    if (t)t(void 0, !0)
                }
            }
        }
    });
    se.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                se.globalEval(e);
                return e
            }
        }
    });
    se.ajaxPrefilter("script", function (e) {
        if (void 0 === e.cache)e.cache = !1;
        if (e.crossDomain) {
            e.type = "GET";
            e.global = !1
        }
    });
    se.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i = he.head || se("head")[0] || he.documentElement;
            return {
                send: function (n, s) {
                    t = he.createElement("script");
                    t.async = !0;
                    if (e.scriptCharset)t.charset = e.scriptCharset;
                    t.src = e.url;
                    t.onload = t.onreadystatechange = function (e, i) {
                        if (i || !t.readyState || /loaded|complete/.test(t.readyState)) {
                            t.onload = t.onreadystatechange = null;
                            if (t.parentNode)t.parentNode.removeChild(t);
                            t = null;
                            if (!i)s(200, "success")
                        }
                    };
                    i.insertBefore(t, i.firstChild)
                }, abort: function () {
                    if (t)t.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [], ti = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = ei.pop() || se.expando + "_" + Nt++;
            this[e] = !0;
            return e
        }
    });
    se.ajaxPrefilter("json jsonp", function (t, i, n) {
        var s, r, a, o = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) {
            s = t.jsonpCallback = se.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
            if (o)t[o] = t[o].replace(ti, "$1" + s); else if (t.jsonp !== !1)t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s;
            t.converters["script json"] = function () {
                if (!a)se.error(s + " was not called");
                return a[0]
            };
            t.dataTypes[0] = "json";
            r = e[s];
            e[s] = function () {
                a = arguments
            };
            n.always(function () {
                e[s] = r;
                if (t[s]) {
                    t.jsonpCallback = i.jsonpCallback;
                    ei.push(s)
                }
                if (a && se.isFunction(r))r(a[0]);
                a = r = void 0
            });
            return "script"
        }
    });
    se.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e)return null;
        if ("boolean" == typeof t) {
            i = t;
            t = !1
        }
        t = t || he;
        var n = ue.exec(e), s = !i && [];
        if (n)return [t.createElement(n[1])];
        n = se.buildFragment([e], t, s);
        if (s && s.length)se(s).remove();
        return se.merge([], n.childNodes)
    };
    var ii = se.fn.load;
    se.fn.load = function (e, t, i) {
        if ("string" != typeof e && ii)return ii.apply(this, arguments);
        var n, s, r, a = this, o = e.indexOf(" ");
        if (o >= 0) {
            n = se.trim(e.slice(o, e.length));
            e = e.slice(0, o)
        }
        if (se.isFunction(t)) {
            i = t;
            t = void 0
        } else if (t && "object" == typeof t)r = "POST";
        if (a.length > 0)se.ajax({url: e, type: r, dataType: "html", data: t}).done(function (e) {
            s = arguments;
            a.html(n ? se("<div>").append(se.parseHTML(e)).find(n) : e)
        }).complete(i && function (e, t) {
                a.each(i, s || [e.responseText, t, e])
            });
        return this
    };
    se.expr.filters.animated = function (e) {
        return se.grep(se.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ni = e.document.documentElement;
    se.offset = {
        setOffset: function (e, t, i) {
            var n, s, r, a, o, l, c, d = se.css(e, "position"), u = se(e), f = {};
            if ("static" === d)e.style.position = "relative";
            o = u.offset();
            r = se.css(e, "top");
            l = se.css(e, "left");
            c = ("absolute" === d || "fixed" === d) && se.inArray("auto", [r, l]) > -1;
            if (c) {
                n = u.position();
                a = n.top;
                s = n.left
            } else {
                a = parseFloat(r) || 0;
                s = parseFloat(l) || 0
            }
            if (se.isFunction(t))t = t.call(e, i, o);
            if (null != t.top)f.top = t.top - o.top + a;
            if (null != t.left)f.left = t.left - o.left + s;
            if ("using" in t)t.using.call(e, f); else u.css(f)
        }
    };
    se.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                se.offset.setOffset(this, e, t)
            });
            var t, i, n = {top: 0, left: 0}, s = this[0], r = s && s.ownerDocument;
            if (r) {
                t = r.documentElement;
                if (!se.contains(t, s))return n;
                if (typeof s.getBoundingClientRect !== xe)n = s.getBoundingClientRect();
                i = G(r);
                return {
                    top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }
            }
        }, position: function () {
            if (this[0]) {
                var e, t, i = {top: 0, left: 0}, n = this[0];
                if ("fixed" === se.css(n, "position"))t = n.getBoundingClientRect(); else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!se.nodeName(e[0], "html"))i = e.offset();
                    i.top += se.css(e[0], "borderTopWidth", !0);
                    i.left += se.css(e[0], "borderLeftWidth", !0)
                }
                return {
                    top: t.top - i.top - se.css(n, "marginTop", !0),
                    left: t.left - i.left - se.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || ni;
                for (; e && !se.nodeName(e, "html") && "static" === se.css(e, "position");)e = e.offsetParent;
                return e || ni
            })
        }
    });
    se.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var i = /Y/.test(t);
        se.fn[e] = function (n) {
            return Ee(this, function (e, n, s) {
                var r = G(e);
                if (void 0 === s)return r ? t in r ? r[t] : r.document.documentElement[n] : e[n];
                if (r)r.scrollTo(!i ? s : se(r).scrollLeft(), i ? s : se(r).scrollTop()); else e[n] = s
            }, e, n, arguments.length, null)
        }
    });
    se.each(["top", "left"], function (e, t) {
        se.cssHooks[t] = C(ie.pixelPosition, function (e, i) {
            if (i) {
                i = nt(e, t);
                return tt.test(i) ? se(e).position()[t] + "px" : i
            }
        })
    });
    se.each({Height: "height", Width: "width"}, function (e, t) {
        se.each({padding: "inner" + e, content: t, "": "outer" + e}, function (i, n) {
            se.fn[n] = function (n, s) {
                var r = arguments.length && (i || "boolean" != typeof n), a = i || (n === !0 || s === !0 ? "margin" : "border");
                return Ee(this, function (t, i, n) {
                    var s;
                    if (se.isWindow(t))return t.document.documentElement["client" + e];
                    if (9 === t.nodeType) {
                        s = t.documentElement;
                        return Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])
                    }
                    return void 0 === n ? se.css(t, i, a) : se.style(t, i, n, a)
                }, t, r ? n : void 0, r, null)
            }
        })
    });
    se.fn.size = function () {
        return this.length
    };
    se.fn.andSelf = se.fn.addBack;
    if ("function" == typeof define && define.amd)define("jquery", [], function () {
        return se
    });
    var si = e.jQuery, ri = e.$;
    se.noConflict = function (t) {
        if (e.$ === se)e.$ = ri;
        if (t && e.jQuery === se)e.jQuery = si;
        return se
    };
    if (typeof t === xe)e.jQuery = e.$ = se;
    return se
});
I$(35, function (e) {
    $.pullToRefresh = function (e, t) {
        var i = !!("ontouchstart" in window);
        var n = {
            pluginName: "pullToRefresh",
            version: "0.0.1",
            distance: 80,
            clazz: "",
            msg: {pullText: "下拉刷新...", releaseText: "松开刷新   ", loadingText: "正在加载..."},
            locked: !1,
            template: '<div class="m-pullToRefresh {clazz}" style="height: 0px;overflow: hidden;"><div class="message"><img class="u-rotate" src="res/3g/images/loading-2.gif" width="30px" /><span>{text}</span></div></div>',
            callback: $.noop
        };
        var s = this, r = $(document), a = $(e), o, l, c, d = !1, u = !1;
        s.settings = {};
        s.init = function () {
            if (!i)throw"Browser is not support this plugin!";
            s.settings = $.extend({}, n, t);
            s.initNode()
        };
        s.initNode = function () {
            var e = s.settings, t = e.template.replace("{clazz}", e.clazz).replace("{text}", e.msg.pullText);
            a.prepend(t);
            l = a.find(".m-pullToRefresh i");
            c = a.find(".m-pullToRefresh span");
            o = a.find(".m-pullToRefresh");
            a.on("touchstart", f.bind(this)).on("touchmove", _.bind(this)).on("touchend", h.bind(this))
        };
        s.reset = function () {
            o.css({height: 0});
            u = !1;
            this.setLocked(!1)
        };
        s.setLocked = function (e) {
            var t = s.settings;
            t.locked = !!e
        };
        var f = function (e) {
            s.startPageY = e.originalEvent.touches[0].pageY;
            s.startScrollTop = a.scrollTop()
        };
        var _ = function (e) {
            var t = s.settings, i = e.originalEvent.touches[0].pageY, n = i - s.startPageY;
            if (u)e.preventDefault();
            if (a.scrollTop() <= 0 && n > 0 && !u && !t.locked) {
                if (r.scrollTop() > 0)return;
                e.preventDefault();
                p(o, 0);
                if (n > t.distance) {
                    n = t.distance + (n - t.distance) / (.015 * n);
                    d = !0;
                    c.text(t.msg.releaseText)
                } else {
                    c.text(t.msg.pullText);
                    d = !1
                }
                o.css({height: n})
            }
        };
        var h = function (e) {
            var t = s.settings;
            p(o, 350);
            if (d && !u) {
                o.css({height: .6 * t.distance});
                c.text(t.msg.loadingText);
                u = !0;
                t.callback()
            } else if (!u)o.css({
                height: 0
            });
            d = !1
        };
        var p = function (e, t) {
            e.css({"-webkit-transition": "height " + t + "ms", transition: "height " + t + "ms"})
        };
        s.init()
    };
    $.fn.pullToRefresh = function (e) {
        return this.each(function () {
            if (void 0 == $(this).data("pullToRefresh")) {
                var t = new $.pullToRefresh(this, e);
                $(this).data("pullToRefresh", t)
            }
        })
    }
}, 170);
window.__YSFWINTYPE__ = Number("2");
window.__YSFTHEMELAYEROUT__ = 1;
window.__YSFBGCOLOR__ = "0";
window.__YSFBGTONE__ = "1";
window.__YSFSDKADR__ = "https://qiyukf.com";
window.ysf = window.ysf || {ROOT: "https://qiyukf.com"};
!function () {
    if (!window.localStorage || !window.postMessage)throw"not support service";
    var util = {
        isMobilePlatform: function () {
            if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent))return !0; else return !1
        }, createAjax: function () {
            var e = null;
            var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            if (window.XMLHttpRequest) {
                e = new XMLHttpRequest;
                if ("withCredentials" in e)return e
            }
            if (window.xDomainRequest)e = new Window.xDomainRequest;
            return e
        }, ajax: function (conf) {
            var type = conf.type || "get", url = conf.url, data = conf.data, success = conf.success, error = conf.error;
            var xhr = util.createAjax();
            if (xhr) {
                try {
                    xhr.open(type, url)
                } catch (ex) {
                    error();
                    return
                }
                xhr.onreadystatechange = function () {
                    if (4 == xhr.readyState)if (200 === xhr.status)success(eval("(" + xhr.responseText + ")")); else error()
                };
                if ("GET" == type.toUpperCase())xhr.send(null); else {
                    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    xhr.send(data)
                }
            } else error()
        }, findLocalItems: function (e, t) {
            var i, n = [], s;
            for (i in localStorage)if (i.match(e) || !e && "string" == typeof i) {
                s = !t ? localStorage.getItem(i) : JSON.parse(localStorage.getItem(i));
                n.push({key: i, val: s})
            }
            return n
        }, clearLocalItems: function (e) {
            for (var t = 0; t < e.length; t++)window.localStorage.removeItem(e[t].key)
        }, addEvent: function (e, t, i) {
            if (e.addEventListener)e.addEventListener(t, i, !1); else if (e.attachEvent)e.attachEvent("on" + t, i)
        }, mergeUrl: function (e, t) {
            var i = e.split("?"), n = i.shift(), s = util.query2Object(i.shift() || "", "&");
            for (var r in t)s[r] = t[r];
            for (var r in s)i.push(r + "=" + (s[r] || ""));
            return n + "?" + i.join("&")
        }, query2Object: function (e, t) {
            var i = e.split(t), n = {};
            for (var s = 0; s < i.length; s++) {
                var r = i[s], a = (r || "").split("="), o = a.shift();
                if (o)n[decodeURIComponent(o)] = decodeURIComponent(a.join("=")); else;
            }
            return n
        }, isObject: function (e) {
            return "[object object]" === {}.toString.call(e).toLowerCase()
        }, isFunction: function (e) {
            return "[object function]" === {}.toString.call(e).toLowerCase()
        }, notification: function () {
            var e, t;
            return function (i) {
                if (e) {
                    clearTimeout(t);
                    e.close()
                }
                if (window.Notification && "granted" !== window.Notification.permission)Notification.requestPermission();
                if (window.Notification && "denied" != window.Notification.permission) {
                    e = new Notification(i.notify, {tag: i.tag, body: i.body, icon: window.__YSFSDKADR__ + i.icon});
                    util.playAudio();
                    e.onclick = function () {
                        e && e.close();
                        window.focus();
                        ysf.openLayer();
                        ysf.NotifyMsgAndBubble({category: "clearCircle"})
                    };
                    t = window.setTimeout(function () {
                        e.close()
                    }, 2e4)
                }
            }
        }(), playAudio: function () {
            var e = document.createElement("audio");
            e.src = window.__YSFSDKADR__ + "/prd/res/audio/message.mp3?26b875bad3e46bf6661b16a5d0080870";
            return function () {
                e.play()
            }
        }()
    };
    window.ysf = window.ysf || {};
    ysf.ROOT = ysf.ROOT || "";
    ysf.VERSION = "2.8.0";
    var winParam = {};
    var cache = {};
    var proxy;
    var chatProxy;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var firstBtnClick = !0;
    var CircleNumberFlag = 0;
    var msgSessionIds = [];
    var each = function (e, t) {
        if (e && t)for (var i in e)if (e.hasOwnProperty(i))t.call(null, i, e[i])
    };
    var rand = function (e) {
        if (e)return "ysf-" + e;
        var t = [];
        for (var i = 0, n; i < 20; ++i) {
            n = Math.floor(Math.random() * chars.length);
            t.push(chars.charAt(n))
        }
        return t.join("").toLowerCase()
    };
    var migrate = function () {
        var e;
        if (/YSF_UID\s*=\s*(.*?)(?=;|$)/i.test(document.cookie))e = RegExp.$1;
        if (e)localStorage.setItem("YSF_UID", e);
        var e;
        if (/YSF_LAST\s*=\s*(.*?)(?=;|$)/i.test(document.cookie))e = RegExp.$1;
        if (e)localStorage.setItem("YSF_LAST", e);
        var t = new Date(1990, 11, 30).toGMTString();
        document.cookie = "YSF_UID=;path=/;expires=" + t;
        document.cookie = "YSF_LAST=;path=/;expires=" + t
    };
    var cmap = {
        ack: function (e) {
            cache.timestamp = parseInt(e, 10);
            if (cache.onackdone) {
                cache.onackdone();
                delete cache.onackdone
            }
        }, rdy: function (e) {
            syncProfile()
        }
    };
    var wrap = function () {
        var e = document.createElement("div"), t = e.style, i = {
            top: 0,
            left: 0,
            visibility: "hidden",
            position: "absolute",
            width: "1px",
            height: "1px"
        };
        each(i, function (e, i) {
            t[e] = i
        });
        document.body.appendChild(e);
        return e
    };
    var merge = function (e) {
        each(e, function (e, t) {
            cache[e] = t
        })
    };
    var refresh = function (e) {
        e = e || "";
        var t = device(), i = lastUID();
        if (!t || "" == e && "" != i) {
            t = e || t || rand(e);
            sendMsg("synckey:" + t)
        }
        cache.device = t;
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-UID", e || t);
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-LAST", e || "")
    };
    var serialize = function (e) {
        var t = [];
        each(e, function (e, i) {
            t.push(encodeURIComponent(e) + "=" + encodeURIComponent(i))
        });
        return t.join("&")
    };
    var device = function () {
        return localStorage.getItem("YSF-" + cache["appKey"].toUpperCase() + "-UID") || ""
    };
    var lastUID = function () {
        return localStorage.getItem("YSF-" + cache["appKey"].toUpperCase() + "-LAST") || ""
    };
    var updateDevice = function () {
        cache.device = rand();
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-UID", cache.device);
        sendMsg("synckey:" + cache.device)
    };
    var sendChatMsg = function (e, t) {
        chatProxy.contentWindow.postMessage("" + e + ":" + JSON.stringify(t), "*")
    };
    var visit = function () {
        if (cache.appKey) {
            var e = new Image, t = serialize({uri: location.href, title: document.title, appkey: cache.appKey});
            e.src = ysf.DOMAIN + "webapi/user/accesshistory.action?" + t
        }
    };
    var syncProfile = function () {
        sendMsg("KEY:" + cache.appKey || "");
        var e = {title: document.title || ""};
        each({name: "", email: "", mobile: "", profile: "data"}, function (t, i) {
            var n = cache[i] || cache[t];
            if (null != n)e[t] = n
        });
        e.referrer = location.href;
        e.uid = cache.uid || "";
        sendMsg("USR:" + serialize(e))
    };
    var syncCustomProfile = function (e) {
        sendMsg("PRODUCT:" + serialize(e))
    };
    var sendMsg = function (e) {
        try {
            proxy.contentWindow.postMessage(e, "*")
        } catch (t) {
        }
    };
    var msgNotifyLock = function () {
        var e = null;
        return function (t, i) {
            var n = ("YSFMSG-" + cache["appKey"] + "-" + t.id).toUpperCase();
            if (e)clearTimeout(e);
            setTimeout(function () {
                if (null == window.localStorage.getItem(n)) {
                    window.localStorage.setItem(n, 1);
                    i(!0)
                }
                i(!1)
            }, 100 * cache["dvcTimer"])
        }
    }();
    var receiveMsg = function (e) {
        if (e.origin == ysf.ROOT) {
            var t = (e.data || "").split(":"), i = t.shift();
            if ("pkg" != i) {
                var n = cmap[(i || "").toLowerCase()];
                if (n)n(t.join(":"))
            } else receivePkg(JSON.parse(t.join(":")))
        }
    };
    var receivePkg = function (e) {
        var t = {
            notify: function (e) {
                var t = "YSF-" + device() + "-MSGNUMBERS";
                msgNotifyLock(e, function (i) {
                    var n = Number(window.localStorage.getItem(t) || 0), s = i ? ++n : n;
                    cache["notifyContent"] = e;
                    cache["notifyNumber"] = s;
                    if (i)ysf._unread(ysf.getUnreadMsg());
                    ysf.NotifyMsgAndBubble({
                        category: "notifyCircle",
                        data: {circleNum: s, notifyCnt: e.content, type: e.type}
                    })
                })
            }, winfocus: function (e) {
                util.notification(e)
            }, closeIframe: function (e) {
                var t = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO"), i = document.getElementById("YSF-BTN-HOLDER");
                t.className = "ysf-chat-layer";
                t.setAttribute("data-switch", 0);
                try {
                    sendChatMsg("status", {layerOpen: 0})
                } catch (n) {
                }
                if (0 == cache["hidden"])i.style.display = "block"
            }, leaveOk: function (e) {
                if (util.resetTimer)clearTimeout(util.resetTimer);
                util.resetTimer = setTimeout(function () {
                    reset()
                }, 1e3)
            }, pushMsg: function (e) {
                if (e.data.sdkAppend) {
                    CircleNumberFlag += 1;
                    msgSessionIds.push(e.data.msgSessionId);
                    ysf.NotifyMsgAndBubble({
                        category: "notifyCircle",
                        data: {circleNum: CircleNumberFlag, notifyCnt: e.data.content, type: "text"}
                    })
                }
            }
        };
        var i = t[e.category];
        if (i)i(e)
    };
    var reset = function () {
        var e = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO"), t = document.getElementById("YSF-BTN-HOLDER");
        document.body.removeChild(e);
        document.body.removeChild(t);
        ysf.init(cache["imgSrc"]);
        firstBtnClick = !0
    };
    var buildProxy = function () {
        if (!proxy) {
            if (window.addEventListener)window.addEventListener("message", receiveMsg, !1); else window.attachEvent("onmessage", receiveMsg);
            proxy = wrap();
            proxy.innerHTML = '<iframe style="height:0px; width:0px;" src="' + ysf.RESROOT + "res/delegate.html?" + +new Date + '"></iframe>';
            proxy = proxy.getElementsByTagName("IFRAME")[0]
        }
    };
    var initWinConfig = function () {
        var e = window.screen || {};
        var t = {
            base: ",location=0,menubar=0,scrollbars=0,status=0,toolbar=0,resizable=0",
            winNoInfo: {
                width: 600,
                height: 630,
                top: Math.max(0, ((e.height || 0) - 630) / 2),
                left: Math.max(0, ((e.width || 0) - 600) / 2)
            },
            winHasInfo: {
                width: 842,
                height: 632,
                top: Math.max(0, ((e.height || 0) - 630) / 2),
                left: Math.max(0, ((e.width || 0) - 840) / 2)
            },
            layerNoInfo: {param: ""},
            layerHasInfo: {param: ""}
        };
        t.winNoInfo.param = "top=" + t.winNoInfo.top + ",left=" + t.winNoInfo.left + ",width=" + t.winNoInfo.width + ",height=" + t.winNoInfo.height + t.base;
        t.winHasInfo.param = "top=" + t.winHasInfo.top + ",left=" + t.winHasInfo.left + ",width=" + t.winHasInfo.width + ",height=" + t.winHasInfo.height + t.base;
        if (util.isMobilePlatform())cache["winType"] = 3;
        switch (cache["winType"]) {
            case 1:
                winParam = cache["corpInfo"] ? t.layerHasInfo : t.layerNoInfo;
                winParam.type = "layer";
                break;
            case 3:
                winParam = {type: "url", param: ""};
                break;
            default:
                winParam = cache["corpInfo"] ? t.winHasInfo : t.winNoInfo;
                winParam.type = "win"
        }
    };
    var createDvcTimer = function () {
        var e = localStorage.getItem("YSFDVC-" + cache.device), t = 0;
        if (null != e)t = Number(e) + 1;
        localStorage.setItem("YSFDVC-" + cache.device, t);
        cache.dvctimer = t
    };
    ysf.style = function (e) {
        if (e) {
            var t = document.getElementsByTagName("head")[0] || document.body, i = document.createElement("style");
            i.type = "text/css";
            t.appendChild(i);
            if ("textContent" in i)i.textContent = e; else if (i.styleSheet)i.styleSheet.cssText = e
        }
    };
    ysf.openInline = function (e, t) {
        var i = ysf.url.apply(ysf, arguments);
        if (i) {
            i = util.mergeUrl(i, {w: cache["winType"]});
            var n = function (e) {
                var t = document.createElement("iframe");
                t.src = e;
                t.id = "YSF-IFRAME-LAYER";
                t.style.width = "100%";
                t.style.height = "100%";
                return t
            };
            chatProxy = n(i);
            e.appendChild(chatProxy);
            util.addEvent(chatProxy, "load", function () {
                if (1 == t)sendChatMsg("doconnect", {doconnect: 1}); else if (0 == t && 1 == cache["pushswitch"])sendChatMsg("dopushmsg", {
                    pushMsgSwitch: 1, pushMsgId: cache["pushmsgid"]
                })
            })
        }
    };
    ysf.entry = function (e) {
        var t = function () {
            var t = document.createElement("div"), i = "YSF-CUSTOM-ENTRY-" + window.__YSFTHEMELAYEROUT__;
            if (window.__YSFTHEMELAYEROUT__)t.className = "layer-" + window.__YSFTHEMELAYEROUT__;
            t.setAttribute("id", "YSF-BTN-HOLDER");
            if (1 == cache["hidden"])t.style.display = "none";
            document.body.appendChild(t);
            t.onclick = function () {
                ysf.open()
            };
            t.innerHTML = '<div id="' + i + '"><img src="' + e.src + '"/></div>';
            return t
        };
        var i = function (e) {
            var t = document.createElement("span");
            t.setAttribute("id", "YSF-BTN-CIRCLE");
            e.appendChild(t)
        };
        var n = function (e) {
            var t = document.createElement("div"), i = document.createElement("div"), n = document.createElement("span"), s = document.createElement("span");
            t.setAttribute("id", "YSF-BTN-BUBBLE");
            i.setAttribute("id", "YSF-BTN-CONTENT");
            n.setAttribute("id", "YSF-BTN-ARROW");
            s.setAttribute("id", "YSF-BTN-CLOSE");
            s.onclick = function (e) {
                e.stopPropagation();
                e.preventDefault();
                ysf.NotifyMsgAndBubble({category: "clearCircle"})
            };
            e.appendChild(t);
            t.appendChild(i);
            t.appendChild(n);
            t.appendChild(s)
        };
        var s = t();
        i(s);
        n(s)
    };
    ysf.entryPanel = function (e) {
        var t = document.createElement("div"), i = 1 == cache["winType"] ? 0 : 1;
        parseInt(e) ? t.setAttribute("id", "YSF-PANEL-CORPINFO") : t.setAttribute("id", "YSF-PANEL-INFO");
        t.className = "ysf-chat-layer";
        document.body.appendChild(t);
        t.setAttribute("data-switch", i);
        try {
            sendChatMsg("status", {layerOpen: i})
        } catch (n) {
        }
        createDvcTimer();
        ysf.openInline(t, cache["dvcswitch"])
    };
    ysf.invite = function () {
        var e, t, i, n, s = document.createDocumentFragment();
        var r = function () {
            if (!e || !t) {
                e = document.createElement("div");
                e.className = "ysf-online-invite-mask";
                t = document.createElement("div");
                t.className = "ysf-online-invite-wrap";
                t.innerHTML = '<div class="ysf-online-invite"><div class="text"></div><div class="close" title="关闭"></div><img/></div>';
                var i = t.childNodes[0], s = i.childNodes, r = s[0];
                if ("innerText" in r)r.innerText = n.text; else r.textContent = n.text;
                i.onclick = l;
                s[1].onclick = c;
                s[2].onload = function () {
                    window.setTimeout(o, 100)
                }
            }
        };
        var a = function (e) {
            t.getElementsByTagName("IMG")[0].src = e
        };
        var o = function () {
            var e = t.childNodes[0];
            t.style.visibility = "visible"
        };
        var l = function () {
            ysf.open();
            d()
        };
        var c = function (t) {
            t = t || window.event || {};
            if (t.stopPropagation)t.stopPropagation(); else t.cancelBubble = !0;
            if (e.parentNode != s)d();
            if (0 != n.reject)window.setTimeout(u, 1e3 * n.interval)
        };
        var d = function () {
            s.appendChild(t);
            a(ysf.RESROOT + "res/nej_blank.gif")
        };
        var u = function () {
            var e = +new Date - (cache.timestamp || 0);
            if (e < 5e3);
            r();
            t.style.visibility = "hidden";
            document.body.appendChild(t);
            a(n.src)
        };
        return function (e) {
            if (!n)n = e || {};
            var t = function () {
                window.setTimeout(u, 1e3 * (n.timeout || 0))
            };
            if (n.ignore || cache.timestamp)t(); else cache.onackdone = t
        }
    }();
    ysf.openLayer = function () {
        return function (e, t) {
            var i = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO"), n = document.getElementById("YSF-BTN-HOLDER");
            if (i) {
                n.style.display = "none";
                i.className = "ysf-chat-layer ysf-chat-layeropen";
                i.setAttribute("data-switch", 1);
                try {
                    sendChatMsg("status", {layerOpen: 1})
                } catch (s) {
                }
            }
        }
    }();
    ysf.openWin = function () {
        return function (e, t) {
            window.open(e, "YSF_SERVICE_" + (cache.appKey || "").toUpperCase(), t.param)
        }
    }();
    ysf.openUrl = function () {
        return function (e, t) {
            window.open(e, "YSF_SERVICE_" + (cache.appKey || "").toUpperCase(), t.param)
        }
    }();
    ysf.NotifyMsgAndBubble = function (e) {
        var t = {
            clearCircle: function (e) {
                var t = "YSF-" + device() + "-MSGNUMBERS", i = document.getElementById("YSF-BTN-CIRCLE"), n = document.getElementById("YSF-BTN-BUBBLE");
                n.style.display = "none";
                i.style.display = "none";
                localStorage.setItem(t, 0);
                cache["notifyNumber"] = 0;
                cache["notifyContent"] = "";
                CircleNumberFlag = 0
            }, notifyCircle: function (e) {
                var t = "YSF-" + device() + "-MSGNUMBERS";
                localStorage.setItem(t, e.data.circleNum);
                var i = document.getElementById("YSF-BTN-BUBBLE"), n = document.getElementById("YSF-BTN-CONTENT"), s = document.getElementById("YSF-BTN-CIRCLE");
                var r = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO");
                var a = {
                    image: function (e) {
                        return "[图片]"
                    }, audio: function (e) {
                        return "[音频]"
                    }, text: function (e) {
                        return e
                    }
                };
                if (0 == r.getAttribute("data-switch") && a[e.data.type] && 0 == cache["sdkCustom"]) {
                    s.style.display = "block";
                    i.style.display = "block";
                    s.innerHTML = e.data.circleNum > 99 ? "99+" : e.data.circleNum;
                    n.innerHTML = a[e.data.type](e.data.notifyCnt)
                }
            }
        };
        var i = t[e.category];
        if (i)i(e)
    };
    ysf.getUnreadMsg = function () {
        return {
            type: cache["notifyContent"].type,
            message: cache["notifyContent"].content,
            total: cache["notifyNumber"]
        }
    };
    ysf.config = function (e) {
        if (e) {
            merge(e);
            if (cache.appKey) {
                refresh(e.uid);
                visit();
                syncProfile();
                initWinConfig()
            }
        }
    };
    ysf.url = function () {
        if (!cache.appKey)return "";
        var e = {
            k: cache.appKey,
            u: device(),
            gid: cache.groupid || 0,
            sid: cache.staffid || 0,
            dvctimer: cache.dvctimer || 0
        };
        each({n: "name", e: "email", m: "mobile"}, function (t, i) {
            var n = cache[i];
            if (n)e[t] = n
        });
        e.t = encodeURIComponent(document.title);
        return ysf.IMROOT + "?" + serialize(e)
    };
    ysf.logoff = function () {
        updateDevice();
        util.clearLocalItems(util.findLocalItems(/msgnumbers/gi))
    };
    ysf.openByLink = function (e) {
        var t = ysf.url();
        if (t) {
            e = e || {};
            var i = e.target || e.srcElement;
            if (i && "A" == i.tagName)i.href = t
        }
    };
    ysf.product = function () {
        var e = function (e) {
            e.title = e.title && e.title.length > 100 ? e.title.slice(0, 100) : e.title;
            e.desc = e.desc && e.desc.length > 300 ? e.desc.slice(0, 300) : e.desc;
            e.note = e.note && e.note.length > 100 ? e.note.slice(0, 100) : e.note;
            return e
        };
        return function (t) {
            t = e(t);
            syncCustomProfile(t)
        }
    }();
    ysf.open = function () {
        var e = ysf.url.apply(ysf, arguments);
        if (e)switch (winParam.type) {
            case"win":
                ysf.openWin(e, winParam);
                break;
            case"layer":
                ysf.openLayer(e, winParam);
                try {
                    if (firstBtnClick && 0 == cache["dvcswitch"] && 0 == cache["pushswitch"]) {
                        sendChatMsg("doconnect", {doconnect: 1});
                        firstBtnClick = !1
                    }
                } catch (t) {
                }
                if (0 == cache["dvcswitch"] && 1 == cache["pushswitch"] || CircleNumberFlag > 0) {
                    sendChatMsg("dopushmsgread", {ids: msgSessionIds});
                    msgSessionIds = []
                }
                ysf.NotifyMsgAndBubble({category: "clearCircle"});
                break;
            case"url":
                ysf.openUrl(e, winParam)
        }
    };
    !function () {
        each({
            DOMAIN: ysf.ROOT + "/", IMROOT: function () {
                var e = 1 == window.__YSFWINTYPE__ ? ysf.ROOT + "/client/iframe" : ysf.ROOT + "/client";
                if (util.isMobilePlatform())e = ysf.ROOT + "/client";
                return e
            }(), RESROOT: ysf.ROOT + "/sdk/"
        }, function (e, t) {
            if (null == ysf[e])ysf[e] = t
        });
        migrate();
        buildProxy()
    }();
    ysf.init = function (e) {
        var t = function () {
            ysf.entry({src: e});
            if (1 == cache["winType"])ysf.entryPanel(cache["corpInfo"])
        };
        setTimeout(function () {
            util.ajax({
                url: ysf.DOMAIN + "webapi/user/dvcSession.action?k=" + cache["appKey"] + "&d=" + cache["device"] + "&f=" + cache["uid"],
                success: function (e) {
                    if (200 == e.code) {
                        cache["dvcswitch"] = e.result.dvcSwitch;
                        cache["pushswitch"] = e.result.pushSwitch || 0;
                        cache["pushmsgid"] = e.result.batchIdList || 0;
                        t()
                    } else {
                        cache["dvcswitch"] = 0;
                        cache["pushswitch"] = 0;
                        t()
                    }
                },
                error: function () {
                    cache["dvcswitch"] = 0;
                    cache["pushswitch"] = 0;
                    t()
                }
            })
        }, 1e3)
    };
    util.addEvent(window, "beforeunload", function () {
        var e = "YSFDVC-" + cache["device"], t = "YSFMSG-" + cache["appKey"], i = Number(localStorage.getItem(e));
        if (i > 0)localStorage.setItem(e, --i);
        util.clearLocalItems(util.findLocalItems(new RegExp(t, "ig")))
    });
    ysf.on = function () {
        var e = {onload: "load", unread: 1};
        return function (t) {
            var i = Object.prototype.toString.call(t).slice(8, -1);
            if (/object/gi.test(i)) {
                for (var n in t)if ("onload" == n && util.isFunction(t[n]))util.addEvent(proxy, e[n], t[n]); else if (util.isFunction(ysf[n]) && util.isFunction(t[n]))ysf["_" + n] = t[n]
            } else console.warn("波比(｡･∀･)ﾉ: 请保持正确的监听姿势...")
        }
    }();
    ysf.getPushMessage = function (e) {
        sendChatMsg("dogetpushmsg", {ids: e})
    };
    ysf._unread = function () {
    };
    ysf.unread = function () {
        return {
            type: cache["notifyContent"].type,
            message: cache["notifyContent"].content,
            total: cache["notifyNumber"]
        }
    }
}();
var __YSFOPTION__ = {
    corpInfo: Number("0"),
    winType: Number("2"),
    sdkCustom: 0,
    hidden: 0,
    appKey: "af9a53ff2a8fbf2fa0726ae3aacb1394"
};
__YSFOPTION__.uid = localStorage.getItem("YSF-" + __YSFOPTION__["appKey"].toUpperCase() + "-UID") || "";
try {
    __YSFOPTION__.profile = JSON.stringify(__YSFOPTION__.profile)
} catch (ex) {
    __YSFOPTION__.profile = ""
}
__YSFOPTION__.imgSrc = "https://qiyukf.com/sdk/res/kefu/custom/1.png";
ysf.config(__YSFOPTION__);
ysf.style(["#YSF-BTN-HOLDER{position: fixed;max-width:30px;max-height:120px;right: 30px; bottom: 0px; cursor: pointer; overflow: visible; filter: alpha(opacity=100);opacity:1;z-index: 9990}", "#YSF-BTN-HOLDER:hover{filter: alpha(opacity=95);opacity:.95}", "#YSF-BTN-HOLDER img{ display: block;overflow: hidden; }", "#YSF-BTN-CIRCLE{display: none;position: absolute;right: -5px;top: -5px;width: auto;min-width: 12px;height: 20px;padding: 0 4px;background-color: #f00;font-size: 12px;line-height: 20px;color: #fff;text-align: center;white-space: nowrap;font-family: sans-serif;border-radius: 10px;z-index:1;}", "#YSF-BTN-HOLDER.layer-1 #YSF-BTN-CIRCLE{top: -30px;}", "#YSF-BTN-HOLDER.layer-2 #YSF-BTN-CIRCLE{top: -30px;}", "#YSF-BTN-HOLDER.layer-3 #YSF-BTN-CIRCLE{top: -30px;}", "#YSF-BTN-HOLDER.layer-4 #YSF-BTN-CIRCLE{top: -30px;}", "#YSF-BTN-HOLDER.layer-5 #YSF-BTN-CIRCLE{top: -30px;}", "#YSF-BTN-HOLDER.layer-6 #YSF-BTN-CIRCLE{top: -5px;}", "#YSF-BTN-BUBBLE{display: none;position: absolute;left: -274px;bottom:0px;width: 278px;height: 80px;box-sizing: border-box;padding: 14px 22px;filter: alpha(opacity=100);opacity:1;background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png) no-repeat;background:url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png)9; background-size: 278px 80px; z-index: 1;}", "#YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE{bottom:9px;}", "#YSF-BTN-HOLDER.layer-2 #YSF-BTN-BUBBLE{bottom:9px;}", "#YSF-BTN-HOLDER.layer-3 #YSF-BTN-BUBBLE{bottom:9px;}", "#YSF-BTN-HOLDER.layer-4 #YSF-BTN-BUBBLE{bottom:9px;}", "#YSF-BTN-HOLDER.layer-5 #YSF-BTN-BUBBLE{bottom:9px;}", "#YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE{bottom:-6px;}", "#YSF-BTN-BUBBLE:hover{filter: alpha(opacity=95);opacity:.95}", "#YSF-BTN-CONTENT{height:45px;padding: 0;white-space: normal;word-break: break-all;text-align: left;font-size: 14px;line-height: 1.6;color: #222;overflow: hidden;z-index: 0;}", "#YSF-BTN-ARROW{ display: none; }", "#YSF-BTN-CLOSE{position: absolute; width:15px; height:15px;right: 4px;top: -3px; filter: alpha(opacity=90); opacity:.9; cursor: pointer; background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;z-index: 1}", "#YSF-BTN-CLOSE:hover{filter: alpha(opacity=100); opacity: 1;}", "#YSF-PANEL-CORPINFO.ysf-chat-layeropen{ width: 511px; height: 470px; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);}", "#YSF-PANEL-CORPINFO{ position: fixed; bottom: 0px; right: 20px; width: 0; height: 0; z-index: 99999; }", "#YSF-PANEL-INFO.ysf-chat-layeropen{ width: 311px; height: 470px; filter: alpha(opacity=100);opacity:1; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);}", "#YSF-PANEL-INFO{ position: fixed; bottom: 0px; right: 20px; width: 0px; height: 0px; filter: alpha(opacity=0);opacity:0;z-index: 99999;}", "#YSF-PANEL-INFO .u-btn{background-color: #F96868}", "#YSF-CUSTOM-ENTRY{background-color: #F96868;}", "#YSF-CUSTOM-ENTRY-0{position: relative;bottom: 24px;width:auto;background-color: #F96868;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-1{position: relative;bottom: 24px;width:auto;background-color: #F96868;border-radius: 14px; box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-2{position: relative;bottom: 24px;width:auto;background-color: #F96868;border-radius: 0;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-3{position: relative;bottom: 24px;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-4{position: relative;bottom: 24px;width:auto;background-color: #F96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-5{position: relative;bottom: 24px;width:auto;background-color: #F96868;border-radius: 5px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}", "#YSF-CUSTOM-ENTRY-6{position: relative;bottom: 0px;width:auto;background-color: #F96868;border-radius:5px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;}", "#YSF-CUSTOM-ENTRY-0 img{max-width: 300px;height:auto;}", "#YSF-CUSTOM-ENTRY-1 img{width:28px;height:auto;}", "#YSF-CUSTOM-ENTRY-2 img{width:58px;height:auto;}", "#YSF-CUSTOM-ENTRY-3 img{width:60px;height:auto;}", "#YSF-CUSTOM-ENTRY-4 img{width:60px;height:auto;}", "#YSF-CUSTOM-ENTRY-5 img{width:60px;height:auto;}", "#YSF-CUSTOM-ENTRY-6 img{width:115px;height:auto;}", "#YSF-IFRAME-LAYER{ border:0; outline:none; }", '.ysf-online-invite-mask{z-index:10000;position:fixed;_position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:#fff;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;}', ".ysf-online-invite-wrap{z-index:10001;position:fixed;_position:absolute;top:50%;left:50%;width:250px;}", ".ysf-online-invite{position:relative;top:-50%;left:-50%;cursor:pointer;}", ".ysf-online-invite img{display:block;width:250px;}", '.ysf-online-invite .text{position:absolute;top:-11px;left:0;right:0;overflow:hidden;margin: 36px 20px 0 67px;line-height:140%;color:#526069;font-size:14px;font-family:"Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";text-align:left;white-space:normal;word-wrap:break-word;}', ".ysf-online-invite .close{position:absolute;top:-6px;right:-6px;width:32px;height:32px;background:url(https://qiyukf.com/sdk/res/img/invite-close.png) no-repeat;cursor:pointer;}"].join(" "));
ysf.init("https://qiyukf.com/sdk/res/kefu/custom/1.png");
I$(273, '<div class="m-imgbox {{duration?\'z-duration\':\'\'}}" ref="mult" >\n  <a  href="javascript:;"class="close" on-click={{this.close($event)}}>&times;</a>\n  <div class="slides" ref=sliders r-style={{ {width: (box.clientWidth * slides.length)+"px"} }} r-transform={{ "translate3d(-" + index * box.clientWidth + "px,0,0)"}}>\n    {{#list slides as slide}}\n    <div class="slide"  r-style={{@(slideStyle)}} r-transform={{ this.transform(slide_index) }}>\n      <div class="inner" r-style={{@(innerStyle)}}>\n        <img src="{{slide}}" >\n      </div>\n    </div>\n    {{/list}}\n  </div>\n  <div class=\'m-pointer ctrls\'>\n    <div class=\'pointer\'>\n      <ul class=\'j-node\'> \n      {{#list slides as slide}}\n        <li on-tap={{this.nav(slide_index)}} class={{index==slide_index?\'z-active\':\'\'}}></li>\n      {{/list}}\n      </ul>\n    </div>\n  </div>\n  <div class="opts"></div>\n</div>');
I$(180, function (e, t, i, n, s) {
    function r(e) {
    }

    return i.extend({
        template: s, duration: 2e3, config: function (i) {
            var n = e._$getPageBox();
            t.extend(i, {
                index: 0,
                scale: 1,
                ratio: 1,
                translate: {x: 0, y: 0},
                tbase: {x: 0, y: 0},
                slides: [],
                clazz: "hide",
                box: n,
                slideStyle: {width: n.clientWidth + "px", height: n.clientHeight + "px"},
                innerStyle: {lineHeight: n.clientHeight + "px"}
            })
        }, transform: function (e) {
            var t = this.data;
            if (e !== this.data.index)return "scale(1) translate3d(0,0,0)"; else return "translate3d(" + (t.translate.x + t.tbase.x) + "px," + (t.translate.y + t.tbase.y) + "px,0)scale(" + ((t.scale || 1) * t.ratio).toFixed(3) + ")"
        }, resetTransform: function () {
            var e = this.data;
            e.tbase = {x: 0, y: 0};
            e.translate = {x: 0, y: 0};
            e.scale = 1;
            e.ratio = 1
        }, close: function (e) {
            this.destroy()
        }, nav: function (e) {
            this.data.index = e
        }, init: function () {
            if (this.$root == this)this.$inject(document.body);
            var e = n(this.$refs.sliders, {stop: !1});
            var i = this;
            var s = this.data;
            var r = !1;
            var a;
            e.addEventListener("dragmove", function (e) {
                e.preventDefault();
                s.duration = !1;
                s.isDrag = !0;
                if (!(s.scale <= 1 || a)) {
                    s.translate = {x: e.x, y: e.y};
                    i.$update()
                }
            });
            e.addEventListener("dragend", function (e) {
                s.isDrag = !1;
                if (s.scale <= 1 || a); else s.tbase = {x: s.translate.x + s.tbase.x, y: s.translate.y + s.tbase.y};
                if (Math.abs(s.tbase.x) > 240 || Math.abs(s.tbase.y) > 240)i.resetTransform(); else s.translate = {
                    x: 0,
                    y: 0
                };
                i.$update()
            });
            e.addEventListener("transform", function (e) {
                s.duration = !1;
                if (s.isDrag) {
                    s.isDrag = !1;
                    if (s.scale <= 1 || a); else s.tbase = {x: s.translate.x + s.tbase.x, y: s.translate.y + s.tbase.y};
                    if (Math.abs(s.tbase.x) > 240 || Math.abs(s.tbase.y) > 240)i.resetTransform(); else s.translate = {
                        x: 0,
                        y: 0
                    }
                }
                a = !0;
                var t = (e.scale - 1) / 2 + 1;
                s.ratio = t;
                i.$update()
            });
            e.addEventListener("touchend", function (e) {
                a = !1;
                if (!(e.touches && e.touches.length > 0)) {
                    a = !1;
                    s.duration = !0;
                    s.scale *= s.ratio;
                    s.ratio = 1;
                    if (s.scale < 1)i.resetTransform();
                    if (s.scale > 2)s.scale = 2;
                    i.$update()
                }
            });
            e.addEventListener("touchstart", t.throttle(function (e) {
                e.preventDefault();
                if (!(e.touches && e.touches.length > 1)) {
                    s.duration = !1;
                    i.$update()
                }
            }, 50));
            e.addEventListener("swip", function (e) {
                e.preventDefault();
                if (1 == s.scale) {
                    i.resetTransform();
                    var t = e.end.y - e.start.y;
                    var n = e.end.x - e.start.x;
                    if (!(Math.abs(t / n) > 3)) {
                        s.index += n < 0 ? 1 : -1;
                        if (s.index >= s.slides.length)s.index = s.slides.length - 1;
                        if (s.index < 0)s.index = 0
                    }
                }
            });
            e.addEventListener("dbtap", function (e) {
                if (1 === s.scale)i.data.scale = 2; else i.resetTransform();
                i.$update()
            })
        }
    }).directive("r-transform", function (e, i) {
        this.$watch(i, function (i) {
            t.transform(e, i)
        })
    })
}, 3, 1, 140, 179, 273);
I$(272, '<div class="w-htable {{preview?\'z-preview\': \'\'}}">\n<div class="colors">\n  {{#list @(colors) as color}}\n  <div class="color">\n    <span class="u-color" style="background-color: {{ @(colorMap[color_index]||colorMap[0])}}"></span>\n    {{color}}\n  </div>\n  {{/list}}\n</div>\n<div class="m-sTableCnt">\n<table class="m-table m-table-bordered {{selected?\'z-selected\': \'\'}}">\n  <thead>\n    <tr>\n      <th class=\'u-corner\'>\n        <div class="corner"></div>\n        <div class="corner corner-2"></div>\n        <span class="bottom">kg</span>\n        <span class="top">cm</span>\n      </th>\n      {{#list @(vaxis.list) as item}}\n      <th>{{@(item)}}</th>\n      {{/list}}\n    </tr>\n  </thead>\n  <tbody>\n    {{#list @(haxis.list) as bd}}\n      <tr>\n        <td>{{@(haxis.list[bd_index])}}</td>\n        {{#list @(vaxis.list) as b}}\n          <td class="box {{selected==body[b_index][bd_index]?\'box-selected\':\'\'}}" style="background-color: {{@(colorHash[body[b_index][bd_index]] || (body[b_index][bd_index]? colorMap[0] :\'\'))}}" >\n            {{@(body[b_index][bd_index])}}\n           </td>\n        {{/list}}\n      </tr>\n    {{/list}}\n  </tbody>\n</table>\n</div>\n</div>');
I$(181, function (e, t, i, n, s) {
    var r = "/rest/helpers";
    var a = s.extend({
        template: n, data: {colorMap: e.helpColors}, config: function (e) {
            t.extend(e, {vaxis: {name: "身高cm", list: []}, haxis: {name: "体重kg", list: []}, body: [], colors: []});
            var i = e.vaxis.list.length, n = e.haxis.list.length, s = e.body;
            for (var r = 0; r < i; r++) {
                if (!s[r])s[r] = [];
                for (var a = 0; a < n; a++)if (null == s[r][a])s[r][a] = ""
            }
            this.resetColor()
        }, init: function () {
            this.supr()
        }, resetColor: function () {
            var e = this.data;
            var t = e.body;
            var i = t.length;
            var n = {}, s, r;
            for (var a = 0; a < i; a++) {
                s = t[a];
                for (var o = 0, l = s.length; o < l; o++) {
                    r = s[o].trim();
                    if (r)if (!n[r])n[r] = {weight: o + a}; else if (o + a < n[r].weight)n[r].weight = o + a
                }
            }
            e.colorHash = {};
            e.colors = Object.keys(n).sort(function (e, t) {
                return n[e].weight - n[t].weight
            });
            e.colors.forEach(function (t, i) {
                e.colorHash[t] = e.colorMap[i]
            })
        }, change: function (e, t, i) {
            var n = i.target.value;
            this.data.body[e][t] = n;
            this.resetColor()
        }, select: function (e) {
            this.data.selected = e
        }
    });
    return a
}, 27, 1, 20, 272, 140);
I$(277, '{{#if !this.isShowDisplay(5)}}<span class="u-icon u-icon-time"></span>{{#if this.isShowDisplay(1)}}<em>{{dd}}</em>天{{/if}}{{#if this.isShowDisplay(2)}}<em>{{HH}}</em>时{{/if}}{{#if this.isShowDisplay(3)}}{{mm}}分{{/if}}{{#if this.isShowDisplay(4)}}{{ss}}秒{{/if}}后结束{{/if}}\n');
I$(182, function (e, t, i, n, s) {
    var r = Regular.dom;
    var a = n.extend({
        template: i, config: function (e) {
            e.time = e.scheduleTime;
            if (3 !== e.status)this.supr(e)
        }, init: function () {
            this.supr();
            this.$on("onchange", function (e) {
                if (e.isdown)this.doEnd(e)
            })
        }, isShowDisplay: function (e) {
            if (this.data) {
                var t = this.obj2array(this.data), i = 5;
                for (var n = 0, s = t.length; n < s; n++)if ("00" != t[n]) {
                    i = n + 1;
                    break
                }
            }
            return i == e ? !0 : !1
        }, obj2array: function (e) {
            var t = [];
            t.push(e.dd = this.format(e.dd));
            t.push(e.HH = this.format(e.HH));
            t.push(e.mm = this.format(e.mm));
            t.push(e.ss = this.format(e.ss));
            return t
        }, format: function (e) {
            return parseInt(e)
        }, doEnd: function () {
            this.$emit("end");
            this.$update("time", null)
        }
    });
    return a
}, 1, 3, 277, 31, 20);
I$(274, '<div class="u-selnum2">\n  <span class="less {{count <= min || disable? \'z-dis\' : \'\' }}" on-touchstart={{this.setNum(count-1,$event)}} on-click={{this.setNum(count-1,$event)}}><i class="hx"></i></span>\n  <input r-model={{count}} type=tel on-blur={{this.checkNum(count)}} ref="input" maxlength="2"/>\n  <span class="more {{count >= max || disable? \'z-dis\' : \'\' }}" on-touchstart={{this.setNum(parseInt(count)+1,$event)}} on-click={{this.setNum(parseInt(count)+1,$event)}}><i class="sx"></i></span>\n</div>\n\n');
I$(183, function (e, t, i, n, s, r) {
    var a = Regular.dom;
    var o = n.maxTaxPrice;
    var l = r.extend({
        name: "numcount", template: i, computed: {
            max: function (e) {
                if (e.isSecKill)return 1;
                if (2 == e.isOverSeaProd) {
                    var t = Math.floor(o / e.price) || 1;
                    return Math.min(t, e.remain, 99)
                }
                return Math.min(e.remain || 1, 99)
            }
        }, config: function (t) {
            e.extend(t, {
                min: 1,
                hideTip: !0,
                lock: !1,
                __isMobile: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|Windows Phone)/i)
            });
            if (!t.count)t.count = t.min
        }, validate: function (e) {
            var t = this.$get("max");
            if (!/^[0-9]*[1-9][0-9]*$/.test("" + e))return 1; else if (e > t)return 2;
            return 0
        }, setNum: function (e, t) {
            if (!this.data.__isMobile || "click" !== t.type) {
                if (!e || void 0 === e)e = 1;
                if (!this.data.disable) {
                    var i = this.data;
                    if (null != i.remain) {
                        if (0 !== i.remain) {
                            var n = this.$get("max");
                            var r = i.min;
                            if (2 == i.isOverSeaProd && e == n)this.data.lock = !0; else this.data.lock = !1;
                            this.data.hideTip = !0;
                            if (e > n) {
                                this.data.hideTip = !1;
                                if (i.isSecKill)return s.notify({
                                    type: "error",
                                    message: "秒杀商品限购" + n + "件"
                                }); else return !1
                            }
                            if (2 != i.isOverSeaProd && e > i.remain)return s.notify({type: "error", message: "库存不足"});
                            if (e <= 0)return s.notify("本商品1件起售", "error");
                            this.data.count = e
                        }
                    } else this.$emit("need_remain")
                }
            }
        }, setRemain: function (e, t) {
            var i = this.data;
            i.remain = e;
            i.price = t;
            i.hideTip = !0;
            if (this.$get("max") < i.count)i.count = this.$get("max");
            this.$update()
        }, disable: function () {
            this.$update({disable: !0, count: 1});
            this.$refs["input"].disabled = "disabled"
        }, checkNum: function (e) {
            var t = this.validate(e);
            var i = "最大只能输入" + this.$get("max");
            var n = ["", "请输入正确的数量！", i];
            if (t)setTimeout(function () {
                s.notify({type: "error", message: n[t]})
            }, 500)
        }
    });
    return l
}, 1, 3, 274, 27, 20, 140);
I$(275, "<!--{{#list @(sizes) as size}}-->\n<!--<div class=\"u-sel {{size.type!==1? 'z-disabled': ''}} {{selected==size? 'z-selected': ''}}\"-->\n  <!--{{#if !disable}} -->\n    <!--on-click={{this.select(size)}} -->\n  <!--{{/if}}-->\n  <!-->-->\n  <!--<span></span>-->\n  <!--<div class=\"u-sel-size\">{{@(size.size)}}</div>-->\n  <!--{{#if size.num < 10 && size.type===1&&isOverSeaProd!=2}}<i>还剩{{size.num}}件</i>{{/if}}-->\n<!--</div>-->\n<!--{{/list}}-->\n\n\n  {{#list @(sizes) as size}}\n  <span class=\" f-inoneline sku-li {{selected==size? 'sel': ''}} {{size.type!==1? 'z-disabled': ''}}\" {{#if !disable}}on-click={{this.select(size)}}{{/if}}>\n    <i class=\"u-sel\"></i>\n    {{@(size.size)}}{{#if size.num < 10 && size.type===1&&isOverSeaProd!=2}}<i class=\"tip\">还剩{{size.num}}件</i>{{/if}}\n  </span>\n  {{/list}}\n  <!--<span class=\"tip\">{{error && error.msg}}</span>-->\n");
I$(184, function (e, t, i, n, s, r) {
    var a = Regular.dom;
    var o = {
        CHECK_SIZE: "/detail/checkStock",
        NOTIFY: "/detail/notifySize",
        CHECK_NOTIFY: "/cart/userexistinremind",
        TOGGLE_NOTIFY: "/cart/updateremindstorage"
    };
    var l = r.extend({
        name: "numcount",
        template: n,
        data: {classMaps: {1: "u-sel", 2: "u-sel u-sel-gray", 3: "u-sel z-disabled"}},
        config: function (e) {
            t.extend(e, {sizes: []});
            this.configSize()
        },
        configSize: function () {
            var e = this.data;
            var t = e.sizes;
            var i = t.length;
            var n = 0;
            var s = 0;
            t.forEach(function (t) {
                var i;
                if (!t.sizeTips) {
                    i = 0;
                    t.sizeTips = []
                } else i = t.sizeTips.length;
                if (!e.skuId && 1 == t.type)e.skuId = t.skuId;
                if (3 === t.type)s++;
                if (2 === t.type)n++;
                if (i % 3)for (var r = 0; r < 3 - i % 3; r++)t.sizeTips.push({})
            });
            if (i === n + s)setTimeout(this.$emit.bind(this, "empty", 4), 0)
        },
        init: function () {
            var e = this.data;
            if (e.skuId) {
                var i = t.findInList(e.skuId, e.sizes, "skuId");
                if (~i && !e.disable)this.select(e.sizes[i])
            }
        },
        select: function (e) {
            var t = this.data;
            if (t.selected !== e && 1 === e.type) {
                var i = this;
                this.checkSize(function (t) {
                    if (1 === e.type || t)i.changeSelected(e)
                })
            }
        },
        changeSelected: function (e) {
            this.data.selected = e;
            this.$emit("selected", e)
        },
        checkSize: function (e) {
            var i = this.data;
            this.$request(o.CHECK_SIZE, {
                data: {
                    pid: i.pid,
                    poId: i.poId,
                    supplierId: i.supplierId,
                    saleMode: i.saleMode
                }, onload: function (n) {
                    if (!n.result || !n.result.list)return e(1);
                    var s = n.result.list;
                    var r = s.length;
                    var a = 0;
                    var o = 0;
                    i.sizes.forEach(function (e, i) {
                        s.forEach(function (i, n) {
                            if (e.skuId === i.skuId)t.extend(e, {cartNum: i.cartNum, num: i.num, type: i.type}, !0)
                        });
                        if (2 === e.type)o += 1;
                        if (3 === e.type)a += 1
                    });
                    if (0 == r)this.$emit("empty", 6); else if (r === o + a)this.$emit("empty", 4);
                    if (i.selected && 1 !== i.selected.type)this.changeSelected(null);
                    e(null, i)
                }, onerror: function () {
                    e(1)
                }
            })
        },
        disable: function (e) {
            this.data.sizes.forEach(function (e) {
                e.type = 3
            });
            this.data.disable = !0;
            this.$update()
        }
    }).use("timeout");
    return l
}, 27, 1, 3, 275, 20, 140);
I$(276, '<div class="bd">\n\t<form class="j-flag f-fs2 txt" onsubmit="return false;">\n\t\t<div class="row f-cb">\n\t\t\t<img src="" alt="" width="132" height="44"\n\t\t\t\tclass="f-fl j-flag f-cp" title="看不清？点击换一张" /> <input\n\t\t\t\ttype="text" class="w-ipt w-ipt-code f-fl" name="n00"\n\t\t\t\tdata-required="true" />\n\t\t</div>\n\t</form>\n\t<div class="m-table btns">\n\t\t<div class="tr">\n\t\t\t<div class="td">\n\t\t\t\t<a href="#" class="w-btn3 j-flag">确 定</a>\n\t\t\t</div>\n\t\t\t<div class="td">\n\t\t\t\t<a href="#" class="w-btn3 w-btn3-1 j-flag nb">取 消</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>');
I$(185, function (e, t, i, n, s, r, a, o, l, c, d, u, f) {
    var _;
    var h = u._$addNodeTemplate(d);
    var p = c.MAINSITE + "/kaptcha/genverifycode";
    f._$$CodeWindow = e._$klass();
    _ = f._$$CodeWindow._$extend(o);
    _.__reset = function (e) {
        e.clazz += " p-code-win";
        e.title = "输入验证码";
        e.draggable = !1;
        this.__super(e)
    };
    _.__initXGui = function () {
        this.__seed_html = h
    };
    _.__destory = function () {
        this.__super()
    };
    _.__initNode = function () {
        this.__super();
        var e = i._$getByClassName(this.__body, "j-flag");
        this.__eform = e[0];
        this.__img = e[1];
        this.__eok = e[2];
        this.__ecc = e[3];
        this.__imgUpdate();
        this.__doInitDomEvent([[this.__eok, "click", this.__onOKClick._$bind(this)], [this.__ecc, "click", this.__onCCClick._$bind(this)], [this.__img, "click", this.__imgUpdate._$bind(this)]]);
        this.__form = s._$$WebForm._$allocate({form: this.__eform})
    };
    _.__imgUpdate = function () {
        this.__img.src = p + "?t=" + new Date
    };
    _.__onOKClick = function (e) {
        n._$stop(e);
        if (this.__form._$checkValidity())this._$dispatchEvent("onok", a.trim(this.__form._$get("n00").value))
    };
    _.__onCCClick = function (e) {
        n._$stop(e);
        this._$hide()
    };
    _._$imgUpdate = function () {
        this.__imgUpdate()
    };
    return f._$$CodeWindow
}, 2, 27, 3, 5, 106, 19, 1, 226, 19, 27, 276, 118);
I$(98, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    var u;
    o._$$Module = e._$klass();
    u = o._$$Module._$extend(t._$$Module);
    u.__init = function () {
        this.__super();
        var e = i._$get("online-service");
        n._$addEvent(e, "click", this.__onlineService._$bind(this))
    };
    u.__onlineService = function (e) {
        e.preventDefault();
        r("/profile/getLoginInfo", {
            method: "POST", onload: function (e) {
                ysf.config({
                    uid: e.result.userId,
                    name: e.result.nickname,
                    email: e.result.account,
                    mobile: e.result.mobile
                });
                window.location.href = ysf.url()
            }._$bind(this), onerror: function (e) {
                if (s.isEmpty(e))location.href = "/login?redirectURL=" + encodeURI(location.href); else a.notify({
                    type: "error",
                    message: e.message || "请求客服超时"
                })
            }._$bind(this)
        })
    };
    o._$$Module._$allocate();
    return o
}, 2, 12, 3, 5, 1, 19, 20);
I$(278, '<div class="m-modal m-sku-modal">\n    <!--<div class="placeholder"></div>-->\n    <div class="container" ref="container">\n        <div class="m-wrap">\n            <ul>\n                <li class="price">\n                   <span class="symbol">\n                       <span class="yang">&yen;</span>\n                       {{#if isRebate}}<em class="j-subsidyPrice">{{this.handlePrice((showSubsidyPrice|fixed),0)}}{{this.handlePrice((showSubsidyPrice|fixed),1)}}</em>\n                           {{#else}}<em class="num j-salePrice">{{this.handlePrice((showSalePrice|fixed),0)}}{{this.handlePrice((showSalePrice|fixed),1)}}</em>\n                       {{/if}}\n                  </span>\n                  <span class="iprice"><span class="del">&yen;<span class="j-marketPrice">{{this.handlePrice((showMarketPrice|fixed),0)}}{{this.handlePrice((showMarketPrice|fixed),1)}}</span></span></span>\n                    {{#if isRebate}}<span class="tag">补贴专享价</span>{{/if}}\n                </li>\n                <li class="count j-numcount"></li>\n                <li class="skus"><div class="wrap f-cb"><div class="j-size"></div></div></li>\n            </ul>\n            <div class="btns">\n                <div class="tip">{{tip}}</div>\n                <span class="u-btn-style1 btn {{curStatus !==1?\'z-disabled\':\'\'}}" on-click={{this.addOrBuy($event)}}>\n                    {{#if type === 1}}\n                        {{statusMap[curStatus]}}\n                    {{#else}}\n                        立即购买\n                    {{/if}}\n                </span>\n            </div>\n        </div>\n    </div>\n</div>');
I$(187, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p, m) {
    var v = Regular.dom;
    var g = a.extend({
        template: o, config: function (e) {
            r.extend(e, {
                __isMobile: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|Windows Phone)/i),
                __isApple: !!navigator.userAgent.match(/(iPhone|iPod|iPad)/i),
                curStatus: 1,
                showSubsidyPrice: this.data.product.subsidyPrice,
                showSalePrice: this.data.product.salePrice,
                showMarketPrice: this.data.product.marketPrice
            })
        }, init: function () {
            this.inject(document.body);
            if (this.data.autofix)v.addClass(document.documentElement, "z-overy");
            this.initSubComponents();
            this.addAnimate();
            this.closeWindowListener()
        }, initSubComponents: function () {
            var e = this.data.productdata;
            this.__numcount = new d({
                data: {
                    label: e.product.label,
                    isOverSeaProd: e.product.isOverSeaProd,
                    isSecKill: e.isSecKill
                }, events: {
                    need_remain: function () {
                        l.notify("必须选择" + e.product.label + "！", "error")
                    }
                }
            }).$inject(".j-numcount");
            var t = nes.one(".j-size");
            var i = this.__size = new u({
                data: {
                    pid: e.product.productId,
                    poId: e.product.poId,
                    skuId: e.product.skuId,
                    supplierId: e.product.supplierId,
                    label: e.product.label,
                    saleMode: e.product.saleMode,
                    isOverSeaProd: e.product.isOverSeaProd,
                    sizes: e.product.sizeSpecList || [],
                    disable: e.product.preview || 1 !== e.product.status ? 1 : 0
                }, events: {
                    selected: function (e) {
                        if (e) {
                            this.refreshPrice(e);
                            this.$emit("refreshPrice", e);
                            this.__numcount.setRemain(e.num, e.subsidyPrice || e.salePrice)
                        }
                    }._$bind(this), empty: function (t) {
                        t = t || 4;
                        if (1 === e.product.status)this.disable("self", t)
                    }._$bind(this)
                }
            }).$inject(t)
        }, refreshPrice: function (t) {
            var i = f(".m-sku-modal"), n = i._$children(".j-salePrice", !0), s = i._$children(".j-subsidyPrice", !0), r = i._$children(".j-cut", !0), a = i._$children(".j-marketPrice", !0);
            if (this.data.isRebate && s)this.$update("showSubsidyPrice", t.subsidyPrice);
            if (n)this.$update("showSalePrice", t.salePrice);
            if (a)this.$update("showMarketPrice", t.marketPrice);
            if (r)r._$text(e.fixed(t.salePrice / t.marketPrice * 10, 1))
        }, addOrBuy: function (e) {
            e.preventDefault();
            if (!i._$hasClassName(e.target, "z-disabled")) {
                if (!r.isLogin())location.href = "/login?redirectURL=" + encodeURIComponent(location.href);
                var t = this.__numcount.data.count;
                var n = this.__size.data.selected;
                if (!n)return l.notify("请选择" + this.data.product.label + "!", "fail");
                if (1 === this.data.type)this.doAddToCart(t); else if (2 === this.data.type)this.doDirectBuy(n, t)
            }
        }, doAddToCart: function (e) {
            this.__size.checkSize(function (t, i) {
                if (t)return l.notify({type: "error", message: "检查库存失败，请稍后"});
                var n = i.selected;
                if (n && e >= 1)this.$emit("addCart", n, e);
                if (!n);
            }._$bind(this))
        }, doDirectBuy: function (e, t) {
            if (e && t >= 1)this.$emit("directbuy", t, e)
        }, disable: function (e, t) {
            switch (e) {
                case"size":
                    this.__size.disable(t);
                    break;
                case"numcount":
                    this.__numcount.disable(t);
                    break;
                case"self":
                    this.$update("curStatus", t)
            }
        }, addAnimate: function () {
            this.__container = this.$refs["container"];
            this.__height = this.__container.offsetHeight;
            i._$setStyle(this.__container, "visibility", "visible");
            i._$setStyle(this.__container, "bottom", -this.__height + "px");
            c._$vmove(this.__container, 0, 200)
        }, closeWindowListener: function () {
            var e = this.data.__isApple ? "touchend" : "click";
            n._$addEvent(document, e, function (e) {
                var t = e.target || e.srcElement;
                if (i._$hasClassName(t, "m-modal")) {
                    e.preventDefault();
                    this.myclose()
                }
            }._$bind(this))
        }, myclose: function () {
            c._$vmove(this.__container, -this.__height, 200);
            setTimeout(function () {
                this.close()
            }._$bind(this), 150)
        }, handlePrice: function (e, t) {
            var i = e.toString().split(".");
            if (1 == t)return 0 == parseInt(i[t]) || void 0 == i[t] ? "" : "." + i[t]; else return i[t]
        }
    });
    return g
}, 49, 2, 3, 5, 28, 1, 53, 278, 20, 146, 183, 184, 8);
I$(200, '<div class="m-addresslist m-addaddress">\n\t<div class="j-flag"></div>\n\t<div class="j-flag"></div>\n</div>');
I$(201, function (e, t, i, n, s, r, a, o, l, c, d) {
    var u, f;
    o._$$UtilCtl = e._$klass();
    u = o._$$UtilCtl._$extend(s._$$EventTarget);
    f = o._$$UtilCtl._$supro;
    u.__reset = function (e) {
        this.__super(e);
        this.__province = e.province;
        this.__city = e.city;
        this.__section = e.section;
        this.__street = e.street;
        this.__doInitDomEvent([[this.__province, "change", this.__onProvinceChange._$bind(this)], [this.__city, "change", this.__onCityChange._$bind(this)], [this.__section, "change", this.__onSectionChange._$bind(this)]]);
        this.__initProvince()
    };
    u.__initProvince = function () {
        r("/address/provinceList", {
            onload: this.__cbGetProvince._$bind(this),
            onerror: this.__cbGetProvince._$bind(this),
            type: "json"
        })
    };
    u.__cbGetProvince = function (e) {
        if (200 == e.code) {
            this.__initSelect(this.__province, e.provinceList, "locationName", "code");
            this.__onProvinceChange()
        }
    };
    u.__onProvinceChange = function () {
        var e = this.__province.value;
        if (e != -1)r("/location/city", {
            data: t._$object2query({code: e}),
            onload: this.__cbGetCity._$bind(this),
            onerror: this.__cbGetCity._$bind(this),
            type: "json"
        })
    };
    u.__cbGetCity = function (e) {
        if (200 == e.code) {
            this.__initSelect(this.__city, e.result.list);
            this.__onCityChange()
        }
    };
    u.__initSelect = function (e, t, i, s) {
        e.options.length = 0;
        var r = n._$dataset(e, "value"), a = -1;
        i = i || "name", s = s || "id";
        for (var o = 0, l = t.length; o < l; o++) {
            var c = new Option(t[o][i], t[o][s]);
            if (r == t[o][i])a = o;
            e.options.add(c)
        }
        if (a != -1)e.selectedIndex = a
    };
    u.__onCityChange = function () {
        var e = this.__city.value;
        if (e != -1)r("/location/district", {
            data: t._$object2query({code: e}),
            onload: this.__cbGetSection._$bind(this),
            onerror: this.__cbGetSection._$bind(this),
            type: "json"
        })
    };
    u.__cbGetSection = function (e) {
        if (200 == e.code) {
            this.__initSelect(this.__section, e.result.list);
            this.__onSectionChange()
        }
    };
    u.__onSectionChange = function () {
        var e = this.__section.value;
        if (e != -1)if (this.__street)r("/location/street", {
            data: t._$object2query({code: e}),
            onload: this.__cbGetStreet._$bind(this),
            onerror: this.__cbGetStreet._$bind(this),
            type: "json"
        })
    };
    u.__cbGetStreet = function (e) {
        if (200 == e.code) {
            e.result.list.push({name: "我不知道", id: 0});
            this.__initSelect(this.__street, e.result.list)
        }
    };
    u._$data = function (e) {
        var t = {};
        t.province = this.__province.options[this.__province.selectedIndex].text;
        t.provinceId = this.__province.options[this.__province.selectedIndex].value;
        t.city = this.__city.options[this.__city.selectedIndex].text;
        t.cityId = this.__city.options[this.__city.selectedIndex].value;
        t.section = this.__section.options[this.__section.selectedIndex].text;
        t.sectionId = this.__section.options[this.__section.selectedIndex].value;
        if (this.__street) {
            var i = this.__street.options[this.__street.selectedIndex].value;
            if (i != -1) {
                t.street = this.__street.options[this.__street.selectedIndex].text;
                t.streetId = i
            }
        }
        return t
    };
    u.__destroy = function () {
        this.__super()
    };
    return o._$$UtilCtl
}, 2, 28, 5, 3, 4, 19, 27);
I$(280, '<form id="addressform" class="j-flag">\n  \t<ul class="m-add">\n  \t\t<li class="f-cb">\n  \t\t\t<input type="hidden" name="id" data-required="true" value="">\n\t\t\t<div class="iptbox">\n\t\t\t\t<input type="text" name="consigneeName" class="conName j-size" data-required="true" placeholder="收件人姓名" value="" maxLength=25><i class="error-msg">请填写收货人</i>\n\t\t\t</div>\n  \t\t</li>\n  \t\t<li class="f-cb">\n\t\t\t<div class="iptbox">\n\t\t\t\t<input type="text" class="j-size" name="consigneeMobile" data-required="true" data-contact="contact" placeholder="手机号码" maxLength=11 value=""><i class="error-msg">请填写手机号码</i>\n\t\t\t</div>\n  \t\t</li>\n  \t\t<li class="f-cb">\n  \t\t\t<div class="m-province iptbox1">\n  \t\t\t\t<select name="provinceId" data-value="">\n  \t\t\t\t\t<option value=-1>请选择</option>\n  \t\t\t\t</select>\n  \t\t\t</div>\n\t\t\t<div class="m-city iptbox1">\n\t\t\t\t<select name="cityId" data-value="">\n\t\t\t\t\t<option value=-1>请选择</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="m-section iptbox1">\n\t\t\t\t<select name="sectionId" data-value="">\n\t\t\t\t\t<option value=-1>请选择</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class="m-street iptbox1">\n\t\t\t\t<select name="streetId" data-value="">\n\t\t\t\t\t<option value=-1>请选择</option>\n\t\t\t\t</select>\n\t\t\t</div>\n  \t\t</li>\n  \t\t<li class="f-cb">\n\t\t\t<div class="iptbox">\n\t\t\t\t<textarea name="address" class="j-size" data-required="true" placeholder="详细地址" maxLength=100></textarea>\n\t\t\t\t<i class="error-msg">请填写详细地址</i>\n\t\t\t</div>\n  \t\t</li>\n  \t</ul>\n</form>\n\n<div>\n\t<span class="set-default">\n\t\t<label>设为默认地址</label>\n\t\t<input type="checkbox" id="default" name="isDefault" class="j-flag check-box">\n\t</span>\n</div>\n\n<div class="btns save j-flag">\n\t<span id="submit">保存\n\t\t<!--<label>保存</label>-->\n\t</span>\n</div>');
I$(202, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p, m) {
    var v, g, $ = a._$addNodeTemplate(o), y = /1[3|5|7|8|][0-9]{9}/, b = function (e, t) {
        for (; e && e.tagName.toLowerCase() != t.toLowerCase();)e = e.parentNode;
        return e
    };
    _._$$Address = e._$klass();
    v = _._$$Address._$extend(r._$$Abstract);
    g = _._$$Address._$supro;
    v.__reset = function (e) {
        e.parent = e.parent || document.body;
        this.__super(e);
        this.__default.checked = !1;
        this.__form.id.value = "";
        u._$title("新建地址");
        if (e.address) {
            this.__form.address.value = e.address.address;
            this.__form.consigneeName.value = e.address.consigneeName;
            this.__form.consigneeMobile.value = e.address.consigneeMobile;
            this.__form.id.value = e.address.id || "";
            n._$dataset(this.__form.provinceId, "value", e.address.province);
            n._$dataset(this.__form.cityId, "value", e.address.city);
            n._$dataset(this.__form.sectionId, "value", e.address.section);
            n._$dataset(this.__form.streetId, "value", e.address.street || "我不知道");
            this.__default.checked = e.address.isDefault || !1;
            u._$title("修改地址")
        }
        var t = function (e) {
            var t = b(e, "LI");
            var i = t.getElementsByTagName("i");
            n._$delClassName(i[0], "err2")
        };
        this.__webForm = l._$$WebForm._$allocate({
            form: this.__form, attr: {
                contact: function (e) {
                    if ("consigneeMobile" == e.name) {
                        var t = this.__form.consigneeMobile.value.trim();
                        var i = !t;
                        if (i)return -1; else if ("consigneeMobile" == e.name && !i) {
                            if (!y.test(t))f.notify("请输入正确的手机号码！", "error");
                            return y.test(t) ? null : -3
                        }
                    }
                }._$bind(this)
            }, oninvalid: function (e) {
                var t = e.target;
                var i = b(t, "LI");
                var s = i.getElementsByTagName("i");
                n._$addClassName(s[0], "err2")
            }._$bind(this), onvalid: function (e) {
                t(e.target)
            }
        });
        this.__cascade = c._$allocate({
            province: this.__form.provinceId,
            city: this.__form.cityId,
            section: this.__form.sectionId,
            street: this.__form.streetId
        })
    };
    v.__destroy = function () {
        this.__form.reset();
        this.__webForm._$recycle();
        this.__cascade._$recycle();
        u._$title();
        this.__super()
    };
    v.__initXGui = function () {
        this.__seed_html = $
    };
    v.__initNode = function () {
        this.__super();
        var e = n._$getByClassName(this.__body, "j-flag");
        this.__form = e[0];
        this.__default = e[1];
        this.__submitBtn = e[2];
        i._$addEvent(this.__submitBtn, "click", this.__onSubmitClick._$bind(this));
        var t = n._$getByClassName(this.__body, "j-size");
        i._$addEvent(t[0], "keydown", function () {
            if (this.value.length >= 25)f.notify("收件人字数超出！", "error")
        });
        i._$addEvent(t[2], "keydown", function () {
            if (this.value.length >= 100)f.notify("详细地址字数超出！", "error")
        });
        u.fixfixed(this.__body)
    };
    v.__onSubmitClick = function () {
        if (this.__webForm._$checkValidity()) {
            var e = this.__webForm._$data();
            e.isDefault = this.__default.checked;
            d("/profile/address/update", {
                data: e, method: "POST", type: "json", onload: function (e) {
                    this._$dispatchEvent("onadd", e.result)
                }._$bind(this), onerror: function () {
                }
            })
        }
    };
    v._$checkValidity = function () {
        return this.__webForm._$checkValidity()
    };
    v._$data = function () {
        if (this.__webForm._$checkValidity()) {
            var e = this.__webForm._$data();
            e.province = this.__form.provinceId.options[this.__form.provinceId.selectedIndex].text;
            e.city = this.__form.cityId.options[this.__form.cityId.selectedIndex].text;
            e.section = this.__form.sectionId.options[this.__form.sectionId.selectedIndex].text;
            e.street = this.__form.streetId.options[this.__form.streetId.selectedIndex].text;
            return e
        }
    };
    return _._$$Address
}, 2, 28, 5, 3, 4, 159, 118, 280, 106, 201, 19, 1, 20);
I$(239, '{{#if list.length>0}}\n{{#if list.length<10}}\n<div class="btnbox f-tac"><span href="javascript:void();" class="btn" on-click={{this.addAddress($event)}}><i class="u-add"></i>新增地址</span></div>\n{{/if}}\n<ul class="m-address">\n\t{{#list list as item}}\n    \t\t<li class="f-cb" on-click={{this.onselect(item)}} r-class="{\'default-li\': item.isDefault}">\n    \t\t\t<div class="info">\n    \t\t\t\t<div class="uname s-fc3">\n    \t\t\t\t\t<span class="">{{item.consigneeName}}</span>\n    \t\t\t\t<div class="s-fc3">\n    \t\t\t\t\t  <span class="mobile">{{item.consigneeMobile}}</span></div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class="s-fc3 f-intwoline">{{#if item.isDefault}}<span class="default">[默认]</span>{{/if}}{{item.province}}{{#if !this.isZhixiashi(item.province)}}{{item.city}}{{/if}}{{#if item.sectionId>0}}{{item.section}}{{/if}}{{item.street}} {{item.address}}</div>\n    \t\t\t</div>\n    \t\t\t<div  class="act f-cb">\n    \t\t\t\t<ul class="f-fr">\n    \t\t\t\t\t<li class="f-fr"  on-click={{this.removeItem($event,item,item_index)}}><i class="u-remove"></i></li>\n    \t\t\t\t\t<li class="f-fr"><span href="javascript:void();" on-click={{this.editAddress($event,item)}}><i class="u-change"></i></span></li>\n    \t\t\t\t</ul>\n    \t\t\t</div>\n    \t\t\t{{#if item.id==id}}<i class="u-current">当前选中</i>{{/if}}\n    \t\t</li>\n    {{/list}}\n</ul>\n{{#elseif loading}}\n<div class="m-lstloading f-tac"><img src="/res/3g/images/loading-2.gif" width="30px" class="f-vam"><span class="lbl">数据加载中</span></div>\n{{#else}}\n\t<div class="m-empty">\n\t<div class="f-tac">\n\t\t<i class="u-addressempty"></i>\n\t\t<div class="lbl">您还未填写任何地址~</div>\n\t</div>\n\t<div class="btnbox f-tac"><span on-click={{this.addAddress($event)}} class="btn">新增地址</span></div>\n\t</div>\n{{/if}}');
I$(108, function (e, t, i, n, s, r, a, o, l, c, d) {
    return n.extend({
        url: "/profile/address/list", api: "/user/address/", template: i, name: "wgt-address", xdrOption: function () {
            return {method: "POST"}
        }, getExtraParam: function () {
            return this.data.condition
        }, onselect: function (e) {
            this.$emit("change", e)
        }, refresh: function (e) {
            if (e.url) {
                this.url = e.url;
                delete e.url
            }
            this.data.current = 1;
            this.data.condition = e;
            this.$emit("updatelist")
        }, getDefault: function (e) {
            return this.data.list.filter(function (t) {
                return t[e]
            })
        }, resetDefault: function () {
            var e = this.getDefault("isDefault");
            if (0 != e.length)e[0].isDefault = !1
        }, removeItem: function (i, n, s) {
            t._$stop(i);
            r._$allocate({
                onok: function () {
                    this.$request("/profile/address/delete", {
                        query: e._$object2query({id: n.id}),
                        norest: !0,
                        type: "json",
                        onload: function (e) {
                            if (200 == e.code)this.data.list.splice(s, 1); else a.show("地址删除失败")
                        },
                        onerror: c
                    })
                }._$bind(this), clazz: "w-win w-win-1 w-win-1-3"
            })._$show()
        }, _sendReq: function (e, t) {
        }, addAddress: function (e) {
            t._$stop(e);
            this.$emit("editaddress")
        }, editAddress: function (e, i) {
            t._$stop(e);
            this.$emit("editaddress", i)
        }, setDefault: function (t) {
            this.$request("/profile/address/setdefault", {
                query: e._$object2query({id: t.id}),
                norest: !0,
                type: "json",
                onload: function (e) {
                    if (200 == e.code) {
                        this.resetDefault();
                        t.isDefault = !0
                    }
                },
                onerror: c
            })
        }, __getList: function () {
            var t = this.data;
            var i = {
                data: this.getListParam(), onload: function (e) {
                    var i = e.result, n = i.list || i || [];
                    s.mergeList(n, t.list, t.key || "id");
                    t.total = i.total;
                    t.list = n;
                    if (!t.id) {
                        var r = this.getDefault();
                        var a;
                        if (0 == r.length && 0 != t.list.length)a = t.list[0];
                        this.$emit("change", a)
                    }
                }._$bind(this), onerror: function (e) {
                }
            };
            if (this.xdrOption) {
                var n = this.xdrOption();
                if (n.norest) {
                    i.data = e._$object2query(this.getListParam());
                    i.norest = !0
                }
                i.method = n.method || "GET"
            }
            this.$request(this.url, i)
        }, addItem: function () {
            AddressWin._$allocate({
                type: 0, onok: function (e) {
                    this.$request("/profile/address/add", {
                        data: e, method: "POST", onload: function (e) {
                            if (200 == e.code) {
                                if (e.result.isDefault)this.resetDefault();
                                this.data.list.push(e.result)
                            } else a.show("地址添加失败")
                        }, onerror: function () {
                            a.show("服务器错误")
                        }
                    })
                }._$bind(this)
            })._$show()
        }, isZhixiashi: function (t) {
            var i = ["北京市", "上海市", "天津市", "重庆市"];
            var n = e._$indexOf(i, t);
            return n != -1
        }
    })
}, 28, 5, 239, 198, 1, 96, 20);
I$(64, function (e, t, i, n, s, r, a, o, l, c, d, u, f, _, h, p, m) {
    var v, g, $ = a._$addNodeTemplate(o), y = /1[3|5|7|8|][0-9]{9}/, b = function (e, t) {
        for (; e && e.tagName.toLowerCase() != t.toLowerCase();)e = e.parentNode;
        return e
    };
    _._$$Address = e._$klass();
    v = _._$$Address._$extend(r._$$Abstract);
    g = _._$$Address._$supro;
    v.__reset = function (e) {
        var t = location.pathname;
        e.parent = e.parent || document.body;
        this.__super(e);
        this.__addressList = new u({data: {id: e.id}});
        this.__addressList.$inject(this.__addressBox);
        history.replaceState({state: "show_list"}, "地址列表", t);
        this.__addressList.$on("change", function (e) {
            this._$dispatchEvent("change", e)
        }._$bind(this));
        this.__addressList.$on("editaddress", function (e) {
            n._$addClassName(this.__addressBox, "f-dn");
            history.pushState({state: "edit_address"}, "编辑地址", t + "?edit=1");
            if (this.__addrui)this.__addrui._$recycle();
            this.__editItem = e;
            this.__addrui = d._$allocate({
                onadd: this.__onAddAddress._$bind(this),
                parent: this.__addAddressBox,
                address: e
            })
        }._$bind(this));
        window.onpopstate = function (e) {
            switch (e.state.state) {
                case"show_list":
                    n._$delClassName(this.__addressBox, "f-dn");
                    if (this.__addrui)this.__addrui = this.__addrui._$recycle();
                    break;
                case"edit_address":
                    n._$addClassName(this.__addressBox, "f-dn");
                    if (this.__addrui)this.__addrui._$recycle();
                    this.__addrui = d._$allocate({
                        onadd: this.__onAddAddress._$bind(this),
                        parent: this.__addAddressBox,
                        address: this.__editItem
                    })
            }
        }._$bind(this)
    };
    v.__onAddAddress = function (e) {
        n._$delClassName(this.__addressBox, "f-dn");
        history.back();
        if (this.__addrui)this.__addrui = this.__addrui._$recycle();
        this.__addressList.$emit("updatelist")
    };
    v.__destroy = function () {
        this.__super();
        this.__addressList.destroy();
        if (this.__addrui)this.__addrui._$recycle()
    };
    v.__initXGui = function () {
        this.__seed_html = $
    };
    v.__initNode = function () {
        this.__super();
        var e = n._$getByClassName(this.__body, "j-flag");
        this.__addressBox = e[0];
        this.__addAddressBox = e[1]
    };
    return _._$$Address
}, 2, 28, 5, 3, 4, 159, 118, 200, 106, 201, 202, 108, 19);
I$(204, '<div class="j-flag"></div>\n<div class="btns m-table">\n  <div class="tr">\n    <span class="td"><input type="checkbox" id="default" class="j-flag" name="isDefault"><label for="default">设为默认</label></span>\n    <span class="td"><span class="j-flag"><i class="u-save"></i><label>保存</label></span></span>\n  </div>\n</div>');
I$(66, function (e, t, i, n, s, r, a, o, l, c, d, u, f) {
    var _;
    var h = a._$addNodeTemplate(r), p = function (e, i) {
        for (; e && !t._$hasClassName(e, i);)e = e.parentNode;
        return e
    };
    c._$$Address = e._$klass();
    _ = c._$$Address._$extend(s._$$Abstract);
    _.__reset = function (e) {
        this.__super(e);
        this.__addrui = o._$allocate({parent: this.__box, type: e.type, address: e.address})
    };
    _.__initXGui = function () {
        this.__seed_html = h
    };
    _.__destroy = function () {
        this.__addrui._$recycle();
        this.__super()
    };
    _.__initNode = function () {
        this.__super();
        var e = t._$getByClassName(this.__body, "j-flag");
        this.__box = e[0];
        this.__addr1 = e[1];
        i._$addEvent(e[2], "click", this.__onOKClick._$bind(this))
    };
    _.__onOKClick = function (e) {
        i._$stop(e);
        if (this.__addrui._$checkValidity()) {
            var t = n.extend(this.__addrui._$data(), {"default": this.__addr1.checked});
            l("/profile/address/add", {
                data: t, method: "POST", onload: function (e) {
                    this._$dispatchEvent("onok", e)
                }._$bind(this), onerror: u
            })
        }
    };
    return c
}, 2, 3, 5, 1, 159, 204, 118, 64, 19);
I$(282, '{{#if !!orderdetail && !!orderdetail.orderConfirmVOList}}\n{{#list orderdetail.orderConfirmVOList as orderConfirmVO}}\n<div class="p-section">\n  <div class="wrap">\n    <div class="menu">\n    \t <i class="u-icon u-icon-shop"></i><span class="f-fs1">{{orderConfirmVO.shopName}}</span>\n    </div>\n    <div class="p-plist">\n      {{#list orderConfirmVO.cartList as cart}}\n      {{#list cart.orderSkuList as sku}}\n      <div class="prod f-cb">\n        <div class="p-img f-fl"><img src="{{sku.skuSPVO.picUrl}}?imageView&thumbnail=130y130&quality=85" alt=""/></div>\n        <div class="p-info">\n            {{#if isGroup == 1}}\n              <a class="name f-toe" href="/groupDetail?skuId={{groupSkuId}}">{{sku.skuSPVO.productName}} {{sku.skuSPVO.skuSpecValueMap|concatObjValue:\' \'}}</a>\n            {{#else}}\n             <a class="name f-toe" href="/productDetail?id={{sku.productId}}">{{sku.skuSPVO.productName}} {{sku.skuSPVO.skuSpecValueMap|concatObjValue:\' \'}}</a>\n            {{/if}}\n            <p>{{#if !orderConfirmVO.canDelivery}}此地址暂不支持配送{{/if}}</p>\n            <p><span class="f-fl">&yen;{{sku.rprice|fixed}}</span><span class="s-fc4 f-fr">x{{sku.totalCount}}</span></p>\n        </div>\n      </div>\n      {{/list}}\n      {{/list}}\n    </div>\n    <div class="summary">\n      <span>运费：<span>&yen;</span>{{orderConfirmVO.expressPrice|fixed}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>合计：<span class="s-fc53"><span>&yen;</span>{{orderConfirmVO.totalPayPrice|fixed}}</span></span>\n    </div>\n  </div>\n</div>\n{{/list}}\n{{/if}}');
I$(214, function (e, t, i, n, s, r, a, o) {
    var l = i.extend({
        template: n, name: "wgt-orderinfo", config: function (e) {
            t.extend(e, {_mvqInit: !1, yhMap: ["免邮"]})
        }, init: function () {
            this.$on("updatewgt", this.refresh._$bind(this))
        }, refresh: function () {
            this.$update();
            if (!this.data._mvqInit && this.data.orderdetail) {
                this.data._mvqInit = !0;
                var e = this.data.orderdetail;
                var t = e.orderConfirmVOList || [];
                var i = window["_mvq"] || [];
                var n = window["currTime"] + Math.floor(10 * Math.random());
                i.push(["$setAccount", "m-120530-0"]);
                i.push(["$setGeneral", "ordercreate", "", window["g_ursname"], ""]);
                i.push(["$logConversion"]);
                i.push(["$addOrder", n, e.totalCash || "0.00"]);
                for (var s = 0; s < t.length; s++) {
                    var r = t[s].cartList || [];
                    for (var a = 0; a < r.length; a++) {
                        var o = r[a].orderSkuList || [];
                        for (var l = 0; l < o.length; l++) {
                            var c = o[l];
                            var d = c.skuSPVO || {};
                            i.push(["$addItem", n, c.skuId || "0", d.productName || "", c.totalRPrice || "0.00", c.totalCount || "0", d.linkUrl || "", d.picUrl || ""])
                        }
                    }
                }
                i.push(["$logData"])
            }
        }
    });
    return l
}, 28, 1, 140, 282);
I$(284, '<div class="p-section p-section-0">\n  <div class="p-coupon f-cb">\n    {{#if !hidden && !!orderdetail}}\n    <div class="select">\n      <i class="u-icon u-icon-coupon"></i>\n      <select class="sel" r-model={{orderdetail.currentCouponId}} on-change={{this.changeCoupon($event)}} on-blur={{this.inputCodeOnBlur()}} on-click={{this.inputCodeOnFocus()}}>\n        <option class="opt" value="">选择优惠券/输入优惠券</option>\n        {{#list orderdetail.couponList as coupon}}\n        <option class="opt" value="{{coupon.userCouponId}}">{{coupon.title}}</option>\n        {{/list}}\n        <option class="opt" value="-">不使用</option>\n      </select>\n    </div>\n    <!--{{#if showInputCode}}-->\n    <div class="cinput">\n      <span ref="csure" disabled="disabled" class="u-btn u-btn-disabled f-fr f-cp" on-click={{this.bindCoupon(inputcode)}}>确认</span>\n      <div class="iptwp">输入优惠码:<input placeholder="点击此处输入" type="text" maxlength="20" r-model="{{inputcode}}" on-keyup={{this.checkSize(inputcode)}} on-focus={{this.inputCodeOnFocus()}} on-blur={{this.inputCodeOnBlur(inputcode)}} /></div>\n    </div>\n    <!--{{/if}}-->\n    {{/if}}\n    \n  </div>\n  <div class="p-redpacket f-fs16 f-cb">\n    <input type="checkbox" id="hbchk" class="mgr5" {{#if (orderdetail.canOrderRedPackets<=0)}}disabled{{/if}} r-model={{useHb}} on-change={{this.useHb(useHb)}}/>\n    <label for="hbchk" class="f-vam"> 红包 <span class="s-fc4">(可用余额&yen;{{orderdetail.canOrderRedPackets|fixed}},总余额&yen;{{orderdetail.canUseRedPackets|fixed}})</span></label>\n  </div>\n</div>');
I$(215, function (e, t, i, n, s, r, a, o, l, c) {
    var d = n.extend({
        url: "/purchase/bindcoupon", template: r, name: "wgt-coupon", config: function (e) {
            t.extend(e, {selectedcoupon: void 0, showInputCode: !1})
        }, init: function () {
            this.$on("updatewgt", this.refresh._$bind(this))
        }, refresh: function () {
            this.$update("hidden", !0);
            this.data.hidden = !1;
            this.data.showInputCode = !1;
            var t = this.data, i = t.orderdetail, n = i.couponList, s;
            s = e._$indexOf(n, function (e, t, i) {
                return 1 == e.isSelected
            });
            if (s !== -1) {
                i.currentCoupon = n[s];
                i.currentCouponId = n[s].userCouponId
            } else {
                i.currentCoupon = null;
                i.currentCouponId = ""
            }
            t.useHb = i.redPacketSPrice > 0 ? !0 : !1;
            i.currentHbCash = t.useHb ? i.canUseRedPackets : 0;
            this.$update()
        }, useHb: function (e) {
            var t = this.data.orderdetail;
            t.currentHbCash = e ? t.canUseRedPackets : 0;
            this.$emit("change")
        }, changeCoupon: function (e) {
            var t = e.target.value;
            if ("-" == t)t = "";
            this.$emit("change", {userCouponId: t})
        }, useCoupon: function (e) {
            this.$emit("change", {userCouponId: e})
        }, cancelCoupon: function () {
            this.$emit("change", {userCouponId: ""})
        }, checkSize: function (e) {
            if (e) {
                i._$delClassName(this.$refs["csure"], "u-btn-disabled");
                this.$refs["csure"].disabled = "";
                if (e.length >= 20)s.notify("优惠码位数超出！", "error")
            } else {
                i._$addClassName(this.$refs["csure"], "u-btn-disabled");
                this.$refs["csure"].disabled = "disabled"
            }
        }, inputCodeOnFocus: function () {
            i._$get("p-summarybar").style.position = "absolute"
        }, inputCodeOnBlur: function (e) {
            this.checkSize(e);
            i._$get("p-summarybar").style.position = "fixed"
        }, bindCoupon: function (e) {
            var i = this.data;
            var n = ["", "该优惠券不存在", "该优惠券已过期", "该优惠券已被使用", "该优惠券不满足使用条件", "该优惠券已失效", "该优惠券使用次数为0", "该优惠券已被激活绑定", "该优惠券还未生效"];
            if (null == e || "" == t.trim(e))return !1;
            this.$request(this.url, {
                data: {skuQueryStr: i.skuQueryStr, couponCode: t.trim(e), directBuyKey: window["directBuyKey"]},
                onload: function (e) {
                    if (0 == e.result.state) {
                        this.useCoupon(e.result.userCouponId);
                        this.clearInputCoupon()
                    } else {
                        i.error_code = n[parseInt(e.result.state, 10)];
                        s.notify({type: "error", message: i.error_code})
                    }
                }._$bind(this),
                onerror: function (e) {
                    i.error_code = "使用优惠券失败";
                    s.notify({
                        type: "error", message: i.error_code
                    })
                }._$bind(this)
            })
        }
    });
    d.filter("default", function (e, i) {
        if (e && "" != t.trim(e))return e; else return i
    });
    return d
}, 28, 1, 3, 140, 20, 284);
I$(283, '<div class="p-section">\n  <div class="p-paymethod">\n    <ul class="list s-fc3">\n      {{#list orderdetail.payMethodArray as payMethod}}\n      {{#if payMethod.isValid}}\n      <li class="row {{payMethod.value==this.data.orderdetail.currentPayMethodId? \'selected\': \'\'}}">\n        <input type="radio" id="paymethod{{payMethod.value}}" name="paytype" class="f-vam" value={{payMethod.value}} checked={{payMethod.value==this.data.orderdetail.currentPayMethodId? \'checked\': \'\'}} on-click={{this.onPayMethodChange(payMethod.value)}}/>\n        <label for="paymethod{{payMethod.value}}" class="mgr10 f-vam"><i class="u-icon u-icon-pay u-icon-pay-{{payMethod.value}}"></i>{{payMethod.displayName}}</label>\n      </li>\n      {{#else}}\n      <li class="row">\n        <input type="radio" id="paymethod{{payMethod.value}}" name="paytype" disabled class="f-vam" value={{payMethod.value}}/>\n        <label for="paymethod{{payMethod.value}}" class="mgr10 f-vam"><i class="u-icon u-icon-pay u-icon-pay-{{payMethod.value}}"></i>{{payMethod.displayName}}</label>\n      </li>\n      {{/if}}\n      {{/list}}\n    </ul>\n  </div>\n</div>');
I$(216, function (e, t, i, n, s, r, a, o, l) {
    var c = n.extend({
        template: s, paymethodMap: t.PAYMETHOD_MAP, name: "wgt-paymethod", config: function (t) {
            e.extend(t, {})
        }, init: function () {
            this.$on("updatewgt", this.refresh._$bind(this))
        }, refresh: function () {
            var e = this.data.orderdetail, t = e.payMethodArray, n;
            n = i._$indexOf(t, function (e, t, i) {
                return 1 == e.isSelected
            });
            if (n !== -1) {
                e.currentPayMethod = t[n];
                e.currentPayMethodId = "" + t[n].value
            } else if (!e.currentPayMethod && t.length > 0) {
                e.currentPayMethod = t[0];
                e.currentPayMethodId = "" + t[0].value
            }
        }, onPayMethodChange: function (e, t) {
            if (e != this.data.orderdetail.currentPayMethodId)this.$emit("change", {payMethod: parseInt(e, 10)})
        }
    });
    return c
}, 1, 27, 28, 140, 283);
I$(285, '<div class="p-section  p-section-1">\n  <div class="p-invoice">\n    <input type="checkbox" id="ivchk" r-model={{receipt}} class="mgr5"/> <label for="ivchk" class="f-vam f-fs16"> 开具发票</label>\n  </div>\n  <div class="p-invoicewin" r-hide="{{!receipt}}">\n    <div class="types"><span>类型</span>\n      <div>\n\t      <input type="radio" id="invo" name="invo" class="f-vam" r-model={{receipttype}} checked="checked" value="0"/> <label for="invo" class="mgr70 f-vam">个人</label>\n\t      <input type="radio" id="invo1" name="invo" class="f-vam" r-model={{receipttype}} value="1"/> <label for="invo1" class="f-vam">公司</label>\n      </div>\n    </div>\n    <div class="areawp" r-hide="{{receipttype==0}}"><span>抬头</span>\n      <div>\n\t      <textarea name="" placeholder="请填写发票抬头" class="area" r-model={{receiptValue}} required on-focus="this.onBlur()" maxlength="30"></textarea>\n      </div>\n    </div>\n    <div class="areawp" r-hide="{{receipttype==1}}"><span>抬头</span>\n     <div>\n\t      <textarea placeholder="个人无需填写抬头" name="" class="area" required disabled></textarea>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- \n<div class="p-section p-section-2 f-cb">\n    <dl class="f-cb">\n        <dd><span r-html={{\'&yen;\'}}></span>{{(orderdetail.cartOriRPrice|fixed)||\'0.00\'}}</dd>\n        <dt>商品总额：</dt>\n        <dd><span r-html={{\'&yen;\'}}></span>{{(orderdetail.expUserPrice|fixed)||\'0.00\'}}</dd>\n        <dt>运费：</dt>\n        {{#if (orderdetail.orderSupplyType==2||orderdetail.orderSupplyType==3) && orderdetail.tariffPrice>0 }}\n        <dd class="{{orderdetail.tariffPrice<=50? \'f-dt\':\'\'}}"><span r-html={{\'&yen;\'}}></span>{{orderdetail.tariffPrice|fixed}}\n        </dd>\n        <dt class="tax"><div class="u-taxtip" r-hide={{orderdetail.tariffPrice>50}}><i class="arr"></i>{{orderdetail.tariffPrice<=50?\'关税≤50元，免征哦~\':\'\'}}</div>关税总计：\n        </dt>\n        {{/if}}\n        {{#if orderdetail.hdSPrice > 0 }}\n        <dd>-<span r-html={{\'&yen;\'}}></span>{{orderdetail.hdSPrice|fixed}}</dd>\n        <dt>活动优惠：</dt>\n        {{/if}}\n        {{#if orderdetail.couponSPrice>0 }}\n        <dd>-<span r-html={{\'&yen;\'}}></span>{{orderdetail.couponSPrice|fixed}}</dd>\n        <dt>优惠券优惠</dt>\n        {{/if}}\n        {{#if orderdetail.redPacketSPrice>0 }}\n        <dd>-<span r-html={{\'&yen;\'}}></span>{{orderdetail.redPacketSPrice|fixed}}</dd>\n        <dt>红包减免</dt>\n        {{/if}}\n    </dl>\n</div>\n -->');
I$(217, function (e, t, i, n, s, r, a, o, l) {
    var c = i.extend({
        template: n, name: "wgt-summary", config: function (e) {
        }, init: function (e) {
            this.$watch(["receipt", "receipttype", "receiptValue"], this.changeReceipt)
        }, changeReceipt: function () {
            var t = this.data, i = t.receipt, n = t.receipttype, r = t.receiptValue;
            if (!i)t.orderdetail.receiptValue = "";
            if (i && 1 == n && null != r && "" != e.trim(r)) {
                if (r.length >= 30)s.notify("发票抬头字数超出！", "error");
                t.orderdetail.receiptValue = e.trim(r)
            } else if (i && 0 == n)t.orderdetail.receiptValue = "个人"; else t.orderdetail.receiptValue = "";
            this.$emit("change")
        }, onBlur: function () {
            var t = this.data.receiptValue;
            if (null == t || "" == e.trim(t))s.notify({type: "error", message: "请填写发票抬头！"})
        }
    });
    return c
}, 1, 3, 140, 285, 20);
I$(218, '<div class="p-section">\n      <div class="p-address" on-click={{this.showSelectAddress()}}>\n        <i class="u-location"></i>\n        <i class="u-arrow-right"></i>\n        <p class="f-fs16"><span class="name">收货人：{{address.consigneeName}}</span></p>\n        <p><span class="f-fs15">{{#if !!address.consigneeMobile}}{{address.consigneeMobile}}<br>{{/if}}{{#if address.consigneeTel!=\'--\'}}{{address.consigneeTel}}{{/if}}</span></p>\n        <p class="ads s-fc3">收货地址：{{address.province}}{{#if (address.cityId>0)}}{{address.city}}{{/if}}{{#if (address.sectionId>0)}}{{address.section}}{{/if}}{{#if (address.streetId>0)}}{{address.street}}{{/if}}{{address.address}}</p>\n      </div>\n</div>');
I$(81, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    return n.extend({
        template: t, config: function (e) {
            this.supr(e);
            s.extend(e, {address: {}})
        }, showSelectAddress: function () {
            this.$emit("select")
        }
    })
}, 28, 218, 20, 140, 1, 64, 108, 20);
I$(287, '<div class="m-mock-select">\n  <div class="tit j-node">修改支付方式</div>\n  <div>\n    <div class="j-node"></div>\n    <div class="opt opt-last j-node"><a href="javascript:void(0);">取消</a></div>\n  </div>\n</div>');
I$(288, ".#<uispace>{\n  width:310px;\n  background: #fff;\n  border: solid 1px #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 0 10px;\n  line-height: 2rem;\n  font-size:1rem;\n}\n.#<uispace> .opt a{color:#5893cd;display:block;}\n.#<uispace> .opt{\n    border-bottom:solid 1px #999;\n}\n.#<uispace> .opt-last{\n    border-bottom:solid 0px #999;\n}\n.#<uispace> .tit{\n    border-bottom:solid 1px #999;\n    color:#333;\n}");
I$(224, function (e, t, i, n, s, r, a, o) {
    var l, c = a._$addNodeTemplate(s), d = t._$pushCSSText(r);
    o._$$MockSelectWindow = e._$klass();
    l = o._$$MockSelectWindow._$extend(n);
    l.__reset = function (e) {
        e.clazz += " w-win";
        this.__cnt.innerHTML = e.cnt || "";
        this.__tit.innerText = e.tit || "修改支付方式";
        this.__supReset(e)
    };
    l.__initXGui = function () {
        this.__seed_html = c;
        this.__seed_css = d
    };
    l.__destory = function () {
        this.__super()
    };
    l.__initNode = function () {
        this.__super();
        var e = t._$getByClassName(this.__body, "j-node");
        this.__tit = e[0];
        this.__cnt = e[1];
        i._$addEvent(e[2], "click", this.__onCCClick._$bind(this))
    };
    l.__onCCClick = function (e) {
        i._$stop(e);
        this._$hide()
    };
    return o._$$MockSelectWindow
}, 2, 3, 5, 226, 287, 288, 118);
I$(231, '<textarea name=\'jst\' id=\'#<boxcomplate>\'>\n\t<div class="t2">原路退回 ，请注意查询支付帐户</div>\n    {list options as x}\n      <div class="opt"><a data-index="${x_index}" data-type="0" href="javascript:void(0);">${x}</a></div>\n    {/list}\n</textarea>\n\n<textarea name=\'jst\' id=\'#<boxsimple>\'>\n \t{list options as x}\n      <div class="opt"><a data-index="${x_index}" data-type="1" href="javascript:void(0);">${x}</a></div>\n    {/list}\n</textarea>\n');
I$(97, function (e, t, i, n, s, r, a, o, l, c, d, u) {
    var f, _ = r._$parseUITemplate(o), h = _["boxcomplate"], p = _["boxsimple"], m = ["买错商品了", "订单信息填写错误", "红包/优惠券使用问题", "支付遇到问题", "不想买了", "其他原因"];
    l._$$OrderCancel = e._$klass();
    f = l._$$OrderCancel._$extend(s);
    f.__init = function (e) {
        e.draggable = !1;
        e.mask = !0;
        this.__super(e);
        this._$addEvent("onaction", e.onaction || d);
        i._$addEvent(this.__body, "click", this.__onAction._$bind(this))
    };
    f.__onAction = function (e) {
        var n = i._$getElement(e), s = t._$dataset(n, "type");
        if ("" != s && void 0 != s) {
            _data = {type: s, reason: n.innerHTML};
            this._$dispatchEvent("onaction", _data)
        }
    };
    f.__reset = function (e) {
        var t = e.simple || !1;
        e.cnt = a._$get(t ? p : h, {options: m});
        e.tit = "请选择取消订单的理由";
        this.__super(e)
    }
}, 2, 3, 5, 28, 224, 118, 29, 231);
I$(227, '<div>\n  <div class="txt f-cb j-node"></div>\n  <div class="td">\n    <a href="javascript:void(0);" class="w-btn3 w-btn3-1 j-node"></a>\n  </div>\n</div>');
I$(228, ".#<uispace>{\n    text-align:center;\n    width:100%;\n    background: #fff;\n    border: solid 1px #fff;\n    border-radius: 10px;\n    font-size:1.125rem;\n}\n.#<uispace> .txt{padding:17px 0;}\n.#<uispace> .w-btn3{display:block;padding:17px 0;border-top:1px solid #dedede;color:#007aff;}");
I$(95, function (e, t, i, n, s, r, a, o) {
    var l, c = a._$addNodeTemplate(s), d = t._$pushCSSText(r);
    o._$$NoReturnWindow = e._$klass();
    l = o._$$NoReturnWindow._$extend(n);
    l.__reset = function (e) {
        e.clazz = (e.clazz ? e.clazz : "w-noreturn") + " no-close w-win";
        this.__supReset(e);
        this.__cnt.innerHTML = e.cnt || "";
        this.__ok.innerHTML = e.oktxt || "确 定"
    };
    l.__initXGui = function () {
        this.__seed_html = c;
        this.__seed_css = d
    };
    l.__destory = function () {
        this.__super()
    };
    l.__initNode = function () {
        this.__super();
        var e = t._$getByClassName(this.__body, "j-node");
        this.__cnt = e[0];
        this.__ok = e[1];
        i._$addEvent(this.__ok, "click", this.__onCCClick._$bind(this));
        i._$addEvent(this.__cnt, "click", this.__onOKClick._$bind(this))
    };
    l.__onOKClick = function (e) {
        this._$dispatchEvent("onok", e)
    };
    l.__onCCClick = function (e) {
        i._$stop(e);
        this._$hide()
    };
    return o._$$NoReturnWindow
}, 2, 3, 5, 226, 227, 228, 118);
I$(105, function (t, i, n, s, r, a) {
    function o(e) {
        var t = new Date((+e));
        return 2016 === t.getFullYear() && 6 === t.getMonth() && 15 === t.getDate()
    }

    var l;
    n._$$Index = t._$klass();
    l = n._$$Index._$extend(i._$$Module);
    n._$$Index._$allocate({});
    l.__reset = function (e) {
        this.__initTopBanner()
    };
    l.__initTopBanner = function () {
        var t = e._$get("index-netease-com"), i = e._$getByClassName(t, "live-banner")[0], n = e._$getByClassName(t, "g-bd")[0], s = +e._$attr(i, "data-date");
        if (o(s)) {
            e._$setStyle(i, "height", "42px");
            e._$addClassName(n, "top42")
        }
    };
    return n
}, 2, 12);
I$(293, '<div class="m-page2" r-hide="total<2">\n  <div class="pointer">\n    <a class="prev" href="javascript:void(0);" on-click={{ this.nav(current-1)}}>上一页</a>\n    <ul>\n      {{#if total - 5 > show * 2}}\n          <li on-click={{ this.nav(1)}} class={{current==1? \'z-active\': \'\'}}><a href="#">1</a></li>\n          {{#if begin > 2}}\n          <li class="ellips">...</li>\n          {{/if}}\n          {{#list begin..end as i}}\n            <li on-click={{ this.nav(i)}} class={{current==i? \'z-active\': \'\'}}>\n            <a href="javascript:void(0);">{{i}}</a>\n            </li>\n          {{/list}}\n          {{#if (end < total-1)}}\n          <li class="ellips">...</li>\n          {{/if}}\n          <li on-click={{ this.nav(total)}} class={{current==total? \'z-active\': \'\'}}>\n           <a href="javascript:void(0);">{{total}}</a>\n          </li>\n      {{#else}}\n          {{#list 1..total as i}}\n            <li on-click={{ this.nav(i)}} class={{current==i? \'z-active\': \'\'}}>\n            <a href="javascript:void(0);">{{i}}</a>\n            </li>\n          {{/list}}\n      {{/if}}\n    </ul>\n    <a class="next" href="javascript:void(0);" on-click={{ this.nav(current + 1)}}>下一页</a>\n  </div>\n</div>');
I$(241, function (e, t) {
    var i = t.extend({name: "ucenterpager", template: e});
    return i
}, 293, 279);
I$(116, function (e, t, i, n, s, r, a, o, l) {
    r._$toggle = function () {
        var e = function (e, i) {
            var n = t._$get(e.element), s = e.clazz, r = {event: i, clazz: s, target: n, source: t._$get(e.source)};
            e.onbeforetoggle.call(null, r);
            if (!r.stopped) {
                if (t._$hasClassName(n, s)) {
                    r.toggled = !1;
                    t._$delClassName(n, s)
                } else {
                    r.toggled = !0;
                    t._$addClassName(n, s)
                }
                e.ontoggle.call(null, r)
            }
        };
        return function (s, r) {
            s = t._$get(s);
            if (s) {
                var a = {ontoggle: o, onbeforetoggle: o, clazz: "js-toggle", source: t._$id(s), element: s.parentNode};
                if (i._$isString(r)) {
                    var l = t._$get(r);
                    l ? a.element = l : a.clazz = r
                } else {
                    i._$fetch(a, r);
                    a.element = t._$get(a.element)
                }
                a.element = t._$id(a.element);
                n._$addEvent(s, "click", e._$bind(null, a))
            }
        }
    }();
    s._$merge(r);
    if (!0)e.copy(e.P("nej.e"), r);
    return r
}, 132, 3, 28, 5, 133);