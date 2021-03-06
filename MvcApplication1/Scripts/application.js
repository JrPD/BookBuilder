﻿!function (t, e) {
    "use strict"; var n = e.prototype.trim,
        i = e.prototype.trimRight,
        s = e.prototype.trimLeft,
        r = function (t) { return 1 * t || 0 },
        a = function (t, e) {
            if (1 > e) return ""; for (var n = ""; e > 0;) 1 & e && (n += t),
                e >>= 1, t += t; return n
        }, o = [].slice,
        l = function (t) { return null == t ? "\\s" : t.source ? t.source : "[" + d.escapeRegExp(t) + "]" },
        c = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" },
        p = {}; for (var u in c) p[c[u]] = u;
        var h = function() {

            function t(t) {
                return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
            }

            var n = a,
                i = function() {
                    return i.cache.hasOwnProperty(arguments[0]) ||
                        (i.cache[arguments[0]] = i.parse(arguments[0])),
                        i.format.call(null,
                            i.cache[arguments[0]], arguments)
                };

            return i.format = function(i, s) {
                var r, a, o, l, c, p, u, d = 1, f = i.length, m = "", _ = [];
                for (a = 0; f > a; a++)
                    if (m = t(i[a]), "string" === m) _.push(i[a]);
                    else if ("array" === m) {
                        if (l = i[a], l[2])
                            for (r = s[d], o = 0; o < l[2].length; o++) {
                                if (!r.hasOwnProperty(l[2][o])) throw new Error(h('[_.sprintf] property "%s" does not exist', l[2][o]));
                                r = r[l[2][o]]
                            }
                        else r = l[1] ? s[l[1]] : s[d++];
                        if (/[^s]/.test(l[8]) && "number" != t(r)) throw new Error(h("[_.sprintf] expecting number but found %s", t(r)));
                        switch (l[8]) {
                        case "b":
                            r = r.toString(2);
                            break;
                        case "c":
                            r = e.fromCharCode(r);
                            break;
                        case "d":
                            r = parseInt(r, 10);
                            break;
                        case "e":
                            r = l[7] ? r.toExponential(l[7]) : r.toExponential();
                            break;
                        case "f":
                            r = l[7] ? parseFloat(r).toFixed(l[7]) : parseFloat(r);
                            break;
                        case "o":
                            r = r.toString(8);
                            break;
                        case "s":
                            r = (r = e(r)) && l[7] ? r.substring(0, l[7]) : r;
                            break;
                        case "u":
                            r = Math.abs(r);
                            break;
                        case "x":
                            r = r.toString(16);
                            break;
                        case "X":
                            r = r.toString(16).toUpperCase()
                        }
                        r = /[def]/.test(l[8]) && l[3] && r >= 0 ? "+" + r : r, p = l[4] ? "0" == l[4] ? "0" : l[4].charAt(1) : " ", u = l[6] - e(r).length, c = l[6] ? n(p, u) : "", _.push(l[5] ? r + c : c + r)
                    }
                return _.join("")
            }, i.cache = {}, i.parse = function(t) {
                for (var e = t, n = [], i = [], s = 0; e;) {
                    if (null !== (n = /^[^\x25]+/.exec(e))) i.push(n[0]);
                    else if (null !== (n = /^\x25{2}/.exec(e))) i.push("%");
                    else {
                        if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))) throw new Error("[_.sprintf] huh?");
                        if (n[2]) {
                            s |= 1;
                            var r = [], a = n[2], o = [];
                            if (null === (o = /^([a-z_][a-z_\d]*)/i.exec(a))) throw new Error("[_.sprintf] huh?");
                            for (r.push(o[1]); "" !== (a = a.substring(o[0].length));)
                                if (null !== (o = /^\.([a-z_][a-z_\d]*)/i.exec(a))) r.push(o[1]);
                                else {
                                    if (null === (o = /^\[(\d+)\]/.exec(a))) throw new Error("[_.sprintf] huh?");
                                    r.push(o[1])
                                }
                            n[2] = r
                        } else s |= 2;
                        if (3 === s) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                        i.push(n)
                    }
                    e = e.substring(n[0].length)
                }
                return i
            }, i
        }(),
        d = {
                VERSION: "2.3.0",
                isBlank: function(t) { return null == t && (t = ""), /^\s*$/.test(t) },
                stripTags: function(t) { return null == t ? "" : e(t).replace(/<\/?[^>]+>/g, "") },
                capitalize: function(t) { return t = null == t ? "" : e(t), t.charAt(0).toUpperCase() + t.slice(1) },
                chop: function(t, n) { return null == t ? [] : (t = e(t), n = ~~n, n > 0 ? t.match(new RegExp(".{1," + n + "}", "g")) : [t]) },
                clean: function(t) { return d.strip(t).replace(/\s+/g, " ") },
                count: function(t, n) { return null == t || null == n ? 0 : e(t).split(n).length - 1 },
                chars: function(t) { return null == t ? [] : e(t).split("") },
                swapCase: function(t) { return null == t ? "" : e(t).replace(/\S/g, function(t) { return t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase() }) },
                escapeHTML: function(t) { return null == t ? "" : e(t).replace(/[&<>"']/g, function(t) { return "&" + p[t] + ";" }) },
                unescapeHTML: function(t) {return null == t ? "" : e(t).replace(/\&([^;]+);/g, function(t, n) {
                        var i;
                        return n in c ? c[n] : (i = n.match(/^#x([\da-fA-F]+)$/)) ? e.fromCharCode(parseInt(i[1], 16)) : (i = n.match(/^#(\d+)$/)) ? e.fromCharCode(~~i[1]) : t})},
                escapeRegExp: function(t) { return null == t ? "" : e(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") },
                splice: function(t, e, n, i) {
                    var s = d.chars(t);
                    return s.splice(~~e, ~~n, i), s.join("")},
                insert: function(t, e, n) { return d.splice(t, e, 0, n) },
                include: function(t, n) { return "" === n ? !0 : null == t ? !1 : -1 !== e(t).indexOf(n) },
                join: function() {
                    var t = o.call(arguments), e = t.shift();
                    return null == e && (e = ""), t.join(e)},
                lines: function(t) { return null == t ? [] : e(t).split("\n") },
                reverse: function(t) { return d.chars(t).reverse().join("") },
                startsWith: function(t, n) { return "" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(0, n.length) === n) },
                endsWith: function(t, n) { return "" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(t.length - n.length) === n) },
                succ: function(t) { return null == t ? "" : (t = e(t), t.slice(0, -1) + e.fromCharCode(t.charCodeAt(t.length - 1) + 1)) },
                titleize: function(t) { return null == t ? "" : e(t).replace(/(?:^|\s)\S/g, function(t) { return t.toUpperCase() }) },
                camelize: function(t) { return d.trim(t).replace(/[-_\s]+(.)?/g, function(t, e) { return e.toUpperCase() }) },
                underscored: function(t) { return d.trim(t).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase() },
                dasherize: function(t) { return d.trim(t).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase() },
                classify: function(t) { return d.titleize(e(t).replace(/_/g, " ")).replace(/\s/g, "") },
                humanize: function(t) { return d.capitalize(d.underscored(t).replace(/_id$/, "").replace(/_/g, " ")) },
                trim: function(t, i) { return null == t ? "" : !i && n ? n.call(t) : (i = l(i), e(t).replace(new RegExp("^" + i + "+|" + i + "+$", "g"), "")) },
                ltrim: function(t, n) { return null == t ? "" : !n && s ? s.call(t) : (n = l(n), e(t).replace(new RegExp("^" + n + "+"), "")) },
                rtrim: function(t, n) { return null == t ? "" : !n && i ? i.call(t) : (n = l(n), e(t).replace(new RegExp(n + "+$"), "")) },
                truncate: function(t, n, i) { return null == t ? "" : (t = e(t), i = i || "...", n = ~~n, t.length > n ? t.slice(0, n) + i : t) },
                prune: function(t, n, i) {
                    if (null == t) return "";
                    if (t = e(t), n = ~~n, i = null != i ? e(i) : "...", t.length <= n) return t;
                    var s = function(t) { return t.toUpperCase() !== t.toLowerCase() ? "A" : " " }, r = t.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, s);
                    return r = r.slice(r.length - 2).match(/\w\w/) ? r.replace(/\s*\S+$/, "") : d.rtrim(r.slice(0, r.length - 1)), (r + i).length > t.length ? t : t.slice(0, r.length) + i
                },
                words: function(t, e) { return d.isBlank(t) ? [] : d.trim(t, e).split(e || /\s+/) },
                pad: function(t, n, i, s) {
                    t = null == t ? "" : e(t), n = ~~n;
                    var r = 0;
                    switch (i ? i.length > 1 && (i = i.charAt(0)) : i = " ", s) {
                    case "right":
                        return r = n - t.length, t + a(i, r);
                    case "both":
                        return r = n - t.length, a(i, Math.ceil(r / 2)) + t + a(i, Math.floor(r / 2));
                    default:
                        return r = n - t.length, a(i, r) + t
                    }},
                lpad: function(t, e, n) { return d.pad(t, e, n) },
                rpad: function(t, e, n) { return d.pad(t, e, n, "right") },
                lrpad: function(t, e, n) { return d.pad(t, e, n, "both") },
                sprintf: h,
                vsprintf: function(t, e) { return e.unshift(t), h.apply(null, e) },
                toNumber: function(t, n) {
                    if (null == t || "" == t) return 0;
                    t = e(t);
                    var i = r(r(t).toFixed(~~n));
                    return 0 !== i || t.match(/^0+$/) ? i : Number.NaN
                },
                numberFormat: function(t, e, n, i) {
                    if (isNaN(t) || null == t) return "";
                    t = t.toFixed(~~e), i = i || ",";
                    var s = t.split("."), r = s[0], a = s[1] ? (n || ".") + s[1] : "";
                    return r.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + i) + a
                },
                strRight: function(t, n) {
                    if (null == t) return "";
                    t = e(t), n = null != n ? e(n) : n;
                    var i = n ? t.indexOf(n) : -1;
                    return ~i ? t.slice(i + n.length, t.length) : t
                },
                strRightBack: function(t, n) {
                    if (null == t) return "";
                    t = e(t), n = null != n ? e(n) : n;
                    var i = n ? t.lastIndexOf(n) : -1;
                    return ~i ? t.slice(i + n.length, t.length) : t
                },
                strLeft: function(t, n) {
                    if (null == t) return "";
                    t = e(t), n = null != n ? e(n) : n;
                    var i = n ? t.indexOf(n) : -1;
                    return ~i ? t.slice(0, i) : t
                },
                strLeftBack: function(t, e) {
                    if (null == t) return "";
                    t += "", e = null != e ? "" + e : e;
                    var n = t.lastIndexOf(e);
                    return ~n ? t.slice(0, n) : t
                },
                toSentence: function(t, e, n, i) {
                    e = e || ", ", n = n || " and ";
                    var s = t.slice(), r = s.pop();
                    return t.length > 2 && i && (n = d.rtrim(e) + n), s.length ? s.join(e) + n + r : r
                },
                toSentenceSerial: function() {
                    var t = o.call(arguments);
                    return t[3] = !0, d.toSentence.apply(d, t)
                },
                slugify: function(t) {
                    if (null == t) return "";
                    var n = "\xc4\u2026\xc3 \xc3\xa1\xc3\xa4\xc3\xa2\xc3\xa3\xc3\xa5\xc3\xa6\xc4\u2021\xc4\u2122\xc3\xa8\xc3\xa9\xc3\xab\xc3\xaa\xc3\xac\xc3\xad\xc3\xaf\xc3\xae\xc5\u201a\xc5\u201e\xc3\xb2\xc3\xb3\xc3\xb6\xc3\xb4\xc3\xb5\xc3\xb8\xc3\xb9\xc3\xba\xc3\xbc\xc3\xbb\xc3\xb1\xc3\xa7\xc5\xbc\xc5\xba", i = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", s = new RegExp(l(n), "g");
                    return t = e(t).toLowerCase().replace(s, function(t) {
                        var e = n.indexOf(t);
                        return i.charAt(e) || "-"
                    }), d.dasherize(t.replace(/[^\w\s-]/g, ""))
                },
                surround: function(t, e) { return [e, t, e].join("") },
                quote: function(t) { return d.surround(t, '"') },
                exports: function() {
                    var t = {};
                    for (var e in this) this.hasOwnProperty(e) && !e.match(/^(?:include|contains|reverse)$/) && (t[e] = this[e]);
                    return t
                },
                repeat: function(t, n, i) {
                    if (null == t) return "";
                    if (n = ~~n, null == i) return a(e(t), n);
                    for (var s = []; n > 0; s[--n] = t);
                    return s.join(i)
                },
                levenshtein: function(t, n) {
                    if (null == t && null == n) return 0;
                    if (null == t) return e(n).length;
                    if (null == n) return e(t).length;
                    t = e(t), n = e(n);
                    for (var i, s, r = [], a = 0; a <= n.length; a++) for (var o = 0; o <= t.length; o++) s = a && o ? t.charAt(o - 1) === n.charAt(a - 1) ? i : Math.min(r[o], r[o - 1], i) + 1 : a + o, i = r[o], r[o] = s;
                    return r.pop()
                }
            };
        d.strip = d.trim, d.lstrip = d.ltrim, d.rstrip = d.rtrim, d.center = d.lrpad, d.rjust = d.lpad, d.ljust = d.rpad, d.contains = d.include, d.q = d.quote,
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = d), exports._s = d) : "function" == typeof define && define.amd ? define("underscore.string", [],
            function () { return d }) : (t._ = t._ || {}, t._.string = t._.str = d)}(this, String),
//work with branches
function () {
    var t = [].indexOf ||
        function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        };
    _.mixin(_.string.exports()),
    app.helpers = {
        branch_existence:
            function (t, e, n, i, s)
            {
                var r; return r = new t.Branch({ branch_name: n }, { project: e }),
                  r.fetch({
                      success: function () { return i() },
                      error: function (t, e) { return 404 === e.status ? s() : i() }
                  })
            },
        git_sha1:
            function(t) {
                var e, n;
                return n = "blob " + t.length + "\x00",
                    e = new Hashes.SHA1, e.hex(n + t)
            },
        match_no_whitespace:
            function(t, e) {
                 return _(t).clean().trim() === _(e).clean().trim()
            },
        get_file_type:
                function(e) {
                    var n;
                    return n = this.get_extension(e),
                        t.call(app.constants.IMAGE_FILE_EXTS, n) >= 0 ? app.constants.IMAGE : app.constants.TEXT
                },
        get_extension:
            function (t) {
             var e; return e = t.split("."), 1 === e.length ? app.constants.FOLDER : e[e.length - 1].toLowerCase()
            },
        is_worker_compatible:
            function(t) {
                 return _.contains(app.constants.WORKER_COMPATIBLE_EXTS, app.helpers.get_extension(t.get("file_path")))
            },
        nth_last_folder:
            function(t, e) {
                 var n; return "" === t ? "" : (n = t.split("/"), _.times(e, function () { return n.pop() }), n.join("/"))
            },
        inputs_to_obj:
            function(t) {
                 var e; return e = {}, _.forEach(t, function (t) { return "checkbox" === t.type ? e[t.name] = t.checked ? !0 : !1 : "radio" !== t.type ? e[t.name] = t.value : t.checked ? e[t.name] = t.value : null == e[t.name] ? e[t.name] = !1 : void 0 }), e
            },
        slugify:
            function (t) {
             return t.toLowerCase().replace(/[^\w\- ]+/g, "").replace(/\ +/g, "-").replace(/\-+$/, "")
            },
        makeAbsolutePath:
            function(t, e) {
                 var n, i, s, r, a, o, l; for (r = t.split("/"), a = t.split("/"), n = e.split("/"), o = 0, l = r.length; l > o; o++) s = r[o], ".." === s && (n.shift(), a.shift()); return i = n.join("/") + a.join("/")
            },
        makeRelativePath:
            function(t, e) {
                 var n, i, s, r, a, o, l, c, p; if ("" === e) return t; for (o = t.split("/"), r = e.split("/"), l = t.split("/"), a = o[o.length - 1], ("" === a || -1 !== a.indexOf(".")) && o.pop(), s = r[r.length - 1], ("" === s || -1 !== s.indexOf(".")) && r.pop(), n = c = 0, p = r.length; p > c && (i = r[n], i === o[n]) ; n = ++c); return 0 === n ? _.times(r.length, function () { return l.unshift("..") }) : (_.times(n, function () { return l.shift(), r.shift() }), _.times(r.length, function () { return l.unshift("..") })), l.join("/")
            },
        gitlab_access_level:
            function(t) {
                 var e; return e = { 30: "Collaborator", 40: "Owner", 50: "Owner" }, _.has(e, "" + t) ? e["" + t] : ""
            },
        get_html_url:
            function(t) {
                 return "" + app.data.get("gitlab_url") + "/" + app.data.project.get("path_with_namespace") + "/raw/" + app.data.get("state").branch + "/" + t + "?private_token=" + app.data.gitlab.token
            },
        is_project_owner:
            function(t, e) {
                 return app.data.can_project("admin") && null == t.get("owner").email ? !0 : t.get("owner").email === e.email ? !0 : !1
            },
        is_active:
            function(t, e) {
                 return t === e ? "active" : ""
            },
        is_current_user:
            function(t) {
                 var e, n; if (null == ("undefined" != typeof app && null !== app && null != (e = app.data) && null != (n = e.get("user")) ? n.nickname : void 0)) throw "Current user is not set"; return t !== app.data.get("user").nickname ? "" + t + "/" : ""
            },
        gravatar_url: function(t) {
                     return "https://secure.gravatar.com/avatar/" + (new Hashes.MD5).hex(t)
                },
        querystring: function() {
             return qs.parse(window.location.search.substr(1))
        },
        new_atlas_epoch: function () {
             return (new Date).getTime() - Date.UTC(2014, 1, 1)
        },
        beginning_of_epoch: function() {
             return Date.UTC(2014, 0, 1)
        },
        date_to_atlas_epoch: function(t) {
             if (t instanceof Date) t = t.getTime(); else if ("number" != typeof t && "number" != typeof (parseInt(t) || !1)) throw new Error("You must pass a Date or number to this date_to_atlas_epoch"); return parseInt(((t - this.beginning_of_epoch()) / 1e3).toFixed())
        },
        atlas_epoch_to_timestamp: function(t) {
             var e; if (e = parseInt(t) || !1, e === !1) throw new Error("You must pass an atlas epoch number to atlas_epoch_to_timestamp"); return 1e3 * e + this.beginning_of_epoch()
        },
        branch_image: function(t, e) {
             var n, i; return this.is_atlas_branch(e) ? (i = e.split("-")[0], n = app.data.get("asset_url") + ("/" + i + "/avatar"), "<img src='" + n + "'>") : this.is_merge_branch(e) ? "<i class='glyphicons git_pull_request'></i>" : this.is_branch_locked(t, e) ? "<i class='glyphicons lock'></i>" : "<i class='glyphicons unlock'></i>"
        },
        is_atlas_branch: function(t) {
             return null == t ? !1 : t.match(/^\w+\-at\d{4,}$/) ? !0 : !1
        },
        is_merge_branch: function(t) {
             return null == t ? !1 : t.match(/^\w+\-atmr\d{4,}$/) ? !0 : !1
        },
        is_archive_branch: function(t) {
             return null == t ? !1 : t.match(/^\w+\-at\d{4,}-archive$/) ? !0 : !1
        },
        is_hidden_branch: function(t) {
             return this.is_merge_branch(t) || this.is_archive_branch(t)
        },
        branch_name: function(t) {
             return app.helpers.is_atlas_branch(t) ? t.split("-")[0] : app.helpers.is_merge_branch(t) ? "merge " + t.split("-")[0] : t
        },
        is_branch_locked: function(t, e) {
             return app.data.can_project("admin") ? !1 : app.data.can_project("push") && this.is_own_branch(t, e) ? !1 : !0
        },
        is_own_branch: function(t, e) {
             return t === this.branch_name(e) && !this.is_merge_branch(e)
        },
        fromNow: function(t) {
             return moment(t).fromNow()
        },
        absoluteTime: function(t) {
             return moment(t).format("LLL")
        },
        is_branch_dirty: function(t, e, n, i) {
             var s; if (null == n && (n = ""), null == i) throw "Must provide a callback"; return s = new app.data.gitlab.Branch({ name: e }, { project: t }), s.fetch({ success: function () { return i(null, s.get("commit").id === n) }, error: function () { return i("Error fetching branch") } })
        },
        disable_stylesheets: function(t) {
             var e, n, i; return i = document.styleSheets, n = document.getElementById(t), null == n ? !1 : (e = _.filter(i, function (t) { return app.helpers.isDescendant(n, t.ownerNode) }), _.each(e, function (t) { var e; for (e = []; t.rules.length > 0;) e.push(t.deleteRule(0)); return e }), !0)
        },
        is_valid_xml: function(t) {
             var e; t = t.replace(/&\S*?;/g, ""), t = "<div>" + t + "</div>"; try { e = $.parseXML(t) } catch (n) { e = !1 } return e ? !0 : !1
        },
        get_xml_error: function(t) {
             var e, n, i; return t = t.replace(/&\S*?;/g, ""), n = new DOMParser, i = n.parseFromString(t, "application/xml"), e = $("parsererror", i), e.length ? e.text().split("\n")[0] : !1
        },
        isDescendant: function(t, e) {
             var n; for (n = e.parentNode; null !== n;) { if (n === t) return !0; n = n.parentNode } return !1
        },
        parse_build_message: function(t) {
             var e; return _.isObject(t) ? (e = _.map(t, function (t, e) { var n; return n = "", t.length > 0 ? (n += "<div class='message-details " + e + "-message-details'>", n += "<h4>" + e + "</h4>", n += "<ul>", _.isArray(t) ? _.each(t, function (t) { return "" !== t || " " !== t ? n += "<li>" + t + "</li>" : void 0 }) : n += "<li>" + t + "</li>", n += "</ul>", n += "</div>") : void 0 }), e.join("\n")) : t
        },
        getBuildIcon: function (t) {
             return t === app.constants.COMPLETED ? "<i class='icn-round icn-success glyphicons ok_2'></i>" : t === app.constants.FAILED ? "<i class='icn-round icn-error glyphicons remove_2'></i>" : "<i class='icn-round icn-info glyphicons roundabout'></i>"
        },
        default_label: function(t, e) {
             return t ? t : e
        },
        highlighted: function(t) {
             return t ? "highlighted" : ""
        }
    }
}.call(this),

function () {
    app.paths = {
        new_project_path: function ()
        { return "/new" },
        project_path: function () {
            var t; if (t = app.data.project.get("path_with_namespace"), !t)
                throw new Error(app.constants.ERROR_PATH + " app.data.project.path_with_namespace is not set");
            return "/" + t
        },
        project_branch_path: function () {
            var t; if (t = app.data.get("state").branch, !t)
                throw new Error(app.constants.ERROR_PATH + " app.data.get('state').branch is not set");
            return "master" === t ? this.project_path() : "" + this.project_path() + "/branch/" + t
        },
        editor_path: function (t, e) {
            var n; if (n = app.data.project.get("path_with_namespace"), !n)
                throw new Error(app.constants.ERROR_PATH + " app.data.project.path_with_namespace is not set");
            return "/" + n + "/editor/" + (e || "master") + "/" + t
        },
        builds_path: function () {
            var t; if (t = app.data.project.get("path_with_namespace"), !t)
                throw new Error(app.constants.ERROR_PATH + " app.data.project.path_with_namespace");
            return "/" + t + "/builds"
        },
        build_path: function (t) {
            var e; if (e = app.data.project.get("path_with_namespace"), !e)
                throw new Error(app.constants.ERROR_PATH + " app.data.project.path_with_namespace");
            return "/" + e + "/builds/" + t
        },
        new_build_path: function ()
        { return this.builds_path() + "/new" },
        branch_path: function (t, e, n)
        { return null == n || 0 === n.length ? t + "/" + e : t + "/" + e + "/" + n },
        compare_path: function (t)
        { var e; return e = app.data.project.get("path_with_namespace"), "/" + e + "/compare/" + t + "...master" }
    }
}.call(this),

function () {
    Handlebars.registerHelper("default", function (t, e) { return t ? t : e }),
    Handlebars.registerHelper("ifEquals", function (t, e, n) { return t === e ? n.fn(this) : n.inverse(this) }),
    Handlebars.registerHelper("ifIsType", function (t, e, n) { return t === e ? n.fn(this) : n.inverse(this) }),
    Handlebars.registerHelper("gravatarUrl", function (t) { return "https://secure.gravatar.com/avatar/" + (new Hashes.MD5).hex(t) }),
    Handlebars.registerHelper("codeLabel", function (t) { var e, n; return n = 864e5, e = Math.round(Math.abs(((new Date).getTime() - new Date(t.created_at).getTime()) / n)), e <= t.registration_code.days && t.active ? t.registration_code.days - e + " days left" : "Expired" }),
    Handlebars.registerHelper("getFileIcon", function (t) { var e; return e = app.helpers.get_file_type(t), e === app.constants.IMAGE ? "glyphicons picture" : "icon-file-text-alt" }),
    Handlebars.registerHelper("getBuildIcon", function (t) { return t === app.constants.COMPLETED ? "<i class='icn-round icn-success glyphicons ok_2'></i>" : t === app.constants.FAILED ? "<i class='icn-round icn-error glyphicons remove_2'></i>" : "<i class='icn-round icn-info glyphicons roundabout'></i>" }),
    Handlebars.registerHelper("parse_build_message",function (t) { var e; return _.isObject(t) ? (e = _.map(t, function (t, e) { var n; return n = "", t.length > 0 ? (n += "<div class='message-details " + e + "-message-details'>", n += "<h4>" + e + "</h4>", n += "<ul>", _.isArray(t) ? _.each(t, function (t) { return "" !== t || " " !== t ? n += "<li>" + t + "</li>" : void 0 }) : n += "<li>" + t + "</li>", n += "</ul>", n += "</div>") : void 0 }), e.join("\n")) : t }),
    Handlebars.registerHelper("highlighted", function (t) { return t ? "highlighted" : "" }),
    Handlebars.registerHelper("branch_image", app.helpers.branch_image),
    Handlebars.registerHelper("branch_name", app.helpers.branch_name),
    Handlebars.registerHelper("getAccessLevel", app.helpers.gitlab_access_level),
    Handlebars.registerHelper("getGitlabAccessLevel", app.helpers.gitlab_access_level),
    Handlebars.registerHelper("getFileType", app.helpers.get_file_type),
    Handlebars.registerHelper("project_path", app.paths.project_path),
    Handlebars.registerHelper("build_path", app.paths.build_path),
    Handlebars.registerHelper("is_active", app.helpers.is_active),
    Handlebars.registerHelper("parseShortcut", function (t) { var e, n, i, s, r; for (i = "Win" === window.navigator.platform.slice(0, 4) ? "<Ctrl>" : "\u2318", t = t.replace("meta", i), t = t.split(" "), e = s = 0, r = t.length; r > s; e = ++s) n = t[e], t[e] = "<code>" + n + "</code>"; return t.join("+") }),
    Handlebars.registerHelper("meta",
        function (t) { var e; return e = "Win" === window.navigator.platform.slice(0, 4) ? "<Ctrl>" : "\u2318", "" + e + "+" + t })
}.call(this),

function () {
    classes.CollectionMixin = {
        add: function(t, e) {
            var n; return this.views = null != (n = this.views) ? n : [], this.views.push(t),
                this.rendered && this.$el.append(t.render().el), e ? (t.$el.hide().addClass("added").slideDown(400),
                t.$el.doTimeout(600, function () { return t.$el.removeClass("added"), !1 })) : void 0
        },
        render: function(t) {
             return this.rendered = !0, t = null != t ? t : this.views, this.$el.empty(), _(t).each(function (t) { return $(this.el).append(t.render().el), t.delegateEvents() }, this), this
        },
        destroy: function(t, e) {
             var n; return n = _.find(this.views, function (e) { return e.model === t }), this.views = _.without(this.views, n), e ? n.$el.addClass("deleted").slideUp(400, function () { return n.remove(), !1 }) : this.rendered ? n.remove() : void 0
        },
        sort_by: function (t, e) {
            return 0 !== this.views.length ? (this.views = _.sortBy(this.views, function (e) { var n; return n = e.model.get(t), _.isString(n) && (n = n.toLowerCase()), n }),
                "desc" === e && this.views.reverse(), this.render(), this.trigger(app.events.SORT)) : void 0
        },
        filter: function (t, e) {
            var n, i; return n = _.filter(this.views,
                function(n) {
                     var i; return i = n.model.get(t), i && i.toLowerCase().match(new RegExp(e.toLowerCase(), "g"))
                }),
                _.each(n, function(t) {
                     return t.$el.show()
                }),
                i = _.difference(this.views, n),
                _.each(i, function (t) { return t.$el.hide() }),
                this.trigger(app.events.FILTER, n)
        }
    }
}.call(this),

function() {
    classes.ImageMixin = {
        events: { dragend: "dragended" },
        dragended: function (t) {
            return app.mailman.trigger(app.events.INSERT_IMAGE, this.model),
                t.preventDefault(), !1
        },
        clicked: function (t) { return t.preventDefault(), app.mailman.trigger(app.events.INSERT_IMAGE, this.model) },
        render: function () { return this.$el.attr("draggable", "true"), this }
    }
}.call(this),

function() {
    classes.MessageMixin = {
        show_message: function (t) {
            return this.messages && this.messages[t] ? (this.$(".message").remove(),
                this.$el.prepend(JST["shared/message"]({ message: this.messages[t], "class": t }))) : void 0
        }, hide_message: function (t) { return this.$(".message." + t).remove() }
    }
}.call(this),

function() {
    classes.AtlasApi = function () {
        function t() { } return t.update_file = function(t, e, n, i, s) {
            return $.ajax({
                type: "PUT",
                url: "/api/projects/" + t + "/files/" + n,
                data: { ref: e },
                success: i, error: s, dataType: "json"
            })
            },
            t.create_branch = function(t, e, n, i, s) {
                return $.ajax({
                    type: "POST",
                    url: "/api/projects/" + t + "/branches",
                    data: { branch_name: e, ref: n },
                    success: i,
                    error: s, dataType: "json"
                })
            },
            t.delete_branch = function (t, e, n, i) {
                 return $.ajax({
                     type: "DELETE",
                     url: "/api/projects/" + t + "/branches/" + e,
                     success: n,
                     error: i, dataType: "json"
                 })
            },
            t.create_review = function (t, e, n, i, s, r, a) {
                return $.ajax({
                    method: "POST", url: "/api/reviews",
                    data: { project: t, source_branch: e, target_branch: n, title: i, description: s },
                    success: r, error: a, dataType: "json"
                })
            }, t
    }()
}.call(this),

function () {
    var t, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; t = function (t) {
        function e() { return e.__super__.constructor.apply(this, arguments) } return n(e, t),
            e.prototype.defaults = { files: [], formats: {}, theme: "", title: "" },

            e.prototype.gitlab_defaults = { file_path: "atlas.json", name: "atlas.json", content: "" },
            e.prototype.initialize = function (t) { return null != t && null != t.branch && (this.branch = t.branch), this.opts = { encode: !0 } },
            e.prototype.fetch = function (t) { return t = t ? _.clone(t) : {}, app.data.project.blob("atlas.json", this.branch).fetch({ success: function (e) { return function (n) { var i, s; try { for (s = JSON.parse(n.get("content")) ; "string" == typeof s;) s = JSON.parse(s); if (e.gl_model = n, e.set(s), e.server_model = $.extend(!0, {}, s), t.success) return t.success() } catch (r) { return i = r, e.set(e.defaults), e.gl_model = new app.data.gitlab.Blob(e.gitlab_defaults, { project: app.data.project, branch: app.data.get("state").branch }), e.clear(), e.set({ "parse-error": !0 }), app.mailman.trigger(app.events.FLASH_ERROR, "Error parsing atlas.json: " + i.message) } } }(this), error: function (e) { return function () { return e.new_file = !0, e.gl_model = new app.data.gitlab.Blob(e.gitlab_defaults, { project: app.data.project, branch: app.data.get("state").branch }), t.error && t.error(), app.mailman.trigger(app.events.FLASH_WARNING, "This project has no configuration file, one will be created.") } }(this) }) }, e.prototype.save = function (t) {
                var e; return null == t && (t = {}), e = JSON.stringify(this.attributes, void 0, 2), this.gl_model.set("content", e),
                    this.gl_model.save(this.gl_model.attributes, _.extend(this.opts, t)), this.server_model = $.extend(!0, {}, this.attributes)
            },
            e.prototype.fetch_branch = function (t, e) { return this.branch = t, this.fetch(e) }, e.prototype.has_changed_since_save = function () { return !_.isEqual(this.server_model, this.toJSON()) }, e
    }(Backbone.Model), classes.AtlasJson = t
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Build = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),

            n.prototype.backboneClass = "Build",

            n.prototype.toJSON = function () { var t; return t = _.clone(this.attributes), t.status = _.map(t.status, function (t) { return t.isQueued = "queued" === t.status, t.isWorking = "working" === t.status, t.isCompleted = "completed" === t.status, t.isFailed = "failed" === t.status, t }), t }, n
    }(Backbone.Model)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Collaborator = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.destroy = function (t) { var e; return e = {}, this.collection && (e[this.collection.collaborator_type] = this.collection.collaborator_id), this.get("invited") && (e.invited = this.get("invited")), Backbone.Model.prototype.destroy.call(this, _.extend({ data: e, processData: !0 }, t)) }, n
    }(Backbone.Model)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Data = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.ERROR_NO_PROJECT = "you are calling can_project on app.data without a project", n.ERROR_NO_PERMISSIONS = "you are calling can_project on app.data without any project permissions",
            n.prototype.initialize = function () { return this.get("user") && this.get("gitlab_url") ? (this.set("gitlab_url", S(this.get("gitlab_url")).chompRight("/api/v3").s), this.init_gitlab()) : void 0 },
            n.prototype.init_gitlab = function () { var t; return this.get("user") && (t = this.get("user"), this.gitlab = new GitLab(this.get("gitlab_url") + "/api/v3", t.gitlab_token), this.gitlab.user.set({ email: t.email, username: t.nickname }), this.get("project")) ? this.project = this.gitlab.project(this.get("project").path_with_namespace) : void 0 },
            n.prototype.can_project = function (t) { if (!this.get("project")) throw new Error(this.constructor.ERROR_NO_PROJECT); if (!this.get("project").permissions) throw new Error(this.constructor.ERROR_NO_PERMISSIONS); return !!this.get("project").permissions[t] }, n
    }(Backbone.Model)
}.call(this),
function () { classes.DropDown = Backbone.Model.extend({ intialize: function () { return this }, setLabel: function (t) { return this.set("label", this.get(t)) } }) }.call(this),
function () {
    classes.MandrillEmail = Backbone.Model.extend({
        initialize: function (t) { if (null == (null != t ? t.key : void 0)) throw new Error("Instances of MandrillEmail must have an API key for Mandrill"); return this.key = t.key, this.set("to", []), this.set({ subject: "Default Subject", text: "", from_email: "atlas@oreilly.com", from_name: "Atlas", preserve_recipients: !1, headers: { "Reply-To": "atlas@oreilly.com" } }) }, add_recipients: function (t) { var e; return e = this.get("to"), _.forEach(t, function (t) { return "object" != typeof t ? console.log("Recipients must be objects", t) : null == t.email ? console.log("Recipients must have email addresses", t) : e.push(_.pick(t, "name", "email", "type")) }, this), this.set("to", e), e }, send: function (t) {
            var e; return e = this, $.ajax({ url: "https://mandrillapp.com/api/1.0/messages/send" + (t ? "-template" : "") + ".json", contentType: "application/json", dataType: "json", type: "POST", data: JSON.stringify({ key: this.key, message: this.attributes }) }).success(function (t, n) { return "success" === n && e.trigger("send:success"), app.mailman.trigger(app.events.FLASH_NOTICE, "Email sent successfully.") }).error(function () {
                return e.trigger("send:error"),
                    app.mailman.trigger(app.events.FLASH_ERROR, "There was an error sending this email. Please check <a href='https://mandrillapp.com/activity'>Mandrill.</a>")
            })
        }
    })
}.call(this),
classes.Flash = Backbone.Model.extend({ initialize: function () { } }), function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.LoginRegistrationCode = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.url = function () { var t; return t = "/api/login_registration_codes", this.get("id") && (t += "/" + this.get("code")), t }, n
    }(Backbone.Model)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Merge = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),

            n.prototype.ERROR_INIT = "You have to initialize this model with a project and merge_request_id property",
            n.prototype.initialize = function (t, e) { if (!e.project && !e.merge_request_id) throw this.ERROR_INIT; return this.project = e.project, this.merge_request_id = e.merge_request_id },
            n.prototype.url = function () { var t; return t = "/api/merges", this.id && (t += "/" + this.id), t },
            n.prototype.save = function (t, e) { return t.project = this.project, t.merge_request_id = this.merge_request_id, Backbone.Model.prototype.save.call(this, t, e) },
            n.prototype.fetch = function (t) { return Backbone.Model.prototype.fetch.call(this, _.extend({ data: { project: this.project } }, t)) }, n
    }(Backbone.Model)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, n) {
        function i() {
            this.constructor = e
        } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        }; classes.RegistrationCode = function (t)
        {
            function n()
            { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
                n.prototype.url = function ()
            { var t; return t = "/api/registration_codes", this.get("id") && (t += "/" + this.get("id")), t }, n
        }(Backbone.Model)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Squash = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.ERROR_INIT = "You have to initialize this model with a project and branch property",
            n.prototype.initialize = function (t, e) { if (!e.project && !e.branch) throw this.ERROR_INIT; return this.project = e.project, this.branch = e.branch },
            n.prototype.url = function () { var t; return t = "/api/squashes", this.id && (t += "/" + this.id), t },
            n.prototype.save = function (t, e) { return t.project = this.project, t.branch = this.branch, Backbone.Model.prototype.save.call(this, t, e) },
            n.prototype.fetch = function (t) { return Backbone.Model.prototype.fetch.call(this, _.extend({ data: { project: this.project } }, t)) }, n
    }(Backbone.Model)
}.call(this),
function () { var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Token = function (t) { function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n }(Backbone.Model) }.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.User = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { }, n
    }(Backbone.Model)
}.call(this),
function () { var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.UserSettings = function (e) { function i() { return this.url = t(this.url, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.initialize = function (t, e) { if (e = e || {}, !e.model) throw "You have to initialize UserSettings with a GitLab.User model"; return this.model = e.model }, i.prototype.url = function () { return "/api/users/" + this.model.nickname + "/settings" }, i }(Backbone.Model) }.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Builds = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.model = classes.Build,
            n.prototype.url = function () { return "/api/builds" },
            n.prototype.initialize = function (t, e) { if (null == e && (e = {}), !e.project) throw classes.Builds.ERROR_INIT_NO_PROJECT; return this.project = e.project },
            n.prototype.fetch = function (t) {
                return Backbone.Collectio
                n.prototype.fetch.call(this, _.extend({ data: { project: this.project } }, t))
            },
            n.prototype.create = function (t, e) {
                return t.project = this.project, Backbone.Collectio
                n.prototype.create.call(this, t, e)
            },
            n.prototype.comparator = function (t) { return -t.get("created_at") }, n
    }(Backbone.Collection), classes.Builds.ERROR_INIT_NO_PROJECT = "You have to initialize this collection with a project path"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Collaborators = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.model = classes.Collaborator,
            n.prototype.url = function () { return "/api/collaborators" },
            n.prototype.initialize = function (t, e) { if (null == e && (e = {}), !e.project && !e.group) throw classes.Collaborators.ERROR_INIT; return null != e.project ? (this.collaborator_type = "project", this.collaborator_id = e.project) : (this.collaborator_type = "group_id", this.collaborator_id = e.group) },
            n.prototype.fetch = function (t) {
                var e; return e = {}, e[this.collaborator_type] = this.collaborator_id, Backbone.Collectio
                n.prototype.fetch.call(this, _.extend({ data: e }, t))
            },
            n.prototype.create = function (t, e) {
                return t[this.collaborator_type] = this.collaborator_id, Backbone.Collectio
                n.prototype.create.call(this, t, e)
            }, n
    }(Backbone.Collection), classes.Collaborators.ERROR_INIT = "You have to initialize this collection with a project path or group id"
}.call(this),
function () { classes.DropDownCollection = Backbone.Collection.extend({ model: classes.DropDown }) }.call(this), classes.FlashCollection = Backbone.Collection.extend({ model: classes.Flash }), function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.LoginRegistrationCodes = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.url = "/api/login_registration_codes",
            n.prototype.model = classes.LoginRegistrationCode, n
    }(Backbone.Collection)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.RegistrationCodes = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.url = function () { return "/api/registration_codes" },
            n.prototype.model = classes.RegistrationCode, n
    }(Backbone.Collection)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.Tokens = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.model = classes.Token,
            n.prototype.url = function () { return "/api/tokens" }, n
    }(Backbone.Collection)
}.call(this),
function () { var t, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; t = function (t) { function e() { return e.__super__.constructor.apply(this, arguments) } return n(e, t), e.prototype.model = classes.User, e }(Backbone.Collection), classes.Users = t }.call(this),

function () {
    this.JST || (this.JST = {}), this.JST["templates/shared/branch_banner"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                app.helpers.is_own_branch(this.user.nickname, this.current_branch) ? (n.push('\n  <span class="branch-message">\n    This is your branch '),
                    n.push(i(this.project.path_with_namespace)), n.push('\n  </span>\n  <div id="branch-action-btn"></div>\n')) : null != this.own_branch ? (n.push('\n  <span class="branch-message">\n    Go to your branch to edit\n  </span>\n  <a href="'),
                n.push(i(app.paths.branch_path(this.current_page, this.own_branch, app.data.get("state").path))),
                n.push('" id="goto-branch" class="branch-button btn pull-right">\n    Go to '),
                n.push(i(this.user.nickname)),
                n.push(" branch\n  </a>\n")) : n.push(app.helpers.is_branch_locked(this.user.nickname, this.current_branch) ? '\n  <span class="branch-message">\n    Create a branch to edit files.\n  </span>\n  <a href="#" id="create-branch" class="branch-button btn pull-right">\n    Add a branch\n  </a>\n' : '\n  <span class="branch-message">\n    Create a new branch, or edit this one directly.\n  </span>\n  <a href="#" id="create-branch" class="branch-button btn pull-right">\n    Add a branch\n  </a>\n'),
                n.push("\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/shared/branches"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s, r; for (n.push("<button class='btn current-branch span3'>\n  <div class=\"branch-image\">\n    "),
                    n.push(app.helpers.branch_image(this.current_nickname, this.current_branch)),
                    n.push('\n  </div>\n  <i class="glyphicons git_branch"></i><div class="current-branch-name">'),
                    n.push(i(app.helpers.branch_name(this.current_branch))),
                    n.push('</div>\n  <a class="icon-angle-down drop-select"></a>\n</button>\n\n<div class="branch-callout-container span9"></div>\n\n<div class=\'branch-select\' style=\'display:none;\'>\n  <div class="box-top">\n    <h3>Select a branch</h3>\n  </div>\n  <ul class="list branches-list">\n    '), r = _.filter(this.branches, function (t) { return !app.helpers.is_hidden_branch(t) }), e = 0, s = r.length; s > e; e++) t = r[e],
                        n.push('\n    <li class="list-item">\n      <a data-branch-name="'),
                        n.push(i(t)),
                        n.push('" class="branch-list-item" href="'),
                        n.push(i(app.paths.branch_path(this.current_page, t, app.data.get("state").path))),
                        n.push('">\n        <div class="branch-image">\n          '),
                        n.push(app.helpers.branch_image(this.current_nickname, t)),
                        n.push('\n        </div>\n        <span class="branch-name">'),
                        n.push(i(app.helpers.branch_name(t))),
                        n.push("</span>\n        "), t === this.current_branch &&
                        n.push('\n        <i class="glyphicons ok_2 selected-branch"></i>\n        '),
                        n.push("\n      </a>\n    </li>\n    ");
                n.push("\n  </ul>\n</div>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/shared/breadcrumbs"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {

    n.push('<div class="row down60">\n  <div class="span8">\n    <h1 id="project-title"><a href="/'),
    n.push(i(this.project.path_with_namespace)),
    n.push('">'),
    n.push(i(this.project.owner.username)),
    n.push(" / "),
    n.push(i(this.project.path)),
    n.push('</a></h1>\n  </div>\n\n  <div class="span4 align-right" id="project-nav">\n    <a class="'),
    n.push(i(app.helpers.is_active("activity", this.breadcrumb))),
    n.push('" href="/'),
    n.push(i(this.project.path_with_namespace)),
    n.push('/activity">\n       <i class="glyphicons cardio"></i> Activity\n    </a>\n    <a id="project-settings-link" class="'),
    n.push(i(app.helpers.is_active("settings", this.breadcrumb))),
    n.push('" href="/'),
    n.push(i(this.project.path_with_namespace)),
    n.push('/settings">\n      <i class="glyphicons cogwheel"></i> Project Settings\n    </a>\n  </div>\n</div>\n\n'), this.has_branches && (
    n.push('\n<div class="row-fluid" id="branches-container">\n</div>\n\n<div class=\'row-fluid\'>\n  <ul id="project-tabs" >\n    <li>\n      <a id="project-dashboard-link" class="'),
    n.push(i(app.helpers.is_active("dashboard", this.breadcrumb))),
    n.push('" href="'),
    n.push(i(this.dashboard_link)),
    n.push('">\n        Dashboard\n      </a>\n    </li>\n    <li>\n      <a id="project-configure-link" class="'),
    n.push(i(app.helpers.is_active("configure", this.breadcrumb))),
    n.push('" href="'),
    n.push(i(this.configure_link)),
    n.push('">\n        Configure\n      </a>\n    </li>\n    <li>\n      <a id="project-builds-link" class="'),
    n.push(i(app.helpers.is_active("builds", this.breadcrumb))),
    n.push('" href="'),
    n.push(i(this.builds_link)),
    n.push('">\n        Builds\n      </a>\n    </li>\n    '), "master" === this.branch ? (
    n.push('\n        <li>\n          <a id="review-link" class="'),
    n.push(i(app.helpers.is_active("reviews", this.breadcrumb))),
    n.push('" href="'),
    n.push(i(this.reviews_link)),
    n.push('">\n            Review <span id="review-count"></span>\n          </a>\n        </li>\n    ')) : (
    n.push('\n    <li>\n      <a id="project-compare-link" class="'),
    n.push(i(app.helpers.is_active("compare", this.breadcrumb))),
    n.push('" href="'),
    n.push(i(this.compare_link)),
    n.push('">\n        Compare\n      </a>\n    </li>\n    ')),
    n.push("\n\n  </ul>\n</div>\n")),
    n.push("\n")
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/shared/build_list_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s, r; for (
                    n.push("<div class='build box "),
                    n.push(i(app.helpers.highlighted(this.highlighted))),
                    n.push('\'>\n  <div class="box-top">\n    <img class="build-user-image" src="'),
                    n.push(i(this.user.avatar)),
                    n.push('" title="'),
                    n.push(i(this.user.nickname)),
                    n.push('"/>\n    <span class="build-branch"><i class=\'glyphicons git_branch\'></i><span class="build-branch-name">'),
                    n.push(i(app.helpers.branch_name(this.branch))),
                    n.push('</span></span> <span title="'),
                    n.push(i(app.helpers.absoluteTime(this.created_at))),
                    n.push('" class="pull-right">'),
                    n.push(i(app.helpers.fromNow(this.created_at))),
                    n.push("</span>\n  </div>\n  <ul class='list'>\n  "), r = this.status, e = 0, s = r.length; s > e; e++) t = r[e],
                        n.push("\n    <li class='build-format list-item' data-index=\""),
                        n.push(i(t.index)),
                        n.push('">\n      '),
                        n.push(app.helpers.getBuildIcon(t.status)),
                        n.push("\n      <span class='format'>"),
                        n.push(i(t.format)),
                        n.push("</span>\n      <span class='status "),
                        n.push(i(t.status)),
                        n.push("'>\n        "), t.isCompleted && (
                        n.push("\n          <a href='"),
                        n.push(i(t.download_url)),
                        n.push('\' target="_blank" class="pull-right">Download</a>\n        ')),
                        n.push("\n      </span>\n    </li>\n  ");
                n.push('\n  </ul>\n  <div class="box-bottom">\n    <a href="'),
                n.push(i(app.paths.build_path(this.id))),
                n.push('" class="build-log-btn">Build Log</a>\n  </div>\n</div>\n')
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/shared/collaborator_list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
    n.push('<img src="'),
   n.push(i(null != this.avatar_url ? this.avatar_url.replace(/(\?.*$)/, "") : app.helpers.gravatar_url(this.email))),
    n.push('?s=32" class="collaborator-image"> '),
    n.push(i(this.avatar_url ? this.username : this.email)),
    n.push('\n\n<div class="pull-right">\n  '), "pending" === this.invited ? (
    n.push('\n    <span class="invited-email">Invitation email sent!</span>\n    '), this.isOwner ||
    n.push('\n      <a href="#" class="remove-collaborator icn-round icn-error glyphicons remove_2"></a>\n    '),
    n.push("\n  ")) : (
    n.push('\n    <span class="permission-level">'),
    n.push(i(app.helpers.gitlab_access_level(this.permission_level))),
    n.push("</span>\n    "), this.isOwner ||
    n.push('\n      <a href="#" class="remove-collaborator icn-round icn-error glyphicons remove_2"></a>\n    '),
    n.push("\n  ")),
    n.push("\n</div>\n")
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/shared/feedback"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
    n.push("<"),
   n.push(i(this.buttonTag)),
    n.push(' class="'),
    n.push(i(this.classes.join(" "))),
    n.push(' provide-feedback">'),
    n.push(i(this.label)),
    n.push("</"),
    n.push(i(this.buttonTag)),
    n.push('>\n\n<div class="modal hide feedback-form" role="dialog">\n  <form>\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal">\xd7</button>\n      <h3 id="myModalLabel">Provide feedback</h3>\n    </div>\n    <div class="modal-body">\n      <p>If you have any suggestions for the page, or any problems currently, please let us know in the box below. We will record your username and some data from this current page to help us respond to your feedback better.</p>\n\n      <div class="row-fluid">\n      <textarea autofocus class="span12 feedback-comment"></textarea>\n      </div>\n      <div class="warning"></div>\n    </div>\n    <div class="modal-footer">\n\n      <button class="btn" data-dismiss="modal">Cancel</button>\n      <input type="submit" class="btn btn-primary" value="Submit Feedback"/>\n    </div>\n  </form>\n</div>\n')
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () {
    return this.JST || (this.JST = {}), this.JST["shared/file_list_item"] = Handlebars.template(function (t, e, n, i, s) {
        function r(t, e) { var i, s, r, a = ""; return a += "\n  <div class='list-padding'>\n    <i class=\"" + p((s = n.getFileIcon || t && t.getFileIcon, r = { hash: {}, data: e }, s ? s.call(t, t && t.name, r) : c.call(t, "getFileIcon", t && t.name, r))) + '"></i> &nbsp;', (s = n.name) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.name, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), a += p(i) + "\n  </div>\n" } function a(t, e) { var i, s, r, a = ""; return a += '\n  <a href="', (s = n.editor_link) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.editor_link, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), a += p(i) + "\" class='list-padding'><i class=\"" + p((s = n.getFileIcon || t && t.getFileIcon, r = { hash: {}, data: e }, s ? s.call(t, t && t.name, r) : c.call(t, "getFileIcon", t && t.name, r))) + '"></i> &nbsp;', (s = n.name) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.name, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), a += p(i) + "</a>\n" } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l = "", c = n.helperMissing, p = this.escapeExpression,
            u = "function", h = this; return o = n["if"].call(e, e && e.disable_link, { hash: {}, inverse: h.program(3, a, s), fn: h.program(1, r, s), data: s }), (o || 0 === o) && (l += o), l += "\n<i class='action icon-gear icn-round list-icon'></i>"
    }), this.JST["shared/file_list_item"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/flash_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function"; return (a = n.message) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.message, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += ' <a href="#" class="flash-close"><i class="glyphicons circle_remove"></i></a>' }), this.JST["shared/flash_item"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/folder_list_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<a href="#" class=\'list-padding\'>\n  <i class="icon-folder-open-alt"></i> &nbsp;', (a = n.name) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.name, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '\n  <i class="icon-angle-right list-icon"></i>\n</a>' }), this.JST["shared/folder_list_item"] }.call(this),
function () {
    return this.JST || (this.JST = {}), this.JST["shared/member_list_item"] = Handlebars.template(function (t, e, n, i, s) {
        function r(t, e) { var i, s, r = ""; return r += '\n  <a href="#" data-gitlab-id="', (s = n.id) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.id, i = typeof s === p ? s.call(t, { hash: {}, data: e }) : s), r += u(i) + '" class="remove-member icn-round glyphicons remove_2"></a>\n  ' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l, c = "", p = "function", u = this.escapeExpression, h = n.helperMissing, d = this; return c += '<img src="' + u((o = n.gravatarUrl || e && e.gravatarUrl, l = { hash: {}, data: s }, o ? o.call(e, e && e.email, l) : h.call(e, "gravatarUrl", e && e.email, l))) + '?s=32" class="collaborator-image"> ', (o = n.email) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.email,
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + '\n<div class="span2 pull-right">\n  <span class="access-level">' + u((o = n.getGitlabAccessLevel || e && e.getGitlabAccessLevel, l = { hash: {}, data: s }, o ? o.call(e, e && e.access_level, l) : h.call(e, "getGitlabAccessLevel", e && e.access_level, l))) + "</span>\n  ", a = n.unless.call(e, e && e.unremoveable, { hash: {}, inverse: d.noop, fn: d.program(1, r, s), data: s }), (a || 0 === a) && (c += a), c += "\n</div>"
    }), this.JST["shared/member_list_item"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/message"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<div class="message ', (a = n["class"]) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e["class"], r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '">\n	', (a = n.message) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.message, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "\n</div>" }), this.JST["shared/message"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/path_view_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<li><a href="', (a = n.link) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.link, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '">', (a = n.folder) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.folder, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += '</a><span class="path-separator">/</span></li>' }), this.JST["shared/path_view_item"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/quick_build"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<ul class="quick-build-options box">\n  <li>\n    <label for="quick-build-pdf" class="quick-build-choice">\n      <input id="quick-build-pdf" type="checkbox" name="formats[]" value="pdf"> PDF\n    </label>\n  <li>\n    <label for="quick-build-epub" class="quick-build-choice">\n      <input id="quick-build-epub" type="checkbox" name="formats[]" value="epub"> EPUB\n    </label>\n  <li>\n    <label for="quick-build-mobi" class="quick-build-choice">\n      <input id="quick-build-mobi" type="checkbox" name="formats[]" value="mobi"> MOBI\n    </label>\n  <li>\n    <label for="quick-build-html" class="quick-build-choice">\n      <input id="quick-build-html" type="checkbox" name="formats[]" value="html"> HTML\n    </label>\n</ul>' }), this.JST["shared/quick_build"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["shared/search"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<input type="text" name="search" class="search-term" placeholder="Search..." />' }), this.JST["shared/search"] }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/admin/builds/build_list_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s, r; for (
                    n.push('<h3><a href="/'),
                    n.push(i(this.project)),
                    n.push('">'),
                    n.push(i(this.project)),
                    n.push('</a></h3>\n<div class="build box">\n<div class="box-top">\n    <img class="build-user-image" src="'),
                    n.push(i(this.user.avatar)),
                    n.push('" />\n    <span class="build-branch"><i class=\'glyphicons git_branch\'></i><span class="build-branch-name">'),
                    n.push(i(this.branch)),
                    n.push('</span></span> <span title="'),
                    n.push(i(app.helpers.absoluteTime(this.created_at))),
                    n.push('" class="pull-right">'),
                    n.push(i(app.helpers.fromNow(this.created_at))),
                    n.push("</span>\n</div>\n  <ul class='list'>\n  "), r = this.status, e = 0, s = r.length; s > e; e++) t = r[e],
                        n.push("\n    <li class='build-format list-item' data-index=\""),
                        n.push(i(this.index)),
                        n.push('">\n      '),
                        n.push(app.helpers.getBuildIcon(t.status)),
                        n.push("\n      <span class='format'>"),
                        n.push(i(t.format)),
                        n.push("</span>\n      <span class='status "),
                        n.push(i(t.status)),
                        n.push("'>\n        "), t.isCompleted ? (
                        n.push("\n          <a href='"),
                        n.push(i(t.download_url)),
                        n.push('\' class="pull-right">Download</a>\n        ')) : (
                        n.push('\n          <a href=\'#\' class="pull-right more-info">info <i class="glyphicons expand"></i></a>\n          <div class=\'build-format\' style="display:none">\n            '),
                        n.push(app.helpers.parse_build_message(t.message)),
                        n.push("\n          </div>\n        ")),
                        n.push("\n      </span>\n    </li>\n  ");
                n.push('\n  </ul>\n  <div class="box-bottom">\n    <a href="/'),
                n.push(i(this.project)),
                n.push("/builds/"),
                n.push(i(this.id)),
                n.push('" class="build-log-btn">Build Log</a>\n  </div>\n  </div>\n')
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/admin/emails/email_form"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
     n.push('<div class="box">\n  <div class="box-top">\n    <h3>Email Blasts</h3>\n  </div>\n\n  <div class="box-inner">\n    <form class="form">\n      <div class="control-group" id="recipient-select">\n        <label>To:</label>\n      </div>\n\n      <div class="control-group">\n        <label>Subject:</label>\n        <input class="span7" name="subject" type="text" id="email-subject">\n      </div>\n\n      <div class="control-group">\n        <label>Content:</label>\n        <textarea name="body" id="email-body" class="span7" rows="8"></textarea>\n      </div>\n\n      <div class="control-group">\n        <button type="submit" class="btn btn-info" id="send-email">Send Email</button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\'box-bottom\'>\n    <p>Visit <a target="_blank" href="https://mandrillapp.com/activity">Mandrill</a> for the status of sent emails.</p>\n  </div>\n</div>\n')
}).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") } }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/admin/groups/admin_group_list_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<a href="/admin/groups/'),
                    n.push(i(this.id)),
                n.push("\" class='list-item list-small'>"),
                n.push(i(this.name)),
                n.push("</a>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/admin/groups/admin_group_project_list_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<a href="/'),
                    n.push(i(this.path_with_namespace)),
                n.push("\" class='list-item list-small'>"),
                n.push(i(this.name)),
                n.push("</a>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/admin/registration_codes/registration_code_list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
    n.push(i(this.code)),
   n.push(' &nbsp;&nbsp;<i class="glyphicons clock icn-round"></i> &nbsp;'),
    n.push(i(this.days)),
    n.push(' &nbsp;&nbsp;<i class="glyphicons user icn-round"></i> &nbsp;'),
    n.push(i(this.user_count)),
    n.push(' <a href="#" class="delete-code-link pull-right"><i class="icn-round icn-error glyphicons remove_2"></i></a>\n')
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/admin/users/user_list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
    n.push('<img width="25" height="25" src="'),
   n.push(i(this.avatar)),
    n.push('"> &nbsp;'),
    n.push(i(this.nickname)),
    n.push(' (<a href="mailto:'), n.push(i(this.email)),
    n.push('">'),
    n.push(i(this.email)),
    n.push('</a>)<span class="pull-right">'), n.push(i(this.code)),
    n.push("</span>\n")
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/builds/build_details"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s, r; for (
                    n.push("<h2>Build Log<small><i class='glyphicons git_branch'></i> "),
                    n.push(i(this.branch)),
                    n.push(" &nbsp;&nbsp; "),
                    n.push(i(app.helpers.fromNow(this.created_at))),
                    n.push("</small></h2>\n\n"), r = this.status, e = 0, s = r.length; s > e; e++) t = r[e],
                        n.push("\n  <div class='box build-format-details down20'>\n    <div class=\"box-top\">\n      <h3>"),
                        n.push(i(t.format)),
                        n.push(' <small class="'),
                        n.push(i(t.status)),
                        n.push('">'),
                        n.push(i(t.status)),
                        n.push("</small></h3>\n    </div>\n    <div class='box-inner'>\n      <div class='build-format'>\n        "), t.isCompleted && (n.push('\n          <a class="btn btn-success download-btn" href="'),
                        n.push(i(t.download_url)),
                        n.push('" target="_blank">Download</a>\n        ')),
                        n.push("\n        "),
                        n.push(app.helpers.parse_build_message(t.message)),
                        n.push("\n      </div>\n    </div>\n  </div>\n"); n.push("\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/builds/theme_selection"] = function (t) {
        t || (t = {}); var e, n = [],
            i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<div class="box" id="theme-selection">\n  <div class="box-inner">\n    '), this.theme ? (n.push('\n      <i class="icn-round icn-success glyphicons ok_2"></i> <strong>'),
                n.push(i(this.theme)),
                n.push('</strong> theme selected.\n       &nbsp;<a href="#" class="theme-selection-btn btn">Change Theme</a>\n    ')) : n.push('\n      <i class="icn-round icn-warning icon-question"></i> This project has no theme\n       &nbsp;<a href="#" class="theme-selection-btn btn">Select Theme</a>\n    '),
                n.push("\n  </div>\n</div>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/compare/show"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<h2>Send Changes to Master</h2>\n<form>\n  <fieldset>\n    <input type="hidden" name="title" value="Edits from '),
                    n.push(i(this.branch_owner)),
                n.push(' to master"/>\n    <textarea name="description" placeholder="Description of changes..."></textarea>\n  </fieldset>\n  <button class="btn btn-success submit-change">Submit</button>\n</form>\n')
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),


function () { return this.JST || (this.JST = {}), this.JST["editor/ace_editor"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<div id="ace"></div>' }), this.JST["editor/ace_editor"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/boilerplates/asciidoc"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, "[[unique_chapter_id]]\n== Chapter Title\n\nChapter text begins here.\n\n=== Top-Level Heading\n\nWithin a chapter, the first and highest heading level uses three equals signs.\n\n==== Second-Level Heading\n\nThe second-level heading uses four equals signs.\n\n===== Third-level heading\n\nThe third-level heading uses five equals signs." }), this.JST["editor/boilerplates/asciidoc"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/boilerplates/html"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<section data-type="chapter">\n<h1>This Is a Heading</h1>\n\n<p>This is some text.</p>\n</section>\n' }), this.JST["editor/boilerplates/html"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/boilerplates/md"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, "# Chapter Title\n\nChapter text begins here.\n\n## Top-Level Heading\n\nWithin a chapter, the first and highest heading level uses two pound signs.\n\n### Second-Level Heading\n\nThe second-level heading uses three pound signs.\n\n#### Third-level heading\n\nThe third-level heading uses four pound signs." }), this.JST["editor/boilerplates/md"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/boilerplates/xml"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE chapter PUBLIC "-//OASIS//DTD DocBook XML V4.5//EN"\n"http://www.oasis-open.org/docbook/xml/4.5/docbookx.dtd">\n<chapter>\n  <title>Chapter Title Here</title>\n\n  <para>If you have any opening text before the first section heading, put it\n  here. (Do not use a <literal>&lt;sect1&gt;</literal> with an empty\n  <literal>&lt;title&gt;</literal>.) If you want to start your chapter with a\n  section heading, just delete this <literal>&lt;para&gt;</literal>.</para>\n\n  <sect1>\n    <title>Section Title Here</title>\n\n    <para>Opening para...</para>\n  </sect1>\n</chapter>' }), this.JST["editor/boilerplates/xml"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/ck_editor"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function"; return o += '<div id=\'ck_wrap\'>\n  <div id="ck" contenteditable="true">', (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "</div>\n</div>" }), this.JST["editor/ck_editor"] }.call(this),

function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/a"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += c((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === l ? r.apply(e) : r)) + "[", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "]" }), this.JST["editor/commands/asc/a"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/bold"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "*", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Bold Text", o) : c.call(e, "default", e && e.content, "Bold Text", o), (r || 0 === r) && (l += r), l += "*" }), this.JST["editor/commands/asc/bold"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/code"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "+", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "var", o) : c.call(e, "default", e && e.content, "var", o), (r || 0 === r) && (l += r), l += "+" }), this.JST["editor/commands/asc/code"] }.call(this),
function () {
    return this.JST || (this.JST = {}), this.JST["editor/commands/asc/indexterm"] = Handlebars.template(function (t, e, n, i, s) {
        function r(t) { var e, n = ""; return n += ', "' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-secondary"], typeof e === _ ? e.apply(t) : e)) + '"' } function a(t) { var e, n = ""; return n += ', "' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-tertiary"], typeof e === _ ? e.apply(t) : e)) + '"' } function o(t) { var e, n = ""; return n += ', see="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-see"], typeof e === _ ? e.apply(t) : e)) + '"' } function l(t) { var e, n = ""; return n += ', seealso="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-seealso"], typeof e === _ ? e.apply(t) : e)) + '"' } function c(t) { var e, n = ""; return n += ', sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-primary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function p(t) { var e, n = ""; return n += ', secondary-sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-secondary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function u(t) { var e, n = ""; return n += ', tertiary-sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-tertiary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function h(t) { var e, n = ""; return n += ', startref="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-startref"], typeof e === _ ? e.apply(t) : e)) + '"' } function d(t) { var e, n = ""; return n += ', id="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e.id, typeof e === _ ? e.apply(t) : e)) + '"' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var f, m = "", _ = "function", g = this.escapeExpression, b = this;
        return m += '((("' + g((f = e && e.attrs, f = null == f || f === !1 ? f : f["data-primary"], typeof f === _ ? f.apply(e) : f)) + '"\n', f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-secondary"]), { hash: {}, inverse: b.noop, fn: b.program(1, r, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-tertiary"]), { hash: {}, inverse: b.noop, fn: b.program(3, a, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-see"]), { hash: {}, inverse: b.noop, fn: b.program(5, o, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-seealso"]), { hash: {}, inverse: b.noop, fn: b.program(7, l, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-primary-sortas"]), { hash: {}, inverse: b.noop, fn: b.program(9, c, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-secondary-sortas"]), { hash: {}, inverse: b.noop, fn: b.program(11, p, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-tertiary-sortas"]),
            { hash: {}, inverse: b.noop, fn: b.program(13, u, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-startref"]), { hash: {}, inverse: b.noop, fn: b.program(15, h, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f.id), { hash: {}, inverse: b.noop, fn: b.program(17, d, s), data: s }), (f || 0 === f) && (m += f), m += "\n)))"
    }), this.JST["editor/commands/asc/indexterm"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/italic"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "_", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Italicized Text", o) : c.call(e, "default", e && e.content, "Italicized Text", o), (r || 0 === r) && (l += r), l += "_" }), this.JST["editor/commands/asc/italic"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/note"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function"; return o += ".Optional Title\n[NOTE]\n=====================================================================\n", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "\n=====================================================================" }), this.JST["editor/commands/asc/note"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/pass-block"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "++++\n", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, '<iframe width="420" height="315" src="//www.youtube.com/embed/Q-jAGdD1H8g" frameborder="0" allowfullscreen></iframe>', o) : c.call(e, "default", e && e.content, '<iframe width="420" height="315" src="//www.youtube.com/embed/Q-jAGdD1H8g" frameborder="0" allowfullscreen></iframe>', o), (r || 0 === r) && (l += r), l += "\n++++" }), this.JST["editor/commands/asc/pass-block"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/pass-inline"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "pass:[", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "<b>Some html to passthrough</b>", o) : c.call(e, "default", e && e.content, "<b>Some html to passthrough</b>", o), (r || 0 === r) && (l += r), l += "]" }), this.JST["editor/commands/asc/pass-inline"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/pre"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "[source,python]\n----\n", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "print('hello world')", o) : c.call(e, "default", e && e.content, "print('hello world')", o), (r || 0 === r) && (l += r), l += "\n----" }), this.JST["editor/commands/asc/pre"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/sidebar"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function"; return o += ".Optional Title\n****\n", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "\n****" }), this.JST["editor/commands/asc/sidebar"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/warning"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function"; return o += ".Optional Title\n[WARNING]\n=====================================================================\n", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "\n=====================================================================" }), this.JST["editor/commands/asc/warning"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/asc/xref"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a = "", o = "function", l = this.escapeExpression; return a += "<<" + l((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === o ? r.apply(e) : r)) + ">>" }), this.JST["editor/commands/asc/xref"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/a"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += "<a href='" + c((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === l ? r.apply(e) : r)) + "'>", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "</a>" }), this.JST["editor/commands/html/a"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/bold"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "<strong>", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Bold Text", o) : c.call(e, "default", e && e.content, "Bold Text", o), (r || 0 === r) && (l += r), l += "</strong>" }), this.JST["editor/commands/html/bold"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/appendix"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === c ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>Appendix section content here</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l = "", c = "function", p = this; return l += '<section data-type="appendix">\n  <h1>Appendix Title</h1>\n  <p>Appendix content</p>\n  <section data-type="sect1">\n    ', o = n["if"].call(e, e && e.content, { hash: {}, inverse: p.program(3, a, s), fn: p.program(1, r, s), data: s }), (o || 0 === o) && (l += o), l += "\n  </section>\n</section>" }), this.JST["editor/commands/html/book/appendix"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/blockquote"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === c ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n  " } function a() { return "\n    <p>When in the course of human events it becomes blockquote...</p>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l = "", c = "function", p = this; return l += "<blockquote>\n  ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: p.program(3, a, s), fn: p.program(1, r, s), data: s }), (o || 0 === o) && (l += o), l += "\n</blockquote>" }), this.JST["editor/commands/html/book/blockquote"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/chapter"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>Chapter content here</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="chapter">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Chapter Title", c) : h.call(e, "default", e && e.heading, "Chapter Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/chapter"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/copyright-page"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>Copyright page content goes right here.</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="copyright-page">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Copyright Title", c) : h.call(e, "default", e && e.heading, "Copyright Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/copyright-page"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/dedication"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>Put your dedication here</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="dedication">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Dedication Title", c) : h.call(e, "default", e && e.heading, "Dedication Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/dedication"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/example"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n  ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n" } function a() { return '\n  <pre data-type="programlisting">print "Hello World"</pre>\n' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<div data-type="example">\n<h5>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Hello World in Python", c) : h.call(e, "default", e && e.heading, "Hello World in Python", c))) + "</h5>\n", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</div>" }), this.JST["editor/commands/html/book/example"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/figure"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return l += '<figure>\n  <img class="', (a = n["class"]) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e["class"], r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + '" src="' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.src, "image.png", o) : u.call(e, "default", e && e.src, "image.png", o))) + '" alt="' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.alt_text, "Alt Text", o) : u.call(e, "default", e && e.alt_text, "Alt Text", o))) + '" ', (a = n.extra) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.extra, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + "/>\n  <figcaption>" + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.caption, "This is an image caption", o) : u.call(e, "default", e && e.caption, "This is an image caption", o))) + "</figcaption>\n</figure>" }), this.JST["editor/commands/html/book/figure"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/foreword"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>Foreword content here</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="foreword">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Foreword Title", c) : h.call(e, "default", e && e.heading, "Foreword Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/foreword"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/note"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n    ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n  " } function a() { return "\n      <p>You should probably note this information.</p>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<div data-type="note">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Helpful Note Title", c) : h.call(e, "default", e && e.heading, "Helpful Note Title", c))) + "</h1>\n  ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</div>" }), this.JST["editor/commands/html/book/note"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/part"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n    ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n  " } function a() { return '\n    <p>Part introduction content goes here</p>\n  <section data-type="chapter">\n    <h1>Chapter Title</h1>\n    <p>Chapter content goes here</p>\n  </section>\n  ' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<div data-type="part">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Part Title", c) : h.call(e, "default", e && e.heading, "Part Title", c))) + "</h1>\n  ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</div>" }), this.JST["editor/commands/html/book/part"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/preface"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n  " } function a() { return "\n    <p>Preface content goes here</p>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="preface">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Preface Title", c) : h.call(e, "default", e && e.heading, "Preface Title", c))) + "</h1>\n  ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/preface"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/sect"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n  " } function a() { return "\n    <p>Section content goes here</p>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="sect' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.level, 1, c) : h.call(e, "default", e && e.level, 1, c))) + '">\n  <h' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.level, 1, c) : h.call(e, "default", e && e.level, 1, c))) + ">" + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Section Title", c) : h.call(e, "default", e && e.heading, "Section Title", c))) + "</h" + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.level, 1, c) : h.call(e, "default", e && e.level, 1, c))) + ">\n  ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/sect"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/sidebar"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <p>More amusing details go here</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<aside data-type="sidebar">\n  <h5>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Amusing Digression", c) : h.call(e, "default", e && e.heading, "Amusing Digression", c))) + "</h5>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</aside>" }), this.JST["editor/commands/html/book/sidebar"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/titlepage"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n      <h2>Subtle Subtitle</h2>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<section data-type="titlepage">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Tremendous Titlepage Title", c) : h.call(e, "default", e && e.heading, "Tremendous Titlepage Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</section>" }), this.JST["editor/commands/html/book/titlepage"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/toc"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = n.helperMissing, c = this.escapeExpression; return o += '<nav data-type="toc">\n  <h1>' + c((r = n["default"] || e && e["default"], a = { hash: {}, data: s }, r ? r.call(e, e && e.heading, "Table of Contents", a) : l.call(e, "default", e && e.heading, "Table of Contents", a))) + '</h1>\n   <ol>\n     <li><a href="examples_page.html">Placeholder content</a></li>\n     <li><a href="examples_page.html">A Note Regarding Supplemental Files</a></li>\n     <li><a href="pr02.html">Foreword</a></li>\n     <li><a href="pr03.html">Contributors</a>\n       <ol>\n         <li><a href="pr03.html#I_sect1_d1e154">Chapter Authors</a></li>\n         <li><a href="pr03.html#I_sect1_d1e260">Tech Editors</a></li>\n       </ol>\n     </li>\n  </ol>\n</nav>' }), this.JST["editor/commands/html/book/toc"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/warning"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n      ", (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "\n    " } function a() { return "\n    <p>Please be warned about something important!</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var o, l, c, p = "", u = "function", h = n.helperMissing, d = this.escapeExpression, f = this; return p += '<div data-type="warning">\n  <h1>' + d((l = n["default"] || e && e["default"], c = { hash: {}, data: s }, l ? l.call(e, e && e.heading, "Helpful Warning Title", c) : h.call(e, "default", e && e.heading, "Helpful Warning Title", c))) + "</h1>\n    ", o = n["if"].call(e, e && e.content, { hash: {}, inverse: f.program(3, a, s), fn: f.program(1, r, s), data: s }), (o || 0 === o) && (p += o), p += "\n</div>" }), this.JST["editor/commands/html/book/warning"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/book/xref"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<a data-type="xref" href=\'' + c((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === l ? r.apply(e) : r)) + "'>", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "</a>" }), this.JST["editor/commands/html/book/xref"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/code"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = n.helperMissing, c = this.escapeExpression; return o += "<code>" + c((r = n["default"] || e && e["default"], a = { hash: {}, data: s }, r ? r.call(e, e && e.content, "foobar", a) : l.call(e, "default", e && e.content, "foobar", a))) + "</code>" }), this.JST["editor/commands/html/code"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/comment"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return l += '<div data-type="comment" data-nickname="' + p((r = e && e.attrs, r = null == r || r === !1 ? r : r.nickname, typeof r === c ? r.apply(e) : r)) + "\">\n  <div class='comment-identifier' contenteditable='false'>\n    <img src='" + p((a = n.gravatarUrl || e && e.gravatarUrl, o = { hash: {}, data: s }, a ? a.call(e, (r = e && e.attrs, null == r || r === !1 ? r : r.email), o) : u.call(e, "gravatarUrl", (r = e && e.attrs, null == r || r === !1 ? r : r.email), o))) + "' />\n    <div spellcheck='false'>" + p((r = e && e.attrs, r = null == r || r === !1 ? r : r.nickname, typeof r === c ? r.apply(e) : r)) + '</div>\n    <i class="delete_comment glyphicons remove_2">&nbsp;</i>\n  </div>\n  ', a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "<p>Comment...</p>", o) : u.call(e, "default", e && e.content, "<p>Comment...</p>", o), (r || 0 === r) && (l += r), l += "\n</div>" }), this.JST["editor/commands/html/comment"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/figure"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return l += '<figure>\n  <img class="' + p((r = e && e.attrs, r = null == r || r === !1 ? r : r["class"], typeof r === c ? r.apply(e) : r)) + '" src="' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, (r = e && e.attrs, null == r || r === !1 ? r : r.src), "image.png", o) : u.call(e, "default", (r = e && e.attrs, null == r || r === !1 ? r : r.src), "image.png", o))) + '" alt="' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, (r = e && e.attrs, null == r || r === !1 ? r : r.alt_text), "Alt Text", o) : u.call(e, "default", (r = e && e.attrs, null == r || r === !1 ? r : r.alt_text), "Alt Text", o))) + '" ', (a = n.extra) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.extra, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + "/>\n  <figcaption>" + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, (r = e && e.attrs, null == r || r === !1 ? r : r.caption), "This is an image caption", o) : u.call(e, "default", (r = e && e.attrs, null == r || r === !1 ? r : r.caption), "This is an image caption", o))) + "</figcaption>\n</figure>" }), this.JST["editor/commands/html/figure"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/footnote"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += '<span contenteditable="false" data-type="footnote">', a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, (r = e && e.attrs, null == r || r === !1 ? r : r.content), e && e.content, o) : c.call(e, "default", (r = e && e.attrs, null == r || r === !1 ? r : r.content), e && e.content, o), (r || 0 === r) && (l += r), l += "</span>" }), this.JST["editor/commands/html/footnote"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/indexterm"] = Handlebars.template(function (t, e, n, i, s) {
        function r(t) {
            var e, n = "";
            return n += ' data-secondary="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-secondary"], typeof e === _ ? e.apply(t) : e)) + '"'
        } function a(t) { var e, n = ""; return n += ' data-tertiary="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-tertiary"], typeof e === _ ? e.apply(t) : e)) + '"' } function o(t) { var e, n = ""; return n += ' data-see="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-see"], typeof e === _ ? e.apply(t) : e)) + '"' } function l(t) { var e, n = ""; return n += ' data-seealso="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-seealso"], typeof e === _ ? e.apply(t) : e)) + '"' } function c(t) { var e, n = ""; return n += ' data-primary-sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-primary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function p(t) { var e, n = ""; return n += ' data-secondary-sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-secondary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function u(t) { var e, n = ""; return n += ' data-tertiary-sortas="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-tertiary-sortas"], typeof e === _ ? e.apply(t) : e)) + '"' } function h(t) { var e, n = ""; return n += ' data-startref="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e["data-startref"], typeof e === _ ? e.apply(t) : e)) + '"' } function d(t) { var e, n = ""; return n += ' id="' + g((e = t && t.attrs, e = null == e || e === !1 ? e : e.id, typeof e === _ ? e.apply(t) : e)) + '"' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var f, m = "", _ = "function", g = this.escapeExpression, b = this; return m += '<a contenteditable="false" data-type="indexterm"\n data-primary="' + g((f = e && e.attrs, f = null == f || f === !1 ? f : f["data-primary"], typeof f === _ ? f.apply(e) : f)) + '"\n', f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-secondary"]), { hash: {}, inverse: b.noop, fn: b.program(1, r, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-tertiary"]), { hash: {}, inverse: b.noop, fn: b.program(3, a, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-see"]), { hash: {}, inverse: b.noop, fn: b.program(5, o, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-seealso"]), { hash: {}, inverse: b.noop, fn: b.program(7, l, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-primary-sortas"]), { hash: {}, inverse: b.noop, fn: b.program(9, c, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-secondary-sortas"]), { hash: {}, inverse: b.noop, fn: b.program(11, p, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-tertiary-sortas"]), { hash: {}, inverse: b.noop, fn: b.program(13, u, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f["data-startref"]), { hash: {}, inverse: b.noop, fn: b.program(15, h, s), data: s }), (f || 0 === f) && (m += f), m += "\n", f = n["if"].call(e, (f = e && e.attrs, null == f || f === !1 ? f : f.id), { hash: {}, inverse: b.noop, fn: b.program(17, d, s), data: s }), (f || 0 === f) && (m += f), m += ">\n&nbsp;</a>"
}), this.JST["editor/commands/html/indexterm"]}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/italic"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "<em>", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Italicized Text", o) : c.call(e, "default", e && e.content, "Italicized Text", o), (r || 0 === r) && (l += r), l += "</em>" }), this.JST["editor/commands/html/italic"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/math"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<span class="math-tex" data-type="tex">\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)</span>' }), this.JST["editor/commands/html/math"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/ol"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "<ol>\n  <li>", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Ordered list item", o) : c.call(e, "default", e && e.content, "Ordered list item", o), (r || 0 === r) && (l += r), l += "</li>\n</ol>" }), this.JST["editor/commands/html/ol"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/pre"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s = ""; return s += '\n<pre data-type="programlisting" ', i = n["if"].call(t, (i = t && t.attrs, null == i || i === !1 ? i : i.language), { hash: {}, inverse: d.noop, fn: d.program(2, a, e), data: e }), (i || 0 === i) && (s += i), s += ">", i = n["if"].call(t, t && t.content, { hash: {}, inverse: d.program(6, l, e), fn: d.program(4, o, e), data: e }), (i || 0 === i) && (s += i), s += "\n</pre>\n" } function a(t) { var e, n = ""; return n += ' data-code-language="' + h((e = t && t.attrs, e = null == e || e === !1 ? e : e.language, typeof e === u ? e.apply(t) : e)) + '"\n' } function o(t, e) { var i, s; return (s = n.content) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.content, i = typeof s === u ? s.call(t, { hash: {}, data: e }) : s), h(i) } function l() { return "print('hello world')" } function c(t, e) { var i, s, r = ""; return r += "\n<code>" + h((i = n["default"] || t && t["default"], s = { hash: {}, data: e }, i ? i.call(t, t && t.content, "foobar", s) : f.call(t, "default", t && t.content, "foobar", s))) + "</code>\n" } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var p, u = "function", h = this.escapeExpression, d = this, f = n.helperMissing; return p = n["if"].call(e, (p = e && e.attrs, null == p || p === !1 ? p : p.is_block), { hash: {}, inverse: d.program(8, c, s), fn: d.program(1, r, s), data: s }), p || 0 === p ? p : "" }), this.JST["editor/commands/html/pre"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/table"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "<table>\n  <tr>\n    <td>", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Table item", o) : c.call(e, "default", e && e.content, "Table item", o), (r || 0 === r) && (l += r), l += "</td>\n    <td>Another table item</td>\n  </tr>\n  <tr>\n    <td>Another item</td>\n    <td>A final item</td>\n  </tr>\n</table>" }), this.JST["editor/commands/html/table"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/ul"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "<ul>\n  <li>", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Unordered list item", o) : c.call(e, "default", e && e.content, "Unordered list item", o), (r || 0 === r) && (l += r), l += "</li>\n</ul>" }), this.JST["editor/commands/html/ul"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/html/xref"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<a data-type="' + c((r = e && e.attrs, r = null == r || r === !1 ? r : r["data-type"], typeof r === l ? r.apply(e) : r)) + "\" href='" + c((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === l ? r.apply(e) : r)) + "'>", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "</a>" }), this.JST["editor/commands/html/xref"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/md/a"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += "[", (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), (r || 0 === r) && (o += r), o += "](" + c((r = e && e.attrs, r = null == r || r === !1 ? r : r.href, typeof r === l ? r.apply(e) : r)) + ")" }), this.JST["editor/commands/md/a"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/md/bold"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "**", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Bold Text", o) : c.call(e, "default", e && e.content, "Bold Text", o), (r || 0 === r) && (l += r), l += "**" }), this.JST["editor/commands/md/bold"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/commands/md/italic"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing; return l += "*", a = n["default"] || e && e["default"], o = { hash: {}, data: s }, r = a ? a.call(e, e && e.content, "Italicized Text", o) : c.call(e, "default", e && e.content, "Italicized Text", o), (r || 0 === r) && (l += r), l += "*" }), this.JST["editor/commands/md/italic"] }.call(this),

function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/a"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n    <a class='btn btn-info btn-small' href='", (s = n.href) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.href, i = typeof s === p ? s.call(t, { hash: {}, data: e }) : s), r += u(i) + "' target='_blank'>Visit</a>\n    <a class='btn btn-error btn-small remove'>Remove</a>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l, c = "", p = "function", u = this.escapeExpression, h = n.helperMissing, d = this; return c += '<form class="form-inline">\n  <label>Link URL<input name=\'href\' type="text" placeholder="http://oreilly.com/" value=\'' + u((o = n["default"] || e && e["default"], l = { hash: {}, data: s }, o ? o.call(e, e && e.href, "http://", l) : h.call(e, "default", e && e.href, "http://", l))) + "'></label>\n  ", a = n["if"].call(e, e && e.href, { hash: {}, inverse: d.noop, fn: d.program(1, r, s), data: s }), (a || 0 === a) && (c += a), c += "\n  <button class='btn btn-success'>OK</button>\n</form>" }), this.JST["editor/prompts/a"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/class"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<form class="form-inline">\n  <label>', (a = n.tagname) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.tagname, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + ' Classes:<input name=\'class\' type="text" placeholder="Element Class" value=\'', (a = n["class"]) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e["class"], r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + "'></label>\n  <button class='btn btn-success'>OK</button>\n</form>" }), this.JST["editor/prompts/class"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/content"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = n.helperMissing, l = this.escapeExpression; return l((r = n["default"] || e && e["default"], a = { hash: {}, data: s }, r ? r.call(e, e && e.message, "Text message content", a) : o.call(e, "default", e && e.message, "Text message content", a))) }), this.JST["editor/prompts/content"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/footnote"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<form class="form-inline">\n  <label>Footnote:<textarea name=\'content\' placeholder="Your footnote text">', (a = n.content) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.content, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + "</textarea></label>\n  <button class='btn btn-success'>OK</button>\n</form>" }), this.JST["editor/prompts/footnote"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/id"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return l += '<form class="form-inline">\n  <label>', (a = n.tagname) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.tagname, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + ' ID: #<input name=\'id\' type="text" placeholder="Element id" value=\'' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.id, e && e.suggestion, o) : u.call(e, "default", e && e.id, e && e.suggestion, o))) + "'></label>\n  <button class='btn btn-success'>OK</button>\n</form>" }), this.JST["editor/prompts/id"] }.call(this),
function () {
    return this.JST || (this.JST = {}), this.JST["editor/prompts/indexterm"] = Handlebars.template(function (t, e, n, i, s) {
        function r() { return "<a class='btn btn-error btn-small remove'>Remove</a>" } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l, c = "", p = "function", u = this.escapeExpression, h = this, d = n.helperMissing; return c += '<form class="form-horizontal indexterm">\n  <div class="control-group">\n    <label for=\'data-primary-input\' class="control-label">Primary</label>\n    <input id=\'data-primary-input\' type="text" placeholder="Primary Term (required)" name=\'data-primary\' value=\'', (o = n["data-primary"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-primary"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n    </div>\n\n\n  <div class=\"control-group\">\n    <label for='data-secondary-input' class=\"control-label\">Secondary</label>\n    <input id='data-secondary-input' type=\"text\" placeholder=\"Secondary Term\" name='data-secondary' value='", (o = n["data-secondary"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-secondary"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n    </div>\n\n\n  <div class=\"control-group\">\n    <label for='data-tertiary-input' class=\"control-label\">Tertiary</label>\n    <input id='data-tertiary-input' type=\"text\" placeholder=\"Tertiary Term\" name='data-tertiary' value='", (o = n["data-tertiary"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-tertiary"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n    </div>\n\n\n  <div class=\"control-group\">\n    <label for='data-see-input' class=\"control-label\">See</label>\n    <input id='data-see-input' type=\"text\" placeholder=\"See Term\" name='data-see' value='", (o = n["data-see"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-see"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n    </div>\n\n\n  <div class=\"control-group\">\n    <label for='data-seealso-input' class=\"control-label\">See Also</label>\n    <input id='data-seealso-input' type=\"text\" placeholder=\"See also Term\" name='data-seealso' value='", (o = n["data-seealso"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-seealso"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + '\'>\n    </div>\n\n  <div class="clearfix">\n  </div>\n  <div class="control-group">\n    <label for=\'data-primary-sortas-input\' class="control-label">Primary Sort as </label>\n      <input id=\'data-primary-sortas-input\' type="text" placeholder="Primary Sort As" name=\'data-primary-sortas\' value=\'', (o = n["data-primary-sortas"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-primary-sortas"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n  </div>\n\n    <div class=\"control-group\">\n    <label for='data-secondary-sortas-input' class=\"control-label\">Secondary Sort as </label>\n      <input id='data-secondary-sortas-input' type=\"text\" placeholder=\"Secondary Sort As\" name='data-secondary-sortas' value='", (o = n["data-secondary-sortas"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-secondary-sortas"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n  </div>\n\n    <div class=\"control-group\">\n    <label for='data-tertiary-sortas-input' class=\"control-label\">Tertiary Sort as</label>\n      <input id='data-tertiary-sortas-input' type=\"text\" placeholder=\"Tertiary Sort As\" name='data-tertiary-sortas' value='", (o = n["data-tertiary-sortas"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-tertiary-sortas"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n  </div>\n\n    <div class=\"control-group\">\n    <label for='data-startref-input' class=\"control-label\">Range Startref</label>\n    <input id='data-startref-input' type=\"text\" placeholder=\"Range Startref\" name='data-startref' value='",
            (o = n["data-startref"]) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e["data-startref"],
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + "'>\n    </div>\n\n\n    <div class=\"control-group\">\n    <label for='data-startref-input' class=\"control-label\">ID</label>\n    <input id='id-input' type=\"text\" placeholder=\"ID\" name='id' value='", (o = n.id) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.id,
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + '\'>\n    </div>\n\n\n    <div class="control-group submit">\n       ', a = n["if"].call(e, e && e["data-primary"], { hash: {}, inverse: h.noop, fn: h.program(1, r, s), data: s }), (a || 0 === a) && (c += a), c += "\n       <button class='btn btn-success btn-medium'>" + u((o = n["default"] || e && e["default"], l = { hash: {}, data: s }, o ? o.call(e, e && e.button_text, "OK", l) : d.call(e, "default", e && e.button_text, "OK", l))) + "</button>\n  </div>\n\n</form>"
    }), this.JST["editor/prompts/indexterm"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/input"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing, p = this.escapeExpression, u = "function"; return l += '<form class="form-inline">\n  <label>' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.label, "Label", o) : c.call(e, "default", e && e.label, "Label", o))) + "<input name='" + p((r = e && e.form_attrs, r = null == r || r === !1 ? r : r.name, typeof r === u ? r.apply(e) : r)) + '\' type="text" placeholder="' + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.placeholder, "Text input", o) : c.call(e, "default", e && e.placeholder, "Text input", o))) + "\" value='", (a = n.value) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.value, r = typeof a === u ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + "'></label>\n  <button class='btn btn-success'>" + p((a = n["default"] || e && e["default"], o = { hash: {}, data: s }, a ? a.call(e, e && e.button_text, "ok", o) : c.call(e, "default", e && e.button_text, "ok", o))) + "</button>\n</form>" }), this.JST["editor/prompts/input"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/pre"] = Handlebars.template(function (t, e, n, i, s) { function r() { return " checked " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l, c = "", p = n.helperMissing, u = this.escapeExpression, h = this; return c += '<form class="form-inline">\n  <label>Language<input name=\'data-code-language\' type="text" placeholder="python" value=\'' + u((o = n["default"] || e && e["default"], l = { hash: {}, data: s }, o ? o.call(e, e && e["data-code-language"], "", l) : p.call(e, "default", e && e["data-code-language"], "", l))) + "'></label>\n  <label>Executable? <input name='data-executable' type=\"checkbox\" ", a = n["if"].call(e, e && e["data-executable"], { hash: {}, inverse: h.noop, fn: h.program(1, r, s), data: s }), (a || 0 === a) && (c += a), c += "></label>\n  <button class='btn btn-success'>OK</button>\n</form>" }), this.JST["editor/prompts/pre"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/prompts/xref"] = Handlebars.template(function (t, e, n, i, s) { function r() { return "\n    <a class='btn btn-error btn-small remove'>Remove</a>\n  " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l = "", c = "function", p = this.escapeExpression, u = this; return l += '<form>\n  <fieldset>\n  <label>Link to ID  </label>\n    <div class="input-prepend">\n        <span class="add-on">#</span>\n        <input name=\'href\' type="text" value=\'', (o = n.href) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.href, a = typeof o === c ? o.call(e, { hash: {}, data: s }) : o), l += p(a) + "' data-provide='typeahead' data-source=\"", (o = n.ids) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.ids, a = typeof o === c ? o.call(e, { hash: {}, data: s }) : o), l += p(a) + '">\n    </div>\n  <br>\n  ', a = n["if"].call(e, e && e.href, { hash: {}, inverse: u.noop, fn: u.program(1, r, s), data: s }), (a || 0 === a) && (l += a), l += "\n  <button class='btn btn-success'>OK</button>\n</fieldset>\n</form>" }), this.JST["editor/prompts/xref"] }.call(this),

function () { return this.JST || (this.JST = {}), this.JST["editor/shortcuts"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r, a = ""; return a += "\n      <p> ", s = n.parseShortcut || t && t.parseShortcut, r = { hash: {}, data: e }, i = s ? s.call(t, t && t.shortcut, r) : l.call(t, "parseShortcut", t && t.shortcut, r), (i || 0 === i) && (a += i), a += " : ", (s = n.label) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.label, i = typeof s === c ? s.call(t, { hash: {}, data: e }) : s), a += p(i) + "</p>\n    " } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o = "", l = n.helperMissing, c = "function", p = this.escapeExpression, u = this; return o += '<div class="modal hide" role="dialog" id=\'shortcuts-modal\'>\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal">&times;</button>\n    <h2>Atlas Editor Keyboard Shortcuts</h2>\n  </div>\n  <div class="modal-body">\n    ', a = n.each.call(e, e && e.shortcuts, { hash: {}, inverse: u.noop, fn: u.program(1, r, s), data: s }), (a || 0 === a) && (o += a), o += "\n  </div>\n</div>" }), this.JST["editor/shortcuts"] }.call(this),

function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/builds_sidebar"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<a href="#" class="sidebar-close"><i class="glyphicons circle_remove"></i></a>\n<h2>Builds</h2>\n<div id="build-sidebar-contents">\n</div>' }), this.JST["editor/sidebars/builds_sidebar"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/file_actions"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<div class="btn-group">\n  <button type="button" class="btn" data-action=\'prompt-rename\'><i class="icon-edit"></i> Rename</button>\n  <button type="button" class="btn" data-action="prompt-delete"><i class="icon-trash"></i> Delete</button>\n</div>' }), this.JST["editor/sidebars/file_actions"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/file_actions_delete"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += 'Sure you want to delete this file? <br>\n<button class="btn btn-error" type="button" data-action="confirm-delete"><i class="icon-trash"> Delete <strong>', (a = n.name) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.name, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + "</strong></button>" }), this.JST["editor/sidebars/file_actions_delete"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/file_actions_rename"] = Handlebars.template(function (t, e, n, i, s) { function r(t, e) { var i, s, r = ""; return r += "\n   <div class='flash'>\n      <div class=\"flash-item error\">", (s = n.error) ? i = s.call(t, { hash: {}, data: e }) : (s = t && t.error, i = typeof s === c ? s.call(t, { hash: {}, data: e }) : s), (i || 0 === i) && (r += i), r += "</div>\n   </div>\n" } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l = "", c = "function", p = this, u = this.escapeExpression; return a = n["if"].call(e, e && e.error, { hash: {}, inverse: p.noop, fn: p.program(1, r, s), data: s }), (a || 0 === a) && (l += a), l += '\n<input class="span4 rename-input" type="text" value="', (o = n.name) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.name, a = typeof o === c ? o.call(e, { hash: {}, data: s }) : o), l += u(a) + '">\n<br>\n<button class="btn btn-info" type="button" data-action="submit-rename"><i class="icon-edit"> Rename File</button>' }), this.JST["editor/sidebars/file_actions_rename"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/file_control"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += "<div id='file_controls_inner' class='", (a = n.state) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.state, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + "'>\n  <div class=\"controls\" >\n      <form class='new_file_form'>\n          <input class='file_name'  value=\"file.html\" type=\"text\" />\n      </form>\n      <form class='new_dir_form'>\n          <input class='dir_name'  value=\"folder/\" type=\"text\" />\n      </form>\n      <div class='file-control-buttons'>\n        <button class='create_btn btn'><span>Create </span> New File</button>\n        <button class='create_dir_btn btn'><span>Create </span> New Folder</button>\n        <button class='cancel_btn btn btn-small'><i class=\"icon-remove\"></i></i></button>\n      </div>\n  </div>\n\n</div>" }), this.JST["editor/sidebars/file_control"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/files_sidebar"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<a href="#" class="sidebar-close"><i class="glyphicons circle_remove"></i></a>\n<h2>Files</h2>' }), this.JST["editor/sidebars/files_sidebar"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/sidebars/upload"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = n.helperMissing, c = this.escapeExpression; return o += '<div id="upload_zone">\n  ' + c((r = n["default"] || e && e["default"], a = { hash: {}, data: s }, r ? r.call(e, e && e.up_message, "Drag a file here to upload", a) : l.call(e, "default", e && e.up_message, "Drag a file here to upload", a))) + '\n</div>\n<input id="fileUploadInput" type="file" style="display:none" />' }), this.JST["editor/sidebars/upload"] }.call(this),

function () {
    return this.JST || (this.JST = {}),
        this.JST["editor/toolbar-asc"] = Handlebars.template(function (t, e, n, i, s) {
        return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {},
            '<div class="btn-group">\n  <button data-command-name="bold" type="button" class="btn"><i class=\'glyphicons bold\'></i></button>\n  <button data-command-name="italic" type="button" class="btn"><i class=\'glyphicons italic\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="heading-increase" type="button" class="btn"><i class=\'glyphicons text_bigger\'></i></button>\n  <button data-command-name="heading-decrease" type="button" class="btn"><i class=\'glyphicons text_smaller\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="link" type="button" class="btn"><i class=\'glyphicons link\'></i></button>\n  <button data-command-name="indexterm" type="button" class="btn"><i class=\'glyphicons bookmark\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="xref" type="button" class="btn"><i class=\'glyphicons pin\'></i></button>\n</div>\n<div class="btn-group">\n   ' +
                ' <button data-command-name="numberedlist" type="button" class="btn"><i class=\'icon icon-list-ol\'></i></button>\n    <button data-command-name="bulletedlist" type="button" class="btn"><i class=\'icon icon-list-ul\'></i></button>\n</div>\n<div class="btn-group">\n</div>\n<div class="btn-group">\n    <button data-command-name="code" data-command-label="Code Inline" type="button" class="btn"><i class=\'icon icon-ticket\'></i></button>\n    <button data-command-name="pre" data-command-label="Code Block" type="button" class="btn"><i class=\'icon icon-code\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-dropdown-trigger="pass" type="button" class="btn"><i class=\'icon icon-puzzle-piece\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-dropdown-trigger="blocks" type="button" class="btn"><i class=\'glyphicons vector_path_square\'></i></button>\n</div>\n<div class="drop-content" data-dropdown-name=\'pass\'>\n  <button data-command-name="pass-inline" type="button" class="btn"><i class=\'icon icon-minus\'></i> Passthrough Inline</button>\n ' +
                ' <button data-command-name="pass-block" type="button" class="btn"><i class=\'icon icon-sign-blank\'></i> Passthrough Block</button>\n</div>\n<div class="drop-content" data-dropdown-name=\'blocks\'>\n  ' +
                '<button data-command-name="sidebar" type="button" class="btn"><i class=\'icon icon-asterisk\'></i> Sidebar Block</button>\n  <button data-command-name="note" type="button" class="btn"><i class=\'glyphicons notes\'></i> Note Block</button>\n  <button data-command-name="warning" type="button" class="btn"><i class=\'icon icon-warning-sign\'></i> Warning Block</button>\n</div>'
        }),
        this.JST["editor/toolbar-asc"]
}.call(this),
function () {
    return this.JST || (this.JST = {}),
        this.JST["editor/toolbar-html"] = Handlebars.template(function (t, e, n, i, s) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = n.helperMissing, c = this.escapeExpression; return o += '<div class="btn-group">\n  <button data-command-name="bold" data-command-label="Bold" type="button" class="btn"><i class=\'glyphicons bold\'></i></button>\n  <button data-command-name="italic" data-command-label="Italic" type="button" class="btn"><i class=\'glyphicons italic\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="link" data-command-label="Insert Link" type="button" class="btn"><i class=\'glyphicons link\'></i></button>\n  <button data-command-name="indexterm" data-command-label="Insert Indexterm" type="button" class="btn"><i class=\'glyphicons bookmark\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="xref" data-command-label="Insert X-Ref" type="button" class="btn"><i class=\'glyphicons pin\'></i></button>\n</div>\n<div class="btn-group">\n   ' +
    ' <button data-command-name="numberedlist" data-command-label="Insert Numbered List" type="button" class="btn"><i class=\'icon icon-list-ol\'></i></button>\n    <button data-command-name="bulletedlist" data-command-label="Insert Bulleted List" type="button" class="btn"><i class=\'icon icon-list-ul\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="table" data-command-label="Insert Table" type="button" class="btn"><i class=\'icon icon-table\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="code" data-command-label="Insert Code" type="button" class="btn"><i class=\'icon icon-ticket\'></i></button>\n    <button data-command-name="pre" data-command-label="Insert Code" data-command-label="Code (Pre) Block" type="button" class="btn"><i class=\'icon icon-code\'></i></button>\n    <button data-command-name="mathjax" data-command-label="Insert Mathxjax Formula" type="button" class="btn"><i class=\'glyphicons calculator\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="comment" data-command-label="Insert Comment"  type="button" class="btn"><i class=\'icon icon-comment\'></i></button>\n</div>\n<div id=\'html-book-tools\'></div>\n<div class="btn-group">\n    <button data-command-name="shortcuts" data-command-label="View Shortcuts" type="button" class="btn naked">' + c((r = n.meta || e && e.meta, a = { hash: {}, data: s }, r ? r.call(e, "?", a) : l.call(e, "meta", "?", a))) + "</button>\n</div>"
        }),
        this.JST["editor/toolbar-html"]
}.call(this),

function () {
    this.JST || (this.JST = {}),
        this.JST["templates/editor/toolbar-locked-branch"] = function (t) {
            t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
                (function () {
     n.push('<div class="locked-branch">\nYou cannot edit this branch.\n</div>\n')
}).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") } }.call(this),

function () {
    return this.JST || (this.JST = {}),
        this.JST["editor/toolbar-md"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<div class="btn-group">\n  <button data-command-name="bold" type="button" class="btn"><i class=\'glyphicons bold\'></i></button>\n  <button data-command-name="italic" type="button" class="btn"><i class=\'glyphicons italic\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="heading-increase" type="button" class="btn"><i class=\'glyphicons text_bigger\'></i></button>\n  <button data-command-name="heading-decrease" type="button" class="btn"><i class=\'glyphicons text_smaller\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="link" type="button" class="btn"><i class=\'glyphicons link\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="xref" type="button" class="btn"><i class=\'glyphicons pin\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="numberedlist" type="button" class="btn"><i class=\'icon icon-list-ol\'></i></button>\n    <button data-command-name="bulletedlist" type="button" class="btn"><i class=\'icon icon-list-ul\'></i></button>\n</div>' }),
        this.JST["editor/toolbar-md"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["editor/toolbar-visual"] = Handlebars.template(function (t, e, n, i, s) {
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {};
        var r, a, o = "", l = n.helperMissing, c = this.escapeExpression; return o += '<div class="btn-group">\n  <button data-command-name="bold" data-command-label="Bold" type="button" class="btn"><i class=\'glyphicons bold\'></i></button>\n  <button data-command-name="italic" data-command-label="Italic" type="button" class="btn"><i class=\'glyphicons italic\'></i></button>\n</div>\n<div class="btn-group">\n  <button data-command-name="link" data-command-label="Insert Link" type="button" class="btn"><i class=\'glyphicons link\'></i></button>\n  <button data-command-name="indexterm" data-command-label="Insert Indexterm" type="button" class="btn"><i class=\'glyphicons bookmark\'></i></button>\n  <button data-command-name="footnote" data-command-label="Insert Footnote" type="button" class="btn"><i class=\'glyphicons shoe_steps\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="id"  data-command-label="Insert ID" type="button" class="btn"><i class=\'icon icon-tag\'></i></button>\n    <button data-command-name="xref" data-command-label="Insert X-Ref" type="button" class="btn"><i class=\'glyphicons pin\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="numberedlist" data-command-label="Insert Numbered List" type="button" class="btn"><i class=\'icon icon-list-ol\'></i></button>\n    <button data-command-name="bulletedlist" data-command-label="Insert Bulleted List" type="button" class="btn"><i class=\'icon icon-list-ul\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="table" data-command-label="Insert Table" type="button" class="btn"><i class=\'icon icon-table\'></i></button>\n    <button data-command-name="MediaEmbed" data-command-label="Embed Media" type="button" class="btn"><i class=\'icon icon-youtube-play\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="pre" data-command-label="Insert Code" type="button" class="btn"><i class=\'icon icon-code\'></i></button>\n    <button data-command-name="mathjax" data-command-label="Insert Mathjax Formula" type="button" class="btn"><i class=\'glyphicons calculator\'></i></button>\n</div>\n<div class="btn-group">\n    <button data-command-name="comment" data-command-label="Insert Comment" type="button" class="btn"><i class=\'icon icon-comment\'></i></button>\n    <button data-command-name="comment-collapse" data-command-label="Collapse Comments" type="button" class="btn" data-command-hidden=\'true\'></button>\n</div>\n<div class="btn-group">\n    <button data-dropdown-trigger="paste" data-command-label="Paste" type="button" class="btn"><i class=\'icon icon-paste\'></i></button>\n    <button data-command-name="class" data-command-label="Edit Element Class" type="button" class="btn" data-command-hidden="true"></button>\n    <button data-command-name="save" data-command-label="Save File" type="button" class="btn" data-command-hidden="true"></button>\n</div>\n<div id=\'html-book-tools\'></div>\n<div class="drop-content" data-dropdown-name="paste">\n  <button data-command-name="pastefromword" data-command-label="Paste from Word" type="button" class="btn"><i class=\'icon icon-paste\'></i> Paste from Word</button>\n  <button data-command-name="pastetext" data-command-label="Paste Text" type="button" class="btn"><i class=\'icon icon-paste\'></i> Paste from Text</button>\n</div>\n<div class="btn-group">\n    <button data-command-name="shortcuts" data-command-label="View Shortcuts" type="button" class="btn naked">' + c((r = n.meta || e && e.meta, a = { hash: {}, data: s }, r ? r.call(e, "?", a) : l.call(e, "meta", "?", a))) + "</button>\n</div>"
}),
    this.JST["editor/toolbar-visual"]
}.call(this),

function () {
    this.JST || (this.JST = {}),
        this.JST["templates/errors/404"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('  <div id="error-message">\n    <h2>404</h2>\n    <p>You don\'t have access to this page or it doesn\'t exist.</p>\n\n    <p><a href="javascript:history.back()">Go Back</a></p>\n\n\n    <p class="footer"><a href="/">O\'Reilly Atlas</a> &nbsp; <a href="https://atlas.oreilly.com/help">Help</a></p>\n  </div>\n') }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") }
}.call(this),

function () {
    this.JST || (this.JST = {}),
        this.JST["templates/home/invite_error"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="box" id="form-message">\n  There was an error sending the invite. Make sure fields are filled out.\n</div>\n') }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") }
}.call(this),
function () {
    this.JST || (this.JST = {}),
        this.JST["templates/home/invite_received"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="box" id="form-message">\n  Your invitation request has been received!\n</div>\n') }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") }
}.call(this),
function () {
    this.JST || (this.JST = {}),
    this.JST["templates/home/project_list_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<a href="'),
                    n.push(i(this.path_with_namespace)),
                n.push("\" class='list-padding'>"),
                n.push(i(app.helpers.is_current_user(this.owner.username))),
                n.push(i(this.name)),
                n.push('<i class="icon-angle-right list-icon"></i></a>\n')
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),

function () { this.JST || (this.JST = {}), this.JST["templates/import/index"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push("  <p>Click on a repo to import it from Github into Atlas.</p>\n  <div id='orgs'></div>\n  <h2> Your Github Repositories</h2>\n  <div id='your_project_list'></div>\n  <div id='your_org_repos'></div>\n") }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") } }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/import/orgs"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s, r; for (
                    n.push("<p> You can also import from organizations you belong to on Github. Select an organization to see it's repos. </p>\n  "), r = this.orgs, e = 0, s = r.length; s > e; e++) t = r[e],
                    n.push("\n    <span class='btn org_name'>"),
                    n.push(i(t.login)),
                    n.push("</span>\n  ");
                    n.push("\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/import/project"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<a href="'),
                n.push(i(app.helpers.default_label(this.atlas_url, "#"))),
                n.push("\" class='repo_row row "),
                n.push(i(this.label)),
                n.push("'>\n  <span class='span4'>\n    "),
                n.push(i(this.name)),
                n.push(" "), this.permissions.admin || (
                n.push("("),
                n.push(i(this.owner.login)),
                n.push(")")),
                n.push("\n  </span>\n  <span class='span2'>\n    <span class='btn btn'>\n      <i class='import file_import glyphicons'></i>\n      <i class='working icon-refresh icn-info icn-round spin-me'></i>\n      <i class=\"error icon-exclamation-sign icn-round icn-error\"></i>\n      <i class=\"success icn-round icon-check icn-success\"></i>\n      "),
                n.push(i(app.helpers.default_label(this.label, "Import"))),
                n.push("\n    </span>\n  </span>\n  <span class='span6 import_message'>\n  "),
                n.push(this.message),
                n.push("\n  </span>\n</a>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),

function () {
    this.JST || (this.JST = {}), this.JST["templates/projects/activity/branch_item"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<div class="time-descrip span3">\n  <i class="glyphicons git_branch"></i> <span class="timestamp" title="'),
                n.push(i(app.helpers.absoluteTime(this.created_at))),
                n.push('">'),
                n.push(i(app.helpers.fromNow(this.created_at))),
                n.push('</span>\n</div>\n<div class="span9 activity-description">\n  <p>\n  <strong>'),
                n.push(i(app.helpers.branch_name(_.last(this.data.ref.split("/"))))),
                n.push("</strong> created a new branch.\n  </p>\n</div>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/activity/commit_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t, e, s, r; for (n.push('<div class="time-descrip span3">\n  <i class="icons icon-pencil"></i> <span class="timestamp" title="'), n.push(i(app.helpers.absoluteTime(this.created_at))), n.push('">'), n.push(i(app.helpers.fromNow(this.created_at))), n.push('</span>\n</div>\n\n<div class="span9 activity-description">\n  <p><strong>'), n.push(i(null != this.data ? this.data.user_name : void 0)), n.push("</strong> made changes to "), n.push(i(app.helpers.branch_name(_.last(this.data.ref.split("/"))))), n.push(" branch.</p>\n    <ul>\n    "), r = this.data.commits, e = 0, s = r.length; s > e; e++) t = r[e], n.push('\n    <li class="commit-message">'), n.push(i(t.message)), n.push("</li>\n    "); n.push("\n    </ul>\n</div>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/activity/item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="time-descrip span3">\n  <i class="glyphicons git_compare"></i> <span class="timestamp" title="'), n.push(i(app.helpers.absoluteTime(this.created_at))), n.push('">'), n.push(i(app.helpers.fromNow(this.created_at))), n.push('</span>\n</div>\n</div>\n<div class="description span9">\n  '), n.push(i(JSON.stringify(this))), n.push("\n</div>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/activity/member_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="time-descrip span3">\n  '), n.push("joined" === this.action_name ? '\n  <i class="glyphicons user_add"></i>\n  ' : '\n  <i class="glyphicons user_remove"></i>\n  '), n.push('\n  <span class="timestamp" title="'), n.push(i(app.helpers.absoluteTime(this.created_at))), n.push('">'), n.push(i(app.helpers.fromNow(this.created_at))), n.push('</span>\n</div>\n<div class="span9 activity-description">\n  <p>\n  <span class="author-name">'), n.push(i(this.author_id)), n.push("</span>\n  "), n.push(i(this.action_name)), n.push(" the project.\n  </p>\n</div>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/activity/merge_request_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="time-descrip span3">\n  <i class="glyphicons git_compare"></i> <span class="timestamp" title="'), n.push(i(app.helpers.absoluteTime(this.created_at))), n.push('">'), n.push(i(app.helpers.fromNow(this.created_at))), n.push('</span>\n</div>\n<div class="span9 activity-description">\n  <p>\n    '), _.contains(["closed", "accepted"], this.action_name) ? (n.push("\n    "), n.push(i(this.target_title)), n.push(" were reviewed.\n    ")) : (n.push("\n    <strong>"), n.push(i(this.target_title.split(" ")[2])), n.push('</strong> submitted:\n    <span class="merge-request-title">'), n.push(i(this.target_title)), n.push("</span>.\n    ")), n.push("\n  </p>\n</div>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/diff"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="diff-wrapper">\n<div class="filename">\n'), n.push(i(this.new_path)), n.push('\n</div>\n<pre class="diff">'), n.push(i(_.escape(this.diff))), n.push("</pre>\n</div>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),

function () { return this.JST || (this.JST = {}), this.JST["projects/file_list_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return l += '<a class="editor-link" href="', (a = n.editor_link) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.editor_link, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + '" title="', (a = n.name) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.name, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + '">\n  <i class="' + p((a = n.getFileIcon || e && e.getFileIcon, o = { hash: {}, data: s }, a ? a.call(e, e && e.name, o) : u.call(e, "getFileIcon", e && e.name, o))) + '"></i> &nbsp;', (a = n.name) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.name, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + "\n</a>\n\n<a class=\"pull-right\"><i class='add-it list-icon icn-round glyphicons plus'></i></a>" }), this.JST["projects/file_list_item"] }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/projects/git_settings"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                n.push('<h3>Git URL</h3>\n\n<p>To work on your files locally with Git, please add your SSH key to Atlas from your <a href="/settings">account settings</a>.\n\n<form class="form-inline">\n<input type="text" value="'), n.push(i(this.ssh_url_to_repo)), n.push('" id="git-url" class="span4" readonly />\n</form>\n\n<h3>Downloads</h3>\n\n<p>You can download your entire project as a compressed file as either a zip or tar.gz.</p>\n\n<div class="btn-group">\n  <a class="btn btn-medium" href="/'), n.push(i(this.path_with_namespace)), n.push('/archive/master.zip">Zip</a>\n  <a class="btn btn-medium" href="/'), n.push(i(this.path_with_namespace)), n.push('/archive/master.tar.gz">Tar.gz</a>\n</div>\n\n'), app.helpers.is_project_owner(app.data.project, app.data.get("user")) && (n.push('\n<h3>Delete Project</h3>\n\n<p>Click the button below to delete this project. <strong>Deleting a project is permanent and immediate.</strong></p>\n\n<button class="btn btn-error btn-medium" id="delete-project">Delete</button>\n\n<div id="delete-modal" class="modal hide" role="dialog">\n  <form id="delete-form">\n  <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal">\xd7</button>\n    <h3 id="myModalLabel">Confirm deleting the project</h3>\n  </div>\n  <div class="modal-body">\n    <p>This <strong>cannot</strong> cannot be undone and will permanently delete <strong>'),
                    n.push(i(this.path_with_namespace)), n.push('</strong>.</p>\n\n    <p>Please type in the name of the project to confirm</p>\n    <div class="row-fluid">\n    <input tabindex="-1" type="text" id="confirm-input" autofocus class="span12"/>\n    </div>\n  </div>\n  <div class="modal-footer">\n    <button class="btn" data-dismiss="modal">Cancel</button>\n    <a href="#" class="btn btn-primary btn-disabled" id="delete-button">Confirm Delete</a>\n  </div>\n  </form>\n</div>\n')), n.push("\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["projects/invites_list_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = "function", p = this.escapeExpression, u = n.helperMissing; return (a = n.email) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.email, r = typeof a === c ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + ' <span class="access-level">' + p((a = n.getGitlabAccessLevel || e && e.getGitlabAccessLevel, o = { hash: {}, data: s }, a ? a.call(e, e && e.permission_level, o) : u.call(e, "getGitlabAccessLevel", e && e.permission_level, o))) + "</span>" }), this.JST["projects/invites_list_item"] }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/projects/new"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function() {
    (function() {
        n.push('<div id="new-project">\n  <div class="control-group row-fluid">\n    <div class="span4">\n      <label>Owner</label>\n      <div id=\'namespace-picker\'></div>\n    </div>\n\n    <div class="span8">\n      <label>Title</label>\n      <input type="text" class="project-title" placeholder="'),
       n.push(i(this.name)),
        n.push('">\n      <input class="project-name" type="hidden" disabled>\n    </div>\n  </div>\n\n  <div class="control-group row-fluid">\n    <label>Description</label>\n    <textarea class="span12 project-description" type="text" placeholder="'),
        n.push(i(this.description)),
        n.push('"></textarea>\n  </div>\n\n  <div class="control-group">\n    <h3>Template</h3>\n    <p>What kind of project will this be?</p>\n    <label class="radio">\n    <input type="radio" name="template" value="oreillymedia/atlas_book_skeleton" class="project-template" checked="checked">Book\n    <span class="help-block">Start out with chapters, a table of contents, frontmatter, and all the other main ingredients for making a book.</span>\n    </label>\n\n    <label class="radio">\n    <input type="radio" name="template" value="oreillymedia/presentation-template" class="project-template">Presentation\n    <span class="help-block">Build a slideshow presentation targeted at HTML or PDF output.</span>\n    </label>\n\n    <label class="radio">\n    <input type="radio" name="template" value="oreillymedia/atlas_basic_template" class="project-template">Basic\n    <span class="help-block">A barebones template that includes the absolute minimum to get you started.</span>\n    </label>\n\n    <a href="#" id="advanced">Advanced</a>\n    <div class="hide">\n      <label class="radio">\n      <input type="radio" name="template" value="oreillymedia/atlas_theme_template" class="project-template">Theme\n      <span class="help-block">Creates the document structure and placeholder files for a new theme. <a href="http://docs.atlas.oreilly.com/ch07.html#cssthemes">Learn more about themes here.</a></span>\n      </label>\n\n      <label class="radio">\n      <input type="radio" name="template" value="" class="project-template">Bare\n     ' +
            ' <span class="help-block">An absolutely empty repository.</span>\n      </label>\n\n      <label class="radio">\n      <input class="project-template custom-project-radio" type="radio" name="template" value="custom">Custom\n      <span class="help-block">Import a custom project template. Enter a full git url to the public repository here:</span>\n      </label>\n\n      <input class="span6 custom-project-template" type="text" placeholder="'),
        n.push(i(this.customtemplate)),
        n.push('"></input>\n    </div>\n  </div>\n\n  <div id=\'create_button\' class="down10 create" ></div>\n</div>\n\n')
    }).call(this) 
    
}.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["projects/selected_file_list_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<a class="editor-link" href="', (a = n.editor_link) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.editor_link, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '">\n  <i class="icon-file-text-alt"></i> ', (a = n.file_path) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.file_path, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '\n</a>\n<a class="pull-right">\n  <i class="remove list-icon icn-round glyphicons minus"></i>\n</a>\n<i class="glyphicons show_lines handle pull-right"></i>' }), this.JST["projects/selected_file_list_item"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["projects/typeahead"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o, l = "", c = n.helperMissing, p = this.escapeExpression, u = "function"; return l += '<img src="' + p((a = n.gravatarUrl || e && e.gravatarUrl, o = { hash: {}, data: s }, a ? a.call(e, e && e.email, o) : c.call(e, "gravatarUrl", e && e.email, o))) + '?s=32"> <strong>', (a = n.nickname) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.nickname, r = typeof a === u ? a.call(e, { hash: {}, data: s }) : a), l += p(r) + "</strong>" }), this.JST["projects/typeahead"] }.call(this),

function () { this.JST || (this.JST = {}), this.JST["templates/reviews/closed"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function() {
     n.push("<h3>"), n.push(i(this.author.username)), n.push("'s changes were merged in to master "), n.push(i(app.helpers.fromNow(this.updated_at))), n.push(".</h3>\n<p>"), n.push(i(this.description)), n.push('</p>\n<img src="'), n.push(i(this.author.avatar_url)), n.push('">\n')
}).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/diff_editor_controls"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { this.remaining ? (n.push("\n\n  <div class=\"dual-button\" id=\"diff-editor-controls-arrows\">\n    <button class='btn' data-action='select_prev' "), this.remaining || n.push(i("disabled")), n.push(" ><i class=\"glyphicons up_arrow\"></i></button>\n    <button class='btn' data-action='select_next' "), this.remaining || n.push(i("disabled")), n.push(' ><i class="glyphicons down_arrow"></i></button>\n  </div>\n\n  <div class="dual-button" id="diff-editor-controls-accepts">\n    <button class=\'btn btn-success\' data-action=\'accept_current_mark\' '), this.edit || n.push(i("disabled")), n.push(" >\n       <i class='icon-thumbs-up'></i> Accept "), n.push("\n    </button>\n    <button class='btn btn-error' data-action='reject_current_mark' "), this.edit || n.push(i("disabled")), n.push(" >\n      <i class='icon-thumbs-down'></i> Reject "), n.push('\n    </button>\n  </div>\n\n  <p>\n    You can also <br>\n   ' +
    ' <a href="#" data-action=\'accept_all\' id="accept-all">Accept All</a> or <a href="#" data-action=\'reject_all\' id="reject-all">Reject All</a>\n  </p>\n')) : n.push(this.all_done ? "\n  <p>All changes reviewed</p>\n" : "\n  <p>No more changes in this file</p>\n    <button class='btn btn-info btn-medium block next_file align-center'><i class=' glyphicons down_arrow'></i> Next File</button>\n"), n.push("\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () {
    this.JST || (this.JST = {}), this.JST["templates/reviews/fails"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () {
            (function () {
                var t, e, s;
                for (
                    n.push('<div id="review-fail" class="box fail">\n  <p>The following changes could not be automatically merged:</p>\n\n  '), e = 0, s = this.length; s > e; e++) t = this[e],
                        n.push("\n    "), 2 === t[1][0] ? (n.push("\n      <textarea disabled>"),
                        n.push(i(_.reduce(t[1][1], function (t, e) { return t + e[1] }, ""))),
                        n.push("</textarea>\n    ")) : (n.push("\n      "), null != t[1][1] && t[1][1].length > 0 && (n.push("\n        <textarea disabled>"),
                        n.push(t[1][1]),
                    n.push("</textarea>\n      ")),
                    n.push("\n    ")),
                    n.push("\n  ");
                n.push("\n</div>\n")
            }).call(this)
        }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/file_list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push("<li class='"), this.active && n.push(i("active")), n.push("'>\n  <a href='#' class='list-padding'>\n    <i class="), n.push(this.done ? "'icon-check-sign'" : " 'icon-sign-blank' "), n.push(" ></i>\n    "), n.push(i(this.path)), n.push("\n  </a>\n</li>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<h3><img src="'), n.push(i(this.author.avatar_url.replace("s=40", "s=32"))), n.push('">'), n.push(i(this.author.username)), n.push(" sent changes to "), n.push(i(this.target_branch)), n.push(" "), n.push(i(app.helpers.fromNow(this.created_at))), n.push("</h3>\n"), app.data.can_project("admin") && (n.push('\n<a class="btn btn-success" href="'), n.push(i(app.paths.project_path())), n.push("/reviews/"), n.push(i(this.id)), n.push('">Review changes</a>\n')), n.push('\n\n<p class="merge-request-description">'), n.push(i(this.description)), n.push("</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/loading"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push(i(this.label)), n.push("\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/merge_tool"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/other"] = function (t) { t || (t = {}); var e, n = [], i = t.safe, s = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, s || (s = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<h2>Other changes</h2>\n\n<ul class="list"></ul>\n') }).call(this) }.call(t), t.safe = i, t.escape = s, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/saving"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push("<p>Saving the changes to the master copy. This might take a little while.</p>\n\n<p>"), n.push(i(this.label)), n.push("</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),

function () {
    this.JST || (this.JST = {}), this.JST["templates/reviews/static_add"] = function (t) {
        t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }), function () { (function () { var t; n.push('<h3><i class="glyphicons circle_plus"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" added this file. The file will automatically be accepted.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("")
    }
}.call(this),
function() {
     this.JST || (this.JST = {}), this.JST["templates/reviews/static_add_add"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t, e; n.push('<h3><i class="icon-warning-sign"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" created this file, but a file with the same name was also created in the master copy. The new file by "), n.push(i((null != (e = this.merge_request.author) ? e.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" will be ignored, and the file in the master copy will be kept.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") }
}.call(this),

function () { this.JST || (this.JST = {}), this.JST["templates/reviews/static_binary"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t; n.push('<h3><i class="glyphicons picture"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" made changes to the file, but because it's a binary file, it cannot be shown in the track changes panel. The changes to the file will automatically be accepted.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/static_del"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t; n.push('<h3><i class="glyphicons bin"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" deleted this file. The deletion will automatically be accepted.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/static_del_edt"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t; n.push('<h3><i class="icon-warning-sign"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" deleted this file, but the same file was edited in the master copy. The deletion will be ignored, and the changes in the master copy will be kept.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/reviews/static_edt_del"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { var t; n.push('<h3><i class="icon-warning-sign"></i> '), n.push(i(this.path)), n.push("</h3>\n\n<p>"), n.push(i((null != (t = this.merge_request.author) ? t.username : void 0) || app.helpers.branch_name(this.merge_request.source_branch))), n.push(" edited this file, but the same file was deleted in the master copy. The edits will be ignored, and the file will stay deleted in the master copy.</p>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () {
    return this.JST || (this.JST = {}), this.JST["settings/code_list_item"] = Handlebars.template(function (t, e, n, i, s) {
        function r() { return '\n  <a href="#"><i class="glyphicons circle_remove list-icon"></i></a>\n' } this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var a, o, l, c = "", p = "function", u = this.escapeExpression, h = n.helperMissing, d = this; return (o = n.code) ? a = o.call(e, { hash: {}, data: s }) : (o = e && e.code,
            a = typeof o === p ? o.call(e, { hash: {}, data: s }) : o), c += u(a) + ' <span class="days">' + u((o = n.codeLabel || e && e.codeLabel, l = { hash: {}, data: s }, o ? o.call(e, e, l) : h.call(e, "codeLabel", e, l))) + "</span>\n\n", a = n["if"].call(e, e && e.active, { hash: {}, inverse: d.noop, fn: d.program(1, r, s), data: s }), (a || 0 === a) && (c += a), c
    }), this.JST["settings/code_list_item"]
}.call(this),
function () { return this.JST || (this.JST = {}), this.JST["settings/codes_view"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<div class="box-top">\n  <h3>Registration Code</h3>\n</div>\n<div class="box-inner">\n\n  <form id="code-form" class="form-inline down20">\n    <input type="text" id="registration_code" name="registration_code" placeholder="Enter new registration code" />\n    <input type="submit" class="btn btn-success" />\n  </form>\n\n</div>' }), this.JST["settings/codes_view"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["settings/group_detail"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += "<h2>", (a = n.name) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.name, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '</h2>\n<div class="collaborators-list-container"></div>' }), this.JST["settings/group_detail"] }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/settings/group_list_item"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<a href="/settings/groups/'), n.push(i(this.name.toLowerCase())), n.push('">'), n.push(i(this.name)), n.push("</a>\n") }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["settings/keys_view"] = Handlebars.template(function (t, e, n, i, s) { return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}, '<div class="box-top">\n  <h3>SSH Keys</h3>\n</div>\n<div class="box-inner">\n\n  <form id="ssh-form" class="form down20">\n    <div class="row-fluid">\n      <h3>Add an SSH Key</h3>\n\n      <label>Title</label>\n      <input class="span9" type="text" id="ssh_key_title" name="ssh_key_title">\n      <span class="help-block">A short title to help you remember what this key is.</span>\n\n      <label>Public Key</label>\n      <textarea class="span9" placeholder="Add a new SSH key..." type="text" name="new_public_ssh_key" id="new-public-ssh-key"></textarea>\n      <span class="help-block">A public SSH key should start with "ssh-rsa" and end with an email address. To create an SSH key, <a href="http://docs.atlas.oreilly.com/ch09.html#sshkeys">read this</a>.</span>\n\n      <span class="help-block">If you have multiple accounts, you must use a different SSH key for each account.</span>\n\n      <input id="new-ssh-key-button" type="submit" class="btn btn-success" value="Add Key"/>\n    </div>\n  </form>\n</div>' }), this.JST["settings/keys_view"] }.call(this),
function () { this.JST || (this.JST = {}), this.JST["templates/settings/notifications_view"] = function (t) { t || (t = {}); var e, n = [], i = function (t) { return t && t.ecoSafe ? t : "undefined" != typeof t && null != t ? r(t) : "" }, s = t.safe, r = t.escape; return e = t.safe = function (t) { if (t && t.ecoSafe) return t; ("undefined" == typeof t || null == t) && (t = ""); var e = new String(t); return e.ecoSafe = !0, e }, r || (r = t.escape = function (t) { return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }), function () { (function () { n.push('<div class="box-top">\n  <h3><i class="glyphicons envelope"></i> Notifications</h3>\n</div>\n<div class="box-inner">\n\n  <p>\n    <label for="notifications-checkbox">\n      <input type="checkbox" '), n.push(i(this.notifications ? "checked" : void 0)), n.push(' id="notifications-checkbox" /> Receive email notifications.\n    </label>\n  </p>\n</div>\n') }).call(this) }.call(t), t.safe = s, t.escape = r, n.join("") } }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["settings/ssh_list_item"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<span class="key-title">', (a = n.title) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.title, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '</span> <span class="truncated-key">', (a = n.truncated_key) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.truncated_key, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '</span>\n<a href="#"><i class="glyphicons circle_remove"></i></a>' }), this.JST["settings/ssh_list_item"] }.call(this),
function () { return this.JST || (this.JST = {}), this.JST["settings/token_view"] = Handlebars.template(function (t, e, n, i, s) { this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, t.helpers), s = s || {}; var r, a, o = "", l = "function", c = this.escapeExpression; return o += '<div class="box-top">\n  <h3><i class="glyphicons lock"></i> API Token</h3>\n</div>\n<div class="box-inner">\n	\n  <p>Use this API Token to access the Atlas API programmatically:</p>\n\n	<pre id="authentication-token">', (a = n.authentication_token) ? r = a.call(e, { hash: {}, data: s }) : (a = e && e.authentication_token, r = typeof a === l ? a.call(e, { hash: {}, data: s }) : a), o += c(r) + '</pre>\n\n	<p>Please keep this token secret, and reset the token if compromised.</p>\n\n	<a href="#" id="reset-token-link" class="btn btn-error">Reset Token</a>\n	\n</div>' }), this.JST["settings/token_view"] }.call(this),

function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.BoxView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "box",
            n.prototype.ERROR_INIT_TEMPLATES = "You have to initialize the BoxView with an object of templates",
            n.prototype.initialize = function () { if (null == this.options.templates) throw new Error(this.ERROR_INIT_TEMPLATES); return this.templates = this.options.templates, this.options.attributes["class"] ? this.$el.addClass(this.options.attributes["class"]) : void 0 },
            n.prototype.render = function (t, e) { var n; return n = function () { return "string" == typeof e ? { label: e } : e }(), this.$el.html(this.templates[t](n)), this }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.BranchBannerView = function (e) {
        function i() { return this.create_branch = t(this.create_branch, this), i.__super__.constructor.apply(this, arguments) } return n(i, e),
            i.prototype.className = "branch-callout",
            i.prototype.events = { "click #create-branch": "create_branch" },
            i.prototype.initialize = function () { var t; if (null == app.data.get("state")) throw new Error(classes.BranchesView.ERROR_INIT_STATE); return this.template = JST["templates/shared/branch_banner"], this.data = { branches: app.data.get("project").branches, current_branch: app.data.get("state").branch, project: app.data.project, user: app.data.get("user"), current_page: this.current_page() }, t = _.find(this.data.branches, function (t) { return function (e) { return t.data.user.nickname === app.helpers.branch_name(e) } }(this)), null != t ? this.data.own_branch = t : void 0 }, i.prototype.render = function () {
                return this.data.branches.length > 0 && (this.$el.html(this.template(this.data)), app.helpers.is_own_branch(this.data.user.nickname, this.data.current_branch) && (this.dropbutton = new classes.DropButtonView({
                    models: [{ label: "Send Edits to Master", main: !0, onclick: app.paths.compare_path(this.data.current_branch) },
                        { label: "Delete this branch", className: "delete-branch", onclick: function () { var t; return confirm("Are you sure? All changes in this branch will be lost, this cannot be undone.") && (t = app.data.project.get("path_with_namespace"), classes.AtlasApi.delete_branch(t, app.data.get("state").branch, function () { return window.location.pathname = t }, function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error deleting this branch, please try again.") })), !1 } }]
                }), this.$el.find("#branch-action-btn").html(this.dropbutton.render().el))), this
            }, i.prototype.current_page = function () { var t; return t = null != app.data.get("breadcrumb") ? "dashboard" === app.data.get("breadcrumb") ? "/branch" : "/" + app.data.get("breadcrumb") + "/branch" : "/editor", "/" + app.data.project.get("path_with_namespace") + t }, i.prototype.switch_branch_url = function (t) { var e, n, i, s; return n = window.location.pathname, s = app.data.get("project").path_with_namespace, i = app.data.get("state").path, e = app.data.get("breadcrumb"), window.location = "dashboard" === e ? "/" + s + "/branch/" + t + "/" + i : "/" + s + "/" + e + "/branch/" + t + "/" + i }, i.prototype.change_branch = function (t) { return window.location = app.paths.branch_path(this.data.current_page, t, app.data.get("state").path) },
            i.prototype.create_branch = function () {
            var t, e; return t = "" + this.data.user.nickname + "-at" + app.helpers.new_atlas_epoch(), e = this.$("#create-branch").text(), this.$("#create-branch").addClass("working").text("Creating branch..."), classes.AtlasApi.create_branch(app.data.get("project").path_with_namespace, t, "master", function (e) { return function () { return e.change_branch(t) } }(this), function (t)
            { return function () { return t.$("#create-branch").removeClass("working").html(e), app.mailman.trigger(app.events.FLASH_ERROR, "Error creating branch: " + error.message) } }(this)), !1
        }, i
    }(Backbone.View)
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.BranchesView = function (e) {
        function i() { return this.go_to_own_branch = t(this.go_to_own_branch, this), this.attach_drop = t(this.attach_drop, this), i.__super__.constructor.apply(this, arguments) } return n(i, e),
            i.prototype.className = "down10", i.prototype.events = { "click #goto-branch": "go_to_own_branch" },
            i.prototype.initialize = function () { if (null == app.data.get("state")) throw new Error(classes.BranchesView.ERROR_INIT_STATE); if (null == app.data.get("project").branches) throw new Error(classes.BranchesView.ERROR_INIT_BRANCHES); return this.template = JST["templates/shared/branches"], this.data = { current_page: this.current_page(), current_branch: app.data.get("state").branch, branches: app.data.get("project").branches, current_nickname: app.data.get("user").nickname, project_path: app.data.project.get("path_with_namespace") }, this.branch_banner = new classes.BranchBannerView }, i.prototype.current_page = function () { var t; return t = "dashboard" === app.data.get("breadcrumb") ? "" : "/" + app.data.get("breadcrumb"), "/" + app.data.project.get("path_with_namespace") + t + "/branch" }, i.prototype.render = function () { return this.$el.html(this.template(this.data)), this.data.branches.length > 0 && this.$el.find(".branch-callout-container").html(this.branch_banner.render().el), $.doTimeout("letrender", 20, this.attach_drop), this.set_lock_status(), this }, i.prototype.set_lock_status = function () { return app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch) ? this.$el.addClass("locked") : this.$el.removeClass("locked") },
            i.prototype.attach_drop = function () { return this.drop = new Drop({ target: this.$(".current-branch")[0], content: this.$(".branch-select").first().html(), position: "bottom left", classes: "big-drop", openOn: "click" }), this.drop.on("close", function (t) { return function () { return t.drop.destroy(), t.attach_drop() } }(this)) },
            i.prototype.change_branch = function (t) { var e, n, i, s; return n = window.location.pathname, s = app.data.get("project").path_with_namespace, i = app.data.get("state").path, e = app.data.get("breadcrumb"), window.location = "dashboard" === e ? "/" + s + "/branch/" + t + "/" + i : "/" + s + "/" + e + "/branch/" + t + "/" + i }, i.prototype.go_to_own_branch = function () {
            var t; return t = _.find(this.data.branches, function (t) { return app.helpers.branch_name(t) === app.data.get("user").nickname }),
                this.change_branch(t)
        }, i
    }(Backbone.View), classes.BranchesView.ERROR_INIT_STATE = "BranchesView must be instantiated with an app state.", classes.BranchesView.ERROR_INIT_BRANCHES = "BranchesView must be instantiated with an array of branches in app.data.project."
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.BreadcrumbsView = function (e) {
        function i() { return this.dashboard_link = t(this.dashboard_link, this), i.__super__.constructor.apply(this, arguments) } return n(i, e),
            i.prototype.initialize = function (t) { if (this.state = t.state, this.project = t.project, this.template = JST["templates/shared/breadcrumbs"], !this.state) throw new Error(classes.BreadcrumbsView.ERROR_INIT_STATE); if (!this.project) throw new Error(classes.BreadcrumbsView.ERROR_INIT_PROJECT); return this.has_branches() ? this.branches = new classes.BranchesView : void 0 }, i.prototype.has_branches = function () { var t; return t = ["activity", "settings"], !_.contains(t, app.data.get("breadcrumb")) }, i.prototype.render = function () { return this.$el.html(this.template({ can_project_admin: app.data.can_project("admin"), project: this.project.toJSON(), breadcrumb: app.data.get("breadcrumb"), configure_link: this.nav_link("configure"), builds_link: this.nav_link("builds"), compare_link: "/" + this.project.get("path_with_namespace") + "/compare/" + app.data.get("state").branch + "...master", reviews_link: "/" + this.project.get("path_with_namespace") + "/reviews", dashboard_link: this.dashboard_link(), has_branches: this.has_branches(), branch: this.state.branch })), this.has_branches() && (this.get_reviews_count(), this.set_lock_status(), this.$("#branches-container").html(this.branches.render().el)), this }, i.prototype.get_reviews_count = function () { return "master" === this.state.branch ? (this.merge_requests = new app.data.gitlab.MergeRequests([], { project: app.data.project, state: "opened" }), this.merge_requests.fetch({ success: function (t) { return function () { var e; return e = t.merge_requests.length, e > 0 && 10 > e ? t.$("#review-count").html("<span>" + e + "</span>") : e >= 10 ? t.$("#review-count").html("<span>10+</span>") : void 0 } }(this) })) : void 0 },
            i.prototype.set_lock_status = function () { return app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch) ? this.$el.addClass("locked") : this.$el.removeClass("locked") }, i.prototype.dashboard_link = function () { var t; return t = app.data.get("state").branch, "master" !== t ? "/" + this.project.get("path_with_namespace") + "/branch/" + t : "/" + this.project.get("path_with_namespace") + "/" },
            i.prototype.nav_link = function (t)
        { var e; return e = app.data.get("state").branch || "", "master" !== e ? "/" + this.project.get("path_with_namespace") + "/" + t + "/branch/" + e : "/" + this.project.get("path_with_namespace") + "/" + t + "/" }, i
    }(Backbone.View), classes.BreadcrumbsView.ERROR_INIT_STATE = "BreadcrumbsView must be instantiated with an app state.", classes.BreadcrumbsView.ERROR_INIT_PROJECT = "BreadcrumbsView must be instantiated with an app project."
}.call(this),
function () { classes.BuildFileListItemView = Backbone.View.extend({ className: "list-item list-padding", backboneClass: "BuildFileListItemView", events: { "click .remove": "remove_from_list" }, initialize: function () { if (!this.options.template) throw new Error(app.constants.ERROR_NO_TEMPLATE); return this.template = this.options.template }, remove_from_list: function () { return this.model.destroy(), this.remove(), this.delegateEvents() }, render: function () { return this.$el.html(this.template(this.model.toJSON({ name: this.model.get("name"), backboneClass: this.model.backboneClass, unopenable: this.model.get("unopenable") }))), this.delegateEvents(), this } }) }.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.BuildListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.messages = { empty: "There are no builds to show", loading: "Loading builds..." },
            n.prototype.initialize = function () { var t; if (!this.model) throw new Error(classes.BuildListView.ERROR_INIT_MODEL); return this.polling_rate = null != this.options.polling_rate ? this.options.polling_rate : 5, t = { project: this.model.get("path_with_namespace"), branch: app.data.get("state").branch }, this.collection = new classes.Builds([], t), this.listenTo(this.collection, "add", function (t) { return function (e) { return t.model_to_view(e, !0) } }(this)), this.listenTo(this.collection, "reset", function (t) { return function (e) { return t.views = [], t.$el.empty(), _.each(e.models, function (e) { return t.model_to_view(e, !1) }) } }(this)) },
            n.prototype.model_to_view = function (t, e) { var n; return null == e && (e = !1), n = new classes.BuildListItemView({ model: t }), this.add(n, e), this.sort_by("id", "desc") },
            n.prototype.fetch_builds = function (t) { return null == t && (t = { success: function () { return !0 }, error: function () { return !1 } }), this.show_message("loading"), this.collection.fetch({ success: function (e) { return function () { return e.hide_message("loading"), t.success() } }(this), error: function () { return function () { return t.error() } }(this) }) },
            n.prototype.poll = function () { var t; return t = this, $.doTimeout("buildfetch", 1e3 * this.polling_rate, function (e) { return function () { return e.collection.fetch({ data: { branch: app.data.get("state").branch, project: app.data.get("project").path_with_namespace }, success: function (t) { var n; return n = t.some(function (t) { return _.some(t.get("status"), function (t) { return "working" === t.status || "queued" === t.status }) }), n || e.unpoll(), e.render() }, error: function (e, n) { return this.has_errored || app.mailman.trigger(app.events.FLASH_ERROR, "Something went wrong when trying to update the build list. Please refresh the page for updates."), this.has_errored = !0, 404 === n.status ? t.unpoll() : void 0 } }), !0 } }(this)) },
            n.prototype.unpoll = function () { return $.doTimeout("buildfetch") },
            n.prototype.view_selected = function (t, e) { return this.trigger(app.events.SELECT, t, e) }, n
    }(Backbone.View), classes.BuildListView.ERROR_INIT_MODEL = "You need to initialize this view with a Gitlab Project model"
}.call(this),
function () { classes.BuildListItemView = Backbone.View.extend({ className: "list-item", backboneClass: "BuildListItemView", events: { "click a.build-log-btn": "clicked" }, initialize: function () { return this.template = JST["templates/shared/build_list_item"] }, render: function () { return this.$el.html(this.template(this.model.toJSON({ name: this.model.get("name"), backboneClass: this.model.backboneClass, unopenable: this.model.get("unopenable") }))), this.delegateEvents(), this }, clicked: function (t) { return this.trigger(app.events.SELECT, this, t) } }) }.call(this),
function () { classes.ButtonView = Backbone.View.extend({ tagName: "a", className: "btn", backboneClass: "ButtonView", events: { click: "clicked" }, initialize: function () { if (this.current_state = this.options.current_state || this.options.default_state || "", !this.model) throw new Error(app.constants.ERROR_NO_MODEL); return this.states = this.model.get("states"), this.states ? this.model.unset("states") : this.states = { "default": this.model.get("label") } }, render: function () { var t; return this.$el.html(this.states[this.current_state || "default"]), t = this.model.toJSON(), t["class"] ? t["class"] += " " + this.current_state + " " + this.className : t["class"] = ("" + this.current_state + " " + this.className).trim(), _.each(t, function (t) { return function (e, n) { return "label" !== n ? t.$el.attr(n, e) : void 0 } }(this)), this.delegateEvents(), this }, clicked: function (t) { var e; return "#" === this.model.get("href") && t.preventDefault(), "disabled" !== (e = this.current_state) && "working" !== e ? this.trigger(app.events.SELECT, this, t) : (t.preventDefault(), !1) }, change_state: function (t) { var e; return null == t && (t = "default"), this.current_state !== t && (this.current_state = t, this.render(), "success" === (e = this.current_state) || "error" === e) ? $.doTimeout(1500, function (t) { return function () { return t.change_state(t.options.default_state), !1 } }(this)) : void 0 } }) }.call(this),
function () { var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.CollaboratorListItemView = function (e) { function i() { return this.destroy = t(this.destroy, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.className = "list-item list-padding", i.prototype.tagName = "li", i.prototype.events = { "click a.remove-collaborator": "destroy" }, i.prototype.initialize = function () { return this.template = JST["templates/shared/collaborator_list_item"] }, i.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON())), this }, i.prototype.destroy = function (t) { return t.preventDefault(), this.model.destroy() }, i }(Backbone.View) }.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.CollaboratorsListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.tagName = "ul",
            n.prototype.className = "collaborators-list list list-gray",
            n.prototype.messages = { empty: "There are currently no collaborators", loading: "Loading collaborators..." },
            n.prototype.initialize = function (t) { if (null != t.group) this.group = t.group, this.collection = new classes.Collaborators([], { group: t.group.get("id") }); else { if (null == t.project) throw new Error("You have to initialize this view with either a group or a project"); this.project = t.project, this.collection = new classes.Collaborators([], { project: t.project.get("path_with_namespace") }) } return this.collection.each(this.model_to_view), this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "remove", this.destroy) },
            n.prototype.model_to_view = function (t) { var e; return this.project && t.get("username") === this.project.get("owner").username && t.set("isOwner", !0), e = new classes.CollaboratorListItemView({ model: t }), this.hide_message("loading"), this.add(e) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.CollectionView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.initialize = function () { if (!this.options.child_view) throw "no child view constructor provided"; return this.options.messages && (this.messages = this.options.messages), this.collection.each(this.model_to_view, this), this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "remove", this.destroy), this.listenTo(this.collection, "reset", function (t) { return this.views = [], this.$el.empty(), t.each(this.model_to_view, this), 0 === t.models.length ? this.show_message("empty") : void 0 }), this.on(app.events.FILTER, this.on_filter) },
            n.prototype.model_to_view = function (t) { var e, n; return e = { model: t }, this.options.child_template && (e.template = this.options.child_template), n = new this.options.child_view(e), this.listenTo(n, app.events.SELECT, this.view_selected), this.add(n) },
            n.prototype.view_selected = function (t, e) { return this.trigger(app.events.SELECT, t, e) },
            n.prototype.on_filter = function (t) { return t.length ? this.hide_message("empty") : this.show_message("empty") }, n
    }(Backbone.View)
}.call(this),
function () { classes.EditorNoticeItemView = Backbone.View.extend({ className: "list-item list-padding", backboneClass: "ListItemView", events: { "click .flash-close": "dismiss" }, initialize: function () { if (!this.options.template) throw new Error(app.constants.ERROR_NO_TEMPLATE); return this.template = this.options.template }, dismiss: function (t) { return this.trigger(app.events.SELECT, this, t) }, render: function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this } }) }.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FeedbackModalView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "click .provide-feedback": "show_modal", "click #submit": "submit_feedback", "submit form": "submit_feedback" },
            n.prototype.initialize = function (t) { if (!t.data) throw "The FeedbackModal view must be instantiated with a data object"; return this.template_info = { buttonTag: t.buttonTag || "button", classes: t.classes || ["btn"], label: t.label || "Provide Feedback" }, this.template = JST["templates/shared/feedback"], this.data = t.data, this.path = window.location.pathname },
            n.prototype.show_modal = function () { return this.$(".feedback-form").modal() },
            n.prototype.submit_feedback = function (t) { var e; return t.preventDefault(), e = _.str.trim(this.$el.find(".feedback-comment").val()), 0 === e.length ? (this.$(".warning").html("The text field must not be empty to submit feedback."), !1) : ($.ajax({ method: "POST", url: "/api/feedback", data: { data: JSON.stringify(this.data), path: this.path, comment: e } }).done(function (t) { return function () { return t.$(".feedback-form").modal("hide"), app.mailman.trigger(app.events.FLASH_NOTICE, "Thank you for your feedback!"), t.$(".warning").html(""), t.$el.find(".feedback-comment").val("") } }(this)).fail(function (t) { return function () { return t.$(".warning").html("There was an error trying to submit your feedback. Please try again.") } }(this)), !1) },
            n.prototype.render = function () { return this.$el.html(this.template(this.template_info)), this }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FileActionsView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { mouseover: "mouseover", mouseout: "mouseout", "click button": "button_clicked", "keydown input": "keydown" }, n.clickhack = function () { var t; return t = _.extend({}, Backbone.Events), $(document).on("click", function (e) { return t.trigger("click", e) }), t }(),
            n.prototype.initialize = function (t) { return this.model = this.options.view.model, this.drop = new Drop({ target: t.target, content: JST["editor/sidebars/file_actions"](), position: "right middle", classes: "drop-theme-arrows-bounce file-actions", openOn: "always", remove: !0, constrainToScrollParent: !1 }), this.options.view.$el.addClass("hover"), this.options.view.$(".action").addClass("hover"), this.setElement(this.drop.content), this.mouseout(), this.setup_outside_click_detection() },
            n.prototype.setup_outside_click_detection = function () {
            return classes.FileActionsView.clickhack.on("click", function (t) {
                return function (e) {
                    return t.drop ? $.contains(t.drop.drop, e.target) || t.drop.drop.isEqualNode(e.target) || e.isPropagationStopped() || t.drop.target.isEqualNode(e.target) || $.contains(t.drop.target, e.target) ? void 0 : t.close() : void 0
                }
            }(this))
            },
            n.prototype.close = function (t) { var e; return null == t && (t = !0), t && (this.options.view.$el.removeClass("hover"), this.options.view.$(".action").removeClass("hover")), null != (e = this.drop) && e.close(), this.drop = void 0 }, n.prototype.mouseover = function () { return $.doTimeout("file-control-actions") },
            n.prototype.mouseout = function () { return $.doTimeout("file-control-actions", 5e3, function (t) { return function () { return t.close(), !1 } }(this)) },
            n.prototype.button_clicked = function (t, e) { var n, i; switch (null == e && (e = !1), e || (e = $(t.currentTarget).data("action")), null != t && t.stopPropagation(), e) { case "prompt-rename": return $(this.drop.content).html(JST["editor/sidebars/file_actions_rename"]({ name: this.model.get("name") })), this.drop.position(), app.editor_helpers.createTextSelection($(this.drop.content).find(".rename-input").get(0), 0, this.model.get("name").indexOf(".")); case "submit-rename": return n = $(this.drop.content).find(".rename-input").val().replace(/\ /g, "_"), i = this.options.controls.validate_file_name(n), i ? ($(this.drop.content).html(JST["editor/sidebars/file_actions_rename"]({ name: this.model.get("name"), error: i })), this.drop.position()) : (this.options.view.$(".action").addClass("spin-me"), this.options.controls.rename_file(this.model, n), this.close(!1)); case "prompt-delete": return $(this.drop.content).html(JST["editor/sidebars/file_actions_delete"]({ name: this.model.get("name") })), this.drop.position(); case "confirm-delete": return this.options.controls.delete_file(this.model), this.close() } },
            n.prototype.keydown = function (t) { return 13 === t.which ? this.button_clicked(void 0, "submit-rename") : void 0 }, n
    }(Backbone.View)
}.call(this),

function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.FileControlView = function (e) {
        function i() { return this.success = t(this.success, this), this.create_new_dir = t(this.create_new_dir, this), this.create_new_blank_file = t(this.create_new_blank_file, this), this.validate_file_name = t(this.validate_file_name, this), this.rename_file = t(this.rename_file, this), this.delete_file = t(this.delete_file, this), this.error_message = t(this.error_message, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.className = "file-controls", i.prototype.events = { "click .create_btn": "ask_new_file_name", "click .create_dir_btn": "ask_new_dir_name", "click .clicked_new_dir .create_dir_btn": "create_new_dir", "click .clicked_new_file .create_btn": "create_new_blank_file", "submit .clicked_new_file": "create_new_blank_file", "submit .clicked_new_dir": "create_new_dir", "click .cancel_btn": "hideInput" }, i.prototype.initialize = function () { return this.file_list = this.options.file_list, this.state = "", this.template = JST["editor/sidebars/file_control"], this.upload_view = new classes.UploadView({ file_list: this.file_list }), this.listenTo(this.upload_view, app.events.CREATE_FILE, this.create_file) }, i.prototype.render = function (t) { return null == t && (t = !1), this.$el.html(this.template({ state: this.state })), this.$("#file_controls_inner").prepend(this.upload_view.render(t).el), this },
            i.prototype.hideInput = function () { var t; return this.$(".dir_name").val("folder/"), this.$(".file_name").val("file.html"), this.setState(), null != (t = this.error_message_drop) ? t.close() : void 0 }, i.prototype.show_actions = function (t, e) { var n; return null != (n = this.actions) && n.close(), this.actions = new classes.FileActionsView({ target: e.target, controls: this, view: t }) }, i.prototype.error_message = function (t) { var e, n; return t = "<div class='flash'><div class='flash-item error'>" + t + "</div></div>", (null != (n = this.error_message_drop) ? n.content : void 0) && this.error_message_drop.close(), e = this.$("clicked_new_file" === this.state ? "input.file_name" : "clicked_new_dir" === this.state ? "input.dir_name" : "file-control-buttons"), this.error_message_drop = new Drop({ target: e.get(0), content: t, position: "top center", classes: "drop-theme-arrows-bounce drop-sidebar", openOn: "always", remove: !0, constrainToScrollParent: !1 }), $.doTimeout("file-control-message", 3500, function (t) { return function () { return t.error_message_drop.close(), !1 } }(this)) }, i.prototype.setState = function (t) { return null == t && (t = ""), this.state = t, this.$("#file_controls_inner").removeClass().addClass(t) }, i.prototype.delete_file = function (t) {
                return t.set({ id: "fakeid" }),
                    t.destroy({ success: function (e) { return function () { return e.maybe_redirect_on_action(t) } }(this), error: this.error })
            }, i.prototype.maybe_redirect_on_action = function (t)
        { return app.data.get("state").path === t.get("file_path") ? ($(window).off("beforeunload"), window.location = "/" + app.data.get("project").path_with_namespace) : void 0 },
            i.prototype.rename_file = function (t, e) { return t.fetch({ parse: !1, success: function (n) { return function () { var i, s; return s = app.helpers.nth_last_folder(t.get("file_path"), 1), "" !== s && (s += "/"), i = app.data.project.blob(s, n.file_list.collection.branch), i.save({ file_path: s + e, file_name: e, content: t.get("content"), encoding: t.get("encoding") }, { success: function () { return n.file_list.collection.add(i), n.maybe_redirect_on_action(t), t.destroy() } }) } }(this) }) }, i.prototype.ask_new_file_name = function () { return this.setState("clicked_new_file"), app.editor_helpers.createTextSelection(this.$(".file_name")[0], 0, 4) }, i.prototype.ask_new_dir_name = function () { return this.setState("clicked_new_dir"), this.$(".dir_name").focus() }, i.prototype.validate_file_name = function (t) { var e, n; return null == t && (t = ""), t = t.replace(/\ /g, "_"), e = this.file_list.collection.findWhere({ name: t }), n = !1, n = -1 !== t.indexOf("/") ? "Sorry no slashes in filenames." : 0 === t.length ? "Sorry, you need to enter a filename." : -1 === t.indexOf(".") ? "Sorry, you need a file extension." : e ? "That file already exists." : !1 }, i.prototype.create_new_blank_file = function (t)
            { var e, n, i; return t.preventDefault(), n = this.$(".file_name").val().replace(/\ /g, "_"), i = this.validate_file_name(n), i === !1 ? (e = this.get_boiler_plate(n.split(".")[1]), this.create_file(e, { name: n }), this.hideInput()) : this.error_message(i) }, i.prototype.create_new_dir = function (t) { var e, n; return t.preventDefault(), e = this.$(".dir_name").val().replace(/\ /g, "_"), n = this.file_list.find_dir(e.replace("/", "")), e.indexOf("/") + 1 !== e.length && -1 !== e.indexOf("/") ? this.error_message("Sorry, just one folder at a time.") : n ? this.error_message("That folder already exists") : (e = e.replace("/", ""), this.create_file(".", { name: e + "/.gitkeep" }), this.hideInput(), t.preventDefault()), !1 }, i.prototype.success = function (t, e, n) { var i, s, r, a; return a = t.get("name"), r = t.get("file_path"), s = this.file_list.collection.findWhere({ file_path: r }), this.render("Success!"), $.doTimeout("newfile", 3e3, function (t) { return function () { return t.render() } }(this)), n.insert && app.mailman.trigger(app.events.INSERT_IMAGE_SUCCESS, t, e, n), s ? void 0 : ".gitkeep" !== a ? this.file_list.collection.add(t) : (i = new app.data.project.tree(app.helpers.nth_last_folder(r, 1), this.file_list.collection.branch), this.file_list.collection.trees.push(i), this.file_list.add_dir(i, !0), this.file_list.sort()) },
            i.prototype.error = function (t, e) { return "Your changes could not be committed, because the file has been changed" === e.responseJSON.message ? app.mailman.trigger(app.events.FLASH_NOTICE, "" + t.get("name") + " could not be uploaded because it appears to be identical to the " + t.get("name") + " already in the repository.") : app.mailman.trigger(app.events.FLASH_NOTICE, e.responseJSON.message) }, i.prototype.create_file = function (t, e, n, i) { var s, r, a, o, l, c, p, u, h; return null == n && (n = !1), null == i && (i = !1), app.mailman.trigger(app.events.CREATE_FILE), c = t, l = e.name.replace(/\ /g, "_"), a = this.file_list.collection.findWhere({ name: l }), h = app.data.get("state").working_dir, p = "" !== h ? h + "/" + l : l, s = this.file_list.collection.branch, i ? (u = t.split(","), t = u.slice(1, u.length).join(""), r = "base64") : r = "text", a ? (o = a, o.set("id", "fakeid")) : o = app.data.project.blob(p, s), o.save({ file_path: p, name: l, content: t, encoding: r }, { success: this.success, error: this.error, insert: n }), n ? app.mailman.trigger(app.events.INSERT_IMAGE, o, c) : void 0 },
            i.prototype.get_boiler_plate = function (t) { switch (null == t && (t = ""), t) { case "html": case "htm": return JST["editor/boilerplates/html"](); case "asc": case "adoc": case "asciidoc": return JST["editor/boilerplates/asciidoc"](); case "xml": return JST["editor/boilerplates/xml"](); case "md": case "mdown": case "markdown": return JST["editor/boilerplates/md"](); default: return "Type something here!" } }, i
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FileListItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "FileListItemView",
            n.prototype.className = "list-item file-list-item",
            n.prototype.events = { "click a": "clicked", "click .action": "show_actions" },
            n.prototype.initialize = function () { if (!this.model) throw new Error(classes.FileListItemView.ERROR_NO_MODEL); return this.template = this.options.template || JST["shared/file_list_item"], this.model.get("insertable") ? Cocktail.mixin(this, classes.ImageMixin) : void 0 },
            n.prototype.render = function () { var t; return t = this.model.toJSON(["disable_link", "insertable"]), t.editor_link = app.paths.editor_path(this.model.get("file_path"), this.model.branch), this.model.get("has-icon-outside-link") && this.$el.addClass("has-icon-outside-link"), this.$el.html(this.template(t)), this.delegateEvents(), this },
            n.prototype.clicked = function (t) { return this.trigger(app.events.SELECT, this, t) },
            n.prototype.show_actions = function (t) { return this.trigger(app.events.SHOW_ACTIONS, this, t) }, n
    }(Backbone.View), classes.FileListItemView.ERROR_NO_MODEL = "You need to initialize this view with a Blob model"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FlashView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.tagName = "div",
            n.prototype.className = "flash affix-top",
            n.prototype.backboneClass = "FlashView",
            n.prototype.initialize = function () { return this.collection = new classes.FlashCollection, this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "destroy", function (t) { return this.destroy(t) }), this.listenTo(this.collection, "reset", function (t) { return this.views = [], this.$el.empty(), t.each(this.model_to_view, this) }), this.listenTo(app.mailman, app.events.FLASH_ERROR, function (t) { return this.collection.add({ type: app.constants.ERROR, message: t }) }), this.listenTo(app.mailman, app.events.FLASH_NOTICE, function (t) { return this.collection.add({ type: app.constants.NOTICE, message: t }) }), this.listenTo(app.mailman, app.events.FLASH_WARNING, function (t) { return this.collection.add({ type: app.constants.WARNING, message: t }) }), app.data.get("flash") && this.collection.reset(app.data.get("flash")), Modernizr.cors || app.mailman.trigger(app.constants.WARNING, app.constants.WARNING_CORS), this.$el.affix({ offset: { top: 55 } }), null != app.helpers.querystring().flash ? this.collection.add({ type: app.constants.NOTICE, message: decodeURIComponent(app.helpers.querystring().flash) }) : void 0 },
            n.prototype.model_to_view = function (t) { var e; return this.$el.show(), e = new classes.EditorNoticeItemView({ model: t, template: JST["shared/flash_item"] }), e.$el.addClass("flash-item"), e.$el.addClass(t.get("type")), this.listenTo(e, app.events.SELECT, function (t, e) { return e.preventDefault(), t.model.destroy(), 0 === this.$el.children().length ? (this.$el.hide(), app.mailman.trigger(app.events.FLASH_CLOSE)) : void 0 }), this.add(e) },
            n.prototype.empty = function () { return this.collection.reset() }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FolderListItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "FolderListItemView",
            n.prototype.className = "list-item folder-list-item",
            n.prototype.events = { "click a": "clicked" },
            n.prototype.initialize = function () { if (this.model) throw new Error(classes.FolderListItemView.ERROR_MODEL); if (!this.collection) throw new Error(classes.FolderListItemView.ERROR_NO_COLLECTION); return this.template = this.options.template || JST["shared/folder_list_item"] },
            n.prototype.render = function () { var t; return t = { path: this.collection.path, name: this.collection.name }, this.$el.html(this.template(t)), this.delegateEvents(), this },
            n.prototype.clicked = function (t) { return this.trigger(app.events.SELECT, this, t) }, n
    }(Backbone.View), classes.FolderListItemView.ERROR_MODEL = "You need to initialize this view with a Tree collection, not a model", classes.FolderListItemView.ERROR_NO_COLLECTION = "You need to initialize this view with a Tree collection"
}.call(this),
function () { classes.LinkListItemView = Backbone.View.extend({ className: "list-item", backboneClass: "ListItemView", events: { "click a": "clicked" }, initialize: function () { if (!this.options.template) throw new Error(app.constants.ERROR_NO_TEMPLATE); return this.template = this.options.template }, render: function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this }, clicked: function (t) { return this.trigger(app.events.SELECT, this, t) } }) }.call(this),
function () { classes.ListItemView = Backbone.View.extend({ className: "list-item list-padding", backboneClass: "ListItemView", events: { "click a": "clicked" }, initialize: function () { if (!this.options.template) throw new Error(app.constants.ERROR_NO_TEMPLATE); return this.template = this.options.template }, render: function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this }, clicked: function (t) { return this.trigger(app.events.SELECT, this, t) } }) }.call(this),

function () { classes.ListItemBuildView = classes.ListItemView.extend({ render: function () { return this.$el.html(this.template(this.model.toJSON({ name: this.model.get("name"), backboneClass: this.model.backboneClass, in_build_list: this.model.get("in_build_list") }))), this.delegateEvents(), this } }) }.call(this),
function () { var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.MemberListItemView = function (e) { function i() { return this.destroy = t(this.destroy, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.initialize = function () { return this.template = JST["shared/member_list_item"] }, i.prototype.className = "list-item list-padding", i.prototype.tagName = "li", i.prototype.backboneClass = "MemberListItemView", i.prototype.events = { "click a.remove-member": "destroy" }, i.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON())), this }, i.prototype.destroy = function () { return this.model.destroy() }, i }(Backbone.View) }.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.MembersListView = function (e) {
        function i() { return this.model_to_view = t(this.model_to_view, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.mixin([classes.MessageMixin, classes.CollectionMixin]), i.prototype.tagName = "ul", i.prototype.className = "box list", i.prototype.messages = { empty: "There are currently no " + i.label }, i.prototype.initialize = function () { if (!this.collection) throw new Error(classes.MembersListView.ERROR_INIT_COLLECTION); return this.label = this.label || "members", this.collection.each(this.model_to_view), this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "remove", this.destroy) }, i.prototype.removeable_check = function (t) { return t.get("username") === app.data.get("user").nickname ? t.set("unremoveable", !0) : void 0 },
            i.prototype.model_to_view = function (t) { var e; return this.removeable_check(t), e = new classes.MemberListItemView({ model: t }), this.add(e) }, i
    }(Backbone.View), classes.MembersListView.ERROR_INIT_COLLECTION = "You need to initialize this view with a GitLab Members Collection"
}.call(this),
function () { classes.PathView = Backbone.View.extend({ tagName: "ul", className: "path", backboneClass: "PathView", events: { "click a": "clicked" }, initialize: function () { return this.template = JST["shared/path_view_item"], this.options.path ? void 0 : this.options.path = "" }, render: function () { var t, e; return this.$el.empty(), this.$el.html(this.template({ link: "", folder: "<i class='glyphicons home'></i>" })), "" === this.options.path ? this : (e = _.compact(this.options.path.split("/")), t = [], _.each(e, function (e) { return function (n) { return t.push(n), e.$el.append(e.template({ link: t.join("/"), folder: n })) } }(this)), this.delegateEvents(), this) }, updatePath: function (t) { return null == t && (t = ""), this.options.path = t, this.render() }, clicked: function (t) { var e; return e = $(t.currentTarget).attr("href"), this.options.path !== e ? (this.updatePath(e), this.trigger(app.events.SELECT, e, t)) : (t.preventDefault(), !1) } }) }.call(this),
function () {
    var t, e = function (t, e) { return function () { return t.apply(e, arguments) } }, n = {}.hasOwnProperty, i = function (t, e) { function i() { this.constructor = t } for (var s in e) n.call(e, s) && (t[s] = e[s]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }; t = function (t) {
        function n() { return this.render = e(this.render, this), n.__super__.constructor.apply(this, arguments) } return i(n, t),
            n.prototype.className = "quick-build",
            n.prototype.events = { "click .quick-build-choice": "select_option" },
            n.prototype.initialize = function () { return this.template = JST["shared/quick_build"] },
            n.prototype.render = function () { return this.$el.html(this.template()), this.build_button = new classes.ButtonView({ current_state: "disabled", default_state: "default", model: new Backbone.Model({ "class": "down10 block align-center btn btn-medium action ", href: "#", states: { disabled: "Build", "default": "Build!", working: "Sending Build...", success: "Building!", error: "Error sending build" } }) }), this.$el.append(this.build_button.render().el), this.listenTo(this.build_button, app.events.SELECT, function (t) { return function () { return t.trigger(app.events.SUBMIT, t.getSelected()) } }(this)), this },
            n.prototype.select_option = function () { var t; return this.build_button.change_state((null != (t = this.getSelected()) ? t.length : void 0) > 0 ? "default" : "disabled") },
            n.prototype.getSelected = function () { return _.pluck(this.$(".quick-build-options input").serializeArray(), "value") },
            n.prototype.setState = function (t) { return this.build_button.change_state(t) }, n
    }(Backbone.View), classes.QuickBuildView = t
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.RegistrationCodeItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "RegistrationCodeItemView",
            n.prototype.className = "list-item list-padding",
            n.prototype.events = { "click .delete-code-link": "delete_clicked" },
            n.prototype.initialize = function () { return this.template = JST["templates/admin/registration_codes/registration_code_list_item"] },
            n.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this },
            n.prototype.delete_clicked = function (t) { return this.trigger(app.events.DELETE, this, t) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.RegistrationCodeListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.className = "list",
            n.prototype.messages = { empty: "There are no registration codes", loading: "Loading codes..." },
            n.prototype.initialize = function () { return this.collection = new classes.RegistrationCodes, this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "reset", function (t) { return this.views = [], this.$el.empty(), t.each(this.model_to_view, this) }) },
            n.prototype.model_to_view = function (t) { var e; return e = new classes.RegistrationCodeItemView({ model: t }), this.listenTo(e, app.events.DELETE, this.delete_selected), this.add(e), this.sort_by("code", "asc") },
            n.prototype.delete_selected = function (t) { return this.destroy(t.model, !0), t.model.destroy() }, n
    }(Backbone.View)
}.call(this), classes.SearchView = Backbone.View.extend({ tagName: "div", className: "search", backboneClass: "SearchView", events: { "keyup input.search-term": "changed" }, initialize: function () { this.template = JST["shared/search"] }, render: function () { return this.$el.html(this.template()), this }, changed: function () { this.trigger(app.events.SEARCH_CHANGED, this.$("input.search-term").val()) }, reset: function () { this.$("input.search-term").val("") }, focus: function () { this.$("input.search-term").focus() } }), function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SidebarView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "oa-sidebar",
            n.prototype.backboneClass = "SidebarView",
            n.prototype.events = { "click a.sidebar-close": "closeClicked" },
            n.prototype.setSide = function (t) { return this.side = t, this.$el.addClass("" + t + "-sidebar") },
            n.prototype.closeClicked = function (t) { return this.trigger(app.events.CLOSE, this, t), this.slideOut(), !1 },
            n.prototype.slideIn = function () { var t; return this.$el.show(), t = {}, t[this.side] = 0, this.$el.animate(t, 130) },
            n.prototype.slideOut = function () { var t; return t = {}, t[this.side] = -this.$el.outerWidth(), this.$el.animate(t, 130, this.$el.hide) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.TreeListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),

            n.prototype.className = "tree-list list list-medium list-gray",

            n.prototype.messages = { empty: "There are no files to show", loading: "<i class='icon-refresh spin-me icn-round'></i> Loading files...", no_commits: "This project has no commits. Please push a repository via git." },
            n.prototype.initialize = function () { if (!this.model) throw new Error(classes.TreeListView.ERROR_INIT_MODEL) },
            n.prototype.blob_to_view = function (t, e) { var n, i; return null == e && (e = !1), this.has_disabled_link(t) && t.set("disable_link", !0), this.is_insertable(t) && t.set("insertable", !0), t.set("has-icon-outside-link", !0), i = new classes.FileListItemView({ model: t }), this.is_active_file(t) && i.$el.addClass("active"), this.options.files_changed && (n = this.options.files_changed[t.get("file_path")], n && i.$el.addClass("file_changed")), this.listenTo(i, app.events.SHOW_ACTIONS, function (t, e) { return this.trigger(app.events.SHOW_ACTIONS, t, e) }), this.add(i, e) },
            n.prototype.tree_to_view = function (t, e) { var n; return null == e && (e = !1), n = new classes.FolderListItemView({ collection: t }), this.listenTo(n, app.events.SELECT, function (t, e) { return this.trigger(app.events.SELECT, t, e) }), this.add(n, e) },
            n.prototype.fetch_tree = function (t, e, n) { return null == n && (n = { success: function () { return !0 }, error: function () { return !1 } }), this.views = [], this.$el.empty(), this.show_message("loading"), this.collection = this.model.tree(t, e), this.collection.fetch({ success: function (t) { return function (e) { return e.trees.length || e.models.length ? (t.hide_message("loading"), _.each(e.trees, function (e) { return t.tree_to_view(e) }), _.each(e.models, function (e) { return t.blob_to_view(e) }), t.listenTo(t.collection, "destroy", function (e) { return t.destroy(e, !0) }), t.listenTo(t.collection, "add", function (e) { return t.blob_to_view(e, !0), t.sort() }), t.sort()) : (t.show_message("empty"), t.trigger(app.events.NOT_A_DIRECTORY, e.name)), n.success() } }(this), error: function (t) { return function () { return t.show_message("no_commits"), app.mailman.trigger(app.events.FLASH_ERROR, "There was an error retrieving your project. It may be that the project has no commits."), n.error() } }(this) }) },
            n.prototype.is_active_file = function (t) { return this.active_file_path && t.get("file_path") === this.active_file_path },
            n.prototype.has_disabled_link = function (t) { return this.options.disable_links && _.include(this.options.disable_links, app.helpers.get_extension(t.get("file_path"))) },
            n.prototype.is_insertable = function (t)
            { return this.options.insertables && _.include(this.options.insertables, app.helpers.get_extension(t.get("file_path"))) },

            n.prototype.sort = function (t)
            { return this.views = _.sortBy(this.views, function (t) { var e; return e = t.collection ? t.collection.name : t.model.get("name"), e.toLowerCase() }), "desc" === t && this.views.reverse(), this.rendered ? this.render() : void 0 },
            n.prototype.filter = function (t) { var e, n; return e = _.filter(this.views, function (e) { var n; return n = e.collection ? e.collection.name : e.model.get("name"), n && n.toLowerCase().match(new RegExp(t.toLowerCase(), "g")) }), _.each(e, function (t) { return t.$el.show() }), n = _.difference(this.views, e), _.each(n, function (t) { return t.$el.hide() }) },
            n.prototype.set_active_file = function (t) { return this.active_file_path = t },
            n.prototype.find_dir = function (t) { return _.findWhere(this.collection.trees, { name: t }) },
            n.prototype.add_dir = function (t, e) { return null == e && (e = !1), this.collection.trees.push(t), this.tree_to_view(t, e) }, n
    }(Backbone.View), classes.TreeListView.ERROR_INIT_MODEL = "You need to initialize this view with a GitLab.Project model"
}.call(this),
function () {
    var t, e = function (t, e) { return function () { return t.apply(e, arguments) } }, n = {}.hasOwnProperty, i = function (t, e) { function i() { this.constructor = t } for (var s in e) n.call(e, s) && (t[s] = e[s]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }, s = [].indexOf || function (t) { for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e; return -1 }; t = function (t) {
        function n() {
            return this.dragleave = e(this.dragleave, this), this.dragenter = e(this.dragenter, this), this.drop = e(this.drop, this), n.__super__.constructor.apply(this
                , arguments)
        } return i(n, t),
            n.prototype.className = "upload-view",
            n.prototype.events = { "click #upload_zone": "show_file_upload_dialog", "change #fileUploadInput": "file_upload_dialog_select" },
            n.prototype.initialize = function () { return this.file_list = this.options.file_list, this.state = "", this.template = JST["editor/sidebars/upload"], this.b = $("body"), this.b.on("drop", this.drop), this.b.on("dragenter", this.dragenter), this.b.on("dragover", this.dragenter), this.b.on("dragleave", this.dragleave) },
            n.prototype.render = function (t) { return null == t && (t = !1), this.$el.html(this.template({ up_message: t, state: this.state })), this.delegateEvents(this.events), this },
            n.prototype.setState = function (t) { return null == t && (t = ""), this.state = t },
            n.prototype.show_file_upload_dialog = function () { return this.$("#fileUploadInput").click(), !1 },
            n.prototype.file_upload_dialog_select = function () { var t; return t = this.$("#fileUploadInput")[0].files, this.processFiles(t) },
            n.prototype.drop = function (t) { var e, n; return app.mailman.trigger(app.events.DRAGEND), s.call(t.originalEvent.dataTransfer.types, "Files") < 0 ? s.call(t.originalEvent.dataTransfer.types, "text/plain") >= 0 && $(t.target).parents("#editor").length ? s.call(t.originalEvent.dataTransfer.types, "Apple files promise pasteboard type") >= 0 ? !0 : !1 : !0 : (n = $(t.target).parents("#editor").length, t = t.originalEvent, e = t.dataTransfer.files, this.processFiles(e, n), this.setState("dropped"), this.b.removeClass("dragenter dragenter-sidebar"), !1) },
            n.prototype.processFiles = function (t, e) {
            var n, i; return null == e && (e = !1), this.render("Uploading..."), t.length > 1 && app.mailman.trigger(app.events.FLASH_WARNING, "Sorry, you can currently only upload one file at a time."), n = t[0], -1 === n.name.indexOf(".") ? void app.mailman.trigger(app.events.FLASH_WARNING, "Sorry, you cannot upload folders.") : (i = new FileReader, n.type.match(/image/) ? (i.onload = function (t) { return function () { return function (i) { return t.create_file(i.target.result, n, e, !0) } } }(this)(), i.readAsDataURL(n)) : (i.onload = function (t)
            { return function () { return function (e) { return t.create_file(e.target.result, n, !1, !1) } } }(this)(), i.readAsText(n)))
            },
            n.prototype.dragenter = function (t) { return $(t.target).hasClass("cke_widget_drag_handler_container") ? void 0 : s.call(t.originalEvent.dataTransfer.types, "Files") < 0 ? !0 : (t.originalEvent.dataTransfer.dropEffect = "copy", t.stopPropagation(), t.preventDefault(), "" === this.state && ($(t.target).parents("#editor").length ? (app.mailman.trigger(app.events.FILE_DRAGGING_TO_EDITOR), this.setState("dragenter"), this.b.addClass("dragenter"), this.render("Drop File to Upload & Insert")) : (app.mailman.trigger(app.events.FILE_DRAGGING_TO_OTHER), this.setState("dragenter"), this.b.addClass("dragenter-sidebar"), this.render("Drop File to Upload"))), !1) },
            n.prototype.dragleave = function (t) { return app.mailman.trigger(app.events.DRAGEND), t.stopPropagation(), t.preventDefault(), this.b.removeClass("dragenter dragenter-sidebar"), this.setState(), this.render(), !1 },
            n.prototype.create_file = function (t, e, n, i) { return null == n && (n = !1), null == i && (i = !1), this.trigger(app.events.CREATE_FILE, t, e, n, i) }, n
    }(Backbone.View), classes.UploadView = t
}.call(this),
function () { classes.AdminBuildListItemView = Backbone.View.extend({ className: "list-item list-padding", backboneClass: "ListItemView", events: { "click a.more-info": "clicked" }, initialize: function () { return this.template = JST["templates/admin/builds/build_list_item"] }, render: function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this }, clicked: function (t) { return $(t.currentTarget).next().toggle(), !1 } }) }.call(this),
function () { classes.AdminBuildsIndexView = Backbone.View.extend({ initialize: function () { return this.builds = new classes.Builds(app.data.get("builds"), { project: {} }), this.list = new classes.CollectionView({ collection: this.builds, child_view: classes.AdminBuildListItemView }), this.$("#admin-build-list").html(this.list.render().el) } }) }.call(this),
function () {
    classes.AdminEmailsIndexView = Backbone.View.extend({
        initialize: function () { return this.mailer = new classes.MandrillEmail({ key: app.data.get("mandrill_key") }), this.listenTo(this.mailer, "send:success", this.clear_form), this.template = JST["templates/admin/emails/email_form"], this.render().el }, events: { "click #send-email": "send", submit: "send" }, users_for_code: function (t, e) { return _.where(e, { code: t }) }, users_to_addresses: function (t) { return _.map(t, function (t) { return { name: t.nickname, email: t.email, type: "to" } }) }, recipients_for_code: function () { var t, e; return t = this.dropdown.get_selected().get("code"), e = function (e) { return function () { return "EVERYONE" === t ? app.data.get("users") : e.users_for_code(t, app.data.get("users")) } }(this)(), this.users_to_addresses(e) },
        send: function () { return this.mailer.add_recipients(this.recipients_for_code()), this.mailer.set("subject", this.$("#email-subject").val()), this.mailer.set("text", this.$("#email-body").val()), this.mailer.set("tags", [this.dropdown.get_selected().get("code"), "admin-page"]), this.mailer.send(), !1 }, clear_form: function () { return this.$("input,textarea").val(""), this.dropdown.set_selected(new classes.Dropdown({ code: "EVERYONE" })) }, render: function () {
            return this.$("#email-inner").html(this.template()), this.dropdown = new classes.DropdownView({ helper: "Registration Code", label: "code", width: "400px" }), this.dropdown.add({ model: new classes.Dropdown({ code: "EVERYONE" }) }),
                app.data.get("registration_codes").forEach(function (t) { return this.dropdown.add({ model: new classes.Dropdown(t) }) }, this), this.$("#recipient-select").append(this.dropdown.render().el), this
        }
    })
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.AdminGroupsIndexView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { return this.groups = new app.data.gitlab.Groups, this.groups.fetch({ success: function (t) { return function () { return t.list = new classes.CollectionView({ collection: t.groups, child_view: classes.ListItemView, child_template: JST["templates/admin/groups/admin_group_list_item"] }), t.$("#admin-groups-heading").html(t.groups.length + " Groups"), t.$("#admin-groups-list").html(t.list.render().el) } }(this) }) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) {
        function i() {
            this.constructor = e
        } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
    }; classes.AdminGroupsShowView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { return this.group = new app.data.gitlab.Group({ id: app.data.get("group_id") }), this.group.fetch({ success: function (t) { return function () { var e; return e = t.group.get("projects"), t.projects = new Backbone.Collection(e), t.list = new classes.CollectionView({ collection: t.projects, child_view: classes.ListItemView, child_template: JST["templates/admin/groups/admin_group_project_list_item"] }), t.$("#admin-group-name").html(t.group.get("name")), t.$("#group-project-list").html(t.list.render().el), t.$("#admin-groups-project-heading").html(t.projects.length + " Projects") } }(this) }) }, n
    }(Backbone.View)
}.call(this),
function () { classes.AdminRegistrationCodesIndexView = Backbone.View.extend({ events: { "submit #new-registration-code": "create_code" }, initialize: function () { return this.registration_codes_list = new classes.RegistrationCodeListView, this.registration_codes_list.collection.reset(app.data.get("registration_codes")), this.$("#registration-code-container").append(this.registration_codes_list.render().el) }, delete_code: function (t, e) { var n; return e.preventDefault(), n = confirm("Deleting a code also disables the code for all users who applied the code on registration. Are you sure you want to delete the code?"), n ? t.destroy() : void 0 }, create_code: function (t) { var e, n; return t.preventDefault(), e = this.$("#new-registration-code #input-code").val(), n = this.$("#new-registration-code #input-days").val(), this.registration_codes_list.collection.create({ code: e, days: n }, { wait: !0 }) } }) }.call(this),
function () { classes.AdminUsersIndexView = Backbone.View.extend({ initialize: function () { return this.users = new classes.Users(app.data.get("users")), this.list = new classes.CollectionView({ collection: this.users, child_view: classes.ListItemView, child_template: JST["templates/admin/users/user_list_item"] }), this.$("#admin-user-list").html(this.list.render().el), this.$("#admin-user-heading").html("Total Users: " + this.users.length) } }) }.call(this),
function () { classes.BuildDetailsView = Backbone.View.extend({ className: "build-details", backboneClass: "BuildDetailsView", initialize: function () { return this.template = JST["templates/builds/build_details"] }, render: function () { return this.$el.html(this.template(this.model.toJSON())), this } }) }.call(this),
function () {
    classes.BuildsIndexView = Backbone.View.extend({
        backboneClass: "BuildsIndexView", initialize: function () { var t; return this.build_list = new classes.BuildListView({ model: app.data.project, attributes: { "class": "build-list down20" } }), this.listenTo(this.build_list, app.events.SELECT, this.build_clicked), this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), this.$("#breadcrumbs").html(this.breadcrumbs.render().el), this.build_list.collection.reset(app.data.get("builds")), this.build_list.poll(), this.$("#recent-builds").append(this.build_list.render().el), (t = app.data.get("selected_build")) ? this.show_build(this.build_list.collection.get(t.id)) : void 0 },
        switch_branch: function () { return window.location = app.paths.project_path() + "/builds/branch/" + app.data.get("state").branch }, build_clicked: function (t, e) { return e.preventDefault(), this.show_build(t.model), this.highlight_current(t.model) },
        highlight_current: function (t) { return this.build_list.collection.each(function (e) { return e === t ? e.set("highlighted", !0) : e.set("highlighted", !1) }), this.build_list.render().el }, show_build: function (t) { return this.selected && this.selected.remove(), this.highlight_current(t), this.selected = new classes.BuildDetailsView({ model: t }), this.$("#right").append(this.selected.render().el) }
    })
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.CompareShowView = function (e) {
        function i() { return this.fetch_base_diff = t(this.fetch_base_diff, this), this.fetch_feature_diff = t(this.fetch_feature_diff, this), this.create_merge_request = t(this.create_merge_request, this), this.delete_source_branch = t(this.delete_source_branch, this), this.create_merge_branch = t(this.create_merge_branch, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.LEFT_SELECTOR = "#left-toolset .fix-to-top", i.prototype.RIGHT_SELECTOR = "#right-toolset .fix-to-top", i.prototype.backboneClass = "CompareShowView", i.prototype.events = { "click .submit-change": "submit", "submit form": "submit" }, i.prototype.initialize = function () { if (null == app.data.get("source_branch") || null == app.data.get("target_branch")) throw new Error(classes.CompareShowView.ERROR_INIT_BRANCHES); if (null == app.data.project) throw new Error(classes.CompareShowView.ERROR_INIT_PROJECT); return this.loading_box = new classes.BoxView({ templates: { loading: JST["templates/reviews/loading"] }, attributes: { "class": "loading" } }), this.$el.find("#compare-tool").append(this.loading_box.render("loading", "Loading data").el), this.model = new app.data.gitlab.MergeRequest({ source_branch: app.data.get("source_branch"), target_branch: app.data.get("target_branch") }, { project: app.data.project }), this.load_diffs(), this.flash_view = new classes.FlashView, this.$el.prepend(this.flash_view.render().el), this.template = JST["templates/compare/show"] }, i.prototype.render = function () { var t; return t = { branch_owner: app.helpers.branch_name(this.model.get("source_branch")) }, this.$(this.RIGHT_SELECTOR).append(this.template(t)), this.$("input[name=title]").focus(), this }, i.prototype.submit = function (t) { var e; return t.preventDefault(), this.$(".submit-change").addClass("working").prop("disabled", !0), this.merge_branch_name = null != (e = this.merge_branch_name) ? e : "" + app.data.get("user").nickname + "-atmr" + app.helpers.new_atlas_epoch(), this.create_merge_branch(this.merge_branch_name, function (t) { return function () { return t.delete_source_branch(function () { return t.create_merge_request(t.merge_branch_name) }) } }(this)) }, i.prototype.create_merge_branch = function (t, e) { return classes.AtlasApi.create_branch(app.data.get("project").path_with_namespace, t, this.model.get("source_branch"), function () { return function () { return e() } }(this), function (t) { return function (e) { return t.$(".submit-change").removeClass("working").prop("disabled", !1), app.mailman.trigger(app.events.FLASH_ERROR, "Error creating merge branch: " + e.message) } }(this)) }, i.prototype.delete_source_branch = function (t) { return classes.AtlasApi.delete_branch(app.data.get("project").path_with_namespace, this.model.get("source_branch"), t, function (t) { return function (e) { return t.$(".submit-change").removeClass("working").prop("disabled", !1), app.mailman.trigger(app.events.FLASH_ERROR, "Error creating merge request: " + e.message) } }(this)) }, i.prototype.create_merge_request = function (t) { return this.model.set({ title: this.$("input[name=title]").val(), source_branch: t, description: this.$("textarea[name=description]").val(), project: this.model.project.escaped_path() }), classes.AtlasApi.create_review(app.data.get("project").path_with_namespace, this.model.get("source_branch"), this.model.get("target_branch"), this.model.get("title"), this.model.get("description"), function () { return window.location = "" + app.paths.project_path() + "/reviews" }, function (t) { return function (e) { return t.$(".submit-change").removeClass("working").prop("disabled", !1), app.mailman.trigger(app.events.FLASH_ERROR, "Error creating merge request: " + e.message) } }(this)) }, i.prototype.load_diffs = function () { return this.loading_box.render("loading", "Loading diffs"), this.feature_diff = app.data.project.compare(this.model.get("target_branch"), this.model.get("source_branch")), this.base_diff = app.data.project.compare(this.model.get("source_branch"), this.model.get("target_branch")), this.fetch_feature_diff(this.fetch_base_diff) }, i.prototype.fetch_feature_diff = function (t) { return this.feature_diff.fetch({ success: function (e) { return function () { return e.feature_diff.get("compare_timeout") || _.isEmpty(e.feature_diff.get("diffs")) && e.feature_diff.get("commits").length > 50 ? void e.squash_branch(e.model.get("source_branch"), function () { return e.check_squash_status(t) }) : t() } }(this), error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_FETCH_DIFF) } }(this) }) }, i.prototype.fetch_base_diff = function () { return this.base_diff.fetch({ success: function (t) { return function () { return (t.feature_diff.get("compare_same_ref") || _.isEmpty(t.feature_diff.get("diffs")) || t.base_diff.get("compare_same_ref")) && (app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_NO_CHANGES), t.$(t.RIGHT_SELECTOR).remove()), t.base_diff.get("compare_timeout") && t.squash_branch(t.model.get("target_branch")), t.snoobly = new Snoobly(t.feature_diff.toJSON(), t.base_diff.toJSON()), t.calculate_file_actions(), t.load_file_contents(), t.load_feedback_view() } }(this), error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_FETCH_DIFF) } }(this) }) }, i.prototype.load_feedback_view = function () { return this.modal_view = new classes.FeedbackModalView({ data: { base_diff: this.base_diff.attributes, feature_diff: this.feature_diff.attributes, review_model: this.model.attributes } }), this.$el.find(".feedback-container").html(this.modal_view.render().el) }, i.prototype.show_merge_tool = function (t) { var e, n; return n = t.get("path"), e = this.get_file_action(n), e.view.setElement(this.$("#file-action-view")).render(), this.active_file_action = e, this.listenTo(this.active_file_action.view, "editor:switch", this.add_popover_info), this.add_popover_info() }, i.prototype.add_popover_info = function () { var t; return t = $(".atlas-markup"), $(t).each(function (t, e) { var n; return n = $(e).data()["markup-text"] === !0 ? "<p>Markup change that may include text.</p>" : "<p>Markup/formatting change.</p>", new Drop({ classes: "drop-theme-arrows-bounce", content: "" + n + "<pre>" + $(e).attr("title") + "</pre><p>Switch to Code Editor to view details.</p>", openOn: "hover", position: "bottom center", target: e, tetherOptions: { constraints: [{ to: "scrollParent", pin: !0 }] } }) }) }, i.prototype.show_other = function () { return null != this.merge_menu.active_model && (this.merge_menu.active_model.set("active", !1), delete this.merge_menu.active_model), this.merge_menu.render(), null != this.other_btn && null != this.other_view ? (this.other_btn.$el.addClass("active"), this.$("#file-action-view").html(this.other_view.render().el)) : void 0 }, i.prototype.show_other = function () { return null != this.merge_menu.active_model && (this.merge_menu.active_model.set("active", !1), delete this.merge_menu.active_model), this.merge_menu.render(), null != this.other_btn && null != this.other_view ? (this.other_btn.$el.addClass("active"), this.$("#file-action-view").html(this.other_view.render().el)) : void 0 }, i.prototype.load_file_contents = function () { var t, e; return e = _.find(this.file_actions, function (t) { return function (e) { return e.action === t.MERGE_TOOL && !e.binary && !e.model } }(this)), e ? (this.loading_box.render("loading", "Loading " + e.path), t = app.data.project.blob(e.path, this.model.get("target_branch")), t.fetch({ success: function (t) { return function (n) { return e.model = n, e.snoobly = t.snoobly.diff(e.path, n.get("content")), t.load_file_contents() } }(this), error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_FETCH_FILE) } }(this) })) : (this.loading_box.$el.remove(), this.add_views()) }, i.prototype.add_views = function () {
            var t, e, n, i; return n = { branch_owner: app.helpers.branch_name(this.model.get("source_branch")) }, this.$el.find(this.RIGHT_SELECTOR).append(this.template(n)), this.$("input[name=title]").focus(), t = _.filter(this.file_actions, function (t) { return function (e) { return t.is_menu_ready(e) } }(this)), _.each(t, function () { return function (t) { return t.view = new classes.MergeToolView({ file_action: t, read_only: !0 }) } }(this)), this.merge_menu = new classes.ReviewsFileListView({ file_actions: t }), this.listenTo(this.merge_menu, app.events.SELECT, function (t) { var e; return this.show_merge_tool(t), null != (e = this.other_btn) ? e.$el.removeClass("active") : void 0 }), this.$(this.LEFT_SELECTOR).append("<a class='btn back' href='../branch/" + app.data.get("source_branch") + "'><i class='glyphicons left_arrow'></i> Cancel &amp; Go Back</a>"), this.$(this.LEFT_SELECTOR).append("<a class='btn' id='diff_editor_switcher'>Switch Editors</a>"), this.$(this.LEFT_SELECTOR).append(this.merge_menu.render().el), i = {}, i[this.MERGE_TOOL] = "templates/reviews/static_binary", i[this.CONFLICT_EDITED_DELETED] = "templates/reviews/static_edt_del", i[this.CONFLICT_ADDED_ADDED] = "templates/reviews/static_add_add", i[this.CONFLICT_DELETED_EDITED] = "templates/reviews/static_del_edt", i[this.DELETED] = "templates/reviews/static_del", i[this.ADDED] = "templates/reviews/static_add", e = _.filter(this.file_actions, function (t) { return function (e) { return !t.is_menu_ready(e) } }(this)), _.isEmpty(e) ||
                (_.each(e, function (t) { return function (e) { var n; return n = new Backbone.Model(e), n.set("merge_request", t.model.toJSON()), e.view = new classes.ListItemView({ model: n, template: JST[i[e.action]] }) } }(this)), this.other_view = new classes.OtherView({ model: this.model, file_actions: e }), this.other_btn = new classes.ButtonView({ model: new Backbone.Model({ label: "Other Changes <i class='other_count'>" + e.length + "</i>" }), className: "other-btn btn" }), this.listenTo(this.other_btn, app.events.SELECT, this.show_other), this.listenTo(this.merge_menu, "no_files", this.show_other), this.$(this.LEFT_SELECTOR).append(this.other_btn.render().el)), this.merge_menu.select_next_file()
        }, i.prototype.MERGE_TOOL = "MERGE_TOOL", i.prototype.CONFLICT_EDITED_DELETED = "CONFLICT_EDITED_DELETED", i.prototype.CONFLICT_ADDED_ADDED = "CONFLICT_ADDED_ADDED", i.prototype.CONFLICT_DELETED_EDITED = "CONFLICT_DELETED_EDITED", i.prototype.ADDED = "ADDED", i.prototype.DELETED = "DELETED", i.prototype.calculate_file_actions = function () { return this.file_actions = _.map(this.feature_diff.get("diffs"), function (t) { return function (e) { return t.create_file_action(e) } }(this)) }, i.prototype.create_file_action = function (t) { var e, n; return n = { file_diff: t, clean: !0 }, e = _.find(this.base_diff.get("diffs"), function (e) { return e.new_path === t.new_path }), n.path = t.new_path, e && e.renamed_file && app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_UNSUPPORTED), t.renamed_file && app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_UNSUPPORTED), t.new_file ? e ? e.new_file ? n.action = this.CONFLICT_ADDED_ADDED : app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_UNEXPECTED) : n.action = this.ADDED : t.deleted_file ? e ? e.deleted_file ? n.action = this.DELETED : e.new_file ? app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_UNEXPECTED) : n.action = this.CONFLICT_DELETED_EDITED : n.action = this.DELETED : e ? e.deleted_file ? n.action = this.CONFLICT_EDITED_DELETED : e.new_file ? app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_UNEXPECTED) : n.action = this.MERGE_TOOL : n.action = this.MERGE_TOOL, _.str.startsWith(t.diff, "Binary files") && (n.binary = !0), n }, i.prototype.get_file_action = function (t) { return _.find(this.file_actions, function (e) { return e.path === t }) }, i.prototype.is_menu_ready = function (t) { return t.action === this.MERGE_TOOL && !t.binary }, i.prototype.squash_branch = function (t, e) { return "master" === t ? (app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_TIMEOUT_DIFF), void this.$(this.RIGHT_SELECTOR).remove()) : (this.squash_model = new classes.Squash([], { project: app.data.project.get("path_with_namespace"), branch: t }), this.squash_model.save([], { success: function () { return function () { return e() } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_TIMEOUT_DIFF), t.$(t.RIGHT_SELECTOR).remove() } }(this) })) }, i.prototype.check_squash_status = function (t) { return $.doTimeout("squash_check", 2e3, function (e) { return function () { return e.squash_model.fetch({ success: function (n) { return n.get("status") === app.constants.COMPLETED ? (e.fetch_feature_diff(t), $.doTimeout("squash_check")) : "failed" === n.get("status") ? (app.mailman.trigger(app.events.FLASH_ERROR, classes.CompareShowView.ERROR_TIMEOUT_DIFF), $.doTimeout("squash_check")) : void 0 } }), !0 } }(this)) }, i
    }(Backbone.View), classes.CompareShowView.ERROR_INIT_BRANCHES = "CompareShowView must be instantiated with a source_branch and a target_branch in app.data", classes.CompareShowView.ERROR_INIT_PROJECT = "CompareShowView must be instantiated with an app project.", classes.CompareShowView.ERROR_NO_CHANGES = "There are no changes in this branch. Go back and make some changes on your branch.", classes.CompareShowView.ERROR_FETCH_MERGE = "Could not load review data. Try to refresh the page.", classes.CompareShowView.ERROR_FETCH_DIFF = "Could not load diff data. Try to refresh the page.", classes.CompareShowView.ERROR_FETCH_FILE = "Could not load file data. Try to refresh the page.", classes.CompareShowView.ERROR_UNEXPECTED = "An unexpected error happened. Please contact support.", classes.CompareShowView.ERROR_TIMEOUT_DIFF = "Unfortunately there are too many changes to show. Please contact support."
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.AceEditorView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.ace_modes = [{ ace_name: "actionscript", filenames: ["as"] }, { ace_name: "asciidoc", filenames: ["asc"] }, { ace_name: "c_cpp", filenames: ["c", "cpp", "h"] }, { ace_name: "clojure", filenames: ["clj"] }, { ace_name: "cobol", filenames: ["cbl"] }, { ace_name: "coffee" }, { ace_name: "csharp", filenames: ["cs"] }, { ace_name: "css" }, { ace_name: "dart" }, { ace_name: "erlang", filenames: ["erl"] }, { ace_name: "glsl", filenames: ["vert", "frag"] }, { ace_name: "golang", filenames: ["go"] }, { ace_name: "haml" }, { ace_name: "haskell", filenames: ["hs", "lhs"] }, { ace_name: "html", filenames: ["xhtml"] }, { ace_name: "html_ruby", filenames: ["erb"] }, { ace_name: "java", filenames: ["pde"] }, { ace_name: "javascript", filenames: ["js"] }, { ace_name: "json" }, { ace_name: "julia", filenames: ["jl"] }, { ace_name: "latex", filenames: ["tex"] }, { ace_name: "less" }, { ace_name: "lisp" }, { ace_name: "lua" }, { ace_name: "markdown", filenames: ["md"] }, { ace_name: "matlab", filenames: ["mat"] }, { ace_name: "objectivec", filenames: ["m"] }, { ace_name: "perl", filenames: ["pl"] }, { ace_name: "php" }, { ace_name: "python", filenames: ["py"] }, { ace_name: "r" }, { ace_name: "ruby", filenames: ["rb"] }, { ace_name: "rust", filenames: ["rs"] }, { ace_name: "sass" }, { ace_name: "scala" }, { ace_name: "scss" }, { ace_name: "sh" }, { ace_name: "svg" }, { ace_name: "xml" }, { ace_name: "yaml" }],
            n.prototype.filename_to_ace_mode = function (t) { var e; return e = _.find(this.ace_modes, function (e) { return _.include(e.filenames, t) || t === e.ace_name }), e ? e.ace_name : "text" },
            n.prototype.initialize = function () { return this.editor_name = "Code Editor", this.editor_key = "code", this.template = JST["editor/ace_editor"] },
            n.prototype.render = function () {
            var t, e; return this.$el.html(this.template()), this.editor && this.editor.destroy(), this.editor = ace.edit(this.$("#ace").get(0)), window.acee = this.editor, e = /(?:\.([^.]+))?$/.exec(this.options.filename || "")[1], this.ace_mode = this.filename_to_ace_mode(e), t = require("ace/mode/" + this.ace_mode).Mode, this.editor.getSession().setMode(new t), this.editor.getSession().setUseWrapMode(!0), this.editor.getSession().setWrapLimitRange(null, null), this.editor.getSession().setTabSize(1), this.editor.getSession().setUseSoftTabs(!0), this.editor.setShowPrintMargin(!1), this.editor.setFontSize(14), this.editor.setTheme("ace/theme/github"), this.editor.setHighlightActiveLine(!1), this.editor.setShowInvisibles(!1), this.editor.getSession().on("change", function (t) { return function () { return app.mailman.trigger(app.events.CONTENT_CHANGE), t.dirty = !0 } }(this)), this.editor.commands.bindKey("Command-/", null), app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch) && (this.editor.setReadOnly(!0), this.editor.renderer.$cursorLayer.element.style.opacity = 0,
                this.editor.textInput.getElement().tabIndex = -1, this.editor.textInput.getElement().disabled = !0, this.editor.commands.commandKeyBinding = {}), this
            },
            n.prototype.resize = function () { return this.editor.resize() },
            n.prototype.set_content = function (t) { var e; return e = this.find_cursor_note(t), t = t.replace(app.constants.CURSOR_NOTE, "", "g"), this.editor.getSession().setValue(t), this.editor.scrollToLine(e.row, !0, !1), this.editor.gotoLine(e.row, e.col, !0), this.editor.focus(), ace },
            n.prototype.get_content = function () { var t; return t = this.editor.getSession().getValue(), "\n" !== t.slice(-1) && (t += "\n"), t },
            n.prototype.insert_image = function (t) { var e; return e = t.get("file_path"), this.editor.insert("html" === this.ace_mode ? "<img id='" + t.cid + "' src='" + e + "'/>" : "markdown" === this.ace_mode ? "![" + e + "](" + e + ")" : "asciidoc" === this.ace_mode ? "image:" + e + "[" + e + "]" : e) },
            n.prototype.insert = function (t) { return this.editor.insert(t.get("path")) },
            n.prototype.insert_image_success = function (){ return console.log("insert image success is no-op in ace_editor, and this is fine") },
            n.prototype.get_selected_content = function () { return this.editor.getCopyText() },
            n.prototype.get_selection_type = function () { return app.constants.BLOCK },
            n.prototype.get_closest_of = function () { return !1 },
            n.prototype.select_element = function () { return !1 },
            n.prototype.indexterm_fix = function () { return !1 },
            n.prototype.remove_element = function () { return !1 },
            n.prototype.get_line = function (t) { var e, n, i, s, r, a, o, l; if (null == t && (t = !1), n = this.editor.getSession().doc, !t) { if (r = this.editor.getSession().selection, e = r.getCursor(), r.isMultiLine()) return o = [r.lead.row, r.anchor.row], a = o[0], i = o[1], a > i && (l = [i, a], a = l[0], i = l[1]), s = n.getLines(a, i); t = e.row } return n.getLine(t) },
            n.prototype.replace_line = function (t, e) { var n, i, s, r; return null == e && (e = !1), i = this.editor.getSession().doc, r = this.editor.getSession().selection.getRange(), e || (n = this.editor.getSession().selection.getCursor(), e = n.row), s = i.getLine(e), r.setEnd(e, s.length), r.setStart(e, 0), i.replace(r, t), this.editor.focus() },
            n.prototype.replace_selected_lines = function (t) { var e, n, i, s, r, a; return e = this.editor.getSession().doc, i = this.editor.getSession().selection, r = [i.lead.row, i.anchor.row], s = r[0], n = r[1], s > n && (a = [n, s], s = a[0], n = a[1]), e.removeLines(s, n), e.insertLines(s, t), this.editor.focus() },
            n.prototype.insert_from_template = function (t, e, n, i, s) { var r; return null == e && (e = !1), null == n && (n = {}), null == i && (i = !1), null == s && (s = !1), r = JST[t]({ content: e, attrs: n }), "wrap" === s && this.get_line().length ? r = "\n" + r + "\n" : s === !0 && (r = r.replace(/\n/g, "")), r = r.replace(/\n$/, ""), this.insert_content(r) },
            n.prototype.insert_content = function (t) { return this.editor.insert(t), this.editor.focus() },
            n.prototype.focus = function () { return this.editor.focus() },
            n.prototype.destroy = function () { return this.editor.destroy() },
            n.prototype.git_sha1 = function () { return app.helpers.git_sha1(this.get_content()) },
            n.prototype.note_cursor = function () { var t, e, n, i; if (n = this.editor.getSession().selection, e = this.get_line(), i = app.editor_helpers.is_within_tag(e, n.lead.column), i === !1) return this.editor.clearSelection(), this.editor.insert(app.constants.CURSOR_NOTE); if (i === !0); else if (i > 0) return t = this.editor.getSession().doc, t.insertInLine({ column: i, row: n.getCursor().row }, app.constants.CURSOR_NOTE) },
            n.prototype.find_cursor_note = function (t) { var e, n, i, s, r, a; for (s = t.split("\n"), n = r = 0, a = s.length; a > r; n = ++r) if (i = s[n], e = i.indexOf(app.constants.CURSOR_NOTE), -1 !== e) return { row: n + 1, col: e }; return { row: 0, col: 0 } }, n
    }(Backbone.View)
}.call(this),

//configure
function () {
     classes.ckeditorConfigs = { configure: function (t) { var e; return window.ed = t, e = t.config, e.allowedContent = !0, CKEDITOR.config.allowedContent = !0, e.font_style = { element: "div", styles: { "font-family": "#(family)" }, overrides: [{ element: "font", attributes: { face: null } }] }, e.magicline_everywhere = !0, e.magicline_color = "#f7f7f7", e.magicline_triggerOffset = 60, e.removePlugins = "scayt,menubutton,floatingspace,tabletools,contextmenu,link,magicline,image,toolbar", e.extraPlugins = "atlasmagicline,mathjax,mediaembed", e.contentsLanguage = "en", e.contentsLangDirection = "ltr", e.disableNativeSpellChecker = !1, e.mathJaxClass = "math-tex", e.mathJaxLib = "//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML", e.entities = !1, e.blockedKeystrokes = [], t.on("instanceReady", function (t) { return $(t.editor.element.$).removeAttr("title"), this.setKeystroke(1114197, null), this.setKeystroke(1114185, null) }), t } }
}.call(this),

function () {
    var t, e = function (t, e) { return function () { return t.apply(e, arguments) } }, n = {}.hasOwnProperty, i = function (t, e) { function i() { this.constructor = t } for (var s in e) n.call(e, s) && (t[s] = e[s]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }, s = [].indexOf || function (t) { for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e; return -1 }; t = function (t) {
        function n() { return this.insert_image_success = e(this.insert_image_success, this), n.__super__.constructor.apply(this, arguments) } return i(n, t),
            n.prototype.events = { "click #ck_wrap": "wrap_clicked" },
            n.prototype.templates_without_p = ["pre", "code"],
            n.prototype.initialize = function () { return CKEDITOR.disableAutoInline = !0, this.editor_name = "Visual Editor", this.editor_key = "visual", this.template = JST["editor/ck_editor"] },
            n.prototype.render = function (t) { return this.$el.html(t ? this.template({ content: t }) : this.template({ content: "<div class='loading'>Loading...</div>" })) },
            n.prototype.wrap_clicked = function (t) { return "ck_wrap" === t.target.id ? this.editor.focus() : void 0 },
            n.prototype.focus = function () { return this.editor.focus() },
            n.prototype.resize = function () { },
            n.prototype.set_content = function (t) {
                var e, n; return e = this.pre_set_content_processing(t), this.editor = CKEDITOR.inline("ck"), this.setup_listeners(), this.setup_image_path_drop_on_hover(),
                    this.editor = classes.ckeditorConfigs.configure(this.editor), n = e.html(), this.editor.setData(n, function (n) { return function () { var i; return -1 !== t.indexOf(app.constants.CURSOR_NOTE) ? (i = n.$("#ck span:contains('" + app.constants.CURSOR_NOTE_TEXT + "')").last(), n.editor.once("instanceReady", function () { return i.length ? n.select_cursor_note(i) : (e = n.pre_set_content_processing(t.replace(app.constants.CURSOR_NOTE, "", "g")), n.editor.setData(e.html(), function () { return n.focus() })), app.helpers.disable_stylesheets("editor"), app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch) ? n.editor.setReadOnly(!0) : void 0 })) : n.editor.once("instanceReady", function () { return app.helpers.disable_stylesheets("editor"), app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch) && n.editor.setReadOnly(!0), n.focus() }) } }(this))
            },
            n.prototype.select_cursor_note = function (t) { var e, n, i, s; return i = this.editor.getSelection(), e = new CKEDITOR.dom.element(t[0]), i.selectElement(e), n = i.getRanges()[0], n.collapse(!0), n.select(), e.remove(), this.focus(), this.editor.getSelection().scrollIntoView(), s = (new Date).getTime(), this.onImagesLoaded(function (t) { return function () { return (new Date).getTime() - s > 1500 ? void 0 : t.editor.getSelection().scrollIntoView() } }(this)) },
            n.prototype.pre_set_content_processing = function (t) { var e, n, i, s; return i = app.data.project.get("path_with_namespace"), n = app.data.get("state").branch, e = $("<div>" + t + "</div>"), s = app.helpers.nth_last_folder(app.data.get("state").path, 1) + "/", e.find("img").each(function () { var t, e, r; return e = $(this), r = e.attr("src"), r && 0 !== r.indexOf("http://") && 0 !== r.indexOf("https://") ? (t = app.helpers.makeAbsolutePath(r, s), e.attr("src", "" + app.data.get("gitlab_url") + "/" + i + "/raw/" + n + "/" + t + "?private_token=" + app.data.gitlab.token), e.attr("data-cke-saved-src", r)) : void 0 }), e },
            n.prototype.onImagesLoaded = function (t) { var e, n; return n = $("#ck img"), 0 === n.length ? t(!1) : (e = 0, n.one("load", function () { return e += 1, e === n.length ? t(!0) : void 0 })) },
            n.prototype.get_content = function (t) { var e; return this.ensure_no_data_uris(), this.pre_get_content_processing(), e = this.editor.getData(), e = e.replace(/\b&nbsp;\b/g, " "), t && (e = e.replace(/(<[^>]+?)collapsed(=[\"\']*true[\"\']*)*\s*/g, "$1")), "\n" !== e.slice(-1) && (e += "\n"), e },
            n.prototype.ensure_no_data_uris = function () { var t, e, n, i, s, r, a, o; if (e = this.editor.element.getElementsByTag("img"), e.count()) { for (o = [], t = r = 0, a = e.count() - 1; a >= 0 ? a >= r : r >= a; t = a >= 0 ? ++r : --r) n = e.getItem(t), s = n.getAttribute("src"), i = n.getAttribute("data-cke-saved-src"), (null != s ? s.length : void 0) > 2e3 ? (null != i ? i.length : void 0) < 2e3 ? o.push(n.setAttribute("src", i)) : (n.setAttribute("src", ""), o.push(n.setAttribute("data-cke-saved-src", ""))) : o.push(void 0); return o } },
            n.prototype.pre_get_content_processing = function () { return this.$(".drop-tool").each(function () { return app.editor_helpers.remove_classes_with_prefix(this) }), this.$("span.math-tex").attr("data-type", "tex") },
            n.prototype.insert_image = function (t, e) { var n, i; return null == e && (e = !1), i = app.helpers.makeRelativePath(t.get("file_path"), app.helpers.nth_last_folder(app.data.get("state").path, 1)), n = "i" + app.helpers.slugify(t.get("file_path")), e ? this.editor.insertHtml(JST["editor/commands/html/figure"]({ attrs: { src: e, "class": n } })) : (this.editor.insertHtml(JST["editor/commands/html/figure"]({ attrs: { src: "" + app.helpers.get_html_url(t.get("file_path")), "class": n } })), this.$("img." + n).each(function () { var t; return t = CKEDITOR.dom.element.get(this), t.setAttribute("data-cke-saved-src", i), t.setAttribute("data-cke-path", i.replace(/^.+raw\/[^\/]+\/(.+)(\?.+)?$/, "$1")) })) },
            n.prototype.insert = function (t) { return this.editor.insertHtml(t.get("file_path")) },
            n.prototype.insert_image_success = function (t) { var e, n, i; return e = "i" + app.helpers.slugify(t.get("file_path")), i = app.helpers.makeRelativePath(t.get("file_path"), app.helpers.nth_last_folder(app.data.get("state").path, 1)), n = app.helpers.get_html_url(t.get("file_path")), t.set("html_url", n), this.$("img." + e).each(function () { var e; return e = CKEDITOR.dom.element.get(this), e.setAttribute("src", t.get("html_url")), e.setAttribute("data-cke-saved-src", i), e.setAttribute("data-cke-path", i.replace(/^.+raw\/[^\/]+\/(.+)(\?.+)?$/, "$1")) }) },
            n.prototype.destroy = function () { return this.editor.destroy(), this.off() },
            n.prototype.git_sha1 = function () { return app.helpers.git_sha1(this.get_content()) },
            n.prototype.note_cursor = function () { var t, e; return e = this.editor.getSelection().getRanges()[0], e && e.getNextEditableNode() && e.getPreviousEditableNode() ? (e.collapse(!0), e.select(), t = this.editor.insertHtml(app.constants.CURSOR_NOTE)) : void 0 },
            n.prototype.setup_listeners = function () { return this.editor.on("change", function () { return app.mailman.trigger(app.events.CONTENT_CHANGE) }), this.on("lockSnapshot", function (t) { return function () { return t.editor.fire("lockSnapshot") } }(this)), this.on("unlockSnapshot", function (t) { return function () { return t.editor.fire("unlockSnapshot") } }(this)), this.on("saveSnapshot", function (t) { return function () { var e; try { return t.editor.fire("saveSnapshot") } catch (n) { return e = n, console.log(e) } } }(this)), this.on("updateSnapshot", function (t) { return function () { var e; try { return t.editor.fire("updateSnapshot") } catch (n) { return e = n, console.log(e) } } }(this)) },
            n.prototype.exec_command = function (t) { return this.editor.execCommand(t) },
            n.prototype.get_selected_content = function () { return this.editor.focus(), app.editor_helpers.getSelectionHtml(this.editor) },
            n.prototype.insert_content = function (t) { return this.editor.insertHtml(t) },
            n.prototype.get_closest_of = function (t) { var e; return null != (e = app.editor_helpers.getClosestOf(this.editor, t)) ? e.$ : void 0 },
            n.prototype.get_selection_type = function () { return this.editor.focus(), app.editor_helpers.getSelectionType(this.editor) },
            n.prototype.create_from_html = function (t) { var e; return e = CKEDITOR.dom.element.createFromHtml(t), e.$ },
            n.prototype.insert_element = function (t) { return t.$ || (t = new CKEDITOR.dom.element(t)), this.editor.insertElement(t) },
            n.prototype.remove_element = function (t) { return t.$ || (t = new CKEDITOR.dom.element(t)), t.remove(!0) },
            n.prototype.select_element = function (t) { return t.$ || (t = new CKEDITOR.dom.element(t)), this.editor.getSelection().selectElement(t), this.editor.focus() },
            n.prototype.insert_from_template = function (t, e, n, i, r) {
            var a, o, l, c, p, u, h, d, f, m; null == e && (e = !1), null == n && (n = {}), null == i && (i = !1), null == r && (r = !1), i === !1 && (i = this.get_selection_type()), h = e === !1 ? "saveSnapshot" : "updateSnapshot", m = t.split("/").slice(-1), p = app.editor_helpers.getHBLevel(this.editor, m); try { a = $(this.get_selected_content()).text().trim() } catch (_) { a = !0 } return i === app.constants.BLOCK && e && a && (CKEDITOR.dom.element.createFromHtml(e).type === CKEDITOR.NODE_TEXT && s.call(this.templates_without_p, m) < 0 ? e = "<p>" + e + "</p>" : (d = this.editor.getSelection().getStartElement(), f = $(d.$).prop("tagName"), ("H1" === f || "H2" === f || "H3" === f || "H4" === f || "H5" === f || "H6" === f) && (e = $(d.$).html()))), l = JST[t]({ content: e, level: p, attrs: n }), r && (l = l.replace(/\n/g, "")), l = l.replace(/\n/, ""), o = CKEDITOR.dom.element.createFromHtml(l), this.editor.insertElement(o), u = this.editor.createRange(), c = o.getLast(function (t) { return t.$.nodeType === Node.ELEMENT_NODE }), u.selectNodeContents(c || o), e && u.collapse(), u.select(), o
            },
            n.prototype.indexterm_fix = function () { var t, e, n; return n = this.editor.getSelection(), e = n.getRanges()[0], t = e.getNextNode(), n.selectElement(t) },
            n.prototype.collapse_selection = function () { var t, e; return this.editor.focus(), e = this.editor.getSelection(), t = e.getRanges()[0], t.collapse(), t.select() },
            n.prototype.set_el_attrs = function (t, e, n) { var i, s, r, a, o, l; null == n && (n = []), r = {}, i = new CKEDITOR.dom.element(t); for (s in e) a = e[s], a && (r[s] = a); for (o = 0, l = n.length; l > o; o++) s = n[o], r[s] || i.removeAttribute(s); return i.removeAttribute("data-cke-saved-href"), i.setAttributes(r) },
            n.prototype.setup_image_path_drop_on_hover = function () { return $("#ck_wrap").on("mouseenter", "img", function (t) { return function (e) { return $(e.currentTarget).hasClass("drop-target") ? !1 : t.create_small_drop(e.target) } }(this)), $("#ck_wrap").on("mouseleave", "img", function (t) { return function () { return t.destroy_drop(), !1 } }(this)) },
            n.prototype.create_small_drop = function (t) { var e, n; return this.drop && this.destroy_drop(), n = $(t).attr("src"), /^data/.test(n) ? void 0 : (e = $(t).attr("src").replace(/^.+raw\/[^\/]+\/(.+)(\?.+)$/, "$1"), this.drop = new Drop({ target: t, content: e, position: "bottom right", classes: "drop-tool drop-tool-filepath", openOn: "always", remove: !0, constrainToScrollParent: !1 })) },
            n.prototype.destroy_drop = function () { var t; return (null != (t = this.drop) ? t.content : void 0) ? (this.drop.close(), app.editor_helpers.remove_classes_with_prefix(this.drop.target), this.drop.destroy(), this.drop = !1) : void 0 }, n
    }(Backbone.View), classes.CKEditorView = t
}.call(this), 
function () {
    var t, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } 
        for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; t = function (t) {
            function e() { return e.__super__.constructor.apply(this, arguments) } return n(e, t),
                e.prototype.tagName = "a",
                e.prototype.className = "btn",
                e.prototype.id = "commit-btn",
                e.prototype.events = { click: "clicked" },
                e.prototype.states = { disabled: '<i class="glyphicons cloud"></i> Save', "default": '<i class="glyphicons cloud"></i> Save <i class="opts-btn">\u25bc</i>', working: '<i class="glyphicons cloud-download"></i> Working', completed: '<i class="glyphicons cloud_plus"></i> Completed', saving: '<i class="glyphicons cloud-download"></i> Saving', saved: '<i class="glyphicons cloud_plus"></i> Saved!', error: '<i class="glyphicons cloud_minus"></i> Error!', asking_for_message: '<i class="glyphicons notes"></i> Message?' }, e.prototype.initialize = function () { return this.current_state = "disabled", this.rate_limit = 700, this.add_key_listeners() },
                e.prototype.add_key_listeners = function () { return this.listener = new window.keypress.Listener, this.listener.register_combo({ keys: "meta s", is_exclusive: !0, on_keydown: function () { return function (t) { return t.preventDefault() } }(this), on_keyup: function (t) { return function (e) { return t.maybe_commit_file(), e.preventDefault() } }(this) }) }, e.prototype.change_state = function (t) { return null == t && (t = "disabled"), this.current_state = t, this.render() }, e.prototype.render = function () { return this.$el.html(this.states[this.current_state]), "disabled" === this.current_state ? (this.$el.css({ opacity: .6 }), this.$el.addClass("btn-disabled")) : (this.$el.css({ opacity: 1 }), this.$el.removeClass("btn-disabled")), this.delegateEvents(), this },
                e.prototype.clicked = function (t) { return $(t.target).hasClass("opts-btn") ? this.setup_commit_message_prompt(t.target) : this.maybe_commit_file(), !1 }, e.prototype.maybe_commit_file = function () { return app.main.is_html_file() ? app.main.is_valid_xml() ? this.commit_file() : window.confirm("WARNING, it appears that your markup is broken. Saving may result in lost content. \n\nPress CANCEL and manually fix the document (suggested) or press OK and proceed at your own risk. \n\n\nHere's an error message to help you debug:\n" + app.main.get_xml_error()) ? this.commit_file() : void 0 : this.commit_file() }, e.prototype.commit_file = function (t) {
            var e, n, i; return null == t && (t = !1), app.main.has_unsaved_changes() && (n = app.data.get("state").path, t || (t = "Edited " + n + " with Atlas " + app.main.cur_editor_key + " editor"), this.drop && this.custom_message && (t = [this.custom_message, t].join(" - ")), "working" !== this.current_state && "saving" !== this.current_state) ? (this.currently_committing(!0), i = function (t) {
                return function ()
                { return app.main.reset_blob_id(), t.done_committing(!0) }
            }(this), e = function (t) { return function (e, n) { return t.error_committing(!0), app.mailman.trigger(app.events.FLASH_ERROR, n.responseJSON.message) } }(this), app.main.current_file.set("content", app.main.get_current_editor().get_content(!0)), app.main.current_file.set("commit_message", t), app.main.current_file.save(app.main.current_file.attributes, { success: i, error: e }), classes.AtlasApi.update_file(app.data.project.get("path_with_namespace"), app.data.get("state").branch, app.main.current_file.get("file_path")), this.destroy_drop(), this.custom_message = null) : void 0
                },
                e.prototype.enable = function () { return "disabled" === this.current_state ? this.change_state("default") : void 0 },
                e.prototype.currently_committing = function (t) { return null == t && (t = !1), this.change_state(t ? "saving" : "working") },

                e.prototype.done_committing = function (t) { return null == t && (t = !1), $.doTimeout("commit_rate_limit", this.rate_limit, function (e) { return function () { return e.change_state(t ? "saved" : "completed"), $.doTimeout("commit_reset", 2e3, function () { return e.change_state("disabled"), !1 }), !1 } }(this)) },
                e.prototype.error_committing = function (t) { return null == t && (t = !1), this.change_state("error"), $.doTimeout("commit_reset", 2e3, function (t) { return function () { return t.change_state("default"), !1 } }(this)) },
                e.prototype.setup_commit_message_prompt = function (t) { var e; return e = '<p>Include a message:</p> <input type="text" id="commit-message"> <a class="btn > Save</a>"', this.create_drop(t, e) },
                e.prototype.create_drop = function (t, e) { return null != this.drop ? this.destroy_drop() : (this.drop = new Drop({ target: t, content: e, position: "bottom right", classes: "drop-tool drop-tool-commit-message", openOn: "always", remove: !0 }), this.bind_drop_events()) },
                e.prototype.bind_drop_events = function () {
            return $.doTimeout(100, function (t) {
                return function () {
                    var e; return e = $("input", t.drop.content).first().focus(), null != t.custom_message && e.val(t.custom_message), e.keydown(function (n) { return 13 === n.which ? (n.preventDefault(), t.maybe_commit_file(), t.destroy_drop()) : 27 === n.which && t.destroy_drop(), e.keyup(function () { return t.custom_message = e.val() }) }), $(window).on("click.savedrop",
                        function (e) { var n, i; return n = $(e.target), i = ".drop, #commit-message, .commit-btn", n.parents(i).length || n.is(i) ? void 0 : t.destroy_drop() })
                }
            }(this))
        }, e.prototype.destroy_drop = function () { return null != this.drop ? ($("input", this.drop.content).unbind("keypres"), $("window").unbind("click.savedrop"), this.drop.close(), app.editor_helpers.remove_classes_with_prefix(this.drop.target), this.drop.destroy(), this.drop = null) : void 0 }, e
    }(Backbone.View), classes.CommitButtonView = t
}.call(this),
function () {
    classes.EditorEditView = Backbone.View.extend({
        backboneClass: "EditorEditView", initialize: function () { return this.branch_locked = app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch), this.editors = {}, this.add_code(), this.cur_editor_key = "code", this.load_file(function (t) { return function (e) { return t.current_file = e, t.should_show_visual() && (t.add_visual(), t.should_use_visual() && (t.cur_editor_key = "visual")), t.add_toolbar(e), t.get_current_editor().render(), t.get_current_editor().set_content(e.get("content")), t.add_all_buttons_and_sidebars(), t.check_file_changed() } }(this)), this.branch_locked ? $("#editor").addClass("locked") : (this.add_state_listeners(), $(window).on("beforeunload", function (t) { return function () { return t.has_unsaved_text_changes() ? "You have unsaved changes to this file!" : void 0 } }(this))) },
        add_code: function () { var t, e; return e = app.data.get("state").path, t = new classes.AceEditorView({ el: "#editor", filename: e }), this.editors[t.editor_key] = t }, add_visual: function () { var t, e; return e = app.data.get("state").path, t = new classes.CKEditorView({ el: "#editor", filename: e }), t.$el.addClass("style-like-wysiwyg"), this.editors[t.editor_key] = t },
        should_show_visual: function () { return this.current_file.get("content").match(/<html>/g) ? !1 : this.is_html_file() ? !0 : !1 },
        should_use_visual: function () { var t, e, n; return e = docCookies.getItem("pref_edit_html_in"), n = app.helpers.is_valid_xml(this.current_file.get("content")), n || (t = app.helpers.get_xml_error(this.current_file.get("content")), alert("WARNING, it appears that your markup is broken. Using the visual editor may result in lost content, so this file was loaded in the code editor.\n\n If you'd like to use the visual editor, it's suggested you fix the markup first, or proceed at your own risk.\n\n\nHere's an error message to help you debug:\n" + t)), this.url_has_hash("code") || "code" === e || !n ? !1 : !0 },
        get_current_editor: function () { return this.editors[this.cur_editor_key] },
        invert_editor_key: function () { return "code" === this.get_current_editor().editor_key ? "visual" : "code" },
        get_xml_error: function () { return app.helpers.get_xml_error(this.get_current_editor().get_content()) },
        is_valid_xml: function () { return app.helpers.is_valid_xml(this.get_current_editor().get_content()) },
        maybe_switch_editor: function (t) { return this.is_valid_xml() || "visual" !== t || this.branch_locked ? this.switch_editor(t) : window.confirm("WARNING, it appears that your markup is broken. Switching to the visual editor may result in lost content. \n\nPress CANCEL and manually fix the document (suggested) or press OK and proceed at your own risk.\n\n\nHere's an error message to help you debug:\n" + this.get_xml_error()) ? this.switch_editor(t) : void 0 },
        switch_editor: function (t) {
            var e; return this.cur_editor_key !== t ? ($("body").removeClass(this.cur_editor_key).addClass(t), app.mailman.trigger(app.events.EDITOR_SWITCH), docCookies.setItem("pref_edit_html_in", t, new Date(2147483647e3)),
                this.get_current_editor().note_cursor(), e = this.get_current_editor().get_content(), this.get_current_editor().destroy(), this.cur_editor_key = t, this.get_current_editor().render(), this.get_current_editor().set_content(e), this.add_toolbar(), this.switch_editor_button.change_state(this.invert_editor_key())) : void 0
        },
        load_file: function (t) { return this.current_file = null, app.data.project.blob(app.data.get("state").path, app.data.get("state").branch).fetch({ cache: !1, success: function (e) { return function (n) { return "Blob" !== n.backboneClass ? app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_EDITOR_FILE_TYPE) : (t(n), e.branch_locked || "atlas.json" !== e.current_file.get("file_path") ? void 0 : app.mailman.trigger(app.events.FLASH_NOTICE, "Be careful editing this file!<br> This file holds the configuration for building your project. <a href='http://docs.atlas.oreilly.com/ch08.html#atlas-json' target='_blank'>Read documentation about this file</a>.")) } }(this), error: function (t, e) { return 404 === e.status && $("body").html(JST["templates/errors/404"]()), app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_CONTENTS) } }) },
        check_file_changed: function () {
            var t, e; return e = app.data.get("files_changed"), e && e[app.data.get("state").path] ? (t = _.map(e[app.data.get("state").path],
                function (t) { return app.helpers.branch_name(t) }), app.mailman.trigger(app.events.FLASH_WARNING, "This file has been edited in other branches (" + t + "). Editing the file may result in conflicting changes.")) : void 0},
        add_all_buttons_and_sidebars: function () {
            var t, e, n, i; return this.buttons = [], this.sidebars = [], this.add_button("left", { label: "<i class='glyphicons git_branch' title='" + app.helpers.branch_name(app.data.get("state").branch) + "'></i> " + app.helpers.branch_name(app.data.get("state").branch), "class": "branch-indicator" }), this.add_button("left", { label: '<i class="glyphicons dashboard"></i> Dashboard</a>', href: app.paths.project_branch_path() }), this.should_show_visual() && (this.switch_editor_button = this.add_button("left", { states: { "default": '<i class="glyphicons pencil"></i> Visual Editor', visual: '<i class="glyphicons pencil"></i> Visual Editor', code: '<i class="glyphicons pencil"></i> Code Editor' }, id: "switch-editor-btn" }), this.switch_editor_button.change_state(this.invert_editor_key()), this.listenTo(this.switch_editor_button, app.events.SELECT, function (t) { return function () { return t.maybe_switch_editor(t.invert_editor_key()) } }(this))), e = this.add_button("left", {
                id: "files-btn", states: {
                    "default": '<i class="glyphicons more_items"></i> Files', insert: '<i class="glyphicons upload"></i> Drop to Upload <br> &amp; Insert',
                    upload: '<i class="glyphicons upload"></i> Drop to Upload'
                }
            }), this.listenTo(app.mailman, app.events.FILE_DRAGGING_TO_EDITOR, function () { return e.change_state("insert") }),
                this.listenTo(app.mailman, app.events.FILE_DRAGGING_TO_OTHER, function () { return e.change_state("upload") }), this.listenTo(app.mailman, app.events.DRAGEND, function () { return e.change_state() }), this.files_sidebar = this.add_sidebar("left", classes.FilesSidebar), this.listenTo(e, app.events.SELECT, function (t) { return function () { return t.files_sidebar.slideIn() } }(this)), this.branch_locked || (t = new classes.CommitButtonView, this.$(".editor-btn-group-right").append($("<li></li>").append(t.render().el)), this.buttons.push(t), this.listenTo(app.mailman, app.events.CONTENT_CHANGE,
                function () { return function () { return t.enable() } }(this))), this.builds_button = this.add_button("right", { label: '<i class="glyphicons file_export"></i> Builds' }), this.builds_sidebar = this.add_sidebar("right", classes.BuildsSidebar), this.listenTo(this.builds_button, app.events.SELECT, function (t) { return function () { return t.builds_sidebar.slideIn(), t.builds_sidebar.build_list.poll() } }(this)), this.listenTo(this.builds_sidebar, app.events.CLOSE, function (t) { return function () { return t.builds_sidebar.build_list.unpoll() } }(this)), n = this.add_button("right", { label: '<i class="glyphicons send"></i> Notifications' }), i = new classes.FlashView, i.render().$el.insertAfter(n.$el), n.$el.hide(), i.$el.hide(), this.listenTo(n, app.events.SELECT, function () { return function () { return i.$el.toggle() } }(this)), this.listenTo(app.mailman, app.events.FLASH_ERROR, function () { return function () { return n.$el.show(), i.$el.show() } }(this)), this.listenTo(app.mailman, app.events.FLASH_NOTICE, function () { return function () { return n.$el.show(), i.$el.show() } }(this)), this.listenTo(app.mailman, app.events.FLASH_WARNING, function () { return function () { return n.$el.show(), i.$el.show() } }(this)), this.listenTo(app.mailman, app.events.FLASH_CLOSE, function ()
            { return function () { return n.$el.hide() } }(this))
        },
        add_button: function (t, e) { var n; return n = new classes.ButtonView({ model: new Backbone.Model(e) }), this.$(".editor-btn-group-" + t).append($("<li></li>").append(n.render().el)), this.buttons.push(n), n }, add_sidebar: function (t, e) { var n; return n = new e, n.setSide(t), this.$el.append(n.render().el), this.sidebars.push(n), n }, add_state_listeners: function () { return this.listenTo(app.mailman, app.events.INSERT, this.insert), this.listenTo(app.mailman, app.events.INSERT_IMAGE, this.insert_image), this.listenTo(app.mailman, app.events.INSERT_IMAGE_SUCCESS, this.insert_image_success) }, insert_image: function (t, e) { return this.get_current_editor().insert_image(t, e) }, insert: function (t) { return this.get_current_editor().insert(t) }, insert_image_success: function (t, e, n) { return this.get_current_editor().insert_image_success(t, e, n) },
        has_unsaved_text_changes: function () { return !app.helpers.match_no_whitespace(this.get_current_editor().get_content(), this.current_file.get("content")) }, has_unsaved_changes: function () { return this.get_current_editor().git_sha1() === this.current_file.get("blob_id") ? !1 : !0 }, reset_blob_id: function () { return this.current_file.set("blob_id", app.helpers.git_sha1(this.current_file.get("content"))) }, add_toolbar: function (t) {
            return null == t && (t = !1), t || (t = this.current_file),
                this.branch_locked ? this.toolbar = new classes.EditorNoEditBannerView({ el: "#toolbar" }) : (this.toolbar && this.toolbar.destroy(), this.toolbar = new classes.EditorToolbarView({ el: "#toolbar", editor: this.get_current_editor(), file_extension: app.helpers.get_extension(t.get("file_path")) }))
        }, url_has_hash: function (t) { return window.location.hash === "#" + t }, is_html_file: function () { return "html" === app.data.get("state").path.split(".").slice(-1)[0] }
    })
}.call(this),
function () { var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }, i = [].indexOf || function (t) { for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e; return -1 }; classes.EditorCommand = function (e) {
        function s() { return this.onTrigger = t(this.onTrigger, this), s.__super__.constructor.apply(this, arguments) } return n(s, e), s.prototype.events = { submit: "user_submit", "click .btn.remove": "user_remove_el", mouseenter: "mouseentered", mouseleave: "mouseleft", "click .close": "clicked_close", click: "clicked", keydown: "keydown" }, s.prototype.defaultState = "inactiveState", s.prototype.transitions = { trigger: { from: "inactiveState", to: "triggerState" }, executingSimple: { from: "triggerState", to: "executeState" }, promptingExtant: { from: "triggerState", to: "promptExtantState" }, promptingNew: { from: "triggerState", to: "promptNewState" }, executingNew: { from: "promptNewState", to: "executeState" }, executingExtant: { from: "promptExtantState", to: "executeState" }, cancelingNew: { from: "promptNewState", to: "inactiveState" }, cancelingExtant: { from: "promptExtantState", to: "inactiveState" }, success: { from: "executeState", to: "inactiveState" } }, s.clickhack = function () { var t; return t = _.extend({}, Backbone.Events), $(document).on("click", function (e) { return t.trigger("click", e) }), t }(), s.prototype.defaults = function () { return { attrs_to_edit: [], autofocus: !0, small_drop_on_hover: !0, selector_is_clickable: !1, prompt_on_execute: !0, selector: "", built_in: !1, edit_line: !1, remove_newlines_on_insert: !1, dismiss_on_any_click: !1, add_to_small: !1, just_run_this: !1 } }, s.prototype.initialize = function () { var t; if (!this.options.name) throw new Error("Dawg, you need a name for your command"); return this.options.template_name || (this.options.template_name = this.options.name), this.options = _.defaults(this.options, this.defaults()), FSM.mixin(this), this.options.override && this.set_options_from_override(), t = this.options, this.name = t.name, this.template_name = t.template_name, this.attrs_to_edit = t.attrs_to_edit, this.selector = t.selector, this.editor = t.editor, this.tag_names_allowed = _.map(this.selector.split(","), function (t) { return t.split("[")[0].trim() }), this.button = $("button[data-command-name='" + this.name + "']"), this.icon = this.button.html(), this.existing = !1, this.template_path = "editor/commands/" + this.options.file_type + "/" + this.template_name, JST[this.template_path] || (this.template_path = !1), this.attrs_to_edit.length && this.setup_outside_click_detection(), this.options.small_drop_on_hover && !this.options.built_in && this.selector.length && this.setup_small_drop_on_hover(), this.options.selector_is_clickable ? this.setup_drop_on_selector_click() : void 0 }, s.prototype.go = function () { var t; return this.transitionTo("promptNewState" === (t = this.getCurrentState()) || "promptExtantState" === t ? "inactiveState" : "triggerState") }, s.prototype.onTrigger = function (t) { var e; return t(), this.should_simply_execute() ? this.transitionTo("executeState") : (e = this.existing || this.editor.get_closest_of(this.tag_names_allowed), e ? (this.existing = e, this.transitionTo("promptExtantState")) : this.transitionTo("promptNewState")) }, s.prototype.onExecutingSimple = function (t) {
            var e, n, i, s; return this.options.built_in ? this.editor.exec_command(this.name) : this.options.just_run_this ? this.options.just_run_this(this.editor) : (e = this.editor.get_selected_content(), n = {}, this.options.populate_extra_attrs && this.options.populate_extra_attrs(n, !1), this.options.edit_line ? (e = this.editor.get_line(), "string" == typeof e ? (e = this.options.edit_line(e), this.editor.replace_line(e)) : (i = function () { var t, n, i; for (i = [], t = 0, n = e.length; n > t; t++) s = e[t], i.push(this.options.edit_line(s)); return i }.call(this),
                this.editor.replace_selected_lines(i))) : this.editor.insert_from_template(this.template_path, e, n, this.editor.get_selection_type(), this.options.remove_newlines_on_insert)), t(), this.transitionTo("inactiveState")
        }, s.prototype.onPromptingNew = function (t) { var e, n, i; return "visual" === this.editor.editor_key ? (this.selection_type = this.editor.get_selection_type(), n = this.editor.get_selected_content(), this.fs = this.editor.create_from_html("<span class='fs'>" + n + "</span>"), e = this.get_target_attrs(this.fs, e), this.editor.insert_element(this.fs), i = this.fs) : i = this.button.get(0), this.create_drop(i, e), this.do_autofocus(), t() }, s.prototype.onPromptingExtant = function (t) { var e; return "visual" === this.editor.editor_key ? (this.editor.trigger("saveSnapshot"), this.fs = $(this.existing).addClass("fse fs").get(0), e = this.get_target_attrs(this.fs, e), this.create_drop(this.fs, e)) : this.create_drop(button.get(0)), this.do_autofocus(), t() }, s.prototype.onCancelingNew = function (t) { return this.destroy_drop(), this.remove_highlight(), this.reset(), this.editor.focus(), t() }, s.prototype.onCancelingExtant = function (t) { return this.destroy_drop(), this.remove_highlight(), this.reset(), this.editor.trigger("saveSnapshot"), this.editor.focus(), t() }, s.prototype.user_submit = function (t) { return t.preventDefault(), this.transitionTo("executeState") }, s.prototype.user_remove_el = function (t) { return this.editor.trigger("saveSnapshot"), this.editor.remove_element(this.existing), t.stopPropagation(), this.transitionTo("inactiveState"), this.editor.trigger("saveSnapshot") }, s.prototype.onExecutingNew = function (t) { var e, n; return e = "visual" === this.editor.editor_key ? $(this.fs).html() : this.editor.get_selected_content(), n = this.get_form_data(), this.options.process_data_on_submit && (n = this.options.process_data_on_submit(n, e)), this.options.if_content_is_empty_use && !e && (e = n[this.options.if_content_is_empty_use]), this.destroy_drop(), this.editor.select_element(this.fs), this.editor.insert_from_template(this.template_path, e, n, this.selection_type, this.options.remove_newlines_on_insert), "indexterm" === this.name && this.editor.indexterm_fix(), this.remove_highlight(), t(), this.transitionTo("inactiveState"), this.editor.trigger("saveSnapshot") }, s.prototype.onExecutingExtant = function (t) { var e, n; return this.editor.select_element(this.fs), e = "visual" === this.editor.editor_key ? $(this.fs).html() : this.editor.get_selected_content(), n = this.get_form_data(), this.options.process_data_on_submit && (n = this.options.process_data_on_submit(n, e)), n.content ? $(this.fs).html(n.content) : this.editor.set_el_attrs(this.fs, n, this.attrs_to_edit), this.editor.collapse_selection(), this.destroy_drop(), this.remove_highlight(), t(), this.transitionTo("inactiveState"), this.editor.trigger("saveSnapshot") }, s.prototype.onSuccess = function (t) { return this.reset(), t() }, s.prototype.set_options_from_override = function () { var t, e, n, s, r, a, o, l; o = this.options.override, l = []; for (n in o) r = o[n], l.push(n === this.options.editor.editor_key ? function () { var n; n = []; for (t in r) e = r[t], n.push(t === this.options.file_type ? function () { var t; t = []; for (s in e) a = e[s], t.push(this.options[s] = a); return t }.call(this) : i.call(app.constants.EDITOR_COMMAND_FILE_TYPES, t) < 0 ? this.options[t] = e : void 0); return n }.call(this) : i.call(app.constants.EDITOR_KEYS, n) < 0 ? n === this.options.file_type ? function () { var n; n = []; for (t in r) e = r[t], n.push(this.options[t] = e); return n }.call(this) : void 0 : void 0); return l }, s.prototype.timerID = function () { return "smalldroptimer" + this.selector }, s.prototype.setup_small_drop_on_hover = function () { return $("#editor").on("mouseenter", this.selector, function (t) { return function (e) { return $.doTimeout(t.timerID(), 200, function () { return $(e.currentTarget).hasClass("drop-target") ? !1 : (t.is_active() || (t.create_small_drop(e.target), $.doTimeout(t.timerID(), 5e3, function () { var e, n, i; return (null != (e = t.drop) ? e.target : void 0) && document.contains(null != (n = t.drop) ? n.target : void 0) ? !0 : (null != (i = t.drop) && "function" == typeof i.close && i.close(), !1) })), !1) }) } }(this)), $("#editor").on("mouseleave", this.selector, function (t) { return function () { return $.doTimeout(t.timerID(), 800, function () { return t.is_active() || t.destroy_drop(), !1 }) } }(this)) }, s.prototype.setup_drop_on_selector_click = function () { return $("#editor").on("click", this.selector, function (t) { return function (e) { return t.existing = e.target, e.stopPropagation(), t.transitionTo("triggerState") } }(this)) }, s.prototype.setup_outside_click_detection = function () { return classes.EditorCommand.clickhack.on("click", function (t) { return function (e) { return t.drop ? $.contains(t.drop.drop, e.target) || t.drop.drop.isEqualNode(e.target) || e.isPropagationStopped() || !t.options.dismiss_on_any_click && t.drop.target.isEqualNode(e.target) && $.contains(t.drop.target, e.target) || "inactiveState" === t.getCurrentState() ? void 0 : t.transitionTo("inactiveState") : void 0 } }(this)) }, s.prototype.reset = function () { return this.existing = this.fs = this.drop = this.selection_type = null }, s.prototype.mouseentered = function () { return $.doTimeout(this.timerID()) }, s.prototype.mouseleft = function () { return this.is_active() ? void 0 : $.doTimeout(this.timerID(), 400, function (t) { return function () { return t.is_active() || t.destroy_drop(), !1 } }(this)) }, s.prototype.clicked = function (t) { var e; return this.is_active() ? void 0 : (e = this.drop.target, this.destroy_drop(), this.existing = e, this.transitionTo("triggerState"), t.stopPropagation()) }, s.prototype.keydown = function (t) { return 27 === t.which ? this.transitionTo("inactiveState") : void 0 }, s.prototype.clicked_close = function (t) { return t.stopPropagation(), t.preventDefault(), this.transitionTo("inactiveState") }, s.prototype.do_autofocus = function () { return this.options.autofocus ? $.doTimeout(100, function (t) { return function () { var e; return e = $("input, textarea", t.drop.content).first().focus(), t.options.autofocus === app.constants.END ? app.editor_helpers.createTextSelection(e[0], e.val().length, e.val().length) : t.options.autofocus === app.constants.ALL && e.select(), !1 } }(this)) : void 0 }, s.prototype.create_drop = function (t, e) { var n, i; return null == e && (e = {}), this.drop && this.destroy_drop(), n = "<div class='clearfix'><a href='#' class='close'>&times;</a></div>", i = JST["editor/prompts/" + this.template_name](e), this.drop = new Drop({ target: t, content: n + i, position: "bottom center", classes: "drop-theme-arrows-bounce drop-tool " + this.name, openOn: "always", remove: !0, tetherOptions: { constraints: [{ to: "scrollParent", attatchment: "together" }] } }), this.setElement(this.drop.content) }, s.prototype.create_small_drop = function (t) { var e; return this.drop && this.destroy_drop(), e = this.icon, this.options.add_to_small && (e += this.options.add_to_small(t)), this.drop = new Drop({ target: t, content: e, position: "bottom center", classes: "drop-theme-arrows-bounce drop-tool drop-tool-small " + this.name, openOn: "always", remove: !0, constrainToScrollParent: !1 }), this.setElement(this.drop.content) }, s.prototype.destroy_drop = function () { var t, e, n, i; return (null != (t = this.drop) ? t.content : void 0) ? (null != (e = this.drop) && e.close(), this.remove_classes_with_prefix(null != (n = this.drop) ? n.target : void 0), null != (i = this.drop) && i.destroy(), this.drop = !1) : void 0 }, s.prototype.remove_highlight = function () { return this.is_existing() ? $(this.fs).removeClass("fs fse") : this.editor.remove_element(this.fs), this.editor.trigger("updateSnapshot"), this.fs = !1 }, s.prototype.is_active = function () { return this.drop ? !$(this.drop.drop).hasClass("drop-tool-small") : !1 }, s.prototype.is_existing = function () { return this.fs ? $(this.fs).hasClass("fse") : !1 }, s.prototype.remove_classes_with_prefix = function (t, e) { return null == e && (e = "drop-"), $(t).removeClass(this.name), t = app.editor_helpers.remove_classes_with_prefix(t, e), this.editor.trigger("updateSnapshot"), t }, s.prototype.get_target_attrs = function (t) { var e, n, i, s, r; if (e = {}, t) for (r = this.attrs_to_edit, i = 0, s = r.length; s > i; i++) n = r[i], e[n] = $(t).attr(n); return this.options.populate_extra_attrs && this.options.populate_extra_attrs(e, t), e }, s.prototype.get_form_data = function () { var t; return t = {}, this.$("input, textarea").each(function (e, n) { return t[$(n).attr("name")] = $(n).is("input[type='checkbox']") ? $(n).prop("checked") ? !0 : "" : $(n).val() }), t }, s.prototype.should_simply_execute = function () { return 0 === this.attrs_to_edit.length ? !0 : this.options.prompt_on_execute || this.existing ? !1 : !0 }, s.prototype.destroy = function () { return this.remove(), $("#editor").off("mouseenter", this.selector), $("#editor").off("mouseleave", this.selector), $("#editor").off("click", this.selector), classes.EditorCommand.clickhack.off("click") }, s
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.EditorNoEditBannerView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "click button": "button_clicked", "mouseenter button": "button_mouseenter", "mouseleave button": "button_mouseleave" },
            n.prototype.initialize = function () { return this.template = JST["templates/editor/toolbar-locked-branch"], this.branch_banner = new classes.BranchBannerView, this.$el.html(this.branch_banner.render().el) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }, n = [].indexOf || function (t) { for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e; return -1 }; classes.EditorToolbarView = function (t) {
        function i() { return i.__super__.constructor.apply(this, arguments) } return e(i, t), i.prototype.events = { "click button": "button_clicked", "mouseenter button": "button_mouseenter", "mouseleave button": "button_mouseleave" }, i.prototype.initialize = function () { if (!this.options.editor) throw new Error(classes.EditorToolbarView.ERROR_NO_EDITOR); if (!this.options.file_extension) throw new Error(classes.EditorToolbarView.NO_FILE_EXTENSION); switch (this.commands = {}, this.editor = this.options.editor, this.keypress_listener = new window.keypress.Listener, this.options.file_extension) { case "html": case "htm": this.file_type = app.constants.HTML; break; case "asciidoc": case "asc": case "adoc": this.file_type = app.constants.ASC; break; case "markdown": case "mdown": case "md": this.file_type = app.constants.MD; break; default: this.file_type = app.constants.OTHER_FILE_TYPE } return "visual" === this.editor.editor_key ? (this.template = JST["editor/toolbar-visual"], this.setup_internal_click_events()) : this.template = this.file_type !== app.constants.OTHER_FILE_TYPE ? JST["editor/toolbar-" + this.file_type] : function () { }, this.$el.html(this.template()), this.commands_available = this.$("button[data-command-name]").map(function () { return { name: $(this).data("command-name"), label: $(this).data($(this).data("command-label") ? "command-label" : "command-name") } }).get(), this.command_names_available = _.pluck(this.commands_available, "name"), this.setup_commands(), this.setup_html_book_commands(), this.add_drop_downs(), this.setup_keyboard_shortcuts() }, i.prototype.setup_commands = function () { return new classes.SpecificEditorCommands(this, this.editor) }, i.prototype.button_mouseenter = function (t) { var e; return e = $(t.currentTarget).data("command-label") || $(t.currentTarget).data("command-name") || $(t.currentTarget).data("dropdown-trigger"), e ? $.doTimeout("editor-tooltip", 50, function (n) { return function () { var i; return (null != (i = n.tooltip) ? i.close : void 0) && n.tooltip.close(), n.tooltip = new Drop({ target: t.currentTarget, content: e, position: "top center", classes: "tooltip", openOn: "always", remove: !0, constrainToWindow: !1, constrainToScrollParent: !1 }), !1 } }(this)) : void 0 }, i.prototype.button_mouseleave = function () { return $.doTimeout("editor-tooltip", 50, function (t) { return function () { var e; return null != (e = t.tooltip) && e.close(), !1 } }(this)) }, i.prototype.setup_html_book_commands = function () { var t; return t = this.$("#html-book-tools"), t.length ? (this.html_book_tools = "visual" === this.editor.editor_key ? new classes.HTMLBookToolsCKEditor({ el: this.$el }) : new classes.HTMLBookTools({ el: this.$el }), this.listenTo(this.html_book_tools, app.events.INSERT, function (t) { return function (e) { var n, i, s; return n = t.editor.get_selected_content(), s = "editor/commands/" + t.file_type + "/book/" + e, i = "visual" === t.editor.editor_key ? !1 : "wrap", t.editor.insert_from_template(s, n, !1, !1, i) } }(this))) : void 0 }, i.prototype.button_clicked = function (t) { var e, n; if (n = $(t.currentTarget).data("command-name")) { if (e = this.commands[n], t.stopPropagation(), e) return e.go(); throw new Error("That command does not exist for this editor/toolbar/format") } }, i.prototype.add_command = function (t) { var e, i; return i = t.name, n.call(this.command_names_available, i) >= 0 ? (t.file_type = this.file_type, t.editor = this.editor, e = new classes.EditorCommand(t), this.commands[e.name] = e) : void 0 }, i.prototype.add_drop_downs = function () {
            return this.$("div[data-dropdown-name]").each(function (t) {
                return function (e, n) {
                    var i, s, r, a, o; return i = $(n), o = i.data("dropdown-name"), s = t.$("button[data-dropdown-trigger='" + o + "']"), r = i.html(), a = new Drop({ target: s.get(0), content: r, position: "bottom center", classes: "drop-theme-arrows-bounce-dark toolbar" }), $(a.content).on("click", "button", function (e) {
                        return t.button_clicked(e), a.close()
                    })
                }
            }(this))
        }, i.prototype.setup_internal_click_events = function () { return $("#editor").on("click", ".delete_comment", function (t) { var e, n, i, s, r, a; for (i = new CKEDITOR.dom.element(t.target), n = new CKEDITOR.dom.elementPath(i), a = n.elements, s = 0, r = a.length; r > s; s++) if (e = a[s], "comment" === e.getAttribute("data-type")) return void e.remove() }), $("#editor").on("click", ".comment-identifier", function () { var t; t = $(this).closest("[data-type='comment']"), t.attr("collapsed") ? t.removeAttr("collapsed") : t.attr("collapsed", !0) }) }, i.prototype.setup_keyboard_shortcuts = function () { var t, e, n, i, s, r; n = this.shortcuts, this.commands_available = _.map(this.commands_available, function (t) { return t.shortcut = n[t.name], t }), this.commands_available = _.filter(this.commands_available, function (t) { return t.shortcut }), r = this.shortcuts, s = function (t) { return function (e, n) { return t.keypress_listener.register_combo({ keys: n, is_unordered: !0, is_exclusive: !0, on_keydown: function (t) { return t.preventDefault() }, on_keyup: function (n) { var i; if (i = t.commands[e], !i) throw new Error("That command does not exist for this editor/toolbar/format"); return i.go(), n.preventDefault() } }) } }(this); for (e in r) i = r[e], s(e, i); return t = JST["editor/shortcuts"]({ shortcuts: this.commands_available }), $("body").append(t), this.keypress_listener.simple_combo("meta /", function () { return function () { return $("#shortcuts-modal").modal("toggle") } }(this)), this.keypress_listener.simple_combo("escape", function () { return function () { return $("#shortcuts-modal").modal("hide") } }(this)) }, i.prototype.destroy = function () { var t, e, n; this.undelegateEvents(), this.$el.removeData().unbind(), $("#editor").off("click"), n = this.commands; for (t in n) e = n[t], e.destroy(), delete this.commands.k; return this.keypress_listener.reset() }, i
    }(Backbone.View), classes.EditorToolbarView.ERROR_NO_EDITOR = "You need to initialize this view with an editor in options", classes.EditorToolbarView.NO_FILE_EXTENSION = "You need to initialize this view with a file_extension in options"
}.call(this),

function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.HTMLBookTools = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),

            n.prototype.initialize = function () { return this.setup_component_objects(), this.hbcDropdown = new classes.DropdownView({ disable_search_threshold: 50, placeholder: "Insert", attributes: { id: "hbc" }, className: "dropdown" }), this.setupHBCDropdown() },

            n.prototype.setupHBCDropdown = function () { var t, e, n, i, s; this.hbcDropdown.add({ model: new Backbone.Model({ label: "" }) }), this.$("#html-book-tools").html(this.hbcDropdown.render().el), this.listenTo(this.hbcDropdown, app.events.SELECT, function (t) { return function (e) { return t.trigger(app.events.INSERT, e.get("name")), t.hbcDropdown.render() } }(this)), i = this.component_objects, s = []; for (e in i) t = i[e], t.label || (t.label = e), t.name || (t.name = e), n = new Backbone.Model(t), s.push(this.hbcDropdown.add({ model: n })); return s },
            n.prototype.setup_component_objects = function () { return this.uncommon_components = ["appendix", "copyright-page", "dedication", "foreword", "preface", "titlepage", "toc"], this.component_objects = { part: { doesNotAllow: ["part"] }, chapter: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, sect: { label: "Section", doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, appendix: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, "copyright-page": { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, dedication: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, foreword: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, sidebar: { doesNotAllow: ["sect", "sidebar", "chapter", "part"].concat(this.uncommon_components) }, preface: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, titlepage: { doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, toc: { label: "Table of Contents", doesNotAllow: ["chapter", "part"].concat(this.uncommon_components) }, warning: { doesNotAllow: ["section", "chapter", "part", "warning", "note"].concat(this.uncommon_components) }, note: { doesNotAllow: ["section", "chapter", "part", "warning", "note"].concat(this.uncommon_components) }, blockquote: { doesNotAllow: ["section", "chapter", "part", "warning", "note", "blockquote"].concat(this.uncommon_components) }, example: { doesNotAllow: ["section", "chapter", "part", "warning", "note", "blockquote"].concat(this.uncommon_components) } } }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }, n = [].indexOf || function (t) { for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e; return -1 }; classes.HTMLBookToolsCKEditor = function (t) {
        function i() { return i.__super__.constructor.apply(this, arguments) } return e(i, t), i.prototype.events = { "click #html-book-tools": "clicked" }, i.prototype.initialize = function () { return this.setup_component_objects(), this.hbcDropdown = new classes.DropdownView({ disable_search_threshold: 50, placeholder: "Insert", attributes: { id: "hbc" }, className: "dropdown" }), CKEDITOR.on("instanceReady", function (t) { return function (e) { return t.editor = e.editor, t.setupHBCDropdown(), t.setupOnPasteFixes() } }(this)) }, i.prototype.clicked = function () { return this.editor.focus() }, i.prototype.setupHBCDropdown = function () {
            return i.__super__.setupHBCDropdown.call(this),
                this.listenTo(this.hbcDropdown.collection, "change", function (t) { return function () { return t.hbcDropdown.render() } }(this)), this.editor.on("selectionChange", function (t) { return function (e) { var i, s, r; return e.data.path.contains(["ul", "ol", "li"]) ? t.hbcDropdown.collection.each(function (t) { return t.set("disabled", !0) }) : (r = app.editor_helpers.getClosestType(e.data.path.elements), r && "sect" === r.slice(0, 4) && (r = "sect"), (i = t.component_objects[r]) ? (s = i.doesNotAllow, t.hbcDropdown.collection.each(function (t) { var e; return e = t.get("name"), n.call(s, e) >= 0 ? t.set("disabled", !0) : t.unset("disabled") }), s ? void 0 : t.hbcDropdown.collection.each(function (t) { return t.unset("disabled") })) : t.hbcDropdown.collection.each(function (t) { return t.unset("disabled") })) } }(this))
        }, i.prototype.destroy = function () { return this.hbcDropdown.collection.reset(), this.stopListening() }, i.prototype.setupOnPasteFixes = function () { return this.editor.on("paste", function (t) { return function (e) { var n, i, s, r; return s = $.parseHTML(e.data.dataValue), i = $("<div>"), app.editor_helpers.getSelectedX(t.editor, "code") ? (t.editor.insertText($(s).text()), void (e.data.dataValue = "")) : app.editor_helpers.getSelectedX(t.editor, "pre") ? (app.editor_helpers.isJustTextAndBrs(s) ? t.editor.insertHtml(e.data.dataValue) : (r = !1, s.forEach(function (t) { var e, n; return e = $(t), _.isUndefined(e.prop("tagName")) ? (n = e.text(), n = n.replace("<br>", "").replace("<br/>", "").replace("\n", "").replace("\r", "")) : "P" === e.prop("tagName") ? (n = e.html().replace(/<(?!br\s*\/?)[^>]+>/g, ""), -1 !== e.html().trim().indexOf("<br>") && "<br>" !== e.html().trim() && (r = !0), "<br>" !== n && (n += "<br>", r && (n += "<br>"))) : n = e.html().replace(/<(?!br\s*\/?)[^>]+>/g, ""), n.trim().length ? i.append(n) : void 0 }), t.editor.insertHtml(i.html())), void (e.data.dataValue = "")) : (n = !1, s.forEach(function (e) { var s, r; return "SECTION" !== $(e).prop("tagName") ? "SPAN" !== $(e).prop("tagName") || $(e).hasClass("cke_widget_wrapper") ? "PRE" === $(e).prop("tagName") ? i.append($(e).removeAttr("style")) : void 0 === $(e).prop("tagName") ? i.append(n ? "<p>" + $(e).text() + "</p>" : $(e).text()) : "BR" === $(e).prop("tagName") ? n = !0 : i.append($(e).removeAttr("style")) : -1 !== $(e).html().indexOf("\n") ? (r = $(e).html().split("\n"), i.append(_.reduce(r, function (t, e) { return "" + t + "<p>" + e + "</p>" }, ""))) : i.append($(e).html()) : $(e).contents().length ? (s = app.editor_helpers.getHBLevel(t.editor, "sect"), $(e).attr("data-type", "sect" + s), $("h1,h2,h3,h4,h5,h6", e).each(function (t, e) { var n, i, r, a; return n = {}, $.each(e.attributes, function (t, e) { return n[e.nodeName] = e.nodeValue }), a = $(e).prop("tagName"), r = $(e).html(), i = $("<h" + s + ">", n).html(r), $(e).replaceWith(i) }), i.append($(e).removeAttr("style"))) : void 0 }), e.data.dataValue = i.html()) } }(this)) }, i
    }(classes.HTMLBookTools)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.BuildsSidebar = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.id = "builds-sidebar",
            n.prototype.initialize = function () { return this.add_quick_build(), this.add_builds_list(), this.template = JST["editor/sidebars/builds_sidebar"] },
            n.prototype.add_quick_build = function () { return this.quick_build = new classes.QuickBuildView, this.listenTo(this.quick_build, app.events.SUBMIT, this.submit_build) },
            n.prototype.add_builds_list = function () { return this.build_list = new classes.BuildListView({ model: app.data.project, attributes: { "class": "build-list down10" } }), this.build_list.collection.reset(app.data.get("builds")) },
            n.prototype.submit_build = function (t) { return t.length ? (this.quick_build.setState("working"), this.build_list.collection.create({ formats: t.join(), branch: app.data.get("state").branch }, { wait: !0, success: function (t) { return function () { return t.quick_build.setState("success"), t.build_list.poll() } }(this), error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error sending your build!") } }(this) })) : void app.mailman.trigger(app.events.FLASH_ERROR, "Please select at least one format to build") },
            n.prototype.render = function () { return this.$el.html(this.template()), this.delegateEvents(), this.$("#build-sidebar-contents").append(this.quick_build.render().el), this.$("#build-sidebar-contents").append(this.build_list.render().el), this.$("#build-sidebar-contents").append("<a class='btn block align-center down10 align-right' href='" + app.paths.builds_path() + "'>All builds</a>"), this }, n
    }(classes.SidebarView)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.FilesSidebar = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.id = "files-sidebar",
            n.prototype.initialize = function () { return this.branch_locked = app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch), this.template = JST["editor/sidebars/files_sidebar"], this.init_path(), this.init_tree_list(), this.branch_locked || this.init_file_controls(), this.list.fetch_tree(app.data.get("state").working_dir, app.data.get("state").branch) },
            n.prototype.init_path = function () { return this.path = new classes.PathView({ path: app.data.get("state").working_dir }), this.listenTo(this.path, app.events.SELECT, this.path_select) },
            n.prototype.path_select = function (t, e) { return e.preventDefault(), this.list.fetch_tree(t, app.data.get("state").branch), app.data.set("state", { path: app.data.get("state").path, branch: app.data.get("state").branch, working_dir: t }) },
            n.prototype.init_tree_list = function () { return this.list = new classes.TreeListView({ model: app.data.project, insertables: app.constants.IMAGE_FILE_EXTS, files_changed: app.data.get("files_changed") }), this.list.$el.addClass("list-skinny"), this.list.set_active_file(app.data.get("state").path), this.listenTo(this.list, app.events.SELECT, this.list_select) },
            n.prototype.list_select = function (t, e) { return e.preventDefault(), this.path.updatePath(t.collection.path), this.list.fetch_tree(t.collection.path, t.collection.branch), app.data.set("state", { path: app.data.get("state").path, branch: app.data.get("state").branch, working_dir: t.collection.path }) },
            n.prototype.init_file_controls = function () { return this.file_controls = new classes.FileControlView({ file_list: this.list }), this.branch_locked ? void 0 : this.listenTo(this.list, app.events.SHOW_ACTIONS, function (t, e) { return this.file_controls.show_actions(t, e) }) },
            n.prototype.render = function () { return this.$el.html(this.template()), this.$el.append(this.path.render().el), this.$el.append(this.list.render().el), this.branch_locked ? this.$el.addClass("locked") : this.$el.append(this.file_controls.render().el), this }, n
    }(classes.SidebarView)
}.call(this),
function () {
    classes.SpecificEditorCommands = function () {
        function t(t, e) {
            var n, i, s, r, a, o, l; for (this.toolbar = t, this.editor = e, t.shortcuts = { save: "meta s", bold: "meta b", italic: "meta i", link: "meta k", id: "ctrl i", comment: "meta shift c", "comment-collapse": "meta e", bulletedlist: "meta u", numberedlist: "meta o", "heading-increase": "meta [", "heading-decrease": "meta ]", pre: "meta p", indexterm: "meta shift i", "class": "meta alt c" }, s = ["bold", "italic", "table", "MediaEmbed", "pastefromword", "pastetext"], r = 0, o = s.length; o > r; r++) i = s[r], this.toolbar.add_command({ name: i, override: { visual: { built_in: !0 } } }); for (n = ["code", "pass-block", "pass-inline", "sidebar", "note", "warning"], a = 0, l = n.length; l > a; a++) i = n[a], this.toolbar.add_command({ name: i }); this.toolbar.add_command({ name: "link", template_name: "a", attrs_to_edit: ["href"], autofocus: app.constants.ALL, selector: "a[href]:not(a[data-type])", if_content_is_empty_use: "href" }), this.toolbar.add_command({ name: "indexterm", attrs_to_edit: ["data-primary", "data-secondary", "data-tertiary", "data-see", "data-seealso", "data-primary-sortas", "data-secondary-sortas", "data-tertiary-sortas", "data-startref", "id"], selector: 'a[data-type="indexterm"]', selector_is_clickable: !0, remove_newlines_on_insert: !0 }), this.toolbar.add_command({
                name: "id", selector: "section, div, figure, table, aside", attrs_to_edit: ["id"], small_drop_on_hover: !1, dismiss_on_any_click: !0, populate_extra_attrs: function (t, e) { var n; return t.tagname = $(e).prop("tagName").toLowerCase(), n = $(e).text(), t.suggestion = app.helpers.slugify(n.slice(0, 21)) },
                process_data_on_submit: function (t) { return t.id = app.helpers.slugify(t.id), t }
            }), this.toolbar.add_command({
                name: "class", selector: "section, div, figure, table, aside", attrs_to_edit: ["class"], small_drop_on_hover: !1,
                dismiss_on_any_click: !0, populate_extra_attrs: function (t, e) { return t.tagname = $(e).prop("tagName").toLowerCase(), t["class"] = t["class"].replace(/fse/g, "").replace(/fs/g, "") }, process_data_on_submit: function (t) { return t["class"] += " fse fs ", t }
            }), this.toolbar.add_command({ name: "xref", selector: "a[data-type='xref'], a[data-type='link']", attrs_to_edit: ["href"], if_content_is_empty_use: "href", populate_extra_attrs: function (t, e, n) { var i; return null == n && (n = []), $("#editor #ck_wrap #ck [id]").each(function () { return n.push(this.id) }), t.ids = '["' + n.join('","') + '"]', "#" === (null != (i = t.href) ? i[0] : void 0) ? t.href = t.href.substr(1) : void 0 }, process_data_on_submit: function (t, e) { return "#" !== t.href[0] && (t.href = "#" + t.href), t["data-type"] = e ? "link" : "xref", t } }), this.toolbar.add_command({ name: "pre", attrs_to_edit: ["data-code-language", "data-executable"], selector: "pre", prompt_on_execute: !1, populate_extra_attrs: function (t) { return function (e, n) { return n ? void 0 : t.editor.get_selection_type() === app.constants.BLOCK ? e.is_block = !0 : void 0 } }(this) }), this.toolbar.add_command({ name: "comment", prompt_on_execute: !1, populate_extra_attrs: function () { return function (t) { return t.nickname = app.data.get("user").nickname, t.email = app.data.get("user").email } }(this) }), this.toolbar.add_command({
                name: "comment-collapse", prompt_on_execute: !1,
                just_run_this: function (t) { var e; return e = t.$("[data-type='comment']"), e.first().attr("collapsed") ? e.removeAttr("collapsed") : e.attr("collapsed", !0) }
            }),
            this.toolbar.add_command({
                name: "numberedlist", template_name: "ol", override: {
                    visual: { built_in: !0 }, code: {
                        html: { remove_newlines_on_insert: "wrap" }, md: { edit_line: function (t) { return /^\d\. +/.test(t) ? t.replace(/^\d\. +/, "") : ("* " === t.slice(0, 2) && (t = t.slice(2)), "1. " + t) } },
                        asc: { edit_line: function (t) { return ". " === t.slice(0, 2) ? t.slice(2) : ("* " === t.slice(0, 2) && (t = t.slice(2)), ". " + t) } }
                    }
                }
            }), this.toolbar.add_command({ name: "bulletedlist", template_name: "ul", override: { visual: { built_in: !0 }, md: { edit_line: function (t) { return "* " === t.slice(0, 2) ? t.slice(2) : (t = t.replace(/^\d\. +/, ""), "* " + t) } }, asc: { edit_line: function (t) { return "* " === t.slice(0, 2) ? t.slice(2) : (". " === t.slice(0, 2) && (t = t.slice(2)), "* " + t) } } } }), this.toolbar.add_command({ name: "mathjax", template_name: "math", override: { visual: { built_in: !0 } } }), this.toolbar.add_command({ name: "heading-increase", override: { md: { edit_line: function (t) { return 0 === t.length ? "# Title" : "# " === t.slice(0, 2) ? t : "#" === t[0] ? t.slice(1) : "# " + t } }, asc: { edit_line: function (t) { return 0 === t.length ? "= Title" : "= " === t.slice(0, 2) ? t : "=" === t[0] ? t.slice(1) : "= " + t } } } }), this.toolbar.add_command({ name: "heading-decrease", override: { md: { edit_line: function (t) { return "#" === t[0] ? "#" + t : t } }, asc: { edit_line: function (t) { return "=" === t[0] ? "=" + t : t } } } }), this.toolbar.add_command({ name: "footnote", attrs_to_edit: ["content"], selector: 'span[data-type="footnote"]', selector_is_clickable: !0, if_content_is_empty_use: "content", add_to_small: function (t) { return $(t).html() }, populate_extra_attrs: function (t, e) { return t.content = $(e).html() } }), this.toolbar.add_command({
                name: "shortcuts", template_name: "See Shortcuts",
                just_run_this: function () { return $("#shortcuts-modal").modal("toggle") }
            })
        } return t
    }()
}.call(this),
function () {
     classes.HomeForgotView = Backbone.View.extend({ backboneClass: "HomeForgotView", initialize: function () { } })
}.call(this), 
function () {
    classes.HomeIndexView = Backbone.View.extend({
        backboneClass: "HomeIndexView", initialize: function () { return app.data.get("user") ? (this.add_project_list(), this.add_sort(), this.add_search()) : this.bind_form_events() }, bind_form_events: function () { return $("#invite-email").click(function () { return $(".extra-fields").slideDown() }), $("#invite-request-form").submit(function (t) { var e; return t.preventDefault(), e = {}, $("#invite-request-form input[name]").each(function () { var t; return t = $(this), e[t.attr("name")] = t.val() }), $("#invite-submit").val("Sending...").addClass("working"), $.ajax({ type: "POST", url: "/api/leads", data: e, success: function () { return $("#invite-request-form").remove(), $("#splash-invite").prepend(JST["templates/home/invite_received"]()) }, error: function () { return $("#splash-invite").prepend(JST["templates/home/invite_error"]()) }, dataType: "json" }) }) }, add_project_list: function () { return this.project_list = new classes.ProjectListView({ collection: new app.data.gitlab.Projects }), this.$("#project-list").append(this.project_list.render().el), this.project_list.fetch_projects({ success: function (t) { return function () { return t.add_filter() } }(this) }) }, add_sort: function () {
            return this.sort = new classes.SelectView({ collection: new Backbone.Collection([{ label: "Sort by Updated", key: "last_activity_at", order: "desc" }, { label: "Sort by Name", key: "name" }, { label: "Sort by Created", key: "created_at", order: "desc" }]), id: "projects-sort", className: "pull-left select-dropdown", label: "label" }),
                this.$("#projects-bar").append(this.sort.render().el), this.listenTo(this.sort, "change", this.sort_repos)
        }, sort_repos: function (t) { return this.project_list.sort_by(t.get("key"), t.get("order")) }, add_filter: function () {
            var t, e, n; return n = _.uniq(_.map(this.project_list.collection.models, function (t) { return t.get("owner").username })), null == this.filter_owner ? (this.filter_owner = new classes.SelectView({ values: _.union(["all"], n), className: "pull-left select-dropdown" }), this.listenTo(this.filter_owner, "change", function (t) { return "all" === t.get("label") ? this.project_list.unfilter() : this.project_list.filter_attr("owner", { username: t.get("label") }) }), $("#projects-bar").prepend(this.filter_owner.render().el)) : (t = this.filter_owner.collection.map(function (t) { return t.get("label") }),
                e = _.difference(n, t), _.each(e, function (t) { return function (e) { return t.filter_owner.collection.add(new Backbone.Model({ label: e })) } }(this)))
        }, add_search: function () { var t; return t = this, this.search = new classes.SearchView({ className: "pull-right" }), this.$("#projects-bar").append(this.search.render().el), this.listenTo(this.search, app.events.SEARCH_CHANGED, function (t) { return this.project_list.search("name", t) }), this.search.focus() }
    })
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ProjectListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.per_page = 100,
            n.prototype.className = "list list-gray list-large",
            n.prototype.messages = { empty: "<p>It looks like you don't have any projects yet. Start using atlas by creating one. </p> <p><a href='" + app.paths.new_project_path() + "' class='btn btn-medium btn-info'>New Project<a/></p>", none: "No projects match your criteria.", loading: "<i class='icon-refresh spin-me icn-round'></i> Loading projects..." },
            n.prototype.initialize = function () { if (!this.collection) throw new Error(classes.ProjectListView.ERROR_INIT_COLLECTION); return this.page = 1, this.listenTo(this.collection, "add", this.model_to_view), this.on(app.events.FILTER, this.on_filter) },
            n.prototype.model_to_view = function (t) { var e; return e = new classes.LinkListItemView({ model: t, template: JST["templates/home/project_list_item"] }), this.add(e) },
            n.prototype.fetch_projects = function (t) { return null == t && (t = { success: function () { return !0 }, error: function () { return !1 } }), this.show_message("loading"), this.collection.fetch({ remove: !1, data: { per_page: this.per_page, page: this.page }, success: function (e) { return function (n, i) { return i.length === e.per_page ? (e.page = e.page + 1, e.fetch_projects(t)) : e.collection.length > 0 ? e.sort_by("last_activity_at", "desc") : (e.show_message("empty"), $("#projects-bar").hide(), $("#project-list").addClass("down30")), t.success() } }(this), error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_REPOS), t.error() } }) },
            n.prototype.search = function (t, e) { var n, i, s; return s = this, 0 !== this.views.length ? (n = _.filter(this.views, function (t) { var n, i, r; return n = t.model.get("name"), null == s.filtered_attr || _.isEqual(t.model.get("owner"), s.filtered_attr) ? (i = t.model.get("owner").username, r = i !== app.data.get("user").nickname ? i : "", n && (n.toLowerCase().match(new RegExp(e.toLowerCase(), "g")) || r.toLowerCase().match(new RegExp(e.toLowerCase(), "g")))) : !1 }), _.each(n, function (t) { return t.$el.show() }), i = _.difference(this.views, n), _.each(i, function (t) { return t.$el.hide() }), this.trigger(app.events.FILTER, n)) : void 0 },
            n.prototype.filter_attr = function (t, e) { var n; if (0 !== this.views.length) return n = 0, this.filtered_attr = e, _.each(this.views, function (i) { return _.isEqual(i.model.get(t), e) ? i.$el.show() : (n += 1, i.$el.hide()) }), this.trigger(app.events.FILTER, n) },
            n.prototype.unfilter = function () { return this.filtered_attr = null, _.each(this.views, function (t) { return t.$el.show() }) },
            n.prototype.sort_by = function (t, e) { return 0 !== this.views.length ? (this.views = _.sortBy(this.views, function (e) { var n; return n = e.model.get(t), "name" === t && e.model.get("owner").username !== app.data.get("user").nickname && (n = e.model.get("path_with_namespace")), _.isString(n) && (n = n.toLowerCase()), n }), "desc" === e && this.views.reverse(), this.render(), this.trigger(app.events.SORT)) : void 0 },
            n.prototype.on_filter = function (t) { var e; return e = "object" == typeof t ? t.length : t, e ? this.hide_message("none") : this.show_message("none") }, n
    }(Backbone.View), classes.ProjectListView.ERROR_INIT_COLLECTION = "You need to initialize this view with a GitLab.Projects collection"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }, n = function (t, e) { return function () { return t.apply(e, arguments) } }; classes.ImportSelectProjectsView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "click .btn.org_name[class!=btn-disabled]": "get_org_repos" },
            n.prototype.initialize = function () { return this.token = app.data.get("import").token, this.$("#import").length && this.setElement("#import"), this.orgs = [], this.org_repos = {}, this.render(), this.user_repos = new classes.ImportAbleProjectsView({ el: this.$("#your_project_list"), url: app.data.get("github_url") + "/user/repos" }), this.get_orgs() },


            n.prototype.render = function () { return this.$el.html(JST["templates/import/index"]()) },
            n.prototype.get_orgs = function () { return $.ajax({ url: app.data.get("github_url") + "/user/orgs", data: { access_token: this.token }, success: function (t) { return function (e) { return t.orgs = new Backbone.Collection(e), e.length && t.$("#orgs").html(JST["templates/import/orgs"]({ orgs: e })), t.trigger("fetched:orgs") } }(this) }) },
            n.prototype.get_org_repos = function (t) { var e; return $(t.target).addClass("btn-disabled"), e = $(t.target).text(), this.org_repos[e] = new classes.ImportAbleProjectsView({ url: app.data.get("github_url") + ("/orgs/" + e + "/repos") }), this.$el.append($("<h2 id='header_" + e + "'>" + e + "</h2>")), window.location.hash = "#header_" + e, this.org_repos[e].$el.appendTo(this.$el) }, n
    }(Backbone.View), classes.ImportAbleProjectsView = function (t) {
        function i() { return this.view_selected = n(this.view_selected, this), i.__super__.constructor.apply(this, arguments) } return e(i, t), i.mixin([classes.MessageMixin, classes.CollectionMixin]),
            i.prototype.messages = { empty: "There are no projects to show", loading: "Loading projects..." },
            i.prototype.initialize = function () { return this.show_message("loading"), this.token = app.data.get("import").token, this.collection = new Backbone.Collection, this.token ? this.get_repos() : void (window.location = "/import") },
            i.prototype.get_repos = function (t) { return null == t && (t = 1), $.ajax({ url: this.options.url, data: { access_token: this.token, per_page: 100, page: t }, success: function (e) { return function (n) { var i; return i = new Backbone.Collection(n), 100 === n.length ? e.get_repos(t + 1) : e.trigger("fetched"), i.each(e.model_to_view, e), e.collection.add(i.toJSON()), e.render() } }(this) }) }, i.prototype.model_to_view = function (t) { var e; return e = new classes.ListItemView({ model: t, template: JST["templates/import/project"] }), this.listenTo(e, app.events.SELECT, this.view_selected), this.add(e) }, i.prototype.view_selected = function (t, e) {
            var n, i, s; return t.model.get("atlas_url") ? !0 : (t.model.set("atlas_url", "#loading"), e.preventDefault(), i = t.model.get("git_url").slice(6), t.model.set("label", "working"), t.render(), s = app.data.get("user").nickname, n = { username: app.data.gitlab.user.get("username"), name: t.model.get("name"), book_title: t.model.get("name"), copy: "https://" + this.token + ":x-oauth-basic@" + i, description: t.model.get("description") }, $.ajax({
                type: "POST", url: "/api/projects", data: n,
                success: function (e) { return $.doTimeout("import_repo_" + t.cid, 3e3, function () { return $.get(e.project_url, function (e) { var n; return "failed" === e.status ? (t.model.set("label", "error"), t.model.set("message", "Import failed. Either you already have a project in Atlas with that name, or the Github repo is empty."), t.render(), $.doTimeout("import_repo_" + t.cid)) : "completed" === e.status ? (n = t.model.get("name"), t.model.set("label", "success"), t.model.set("atlas_url", "/" + s + "/" + n), t.model.set("message", 'Successfully imported! Click to go to this project. <i class="glyphicons right_arrow"></i>'), t.render(), $.doTimeout("import_repo_" + t.cid)) : void 0 }), !0 }) }
            }))
        }, i
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ImportWordView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { return $("#import-details-form").submit(function (t) { var e; return t.preventDefault(), e = $("#file_url").val(), "" === e ? app.mailman.trigger(app.events.FLASH_ERROR, "Please upload a file before submitting the form") : ($("#submit-details").val("Sending..."), $.ajax({ type: "POST", url: "/api/imports/word", data: { project: $("#title").val(), description: $("#description").val(), file_url: e, instructions: $("#instructions").val() }, success: function () { return $("#import-details-form").remove(), $("#file-ok-box").text("Your files have been sent to conversion!") }, error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, "Something went wrong while trying to send the files to conversion") }, dataType: "json" })) }), $("#file-ok-box").hide(), $("#s3-uploader").S3Uploader({ allow_multiple_files: !1 }).bind("s3_upload_complete", function (t, e) { return $("#file_url").val(e.url), $("#file-box").hide(), $("#file-ok-box").show() }) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ProjectsActivityView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "ProjectsActivityView",
            n.prototype.events = { "click .load-more-activity": "fetch_more" },
            n.prototype.initialize = function () { return this.init_events_list(), this.init_builds_list(), this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), this.$("#breadcrumbs").html(this.breadcrumbs.render().el) },
            n.prototype.init_events_list = function () { return this.collection = new app.data.gitlab.Events([], { project: app.data.project, per_page: 40 }), this.list = new classes.ActivityListView({ collection: this.collection, el: "#project-activity" }), this.collection.fetch() },
            n.prototype.init_builds_list = function () { return this.build_list = new classes.BuildListView({ model: app.data.project, attributes: { "class": "build-list down10" } }), this.$("#project-activity-builds").append(this.build_list.render().el), this.$("#project-activity-builds").append("<a class='btn block align-center down10 align-right' href='" + app.paths.builds_path() + "'>All builds</a>"), this.build_list.collection.reset(app.data.get("builds")), this.build_list.poll() },
            n.prototype.fetch_more = function () { return this.page = this.page || 1, this.page = this.page + 1, this.collection.page = this.page, this.$(".load-more-activity").addClass("working").blur(), this.collection.fetch({ success: function (t) { return function (e) { return t.$(".load-more-activity").removeClass("working"), 0 === e.models.length ? t.$(".load-more-activity").remove() : void 0 } }(this) }) }, n
    }(Backbone.View), classes.ActivityListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.initialize = function () { if (!this.collection) throw new Error("HI"); return this.listenTo(this.collection, "add", function (t) { return function (e) { return t.model_to_view(e, !0) } }(this)) },
            n.prototype.ref_is_merge_branch = function (t) { return null == t.ref ? !1 : app.helpers.is_merge_branch(_.last(t.ref.split("/"))) },
            n.prototype.is_atlas_branch_creation = function (t) { var e, n; return null != t.get("data") ? (n = t.get("data"), e = n.ref.split("/")[2], "00000000" === n.before && app.helpers.is_atlas_branch(e)) : !1 },
            n.prototype.model_to_view = function (t, e) { var n, i, s; if (null == e && (e = !1), "MergeRequest" === t.get("target_type")); else if ((null != (i = t.get("data")) && null != (s = i.commits) ? s.length : void 0) > 0 && "Administrator" !== t.get("data").user_name); else { if (_.contains(["joined", "left"], t.get("action_name"))) return; if (!this.is_atlas_branch_creation(t)) return } return n = new classes.ActivityItemView({ model: t }), this.listenTo(n, app.events.SELECT, this.view_selected), this.add(n, !1), this.sort_by("created_at", "desc") }, n
    }(Backbone.View),
    classes.ActivityItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),

            n.prototype.className = "activity-list-item row-fluid",

            n.prototype.backboneClass = "BuildListItemView",

            n.prototype.events = { "click a": "clicked" },

            n.prototype.initialize = function () { var t, e; return this.template = JST["templates/projects/activity/branch_item"], "MergeRequest" === this.model.get("target_type") ? this.template = JST["templates/projects/activity/merge_request_item"] : (null != (t = this.model.get("data")) && null != (e = t.commits) ? e.length : void 0) > 0 ? this.template = JST["templates/projects/activity/commit_item"] : void 0 },

            n.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON({ name: this.model.get("name"), backboneClass: this.model.backboneClass, unopenable: this.model.get("unopenable") }))), this.delegateEvents(), this },

            n.prototype.clicked = function () { return !1 }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ProjectsCompareView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "ProjectsCompareView",
            n.prototype.events = { "click .load-more-activity": "fetch_more" },
            n.prototype.initialize = function () {
            return this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), this.$("#breadcrumbs").html(this.breadcrumbs.render().el), this.collection = new app.data.gitlab.Commits([], { project: app.data.project, ref_name: app.data.get("state").branch }), this.list = new classes.CompareListView({ collection: this.collection, el: "#project-compare" }), this.collection.fetch()
            },
            n.prototype.fetch_more = function () { return this.page = this.page || 1, this.page = this.page + 1, this.collection.page = this.page, this.$(".load-more-activity").addClass("working").blur(), this.collection.fetch({ success: function (t) { return function () { return t.$(".load-more-activity").removeClass("working") } }(this) }) }, n
    }(Backbone.View), classes.CompareListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.initialize = function () { if (!this.collection) throw new Error("HI"); return this.listenTo(this.collection, "add", function (t) { return function (e) { return t.model_to_view(e, !0) } }(this)) },
            n.prototype.model_to_view = function (t, e) { var n; return null == e && (e = !1), n = new classes.CompareItemView({ model: t }), this.listenTo(n, app.events.SELECT, this.view_selected), this.add(n, !1), this.sort_by("created_at", "desc") }, n
    }(Backbone.View), classes.CompareItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "list-item",
            n.prototype.backboneClass = "BuildListItemView",
            n.prototype.events = { "click a": "clicked" },
            n.prototype.initialize = function () { return this.template = JST["templates/projects/activity_item"], this.diff_template = JST["templates/projects/diff"] },
            n.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON({ name: this.model.get("name"), backboneClass: this.model.backboneClass, unopenable: this.model.get("unopenable") }))), this.delegateEvents(), this },
            n.prototype.clicked = function () { return null == this.model.diff && (this.model.diff = new app.data.gitlab.Diff({}, { project: this.model.project, commit: this.model }), this.model.diff.fetch({ success: function (t) { return function () { return _.each(t.model.diff.attributes, function (e) { return t.$el.find(".description").append(t.diff_template(e)) }) } }(this), error: function (t) { return function () { return t.trigger(app.mailman, app.events.FLASH_ERROR, "There was an error retrieving the requested diff.") } }(this) })), !1 }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.ProjectsConfigureView = function (e) {
        function i() { return this.update_ui = t(this.update_ui, this), i.__super__.constructor.apply(this, arguments) } return n(i, e),
            i.prototype.backboneClass = "ProjectsConfigureView",
            i.prototype.events = { "click .theme-selection-btn": "expand_theme_section", "input #custom-theme-field": "check_theme_option", input: "update_atlas_json_model", change: "update_atlas_json_model" },
            i.prototype.initialize = function () { return $(".build-settings").hide(), $("#breadcrumbs").after("<div class='loading-build-settings'>Loading...</div>"), this.attach_resizer(), this.add_path(), this.add_tree_list(), this.add_file_list(), this.add_atlas_json(), this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), this.save_button = new classes.ButtonView({ current_state: "disabled", default_state: "disabled", model: new Backbone.Model({ "class": "block align-center btn-medium action", href: "#", states: { disabled: "Save Settings", "default": "Save Settings", working: '<i class="working icon-refresh icn-info icn-round spin-me"></i> Saving Settings...', success: "Settings Saved!", error: "Error saving your settings." } }) }), this.listenTo(this.save_button, app.events.SELECT, this.save_settings), this.render(), this.atlas_json.fetch({ success: this.update_ui, error: function (t) { return function () { return app.helpers.branch_existence(app.data.gitlab, app.data.project, app.data.get("state").branch, t.update_ui, t.render_404) } }(this) }), $(window).on("beforeunload", function (t) { return function () { return "default" === t.save_button.current_state ? "You have unsaved changes to your configuation" : void 0 } }(this)) },
            i.prototype.add_atlas_json = function () { return this.atlas_json = new classes.AtlasJson({ branch: app.data.get("state").branch }) },
            i.prototype.render_404 = function () { return $("body").html(JST["templates/errors/404"]()) },
            i.prototype.update_ui = function () { return $(".build-settings").show(), $("div.loading-build-settings").remove(), this.atlas_json.has("parse-error") && app.mailman.trigger(app.events.FLASH_ERROR, "Your configuration could not be loaded due to an error with the atlas.json file. <a href='" + app.paths.editor_path("atlas.json") + "'>Click here</a> to open the atlas.json in the editor to fix the errors."), this.tree_list.fetch_tree("", app.data.get("state").branch), this.tree_list.filter(this.atlas_json.get("files"), !0), this.file_list.reset_files(this.atlas_json.get("files")), this.set_title(this.atlas_json.get("title") || app.data.project.get("path").replace(/[\-\_]/g, " ")), this.load_format_settings(), this.load_theme_settings() },
            i.prototype.load_format_settings = function () { var t; return this.$("#format-settings input").prop("checked", !1), t = this.atlas_json.get("formats"), _.each(t, function (t) { return function (e, n) { return _.each(e, function (e, i) { return i = t.$("#" + n + " [name=" + i + "]"), _.isBoolean(e) && e ? i.prop("checked", !0) : i.prop("checked", !1), _.isString(e) ? t.$("#" + n).find("[name=" + i.attr("name") + "][value=" + e + "]").prop("checked", !0) : void 0 }) } }(this)) },
            i.prototype.load_theme_settings = function () { return this.$("[name=theme]").prop("checked", !1), this.$("#theme-info").html(JST["templates/builds/theme_selection"](this.atlas_json.toJSON())), this.check_theme_boxes() },
            i.prototype.check_theme_boxes = function () { var t; return t = this.$('[value="' + this.atlas_json.get("theme") + '"]'), 0 === t.length && null != this.atlas_json.get("theme") ? (this.$("#custom-theme-radio").prop("checked", !0), this.$("#custom-theme-field").val(this.atlas_json.get("theme"))) : t.prop("checked", !0) },
            i.prototype.encode_theme_settings = function () { var t; return t = app.helpers.inputs_to_obj(this.$("[name=theme]")).theme, "custom-theme" === t ? this.$("#custom-theme-field").val() : t === !1 ? "" : t },
            i.prototype.encode_format_settings = function () { var t, e; return t = ["pdf", "epub", "mobi", "html"], e = {}, _.each(t, function () { return function (t) { var n; return n = $("#" + t + "-form input"), e[t] = app.helpers.inputs_to_obj(n) } }(this)), e },
            i.prototype.add_path = function () { return this.path = new classes.PathView({ path: app.data.get("state").path }), this.listenTo(this.path, app.events.SELECT, function (t, e) { return e.preventDefault(), this.tree_list.fetch_tree(t, app.data.get("state").branch) }) },
            i.prototype.add_tree_list = function () { return this.tree_list = new classes.SettingsTreeListView({ model: app.data.project }), this.listenTo(this.tree_list, app.events.SELECT, function (t, e) { return e.preventDefault(), t.model ? (this.file_list.add_file(t.model.get("file_path")), this.update_atlas_json_model()) : t.collection ? (this.path.updatePath(t.collection.path), this.tree_list.fetch_tree(t.collection.path, t.collection.branch)) : void 0 }) },
            i.prototype.add_file_list = function () { return this.file_list = new classes.SettingsFileListView, this.listenTo(this.file_list, app.events.SELECT, function (t) { return this.tree_list.unfilter(t), this.update_atlas_json_model() }), this.listenTo(this.file_list, "sortupdate", this.update_atlas_json_model) },
            i.prototype.attach_resizer = function () { return this.fit_file_browser(), $(window).resize(function (t) { return function () { return t.fit_file_browser() } }(this)) },
            i.prototype.fit_file_browser = function () { return this.$(".build-files .tree-list, .source-files .tree-list").css("max-height", $(window).height() - 200 + "px") },
            i.prototype.set_title = function (t) { return this.$("#project-title-input").val(t) },
            i.prototype.get_title = function () { return this.$("#project-title-input").val() },
            i.prototype.expand_theme_section = function () { return this.$("#theme-browser").show(), this.$("#theme-info").hide(), !1 },
            i.prototype.check_theme_option = function () { return this.$("#custom-theme-field").val().length > 0 ? this.$("#custom-theme-radio").prop("checked", !0) : void 0 },
            i.prototype.save_settings = function () { return this.update_atlas_json_model(), this.save_button.change_state("working"), this.atlas_json.save({ success: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_NOTICE, "Project configuration saved."), t.save_button.change_state("success") } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error updating your project configuation."), t.save_button.change_state("error") } }(this) }), !1 },
            i.prototype.update_atlas_json_model = function () { return this.atlas_json.set({ title: this.get_title(), files: this.file_list.get_files(), formats: $.extend(!0, this.atlas_json.get("formats"), this.encode_format_settings()), theme: this.encode_theme_settings() }), this.save_button.change_state(this.atlas_json.has_changed_since_save() ? "default" : "disabled") },
            i.prototype.render = function () { return this.$("#breadcrumbs").html(this.breadcrumbs.render().el), this.$("#file-browser .source-path").append(this.path.render().el), this.$(".source-files").append(this.tree_list.render().el), this.$(".build-files").append(this.file_list.render().el), this.$("#save-settings-button-wrap").append(this.save_button.render().el), this }, i
    }(Backbone.View)
}.call(this),
function () {
    var t, e = function (t, e) { return function () { return t.apply(e, arguments) } }, n = {}.hasOwnProperty, i = function (t, e) { function i() { this.constructor = t } for (var s in e) n.call(e, s) && (t[s] = e[s]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }; t = function (t) {
        function n() { return this.redirect_url = e(this.redirect_url, this), this.render = e(this.render, this), n.__super__.constructor.apply(this, arguments) } return i(n, t),

            n.prototype.events = { "keyup input.project-title": "projectTitleChanged", submit: "submit" },
            n.prototype.initialize = function () { return this.setElement($("#projects-new-form")), this.template = JST["templates/projects/new"], this.owner = app.data.gitlab.user, this.add_subviews(), this.get_groups(), this.fetch_user_settings(), this.render().el },
            n.prototype.add_subviews = function () { return this.namespace_select = new classes.SelectView({ collection: new Backbone.Collection([new Backbone.Model({ label: app.data.get("user").nickname, id: !1 })]), label: "label", id: "new-project-namespace", width: "100%" }), this.create_button = new classes.ButtonView({ tagName: "button", current_state: "disabled", model: new Backbone.Model({ "class": "btn-info btn-medium", type: "submit", states: { disabled: "Create Project", "default": "Create Project", working: "Creating Project...", success: "Created Project!", error: "Error creating project" } }) }) },
            n.prototype.change_state_for_project_limit = function () { return this.selected_namespace = this.namespace_select.get_model(), this.selected_namespace.get("label") === app.data.get("user").nickname ? this.check_project_limit() : this.create_button.change_state("default") },
            n.prototype.check_project_limit = function () { return this.gitlab_user = new app.data.gitlab.User({ id: app.data.get("user").gitlab_id }), this.gitlab_user.fetch({ success: function (t) { return function () { return t.gitlab_user.get("can_create_project") ? t.create_button.change_state("default") : (app.mailman.trigger(app.events.FLASH_ERROR, t.project_limit_message()), t.create_button.change_state("disabled")) } }(this), error: this.check_project_limit }) },
            n.prototype.fetch_user_settings = function () { return this.user_settings = new classes.UserSettings({}, { model: app.data.get("user") }), this.user_settings.fetch() },
            n.prototype.finish_setting_form = function () { return this.$("#namespace-picker").html(this.namespace_select.render().el), this.selected_namespace = this.namespace_select.get_model(), this.change_state_for_project_limit(), this.listenTo(this.namespace_select, "change", function (t) { return function () { return app.flash.empty(), t.change_state_for_project_limit() } }(this)) },
            n.prototype.get_groups = function () { var t; return t = !1, this.groups = new app.data.gitlab.Groups, this.groups.fetch({ data: { per_page: 100 }, error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error connecting to the server. Please refresh.") } }(this), success: function (t) { return function () { return 0 === t.groups.length && t.finish_setting_form(), t.groups.each(function (e, n) { return e.members.fetch({ data: { per_page: 100 }, error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error connecting to the server. Please refresh.") }, success: function () { var i; return i = e.members.find(function (t) { return t.get("username") === app.data.get("user").nickname }), null != i && i.get("access_level") >= 40 && (e.set("current_user_can_create_projects", !0), t.namespace_select.collection.add(new Backbone.Model({ label: e.get("name"), id: e.get("id") }))), n + 1 === t.groups.length ? t.finish_setting_form() : void 0 } }) }) } }(this) }) },
            n.prototype.project_limit_message = function () { return 1 === this.namespace_select.collection.length ? "You have reached the project limit. You may delete a project to create a new one." : "You have reached the project limit under your username. You may select a group to create a project." },
            n.prototype.projectTitleChanged = function (t) { return this.$("input.project-name").val(app.helpers.slugify(t.target.value)) },
            n.prototype.render = function () { return this.$el.html(this.template({ name: "My Super Awesome Project", description: "Brief description of said (super awesome) project.", customtemplate: "https://github.com/oreillymedia/atlas_basic_template.git" })), this.$("#create_button").html(this.create_button.render().el), this.$("#advanced").click(function (t) { return t.preventDefault(), $(this).nextAll(".hide").toggle() }), this.$(".custom-project-template").click(function (t) { return function () { return t.$(".custom-project-radio").prop("checked", !0) } }(this)), this },
            n.prototype.redirect_url = function (t) { var e, n; return n = this.selected_namespace.get("label"), e = "/" + n + "/" + t, this.user_settings.get("settings").show_new_project_info === !0 ? ("" + e + "?show_info=true").toLowerCase() : e.toLowerCase() },
            n.prototype.submit = function (t) { var e, n, i; return t.preventDefault(), n = this.$("input.project-name").val(), "" === n ? (app.mailman.trigger(app.events.FLASH_ERROR, "Please enter a name for your project!"), !1) : (this.create_button.change_state("working"), i = 0 === this.$("input.project-template:checked").length ? this.$("input.project-template:first-child").val() : this.$("input.project-template:checked").val(), "custom" === i && (i = this.$("input.custom-project-template").val()), e = { name: n, copy: i, description: this.$("textarea.project-description").val(), book_title: this.$("input.project-title").val() }, this.selected_namespace.get("id") && (e.namespace_id = this.selected_namespace.id), $.ajax({ type: "POST", url: "/api/projects", data: e, success: function (t) { return function (e) { return $.doTimeout("createrepo", 5e3, function () { return $.get(e.project_url, function (e) { return "failed" === e.status ? (t.create_button.change_state("error"), app.mailman.trigger(app.events.FLASH_ERROR, e.message), $.doTimeout("createrepo")) : "completed" === e.status ? (t.create_button.change_state("success"), app.mailman.trigger(app.events.FLASH_NOTICE, "Success! Created your project, taking you there now."), $.doTimeout("createrepo"), window.location.replace(t.redirect_url(n))) : void 0 }), !0 }) } }(this) })) }, n
    }(Backbone.View), classes.ProjectsNewView = t
}.call(this),
function () {
    classes.ProjectsSettingsView = Backbone.View.extend({
        backboneClass: "ProjectsSettingsView", events: { "click #git-url": "select_input", "keypress #add-collaborator-form": "enter_listen", "click #delete-project": "show_delete", "keypress #confirm-input": "ignore_return", "input #confirm-input": "validate_project_name", "change #confirm-input": "validate_project_name", "click #delete-button": "submit_delete" }, initialize: function () { return this.add_git_settings(), this.add_collaborators_list(), this.add_collaborators_form(), this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), app.data.get("permissions").admin || app.data.get("project").permissions.admin || this.$(".add-collaborator-box").remove(), this.$("#breadcrumbs").html(this.breadcrumbs.render().el) }, add_git_settings: function () { return this.git_template = JST["templates/projects/git_settings"], app.data.project.fetch({ success: function (t) { return function (e) { return t.$("#git_settings").append(t.git_template(e.toJSON())), null == app.data.project.get("namespace").owner_id ? t.$("#collaborators h2").after("<div id='group-notice' class='box'><div class='box-inner'>This project belongs to the " + app.data.project.get("namespace").name + " group. Manage group members from <a href='/settings/groups'>your user settings</a>. Users specifically added to this project are listed below.</div></div>") : void 0 } }(this) }) }, select_input: function (t) { return $(t.currentTarget).select() }, add_collaborators_list: function () {
            return this.collaborators_view = new classes.CollaboratorsListView({ project: app.data.project }), this.collaborators_view.collection.fetch({
                success: function (t) { return function () { return t.collaborators_view.hide_message("loading"), 0 === t.collaborators_view.collection.length ? t.collaborators_view.show_message("empty") : void 0 } }(this),
                error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error loading the collaborators") } }(this)
            }), this.$(".collaborators-list-container").html(this.collaborators_view.render().el), this.collaborators_view.show_message("loading")
        }, add_collaborators_form: function () { return this.add_collaborator_button = new classes.ButtonView({ current_state: "default", default_state: "default", model: new Backbone.Model({ "class": "block align-center btn action pull-right", href: "#", states: { disabled: "Invite", "default": "Invite", working: "Sending Invite...", success: "Invite Sent", error: "Error sending invite" } }) }), this.listenTo(this.add_collaborator_button, app.events.SELECT, function (t) { return function (e, n) { return n.preventDefault(), t.add_collaborator() } }(this)), $("#collaborator-role").chosen({ placeholder: "Role...", disable_search_threshold: 8 }), this.$("#add-collaborator-form .button-row").append(this.add_collaborator_button.render().el) }, enter_listen: function (t) { return 13 === t.keyCode ? this.add_collaborator() : void 0 }, add_collaborator: function ()
        { var t, e, n; return this.add_collaborator_button.change_state("working"), t = this.$("#collaborator-role").val(), e = this.$("input#collaborator-name").val(), this.$("input#collaborator-name").val("").blur(), n = { email: e, permission_level: parseInt(t) }, this.$("#collaborator-code").length > 0 && (n.code = this.$("#collaborator-code").val()), this.collaborators_view.collection.create(n, { wait: !0, success: function (t) { return function () { return t.add_collaborator_button.change_state("success"), t.collaborators_view.render().el } }(this), error: function (t) { return function (e, n) { var i; return i = n.responseJSON && n.responseJSON.message ? n.responseJSON.message : "There was an error submitting the invite", app.mailman.trigger(app.events.FLASH_ERROR, i), t.add_collaborator_button.change_state("error") } }(this) }) }, ignore_return: function (t) { return 13 === t.keyCode ? !1 : void 0 }, validate_project_name: function () { return this.$("#confirm-input").val() === app.data.project.get("path") ? this.$("#delete-button").removeClass("btn-disabled").addClass("btn-error") : this.$("#delete-button").addClass("btn-disabled").removeClass("btn-error") }, show_delete: function () { return this.$("#confirm-input").val(""), this.$("#delete-modal").modal(), !1 }, delete_project: function () {
            return function () {
                var t; return t = app.data.project.get("path_with_namespace"), app.data.project.destroy({
                    success: function () { return window.location = "/?flash=" + encodeURIComponent("Successfully deleted " + t + ".") },
                    error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error deleting this project"), $("#delete-modal").modal("hide") }
                }), !1
            }
        }(this), submit_delete: function (t) { return t.preventDefault(), this.$("#delete-form input").val() === app.data.project.get("path") && this.delete_project(), !1 }
    })
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsFileListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.tagName = "ul",
            n.prototype.className = "tree-list list",
            n.prototype.messages = { empty: "Please select files to build" },
            n.prototype.initialize = function () { return this.views = [], this.branch = app.data.get("state").branch, this.collection = new Backbone.Collection, this.listenTo(this.collection, "add", this.model_to_view), this.listenTo(this.collection, "destroy", function (t) { return this.destroy(t, !0), this.show_empty() }), this.listenTo(this.collection, "reset", function (t) { return this.views = [], this.$el.empty(), t.each(this.model_to_view, this), this.show_empty() }) },
            n.prototype.show_empty = function () { return 0 === this.views.length ? this.show_message("empty") : this.hide_message("empty") },
            n.prototype.model_to_view = function (t) { var e; return t.set("editor_link", app.paths.editor_path(t.get("file_path"), this.branch)), e = new classes.ListItemView({ className: "list-item file-list-item", model: t, template: JST["projects/selected_file_list_item"], tagName: "li" }), this.listenTo(e, app.events.SELECT, function (t, e) { return "editor-link" !== e.target.className ? (e.preventDefault(), t.model.destroy(), this.trigger(app.events.SELECT, t.model.get("file_path"), e)) : void 0 }), this.add(e), this.show_empty(), this.$el.sortable({ handle: ".handle" }).bind("sortupdate", function (t) { return function () { return t.trigger("sortupdate") } }(this)) },
            n.prototype.add_file = function (t) { return this.collection.add({ file_path: t }) },
            n.prototype.reset_files = function (t) { return this.collection.reset(_.map(t, function (t) { return { file_path: t } })) },
            n.prototype.get_files = function () { return _.chain(this.views).sortBy(function (t) { return $(t.el).index() }).map(function (t) { return t.model.get("file_path") }).value() }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsTreeListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.className = "tree-list list",
            n.prototype.messages = { empty: "There are no compatible files to show", loading: "<i class='icon-refresh spin-me icn-round'></i> Loading files..." },
            n.prototype.initialize = function () { if (!this.model) throw new Error(classes.SettingsTreeListView.ERROR_INIT_MODEL); return this.filter_memory = [], this.views = [], this.show_message("loading") },
            n.prototype.models_to_views = function (t) { return _.each(t.models, this.blob_to_view, this), _.each(t.trees, this.tree_to_view, this), this.sort(), this.show_empty(), _.isEmpty(this.filter_memory) ? void 0 : this.filter(this.filter_memory) },
            n.prototype.blob_to_view = function (t) { var e; return app.helpers.is_worker_compatible(t) ? (e = new classes.FileListItemView({ model: t, template: JST["projects/file_list_item"] }), this.listenTo(e, app.events.SELECT, function (t, e) { return "editor-link" !== e.target.className ? (this.filter(t.model.get("file_path")), this.trigger(app.events.SELECT, t, e)) : void 0 }), this.add(e)) : this.show_empty() },
            n.prototype.tree_to_view = function (t) { var e; return e = new classes.FolderListItemView({ collection: t }), this.listenTo(e, app.events.SELECT, function (t, e) { return this.trigger(app.events.SELECT, t, e) }), this.show_empty(), this.add(e) },
            n.prototype.show_empty = function () { return 0 === this.views.length ? this.show_message("empty") : this.hide_message("empty") },
            n.prototype.fetch_tree = function (t, e) { return this.views = [], this.$el.empty(), this.show_message("loading"), this.collection = this.model.tree(t, e), this.collection.fetch({ success: function (t) { return function (e) { return t.hide_message("loading"), t.models_to_views(e), t.show_empty(), t.trigger("fetched:tree") } }(this) }) },
            n.prototype.sort = function (t) { return this.views = _.sortBy(this.views, function (t) { var e; return e = t.collection ? t.collection.name : t.model.get("name"), e.toLowerCase() }), "desc" === t && this.views.reverse(), this.show_empty(), this.rendered ? this.render() : void 0 },
            n.prototype.filter = function (t, e) { var n, i; return this.filter_memory = e ? t : this.filter_memory.concat(t), n = _.filter(this.views, function (t) { return function (e) { return e.model && _.contains(t.filter_memory, e.model.get("file_path")) } }(this)), _.each(n, function (t) { return t.$el.hide() }), i = _.difference(this.views, n), this.show_empty(), _.each(i, function (t) { return t.$el.show() }) },
            n.prototype.unfilter = function (t) { return this.filter(_.without(this.filter_memory, t), !0) }, n
    }(Backbone.View), classes.SettingsTreeListView.ERROR_INIT_MODEL = "You need to initialize this view with a GitLab.Project model"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ProjectsShowRouter = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.routes = { ":user/:project(/)": "main", ":user/:project/branch/:branch_id": "branch", ":user/:project/branch/:branch_id/": "branch", ":user/:project/branch/:branch_id/*path_id": "path" },

            n.prototype.initialize = function () { return "undefined" != typeof branch_name && null !== branch_name && "master" === branch_name && "" === path_name ? this.router.navigate("" + user + "/" + project) : void 0 },
            n.prototype.main = function (t, e) { var n, i; return app.data.set({ state: { branch: "master", path: "", working_dir: "" } }), n = "" + t + "/" + e, i = new RegExp("" + n + "/?$", "gi"), window.location.pathname.match(i) ? void 0 : this.navigate("" + t + "/" + e, { trigger: !1 }) },
            n.prototype.branch = function (t, e, n) { return app.data.set({ state: { branch: n, path: "", working_dir: "" } }), this.navigate("" + t + "/" + e + "/branch/" + n, { trigger: !1 }) },
            n.prototype.path = function (t, e, n, i) { return null == i && (i = ""), app.data.set({ state: { branch: n, path: i, working_dir: i } }), this.navigate("" + t + "/" + e + "/branch/" + n + "/" + i, { trigger: !1 }) },
            n.prototype.change_route = function (t, e) { var n; return null == e && (e = ""), n = "" + app.data.get("project").path_with_namespace + "/branch/" + t, "" === e ? this.navigate(n, { trigger: !0 }) : this.navigate(n + "/" + e, { trigger: !0 }) }, n
    }(Backbone.Router), classes.ProjectsShowView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "ProjectsShowView",
            n.prototype.initialize = function () { return this.branch_locked = app.helpers.is_branch_locked(app.data.get("user").nickname, app.data.get("state").branch), this.init_new_info(), this.init_path(), this.init_search(), this.init_tree_list(), this.branch_locked || this.init_file_controls(), this.init_quick_build(), this.init_builds_list(), this.search.focus(), this.start_router(), this.breadcrumbs = new classes.BreadcrumbsView({ state: app.data.get("state"), project: app.data.project }), this.$("#breadcrumbs").html(this.breadcrumbs.render().el), this.render() },
            n.prototype.events = { "click .hide-info": "hide_new_project_info" },
            n.prototype.init_new_info = function () { return "true" === app.helpers.querystring(window.location.search).show_info ? this.$("#project-new-info").show() : void 0 },
            n.prototype.init_path = function () { return this.path = new classes.PathView({ path: app.data.get("state").path }), this.listenTo(this.path, app.events.SELECT, function (t, e) { return e.preventDefault(), this.router.change_route(app.data.get("state").branch, t) }), this.$("#project-path").html(this.path.render().el) },
            n.prototype.init_search = function () { return this.search = new classes.SearchView, this.listenTo(this.search, app.events.SEARCH_CHANGED, function (t) { return this.list.filter(t) }), this.$("#project-search").append(this.search.render().el) },
            n.prototype.init_quick_build = function () { return this.quick_build = new classes.QuickBuildView, this.listenTo(this.quick_build, app.events.SUBMIT, this.submit_quick_build), this.$("#project-builds").append(this.quick_build.render().el) },
            n.prototype.submit_quick_build = function (t) {
                return t.length ? (this.quick_build.setState("working"), this.build_list.collection.create({ formats: t.join(), branch: app.data.get("state").branch }, {
                    wait: !0, success: function (t) {
     return function () { return t.quick_build.setState("success"), t.build_list.poll() }
                    }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error sending your build!"), t.quick_build.setState("error") } }(this)
                })) : void app.mailman.trigger(app.events.FLASH_ERROR, "Please select at least one format to build")
            },
            n.prototype.init_builds_list = function () { return this.build_list = new classes.BuildListView({ model: app.data.project, attributes: { "class": "build-list down10" } }), this.$("#project-builds").append(this.build_list.render().el), this.$("#project-builds").append("<a class='btn block align-center down10 align-right' href='" + app.paths.builds_path() + "'>All builds</a>"), this.build_list.collection.reset(app.data.get("builds")), this.build_list.poll() },
            n.prototype.init_tree_list = function () { return this.list = new classes.TreeListView({ model: app.data.project, disable_links: app.constants.BLACKLIST_EXTS, files_changed: app.data.get("files_changed") }), this.listenTo(this.list, app.events.SELECT, function (t, e) { return e.preventDefault(), this.router.change_route(t.collection.branch, t.collection.path) }), this.branch_locked || this.listenTo(this.list, app.events.SHOW_ACTIONS, function (t, e) { return this.file_controls.show_actions(t, e) }), this.listenTo(this.list, app.events.NOT_A_DIRECTORY, function (t) { return function () { return t.router.change_route(app.data.get("state").branch, ""), app.mailman.trigger(app.events.FLASH_WARNING, app.constants.WARNING_NOT_A_DIRECTORY) } }(this)), this.branch_locked && this.$("#project-files").addClass("locked"), this.$("#project-files").append(this.list.render().el), this.list.show_message("loading") },
            n.prototype.init_file_controls = function () { return this.file_controls = new classes.FileControlView({ file_list: this.list }), this.$("#project-control-buttons").html(this.file_controls.render().el) },
            n.prototype.sort_files = function () { return this.list.sort_by("name", "asc") },
            n.prototype.start_router = function () { return this.router = new classes.ProjectsShowRouter, this.listenTo(this.router, "route", this.update_view), Backbone.history.start({ pushState: !0 }) },
            n.prototype.update_view = function () { var t, e, n; return t = app.data.get("state").branch, e = app.data.get("state").path, this.search.reset(), this.path.updatePath(e), null != (null != (n = this.list) ? n.collection : void 0) && this.list.collection.reset(), this.list.fetch_tree(e, t), this.list.show_message("loading") },
            n.prototype.hide_new_project_info = function () { return this.$("#project-new-info").hide(), this.user_settings = new classes.UserSettings({}, { model: app.data.get("user") }), this.user_settings.set("settings", { show_new_project_info: !1 }), this.user_settings.save(), !1 },
            n.prototype.api_contents_error = function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_CONTENTS) },
            n.prototype.api_branches_error = function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_CONTENTS) },
            n.prototype.api_collaborators_error = function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_CONTENTS) }, n
    }(Backbone.View)
}.call(this),
function () {
    classes.RegistrationsNewView = Backbone.View.extend({
        backboneClass: "RegistrationsNewView", initialize: function () {
            return jQuery.validator.addMethod("username", function (t, e) { return this.optional(e) || /^[a-z0-9_]+$/g.test(t) }, "Username must use only lowercase letters, numbers and underscore"), app.data.get("form_params") && _.each(app.data.get("form_params"), function (t, e) { return $("#new_user #" + e).val(t) }), app.data.get("lock_fields") && this.$("#user_email").prop("readonly", !0), $("#new_user").validate({ rules: { "user[nickname]": { required: !0, username: !0 }, "user[email]": { required: !0, email: !0 }, "user[password]": { required: !0, minlength: 8 }, "user[password_confirmation]": { required: !0, equalTo: "#user_password" }, "user[registration_code]": { required: !0 }, first_name: { required: !0 }, last_name: { required: !0 }, "user[organization]": { required: !0 }, "user[title]": { required: !0 }, "user[sign_up_message]": { required: !0 }, tos: { required: !0 } }, messages: { "user[nickname]": { required: "Please enter a valid username", username: "Usernames must be lowercase letters, numbers and underscores only" }, "user[email]": { required: "Please enter a valid email address", email: "The email address is not valid" }, "user[password]": { required: "Please enter a password", minlength: "The password needs to be minimum 8 characters" }, "user[password_confirmation]": { required: "Please enter a password confirmation", equalTo: "Please enter the same password twice" }, "user[registration_code]": { required: "Please enter a registration code" }, first_name: { required: "Please enter your first name" }, last_name: { required: "Please enter your last name" }, "user[organization]": { required: "Please enter your organization" }, "user[title]": { required: "Please enter your title" }, "user[sign_up_message]": { required: "Please provide a bit of info to why you're interested in Atlas" }, tos: { required: "You must accept the Terms of Service to sign up" } } })
        }
    })
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.DiffEditorControlsView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "diff-editor-controls box",
            n.prototype.events = { "click .btn, a": "button_clicked", "click .btn.next_file": "next_file" },
            n.prototype.initialize = function () { return this.template = JST["templates/reviews/diff_editor_controls"], this.setup_key_shortcuts() },
            n.prototype.setup_key_shortcuts = function () { return this.key_listener = new window.keypress.Listener, this.key_listener.simple_combo("meta backspace", function (t) { return function (e) { return e.preventDefault(), t.ed.has_active_selection() ? t.ed.reject_current_mark() : void 0 } }(this)), this.key_listener.simple_combo("meta enter", function (t) { return function (e) { return e.preventDefault(), t.ed.has_active_selection() ? t.ed.accept_current_mark() : t.ed.get_state() ? t.ed.select_next() : t.next_file() } }(this)) },
            n.prototype.set_editor = function (t) { this.ed = t },
            n.prototype.set_file = function (t) { return this.file_action_model = t, 0 === this.ed.get_state() ? (this.file_action_model.set("done", !0), this.trigger("check_if_all_done"), this.render()) : this.file_action_model.set("done", !1) },
            n.prototype.setup_events = function (t) { return this.stopListening(this.ed), this.ed = t, this.listenTo(this.ed, "all", function (t) { return function (e, n) { return "select-via-controls" === e && t.scroll_to(n), "select" === e || "select-via-controls" === e ? t.render(n) : t.render(), "done" === e ? (t.file_action_model.set("done", !0), t.render()) : void 0 } }(this)) },
            n.prototype.render = function (t) { return null == t && (t = !1), this.$el.html(this.disabled ? "These changes have been reviewed by another user and can no longer be accepted or rejected here." : this.template({ remaining: this.ed.get_state(), edit: t, all_done: this.is_all_done() })), this },
            n.prototype.button_clicked = function (t) { var e; return e = $(t.currentTarget).data("action"), e ? (this.ed[e](), t.preventDefault()) : void 0 },
            n.prototype.next_file = function () { return this.trigger("next_file") },
            n.prototype.is_all_done = function () { return 0 === this.ed.get_state() && this.merge_menu.check_if_all_done() },
            n.prototype.scroll_to = function (t) { var e; return e = this.ed.get_mark_el(t.index), $("html,body").animate({ scrollTop: e.offset().top }, 500) },
            n.prototype.disable = function () { return this.stopListening(this.ed), this.disabled = !0, this.key_listener.stop_listening(), this.render().el }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.ReviewsFileListView = function (e) {
        function i() { return this.check_if_all_done = t(this.check_if_all_done, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.ERROR_INIT_FILE_ACTION = "You need to initialize this view with a options.file_actions array", i.prototype.tagName = "ul", i.prototype.className = "list list-gray file-list", i.mixin([classes.MessageMixin, classes.CollectionMixin]), i.prototype.messages = { empty: "There are no files to review" }, i.prototype.initialize = function () { if (!this.options.file_actions) throw new Error(this.ERROR_INIT_FILE_ACTION); return this.collection = new Backbone.Collection([], { model: Backbone.Model.extend({ defaults: { active: !1, done: !1 } }) }), this.listenTo(this.collection, "add", this.model_to_view), this.collection.add(this.options.file_actions), this.listenTo(this.collection, "change", function (t) { return function () { return t.render() } }(this)) }, i.prototype.model_to_view = function (t) { var e; return e = new classes.LinkListItemView({ model: t, template: JST["templates/reviews/file_list_item"] }), this.listenTo(e, app.events.SELECT, this.select), t.view = e, this.add(e) }, i.prototype.select = function (t, e) {
            var n; return null == e && (e = !1), e && e.preventDefault(), t.model.cid !== (null != (n = this.active_model) ? n.cid : void 0) ? (this.trigger(app.events.SELECT, t.model, e),
                this.active_model && this.active_model.set("active", !1), t.model.set("active", !0), this.active_model = t.model, this.render()) : void 0
        }, i.prototype.select_next_file = function () { var t, e; return t = this.collection.indexOf(this.active_model), e = this.collection.at(t + 1), 0 === this.collection.length && this.trigger("no_files"), e ? this.select(e.view) : (e = this.collection.findWhere({ done: !1 }), e ? this.select(e.view) : this.trigger("all_files_done")) }, i.prototype.check_if_all_done = function () { return void 0 === this.collection.findWhere({ done: !1 }) ? (this.trigger("all_files_done"), !0) : !1 }, i
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ReviewsIndexView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "ReviewsIndexView",
            n.prototype.initialize = function () { return this.state = app.helpers.querystring().state || "opened", this.per_page_count = 100, this.collection = new app.data.gitlab.MergeRequests([], { project: app.data.project, state: this.state, per_page: this.per_page_count }), this.listenTo(this.collection, "reset", this.render), this.listenTo(this.collection, "add", this.renderMergeRequest), this.collection.fetch({ reset: !0 }), this.loading_box = new classes.BoxView({ templates: { loading: JST["templates/reviews/loading"] }, attributes: { "class": "loading" } }), this.$el.find(".reviews-list").html(this.loading_box.render("loading", "Loading...").el), this.$el.find(".state-buttons ." + this.state).addClass("btn-info").siblings().removeClass("btn-info") },
            n.prototype.match_state = function (t) { return "opened" === this.state && "opened" === t ? !0 : _.contains(["closed", "merged"], t) && "closed" === this.state ? !0 : !1 },
            n.prototype.render = function () { var t; return this.$(".reviews-list").empty(), 0 === this.collection.length && 0 === this.$(".merge-request-list-item").length ? this.$el.find(".reviews-list").html(this.loading_box.render("loading", "There are currently no " + this.state + " edit submissions.").el) : this.collection.length % this.per_page_count === 0 && (this.load_more_btn = new classes.ButtonView({ model: new Backbone.Model({ label: "Load More" }), className: "load-more-reviews btn btn-medium" }), this.listenTo(this.load_more_btn, app.events.SELECT, this.fetch_more), this.$el.find(".load-more-container").html(this.load_more_btn.render().el)), t = this.collection.sortBy(function (t) { return t.get("created_at") }), _.each(t, this.renderMergeRequest, this), this },
            n.prototype.renderMergeRequest = function (t) { return this.match_state(t.get("state")) ? this.$(".reviews-list").prepend(new classes.MergeRequestListItemView({ model: t }).el) : void 0 },
            n.prototype.fetch_more = function () { return this.page = this.page || 1, this.page = this.page + 1, this.collection.page = this.page, this.$(".load-more-reviews").addClass("working").blur(), this.collection.fetch({ success: function (t) { return function (e) { return t.$(".load-more-reviews").removeClass("working"), 0 === e.models.length ? t.$(".load-more-reviews").remove() : void 0 } }(this) }) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.MergeRequestListItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "box merge-request-list-item",
            n.prototype.tagName = "div",
            n.prototype.initialize = function () { return this.template = JST["templates/reviews/list_item"], this.render() },
            n.prototype.render = function () { return this.$el.html(this.template(this.model.attributes)), this }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.MergeToolView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.LEFT_SELECTOR = "#left-toolset .fix-to-top",
            n.prototype.events = { "click #diff_editor_switcher button": "switch" },
            n.prototype.initialize = function () { var t; return this.template = JST["templates/reviews/merge_tool"], this.fails_template = JST["templates/reviews/fails"], this.diff = this.options.file_action.snoobly.diff, this.controls = this.options.controls, "html" === (t = app.helpers.get_extension(this.options.file_action.path)) || "htm" === t ? (this.allow_visual = !0, this.editor_key = app.constants.VISUAL_EDITOR) : (this.allow_visual = !1, this.editor_key = app.constants.CODE_EDITOR), this.options.file_action.snoobly.fails.length ? this.fails = this.options.file_action.snoobly.fails : void 0 },
            n.prototype.render = function () { return this.delegateEvents(), this.add_editor(), $("#diff_editor_switcher").unbind(), $("#diff_editor_switcher").click(function (t) { return function () { return t["switch"]() } }(this)), this },
            n.prototype.add_editor = function () { return this.$el.empty().html(this.template()), this.add_fails(), this.allow_visual ? $("#diff_editor_switcher").show() : $("#diff_editor_switcher").hide(), this.ed && this.ed.key === this.editor_key ? this.options.read_only || this.ed.setup_editor_events() : this.editor_key === app.constants.VISUAL_EDITOR ? (this.ed = new VisualDiffEditor(this.diff, { markup_class: "glyphicons asterisk", readOnly: this.options.read_only }), this.ed.$el.addClass("style-like-wysiwyg")) : this.ed = new CodeDiffEditor(this.diff, { readOnly: this.options.read_only }), this.$el.append(this.ed.el), this.controls && (this.controls.setup_events(this.ed), this.controls.render()), this.ed.refresh(), this.options.read_only || this.ed.select_first(), this.options.file_action.clean || this.$("#diff_editor_switcher button").prop("disabled", !0).addClass("btn-disabled"), this.listenTo(this.ed, "input", function (t) { return function () { return t.ed.is_diff_clean() ? t.$("#diff_editor_switcher button").prop("disabled", !1).removeClass("btn-disabled") : (t.options.file_action.clean = !1, t.$("#diff_editor_switcher button").prop("disabled", !0).addClass("btn-disabled")) } }(this)) },
            n.prototype.add_fails = function () { return this.fails ? this.$el.prepend(this.fails_template(this.fails)) : void 0 }, n.prototype["switch"] = function () { return this.controls && this.controls.render(), this.editor_key = this.editor_key === app.constants.VISUAL_EDITOR ? app.constants.CODE_EDITOR : app.constants.VISUAL_EDITOR, this.diff = this.ed.get_diff(), this.stopListening(this.ed), this.ed.destroy(), this.add_editor(), this.trigger("editor:switch") },
            n.prototype.deactivate = function () { return this.undelegateEvents(), this.options.file_action.snoobly.diff = this.diff = this.ed.get_diff() }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.OtherView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "other-view",
            n.prototype.ERROR_INIT_FILE_ACTION = "You have to initialize this view with a option.file_actions array",
            n.prototype.initialize = function () { if (!this.options.file_actions) throw new Error(this.ERROR_INIT_FILE_ACTION); return this.file_actions = this.options.file_actions, this.template = JST["templates/reviews/other"] },
            n.prototype.render = function () { return this.$el.html(this.template()), _.each(this.file_actions, function (t) { return function (e) { return t.$(".list").append(e.view.render().el) } }(this)), this }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.ReviewsShowView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.backboneClass = "ReviewsShowView", 0
        n.prototype.ERROR_NO_CHANGES = "There are no changes in this branch.",
            n.prototype.ERROR_FETCH_MERGE = "Could not load review data. Try to refresh the page.",
            n.prototype.ERROR_FETCH_DIFF = "Could not load diff data. Try to refresh the page.",
        n.prototype.ERROR_FETCH_FILE = "Could not load file data. Try to refresh the page.",
        n.prototype.ERROR_UNEXPECTED = "An unexpected error happened. Please contact support.",
        n.prototype.ERROR_SAVE_FILE = "Could not save file. Please try again.",
        n.prototype.ERROR_UNSUPPORTED = "This branch hold an unsupported change. Please contact support.",
        n.prototype.ERROR_TIMEOUT_DIFF = "Loading of diff data timed out. The diff might be too large.",
        n.prototype.ERROR_MERGE_SAVE = "Could not finish merge. Try to refresh the page.",
        n.prototype.COMMIT_MESSAGE = "Via Atlas track changes",
        n.prototype.LEFT_SELECTOR = "#left-toolset .fix-to-top",
        n.prototype.RIGHT_SELECTOR = "#right-toolset .fix-to-top",
        n.prototype.initialize = function () { return this.failedSaves = 0, this.loading_box = new classes.BoxView({ templates: { loading: JST["templates/reviews/loading"], closed: JST["templates/reviews/closed"] }, attributes: { "class": "loading" } }), this.$el.append(this.loading_box.render("loading", "Loading data").el), this.flash_view = new classes.FlashView, this.$el.prepend(this.flash_view.render().el), this.model = new app.data.gitlab.MergeRequest({ id: app.data.get("merge_request_id") }, { project: app.data.project }), this.model.fetch({ success: function (t) { return function () { return _.contains(["merged", "closed"], t.model.get("state")) ? (t.loading_box.$el.removeClass("loading").addClass("closed"), t.$el.html(t.loading_box.render("closed", t.model.toJSON()).el)) : t.load_diffs() } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_FETCH_MERGE) } }(this) }), this.poll_merge_request(), $(window).on("beforeunload", function () { return function () { return "Your aren't done reviewing these changes. You need to finish before your work will be saved." } }(this)) },
        n.prototype.load_diffs = function () { return this.loading_box.render("loading", "Loading diffs"), this.feature_diff = app.data.project.compare(this.model.get("target_branch"), this.model.get("source_branch")), this.base_diff = app.data.project.compare(this.model.get("source_branch"), this.model.get("target_branch")), this.feature_diff.fetch({ success: function (t) { return function () { return t.feature_diff.get("compare_same_ref") && app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_NO_CHANGES), _.isEmpty(t.feature_diff.get("diffs")) && app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_NO_CHANGES), t.feature_diff.get("compare_timeout") && app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_TIMEOUT_DIFF), t.base_diff.fetch({ success: function () { return t.base_diff.get("compare_same_ref") && app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_NO_CHANGES), t.base_diff.get("compare_timeout") && app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_TIMEOUT_DIFF), t.snoobly = new Snoobly(t.feature_diff.toJSON(), t.base_diff.toJSON()), t.calculate_file_actions(), t.load_file_contents(), t.load_feedback_view() }, error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_FETCH_DIFF) } }) } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_FETCH_DIFF) } }(this) }) },
        n.prototype.load_feedback_view = function ()
        { return this.modal_view = new classes.FeedbackModalView({ data: { base_diff: this.base_diff.attributes, feature_diff: this.feature_diff.attributes, review_model: this.model.attributes } }), this.$el.find(".feedback-container").html(this.modal_view.render().el) },
        n.prototype.show_merge_tool = function (t) { var e, n, i; return null != (i = this.active_file_action) && i.view.deactivate(), n = t.get("path"), e = this.get_file_action(n), e.view.setElement(this.$("#file-action-view")).render(), this.active_file_action = e, this.controls.set_file(t), this.listenTo(this.active_file_action.view, "editor:switch", this.add_popover_info), this.add_popover_info() },
        n.prototype.add_popover_info = function () { var t, e; return t = $(".atlas-markup"), $(t).each(function (t, e) { var n; return n = $(e).data()["markup-text"] === !0 ? "<p>Markup change that may include text.</p>" : "<p>Markup/formatting change.</p>", new Drop({ classes: "drop-theme-arrows-bounce", content: "" + n + "<pre>" + $(e).attr("title") + "</pre><p>Switch to Code Editor to view details.</p>", openOn: "hover", position: "bottom center", target: e, tetherOptions: { constraints: [{ to: "scrollParent", pin: !0 }] } }) }), e = $("#diff_editor ins[contenteditable=false],#diff_editor del[contenteditable=false]"), $(e).each(function (t, e) { return new Drop({ classes: "drop-theme-arrows-bounce", content: "To edit this, you must first accept or reject the changes", openOn: "click", position: "bottom center", target: e, tetherOptions: { constraints: [{ to: "scrollParent", pin: !0 }] } }) }) },
        n.prototype.show_other = function () { return null != this.merge_menu.active_model && (this.merge_menu.active_model.set("active", !1), delete this.merge_menu.active_model), this.merge_menu.render(), null != this.other_btn && null != this.other_view ? (this.other_btn.$el.addClass("active"), this.$("#file-action-view").html(this.other_view.render().el)) : void 0 },
        n.prototype.load_file_contents = function () { var t; return t = _.find(this.file_actions, function (t) { return function (e) { return e.action === t.MERGE_TOOL && !e.binary && !e.model } }(this)), t ? (this.loading_box.render("loading", "Loading " + t.path), this.load_blob(t.path, this.model.get("target_branch"), function (e) { return function (n) { return e.load_blob(t.path, e.model.get("source_branch"), function (i) { return t.model = n, t.source_model = i, t.snoobly = e.snoobly.diff(t.path, n.get("content")), e.load_file_contents() }) } }(this))) : (this.loading_box.$el.remove(), this.add_views()) },
        n.prototype.load_blob = function (t, e, n) { var i; return i = app.data.project.blob(t, e), i.fetch({ success: n, error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_FETCH_FILE) } }(this) }) },
        n.prototype.add_views = function () {
            var t, e, n; return this.controls = new classes.DiffEditorControlsView, this.$(this.RIGHT_SELECTOR).append(this.controls.el), t = _.filter(this.file_actions, function (t) { return function (e) { return t.is_menu_ready(e) } }(this)), _.each(t, function (t) { return function (e) { return e.view = new classes.MergeToolView({ file_action: e, controls: t.controls, read_only: !1 }) } }(this)), this.save_btn = new classes.ButtonView({ model: new Backbone.Model({ href: "#", label: "Save &amp; Finish", id: "save-button", "class": "btn-medium btn-success block align-center" }) }), this.listenTo(this.save_btn, app.events.SELECT, this.save_pressed), this.merge_menu = new classes.ReviewsFileListView({ file_actions: t }), this.controls.merge_menu = this.merge_menu, this.listenTo(this.merge_menu, app.events.SELECT, function (t) { var e; return this.show_merge_tool(t), null != (e = this.other_btn) ? e.$el.removeClass("active") : void 0 }), this.listenTo(this.merge_menu, "all_files_done", function (t) { return function () { return t.$(t.RIGHT_SELECTOR).append(t.save_btn.render().el) } }(this)), this.$(this.LEFT_SELECTOR).append("<a class='btn back' href='../'><i class='glyphicons left_arrow'></i> Cancel &amp; Go Back</a>"), this.$(this.LEFT_SELECTOR).append("<a class='btn' id='diff_editor_switcher'>Switch Editors</a>"), this.$(this.LEFT_SELECTOR).append(this.merge_menu.render().el), this.listenTo(this.controls, "next_file", function (t) { return function () { return t.merge_menu.select_next_file() } }(this)), this.listenTo(this.controls, "check_if_all_done",
                function (t) { return function () { return t.merge_menu.check_if_all_done() } }(this)), n = {}, n[this.MERGE_TOOL] = "templates/reviews/static_binary", n[this.CONFLICT_EDITED_DELETED] = "templates/reviews/static_edt_del", n[this.CONFLICT_ADDED_ADDED] = "templates/reviews/static_add_add", n[this.CONFLICT_DELETED_EDITED] = "templates/reviews/static_del_edt", n[this.DELETED] = "templates/reviews/static_del", n[this.ADDED] = "templates/reviews/static_add", e = _.filter(this.file_actions, function (t) { return function (e) { return !t.is_menu_ready(e) } }(this)), _.isEmpty(e) || (_.each(e, function (t) { return function (e) { var i; return i = new Backbone.Model(e), i.set("merge_request", t.model.toJSON()), e.view = new classes.ListItemView({ model: i, template: JST[n[e.action]] }) } }(this)), this.other_view = new classes.OtherView({ model: this.model, file_actions: e }),
                this.other_btn = new classes.ButtonView({ model: new Backbone.Model({ label: "Other Changes <i class='other_count'>" + e.length + "</i>" }) }), this.listenTo(this.other_btn, app.events.SELECT, this.show_other), this.listenTo(this.merge_menu, "no_files", this.show_other), this.$(this.LEFT_SELECTOR).append(this.other_btn.render().el)), this.merge_menu.select_next_file()
        },
        n.prototype.MERGE_TOOL = "MERGE_TOOL",
        n.prototype.CONFLICT_EDITED_DELETED = "CONFLICT_EDITED_DELETED",
        n.prototype.CONFLICT_ADDED_ADDED = "CONFLICT_ADDED_ADDED",
        n.prototype.CONFLICT_DELETED_EDITED = "CONFLICT_DELETED_EDITED",
        n.prototype.ADDED = "ADDED",
        n.prototype.DELETED = "DELETED",
        n.prototype.calculate_file_actions = function () { return this.file_actions = _.map(this.feature_diff.get("diffs"), function (t) { return function (e) { return t.create_file_action(e) } }(this)) },
        n.prototype.create_file_action = function (t) { var e, n; return n = { file_diff: t, clean: !0 }, e = _.find(this.base_diff.get("diffs"), function (e) { return e.new_path === t.new_path }), n.path = t.new_path, e && e.renamed_file && app.mailman.trigger(app.events.FLASH_ERROR, this.ERROR_UNSUPPORTED), t.renamed_file && app.mailman.trigger(app.events.FLASH_ERROR, this.ERROR_UNSUPPORTED), t.new_file ? e ? e.new_file ? n.action = this.CONFLICT_ADDED_ADDED : app.mailman.trigger(app.events.FLASH_ERROR, this.ERROR_UNEXPECTED) : n.action = this.ADDED : t.deleted_file ? e ? e.deleted_file ? n.action = this.DELETED : e.new_file ? app.mailman.trigger(app.events.FLASH_ERROR, this.ERROR_UNEXPECTED) : n.action = this.CONFLICT_DELETED_EDITED : n.action = this.DELETED : e ? e.deleted_file ? n.action = this.CONFLICT_EDITED_DELETED : e.new_file ? app.mailman.trigger(app.events.FLASH_ERROR, this.ERROR_UNEXPECTED) : n.action = this.MERGE_TOOL : n.action = this.MERGE_TOOL, _.str.startsWith(t.diff, "Binary files") && (n.binary = !0), n },
        n.prototype.get_file_action = function (t) { return _.find(this.file_actions, function (e) { return e.path === t }) },
        n.prototype.are_all_files_valid = function () { var t, e, n, i, s, r, a; for (i = "", a = this.file_actions, s = 0, r = a.length; r > s; s++) n = a[s], "MERGE_TOOL" !== n.action || n.binary || "html" !== n.model.get("file_name").split(".").slice(-1)[0] || (t = n.view.ed.get_value(), app.helpers.is_valid_xml(t) || (e = app.helpers.get_xml_error(t), i += n.model.get("file_path") + "\n" + e + "\n\n")); return "" === i ? !0 : i },
        n.prototype.save_pressed = function () { var t; return t = this.are_all_files_valid(), t === !0 || window.confirm("WARNING, it appears that your markup is broken. Saving/merging may result in lost content. \n\nPress CANCEL and manually fix the document (suggested) or press OK and proceed at your own risk. \n\n\nHere's an error message to help you debug:\n" + t) ? ($.doTimeout("merge_check"), $(window).off("beforeunload"), this.saving_box = new classes.BoxView({ templates: { saving: JST["templates/reviews/saving"] }, attributes: { "class": "loading" } }), this.$el.html(this.saving_box.render("saving", "Saving files to feature branch").el), this.$el.prepend(this.flash_view.render().el), this.save_file_actions()) : void 0 },
        n.prototype.save_file_actions = function () {
            var t, e, n, i; return t = _.first(this.file_actions), t ? (e = {
                success: function (t) { return function () { return t.file_actions.shift(), t.save_file_actions() } }(this), error: function (t) {
                    return function ()
                    { return t.failedSaves++, t.failedSaves > 3 ? app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_SAVE_FILE) : t.save_file_actions() }
                }(this)
            }, t.action === this.MERGE_TOOL ? (this.saving_box.render("saving", "Saving " + t.path), t.binary ? (this.file_actions.shift(), this.save_file_actions()) : (t.clean ? (n = new HeadlessDiffEditor(t.view.ed.get_diff()), n.accept_all(), t.model.set("content", n.get_value())) : t.model.set("content", t.view.ed.get_value()), t.model.get("content") !== t.source_model.get("content") && app.helpers.git_sha1(t.model.get("content")) !== t.source_model.get("blob_id") ? (t.model.branch = this.model.get("source_branch"), t.model.set("commit_message", this.COMMIT_MESSAGE), t.model.save([], e)) : (console.log("All changes were accepted and file in feature is the same. Skipping save."), this.file_actions.shift(), this.save_file_actions()))) : t.action === this.CONFLICT_EDITED_DELETED || t.action === this.CONFLICT_ADDED_ADDED ? (this.saving_box.render("saving", "Deleting " + t.path), i = app.data.project.blob(t.path, this.model.get("source_branch")), i.set("commit_message", this.COMMIT_MESSAGE), i.destroy(e)) : t.action === this.CONFLICT_DELETED_EDITED ? (this.saving_box.render("saving", "Bringing back " + t.path), i = app.data.project.blob(t.path, this.model.get("target_branch")), i.fetch({ success: function (t) { return function () { return i.branch = t.model.get("source_branch"), i.unset("id"), i.set("commit_message", t.COMMIT_MESSAGE), i.save([], e) } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_SAVE_FILE) } }(this) })) : t.action === this.DELETED || t.action === this.ADDED ? (this.file_actions.shift(), this.save_file_actions()) : app.mailman.trigger(app.events.FLASH_ERROR, "WRONG ACTION TYPE")) : this.run_merge_worker()
        },
        n.prototype.run_merge_worker = function () { return this.saving_box.render("saving", "Sending request to merge"), this.merge_model = new classes.Merge([], { project: app.data.project.get("path_with_namespace"), merge_request_id: this.model.id }), this.merge_model.save([], { success: function (t) { return function () { return t.saving_box.render("saving", "Waiting for merge"), t.check_merge_worker() } }(this), error: function (t) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, t.ERROR_MERGE_SAVE) } }(this) }) },
        n.prototype.check_merge_worker = function () { return $.doTimeout(3e3, function (t) { return function () { return t.merge_model.fetch({ success: function (e) { return e.get("status") === app.constants.COMPLETED ? (t.saving_box.render("saving", "Done!"), $.doTimeout(500, function () { return window.location = app.paths.project_path() })) : e.get("status") === app.constants.FAILED ? t.saving_box.render("saving", "Something went wrong.") : e.get("status") === app.constants.QUEUED || e.get("status") === app.constants.WORKING ? t.check_merge_worker() : t.saving_box.render("saving", "Something went wrong.") } }) } }(this)) },
        n.prototype.is_menu_ready = function (t) { return t.action === this.MERGE_TOOL && !t.binary },
        n.prototype.poll_merge_request = function () { return $.doTimeout("merge_check", 2e3, function (t) { return function () { return t.model.fetch({ success: function () { return "opened" !== t.model.get("state") ? ($.doTimeout("merge_check"), app.mailman.trigger(app.events.FLASH_WARNING, "Another user has reviewed these changes."), t.controls.disable()) : void 0 } }), !0 } }(this)) },
        n.prototype.render = function () { return this.$(".change-detail").html(this.template(this.model.attributes)), this }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.AdminProjectListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.className = "list list-large",
            n.prototype.tagName = "ul",
            n.prototype.messages = { empty: "You do not belong to any groups", loading: "Loading groups..." },
            n.prototype.initialize = function () { if (!this.collection) throw new Error(classes.AdminProjectListView.ERROR_INIT_COLLECTION); return this.listenTo(this.collection, "add", this.model_to_view) },
            n.prototype.model_to_view = function (t) { var e; return e = new classes.AdminGroupProjectItemView({ model: t, template: JST["templates/admin/groups/admin_group_project_list_item"] }) },
            n.prototype.fetch_groups = function (t) { return null == t && (t = {}), this.show_message("loading"), this.collection.fetch() }, n
    }(Backbone.View), classes.AdminProjectListView.ERROR_INIT_COLLECTION = "You need to initialize this view with a GitLab.Projects collection"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.CodesView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "submit #code-form": "submit_code" },
            n.prototype.initialize = function () { return this.template = JST["settings/codes_view"], this.codes = new classes.CollectionView({ collection: new classes.LoginRegistrationCodes, child_view: classes.ListItemView, child_template: JST["settings/code_list_item"], attributes: { "class": "code-list list" } }), this.codes.collection.reset(app.data.get("login_registration_codes")), this.listenTo(this.codes, app.events.SELECT, this.deactivate_code) },
            n.prototype.render = function () { return this.$el.html(this.template()), this.$(".box-inner").prepend(this.codes.render().el), this },
            n.prototype.submit_code = function () { return this.codes.collection.create({ code: this.$("#code-form #registration_code").val() }, { wait: !0, success: function (t) { return function () { return t.$("#code-form #registration_code").val("") } }(this), error: function (t, e) { var n; return n = JSON.parse(e.responseText), app.mailman.trigger(app.events.FLASH_ERROR, n.message) } }), !1 },
            n.prototype.deactivate_code = function (t, e) { return t.model.destroy({ silent: !0, success: function (e) { return function () { return t.model.set("active", !1), e.codes.render() } }(this) }), e.preventDefault(), !1 }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = function (t, e) { return function () { return t.apply(e, arguments) } }, e = {}.hasOwnProperty, n = function (t, n) { function i() { this.constructor = t } for (var s in n) e.call(n, s) && (t[s] = n[s]); return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t }; classes.GroupDetailView = function (e) {
        function i() { return this.add_collaborator_form = t(this.add_collaborator_form, this), i.__super__.constructor.apply(this, arguments) } return n(i, e), i.prototype.initialize = function () { return this.template = JST["settings/group_detail"], this.add_collaborators_list(), this.add_collaborator_form() }, i.prototype.add_collaborators_list = function () { return this.collaborators_view = new classes.CollaboratorsListView({ group: this.model }), this.collaborators_view.collection.fetch({ success: function (t) { return function () { return t.current_user = t.collaborators_view.collection.find(function (t) { return t.get("username") === app.data.get("user").nickname }), app.data.get("permissions").admin || null != t.current_user && t.current_user.get("permission_level") > 30 ? t.display_add_member() : void 0 } }(this), error: function () { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error loading the collaborators") } }(this) }) },
            i.prototype.add_collaborator_form = function () {
            return $("#add-collaborator-form").keypress(function (t) { return function (e) { return 13 === e.keyCode ? (t.add_collaborator(), e.preventDefault(), !1) : void 0 } }(this)),
                this.add_collaborator_button = new classes.ButtonView({ current_state: "default", default_state: "default", model: new Backbone.Model({ "class": "block align-center btn action pull-right", href: "#", states: { disabled: "Add", "default": "Add", working: "Sending Invite...", success: "Invite Sent", error: "Error sending invite" } }) }), this.listenTo(this.add_collaborator_button, app.events.SELECT, this.add_collaborator)
            }, i.prototype.add_collaborator = function (t, e) { var n, i, s; return null != e && e.preventDefault(), this.add_collaborator_button.change_state("working"), n = $("#collaborator-role").val(), s = $("input#collaborator-name").val(), this.$("input#collaborator-name").val("").blur(), i = { email: s, permission_level: parseInt(n), group_name: this.model.get("name") }, null != app.data.get("permissions") && app.data.get("permissions").admin === !0 && (i.code = $("#collaborator-code").val()), this.collaborators_view.collection.create(i, { wait: !0, success: function (t) { return function () { return t.add_collaborator_button.change_state("success") } }(this), error: function (t) { return function (e, n) { var i; return i = n.responseJSON && n.responseJSON.message ? n.responseJSON.message : "There was an error submitting the invite", app.mailman.trigger(app.events.FLASH_ERROR, i), t.add_collaborator_button.change_state("error") } }(this) }), !1 },
            i.prototype.display_add_member = function () {
            return $("#add-member").show(), $("#add-collaborator-form .button-row").append(this.add_collaborator_button.render().el), this.collaborator_role_select = new Select({ el: $("#collaborator-role")[0], className: "select-theme-atlas" }),
                null != app.data.get("permissions") && app.data.get("permissions").admin === !0 ? this.collaborator_code_select = new Select({ el: $("#collaborator-code")[0], className: "select-theme-atlas" }) : void 0
        },
            i.prototype.render = function () {
            return this.$el.html(this.template(this.model.toJSON())),
                this.$(".collaborators-list-container").html(this.collaborators_view.render().el), this.collaborators_view.show_message("loading"), this
        }, i
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) {
        function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
    }; classes.GroupItemView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.className = "list-item list-padding",
            n.prototype.tagName = "li",
            n.prototype.initialize = function () { if (!this.options.template) throw new Error(app.constants.ERROR_NO_TEMPLATE); return this.template = this.options.template },
            n.prototype.render = function () { return this.$el.html(this.template(this.model.toJSON())), this.delegateEvents(), this }, n
    }(Backbone.View)
}.call(this), 
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.GroupListView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), n.mixin([classes.MessageMixin, classes.CollectionMixin]),
            n.prototype.className = "list list-large",
            n.prototype.tagName = "ul",
            n.prototype.messages = { empty: "You do not belong to any groups", loading: "Loading groups..." },
            n.prototype.initialize = function () { if (!this.collection) throw new Error(classes.GroupListview.ERROR_INIT_COLLECTION); return this.listenTo(this.collection, "add", this.model_to_view) },
            n.prototype.model_to_view = function (t) { var e; return e = new classes.GroupItemView({ model: t, template: JST["templates/settings/group_list_item"] }), this.listenTo(e, app.events.SELECT, function (t, e) { return this.trigger(app.events.SELECT, t, e) }), this.add(e) },
            n.prototype.fetch_groups = function (t) { return null == t && (t = {}), this.show_message("loading"), this.collection.fetch({ data: { per_page: 100 }, success: function (e) { return function (n) { return null != t.success && t.success(), n.length > 0 ? e.sort_by("name", "asc") : e.show_message("empty") } }(this), error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API_GROUPS) } }) }, n
    }(Backbone.View), classes.GroupListView.ERROR_INIT_COLLECTION = "You need to initialize this view with a GitLab.Groups collection"
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsGroupShowView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { return this.groups = new app.data.gitlab.Groups, this.groups_list = new classes.GroupListView({ collection: this.groups }), this.$("#group-list").html(this.groups_list.render().el), this.groups_list.fetch_groups({ success: function (t) { return function () { var e; return e = t.groups.find(function (t) { return t.get("name").toLowerCase() === app.data.get("group_name") }), null != e ? t.render_group_detail(e) : app.mailman.trigger(app.events.FLASH_ERROR, "You've requested a group that doesn't exist") } }(this) }) },
            n.prototype.render_group_detail = function (t) { return this.group = t, this.group_detail = new classes.GroupDetailView({ model: t }), this.$("#group-detail").html(this.group_detail.render().el) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsGroupsView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.initialize = function () { return this.groups = new app.data.gitlab.Groups, this.groups_list = new classes.GroupListView({ collection: this.groups }), this.$("#group-list").html(this.groups_list.render().el), this.groups_list.fetch_groups() }, n
    }(Backbone.View)
}.call(this),
function () { var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsIndexView = function (t) { function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t), 
    n.prototype.initialize = function () { return this.token = new classes.TokenView({ attributes: { "class": "box right10 down20", id: "token-box" } }), this.$("#left").append(this.token.render().el), this.notifications = new classes.NotificationsView({ attributes: { "class": "box right10 down20", id: "notifications-box" } }), this.$("#left").append(this.notifications.render().el), this.codes = new classes.CodesView({ attributes: { "class": "box down20", id: "registration-codes" } }), this.$("#right").append(this.codes.render().el) }, n }(Backbone.View) }.call(this), 
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.NotificationsView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "click input": "update" },
            n.prototype.initialize = function () { return this.collection = new classes.Tokens, this.template = JST["templates/settings/notifications_view"] },
            n.prototype.render = function () { return this.$el.html(this.template(app.data.get("preference"))), this },
            n.prototype.update = function () { var t; return t = this.$("input").prop("checked"), $.ajax({ type: "POST", url: "/api/users/" + app.data.get("user").id + "/settings", data: { settings: { notifications: t } } }).done(function () { return function () { return console.log(arguments) } }(this)).fail(function (e) { return function () { return app.mailman.trigger(app.events.FLASH_ERROR, "There was an error updating your settings."), e.$("input").prop("checked", !t) } }(this)) }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.SettingsSshView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "submit #ssh-form": "submit_key" },
            n.prototype.initialize = function () { return this.template = JST["settings/keys_view"], this.ssh_keys = new classes.CollectionView({ collection: new app.data.gitlab.SSHKeys, child_view: classes.ListItemView, child_template: JST["settings/ssh_list_item"], attributes: { "class": "keys-list list" }, messages: { empty: "You haven't added any SSH Keys" } }), this.ssh_keys.collection.fetch({ success: function (t) { return function (e) { return 0 === e.length ? t.ssh_keys.show_message("empty") : void 0 } }(this) }), this.listenTo(this.ssh_keys, app.events.SELECT, this.deactivate_key), this.render().el },
            n.prototype.render = function () { return this.$("#ssh-keys").empty(), this.$("#ssh-keys").html(this.template()), this.$(".box-inner").prepend(this.ssh_keys.render().el), this },
            n.prototype.submit_key = function (t) { var e, n; return t.preventDefault(), n = this.$("#ssh_key_title").val(), e = this.$("#new-public-ssh-key").val(), 0 === n.length || 0 === e.length ? (app.mailman.trigger(app.events.FLASH_ERROR, "Please fill out both title and key"), !1) : e.split(/\s/).length < 3 ? (app.mailman.trigger(app.events.FLASH_ERROR, "There was an error saving the public SSH key. Please make sure you are using a valid key."), !1) : (this.$("#new-ssh-key-button").addClass("btn-disabled").removeClass("btn-success"), this.$("#new-ssh-key-button").prop("disabled", !0), this.ssh_keys.collection.create({ title: n, key: e }, { wait: !0, success: function (t) { return function () { return t.$("#new-public-ssh-key").val(""), t.$("#ssh_key_title").val(""), t.$("#new-ssh-key-button").removeClass("btn-disabled").addClass("btn-success"), t.$("#new-ssh-key-button").prop("disabled", !1), t.ssh_keys.hide_message("empty") } }(this), error: function (t) { return function (e, n) { var i; return t.$("#new-ssh-key-button").removeClass("btn-disabled").addClass("btn-success"), t.$("#new-ssh-key-button").prop("disabled", !1), i = JSON.parse(n.responseText), app.mailman.trigger(app.events.FLASH_ERROR, "There was an error saving the public SSH key. Please make sure you are using a valid key.") } }(this) }), !1) },
            n.prototype.deactivate_key = function (t, e) { return t.model.destroy(), 0 === this.ssh_keys.collection.length && this.ssh_keys.show_message("empty"), e.preventDefault(), !1 }, n
    }(Backbone.View)
}.call(this),
function () {
    var t = {}.hasOwnProperty, e = function (e, n) { function i() { this.constructor = e } for (var s in n) t.call(n, s) && (e[s] = n[s]); return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e }; classes.TokenView = function (t) {
        function n() { return n.__super__.constructor.apply(this, arguments) } return e(n, t),
            n.prototype.events = { "click #reset-token-link": "reset_token" },
            n.prototype.initialize = function () { return this.collection = new classes.Tokens, this.template = JST["settings/token_view"] },
            n.prototype.render = function () { return this.$el.html(this.template(app.data.get("user"))), this },
            n.prototype.reset_token = function () { return this.collection.create({}, { success: function (t) { return this.$("#authentication-token").html(t.get("auth_token")) }, error: function () { return app.mailman.trigger(app.events.FLASH_ERROR, app.constants.ERROR_API) } }), !1 }, n
    }(Backbone.View)
}.call(this);