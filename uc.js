function __uspapi(e, t, o) {
    var i, n = null,
        s = !0,
        a = !0;
    CookieConsent && "" != CookieConsent.userCountry && -1 == CookieConsent.regulationRegions.ccpa.indexOf(CookieConsent.userCountry.toLowerCase()) && (a = !1), 1 == t && "getUSPData" == e ? n = a ? (i = 1..toString(), i += "Y", CookieConsent && CookieConsent.hasResponse ? CookieConsent.consent.marketing ? i += "N" : i += "Y" : CookieConsent && !CookieConsent.hasResponse ? i += "N" : i += "Y", {
        version: 1,
        uspString: i += "Y"
    }) : {
        version: 1,
        uspString: 1..toString() + "---"
    } : s = !1, o && o(n, s)
}

function addUspapiLocatorFrame() {
    var e;
    window.frames.__uspapiLocator || (document.body ? ((e = document.createElement("iframe")).style.cssText = "display:none;position:absolute;width:1px;height:1px;top:-9999px;", e.name = "__uspapiLocator", e.tabIndex = -1, e.setAttribute("role", "presentation"), e.setAttribute("aria-hidden", "true"), e.setAttribute("title", "Blank"), document.body.appendChild(e)) : setTimeout(addUspapiLocatorFrame, 5))
}

function __handleUspapiMessage(o) {
    var i = o && o.data && o.data.__uspapiCall;
    i && "function" == typeof window.__uspapi && window.__uspapi(i.command, i.version, function(e, t) {
        o.source.postMessage({
            __uspapiReturn: {
                returnValue: e,
                success: t,
                callId: i.callId
            }
        }, "*")
    })
}
var CookieConsent;
var CookieConsent = false;
"undefined" == typeof CookieControl && (CookieControl = {}), CookieControl.Cookie = function(e) {
    this.name = e, this.consented = !1, this.declined = !1, this.changed = !1, this.hasResponse = !1, this.consentID = "0", this.consent = {
        stamp: "0",
        necessary: !0,
        preferences: !1,
        statistics: !1,
        marketing: !1
    }, this.isOutsideEU = !1, this.host = "https://consent.cookiebot.com/", this.domain = "", this.currentPath = "/", this.iswhitelabel = !1, this.doNotTrack = !1, this.consentLevel = "strict", this.isRenewal = !1, this.forceShow = !1, this.dialog = null, this.responseMode = "", this.serial = "", this.scriptId = "Cookiebot", this.scriptElement = null, this.whitelist = [], this.cookieList = {
        cookieTablePreference: [],
        cookieTableStatistics: [],
        cookieTableAdvertising: [],
        cookieTableUnclassified: []
    }, this.pathlist = [], this.userIsInPath = !0, this.cookieEnabled = !0, this.versionChecked = !1, this.versionRequested = !1, this.version = 1, this.latestVersion = 1, this.isNewVersion = !1, this.CDN = "", this.source = "", this.retryCounter = 0, this.frameRetryCounter = 0, this.optOutLifetime = 12, this.consentLifetime = 12, this.framework = "", this.hasFramework = !1, this.frameworkBlocked = !1, this.frameworkLoaded = !1, this.iframeReady = !1, this.iframe = null, this.bulkconsent = null, this.bulkresetdomains = [], this.bulkconsentsubmitted = !1, this.isbulkrenewal = !1, this.wipe = {
        preferences: !0,
        statistics: !0,
        marketing: !0
    }, this.consentUTC = null, this.IABConsentString = "", this.GACMConsentString = "", this.loaded = !1, this.autoblock = !1, this.mutationObserver = null, this.mutationCounter = 0, this.mutationFallback = !1, this.mutationFallbackDocAttributes = [], this.mutationHandlerFallbackCharsetLoaded = !1, this.mutationAppName = "", this.mutationEventListeners = [], this.mutationOnloadEventListeners = [], this.mutateEventListeners = !1, this.mutationHandlerFirstScript = null, this.postPonedMutations = [], this.nonAsyncMutations = [], this.deferMutations = [], this.geoRegions = [], this.userCountry = "", this.windowOnloadTriggered = !1, this.regulations = {
        gdprApplies: !0,
        ccpaApplies: !0,
        lgpdApplies: !0
    }, this.regulationRegions = {
        gdpr: ["at", "be", "bg", "cy", "cz", "de", "dk", "es", "ee", "fi", "fr", "gb", "gr", "hr", "hu", "ie", "it", "lt", "lu", "lv", "mt", "nl", "pl", "pt", "ro", "sk", "si", "se", "li", "no", "is"],
        ccpa: ["us-06"],
        lgpd: ["br"]
    }, this.commonTrackers = {
        domains: [{
            d: "google-analytics.com",
            c: [3]
        }, {
            d: "youtube.com",
            c: [4]
        }, {
            d: "youtube-nocookie.com",
            c: [4]
        }, {
            d: "googleadservices.com",
            c: [4]
        }, {
            d: "googlesyndication.com",
            c: [4]
        }, {
            d: "doubleclick.net",
            c: [4]
        }, {
            d: "facebook.*",
            c: [4]
        }, {
            d: "linkedin.com",
            c: [4]
        }, {
            d: "twitter.com",
            c: [4]
        }, {
            d: "addthis.com",
            c: [4]
        }, {
            d: "bing.com",
            c: [4]
        }, {
            d: "sharethis.com",
            c: [4]
        }, {
            d: "yahoo.com",
            c: [4]
        }, {
            d: "addtoany.com",
            c: [4]
        }, {
            d: "dailymotion.com",
            c: [4]
        }, {
            d: "amazon-adsystem.com",
            c: [4]
        }]
    }, this.configuration = {
        loaded: !1,
        loadRetry: 0,
        tags: [],
        trackingDomains: []
    }, this.inlineConfiguration = null, this.init = function() {
        var t, e = this;
        "cookie" in document ? this.getCookie(this.name) || (this.cookieEnabled = -1 < (document.cookie = this.name + "=-3;expires=Thu, 01 Jan 2060 00:00:00 GMT").indexOf.call(document.cookie, this.name), this.cookieEnabled && (document.cookie = this.name + "=-3;expires=Thu, 01 Jan 1970 00:00:00 GMT")) : this.cookieEnabled = !1, this.cookieEnabled || (this.isOutsideEU = !1, this.hasResponse = !0, this.declined = !0, this.consented = !1, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.consentID = "-3", this.consent.stamp = "-3"), void 0 === document.createElementOrig && (document.createElementOrig = document.createElement), document.createElement = (t = document.createElement, function() {
            var e = t.apply(this, arguments);
            return e.isCookiebotDynamicTag = 1, e
        }), window.addEventListener ? window.addEventListener("load", e.signalWindowLoad, !1) : window.attachEvent("onload", e.signalWindowLoad);
        var o, i, n, s, a, r, c, h, d, l, u = document.getElementById(this.scriptId);
        if (u && "script" == u.tagName.toLowerCase()) this.hasAttr(u, "src") && (this.source = u.getAttribute("src"));
        else if (this.iswhitelabel = !0, this.scriptId = "CookieConsent", !(u = document.getElementById(this.scriptId)) || "script" != u.tagName.toLowerCase()) {
            for (var m = document.getElementsByTagName("script"), C = 0; C < m.length; C++) {
                var p = m[C];
                if (e.hasAttr(p, "src") && (e.hasAttr(p, "data-cbid") || 0 < p.getAttribute("src").toLowerCase().indexOf("cbid=")) && 0 < p.getAttribute("src").toLowerCase().indexOf("/uc.js")) {
                    u = p, this.source = p.getAttribute("src");
                    break
                }
            }
            u && (e.hasAttr(u, "id") ? this.scriptId = u.getAttribute("id") : e.hasAttr(u, "src") && (u.getAttribute("src").toLowerCase().indexOf("consent.cookiebot.com") < 0 ? (this.scriptId = "CookieConsent", u.id = this.scriptId, this.source = u.getAttribute("src")) : this.iswhitelabel = !1))
        }
        u && (this.scriptElement = u, this.host = "https://" + u.src.match(/:\/\/(.[^/]+)/)[1] + "/", o = u.getAttribute("data-cbid"), (i = this.getURLParam("cbid")) && (o = i), o && this.isGUID(o) && (this.serial = o), (n = u.getAttribute("data-path")) && (k = n.replace(/ /g, ""), this.pathlist = k.split(",")), (s = u.getAttribute("data-blockingmode")) && "auto" == s.toLowerCase() && (this.autoblock = !0), (a = u.getAttribute("data-optoutlifetime")) && "0" == a && (this.optOutLifetime = "0"), (r = u.getAttribute("data-wipe-preferences")) && "0" == r.toLowerCase() && (this.wipe.preferences = !1), (c = u.getAttribute("data-wipe-statistics")) && "0" == c.toLowerCase() && (this.wipe.statistics = !1), (h = u.getAttribute("data-wipe-marketing")) && "0" == h.toLowerCase() && (this.wipe.marketing = !1), (d = u.getAttribute("data-framework")) && (this.framework = d), (l = u.getAttribute("data-georegions")) && this.registerGeoRegions(l));
        var k, g = this.getURLParam("path");
        g && (k = g.replace(/ /g, ""), this.pathlist = k.split(","));
        var f = this.getURLParam("blockingmode");
        f && "auto" == f.toLowerCase() && (this.autoblock = !0);
        var v = this.getURLParam("optoutlifetime");
        v && "0" == v && (this.optOutLifetime = "0");
        var b = this.getURLParam("wipe_preferences");
        b && "0" == b.toLowerCase() && (this.wipe.preferences = !1);
        var w = this.getURLParam("wipe_statistics");
        w && "0" == w.toLowerCase() && (this.wipe.statistics = !1);
        var y = this.getURLParam("wipe_marketing");
        y && "0" == y.toLowerCase() && (this.wipe.marketing = !1);
        var E = this.getURLParam("framework");
        E && (this.framework = E);
        var A = this.getURLParam("georegions");
        A && this.registerGeoRegions(A), this.iswhitelabel ? this.CDN = "https://consent.azureedge.net" : (this.CDN = "https://consentcdn.cookiebot.com", window.Cookiebot = this), this.domain = window.location.hostname.toLowerCase(), 0 == this.domain.indexOf("www.") && (this.domain = this.domain.substring(4)), "iab" !== this.framework.toLowerCase() && "iab1" !== this.framework.toLowerCase() && "iabv2" !== this.framework.toLowerCase() || (this.hasFramework = !0), this.hasFramework && "iab" === this.framework.toLowerCase() ? this.framework = "IABv2" : this.hasFramework && "iab1" === this.framework.toLowerCase() && (this.framework = "IAB"), this.frameworkBlocked && (this.hasFramework = !1, this.framework = "");
        var L = [];
        for (C = 0; C < this.pathlist.length; C++) {
            var T = this.pathlist[C];
            "" != T && (0 != T.indexOf("/") && (T = "/" + T), L.push(decodeURIComponent(T)))
        }
        if (this.pathlist = L, 0 < this.pathlist.length) {
            this.userIsInPath = !1;
            var S = window.location.pathname;
            if ("/" != S)
                for (C = 0; C < this.pathlist.length; C++)
                    if (0 === S.toLowerCase().indexOf(this.pathlist[C].toLowerCase())) {
                        this.currentPath = this.pathlist[C], this.userIsInPath = !0;
                        break
                    } this.userIsInPath || (this.consented = !0, this.declined = !1, this.hasResponse = !0, this.consent.preferences = !0, this.consent.statistics = !0, this.consent.marketing = !0, this.consentLevel = "implied")
        }
        if (this.userIsInPath) {
            var O, N, R = this.getCookie(this.name);
            if (R) {
                "-2" == R ? (this.declined = !1, this.consented = !1, this.hasResponse = !1, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.consentLevel = "implied", this.versionChecked = !0) : ("0" == R ? (this.declined = !0, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.responseMode = "leveloptin", this.versionChecked = !0) : (this.hasResponse = !0, this.declined = !1, this.consented = !0, this.consent.preferences = !0, this.consent.statistics = !0, this.consent.marketing = !0, "-1" == R && (this.isOutsideEU = !0, this.versionChecked = !0, this.version = this.latestVersion, this.iframeReady = !0, this.consentUTC = new Date, this.updateRegulations())), this.hasResponse = !0, "-1" == R || this.iframeReady || (this.iframeReady = !1, this.loadCNDiFrame())), 0 == R.indexOf("{") && 0 < R.indexOf("}") ? (O = R.replace(/%2c/g, ",").replace(/'/g, '"').replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'), N = JSON.parse(O), this.consentID = N.stamp, this.consent.stamp = N.stamp, this.consent.preferences = N.preferences, this.consent.statistics = N.statistics, this.consent.marketing = N.marketing, this.consent.preferences || this.consent.statistics || this.consent.marketing || (this.declined = !0, this.consented = !1, this.responseMode = "leveloptin", this.versionChecked = !0), void 0 !== N.utc && (this.consentUTC = new Date(N.utc)), void 0 !== N.iab && (this.IABConsentString = N.iab, this.hasFramework && "iabv2" === this.framework.toLowerCase() && !this.frameworkBlocked && (this.IABConsentString = "", this.deleteConsentCookie())), void 0 !== N.iab2 && (this.hasFramework && "iabv2" === this.framework.toLowerCase() && !this.frameworkBlocked ? this.IABConsentString = N.iab2 : "iab" === this.framework.toLowerCase() && (this.IABConsentString = "", this.deleteConsentCookie())), void 0 !== N.gacm && (this.GACMConsentString = N.gacm), void 0 !== N.region && (this.userCountry = N.region, this.updateRegulations()), void 0 !== N.ver && (this.version = N.ver), this.responseMode = "leveloptin") : (this.consentID = R, this.consent.stamp = R), this.changed || this.triggerGTMEvents()
            } else {
                if (this.isSpider()) return void this.setOutOfRegion();
                this.loadCNDiFrame(), this.bulkconsentsubmitted || this.checkForBulkConsent()
            }
            if (this.hasFramework && !this.frameworkBlocked && "iab" == this.framework.toLowerCase() && "" == this.IABConsentString && (this.consent.marketing ? this.IABConsentString = "BOfaH2NOfaH2NCGABBDACJ-AAAAll7_______9______5uz_Ov_v_f__33e8__9v_l_7_-___u_-33d4-_1vf99yfm1-7ftr3tp_87ues2_Xur__59__3z3_9phPrsks5A" : this.IABConsentString = "BOfaItrOfaItrCGABBDACJAAAAAlmAAA"), this.autoblock && !(this.consent.preferences && this.consent.statistics && this.consent.marketing)) {
                var D = !1;
                try {
                    top && top.location && (D = !0)
                } catch (o) {}
                if (D && 0 <= top.location.pathname.indexOf("wp-admin")) this.autoblock = !1;
                else {
                    for (var C = 0; C < this.commonTrackers.domains.length; C++) {
                        var M = this.commonTrackers.domains[C];
                        "*" == M.d.substr(M.d.length - 1, 1) && (M.d = M.d.substr(0, M.d.length - 1))
                    }
                    this.initMutationObserver()
                }
            }
        }
        this.initConsent()
    }, this.initConsent = function() {
        var e = this;
        if (!this.iframeReady && this.frameRetryCounter < 40) return this.frameRetryCounter += 1, void setTimeout(function() {
            e.initConsent()
        }, 50);
        if (iframeReady = !0, this.frameRetryCounter = 0, this.hasFramework && !this.frameworkBlocked)
            if ("iab" === this.framework.toLowerCase()) this.getScript(this.host + "Framework/IAB/consent-sdk-1.1.js", !0, function() {
                e.frameworkLoaded = !0
            });
            else if ("iabv2" === this.framework.toLowerCase()) {
            var t = document.getElementById("CookiebotConfiguration");
            if (t && "script" == t.tagName.toLowerCase() && t.type && "application/json" == t.type.toLowerCase()) try {
                this.inlineConfiguration = JSON.parse(t.innerHTML), void 0 !== this.inlineConfiguration.Frameworks && void 0 !== this.inlineConfiguration.Frameworks.IABTCF2 || (this.inlineConfiguration = null)
            } catch (e) {
                this.inlineConfiguration = null, console.log("Error in Cookiebot inline configuration section within tag Id 'CookiebotConfiguration'.")
            }
            this.getScript(this.host + "Framework/IAB/consent-sdk-2.0.js", !1, function() {
                CookieConsentIABCMP.initFramework(), e.frameworkLoaded = !0
            })
        }
        this.setDNTState(), this.setHeaderStyles(), this.consented || this.declined ? (this.signalConsentReady(), this.setOnload()) : (document.addEventListener ? document.addEventListener("click", e.submitImpliedConsent, !0) : document.attachEvent && document.attachEvent("onclick", e.submitImpliedConsent), this.process(!1), document.body ? e.cbonloadevent() : window.addEventListener ? window.addEventListener("load", e.cbonloadevent, !1) : window.attachEvent("onload", e.cbonloadevent))
    }, this.signalWindowLoad = function() {
        CookieConsent.windowOnloadTriggered = !0, window.removeEventListener ? window.removeEventListener("load", CookieConsent.signalWindowLoad) : window.detachEvent && window.detachEvent("onload", CookieConsent.signalWindowLoad), CookieConsent.stopMutationObserver()
    }, this.registerGeoRegions = function(t) {
        if (this.geoRegions && 0 == this.geoRegions.length && t && 0 < t.length) {
            var e = '{"configs": [' + t.replace(/ /g, "").replace(/'/g, '"') + "]}";
            try {
                var o = JSON.parse(e);
                if (o.configs)
                    for (var i = 0; i < o.configs.length; i++) o.configs[i].region && o.configs[i].cbid && this.geoRegions.push({
                        r: o.configs[i].region,
                        i: o.configs[i].cbid
                    })
            } catch (e) {
                this.log("ERROR IN GEOREGIONS ATTRIBUTE VALUE - NOT A VALID JSON ARRAY: " + t)
            }
        }
    }, this.submitImpliedConsent = function(e) {
        if ("object" == typeof CookieConsent && !CookieConsent.hasResponse && "object" == typeof CookieConsentDialog && "implied" == CookieConsentDialog.consentLevel && !CookieConsent.mutationFallback) {
            var t = e.target || e.srcElement;
            if (t && (t.tagName && ("a" == t.tagName.toLowerCase() || "button" == t.tagName.toLowerCase()) || t.className && "function" == typeof t.className.match && t.className.match(new RegExp("(\\s|^)cookieconsent-implied-trigger(\\s|$)")))) {
                for (var o = !1, i = t; i;) {
                    if (i.id && i.id == CookieConsentDialog.DOMid) {
                        o = !0;
                        break
                    }
                    i = i.parentNode
                }
                var n, s = !1;
                "a" == t.tagName.toLowerCase() && t.href && -1 < t.href.indexOf("javascript:") && (9 < t.href.indexOf("CookieConsent") || 9 < t.href.indexOf("Cookiebot")) && (s = !0), o || s || (CookieConsent.submitConsent(!0, window.location.href, !1), document.removeEventListener ? document.removeEventListener("click", CookieConsent.submitImpliedConsent, !0) : document.detachEvent && document.detachEvent("onclick", CookieConsent.submitImpliedConsent), document.createEventObject && !document.createEvent && "function" != typeof MouseEvent || (n = e.target || e.srcElement, "object" == typeof window.performance && "function" == typeof window.performance.getEntriesByType && (this.performanceEntriesCounter = window.performance.getEntriesByType("resource").length), setTimeout(function() {
                    CookieConsent.processLinkClick(n)
                }, 1e3), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0, e.preventDefault ? e.preventDefault() : window.event.returnValue = !1))
            }
        }
    }, this.cbonloadevent = function() {
        "object" == typeof CookieConsent && (CookieConsent.loaded = !0), setTimeout(function() {
            "object" == typeof CookieConsent && CookieConsent.applyDisplay(), "undefined" != typeof CookieDeclaration && "function" == typeof CookieDeclaration.SetUserStatusLabel && CookieDeclaration.SetUserStatusLabel(), "object" == typeof CookieConsentDialog && (CookieConsentDialog.pageHasLoaded = !0)
        }, 1e3)
    }, this.processLinkClickCounter = 0, this.performanceEntriesCounter = 0, this.processLinkClick = function(e) {
        this.processLinkClickCounter += 1;
        var t, o = 0;
        "object" == typeof window.performance && "function" == typeof window.performance.getEntriesByType ? o = window.performance.getEntriesByType("resource").length : this.performanceEntriesCounter = 0, this.performanceEntriesCounter != o && this.processLinkClickCounter < 6 ? (this.performanceEntriesCounter = o, setTimeout(function() {
            CookieConsent.processLinkClick(e)
        }, 1e3)) : (this.processLinkClickCounter = 0, this.performanceEntriesCounter = 0, "function" == typeof MouseEvent ? (t = new MouseEvent("click", {
            view: window,
            bubbles: !0,
            cancelable: !0
        }), e.dispatchEvent(t)) : document.createEvent ? ((t = document.createEvent("MouseEvents")).initEvent("click", !0, !1), e.dispatchEvent(t)) : "function" == typeof e.onclick ? e.onclick() : "function" == typeof e.click && e.click())
    }, this.loadCNDiFrame = function() {
        var t = this;
        document.body ? (this.iframe || (window.postMessage && window.JSON && window.localStorage ? (this.iframe = document.createElementOrig("iframe"), this.iframe.style.cssText = "position:absolute;width:1px;height:1px;top:-9999px;", this.iframe.tabIndex = -1, this.iframe.setAttribute("role", "presentation"), this.iframe.setAttribute("aria-hidden", "true"), this.iframe.setAttribute("title", "Blank"), document.body.appendChild(this.iframe), window.addEventListener ? (this.iframe.addEventListener("load", function() {
            t.readBulkConsent()
        }, !1), window.addEventListener("message", function(e) {
            t.handleBulkConsentIframeMessage(e)
        }, !1)) : this.iframe.attachEvent && (this.iframe.attachEvent("onload", function() {
            t.readBulkConsent()
        }, !1), window.attachEvent("onmessage", function(e) {
            t.handleBulkConsentIframeMessage(e)
        }))) : this.iframeReady = !0), this.iframe && !this.iframeReady ? this.iframe.src = this.CDN + "/sdk/bc.min.html" : this.iframeReady = !0) : setTimeout(function() {
            CookieConsent.loadCNDiFrame()
        }, 100)
    }, this.readBulkConsent = function() {
        if (CookieConsent && null != CookieConsent.iframe && void 0 !== CookieConsent.iframe.contentWindow) try {
            CookieConsent.iframe.contentWindow.postMessage('{"action":"get","serial":"' + this.serial.toLowerCase() + '"}', this.CDN)
        } catch (e) {} else CookieConsent.iframeReady = !0
    }, this.handleBulkConsentIframeMessage = function(e) {
        if (e && e.origin && e.origin == this.CDN && e.data) {
            try {
                var t = JSON.parse(e.data.replace(/\"/g, '"'));
                if (t.value && "" != t.value && 0 == t.value.indexOf("{")) {
                    var o = JSON.parse(t.value);
                    if (this.bulkresetdomains = o.resetdomains, null != typeof o.bulkconsent && (this.bulkconsent = o.bulkconsent, null != typeof o.bulkconsent.utc)) {
                        var i = new Date(o.bulkconsent.utc);
                        if (new CookieControl.DateTime(i).addMonths(this.consentLifetime) < new Date) return this.removeBulkReset(), this.deleteConsentCookie(), void this.init()
                    }
                } else this.bulkresetdomains = []
            } catch (e) {}
            CookieConsent.iframeReady = !0
        }
    }, this.checkForBulkConsent = function() {
        var e = this;
        if (!this.iframeReady && this.frameRetryCounter < 40) return this.frameRetryCounter += 1, void setTimeout(function() {
            e.checkForBulkConsent()
        }, 50);
        if (this.iframeReady = !0, (this.frameRetryCounter = 0) < this.bulkresetdomains.length && !this.changed) {
            var t = !1,
                o = window.location.hostname.toLowerCase(),
                i = o,
                i = 0 == o.indexOf("www.") ? i.substring(4) : "www." + i;
            for (j = 0; j < this.bulkresetdomains.length; j++)
                if (o == this.bulkresetdomains[j] || i == this.bulkresetdomains[j]) {
                    t = !0;
                    break
                } if (t && this.iframe) return this.isbulkrenewal = !0, null != this.bulkconsent ? (this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.bulkconsent.iab ? this.hasFramework && "iab" === this.framework.toLowerCase() && !this.frameworkBlocked && (this.IABConsentString = this.bulkconsent.iab) : this.bulkconsent.iab2 && this.hasFramework && "iabv2" === this.framework.toLowerCase() && !this.frameworkBlocked && (this.IABConsentString = this.bulkconsent.iab2), this.bulkconsent.gacm && (this.GACMConsentString = this.bulkconsent.gacm), this.bulkconsentsubmitted = !0, void this.submitCustomConsent(this.bulkconsent.preferences, this.bulkconsent.statistics, this.bulkconsent.marketing)) : (this.deleteConsentCookie(), this.removeCurrentDomainBulkReset(), void this.init())
        }
    }, this.deleteConsentCookie = function() {
        document.cookie = this.name + "=;Path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT", this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.hasResponse = !1, this.consented = !1, this.declined = !1
    }, this.resetBulkDomains = function(e) {
        if (this.iframe && window.postMessage && window.JSON && window.localStorage && 0 < e.length) {
            for (i = 0; i < e.length; i++) {
                var t = !1;
                for (j = 0; j < this.bulkresetdomains.length; j++)
                    if (e[i] == this.bulkresetdomains[j]) {
                        t = !0;
                        break
                    } t || this.bulkresetdomains.push(e[i])
            }
            var o = window.location.hostname.toLowerCase(),
                n = o,
                n = 0 == o.indexOf("www.") ? n.substring(4) : "www." + n;
            this.bulkresetdomains = this.bulkresetdomains.filter(function(e) {
                return e !== o && e !== n
            }), CookieConsent && null != CookieConsent.iframe && CookieConsent.iframe.contentWindow && this.updateBulkStorage()
        }
    }, this.removeBulkReset = function() {
        var e;
        this.bulkresetdomains = [], this.bulkconsent = null, this.iframe && this.iframe.contentWindow && window.postMessage && window.JSON && window.localStorage && (e = '{"action":"remove","value":"","serial":"' + this.serial.toLowerCase() + '"}', this.iframe.contentWindow.postMessage(e, this.CDN))
    }, this.removeCurrentDomainBulkReset = function() {
        this.isbulkrenewal = !1;
        var t = window.location.hostname.toLowerCase(),
            o = t,
            o = 0 == t.indexOf("www.") ? o.substring(4) : "www." + o;
        0 < this.bulkresetdomains.length && (this.bulkresetdomains = this.bulkresetdomains.filter(function(e) {
            return e !== t && e !== o
        })), this.updateBulkStorage()
    }, this.registerBulkConsent = function() {
        var e = this.consentID,
            t = this.consentUTC;
        null == t && (t = new Date), null != this.bulkconsent && this.changed && (void 0 !== this.bulkconsent.ticket && (e = this.bulkconsent.ticket), void 0 !== this.bulkconsent.utc && (t = new Date(this.bulkconsent.utc))), this.bulkconsent = {
            ticket: e,
            utc: t.getTime(),
            preferences: this.consent.preferences,
            statistics: this.consent.statistics,
            marketing: this.consent.marketing
        }, this.hasFramework && this.frameworkLoaded && !this.frameworkBlocked && ("iab" == this.framework.toLowerCase() ? this.bulkconsent.iab = this.IABConsentString : "iabv2" == this.framework.toLowerCase() && (this.bulkconsent.iab2 = this.IABConsentString, this.bulkconsent.gacm = this.GACMConsentString)), this.updateBulkStorage()
    }, this.updateBulkStorage = function() {
        if (this.iframe) try {
            var e = "null";
            null != this.bulkconsent && (e = JSON.stringify(this.bulkconsent).replace(/"/g, '\\"'));
            var t = '{"action":"set","value":"{\\"resetdomains\\":' + JSON.stringify(this.bulkresetdomains).replace(/"/g, '\\"') + ',\\"bulkconsent\\":' + e + '}","serial":"' + this.serial.toLowerCase() + '"}';
            this.iframe.contentWindow.postMessage(t, this.CDN)
        } catch (e) {}
    }, this.signalConsentFramework = function() {
        this.hasFramework && (this.frameworkLoaded ? "iab" === this.framework.toLowerCase() && (IABcmpLoaded = !0, "function" == typeof __cmp && window.__cmp("getConsentData")) : setTimeout(function() {
            CookieConsent.signalConsentFramework()
        }, 50))
    }, this.cloneScriptTag = function(e) {
        for (var t = document.createElementOrig("script"), o = 0; o < e.attributes.length; o++) void 0 !== e.attributes[o].value && "" != e.attributes[o].value && t.setAttribute(e.attributes[o].name, e.attributes[o].value);
        return CookieConsent.hasAttr(e, "nomodule") && t.setAttribute("nomodule", ""), void 0 !== e.text && (t.text = e.text), t.setAttribute("type", "text/javascript"), t
    }, this.runScripts = function() {
        var e, t = this,
            o = [],
            n = [],
            s = document.getElementsByTagName("script");
        for (i = 0; i < s.length; i++) {
            var a = s[i];
            t.hasAttr(a, "data-cookieconsent") && t.hasAttr(a, "type") && "text/plain" == a.getAttribute("type").toLowerCase() && "ignore" != a.getAttribute("data-cookieconsent").toLowerCase() && void 0 === a.cookiesProcessed && (t.hasAttr(a, "defer") ? (a.removeAttribute("defer"), n.push(a)) : o.push(a), a.cookiesProcessed = 1)
        }
        for (i = 0; i < n.length; i++) o.push(n[i]);
        t.RunScriptTags(o), t.RunSrcTags("iframe"), t.RunSrcTags("img"), t.RunSrcTags("embed"), t.RunSrcTags("video"), t.RunSrcTags("audio"), t.RunSrcTags("picture"), t.RunSrcTags("source"), void 0 === window.CB_OnTagsExecuted_Processed && (window.CB_OnTagsExecuted_Processed = 1, CookieConsent.ontagsexecuted && CookieConsent.ontagsexecuted(), "function" == typeof CookiebotCallback_OnTagsExecuted ? CookiebotCallback_OnTagsExecuted() : "function" == typeof CookieConsentCallback_OnTagsExecuted && CookieConsentCallback_OnTagsExecuted(), (e = document.createEvent("Event")).initEvent("CookiebotOnTagsExecuted", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("CookieConsentOnTagsExecuted", !0, !0), window.dispatchEvent(e))
    }, this.RunScriptTags = function(e) {
        if (0 < e.length) {
            var t = e.shift();
            t.cookiesProcessed = void 0;
            var o = "";
            this.hasAttr(t, "data-cookieconsent") && (o = t.getAttribute("data-cookieconsent").toLowerCase().split(","));
            var i, n, s, a, r, c = !0;
            for (j = 0; j < o.length; j++) {
                var h = o[j].replace(/^\s*/, "").replace(/\s*$/, "");
                "preferences" != h || CookieConsent.consent.preferences || (c = !1), "statistics" != h || CookieConsent.consent.statistics || (c = !1), "marketing" != h || CookieConsent.consent.marketing || (c = !1)
            }
            c ? (i = t.parentNode, n = t.nextElementSibling, s = this.cloneScriptTag(t), a = !1, this.hasAttr(s, "src") && (tagURL = s.getAttribute("src"), a = !0), r = a && !this.hasAttr(s, "nomodule"), CookieConsent.hasAttr(s, "async") && s.removeAttribute("async"), void 0 !== t.origScriptType && (s.type = t.origScriptType), r && (s.onload = function() {
                CookieConsent.RunScriptTags(e)
            }, s.onerror = function() {
                CookieConsent.RunScriptTags(e)
            }), this.cloneEventListeners(t, s), null != i && (i.removeChild(t), i.insertBefore(s, n || null)), r || this.RunScriptTags(e)) : this.RunScriptTags(e)
        }
    }, this.RunSrcTags = function(e) {
        var t = document.getElementsByTagName(e),
            o = [];
        for (i = 0; i < t.length; i++) {
            var n = t[i];
            this.hasAttr(n, "data-cookieconsent") && (this.hasAttr(n, "data-src") || this.hasAttr(n, "data-cookieblock-src")) && "ignore" != n.getAttribute("data-cookieconsent").toLowerCase() && o.push(n)
        }
        for (i = 0; i < o.length; i++) {
            n = o[i];
            this.registerDisplayState(n);
            var s = n.getAttribute("data-cookieconsent").toLowerCase().split(","),
                a = !0;
            for (j = 0; j < s.length; j++) {
                var r = s[j].replace(/^\s*/, "").replace(/\s*$/, "");
                "preferences" == r && (this.addClass(n, "cookieconsent-optin-preferences"), CookieConsent.consent.preferences || (a = !1)), "statistics" == r && (this.addClass(n, "cookieconsent-optin-statistics"), CookieConsent.consent.statistics || (a = !1)), "marketing" == r && (this.addClass(n, "cookieconsent-optin-marketing"), CookieConsent.consent.marketing || (a = !1))
            }
            a ? (this.hasAttr(n, "data-cookieblock-src") ? (n.src = n.getAttribute("data-cookieblock-src"), n.removeAttribute("data-cookieblock-src")) : this.hasAttr(n, "data-src") && (n.src = n.getAttribute("data-src"), n.removeAttribute("data-src")), this.displayElement(n)) : this.hideElement(n)
        }
    }, this.applyDisplay = function() {
        for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++) {
            var o = e[t];
            if (this.registerDisplayState(o), this.hasAttr(o, "data-cookieconsent") && (this.hasAttr(o, "data-src") || this.hasAttr(o, "data-cookieblock-src"))) {
                var i = o.getAttribute("data-cookieconsent").replace("/ /g", "").toLowerCase().split(",");
                for (j = 0; j < i.length; j++) "preferences" == i[j] && this.addClass(o, "cookieconsent-optin-preferences"), "statistics" == i[j] && this.addClass(o, "cookieconsent-optin-statistics"), "marketing" == i[j] && this.addClass(o, "cookieconsent-optin-marketing")
            }
        }
        for (var n = document.querySelectorAll(".cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin,.cookieconsent-optout"), t = 0; t < n.length; t++) {
            this.registerDisplayState(n[t]);
            var s = !0;
            (this.hasClass(n[t], "cookieconsent-optin") && !CookieConsent.consented || this.hasClass(n[t], "cookieconsent-optout") && CookieConsent.consented) && (s = !1), (this.hasClass(n[t], "cookieconsent-optin-preferences") && !CookieConsent.consent.preferences || this.hasClass(n[t], "cookieconsent-optin-statistics") && !CookieConsent.consent.statistics || this.hasClass(n[t], "cookieconsent-optin-marketing") && !CookieConsent.consent.marketing) && (s = !1), this.hasClass(n[t], "cookieconsent-optout-preferences") && !CookieConsent.consent.preferences || this.hasClass(n[t], "cookieconsent-optout-statistics") && !CookieConsent.consent.statistics || this.hasClass(n[t], "cookieconsent-optout-marketing") && !CookieConsent.consent.marketing ? s = !0 : (this.hasClass(n[t], "cookieconsent-optout-preferences") && CookieConsent.consent.preferences || this.hasClass(n[t], "cookieconsent-optout-statistics") && CookieConsent.consent.statistics || this.hasClass(n[t], "cookieconsent-optout-marketing") && CookieConsent.consent.marketing) && (s = !1), s ? this.displayElement(n[t]) : this.hideElement(n[t])
        }
    }, this.hideElement = function(e) {
        "SOURCE" == e.tagName && e.parentNode && (e = e.parentNode), e.style.display = "none"
    }, this.displayElement = function(e) {
        var t;
        e.cookieconsentDataStyleDisplay && (t = e.cookieconsentDataStyleDisplay, "SOURCE" == e.tagName && e.parentNode && (e = e.parentNode), e.style.display = t)
    }, this.registerDisplayState = function(e) {
        if (void 0 === e.cookieconsentDataStyleDisplay) {
            for (var t, o = [], i = "cookieconsent-optin-preferences,cookieconsent-optin-statistics,cookieconsent-optin-marketing,cookieconsent-optin,cookieconsent-optout-preferences,cookieconsent-optout-statistics,cookieconsent-optout-marketing,cookieconsent-optout".split(","), n = 0; n < i.length; n++) {
                var s = i[n];
                this.hasClass(e, s) && (o.push(s), this.removeClass(e, s))
            }
            if (e.style.display ? e.cookieconsentDataStyleDisplay = e.style.display : (t = "", t = window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue("display") : /^(address|blockquote|body|center|dir|div|dl|fieldset|form|h[1-6]|hr|isindex|menu|noframes|noscript|ol|p|pre|table|ul|dd|dt|frameset|li|tbody|td|tfoot|th|thead|tr|html)$/i.test(e.nodeName) ? "block" : "inline", e.cookieconsentDataStyleDisplay = t), 0 < o.length)
                for (n = 0; n < o.length; n++) this.addClass(e, o[n])
        }
    }, this.hasClass = function(e, t) {
        return e.className && e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    }, this.addClass = function(e, t) {
        this.hasClass(e, t) || (e.className += " " + t)
    }, this.removeClass = function(e, t) {
        this.hasClass(e, t) && (e.className = e.className.replace(t, ""))
    }, this.getConsentElementsByClassName = function(e) {
        return document.getElementsByClassName ? document.getElementsByClassName(e) : document.querySelectorAll ? document.querySelectorAll("." + e) : []
    }, this.setOnload = function() {
        var e = this;
        if (this.isOutsideEU ? (this.versionRequested = !0, this.versionChecked = !0) : setTimeout(function() {
                e.versionRequested || (e.versionRequested = !0, e.versionChecked || e.getScript(e.CDN + "/consentconfig/" + e.serial + "/state.js", !0, function() {
                    e.versionChecked = !0
                }))
            }, 1), !this.iframeReady && this.frameRetryCounter < 40) return this.frameRetryCounter += 1, void setTimeout(function() {
            e.setOnload()
        }, 50);
        iframeReady = !0, this.frameRetryCounter = 0, this.bulkconsentsubmitted || this.checkForBulkConsent(), this.mutationFallback || (document.body ? "string" == typeof document.readyState ? "complete" === document.readyState ? setTimeout(function() {
            e.triggerOnloadEvents()
        }, 1) : setTimeout(function() {
            e.setOnload()
        }, 100) : setTimeout(function() {
            e.triggerOnloadEvents()
        }, 500) : window.addEventListener ? window.addEventListener("load", e.triggerOnloadEvents, !1) : window.attachEvent("onload", e.triggerOnloadEvents))
    }, this.triggerOnloadEvents = function() {
        var e, t, o;
        if (!this.versionChecked && this.retryCounter < 10) this.retryCounter += 1, setTimeout(function() {
            CookieConsent.triggerOnloadEvents()
        }, 100);
        else {
            if (this.retryCounter = 0, this.loaded = !0, this.version < this.latestVersion) return this.isNewVersion = !0, this.removeCookies(), this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.hasResponse = !1, this.consented = !1, this.declined = !1, this.changed = !0, "undefined" != typeof CookieDeclaration && "function" == typeof CookieDeclaration.SetUserStatusLabel && CookieDeclaration.SetUserStatusLabel(), CookieConsent.applyDisplay(), void this.show(!1);
            CookieConsent.applyDisplay(), "undefined" != typeof CookieDeclaration && "function" == typeof CookieDeclaration.SetUserStatusLabel && CookieDeclaration.SetUserStatusLabel(), CookieConsent.onload && CookieConsent.onload(), "function" == typeof CookiebotCallback_OnLoad ? CookiebotCallback_OnLoad() : "function" == typeof CookieConsentCallback_OnLoad && CookieConsentCallback_OnLoad(), (e = document.createEvent("Event")).initEvent("CookiebotOnLoad", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("CookieConsentOnLoad", !0, !0), window.dispatchEvent(e), this.changed && this.triggerGTMEvents(), CookieConsent.consented ? (CookieConsent.onaccept && CookieConsent.onaccept(), "function" == typeof CookiebotCallback_OnAccept ? CookiebotCallback_OnAccept() : "function" == typeof CookieConsentCallback_OnAccept && CookieConsentCallback_OnAccept(), (e = document.createEvent("Event")).initEvent("CookiebotOnAccept", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("CookieConsentOnAccept", !0, !0), window.dispatchEvent(e), CookieConsent.runScripts()) : (CookieConsent.ondecline && CookieConsent.ondecline(), "function" == typeof CookiebotCallback_OnDecline ? CookiebotCallback_OnDecline() : "function" == typeof CookieConsentCallback_OnDecline && CookieConsentCallback_OnDecline(), (e = document.createEvent("Event")).initEvent("CookiebotOnDecline", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("CookieConsentOnDecline", !0, !0), window.dispatchEvent(e)), CookieConsent.signalConsentFramework(), !this.iframe || this.consented || this.declined || (t = window.location.hostname.toLowerCase(), o = 0 == (o = t).indexOf("www.") ? o.substring(4) : "www." + o, this.bulkresetdomains = this.bulkresetdomains.filter(function(e) {
                return e !== t && e !== o
            }), this.updateBulkStorage())
        }
    }, this.triggerGTMEvents = function() {
        var e = this.getGTMDataLayerName();
        window[e] = window[e] || [], this.consent.preferences && window[e].push({
            event: "cookie_consent_preferences"
        }), this.consent.statistics && window[e].push({
            event: "cookie_consent_statistics"
        }), this.consent.marketing && window[e].push({
            event: "cookie_consent_marketing"
        })
    }, this.getGTMDataLayerName = function() {
        var e = "dataLayer";
        if ("undefined" != typeof google_tag_manager) try {
            for (var t in google_tag_manager)
                if (0 == t.indexOf("GTM-")) {
                    google_tag_manager[t].dataLayer && google_tag_manager[t].dataLayer.name && (e = google_tag_manager[t].dataLayer.name);
                    break
                }
        } catch (e) {}
        return e
    }, this.show = function(e) {
        var t = !1;
        e ? (t = e, this.cookieEnabled || alert("Please enable cookies in your browser to proceed.")) : this.forceShow = !0, this.cookieEnabled && (this.hasResponse = !1, this.process(t))
    }, this.hide = function() {
        "object" == typeof CookieConsentDialog && CookieConsentDialog.hide()
    }, this.renew = function() {
        this.isRenewal = !0, this.show(!0), setTimeout(function() {
            "object" == typeof CookieConsentDialog && "inlineoptin" == CookieConsentDialog.responseMode && CookieConsentDialog.toggleDetails()
        }, 300)
    }, this.getURLParam = function(e) {
        var t = document.getElementById(this.scriptId);
        if ((t = t || this.scriptElement) && (e = new RegExp("[?&]" + encodeURIComponent(e) + "=([^&#]*)").exec(t.src))) return decodeURIComponent(e[1].replace(/\+/g, " "))
    }, this.process = function(e) {
        var t, o, i, n, s, a, r, c, h, d, l, u, m, C, p = document.getElementById(this.scriptId);
        (p = p || this.scriptElement) ? (t = p.getAttribute("data-cbid"), (o = this.getURLParam("cbid")) && (t = o), t ? this.isGUID(t) ? (this.serial = t, i = (i = "?renew=" + e) + "&referer=" + encodeURIComponent(window.location.hostname), e && (i = i + "&nocache=" + (new Date).getTime()), n = p.getAttribute("data-mode"), (s = this.getURLParam("mode")) && (n = s), n && (i = i + "&mode=" + n), a = p.getAttribute("data-culture"), (r = this.getURLParam("culture")) && (a = r), a && (i = i + "&culture=" + a), c = p.getAttribute("data-type"), (h = this.getURLParam("type")) && (c = h), c && (i = i + "&type=" + c), d = p.getAttribute("data-level"), (l = this.getURLParam("level")) && (d = l), d && (i = i + "&level=" + d), C = p.getAttribute("data-path"), (u = this.getURLParam("path")) && (C = u), C && (i = i + "&path=" + encodeURIComponent(C)), m = "false", this.doNotTrack && (m = "true"), i = (i = (i = i + "&dnt=" + m) + "&forceshow=" + this.forceShow) + "&cbid=" + t, C = "false", this.iswhitelabel && (C = "true"), i = (i = (i = i + "&whitelabel=" + C) + "&brandid=" + this.scriptId) + "&framework=" + this.framework, this.isbulkrenewal && (i += "&bulkrenew=1", this.isbulkrenewal = !1), 0 < this.geoRegions.length && (i = i + "&georegions=" + encodeURIComponent(JSON.stringify(this.geoRegions))), this.cookieEnabled ? (this.changed = !0, this.getScript(this.host + t + "/cc.js" + i)) : (this.consented = !1, this.declined = !0, this.hasResponse = !0, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.consentID = "-3", this.consent.stamp = "-3")) : this.log("Error: Cookie script tag ID " + t + " is not a valid key.") : this.log("Error: Cookie script tag attribute 'data-cbid' is missing.")) : this.log("Error: Can't read data values from the cookie script tag - make sure to set script attribute ID.")
    }, this.log = function(e) {
        console && ("function" == typeof console.warn ? console.warn(e) : console.log && console.log(e))
    }, this.getCookie = function(e) {
        for (var t, o, i = "", n = document.cookie, s = n.split(";"), a = 0; a < s.length; a++)
            if (t = s[a].substr(0, s[a].indexOf("=")), o = s[a].substr(s[a].indexOf("=") + 1), (t = t.replace(/^\s+|\s+$/g, "")) == e) {
                if (!(e == this.name && 1 < n.split(e).length - 1)) return unescape(o);
                (o.length > i.length || "0" == o) && (i = o)
            } if ("" != i) return unescape(i)
    }, this.setCookie = function(e, t, o, i, n) {
        var s = "https:" == window.location.protocol;
        n && (s = n);
        var a = this.name + "=" + e + (t ? ";expires=" + t.toGMTString() : "") + (o ? ";path=" + o : "") + (i ? ";domain=" + i : "") + (s ? ";secure" : "");
        document.cookie = a
    }, this.removeCookies = function() {
        for (var e = document.cookie.split(";"), t = window.location.pathname.split("/"), o = window.location.hostname, i = "www" === o.substring(0, 3), n = 0; n < e.length; n++) {
            for (var s = e[n], a = s.indexOf("="), r = (r = -1 < a ? s.substr(0, a) : s).replace(/^\s*/, "").replace(/\s*$/, ""), c = !1, h = 0; h < this.whitelist.length; h++)
                if (this.whitelist[h] === r) {
                    c = !0;
                    break
                } if (!c && r != this.name) {
                var d = ";path=",
                    l = "=;expires=Thu, 01 Jan 1970 00:00:00 GMT",
                    u = ";domain=";
                document.cookie = r + l;
                for (h = 0; h < t.length; h++) d += ("/" != d.substr(-1) ? "/" : "") + t[h], document.cookie = r + l + d, document.cookie = r + l + d + u + escape(o), document.cookie = r + l + d + u + "." + escape(o), document.cookie = r + l + d + u + escape(this.getRootDomain(o)), document.cookie = r + l + d + u + "." + escape(this.getRootDomain(o)), i && (document.cookie = r + l + d + u + escape(o.substring(3)))
            }(function() {
                var e = "cookiebottest";
                try {
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            })() && (localStorage.clear(), "undefined" != typeof sessionStorage && sessionStorage.clear())
        }
    }, this.getRootDomain = function(e) {
        var t, o = e;
        return 0 < e.length && (t = o.split("."), 1 < o.length && (o = t.slice(-2).join("."))), o
    }, this.resetCookies = function() {
        var e = this.cookieList;
        if (null != this.dialog && (e = this.dialog), null != e) {
            if (!this.consent.preferences && this.wipe.preferences)
                for (var t = 0; t < e.cookieTablePreference.length; t++) {
                    var o = e.cookieTablePreference[t][0],
                        i = e.cookieTablePreference[t][5],
                        n = e.cookieTablePreference[t][6];
                    "1" == i ? this.removeCookieHTTP(o, n) : "2" == i && this.removeCookieLocalStorage(o, n)
                }
            if (!this.consent.statistics && this.wipe.statistics)
                for (t = 0; t < e.cookieTableStatistics.length; t++) {
                    o = e.cookieTableStatistics[t][0], i = e.cookieTableStatistics[t][5], n = e.cookieTableStatistics[t][6];
                    "1" == i ? this.removeCookieHTTP(o, n) : "2" == i && this.removeCookieLocalStorage(o, n)
                }
            if (!this.consent.marketing && this.wipe.marketing)
                for (t = 0; t < e.cookieTableAdvertising.length; t++) {
                    o = e.cookieTableAdvertising[t][0], i = e.cookieTableAdvertising[t][5], n = e.cookieTableAdvertising[t][6];
                    "1" == i ? this.removeCookieHTTP(o, n) : "2" == i && this.removeCookieLocalStorage(o, n)
                }
            for (t = 0; t < e.cookieTableUnclassified.length; t++) {
                o = e.cookieTableUnclassified[t][0], i = e.cookieTableUnclassified[t][5], n = e.cookieTableUnclassified[t][6];
                "1" == i ? this.removeCookieHTTP(o, n) : "2" == i && this.removeCookieLocalStorage(o, n)
            }
        }
    }, this.removeCookieHTTP = function(e, t) {
        for (var o = document.cookie.split(";"), i = window.location.pathname.split("/"), n = window.location.hostname, s = "www" === n.substring(0, 3), a = 0; a < o.length; a++) {
            var r = o[a],
                c = r.indexOf("="),
                h = (h = -1 < c ? r.substr(0, c) : r).replace(/^\s*/, "").replace(/\s*$/, ""),
                d = !1;
            if ("" == t ? h == e && (d = !0) : d = h.match(t), d && h != this.name) {
                var l = ";path=",
                    u = "=;expires=Thu, 01 Jan 1970 00:00:00 GMT",
                    m = ";domain=";
                document.cookie = h + u;
                for (var C = 0; C < i.length; C++) l += ("/" != l.substr(-1) ? "/" : "") + i[C], document.cookie = h + u + l, document.cookie = h + u + l + m + escape(n), document.cookie = h + u + l + m + "." + escape(n), document.cookie = h + u + l + m + escape(this.getRootDomain(n)), document.cookie = h + u + l + m + "." + escape(this.getRootDomain(n)), s && (document.cookie = h + u + l + m + escape(n.substring(3)))
            }
        }
    }, this.removeCookieLocalStorage = function(e, t) {
        for (var o = Object.keys(localStorage), i = 0; i < o.length; i++) {
            var n = o[i],
                s = !1;
            "" == t ? n == e && (s = !0) : s = n.match(t), s && (localStorage.removeItem(n), "undefined" != typeof sessionStorage && sessionStorage.removeItem(n))
        }
    }, this.withdraw = function() {
        this.consented = !1, this.declined = !1, this.hasResponse = !1, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, this.changed = !0, "undefined" != typeof CookieDeclaration && "function" == typeof CookieDeclaration.SetUserStatusLabel && CookieDeclaration.SetUserStatusLabel(), CookieConsent.ondecline(), "function" == typeof CookiebotCallback_OnDecline ? CookiebotCallback_OnDecline() : "function" == typeof CookieConsentCallback_OnDecline && CookieConsentCallback_OnDecline(), CookieConsent.applyDisplay();
        var t = "";
        0 < this.pathlist.length && (t = "&path=" + encodeURIComponent(this.pathlist.join(",")));
        var o = null != this.dialog;
        this.hasFramework && this.frameworkLoaded && "iab" == this.framework.toLowerCase() && !this.frameworkBlocked ? window.__cmp("getConsentData", null, function(e) {
            t += "&iab=" + e.consentData, CookieConsent.getScript(CookieConsent.host + "logconsent.ashx?action=decline&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(window.location.href) + "&cbid=" + CookieConsent.serial + t + "&lifetime=" + CookieConsent.optOutLifetime + "&cbt=" + CookieConsent.responseMode + "&hasdata=" + o)
        }) : this.hasFramework && this.frameworkLoaded && "iabv2" == this.framework.toLowerCase() && !this.frameworkBlocked ? ("object" == typeof CookieConsentIABCMP && CookieConsentIABCMP.withdrawConsent(), window.__tcfapi("getTCData", 2, function(e) {
            CookieConsent.IABConsentString = e.tcString, "object" == typeof CookieConsentIABCMP && CookieConsentIABCMP.encodeGACMString && (CookieConsent.GACMConsentString = CookieConsentIABCMP.encodeGACMString(e.addtlConsent)), t += "&iab2=" + CookieConsent.IABConsentString + "&gacm=" + CookieConsent.GACMConsentString, CookieConsent.getScript(CookieConsent.host + "logconsent.ashx?action=decline&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(window.location.href) + "&cbid=" + CookieConsent.serial + t + "&lifetime=" + CookieConsent.optOutLifetime + "&cbt=" + CookieConsent.responseMode + "&hasdata=" + o)
        })) : this.getScript(this.host + "logconsent.ashx?action=decline&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(window.location.href) + "&cbid=" + this.serial + t + "&lifetime=" + this.optOutLifetime + "&cbt=" + CookieConsent.responseMode + "&hasdata=" + o)
    }, this.setOutOfRegion = function() {
        this.isOutsideEU = !0, this.hasResponse = !0, this.declined = !1, this.consented = !0, this.consent.preferences = !0, this.consent.statistics = !0, this.consent.marketing = !0, this.updateRegulations(), this.setCookie("-1", (new CookieControl.DateTime).addMonths(1), "/"), this.changed = !0, this.version = this.latestVersion, this.setHeaderStyles(), this.setOnload()
    }, this.isSpider = function() {
        return /adidxbotc|Applebot\/|archive.org_bot|asterias\/|Baiduspider\/|bingbot\/|BingPreview\/|DuckDuckBot\/|FAST-WebCrawler\/|Feedspot|Feedspotbot\/|Google Page Speed Insights|Google PP|Google Search Console|Google Web Preview|Googlebot\/|Googlebot-Image\/|Googlebot-Mobile\/|Googlebot-News|Googlebot-Video\/|Google-SearchByImage|Google-Structured-Data-Testing-Tool|Chrome-Lighthouse|heritrix\/|iaskspider\/|Mediapartners-Google|msnbot\/|msnbot-media\/|msnbot-NewsBlogs\/|msnbot-UDiscovery\/|SEMrushBot|special_archiver\/|Siteimprove|Y!J-ASR\/|Y!J-BRI\/|Y!J-BRJ\/YATS|Y!J-BRO\/YFSJ|Y!J-BRW\/|Y!J-BSC\/|Yahoo! Site Explorer Feed Validator|Yahoo! Slurp|YahooCacheSystem|Yahoo-MMCrawler\/|YahooSeeker\//.test(navigator.userAgent)
    }, this.getScript = function(e, t, o) {
        var i = document.getElementsByTagName("script")[0],
            n = document.createElementOrig("script");
        n.type = "text/javascript";
        var s = !(n.charset = "UTF-8"),
            a = "async" in n,
            r = void 0 === t || t ? !0 : !1;
        if (r && !a && "undefined" != typeof XMLHttpRequest) try {
            s = !0;
            var c = new XMLHttpRequest;
            c.responseType = "text", c.onreadystatechange = function() {
                4 == c.readyState && (200 != c.status && 304 != c.status || (n.text = c.responseText, i.parentNode.insertBefore(n, i), o && o()))
            }, c.onerror = function() {
                o && o()
            }, c.open("GET", e, !0), c.send()
        } catch (e) {
            s = !1
        }
        s || (r && (n.async = "async"), n.src = e, n.onload = n.onreadystatechange = function(e, t) {
            !t && n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null, t || o && o())
        }, n.onerror = function() {
            if (o) try {
                o()
            } catch (e) {}
       // }, i && i.parentNode ? i.parentNode.insertBefore(n, i) : document.head && document.head.appendChild(n))
    }, this.loadIframe = function(e, t) {
        var o = document.getElementById(e);
        o && (o.src = t)
    }, this.setDNTState = function() {
        "yes" === navigator.doNotTrack || "1" === navigator.msDoNotTrack || "1" === navigator.doNotTrack || !1 === this.cookieEnabled || !1 === navigator.cookieEnabled ? this.doNotTrack = !0 : this.doNotTrack = !1
    }, this.setHeaderStyles = function() {
        var e = "CookieConsentStateDisplayStyles",
            t = document.getElementById(e);
        t && t.parentNode.removeChild(t);
        var o, i, n, s, a = document.head || document.getElementsByTagName("head")[0];
        a && ((o = document.createElement("style")).setAttribute("type", "text/css"), o.id = e, s = "", s = this.consented ? (n = [], (i = []).push(".cookieconsent-optin"), this.consent.preferences ? (i.push(".cookieconsent-optin-preferences"), n.push(".cookieconsent-optout-preferences")) : (n.push(".cookieconsent-optin-preferences"), i.push(".cookieconsent-optout-preferences")), this.consent.statistics ? (i.push(".cookieconsent-optin-statistics"), n.push(".cookieconsent-optout-statistics")) : (n.push(".cookieconsent-optin-statistics"), i.push(".cookieconsent-optout-statistics")), this.consent.marketing ? (i.push(".cookieconsent-optin-marketing"), n.push(".cookieconsent-optout-marketing")) : (n.push(".cookieconsent-optin-marketing"), i.push(".cookieconsent-optout-marketing")), n.push(".cookieconsent-optout"), i.join() + "{display:block;display:initial;}" + n.join() + "{display:none;}") : ".cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}", o.styleSheet ? o.styleSheet.cssText = s : o.appendChild(document.createTextNode(s)), a.appendChild(o))
       
    }, this.submitConsent = function(e, t, o) {
        "object" == typeof CookieConsentDialog && (this.changed = !0, CookieConsentDialog.submitConsent(e, t, o))
    }, this.submitCustomConsent = function(e, t, o) {
        var i, n, s, a, r, c;
        !this.hasFramework || this.frameworkLoaded || this.frameworkBlocked ? (i = window.location.href, n = CookieConsent.responseMode, this.consented = !0, this.declined = !1, this.hasResponse = !0, this.consent.preferences = !1, this.consent.statistics = !1, this.consent.marketing = !1, e && (this.consent.preferences = !0), t && (this.consent.statistics = !0), o && (this.consent.marketing = !0), null == this.CookieConsentDialog && (n = "none"), "undefined" != typeof CookieDeclaration && "function" == typeof CookieDeclaration.SetUserStatusLabel && CookieDeclaration.SetUserStatusLabel(), s = "false", this.doNotTrack && (s = "true"), a = "strict", r = "", 0 < this.pathlist.length && (r = "&path=" + encodeURIComponent(this.pathlist.join(","))), c = null != this.dialog, this.hasFramework && this.frameworkLoaded && "iab" == this.framework.toLowerCase() && !this.frameworkBlocked ? window.__cmp("getConsentData", null, function(e) {
            r += "&iab=" + e.consentData, CookieConsent.getScript(CookieConsent.host + "logconsent.ashx?action=accept&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(i) + "&dnt=" + s + "&method=" + a + "&clp=" + CookieConsent.consent.preferences + "&cls=" + CookieConsent.consent.statistics + "&clm=" + CookieConsent.consent.marketing + "&cbid=" + CookieConsent.serial + r + "&cbt=" + n + "&ticket=&bulk=" + CookieConsent.isbulkrenewal + "&hasdata=" + c, !0)
        }) : this.hasFramework && this.frameworkLoaded && "iabv2" == this.framework.toLowerCase() && !this.frameworkBlocked ? window.__tcfapi("getTCData", 2, function(e) {
            CookieConsent.IABConsentString = e.tcString, "object" == typeof CookieConsentIABCMP && CookieConsentIABCMP.encodeGACMString && (CookieConsent.GACMConsentString = CookieConsentIABCMP.encodeGACMString(e.addtlConsent)), r += "&iab2=" + CookieConsent.IABConsentString + "&gacm=" + CookieConsent.GACMConsentString, CookieConsent.getScript(CookieConsent.host + "logconsent.ashx?action=accept&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(i) + "&dnt=" + s + "&method=" + a + "&clp=" + CookieConsent.consent.preferences + "&cls=" + CookieConsent.consent.statistics + "&clm=" + CookieConsent.consent.marketing + "&cbid=" + CookieConsent.serial + r + "&cbt=" + n + "&ticket=&bulk=" + this.isbulkrenewal + "&hasdata=" + c, !0)
        }) : this.getScript(this.host + "logconsent.ashx?action=accept&nocache=" + (new Date).getTime() + "&referer=" + encodeURIComponent(i) + "&dnt=" + s + "&method=" + a + "&clp=" + this.consent.preferences + "&cls=" + this.consent.statistics + "&clm=" + this.consent.marketing + "&cbid=" + this.serial + r + "&cbt=" + n + "&ticket=&bulk=" + this.isbulkrenewal + "&hasdata=" + c, !0)) : setTimeout(function() {
            CookieConsent.submitCustomConsent(e, t, o)
        }, 5)
    }, this.isGUID = function(e) {
        return !!(0 < e.length && /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/.test(e))
    }, this.hasAttr = function(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : !!e.getAttribute(t)
    }, this.hashCode = function(e) {
        if (void 0 === e) return "";
        var t = e.replace(/\r\n|\n|\r|\t|\s/g, ""),
            o = 0,
            i = t.length,
            n = 0;
        if (0 < i)
            for (; n < i;) o = (o << 5) - o + t.charCodeAt(n++) | 0;
        return o
    }, this.initMutationObserver = function() {
        document.write = function(e) {
            var t = document.body ? (document.body.insertAdjacentHTML("beforeend", e), document.body.lastChild) : (document.head.insertAdjacentHTML("beforeend", e), document.head.lastChild);
            t && t.tagName && "SCRIPT" == t.tagName && void 0 === t.cookieScriptProcessed && void 0 === t.CB_isClone && void 0 === t.consentProcessed && void 0 === t.cookiesProcessed && (t.consentProcessed = "1", CookieConsent.RunScriptTags([t]))
        }, this.overrideEventListeners();
        var e = !0;
        if ("function" != typeof MutationObserver && "object" != typeof MutationObserver && (e = !1), e && navigator.userAgent.match(/IEMobile|Trident|Edge/i) && (e = !1), document && document.documentElement && (this.hasAttr(document.documentElement, "ng-app") && (this.mutationAppName = document.documentElement.getAttribute("ng-app"), document.documentElement.removeAttribute("ng-app")), document.documentElement.attributes))
            for (var t = 0; t < document.documentElement.attributes.length; t++) {
                var o = document.documentElement.attributes[t].name,
                    i = "";
                document.documentElement.attributes[t].value && (i = document.documentElement.attributes[t].value), this.mutationFallbackDocAttributes.push({
                    name: o,
                    value: i
                })
            }
        if (e) this.mutationObserver = new MutationObserver(this.mutationHandler), this.mutationObserver.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }), this.downloadConfiguration();
        else if (!window.cookieconsentscriptfallbackpreloaded) {
            var n = !(window.cookieconsentscriptfallbackpreloaded = !0);
            if (document.implementation && "function" == typeof document.implementation.createHTMLDocument || (n = !0), !n) try {
                var s = document.implementation.createHTMLDocument("");
                s.documentElement.innerHTML = "<html><head><script><\/script></head><body></body></html>", document.replaceChild(document.importNode(s.documentElement, !0), document.documentElement)
            } catch (e) {
                n = !0
            }
            n ? (this.mutationFallback = !1, this.stopOverrideEventListeners()) : (this.mutationFallback = !0, "function" == typeof window.stop && window.stop(), this.mutationHandlerFallback(), this.downloadConfiguration())
        }
    }, this.overrideEventListeners = function() {
        var i = this;
        this.mutateEventListeners = !0, "undefined" != typeof EventTarget && void 0 === EventTarget.prototype.addEventListenerBase && (EventTarget.prototype.addEventListenerBase = EventTarget.prototype.addEventListener, EventTarget.prototype.addEventListener = function(e, t, o) {
            i.mutateEventListeners && !i.isInternalEventListener(e, this, t) ? "DOMContentLoaded" == e || "load" == e || "onload" == e || "readystatechange" == e ? i.mutationOnloadEventListeners.push({
                target: this,
                type: e,
                listener: t,
                options: o
            }) : (i.mutationEventListeners.push({
                target: this,
                type: e,
                listener: t,
                options: o
            }), this.addEventListenerBase(e, t, o)) : this.addEventListenerBase(e, t, o)
        })
    }, this.isInternalEventListener = function(e, t, o) {
        var i = this,
            n = !1;
        return ("beforescriptexecute" != e || void 0 === t.origOuterHTML) && t != this.iframe && o != i.cbonloadevent && o != i.triggerOnloadEvents && o != i.handleMessage && o != i.readBulkConsent && o != i.submitImpliedConsent && o != i.signalWindowLoad && (void 0 === t.CB_isClone || "load" != e && "error" != e) || (n = !0), n
    }, this.stopOverrideEventListeners = function() {
        CookieConsent.mutateEventListeners && setTimeout(function() {
            CookieConsent.mutateEventListeners = !1, CookieConsent.applyOverrideEventListeners(), "" != CookieConsent.mutationAppName && angular && angular.bootstrap && angular.bootstrap(document.documentElement, [CookieConsent.mutationAppName])
        }, 1)
    }, this.OverrideEventListenersOnloadFired = [], this.OverrideEventListenersOnloadToFire = [], this.applyOverrideEventListeners = function() {
        for (var e = 0; e < this.mutationOnloadEventListeners.length; e++) try {
            var t = this.mutationOnloadEventListeners[e];
            if (t.target && null != t.target && void 0 !== t.target)
                if (t.target.addEventListenerBase(t.type, t.listener, t.options), !CookieConsent.windowOnloadTriggered || t.target != window && t.target != document) {
                    if (t.target != window && t.target != document) try {
                        (i = document.createEvent("Event")).initEvent(t.type, !0, !0), t.target.dispatchEvent(i)
                    } catch (e) {}
                } else {
                    var o = t.target.toString() + t.type.toString();
                    CookieConsent.OverrideEventListenersOnloadFired.indexOf(o) < 0 && (CookieConsent.OverrideEventListenersOnloadFired.push(o), CookieConsent.OverrideEventListenersOnloadToFire.push({
                        target: t.target,
                        type: t.type
                    }))
                }
        } catch (e) {}
        for (var i, e = 0; e < CookieConsent.OverrideEventListenersOnloadToFire.length; e++) try {
            (i = document.createEvent("Event")).initEvent(CookieConsent.OverrideEventListenersOnloadToFire[e].type, !0, !0), CookieConsent.OverrideEventListenersOnloadToFire[e].target.dispatchEvent(i)
        } catch (e) {}!CookieConsent.windowOnloadTriggered || "function" != typeof window.onload || null != document.body.getAttribute("onload") && document.body.onload == window.onload || window.onload(), this.mutationOnloadEventListeners = []
    }, this.cloneEventListeners = function(e, t) {
        for (var o = 0; o < this.mutationEventListeners.length; o++) this.mutationEventListeners[o].target == e && t.addEventListenerBase(this.mutationEventListeners[o].type, this.mutationEventListeners[o].listener, this.mutationEventListeners[o].options)
    }, this.downloadConfiguration = function() {
        var e = this.currentPath;
        0 < e.length ? (0 != e.indexOf("/") && (e = "/" + e), e.lastIndexOf("/") != e.length - 1 && (e += "/")) : e = "/";
        var t = this.domain;
        0 != t.indexOf("xn--") && (t = this.domain.replace(/[^\u0020-\u007E]/gi, "-"));
        var o = this.CDN + "/consentconfig/" + this.serial.toLowerCase() + "/" + t + e + "configuration.js";
        this.configuration.tags = [], this.getScript(o, !1, function() {
            if (CookieConsent.configuration.loaded = !0, 0 == CookieConsent.configuration.trackingDomains.length)
                for (var e = 0; e < CookieConsent.configuration.tags.length; e++) {
                    var t, o = CookieConsent.configuration.tags[e];
                    !o.resolvedUrl || "" == o.resolvedUrl || "" != (t = CookieConsent.getHostnameFromURL(o.resolvedUrl)) && t != window.location.hostname && CookieConsent.configuration.trackingDomains.push({
                        d: t,
                        c: o.cat
                    })
                }
        })
    }, this.mutationHandler = function(e, t) {
        if (CookieConsent) {
            var o = !0;
            CookieConsent.configuration.loaded && (o = !1, CookieConsent.processPostPonedMutations());
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if ("childList" == n.type)
                    for (var s = 0; s < n.addedNodes.length; s++) {
                        var a = n.addedNodes[s];
                        if (1 === a.nodeType && !CookieConsent.hasAttr(a, "data-cookieconsent") && void 0 === a.CB_isClone && void 0 === a.isCookiebotDynamicTag) {
                            if (null == CookieConsent.mutationHandlerFirstScript && "SCRIPT" === a.tagName) {
                                CookieConsent.mutationHandlerFirstScript = a;
                                for (var r = document.getElementsByTagName("script"), c = 0; c < r.length; c++) {
                                    var h = r[c];
                                    if (!CookieConsent.hasAttr(h, "data-cookieconsent")) {
                                        CookieConsent.isCookiebotNode(h) || CookieConsent.log("WARNING: The Cookiebot script tag must be the first to load for auto-blocking to work.");
                                        break
                                    }
                                }
                            }
                            o || "SCRIPT" === a.tagName ? CookieConsent.postponeMutation(a) : CookieConsent.processMutation(a, !1)
                        }
                    }
            }
        }
    }, this.preloadMutationScript = function(e) {
        var t = document.createElementOrig("link");
        t.href = e, t.rel = "preload", t.as = "script", t.CB_isClone = 1, document.head.appendChild(t)
    }, this.processMutation = function(e, t) {
        var o, i, n, s, a, r, c, h = !0;
        !t && this.isCookiebotNode(e) && (h = !1), e.consentProcessed && "1" == e.consentProcessed ? h = !1 : e.consentProcessed = "1", h && (r = c = "", o = !1, "SCRIPT" === e.tagName ? (this.hasAttr(e, "src") && (r = e.getAttribute("src"), o = !0), t ? void 0 !== e.origOuterHTML && (c = this.getTagCookieCategories(e.origOuterHTML, r, e, !0)) : (c = this.getTagCookieCategories(e.outerHTML, r, e, !0), null != e.type && void 0 !== e.type && "" != e.type && "text/plain" != e.type && (e.origScriptType = e.type)), o && "" != c && 0 <= r.toLocaleLowerCase().indexOf("jquery") && (c = ""), "" != c ? (e.type = "text/plain", e.setAttribute("data-cookieconsent", c)) : t && "text/plain" == e.type && (i = e.parentNode, n = this.cloneScriptTag(e), this.cloneEventListeners(e, n), n.consentProcessed = "1", n.CB_isClone = 1, t && (n.origOuterHTML = e.origOuterHTML, void 0 !== e.origScriptType && (n.type = e.origScriptType)), null != i && (i.insertBefore(n, e), i.removeChild(e)))) : "IFRAME" !== e.tagName && "IMG" !== e.tagName && "EMBED" !== e.tagName && "VIDEO" !== e.tagName && "AUDIO" !== e.tagName && "PICTURE" !== e.tagName && "SOURCE" !== e.tagName || (t || !this.hasAttr(e, "src") || this.isCookiebotNode(e) || this.hasAttr(e, "data-lazy-type") || (e.origOuterHTML = e.outerHTML, e.setAttribute("data-cookieblock-src", e.getAttribute("src")), e.removeAttribute("src")), "IMG" === e.tagName && this.hasAttr(e, "data-image_src") && e.setAttribute("src", e.getAttribute("data-image_src")), !this.hasAttr(e, "data-cookieblock-src") || this.hasAttr(e, "src") || this.hasAttr(e, "data-lazy-type") || this.hasAttr(e, "data-image_src") || (r = e.getAttribute("data-cookieblock-src"), "" != (c = this.getTagCookieCategories(e.origOuterHTML, r, e, !0)) ? (e.setAttribute("data-cookieconsent", c), s = e.cloneNode(!0), this.cloneEventListeners(e, s), s.CB_isClone = 1, s.consentProcessed = "1", (a = e.parentNode).insertBefore(s, e), a.removeChild(e), e = null) : (this.hasAttr(e, "data-cookieblock-src") && (e.setAttribute("src", e.getAttribute("data-cookieblock-src")), e.removeAttribute("data-cookieblock-src")), e.consentProcessed = "1", "SOURCE" === e.tagName && (s = e.cloneNode(!0), this.cloneEventListeners(e, s), s.CB_isClone = 1, s.consentProcessed = "1", (a = e.parentNode).removeChild(e), a.appendChild(s), e = null)))))
    }, this.isCookiebotNode = function(e) {
        var t, o = !1;
        return this.hasAttr(e, "src") && (0 != (t = e.getAttribute("src").toLowerCase()).indexOf(this.host) && 0 != t.indexOf(this.CDN) || (o = !0)), o
    }, this.isCookiebotCoreNode = function(e) {
        return this.isCookiebotNode(e) && -1 < e.src.indexOf("/uc.js")
    }, this.postponeMutation = function(t) {
        var e, o, i;
        this.isCookiebotNode(t) || ("SCRIPT" === t.tagName && void 0 !== t.type && "text/javascript" != t.type && -1 < t.type.indexOf("-text/javascript") && (t.type = "text/javascript"), "SCRIPT" !== t.tagName || null != t.type && void 0 !== t.type && "" != t.type && "text/javascript" != t.type && "application/javascript" != t.type && "module" != t.type && "text/plain" != t.type ? "IFRAME" !== t.tagName && "IMG" !== t.tagName && "EMBED" !== t.tagName && "VIDEO" !== t.tagName && "AUDIO" !== t.tagName && "PICTURE" !== t.tagName && "SOURCE" !== t.tagName || "IMG" === t.tagName && this.hasAttr(t, "src") && this.getHostnameFromURL(t.src) == window.location.hostname || (!this.hasAttr(t, "src") || this.hasAttr(t, "data-lazy-type") || this.hasAttr(t, "data-image_src") || this.isCookiebotNode(t) || (t.origOuterHTML = t.outerHTML, t.setAttribute("data-cookieblock-src", t.getAttribute("src")), t.removeAttribute("src"), e = t.cloneNode(!0), this.cloneEventListeners(t, e), e.CB_isClone = 1, (o = t.parentNode).insertBefore(e, t), o.removeChild(t), t = null, this.postPonedMutations.push(e)), null != t && "IMG" === t.tagName && this.hasAttr(t, "data-image_src") && t.setAttribute("src", t.getAttribute("data-image_src"))) : (CookieConsent.startJQueryHold(), t.origOuterHTML = t.outerHTML, null != t.type && void 0 !== t.type && "" != t.type && "text/plain" != t.type && (t.origScriptType = t.type), t.type = "text/plain", i = function(e) {
            "text/plain" === t.getAttribute("type") && e.preventDefault(), t.removeEventListener("beforescriptexecute", i)
        }, t.addEventListener("beforescriptexecute", i), this.hasResponse && this.hasAttr(t, "src") && !this.hasAttr(t, "nomodule") && this.preloadMutationScript(t.src), this.hasAttr(t, "defer") ? (this.hasAttr(t, "async") && t.removeAttribute("async"), this.deferMutations.push(t)) : this.nonAsyncMutations.push(t)))
    }, this.processPostPonedMutations = function() {
        if (0 < this.postPonedMutations.length) {
            for (var e = 0; e < this.postPonedMutations.length; e++) {
                var t = this.postPonedMutations[e];
                this.processMutation(t, !0)
            }
            this.postPonedMutations = []
        }
    }, this.dequeueNonAsyncScripts = function(e) {
        if (0 < e.length) {
            var t = e.shift();
            if ("SCRIPT" === t.tagName && void 0 === t.cookieScriptProcessed) {
                t.cookieScriptProcessed = 1, CookieConsent.startJQueryHold();
                var o = "",
                    i = "",
                    n = !1;
                if (this.hasAttr(t, "src") && (o = t.getAttribute("src"), n = !0), this.hasAttr(t, "defer"), void 0 !== t.origOuterHTML && (i = this.getTagCookieCategories(t.origOuterHTML, o, t, !0)), n && "" != i && 0 <= o.toLocaleLowerCase().indexOf("jquery") && (i = ""), "" != i) t.type = "text/plain", t.setAttribute("data-cookieconsent", i), CookieConsent.dequeueNonAsyncScripts(e);
                else if ("text/plain" == t.type) {
                    var s = t.parentNode,
                        a = this.cloneScriptTag(t);
                    this.cloneEventListeners(t, a), a.consentProcessed = "1", a.CB_isClone = 1;
                    var r = n && !this.hasAttr(a, "data-cookieconsent") && !this.hasAttr(a, "nomodule");
                    r && (a.onload = function() {
                        CookieConsent.dequeueNonAsyncScripts(e)
                    }, a.onerror = function() {
                        CookieConsent.dequeueNonAsyncScripts(e)
                    }), a.origOuterHTML = t.origOuterHTML, void 0 !== t.origScriptType && (a.type = t.origScriptType);
                    try {
                        null != s && (s.insertBefore(a, t), s.removeChild(t))
                    } catch (e) {}
                    r || CookieConsent.dequeueNonAsyncScripts(e)
                } else CookieConsent.dequeueNonAsyncScripts(e)
            } else CookieConsent.dequeueNonAsyncScripts(e)
        } else 0 < this.deferMutations.length ? CookieConsent.dequeueNonAsyncScripts(CookieConsent.deferMutations) : (CookieConsent.runScripts(), setTimeout(function() {
            CookieConsent.stopOverrideEventListeners(), CookieConsent.endJQueryHold()
        }, 1e3))
    }, this.getTagCookieCategories = function(e, t, o, i) {
        for (var n = "", s = 0; s < this.configuration.tags.length; s++) {
            var a = this.configuration.tags[s];
            if ("" != t && a.url && "" != a.url && a.url.toLowerCase() == t.toLowerCase()) {
                n = this.cookieCategoriesFromNumberArray(a.cat);
                break
            }
            if ("" != t && a.resolvedUrl && "" != a.resolvedUrl && a.resolvedUrl.toLowerCase() == this.resolveURL(t).toLowerCase()) {
                n = this.cookieCategoriesFromNumberArray(a.cat);
                break
            }
            if (this.hasAttr(o, "id") && a.tagID && "" != a.tagID) {
                var r = o.getAttribute("id").toLowerCase();
                if (a.tagID.toLowerCase() == r) {
                    n = this.cookieCategoriesFromNumberArray(a.cat);
                    break
                }
            }
            if (a.innerHash && "" != a.innerHash && o && o.innerHTML && "" != o.innerHTML) {
                var c = this.hashCode(o.innerHTML).toString();
                if (a.innerHash == c && "0" != c) {
                    n = this.cookieCategoriesFromNumberArray(a.cat);
                    break
                }
            }
            if (a.outerHash && "" != a.outerHash && void 0 !== e && "undefined" != e) {
                c = this.hashCode(e).toString();
                if (a.outerHash == c && "0" != c) {
                    n = this.cookieCategoriesFromNumberArray(a.cat);
                    break
                }
            }
            if ("" != t && a.resolvedUrl && "" != a.resolvedUrl && 0 < this.configuration.trackingDomains.length && "IMG" != o.tagName && "PICTURE" != o.tagName) {
                var h = this.getHostnameFromURL(t);
                if ("" != h && h != window.location.hostname)
                    for (var d = 0; d < this.configuration.trackingDomains.length; d++) {
                        var l = this.configuration.trackingDomains[d];
                        if (h == l.d) {
                            n = this.cookieCategoriesFromNumberArray(l.c);
                            break
                        }
                    }
            }
        }
        if (0 == this.configuration.tags.length && i && "" != t && "" == n) {
            var u = t.toLowerCase(),
                m = !0;
            if (0 == u.indexOf("https://") && 8 < u.length ? u = u.substr(8) : 0 == u.indexOf("http://") && 7 < u.length ? u = u.substr(7) : 0 == u.indexOf("//") && 2 < u.length ? u = u.substr(2) : m = !1, m && (0 < u.indexOf(":") && (u = u.substr(0, u.indexOf(":"))), 0 < u.indexOf("/") && (u = u.substr(0, u.indexOf("/"))), 3 < u.length))
                for (var C = 0; C < this.commonTrackers.domains.length; C++) {
                    var p = this.commonTrackers.domains[C];
                    if (0 <= u.indexOf(p.d)) {
                        n = this.cookieCategoriesFromNumberArray(p.c);
                        break
                    }
                }
        }
        return n
    }, this.cookieCategoriesFromNumberArray = function(e) {
        for (var t = "", o = 0; o < e.length; o++) switch ("" != t && (t += ","), Number(e[o])) {
            case 2:
                t += "preferences";
                break;
            case 3:
                t += "statistics";
                break;
            case 4:
                "" != t && -1 != t.indexOf("marketing") || (t += "marketing")
        }
        return "" != t && "," == t.substr(t.length - 1, 1) && (t = t.substring(0, t.length - 1)), t
    }, this.stopMutationObserver = function() {
        null != this.mutationObserver && (CookieConsent.processPostPonedMutations(), CookieConsent.dequeueNonAsyncScripts(this.nonAsyncMutations), this.mutationObserver.disconnect(), this.mutationObserver = null)
    }, this.mutationHandlerFallback = function(e) {
        var t, o = new XMLHttpRequest;
        o.onreadystatechange = function() {
            4 == o.readyState && (t = o.responseText, CookieConsent.mutationHandlerFallbackInit(t))
        }, o.open("GET", document.URL, !0), e && o.overrideMimeType("text/html; charset=" + e), o.send(null)
    }, this.mutationHandlerFallbackInit = function(e) {
        if (this.configuration.loaded || 30 < this.configuration.loadRetry) {
            if (this.configuration.loaded = !0, this.configuration.loadRetry = 0, !this.mutationHandlerFallbackCharsetLoaded) {
                this.mutationHandlerFallbackCharsetLoaded = !0;
                var t = /<meta.*?charset=["'].*charset=([^"']+)["'][^>]*>/g,
                    o = t.exec(e);
                if ((o = o || (t = /<meta charset=["']([^"']+)["'][^>]*>/g).exec(e)) && 1 < o.length)
                    if ("utf-8" != o[1].toLowerCase()) return void this.mutationHandlerFallback(o[1])
            }
            var i = document.implementation.createHTMLDocument("" + (document.title || ""));
            document.replaceChild(document.importNode(i.documentElement, !0), document.documentElement), document.documentElement.innerHTML = e;
            for (var n = 0; n < this.mutationFallbackDocAttributes.length; n++) document.documentElement.setAttribute(this.mutationFallbackDocAttributes[n].name, this.mutationFallbackDocAttributes[n].value);
            var s, a = /<\s*body[^>]*>/g.exec(e);
            if (a && 0 < a.length && "<body>" != a[0]) try {
                var r = document.implementation.createHTMLDocument("");
                r.documentElement.innerHTML = "<html><head><script><\/script></head>" + a[0] + "</body></html>";
                for (n = 0; n < r.body.attributes.length; n++) try {
                    document.body.setAttribute(r.body.attributes[n].name, r.body.attributes[n].value)
                } catch (e) {}
            } catch (e) {}
            0 < document.getElementsByTagName("base").length && navigator.userAgent.match(/IEMobile|Trident/i) && (s = document.getElementsByTagName("*"), [].forEach.call(s, function(e) {
                var t, o;
                CookieConsent.hasAttr(e, "src") ? e.src = CookieConsent.resolveURL(e.src) : CookieConsent.hasAttr(e, "href") && (e.href = CookieConsent.resolveURL(e.href), "LINK" == e.tagName && CookieConsent.hasAttr(e, "rel") && (t = e.cloneNode(!0), (o = e.parentNode).insertBefore(t, e), o.removeChild(e)))
            }));
            var c = document.getElementsByTagName("script");
            [].forEach.call(c, function(e) {
                var t, o, i;
                CookieConsent.isCookiebotCoreNode(e) || CookieConsent.hasAttr(e, "data-cookieconsent") || (o = t = "", i = !1, CookieConsent.hasAttr(e, "src") && (o = e.getAttribute("src"), i = !0), t = CookieConsent.getTagCookieCategories(e.outerHTML, o, e, !0), i && "" != t && 0 <= o.toLocaleLowerCase().indexOf("jquery") && (t = ""), "" != t && (null != e.type && void 0 !== e.type && "" != e.type && "text/plain" != e.type && (e.origScriptType = e.type), e.type = "text/plain", e.setAttribute("data-cookieconsent", t)), CookieConsent.hasAttr(e, "defer") ? CookieConsent.fallbackDeferNodes.push(e) : CookieConsent.fallbackScriptNodes.push(e))
            }), this.loadFallbackScriptNodes(this.fallbackScriptNodes), this.mutationHandlerFallbackMarkupTag(document, "IFRAME"), this.mutationHandlerFallbackMarkupTag(document, "IMG"), this.mutationHandlerFallbackMarkupTag(document, "EMBED"), this.mutationHandlerFallbackMarkupTag(document, "VIDEO"), this.mutationHandlerFallbackMarkupTag(document, "AUDIO"), this.mutationHandlerFallbackMarkupTag(document, "PICTURE"), this.mutationHandlerFallbackMarkupTag(document, "SOURCE"), CookieConsent.mutationFallback = !1, null != CookieConsent.dialog && CookieConsent.show(), (this.consented || this.declined) && this.triggerOnloadEvents()
        } else setTimeout(function() {
            CookieConsent.mutationHandlerFallbackInit(e)
        }, 100)
    }, this.fallbackScriptNodes = [], this.fallbackDeferNodes = [], this.startJQueryHold = function() {
        "undefined" != typeof jQuery && void 0 === window.CB_jQueryHoldReadyStarted && void 0 !== jQuery.holdReady && (window.CB_jQueryHoldReadyStarted = 1, CookieConsent.holdReadyClone = jQuery.holdReady, CookieConsent.holdReadyClone(!0))
    }, this.endJQueryHold = function() {
        "undefined" != typeof jQuery && void 0 !== window.CB_jQueryHoldReadyStarted && void 0 !== CookieConsent.holdReadyClone && CookieConsent.holdReadyClone(!1)
    }, this.loadFallbackScriptNodes = function(e) {
        var t, o, i, n, s;
        CookieConsent.startJQueryHold(), 0 < e.length ? null == (t = e.shift()).type || void 0 === t.type || "" == t.type || "text/javascript" == t.type || "application/javascript" == t.type || "module" == t.type || "text/plain" == t.type ? (s = t.parentNode, o = this.cloneScriptTag(t), this.cloneEventListeners(t, o), i = !(o.consentProcessed = "1"), this.hasAttr(t, "src") && (i = !0), (n = i && !this.hasAttr(o, "data-cookieconsent") && !this.hasAttr(o, "nomodule")) && (o.onload = function() {
            o.isloaded = !0, CookieConsent.loadFallbackScriptNodes(e), CookieConsent.startJQueryHold()
        }, o.onerror = function() {
            o.isloaded = !0, CookieConsent.loadFallbackScriptNodes(e), CookieConsent.startJQueryHold()
        }), this.hasAttr(o, "data-cookieconsent") && "ignore" != o.getAttribute("data-cookieconsent") && (o.type = "text/plain"), null != (s = t.parentNode) && (s.insertBefore(o, t), s.removeChild(t)), n || CookieConsent.loadFallbackScriptNodes(e)) : CookieConsent.loadFallbackScriptNodes(e) : 0 < this.fallbackDeferNodes.length ? this.loadFallbackScriptNodes(this.fallbackDeferNodes) : (CookieConsent.runScripts(), setTimeout(function() {
            var e;
            CookieConsent.stopOverrideEventListeners(), CookieConsent.endJQueryHold(), "undefined" == typeof EventTarget && ((e = document.createEvent("Event")).initEvent("readystatechange", !0, !0), window.document.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("DOMContentLoaded", !0, !0), window.document.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("load", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("onload", !0, !0), window.dispatchEvent(e))
        }, 500))
    }, this.mutationHandlerFallbackMarkupTag = function(e, t) {
        var o = e.getElementsByTagName(t);
        [].forEach.call(o, function(e) {
            var t, o;
            CookieConsent.hasAttr(e, "data-cookieconsent") || CookieConsent.isCookiebotNode(e) || "IMG" === e.tagName && CookieConsent.hasAttr(e, "src") && CookieConsent.getHostnameFromURL(e.src) == window.location.hostname || (o = t = "", CookieConsent.hasAttr(e, "src") && (o = e.getAttribute("src")), "" != (t = CookieConsent.getTagCookieCategories(e.outerHTML, o, e, !0)) && (e.setAttribute("data-cookieconsent", t), CookieConsent.hasAttr(e, "src") && (e.origOuterHTML = e.outerHTML, e.setAttribute("data-cookieblock-src", e.getAttribute("src")), e.removeAttribute("src"))))
        })
    }, this.resolveURL = function(e) {
        if ("" == e) return e;
        var t = document.createElementOrig("a");
        return t.href = e, t.cloneNode(!1).href
    }, this.getHostnameFromURL = function(e) {
        try {
            var t = document.createElementOrig("a");
            return t.href = e, t.cloneNode(!1).hostname
        } catch (e) {
            return ""
        }
    }, this.updateRegulations = function() {
        var e;
        "" != this.userCountry ? (e = this.userCountry.toLowerCase(), 0 <= this.regulationRegions.gdpr.indexOf(e) ? this.regulations.gdprApplies = !0 : this.regulations.gdprApplies = !1, 0 <= this.regulationRegions.ccpa.indexOf(e) ? this.regulations.ccpaApplies = !0 : this.regulations.ccpaApplies = !1, 0 <= this.regulationRegions.lgpd.indexOf(e) ? this.regulations.lgpdApplies = !0 : this.regulations.lgpdApplies = !1) : (this.regulations.gdprApplies = !1, this.regulations.ccpaApplies = !1, this.regulations.lgpdApplies = !1)
    }, this.signalConsentReady = function() {
        setTimeout(function() {
            var e = document.createEvent("Event");
            e.initEvent("CookiebotOnConsentReady", !0, !0), window.dispatchEvent(e), (e = document.createEvent("Event")).initEvent("CookieConsentOnConsentReady", !0, !0), window.dispatchEvent(e)
        }, 1)
    }/*, this.init()
}, CookieControl.Cookie.prototype.onload = function() {}, CookieControl.Cookie.prototype.ondecline = function() {}, CookieControl.Cookie.prototype.onaccept = function() {}, CookieControl.DateTime = function(e) {
    this.Date = new Date, e && (this.Date = e), this.isLeapYear = function(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }, this.getDaysInMonth = function(e, t) {
        return [31, this.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
    }, this.addMonths = function(e) {
        var t = this.Date.getDate();
        return this.Date.setDate(1), this.Date.setMonth(this.Date.getMonth() + e), this.Date.setDate(Math.min(t, this.getDaysInMonth(this.Date.getFullYear(), this.Date.getMonth()))), this.Date
    }
},
*/
addUspapiLocatorFrame(), window.addEventListener("message", __handleUspapiMessage, !1), "object" != typeof CookieConsent ? "CookieConsent" != (CookieConsent = new CookieControl.Cookie("CookieConsent")).scriptId && "Cookiebot" != CookieConsent.scriptId && (window[CookieConsent.scriptId] = CookieConsent) : CookieConsent.log("WARNING: Cookiebot script is included twice - please remove one instance to avoid unexpected results.");