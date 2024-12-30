(() => {
  "use strict";
  var e = {
      262: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Random = void 0),
          (t.Random = class {
            static chooseOne(e) {
              return e[Math.floor(Math.random() * e.length)];
            }
          });
      },
      745: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UnicodeHasher = void 0);
        class n {
          static encode(e) {
            return e.replace(/[0-9]/g, (e) => n.map[e]);
          }
          static decode(e) {
            const t = Object.values(n.map).join(""),
              o = new RegExp(`[${t}]`, "g");
            return e.replace(
              o,
              (e) => Object.keys(n.map).find((t) => n.map[t] === e) || ""
            );
          }
          static encodeAndInsert(e, t, o = 1) {
            const r = n.encode(e);
            return `${t.slice(0, o)}${r}${t.slice(o)}`;
          }
          static decodeAndExtract(e) {
            const t = Object.values(n.map).join(""),
              o = new RegExp(`[${t}]`, "g");
            let r = "";
            return (
              e.replace(o, (e) => {
                const t = Object.keys(n.map).find((t) => n.map[t] === e);
                return t && (r += t), e;
              }),
              "" !== r ? r : null
            );
          }
          static removeAllEncodedChars(e) {
            const t = Object.values(n.map).join(""),
              o = new RegExp(`[${t}]`, "g");
            return e.replace(o, "");
          }
        }
        (t.UnicodeHasher = n),
          (n.map = {
            0: "​",
            1: "‌",
            2: "‍",
            3: "⁠",
            4: "⁡",
            5: "⁢",
            6: "⁣",
            7: "⁤",
            8: "‪",
            9: "‬",
          });
      },
      202: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UrlRebuilder = void 0);
        const o = n(262),
          r = n(745);
        class i {
          static randomizePhoneNumberIfNecessary(e) {
            var t;
            const n = null !== (t = window.phones) && void 0 !== t ? t : [];
            if (0 === n.length) return e;
            const r = o.Random.chooseOne(n);
            return e.includes("phone=")
              ? i.withReplaceQueryParam(e, "phone", r)
              : e.includes("wa.me")
              ? `https://wa.me/${r}?${e.split("?")[1]}`
              : e;
          }
          static insertAdIdInWppUrl(e, t) {
            var n;
            const o =
                null !== (n = i.getQueryParams(e).get("text")) && void 0 !== n
                  ? n
                  : "Olá",
              a = t.replace(/[^0-9]/g, ""),
              l = r.UnicodeHasher.removeAllEncodedChars(o),
              d = r.UnicodeHasher.encodeAndInsert(a, l);
            return i.withReplaceQueryParam(e, "text", d);
          }
          static getAdId(e) {
            var t;
            const n =
              null !== (t = e.get("utm_content")) && void 0 !== t ? t : "";
            return n.includes("|") ? n.split("|")[1] : null;
          }
          static getQueryParams(e) {
            const t = e.split("?")[1];
            return new URLSearchParams(t);
          }
          static withReplaceQueryParam(e, t, n) {
            const o = e.split("?")[0],
              r = e.split("?")[1],
              i = new URLSearchParams(r);
            return i.set(t, n), `${o}?${i.toString()}`;
          }
          static removeSpecialCharacteres(e) {
            return e
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^\w\s-|]/gi, "")
              .replace(/\s/g, "");
          }
        }
        t.UrlRebuilder = i;
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (() => {
    const e = n(202);
    console.log("utms script loaded! 2.3.11");
    const t = !!document.querySelector("[data-utmify-ignore-iframe]"),
      o = !!document.querySelector("[data-utmify-ignore-retry]"),
      r = !!document.querySelector("[data-utmify-fast-start]"),
      i = !!document.querySelector("[data-utmify-plus-signal]"),
      a = !!document.querySelector("[data-utmify-is-click-bank]"),
      l = !!document.querySelector("[data-utmify-prevent-subids]");
    var d, u;
    !(function (e) {
      e.Doppus = "doppus";
    })(d || (d = {})),
      (function (e) {
        (e.PandaVideo = "pandavideo.com"),
          (e.YouTube = "youtube.com"),
          (e.EplayVideo = "eplay.video"),
          (e.Vimeo = "vimeo.com");
      })(u || (u = {}));
    const s = [
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_content",
      "utm_term",
    ];
    class c {
      static addUtmParametersToUrl(e) {
        const t = c.urlWithoutParams(e),
          n = c.paramsFromUrl(e),
          o = c.getUtmParameters(),
          r = new URLSearchParams();
        n.forEach((e, t) => r.append(t, e)),
          o.forEach((e, t) => r.append(t, e));
        const a = c.urlParametersWithoutDuplicates(r),
          l = c.simplifyParametersIfNecessary(t, a),
          d = i ? l.toString().split("+").join("%20") : l.toString(),
          u = -1 === t.indexOf("?") ? "?" : "&";
        return `${t}${u}${d}`;
      }
      static urlWithoutParams(e) {
        return e.split("?")[0];
      }
      static paramsFromUrl(e) {
        if (!e) return new URLSearchParams();
        const t = e instanceof URL ? e.href : e;
        if (!t.includes("?")) return new URLSearchParams();
        const n = t.split("?");
        if (n.length <= 1) return new URLSearchParams();
        const o = n[1];
        return new URLSearchParams(o);
      }
      static urlParametersWithoutDuplicates(e) {
        const t = Array.from(e.keys()),
          n = new Map();
        t.forEach((t) => {
          const o = e.getAll(t);
          n.set(t, o[o.length - 1]);
        });
        const o = new URLSearchParams();
        return (
          n.forEach((e, t) => {
            o.append(t, e);
          }),
          o
        );
      }
      static getUtmParameters() {
        var t;
        const n = "hQwK21wXxR",
          o = "rKm-km-rKm",
          r = new URLSearchParams(window.location.search);
        function i(e) {
          const t = r.get(e);
          if (null != t && "null" !== t && "undefined" !== t && "" !== t)
            return t;
          const n = localStorage.getItem(e);
          if (!n) return "";
          const o = localStorage.getItem(v(e));
          return !o || new Date(o) < new Date()
            ? (localStorage.removeItem(e), localStorage.removeItem(v(e)), "")
            : n;
        }
        function d(e) {
          return e.join(n);
        }
        const u = i("utm_term"),
          s = i("utm_content"),
          c = i("utm_medium"),
          m = i("utm_campaign"),
          w = (function (e) {
            const t = (function () {
              var e;
              const t = localStorage.getItem("lead");
              if (!t) return null;
              const n = JSON.parse(t);
              return null !== (e = null == n ? void 0 : n._id) && void 0 !== e
                ? e
                : null;
            })();
            return t ? (e.includes("jLj") ? e : `${e}jLj${t}`) : e;
          })(i("utm_source")),
          p = new URLSearchParams();
        p.set("utm_source", w),
          p.set("utm_campaign", m.includes(o) ? m : `${m}${o}${c}`),
          p.set("utm_medium", c),
          p.set("utm_content", s),
          p.set("utm_term", u);
        const h = null !== (t = p.get("utm_campaign")) && void 0 !== t ? t : "",
          f = [w, h, c, s, u],
          g = d(f);
        a
          ? (p.set("aff_sub1", e.UrlRebuilder.removeSpecialCharacteres(w)),
            p.set("aff_sub2", e.UrlRebuilder.removeSpecialCharacteres(h)),
            p.set("aff_sub3", e.UrlRebuilder.removeSpecialCharacteres(c)),
            p.set("aff_sub4", e.UrlRebuilder.removeSpecialCharacteres(s)),
            p.set("aff_sub5", e.UrlRebuilder.removeSpecialCharacteres(u)))
          : l ||
            (p.set("subid", e.UrlRebuilder.removeSpecialCharacteres(w)),
            p.set("sid2", e.UrlRebuilder.removeSpecialCharacteres(h)),
            p.set("subid2", e.UrlRebuilder.removeSpecialCharacteres(h)),
            p.set("subid3", e.UrlRebuilder.removeSpecialCharacteres(c)),
            p.set("subid4", e.UrlRebuilder.removeSpecialCharacteres(s)),
            p.set("subid5", e.UrlRebuilder.removeSpecialCharacteres(h)));
        const b = i("xcod"),
          R = i("src"),
          U = "" !== b ? b : R,
          S = (function (e, t) {
            if (e.length <= 255) return e;
            const r = Math.floor(18.8);
            function i(e, t, n) {
              function i(e) {
                return e.substring(0, r) + "...";
              }
              if (!t) return i(e);
              const a = null != n ? n : "|",
                l = e.split(o)[0].split(a),
                d = l.length > 1 ? l[l.length - 1] : "";
              return `${i(
                1 === l.length ? l[0] : l.slice(0, -1).join(a)
              )}${a}${d}`;
            }
            const [a, l, u, s, c] = e.split(n);
            return d([i(a, !0, "jLj"), i(l, !0), i(u, !0), i(s, !0), i(c, !1)]);
          })(f.every((e) => "" === e) ? U : g);
        p.set("xcod", S),
          p.set("sck", S),
          null != R && "" !== R && p.set("src", R);
        const y = r.get("fbclid");
        return (
          null != y && "" !== y && p.set("fbclid", y),
          (() => {
            const e = (e) => null == e || "" === e,
              t = i("utm_source"),
              n = i("utm_medium"),
              o = i("utm_campaign"),
              r = i("utm_content"),
              a = i("utm_term"),
              l = i("xcod"),
              d = i("src"),
              u = p.get("fbclid");
            return e(t) && e(n) && e(o) && e(r) && e(a) && e(l) && e(d) && e(u);
          })() && p.set("utm_source", "organic"),
          (window.utmParams = p),
          p
        );
      }
      static simplifyParametersIfNecessary(e, t) {
        if (!Object.values(d).some((t) => e.includes(t))) return t;
        const n = new URLSearchParams();
        return (
          t.forEach((e, t) => {
            s.includes(t) && n.append(t, e);
          }),
          n
        );
      }
    }
    (window.paramsList = [
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_content",
      "utm_term",
      "xcod",
      "src",
    ]),
      (window.itemExpInDays = 7);
    const m = [
      "utm_source",
      "utm_campaign",
      "utm_medium",
      "utm_content",
      "xcod",
      "sck",
    ];
    function v(e) {
      return `${e}_exp`;
    }
    function w() {
      function n(t) {
        document.querySelectorAll("a").forEach((n) => {
          if (
            !n.href.startsWith("mailto:") &&
            !n.href.startsWith("tel:") &&
            !n.href.includes("#")
          ) {
            if (
              ((o = n.href),
              [
                "wa.me/",
                "api.whatsapp.com/send",
                "whatsapp:",
                "link.dispara.ai/",
                "random.lailla.io/",
              ].some((e) => o.includes(e)))
            ) {
              const t = c.getUtmParameters(),
                o = e.UrlRebuilder.getAdId(t);
              return (
                (n.href = e.UrlRebuilder.randomizePhoneNumberIfNecessary(
                  n.href
                )),
                void (n.href = e.UrlRebuilder.insertAdIdInWppUrl(
                  n.href,
                  null != o ? o : ""
                ))
              );
            }
            var o;
            if (t && m.every((e) => n.href.includes(e))) return;
            n.href = c.addUtmParametersToUrl(n.href);
          }
        });
      }
      function o(e) {
        document.querySelectorAll("form").forEach((t) => {
          (e && m.every((e) => t.action.includes(e))) ||
            ((t.action = c.addUtmParametersToUrl(t.action)),
            c.getUtmParameters().forEach((e, n) => {
              const o = ((r = n), t.querySelector(`input[name="${r}"]`));
              var r;
              if (o) return void o.setAttribute("value", e);
              const i = ((e, t) => {
                const n = document.createElement("input");
                return (n.type = "hidden"), (n.name = e), (n.value = t), n;
              })(n, e);
              t.appendChild(i);
            }));
        });
      }
      !(function () {
        const e = new URLSearchParams(window.location.search);
        window.paramsList.forEach((t) => {
          const n = e.get(t);
          n &&
            ((e, t) => {
              localStorage.setItem(e, t);
              const n = new Date(
                new Date().getTime() + 24 * window.itemExpInDays * 60 * 60 * 1e3
              );
              localStorage.setItem(v(e), n.toISOString());
            })(t, n);
        });
      })();
      const r = (function () {
        var e,
          t,
          n,
          o,
          r,
          i,
          a,
          l,
          d,
          u,
          s,
          c,
          m,
          v,
          w,
          p,
          h,
          f,
          g,
          b,
          R,
          U,
          S,
          y,
          _,
          O,
          P,
          E,
          N,
          I,
          M,
          $,
          j,
          L,
          x,
          A,
          C,
          T,
          B;
        const D =
            null !==
              (n =
                null ===
                  (t =
                    null ===
                      (e =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === e
                      ? void 0
                      : e.themeName) || void 0 === t
                  ? void 0
                  : t.includes("Dropmeta")) &&
            void 0 !== n &&
            n,
          W =
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (o =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === o
                      ? void 0
                      : o.themeName) || void 0 === r
                  ? void 0
                  : r.includes("Warehouse")) &&
            void 0 !== i &&
            i,
          q =
            null !==
              (d =
                null ===
                  (l =
                    null ===
                      (a =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === a
                      ? void 0
                      : a.themeName) || void 0 === l
                  ? void 0
                  : l.includes("Classic®")) &&
            void 0 !== d &&
            d,
          k =
            null !==
              (c =
                null ===
                  (s =
                    null ===
                      (u =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === u
                      ? void 0
                      : u.themeName) || void 0 === s
                  ? void 0
                  : s.includes("Tema Vision")) &&
            void 0 !== c &&
            c,
          Q =
            null !==
              (w =
                null ===
                  (v =
                    null ===
                      (m =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === m
                      ? void 0
                      : m.themeName) || void 0 === v
                  ? void 0
                  : v.includes("Waresabino")) &&
            void 0 !== w &&
            w,
          V =
            null !==
              (f =
                null ===
                  (h =
                    null ===
                      (p =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === p
                      ? void 0
                      : p.themeName) || void 0 === h
                  ? void 0
                  : h.includes("Dawn")) &&
            void 0 !== f &&
            f,
          H =
            null !==
              (R =
                null ===
                  (b =
                    null ===
                      (g =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === g
                      ? void 0
                      : g.themeName) || void 0 === b
                  ? void 0
                  : b.includes("Vortex")) &&
            void 0 !== R &&
            R,
          z =
            null !==
              (y =
                null ===
                  (S =
                    null ===
                      (U =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === U
                      ? void 0
                      : U.themeName) || void 0 === S
                  ? void 0
                  : S.includes("Warepro")) &&
            void 0 !== y &&
            y,
          F =
            null !==
              (P =
                null ===
                  (O =
                    null ===
                      (_ =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === _
                      ? void 0
                      : _.themeName) || void 0 === O
                  ? void 0
                  : O.includes("Wareimadigital")) &&
            void 0 !== P &&
            P,
          K =
            null !==
              (I =
                null ===
                  (N =
                    null ===
                      (E =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === E
                      ? void 0
                      : E.themeName) || void 0 === N
                  ? void 0
                  : N.includes("Mercado Livre")) &&
            void 0 !== I &&
            I,
          J =
            null !==
              (j =
                null ===
                  ($ =
                    null ===
                      (M =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === M
                      ? void 0
                      : M.themeName) || void 0 === $
                  ? void 0
                  : $.includes("Evolution Enterprise")) &&
            void 0 !== j &&
            j,
          X =
            null !==
              (A =
                null ===
                  (x =
                    null ===
                      (L =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === L
                      ? void 0
                      : L.themeName) || void 0 === x
                  ? void 0
                  : x.includes("Tema Sabino Vision")) &&
            void 0 !== A &&
            A,
          Y =
            null !==
              (B =
                null ===
                  (T =
                    null ===
                      (C =
                        null === window || void 0 === window
                          ? void 0
                          : window.BOOMR) || void 0 === C
                      ? void 0
                      : C.themeName) || void 0 === T
                  ? void 0
                  : T.includes("Split")) &&
            void 0 !== B &&
            B;
        return D || W || q || k || Q || V || H || z || F || K || J || X || Y;
      })();
      n(),
        (function () {
          const e = window.open;
          window.open = function (t, n, o) {
            var r;
            return (
              (t = c.addUtmParametersToUrl(
                null !== (r = null == t ? void 0 : t.toString()) && void 0 !== r
                  ? r
                  : ""
              )),
              e(t, n || "", o || "")
            );
          };
        })(),
        r ||
          (o(),
          (function () {
            const { body: e } = document;
            new MutationObserver((e, t) => {
              const r = (e) => {
                if (e.nodeType !== Node.ELEMENT_NODE) return !1;
                const t = e;
                return (
                  "INPUT" === t.tagName &&
                  "hidden" === (null == t ? void 0 : t.type)
                );
              };
              e.some((e) => Array.from(e.addedNodes).some(r)) || (n(!0), o(!0));
            }).observe(e, { subtree: !0, childList: !0 });
          })(),
          t ||
            document.querySelectorAll("iframe").forEach((e) => {
              Object.values(u).some((t) => e.src.includes(t)) ||
                (e.src = c.addUtmParametersToUrl(e.src));
            }));
    }
    const p = () => {
      w(),
        o ||
          (setTimeout(w, 2e3),
          setTimeout(w, 3e3),
          setTimeout(w, 5e3),
          setTimeout(w, 9e3));
    };
    r || "complete" === document.readyState
      ? p()
      : window.addEventListener("load", p);
  })();
})();
