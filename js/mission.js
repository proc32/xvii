/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var at = (e, p) => () => (p || e((p = { exports: {} }).exports, p), p.exports);
    var Xt = at(() => {
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                p = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !p) { window.objectFitPolyfill = function() { return !1 }; return }
            let b = function(u) {
                    let x = window.getComputedStyle(u, null),
                        z = x.getPropertyValue("position"),
                        V = x.getPropertyValue("overflow"),
                        M = x.getPropertyValue("display");
                    (!z || z === "static") && (u.style.position = "relative"), V !== "hidden" && (u.style.overflow = "hidden"), (!M || M === "inline") && (u.style.display = "block"), u.clientHeight === 0 && (u.style.height = "100%"), u.className.indexOf("object-fit-polyfill") === -1 && (u.className += " object-fit-polyfill")
                },
                S = function(u) {
                    let x = window.getComputedStyle(u, null),
                        z = { "max-width": "none", "max-height": "none", "min-width": "0px", "min-height": "0px", top: "auto", right: "auto", bottom: "auto", left: "auto", "margin-top": "0px", "margin-right": "0px", "margin-bottom": "0px", "margin-left": "0px" };
                    for (let V in z) x.getPropertyValue(V) !== z[V] && (u.style[V] = z[V])
                },
                v = function(u) {
                    let x = u.parentNode;
                    b(x), S(u), u.style.position = "absolute", u.style.height = "100%", u.style.width = "auto", u.clientWidth > x.clientWidth ? (u.style.top = "0", u.style.marginTop = "0", u.style.left = "50%", u.style.marginLeft = u.clientWidth / -2 + "px") : (u.style.width = "100%", u.style.height = "auto", u.style.left = "0", u.style.marginLeft = "0", u.style.top = "50%", u.style.marginTop = u.clientHeight / -2 + "px")
                },
                E = function(u) {
                    if (typeof u > "u" || u instanceof Event) u = document.querySelectorAll("[data-object-fit]");
                    else if (u && u.nodeName) u = [u];
                    else if (typeof u == "object" && u.length && u[0].nodeName) u = u;
                    else return !1;
                    for (let x = 0; x < u.length; x++) {
                        if (!u[x].nodeName) continue;
                        let z = u[x].nodeName.toLowerCase();
                        if (z === "img") {
                            if (p) continue;
                            u[x].complete ? v(u[x]) : u[x].addEventListener("load", function() { v(this) })
                        } else z === "video" ? u[x].readyState > 0 ? v(u[x]) : u[x].addEventListener("loadedmetadata", function() { v(this) }) : v(u[x])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", E) : E(), window.addEventListener("resize", E), window.objectFitPolyfill = E
        })()
    });
    var Kt = at(() => {
        (function() {
            if (typeof window > "u") return;

            function e(b) { Webflow.env("design") || ($("video").each(function() { b && $(this).prop("autoplay") ? this.play() : this.pause() }), $(".w-background-video--control").each(function() { b ? h($(this)) : p($(this)) })) }

            function p(b) { b.find("> span").each(function(S) { $(this).prop("hidden", () => S === 0) }) }

            function h(b) { b.find("> span").each(function(S) { $(this).prop("hidden", () => S === 1) }) }
            $(document).ready(() => {
                let b = window.matchMedia("(prefers-reduced-motion: reduce)");
                b.addEventListener("change", S => { e(!S.matches) }), b.matches && e(!1), $("video:not([autoplay])").each(function() { $(this).parent().find(".w-background-video--control").each(function() { p($(this)) }) }), $(document).on("click", ".w-background-video--control", function(S) {
                    if (Webflow.env("design")) return;
                    let v = $(S.currentTarget),
                        E = $(`video#${v.attr("aria-controls")}`).get(0);
                    if (E)
                        if (E.paused) {
                            let u = E.play();
                            h(v), u && typeof u.catch == "function" && u.catch(() => { p(v) })
                        } else E.pause(), p(v)
                })
            })
        })()
    });
    var Ot = at(() => {
        window.tram = function(e) {
            function p(t, n) { var i = new J.Bare; return i.init(t, n) }

            function h(t) { return t.replace(/[A-Z]/g, function(n) { return "-" + n.toLowerCase() }) }

            function b(t) {
                var n = parseInt(t.slice(1), 16),
                    i = n >> 16 & 255,
                    r = n >> 8 & 255,
                    s = 255 & n;
                return [i, r, s]
            }

            function S(t, n, i) { return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1) }

            function v() {}

            function E(t, n) { z("Type warning: Expected: [" + t + "] Got: [" + typeof n + "] " + n) }

            function u(t, n, i) { z("Units do not match [" + t + "]: " + n + ", " + i) }

            function x(t, n, i) { if (n !== void 0 && (i = n), t === void 0) return i; var r = i; return we.test(t) || !Ht.test(t) ? r = parseInt(t, 10) : Ht.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r === r ? r : i }

            function z(t) { nt.debug && window && window.console.warn(t) }

            function V(t) {
                for (var n = -1, i = t ? t.length : 0, r = []; ++n < i;) {
                    var s = t[n];
                    s && r.push(s)
                }
                return r
            }
            var M = function(t, n, i) {
                    function r(L) { return typeof L == "object" }

                    function s(L) { return typeof L == "function" }

                    function o() {}

                    function g(L, K) {
                        function f() { var tt = new q; return s(tt.init) && tt.init.apply(tt, arguments), tt }

                        function q() {}
                        K === i && (K = L, L = Object), f.Bare = q;
                        var F, Z = o[t] = L[t],
                            ht = q[t] = f[t] = new o;
                        return ht.constructor = f, f.mixin = function(tt) { return q[t] = f[t] = g(f, tt)[t], f }, f.open = function(tt) {
                            if (F = {}, s(tt) ? F = tt.call(f, ht, Z, f, L) : r(tt) && (F = tt), r(F))
                                for (var qt in F) n.call(F, qt) && (ht[qt] = F[qt]);
                            return s(ht.init) || (ht.init = L), f
                        }, f.open(K)
                    }
                    return g
                }("prototype", {}.hasOwnProperty),
                D = {
                    ease: ["ease", function(t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (-2.75 * o * s + 11 * s * s + -15.5 * o + 8 * s + .25 * t)
                    }],
                    "ease-in": ["ease-in", function(t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (-1 * o * s + 3 * s * s + -3 * o + 2 * s)
                    }],
                    "ease-out": ["ease-out", function(t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (.3 * o * s + -1.6 * s * s + 2.2 * o + -1.8 * s + 1.9 * t)
                    }],
                    "ease-in-out": ["ease-in-out", function(t, n, i, r) {
                        var s = (t /= r) * t,
                            o = s * t;
                        return n + i * (2 * o * s + -5 * s * s + 2 * o + 2 * s)
                    }],
                    linear: ["linear", function(t, n, i, r) { return i * t / r + n }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, n, i, r) { return i * (t /= r) * t + n }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, n, i, r) { return -i * (t /= r) * (t - 2) + n }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, n, i, r) { return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, n, i, r) { return i * (t /= r) * t * t + n }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, n, i, r) { return i * ((t = t / r - 1) * t * t + 1) + n }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, n, i, r) { return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, n, i, r) { return i * (t /= r) * t * t * t + n }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, n, i, r) { return -i * ((t = t / r - 1) * t * t * t - 1) + n }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, n, i, r) { return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, n, i, r) { return i * (t /= r) * t * t * t * t + n }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, n, i, r) { return i * ((t = t / r - 1) * t * t * t * t + 1) + n }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, n, i, r) { return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, n, i, r) { return -i * Math.cos(t / r * (Math.PI / 2)) + i + n }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, n, i, r) { return i * Math.sin(t / r * (Math.PI / 2)) + n }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, n, i, r) { return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, n, i, r) { return t === 0 ? n : i * Math.pow(2, 10 * (t / r - 1)) + n }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, n, i, r) { return t === r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, n, i, r) { return t === 0 ? n : t === r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, n, i, r) { return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, n, i, r) { return i * Math.sqrt(1 - (t = t / r - 1) * t) + n }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, n, i, r) { return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, n, i, r, s) { return s === void 0 && (s = 1.70158), i * (t /= r) * t * ((s + 1) * t - s) + n }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, n, i, r, s) { return s === void 0 && (s = 1.70158), i * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + n }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, n, i, r, s) { return s === void 0 && (s = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : i / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }]
                },
                O = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
                Y = document,
                X = window,
                R = "bkwld-tram",
                P = /[\-\.0-9]/g,
                k = /[A-Z]/,
                d = "number",
                H = /^(rgb|#)/,
                C = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                Q = /(deg|rad|turn)$/,
                rt = "unitless",
                vt = /(all|none) 0s ease 0s/,
                _t = /^(width|height)$/,
                pt = " ",
                m = Y.createElement("a"),
                a = ["Webkit", "Moz", "O", "ms"],
                c = ["-webkit-", "-moz-", "-o-", "-ms-"],
                w = function(t) {
                    if (t in m.style) return { dom: t, css: t };
                    var n, i, r = "",
                        s = t.split("-");
                    for (n = 0; n < s.length; n++) r += s[n].charAt(0).toUpperCase() + s[n].slice(1);
                    for (n = 0; n < a.length; n++)
                        if (i = a[n] + r, i in m.style) return { dom: i, css: c[n] + t }
                },
                l = p.support = { bind: Function.prototype.bind, transform: w("transform"), transition: w("transition"), backface: w("backface-visibility"), timing: w("transition-timing-function") };
            if (l.transition) {
                var T = l.timing.dom;
                if (m.style[T] = D["ease-in-back"][0], !m.style[T])
                    for (var _ in O) D[_][0] = O[_]
            }
            var G = p.frame = function() { var t = X.requestAnimationFrame || X.webkitRequestAnimationFrame || X.mozRequestAnimationFrame || X.oRequestAnimationFrame || X.msRequestAnimationFrame; return t && l.bind ? t.bind(X) : function(n) { X.setTimeout(n, 16) } }(),
                lt = p.now = function() {
                    var t = X.performance,
                        n = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return n && l.bind ? n.bind(t) : Date.now || function() { return +new Date }
                }(),
                mt = M(function(t) {
                    function n(y, N) {
                        var U = V(("" + y).split(pt)),
                            B = U[0];
                        N = N || {};
                        var et = Nt[B];
                        if (!et) return z("Unsupported property: " + B);
                        if (!N.weak || !this.props[B]) {
                            var ut = et[0],
                                it = this.props[B];
                            return it || (it = this.props[B] = new ut.Bare), it.init(this.$el, U, et, N), it
                        }
                    }

                    function i(y, N, U) {
                        if (y) {
                            var B = typeof y;
                            if (N || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), B == "number" && N) return this.timer = new Ft({ duration: y, context: this, complete: o }), void(this.active = !0);
                            if (B == "string" && N) {
                                switch (y) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        g.call(this);
                                        break;
                                    case "redraw":
                                        q.call(this);
                                        break;
                                    default:
                                        n.call(this, y, U && U[1])
                                }
                                return o.call(this)
                            }
                            if (B == "function") return void y.call(this, this);
                            if (B == "object") {
                                var et = 0;
                                ht.call(this, y, function(j, be) { j.span > et && (et = j.span), j.stop(), j.animate(be) }, function(j) { "wait" in j && (et = x(j.wait, 0)) }), Z.call(this), et > 0 && (this.timer = new Ft({ duration: et, context: this }), this.active = !0, N && (this.timer.complete = o));
                                var ut = this,
                                    it = !1,
                                    zt = {};
                                G(function() { ht.call(ut, y, function(j) { j.active && (it = !0, zt[j.name] = j.nextStyle) }), it && ut.$el.css(zt) })
                            }
                        }
                    }

                    function r(y) { y = x(y, 0), this.active ? this.queue.push({ options: y }) : (this.timer = new Ft({ duration: y, context: this, complete: o }), this.active = !0) }

                    function s(y) { return this.active ? (this.queue.push({ options: y, args: arguments }), void(this.timer.complete = o)) : z("No active transition timer. Use start() or wait() before then().") }

                    function o() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var y = this.queue.shift();
                            i.call(this, y.options, !0, y.args)
                        }
                    }

                    function g(y) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var N;
                        typeof y == "string" ? (N = {}, N[y] = 1) : N = typeof y == "object" && y != null ? y : this.props, ht.call(this, N, tt), Z.call(this)
                    }

                    function L(y) { g.call(this, y), ht.call(this, y, qt, ge) }

                    function K(y) { typeof y != "string" && (y = "block"), this.el.style.display = y }

                    function f() { g.call(this), this.el.style.display = "none" }

                    function q() { this.el.offsetHeight }

                    function F() { g.call(this), e.removeData(this.el, R), this.$el = this.el = null }

                    function Z() {
                        var y, N, U = [];
                        this.upstream && U.push(this.upstream);
                        for (y in this.props) N = this.props[y], N.active && U.push(N.string);
                        U = U.join(","), this.style !== U && (this.style = U, this.el.style[l.transition.dom] = U)
                    }

                    function ht(y, N, U) {
                        var B, et, ut, it, zt = N !== tt,
                            j = {};
                        for (B in y) ut = y[B], B in wt ? (j.transform || (j.transform = {}), j.transform[B] = ut) : (k.test(B) && (B = h(B)), B in Nt ? j[B] = ut : (it || (it = {}), it[B] = ut));
                        for (B in j) {
                            if (ut = j[B], et = this.props[B], !et) {
                                if (!zt) continue;
                                et = n.call(this, B)
                            }
                            N.call(this, et, ut)
                        }
                        U && it && U.call(this, it)
                    }

                    function tt(y) { y.stop() }

                    function qt(y, N) { y.set(N) }

                    function ge(y) { this.$el.css(y) }

                    function st(y, N) { t[y] = function() { return this.children ? ye.call(this, N, arguments) : (this.el && N.apply(this, arguments), this) } }

                    function ye(y, N) { var U, B = this.children.length; for (U = 0; B > U; U++) y.apply(this.children[U], N); return this }
                    t.init = function(y) {
                        if (this.$el = e(y), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, nt.keepInherited && !nt.fallback) {
                            var N = $t(this.el, "transition");
                            N && !vt.test(N) && (this.upstream = N)
                        }
                        l.backface && nt.hideBackface && xt(this.el, l.backface.css, "hidden")
                    }, st("add", n), st("start", i), st("wait", r), st("then", s), st("next", o), st("stop", g), st("set", L), st("show", K), st("hide", f), st("redraw", q), st("destroy", F)
                }),
                J = M(mt, function(t) {
                    function n(i, r) { var s = e.data(i, R) || e.data(i, R, new mt.Bare); return s.el || s.init(i), r ? s.start(r) : s }
                    t.init = function(i, r) { var s = e(i); if (!s.length) return this; if (s.length === 1) return n(s[0], r); var o = []; return s.each(function(g, L) { o.push(n(L, r)) }), this.children = o, this }
                }),
                A = M(function(t) {
                    function n() {
                        var o = this.get();
                        this.update("auto");
                        var g = this.get();
                        return this.update(o), g
                    }

                    function i(o, g, L) { return g !== void 0 && (L = g), o in D ? o : L }

                    function r(o) { var g = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(o); return (g ? S(g[1], g[2], g[3]) : o).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") }
                    var s = { duration: 500, ease: "ease", delay: 0 };
                    t.init = function(o, g, L, K) {
                        this.$el = o, this.el = o[0];
                        var f = g[0];
                        L[2] && (f = L[2]), Vt[f] && (f = Vt[f]), this.name = f, this.type = L[1], this.duration = x(g[1], this.duration, s.duration), this.ease = i(g[2], this.ease, s.ease), this.delay = x(g[3], this.delay, s.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _t.test(this.name), this.unit = K.unit || this.unit || nt.defaultUnit, this.angle = K.angle || this.angle || nt.defaultAngle, nt.fallback || K.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + pt + this.duration + "ms" + (this.ease != "ease" ? pt + D[this.ease][0] : "") + (this.delay ? pt + this.delay + "ms" : ""))
                    }, t.set = function(o) { o = this.convert(o, this.type), this.update(o), this.redraw() }, t.transition = function(o) { this.active = !0, o = this.convert(o, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), o == "auto" && (o = n.call(this))), this.nextStyle = o }, t.fallback = function(o) {
                        var g = this.el.style[this.name] || this.convert(this.get(), this.type);
                        o = this.convert(o, this.type), this.auto && (g == "auto" && (g = this.convert(this.get(), this.type)), o == "auto" && (o = n.call(this))), this.tween = new At({ from: g, to: o, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                    }, t.get = function() { return $t(this.el, this.name) }, t.update = function(o) { xt(this.el, this.name, o) }, t.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, xt(this.el, this.name, this.get()));
                        var o = this.tween;
                        o && o.context && o.destroy()
                    }, t.convert = function(o, g) {
                        if (o == "auto" && this.auto) return o;
                        var L, K = typeof o == "number",
                            f = typeof o == "string";
                        switch (g) {
                            case d:
                                if (K) return o;
                                if (f && o.replace(P, "") === "") return +o;
                                L = "number(unitless)";
                                break;
                            case H:
                                if (f) { if (o === "" && this.original) return this.original; if (g.test(o)) return o.charAt(0) == "#" && o.length == 7 ? o : r(o) }
                                L = "hex or rgb string";
                                break;
                            case C:
                                if (K) return o + this.unit;
                                if (f && g.test(o)) return o;
                                L = "number(px) or string(unit)";
                                break;
                            case I:
                                if (K) return o + this.unit;
                                if (f && g.test(o)) return o;
                                L = "number(px) or string(unit or %)";
                                break;
                            case Q:
                                if (K) return o + this.angle;
                                if (f && g.test(o)) return o;
                                L = "number(deg) or string(angle)";
                                break;
                            case rt:
                                if (K || f && I.test(o)) return o;
                                L = "number(unitless) or string(unit or %)"
                        }
                        return E(L, o), o
                    }, t.redraw = function() { this.el.offsetHeight }
                }),
                ot = M(A, function(t, n) { t.init = function() { n.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), H)) } }),
                St = M(A, function(t, n) { t.init = function() { n.init.apply(this, arguments), this.animate = this.fallback }, t.get = function() { return this.$el[this.name]() }, t.update = function(i) { this.$el[this.name](i) } }),
                Tt = M(A, function(t, n) {
                    function i(r, s) { var o, g, L, K, f; for (o in r) K = wt[o], L = K[0], g = K[1] || o, f = this.convert(r[o], L), s.call(this, g, f, L) }
                    t.init = function() { n.init.apply(this, arguments), this.current || (this.current = {}, wt.perspective && nt.perspective && (this.current.perspective = nt.perspective, xt(this.el, this.name, this.style(this.current)), this.redraw())) }, t.set = function(r) { i.call(this, r, function(s, o) { this.current[s] = o }), xt(this.el, this.name, this.style(this.current)), this.redraw() }, t.transition = function(r) {
                        var s = this.values(r);
                        this.tween = new Dt({ current: this.current, values: s, duration: this.duration, delay: this.delay, ease: this.ease });
                        var o, g = {};
                        for (o in this.current) g[o] = o in s ? s[o] : this.current[o];
                        this.active = !0, this.nextStyle = this.style(g)
                    }, t.fallback = function(r) {
                        var s = this.values(r);
                        this.tween = new Dt({ current: this.current, values: s, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this })
                    }, t.update = function() { xt(this.el, this.name, this.style(this.current)) }, t.style = function(r) { var s, o = ""; for (s in r) o += s + "(" + r[s] + ") "; return o }, t.values = function(r) { var s, o = {}; return i.call(this, r, function(g, L, K) { o[g] = L, this.current[g] === void 0 && (s = 0, ~g.indexOf("scale") && (s = 1), this.current[g] = this.convert(s, K)) }), o }
                }),
                At = M(function(t) {
                    function n(f) { L.push(f) === 1 && G(i) }

                    function i() {
                        var f, q, F, Z = L.length;
                        if (Z)
                            for (G(i), q = lt(), f = Z; f--;) F = L[f], F && F.render(q)
                    }

                    function r(f) {
                        var q, F = e.inArray(f, L);
                        F >= 0 && (q = L.slice(F + 1), L.length = F, q.length && (L = L.concat(q)))
                    }

                    function s(f) { return Math.round(f * K) / K }

                    function o(f, q, F) { return S(f[0] + F * (q[0] - f[0]), f[1] + F * (q[1] - f[1]), f[2] + F * (q[2] - f[2])) }
                    var g = { ease: D.ease[1], from: 0, to: 1 };
                    t.init = function(f) {
                        this.duration = f.duration || 0, this.delay = f.delay || 0;
                        var q = f.ease || g.ease;
                        D[q] && (q = D[q][1]), typeof q != "function" && (q = g.ease), this.ease = q, this.update = f.update || v, this.complete = f.complete || v, this.context = f.context || this, this.name = f.name;
                        var F = f.from,
                            Z = f.to;
                        F === void 0 && (F = g.from), Z === void 0 && (Z = g.to), this.unit = f.unit || "", typeof F == "number" && typeof Z == "number" ? (this.begin = F, this.change = Z - F) : this.format(Z, F), this.value = this.begin + this.unit, this.start = lt(), f.autoplay !== !1 && this.play()
                    }, t.play = function() { this.active || (this.start || (this.start = lt()), this.active = !0, n(this)) }, t.stop = function() { this.active && (this.active = !1, r(this)) }, t.render = function(f) {
                        var q, F = f - this.start;
                        if (this.delay) {
                            if (F <= this.delay) return;
                            F -= this.delay
                        }
                        if (F < this.duration) { var Z = this.ease(F, 0, 1, this.duration); return q = this.startRGB ? o(this.startRGB, this.endRGB, Z) : s(this.begin + Z * this.change), this.value = q + this.unit, void this.update.call(this.context, this.value) }
                        q = this.endHex || this.begin + this.change, this.value = q + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, t.format = function(f, q) {
                        if (q += "", f += "", f.charAt(0) == "#") return this.startRGB = b(q), this.endRGB = b(f), this.endHex = f, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var F = q.replace(P, ""),
                                Z = f.replace(P, "");
                            F !== Z && u("tween", q, f), this.unit = F
                        }
                        q = parseFloat(q), f = parseFloat(f), this.begin = this.value = q, this.change = f - q
                    }, t.destroy = function() { this.stop(), this.context = null, this.ease = this.update = this.complete = v };
                    var L = [],
                        K = 1e3
                }),
                Ft = M(At, function(t) {
                    t.init = function(n) { this.duration = n.duration || 0, this.complete = n.complete || v, this.context = n.context, this.play() }, t.render = function(n) {
                        var i = n - this.start;
                        i < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Dt = M(At, function(t, n) {
                    t.init = function(i) {
                        this.context = i.context, this.update = i.update, this.tweens = [], this.current = i.current;
                        var r, s;
                        for (r in i.values) s = i.values[r], this.current[r] !== s && this.tweens.push(new At({ name: r, from: this.current[r], to: s, duration: i.duration, delay: i.delay, ease: i.ease, autoplay: !1 }));
                        this.play()
                    }, t.render = function(i) {
                        var r, s, o = this.tweens.length,
                            g = !1;
                        for (r = o; r--;) s = this.tweens[r], s.context && (s.render(i), this.current[s.name] = s.value, g = !0);
                        return g ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, t.destroy = function() {
                        if (n.destroy.call(this), this.tweens) {
                            var i, r = this.tweens.length;
                            for (i = r; i--;) this.tweens[i].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                nt = p.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !l.transition, agentTests: [] };
            p.fallback = function(t) {
                if (!l.transition) return nt.fallback = !0;
                nt.agentTests.push("(" + t + ")");
                var n = new RegExp(nt.agentTests.join("|"), "i");
                nt.fallback = n.test(navigator.userAgent)
            }, p.fallback("6.0.[2-5] Safari"), p.tween = function(t) { return new At(t) }, p.delay = function(t, n, i) { return new Ft({ complete: n, duration: t, context: i }) }, e.fn.tram = function(t) { return p.call(null, this, t) };
            var xt = e.style,
                $t = e.css,
                Vt = { transform: l.transform && l.transform.css },
                Nt = { color: [ot, H], background: [ot, H, "background-color"], "outline-color": [ot, H], "border-color": [ot, H], "border-top-color": [ot, H], "border-right-color": [ot, H], "border-bottom-color": [ot, H], "border-left-color": [ot, H], "border-width": [A, C], "border-top-width": [A, C], "border-right-width": [A, C], "border-bottom-width": [A, C], "border-left-width": [A, C], "border-spacing": [A, C], "letter-spacing": [A, C], margin: [A, C], "margin-top": [A, C], "margin-right": [A, C], "margin-bottom": [A, C], "margin-left": [A, C], padding: [A, C], "padding-top": [A, C], "padding-right": [A, C], "padding-bottom": [A, C], "padding-left": [A, C], "outline-width": [A, C], opacity: [A, d], top: [A, I], right: [A, I], bottom: [A, I], left: [A, I], "font-size": [A, I], "text-indent": [A, I], "word-spacing": [A, I], width: [A, I], "min-width": [A, I], "max-width": [A, I], height: [A, I], "min-height": [A, I], "max-height": [A, I], "line-height": [A, rt], "scroll-top": [St, d, "scrollTop"], "scroll-left": [St, d, "scrollLeft"] },
                wt = {};
            l.transform && (Nt.transform = [Tt], wt = { x: [I, "translateX"], y: [I, "translateY"], rotate: [Q], rotateX: [Q], rotateY: [Q], scale: [d], scaleX: [d], scaleY: [d], skew: [Q], skewX: [Q], skewY: [Q] }), l.transform && l.backface && (wt.z = [I, "translateZ"], wt.rotateZ = [Q], wt.scaleZ = [d], wt.perspective = [C]);
            var we = /ms/,
                Ht = /s|\./;
            return e.tram = p
        }(window.jQuery)
    });
    var Gt = at((Be, Yt) => {
        var xe = window.$,
            Ee = Ot() && xe.tram;
        Yt.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var p = {},
                h = Array.prototype,
                b = Object.prototype,
                S = Function.prototype,
                v = h.push,
                E = h.slice,
                u = h.concat,
                x = b.toString,
                z = b.hasOwnProperty,
                V = h.forEach,
                M = h.map,
                D = h.reduce,
                O = h.reduceRight,
                Y = h.filter,
                X = h.every,
                R = h.some,
                P = h.indexOf,
                k = h.lastIndexOf,
                d = Array.isArray,
                H = Object.keys,
                C = S.bind,
                I = e.each = e.forEach = function(a, c, w) {
                    if (a == null) return a;
                    if (V && a.forEach === V) a.forEach(c, w);
                    else if (a.length === +a.length) {
                        for (var l = 0, T = a.length; l < T; l++)
                            if (c.call(w, a[l], l, a) === p) return
                    } else
                        for (var _ = e.keys(a), l = 0, T = _.length; l < T; l++)
                            if (c.call(w, a[_[l]], _[l], a) === p) return; return a
                };
            e.map = e.collect = function(a, c, w) { var l = []; return a == null ? l : M && a.map === M ? a.map(c, w) : (I(a, function(T, _, G) { l.push(c.call(w, T, _, G)) }), l) }, e.find = e.detect = function(a, c, w) { var l; return Q(a, function(T, _, G) { if (c.call(w, T, _, G)) return l = T, !0 }), l }, e.filter = e.select = function(a, c, w) { var l = []; return a == null ? l : Y && a.filter === Y ? a.filter(c, w) : (I(a, function(T, _, G) { c.call(w, T, _, G) && l.push(T) }), l) };
            var Q = e.some = e.any = function(a, c, w) { c || (c = e.identity); var l = !1; return a == null ? l : R && a.some === R ? a.some(c, w) : (I(a, function(T, _, G) { if (l || (l = c.call(w, T, _, G))) return p }), !!l) };
            e.contains = e.include = function(a, c) { return a == null ? !1 : P && a.indexOf === P ? a.indexOf(c) != -1 : Q(a, function(w) { return w === c }) }, e.delay = function(a, c) { var w = E.call(arguments, 2); return setTimeout(function() { return a.apply(null, w) }, c) }, e.defer = function(a) { return e.delay.apply(e, [a, 1].concat(E.call(arguments, 1))) }, e.throttle = function(a) { var c, w, l; return function() { c || (c = !0, w = arguments, l = this, Ee.frame(function() { c = !1, a.apply(l, w) })) } }, e.debounce = function(a, c, w) {
                var l, T, _, G, lt, mt = function() {
                    var J = e.now() - G;
                    J < c ? l = setTimeout(mt, c - J) : (l = null, w || (lt = a.apply(_, T), _ = T = null))
                };
                return function() { _ = this, T = arguments, G = e.now(); var J = w && !l; return l || (l = setTimeout(mt, c)), J && (lt = a.apply(_, T), _ = T = null), lt }
            }, e.defaults = function(a) { if (!e.isObject(a)) return a; for (var c = 1, w = arguments.length; c < w; c++) { var l = arguments[c]; for (var T in l) a[T] === void 0 && (a[T] = l[T]) } return a }, e.keys = function(a) { if (!e.isObject(a)) return []; if (H) return H(a); var c = []; for (var w in a) e.has(a, w) && c.push(w); return c }, e.has = function(a, c) { return z.call(a, c) }, e.isObject = function(a) { return a === Object(a) }, e.now = Date.now || function() { return new Date().getTime() }, e.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
            var rt = /(.)^/,
                vt = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                _t = /\\|'|\r|\n|\u2028|\u2029/g,
                pt = function(a) { return "\\" + vt[a] },
                m = /^\s*(\w|\$)+\s*$/;
            return e.template = function(a, c, w) {
                !c && w && (c = w), c = e.defaults({}, c, e.templateSettings);
                var l = RegExp([(c.escape || rt).source, (c.interpolate || rt).source, (c.evaluate || rt).source].join("|") + "|$", "g"),
                    T = 0,
                    _ = "__p+='";
                a.replace(l, function(J, A, ot, St, Tt) { return _ += a.slice(T, Tt).replace(_t, pt), T = Tt + J.length, A ? _ += `'+
((__t=(` + A + `))==null?'':_.escape(__t))+
'` : ot ? _ += `'+
((__t=(` + ot + `))==null?'':__t)+
'` : St && (_ += `';
` + St + `
__p+='`), J }), _ += `';
`;
                var G = c.variable;
                if (G) { if (!m.test(G)) throw new Error("variable is not a bare identifier: " + G) } else _ = `with(obj||{}){
` + _ + `}
`, G = "obj";
                _ = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + _ + `return __p;
`;
                var lt;
                try { lt = new Function(c.variable || "obj", "_", _) } catch (J) { throw J.source = _, J }
                var mt = function(J) { return lt.call(this, J, e) };
                return mt.source = "function(" + G + `){
` + _ + "}", mt
            }, e
        }()
    });
    var bt = at((We, ne) => {
        var W = {},
            Et = {},
            kt = [],
            It = window.Webflow || [],
            gt = window.jQuery,
            ft = gt(window),
            ke = gt(document),
            dt = gt.isFunction,
            ct = W._ = Gt(),
            Zt = W.tram = Ot() && gt.tram,
            Pt = !1,
            Bt = !1;
        Zt.config.hideBackface = !1;
        Zt.config.keepInherited = !0;
        W.define = function(e, p, h) { Et[e] && Qt(Et[e]); var b = Et[e] = p(gt, ct, h) || {}; return jt(b), b };
        W.require = function(e) { return Et[e] };

        function jt(e) { W.env() && (dt(e.design) && ft.on("__wf_design", e.design), dt(e.preview) && ft.on("__wf_preview", e.preview)), dt(e.destroy) && ft.on("__wf_destroy", e.destroy), e.ready && dt(e.ready) && Le(e) }

        function Le(e) {
            if (Pt) { e.ready(); return }
            ct.contains(kt, e.ready) || kt.push(e.ready)
        }

        function Qt(e) { dt(e.design) && ft.off("__wf_design", e.design), dt(e.preview) && ft.off("__wf_preview", e.preview), dt(e.destroy) && ft.off("__wf_destroy", e.destroy), e.ready && dt(e.ready) && _e(e) }

        function _e(e) { kt = ct.filter(kt, function(p) { return p !== e.ready }) }
        W.push = function(e) {
            if (Pt) { dt(e) && e(); return }
            It.push(e)
        };
        W.env = function(e) {
            var p = window.__wf_design,
                h = typeof p < "u";
            if (!e) return h;
            if (e === "design") return h && p;
            if (e === "preview") return h && !p;
            if (e === "slug") return h && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Mt = navigator.userAgent.toLowerCase(),
            Jt = W.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            Se = W.env.chrome = /chrome/.test(Mt) && /Google/.test(navigator.vendor) && parseInt(Mt.match(/chrome\/(\d+)\./)[1], 10),
            Ae = W.env.ios = /(ipod|iphone|ipad)/.test(Mt);
        W.env.safari = /safari/.test(Mt) && !Se && !Ae;
        var Rt;
        Jt && ke.on("touchstart mousedown", function(e) { Rt = e.target });
        W.validClick = Jt ? function(e) { return e === Rt || gt.contains(e, Rt) } : function() { return !0 };
        var te = "resize.webflow orientationchange.webflow load.webflow",
            qe = "scroll.webflow " + te;
        W.resize = Wt(ft, te);
        W.scroll = Wt(ft, qe);
        W.redraw = Wt();

        function Wt(e, p) {
            var h = [],
                b = {};
            return b.up = ct.throttle(function(S) { ct.each(h, function(v) { v(S) }) }), e && p && e.on(p, b.up), b.on = function(S) { typeof S == "function" && (ct.contains(h, S) || h.push(S)) }, b.off = function(S) {
                if (!arguments.length) { h = []; return }
                h = ct.filter(h, function(v) { return v !== S })
            }, b
        }
        W.location = function(e) { window.location = e };
        W.env() && (W.location = function() {});
        W.ready = function() { Pt = !0, Bt ? Te() : ct.each(kt, Ut), ct.each(It, Ut), W.resize.up() };

        function Ut(e) { dt(e) && e() }

        function Te() { Bt = !1, ct.each(Et, jt) }
        var yt;
        W.load = function(e) { yt.then(e) };

        function ee() { yt && (yt.reject(), ft.off("load", yt.resolve)), yt = new gt.Deferred, ft.on("load", yt.resolve) }
        W.destroy = function(e) { e = e || {}, Bt = !0, ft.triggerHandler("__wf_destroy"), e.domready != null && (Pt = e.domready), ct.each(Et, Qt), W.resize.off(), W.scroll.off(), W.redraw.off(), kt = [], It = [], yt.state() === "pending" && ee() };
        gt(W.ready);
        ee();
        ne.exports = window.Webflow = W
    });
    var oe = at((De, re) => {
        var ie = bt();
        ie.define("brand", re.exports = function(e) {
            var p = {},
                h = document,
                b = e("html"),
                S = e("body"),
                v = ".w-webflow-badge",
                E = window.location,
                u = /PhantomJS/i.test(navigator.userAgent),
                x = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                z;
            p.ready = function() {
                var O = b.attr("data-wf-status"),
                    Y = b.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(Y) && E.hostname !== Y && (O = !0), O && !u && (z = z || M(), D(), setTimeout(D, 500), e(h).off(x, V).on(x, V))
            };

            function V() {
                var O = h.fullScreen || h.mozFullScreen || h.webkitIsFullScreen || h.msFullscreenElement || !!h.webkitFullscreenElement;
                e(z).attr("style", O ? "display: none !important;" : "")
            }

            function M() {
                var O = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    Y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }),
                    X = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return O.append(Y, X), O[0]
            }

            function D() {
                var O = S.children(v),
                    Y = O.length && O.get(0) === z,
                    X = ie.env("editor");
                if (Y) { X && O.remove(); return }
                O.length && O.remove(), X || S.append(z)
            }
            return p
        })
    });
    var ue = at(($e, se) => {
        var Fe = bt();
        Fe.define("focus-visible", se.exports = function() {
            function e(h) {
                var b = !0,
                    S = !1,
                    v = null,
                    E = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };

                function u(d) { return !!(d && d !== document && d.nodeName !== "HTML" && d.nodeName !== "BODY" && "classList" in d && "contains" in d.classList) }

                function x(d) {
                    var H = d.type,
                        C = d.tagName;
                    return !!(C === "INPUT" && E[H] && !d.readOnly || C === "TEXTAREA" && !d.readOnly || d.isContentEditable)
                }

                function z(d) { d.getAttribute("data-wf-focus-visible") || d.setAttribute("data-wf-focus-visible", "true") }

                function V(d) { d.getAttribute("data-wf-focus-visible") && d.removeAttribute("data-wf-focus-visible") }

                function M(d) { d.metaKey || d.altKey || d.ctrlKey || (u(h.activeElement) && z(h.activeElement), b = !0) }

                function D() { b = !1 }

                function O(d) { u(d.target) && (b || x(d.target)) && z(d.target) }

                function Y(d) { u(d.target) && d.target.hasAttribute("data-wf-focus-visible") && (S = !0, window.clearTimeout(v), v = window.setTimeout(function() { S = !1 }, 100), V(d.target)) }

                function X() { document.visibilityState === "hidden" && (S && (b = !0), R()) }

                function R() { document.addEventListener("mousemove", k), document.addEventListener("mousedown", k), document.addEventListener("mouseup", k), document.addEventListener("pointermove", k), document.addEventListener("pointerdown", k), document.addEventListener("pointerup", k), document.addEventListener("touchmove", k), document.addEventListener("touchstart", k), document.addEventListener("touchend", k) }

                function P() { document.removeEventListener("mousemove", k), document.removeEventListener("mousedown", k), document.removeEventListener("mouseup", k), document.removeEventListener("pointermove", k), document.removeEventListener("pointerdown", k), document.removeEventListener("pointerup", k), document.removeEventListener("touchmove", k), document.removeEventListener("touchstart", k), document.removeEventListener("touchend", k) }

                function k(d) { d.target.nodeName && d.target.nodeName.toLowerCase() === "html" || (b = !1, P()) }
                document.addEventListener("keydown", M, !0), document.addEventListener("mousedown", D, !0), document.addEventListener("pointerdown", D, !0), document.addEventListener("touchstart", D, !0), document.addEventListener("visibilitychange", X, !0), R(), h.addEventListener("focus", O, !0), h.addEventListener("blur", Y, !0)
            }

            function p() { if (typeof document < "u") try { document.querySelector(":focus-visible") } catch { e(document) } }
            return { ready: p }
        })
    });
    var fe = at((Ve, ce) => {
        var ae = bt();
        ae.define("focus", ce.exports = function() {
            var e = [],
                p = !1;

            function h(E) { p && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), e.unshift(E)) }

            function b(E) {
                var u = E.target,
                    x = u.tagName;
                return /^a$/i.test(x) && u.href != null || /^(button|textarea)$/i.test(x) && u.disabled !== !0 || /^input$/i.test(x) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(x) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(x) || /^video$/i.test(x) && u.controls === !0
            }

            function S(E) {
                b(E) && (p = !0, setTimeout(() => {
                    for (p = !1, E.target.focus(); e.length > 0;) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type, u))
                    }
                }, 0))
            }

            function v() { typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ae.env.safari && (document.addEventListener("mousedown", S, !0), document.addEventListener("mouseup", h, !0), document.addEventListener("click", h, !0)) }
            return { ready: v }
        })
    });
    var he = at((He, le) => {
        var Lt = bt();
        Lt.define("links", le.exports = function(e, p) {
            var h = {},
                b = e(window),
                S, v = Lt.env(),
                E = window.location,
                u = document.createElement("a"),
                x = "w--current",
                z = /index\.(html|php)$/,
                V = /\/$/,
                M, D;
            h.ready = h.design = h.preview = O;

            function O() {
                S = v && Lt.env("design"), D = Lt.env("slug") || E.pathname || "", Lt.scroll.off(X), M = [];
                for (var P = document.links, k = 0; k < P.length; ++k) Y(P[k]);
                M.length && (Lt.scroll.on(X), X())
            }

            function Y(P) {
                var k = S && P.getAttribute("href-disabled") || P.getAttribute("href");
                if (u.href = k, !(k.indexOf(":") >= 0)) {
                    var d = e(P);
                    if (u.hash.length > 1 && u.host + u.pathname === E.host + E.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                        var H = e(u.hash);
                        H.length && M.push({ link: d, sec: H, active: !1 });
                        return
                    }
                    if (!(k === "#" || k === "")) {
                        var C = u.href === E.href || k === D || z.test(k) && V.test(D);
                        R(d, x, C)
                    }
                }
            }

            function X() {
                var P = b.scrollTop(),
                    k = b.height();
                p.each(M, function(d) {
                    var H = d.link,
                        C = d.sec,
                        I = C.offset().top,
                        Q = C.outerHeight(),
                        rt = k * .5,
                        vt = C.is(":visible") && I + Q - rt >= P && I + rt <= P + k;
                    d.active !== vt && (d.active = vt, R(H, x, vt))
                })
            }

            function R(P, k, d) {
                var H = P.hasClass(k);
                d && H || !d && !H || (d ? P.addClass(k) : P.removeClass(k))
            }
            return h
        })
    });
    var ve = at((Xe, de) => {
        var Ct = bt();
        Ct.define("scroll", de.exports = function(e) {
            var p = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
                h = window.location,
                b = Y() ? null : window.history,
                S = e(window),
                v = e(document),
                E = e(document.body),
                u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(m) { window.setTimeout(m, 15) },
                x = Ct.env("editor") ? ".w-editor-body" : "body",
                z = "header, " + x + " > .header, " + x + " > .w-nav:not([data-no-scroll])",
                V = 'a[href="#"]',
                M = 'a[href*="#"]:not(.w-tab-link):not(' + V + ")",
                D = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                O = document.createElement("style");
            O.appendChild(document.createTextNode(D));

            function Y() { try { return !!window.frameElement } catch { return !0 } }
            var X = /^#[a-zA-Z0-9][\w:.-]*$/;

            function R(m) { return X.test(m.hash) && m.host + m.pathname === h.host + h.pathname }
            let P = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function k() { return document.body.getAttribute("data-wf-scroll-motion") === "none" || P.matches }

            function d(m, a) {
                var c;
                switch (a) {
                    case "add":
                        c = m.attr("tabindex"), c ? m.attr("data-wf-tabindex-swap", c) : m.attr("tabindex", "-1");
                        break;
                    case "remove":
                        c = m.attr("data-wf-tabindex-swap"), c ? (m.attr("tabindex", c), m.removeAttr("data-wf-tabindex-swap")) : m.removeAttr("tabindex");
                        break
                }
                m.toggleClass("wf-force-outline-none", a === "add")
            }

            function H(m) {
                var a = m.currentTarget;
                if (!(Ct.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                    var c = R(a) ? a.hash : "";
                    if (c !== "") {
                        var w = e(c);
                        w.length && (m && (m.preventDefault(), m.stopPropagation()), C(c, m), window.setTimeout(function() { I(w, function() { d(w, "add"), w.get(0).focus({ preventScroll: !0 }), d(w, "remove") }) }, m ? 0 : 300))
                    }
                }
            }

            function C(m) {
                if (h.hash !== m && b && b.pushState && !(Ct.env.chrome && h.protocol === "file:")) {
                    var a = b.state && b.state.hash;
                    a !== m && b.pushState({ hash: m }, "", m)
                }
            }

            function I(m, a) {
                var c = S.scrollTop(),
                    w = Q(m);
                if (c !== w) {
                    var l = rt(m, c, w),
                        T = Date.now(),
                        _ = function() {
                            var G = Date.now() - T;
                            window.scroll(0, vt(c, w, G, l)), G <= l ? u(_) : typeof a == "function" && a()
                        };
                    u(_)
                }
            }

            function Q(m) {
                var a = e(z),
                    c = a.css("position") === "fixed" ? a.outerHeight() : 0,
                    w = m.offset().top - c;
                if (m.data("scroll") === "mid") {
                    var l = S.height() - c,
                        T = m.outerHeight();
                    T < l && (w -= Math.round((l - T) / 2))
                }
                return w
            }

            function rt(m, a, c) { if (k()) return 0; var w = 1; return E.add(m).each(function(l, T) { var _ = parseFloat(T.getAttribute("data-scroll-time"));!isNaN(_) && _ >= 0 && (w = _) }), (472.143 * Math.log(Math.abs(a - c) + 125) - 2e3) * w }

            function vt(m, a, c, w) { return c > w ? a : m + (a - m) * _t(c / w) }

            function _t(m) { return m < .5 ? 4 * m * m * m : (m - 1) * (2 * m - 2) * (2 * m - 2) + 1 }

            function pt() {
                var { WF_CLICK_EMPTY: m, WF_CLICK_SCROLL: a } = p;
                v.on(a, M, H), v.on(m, V, function(c) { c.preventDefault() }), document.head.insertBefore(O, document.head.firstChild)
            }
            return { ready: pt }
        })
    });
    var me = at((Ke, pe) => {
        var ze = bt();
        ze.define("touch", pe.exports = function(e) {
            var p = {},
                h = window.getSelection;
            e.event.special.tap = { bindType: "click", delegateType: "click" }, p.init = function(v) { return v = typeof v == "string" ? e(v).get(0) : v, v ? new b(v) : null };

            function b(v) {
                var E = !1,
                    u = !1,
                    x = Math.min(Math.round(window.innerWidth * .04), 40),
                    z, V;
                v.addEventListener("touchstart", M, !1), v.addEventListener("touchmove", D, !1), v.addEventListener("touchend", O, !1), v.addEventListener("touchcancel", Y, !1), v.addEventListener("mousedown", M, !1), v.addEventListener("mousemove", D, !1), v.addEventListener("mouseup", O, !1), v.addEventListener("mouseout", Y, !1);

                function M(R) {
                    var P = R.touches;
                    P && P.length > 1 || (E = !0, P ? (u = !0, z = P[0].clientX) : z = R.clientX, V = z)
                }

                function D(R) {
                    if (E) {
                        if (u && R.type === "mousemove") { R.preventDefault(), R.stopPropagation(); return }
                        var P = R.touches,
                            k = P ? P[0].clientX : R.clientX,
                            d = k - V;
                        V = k, Math.abs(d) > x && h && String(h()) === "" && (S("swipe", R, { direction: d > 0 ? "right" : "left" }), Y())
                    }
                }

                function O(R) { if (E && (E = !1, u && R.type === "mouseup")) { R.preventDefault(), R.stopPropagation(), u = !1; return } }

                function Y() { E = !1 }

                function X() { v.removeEventListener("touchstart", M, !1), v.removeEventListener("touchmove", D, !1), v.removeEventListener("touchend", O, !1), v.removeEventListener("touchcancel", Y, !1), v.removeEventListener("mousedown", M, !1), v.removeEventListener("mousemove", D, !1), v.removeEventListener("mouseup", O, !1), v.removeEventListener("mouseout", Y, !1), v = null }
                this.destroy = X
            }

            function S(v, E, u) {
                var x = e.Event(v, { originalEvent: E });
                e(E.target).trigger(x, u)
            }
            return p.instance = p.init(document), p
        })
    });
    Xt();
    Kt();
    oe();
    ue();
    fe();
    he();
    ve();
    me();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */