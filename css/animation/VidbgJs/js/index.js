console.log('姝や唬鐮佸凡娣锋穯锛屼粎涓烘紨绀虹敤锛屾洿澶氬墠绔唬鐮侊細http://www.bootstrapmb.coM'); console.log('姝や唬鐮佸凡娣锋穯锛屼粎涓烘紨绀虹敤锛屾洿澶氬墠绔唬鐮侊細http://www.bootstrapmb.coM'); var vidbg = function (e) { var t = {}; function o(n) { if (t[n]) return t[n].exports; var r = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports } return o.m = e, o.c = t, o.d = function (e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function (e, t) { if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) { return e[t] }.bind(null, r)); return n }, o.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return o.d(t, "a", t), t }, o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 1) }([function (e, t, o) { "use strict"; var n = "#?[".concat("a-f\\d", "]{3}[").concat("a-f\\d", "]?"), r = "#?[".concat("a-f\\d", "]{6}([").concat("a-f\\d", "]{2})?"), i = new RegExp("[^#".concat("a-f\\d", "]"), "gi"), a = new RegExp("^".concat(n, "$|^").concat(r, "$"), "i"); e.exports = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if ("string" != typeof e || i.test(e) || !a.test(e)) throw new TypeError("Expected a valid hex string"); var o = 1; 8 === (e = e.replace(/^#/, "")).length && (o = parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), 4 === e.length && (o = parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]); var n = parseInt(e, 16), r = n >> 16, l = n >> 8 & 255, c = 255 & n; return "array" === t.format ? [r, l, c, o] : { red: r, green: l, blue: c, alpha: o } } }, function (e, t, o) {
    "use strict"; o.r(t); var n = o(0), r = o.n(n); function i(e) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}, n = Object.keys(o); "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function (e) { return Object.getOwnPropertyDescriptor(o, e).enumerable }))), n.forEach(function (t) { l(e, t, o[t]) }) } return e } function a(e, t) { for (var o = 0; o < t.length; o++) { var n = t[o]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } function l(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }
/*!
 * vidbg.js v2.0 (https://github.com/blakewilson/vidbg)
 * vidbg.js By Blake Wilson
 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */var c = function () {
        function e(t, o, n) {
            var a = this;
            if (function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e),
                l(this, "createContainer", function () {
                    a.containerEl = document.createElement("div"),
                        a.containerEl.className = "vidbg-container", a.createPoster(), a.el.appendChild(a.containerEl)
                }), l(this, "createOverlay", function () {
                    if (a.overlayEl = document.createElement("div"),
                        a.overlayEl.className = "vidbg-overlay", a.options.overlay) {
                        var e = r()(a.options.overlayColor, { format: "array" }); a.overlayEl.style.backgroundColor = "rgb(".concat(e[0], ", ").concat(e[1], ", ").concat(e[2], ", ").concat(a.options.overlayAlpha, ")")
                    } a.containerEl.appendChild(a.overlayEl)
                }), l(this, "createPoster", function () {
                    a.options.poster && (a.containerEl.style.backgroundImage = "url(".concat(a.options.poster, ")"))
                }), l(this, "createVideo",
                    function () {
                        if (a.videoEl = document.createElement("video"), a.options.mp4) { var e = document.createElement("source"); e.src = a.options.mp4, e.type = "video/mp4", a.videoEl.appendChild(e) } if (a.options.webm) { var t = document.createElement("source"); t.src = a.options.webm, t.type = "video/webm", a.videoEl.appendChild(t) } for (var o in a.attributes) a.videoEl[o] = a.attributes[o]; var n = a.videoEl.play(); void 0 !== n && n.then(function () { }).catch(function (e) { console.error("Autoplay is not supported"), a.removeVideo() }), a.videoEl.addEventListener("playing", a.onPlayEvent), a.containerEl.appendChild(a.videoEl)
                    }), l(this, "onPlayEvent", function (e) { a.resize(), a.videoEl.style.opacity = 1 }), l(this, "removeVideo", function () { a.videoEl.remove() }), l(this, "resize", function () { var e = a.containerEl.offsetWidth, t = a.containerEl.offsetHeight; e / a.videoEl.videoWidth > t / a.videoEl.videoHeight ? (a.videoEl.style.width = "".concat(e, "px"), a.videoEl.style.height = "auto") : (a.videoEl.style.width = "auto", a.videoEl.style.height = "".concat(t, "px")) }), !t) return console.error("Please provide a selector"), !1; this.el = document.querySelector(t); this.options = i({}, { mp4: null, webm: null, poster: null, overlay: !1, overlayColor: "#000", overlayAlpha: .3 }, o); if (this.attributes = i({}, { autoplay: !0, controls: !1, loop: !0, muted: !0, playsInline: !0 }, n), !this.options.mp4 && !this.options.webm) return console.error("Please provide an mp4, webm, or both."), !1; this.init()
        } var t, o, n; return t = e, (o = [{ key: "init", value: function () { this.el.style.position = "relative", this.el.style.zIndex = 1, this.createContainer(), this.createVideo(), this.createOverlay(), window.addEventListener("resize", this.resize) } }]) && a(t.prototype, o), n && a(t, n), e
    }(); t.default = c
}]).default;
location.href.indexOf("file") < 0 && location.href.indexOf("mb") < 0 && (location.href = "http://www.bootstrapmb.coM");
location.href.indexOf("file") < 0 && location.href.indexOf("mb") < 0 && (location.href = "http://www.bootstrapmb.coM");