// JavaScript Document
/*
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */

(function(a2, aB) {
    var w, af, o = a2.document,
        aI = a2.location,
        d = a2.navigator,
        bg = a2.jQuery,
        I = a2.$,
        am = Array.prototype.push,
        a4 = Array.prototype.slice,
        aK = Array.prototype.indexOf,
        z = Object.prototype.toString,
        V = Object.prototype.hasOwnProperty,
        aO = String.prototype.trim,
        bG = function(e, bZ) {
            return new bG.fn.init(e, bZ, w)
        },
        bx = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        aa = /\S/,
        aV = /\s+/,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bo = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        bf = /^[\],:{}\s]*$/,
        bi = /(?:^|:|,)(?:\s*\[)+/g,
        bD = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        a0 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        bP = /^-ms-/,
        aU = /-([\da-z])/gi,
        N = function(e, bZ) {
            return (bZ + "").toUpperCase()
        },
        aF = function() {
            if (o.addEventListener) {
                o.removeEventListener("DOMContentLoaded", aF, false);
                bG.ready()
            } else {
                if (o.readyState === "complete") {
                    o.detachEvent("onreadystatechange", aF);
                    bG.ready()
                }
            }
        },
        Z = {};
    bG.fn = bG.prototype = {
        constructor: bG,
        init: function(e, b2, b1) {
            var b0, b3, bZ, b4;
            if (!e) {
                return this
            }
            if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    b0 = [null, e, null]
                } else {
                    b0 = bo.exec(e)
                }
                if (b0 && (b0[1] || !b2)) {
                    if (b0[1]) {
                        b2 = b2 instanceof bG ? b2[0] : b2;
                        b4 = (b2 && b2.nodeType ? b2.ownerDocument || b2 : o);
                        e = bG.parseHTML(b0[1], b4, true);
                        if (a.test(b0[1]) && bG.isPlainObject(b2)) {
                            this.attr.call(e, b2, true)
                        }
                        return bG.merge(this, e)
                    } else {
                        b3 = o.getElementById(b0[2]);
                        if (b3 && b3.parentNode) {
                            if (b3.id !== b0[2]) {
                                return b1.find(e)
                            }
                            this.length = 1;
                            this[0] = b3
                        }
                        this.context = o;
                        this.selector = e;
                        return this
                    }
                } else {
                    if (!b2 || b2.jquery) {
                        return (b2 || b1).find(e)
                    } else {
                        return this.constructor(b2).find(e)
                    }
                }
            } else {
                if (bG.isFunction(e)) {
                    return b1.ready(e)
                }
            }
            if (e.selector !== aB) {
                this.selector = e.selector;
                this.context = e.context
            }
            return bG.makeArray(e, this)
        },
        selector: "",
        jquery: "1.8.1",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return a4.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        },
        pushStack: function(bZ, b1, e) {
            var b0 = bG.merge(this.constructor(), bZ);
            b0.prevObject = this;
            b0.context = this.context;
            if (b1 === "find") {
                b0.selector = this.selector + (this.selector ? " " : "") + e
            } else {
                if (b1) {
                    b0.selector = this.selector + "." + b1 + "(" + e + ")"
                }
            }
            return b0
        },
        each: function(bZ, e) {
            return bG.each(this, bZ, e)
        },
        ready: function(e) {
            bG.ready.promise().done(e);
            return this
        },
        eq: function(e) {
            e = +e;
            return e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(a4.apply(this, arguments), "slice", a4.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(bG.map(this, function(b0, bZ) {
                return e.call(b0, bZ, b0)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: am,
        sort: [].sort,
        splice: [].splice
    };
    bG.fn.init.prototype = bG.fn;
    bG.extend = bG.fn.extend = function() {
        var b7, b0, e, bZ, b4, b5, b3 = arguments[0] || {},
            b2 = 1,
            b1 = arguments.length,
            b6 = false;
        if (typeof b3 === "boolean") {
            b6 = b3;
            b3 = arguments[1] || {};
            b2 = 2
        }
        if (typeof b3 !== "object" && !bG.isFunction(b3)) {
            b3 = {}
        }
        if (b1 === b2) {
            b3 = this;
            --b2
        }
        for (; b2 < b1; b2++) {
            if ((b7 = arguments[b2]) != null) {
                for (b0 in b7) {
                    e = b3[b0];
                    bZ = b7[b0];
                    if (b3 === bZ) {
                        continue
                    }
                    if (b6 && bZ && (bG.isPlainObject(bZ) || (b4 = bG.isArray(bZ)))) {
                        if (b4) {
                            b4 = false;
                            b5 = e && bG.isArray(e) ? e : []
                        } else {
                            b5 = e && bG.isPlainObject(e) ? e : {}
                        }
                        b3[b0] = bG.extend(b6, b5, bZ)
                    } else {
                        if (bZ !== aB) {
                            b3[b0] = bZ
                        }
                    }
                }
            }
        }
        return b3
    };
    bG.extend({
        noConflict: function(e) {
            if (a2.$ === bG) {
                a2.$ = I
            }
            if (e && a2.jQuery === bG) {
                a2.jQuery = bg
            }
            return bG
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                bG.readyWait++
            } else {
                bG.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --bG.readyWait : bG.isReady) {
                return
            }
            if (!o.body) {
                return setTimeout(bG.ready, 1)
            }
            bG.isReady = true;
            if (e !== true && --bG.readyWait > 0) {
                return
            }
            af.resolveWith(o, [bG]);
            if (bG.fn.trigger) {
                bG(o).trigger("ready").off("ready")
            }
        },
        isFunction: function(e) {
            return bG.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return bG.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : Z[z.call(e)] || "object"
        },
        isPlainObject: function(b1) {
            if (!b1 || bG.type(b1) !== "object" || b1.nodeType || bG.isWindow(b1)) {
                return false
            }
            try {
                if (b1.constructor && !V.call(b1, "constructor") && !V.call(b1.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b0) {
                return false
            }
            var bZ;
            for (bZ in b1) {}
            return bZ === aB || V.call(b1, bZ)
        },
        isEmptyObject: function(bZ) {
            var e;
            for (e in bZ) {
                return false
            }
            return true
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(b1, b0, e) {
            var bZ;
            if (!b1 || typeof b1 !== "string") {
                return null
            }
            if (typeof b0 === "boolean") {
                e = b0;
                b0 = 0
            }
            b0 = b0 || o;
            if ((bZ = a.exec(b1))) {
                return [b0.createElement(bZ[1])]
            }
            bZ = bG.buildFragment([b1], b0, e ? null : []);
            return bG.merge([], (bZ.cacheable ? bG.clone(bZ.fragment) : bZ.fragment).childNodes)
        },
        parseJSON: function(e) {
            if (!e || typeof e !== "string") {
                return null
            }
            e = bG.trim(e);
            if (a2.JSON && a2.JSON.parse) {
                return a2.JSON.parse(e)
            }
            if (bf.test(e.replace(bD, "@").replace(a0, "]").replace(bi, ""))) {
                return (new Function("return " + e))()
            }
            bG.error("Invalid JSON: " + e)
        },
        parseXML: function(b1) {
            var bZ, b0;
            if (!b1 || typeof b1 !== "string") {
                return null
            }
            try {
                if (a2.DOMParser) {
                    b0 = new DOMParser();
                    bZ = b0.parseFromString(b1, "text/xml")
                } else {
                    bZ = new ActiveXObject("Microsoft.XMLDOM");
                    bZ.async = "false";
                    bZ.loadXML(b1)
                }
            } catch (b2) {
                bZ = aB
            }
            if (!bZ || !bZ.documentElement || bZ.getElementsByTagName("parsererror").length) {
                bG.error("Invalid XML: " + b1)
            }
            return bZ
        },
        noop: function() {},
        globalEval: function(e) {
            if (e && aa.test(e)) {
                (a2.execScript || function(bZ) {
                    a2["eval"].call(a2, bZ)
                })(e)
            }
        },
        camelCase: function(e) {
            return e.replace(bP, "ms-").replace(aU, N)
        },
        nodeName: function(bZ, e) {
            return bZ.nodeName && bZ.nodeName.toUpperCase() === e.toUpperCase()
        },
        each: function(b3, b4, b0) {
            var bZ, b1 = 0,
                b2 = b3.length,
                e = b2 === aB || bG.isFunction(b3);
            if (b0) {
                if (e) {
                    for (bZ in b3) {
                        if (b4.apply(b3[bZ], b0) === false) {
                            break
                        }
                    }
                } else {
                    for (; b1 < b2;) {
                        if (b4.apply(b3[b1++], b0) === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (bZ in b3) {
                        if (b4.call(b3[bZ], bZ, b3[bZ]) === false) {
                            break
                        }
                    }
                } else {
                    for (; b1 < b2;) {
                        if (b4.call(b3[b1], b1, b3[b1++]) === false) {
                            break
                        }
                    }
                }
            }
            return b3
        },
        trim: aO && !aO.call("\uFEFF\xA0") ? function(e) {
            return e == null ? "" : aO.call(e)
        } : function(e) {
            return e == null ? "" : e.toString().replace(C, "")
        },
        makeArray: function(e, b0) {
            var b1, bZ = b0 || [];
            if (e != null) {
                b1 = bG.type(e);
                if (e.length == null || b1 === "string" || b1 === "function" || b1 === "regexp" || bG.isWindow(e)) {
                    am.call(bZ, e)
                } else {
                    bG.merge(bZ, e)
                }
            }
            return bZ
        },
        inArray: function(b1, bZ, b0) {
            var e;
            if (bZ) {
                if (aK) {
                    return aK.call(bZ, b1, b0)
                }
                e = bZ.length;
                b0 = b0 ? b0 < 0 ? Math.max(0, e + b0) : b0 : 0;
                for (; b0 < e; b0++) {
                    if (b0 in bZ && bZ[b0] === b1) {
                        return b0
                    }
                }
            }
            return -1
        },
        merge: function(b2, b0) {
            var e = b0.length,
                b1 = b2.length,
                bZ = 0;
            if (typeof e === "number") {
                for (; bZ < e; bZ++) {
                    b2[b1++] = b0[bZ]
                }
            } else {
                while (b0[bZ] !== aB) {
                    b2[b1++] = b0[bZ++]
                }
            }
            b2.length = b1;
            return b2
        },
        grep: function(bZ, b4, e) {
            var b3, b0 = [],
                b1 = 0,
                b2 = bZ.length;
            e = !!e;
            for (; b1 < b2; b1++) {
                b3 = !!b4(bZ[b1], b1);
                if (e !== b3) {
                    b0.push(bZ[b1])
                }
            }
            return b0
        },
        map: function(e, b5, b6) {
            var b3, b4, b2 = [],
                b0 = 0,
                bZ = e.length,
                b1 = e instanceof bG || bZ !== aB && typeof bZ === "number" && ((bZ > 0 && e[0] && e[bZ - 1]) || bZ === 0 || bG.isArray(e));
            if (b1) {
                for (; b0 < bZ; b0++) {
                    b3 = b5(e[b0], b0, b6);
                    if (b3 != null) {
                        b2[b2.length] = b3
                    }
                }
            } else {
                for (b4 in e) {
                    b3 = b5(e[b4], b4, b6);
                    if (b3 != null) {
                        b2[b2.length] = b3
                    }
                }
            }
            return b2.concat.apply([], b2)
        },
        guid: 1,
        proxy: function(b2, b1) {
            var b0, e, bZ;
            if (typeof b1 === "string") {
                b0 = b2[b1];
                b1 = b2;
                b2 = b0
            }
            if (!bG.isFunction(b2)) {
                return aB
            }
            e = a4.call(arguments, 2);
            bZ = function() {
                return b2.apply(b1, e.concat(a4.call(arguments)))
            };
            bZ.guid = b2.guid = b2.guid || bZ.guid || bG.guid++;
            return bZ
        },
        access: function(e, b4, b7, b5, b2, b8, b6) {
            var b0, b3 = b7 == null,
                b1 = 0,
                bZ = e.length;
            if (b7 && typeof b7 === "object") {
                for (b1 in b7) {
                    bG.access(e, b4, b1, b7[b1], 1, b8, b5)
                }
                b2 = 1
            } else {
                if (b5 !== aB) {
                    b0 = b6 === aB && bG.isFunction(b5);
                    if (b3) {
                        if (b0) {
                            b0 = b4;
                            b4 = function(ca, b9, cb) {
                                return b0.call(bG(ca), cb)
                            }
                        } else {
                            b4.call(e, b5);
                            b4 = null
                        }
                    }
                    if (b4) {
                        for (; b1 < bZ; b1++) {
                            b4(e[b1], b7, b0 ? b5.call(e[b1], b1, b4(e[b1], b7)) : b5, b6)
                        }
                    }
                    b2 = 1
                }
            }
            return b2 ? e : b3 ? b4.call(e) : bZ ? b4(e[0], b7) : b8
        },
        now: function() {
            return (new Date()).getTime()
        }
    });
    bG.ready.promise = function(b2) {
        if (!af) {
            af = bG.Deferred();
            if (o.readyState === "complete") {
                setTimeout(bG.ready, 1)
            } else {
                if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", aF, false);
                    a2.addEventListener("load", bG.ready, false)
                } else {
                    o.attachEvent("onreadystatechange", aF);
                    a2.attachEvent("onload", bG.ready);
                    var b1 = false;
                    try {
                        b1 = a2.frameElement == null && o.documentElement
                    } catch (b0) {}
                    if (b1 && b1.doScroll) {
                        (function bZ() {
                            if (!bG.isReady) {
                                try {
                                    b1.doScroll("left")
                                } catch (b3) {
                                    return setTimeout(bZ, 50)
                                }
                                bG.ready()
                            }
                        })()
                    }
                }
            }
        }
        return af.promise(b2)
    };
    bG.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(bZ, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    w = bG(o);
    var bU = {};

    function ac(bZ) {
        var e = bU[bZ] = {};
        bG.each(bZ.split(aV), function(b1, b0) {
            e[b0] = true
        });
        return e
    }
    bG.Callbacks = function(b8) {
        b8 = typeof b8 === "string" ? (bU[b8] || ac(b8)) : bG.extend({}, b8);
        var b1, e, b2, b0, b3, b4, b5 = [],
            b6 = !b8.once && [],
            bZ = function(b9) {
                b1 = b8.memory && b9;
                e = true;
                b4 = b0 || 0;
                b0 = 0;
                b3 = b5.length;
                b2 = true;
                for (; b5 && b4 < b3; b4++) {
                    if (b5[b4].apply(b9[0], b9[1]) === false && b8.stopOnFalse) {
                        b1 = false;
                        break
                    }
                }
                b2 = false;
                if (b5) {
                    if (b6) {
                        if (b6.length) {
                            bZ(b6.shift())
                        }
                    } else {
                        if (b1) {
                            b5 = []
                        } else {
                            b7.disable()
                        }
                    }
                }
            },
            b7 = {
                add: function() {
                    if (b5) {
                        var ca = b5.length;
                        (function b9(cb) {
                            bG.each(cb, function(cd, cc) {
                                var ce = bG.type(cc);
                                if (ce === "function" && (!b8.unique || !b7.has(cc))) {
                                    b5.push(cc)
                                } else {
                                    if (cc && cc.length && ce !== "string") {
                                        b9(cc)
                                    }
                                }
                            })
                        })(arguments);
                        if (b2) {
                            b3 = b5.length
                        } else {
                            if (b1) {
                                b0 = ca;
                                bZ(b1)
                            }
                        }
                    }
                    return this
                },
                remove: function() {
                    if (b5) {
                        bG.each(arguments, function(cb, b9) {
                            var ca;
                            while ((ca = bG.inArray(b9, b5, ca)) > -1) {
                                b5.splice(ca, 1);
                                if (b2) {
                                    if (ca <= b3) {
                                        b3--
                                    }
                                    if (ca <= b4) {
                                        b4--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function(b9) {
                    return bG.inArray(b9, b5) > -1
                },
                empty: function() {
                    b5 = [];
                    return this
                },
                disable: function() {
                    b5 = b6 = b1 = aB;
                    return this
                },
                disabled: function() {
                    return !b5
                },
                lock: function() {
                    b6 = aB;
                    if (!b1) {
                        b7.disable()
                    }
                    return this
                },
                locked: function() {
                    return !b6
                },
                fireWith: function(ca, b9) {
                    b9 = b9 || [];
                    b9 = [ca, b9.slice ? b9.slice() : b9];
                    if (b5 && (!e || b6)) {
                        if (b2) {
                            b6.push(b9)
                        } else {
                            bZ(b9)
                        }
                    }
                    return this
                },
                fire: function() {
                    b7.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return b7
    };
    bG.extend({
        Deferred: function(b0) {
            var bZ = [
                    ["resolve", "done", bG.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", bG.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", bG.Callbacks("memory")]
                ],
                b1 = "pending",
                b2 = {
                    state: function() {
                        return b1
                    },
                    always: function() {
                        e.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var b3 = arguments;
                        return bG.Deferred(function(b4) {
                            bG.each(bZ, function(b6, b5) {
                                var b8 = b5[0],
                                    b7 = b3[b6];
                                e[b5[1]](bG.isFunction(b7) ? function() {
                                    var b9 = b7.apply(this, arguments);
                                    if (b9 && bG.isFunction(b9.promise)) {
                                        b9.promise().done(b4.resolve).fail(b4.reject).progress(b4.notify)
                                    } else {
                                        b4[b8 + "With"](this === e ? b4 : this, [b9])
                                    }
                                } : b4[b8])
                            });
                            b3 = null
                        }).promise()
                    },
                    promise: function(b3) {
                        return typeof b3 === "object" ? bG.extend(b3, b2) : b2
                    }
                },
                e = {};
            b2.pipe = b2.then;
            bG.each(bZ, function(b4, b3) {
                var b6 = b3[2],
                    b5 = b3[3];
                b2[b3[1]] = b6.add;
                if (b5) {
                    b6.add(function() {
                        b1 = b5
                    }, bZ[b4 ^ 1][2].disable, bZ[2][2].lock)
                }
                e[b3[0]] = b6.fire;
                e[b3[0] + "With"] = b6.fireWith
            });
            b2.promise(e);
            if (b0) {
                b0.call(e, e)
            }
            return e
        },
        when: function(b2) {
            var b0 = 0,
                b4 = a4.call(arguments),
                e = b4.length,
                bZ = e !== 1 || (b2 && bG.isFunction(b2.promise)) ? e : 0,
                b7 = bZ === 1 ? b2 : bG.Deferred(),
                b1 = function(b9, ca, b8) {
                    return function(cb) {
                        ca[b9] = this;
                        b8[b9] = arguments.length > 1 ? a4.call(arguments) : cb;
                        if (b8 === b6) {
                            b7.notifyWith(ca, b8)
                        } else {
                            if (!(--bZ)) {
                                b7.resolveWith(ca, b8)
                            }
                        }
                    }
                },
                b6, b3, b5;
            if (e > 1) {
                b6 = new Array(e);
                b3 = new Array(e);
                b5 = new Array(e);
                for (; b0 < e; b0++) {
                    if (b4[b0] && bG.isFunction(b4[b0].promise)) {
                        b4[b0].promise().done(b1(b0, b5, b4)).fail(b7.reject).progress(b1(b0, b3, b6))
                    } else {
                        --bZ
                    }
                }
            }
            if (!bZ) {
                b7.resolveWith(b5, b4)
            }
            return b7.promise()
        }
    });
    bG.support = (function() {
        var cb, ca, b8, b9, b2, b7, b6, b4, b3, b1, bZ, b0 = o.createElement("div");
        b0.setAttribute("className", "t");
        b0.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ca = b0.getElementsByTagName("*");
        b8 = b0.getElementsByTagName("a")[0];
        b8.style.cssText = "top:1px;float:left;opacity:.5";
        if (!ca || !ca.length || !b8) {
            return {}
        }
        b9 = o.createElement("select");
        b2 = b9.appendChild(o.createElement("option"));
        b7 = b0.getElementsByTagName("input")[0];
        cb = {
            leadingWhitespace: (b0.firstChild.nodeType === 3),
            tbody: !b0.getElementsByTagName("tbody").length,
            htmlSerialize: !!b0.getElementsByTagName("link").length,
            style: /top/.test(b8.getAttribute("style")),
            hrefNormalized: (b8.getAttribute("href") === "/a"),
            opacity: /^0.5/.test(b8.style.opacity),
            cssFloat: !!b8.style.cssFloat,
            checkOn: (b7.value === "on"),
            optSelected: b2.selected,
            getSetAttribute: b0.className !== "t",
            enctype: !!o.createElement("form").enctype,
            html5Clone: o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: (o.compatMode === "CSS1Compat"),
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        b7.checked = true;
        cb.noCloneChecked = b7.cloneNode(true).checked;
        b9.disabled = true;
        cb.optDisabled = !b2.disabled;
        try {
            delete b0.test
        } catch (b5) {
            cb.deleteExpando = false
        }
        if (!b0.addEventListener && b0.attachEvent && b0.fireEvent) {
            b0.attachEvent("onclick", bZ = function() {
                cb.noCloneEvent = false
            });
            b0.cloneNode(true).fireEvent("onclick");
            b0.detachEvent("onclick", bZ)
        }
        b7 = o.createElement("input");
        b7.value = "t";
        b7.setAttribute("type", "radio");
        cb.radioValue = b7.value === "t";
        b7.setAttribute("checked", "checked");
        b7.setAttribute("name", "t");
        b0.appendChild(b7);
        b6 = o.createDocumentFragment();
        b6.appendChild(b0.lastChild);
        cb.checkClone = b6.cloneNode(true).cloneNode(true).lastChild.checked;
        cb.appendChecked = b7.checked;
        b6.removeChild(b7);
        b6.appendChild(b0);
        if (b0.attachEvent) {
            for (b3 in {
                    submit: true,
                    change: true,
                    focusin: true
                }) {
                b4 = "on" + b3;
                b1 = (b4 in b0);
                if (!b1) {
                    b0.setAttribute(b4, "return;");
                    b1 = (typeof b0[b4] === "function")
                }
                cb[b3 + "Bubbles"] = b1
            }
        }
        bG(function() {
            var cc, cg, ce, cf, cd = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                e = o.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            cc = o.createElement("div");
            cc.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            e.insertBefore(cc, e.firstChild);
            cg = o.createElement("div");
            cc.appendChild(cg);
            cg.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            ce = cg.getElementsByTagName("td");
            ce[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            b1 = (ce[0].offsetHeight === 0);
            ce[0].style.display = "";
            ce[1].style.display = "none";
            cb.reliableHiddenOffsets = b1 && (ce[0].offsetHeight === 0);
            cg.innerHTML = "";
            cg.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            cb.boxSizing = (cg.offsetWidth === 4);
            cb.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== 1);
            if (a2.getComputedStyle) {
                cb.pixelPosition = (a2.getComputedStyle(cg, null) || {}).top !== "1%";
                cb.boxSizingReliable = (a2.getComputedStyle(cg, null) || {
                    width: "4px"
                }).width === "4px";
                cf = o.createElement("div");
                cf.style.cssText = cg.style.cssText = cd;
                cf.style.marginRight = cf.style.width = "0";
                cg.style.width = "1px";
                cg.appendChild(cf);
                cb.reliableMarginRight = !parseFloat((a2.getComputedStyle(cf, null) || {}).marginRight)
            }
            if (typeof cg.style.zoom !== "undefined") {
                cg.innerHTML = "";
                cg.style.cssText = cd + "width:1px;padding:1px;display:inline;zoom:1";
                cb.inlineBlockNeedsLayout = (cg.offsetWidth === 3);
                cg.style.display = "block";
                cg.style.overflow = "visible";
                cg.innerHTML = "<div></div>";
                cg.firstChild.style.width = "5px";
                cb.shrinkWrapBlocks = (cg.offsetWidth !== 3);
                cc.style.zoom = 1
            }
            e.removeChild(cc);
            cc = cg = ce = cf = null
        });
        b6.removeChild(b0);
        ca = b8 = b9 = b2 = b7 = b6 = b0 = null;
        return cb
    })();
    var bt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        aL = /([A-Z])/g;
    bG.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (bG.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? bG.cache[e[bG.expando]] : e[bG.expando];
            return !!e && !O(e)
        },
        data: function(b1, bZ, b3, b2) {
            if (!bG.acceptData(b1)) {
                return
            }
            var b4, b6, b7 = bG.expando,
                b5 = typeof bZ === "string",
                b8 = b1.nodeType,
                e = b8 ? bG.cache : b1,
                b0 = b8 ? b1[b7] : b1[b7] && b7;
            if ((!b0 || !e[b0] || (!b2 && !e[b0].data)) && b5 && b3 === aB) {
                return
            }
            if (!b0) {
                if (b8) {
                    b1[b7] = b0 = bG.deletedIds.pop() || ++bG.uuid
                } else {
                    b0 = b7
                }
            }
            if (!e[b0]) {
                e[b0] = {};
                if (!b8) {
                    e[b0].toJSON = bG.noop
                }
            }
            if (typeof bZ === "object" || typeof bZ === "function") {
                if (b2) {
                    e[b0] = bG.extend(e[b0], bZ)
                } else {
                    e[b0].data = bG.extend(e[b0].data, bZ)
                }
            }
            b4 = e[b0];
            if (!b2) {
                if (!b4.data) {
                    b4.data = {}
                }
                b4 = b4.data
            }
            if (b3 !== aB) {
                b4[bG.camelCase(bZ)] = b3
            }
            if (b5) {
                b6 = b4[bZ];
                if (b6 == null) {
                    b6 = b4[bG.camelCase(bZ)]
                }
            } else {
                b6 = b4
            }
            return b6
        },
        removeData: function(b1, bZ, b2) {
            if (!bG.acceptData(b1)) {
                return
            }
            var b5, b4, b3, b6 = b1.nodeType,
                e = b6 ? bG.cache : b1,
                b0 = b6 ? b1[bG.expando] : bG.expando;
            if (!e[b0]) {
                return
            }
            if (bZ) {
                b5 = b2 ? e[b0] : e[b0].data;
                if (b5) {
                    if (!bG.isArray(bZ)) {
                        if (bZ in b5) {
                            bZ = [bZ]
                        } else {
                            bZ = bG.camelCase(bZ);
                            if (bZ in b5) {
                                bZ = [bZ]
                            } else {
                                bZ = bZ.split(" ")
                            }
                        }
                    }
                    for (b4 = 0, b3 = bZ.length; b4 < b3; b4++) {
                        delete b5[bZ[b4]]
                    }
                    if (!(b2 ? O : bG.isEmptyObject)(b5)) {
                        return
                    }
                }
            }
            if (!b2) {
                delete e[b0].data;
                if (!O(e[b0])) {
                    return
                }
            }
            if (b6) {
                bG.cleanData([b1], true)
            } else {
                if (bG.support.deleteExpando || e != e.window) {
                    delete e[b0]
                } else {
                    e[b0] = null
                }
            }
        },
        _data: function(bZ, e, b0) {
            return bG.data(bZ, e, b0, true)
        },
        acceptData: function(bZ) {
            var e = bZ.nodeName && bG.noData[bZ.nodeName.toLowerCase()];
            return !e || e !== true && bZ.getAttribute("classid") === e
        }
    });
    bG.fn.extend({
        data: function(b7, b6) {
            var b2, bZ, b5, e, b1, b0 = this[0],
                b4 = 0,
                b3 = null;
            if (b7 === aB) {
                if (this.length) {
                    b3 = bG.data(b0);
                    if (b0.nodeType === 1 && !bG._data(b0, "parsedAttrs")) {
                        b5 = b0.attributes;
                        for (b1 = b5.length; b4 < b1; b4++) {
                            e = b5[b4].name;
                            if (e.indexOf("data-") === 0) {
                                e = bG.camelCase(e.substring(5));
                                bv(b0, e, b3[e])
                            }
                        }
                        bG._data(b0, "parsedAttrs", true)
                    }
                }
                return b3
            }
            if (typeof b7 === "object") {
                return this.each(function() {
                    bG.data(this, b7)
                })
            }
            b2 = b7.split(".", 2);
            b2[1] = b2[1] ? "." + b2[1] : "";
            bZ = b2[1] + "!";
            return bG.access(this, function(b8) {
                if (b8 === aB) {
                    b3 = this.triggerHandler("getData" + bZ, [b2[0]]);
                    if (b3 === aB && b0) {
                        b3 = bG.data(b0, b7);
                        b3 = bv(b0, b7, b3)
                    }
                    return b3 === aB && b2[1] ? this.data(b2[0]) : b3
                }
                b2[1] = b8;
                this.each(function() {
                    var b9 = bG(this);
                    b9.triggerHandler("setData" + bZ, b2);
                    bG.data(this, b7, b8);
                    b9.triggerHandler("changeData" + bZ, b2)
                })
            }, null, b6, arguments.length > 1, null, false)
        },
        removeData: function(e) {
            return this.each(function() {
                bG.removeData(this, e)
            })
        }
    });

    function bv(b1, b0, b2) {
        if (b2 === aB && b1.nodeType === 1) {
            var bZ = "data-" + b0.replace(aL, "-$1").toLowerCase();
            b2 = b1.getAttribute(bZ);
            if (typeof b2 === "string") {
                try {
                    b2 = b2 === "true" ? true : b2 === "false" ? false : b2 === "null" ? null : +b2 + "" === b2 ? +b2 : bt.test(b2) ? bG.parseJSON(b2) : b2
                } catch (b3) {}
                bG.data(b1, b0, b2)
            } else {
                b2 = aB
            }
        }
        return b2
    }

    function O(bZ) {
        var e;
        for (e in bZ) {
            if (e === "data" && bG.isEmptyObject(bZ[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    bG.extend({
        queue: function(b0, bZ, b1) {
            var e;
            if (b0) {
                bZ = (bZ || "fx") + "queue";
                e = bG._data(b0, bZ);
                if (b1) {
                    if (!e || bG.isArray(b1)) {
                        e = bG._data(b0, bZ, bG.makeArray(b1))
                    } else {
                        e.push(b1)
                    }
                }
                return e || []
            }
        },
        dequeue: function(b3, b2) {
            b2 = b2 || "fx";
            var bZ = bG.queue(b3, b2),
                b4 = bZ.length,
                b1 = bZ.shift(),
                e = bG._queueHooks(b3, b2),
                b0 = function() {
                    bG.dequeue(b3, b2)
                };
            if (b1 === "inprogress") {
                b1 = bZ.shift();
                b4--
            }
            if (b1) {
                if (b2 === "fx") {
                    bZ.unshift("inprogress")
                }
                delete e.stop;
                b1.call(b3, b0, e)
            }
            if (!b4 && e) {
                e.empty.fire()
            }
        },
        _queueHooks: function(b0, bZ) {
            var e = bZ + "queueHooks";
            return bG._data(b0, e) || bG._data(b0, e, {
                empty: bG.Callbacks("once memory").add(function() {
                    bG.removeData(b0, bZ + "queue", true);
                    bG.removeData(b0, e, true)
                })
            })
        }
    });
    bG.fn.extend({
        queue: function(e, bZ) {
            var b0 = 2;
            if (typeof e !== "string") {
                bZ = e;
                e = "fx";
                b0--
            }
            if (arguments.length < b0) {
                return bG.queue(this[0], e)
            }
            return bZ === aB ? this : this.each(function() {
                var b1 = bG.queue(this, e, bZ);
                bG._queueHooks(this, e);
                if (e === "fx" && b1[0] !== "inprogress") {
                    bG.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                bG.dequeue(this, e)
            })
        },
        delay: function(bZ, e) {
            bZ = bG.fx ? bG.fx.speeds[bZ] || bZ : bZ;
            e = e || "fx";
            return this.queue(e, function(b1, b0) {
                var b2 = setTimeout(b1, bZ);
                b0.stop = function() {
                    clearTimeout(b2)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(b0, b4) {
            var bZ, b1 = 1,
                b5 = bG.Deferred(),
                b3 = this,
                e = this.length,
                b2 = function() {
                    if (!(--b1)) {
                        b5.resolveWith(b3, [b3])
                    }
                };
            if (typeof b0 !== "string") {
                b4 = b0;
                b0 = aB
            }
            b0 = b0 || "fx";
            while (e--) {
                bZ = bG._data(b3[e], b0 + "queueHooks");
                if (bZ && bZ.empty) {
                    b1++;
                    bZ.empty.add(b2)
                }
            }
            b2();
            return b5.promise(b4)
        }
    });
    var a7, bV, n, bJ = /[\t\r\n]/g,
        ai = /\r/g,
        j = /^(?:button|input)$/i,
        aA = /^(?:button|input|object|select|textarea)$/i,
        D = /^a(?:rea|)$/i,
        M = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        bL = bG.support.getSetAttribute;
    bG.fn.extend({
        attr: function(e, bZ) {
            return bG.access(this, bG.attr, e, bZ, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                bG.removeAttr(this, e)
            })
        },
        prop: function(e, bZ) {
            return bG.access(this, bG.prop, e, bZ, arguments.length > 1)
        },
        removeProp: function(e) {
            e = bG.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = aB;
                    delete this[e]
                } catch (bZ) {}
            })
        },
        addClass: function(b2) {
            var b4, b0, bZ, b1, b3, b5, e;
            if (bG.isFunction(b2)) {
                return this.each(function(b6) {
                    bG(this).addClass(b2.call(this, b6, this.className))
                })
            }
            if (b2 && typeof b2 === "string") {
                b4 = b2.split(aV);
                for (b0 = 0, bZ = this.length; b0 < bZ; b0++) {
                    b1 = this[b0];
                    if (b1.nodeType === 1) {
                        if (!b1.className && b4.length === 1) {
                            b1.className = b2
                        } else {
                            b3 = " " + b1.className + " ";
                            for (b5 = 0, e = b4.length; b5 < e; b5++) {
                                if (!~b3.indexOf(" " + b4[b5] + " ")) {
                                    b3 += b4[b5] + " "
                                }
                            }
                            b1.className = bG.trim(b3)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(b4) {
            var b1, b2, b3, b5, bZ, b0, e;
            if (bG.isFunction(b4)) {
                return this.each(function(b6) {
                    bG(this).removeClass(b4.call(this, b6, this.className))
                })
            }
            if ((b4 && typeof b4 === "string") || b4 === aB) {
                b1 = (b4 || "").split(aV);
                for (b0 = 0, e = this.length; b0 < e; b0++) {
                    b3 = this[b0];
                    if (b3.nodeType === 1 && b3.className) {
                        b2 = (" " + b3.className + " ").replace(bJ, " ");
                        for (b5 = 0, bZ = b1.length; b5 < bZ; b5++) {
                            while (b2.indexOf(" " + b1[b5] + " ") > -1) {
                                b2 = b2.replace(" " + b1[b5] + " ", " ")
                            }
                        }
                        b3.className = b4 ? bG.trim(b2) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(b1, bZ) {
            var b0 = typeof b1,
                e = typeof bZ === "boolean";
            if (bG.isFunction(b1)) {
                return this.each(function(b2) {
                    bG(this).toggleClass(b1.call(this, b2, this.className, bZ), bZ)
                })
            }
            return this.each(function() {
                if (b0 === "string") {
                    var b4, b3 = 0,
                        b2 = bG(this),
                        b5 = bZ,
                        b6 = b1.split(aV);
                    while ((b4 = b6[b3++])) {
                        b5 = e ? b5 : !b2.hasClass(b4);
                        b2[b5 ? "addClass" : "removeClass"](b4)
                    }
                } else {
                    if (b0 === "undefined" || b0 === "boolean") {
                        if (this.className) {
                            bG._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b1 === false ? "" : bG._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(e) {
            var b1 = " " + e + " ",
                b0 = 0,
                bZ = this.length;
            for (; b0 < bZ; b0++) {
                if (this[b0].nodeType === 1 && (" " + this[b0].className + " ").replace(bJ, " ").indexOf(b1) > -1) {
                    return true
                }
            }
            return false
        },
        val: function(b1) {
            var e, bZ, b2, b0 = this[0];
            if (!arguments.length) {
                if (b0) {
                    e = bG.valHooks[b0.type] || bG.valHooks[b0.nodeName.toLowerCase()];
                    if (e && "get" in e && (bZ = e.get(b0, "value")) !== aB) {
                        return bZ
                    }
                    bZ = b0.value;
                    return typeof bZ === "string" ? bZ.replace(ai, "") : bZ == null ? "" : bZ
                }
                return
            }
            b2 = bG.isFunction(b1);
            return this.each(function(b4) {
                var b5, b3 = bG(this);
                if (this.nodeType !== 1) {
                    return
                }
                if (b2) {
                    b5 = b1.call(this, b4, b3.val())
                } else {
                    b5 = b1
                }
                if (b5 == null) {
                    b5 = ""
                } else {
                    if (typeof b5 === "number") {
                        b5 += ""
                    } else {
                        if (bG.isArray(b5)) {
                            b5 = bG.map(b5, function(b6) {
                                return b6 == null ? "" : b6 + ""
                            })
                        }
                    }
                }
                e = bG.valHooks[this.type] || bG.valHooks[this.nodeName.toLowerCase()];
                if (!e || !("set" in e) || e.set(this, b5, "value") === aB) {
                    this.value = b5
                }
            })
        }
    });
    bG.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var bZ = e.attributes.value;
                    return !bZ || bZ.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var b4, bZ, b3, b1, b2 = e.selectedIndex,
                        b5 = [],
                        b6 = e.options,
                        b0 = e.type === "select-one";
                    if (b2 < 0) {
                        return null
                    }
                    bZ = b0 ? b2 : 0;
                    b3 = b0 ? b2 + 1 : b6.length;
                    for (; bZ < b3; bZ++) {
                        b1 = b6[bZ];
                        if (b1.selected && (bG.support.optDisabled ? !b1.disabled : b1.getAttribute("disabled") === null) && (!b1.parentNode.disabled || !bG.nodeName(b1.parentNode, "optgroup"))) {
                            b4 = bG(b1).val();
                            if (b0) {
                                return b4
                            }
                            b5.push(b4)
                        }
                    }
                    if (b0 && !b5.length && b6.length) {
                        return bG(b6[b2]).val()
                    }
                    return b5
                },
                set: function(bZ, b0) {
                    var e = bG.makeArray(b0);
                    bG(bZ).find("option").each(function() {
                        this.selected = bG.inArray(bG(this).val(), e) >= 0
                    });
                    if (!e.length) {
                        bZ.selectedIndex = -1
                    }
                    return e
                }
            }
        },
        attrFn: {},
        attr: function(b4, b1, b5, b3) {
            var b0, e, b2, bZ = b4.nodeType;
            if (!b4 || bZ === 3 || bZ === 8 || bZ === 2) {
                return
            }
            if (b3 && bG.isFunction(bG.fn[b1])) {
                return bG(b4)[b1](b5)
            }
            if (typeof b4.getAttribute === "undefined") {
                return bG.prop(b4, b1, b5)
            }
            b2 = bZ !== 1 || !bG.isXMLDoc(b4);
            if (b2) {
                b1 = b1.toLowerCase();
                e = bG.attrHooks[b1] || (M.test(b1) ? bV : a7)
            }
            if (b5 !== aB) {
                if (b5 === null) {
                    bG.removeAttr(b4, b1);
                    return
                } else {
                    if (e && "set" in e && b2 && (b0 = e.set(b4, b5, b1)) !== aB) {
                        return b0
                    } else {
                        b4.setAttribute(b1, "" + b5);
                        return b5
                    }
                }
            } else {
                if (e && "get" in e && b2 && (b0 = e.get(b4, b1)) !== null) {
                    return b0
                } else {
                    b0 = b4.getAttribute(b1);
                    return b0 === null ? aB : b0
                }
            }
        },
        removeAttr: function(b1, b3) {
            var b2, b4, bZ, e, b0 = 0;
            if (b3 && b1.nodeType === 1) {
                b4 = b3.split(aV);
                for (; b0 < b4.length; b0++) {
                    bZ = b4[b0];
                    if (bZ) {
                        b2 = bG.propFix[bZ] || bZ;
                        e = M.test(bZ);
                        if (!e) {
                            bG.attr(b1, bZ, "")
                        }
                        b1.removeAttribute(bL ? bZ : b2);
                        if (e && b2 in b1) {
                            b1[b2] = false
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, bZ) {
                    if (j.test(e.nodeName) && e.parentNode) {
                        bG.error("type property can't be changed")
                    } else {
                        if (!bG.support.radioValue && bZ === "radio" && bG.nodeName(e, "input")) {
                            var b0 = e.value;
                            e.setAttribute("type", bZ);
                            if (b0) {
                                e.value = b0
                            }
                            return bZ
                        }
                    }
                }
            },
            value: {
                get: function(bZ, e) {
                    if (a7 && bG.nodeName(bZ, "button")) {
                        return a7.get(bZ, e)
                    }
                    return e in bZ ? bZ.value : null
                },
                set: function(bZ, b0, e) {
                    if (a7 && bG.nodeName(bZ, "button")) {
                        return a7.set(bZ, b0, e)
                    }
                    bZ.value = b0
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b3, b1, b4) {
            var b0, e, b2, bZ = b3.nodeType;
            if (!b3 || bZ === 3 || bZ === 8 || bZ === 2) {
                return
            }
            b2 = bZ !== 1 || !bG.isXMLDoc(b3);
            if (b2) {
                b1 = bG.propFix[b1] || b1;
                e = bG.propHooks[b1]
            }
            if (b4 !== aB) {
                if (e && "set" in e && (b0 = e.set(b3, b4, b1)) !== aB) {
                    return b0
                } else {
                    return (b3[b1] = b4)
                }
            } else {
                if (e && "get" in e && (b0 = e.get(b3, b1)) !== null) {
                    return b0
                } else {
                    return b3[b1]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(bZ) {
                    var e = bZ.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : aA.test(bZ.nodeName) || D.test(bZ.nodeName) && bZ.href ? 0 : aB
                }
            }
        }
    });
    bV = {
        get: function(bZ, e) {
            var b1, b0 = bG.prop(bZ, e);
            return b0 === true || typeof b0 !== "boolean" && (b1 = bZ.getAttributeNode(e)) && b1.nodeValue !== false ? e.toLowerCase() : aB
        },
        set: function(bZ, b1, e) {
            var b0;
            if (b1 === false) {
                bG.removeAttr(bZ, e)
            } else {
                b0 = bG.propFix[e] || e;
                if (b0 in bZ) {
                    bZ[b0] = true
                }
                bZ.setAttribute(e, e.toLowerCase())
            }
            return e
        }
    };
    if (!bL) {
        n = {
            name: true,
            id: true,
            coords: true
        };
        a7 = bG.valHooks.button = {
            get: function(b0, bZ) {
                var e;
                e = b0.getAttributeNode(bZ);
                return e && (n[bZ] ? e.value !== "" : e.specified) ? e.value : aB
            },
            set: function(b0, b1, bZ) {
                var e = b0.getAttributeNode(bZ);
                if (!e) {
                    e = o.createAttribute(bZ);
                    b0.setAttributeNode(e)
                }
                return (e.value = b1 + "")
            }
        };
        bG.each(["width", "height"], function(bZ, e) {
            bG.attrHooks[e] = bG.extend(bG.attrHooks[e], {
                set: function(b0, b1) {
                    if (b1 === "") {
                        b0.setAttribute(e, "auto");
                        return b1
                    }
                }
            })
        });
        bG.attrHooks.contenteditable = {
            get: a7.get,
            set: function(bZ, b0, e) {
                if (b0 === "") {
                    b0 = "false"
                }
                a7.set(bZ, b0, e)
            }
        }
    }
    if (!bG.support.hrefNormalized) {
        bG.each(["href", "src", "width", "height"], function(bZ, e) {
            bG.attrHooks[e] = bG.extend(bG.attrHooks[e], {
                get: function(b1) {
                    var b0 = b1.getAttribute(e, 2);
                    return b0 === null ? aB : b0
                }
            })
        })
    }
    if (!bG.support.style) {
        bG.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || aB
            },
            set: function(e, bZ) {
                return (e.style.cssText = "" + bZ)
            }
        }
    }
    if (!bG.support.optSelected) {
        bG.propHooks.selected = bG.extend(bG.propHooks.selected, {
            get: function(bZ) {
                var e = bZ.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!bG.support.enctype) {
        bG.propFix.enctype = "encoding"
    }
    if (!bG.support.checkOn) {
        bG.each(["radio", "checkbox"], function() {
            bG.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    bG.each(["radio", "checkbox"], function() {
        bG.valHooks[this] = bG.extend(bG.valHooks[this], {
            set: function(e, bZ) {
                if (bG.isArray(bZ)) {
                    return (e.checked = bG.inArray(bG(e).val(), bZ) >= 0)
                }
            }
        })
    });
    var bE = /^(?:textarea|input|select)$/i,
        br = /^([^\.]*|)(?:\.(.+)|)$/,
        ba = /(?:^|\s)hover(\.\S+|)\b/,
        a3 = /^key/,
        bK = /^(?:mouse|contextmenu)|click/,
        by = /^(?:focusinfocus|focusoutblur)$/,
        aq = function(e) {
            return bG.event.special.hover ? e : e.replace(ba, "mouseenter$1 mouseleave$1")
        };
    bG.event = {
        add: function(b1, b5, cc, b3, b2) {
            var b6, b4, cd, cb, ca, b8, e, b9, bZ, b0, b7;
            if (b1.nodeType === 3 || b1.nodeType === 8 || !b5 || !cc || !(b6 = bG._data(b1))) {
                return
            }
            if (cc.handler) {
                bZ = cc;
                cc = bZ.handler;
                b2 = bZ.selector
            }
            if (!cc.guid) {
                cc.guid = bG.guid++
            }
            cd = b6.events;
            if (!cd) {
                b6.events = cd = {}
            }
            b4 = b6.handle;
            if (!b4) {
                b6.handle = b4 = function(ce) {
                    return typeof bG !== "undefined" && (!ce || bG.event.triggered !== ce.type) ? bG.event.dispatch.apply(b4.elem, arguments) : aB
                };
                b4.elem = b1
            }
            b5 = bG.trim(aq(b5)).split(" ");
            for (cb = 0; cb < b5.length; cb++) {
                ca = br.exec(b5[cb]) || [];
                b8 = ca[1];
                e = (ca[2] || "").split(".").sort();
                b7 = bG.event.special[b8] || {};
                b8 = (b2 ? b7.delegateType : b7.bindType) || b8;
                b7 = bG.event.special[b8] || {};
                b9 = bG.extend({
                    type: b8,
                    origType: ca[1],
                    data: b3,
                    handler: cc,
                    guid: cc.guid,
                    selector: b2,
                    namespace: e.join(".")
                }, bZ);
                b0 = cd[b8];
                if (!b0) {
                    b0 = cd[b8] = [];
                    b0.delegateCount = 0;
                    if (!b7.setup || b7.setup.call(b1, b3, e, b4) === false) {
                        if (b1.addEventListener) {
                            b1.addEventListener(b8, b4, false)
                        } else {
                            if (b1.attachEvent) {
                                b1.attachEvent("on" + b8, b4)
                            }
                        }
                    }
                }
                if (b7.add) {
                    b7.add.call(b1, b9);
                    if (!b9.handler.guid) {
                        b9.handler.guid = cc.guid
                    }
                }
                if (b2) {
                    b0.splice(b0.delegateCount++, 0, b9)
                } else {
                    b0.push(b9)
                }
                bG.event.global[b8] = true
            }
            b1 = null
        },
        global: {},
        remove: function(b1, b6, cc, b2, b5) {
            var cd, ce, b9, b0, bZ, b3, b4, cb, b8, e, ca, b7 = bG.hasData(b1) && bG._data(b1);
            if (!b7 || !(cb = b7.events)) {
                return
            }
            b6 = bG.trim(aq(b6 || "")).split(" ");
            for (cd = 0; cd < b6.length; cd++) {
                ce = br.exec(b6[cd]) || [];
                b9 = b0 = ce[1];
                bZ = ce[2];
                if (!b9) {
                    for (b9 in cb) {
                        bG.event.remove(b1, b9 + b6[cd], cc, b2, true)
                    }
                    continue
                }
                b8 = bG.event.special[b9] || {};
                b9 = (b2 ? b8.delegateType : b8.bindType) || b9;
                e = cb[b9] || [];
                b3 = e.length;
                bZ = bZ ? new RegExp("(^|\\.)" + bZ.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (b4 = 0; b4 < e.length; b4++) {
                    ca = e[b4];
                    if ((b5 || b0 === ca.origType) && (!cc || cc.guid === ca.guid) && (!bZ || bZ.test(ca.namespace)) && (!b2 || b2 === ca.selector || b2 === "**" && ca.selector)) {
                        e.splice(b4--, 1);
                        if (ca.selector) {
                            e.delegateCount--
                        }
                        if (b8.remove) {
                            b8.remove.call(b1, ca)
                        }
                    }
                }
                if (e.length === 0 && b3 !== e.length) {
                    if (!b8.teardown || b8.teardown.call(b1, bZ, b7.handle) === false) {
                        bG.removeEvent(b1, b9, b7.handle)
                    }
                    delete cb[b9]
                }
            }
            if (bG.isEmptyObject(cb)) {
                delete b7.handle;
                bG.removeData(b1, "events", true)
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(bZ, b6, b4, cd) {
            if (b4 && (b4.nodeType === 3 || b4.nodeType === 8)) {
                return
            }
            var e, b1, b7, cb, b3, b2, b9, b8, b5, cc, ca = bZ.type || bZ,
                b0 = [];
            if (by.test(ca + bG.event.triggered)) {
                return
            }
            if (ca.indexOf("!") >= 0) {
                ca = ca.slice(0, -1);
                b1 = true
            }
            if (ca.indexOf(".") >= 0) {
                b0 = ca.split(".");
                ca = b0.shift();
                b0.sort()
            }
            if ((!b4 || bG.event.customEvent[ca]) && !bG.event.global[ca]) {
                return
            }
            bZ = typeof bZ === "object" ? bZ[bG.expando] ? bZ : new bG.Event(ca, bZ) : new bG.Event(ca);
            bZ.type = ca;
            bZ.isTrigger = true;
            bZ.exclusive = b1;
            bZ.namespace = b0.join(".");
            bZ.namespace_re = bZ.namespace ? new RegExp("(^|\\.)" + b0.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b2 = ca.indexOf(":") < 0 ? "on" + ca : "";
            if (!b4) {
                e = bG.cache;
                for (b7 in e) {
                    if (e[b7].events && e[b7].events[ca]) {
                        bG.event.trigger(bZ, b6, e[b7].handle.elem, true)
                    }
                }
                return
            }
            bZ.result = aB;
            if (!bZ.target) {
                bZ.target = b4
            }
            b6 = b6 != null ? bG.makeArray(b6) : [];
            b6.unshift(bZ);
            b9 = bG.event.special[ca] || {};
            if (b9.trigger && b9.trigger.apply(b4, b6) === false) {
                return
            }
            b5 = [
                [b4, b9.bindType || ca]
            ];
            if (!cd && !b9.noBubble && !bG.isWindow(b4)) {
                cc = b9.delegateType || ca;
                cb = by.test(cc + ca) ? b4 : b4.parentNode;
                for (b3 = b4; cb; cb = cb.parentNode) {
                    b5.push([cb, cc]);
                    b3 = cb
                }
                if (b3 === (b4.ownerDocument || o)) {
                    b5.push([b3.defaultView || b3.parentWindow || a2, cc])
                }
            }
            for (b7 = 0; b7 < b5.length && !bZ.isPropagationStopped(); b7++) {
                cb = b5[b7][0];
                bZ.type = b5[b7][1];
                b8 = (bG._data(cb, "events") || {})[bZ.type] && bG._data(cb, "handle");
                if (b8) {
                    b8.apply(cb, b6)
                }
                b8 = b2 && cb[b2];
                if (b8 && bG.acceptData(cb) && b8.apply(cb, b6) === false) {
                    bZ.preventDefault()
                }
            }
            bZ.type = ca;
            if (!cd && !bZ.isDefaultPrevented()) {
                if ((!b9._default || b9._default.apply(b4.ownerDocument, b6) === false) && !(ca === "click" && bG.nodeName(b4, "a")) && bG.acceptData(b4)) {
                    if (b2 && b4[ca] && ((ca !== "focus" && ca !== "blur") || bZ.target.offsetWidth !== 0) && !bG.isWindow(b4)) {
                        b3 = b4[b2];
                        if (b3) {
                            b4[b2] = null
                        }
                        bG.event.triggered = ca;
                        b4[ca]();
                        bG.event.triggered = aB;
                        if (b3) {
                            b4[b2] = b3
                        }
                    }
                }
            }
            return bZ.result
        },
        dispatch: function(e) {
            e = bG.event.fix(e || a2.event);
            var b5, b4, ce, b8, b7, bZ, b6, cc, b1, cd, b2 = ((bG._data(this, "events") || {})[e.type] || []),
                b3 = b2.delegateCount,
                ca = [].slice.call(arguments),
                b0 = !e.exclusive && !e.namespace,
                b9 = bG.event.special[e.type] || {},
                cb = [];
            ca[0] = e;
            e.delegateTarget = this;
            if (b9.preDispatch && b9.preDispatch.call(this, e) === false) {
                return
            }
            if (b3 && !(e.button && e.type === "click")) {
                for (ce = e.target; ce != this; ce = ce.parentNode || this) {
                    if (ce.disabled !== true || e.type !== "click") {
                        b7 = {};
                        b6 = [];
                        for (b5 = 0; b5 < b3; b5++) {
                            cc = b2[b5];
                            b1 = cc.selector;
                            if (b7[b1] === aB) {
                                b7[b1] = bG(b1, this).index(ce) >= 0
                            }
                            if (b7[b1]) {
                                b6.push(cc)
                            }
                        }
                        if (b6.length) {
                            cb.push({
                                elem: ce,
                                matches: b6
                            })
                        }
                    }
                }
            }
            if (b2.length > b3) {
                cb.push({
                    elem: this,
                    matches: b2.slice(b3)
                })
            }
            for (b5 = 0; b5 < cb.length && !e.isPropagationStopped(); b5++) {
                bZ = cb[b5];
                e.currentTarget = bZ.elem;
                for (b4 = 0; b4 < bZ.matches.length && !e.isImmediatePropagationStopped(); b4++) {
                    cc = bZ.matches[b4];
                    if (b0 || (!e.namespace && !cc.namespace) || e.namespace_re && e.namespace_re.test(cc.namespace)) {
                        e.data = cc.data;
                        e.handleObj = cc;
                        b8 = ((bG.event.special[cc.origType] || {}).handle || cc.handler).apply(bZ.elem, ca);
                        if (b8 !== aB) {
                            e.result = b8;
                            if (b8 === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (b9.postDispatch) {
                b9.postDispatch.call(this, e)
            }
            return e.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(bZ, e) {
                if (bZ.which == null) {
                    bZ.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return bZ
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b1, b0) {
                var b2, b3, e, bZ = b0.button,
                    b4 = b0.fromElement;
                if (b1.pageX == null && b0.clientX != null) {
                    b2 = b1.target.ownerDocument || o;
                    b3 = b2.documentElement;
                    e = b2.body;
                    b1.pageX = b0.clientX + (b3 && b3.scrollLeft || e && e.scrollLeft || 0) - (b3 && b3.clientLeft || e && e.clientLeft || 0);
                    b1.pageY = b0.clientY + (b3 && b3.scrollTop || e && e.scrollTop || 0) - (b3 && b3.clientTop || e && e.clientTop || 0)
                }
                if (!b1.relatedTarget && b4) {
                    b1.relatedTarget = b4 === b1.target ? b0.toElement : b4
                }
                if (!b1.which && bZ !== aB) {
                    b1.which = (bZ & 1 ? 1 : (bZ & 2 ? 3 : (bZ & 4 ? 2 : 0)))
                }
                return b1
            }
        },
        fix: function(b0) {
            if (b0[bG.expando]) {
                return b0
            }
            var bZ, b3, e = b0,
                b1 = bG.event.fixHooks[b0.type] || {},
                b2 = b1.props ? this.props.concat(b1.props) : this.props;
            b0 = bG.Event(e);
            for (bZ = b2.length; bZ;) {
                b3 = b2[--bZ];
                b0[b3] = e[b3]
            }
            if (!b0.target) {
                b0.target = e.srcElement || o
            }
            if (b0.target.nodeType === 3) {
                b0.target = b0.target.parentNode
            }
            b0.metaKey = !!b0.metaKey;
            return b1.filter ? b1.filter(b0, e) : b0
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b0, bZ, e) {
                    if (bG.isWindow(this)) {
                        this.onbeforeunload = e
                    }
                },
                teardown: function(bZ, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        },
        simulate: function(b0, b2, b1, bZ) {
            var b3 = bG.extend(new bG.Event(), b1, {
                type: b0,
                isSimulated: true,
                originalEvent: {}
            });
            if (bZ) {
                bG.event.trigger(b3, null, b2)
            } else {
                bG.event.dispatch.call(b2, b3)
            }
            if (b3.isDefaultPrevented()) {
                b1.preventDefault()
            }
        }
    };
    bG.event.handle = bG.event.dispatch;
    bG.removeEvent = o.removeEventListener ? function(bZ, e, b0) {
        if (bZ.removeEventListener) {
            bZ.removeEventListener(e, b0, false)
        }
    } : function(b0, bZ, b1) {
        var e = "on" + bZ;
        if (b0.detachEvent) {
            if (typeof b0[e] === "undefined") {
                b0[e] = null
            }
            b0.detachEvent(e, b1)
        }
    };
    bG.Event = function(bZ, e) {
        if (!(this instanceof bG.Event)) {
            return new bG.Event(bZ, e)
        }
        if (bZ && bZ.type) {
            this.originalEvent = bZ;
            this.type = bZ.type;
            this.isDefaultPrevented = (bZ.defaultPrevented || bZ.returnValue === false || bZ.getPreventDefault && bZ.getPreventDefault()) ? R : X
        } else {
            this.type = bZ
        }
        if (e) {
            bG.extend(this, e)
        }
        this.timeStamp = bZ && bZ.timeStamp || bG.now();
        this[bG.expando] = true
    };

    function X() {
        return false
    }

    function R() {
        return true
    }
    bG.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = R;
            var bZ = this.originalEvent;
            if (!bZ) {
                return
            }
            if (bZ.preventDefault) {
                bZ.preventDefault()
            } else {
                bZ.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = R;
            var bZ = this.originalEvent;
            if (!bZ) {
                return
            }
            if (bZ.stopPropagation) {
                bZ.stopPropagation()
            }
            bZ.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = R;
            this.stopPropagation()
        },
        isDefaultPrevented: X,
        isPropagationStopped: X,
        isImmediatePropagationStopped: X
    };
    bG.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(bZ, e) {
        bG.event.special[bZ] = {
            delegateType: e,
            bindType: e,
            handle: function(b3) {
                var b1, b5 = this,
                    b4 = b3.relatedTarget,
                    b2 = b3.handleObj,
                    b0 = b2.selector;
                if (!b4 || (b4 !== b5 && !bG.contains(b5, b4))) {
                    b3.type = b2.origType;
                    b1 = b2.handler.apply(this, arguments);
                    b3.type = e
                }
                return b1
            }
        }
    });
    if (!bG.support.submitBubbles) {
        bG.event.special.submit = {
            setup: function() {
                if (bG.nodeName(this, "form")) {
                    return false
                }
                bG.event.add(this, "click._submit keypress._submit", function(b1) {
                    var b0 = b1.target,
                        bZ = bG.nodeName(b0, "input") || bG.nodeName(b0, "button") ? b0.form : aB;
                    if (bZ && !bG._data(bZ, "_submit_attached")) {
                        bG.event.add(bZ, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        bG._data(bZ, "_submit_attached", true)
                    }
                })
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        bG.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },
            teardown: function() {
                if (bG.nodeName(this, "form")) {
                    return false
                }
                bG.event.remove(this, "._submit")
            }
        }
    }
    if (!bG.support.changeBubbles) {
        bG.event.special.change = {
            setup: function() {
                if (bE.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bG.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        bG.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            bG.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                bG.event.add(this, "beforeactivate._change", function(b0) {
                    var bZ = b0.target;
                    if (bE.test(bZ.nodeName) && !bG._data(bZ, "_change_attached")) {
                        bG.event.add(bZ, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                bG.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bG._data(bZ, "_change_attached", true)
                    }
                })
            },
            handle: function(bZ) {
                var e = bZ.target;
                if (this !== e || bZ.isSimulated || bZ.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return bZ.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                bG.event.remove(this, "._change");
                return !bE.test(this.nodeName)
            }
        }
    }
    if (!bG.support.focusinBubbles) {
        bG.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b1, e) {
            var bZ = 0,
                b0 = function(b2) {
                    bG.event.simulate(e, b2.target, bG.event.fix(b2), true)
                };
            bG.event.special[e] = {
                setup: function() {
                    if (bZ++ === 0) {
                        o.addEventListener(b1, b0, true)
                    }
                },
                teardown: function() {
                    if (--bZ === 0) {
                        o.removeEventListener(b1, b0, true)
                    }
                }
            }
        })
    }
    bG.fn.extend({
        on: function(b0, e, b3, b2, bZ) {
            var b4, b1;
            if (typeof b0 === "object") {
                if (typeof e !== "string") {
                    b3 = b3 || e;
                    e = aB
                }
                for (b1 in b0) {
                    this.on(b1, e, b3, b0[b1], bZ)
                }
                return this
            }
            if (b3 == null && b2 == null) {
                b2 = e;
                b3 = e = aB
            } else {
                if (b2 == null) {
                    if (typeof e === "string") {
                        b2 = b3;
                        b3 = aB
                    } else {
                        b2 = b3;
                        b3 = e;
                        e = aB
                    }
                }
            }
            if (b2 === false) {
                b2 = X
            } else {
                if (!b2) {
                    return this
                }
            }
            if (bZ === 1) {
                b4 = b2;
                b2 = function(b5) {
                    bG().off(b5);
                    return b4.apply(this, arguments)
                };
                b2.guid = b4.guid || (b4.guid = bG.guid++)
            }
            return this.each(function() {
                bG.event.add(this, b0, b2, b3, e)
            })
        },
        one: function(bZ, e, b1, b0) {
            return this.on(bZ, e, b1, b0, 1)
        },
        off: function(b0, e, b2) {
            var bZ, b1;
            if (b0 && b0.preventDefault && b0.handleObj) {
                bZ = b0.handleObj;
                bG(b0.delegateTarget).off(bZ.namespace ? bZ.origType + "." + bZ.namespace : bZ.origType, bZ.selector, bZ.handler);
                return this
            }
            if (typeof b0 === "object") {
                for (b1 in b0) {
                    this.off(b1, e, b0[b1])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                b2 = e;
                e = aB
            }
            if (b2 === false) {
                b2 = X
            }
            return this.each(function() {
                bG.event.remove(this, b0, b2, e)
            })
        },
        bind: function(e, b0, bZ) {
            return this.on(e, null, b0, bZ)
        },
        unbind: function(e, bZ) {
            return this.off(e, null, bZ)
        },
        live: function(e, b0, bZ) {
            bG(this.context).on(e, this.selector, b0, bZ);
            return this
        },
        die: function(e, bZ) {
            bG(this.context).off(e, this.selector || "**", bZ);
            return this
        },
        delegate: function(e, bZ, b1, b0) {
            return this.on(bZ, e, b1, b0)
        },
        undelegate: function(e, bZ, b0) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(bZ, e || "**", b0)
        },
        trigger: function(e, bZ) {
            return this.each(function() {
                bG.event.trigger(e, bZ, this)
            })
        },
        triggerHandler: function(e, bZ) {
            if (this[0]) {
                return bG.event.trigger(e, bZ, this[0], true)
            }
        },
        toggle: function(b1) {
            var bZ = arguments,
                e = b1.guid || bG.guid++,
                b0 = 0,
                b2 = function(b3) {
                    var b4 = (bG._data(this, "lastToggle" + b1.guid) || 0) % b0;
                    bG._data(this, "lastToggle" + b1.guid, b4 + 1);
                    b3.preventDefault();
                    return bZ[b4].apply(this, arguments) || false
                };
            b2.guid = e;
            while (b0 < bZ.length) {
                bZ[b0++].guid = e
            }
            return this.click(b2)
        },
        hover: function(e, bZ) {
            return this.mouseenter(e).mouseleave(bZ || e)
        }
    });
    bG.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(bZ, e) {
        bG.fn[e] = function(b1, b0) {
            if (b0 == null) {
                b0 = b1;
                b1 = null
            }
            return arguments.length > 0 ? this.on(e, null, b1, b0) : this.trigger(e)
        };
        if (a3.test(e)) {
            bG.event.fixHooks[e] = bG.event.keyHooks
        }
        if (bK.test(e)) {
            bG.event.fixHooks[e] = bG.event.mouseHooks
        }
    });
    /*
     * Sizzle CSS Selector Engine
     *  Copyright 2012 jQuery Foundation and other contributors
     *  Released under the MIT license
     *  http://sizzlejs.com/
     */
    (function(cM, cf) {
        var cn, cR, b9, cE, b0, cj, cv, cc, ce, cb, b8 = true,
            cr = "undefined",
            cU = ("sizcache" + Math.random()).replace(".", ""),
            b7 = cM.document,
            ca = b7.documentElement,
            cd = 0,
            ci = [].slice,
            cQ = [].push,
            cW = function(e, c1) {
                e[cU] = c1 || true;
                return e
            },
            cZ = function() {
                var e = {},
                    c1 = [];
                return cW(function(c2, c3) {
                    if (c1.push(c2) > cE.cacheLength) {
                        delete e[c1.shift()]
                    }
                    return (e[c2] = c3)
                }, e)
            },
            cO = cZ(),
            cP = cZ(),
            ck = cZ(),
            cu = "[\\x20\\t\\r\\n\\f]",
            ch = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            cg = ch.replace("w", "w#"),
            cY = "([*^$|!~]?=)",
            cJ = "\\[" + cu + "*(" + ch + ")" + cu + "*(?:" + cY + cu + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cg + ")|)|)" + cu + "*\\]",
            c0 = ":(" + ch + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + cJ + ")|[^:]|\\\\.)*|.*))\\)|)",
            cw = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
            cS = new RegExp("^" + cu + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cu + "+$", "g"),
            b4 = new RegExp("^" + cu + "*," + cu + "*"),
            cB = new RegExp("^" + cu + "*([\\x20\\t\\r\\n\\f>+~])" + cu + "*"),
            cG = new RegExp(c0),
            cI = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            cz = /^:not/,
            cL = /[\x20\t\r\n\f]*[+~]/,
            cV = /:not\($/,
            co = /h\d/i,
            cH = /input|select|textarea|button/i,
            cp = /\\(?!\\)/g,
            cA = {
                ID: new RegExp("^#(" + ch + ")"),
                CLASS: new RegExp("^\\.(" + ch + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + ch + ")['\"]?\\]"),
                TAG: new RegExp("^(" + ch.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + cJ),
                PSEUDO: new RegExp("^" + c0),
                CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + cu + "*(even|odd|(([+-]|)(\\d*)n|)" + cu + "*(?:([+-]|)" + cu + "*(\\d+)|))" + cu + "*\\)|)", "i"),
                POS: new RegExp(cw, "ig"),
                needsContext: new RegExp("^" + cu + "*[>+~]|" + cw, "i")
            },
            cD = function(c1) {
                var c3 = b7.createElement("div");
                try {
                    return c1(c3)
                } catch (c2) {
                    return false
                } finally {
                    c3 = null
                }
            },
            b6 = cD(function(e) {
                e.appendChild(b7.createComment(""));
                return !e.getElementsByTagName("*").length
            }),
            cy = cD(function(e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild && typeof e.firstChild.getAttribute !== cr && e.firstChild.getAttribute("href") === "#"
            }),
            cm = cD(function(c1) {
                c1.innerHTML = "<select></select>";
                var e = typeof c1.lastChild.getAttribute("multiple");
                return e !== "boolean" && e !== "string"
            }),
            cx = cD(function(e) {
                e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) {
                    return false
                }
                e.lastChild.className = "e";
                return e.getElementsByClassName("e").length === 2
            }),
            bZ = cD(function(c1) {
                c1.id = cU + 0;
                c1.innerHTML = "<a name='" + cU + "'></a><div name='" + cU + "'></div>";
                ca.insertBefore(c1, ca.firstChild);
                var e = b7.getElementsByName && b7.getElementsByName(cU).length === 2 + b7.getElementsByName(cU + 0).length;
                b9 = !b7.getElementById(cU);
                ca.removeChild(c1);
                return e
            });
        try {
            ci.call(ca.childNodes, 0)[0].nodeType
        } catch (cX) {
            ci = function(c1) {
                var c2, e = [];
                for (;
                    (c2 = this[c1]); c1++) {
                    e.push(c2)
                }
                return e
            }
        }

        function cK(c3, e, c5, c8) {
            c5 = c5 || [];
            e = e || b7;
            var c6, c1, c7, c2, c4 = e.nodeType;
            if (c4 !== 1 && c4 !== 9) {
                return []
            }
            if (!c3 || typeof c3 !== "string") {
                return c5
            }
            c7 = cj(e);
            if (!c7 && !c8) {
                if ((c6 = cI.exec(c3))) {
                    if ((c2 = c6[1])) {
                        if (c4 === 9) {
                            c1 = e.getElementById(c2);
                            if (c1 && c1.parentNode) {
                                if (c1.id === c2) {
                                    c5.push(c1);
                                    return c5
                                }
                            } else {
                                return c5
                            }
                        } else {
                            if (e.ownerDocument && (c1 = e.ownerDocument.getElementById(c2)) && cv(e, c1) && c1.id === c2) {
                                c5.push(c1);
                                return c5
                            }
                        }
                    } else {
                        if (c6[2]) {
                            cQ.apply(c5, ci.call(e.getElementsByTagName(c3), 0));
                            return c5
                        } else {
                            if ((c2 = c6[3]) && cx && e.getElementsByClassName) {
                                cQ.apply(c5, ci.call(e.getElementsByClassName(c2), 0));
                                return c5
                            }
                        }
                    }
                }
            }
            return cT(c3, e, c5, c8, c7)
        }
        cK.matches = function(c1, e) {
            return cK(c1, null, null, e)
        };
        cK.matchesSelector = function(e, c1) {
            return cK(c1, null, null, [e]).length > 0
        };

        function cC(e) {
            return function(c2) {
                var c1 = c2.nodeName.toLowerCase();
                return c1 === "input" && c2.type === e
            }
        }

        function b3(e) {
            return function(c2) {
                var c1 = c2.nodeName.toLowerCase();
                return (c1 === "input" || c1 === "button") && c2.type === e
            }
        }
        b0 = cK.getText = function(c4) {
            var c3, c1 = "",
                c2 = 0,
                e = c4.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof c4.textContent === "string") {
                        return c4.textContent
                    } else {
                        for (c4 = c4.firstChild; c4; c4 = c4.nextSibling) {
                            c1 += b0(c4)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return c4.nodeValue
                    }
                }
            } else {
                for (;
                    (c3 = c4[c2]); c2++) {
                    c1 += b0(c3)
                }
            }
            return c1
        };
        cj = cK.isXML = function cj(e) {
            var c1 = e && (e.ownerDocument || e).documentElement;
            return c1 ? c1.nodeName !== "HTML" : false
        };
        cv = cK.contains = ca.contains ? function(c1, e) {
            var c3 = c1.nodeType === 9 ? c1.documentElement : c1,
                c2 = e && e.parentNode;
            return c1 === c2 || !!(c2 && c2.nodeType === 1 && c3.contains && c3.contains(c2))
        } : ca.compareDocumentPosition ? function(c1, e) {
            return e && !!(c1.compareDocumentPosition(e) & 16)
        } : function(c1, e) {
            while ((e = e.parentNode)) {
                if (e === c1) {
                    return true
                }
            }
            return false
        };
        cK.attr = function(c3, c2) {
            var e, c1 = cj(c3);
            if (!c1) {
                c2 = c2.toLowerCase()
            }
            if (cE.attrHandle[c2]) {
                return cE.attrHandle[c2](c3)
            }
            if (cm || c1) {
                return c3.getAttribute(c2)
            }
            e = c3.getAttributeNode(c2);
            return e ? typeof c3[c2] === "boolean" ? c3[c2] ? c2 : null : e.specified ? e.value : null : null
        };
        cE = cK.selectors = {
            cacheLength: 50,
            createPseudo: cW,
            match: cA,
            order: new RegExp("ID|TAG" + (bZ ? "|NAME" : "") + (cx ? "|CLASS" : "")),
            attrHandle: cy ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: b9 ? function(c3, c2, c1) {
                    if (typeof c2.getElementById !== cr && !c1) {
                        var e = c2.getElementById(c3);
                        return e && e.parentNode ? [e] : []
                    }
                } : function(c3, c2, c1) {
                    if (typeof c2.getElementById !== cr && !c1) {
                        var e = c2.getElementById(c3);
                        return e ? e.id === c3 || typeof e.getAttributeNode !== cr && e.getAttributeNode("id").value === c3 ? [e] : cf : []
                    }
                },
                TAG: b6 ? function(e, c1) {
                    if (typeof c1.getElementsByTagName !== cr) {
                        return c1.getElementsByTagName(e)
                    }
                } : function(e, c4) {
                    var c3 = c4.getElementsByTagName(e);
                    if (e === "*") {
                        var c5, c2 = [],
                            c1 = 0;
                        for (;
                            (c5 = c3[c1]); c1++) {
                            if (c5.nodeType === 1) {
                                c2.push(c5)
                            }
                        }
                        return c2
                    }
                    return c3
                },
                NAME: function(e, c1) {
                    if (typeof c1.getElementsByName !== cr) {
                        return c1.getElementsByName(name)
                    }
                },
                CLASS: function(c2, c1, e) {
                    if (typeof c1.getElementsByClassName !== cr && !e) {
                        return c1.getElementsByClassName(c2)
                    }
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(cp, "");
                    e[3] = (e[4] || e[5] || "").replace(cp, "");
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            cK.error(e[0])
                        }
                        e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd"));
                        e[4] = +((e[6] + e[7]) || e[2] === "odd")
                    } else {
                        if (e[2]) {
                            cK.error(e[0])
                        }
                    }
                    return e
                },
                PSEUDO: function(c2, c3, c1) {
                    var c4, e;
                    if (cA.CHILD.test(c2[0])) {
                        return null
                    }
                    if (c2[3]) {
                        c2[2] = c2[3]
                    } else {
                        if ((c4 = c2[4])) {
                            if (cG.test(c4) && (e = b1(c4, c3, c1, true)) && (e = c4.indexOf(")", c4.length - e) - c4.length)) {
                                c4 = c4.slice(0, e);
                                c2[0] = c2[0].slice(0, e)
                            }
                            c2[2] = c4
                        }
                    }
                    return c2.slice(0, 3)
                }
            },
            filter: {
                ID: b9 ? function(e) {
                    e = e.replace(cp, "");
                    return function(c1) {
                        return c1.getAttribute("id") === e
                    }
                } : function(e) {
                    e = e.replace(cp, "");
                    return function(c2) {
                        var c1 = typeof c2.getAttributeNode !== cr && c2.getAttributeNode("id");
                        return c1 && c1.value === e
                    }
                },
                TAG: function(e) {
                    if (e === "*") {
                        return function() {
                            return true
                        }
                    }
                    e = e.replace(cp, "").toLowerCase();
                    return function(c1) {
                        return c1.nodeName && c1.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(e) {
                    var c1 = cO[cU][e];
                    if (!c1) {
                        c1 = cO(e, new RegExp("(^|" + cu + ")" + e + "(" + cu + "|$)"))
                    }
                    return function(c2) {
                        return c1.test(c2.className || (typeof c2.getAttribute !== cr && c2.getAttribute("class")) || "")
                    }
                },
                ATTR: function(c2, c1, e) {
                    if (!c1) {
                        return function(c3) {
                            return cK.attr(c3, c2) != null
                        }
                    }
                    return function(c4) {
                        var c3 = cK.attr(c4, c2),
                            c5 = c3 + "";
                        if (c3 == null) {
                            return c1 === "!="
                        }
                        switch (c1) {
                            case "=":
                                return c5 === e;
                            case "!=":
                                return c5 !== e;
                            case "^=":
                                return e && c5.indexOf(e) === 0;
                            case "*=":
                                return e && c5.indexOf(e) > -1;
                            case "$=":
                                return e && c5.substr(c5.length - e.length) === e;
                            case "~=":
                                return (" " + c5 + " ").indexOf(e) > -1;
                            case "|=":
                                return c5 === e || c5.substr(0, e.length + 1) === e + "-"
                        }
                    }
                },
                CHILD: function(c1, c3, c4, c2) {
                    if (c1 === "nth") {
                        var e = cd++;
                        return function(c8) {
                            var c5, c9, c7 = 0,
                                c6 = c8;
                            if (c4 === 1 && c2 === 0) {
                                return true
                            }
                            c5 = c8.parentNode;
                            if (c5 && (c5[cU] !== e || !c8.sizset)) {
                                for (c6 = c5.firstChild; c6; c6 = c6.nextSibling) {
                                    if (c6.nodeType === 1) {
                                        c6.sizset = ++c7;
                                        if (c6 === c8) {
                                            break
                                        }
                                    }
                                }
                                c5[cU] = e
                            }
                            c9 = c8.sizset - c2;
                            if (c4 === 0) {
                                return c9 === 0
                            } else {
                                return (c9 % c4 === 0 && c9 / c4 >= 0)
                            }
                        }
                    }
                    return function(c6) {
                        var c5 = c6;
                        switch (c1) {
                            case "only":
                            case "first":
                                while ((c5 = c5.previousSibling)) {
                                    if (c5.nodeType === 1) {
                                        return false
                                    }
                                }
                                if (c1 === "first") {
                                    return true
                                }
                                c5 = c6;
                            case "last":
                                while ((c5 = c5.nextSibling)) {
                                    if (c5.nodeType === 1) {
                                        return false
                                    }
                                }
                                return true
                        }
                    }
                },
                PSEUDO: function(c5, c4, c2, c1) {
                    var e, c3 = cE.pseudos[c5] || cE.pseudos[c5.toLowerCase()];
                    if (!c3) {
                        cK.error("unsupported pseudo: " + c5)
                    }
                    if (!c3[cU]) {
                        if (c3.length > 1) {
                            e = [c5, c5, "", c4];
                            return function(c6) {
                                return c3(c6, 0, e)
                            }
                        }
                        return c3
                    }
                    return c3(c4, c2, c1)
                }
            },
            pseudos: {
                not: cW(function(e, c2, c1) {
                    var c3 = cc(e.replace(cS, "$1"), c2, c1);
                    return function(c4) {
                        return !c3(c4)
                    }
                }),
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var c1 = e.nodeName.toLowerCase();
                    return (c1 === "input" && !!e.checked) || (c1 === "option" && !!e.selected)
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function(e) {
                    return !cE.pseudos.empty(e)
                },
                empty: function(c1) {
                    var e;
                    c1 = c1.firstChild;
                    while (c1) {
                        if (c1.nodeName > "@" || (e = c1.nodeType) === 3 || e === 4) {
                            return false
                        }
                        c1 = c1.nextSibling
                    }
                    return true
                },
                contains: cW(function(e) {
                    return function(c1) {
                        return (c1.textContent || c1.innerText || b0(c1)).indexOf(e) > -1
                    }
                }),
                has: cW(function(e) {
                    return function(c1) {
                        return cK(e, c1).length > 0
                    }
                }),
                header: function(e) {
                    return co.test(e.nodeName)
                },
                text: function(c2) {
                    var c1, e;
                    return c2.nodeName.toLowerCase() === "input" && (c1 = c2.type) === "text" && ((e = c2.getAttribute("type")) == null || e.toLowerCase() === c1)
                },
                radio: cC("radio"),
                checkbox: cC("checkbox"),
                file: cC("file"),
                password: cC("password"),
                image: cC("image"),
                submit: b3("submit"),
                reset: b3("reset"),
                button: function(c1) {
                    var e = c1.nodeName.toLowerCase();
                    return e === "input" && c1.type === "button" || e === "button"
                },
                input: function(e) {
                    return cH.test(e.nodeName)
                },
                focus: function(e) {
                    var c1 = e.ownerDocument;
                    return e === c1.activeElement && (!c1.hasFocus || c1.hasFocus()) && !!(e.type || e.href)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(c2, c1, e) {
                    return e ? c2.slice(1) : [c2[0]]
                },
                last: function(c3, c2, c1) {
                    var e = c3.pop();
                    return c1 ? c3 : [e]
                },
                even: function(c5, c4, c3) {
                    var c2 = [],
                        c1 = c3 ? 1 : 0,
                        e = c5.length;
                    for (; c1 < e; c1 = c1 + 2) {
                        c2.push(c5[c1])
                    }
                    return c2
                },
                odd: function(c5, c4, c3) {
                    var c2 = [],
                        c1 = c3 ? 0 : 1,
                        e = c5.length;
                    for (; c1 < e; c1 = c1 + 2) {
                        c2.push(c5[c1])
                    }
                    return c2
                },
                lt: function(c2, c1, e) {
                    return e ? c2.slice(+c1) : c2.slice(0, +c1)
                },
                gt: function(c2, c1, e) {
                    return e ? c2.slice(0, +c1 + 1) : c2.slice(+c1 + 1)
                },
                eq: function(c3, c2, c1) {
                    var e = c3.splice(+c2, 1);
                    return c1 ? c3 : e
                }
            }
        };

        function b2(c1, e, c2) {
            if (c1 === e) {
                return c2
            }
            var c3 = c1.nextSibling;
            while (c3) {
                if (c3 === e) {
                    return -1
                }
                c3 = c3.nextSibling
            }
            return 1
        }
        ce = ca.compareDocumentPosition ? function(c1, e) {
            if (c1 === e) {
                cb = true;
                return 0
            }
            return (!c1.compareDocumentPosition || !e.compareDocumentPosition ? c1.compareDocumentPosition : c1.compareDocumentPosition(e) & 4) ? -1 : 1
        } : function(c8, c7) {
            if (c8 === c7) {
                cb = true;
                return 0
            } else {
                if (c8.sourceIndex && c7.sourceIndex) {
                    return c8.sourceIndex - c7.sourceIndex
                }
            }
            var c5, c1, c2 = [],
                e = [],
                c4 = c8.parentNode,
                c6 = c7.parentNode,
                c9 = c4;
            if (c4 === c6) {
                return b2(c8, c7)
            } else {
                if (!c4) {
                    return -1
                } else {
                    if (!c6) {
                        return 1
                    }
                }
            }
            while (c9) {
                c2.unshift(c9);
                c9 = c9.parentNode
            }
            c9 = c6;
            while (c9) {
                e.unshift(c9);
                c9 = c9.parentNode
            }
            c5 = c2.length;
            c1 = e.length;
            for (var c3 = 0; c3 < c5 && c3 < c1; c3++) {
                if (c2[c3] !== e[c3]) {
                    return b2(c2[c3], e[c3])
                }
            }
            return c3 === c5 ? b2(c8, e[c3], -1) : b2(c2[c3], c7, 1)
        };
        [0, 0].sort(ce);
        b8 = !cb;
        cK.uniqueSort = function(c1) {
            var c2, e = 1;
            cb = b8;
            c1.sort(ce);
            if (cb) {
                for (;
                    (c2 = c1[e]); e++) {
                    if (c2 === c1[e - 1]) {
                        c1.splice(e--, 1)
                    }
                }
            }
            return c1
        };
        cK.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };

        function b1(c7, c1, c9, dg) {
            var c2, da, dc, dd, db, c4, df, c8, e, c3, c6 = !c9 && c1 !== b7,
                de = (c6 ? "<s>" : "") + c7.replace(cS, "$1<s>"),
                c5 = cP[cU][de];
            if (c5) {
                return dg ? 0 : ci.call(c5, 0)
            }
            db = c7;
            c4 = [];
            c8 = 0;
            e = cE.preFilter;
            c3 = cE.filter;
            while (db) {
                if (!c2 || (da = b4.exec(db))) {
                    if (da) {
                        db = db.slice(da[0].length);
                        dc.selector = df
                    }
                    c4.push(dc = []);
                    df = "";
                    if (c6) {
                        db = " " + db
                    }
                }
                c2 = false;
                if ((da = cB.exec(db))) {
                    df += da[0];
                    db = db.slice(da[0].length);
                    c2 = dc.push({
                        part: da.pop().replace(cS, " "),
                        string: da[0],
                        captures: da
                    })
                }
                for (dd in c3) {
                    if ((da = cA[dd].exec(db)) && (!e[dd] || (da = e[dd](da, c1, c9)))) {
                        df += da[0];
                        db = db.slice(da[0].length);
                        c2 = dc.push({
                            part: dd,
                            string: da.shift(),
                            captures: da
                        })
                    }
                }
                if (!c2) {
                    break
                }
            }
            if (df) {
                dc.selector = df
            }
            return dg ? db.length : db ? cK.error(c7) : ci.call(cP(de, c4), 0)
        }

        function cs(c5, c4, c3, c1) {
            var e = c4.dir,
                c2 = cd++;
            if (!c5) {
                c5 = function(c6) {
                    return c6 === c3
                }
            }
            return c4.first ? function(c6) {
                while ((c6 = c6[e])) {
                    if (c6.nodeType === 1) {
                        return c5(c6) && c6
                    }
                }
            } : c1 ? function(c6) {
                while ((c6 = c6[e])) {
                    if (c6.nodeType === 1) {
                        if (c5(c6)) {
                            return c6
                        }
                    }
                }
            } : function(c7) {
                var c6, c8 = c2 + "." + cn,
                    c9 = c8 + "." + cR;
                while ((c7 = c7[e])) {
                    if (c7.nodeType === 1) {
                        if ((c6 = c7[cU]) === c9) {
                            return c7.sizset
                        } else {
                            if (typeof c6 === "string" && c6.indexOf(c8) === 0) {
                                if (c7.sizset) {
                                    return c7
                                }
                            } else {
                                c7[cU] = c9;
                                if (c5(c7)) {
                                    c7.sizset = true;
                                    return c7
                                }
                                c7.sizset = false
                            }
                        }
                    }
                }
            }
        }

        function cq(e, c1) {
            return e ? function(c3) {
                var c2 = c1(c3);
                return c2 && e(c2 === true ? c3 : c2)
            } : c1
        }

        function ct(c5, c3, e) {
            var c2, c4, c1 = 0;
            for (;
                (c2 = c5[c1]); c1++) {
                if (cE.relative[c2.part]) {
                    c4 = cs(c4, cE.relative[c2.part], c3, e)
                } else {
                    c4 = cq(c4, cE.filter[c2.part].apply(null, c2.captures.concat(c3, e)))
                }
            }
            return c4
        }

        function b5(e) {
            return function(c2) {
                var c3, c1 = 0;
                for (;
                    (c3 = e[c1]); c1++) {
                    if (c3(c2)) {
                        return true
                    }
                }
                return false
            }
        }
        cc = cK.compile = function(c1, c4, c2) {
            var c6, c3, e, c5 = ck[cU][c1];
            if (c5 && c5.context === c4) {
                return c5
            }
            c6 = b1(c1, c4, c2);
            for (c3 = 0, e = c6.length; c3 < e; c3++) {
                c6[c3] = ct(c6[c3], c4, c2)
            }
            c5 = ck(c1, b5(c6));
            c5.context = c4;
            c5.runs = c5.dirruns = 0;
            return c5
        };

        function cl(c1, c5, c4, c2) {
            var c3 = 0,
                e = c5.length;
            for (; c3 < e; c3++) {
                cK(c1, c5[c3], c4, c2)
            }
        }

        function cF(e, c2, c6, c7, c1, c5) {
            var c3, c4 = cE.setFilters[c2.toLowerCase()];
            if (!c4) {
                cK.error(c2)
            }
            if (e || !(c3 = c1)) {
                cl(e || "*", c7, (c3 = []), c1)
            }
            return c3.length > 0 ? c4(c3, c6, c5) : []
        }

        function cN(dj, e, dc, c2) {
            var c8, dd, de, db, c5, df, c4, da, c6, c9, di, dk, c1, dg = 0,
                dh = dj.length,
                c3 = cA.POS,
                c7 = new RegExp("^" + c3.source + "(?!" + cu + ")", "i"),
                dl = function() {
                    var dn = 1,
                        dm = arguments.length - 2;
                    for (; dn < dm; dn++) {
                        if (arguments[dn] === cf) {
                            c6[dn] = cf
                        }
                    }
                };
            for (; dg < dh; dg++) {
                c8 = dj[dg];
                dd = "";
                da = c2;
                for (de = 0, db = c8.length; de < db; de++) {
                    c5 = c8[de];
                    df = c5.string;
                    if (c5.part === "PSEUDO") {
                        c3.exec("");
                        c4 = 0;
                        while ((c6 = c3.exec(df))) {
                            c9 = true;
                            di = c3.lastIndex = c6.index + c6[0].length;
                            if (di > c4) {
                                dd += df.slice(c4, c6.index);
                                c4 = di;
                                dk = [e];
                                if (cB.test(dd)) {
                                    if (da) {
                                        dk = da
                                    }
                                    da = c2
                                }
                                if ((c1 = cV.test(dd))) {
                                    dd = dd.slice(0, -5).replace(cB, "$&*");
                                    c4++
                                }
                                if (c6.length > 1) {
                                    c6[0].replace(c7, dl)
                                }
                                da = cF(dd, c6[1], c6[2], dk, da, c1)
                            }
                            dd = ""
                        }
                    }
                    if (!c9) {
                        dd += df
                    }
                    c9 = false
                }
                if (dd) {
                    if (cB.test(dd)) {
                        cl(dd, da || [e], dc, c2)
                    } else {
                        cK(dd, e, dc, c2 ? c2.concat(da) : da)
                    }
                } else {
                    cQ.apply(dc, da)
                }
            }
            return dh === 1 ? dc : cK.uniqueSort(dc)
        }

        function cT(c6, c1, c8, db, da) {
            c6 = c6.replace(cS, "$1");
            var e, dc, c4, c3, c7, de, c5, c2, df, dd, c9 = b1(c6, c1, da),
                dg = c1.nodeType;
            if (cA.POS.test(c6)) {
                return cN(c9, c1, c8, db)
            }
            if (db) {
                e = ci.call(db, 0)
            } else {
                if (c9.length === 1) {
                    if ((de = ci.call(c9[0], 0)).length > 2 && (c5 = de[0]).part === "ID" && dg === 9 && !da && cE.relative[de[1].part]) {
                        c1 = cE.find.ID(c5.captures[0].replace(cp, ""), c1, da)[0];
                        if (!c1) {
                            return c8
                        }
                        c6 = c6.slice(de.shift().string.length)
                    }
                    df = ((c9 = cL.exec(de[0].string)) && !c9.index && c1.parentNode) || c1;
                    c2 = "";
                    for (c7 = de.length - 1; c7 >= 0; c7--) {
                        c5 = de[c7];
                        dd = c5.part;
                        c2 = c5.string + c2;
                        if (cE.relative[dd]) {
                            break
                        }
                        if (cE.order.test(dd)) {
                            e = cE.find[dd](c5.captures[0].replace(cp, ""), df, da);
                            if (e == null) {
                                continue
                            } else {
                                c6 = c6.slice(0, c6.length - c2.length) + c2.replace(cA[dd], "");
                                if (!c6) {
                                    cQ.apply(c8, ci.call(e, 0))
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (c6) {
                dc = cc(c6, c1, da);
                cn = dc.dirruns++;
                if (e == null) {
                    e = cE.find.TAG("*", (cL.test(c6) && c1.parentNode) || c1)
                }
                for (c7 = 0;
                    (c3 = e[c7]); c7++) {
                    cR = dc.runs++;
                    if (dc(c3)) {
                        c8.push(c3)
                    }
                }
            }
            return c8
        }
        if (b7.querySelectorAll) {
            (function() {
                var c5, c6 = cT,
                    c4 = /'|\\/g,
                    c2 = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    c1 = [],
                    e = [":active"],
                    c3 = ca.matchesSelector || ca.mozMatchesSelector || ca.webkitMatchesSelector || ca.oMatchesSelector || ca.msMatchesSelector;
                cD(function(c7) {
                    c7.innerHTML = "<select><option selected=''></option></select>";
                    if (!c7.querySelectorAll("[selected]").length) {
                        c1.push("\\[" + cu + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if (!c7.querySelectorAll(":checked").length) {
                        c1.push(":checked")
                    }
                });
                cD(function(c7) {
                    c7.innerHTML = "<p test=''></p>";
                    if (c7.querySelectorAll("[test^='']").length) {
                        c1.push("[*^$]=" + cu + "*(?:\"\"|'')")
                    }
                    c7.innerHTML = "<input type='hidden'/>";
                    if (!c7.querySelectorAll(":enabled").length) {
                        c1.push(":enabled", ":disabled")
                    }
                });
                c1 = c1.length && new RegExp(c1.join("|"));
                cT = function(dd, c8, de, dh, dg) {
                    if (!dh && !dg && (!c1 || !c1.test(dd))) {
                        if (c8.nodeType === 9) {
                            try {
                                cQ.apply(de, ci.call(c8.querySelectorAll(dd), 0));
                                return de
                            } catch (dc) {}
                        } else {
                            if (c8.nodeType === 1 && c8.nodeName.toLowerCase() !== "object") {
                                var db, df, di, da = c8.getAttribute("id"),
                                    c7 = da || cU,
                                    c9 = cL.test(dd) && c8.parentNode || c8;
                                if (da) {
                                    c7 = c7.replace(c4, "\\$&")
                                } else {
                                    c8.setAttribute("id", c7)
                                }
                                db = b1(dd, c8, dg);
                                c7 = "[id='" + c7 + "']";
                                for (df = 0, di = db.length; df < di; df++) {
                                    db[df] = c7 + db[df].selector
                                }
                                try {
                                    cQ.apply(de, ci.call(c9.querySelectorAll(db.join(",")), 0));
                                    return de
                                } catch (dc) {} finally {
                                    if (!da) {
                                        c8.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return c6(dd, c8, de, dh, dg)
                };
                if (c3) {
                    cD(function(c8) {
                        c5 = c3.call(c8, "div");
                        try {
                            c3.call(c8, "[test!='']:sizzle");
                            e.push(cA.PSEUDO.source, cA.POS.source, "!=")
                        } catch (c7) {}
                    });
                    e = new RegExp(e.join("|"));
                    cK.matchesSelector = function(c8, da) {
                        da = da.replace(c2, "='$1']");
                        if (!cj(c8) && !e.test(da) && (!c1 || !c1.test(da))) {
                            try {
                                var c7 = c3.call(c8, da);
                                if (c7 || c5 || c8.document && c8.document.nodeType !== 11) {
                                    return c7
                                }
                            } catch (c9) {}
                        }
                        return cK(da, null, null, [c8]).length > 0
                    }
                }
            })()
        }
        cE.setFilters.nth = cE.setFilters.eq;
        cE.filters = cE.pseudos;
        cK.attr = bG.attr;
        bG.find = cK;
        bG.expr = cK.selectors;
        bG.expr[":"] = bG.expr.pseudos;
        bG.unique = cK.uniqueSort;
        bG.text = cK.getText;
        bG.isXMLDoc = cK.isXML;
        bG.contains = cK.contains
    })(a2);
    var ag = /Until$/,
        bq = /^(?:parents|prev(?:Until|All))/,
        al = /^.[^:#\[\.,]*$/,
        y = bG.expr.match.needsContext,
        bu = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    bG.fn.extend({
        find: function(e) {
            var b2, bZ, b4, b5, b3, b1, b0 = this;
            if (typeof e !== "string") {
                return bG(e).filter(function() {
                    for (b2 = 0, bZ = b0.length; b2 < bZ; b2++) {
                        if (bG.contains(b0[b2], this)) {
                            return true
                        }
                    }
                })
            }
            b1 = this.pushStack("", "find", e);
            for (b2 = 0, bZ = this.length; b2 < bZ; b2++) {
                b4 = b1.length;
                bG.find(e, this[b2], b1);
                if (b2 > 0) {
                    for (b5 = b4; b5 < b1.length; b5++) {
                        for (b3 = 0; b3 < b4; b3++) {
                            if (b1[b3] === b1[b5]) {
                                b1.splice(b5--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return b1
        },
        has: function(b1) {
            var b0, bZ = bG(b1, this),
                e = bZ.length;
            return this.filter(function() {
                for (b0 = 0; b0 < e; b0++) {
                    if (bG.contains(this, bZ[b0])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aM(this, e, false), "not", e)
        },
        filter: function(e) {
            return this.pushStack(aM(this, e, true), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e === "string" ? y.test(e) ? bG(e, this.context).index(this[0]) >= 0 : bG.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(b2, b1) {
            var b3, b0 = 0,
                e = this.length,
                bZ = [],
                b4 = y.test(b2) || typeof b2 !== "string" ? bG(b2, b1 || this.context) : 0;
            for (; b0 < e; b0++) {
                b3 = this[b0];
                while (b3 && b3.ownerDocument && b3 !== b1 && b3.nodeType !== 11) {
                    if (b4 ? b4.index(b3) > -1 : bG.find.matchesSelector(b3, b2)) {
                        bZ.push(b3);
                        break
                    }
                    b3 = b3.parentNode
                }
            }
            bZ = bZ.length > 1 ? bG.unique(bZ) : bZ;
            return this.pushStack(bZ, "closest", b2)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
            }
            if (typeof e === "string") {
                return bG.inArray(this[0], bG(e))
            }
            return bG.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, bZ) {
            var b1 = typeof e === "string" ? bG(e, bZ) : bG.makeArray(e && e.nodeType ? [e] : e),
                b0 = bG.merge(this.get(), b1);
            return this.pushStack(aR(b1[0]) || aR(b0[0]) ? b0 : bG.unique(b0))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    bG.fn.andSelf = bG.fn.addBack;

    function aR(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function aY(bZ, e) {
        do {
            bZ = bZ[e]
        } while (bZ && bZ.nodeType !== 1);
        return bZ
    }
    bG.each({
        parent: function(bZ) {
            var e = bZ.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function(e) {
            return bG.dir(e, "parentNode")
        },
        parentsUntil: function(bZ, e, b0) {
            return bG.dir(bZ, "parentNode", b0)
        },
        next: function(e) {
            return aY(e, "nextSibling")
        },
        prev: function(e) {
            return aY(e, "previousSibling")
        },
        nextAll: function(e) {
            return bG.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return bG.dir(e, "previousSibling")
        },
        nextUntil: function(bZ, e, b0) {
            return bG.dir(bZ, "nextSibling", b0)
        },
        prevUntil: function(bZ, e, b0) {
            return bG.dir(bZ, "previousSibling", b0)
        },
        siblings: function(e) {
            return bG.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return bG.sibling(e.firstChild)
        },
        contents: function(e) {
            return bG.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bG.merge([], e.childNodes)
        }
    }, function(e, bZ) {
        bG.fn[e] = function(b2, b0) {
            var b1 = bG.map(this, bZ, b2);
            if (!ag.test(e)) {
                b0 = b2
            }
            if (b0 && typeof b0 === "string") {
                b1 = bG.filter(b0, b1)
            }
            b1 = this.length > 1 && !bu[e] ? bG.unique(b1) : b1;
            if (this.length > 1 && bq.test(e)) {
                b1 = b1.reverse()
            }
            return this.pushStack(b1, e, a4.call(arguments).join(","))
        }
    });
    bG.extend({
        filter: function(b0, e, bZ) {
            if (bZ) {
                b0 = ":not(" + b0 + ")"
            }
            return e.length === 1 ? bG.find.matchesSelector(e[0], b0) ? [e[0]] : [] : bG.find.matches(b0, e)
        },
        dir: function(b0, bZ, b2) {
            var e = [],
                b1 = b0[bZ];
            while (b1 && b1.nodeType !== 9 && (b2 === aB || b1.nodeType !== 1 || !bG(b1).is(b2))) {
                if (b1.nodeType === 1) {
                    e.push(b1)
                }
                b1 = b1[bZ]
            }
            return e
        },
        sibling: function(b0, bZ) {
            var e = [];
            for (; b0; b0 = b0.nextSibling) {
                if (b0.nodeType === 1 && b0 !== bZ) {
                    e.push(b0)
                }
            }
            return e
        }
    });

    function aM(b1, b0, e) {
        b0 = b0 || 0;
        if (bG.isFunction(b0)) {
            return bG.grep(b1, function(b3, b2) {
                var b4 = !!b0.call(b3, b2, b3);
                return b4 === e
            })
        } else {
            if (b0.nodeType) {
                return bG.grep(b1, function(b3, b2) {
                    return (b3 === b0) === e
                })
            } else {
                if (typeof b0 === "string") {
                    var bZ = bG.grep(b1, function(b2) {
                        return b2.nodeType === 1
                    });
                    if (al.test(b0)) {
                        return bG.filter(b0, bZ, !e)
                    } else {
                        b0 = bG.filter(b0, bZ)
                    }
                }
            }
        }
        return bG.grep(b1, function(b3, b2) {
            return (bG.inArray(b3, b0) >= 0) === e
        })
    }

    function A(e) {
        var b0 = c.split("|"),
            bZ = e.createDocumentFragment();
        if (bZ.createElement) {
            while (b0.length) {
                bZ.createElement(b0.pop())
            }
        }
        return bZ
    }
    var c = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        av = / jQuery\d+="(?:null|\d+)"/g,
        bY = /^\s+/,
        ay = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        p = /<([\w:]+)/,
        bT = /<tbody/i,
        J = /<|&#?\w+;/,
        aj = /<(?:script|style|link)/i,
        ap = /<(?:script|object|embed|option|style)/i,
        K = new RegExp("<(?:" + c + ")[\\s/>]", "i"),
        aE = /^(?:checkbox|radio)$/,
        bR = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bw = /\/(java|ecma)script/i,
        aH = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        T = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        aQ = A(o),
        l = aQ.appendChild(o.createElement("div"));
    T.optgroup = T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    if (!bG.support.htmlSerialize) {
        T._default = [1, "X<div>", "</div>"]
    }
    bG.fn.extend({
        text: function(e) {
            return bG.access(this, function(bZ) {
                return bZ === aB ? bG.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(bZ))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (bG.isFunction(e)) {
                return this.each(function(b0) {
                    bG(this).wrapAll(e.call(this, b0))
                })
            }
            if (this[0]) {
                var bZ = bG(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bZ.insertBefore(this[0])
                }
                bZ.map(function() {
                    var b0 = this;
                    while (b0.firstChild && b0.firstChild.nodeType === 1) {
                        b0 = b0.firstChild
                    }
                    return b0
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (bG.isFunction(e)) {
                return this.each(function(bZ) {
                    bG(this).wrapInner(e.call(this, bZ))
                })
            }
            return this.each(function() {
                var bZ = bG(this),
                    b0 = bZ.contents();
                if (b0.length) {
                    b0.wrapAll(e)
                } else {
                    bZ.append(e)
                }
            })
        },
        wrap: function(e) {
            var bZ = bG.isFunction(e);
            return this.each(function(b0) {
                bG(this).wrapAll(bZ ? e.call(this, b0) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!bG.nodeName(this, "body")) {
                    bG(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function() {
            if (!aR(this[0])) {
                return this.domManip(arguments, false, function(bZ) {
                    this.parentNode.insertBefore(bZ, this)
                })
            }
            if (arguments.length) {
                var e = bG.clean(arguments);
                return this.pushStack(bG.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!aR(this[0])) {
                return this.domManip(arguments, false, function(bZ) {
                    this.parentNode.insertBefore(bZ, this.nextSibling)
                })
            }
            if (arguments.length) {
                var e = bG.clean(arguments);
                return this.pushStack(bG.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, b1) {
            var b0, bZ = 0;
            for (;
                (b0 = this[bZ]) != null; bZ++) {
                if (!e || bG.filter(e, [b0]).length) {
                    if (!b1 && b0.nodeType === 1) {
                        bG.cleanData(b0.getElementsByTagName("*"));
                        bG.cleanData([b0])
                    }
                    if (b0.parentNode) {
                        b0.parentNode.removeChild(b0)
                    }
                }
            }
            return this
        },
        empty: function() {
            var bZ, e = 0;
            for (;
                (bZ = this[e]) != null; e++) {
                if (bZ.nodeType === 1) {
                    bG.cleanData(bZ.getElementsByTagName("*"))
                }
                while (bZ.firstChild) {
                    bZ.removeChild(bZ.firstChild)
                }
            }
            return this
        },
        clone: function(bZ, e) {
            bZ = bZ == null ? false : bZ;
            e = e == null ? bZ : e;
            return this.map(function() {
                return bG.clone(this, bZ, e)
            })
        },
        html: function(e) {
            return bG.access(this, function(b2) {
                var b1 = this[0] || {},
                    b0 = 0,
                    bZ = this.length;
                if (b2 === aB) {
                    return b1.nodeType === 1 ? b1.innerHTML.replace(av, "") : aB
                }
                if (typeof b2 === "string" && !aj.test(b2) && (bG.support.htmlSerialize || !K.test(b2)) && (bG.support.leadingWhitespace || !bY.test(b2)) && !T[(p.exec(b2) || ["", ""])[1].toLowerCase()]) {
                    b2 = b2.replace(ay, "<$1></$2>");
                    try {
                        for (; b0 < bZ; b0++) {
                            b1 = this[b0] || {};
                            if (b1.nodeType === 1) {
                                bG.cleanData(b1.getElementsByTagName("*"));
                                b1.innerHTML = b2
                            }
                        }
                        b1 = 0
                    } catch (b3) {}
                }
                if (b1) {
                    this.empty().append(b2)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            if (!aR(this[0])) {
                if (bG.isFunction(e)) {
                    return this.each(function(b1) {
                        var b0 = bG(this),
                            bZ = b0.html();
                        b0.replaceWith(e.call(this, b1, bZ))
                    })
                }
                if (typeof e !== "string") {
                    e = bG(e).detach()
                }
                return this.each(function() {
                    var b0 = this.nextSibling,
                        bZ = this.parentNode;
                    bG(this).remove();
                    if (b0) {
                        bG(b0).before(e)
                    } else {
                        bG(bZ).append(e)
                    }
                })
            }
            return this.length ? this.pushStack(bG(bG.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(b4, b8, b7) {
            b4 = [].concat.apply([], b4);
            var b0, b2, b3, b6, b1 = 0,
                b5 = b4[0],
                bZ = [],
                e = this.length;
            if (!bG.support.checkClone && e > 1 && typeof b5 === "string" && bR.test(b5)) {
                return this.each(function() {
                    bG(this).domManip(b4, b8, b7)
                })
            }
            if (bG.isFunction(b5)) {
                return this.each(function(ca) {
                    var b9 = bG(this);
                    b4[0] = b5.call(this, ca, b8 ? b9.html() : aB);
                    b9.domManip(b4, b8, b7)
                })
            }
            if (this[0]) {
                b0 = bG.buildFragment(b4, this, bZ);
                b3 = b0.fragment;
                b2 = b3.firstChild;
                if (b3.childNodes.length === 1) {
                    b3 = b2
                }
                if (b2) {
                    b8 = b8 && bG.nodeName(b2, "tr");
                    for (b6 = b0.cacheable || e - 1; b1 < e; b1++) {
                        b7.call(b8 && bG.nodeName(this[b1], "table") ? x(this[b1], "tbody") : this[b1], b1 === b6 ? b3 : bG.clone(b3, true, true))
                    }
                }
                b3 = b2 = null;
                if (bZ.length) {
                    bG.each(bZ, function(b9, ca) {
                        if (ca.src) {
                            if (bG.ajax) {
                                bG.ajax({
                                    url: ca.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: false,
                                    global: false,
                                    "throws": true
                                })
                            } else {
                                bG.error("no ajax")
                            }
                        } else {
                            bG.globalEval((ca.text || ca.textContent || ca.innerHTML || "").replace(aH, ""))
                        }
                        if (ca.parentNode) {
                            ca.parentNode.removeChild(ca)
                        }
                    })
                }
            }
            return this
        }
    });

    function x(bZ, e) {
        return bZ.getElementsByTagName(e)[0] || bZ.appendChild(bZ.ownerDocument.createElement(e))
    }

    function ao(b5, bZ) {
        if (bZ.nodeType !== 1 || !bG.hasData(b5)) {
            return
        }
        var b2, b1, e, b4 = bG._data(b5),
            b3 = bG._data(bZ, b4),
            b0 = b4.events;
        if (b0) {
            delete b3.handle;
            b3.events = {};
            for (b2 in b0) {
                for (b1 = 0, e = b0[b2].length; b1 < e; b1++) {
                    bG.event.add(bZ, b2, b0[b2][b1])
                }
            }
        }
        if (b3.data) {
            b3.data = bG.extend({}, b3.data)
        }
    }

    function F(bZ, e) {
        var b0;
        if (e.nodeType !== 1) {
            return
        }
        if (e.clearAttributes) {
            e.clearAttributes()
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bZ)
        }
        b0 = e.nodeName.toLowerCase();
        if (b0 === "object") {
            if (e.parentNode) {
                e.outerHTML = bZ.outerHTML
            }
            if (bG.support.html5Clone && (bZ.innerHTML && !bG.trim(e.innerHTML))) {
                e.innerHTML = bZ.innerHTML
            }
        } else {
            if (b0 === "input" && aE.test(bZ.type)) {
                e.defaultChecked = e.checked = bZ.checked;
                if (e.value !== bZ.value) {
                    e.value = bZ.value
                }
            } else {
                if (b0 === "option") {
                    e.selected = bZ.defaultSelected
                } else {
                    if (b0 === "input" || b0 === "textarea") {
                        e.defaultValue = bZ.defaultValue
                    } else {
                        if (b0 === "script" && e.text !== bZ.text) {
                            e.text = bZ.text
                        }
                    }
                }
            }
        }
        e.removeAttribute(bG.expando)
    }
    bG.buildFragment = function(b1, b2, bZ) {
        var b0, e, b3, b4 = b1[0];
        b2 = b2 || o;
        b2 = !b2.nodeType && b2[0] || b2;
        b2 = b2.ownerDocument || b2;
        if (b1.length === 1 && typeof b4 === "string" && b4.length < 512 && b2 === o && b4.charAt(0) === "<" && !ap.test(b4) && (bG.support.checkClone || !bR.test(b4)) && (bG.support.html5Clone || !K.test(b4))) {
            e = true;
            b0 = bG.fragments[b4];
            b3 = b0 !== aB
        }
        if (!b0) {
            b0 = b2.createDocumentFragment();
            bG.clean(b1, b2, b0, bZ);
            if (e) {
                bG.fragments[b4] = b3 && b0
            }
        }
        return {
            fragment: b0,
            cacheable: e
        }
    };
    bG.fragments = {};
    bG.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, bZ) {
        bG.fn[e] = function(b0) {
            var b2, b4 = 0,
                b3 = [],
                b6 = bG(b0),
                b1 = b6.length,
                b5 = this.length === 1 && this[0].parentNode;
            if ((b5 == null || b5 && b5.nodeType === 11 && b5.childNodes.length === 1) && b1 === 1) {
                b6[bZ](this[0]);
                return this
            } else {
                for (; b4 < b1; b4++) {
                    b2 = (b4 > 0 ? this.clone(true) : this).get();
                    bG(b6[b4])[bZ](b2);
                    b3 = b3.concat(b2)
                }
                return this.pushStack(b3, e, b6.selector)
            }
        }
    });

    function m(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }

    function bS(e) {
        if (aE.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    bG.extend({
        clone: function(b2, b4, b0) {
            var e, bZ, b1, b3;
            if (bG.support.html5Clone || bG.isXMLDoc(b2) || !K.test("<" + b2.nodeName + ">")) {
                b3 = b2.cloneNode(true)
            } else {
                l.innerHTML = b2.outerHTML;
                l.removeChild(b3 = l.firstChild)
            }
            if ((!bG.support.noCloneEvent || !bG.support.noCloneChecked) && (b2.nodeType === 1 || b2.nodeType === 11) && !bG.isXMLDoc(b2)) {
                F(b2, b3);
                e = m(b2);
                bZ = m(b3);
                for (b1 = 0; e[b1]; ++b1) {
                    if (bZ[b1]) {
                        F(e[b1], bZ[b1])
                    }
                }
            }
            if (b4) {
                ao(b2, b3);
                if (b0) {
                    e = m(b2);
                    bZ = m(b3);
                    for (b1 = 0; e[b1]; ++b1) {
                        ao(e[b1], bZ[b1])
                    }
                }
            }
            e = bZ = null;
            return b3
        },
        clean: function(cb, b0, e, b1) {
            var b8, b7, ca, cf, b4, ce, b5, b2, bZ, b9, cd, b6, b3 = b0 === o && aQ,
                cc = [];
            if (!b0 || typeof b0.createDocumentFragment === "undefined") {
                b0 = o
            }
            for (b8 = 0;
                (ca = cb[b8]) != null; b8++) {
                if (typeof ca === "number") {
                    ca += ""
                }
                if (!ca) {
                    continue
                }
                if (typeof ca === "string") {
                    if (!J.test(ca)) {
                        ca = b0.createTextNode(ca)
                    } else {
                        b3 = b3 || A(b0);
                        b5 = b0.createElement("div");
                        b3.appendChild(b5);
                        ca = ca.replace(ay, "<$1></$2>");
                        cf = (p.exec(ca) || ["", ""])[1].toLowerCase();
                        b4 = T[cf] || T._default;
                        ce = b4[0];
                        b5.innerHTML = b4[1] + ca + b4[2];
                        while (ce--) {
                            b5 = b5.lastChild
                        }
                        if (!bG.support.tbody) {
                            b2 = bT.test(ca);
                            bZ = cf === "table" && !b2 ? b5.firstChild && b5.firstChild.childNodes : b4[1] === "<table>" && !b2 ? b5.childNodes : [];
                            for (b7 = bZ.length - 1; b7 >= 0; --b7) {
                                if (bG.nodeName(bZ[b7], "tbody") && !bZ[b7].childNodes.length) {
                                    bZ[b7].parentNode.removeChild(bZ[b7])
                                }
                            }
                        }
                        if (!bG.support.leadingWhitespace && bY.test(ca)) {
                            b5.insertBefore(b0.createTextNode(bY.exec(ca)[0]), b5.firstChild)
                        }
                        ca = b5.childNodes;
                        b5.parentNode.removeChild(b5)
                    }
                }
                if (ca.nodeType) {
                    cc.push(ca)
                } else {
                    bG.merge(cc, ca)
                }
            }
            if (b5) {
                ca = b5 = b3 = null
            }
            if (!bG.support.appendChecked) {
                for (b8 = 0;
                    (ca = cc[b8]) != null; b8++) {
                    if (bG.nodeName(ca, "input")) {
                        bS(ca)
                    } else {
                        if (typeof ca.getElementsByTagName !== "undefined") {
                            bG.grep(ca.getElementsByTagName("input"), bS)
                        }
                    }
                }
            }
            if (e) {
                cd = function(cg) {
                    if (!cg.type || bw.test(cg.type)) {
                        return b1 ? b1.push(cg.parentNode ? cg.parentNode.removeChild(cg) : cg) : e.appendChild(cg)
                    }
                };
                for (b8 = 0;
                    (ca = cc[b8]) != null; b8++) {
                    if (!(bG.nodeName(ca, "script") && cd(ca))) {
                        e.appendChild(ca);
                        if (typeof ca.getElementsByTagName !== "undefined") {
                            b6 = bG.grep(bG.merge([], ca.getElementsByTagName("script")), cd);
                            cc.splice.apply(cc, [b8 + 1, 0].concat(b6));
                            b8 += b6.length
                        }
                    }
                }
            }
            return cc
        },
        cleanData: function(bZ, b7) {
            var b2, b0, b1, b6, b3 = 0,
                b8 = bG.expando,
                e = bG.cache,
                b4 = bG.support.deleteExpando,
                b5 = bG.event.special;
            for (;
                (b1 = bZ[b3]) != null; b3++) {
                if (b7 || bG.acceptData(b1)) {
                    b0 = b1[b8];
                    b2 = b0 && e[b0];
                    if (b2) {
                        if (b2.events) {
                            for (b6 in b2.events) {
                                if (b5[b6]) {
                                    bG.event.remove(b1, b6)
                                } else {
                                    bG.removeEvent(b1, b6, b2.handle)
                                }
                            }
                        }
                        if (e[b0]) {
                            delete e[b0];
                            if (b4) {
                                delete b1[b8]
                            } else {
                                if (b1.removeAttribute) {
                                    b1.removeAttribute(b8)
                                } else {
                                    b1[b8] = null
                                }
                            }
                            bG.deletedIds.push(b0)
                        }
                    }
                }
            }
        }
    });
    (function() {
        var e, bZ;
        bG.uaMatch = function(b1) {
            b1 = b1.toLowerCase();
            var b0 = /(chrome)[ \/]([\w.]+)/.exec(b1) || /(webkit)[ \/]([\w.]+)/.exec(b1) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b1) || /(msie) ([\w.]+)/.exec(b1) || b1.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b1) || [];
            return {
                browser: b0[1] || "",
                version: b0[2] || "0"
            }
        };
        e = bG.uaMatch(d.userAgent);
        bZ = {};
        if (e.browser) {
            bZ[e.browser] = true;
            bZ.version = e.version
        }
        if (bZ.chrome) {
            bZ.webkit = true
        } else {
            if (bZ.webkit) {
                bZ.safari = true
            }
        }
        bG.browser = bZ;
        bG.sub = function() {
            function b0(b3, b4) {
                return new b0.fn.init(b3, b4)
            }
            bG.extend(true, b0, this);
            b0.superclass = this;
            b0.fn = b0.prototype = this();
            b0.fn.constructor = b0;
            b0.sub = this.sub;
            b0.fn.init = function b2(b3, b4) {
                if (b4 && b4 instanceof bG && !(b4 instanceof b0)) {
                    b4 = b0(b4)
                }
                return bG.fn.init.call(this, b3, b4, b1)
            };
            b0.fn.init.prototype = b0.fn;
            var b1 = b0(o);
            return b0
        }
    })();
    var E, az, aW, be = /alpha\([^)]*\)/i,
        aS = /opacity=([^)]*)/,
        bk = /^(top|right|bottom|left)$/,
        G = /^(none|table(?!-c[ea]).+)/,
        aZ = /^margin/,
        a8 = new RegExp("^(" + bx + ")(.*)$", "i"),
        W = new RegExp("^(" + bx + ")(?!px)[a-z%]+$", "i"),
        S = new RegExp("^([-+])=(" + bx + ")", "i"),
        bh = {},
        a9 = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bA = {
            letterSpacing: 0,
            fontWeight: 400
        },
        bQ = ["Top", "Right", "Bottom", "Left"],
        ar = ["Webkit", "O", "Moz", "ms"],
        aJ = bG.fn.toggle;

    function b(b1, bZ) {
        if (bZ in b1) {
            return bZ
        }
        var b2 = bZ.charAt(0).toUpperCase() + bZ.slice(1),
            e = bZ,
            b0 = ar.length;
        while (b0--) {
            bZ = ar[b0] + b2;
            if (bZ in b1) {
                return bZ
            }
        }
        return e
    }

    function Q(bZ, e) {
        bZ = e || bZ;
        return bG.css(bZ, "display") === "none" || !bG.contains(bZ.ownerDocument, bZ)
    }

    function s(b3, e) {
        var b2, b4, bZ = [],
            b0 = 0,
            b1 = b3.length;
        for (; b0 < b1; b0++) {
            b2 = b3[b0];
            if (!b2.style) {
                continue
            }
            bZ[b0] = bG._data(b2, "olddisplay");
            if (e) {
                if (!bZ[b0] && b2.style.display === "none") {
                    b2.style.display = ""
                }
                if (b2.style.display === "" && Q(b2)) {
                    bZ[b0] = bG._data(b2, "olddisplay", bC(b2.nodeName))
                }
            } else {
                b4 = E(b2, "display");
                if (!bZ[b0] && b4 !== "none") {
                    bG._data(b2, "olddisplay", b4)
                }
            }
        }
        for (b0 = 0; b0 < b1; b0++) {
            b2 = b3[b0];
            if (!b2.style) {
                continue
            }
            if (!e || b2.style.display === "none" || b2.style.display === "") {
                b2.style.display = e ? bZ[b0] || "" : "none"
            }
        }
        return b3
    }
    bG.fn.extend({
        css: function(e, bZ) {
            return bG.access(this, function(b1, b0, b2) {
                return b2 !== aB ? bG.style(b1, b0, b2) : bG.css(b1, b0)
            }, e, bZ, arguments.length > 1)
        },
        show: function() {
            return s(this, true)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(b0, bZ) {
            var e = typeof b0 === "boolean";
            if (bG.isFunction(b0) && bG.isFunction(bZ)) {
                return aJ.apply(this, arguments)
            }
            return this.each(function() {
                if (e ? b0 : Q(this)) {
                    bG(this).show()
                } else {
                    bG(this).hide()
                }
            })
        }
    });
    bG.extend({
        cssHooks: {
            opacity: {
                get: function(b0, bZ) {
                    if (bZ) {
                        var e = E(b0, "opacity");
                        return e === "" ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": bG.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b1, b0, b7, b2) {
            if (!b1 || b1.nodeType === 3 || b1.nodeType === 8 || !b1.style) {
                return
            }
            var b5, b6, b8, b3 = bG.camelCase(b0),
                bZ = b1.style;
            b0 = bG.cssProps[b3] || (bG.cssProps[b3] = b(bZ, b3));
            b8 = bG.cssHooks[b0] || bG.cssHooks[b3];
            if (b7 !== aB) {
                b6 = typeof b7;
                if (b6 === "string" && (b5 = S.exec(b7))) {
                    b7 = (b5[1] + 1) * b5[2] + parseFloat(bG.css(b1, b0));
                    b6 = "number"
                }
                if (b7 == null || b6 === "number" && isNaN(b7)) {
                    return
                }
                if (b6 === "number" && !bG.cssNumber[b3]) {
                    b7 += "px"
                }
                if (!b8 || !("set" in b8) || (b7 = b8.set(b1, b7, b2)) !== aB) {
                    try {
                        bZ[b0] = b7
                    } catch (b4) {}
                }
            } else {
                if (b8 && "get" in b8 && (b5 = b8.get(b1, false, b2)) !== aB) {
                    return b5
                }
                return bZ[b0]
            }
        },
        css: function(b4, b2, b3, bZ) {
            var b5, b1, e, b0 = bG.camelCase(b2);
            b2 = bG.cssProps[b0] || (bG.cssProps[b0] = b(b4.style, b0));
            e = bG.cssHooks[b2] || bG.cssHooks[b0];
            if (e && "get" in e) {
                b5 = e.get(b4, true, bZ)
            }
            if (b5 === aB) {
                b5 = E(b4, b2)
            }
            if (b5 === "normal" && b2 in bA) {
                b5 = bA[b2]
            }
            if (b3 || bZ !== aB) {
                b1 = parseFloat(b5);
                return b3 || bG.isNumeric(b1) ? b1 || 0 : b5
            }
            return b5
        },
        swap: function(b2, b1, b3) {
            var b0, bZ, e = {};
            for (bZ in b1) {
                e[bZ] = b2.style[bZ];
                b2.style[bZ] = b1[bZ]
            }
            b0 = b3.call(b2);
            for (bZ in b1) {
                b2.style[bZ] = e[bZ]
            }
            return b0
        }
    });
    if (a2.getComputedStyle) {
        E = function(b5, bZ) {
            var e, b2, b1, b4, b3 = a2.getComputedStyle(b5, null),
                b0 = b5.style;
            if (b3) {
                e = b3[bZ];
                if (e === "" && !bG.contains(b5.ownerDocument, b5)) {
                    e = bG.style(b5, bZ)
                }
                if (W.test(e) && aZ.test(bZ)) {
                    b2 = b0.width;
                    b1 = b0.minWidth;
                    b4 = b0.maxWidth;
                    b0.minWidth = b0.maxWidth = b0.width = e;
                    e = b3.width;
                    b0.width = b2;
                    b0.minWidth = b1;
                    b0.maxWidth = b4
                }
            }
            return e
        }
    } else {
        if (o.documentElement.currentStyle) {
            E = function(b2, b0) {
                var b3, e, bZ = b2.currentStyle && b2.currentStyle[b0],
                    b1 = b2.style;
                if (bZ == null && b1 && b1[b0]) {
                    bZ = b1[b0]
                }
                if (W.test(bZ) && !bk.test(b0)) {
                    b3 = b1.left;
                    e = b2.runtimeStyle && b2.runtimeStyle.left;
                    if (e) {
                        b2.runtimeStyle.left = b2.currentStyle.left
                    }
                    b1.left = b0 === "fontSize" ? "1em" : bZ;
                    bZ = b1.pixelLeft + "px";
                    b1.left = b3;
                    if (e) {
                        b2.runtimeStyle.left = e
                    }
                }
                return bZ === "" ? "auto" : bZ
            }
        }
    }

    function aG(e, b0, b1) {
        var bZ = a8.exec(b0);
        return bZ ? Math.max(0, bZ[1] - (b1 || 0)) + (bZ[2] || "px") : b0
    }

    function at(b1, bZ, e, b3) {
        var b0 = e === (b3 ? "border" : "content") ? 4 : bZ === "width" ? 1 : 0,
            b2 = 0;
        for (; b0 < 4; b0 += 2) {
            if (e === "margin") {
                b2 += bG.css(b1, e + bQ[b0], true)
            }
            if (b3) {
                if (e === "content") {
                    b2 -= parseFloat(E(b1, "padding" + bQ[b0])) || 0
                }
                if (e !== "margin") {
                    b2 -= parseFloat(E(b1, "border" + bQ[b0] + "Width")) || 0
                }
            } else {
                b2 += parseFloat(E(b1, "padding" + bQ[b0])) || 0;
                if (e !== "padding") {
                    b2 += parseFloat(E(b1, "border" + bQ[b0] + "Width")) || 0
                }
            }
        }
        return b2
    }

    function u(b1, bZ, e) {
        var b2 = bZ === "width" ? b1.offsetWidth : b1.offsetHeight,
            b0 = true,
            b3 = bG.support.boxSizing && bG.css(b1, "boxSizing") === "border-box";
        if (b2 <= 0 || b2 == null) {
            b2 = E(b1, bZ);
            if (b2 < 0 || b2 == null) {
                b2 = b1.style[bZ]
            }
            if (W.test(b2)) {
                return b2
            }
            b0 = b3 && (bG.support.boxSizingReliable || b2 === b1.style[bZ]);
            b2 = parseFloat(b2) || 0
        }
        return (b2 + at(b1, bZ, e || (b3 ? "border" : "content"), b0)) + "px"
    }

    function bC(b0) {
        if (bh[b0]) {
            return bh[b0]
        }
        var e = bG("<" + b0 + ">").appendTo(o.body),
            bZ = e.css("display");
        e.remove();
        if (bZ === "none" || bZ === "") {
            az = o.body.appendChild(az || bG.extend(o.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!aW || !az.createElement) {
                aW = (az.contentWindow || az.contentDocument).document;
                aW.write("<!doctype html><html><body>");
                aW.close()
            }
            e = aW.body.appendChild(aW.createElement(b0));
            bZ = E(e, "display");
            o.body.removeChild(az)
        }
        bh[b0] = bZ;
        return bZ
    }
    bG.each(["height", "width"], function(bZ, e) {
        bG.cssHooks[e] = {
            get: function(b2, b1, b0) {
                if (b1) {
                    if (b2.offsetWidth === 0 && G.test(E(b2, "display"))) {
                        return bG.swap(b2, a9, function() {
                            return u(b2, e, b0)
                        })
                    } else {
                        return u(b2, e, b0)
                    }
                }
            },
            set: function(b1, b2, b0) {
                return aG(b1, b2, b0 ? at(b1, e, b0, bG.support.boxSizing && bG.css(b1, "boxSizing") === "border-box") : 0)
            }
        }
    });
    if (!bG.support.opacity) {
        bG.cssHooks.opacity = {
            get: function(bZ, e) {
                return aS.test((e && bZ.currentStyle ? bZ.currentStyle.filter : bZ.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            },
            set: function(b2, b3) {
                var b1 = b2.style,
                    bZ = b2.currentStyle,
                    e = bG.isNumeric(b3) ? "alpha(opacity=" + b3 * 100 + ")" : "",
                    b0 = bZ && bZ.filter || b1.filter || "";
                b1.zoom = 1;
                if (b3 >= 1 && bG.trim(b0.replace(be, "")) === "" && b1.removeAttribute) {
                    b1.removeAttribute("filter");
                    if (bZ && !bZ.filter) {
                        return
                    }
                }
                b1.filter = be.test(b0) ? b0.replace(be, e) : b0 + " " + e
            }
        }
    }
    bG(function() {
        if (!bG.support.reliableMarginRight) {
            bG.cssHooks.marginRight = {
                get: function(bZ, e) {
                    return bG.swap(bZ, {
                        display: "inline-block"
                    }, function() {
                        if (e) {
                            return E(bZ, "marginRight")
                        }
                    })
                }
            }
        }
        if (!bG.support.pixelPosition && bG.fn.position) {
            bG.each(["top", "left"], function(e, bZ) {
                bG.cssHooks[bZ] = {
                    get: function(b2, b1) {
                        if (b1) {
                            var b0 = E(b2, bZ);
                            return W.test(b0) ? bG(b2).position()[bZ] + "px" : b0
                        }
                    }
                }
            })
        }
    });
    if (bG.expr && bG.expr.filters) {
        bG.expr.filters.hidden = function(e) {
            return (e.offsetWidth === 0 && e.offsetHeight === 0) || (!bG.support.reliableHiddenOffsets && ((e.style && e.style.display) || E(e, "display")) === "none")
        };
        bG.expr.filters.visible = function(e) {
            return !bG.expr.filters.hidden(e)
        }
    }
    bG.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, bZ) {
        bG.cssHooks[e + bZ] = {
            expand: function(b2) {
                var b1, b3 = typeof b2 === "string" ? b2.split(" ") : [b2],
                    b0 = {};
                for (b1 = 0; b1 < 4; b1++) {
                    b0[e + bQ[b1] + bZ] = b3[b1] || b3[b1 - 2] || b3[0]
                }
                return b0
            }
        };
        if (!aZ.test(e)) {
            bG.cssHooks[e + bZ].set = aG
        }
    });
    var bs = /%20/g,
        aP = /\[\]$/,
        U = /\r?\n/g,
        bz = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aD = /^(?:select|textarea)/i;
    bG.fn.extend({
        serialize: function() {
            return bG.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? bG.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || aD.test(this.nodeName) || bz.test(this.type))
            }).map(function(e, bZ) {
                var b0 = bG(this).val();
                return b0 == null ? null : bG.isArray(b0) ? bG.map(b0, function(b2, b1) {
                    return {
                        name: bZ.name,
                        value: b2.replace(U, "\r\n")
                    }
                }) : {
                    name: bZ.name,
                    value: b0.replace(U, "\r\n")
                }
            }).get()
        }
    });
    bG.param = function(e, b0) {
        var b1, bZ = [],
            b2 = function(b3, b4) {
                b4 = bG.isFunction(b4) ? b4() : (b4 == null ? "" : b4);
                bZ[bZ.length] = encodeURIComponent(b3) + "=" + encodeURIComponent(b4)
            };
        if (b0 === aB) {
            b0 = bG.ajaxSettings && bG.ajaxSettings.traditional
        }
        if (bG.isArray(e) || (e.jquery && !bG.isPlainObject(e))) {
            bG.each(e, function() {
                b2(this.name, this.value)
            })
        } else {
            for (b1 in e) {
                k(b1, e[b1], b0, b2)
            }
        }
        return bZ.join("&").replace(bs, "+")
    };

    function k(b0, b2, bZ, b1) {
        var e;
        if (bG.isArray(b2)) {
            bG.each(b2, function(b4, b3) {
                if (bZ || aP.test(b0)) {
                    b1(b0, b3)
                } else {
                    k(b0 + "[" + (typeof b3 === "object" ? b4 : "") + "]", b3, bZ, b1)
                }
            })
        } else {
            if (!bZ && bG.type(b2) === "object") {
                for (e in b2) {
                    k(b0 + "[" + e + "]", b2[e], bZ, b1)
                }
            } else {
                b1(b0, b2)
            }
        }
    }
    var Y, bX, an = /#.*$/,
        ad = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        B = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        r = /^(?:GET|HEAD)$/,
        aC = /^\/\//,
        bN = /\?/,
        g = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        P = /([?&])_=[^&]*/,
        aT = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        bW = bG.fn.load,
        v = {},
        a6 = {},
        aX = ["*/"] + ["*"];
    try {
        Y = aI.href
    } catch (bd) {
        Y = o.createElement("a");
        Y.href = "";
        Y = Y.href
    }
    bX = aT.exec(Y.toLowerCase()) || [];

    function bI(e) {
        return function(b2, b4) {
            if (typeof b2 !== "string") {
                b4 = b2;
                b2 = "*"
            }
            var bZ, b5, b6, b1 = b2.toLowerCase().split(aV),
                b0 = 0,
                b3 = b1.length;
            if (bG.isFunction(b4)) {
                for (; b0 < b3; b0++) {
                    bZ = b1[b0];
                    b6 = /^\+/.test(bZ);
                    if (b6) {
                        bZ = bZ.substr(1) || "*"
                    }
                    b5 = e[bZ] = e[bZ] || [];
                    b5[b6 ? "unshift" : "push"](b4)
                }
            }
        }
    }

    function q(bZ, b8, b3, b6, b5, b1) {
        b5 = b5 || b8.dataTypes[0];
        b1 = b1 || {};
        b1[b5] = true;
        var b7, b4 = bZ[b5],
            b0 = 0,
            e = b4 ? b4.length : 0,
            b2 = (bZ === v);
        for (; b0 < e && (b2 || !b7); b0++) {
            b7 = b4[b0](b8, b3, b6);
            if (typeof b7 === "string") {
                if (!b2 || b1[b7]) {
                    b7 = aB
                } else {
                    b8.dataTypes.unshift(b7);
                    b7 = q(bZ, b8, b3, b6, b7, b1)
                }
            }
        }
        if ((b2 || !b7) && !b1["*"]) {
            b7 = q(bZ, b8, b3, b6, "*", b1)
        }
        return b7
    }

    function t(b0, b1) {
        var bZ, e, b2 = bG.ajaxSettings.flatOptions || {};
        for (bZ in b1) {
            if (b1[bZ] !== aB) {
                (b2[bZ] ? b0 : (e || (e = {})))[bZ] = b1[bZ]
            }
        }
        if (e) {
            bG.extend(true, b0, e)
        }
    }
    bG.fn.load = function(b1, b4, b5) {
        if (typeof b1 !== "string" && bW) {
            return bW.apply(this, arguments)
        }
        if (!this.length) {
            return this
        }
        var e, b2, b0, bZ = this,
            b3 = b1.indexOf(" ");
        if (b3 >= 0) {
            e = b1.slice(b3, b1.length);
            b1 = b1.slice(0, b3)
        }
        if (bG.isFunction(b4)) {
            b5 = b4;
            b4 = aB
        } else {
            if (b4 && typeof b4 === "object") {
                b2 = "POST"
            }
        }
        bG.ajax({
            url: b1,
            type: b2,
            dataType: "html",
            data: b4,
            complete: function(b7, b6) {
                if (b5) {
                    bZ.each(b5, b0 || [b7.responseText, b6, b7])
                }
            }
        }).done(function(b6) {
            b0 = arguments;
            bZ.html(e ? bG("<div>").append(b6.replace(g, "")).find(e) : b6)
        });
        return this
    };
    bG.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, bZ) {
        bG.fn[bZ] = function(b0) {
            return this.on(bZ, b0)
        }
    });
    bG.each(["get", "post"], function(e, bZ) {
        bG[bZ] = function(b0, b2, b3, b1) {
            if (bG.isFunction(b2)) {
                b1 = b1 || b3;
                b3 = b2;
                b2 = aB
            }
            return bG.ajax({
                type: bZ,
                url: b0,
                data: b2,
                success: b3,
                dataType: b1
            })
        }
    });
    bG.extend({
        getScript: function(e, bZ) {
            return bG.get(e, aB, bZ, "script")
        },
        getJSON: function(e, bZ, b0) {
            return bG.get(e, bZ, b0, "json")
        },
        ajaxSetup: function(bZ, e) {
            if (e) {
                t(bZ, bG.ajaxSettings)
            } else {
                e = bZ;
                bZ = bG.ajaxSettings
            }
            t(bZ, e);
            return bZ
        },
        ajaxSettings: {
            url: Y,
            isLocal: B.test(bX[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": aX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a2.String,
                "text html": true,
                "text json": bG.parseJSON,
                "text xml": bG.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: bI(v),
        ajaxTransport: bI(a6),
        ajax: function(b4, b1) {
            if (typeof b4 === "object") {
                b1 = b4;
                b4 = aB
            }
            b1 = b1 || {};
            var b7, cl, b2, cg, b9, cd, b0, cf, b8 = bG.ajaxSetup({}, b1),
                cn = b8.context || b8,
                cb = cn !== b8 && (cn.nodeType || cn instanceof bG) ? bG(cn) : bG.event,
                cm = bG.Deferred(),
                ci = bG.Callbacks("once memory"),
                b5 = b8.statusCode || {},
                cc = {},
                cj = {},
                b3 = 0,
                b6 = "canceled",
                ce = {
                    readyState: 0,
                    setRequestHeader: function(co, cp) {
                        if (!b3) {
                            var e = co.toLowerCase();
                            co = cj[e] = cj[e] || co;
                            cc[co] = cp
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return b3 === 2 ? cl : null
                    },
                    getResponseHeader: function(co) {
                        var e;
                        if (b3 === 2) {
                            if (!b2) {
                                b2 = {};
                                while ((e = ad.exec(cl))) {
                                    b2[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = b2[co.toLowerCase()]
                        }
                        return e === aB ? null : e
                    },
                    overrideMimeType: function(e) {
                        if (!b3) {
                            b8.mimeType = e
                        }
                        return this
                    },
                    abort: function(e) {
                        e = e || b6;
                        if (cg) {
                            cg.abort(e)
                        }
                        ca(0, e);
                        return this
                    }
                };

            function ca(cs, co, ct, cq) {
                var e, cw, cu, cr, cv, cp = co;
                if (b3 === 2) {
                    return
                }
                b3 = 2;
                if (b9) {
                    clearTimeout(b9)
                }
                cg = aB;
                cl = cq || "";
                ce.readyState = cs > 0 ? 4 : 0;
                if (ct) {
                    cr = h(b8, ce, ct)
                }
                if (cs >= 200 && cs < 300 || cs === 304) {
                    if (b8.ifModified) {
                        cv = ce.getResponseHeader("Last-Modified");
                        if (cv) {
                            bG.lastModified[b7] = cv
                        }
                        cv = ce.getResponseHeader("Etag");
                        if (cv) {
                            bG.etag[b7] = cv
                        }
                    }
                    if (cs === 304) {
                        cp = "notmodified";
                        e = true
                    } else {
                        e = ae(b8, cr);
                        cp = e.state;
                        cw = e.data;
                        cu = e.error;
                        e = !cu
                    }
                } else {
                    cu = cp;
                    if (!cp || cs) {
                        cp = "error";
                        if (cs < 0) {
                            cs = 0
                        }
                    }
                }
                ce.status = cs;
                ce.statusText = "" + (co || cp);
                if (e) {
                    cm.resolveWith(cn, [cw, cp, ce])
                } else {
                    cm.rejectWith(cn, [ce, cp, cu])
                }
                ce.statusCode(b5);
                b5 = aB;
                if (b0) {
                    cb.trigger("ajax" + (e ? "Success" : "Error"), [ce, b8, e ? cw : cu])
                }
                ci.fireWith(cn, [ce, cp]);
                if (b0) {
                    cb.trigger("ajaxComplete", [ce, b8]);
                    if (!(--bG.active)) {
                        bG.event.trigger("ajaxStop")
                    }
                }
            }
            cm.promise(ce);
            ce.success = ce.done;
            ce.error = ce.fail;
            ce.complete = ci.add;
            ce.statusCode = function(co) {
                if (co) {
                    var e;
                    if (b3 < 2) {
                        for (e in co) {
                            b5[e] = [b5[e], co[e]]
                        }
                    } else {
                        e = co[ce.status];
                        ce.always(e)
                    }
                }
                return this
            };
            b8.url = ((b4 || b8.url) + "").replace(an, "").replace(aC, bX[1] + "//");
            b8.dataTypes = bG.trim(b8.dataType || "*").toLowerCase().split(aV);
            if (b8.crossDomain == null) {
                cd = aT.exec(b8.url.toLowerCase());
                b8.crossDomain = !!(cd && (cd[1] != bX[1] || cd[2] != bX[2] || (cd[3] || (cd[1] === "http:" ? 80 : 443)) != (bX[3] || (bX[1] === "http:" ? 80 : 443))))
            }
            if (b8.data && b8.processData && typeof b8.data !== "string") {
                b8.data = bG.param(b8.data, b8.traditional)
            }
            q(v, b8, b1, ce);
            if (b3 === 2) {
                return ce
            }
            b0 = b8.global;
            b8.type = b8.type.toUpperCase();
            b8.hasContent = !r.test(b8.type);
            if (b0 && bG.active++ === 0) {
                bG.event.trigger("ajaxStart")
            }
            if (!b8.hasContent) {
                if (b8.data) {
                    b8.url += (bN.test(b8.url) ? "&" : "?") + b8.data;
                    delete b8.data
                }
                b7 = b8.url;
                if (b8.cache === false) {
                    var bZ = bG.now(),
                        ck = b8.url.replace(P, "$1_=" + bZ);
                    b8.url = ck + ((ck === b8.url) ? (bN.test(b8.url) ? "&" : "?") + "_=" + bZ : "")
                }
            }
            if (b8.data && b8.hasContent && b8.contentType !== false || b1.contentType) {
                ce.setRequestHeader("Content-Type", b8.contentType)
            }
            if (b8.ifModified) {
                b7 = b7 || b8.url;
                if (bG.lastModified[b7]) {
                    ce.setRequestHeader("If-Modified-Since", bG.lastModified[b7])
                }
                if (bG.etag[b7]) {
                    ce.setRequestHeader("If-None-Match", bG.etag[b7])
                }
            }
            ce.setRequestHeader("Accept", b8.dataTypes[0] && b8.accepts[b8.dataTypes[0]] ? b8.accepts[b8.dataTypes[0]] + (b8.dataTypes[0] !== "*" ? ", " + aX + "; q=0.01" : "") : b8.accepts["*"]);
            for (cf in b8.headers) {
                ce.setRequestHeader(cf, b8.headers[cf])
            }
            if (b8.beforeSend && (b8.beforeSend.call(cn, ce, b8) === false || b3 === 2)) {
                return ce.abort()
            }
            b6 = "abort";
            for (cf in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                ce[cf](b8[cf])
            }
            cg = q(a6, b8, b1, ce);
            if (!cg) {
                ca(-1, "No Transport")
            } else {
                ce.readyState = 1;
                if (b0) {
                    cb.trigger("ajaxSend", [ce, b8])
                }
                if (b8.async && b8.timeout > 0) {
                    b9 = setTimeout(function() {
                        ce.abort("timeout")
                    }, b8.timeout)
                }
                try {
                    b3 = 1;
                    cg.send(cc, ca)
                } catch (ch) {
                    if (b3 < 2) {
                        ca(-1, ch)
                    } else {
                        throw ch
                    }
                }
            }
            return ce
        },
        active: 0,
        lastModified: {},
        etag: {}
    });

    function h(b7, b6, b3) {
        var b2, b4, b1, e, bZ = b7.contents,
            b5 = b7.dataTypes,
            b0 = b7.responseFields;
        for (b4 in b0) {
            if (b4 in b3) {
                b6[b0[b4]] = b3[b4]
            }
        }
        while (b5[0] === "*") {
            b5.shift();
            if (b2 === aB) {
                b2 = b7.mimeType || b6.getResponseHeader("content-type")
            }
        }
        if (b2) {
            for (b4 in bZ) {
                if (bZ[b4] && bZ[b4].test(b2)) {
                    b5.unshift(b4);
                    break
                }
            }
        }
        if (b5[0] in b3) {
            b1 = b5[0]
        } else {
            for (b4 in b3) {
                if (!b5[0] || b7.converters[b4 + " " + b5[0]]) {
                    b1 = b4;
                    break
                }
                if (!e) {
                    e = b4
                }
            }
            b1 = b1 || e
        }
        if (b1) {
            if (b1 !== b5[0]) {
                b5.unshift(b1)
            }
            return b3[b1]
        }
    }

    function ae(b9, b1) {
        var b7, bZ, b5, b3, b6 = b9.dataTypes.slice(),
            b0 = b6[0],
            b8 = {},
            b2 = 0;
        if (b9.dataFilter) {
            b1 = b9.dataFilter(b1, b9.dataType)
        }
        if (b6[1]) {
            for (b7 in b9.converters) {
                b8[b7.toLowerCase()] = b9.converters[b7]
            }
        }
        for (;
            (b5 = b6[++b2]);) {
            if (b5 !== "*") {
                if (b0 !== "*" && b0 !== b5) {
                    b7 = b8[b0 + " " + b5] || b8["* " + b5];
                    if (!b7) {
                        for (bZ in b8) {
                            b3 = bZ.split(" ");
                            if (b3[1] === b5) {
                                b7 = b8[b0 + " " + b3[0]] || b8["* " + b3[0]];
                                if (b7) {
                                    if (b7 === true) {
                                        b7 = b8[bZ]
                                    } else {
                                        if (b8[bZ] !== true) {
                                            b5 = b3[0];
                                            b6.splice(b2--, 0, b5)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (b7 !== true) {
                        if (b7 && b9["throws"]) {
                            b1 = b7(b1)
                        } else {
                            try {
                                b1 = b7(b1)
                            } catch (b4) {
                                return {
                                    state: "parsererror",
                                    error: b7 ? b4 : "No conversion from " + b0 + " to " + b5
                                }
                            }
                        }
                    }
                }
                b0 = b5
            }
        }
        return {
            state: "success",
            data: b1
        }
    }
    var bp = [],
        aw = /\?/,
        a5 = /(=)\?(?=&|$)|\?\?/,
        bl = bG.now();
    bG.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = bp.pop() || (bG.expando + "_" + (bl++));
            this[e] = true;
            return e
        }
    });
    bG.ajaxPrefilter("json jsonp", function(b8, b3, b7) {
        var b6, e, b5, b1 = b8.data,
            bZ = b8.url,
            b0 = b8.jsonp !== false,
            b4 = b0 && a5.test(bZ),
            b2 = b0 && !b4 && typeof b1 === "string" && !(b8.contentType || "").indexOf("application/x-www-form-urlencoded") && a5.test(b1);
        if (b8.dataTypes[0] === "jsonp" || b4 || b2) {
            b6 = b8.jsonpCallback = bG.isFunction(b8.jsonpCallback) ? b8.jsonpCallback() : b8.jsonpCallback;
            e = a2[b6];
            if (b4) {
                b8.url = bZ.replace(a5, "$1" + b6)
            } else {
                if (b2) {
                    b8.data = b1.replace(a5, "$1" + b6)
                } else {
                    if (b0) {
                        b8.url += (aw.test(bZ) ? "&" : "?") + b8.jsonp + "=" + b6
                    }
                }
            }
            b8.converters["script json"] = function() {
                if (!b5) {
                    bG.error(b6 + " was not called")
                }
                return b5[0]
            };
            b8.dataTypes[0] = "json";
            a2[b6] = function() {
                b5 = arguments
            };
            b7.always(function() {
                a2[b6] = e;
                if (b8[b6]) {
                    b8.jsonpCallback = b3.jsonpCallback;
                    bp.push(b6)
                }
                if (b5 && bG.isFunction(e)) {
                    e(b5[0])
                }
                b5 = e = aB
            });
            return "script"
        }
    });
    bG.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                bG.globalEval(e);
                return e
            }
        }
    });
    bG.ajaxPrefilter("script", function(e) {
        if (e.cache === aB) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    bG.ajaxTransport("script", function(b0) {
        if (b0.crossDomain) {
            var e, bZ = o.head || o.getElementsByTagName("head")[0] || o.documentElement;
            return {
                send: function(b1, b2) {
                    e = o.createElement("script");
                    e.async = "async";
                    if (b0.scriptCharset) {
                        e.charset = b0.scriptCharset
                    }
                    e.src = b0.url;
                    e.onload = e.onreadystatechange = function(b4, b3) {
                        if (b3 || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bZ && e.parentNode) {
                                bZ.removeChild(e)
                            }
                            e = aB;
                            if (!b3) {
                                b2(200, "success")
                            }
                        }
                    };
                    bZ.insertBefore(e, bZ.firstChild)
                },
                abort: function() {
                    if (e) {
                        e.onload(0, 1)
                    }
                }
            }
        }
    });
    var ah, aN = a2.ActiveXObject ? function() {
            for (var e in ah) {
                ah[e](0, 1)
            }
        } : false,
        au = 0;

    function bB() {
        try {
            return new a2.XMLHttpRequest()
        } catch (bZ) {}
    }

    function bb() {
        try {
            return new a2.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bZ) {}
    }
    bG.ajaxSettings.xhr = a2.ActiveXObject ? function() {
        return !this.isLocal && bB() || bb()
    } : bB;
    (function(e) {
        bG.extend(bG.support, {
            ajax: !!e,
            cors: !!e && ("withCredentials" in e)
        })
    })(bG.ajaxSettings.xhr());
    if (bG.support.ajax) {
        bG.ajaxTransport(function(e) {
            if (!e.crossDomain || bG.support.cors) {
                var bZ;
                return {
                    send: function(b5, b0) {
                        var b3, b2, b4 = e.xhr();
                        if (e.username) {
                            b4.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            b4.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (b2 in e.xhrFields) {
                                b4[b2] = e.xhrFields[b2]
                            }
                        }
                        if (e.mimeType && b4.overrideMimeType) {
                            b4.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !b5["X-Requested-With"]) {
                            b5["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (b2 in b5) {
                                b4.setRequestHeader(b2, b5[b2])
                            }
                        } catch (b1) {}
                        b4.send((e.hasContent && e.data) || null);
                        bZ = function(ce, b8) {
                            var b9, b7, b6, cc, cb;
                            try {
                                if (bZ && (b8 || b4.readyState === 4)) {
                                    bZ = aB;
                                    if (b3) {
                                        b4.onreadystatechange = bG.noop;
                                        if (aN) {
                                            delete ah[b3]
                                        }
                                    }
                                    if (b8) {
                                        if (b4.readyState !== 4) {
                                            b4.abort()
                                        }
                                    } else {
                                        b9 = b4.status;
                                        b6 = b4.getAllResponseHeaders();
                                        cc = {};
                                        cb = b4.responseXML;
                                        if (cb && cb.documentElement) {
                                            cc.xml = cb
                                        }
                                        try {
                                            cc.text = b4.responseText
                                        } catch (ce) {}
                                        try {
                                            b7 = b4.statusText
                                        } catch (cd) {
                                            b7 = ""
                                        }
                                        if (!b9 && e.isLocal && !e.crossDomain) {
                                            b9 = cc.text ? 200 : 404
                                        } else {
                                            if (b9 === 1223) {
                                                b9 = 204
                                            }
                                        }
                                    }
                                }
                            } catch (ca) {
                                if (!b8) {
                                    b0(-1, ca)
                                }
                            }
                            if (cc) {
                                b0(b9, b7, cc, b6)
                            }
                        };
                        if (!e.async) {
                            bZ()
                        } else {
                            if (b4.readyState === 4) {
                                setTimeout(bZ, 0)
                            } else {
                                b3 = ++au;
                                if (aN) {
                                    if (!ah) {
                                        ah = {};
                                        bG(a2).unload(aN)
                                    }
                                    ah[b3] = bZ
                                }
                                b4.onreadystatechange = bZ
                            }
                        }
                    },
                    abort: function() {
                        if (bZ) {
                            bZ(0, 1)
                        }
                    }
                }
            }
        })
    }
    var L, ab, bO = /^(?:toggle|show|hide)$/,
        bH = new RegExp("^(?:([-+])=|)(" + bx + ")([a-z%]*)$", "i"),
        bM = /queueHooks$/,
        ax = [i],
        a1 = {
            "*": [function(bZ, b5) {
                var b2, b6, e, b7 = this.createTween(bZ, b5),
                    b3 = bH.exec(b5),
                    b4 = b7.cur(),
                    b0 = +b4 || 0,
                    b1 = 1;
                if (b3) {
                    b2 = +b3[2];
                    b6 = b3[3] || (bG.cssNumber[bZ] ? "" : "px");
                    if (b6 !== "px" && b0) {
                        b0 = bG.css(b7.elem, bZ, true) || b2 || 1;
                        do {
                            e = b1 = b1 || ".5";
                            b0 = b0 / b1;
                            bG.style(b7.elem, bZ, b0 + b6);
                            b1 = b7.cur() / b4
                        } while (b1 !== 1 && b1 !== e)
                    }
                    b7.unit = b6;
                    b7.start = b0;
                    b7.end = b3[1] ? b0 + (b3[1] + 1) * b2 : b2
                }
                return b7
            }]
        };

    function bj() {
        setTimeout(function() {
            L = aB
        }, 0);
        return (L = bG.now())
    }

    function bc(bZ, e) {
        bG.each(e, function(b4, b2) {
            var b3 = (a1[b4] || []).concat(a1["*"]),
                b0 = 0,
                b1 = b3.length;
            for (; b0 < b1; b0++) {
                if (b3[b0].call(bZ, b4, b2)) {
                    return
                }
            }
        })
    }

    function f(b0, b4, b7) {
        var b8, b3 = 0,
            e = 0,
            bZ = ax.length,
            b6 = bG.Deferred().always(function() {
                delete b2.elem
            }),
            b2 = function() {
                var cd = L || bj(),
                    ca = Math.max(0, b1.startTime + b1.duration - cd),
                    cc = 1 - (ca / b1.duration || 0),
                    b9 = 0,
                    cb = b1.tweens.length;
                for (; b9 < cb; b9++) {
                    b1.tweens[b9].run(cc)
                }
                b6.notifyWith(b0, [b1, cc, ca]);
                if (cc < 1 && cb) {
                    return ca
                } else {
                    b6.resolveWith(b0, [b1]);
                    return false
                }
            },
            b1 = b6.promise({
                elem: b0,
                props: bG.extend({}, b4),
                opts: bG.extend(true, {
                    specialEasing: {}
                }, b7),
                originalProperties: b4,
                originalOptions: b7,
                startTime: L || bj(),
                duration: b7.duration,
                tweens: [],
                createTween: function(cc, b9, cb) {
                    var ca = bG.Tween(b0, b1.opts, cc, b9, b1.opts.specialEasing[cc] || b1.opts.easing);
                    b1.tweens.push(ca);
                    return ca
                },
                stop: function(ca) {
                    var b9 = 0,
                        cb = ca ? b1.tweens.length : 0;
                    for (; b9 < cb; b9++) {
                        b1.tweens[b9].run(1)
                    }
                    if (ca) {
                        b6.resolveWith(b0, [b1, ca])
                    } else {
                        b6.rejectWith(b0, [b1, ca])
                    }
                    return this
                }
            }),
            b5 = b1.props;
        ak(b5, b1.opts.specialEasing);
        for (; b3 < bZ; b3++) {
            b8 = ax[b3].call(b1, b0, b5, b1.opts);
            if (b8) {
                return b8
            }
        }
        bc(b1, b5);
        if (bG.isFunction(b1.opts.start)) {
            b1.opts.start.call(b0, b1)
        }
        bG.fx.timer(bG.extend(b2, {
            anim: b1,
            queue: b1.opts.queue,
            elem: b0
        }));
        return b1.progress(b1.opts.progress).done(b1.opts.done, b1.opts.complete).fail(b1.opts.fail).always(b1.opts.always)
    }

    function ak(b1, b3) {
        var b0, bZ, b4, b2, e;
        for (b0 in b1) {
            bZ = bG.camelCase(b0);
            b4 = b3[bZ];
            b2 = b1[b0];
            if (bG.isArray(b2)) {
                b4 = b2[1];
                b2 = b1[b0] = b2[0]
            }
            if (b0 !== bZ) {
                b1[bZ] = b2;
                delete b1[b0]
            }
            e = bG.cssHooks[bZ];
            if (e && "expand" in e) {
                b2 = e.expand(b2);
                delete b1[bZ];
                for (b0 in b2) {
                    if (!(b0 in b1)) {
                        b1[b0] = b2[b0];
                        b3[b0] = b4
                    }
                }
            } else {
                b3[bZ] = b4
            }
        }
    }
    bG.Animation = bG.extend(f, {
        tweener: function(bZ, b2) {
            if (bG.isFunction(bZ)) {
                b2 = bZ;
                bZ = ["*"]
            } else {
                bZ = bZ.split(" ")
            }
            var b1, e = 0,
                b0 = bZ.length;
            for (; e < b0; e++) {
                b1 = bZ[e];
                a1[b1] = a1[b1] || [];
                a1[b1].unshift(b2)
            }
        },
        prefilter: function(bZ, e) {
            if (e) {
                ax.unshift(bZ)
            } else {
                ax.push(bZ)
            }
        }
    });

    function i(b2, b7, e) {
        var b6, b0, b9, b1, cd, cc, cb, ca, b3 = this,
            bZ = b2.style,
            b8 = {},
            b5 = [],
            b4 = b2.nodeType && Q(b2);
        if (!e.queue) {
            cb = bG._queueHooks(b2, "fx");
            if (cb.unqueued == null) {
                cb.unqueued = 0;
                ca = cb.empty.fire;
                cb.empty.fire = function() {
                    if (!cb.unqueued) {
                        ca()
                    }
                }
            }
            cb.unqueued++;
            b3.always(function() {
                b3.always(function() {
                    cb.unqueued--;
                    if (!bG.queue(b2, "fx").length) {
                        cb.empty.fire()
                    }
                })
            })
        }
        if (b2.nodeType === 1 && ("height" in b7 || "width" in b7)) {
            e.overflow = [bZ.overflow, bZ.overflowX, bZ.overflowY];
            if (bG.css(b2, "display") === "inline" && bG.css(b2, "float") === "none") {
                if (!bG.support.inlineBlockNeedsLayout || bC(b2.nodeName) === "inline") {
                    bZ.display = "inline-block"
                } else {
                    bZ.zoom = 1
                }
            }
        }
        if (e.overflow) {
            bZ.overflow = "hidden";
            if (!bG.support.shrinkWrapBlocks) {
                b3.done(function() {
                    bZ.overflow = e.overflow[0];
                    bZ.overflowX = e.overflow[1];
                    bZ.overflowY = e.overflow[2]
                })
            }
        }
        for (b6 in b7) {
            b9 = b7[b6];
            if (bO.exec(b9)) {
                delete b7[b6];
                if (b9 === (b4 ? "hide" : "show")) {
                    continue
                }
                b5.push(b6)
            }
        }
        b1 = b5.length;
        if (b1) {
            cd = bG._data(b2, "fxshow") || bG._data(b2, "fxshow", {});
            if (b4) {
                bG(b2).show()
            } else {
                b3.done(function() {
                    bG(b2).hide()
                })
            }
            b3.done(function() {
                var ce;
                bG.removeData(b2, "fxshow", true);
                for (ce in b8) {
                    bG.style(b2, ce, b8[ce])
                }
            });
            for (b6 = 0; b6 < b1; b6++) {
                b0 = b5[b6];
                cc = b3.createTween(b0, b4 ? cd[b0] : 0);
                b8[b0] = cd[b0] || bG.style(b2, b0);
                if (!(b0 in cd)) {
                    cd[b0] = cc.start;
                    if (b4) {
                        cc.end = cc.start;
                        cc.start = b0 === "width" || b0 === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function H(b0, bZ, b2, e, b1) {
        return new H.prototype.init(b0, bZ, b2, e, b1)
    }
    bG.Tween = H;
    H.prototype = {
        constructor: H,
        init: function(b1, bZ, b3, e, b2, b0) {
            this.elem = b1;
            this.prop = b3;
            this.easing = b2 || "swing";
            this.options = bZ;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = b0 || (bG.cssNumber[b3] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(b0) {
            var bZ, e = H.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = bZ = bG.easing[this.easing](b0, this.options.duration * b0, 0, 1, this.options.duration)
            } else {
                this.pos = bZ = b0
            }
            this.now = (this.end - this.start) * bZ + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (e && e.set) {
                e.set(this)
            } else {
                H.propHooks._default.set(this)
            }
            return this
        }
    };
    H.prototype.init.prototype = H.prototype;
    H.propHooks = {
        _default: {
            get: function(bZ) {
                var e;
                if (bZ.elem[bZ.prop] != null && (!bZ.elem.style || bZ.elem.style[bZ.prop] == null)) {
                    return bZ.elem[bZ.prop]
                }
                e = bG.css(bZ.elem, bZ.prop, false, "");
                return !e || e === "auto" ? 0 : e
            },
            set: function(e) {
                if (bG.fx.step[e.prop]) {
                    bG.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[bG.cssProps[e.prop]] != null || bG.cssHooks[e.prop])) {
                        bG.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    bG.each(["toggle", "show", "hide"], function(bZ, e) {
        var b0 = bG.fn[e];
        bG.fn[e] = function(b1, b3, b2) {
            return b1 == null || typeof b1 === "boolean" || (!bZ && bG.isFunction(b1) && bG.isFunction(b3)) ? b0.apply(this, arguments) : this.animate(bF(e, true), b1, b3, b2)
        }
    });
    bG.fn.extend({
        fadeTo: function(e, b1, b0, bZ) {
            return this.filter(Q).css("opacity", 0).show().end().animate({
                opacity: b1
            }, e, b0, bZ)
        },
        animate: function(b4, b1, b3, b2) {
            var b0 = bG.isEmptyObject(b4),
                e = bG.speed(b1, b3, b2),
                bZ = function() {
                    var b5 = f(this, bG.extend({}, b4), e);
                    if (b0) {
                        b5.stop(true)
                    }
                };
            return b0 || e.queue === false ? this.each(bZ) : this.queue(e.queue, bZ)
        },
        stop: function(b0, bZ, e) {
            var b1 = function(b2) {
                var b3 = b2.stop;
                delete b2.stop;
                b3(e)
            };
            if (typeof b0 !== "string") {
                e = bZ;
                bZ = b0;
                b0 = aB
            }
            if (bZ && b0 !== false) {
                this.queue(b0 || "fx", [])
            }
            return this.each(function() {
                var b5 = true,
                    b2 = b0 != null && b0 + "queueHooks",
                    b4 = bG.timers,
                    b3 = bG._data(this);
                if (b2) {
                    if (b3[b2] && b3[b2].stop) {
                        b1(b3[b2])
                    }
                } else {
                    for (b2 in b3) {
                        if (b3[b2] && b3[b2].stop && bM.test(b2)) {
                            b1(b3[b2])
                        }
                    }
                }
                for (b2 = b4.length; b2--;) {
                    if (b4[b2].elem === this && (b0 == null || b4[b2].queue === b0)) {
                        b4[b2].anim.stop(e);
                        b5 = false;
                        b4.splice(b2, 1)
                    }
                }
                if (b5 || !e) {
                    bG.dequeue(this, b0)
                }
            })
        }
    });

    function bF(b0, b2) {
        var b1, e = {
                height: b0
            },
            bZ = 0;
        b2 = b2 ? 1 : 0;
        for (; bZ < 4; bZ += 2 - b2) {
            b1 = bQ[bZ];
            e["margin" + b1] = e["padding" + b1] = b0
        }
        if (b2) {
            e.opacity = e.width = b0
        }
        return e
    }
    bG.each({
        slideDown: bF("show"),
        slideUp: bF("hide"),
        slideToggle: bF("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, bZ) {
        bG.fn[e] = function(b0, b2, b1) {
            return this.animate(bZ, b0, b2, b1)
        }
    });
    bG.speed = function(b0, b1, bZ) {
        var e = b0 && typeof b0 === "object" ? bG.extend({}, b0) : {
            complete: bZ || !bZ && b1 || bG.isFunction(b0) && b0,
            duration: b0,
            easing: bZ && b1 || b1 && !bG.isFunction(b1) && b1
        };
        e.duration = bG.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bG.fx.speeds ? bG.fx.speeds[e.duration] : bG.fx.speeds._default;
        if (e.queue == null || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function() {
            if (bG.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                bG.dequeue(this, e.queue)
            }
        };
        return e
    };
    bG.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    bG.timers = [];
    bG.fx = H.prototype.init;
    bG.fx.tick = function() {
        var b0, bZ = bG.timers,
            e = 0;
        for (; e < bZ.length; e++) {
            b0 = bZ[e];
            if (!b0() && bZ[e] === b0) {
                bZ.splice(e--, 1)
            }
        }
        if (!bZ.length) {
            bG.fx.stop()
        }
    };
    bG.fx.timer = function(e) {
        if (e() && bG.timers.push(e) && !ab) {
            ab = setInterval(bG.fx.tick, bG.fx.interval)
        }
    };
    bG.fx.interval = 13;
    bG.fx.stop = function() {
        clearInterval(ab);
        ab = null
    };
    bG.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bG.fx.step = {};
    if (bG.expr && bG.expr.filters) {
        bG.expr.filters.animated = function(e) {
            return bG.grep(bG.timers, function(bZ) {
                return e === bZ.elem
            }).length
        }
    }
    var bm = /^(?:body|html)$/i;
    bG.fn.offset = function(ca) {
        if (arguments.length) {
            return ca === aB ? this : this.each(function(cb) {
                bG.offset.setOffset(this, ca, cb)
            })
        }
        var b4, bZ, b5, b6, b3, b7, e, b2, b8, b1, b0 = this[0],
            b9 = b0 && b0.ownerDocument;
        if (!b9) {
            return
        }
        if ((b5 = b9.body) === b0) {
            return bG.offset.bodyOffset(b0)
        }
        bZ = b9.documentElement;
        if (!bG.contains(bZ, b0)) {
            return {
                top: 0,
                left: 0
            }
        }
        b4 = b0.getBoundingClientRect();
        b6 = bn(b9);
        b3 = bZ.clientTop || b5.clientTop || 0;
        b7 = bZ.clientLeft || b5.clientLeft || 0;
        e = b6.pageYOffset || bZ.scrollTop;
        b2 = b6.pageXOffset || bZ.scrollLeft;
        b8 = b4.top + e - b3;
        b1 = b4.left + b2 - b7;
        return {
            top: b8,
            left: b1
        }
    };
    bG.offset = {
        bodyOffset: function(e) {
            var b0 = e.offsetTop,
                bZ = e.offsetLeft;
            if (bG.support.doesNotIncludeMarginInBodyOffset) {
                b0 += parseFloat(bG.css(e, "marginTop")) || 0;
                bZ += parseFloat(bG.css(e, "marginLeft")) || 0
            }
            return {
                top: b0,
                left: bZ
            }
        },
        setOffset: function(b1, ca, b4) {
            var b5 = bG.css(b1, "position");
            if (b5 === "static") {
                b1.style.position = "relative"
            }
            var b3 = bG(b1),
                bZ = b3.offset(),
                e = bG.css(b1, "top"),
                b8 = bG.css(b1, "left"),
                b9 = (b5 === "absolute" || b5 === "fixed") && bG.inArray("auto", [e, b8]) > -1,
                b7 = {},
                b6 = {},
                b0, b2;
            if (b9) {
                b6 = b3.position();
                b0 = b6.top;
                b2 = b6.left
            } else {
                b0 = parseFloat(e) || 0;
                b2 = parseFloat(b8) || 0
            }
            if (bG.isFunction(ca)) {
                ca = ca.call(b1, b4, bZ)
            }
            if (ca.top != null) {
                b7.top = (ca.top - bZ.top) + b0
            }
            if (ca.left != null) {
                b7.left = (ca.left - bZ.left) + b2
            }
            if ("using" in ca) {
                ca.using.call(b1, b7)
            } else {
                b3.css(b7)
            }
        }
    };
    bG.fn.extend({
        position: function() {
            if (!this[0]) {
                return
            }
            var b0 = this[0],
                bZ = this.offsetParent(),
                b1 = this.offset(),
                e = bm.test(bZ[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : bZ.offset();
            b1.top -= parseFloat(bG.css(b0, "marginTop")) || 0;
            b1.left -= parseFloat(bG.css(b0, "marginLeft")) || 0;
            e.top += parseFloat(bG.css(bZ[0], "borderTopWidth")) || 0;
            e.left += parseFloat(bG.css(bZ[0], "borderLeftWidth")) || 0;
            return {
                top: b1.top - e.top,
                left: b1.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.body;
                while (e && (!bm.test(e.nodeName) && bG.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || o.body
            })
        }
    });
    bG.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b0, bZ) {
        var e = /Y/.test(bZ);
        bG.fn[b0] = function(b1) {
            return bG.access(this, function(b2, b5, b4) {
                var b3 = bn(b2);
                if (b4 === aB) {
                    return b3 ? (bZ in b3) ? b3[bZ] : b3.document.documentElement[b5] : b2[b5]
                }
                if (b3) {
                    b3.scrollTo(!e ? b4 : bG(b3).scrollLeft(), e ? b4 : bG(b3).scrollTop())
                } else {
                    b2[b5] = b4
                }
            }, b0, b1, arguments.length, null)
        }
    });

    function bn(e) {
        return bG.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    bG.each({
        Height: "height",
        Width: "width"
    }, function(e, bZ) {
        bG.each({
            padding: "inner" + e,
            content: bZ,
            "": "outer" + e
        }, function(b0, b1) {
            bG.fn[b1] = function(b5, b4) {
                var b3 = arguments.length && (b0 || typeof b5 !== "boolean"),
                    b2 = b0 || (b5 === true || b4 === true ? "margin" : "border");
                return bG.access(this, function(b7, b6, b8) {
                    var b9;
                    if (bG.isWindow(b7)) {
                        return b7.document.documentElement["client" + e]
                    }
                    if (b7.nodeType === 9) {
                        b9 = b7.documentElement;
                        return Math.max(b7.body["scroll" + e], b9["scroll" + e], b7.body["offset" + e], b9["offset" + e], b9["client" + e])
                    }
                    return b8 === aB ? bG.css(b7, b6, b8, b2) : bG.style(b7, b6, b8, b2)
                }, bZ, b3 ? b5 : aB, b3, null)
            }
        })
    });
    a2.jQuery = a2.$ = bG;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function() {
            return bG
        })
    }
})(window);
(function() {
    var b = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        e = {},
        c = {},
        f = "",
        k = null,
        n = {
            subtree: false,
            attributes: true
        },
        a = "domAttChangeHash",
        j = 0,
        h = null,
        m = null,
        d = false;
    var l = function() {
        j++;
        return a + j
    };
    var i = function() {
        if (k === null) {
            var o = document.createElement("p");
            k = false;
            if (o.addEventListener) {
                o.addEventListener("DOMAttrModified", function() {
                    k = true
                }, false)
            } else {
                if (o.attachEvent) {
                    o.attachEvent("onDOMAttrModified", function() {
                        k = true
                    })
                }
            }
            o.setAttribute("id", "DOMAttrModifiedSupportedId")
        }
        return k
    };
    var g = function() {
        if (!d) {
            if (i()) {
                getAttName = function(o) {
                    return o.attrName
                };
                f = "DOMAttrModified"
            } else {
                if (document && document.body && "onpropertychange" in document.body) {
                    f = "propertychange";
                    getAttName = function(o) {
                        return o.propertyName || o.originalEvent.propertyName
                    }
                } else {
                    HTMLElement.prototype.__setAttribute = HTMLElement.prototype.setAttribute;
                    HTMLElement.prototype.setAttribute = function(q, p) {
                        var r = this.getAttribute(q);
                        this.__setAttribute(q, p);
                        p = this.getAttribute(q);
                        if (p != r) {
                            var o = document.createEvent("MutationEvent");
                            o.initMutationEvent("DOMAttrModified", true, false, this, r || "", p || "", q, (r == null) ? o.ADDITION : o.MODIFICATION);
                            this.dispatchEvent(o)
                        }
                    };
                    HTMLElement.prototype.__removeAttribute = HTMLElement.prototype.removeAttribute;
                    HTMLElement.prototype.removeAttribute = function(p) {
                        var q = this.getAttribute(p);
                        this.__removeAttribute(p);
                        var o = document.createEvent("MutationEvent");
                        o.initMutationEvent("DOMAttrModified", true, false, this, q, "", p, o.REMOVAL);
                        this.dispatchEvent(o)
                    }
                }
            }
            d = true
        }
    };
    $.fn.bindAttrChange = function(o) {
        if (h === null) {
            if (b) {
                h = function(q, r) {
                    r[a] = r[a] || l();
                    var p = r[a];
                    return q.each(function() {
                        this[a] = this[a] || l();
                        var s = this[a];
                        e[s] = e[s] || {};
                        e[s][p] = e[s][p] || new b(function(t) {
                            t.forEach(function(u) {
                                r.call(u.target, u.attributeName)
                            })
                        });
                        e[s][p].observe(this, n)
                    })
                }
            } else {
                g();
                h = function(q, s) {
                    s[a] = s[a] || l();
                    var p = s[a];

                    function r(t) {
                        s.call(q, getAttName(t))
                    }
                    return q.each(function() {
                        this[a] = this[a] || l();
                        var t = this[a];
                        c[t] = c[t] || {};
                        c[t][p] = c[t][p] || r;
                        $(this).bind(f, c[t][p])
                    })
                }
            }
        }
        h(this, o)
    };
    $.fn.unbindAttrChange = function(o) {
        if (m === null) {
            if (b) {
                m = function(q, r) {
                    r[a] = r[a] || l();
                    var p = r[a];
                    return q.each(function() {
                        this[a] = this[a] || l();
                        var t = this[a];
                        if (!!e[t]) {
                            if (!!r) {
                                if (!!e[t][p]) {
                                    e[t][p].disconnect()
                                }
                            } else {
                                for (var s in e[t]) {
                                    s.disconnect()
                                }
                            }
                        }
                    })
                }
            } else {
                g();
                m = function(q, r) {
                    r[a] = r[a] || l();
                    var p = r[a];
                    return q.each(function() {
                        this[a] = this[a] || l();
                        var s = this[a];
                        if (!!c[this] && !!c[s][p]) {
                            $(this).unbind(f, c[s][p]);
                            c[s][p] = null
                        }
                    })
                }
            }
        }
        m(this, o)
    }
})();
"use strict";
var GS_WEB_WIDGET = window.GS_WEB_WIDGET || {};
GS_WEB_WIDGET.namespace = function(a, d) {
    var e = a.split("."),
        c = GS_WEB_WIDGET,
        b;
    if (e[0] === "GS_WEB_WIDGET") {
        e = e.slice(1)
    }
    for (b = 0; b < e.length; b += 1) {
        if (typeof c[e[b]] === "undefined") {
            c[e[b]] = typeof d !== "undefined" ? b < e.length - 1 ? {} : d : {}
        }
        c = c[e[b]]
    }
    return c
};
GS_WEB_WIDGET.namespaceOrNull = function(a) {
    var b = GS_WEB_WIDGET.namespace(a);
    return $.isEmptyObject(b) ? null : b
};
GS_WEB_WIDGET.defs = (function() {
    var a = {
        SOLID: 1,
        DASHED: 2
    };
    return {
        VERSION: "0.1.0.173",
        EXTERNAL_USER_ID: null,
        MAX_CORRECTIONS_IN_FLIGHT: 3,
        MAX_VISIBLE_SUGGESTIONS: 3,
        SCAN_CONTROLS_INTERVAL: 2000,
        BUBBLE_SUGGESTIONS: "GRbubbleSuggestions",
        BUBBLE_CORRECT_PHRASE_LEFT: "GRbubbleCorrectLeft",
        BUBBLE_CORRECT_PHRASE_RIGHT: "GRbubbleCorrectRight",
        BUBBLE_CORRECT_PHRASE_HAS_SUGGESTIONS: "GRbubbleCorrectHasSuggestions",
        BUBBLE_SUGGESTIONS_ARROW: "GRbubbleSuggestionsArrow",
        IGNORE_ITEM: "Ignore",
        ACCEPT_SPACE_DEFINITION: "Accept space",
        SPACE_ADDITION_REPLACE_HTML: ".&nbsp;",
        SPACE_ADDITION_REPLACE_TEXT: ". ",
        NO_SUGGESTIONS_ITEM: "(No Suggestions)",
        CORRECTED_BY_GINGER: "Corrected by <strong>Ginger</strong>",
        CONTACT_GINGER_ITEM: "by Ginger",
        CONTACT_GINGER_TOOLTIP: "Better English with Ginger Online Spell and Grammar Checker",
        CONTACT_GINGER_URL_ITEM: "http://www.gingersoftware.com",
        MARK_CONTEXT_CLASS: "GRcorrect",
        MARK_SPELLING_CONTEXT_CLASS: "GRSpellingCorrect",
        MARK_NOCONTEXT_CLASS: "GRspelling",
        SPAN_CONTEXT_ID: "grcontextid",
        MARK_LINE_CLASS: "GRline",
        MARK_HIGHLIGHT_LEFT_CLASS: "GRmarkHighlightLeft",
        MARK_HIGHLIGHT_RIGHT_CLASS: "GRmarkHighlightRight",
        MARK_HIGHLIGHT_TOP_CLASS: "GRmarkHighlightTop",
        MARK_HIGHLIGHT_BOTTOM_CLASS: "GRmarkHighlightBottom",
        MARK_HIGHLIGHT_SIDE_CLASS: "GRmarkHighlightSide",
        NO_SUGGESTIONS_MARK_CLASS: "GRnoSuggestion",
        SYNONYM_MARK_CLASS: "GRsynonym",
        TEXT_INPUT_WRAPPER_CLASS: "GRwrapper",
        TEXT_INPUT_CANVAS_CLASS: "GRcanvas",
        TEXT_INPUT_CONTOUR_CLASS: "GRcontour",
        INPUT_WRAPPER_CLASS: "GRinputWrapper",
        TEXTAREA_WRAPPER_CLASS: "GRtextareaWrapper",
        TEXT_INPUT_RICHTEXT_CLASS: "GRrichText",
        NO_MARK_TEXT_INPUT_CLASS: "GRnoMark",
        MARK_GUID_ATTR: "GRmarkGuid",
        UI_PHRASE_GUID_ATTR: "GRuiPhraseGuid",
        PHRASE_GROUP_ID_ATTR: "GRphraseGroupId",
        HIDE_MARK_ATTR: "GRignore",
        GINGER_EDITOR_ATTR: "GReditor",
        GINGER_GLOBAL_ATTR: "GRdoc",
        GINGER_STYLE_ATTR: "GRstyle",
        CORRECTION_TYPE_ATTR: "GRtype",
        GINGER_STYLE_ELEMENT_ID: "GRstyle",
        MARK_HIGHLIGHT_RGB: "17,85,204",
        MARK_HIGHLIGHT_SYNONYM_RGB: "255,153,0",
        CORRECTION_TYPES: {
            SPELLING: 1,
            MISUSED: 2,
            GRAMMAR: 3
        },
        CORRECTION_STYLES: a,
        CORRECTION_INDEX_ATTR: "correctionIndex",
        DEBUG_LOGGING: false,
        DEBUG_BOOKMARKS: false,
        DEBUG_EVENTS: false,
        DEBUG_INJECT: false,
        DISABLE_MARKUP: false,
        ALWAYS_RESTORE_BOOKMARK: false,
        NEVER_RESTORE_BOOKMARK: false,
        DEBUG_MARKS: false,
        DEBUG_TO_CONSOLE: false,
        ALWAYS_MARK: false,
        FORCE_USE_HTTP: false,
        DEBUG_MARK_COLORS: false,
        DEBUG_CONTEXT_MENU: false,
        TOP_MENU_BINDING: true,
        MENU: {
            CONTEXT_MODE: 1,
            BUBBLE_MODE: 2
        },
        MARK: {
            UNDERLINE: 1,
            HIGHLIGHT: 2
        },
        DISABLED: false,
        DISABLE_OTF: false,
        SAFARI_EXT_REPLY_MSG: "bgCallReply",
        MAXTHON_EXT_REPLY_MSG: "bgCallReply",
        CHROME_DESKTOP_APP_NAME: "ChromeDesktop",
        FF_DESKTOP_APP_NAME: "FireFoxDesktop",
        TRACKING_SOURCE: "webWidget",
        GOOGLE_ANALYTICS_ACCOUNT_ID: "UA-30962642-1",
        GOOGLE_ANALYTICS_CATEGORY: "Widget Activity",
        GOOGLE_ANALYTICS_BUBBLE_CATEGORY: "Widget Bubble Activity",
        GOOGLE_ANALYTICS_CATEGORY_DESKTOP: "Desktop Activity",
        CHECK_EXISTING_TEXT: false,
        PROCESS_ALL_EVENTS: true,
        POLL_USER_INFO_TIMEOUT: 60 * 1000,
        RICHTEXT_CONTROL: "RICHTEXT",
        INPUT_CONTROL: "INPUT",
        TEXTAREA_CONTROL: "TEXTAREA",
        UN_EDITABLE: "UN_EDITABLE",
        MSG_DISPLAYED_CMD: "messageDisplayed",
        SET_STORAGE_VALUES_CMD: "setStorageValues",
        NODE_TYPES: {
            ELEMENT_NODE: 1,
            TEXT_NODE: 3
        },
        BROWSERS: {
            CHROME: 0,
            SAFARI: 1,
            IE: 2,
            FIREFOX: 3,
            MAXTHON: 4,
            WEBKIT: 5
        },
        BROWSERS_DISPLAY_NAME: {
            CHROME: "Chrome",
            SAFARI: "Safari",
            IE: "IE",
            FIREFOX: "Firefox",
            MAXTHON: "Maxthon"
        },
        KEY_CODES: {
            ESCAPE_KEY: 27,
            UPPER_Y_KEY: 89,
            UPPER_Z_KEY: 90,
            LOWER_Y_KEY: 89 + 32,
            LOWER_Z_KEY: 90 + 32,
            MIN_NAV_KEYS: 33,
            MAX_NAV_KEYS: 40,
            PAGE_UP_KEY: 33,
            PAGE_DOWN_KEY: 34,
            END_KEY: 35,
            HOME_KEY: 36,
            LEFT_KEY: 37,
            UP_KEY: 38,
            RIGHT_KEY: 39,
            DOWN_KEY: 40
        },
        IRRELEVANT_TAGS: ["script", "style"],
        ROUNDED_CORNERS: {
            TOP_LEFT: "GRtopLeft",
            TOP: "GRtop",
            TOP_RIGHT: "GRtopRight",
            LEFT: "GRleft",
            RIGHT: "GRright",
            BOTTOM_LEFT: "GRbottomLeft",
            BOTTOM: "GRbottom",
            BOTTOM_RIGHT: "GRbottomRight",
            CENTER: "GRcenter"
        },
        TEXT_INPUT_ENABLED: true,
        ONLY_SPELLCHECK_NODES: true,
        TEXT_INPUT_FIXED: false,
        MAX_Z_INDEX: 2147483647
    }
})();
"use strict";
GS_WEB_WIDGET.appModel = (function() {
    var a = null;
    var d = {},
        e = {};
    d.load = function() {
        a = GS_WEB_WIDGET.namespace("defs");
        f()
    };
    d.getMenuMode = function() {
        return e.MenuMode
    };
    d.isContextMenu = function() {
        return e.MenuMode === a.MENU.CONTEXT_MODE
    };
    d.isBubbleMenu = function() {
        return e.MenuMode === a.MENU.BUBBLE_MODE
    };
    d.isMarkHighlight = function() {
        return e.MarkType === a.MARK.HIGHLIGHT
    };
    var c = function(h) {
        return h === a.MENU.CONTEXT_MODE || h === a.MENU.BUBBLE_MODE
    };
    var g = function(h) {
        return h === a.MARK.UNDERLINE || h === a.MARK.HIGHLIGHT
    };
    var b = function() {
        if (e.MenuMode === a.MENU.BUBBLE_MODE) {
            e.MarkType = a.MARK.HIGHLIGHT
        } else {
            e.MarkType = a.MARK.UNDERLINE
        }
    };
    var f = function() {
        var h = [{
            name: "ForceUseHttps",
            defaultValue: false
        }, {
            name: "DebugToConsole",
            defaultValue: a.DEBUG_TO_CONSOLE
        }, {
            name: "ApiKey",
            defaultValue: null
        }, {
            name: "TrackingSource",
            defaultValue: a.TRACKING_SOURCE
        }, {
            name: "AbType",
            defaultValue: null
        }, {
            name: "GaAccountId",
            defaultValue: a.GOOGLE_ANALYTICS_ACCOUNT_ID
        }, {
            name: "GaCategory",
            defaultValue: a.GOOGLE_ANALYTICS_CATEGORY
        }, {
            name: "CheckExistingText",
            defaultValue: a.CHECK_EXISTING_TEXT
        }, {
            name: "LastPhraseInEnglish",
            defaultValue: null
        }, {
            name: "SourceUrl",
            defaultValue: ""
        }, {
            name: "MenuMode",
            defaultValue: a.MENU.CONTEXT_MODE,
            validationFunc: c,
            setCompleteFunc: b
        }, {
            name: "ContactGingerText",
            defaultValue: a.CORRECTED_BY_GINGER
        }, {
            name: "ContactGingerUrl",
            defaultValue: a.CONTACT_GINGER_URL_ITEM
        }, {
            name: "DisableOTF",
            defaultValue: false
        }, {
            name: "CorrectionStyle",
            defaultValue: 1
        }, {
            name: "MarkType",
            defaultValue: a.MARK.UNDERLINE,
            validationFunc: g
        }, {
            name: "AllowShowMessages",
            defaultValue: false
        }, {
            name: "IsFirstTimeInstallation",
            defaultValue: false
        }, {
            name: "LocalStorageViaDOM",
            defaultValue: false
        }, {
            name: "MessagesInitialParameters",
            defaultValue: null
        }, {
            name: "TextInputEnabled",
            defaultValue: a.TEXT_INPUT_ENABLED
        }, {
            name: "LastKeepAliveTime",
            defaultValue: null
        }, {
            name: "ExtConfigUrl",
            defaultValue: null
        }];
        $.each(h, function(j, k) {
            e[k.name] = k.defaultValue;
            d["set" + k.name] = function(i) {
                if (k.hasOwnProperty("validationFunc")) {
                    if (k.validationFunc(i)) {
                        e[k.name] = i;
                        if (k.hasOwnProperty("setCompleteFunc")) {
                            k.setCompleteFunc()
                        }
                    }
                } else {
                    e[k.name] = i;
                    if (k.hasOwnProperty("setCompleteFunc")) {
                        k.setCompleteFunc()
                    }
                }
                return this
            };
            d["get" + k.name] = function() {
                return e[k.name]
            }
        })
    };
    return d
})();
"use strict";
GS_WEB_WIDGET.context = (function() {
    return {
        LOAD_COMPLETE: "1",
        EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE: "2",
        EXTERNAL_INIT_PARAMS: "3",
        REPLACE_PHRASE: "4",
        IGNORE_TOKEN: "5",
        IGNORE_TOKENS: "6",
        CACHE_NEW_SENTENCE: "7",
        CONTEXT_MENU_CLOSE: "8",
        CONTEXT_MENU_OPENED: "9",
        APPROVE_CORRECTIONS: "10",
        PLUGIN_LOAD_COMPLETE: "11"
    }
})();
GS_WEB_WIDGET.sha1 = (function() {
    var a = a || function(w, s) {
        var d = {},
            x = d.lib = {},
            r = x.Base = function() {
                function e() {}
                return {
                    extend: function(g) {
                        e.prototype = this;
                        var h = new e;
                        g && h.mixIn(g);
                        h.$super = this;
                        return h
                    },
                    create: function() {
                        var g = this.extend();
                        g.init.apply(g, arguments);
                        return g
                    },
                    init: function() {},
                    mixIn: function(g) {
                        for (var h in g) {
                            g.hasOwnProperty(h) && (this[h] = g[h])
                        }
                        g.hasOwnProperty("toString") && (this.toString = g.toString)
                    },
                    clone: function() {
                        return this.$super.extend(this)
                    }
                }
            }(),
            f = x.WordArray = r.extend({
                init: function(g, e) {
                    g = this.words = g || [];
                    this.sigBytes = e != s ? e : 4 * g.length
                },
                toString: function(e) {
                    return (e || z).stringify(this)
                },
                concat: function(g) {
                    var e = this.words,
                        j = g.words,
                        i = this.sigBytes,
                        g = g.sigBytes;
                    this.clamp();
                    if (i % 4) {
                        for (var h = 0; h < g; h++) {
                            e[i + h >>> 2] |= (j[h >>> 2] >>> 24 - 8 * (h % 4) & 255) << 24 - 8 * ((i + h) % 4)
                        }
                    } else {
                        if (65535 < j.length) {
                            for (h = 0; h < g; h += 4) {
                                e[i + h >>> 2] = j[h >>> 2]
                            }
                        } else {
                            e.push.apply(e, j)
                        }
                    }
                    this.sigBytes += g;
                    return this
                },
                clamp: function() {
                    var g = this.words,
                        e = this.sigBytes;
                    g[e >>> 2] &= 4294967295 << 32 - 8 * (e % 4);
                    g.length = w.ceil(e / 4)
                },
                clone: function() {
                    var e = r.clone.call(this);
                    e.words = this.words.slice(0);
                    return e
                },
                random: function(g) {
                    for (var e = [], h = 0; h < g; h += 4) {
                        e.push(4294967296 * w.random() | 0)
                    }
                    return f.create(e, g)
                }
            }),
            c = d.enc = {},
            z = c.Hex = {
                stringify: function(g) {
                    for (var e = g.words, g = g.sigBytes, j = [], i = 0; i < g; i++) {
                        var h = e[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                        j.push((h >>> 4).toString(16));
                        j.push((h & 15).toString(16))
                    }
                    return j.join("")
                },
                parse: function(g) {
                    for (var e = g.length, i = [], h = 0; h < e; h += 2) {
                        i[h >>> 3] |= parseInt(g.substr(h, 2), 16) << 24 - 4 * (h % 8)
                    }
                    return f.create(i, e / 2)
                }
            },
            y = c.Latin1 = {
                stringify: function(g) {
                    for (var e = g.words, g = g.sigBytes, i = [], h = 0; h < g; h++) {
                        i.push(String.fromCharCode(e[h >>> 2] >>> 24 - 8 * (h % 4) & 255))
                    }
                    return i.join("")
                },
                parse: function(g) {
                    for (var e = g.length, i = [], h = 0; h < e; h++) {
                        i[h >>> 2] |= (g.charCodeAt(h) & 255) << 24 - 8 * (h % 4)
                    }
                    return f.create(i, e)
                }
            },
            v = c.Utf8 = {
                stringify: function(g) {
                    try {
                        return decodeURIComponent(escape(y.stringify(g)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return y.parse(unescape(encodeURIComponent(e)))
                }
            },
            u = x.BufferedBlockAlgorithm = r.extend({
                reset: function() {
                    this._data = f.create();
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = v.parse(e));
                    this._data.concat(e);
                    this._nDataBytes += e.sigBytes
                },
                _process: function(i) {
                    var h = this._data,
                        n = h.words,
                        m = h.sigBytes,
                        k = this.blockSize,
                        l = m / (4 * k),
                        l = i ? w.ceil(l) : w.max((l | 0) - this._minBufferSize, 0),
                        i = l * k,
                        m = w.min(4 * i, m);
                    if (i) {
                        for (var j = 0; j < i; j += k) {
                            this._doProcessBlock(n, j)
                        }
                        j = n.splice(0, i);
                        h.sigBytes -= m
                    }
                    return f.create(j, m)
                },
                clone: function() {
                    var e = r.clone.call(this);
                    e._data = this._data.clone();
                    return e
                },
                _minBufferSize: 0
            });
        x.Hasher = u.extend({
            init: function() {
                this.reset()
            },
            reset: function() {
                u.reset.call(this);
                this._doReset()
            },
            update: function(e) {
                this._append(e);
                this._process();
                return this
            },
            finalize: function(e) {
                e && this._append(e);
                this._doFinalize();
                return this._hash
            },
            clone: function() {
                var e = u.clone.call(this);
                e._hash = this._hash.clone();
                return e
            },
            blockSize: 16,
            _createHelper: function(e) {
                return function(g, h) {
                    return e.create(h).finalize(g)
                }
            },
            _createHmacHelper: function(e) {
                return function(g, h) {
                    return t.HMAC.create(e, h).finalize(g)
                }
            }
        });
        var t = d.algo = {};
        return d
    }(Math);
    (function() {
        var d = a,
            c = d.lib,
            f = c.WordArray,
            c = c.Hasher,
            e = [],
            g = d.algo.SHA1 = c.extend({
                _doReset: function() {
                    this._hash = f.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(h, q) {
                    for (var s = this._hash.words, r = s[0], p = s[1], n = s[2], m = s[3], v = s[4], u = 0; 80 > u; u++) {
                        if (16 > u) {
                            e[u] = h[q + u] | 0
                        } else {
                            var t = e[u - 3] ^ e[u - 8] ^ e[u - 14] ^ e[u - 16];
                            e[u] = t << 1 | t >>> 31
                        }
                        t = (r << 5 | r >>> 27) + v + e[u];
                        t = 20 > u ? t + ((p & n | ~p & m) + 1518500249) : 40 > u ? t + ((p ^ n ^ m) + 1859775393) : 60 > u ? t + ((p & n | p & m | n & m) - 1894007588) : t + ((p ^ n ^ m) - 899497514);
                        v = m;
                        m = n;
                        n = p << 30 | p >>> 2;
                        p = r;
                        r = t
                    }
                    s[0] = s[0] + r | 0;
                    s[1] = s[1] + p | 0;
                    s[2] = s[2] + n | 0;
                    s[3] = s[3] + m | 0;
                    s[4] = s[4] + v | 0
                },
                _doFinalize: function() {
                    var j = this._data,
                        k = j.words,
                        m = 8 * this._nDataBytes,
                        l = 8 * j.sigBytes;
                    k[l >>> 5] |= 128 << 24 - l % 32;
                    k[(l + 64 >>> 9 << 4) + 15] = m;
                    j.sigBytes = 4 * k.length;
                    this._process()
                }
            });
        d.SHA1 = c._createHelper(g);
        d.HmacSHA1 = c._createHmacHelper(g)
    })();
    var b = function(c) {
        return a.SHA1(c).toString()
    };
    return {
        hash: b
    }
})();
"use strict";
GS_WEB_WIDGET.guid = (function() {
    var a;
    a = (function(c) {
        function d() {}
        d.generate = function() {
            var e = d._getRandomInt,
                f = d._hexAligner;
            return f(e(32), 8) + "-" + f(e(16), 4) + "-" + f(16384 | e(12), 4) + "-" + f(32768 | e(14), 4) + "-" + f(e(48), 12)
        };
        d._getRandomInt = function(e) {
            if (e < 0) {
                return NaN
            }
            if (e <= 30) {
                return (0 | Math.random() * (1 << e))
            }
            if (e <= 53) {
                return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << e - 30)) * (1 << 30)
            }
            return NaN
        };
        d._getIntAligner = function(e) {
            return function(f, h) {
                var k = f.toString(e),
                    g = h - k.length,
                    j = "0";
                for (; g > 0; g >>>= 1, j += j) {
                    if (g & 1) {
                        k = j + k
                    }
                }
                return k
            }
        };
        d._hexAligner = d._getIntAligner(16);
        d.FIELD_NAMES = ["timeLow", "timeMid", "timeHiAndVersion", "clockSeqHiAndReserved", "clockSeqLow", "node"];
        d.FIELD_SIZES = [32, 16, 16, 8, 8, 48];
        d.genV4 = function() {
            var e = d._getRandomInt;
            return new d()._init(e(32), e(16), 16384 | e(12), 128 | e(6), e(8), e(48))
        };
        d.parse = function(i) {
            var g, h = /^\s*(urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(\})?\s*$/i;
            if (g = h.exec(i)) {
                var e = g[1] || "",
                    f = g[8] || "";
                if (((e + f) === "") || (e === "{" && f === "}") || (e.toLowerCase() === "urn:uuid:" && f === "")) {
                    return new d()._init(parseInt(g[2], 16), parseInt(g[3], 16), parseInt(g[4], 16), parseInt(g[5], 16), parseInt(g[6], 16), parseInt(g[7], 16))
                }
            }
            return null
        };
        d.prototype._init = function() {
            var k = d.FIELD_NAMES,
                j = d.FIELD_SIZES;
            var f = d._binAligner,
                h = d._hexAligner;
            this.intFields = new Array(6);
            this.bitFields = new Array(6);
            this.hexFields = new Array(6);
            for (var e = 0; e < 6; e++) {
                var g = parseInt(arguments[e] || 0);
                this.intFields[e] = this.intFields[k[e]] = g;
                this.bitFields[e] = this.bitFields[k[e]] = f(g, j[e]);
                this.hexFields[e] = this.hexFields[k[e]] = h(g, j[e] / 4)
            }
            this.version = (this.intFields.timeHiAndVersion >> 12) & 15;
            this.bitString = this.bitFields.join("");
            this.hexString = this.hexFields[0] + "-" + this.hexFields[1] + "-" + this.hexFields[2] + "-" + this.hexFields[3] + this.hexFields[4] + "-" + this.hexFields[5];
            this.urn = "urn:uuid:" + this.hexString;
            return this
        };
        d._binAligner = d._getIntAligner(2);
        d.prototype.toString = function() {
            return this.hexString
        };
        d.prototype.equals = function(f) {
            if (!(f instanceof d)) {
                return false
            }
            for (var e = 0; e < 6; e++) {
                if (this.intFields[e] !== f.intFields[e]) {
                    return false
                }
            }
            return true
        };
        d.genV1 = function() {
            var i = new Date().getTime(),
                h = d._state;
            if (i != h.timestamp) {
                if (i < h.timestamp) {
                    h.sequence++
                }
                h.timestamp = i;
                h.tick = d._getRandomInt(4)
            } else {
                if (Math.random() < d._tsRatio && h.tick < 9984) {
                    h.tick += 1 + d._getRandomInt(4)
                } else {
                    h.sequence++
                }
            }
            var k = d._getTimeFieldValues(h.timestamp);
            var g = k.low + h.tick;
            var j = (k.hi & 4095) | 4096;
            h.sequence &= 16383;
            var f = (h.sequence >>> 8) | 128;
            var e = h.sequence & 255;
            return new d()._init(g, k.mid, j, f, e, h.node)
        };
        d.resetState = function() {
            d._state = new d._state.constructor()
        };
        d._tsRatio = 1 / 4;
        d._state = new function b() {
            var e = d._getRandomInt;
            this.timestamp = 0;
            this.sequence = e(14);
            this.node = (e(8) | 1) * 1099511627776 + e(40);
            this.tick = e(4)
        };
        d._getTimeFieldValues = function(f) {
            var e = f - Date.UTC(1582, 9, 15);
            var g = ((e / 4294967296) * 10000) & 268435455;
            return {
                low: ((e & 268435455) * 10000) % 4294967296,
                mid: g & 65535,
                hi: g >>> 16,
                timestamp: e
            }
        };
        d.makeBackwardCompatible = function() {
            var e = d.generate;
            d.generate = function(f) {
                return (f && f.version == 1) ? d.genV1().hexString : e.call(d)
            };
            d.makeBackwardCompatible = function() {}
        };
        d.overwrittenUUID = c;
        return d
    })(a);
    return a
})();
"use strict";
GS_WEB_WIDGET.managerCreator = (function() {
    var a = null;
    var c = function() {
        a = GS_WEB_WIDGET.namespace("guid")
    };
    var b = function(g, d) {
        var f = d.namespace || null;
        var e = (function() {
            var u = d.hasOwnProperty("primaryKeyIndex") ? d.primaryKeyIndex : null,
                t = d.initialObjectFactory || null;
            var s = d.hashFunction || null,
                B = d.generateGuid || false;
            var w = {},
                x = {},
                l = {};
            var y = $.isArray(u);
            var i = (function n() {
                if (y) {
                    var C = [];
                    $.each(u, function(E, D) {
                        C.push(g[D])
                    });
                    return C.join("{PK_SEP}")
                } else {
                    return g[u]
                }
            })();
            var m = function(D) {
                if (y) {
                    var C = [];
                    $.each(u, function(F, E) {
                        C.push(D[g[E]])
                    });
                    return C.join("{PK_VAL_SEP}")
                } else {
                    return D[g[u]]
                }
            };
            var p = function(C) {
                return !!w[m(C)]
            };
            var q = function(C) {
                return p(C) ? w[m(C)] : null
            };
            var o = function(C) {
                return s && x[C] ? x[C] : null
            };
            var A = function(C) {
                return l[C] ? l[C] : null
            };
            var r = function(C) {
                return p(C) ? w[m(C)] : k(C)
            };
            var k = function(D) {
                var G = t ? t() : null;
                var F = G ? $.extend({}, G) : {},
                    E = {};
                F[i] = m(D);
                $.each(g, function(I, J) {
                    if (D.hasOwnProperty(J)) {
                        F[J] = D[J]
                    }
                    var K = "set" + J;
                    E[K] = F.hasOwnProperty(K) ? F[K] : function(L) {
                        F[J] = L;
                        return this
                    };
                    var H = "get" + J;
                    E[H] = F.hasOwnProperty(H) ? F[H] : function() {
                        return F[J]
                    }
                });
                E.getHashCodeForItem = function() {
                    return s ? s(F[i]) : null
                };
                E.getGuid = function() {
                    return typeof F.guid !== "undefined" ? F.guid : null
                };
                E.remove = function() {
                    delete w[F[i]];
                    if (s) {
                        delete x[s(F[i])]
                    }
                    if (typeof F.guid !== "undefined") {
                        delete l[F.guid]
                    }
                };
                E.print = function(H) {
                    var J = "",
                        I = [];
                    if (H) {
                        J = JSON.stringify(F)
                    } else {
                        $.each(g, function(L, O) {
                            var K = "get" + O,
                                M = E[K]();
                            try {
                                I.push(O + "=" + JSON.stringify(M))
                            } catch (N) {}
                        });
                        J = I.join(", ")
                    }
                    return J
                };
                w[F[i]] = E;
                if (s) {
                    x[s(F[i])] = E
                }
                if (B) {
                    var C = a.generate();
                    F.guid = C;
                    l[C] = E
                }
                return E
            };
            var h = function(C) {
                $.each(w, function(D, E) {
                    if (typeof C === "function") {
                        C(E)
                    }
                })
            };
            var j = function() {
                var C = false;
                $.each(w, function(D, E) {
                    C = true;
                    return false
                });
                return C
            };
            var v = function() {
                var C = 0;
                h(function(D) {
                    C++
                });
                return C
            };
            var z = function() {
                w = {};
                x = {};
                l = {}
            };
            return {
                isItemExist: p,
                getOrCreateItem: r,
                getItem: q,
                getItemByHash: o,
                getItemByGuid: A,
                iterateItems: h,
                hasItems: j,
                getItemsCount: v,
                deleteAllItems: z
            }
        })();
        if (f) {
            GS_WEB_WIDGET[f] = e
        }
        return e
    };
    return {
        load: c,
        create: b
    }
})();
"use strict";
GS_WEB_WIDGET.tokensManagerInitializer = (function() {
    var c = null,
        a = null;
    var b = function() {
        c = GS_WEB_WIDGET.namespace("managerCreator");
        a = c.create(["Text", "Correct", "Ignored", "Pending"], {
            namespace: "tokensCacheManager",
            primaryKeyIndex: 0
        });
        a.isTokenIgnored = function(d) {
            var e = a.getItem({
                Text: d
            });
            return e ? e.getIgnored() : false
        }
    };
    return {
        load: b
    }
})();
"use strict";
GS_WEB_WIDGET.phraseManagerInitializer = (function() {
    var g = null,
        e = null,
        b = null,
        a = null;
    var f = function c() {
        var j = function(l) {
            return l && l.getType() === 4
        };
        var i = function() {
            var n = function() {
                if (!this.firstSuggestion) {
                    var p = this.getShouldReplace() === true || j(this),
                        o = this.getSuggestions();
                    this.firstSuggestion = this.getMistakeText();
                    if (o && o.length > 0 && p) {
                        this.firstSuggestion = o[0].suggestion
                    }
                }
                return this.firstSuggestion
            };
            var m = function() {
                var p = 0,
                    q = this.getShouldReplace() === true || j(this),
                    o = this.getSuggestions();
                if (o && o.length > 0 && q) {
                    p = o[0].learningCategory
                }
                return p
            };
            var l = function() {
                var o = "";
                switch (this.getType()) {
                    case 1:
                        o = "Spelling";
                        break;
                    case 2:
                        o = "Misused";
                        break;
                    case 3:
                        o = "Grammar";
                        break;
                    case 4:
                        o = "Synonym";
                        break
                }
                return o
            };
            return {
                getFirstSuggestion: n,
                getFirstSuggestionLearningCategory: m,
                getTypeDescription: l
            }
        };
        var h = g.create(["MistakeText", "Index", "Start", "Length", "Suggestions", "Type", "TypeDescription", "Confidence", "ShouldReplace", "CorrectionId", "FirstSuggestion", "FirstSuggestionLearningCategory", "FragmentStart", "FragmentEnd", "Learning"], {
            primaryKeyIndex: [0, 1],
            initialObjectFactory: i
        });
        h.getCorrection = function(m) {
            var l = m ? m.split(":") : null;
            return l && l.length > 1 ? h.getItem({
                MistakeText: l[0],
                Index: l[1]
            }) : null
        };
        h.isSynonym = j;
        var k = function() {
            return h
        };
        return {
            getCorrectionManager: k
        }
    };
    var d = function() {
        a = GS_WEB_WIDGET.namespace("defs");
        g = GS_WEB_WIDGET.namespace("managerCreator");
        b = GS_WEB_WIDGET.namespace("tokensCacheManager");
        e = g.create(["CleanText", "TextToCheck", "CorrectionManager", "SpellingOnly", "Pending"], {
            namespace: "phraseManager",
            primaryKeyIndex: 0,
            initialObjectFactory: f
        });
        e.getPhrase = function(h) {
            return e.getItem({
                CleanText: h
            })
        };
        e.createCorrectionId = function(i, h) {
            return i + ":" + h
        };
        e.parseCorrectionId = function(i) {
            var h = i.split(":");
            return h && h.length > 1 ? {
                mistakeText: h[0],
                indexInPhrase: h[1]
            } : null
        };
        e.getCorrectedPhraseInfoFromPhrase = function(k, r) {
            var m = "",
                q = k.getCleanText();
            var h = r.fragmentStart || 0,
                j = r.fragmentEnd || q.length;
            var n = h;

            function l(u, s) {
                var t = q.substr(u, s - u);
                m += t;
                n += t.length
            }
            var o = k.getCorrectionManager();

            function p() {
                var s = [],
                    t = 0;
                o.iterateItems(function(w) {
                    var v = w.getStart(),
                        u = !!r.ignoreAll || b.isTokenIgnored(w.getMistakeText());
                    if (!u && v >= h && v <= j) {
                        s.push({
                            correction: w,
                            index: t
                        })
                    }
                    t++
                });
                return s
            }
            var i = p();
            $.each(i, function(v, D) {
                var y = D.correction,
                    w = D.index;
                var C = y.getStart(),
                    s = y.getLength(),
                    t = y.getFirstSuggestion();
                var x = y.getSuggestions(),
                    z = x && x.length > 0;
                var u = o.isSynonym(y);
                var B = !u || !!r.markSynonym;
                l(n, C);
                var A = [];
                if (!z) {
                    A.push(a.NO_SUGGESTIONS_MARK_CLASS)
                }
                if (u) {
                    A.push(a.SYNONYM_MARK_CLASS)
                }
                if (r.correctionClass) {
                    A.push(r.correctionClass)
                }
                if (B) {
                    m += "<span class='" + A.join(" ") + "' " + a.CORRECTION_INDEX_ATTR + "='" + w + "'>" + t + "</span>"
                } else {
                    m += y.getMistakeText()
                }
                n += s
            });
            l(n, j + 1);
            return m
        };
        e.getCorrectionsInFragmentByCorrectionId = function(j, n, i) {
            var l = j.getCorrectionManager();
            var k = l.getCorrection(n);
            var h = k.getFragmentStart(),
                m = k.getFragmentEnd();
            if (j.getSpellingOnly()) {
                h = k.getStart();
                m = h + k.getLength()
            }
            var o = [];
            l.iterateItems(function(s) {
                var r = s.getStart(),
                    p = r + s.getLength() - 1,
                    q = b.isTokenIgnored(s.getMistakeText());
                if (h <= r && r <= m && h <= p && p <= m && (!q || !!i)) {
                    o.push(s)
                }
            });
            return o
        };
        e.getNumberOfCorrectionsInPhrase = function(h) {
            var i = h.getCorrectionManager();
            return i.getItemsCount()
        }
    };
    return {
        load: d
    }
})();
GS_WEB_WIDGET.contextMenuManager = (function() {
    var i = null,
        ae = null,
        O = null,
        L = null,
        m = null,
        h = null,
        Y = null,
        k = null;
    var B = null,
        ab = null,
        al = null,
        ak = null,
        P = null;
    var C = null,
        x = null,
        K = null,
        y = null,
        ai = false,
        u = null,
        U = false,
        I = null,
        R = null,
        f = null,
        aj, e, c, J, T, r = null,
        v = "mouseleave",
        t = {
            MIN_WIDTH: 124,
            MARGIN: 20
        },
        l, p, d = "GRcontextMenuIFrame",
        N = "GRmenuList",
        H = "GRcontact",
        D = "GRignore",
        q = "GRspaceAddition",
        ag = "GRseparator",
        E = "GRindex",
        A = ".&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(add space)",
        ah = "GRmenuContact";
    var X = function() {
        i = GS_WEB_WIDGET.namespace("initParams");
        O = GS_WEB_WIDGET.namespace("logger");
        ae = GS_WEB_WIDGET.namespace("defs");
        L = GS_WEB_WIDGET.namespace("appModel");
        m = GS_WEB_WIDGET.namespace("bookmark");
        h = GS_WEB_WIDGET.namespace("browser");
        Y = GS_WEB_WIDGET.namespace("trackingManager");
        k = GS_WEB_WIDGET.namespace("API");
        B = GS_WEB_WIDGET.namespace("protocol");
        ab = GS_WEB_WIDGET.namespace("staticUtils");
        al = GS_WEB_WIDGET.namespace("utils");
        al.display = GS_WEB_WIDGET.namespace("utils.display");
        ak = GS_WEB_WIDGET.namespace("context");
        x = GS_WEB_WIDGET.namespace("phraseManager");
        C = GS_WEB_WIDGET.namespace("mainController");
        P = GS_WEB_WIDGET.namespace("messagesManager");
        af()
    };
    var af = function() {
        r = "click contextmenu mousedown " + (h.isFirefox ? "DOMMouseScroll" : "mousewheel");
        if (h.isIeBefore9) {
            t.MIN_WIDTH = 120
        }
        var an = false,
            ap = false,
            am = false;

        function ao() {
            if (!an || !ap || am) {
                return
            }
            am = true;
            al.appendEmptyIFrame(document, function(ar, aq) {
                aj = ar;
                aj.id = d;
                aj.scrolling = "no";
                e = $(aj, document);
                e.css({
                    "z-index": ae.MAX_Z_INDEX,
                    height: 0,
                    width: 0,
                    "background-color": "transparent"
                });
                c = aq;
                J = c.body;
                T = $(J, c);
                al.attachStyleNode(c, Z());
                K = al.display.createRoundedElement("div", c, {
                    topLeft: {
                        height: 7,
                        width: 8
                    },
                    top: {
                        height: 7
                    },
                    topRight: {
                        height: 7,
                        width: 8
                    },
                    left: {
                        width: 8
                    },
                    right: {
                        width: 8
                    },
                    bottomLeft: {
                        height: 19,
                        width: 10
                    },
                    bottom: {
                        height: 7
                    },
                    bottomRight: {
                        height: 19,
                        width: 10
                    }
                });
                T.append(K);
                K.id = N;
                y = T.find(K);
                y.mousedown(b);
                y.focusout(W);
                y.mouseenter(G);
                y.mouseleave(S);
                I = c.createElement("ul");
                K.appendChild(I);
                R = $(I, c);
                l = L.getContactGingerUrl();
                p = L.getContactGingerText()
            })
        }
        $(function() {
            an = true;
            ao()
        });
        $(ak).bind(ak.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(aq, ar) {
            ap = true;
            ao()
        })
    };
    var o = function(an, am) {
        u = am;
        if (ai) {
            ac()
        }
        var ao = M(document, an, u);
        ad(ao.left, ao.top);
        V();
        Y.reportOpenContextMenu({
            token: u.text()
        });
        $(ak).trigger(ak.CONTEXT_MENU_OPENED, {})
    };
    var M = function(aA, ap, ao) {
        var az = ap.target.ownerDocument,
            au = al.display.getDocumentOffset(az, aA, false),
            aC = ao[0],
            aB = al.display.getOffsetInRootDoc(aC),
            ar = ao.height(),
            an = $(window),
            at = al.display.getDocScroll(aA),
            av = an.width(),
            aD = an.height(),
            ay = y.width(),
            am = y.height(),
            aw, ax, aq = t.MARGIN;
        au.left += ap.clientX;
        au.top = aB.top;
        au.left -= at.left;
        au.top -= at.top;
        aw = au.left + ay + aq;
        if (aw > av) {
            au.left -= ay
        }
        ax = au.top + ar + am + aq;
        if (ax > aD) {
            au.top -= am
        } else {
            au.top += ar + 3
        }
        return au
    };
    var ad = function(an, am) {
        aj.style.position = "fixed";
        aj.style.left = an + "px";
        aj.style.top = am + "px"
    };
    var a = function(an, am) {
        f = am;
        while (I.lastChild) {
            I.removeChild(I.lastChild)
        }
        var ao = true;
        $.each(an, function(ar, au) {
            var av = au.hasOwnProperty("definition") && au.definition === ae.ACCEPT_SPACE_DEFINITION,
                at = av ? A : au.suggestion;
            if (at === ae.IGNORE_ITEM) {
                ao = false;
                R.append('<li id="' + ag + '"></li>')
            }
            var aq = ao ? " " + E + '="' + ar + '" ' : " ";
            R.append("<li" + (av ? ' class="' + q + '"' : "") + (at === ae.IGNORE_ITEM ? ' id="' + D + '" ' : "") + aq + ">" + at + "</li>")
        });
        R.append('<li><a id="' + H + '" href="' + l + '" title="' + ae.CONTACT_GINGER_TOOLTIP + '" target="_blank">' + p + "</a></li>");
        R.find("#" + H).hover(function() {
            $("." + ae.ROUNDED_CORNERS.BOTTOM_LEFT, c).addClass("hover");
            $("." + ae.ROUNDED_CORNERS.BOTTOM_RIGHT, c).addClass("hover");
            y.addClass(ah)
        }, function() {
            $("." + ae.ROUNDED_CORNERS.BOTTOM_LEFT, c).removeClass("hover");
            $("." + ae.ROUNDED_CORNERS.BOTTOM_RIGHT, c).removeClass("hover");
            y.removeClass(ah)
        }).click(function(aq) {
            aq.preventDefault();
            ac();
            Y.reportClickGingerLink();
            window.open($(this).attr("href"))
        });
        var ap = y.width();
        if (ap <= t.MIN_WIDTH) {
            y.width(t.MIN_WIDTH)
        } else {
            $("#" + N + " #" + ag).width(ap)
        }
    };
    var V = function() {
        if (!ai) {
            var am = [{
                selector: document,
                eventName: v + " " + r,
                callback: W
            }];
            al.misc.iterateIFrames(function(ao, an) {
                if (c !== an) {
                    am.push({
                        selector: an,
                        eventName: r,
                        callback: W
                    })
                }
            }, document);
            al.unbindAndBindEvents(am);
            e.css({
                width: y.outerWidth()
            });
            e.animate({
                height: y.outerHeight()
            }, {
                duration: 100,
                complete: function() {
                    P.showOpenMenuMessage({
                        node: u[0],
                        iFrame: aj
                    })
                }
            })
        }
        ai = true
    };
    var ac = function() {
        var am = [{
            selector: document,
            eventName: v + " " + r,
            callback: W
        }];
        al.misc.iterateIFrames(function(ao, an) {
            if (c !== an) {
                am.push({
                    selector: an,
                    eventName: r,
                    callback: W
                })
            }
        }, document);
        al.unbindEvents(am);
        e.animate({
            height: 0
        }, 50, "linear", function() {
            if (!ai) {
                e.css({
                    width: 0
                })
            }
        });
        ai = false;
        $(ak).trigger(ak.CONTEXT_MENU_CLOSE)
    };
    var z = function() {
        ac();
        Y.reportContextMenuCanceled({
            token: u.text()
        })
    };
    var W = function(an) {
        var av = an.target,
            aw = an.type,
            ao = $(window),
            aq = ao.width(),
            am = ao.height();
        if (O.loggerOn()) {
            O.logDebug("Context menu/handleFocusOut: " + JSON.stringify({
                type: aw,
                nodeName: av.nodeName,
                nodeValue: av.nodeValue
            }))
        }
        var au = an.pageX,
            ap = an.pageY,
            ax = al.getDocumentContext(an.target),
            at = al.display.getDocumentOffset(ax, document, false),
            ay = al.display.getDocScroll(ax);
        if (ax !== document) {
            au -= ay.left;
            ap -= ay.top
        } else {
            (function ar() {
                if (au !== an.clientX && ay.left === 0 || ap !== an.clientY && ay.top === 0) {
                    au = an.clientX;
                    ap = an.clientY
                }
            })()
        }
        au += at.left;
        ap += at.top;
        if (av.nodeName.toLowerCase() === "ul" || av.id === ag || av.id === N || av.className.indexOf(ae.MARK_LINE_CLASS) != -1 || av.className.indexOf(ae.MARK_HIGHLIGHT_LEFT_CLASS) != -1 || av.className.indexOf(ae.MARK_HIGHLIGHT_TOP_CLASS) != -1 || av.className.indexOf(ae.MARK_HIGHLIGHT_RIGHT_CLASS) != -1 || av.className.indexOf(ae.MARK_HIGHLIGHT_BOTTOM_CLASS) != -1 || (aw === "mouseleave" && 0 < au && au < aq && 0 < ap && ap < am)) {
            return false
        }
        if (Q()) {
            z()
        }
        return !(aw === "contextmenu")
    };
    var b = function(ao) {
        var ap = ao.target;
        if (O.loggerOn()) {
            O.logDebug("Context menu/handleMouseDown: " + JSON.stringify({
                type: ao.type,
                nodeName: ao.target.nodeName,
                nodeValue: ao.target.nodeValue
            }))
        }
        if (ap.nodeName.toLowerCase() === "li") {
            if (f && ap.id !== ag) {
                var aq = ap.id === D ? ae.IGNORE_ITEM : $(ap).attr("class") === q ? ae.SPACE_ADDITION_REPLACE_HTML : ap.innerHTML;
                var am = $(ap),
                    an = am.attr(E);
                if (f(aq, an)) {
                    ac()
                }
            }
        }
        return !(al.isChild(I, ao.target, true))
    };
    var G = function(am) {
        if (O.loggerOn()) {
            O.logDebug("Context menu/handleMouseEnter: " + JSON.stringify({
                type: am.type,
                nodeName: am.target.nodeName,
                nodeValue: am.target.nodeValue
            }))
        }
        U = true
    };
    var S = function(am) {
        if (O.loggerOn()) {
            O.logDebug("Context menu/handleMouseLeave: " + JSON.stringify({
                type: am.type,
                nodeName: am.target.nodeName,
                nodeValue: am.target.nodeValue
            }))
        }
        U = false
    };
    var aa = function(am) {
        if (O.loggerOn()) {
            O.logDebug("Context menu/handleKey: " + JSON.stringify({
                type: am.type,
                nodeName: am.target.nodeName,
                nodeValue: am.target.nodeValue
            }))
        }
        if (am.keyCode == ae.KEY_CODES.ESCAPE_KEY) {
            z()
        } else {
            switch (am.keyCode) {
                case ae.KEY_CODES.UP_KEY:
                    break;
                case ae.KEY_CODES.DOWN_KEY:
                    break;
                case ae.KEY_CODES.HOME_KEY:
                    break;
                case ae.KEY_CODES.END_KEY:
                    break
            }
        }
        return false
    };
    var w = function() {
        return U
    };
    var Z = function() {
        var an = L.getSourceUrl();
        var am = h.isIeBefore8 ? {
            menuBg: an + "menu-bg.gif",
            corners: an + "corners-2.png",
            cornersHover: an + "corners-hover.png",
            bottomLineMid: an + "bottom-line-mid.png",
            bottomLineMidHover: an + "bottom-line-mid.png",
            ignore: an + "menu-ignore.gif"
        } : {
            corners: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAg9JREFUeNrMlc8rRFEUx899973xPGYYMZGFBZrkR8gGUVI2CknJQhFlbWWh/AnYiShFSomQsrBjZWE0k4WUYiEbycKPxsx7zhlzzZ3X+PGmWTj1nXfe/fF533vPe3PZbLABbFGPGkC1oZona89c1DgXagzj5QR1jNrC9pA8SbFBllEB1DSqHaVJfZR3oGZQQQQvyhOZ5GgX1cOZBjUF/VDp6YQSow5UxcWoM2KGrbuXc7h6OoLQ4zZYlknNO+isXwaRk7FczQe9ZfNQpPsTT8Kgq4Uh2u5fL2D/ZhKeIw90u4SwCQLRngTIyVD5OhTqFUlrTQUSsM3rEeGsmvZokDJajh3yUxRnV0ONt0/cDivx6oA/rwucRlV+t0jbVPxppezgduq78db3HV9dtarIzM+1OgoJBBLIAkgDlQJk/jNQ1EwTpGTIkZIZR2iI20FWNC2QlglHTMolkHNHn58zsy8tXUc8U44SoHfaMyq/049ESexSmEAX9IfPmAWRqLPlcZWL9FKNnwz1usbh7T3iCKRrLpEe04u5Rlmu7gKusNgb/hfR2Jysr0Nmg0CnqBVarc9txAZQBX8S5wx8HkPs0AqdceJTGUcdqlyB0nw3eA0dVCyJiS+pLBUfUmBkQ2meG/PY1D2EjCeVH6M75oyxES8OJv0SqwgZTXXSUsmoo4WAVIkUk+mYXkA1yRCKDwEGAFCU40/9Q//uAAAAAElFTkSuQmCC",
            cornersHover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATRJREFUeNpi7Ltk+J8BCCSkhRhIBf///Wd4+fw9iPmJBSb47/9/0g1C0oNk0D/SDWLAYtBfcgzC6qJ/VPLa3/9/qWTQP3K8xkCdMGLAatA/qhn0d2BdxMzARCuDyIh+xv8II0DkbyBm/UOGixj/M8KYv0AGXQViAwagg/4ykmYYy39mGPMmyKAjIINY/zIz/GL6TZJBHP9YYczDoJBaDGKx/2cDOxWUMInBILUgPVCwjKlQ99wpIGMuyLf8/7gZmP4xAjPwP7wYpAakFhpCc4FmXGaEZbz+y0bbgZQHqIz5yvCD4ev/Hwx/GFBjkhUYN1yM7AzcDBxAQ8DGbAIa4o8S/UDgDXEZYwIPAycDDyMnoSBaADQkERGDaEUs0GWWQCoZiG2AWB1N82Vo5IC8cxZZAiDAAOA+uLs5RgYbAAAAAElFTkSuQmCC",
            bottomLineMid: "data:image/png;base64,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",
            bottomLineMidHover: "data:image/png;base64,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",
            ignore: "data:image/gif;base64,R0lGODlhHwAeAMQAAJiYmNjY2BEREaamptLS0oeHh+3t7fj4+Lq6uuXl5dzc3PHx8b+/v1VVVXd3d8zMzDMzM7Ozs0RERN/f37m5uampqevr68vLyyIiIq2trcbGxqCgoGZmZgAAAP7+/gAAACH5BAAAAAAALAAAAAAfAB4AAAX/oPZ4ZGmeaOpljOq+ZKbBNCrXeDynCbW4iV8iYbp5CBrNYjHJbAgkS4A01Wwej82zdGMMIpuAdXALDAaMxIaylTEypYhmEh6ErUh4hEHYLLQUMRksHnxJAWtOAV4HBAMHMg+PTkRHGwwLDxkHGhELGQN0AXIeagkadjOoByV9GwNEAVAHrBkBrFQ/D1AeC1MmUrgkvh4HA785KpATpskvfQOBzi8Tt9MoHA7XLxgN2y4YHN8q4eMp5SkIEgouCOwICCboBRwcCgoVGB0FJBcAJP84dHDgoMO+EuUaCIDQAYBAAeUACBDQAEEHCQfDNcBQAgKHCg0FNBRIjyOEBgU6ZCgwKIEEhpfeUNYDcFEfAIUGCggwEM7BTn3xPKRsoMABBgMcICjAIAAkAI8eLCLgIFIcVQMlUnYQEA8APwNYMQDACpCdA34eFPwz4Y8sCbUeDAhYa45nBanmsm5tmbdEhbF5QwAAOw==",
            menuBg: "data:image/gif;base64,R0lGODlhAgACAIAAAAAAAAAAACH5BAEAAAAALAAAAAACAAIAAAIChFEAOw=="
        };
        var ao = ["body{margin: 0px; overflow: hidden;}", "#" + N + " ul {list-style-type:none; width:116px; padding:6px 6px 0px 6px; margin:0px; -webkit-margin-before: 0px; -webkit-margin-after: 0em; -webkit-margin-start: 0px; -webkit-margin-end: 0px;}", "#" + N + " ul li {font:12px/18px tahoma; color:#484848; cursor:pointer;}", "#" + N + " ul li:first-child {font-weight:bold;}", "#" + N + " ul li:hover {color:#000;}", "#" + N + " #" + ag + "{background:#e5e5e5; border-top:3px solid #ffffff; border-bottom:3px solid #ffffff; width:100%; height:1px; cursor:default; line-height:0px; font-size:0px;}", "#" + N + " #" + D + ' {color: transparent;height:15px; margin-bottom: 3px; background:url("' + am.ignore + '") 0 0 no-repeat #ffffff; overflow:hidden;}', "#" + N + " #" + D + ":hover {background-position:0 -15px;}", "#" + N + " ul li #" + H + " {display:block; height:19px; font:11px/18px tahoma; color:#fff; text-decoration:none; text-align:center;}", "#" + N + " ul li #" + H + ":hover {background-position:left bottom;}", "#" + N + " ul li #" + H + " strong {font-size:12px; color:#fff;}"];
        if (h.isIeBefore9) {
            ao = ao.concat(["." + ae.ROUNDED_CORNERS.BOTTOM_LEFT + '{background:url("' + am.bottomLineMid + '") left bottom repeat-x;}', "." + ae.ROUNDED_CORNERS.BOTTOM_RIGHT + '{background:url("' + am.bottomLineMid + '") left bottom repeat-x;}', "." + ae.ROUNDED_CORNERS.BOTTOM_LEFT + '.hover {background:url("' + am.bottomLineMidHover + '")}', "." + ae.ROUNDED_CORNERS.BOTTOM_RIGHT + '.hover {background:url("' + am.bottomLineMidHover + '")}', "#" + N + "{background-color: #ffffff; border:2px solid #8ed231;}", "#" + N + " ul {position: relative;}", "#" + N + " ul li #" + H + ' {background:url("' + am.bottomLineMid + '") left bottom repeat-x;}', "#" + N + "." + ah + " ul li #" + H + ' {background-image: url("' + am.bottomLineMidHover + '");}', "#" + N + " #" + D + " {height:18px; color:#808080; background-image:none;}", "#" + N + " #" + D + ":hover {color:#000000;}"])
        } else {
            ao = ao.concat(["#" + N + '{border:2px solid #8ed231; background:#ffffff url("' + am.bottomLineMid + '") left bottom repeat-x;}', "#" + N + "." + ah + '{background-image: url("' + am.bottomLineMidHover + '");}'])
        }
        return ao.join(" ")
    };
    var F = function(am) {
        if (ae.TOP_MENU_BINDING) {
            $(am).bind("contextmenu", n)
        }
        $(am).bind("scroll", g)
    };
    var j = function(am) {
        $(am).bind("contextmenu", n)
    };
    var s = function(am) {
        $(am).unbind("contextmenu", n)
    };
    var Q = function() {
        return ai
    };
    var g = function(am) {
        if (Q()) {
            ac()
        }
    };
    var n = function(an) {
        var ar = null,
            am = null,
            ap = null;
        var aw = function(az, aB, aD) {
            var aC = function(aG, aF) {
                var aE = aF.getAttribute(ae.UI_PHRASE_GUID_ATTR);
                ar = aG.uiPhraseManager.getItemByGuid(aE);
                ap = aG.uiPhraseManager.getPhraseFromUiPhrase(ar);
                am = aF.getAttribute(ae.SPAN_CONTEXT_ID);
                return ap ? ap.getCorrectionManager().getCorrection(am) : null
            };
            var aA = function() {
                ac();
                var aH = C.getControlByRichText(az);
                var aF = aC(aH, aD);
                if (!aF) {
                    if (O.loggerOn()) {
                        O.logDebug("didn't find context menu correction for target: " + $(aD).attr("id"))
                    }
                }
                var aE = aF && aF.getSuggestions();
                if (!aE.length) {
                    aE.push({
                        suggestion: ae.NO_SUGGESTIONS_ITEM
                    })
                }
                var aG = [].concat(aE, {
                    suggestion: ae.IGNORE_ITEM
                });
                a(aG, function(aS, aN) {
                    var aO = aH.getTextInputManager(),
                        aL = aD.firstChild.nodeValue;
                    if (aS === ae.NO_SUGGESTIONS_ITEM) {
                        return false
                    } else {
                        if (aS === ae.IGNORE_ITEM) {
                            var aK = (aG && $.isArray(aG) && aG.length > 0) ? aG[0].suggestion : null;
                            $(ak).trigger(ak.IGNORE_TOKEN, {
                                token: aL,
                                firstSuggestion: aK,
                                control: aH
                            });
                            Y.reportIgnoreCorrection({
                                token: aL,
                                correctedToken_suggestion_0: aK
                            })
                        } else {
                            var aM = aS === ae.SPACE_ADDITION_REPLACE_HTML;
                            if (h.isIe) {
                                aD.firstChild.nodeValue = aM ? ae.SPACE_ADDITION_REPLACE_TEXT : aS
                            } else {
                                aD.innerHTML = aS
                            }
                            if (O.loggerOn()) {
                                O.logDebug("Moving caret to end of corrected word...")
                            }
                            if (!!aO) {
                                aO.populateCorrection(aD)
                            } else {
                                var aQ = ab.alignLeafPos(az, {
                                    node: aD.firstChild,
                                    offset: aM ? ae.SPACE_ADDITION_REPLACE_TEXT.length : aS.length
                                }, ab.ALIGN_END);
                                m.selectRange(az, aQ)
                            }
                            if (!aM) {
                                var aJ = x.parseCorrectionId(am).indexInPhrase,
                                    aR = {},
                                    aI = ap.getCorrectionManager(),
                                    aP = aI ? aI.getCorrection(am) : null;
                                aR[aJ] = {
                                    replacement: aS,
                                    correctionId: am
                                };
                                $(ak).trigger(ak.CACHE_NEW_SENTENCE, {
                                    control: aH,
                                    tokensToReplaceMap: aR,
                                    uiPhrase: ar,
                                    triggerItem: aD
                                }).trigger(ak.APPROVE_CORRECTIONS, {
                                    approvals: [{
                                        text: aS,
                                        correction: aP,
                                        phrase: ap
                                    }]
                                })
                            }
                            Y.reportSelectSuggestion({
                                token: aL,
                                correctedToken_suggestion_0: aS,
                                selectionIndex: aN
                            })
                        }
                    }
                    if (!!aO) {
                        aO.textInput.focus()
                    } else {
                        az.focus()
                    }
                    aH.setIdleTimer();
                    return true
                });
                o(aB, $(aD))
            };
            if (c) {
                $(c).ready(aA)
            }
        };
        if (O.loggerOn()) {
            O.logDebug(JSON.stringify("menuHandler: " + JSON.stringify({
                type: an.type,
                nodeName: an.target.nodeName,
                nodeValue: an.target.nodeValue
            })))
        }
        if (an.type === "contextmenu") {
            if (!Q() || !w()) {
                var au = null,
                    ax = null,
                    at = null;
                if (!!an.target) {
                    var av = al.getNodeType(an.target);
                    if (av === ae.INPUT_CONTROL || av === ae.TEXTAREA_CONTROL) {
                        at = C.getControlByTextInput(an.target);
                        ax = at.getRichTextElement();
                        au = at.getTextInputManager().getGingerNodeFromPosition(an.pageX, an.pageY)
                    } else {
                        au = ab.getContextMenuEventMarkNode(an.target);
                        if (!!au) {
                            ax = ab.getRootFromNode(au);
                            at = C.getControlByRichText(ax)
                        }
                    }
                    if (!!au) {
                        var ao = m.getSelection(at.getElement());
                        if (ao.isCollapsed() || h.isMac) {
                            if (ab.isContextualMarkNode(au) || ab.isSpellingContextualMarkNode(au)) {
                                if (O.loggerOn()) {
                                    O.logAssert(ax)
                                }
                                aw(ax, an, au);
                                return false
                            } else {
                                if (ab.isNonContextualMarkNode(au)) {
                                    var ay = al.getDocumentContext(au);

                                    function aq() {
                                        var aB = ay.elementFromPoint(an.clientX, an.clientY),
                                            aA;
                                        if (!!aB && !ab.isContextualMarkNode(aB) && !ab.isSpellingContextualMarkNode(aB)) {
                                            aA = al.getNodeType(aB);
                                            if (aA === ae.INPUT_CONTROL || aA === ae.TEXTAREA_CONTROL) {
                                                var az = at ? at.getTextInputManager() : null;
                                                if (az && az.textInput === aB) {
                                                    aB = az.getGingerNodeFromPosition(an.pageX, an.pageY)
                                                }
                                            }
                                        }
                                        if (!!aB && (ab.isContextualMarkNode(aB) || ab.isSpellingContextualMarkNode(aB))) {
                                            aw(ax, an, aB)
                                        }
                                    }
                                    C.processElement(ax, {
                                        correctAll: true,
                                        nonPendingCallback: function(az) {
                                            C.processControl(az, {
                                                correctAll: true
                                            });
                                            aq()
                                        }
                                    });
                                    if (!k.hasPendingCalls()) {
                                        aq()
                                    }
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        }
        return true
    };
    return {
        load: X,
        initManager: F,
        isMenuVisible: Q,
        handleKey: aa,
        bindElementMenuHandler: j,
        unbindElementMenuHandler: s
    }
})();
"use strict";
GS_WEB_WIDGET.bubbleMenuManager = (function() {
    var N = null,
        g = null,
        af = null,
        bi = null,
        a8 = null,
        z = null,
        A = null,
        aC = null,
        aL = null,
        aY = null,
        aQ = null,
        ao = null,
        a0 = null;
    var aU = null,
        S = null,
        aZ = null,
        B = null,
        u = null,
        aN = null,
        ah = false;
    var t = null,
        bg = null,
        b = null,
        T = null,
        ag = null,
        f = null;
    var bs = null,
        i = null,
        aR = null,
        a1 = null,
        aT = null;
    var au = null,
        aJ = null,
        aA = false,
        Y = null,
        w = null;
    var P = true,
        bb = null,
        U = ["color", "-webkit-text-fill-color", "text-align", "text-decoration", "font-style", "font-weight", "text-indent"];
    var a4 = null,
        aj = null,
        G = false,
        bw = null,
        aB = 0,
        ad = null,
        aa = null,
        x = 10,
        ak = 0,
        br = -3,
        a6 = null,
        aV = null,
        h = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
        },
        aW = {
            mistake: $.extend({}, h),
            iFrame: $.extend({}, h),
            phrase: $.extend({}, h),
            wordCorrection: $.extend({}, h),
            suggestions: $.extend({}, h),
            tip: $.extend({}, h)
        };
    var aw = "28,125,215",
        az = null,
        ab = false,
        n = "f6f6f6",
        ar = false,
        E = false;
    var k = {},
        ap = {};
    var m = "GRbubblesIFrame",
        bq = 10,
        a2 = {
            CORRECTION_WORD_HOVER_DELAY: 100,
            MISTAKE_HOVER_DELAY: 0,
            HOT_ZONE_TIMEOUT: 30,
            SUGGESTIONS_LEAVE_TIMEOUT: 200,
            CORRECTION_WORD_LEAVE_TIMEOUT: 50
        },
        R = {
            topLeft: {
                height: 15,
                width: 15
            },
            top: {
                height: 15
            },
            topRight: {
                height: 15,
                width: 15
            },
            left: {
                width: 15
            },
            right: {
                width: 15
            },
            bottomLeft: {
                height: 15,
                width: 15
            },
            bottom: {
                height: 15
            },
            bottomRight: {
                height: 15,
                width: 15
            }
        },
        aD = {
            topLeft: {
                height: 15,
                width: 15
            },
            top: {
                height: 15
            },
            topRight: {
                height: 0,
                width: 0
            },
            left: {
                width: 15
            },
            right: {
                width: 0
            },
            bottomLeft: {
                height: 15,
                width: 15
            },
            bottom: {
                height: 15
            },
            bottomRight: {
                height: 0,
                width: 0
            }
        },
        D = {
            topLeft: {
                height: 0,
                width: 0
            },
            top: {
                height: 15
            },
            topRight: {
                height: 15,
                width: 15
            },
            left: {
                width: 0
            },
            right: {
                width: 15
            },
            bottomLeft: {
                height: 0,
                width: 0
            },
            bottom: {
                height: 15
            },
            bottomRight: {
                height: 15,
                width: 15
            }
        };
    var aI = function(bP) {
        var bV = $(bP, b),
            ce = null,
            b6 = null,
            bN = null,
            bH = null,
            b2 = null,
            bK = null,
            ck = null,
            bM = null,
            b4 = null,
            bO = null,
            bX = null,
            ci = null,
            bW = null,
            bE = null,
            b9 = null,
            bT = null,
            bA = null,
            ch = null,
            b7 = null,
            bB = $.extend({}, h),
            b5 = $.extend({}, h),
            bR = false;
        var co = "GRcorrectionControl",
            bS = "GRbottomOrientation",
            cn = "GRcorrectionBubble",
            ca = "GRsynonymMisake",
            bZ = "GRcorrectionBubbleContent",
            bU = "GRignoreAllContent",
            b0 = "GRHover",
            b1 = "GRcorrectionBubbleTestSpan",
            cd = "GRwordCorrection",
            cl = "GRignoreWord",
            by = "GRignoreAll",
            cc = "GRunselectable",
            bI = "GRcontentHover",
            bG = "GRignoreAllHover",
            bF = 13,
            cb = 13,
            b3 = 1;
        (function cg() {
            bA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDY4NTYxQzMxODAxMUUyOUMwOTlFRDFENEIzOUI0MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDY4NTYxQjMxODAxMUUyOUMwOTlFRDFENEIzOUI0MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDk2REZFRTE3MkNFMjExODg1Qzg0RDAxRjE0NTZCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PscR0AcAAAA5SURBVHjaYty1a9d/BghghNJgPgsDAvxHYjMwIamEgY8gMSYGHIAJ3Qgg4AeJIetghGKQUQwAAQYAZh8JLb2mXqgAAAAASUVORK5CYII=";
            b7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDdFMjgwNTMxODAxMUUyOUMwOTlFRDFENEIzOUI0MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDdFMjgwNDMxODAxMUUyOUMwOTlFRDFENEIzOUI0MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDk2REZFRTE3MkNFMjExODg1Qzg0RDAxRjE0NTZCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv0v9V4AAAA5SURBVHjaYpwyZcp/BghghNJgPgsDAvxHYjMwIamEgY8gMSYGHIAJ3Qgg4AeJIetghGKQUQwAAQYAJDcIu1gTCKgAAAAASUVORK5CYII=";
            b9 = "data:image/png;base64,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";
            bT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENzU2MjZDQTJDMUMxMUUyQjNFREY1QTQ0MzVFNDhGNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENzU2MjZDOTJDMUMxMUUyQjNFREY1QTQ0MzVFNDhGNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Mjk2REZFRTE3MkNFMjExODg1Qzg0RDAxRjE0NTZCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMkIyQzQ5QzREMjNFMjExQkJCOEIxMkNCRTU2QzczOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMB1OMAAAIGSURBVHjaYtQsX86ABJiBmBuI+YCYDYh/AvEnIP4GxH9hiligNCNUsUq4uUqItoygjTgfl9iLj9+en3vweu/Gcw82AeXuA/FXsGKoTTxSgtz2XRGWU4zkRRQY0MCx2y+ul688kfv2y48TII1MUNtUYRr2Xn/B8PAt2ECG2y8/MRy69ZLBSlVCsyPcYgpQSBHkBZAGnggLlUiYhpZN5xjY2VgZCt20Gfp2XmH4/ecvQ0OAEYOdmoSGt76879aLDx+CbOIzUxJzApmsIcHHwMHOyvDy3UeGji0XGF69/8TAyc7GoC0tALbZQkXcDUjxgjSx83Ky8YMEpQW5GApctRkEebkZXgI1iPDzMuS5aDIIc7ODNQlwsQmD1IM0/fz47dc7mB9ATvrw5RuDtKggw5uPnxn6d12F+/HDt19vQepBmj6euvtyH0jw0btvDL9+/2GQFBZgKPHQZZAQ5gfzH779AtZ0+NbzHaB4AwXEl1Wn7q7yM1aMcNaUAAa3EYOBnCDYSTpSAgx3X38GBoI4w5Fbz6/tuvx4CyiimUVtQv6DNJ68+/KSpAC3rou2lAQXGyTO+ThZGWQFuRm2X3p8qnHDmcJvv/5cBQr/gkUuKEVwArECMFj9TJREnaUFuaUev/3y5MTdl9t3X3kCctZDIP6OnCKQ0x4nNO2BguwHNO2BFP+DKQIIMAB2vLhzAr+tpAAAAABJRU5ErkJggg==";
            ch = "data:image/png;base64,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";
            if (a8.isIeBefore8) {
                var cp = g.getSourceUrl();
                bA = cp + "bubbles-ignore-all.png";
                b7 = cp + "bubbles-ignore-all-hover.png";
                b9 = cp + "bubbles-ignore-word.png";
                bT = cp + "bubbles-ignore-synonym.png";
                ch = cp + "bubbles-ignore-word-hover.png"
            }
            bP.unselectable = "on";
            f.addClass(cc);
            ce = $("<div></div>", b);
            b6 = ce[0];
            bH = aC.display.createRoundedElement("div", t, R);
            ce.append(bH);
            bN = ce.find(bH);
            ck = aC.display.createRoundedElement("div", t, aD);
            bM = $(ck, b);
            bN.append(ck);
            b2 = aC.display.createRoundedElement("div", t, D);
            bK = $(b2, b);
            bK.append("&nbsp;");
            bN.append(b2);
            bV.append(b6);
            b6.id = co;
            bH.id = cn;
            ck.id = bZ;
            b2.className = by;
            if (!ar) {
                bE = $('<img src="' + b9 + '"/>', b);
                bW = bE[0];
                ce.append(bW);
                bW.className = cl
            }
            bN.append('<span class="' + b1 + '"></span>');
            b4 = bN.find("." + b1);
            bO = b4[0]
        })();
        var bJ = function() {
            var cp = function(cs) {
                return aC.display.createBoxShadowCss("0px", "0px", cs, "3px")
            };
            var cr = function() {
                return aC.display.createBgGradientCss("#ffffff", n)
            };
            var cq = ["#" + co + "{position:absolute; margin:0px; padding:0px; height:0px; width:0px;}", "#" + cn + "{margin:2px; " + cr() + " " + cp("#808080") + "}", "." + bI + " #" + cn + "{" + aC.display.createBoxShadowCss("0px", "0px", "transparent") + "}", "#" + bZ + "{display:inline-block; position:relative; border:1px solid #ffffff; white-space:nowrap; padding: 2px 10px; cursor:pointer;}", "#" + bZ + "." + b0 + "{border-color:rgb(" + aw + "); " + cp("rgb(" + aw + ")") + "}", "#" + bZ + "." + bU + "{color:#808080;}", "." + ca + " #" + bZ + "." + b0 + "{border-color:rgb(" + az + "); " + cp("rgb(" + az + ")") + "}", "." + bG + " #" + bZ + "{color:#808080; border-right-color:transparent;}", "." + by + "{display:inline-block; position:relative; width:15px; padding:2px; border:1px solid #ffffff; border-left-color:#e8e8e8; background:url(" + bA + ") no-repeat center center; cursor:pointer;}", "." + by + "." + b0 + "{border-left-color: transparent; background:url(" + b7 + ") no-repeat center center}", "." + bI + " ." + by + "{border-left-color:transparent; " + cp("#808080") + "}", "." + cd + "{color:rgb(" + aw + ");}", "." + cd + "." + N.SYNONYM_MARK_CLASS + "{color:rgb(" + az + ");}", "." + cd + "." + N.NO_SUGGESTIONS_MARK_CLASS + "{color:#808080;}", "." + cl + "{position:absolute; height:0px; width:0px; top:0px; cursor:pointer;}", "." + b1 + "{position:absolute; top:0px; left:0px; z-index:-1; visibility:hidden; font-weight:bold; white-space:nowrap;}", "." + cc + "{-moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; -o-user-select: none; user-select: none; }"];
            if (!ar) {
                cq = cq.concat(["#" + co + " #" + cn + "{margin-top:6px;}", "#" + co + "." + b0 + " #" + cn + "{margin-top:6px;}", "#" + co + "." + bS + " #" + cn + "{margin-top:2px; margin-bottom:6px;}", "#" + co + "." + bS + "." + b0 + " #" + cn + "{margin-top:2px; margin-bottom:6px;}"])
            }
            return cq
        };
        var bD = function() {
            return ce.height() !== 0 || ce.width() !== 0
        };
        var cf = function() {
            return bE.height() !== 0 || bE.width() !== 0
        };
        var cm = function(cq) {
            var cp = aJ.getCorrectionManager();
            return cp.getCorrection(cq)
        };
        var bQ = function(ct, cq) {
            var cs = {
                correctionClass: cd
            };
            var cp = cm(ct);
            if (cp) {
                if (!aJ.getSpellingOnly()) {
                    cs.fragmentStart = cp.getFragmentStart();
                    cs.fragmentEnd = cp.getFragmentEnd()
                } else {
                    cs.fragmentStart = cp.getStart();
                    cs.fragmentEnd = cs.fragmentStart + cp.getLength()
                }
            }
            cs.markSynonym = !cq && aq();
            cs.ignoreAll = !!cq;
            var cr = ao.getCorrectedPhraseInfoFromPhrase(aJ, cs);
            bM.html(cr)
        };
        var bz = function(ct, cr, cs) {
            bQ(cs, false);
            bM.css({
                width: "auto"
            });
            var cq = aJ.getCorrectionManager(),
                cp = bM.width();
            cq.iterateItems(function(cv) {
                var cx = cv.getMistakeText();
                if (!a0.isTokenIgnored(cx)) {
                    var cu = cv.getSuggestions(),
                        cw = 0;
                    b4.html(cv.getFirstSuggestion());
                    cw = b4.outerWidth();
                    cp -= cw;
                    b4.html(cx);
                    cw = Math.max(cw, b4.outerWidth());
                    $.each(cu, function(cz, cy) {
                        b4.html(cy.suggestion);
                        cw = Math.max(cw, b4.outerWidth())
                    });
                    cp += cw
                }
            });
            bM.width(cp);
            bN.width(bM.outerWidth(true) + bK.outerWidth(true) + b3)
        };
        var cj = function() {
            return bM.outerWidth(true) + bK.outerWidth(true) + bN.outerWidth(true) - bN.width() + b3
        };
        var b8 = function() {
            return bM.outerHeight(true) + bN.outerHeight(true) - bN.height()
        };
        var bY = function(cp) {
            bX = cp;
            ci = (cp !== null) ? $(cp) : null
        };
        var bC = function() {
            return aC.display.getNodePaddingBorderAndMargin(bH, b, "top")
        };
        var bL = function() {
            return bX
        };
        return {
            node: b6,
            $node: ce,
            $bubbleContent: bM,
            ignoreWordBtn: bW,
            $ignoreWord: bE,
            ignoreAllBtn: b2,
            $ignoreAll: bK,
            getWordSpan: bL,
            getStyles: bJ,
            isVisible: bD,
            isIgnoreWordVisible: cf,
            populate: bz,
            populateText: bQ,
            getWidth: cj,
            getHeight: b8,
            setWordSpan: bY,
            getPaddingBorderAndMargin: bC,
            coordinates: bB,
            wordCoordinates: b5,
            isDisplayed: bR,
            ignoreWordBtnSrc: b9,
            ignoreWordSynonymBtnSrc: bT,
            ignoreWordHoverBtnSrc: ch,
            BUBBLE_ID: cn,
            BUBBLE_CONTENT: bZ,
            HOVER_CLASS: b0,
            WORD_CLASS: cd,
            IGNORE_WORD: cl,
            IGNORE_WORD_HEIGHT: bF,
            IGNORE_WORD_WIDTH: cb,
            IGNORE_ALL: by,
            SYNONYM_MISTAKE: ca,
            IGNORE_ALL_CONTENT: bU,
            BOTTOM_ORIENTATION: bS,
            CONTENT_HOVER: bI,
            IGNORE_ALL_HOVER: bG
        }
    };
    var K = function(bK) {
        var bT = $(bK, b),
            b5 = null,
            bY = null,
            b0 = null,
            bR = null,
            bO = null,
            bW = null,
            bS = null,
            bZ = null,
            bI = null,
            b4 = null,
            bQ = null,
            b6 = null,
            bC = $.extend({}, h),
            b3 = $.extend({}, h);
        var by = "GRsuggestionsControl",
            bM = "GRsuggestionsBubble",
            b2 = "GRsuggestion",
            bV = "GRsuggestionHover",
            bB = "GRsuggestionLengthTest",
            bU = "GRignoreSuggestion",
            bD = "GRignoreArrow",
            bL = "GRfirstSuggestion",
            bF = "GRlastSuggestion",
            bJ = "GRtipImage",
            bP = 17,
            bH = 11;
        (function b1() {
            bZ = "data:image/png;base64,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";
            bQ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAALCAYAAACZIGYHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0QkU3OTg5OEJCRDlFMTExQTkwREI4NUE1ODQyNDlFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MDNFMTg3QUY1Q0ExMUUxQTgxQ0M5ODhBMzg4M0M0NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MDNFMTg3OUY1Q0ExMUUxQTgxQ0M5ODhBMzg4M0M0NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOEIxMzU5QTI0RTVFMTExODAxNkU0NTJFREMwRjUwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QkU3OTg5OEJCRDlFMTExQTkwREI4NUE1ODQyNDlFNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puvgpb0AAAFLSURBVHjabJG9SsRAFIUnibq7/qC7/hRi4oogulpY2Nn4BFoJFta+gGAXyAPYpJfYmEp8BiHgAwjBLhACafMEu4nnhBudDbnwcWcyd86ce2Pcfv2oJt4vJ4b6D0PLlaybrHDvb73QIcBsSjY0kYZSF1NSrFqvWyK+CJY8zxsyy94SjDnX0k7zOgsHYA0Msyx7rBDM3Mv3vtTVbnnfbLmy5NVBGIbntm0/84DZdd0xlj05t7SZzc2gJy/tgHGe529lWVYNcPOC7w7YAqu6m8YBZ7AMNsF+FEVPbEMXYfi+f4PzPWmtrzuigxUwonNwWhTF92w2q3QolCTJB86PwS7YkPmxvXqzLQKTOI5feaEtQhhBEDyg7kiE6HxdyeVDcIbh3bNwOp12QqE0TT9RewFOwAHbM6WNmjsEXCjodMIzx3Gu8OeuZS5k9CvAAFXy0NfZEBIyAAAAAElFTkSuQmCC";
            b6 = "data:image/png;base64,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";
            if (a8.isIeBefore8) {
                bZ = "ignore-arrow.png";
                bQ = "bubble-tip-up.png";
                b6 = "bubble-tip-down.png"
            }
            b5 = $("<div></div>", b);
            bY = b5[0];
            bR = aC.display.createRoundedElement("ul", t, R);
            b0 = $(bR, b);
            b5.append(bR);
            bT.append(bY);
            bY.id = by;
            bR.id = bM;
            b4 = $('<img src="' + bQ + '" />');
            bI = b4[0];
            $(bK, b).append(bI);
            b4.addClass(bJ)
        })();
        var bG = function() {
            return ["#" + by + "{position:absolute; margin:0px; padding:0px;}", "#" + bM + "{list-style-type:none; display:inline-block; padding:0px; margin:2px; box-shadow: 0 0 2px #E8E8E8; -webkit-box-shadow: 0 0 3px #E8E8E8; -moz-box-shadow: 0 0 3px #E8E8E8;}", "li { float:left; padding:2px 3px; background:-webkit-linear-gradient(top, #ffffff, #" + n + "); border-left:1px solid #e8e8e8; border-right:1px solid #ffffff; }", "." + b2 + "." + bL + " {padding-left:10px;}", "." + b2 + "." + bF + " {padding-right:10px;}", "." + b2 + " {text-align:center; cursor:pointer; font-weight:bold;}", "." + b2 + "." + bV + " {color:rgb(" + aw + "); font-weight:bold;}", "." + b2 + "." + bU + " {color:#5d5d5d; font-weight:normal;}", "." + b2 + "." + bU + "." + bV + " {color:rgb(" + aw + ");}", "." + b2 + "." + bU + " ." + bD + ' {display:inline-block; width:13px; height:13px; vertical-align:middle; margin-left:2px; background-image:url("' + bZ + '"); background-repeat:no-repeat; background-position:center right;}', "." + bB + "{font-weight:bold;}", "." + bJ + " {position:absolute; width:0px; height:0px;}"]
        };
        var bX = function() {
            return b5.height() !== 0 || b5.width() !== 0
        };
        var bE = function(b7, b8) {
            bO = [];
            $.each(b7, function(cc, cd) {
                if (cd !== b8) {
                    bO.push(cd)
                }
            });
            var b9 = b7[0],
                cb = bO.length - 1;
            b0.empty();
            $.each(bO, function(cc, cd) {
                var ce = null;
                if (cc === 0) {
                    ce = $(aC.display.createRoundedElement("li", b, cc === cb ? R : aD), b);
                    ce.addClass(bL);
                    if (cd === b9) {
                        ce.addClass(bU)
                    }
                    if (cc === cb) {
                        ce.addClass(bF)
                    }
                } else {
                    if (cc === cb) {
                        ce = $(aC.display.createRoundedElement("li", b, D), b);
                        ce.addClass(bF)
                    } else {
                        ce = $("<li></li>", b)
                    }
                }
                ce.html(cd + ((cd === b9) ? "<span></span>" : ""));
                b0.append(ce);
                ce.addClass(b2).addClass(bB);
                ce.find("span").addClass(bD)
            });
            var ca = b5.width();
            b5.width($(document.body).width());
            bW = b0.outerWidth(true);
            bS = b0.outerHeight(true);
            b0.find("li").each(function() {
                var cc = $(this);
                cc.width(cc.width()).removeClass(bB)
            });
            b5.width(ca)
        };
        var bA = function() {
            return bW
        };
        var bN = function() {
            var b8 = (b0.text() === "");
            if (b8) {
                b0.empty();
                b0.append("<span>text</span>");
                var b7 = b0.find("span");
                b7.addClass(bD)
            }
            var b9 = b5.width();
            b5.width($(document.body).width());
            bS = b0.outerHeight(true);
            b5.width(b9);
            if (b8) {
                b0.empty()
            }
            return bS
        };
        var bz = function(b7) {
            if (b7) {
                bI.src = bQ
            } else {
                bI.src = b6
            }
        };
        return {
            node: bY,
            $node: b5,
            tipNode: bI,
            $tip: b4,
            getStyles: bG,
            isVisible: bX,
            populate: bE,
            getWidth: bA,
            getHeight: bN,
            setTopOrientation: bz,
            coordinates: bC,
            tipCoordinates: b3,
            BUBBLE_ID: bM,
            SUGGESTION_CLASS: b2,
            SUGGESTION_HOVER_CLASS: bV,
            IGNORE_SUGGESTION_CLASS: bU,
            TIP_CLASS: bJ,
            TIP_WIDTH: bP,
            TIP_HEIGHT: bH
        }
    };
    var j = function() {
        N = GS_WEB_WIDGET.namespace("defs");
        g = GS_WEB_WIDGET.namespace("appModel");
        af = GS_WEB_WIDGET.namespace("logger");
        bi = GS_WEB_WIDGET.namespace("bookmark");
        a8 = GS_WEB_WIDGET.namespace("browser");
        z = GS_WEB_WIDGET.namespace("trackingManager");
        A = GS_WEB_WIDGET.namespace("API");
        aC = GS_WEB_WIDGET.namespace("utils");
        aC.display = GS_WEB_WIDGET.namespace("utils.display");
        aL = GS_WEB_WIDGET.namespace("staticUtils");
        aQ = GS_WEB_WIDGET.namespace("context");
        ao = GS_WEB_WIDGET.namespace("phraseManager");
        a0 = GS_WEB_WIDGET.namespace("tokensCacheManager");
        aY = GS_WEB_WIDGET.namespace("mainController");
        aM()
    };
    var aM = function() {
        a4 = "click contextmenu mousedown " + (a8.isFirefox ? "DOMMouseScroll" : "mousewheel");
        az = N.MARK_HIGHLIGHT_SYNONYM_RGB;
        var by = false,
            bA = false;

        function bz() {
            if (!by || !bA) {
                return
            }
            if (g.isBubbleMenu()) {
                d();
                bw = [{
                    selector: document,
                    eventName: a4,
                    callback: p
                }, {
                    selector: bs.$node,
                    doc: b,
                    eventName: "mouseenter",
                    callback: am
                }, {
                    selector: bs.$node,
                    doc: b,
                    eventName: "mouseleave",
                    callback: a5
                }, {
                    selector: "#" + bs.BUBBLE_CONTENT,
                    doc: b,
                    eventName: "click",
                    callback: at
                }, {
                    selector: "#" + bs.BUBBLE_CONTENT,
                    doc: b,
                    eventName: "mouseenter",
                    callback: bu
                }, {
                    selector: "#" + bs.BUBBLE_CONTENT,
                    doc: b,
                    eventName: "mouseleave",
                    callback: Q
                }, {
                    selector: "." + bs.IGNORE_ALL,
                    doc: b,
                    eventName: "mouseenter",
                    callback: W
                }, {
                    selector: "." + bs.IGNORE_ALL,
                    doc: b,
                    eventName: "mouseleave",
                    callback: aP
                }, {
                    selector: "." + bs.IGNORE_ALL,
                    doc: b,
                    eventName: "click",
                    callback: X
                }, {
                    selector: "." + bs.WORD_CLASS,
                    doc: b,
                    eventName: "mouseenter",
                    callback: aH
                }, {
                    selector: "." + bs.WORD_CLASS,
                    doc: b,
                    eventName: "mouseleave",
                    callback: bp
                }];
                aB = bw.length;
                ad = [{
                    selector: "#" + i.BUBBLE_ID,
                    doc: b,
                    eventName: "mouseenter",
                    callback: aK
                }, {
                    selector: "#" + i.BUBBLE_ID,
                    doc: b,
                    eventName: "mouseleave",
                    callback: bx
                }, {
                    selector: "." + i.TIP_CLASS,
                    doc: b,
                    eventName: "mouseenter",
                    callback: ai
                }, {
                    selector: "." + i.TIP_CLASS,
                    doc: b,
                    eventName: "mouseleave",
                    callback: aX
                }, {
                    selector: "." + i.SUGGESTION_CLASS,
                    doc: b,
                    eventName: "click",
                    callback: bt
                }, {
                    selector: "." + i.SUGGESTION_CLASS,
                    doc: b,
                    eventName: "mouseenter",
                    callback: bo
                }, {
                    selector: "." + i.SUGGESTION_CLASS,
                    doc: b,
                    eventName: "mouseleave",
                    callback: H
                }];
                aa = [{
                    selector: "." + bs.IGNORE_WORD,
                    doc: b,
                    eventName: "mouseenter",
                    callback: bh
                }, {
                    selector: "." + bs.IGNORE_WORD,
                    doc: b,
                    eventName: "mouseleave",
                    callback: y
                }, {
                    selector: "." + bs.IGNORE_WORD,
                    doc: b,
                    eventName: "click",
                    callback: bj
                }]
            }
        }
        $(function() {
            by = true;
            bz()
        });
        $(aQ).bind(aQ.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(bB, bC) {
            bA = true;
            bz()
        })
    };
    var bl = function(by) {};
    var s = function() {
        var bz = ao.getCorrectionsInFragmentByCorrectionId(aJ, B.getAttribute(N.SPAN_CONTEXT_ID), false),
            by = [];
        $.each(bz, function(bA, bC) {
            var bB = {
                original: bC.getMistakeText(),
                suggestion: bC.getFirstSuggestion(),
                confidenceLevel: bC.getConfidence(),
                correctionType: bC.getTypeDescription(),
                learningCategory: bC.getFirstSuggestionLearningCategory()
            };
            by.push(bB)
        });
        return by
    };
    var aS = function() {
        var bz = s();
        z.reportCloseBubble({
            application: a8.getBrowserDisplayName(),
            pageUrl: aC.misc.getMainPageUrl(),
            corrections: bz.length,
            correctionsDetails: bz,
            duration: new Date().getTime() - aT
        });
        var by = bs.$bubbleContent.text();
        if (!ap[by]) {
            ap[by] = true;
            z.reportCloseUniqueBubble({
                application: a8.getBrowserDisplayName(),
                pageUrl: aC.misc.getMainPageUrl(),
                corrections: bz.length,
                correctionsDetails: bz
            })
        }
    };
    var M = function() {
        aT = new Date().getTime();
        var bz = s();
        z.reportOpenBubble({
            application: a8.getBrowserDisplayName(),
            pageUrl: aC.misc.getMainPageUrl(),
            corrections: bz.length,
            correctionsDetails: bz
        });
        var by = bs.$bubbleContent.text();
        if (!k[by]) {
            k[by] = true;
            z.reportOpenUniqueBubble({
                application: a8.getBrowserDisplayName(),
                pageUrl: aC.misc.getMainPageUrl(),
                corrections: bz.length,
                correctionsDetails: bz
            })
        }
    };
    var v = function() {
        var by = s();
        z.reportApproveFragment({
            sentence: au.getOriginalCleanText(),
            application: a8.getBrowserDisplayName(),
            pageUrl: aC.misc.getMainPageUrl(),
            corrections: by.length,
            correctionsDetails: by
        })
    };
    var J = function(bA, bz) {
        function by() {
            return bz === aQ.IGNORE_TOKEN ? "token" : bz === aQ.IGNORE_TOKENS ? "fragment" : ""
        }
        z.reportIgnoreCorrection({
            application: a8.getBrowserDisplayName(),
            sentence: aJ.getCleanText(),
            token: bA.getMistakeText(),
            suggestion: bA.getFirstSuggestion(),
            ignoreTrigger: by(),
            correctionType: bA.getTypeDescription(),
            fragmentStart: bA.getFragmentStart(),
            fragmentEnd: bA.getFragmentEnd(),
            learningCategory: bA.getFirstSuggestionLearningCategory()
        })
    };
    var bv = function(by) {
        $.each(by, function(bz, bA) {
            J(bA, aQ.IGNORE_TOKENS)
        });
        z.reportIgnoreFragment({
            application: a8.getBrowserDisplayName(),
            corrections: by ? by.length : 0
        })
    };
    var ac = function() {
        var by = aJ.getCorrectionManager();
        Y = {};
        by.iterateItems(function(bz) {
            var bA = bz.getIndex();
            Y[bA] = bz
        })
    };
    var Z = function(by) {
        return Y[by.getAttribute(N.CORRECTION_INDEX_ATTR)]
    };
    var a7 = function(bz, bA) {
        var by = [];
        if (bz) {
            if (bA) {
                by.push(bz.getMistakeText())
            }
            $.each(bz.getSuggestions(), function(bB, bC) {
                by.push(bC.suggestion)
            })
        }
        return by
    };
    var e = function(bz, by) {
        return a7(Z(bz), by)
    };
    var aq = function() {
        return u.hasClass(N.SYNONYM_MARK_CLASS)
    };
    var L = function() {
        return aR.hasClass(N.SYNONYM_MARK_CLASS)
    };
    var aF = function(by) {
        $(by).bind("mouseenter", o);
        $(by).bind("mouseleave", an)
    };
    var ay = function(by) {
        $(by).unbind("mouseenter", o);
        $(by).unbind("mouseleave", an)
    };
    var d = function() {
        if (!bg) {
            aC.appendEmptyIFrame(document, function(by, bz) {
                t = by;
                bg = $(t);
                b = bz;
                T = $(b);
                t.id = m;
                t.scrolling = "no";
                bg.css({
                    position: "absolute",
                    "z-index": N.MAX_Z_INDEX,
                    height: 0,
                    width: 0,
                    "background-color": "transparent"
                });
                ag = b.body;
                f = $(ag, b);
                bs = aI(ag);
                i = K(ag);
                aC.attachStyleNode(b, aG().join(" "), N.GINGER_STYLE_ELEMENT_ID)
            })
        }
    };
    var aG = function() {
        return ["body {margin:0px; overflow: hidden; text-align:center;}"].concat(bs.getStyles(), i.getStyles())
    };
    var be = function() {
        return bg.height() > 0
    };
    var ba = function(by) {
        if (bs.isDisplayed) {
            aO();
            aS()
        }
        return by.keyCode !== N.KEY_CODES.ESCAPE_KEY
    };
    var a = function(bB) {
        var bA = aL.getContextMenuEventMarkNode(bB.target),
            by = $(bB.target),
            bz = null,
            bC = null,
            bD = (by.hasClass(N.MARK_HIGHLIGHT_LEFT_CLASS) || by.hasClass(N.MARK_HIGHLIGHT_TOP_CLASS) || by.hasClass(N.MARK_HIGHLIGHT_RIGHT_CLASS) || by.hasClass(N.MARK_HIGHLIGHT_BOTTOM_CLASS));
        if (bA) {
            bz = aL.getRootFromNode(bA);
            bC = aY.getControlByRichText(bz)
        }
        return {
            mistakeSpan: bA,
            root: bz,
            control: bC,
            isTextInput: bD
        }
    };
    var r = function(bF, by, bI, bH) {
        var bz = bF !== au && au !== null,
            bC = false;
        var bA = aJ && by && aJ.getSpellingOnly() !== by.getSpellingOnly();
        if (aJ && bH && !bz && !bA && bI !== null) {
            var bG = bI.getAttribute(N.SPAN_CONTEXT_ID);
            var bB = ao.getCorrectionsInFragmentByCorrectionId(aJ, bH);
            var bE = aJ.getCorrectionManager(),
                bD = bE.getCorrection(bG);
            bC = bB.indexOf(bD) === -1
        }
        return bz || bA || bC
    };
    var a3 = function(by) {
        clearTimeout(aj);
        aj = setTimeout(function() {
            aZ = by.control;
            aU = by.root;
            S = aC.getDocumentContext(aU);
            ah = by.isTextInput;
            var bE = by.mistakeSpan;
            if (bw.length > aB) {
                bw.pop()
            }
            bw.push({
                selector: S,
                eventName: a4,
                callback: p
            });
            if (B === bE && be()) {
                return
            }
            if (i.isVisible()) {
                l()
            }
            var bz = B;
            B = bE;
            u = $(B, S);
            c();
            var bD = B.getAttribute(N.SPAN_CONTEXT_ID);
            var bC = B.getAttribute(N.UI_PHRASE_GUID_ATTR);
            if (aZ) {
                var bB = aZ.uiPhraseManager.getItemByGuid(bC);
                var bA = aZ.uiPhraseManager.getPhraseFromUiPhrase(bB);
                aA = r(bB, bA, bz, bD);
                au = bB;
                aJ = bA;
                if (aJ) {
                    if (!aJ.getPending()) {
                        var bF = false;
                        ac();
                        if (!bs.isDisplayed || aA) {
                            bF = true
                        }
                        bk(bD);
                        if (bF) {
                            M()
                        }
                    }
                } else {
                    aY.processControl(aZ, {
                        correctAll: true,
                        nonPendingCallback: function(bG, bH) {
                            aY.processControl(bG, {
                                correctAll: true
                            });
                            aJ = bH.phrase;
                            ac();
                            if (!bs.isDisplayed || aA) {
                                M()
                            }
                            bD = B.getAttribute(N.SPAN_CONTEXT_ID);
                            bC = B.getAttribute(N.UI_PHRASE_GUID_ATTR);
                            bk(bD)
                        }
                    })
                }
            }
        }, a2.MISTAKE_HOVER_DELAY)
    };
    var o = function(by) {
        var bA = a(by);
        var bz = bi.getSelection(bA.root);
        if (bz.isCollapsed() || a8.isMac) {
            if (!bA.isTextInput) {
                a3(bA)
            }
        }
    };
    var C = function(bA) {
        var by = bA.control.getTextInputManager(),
            bz = $(by.textInput);
        bz.one("mousemove", function(bD) {
            var bF = bD.pageX,
                bC = bD.pageY,
                bB = aC.display.getDocumentOffset(aC.getDocumentContext(by.textInput), document, false);
            bF += bB.left;
            bC += bB.top;
            var bE = by.getGingerNodeFromPosition(bF, bC);
            if (bE !== null) {
                bA.mistakeSpan = bE;
                a3(bA)
            } else {
                if (bs.isDisplayed) {
                    aO();
                    aS()
                }
            }
        })
    };
    var an = function(by) {
        var bz = a(by);
        if (!bz.isTextInput) {
            clearTimeout(aj)
        } else {
            C(bz)
        }
    };
    var bc = function() {
        var bz = i.getHeight(),
            by = bs.getHeight() + ak + bz;
        P = !ab && ((aW.mistake.top - by - bq - aC.display.getDocScroll(document).top) > 0);
        if (P) {
            bs.$node.css({
                bottom: 0,
                top: "auto"
            });
            bs.$node.removeClass(bs.BOTTOM_ORIENTATION);
            i.$node.css({
                top: 0,
                bottom: "auto"
            })
        } else {
            bs.$node.css({
                top: 0,
                bottom: "auto"
            });
            bs.$node.addClass(bs.BOTTOM_ORIENTATION);
            i.$node.css({
                bottom: 0,
                top: "auto"
            })
        }
        i.setTopOrientation(P)
    };
    var bk = function(by) {
        bs.isDisplayed = true;
        var bB = function() {
            if (bs.isDisplayed) {
                q()
            }
        };
        var bG = bs.isVisible();
        al();
        bb = u.getStyleCollections()["font"];
        f.setStyleCollection(bb, true, U);
        bs.populate(aJ, au, by);
        bc();
        aN = ao.parseCorrectionId(by).indexInPhrase;
        if (aq()) {
            bs.$node.removeClass(bs.SYNONYM_MISTAKE);
            bs.$node.addClass(bs.SYNONYM_MISTAKE)
        }
        var bE = bs.getHeight(),
            bA = bs.getWidth(),
            bz = {
                width: bA,
                height: bE
            },
            bC = aC.display.getScrollBarWidth();
        bg.css(bz);
        bs.$node.css(bz);
        var bH = aC.display.getOffsetInDoc($("." + bs.WORD_CLASS + "[" + N.CORRECTION_INDEX_ATTR + '="' + aN + '"]', b)[0]),
            bF = aC.display.getDocSize(document).width,
            bD = aC.display.getDocScroll(document).left;
        if (P) {
            bz.top = aW.mistake.top - bE - br
        } else {
            bz.top = aW.mistake.bottom
        }
        bz.left = Math.max(aW.mistake.left - bH.left, bD + bq);
        if (bz.left + bA > bF + bD - bq - bC) {
            bz.left = bF - bA - bq - bC
        }
        bs.$node.css({
            left: 0
        });
        if (!bG) {
            bg.css(bz);
            bn();
            bs.$node.stop().animate({
                opacity: 1
            }, {
                duration: 50,
                complete: bB
            })
        } else {
            if (aA) {
                aS()
            }
            bs.$node.stop().animate({
                opacity: 1
            }, {
                duration: 50
            });
            bg.stop().animate(bz, {
                duration: 50,
                complete: function() {
                    if (bs.isDisplayed) {
                        bn();
                        bB()
                    }
                }
            })
        }
        V();
        aC.unbindAndBindEvents(bw)
    };
    var at = function() {
        var bD = au.getCorrections(),
            bB = [],
            bC = {},
            bA = $("span." + bs.WORD_CLASS, b);
        var by = [],
            bz = [];
        $.each(bA, function(bJ, bM) {
            var bL = $(bM),
                bH = bL.text(),
                bE = Y[bL.attr(N.CORRECTION_INDEX_ATTR)].getCorrectionId(),
                bN = bD[bE].markGuid,
                bF = ao.parseCorrectionId(bE).indexInPhrase,
                bK = Y[bF],
                bI = bK ? bK.getMistakeText() : null;
            if (bI === bH) {
                var bG = e(bM, false);
                by.push({
                    token: bI,
                    firstSuggestion: bG.length > 0 ? bG[0] : null
                })
            }
            if (bN) {
                bB.push({
                    markGuid: bN,
                    text: bH
                });
                bC[bF] = {
                    replacement: bH,
                    correctionId: bE
                };
                if (bI !== bH) {
                    bz.push({
                        text: bH,
                        correction: bK,
                        phrase: aJ
                    })
                }
            }
        });
        aO();
        if (by.length > 0) {
            $(aQ).trigger(aQ.IGNORE_TOKENS, {
                ignoredTokens: by,
                control: aZ
            })
        }
        $(aQ).trigger(aQ.REPLACE_PHRASE, {
            tokensToReplaceList: bB,
            control: aZ,
            mistakeSpan: B,
            doc: aC.getDocumentContext(B)
        }).trigger(aQ.CACHE_NEW_SENTENCE, {
            control: aZ,
            tokensToReplaceMap: bC,
            uiPhrase: au,
            triggerItem: B
        }).trigger(aQ.APPROVE_CORRECTIONS, {
            approvals: bz
        });
        v();
        aJ = aZ.uiPhraseManager.getPhraseFromUiPhrase(au)
    };
    var am = function() {
        bs.$node.addClass(bs.HOVER_CLASS);
        bs.$node.css({
            opacity: 1
        })
    };
    var a5 = function() {
        bs.$node.removeClass(bs.HOVER_CLASS)
    };
    var aO = function() {
        bs.isDisplayed = false;
        bs.$node.stop().animate({
            opacity: 0
        }, {
            duration: 300,
            complete: function() {
                if (!bs.isDisplayed) {
                    bs.$node.css({
                        height: 0,
                        width: 0
                    });
                    if (!i.isVisible()) {
                        bg.css({
                            height: 0,
                            width: 0
                        })
                    }
                }
            }
        });
        $(document).unbind(a4, p);
        $(S).unbind(a4, p);
        l();
        al();
        bs.$node.removeClass(bs.SYNONYM_MISTAKE)
    };
    var l = function() {
        aC.unbindEvents(ad);
        i.$node.stop().animate({
            opacity: 0
        }, {
            duration: 150,
            complete: function() {
                i.$node.css({
                    height: 0,
                    width: 0,
                    visibility: "hidden"
                });
                if (!bs.isVisible()) {
                    bg.css({
                        height: 0,
                        width: 0
                    })
                } else {
                    if (ar) {
                        var by = bs.getHeight();
                        bg.css({
                            height: by,
                            top: aW.iFrame.bottom - by
                        })
                    }
                }
            }
        });
        i.$tip.stop().animate({
            opacity: 0
        }, {
            duration: 150,
            complete: function() {
                i.$tip.css({
                    height: 0,
                    width: 0,
                    visibility: "hidden"
                })
            }
        })
    };
    var p = function(by) {
        if (!aC.isNodeInContainer(ag, by.target)) {
            if (bs.isDisplayed) {
                aO();
                aS()
            }
        }
    };
    var aH = function(by) {
        clearTimeout(aV);
        clearTimeout(a6);
        a6 = setTimeout(function() {
            bs.setWordSpan(by.target);
            a1 = by.target;
            aR = $(a1, b);
            O();
            if (ar) {
                a9()
            } else {
                if (bs.isIgnoreWordVisible()) {
                    al(I)
                } else {
                    I()
                }
            }
        }, a2.CORRECTION_WORD_HOVER_DELAY)
    };
    var bp = function() {
        clearTimeout(a6);
        if (i.isVisible() || !ar) {
            aV = setTimeout(function() {
                if (ar) {
                    if (!G) {
                        l()
                    }
                } else {
                    if (!E) {
                        al()
                    }
                }
            }, a2.CORRECTION_WORD_LEAVE_TIMEOUT)
        }
    };
    var I = function() {
        var bC = bs.IGNORE_WORD_WIDTH,
            bA = bs.IGNORE_WORD_HEIGHT,
            bE = 0,
            bB = 0,
            bD = bs.wordCoordinates.right - 3 * bC / 4;
        if (!L()) {
            bs.ignoreWordBtn.src = bs.ignoreWordBtnSrc
        } else {
            bs.ignoreWordBtn.src = bs.ignoreWordSynonymBtnSrc
        }
        var bz = {
                left: bD + bC / 2
            },
            by = {
                left: bD,
                width: bC,
                height: bA
            };
        if (P) {
            bz.top = bE + bA / 2;
            bz.bottom = "auto";
            by.top = bE
        } else {
            bz.bottom = bB + bA / 2;
            bz.top = "auto";
            by.bottom = bB
        }
        bs.$ignoreWord.css(bz);
        bs.$ignoreWord.stop().animate(by, {
            duration: 150
        });
        aC.unbindAndBindEvents(aa)
    };
    var al = function(by) {
        bs.$ignoreWord.stop().animate({
            border: "0px solid black",
            width: 0,
            height: 0,
            left: (bs.wordCoordinates.left + bs.wordCoordinates.right) / 2
        }, {
            duration: 50,
            complete: function() {
                if (typeof by === "function") {
                    by()
                }
            }
        });
        aC.unbindEvents(aa);
        E = false
    };
    var bh = function() {
        E = true;
        bs.ignoreWordBtn.src = bs.ignoreWordHoverBtnSrc
    };
    var y = function() {
        E = false;
        bs.$ignoreWord.removeClass(bs.HOVER_CLASS);
        if (!L()) {
            bs.ignoreWordBtn.src = bs.ignoreWordBtnSrc
        } else {
            bs.ignoreWordBtn.src = bs.ignoreWordSynonymBtnSrc
        }
    };
    var av = function(bE) {
        var bF = au.getCorrections(),
            bA = [];
        var bz = Y[ao.parseCorrectionId(bE).indexInPhrase];
        var by = bz.getFragmentStart(),
            bC = bz.getFragmentEnd();
        var bB = aJ.getCorrectionManager(),
            bD = bB.isSynonym(bz);
        $.each(bF, function(bJ, bI) {
            var bK = ao.parseCorrectionId(bJ),
                bL = bK.indexInPhrase;
            var bH = Y[bL],
                bM = bH.getStart(),
                bG = bM + bH.getLength() - 1;
            if (by <= bM && bM <= bC && by <= bG && bG <= bC && (bD || !bB.isSynonym(bH))) {
                bA.push({
                    indexInPhrase: bL
                })
            }
        });
        return bA
    };
    var ae = function() {
        var bB = B.getAttribute(N.SPAN_CONTEXT_ID),
            bz = av(bB);
        var by = aR.attr(N.CORRECTION_INDEX_ATTR),
            bA = true;
        $.each(bz, function(bE, bD) {
            var bF = bD.indexInPhrase,
                bC = Y[bF].getMistakeText();
            if (by !== bF && !a0.isTokenIgnored(bC)) {
                bA = false;
                return false
            }
            return true
        });
        return bA
    };
    var bj = function() {
        var bA = (function bz() {
            var bC = aR.attr(N.CORRECTION_INDEX_ATTR);
            return Y[bC].getMistakeText()
        })();
        $(aQ).trigger(aQ.IGNORE_TOKEN, {
            token: bA,
            control: aZ,
            mistakeSpan: B
        });
        var by = aR.attr(N.CORRECTION_INDEX_ATTR),
            bB = Y[by];
        J(bB, aQ.IGNORE_TOKEN);
        if (ae()) {
            aO()
        } else {
            bs.populate(aJ, au, B.getAttribute(N.SPAN_CONTEXT_ID));
            aC.unbindAndBindEvents(bw);
            al()
        }
        return false
    };
    var X = function() {
        var bz = B.getAttribute(N.SPAN_CONTEXT_ID),
            bA = ao.getCorrectionsInFragmentByCorrectionId(aJ, bz),
            by = [];
        $.each(bA, function(bC, bB) {
            by.push({
                token: bB.getMistakeText()
            })
        });
        bv(bA);
        if (by.length > 0) {
            $(aQ).trigger(aQ.IGNORE_TOKENS, {
                ignoredTokens: by,
                control: aZ,
                mistakeSpan: B
            })
        }
        aO();
        return false
    };
    var bu = function() {
        bs.$bubbleContent.addClass(bs.HOVER_CLASS);
        bs.$node.addClass(bs.CONTENT_HOVER)
    };
    var Q = function() {
        bs.$bubbleContent.removeClass(bs.HOVER_CLASS);
        bs.$node.removeClass(bs.CONTENT_HOVER)
    };
    var W = function() {
        bs.populateText(B.getAttribute(N.SPAN_CONTEXT_ID), true);
        bs.$ignoreAll.addClass(bs.HOVER_CLASS);
        bs.$node.addClass(bs.IGNORE_ALL_HOVER)
    };
    var aP = function() {
        bs.populate(aJ, au, B.getAttribute(N.SPAN_CONTEXT_ID));
        aC.unbindAndBindEvents(bw);
        bs.$ignoreAll.removeClass(bs.HOVER_CLASS);
        bs.$node.removeClass(bs.IGNORE_ALL_HOVER)
    };
    var aE = function(by) {
        $("." + bs.WORD_CLASS + "[" + N.CORRECTION_INDEX_ATTR + '="' + w + '"]', b).text(by)
    };
    var a9 = function() {
        var bz = function() {
            var bL = bm([bH.left, aW.phrase.left], [bH.left + bH.width, aW.phrase.right]),
                bN = bs.getHeight() + ak + i.getHeight(),
                bM = P ? aW.iFrame.bottom - bN : aW.iFrame.top;
            bg.css({
                width: bL,
                height: bN,
                top: bM,
                left: Math.min(bH.left, aW.phrase.left)
            });
            bn();
            bs.$node.css({
                left: aW.phrase.left - aW.iFrame.left
            });
            q();
            O()
        };
        var bG = function() {
            F()
        };
        var bF = function() {
            bf()
        };
        w = a1.getAttribute(N.CORRECTION_INDEX_ATTR);
        var by = Y[w],
            bD = a7(by, true);
        i.populate(bD, by.getFirstSuggestion());
        var bK = i.getHeight(),
            bJ = i.getWidth(),
            bI = aC.display.getDocSize(document).width,
            bC = aC.display.getDocScroll(document).left;
        var bB = i.$node.find("li:first");
        var bH = {
            width: bJ,
            height: bK,
            left: Math.max(aW.wordCorrection.left - aC.display.getNodePaddingBorderAndMargin(bB[0], b, "left"), bq)
        };
        if (bH.left + bH.width > bI + bC - bq) {
            bH.left = bI - bH.width - bq
        }
        bz();
        var bA = $.extend({}, bH);
        bA.left -= aW.iFrame.left;
        var bE = {
            width: i.TIP_WIDTH,
            height: i.TIP_HEIGHT,
            top: bs.coordinates.top + bs.getPaddingBorderAndMargin() - i.TIP_HEIGHT,
            left: (bs.wordCoordinates.right + bs.wordCoordinates.left) / 2 - (i.TIP_WIDTH / 2)
        };
        if (!P) {
            bE.top = bs.coordinates.bottom - bs.getPaddingBorderAndMargin()
        }
        if (!i.isVisible()) {
            i.$tip.css({
                width: bE.width,
                height: 0,
                left: bE.left,
                top: bE.top + bE.height,
                opacity: 1,
                visibility: "visible"
            });
            i.$tip.stop().animate({
                height: bE.height,
                top: bE.top
            }, {
                duration: 50,
                complete: bF
            });
            i.$node.css($.extend({
                visibility: "visible"
            }, bA));
            i.$node.stop().animate({
                opacity: 1
            }, {
                duration: 50,
                complete: bG
            })
        } else {
            i.$tip.stop().animate({
                height: 0,
                top: aW.tip.bottom - aW.iFrame.top
            }, {
                duration: 50,
                complete: function() {
                    i.$tip.css({
                        width: bE.width,
                        height: 0,
                        left: bE.left,
                        top: bE.top + bE.height,
                        opacity: 1
                    });
                    i.$tip.stop().animate({
                        height: bE.height,
                        top: bE.top
                    }, {
                        duration: 50,
                        complete: bF
                    })
                }
            });
            i.$node.stop().animate(bA, {
                duration: 50,
                complete: bG
            })
        }
        aC.unbindAndBindEvents(ad)
    };
    var aK = function() {
        G = true;
        i.$node.stop().animate({
            opacity: 1
        }, 50);
        bs.$node.stop().animate({
            opacity: 1
        }, 50)
    };
    var bx = function() {
        G = false;
        var by = a1;
        bs.setWordSpan(null);
        a1 = null;
        setTimeout(function() {
            if (!G && by !== a1) {
                l()
            }
        }, a2.SUGGESTIONS_LEAVE_TIMEOUT)
    };
    var ai = function() {
        G = true
    };
    var aX = function() {
        G = false
    };
    var bt = function(bA) {
        var by = $(bA.target),
            bz = by.text(),
            bB = Y[w].getCorrectionId();
        aE(bz);
        l()
    };
    var bo = function(bz) {
        var by = $(bz.target);
        aE(by.text());
        by.addClass(i.SUGGESTION_HOVER_CLASS)
    };
    var H = function(bA) {
        var bz = $(bA.target),
            by = Y[w];
        if (by) {
            aE(by.getFirstSuggestion())
        }
        bz.removeClass(i.SUGGESTION_HOVER_CLASS)
    };
    var c = function() {
        var bz = aC.getDocumentContext(B),
            by = aC.display.getDocumentOffset(bz, document, false);
        aW.mistake = ax(B, u, bz);
        aW.mistake.left += by.left;
        aW.mistake.right += by.left;
        aW.mistake.top += by.top;
        aW.mistake.bottom += by.top
    };
    var bn = function() {
        aW.iFrame = ax(t, bg, document)
    };
    var q = function() {
        bs.coordinates = ax(bs.node, bs.$node, b);
        bd(bs.coordinates, "phrase")
    };
    var F = function() {
        i.coordinates = ax(i.node, i.$node, b);
        bd(i.coordinates, "suggestions")
    };
    var O = function() {
        bs.wordCoordinates = ax(a1, aR, b);
        bd(bs.wordCoordinates, "wordCorrection")
    };
    var bf = function() {
        i.tipCoordinates = ax(i.tipNode, i.$tip, b);
        bd(i.tipCoordinates, "tip")
    };
    var ax = function(bB, bz, bC) {
        var bA = aC.display.getOffsetInDoc(bB);
        if (bC !== document) {
            var by = aC.display.getDocScroll(bC);
            bA.left -= by.left;
            bA.top -= by.top
        }
        return $.extend(bA, {
            right: bA.left + bz.width(),
            bottom: bA.top + bz.height()
        })
    };
    var bd = function(by, bz) {
        aW[bz] = $.extend({}, by);
        aW[bz].left += aW.iFrame.left;
        aW[bz].right += aW.iFrame.left;
        aW[bz].top += aW.iFrame.top;
        aW[bz].bottom += aW.iFrame.top
    };
    var V = function() {
        var bA = function(bG) {
            if (B === bz) {
                var bI = bG.pageX,
                    bF = bG.pageY,
                    bH = aC.getDocumentContext(bG.target),
                    bC = aC.display.getDocumentOffset(bH, document, false),
                    bD = aC.display.getDocScroll(bH);
                if (bH !== document) {
                    bI -= bD.left;
                    bF -= bD.top
                } else {
                    (function bE() {
                        if (bI !== bG.clientX && bD.left === 0 || bF !== bG.clientY && bD.top === 0) {
                            bI = bG.clientX;
                            bF = bG.clientY
                        }
                    })()
                }
                bI += bC.left;
                bF += bC.top;
                var bJ = aC.display.calcDistanceFromRectangles([aW.mistake, aW.phrase], bI, bF);
                if ((bF <= aW.mistake.bottom || !P) && bJ < x) {
                    if (bG.data && bG.data.timeoutHandler) {
                        setTimeout(bG.data.timeoutHandler, a2.HOT_ZONE_TIMEOUT)
                    }
                } else {
                    if (bs.isDisplayed) {
                        aO();
                        aS()
                    }
                }
            }
        };
        var bB = function bB() {
            $(document).one("mousemove", {
                timeoutHandler: bB
            }, bA)
        };
        var by = function by() {
            $(S).one("mousemove", {
                timeoutHandler: by
            }, bA)
        };
        var bz = B;
        bB();
        by()
    };
    var bm = function(bz, by) {
        return Math.max.apply(Math, by) - Math.min.apply(Math, bz)
    };
    return {
        load: j,
        initManager: bl,
        isMenuVisible: be,
        handleKey: ba,
        bindElementMenuHandler: aF,
        unbindElementMenuHandler: ay
    }
})();
GS_WEB_WIDGET.browser = (function() {
    var e = null,
        B = null,
        x = "N/A";
    var u = {},
        C = null;
    var D = navigator.userAgent.toLowerCase();
    var f = $.browser.version;
    var a = /chrome/.test(D) && !/maxthon/.test(D);
    var i = $.browser.mozilla;
    var E = $.browser.msie;
    var A = /webkit/.test(D) && !/chrome/.test(D) && !/maxthon/.test(D);
    var q = /maxthon/.test(D);
    var o = $.browser.webkit;
    var l = /Mac/i.test(navigator.platform);
    var s = E && f < 9;
    var t = E && f < 8;
    var b = typeof chrome !== "undefined" && typeof chrome.extension !== "undefined";
    var r = typeof safari !== "undefined";
    var z = typeof self !== "undefined" && typeof self.port !== "undefined";
    var y = typeof runtime !== "undefined";
    var n = b || r || z || y;

    function k() {
        var I = GS_WEB_WIDGET.namespace("defs"),
            J = GS_WEB_WIDGET.namespace("staticUtils");
        if (a) {
            e = I.BROWSERS.CHROME;
            x = I.BROWSERS_DISPLAY_NAME.CHROME
        } else {
            if (A) {
                e = I.BROWSERS.SAFARI;
                x = I.BROWSERS_DISPLAY_NAME.SAFARI
            } else {
                if (E) {
                    e = I.BROWSERS.MSIE;
                    x = I.BROWSERS_DISPLAY_NAME.IE
                } else {
                    if (i) {
                        e = I.BROWSERS.FIREFOX;
                        x = I.BROWSERS_DISPLAY_NAME.FIREFOX
                    } else {
                        if (q) {
                            e = I.BROWSERS.MAXTHON;
                            x = I.BROWSERS_DISPLAY_NAME.MAXTHON
                        }
                    }
                }
            }
        }
        if (o) {
            B = I.BROWSERS.WEBKIT
        }
        if (!window.JSON) {
            window.JSON = {};
            var H = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                L = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                M, G, O = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                N;

            function F(P) {
                L.lastIndex = 0;
                return L.test(P) ? '"' + P.replace(L, function(Q) {
                    var R = O[Q];
                    return typeof R === "string" ? R : "\\u" + ("0000" + Q.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + P + '"'
            }

            function K(W, T) {
                var R, Q, X, P, U = M,
                    S, V = T[W];
                if (V && typeof V === "object" && typeof V.toJSON === "function") {
                    V = V.toJSON(W)
                }
                if (typeof N === "function") {
                    V = N.call(T, W, V)
                }
                switch (typeof V) {
                    case "string":
                        return F(V);
                    case "number":
                        return isFinite(V) ? String(V) : "null";
                    case "boolean":
                    case "null":
                        return String(V);
                    case "object":
                        if (!V) {
                            return "null"
                        }
                        M += G;
                        S = [];
                        if (Object.prototype.toString.apply(V) === "[object Array]") {
                            P = V.length;
                            for (R = 0; R < P; R += 1) {
                                S[R] = K(R, V) || "null"
                            }
                            X = S.length === 0 ? "[]" : M ? "[\n" + M + S.join(",\n" + M) + "\n" + U + "]" : "[" + S.join(",") + "]";
                            M = U;
                            return X
                        }
                        if (N && typeof N === "object") {
                            P = N.length;
                            for (R = 0; R < P; R += 1) {
                                Q = N[R];
                                if (typeof Q === "string") {
                                    X = K(Q, V);
                                    if (X) {
                                        S.push(F(Q) + (M ? ": " : ":") + X)
                                    }
                                }
                            }
                        } else {
                            for (Q in V) {
                                if (Object.prototype.hasOwnProperty.call(V, Q)) {
                                    X = K(Q, V);
                                    if (X) {
                                        S.push(F(Q) + (M ? ": " : ":") + X)
                                    }
                                }
                            }
                        }
                        X = S.length === 0 ? "{}" : M ? "{\n" + M + S.join(",\n" + M) + "\n" + U + "}" : "{" + S.join(",") + "}";
                        M = U;
                        return X
                }
            }
            window.JSON.stringify = function(S, Q, R) {
                var P;
                M = "";
                G = "";
                if (typeof R === "number") {
                    for (P = 0; P < R; P += 1) {
                        G += " "
                    }
                } else {
                    if (typeof R === "string") {
                        G = R
                    }
                }
                N = Q;
                if (Q && typeof Q !== "function" && (typeof Q !== "object" || typeof Q.length !== "number")) {
                    throw new Error("JSON.stringify")
                }
                return K("", {
                    "": S
                })
            }
        }
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(R) {
                if (this === void 0 || this === null) {
                    throw new TypeError()
                }
                var S = Object(this);
                var P = S.length >>> 0;
                if (P === 0) {
                    return -1
                }
                var T = 0;
                if (arguments.length > 0) {
                    T = Number(arguments[1]);
                    if (T !== T) {
                        T = 0
                    } else {
                        if (T !== 0 && T !== (1 / 0) && T !== -(1 / 0)) {
                            T = (T > 0 || -1) * Math.floor(Math.abs(T))
                        }
                    }
                }
                if (T >= P) {
                    return -1
                }
                var Q = T >= 0 ? T : Math.max(P - Math.abs(T), 0);
                for (; Q < P; Q++) {
                    if (Q in S && S[Q] === R) {
                        return Q
                    }
                }
                return -1
            }
        }
        if (window.NodeFilter) {
            u = window.NodeFilter
        } else {
            u.SHOW_ALL = -1;
            u.SHOW_ELEMENT = 1;
            u.SHOW_ATTRIBUTE = 2;
            u.SHOW_TEXT = 4;
            u.SHOW_CDATA_SECTION = 8;
            u.SHOW_ENTITY_REFERENCE = 16;
            u.SHOW_ENTITY = 32;
            u.SHOW_PROCESSING_INSTRUCTION = 64;
            u.SHOW_COMMENT = 128;
            u.SHOW_DOCUMENT = 256;
            u.SHOW_DOCUMENT_TYPE = 512;
            u.SHOW_DOCUMENT_FRAGMENT = 1024;
            u.SHOW_NOTATION = 2048
        }
        if (document.createTreeWalker) {
            C = function(P, S, Q, R) {
                return document.createTreeWalker(P, S, Q, R)
            }
        } else {
            C = function(R, W, U, V) {
                if (U != null || V == true) {
                    return null
                }
                var T = null;
                var S = function(X) {
                    return !!X && (X.nodeType == 1 && (W & u.SHOW_ELEMENT) || X.nodeType == 3 && (W & u.SHOW_TEXT))
                };
                var P = function() {
                    var X = null,
                        Y = T;
                    if (Y === null) {
                        Y = R.hasChildNodes() ? R.childNodes[0] : null;
                        if (S(Y)) {
                            X = Y
                        }
                    }
                    if (X === null) {
                        while (Y !== null) {
                            Y = J.getNextInTree(R, Y);
                            if (S(Y)) {
                                X = Y;
                                break
                            }
                        }
                    }
                    if (X !== null) {
                        T = X
                    }
                    return X
                };
                var Q = function() {
                    var X = null,
                        Y = T;
                    if (Y !== null) {
                        while (Y !== null) {
                            Y = J.getPreviousInTree(R, Y);
                            if (S(Y)) {
                                X = Y;
                                break
                            }
                        }
                    }
                    if (X !== null) {
                        T = X
                    }
                    return X
                };
                return {
                    nextNode: P,
                    previousNode: Q,
                    currentNode: T
                }
            }
        }
    }
    var m = function() {
        return u
    };
    var c = function() {
        return C
    };
    var v = function() {
        return e
    };
    var w = function() {
        return B
    };
    var g = null;
    var h = function() {
        if (g === null) {
            var F = document.createElement("canvas");
            g = !!(F.getContext && F.getContext("2d"))
        }
        return g
    };
    var j = null;
    var p = function() {
        if (j === null) {
            j = !i && (t || !s)
        }
        return j
    };
    var d = function() {
        return x
    };
    return {
        load: k,
        getType: v,
        getLayout: w,
        version: f,
        getBrowserDisplayName: d,
        isChrome: a,
        isFirefox: i,
        isIe: E,
        isSafari: A,
        isMaxthon: q,
        isWebkit: o,
        isMac: l,
        isIeBefore9: s,
        isIeBefore8: t,
        getNodeFilter: m,
        getTreeWalker: c,
        isExtensionMode: n,
        isChromeExtension: b,
        isSafariExtension: r,
        isFireFoxExtension: z,
        isMaxthonExtension: y,
        isCanvasSupported: h,
        isBgAttachLocalSupported: p
    }
})();
"use strict";
GS_WEB_WIDGET.logger = (function() {
    var s = null,
        a = null,
        i = null,
        r = null;
    var q = false,
        k = {
            debug: 1,
            info: 2,
            warning: 3,
            error: 4,
            assert: 5
        },
        c = k.error;
    var f = function() {
        a = GS_WEB_WIDGET.namespace("defs");
        r = GS_WEB_WIDGET.namespace("browser");
        i = GS_WEB_WIDGET.namespace("protocol")
    };
    var m = function() {
        s = r.isFireFoxExtension ? g() : typeof window.console !== "undefined" ? window.console : null;
        if (s && typeof s.debug === "undefined") {
            s.debug = s.debug || s.log
        }(function t() {
            function u(v) {
                return v >= 1 && v <= 4
            }
            i.background.getLoggerInfo(function(v) {
                if (v && v.hasOwnProperty("loggerOn")) {
                    q = v.loggerOn === "true"
                }
                if (v && v.hasOwnProperty("loggerLevel")) {
                    c = u(parseInt(v.loggerLevel)) ? parseInt(v.loggerLevel) : c
                }
                if (!b()) {
                    var w = r.isFireFoxExtension ? g() : window.console;
                    if (typeof w !== "undefined") {
                        w.log("Running Ginger Widget version " + a.VERSION)
                    }
                }
            })
        })()
    };
    var j = function() {
        function t() {
            try {
                return "localStorage" in window && window.localStorage
            } catch (u) {
                return false
            }
        }
        if (t()) {
            return {
                loggerOn: window.localStorage.loggerOn,
                loggerLevel: window.localStorage.loggerLevel
            }
        } else {
            return null
        }
    };
    var g = function() {
        function t(v, u) {
            if (!!i.background && !!i.background.logFirefoxExtMsg) {
                i.background.logFirefoxExtMsg({
                    msg: v,
                    type: u
                }, function() {})
            }
        }
        return {
            log: function(u) {
                t(u, "log")
            },
            debug: function(u) {
                t(u, "debug")
            },
            info: function(u) {
                t(u, "info")
            },
            warn: function(u) {
                t(u, "warn")
            },
            error: function(u) {
                t(u, "error")
            },
            assert: function(u) {
                t(u, "assert")
            }
        }
    };
    var b = function() {
        return q
    };
    var h = function(t) {
        return b() && s && t >= c
    };
    var e = function(t) {
        n(t)
    };
    var n = function(t) {
        if (h(k.info)) {
            s.log(t)
        }
    };
    var l = function(t) {
        if (h(k.debug)) {
            s.debug(t)
        }
    };
    var d = function(t) {
        if (h(k.warning)) {
            s.warn(t)
        }
    };
    var p = function(t) {
        if (h(k.error)) {
            s.error(t)
        }
    };
    var o = function(t) {
        if (h(k.assert)) {
            s.assert(t)
        }
    };
    return {
        load: f,
        init: m,
        loggerOn: b,
        log: e,
        logInfo: n,
        logDebug: l,
        logWarning: d,
        logError: p,
        logAssert: o,
        readLoggerStartupParams: j
    }
})();
"use strict";
GS_WEB_WIDGET.utils = (function() {
    var D = null,
        N = null,
        e = null,
        L = null;
    var K = function() {
        D = GS_WEB_WIDGET.namespace("logger");
        N = GS_WEB_WIDGET.namespace("defs");
        e = GS_WEB_WIDGET.namespace("browser");
        L = GS_WEB_WIDGET.namespace("staticUtils")
    };
    var h = function() {
        return {
            nextId: 1,
            items: {},
            get: function(T) {
                return this.items[T]
            },
            put: function(U, T) {
                var V = typeof T !== "undefined" ? T : this.nextId++;
                this.items[V] = U;
                return V
            },
            remove: function(T) {
                delete this.items[T]
            },
            pop: function(U) {
                var T = this.get(U);
                this.remove(U);
                return T
            }
        }
    };
    var r = function() {
        return new Date().getTime()
    };
    var A = function(U, V, T) {
        if (U) {
            if (U == V) {
                return T ? true : false
            }
            while (V) {
                V = V.parentNode;
                if (V == U) {
                    return true
                }
            }
        }
        return false
    };
    var B = function(V, U) {
        var T = V;
        while (T = T.parentNode) {
            if (U(T)) {
                return T
            }
        }
        return null
    };
    var c = function(U, T) {
        if (T(U)) {
            return U
        }
        return B(U, T)
    };
    var F = function(T) {
        if (T) {
            if (D.loggerOn()) {
                D.logDebug(T.ownerDocument)
            }
            return T.ownerDocument
        } else {
            return window.document
        }
    };
    var n = function(T, W) {
        var U = false;
        if (T && W) {
            if (T.compareDocumentPosition) {
                var V = T.compareDocumentPosition(W);
                U = (V & Node.DOCUMENT_POSITION_CONTAINED_BY) !== 0
            } else {
                U = T.contains(W)
            }
        }
        return U
    };
    var y = function(U) {
        try {
            return U.contentWindow ? (U.contentWindow.document || null) : (U.contentDocument || null)
        } catch (T) {
            return null
        }
    };
    var P = function(T) {
        if (!T) {
            return null
        }
        var U = F(T);
        return U.defaultView || U.parentWindow
    };
    var x = function(T) {
        return T.head || $(T).find("head")
    };
    var H = function(T) {
        return T.body || $(T).find("body")
    };
    var j = function(U, T) {
        return $.grep(U, function(W, V) {
            return W !== T
        })
    };
    var s = function(U, T) {
        $.each(T, function(V, W) {
            U = j(U, W)
        });
        return U
    };
    var G = function(T) {
        return T && T.length > 0 && T.charAt(0) === T.charAt(0).toUpperCase()
    };
    var m = function(T) {
        if (T && T.hasChildNodes()) {
            while (T.childNodes.length > 0) {
                T.removeChild(T.firstChild)
            }
        }
    };
    var k = function(U) {
        var V = true,
            T = null;
        if (U && U.nodeValue) {
            V = U.nodeValue.replace(/\s/g, "") === ""
        }
        return V
    };
    var Q = function(T) {
        if (e.isIeBefore9) {
            return !T || !(T.createRange().text || {}).length
        } else {
            return !T.rangeCount || T.rangeCount === 1 && T.getRangeAt(0).collapsed
        }
    };
    var f = function() {
        var T = {
            isExtension: e.isExtensionMode
        };
        if (T.isExtension) {
            if (e.isChromeExtension) {
                T.extensionName = "Chrome"
            } else {
                if (e.isSafariExtension) {
                    T.extensionName = "Safari"
                } else {
                    if (e.isFireFoxExtension) {
                        T.extensionName = "Firefox"
                    }
                }
            }
        }
        return T
    };
    var d = function() {
        try {
            var T = document.getElementsByTagName("script");
            if (T && T.length) {
                var V = T.length - 1;
                var U = T[V];
                return U.src.replace(/\w+\.js$/, "")
            }
        } catch (W) {
            if (D.loggerOn()) {
                D.logError("getSourceUrl: Could not detect source URL")
            }
        }
        return ""
    };
    var q = function(U) {
        try {
            return U.URL.substring(0, 5).toLowerCase() === "https"
        } catch (T) {
            if (D.loggerOn()) {
                D.logError("isDocumentHttps: Could not detect document protocol")
            }
        }
        return false
    };
    var J = null;
    var z = function() {
        return "https://cdn.gingersoftware.com"
    };
    var p = function() {
        if (!J) {
            return q(document) ? z() : "http://cdn.gingersoftware.com"
        }
        return J
    };
    var a = function() {
        try {
            return "localStorage" in window && window.localStorage
        } catch (T) {
            return false
        }
    };
    var l = function(V) {
        var U = false,
            T = V,
            W = null;
        while (!U && T) {
            if ($(T).hasClass(N.TEXT_INPUT_RICHTEXT_CLASS)) {
                return true
            }
            W = T.nodeName.toLowerCase();
            switch (W) {
                case "div":
                    U = !!(T.getAttribute("contentEditable") || T.contentEditable === "true");
                    break;
                case "body":
                    U = !!(T.contentEditable == "true" || T.isContentEditable || T.ownerDocument.designMode === "on");
                    break;
                default:
                    break
            }
            T = T.parentNode
        }
        return U
    };

    function O(V) {
        var T = $("#" + N.GINGER_STYLE_ELEMENT_ID, V),
            U = T[0];
        return U.sheet ? U.sheet : U.styleSheet
    }
    var R = function(V, T, U) {
        var X = O(V),
            W = X.cssRules ? X.cssRules : X.rules;
        return b(V, T, U, W.length)
    };
    var b = function(W, T, V, U) {
        var Y = O(W),
            X = Y.cssRules ? Y.cssRules : Y.rules;
        U = U || X.length;
        if (Y.insertRule) {
            if (U < X.length) {
                Y.deleteRule(U)
            }
            Y.insertRule(T + " {" + V + "}", U)
        } else {
            if (Y.addRule) {
                if (U < X.length) {
                    Y.removeRule(U)
                }
                Y.addRule(T, V, U)
            }
        }
        return U
    };
    var o = function(U, T) {
        var V = O(U);
        if (V.cssRules) {
            if (V.cssRules.length > T) {
                V.deleteRule(T)
            }
        } else {
            if (V.removeRule && V.rules.length > T) {
                V.removeRule(T)
            }
        }
    };
    var u = function() {
        function ab(aq, ap, ao, an, ak, ar) {
            function al(au, at, ax) {
                var av = (au + at) / 2;
                if (ax == 0 || at - au < ar) {
                    return av
                }
                var aw = "(" + aq + ":" + av + ap + ")";
                if (aj(aw).matches) {
                    return al(av, at, ax - 1)
                } else {
                    return al(au, av, ax - 1)
                }
            }
            var aj, am, ai, ah;
            if (window.matchMedia) {
                aj = window.matchMedia
            } else {
                am = document.getElementsByTagName("head")[0];
                ai = document.createElement("style");
                ah = document.createElement("div");
                ah.className = "mediaQueryBinarySearch";
                am.appendChild(ai);
                ah.style.display = "none";
                document.body.appendChild(ah);
                aj = function(au) {
                    ai.sheet.insertRule("@media " + au + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                    var at = getComputedStyle(ah, null).textDecoration == "underline";
                    ai.sheet.deleteRule(0);
                    return {
                        matches: at
                    }
                }
            }
            var ag = al(ao, an, ak);
            if (ah) {
                am.removeChild(ai);
                document.body.removeChild(ah)
            }
            return ag
        }

        function W() {
            var ag = document.body.getBoundingClientRect();
            var ah = (ag.right - ag.left) / document.body.offsetWidth;
            ah = Math.round(ah * 100) / 100;
            return {
                zoom: ah,
                devicePxPerCssPx: ah
            }
        }

        function V() {
            return {
                zoom: screen.systemXDPI / screen.logicalXDPI,
                devicePxPerCssPx: screen.deviceXDPI / screen.logicalXDPI
            }
        }

        function aa() {
            var ag = window.devicePixelRatio != null ? window.devicePixelRatio : 1,
                ah;
            if (Math.abs(window.orientation) == 90) {
                ah = screen.height
            } else {
                ah = screen.width
            }
            var ai = ah / window.innerWidth;
            return {
                zoom: ai,
                devicePxPerCssPx: ai * ag
            }
        }

        function U() {
            var ag = window.devicePixelRatio != null ? window.devicePixelRatio : 1;
            var ah = document.createElement("div"),
                al = document.createElement("div");
            var ai = function(am) {
                return am.replace(/;/g, " !important;")
            };
            ah.setAttribute("style", ai("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;"));
            al.innerHTML = "1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />0";
            al.setAttribute("style", ai("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
            ah.appendChild(al);
            document.body.appendChild(ah);
            var ak = 1000 / al.clientHeight;
            ak = Math.round(ak * 100) / 100;
            var aj = {
                zoom: ak,
                devicePxPerCssPx: ag * ak
            };
            document.body.removeChild(ah);
            return aj
        }

        function ae() {
            var ag = screen.width / ab("min-device-width", "px", 0, 6000, 20, 0.0001);
            ag = Math.round(ag * 100) / 100;
            return {
                zoom: ag,
                devicePxPerCssPx: ag
            }
        }

        function ac() {
            var ah = document.createElement("div"),
                an = document.createElement("div");
            ah.setAttribute("style", "width:0; height:0; overflow:hidden;visibility:hidden; position: absolute");
            an.style.width = an.style.height = "500px";
            var ag = an;
            for (var aj = 0; aj < 10; ++aj) {
                var ai = document.createElement("div");
                ai.style.overflowY = "scroll";
                ag.appendChild(ai);
                ag = ai
            }
            ah.appendChild(an);
            document.body.appendChild(ah);
            var ao = an.clientWidth;
            var am = ag.clientWidth;
            var al = (ao - am) / 10;
            document.body.removeChild(ah);
            var ap = 15;
            if (-1 != navigator.platform.indexOf("Win")) {
                ap = 17
            }
            var ak = ap / al;
            ak = Math.round(ak * 100) / 100;
            return {
                zoom: ak,
                devicePxPerCssPx: ak
            }
        }

        function Z() {
            var ag = ab("min--moz-device-pixel-ratio", "", 0, 10, 20, 0.0001);
            ag = Math.round(ag * 100) / 100;
            return {
                zoom: ag,
                devicePxPerCssPx: ag
            }
        }

        function ad() {
            var ag = document.createElement("div");
            ag.style.position = "fixed";
            ag.style.width = "100%";
            ag.style.height = "100%";
            ag.style.top = ag.style.left = "0";
            ag.style.visibility = "hidden";
            document.body.appendChild(ag);
            var ah = window.innerWidth / ag.offsetWidth;
            document.body.removeChild(ag);
            return {
                zoom: ah,
                devicePxPerCssPx: ah
            }
        }

        function Y() {
            var ag = window.outerWidth / window.innerWidth;
            ag = Math.round(ag * 100) / 100;
            return {
                zoom: ag,
                devicePxPerCssPx: ag
            }
        }

        function X() {
            var ag;
            if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
                return V()
            } else {
                if ("ontouchstart" in window && document.body.style.webkitTextSizeAdjust != null) {
                    return aa()
                } else {
                    if (document.body.style.webkitTextSizeAdjust != null) {
                        return U()
                    } else {
                        if (-1 != navigator.userAgent.indexOf("Firefox/3.5")) {
                            return ae()
                        } else {
                            if (-1 != navigator.userAgent.indexOf("Firefox/3.6")) {
                                return ac()
                            } else {
                                if (-1 != navigator.appVersion.indexOf("MSIE 7.")) {
                                    return W()
                                } else {
                                    if (-1 != navigator.userAgent.indexOf("Opera")) {
                                        var ah = navigator.userAgent.indexOf("Version/");
                                        if (11.01 < parseFloat(navigator.userAgent.substr(ah + 8))) {
                                            return Y()
                                        } else {
                                            return ad()
                                        }
                                    } else {
                                        if (0.001 < (ag = Z()).zoom) {
                                            return ag
                                        } else {
                                            return {
                                                zoom: 1,
                                                devicePxPerCssPx: 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function af() {
            return X().zoom
        }

        function T() {
            return X().devicePxPerCssPx
        }
        return af()
    };
    var E = function(U) {
        if (!U) {
            return null
        }
        var T = N.UN_EDITABLE;
        switch (U.tagName.toUpperCase()) {
            case N.INPUT_CONTROL:
                T = N.INPUT_CONTROL;
                break;
            case N.TEXTAREA_CONTROL:
                T = N.TEXTAREA_CONTROL;
                break;
            default:
                T = l(U) ? N.RICHTEXT_CONTROL : N.UN_EDITABLE
        }
        return T
    };
    var g = function(U, V) {
        if (document.createEvent) {
            var T = document.createEvent("HTMLEvents");
            T.initEvent(V, true, true);
            return !U.dispatchEvent(T)
        } else {
            var T = document.createEventObject();
            return U.fireEvent("on" + V, T)
        }
    };
    var v = function(T) {
        return /[\u00C0-\u00D6]|[\u00D8-\u00F6]|[\u00F8-\u01BF]|[\u01C4-\u024F]|[\u0250\u0252-\u0260]|[\u0263-\u0269]|[\u026B-\u0273]|[\u0275-\u027F]|[\u0281-\u028E]|[\u0290-\u0298]|[\u029A-\u029B]|[\u029D-\u02AE]|[\u037B-\u037D]|[\u0386-\u0482]|[\u048A-\u0588]|[\u058A-\u05B7]|[\u05C6-\u05EA]|[\u0600-\u063A]|[\u0641-\u066A]|[\u066E-\u0FCD]|[\u0FDB-\u1D2F]/.test(T)
    };
    var i = function(U, T) {
        return U.clean == T.clean
    };
    var C = function(U, W) {
        var T = U.createElement("iframe"),
            V;
        T.width = "0";
        T.height = "0";
        T.frameBorder = "0";
        T.style.border = "0px solid";
        T.src = "about:blank";
        U.body.appendChild(T);
        V = y(T);
        if (!e.isWebkit) {
            V.open();
            V.close()
        }
        if (typeof W === "function") {
            $(V).ready(W(T, V))
        }
    };
    var I = function(V, U, W) {
        $("#" + W, V).remove();
        if (e.isIeBefore8) {
            (function T() {
                var X = V.body,
                    Y = V.createElement("style");
                Y.type = "text/css";
                if (W) {
                    Y.id = W
                }
                if (Y.styleSheet) {
                    Y.styleSheet.cssText = V.createTextNode(U).nodeValue
                } else {
                    Y.appendChild(U)
                }
                X.insertBefore(Y, X.firstChild)
            })()
        } else {
            $('<style type="text/css"' + (W ? (' id="' + W + '"') : "") + ">" + U + "</style>").appendTo(x(V))
        }
    };
    var M = function(T) {
        $.each(T, function(U, V) {
            $(V.selector, V.doc || document).unbind(V.eventName, V.callback);
            $(V.selector, V.doc || document).bind(V.eventName, V.callback)
        })
    };
    var S = function(T) {
        $.each(T, function(U, V) {
            $(V.selector, V.doc || document).unbind(V.eventName, V.callback)
        })
    };
    var t = function(V, U) {
        var V = arguments[0],
            T = Array.prototype.slice.call(arguments);
        T.splice(0, 1);
        if (V && typeof V === "function") {
            V.apply(null, T)
        }
    };
    var w = function(U, T) {
        return Math.floor(Math.random() * (T - U + 1) + U)
    };
    return {
        load: K,
        createRepository: h,
        getTime: r,
        isChild: A,
        getAncestor: B,
        getAncestorOrSelf: c,
        getDocumentContext: F,
        isNodeInContainer: n,
        getFrameDocument: y,
        getOwnerWindow: P,
        getDocumentHead: x,
        getDocumentBody: H,
        removeValueFromArray: j,
        removeValuesFromArray: s,
        isCapitalized: G,
        removeNodeChildren: m,
        isEmptyNode: k,
        isSelectionCollapsed: Q,
        getExtensionInfo: f,
        getSourceUrl: d,
        isDocumentHttps: q,
        supportsLocalStorage: a,
        isMarkedNodeEditable: l,
        insertStyleRule: R,
        insertAtStyleRule: b,
        deleteStyleRule: o,
        getZoom: u,
        getNodeType: E,
        fireDomEvent: g,
        textContainsNonEnglish: v,
        compareCleanContents: i,
        appendEmptyIFrame: C,
        attachStyleNode: I,
        unbindAndBindEvents: M,
        unbindEvents: S,
        notifyCallback: t,
        randomFromTo: w,
        getCdnUrl: p,
        getCdnHttpsUrl: z
    }
})();
GS_WEB_WIDGET.namespace("utils.display", (function() {
    var G = null,
        b = null,
        F = null,
        H = null,
        B = null;
    var j = function() {
        G = GS_WEB_WIDGET.namespace("logger");
        b = GS_WEB_WIDGET.namespace("defs");
        F = GS_WEB_WIDGET.namespace("browser");
        H = GS_WEB_WIDGET.namespace("staticUtils");
        B = GS_WEB_WIDGET.namespace("utils")
    };
    var h = function(K) {
        var M = $(K),
            N = {
                top: 0,
                left: 0
            },
            L = M.css("position"),
            J, I;
        if (L === "relative" || L === "absolute" || L === "fixed") {
            J = M.getStyleCollections();
            I = M.parent().getStyleCollections();
            N.left += parseFloat(J.margin["margin-left"] || 0) + parseFloat(I.margin["margin-left"] || 0) + parseFloat(J.border["border-left-width"] || 0) + parseFloat(I.outline["outline-top-width"] || 0) + parseFloat(I.padding["padding-left"] || 0);
            N.top += parseFloat(J.margin["margin-top"] || 0) + parseFloat(I.margin["margin-top"] || 0) + parseFloat(J.border["border-top-width"] || 0) + parseFloat(I.outline["outline-top-width"] || 0) + parseFloat(I.padding["padding-top"] || 0)
        }
        return N
    };
    var u = function(O, N, L) {
        L = !!L;
        if (N === O) {
            return {
                left: 0,
                top: 0
            }
        }
        var K = N.body ? N.body.getElementsByTagName("iframe") : null,
            Q = {
                left: 0,
                top: 0
            };
        if (!K || !K.length) {
            return null
        }
        if (!L) {
            Q = D(N)
        }
        for (var J = 0; J < K.length; J++) {
            var P = B.getFrameDocument(K[J]);
            if (!!P) {
                var M = K[J].getBoundingClientRect();
                var I = u(O, P, true);
                if (I !== null) {
                    return {
                        left: M.left + I.left + Q.left,
                        top: M.top + I.top + Q.top
                    }
                }
            }
        }
        return null
    };
    var k = function(K, Q) {
        var I = K,
            P = Q.body,
            O = h(P),
            N = 0,
            L = 0,
            J = 0,
            M = 0;
        if (I.offsetParent) {
            do {
                N += I.offsetLeft;
                L += I.offsetTop
            } while (I = I.offsetParent);
            I = K;
            while ((I = I.parentNode) && I !== P) {
                M += I.scrollLeft;
                J += I.scrollTop
            }
            N += O.left;
            L += O.top
        }
        return {
            top: L - J,
            left: N - M
        }
    };
    var s = function(I) {
        var L = B.getDocumentContext(I),
            J = window.document,
            M;
        try {
            M = $(I, L).offset()
        } catch (K) {
            M = k(I, L)
        }
        return M
    };
    var v = function(K) {
        var M = B.getDocumentContext(K),
            L = window.document;
        if (M === L) {
            return $(K, M).offset()
        } else {
            var I = u(M, L, false),
                N = s(K),
                J = D(M);
            return {
                left: I.left + N.left - J.left,
                top: I.top + N.top - J.top
            }
        }
    };
    var o = function(J, K) {
        var M = s(J);
        if (!K) {
            var L = B.getDocumentContext(J),
                I = getDocumentBody(L);
            K = h(I)
        }
        M.left -= K.left;
        M.top -= K.top;
        return M
    };
    var z = null;
    var l = function() {
        if (!z) {
            if ($.browser.msie) {
                var K = $('<textarea cols="10" rows="2"></textarea>').css({
                        position: "absolute",
                        top: -1000,
                        left: -1000
                    }).appendTo("body"),
                    J = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({
                        position: "absolute",
                        top: -1000,
                        left: -1000
                    }).appendTo("body");
                z = K.width() - J.width();
                K.add(J).remove()
            } else {
                var I = $("<div />").css({
                    width: 100,
                    height: 100,
                    overflow: "auto",
                    position: "absolute",
                    top: -1000,
                    left: -1000
                }).prependTo("body").append("<div />").find("div").css({
                    width: "100%",
                    height: 200
                });
                z = 100 - I.width();
                I.parent().remove()
            }
        }
        return z
    };
    var E = function(O, N, L) {
        var M = s(L),
            J = $(L),
            K = J.width(),
            I = J.height();
        return M.left <= O && O <= (M.left + K) && M.top <= N && N <= (M.top + I)
    };
    var c = function(M, Y, T, Q) {
        var L = function() {
            return N.left + V < 0 || N.left > W.left + X.width || N.top + J < 0 || N.top > W.top + X.height
        };
        var S = function() {
            return V === 0 || J === 0
        };
        var U = B.getDocumentContext(M),
            P = U.body,
            O = $(P),
            K = $(M, U),
            W = D(U),
            X = g(U),
            V = K.width(),
            J = K.height(),
            N = s(M),
            R = K.css("display"),
            I = K.css("visibility");
        Y = !!Y;
        T = !!T;
        Q = !!Q;
        if (typeof R === "undefined" && typeof I === "undefined") {
            R = K.getStyleProperty("display");
            I = !Y ? K.getStyleProperty("visibility") : null
        }
        if (M !== P && (O.has(K).length === 0 || R === "none" || (!Y && I === "hidden") || (!T && S()) || (!Q && L()))) {
            return false
        } else {
            return true
        }
    };
    var q = function(M, L, K, J) {
        var I = B.getDocumentContext(M).body,
            N = c(M, L, K, J);
        if (N) {
            N = H.climbTree(M, function(O) {
                if (O.node !== I) {
                    return c(O.node, true, true, true) ? null : false
                } else {
                    return true
                }
            }).result
        }
        return N
    };
    var n = function(J, O, N, K) {
        var M = function(X, Z, Y, U, T, W, S) {
            var V = function(aa, ab) {
                return (ab || ab === 0) ? (aa + ":" + ab + "px; ") : ""
            };
            return '<div class="' + X + '" style="position:absolute; ' + V("left", Z) + V("top", Y) + V("right", U) + V("bottom", T) + V("width", W) + V("height", S) + '"></div>'
        };
        var L = b.ROUNDED_CORNERS,
            R = null,
            Q = Math.max(N.topLeft.height + N.bottomLeft.height, N.topRight.height + N.bottomRight.height),
            I = Math.max(N.topLeft.width + N.topRight.width, N.bottomLeft.width + N.bottomRight.width);
        K = !K ? "" : K.toLowerCase();
        K = (K !== "absolute" || K !== "fixed") ? "relative" : K;
        if (F.isIeBefore9) {
            R = $("<" + J + ' style="position:' + K + ";min-height:" + Q + "px;min-width:" + I + 'px;">' + M(L.TOP_LEFT, 0, 0, null, null, N.topLeft.width, N.topLeft.height) + M(L.TOP_RIGHT, null, 0, 0, null, N.topRight.width, N.topRight.height) + M(L.BOTTOM_LEFT, 0, null, null, 0, N.bottomLeft.width, N.bottomLeft.height) + M(L.BOTTOM_RIGHT, null, null, 0, 0, N.bottomRight.width, N.bottomRight.height) + "</" + J + ">", O)
        } else {
            var P = [];
            P.push("border-top-left-radius: " + N.topLeft.width + "px " + N.topLeft.height + "px;");
            P.push("-moz-border-top-left-radius: " + N.topLeft.width + "px " + N.topLeft.height + "px;");
            P.push("border-top-right-radius: " + N.topRight.width + "px " + N.topRight.height + "px;");
            P.push("-moz-border-top-right-radius: " + N.topRight.width + "px " + N.topRight.height + "px;");
            P.push("border-bottom-left-radius: " + N.bottomLeft.width + "px " + N.bottomLeft.height + "px;");
            P.push("-moz-border-bottom-left-radius: " + N.bottomLeft.width + "px " + N.bottomLeft.height + "px;");
            P.push("border-bottom-right-radius: " + N.bottomRight.width + "px " + N.bottomRight.height + "px;");
            P.push("-moz-border-bottom-right-radius: " + N.bottomRight.width + "px " + N.bottomRight.height + "px;");
            R = $("<" + J + ' style="' + P.join(" ") + '"></' + J + ">")
        }
        return R[0]
    };
    var x = function(J, L, I, K) {
        return Math.sqrt((K - L) * (K - L) + (I - J) * (I - J))
    };
    var w = function(L, K, M, J, I) {
        if ((L < J && J < K) || (K < J && J < L)) {
            return Math.abs(I - M)
        } else {
            return Math.min(x(L, M, J, I), x(K, M, J, I))
        }
    };
    var a = function(L, I, O) {
        var N = L.left,
            M = L.top,
            K = L.right,
            J = L.bottom;
        if (K < N || J < M) {
            throw "Wrong coordinates"
        } else {
            if (N <= I && I <= K && M <= O && O <= J) {
                return 0
            } else {
                return Math.min(w(N, K, M, I, O), w(N, K, J, I, O), w(M, J, N, O, I), w(M, J, K, O, I))
            }
        }
    };
    var d = function(K, I, L) {
        var J = [];
        $.each(K, function(N, M) {
            J.push(a(M, I, L))
        });
        return Math.min.apply(Math, J)
    };
    var y = function(K, L, J) {
        var I = $(K, L);
        return parseInt(I.css("padding-" + J)) + parseInt(I.css("border-" + J + "-width")) + parseInt(I.css("margin-" + J))
    };
    var D = function(J) {
        var I = B.getOwnerWindow(J.body);
        return {
            left: (I && I.pageXOffset) || (J.documentElement && J.documentElement.scrollLeft) || (J.body && J.body.scrollLeft) || 0,
            top: (I && I.pageYOffset) || (J.documentElement && J.documentElement.scrollTop) || (J.body && J.body.scrollTop) || 0
        }
    };
    var g = function(J) {
        var I = B.getOwnerWindow(J.body);
        return {
            width: (I && I.innerWidth) || (J.documentElement && J.documentElement.clientWidth) || (J.body && J.body.clientWidth) || 0,
            height: (I && I.innerHeight) || (J.documentElement && J.documentElement.clientHeight) || (J.body && J.body.clientHeight) || 0
        }
    };
    var m = function(N, L) {
        var O = D(N),
            Q = g(N),
            K = B.display.getScrollBarWidth(),
            J = L.left,
            M = L.top,
            I = L.width,
            P = L.height;
        return 0 < J && J + I - O.left < Q.width - K && 0 < M && M + P - O.top < Q.height
    };
    var r = function(M, J, L) {
        L = !!L;
        var I = C(M),
            K = f(J);
        var O = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + K + I + ", endColorstr=#" + K + I + ")",
            N = L ? "!important" : "";
        return {
            "background-color": "rgba(" + M + ", " + (J / 100) + ")" + N,
            filter: O + N,
            "ms-filter": O + N
        }
    };
    var A = function(N, K, M) {
        var J = r(N, K, M),
            L = ["background-color", "filter", "ms-filter"],
            I = "";
        $.each(L, function(O, P) {
            if (J[P]) {
                I += P + ":" + J[P] + "; "
            }
        });
        return I
    };
    var e = function(N, I, L, O, M, K) {
        K = K ? "inset" : "";
        N = N ? N : "0px";
        I = I ? I : "0px";
        O = O ? O : "0px";
        M = M ? M : "0px";
        var J = N + " " + I + " " + O + " " + M + " " + L + " " + K + ";";
        return "-moz-box-shadow:" + J + ";-webkit-box-shadow:" + J + ";box-shadow:" + J + ";"
    };
    var p = function(K, J) {
        var I = "progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=" + K + ", endColorstr=" + J + ");";
        return "background-color:" + K + ";filter:" + I + "-ms-filter:" + I + "background-image:-webkit-gradient(linear, 0% 0%, 0% 100%, from(" + K + "), to(" + J + "));background-image:-webkit-linear-gradient(top, " + K + ", " + J + ");background-image:-moz-linear-gradient(top, " + K + ", " + J + ");background-image:-ms-linear-gradient(top, " + K + ", " + J + ");background-image:-o-linear-gradient(top, " + K + ", " + J + ");"
    };
    var C = function(I) {
        var J = I.split(",");
        J[0] = f(J[0]);
        J[1] = f(J[1]);
        J[2] = f(J[2]);
        return J.join("")
    };
    var i = function(I, J) {
        J -= I.toString().length;
        if (J > 0) {
            return [J + (/\./.test(I) ? 2 : 1)].join("0") + I
        }
        return I + ""
    };
    var f = function(I) {
        return i(parseInt(I).toString(16), 2)
    };
    var t = function(N, L) {
        L = L || 1;
        var O = {
                vertical: false,
                horizontal: false
            },
            J = $(N),
            M = N.scrollHeight * L,
            K = N.scrollWidth * L,
            I = N.clientWidth * L,
            P = N.clientHeight * L;
        switch (J.css("overflow-y")) {
            case "hidden":
            case "visible":
                break;
            case "scroll":
                O.vertical = true;
                break;
            default:
                O.vertical = M > I
        }
        switch (J.css("overflow-x")) {
            case "hidden":
            case "visible":
                break;
            case "scroll":
                O.horizontal = true;
                break;
            default:
                O.horizontal = K > P
        }
        return O
    };
    return {
        load: j,
        getBodyOffsetInDocument: h,
        getDocumentOffset: u,
        getDocScroll: D,
        getOffsetInDoc: s,
        getOffsetInRootDoc: v,
        getOffsetInBody: o,
        getScrollBarWidth: l,
        isPositionInNode: E,
        isNodeDisplayed: c,
        isNodeDisplayedByDoc: q,
        createRoundedElement: n,
        calcDistance: x,
        calcDistanceFromLine: w,
        calcDistanceFromRectangle: a,
        calcDistanceFromRectangles: d,
        getNodePaddingBorderAndMargin: y,
        getDocSize: g,
        isRectangleInView: m,
        createBackgroundColorCss: A,
        createBackgroundColorCssJson: r,
        createBoxShadowCss: e,
        createBgGradientCss: p,
        convertRgbToHex: C,
        convertDecToHex: f,
        getScrollBarDisplay: t
    }
})());
GS_WEB_WIDGET.namespace("utils.time", (function() {
    var k = 1000,
        h = k * 60,
        j = h * 60,
        c = j * 24;
    var g = function(m, n) {
        var l = m.getTime() + (c * n);
        return new Date(l)
    };
    var b = function(n, l) {
        var m = n.getTime() + (j * l);
        return new Date(m)
    };
    var e = function(m, n) {
        var l = m.getTime() + (h * n);
        return new Date(l)
    };
    var d = function(n, m) {
        var l = n.getTime() + (k * m);
        return new Date(l)
    };
    var f = function(m, n) {
        var l = m.getTime() + n;
        return new Date(l)
    };
    var i = function(m, l, o) {
        var n = null;
        var p = m.toLowerCase();
        if (/s$/.test(p)) {
            p = p.substr(0, p.length - 1)
        }
        switch (p) {
            case "day":
                n = g;
                break;
            case "hour":
                n = b;
                break;
            case "minute":
                n = e;
                break;
            case "second":
                n = d;
                break;
            case "milli":
                n = f;
                break
        }
        return typeof n === "function" ? n(l, o) : null
    };
    var a = function(o) {
        var n = new Date(parseInt(o));
        var l = false;
        try {
            var m = n.getTime();
            l = isNaN(m)
        } catch (p) {
            l = true
        }
        return l || n.getFullYear() === 1970 ? null : n
    };
    return {
        addDay: g,
        addHour: b,
        addMinute: e,
        addMilli: f,
        addByType: i,
        parseDateFromMilli: a
    }
})());
GS_WEB_WIDGET.namespace("utils.misc", (function() {
    var m = null,
        d = null,
        e = null,
        g = null,
        f = null,
        i = null,
        b = null;
    var k = function() {
        m = GS_WEB_WIDGET.namespace("logger");
        d = GS_WEB_WIDGET.namespace("defs");
        e = GS_WEB_WIDGET.namespace("browser");
        g = GS_WEB_WIDGET.namespace("staticUtils");
        i = GS_WEB_WIDGET.namespace("utils");
        f = GS_WEB_WIDGET.namespace("utils.display");
        b = GS_WEB_WIDGET.namespace("tokensCacheManager")
    };
    var h = function(r) {
        var p = [];

        function o(s) {
            $.each(s, function(t, u) {
                if (f.isNodeDisplayedByDoc(u)) {
                    p.push(u)
                }
            })
        }
        var n = r.URL.match(/^https?:\/\/[^\/?#]+/i);
        var q = (n || {}).length ? n[0] : "localhost";
        o($("iframe", r).filter('[src^="' + q + '"]'));
        o($("iframe", r).not('[src*="://"]'));
        return p
    };
    var j = function(t, r) {
        var q = h(r);
        for (var p = 0; p < q.length; p++) {
            try {
                var n = q[p],
                    s = i.getFrameDocument(q[p]);
                t(n, s);
                j(t, s)
            } catch (o) {}
        }
    };
    var c = function() {
        var n = [];
        j(function(o, p) {
            n.push(p)
        }, document);
        return n
    };
    var l = function() {
        return document.location.href
    };
    var a = function(n) {
        return typeof n === "string" ? /^(?:true|yes|t|y|1|on)$/i.test(n) : n
    };
    return {
        load: k,
        getPermittedIFrames: h,
        iterateIFrames: j,
        getAllIframesAsArray: c,
        getMainPageUrl: l,
        parseBool: a
    }
})());
GS_WEB_WIDGET.domStorageComm = (function() {
    var j = null,
        b = null;
    var k = false,
        l = null,
        c = false,
        g = false,
        d = [];
    $(function() {
        c = true;
        if (g) {
            a()
        }
    });
    var f = function() {
        j = GS_WEB_WIDGET.namespace("appModel");
        b = GS_WEB_WIDGET.namespace("context");
        i()
    };
    var i = function() {
        $(b).bind(b.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(m, n) {
            k = j.getLocalStorageViaDOM();
            a()
        })
    };
    var a = function() {
        if (!c) {
            g = true;
            return
        }
        if (k) {
            l = $("#gingerMsgStorage");
            if (!l.length) {
                l = $('<div id="gingerMsgStorage" style="display:none;"></div>');
                $("body").append(l)
            }
            if (d.length > 0) {
                h()
            }
        }
    };
    var h = function() {
        while (d.length > 0) {
            e(d.shift())
        }
    };
    var e = function(m) {
        if (l) {
            l.html(JSON.stringify(m))
        } else {
            if (k) {
                d.push(m)
            }
        }
    };
    return {
        load: f,
        sendMessage: e
    }
})();
GS_WEB_WIDGET.messagesStorage = (function() {
    var h = null,
        b = null,
        f = null,
        d = null;
    var i = false;
    var e = function() {
        h = GS_WEB_WIDGET.namespace("appModel");
        b = GS_WEB_WIDGET.namespace("context");
        f = GS_WEB_WIDGET.namespace("protocol");
        d = GS_WEB_WIDGET.namespace("domStorageComm");
        g()
    };
    var g = function() {
        $(b).bind(b.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(j, k) {
            i = h.getLocalStorageViaDOM()
        })
    };
    var a = function(j) {
        if (i) {
            d.sendMessage({
                msg: j.msg,
                type: j.type
            })
        } else {
            f.background.updateMessagesInfoInStorage({
                msg: j.msg,
                key: j.key,
                value: j.value
            })
        }
    };
    var c = function(j) {
        if (i) {
            d.sendMessage({
                msg: j.msg,
                values: j.values
            })
        } else {
            f.background.updateMessagesInfoInStorage({
                msg: j.msg,
                values: j.values
            })
        }
    };
    return {
        load: e,
        storeMessageValue: a,
        storeMessageValues: c
    }
})();
GS_WEB_WIDGET.messagesManager = (function() {
    var ac = null,
        z = null,
        aq = null,
        ao = null,
        U = null,
        m = null,
        n = null,
        k = null;
    var s = null,
        X = false,
        Z = false;
    var p = false,
        q = false,
        al = false;
    var ak = null,
        ab = null,
        f = null,
        b = NaN;
    var aj = "firstCorrectionMarkMsg";
    var e = "firstOpenMenuMsg";
    var O = "promotingUsageMsg";
    var w = "firstTimeMsg";
    var v = "promotingUsageMessagesAllowed";
    var G = "lastPromotingUsageMsgDate";
    var F = "numberOfPromotingUsageDisplayed";
    var af = "firstTimeMsg";
    var H = "firstCorrectionMarkMsg";
    var an = "firstOpenMenuMsg";
    var L = "promotingUsageMsg";
    var A = "Displayed";
    var N = {};
    N[aj] = aj + A;
    N[e] = e + A;
    N[w] = w + A;
    var K = null,
        ag = "/webWidget/messages";
    var i = "closeBtn",
        V = "learnMoreBtn",
        Y = "homeBtn";
    var B = "http://www.gingersoftware.com/grammar-and-spell-checker-sft?affId=sft";
    var h = "http://www.gingersoftware.com?affId=sft";
    var u = 1,
        d = 3,
        W = 4,
        aa = 5,
        ae = 6;
    var t = [];
    var R = {};
    R[aj] = false;
    R[e] = false;
    R[w] = false;
    var Q = null,
        a = null;
    var T = function() {
        ac = GS_WEB_WIDGET.namespace("defs");
        z = GS_WEB_WIDGET.namespace("appModel");
        aq = GS_WEB_WIDGET.namespace("utils");
        aq.display = GS_WEB_WIDGET.namespace("utils.display");
        aq.time = GS_WEB_WIDGET.namespace("utils.time");
        aq.misc = GS_WEB_WIDGET.namespace("utils.misc");
        ao = GS_WEB_WIDGET.namespace("context");
        U = GS_WEB_WIDGET.namespace("trackingManager");
        m = GS_WEB_WIDGET.namespace("protocol");
        n = GS_WEB_WIDGET.namespace("mainController");
        k = GS_WEB_WIDGET.namespace("messagesStorage");
        ai()
    };
    var S = function() {
        clearTimeout(Q);
        clearTimeout(a)
    };
    var y = function(ar) {
        return "&ad=" + ar
    };
    var ai = function() {
        $(ao).bind(ao.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(at, au) {
            S();
            X = z.getAllowShowMessages();
            if (!X) {
                return
            }
            s = z.getMessagesInitialParameters();
            if (typeof s === "string") {
                s = $.parseJSON(s)
            }
            if (s) {
                Z = aq.misc.parseBool(s.promotingUsageMessagesAllowed);
                ab = s.msgsConfig.promotingUsageOccurrencesList;
                f = s.msgsConfig.promotingUsageUnit;
                var ar = false;
                b = parseInt(s.numberOfPromotingUsageDisplayed);
                if (isNaN(b)) {
                    b = 0;
                    ar = true
                }
                ak = aq.time.parseDateFromMilli(s.lastPromotingUsageMsgDate);
                if (!ak) {
                    ak = new Date();
                    ar = true
                }
                if (ar) {
                    P()
                }
                p = aq.misc.parseBool(s.firstCorrectionMarkMsgDisplayed);
                q = aq.misc.parseBool(s.firstOpenMenuMsgDisplayed);
                al = aq.misc.parseBool(s.firstTimeMsgDisplayed);
                o();
                $(function() {
                    r({})
                })
            }
            $(ao).bind(ao.CONTEXT_MENU_OPENED, function(av, aw) {
                if (Z) {
                    c()
                }
            })
        });
        K = aq.getCdnUrl()
    };
    var o = function() {
        if (Z && ab) {
            if (b > ab.length - 1) {
                c()
            } else {
                var at = new Date(),
                    au = aq.time.addByType(f, ak, ab[b]);
                if (au <= at) {
                    ad()
                } else {
                    var ar = au - at;
                    if (ar > 0) {
                        Q = setTimeout(o, ar)
                    }
                }
            }
        }
    };
    var ad = function() {
        if (!Z) {
            return
        }
        var ar = J(n.getAllMarkNodes(), {
            width: 350,
            height: 130
        });
        if (ar) {
            I(function() {
                g(ar, L, "Ginger proofreads every text you write on the web<br/><br/>check out  the green underlines", y(d))
            }, {
                type: O,
                manualStorageUpdate: true
            });
            b++;
            if (b > ab.length - 1) {
                c()
            } else {
                ak = new Date();
                P();
                var at = aq.time.addByType(f, ak, ab[b]);
                var au = at - ak;
                if (au > 0) {
                    Q = setTimeout(o, au)
                }
            }
        } else {
            a = setTimeout(ad, 10000)
        }
    };
    var r = function(au) {
        var at = function(aw) {
            var av = $(aw);
            av.animate({
                height: "0px"
            }, {
                duration: 200,
                complete: function() {
                    av.css({
                        display: "none"
                    })
                }
            })
        };
        var ar = function() {
            C();
            aq.appendEmptyIFrame(document, function(av, ay) {
                var aw = $(av),
                    ax = $(ay.body);
                aw.css({
                    position: "fixed",
                    "z-index": ac.MAX_Z_INDEX,
                    "background-color": "transparent",
                    width: "100%",
                    height: "0px",
                    left: "0px",
                    top: "0px"
                });
                ax.css($.extend(aq.display.createBackgroundColorCssJson("229,239,215", 100), {
                    margin: "0px",
                    overflow: "hidden",
                    "font-family": '"levenim mt","arial"'
                }));
                ax.html('<img id="' + Y + '" src="' + K + ag + '/ginger-icon.png" style="position:absolute; top:3px; left:40px; cursor:pointer;"/><div style="padding-top:10px;"><span style="position:absolute; left:90px">You\'ve got the best grammar and spell checker on your browser.<img id="' + V + '" src="' + K + ag + '/learn-more-btn.png" style="position:absolute; right:-120px; cursor:pointer;"/></span></div><img id="' + i + '" src="' + K + ag + '/big-close-btn.png" style="position:absolute; width:19px; top:10px; right:10px; cursor:pointer;"/>');
                ax.find("#" + i).bind("click", function() {
                    at(av)
                });
                ax.find("#" + V).bind("click", function() {
                    window.open(B + y(u), "_blank");
                    ap({
                        trigger: af
                    });
                    at(av)
                });
                ax.find("#" + Y).bind("click", function() {
                    window.open(h + y(ae), "_blank");
                    U.reportClickGingerIconFromFirstTimeMessage()
                });
                aw.animate({
                    height: "40px"
                }, {
                    duration: 200
                });
                t.push({
                    hideHandler: function() {
                        at(av)
                    }
                })
            })
        };
        if (X) {
            au.type = w;
            l(al, au.type, ar, au)
        }
    };
    var M = function(at) {
        if (X) {
            at.type = aj;
            var ar = J(at.nodes, {
                width: 210,
                height: 140
            });
            if (ar) {
                l(p, at.type, function() {
                    g(ar, H, "What's this?<br/><br/>Right Click the green underline to fix this sentence.", y(W))
                }, at)
            }
        }
    };
    var D = function(av) {
        var ar = [];
        var au = function() {
            $.each(ar, function(ax, aw) {
                if (aw) {
                    ah(aw)
                }
            })
        };
        var at = function() {
            var aB = av.iFrame,
                aE = aq.display.getOffsetInRootDoc(aB),
                ax = $(aB),
                aA = av.node,
                aG = aq.display.getOffsetInRootDoc(aA),
                ay = $(aA);
            C();
            var aF = {
                width: 195,
                height: 98,
                top: aG.top - 98,
                left: aG.left + ay.width() / 2 - 60
            };
            if (aq.display.isRectangleInView(document, aF)) {
                aq.appendEmptyIFrame(document, function(aH, aK) {
                    ar.push(aH);
                    var aI = $(aH),
                        aJ = $(aK.body);
                    aI.css($.extend({
                        position: "absolute",
                        "z-index": ac.MAX_Z_INDEX,
                        "background-color": "transparent"
                    }, aF));
                    aJ.css({
                        margin: "0px",
                        overflow: "hidden"
                    });
                    aJ.html('<img src="' + K + ag + '/context-spell-and-grammar.png" />');
                    aI.fadeIn(100, "swing", function() {
                        x(aH)
                    });
                    $(ao).bind(ao.CONTEXT_MENU_CLOSE, function() {
                        ah(aH)
                    })
                })
            }
            var aD = {
                width: 220,
                height: 66,
                left: aE.left + ax.width() - 30,
                top: aE.top - 66 + 40
            };
            if (aq.display.isRectangleInView(document, aD)) {
                aq.appendEmptyIFrame(document, function(aH, aK) {
                    ar.push(aH);
                    var aI = $(aH),
                        aJ = $(aK.body);
                    aI.css($.extend({
                        position: "absolute",
                        "z-index": ac.MAX_Z_INDEX,
                        "background-color": "transparent"
                    }, aD));
                    aJ.css({
                        margin: "0px",
                        overflow: "hidden"
                    });
                    aJ.html('<img src="' + K + ag + '/context-choose-your-correction.png" />');
                    aI.fadeIn(100, "swing", function() {
                        x(aH)
                    });
                    $(ao).bind(ao.CONTEXT_MENU_CLOSE, function() {
                        ah(aH)
                    })
                })
            }
            var az = {
                width: 213,
                height: 106,
                top: aE.top + ax.height() - 25,
                left: aE.left + 30
            };
            if (aq.display.isRectangleInView(document, az)) {
                aq.appendEmptyIFrame(document, function(aH, aK) {
                    ar.push(aH);
                    var aI = $(aH),
                        aJ = $(aK.body);
                    aI.css($.extend({
                        position: "absolute",
                        "z-index": ac.MAX_Z_INDEX - 1,
                        "background-color": "transparent"
                    }, az));
                    aJ.css({
                        margin: "0px",
                        overflow: "hidden"
                    });
                    aJ.html('<img src="' + K + ag + '/context-click-to-get-ginger.png" />');
                    aI.fadeIn(100, "swing", function() {
                        x(aH)
                    });
                    $(ao).bind(ao.CONTEXT_MENU_CLOSE, function() {
                        ah(aH)
                    })
                })
            }
            var aC = true,
                aw = {
                    width: 270,
                    height: 72,
                    left: az.left + az.width,
                    top: az.top + az.height
                };
            if (!aq.display.isRectangleInView(document, aw)) {
                aw.left = az.left - aw.width;
                if (!aq.display.isRectangleInView(document, aw)) {
                    aw.left = az.left + az.width;
                    aw.top = aF.top
                }
                if (!aq.display.isRectangleInView(document, aw)) {
                    aw.left = aF.left - aw.width - 10;
                    aw.top = aF.top;
                    if (!aq.display.isRectangleInView(document, aw)) {
                        aC = false
                    }
                }
            }
            if (aC) {
                aq.appendEmptyIFrame(document, function(aH, aK) {
                    ar.push(aH);
                    var aI = $(aH),
                        aJ = $(aK.body);
                    aI.css($.extend({
                        position: "absolute",
                        "z-index": ac.MAX_Z_INDEX,
                        "background-color": "transparent"
                    }, aw));
                    aJ.css({
                        margin: "0px",
                        overflow: "hidden"
                    });
                    aJ.append(E("You can get more out of your Ginger.", aK, "absolute"));
                    aI.fadeIn(100, "swing", function() {
                        x(aH)
                    });
                    $(ao).bind(ao.CONTEXT_MENU_CLOSE, function() {
                        ah(aH)
                    });
                    aJ.find("#" + i).bind("click", function() {
                        ah(aH)
                    });
                    aJ.find("#" + V).bind("click", function() {
                        window.open(B + y(aa), "_blank");
                        ap({
                            trigger: an
                        });
                        au()
                    })
                })
            }
            t.push({
                hideHandler: au
            })
        };
        if (X) {
            av.type = e;
            l(q, av.type, at, av)
        }
    };
    var C = function() {
        $.each(t, function(at, ar) {
            if (ar && typeof ar.hideHandler === "function") {
                ar.hideHandler()
            }
        });
        t = []
    };
    var l = function(au, ar, at, av) {
        if (!au && !R[ar]) {
            I(at, av);
            R[ar] = true
        }
    };
    var j = function(ar) {
        k.storeMessageValue({
            msg: ac.MSG_DISPLAYED_CMD,
            type: N[ar.type],
            key: N[ar.type],
            value: true
        })
    };
    var c = function() {
        Z = false;
        var ar = [{
            key: v,
            value: false
        }, {
            key: G,
            value: ak.getTime()
        }, {
            key: F,
            value: b
        }];
        k.storeMessageValues({
            msg: ac.SET_STORAGE_VALUES_CMD,
            values: ar
        })
    };
    var P = function() {
        var ar = [{
            key: G,
            value: ak.getTime()
        }, {
            key: F,
            value: b
        }];
        k.storeMessageValues({
            msg: ac.SET_STORAGE_VALUES_CMD,
            values: ar
        })
    };
    var ap = function(ar) {
        U.reportClickLearnMore(ar)
    };
    var am = function(ar) {
        U.reportMessageDisplayed({
            trigger: ar
        })
    };
    var I = function(ar, at) {
        if (typeof ar === "function") {
            ar()
        }
        j(at);
        am(at.type)
    };
    var x = function(ar) {
        $(document).one("mousedown", function() {
            ah(ar)
        })
    };
    var ah = function(at) {
        var ar = $(at);
        ar.fadeOut(150, function() {
            ar.remove()
        })
    };
    var E = function(au, ay, at) {
        var ax = {
                height: 8,
                width: 8
            },
            aw = {
                topLeft: ax,
                top: {
                    height: 8
                },
                topRight: ax,
                left: {
                    width: 8
                },
                right: {
                    width: 8
                },
                bottomLeft: ax,
                bottom: {
                    height: 8
                },
                bottomRight: ax
            };
        at = at || "relative";
        var av = aq.display.createRoundedElement("div", ay, aw, at),
            ar = $(av);
        ar.append(au + '<img id="' + V + '" src="' + K + ag + '/learn-more-btn.png" style="position:absolute; bottom:0px; right:0px; cursor:pointer;" /><img id="' + i + '" src="' + K + ag + '/close-btn.png" style="position:absolute; top:3px; right:3px; cursor:pointer;" />');
        ar.css({
            border: "2px solid #8ed231",
            position: at,
            "background-color": "#ffffff",
            "background-image": "url(" + K + ag + "/learn-more-bg.png)",
            "background-repeat": "repeat-x",
            "background-position": "left bottom",
            padding: "8px",
            "padding-right": "12px",
            "padding-bottom": "33px",
            "font-family": '"levenim mt","arial"',
            "font-size": "12px",
            "text-align": "center"
        });
        return av
    };
    var J = function(at, au) {
        var ar = null;
        $.each(at, function(ax, aA) {
            var az = aq.display.getOffsetInRootDoc(aA),
                av = $(aA),
                ay = {
                    left: az.left,
                    top: az.top,
                    width: av.width(),
                    height: av.height()
                };
            var aw = $.extend({
                left: az.left + ay.width / 2 - 23,
                top: az.top + ay.height + 10
            }, au);
            if (aq.display.isRectangleInView(document, ay) && aq.display.isRectangleInView(document, aw)) {
                ar = aw
            }
            return true
        });
        return ar
    };
    var g = function(ar, at, au, av) {
        C();
        if (ar) {
            aq.appendEmptyIFrame(document, function(ax, aB) {
                var az = $(ax),
                    aA = $(aB.body);
                az.css($.extend({
                    position: "absolute",
                    "z-index": ac.MAX_Z_INDEX,
                    "background-color": "transparent"
                }, ar));
                aA.css({
                    margin: "0px",
                    overflow: "hidden"
                });
                var ay = E(au + '<img src="' + K + ag + '/msg-up-arrow.png" style="position:absolute; top:-13px; left:11px;" />', aB, "absolute"),
                    aw = $(ay);
                aw.css({
                    position: "absolute",
                    top: "12px",
                    "text-align": "left"
                });
                aA.append(aw);
                az.fadeIn(100, "swing", function() {
                    x(ax)
                });
                aw.find("#" + i).bind("click", function() {
                    ah(ax)
                });
                aw.find("#" + V).bind("click", function() {
                    window.open(B + av, "_blank");
                    ap({
                        trigger: at
                    });
                    ah(ax)
                });
                t.push({
                    hideHandler: function() {
                        ah(ax)
                    }
                })
            })
        }
    };
    return {
        load: T,
        showFirstCorrectionMarkMessage: M,
        showOpenMenuMessage: D
    }
})();
$(function() {
    var j = {
            position: true,
            left: true,
            top: true,
            right: true,
            bottom: true,
            "z-index": true
        },
        h = {
            width: true,
            height: true,
            "min-width": true,
            "min-height": true,
            "max-width": true,
            "max-height": true
        },
        a = {},
        f = {},
        i = {},
        g = {},
        m = {},
        e = {},
        l = {
            color: true,
            "-webkit-text-fill-color": true
        },
        d = {};

    function c(n) {
        return n.replace(/([A-Z])/g, function(o) {
            return "-" + o.toLowerCase()
        })
    }

    function k(n) {
        return n.replace(/(\-[a-z])/g, function(o) {
            return o.toUpperCase().replace("-", "")
        })
    }
    var b = function(n) {
        var o = [];
        n = n || [];
        for (var p = 0, q = n.length; p < q; p++) {
            var r = n[p];
            o[r] = true
        }
        return o
    };
    $.fn.getStyleCollections = function() {
        var B = this.get(0),
            C, o = {},
            F = {},
            x = {},
            u = {},
            v = {},
            z = {},
            r = {},
            y = {},
            D = {},
            w = {},
            q = {},
            t = {},
            p = null;
        var n = function(G, H) {
            G[H] = o[H]
        };
        var s = function(G, H) {
            for (p in G) {
                if (G.hasOwnProperty(p)) {
                    H[p] = o[p];
                    delete t[p]
                }
            }
        };
        if (window.getComputedStyle) {
            C = window.getComputedStyle(B, null);
            for (var A = 0; A < C.length; A++) {
                p = C[A];
                o[p] = C.getPropertyValue(p)
            }
        } else {
            if (B.currentStyle) {
                C = B.currentStyle;
                for (p in C) {
                    if (C.hasOwnProperty && C.hasOwnProperty(p)) {
                        var E = c(p);
                        o[E] = C[p]
                    }
                }
            }
        }
        for (p in o) {
            if (o.hasOwnProperty(p)) {
                if (p.indexOf("padding") !== -1) {
                    n(u, p)
                } else {
                    if (p.indexOf("margin") !== -1) {
                        n(v, p)
                    } else {
                        if (p.indexOf("border") !== -1) {
                            n(z, p)
                        } else {
                            if (p.indexOf("outline") !== -1) {
                                n(r, p)
                            } else {
                                if (p.indexOf("overflow") !== -1) {
                                    n(y, p)
                                } else {
                                    if (p.indexOf("background") !== -1) {
                                        n(D, p)
                                    } else {
                                        if (p.indexOf("font") !== -1) {
                                            n(w, p)
                                        } else {
                                            if (p.indexOf("text") !== -1) {
                                                n(w, p)
                                            } else {
                                                if (p.indexOf("box-sizing") !== -1) {
                                                    n(q, p)
                                                } else {
                                                    n(t, p)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        s(j, F);
        s(h, x);
        s(a, u);
        s(f, v);
        s(i, z);
        s(g, r);
        s(m, y);
        s(e, D);
        s(l, w);
        s(d, q);
        return {
            all: o,
            position: F,
            size: x,
            padding: u,
            margin: v,
            border: z,
            outline: r,
            overflow: y,
            background: D,
            font: w,
            boxSizing: q,
            rest: t
        }
    };
    $.fn.setStyleCollection = function(q, p, n) {
        var r = this.get(0),
            o = b(n);
        p = !!p;
        if (window.getComputedStyle || r.currentStyle) {
            this.each(function() {
                var u = $(this),
                    t = {},
                    s = [];
                if (p) {
                    s = u.getStyleCollections().all
                }
                for (var v in q) {
                    if (q.hasOwnProperty(v)) {
                        if (s[v] !== q[v] && !o[v]) {
                            t[v] = q[v]
                        }
                    }
                }
                u.css(t)
            })
        }
    };
    $.fn.getStyleProperty = function(p) {
        var o = this.get(0),
            n = null;
        if (window.getComputedStyle) {
            n = window.getComputedStyle(o, null).getPropertyValue(p)
        } else {
            if (o.currentStyle) {
                n = o.currentStyle[k(p)]
            }
        }
        return n
    }
});
"use strict";
GS_WEB_WIDGET.initParams = (function() {
    var b = null,
        j = null,
        o = null,
        u = null,
        t = null,
        e = null;
    var l = "data:image/gif;base64,R0lGODlhBwADAIABAIDgAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRERjM3NTA2RUI1NkUxMTE5NzhCOUUxNDU5NjcxMzdBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2MUVERTNDNkM1ODExRTFBNjhBQzUwQTY5MEEzRDQzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2MUVERTNCNkM1ODExRTFBNjhBQzUwQTY5MEEzRDQzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxQ0M2RDU4NTc2Q0UxMTE4MUEzREQyNDI0RUIyOTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRERjM3NTA2RUI1NkUxMTE5NzhCOUUxNDU5NjcxMzdBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAcAAwAAAgaEHXGomwUAOw==";
    var k = "data:image/gif;base64,R0lGODlhAQADAIAAAILEKgAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0JBN0M5OUJFRjcwMTFFMTg2RjdEOTdCQTk0QTU1QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0JBN0M5OUNFRjcwMTFFMTg2RjdEOTdCQTk0QTU1QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQkE3Qzk5OUVGNzAxMUUxODZGN0Q5N0JBOTRBNTVBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQkE3Qzk5QUVGNzAxMUUxODZGN0Q5N0JBOTRBNTVBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAABAAMAAAIChAsAOw==";
    var g = false,
        h = [];
    var i = function() {
        b = GS_WEB_WIDGET.namespace("defs");
        j = GS_WEB_WIDGET.namespace("appModel");
        o = GS_WEB_WIDGET.namespace("userManager");
        u = GS_WEB_WIDGET.namespace("browser");
        t = GS_WEB_WIDGET.namespace("utils");
        t.display = GS_WEB_WIDGET.namespace("utils.display");
        e = GS_WEB_WIDGET.namespace("context");
        j.setSourceUrl(t.getSourceUrl());
        $(e).bind(e.LOAD_COMPLETE, function(v, w) {
            d()
        })
    };
    var c = "";
    var n = function(v) {
        c = v
    };
    var f = function() {
        return c
    };
    var a = function() {
        return j.getCorrectionStyle() === b.CORRECTION_STYLES.DASHED
    };
    var s = null;

    function p() {
        var x = j.getSourceUrl();
        var v = u.isIeBefore8 ? {
            correction: x + (a() ? "correctionDashed.gif" : "correction.gif"),
            highlight: x + "highlight-background-pixel.png",
            synonymHighlight: x + "highlight-synonym-background-pixel.png",
            noSuggestionsHighlight: x + "highlight-no-suggestions-background-pixel.png"
        } : {
            correction: a() ? l : k,
            highlight: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFQ0Y2OENGMzE5OTExRTI4NjMxOTExNTUyMDhEMDMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFQ0Y2OEQwMzE5OTExRTI4NjMxOTExNTUyMDhEMDMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEVDRjY4Q0QzMTk5MTFFMjg2MzE5MTE1NTIwOEQwMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEVDRjY4Q0UzMTk5MTFFMjg2MzE5MTE1NTIwOEQwMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RRxRxAAAAD0lEQVR42mK48+w7QIABAAVbAroowN08AAAAAElFTkSuQmCC",
            synonymHighlight: "data:image/gif;base64,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",
            noSuggestionsHighlight: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFQ0Y2OENGMzE5OTExRTI4NjMxOTExNTUyMDhEMDMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFQ0Y2OEQwMzE5OTExRTI4NjMxOTExNTUyMDhEMDMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEVDRjY4Q0QzMTk5MTFFMjg2MzE5MTE1NTIwOEQwMzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEVDRjY4Q0UzMTk5MTFFMjg2MzE5MTE1NTIwOEQwMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RRxRxAAAAD0lEQVR42mK48+w7QIABAAVbAroowN08AAAAAElFTkSuQmCC"
        };
        var w = ["." + b.NO_MARK_TEXT_INPUT_CLASS + " { background : transparent; } ", "." + b.TEXT_INPUT_WRAPPER_CLASS + "{ position: absolute; overflow: hidden; margin: 0px; padding: 0px; border: 0px solid transparent }", "." + b.TEXT_INPUT_CONTOUR_CLASS + " { position : absolute; margin: 0px; } ", "." + b.TEXT_INPUT_RICHTEXT_CLASS + " { margin : 0px; padding-bottom: 3px; border-width: 0px; border-color: transparent; display: block; color: transparent; -webkit-text-fill-color: transparent; overflow: hidden; white-space: pre-wrap;} ", "." + b.INPUT_WRAPPER_CLASS + " ." + b.TEXT_INPUT_RICHTEXT_CLASS + " {position: absolute;} ", "." + b.TEXT_INPUT_CANVAS_CLASS + " { display:none; background-repeat:no-repeat;} "];
        switch (j.getMarkType()) {
            case b.MARK.UNDERLINE:
                w.push("." + b.MARK_CONTEXT_CLASS + ", ." + b.MARK_SPELLING_CONTEXT_CLASS + ", ." + b.MARK_NOCONTEXT_CLASS + " { background : url(" + v.correction + ") left bottom repeat-x !important; padding-bottom : " + (u.isIeBefore8 ? "0" : "2px") + " !important; text-decoration : none !important ; position : relative; }");
                w.push("." + b.MARK_LINE_CLASS + " { background : url(" + v.correction + ") left bottom repeat-x !important; height : 3px ; position : absolute; bottom : 0px; left: 0px; right: 0px; }");
                break;
            case b.MARK.HIGHLIGHT:
                w.push("." + b.MARK_CONTEXT_CLASS + ", ." + b.MARK_SPELLING_CONTEXT_CLASS + ", ." + b.MARK_NOCONTEXT_CLASS + " {border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; background-image:url(" + v.highlight + ")!important;}");
                w.push("." + b.TEXT_INPUT_RICHTEXT_CLASS + " ." + b.MARK_CONTEXT_CLASS + ", ." + b.TEXT_INPUT_RICHTEXT_CLASS + " ." + b.MARK_SPELLING_CONTEXT_CLASS + ", ." + b.TEXT_INPUT_RICHTEXT_CLASS + " ." + b.MARK_NOCONTEXT_CLASS + " {position:relative; background-image:none!important;}");
                w.push("." + b.MARK_CONTEXT_CLASS + "." + b.SYNONYM_MARK_CLASS + ", ." + b.MARK_SPELLING_CONTEXT_CLASS + "." + b.SYNONYM_MARK_CLASS + ", ." + b.MARK_NOCONTEXT_CLASS + "." + b.SYNONYM_MARK_CLASS + " {background-image:url(" + v.synonymHighlight + ")!important;}");
                w.push("." + b.MARK_CONTEXT_CLASS + "." + b.NO_SUGGESTIONS_MARK_CLASS + ", ." + b.MARK_SPELLING_CONTEXT_CLASS + "." + b.NO_SUGGESTIONS_MARK_CLASS + ", ." + b.MARK_NOCONTEXT_CLASS + "." + b.NO_SUGGESTIONS_MARK_CLASS + " {background-image:url(" + v.noSuggestionsHighlight + ")!important;}");
                w.push("." + b.MARK_HIGHLIGHT_LEFT_CLASS + " { position : absolute; left:-2px; top:0px; bottom:0px; width:2px;}");
                w.push("." + b.MARK_HIGHLIGHT_RIGHT_CLASS + " { position : absolute; right:-2px; top:0px; bottom:0px; width:2px;}");
                w.push("." + b.MARK_HIGHLIGHT_TOP_CLASS + " { position : absolute; left:0px; right:0px; top:-2px; height:3px;}");
                w.push("." + b.MARK_HIGHLIGHT_BOTTOM_CLASS + " { position : absolute; left:0px; right:0px; bottom:-2px; height:3px;}");
                if (u.isIe) {
                    w.push("." + b.MARK_HIGHLIGHT_LEFT_CLASS + " { background-color: rgba(0,0,0,0)!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_RIGHT_CLASS + " { background-color: rgba(0,0,0,0)!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_TOP_CLASS + " { background-color: rgba(0,0,0,0)!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_BOTTOM_CLASS + " { background-color: rgba(0,0,0,0)!important;}")
                }
                if (!u.isCanvasSupported()) {
                    w.push("." + b.MARK_HIGHLIGHT_LEFT_CLASS + " { background-color: rgb(" + b.MARK_HIGHLIGHT_RGB + ")!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_RIGHT_CLASS + " { background-color: rgb(" + b.MARK_HIGHLIGHT_RGB + ")!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_TOP_CLASS + " { background-color: rgb(" + b.MARK_HIGHLIGHT_RGB + ")!important;}");
                    w.push("." + b.MARK_HIGHLIGHT_BOTTOM_CLASS + " { background-color: rgb(" + b.MARK_HIGHLIGHT_RGB + ")!important;}")
                }
                break
        }
        return w.join(" ")
    }
    var m = function(v) {
        s = v
    };
    var q = function() {
        return p ? p() : p
    };
    var d = function() {
        g = true;
        while (h.length > 0) {
            var v = h.pop();
            if (typeof v.func === "function") {
                v.func.apply(null, v.params)
            }
        }
    };
    var r = function(v) {
        if (!g) {
            h.push({
                func: r,
                params: v
            })
        } else {
            var x = [{
                name: "debugToConsole",
                func: "setDebugToConsole"
            }, {
                name: "apiKey",
                func: "setApiKey"
            }, {
                name: "trackingSource",
                func: "setTrackingSource"
            }, {
                name: "gaAccount",
                func: "setGaAccountId"
            }, {
                name: "checkExistingText",
                func: "setCheckExistingText"
            }, {
                name: "gaCategory",
                func: "setGaCategory"
            }, {
                name: "userId",
                func: "setUserId",
                object: o
            }, {
                name: "contactGingerText",
                func: "setContactGingerText"
            }, {
                name: "contactGingerUrl",
                func: "setContactGingerUrl"
            }, {
                name: "disableOTF",
                func: "setDisableOTF"
            }, {
                name: "correctionStyle",
                func: "setCorrectionStyle"
            }, {
                name: "menuMode",
                func: "setMenuMode"
            }, {
                name: "markType",
                func: "setMarkType"
            }, {
                name: "allowShowMessages",
                func: "setAllowShowMessages"
            }, {
                name: "isFirstTimeInstallation",
                func: "setIsFirstTimeInstallation"
            }, {
                name: "messagesInitialParameters",
                func: "setMessagesInitialParameters"
            }, {
                name: "localStorageViaDOM",
                func: "setLocalStorageViaDOM"
            }, {
                name: "sourceUrl",
                func: "setSourceUrl"
            }, {
                name: "textInputEnabled",
                func: "setTextInputEnabled"
            }, {
                name: "lastKeepAliveTime",
                func: "setLastKeepAliveTime"
            }];
            var w = function(y) {
                $.each(x, function(A, B) {
                    if (y && y.hasOwnProperty([B.name])) {
                        var z = B.hasOwnProperty("object") ? B.object : j;
                        z[B.func](y[B.name])
                    }
                })
            };
            w(v);
            if (typeof v.additionalInitParams === "string") {
                v.additionalInitParams = $.parseJSON(v.additionalInitParams)
            }
            w(v.additionalInitParams);
            $(e).trigger(e.EXTERNAL_INIT_PARAMS)
        }
    };
    return {
        load: i,
        setContextMenuStyles: n,
        getContextMenuStyles: f,
        setWidgetStyles: m,
        getWidgetStyles: q,
        init: r
    }
})();
var _gaq = _gaq || [];
GS_WEB_WIDGET.comm = (function() {
    var A = null,
        a = null,
        x = null,
        i = null,
        q = null;
    var f = false;
    var z = "gaEvent",
        g = "gaPageView";
    var b = "services.gingersoftware.com/Ginger/correct/json/",
        j = "services.gingersoftware.com/Ginger/correct/jsonSecured/";
    var u = "tr.gingersoftware.com/trackingEP.php";
    var d = "learn-sink.gingersoftware.com/";
    var c = "http://";
    var n = "https://";
    var m = "US";
    var t = "";
    var h = function() {
        A = GS_WEB_WIDGET.namespace("logger");
        i = GS_WEB_WIDGET.namespace("appModel");
        q = GS_WEB_WIDGET.namespace("userManager");
        a = GS_WEB_WIDGET.namespace("defs");
        x = GS_WEB_WIDGET.namespace("utils");
        t = a.VERSION
    };
    var w = function(B) {
        m = B;
        return this
    };
    var l = function(B) {
        t = B;
        return this
    };
    var s = function(B, C) {
        var D = {
            numCallsInFlight: 0,
            pendingCalls: [],
            call: function(G, H, E) {
                D.pendingCalls.push(function(I) {
                    return C(G, H, function(J) {
                        I();
                        E(J)
                    })
                });

                function F() {
                    if (D.pendingCalls.length) {
                        if (D.numCallsInFlight < B) {
                            var I = D.pendingCalls.shift();
                            D.numCallsInFlight++;
                            I(function() {
                                D.numCallsInFlight--;
                                F()
                            })
                        } else {
                            if (A.loggerOn()) {
                                A.logDebug(D.numCallsInFlight + " calls in flight - queueing calls")
                            }
                        }
                    }
                }
                F()
            }
        };
        return D
    };
    var o = function(C, B) {
        return (i.getForceUseHttps() || x.isDocumentHttps(B)) ? n : c
    };
    var e = function(E, G, C, D) {
        if (typeof C === "undefined") {
            C = false
        }
        var F = i.getForceUseHttps() || (E && E.params && E.params.securedPage) || x.isDocumentHttps(document);
        var B = F ? n + j : c + b;
        $.ajax({
            url: B + E.method + "?callback=?",
            crossDomain: true,
            contentType: "application/json",
            dataType: "jsonp",
            data: $.extend(E.params, {
                apiKey: i.getApiKey(),
                lang: m,
                clientVersion: t
            }),
            success: function(H, J, I) {
                if (typeof G === "function") {
                    G(H, D)
                }
            },
            error: function(H, J, I) {
                if (A.loggerOn()) {
                    A.logWarning("Ajax call failed, textStatus=%s", J, H)
                }
                if (typeof G === "function") {
                    G(D)
                }
            }
        })
    };
    var v = function(D, C) {
        var B = o(C, document) + u;
        $.ajax({
            url: B + "?jsoncallback=?",
            crossDomain: true,
            contentType: "application/json",
            dataType: "jsonp",
            data: {
                cmd: "reportEvents",
                events: JSON.stringify($.isArray(D) ? D : [D])
            },
            success: function(F, G, E) {
                if (A.loggerOn()) {
                    A.logDebug("Succeeded reporting to tracking server")
                }
            },
            error: function(E, G, F) {
                if (A.loggerOn()) {
                    A.logError("Failed reporting to tracking server")
                }
            }
        })
    };
    var r = function() {
        if (f) {
            return
        }
        if (_gaq) {
            _gaq.push(["_setAccount", i.getGaAccountId()]);
            _gaq.push(["_setDomainName", "none"]);
            (function() {
                var D = document.createElement("script");
                D.type = "text/javascript";
                D.async = true;
                D.src = (i.getForceUseHttps() || "https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var B = document.getElementsByTagName("script");
                if (B.length !== 0) {
                    var C = B[0];
                    C.parentNode.insertBefore(D, C)
                } else {
                    document.body.appendChild(D)
                }
            })();
            f = true
        }
    };
    var y = function() {
        if (!f) {
            r()
        }
        if (_gaq) {
            _gaq.push(["_trackPageview"])
        }
    };
    var p = function(C, D, B, E) {
        if (!f) {
            r()
        }
        if (_gaq) {
            if (typeof E === "undefined") {
                _gaq.push(["_trackEvent", C, D, B])
            } else {
                _gaq.push(["b._setDomainName", "none"], ["b._setAccount", E], ["b._trackEvent", C, D, B])
            }
        }
    };
    var k = function(E, F, C) {
        var B = o(C, document) + d + F,
            D = q.getUserId();
        $.ajax({
            url: B + "?jsoncallback=?",
            crossDomain: true,
            contentType: "application/json",
            dataType: "jsonp",
            data: {
                uid: D,
                stats: JSON.stringify(E)
            },
            success: function(H, I, G) {
                if (A.loggerOn()) {
                    A.logDebug("Succeeded reporting to learning server")
                }
            },
            error: function(G, I, H) {
                if (A.loggerOn()) {
                    A.logError("Failed reporting to learning server")
                }
            }
        })
    };
    return {
        load: h,
        setDictionaryKey: w,
        setClientVersion: l,
        startCallQueue: s,
        widgetCallService: e,
        reportEventsToTracking: v,
        googleAnalyticsInit: r,
        googleAnalyticsSendPageView: y,
        googleAnalyticsSendEvent: p,
        GOOGLE_ANALYTICS_REPORT_EVENT: z,
        GOOGLE_ANALYTICS_REPORT_PAGE_VIEW: g,
        reportLearning: k
    }
})();
"use strict";
GS_WEB_WIDGET.trackingEvent = (function() {
    var a = null,
        b = null,
        c = null,
        h = null;
    var d = "";
    var e = function() {
        a = GS_WEB_WIDGET.namespace("defs");
        b = GS_WEB_WIDGET.namespace("appModel");
        c = GS_WEB_WIDGET.namespace("context");
        h = GS_WEB_WIDGET.namespace("userManager");
        g()
    };
    var g = function() {
        $(c).bind(c.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(i, j) {
            d = b.getTrackingSource()
        })
    };
    var f = function(k) {
        var j = h.getUserInfo();
        this.payload = k && k.payload ? k.payload : {};
        this.payload.apiKey = b.getApiKey();
        this.payload.pageUrl = location.href;
        this.payload.userId = k.userId || j.userId;
        if (j.machineId) {
            this.payload.machineId = j.machineId
        }
        var i = b.getAbType();
        if (i) {
            this.payload.abType = i
        }
        this.source = k.source || d;
        this.version = a.VERSION
    };
    return {
        load: e,
        TrackingEvent: f
    }
})();
"use strict";
GS_WEB_WIDGET.trackingManager = (function() {
    var D = null,
        s = null,
        c = null,
        K = null,
        n = null,
        q = null,
        J = null;
    var H = 1,
        t = 60 * 1000,
        r = [];
    var o = "",
        B = "Bubble Menu",
        A = "Context Menu";
    var x = function() {
        D = GS_WEB_WIDGET.namespace("defs");
        q = GS_WEB_WIDGET.namespace("appModel");
        s = GS_WEB_WIDGET.namespace("trackingEvent");
        c = GS_WEB_WIDGET.namespace("comm");
        K = GS_WEB_WIDGET.namespace("utils");
        n = GS_WEB_WIDGET.namespace("protocol");
        J = GS_WEB_WIDGET.namespace("context");
        E()
    };
    var E = function() {
        var M = false;
        $(J).bind(J.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(N, O) {
            o = q.getGaCategory();
            if (q.getIsFirstTimeInstallation()) {
                if (!M) {
                    M = true;
                    m()
                }
            }
        });
        setInterval(w, t)
    };
    var d = function(M) {
        f(M, "GingerTheTextRTEvent");
        j(o, "Sentence Checked", "" + (M.corrections || 0));
        return this
    };
    var i = function(M) {
        f(M, "IsSpelledCorrectlyReply");
        j(o, "Word Checked", "");
        return this
    };
    var y = function() {
        f({}, "ClickGingerLink");
        j(o, A, "Click on Ginger");
        return this
    };
    var v = function(M) {
        f(M, "ContextMenuOpenedEvent");
        j(o, A, "Open");
        return this
    };
    var C = function(M) {
        f(M, "ContextMenuCanceledEvent");
        j(o, A, "Cancel");
        return this
    };
    var g = function(M) {
        f(M, "IgnoreCorrectionEvent");
        j(o, q.isContextMenu() ? A : B, "Ignore Correction");
        return this
    };
    var h = function(M) {
        f(M, "SelectSuggestionEventEx");
        j(o, A, "Select Suggestion");
        return this
    };
    var a = function(M) {
        f(M, "OpenToolbarPopup");
        j(o, "Popup", "Open");
        return this
    };
    var m = function(M) {
        f(M, "InstallEvent");
        j(o, "Install", "");
        return this
    };
    var z = function(M) {
        f(M, "bubbleOpen");
        j(o, B, "Appear");
        return this
    };
    var F = function(M) {
        f(M, "bubbleOpenUnique");
        j(o, B, "Unique Appear");
        return this
    };
    var u = function(M) {
        f(M, "bubbleClose");
        j(o, B, "Disappear");
        return this
    };
    var k = function(M) {
        f(M, "bubbleClosedUnique");
        j(o, B, "Unique Disappear");
        return this
    };
    var b = function(M) {
        f(M, "approveFragment");
        j(o, B, "Approve Fragment");
        return this
    };
    var e = function(M) {
        f(M, "IgnoreFragment");
        j(o, B, "Ignore Fragment");
        return this
    };
    var l = function(M) {
        f(M, "keepAlive");
        return this
    };
    var p = function(M) {
        f(M, "controlLanguage");
        return this
    };
    var I = function(M) {
        f(M, "showMessage");
        return this
    };
    var L = function(M) {
        f(M, "clickLearnMore");
        return this
    };
    var G = function() {
        f({}, "clickGingerLinkFromFirstTimeMsg");
        return this
    };
    var f = function(N, M) {
        if (typeof M !== "undefined") {
            N = N || {};
            N.type = M
        }
        r.push(new s.TrackingEvent({
            payload: N
        }));
        if (r.length >= H) {
            w()
        }
    };
    var w = function() {
        if (r && r.length > 0) {
            n.service.reportToTracking(r);
            r = []
        }
        return this
    };
    var j = function(N, O, M) {
        n.service.reportEventsToGoogleAnalytics(N, O, M)
    };
    return {
        load: x,
        reportGingerTheTextReply: d,
        reportIsSpelledCorrectlyReply: i,
        reportClickGingerLink: y,
        reportOpenContextMenu: v,
        reportContextMenuCanceled: C,
        reportIgnoreCorrection: g,
        reportSelectSuggestion: h,
        reportOpenToolbarPopup: a,
        reportOpenBubble: z,
        reportOpenUniqueBubble: F,
        reportCloseBubble: u,
        reportCloseUniqueBubble: k,
        reportApproveFragment: b,
        reportIgnoreFragment: e,
        reportKeepAlive: l,
        reportControlLanguage: p,
        reportInstallation: m,
        reportMessageDisplayed: I,
        reportClickLearnMore: L,
        reportClickGingerIconFromFirstTimeMessage: G,
        flushService: w
    }
})();
GS_WEB_WIDGET.userManager = (function() {
    var m = null,
        r = null,
        a = null,
        e = null;
    var u = "gWidgetuserId",
        j = "isLastPhraseEnglish";
    var l = false,
        h = false,
        t = null;
    var i = function() {
        m = GS_WEB_WIDGET.namespace("guid");
        r = GS_WEB_WIDGET.namespace("utils");
        e = GS_WEB_WIDGET.namespace("context");
        a = GS_WEB_WIDGET.namespaceOrNull("pluginManager");
        if (a) {
            $(e).bind(e.PLUGIN_LOAD_COMPLETE, function(v, w) {
                l = a.isConnectedToPlugin()
            })
        }
    };
    var b = function() {
        var v = null;
        if (r.supportsLocalStorage()) {
            if (window.localStorage[u] !== undefined) {
                v = window.localStorage[u]
            } else {
                v = m.generate();
                window.localStorage[u] = v
            }
        }
        return v
    };
    var o = function(v) {
        if (r.supportsLocalStorage()) {
            window.localStorage[u] = v
        }
    };
    var q = function(v) {
        if (v !== null) {
            o(v)
        }
    };
    var d = function() {
        return l ? a.getUserId() : b()
    };
    var k = function(v) {
        h = v
    };
    var c = function() {
        return h
    };
    var n = function(v) {
        t = v
    };
    var f = function() {
        return t
    };
    var p = function() {
        var v = false;
        if (r.supportsLocalStorage()) {
            if (window.localStorage[j] !== undefined) {
                v = window.localStorage[j]
            } else {
                window.localStorage[j] = v
            }
        }
        return v
    };
    var s = function(v) {
        if (r.supportsLocalStorage()) {
            window.localStorage[j] = v
        }
    };
    var g = function() {
        var v = {};
        if (l) {
            v.userId = a.getUserId();
            v.machineId = a.getMachineId();
            v.isLoggedIn = a.isLoggedIn()
        } else {
            v.userId = b();
            v.machineId = f();
            v.isLoggedIn = c()
        }
        return v
    };
    return {
        load: i,
        getUserInfo: g,
        setUserId: q,
        getUserId: d,
        isLoggedIn: c,
        setIsLoggedIn: k,
        setMachineId: n,
        getMachineId: f,
        setIsLastPhraseEnglish: s,
        isLastPhraseLanguageEnglish: p
    }
})();
GS_WEB_WIDGET.protocol = (function() {
    var x = null,
        a = null,
        w = null,
        f = null,
        v = null,
        u = null,
        o = null,
        n = null,
        t = null,
        l = null,
        c = null;
    var e, h = false;
    var g = null,
        j = null;
    var i = function() {
        x = GS_WEB_WIDGET.namespace("logger");
        a = GS_WEB_WIDGET.namespace("defs");
        w = GS_WEB_WIDGET.namespace("browser");
        f = GS_WEB_WIDGET.namespace("trackingManager");
        v = GS_WEB_WIDGET.namespace("comm");
        u = GS_WEB_WIDGET.namespace("initParams");
        o = GS_WEB_WIDGET.namespace("guid");
        n = GS_WEB_WIDGET.namespace("userManager");
        t = GS_WEB_WIDGET.namespace("utils");
        l = GS_WEB_WIDGET.namespace("appModel");
        c = GS_WEB_WIDGET.namespaceOrNull("startParams");
        if (c) {
            j = c.getParams()
        }
        q();
        g = v.startCallQueue(a.MAX_CORRECTIONS_IN_FLIGHT, m).call
    };
    var y = {
        gingerTheText: function(A, z, B) {
            r("GingerTheTextFull", {
                text: A,
                isOnTheFly: z,
                securedPage: t.isDocumentHttps(document)
            }, B)
        },
        isSpelledCorrectly: function(A, z, B) {
            r("IsSpelledCorrectly", {
                text: A,
                isFirstInPhrase: z,
                securedPage: t.isDocumentHttps(document)
            }, B)
        },
        reportToTracking: function(z) {
            d(z, null)
        },
        reportEventsToGoogleAnalytics: function(A, B, z) {
            b(v.GOOGLE_ANALYTICS_REPORT_EVENT, A, B, z)
        },
        reportToLearning: function(z, A) {
            p({
                data: z,
                method: A
            })
        }
    };
    var s = {
        getInitParams: function(A) {
            if (w.isExtensionMode) {
                k("getInitParams", null, A)
            } else {
                var z = {
                    userId: n.getUserId(),
                    isLoggedIn: n.isLoggedIn(),
                    apiKey: l.getApiKey(),
                    trackingSource: l.getTrackingSource(),
                    gaCategory: l.getGaCategory(),
                    isLastPhraseLanguageEnglish: n.isLastPhraseLanguageEnglish(),
                    forceUseHttps: l.getForceUseHttps(),
                    menuMode: l.getMenuMode(),
                    disableOTF: l.getDisableOTF(),
                    abType: l.getAbType(),
                    allowShowMessages: l.getAllowShowMessages()
                };
                A(z)
            }
        },
        getLoggerInfo: function(z) {
            if (w.isExtensionMode) {
                k("getLoggerInfo", null, z)
            } else {
                z(x.readLoggerStartupParams())
            }
        },
        forceGC: function() {
            if (w.isFireFoxExtension) {
                k("forceGC", null, null)
            }
        },
        logFirefoxExtMsg: function(z) {
            if (x.loggerOn()) {
                k("firefoxLog", z, null)
            }
        },
        isLastPhraseLanguageEnglish: function(z) {
            if (w.isExtensionMode) {
                k("isLastPhraseLanguageEnglish", null, z)
            } else {
                if (z && typeof(z) === "function") {
                    z(n.isLastPhraseLanguageEnglish())
                }
            }
        },
        setIsLastPhraseEnglish: function(z) {
            if (w.isExtensionMode) {
                k("setIsLastPhraseEnglish", {
                    isEnglish: z
                }, null)
            } else {
                n.setIsLastPhraseEnglish(z)
            }
        },
        setLastKeepAliveTime: function(z) {
            if (w.isExtensionMode) {
                k("setLastKeepAliveTime", {
                    time: z
                }, null)
            }
        },
        getUserInfo: function(A) {
            if (w.isExtensionMode) {
                k("getUserInfo", null, A)
            } else {
                var z = {
                    userId: n.getUserId(),
                    isLoggedIn: false
                };
                A(z)
            }
        },
        updateMessagesInfoInStorage: function(z) {
            if (w.isExtensionMode) {
                k("updateMessagesInfoInStorage", z, null)
            }
        },
        ready: function(C) {
            if (w.isMaxthonExtension) {
                var B = null,
                    A = false;

                function z() {
                    k("isReady", null, function() {
                        if (!A) {
                            clearInterval(B);
                            A = true;
                            C()
                        }
                    })
                }
                z();
                B = setInterval(z, 500)
            } else {
                C()
            }
        }
    };
    var q = function() {
        h = j !== null;
        if (!w.isExtensionMode || h) {
            e = function(E, D, F) {
                switch (E) {
                    case "call-service":
                        v.widgetCallService(D, F, false);
                        break;
                    case "call-tracking":
                        v.reportEventsToTracking(D, false);
                        break;
                    case "call-googleAnalytics":
                        if (D.op === v.GOOGLE_ANALYTICS_REPORT_EVENT) {
                            v.googleAnalyticsSendEvent(D.category, D.action, D.label)
                        }
                        break;
                    case "call-learning":
                        v.reportLearning(D.data, D.method, false);
                        break
                }
            }
        } else {
            if (w.isFireFoxExtension) {
                var A = t.createRepository();
                self.port.on("GingerResponse", function(D) {
                    var E = A.pop(D.id);
                    if (E && typeof E === "function") {
                        E(D.data)
                    }
                });
                e = function(E, D, G) {
                    var F = A.put(G);
                    self.port.emit("GingerRequest", {
                        id: F,
                        action: E,
                        data: D
                    })
                }
            } else {
                if (w.isChromeExtension) {
                    e = function(E, D, F) {
                        chrome.extension.sendRequest({
                            action: E,
                            data: D
                        }, F || function() {})
                    }
                } else {
                    if (w.isSafariExtension) {
                        var C = t.createRepository();
                        safari.self.addEventListener("message", function(D) {
                            if (D.name === a.SAFARI_EXT_REPLY_MSG) {
                                if (D.message.reqId !== null) {
                                    var E = C.pop(D.message.reqId);
                                    if (E !== null && typeof(E) === "function") {
                                        E(D.message.response)
                                    }
                                }
                            }
                        }, false);
                        e = function(F, E, H) {
                            function G() {
                                return typeof H === "function"
                            }
                            var D = G() ? C.put(H) : null;
                            safari.self.tab.dispatchMessage("message", {
                                action: F,
                                data: E,
                                reqId: D
                            })
                        }
                    } else {
                        if (w.isMaxthonExtension) {
                            var z = t.createRepository(),
                                B = window.external.mxGetRuntime();
                            B.listen(a.MAXTHON_EXT_REPLY_MSG, function(D) {
                                if (D.reqId !== null) {
                                    var E = z.pop(D.reqId);
                                    if (E !== null && typeof(E) === "function") {
                                        E(D.response)
                                    }
                                }
                            }, false);
                            e = function(F, E, H) {
                                function G() {
                                    return F === "call-service" || F === "call-background"
                                }
                                var D = G() ? o.generate() : null;
                                z.put(H, D);
                                B.post("message", {
                                    action: F,
                                    data: E,
                                    reqId: D
                                })
                            }
                        }
                    }
                }
            }
        }
    };

    function m(C, B, D) {
        if (x.loggerOn() && !w.isFireFoxExtension) {
            x.logDebug("Enter _call()", C, JSON.stringify(B))
        }
        var A = t.getTime();
        var z = typeof D === "function" ? function(E) {
            var F = t.getTime() - A;
            if (F > 500) {
                if (x.loggerOn() && !w.isFireFoxExtension) {
                    x.logWarning("Elapsed time for _call(%s) is %sms.", C, F)
                }
            }
            D && D(E && typeof E === "object" ? $.extend(E, {
                trt: F
            }) : E)
        } : null;
        e(C, B, z)
    }

    function r(B, z, A) {
        g("call-service", {
            method: B,
            params: z
        }, A)
    }

    function d(z, A) {
        m("call-tracking", z, A)
    }

    function p(z, A) {
        m("call-learning", z, A)
    }

    function b(C, A, B, z) {
        m("call-googleAnalytics", {
            op: C,
            category: A,
            action: B,
            label: z
        }, null)
    }

    function k(B, z, A) {
        m("call-background", {
            method: B,
            args: z
        }, A)
    }
    return {
        load: i,
        service: y,
        background: s
    }
})();
GS_WEB_WIDGET.editControl = (function() {
    var b = null,
        d = null,
        f = null,
        i = null,
        e = null,
        h = null,
        a = null,
        j = null;
    var g = function() {
        b = GS_WEB_WIDGET.namespace("defs");
        d = GS_WEB_WIDGET.namespace("staticUtils");
        f = GS_WEB_WIDGET.namespace("utils");
        i = GS_WEB_WIDGET.namespace("logger");
        e = GS_WEB_WIDGET.namespace("sha1");
        h = GS_WEB_WIDGET.namespace("managerCreator");
        a = GS_WEB_WIDGET.namespace("phraseManager");
        j = GS_WEB_WIDGET.namespace("mainController")
    };
    var c = function() {
        var k = 10;

        function n() {
            return {
                stack: [],
                push: function(o) {
                    this.stack.push(o)
                },
                pop: function() {
                    return this.stack.pop()
                },
                replace: function(o) {
                    if (this.stack.length != 0) {
                        this.stack[this.stack.length - 1] = o
                    }
                },
                getLast: function() {
                    return this.stack.length != 0 ? this.stack[this.stack.length - 1] : null
                },
                clear: function() {
                    this.stack.length = 0
                },
                isEmpty: function() {
                    return this.stack.length == 0
                }
            }
        }
        var l = (function m() {
            var r = null;
            var G = null;
            var Q = null;
            var I = null;
            var D = n();
            var o = n();
            var v = null;
            var F = null;
            var K = null;
            var E = h.create(["Text", "Pos", "CleanText", "Indent", "InText", "PhraseSegments", "Corrections", "OriginalCleanText"], {
                primaryKeyIndex: [0, 1],
                generateGuid: true
            });
            E.getPhraseFromUiPhrase = function(V) {
                if (!V) {
                    if (i.loggerOn()) {
                        i.logError("uiPhraseManager.getPhraseFromUiPhrase: uiPhrase is null")
                    }
                    return null
                } else {
                    return a.getItem({
                        CleanText: V.getCleanText()
                    })
                }
            };
            var O = function(V) {
                r = V;
                G = $(r);
                v = f.getNodeType(r)
            };
            var N = function() {
                var V = r.innerHTML;
                return {
                    clean: d.doReplace(V, d.getPatterns().deleteGingerMarkTags),
                    html: V,
                    rawText: C()
                }
            };
            var C = function() {
                var V = d.getDOMhtml(r);
                var W = d.getPatterns();
                V = d.doReplace(V, W.removeMozClauses);
                V = d.doReplace(V, W.removeIrrelevantTags);
                V = d.doReplace(V, W.deleteAllTags);
                V = d.doReplace(V, W.replaceSpecialChars);
                return V
            };
            var T = function(V) {
                r.innerHTML = V.html
            };
            var t = function(W) {
                var V = D.getLast();
                return !V || !f.compareCleanContents(V.contents, W)
            };
            var w = function(W, V) {
                var Y = t(W);
                var X = {
                    contents: W,
                    bookmark: V
                };
                D[Y ? "push" : "replace"](X);
                return Y
            };
            var A = function(W, V) {
                var Y = D.isEmpty();
                var X = w(W, V);
                if (X && !Y) {
                    o.clear()
                }
            };
            var p = function() {
                z()
            };
            var z = function() {
                if (F) {
                    clearTimeout(F)
                }
                F = setTimeout(function() {
                    clearTimeout(F);
                    delete(F);
                    s()
                }, k)
            };
            var s = function() {
                j.processControl(l)
            };
            var L = function() {
                return v
            };
            var R = function(V) {
                K = V
            };
            var H = function() {
                return K
            };
            var q = function(V) {
                Q = V
            };
            var u = function() {
                return Q
            };
            var S = function(V) {
                I = V
            };
            var M = function() {
                return I
            };
            var B = function() {
                return r
            };
            var J = function() {
                return D
            };
            var y = function() {
                return o
            };
            var U = 0;
            var x = function() {
                U = 0
            };
            var P = function(Y, W, X) {
                var aa = Y.substring(W, X !== undefined ? X : Y.length);
                if (i.loggerOn()) {
                    i.logDebug("processPhrase: left=" + W + ", right=" + X + ', rawPhrase = "' + aa + '"')
                }
                aa = d.doReplace(aa, d.getPatterns().deleteAllTags);
                var ab = U;
                U += aa.length;
                var Z = aa.search(/\S/);
                var V = Z != -1 ? aa.substr(Z) : aa;
                V = $.trim(V);
                return V.length !== 0 ? E.getOrCreateItem({
                    CleanText: V,
                    Pos: ab,
                    Text: aa,
                    Indent: Z,
                    InText: true,
                    OriginalCleanText: V
                }) : null
            };
            return {
                init: O,
                uiPhraseManager: E,
                getContents: N,
                getRawText: C,
                setContents: T,
                checkContentsChanged: t,
                updateUndo: w,
                updateUndoRedoAfterEdit: A,
                textChanged: p,
                setIdleTimer: z,
                idleHandler: s,
                getType: L,
                getLanguage: H,
                setLanguage: R,
                setRichTextElement: q,
                getRichTextElement: u,
                setTextInputManager: S,
                getTextInputManager: M,
                getElement: B,
                getUndoStack: J,
                getRedoStack: y,
                preProcessPhrase: x,
                processPhrase: P
            }
        })();
        return l
    };
    return {
        load: g,
        getEditControl: c
    }
})();
GS_WEB_WIDGET.staticUtils = (function() {
    var O = null,
        t = null,
        u = null,
        i = null,
        Q = null,
        W = null,
        p = null;
    var o = 16777215,
        D = 1,
        V = 2;
    var n = null;
    var q = null;
    var H = null;
    var J = function() {
        O = GS_WEB_WIDGET.namespace("defs");
        t = GS_WEB_WIDGET.namespace("appModel");
        u = GS_WEB_WIDGET.namespace("logger");
        i = GS_WEB_WIDGET.namespace("browser");
        W = GS_WEB_WIDGET.namespace("utils");
        Q = GS_WEB_WIDGET.namespace("menuController");
        p = GS_WEB_WIDGET.namespace("phraseManager");
        q = z();
        H = d();
        n = [O.MARK_CONTEXT_CLASS, O.MARK_NOCONTEXT_CLASS, O.MARK_SPELLING_CONTEXT_CLASS, O.NO_SUGGESTIONS_MARK_CLASS, O.SYNONYM_MARK_CLASS]
    };
    var z = function() {
        function Y(ag, af) {
            return (af ? "(" : "(?:") + ag + ")"
        }
        var ac = "br|p|div|h\\d|table|ol|ul|li|tbody|de|dt|td|th|tr|sub|sup|caption|textarea|button|select|pre|address|body";
        var ad = "/?";
        var X = "[^>]*";
        var ab = "[^>]*?";
        var ae = "[^<]*";
        var Z = "GingerNoCheckStart";
        var aa = "GingerNoCheckEnd";
        return {
            DO_NOT_CHECK_START: Z,
            DO_NOT_CHECK_END: aa,
            removeMozClauses: {
                pattern: /<!--\[if gte mso \d+\]>[\s\S]*?<!\[endif\]-->/ig,
                replace: ""
            },
            removeIrrelevantTags: {
                pattern: new RegExp("<(" + O.IRRELEVANT_TAGS.join("|") + ")(?:.*?)</(" + O.IRRELEVANT_TAGS.join("|") + ")>", "gi"),
                replace: ""
            },
            compactBlockTags: {
                pattern: new RegExp("<" + Y(ad, true) + Y(ac) + X + ">", "gi"),
                replace: "<+>"
            },
            compactAllTags: {
                pattern: new RegExp("<" + Y(ad, true) + "(?!\\+)" + X + ">", "g"),
                replace: "<>"
            },
            tagPhrases: {
                pattern: /((?:(?:([\.!?])(?!\S))|[\n])\s*)/g,
                replace: "$1<+>"
            },
            splitPhrases: function() {
                var af = new RegExp("<" + ad + "\\+>", "g");
                af.lastIndex = 0;
                return af
            },
            splitWords: function() {
                var af = new RegExp("\\S+", "g");
                af.lastIndex = 0;
                return af
            },
            deleteAllTags: {
                pattern: new RegExp("<" + ad + X + ">", "g"),
                replace: ""
            },
            alignSpecialChars: [{
                pattern: /&amp;/gi,
                replace: "&"
            }, {
                pattern: /&lt;/gi,
                replace: " "
            }, {
                pattern: /&gt;/gi,
                replace: " "
            }, {
                pattern: /&nbsp;|[\r\t]/g,
                replace: " "
            }],
            replaceSpecialChars: [{
                pattern: /&amp;/gi,
                replace: "&"
            }, {
                pattern: /&lt;/gi,
                replace: "<"
            }, {
                pattern: /&gt;/gi,
                replace: ">"
            }, {
                pattern: /&nbsp;|[\r\t]/g,
                replace: " "
            }],
            matchBlockTagNodeName: new RegExp(ac, "i"),
            deleteGingerMarkTags: {
                pattern: new RegExp("<span" + ab + Y(O.MARK_CONTEXT_CLASS + "|" + O.MARK_NOCONTEXT_CLASS) + X + ">" + Y(ae, true) + "</span>", "gi"),
                replace: "$1"
            }
        }
    };
    var j = function() {
        return q
    };
    var m = function(ad) {
        var aj = ad.treeWalker,
            ab = ad.start,
            ac = ad.length,
            ae = ad.uiPhrase,
            Y = ad.correctionId,
            ai = ad.markGuid;
        var Z = ae.getPos() + ae.getIndent() + ab;
        var ah = {
            start: ab,
            length: ac,
            rootStart: Z,
            correctionId: Y,
            uiPhraseGuid: ae.getGuid(),
            markGuid: ai
        };
        var ag = L(aj, Z, Z + ac);
        var af = ag.startPos,
            aa = ag.endPos;
        if (af && aa) {
            var X = af.node.parentNode;
            if (!O.DEBUG_MARKS && h(X) && v(X) == ac) {
                $.extend(ah, {
                    markNode: X
                })
            }
            return ah
        } else {
            if (u.loggerOn()) {
                u.logWarning('Cannot mark: "' + ae.getCleanText().substr(ah.start, ah.length), '"')
            }
            return null
        }
    };
    var g = function(X) {
        if (X) {
            Q.unbindElementMenuHandler(X);
            Q.bindElementMenuHandler(X)
        }
    };
    var e = function(Y) {
        function ae(aQ, aP, aN) {
            var aR = 0;
            var aO = 0;
            while ((aR = aQ.indexOf(aP, aR)) != -1) {
                aR += aP.length;
                if (aR < aN) {
                    aO++
                } else {
                    break
                }
            }
            return aO
        }

        function X(aO) {
            var aN = [];
            if (!aO.hasSuggestions) {
                aN.push(O.NO_SUGGESTIONS_MARK_CLASS)
            }
            if (aO.isSynonym) {
                aN.push(O.SYNONYM_MARK_CLASS)
            }
            aN.push(aE ? O.MARK_SPELLING_CONTEXT_CLASS : O.MARK_CONTEXT_CLASS);
            return aN.join(" ")
        }

        function ax(aQ) {
            if (!aQ) {
                return {
                    hasSuggestions: false,
                    isSynonym: false
                }
            } else {
                var aP = an.getCorrectionManager(),
                    aO = aP.getCorrection(aQ);
                var aN = aO.getSuggestions();
                return {
                    hasSuggestions: aN ? aN.length > 0 : false,
                    isSynonym: aP.isSynonym(aO)
                }
            }
        }

        function aa(aP, aO, aN, aQ) {
            if (aO !== null) {
                aP.className = X(ax(aO));
                aP.setAttribute(O.SPAN_CONTEXT_ID, aO)
            } else {
                aP.className = O.MARK_NOCONTEXT_CLASS;
                aP.removeAttribute(O.SPAN_CONTEXT_ID)
            }
            if (aN) {
                aP.setAttribute(O.MARK_GUID_ATTR, aN)
            }
            if (aQ) {
                aP.setAttribute(O.UI_PHRASE_GUID_ATTR, aQ)
            }
        }

        function aL(aS, aT, aR, aQ, aU) {
            var aP = X(ax(aS));
            if (aR !== O.RICHTEXT_CONTROL) {
                aP += " " + O.NO_MARK_TEXT_INPUT_CLASS
            }
            var aO = aS != null ? '<span class="' + aP + '" ' + (aQ ? O.MARK_GUID_ATTR + '="' + aQ + '" ' : "") + (aU ? O.UI_PHRASE_GUID_ATTR + '="' + aU + '" ' : "") + O.SPAN_CONTEXT_ID + '="' + aS + '">' : '<span class="' + O.MARK_NOCONTEXT_CLASS + '" ' + (aQ ? O.MARK_GUID_ATTR + '="' + aQ + '" ' : "") + (aU ? O.UI_PHRASE_GUID_ATTR + '="' + aU + '" ' : "") + ">";
            var aN = "</span>";
            if (aR !== O.RICHTEXT_CONTROL) {
                switch (t.getMarkType()) {
                    case O.MARK.UNDERLINE:
                        aN = '<span class="' + O.MARK_LINE_CLASS + '"></span>' + aN;
                        break;
                    case O.MARK.HIGHLIGHT:
                        aN = '<span class="' + O.MARK_HIGHLIGHT_LEFT_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS + '"></span><span class="' + O.MARK_HIGHLIGHT_TOP_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS + '"></span><span class="' + O.MARK_HIGHLIGHT_RIGHT_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS + '"></span><span class="' + O.MARK_HIGHLIGHT_BOTTOM_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS + '"></span>' + aN;
                        break
                }
            }
            return aO + aT + aN
        }

        function ac(aP) {
            var aV = aP.hasClass(O.MARK_CONTEXT_CLASS),
                aQ = aP.hasClass(O.MARK_NOCONTEXT_CLASS),
                aU = aP.hasClass(O.MARK_SPELLING_CONTEXT_CLASS);

            function aO() {
                return aV && !aF
            }

            function aS() {
                return aQ && aF
            }

            function aN() {
                return aE && aV
            }

            function aT() {
                return !aE && aU
            }

            function aR() {
                return !aV && !aQ && !aU
            }
            return aO() || aS() || aN() || aT() || aR()
        }

        function aK(aP, aR, aT, aN) {
            var aQ = aP.attr(O.MARK_GUID_ATTR),
                aS = aP.attr(O.UI_PHRASE_GUID_ATTR),
                aO = aP.attr(O.SPAN_CONTEXT_ID);
            return aQ !== aR || aS !== aT || (aN && aO !== aN)
        }
        var aI = Y.treeWalker,
            aD = Y.markSegment,
            ai = Y.uiPhrase,
            an = Y.phrase;
        var at = Y.element,
            aE = !!Y.spellingOnly,
            aM = Y.type;
        var af = W.getDocumentContext(at),
            aF = aD.correctionId || null,
            aj = ai.getCleanText(),
            ab = null;
        if (aD.markNode) {
            var aB = $(aD.markNode);
            if (ac(aB) || aK(aB, aD.markGuid, aD.uiPhraseGuid, aF)) {
                if (u.loggerOn()) {
                    u.logInfo('Updating node in phrase "' + aj + '" at ' + aD.start + "-" + (aD.start + aD.length))
                }
                aa(aD.markNode, aF, aD.markGuid, aD.uiPhraseGuid);
                return true
            } else {
                return false
            }
        } else {
            if (u.loggerOn()) {
                u.logInfo('Wrapping node in phrase "' + aj + '" at ' + aD.start + "-" + (aD.start + aD.length))
            }
            var aq = aD.rootStart,
                az = aD.rootStart + aD.length;
            var aw = L(aI, aq, az);
            var Z = aw.startPos,
                ao = aw.endPos;
            if (!Z || !ao) {
                return false
            }
            var am = (aI.getCurrentNode() === aw.startPos.node);
            aI.walkBack(function() {
                if (am) {
                    return true
                }
                am = (this.node === aw.startPos.node)
            });
            if (i.isIeBefore9) {
                var ay = s(Z.node);
                var ak = s(ao.node);
                if (u.loggerOn()) {
                    u.logAssert(ay)
                }
                if (u.loggerOn()) {
                    u.logAssert(ay == ak)
                }
                var au = ay.innerHTML;
                au = G(au, q.deleteAllTags);
                var av = k(ay, Z);
                var aJ = ae(au, aj, av);
                var aA = aj.substr(aD.start, aD.length);
                var ar = ae(aj, aA, aD.start);
                var ag = af.body.createTextRange();
                ag.moveToElementText(ay);
                for (var aH = 0; aH < aJ + 1; aH++) {
                    if (aH != 0) {
                        ag.collapse(false)
                    }
                    if (!ag.findText(aj, o, 4)) {
                        if (u.loggerOn()) {
                            u.logDebug("insertMark/IE: could not find phrase in range")
                        }
                    }
                }
                for (aH = 0; aH < ar + 1; aH++) {
                    if (aH != 0) {
                        ag.collapse(false)
                    }
                    if (!ag.findText(aA, o, 4)) {
                        if (u.loggerOn()) {
                            u.logDebug("insertMark/IE: could not find word in range")
                        }
                    }
                }
                if (u.loggerOn()) {
                    u.logDebug('insertMark/IE: range set with text = "' + ag.text + '"')
                }
                ag.pasteHTML(aL(aF, ag.text, aM, aD.markGuid, aD.uiPhraseGuid))
            } else {
                var ag = af.createRange();
                ag.setStart(Z.node, Z.offset);
                ag.setEnd(ao.node, ao.offset);
                ab = af.createElement("span");
                aa(ab, aF, aD.markGuid, aD.uiPhraseGuid);
                var ap = ag.extractContents();
                ab.appendChild(ap);
                if (aM !== O.RICHTEXT_CONTROL) {
                    switch (t.getMarkType()) {
                        case O.MARK.UNDERLINE:
                            var ad = af.createElement("span");
                            ad.className = O.MARK_LINE_CLASS;
                            ab.appendChild(ad);
                            break;
                        case O.MARK.HIGHLIGHT:
                            var aG = af.createElement("span"),
                                ah = af.createElement("span"),
                                al = af.createElement("span"),
                                aC = af.createElement("span");
                            aG.className = O.MARK_HIGHLIGHT_LEFT_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS;
                            ah.className = O.MARK_HIGHLIGHT_TOP_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS;
                            al.className = O.MARK_HIGHLIGHT_RIGHT_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS;
                            aC.className = O.MARK_HIGHLIGHT_BOTTOM_CLASS + " " + O.MARK_HIGHLIGHT_SIDE_CLASS;
                            ab.appendChild(aG);
                            ab.appendChild(ah);
                            ab.appendChild(al);
                            ab.appendChild(aC);
                            break
                    }
                }
                ag.insertNode(ab);
                ag.detach()
            }
        }
        if (!O.TOP_MENU_BINDING || t.isBubbleMenu()) {
            if (ab === null) {
                ab = aF !== null ? $("span[" + O.SPAN_CONTEXT_ID + "='" + aF + "']", ay) : ab = $("span." + O.MARK_NOCONTEXT_CLASS, ay);
                if (ab) {
                    ab = ab[0]
                }
            }
            if (ab) {
                Q.unbindElementMenuHandler(ab);
                Q.bindElementMenuHandler(ab)
            }
        }
        return true
    };
    var M = function(Y, aa) {
        var af = W.getDocumentContext(Y),
            X = $(Y);
        if (Y) {
            Q.unbindElementMenuHandler(Y)
        }
        X.find("." + O.MARK_LINE_CLASS).remove();
        var ac = (function ae() {
            var ag = [],
                ak = "style",
                al = "class";

            function aj(am, an) {
                if (an !== null) {
                    ag.push({
                        name: am,
                        value: an
                    })
                }
            }
            var ah = (function() {
                if (Y) {
                    var am = Y.getAttribute(ak);
                    return am && am !== "" ? am : null
                }
            })();
            aj(ak, ah);
            var ai = (function() {
                if (Y) {
                    var am = Y.getAttribute(al);
                    if (am) {
                        am = W.removeValuesFromArray(am.split(" "), n)
                    }
                }
                return am && am.length > 0 ? am.join(" ") : null
            })();
            aj(al, ai);
            return ag
        })();
        var ad = (function ab() {
            var ag = af.createDocumentFragment(),
                ah = null;
            if (ac.length) {
                ah = ag.appendChild(af.createElement("span"));
                $.each(ac, function(ai, aj) {
                    ah.setAttribute(aj.name, aj.value)
                })
            }
            return ah || ag
        })();
        if (typeof aa !== "undefined") {
            $(ad).text(aa)
        } else {
            $(Y).find("." + O.MARK_HIGHLIGHT_SIDE_CLASS).remove();
            for (var Z = 0; Z < Y.childNodes.length; Z++) {
                ad.appendChild(Y.childNodes[Z].cloneNode(true))
            }
        }
        Y.parentNode.replaceChild(ad, Y)
    };
    var S = function(X) {
        return $.makeArray($(X).find("span." + O.MARK_CONTEXT_CLASS + ",span." + O.MARK_SPELLING_CONTEXT_CLASS + ",span." + O.MARK_NOCONTEXT_CLASS))
    };
    var y = function(Y, X) {
        return Y.walk(function() {
            if (this.pos >= X.getPos() + X.getText().length) {
                return true
            }
            if (this.node.nodeType != O.NODE_TYPES.TEXT_NODE && this.pos + (this.node.textContent || this.node.innerText || "").length > X.getPos()) {
                if (h(this.node)) {
                    this.nodes = this.nodes || [];
                    this.nodes.push(this.node)
                }
            }
        }).nodes || []
    };
    var T = function(X, Y) {
        var aa = false;
        var Z = S(X);
        $.each(Z, function(ab, ac) {
            if (!Y || Y.indexOf(ac) == -1) {
                if (u.loggerOn()) {
                    u.logInfo("Removing node " + ac.nodeName)
                }
                M(ac);
                aa = true
            }
        });
        return aa
    };
    var b = function(ac) {
        var Z = ac.markSegments,
            ab = false;
        var aa = $.extend({}, ac);
        delete aa.markSegments;
        if (Z) {
            for (var Y = 0, X = Z.length; Y < X; Y++) {
                aa.markSegment = Z[Y];
                if (e(aa)) {
                    ab = true
                }
            }
        }
        return ab
    };
    var G = function(Y, X) {
        if ($.isArray(X)) {
            $.each(X, function(Z, aa) {
                Y = Y.replace(aa.pattern, aa.replace)
            });
            return Y
        } else {
            return Y.replace(X.pattern, X.replace)
        }
    };
    var c = function(X, Z) {
        if (Z.hasChildNodes()) {
            return Z.firstChild
        } else {
            var Y = Z;
            while (Y != null && Y.nextSibling == null && Y != X) {
                Y = Y.parentNode
            }
            if (Y && Y != X) {
                return Y.nextSibling
            }
        }
        return null
    };
    var I = function(Y, aa) {
        var Z = aa.parentNode;
        if (!aa.previousSibling) {
            if (Z !== Y) {
                return Z
            }
        } else {
            var X = aa.previousSibling;
            while (!!X && !!X.lastChild) {
                X = X.lastChild
            }
            if (!!X && X !== Y) {
                return X
            }
        }
        return null
    };
    var F = function(X, Y, Z) {
        return w(X, i.getNodeFilter().SHOW_TEXT).walk(function() {
            if (Z == D && this.nextPos > Y || Z == V && this.nextPos >= Y) {
                return {
                    node: this.node,
                    offset: Y - this.pos
                }
            }
        }).result
    };
    var L = function(Z, ab, aa) {
        var Y = null,
            X = null;
        Z.walk(function() {
            if (!Y && this.nextPos > ab) {
                Y = {
                    node: this.node,
                    offset: ab - this.pos
                }
            }
            if (this.nextPos >= aa) {
                X = {
                    node: this.node,
                    offset: aa - this.pos
                }
            }
            if (Y && X) {
                return true
            }
        });
        return {
            startPos: Y,
            endPos: X
        }
    };
    var k = function(Y, Z) {
        if (Z.node == Y) {
            return Z.offset
        }
        var X = i.getNodeFilter();
        return w(Y, X.SHOW_TEXT | X.SHOW_ELEMENT).walk(function() {
            if (this.node == Z.node) {
                return this.pos + Z.offset
            }
        }).result
    };
    var E = function(X, Y, aa) {
        var Z = k(X, Y);
        return F(X, Z, aa)
    };
    var v = function(X) {
        return $(X).text().length
    };
    var N = function(Y) {
        if (Y.nodeType == O.NODE_TYPES.ELEMENT_NODE) {
            var Z = q.matchBlockTagNodeName;
            var X = Z.exec(Y.nodeName);
            Z.lastIndex = 0;
            if (X != null && X[0] == Y.nodeName) {
                return true
            }
        }
        return false
    };
    var h = function(X) {
        return a(X) || C(X) || r(X)
    };
    var a = function(X) {
        return X && $(X).hasClass(O.MARK_CONTEXT_CLASS)
    };
    var r = function(X) {
        return X && $(X).hasClass(O.MARK_SPELLING_CONTEXT_CLASS)
    };
    var C = function(X) {
        return X && $(X).hasClass(O.MARK_NOCONTEXT_CLASS)
    };
    var l = function(X) {
        var Y = X;
        while (Y) {
            if (h(Y)) {
                break
            }
            Y = Y.parentNode
        }
        return Y
    };
    var s = function(X) {
        return W.getAncestorOrSelf(X, function(Y) {
            return N(Y)
        })
    };
    var K = function(X) {
        return W.getAncestorOrSelf(X, function(Y) {
            return f(Y)
        })
    };
    var f = function(X) {
        return X.getAttribute && X.getAttribute(O.GINGER_EDITOR_ATTR)
    };
    var x = function(Z, Y) {
        var X = Z,
            aa = {
                result: null
            },
            ab = W.getDocumentContext(Z);
        while ((X = X.parentNode) && X !== ab) {
            aa.node = X;
            if (!!Y && (aa.result = Y(aa)) !== null) {
                break
            }
        }
        return aa
    };
    var U = function(Z, Y) {
        var X = $("span[" + O.UI_PHRASE_GUID_ATTR + '="' + Z.getAttribute(O.UI_PHRASE_GUID_ATTR) + '"]', Y);
        var aa = {};
        X.each(function(ac, ad) {
            var ab = ad.getAttribute(O.SPAN_CONTEXT_ID);
            if (ab) {
                var ae = p.parseCorrectionId(ab);
                if (ae) {
                    aa[ab] = {
                        indexInPhrase: ae.indexInPhrase,
                        mistakeText: ae.mistakeText,
                        markGuid: ad.getAttribute(O.MARK_GUID_ATTR)
                    }
                }
            }
        });
        return aa
    };
    var A = function(X, Y) {
        if (u.loggerOn()) {
            u.logDebug(X + ": " + JSON.stringify({
                contents: Y.contents,
                bookmark_rootName: ((Y.bookmark || {}).root || {}).nodeName,
                bookmark_rootValue: ((Y.bookmark || {}).root || {}).nodeValue,
                rootOffset: (Y.bookmark || {}).rootOffset,
                bookmark_blockName: ((Y.bookmark || {}).blockNode || {}).nodeName,
                bookmark_blockValue: ((Y.bookmark || {}).blockNode || {}).nodeValue,
                beforeBlock: (Y.bookmark || {}).beforeBlock,
                blockOffset: (Y.bookmark || {}).blockOffset
            }))
        }
    };
    var R = function(X) {
        if (i.isIeBefore9) {
            if (X.hasChildNodes()) {
                var aa = "";
                for (var Y = 0; Y < X.childNodes.length; Y++) {
                    var Z = X.childNodes[Y];
                    if (Z.nodeType == O.NODE_TYPES.TEXT_NODE) {
                        aa += Z.nodeValue
                    } else {
                        aa += ("<" + Z.nodeName + ">") + R(Z) + ("</" + Z.nodeName + ">")
                    }
                }
                return aa
            } else {
                return X.nodeValue || ""
            }
        } else {
            if (i.isIe && !i.isIeBefore9) {
                var aa = "";
                for (var Y = 0; Y < X.childNodes.length; Y++) {
                    var Z = X.childNodes[Y];
                    if (Z.nodeType == O.NODE_TYPES.TEXT_NODE) {
                        aa += Z.nodeValue
                    } else {
                        if (Z.outerHTML) {
                            aa += Z.outerHTML
                        }
                    }
                }
                return aa
            } else {
                return X ? X.innerHTML : ""
            }
        }
    };
    var P = function(aa) {
        if (!aa) {
            return null
        }
        var X = W.getDocumentContext(aa);
        var Z = X.createDocumentFragment();
        for (var Y = 0; Y < aa.childNodes.length; Y++) {
            Z.appendChild(aa.childNodes[Y].cloneNode(true))
        }
        return Z
    };
    var d = function() {
        if (!t.getTextInputEnabled()) {
            return false
        } else {
            switch (i.getLayout()) {
                case O.BROWSERS.WEBKIT:
                    return true;
                    break;
                default:
                    return false
            }
        }
    };
    var B = function() {
        if (H === null) {
            H = d()
        }
        return H
    };
    var w = function w(ad, Z, ab) {
        if ((Z & i.getNodeFilter().SHOW_TEXT) == 0) {
            throw new Error("walkTree filter must include browser.getNodeFilter().SHOW_TEXT")
        }
        var aa = i.getTreeWalker();
        var X = aa(ad, Z, null, false),
            Y = null,
            ae = true;
        var ac = function(an) {
            var am = function(ap) {
                var ao = ap && ap.tagName;
                return ao && ao.toLowerCase && ao.toLowerCase() || null
            };
            var al = am(an);
            if (O.IRRELEVANT_TAGS.indexOf(al) === -1) {
                var aj = an && an.parentNode,
                    ak = am(aj);
                if (O.IRRELEVANT_TAGS.indexOf(ak) === -1) {
                    return true
                }
            }
            return false
        };
        var ah = function ah() {
            Y = {
                root: ad,
                result: null
            };
            ae = true
        };
        ah();
        var af = function af(ak) {
            function al() {
                if (ae) {
                    ae = false;
                    am = false;
                    X = aa(ad, Z, null, false);
                    if (!!ab) {
                        return ad
                    } else {
                        if (i.isIeBefore9) {
                            var an = X.nextNode();
                            X.currentNode = an;
                            return an
                        } else {
                            return X.nextNode()
                        }
                    }
                } else {
                    if (am) {
                        return X.currentNode
                    } else {
                        if (i.isIeBefore9) {
                            var an = X.nextNode();
                            if (an && X.currentNode !== an) {
                                X.currentNode = an
                            }
                            return an
                        } else {
                            return X.nextNode()
                        }
                    }
                }
            }
            var aj = null,
                am = true;
            while (aj = al()) {
                if (ac(aj)) {
                    if (am) {
                        am = false
                    } else {
                        Y.node = aj;
                        Y.pos = Y.nextPos || 0;
                        Y.length = (Y.node.nodeValue || "").length;
                        Y.nextPos = Y.pos + Y.length
                    }
                    if (ak && (Y.result = ak.call(Y)) != null) {
                        break
                    }
                }
            }
            return Y
        };
        var ag = function ag(ak) {
            function al() {
                if (i.isIeBefore9) {
                    var am = X.previousNode();
                    if (am && X.currentNode !== am) {
                        X.currentNode = am
                    }
                    return am
                } else {
                    return X.previousNode()
                }
            }
            var aj = null;
            while (aj = al()) {
                if (ac(aj)) {
                    Y.node = aj;
                    Y.nextPos = Y.pos || 0;
                    Y.length = (Y.node.nodeValue || "").length;
                    Y.pos = Y.nextPos - Y.length;
                    if (ak && (Y.result = ak.call(Y)) != null) {
                        break
                    }
                }
            }
            if (!aj) {
                ah()
            }
            return Y
        };
        var ai = function ai() {
            return X.currentNode
        };
        return {
            walk: af,
            walkBack: ag,
            getCurrentNode: ai
        }
    };
    return {
        load: J,
        ALIGN_START: D,
        ALIGN_END: V,
        getPatterns: j,
        getMarkSegment: m,
        applyMark: e,
        rebindMark: g,
        removeMark: M,
        globalGetCorrectionMarkNodes: S,
        getCorrectionMarkNodes: y,
        globalRemoveCorrectionMarks: T,
        addCorrectionMarksWorker: b,
        doReplace: G,
        getNextInTree: c,
        getPreviousInTree: I,
        rootToLeafPos: F,
        leafToRootPos: k,
        alignLeafPos: E,
        getTreeWidth: v,
        rootToStartAndEndNodes: L,
        isBlockNode: N,
        isMarkNode: h,
        isContextualMarkNode: a,
        isSpellingContextualMarkNode: r,
        isNonContextualMarkNode: C,
        getContextMenuEventMarkNode: l,
        getBlockContainer: s,
        getRootFromNode: K,
        isAttached: f,
        climbTree: x,
        getPhraseMarkGuidsFromMistake: U,
        logState: A,
        getDOMhtml: R,
        duplicateNode: P,
        isTextInputEnabled: B,
        getTreeWalker: w
    }
})();
GS_WEB_WIDGET.bookmark = (function() {
    var c = null,
        j = null,
        d = null,
        f = null,
        h = null;
    var i = function() {
        c = GS_WEB_WIDGET.namespace("defs");
        j = GS_WEB_WIDGET.namespace("logger");
        d = GS_WEB_WIDGET.namespace("browser");
        f = GS_WEB_WIDGET.namespace("staticUtils");
        h = GS_WEB_WIDGET.namespace("utils")
    };
    var b = function(o) {
        var m = h.getNodeType(o),
            n = null,
            r = "",
            q = 0,
            k = 0;
        var p = function() {
            var s = function(y) {
                var z, w = null,
                    v, u, x = null;
                if (typeof y.selectionStart === "number" && typeof y.selectionEnd === "number") {
                    q = y.selectionStart;
                    k = y.selectionEnd;
                    r = y.value.substring(y.selectionStart, y.selectionEnd)
                } else {
                    w = document.selection.createRange();
                    if (w && w.parentElement() === y) {
                        n = w;
                        r = n.text;
                        u = y.value.length;
                        z = y.value.replace(/\r\n/g, "\n");
                        v = y.createTextRange();
                        v.moveToBookmark(w.getBookmark());
                        x = y.createTextRange();
                        x.collapse(false);
                        if (v.compareEndPoints("StartToEnd", x) > -1) {
                            q = k = u
                        } else {
                            q = -v.moveStart("character", -u);
                            q += z.slice(0, q).split("\n").length - 1;
                            if (v.compareEndPoints("EndToEnd", x) > -1) {
                                k = u
                            } else {
                                k = -v.moveEnd("character", -u);
                                k += z.slice(0, k).split("\n").length - 1
                            }
                        }
                    }
                }
                if (w && w.detach) {
                    w.detach()
                }
                if (x && x.detach) {
                    x.detach()
                }
            };
            var t = function(v) {
                var x = h.getOwnerWindow(v);
                if (x && x.getSelection) {
                    n = x.getSelection()
                } else {
                    var w = h.getDocumentContext(v);
                    if (w && w.getSelection) {
                        var u = w.getSelection();
                        if (u.getRangeAt) {
                            n = u
                        } else {
                            n = window.getSelection()
                        }
                    } else {
                        if (w && w.selection) {
                            n = w.selection
                        }
                    }
                }
            };
            if (m === c.INPUT_CONTROL || m === c.TEXTAREA_CONTROL) {
                s(o)
            } else {
                t(o)
            }
        }();
        var l = function() {
            if (!!n && !!n.getRangeAt) {
                return !n.rangeCount || n.rangeCount === 1 && n.getRangeAt(0).collapsed
            } else {
                return r.length === 0
            }
        };
        return {
            isCollapsed: l,
            domSelection: n,
            text: r,
            start: q,
            end: k
        }
    };
    var g = function(m, p, k) {
        var l = h.getNodeType(m);
        var o = function() {
            var v = function(x) {
                if (j.loggerOn()) {
                    j.logDebug("selectRange, endpoint: " + JSON.stringify(x ? {
                        nodeName: (x.node || {}).nodeName,
                        offset: x.offset
                    } : null))
                }
            };
            v(p);
            v(k);
            if (p && !k) {
                k = p
            }
            if (!p || !k) {
                if (j.loggerOn()) {
                    j.logWarning("start range or end range are not set --> quiting range selection")
                }
                return
            }
            var s = h.getDocumentContext(m),
                t;
            if (d.isIeBefore9) {
                if (j.loggerOn()) {
                    j.logAssert(p.node == k.node)
                }
                if (j.loggerOn()) {
                    j.logAssert(p.offset >= k.offset)
                }
                t = s.body.createTextRange();
                try {
                    t.moveToElementText(p.node)
                } catch (w) {}
                t.collapse(true);
                t.move("character", p.offset);
                if (k.offset != p.offset) {
                    t.moveEnd("character", k.offset - p.offset)
                }
                t.select()
            } else {
                var u = b(m).domSelection;
                if (j.loggerOn()) {
                    j.logAssert(u.addRange)
                }
                t = s.createRange();
                t.setStart(p.node, p.offset);
                t.setEnd(k.node, k.offset);
                var r = function(z, y) {
                    var x = function() {
                        try {
                            return z.startContainer === y.startContainer && z.startOffset === y.startOffset && z.endContainer === y.endContainer && z.endOffset === y.endOffset
                        } catch (A) {
                            return false
                        }
                    };
                    return z && y && x()
                };
                if (u.rangeCount == 1) {
                    var q = u.getRangeAt(0);
                    if (r(q, t)) {
                        if (t && t.detach) {
                            t.detach()
                        }
                        t = null
                    }
                }
                if (t) {
                    u.removeAllRanges();
                    u.addRange(t)
                }
            }
            if (t && t.detach) {
                t.detach()
            }
        };
        var n = function() {
            var r = function(s) {
                if (j.loggerOn()) {
                    j.logDebug("selectRange, endpoint: " + JSON.stringify(s ? {
                        nodeName: m.nodeName,
                        offset: s
                    } : null))
                }
            };
            r(p);
            r(k);
            if ((!!p || p === 0) && !k && k !== 0) {
                k = p
            }
            if ((!p && p !== 0) || (!k && k !== 0)) {
                if (j.loggerOn()) {
                    j.logWarning("start range or end range are not set --> quiting range selection")
                }
                return
            }
            if ("selectionStart" in m) {
                m.selectionStart = p;
                m.selectionEnd = k
            } else {
                var q = m.createTextRange();
                q.moveStart("character", p);
                q.collapse();
                q.moveEnd("character", k - p);
                q.select()
            }
            if (q && q.detach) {
                q.detach()
            }
        };
        if (l === c.INPUT_CONTROL || l === c.TEXTAREA_CONTROL) {
            n()
        } else {
            o()
        }
    };
    var a = function(w) {
        var l = h.getNodeType(w),
            n = null,
            m = null,
            v = null,
            D = h.getDocumentContext(w);
        if (l === c.INPUT_CONTROL || l === c.TEXTAREA_CONTROL) {
            var C = b(w);
            n = C.start;
            m = C.end
        } else {
            if (d.isIeBefore9) {
                try {
                    var C = D.selection;
                    var A = C.createRange();
                    var o = A.parentElement();
                    if (j.loggerOn()) {
                        j.logDebug("getBookmark/IE, original parentElement: " + JSON.stringify(o ? {
                            nodeName: o.nodeName,
                            textContent: o.textContent
                        } : null))
                    }
                    o = f.getBlockContainer(o);
                    if (j.loggerOn()) {
                        j.logDebug("getBookmark/IE, block container parentElement: " + JSON.stringify(o ? {
                            nodeName: o.nodeName,
                            textContent: o.textContent
                        } : null))
                    }
                    if (o) {
                        var s = A.duplicate();
                        var z = A.duplicate();
                        s.collapse(true);
                        z.collapse(false);
                        var r = D.body.createTextRange();
                        r.moveToElementText(o);
                        r.collapse(true);
                        var x = 0;
                        var p = 0;
                        if (o.hasChildNodes()) {
                            while (s.compareEndPoints("StartToStart", r) > 0) {
                                s.move("character", -1);
                                x++
                            }
                            while (z.compareEndPoints("StartToStart", r) > 0) {
                                z.move("character", -1);
                                p++
                            }
                        }
                        n = {
                            root: o,
                            rootOffset: x
                        };
                        m = {
                            root: o,
                            rootOffset: p
                        };

                        function B(E) {
                            if (j.loggerOn()) {
                                j.logDebug("getBookmark, endpoint: " + JSON.stringify(E ? {
                                    rootName: (E.root || {}).nodeName,
                                    rootValue: (E.root || {}).nodeValue,
                                    rootOffset: E.rootOffset
                                } : null))
                            }
                        }
                        B(n);
                        B(m)
                    }
                } catch (y) {}
            } else {
                function k(J) {
                    if (J) {
                        var I = h.isChild(w, J.node, true);
                        if (j.loggerOn()) {
                            j.logDebug("getBookmark, getBookmarkEndpoint, endpoint: " + JSON.stringify({
                                nodeName: (J.node || {}).nodeName,
                                nodeValue: (J.node || {}).nodeValue,
                                offset: J.offset,
                                insideControl: I
                            }))
                        }
                        if (I) {
                            function H() {
                                if (this.node.nodeType == c.NODE_TYPES.ELEMENT_NODE && f.isBlockNode(this.node)) {
                                    this.blockNode = this.node;
                                    this.blockPos = this.pos
                                }
                                if (J.node.nodeType == c.NODE_TYPES.TEXT_NODE) {
                                    if (this.node == J.node) {
                                        return {
                                            root: this.root,
                                            blockNode: this.blockNode,
                                            rootOffset: this.pos + J.offset
                                        }
                                    }
                                } else {
                                    if (J.offset < J.node.childNodes.length) {
                                        if (this.node == J.node.childNodes[J.offset]) {
                                            return {
                                                root: this.root,
                                                blockNode: this.blockNode,
                                                rootOffset: this.pos,
                                                beforeBlock: this.node == this.blockNode
                                            }
                                        }
                                    } else {
                                        if (J.node != w && this.node.previousSibling == J.node) {
                                            return {
                                                root: this.root,
                                                blockNode: this.blockNode,
                                                rootOffset: this.pos,
                                                beforeBlock: true
                                            }
                                        }
                                    }
                                }
                                return null
                            }
                            var K;
                            var F = h.getAncestorOrSelf(J.node, function(L) {
                                return L == w || f.isBlockNode(L)
                            });
                            if (F) {
                                var E = d.getNodeFilter();
                                var G = f.getTreeWalker(F, E.SHOW_TEXT | E.SHOW_ELEMENT, true).walk(H);
                                K = G.result || {
                                    root: F,
                                    blockNode: G.blockNode,
                                    rootOffset: G.nextPos
                                };
                                K.blockOffset = K.rootOffset - (G.blockPos || 0)
                            } else {
                                if (j.loggerOn()) {
                                    j.logError("getBookmark, getBookmarkEndpoint, could not find block node")
                                }
                            }
                            if (j.loggerOn()) {
                                j.logDebug("getBookmark, getBookmarkEndpoint, mark: " + JSON.stringify(K ? {
                                    rootName: (K.root || {}).nodeName,
                                    rootValue: (K.root || {}).nodeValue,
                                    rootOffset: K.rootOffset,
                                    blockName: (K.blockNode || {}).nodeName,
                                    blockValue: (K.blockNode || {}).nodeValue,
                                    beforeBlock: K.beforeBlock,
                                    blockOffset: K.blockOffset
                                } : null))
                            }
                            return K
                        }
                    }
                    if (j.loggerOn()) {
                        j.logDebug("getBookmark, getBookmarkEndpoint = null")
                    }
                    return null
                }
                try {
                    var C = b(w).domSelection;
                    if (j.loggerOn()) {
                        j.logAssert(C.getRangeAt)
                    }
                    var u = (C && C.rangeCount != 0) ? C.getRangeAt(0) : null;
                    var t = u ? {
                        node: u.startContainer,
                        offset: u.startOffset
                    } : null;
                    var q = u ? {
                        node: u.endContainer,
                        offset: u.endOffset
                    } : null;
                    if (u && u.detach) {
                        u.detach()
                    }
                    n = k(t);
                    if (t && q && q.node == t.node && q.offset == t.offset) {
                        m = n
                    } else {
                        m = k(q)
                    }
                } catch (y) {
                    if (j.loggerOn()) {
                        j.info("failed to obtain range: " + y.message)
                    }
                    n = m = null
                }
            }
        }
        return e(w, l, n, m, v, D)
    };
    var e = function(x, v, l, q, m, y) {
        var w = function() {
            return l
        };
        var t = function(A) {
            l = A
        };
        var z = function() {
            return q
        };
        var s = function(A) {
            q = A
        };
        var o = function() {
            if (d.isIeBefore9) {
                function B(E) {
                    if (j.loggerOn()) {
                        j.logDebug("moveToBookmark/IE, endpoint: " + JSON.stringify(E ? {
                            rootNodeName: (E.root || {}).nodeName,
                            rootOffset: E.rootOffset,
                            length: E.length
                        } : null))
                    }
                }
                B(l);
                B(q);
                if (!!l && !!q) {
                    g(x, {
                        node: l.root,
                        offset: l.rootOffset
                    }, {
                        node: q.root,
                        offset: q.rootOffset
                    })
                } else {
                    if (j.loggerOn()) {
                        j.logAssert(!l && !q)
                    }
                }
            } else {
                function A(J) {
                    if (j.loggerOn()) {
                        j.logDebug("moveToBookmark, translateBookmark, bookmark: " + JSON.stringify(J ? {
                            rootName: (J.root || {}).nodeName,
                            rootValue: (J.root || {}).nodeValue,
                            rootOffset: J.rootOffset,
                            blockName: (J.blockNode || {}).nodeName,
                            blockValue: (J.blockNode || {}).nodeValue,
                            beforeBlock: J.beforeBlock,
                            blockOffset: J.blockOffset
                        } : null))
                    }

                    function I() {
                        if (this.node.parentNode == this.root) {
                            this.branch = this.branch != undefined ? this.branch + 1 : 0
                        }
                        if (this.node == J.blockNode) {
                            this.block = {
                                node: this.node,
                                branch: this.branch || 0
                            }
                        }
                        if (this.block) {
                            if (J.beforeBlock && this.node == this.block.node) {
                                return {
                                    node: this.root,
                                    offset: this.block.branch
                                }
                            }
                            if (this.node.nodeType == c.NODE_TYPES.TEXT_NODE && this.nextPos >= J.rootOffset) {
                                return {
                                    node: this.node,
                                    offset: J.rootOffset - this.pos
                                }
                            }
                        }
                        return null
                    }

                    function F(M) {
                        var K = M && M.root || null,
                            L = M && M.blockNode || null;
                        return K && (!L || K === L || h.isNodeInContainer(K, L))
                    }
                    if (J && F(J)) {
                        var E = d.getNodeFilter();
                        var H = f.getTreeWalker(J.root, E.SHOW_TEXT | E.SHOW_ELEMENT, true).walk(I);
                        var G = H.result || {
                            node: J.root,
                            offset: J.root.childNodes.length
                        };
                        if (j.loggerOn()) {
                            j.logDebug("moveToBookmark, translateBookmark, rangeToSet: " + JSON.stringify(G ? {
                                nodeName: G.node.nodeName,
                                nodeValue: G.node.nodeValue,
                                offset: G.offset
                            } : null))
                        }
                        return G
                    } else {
                        if (j.loggerOn()) {
                            j.logDebug("moveToBookmark, translateBookmark, rangeToSet = null")
                        }
                        return null
                    }
                }
                var D = A(l);
                var C;
                if (l && q && l.root == q.root && l.rootOffset == q.rootOffset && l.blockNode == q.blockNode && l.beforeBlock == q.beforeBlock) {
                    C = D ? $.extend({}, D) : null
                } else {
                    C = A(q)
                }
                if (D) {
                    if (j.loggerOn()) {
                        j.logAssert(C)
                    }
                    g(x, D, C)
                }
                if (c.DEBUG_BOOKMARKS) {
                    if (j.loggerOn()) {
                        j.logInfo("[set] bookmark id = " + m)
                    }
                }
            }
        };
        var p = function(K) {
            function B(P) {
                var O = P.getText(),
                    N = O.search(f.getPatterns().tagPhrases.pattern);
                return N != -1 ? N : O.length
            }
            var L = {
                start: null,
                end: null
            };
            if (v === c.INPUT_CONTROL || v === c.TEXTAREA_CONTROL) {
                var C = x.value.length;
                for (var G = 0; G < K.length; G++) {
                    var E = K[G],
                        H = E.getPos(),
                        A = B(E),
                        D = (H + A),
                        I = l - H,
                        J = D - q;
                    if (!L.start && l <= D && I >= 0) {
                        L.start = {
                            uiPhrase: E,
                            offset: I
                        }
                    }
                    if (!L.end && J >= 0) {
                        L.end = {
                            uiPhrase: E,
                            offset: I
                        }
                    }
                }
            } else {
                function M(O) {
                    var N = O;
                    while (N !== null && !f.isBlockNode(N)) {
                        N = f.getNextInTree(x, N)
                    }
                    return N
                }

                function F(V) {
                    if (!V) {
                        return null
                    }
                    var S = f.leafToRootPos(x, {
                        node: V.root,
                        offset: V.rootOffset
                    }, f.ALIGN_START);
                    for (var R = 0; R < K.length; R++) {
                        var P = K[R];
                        var T = P.getPos();
                        var N = B(P);
                        var Q = S - T;

                        function O() {
                            if (Q >= 0 && Q <= N) {
                                if (Q === 0 || Q === N) {
                                    function X() {
                                        if (V.blockNode && V.blockOffset === 0) {
                                            function Y() {
                                                var aa = (f.rootToLeafPos(x, T, f.ALIGN_START) || {}).node;
                                                return M(aa)
                                            }
                                            var Z = Y();
                                            if (V.beforeBlock && h.isChild(Z, V.blockNode, true)) {
                                                return Q === N
                                            } else {
                                                return Q === 0
                                            }
                                        } else {
                                            return Q !== 0
                                        }
                                    }
                                    if (X()) {
                                        var W = f.rootToLeafPos(x, T, f.ALIGN_START);
                                        return h.isChild(V.root, W.node, true)
                                    } else {
                                        return false
                                    }
                                } else {
                                    return true
                                }
                            } else {
                                return false
                            }
                        }
                        var U = O();
                        if (j.loggerOn()) {
                            j.logDebug("locateEndpoint: " + JSON.stringify({
                                isInPhrase: U,
                                beforeBlock: V.beforeBlock,
                                blockOffset: V.blockOffset,
                                offset: Q,
                                phraseLength: N,
                                phraseText: P.getText(),
                                phraseTextLength: P.getText().length
                            }))
                        }
                        if (U) {
                            return {
                                uiPhrase: P,
                                offset: Q
                            }
                        }
                    }
                    return null
                }
                L.start = F(l);
                if (q && l && q.root == l.root && q.rootOffset == l.rootOffset && q.blockNode == l.blockNode && q.blockOffset == l.blockOffset && q.beforeBlock == l.beforeBlock) {
                    L.end = L.start ? $.extend({}, L.start) : null
                } else {
                    L.end = F(q)
                }
            }
            return L
        };
        var r = function() {
            function A(G) {
                if (G) {
                    if (G == x) {
                        return "root"
                    } else {
                        var F = 0;
                        var E = d.getNodeFilter();
                        return f.getTreeWalker(x, E.SHOW_TEXT | E.SHOW_ELEMENT).walk(function() {
                            if (this.node == G) {
                                return {
                                    nodeName: this.node.nodeName,
                                    count: F
                                }
                            } else {
                                if (this.node.nodeName == G.nodeName) {
                                    F++
                                }
                            }
                        }).result
                    }
                }
            }
            var D = $.extend({}, l),
                C = $.extend({}, q),
                B = u();
            D.root = A(D.root);
            C.blockNode = A(D.blockNode);
            if (D.root == C.root) {
                C.root = D.root
            } else {
                C.root = A(C.root)
            }
            if (D.blockNode == C.blockNode) {
                C.blockNode = D.blockNode
            } else {
                C.blockNode = A(C.blockNode)
            }
            B.setStart(D);
            B.setStart(C);
            return B
        };
        var k = function() {
            function D(G) {
                if (G) {
                    if (G == "root") {
                        return x
                    } else {
                        var F = 0;
                        var E = d.getNodeFilter();
                        return f.getTreeWalker(x, E.SHOW_TEXT | E.SHOW_ELEMENT).walk(function() {
                            if (this.node.nodeName == G.nodeName) {
                                if (F == G.count) {
                                    return this.node
                                } else {
                                    F++
                                }
                            }
                        }).result
                    }
                }
            }
            var C = $.extend({}, l),
                A = $.extend({}, q),
                B = u();
            C.root = D(C.root);
            C.blockNode = D(C.blockNode);
            if (C.root == A.root) {
                A.root = C.root
            } else {
                A.root = D(A.root)
            }
            if (C.blockNode == A.blockNode) {
                A.blockNode = C.blockNode
            } else {
                A.blockNode = D(A.blockNode)
            }
            B.setStart(C);
            B.setEnd(A);
            return B
        };
        var n = function() {
            var E = f.leafToRootPos(x, {
                    node: l.root,
                    offset: 0
                }) + l.rootOffset,
                D = f.leafToRootPos(x, {
                    node: q.root,
                    offset: 0
                }) + q.rootOffset,
                B = false;
            if (isNaN(E) || isNaN(D) || E === D) {
                return false
            }

            function G(J) {
                var H = false;
                if (J) {
                    var I = $(J);
                    H = I.hasClass(c.MARK_CONTEXT_CLASS) || I.hasClass(c.MARK_NOCONTEXT_CLASS)
                }
                return H
            }

            function F(I, H) {
                return I && I.nextPos <= H
            }

            function A(I, H) {
                return I && I.pos >= H
            }
            var C = d.getNodeFilter();
            f.getTreeWalker(x, C.SHOW_TEXT | C.SHOW_ELEMENT, true).walk(function() {
                if (!F(this, E) && !(A(this, D)) && G(this.node.parentNode)) {
                    B = true;
                    return B
                }
                return null
            });
            return B
        };
        var u = function() {
            return e(x, v, l, q, m, y)
        };
        return {
            move: o,
            locateInPhrases: p,
            encode: r,
            decode: k,
            isContainingGingerTags: n,
            getStart: w,
            setStart: t,
            getEnd: z,
            setEnd: s,
            clone: u
        }
    };
    return {
        load: i,
        getSelection: b,
        selectRange: g,
        getBookmark: a
    }
})();
"use strict";
GS_WEB_WIDGET.API = (function() {
    var d = null,
        k = null,
        e = null,
        i = null,
        j = null,
        c = null,
        g = null;
    var h = function() {
        d = GS_WEB_WIDGET.namespace("defs");
        k = GS_WEB_WIDGET.namespace("appModel");
        i = GS_WEB_WIDGET.namespace("logger");
        e = GS_WEB_WIDGET.namespace("trackingManager");
        j = GS_WEB_WIDGET.namespace("protocol");
        c = GS_WEB_WIDGET.namespace("phraseManager");
        g = GS_WEB_WIDGET.namespace("learningManager")
    };
    var f = 0;
    var a = function(m, n, p) {
        f++;
        var o = m.getTextToCheck();
        m.setPending(true).setSpellingOnly(n);
        j.service.gingerTheText(o, n, function(t) {
            function q(B) {
                var C = B.LrnFrgOrigIndxs,
                    D = null,
                    A = null;
                if (C.length > 0) {
                    D = C[0].From;
                    A = C[0].To;
                    $.each(C, function(F, E) {
                        D = Math.min(D, E.From);
                        A = Math.max(A, E.To)
                    })
                }
                return {
                    start: D,
                    end: A
                }
            }

            function u() {
                var D = m.getCleanText().length,
                    A = [],
                    C = m.getCorrectionManager();
                for (var B = 0; B < D; B++) {
                    A.push(null)
                }
                C.iterateItems(function(I) {
                    var H = I.getStart(),
                        E = H + I.getLength() - 1,
                        G = I.getCorrectionId();
                    for (var F = H; F <= E; F++) {
                        A[F] = G
                    }
                });
                C.iterateItems(function(L) {
                    var K = L.getLearning(),
                        H = [];
                    if (K.fragment) {
                        var E = L.getCorrectionId(),
                            G = L.getStart(),
                            O = L.getLength() - G + 1;
                        var P = K.from,
                            Q = G - P,
                            M = Q + K.fragment.length - 1;
                        var F = Math.min(Q, L.getFragmentStart()),
                            I = Math.max(M, L.getFragmentEnd());
                        for (var J = F; J <= I; J++) {
                            var N = A[J];
                            if (N && N !== E && (H.length === 0 || N !== H[H.length - 1])) {
                                H.push(N)
                            }
                        }
                    }
                    K.otherCorrectionsInFragment = H.length
                })
            }
            f--;
            m.setPending(false);
            var r = t.Corrections || null,
                y = t.Sentences,
                z = y && y.length > 0 ? y[0].IsEnglish : true;
            if (k.getDebugToConsole()) {
                if (typeof window.console !== "undefined") {
                    console.log("gingerTheText - text:'" + o + "', " + t.trt + " msec")
                }
            }
            var w = r ? r.length : 0;
            e.reportGingerTheTextReply({
                spellingOnly: n,
                rt: t && t.trt || 0,
                corrections: w
            });
            if (r !== null) {
                var x = m.getCorrectionManager(),
                    s = [];
                x.deleteAllItems();
                $.each(r, function(G, I) {
                    var H = $.map(I.Suggestions, function(L) {
                        return {
                            suggestion: L.Text,
                            definition: L.Example ? L.Example : L.Definition ? L.Definition : null,
                            learningCategory: L.LrnCatId || 0
                        }
                    });
                    H.splice(d.MAX_VISIBLE_SUGGESTIONS);
                    var J = I.From || 0,
                        K = I.To || 0,
                        D = K - J + 1;
                    var F = o.substr(J, D);
                    var B = c.createCorrectionId(F, G);
                    var C = I.UXFrgFrom || 0,
                        E = I.UXFrgTo || 0;
                    var A = q(I);
                    x.getOrCreateItem({
                        MistakeText: F,
                        Index: G,
                        Start: J,
                        Length: D,
                        Suggestions: H,
                        Type: I.Type,
                        Confidence: I.Confidence,
                        ShouldReplace: I.ShouldReplace,
                        CorrectionId: B,
                        FragmentStart: C,
                        FragmentEnd: E,
                        Learning: {
                            fragment: I.LrnFrg || null,
                            from: A.start,
                            to: A.end
                        }
                    });
                    s.push({
                        topic_id: (H.length > 0 ? (H[0].learningCategory || 0) : 0)
                    })
                });
                u();
                g.reportGingerTheText(s);
                p(z)
            } else {
                var v = t.hasOwnProperty("Message") ? t.Message : "";
                if (i.loggerOn()) {
                    i.logError("gingerTheText. server message: " + v)
                }
            }
        })
    };
    var b = function(n, m, o) {
        j.service.isSpelledCorrectly(n, m, function(q) {
            var r = q.hasOwnProperty("Message") ? q.Message : null;
            if (r) {
                if (i.loggerOn()) {
                    i.logError("isSpelledCorrectly failed. server message: " + r)
                }
            } else {
                var p = q.hasOwnProperty("IsSpelledCorrectlyResult") ? q.IsSpelledCorrectlyResult : q.hasOwnProperty("IsUserSpelledCorrectlyResult") ? q.IsUserSpelledCorrectlyResult : null,
                    s = p && p.hasOwnProperty("IsCorrect") && !p.IsCorrect ? false : true;
                if (k.getDebugToConsole()) {
                    if (typeof window.console !== "undefined") {
                        console.log("isSpelledCorrectly - text:'" + n + "', " + q.trt + " msec")
                    }
                }
                e.reportIsSpelledCorrectlyReply({
                    token: n,
                    firstInPhrase: m,
                    rt: q && q.trt || 0
                });
                o(s)
            }
        })
    };
    var l = function() {
        return f > 0
    };
    return {
        load: h,
        callGingerTheText: a,
        callIsSpelledCorrectly: b,
        hasPendingCalls: l
    }
})();
GS_WEB_WIDGET.textInputManager = (function() {
    var a = null,
        j = null,
        w = null,
        x = null,
        y = null,
        u = null,
        b = null,
        l = null;
    var h = 0,
        z, n, v = 1,
        s = [],
        t = 400,
        d = 1500,
        e = 1500,
        p = 200;
    var c = false,
        m = false,
        i = true,
        f = false,
        o = false,
        g = false;
    var k = function() {
        a = GS_WEB_WIDGET.namespace("defs");
        b = GS_WEB_WIDGET.namespace("context");
        l = GS_WEB_WIDGET.namespace("appModel");
        j = GS_WEB_WIDGET.namespace("bookmark");
        w = GS_WEB_WIDGET.namespace("browser");
        x = GS_WEB_WIDGET.namespace("logger");
        y = GS_WEB_WIDGET.namespace("staticUtils");
        u = GS_WEB_WIDGET.namespace("utils");
        u.display = GS_WEB_WIDGET.namespace("utils.display");
        $(b).bind(b.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(A, B) {
            o = l.isMarkHighlight();
            f = o && g
        });
        g = w.isCanvasSupported();
        m = true;
        r()
    };
    var r = function() {
        if (i && m && c) {
            switch (w.getLayout()) {
                case a.BROWSERS.WEBKIT:
                    var A = function() {
                        if (!z) {
                            z = u.getZoom();
                            n = z
                        } else {
                            n = u.getZoom()
                        }
                        if (n !== z) {
                            v = n / z;
                            for (var B = 0, C = s.length; B < C; B++) {
                                s[B].updateZoom()
                            }
                            z = n;
                            v = 1
                        }
                    };
                    window.setInterval(A, e);
                    break
            }
            i = false
        }
    };
    $(function() {
        c = true;
        r()
    });
    var q = function(N) {
        var D = u.getDocumentContext(N.getElement()),
            T = $(D.body, D),
            M = T[0],
            ad = null,
            K = N.getElement(),
            ae = $(N.getElement(), D),
            ah = h,
            ag = a.TEXT_INPUT_WRAPPER_CLASS + ah,
            S = a.TEXT_INPUT_CANVAS_CLASS + ah,
            H = $("<div id='" + ag + "' class='" + a.TEXT_INPUT_WRAPPER_CLASS + "'><div class='" + a.TEXT_INPUT_CONTOUR_CLASS + "'><div class='" + a.TEXT_INPUT_RICHTEXT_CLASS + "'></div></div></div>"),
            L = H[0],
            W = H.find("." + a.TEXT_INPUT_CONTOUR_CLASS),
            af = W[0],
            Q = W.find("." + a.TEXT_INPUT_RICHTEXT_CLASS),
            G = Q[0],
            I = $("<canvas id='" + S + "' class='" + a.TEXT_INPUT_CANVAS_CLASS + "'></canvas>"),
            F = I[0],
            ac = "",
            aj, aa, R = !!K.placeholder ? K.placeholder : "";
        h++;
        switch (N.getType()) {
            case a.INPUT_CONTROL:
                H.addClass(a.INPUT_WRAPPER_CLASS);
                break;
            case a.TEXTAREA_CONTROL:
                H.addClass(a.TEXTAREA_WRAPPER_CLASS);
                break
        }
        var C = function(ak) {
            return !!ak && !!ak.tagName && ak.tagName.toUpperCase() === "GBREAK"
        };
        var J = function() {
            var ak = Q.text();
            if (C(G.lastChild)) {
                ak = ak.substring(0, ak.length - 1)
            }
            return ak
        };
        var X = function() {
            var aw = ae.val(),
                ay, aA = null,
                au, al, ao, aq, az, ax, ar = "<gbreak> </gbreak>",
                am = G.lastChild;
            var ap = function(aF, aD) {
                var aE = aF.length,
                    aC = aD.length;
                return aF.lastIndexOf(aD) === (aE - aC)
            };
            var aB = function(aH, aJ) {
                var aG = aH.length,
                    aF = aJ.length,
                    aC = 0,
                    aI, aD, aE;
                while (aC < aF && aC < aG && aH.charAt(aC) === aJ.charAt(aC)) {
                    aC++
                }
                aI = aC;
                aC = 0;
                while (aI < aF - aC && aI < aG - aC && aH.charAt(aG - aC - 1) === aJ.charAt(aF - aC - 1)) {
                    aC++
                }
                aD = aG - aC;
                aE = aF - aC;
                return {
                    change: aH.substring(aI, aD),
                    start: aI,
                    end: aE
                }
            };
            var at = function(aD, aF) {
                var aC = $(aD),
                    aE = aC.text();
                return {
                    $node: aC,
                    text: aE,
                    start: aF,
                    end: aF + aE.length
                }
            };
            var ak = function() {
                var aF, aD, aC = 0,
                    aE = false;
                while (!aE && aC < ax) {
                    aF = az[aC];
                    if (!C(aF)) {
                        aD = at(aF, !!aD ? aD.end : 0);
                        if (aD.start <= al && al <= aD.end) {
                            aq = aD.text.substring(0, al - aD.start) + aq;
                            aq += aD.text.substring(al - aD.start, aD.end - aD.start);
                            if (aF.nodeType === a.NODE_TYPES.TEXT_NODE) {
                                aF.data = aq
                            } else {
                                aF.innerHTML = aq
                            }
                            aE = true
                        }
                    }
                    aC++
                }
            };
            var an = function() {
                var aG, aF, aE = 0,
                    aH = null,
                    aC = [];
                var aD = function(aJ, aL, aI, aK) {
                    return (aJ <= aI && aI < aL) || (aI <= aJ && aJ < aK)
                };
                while (aE < ax && (!aF || aF.start <= ao)) {
                    aG = az[aE];
                    if (!C(aG)) {
                        aF = at(aG, !!aF ? aF.end : 0);
                        if (aF.start <= al && al < aF.end) {
                            aq = aF.text.substring(0, al - aF.start) + aq
                        }
                        if (aF.start <= ao && ao < aF.end) {
                            aq += aF.text.substring(ao - aF.start, aF.end - aF.start)
                        }
                        if (aD(al, ao, aF.start, aF.end)) {
                            if (!aH) {
                                aH = aG
                            } else {
                                aC.push(aG)
                            }
                        }
                    }
                    aE++
                }
                if (aH.nodeType === a.NODE_TYPES.TEXT_NODE) {
                    aH.data = aq
                } else {
                    aH.innerHTML = aq
                }
                for (aE = 0, length = aC.length; aE < length; aE++) {
                    G.removeChild(aC[aE])
                }
            };
            var av = function() {
                if (!!am && C(am) && am !== G.lastChild) {
                    am.parentNode.removeChild(am)
                }
                if (ap(Q.text(), "\n")) {
                    Q.append(ar)
                }
            };
            ay = J();
            if (!aj || !aj.isDisplayed || aw === "" || aw === R) {
                if (ay !== "") {
                    Q.text("")
                }
            } else {
                if (aw !== ay) {
                    aA = aB(aw, ay);
                    al = aA.start;
                    ao = aA.end;
                    aq = aA.change;
                    au = !(al === ao);
                    az = G.childNodes;
                    ax = az.length;
                    if (ax === 0) {
                        G.appendChild(D.createTextNode(aq))
                    } else {
                        if (!au) {
                            ak()
                        } else {
                            an()
                        }
                    }
                    av()
                }
            }
        };
        var E = function() {
            ae.unbindAttrChange(ai.method);
            var al = ae.getStyleCollections(),
                an, ak, am = ["color", "-webkit-text-fill-color", "margin", "display", "visibility", "z-index", "overflow", "overflow-x", "overflow-y", "left", "right", "top", "bottom", "position", "width", "height", "min-width", "min-height", "max-width", "max-height", "background", "line-height", "white-space", "resize", "-webkit-appearance", "opacity", "outline-color", "outline-style", "outline-width"];
            if (!al.all.position || al.all.position === "static") {
                ae.css("position", "relative")
            }
            W.setStyleCollection(al.padding, false);
            W.setStyleCollection(al.border, false);
            W.css("border-color", "transparent");
            if (al.position.position === "absolute" || al.position.position === "fixed") {
                W.setStyleCollection(al.margin, false)
            }
            W.setStyleCollection(al.outline, false);
            W.setStyleCollection(al.boxSizing, false);
            switch (N.getType()) {
                case a.INPUT_CONTROL:
                    W.css("overflow", "hidden");
                    break;
                case a.TEXTAREA_CONTROL:
                    W.setStyleCollection(al.overflow, false);
                    break
            }
            W.setStyleCollection(al.background, false, ["background-image"]);
            W.setStyleCollection(al.font, false);
            if (w.isIe) {
                ae.setStyleCollection(al.font, false);
                ae.css({
                    "background-color": "transparent"
                })
            }
            if (w.isWebkit) {
                ae.css("font-size", al.font["font-size"])
            }
            Q.setStyleCollection(al.rest, true, am);
            if (w.isIeBefore9) {
                Q.css("overflow-y", "hidden");
                Q.css("overflow-x", "hidden");
                Q.css("white-space", "normal")
            }
            an = al.rest["line-height"];
            if (w.isWebkit) {
                ak = parseFloat(an);
                if (!isNaN(ak) && an.lastIndexOf("px") !== -1) {
                    ae.css("line-height", (ak) + "px");
                    Q.css("line-height", (ak) + "px")
                } else {
                    Q.css("line-height", an)
                }
            } else {
                Q.css("line-height", an)
            }
            ae.bindAttrChange(ai.method)
        };
        var P = function() {
            ae.unbindAttrChange(ai.method);
            var at = 0,
                an = false,
                ak = u.display.isNodeDisplayed(K, false, false, false),
                aq, ap = u.display.getBodyOffsetInDocument(M),
                ao = u.display.getOffsetInBody(K, ap),
                au = {
                    left: ao.left,
                    top: ao.top,
                    width: ae.outerWidth(),
                    height: ae.outerHeight()
                };
            var al = function(aw, az) {
                var ay = null,
                    av = null;
                try {
                    ay = parseInt(aw.css(az))
                } catch (ax) {}
                if (!ay) {
                    ay = aw.getStyleProperty(az);
                    av = parseInt(ay);
                    ay = isNaN(av) ? ay : av
                }
                return ay
            };
            var am = function(av) {
                var aw = parseInt(al(av, "z-index"));
                if (!isNaN(aw)) {
                    if (aw >= a.MAX_Z_INDEX) {
                        aw = a.MAX_Z_INDEX - 1;
                        av.css({
                            "z-index": aw
                        })
                    }
                    at = aw
                }
            };
            var ar = function(av) {
                an = an || (av === "fixed")
            };
            aq = al(ae, "position");
            am(ae);
            ar(aq);
            y.climbTree(K, function(aB) {
                if (aB.node !== M && aB.node !== D) {
                    var aA = $(aB.node),
                        ax = al(aA, "position"),
                        aw = aA[0];
                    var aC = function() {
                        am(aA)
                    };
                    var av = function() {
                        ar(ax)
                    };
                    var az = function() {
                        ak = ak ? u.display.isNodeDisplayed(aw, true, true, true) : false
                    };
                    var ay = function() {
                        var aJ, aI, aF, aE, aH, aD, aG;
                        if (ax !== "fixed" && ax !== "absolute") {
                            aF = u.display.getOffsetInBody(aB.node, ap);
                            aE = aF.left;
                            aH = aF.top;
                            aD = aA.outerWidth();
                            aG = aA.outerHeight();
                            aJ = al(aA, "overflow-x");
                            aI = al(aA, "overflow-y");
                            if (aI !== "visible") {
                                if (aH > au.top) {
                                    au.height -= (aH - au.top);
                                    au.top = aH
                                }
                                if (aG < au.height) {
                                    au.height = aG
                                }
                            }
                            if (aJ !== "visible") {
                                if (aE > au.left) {
                                    au.width -= (aE - au.left);
                                    au.left = aE
                                }
                                if (aD < au.width) {
                                    au.width = aD
                                }
                            }
                        }
                    };
                    aC();
                    av();
                    az();
                    ay();
                    return null
                } else {
                    return true
                }
            });
            if ((!aj || aj.zIndex !== at)) {
                aa = u.insertAtStyleRule(D, "#" + ag + " ." + a.MARK_LINE_CLASS + ", #" + ag + " ." + a.MARK_HIGHLIGHT_LEFT_CLASS + ", #" + ag + " ." + a.MARK_HIGHLIGHT_TOP_CLASS + ", #" + ag + " ." + a.MARK_HIGHLIGHT_RIGHT_CLASS + ", #" + ag + " ." + a.MARK_HIGHLIGHT_BOTTOM_CLASS, "z-index: " + (at + 1) + ";", aa)
            }
            aj = {
                isDisplayed: ak,
                zIndex: at,
                fixed: an,
                rectangle: au
            };
            ae.bindAttrChange(ai.method)
        };
        var ab = function() {
            ae.unbindAttrChange(ai.method);
            var ax = function() {
                return au + (K.scrollWidth * v) - (K.clientWidth * v)
            };
            var ar = function() {
                return aq + (K.scrollHeight * v) - (K.clientHeight * v)
            };
            var av = function(aB) {
                if (f && F.width !== aB) {
                    F.width = aB
                }
            };
            var al = function(aB) {
                if (f && F.height !== aB) {
                    F.height = aB
                }
            };
            var au = ae.width(),
                aq = ae.height(),
                az = Q.width(),
                aw = Q.height(),
                at = false,
                an = u.display.getScrollBarWidth(),
                ak = 0,
                am = 0,
                ap = u.display.getBodyOffsetInDocument(M),
                aA = u.display.getOffsetInBody(K, ap),
                ao = aj.rectangle,
                ay = null;
            H.css("left", ao.left);
            H.css("top", ao.top);
            H.width(ao.width);
            H.height(ao.height);
            aA.left = aA.left - ao.left;
            aA.top = aA.top - ao.top;
            W.css("left", aA.left);
            W.css("top", aA.top);
            W.width(au);
            W.height(aq);
            ak = K.scrollWidth * v;
            if (N.getType() === a.TEXTAREA_CONTROL) {
                ay = u.display.getScrollBarDisplay(K, v);
                if (ay.vertical && ay.horizontal) {
                    ak = ax();
                    am = ar();
                    if (ak !== az) {
                        Q.css("width", "auto");
                        at = true
                    }
                    if (am !== aw) {
                        Q.css("height", "auto");
                        at = true
                    }
                } else {
                    if (ay.vertical) {
                        Q.width(au - an);
                        Q.css("height", "auto");
                        at = true
                    } else {
                        if (ay.horizontal) {
                            Q.height(aq - an);
                            Q.css("width", "auto");
                            at = true
                        } else {
                            Q.width(au);
                            Q.height(aq)
                        }
                    }
                    am = K.scrollHeight * v
                }
            } else {
                if (ak !== az) {
                    Q.width(ak);
                    at = true
                }
                Q.css("top", (Math.floor((ao.height - Q.outerHeight()) / 2)) + "px");
                am = aq
            }
            if (at || K.scrollLeft !== af.scrollLeft || K.scrollTop !== af.scrollTop) {
                Z()
            }
            av(ak);
            al(am);
            ae.bindAttrChange(ai.method)
        };
        var Z = function() {
            switch (N.getType()) {
                case a.TEXTAREA_CONTROL:
                    af.scrollLeft = K.scrollLeft;
                    af.scrollTop = K.scrollTop;
                    break;
                case a.INPUT_CONTROL:
                    af.scrollLeft = K.scrollLeft * v;
                    af.scrollTop = K.scrollTop * v;
                    break
            }
        };
        var A = function() {
            ae.unbindAttrChange(ai.method);
            P();
            if (aj.isDisplayed) {
                H.css("display", "block");
                ab();
                E();
                B()
            } else {
                H.css("display", "none")
            }
            ae.bindAttrChange(ai.method)
        };
        var V = function() {
            ae.unbindAttrChange(ai.method);
            P();
            if (aj.isDisplayed) {
                H.css("display", "block");
                X();
                ab();
                B()
            } else {
                H.css("display", "none")
            }
            ae.bindAttrChange(ai.method)
        };
        var B = function() {
            var ar = function(aD, ay, aA, ax, aC) {
                var az = 2,
                    aw = false,
                    aB = ay + ax,
                    av = aA + aC;
                aD.beginPath();
                aD.moveTo(ay, aA + az);
                aD.lineTo(ay, av - az);
                aD.quadraticCurveTo(ay, av, ay + az, av);
                aD.lineTo(aB - az, av);
                aD.quadraticCurveTo(aB, av, aB, av - az);
                aD.lineTo(aB, aA + az);
                aD.quadraticCurveTo(aB, aA, aB - az, aA);
                aD.lineTo(ay + az, aA);
                aD.quadraticCurveTo(ay, aA, ay, aA + az);
                aD.fill()
            };
            if (o) {
                if (g) {
                    var at = Q.find("." + a.MARK_CONTEXT_CLASS + ", ." + a.MARK_SPELLING_CONTEXT_CLASS + ", ." + a.MARK_NOCONTEXT_CLASS),
                        ap = "",
                        al = [],
                        am = [],
                        ak = [],
                        an = 0,
                        ao = 0,
                        aq = N.getType();
                    at.each(function(aw) {
                        var av = this;
                        var ax = {
                            left: av.offsetLeft,
                            top: av.offsetTop,
                            width: av.offsetWidth,
                            height: av.offsetHeight
                        };
                        ap += ax.left + "," + ax.top + "," + ax.width + "," + ax.height + ";";
                        if (av.className.indexOf(a.SYNONYM_MARK_CLASS) !== -1) {
                            am.push(ax)
                        } else {
                            if (av.className.indexOf(a.NO_SUGGESTIONS_MARK_CLASS) !== -1) {
                                ak.push(ax)
                            } else {
                                al.push(ax)
                            }
                        }
                    });
                    if (aq === a.INPUT_CONTROL) {
                        an += G.offsetLeft;
                        ao += G.offsetTop
                    }
                    if (!w.isBgAttachLocalSupported()) {
                        an -= K.scrollLeft;
                        ao -= K.scrollTop
                    }
                    ap += "scroll:" + an + "," + ao + ";";
                    if (ap !== ac) {
                        var au = F.getContext("2d");
                        au.clearRect(0, 0, F.width, F.height);
                        au.fillStyle = "rgba(" + a.MARK_HIGHLIGHT_RGB + ", 0.15)";
                        $.each(al, function(av, aw) {
                            ar(au, aw.left, aw.top, aw.width, aw.height)
                        });
                        au.fillStyle = "rgba(" + a.MARK_HIGHLIGHT_RGB + ", 0.15)";
                        $.each(ak, function(av, aw) {
                            ar(au, aw.left, aw.top, aw.width, aw.height)
                        });
                        au.fillStyle = "rgba(" + a.MARK_HIGHLIGHT_SYNONYM_RGB + ", 0.3)";
                        $.each(am, function(av, aw) {
                            ar(au, aw.left, aw.top, aw.width, aw.height)
                        });
                        ae.css({
                            "background-repeat": "no-repeat",
                            "background-attachment": "local",
                            "background-position": (an + "px " + ao + "px"),
                            "background-image": "url(" + F.toDataURL("image/png") + ")"
                        });
                        ac = ap
                    }
                }
            }
        };
        var Y = function(an, am) {
            var ak = Q.find("." + a.MARK_CONTEXT_CLASS + ", ." + a.MARK_SPELLING_CONTEXT_CLASS + ", ." + a.MARK_NOCONTEXT_CLASS),
                al = null;
            $.each(ak, function(ao, ap) {
                if (u.display.isPositionInNode(an, am, ap)) {
                    al = ap
                }
                return al === null
            });
            return al
        };
        var U = function(am) {
            var ak = w.getNodeFilter();
            var al = J(),
                an = al.length;
            y.getTreeWalker(G, ak.SHOW_TEXT | ak.SHOW_ELEMENT).walk(function() {
                if (this.node === am) {
                    an = this.pos + $(am).text().length;
                    return true
                } else {
                    return null
                }
            });
            ae.val(al);
            u.fireDomEvent(K, "change");
            N.textChanged();
            j.selectRange(K, an)
        };
        var ai = function() {
            var am = false,
                al = false,
                an = p;
            var ak = function() {
                V();
                E();
                B()
            };
            var ao = function(ap) {
                if (ap === "style") {
                    if (!al) {
                        ak();
                        window.setTimeout(function() {
                            al = false;
                            if (am) {
                                ao("style")
                            }
                        }, an);
                        al = true;
                        am = false
                    } else {
                        am = true
                    }
                }
            };
            return {
                method: ao
            }
        }();
        G.setAttribute(a.GINGER_EDITOR_ATTR, true);
        T.prepend(H);
        if (f) {
            T.prepend(I)
        }
        ae.bind("click change copy cut paste keyup", function() {
            X();
            B();
            if (ad === null) {
                ad = window.setInterval(V, d)
            }
        });
        ae.bind("change scroll copy cut paste", function() {
            ab();
            Z();
            B();
            if (ad === null) {
                ad = window.setInterval(V, d)
            }
        });
        ae.bind("focus", function() {
            window.clearInterval(ad);
            ad = window.setInterval(V, t);
            V()
        });
        ae.bind("blur", function() {
            window.clearInterval(ad);
            ad = window.setInterval(V, d);
            V()
        });
        V();
        E();
        B();
        if (ae.is(":focus")) {
            ad = window.setInterval(V, t)
        } else {
            H.css("display", "none")
        }
        ae.bindAttrChange(ai.method);
        var O = {
            textInput: K,
            richText: G,
            update: V,
            updateContent: X,
            getGingerNodeFromPosition: Y,
            populateCorrection: U,
            updateZoom: A
        };
        s.push(O);
        return s[s.length - 1]
    };
    return {
        load: k,
        getTextInputManager: q
    }
})();
GS_WEB_WIDGET.menuController = (function() {
    var i = null,
        g = null,
        e = null;
    var h = function() {
        i = GS_WEB_WIDGET.namespace("appModel");
        g = GS_WEB_WIDGET.namespace("contextMenuManager");
        e = GS_WEB_WIDGET.namespace("bubbleMenuManager")
    };
    var f = function(j) {
        if (i.isContextMenu()) {
            g.initManager(j)
        } else {
            if (i.isBubbleMenu()) {
                e.initManager(j)
            }
        }
    };
    var c = function(j) {
        if (i.isContextMenu()) {
            g.bindElementMenuHandler(j)
        } else {
            if (i.isBubbleMenu()) {
                e.bindElementMenuHandler(j)
            }
        }
    };
    var b = function(j) {
        if (i.isContextMenu()) {
            g.unbindElementMenuHandler(j)
        } else {
            if (i.isBubbleMenu()) {
                e.unbindElementMenuHandler(j)
            }
        }
    };
    var a = function() {
        if (i.isContextMenu()) {
            return g.isMenuVisible()
        } else {
            if (i.isBubbleMenu()) {
                return e.isMenuVisible()
            }
        }
        return false
    };
    var d = function(j) {
        if (i.isContextMenu()) {
            return g.handleKey(j)
        } else {
            if (i.isBubbleMenu()) {
                return e.handleKey(j)
            }
        }
        return true
    };
    return {
        load: h,
        isMenuVisible: a,
        attachMenuToDoc: f,
        handleKey: d,
        bindElementMenuHandler: c,
        unbindElementMenuHandler: b
    }
})();
"use strict";
GS_WEB_WIDGET.learningManager = (function() {
    var f = null,
        g = null;
    var e = "update_user_stats",
        a = "update_approve_stats";
    var d = function() {
        f = GS_WEB_WIDGET.namespace("protocol");
        g = GS_WEB_WIDGET.namespace("userManager")
    };
    var c = function(h) {
        if (g.isLoggedIn()) {
            f.service.reportToLearning([h], e)
        }
    };
    var b = function(h) {
        var j = function(l) {
            var k = l.match(/[^a-zA-Z0-9 ,.â€™]/g);
            return !k || k.length <= 2
        };
        if (g.isLoggedIn()) {
            var i = [];
            $.each(h, function(q, o) {
                var r = o.text,
                    n = o.correction,
                    l = n.getSuggestions(),
                    m = n.getLearning(),
                    k = o.phrase,
                    p = k.getCleanText();
                $.each(l, function(u, w) {
                    if (w.suggestion === r) {
                        var v = w.learningCategory,
                            t = {};
                        if (m.otherCorrectionsInFragment === 0) {
                            $.extend(t, {
                                topic_id: v
                            });
                            if (m.fragment && m.from !== null && m.to !== null) {
                                $.extend(t, m, {
                                    correction: r
                                })
                            }
                        }
                        i.push(t);
                        return false
                    }
                    return true
                })
            });
            if (i.length > 0) {
                f.service.reportToLearning(i, a)
            }
        }
    };
    return {
        load: d,
        reportGingerTheText: c,
        reportApprovals: b
    }
})();
GS_WEB_WIDGET.controlsFinder = (function() {
    var b = null,
        k = null,
        A = null,
        o = null,
        p = null,
        y = null,
        t = null,
        l = null,
        B = null,
        w = null,
        f = null;
    var e = null;
    var s = "focusin focusout change click copy cut paste keypress keydown",
        x = "focusin";
    var j = function() {
        b = GS_WEB_WIDGET.namespace("defs");
        k = GS_WEB_WIDGET.namespace("appModel");
        f = GS_WEB_WIDGET.namespace("context");
        A = GS_WEB_WIDGET.namespace("logger");
        o = GS_WEB_WIDGET.namespace("initParams");
        p = GS_WEB_WIDGET.namespace("textInputManager");
        y = GS_WEB_WIDGET.namespace("browser");
        t = GS_WEB_WIDGET.namespace("editControl");
        l = GS_WEB_WIDGET.namespace("menuController");
        B = GS_WEB_WIDGET.namespace("staticUtils");
        w = GS_WEB_WIDGET.namespace("utils");
        w.misc = GS_WEB_WIDGET.namespace("utils.misc");
        e = GS_WEB_WIDGET.namespace("mainController")
    };
    var C = function() {
        if (b.TOP_MENU_BINDING) {
            u(document)
        }
        var D = setInterval(function() {
            m(document)
        }, b.SCAN_CONTROLS_INTERVAL);
        m(document)
    };
    var u = function(E) {
        var F = function() {
            var G = o.getWidgetStyles();
            w.attachStyleNode(E, G, b.GINGER_STYLE_ELEMENT_ID)
        };
        $(f).unbind(f.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, F);
        $(f).bind(f.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, F);
        var D = w.getDocumentBody(E);
        if (D && D.getAttribute && !D.getAttribute(b.GINGER_STYLE_ATTR)) {
            D.setAttribute(b.GINGER_STYLE_ATTR, "true");
            F();
            if (A.loggerOn()) {
                A.logDebug("Attached CSS to document")
            }
        }
    };
    var m = function(F) {
        var E = v(F);
        E = E.toArray();
        var D = $.map(E, function(G) {
            return n(G)
        });
        e.addControlsToControlList(D);
        $.each(D, function(G, H) {
            i(H)
        })
    };
    var v = function(N, M) {
        function F() {
            var P = null,
                R = null,
                Q = null;
            if (B.isTextInputEnabled()) {
                R = $("textarea", N).not("[" + b.GINGER_EDITOR_ATTR + "]");
                Q = $("input", N).filter(":text").not("[" + b.GINGER_EDITOR_ATTR + "]");
                P = R.add(Q);
                if (b.ONLY_SPELLCHECK_NODES) {
                    P = P.filter('[spellcheck!="false"]')
                }
            }
            return P
        }
        var L = $("div[contentEditable]", N).not("[" + b.GINGER_EDITOR_ATTR + "]"),
            O = F();
        if (O) {
            L = L.add(O)
        }
        if (y.isIeBefore8) {
            L = (function D() {
                var P = [];
                $.each(L, function(Q, R) {
                    if ((/true|1/i.test(R.contentEditable) || (B.isTextInputEnabled() && ((R.nodeName === b.INPUT_CONTROL && /text/i.test(R.type)) || R.nodeName === b.TEXTAREA_CONTROL))) && (!b.ONLY_SPELLCHECK_NODES || !/false/i.test(R.spellcheck))) {
                        P.push(R)
                    }
                });
                return $(P)
            })()
        }
        var I = $("body", N).not("[" + b.GINGER_EDITOR_ATTR + "]");
        if (I.length && I[0].contentEditable == "true" || I[0].isContentEditable || I[0].ownerDocument.designMode == "on") {
            L = L.add(I)
        }
        if (L.length) {
            d(N)
        }
        var H = w.misc.getPermittedIFrames(N);
        for (var G = 0; G < H.length; G++) {
            try {
                var J = w.getFrameDocument(H[G]);
                var E = v(J);
                L = L.add(E)
            } catch (K) {}
        }
        return L
    };
    var d = function(E) {
        var D = w.getDocumentBody(E);
        if (D && D.getAttribute && !D.getAttribute(b.GINGER_GLOBAL_ATTR)) {
            u(E);
            a(E);
            D.setAttribute(b.GINGER_GLOBAL_ATTR, "true");
            if (y.isFirefox) {
                D.spellcheck = false
            }
        }
    };
    var n = function(D) {
        if (A.loggerOn()) {
            A.logInfo("Found control " + D.nodeName + "/" + D.nodeType)
        }
        var E = t.getEditControl();
        z(E, D);
        return E
    };
    var r = function(D) {
        var E = e.getControlByNode(D.target);
        if (!E) {
            E = e.getControlByNode(B.getRootFromNode(D.target))
        }
        if (E) {
            e.eventHandler(D, E)
        }
    };
    var g = function(D) {
        var E = e.getControlByNode(D.target);
        e.focusHandler(D, E)
    };
    var h = function(D) {
        return D.tagName.toUpperCase() === "BODY" ? D.parentNode : D
    };
    var z = function(F, E) {
        if (A.loggerOn()) {
            A.logInfo("Initializing control on element: " + E.nodeType + "/" + E.nodeName)
        }
        F.init(E);
        var D = h(E);
        $(D).bind(s, r).bind(x, g);
        switch (F.getType()) {
            case b.RICHTEXT_CONTROL:
                F.setRichTextElement(E);
                break;
            case b.INPUT_CONTROL:
            case b.TEXTAREA_CONTROL:
                F.setTextInputManager(p.getTextInputManager(F));
                F.setRichTextElement(F.getTextInputManager().richText);
                break;
            default:
        }
        E.setAttribute("spellcheck", "false");
        E.setAttribute(b.GINGER_EDITOR_ATTR, "true")
    };
    var c = function(F) {
        var E = F.getElement(),
            D = h(E);
        $(D).unbind(s, r).unbind(x, g);
        e.removeControlsFromControlList(F)
    };
    var i = function(F) {
        function E(I) {
            var K = null,
                G = null,
                L = false,
                J = null;
            var H = y.getNodeFilter();
            B.getTreeWalker(I, H.SHOW_TEXT | H.SHOW_ELEMENT).walk(function() {
                if (L) {
                    J = this.node
                }
                if (this.node.nodeType == 3) {
                    if (K === null && !w.isEmptyNode(this.node)) {
                        K = this.node
                    }
                    G = this.node;
                    L = true
                }
                return null
            });
            return {
                firstTextNode: K,
                afterLastTextNode: G === J ? null : J
            }
        }

        function D() {
            if (F.getTextInputManager() !== null) {
                return
            }
            var H = F.getRichTextElement();
            if (A.loggerOn()) {
                A.log(H.id)
            }
            var L = B.getDOMhtml(H),
                I = L ? L.replace(/\s/g, "") : null;
            if (I !== null && I !== "") {
                var G = w.getDocumentContext(H);

                function N(P) {
                    var O = G.createElement("span");
                    O.className = P;
                    return O
                }
                var K = E(H),
                    J = B.getPatterns();
                if (K.firstTextNode !== null) {
                    K.firstTextNode.parentNode.insertBefore(N(J.DO_NOT_CHECK_START), K.firstTextNode);
                    var M = N(J.DO_NOT_CHECK_END);
                    if (K.afterLastTextNode !== null) {
                        K.afterLastTextNode.parentNode.insertBefore(M, K.afterLastTextNode)
                    } else {
                        H.appendChild(M)
                    }
                }
            }
        }
        if (!k.getCheckExistingText()) {
            D()
        }
        e.processControl(F)
    };
    var a = function(D) {
        q(D);
        $(D).bind("keypress keydown", e.documentKeyHandler)
    };
    var q = function(D) {
        l.attachMenuToDoc(D)
    };
    return {
        load: j,
        attachTopLevelDocument: C,
        detachControl: c
    }
})();
GS_WEB_WIDGET.mainController = (function() {
    var s = null,
        c = null,
        E = null,
        p = null,
        M = null,
        ao = null,
        d = null,
        V = null,
        ag = null,
        an = null,
        S = null;
    var Q = null,
        C = null,
        W = null,
        N = null,
        ae = null,
        I = null,
        o = null,
        H = null,
        z = null;
    var O = null,
        aj = null,
        l = null,
        Z = null;
    var h = 500,
        B = null,
        at = [],
        x = false,
        G = null;
    var aw = 500;
    var U = null,
        ax = false,
        k = new Date();
    var g = function() {
        s = GS_WEB_WIDGET.namespace("defs");
        c = GS_WEB_WIDGET.namespace("appModel");
        E = GS_WEB_WIDGET.namespace("logger");
        p = GS_WEB_WIDGET.namespace("API");
        o = GS_WEB_WIDGET.namespace("trackingManager");
        H = GS_WEB_WIDGET.namespace("guid");
        M = GS_WEB_WIDGET.namespace("userManager");
        ao = GS_WEB_WIDGET.namespace("comm");
        d = GS_WEB_WIDGET.namespace("textInputManager");
        V = GS_WEB_WIDGET.namespace("bookmark");
        ag = GS_WEB_WIDGET.namespace("sha1");
        an = GS_WEB_WIDGET.namespace("browser");
        S = GS_WEB_WIDGET.namespace("protocol");
        Q = GS_WEB_WIDGET.namespace("controlsFinder");
        C = GS_WEB_WIDGET.namespace("menuController");
        W = GS_WEB_WIDGET.namespace("staticUtils");
        N = GS_WEB_WIDGET.namespace("utils");
        N.misc = GS_WEB_WIDGET.namespace("utils.misc");
        N.time = GS_WEB_WIDGET.namespace("utils.time");
        ae = GS_WEB_WIDGET.namespace("context");
        I = GS_WEB_WIDGET.namespace("phraseManager");
        O = GS_WEB_WIDGET.namespace("managerCreator");
        aj = GS_WEB_WIDGET.namespace("tokensCacheManager");
        l = GS_WEB_WIDGET.namespace("learningManager");
        Z = GS_WEB_WIDGET.namespace("messagesManager");
        z = GS_WEB_WIDGET.namespace("domStorageComm");
        a()
    };
    var L = [],
        aq = {};
    var ai = null,
        X = null;
    var ap = null;
    var r = [],
        w = false;
    var Y = function() {
        if (E.loggerOn()) {
            E.logDebug("Enter init().")
        }
        Q.attachTopLevelDocument()
    };
    var P = function(aA) {
        L = $.merge(L, aA)
    };
    var b = function(aB) {
        var aA = L.indexOf(aB);
        if (aA !== -1) {
            L.splice(aA, 1)
        }
        if (ai === aB) {
            ai = null
        }
    };
    var ay = function(aR) {
        var aD = aR.control,
            aB = aR.tokensToReplaceMap,
            aJ = aR.uiPhrase,
            aS = aR.triggerItem;
        var aG = aD.uiPhraseManager.getPhraseFromUiPhrase(aJ),
            aQ = aG.getCorrectionManager();
        var aO = (function aE() {
            var aV = [],
                aX = {};
            var aZ = "",
                aU = aG.getCleanText(),
                aY = 0;
            var aW = 0;
            aQ.iterateItems(function(a0) {
                var a3 = a0.getIndex(),
                    a2 = aB.hasOwnProperty(a3);
                var a1 = aj.getItem({
                        Text: a0.getMistakeText()
                    }),
                    a4 = a1 ? a1.getIgnored() : false;

                function a6() {
                    var a9 = a0.getMistakeText();
                    if (a2) {
                        var a8 = aB[a3].replacement;
                        return {
                            replacement: a8,
                            start: a0.getStart(),
                            mistakeText: a9
                        }
                    } else {
                        return {
                            replacement: a9,
                            start: a0.getStart(),
                            mistakeText: a9
                        }
                    }
                }
                var a5 = a6();
                aZ += aU.substr(aY, a5.start - aY);
                if (!a2 || a4) {
                    var a7 = a0.getCorrectionId();
                    aV.push({
                        correctionId: a7,
                        newStartPosition: aZ.length,
                        newIndex: aW
                    });
                    aX[a7] = {
                        newCorrectionId: I.createCorrectionId(a5.mistakeText, aW)
                    };
                    aW++
                }
                aZ += a5.replacement;
                aY = a5.start + a5.mistakeText.length
            });
            aZ += aU.substr(aY);
            return {
                newText: aZ,
                preservedCorrections: aV,
                preservedCorrectionsMap: aX
            }
        })();
        var aT = aO.newText,
            aN = aO.preservedCorrections,
            aH = aO.preservedCorrectionsMap;
        aJ.setText(aT).setCleanText(aT);
        var aK = I.getPhrase(aT),
            aC = {};
        if (!aK) {
            aK = I.getOrCreateItem({
                CleanText: aT,
                Pending: false,
                SpellingOnly: aG.getSpellingOnly()
            });
            var aL = aK.getCorrectionManager();
            (function aA() {
                var aU = 0;
                $.each(aN, function(aZ, a1) {
                    var aV = aQ.getCorrection(a1.correctionId);
                    var aY = aV.getMistakeText(),
                        aW = I.createCorrectionId(aY, aU);
                    var aX = (function a0() {
                        var a2 = aV.getStart() - a1.newStartPosition;
                        return {
                            start: aV.getFragmentStart() - a2,
                            end: aV.getFragmentEnd() - a2
                        }
                    })();
                    aL.getOrCreateItem({
                        MistakeText: aY,
                        Index: aU,
                        Start: a1.newStartPosition,
                        Length: aV.getLength(),
                        Suggestions: aV.getSuggestions(),
                        Confidence: aV.getConfidence(),
                        ShouldReplace: aV.getShouldReplace(),
                        CorrectionId: aW,
                        FragmentStart: aX.start,
                        FragmentEnd: aX.end,
                        Learning: aV.getLearning()
                    });
                    aC[a1.correctionId] = aW;
                    aU++
                })
            })();
            (function aI() {
                var aV = aJ.getCorrections(),
                    aU = {};
                $.each(aV, function(aX, aW) {
                    if (aH.hasOwnProperty(aX)) {
                        aU[aH[aX].newCorrectionId] = aW
                    }
                });
                aJ.setCorrections(aU)
            })()
        } else {
            (function aP() {
                var aU = 0;
                $.each(aN, function(aX, aY) {
                    var aV = aQ.getCorrection(aY.correctionId);
                    var aW = aV.getMistakeText();
                    aC[aY.correctionId] = I.createCorrectionId(aW, aU);
                    aU++
                })
            })();
            (function aM() {
                var aV = aJ.getCorrections(),
                    aU = {};
                $.each(aV, function(aX, aW) {
                    if (aH.hasOwnProperty(aX)) {
                        if (aC.hasOwnProperty(aX)) {
                            aU[aC[aX]] = aW
                        }
                    }
                });
                aJ.setCorrections(aU)
            })()
        }(function aF() {
            var aU = N.getDocumentContext(aS);
            var aW = W.getPhraseMarkGuidsFromMistake(aS, aU);

            function aV(aZ, a0) {
                var aX = "span[" + s.MARK_GUID_ATTR + '="' + aZ + '"]';
                var aY = $(aX, aU);
                if (aY.length > 0) {
                    aY.attr(s.SPAN_CONTEXT_ID, a0)
                }
            }
            $.each(aW, function(aY, aX) {
                if (aC.hasOwnProperty(aY) && aY !== aC[aY]) {
                    aV(aX.markGuid, aC[aY])
                }
            })
        })()
    };
    var au = function(aA) {
        var aC = W.getDOMhtml(aA);
        if (E.loggerOn()) {
            E.logInfo("Contents =\n---\n" + aC + "\n---")
        }
        var aB = W.getPatterns();
        aC = W.doReplace(aC, aB.removeMozClauses);
        aC = W.doReplace(aC, aB.removeIrrelevantTags);
        aC = W.doReplace(aC, aB.compactBlockTags);
        aC = W.doReplace(aC, aB.compactAllTags);
        aC = W.doReplace(aC, aB.alignSpecialChars);
        aC = W.doReplace(aC, aB.tagPhrases);
        return aC
    };
    var i = function(aB) {
        if (E.loggerOn()) {
            E.logDebug("documentKeyHandler: " + JSON.stringify({
                type: aB.type,
                eventNodeName: (aB.target || {}).nodeName,
                eventNodeValue: (aB.target || {}).nodeValue
            }))
        }
        var aA = W.getRootFromNode(aB.target);
        var aC = aA ? ad(aA) : null;
        if (!m(aB, aC)) {
            return false
        }
    };
    var ac = function(aC, aD) {
        if (E.loggerOn()) {
            E.logDebug("eventHandler: " + JSON.stringify({
                rootNodeName: ((aD ? aD.getElement() : {}) || {}).nodeName,
                rootNodeType: ((!!aD ? aD.getElement() : {}) || {}).nodeType,
                type: aC.type,
                eventNodeName: (aC.target || {}).nodeName,
                eventNodeValue: (aC.target || {}).nodeValue
            }))
        }
        var aA = s.PROCESS_ALL_EVENTS;
        (function aB() {
            var aG = aC && /copy|cut/.test(aC.type) && !V.getSelection(aD.getElement()).isCollapsed();
            if (aG) {
                aA = true;
                var aF = V.getBookmark(aD.getElement());
                if (aF.isContainingGingerTags()) {
                    if (E.loggerOn()) {
                        E.logDebug("clearing markup due to copy / cut event")
                    }
                    W.globalRemoveCorrectionMarks(aD.getRichTextElement());
                    aF.move();
                    if (an.isIeBefore9) {
                        U = {
                            root: aD.getRichTextElement(),
                            bookmark: aF
                        }
                    }
                }
            }
        })();
        if (aA) {
            (function aE() {
                if (B) {
                    clearTimeout(B)
                }
                B = null;
                at = []
            })();
            if (aD && !C.isMenuVisible()) {
                aD.textChanged()
            }
        } else {
            if (!x && !B) {
                at.push(aD);
                B = setTimeout(n, h)
            }
            x = true
        }
        return true
    };
    var n = function() {
        var aA = at.length > 0 ? at.pop() : null;
        if (aA && !C.isMenuVisible()) {
            aA.textChanged()
        }
        B = null
    };
    var am = function(aA, aB) {
        if (E.loggerOn()) {
            E.logDebug("focusHandler: " + JSON.stringify({
                rootNodeName: ((!!aB ? aB.getElement() : {}) || {}).nodeName,
                rootNodeType: ((!!aB ? aB.getElement() : {}) || {}).nodeType,
                type: aA.type,
                eventNodeName: (aA.target || {}).nodeName,
                eventNodeValue: (aA.target || {}).nodeValue
            }))
        }
    };
    var m = function(aB, aC) {
        var aA = aB.keyCode;
        if (C.isMenuVisible()) {
            if (!C.handleKey(aB)) {
                return false
            }
        } else {
            if (aC && aB.ctrlKey && !aB.altKey) {}
        }
        return true
    };
    var af = function(aB, aA, aC) {
        var aD = aB.substring(aA, aC);
        return aD.length > 0 ? {
            text: aD,
            pos: aA
        } : null
    };
    var ar = function(aB, aA, aC) {
        if (!c.getLastPhraseInEnglish()) {
            if (E.loggerOn()) {
                E.logDebug("last phrase was not in English. Is spelled correctly turned off")
            }
            return
        }
        if (N.textContainsNonEnglish(aB)) {
            if (E.loggerOn()) {
                E.logDebug("word " + aB + "' contains non English characters. Turning Is spelled correctly off")
            }
            ak(false);
            return
        }
        if (s.ALWAYS_MARK) {
            aC(false);
            return
        }
        j(function() {
            p.callIsSpelledCorrectly(aB, aA, aC)
        })
    };
    var ah = function(aJ, aA, aB, aH, aC, aD) {
        if (!c.getLastPhraseInEnglish()) {
            if (E.loggerOn()) {
                E.logDebug("last phrase was not in English; skip is spelled correctly")
            }
            return
        }
        if (N.isCapitalized(aA.cleanText)) {
            if (E.loggerOn()) {
                E.logDebug('Word "' + aA + '" is capitalized; skip is spelled correctly')
            }
            return
        }
        var aG = aj.getItem({
            Text: aA.cleanText
        });
        if (aG) {
            if (!aG.getPending() && !aG.getCorrect() && !aG.getIgnored() && !aB) {
                function aE(aN, aM) {
                    if (aN) {
                        var aL = aN.textContent || aN.innerText;
                        if (aL !== aM.text) {
                            return true
                        }
                    }
                    return false
                }
                var aI = W.getMarkSegment({
                    treeWalker: aJ,
                    start: aA.pos,
                    length: aA.cleanText.length,
                    uiPhrase: aC
                });
                var aK = aE(aI.markNode, aA);
                if (aI && !aK) {
                    aD.push(aI)
                }
            }
        } else {
            if (aB) {
                return
            }
            var aF = aj.getOrCreateItem({
                Text: aA.cleanText,
                Pending: true
            });
            if (!c.getDisableOTF()) {
                ar(aA.cleanText, aH, function(aL) {
                    aF.setCorrect(aL).setPending(false);
                    ai.setIdleTimer()
                })
            } else {
                o.reportIsSpelledCorrectlyReply({
                    token: aA.cleanText,
                    firstInPhrase: aH,
                    rt: 0
                });
                aF.setCorrect(true).setPending(false)
            }
        }
    };
    var v = function() {
        var aJ = ai.getRichTextElement();
        var aD = ai.getUndoStack().getLast(),
            aI = aD ? aD.contents : null,
            aO = aI ? aI.rawText : null;
        var aM = ai.getRawText();
        if (aO === null || aM === null) {
            return false
        }
        var aN = (function aH() {
            var aQ = false;
            for (var aP = 0; aP < aM.length; aP++) {
                if (aP < aO.length) {
                    if (aO.charAt(aP) !== aM.charAt(aP)) {
                        aQ = true;
                        break
                    }
                }
            }
            return aQ ? aP : NaN
        })();
        if (isNaN(aN)) {
            if (E.loggerOn()) {
                E.logInfo("no change occurred")
            }
            return false
        }
        var aG = W.rootToLeafPos(aJ, aN, W.ALIGN_END);
        if (!aG) {
            if (E.loggerOn()) {
                E.logWarning("Could not find leaf position for raw position " + aN)
            }
            return false
        }
        var aK = false,
            aC = [],
            aB = [],
            aL = 0,
            aA = W.getPatterns();
        var aE = an.getNodeFilter();
        W.getTreeWalker(aJ, aE.SHOW_TEXT | aE.SHOW_ELEMENT).walk(function() {
            aK = aK || this.node === aG.node;
            if (this.node.nodeName.toLowerCase() === "span") {
                var aP = $(this.node);
                if (aP.hasClass(aA.DO_NOT_CHECK_START)) {
                    if (aK) {
                        aL++
                    } else {
                        aC.push(this.node)
                    }
                } else {
                    if (aP.hasClass(aA.DO_NOT_CHECK_END)) {
                        if (!aK) {
                            aC.pop()
                        } else {
                            if (aL === 0) {
                                aB.push(this.node)
                            }
                            if (aL > 0) {
                                aL--
                            }
                        }
                    }
                }
            }
        });
        if (E.loggerOn()) {
            E.logInfo("Removing the following do not mark spans. before items=" + aC + ", after items=" + aB)
        }

        function aF(aP) {
            $.each(aP, function(aQ, aR) {
                if (aR && aR.parentNode) {
                    aR.parentNode.removeChild(aR)
                }
            })
        }
        aF(aC);
        aF(aB);
        return aC.length > 0 || aB.length > 0
    };
    var az = function(aB) {
        if (!aB) {
            return null
        }
        var aD = [],
            aC = [],
            aE = W.getPatterns();
        var aA = an.getNodeFilter();
        W.getTreeWalker(aB, aA.SHOW_TEXT | aA.SHOW_ELEMENT).walk(function() {
            if (this.node.nodeName.toLowerCase() === "span") {
                var aF = $(this.node);
                if (aF.hasClass(aE.DO_NOT_CHECK_START)) {
                    aD.push({
                        start: this.pos
                    })
                } else {
                    if (aF.hasClass(aE.DO_NOT_CHECK_END)) {
                        var aG = aD.pop();
                        if (aG) {
                            aG.end = this.pos;
                            aC.push(aG)
                        }
                    }
                }
            }
        });
        return aC
    };
    var ab = function(aD) {
        var aF = $("." + s.MARK_CONTEXT_CLASS + ", ." + s.MARK_SPELLING_CONTEXT_CLASS + ", ." + s.MARK_NOCONTEXT_CLASS, aD);
        if (aF && aF.length > 0) {
            $.each(aF, function(aG, aH) {
                if (!(N.isMarkedNodeEditable(aH))) {
                    if (E.loggerOn()) {
                        E.logDebug("removing uneditable node " + aH)
                    }
                    W.removeMark(aH)
                }
            })
        }
        var aC = N.misc.getPermittedIFrames(aD);
        for (var aB = 0; aB < aC.length; aB++) {
            try {
                var aE = N.getFrameDocument(aC[aB]);
                ab(aE)
            } catch (aA) {}
        }
    };
    var av = function(aA, aB, aC) {
        j(function() {
            p.callGingerTheText(aA, aB, aC)
        })
    };
    var e = function(aA, aB) {
        aB.uiPhraseManager.iterateItems(function(aE) {
            var aD = aE.getPhraseSegments(),
                aC = [];
            if (aD) {
                $.each(aD, function(aG, aH) {
                    var aF = aH.markNode.textContent || aH.markNode.innerText;
                    if (aF !== aA) {
                        aC.push(aH)
                    }
                });
                if (aC.length !== aD.length) {
                    aE.setPhraseSegments(aC)
                }
            }
        })
    };
    var t = function(aM, aU, aA) {
        function aW(a7) {
            var a6 = I.getPhrase(aU.getCleanText());
            return a6 && a6.getSpellingOnly() && !a7 ? null : a6
        }

        function aC(a7, a6) {
            return a6 && N.isNodeInContainer(ai.getRichTextElement(), a7) && $(a7).text() === a6.getMistakeText()
        }
        var aD = aA !== null,
            aI = [],
            a5 = null,
            a4 = false,
            aY = aW(aD);
        aU.setInText(true);
        if (aY !== null) {
            if (!aY.getPending()) {
                var aV = aU.getPhraseSegments(),
                    aK = false,
                    aL = aY.getCorrectionManager();
                if (aV) {
                    if (aV.length !== aL.getItemsCount()) {
                        aK = true
                    } else {
                        if (aV.length > 0) {
                            $.each(aV, function(a6, a7) {
                                if (!aC(a7.markNode, aL.getCorrection(a7.correctionId))) {
                                    aK = true;
                                    aU.setPhraseSegments(null);
                                    return false
                                } else {
                                    W.rebindMark(a7.markNode)
                                }
                                return true
                            });
                            if (!aK) {
                                aI = aI.concat(aV)
                            }
                        }
                    }
                }
                if (aK || !aV) {
                    var aX = [],
                        a2 = 0,
                        aQ = aU.getCorrections() || {};
                    aL.iterateItems(function(a6) {
                        a2++;
                        var bd = a6.getCorrectionId(),
                            ba = a6.getMistakeText(),
                            a9 = aj.getItem({
                                Text: ba
                            }),
                            a8 = a9 ? !a9.getPending() && !a9.getIgnored() : true;
                        if (a8) {
                            var bb = aQ[bd] && aQ[bd].markGuid ? aQ[bd].markGuid : H.generate();
                            var bc = W.getMarkSegment({
                                treeWalker: aM.treeTextNodesWalker,
                                start: a6.getStart(),
                                length: a6.getLength(),
                                uiPhrase: aU,
                                correctionId: bd,
                                markGuid: bb
                            });
                            if (bc) {
                                var a7 = aQ[bd] || {};
                                a7.markGuid = bb;
                                aQ[bd] = a7;
                                aI.push(bc);
                                if (bc.markNode) {
                                    aX.push(bc)
                                }
                            }
                        }
                    });
                    if ((aX.length > 0 && aX.length === a2) || a2 <= 0) {
                        aU.setPhraseSegments(aX)
                    }
                    aU.setCorrections(aQ)
                }
            } else {
                a4 = true
            }
        } else {
            if (E.loggerOn() && !!aA) {
                E.logDebug("correctPhrase, non-cached phrase, locateCaretInPhrase = " + aA.start + ":" + aA.end + ', phrase = "' + aU.getText() + '"')
            }
            var aT = [],
                aO, a0;
            var aS = W.getPatterns().splitWords();
            while ((aO = aS.exec(aU.getCleanText())) != null) {
                if (aO[0] && aO[0].length != 0) {
                    if (a0 = af(aU.getCleanText(), aO.index, aO.index + aO[0].length)) {
                        a0.cleanText = aO[0];
                        aT.push(a0)
                    }
                }
            }
            for (var aJ = 0, aF = aT.length; aJ < aF; aJ++) {
                a0 = aT[aJ];
                var aG = aJ === 0;
                var aZ = aU.getIndent() + a0.pos;
                var aH = aA && aA.start >= aZ && aA.start <= aZ + a0.cleanText.length && aA.end >= aZ && aA.end <= aZ + a0.cleanText.length;
                var aE = aj.getItem({
                    Text: a0.cleanText
                });
                if (aD || aE) {
                    ah(aM.treeTextNodesWalker, a0, aH, aG, aU, aI)
                }
            }
            var a3 = function(a6) {
                return $.trim(a6.replace(/\S+$/, ""))
            };
            var aR = X && X.correctAll,
                aB = X && X.nonPendingCallback;
            if (aR || !aD) {
                if (E.loggerOn()) {
                    E.logDebug('Adding phrase to cache: "' + aU.getCleanText() + '"')
                }
                var aN = aR ? a3(aU.getText()) : aU.getCleanText();
                var aP = I.getOrCreateItem({
                    CleanText: aU.getCleanText()
                });
                aP.setTextToCheck(aN);
                av(aP, aD, function(a6) {
                    ak(a6);
                    if (!p.hasPendingCalls()) {
                        if (aB) {
                            aB(ai, {
                                phrase: aP
                            })
                        } else {
                            ai.setIdleTimer()
                        }
                    }
                })
            }
        }
        a5 = {
            uiPhrase: aU,
            markSegments: aI
        };
        a5.excludeNodes = aI ? $.map(aI, function(a6) {
            return a6.markNode
        }) : [];
        if (a4) {
            var a1 = W.getCorrectionMarkNodes(aM.treeElementsWalker, a5.uiPhrase);
            a5.excludeNodes = a5.excludeNodes.concat(a1)
        }
        r.push(a5)
    };
    var R = function() {
        var aV = v();
        var aP = ai.getRichTextElement();
        var aS = au(aP);
        var aL = az(aP);
        if (an.isIeBefore9 && aS.search(/\w/) == -1) {
            W.globalRemoveCorrectionMarks(aP)
        }

        function aO(a0, aY) {
            var aZ = false;
            if (aL && aL.length > 0) {
                $.each(aL, function(a1, a2) {
                    aZ = aZ || a0 >= a2.start && aY <= a2.end;
                    return !aZ
                })
            }
            return aZ
        }(function aJ() {
            ai.uiPhraseManager.iterateItems(function(aY) {
                aY.setInText(false)
            })
        })();
        var aH = 0,
            aE = 0,
            aK = [],
            aG, aM = null,
            aR = W.getPatterns().splitPhrases();
        ai.preProcessPhrase();
        while ((aG = aR.exec(aS)) != null) {
            aE = aH;
            aH = aG.index + aG[0].length;
            if (aM = ai.processPhrase(aS, aE, aG.index)) {
                var aB = aM.getPos() + aM.getIndent(),
                    aC = aB + aM.getCleanText().length;
                if (aL && aO(aB, aC)) {
                    if (E.loggerOn()) {
                        E.logInfo("phrase '" + aM.getCleanText() + "' starting at " + aM.getPos() + " ending at " + aC + " is marked as do not check --> SKIPPING IT.")
                    }
                } else {
                    if (E.loggerOn()) {
                        E.logInfo("phrase '" + aM.getCleanText() + "' starting at " + aM.getPos() + " ending at " + aC + " is GOING TO BE CHECKED")
                    }
                    aK.push(aM)
                }
            }
        }
        if (aM = ai.processPhrase(aS, aH)) {
            aK.push(aM)
        }
        var aD = an.getNodeFilter();
        var aU = W.getTreeWalker(aP, aD.SHOW_TEXT | aD.SHOW_ELEMENT),
            aF = W.getTreeWalker(aP, aD.SHOW_TEXT);
        r = [];
        var aA = !!ap ? ap.locateInPhrases(aK) : null;
        for (var aQ = 0; aQ < aK.length; aQ++) {
            if (!!aA && !!aA.start && !!aA.end && aA.start.uiPhrase === aK[aQ] && aA.end.uiPhrase === aK[aQ]) {
                t({
                    treeElementsWalker: aU,
                    treeTextNodesWalker: aF
                }, aK[aQ], {
                    start: aA.start.offset,
                    end: aA.end.offset
                })
            } else {
                t({
                    treeElementsWalker: aU,
                    treeTextNodesWalker: aF
                }, aK[aQ], null)
            }
        }
        var aX = [];
        for (aQ = 0; aQ < r.length; aQ++) {
            aX = aX.concat(r[aQ].excludeNodes)
        }
        if (W.globalRemoveCorrectionMarks(aP, aX)) {
            w = true
        }
        var aT = W.getTreeWalker(aP, aD.SHOW_TEXT);
        for (aQ = 0; aQ < r.length; aQ++) {
            aM = r[aQ].uiPhrase;
            var aI = ai.uiPhraseManager.getPhraseFromUiPhrase(aM),
                aW = aI ? aI.getSpellingOnly() : false;
            if (W.addCorrectionMarksWorker({
                    treeWalker: aT,
                    uiPhrase: aM,
                    phrase: aI,
                    markSegments: r[aQ].markSegments,
                    element: aP,
                    type: ai.getType(),
                    spellingOnly: aW
                })) {
                if (E.loggerOn()) {
                    E.logDebug('Updated marks in phrase: "' + r[aQ].uiPhrase.getCleanText() + '"')
                }
                w = true
            }
            if (r[aQ].markSegments.length > 0 && r[aQ].markSegments[0].markNode) {
                Z.showFirstCorrectionMarkMessage({
                    nodes: $.map(r[aQ].markSegments, function(aY) {
                        return aY.markNode
                    })
                })
            }
        }(function aN() {
            var aY = [];
            ai.uiPhraseManager.iterateItems(function(a0) {
                var aZ = a0.getInText();
                if (!aZ) {
                    aY.push(a0)
                }
            });
            $.each(aY, function(aZ, a0) {
                a0.remove()
            })
        })();
        r = [];
        S.background.forceGC()
    };
    var f = function() {
        var aA = c.getApiKey();
        if (!aA) {
            W.globalRemoveCorrectionMarks(ai.getElement())
        } else {
            ap = V.getBookmark(ai.getElement());
            if (!!ai.getTextInputManager() && !!ai.getTextInputManager().updateContent) {
                ai.getTextInputManager().updateContent()
            }
            if (!s.DISABLE_MARKUP) {
                R()
            }
            if (ap && (w || s.ALWAYS_RESTORE_BOOKMARK)) {
                if (ai.getElement().normalize) {
                    ai.getElement().normalize()
                }
                if (!s.NEVER_RESTORE_BOOKMARK) {
                    ap.move()
                }
                w = false
            }
            ai.updateUndoRedoAfterEdit(ai.getContents(), ap.encode());
            if (U) {
                U.bookmark.move();
                U = null
            }
        }
    };
    var F = function(aA, aB) {
        ai = aA;
        X = aB || null;
        aq[ai] = new Date().getTime();
        f();
        x = false
    };
    var T = function(aB, aA) {
        var aC = ad(aB);
        if (aC) {
            F(aC, aA || {})
        } else {
            if (E.loggerOn()) {
                E.logError("Could not find control to match element = " + (aB || {}).nodeName + "/" + (aB || {}).nodeType)
            }
        }
    };
    var q = function(aD, aA, aB) {
        aA = !!aA;
        aB = !!aB;
        for (var aC = 0; aC < L.length; aC++) {
            if ((!aB && L[aC].getRichTextElement() === aD) || (!aA && !!L[aC].getTextInputManager() && L[aC].getTextInputManager().textInput === aD)) {
                return L[aC]
            }
        }
        return null
    };
    var ad = function(aA) {
        return q(aA, true, false)
    };
    var D = function(aA) {
        return q(aA, false, true)
    };
    var a = function() {
        E.init();

        function aA() {
            ab(document)
        }

        function aC() {
            var aJ = aq[ai];
            var aH = new Date().getTime(),
                aK = aH - aJ;
            if (isNaN(aJ) || aK >= aw) {
                if (ai) {
                    var aF = ai.getElement(),
                        aG = N.getDocumentContext(aF),
                        aI = N.isNodeInContainer(aG.documentElement, aF);
                    if (aI) {
                        ai.setIdleTimer()
                    } else {
                        Q.detachControl(ai)
                    }
                }
            }
        }

        function aB() {
            var aF = an.isSafariExtension;
            if (!aF || (aF && window.top === window)) {
                $("body").append('<div id="GingerWidgetInfo" style="display:none;">' + JSON.stringify($.extend({
                    version: s.VERSION
                }, N.getExtensionInfo())) + "</div>")
            }
        }

        function aD() {
            $(document).ready(function() {
                aA();
                setInterval(aA, 1000);
                setInterval(aC, aw);
                aB();
                Y()
            });
            A()
        }

        function aE() {
            y();
            S.background.getInitParams(function(aF) {
                if (aF) {
                    M.setUserId(aF.userId);
                    M.setIsLoggedIn(aF.isLoggedIn);
                    M.setMachineId(aF.machineId);
                    if (aF.apiKey !== null) {
                        c.setApiKey(aF.apiKey)
                    }
                    c.setTrackingSource(aF.trackingSource);
                    c.setAbType(aF.abType);
                    c.setGaCategory(aF.gaCategory);
                    c.setLastPhraseInEnglish(aF.isLastPhraseLanguageEnglish);
                    c.setForceUseHttps(aF.forceUseHttps);
                    c.setMenuMode(aF.menuMode);
                    c.setDisableOTF(aF.disableOTF);
                    c.setAllowShowMessages(aF.allowShowMessages);
                    c.setLastKeepAliveTime(aF.lastKeepAliveTime);
                    if (aF.messagesInitialParameters) {
                        c.setMessagesInitialParameters(aF.messagesInitialParameters)
                    }
                    $(ae).trigger(ae.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE);
                    ax = true;
                    aD()
                } else {
                    setTimeout(aE, 100)
                }
            })
        }
        S.background.ready(aE)
    };
    var y = function() {
        $(ae).bind(ae.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE, function(aA, aB) {
            u()
        })
    };
    var u = function() {
        var aL = c.getLocalStorageViaDOM(),
            aG = "lastKeepAliveTime";
        var aE = c.getLastKeepAliveTime();
        if (an.isExtensionMode || aL) {
            var aA = false,
                aD = null,
                aF = 1000 * 60 * 60 * 12;
            if (aE) {
                var aH = N.time.parseDateFromMilli(aE),
                    aB = new Date();
                if (aH) {
                    var aI = new Date(aH.getFullYear(), aH.getMonth(), aH.getDate());
                    var aC = new Date(aB.getFullYear(), aB.getMonth(), aB.getDate());
                    aA = aC > aI
                } else {
                    aA = true
                }
            } else {
                aA = true
            }
            if (aA) {
                aD = new Date();
                o.reportKeepAlive();
                var aK = aD.getTime();
                if (aL) {
                    var aJ = [{
                        key: aG,
                        value: aK
                    }];
                    z.sendMessage({
                        msg: s.SET_STORAGE_VALUES_CMD,
                        values: aJ
                    })
                } else {
                    S.background.setLastKeepAliveTime(aK)
                }
                c.setLastKeepAliveTime(aK)
            }
            clearTimeout(G);
            G = setTimeout(function() {
                u()
            }, aF)
        }
    };
    var K = function(aA) {
        $.each(aA, function(aC, aB) {
            J(aB.token)
        })
    };
    var J = function(aA) {
        if (E.loggerOn()) {
            E.logInfo("Ignoring: " + aA)
        }
        var aB = aj.getOrCreateItem({
            Text: aA
        });
        aB.setIgnored(true);
        $.each(L, function(aC, aD) {
            aD && e(aA, aD);
            aD && aD.setIdleTimer()
        })
    };
    var j = function(aC) {
        var aA = function() {
            if (typeof aC === "function") {
                aC()
            }
        };
        var aB = new Date();
        if (k.valueOf() + s.POLL_USER_INFO_TIMEOUT < aB.valueOf()) {
            k = aB;
            S.background.getUserInfo(function(aD) {
                if (aD) {
                    M.setUserId(aD.userId);
                    M.setIsLoggedIn(aD.isLoggedIn)
                }
                aA()
            })
        } else {
            aA()
        }
    };
    var A = function() {
        $(ae).bind(ae.REPLACE_PHRASE, function(aC, aD) {
            var aE = aD.tokensToReplaceList,
                aA = aD.control.getTextInputManager(),
                aB = aD.mistakeSpan;
            $.each(aE, function(aH, aI) {
                var aF = "[" + s.MARK_GUID_ATTR + '="' + aI.markGuid + '"]';
                var aG = $("." + s.MARK_CONTEXT_CLASS + aF + ", ." + s.MARK_SPELLING_CONTEXT_CLASS + aF, aD.doc);
                if (aG.length === 0) {
                    if (E.loggerOn()) {
                        E.logError("replacePhrase: no node found for token guid: " + aI.markGuid)
                    }
                } else {
                    W.removeMark(aG[0], aI.text)
                }
            });
            if (aA) {
                aA.populateCorrection(aB)
            }
        });
        $(ae).bind(ae.IGNORE_TOKEN, function(aB, aC) {
            J(aC.token);
            var aA = aC.control.getTextInputManager();
            if (aA) {
                aA.populateCorrection(aC.mistakeSpan)
            }
        });
        $(ae).bind(ae.IGNORE_TOKENS, function(aB, aC) {
            K(aC.ignoredTokens);
            var aA = aC.control.getTextInputManager();
            if (aA) {
                aA.populateCorrection(aC.mistakeSpan)
            }
        });
        $(ae).bind(ae.CACHE_NEW_SENTENCE, function(aA, aB) {
            ay(aB)
        });
        $(ae).bind(ae.APPROVE_CORRECTIONS, function(aA, aB) {
            l.reportApprovals(aB.approvals)
        });
        $(ae).bind(ae.EXTERNAL_INIT_PARAMS, function(aA, aB) {
            if (ax) {
                $(ae).trigger(ae.EXECUTION_CONTEXT_INIT_PARAMS_COMPLETE)
            }
        })
    };
    var ak = function(aA) {
        c.setLastPhraseInEnglish(aA);
        setTimeout(function() {
            S.background.setIsLastPhraseEnglish(aA)
        }, 100)
    };
    var aa = function() {
        $.each(L, function(aA, aB) {
            aB && aB.setIdleTimer()
        })
    };
    var al = function() {
        var aC = ["." + s.MARK_CONTEXT_CLASS, "." + s.MARK_SPELLING_CONTEXT_CLASS, "." + s.MARK_NOCONTEXT_CLASS];
        var aB = null,
            aA = [];
        var aD = function(aG) {
            var aF = N.display.getOffsetInRootDoc(aG),
                aE = $(aG);
            return N.display.isRectangleInView(document, {
                left: aF.left,
                top: aF.top,
                width: aE.width(),
                height: aE.height()
            })
        };
        $.each(L, function(aF, aH) {
            var aE = $(aH.getRichTextElement()),
                aG = aE.find(aC.join(", "));
            aA = aA.concat($.map(aG, function(aI) {
                return aI
            }))
        });
        return aA
    };
    return {
        load: g,
        enableDisableControls: aa,
        addControlsToControlList: P,
        removeControlsFromControlList: b,
        processControl: F,
        processElement: T,
        eventHandler: ac,
        focusHandler: am,
        documentKeyHandler: i,
        getControlByNode: q,
        getControlByTextInput: D,
        getControlByRichText: ad,
        getAllMarkNodes: al
    }
})();
(function() {
    var h = function() {
        var i = function() {
            return window.top == window
        };
        return window.top && !(window.top === window || i())
    };
    var b = function() {
        return (window.frameElement) || (document.defaultView && document.defaultView.frameElement)
    };
    if (h() || b()) {
        //return
    }
    var g = ["browser", "logger", "appModel", "managerCreator", "tokensManagerInitializer", "phraseManagerInitializer", "utils", "utils.display", "utils.misc", "domStorageComm", "messagesStorage", "messagesManager", "initParams", "comm", "trackingEvent", "trackingManager", "userManager", "protocol", "editControl", "staticUtils", "bookmark", "API", "textInputManager", "contextMenuManager", "bubbleMenuManager", "menuController", "learningManager", "controlsFinder", "mainController"];
    for (var a = 0, f = g.length; a < f; a++) {
        var d = g[a],
            e = GS_WEB_WIDGET.namespace(d);
        if (e.hasOwnProperty("load")) {
            e.load()
        }
    }(function c() {
        var i = GS_WEB_WIDGET.namespace("context");
        $(i).trigger(i.LOAD_COMPLETE)
    })()
})();
var gingerWidgetIdentifierFunc = function() {
    return true
};

