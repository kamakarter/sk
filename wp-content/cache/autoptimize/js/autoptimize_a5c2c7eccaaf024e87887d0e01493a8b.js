try {
  /*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
  "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    (function (t) {
      "use strict";
      "function" == typeof define && define.amd
        ? define(["jquery"], function (e) {
            return t(e, window);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t(require("jquery"), window))
        : t(jQuery, window);
    })(function (s, n) {
      "use strict";
      function e(e) {
        return (
          0 <=
          (function (e, t) {
            for (
              var r = /^(\d+)\.(\d+)\.(\d+)/,
                n = r.exec(e) || [],
                o = r.exec(t) || [],
                i = 1;
              i <= 3;
              i++
            ) {
              if (+o[i] < +n[i]) return 1;
              if (+n[i] < +o[i]) return -1;
            }
            return 0;
          })(s.fn.jquery, e)
        );
      }
      (s.migrateVersion = "3.3.2"),
        n.console &&
          n.console.log &&
          ((s && e("3.0.0")) ||
            n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          s.migrateWarnings &&
            n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
          n.console.log(
            "JQMIGRATE: Migrate is installed" +
              (s.migrateMute ? "" : " with logging active") +
              ", version " +
              s.migrateVersion
          ));
      var r = {};
      function u(e) {
        var t = n.console;
        (s.migrateDeduplicateWarnings && r[e]) ||
          ((r[e] = !0),
          s.migrateWarnings.push(e),
          t &&
            t.warn &&
            !s.migrateMute &&
            (t.warn("JQMIGRATE: " + e),
            s.migrateTrace && t.trace && t.trace()));
      }
      function t(e, t, r, n) {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return u(n), r;
          },
          set: function (e) {
            u(n), (r = e);
          },
        });
      }
      function o(e, t, r, n) {
        e[t] = function () {
          return u(n), r.apply(this, arguments);
        };
      }
      (s.migrateDeduplicateWarnings = !0),
        (s.migrateWarnings = []),
        void 0 === s.migrateTrace && (s.migrateTrace = !0),
        (s.migrateReset = function () {
          (r = {}), (s.migrateWarnings.length = 0);
        }),
        "BackCompat" === n.document.compatMode &&
          u("jQuery is not compatible with Quirks Mode");
      var i,
        a,
        c,
        d = {},
        l = s.fn.init,
        p = s.find,
        f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      for (i in ((s.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          "string" == typeof e &&
            "#" === e &&
            (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
          l.apply(this, t)
        );
      }),
      (s.fn.init.prototype = s.fn),
      (s.find = function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(y, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                u("Attribute selector with '#' must be quoted: " + r[0]),
                (r[0] = t);
            } catch (e) {
              u("Attribute selector with '#' was not fixed: " + r[0]);
            }
          }
        return p.apply(this, r);
      }),
      p))
        Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
      o(
        s.fn,
        "size",
        function () {
          return this.length;
        },
        "jQuery.fn.size() is deprecated and removed; use the .length property"
      ),
        o(
          s,
          "parseJSON",
          function () {
            return JSON.parse.apply(null, arguments);
          },
          "jQuery.parseJSON is deprecated; use JSON.parse"
        ),
        o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
        o(
          s,
          "unique",
          s.uniqueSort,
          "jQuery.unique is deprecated; use jQuery.uniqueSort"
        ),
        t(
          s.expr,
          "filters",
          s.expr.pseudos,
          "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
        ),
        t(
          s.expr,
          ":",
          s.expr.pseudos,
          "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
        ),
        e("3.1.1") &&
          o(
            s,
            "trim",
            function (e) {
              return null == e ? "" : (e + "").replace(m, "");
            },
            "jQuery.trim is deprecated; use String.prototype.trim"
          ),
        e("3.2.0") &&
          (o(
            s,
            "nodeName",
            function (e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            "jQuery.nodeName is deprecated"
          ),
          o(
            s,
            "isArray",
            Array.isArray,
            "jQuery.isArray is deprecated; use Array.isArray"
          )),
        e("3.3.0") &&
          (o(
            s,
            "isNumeric",
            function (e) {
              var t = typeof e;
              return (
                ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
              );
            },
            "jQuery.isNumeric() is deprecated"
          ),
          s.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          ),
          o(
            s,
            "type",
            function (e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? d[Object.prototype.toString.call(e)] || "object"
                : typeof e;
            },
            "jQuery.type is deprecated"
          ),
          o(
            s,
            "isFunction",
            function (e) {
              return "function" == typeof e;
            },
            "jQuery.isFunction() is deprecated"
          ),
          o(
            s,
            "isWindow",
            function (e) {
              return null != e && e === e.window;
            },
            "jQuery.isWindow() is deprecated"
          )),
        s.ajax &&
          ((a = s.ajax),
          (c = /(=)\?(?=&|$)|\?\?/),
          (s.ajax = function () {
            var e = a.apply(this, arguments);
            return (
              e.promise &&
                (o(
                  e,
                  "success",
                  e.done,
                  "jQXHR.success is deprecated and removed"
                ),
                o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
                o(
                  e,
                  "complete",
                  e.always,
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          }),
          e("4.0.0") ||
            s.ajaxPrefilter("+json", function (e) {
              !1 !== e.jsonp &&
                (c.test(e.url) ||
                  ("string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    c.test(e.data))) &&
                u("JSON-to-JSONP auto-promotion is deprecated");
            }));
      var g = s.fn.removeAttr,
        h = s.fn.toggleClass,
        v = /\S+/g;
      function j(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
          return t.toUpperCase();
        });
      }
      s.fn.removeAttr = function (e) {
        var r = this;
        return (
          s.each(e.match(v), function (e, t) {
            s.expr.match.bool.test(t) &&
              (u(
                "jQuery.fn.removeAttr no longer sets boolean properties: " + t
              ),
              r.prop(t, !1));
          }),
          g.apply(this, arguments)
        );
      };
      var Q,
        b = !(s.fn.toggleClass = function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? h.apply(this, arguments)
            : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        }),
        w = /^[a-z]/,
        x =
          /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
      s.swap &&
        s.each(["height", "width", "reliableMarginRight"], function (e, t) {
          var r = s.cssHooks[t] && s.cssHooks[t].get;
          r &&
            (s.cssHooks[t].get = function () {
              var e;
              return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
            });
        }),
        (s.swap = function (e, t, r, n) {
          var o,
            i,
            a = {};
          for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
            (a[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
          return o;
        }),
        e("3.4.0") &&
          "undefined" != typeof Proxy &&
          (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function () {
              return (
                u("JQMIGRATE: jQuery.cssProps is deprecated"),
                Reflect.set.apply(this, arguments)
              );
            },
          })),
        s.cssNumber || (s.cssNumber = {}),
        (Q = s.fn.css),
        (s.fn.css = function (e, t) {
          var r,
            n,
            o = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((r = j(e)),
                (n = r),
                (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                  s.cssNumber[r] ||
                  u(
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              Q.apply(this, arguments));
        });
      var A,
        k,
        S,
        M,
        N = s.data;
      (s.data = function (e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
          for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
            i !== j(i)
              ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                (n[i] = t[i]))
              : (o[i] = t[i]);
          return N.call(this, e, o), t;
        }
        return t &&
          "string" == typeof t &&
          t !== j(t) &&
          (n = s.hasData(e) && N.call(this, e)) &&
          t in n
          ? (u("jQuery.data() always sets/gets camelCased names: " + t),
            2 < arguments.length && (n[t] = r),
            n[t])
          : N.apply(this, arguments);
      }),
        s.fx &&
          ((S = s.Tween.prototype.run),
          (M = function (e) {
            return e;
          }),
          (s.Tween.prototype.run = function () {
            1 < s.easing[this.easing].length &&
              (u(
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = M)),
              S.apply(this, arguments);
          }),
          (A = s.fx.interval || 13),
          (k = "jQuery.fx.interval is deprecated"),
          n.requestAnimationFrame &&
            Object.defineProperty(s.fx, "interval", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return n.document.hidden || u(k), A;
              },
              set: function (e) {
                u(k), (A = e);
              },
            }));
      var R = s.fn.load,
        H = s.event.add,
        C = s.event.fix;
      (s.event.props = []),
        (s.event.fixHooks = {}),
        t(
          s.event.props,
          "concat",
          s.event.props.concat,
          "jQuery.event.props.concat() is deprecated and removed"
        ),
        (s.event.fix = function (e) {
          var t,
            r = e.type,
            n = this.fixHooks[r],
            o = s.event.props;
          if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length) s.event.addProp(o.pop());
          }
          if (
            n &&
            !n._migrated_ &&
            ((n._migrated_ = !0),
            u("jQuery.event.fixHooks are deprecated and removed: " + r),
            (o = n.props) && o.length)
          )
            while (o.length) s.event.addProp(o.pop());
          return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
        }),
        (s.event.add = function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              u(
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            H.apply(this, arguments)
          );
        }),
        s.each(["load", "unload", "error"], function (e, t) {
          s.fn[t] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? R.apply(this, e)
              : (u("jQuery.fn." + t + "() is deprecated"),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          };
        }),
        s.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, r) {
            s.fn[r] = function (e, t) {
              return (
                u("jQuery.fn." + r + "() event shorthand is deprecated"),
                0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
              );
            };
          }
        ),
        s(function () {
          s(n.document).triggerHandler("ready");
        }),
        (s.event.special.ready = {
          setup: function () {
            this === n.document && u("'ready' event is deprecated");
          },
        }),
        s.fn.extend({
          bind: function (e, t, r) {
            return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
          },
          unbind: function (e, t) {
            return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
          },
          delegate: function (e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
          },
          undelegate: function (e, t, r) {
            return (
              u("jQuery.fn.undelegate() is deprecated"),
              1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", r)
            );
          },
          hover: function (e, t) {
            return (
              u("jQuery.fn.hover() is deprecated"),
              this.on("mouseenter", e).on("mouseleave", t || e)
            );
          },
        });
      function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return (t.body.innerHTML = e), t.body && t.body.innerHTML;
      }
      function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e &&
          T(e) !== T(t) &&
          u("HTML tags must be properly nested and closed: " + e);
      }
      var O =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        q = s.htmlPrefilter;
      (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        s.htmlPrefilter = function (e) {
          return P(e), e.replace(O, "<$1></$2>");
        };
      }),
        (s.htmlPrefilter = function (e) {
          return P(e), q(e);
        });
      var D,
        _ = s.fn.offset;
      (s.fn.offset = function () {
        var e = this[0];
        return !e || (e.nodeType && e.getBoundingClientRect)
          ? _.apply(this, arguments)
          : (u("jQuery.fn.offset() requires a valid DOM element"),
            arguments.length ? this : void 0);
      }),
        s.ajax &&
          ((D = s.param),
          (s.param = function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (u(
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              D.call(this, e, t)
            );
          }));
      var E,
        F,
        J = s.fn.andSelf || s.fn.addBack;
      return (
        (s.fn.andSelf = function () {
          return (
            u(
              "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
            ),
            J.apply(this, arguments)
          );
        }),
        s.Deferred &&
          ((E = s.Deferred),
          (F = [
            [
              "resolve",
              "done",
              s.Callbacks("once memory"),
              s.Callbacks("once memory"),
              "resolved",
            ],
            [
              "reject",
              "fail",
              s.Callbacks("once memory"),
              s.Callbacks("once memory"),
              "rejected",
            ],
            [
              "notify",
              "progress",
              s.Callbacks("memory"),
              s.Callbacks("memory"),
            ],
          ]),
          (s.Deferred = function (e) {
            var i = E(),
              a = i.promise();
            return (
              (i.pipe = a.pipe =
                function () {
                  var o = arguments;
                  return (
                    u("deferred.pipe() is deprecated"),
                    s
                      .Deferred(function (n) {
                        s.each(F, function (e, t) {
                          var r = "function" == typeof o[e] && o[e];
                          i[t[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise
                              ? e
                                  .promise()
                                  .done(n.resolve)
                                  .fail(n.reject)
                                  .progress(n.notify)
                              : n[t[0] + "With"](
                                  this === a ? n.promise() : this,
                                  r ? [e] : arguments
                                );
                          });
                        }),
                          (o = null);
                      })
                      .promise()
                  );
                }),
              e && e.call(i, i),
              i
            );
          }),
          (s.Deferred.exceptionHook = E.exceptionHook)),
        s
      );
    });
} catch (e) {}
try {
  // ==================================================
  !(function (t, e, n, o) {
    "use strict";
    function i(t, e) {
      var o,
        i,
        a,
        s = [],
        r = 0;
      (t && t.isDefaultPrevented()) ||
        (t.preventDefault(),
        (e = e || {}),
        t && t.data && (e = h(t.data.options, e)),
        (o = e.$target || n(t.currentTarget).trigger("blur")),
        ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
          (e.selector
            ? (s = n(e.selector))
            : ((i = o.attr("data-fancybox") || ""),
              i
                ? ((s = t.data ? t.data.items : []),
                  (s = s.length
                    ? s.filter('[data-fancybox="' + i + '"]')
                    : n('[data-fancybox="' + i + '"]')))
                : (s = [o])),
          (r = n(s).index(o)),
          r < 0 && (r = 0),
          (a = n.fancybox.open(s, e, r)),
          (a.$trigger = o)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
      if (n.fn.fancybox)
        return void console.info("fancyBox already initialized");
      var a = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function (t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function (t, e) {
              return "image" === t.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        s = n(t),
        r = n(e),
        c = 0,
        l = function (t) {
          return t && t.hasOwnProperty && t instanceof n;
        },
        d = (function () {
          return (
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            function (e) {
              return t.setTimeout(e, 1e3 / 60);
            }
          );
        })(),
        u = (function () {
          return (
            t.cancelAnimationFrame ||
            t.webkitCancelAnimationFrame ||
            t.mozCancelAnimationFrame ||
            t.oCancelAnimationFrame ||
            function (e) {
              t.clearTimeout(e);
            }
          );
        })(),
        f = (function () {
          var t,
            n = e.createElement("fakeelement"),
            o = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (t in o) if (void 0 !== n.style[t]) return o[t];
          return "transitionend";
        })(),
        p = function (t) {
          return t && t.length && t[0].offsetHeight;
        },
        h = function (t, e) {
          var o = n.extend(!0, {}, t, e);
          return (
            n.each(e, function (t, e) {
              n.isArray(e) && (o[t] = e);
            }),
            o
          );
        },
        g = function (t) {
          var o, i;
          return (
            !(!t || t.ownerDocument !== e) &&
            (n(".fancybox-container").css("pointer-events", "none"),
            (o = {
              x: t.getBoundingClientRect().left + t.offsetWidth / 2,
              y: t.getBoundingClientRect().top + t.offsetHeight / 2,
            }),
            (i = e.elementFromPoint(o.x, o.y) === t),
            n(".fancybox-container").css("pointer-events", ""),
            i)
          );
        },
        b = function (t, e, o) {
          var i = this;
          (i.opts = h({ index: o }, n.fancybox.defaults)),
            n.isPlainObject(e) && (i.opts = h(i.opts, e)),
            n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
            (i.id = i.opts.id || ++c),
            (i.currIndex = parseInt(i.opts.index, 10) || 0),
            (i.prevIndex = null),
            (i.prevPos = null),
            (i.currPos = 0),
            (i.firstRun = !0),
            (i.group = []),
            (i.slides = {}),
            i.addContent(t),
            i.group.length && i.init();
        };
      n.extend(b.prototype, {
        init: function () {
          var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;
          r.closeExisting && n.fancybox.close(!0),
            n("body").addClass("fancybox-active"),
            !n.fancybox.getInstance() &&
              !1 !== r.hideScrollbar &&
              !n.fancybox.isMobile &&
              e.body.scrollHeight > t.innerHeight &&
              (n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (t.innerWidth - e.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              n("body").addClass("compensate-for-scrollbar")),
            (i = ""),
            n.each(r.buttons, function (t, e) {
              i += r.btnTpl[e] || "";
            }),
            (o = n(
              a.translate(
                a,
                r.baseTpl
                  .replace("{{buttons}}", i)
                  .replace(
                    "{{arrows}}",
                    r.btnTpl.arrowLeft + r.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + a.id)
              .addClass(r.baseClass)
              .data("FancyBox", a)
              .appendTo(r.parentEl)),
            (a.$refs = { container: o }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (t) {
              a.$refs[t] = o.find(".fancybox-" + t);
            }),
            a.trigger("onInit"),
            a.activate(),
            a.jumpTo(a.currIndex);
        },
        translate: function (t, e) {
          var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
          return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
            return void 0 === n[e] ? t : n[e];
          });
        },
        addContent: function (t) {
          var e,
            o = this,
            i = n.makeArray(t);
          n.each(i, function (t, e) {
            var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};
            n.isPlainObject(e)
              ? ((l = e), (d = e.opts || e))
              : "object" === n.type(e) && n(e).length
              ? ((i = n(e)),
                (d = i.data() || {}),
                (d = n.extend(!0, {}, d, d.options)),
                (d.$orig = i),
                (l.src = o.opts.src || d.src || i.attr("href")),
                l.type || l.src || ((l.type = "inline"), (l.src = e)))
              : (l = { type: "html", src: e + "" }),
              (l.opts = n.extend(!0, {}, o.opts, d)),
              n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
              n.fancybox.isMobile &&
                l.opts.mobile &&
                (l.opts = h(l.opts, l.opts.mobile)),
              (a = l.type || l.opts.type),
              (r = l.src || ""),
              !a &&
                r &&
                ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((a = "video"),
                    l.opts.video.format ||
                      (l.opts.video.format =
                        "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                  : r.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (a = "image")
                  : r.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((a = "iframe"),
                    (l = n.extend(!0, l, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === r.charAt(0) && (a = "inline")),
              a ? (l.type = a) : o.trigger("objectNeedsType", l),
              l.contentType ||
                (l.contentType =
                  n.inArray(l.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : l.type),
              (l.index = o.group.length),
              "auto" == l.opts.smallBtn &&
                (l.opts.smallBtn =
                  n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
              "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
              (l.$thumb = l.opts.$thumb || null),
              l.opts.$trigger &&
                l.index === o.opts.index &&
                ((l.$thumb = l.opts.$trigger.find("img:first")),
                l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
              (l.$thumb && l.$thumb.length) ||
                !l.opts.$orig ||
                (l.$thumb = l.opts.$orig.find("img:first")),
              l.$thumb && !l.$thumb.length && (l.$thumb = null),
              (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
              "function" === n.type(l.opts.caption) &&
                (l.opts.caption = l.opts.caption.apply(e, [o, l])),
              "function" === n.type(o.opts.caption) &&
                (l.opts.caption = o.opts.caption.apply(e, [o, l])),
              l.opts.caption instanceof n ||
                (l.opts.caption =
                  void 0 === l.opts.caption ? "" : l.opts.caption + ""),
              "ajax" === l.type &&
                ((c = r.split(/\s+/, 2)),
                c.length > 1 &&
                  ((l.src = c.shift()), (l.opts.filter = c.shift()))),
              l.opts.modal &&
                (l.opts = n.extend(!0, l.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              o.group.push(l);
          }),
            Object.keys(o.slides).length &&
              (o.updateControls(),
              (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var e = this;
          e.removeEvents(),
            e.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), e.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (t) {
                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            s.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type
                ? (e.requestId && u(e.requestId),
                  (e.requestId = d(function () {
                    e.update(t);
                  })))
                : (e.current &&
                    "iframe" === e.current.type &&
                    e.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      e.$refs.stage.show(), e.update(t);
                    },
                    n.fancybox.isMobile ? 600 : 250
                  ));
            }),
            r.on("keydown.fb", function (t) {
              var o = n.fancybox ? n.fancybox.getInstance() : null,
                i = o.current,
                a = t.keyCode || t.which;
              if (9 == a) return void (i.opts.trapFocus && e.focus(t));
              if (
                !(
                  !i.opts.keyboard ||
                  t.ctrlKey ||
                  t.altKey ||
                  t.shiftKey ||
                  n(t.target).is("input,textarea,video,audio,select")
                )
              )
                return 8 === a || 27 === a
                  ? (t.preventDefault(), void e.close(t))
                  : 37 === a || 38 === a
                  ? (t.preventDefault(), void e.previous())
                  : 39 === a || 40 === a
                  ? (t.preventDefault(), void e.next())
                  : void e.trigger("afterKeydown", t, a);
            }),
            e.group[e.currIndex].opts.idleTime &&
              ((e.idleSecondsCounter = 0),
              r.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (t) {
                  (e.idleSecondsCounter = 0),
                    e.isIdle && e.showControls(),
                    (e.isIdle = !1);
                }
              ),
              (e.idleInterval = t.setInterval(function () {
                ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                  !e.isDragging &&
                  ((e.isIdle = !0),
                  (e.idleSecondsCounter = 0),
                  e.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var e = this;
          s.off("orientationchange.fb resize.fb"),
            r.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            e.idleInterval &&
              (t.clearInterval(e.idleInterval), (e.idleInterval = null));
        },
        previous: function (t) {
          return this.jumpTo(this.currPos - 1, t);
        },
        next: function (t) {
          return this.jumpTo(this.currPos + 1, t);
        },
        jumpTo: function (t, e) {
          var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;
          if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
            if (
              ((t = parseInt(t, 10)),
              !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
                (t < 0 || t >= h))
            )
              return !1;
            if (
              ((o = f.firstRun = !Object.keys(f.slides).length),
              (r = f.current),
              (f.prevIndex = f.currIndex),
              (f.prevPos = f.currPos),
              (s = f.createSlide(t)),
              h > 1 &&
                ((a || s.index < h - 1) && f.createSlide(t + 1),
                (a || s.index > 0) && f.createSlide(t - 1)),
              (f.current = s),
              (f.currIndex = s.index),
              (f.currPos = s.pos),
              f.trigger("beforeShow", o),
              f.updateControls(),
              (s.forcedDuration = void 0),
              n.isNumeric(e)
                ? (s.forcedDuration = e)
                : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              (i = f.isMoved(s)),
              s.$slide.addClass("fancybox-slide--current"),
              o)
            )
              return (
                s.opts.animationEffect &&
                  e &&
                  f.$refs.container.css("transition-duration", e + "ms"),
                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                f.loadSlide(s),
                void f.preload("image")
              );
            (c = n.fancybox.getTranslate(r.$slide)),
              (l = n.fancybox.getTranslate(f.$refs.stage)),
              n.each(f.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }),
              r.pos !== s.pos && (r.isComplete = !1),
              r.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              i
                ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                  n.each(f.slides, function (t, o) {
                    o.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var i = o.pos * c.width + o.pos * o.opts.gutter;
                    n.fancybox.setTranslate(o.$slide, {
                      top: 0,
                      left: i - l.left + u,
                    }),
                      o.pos !== s.pos &&
                        o.$slide.addClass(
                          "fancybox-slide--" +
                            (o.pos > s.pos ? "next" : "previous")
                        ),
                      p(o.$slide),
                      n.fancybox.animate(
                        o.$slide,
                        {
                          top: 0,
                          left:
                            (o.pos - s.pos) * c.width +
                            (o.pos - s.pos) * o.opts.gutter,
                        },
                        e,
                        function () {
                          o.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            o.pos === f.currPos && f.complete();
                        }
                      );
                  }))
                : e &&
                  s.opts.transitionEffect &&
                  ((d =
                    "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                  r.$slide.addClass(
                    "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                  ),
                  n.fancybox.animate(
                    r.$slide,
                    d,
                    e,
                    function () {
                      r.$slide
                        .removeClass(d)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
              f.preload("image");
          }
        },
        createSlide: function (t) {
          var e,
            o,
            i = this;
          return (
            (o = t % i.group.length),
            (o = o < 0 ? i.group.length + o : o),
            !i.slides[t] &&
              i.group[o] &&
              ((e = n('<div class="fancybox-slide"></div>').appendTo(
                i.$refs.stage
              )),
              (i.slides[t] = n.extend(!0, {}, i.group[o], {
                pos: t,
                $slide: e,
                isLoaded: !1,
              })),
              i.updateSlide(i.slides[t])),
            i.slides[t]
          );
        },
        scaleToActual: function (t, e, o) {
          var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;
          l.isAnimating ||
            l.isMoved() ||
            !u ||
            "image" != d.type ||
            !d.isLoaded ||
            d.hasError ||
            ((l.isAnimating = !0),
            n.fancybox.stop(u),
            (t = void 0 === t ? 0.5 * f : t),
            (e = void 0 === e ? 0.5 * p : e),
            (i = n.fancybox.getTranslate(u)),
            (i.top -= n.fancybox.getTranslate(d.$slide).top),
            (i.left -= n.fancybox.getTranslate(d.$slide).left),
            (r = h / i.width),
            (c = g / i.height),
            (a = 0.5 * f - 0.5 * h),
            (s = 0.5 * p - 0.5 * g),
            h > f &&
              ((a = i.left * r - (t * r - t)),
              a > 0 && (a = 0),
              a < f - h && (a = f - h)),
            g > p &&
              ((s = i.top * c - (e * c - e)),
              s > 0 && (s = 0),
              s < p - g && (s = p - g)),
            l.updateCursor(h, g),
            n.fancybox.animate(
              u,
              { top: s, left: a, scaleX: r, scaleY: c },
              o || 366,
              function () {
                l.isAnimating = !1;
              }
            ),
            l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
        },
        scaleToFit: function (t) {
          var e,
            o = this,
            i = o.current,
            a = i.$content;
          o.isAnimating ||
            o.isMoved() ||
            !a ||
            "image" != i.type ||
            !i.isLoaded ||
            i.hasError ||
            ((o.isAnimating = !0),
            n.fancybox.stop(a),
            (e = o.getFitPos(i)),
            o.updateCursor(e.width, e.height),
            n.fancybox.animate(
              a,
              {
                top: e.top,
                left: e.left,
                scaleX: e.width / a.width(),
                scaleY: e.height / a.height(),
              },
              t || 366,
              function () {
                o.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (t) {
          var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
          return (
            !!(t.isLoaded && r && r.length) &&
            ((e = n.fancybox.getTranslate(s.$refs.stage).width),
            (o = n.fancybox.getTranslate(s.$refs.stage).height),
            (e -=
              parseFloat(c.css("paddingLeft")) +
              parseFloat(c.css("paddingRight")) +
              parseFloat(r.css("marginLeft")) +
              parseFloat(r.css("marginRight"))),
            (o -=
              parseFloat(c.css("paddingTop")) +
              parseFloat(c.css("paddingBottom")) +
              parseFloat(r.css("marginTop")) +
              parseFloat(r.css("marginBottom"))),
            (l && d) || ((l = e), (d = o)),
            (i = Math.min(1, e / l, o / d)),
            (l *= i),
            (d *= i),
            l > e - 0.5 && (l = e),
            d > o - 0.5 && (d = o),
            "image" === t.type
              ? ((u.top =
                  Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))),
                (u.left =
                  Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
              : "video" === t.contentType &&
                ((a =
                  t.opts.width && t.opts.height
                    ? l / d
                    : t.opts.ratio || 16 / 9),
                d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
            (u.width = l),
            (u.height = d),
            u)
          );
        },
        update: function (t) {
          var e = this;
          n.each(e.slides, function (n, o) {
            e.updateSlide(o, t);
          });
        },
        updateSlide: function (t, e) {
          var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
          o.adjustCaption(t),
            i &&
              (a || s || "video" === t.contentType) &&
              !t.hasError &&
              (n.fancybox.stop(i),
              n.fancybox.setTranslate(i, o.getFitPos(t)),
              t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
            o.adjustLayout(t),
            r.length &&
              (r.trigger("refresh"),
              t.pos === o.currPos &&
                o.$refs.toolbar
                  .add(o.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    r.get(0).scrollHeight > r.get(0).clientHeight
                  )),
            o.trigger("onUpdate", t, e);
        },
        centerSlide: function (t) {
          var e = this,
            o = e.current,
            i = o.$slide;
          !e.isClosing &&
            o &&
            (i.siblings().css({ transform: "", opacity: "" }),
            i
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            n.fancybox.animate(
              i,
              { top: 0, left: 0, opacity: 1 },
              void 0 === t ? 0 : t,
              function () {
                i.css({ transform: "", opacity: "" }),
                  o.isComplete || e.complete();
              },
              !1
            ));
        },
        isMoved: function (t) {
          var e,
            o,
            i = t || this.current;
          return (
            !!i &&
            ((o = n.fancybox.getTranslate(this.$refs.stage)),
            (e = n.fancybox.getTranslate(i.$slide)),
            !i.$slide.hasClass("fancybox-animated") &&
              (Math.abs(e.top - o.top) > 0.5 ||
                Math.abs(e.left - o.left) > 0.5))
          );
        },
        updateCursor: function (t, e) {
          var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;
          s &&
            !a.isClosing &&
            a.Guestures &&
            (r.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (o = a.canPan(t, e)),
            (i = !!o || a.isZoomable()),
            r.toggleClass("fancybox-is-zoomable", i),
            n("[data-fancybox-zoom]").prop("disabled", !i),
            o
              ? r.addClass("fancybox-can-pan")
              : i &&
                ("zoom" === s.opts.clickContent ||
                  (n.isFunction(s.opts.clickContent) &&
                    "zoom" == s.opts.clickContent(s)))
              ? r.addClass("fancybox-can-zoomIn")
              : s.opts.touch &&
                (s.opts.touch.vertical || a.group.length > 1) &&
                "video" !== s.contentType &&
                r.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var t,
            e = this,
            n = e.current;
          if (n && !e.isClosing && "image" === n.type && !n.hasError) {
            if (!n.isLoaded) return !0;
            if (
              (t = e.getFitPos(n)) &&
              (n.width > t.width || n.height > t.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (t, e) {
          var o = this,
            i = !1,
            a = o.current,
            s = a.$content;
          return (
            void 0 !== t && void 0 !== e
              ? (i = t < a.width && e < a.height)
              : s &&
                ((i = n.fancybox.getTranslate(s)),
                (i = i.width < a.width && i.height < a.height)),
            i
          );
        },
        canPan: function (t, e) {
          var o = this,
            i = o.current,
            a = null,
            s = !1;
          return (
            "image" === i.type &&
              (i.isComplete || (t && e)) &&
              !i.hasError &&
              ((s = o.getFitPos(i)),
              void 0 !== t && void 0 !== e
                ? (a = { width: t, height: e })
                : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
              a &&
                s &&
                (s =
                  Math.abs(a.width - s.width) > 1.5 ||
                  Math.abs(a.height - s.height) > 1.5)),
            s
          );
        },
        loadSlide: function (t) {
          var e,
            o,
            i,
            a = this;
          if (!t.isLoading && !t.isLoaded) {
            if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t)))
              return (t.isLoading = !1), !1;
            switch (
              ((e = t.type),
              (o = t.$slide),
              o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
              e)
            ) {
              case "image":
                a.setImage(t);
                break;
              case "iframe":
                a.setIframe(t);
                break;
              case "html":
                a.setContent(t, t.src || t.content);
                break;
              case "video":
                a.setContent(
                  t,
                  t.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      "{{format}}",
                      t.opts.videoFormat || t.opts.video.format || ""
                    )
                    .replace("{{poster}}", t.thumb || "")
                );
                break;
              case "inline":
                n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                break;
              case "ajax":
                a.showLoading(t),
                  (i = n.ajax(
                    n.extend({}, t.opts.ajax.settings, {
                      url: t.src,
                      success: function (e, n) {
                        "success" === n && a.setContent(t, e);
                      },
                      error: function (e, n) {
                        e && "abort" !== n && a.setError(t);
                      },
                    })
                  )),
                  o.one("onReset", function () {
                    i.abort();
                  });
                break;
              default:
                a.setError(t);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var o,
            i = this;
          setTimeout(function () {
            var e = t.$image;
            i.isClosing ||
              !t.isLoading ||
              (e && e.length && e[0].complete) ||
              t.hasError ||
              i.showLoading(t);
          }, 50),
            i.checkSrcset(t),
            (t.$content = n('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              t.thumb &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              (o = e.createElement("img")),
              (o.onerror = function () {
                n(this).remove(), (t.$ghost = null);
              }),
              (o.onload = function () {
                i.afterLoad(t);
              }),
              (t.$ghost = n(o)
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", t.thumb))),
            i.setBigImage(t);
        },
        checkSrcset: function (e) {
          var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;
          if (s) {
            (i = t.devicePixelRatio || 1),
              (a = t.innerWidth * i),
              (o = s.split(",").map(function (t) {
                var e = {};
                return (
                  t
                    .trim()
                    .split(/\s+/)
                    .forEach(function (t, n) {
                      var o = parseInt(t.substring(0, t.length - 1), 10);
                      if (0 === n) return (e.url = t);
                      o && ((e.value = o), (e.postfix = t[t.length - 1]));
                    }),
                  e
                );
              })),
              o.sort(function (t, e) {
                return t.value - e.value;
              });
            for (var r = 0; r < o.length; r++) {
              var c = o[r];
              if (
                ("w" === c.postfix && c.value >= a) ||
                ("x" === c.postfix && c.value >= i)
              ) {
                n = c;
                break;
              }
            }
            !n && o.length && (n = o[o.length - 1]),
              n &&
                ((e.src = n.url),
                e.width &&
                  e.height &&
                  "w" == n.postfix &&
                  ((e.height = (e.width / e.height) * n.value),
                  (e.width = n.value)),
                (e.opts.srcset = s));
          }
        },
        setBigImage: function (t) {
          var o = this,
            i = e.createElement("img"),
            a = n(i);
          (t.$image = a
            .one("error", function () {
              o.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (o.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                o.afterLoad(t)),
                o.isClosing ||
                  (t.opts.srcset &&
                    ((e = t.opts.sizes),
                    (e && "auto" !== e) ||
                      (e =
                        (t.width / t.height > 1 && s.width() / s.height() > 1
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !o.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  o.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (i.complete || "complete" == i.readyState) &&
            a.naturalWidth &&
            a.naturalHeight
              ? a.trigger("load")
              : i.error && a.trigger("error");
        },
        resolveImageSlideSize: function (t, e, n) {
          var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);
          (t.width = e),
            (t.height = n),
            o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
            i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
        },
        setIframe: function (t) {
          var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;
          (t.$content = n(
            '<div class="fancybox-content' +
              (i.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(i.css)
            .appendTo(a)),
            a.addClass("fancybox-slide--" + t.contentType),
            (t.$iframe = e =
              n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(i.attr)
                .appendTo(t.$content)),
            i.preload
              ? (o.showLoading(t),
                e.on("load.fb error.fb", function (e) {
                  (this.isReady = 1),
                    t.$slide.trigger("refresh"),
                    o.afterLoad(t);
                }),
                a.on("refresh.fb", function () {
                  var n,
                    o,
                    s = t.$content,
                    r = i.css.width,
                    c = i.css.height;
                  if (1 === e[0].isReady) {
                    try {
                      (n = e.contents()), (o = n.find("body"));
                    } catch (t) {}
                    o &&
                      o.length &&
                      o.children().length &&
                      (a.css("overflow", "visible"),
                      s.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === r &&
                        (r = Math.ceil(
                          Math.max(o[0].clientWidth, o.outerWidth(!0))
                        )),
                      s.css("width", r || "").css("max-width", ""),
                      void 0 === c &&
                        (c = Math.ceil(
                          Math.max(o[0].clientHeight, o.outerHeight(!0))
                        )),
                      s.css("height", c || ""),
                      a.css("overflow", "auto")),
                      s.removeClass("fancybox-is-hidden");
                  }
                }))
              : o.afterLoad(t),
            e.attr("src", t.src),
            a.one("onReset", function () {
              try {
                n(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (t) {}
              n(this).off("refresh.fb").empty(),
                (t.isLoaded = !1),
                (t.isRevealed = !1);
            });
        },
        setContent: function (t, e) {
          var o = this;
          o.isClosing ||
            (o.hideLoading(t),
            t.$content && n.fancybox.stop(t.$content),
            t.$slide.empty(),
            l(e) && e.parent().length
              ? ((e.hasClass("fancybox-content") ||
                  e.parent().hasClass("fancybox-content")) &&
                  e.parents(".fancybox-slide").trigger("onReset"),
                (t.$placeholder = n("<div>").hide().insertAfter(e)),
                e.css("display", "inline-block"))
              : t.hasError ||
                ("string" === n.type(e) &&
                  (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
            t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"),
                t.$placeholder &&
                  (t.$placeholder
                    .after(e.removeClass("fancybox-content").hide())
                    .remove(),
                  (t.$placeholder = null)),
                t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                t.hasError ||
                  (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
            }),
            n(e).appendTo(t.$slide),
            n(e).is("video,audio") &&
              (n(e).addClass("fancybox-video"),
              n(e).wrap("<div></div>"),
              (t.contentType = "video"),
              (t.opts.width = t.opts.width || n(e).attr("width")),
              (t.opts.height = t.opts.height || n(e).attr("height"))),
            (t.$content = t.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            t.$content.siblings().hide(),
            t.$content.length ||
              (t.$content = t.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            t.$content.addClass("fancybox-content"),
            t.$slide.addClass("fancybox-slide--" + t.contentType),
            o.afterLoad(t));
        },
        setError: function (t) {
          (t.hasError = !0),
            t.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + t.contentType)
              .addClass("fancybox-slide--error"),
            (t.contentType = "html"),
            this.setContent(t, this.translate(t, t.opts.errorTpl)),
            t.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (t) {
          var e = this;
          (t = t || e.current) &&
            !t.$spinner &&
            (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
              .appendTo(t.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (t) {
          var e = this;
          (t = t || e.current) &&
            t.$spinner &&
            (t.$spinner.stop().remove(), delete t.$spinner);
        },
        afterLoad: function (t) {
          var e = this;
          e.isClosing ||
            ((t.isLoading = !1),
            (t.isLoaded = !0),
            e.trigger("afterLoad", t),
            e.hideLoading(t),
            !t.opts.smallBtn ||
              (t.$smallBtn && t.$smallBtn.length) ||
              (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
                t.$content
              )),
            t.opts.protect &&
              t.$content &&
              !t.hasError &&
              (t.$content.on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0;
              }),
              "image" === t.type &&
                n('<div class="fancybox-spaceball"></div>').appendTo(
                  t.$content
                )),
            e.adjustCaption(t),
            e.adjustLayout(t),
            t.pos === e.currPos && e.updateCursor(),
            e.revealContent(t));
        },
        adjustCaption: function (t) {
          var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;
          s.toggleClass("fancybox-caption--separate", a),
            a &&
              i &&
              i.length &&
              (o.pos !== n.currPos
                ? ((e = s.clone().appendTo(s.parent())),
                  e.children().eq(0).empty().html(i),
                  (r = e.outerHeight(!0)),
                  e.empty().remove())
                : n.$caption && (r = n.$caption.outerHeight(!0)),
              o.$slide.css("padding-bottom", r || ""));
        },
        adjustLayout: function (t) {
          var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;
          s.isLoaded &&
            !0 !== s.opts.disableLayoutFix &&
            (s.$content.css("margin-bottom", ""),
            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
              ((o = s.$slide[0].style["padding-bottom"]),
              (i = s.$slide.css("padding-bottom")),
              parseFloat(i) > 0 &&
                ((e = s.$slide[0].scrollHeight),
                s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
                s.$slide.css("padding-bottom", o))),
            s.$content.css("margin-bottom", n));
        },
        revealContent: function (t) {
          var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;
          return (
            (t.isRevealed = !0),
            (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
            (i =
              t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
            (i = parseInt(
              void 0 === t.forcedDuration ? i : t.forcedDuration,
              10
            )),
            (!d && t.pos === s.currPos && i) || (e = !1),
            "zoom" === e &&
              (t.pos === s.currPos &&
              i &&
              "image" === t.type &&
              !t.hasError &&
              (l = s.getThumbPos(t))
                ? (c = s.getFitPos(t))
                : (e = "fade")),
            "zoom" === e
              ? ((s.isAnimating = !0),
                (c.scaleX = c.width / l.width),
                (c.scaleY = c.height / l.height),
                (a = t.opts.zoomOpacity),
                "auto" == a &&
                  (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
                a && ((l.opacity = 0.1), (c.opacity = 1)),
                n.fancybox.setTranslate(
                  t.$content.removeClass("fancybox-is-hidden"),
                  l
                ),
                p(t.$content),
                void n.fancybox.animate(t.$content, c, i, function () {
                  (s.isAnimating = !1), s.complete();
                }))
              : (s.updateSlide(t),
                e
                  ? (n.fancybox.stop(r),
                    (o =
                      "fancybox-slide--" +
                      (t.pos >= s.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      e),
                    r.addClass(o).removeClass("fancybox-slide--current"),
                    t.$content.removeClass("fancybox-is-hidden"),
                    p(r),
                    "image" !== t.type && t.$content.hide().show(0),
                    void n.fancybox.animate(
                      r,
                      "fancybox-slide--current",
                      i,
                      function () {
                        r.removeClass(o).css({ transform: "", opacity: "" }),
                          t.pos === s.currPos && s.complete();
                      },
                      !0
                    ))
                  : (t.$content.removeClass("fancybox-is-hidden"),
                    u ||
                      !d ||
                      "image" !== t.type ||
                      t.hasError ||
                      t.$content.hide().fadeIn("fast"),
                    void (t.pos === s.currPos && s.complete())))
          );
        },
        getThumbPos: function (t) {
          var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;
          return (
            !(!c || !g(c[0])) &&
            ((e = n.fancybox.getTranslate(c)),
            (o = parseFloat(c.css("border-top-width") || 0)),
            (i = parseFloat(c.css("border-right-width") || 0)),
            (a = parseFloat(c.css("border-bottom-width") || 0)),
            (s = parseFloat(c.css("border-left-width") || 0)),
            (r = {
              top: e.top + o,
              left: e.left + s,
              width: e.width - i - s,
              height: e.height - o - a,
              scaleX: 1,
              scaleY: 1,
            }),
            e.width > 0 && e.height > 0 && r)
          );
        },
        complete: function () {
          var t,
            e = this,
            o = e.current,
            i = {};
          !e.isMoved() &&
            o.isLoaded &&
            (o.isComplete ||
              ((o.isComplete = !0),
              o.$slide.siblings().trigger("onReset"),
              e.preload("inline"),
              p(o.$slide),
              o.$slide.addClass("fancybox-slide--complete"),
              n.each(e.slides, function (t, o) {
                o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                  ? (i[o.pos] = o)
                  : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
              }),
              (e.slides = i)),
            (e.isAnimating = !1),
            e.updateCursor(),
            e.trigger("afterShow"),
            o.opts.video.autoStart &&
              o.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next();
                }),
            o.opts.autoFocus &&
              "html" === o.contentType &&
              ((t = o.$content.find("input[autofocus]:enabled:visible:first")),
              t.length ? t.trigger("focus") : e.focus(null, !0)),
            o.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (t) {
          var e,
            n,
            o = this;
          o.group.length < 2 ||
            ((n = o.slides[o.currPos + 1]),
            (e = o.slides[o.currPos - 1]),
            e && e.type === t && o.loadSlide(e),
            n && n.type === t && o.loadSlide(n));
        },
        focus: function (t, o) {
          var i,
            a,
            s = this,
            r = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          s.isClosing ||
            ((i =
              !t && s.current && s.current.isComplete
                ? s.current.$slide.find(
                    "*:visible" + (o ? ":not(.fancybox-close-small)" : "")
                  )
                : s.$refs.container.find("*:visible")),
            (i = i.filter(r).filter(function () {
              return (
                "hidden" !== n(this).css("visibility") &&
                !n(this).hasClass("disabled")
              );
            })),
            i.length
              ? ((a = i.index(e.activeElement)),
                t && t.shiftKey
                  ? (a < 0 || 0 == a) &&
                    (t.preventDefault(), i.eq(i.length - 1).trigger("focus"))
                  : (a < 0 || a == i.length - 1) &&
                    (t && t.preventDefault(), i.eq(0).trigger("focus")))
              : s.$refs.container.trigger("focus"));
        },
        activate: function () {
          var t = this;
          n(".fancybox-container").each(function () {
            var e = n(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (t, e) {
          var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function () {
              u.cleanUp(t);
            };
          return (
            !u.isClosing &&
            ((u.isClosing = !0),
            !1 === u.trigger("beforeClose", t)
              ? ((u.isClosing = !1),
                d(function () {
                  u.update();
                }),
                !1)
              : (u.removeEvents(),
                (a = f.$content),
                (o = f.opts.animationEffect),
                (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                f.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
                f.$slide.siblings().trigger("onReset").remove(),
                i &&
                  u.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", i + "ms"),
                u.hideLoading(f),
                u.hideControls(!0),
                u.updateCursor(),
                "zoom" !== o ||
                  (a &&
                    i &&
                    "image" === f.type &&
                    !u.isMoved() &&
                    !f.hasError &&
                    (l = u.getThumbPos(f))) ||
                  (o = "fade"),
                "zoom" === o
                  ? (n.fancybox.stop(a),
                    (s = n.fancybox.getTranslate(a)),
                    (c = {
                      top: s.top,
                      left: s.left,
                      scaleX: s.width / l.width,
                      scaleY: s.height / l.height,
                      width: l.width,
                      height: l.height,
                    }),
                    (r = f.opts.zoomOpacity),
                    "auto" == r &&
                      (r =
                        Math.abs(f.width / f.height - l.width / l.height) >
                        0.1),
                    r && (l.opacity = 0),
                    n.fancybox.setTranslate(a, c),
                    p(a),
                    n.fancybox.animate(a, l, i, h),
                    !0)
                  : (o && i
                      ? n.fancybox.animate(
                          f.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + o,
                          i,
                          h
                        )
                      : !0 === t
                      ? setTimeout(h, i)
                      : h(),
                    !0)))
          );
        },
        cleanUp: function (e) {
          var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;
          s.current.$slide.trigger("onReset"),
            s.$refs.container.empty().remove(),
            s.trigger("afterClose", e),
            s.current.opts.backFocus &&
              ((r && r.length && r.is(":visible")) || (r = s.$trigger),
              r &&
                r.length &&
                ((i = t.scrollX),
                (a = t.scrollY),
                r.trigger("focus"),
                n("html, body").scrollTop(a).scrollLeft(i))),
            (s.current = null),
            (o = n.fancybox.getInstance()),
            o
              ? o.activate()
              : (n("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                n("#fancybox-style-noscroll").remove());
        },
        trigger: function (t, e) {
          var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;
          if (
            (s ? i.unshift(s) : (s = a),
            i.unshift(a),
            n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
            !1 === o)
          )
            return o;
          "afterClose" !== t && a.$refs
            ? a.$refs.container.trigger(t + ".fb", i)
            : r.trigger(t + ".fb", i);
        },
        updateControls: function () {
          var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
          o.$slide.trigger("refresh"),
            r && r.length
              ? ((t.$caption = s), s.children().eq(0).html(r))
              : (t.$caption = null),
            t.hasHiddenControls || t.isIdle || t.showControls(),
            a.find("[data-fancybox-count]").html(t.group.length),
            a.find("[data-fancybox-index]").html(i + 1),
            a
              .find("[data-fancybox-prev]")
              .prop("disabled", !o.opts.loop && i <= 0),
            a
              .find("[data-fancybox-next]")
              .prop("disabled", !o.opts.loop && i >= t.group.length - 1),
            "image" === o.type
              ? a
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", o.opts.image.src || o.src)
                  .show()
              : o.opts.toolbar &&
                a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            n(e.activeElement).is(":hidden,[disabled]") &&
              t.$refs.container.trigger("focus");
        },
        hideControls: function (t) {
          var e = this,
            n = ["infobar", "toolbar", "nav"];
          (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
            this.$refs.container.removeClass(
              n
                .map(function (t) {
                  return "fancybox-show-" + t;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
          (t.hasHiddenControls = !1),
            (t.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(e.infobar && t.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!t.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(e.arrows && t.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!e.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (n.fancybox = {
          version: "3.5.7",
          defaults: a,
          getInstance: function (t) {
            var e = n(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              o = Array.prototype.slice.call(arguments, 1);
            return (
              e instanceof b &&
              ("string" === n.type(t)
                ? e[t].apply(e, o)
                : "function" === n.type(t) && t.apply(e, o),
              e)
            );
          },
          open: function (t, e, n) {
            return new b(t, e, n);
          },
          close: function (t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**");
          },
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d: (function () {
            var n = e.createElement("div");
            return (
              t.getComputedStyle &&
              t.getComputedStyle(n) &&
              t.getComputedStyle(n).getPropertyValue("transform") &&
              !(e.documentMode && e.documentMode < 11)
            );
          })(),
          getTranslate: function (t) {
            var e;
            return (
              !(!t || !t.length) &&
              ((e = t[0].getBoundingClientRect()),
              {
                top: e.top || 0,
                left: e.left || 0,
                width: e.width,
                height: e.height,
                opacity: parseFloat(t.css("opacity")),
              })
            );
          },
          setTranslate: function (t, e) {
            var n = "",
              o = {};
            if (t && e)
              return (
                (void 0 === e.left && void 0 === e.top) ||
                  ((n =
                    (void 0 === e.left ? t.position().left : e.left) +
                    "px, " +
                    (void 0 === e.top ? t.position().top : e.top) +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                void 0 !== e.scaleX && void 0 !== e.scaleY
                  ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                  : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                n.length && (o.transform = n),
                void 0 !== e.opacity && (o.opacity = e.opacity),
                void 0 !== e.width && (o.width = e.width),
                void 0 !== e.height && (o.height = e.height),
                t.css(o)
              );
          },
          animate: function (t, e, o, i, a) {
            var s,
              r = this;
            n.isFunction(o) && ((i = o), (o = null)),
              r.stop(t),
              (s = r.getTranslate(t)),
              t.on(f, function (c) {
                (!c ||
                  !c.originalEvent ||
                  (t.is(c.originalEvent.target) &&
                    "z-index" != c.originalEvent.propertyName)) &&
                  (r.stop(t),
                  n.isNumeric(o) && t.css("transition-duration", ""),
                  n.isPlainObject(e)
                    ? void 0 !== e.scaleX &&
                      void 0 !== e.scaleY &&
                      r.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: s.width * e.scaleX,
                        height: s.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== a && t.removeClass(e),
                  n.isFunction(i) && i(c));
              }),
              n.isNumeric(o) && t.css("transition-duration", o + "ms"),
              n.isPlainObject(e)
                ? (void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    (delete e.width,
                    delete e.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  n.fancybox.setTranslate(t, e))
                : t.addClass(e),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger(f);
                }, o + 33)
              );
          },
          stop: function (t, e) {
            t &&
              t.length &&
              (clearTimeout(t.data("timer")),
              e && t.trigger(f),
              t.off(f).css("transition-duration", ""),
              t.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (n.fn.fancybox = function (t) {
          var e;
          return (
            (t = t || {}),
            (e = t.selector || !1),
            e
              ? n("body")
                  .off("click.fb-start", e)
                  .on("click.fb-start", e, { options: t }, i)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: t },
                  i
                ),
            this
          );
        }),
        r.on("click.fb-start", "[data-fancybox]", i),
        r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
            .eq(n(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: n(this) });
        }),
        (function () {
          var t = null;
          r.on(
            "mousedown mouseup focus blur",
            ".fancybox-button",
            function (e) {
              switch (e.type) {
                case "mousedown":
                  t = n(this);
                  break;
                case "mouseup":
                  t = null;
                  break;
                case "focusin":
                  n(".fancybox-button").removeClass("fancybox-focus"),
                    n(this).is(t) ||
                      n(this).is("[disabled]") ||
                      n(this).addClass("fancybox-focus");
                  break;
                case "focusout":
                  n(".fancybox-button").removeClass("fancybox-focus");
              }
            }
          );
        })();
    }
  })(window, document, jQuery),
    (function (t) {
      "use strict";
      var e = {
          youtube: {
            matcher:
              /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
              autoplay: 1,
              autohide: 1,
              fs: 1,
              rel: 0,
              hd: 1,
              wmode: "transparent",
              enablejsapi: 1,
              html5: 1,
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
          },
          vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
              autoplay: 1,
              hd: 1,
              show_title: 1,
              show_byline: 1,
              show_portrait: 0,
              fullscreen: 1,
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2",
          },
          instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l",
          },
          gmap_place: {
            matcher:
              /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
              return (
                "//maps.google." +
                t[2] +
                "/?ll=" +
                (t[9]
                  ? t[9] +
                    "&z=" +
                    Math.floor(t[10]) +
                    (t[12] ? t[12].replace(/^\//, "&") : "")
                  : t[12] + ""
                ).replace(/\?/, "&") +
                "&output=" +
                (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
              );
            },
          },
          gmap_search: {
            matcher:
              /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
              return (
                "//maps.google." +
                t[2] +
                "/maps?q=" +
                t[5].replace("query=", "q=").replace("api=1", "") +
                "&output=embed"
              );
            },
          },
        },
        n = function (e, n, o) {
          if (e)
            return (
              (o = o || ""),
              "object" === t.type(o) && (o = t.param(o, !0)),
              t.each(n, function (t, n) {
                e = e.replace("$" + t, n || "");
              }),
              o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
              e
            );
        };
      t(document).on("objectNeedsType.fb", function (o, i, a) {
        var s,
          r,
          c,
          l,
          d,
          u,
          f,
          p = a.src || "",
          h = !1;
        (s = t.extend(!0, {}, e, a.opts.media)),
          t.each(s, function (e, o) {
            if ((c = p.match(o.matcher))) {
              if (
                ((h = o.type),
                (f = e),
                (u = {}),
                o.paramPlace && c[o.paramPlace])
              ) {
                (d = c[o.paramPlace]),
                  "?" == d[0] && (d = d.substring(1)),
                  (d = d.split("&"));
                for (var i = 0; i < d.length; ++i) {
                  var s = d[i].split("=", 2);
                  2 == s.length &&
                    (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                }
              }
              return (
                (l = t.extend(!0, {}, o.params, a.opts[e], u)),
                (p =
                  "function" === t.type(o.url)
                    ? o.url.call(this, c, l, a)
                    : n(o.url, c, l)),
                (r =
                  "function" === t.type(o.thumb)
                    ? o.thumb.call(this, c, l, a)
                    : n(o.thumb, c)),
                "youtube" === e
                  ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                      return (
                        "&start=" +
                        ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                      );
                    }))
                  : "vimeo" === e && (p = p.replace("&%23", "#")),
                !1
              );
            }
          }),
          h
            ? (a.opts.thumb ||
                (a.opts.$thumb && a.opts.$thumb.length) ||
                (a.opts.thumb = r),
              "iframe" === h &&
                (a.opts = t.extend(!0, a.opts, {
                  iframe: { preload: !1, attr: { scrolling: "no" } },
                })),
              t.extend(a, {
                type: h,
                src: p,
                origSrc: a.src,
                contentSource: f,
                contentType:
                  "image" === h
                    ? "image"
                    : "gmap_place" == f || "gmap_search" == f
                    ? "map"
                    : "video",
              }))
            : p && (a.type = a.opts.defaultType);
      });
      var o = {
        youtube: {
          src: "https://www.youtube.com/iframe_api",
          class: "YT",
          loading: !1,
          loaded: !1,
        },
        vimeo: {
          src: "https://player.vimeo.com/api/player.js",
          class: "Vimeo",
          loading: !1,
          loaded: !1,
        },
        load: function (t) {
          var e,
            n = this;
          if (this[t].loaded)
            return void setTimeout(function () {
              n.done(t);
            });
          this[t].loading ||
            ((this[t].loading = !0),
            (e = document.createElement("script")),
            (e.type = "text/javascript"),
            (e.src = this[t].src),
            "youtube" === t
              ? (window.onYouTubeIframeAPIReady = function () {
                  (n[t].loaded = !0), n.done(t);
                })
              : (e.onload = function () {
                  (n[t].loaded = !0), n.done(t);
                }),
            document.body.appendChild(e));
        },
        done: function (e) {
          var n, o, i;
          "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (n = t.fancybox.getInstance()) &&
              ((o = n.current.$content.find("iframe")),
              "youtube" === e && void 0 !== YT && YT
                ? (i = new YT.Player(o.attr("id"), {
                    events: {
                      onStateChange: function (t) {
                        0 == t.data && n.next();
                      },
                    },
                  }))
                : "vimeo" === e &&
                  void 0 !== Vimeo &&
                  Vimeo &&
                  ((i = new Vimeo.Player(o)),
                  i.on("ended", function () {
                    n.next();
                  })));
        },
      };
      t(document).on({
        "afterShow.fb": function (t, e, n) {
          e.group.length > 1 &&
            ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
            o.load(n.contentSource);
        },
      });
    })(jQuery),
    (function (t, e, n) {
      "use strict";
      var o = (function () {
          return (
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.oRequestAnimationFrame ||
            function (e) {
              return t.setTimeout(e, 1e3 / 60);
            }
          );
        })(),
        i = (function () {
          return (
            t.cancelAnimationFrame ||
            t.webkitCancelAnimationFrame ||
            t.mozCancelAnimationFrame ||
            t.oCancelAnimationFrame ||
            function (e) {
              t.clearTimeout(e);
            }
          );
        })(),
        a = function (e) {
          var n = [];
          (e = e.originalEvent || e || t.e),
            (e =
              e.touches && e.touches.length
                ? e.touches
                : e.changedTouches && e.changedTouches.length
                ? e.changedTouches
                : [e]);
          for (var o in e)
            e[o].pageX
              ? n.push({ x: e[o].pageX, y: e[o].pageY })
              : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
          return n;
        },
        s = function (t, e, n) {
          return e && t
            ? "x" === n
              ? t.x - e.x
              : "y" === n
              ? t.y - e.y
              : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            : 0;
        },
        r = function (t) {
          if (
            t.is(
              'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
            ) ||
            n.isFunction(t.get(0).onclick) ||
            t.data("selectable")
          )
            return !0;
          for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
          return !1;
        },
        c = function (e) {
          var n = t.getComputedStyle(e)["overflow-y"],
            o = t.getComputedStyle(e)["overflow-x"],
            i =
              ("scroll" === n || "auto" === n) &&
              e.scrollHeight > e.clientHeight,
            a =
              ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
          return i || a;
        },
        l = function (t) {
          for (var e = !1; ; ) {
            if ((e = c(t.get(0)))) break;
            if (
              ((t = t.parent()),
              !t.length || t.hasClass("fancybox-stage") || t.is("body"))
            )
              break;
          }
          return e;
        },
        d = function (t) {
          var e = this;
          (e.instance = t),
            (e.$bg = t.$refs.bg),
            (e.$stage = t.$refs.stage),
            (e.$container = t.$refs.container),
            e.destroy(),
            e.$container.on(
              "touchstart.fb.touch mousedown.fb.touch",
              n.proxy(e, "ontouchstart")
            );
        };
      (d.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"),
          n(e).off(".fb.touch"),
          t.requestId && (i(t.requestId), (t.requestId = null)),
          t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
      }),
        (d.prototype.ontouchstart = function (o) {
          var i = this,
            c = n(o.target),
            d = i.instance,
            u = d.current,
            f = u.$slide,
            p = u.$content,
            h = "touchstart" == o.type;
          if (
            (h && i.$container.off("mousedown.fb.touch"),
            (!o.originalEvent || 2 != o.originalEvent.button) &&
              f.length &&
              c.length &&
              !r(c) &&
              !r(c.parent()) &&
              (c.is("img") ||
                !(
                  o.originalEvent.clientX >
                  c[0].clientWidth + c.offset().left
                )))
          ) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
              return o.stopPropagation(), void o.preventDefault();
            (i.realPoints = i.startPoints = a(o)),
              i.startPoints.length &&
                (u.touch && o.stopPropagation(),
                (i.startEvent = o),
                (i.canTap = !0),
                (i.$target = c),
                (i.$content = p),
                (i.opts = u.opts.touch),
                (i.isPanning = !1),
                (i.isSwiping = !1),
                (i.isZooming = !1),
                (i.isScrolling = !1),
                (i.canPan = d.canPan()),
                (i.startTime = new Date().getTime()),
                (i.distanceX = i.distanceY = i.distance = 0),
                (i.canvasWidth = Math.round(f[0].clientWidth)),
                (i.canvasHeight = Math.round(f[0].clientHeight)),
                (i.contentLastPos = null),
                (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                  top: 0,
                  left: 0,
                }),
                (i.sliderStartPos = n.fancybox.getTranslate(f)),
                (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                (i.sliderStartPos.top -= i.stagePos.top),
                (i.sliderStartPos.left -= i.stagePos.left),
                (i.contentStartPos.top -= i.stagePos.top),
                (i.contentStartPos.left -= i.stagePos.left),
                n(e)
                  .off(".fb.touch")
                  .on(
                    h
                      ? "touchend.fb.touch touchcancel.fb.touch"
                      : "mouseup.fb.touch mouseleave.fb.touch",
                    n.proxy(i, "ontouchend")
                  )
                  .on(
                    h ? "touchmove.fb.touch" : "mousemove.fb.touch",
                    n.proxy(i, "ontouchmove")
                  ),
                n.fancybox.isMobile &&
                  e.addEventListener("scroll", i.onscroll, !0),
                (((i.opts || i.canPan) &&
                  (c.is(i.$stage) || i.$stage.find(c).length)) ||
                  (c.is(".fancybox-image") && o.preventDefault(),
                  n.fancybox.isMobile &&
                    c.parents(".fancybox-caption").length)) &&
                  ((i.isScrollable = l(c) || l(c.parent())),
                  (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                  (1 === i.startPoints.length || u.hasError) &&
                    (i.canPan
                      ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                      : (i.isSwiping = !0),
                    i.$container.addClass("fancybox-is-grabbing")),
                  2 === i.startPoints.length &&
                    "image" === u.type &&
                    (u.isLoaded || u.$ghost) &&
                    ((i.canTap = !1),
                    (i.isSwiping = !1),
                    (i.isPanning = !1),
                    (i.isZooming = !0),
                    n.fancybox.stop(i.$content),
                    (i.centerPointStartX =
                      0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                      n(t).scrollLeft()),
                    (i.centerPointStartY =
                      0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                      n(t).scrollTop()),
                    (i.percentageOfImageAtPinchPointX =
                      (i.centerPointStartX - i.contentStartPos.left) /
                      i.contentStartPos.width),
                    (i.percentageOfImageAtPinchPointY =
                      (i.centerPointStartY - i.contentStartPos.top) /
                      i.contentStartPos.height),
                    (i.startDistanceBetweenFingers = s(
                      i.startPoints[0],
                      i.startPoints[1]
                    )))));
          }
        }),
        (d.prototype.onscroll = function (t) {
          var n = this;
          (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
        }),
        (d.prototype.ontouchmove = function (t) {
          var e = this;
          return void 0 !== t.originalEvent.buttons &&
            0 === t.originalEvent.buttons
            ? void e.ontouchend(t)
            : e.isScrolling
            ? void (e.canTap = !1)
            : ((e.newPoints = a(t)),
              void (
                (e.opts || e.canPan) &&
                e.newPoints.length &&
                e.newPoints.length &&
                ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
                (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
                (e.distance = s(e.newPoints[0], e.startPoints[0])),
                e.distance > 0 &&
                  (e.isSwiping
                    ? e.onSwipe(t)
                    : e.isPanning
                    ? e.onPan()
                    : e.isZooming && e.onZoom()))
              ));
        }),
        (d.prototype.onSwipe = function (e) {
          var a,
            s = this,
            r = s.instance,
            c = s.isSwiping,
            l = s.sliderStartPos.left || 0;
          if (!0 !== c)
            "x" == c &&
              (s.distanceX > 0 &&
              (s.instance.group.length < 2 ||
                (0 === s.instance.current.index &&
                  !s.instance.current.opts.loop))
                ? (l += Math.pow(s.distanceX, 0.8))
                : s.distanceX < 0 &&
                  (s.instance.group.length < 2 ||
                    (s.instance.current.index === s.instance.group.length - 1 &&
                      !s.instance.current.opts.loop))
                ? (l -= Math.pow(-s.distanceX, 0.8))
                : (l += s.distanceX)),
              (s.sliderLastPos = {
                top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                left: l,
              }),
              s.requestId && (i(s.requestId), (s.requestId = null)),
              (s.requestId = o(function () {
                s.sliderLastPos &&
                  (n.each(s.instance.slides, function (t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                      top: s.sliderLastPos.top,
                      left:
                        s.sliderLastPos.left +
                        o * s.canvasWidth +
                        o * e.opts.gutter,
                    });
                  }),
                  s.$container.addClass("fancybox-is-sliding"));
              }));
          else if (Math.abs(s.distance) > 10) {
            if (
              ((s.canTap = !1),
              r.group.length < 2 && s.opts.vertical
                ? (s.isSwiping = "y")
                : r.isDragging ||
                  !1 === s.opts.vertical ||
                  ("auto" === s.opts.vertical && n(t).width() > 800)
                ? (s.isSwiping = "x")
                : ((a = Math.abs(
                    (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                  )),
                  (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
              "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
            )
              return void (s.isScrolling = !0);
            (r.isDragging = s.isSwiping),
              (s.startPoints = s.newPoints),
              n.each(r.slides, function (t, e) {
                var o, i;
                n.fancybox.stop(e.$slide),
                  (o = n.fancybox.getTranslate(e.$slide)),
                  (i = n.fancybox.getTranslate(r.$refs.stage)),
                  e.$slide
                    .css({
                      transform: "",
                      opacity: "",
                      "transition-duration": "",
                    })
                    .removeClass("fancybox-animated")
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        " "
                      );
                    }),
                  e.pos === r.current.pos &&
                    ((s.sliderStartPos.top = o.top - i.top),
                    (s.sliderStartPos.left = o.left - i.left)),
                  n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left,
                  });
              }),
              r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
          }
        }),
        (d.prototype.onPan = function () {
          var t = this;
          if (
            s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
          )
            return void (t.startPoints = t.newPoints);
          (t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && i(t.requestId),
            (t.requestId = o(function () {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            }));
        }),
        (d.prototype.limitMovement = function () {
          var t,
            e,
            n,
            o,
            i,
            a,
            s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            d = s.distanceY,
            u = s.contentStartPos,
            f = u.left,
            p = u.top,
            h = u.width,
            g = u.height;
          return (
            (i = h > r ? f + l : f),
            (a = p + d),
            (t = Math.max(0, 0.5 * r - 0.5 * h)),
            (e = Math.max(0, 0.5 * c - 0.5 * g)),
            (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
            (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
            l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
            l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
            d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
            d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
            { top: a, left: i }
          );
        }),
        (d.prototype.limitPosition = function (t, e, n, o) {
          var i = this,
            a = i.canvasWidth,
            s = i.canvasHeight;
          return (
            n > a
              ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
              : (t = Math.max(0, a / 2 - n / 2)),
            o > s
              ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
              : (e = Math.max(0, s / 2 - o / 2)),
            { top: e, left: t }
          );
        }),
        (d.prototype.onZoom = function () {
          var e = this,
            a = e.contentStartPos,
            r = a.width,
            c = a.height,
            l = a.left,
            d = a.top,
            u = s(e.newPoints[0], e.newPoints[1]),
            f = u / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            x = v - e.centerPointStartY,
            w = l + (g + y),
            $ = d + (b + x),
            S = { top: $, left: w, scaleX: f, scaleY: f };
          (e.canTap = !1),
            (e.newWidth = p),
            (e.newHeight = h),
            (e.contentLastPos = S),
            e.requestId && i(e.requestId),
            (e.requestId = o(function () {
              n.fancybox.setTranslate(e.$content, e.contentLastPos);
            }));
        }),
        (d.prototype.ontouchend = function (t) {
          var o = this,
            s = o.isSwiping,
            r = o.isPanning,
            c = o.isZooming,
            l = o.isScrolling;
          if (
            ((o.endPoints = a(t)),
            (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
            o.$container.removeClass("fancybox-is-grabbing"),
            n(e).off(".fb.touch"),
            e.removeEventListener("scroll", o.onscroll, !0),
            o.requestId && (i(o.requestId), (o.requestId = null)),
            (o.isSwiping = !1),
            (o.isPanning = !1),
            (o.isZooming = !1),
            (o.isScrolling = !1),
            (o.instance.isDragging = !1),
            o.canTap)
          )
            return o.onTap(t);
          (o.speed = 100),
            (o.velocityX = (o.distanceX / o.dMs) * 0.5),
            (o.velocityY = (o.distanceY / o.dMs) * 0.5),
            r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
        }),
        (d.prototype.endSwiping = function (t, e) {
          var o = this,
            i = !1,
            a = o.instance.group.length,
            s = Math.abs(o.distanceX),
            r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
          (o.sliderLastPos = null),
            "y" == t && !e && Math.abs(o.distanceY) > 50
              ? (n.fancybox.animate(
                  o.instance.current.$slide,
                  {
                    top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                    opacity: 0,
                  },
                  200
                ),
                (i = o.instance.close(!0, 250)))
              : r && o.distanceX > 0
              ? (i = o.instance.previous(300))
              : r && o.distanceX < 0 && (i = o.instance.next(300)),
            !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
            o.$container.removeClass("fancybox-is-sliding");
        }),
        (d.prototype.endPanning = function () {
          var t,
            e,
            o,
            i = this;
          i.contentLastPos &&
            (!1 === i.opts.momentum || i.dMs > 350
              ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
              : ((t = i.contentLastPos.left + 500 * i.velocityX),
                (e = i.contentLastPos.top + 500 * i.velocityY)),
            (o = i.limitPosition(
              t,
              e,
              i.contentStartPos.width,
              i.contentStartPos.height
            )),
            (o.width = i.contentStartPos.width),
            (o.height = i.contentStartPos.height),
            n.fancybox.animate(i.$content, o, 366));
        }),
        (d.prototype.endZooming = function () {
          var t,
            e,
            o,
            i,
            a = this,
            s = a.instance.current,
            r = a.newWidth,
            c = a.newHeight;
          a.contentLastPos &&
            ((t = a.contentLastPos.left),
            (e = a.contentLastPos.top),
            (i = {
              top: e,
              left: t,
              width: r,
              height: c,
              scaleX: 1,
              scaleY: 1,
            }),
            n.fancybox.setTranslate(a.$content, i),
            r < a.canvasWidth && c < a.canvasHeight
              ? a.instance.scaleToFit(150)
              : r > s.width || c > s.height
              ? a.instance.scaleToActual(
                  a.centerPointStartX,
                  a.centerPointStartY,
                  150
                )
              : ((o = a.limitPosition(t, e, r, c)),
                n.fancybox.animate(a.$content, o, 150)));
        }),
        (d.prototype.onTap = function (e) {
          var o,
            i = this,
            s = n(e.target),
            r = i.instance,
            c = r.current,
            l = (e && a(e)) || i.startPoints,
            d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function (t) {
              var o = c.opts[t];
              if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                switch (o) {
                  case "close":
                    r.close(i.startEvent);
                    break;
                  case "toggleControls":
                    r.toggleControls();
                    break;
                  case "next":
                    r.next();
                    break;
                  case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                    break;
                  case "zoom":
                    "image" == c.type &&
                      (c.isLoaded || c.$ghost) &&
                      (r.canPan()
                        ? r.scaleToFit()
                        : r.isScaledDown()
                        ? r.scaleToActual(d, u)
                        : r.group.length < 2 && r.close(i.startEvent));
                }
            };
          if (
            (!e.originalEvent || 2 != e.originalEvent.button) &&
            (s.is("img") || !(d > s[0].clientWidth + s.offset().left))
          ) {
            if (
              s.is(
                ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
              )
            )
              o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
              if (
                !r.current.$content ||
                !r.current.$content.find(s).addBack().filter(s).length
              )
                return;
              o = "Content";
            }
            if (i.tapped) {
              if (
                (clearTimeout(i.tapped),
                (i.tapped = null),
                Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
              )
                return this;
              f("dblclick" + o);
            } else
              (i.tapX = d),
                (i.tapY = u),
                c.opts["dblclick" + o] &&
                c.opts["dblclick" + o] !== c.opts["click" + o]
                  ? (i.tapped = setTimeout(function () {
                      (i.tapped = null), r.isAnimating || f("click" + o);
                    }, 500))
                  : f("click" + o);
            return this;
          }
        }),
        n(e)
          .on("onActivate.fb", function (t, e) {
            e && !e.Guestures && (e.Guestures = new d(e));
          })
          .on("beforeClose.fb", function (t, e) {
            e && e.Guestures && e.Guestures.destroy();
          });
    })(window, document, jQuery),
    (function (t, e) {
      "use strict";
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          slideShow:
            '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
        },
        slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
      });
      var n = function (t) {
        (this.instance = t), this.init();
      };
      e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
          var t = this,
            n = t.instance,
            o = n.group[n.currIndex].opts.slideShow;
          (t.$button = n.$refs.toolbar
            .find("[data-fancybox-play]")
            .on("click", function () {
              t.toggle();
            })),
            n.group.length < 2 || !o
              ? t.$button.hide()
              : o.progress &&
                (t.$progress = e(
                  '<div class="fancybox-progress"></div>'
                ).appendTo(n.$refs.inner));
        },
        set: function (t) {
          var n = this,
            o = n.instance,
            i = o.current;
          i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
            ? n.isActive &&
              "video" !== i.contentType &&
              (n.$progress &&
                e.fancybox.animate(
                  n.$progress.show(),
                  { scaleX: 1 },
                  i.opts.slideShow.speed
                ),
              (n.timer = setTimeout(function () {
                o.current.opts.loop || o.current.index != o.group.length - 1
                  ? o.next()
                  : o.jumpTo(0);
              }, i.opts.slideShow.speed)))
            : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
        },
        clear: function () {
          var t = this;
          clearTimeout(t.timer),
            (t.timer = null),
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        start: function () {
          var t = this,
            e = t.instance.current;
          e &&
            (t.$button
              .attr(
                "title",
                (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
              )
              .removeClass("fancybox-button--play")
              .addClass("fancybox-button--pause"),
            (t.isActive = !0),
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0));
        },
        stop: function () {
          var t = this,
            e = t.instance.current;
          t.clear(),
            t.$button
              .attr(
                "title",
                (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
              )
              .removeClass("fancybox-button--pause")
              .addClass("fancybox-button--play"),
            (t.isActive = !1),
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        toggle: function () {
          var t = this;
          t.isActive ? t.stop() : t.start();
        },
      }),
        e(t).on({
          "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e));
          },
          "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o
              ? i && n.opts.slideShow.autoStart && i.start()
              : i && i.isActive && i.clear();
          },
          "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set();
          },
          "afterKeydown.fb": function (n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r ||
              !i.opts.slideShow ||
              (80 !== s && 32 !== s) ||
              e(t.activeElement).is("button,a,input") ||
              (a.preventDefault(), r.toggle());
          },
          "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop();
          },
        }),
        e(t).on("visibilitychange", function () {
          var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
          o && o.isActive && (t.hidden ? o.clear() : o.set());
        });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      var n = (function () {
        for (
          var e = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            n = {},
            o = 0;
          o < e.length;
          o++
        ) {
          var i = e[o];
          if (i && i[1] in t) {
            for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
            return n;
          }
        }
        return !1;
      })();
      if (n) {
        var o = {
          request: function (e) {
            (e = e || t.documentElement),
              e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
          },
          exit: function () {
            t[n.exitFullscreen]();
          },
          toggle: function (e) {
            (e = e || t.documentElement),
              this.isFullscreen() ? this.exit() : this.request(e);
          },
          isFullscreen: function () {
            return Boolean(t[n.fullscreenElement]);
          },
          enabled: function () {
            return Boolean(t[n.fullscreenEnabled]);
          },
        };
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
            fullScreen:
              '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
          },
          fullScreen: { autoStart: !1 },
        }),
          e(t).on(n.fullscreenchange, function () {
            var t = o.isFullscreen(),
              n = e.fancybox.getInstance();
            n &&
              (n.current &&
                "image" === n.current.type &&
                n.isAnimating &&
                ((n.isAnimating = !1),
                n.update(!0, !0, 0),
                n.isComplete || n.complete()),
              n.trigger("onFullscreenChange", t),
              n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
              n.$refs.toolbar
                .find("[data-fancybox-fullscreen]")
                .toggleClass("fancybox-button--fsenter", !t)
                .toggleClass("fancybox-button--fsexit", t));
          });
      }
      e(t).on({
        "onInit.fb": function (t, e) {
          var i;
          if (!n)
            return void e.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .remove();
          e && e.group[e.currIndex].opts.fullScreen
            ? ((i = e.$refs.container),
              i.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), o.toggle();
                }
              ),
              e.opts.fullScreen &&
                !0 === e.opts.fullScreen.autoStart &&
                o.request(),
              (e.FullScreen = o))
            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          e &&
            e.FullScreen &&
            70 === i &&
            (o.preventDefault(), e.FullScreen.toggle());
        },
        "beforeClose.fb": function (t, e) {
          e &&
            e.FullScreen &&
            e.$refs.container.hasClass("fancybox-is-fullscreen") &&
            o.exit();
        },
      });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      var n = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(
        !0,
        {
          btnTpl: {
            thumbs:
              '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
        },
        e.fancybox.defaults
      );
      var o = function (t) {
        this.init(t);
      };
      e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
          var e = this,
            n = t.group,
            o = 0;
          (e.instance = t),
            (e.opts = n[t.currIndex].opts.thumbs),
            (t.Thumbs = e),
            (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
          for (
            var i = 0, a = n.length;
            i < a && (n[i].thumb && o++, !(o > 1));
            i++
          );
          o > 1 && e.opts
            ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle();
              }),
              (e.isActive = !0))
            : e.$button.hide();
        },
        create: function () {
          var t,
            o = this,
            i = o.instance,
            a = o.opts.parentEl,
            s = [];
          o.$grid ||
            ((o.$grid = e(
              '<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>'
            ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
            o.$grid.on("click", "a", function () {
              i.jumpTo(e(this).attr("data-index"));
            })),
            o.$list ||
              (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
            e.each(i.group, function (e, n) {
              (t = n.thumb),
                t || "image" !== n.type || (t = n.src),
                s.push(
                  '<a href="javascript:;" tabindex="0" data-index="' +
                    e +
                    '"' +
                    (t && t.length
                      ? ' style="background-image:url(' + t + ')"'
                      : 'class="fancybox-thumbs-missing"') +
                    "></a>"
                );
            }),
            (o.$list[0].innerHTML = s.join("")),
            "x" === o.opts.axis &&
              o.$list.width(
                parseInt(o.$grid.css("padding-right"), 10) +
                  i.group.length * o.$list.children().eq(0).outerWidth(!0)
              );
        },
        focus: function (t) {
          var e,
            n,
            o = this,
            i = o.$list,
            a = o.$grid;
          o.instance.current &&
            ((e = i
              .children()
              .removeClass("fancybox-thumbs-active")
              .filter('[data-index="' + o.instance.current.index + '"]')
              .addClass("fancybox-thumbs-active")),
            (n = e.position()),
            "y" === o.opts.axis &&
            (n.top < 0 || n.top > i.height() - e.outerHeight())
              ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
              : "x" === o.opts.axis &&
                (n.left < a.scrollLeft() ||
                  n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
                i.parent().stop().animate({ scrollLeft: n.left }, t));
        },
        update: function () {
          var t = this;
          t.instance.$refs.container.toggleClass(
            "fancybox-show-thumbs",
            this.isVisible
          ),
            t.isVisible
              ? (t.$grid || t.create(),
                t.instance.trigger("onThumbsShow"),
                t.focus(0))
              : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update();
        },
        hide: function () {
          (this.isVisible = !1), this.update();
        },
        show: function () {
          (this.isVisible = !0), this.update();
        },
        toggle: function () {
          (this.isVisible = !this.isVisible), this.update();
        },
      }),
        e(t).on({
          "onInit.fb": function (t, e) {
            var n;
            e &&
              !e.Thumbs &&
              ((n = new o(e)),
              n.isActive && !0 === n.opts.autoStart && n.show());
          },
          "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250);
          },
          "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
          },
          "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
          },
        });
    })(document, jQuery),
    (function (t, e) {
      "use strict";
      function n(t) {
        var e = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        };
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return e[t];
        });
      }
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          share:
            '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
        },
        share: {
          url: function (t, e) {
            return (
              (!t.currentHash &&
                "inline" !== e.type &&
                "html" !== e.type &&
                (e.origSrc || e.src)) ||
              window.location
            );
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
        },
      }),
        e(t).on("click", "[data-fancybox-share]", function () {
          var t,
            o,
            i = e.fancybox.getInstance(),
            a = i.current || null;
          a &&
            ("function" === e.type(a.opts.share.url) &&
              (t = a.opts.share.url.apply(a, [i, a])),
            (o = a.opts.share.tpl
              .replace(
                /\{\{media\}\}/g,
                "image" === a.type ? encodeURIComponent(a.src) : ""
              )
              .replace(/\{\{url\}\}/g, encodeURIComponent(t))
              .replace(/\{\{url_raw\}\}/g, n(t))
              .replace(
                /\{\{descr\}\}/g,
                i.$caption ? encodeURIComponent(i.$caption.text()) : ""
              )),
            e.fancybox.open({
              src: i.translate(i, o),
              type: "html",
              opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                  i.$refs.container.one("beforeClose.fb", function () {
                    t.close(null, 0);
                  }),
                    e.$content
                      .find(".fancybox-share__button")
                      .click(function () {
                        return (
                          window.open(
                            this.href,
                            "Share",
                            "width=550, height=450"
                          ),
                          !1
                        );
                      });
                },
                mobile: { autoFocus: !1 },
              },
            }));
        });
    })(document, jQuery),
    (function (t, e, n) {
      "use strict";
      function o() {
        var e = t.location.hash.substr(1),
          n = e.split("-"),
          o =
            n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
              ? parseInt(n.pop(-1), 10) || 1
              : 1,
          i = n.join("-");
        return { hash: e, index: o < 1 ? 1 : o, gallery: i };
      }
      function i(t) {
        "" !== t.gallery &&
          n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
            .eq(t.index - 1)
            .focus()
            .trigger("click.fb-start");
      }
      function a(t) {
        var e, n;
        return (
          !!t &&
          ((e = t.current ? t.current.opts : t.opts),
          "" !==
            (n =
              e.hash ||
              (e.$orig
                ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
                : "")) && n)
        );
      }
      n.escapeSelector ||
        (n.escapeSelector = function (t) {
          return (t + "").replace(
            /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            }
          );
        }),
        n(function () {
          !1 !== n.fancybox.defaults.hash &&
            (n(e).on({
              "onInit.fb": function (t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash &&
                  ((n = o()),
                  (i = a(e)) &&
                    n.gallery &&
                    i == n.gallery &&
                    (e.currIndex = n.index - 1));
              },
              "beforeShow.fb": function (n, o, i, s) {
                var r;
                i &&
                  !1 !== i.opts.hash &&
                  (r = a(o)) &&
                  ((o.currentHash =
                    r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                  t.location.hash !== "#" + o.currentHash &&
                    (s && !o.origHash && (o.origHash = t.location.hash),
                    o.hashTimer && clearTimeout(o.hashTimer),
                    (o.hashTimer = setTimeout(function () {
                      "replaceState" in t.history
                        ? (t.history[s ? "pushState" : "replaceState"](
                            {},
                            e.title,
                            t.location.pathname +
                              t.location.search +
                              "#" +
                              o.currentHash
                          ),
                          s && (o.hasCreatedHistory = !0))
                        : (t.location.hash = o.currentHash),
                        (o.hashTimer = null);
                    }, 300))));
              },
              "beforeClose.fb": function (n, o, i) {
                i &&
                  !1 !== i.opts.hash &&
                  (clearTimeout(o.hashTimer),
                  o.currentHash && o.hasCreatedHistory
                    ? t.history.back()
                    : o.currentHash &&
                      ("replaceState" in t.history
                        ? t.history.replaceState(
                            {},
                            e.title,
                            t.location.pathname +
                              t.location.search +
                              (o.origHash || "")
                          )
                        : (t.location.hash = o.origHash)),
                  (o.currentHash = null));
              },
            }),
            n(t).on("hashchange.fb", function () {
              var t = o(),
                e = null;
              n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return (e = i), !1;
              }),
                e
                  ? e.currentHash === t.gallery + "-" + t.index ||
                    (1 === t.index && e.currentHash == t.gallery) ||
                    ((e.currentHash = null), e.close())
                  : "" !== t.gallery && i(t);
            }),
            setTimeout(function () {
              n.fancybox.getInstance() || i(o());
            }, 50));
        });
    })(window, document, jQuery),
    (function (t, e) {
      "use strict";
      var n = new Date().getTime();
      e(t).on({
        "onInit.fb": function (t, e, o) {
          e.$refs.stage.on(
            "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
            function (t) {
              var o = e.current,
                i = new Date().getTime();
              e.group.length < 2 ||
                !1 === o.opts.wheel ||
                ("auto" === o.opts.wheel && "image" !== o.type) ||
                (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") ||
                  ((t = t.originalEvent || t),
                  i - n < 250 ||
                    ((n = i),
                    e[
                      (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                        ? "next"
                        : "previous"
                    ]())));
            }
          );
        },
      });
    })(document, jQuery);
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    var custom_check_html =
      '<div class="custom-phone-validation" id="custom-phone-validation">\
        <p>Проверьте правильность номера телефона</p>\
        <button type="button" class="button green" id="phone-valid">Телефон верный</button>\
        <button type="button" class="button" id="phone-reset">Ввести заново</button>\
       </div>';
    $("body").on(
      "keydown",
      "input[type=tel], input[type=tel2]",
      function (event) {
        if ($.inArray(event.keyCode, [229, 8]) != -1 && $(this).val() == "+7")
          $(this).val("");
      }
    );
    $("body").on(
      "input",
      "input[type=tel], input[type=tel2]",
      function (event) {
        let obj = this,
          val = $(obj).val(),
          new_val = "",
          custom_valid = true;
        for (let i = 0; i < val.length; i++) {
          if (!isNaN(parseInt(val[i])) && new_val.length <= 11) {
            if (i == 0) {
              if (parseInt(val[i]) == 8 || parseInt(val[i]) == 7) {
                new_val = "+7";
              } else {
                new_val = "+7" + val[i];
              }
            } else if (new_val.length == 2 && parseInt(val[i]) == 7) {
              new_val = new_val;
            } else {
              new_val = new_val + val[i];
            }
          } else if (i == 0 && val[i] == "+") {
            new_val = "+7";
          }
        }
        val = "";
        for (let i = 0; i < new_val.length; i++) {
          if (i == 2) val = val + " (";
          else if (i == 5) val = val + ") ";
          else if (i == 8 || i == 10) val = val + "-";
          if (new_val[i]) val = val + new_val[i];
          else val = val + "_";
        }
        if (new_val.length == 12) {
          if (parseInt(new_val[2]) != 9) {
            custom_valid = false;
          }
          if (
            custom_valid &&
            $("body").find("#custom-phone-validation").length > 0
          ) {
            $("body").find("#custom-phone-validation").detach();
            $(obj)
              .parents("form")
              .find("[type=submit]")
              .prop("disabled", false);
          } else if (
            !custom_valid &&
            $("body").find("#custom-phone-validation").length == 0
          ) {
            $(obj).after(custom_check_html);
            $(obj).parents("form").find("[type=submit]").prop("disabled", true);
          }
        } else if ($("body").find("#custom-phone-validation").length > 0) {
          $("body").find("#custom-phone-validation").detach();
          $(obj).parents("form").find("[type=submit]").prop("disabled", false);
        }
        $(this).val(val);
      }
    );
    $("body").on(
      "change",
      "input[type=tel], input[type=tel2]",
      function (event) {
        let val = $(this).val();
        if (val.length < 18) {
          $(this).val("");
        }
      }
    );
    $("body").on("click", "#phone-valid", function (event) {
      $(this).parents("form").find("[type=submit]").prop("disabled", false);
      console.log($("body").find("#custom-phone-validation"));
      $("body").find("#custom-phone-validation").detach();
    });
    $("body").on("click", "#phone-reset", function (event) {
      $(this).parents("form").find("[type=submit]").prop("disabled", false);
      $(this).parent().prev().val("");
      $("body").find("#custom-phone-validation").detach();
      console.log($("body").find("#custom-phone-validation"));
    });
  });
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    const minus = $(window).height() + 500;
    if (navigator.userAgent.indexOf("Chrome-Lighthouse") == -1) {
      let swiper_script = document.createElement("script"),
        swiper_style = document.createElement("link");
      swiper_style.rel = "stylesheet";
      swiper_style.href =
        "/wp-content/themes/super_dom/css/swiper-bundle.min.css";
      document.getElementsByTagName("head")[0].prepend(swiper_style);
      swiper_script.onload = function () {
        sliders_init();
      };
      swiper_script.src =
        "/wp-content/themes/super_dom/js/swiper-bundle.min.js";
      document.getElementsByTagName("body")[0].appendChild(swiper_script);
    }
    function sliders_init() {
      if ($(".portfolio-main-slider").length > 0) {
        function pms_init() {
          let top = $(".portfolio-main-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", pms_init);
            let portfolio_main_slider = new Swiper(".portfolio-main-slider", {
              loop: false,
              spaceBetween: 15,
              pagination: { el: ".swiper-pagination", clickable: true },
              navigation: {
                nextEl: ".swiper-button-next.pm-btn",
                prevEl: ".swiper-button-prev.pm-btn",
              },
            });
          }
        }
        $(window).on("scroll", pms_init);
      }
      if ($(".steps-slider").length > 0) {
        function ss_init() {
          let top = $(".steps-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", ss_init);
            let steps_slider = new Swiper(".steps-slider", {
              autoHeight: true,
            });
            steps_slider.on("slideChange", function (event) {
              let step = event.activeIndex;
              $(".six-steps-btn.active").removeClass("active");
              $(".six-steps-btn[data-step=" + step + "]").addClass("active");
            });
            $("body").on("click", ".six-steps-btn", function (event) {
              event.preventDefault();
              if (!$(this).hasClass("active")) {
                let step = $(this).data("step");
                steps_slider.slideTo(step, 300, false);
                $(".six-steps-btn.active").removeClass("active");
                $(this).addClass("active");
              }
            });
          }
        }
        $(window).on("scroll", ss_init);
      }
      if ($(".specialists-slider").length > 0) {
        function sps_init() {
          let top = $(".specialists-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", sps_init);
            let specialists_slider = new Swiper(".specialists-slider", {
              loop: false,
              slidesPerView: 1,
              spaceBetween: 0,
              pagination: {
                el: ".swiper-pagination.specialists-slider-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next.spec-button-next",
                prevEl: ".swiper-button-prev.spec-button-prev",
              },
              breakpoints: { 768: { slidesPerView: 3, spaceBetween: 30 } },
            });
          }
        }
        $(window).on("scroll", sps_init);
      }
      if ($(".clients-photo-slider").length > 0) {
        function ocs_init() {
          let top = $(".clients-photo-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", ocs_init);
            let our_clients_swiper = new Swiper(".clients-photo-slider", {
              loop: false,
              slidesPerView: 5,
              navigation: {
                nextEl: ".clients-photo-slider-wrapper .swiper-button-next",
                prevEl: ".clients-photo-slider-wrapper .swiper-button-prev",
              },
              lazy: { loadPrevNext: false },
              breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 20 },
                400: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                992: { slidesPerView: 5, spaceBetween: 20 },
              },
            });
          }
        }
        $(window).on("scroll", ocs_init);
      }
      if ($(".reviews-slider").length > 0) {
        function reviews_slider_init() {
          let top = $(".reviews-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", reviews_slider_init);
            let reviews_slider = new Swiper(".reviews-slider", {
              loop: false,
              slidesPerView: 2,
              spaceBetween: 0,
              navigation: {
                nextEl: ".swiper-button-next.swiper-button-rs",
                prevEl: ".swiper-button-prev.swiper-button-rs",
              },
              breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
              },
            });
          }
        }
        $(window).on("scroll", reviews_slider_init);
      }
      if ($(".directors-videos").length > 0) {
        function dir_v_init() {
          let top = $(".directors-videos").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", dir_v_init);
            let directors_videos_slider = new Swiper(".directors-videos", {
              loop: false,
              slidesPerView: 3,
              spaceBetween: 0,
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 20 },
                992: { slidesPerView: 2, spaceBetween: 20 },
              },
            });
          }
        }
        $(window).on("scroll", dir_v_init);
      }
      if ($(".certificates-slider").length > 0) {
        function certs_init() {
          let top = $(".certificates-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", certs_init);
            let certificates_slider = new Swiper(".certificates-slider", {
              loop: false,
              slidesPerView: 2,
              spaceBetween: 10,
              navigation: {
                nextEl: ".swiper-button-next.swiper-button-cs",
                prevEl: ".swiper-button-prev.swiper-button-cs",
              },
              breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 40 },
              },
            });
          }
        }
        $(window).on("scroll", certs_init);
      }
      if ($(window).width() <= 992) {
        if ($("#home-pluses1").find(".gflag-item-box").length > 0) {
          let data = $("#home-pluses1").find(".gflag-item-box"),
            html =
              '<div class="swiper-container home-pluses1-slider"><div class="swiper-wrapper">';
          $.each(data, function (index, item) {
            let item_html =
              '<div class="swiper-slide">' + item.outerHTML + "</div>";
            html += item_html;
            $(item).parent().detach();
          });
          html +=
            '</div></div><div class="swiper-button-next hp1-button-next"></div><div class="swiper-button-prev hp1-button-prev"></div>';
          $("#home-pluses1 .flex-row").append(
            '<div style="width: 100%;">' + html + "</div>"
          );
          new Swiper(".home-pluses1-slider", {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 0,
            setWrapperSize: true,
            navigation: {
              nextEl: ".swiper-button-next.hp1-button-next",
              prevEl: ".swiper-button-prev.hp1-button-prev",
            },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 20 },
            },
          });
          $(".footer-catalog-menu-wrapper ul.menu > li > ul").slideToggle();
          $("body").on(
            "click",
            ".footer-catalog-menu-wrapper ul.menu > li > a",
            function (event) {
              event.preventDefault();
              $(this).next().slideToggle();
            }
          );
        }
      }
      if ($(".pluses-slider").length > 0) {
        function pluses_init() {
          let top = $(".pluses-slider").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", pluses_init);
            let pluses_slider = new Swiper(".pluses-slider", {
              loop: false,
              slidesPerView: 1,
              spaceBetween: 0,
              setWrapperSize: true,
              navigation: {
                nextEl: ".swiper-button-next.ps-button",
                prevEl: ".swiper-button-prev.ps-button",
              },
              breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 20 },
              },
            });
          }
        }
        $(window).on("scroll", pluses_init);
      }
      if ($(".seo-swiper").length > 0) {
        function seo_swiper_init() {
          let top = $(".seo-swiper").offset().top;
          if ($(window).scrollTop() > top - minus) {
            $(window).off("scroll", seo_swiper_init);
            $.each(seo_data, function (key, item_data) {
              let item_btns_list = $("body").find("[data-group=" + key + "]");
              $.each(item_btns_list, function (index, item) {
                seo_data[key]["group_list"].push($.trim($(item).html()));
              });
            });
            let seo_swiper_args = {
                loop: false,
                slidesPerView: "auto",
                spaceBetween: 15,
                slidesPerGroup: 1,
                navigation: {
                  nextEl: ".swiper-button-next.seo-swiper-button",
                  prevEl: ".swiper-button-prev.seo-swiper-button",
                },
                breakpoints: {
                  768: { slidesPerGroup: 3 },
                  992: { slidesPerGroup: 5 },
                },
              },
              seo_swiper = new Swiper(".seo-swiper", seo_swiper_args);
            let seo_html_data = [],
              seo_html;
            $.each(seo_data, function (key, item_data) {
              let item_html =
                '<div class="seo-box-item">\
           <div class="seo-box-item-title">' +
                item_data["group_title"] +
                '</div>\
           <div class="seo-box-item-links">' +
                item_data["group_list"].join("") +
                "</div>\
          </div>";
              seo_html_data.push(item_html);
            });
            seo_html =
              '<div class="seo-links-wrap" id="seo-links-wrap" style="display: none;">' +
              seo_html_data.join("") +
              "</div>";
            window.has_seo_wrap = false;
            $("body").on("click", ".seo-slider-control", function (event) {
              event.preventDefault();
              if (!window.has_seo_wrap) {
                $(".seo-swiper").after(seo_html);
                window.has_seo_wrap = true;
              }
              let obj = this;
              $(".seo-swiper").slideToggle();
              $("#seo-links-wrap").slideToggle();
              $(".seo-swiper-button").slideToggle();
              if ($(".seo-slider-control").html() == "Скрыть все")
                $(".seo-slider-control").html("Смотреть все");
              else $(".seo-slider-control").html("Скрыть все");
              $(obj)
                .parents(".catalog-seo-slider")
                .toggleClass("is-not-slider");
            });
          }
        }
        $(window).on("scroll", seo_swiper_init);
      }
      if ($(".gallery-slider").length > 0) {
        let thumbs_slider = new Swiper(".thumbs-slider", {
          spaceBetween: 10,
          slidesPerView: 4,
          watchOverflow: true,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });
        let gallery_slider_args = {
          spaceBetween: 10,
          thumbs: { swiper: thumbs_slider },
        };
        let gallery_slider = new Swiper(".gallery-slider", gallery_slider_args);
        $(window).on("beforeprint", function (event) {
          gallery_slider.destroy();
          $(".gallery-slider").removeClass("swiper-container");
          $(".gallery-slider > .gallery-swiper-wrapper").removeClass(
            "swiper-wrapper"
          );
        });
        $(window).on("afterprint", function (event) {
          $(".gallery-slider").addClass("swiper-container");
          $(".gallery-slider > .gallery-swiper-wrapper").addClass(
            "swiper-wrapper"
          );
          gallery_slider = new Swiper(".gallery-slider", gallery_slider_args);
        });
      }
      if ($(".project-item-gallery").length > 0) {
        let p_galleries = [];
        $.each($(".project-item-gallery"), function (index, gallery_item) {
          let p_gallery = new Swiper(gallery_item, {
            loop: false,
            spaceBetween: 10,
            navigation: {
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            },
          });
          p_galleries.push(p_gallery);
        });
      }
      if ($(".photo-video-swiper").length > 0) {
        let photo_video_swiper = new Swiper(".photo-video-swiper", {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
        });
      }
    }
  });
} catch (e) {}
try {
  document.addEventListener("sd-form-submit", function (event) {
    console.log(event.target);
  });
  function init() {
    if (window.is_init) return;
    window.is_init = true;
    let myMap = new ymaps.Map("foorter-contacts-map", {
      center: coords,
      zoom: 17,
    });
    myMap.geoObjects.add(
      new ymaps.Placemark(
        coords,
        { balloonContent: address },
        { preset: "islands#icon", iconColor: "#0095b6" }
      )
    );
    if (coords_2 != undefined) {
      myMap.geoObjects.add(
        new ymaps.Placemark(
          coords_2,
          { balloonContent: address_2 },
          { preset: "islands#icon", iconColor: "#0095b6" }
        )
      );
    }
  }
  function load_map_script(is_portfolio) {
    if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) return;
    if (is_portfolio && window.is_ymaps_load) {
      ymaps.ready(portfolio_init);
      return;
    } else if (typeof coords == "object" && window.is_ymaps_load) {
      ymaps.ready(init);
      return;
    }
    let script = document.createElement("script");
    script.onload = function () {
      window.is_ymaps_load = true;
      if (is_portfolio) ymaps.ready(portfolio_init);
      else ymaps.ready(init);
    };
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=ed1533bb-d4a7-47ad-97c6-13181f0c587d&lang=ru_RU&ver=5.4.1";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  jQuery(document).ready(function ($) {
    const ajax_url = "/wp-admin/admin-ajax.php";
    window.is_mobile = false;
    window.is_ymaps_load = false;
    window.is_modal_ymaps_load = false;
    window.is_load_mobile_menu = false;
    if (typeof coords == "object" && typeof ymaps == "object")
      ymaps.ready(init);
    else if (typeof coords == "object" && typeof ymaps != "object")
      load_map_script(false);
    $("body").on("click", ".accordion-button", function (event) {
      let obj = this,
        parent = $(obj).parents(".accordion"),
        show = $(parent)
          .find(".accordion-collapse.show")
          .parents(".accordion-item"),
        has_collapsed = false;
      if ($(obj).hasClass("collapsed")) has_collapsed = true;
      $(show).find(".accordion-collapse").removeClass("show").slideToggle();
      $(show).find(".accordion-button").addClass("collapsed");
      if (has_collapsed) {
        $(obj).removeClass("collapsed");
        $(obj).parent().next().addClass("show");
        $(obj).parent().next().slideToggle();
      }
    });
    function create_mobile_menu(menu, id) {
      let new_html = $(menu).clone();
      $(new_html).find(".mega-menu").removeClass("mega-menu");
      $(new_html).find(".columns-4").next().addClass("columns-4");
      if (id == "main") {
        let dop_html =
          $(".header-socials-wrapper").html() +
          $(".header-button-wrapper").html() +
          $(".header-phone-wrapper").html();
        new_html =
          '<div class="mobile-menu-wrapper" id="' +
          id +
          '"><a href="#" class="mobile-menu-close">&times;</a><ul class="menu">' +
          $(new_html).html() +
          "</ul>" +
          dop_html +
          "</div>";
      } else {
        new_html =
          '<div class="mobile-menu-wrapper" id="' +
          id +
          '"><a href="#" class="mobile-menu-close">&times;</a><ul class="menu">' +
          $(new_html).html() +
          "</ul></div>";
      }
      $("body").append(new_html);
    }
    $.fancybox.defaults.backFocus = false;
    $.fancybox.defaults.closeClickOutside = true;
    if (
      localStorage.getItem("right-fixed-hidden") &&
      localStorage.getItem("right-fixed-hidden") == 1
    )
      $(".right-fixed-box").addClass("is-hidden");
    $("body").on("click", "a", function (event) {
      let social_data = {
        "#viber": ".widget-icon-item-viber",
        "#telegram": ".widget-icon-item-telegram",
        "#whatsapp": ".widget-icon-item-whatsapp",
        "#ok": ".widget-icon-item-odnoklassniki",
      };
      let href = $(this).attr("href");
      if (href == "#") {
        event.preventDefault();
      } else if (social_data[href] != undefined) {
        if ($("body").find(social_data[href]).length > 0) {
          event.preventDefault();
          let social_url = $("body").find(social_data[href]).attr("href");
          if (isMobileOrTablet())
            social_url = social_url.replace("[action]", "add?number=");
          else social_url = social_url.replace("[action]", "chat?number=+");
          window.open(social_url);
        } else {
          $("[data-modal=#not-work-modal]").trigger("click");
        }
      } else if (href == "#akczii") {
        location.href = "/akczii/";
      } else if (href == "#top") {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
      }
    });
    $.each(
      $("body").find(".portfolio-slide-works-list"),
      function (index, works_item) {
        let span_data = $(works_item).find("span");
        $(works_item).height($(span_data[0]).height());
      }
    );
    $("body").on(
      "click",
      ".portfolio-slide-works-read-more a",
      function (event) {
        event.preventDefault();
        let obj = this;
        $(obj).parent().prev().height("auto");
        $(obj).parent().detach();
      }
    );
    $.each($("body").find(".portfolio-slide"), function (index, slide_item) {
      let add_html = $(slide_item).find(".portfolio-slide-works").clone(),
        add_html2 = $(slide_item).find(".portfolio-slide-review").clone();
      $(add_html).addClass("portfolio-slide-works-mobile");
      $(add_html2).addClass("portfolio-slide-review-mobile");
      $(slide_item).find(".portfolio-slide-gallery").append(add_html2);
      $(slide_item).find(".portfolio-slide-gallery").append(add_html);
    });
    $("body").on("click", ".review-item-read-more", function (event) {
      event.preventDefault();
      let full = $(this).prev();
      $(full).slideToggle();
    });
    $("body").on("click", ".review-item-text-close", function (event) {
      event.preventDefault();
      let full = $(this).parent();
      $(full).slideToggle();
    });
    $("body").on("change", ".file-label input[type=file]", function (event) {
      event.preventDefault();
      let obj = this,
        parent = $(obj).parent(),
        files = obj.files,
        files_names = [];
      $.each(files, function (index, file) {
        files_names.push(file.name);
      });
      $(parent).find(".files-list").html(files_names.join(", "));
    });
    if ($("body").find(".slider-item").length > 0) {
      let slides = $("body").find(".slider-item");
      $.each(slides, function (index, slider) {
        let obj = slider,
          id = "#" + $(obj).attr("id"),
          input = $(obj).data("target"),
          min = parseFloat($(obj).data("min")),
          max = parseFloat($(obj).data("max")),
          min_value = parseFloat($(obj).data("value-min")),
          max_value = parseFloat($(obj).data("value-max")),
          step = parseFloat($(obj).data("step")),
          comments = $(obj).next().find("span");
        $(id).slider({
          range: true,
          min: min,
          max: max,
          values: [min_value, max_value],
          step: step,
          change: function (event, ui) {
            let values = ui.values;
            $(input + "-min").val(values[0]);
            $(input + "-max").val(values[1]);
          },
          slide: function (event, ui) {
            let values = ui.values;
            $(comments[0]).html(values[0]);
            $(comments[1]).html(values[1]);
          },
        });
      });
    }
    $("body").on("click", ".project-item-like", function (event) {
      event.preventDefault();
      let obj = this,
        post_id = $(this).data("id");
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "json",
        data: { action: "liked", post_id: post_id },
      })
        .done(function (json) {
          $(obj).find(".number").html(json.count);
          $(obj).toggleClass("is-liked");
          if (json.favorites_count == 0) {
            $("#mobile-bottom-favorites").hide();
            $("#right-fixed-favorites-count").hide();
            $("#right-fixed-item-favorites i")
              .removeClass("fa-heart")
              .addClass("fa-heart-o");
            $(".menu-item-favorite").removeClass("has-favorite");
          } else {
            $("#mobile-bottom-favorites-count").html(json.favorites_count);
            $("#right-fixed-favorites-count").html(json.favorites_count);
            $(".menu-item-favorite").attr(
              "data-count",
              "(" + json.favorites_count + ")"
            );
          }
          if (json.favorites_count == 1) {
            $("#mobile-bottom-favorites").show();
            $("#right-fixed-favorites-count").show();
            $("#right-fixed-item-favorites i")
              .removeClass("fa-heart-o")
              .addClass("fa-heart");
            $(".menu-item-favorite").addClass("has-favorite");
          }
          if ($("#is_favorites").length > 0 && json.is_delete)
            $(obj).parents(".project-item-wrapper").detach();
        })
        .fail(function (error) {
          console.log(error);
        });
    });
    $("body").on(
      "click",
      ".single-top-btns .six-steps-btn, .single-second-btns .six-steps-btn, .videoblock-btns .six-steps-btn, .vakancies-tabs .vakancies-tab, .cityes-tabs-wrapper .cityes-tab",
      function (event) {
        let obj = this,
          parent = $(obj).parent(),
          target = $(obj).data("target");
        $(parent).find(".active").removeClass("active");
        $(obj).addClass("active");
        $(parent).next().find(".single-tab-item").hide();
        $(target).show();
      }
    );
    $("body").on("click", ".features-item-special-link", function (event) {
      event.preventDefault();
      let obj = this,
        action = $(obj).data("action");
      if (action == "print") window.print();
    });
    $("body").on("click", ".has-td-content", function (event) {
      let obj = this;
      $(obj).toggleClass("is-opened");
      $(obj).next().slideToggle();
    });
    $("body").on(
      "click",
      ".new-cat-description-dropdown-title",
      function (event) {
        event.preventDefault();
        $(".new-cat-description-dropdown-list").slideToggle();
      }
    );
    $("body").on(
      "click",
      ".new-cat-description-dropdown-list li a",
      function (event) {
        event.preventDefault();
        let obj = this,
          parent = $(obj).parent(),
          target = $(obj).data("target"),
          title = $(obj).data("title");
        if ($(parent).hasClass("active")) {
        } else {
          $(".new-cd-table").hide();
          $(".new-cat-description-dropdown-list li.active").removeClass(
            "active"
          );
          $(obj).addClass("active");
          $(".new-cat-description-dropdown-list").slideToggle();
          $(target).slideToggle();
          $(".new-cat-description-title > span").html(title);
          $(parent).addClass("active");
        }
      }
    );
    $("body").on("click", ".right-fixed-close", function (event) {
      $(".right-fixed-box").addClass("is-hidden");
      localStorage.setItem("right-fixed-hidden", 1);
    });
    $("body").on("click", ".right-fixed-open", function (event) {
      $(".right-fixed-box").removeClass("is-hidden");
      localStorage.setItem("right-fixed-hidden", 0);
    });
    $("body").on("click", ".add-bookmark", function (event) {
      alert("Нажмите Ctrl+D");
    });
    $("body").on("click", ".load-more-link", function (event) {
      let $obj = $(this);
      if ($obj.attr("href") == "#") event.preventDefault();
      else return;
      if (
        $(window).width() < 576 &&
        $("body").find(".default-hide-mobile").length > 0
      ) {
        $.each($("body").find(".default-hide-mobile"), function (index, item) {
          if (index < 10) $(item).removeClass("default-hide-mobile");
        });
      } else {
        page = page + 1;
        $.ajax({
          url: ajax_url,
          type: "POST",
          dataType: "json",
          data: {
            action: "load_more",
            query: query,
            page: page,
            template: template,
          },
          beforeSend: function () {
            $obj.addClass("is-load");
          },
        })
          .done(function (json) {
            $("#after-projects").before(json.html);
            if (page == max_pages) $obj.detach();
          })
          .fail(function (error) {
            alert("Ошибка");
            console.log(error);
          })
          .always(function () {
            $obj.removeClass("is-load");
          });
      }
    });
    $.each($("body").find(".mega-menu a"), function (index, item) {
      if ($(item).attr("href") == "#") $(item).addClass("link-no-link");
    });
    $("body").on("click", ".mobile-menu-btn", function (event) {
      event.preventDefault();
      if (!window.is_load_mobile_menu) {
        let menu_html = $("#menu-osnovnoe-menyu").clone();
        $(menu_html).attr("id", "menu-osnovnoe-menyu-2");
        $("#menu-osnovnoe-menyu").after(menu_html);
        $.each(
          $("body").find("#menu-osnovnoe-menyu-2 .mega-menu > ul > li"),
          function (index, menu_item) {
            let new_html = $(menu_item).find(".sub-menu").html();
            $(menu_item).replaceWith(new_html);
          }
        );
        create_mobile_menu("#menu-osnovnoe-menyu-2 .mega-menu > ul", "katalog");
        $("#menu-osnovnoe-menyu-2 .mega-menu > ul").detach();
        $("#menu-osnovnoe-menyu-2 .mega-menu").removeClass(
          "menu-item-has-children"
        );
        create_mobile_menu("#menu-osnovnoe-menyu-2", "main");
        $("#menu-osnovnoe-menyu-2").detach();
      }
      let menu = $(this).data("menu");
      $(menu).toggleClass("is-open");
      $("body").toggleClass("is-body-hidden");
      $(".mobile-menu-overlay").show();
    });
    $("body").on(
      "click",
      ".mobile-menu-close, .mobile-menu-overlay",
      function (event) {
        event.preventDefault();
        $(".mobile-menu-wrapper.is-open").toggleClass("is-open");
        $("body").toggleClass("is-body-hidden");
        $(".mobile-menu-overlay").hide();
      }
    );
    $("body").on("click", ".mobile-menu-arrow", function (event) {
      event.preventDefault();
      let obj = this,
        sub_menu = $(obj).prev();
      $(sub_menu).slideToggle();
      $(obj).toggleClass("is-sub-open");
    });
    $("body").on("click", ".sidebar-open-mobile", function (event) {
      event.preventDefault();
      $(".sidebar-filter-overlay").show();
      $(".sidebar-filter-wrapper").show();
    });
    $("body").on(
      "click",
      ".sidebar-filter-overlay, .mobile-filter-close",
      function (event) {
        event.preventDefault();
        $(".sidebar-filter-overlay").hide();
        $(".sidebar-filter-wrapper").hide();
      }
    );
    $("body").on("click", function (event) {
      if (
        !$(event.target).hasClass("new-cat-description-dropdown-box") &&
        $(event.target).parents(".new-cat-description-dropdown-box").length == 0
      )
        $(".new-cat-description-dropdown-list").slideUp();
    });
    $("body").on("click", ".open-all-filters", function (event) {
      event.preventDefault();
      $(".filter-group-default-hide").slideToggle();
      $(".open-all-filters").toggle();
      $("#sidebar-filter").toggleClass("is-open-all-filters");
    });
    $("body").on("change", "#sidebar-filter input", function (event) {
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "json",
        data: $("#sidebar-filter").serialize() + "&action=get_sidebar_count",
      })
        .done(function (json) {
          let top = $(event.target).offset().top,
            left =
              $(event.target).parents(".form-group").offset().left +
              $(event.target).parents(".form-group").width();
          $("#sidebar-fixed-box .sidebar-fixed-box-count").html(
            json.post_count + " штук"
          );
          $("#sidebar-fixed-box").show();
          $("#sidebar-fixed-box").css({ top: top + "px", left: left + "px" });
        })
        .fail(function (error) {
          console.log(error);
        });
    });
    $("body").on("click", "#sidebar-fixed-btn", function (event) {
      $("#sidebar-filter").trigger("submit");
    });
    $("body").on(
      "click",
      ".menu-item-search, .search-modal-overlay, .search-modal-close",
      function (event) {
        $("#search-modal-wrapper").slideToggle();
        $("#modal-search").val("");
        $("#search-result-box").html("");
        $("body").toggleClass("is-body-hidden");
      }
    );
    $("body").on("input", "#modal-search", function (event) {
      let search = $("#modal-search").val();
      if (search.length >= 3) {
        $.ajax({
          url: ajax_url,
          type: "POST",
          dataType: "html",
          data: { action: "modal_search", search: search },
        })
          .done(function (html) {
            $("#search-result-box").html(html);
          })
          .fail(function (error) {
            console.log(error);
          });
      } else if (search.length == 0) {
        $("#modal-search").val("");
        $("#search-result-box").html("");
      }
    });
    $("body").on("click", ".link-imitation", function (event) {
      event.preventDefault();
      let href = $(this).data("location");
      location.href = href;
    });
    if (navigator.userAgent.indexOf("Chrome-Lighthouse") == -1) {
      $.each($("body").find(".lazyload"), function (index, item) {
        if ($(item).data("bg"))
          $(item).css("background-image", "url(" + $(item).data("bg") + ")");
        else if ($(item).data("src")) $(item).attr("src", $(item).data("src"));
        $(item).removeClass("lazyload").addClass("lazyloaded");
      });
    }
    $("body").on("click", ".main-plain-part-list a", function (event) {
      event.preventDefault();
      let obj = this,
        parent_elem = $(obj).parents(".main-plain-part-list"),
        image_elem = "." + $(parent_elem).data("list") + "-image",
        href = $(obj).attr("href");
      $(parent_elem).find(".is-active").removeClass("is-active");
      $(image_elem).find(".is-active").removeClass("is-active");
      $(obj).addClass("is-active");
      $(href).addClass("is-active");
    });
    if ($("#slider_family").length > 0) {
      $("#slider_family").slider({
        min: 0,
        max: 10,
        value: 3,
        start: function (event, ui) {
          if (!$("#calc-2-3").prop("checked")) {
            $("#calc-2-3").prop("checked", true);
            $("#calc-2-3").val(ui.value);
            $("#slider_family_values span").removeClass("active");
            $(
              "#slider_family_values span:nth-child(" + (ui.value + 1) + ")"
            ).addClass("active");
          }
        },
        slide: function (event, ui) {
          $("#calc-2-3").prop("checked", true);
          $("#calc-2-3").val(ui.value);
          $("#slider_family_values span").removeClass("active");
          $(
            "#slider_family_values span:nth-child(" + (ui.value + 1) + ")"
          ).addClass("active");
        },
      });
    }
    if ($("#slider_bathroom").length > 0) {
      $("#slider_bathroom").slider({
        min: 0,
        max: 5,
        value: 1,
        start: function (event, ui) {
          if (!$("#calc-3-3").prop("checked")) {
            $("#calc-3-3").prop("checked", true);
            $("#calc-3-3").val(ui.value);
            $("#slider_bathroom_values span").removeClass("active");
            $(
              "#slider_bathroom_values span:nth-child(" + (ui.value + 1) + ")"
            ).addClass("active");
          }
        },
        slide: function (event, ui) {
          $("#calc-3-3").prop("checked", true);
          $("#calc-3-3").val(ui.value);
          $("#slider_bathroom_values span").removeClass("active");
          $(
            "#slider_bathroom_values span:nth-child(" + (ui.value + 1) + ")"
          ).addClass("active");
        },
      });
    }
  });
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    const success_html =
      '<div class="success-message">Данные успешно отправлены</div>';
    const ajax_url = "/wp-admin/admin-ajax.php";
    window.quizes_data = {};
    function quiz_init(parent) {
      if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) return;
      let quizes_list = $(parent).find(".quiz-form");
      $.each(quizes_list, function (index, quiz) {
        let quiz_id = $(quiz).attr("id"),
          progress_element = $(quiz).find(".quiz-loader-progress"),
          steps_list = $(quiz).find(".quiz-step-item");
        window.quizes_data[quiz_id] = {
          progress: progress_element,
          count: steps_list.length,
        };
        $(progress_element).css("width", 100 / steps_list.length + "%");
      });
    }
    quiz_init(".quiz-section");
    if ($("#quiz-modal").length > 0) {
      quiz_init("#quiz-modal");
    }
    $("body").on("click", ".button-quiz-back", function (event) {
      event.preventDefault();
      let btn = this,
        quiz_id = "quiz-form-" + $(btn).data("quiz"),
        current_show = $("#" + quiz_id).find(".quiz-step-item.show"),
        current_step = $(current_show).data("step"),
        prev_btn = $("#" + quiz_id).find(".button-quiz-back"),
        modal_wrapper = $(btn).parents(".modal-wrapper"),
        next = true;
      $(window.quizes_data[quiz_id].progress).css(
        "width",
        (100 / window.quizes_data[quiz_id].count) * (current_step - 1) + "%"
      );
      $(current_show).removeClass("show");
      $(current_show).prev().addClass("show");
      $("#" + quiz_id)
        .parents(".quiz-container")
        .removeClass("quiz-step-item-" + current_step);
      $("#" + quiz_id)
        .parents(".quiz-container")
        .addClass("quiz-step-item-" + (current_step - 1));
      if (modal_wrapper.length == 0 && current_step == 2) {
        prev_btn.hide();
      }
      prev_btn.next().prop("disabled", false);
      backBeforeReplace(quiz_id);
      if (current_step == 1) {
        loadingQuizAjax("modal", ".quiz-modal", ".quiz-modal");
      }
    });
    function backBeforeReplace(quiz_id) {
      setTimeout(function () {
        if (bDel) {
          $("#" + quiz_id + " .quiz-step-item.show").after(sStepsHtml);
          $(".replace-quiz").remove();
          bDel = 0;
          sStepsHtml = "";
        }
      }, 0);
    }
    $("body").on("click", ".button-quiz", function (event) {
      event.preventDefault();
      let btn = this,
        quiz_id = "quiz-form-" + $(btn).data("quiz"),
        current_show = $("#" + quiz_id).find(".quiz-step-item.show"),
        current_step = $(current_show).data("step"),
        prev_btn = $("#" + quiz_id).find(".button-quiz-back");
      nextStep(current_step, quiz_id, current_show, btn, prev_btn);
    });
    $("body").on(
      "click",
      '.quiz-label-type-radio:not(".quiz_not_redirect")',
      function (event) {
        let btn = $(this).parents(".quiz-form").find(".button-quiz"),
          quiz_id = "quiz-form-" + $(btn).data("quiz"),
          current_show = $("#" + quiz_id).find(".quiz-step-item.show"),
          current_step = $(current_show).data("step"),
          prev_btn = $("#" + quiz_id).find(".button-quiz-back");
        nextStep(current_step, quiz_id, current_show, btn[0], prev_btn[0]);
      }
    );
    var bDel = 0;
    var sStepsHtml = "";
    function replaceNextStepTextarea(current_show, quiz_id) {
      let oNextStep = $(current_show).next();
      sStepsHtml += oNextStep[0].outerHTML;
      let sTextArea =
        '<label for="quiz_textarea" class="quiz-label-item quiz-label-type-textarea label-item-full label-item-without_image"><textarea class="form-control" id="quiz_textarea" name="quiz-fund[2]"></textarea></label>';
      $(oNextStep).addClass("replace-quiz");
      $(oNextStep)
        .find(".quiz-step-item-title")
        .html("Опишите какие работы вам нужны");
      $(oNextStep).find(".quiz-step-item-content").html(sTextArea);
      $("#" + quiz_id + " .quiz-body .quiz-step-item").each(function (
        index,
        el
      ) {
        if (el.classList.contains("show")) {
          bDel = 1;
          return true;
        }
        if (
          bDel &&
          !(
            el.classList.contains("quiz-step-item-before-thanks") ||
            el.classList.contains("quiz-step-item-thanks")
          ) &&
          !$(el).prev().hasClass("show")
        ) {
          sStepsHtml += el.outerHTML;
          el.remove();
        }
      });
    }
    function nextStep(current_step, quiz_id, current_show, btn, prev_btn) {
      if (
        window.quizes_data[quiz_id] != undefined &&
        current_step < window.quizes_data[quiz_id].count
      ) {
        $(window.quizes_data[quiz_id].progress).css(
          "width",
          (100 / window.quizes_data[quiz_id].count) * (current_step + 1) + "%"
        );
        $(current_show).removeClass("show");
        $(current_show).next().addClass("show");
        if ($(current_show).next().hasClass("quiz-step-item-before-thanks")) {
          $(btn).hide();
          $(prev_btn).hide();
          $("#" + quiz_id)
            .parents(".quiz-container")
            .addClass("before-thanks");
        }
        $("#" + quiz_id)
          .parents(".quiz-container")
          .removeClass("quiz-step-item-" + current_step);
        $("#" + quiz_id)
          .parents(".quiz-container")
          .addClass("quiz-step-item-" + (current_step + 1));
      }
      $(btn).prop("disabled", true);
      if (
        current_step == 1 &&
        !$(current_show).next().hasClass("quiz-step-item-before-thanks")
      )
        $(prev_btn).show();
    }
    $("body").on("click", ".quiz-send-button", function (event) {
      event.preventDefault();
      let btn = this,
        quiz_id = "quiz-form-" + $(btn).data("quiz"),
        current_show = $("#" + quiz_id).find(".quiz-step-item.show"),
        current_step = $(current_show).data("step"),
        form_data = $("#" + quiz_id).serialize(),
        phone_input = $(btn).parent().prev().find("input[type=tel]"),
        phone = $(phone_input).val();
      if (phone.length == 0) {
        $(phone_input).trigger("focus");
        $(phone_input)
          .prev()
          .find("label")
          .css({ color: "red", fontWeight: "bold" });
      } else {
        $(phone_input).prev().find("label").removeAttr("style");
        form_data = form_data + "&step=1";
        $.ajax({
          url: ajax_url,
          type: "POST",
          dataType: "json",
          data: form_data,
          beforeSend: function () {
            $(btn).addClass("loading");
            $(btn).prop("disabled", true);
          },
        })
          .done(function (json) {
            if (json.success) {
              $(window.quizes_data[quiz_id].progress).css(
                "width",
                (100 / window.quizes_data[quiz_id].count) * (current_step + 1) +
                  "%"
              );
              $(current_show).removeClass("show");
              $(current_show).next().addClass("show");
              $("html,body").animate(
                {
                  scrollTop:
                    $(window.quizes_data[quiz_id].progress).offset().top - 100,
                },
                100
              );
              $("#" + quiz_id)
                .parents(".quiz-container")
                .removeClass("before-thanks")
                .addClass("thanks");
              window.message_id = json.message_id;
              let event = new Event("sd-quiz-1-submit", { bubbles: true });
              $("#" + quiz_id)[0].dispatchEvent(event);
            }
          })
          .fail(function (error) {
            console.log(error);
          })
          .always(function () {
            $(btn).removeClass("loading");
            $(btn).prop("disabled", false);
          });
      }
    });
    $("body").on(
      "click",
      '.quiz-step-item-content label:not(".quiz-label-type-radio")',
      function (event) {
        let btn = $(this).parents(".quiz-form").find(".button-quiz");
        btn.prop("disabled", false);
      }
    );
    $("body").on("click", ".quiz-excursion-send-button", function (event) {
      event.preventDefault();
      let btn = this,
        quiz_id = "quiz-form-" + $(btn).data("quiz"),
        current_show = $("#" + quiz_id).find(".quiz-step-item.show"),
        current_step = $(current_show).data("step"),
        form_data = $("#" + quiz_id).serialize(),
        date_input = $(btn).parent().prev().prev().find("input[type=date]"),
        date = $(date_input).val(),
        phone_input = $(btn).parent().prev().find("input[type=tel2]"),
        phone = $(phone_input).val();
      if (date.length == 0) {
        $(date_input).trigger("focus");
        $(date_input)
          .prev()
          .find("label")
          .css({ color: "red", fontWeight: "bold" });
      } else if (phone.length == 0) {
        $(phone_input).trigger("focus");
        $(phone_input)
          .prev()
          .find("label")
          .css({ color: "red", fontWeight: "bold" });
      } else {
        $(date_input).prev().find("label").removeAttr("style");
        form_data = form_data + "&step=2&message_id=" + window.message_id;
        $.ajax({
          url: ajax_url,
          type: "POST",
          dataType: "json",
          data: form_data,
          beforeSend: function () {
            $(btn).addClass("loading");
            $(btn).prop("disabled", true);
          },
        })
          .done(function (json) {
            if (json.success) {
              $(current_show).find(".excursion-form").replaceWith(success_html);
              let event = new Event("sd-quiz-2-submit", { bubbles: true });
              $("#" + quiz_id)[0].dispatchEvent(event);
            }
          })
          .fail(function (error) {
            console.log(error);
          })
          .always(function () {
            $(btn).removeClass("loading");
            $(btn).prop("disabled", false);
          });
      }
    });
    $("body").on("change", "#quiz-modal-step-0 input", function (event) {
      let obj = this,
        quiz_name = $(obj).val(),
        quiz_container = "#quiz-modal-container";
      loadingQuizAjax(quiz_name, quiz_container);
    });
    var sPreloader = "";
    function loadingQuizAjax(quiz_name, quiz_container, children = false) {
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "html",
        data: { action: "load_quiz", quiz_name: quiz_name },
        beforeSend: function () {
          if (children && 0) {
            $(quiz_container + " .quiz-form").html(sPreloader);
            sPreloader = "";
          } else {
            let sCssPreloader = {
              "background-color": "gray",
              filter: "brightness(0) invert(0.7)",
            };
            $(quiz_container + " img").css(sCssPreloader);
            $(".modal " + ".quiz-label-item-text").css(sCssPreloader);
            $(".modal " + ".section-title").css(sCssPreloader);
            $(".modal " + ".quiz-step-item-title").css("filter", "opacity(0)");
            $(".modal " + ".label-item-with_image .quiz-label-item-radio").css(
              "filter",
              "opacity(0)"
            );
            sPreloader = $(".modal " + quiz_container).html();
          }
        },
      })
        .done(function (html) {
          if (children) {
            $(quiz_container).replaceWith(html);
          } else {
            $(quiz_container).html(html);
          }
          quiz_init("#quiz-modal");
        })
        .fail(function (error) {
          console.log(error);
        });
    }
    $("body").on("change", ".quiz-step-item input[type=tel]", function (event) {
      let value = $(this).val();
      $(this)
        .parents(".quiz-step-item")
        .next()
        .find("input[type=tel2]")
        .val(value);
    });
  });
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    function load_portfolio_map() {
      let script = document.createElement("script");
      script.onload = function () {
        window.is_modal_ymaps_load = true;
      };
      script.src = "/wp-content/themes/super_dom/js/portfolio-map.js";
      document.getElementsByTagName("body")[0].appendChild(script);
    }
    function open_modal(modal, btn_obj) {
      if (modal == "#septik-modal") {
        let septik_id = $(btn_obj).data("septik"),
          septik_current = septiks_list[septik_id];
        $("#septik-modal-label span").html(septik_current.title);
        $("#septik_data").val(JSON.stringify(septik_current));
      } else if (modal == "#mortgage-form") {
        mortgageFormdata = [];
        mortgageFormdata.push(
          "Стоимость недвижимости: " + $("#mortgage-input-summ").val()
        );
        mortgageFormdata.push(
          "Первоначальный взнос: " + $("#mortgage-first-summ").html()
        );
        mortgageFormdata.push(
          "Процентная ставка: " + $("#mortgage-input-percent").val() + "%"
        );
        mortgageFormdata.push(
          "Срок кредита, лет: " + $("#mortgage-input-date").val()
        );
        mortgageFormdata.push(
          "Сумма кредита: " + $("#mortgage-credit-summ").html()
        );
        mortgageFormdata.push(
          "Переплата по кредиту: " + $("#mortgage-overpay").html()
        );
        mortgageFormdata.push(
          "Общая сумма выплат: " + $("#mortgage-alltotalsumm").html()
        );
        mortgageFormdata.push(
          "Процент переплаты: " + $("#mortgage-percentOverpay").html() + "%"
        );
        mortgageFormdata.push(
          "Окончание выплат: " + $("#mortgage-finalDate").html()
        );
        $("#mortgage-textarea").val(mortgageFormdata.join("[sep]"));
      }
      $(modal).addClass("modal-opened");
      $("body").addClass("has-opened-modal");
    }
    function load_modal(modal, btn_obj) {
      if (typeof post_id == "undefined") post_id = false;
      $.ajax({
        url: "/wp-admin/admin-ajax.php",
        type: "POST",
        dataType: "html",
        data: { action: "load_modal", modal_template: modal, post_id: post_id },
        beforeSend: function () {
          open_modal("#load-modal", false);
        },
      })
        .done(function (html) {
          $("body").append(html);
          $("#load-modal").removeClass("modal-opened");
          open_modal(modal, btn_obj);
          form_invalid();
          if (modal == "#modal-map") {
            load_portfolio_map();
          }
        })
        .fail(function (error) {
          console.log(error);
        });
    }
    $("body").on("click", "a", function (event) {
      let obj = this,
        href = $(obj).attr("href");
      if (href == "#modal") {
        event.preventDefault();
        let modal = $(obj).data("modal");
        if ($(modal).length > 0) open_modal(modal, obj);
        else load_modal(modal, obj);
      } else if (href == "#") {
        event.preventDefault();
      }
    });
    $("body").on("click", ".modal-layout, .modal-close", function (event) {
      event.preventDefault();
      if ($(this).parent().attr("id") == "#load-modal") return;
      $(this).parents(".modal-wrapper").removeClass("modal-opened");
      $("body").removeClass("has-opened-modal");
    });
    $(document).on("keyup", function (e) {
      if (
        $("body").find(".modal-wrapper.modal-opened").length > 0 &&
        $("body").find(".modal-wrapper.modal-opened").attr("id") !=
          "#load-modal" &&
        e.key == "Escape"
      ) {
        $("body")
          .find(".modal-wrapper.modal-opened")
          .removeClass("modal-opened");
        $("body").removeClass("has-opened-modal");
      }
    });
  });
} catch (e) {}
try {
  function form_invalid() {
    jQuery.each(
      jQuery("body").find("form:not(.has-validation)"),
      function (index, form) {
        jQuery(form).addClass("has-validation");
        jQuery(form)
          .find("input")
          .on("invalid", function (event) {
            event.preventDefault();
            let invalid_input = event.target,
              id = jQuery(invalid_input).attr("id");
            jQuery(invalid_input).trigger("focus");
            if (id != undefined) {
              jQuery("[for=" + id + "]").css({
                color: "red",
                fontWeight: "bold",
              });
            } else {
              jQuery(invalid_input)
                .prev()
                .css({ color: "red", fontWeight: "bold" });
            }
          });
      }
    );
  }
  jQuery(document).ready(function ($) {
    $("body").on(
      "submit",
      ".modal-form, .project-last-form, .excursion-form, .smeta-form, .contacts-form, .septik-calc-form, .work-resume, .work-form,  #vc-form, .mortgage-form-inner",
      function (event) {
        event.preventDefault();
        let form = this,
          form_data = new FormData(form),
          btn = $(form).find("[type=submit]");
        $(form).find("label").removeAttr("style");
        form_data.append("action", "send_form");
        $.ajax({
          url: "/wp-admin/admin-ajax.php",
          type: "POST",
          dataType: "json",
          data: form_data,
          processData: false,
          contentType: false,
          beforeSend: function () {
            $(btn).addClass("loading");
            $(btn).prop("disabled", true);
            $(form).find(".error-message").detach();
          },
        })
          .done(function (json) {
            if (json.success) {
              $(form).trigger("reset");
              $(btn).replaceWith(
                '<div class="success-message">Данные успешно отправлены</div>'
              );
              if ($(form).parents(".modal-wrapper").length > 0) {
                let close_timer = setTimeout(() => {
                  $(form).parents(".modal-wrapper").removeClass("modal-opened");
                  $("body").removeClass("has-opened-modal");
                }, 1000);
              }
              let event = new Event("sd-form-submit", { bubbles: true });
              form.dispatchEvent(event);
            } else if (json.message != undefined) {
              $(btn).after(
                '<div class="error-message">' + json.message + "</div>"
              );
            }
          })
          .fail(function (error) {
            console.log(error);
          })
          .always(function () {
            $(btn).removeClass("loading");
            $(btn).prop("disabled", false);
          });
      }
    );
    form_invalid();
  });
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    let ajax_url = "/wp-admin/admin-ajax.php";
    function after_load(replace_id, action, func, post_id) {
      if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) return;
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "html",
        data: {
          action: action,
          post_id: post_id,
          has_map_data: typeof map_data,
        },
      })
        .done(function (html) {
          $(replace_id).replaceWith(html);
          if (func) eval(func);
        })
        .fail(function (error) {
          console.log(error);
        });
    }
    function after_load_category() {
      let portfolio_main_slider = new Swiper(".portfolio-main-slider", {
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next.pm-btn",
          prevEl: ".swiper-button-prev.pm-btn",
        },
      });
      let photo_video_swiper = new Swiper(".photo-video-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 20 } },
      });
      let height = $(
          ".swiper-slide.photo-video-slide.swiper-slide-active"
        ).height(),
        width = $(
          ".swiper-slide.photo-video-slide.swiper-slide-active"
        ).width();
      $(".photo-video-swiper-phone").height(height);
      $(".photo-video-swiper-phone").width(width);
    }
    function after_load_single_content() {
      let reviews_slider = new Swiper(".reviews-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next.swiper-button-rs",
          prevEl: ".swiper-button-prev.swiper-button-rs",
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 4, spaceBetween: 20 },
        },
      });
    }
    function create_mobile_menu(menu, id) {
      let new_html = $(menu).clone();
      $(new_html).find(".mega-menu").removeClass("mega-menu");
      $(new_html).find(".columns-4").next().addClass("columns-4");
      if (id == "main") {
        let dop_html =
          $(".header-socials-wrapper").html() +
          $(".header-button-wrapper").html() +
          $(".header-phone-wrapper").html();
        new_html =
          '<div class="mobile-menu-wrapper" id="' +
          id +
          '"><a href="#" class="mobile-menu-close">&times;</a><ul class="menu">' +
          $(new_html).html() +
          "</ul>" +
          dop_html +
          "</div>";
      } else {
        new_html =
          '<div class="mobile-menu-wrapper" id="' +
          id +
          '"><a href="#" class="mobile-menu-close">&times;</a><ul class="menu">' +
          $(new_html).html() +
          "</ul></div>";
      }
      $("body").append(new_html);
    }
    function after_load_single_menu() {
      let menu_html = $("#menu-osnovnoe-menyu").clone();
      $(menu_html).attr("id", "menu-osnovnoe-menyu-2");
      $("#menu-osnovnoe-menyu").after(menu_html);
      $.each(
        $("body").find("#menu-osnovnoe-menyu-2 .mega-menu > ul > li"),
        function (index, menu_item) {
          let new_html = $(menu_item).find(".sub-menu").html();
          $(menu_item).replaceWith(new_html);
        }
      );
      create_mobile_menu("#menu-osnovnoe-menyu-2 .mega-menu > ul", "katalog");
      $("#menu-osnovnoe-menyu-2 .mega-menu > ul").detach();
      $("#menu-osnovnoe-menyu-2 .mega-menu").removeClass(
        "menu-item-has-children"
      );
      create_mobile_menu("#menu-osnovnoe-menyu-2", "main");
      $("#menu-osnovnoe-menyu-2").detach();
      load_catalog_count();
    }
    function after_load_portfolio() {
      let specialists_slider = new Swiper(".specialists-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination.specialists-slider-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.spec-button-next",
          prevEl: ".swiper-button-prev.spec-button-prev",
        },
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 30 } },
      });
      let pluses_slider = new Swiper(".pluses-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        setWrapperSize: true,
        navigation: {
          nextEl: ".swiper-button-next.ps-button",
          prevEl: ".swiper-button-prev.ps-button",
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 4, spaceBetween: 20 },
        },
      });
      let photo_video_swiper = new Swiper(".photo-video-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 20 } },
      });
      let height = $(
          ".swiper-slide.photo-video-slide.swiper-slide-active"
        ).height(),
        width = $(
          ".swiper-slide.photo-video-slide.swiper-slide-active"
        ).width();
      $(".photo-video-swiper-phone").height(height);
      $(".photo-video-swiper-phone").width(width);
    }
    function load_catalog_count() {
      if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) return;
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "json",
        data: { action: "load_catalog_count" },
      })
        .done(function (json) {
          let html = '<div class="top-catalog-count">' + json.text + "</div>",
            left = $("#menu-item-465").offset();
          left =
            left -
            ($("body").width() - $(".container").width()) / 2 +
            12 +
            ($("#menu-item-465 > a").width() - 105) / 2;
          $("#menu-osnovnoe-menyu").before(html);
          $(".top-catalog-count").css("left", left + "px");
        })
        .fail(function (error) {
          console.log(error);
        });
    }
    if (navigator.userAgent.indexOf("Chrome-Lighthouse") == -1) {
      $.ajax({
        url: ajax_url,
        type: "POST",
        dataType: "json",
        data: { action: "load_favorites_count" },
      })
        .done(function (json) {
          if (json.favorites_count > 0) {
            var favorites_count = json.favorites_count;
            $("#mobile-bottom-favorites").append(
              '<span id="mobile-bottom-favorites-count">' +
                favorites_count +
                "</span>"
            );
            $("#mobile-bottom-favorites").css("display", "inline-block");
            $("#right-fixed-item-favorites i")
              .removeClass("fa-heart-o")
              .addClass("fa-heart");
            $("#right-fixed-favorites-count").html(favorites_count);
            $("#right-fixed-favorites-count").show();
            $(".menu-item-favorite").attr(
              "data-count",
              "(" + json.favorites_count + ")"
            );
            $(".menu-item-favorite").addClass("has-favorite");
            $.each(json.favorites_data, function (index, id) {
              $(".project-item-like[data-id=" + id + "]").addClass("is-liked");
            });
          }
        })
        .fail(function (error) {
          console.log(error);
        });
    }
    if (typeof post_id == "undefined") post_id = false;
    if ($("#menu-osnovnoe-menyu").length > 0) load_catalog_count();
    if ($("#after-load-category").length > 0)
      after_load(
        "#after-load-category",
        "after_load_category",
        "form_invalid();after_load_category();",
        post_id
      );
    if ($("#after-load-single-content").length > 0)
      after_load(
        "#after-load-single-content",
        "after_load_single_content",
        "form_invalid();after_load_single_content();",
        post_id
      );
    if ($("#after-load-single-footer").length > 0)
      after_load(
        "#after-load-single-footer",
        "after_load_single_footer",
        "form_invalid();load_map_script(false);",
        post_id
      );
    if ($("#after-load-single-menu").length > 0)
      after_load(
        "#after-load-single-menu",
        "after_load_single_menu",
        "form_invalid();after_load_single_menu();",
        post_id
      );
    if ($("#after-load-portfolio").length > 0)
      after_load(
        "#after-load-portfolio",
        "after_load_portfolio",
        "form_invalid();after_load_portfolio();",
        post_id
      );
    $(".vc_block_vidget")
      .addClass("link-imitation")
      .attr("data-location", "/?vc_block");
    var bThisHaveVideoConsulting = $("#ajax_video-consulting").length;
    if (bThisHaveVideoConsulting) {
      $.ajax({
        url: "/wp-admin/admin-ajax.php",
        type: "POST",
        dataType: "html",
        data: { action: "videoConsultingAjax" },
      })
        .done(function (html) {
          $("#ajax_video-consulting").after(html);
          $("#ajax_video-consulting").remove();
        })
        .fail(function () {
          console.log("error");
        });
      var bThisHaveVC = 1;
      $(".vc_block_vidget")
        .removeClass("link-imitation")
        .removeAttr("data-location");
      $("body").on("click", ".vc_block_vidget", function (event) {
        event.preventDefault();
        scrollToVCBlock();
      });
    }
    if (
      $("#after-load-category").length > 0 ||
      $("#video-consulting").length > 0
    ) {
      $(".vc_block_vidget")
        .removeClass("link-imitation")
        .removeAttr("data-location");
      $("body").on("click", ".vc_block_vidget", function (event) {
        event.preventDefault();
        scrollToVCBlock();
      });
    }
    if (location.search == "?vc_block") {
      setTimeout(function () {
        scrollToVCBlock();
      }, 1000);
    }
    function scrollToVCBlock() {
      let sDataScroll = $("#video-consulting").offset().top - 50;
      $("html,body").animate({ scrollTop: sDataScroll }, 500);
    }
  });
} catch (e) {}
try {
  /*! jQuery UI - v1.12.1 - 2021-05-25
   * http://jqueryui.com
   * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  !(function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (k) {
    k.ui = k.ui || {};
    k.ui.version = "1.12.1";
    var n,
      i = 0,
      r = Array.prototype.slice;
    (k.cleanData =
      ((n = k.cleanData),
      function (t) {
        for (var e, i, s = 0; null != (i = t[s]); s++)
          try {
            (e = k._data(i, "events")) &&
              e.remove &&
              k(i).triggerHandler("remove");
          } catch (t) {}
        n(t);
      })),
      (k.widget = function (t, i, e) {
        var s,
          n,
          o,
          a = {},
          r = t.split(".")[0],
          h = r + "-" + (t = t.split(".")[1]);
        return (
          e || ((e = i), (i = k.Widget)),
          k.isArray(e) && (e = k.extend.apply(null, [{}].concat(e))),
          (k.expr[":"][h.toLowerCase()] = function (t) {
            return !!k.data(t, h);
          }),
          (k[r] = k[r] || {}),
          (s = k[r][t]),
          (n = k[r][t] =
            function (t, e) {
              if (!this._createWidget) return new n(t, e);
              arguments.length && this._createWidget(t, e);
            }),
          k.extend(n, s, {
            version: e.version,
            _proto: k.extend({}, e),
            _childConstructors: [],
          }),
          ((o = new i()).options = k.widget.extend({}, o.options)),
          k.each(e, function (e, s) {
            function n() {
              return i.prototype[e].apply(this, arguments);
            }
            function o(t) {
              return i.prototype[e].apply(this, t);
            }
            k.isFunction(s)
              ? (a[e] = function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = n),
                    (this._superApply = o),
                    (t = s.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                })
              : (a[e] = s);
          }),
          (n.prototype = k.widget.extend(
            o,
            { widgetEventPrefix: (s && o.widgetEventPrefix) || t },
            a,
            { constructor: n, namespace: r, widgetName: t, widgetFullName: h }
          )),
          s
            ? (k.each(s._childConstructors, function (t, e) {
                var i = e.prototype;
                k.widget(i.namespace + "." + i.widgetName, n, e._proto);
              }),
              delete s._childConstructors)
            : i._childConstructors.push(n),
          k.widget.bridge(t, n),
          n
        );
      }),
      (k.widget.extend = function (t) {
        for (
          var e, i, s = r.call(arguments, 1), n = 0, o = s.length;
          n < o;
          n++
        )
          for (e in s[n])
            (i = s[n][e]),
              s[n].hasOwnProperty(e) &&
                void 0 !== i &&
                (k.isPlainObject(i)
                  ? (t[e] = k.isPlainObject(t[e])
                      ? k.widget.extend({}, t[e], i)
                      : k.widget.extend({}, i))
                  : (t[e] = i));
        return t;
      }),
      (k.widget.bridge = function (o, e) {
        var a = e.prototype.widgetFullName || o;
        k.fn[o] = function (i) {
          var t = "string" == typeof i,
            s = r.call(arguments, 1),
            n = this;
          return (
            t
              ? this.length || "instance" !== i
                ? this.each(function () {
                    var t,
                      e = k.data(this, a);
                    return "instance" === i
                      ? ((n = e), !1)
                      : e
                      ? k.isFunction(e[i]) && "_" !== i.charAt(0)
                        ? (t = e[i].apply(e, s)) !== e && void 0 !== t
                          ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                          : void 0
                        : k.error(
                            "no such method '" +
                              i +
                              "' for " +
                              o +
                              " widget instance"
                          )
                      : k.error(
                          "cannot call methods on " +
                            o +
                            " prior to initialization; attempted to call method '" +
                            i +
                            "'"
                        );
                  })
                : (n = void 0)
              : (s.length && (i = k.widget.extend.apply(null, [i].concat(s))),
                this.each(function () {
                  var t = k.data(this, a);
                  t
                    ? (t.option(i || {}), t._init && t._init())
                    : k.data(this, a, new e(i, this));
                })),
            n
          );
        };
      }),
      (k.Widget = function () {}),
      (k.Widget._childConstructors = []),
      (k.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (t, e) {
          (e = k(e || this.defaultElement || this)[0]),
            (this.element = k(e)),
            (this.uuid = i++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = k()),
            (this.hoverable = k()),
            (this.focusable = k()),
            (this.classesElementLookup = {}),
            e !== this &&
              (k.data(e, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === e && this.destroy();
                },
              }),
              (this.document = k(e.style ? e.ownerDocument : e.document || e)),
              (this.window = k(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = k.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              t
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: k.noop,
        _create: k.noop,
        _init: k.noop,
        destroy: function () {
          var i = this;
          this._destroy(),
            k.each(this.classesElementLookup, function (t, e) {
              i._removeClass(e, t);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: k.noop,
        widget: function () {
          return this.element;
        },
        option: function (t, e) {
          var i,
            s,
            n,
            o = t;
          if (0 === arguments.length) return k.widget.extend({}, this.options);
          if ("string" == typeof t)
            if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
              for (
                s = o[t] = k.widget.extend({}, this.options[t]), n = 0;
                n < i.length - 1;
                n++
              )
                (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
              if (((t = i.pop()), 1 === arguments.length))
                return void 0 === s[t] ? null : s[t];
              s[t] = e;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[t] ? null : this.options[t];
              o[t] = e;
            }
          return this._setOptions(o), this;
        },
        _setOptions: function (t) {
          for (var e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            "classes" === t && this._setOptionClasses(e),
            (this.options[t] = e),
            "disabled" === t && this._setOptionDisabled(e),
            this
          );
        },
        _setOptionClasses: function (t) {
          var e, i, s;
          for (e in t)
            (s = this.classesElementLookup[e]),
              t[e] !== this.options.classes[e] &&
                s &&
                s.length &&
                ((i = k(s.get())),
                this._removeClass(s, e),
                i.addClass(
                  this._classes({ element: i, keys: e, classes: t, add: !0 })
                ));
        },
        _setOptionDisabled: function (t) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!t
          ),
            t &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (n) {
          var o = [],
            a = this;
          function t(t, e) {
            for (var i, s = 0; s < t.length; s++)
              (i = a.classesElementLookup[t[s]] || k()),
                (i = n.add
                  ? k(k.unique(i.get().concat(n.element.get())))
                  : k(i.not(n.element).get())),
                (a.classesElementLookup[t[s]] = i),
                o.push(t[s]),
                e && n.classes[t[s]] && o.push(n.classes[t[s]]);
          }
          return (
            (n = k.extend(
              { element: this.element, classes: this.options.classes || {} },
              n
            )),
            this._on(n.element, { remove: "_untrackClassesElement" }),
            n.keys && t(n.keys.match(/\S+/g) || [], !0),
            n.extra && t(n.extra.match(/\S+/g) || []),
            o.join(" ")
          );
        },
        _untrackClassesElement: function (i) {
          var s = this;
          k.each(s.classesElementLookup, function (t, e) {
            -1 !== k.inArray(i.target, e) &&
              (s.classesElementLookup[t] = k(e.not(i.target).get()));
          });
        },
        _removeClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !1);
        },
        _addClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function (t, e, i, s) {
          s = "boolean" == typeof s ? s : i;
          var n = "string" == typeof t || null === t,
            t = {
              extra: n ? e : i,
              keys: n ? t : e,
              element: n ? this.element : t,
              add: s,
            };
          return t.element.toggleClass(this._classes(t), s), this;
        },
        _on: function (n, o, t) {
          var a,
            r = this;
          "boolean" != typeof n && ((t = o), (o = n), (n = !1)),
            t
              ? ((o = a = k(o)), (this.bindings = this.bindings.add(o)))
              : ((t = o), (o = this.element), (a = this.widget())),
            k.each(t, function (t, e) {
              function i() {
                if (
                  n ||
                  (!0 !== r.options.disabled &&
                    !k(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof e ? r[e] : e).apply(r, arguments);
              }
              "string" != typeof e &&
                (i.guid = e.guid = e.guid || i.guid || k.guid++);
              var s = t.match(/^([\w:-]*)\s*(.*)$/),
                t = s[1] + r.eventNamespace,
                s = s[2];
              s ? a.on(t, s, i) : o.on(t, i);
            });
        },
        _off: function (t, e) {
          (e =
            (e || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            t.off(e).off(e),
            (this.bindings = k(this.bindings.not(t).get())),
            (this.focusable = k(this.focusable.not(t).get())),
            (this.hoverable = k(this.hoverable.not(t).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (t) {
          (this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                this._addClass(k(t.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (t) {
                this._removeClass(k(t.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (t) {
          (this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                this._addClass(k(t.currentTarget), null, "ui-state-focus");
              },
              focusout: function (t) {
                this._removeClass(k(t.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (t, e, i) {
          var s,
            n,
            o = this.options[t];
          if (
            ((i = i || {}),
            ((e = k.Event(e)).type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (e.target = this.element[0]),
            (n = e.originalEvent))
          )
            for (s in n) s in e || (e[s] = n[s]);
          return (
            this.element.trigger(e, i),
            !(
              (k.isFunction(o) &&
                !1 === o.apply(this.element[0], [e].concat(i))) ||
              e.isDefaultPrevented()
            )
          );
        },
      }),
      k.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
        k.Widget.prototype["_" + o] = function (e, t, i) {
          var s;
          "string" == typeof t && (t = { effect: t });
          var n = t ? (!0 !== t && "number" != typeof t && t.effect) || a : o;
          "number" == typeof (t = t || {}) && (t = { duration: t }),
            (s = !k.isEmptyObject(t)),
            (t.complete = i),
            t.delay && e.delay(t.delay),
            s && k.effects && k.effects.effect[n]
              ? e[o](t)
              : n !== o && e[n]
              ? e[n](t.duration, t.easing, i)
              : e.queue(function (t) {
                  k(this)[o](), i && i.call(e[0]), t();
                });
        };
      });
    var s, x, C, o, a, h, l, c, D;
    k.widget;
    function I(t, e, i) {
      return [
        parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1),
        parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1),
      ];
    }
    function T(t, e) {
      return parseInt(k.css(t, e), 10) || 0;
    }
    (x = Math.max),
      (C = Math.abs),
      (o = /left|center|right/),
      (a = /top|center|bottom/),
      (h = /[\+\-]\d+(\.[\d]+)?%?/),
      (l = /^\w+/),
      (c = /%$/),
      (D = k.fn.position),
      (k.position = {
        scrollbarWidth: function () {
          if (void 0 !== s) return s;
          var t,
            e = k(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            i = e.children()[0];
          return (
            k("body").append(e),
            (t = i.offsetWidth),
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            (s = t - i)
          );
        },
        getScrollInfo: function (t) {
          var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
            i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
            e =
              "scroll" === e ||
              ("auto" === e && t.width < t.element[0].scrollWidth);
          return {
            width:
              "scroll" === i ||
              ("auto" === i && t.height < t.element[0].scrollHeight)
                ? k.position.scrollbarWidth()
                : 0,
            height: e ? k.position.scrollbarWidth() : 0,
          };
        },
        getWithinInfo: function (t) {
          var e = k(t || window),
            i = k.isWindow(e[0]),
            s = !!e[0] && 9 === e[0].nodeType;
          return {
            element: e,
            isWindow: i,
            isDocument: s,
            offset: !i && !s ? k(t).offset() : { left: 0, top: 0 },
            scrollLeft: e.scrollLeft(),
            scrollTop: e.scrollTop(),
            width: e.outerWidth(),
            height: e.outerHeight(),
          };
        },
      }),
      (k.fn.position = function (u) {
        if (!u || !u.of) return D.apply(this, arguments);
        u = k.extend({}, u);
        var d,
          p,
          f,
          g,
          m,
          t,
          _ = k(u.of),
          v = k.position.getWithinInfo(u.within),
          b = k.position.getScrollInfo(v),
          y = (u.collision || "flip").split(" "),
          w = {},
          e =
            9 === (t = (e = _)[0]).nodeType
              ? {
                  width: e.width(),
                  height: e.height(),
                  offset: { top: 0, left: 0 },
                }
              : k.isWindow(t)
              ? {
                  width: e.width(),
                  height: e.height(),
                  offset: { top: e.scrollTop(), left: e.scrollLeft() },
                }
              : t.preventDefault
              ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
              : {
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  offset: e.offset(),
                };
        return (
          _[0].preventDefault && (u.at = "left top"),
          (p = e.width),
          (f = e.height),
          (g = e.offset),
          (m = k.extend({}, g)),
          k.each(["my", "at"], function () {
            var t,
              e,
              i = (u[this] || "").split(" ");
            1 === i.length &&
              (i = o.test(i[0])
                ? i.concat(["center"])
                : a.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]),
              (i[0] = o.test(i[0]) ? i[0] : "center"),
              (i[1] = a.test(i[1]) ? i[1] : "center"),
              (t = h.exec(i[0])),
              (e = h.exec(i[1])),
              (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
              (u[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
          }),
          1 === y.length && (y[1] = y[0]),
          "right" === u.at[0]
            ? (m.left += p)
            : "center" === u.at[0] && (m.left += p / 2),
          "bottom" === u.at[1]
            ? (m.top += f)
            : "center" === u.at[1] && (m.top += f / 2),
          (d = I(w.at, p, f)),
          (m.left += d[0]),
          (m.top += d[1]),
          this.each(function () {
            var i,
              t,
              a = k(this),
              r = a.outerWidth(),
              h = a.outerHeight(),
              e = T(this, "marginLeft"),
              s = T(this, "marginTop"),
              n = r + e + T(this, "marginRight") + b.width,
              o = h + s + T(this, "marginBottom") + b.height,
              l = k.extend({}, m),
              c = I(w.my, a.outerWidth(), a.outerHeight());
            "right" === u.my[0]
              ? (l.left -= r)
              : "center" === u.my[0] && (l.left -= r / 2),
              "bottom" === u.my[1]
                ? (l.top -= h)
                : "center" === u.my[1] && (l.top -= h / 2),
              (l.left += c[0]),
              (l.top += c[1]),
              (i = { marginLeft: e, marginTop: s }),
              k.each(["left", "top"], function (t, e) {
                k.ui.position[y[t]] &&
                  k.ui.position[y[t]][e](l, {
                    targetWidth: p,
                    targetHeight: f,
                    elemWidth: r,
                    elemHeight: h,
                    collisionPosition: i,
                    collisionWidth: n,
                    collisionHeight: o,
                    offset: [d[0] + c[0], d[1] + c[1]],
                    my: u.my,
                    at: u.at,
                    within: v,
                    elem: a,
                  });
              }),
              u.using &&
                (t = function (t) {
                  var e = g.left - l.left,
                    i = e + p - r,
                    s = g.top - l.top,
                    n = s + f - h,
                    o = {
                      target: {
                        element: _,
                        left: g.left,
                        top: g.top,
                        width: p,
                        height: f,
                      },
                      element: {
                        element: a,
                        left: l.left,
                        top: l.top,
                        width: r,
                        height: h,
                      },
                      horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                      vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle",
                    };
                  p < r && C(e + i) < p && (o.horizontal = "center"),
                    f < h && C(s + n) < f && (o.vertical = "middle"),
                    x(C(e), C(i)) > x(C(s), C(n))
                      ? (o.important = "horizontal")
                      : (o.important = "vertical"),
                    u.using.call(this, t, o);
                }),
              a.offset(k.extend(l, { using: t }));
          })
        );
      }),
      (k.ui.position = {
        fit: {
          left: function (t, e) {
            var i = e.within,
              s = i.isWindow ? i.scrollLeft : i.offset.left,
              n = i.width,
              o = t.left - e.collisionPosition.marginLeft,
              a = s - o,
              r = o + e.collisionWidth - n - s;
            e.collisionWidth > n
              ? 0 < a && r <= 0
                ? ((i = t.left + a + e.collisionWidth - n - s),
                  (t.left += a - i))
                : (t.left =
                    !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s)
              : 0 < a
              ? (t.left += a)
              : 0 < r
              ? (t.left -= r)
              : (t.left = x(t.left - o, t.left));
          },
          top: function (t, e) {
            var i = e.within,
              s = i.isWindow ? i.scrollTop : i.offset.top,
              n = e.within.height,
              o = t.top - e.collisionPosition.marginTop,
              a = s - o,
              r = o + e.collisionHeight - n - s;
            e.collisionHeight > n
              ? 0 < a && r <= 0
                ? ((i = t.top + a + e.collisionHeight - n - s),
                  (t.top += a - i))
                : (t.top =
                    !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s)
              : 0 < a
              ? (t.top += a)
              : 0 < r
              ? (t.top -= r)
              : (t.top = x(t.top - o, t.top));
          },
        },
        flip: {
          left: function (t, e) {
            var i = e.within,
              s = i.offset.left + i.scrollLeft,
              n = i.width,
              o = i.isWindow ? i.scrollLeft : i.offset.left,
              a = t.left - e.collisionPosition.marginLeft,
              r = a - o,
              h = a + e.collisionWidth - n - o,
              l =
                "left" === e.my[0]
                  ? -e.elemWidth
                  : "right" === e.my[0]
                  ? e.elemWidth
                  : 0,
              i =
                "left" === e.at[0]
                  ? e.targetWidth
                  : "right" === e.at[0]
                  ? -e.targetWidth
                  : 0,
              a = -2 * e.offset[0];
            r < 0
              ? ((s = t.left + l + i + a + e.collisionWidth - n - s) < 0 ||
                  s < C(r)) &&
                (t.left += l + i + a)
              : 0 < h &&
                (0 <
                  (o =
                    t.left - e.collisionPosition.marginLeft + l + i + a - o) ||
                  C(o) < h) &&
                (t.left += l + i + a);
          },
          top: function (t, e) {
            var i = e.within,
              s = i.offset.top + i.scrollTop,
              n = i.height,
              o = i.isWindow ? i.scrollTop : i.offset.top,
              a = t.top - e.collisionPosition.marginTop,
              r = a - o,
              h = a + e.collisionHeight - n - o,
              l =
                "top" === e.my[1]
                  ? -e.elemHeight
                  : "bottom" === e.my[1]
                  ? e.elemHeight
                  : 0,
              i =
                "top" === e.at[1]
                  ? e.targetHeight
                  : "bottom" === e.at[1]
                  ? -e.targetHeight
                  : 0,
              a = -2 * e.offset[1];
            r < 0
              ? ((s = t.top + l + i + a + e.collisionHeight - n - s) < 0 ||
                  s < C(r)) &&
                (t.top += l + i + a)
              : 0 < h &&
                (0 <
                  (o = t.top - e.collisionPosition.marginTop + l + i + a - o) ||
                  C(o) < h) &&
                (t.top += l + i + a);
          },
        },
        flipfit: {
          left: function () {
            k.ui.position.flip.left.apply(this, arguments),
              k.ui.position.fit.left.apply(this, arguments);
          },
          top: function () {
            k.ui.position.flip.top.apply(this, arguments),
              k.ui.position.fit.top.apply(this, arguments);
          },
        },
      });
    var t;
    k.ui.position,
      k.extend(k.expr[":"], {
        data: k.expr.createPseudo
          ? k.expr.createPseudo(function (e) {
              return function (t) {
                return !!k.data(t, e);
              };
            })
          : function (t, e, i) {
              return !!k.data(t, i[3]);
            },
      }),
      k.fn.extend({
        disableSelection:
          ((t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown"),
          function () {
            return this.on(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          }),
        enableSelection: function () {
          return this.off(".ui-disableSelection");
        },
      });
    (k.ui.focusable = function (t, e) {
      var i,
        s,
        n,
        o,
        a = t.nodeName.toLowerCase();
      return "area" === a
        ? ((s = (i = t.parentNode).name),
          !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) &&
            0 < (s = k("img[usemap='#" + s + "']")).length &&
            s.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(a)
            ? (n = !t.disabled) &&
              (o = k(t).closest("fieldset")[0]) &&
              (n = !o.disabled)
            : (n = ("a" === a && t.href) || e),
          n &&
            k(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "hidden" !== e;
            })(k(t)));
    }),
      k.extend(k.expr[":"], {
        focusable: function (t) {
          return k.ui.focusable(t, null != k.attr(t, "tabindex"));
        },
      });
    k.ui.focusable,
      (k.fn.form = function () {
        return "string" == typeof this[0].form
          ? this.closest("form")
          : k(this[0].form);
      }),
      (k.ui.formResetMixin = {
        _formResetHandler: function () {
          var e = k(this);
          setTimeout(function () {
            var t = e.data("ui-form-reset-instances");
            k.each(t, function () {
              this.refresh();
            });
          });
        },
        _bindFormResetHandler: function () {
          var t;
          (this.form = this.element.form()),
            this.form.length &&
              ((t = this.form.data("ui-form-reset-instances") || []).length ||
                this.form.on("reset.ui-form-reset", this._formResetHandler),
              t.push(this),
              this.form.data("ui-form-reset-instances", t));
        },
        _unbindFormResetHandler: function () {
          var t;
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances")).splice(
              k.inArray(this, t),
              1
            ),
            t.length
              ? this.form.data("ui-form-reset-instances", t)
              : this.form
                  .removeData("ui-form-reset-instances")
                  .off("reset.ui-form-reset"));
        },
      });
    "1.7" === k.fn.jquery.substring(0, 3) &&
      (k.each(["Width", "Height"], function (t, i) {
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          s = i.toLowerCase(),
          o = {
            innerWidth: k.fn.innerWidth,
            innerHeight: k.fn.innerHeight,
            outerWidth: k.fn.outerWidth,
            outerHeight: k.fn.outerHeight,
          };
        function a(t, e, i, s) {
          return (
            k.each(n, function () {
              (e -= parseFloat(k.css(t, "padding" + this)) || 0),
                i &&
                  (e -= parseFloat(k.css(t, "border" + this + "Width")) || 0),
                s && (e -= parseFloat(k.css(t, "margin" + this)) || 0);
            }),
            e
          );
        }
        (k.fn["inner" + i] = function (t) {
          return void 0 === t
            ? o["inner" + i].call(this)
            : this.each(function () {
                k(this).css(s, a(this, t) + "px");
              });
        }),
          (k.fn["outer" + i] = function (t, e) {
            return "number" != typeof t
              ? o["outer" + i].call(this, t)
              : this.each(function () {
                  k(this).css(s, a(this, t, !0, e) + "px");
                });
          });
      }),
      (k.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }));
    (k.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
      (k.ui.escapeSelector =
        ((e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g),
        function (t) {
          return t.replace(e, "\\$1");
        })),
      (k.fn.labels = function () {
        var t, e, i;
        return this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + k.ui.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e));
      }),
      (k.fn.scrollParent = function (t) {
        var e = this.css("position"),
          i = "absolute" === e,
          s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          t = this.parents()
            .filter(function () {
              var t = k(this);
              return (
                (!i || "static" !== t.css("position")) &&
                s.test(
                  t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
                )
              );
            })
            .eq(0);
        return "fixed" !== e && t.length
          ? t
          : k(this[0].ownerDocument || document);
      }),
      k.extend(k.expr[":"], {
        tabbable: function (t) {
          var e = k.attr(t, "tabindex"),
            i = null != e;
          return (!i || 0 <= e) && k.ui.focusable(t, i);
        },
      }),
      k.fn.extend({
        uniqueId:
          ((u = 0),
          function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++u);
            });
          }),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id");
          });
        },
      }),
      (k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var e,
      u,
      d = !1;
    k(document).on("mouseup", function () {
      d = !1;
    });
    k.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (t) {
            if (!0 === k.data(t.target, e.widgetName + ".preventClickEvent"))
              return (
                k.removeData(t.target, e.widgetName + ".preventClickEvent"),
                t.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!d) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(t),
            (this._mouseDownEvent = t);
          var e = this,
            i = 1 === t.which,
            s =
              !("string" != typeof this.options.cancel || !t.target.nodeName) &&
              k(t.target).closest(this.options.cancel).length;
          return i && !s && this._mouseCapture(t)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  e.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = !1 !== this._mouseStart(t)),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 ===
                    k.data(t.target, this.widgetName + ".preventClickEvent") &&
                    k.removeData(
                      t.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return e._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return e._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (d = !0)))
            : !0;
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            k.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which)
            if (
              t.originalEvent.altKey ||
              t.originalEvent.ctrlKey ||
              t.originalEvent.metaKey ||
              t.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, t)),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (t) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              k.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (d = !1),
          t.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
      (k.ui.plugin = {
        add: function (t, e, i) {
          var s,
            n = k.ui[t].prototype;
          for (s in i)
            (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
        },
        call: function (t, e, i, s) {
          var n,
            o = t.plugins[e];
          if (
            o &&
            (s ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (n = 0; n < o.length; n++)
              t.options[o[n][0]] && o[n][1].apply(t.element, i);
        },
      }),
      (k.ui.safeActiveElement = function (e) {
        var i;
        try {
          i = e.activeElement;
        } catch (t) {
          i = e.body;
        }
        return (i = i || e.body).nodeName || (i = e.body), i;
      }),
      (k.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && k(t).trigger("blur");
      });
    k.widget("ui.draggable", k.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass("ui-draggable"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "handle" === t &&
            (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        (this.helper || this.element).is(".ui-draggable-dragging")
          ? (this.destroyOnClear = !0)
          : (this._removeHandleClassName(), this._mouseDestroy());
      },
      _mouseCapture: function (t) {
        var e = this.options;
        return (
          !(
            this.helper ||
            e.disabled ||
            0 < k(t.target).closest(".ui-resizable-handle").length
          ) &&
          ((this.handle = this._getHandle(t)),
          !!this.handle &&
            (this._blurActiveElement(t),
            this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
            !0))
        );
      },
      _blockFrames: function (t) {
        this.iframeBlocks = this.document.find(t).map(function () {
          var t = k(this);
          return k("<div>")
            .css("position", "absolute")
            .appendTo(t.parent())
            .outerWidth(t.outerWidth())
            .outerHeight(t.outerHeight())
            .offset(t.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (t) {
        var e = k.ui.safeActiveElement(this.document[0]);
        k(t.target).closest(e).length || k.ui.safeBlur(e);
      },
      _mouseStart: function (t) {
        var e = this.options;
        return (
          (this.helper = this._createHelper(t)),
          this._addClass(this.helper, "ui-draggable-dragging"),
          this._cacheHelperProportions(),
          k.ui.ddmanager && (k.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            0 <
            this.helper.parents().filter(function () {
              return "fixed" === k(this).css("position");
            }).length),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(t),
          (this.originalPosition = this.position =
            this._generatePosition(t, !1)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
          this._setContainment(),
          !1 === this._trigger("start", t)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              k.ui.ddmanager &&
                !e.dropBehaviour &&
                k.ui.ddmanager.prepareOffsets(this, t),
              this._mouseDrag(t, !0),
              k.ui.ddmanager && k.ui.ddmanager.dragStart(this, t),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          });
      },
      _mouseDrag: function (t, e) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(t, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !e)
        ) {
          e = this._uiHash();
          if (!1 === this._trigger("drag", t, e))
            return this._mouseUp(new k.Event("mouseup", t)), !1;
          this.position = e.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          k.ui.ddmanager && k.ui.ddmanager.drag(this, t),
          !1
        );
      },
      _mouseStop: function (t) {
        var e = this,
          i = !1;
        return (
          k.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (i = k.ui.ddmanager.drop(this, t)),
          this.dropped && ((i = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !i) ||
          ("valid" === this.options.revert && i) ||
          !0 === this.options.revert ||
          (k.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, i))
            ? k(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  !1 !== e._trigger("stop", t) && e._clear();
                }
              )
            : !1 !== this._trigger("stop", t) && this._clear(),
          !1
        );
      },
      _mouseUp: function (t) {
        return (
          this._unblockFrames(),
          k.ui.ddmanager && k.ui.ddmanager.dragStop(this, t),
          this.handleElement.is(t.target) && this.element.trigger("focus"),
          k.ui.mouse.prototype._mouseUp.call(this, t)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp(new k.Event("mouseup", { target: this.element[0] }))
            : this._clear(),
          this
        );
      },
      _getHandle: function (t) {
        return (
          !this.options.handle ||
          !!k(t.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this._addClass(this.handleElement, "ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, "ui-draggable-handle");
      },
      _createHelper: function (t) {
        var e = this.options,
          i = k.isFunction(e.helper),
          t = i
            ? k(e.helper.apply(this.element[0], [t]))
            : "clone" === e.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          t.parents("body").length ||
            t.appendTo(
              "parent" === e.appendTo ? this.element[0].parentNode : e.appendTo
            ),
          i && t[0] === this.element[0] && this._setPositionRelative(),
          t[0] === this.element[0] ||
            /(fixed|absolute)/.test(t.css("position")) ||
            t.css("position", "absolute"),
          t
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          k.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          "left" in t && (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var t = this.offsetParent.offset(),
          e = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== e &&
            k.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t,
          e,
          i,
          s = this.options,
          n = this.document[0];
        (this.relativeContainer = null),
          s.containment
            ? "window" !== s.containment
              ? "document" !== s.containment
                ? s.containment.constructor !== Array
                  ? ("parent" === s.containment &&
                      (s.containment = this.helper[0].parentNode),
                    (i = (e = k(s.containment))[0]) &&
                      ((t = /(scroll|auto)/.test(e.css("overflow"))),
                      (this.containment = [
                        (parseInt(e.css("borderLeftWidth"), 10) || 0) +
                          (parseInt(e.css("paddingLeft"), 10) || 0),
                        (parseInt(e.css("borderTopWidth"), 10) || 0) +
                          (parseInt(e.css("paddingTop"), 10) || 0),
                        (t
                          ? Math.max(i.scrollWidth, i.offsetWidth)
                          : i.offsetWidth) -
                          (parseInt(e.css("borderRightWidth"), 10) || 0) -
                          (parseInt(e.css("paddingRight"), 10) || 0) -
                          this.helperProportions.width -
                          this.margins.left -
                          this.margins.right,
                        (t
                          ? Math.max(i.scrollHeight, i.offsetHeight)
                          : i.offsetHeight) -
                          (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                          (parseInt(e.css("paddingBottom"), 10) || 0) -
                          this.helperProportions.height -
                          this.margins.top -
                          this.margins.bottom,
                      ]),
                      (this.relativeContainer = e)))
                  : (this.containment = s.containment)
                : (this.containment = [
                    0,
                    0,
                    k(n).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    (k(n).height() || n.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
              : (this.containment = [
                  k(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  k(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  k(window).scrollLeft() +
                    k(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  k(window).scrollTop() +
                    (k(window).height() || n.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = null);
      },
      _convertPositionTo: function (t, e) {
        e = e || this.position;
        var i = "absolute" === t ? 1 : -1,
          t = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : t
              ? 0
              : this.offset.scroll.top) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : t
              ? 0
              : this.offset.scroll.left) *
              i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          s = this.options,
          n = this._isRootNode(this.scrollParent[0]),
          o = t.pageX,
          a = t.pageY;
        return (
          (n && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft(),
            }),
          e &&
            (this.containment &&
              ((i = this.relativeContainer
                ? ((i = this.relativeContainer.offset()),
                  [
                    this.containment[0] + i.left,
                    this.containment[1] + i.top,
                    this.containment[2] + i.left,
                    this.containment[3] + i.top,
                  ])
                : this.containment),
              t.pageX - this.offset.click.left < i[0] &&
                (o = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] &&
                (a = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] &&
                (o = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] &&
                (a = i[3] + this.offset.click.top)),
            s.grid &&
              ((t = s.grid[1]
                ? this.originalPageY +
                  Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]
                : this.originalPageY),
              (a =
                !i ||
                t - this.offset.click.top >= i[1] ||
                t - this.offset.click.top > i[3]
                  ? t
                  : t - this.offset.click.top >= i[1]
                  ? t - s.grid[1]
                  : t + s.grid[1]),
              (t = s.grid[0]
                ? this.originalPageX +
                  Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]
                : this.originalPageX),
              (o =
                !i ||
                t - this.offset.click.left >= i[0] ||
                t - this.offset.click.left > i[2]
                  ? t
                  : t - this.offset.click.left >= i[0]
                  ? t - s.grid[0]
                  : t + s.grid[0])),
            "y" === s.axis && (o = this.originalPageX),
            "x" === s.axis && (a = this.originalPageY)),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : n
                ? 0
                : this.offset.scroll.top),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : n
                ? 0
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this._removeClass(this.helper, "ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _trigger: function (t, e, i) {
        return (
          (i = i || this._uiHash()),
          k.ui.plugin.call(this, t, [e, i, this], !0),
          /^(drag|start|stop)/.test(t) &&
            ((this.positionAbs = this._convertPositionTo("absolute")),
            (i.offset = this.positionAbs)),
          k.Widget.prototype._trigger.call(this, t, e, i)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      k.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, t, i) {
          var s = k.extend({}, t, { item: i.element });
          (i.sortables = []),
            k(i.options.connectToSortable).each(function () {
              var t = k(this).sortable("instance");
              t &&
                !t.options.disabled &&
                (i.sortables.push(t),
                t.refreshPositions(),
                t._trigger("activate", e, s));
            });
        },
        stop: function (e, t, i) {
          var s = k.extend({}, t, { item: i.element });
          (i.cancelHelperRemoval = !1),
            k.each(i.sortables, function () {
              var t = this;
              t.isOver
                ? ((t.isOver = 0),
                  (i.cancelHelperRemoval = !0),
                  (t.cancelHelperRemoval = !1),
                  (t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left"),
                  }),
                  t._mouseStop(e),
                  (t.options.helper = t.options._helper))
                : ((t.cancelHelperRemoval = !0),
                  t._trigger("deactivate", e, s));
            });
        },
        drag: function (i, s, n) {
          k.each(n.sortables, function () {
            var t = !1,
              e = this;
            (e.positionAbs = n.positionAbs),
              (e.helperProportions = n.helperProportions),
              (e.offset.click = n.offset.click),
              e._intersectsWith(e.containerCache) &&
                ((t = !0),
                k.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== e &&
                      this._intersectsWith(this.containerCache) &&
                      k.contains(e.element[0], this.element[0]) &&
                      (t = !1),
                    t
                  );
                })),
              t
                ? (e.isOver ||
                    ((e.isOver = 1),
                    (n._parent = s.helper.parent()),
                    (e.currentItem = s.helper
                      .appendTo(e.element)
                      .data("ui-sortable-item", !0)),
                    (e.options._helper = e.options.helper),
                    (e.options.helper = function () {
                      return s.helper[0];
                    }),
                    (i.target = e.currentItem[0]),
                    e._mouseCapture(i, !0),
                    e._mouseStart(i, !0, !0),
                    (e.offset.click.top = n.offset.click.top),
                    (e.offset.click.left = n.offset.click.left),
                    (e.offset.parent.left -=
                      n.offset.parent.left - e.offset.parent.left),
                    (e.offset.parent.top -=
                      n.offset.parent.top - e.offset.parent.top),
                    n._trigger("toSortable", i),
                    (n.dropped = e.element),
                    k.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (e.fromOutside = n)),
                  e.currentItem && (e._mouseDrag(i), (s.position = e.position)))
                : e.isOver &&
                  ((e.isOver = 0),
                  (e.cancelHelperRemoval = !0),
                  (e.options._revert = e.options.revert),
                  (e.options.revert = !1),
                  e._trigger("out", i, e._uiHash(e)),
                  e._mouseStop(i, !0),
                  (e.options.revert = e.options._revert),
                  (e.options.helper = e.options._helper),
                  e.placeholder && e.placeholder.remove(),
                  s.helper.appendTo(n._parent),
                  n._refreshOffsets(i),
                  (s.position = n._generatePosition(i, !0)),
                  n._trigger("fromSortable", i),
                  (n.dropped = !1),
                  k.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      k.ui.plugin.add("draggable", "cursor", {
        start: function (t, e, i) {
          var s = k("body"),
            i = i.options;
          s.css("cursor") && (i._cursor = s.css("cursor")),
            s.css("cursor", i.cursor);
        },
        stop: function (t, e, i) {
          i = i.options;
          i._cursor && k("body").css("cursor", i._cursor);
        },
      }),
      k.ui.plugin.add("draggable", "opacity", {
        start: function (t, e, i) {
          (e = k(e.helper)), (i = i.options);
          e.css("opacity") && (i._opacity = e.css("opacity")),
            e.css("opacity", i.opacity);
        },
        stop: function (t, e, i) {
          i = i.options;
          i._opacity && k(e.helper).css("opacity", i._opacity);
        },
      }),
      k.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (t, e, i) {
          var s = i.options,
            n = !1,
            o = i.scrollParentNotHidden[0],
            a = i.document[0];
          o !== a && "HTML" !== o.tagName
            ? ((s.axis && "x" === s.axis) ||
                (i.overflowOffset.top + o.offsetHeight - t.pageY <
                s.scrollSensitivity
                  ? (o.scrollTop = n = o.scrollTop + s.scrollSpeed)
                  : t.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                    (o.scrollTop = n = o.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (i.overflowOffset.left + o.offsetWidth - t.pageX <
                s.scrollSensitivity
                  ? (o.scrollLeft = n = o.scrollLeft + s.scrollSpeed)
                  : t.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                    (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (t.pageY - k(a).scrollTop() < s.scrollSensitivity
                  ? (n = k(a).scrollTop(k(a).scrollTop() - s.scrollSpeed))
                  : k(window).height() - (t.pageY - k(a).scrollTop()) <
                      s.scrollSensitivity &&
                    (n = k(a).scrollTop(k(a).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (t.pageX - k(a).scrollLeft() < s.scrollSensitivity
                  ? (n = k(a).scrollLeft(k(a).scrollLeft() - s.scrollSpeed))
                  : k(window).width() - (t.pageX - k(a).scrollLeft()) <
                      s.scrollSensitivity &&
                    (n = k(a).scrollLeft(k(a).scrollLeft() + s.scrollSpeed)))),
            !1 !== n &&
              k.ui.ddmanager &&
              !s.dropBehaviour &&
              k.ui.ddmanager.prepareOffsets(i, t);
        },
      }),
      k.ui.plugin.add("draggable", "snap", {
        start: function (t, e, i) {
          var s = i.options;
          (i.snapElements = []),
            k(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap
            ).each(function () {
              var t = k(this),
                e = t.offset();
              this !== i.element[0] &&
                i.snapElements.push({
                  item: this,
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  top: e.top,
                  left: e.left,
                });
            });
        },
        drag: function (t, e, i) {
          for (
            var s,
              n,
              o,
              a,
              r,
              h,
              l,
              c,
              u,
              d = i.options,
              p = d.snapTolerance,
              f = e.offset.left,
              g = f + i.helperProportions.width,
              m = e.offset.top,
              _ = m + i.helperProportions.height,
              v = i.snapElements.length - 1;
            0 <= v;
            v--
          )
            (h =
              (r = i.snapElements[v].left - i.margins.left) +
              i.snapElements[v].width),
              (c =
                (l = i.snapElements[v].top - i.margins.top) +
                i.snapElements[v].height),
              g < r - p ||
              h + p < f ||
              _ < l - p ||
              c + p < m ||
              !k.contains(
                i.snapElements[v].item.ownerDocument,
                i.snapElements[v].item
              )
                ? (i.snapElements[v].snapping &&
                    i.options.snap.release &&
                    i.options.snap.release.call(
                      i.element,
                      t,
                      k.extend(i._uiHash(), {
                        snapItem: i.snapElements[v].item,
                      })
                    ),
                  (i.snapElements[v].snapping = !1))
                : ("inner" !== d.snapMode &&
                    ((s = Math.abs(l - _) <= p),
                    (n = Math.abs(c - m) <= p),
                    (o = Math.abs(r - g) <= p),
                    (a = Math.abs(h - f) <= p),
                    s &&
                      (e.position.top = i._convertPositionTo("relative", {
                        top: l - i.helperProportions.height,
                        left: 0,
                      }).top),
                    n &&
                      (e.position.top = i._convertPositionTo("relative", {
                        top: c,
                        left: 0,
                      }).top),
                    o &&
                      (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: r - i.helperProportions.width,
                      }).left),
                    a &&
                      (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: h,
                      }).left)),
                  (u = s || n || o || a),
                  "outer" !== d.snapMode &&
                    ((s = Math.abs(l - m) <= p),
                    (n = Math.abs(c - _) <= p),
                    (o = Math.abs(r - f) <= p),
                    (a = Math.abs(h - g) <= p),
                    s &&
                      (e.position.top = i._convertPositionTo("relative", {
                        top: l,
                        left: 0,
                      }).top),
                    n &&
                      (e.position.top = i._convertPositionTo("relative", {
                        top: c - i.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: r,
                      }).left),
                    a &&
                      (e.position.left = i._convertPositionTo("relative", {
                        top: 0,
                        left: h - i.helperProportions.width,
                      }).left)),
                  !i.snapElements[v].snapping &&
                    (s || n || o || a || u) &&
                    i.options.snap.snap &&
                    i.options.snap.snap.call(
                      i.element,
                      t,
                      k.extend(i._uiHash(), {
                        snapItem: i.snapElements[v].item,
                      })
                    ),
                  (i.snapElements[v].snapping = s || n || o || a || u));
        },
      }),
      k.ui.plugin.add("draggable", "stack", {
        start: function (t, e, i) {
          var s,
            i = i.options,
            i = k.makeArray(k(i.stack)).sort(function (t, e) {
              return (
                (parseInt(k(t).css("zIndex"), 10) || 0) -
                (parseInt(k(e).css("zIndex"), 10) || 0)
              );
            });
          i.length &&
            ((s = parseInt(k(i[0]).css("zIndex"), 10) || 0),
            k(i).each(function (t) {
              k(this).css("zIndex", s + t);
            }),
            this.css("zIndex", s + i.length));
        },
      }),
      k.ui.plugin.add("draggable", "zIndex", {
        start: function (t, e, i) {
          (e = k(e.helper)), (i = i.options);
          e.css("zIndex") && (i._zIndex = e.css("zIndex")),
            e.css("zIndex", i.zIndex);
        },
        stop: function (t, e, i) {
          i = i.options;
          i._zIndex && k(e.helper).css("zIndex", i._zIndex);
        },
      });
    k.ui.draggable;
    k.widget("ui.droppable", {
      version: "1.12.1",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        addClasses: !0,
        greedy: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var t,
          e = this.options,
          i = e.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = k.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              }),
          (this.proportions = function () {
            if (!arguments.length)
              return (
                t ||
                (t = {
                  width: this.element[0].offsetWidth,
                  height: this.element[0].offsetHeight,
                })
              );
            t = arguments[0];
          }),
          this._addToManager(e.scope),
          e.addClasses && this._addClass("ui-droppable");
      },
      _addToManager: function (t) {
        (k.ui.ddmanager.droppables[t] = k.ui.ddmanager.droppables[t] || []),
          k.ui.ddmanager.droppables[t].push(this);
      },
      _splice: function (t) {
        for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
      },
      _destroy: function () {
        var t = k.ui.ddmanager.droppables[this.options.scope];
        this._splice(t);
      },
      _setOption: function (t, e) {
        var i;
        "accept" === t
          ? (this.accept = k.isFunction(e)
              ? e
              : function (t) {
                  return t.is(e);
                })
          : "scope" === t &&
            ((i = k.ui.ddmanager.droppables[this.options.scope]),
            this._splice(i),
            this._addToManager(e)),
          this._super(t, e);
      },
      _activate: function (t) {
        var e = k.ui.ddmanager.current;
        this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
      },
      _deactivate: function (t) {
        var e = k.ui.ddmanager.current;
        this._removeActiveClass(),
          e && this._trigger("deactivate", t, this.ui(e));
      },
      _over: function (t) {
        var e = k.ui.ddmanager.current;
        e &&
          (e.currentItem || e.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], e.currentItem || e.element) &&
          (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
      },
      _out: function (t) {
        var e = k.ui.ddmanager.current;
        e &&
          (e.currentItem || e.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], e.currentItem || e.element) &&
          (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
      },
      _drop: function (e, t) {
        var i = t || k.ui.ddmanager.current,
          s = !1;
        return (
          !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
          (this.element
            .find(":data(ui-droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var t = k(this).droppable("instance");
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope === i.options.scope &&
                t.accept.call(t.element[0], i.currentItem || i.element) &&
                p(
                  i,
                  k.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance,
                  e
                )
              )
                return !(s = !0);
            }),
          !s &&
            !!this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", e, this.ui(i)),
            this.element))
        );
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs,
        };
      },
      _addHoverClass: function () {
        this._addClass("ui-droppable-hover");
      },
      _removeHoverClass: function () {
        this._removeClass("ui-droppable-hover");
      },
      _addActiveClass: function () {
        this._addClass("ui-droppable-active");
      },
      _removeActiveClass: function () {
        this._removeClass("ui-droppable-active");
      },
    });
    var p = (k.ui.intersect = function (t, e, i, s) {
      if (!e.offset) return !1;
      var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        a = n + t.helperProportions.width,
        r = o + t.helperProportions.height,
        h = e.offset.left,
        l = e.offset.top,
        c = h + e.proportions().width,
        u = l + e.proportions().height;
      switch (i) {
        case "fit":
          return h <= n && a <= c && l <= o && r <= u;
        case "intersect":
          return (
            h < n + t.helperProportions.width / 2 &&
            a - t.helperProportions.width / 2 < c &&
            l < o + t.helperProportions.height / 2 &&
            r - t.helperProportions.height / 2 < u
          );
        case "pointer":
          return (
            f(s.pageY, l, e.proportions().height) &&
            f(s.pageX, h, e.proportions().width)
          );
        case "touch":
          return (
            ((l <= o && o <= u) || (l <= r && r <= u) || (o < l && u < r)) &&
            ((h <= n && n <= c) || (h <= a && a <= c) || (n < h && c < a))
          );
        default:
          return !1;
      }
    });
    function f(t, e, i) {
      return e <= t && t < e + i;
    }
    !(k.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, e) {
        var i,
          s,
          n = k.ui.ddmanager.droppables[t.options.scope] || [],
          o = e ? e.type : null,
          a = (t.currentItem || t.element)
            .find(":data(ui-droppable)")
            .addBack();
        t: for (i = 0; i < n.length; i++)
          if (
            !(
              n[i].options.disabled ||
              (t &&
                !n[i].accept.call(n[i].element[0], t.currentItem || t.element))
            )
          ) {
            for (s = 0; s < a.length; s++)
              if (a[s] === n[i].element[0]) {
                n[i].proportions().height = 0;
                continue t;
              }
            (n[i].visible = "none" !== n[i].element.css("display")),
              n[i].visible &&
                ("mousedown" === o && n[i]._activate.call(n[i], e),
                (n[i].offset = n[i].element.offset()),
                n[i].proportions({
                  width: n[i].element[0].offsetWidth,
                  height: n[i].element[0].offsetHeight,
                }));
          }
      },
      drop: function (t, e) {
        var i = !1;
        return (
          k.each(
            (k.ui.ddmanager.droppables[t.options.scope] || []).slice(),
            function () {
              this.options &&
                (!this.options.disabled &&
                  this.visible &&
                  p(t, this, this.options.tolerance, e) &&
                  (i = this._drop.call(this, e) || i),
                !this.options.disabled &&
                  this.visible &&
                  this.accept.call(
                    this.element[0],
                    t.currentItem || t.element
                  ) &&
                  ((this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, e)));
            }
          ),
          i
        );
      },
      dragStart: function (t, e) {
        t.element.parentsUntil("body").on("scroll.droppable", function () {
          t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
        });
      },
      drag: function (n, o) {
        n.options.refreshPositions && k.ui.ddmanager.prepareOffsets(n, o),
          k.each(k.ui.ddmanager.droppables[n.options.scope] || [], function () {
            var t, e, i, s;
            this.options.disabled ||
              this.greedyChild ||
              !this.visible ||
              ((s =
                !(i = p(n, this, this.options.tolerance, o)) && this.isover
                  ? "isout"
                  : i && !this.isover
                  ? "isover"
                  : null) &&
                (this.options.greedy &&
                  ((e = this.options.scope),
                  (i = this.element
                    .parents(":data(ui-droppable)")
                    .filter(function () {
                      return k(this).droppable("instance").options.scope === e;
                    })).length &&
                    ((t = k(i[0]).droppable("instance")).greedyChild =
                      "isover" === s)),
                t &&
                  "isover" === s &&
                  ((t.isover = !1), (t.isout = !0), t._out.call(t, o)),
                (this[s] = !0),
                (this["isout" === s ? "isover" : "isout"] = !1),
                this["isover" === s ? "_over" : "_out"].call(this, o),
                t &&
                  "isout" === s &&
                  ((t.isout = !1), (t.isover = !0), t._over.call(t, o))));
          });
      },
      dragStop: function (t, e) {
        t.element.parentsUntil("body").off("scroll.droppable"),
          t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
      },
    }) !== k.uiBackCompat &&
      k.widget("ui.droppable", k.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass);
        },
      });
    k.ui.droppable;
    k.widget("ui.resizable", k.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _num: function (t) {
        return parseFloat(t) || 0;
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t));
      },
      _hasScroll: function (t, e) {
        if ("hidden" === k(t).css("overflow")) return !1;
        var i = e && "left" === e ? "scrollLeft" : "scrollTop",
          e = !1;
        return 0 < t[i] || ((t[i] = 1), (e = 0 < t[i]), (t[i] = 0), e);
      },
      _create: function () {
        var t,
          e = this.options,
          i = this;
        this._addClass("ui-resizable"),
          k.extend(this, {
            _aspectRatio: !!e.aspectRatio,
            aspectRatio: e.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              e.helper || e.ghost || e.animate
                ? e.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /^(canvas|textarea|input|select|button|img)$/i
          ) &&
            (this.element.wrap(
              k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                {
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data("ui-resizable", this.element.resizable("instance"))),
            (this.elementIsWrapper = !0),
            (t = {
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
              marginLeft: this.originalElement.css("marginLeft"),
            }),
            this.element.css(t),
            this.originalElement.css("margin", 0),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              })
            ),
            this.originalElement.css(t),
            this._proportionallyResize()),
          this._setupHandles(),
          e.autoHide &&
            k(this.element)
              .on("mouseenter", function () {
                e.disabled ||
                  (i._removeClass("ui-resizable-autohide"), i._handles.show());
              })
              .on("mouseleave", function () {
                e.disabled ||
                  i.resizing ||
                  (i._addClass("ui-resizable-autohide"), i._handles.hide());
              }),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        function t(t) {
          k(t)
            .removeData("resizable")
            .removeData("ui-resizable")
            .off(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        }
        var e;
        return (
          this.elementIsWrapper &&
            (t(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left"),
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css("resize", this.originalResizeStyle),
          t(this.originalElement),
          this
        );
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "handles" === t && (this._removeHandles(), this._setupHandles());
      },
      _setupHandles: function () {
        var t,
          e,
          i,
          s,
          n,
          o = this.options,
          a = this;
        if (
          ((this.handles =
            o.handles ||
            (k(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          (this._handles = k()),
          this.handles.constructor === String)
        )
          for (
            "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
              i = this.handles.split(","),
              this.handles = {},
              e = 0;
            e < i.length;
            e++
          )
            (s = "ui-resizable-" + (t = k.trim(i[e]))),
              (n = k("<div>")),
              this._addClass(n, "ui-resizable-handle " + s),
              n.css({ zIndex: o.zIndex }),
              (this.handles[t] = ".ui-resizable-" + t),
              this.element.append(n);
        (this._renderAxis = function (t) {
          var e, i, s;
          for (e in ((t = t || this.element), this.handles))
            this.handles[e].constructor === String
              ? (this.handles[e] = this.element
                  .children(this.handles[e])
                  .first()
                  .show())
              : (this.handles[e].jquery || this.handles[e].nodeType) &&
                ((this.handles[e] = k(this.handles[e])),
                this._on(this.handles[e], { mousedown: a._mouseDown })),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /^(textarea|input|select|button)$/i
                ) &&
                ((i = k(this.handles[e], this.element)),
                (s = /sw|ne|nw|se|n|s/.test(e)
                  ? i.outerHeight()
                  : i.outerWidth()),
                (i = [
                  "padding",
                  /ne|nw|n/.test(e)
                    ? "Top"
                    : /se|sw|s/.test(e)
                    ? "Bottom"
                    : /^e$/.test(e)
                    ? "Right"
                    : "Left",
                ].join("")),
                t.css(i, s),
                this._proportionallyResize()),
              (this._handles = this._handles.add(this.handles[e]));
        }),
          this._renderAxis(this.element),
          (this._handles = this._handles.add(
            this.element.find(".ui-resizable-handle")
          )),
          this._handles.disableSelection(),
          this._handles.on("mouseover", function () {
            a.resizing ||
              (this.className &&
                (n = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (a.axis = n && n[1] ? n[1] : "se"));
          }),
          o.autoHide &&
            (this._handles.hide(), this._addClass("ui-resizable-autohide"));
      },
      _removeHandles: function () {
        this._handles.remove();
      },
      _mouseCapture: function (t) {
        var e,
          i,
          s = !1;
        for (e in this.handles)
          ((i = k(this.handles[e])[0]) !== t.target &&
            !k.contains(i, t.target)) ||
            (s = !0);
        return !this.options.disabled && s;
      },
      _mouseStart: function (t) {
        var e,
          i,
          s = this.options,
          n = this.element;
        return (
          (this.resizing = !0),
          this._renderProxy(),
          (e = this._num(this.helper.css("left"))),
          (i = this._num(this.helper.css("top"))),
          s.containment &&
            ((e += k(s.containment).scrollLeft() || 0),
            (i += k(s.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: e, top: i }),
          (this.size = this._helper
            ? { width: this.helper.width(), height: this.helper.height() }
            : { width: n.width(), height: n.height() }),
          (this.originalSize = this._helper
            ? { width: n.outerWidth(), height: n.outerHeight() }
            : { width: n.width(), height: n.height() }),
          (this.sizeDiff = {
            width: n.outerWidth() - n.width(),
            height: n.outerHeight() - n.height(),
          }),
          (this.originalPosition = { left: e, top: i }),
          (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
          (this.aspectRatio =
            "number" == typeof s.aspectRatio
              ? s.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (s = k(".ui-resizable-" + this.axis).css("cursor")),
          k("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
          this._addClass("ui-resizable-resizing"),
          this._propagate("start", t),
          !0
        );
      },
      _mouseDrag: function (t) {
        var e = this.originalMousePosition,
          i = this.axis,
          s = t.pageX - e.left || 0,
          e = t.pageY - e.top || 0,
          i = this._change[i];
        return (
          this._updatePrevProperties(),
          i &&
            ((e = i.apply(this, [t, s, e])),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
            (e = this._respectSize(e, t)),
            this._updateCache(e),
            this._propagate("resize", t),
            (e = this._applyChanges()),
            !this._helper &&
              this._proportionallyResizeElements.length &&
              this._proportionallyResize(),
            k.isEmptyObject(e) ||
              (this._updatePrevProperties(),
              this._trigger("resize", t, this.ui()),
              this._applyChanges())),
          !1
        );
      },
      _mouseStop: function (t) {
        this.resizing = !1;
        var e,
          i,
          s,
          n = this.options,
          o = this;
        return (
          this._helper &&
            ((s =
              (e =
                (i = this._proportionallyResizeElements).length &&
                /textarea/i.test(i[0].nodeName)) &&
              this._hasScroll(i[0], "left")
                ? 0
                : o.sizeDiff.height),
            (i = e ? 0 : o.sizeDiff.width),
            (e = {
              width: o.helper.width() - i,
              height: o.helper.height() - s,
            }),
            (i =
              parseFloat(o.element.css("left")) +
                (o.position.left - o.originalPosition.left) || null),
            (s =
              parseFloat(o.element.css("top")) +
                (o.position.top - o.originalPosition.top) || null),
            n.animate || this.element.css(k.extend(e, { top: s, left: i })),
            o.helper.height(o.size.height),
            o.helper.width(o.size.width),
            this._helper && !n.animate && this._proportionallyResize()),
          k("body").css("cursor", "auto"),
          this._removeClass("ui-resizable-resizing"),
          this._propagate("stop", t),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updatePrevProperties: function () {
        (this.prevPosition = {
          top: this.position.top,
          left: this.position.left,
        }),
          (this.prevSize = {
            width: this.size.width,
            height: this.size.height,
          });
      },
      _applyChanges: function () {
        var t = {};
        return (
          this.position.top !== this.prevPosition.top &&
            (t.top = this.position.top + "px"),
          this.position.left !== this.prevPosition.left &&
            (t.left = this.position.left + "px"),
          this.size.width !== this.prevSize.width &&
            (t.width = this.size.width + "px"),
          this.size.height !== this.prevSize.height &&
            (t.height = this.size.height + "px"),
          this.helper.css(t),
          t
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          s = this.options,
          n = {
            minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
            maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
            minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
            maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0,
          };
        (this._aspectRatio || t) &&
          ((e = n.minHeight * this.aspectRatio),
          (i = n.minWidth / this.aspectRatio),
          (s = n.maxHeight * this.aspectRatio),
          (t = n.maxWidth / this.aspectRatio),
          e > n.minWidth && (n.minWidth = e),
          i > n.minHeight && (n.minHeight = i),
          s < n.maxWidth && (n.maxWidth = s),
          t < n.maxHeight && (n.maxHeight = t)),
          (this._vBoundaries = n);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          this._isNumber(t.left) && (this.position.left = t.left),
          this._isNumber(t.top) && (this.position.top = t.top),
          this._isNumber(t.height) && (this.size.height = t.height),
          this._isNumber(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          s = this.axis;
        return (
          this._isNumber(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : this._isNumber(t.width) &&
              (t.height = t.width / this.aspectRatio),
          "sw" === s &&
            ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          "nw" === s &&
            ((t.top = e.top + (i.height - t.height)),
            (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          i = /nw|ne|n/.test(i);
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          s && (t.width = e.maxWidth),
          n && (t.height = e.maxHeight),
          o && l && (t.left = r - e.minWidth),
          s && l && (t.left = r - e.maxWidth),
          a && i && (t.top = h - e.minHeight),
          n && i && (t.top = h - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (
          var e = 0,
            i = [],
            s = [
              t.css("borderTopWidth"),
              t.css("borderRightWidth"),
              t.css("borderBottomWidth"),
              t.css("borderLeftWidth"),
            ],
            n = [
              t.css("paddingTop"),
              t.css("paddingRight"),
              t.css("paddingBottom"),
              t.css("paddingLeft"),
            ];
          e < 4;
          e++
        )
          (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
        return { height: i[0] + i[2], width: i[1] + i[3] };
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (
            var t, e = 0, i = this.helper || this.element;
            e < this._proportionallyResizeElements.length;
            e++
          )
            (t = this._proportionallyResizeElements[e]),
              this.outerDimensions ||
                (this.outerDimensions =
                  this._getPaddingPlusBorderDimensions(t)),
              t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0,
              });
      },
      _renderProxy: function () {
        var t = this.element,
          e = this.options;
        (this.elementOffset = t.offset()),
          this._helper
            ? ((this.helper =
                this.helper || k("<div style='overflow:hidden;'></div>")),
              this._addClass(this.helper, this._helper),
              this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex,
              }),
              this.helper.appendTo("body").disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize;
          return { left: this.originalPosition.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var s = this.originalSize;
          return { top: this.originalPosition.top + i, height: s.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (t, e, i) {
          return k.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [t, e, i])
          );
        },
        sw: function (t, e, i) {
          return k.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [t, e, i])
          );
        },
        ne: function (t, e, i) {
          return k.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [t, e, i])
          );
        },
        nw: function (t, e, i) {
          return k.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [t, e, i])
          );
        },
      },
      _propagate: function (t, e) {
        k.ui.plugin.call(this, t, [e, this.ui()]),
          "resize" !== t && this._trigger(t, e, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      k.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = k(this).resizable("instance"),
            t = i.options,
            s = i._proportionallyResizeElements,
            n = s.length && /textarea/i.test(s[0].nodeName),
            o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            a = n ? 0 : i.sizeDiff.width,
            n = { width: i.size.width - a, height: i.size.height - o },
            a =
              parseFloat(i.element.css("left")) +
                (i.position.left - i.originalPosition.left) || null,
            o =
              parseFloat(i.element.css("top")) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(k.extend(n, o && a ? { top: o, left: a } : {}), {
            duration: t.animateDuration,
            easing: t.animateEasing,
            step: function () {
              var t = {
                width: parseFloat(i.element.css("width")),
                height: parseFloat(i.element.css("height")),
                top: parseFloat(i.element.css("top")),
                left: parseFloat(i.element.css("left")),
              };
              s &&
                s.length &&
                k(s[0]).css({ width: t.width, height: t.height }),
                i._updateCache(t),
                i._propagate("resize", e);
            },
          });
        },
      }),
      k.ui.plugin.add("resizable", "containment", {
        start: function () {
          var i,
            s,
            n = k(this).resizable("instance"),
            t = n.options,
            e = n.element,
            o = t.containment,
            a =
              o instanceof k
                ? o.get(0)
                : /parent/.test(o)
                ? e.parent().get(0)
                : o;
          a &&
            ((n.containerElement = k(a)),
            /document/.test(o) || o === document
              ? ((n.containerOffset = { left: 0, top: 0 }),
                (n.containerPosition = { left: 0, top: 0 }),
                (n.parentData = {
                  element: k(document),
                  left: 0,
                  top: 0,
                  width: k(document).width(),
                  height:
                    k(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((i = k(a)),
                (s = []),
                k(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                  s[t] = n._num(i.css("padding" + e));
                }),
                (n.containerOffset = i.offset()),
                (n.containerPosition = i.position()),
                (n.containerSize = {
                  height: i.innerHeight() - s[3],
                  width: i.innerWidth() - s[1],
                }),
                (t = n.containerOffset),
                (e = n.containerSize.height),
                (o = n.containerSize.width),
                (o = n._hasScroll(a, "left") ? a.scrollWidth : o),
                (e = n._hasScroll(a) ? a.scrollHeight : e),
                (n.parentData = {
                  element: a,
                  left: t.left,
                  top: t.top,
                  width: o,
                  height: e,
                })));
        },
        resize: function (t) {
          var e = k(this).resizable("instance"),
            i = e.options,
            s = e.containerOffset,
            n = e.position,
            o = e._aspectRatio || t.shiftKey,
            a = { top: 0, left: 0 },
            r = e.containerElement,
            t = !0;
          r[0] !== document && /static/.test(r.css("position")) && (a = s),
            n.left < (e._helper ? s.left : 0) &&
              ((e.size.width =
                e.size.width +
                (e._helper
                  ? e.position.left - s.left
                  : e.position.left - a.left)),
              o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1)),
              (e.position.left = i.helper ? s.left : 0)),
            n.top < (e._helper ? s.top : 0) &&
              ((e.size.height =
                e.size.height +
                (e._helper ? e.position.top - s.top : e.position.top)),
              o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1)),
              (e.position.top = e._helper ? s.top : 0)),
            (i = e.containerElement.get(0) === e.element.parent().get(0)),
            (n = /relative|absolute/.test(e.containerElement.css("position"))),
            i && n
              ? ((e.offset.left = e.parentData.left + e.position.left),
                (e.offset.top = e.parentData.top + e.position.top))
              : ((e.offset.left = e.element.offset().left),
                (e.offset.top = e.element.offset().top)),
            (n = Math.abs(
              e.sizeDiff.width +
                (e._helper ? e.offset.left - a.left : e.offset.left - s.left)
            )),
            (s = Math.abs(
              e.sizeDiff.height +
                (e._helper ? e.offset.top - a.top : e.offset.top - s.top)
            )),
            n + e.size.width >= e.parentData.width &&
              ((e.size.width = e.parentData.width - n),
              o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1))),
            s + e.size.height >= e.parentData.height &&
              ((e.size.height = e.parentData.height - s),
              o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1))),
            t ||
              ((e.position.left = e.prevPosition.left),
              (e.position.top = e.prevPosition.top),
              (e.size.width = e.prevSize.width),
              (e.size.height = e.prevSize.height));
        },
        stop: function () {
          var t = k(this).resizable("instance"),
            e = t.options,
            i = t.containerOffset,
            s = t.containerPosition,
            n = t.containerElement,
            o = k(t.helper),
            a = o.offset(),
            r = o.outerWidth() - t.sizeDiff.width,
            o = o.outerHeight() - t.sizeDiff.height;
          t._helper &&
            !e.animate &&
            /relative/.test(n.css("position")) &&
            k(this).css({
              left: a.left - s.left - i.left,
              width: r,
              height: o,
            }),
            t._helper &&
              !e.animate &&
              /static/.test(n.css("position")) &&
              k(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: o,
              });
        },
      }),
      k.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var t = k(this).resizable("instance").options;
          k(t.alsoResize).each(function () {
            var t = k(this);
            t.data("ui-resizable-alsoresize", {
              width: parseFloat(t.width()),
              height: parseFloat(t.height()),
              left: parseFloat(t.css("left")),
              top: parseFloat(t.css("top")),
            });
          });
        },
        resize: function (t, i) {
          var e = k(this).resizable("instance"),
            s = e.options,
            n = e.originalSize,
            o = e.originalPosition,
            a = {
              height: e.size.height - n.height || 0,
              width: e.size.width - n.width || 0,
              top: e.position.top - o.top || 0,
              left: e.position.left - o.left || 0,
            };
          k(s.alsoResize).each(function () {
            var t = k(this),
              s = k(this).data("ui-resizable-alsoresize"),
              n = {},
              e = t.parents(i.originalElement[0]).length
                ? ["width", "height"]
                : ["width", "height", "top", "left"];
            k.each(e, function (t, e) {
              var i = (s[e] || 0) + (a[e] || 0);
              i && 0 <= i && (n[e] = i || null);
            }),
              t.css(n);
          });
        },
        stop: function () {
          k(this).removeData("ui-resizable-alsoresize");
        },
      }),
      k.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var t = k(this).resizable("instance"),
            e = t.size;
          (t.ghost = t.originalElement.clone()),
            t.ghost.css({
              opacity: 0.25,
              display: "block",
              position: "relative",
              height: e.height,
              width: e.width,
              margin: 0,
              left: 0,
              top: 0,
            }),
            t._addClass(t.ghost, "ui-resizable-ghost"),
            !1 !== k.uiBackCompat &&
              "string" == typeof t.options.ghost &&
              t.ghost.addClass(this.options.ghost),
            t.ghost.appendTo(t.helper);
        },
        resize: function () {
          var t = k(this).resizable("instance");
          t.ghost &&
            t.ghost.css({
              position: "relative",
              height: t.size.height,
              width: t.size.width,
            });
        },
        stop: function () {
          var t = k(this).resizable("instance");
          t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
        },
      }),
      k.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var t,
            e = k(this).resizable("instance"),
            i = e.options,
            s = e.size,
            n = e.originalSize,
            o = e.originalPosition,
            a = e.axis,
            r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
            h = r[0] || 1,
            l = r[1] || 1,
            c = Math.round((s.width - n.width) / h) * h,
            u = Math.round((s.height - n.height) / l) * l,
            d = n.width + c,
            p = n.height + u,
            f = i.maxWidth && i.maxWidth < d,
            g = i.maxHeight && i.maxHeight < p,
            m = i.minWidth && i.minWidth > d,
            s = i.minHeight && i.minHeight > p;
          (i.grid = r),
            m && (d += h),
            s && (p += l),
            f && (d -= h),
            g && (p -= l),
            /^(se|s|e)$/.test(a)
              ? ((e.size.width = d), (e.size.height = p))
              : /^(ne)$/.test(a)
              ? ((e.size.width = d),
                (e.size.height = p),
                (e.position.top = o.top - u))
              : /^(sw)$/.test(a)
              ? ((e.size.width = d),
                (e.size.height = p),
                (e.position.left = o.left - c))
              : ((p - l <= 0 || d - h <= 0) &&
                  (t = e._getPaddingPlusBorderDimensions(this)),
                0 < p - l
                  ? ((e.size.height = p), (e.position.top = o.top - u))
                  : ((p = l - t.height),
                    (e.size.height = p),
                    (e.position.top = o.top + n.height - p)),
                0 < d - h
                  ? ((e.size.width = d), (e.position.left = o.left - c))
                  : ((d = h - t.width),
                    (e.size.width = d),
                    (e.position.left = o.left + n.width - d)));
        },
      });
    k.ui.resizable,
      k.widget("ui.selectable", k.ui.mouse, {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null,
        },
        _create: function () {
          var i = this;
          this._addClass("ui-selectable"),
            (this.dragged = !1),
            (this.refresh = function () {
              (i.elementPos = k(i.element[0]).offset()),
                (i.selectees = k(i.options.filter, i.element[0])),
                i._addClass(i.selectees, "ui-selectee"),
                i.selectees.each(function () {
                  var t = k(this),
                    e = t.offset(),
                    e = {
                      left: e.left - i.elementPos.left,
                      top: e.top - i.elementPos.top,
                    };
                  k.data(this, "selectable-item", {
                    element: this,
                    $element: t,
                    left: e.left,
                    top: e.top,
                    right: e.left + t.outerWidth(),
                    bottom: e.top + t.outerHeight(),
                    startselected: !1,
                    selected: t.hasClass("ui-selected"),
                    selecting: t.hasClass("ui-selecting"),
                    unselecting: t.hasClass("ui-unselecting"),
                  });
                });
            }),
            this.refresh(),
            this._mouseInit(),
            (this.helper = k("<div>")),
            this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function () {
          this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function (i) {
          var s = this,
            t = this.options;
          (this.opos = [i.pageX, i.pageY]),
            (this.elementPos = k(this.element[0]).offset()),
            this.options.disabled ||
              ((this.selectees = k(t.filter, this.element[0])),
              this._trigger("start", i),
              k(t.appendTo).append(this.helper),
              this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0,
              }),
              t.autoRefresh && this.refresh(),
              this.selectees.filter(".ui-selected").each(function () {
                var t = k.data(this, "selectable-item");
                (t.startselected = !0),
                  i.metaKey ||
                    i.ctrlKey ||
                    (s._removeClass(t.$element, "ui-selected"),
                    (t.selected = !1),
                    s._addClass(t.$element, "ui-unselecting"),
                    (t.unselecting = !0),
                    s._trigger("unselecting", i, { unselecting: t.element }));
              }),
              k(i.target)
                .parents()
                .addBack()
                .each(function () {
                  var t,
                    e = k.data(this, "selectable-item");
                  if (e)
                    return (
                      (t =
                        (!i.metaKey && !i.ctrlKey) ||
                        !e.$element.hasClass("ui-selected")),
                      s
                        ._removeClass(
                          e.$element,
                          t ? "ui-unselecting" : "ui-selected"
                        )
                        ._addClass(
                          e.$element,
                          t ? "ui-selecting" : "ui-unselecting"
                        ),
                      (e.unselecting = !t),
                      (e.selecting = t),
                      (e.selected = t)
                        ? s._trigger("selecting", i, { selecting: e.element })
                        : s._trigger("unselecting", i, {
                            unselecting: e.element,
                          }),
                      !1
                    );
                }));
        },
        _mouseDrag: function (s) {
          if (((this.dragged = !0), !this.options.disabled)) {
            var t,
              n = this,
              o = this.options,
              a = this.opos[0],
              r = this.opos[1],
              h = s.pageX,
              l = s.pageY;
            return (
              h < a && ((t = h), (h = a), (a = t)),
              l < r && ((t = l), (l = r), (r = t)),
              this.helper.css({ left: a, top: r, width: h - a, height: l - r }),
              this.selectees.each(function () {
                var t = k.data(this, "selectable-item"),
                  e = !1,
                  i = {};
                t &&
                  t.element !== n.element[0] &&
                  ((i.left = t.left + n.elementPos.left),
                  (i.right = t.right + n.elementPos.left),
                  (i.top = t.top + n.elementPos.top),
                  (i.bottom = t.bottom + n.elementPos.top),
                  "touch" === o.tolerance
                    ? (e = !(
                        i.left > h ||
                        i.right < a ||
                        i.top > l ||
                        i.bottom < r
                      ))
                    : "fit" === o.tolerance &&
                      (e =
                        i.left > a && i.right < h && i.top > r && i.bottom < l),
                  e
                    ? (t.selected &&
                        (n._removeClass(t.$element, "ui-selected"),
                        (t.selected = !1)),
                      t.unselecting &&
                        (n._removeClass(t.$element, "ui-unselecting"),
                        (t.unselecting = !1)),
                      t.selecting ||
                        (n._addClass(t.$element, "ui-selecting"),
                        (t.selecting = !0),
                        n._trigger("selecting", s, { selecting: t.element })))
                    : (t.selecting &&
                        ((s.metaKey || s.ctrlKey) && t.startselected
                          ? (n._removeClass(t.$element, "ui-selecting"),
                            (t.selecting = !1),
                            n._addClass(t.$element, "ui-selected"),
                            (t.selected = !0))
                          : (n._removeClass(t.$element, "ui-selecting"),
                            (t.selecting = !1),
                            t.startselected &&
                              (n._addClass(t.$element, "ui-unselecting"),
                              (t.unselecting = !0)),
                            n._trigger("unselecting", s, {
                              unselecting: t.element,
                            }))),
                      t.selected &&
                        (s.metaKey ||
                          s.ctrlKey ||
                          t.startselected ||
                          (n._removeClass(t.$element, "ui-selected"),
                          (t.selected = !1),
                          n._addClass(t.$element, "ui-unselecting"),
                          (t.unselecting = !0),
                          n._trigger("unselecting", s, {
                            unselecting: t.element,
                          })))));
              }),
              !1
            );
          }
        },
        _mouseStop: function (e) {
          var i = this;
          return (
            (this.dragged = !1),
            k(".ui-unselecting", this.element[0]).each(function () {
              var t = k.data(this, "selectable-item");
              i._removeClass(t.$element, "ui-unselecting"),
                (t.unselecting = !1),
                (t.startselected = !1),
                i._trigger("unselected", e, { unselected: t.element });
            }),
            k(".ui-selecting", this.element[0]).each(function () {
              var t = k.data(this, "selectable-item");
              i
                ._removeClass(t.$element, "ui-selecting")
                ._addClass(t.$element, "ui-selected"),
                (t.selecting = !1),
                (t.selected = !0),
                (t.startselected = !0),
                i._trigger("selected", e, { selected: t.element });
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
          );
        },
      }),
      k.widget("ui.sortable", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null,
        },
        _isOverAxis: function (t, e, i) {
          return e <= t && t < e + i;
        },
        _isFloating: function (t) {
          return (
            /left|right/.test(t.css("float")) ||
            /inline|table-cell/.test(t.css("display"))
          );
        },
        _create: function () {
          (this.containerCache = {}),
            this._addClass("ui-sortable"),
            this.refresh(),
            (this.offset = this.element.offset()),
            this._mouseInit(),
            this._setHandleClassName(),
            (this.ready = !0);
        },
        _setOption: function (t, e) {
          this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function () {
          var t = this;
          this._removeClass(
            this.element.find(".ui-sortable-handle"),
            "ui-sortable-handle"
          ),
            k.each(this.items, function () {
              t._addClass(
                this.instance.options.handle
                  ? this.item.find(this.instance.options.handle)
                  : this.item,
                "ui-sortable-handle"
              );
            });
        },
        _destroy: function () {
          this._mouseDestroy();
          for (var t = this.items.length - 1; 0 <= t; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
          return this;
        },
        _mouseCapture: function (t, e) {
          var i = null,
            s = !1,
            n = this;
          return (
            !this.reverting &&
            !this.options.disabled &&
            "static" !== this.options.type &&
            (this._refreshItems(t),
            k(t.target)
              .parents()
              .each(function () {
                if (k.data(this, n.widgetName + "-item") === n)
                  return (i = k(this)), !1;
              }),
            k.data(t.target, n.widgetName + "-item") === n && (i = k(t.target)),
            !!i &&
              !(
                this.options.handle &&
                !e &&
                (k(this.options.handle, i)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === t.target && (s = !0);
                  }),
                !s)
              ) &&
              ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
          );
        },
        _mouseStart: function (t, e, i) {
          var s,
            n,
            o = this.options;
          if (
            ((this.currentContainer = this).refreshPositions(),
            (this.helper = this._createHelper(t)),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            (this.scrollParent = this.helper.scrollParent()),
            (this.offset = this.currentItem.offset()),
            (this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left,
            }),
            k.extend(this.offset, {
              click: {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top,
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
            this.helper.css("position", "absolute"),
            (this.cssPosition = this.helper.css("position")),
            (this.originalPosition = this._generatePosition(t)),
            (this.originalPageX = t.pageX),
            (this.originalPageY = t.pageY),
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
            (this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0],
            }),
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            o.containment && this._setContainment(),
            o.cursor &&
              "auto" !== o.cursor &&
              ((n = this.document.find("body")),
              (this.storedCursor = n.css("cursor")),
              n.css("cursor", o.cursor),
              (this.storedStylesheet = k(
                "<style>*{ cursor: " + o.cursor + " !important; }</style>"
              ).appendTo(n))),
            o.opacity &&
              (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", o.opacity)),
            o.zIndex &&
              (this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", o.zIndex)),
            this.scrollParent[0] !== this.document[0] &&
              "HTML" !== this.scrollParent[0].tagName &&
              (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !i)
          )
            for (s = this.containers.length - 1; 0 <= s; s--)
              this.containers[s]._trigger("activate", t, this._uiHash(this));
          return (
            k.ui.ddmanager && (k.ui.ddmanager.current = this),
            k.ui.ddmanager &&
              !o.dropBehaviour &&
              k.ui.ddmanager.prepareOffsets(this, t),
            (this.dragging = !0),
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(t),
            !0
          );
        },
        _mouseDrag: function (t) {
          var e,
            i,
            s,
            n,
            o = this.options,
            a = !1;
          for (
            this.position = this._generatePosition(t),
              this.positionAbs = this._convertPositionTo("absolute"),
              this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
              this.options.scroll &&
                (this.scrollParent[0] !== this.document[0] &&
                "HTML" !== this.scrollParent[0].tagName
                  ? (this.overflowOffset.top +
                      this.scrollParent[0].offsetHeight -
                      t.pageY <
                    o.scrollSensitivity
                      ? (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop + o.scrollSpeed)
                      : t.pageY - this.overflowOffset.top <
                          o.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop - o.scrollSpeed),
                    this.overflowOffset.left +
                      this.scrollParent[0].offsetWidth -
                      t.pageX <
                    o.scrollSensitivity
                      ? (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft + o.scrollSpeed)
                      : t.pageX - this.overflowOffset.left <
                          o.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft - o.scrollSpeed))
                  : (t.pageY - this.document.scrollTop() < o.scrollSensitivity
                      ? (a = this.document.scrollTop(
                          this.document.scrollTop() - o.scrollSpeed
                        ))
                      : this.window.height() -
                          (t.pageY - this.document.scrollTop()) <
                          o.scrollSensitivity &&
                        (a = this.document.scrollTop(
                          this.document.scrollTop() + o.scrollSpeed
                        )),
                    t.pageX - this.document.scrollLeft() < o.scrollSensitivity
                      ? (a = this.document.scrollLeft(
                          this.document.scrollLeft() - o.scrollSpeed
                        ))
                      : this.window.width() -
                          (t.pageX - this.document.scrollLeft()) <
                          o.scrollSensitivity &&
                        (a = this.document.scrollLeft(
                          this.document.scrollLeft() + o.scrollSpeed
                        ))),
                !1 !== a &&
                  k.ui.ddmanager &&
                  !o.dropBehaviour &&
                  k.ui.ddmanager.prepareOffsets(this, t)),
              this.positionAbs = this._convertPositionTo("absolute"),
              (this.options.axis && "y" === this.options.axis) ||
                (this.helper[0].style.left = this.position.left + "px"),
              (this.options.axis && "x" === this.options.axis) ||
                (this.helper[0].style.top = this.position.top + "px"),
              e = this.items.length - 1;
            0 <= e;
            e--
          )
            if (
              ((s = (i = this.items[e]).item[0]),
              (n = this._intersectsWithPointer(i)) &&
                i.instance === this.currentContainer &&
                !(
                  s === this.currentItem[0] ||
                  this.placeholder[1 === n ? "next" : "prev"]()[0] === s ||
                  k.contains(this.placeholder[0], s) ||
                  ("semi-dynamic" === this.options.type &&
                    k.contains(this.element[0], s))
                ))
            ) {
              if (
                ((this.direction = 1 === n ? "down" : "up"),
                "pointer" !== this.options.tolerance &&
                  !this._intersectsWithSides(i))
              )
                break;
              this._rearrange(t, i), this._trigger("change", t, this._uiHash());
              break;
            }
          return (
            this._contactContainers(t),
            k.ui.ddmanager && k.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            (this.lastPositionAbs = this.positionAbs),
            !1
          );
        },
        _mouseStop: function (t, e) {
          var i, s, n, o;
          if (t)
            return (
              k.ui.ddmanager &&
                !this.options.dropBehaviour &&
                k.ui.ddmanager.drop(this, t),
              this.options.revert
                ? ((s = (i = this).placeholder.offset()),
                  (o = {}),
                  ((n = this.options.axis) && "x" !== n) ||
                    (o.left =
                      s.left -
                      this.offset.parent.left -
                      this.margins.left +
                      (this.offsetParent[0] === this.document[0].body
                        ? 0
                        : this.offsetParent[0].scrollLeft)),
                  (n && "y" !== n) ||
                    (o.top =
                      s.top -
                      this.offset.parent.top -
                      this.margins.top +
                      (this.offsetParent[0] === this.document[0].body
                        ? 0
                        : this.offsetParent[0].scrollTop)),
                  (this.reverting = !0),
                  k(this.helper).animate(
                    o,
                    parseInt(this.options.revert, 10) || 500,
                    function () {
                      i._clear(t);
                    }
                  ))
                : this._clear(t, e),
              !1
            );
        },
        cancel: function () {
          if (this.dragging) {
            this._mouseUp(new k.Event("mouseup", { target: null })),
              "original" === this.options.helper
                ? (this.currentItem.css(this._storedCSS),
                  this._removeClass(this.currentItem, "ui-sortable-helper"))
                : this.currentItem.show();
            for (var t = this.containers.length - 1; 0 <= t; t--)
              this.containers[t]._trigger(
                "deactivate",
                null,
                this._uiHash(this)
              ),
                this.containers[t].containerCache.over &&
                  (this.containers[t]._trigger("out", null, this._uiHash(this)),
                  (this.containers[t].containerCache.over = 0));
          }
          return (
            this.placeholder &&
              (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
              "original" !== this.options.helper &&
                this.helper &&
                this.helper[0].parentNode &&
                this.helper.remove(),
              k.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null,
              }),
              this.domPosition.prev
                ? k(this.domPosition.prev).after(this.currentItem)
                : k(this.domPosition.parent).prepend(this.currentItem)),
            this
          );
        },
        serialize: function (e) {
          var t = this._getItemsAsjQuery(e && e.connected),
            i = [];
          return (
            (e = e || {}),
            k(t).each(function () {
              var t = (k(e.item || this).attr(e.attribute || "id") || "").match(
                e.expression || /(.+)[\-=_](.+)/
              );
              t &&
                i.push(
                  (e.key || t[1] + "[]") +
                    "=" +
                    (e.key && e.expression ? t[1] : t[2])
                );
            }),
            !i.length && e.key && i.push(e.key + "="),
            i.join("&")
          );
        },
        toArray: function (t) {
          var e = this._getItemsAsjQuery(t && t.connected),
            i = [];
          return (
            (t = t || {}),
            e.each(function () {
              i.push(k(t.item || this).attr(t.attribute || "id") || "");
            }),
            i
          );
        },
        _intersectsWith: function (t) {
          var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            s = this.positionAbs.top,
            n = s + this.helperProportions.height,
            o = t.left,
            a = o + t.width,
            r = t.top,
            h = r + t.height,
            l = this.offset.click.top,
            c = this.offset.click.left,
            l = "x" === this.options.axis || (r < s + l && s + l < h),
            c = "y" === this.options.axis || (o < e + c && e + c < a),
            c = l && c;
          return "pointer" === this.options.tolerance ||
            this.options.forcePointerForContainers ||
            ("pointer" !== this.options.tolerance &&
              this.helperProportions[this.floating ? "width" : "height"] >
                t[this.floating ? "width" : "height"])
            ? c
            : o < e + this.helperProportions.width / 2 &&
                i - this.helperProportions.width / 2 < a &&
                r < s + this.helperProportions.height / 2 &&
                n - this.helperProportions.height / 2 < h;
        },
        _intersectsWithPointer: function (t) {
          var e =
              "x" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.top + this.offset.click.top,
                t.top,
                t.height
              ),
            t =
              "y" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.left + this.offset.click.left,
                t.left,
                t.width
              );
          return (
            !(!e || !t) &&
            ((e = this._getDragVerticalDirection()),
            (t = this._getDragHorizontalDirection()),
            this.floating
              ? "right" === t || "down" === e
                ? 2
                : 1
              : e && ("down" === e ? 2 : 1))
          );
        },
        _intersectsWithSides: function (t) {
          var e = this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top + t.height / 2,
              t.height
            ),
            i = this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2,
              t.width
            ),
            s = this._getDragVerticalDirection(),
            t = this._getDragHorizontalDirection();
          return this.floating && t
            ? ("right" === t && i) || ("left" === t && !i)
            : s && (("down" === s && e) || ("up" === s && !e));
        },
        _getDragVerticalDirection: function () {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 != t && (0 < t ? "down" : "up");
        },
        _getDragHorizontalDirection: function () {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 != t && (0 < t ? "right" : "left");
        },
        refresh: function (t) {
          return (
            this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
          );
        },
        _connectWith: function () {
          var t = this.options;
          return t.connectWith.constructor === String
            ? [t.connectWith]
            : t.connectWith;
        },
        _getItemsAsjQuery: function (t) {
          var e,
            i,
            s,
            n,
            o = [],
            a = [],
            r = this._connectWith();
          if (r && t)
            for (e = r.length - 1; 0 <= e; e--)
              for (i = (s = k(r[e], this.document[0])).length - 1; 0 <= i; i--)
                (n = k.data(s[i], this.widgetFullName)) &&
                  n !== this &&
                  !n.options.disabled &&
                  a.push([
                    k.isFunction(n.options.items)
                      ? n.options.items.call(n.element)
                      : k(n.options.items, n.element)
                          .not(".ui-sortable-helper")
                          .not(".ui-sortable-placeholder"),
                    n,
                  ]);
          function h() {
            o.push(this);
          }
          for (
            a.push([
              k.isFunction(this.options.items)
                ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem,
                  })
                : k(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"),
              this,
            ]),
              e = a.length - 1;
            0 <= e;
            e--
          )
            a[e][0].each(h);
          return k(o);
        },
        _removeCurrentsFromItems: function () {
          var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = k.grep(this.items, function (t) {
            for (var e = 0; e < i.length; e++)
              if (i[e] === t.item[0]) return !1;
            return !0;
          });
        },
        _refreshItems: function (t) {
          (this.items = []), (this.containers = [this]);
          var e,
            i,
            s,
            n,
            o,
            a,
            r,
            h,
            l = this.items,
            c = [
              [
                k.isFunction(this.options.items)
                  ? this.options.items.call(this.element[0], t, {
                      item: this.currentItem,
                    })
                  : k(this.options.items, this.element),
                this,
              ],
            ],
            u = this._connectWith();
          if (u && this.ready)
            for (e = u.length - 1; 0 <= e; e--)
              for (i = (s = k(u[e], this.document[0])).length - 1; 0 <= i; i--)
                (n = k.data(s[i], this.widgetFullName)) &&
                  n !== this &&
                  !n.options.disabled &&
                  (c.push([
                    k.isFunction(n.options.items)
                      ? n.options.items.call(n.element[0], t, {
                          item: this.currentItem,
                        })
                      : k(n.options.items, n.element),
                    n,
                  ]),
                  this.containers.push(n));
          for (e = c.length - 1; 0 <= e; e--)
            for (o = c[e][1], i = 0, h = (a = c[e][0]).length; i < h; i++)
              (r = k(a[i])).data(this.widgetName + "-item", o),
                l.push({
                  item: r,
                  instance: o,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                });
        },
        refreshPositions: function (t) {
          var e, i, s, n;
          for (
            this.floating =
              !!this.items.length &&
              ("x" === this.options.axis ||
                this._isFloating(this.items[0].item)),
              this.offsetParent &&
                this.helper &&
                (this.offset.parent = this._getParentOffset()),
              e = this.items.length - 1;
            0 <= e;
            e--
          )
            ((i = this.items[e]).instance !== this.currentContainer &&
              this.currentContainer &&
              i.item[0] !== this.currentItem[0]) ||
              ((s = this.options.toleranceElement
                ? k(this.options.toleranceElement, i.item)
                : i.item),
              t || ((i.width = s.outerWidth()), (i.height = s.outerHeight())),
              (n = s.offset()),
              (i.left = n.left),
              (i.top = n.top));
          if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
          else
            for (e = this.containers.length - 1; 0 <= e; e--)
              (n = this.containers[e].element.offset()),
                (this.containers[e].containerCache.left = n.left),
                (this.containers[e].containerCache.top = n.top),
                (this.containers[e].containerCache.width =
                  this.containers[e].element.outerWidth()),
                (this.containers[e].containerCache.height =
                  this.containers[e].element.outerHeight());
          return this;
        },
        _createPlaceholder: function (i) {
          var s,
            n = (i = i || this).options;
          (n.placeholder && n.placeholder.constructor !== String) ||
            ((s = n.placeholder),
            (n.placeholder = {
              element: function () {
                var t = i.currentItem[0].nodeName.toLowerCase(),
                  e = k("<" + t + ">", i.document[0]);
                return (
                  i
                    ._addClass(
                      e,
                      "ui-sortable-placeholder",
                      s || i.currentItem[0].className
                    )
                    ._removeClass(e, "ui-sortable-helper"),
                  "tbody" === t
                    ? i._createTrPlaceholder(
                        i.currentItem.find("tr").eq(0),
                        k("<tr>", i.document[0]).appendTo(e)
                      )
                    : "tr" === t
                    ? i._createTrPlaceholder(i.currentItem, e)
                    : "img" === t && e.attr("src", i.currentItem.attr("src")),
                  s || e.css("visibility", "hidden"),
                  e
                );
              },
              update: function (t, e) {
                (s && !n.forcePlaceholderSize) ||
                  (e.height() ||
                    e.height(
                      i.currentItem.innerHeight() -
                        parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(i.currentItem.css("paddingBottom") || 0, 10)
                    ),
                  e.width() ||
                    e.width(
                      i.currentItem.innerWidth() -
                        parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(i.currentItem.css("paddingRight") || 0, 10)
                    ));
              },
            })),
            (i.placeholder = k(
              n.placeholder.element.call(i.element, i.currentItem)
            )),
            i.currentItem.after(i.placeholder),
            n.placeholder.update(i, i.placeholder);
        },
        _createTrPlaceholder: function (t, e) {
          var i = this;
          t.children().each(function () {
            k("<td>&#160;</td>", i.document[0])
              .attr("colspan", k(this).attr("colspan") || 1)
              .appendTo(e);
          });
        },
        _contactContainers: function (t) {
          for (
            var e,
              i,
              s,
              n,
              o,
              a,
              r,
              h,
              l,
              c = null,
              u = null,
              d = this.containers.length - 1;
            0 <= d;
            d--
          )
            k.contains(this.currentItem[0], this.containers[d].element[0]) ||
              (this._intersectsWith(this.containers[d].containerCache)
                ? (c &&
                    k.contains(this.containers[d].element[0], c.element[0])) ||
                  ((c = this.containers[d]), (u = d))
                : this.containers[d].containerCache.over &&
                  (this.containers[d]._trigger("out", t, this._uiHash(this)),
                  (this.containers[d].containerCache.over = 0)));
          if (c)
            if (1 === this.containers.length)
              this.containers[u].containerCache.over ||
                (this.containers[u]._trigger("over", t, this._uiHash(this)),
                (this.containers[u].containerCache.over = 1));
            else {
              for (
                i = 1e4,
                  s = null,
                  n = (h = c.floating || this._isFloating(this.currentItem))
                    ? "left"
                    : "top",
                  o = h ? "width" : "height",
                  l = h ? "pageX" : "pageY",
                  e = this.items.length - 1;
                0 <= e;
                e--
              )
                k.contains(
                  this.containers[u].element[0],
                  this.items[e].item[0]
                ) &&
                  this.items[e].item[0] !== this.currentItem[0] &&
                  ((a = this.items[e].item.offset()[n]),
                  (r = !1),
                  t[l] - a > this.items[e][o] / 2 && (r = !0),
                  Math.abs(t[l] - a) < i &&
                    ((i = Math.abs(t[l] - a)),
                    (s = this.items[e]),
                    (this.direction = r ? "up" : "down")));
              (s || this.options.dropOnEmpty) &&
                (this.currentContainer !== this.containers[u]
                  ? (s
                      ? this._rearrange(t, s, null, !0)
                      : this._rearrange(
                          t,
                          null,
                          this.containers[u].element,
                          !0
                        ),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[u]._trigger(
                      "change",
                      t,
                      this._uiHash(this)
                    ),
                    (this.currentContainer = this.containers[u]),
                    this.options.placeholder.update(
                      this.currentContainer,
                      this.placeholder
                    ),
                    this.containers[u]._trigger("over", t, this._uiHash(this)),
                    (this.containers[u].containerCache.over = 1))
                  : this.currentContainer.containerCache.over ||
                    (this.containers[u]._trigger("over", t, this._uiHash()),
                    (this.currentContainer.containerCache.over = 1)));
            }
        },
        _createHelper: function (t) {
          var e = this.options,
            t = k.isFunction(e.helper)
              ? k(e.helper.apply(this.element[0], [t, this.currentItem]))
              : "clone" === e.helper
              ? this.currentItem.clone()
              : this.currentItem;
          return (
            t.parents("body").length ||
              k(
                "parent" !== e.appendTo
                  ? e.appendTo
                  : this.currentItem[0].parentNode
              )[0].appendChild(t[0]),
            t[0] === this.currentItem[0] &&
              (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left"),
              }),
            (t[0].style.width && !e.forceHelperSize) ||
              t.width(this.currentItem.width()),
            (t[0].style.height && !e.forceHelperSize) ||
              t.height(this.currentItem.height()),
            t
          );
        },
        _adjustOffsetFromHelper: function (t) {
          "string" == typeof t && (t = t.split(" ")),
            k.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
            "left" in t &&
              (this.offset.click.left = t.left + this.margins.left),
            "right" in t &&
              (this.offset.click.left =
                this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t &&
              (this.offset.click.top =
                this.helperProportions.height - t.bottom + this.margins.top);
        },
        _getParentOffset: function () {
          this.offsetParent = this.helper.offsetParent();
          var t = this.offsetParent.offset();
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== this.document[0] &&
              k.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((t.left += this.scrollParent.scrollLeft()),
              (t.top += this.scrollParent.scrollTop())),
            (this.offsetParent[0] === this.document[0].body ||
              (this.offsetParent[0].tagName &&
                "html" === this.offsetParent[0].tagName.toLowerCase() &&
                k.ui.ie)) &&
              (t = { top: 0, left: 0 }),
            {
              top:
                t.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                t.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
          var t = this.currentItem.position();
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var t,
            e,
            i = this.options;
          "parent" === i.containment &&
            (i.containment = this.helper[0].parentNode),
            ("document" !== i.containment && "window" !== i.containment) ||
              (this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                "document" === i.containment
                  ? this.document.width()
                  : this.window.width() -
                    this.helperProportions.width -
                    this.margins.left,
                ("document" === i.containment
                  ? this.document.height() ||
                    document.body.parentNode.scrollHeight
                  : this.window.height() ||
                    this.document[0].body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ]),
            /^(document|window|parent)$/.test(i.containment) ||
              ((t = k(i.containment)[0]),
              (e = k(i.containment).offset()),
              (i = "hidden" !== k(t).css("overflow")),
              (this.containment = [
                e.left +
                  (parseInt(k(t).css("borderLeftWidth"), 10) || 0) +
                  (parseInt(k(t).css("paddingLeft"), 10) || 0) -
                  this.margins.left,
                e.top +
                  (parseInt(k(t).css("borderTopWidth"), 10) || 0) +
                  (parseInt(k(t).css("paddingTop"), 10) || 0) -
                  this.margins.top,
                e.left +
                  (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                  (parseInt(k(t).css("borderLeftWidth"), 10) || 0) -
                  (parseInt(k(t).css("paddingRight"), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left,
                e.top +
                  (i
                    ? Math.max(t.scrollHeight, t.offsetHeight)
                    : t.offsetHeight) -
                  (parseInt(k(t).css("borderTopWidth"), 10) || 0) -
                  (parseInt(k(t).css("paddingBottom"), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top,
              ]));
        },
        _convertPositionTo: function (t, e) {
          e = e || this.position;
          var i = "absolute" === t ? 1 : -1,
            s =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                k.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            t = /(html|body)/i.test(s[0].tagName);
          return {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : t
                ? 0
                : s.scrollTop()) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : t
                ? 0
                : s.scrollLeft()) *
                i,
          };
        },
        _generatePosition: function (t) {
          var e = this.options,
            i = t.pageX,
            s = t.pageY,
            n =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                k.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            o = /(html|body)/i.test(n[0].tagName);
          return (
            "relative" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0] !== this.offsetParent[0]) ||
              (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition &&
              (this.containment &&
                (t.pageX - this.offset.click.left < this.containment[0] &&
                  (i = this.containment[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < this.containment[1] &&
                  (s = this.containment[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > this.containment[2] &&
                  (i = this.containment[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > this.containment[3] &&
                  (s = this.containment[3] + this.offset.click.top)),
              e.grid &&
                ((t =
                  this.originalPageY +
                  Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1]),
                (s =
                  !this.containment ||
                  (t - this.offset.click.top >= this.containment[1] &&
                    t - this.offset.click.top <= this.containment[3])
                    ? t
                    : t - this.offset.click.top >= this.containment[1]
                    ? t - e.grid[1]
                    : t + e.grid[1]),
                (t =
                  this.originalPageX +
                  Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0]),
                (i =
                  !this.containment ||
                  (t - this.offset.click.left >= this.containment[0] &&
                    t - this.offset.click.left <= this.containment[2])
                    ? t
                    : t - this.offset.click.left >= this.containment[0]
                    ? t - e.grid[0]
                    : t + e.grid[0]))),
            {
              top:
                s -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : o
                  ? 0
                  : n.scrollTop()),
              left:
                i -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : o
                  ? 0
                  : n.scrollLeft()),
            }
          );
        },
        _rearrange: function (t, e, i, s) {
          i
            ? i[0].appendChild(this.placeholder[0])
            : e.item[0].parentNode.insertBefore(
                this.placeholder[0],
                "down" === this.direction ? e.item[0] : e.item[0].nextSibling
              ),
            (this.counter = this.counter ? ++this.counter : 1);
          var n = this.counter;
          this._delay(function () {
            n === this.counter && this.refreshPositions(!s);
          });
        },
        _clear: function (t, e) {
          this.reverting = !1;
          var i,
            s = [];
          if (
            (!this._noFinalSort &&
              this.currentItem.parent().length &&
              this.placeholder.before(this.currentItem),
            (this._noFinalSort = null),
            this.helper[0] === this.currentItem[0])
          ) {
            for (i in this._storedCSS)
              ("auto" !== this._storedCSS[i] &&
                "static" !== this._storedCSS[i]) ||
                (this._storedCSS[i] = "");
            this.currentItem.css(this._storedCSS),
              this._removeClass(this.currentItem, "ui-sortable-helper");
          } else this.currentItem.show();
          function n(e, i, s) {
            return function (t) {
              s._trigger(e, t, i._uiHash(i));
            };
          }
          for (
            this.fromOutside &&
              !e &&
              s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
              }),
              (!this.fromOutside &&
                this.domPosition.prev ===
                  this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                this.domPosition.parent === this.currentItem.parent()[0]) ||
                e ||
                s.push(function (t) {
                  this._trigger("update", t, this._uiHash());
                }),
              this !== this.currentContainer &&
                (e ||
                  (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash());
                  }),
                  s.push(
                    function (e) {
                      return function (t) {
                        e._trigger("receive", t, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ),
                  s.push(
                    function (e) {
                      return function (t) {
                        e._trigger("update", t, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ))),
              i = this.containers.length - 1;
            0 <= i;
            i--
          )
            e || s.push(n("deactivate", this, this.containers[i])),
              this.containers[i].containerCache.over &&
                (s.push(n("out", this, this.containers[i])),
                (this.containers[i].containerCache.over = 0));
          if (
            (this.storedCursor &&
              (this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()),
            this._storedOpacity &&
              this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex &&
              this.helper.css(
                "zIndex",
                "auto" === this._storedZIndex ? "" : this._storedZIndex
              ),
            (this.dragging = !1),
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval ||
              (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)),
            !e)
          ) {
            for (i = 0; i < s.length; i++) s[i].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !this.cancelHelperRemoval;
        },
        _trigger: function () {
          !1 === k.Widget.prototype._trigger.apply(this, arguments) &&
            this.cancel();
        },
        _uiHash: function (t) {
          var e = t || this;
          return {
            helper: e.helper,
            placeholder: e.placeholder || k([]),
            position: e.position,
            originalPosition: e.originalPosition,
            offset: e.positionAbs,
            item: e.currentItem,
            sender: t ? t.element : null,
          };
        },
      }),
      k.widget("ui.accordion", {
        version: "1.12.1",
        options: {
          active: 0,
          animate: {},
          classes: {
            "ui-accordion-header": "ui-corner-top",
            "ui-accordion-header-collapsed": "ui-corner-all",
            "ui-accordion-content": "ui-corner-bottom",
          },
          collapsible: !1,
          event: "click",
          header: "> li > :first-child, > :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide",
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show",
        },
        _create: function () {
          var t = this.options;
          (this.prevShow = this.prevHide = k()),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            t.collapsible ||
              (!1 !== t.active && null != t.active) ||
              (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : k(),
          };
        },
        _createIcons: function () {
          var t,
            e = this.options.icons;
          e &&
            ((t = k("<span>")),
            this._addClass(
              t,
              "ui-accordion-header-icon",
              "ui-icon " + e.header
            ),
            t.prependTo(this.headers),
            (t = this.active.children(".ui-accordion-header-icon")),
            this._removeClass(t, e.header)
              ._addClass(t, null, e.activeHeader)
              ._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function () {
          var t;
          this.element.removeAttr("role"),
            this.headers
              .removeAttr(
                "role aria-expanded aria-selected aria-controls tabIndex"
              )
              .removeUniqueId(),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .css("display", "")
              .removeAttr("role aria-hidden aria-labelledby")
              .removeUniqueId()),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          "active" !== t
            ? ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              "icons" === t && (this._destroyIcons(), e && this._createIcons()))
            : this._activate(e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(
              this.headers.add(this.headers.next()),
              null,
              "ui-state-disabled",
              !!t
            );
        },
        _keydown: function (t) {
          if (!t.altKey && !t.ctrlKey) {
            var e = k.ui.keyCode,
              i = this.headers.length,
              s = this.headers.index(t.target),
              n = !1;
            switch (t.keyCode) {
              case e.RIGHT:
              case e.DOWN:
                n = this.headers[(s + 1) % i];
                break;
              case e.LEFT:
              case e.UP:
                n = this.headers[(s - 1 + i) % i];
                break;
              case e.SPACE:
              case e.ENTER:
                this._eventHandler(t);
                break;
              case e.HOME:
                n = this.headers[0];
                break;
              case e.END:
                n = this.headers[i - 1];
            }
            n &&
              (k(t.target).attr("tabIndex", -1),
              k(n).attr("tabIndex", 0),
              k(n).trigger("focus"),
              t.preventDefault());
          }
        },
        _panelKeyDown: function (t) {
          t.keyCode === k.ui.keyCode.UP &&
            t.ctrlKey &&
            k(t.currentTarget).prev().trigger("focus");
        },
        refresh: function () {
          var t = this.options;
          this._processPanels(),
            (!1 === t.active && !0 === t.collapsible) || !this.headers.length
              ? ((t.active = !1), (this.active = k()))
              : !1 === t.active
              ? this._activate(0)
              : this.active.length &&
                !k.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length
                ? ((t.active = !1), (this.active = k()))
                : this._activate(Math.max(0, t.active - 1))
              : (t.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          var t = this.headers,
            e = this.panels;
          (this.headers = this.element.find(this.options.header)),
            this._addClass(
              this.headers,
              "ui-accordion-header ui-accordion-header-collapsed",
              "ui-state-default"
            ),
            (this.panels = this.headers
              .next()
              .filter(":not(.ui-accordion-content-active)")
              .hide()),
            this._addClass(
              this.panels,
              "ui-accordion-content",
              "ui-helper-reset ui-widget-content"
            ),
            e &&
              (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function () {
          var i,
            t = this.options,
            e = t.heightStyle,
            s = this.element.parent();
          (this.active = this._findActive(t.active)),
            this._addClass(
              this.active,
              "ui-accordion-header-active",
              "ui-state-active"
            )._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers
              .attr("role", "tab")
              .each(function () {
                var t = k(this),
                  e = t.uniqueId().attr("id"),
                  i = t.next(),
                  s = i.uniqueId().attr("id");
                t.attr("aria-controls", s), i.attr("aria-labelledby", e);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              })
              .next()
              .attr({ "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  })
                  .next()
                  .attr({ "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(t.event),
            "fill" === e
              ? ((i = s.height()),
                this.element.siblings(":visible").each(function () {
                  var t = k(this),
                    e = t.css("position");
                  "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
                }),
                this.headers.each(function () {
                  i -= k(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    k(this).height(
                      Math.max(0, i - k(this).innerHeight() + k(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === e &&
                ((i = 0),
                this.headers
                  .next()
                  .each(function () {
                    var t = k(this).is(":visible");
                    t || k(this).show(),
                      (i = Math.max(i, k(this).css("height", "").height())),
                      t || k(this).hide();
                  })
                  .height(i));
        },
        _activate: function (t) {
          t = this._findActive(t)[0];
          t !== this.active[0] &&
            ((t = t || this.active[0]),
            this._eventHandler({
              target: t,
              currentTarget: t,
              preventDefault: k.noop,
            }));
        },
        _findActive: function (t) {
          return "number" == typeof t ? this.headers.eq(t) : k();
        },
        _setupEvents: function (t) {
          var i = { keydown: "_keydown" };
          t &&
            k.each(t.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (t) {
          var e = this.options,
            i = this.active,
            s = k(t.currentTarget),
            n = s[0] === i[0],
            o = n && e.collapsible,
            a = o ? k() : s.next(),
            r = i.next(),
            a = {
              oldHeader: i,
              oldPanel: r,
              newHeader: o ? k() : s,
              newPanel: a,
            };
          t.preventDefault(),
            (n && !e.collapsible) ||
              !1 === this._trigger("beforeActivate", t, a) ||
              ((e.active = !o && this.headers.index(s)),
              (this.active = n ? k() : s),
              this._toggle(a),
              this._removeClass(
                i,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              e.icons &&
                ((i = i.children(".ui-accordion-header-icon")),
                this._removeClass(i, null, e.icons.activeHeader)._addClass(
                  i,
                  null,
                  e.icons.header
                )),
              n ||
                (this._removeClass(
                  s,
                  "ui-accordion-header-collapsed"
                )._addClass(s, "ui-accordion-header-active", "ui-state-active"),
                e.icons &&
                  ((n = s.children(".ui-accordion-header-icon")),
                  this._removeClass(n, null, e.icons.header)._addClass(
                    n,
                    null,
                    e.icons.activeHeader
                  )),
                this._addClass(s.next(), "ui-accordion-content-active")));
        },
        _toggle: function (t) {
          var e = t.newPanel,
            i = this.prevShow.length ? this.prevShow : t.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = e),
            (this.prevHide = i),
            this.options.animate
              ? this._animate(e, i, t)
              : (i.hide(), e.show(), this._toggleComplete(t)),
            i.attr({ "aria-hidden": "true" }),
            i
              .prev()
              .attr({ "aria-selected": "false", "aria-expanded": "false" }),
            e.length && i.length
              ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
              : e.length &&
                this.headers
                  .filter(function () {
                    return 0 === parseInt(k(this).attr("tabIndex"), 10);
                  })
                  .attr("tabIndex", -1),
            e
              .attr("aria-hidden", "false")
              .prev()
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              });
        },
        _animate: function (t, i, e) {
          var s,
            n,
            o,
            a = this,
            r = 0,
            h = t.css("box-sizing"),
            l = t.length && (!i.length || t.index() < i.index()),
            c = this.options.animate || {},
            u = (l && c.down) || c,
            l = function () {
              a._toggleComplete(e);
            };
          return (
            "number" == typeof u && (o = u),
            "string" == typeof u && (n = u),
            (n = n || u.easing || c.easing),
            (o = o || u.duration || c.duration),
            i.length
              ? t.length
                ? ((s = t.show().outerHeight()),
                  i.animate(this.hideProps, {
                    duration: o,
                    easing: n,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: n,
                    complete: l,
                    step: function (t, e) {
                      (e.now = Math.round(t)),
                        "height" !== e.prop
                          ? "content-box" === h && (r += e.now)
                          : "content" !== a.options.heightStyle &&
                            ((e.now = Math.round(s - i.outerHeight() - r)),
                            (r = 0));
                    },
                  }))
                : i.animate(this.hideProps, o, n, l)
              : t.animate(this.showProps, o, n, l)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel,
            i = e.prev();
          this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(
              i,
              "ui-accordion-header-collapsed"
            ),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      }),
      k.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-caret-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .attr({ role: this.options.role, tabIndex: 0 }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (t) {
                var e = k(t.target),
                  i = k(k.ui.safeActiveElement(this.document[0]));
                !this.mouseHandled &&
                  e.not(".ui-state-disabled").length &&
                  (this.select(t),
                  t.isPropagationStopped() || (this.mouseHandled = !0),
                  e.has(".ui-menu").length
                    ? this.expand(t)
                    : !this.element.is(":focus") &&
                      i.closest(".ui-menu").length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (t) {
                var e, i;
                this.previousFilter ||
                  ((e = k(t.target).closest(".ui-menu-item")),
                  (i = k(t.currentTarget)),
                  e[0] === i[0] &&
                    (this._removeClass(
                      i.siblings().children(".ui-state-active"),
                      null,
                      "ui-state-active"
                    ),
                    this.focus(t, i)));
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (t) {
                this._delay(function () {
                  k.contains(
                    this.element[0],
                    k.ui.safeActiveElement(this.document[0])
                  ) || this.collapseAll(t);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          var t = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled")
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeAttr(
              "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
            )
            .removeUniqueId()
            .show(),
            t.children().each(function () {
              var t = k(this);
              t.data("ui-menu-submenu-caret") && t.remove();
            });
        },
        _keydown: function (t) {
          var e,
            i,
            s,
            n = !0;
          switch (t.keyCode) {
            case k.ui.keyCode.PAGE_UP:
              this.previousPage(t);
              break;
            case k.ui.keyCode.PAGE_DOWN:
              this.nextPage(t);
              break;
            case k.ui.keyCode.HOME:
              this._move("first", "first", t);
              break;
            case k.ui.keyCode.END:
              this._move("last", "last", t);
              break;
            case k.ui.keyCode.UP:
              this.previous(t);
              break;
            case k.ui.keyCode.DOWN:
              this.next(t);
              break;
            case k.ui.keyCode.LEFT:
              this.collapse(t);
              break;
            case k.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(t);
              break;
            case k.ui.keyCode.ENTER:
            case k.ui.keyCode.SPACE:
              this._activate(t);
              break;
            case k.ui.keyCode.ESCAPE:
              this.collapse(t);
              break;
            default:
              (n = !1),
                (e = this.previousFilter || ""),
                (s = !1),
                (i =
                  96 <= t.keyCode && t.keyCode <= 105
                    ? (t.keyCode - 96).toString()
                    : String.fromCharCode(t.keyCode)),
                clearTimeout(this.filterTimer),
                i === e ? (s = !0) : (i = e + i),
                (e = this._filterMenuItems(i)),
                (e =
                  s && -1 !== e.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : e).length ||
                  ((i = String.fromCharCode(t.keyCode)),
                  (e = this._filterMenuItems(i))),
                e.length
                  ? (this.focus(t, e),
                    (this.previousFilter = i),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          n && t.preventDefault();
        },
        _activate: function (t) {
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            (this.active.children("[aria-haspopup='true']").length
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var t,
            e,
            s = this,
            n = this.options.icons.submenu,
            i = this.element.find(this.options.menus);
          this._toggleClass(
            "ui-menu-icons",
            null,
            !!this.element.find(".ui-icon").length
          ),
            (e = i
              .filter(":not(.ui-menu)")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var t = k(this),
                  e = t.prev(),
                  i = k("<span>").data("ui-menu-submenu-caret", !0);
                s._addClass(i, "ui-menu-icon", "ui-icon " + n),
                  e.attr("aria-haspopup", "true").prepend(i),
                  t.attr("aria-labelledby", e.attr("id"));
              })),
            this._addClass(
              e,
              "ui-menu",
              "ui-widget ui-widget-content ui-front"
            ),
            (t = i.add(this.element).find(this.options.items))
              .not(".ui-menu-item")
              .each(function () {
                var t = k(this);
                s._isDivider(t) &&
                  s._addClass(t, "ui-menu-divider", "ui-widget-content");
              }),
            (i = (e = t.not(".ui-menu-item, .ui-menu-divider"))
              .children()
              .not(".ui-menu")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() })),
            this._addClass(e, "ui-menu-item")._addClass(
              i,
              "ui-menu-item-wrapper"
            ),
            t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !k.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          var i;
          "icons" === t &&
            ((i = this.element.find(".ui-menu-icon")),
            this._removeClass(i, null, this.options.icons.submenu)._addClass(
              i,
              null,
              e.submenu
            )),
            this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", String(t)),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function (t, e) {
          var i;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (i = this.active.children(".ui-menu-item-wrapper")),
            this._addClass(i, null, "ui-state-active"),
            this.options.role &&
              this.element.attr("aria-activedescendant", i.attr("id")),
            (i = this.active
              .parent()
              .closest(".ui-menu-item")
              .children(".ui-menu-item-wrapper")),
            this._addClass(i, null, "ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")).length &&
              t &&
              /^mouse/.test(t.type) &&
              this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (t) {
          var e, i, s;
          this._hasScroll() &&
            ((i = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (s = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0),
            (e = t.offset().top - this.activeMenu.offset().top - i - s),
            (i = this.activeMenu.scrollTop()),
            (s = this.activeMenu.height()),
            (t = t.outerHeight()),
            e < 0
              ? this.activeMenu.scrollTop(i + e)
              : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this._removeClass(
                this.active.children(".ui-menu-item-wrapper"),
                null,
                "ui-state-active"
              ),
              this._trigger("blur", t, { item: this.active }),
              (this.active = null));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (t) {
          var e = k.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(t.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            t
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(e);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var t = i
                ? this.element
                : k(e && e.target).closest(this.element.find(".ui-menu"));
              t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(
                  t.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = t);
            }, this.delay));
        },
        _close: function (t) {
          (t = t || (this.active ? this.active.parent() : this.element))
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function (t) {
          return !k(t.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var s;
          this.active &&
            (s =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item"
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (s && s.length && this.active) ||
              (s = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, s);
        },
        nextPage: function (t) {
          var e, i, s;
          this.active
            ? this.isLastItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (e = k(this)).offset().top - i - s < 0;
                  }),
                  this.focus(t, e))
                : this.focus(
                    t,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? "last" : "first"]()
                  ))
            : this.next(t);
        },
        previousPage: function (t) {
          var e, i, s;
          this.active
            ? this.isFirstItem() ||
              (this._hasScroll()
                ? ((i = this.active.offset().top),
                  (s = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return 0 < (e = k(this)).offset().top - i + s;
                  }),
                  this.focus(t, e))
                : this.focus(
                    t,
                    this.activeMenu.find(this.options.items).first()
                  ))
            : this.next(t);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (t) {
          this.active = this.active || k(t.target).closest(".ui-menu-item");
          var e = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, e);
        },
        _filterMenuItems: function (t) {
          var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            e = new RegExp("^" + t, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return e.test(
                k.trim(k(this).children(".ui-menu-item-wrapper").text())
              );
            });
        },
      });
    k.widget("ui.autocomplete", {
      version: "1.12.1",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var i,
          s,
          n,
          t = this.element[0].nodeName.toLowerCase(),
          e = "textarea" === t,
          t = "input" === t;
        (this.isMultiLine = e || (!t && this._isContentEditable(this.element))),
          (this.valueMethod = this.element[e || t ? "val" : "text"]),
          (this.isNewMenu = !0),
          this._addClass("ui-autocomplete-input"),
          this.element.attr("autocomplete", "off"),
          this._on(this.element, {
            keydown: function (t) {
              if (this.element.prop("readOnly")) s = n = i = !0;
              else {
                s = n = i = !1;
                var e = k.ui.keyCode;
                switch (t.keyCode) {
                  case e.PAGE_UP:
                    (i = !0), this._move("previousPage", t);
                    break;
                  case e.PAGE_DOWN:
                    (i = !0), this._move("nextPage", t);
                    break;
                  case e.UP:
                    (i = !0), this._keyEvent("previous", t);
                    break;
                  case e.DOWN:
                    (i = !0), this._keyEvent("next", t);
                    break;
                  case e.ENTER:
                    this.menu.active &&
                      ((i = !0), t.preventDefault(), this.menu.select(t));
                    break;
                  case e.TAB:
                    this.menu.active && this.menu.select(t);
                    break;
                  case e.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(t),
                      t.preventDefault());
                    break;
                  default:
                    (s = !0), this._searchTimeout(t);
                }
              }
            },
            keypress: function (t) {
              if (i)
                return (
                  (i = !1),
                  void (
                    (this.isMultiLine && !this.menu.element.is(":visible")) ||
                    t.preventDefault()
                  )
                );
              if (!s) {
                var e = k.ui.keyCode;
                switch (t.keyCode) {
                  case e.PAGE_UP:
                    this._move("previousPage", t);
                    break;
                  case e.PAGE_DOWN:
                    this._move("nextPage", t);
                    break;
                  case e.UP:
                    this._keyEvent("previous", t);
                    break;
                  case e.DOWN:
                    this._keyEvent("next", t);
                }
              }
            },
            input: function (t) {
              if (n) return (n = !1), void t.preventDefault();
              this._searchTimeout(t);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              this.cancelBlur
                ? delete this.cancelBlur
                : (clearTimeout(this.searching),
                  this.close(t),
                  this._change(t));
            },
          }),
          this._initSource(),
          (this.menu = k("<ul>")
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .menu("instance")),
          this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
          this._on(this.menu.element, {
            mousedown: function (t) {
              t.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur,
                    this.element[0] !==
                      k.ui.safeActiveElement(this.document[0]) &&
                      this.element.trigger("focus");
                });
            },
            menufocus: function (t, e) {
              var i;
              if (
                this.isNewMenu &&
                ((this.isNewMenu = !1),
                t.originalEvent && /^mouse/.test(t.originalEvent.type))
              )
                return (
                  this.menu.blur(),
                  void this.document.one("mousemove", function () {
                    k(t.target).trigger(t.originalEvent);
                  })
                );
              (i = e.item.data("ui-autocomplete-item")),
                !1 !== this._trigger("focus", t, { item: i }) &&
                  t.originalEvent &&
                  /^key/.test(t.originalEvent.type) &&
                  this._value(i.value),
                (i = e.item.attr("aria-label") || i.value) &&
                  k.trim(i).length &&
                  (this.liveRegion.children().hide(),
                  k("<div>").text(i).appendTo(this.liveRegion));
            },
            menuselect: function (t, e) {
              var i = e.item.data("ui-autocomplete-item"),
                s = this.previous;
              this.element[0] !== k.ui.safeActiveElement(this.document[0]) &&
                (this.element.trigger("focus"),
                (this.previous = s),
                this._delay(function () {
                  (this.previous = s), (this.selectedItem = i);
                })),
                !1 !== this._trigger("select", t, { item: i }) &&
                  this._value(i.value),
                (this.term = this._value()),
                this.close(t),
                (this.selectedItem = i);
            },
          }),
          (this.liveRegion = k("<div>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions",
          }).appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element.removeAttr("autocomplete"),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "source" === t && this._initSource(),
          "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
          "disabled" === t && e && this.xhr && this.xhr.abort();
      },
      _isEventTargetInWidget: function (t) {
        var e = this.menu.element[0];
        return (
          t.target === this.element[0] ||
          t.target === e ||
          k.contains(e, t.target)
        );
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close();
      },
      _appendTo: function () {
        var t = this.options.appendTo;
        return (
          ((t =
            t &&
            (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) &&
            t[0]) ||
            (t = this.element.closest(".ui-front, dialog")),
          t.length || (t = this.document[0].body),
          t
        );
      },
      _initSource: function () {
        var i,
          s,
          n = this;
        k.isArray(this.options.source)
          ? ((i = this.options.source),
            (this.source = function (t, e) {
              e(k.ui.autocomplete.filter(i, t.term));
            }))
          : "string" == typeof this.options.source
          ? ((s = this.options.source),
            (this.source = function (t, e) {
              n.xhr && n.xhr.abort(),
                (n.xhr = k.ajax({
                  url: s,
                  data: t,
                  dataType: "json",
                  success: function (t) {
                    e(t);
                  },
                  error: function () {
                    e([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (s) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            var t = this.term === this._value(),
              e = this.menu.element.is(":visible"),
              i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
            (t && (!t || e || i)) ||
              ((this.selectedItem = null), this.search(null, s));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : !1 !== this._trigger("search", e)
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this._addClass("ui-autocomplete-loading"),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var e = ++this.requestIndex;
        return k.proxy(function (t) {
          e === this.requestIndex && this.__response(t),
            this.pending--,
            this.pending || this._removeClass("ui-autocomplete-loading");
        }, this);
      },
      __response: function (t) {
        (t = t && this._normalize(t)),
          this._trigger("response", null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger("open"))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this._off(this.document, "mousedown"),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", t));
      },
      _change: function (t) {
        this.previous !== this._value() &&
          this._trigger("change", t, { item: this.selectedItem });
      },
      _normalize: function (t) {
        return t.length && t[0].label && t[0].value
          ? t
          : k.map(t, function (t) {
              return "string" == typeof t
                ? { label: t, value: t }
                : k.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label,
                  });
            });
      },
      _suggest: function (t) {
        var e = this.menu.element.empty();
        this._renderMenu(e, t),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          e.show(),
          this._resizeMenu(),
          e.position(k.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(),
          this._on(this.document, { mousedown: "_closeOnClickOutside" });
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(
          Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (i, t) {
        var s = this;
        k.each(t, function (t, e) {
          s._renderItemData(i, e);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-autocomplete-item", e);
      },
      _renderItem: function (t, e) {
        return k("<li>").append(k("<div>").text(e.label)).appendTo(t);
      },
      _move: function (t, e) {
        if (this.menu.element.is(":visible"))
          return (this.menu.isFirstItem() && /^previous/.test(t)) ||
            (this.menu.isLastItem() && /^next/.test(t))
            ? (this.isMultiLine || this._value(this.term),
              void this.menu.blur())
            : void this.menu[t](e);
        this.search(null, e);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (this.isMultiLine && !this.menu.element.is(":visible")) ||
          (this._move(t, e), e.preventDefault());
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1;
        var e = t.prop("contentEditable");
        return "inherit" === e
          ? this._isContentEditable(t.parent())
          : "true" === e;
      },
    }),
      k.extend(k.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (t, e) {
          var i = new RegExp(k.ui.autocomplete.escapeRegex(e), "i");
          return k.grep(t, function (t) {
            return i.test(t.label || t.value || t);
          });
        },
      }),
      k.widget("ui.autocomplete", k.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (1 < t ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (t) {
          var e;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((e =
                t && t.length
                  ? this.options.messages.results(t.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              k("<div>").text(e).appendTo(this.liveRegion));
        },
      });
    k.ui.autocomplete;
    var g = /ui-corner-([a-z]){2,6}/g;
    k.widget("ui.controlgroup", {
      version: "1.12.1",
      defaultElement: "<div>",
      options: {
        direction: "horizontal",
        disabled: null,
        onlyVisible: !0,
        items: {
          button:
            "input[type=button], input[type=submit], input[type=reset], button, a",
          controlgroupLabel: ".ui-controlgroup-label",
          checkboxradio: "input[type='checkbox'], input[type='radio']",
          selectmenu: "select",
          spinner: ".ui-spinner-input",
        },
      },
      _create: function () {
        this._enhance();
      },
      _enhance: function () {
        this.element.attr("role", "toolbar"), this.refresh();
      },
      _destroy: function () {
        this._callChildMethod("destroy"),
          this.childWidgets.removeData("ui-controlgroup-data"),
          this.element.removeAttr("role"),
          this.options.items.controlgroupLabel &&
            this.element
              .find(this.options.items.controlgroupLabel)
              .find(".ui-controlgroup-label-contents")
              .contents()
              .unwrap();
      },
      _initWidgets: function () {
        var o = this,
          a = [];
        k.each(this.options.items, function (s, t) {
          var e,
            n = {};
          if (t)
            return "controlgroupLabel" === s
              ? ((e = o.element.find(t)).each(function () {
                  var t = k(this);
                  t.children(".ui-controlgroup-label-contents").length ||
                    t
                      .contents()
                      .wrapAll(
                        "<span class='ui-controlgroup-label-contents'></span>"
                      );
                }),
                o._addClass(
                  e,
                  null,
                  "ui-widget ui-widget-content ui-state-default"
                ),
                void (a = a.concat(e.get())))
              : void (
                  k.fn[s] &&
                  ((n = o["_" + s + "Options"]
                    ? o["_" + s + "Options"]("middle")
                    : { classes: {} }),
                  o.element.find(t).each(function () {
                    var t = k(this),
                      e = t[s]("instance"),
                      i = k.widget.extend({}, n);
                    ("button" === s && t.parent(".ui-spinner").length) ||
                      ((e = e || t[s]()[s]("instance")) &&
                        (i.classes = o._resolveClassesValues(i.classes, e)),
                      t[s](i),
                      (i = t[s]("widget")),
                      k.data(
                        i[0],
                        "ui-controlgroup-data",
                        e || t[s]("instance")
                      ),
                      a.push(i[0]));
                  }))
                );
        }),
          (this.childWidgets = k(k.unique(a))),
          this._addClass(this.childWidgets, "ui-controlgroup-item");
      },
      _callChildMethod: function (e) {
        this.childWidgets.each(function () {
          var t = k(this).data("ui-controlgroup-data");
          t && t[e] && t[e]();
        });
      },
      _updateCornerClass: function (t, e) {
        e = this._buildSimpleOptions(e, "label").classes.label;
        this._removeClass(
          t,
          null,
          "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
        ),
          this._addClass(t, null, e);
      },
      _buildSimpleOptions: function (t, e) {
        var i = "vertical" === this.options.direction,
          s = { classes: {} };
        return (
          (s.classes[e] = {
            middle: "",
            first: "ui-corner-" + (i ? "top" : "left"),
            last: "ui-corner-" + (i ? "bottom" : "right"),
            only: "ui-corner-all",
          }[t]),
          s
        );
      },
      _spinnerOptions: function (t) {
        t = this._buildSimpleOptions(t, "ui-spinner");
        return (
          (t.classes["ui-spinner-up"] = ""),
          (t.classes["ui-spinner-down"] = ""),
          t
        );
      },
      _buttonOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-button");
      },
      _checkboxradioOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-checkboxradio-label");
      },
      _selectmenuOptions: function (t) {
        var e = "vertical" === this.options.direction;
        return {
          width: e && "auto",
          classes: {
            middle: {
              "ui-selectmenu-button-open": "",
              "ui-selectmenu-button-closed": "",
            },
            first: {
              "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "top" : "left"),
            },
            last: {
              "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "bottom" : "right"),
            },
            only: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
          }[t],
        };
      },
      _resolveClassesValues: function (i, s) {
        var n = {};
        return (
          k.each(i, function (t) {
            var e = s.options.classes[t] || "",
              e = k.trim(e.replace(g, ""));
            n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
          }),
          n
        );
      },
      _setOption: function (t, e) {
        "direction" === t &&
          this._removeClass("ui-controlgroup-" + this.options.direction),
          this._super(t, e),
          "disabled" !== t
            ? this.refresh()
            : this._callChildMethod(e ? "disable" : "enable");
      },
      refresh: function () {
        var n,
          o = this;
        this._addClass(
          "ui-controlgroup ui-controlgroup-" + this.options.direction
        ),
          "horizontal" === this.options.direction &&
            this._addClass(null, "ui-helper-clearfix"),
          this._initWidgets(),
          (n = this.childWidgets),
          this.options.onlyVisible && (n = n.filter(":visible")),
          n.length &&
            (k.each(["first", "last"], function (t, e) {
              var i,
                s = n[e]().data("ui-controlgroup-data");
              s && o["_" + s.widgetName + "Options"]
                ? (((i = o["_" + s.widgetName + "Options"](
                    1 === n.length ? "only" : e
                  )).classes = o._resolveClassesValues(i.classes, s)),
                  s.element[s.widgetName](i))
                : o._updateCornerClass(n[e](), e);
            }),
            this._callChildMethod("refresh"));
      },
    });
    k.widget("ui.checkboxradio", [
      k.ui.formResetMixin,
      {
        version: "1.12.1",
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: {
            "ui-checkboxradio-label": "ui-corner-all",
            "ui-checkboxradio-icon": "ui-corner-all",
          },
        },
        _getCreateOptions: function () {
          var t,
            e = this,
            i = this._super() || {};
          return (
            this._readType(),
            (t = this.element.labels()),
            (this.label = k(t[t.length - 1])),
            this.label.length ||
              k.error("No label found for checkboxradio widget"),
            (this.originalLabel = ""),
            this.label
              .contents()
              .not(this.element[0])
              .each(function () {
                e.originalLabel +=
                  3 === this.nodeType ? k(this).text() : this.outerHTML;
              }),
            this.originalLabel && (i.label = this.originalLabel),
            null != (t = this.element[0].disabled) && (i.disabled = t),
            i
          );
        },
        _create: function () {
          var t = this.element[0].checked;
          this._bindFormResetHandler(),
            null == this.options.disabled &&
              (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(
              this.label,
              "ui-checkboxradio-label",
              "ui-button ui-widget"
            ),
            "radio" === this.type &&
              this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(
                this.label,
                "ui-checkboxradio-checked",
                "ui-state-active"
              ),
              this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
              change: "_toggleClasses",
              focus: function () {
                this._addClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
              blur: function () {
                this._removeClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
            });
        },
        _readType: function () {
          var t = this.element[0].nodeName.toLowerCase();
          (this.type = this.element[0].type),
            ("input" === t && /radio|checkbox/.test(this.type)) ||
              k.error(
                "Can't create checkboxradio on element.nodeName=" +
                  t +
                  " and element.type=" +
                  this.type
              );
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked);
        },
        widget: function () {
          return this.label;
        },
        _getRadioGroup: function () {
          var t = this.element[0].name,
            e = "input[name='" + k.ui.escapeSelector(t) + "']";
          return t
            ? (this.form.length
                ? k(this.form[0].elements).filter(e)
                : k(e).filter(function () {
                    return 0 === k(this).form().length;
                  })
              ).not(this.element)
            : k([]);
        },
        _toggleClasses: function () {
          var t = this.element[0].checked;
          this._toggleClass(
            this.label,
            "ui-checkboxradio-checked",
            "ui-state-active",
            t
          ),
            this.options.icon &&
              "checkbox" === this.type &&
              this._toggleClass(
                this.icon,
                null,
                "ui-icon-check ui-state-checked",
                t
              )._toggleClass(this.icon, null, "ui-icon-blank", !t),
            "radio" === this.type &&
              this._getRadioGroup().each(function () {
                var t = k(this).checkboxradio("instance");
                t &&
                  t._removeClass(
                    t.label,
                    "ui-checkboxradio-checked",
                    "ui-state-active"
                  );
              });
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function (t, e) {
          if ("label" !== t || e) {
            if ((this._super(t, e), "disabled" === t))
              return (
                this._toggleClass(this.label, null, "ui-state-disabled", e),
                void (this.element[0].disabled = e)
              );
            this.refresh();
          }
        },
        _updateIcon: function (t) {
          var e = "ui-icon ui-icon-background ";
          this.options.icon
            ? (this.icon ||
                ((this.icon = k("<span>")),
                (this.iconSpace = k("<span> </span>")),
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
              "checkbox" === this.type
                ? ((e += t
                    ? "ui-icon-check ui-state-checked"
                    : "ui-icon-blank"),
                  this._removeClass(
                    this.icon,
                    null,
                    t ? "ui-icon-blank" : "ui-icon-check"
                  ))
                : (e += "ui-icon-blank"),
              this._addClass(this.icon, "ui-checkboxradio-icon", e),
              t ||
                this._removeClass(
                  this.icon,
                  null,
                  "ui-icon-check ui-state-checked"
                ),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon &&
              (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function () {
          var t = this.label.contents().not(this.element[0]);
          this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label);
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled;
          this._updateIcon(t),
            this._toggleClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active",
              t
            ),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e });
        },
      },
    ]);
    var m;
    k.ui.checkboxradio;
    k.widget("ui.button", {
      version: "1.12.1",
      defaultElement: "<button>",
      options: {
        classes: { "ui-button": "ui-corner-all" },
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0,
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          (this.isInput = this.element.is("input")),
          null != (t = this.element[0].disabled) && (e.disabled = t),
          (this.originalLabel = this.isInput
            ? this.element.val()
            : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        );
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon &&
          (this.options.showLabel = !0),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr("title")),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput
              ? this.element.val(this.options.label)
              : this.element.html(this.options.label)),
          this._addClass("ui-button", "ui-widget"),
          this._setOption("disabled", this.options.disabled),
          this._enhance(),
          this.element.is("a") &&
            this._on({
              keyup: function (t) {
                t.keyCode === k.ui.keyCode.SPACE &&
                  (t.preventDefault(),
                  this.element[0].click
                    ? this.element[0].click()
                    : this.element.trigger("click"));
              },
            });
      },
      _enhance: function () {
        this.element.is("button") || this.element.attr("role", "button"),
          this.options.icon &&
            (this._updateIcon("icon", this.options.icon),
            this._updateTooltip());
      },
      _updateTooltip: function () {
        (this.title = this.element.attr("title")),
          this.options.showLabel ||
            this.title ||
            this.element.attr("title", this.options.label);
      },
      _updateIcon: function (t, e) {
        var i = "iconPosition" !== t,
          s = i ? this.options.iconPosition : e,
          t = "top" === s || "bottom" === s;
        this.icon
          ? i && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = k("<span>")),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
          i && this._addClass(this.icon, null, e),
          this._attachIcon(s),
          t
            ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
              this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = k("<span> </span>")),
                this._addClass(this.iconSpace, "ui-button-icon-space")),
              this._removeClass(this.icon, null, "ui-wiget-icon-block"),
              this._attachIconSpace(s));
      },
      _destroy: function () {
        this.element.removeAttr("role"),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr("title");
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
          this.iconSpace
        );
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
          this.icon
        );
      },
      _setOptions: function (t) {
        var e = (void 0 === t.showLabel ? this.options : t).showLabel,
          i = (void 0 === t.icon ? this.options : t).icon;
        e || i || (t.showLabel = !0), this._super(t);
      },
      _setOption: function (t, e) {
        "icon" === t &&
          (e
            ? this._updateIcon(t, e)
            : this.icon &&
              (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          "iconPosition" === t && this._updateIcon(t, e),
          "showLabel" === t &&
            (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
          "label" === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition),
                  this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          "disabled" === t &&
            (this._toggleClass(null, "ui-state-disabled", e),
            (this.element[0].disabled = e) && this.element.blur());
      },
      refresh: function () {
        var t = this.element.is("input, button")
          ? this.element[0].disabled
          : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({ disabled: t }),
          this._updateTooltip();
      },
    }),
      !1 !== k.uiBackCompat &&
        (k.widget("ui.button", k.ui.button, {
          options: { text: !0, icons: { primary: null, secondary: null } },
          _create: function () {
            this.options.showLabel &&
              !this.options.text &&
              (this.options.showLabel = this.options.text),
              !this.options.showLabel &&
                this.options.text &&
                (this.options.text = this.options.showLabel),
              this.options.icon ||
              (!this.options.icons.primary && !this.options.icons.secondary)
                ? this.options.icon &&
                  (this.options.icons.primary = this.options.icon)
                : this.options.icons.primary
                ? (this.options.icon = this.options.icons.primary)
                : ((this.options.icon = this.options.icons.secondary),
                  (this.options.iconPosition = "end")),
              this._super();
          },
          _setOption: function (t, e) {
            "text" !== t
              ? ("showLabel" === t && (this.options.text = e),
                "icon" === t && (this.options.icons.primary = e),
                "icons" === t &&
                  (e.primary
                    ? (this._super("icon", e.primary),
                      this._super("iconPosition", "beginning"))
                    : e.secondary &&
                      (this._super("icon", e.secondary),
                      this._super("iconPosition", "end"))),
                this._superApply(arguments))
              : this._super("showLabel", e);
          },
        }),
        (k.fn.button =
          ((m = k.fn.button),
          function () {
            return !this.length ||
              (this.length && "INPUT" !== this[0].tagName) ||
              (this.length &&
                "INPUT" === this[0].tagName &&
                "checkbox" !== this.attr("type") &&
                "radio" !== this.attr("type"))
              ? m.apply(this, arguments)
              : (k.ui.checkboxradio || k.error("Checkboxradio widget missing"),
                0 === arguments.length
                  ? this.checkboxradio({ icon: !1 })
                  : this.checkboxradio.apply(this, arguments));
          })),
        (k.fn.buttonset = function () {
          return (
            k.ui.controlgroup || k.error("Controlgroup widget missing"),
            "option" === arguments[0] &&
            "items" === arguments[1] &&
            arguments[2]
              ? this.controlgroup.apply(this, [
                  arguments[0],
                  "items.button",
                  arguments[2],
                ])
              : "option" === arguments[0] && "items" === arguments[1]
              ? this.controlgroup.apply(this, [arguments[0], "items.button"])
              : ("object" == typeof arguments[0] &&
                  arguments[0].items &&
                  (arguments[0].items = { button: arguments[0].items }),
                this.controlgroup.apply(this, arguments))
          );
        }));
    var _;
    k.ui.button;
    function v() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        k.extend(this._defaults, this.regional[""]),
        (this.regional.en = k.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = k.extend(!0, {}, this.regional.en)),
        (this.dpDiv = b(
          k(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function b(t) {
      var e =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t
        .on("mouseout", e, function () {
          k(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              k(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              k(this).removeClass("ui-datepicker-next-hover");
        })
        .on("mouseover", e, y);
    }
    function y() {
      k.datepicker._isDisabledDatepicker(
        (_.inline ? _.dpDiv.parent() : _.input)[0]
      ) ||
        (k(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        k(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          k(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          k(this).addClass("ui-datepicker-next-hover"));
    }
    function w(t, e) {
      for (var i in (k.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
      return t;
    }
    k.extend(k.ui, { datepicker: { version: "1.12.1" } }),
      k.extend(v.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return w(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (t, e) {
          var i,
            s = t.nodeName.toLowerCase(),
            n = "div" === s || "span" === s;
          t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
            ((i = this._newInst(k(t), n)).settings = k.extend({}, e || {})),
            "input" === s
              ? this._connectDatepicker(t, i)
              : n && this._inlineDatepicker(t, i);
        },
        _newInst: function (t, e) {
          return {
            id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: t,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: e,
            dpDiv: e
              ? b(
                  k(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (t, e) {
          var i = k(t);
          (e.append = k([])),
            (e.trigger = k([])),
            i.hasClass(this.markerClassName) ||
              (this._attachments(i, e),
              i
                .addClass(this.markerClassName)
                .on("keydown", this._doKeyDown)
                .on("keypress", this._doKeyPress)
                .on("keyup", this._doKeyUp),
              this._autoSize(e),
              k.data(t, "datepicker", e),
              e.settings.disabled && this._disableDatepicker(t));
        },
        _attachments: function (t, e) {
          var i,
            s = this._get(e, "appendText"),
            n = this._get(e, "isRTL");
          e.append && e.append.remove(),
            s &&
              ((e.append = k(
                "<span class='" + this._appendClass + "'>" + s + "</span>"
              )),
              t[n ? "before" : "after"](e.append)),
            t.off("focus", this._showDatepicker),
            e.trigger && e.trigger.remove(),
            ("focus" !== (i = this._get(e, "showOn")) && "both" !== i) ||
              t.on("focus", this._showDatepicker),
            ("button" !== i && "both" !== i) ||
              ((s = this._get(e, "buttonText")),
              (i = this._get(e, "buttonImage")),
              (e.trigger = k(
                this._get(e, "buttonImageOnly")
                  ? k("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: i, alt: s, title: s })
                  : k("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        i ? k("<img/>").attr({ src: i, alt: s, title: s }) : s
                      )
              )),
              t[n ? "before" : "after"](e.trigger),
              e.trigger.on("click", function () {
                return (
                  k.datepicker._datepickerShowing &&
                  k.datepicker._lastInput === t[0]
                    ? k.datepicker._hideDatepicker()
                    : (k.datepicker._datepickerShowing &&
                        k.datepicker._lastInput !== t[0] &&
                        k.datepicker._hideDatepicker(),
                      k.datepicker._showDatepicker(t[0])),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          var e, i, s, n, o, a;
          this._get(t, "autoSize") &&
            !t.inline &&
            ((o = new Date(2009, 11, 20)),
            (a = this._get(t, "dateFormat")).match(/[DM]/) &&
              ((e = function (t) {
                for (n = s = i = 0; n < t.length; n++)
                  t[n].length > i && ((i = t[n].length), (s = n));
                return s;
              }),
              o.setMonth(
                e(
                  this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort")
                )
              ),
              o.setDate(
                e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay()
              )),
            t.input.attr("size", this._formatDate(t, o).length));
        },
        _inlineDatepicker: function (t, e) {
          var i = k(t);
          i.hasClass(this.markerClassName) ||
            (i.addClass(this.markerClassName).append(e.dpDiv),
            k.data(t, "datepicker", e),
            this._setDate(e, this._getDefaultDate(e), !0),
            this._updateDatepicker(e),
            this._updateAlternate(e),
            e.settings.disabled && this._disableDatepicker(t),
            e.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (t, e, i, s, n) {
          var o,
            a = this._dialogInst;
          return (
            a ||
              ((this.uuid += 1),
              (o = "dp" + this.uuid),
              (this._dialogInput = k(
                "<input type='text' id='" +
                  o +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.on("keydown", this._doKeyDown),
              k("body").append(this._dialogInput),
              ((a = this._dialogInst =
                this._newInst(this._dialogInput, !1)).settings = {}),
              k.data(this._dialogInput[0], "datepicker", a)),
            w(a.settings, s || {}),
            (e = e && e.constructor === Date ? this._formatDate(a, e) : e),
            this._dialogInput.val(e),
            (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
            this._pos ||
              ((o = document.documentElement.clientWidth),
              (s = document.documentElement.clientHeight),
              (e =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (n =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [o / 2 - 100 + e, s / 2 - 150 + n])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (a.settings.onSelect = i),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            k.blockUI && k.blockUI(this.dpDiv),
            k.data(this._dialogInput[0], "datepicker", a),
            this
          );
        },
        _destroyDatepicker: function (t) {
          var e,
            i = k(t),
            s = k.data(t, "datepicker");
          i.hasClass(this.markerClassName) &&
            ((e = t.nodeName.toLowerCase()),
            k.removeData(t, "datepicker"),
            "input" === e
              ? (s.append.remove(),
                s.trigger.remove(),
                i
                  .removeClass(this.markerClassName)
                  .off("focus", this._showDatepicker)
                  .off("keydown", this._doKeyDown)
                  .off("keypress", this._doKeyPress)
                  .off("keyup", this._doKeyUp))
              : ("div" !== e && "span" !== e) ||
                i.removeClass(this.markerClassName).empty(),
            _ === s && (_ = null));
        },
        _enableDatepicker: function (e) {
          var t,
            i = k(e),
            s = k.data(e, "datepicker");
          i.hasClass(this.markerClassName) &&
            ("input" === (t = e.nodeName.toLowerCase())
              ? ((e.disabled = !1),
                s.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" !== t && "span" !== t) ||
                ((i = i.children("." + this._inlineClass))
                  .children()
                  .removeClass("ui-state-disabled"),
                i
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = k.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var t,
            i = k(e),
            s = k.data(e, "datepicker");
          i.hasClass(this.markerClassName) &&
            ("input" === (t = e.nodeName.toLowerCase())
              ? ((e.disabled = !0),
                s.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" !== t && "span" !== t) ||
                ((i = i.children("." + this._inlineClass))
                  .children()
                  .addClass("ui-state-disabled"),
                i
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = k.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; e < this._disabledInputs.length; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (t) {
          try {
            return k.data(t, "datepicker");
          } catch (t) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (t, e, i) {
          var s,
            n,
            o,
            a,
            r = this._getInst(t);
          if (2 === arguments.length && "string" == typeof e)
            return "defaults" === e
              ? k.extend({}, k.datepicker._defaults)
              : r
              ? "all" === e
                ? k.extend({}, r.settings)
                : this._get(r, e)
              : null;
          (s = e || {}),
            "string" == typeof e && ((s = {})[e] = i),
            r &&
              (this._curInst === r && this._hideDatepicker(),
              (n = this._getDateDatepicker(t, !0)),
              (o = this._getMinMaxDate(r, "min")),
              (a = this._getMinMaxDate(r, "max")),
              w(r.settings, s),
              null !== o &&
                void 0 !== s.dateFormat &&
                void 0 === s.minDate &&
                (r.settings.minDate = this._formatDate(r, o)),
              null !== a &&
                void 0 !== s.dateFormat &&
                void 0 === s.maxDate &&
                (r.settings.maxDate = this._formatDate(r, a)),
              "disabled" in s &&
                (s.disabled
                  ? this._disableDatepicker(t)
                  : this._enableDatepicker(t)),
              this._attachments(k(t), r),
              this._autoSize(r),
              this._setDate(r, n),
              this._updateAlternate(r),
              this._updateDatepicker(r));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          t = this._getInst(t);
          t && this._updateDatepicker(t);
        },
        _setDateDatepicker: function (t, e) {
          t = this._getInst(t);
          t &&
            (this._setDate(t, e),
            this._updateDatepicker(t),
            this._updateAlternate(t));
        },
        _getDateDatepicker: function (t, e) {
          t = this._getInst(t);
          return (
            t && !t.inline && this._setDateFromField(t, e),
            t ? this._getDate(t) : null
          );
        },
        _doKeyDown: function (t) {
          var e,
            i,
            s = k.datepicker._getInst(t.target),
            n = !0,
            o = s.dpDiv.is(".ui-datepicker-rtl");
          if (((s._keyEvent = !0), k.datepicker._datepickerShowing))
            switch (t.keyCode) {
              case 9:
                k.datepicker._hideDatepicker(), (n = !1);
                break;
              case 13:
                return (
                  (i = k(
                    "td." +
                      k.datepicker._dayOverClass +
                      ":not(." +
                      k.datepicker._currentClass +
                      ")",
                    s.dpDiv
                  ))[0] &&
                    k.datepicker._selectDay(
                      t.target,
                      s.selectedMonth,
                      s.selectedYear,
                      i[0]
                    ),
                  (e = k.datepicker._get(s, "onSelect"))
                    ? ((i = k.datepicker._formatDate(s)),
                      e.apply(s.input ? s.input[0] : null, [i, s]))
                    : k.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                k.datepicker._hideDatepicker();
                break;
              case 33:
                k.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? -k.datepicker._get(s, "stepBigMonths")
                    : -k.datepicker._get(s, "stepMonths"),
                  "M"
                );
                break;
              case 34:
                k.datepicker._adjustDate(
                  t.target,
                  t.ctrlKey
                    ? +k.datepicker._get(s, "stepBigMonths")
                    : +k.datepicker._get(s, "stepMonths"),
                  "M"
                );
                break;
              case 35:
                (t.ctrlKey || t.metaKey) && k.datepicker._clearDate(t.target),
                  (n = t.ctrlKey || t.metaKey);
                break;
              case 36:
                (t.ctrlKey || t.metaKey) && k.datepicker._gotoToday(t.target),
                  (n = t.ctrlKey || t.metaKey);
                break;
              case 37:
                (t.ctrlKey || t.metaKey) &&
                  k.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                  (n = t.ctrlKey || t.metaKey),
                  t.originalEvent.altKey &&
                    k.datepicker._adjustDate(
                      t.target,
                      t.ctrlKey
                        ? -k.datepicker._get(s, "stepBigMonths")
                        : -k.datepicker._get(s, "stepMonths"),
                      "M"
                    );
                break;
              case 38:
                (t.ctrlKey || t.metaKey) &&
                  k.datepicker._adjustDate(t.target, -7, "D"),
                  (n = t.ctrlKey || t.metaKey);
                break;
              case 39:
                (t.ctrlKey || t.metaKey) &&
                  k.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                  (n = t.ctrlKey || t.metaKey),
                  t.originalEvent.altKey &&
                    k.datepicker._adjustDate(
                      t.target,
                      t.ctrlKey
                        ? +k.datepicker._get(s, "stepBigMonths")
                        : +k.datepicker._get(s, "stepMonths"),
                      "M"
                    );
                break;
              case 40:
                (t.ctrlKey || t.metaKey) &&
                  k.datepicker._adjustDate(t.target, 7, "D"),
                  (n = t.ctrlKey || t.metaKey);
                break;
              default:
                n = !1;
            }
          else
            36 === t.keyCode && t.ctrlKey
              ? k.datepicker._showDatepicker(this)
              : (n = !1);
          n && (t.preventDefault(), t.stopPropagation());
        },
        _doKeyPress: function (t) {
          var e,
            i = k.datepicker._getInst(t.target);
          if (k.datepicker._get(i, "constrainInput"))
            return (
              (e = k.datepicker._possibleChars(
                k.datepicker._get(i, "dateFormat")
              )),
              (i = String.fromCharCode(
                null == t.charCode ? t.keyCode : t.charCode
              )),
              t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
            );
        },
        _doKeyUp: function (t) {
          var e = k.datepicker._getInst(t.target);
          if (e.input.val() !== e.lastVal)
            try {
              k.datepicker.parseDate(
                k.datepicker._get(e, "dateFormat"),
                e.input ? e.input.val() : null,
                k.datepicker._getFormatConfig(e)
              ) &&
                (k.datepicker._setDateFromField(e),
                k.datepicker._updateAlternate(e),
                k.datepicker._updateDatepicker(e));
            } catch (t) {}
          return !0;
        },
        _showDatepicker: function (t) {
          var e, i, s, n;
          "input" !== (t = t.target || t).nodeName.toLowerCase() &&
            (t = k("input", t.parentNode)[0]),
            k.datepicker._isDisabledDatepicker(t) ||
              k.datepicker._lastInput === t ||
              ((n = k.datepicker._getInst(t)),
              k.datepicker._curInst &&
                k.datepicker._curInst !== n &&
                (k.datepicker._curInst.dpDiv.stop(!0, !0),
                n &&
                  k.datepicker._datepickerShowing &&
                  k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),
              !1 !==
                (i = (s = k.datepicker._get(n, "beforeShow"))
                  ? s.apply(t, [t, n])
                  : {}) &&
                (w(n.settings, i),
                (n.lastVal = null),
                (k.datepicker._lastInput = t),
                k.datepicker._setDateFromField(n),
                k.datepicker._inDialog && (t.value = ""),
                k.datepicker._pos ||
                  ((k.datepicker._pos = k.datepicker._findPos(t)),
                  (k.datepicker._pos[1] += t.offsetHeight)),
                (e = !1),
                k(t)
                  .parents()
                  .each(function () {
                    return !(e |= "fixed" === k(this).css("position"));
                  }),
                (s = { left: k.datepicker._pos[0], top: k.datepicker._pos[1] }),
                (k.datepicker._pos = null),
                n.dpDiv.empty(),
                n.dpDiv.css({
                  position: "absolute",
                  display: "block",
                  top: "-1000px",
                }),
                k.datepicker._updateDatepicker(n),
                (s = k.datepicker._checkOffset(n, s, e)),
                n.dpDiv.css({
                  position:
                    k.datepicker._inDialog && k.blockUI
                      ? "static"
                      : e
                      ? "fixed"
                      : "absolute",
                  display: "none",
                  left: s.left + "px",
                  top: s.top + "px",
                }),
                n.inline ||
                  ((i = k.datepicker._get(n, "showAnim")),
                  (s = k.datepicker._get(n, "duration")),
                  n.dpDiv.css(
                    "z-index",
                    (function (t) {
                      for (var e, i; t.length && t[0] !== document; ) {
                        if (
                          ("absolute" === (e = t.css("position")) ||
                            "relative" === e ||
                            "fixed" === e) &&
                          ((i = parseInt(t.css("zIndex"), 10)),
                          !isNaN(i) && 0 !== i)
                        )
                          return i;
                        t = t.parent();
                      }
                      return 0;
                    })(k(t)) + 1
                  ),
                  (k.datepicker._datepickerShowing = !0),
                  k.effects && k.effects.effect[i]
                    ? n.dpDiv.show(i, k.datepicker._get(n, "showOptions"), s)
                    : n.dpDiv[i || "show"](i ? s : null),
                  k.datepicker._shouldFocusInput(n) && n.input.trigger("focus"),
                  (k.datepicker._curInst = n))));
        },
        _updateDatepicker: function (t) {
          (this.maxRows = 4),
            (_ = t).dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t);
          var e,
            i = this._getNumberOfMonths(t),
            s = i[1],
            n = t.dpDiv.find("." + this._dayOverClass + " a");
          0 < n.length && y.apply(n.get(0)),
            t.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
              )
              .width(""),
            1 < s &&
              t.dpDiv
                .addClass("ui-datepicker-multi-" + s)
                .css("width", 17 * s + "em"),
            t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi"
            ),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl"
            ),
            t === k.datepicker._curInst &&
              k.datepicker._datepickerShowing &&
              k.datepicker._shouldFocusInput(t) &&
              t.input.trigger("focus"),
            t.yearshtml &&
              ((e = t.yearshtml),
              setTimeout(function () {
                e === t.yearshtml &&
                  t.yearshtml &&
                  t.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(t.yearshtml),
                  (e = t.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (t, e, i) {
          var s = t.dpDiv.outerWidth(),
            n = t.dpDiv.outerHeight(),
            o = t.input ? t.input.outerWidth() : 0,
            a = t.input ? t.input.outerHeight() : 0,
            r =
              document.documentElement.clientWidth +
              (i ? 0 : k(document).scrollLeft()),
            h =
              document.documentElement.clientHeight +
              (i ? 0 : k(document).scrollTop());
          return (
            (e.left -= this._get(t, "isRTL") ? s - o : 0),
            (e.left -=
              i && e.left === t.input.offset().left
                ? k(document).scrollLeft()
                : 0),
            (e.top -=
              i && e.top === t.input.offset().top + a
                ? k(document).scrollTop()
                : 0),
            (e.left -= Math.min(
              e.left,
              e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0
            )),
            (e.top -= Math.min(
              e.top,
              e.top + n > h && n < h ? Math.abs(n + a) : 0
            )),
            e
          );
        },
        _findPos: function (t) {
          for (
            var e = this._getInst(t), i = this._get(e, "isRTL");
            t &&
            ("hidden" === t.type ||
              1 !== t.nodeType ||
              k.expr.filters.hidden(t));

          )
            t = t[i ? "previousSibling" : "nextSibling"];
          return [(e = k(t).offset()).left, e.top];
        },
        _hideDatepicker: function (t) {
          var e,
            i,
            s = this._curInst;
          !s ||
            (t && s !== k.data(t, "datepicker")) ||
            (this._datepickerShowing &&
              ((e = this._get(s, "showAnim")),
              (i = this._get(s, "duration")),
              (t = function () {
                k.datepicker._tidyDialog(s);
              }),
              k.effects && (k.effects.effect[e] || k.effects[e])
                ? s.dpDiv.hide(e, k.datepicker._get(s, "showOptions"), i, t)
                : s.dpDiv[
                    "slideDown" === e
                      ? "slideUp"
                      : "fadeIn" === e
                      ? "fadeOut"
                      : "hide"
                  ](e ? i : null, t),
              e || t(),
              (this._datepickerShowing = !1),
              (t = this._get(s, "onClose")) &&
                t.apply(s.input ? s.input[0] : null, [
                  s.input ? s.input.val() : "",
                  s,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                k.blockUI && (k.unblockUI(), k("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (t) {
          var e;
          k.datepicker._curInst &&
            ((e = k(t.target)),
            (t = k.datepicker._getInst(e[0])),
            ((e[0].id === k.datepicker._mainDivId ||
              0 !== e.parents("#" + k.datepicker._mainDivId).length ||
              e.hasClass(k.datepicker.markerClassName) ||
              e.closest("." + k.datepicker._triggerClass).length ||
              !k.datepicker._datepickerShowing ||
              (k.datepicker._inDialog && k.blockUI)) &&
              (!e.hasClass(k.datepicker.markerClassName) ||
                k.datepicker._curInst === t)) ||
              k.datepicker._hideDatepicker());
        },
        _adjustDate: function (t, e, i) {
          var s = k(t),
            t = this._getInst(s[0]);
          this._isDisabledDatepicker(s[0]) ||
            (this._adjustInstDate(
              t,
              e + ("M" === i ? this._get(t, "showCurrentAtPos") : 0),
              i
            ),
            this._updateDatepicker(t));
        },
        _gotoToday: function (t) {
          var e = k(t),
            i = this._getInst(e[0]);
          this._get(i, "gotoCurrent") && i.currentDay
            ? ((i.selectedDay = i.currentDay),
              (i.drawMonth = i.selectedMonth = i.currentMonth),
              (i.drawYear = i.selectedYear = i.currentYear))
            : ((t = new Date()),
              (i.selectedDay = t.getDate()),
              (i.drawMonth = i.selectedMonth = t.getMonth()),
              (i.drawYear = i.selectedYear = t.getFullYear())),
            this._notifyChange(i),
            this._adjustDate(e);
        },
        _selectMonthYear: function (t, e, i) {
          var s = k(t),
            t = this._getInst(s[0]);
          (t["selected" + ("M" === i ? "Month" : "Year")] = t[
            "draw" + ("M" === i ? "Month" : "Year")
          ] =
            parseInt(e.options[e.selectedIndex].value, 10)),
            this._notifyChange(t),
            this._adjustDate(s);
        },
        _selectDay: function (t, e, i, s) {
          var n = k(t);
          k(s).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(n[0]) ||
            (((n = this._getInst(n[0])).selectedDay = n.currentDay =
              k("a", s).html()),
            (n.selectedMonth = n.currentMonth = e),
            (n.selectedYear = n.currentYear = i),
            this._selectDate(
              t,
              this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
            ));
        },
        _clearDate: function (t) {
          t = k(t);
          this._selectDate(t, "");
        },
        _selectDate: function (t, e) {
          var i = k(t),
            t = this._getInst(i[0]);
          (e = null != e ? e : this._formatDate(t)),
            t.input && t.input.val(e),
            this._updateAlternate(t),
            (i = this._get(t, "onSelect"))
              ? i.apply(t.input ? t.input[0] : null, [e, t])
              : t.input && t.input.trigger("change"),
            t.inline
              ? this._updateDatepicker(t)
              : (this._hideDatepicker(),
                (this._lastInput = t.input[0]),
                "object" != typeof t.input[0] && t.input.trigger("focus"),
                (this._lastInput = null));
        },
        _updateAlternate: function (t) {
          var e,
            i,
            s = this._get(t, "altField");
          s &&
            ((e = this._get(t, "altFormat") || this._get(t, "dateFormat")),
            (i = this._getDate(t)),
            (t = this.formatDate(e, i, this._getFormatConfig(t))),
            k(s).val(t));
        },
        noWeekends: function (t) {
          t = t.getDay();
          return [0 < t && t < 6, ""];
        },
        iso8601Week: function (t) {
          var e = new Date(t.getTime());
          return (
            e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
            (t = e.getTime()),
            e.setMonth(0),
            e.setDate(1),
            Math.floor(Math.round((t - e) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, n, t) {
          if (null == e || null == n) throw "Invalid arguments";
          if ("" === (n = "object" == typeof n ? n.toString() : n + ""))
            return null;
          function o(t) {
            return (t = w + 1 < e.length && e.charAt(w + 1) === t) && w++, t;
          }
          function i(t) {
            var e = o(t),
              e =
                "@" === t
                  ? 14
                  : "!" === t
                  ? 20
                  : "y" === t && e
                  ? 4
                  : "o" === t
                  ? 3
                  : 2,
              e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}");
            if (!(e = n.substring(c).match(e)))
              throw "Missing number at position " + c;
            return (c += e[0].length), parseInt(e[0], 10);
          }
          function s(t, e, i) {
            var s = -1,
              e = k
                .map(o(t) ? i : e, function (t, e) {
                  return [[e, t]];
                })
                .sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
            if (
              (k.each(e, function (t, e) {
                var i = e[1];
                if (n.substr(c, i.length).toLowerCase() === i.toLowerCase())
                  return (s = e[0]), (c += i.length), !1;
              }),
              -1 !== s)
            )
              return s + 1;
            throw "Unknown name at position " + c;
          }
          function a() {
            if (n.charAt(c) !== e.charAt(w))
              throw "Unexpected literal at position " + c;
            c++;
          }
          for (
            var r,
              h,
              l,
              c = 0,
              u =
                (t ? t.shortYearCutoff : null) ||
                this._defaults.shortYearCutoff,
              u =
                "string" != typeof u
                  ? u
                  : (new Date().getFullYear() % 100) + parseInt(u, 10),
              d = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
              p = (t ? t.dayNames : null) || this._defaults.dayNames,
              f =
                (t ? t.monthNamesShort : null) ||
                this._defaults.monthNamesShort,
              g = (t ? t.monthNames : null) || this._defaults.monthNames,
              m = -1,
              _ = -1,
              v = -1,
              b = -1,
              y = !1,
              w = 0;
            w < e.length;
            w++
          )
            if (y) "'" !== e.charAt(w) || o("'") ? a() : (y = !1);
            else
              switch (e.charAt(w)) {
                case "d":
                  v = i("d");
                  break;
                case "D":
                  s("D", d, p);
                  break;
                case "o":
                  b = i("o");
                  break;
                case "m":
                  _ = i("m");
                  break;
                case "M":
                  _ = s("M", f, g);
                  break;
                case "y":
                  m = i("y");
                  break;
                case "@":
                  (m = (l = new Date(i("@"))).getFullYear()),
                    (_ = l.getMonth() + 1),
                    (v = l.getDate());
                  break;
                case "!":
                  (m = (l = new Date(
                    (i("!") - this._ticksTo1970) / 1e4
                  )).getFullYear()),
                    (_ = l.getMonth() + 1),
                    (v = l.getDate());
                  break;
                case "'":
                  o("'") ? a() : (y = !0);
                  break;
                default:
                  a();
              }
          if (c < n.length && ((h = n.substr(c)), !/^\s+/.test(h)))
            throw "Extra/unparsed characters found in date: " + h;
          if (
            (-1 === m
              ? (m = new Date().getFullYear())
              : m < 100 &&
                (m +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (m <= u ? 0 : -100)),
            -1 < b)
          )
            for (_ = 1, v = b; ; ) {
              if (v <= (r = this._getDaysInMonth(m, _ - 1))) break;
              _++, (v -= r);
            }
          if (
            (l = this._daylightSavingAdjust(
              new Date(m, _ - 1, v)
            )).getFullYear() !== m ||
            l.getMonth() + 1 !== _ ||
            l.getDate() !== v
          )
            throw "Invalid date";
          return l;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          24 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
          60 *
          60 *
          1e7,
        formatDate: function (e, t, i) {
          if (!t) return "";
          function n(t) {
            return (t = a + 1 < e.length && e.charAt(a + 1) === t) && a++, t;
          }
          function s(t, e, i) {
            var s = "" + e;
            if (n(t)) for (; s.length < i; ) s = "0" + s;
            return s;
          }
          function o(t, e, i, s) {
            return (n(t) ? s : i)[e];
          }
          var a,
            r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            h = (i ? i.dayNames : null) || this._defaults.dayNames,
            l =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            c = (i ? i.monthNames : null) || this._defaults.monthNames,
            u = "",
            d = !1;
          if (t)
            for (a = 0; a < e.length; a++)
              if (d)
                "'" !== e.charAt(a) || n("'") ? (u += e.charAt(a)) : (d = !1);
              else
                switch (e.charAt(a)) {
                  case "d":
                    u += s("d", t.getDate(), 2);
                    break;
                  case "D":
                    u += o("D", t.getDay(), r, h);
                    break;
                  case "o":
                    u += s(
                      "o",
                      Math.round(
                        (new Date(
                          t.getFullYear(),
                          t.getMonth(),
                          t.getDate()
                        ).getTime() -
                          new Date(t.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    );
                    break;
                  case "m":
                    u += s("m", t.getMonth() + 1, 2);
                    break;
                  case "M":
                    u += o("M", t.getMonth(), l, c);
                    break;
                  case "y":
                    u += n("y")
                      ? t.getFullYear()
                      : (t.getFullYear() % 100 < 10 ? "0" : "") +
                        (t.getFullYear() % 100);
                    break;
                  case "@":
                    u += t.getTime();
                    break;
                  case "!":
                    u += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    n("'") ? (u += "'") : (d = !0);
                    break;
                  default:
                    u += e.charAt(a);
                }
          return u;
        },
        _possibleChars: function (e) {
          function t(t) {
            return (t = n + 1 < e.length && e.charAt(n + 1) === t) && n++, t;
          }
          for (var i = "", s = !1, n = 0; n < e.length; n++)
            if (s)
              "'" !== e.charAt(n) || t("'") ? (i += e.charAt(n)) : (s = !1);
            else
              switch (e.charAt(n)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  t("'") ? (i += "'") : (s = !0);
                  break;
                default:
                  i += e.charAt(n);
              }
          return i;
        },
        _get: function (t, e) {
          return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              s = (t.lastVal = t.input ? t.input.val() : null),
              n = this._getDefaultDate(t),
              o = n,
              a = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, s, a) || n;
            } catch (t) {
              s = e ? "" : s;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = s ? o.getDate() : 0),
              (t.currentMonth = s ? o.getMonth() : 0),
              (t.currentYear = s ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date())
          );
        },
        _determineDate: function (r, t, e) {
          var i,
            s,
            t =
              null == t || "" === t
                ? e
                : "string" == typeof t
                ? (function (t) {
                    try {
                      return k.datepicker.parseDate(
                        k.datepicker._get(r, "dateFormat"),
                        t,
                        k.datepicker._getFormatConfig(r)
                      );
                    } catch (t) {}
                    for (
                      var e =
                          (t.toLowerCase().match(/^c/)
                            ? k.datepicker._getDate(r)
                            : null) || new Date(),
                        i = e.getFullYear(),
                        s = e.getMonth(),
                        n = e.getDate(),
                        o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        a = o.exec(t);
                      a;

                    ) {
                      switch (a[2] || "d") {
                        case "d":
                        case "D":
                          n += parseInt(a[1], 10);
                          break;
                        case "w":
                        case "W":
                          n += 7 * parseInt(a[1], 10);
                          break;
                        case "m":
                        case "M":
                          (s += parseInt(a[1], 10)),
                            (n = Math.min(
                              n,
                              k.datepicker._getDaysInMonth(i, s)
                            ));
                          break;
                        case "y":
                        case "Y":
                          (i += parseInt(a[1], 10)),
                            (n = Math.min(
                              n,
                              k.datepicker._getDaysInMonth(i, s)
                            ));
                      }
                      a = o.exec(t);
                    }
                    return new Date(i, s, n);
                  })(t)
                : "number" == typeof t
                ? isNaN(t)
                  ? e
                  : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
                : new Date(t.getTime());
          return (
            (t = t && "Invalid Date" === t.toString() ? e : t) &&
              (t.setHours(0),
              t.setMinutes(0),
              t.setSeconds(0),
              t.setMilliseconds(0)),
            this._daylightSavingAdjust(t)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var s = !e,
            n = t.selectedMonth,
            o = t.selectedYear,
            e = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = e.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = e.getFullYear()),
            (n === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          return !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
        },
        _attachHandlers: function (t) {
          var e = this._get(t, "stepMonths"),
            i = "#" + t.id.replace(/\\\\/g, "\\");
          t.dpDiv.find("[data-handler]").map(function () {
            var t = {
              prev: function () {
                k.datepicker._adjustDate(i, -e, "M");
              },
              next: function () {
                k.datepicker._adjustDate(i, +e, "M");
              },
              hide: function () {
                k.datepicker._hideDatepicker();
              },
              today: function () {
                k.datepicker._gotoToday(i);
              },
              selectDay: function () {
                return (
                  k.datepicker._selectDay(
                    i,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return k.datepicker._selectMonthYear(i, this, "M"), !1;
              },
              selectYear: function () {
                return k.datepicker._selectMonthYear(i, this, "Y"), !1;
              },
            };
            k(this).on(
              this.getAttribute("data-event"),
              t[this.getAttribute("data-handler")]
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            s,
            n,
            o,
            a,
            r,
            h,
            l,
            c,
            u,
            d,
            p,
            f,
            g,
            m,
            _,
            v,
            b,
            y,
            w,
            k,
            x,
            C,
            D,
            I,
            T,
            P,
            M,
            S,
            H,
            z = new Date(),
            O = this._daylightSavingAdjust(
              new Date(z.getFullYear(), z.getMonth(), z.getDate())
            ),
            A = this._get(t, "isRTL"),
            N = this._get(t, "showButtonPanel"),
            W = this._get(t, "hideIfNoPrevNext"),
            E = this._get(t, "navigationAsDateFormat"),
            F = this._getNumberOfMonths(t),
            R = this._get(t, "showCurrentAtPos"),
            z = this._get(t, "stepMonths"),
            L = 1 !== F[0] || 1 !== F[1],
            B = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            Y = this._getMinMaxDate(t, "min"),
            j = this._getMinMaxDate(t, "max"),
            q = t.drawMonth - R,
            K = t.drawYear;
          if ((q < 0 && ((q += 12), K--), j))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  j.getFullYear(),
                  j.getMonth() - F[0] * F[1] + 1,
                  j.getDate()
                )
              ),
                e = Y && e < Y ? Y : e;
              this._daylightSavingAdjust(new Date(K, q, 1)) > e;

            )
              --q < 0 && ((q = 11), K--);
          for (
            t.drawMonth = q,
              t.drawYear = K,
              R = this._get(t, "prevText"),
              R = E
                ? this.formatDate(
                    R,
                    this._daylightSavingAdjust(new Date(K, q - z, 1)),
                    this._getFormatConfig(t)
                  )
                : R,
              i = this._canAdjustMonth(t, -1, K, q)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  R +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (A ? "e" : "w") +
                  "'>" +
                  R +
                  "</span></a>"
                : W
                ? ""
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  R +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (A ? "e" : "w") +
                  "'>" +
                  R +
                  "</span></a>",
              R = this._get(t, "nextText"),
              R = E
                ? this.formatDate(
                    R,
                    this._daylightSavingAdjust(new Date(K, q + z, 1)),
                    this._getFormatConfig(t)
                  )
                : R,
              s = this._canAdjustMonth(t, 1, K, q)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  R +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (A ? "w" : "e") +
                  "'>" +
                  R +
                  "</span></a>"
                : W
                ? ""
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  R +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (A ? "w" : "e") +
                  "'>" +
                  R +
                  "</span></a>",
              W = this._get(t, "currentText"),
              R = this._get(t, "gotoCurrent") && t.currentDay ? B : O,
              W = E ? this.formatDate(W, R, this._getFormatConfig(t)) : W,
              E = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              E = N
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (A ? E : "") +
                  (this._isInRange(t, R)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      W +
                      "</button>"
                    : "") +
                  (A ? "" : E) +
                  "</div>"
                : "",
              n = parseInt(this._get(t, "firstDay"), 10),
              n = isNaN(n) ? 0 : n,
              o = this._get(t, "showWeek"),
              a = this._get(t, "dayNames"),
              r = this._get(t, "dayNamesMin"),
              h = this._get(t, "monthNames"),
              l = this._get(t, "monthNamesShort"),
              c = this._get(t, "beforeShowDay"),
              u = this._get(t, "showOtherMonths"),
              d = this._get(t, "selectOtherMonths"),
              p = this._getDefaultDate(t),
              f = "",
              m = 0;
            m < F[0];
            m++
          ) {
            for (_ = "", this.maxRows = 4, v = 0; v < F[1]; v++) {
              if (
                ((b = this._daylightSavingAdjust(
                  new Date(K, q, t.selectedDay)
                )),
                (x = " ui-corner-all"),
                (y = ""),
                L)
              ) {
                if (((y += "<div class='ui-datepicker-group"), 1 < F[1]))
                  switch (v) {
                    case 0:
                      (y += " ui-datepicker-group-first"),
                        (x = " ui-corner-" + (A ? "right" : "left"));
                      break;
                    case F[1] - 1:
                      (y += " ui-datepicker-group-last"),
                        (x = " ui-corner-" + (A ? "left" : "right"));
                      break;
                    default:
                      (y += " ui-datepicker-group-middle"), (x = "");
                  }
                y += "'>";
              }
              for (
                y +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  x +
                  "'>" +
                  (/all|left/.test(x) && 0 === m ? (A ? s : i) : "") +
                  (/all|right/.test(x) && 0 === m ? (A ? i : s) : "") +
                  this._generateMonthYearHeader(
                    t,
                    q,
                    K,
                    Y,
                    j,
                    0 < m || 0 < v,
                    h,
                    l
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  w = o
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  g = 0;
                g < 7;
                g++
              )
                w +=
                  "<th scope='col'" +
                  (5 <= (g + n + 6) % 7
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  a[(k = (g + n) % 7)] +
                  "'>" +
                  r[k] +
                  "</span></th>";
              for (
                y += w + "</tr></thead><tbody>",
                  C = this._getDaysInMonth(K, q),
                  K === t.selectedYear &&
                    q === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, C)),
                  x = (this._getFirstDayOfMonth(K, q) - n + 7) % 7,
                  C = Math.ceil((x + C) / 7),
                  D = L && this.maxRows > C ? this.maxRows : C,
                  this.maxRows = D,
                  I = this._daylightSavingAdjust(new Date(K, q, 1 - x)),
                  T = 0;
                T < D;
                T++
              ) {
                for (
                  y += "<tr>",
                    P = o
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")(I) +
                        "</td>"
                      : "",
                    g = 0;
                  g < 7;
                  g++
                )
                  (M = c
                    ? c.apply(t.input ? t.input[0] : null, [I])
                    : [!0, ""]),
                    (H =
                      ((S = I.getMonth() !== q) && !d) ||
                      !M[0] ||
                      (Y && I < Y) ||
                      (j && j < I)),
                    (P +=
                      "<td class='" +
                      (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") +
                      (S ? " ui-datepicker-other-month" : "") +
                      ((I.getTime() === b.getTime() &&
                        q === t.selectedMonth &&
                        t._keyEvent) ||
                      (p.getTime() === I.getTime() &&
                        p.getTime() === b.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (H
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (S && !u
                        ? ""
                        : " " +
                          M[1] +
                          (I.getTime() === B.getTime()
                            ? " " + this._currentClass
                            : "") +
                          (I.getTime() === O.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((S && !u) || !M[2]
                        ? ""
                        : " title='" + M[2].replace(/'/g, "&#39;") + "'") +
                      (H
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          I.getMonth() +
                          "' data-year='" +
                          I.getFullYear() +
                          "'") +
                      ">" +
                      (S && !u
                        ? "&#xa0;"
                        : H
                        ? "<span class='ui-state-default'>" +
                          I.getDate() +
                          "</span>"
                        : "<a class='ui-state-default" +
                          (I.getTime() === O.getTime()
                            ? " ui-state-highlight"
                            : "") +
                          (I.getTime() === B.getTime()
                            ? " ui-state-active"
                            : "") +
                          (S ? " ui-priority-secondary" : "") +
                          "' href='#'>" +
                          I.getDate() +
                          "</a>") +
                      "</td>"),
                    I.setDate(I.getDate() + 1),
                    (I = this._daylightSavingAdjust(I));
                y += P + "</tr>";
              }
              11 < ++q && ((q = 0), K++),
                (_ += y +=
                  "</tbody></table>" +
                  (L
                    ? "</div>" +
                      (0 < F[0] && v === F[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : ""));
            }
            f += _;
          }
          return (f += E), (t._keyEvent = !1), f;
        },
        _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
          var h,
            l,
            c,
            u,
            d,
            p,
            f,
            g = this._get(t, "changeMonth"),
            m = this._get(t, "changeYear"),
            _ = this._get(t, "showMonthAfterYear"),
            v = "<div class='ui-datepicker-title'>",
            b = "";
          if (o || !g)
            b += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
          else {
            for (
              h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                b +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0;
              c < 12;
              c++
            )
              (!h || c >= s.getMonth()) &&
                (!l || c <= n.getMonth()) &&
                (b +=
                  "<option value='" +
                  c +
                  "'" +
                  (c === e ? " selected='selected'" : "") +
                  ">" +
                  r[c] +
                  "</option>");
            b += "</select>";
          }
          if ((_ || (v += b + (!o && g && m ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !m))
              v += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                u = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  p = (a = function (t) {
                    t = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? d + parseInt(t, 10)
                      : parseInt(t, 10);
                    return isNaN(t) ? d : t;
                  })(u[0]),
                  f = Math.max(p, a(u[1] || "")),
                  p = s ? Math.max(p, s.getFullYear()) : p,
                  f = n ? Math.min(f, n.getFullYear()) : f,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                p <= f;
                p++
              )
                t.yearshtml +=
                  "<option value='" +
                  p +
                  "'" +
                  (p === i ? " selected='selected'" : "") +
                  ">" +
                  p +
                  "</option>";
              (t.yearshtml += "</select>"),
                (v += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (v += this._get(t, "yearSuffix")),
            _ && (v += (!o && g && m ? "" : "&#xa0;") + b),
            (v += "</div>")
          );
        },
        _adjustInstDate: function (t, e, i) {
          var s = t.selectedYear + ("Y" === i ? e : 0),
            n = t.selectedMonth + ("M" === i ? e : 0),
            e =
              Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
              ("D" === i ? e : 0),
            e = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(s, n, e))
            );
          (t.selectedDay = e.getDate()),
            (t.drawMonth = t.selectedMonth = e.getMonth()),
            (t.drawYear = t.selectedYear = e.getFullYear()),
            ("M" !== i && "Y" !== i) || this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            t = this._getMinMaxDate(t, "max"),
            e = i && e < i ? i : e;
          return t && t < e ? t : e;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          t = this._get(t, "numberOfMonths");
          return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, s) {
          var n = this._getNumberOfMonths(t),
            n = this._daylightSavingAdjust(
              new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)
            );
          return (
            e < 0 &&
              n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())),
            this._isInRange(t, n)
          );
        },
        _isInRange: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            s = this._getMinMaxDate(t, "max"),
            n = null,
            o = null,
            a = this._get(t, "yearRange");
          return (
            a &&
              ((t = a.split(":")),
              (a = new Date().getFullYear()),
              (n = parseInt(t[0], 10)),
              (o = parseInt(t[1], 10)),
              t[0].match(/[+\-].*/) && (n += a),
              t[1].match(/[+\-].*/) && (o += a)),
            (!i || e.getTime() >= i.getTime()) &&
              (!s || e.getTime() <= s.getTime()) &&
              (!n || e.getFullYear() >= n) &&
              (!o || e.getFullYear() <= o)
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return {
            shortYearCutoff: (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          };
        },
        _formatDate: function (t, e, i, s) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          e = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(s, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            e,
            this._getFormatConfig(t)
          );
        },
      }),
      (k.fn.datepicker = function (t) {
        if (!this.length) return this;
        k.datepicker.initialized ||
          (k(document).on("mousedown", k.datepicker._checkExternalClick),
          (k.datepicker.initialized = !0)),
          0 === k("#" + k.datepicker._mainDivId).length &&
            k("body").append(k.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return ("string" == typeof t &&
          ("isDisabled" === t || "getDate" === t || "widget" === t)) ||
          ("option" === t &&
            2 === arguments.length &&
            "string" == typeof arguments[1])
          ? k.datepicker["_" + t + "Datepicker"].apply(
              k.datepicker,
              [this[0]].concat(e)
            )
          : this.each(function () {
              "string" == typeof t
                ? k.datepicker["_" + t + "Datepicker"].apply(
                    k.datepicker,
                    [this].concat(e)
                  )
                : k.datepicker._attachDatepicker(this, t);
            });
      }),
      (k.datepicker = new v()),
      (k.datepicker.initialized = !1),
      (k.datepicker.uuid = new Date().getTime()),
      (k.datepicker.version = "1.12.1");
    k.datepicker;
    k.widget("ui.dialog", {
      version: "1.12.1",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        classes: {
          "ui-dialog": "ui-corner-all",
          "ui-dialog-titlebar": "ui-corner-all",
        },
        closeOnEscape: !0,
        closeText: "Close",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function (t) {
            var e = k(this).css(t).offset().top;
            e < 0 && k(this).css("top", t.top - e);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      resizableRelatedOptions: {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
      },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr("title")),
          null == this.options.title &&
            null != this.originalTitle &&
            (this.options.title = this.originalTitle),
          this.options.disabled && (this.options.disabled = !1),
          this._createWrapper(),
          this.element.show().removeAttr("title").appendTo(this.uiDialog),
          this._addClass("ui-dialog-content", "ui-widget-content"),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && k.fn.draggable && this._makeDraggable(),
          this.options.resizable && k.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t.jquery || t.nodeType)
          ? k(t)
          : this.document.find(t || "body").eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element.removeUniqueId().css(this.originalCss).detach(),
          this.uiDialog.remove(),
          this.originalTitle && this.element.attr("title", this.originalTitle),
          (t = e.parent.children().eq(e.index)).length &&
          t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: k.noop,
      enable: k.noop,
      close: function (t) {
        var e = this;
        this._isOpen &&
          !1 !== this._trigger("beforeClose", t) &&
          ((this._isOpen = !1),
          (this._focusedElement = null),
          this._destroyOverlay(),
          this._untrackInstance(),
          this.opener.filter(":focusable").trigger("focus").length ||
            k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),
          this._hide(this.uiDialog, this.options.hide, function () {
            e._trigger("close", t);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (t, e) {
        var i = !1,
          s = this.uiDialog
            .siblings(".ui-front:visible")
            .map(function () {
              return +k(this).css("z-index");
            })
            .get(),
          s = Math.max.apply(null, s);
        return (
          s >= +this.uiDialog.css("z-index") &&
            (this.uiDialog.css("z-index", s + 1), (i = !0)),
          i && !e && this._trigger("focus", t),
          i
        );
      },
      open: function () {
        var t = this;
        this._isOpen
          ? this._moveToTop() && this._focusTabbable()
          : ((this._isOpen = !0),
            (this.opener = k(k.ui.safeActiveElement(this.document[0]))),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay &&
              this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function () {
              t._focusTabbable(), t._trigger("focus");
            }),
            this._makeFocusTarget(),
            this._trigger("open"));
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        (t = t || this.element.find("[autofocus]")).length ||
          (t = this.element.find(":tabbable")),
          t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
          t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
          t.length || (t = this.uiDialog),
          t.eq(0).trigger("focus");
      },
      _keepFocus: function (t) {
        function e() {
          var t = k.ui.safeActiveElement(this.document[0]);
          this.uiDialog[0] === t ||
            k.contains(this.uiDialog[0], t) ||
            this._focusTabbable();
        }
        t.preventDefault(), e.call(this), this._delay(e);
      },
      _createWrapper: function () {
        (this.uiDialog = k("<div>")
          .hide()
          .attr({ tabIndex: -1, role: "dialog" })
          .appendTo(this._appendTo())),
          this._addClass(
            this.uiDialog,
            "ui-dialog",
            "ui-widget ui-widget-content ui-front"
          ),
          this._on(this.uiDialog, {
            keydown: function (t) {
              if (
                this.options.closeOnEscape &&
                !t.isDefaultPrevented() &&
                t.keyCode &&
                t.keyCode === k.ui.keyCode.ESCAPE
              )
                return t.preventDefault(), void this.close(t);
              var e, i, s;
              t.keyCode !== k.ui.keyCode.TAB ||
                t.isDefaultPrevented() ||
                ((e = this.uiDialog.find(":tabbable")),
                (i = e.filter(":first")),
                (s = e.filter(":last")),
                (t.target !== s[0] && t.target !== this.uiDialog[0]) ||
                t.shiftKey
                  ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                    !t.shiftKey ||
                    (this._delay(function () {
                      s.trigger("focus");
                    }),
                    t.preventDefault())
                  : (this._delay(function () {
                      i.trigger("focus");
                    }),
                    t.preventDefault()));
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find("[aria-describedby]").length ||
            this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id"),
            });
      },
      _createTitlebar: function () {
        var t;
        (this.uiDialogTitlebar = k("<div>")),
          this._addClass(
            this.uiDialogTitlebar,
            "ui-dialog-titlebar",
            "ui-widget-header ui-helper-clearfix"
          ),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (t) {
              k(t.target).closest(".ui-dialog-titlebar-close") ||
                this.uiDialog.trigger("focus");
            },
          }),
          (this.uiDialogTitlebarClose = k("<button type='button'></button>")
            .button({
              label: k("<a>").text(this.options.closeText).html(),
              icon: "ui-icon-closethick",
              showLabel: !1,
            })
            .appendTo(this.uiDialogTitlebar)),
          this._addClass(
            this.uiDialogTitlebarClose,
            "ui-dialog-titlebar-close"
          ),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (t = k("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
          this._addClass(t, "ui-dialog-title"),
          this._title(t),
          this.uiDialogTitlebar.prependTo(this.uiDialog),
          this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html("&#160;");
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = k("<div>")),
          this._addClass(
            this.uiDialogButtonPane,
            "ui-dialog-buttonpane",
            "ui-widget-content ui-helper-clearfix"
          ),
          (this.uiButtonSet = k("<div>").appendTo(this.uiDialogButtonPane)),
          this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
          this._createButtons();
      },
      _createButtons: function () {
        var s = this,
          t = this.options.buttons;
        this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          k.isEmptyObject(t) || (k.isArray(t) && !t.length)
            ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
            : (k.each(t, function (t, e) {
                var i;
                (e = k.isFunction(e) ? { click: e, text: t } : e),
                  (e = k.extend({ type: "button" }, e)),
                  (i = e.click),
                  (t = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text,
                  }),
                  delete e.click,
                  delete e.icon,
                  delete e.iconPosition,
                  delete e.showLabel,
                  delete e.icons,
                  "boolean" == typeof e.text && delete e.text,
                  k("<button></button>", e)
                    .button(t)
                    .appendTo(s.uiButtonSet)
                    .on("click", function () {
                      i.apply(s.element[0], arguments);
                    });
              }),
              this._addClass(this.uiDialog, "ui-dialog-buttons"),
              this.uiDialogButtonPane.appendTo(this.uiDialog));
      },
      _makeDraggable: function () {
        var n = this,
          o = this.options;
        function a(t) {
          return { position: t.position, offset: t.offset };
        }
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (t, e) {
            n._addClass(k(this), "ui-dialog-dragging"),
              n._blockFrames(),
              n._trigger("dragStart", t, a(e));
          },
          drag: function (t, e) {
            n._trigger("drag", t, a(e));
          },
          stop: function (t, e) {
            var i = e.offset.left - n.document.scrollLeft(),
              s = e.offset.top - n.document.scrollTop();
            (o.position = {
              my: "left top",
              at:
                "left" +
                (0 <= i ? "+" : "") +
                i +
                " top" +
                (0 <= s ? "+" : "") +
                s,
              of: n.window,
            }),
              n._removeClass(k(this), "ui-dialog-dragging"),
              n._unblockFrames(),
              n._trigger("dragStop", t, a(e));
          },
        });
      },
      _makeResizable: function () {
        var n = this,
          o = this.options,
          t = o.resizable,
          e = this.uiDialog.css("position"),
          t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
        function a(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: o.maxWidth,
            maxHeight: o.maxHeight,
            minWidth: o.minWidth,
            minHeight: this._minHeight(),
            handles: t,
            start: function (t, e) {
              n._addClass(k(this), "ui-dialog-resizing"),
                n._blockFrames(),
                n._trigger("resizeStart", t, a(e));
            },
            resize: function (t, e) {
              n._trigger("resize", t, a(e));
            },
            stop: function (t, e) {
              var i = n.uiDialog.offset(),
                s = i.left - n.document.scrollLeft(),
                i = i.top - n.document.scrollTop();
              (o.height = n.uiDialog.height()),
                (o.width = n.uiDialog.width()),
                (o.position = {
                  my: "left top",
                  at:
                    "left" +
                    (0 <= s ? "+" : "") +
                    s +
                    " top" +
                    (0 <= i ? "+" : "") +
                    i,
                  of: n.window,
                }),
                n._removeClass(k(this), "ui-dialog-resizing"),
                n._unblockFrames(),
                n._trigger("resizeStop", t, a(e));
            },
          })
          .css("position", e);
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (t) {
            this._makeFocusTarget(), (this._focusedElement = k(t.target));
          },
        });
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function () {
        var t = this._trackingInstances(),
          e = k.inArray(this, t);
        -1 !== e && t.splice(e, 1);
      },
      _trackingInstances: function () {
        var t = this.document.data("ui-dialog-instances");
        return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide();
      },
      _setOptions: function (t) {
        var i = this,
          s = !1,
          n = {};
        k.each(t, function (t, e) {
          i._setOption(t, e),
            t in i.sizeRelatedOptions && (s = !0),
            t in i.resizableRelatedOptions && (n[t] = e);
        }),
          s && (this._size(), this._position()),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", n);
      },
      _setOption: function (t, e) {
        var i,
          s = this.uiDialog;
        "disabled" !== t &&
          (this._super(t, e),
          "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
          "buttons" === t && this._createButtons(),
          "closeText" === t &&
            this.uiDialogTitlebarClose.button({
              label: k("<a>")
                .text("" + this.options.closeText)
                .html(),
            }),
          "draggable" === t &&
            ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"),
            !i && e && this._makeDraggable()),
          "position" === t && this._position(),
          "resizable" === t &&
            ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
            i && "string" == typeof e && s.resizable("option", "handles", e),
            i || !1 === e || this._makeResizable()),
          "title" === t &&
            this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options;
        this.element
          .show()
          .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog
            .css({ height: "auto", width: s.width })
            .outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i =
            "number" == typeof s.maxHeight
              ? Math.max(0, s.maxHeight - t)
              : "none"),
          "auto" === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var t = k(this);
          return k("<div>")
            .css({
              position: "absolute",
              width: t.outerWidth(),
              height: t.outerHeight(),
            })
            .appendTo(t.parent())
            .offset(t.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (t) {
        return (
          !!k(t.target).closest(".ui-dialog").length ||
          !!k(t.target).closest(".ui-datepicker").length
        );
      },
      _createOverlay: function () {
        var e;
        this.options.modal &&
          ((e = !0),
          this._delay(function () {
            e = !1;
          }),
          this.document.data("ui-dialog-overlays") ||
            this._on(this.document, {
              focusin: function (t) {
                e ||
                  this._allowInteraction(t) ||
                  (t.preventDefault(),
                  this._trackingInstances()[0]._focusTabbable());
              },
            }),
          (this.overlay = k("<div>").appendTo(this._appendTo())),
          this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
          this._on(this.overlay, { mousedown: "_keepFocus" }),
          this.document.data(
            "ui-dialog-overlays",
            (this.document.data("ui-dialog-overlays") || 0) + 1
          ));
      },
      _destroyOverlay: function () {
        var t;
        this.options.modal &&
          this.overlay &&
          ((t = this.document.data("ui-dialog-overlays") - 1)
            ? this.document.data("ui-dialog-overlays", t)
            : (this._off(this.document, "focusin"),
              this.document.removeData("ui-dialog-overlays")),
          this.overlay.remove(),
          (this.overlay = null));
      },
    }),
      !1 !== k.uiBackCompat &&
        k.widget("ui.dialog", k.ui.dialog, {
          options: { dialogClass: "" },
          _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
          },
          _setOption: function (t, e) {
            "dialogClass" === t &&
              this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
              this._superApply(arguments);
          },
        });
    k.ui.dialog,
      k.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
          classes: {
            "ui-progressbar": "ui-corner-all",
            "ui-progressbar-value": "ui-corner-left",
            "ui-progressbar-complete": "ui-corner-right",
          },
          max: 100,
          value: 0,
          change: null,
          complete: null,
        },
        min: 0,
        _create: function () {
          (this.oldValue = this.options.value = this._constrainedValue()),
            this.element.attr({
              role: "progressbar",
              "aria-valuemin": this.min,
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            (this.valueDiv = k("<div>").appendTo(this.element)),
            this._addClass(
              this.valueDiv,
              "ui-progressbar-value",
              "ui-widget-header"
            ),
            this._refreshValue();
        },
        _destroy: function () {
          this.element.removeAttr(
            "role aria-valuemin aria-valuemax aria-valuenow"
          ),
            this.valueDiv.remove();
        },
        value: function (t) {
          if (void 0 === t) return this.options.value;
          (this.options.value = this._constrainedValue(t)),
            this._refreshValue();
        },
        _constrainedValue: function (t) {
          return (
            void 0 === t && (t = this.options.value),
            (this.indeterminate = !1 === t),
            "number" != typeof t && (t = 0),
            !this.indeterminate &&
              Math.min(this.options.max, Math.max(this.min, t))
          );
        },
        _setOptions: function (t) {
          var e = t.value;
          delete t.value,
            this._super(t),
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue();
        },
        _setOption: function (t, e) {
          "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function () {
          return this.indeterminate
            ? 100
            : (100 * (this.options.value - this.min)) /
                (this.options.max - this.min);
        },
        _refreshValue: function () {
          var t = this.options.value,
            e = this._percentage();
          this.valueDiv
            .toggle(this.indeterminate || t > this.min)
            .width(e.toFixed(0) + "%"),
            this._toggleClass(
              this.valueDiv,
              "ui-progressbar-complete",
              null,
              t === this.options.max
            )._toggleClass(
              "ui-progressbar-indeterminate",
              null,
              this.indeterminate
            ),
            this.indeterminate
              ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv ||
                  ((this.overlayDiv = k("<div>").appendTo(this.valueDiv)),
                  this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
              : (this.element.attr({
                  "aria-valuemax": this.options.max,
                  "aria-valuenow": t,
                }),
                this.overlayDiv &&
                  (this.overlayDiv.remove(), (this.overlayDiv = null))),
            this.oldValue !== t &&
              ((this.oldValue = t), this._trigger("change")),
            t === this.options.max && this._trigger("complete");
        },
      }),
      k.widget("ui.selectmenu", [
        k.ui.formResetMixin,
        {
          version: "1.12.1",
          defaultElement: "<select>",
          options: {
            appendTo: null,
            classes: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
            disabled: null,
            icons: { button: "ui-icon-triangle-1-s" },
            position: { my: "left top", at: "left bottom", collision: "none" },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null,
          },
          _create: function () {
            var t = this.element.uniqueId().attr("id");
            (this.ids = {
              element: t,
              button: t + "-button",
              menu: t + "-menu",
            }),
              this._drawButton(),
              this._drawMenu(),
              this._bindFormResetHandler(),
              (this._rendered = !1),
              (this.menuItems = k());
          },
          _drawButton: function () {
            var t,
              e = this,
              i = this._parseOption(
                this.element.find("option:selected"),
                this.element[0].selectedIndex
              );
            (this.labels = this.element.labels().attr("for", this.ids.button)),
              this._on(this.labels, {
                click: function (t) {
                  this.button.focus(), t.preventDefault();
                },
              }),
              this.element.hide(),
              (this.button = k("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title"),
              }).insertAfter(this.element)),
              this._addClass(
                this.button,
                "ui-selectmenu-button ui-selectmenu-button-closed",
                "ui-button ui-widget"
              ),
              (t = k("<span>").appendTo(this.button)),
              this._addClass(
                t,
                "ui-selectmenu-icon",
                "ui-icon " + this.options.icons.button
              ),
              (this.buttonItem = this._renderButtonItem(i).appendTo(
                this.button
              )),
              !1 !== this.options.width && this._resizeButton(),
              this._on(this.button, this._buttonEvents),
              this.button.one("focusin", function () {
                e._rendered || e._refreshMenu();
              });
          },
          _drawMenu: function () {
            var i = this;
            (this.menu = k("<ul>", {
              "aria-hidden": "true",
              "aria-labelledby": this.ids.button,
              id: this.ids.menu,
            })),
              (this.menuWrap = k("<div>").append(this.menu)),
              this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
              this.menuWrap.appendTo(this._appendTo()),
              (this.menuInstance = this.menu
                .menu({
                  classes: { "ui-menu": "ui-corner-bottom" },
                  role: "listbox",
                  select: function (t, e) {
                    t.preventDefault(),
                      i._setSelection(),
                      i._select(e.item.data("ui-selectmenu-item"), t);
                  },
                  focus: function (t, e) {
                    e = e.item.data("ui-selectmenu-item");
                    null != i.focusIndex &&
                      e.index !== i.focusIndex &&
                      (i._trigger("focus", t, { item: e }),
                      i.isOpen || i._select(e, t)),
                      (i.focusIndex = e.index),
                      i.button.attr(
                        "aria-activedescendant",
                        i.menuItems.eq(e.index).attr("id")
                      );
                  },
                })
                .menu("instance")),
              this.menuInstance._off(this.menu, "mouseleave"),
              (this.menuInstance._closeOnDocumentClick = function () {
                return !1;
              }),
              (this.menuInstance._isDivider = function () {
                return !1;
              });
          },
          refresh: function () {
            this._refreshMenu(),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(
                  this._getSelectedItem().data("ui-selectmenu-item") || {}
                ))
              ),
              null === this.options.width && this._resizeButton();
          },
          _refreshMenu: function () {
            var t = this.element.find("option");
            this.menu.empty(),
              this._parseOptions(t),
              this._renderMenu(this.menu, this.items),
              this.menuInstance.refresh(),
              (this.menuItems = this.menu
                .find("li")
                .not(".ui-selectmenu-optgroup")
                .find(".ui-menu-item-wrapper")),
              (this._rendered = !0),
              t.length &&
                ((t = this._getSelectedItem()),
                this.menuInstance.focus(null, t),
                this._setAria(t.data("ui-selectmenu-item")),
                this._setOption("disabled", this.element.prop("disabled")));
          },
          open: function (t) {
            this.options.disabled ||
              (this._rendered
                ? (this._removeClass(
                    this.menu.find(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.menuInstance.focus(null, this._getSelectedItem()))
                : this._refreshMenu(),
              this.menuItems.length &&
                ((this.isOpen = !0),
                this._toggleAttr(),
                this._resizeMenu(),
                this._position(),
                this._on(this.document, this._documentClick),
                this._trigger("open", t)));
          },
          _position: function () {
            this.menuWrap.position(
              k.extend({ of: this.button }, this.options.position)
            );
          },
          close: function (t) {
            this.isOpen &&
              ((this.isOpen = !1),
              this._toggleAttr(),
              (this.range = null),
              this._off(this.document),
              this._trigger("close", t));
          },
          widget: function () {
            return this.button;
          },
          menuWidget: function () {
            return this.menu;
          },
          _renderButtonItem: function (t) {
            var e = k("<span>");
            return (
              this._setText(e, t.label),
              this._addClass(e, "ui-selectmenu-text"),
              e
            );
          },
          _renderMenu: function (s, t) {
            var n = this,
              o = "";
            k.each(t, function (t, e) {
              var i;
              e.optgroup !== o &&
                ((i = k("<li>", { text: e.optgroup })),
                n._addClass(
                  i,
                  "ui-selectmenu-optgroup",
                  "ui-menu-divider" +
                    (e.element.parent("optgroup").prop("disabled")
                      ? " ui-state-disabled"
                      : "")
                ),
                i.appendTo(s),
                (o = e.optgroup)),
                n._renderItemData(s, e);
            });
          },
          _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
          },
          _renderItem: function (t, e) {
            var i = k("<li>"),
              s = k("<div>", { title: e.element.attr("title") });
            return (
              e.disabled && this._addClass(i, null, "ui-state-disabled"),
              this._setText(s, e.label),
              i.append(s).appendTo(t)
            );
          },
          _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;");
          },
          _move: function (t, e) {
            var i,
              s = ".ui-menu-item";
            this.isOpen
              ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
              : ((i = this.menuItems
                  .eq(this.element[0].selectedIndex)
                  .parent("li")),
                (s += ":not(.ui-state-disabled)")),
              (s =
                "first" === t || "last" === t
                  ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                  : i[t + "All"](s).eq(0)).length &&
                this.menuInstance.focus(e, s);
          },
          _getSelectedItem: function () {
            return this.menuItems
              .eq(this.element[0].selectedIndex)
              .parent("li");
          },
          _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t);
          },
          _setSelection: function () {
            var t;
            this.range &&
              (window.getSelection
                ? ((t = window.getSelection()).removeAllRanges(),
                  t.addRange(this.range))
                : this.range.select(),
              this.button.focus());
          },
          _documentClick: {
            mousedown: function (t) {
              this.isOpen &&
                (k(t.target).closest(
                  ".ui-selectmenu-menu, #" +
                    k.ui.escapeSelector(this.ids.button)
                ).length ||
                  this.close(t));
            },
          },
          _buttonEvents: {
            mousedown: function () {
              var t;
              window.getSelection
                ? (t = window.getSelection()).rangeCount &&
                  (this.range = t.getRangeAt(0))
                : (this.range = document.selection.createRange());
            },
            click: function (t) {
              this._setSelection(), this._toggle(t);
            },
            keydown: function (t) {
              var e = !0;
              switch (t.keyCode) {
                case k.ui.keyCode.TAB:
                case k.ui.keyCode.ESCAPE:
                  this.close(t), (e = !1);
                  break;
                case k.ui.keyCode.ENTER:
                  this.isOpen && this._selectFocusedItem(t);
                  break;
                case k.ui.keyCode.UP:
                  t.altKey ? this._toggle(t) : this._move("prev", t);
                  break;
                case k.ui.keyCode.DOWN:
                  t.altKey ? this._toggle(t) : this._move("next", t);
                  break;
                case k.ui.keyCode.SPACE:
                  this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                  break;
                case k.ui.keyCode.LEFT:
                  this._move("prev", t);
                  break;
                case k.ui.keyCode.RIGHT:
                  this._move("next", t);
                  break;
                case k.ui.keyCode.HOME:
                case k.ui.keyCode.PAGE_UP:
                  this._move("first", t);
                  break;
                case k.ui.keyCode.END:
                case k.ui.keyCode.PAGE_DOWN:
                  this._move("last", t);
                  break;
                default:
                  this.menu.trigger(t), (e = !1);
              }
              e && t.preventDefault();
            },
          },
          _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") ||
              this._select(e.data("ui-selectmenu-item"), t);
          },
          _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            (this.element[0].selectedIndex = t.index),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(t))
              ),
              this._setAria(t),
              this._trigger("select", e, { item: t }),
              t.index !== i && this._trigger("change", e, { item: t }),
              this.close(e);
          },
          _setAria: function (t) {
            t = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
              "aria-labelledby": t,
              "aria-activedescendant": t,
            }),
              this.menu.attr("aria-activedescendant", t);
          },
          _setOption: function (t, e) {
            var i;
            "icons" === t &&
              ((i = this.button.find("span.ui-icon")),
              this._removeClass(i, null, this.options.icons.button)._addClass(
                i,
                null,
                e.button
              )),
              this._super(t, e),
              "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
              "width" === t && this._resizeButton();
          },
          _setOptionDisabled: function (t) {
            this._super(t),
              this.menuInstance.option("disabled", t),
              this.button.attr("aria-disabled", t),
              this._toggleClass(this.button, null, "ui-state-disabled", t),
              this.element.prop("disabled", t),
              t
                ? (this.button.attr("tabindex", -1), this.close())
                : this.button.attr("tabindex", 0);
          },
          _appendTo: function () {
            var t = this.options.appendTo;
            return (
              ((t =
                t &&
                (t.jquery || t.nodeType
                  ? k(t)
                  : this.document.find(t).eq(0))) &&
                t[0]) ||
                (t = this.element.closest(".ui-front, dialog")),
              t.length || (t = this.document[0].body),
              t
            );
          },
          _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen),
              this._removeClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
              )
                ._addClass(
                  this.button,
                  "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
                )
                ._toggleClass(
                  this.menuWrap,
                  "ui-selectmenu-open",
                  null,
                  this.isOpen
                ),
              this.menu.attr("aria-hidden", !this.isOpen);
          },
          _resizeButton: function () {
            var t = this.options.width;
            !1 !== t
              ? (null === t &&
                  ((t = this.element.show().outerWidth()), this.element.hide()),
                this.button.outerWidth(t))
              : this.button.css("width", "");
          },
          _resizeMenu: function () {
            this.menu.outerWidth(
              Math.max(
                this.button.outerWidth(),
                this.menu.width("").outerWidth() + 1
              )
            );
          },
          _getCreateOptions: function () {
            var t = this._super();
            return (t.disabled = this.element.prop("disabled")), t;
          },
          _parseOptions: function (t) {
            var i = this,
              s = [];
            t.each(function (t, e) {
              s.push(i._parseOption(k(e), t));
            }),
              (this.items = s);
          },
          _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
              element: t,
              index: e,
              value: t.val(),
              label: t.text(),
              optgroup: i.attr("label") || "",
              disabled: i.prop("disabled") || t.prop("disabled"),
            };
          },
          _destroy: function () {
            this._unbindFormResetHandler(),
              this.menuWrap.remove(),
              this.button.remove(),
              this.element.show(),
              this.element.removeUniqueId(),
              this.labels.attr("for", this.ids.element);
          },
        },
      ]),
      k.widget("ui.slider", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          classes: {
            "ui-slider": "ui-corner-all",
            "ui-slider-handle": "ui-corner-all",
            "ui-slider-range": "ui-corner-all ui-widget-header",
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass(
              "ui-slider ui-slider-" + this.orientation,
              "ui-widget ui-widget-content"
            ),
            this._refresh(),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var t,
            e = this.options,
            i = this.element.find(".ui-slider-handle"),
            s = [],
            n = (e.values && e.values.length) || 1;
          for (
            i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
              t = i.length;
            t < n;
            t++
          )
            s.push("<span tabindex='0'></span>");
          (this.handles = i.add(k(s.join("")).appendTo(this.element))),
            this._addClass(
              this.handles,
              "ui-slider-handle",
              "ui-state-default"
            ),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (t) {
              k(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
            });
        },
        _createRange: function () {
          var t = this.options;
          t.range
            ? (!0 === t.range &&
                (t.values
                  ? t.values.length && 2 !== t.values.length
                    ? (t.values = [t.values[0], t.values[0]])
                    : k.isArray(t.values) && (t.values = t.values.slice(0))
                  : (t.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(
                    this.range,
                    "ui-slider-range-min ui-slider-range-max"
                  ),
                  this.range.css({ left: "", bottom: "" }))
                : ((this.range = k("<div>").appendTo(this.element)),
                  this._addClass(this.range, "ui-slider-range")),
              ("min" !== t.range && "max" !== t.range) ||
                this._addClass(this.range, "ui-slider-range-" + t.range))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy();
        },
        _mouseCapture: function (t) {
          var i,
            s,
            n,
            o,
            e,
            a,
            r = this,
            h = this.options;
          return (
            !h.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (a = { x: t.pageX, y: t.pageY }),
            (i = this._normValueFromMouse(a)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var e = Math.abs(i - r.values(t));
              (e < s ||
                (s === e &&
                  (t === r._lastChangedValue || r.values(t) === h.min))) &&
                ((s = e), (n = k(this)), (o = t));
            }),
            !1 !== this._start(t, o) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = o),
              this._addClass(n, null, "ui-state-active"),
              n.trigger("focus"),
              (e = n.offset()),
              (a = !k(t.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = a
                ? { left: 0, top: 0 }
                : {
                    left: t.pageX - e.left - n.width() / 2,
                    top:
                      t.pageY -
                      e.top -
                      n.height() / 2 -
                      (parseInt(n.css("borderTopWidth"), 10) || 0) -
                      (parseInt(n.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(n.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
              (this._animateOff = !0)))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            e = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, e), !1;
        },
        _mouseStop: function (t) {
          return (
            this._removeClass(this.handles, null, "ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1)
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e,
            t =
              "horizontal" === this.orientation
                ? ((e = this.elementSize.width),
                  t.x -
                    this.elementOffset.left -
                    (this._clickOffset ? this._clickOffset.left : 0))
                : ((e = this.elementSize.height),
                  t.y -
                    this.elementOffset.top -
                    (this._clickOffset ? this._clickOffset.top : 0)),
            t = t / e;
          return (
            1 < t && (t = 1),
            t < 0 && (t = 0),
            "vertical" === this.orientation && (t = 1 - t),
            (e = this._valueMax() - this._valueMin()),
            (e = this._valueMin() + t * e),
            this._trimAlignValue(e)
          );
        },
        _uiHash: function (t, e, i) {
          var s = {
            handle: this.handles[t],
            handleIndex: t,
            value: void 0 !== e ? e : this.value(),
          };
          return (
            this._hasMultipleValues() &&
              ((s.value = void 0 !== e ? e : this.values(t)),
              (s.values = i || this.values())),
            s
          );
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length;
        },
        _start: function (t, e) {
          return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function (t, e, i) {
          var s,
            n = this.value(),
            o = this.values();
          this._hasMultipleValues() &&
            ((s = this.values(e ? 0 : 1)),
            (n = this.values(e)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
            (o[e] = i)),
            i !== n &&
              !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
        },
        _stop: function (t, e) {
          this._trigger("stop", t, this._uiHash(e));
        },
        _change: function (t, e) {
          this._keySliding ||
            this._mouseSliding ||
            ((this._lastChangedValue = e),
            this._trigger("change", t, this._uiHash(e)));
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (t, e) {
          var i, s, n;
          if (1 < arguments.length)
            return (
              (this.options.values[t] = this._trimAlignValue(e)),
              this._refreshValue(),
              void this._change(null, t)
            );
          if (!arguments.length) return this._values();
          if (!k.isArray(t))
            return this._hasMultipleValues() ? this._values(t) : this.value();
          for (i = this.options.values, s = t, n = 0; n < i.length; n += 1)
            (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
          this._refreshValue();
        },
        _setOption: function (t, e) {
          var i,
            s = 0;
          switch (
            ("range" === t &&
              !0 === this.options.range &&
              ("min" === e
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === e &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            k.isArray(this.options.values) && (s = this.options.values.length),
            this._super(t, e),
            t)
          ) {
            case "orientation":
              this._detectOrientation(),
                this._removeClass(
                  "ui-slider-horizontal ui-slider-vertical"
                )._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(e),
                this.handles.css("horizontal" === e ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), i = s - 1;
                0 <= i;
                i--
              )
                this._change(null, i);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _setOptionDisabled: function (t) {
          this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function () {
          var t = this.options.value;
          return (t = this._trimAlignValue(t));
        },
        _values: function (t) {
          var e, i, s;
          if (arguments.length)
            return (e = this.options.values[t]), this._trimAlignValue(e);
          if (this._hasMultipleValues()) {
            for (i = this.options.values.slice(), s = 0; s < i.length; s += 1)
              i[s] = this._trimAlignValue(i[s]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (t <= this._valueMin()) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = 0 < this.options.step ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            t = t - i;
          return (
            2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
            parseFloat(t.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
          (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            (this.max = parseFloat(t.toFixed(this._precision())));
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = t.toString(),
            t = e.indexOf(".");
          return -1 === t ? 0 : e.length - t - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshRange: function (t) {
          "vertical" === t && this.range.css({ width: "", left: "" }),
            "horizontal" === t && this.range.css({ height: "", bottom: "" });
        },
        _refreshValue: function () {
          var e,
            i,
            t,
            s,
            n,
            o = this.options.range,
            a = this.options,
            r = this,
            h = !this._animateOff && a.animate,
            l = {};
          this._hasMultipleValues()
            ? this.handles.each(function (t) {
                (i =
                  ((r.values(t) - r._valueMin()) /
                    (r._valueMax() - r._valueMin())) *
                  100),
                  (l["horizontal" === r.orientation ? "left" : "bottom"] =
                    i + "%"),
                  k(this).stop(1, 1)[h ? "animate" : "css"](l, a.animate),
                  !0 === r.options.range &&
                    ("horizontal" === r.orientation
                      ? (0 === t &&
                          r.range
                            .stop(1, 1)
                            [h ? "animate" : "css"](
                              { left: i + "%" },
                              a.animate
                            ),
                        1 === t &&
                          r.range[h ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))
                      : (0 === t &&
                          r.range
                            .stop(1, 1)
                            [h ? "animate" : "css"](
                              { bottom: i + "%" },
                              a.animate
                            ),
                        1 === t &&
                          r.range[h ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))),
                  (e = i);
              })
            : ((t = this.value()),
              (s = this._valueMin()),
              (n = this._valueMax()),
              (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
              (l["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[h ? "animate" : "css"](l, a.animate),
              "min" === o &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ width: i + "%" }, a.animate),
              "max" === o &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate),
              "min" === o &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ height: i + "%" }, a.animate),
              "max" === o &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"](
                    { height: 100 - i + "%" },
                    a.animate
                  ));
        },
        _handleEvents: {
          keydown: function (t) {
            var e,
              i,
              s,
              n = k(t.target).data("ui-slider-handle-index");
            switch (t.keyCode) {
              case k.ui.keyCode.HOME:
              case k.ui.keyCode.END:
              case k.ui.keyCode.PAGE_UP:
              case k.ui.keyCode.PAGE_DOWN:
              case k.ui.keyCode.UP:
              case k.ui.keyCode.RIGHT:
              case k.ui.keyCode.DOWN:
              case k.ui.keyCode.LEFT:
                if (
                  (t.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    this._addClass(k(t.target), null, "ui-state-active"),
                    !1 === this._start(t, n)))
                )
                  return;
            }
            switch (
              ((s = this.options.step),
              (e = i =
                this._hasMultipleValues() ? this.values(n) : this.value()),
              t.keyCode)
            ) {
              case k.ui.keyCode.HOME:
                i = this._valueMin();
                break;
              case k.ui.keyCode.END:
                i = this._valueMax();
                break;
              case k.ui.keyCode.PAGE_UP:
                i = this._trimAlignValue(
                  e + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case k.ui.keyCode.PAGE_DOWN:
                i = this._trimAlignValue(
                  e - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case k.ui.keyCode.UP:
              case k.ui.keyCode.RIGHT:
                if (e === this._valueMax()) return;
                i = this._trimAlignValue(e + s);
                break;
              case k.ui.keyCode.DOWN:
              case k.ui.keyCode.LEFT:
                if (e === this._valueMin()) return;
                i = this._trimAlignValue(e - s);
            }
            this._slide(t, n, i);
          },
          keyup: function (t) {
            var e = k(t.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(t, e),
              this._change(t, e),
              this._removeClass(k(t.target), null, "ui-state-active"));
          },
        },
      });
    function P(e) {
      return function () {
        var t = this.element.val();
        e.apply(this, arguments),
          this._refresh(),
          t !== this.element.val() && this._trigger("change");
      };
    }
    k.widget("ui.spinner", {
      version: "1.12.1",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        classes: {
          "ui-spinner": "ui-corner-all",
          "ui-spinner-down": "ui-corner-br",
          "ui-spinner-up": "ui-corner-tr",
        },
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          "" !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var s = this._super(),
          n = this.element;
        return (
          k.each(["min", "max", "step"], function (t, e) {
            var i = n.attr(e);
            null != i && i.length && (s[e] = i);
          }),
          s
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          this.cancelBlur
            ? delete this.cancelBlur
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger("change", t));
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((0 < e ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (t) {
          var e;
          function i() {
            this.element[0] === k.ui.safeActiveElement(this.document[0]) ||
              (this.element.trigger("focus"),
              (this.previous = e),
              this._delay(function () {
                this.previous = e;
              }));
          }
          (e =
            this.element[0] === k.ui.safeActiveElement(this.document[0])
              ? this.previous
              : this.element.val()),
            t.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            !1 !== this._start(t) &&
              this._repeat(
                null,
                k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                t
              );
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (t) {
          if (k(t.currentTarget).hasClass("ui-state-active"))
            return (
              !1 !== this._start(t) &&
              void this._repeat(
                null,
                k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                t
              )
            );
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _enhance: function () {
        this.uiSpinner = this.element
          .attr("autocomplete", "off")
          .wrap("<span>")
          .parent()
          .append("<a></a><a></a>");
      },
      _draw: function () {
        this._enhance(),
          this._addClass(
            this.uiSpinner,
            "ui-spinner",
            "ui-widget ui-widget-content"
          ),
          this._addClass("ui-spinner-input"),
          this.element.attr("role", "spinbutton"),
          (this.buttons = this.uiSpinner
            .children("a")
            .attr("tabIndex", -1)
            .attr("aria-hidden", !0)
            .button({ classes: { "ui-button": "" } })),
          this._removeClass(this.buttons, "ui-corner-all"),
          this._addClass(
            this.buttons.first(),
            "ui-spinner-button ui-spinner-up"
          ),
          this._addClass(
            this.buttons.last(),
            "ui-spinner-button ui-spinner-down"
          ),
          this.buttons
            .first()
            .button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons
            .last()
            .button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            0 < this.uiSpinner.height() &&
            this.uiSpinner.height(this.uiSpinner.height());
      },
      _keydown: function (t) {
        var e = this.options,
          i = k.ui.keyCode;
        switch (t.keyCode) {
          case i.UP:
            return this._repeat(null, 1, t), !0;
          case i.DOWN:
            return this._repeat(null, -1, t), !0;
          case i.PAGE_UP:
            return this._repeat(null, e.page, t), !0;
          case i.PAGE_DOWN:
            return this._repeat(null, -e.page, t), !0;
        }
        return !1;
      },
      _start: function (t) {
        return (
          !(!this.spinning && !1 === this._trigger("start", t)) &&
          (this.counter || (this.counter = 1), (this.spinning = !0))
        );
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
            (this._value(i), this.counter++);
      },
      _increment: function (t) {
        var e = this.options.incremental;
        return e
          ? k.isFunction(e)
            ? e(t)
            : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          t = e.indexOf(".");
        return -1 === t ? 0 : e.length - t - 1;
      },
      _adjustValue: function (t) {
        var e = this.options,
          i = null !== e.min ? e.min : 0,
          s = t - i;
        return (
          (t = i + Math.round(s / e.step) * e.step),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== e.max && t > e.max
            ? e.max
            : null !== e.min && t < e.min
            ? e.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        var i;
        if ("culture" === t || "numberFormat" === t)
          return (
            (i = this._parse(this.element.val())),
            (this.options[t] = e),
            void this.element.val(this._format(i))
          );
        ("max" !== t && "min" !== t && "step" !== t) ||
          ("string" == typeof e && (e = this._parse(e))),
          "icons" === t &&
            ((i = this.buttons.first().find(".ui-icon")),
            this._removeClass(i, null, this.options.icons.up),
            this._addClass(i, null, e.up),
            (i = this.buttons.last().find(".ui-icon")),
            this._removeClass(i, null, this.options.icons.down),
            this._addClass(i, null, e.down)),
          this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
          this.element.prop("disabled", !!t),
          this.buttons.button(t ? "disable" : "enable");
      },
      _setOptions: P(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null !== t && t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        "" !== t &&
          null !== (i = this._parse(t)) &&
          (e || (i = this._adjustValue(i)), (t = this._format(i))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .prop("disabled", !1)
          .removeAttr(
            "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
          ),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: P(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: P(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: P(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: P(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        if (!arguments.length) return this._parse(this.element.val());
        P(this._value).call(this, t);
      },
      widget: function () {
        return this.uiSpinner;
      },
    }),
      !1 !== k.uiBackCompat &&
        k.widget("ui.spinner", k.ui.spinner, {
          _enhance: function () {
            this.uiSpinner = this.element
              .attr("autocomplete", "off")
              .wrap(this._uiSpinnerHtml())
              .parent()
              .append(this._buttonHtml());
          },
          _uiSpinnerHtml: function () {
            return "<span>";
          },
          _buttonHtml: function () {
            return "<a></a><a></a>";
          },
        });
    var M;
    k.ui.spinner;
    k.widget("ui.tabs", {
      version: "1.12.1",
      delay: 300,
      options: {
        active: null,
        classes: {
          "ui-tabs": "ui-corner-all",
          "ui-tabs-nav": "ui-corner-all",
          "ui-tabs-panel": "ui-corner-bottom",
          "ui-tabs-tab": "ui-corner-top",
        },
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _isLocal:
        ((M = /#.*$/),
        function (t) {
          var e = t.href.replace(M, ""),
            i = location.href.replace(M, "");
          try {
            e = decodeURIComponent(e);
          } catch (t) {}
          try {
            i = decodeURIComponent(i);
          } catch (t) {}
          return 1 < t.hash.length && e === i;
        }),
      _create: function () {
        var e = this,
          t = this.options;
        (this.running = !1),
          this._addClass("ui-tabs", "ui-widget ui-widget-content"),
          this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
          this._processTabs(),
          (t.active = this._initialActive()),
          k.isArray(t.disabled) &&
            (t.disabled = k
              .unique(
                t.disabled.concat(
                  k.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          !1 !== this.options.active && this.anchors.length
            ? (this.active = this._findActive(t.active))
            : (this.active = k()),
          this._refresh(),
          this.active.length && this.load(t.active);
      },
      _initialActive: function () {
        var i = this.options.active,
          t = this.options.collapsible,
          s = location.hash.substring(1);
        return (
          null === i &&
            (s &&
              this.tabs.each(function (t, e) {
                if (k(e).attr("aria-controls") === s) return (i = t), !1;
              }),
            null === i &&
              (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null !== i && -1 !== i) || (i = !!this.tabs.length && 0)),
          !1 !== i &&
            -1 === (i = this.tabs.index(this.tabs.eq(i))) &&
            (i = !t && 0),
          !t && !1 === i && this.anchors.length && (i = 0),
          i
        );
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : k(),
        };
      },
      _tabKeydown: function (t) {
        var e = k(k.ui.safeActiveElement(this.document[0])).closest("li"),
          i = this.tabs.index(e),
          s = !0;
        if (!this._handlePageNav(t)) {
          switch (t.keyCode) {
            case k.ui.keyCode.RIGHT:
            case k.ui.keyCode.DOWN:
              i++;
              break;
            case k.ui.keyCode.UP:
            case k.ui.keyCode.LEFT:
              (s = !1), i--;
              break;
            case k.ui.keyCode.END:
              i = this.anchors.length - 1;
              break;
            case k.ui.keyCode.HOME:
              i = 0;
              break;
            case k.ui.keyCode.SPACE:
              return (
                t.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(i)
              );
            case k.ui.keyCode.ENTER:
              return (
                t.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(i !== this.options.active && i)
              );
            default:
              return;
          }
          t.preventDefault(),
            clearTimeout(this.activating),
            (i = this._focusNextTab(i, s)),
            t.ctrlKey ||
              t.metaKey ||
              (e.attr("aria-selected", "false"),
              this.tabs.eq(i).attr("aria-selected", "true"),
              (this.activating = this._delay(function () {
                this.option("active", i);
              }, this.delay)));
        }
      },
      _panelKeydown: function (t) {
        this._handlePageNav(t) ||
          (t.ctrlKey &&
            t.keyCode === k.ui.keyCode.UP &&
            (t.preventDefault(), this.active.trigger("focus")));
      },
      _handlePageNav: function (t) {
        return t.altKey && t.keyCode === k.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : t.altKey && t.keyCode === k.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0;
      },
      _findNextTab: function (t, e) {
        var i = this.tabs.length - 1;
        for (
          ;
          -1 !==
          k.inArray(
            (i < t && (t = 0), t < 0 && (t = i), t),
            this.options.disabled
          );

        )
          t = e ? t + 1 : t - 1;
        return t;
      },
      _focusNextTab: function (t, e) {
        return (
          (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t
        );
      },
      _setOption: function (t, e) {
        "active" !== t
          ? (this._super(t, e),
            "collapsible" === t &&
              (this._toggleClass("ui-tabs-collapsible", null, e),
              e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e))
          : this._activate(e);
      },
      _sanitizeSelector: function (t) {
        return t
          ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
          : "";
      },
      refresh: function () {
        var t = this.options,
          e = this.tablist.children(":has(a[href])");
        (t.disabled = k.map(e.filter(".ui-state-disabled"), function (t) {
          return e.index(t);
        })),
          this._processTabs(),
          !1 !== t.active && this.anchors.length
            ? this.active.length && !k.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === t.disabled.length
                ? ((t.active = !1), (this.active = k()))
                : this._activate(
                    this._findNextTab(Math.max(0, t.active - 1), !1)
                  )
              : (t.active = this.tabs.index(this.active))
            : ((t.active = !1), (this.active = k())),
          this._refresh();
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ "aria-hidden": "true" }),
          this.active.length
            ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              }),
              this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
              this._getPanelForTab(this.active)
                .show()
                .attr({ "aria-hidden": "false" }))
            : this.tabs.eq(0).attr("tabIndex", 0);
      },
      _processTabs: function () {
        var h = this,
          t = this.tabs,
          e = this.anchors,
          i = this.panels;
        (this.tablist = this._getList().attr("role", "tablist")),
          this._addClass(
            this.tablist,
            "ui-tabs-nav",
            "ui-helper-reset ui-helper-clearfix ui-widget-header"
          ),
          this.tablist
            .on("mousedown" + this.eventNamespace, "> li", function (t) {
              k(this).is(".ui-state-disabled") && t.preventDefault();
            })
            .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
              k(this).closest("li").is(".ui-state-disabled") && this.blur();
            }),
          (this.tabs = this.tablist
            .find("> li:has(a[href])")
            .attr({ role: "tab", tabIndex: -1 })),
          this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
          (this.anchors = this.tabs
            .map(function () {
              return k("a", this)[0];
            })
            .attr({ role: "presentation", tabIndex: -1 })),
          this._addClass(this.anchors, "ui-tabs-anchor"),
          (this.panels = k()),
          this.anchors.each(function (t, e) {
            var i,
              s,
              n,
              o = k(e).uniqueId().attr("id"),
              a = k(e).closest("li"),
              r = a.attr("aria-controls");
            h._isLocal(e)
              ? ((n = (i = e.hash).substring(1)),
                (s = h.element.find(h._sanitizeSelector(i))))
              : ((i =
                  "#" +
                  (n = a.attr("aria-controls") || k({}).uniqueId()[0].id)),
                (s = h.element.find(i)).length ||
                  (s = h._createPanel(n)).insertAfter(
                    h.panels[t - 1] || h.tablist
                  ),
                s.attr("aria-live", "polite")),
              s.length && (h.panels = h.panels.add(s)),
              r && a.data("ui-tabs-aria-controls", r),
              a.attr({ "aria-controls": n, "aria-labelledby": o }),
              s.attr("aria-labelledby", o);
          }),
          this.panels.attr("role", "tabpanel"),
          this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
          t &&
            (this._off(t.not(this.tabs)),
            this._off(e.not(this.anchors)),
            this._off(i.not(this.panels)));
      },
      _getList: function () {
        return this.tablist || this.element.find("ol, ul").eq(0);
      },
      _createPanel: function (t) {
        return k("<div>").attr("id", t).data("ui-tabs-destroy", !0);
      },
      _setOptionDisabled: function (t) {
        var e, i;
        for (
          k.isArray(t) &&
            (t.length
              ? t.length === this.anchors.length && (t = !0)
              : (t = !1)),
            i = 0;
          (e = this.tabs[i]);
          i++
        )
          (e = k(e)),
            !0 === t || -1 !== k.inArray(i, t)
              ? (e.attr("aria-disabled", "true"),
                this._addClass(e, null, "ui-state-disabled"))
              : (e.removeAttr("aria-disabled"),
                this._removeClass(e, null, "ui-state-disabled"));
        (this.options.disabled = t),
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !0 === t
          );
      },
      _setupEvents: function (t) {
        var i = {};
        t &&
          k.each(t.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault();
            },
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: "_tabKeydown" }),
          this._on(this.panels, { keydown: "_panelKeydown" }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (t) {
        var i,
          e = this.element.parent();
        "fill" === t
          ? ((i = e.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function () {
              var t = k(this),
                e = t.css("position");
              "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= k(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                k(this).height(
                  Math.max(0, i - k(this).innerHeight() + k(this).height())
                );
              })
              .css("overflow", "auto"))
          : "auto" === t &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, k(this).height("").height());
              })
              .height(i));
      },
      _eventHandler: function (t) {
        var e = this.options,
          i = this.active,
          s = k(t.currentTarget).closest("li"),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? k() : this._getPanelForTab(s),
          r = i.length ? this._getPanelForTab(i) : k(),
          i = { oldTab: i, oldPanel: r, newTab: o ? k() : s, newPanel: a };
        t.preventDefault(),
          s.hasClass("ui-state-disabled") ||
            s.hasClass("ui-tabs-loading") ||
            this.running ||
            (n && !e.collapsible) ||
            !1 === this._trigger("beforeActivate", t, i) ||
            ((e.active = !o && this.tabs.index(s)),
            (this.active = n ? k() : s),
            this.xhr && this.xhr.abort(),
            r.length ||
              a.length ||
              k.error("jQuery UI Tabs: Mismatching fragment identifier."),
            a.length && this.load(this.tabs.index(s), t),
            this._toggle(t, i));
      },
      _toggle: function (t, e) {
        var i = this,
          s = e.newPanel,
          n = e.oldPanel;
        function o() {
          (i.running = !1), i._trigger("activate", t, e);
        }
        function a() {
          i._addClass(
            e.newTab.closest("li"),
            "ui-tabs-active",
            "ui-state-active"
          ),
            s.length && i.options.show
              ? i._show(s, i.options.show, o)
              : (s.show(), o());
        }
        (this.running = !0),
          n.length && this.options.hide
            ? this._hide(n, this.options.hide, function () {
                i._removeClass(
                  e.oldTab.closest("li"),
                  "ui-tabs-active",
                  "ui-state-active"
                ),
                  a();
              })
            : (this._removeClass(
                e.oldTab.closest("li"),
                "ui-tabs-active",
                "ui-state-active"
              ),
              n.hide(),
              a()),
          n.attr("aria-hidden", "true"),
          e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
          s.length && n.length
            ? e.oldTab.attr("tabIndex", -1)
            : s.length &&
              this.tabs
                .filter(function () {
                  return 0 === k(this).attr("tabIndex");
                })
                .attr("tabIndex", -1),
          s.attr("aria-hidden", "false"),
          e.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0,
          });
      },
      _activate: function (t) {
        var t = this._findActive(t);
        t[0] !== this.active[0] &&
          (t.length || (t = this.active),
          (t = t.find(".ui-tabs-anchor")[0]),
          this._eventHandler({
            target: t,
            currentTarget: t,
            preventDefault: k.noop,
          }));
      },
      _findActive: function (t) {
        return !1 === t ? k() : this.tabs.eq(t);
      },
      _getIndex: function (t) {
        return (
          "string" == typeof t &&
            (t = this.anchors.index(
              this.anchors.filter("[href$='" + k.ui.escapeSelector(t) + "']")
            )),
          t
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.tablist.removeAttr("role").off(this.eventNamespace),
          this.anchors.removeAttr("role tabIndex").removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            k.data(this, "ui-tabs-destroy")
              ? k(this).remove()
              : k(this).removeAttr(
                  "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
                );
          }),
          this.tabs.each(function () {
            var t = k(this),
              e = t.data("ui-tabs-aria-controls");
            e
              ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls")
              : t.removeAttr("aria-controls");
          }),
          this.panels.show(),
          "content" !== this.options.heightStyle &&
            this.panels.css("height", "");
      },
      enable: function (i) {
        var t = this.options.disabled;
        !1 !== t &&
          ((t =
            void 0 !== i &&
            ((i = this._getIndex(i)),
            k.isArray(t)
              ? k.map(t, function (t) {
                  return t !== i ? t : null;
                })
              : k.map(this.tabs, function (t, e) {
                  return e !== i ? e : null;
                }))),
          this._setOptionDisabled(t));
      },
      disable: function (t) {
        var e = this.options.disabled;
        if (!0 !== e) {
          if (void 0 === t) e = !0;
          else {
            if (((t = this._getIndex(t)), -1 !== k.inArray(t, e))) return;
            e = k.isArray(e) ? k.merge([t], e).sort() : [t];
          }
          this._setOptionDisabled(e);
        }
      },
      load: function (t, s) {
        t = this._getIndex(t);
        function n(t, e) {
          "abort" === e && o.panels.stop(!1, !0),
            o._removeClass(i, "ui-tabs-loading"),
            a.removeAttr("aria-busy"),
            t === o.xhr && delete o.xhr;
        }
        var o = this,
          i = this.tabs.eq(t),
          t = i.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(i),
          r = { tab: i, panel: a };
        this._isLocal(t[0]) ||
          ((this.xhr = k.ajax(this._ajaxSettings(t, s, r))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (this._addClass(i, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr
              .done(function (t, e, i) {
                setTimeout(function () {
                  a.html(t), o._trigger("load", s, r), n(i, e);
                }, 1);
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  n(t, e);
                }, 1);
              })));
      },
      _ajaxSettings: function (t, i, s) {
        var n = this;
        return {
          url: t.attr("href").replace(/#.*$/, ""),
          beforeSend: function (t, e) {
            return n._trigger(
              "beforeLoad",
              i,
              k.extend({ jqXHR: t, ajaxSettings: e }, s)
            );
          },
        };
      },
      _getPanelForTab: function (t) {
        t = k(t).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + t));
      },
    }),
      !1 !== k.uiBackCompat &&
        k.widget("ui.tabs", k.ui.tabs, {
          _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
          },
        });
    k.ui.tabs;
    k.widget("ui.tooltip", {
      version: "1.12.1",
      options: {
        classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
        content: function () {
          var t = k(this).attr("title") || "";
          return k("<a>").text(t).html();
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip",
        },
        show: !0,
        track: !1,
        close: null,
        open: null,
      },
      _addDescribedBy: function (t, e) {
        var i = (t.attr("aria-describedby") || "").split(/\s+/);
        i.push(e),
          t
            .data("ui-tooltip-id", e)
            .attr("aria-describedby", k.trim(i.join(" ")));
      },
      _removeDescribedBy: function (t) {
        var e = t.data("ui-tooltip-id"),
          i = (t.attr("aria-describedby") || "").split(/\s+/),
          e = k.inArray(e, i);
        -1 !== e && i.splice(e, 1),
          t.removeData("ui-tooltip-id"),
          (i = k.trim(i.join(" ")))
            ? t.attr("aria-describedby", i)
            : t.removeAttr("aria-describedby");
      },
      _create: function () {
        this._on({ mouseover: "open", focusin: "open" }),
          (this.tooltips = {}),
          (this.parents = {}),
          (this.liveRegion = k("<div>")
            .attr({
              role: "log",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
            .appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
          (this.disabledTitles = k([]));
      },
      _setOption: function (t, e) {
        var i = this;
        this._super(t, e),
          "content" === t &&
            k.each(this.tooltips, function (t, e) {
              i._updateContent(e.element);
            });
      },
      _setOptionDisabled: function (t) {
        this[t ? "_disable" : "_enable"]();
      },
      _disable: function () {
        var s = this;
        k.each(this.tooltips, function (t, e) {
          var i = k.Event("blur");
          (i.target = i.currentTarget = e.element[0]), s.close(i, !0);
        }),
          (this.disabledTitles = this.disabledTitles.add(
            this.element
              .find(this.options.items)
              .addBack()
              .filter(function () {
                var t = k(this);
                if (t.is("[title]"))
                  return t
                    .data("ui-tooltip-title", t.attr("title"))
                    .removeAttr("title");
              })
          ));
      },
      _enable: function () {
        this.disabledTitles.each(function () {
          var t = k(this);
          t.data("ui-tooltip-title") &&
            t.attr("title", t.data("ui-tooltip-title"));
        }),
          (this.disabledTitles = k([]));
      },
      open: function (t) {
        var i = this,
          e = k(t ? t.target : this.element).closest(this.options.items);
        e.length &&
          !e.data("ui-tooltip-id") &&
          (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
          e.data("ui-tooltip-open", !0),
          t &&
            "mouseover" === t.type &&
            e.parents().each(function () {
              var t,
                e = k(this);
              e.data("ui-tooltip-open") &&
                (((t = k.Event("blur")).target = t.currentTarget = this),
                i.close(t, !0)),
                e.attr("title") &&
                  (e.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: e.attr("title"),
                  }),
                  e.attr("title", ""));
            }),
          this._registerCloseHandlers(t, e),
          this._updateContent(e, t));
      },
      _updateContent: function (e, i) {
        var t = this.options.content,
          s = this,
          n = i ? i.type : null;
        if ("string" == typeof t || t.nodeType || t.jquery)
          return this._open(i, e, t);
        (t = t.call(e[0], function (t) {
          s._delay(function () {
            e.data("ui-tooltip-open") &&
              (i && (i.type = n), this._open(i, e, t));
          });
        })) && this._open(i, e, t);
      },
      _open: function (t, e, i) {
        var s,
          n,
          o,
          a = k.extend({}, this.options.position);
        function r(t) {
          (a.of = t), n.is(":hidden") || n.position(a);
        }
        i &&
          ((s = this._find(e))
            ? s.tooltip.find(".ui-tooltip-content").html(i)
            : (e.is("[title]") &&
                (t && "mouseover" === t.type
                  ? e.attr("title", "")
                  : e.removeAttr("title")),
              (s = this._tooltip(e)),
              (n = s.tooltip),
              this._addDescribedBy(e, n.attr("id")),
              n.find(".ui-tooltip-content").html(i),
              this.liveRegion.children().hide(),
              (i = k("<div>").html(n.find(".ui-tooltip-content").html()))
                .removeAttr("name")
                .find("[name]")
                .removeAttr("name"),
              i.removeAttr("id").find("[id]").removeAttr("id"),
              i.appendTo(this.liveRegion),
              this.options.track && t && /^mouse/.test(t.type)
                ? (this._on(this.document, { mousemove: r }), r(t))
                : n.position(k.extend({ of: e }, this.options.position)),
              n.hide(),
              this._show(n, this.options.show),
              this.options.track &&
                this.options.show &&
                this.options.show.delay &&
                (o = this.delayedShow =
                  setInterval(function () {
                    n.is(":visible") && (r(a.of), clearInterval(o));
                  }, k.fx.interval)),
              this._trigger("open", t, { tooltip: n })));
      },
      _registerCloseHandlers: function (t, e) {
        var i = {
          keyup: function (t) {
            t.keyCode === k.ui.keyCode.ESCAPE &&
              (((t = k.Event(t)).currentTarget = e[0]), this.close(t, !0));
          },
        };
        e[0] !== this.element[0] &&
          (i.remove = function () {
            this._removeTooltip(this._find(e).tooltip);
          }),
          (t && "mouseover" !== t.type) || (i.mouseleave = "close"),
          (t && "focusin" !== t.type) || (i.focusout = "close"),
          this._on(!0, e, i);
      },
      close: function (t) {
        var e,
          i = this,
          s = k(t ? t.currentTarget : this.element),
          n = this._find(s);
        n
          ? ((e = n.tooltip),
            n.closing ||
              (clearInterval(this.delayedShow),
              s.data("ui-tooltip-title") &&
                !s.attr("title") &&
                s.attr("title", s.data("ui-tooltip-title")),
              this._removeDescribedBy(s),
              (n.hiding = !0),
              e.stop(!0),
              this._hide(e, this.options.hide, function () {
                i._removeTooltip(k(this));
              }),
              s.removeData("ui-tooltip-open"),
              this._off(s, "mouseleave focusout keyup"),
              s[0] !== this.element[0] && this._off(s, "remove"),
              this._off(this.document, "mousemove"),
              t &&
                "mouseleave" === t.type &&
                k.each(this.parents, function (t, e) {
                  k(e.element).attr("title", e.title), delete i.parents[t];
                }),
              (n.closing = !0),
              this._trigger("close", t, { tooltip: e }),
              n.hiding || (n.closing = !1)))
          : s.removeData("ui-tooltip-open");
      },
      _tooltip: function (t) {
        var e = k("<div>").attr("role", "tooltip"),
          i = k("<div>").appendTo(e),
          s = e.uniqueId().attr("id");
        return (
          this._addClass(i, "ui-tooltip-content"),
          this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
          e.appendTo(this._appendTo(t)),
          (this.tooltips[s] = { element: t, tooltip: e })
        );
      },
      _find: function (t) {
        t = t.data("ui-tooltip-id");
        return t ? this.tooltips[t] : null;
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")];
      },
      _appendTo: function (t) {
        t = t.closest(".ui-front, dialog");
        return t.length || (t = this.document[0].body), t;
      },
      _destroy: function () {
        var s = this;
        k.each(this.tooltips, function (t, e) {
          var i = k.Event("blur"),
            e = e.element;
          (i.target = i.currentTarget = e[0]),
            s.close(i, !0),
            k("#" + t).remove(),
            e.data("ui-tooltip-title") &&
              (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")),
              e.removeData("ui-tooltip-title"));
        }),
          this.liveRegion.remove();
      },
    }),
      !1 !== k.uiBackCompat &&
        k.widget("ui.tooltip", k.ui.tooltip, {
          options: { tooltipClass: null },
          _tooltip: function () {
            var t = this._superApply(arguments);
            return (
              this.options.tooltipClass &&
                t.tooltip.addClass(this.options.tooltipClass),
              t
            );
          },
        });
    k.ui.tooltip;
    var S,
      H,
      z,
      O,
      A,
      N,
      W,
      E,
      F,
      R,
      L,
      B,
      Y,
      j,
      q,
      K,
      U,
      V,
      $,
      X,
      G = "ui-effects-",
      Q = "ui-effects-style",
      J = "ui-effects-animated",
      Z = k;
    function tt(t, e, i) {
      var s = E[e.type] || {};
      return null == t
        ? i || !e.def
          ? null
          : e.def
        : ((t = s.floor ? ~~t : parseFloat(t)),
          isNaN(t)
            ? e.def
            : s.mod
            ? (t + s.mod) % s.mod
            : t < 0
            ? 0
            : s.max < t
            ? s.max
            : t);
    }
    function et(s) {
      var n = N(),
        o = (n._rgba = []);
      return (
        (s = s.toLowerCase()),
        R(A, function (t, e) {
          var i = e.re.exec(s),
            i = i && e.parse(i),
            e = e.space || "rgba";
          if (i)
            return (
              (i = n[e](i)),
              (n[W[e].cache] = i[W[e].cache]),
              (o = n._rgba = i._rgba),
              !1
            );
        }),
        o.length
          ? ("0,0,0,0" === o.join() && S.extend(o, z.transparent), n)
          : z[s]
      );
    }
    function it(t, e, i) {
      return 6 * (i = (i + 1) % 1) < 1
        ? t + (e - t) * i * 6
        : 2 * i < 1
        ? e
        : 3 * i < 2
        ? t + (e - t) * (2 / 3 - i) * 6
        : t;
    }
    function st(t) {
      var e,
        i,
        s = t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView.getComputedStyle(t, null)
          : t.currentStyle,
        n = {};
      if (s && s.length && s[0] && s[s[0]])
        for (i = s.length; i--; )
          "string" == typeof s[(e = s[i])] && (n[k.camelCase(e)] = s[e]);
      else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
      return n;
    }
    function nt(t, e, i, s) {
      return (
        k.isPlainObject(t) && (t = (e = t).effect),
        (t = { effect: t }),
        null == e && (e = {}),
        k.isFunction(e) && ((s = e), (i = null), (e = {})),
        ("number" != typeof e && !k.fx.speeds[e]) ||
          ((s = i), (i = e), (e = {})),
        k.isFunction(i) && ((s = i), (i = null)),
        e && k.extend(t, e),
        (i = i || e.duration),
        (t.duration = k.fx.off
          ? 0
          : "number" == typeof i
          ? i
          : i in k.fx.speeds
          ? k.fx.speeds[i]
          : k.fx.speeds._default),
        (t.complete = s || e.complete),
        t
      );
    }
    function ot(t) {
      return (
        !t ||
        "number" == typeof t ||
        k.fx.speeds[t] ||
        ("string" == typeof t && !k.effects.effect[t]) ||
        k.isFunction(t) ||
        ("object" == typeof t && !t.effect)
      );
    }
    function at(t, e) {
      var i = e.outerWidth(),
        e = e.outerHeight(),
        t =
          /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
            t
          ) || ["", 0, i, e, 0];
      return {
        top: parseFloat(t[1]) || 0,
        right: "auto" === t[2] ? i : parseFloat(t[2]),
        bottom: "auto" === t[3] ? e : parseFloat(t[3]),
        left: parseFloat(t[4]) || 0,
      };
    }
    (k.effects = { effect: {} }),
      (O = /^([\-+])=\s*(\d+\.?\d*)/),
      (A = [
        {
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [t[1], t[2], t[3], t[4]];
          },
        },
        {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function (t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
          },
        },
        {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
          },
        },
        {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (t) {
            return [
              parseInt(t[1] + t[1], 16),
              parseInt(t[2] + t[2], 16),
              parseInt(t[3] + t[3], 16),
            ];
          },
        },
        {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function (t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]];
          },
        },
      ]),
      (N = (S = Z).Color =
        function (t, e, i, s) {
          return new S.Color.fn.parse(t, e, i, s);
        }),
      (W = {
        rgba: {
          props: {
            red: { idx: 0, type: "byte" },
            green: { idx: 1, type: "byte" },
            blue: { idx: 2, type: "byte" },
          },
        },
        hsla: {
          props: {
            hue: { idx: 0, type: "degrees" },
            saturation: { idx: 1, type: "percent" },
            lightness: { idx: 2, type: "percent" },
          },
        },
      }),
      (E = {
        byte: { floor: !0, max: 255 },
        percent: { max: 1 },
        degrees: { mod: 360, floor: !0 },
      }),
      (F = N.support = {}),
      (rt = S("<p>")[0]),
      (R = S.each),
      (rt.style.cssText = "background-color:rgba(1,1,1,.5)"),
      (F.rgba = -1 < rt.style.backgroundColor.indexOf("rgba")),
      R(W, function (t, e) {
        (e.cache = "_" + t),
          (e.props.alpha = { idx: 3, type: "percent", def: 1 });
      }),
      (N.fn = S.extend(N.prototype, {
        parse: function (n, t, e, i) {
          if (n === H) return (this._rgba = [null, null, null, null]), this;
          (n.jquery || n.nodeType) && ((n = S(n).css(t)), (t = H));
          var o = this,
            s = S.type(n),
            a = (this._rgba = []);
          return (
            t !== H && ((n = [n, t, e, i]), (s = "array")),
            "string" === s
              ? this.parse(et(n) || z._default)
              : "array" === s
              ? (R(W.rgba.props, function (t, e) {
                  a[e.idx] = tt(n[e.idx], e);
                }),
                this)
              : "object" === s
              ? (R(
                  W,
                  n instanceof N
                    ? function (t, e) {
                        n[e.cache] && (o[e.cache] = n[e.cache].slice());
                      }
                    : function (t, i) {
                        var s = i.cache;
                        R(i.props, function (t, e) {
                          if (!o[s] && i.to) {
                            if ("alpha" === t || null == n[t]) return;
                            o[s] = i.to(o._rgba);
                          }
                          o[s][e.idx] = tt(n[t], e, !0);
                        }),
                          o[s] &&
                            S.inArray(null, o[s].slice(0, 3)) < 0 &&
                            ((o[s][3] = 1), i.from && (o._rgba = i.from(o[s])));
                      }
                ),
                this)
              : void 0
          );
        },
        is: function (t) {
          var n = N(t),
            o = !0,
            a = this;
          return (
            R(W, function (t, e) {
              var i,
                s = n[e.cache];
              return (
                s &&
                  ((i = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                  R(e.props, function (t, e) {
                    if (null != s[e.idx]) return (o = s[e.idx] === i[e.idx]);
                  })),
                o
              );
            }),
            o
          );
        },
        _space: function () {
          var i = [],
            s = this;
          return (
            R(W, function (t, e) {
              s[e.cache] && i.push(t);
            }),
            i.pop()
          );
        },
        transition: function (t, a) {
          var e = (l = N(t))._space(),
            i = W[e],
            t = 0 === this.alpha() ? N("transparent") : this,
            r = t[i.cache] || i.to(t._rgba),
            h = r.slice(),
            l = l[i.cache];
          return (
            R(i.props, function (t, e) {
              var i = e.idx,
                s = r[i],
                n = l[i],
                o = E[e.type] || {};
              null !== n &&
                (null === s
                  ? (h[i] = n)
                  : (o.mod &&
                      (o.mod / 2 < n - s
                        ? (s += o.mod)
                        : o.mod / 2 < s - n && (s -= o.mod)),
                    (h[i] = tt((n - s) * a + s, e))));
            }),
            this[e](h)
          );
        },
        blend: function (t) {
          if (1 === this._rgba[3]) return this;
          var e = this._rgba.slice(),
            i = e.pop(),
            s = N(t)._rgba;
          return N(
            S.map(e, function (t, e) {
              return (1 - i) * s[e] + i * t;
            })
          );
        },
        toRgbaString: function () {
          var t = "rgba(",
            e = S.map(this._rgba, function (t, e) {
              return null == t ? (2 < e ? 1 : 0) : t;
            });
          return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
        },
        toHslaString: function () {
          var t = "hsla(",
            e = S.map(this.hsla(), function (t, e) {
              return (
                null == t && (t = 2 < e ? 1 : 0),
                e && e < 3 && (t = Math.round(100 * t) + "%"),
                t
              );
            });
          return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
        },
        toHexString: function (t) {
          var e = this._rgba.slice(),
            i = e.pop();
          return (
            t && e.push(~~(255 * i)),
            "#" +
              S.map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
              }).join("")
          );
        },
        toString: function () {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
        },
      })),
      (N.fn.parse.prototype = N.fn),
      (W.hsla.to = function (t) {
        if (null == t[0] || null == t[1] || null == t[2])
          return [null, null, null, t[3]];
        var e = t[0] / 255,
          i = t[1] / 255,
          s = t[2] / 255,
          n = t[3],
          o = Math.max(e, i, s),
          a = Math.min(e, i, s),
          r = o - a,
          h = o + a,
          t = 0.5 * h,
          i =
            a === o
              ? 0
              : e === o
              ? (60 * (i - s)) / r + 360
              : i === o
              ? (60 * (s - e)) / r + 120
              : (60 * (e - i)) / r + 240,
          h = 0 == r ? 0 : t <= 0.5 ? r / h : r / (2 - h);
        return [Math.round(i) % 360, h, t, null == n ? 1 : n];
      }),
      (W.hsla.from = function (t) {
        if (null == t[0] || null == t[1] || null == t[2])
          return [null, null, null, t[3]];
        var e = t[0] / 360,
          i = t[1],
          s = t[2],
          t = t[3],
          i = s <= 0.5 ? s * (1 + i) : s + i - s * i,
          s = 2 * s - i;
        return [
          Math.round(255 * it(s, i, e + 1 / 3)),
          Math.round(255 * it(s, i, e)),
          Math.round(255 * it(s, i, e - 1 / 3)),
          t,
        ];
      }),
      R(W, function (h, t) {
        var o = t.props,
          a = t.cache,
          r = t.to,
          l = t.from;
        (N.fn[h] = function (t) {
          if ((r && !this[a] && (this[a] = r(this._rgba)), t === H))
            return this[a].slice();
          var e,
            i = S.type(t),
            s = "array" === i || "object" === i ? t : arguments,
            n = this[a].slice();
          return (
            R(o, function (t, e) {
              t = s["object" === i ? t : e.idx];
              null == t && (t = n[e.idx]), (n[e.idx] = tt(t, e));
            }),
            l ? (((e = N(l(n)))[a] = n), e) : N(n)
          );
        }),
          R(o, function (a, r) {
            N.fn[a] ||
              (N.fn[a] = function (t) {
                var e,
                  i = S.type(t),
                  s = "alpha" === a ? (this._hsla ? "hsla" : "rgba") : h,
                  n = this[s](),
                  o = n[r.idx];
                return "undefined" === i
                  ? o
                  : ("function" === i &&
                      ((t = t.call(this, o)), (i = S.type(t))),
                    null == t && r.empty
                      ? this
                      : ("string" === i &&
                          (e = O.exec(t)) &&
                          (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                        (n[r.idx] = t),
                        this[s](n)));
              });
          });
      }),
      (N.hook = function (t) {
        t = t.split(" ");
        R(t, function (t, o) {
          (S.cssHooks[o] = {
            set: function (t, e) {
              var i,
                s,
                n = "";
              if (
                "transparent" !== e &&
                ("string" !== S.type(e) || (i = et(e)))
              ) {
                if (((e = N(i || e)), !F.rgba && 1 !== e._rgba[3])) {
                  for (
                    s = "backgroundColor" === o ? t.parentNode : t;
                    ("" === n || "transparent" === n) && s && s.style;

                  )
                    try {
                      (n = S.css(s, "backgroundColor")), (s = s.parentNode);
                    } catch (t) {}
                  e = e.blend(n && "transparent" !== n ? n : "_default");
                }
                e = e.toRgbaString();
              }
              try {
                t.style[o] = e;
              } catch (t) {}
            },
          }),
            (S.fx.step[o] = function (t) {
              t.colorInit ||
                ((t.start = N(t.elem, o)),
                (t.end = N(t.end)),
                (t.colorInit = !0)),
                S.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
            });
        });
      }),
      N.hook(
        "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
      ),
      (S.cssHooks.borderColor = {
        expand: function (i) {
          var s = {};
          return (
            R(["Top", "Right", "Bottom", "Left"], function (t, e) {
              s["border" + e + "Color"] = i;
            }),
            s
          );
        },
      }),
      (z = S.Color.names =
        {
          aqua: "#00ffff",
          black: "#000000",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          gray: "#808080",
          green: "#008000",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          red: "#ff0000",
          silver: "#c0c0c0",
          teal: "#008080",
          white: "#ffffff",
          yellow: "#ffff00",
          transparent: [null, null, null, 0],
          _default: "#ffffff",
        }),
      (j = ["add", "remove", "toggle"]),
      (q = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1,
      }),
      k.each(
        [
          "borderLeftStyle",
          "borderRightStyle",
          "borderBottomStyle",
          "borderTopStyle",
        ],
        function (t, e) {
          k.fx.step[e] = function (t) {
            (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
              (Z.style(t.elem, e, t.end), (t.setAttr = !0));
          };
        }
      ),
      k.fn.addBack ||
        (k.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }),
      (k.effects.animateClass = function (n, t, e, i) {
        var o = k.speed(t, e, i);
        return this.queue(function () {
          var i = k(this),
            t = i.attr("class") || "",
            e = (e = o.children ? i.find("*").addBack() : i).map(function () {
              return { el: k(this), start: st(this) };
            }),
            s = function () {
              k.each(j, function (t, e) {
                n[e] && i[e + "Class"](n[e]);
              });
            };
          s(),
            (e = e.map(function () {
              return (
                (this.end = st(this.el[0])),
                (this.diff = (function (t, e) {
                  var i,
                    s,
                    n = {};
                  for (i in e)
                    (s = e[i]),
                      t[i] !== s &&
                        (q[i] ||
                          (!k.fx.step[i] && isNaN(parseFloat(s))) ||
                          (n[i] = s));
                  return n;
                })(this.start, this.end)),
                this
              );
            })),
            i.attr("class", t),
            (e = e.map(function () {
              var t = this,
                e = k.Deferred(),
                i = k.extend({}, o, {
                  queue: !1,
                  complete: function () {
                    e.resolve(t);
                  },
                });
              return this.el.animate(this.diff, i), e.promise();
            })),
            k.when.apply(k, e.get()).done(function () {
              s(),
                k.each(arguments, function () {
                  var e = this.el;
                  k.each(this.diff, function (t) {
                    e.css(t, "");
                  });
                }),
                o.complete.call(i[0]);
            });
        });
      }),
      k.fn.extend({
        addClass:
          ((Y = k.fn.addClass),
          function (t, e, i, s) {
            return e
              ? k.effects.animateClass.call(this, { add: t }, e, i, s)
              : Y.apply(this, arguments);
          }),
        removeClass:
          ((B = k.fn.removeClass),
          function (t, e, i, s) {
            return 1 < arguments.length
              ? k.effects.animateClass.call(this, { remove: t }, e, i, s)
              : B.apply(this, arguments);
          }),
        toggleClass:
          ((L = k.fn.toggleClass),
          function (t, e, i, s, n) {
            return "boolean" == typeof e || void 0 === e
              ? i
                ? k.effects.animateClass.call(
                    this,
                    e ? { add: t } : { remove: t },
                    i,
                    s,
                    n
                  )
                : L.apply(this, arguments)
              : k.effects.animateClass.call(this, { toggle: t }, e, i, s);
          }),
        switchClass: function (t, e, i, s, n) {
          return k.effects.animateClass.call(
            this,
            { add: e, remove: t },
            i,
            s,
            n
          );
        },
      }),
      k.expr &&
        k.expr.filters &&
        k.expr.filters.animated &&
        (k.expr.filters.animated =
          ((K = k.expr.filters.animated),
          function (t) {
            return !!k(t).data(J) || K(t);
          })),
      !1 !== k.uiBackCompat &&
        k.extend(k.effects, {
          save: function (t, e) {
            for (var i = 0, s = e.length; i < s; i++)
              null !== e[i] && t.data(G + e[i], t[0].style[e[i]]);
          },
          restore: function (t, e) {
            for (var i, s = 0, n = e.length; s < n; s++)
              null !== e[s] && ((i = t.data(G + e[s])), t.css(e[s], i));
          },
          setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
          },
          createWrapper: function (i) {
            if (i.parent().is(".ui-effects-wrapper")) return i.parent();
            var s = {
                width: i.outerWidth(!0),
                height: i.outerHeight(!0),
                float: i.css("float"),
              },
              t = k("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              e = { width: i.width(), height: i.height() },
              n = document.activeElement;
            try {
              n.id;
            } catch (t) {
              n = document.body;
            }
            return (
              i.wrap(t),
              (i[0] !== n && !k.contains(i[0], n)) || k(n).trigger("focus"),
              (t = i.parent()),
              "static" === i.css("position")
                ? (t.css({ position: "relative" }),
                  i.css({ position: "relative" }))
                : (k.extend(s, {
                    position: i.css("position"),
                    zIndex: i.css("z-index"),
                  }),
                  k.each(["top", "left", "bottom", "right"], function (t, e) {
                    (s[e] = i.css(e)),
                      isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                  }),
                  i.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              i.css(e),
              t.css(s).show()
            );
          },
          removeWrapper: function (t) {
            var e = document.activeElement;
            return (
              t.parent().is(".ui-effects-wrapper") &&
                (t.parent().replaceWith(t),
                (t[0] !== e && !k.contains(t[0], e)) || k(e).trigger("focus")),
              t
            );
          },
        }),
      k.extend(k.effects, {
        version: "1.12.1",
        define: function (t, e, i) {
          return (
            i || ((i = e), (e = "effect")),
            (k.effects.effect[t] = i),
            (k.effects.effect[t].mode = e),
            i
          );
        },
        scaledDimensions: function (t, e, i) {
          if (0 === e)
            return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
          var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            e = "vertical" !== i ? (e || 100) / 100 : 1;
          return {
            height: t.height() * e,
            width: t.width() * s,
            outerHeight: t.outerHeight() * e,
            outerWidth: t.outerWidth() * s,
          };
        },
        clipToBox: function (t) {
          return {
            width: t.clip.right - t.clip.left,
            height: t.clip.bottom - t.clip.top,
            left: t.clip.left,
            top: t.clip.top,
          };
        },
        unshift: function (t, e, i) {
          var s = t.queue();
          1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
            t.dequeue();
        },
        saveStyle: function (t) {
          t.data(Q, t[0].style.cssText);
        },
        restoreStyle: function (t) {
          (t[0].style.cssText = t.data(Q) || ""), t.removeData(Q);
        },
        mode: function (t, e) {
          t = t.is(":hidden");
          return (
            "toggle" === e && (e = t ? "show" : "hide"),
            (t ? "hide" === e : "show" === e) && (e = "none"),
            e
          );
        },
        getBaseline: function (t, e) {
          var i, s;
          switch (t[0]) {
            case "top":
              i = 0;
              break;
            case "middle":
              i = 0.5;
              break;
            case "bottom":
              i = 1;
              break;
            default:
              i = t[0] / e.height;
          }
          switch (t[1]) {
            case "left":
              s = 0;
              break;
            case "center":
              s = 0.5;
              break;
            case "right":
              s = 1;
              break;
            default:
              s = t[1] / e.width;
          }
          return { x: s, y: i };
        },
        createPlaceholder: function (t) {
          var e,
            i = t.css("position"),
            s = t.position();
          return (
            t
              .css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
              })
              .outerWidth(t.outerWidth())
              .outerHeight(t.outerHeight()),
            /^(static|relative)/.test(i) &&
              ((i = "absolute"),
              (e = k("<" + t[0].nodeName + ">")
                .insertAfter(t)
                .css({
                  display: /^(inline|ruby)/.test(t.css("display"))
                    ? "inline-block"
                    : "block",
                  visibility: "hidden",
                  marginTop: t.css("marginTop"),
                  marginBottom: t.css("marginBottom"),
                  marginLeft: t.css("marginLeft"),
                  marginRight: t.css("marginRight"),
                  float: t.css("float"),
                })
                .outerWidth(t.outerWidth())
                .outerHeight(t.outerHeight())
                .addClass("ui-effects-placeholder")),
              t.data(G + "placeholder", e)),
            t.css({ position: i, left: s.left, top: s.top }),
            e
          );
        },
        removePlaceholder: function (t) {
          var e = G + "placeholder",
            i = t.data(e);
          i && (i.remove(), t.removeData(e));
        },
        cleanUp: function (t) {
          k.effects.restoreStyle(t), k.effects.removePlaceholder(t);
        },
        setTransition: function (s, t, n, o) {
          return (
            (o = o || {}),
            k.each(t, function (t, e) {
              var i = s.cssUnit(e);
              0 < i[0] && (o[e] = i[0] * n + i[1]);
            }),
            o
          );
        },
      }),
      k.fn.extend({
        effect: function () {
          function t(t) {
            var e = k(this),
              i = k.effects.mode(e, r) || o;
            e.data(J, !0),
              h.push(i),
              o && ("show" === i || (i === o && "hide" === i)) && e.show(),
              (o && "none" === i) || k.effects.saveStyle(e),
              k.isFunction(t) && t();
          }
          var s = nt.apply(this, arguments),
            n = k.effects.effect[s.effect],
            o = n.mode,
            e = s.queue,
            i = e || "fx",
            a = s.complete,
            r = s.mode,
            h = [];
          return k.fx.off || !n
            ? r
              ? this[r](s.duration, a)
              : this.each(function () {
                  a && a.call(this);
                })
            : !1 === e
            ? this.each(t).each(l)
            : this.queue(i, t).queue(i, l);
          function l(t) {
            var e = k(this);
            function i() {
              k.isFunction(a) && a.call(e[0]), k.isFunction(t) && t();
            }
            (s.mode = h.shift()),
              !1 === k.uiBackCompat || o
                ? "none" === s.mode
                  ? (e[r](), i())
                  : n.call(e[0], s, function () {
                      e.removeData(J),
                        k.effects.cleanUp(e),
                        "hide" === s.mode && e.hide(),
                        i();
                    })
                : (e.is(":hidden") ? "hide" === r : "show" === r)
                ? (e[r](), i())
                : n.call(e[0], s, i);
          }
        },
        show:
          (($ = k.fn.show),
          function (t) {
            if (ot(t)) return $.apply(this, arguments);
            var e = nt.apply(this, arguments);
            return (e.mode = "show"), this.effect.call(this, e);
          }),
        hide:
          ((V = k.fn.hide),
          function (t) {
            if (ot(t)) return V.apply(this, arguments);
            var e = nt.apply(this, arguments);
            return (e.mode = "hide"), this.effect.call(this, e);
          }),
        toggle:
          ((U = k.fn.toggle),
          function (t) {
            if (ot(t) || "boolean" == typeof t) return U.apply(this, arguments);
            var e = nt.apply(this, arguments);
            return (e.mode = "toggle"), this.effect.call(this, e);
          }),
        cssUnit: function (t) {
          var i = this.css(t),
            s = [];
          return (
            k.each(["em", "px", "%", "pt"], function (t, e) {
              0 < i.indexOf(e) && (s = [parseFloat(i), e]);
            }),
            s
          );
        },
        cssClip: function (t) {
          return t
            ? this.css(
                "clip",
                "rect(" +
                  t.top +
                  "px " +
                  t.right +
                  "px " +
                  t.bottom +
                  "px " +
                  t.left +
                  "px)"
              )
            : at(this.css("clip"), this);
        },
        transfer: function (t, e) {
          var i = k(this),
            s = k(t.to),
            n = "fixed" === s.css("position"),
            o = k("body"),
            a = n ? o.scrollTop() : 0,
            r = n ? o.scrollLeft() : 0,
            o = s.offset(),
            o = {
              top: o.top - a,
              left: o.left - r,
              height: s.innerHeight(),
              width: s.innerWidth(),
            },
            s = i.offset(),
            h = k("<div class='ui-effects-transfer'></div>")
              .appendTo("body")
              .addClass(t.className)
              .css({
                top: s.top - a,
                left: s.left - r,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: n ? "fixed" : "absolute",
              })
              .animate(o, t.duration, t.easing, function () {
                h.remove(), k.isFunction(e) && e();
              });
        },
      }),
      (k.fx.step.clip = function (t) {
        t.clipInit ||
          ((t.start = k(t.elem).cssClip()),
          "string" == typeof t.end && (t.end = at(t.end, t.elem)),
          (t.clipInit = !0)),
          k(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left,
          });
      }),
      (X = {}),
      k.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
        X[t] = function (t) {
          return Math.pow(t, e + 2);
        };
      }),
      k.extend(X, {
        Sine: function (t) {
          return 1 - Math.cos((t * Math.PI) / 2);
        },
        Circ: function (t) {
          return 1 - Math.sqrt(1 - t * t);
        },
        Elastic: function (t) {
          return 0 === t || 1 === t
            ? t
            : -Math.pow(2, 8 * (t - 1)) *
                Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
        },
        Back: function (t) {
          return t * t * (3 * t - 2);
        },
        Bounce: function (t) {
          for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
          return (
            1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
          );
        },
      }),
      k.each(X, function (t, e) {
        (k.easing["easeIn" + t] = e),
          (k.easing["easeOut" + t] = function (t) {
            return 1 - e(1 - t);
          }),
          (k.easing["easeInOut" + t] = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
          });
      });
    var rt = k.effects;
    k.effects.define("blind", "hide", function (t, e) {
      var i = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        s = k(this),
        n = t.direction || "up",
        o = s.cssClip(),
        a = { clip: k.extend({}, o) },
        r = k.effects.createPlaceholder(s);
      (a.clip[i[n][0]] = a.clip[i[n][1]]),
        "show" === t.mode &&
          (s.cssClip(a.clip), r && r.css(k.effects.clipToBox(a)), (a.clip = o)),
        r && r.animate(k.effects.clipToBox(a), t.duration, t.easing),
        s.animate(a, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
      k.effects.define("bounce", function (t, e) {
        var i,
          s,
          n = k(this),
          o = t.mode,
          a = "hide" === o,
          r = "show" === o,
          h = t.direction || "up",
          l = t.distance,
          c = t.times || 5,
          o = 2 * c + (r || a ? 1 : 0),
          u = t.duration / o,
          d = t.easing,
          p = "up" === h || "down" === h ? "top" : "left",
          f = "up" === h || "left" === h,
          g = 0,
          t = n.queue().length;
        for (
          k.effects.createPlaceholder(n),
            h = n.css(p),
            l = l || n["top" == p ? "outerHeight" : "outerWidth"]() / 3,
            r &&
              (((s = { opacity: 1 })[p] = h),
              n
                .css("opacity", 0)
                .css(p, f ? 2 * -l : 2 * l)
                .animate(s, u, d)),
            a && (l /= Math.pow(2, c - 1)),
            (s = {})[p] = h;
          g < c;
          g++
        )
          ((i = {})[p] = (f ? "-=" : "+=") + l),
            n.animate(i, u, d).animate(s, u, d),
            (l = a ? 2 * l : l / 2);
        a &&
          (((i = { opacity: 0 })[p] = (f ? "-=" : "+=") + l),
          n.animate(i, u, d)),
          n.queue(e),
          k.effects.unshift(n, t, 1 + o);
      }),
      k.effects.define("clip", "hide", function (t, e) {
        var i = {},
          s = k(this),
          n = t.direction || "vertical",
          o = "both" === n,
          a = o || "horizontal" === n,
          o = o || "vertical" === n,
          n = s.cssClip();
        (i.clip = {
          top: o ? (n.bottom - n.top) / 2 : n.top,
          right: a ? (n.right - n.left) / 2 : n.right,
          bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
          left: a ? (n.right - n.left) / 2 : n.left,
        }),
          k.effects.createPlaceholder(s),
          "show" === t.mode && (s.cssClip(i.clip), (i.clip = n)),
          s.animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e,
          });
      }),
      k.effects.define("drop", "hide", function (t, e) {
        var i = k(this),
          s = "show" === t.mode,
          n = t.direction || "left",
          o = "up" === n || "down" === n ? "top" : "left",
          a = "up" === n || "left" === n ? "-=" : "+=",
          r = "+=" == a ? "-=" : "+=",
          h = { opacity: 0 };
        k.effects.createPlaceholder(i),
          (n =
            t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2),
          (h[o] = a + n),
          s && (i.css(h), (h[o] = r + n), (h.opacity = 1)),
          i.animate(h, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e,
          });
      }),
      k.effects.define("explode", "hide", function (t, e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
          l = h,
          c = k(this),
          u = "show" === t.mode,
          d = c.show().css("visibility", "hidden").offset(),
          p = Math.ceil(c.outerWidth() / l),
          f = Math.ceil(c.outerHeight() / h),
          g = [];
        function m() {
          g.push(this),
            g.length === h * l &&
              (c.css({ visibility: "visible" }), k(g).remove(), e());
        }
        for (i = 0; i < h; i++)
          for (o = d.top + i * f, r = i - (h - 1) / 2, s = 0; s < l; s++)
            (n = d.left + s * p),
              (a = s - (l - 1) / 2),
              c
                .clone()
                .appendTo("body")
                .wrap("<div></div>")
                .css({
                  position: "absolute",
                  visibility: "visible",
                  left: -s * p,
                  top: -i * f,
                })
                .parent()
                .addClass("ui-effects-explode")
                .css({
                  position: "absolute",
                  overflow: "hidden",
                  width: p,
                  height: f,
                  left: n + (u ? a * p : 0),
                  top: o + (u ? r * f : 0),
                  opacity: u ? 0 : 1,
                })
                .animate(
                  {
                    left: n + (u ? 0 : a * p),
                    top: o + (u ? 0 : r * f),
                    opacity: u ? 1 : 0,
                  },
                  t.duration || 500,
                  t.easing,
                  m
                );
      }),
      k.effects.define("fade", "toggle", function (t, e) {
        var i = "show" === t.mode;
        k(this)
          .css("opacity", i ? 0 : 1)
          .animate(
            { opacity: i ? 1 : 0 },
            { queue: !1, duration: t.duration, easing: t.easing, complete: e }
          );
      }),
      k.effects.define("fold", "hide", function (e, t) {
        var i = k(this),
          s = e.mode,
          n = "show" === s,
          o = "hide" === s,
          a = e.size || 15,
          r = /([0-9]+)%/.exec(a),
          h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
          l = e.duration / 2,
          c = k.effects.createPlaceholder(i),
          u = i.cssClip(),
          d = { clip: k.extend({}, u) },
          p = { clip: k.extend({}, u) },
          f = [u[h[0]], u[h[1]]],
          s = i.queue().length;
        r && (a = (parseInt(r[1], 10) / 100) * f[o ? 0 : 1]),
          (d.clip[h[0]] = a),
          (p.clip[h[0]] = a),
          (p.clip[h[1]] = 0),
          n &&
            (i.cssClip(p.clip),
            c && c.css(k.effects.clipToBox(p)),
            (p.clip = u)),
          i
            .queue(function (t) {
              c &&
                c
                  .animate(k.effects.clipToBox(d), l, e.easing)
                  .animate(k.effects.clipToBox(p), l, e.easing),
                t();
            })
            .animate(d, l, e.easing)
            .animate(p, l, e.easing)
            .queue(t),
          k.effects.unshift(i, s, 4);
      }),
      k.effects.define("highlight", "show", function (t, e) {
        var i = k(this),
          s = { backgroundColor: i.css("backgroundColor") };
        "hide" === t.mode && (s.opacity = 0),
          k.effects.saveStyle(i),
          i
            .css({
              backgroundImage: "none",
              backgroundColor: t.color || "#ffff99",
            })
            .animate(s, {
              queue: !1,
              duration: t.duration,
              easing: t.easing,
              complete: e,
            });
      }),
      k.effects.define("size", function (s, e) {
        var n,
          i = k(this),
          t = ["fontSize"],
          o = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          a = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          r = s.mode,
          h = "effect" !== r,
          l = s.scale || "both",
          c = s.origin || ["middle", "center"],
          u = i.css("position"),
          d = i.position(),
          p = k.effects.scaledDimensions(i),
          f = s.from || p,
          g = s.to || k.effects.scaledDimensions(i, 0);
        k.effects.createPlaceholder(i),
          "show" === r && ((r = f), (f = g), (g = r)),
          (n = {
            from: { y: f.height / p.height, x: f.width / p.width },
            to: { y: g.height / p.height, x: g.width / p.width },
          }),
          ("box" !== l && "both" !== l) ||
            (n.from.y !== n.to.y &&
              ((f = k.effects.setTransition(i, o, n.from.y, f)),
              (g = k.effects.setTransition(i, o, n.to.y, g))),
            n.from.x !== n.to.x &&
              ((f = k.effects.setTransition(i, a, n.from.x, f)),
              (g = k.effects.setTransition(i, a, n.to.x, g)))),
          ("content" !== l && "both" !== l) ||
            (n.from.y !== n.to.y &&
              ((f = k.effects.setTransition(i, t, n.from.y, f)),
              (g = k.effects.setTransition(i, t, n.to.y, g)))),
          c &&
            ((c = k.effects.getBaseline(c, p)),
            (f.top = (p.outerHeight - f.outerHeight) * c.y + d.top),
            (f.left = (p.outerWidth - f.outerWidth) * c.x + d.left),
            (g.top = (p.outerHeight - g.outerHeight) * c.y + d.top),
            (g.left = (p.outerWidth - g.outerWidth) * c.x + d.left)),
          i.css(f),
          ("content" !== l && "both" !== l) ||
            ((o = o.concat(["marginTop", "marginBottom"]).concat(t)),
            (a = a.concat(["marginLeft", "marginRight"])),
            i.find("*[width]").each(function () {
              var t = k(this),
                e = k.effects.scaledDimensions(t),
                i = {
                  height: e.height * n.from.y,
                  width: e.width * n.from.x,
                  outerHeight: e.outerHeight * n.from.y,
                  outerWidth: e.outerWidth * n.from.x,
                },
                e = {
                  height: e.height * n.to.y,
                  width: e.width * n.to.x,
                  outerHeight: e.height * n.to.y,
                  outerWidth: e.width * n.to.x,
                };
              n.from.y !== n.to.y &&
                ((i = k.effects.setTransition(t, o, n.from.y, i)),
                (e = k.effects.setTransition(t, o, n.to.y, e))),
                n.from.x !== n.to.x &&
                  ((i = k.effects.setTransition(t, a, n.from.x, i)),
                  (e = k.effects.setTransition(t, a, n.to.x, e))),
                h && k.effects.saveStyle(t),
                t.css(i),
                t.animate(e, s.duration, s.easing, function () {
                  h && k.effects.restoreStyle(t);
                });
            })),
          i.animate(g, {
            queue: !1,
            duration: s.duration,
            easing: s.easing,
            complete: function () {
              var t = i.offset();
              0 === g.opacity && i.css("opacity", f.opacity),
                h ||
                  (i.css("position", "static" === u ? "relative" : u).offset(t),
                  k.effects.saveStyle(i)),
                e();
            },
          });
      }),
      k.effects.define("scale", function (t, e) {
        var i = k(this),
          s = t.mode,
          s =
            parseInt(t.percent, 10) ||
            (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
          s = k.extend(
            !0,
            {
              from: k.effects.scaledDimensions(i),
              to: k.effects.scaledDimensions(i, s, t.direction || "both"),
              origin: t.origin || ["middle", "center"],
            },
            t
          );
        t.fade && ((s.from.opacity = 1), (s.to.opacity = 0)),
          k.effects.effect.size.call(this, s, e);
      }),
      k.effects.define("puff", "hide", function (t, e) {
        t = k.extend(!0, {}, t, {
          fade: !0,
          percent: parseInt(t.percent, 10) || 150,
        });
        k.effects.effect.scale.call(this, t, e);
      }),
      k.effects.define("pulsate", "show", function (t, e) {
        var i = k(this),
          s = t.mode,
          n = "show" === s,
          s = n || "hide" === s,
          o = 2 * (t.times || 5) + (s ? 1 : 0),
          a = t.duration / o,
          r = 0,
          h = 1,
          s = i.queue().length;
        for (
          (!n && i.is(":visible")) || (i.css("opacity", 0).show(), (r = 1));
          h < o;
          h++
        )
          i.animate({ opacity: r }, a, t.easing), (r = 1 - r);
        i.animate({ opacity: r }, a, t.easing),
          i.queue(e),
          k.effects.unshift(i, s, 1 + o);
      }),
      k.effects.define("shake", function (t, e) {
        var i = 1,
          s = k(this),
          n = t.direction || "left",
          o = t.distance || 20,
          a = t.times || 3,
          r = 2 * a + 1,
          h = Math.round(t.duration / r),
          l = "up" === n || "down" === n ? "top" : "left",
          c = "up" === n || "left" === n,
          u = {},
          d = {},
          p = {},
          n = s.queue().length;
        for (
          k.effects.createPlaceholder(s),
            u[l] = (c ? "-=" : "+=") + o,
            d[l] = (c ? "+=" : "-=") + 2 * o,
            p[l] = (c ? "-=" : "+=") + 2 * o,
            s.animate(u, h, t.easing);
          i < a;
          i++
        )
          s.animate(d, h, t.easing).animate(p, h, t.easing);
        s
          .animate(d, h, t.easing)
          .animate(u, h / 2, t.easing)
          .queue(e),
          k.effects.unshift(s, n, 1 + r);
      }),
      k.effects.define("slide", "show", function (t, e) {
        var i,
          s,
          n = k(this),
          o = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"],
          },
          a = t.mode,
          r = t.direction || "left",
          h = "up" === r || "down" === r ? "top" : "left",
          l = "up" === r || "left" === r,
          c = t.distance || n["top" == h ? "outerHeight" : "outerWidth"](!0),
          u = {};
        k.effects.createPlaceholder(n),
          (i = n.cssClip()),
          (s = n.position()[h]),
          (u[h] = (l ? -1 : 1) * c + s),
          (u.clip = n.cssClip()),
          (u.clip[o[r][1]] = u.clip[o[r][0]]),
          "show" === a &&
            (n.cssClip(u.clip), n.css(h, u[h]), (u.clip = i), (u[h] = s)),
          n.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e,
          });
      });
    !1 !== k.uiBackCompat &&
      (rt = k.effects.define("transfer", function (t, e) {
        k(this).transfer(t, e);
      }));
  });
} catch (e) {}
try {
  /*!
   * jQuery UI Touch Punch 0.2.3
   *
   * Copyright 2011–2014, Dave Furfero
   * Dual licensed under the MIT or GPL Version 2 licenses.
   *
   * Depends:
   *  jquery.ui.widget.js
   *  jquery.ui.mouse.js
   */
  !(function (a) {
    function f(a, b) {
      if (!(a.originalEvent.touches.length > 1)) {
        a.preventDefault();
        var c = a.originalEvent.changedTouches[0],
          d = document.createEvent("MouseEvents");
        d.initMouseEvent(
          b,
          !0,
          !0,
          window,
          1,
          c.screenX,
          c.screenY,
          c.clientX,
          c.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          a.target.dispatchEvent(d);
      }
    }
    if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
      var e,
        b = a.ui.mouse.prototype,
        c = b._mouseInit,
        d = b._mouseDestroy;
      (b._touchStart = function (a) {
        var b = this;
        !e &&
          b._mouseCapture(a.originalEvent.changedTouches[0]) &&
          ((e = !0),
          (b._touchMoved = !1),
          f(a, "mouseover"),
          f(a, "mousemove"),
          f(a, "mousedown"));
      }),
        (b._touchMove = function (a) {
          e && ((this._touchMoved = !0), f(a, "mousemove"));
        }),
        (b._touchEnd = function (a) {
          e &&
            (f(a, "mouseup"),
            f(a, "mouseout"),
            this._touchMoved || f(a, "click"),
            (e = !1));
        }),
        (b._mouseInit = function () {
          var b = this;
          b.element.bind({
            touchstart: a.proxy(b, "_touchStart"),
            touchmove: a.proxy(b, "_touchMove"),
            touchend: a.proxy(b, "_touchEnd"),
          }),
            c.call(b);
        }),
        (b._mouseDestroy = function () {
          var b = this;
          b.element.unbind({
            touchstart: a.proxy(b, "_touchStart"),
            touchmove: a.proxy(b, "_touchMove"),
            touchend: a.proxy(b, "_touchEnd"),
          }),
            d.call(b);
        });
    }
  })(jQuery);
} catch (e) {}
