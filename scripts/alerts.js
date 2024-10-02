/*!
 * docsify-plugin-flexible-alerts
 * v1.1.1
 * https://github.com/fzankl/docsify-plugin-flexible-alerts#readme
 * (c) 2022 Fabian Zankl
 * MIT license
 */
!(function () {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  !(function (t, e) {
    void 0 === e && (e = {});
    var a = e.insertAt;
    if (t && "undefined" != typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        l = document.createElement("style");
      (l.type = "text/css"),
        "top" === a && o.firstChild
          ? o.insertBefore(l, o.firstChild)
          : o.appendChild(l),
        l.styleSheet
          ? (l.styleSheet.cssText = t)
          : l.appendChild(document.createTextNode(t));
    }
  })(),
    (function () {
      var e = {
        style: "callout",
        note: { label: "Note", icon: "icon-note", className: "note" },
        tip: { label: "Tip", icon: "icon-tip", className: "tip" },
        warning: {
          label: "Warning",
          icon: "icon-warning",
          className: "warning",
        },
        attention: {
          label: "Attention",
          icon: "icon-attention",
          className: "attention",
        },
        typeMappings: { info: "note", danger: "attention" },
      };
      function a(t, e) {
        var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        for (var l in e)
          try {
            e[l].constructor === Object && o < 1
              ? (t[l] = a(t[l], e[l], o + 1))
              : (t[l] = e[l]);
          } catch (a) {
            t[l] = e[l];
          }
        return t;
      }
      (window.$docsify = window.$docsify || {}),
        (window.$docsify.plugins = [].concat(function (o, l) {
          var r = a(e, l.config["flexible-alerts"] || l.config.flexibleAlerts),
            i = function (t, e, a, o) {
              var l = (t || "").match(
                new RegExp(
                  "".concat(
                    e,
                    ":(([\\s\\w\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF-]*))"
                  )
                )
              );
              return l ? (o ? o(l[1]) : l[1]) : o ? o(a) : a;
            };
          o.afterEach(function (e, a) {
            a(
              e.replace(
                /<\s*blockquote[^>]*>[\s]+?(?:<p>)?\[!(\w*)((?:\|[\w*:[\s\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]*)*?)\]([\s\S]*?)(?:<\/p>)?<\s*\/\s*blockquote>/g,
                function (e, a, o, n) {
                  !r[a.toLowerCase()] &&
                    r.typeMappings[a.toLowerCase()] &&
                    (a = r.typeMappings[a.toLowerCase()]);
                  var c = r[a.toLowerCase()];
                  if (!c) return e;
                  var d = i(o, "style", r.style),
                    s = i(o, "iconVisibility", "visible", function (t) {
                      return "hidden" !== t;
                    }),
                    g = i(o, "labelVisibility", "visible", function (t) {
                      return "hidden" !== t;
                    }),
                    m = i(o, "label", c.label),
                    u = i(o, "icon", c.icon),
                    f = i(o, "className", c.className);
                  if ("object" === t(m)) {
                    var p = Object.keys(m).filter(function (t) {
                      return l.route.path.indexOf(t) > -1;
                    });
                    p && p.length > 0 ? (m = m[p[0]]) : ((g = !1), (s = !1));
                  }
                  var w = '<span class="icon '.concat(u, '"></span>'),
                    h = '<p class="title">'
                      .concat(s ? w : "")
                      .concat(g ? m : "", "</p>");
                  return '<div class="alert '
                    .concat(d, " ")
                    .concat(f, '">\n            ')
                    .concat(s || g ? h : "", "\n            <p>")
                    .concat(n, "</p>\n          </div>");
                }
              )
            );
          });
        }, window.$docsify.plugins));
    })();
})();
//# sourceMappingURL=docsify-plugin-flexible-alerts.min.js.map
