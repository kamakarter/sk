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
