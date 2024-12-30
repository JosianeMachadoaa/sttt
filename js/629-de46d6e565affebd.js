"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [629],
  {
    25629: function (l, t, o) {
      o.r(t),
        o.d(t, {
          ResetScreen: function () {
            return ResetScreen;
          },
          __N_SSG: function () {
            return O;
          },
          default: function () {
            return Funnel;
          },
          handleScripts: function () {
            return handleScripts;
          },
        });
      var a = o(85893),
        f = o(67294),
        d = o(49252),
        s = o(65257),
        c = o(99357),
        u = o(11163),
        m = o(41901),
        v = o(23907),
        p = o(41798),
        h = o(4011),
        x = o(4902),
        w = o(31955),
        y = o(4298),
        k = o.n(y),
        j = o(27830),
        C = o(93115),
        N = o(12550),
        S = o(52124),
        F = o(78544),
        q = o(37196),
        T = o(58587),
        I = o(57843),
        L = o(80307),
        z = o(40341),
        M = o(90219),
        Z = o(50081),
        E = o(71332),
        U = o(49306),
        P = o(60981),
        D = o(1221),
        R = o(94273),
        B = o(9490),
        A = o(37493),
        H = o(75866),
        X = o(98385);
      function HandleUI(l) {
        let { layer: t } = l,
          [o, d] = (0, f.useState)(!1);
        return (
          (0, f.useEffect)(() => {
            var l, o, a;
            let f;
            return (
              (
                null == t
                  ? void 0
                  : null === (l = t.effects) || void 0 === l
                  ? void 0
                  : l.starts
              )
                ? (f = setTimeout(() => {
                    d(!0);
                  }, (null !== (a = null == t ? void 0 : null === (o = t.effects) || void 0 === o ? void 0 : o.starts) && void 0 !== a ? a : 0) * 1e3))
                : d(!0),
              () => {
                f && clearTimeout(f);
              }
            );
          }, [t]),
          (0, a.jsx)("div", {
            className: "".concat(o ? "" : "hidden"),
            children:
              "options" == t.type
                ? (0, a.jsx)(M.Z, { ...t }, t.id)
                : "text" == t.type
                ? (0, a.jsx)(L.Z, { ...t }, t.id)
                : "plans" == t.type
                ? (0, a.jsx)(T.Z, { ...t }, t.id)
                : "image" == t.type
                ? (0, a.jsx)(H.Z, { ...t }, t.id)
                : "video" == t.type
                ? (0, a.jsx)(A.Z, { ...t }, t.id)
                : "audio" == t.type
                ? (0, a.jsx)(X.Z, { ...t }, t.id)
                : "script" == t.type
                ? (0, a.jsx)(F.Z, { ...t }, t.id)
                : "alert" == t.type
                ? (0, a.jsx)(B.Z, { ...t }, t.id)
                : "graphics" == t.type
                ? (0, a.jsx)(R.Z, { ...t }, t.id)
                : "chart" == t.type
                ? (0, a.jsx)(S.Z, { ...t }, t.id)
                : "timer" == t.type
                ? (0, a.jsx)(D.Z, { ...t }, t.id)
                : "clear" == t.type
                ? (0, a.jsx)(z.Z, { ...t }, t.id)
                : "field" == t.type
                ? (0, a.jsx)(I.Z, { ...t }, t.id)
                : "price" == t.type
                ? (0, a.jsx)(U.Z, { ...t }, t.id)
                : "button" == t.type
                ? (0, a.jsx)(P.Z, { ...t }, t.id)
                : "loading" == t.type
                ? (0, a.jsx)(E.Z, { ...t }, t.id)
                : "arguments" == t.type
                ? (0, a.jsx)(Z.Z, { ...t }, t.id)
                : "carousel" == t.type
                ? (0, a.jsx)(q.Z, { ...t }, t.id)
                : "metric" == t.type
                ? (0, a.jsx)(C.Z, { ...t }, t.id)
                : "divider" == t.type
                ? (0, a.jsx)(N.Z, { ...t }, t.id)
                : "quotes" == t.type
                ? (0, a.jsx)(j.Z, { ...t }, t.id)
                : (0, a.jsx)(a.Fragment, {}),
          })
        );
      }
      var O = !0;
      let handleScripts = (l, t) => {
        if (
          window &&
          ((!window.location.href.includes("localhost") &&
            !window.location.href.includes("preview")) ||
            t)
        ) {
          let t, o, a;
          return (
            (null == l ? void 0 : l.header) &&
              ((t = document
                .createRange()
                .createContextualFragment(null == l ? void 0 : l.header)),
              document.head.appendChild(t)),
            (null == l ? void 0 : l.body) &&
              ((o = document
                .createRange()
                .createContextualFragment(null == l ? void 0 : l.body)),
              document.body.insertBefore(o, document.body.firstChild)),
            (null == l ? void 0 : l.footer) &&
              ((a = document
                .createRange()
                .createContextualFragment(null == l ? void 0 : l.footer)),
              document.body.appendChild(a)),
            () => {
              document.body.removeChild(t),
                document.head.removeChild(o),
                document.head.removeChild(a);
            }
          );
        }
      };
      function ResetScreen() {
        if (document && document.activeElement) {
          let l = document.activeElement;
          "function" == typeof l.blur && (l.blur(), window.scrollTo(0, 0));
        }
      }
      function Funnel(l) {
        var t, o, y, j, C, N, S, F, q;
        let { funnel: T } = l,
          I = new c.Z(),
          L = (0, f.useRef)(!1),
          { isFallback: z } = (0, u.useRouter)(),
          { globalContext: M, handleGlobalContext: Z } = (0, f.useContext)(
            v.kn
          ),
          E = (0, u.useRouter)(),
          U = E.query,
          [P, D] = (0, f.useState)(!1),
          [R, B] = (0, f.useState)(!1),
          [A, H] = (0, f.useState)(!1),
          [X, O] = (0, f.useState)(!1),
          [V, G] = (0, f.useState)([]),
          backHistory = () => {
            var l;
            let t = V,
              o = t.pop(),
              a = o;
            !V.length &&
              (null == T
                ? void 0
                : null === (l = T.steps) || void 0 === l
                ? void 0
                : l.length) &&
              (a = null == T ? void 0 : T.steps[0].id);
            let f = M.validate;
            Object.keys(M.validate).map((l) => {
              a != l && delete f[l];
            }),
              ResetScreen(),
              O(!1),
              setTimeout(() => {
                Q(a), O(!0), B(!1);
              }, 100),
              Z({ goTo: "", activeStep: a, validate: f }, "backHistory"),
              G(t);
          },
          [$, W] = (0, f.useState)({}),
          [J, Q] = (0, f.useState)(""),
          normalizeStepData = () => {
            var l, t;
            let o = {};
            return (
              (null !==
                (t =
                  null == M
                    ? void 0
                    : null === (l = M.funnel) || void 0 === l
                    ? void 0
                    : l.steps) && void 0 !== t
                ? t
                : []
              )
                .filter((l) => l.id == J)
                .map((l) => {
                  let t = l.layers.map((l) => l.content.id);
                  (null == M ? void 0 : M.dataForm) &&
                    Object.keys(null == M ? void 0 : M.dataForm)
                      .filter((l) => t.includes(l))
                      .map((l) => {
                        o[l] = null == M ? void 0 : M.dataForm[l];
                      });
                }),
              o
            );
          },
          [Y, K] = (0, f.useState)(0),
          [ee, ei] = (0, f.useState)(""),
          getNext = () => {
            var l;
            let t = !1,
              o = "";
            return (
              null === (l = T.steps) ||
                void 0 === l ||
                l.map((l) => {
                  t && ((o = l.id), (t = !1)), l.id === J && (t = !0);
                }),
              o
            );
          },
          ApplyNavigate = () => {
            var l, t;
            let o = (0, p.dD)(window.location.href);
            if (
              (null !== (l = null == M ? void 0 : M.goTo) && void 0 !== l
                ? l
                : ""
              ).includes(".")
            ) {
              let l = (null !== (t = null == M ? void 0 : M.goTo) &&
                void 0 !== t
                  ? t
                  : ""
                ).includes("http")
                  ? ""
                  : "https://",
                a = (0, p.dD)(null == M ? void 0 : M.goTo),
                f = null == M ? void 0 : M.goTo.split("?")[0],
                d = ""
                  .concat(l)
                  .concat(f, "?")
                  .concat((0, p.nZ)({ ...o, ...a }));
              return M.newTab
                ? (window.open(d, "_blank"), !0)
                : ((window.location.href = d), !1);
            }
            let a = "";
            return (
              (a =
                (null == M ? void 0 : M.goTo) &&
                (null == M ? void 0 : M.goTo) != "next"
                  ? null == M
                    ? void 0
                    : M.goTo
                  : getNext()),
              G([...V, M.activeStep]),
              Z({ goTo: "", activeStep: a }, "ApplyNavigate"),
              Q(a),
              !0
            );
          },
          validateDataForm = () => {
            let l = !0;
            return (
              Object.values(M.validate).map((t) => {
                "object" == typeof t
                  ? Object.values(t).map((t) => {
                      l = l ? !!t : l;
                    })
                  : (l = l ? !!t : l),
                  (l = l ? !!t : l);
              }),
              l
            );
          },
          triggerWebhooks = async () => {
            var l, t, o;
            let a;
            if (
              (null === (l = T.webhook) || void 0 === l ? void 0 : l.trigger) ==
                "onClick" &&
              !(null === (t = T.webhook) || void 0 === t
                ? void 0
                : t.component
                    .split(",")
                    .map((l) => l.trim())
                    .includes(M.lastInteract))
            )
              return;
            let f = new URL(T.webhook.api),
              d = M.variables;
            "GET" === T.webhook.method &&
              (Object.keys(d).forEach((l) => {
                f.searchParams.append(l, d[l]);
              }),
              f.searchParams.append("code", ee));
            let s = { "Content-Type": "application/x-www-form-urlencoded" };
            (null == T
              ? void 0
              : null === (o = T.webhook) || void 0 === o
              ? void 0
              : o.token) &&
              ((s["Api-Token"] = T.webhook.token),
              (s.Authorization = "Bearer ".concat(T.webhook.token))),
              "GET" !== T.webhook.method &&
                (a = (d = new URLSearchParams({
                  ...M.variables,
                  code: ee,
                })).toString());
            let c = {
              method: "GET" === T.webhook.method ? "GET" : "POST",
              headers: s,
              mode: "no-cors",
              body: "GET" === T.webhook.method ? null : a,
            };
            try {
              let l = await fetch(f.toString(), c);
              console.log(l);
            } catch (l) {
              console.log("Error:", l);
            }
          },
          submitDataForm = async () => {
            var l, t, o, a, f, d, s, c, u, m;
            if (
              (null !== (d = null == M ? void 0 : M.goTo) && void 0 !== d
                ? d
                : ""
              ).includes("#") ||
              R ||
              !validateDataForm()
            )
              return !1;
            B(!0);
            let v = (0, p.dD)(window.location.href),
              h = {
                code: ee,
                funnel: T.hash,
                step: J,
                metadata: normalizeStepData(),
                tracking: v,
              },
              x = "inlead".concat((0, p.oF)(null == T ? void 0 : T.id));
            ("tosend" == w.Z.get("".concat(x, "-qualified")) ||
              ("sended" != w.Z.get("".concat(x, "-qualified")) &&
                ((null ===
                  (l = Object.keys(
                    null !== (s = null == M ? void 0 : M.dataForm) &&
                      void 0 !== s
                      ? s
                      : {}
                  )) || void 0 === l
                  ? void 0
                  : l.length) || 0) >
                  0.7 *
                    ((null === (t = M.funnel.steps) || void 0 === t
                      ? void 0
                      : t.length) || 0))) &&
              ((h.qualified = !0),
              w.Z.set("".concat(x, "-qualified"), "sended", { expires: 14 })),
              (null !== (c = null == M ? void 0 : M.goTo) && void 0 !== c
                ? c
                : ""
              ).includes(".") ||
              ((null ===
                (o = Object.keys(
                  null !== (u = null == M ? void 0 : M.dataForm) && void 0 !== u
                    ? u
                    : {}
                )) || void 0 === o
                ? void 0
                : o.length) || 0) >=
                ((null === (a = M.funnel.steps) || void 0 === a
                  ? void 0
                  : a.length) || 0)
                ? (w.Z.get("".concat(x, "-complete")) ||
                    ((h.complete = !0),
                    w.Z.set("".concat(x, "-complete"), "true", { expires: 14 }),
                    "sended" != w.Z.get("".concat(x, "-qualified")) &&
                      ((h.qualified = !0),
                      w.Z.set("".concat(x, "-qualified"), "sended", {
                        expires: 14,
                      }))),
                  await I.internal({ url: "/analysis", data: h }))
                : I.internal({ url: "/analysis", data: h }),
              (null == T
                ? void 0
                : null === (f = T.webhook) || void 0 === f
                ? void 0
                : f.api) && (await triggerWebhooks()),
              O(
                (null !== (m = null == M ? void 0 : M.goTo) && void 0 !== m
                  ? m
                  : ""
                ).includes(".")
              ),
              localStorage.setItem(
                "".concat(x, "_dataForm"),
                JSON.stringify(null == M ? void 0 : M.dataForm)
              ),
              setTimeout(() => {
                ResetScreen();
                let l = ApplyNavigate();
                O(l), B(!1);
              }, 100);
          };
        return ((0, f.useEffect)(() => {
          A && submitDataForm();
        }, [null == M ? void 0 : M.onSubmit]),
        (0, f.useEffect)(() => {
          if (!L.current && window) {
            let l = window.location.href;
            l.includes("/preview") &&
              (D(!0),
              setTimeout(() => {
                D(!1);
              }, 1e4));
            let t = "",
              o = "inlead".concat((0, p.oF)(null == T ? void 0 : T.id));
            w.Z.get(o)
              ? (t = w.Z.get(o))
              : ((t = (0, p.Ti)()), w.Z.set(o, t, { expires: 14 })),
              ei(t),
              H(!0),
              setTimeout(() => {
                O(!0);
              }, 50),
              (L.current = !0);
          }
        }, []),
        (0, f.useEffect)(() => {
          setTimeout(() => {
            handleScripts(
              (null == T ? void 0 : T.scripts) ? T.scripts : {},
              !0
            );
          }, 100);
        }, [null == T ? void 0 : T.scripts]),
        (0, f.useEffect)(() => {
          var l;
          W(null == T ? void 0 : T.design);
          let t = "",
            o = { funnel: T, validate: {} };
          !M.activeStep &&
            !(null == U ? void 0 : U.step) &&
            (null == T
              ? void 0
              : null === (l = T.steps) || void 0 === l
              ? void 0
              : l.length) &&
            (t = null == T ? void 0 : T.steps[0].id),
            (null == U ? void 0 : U.step) && (t = U.step),
            (o.activeStep = t);
          let a = "inlead".concat((0, p.oF)(null == T ? void 0 : T.id));
          (null == T ? void 0 : T.hash) &&
            !w.Z.get("".concat(a, "-pageview")) &&
            (I.bridge({
              url: "/leads/page-view",
              data: { funnel: null == T ? void 0 : T.hash },
            }),
            w.Z.set("".concat(a, "-pageview"), "true", { expires: 14 })),
            localStorage.getItem("".concat(a, "_dataForm")),
            Q(t),
            Z(o, "query.step");
        }, [T, null == U ? void 0 : U.step]),
        (0, f.useEffect)(() => {
          var l, t, o;
          let a = 0;
          (null !== (t = null == T ? void 0 : T.steps) && void 0 !== t
            ? t
            : []
          ).map((l, t) => {
            l.id == M.activeStep && (a = t);
          });
          let f =
              null !==
                (o =
                  null == T
                    ? void 0
                    : null === (l = T.steps) || void 0 === l
                    ? void 0
                    : l.length) && void 0 !== o
                ? o
                : 0,
            d = a ? (a / f) * 100 : 0;
          setTimeout(() => {
            K((d = ((a + 1) / f) * 100));
          }, 200);
        }, [M.activeStep]),
        z)
          ? (0, a.jsx)(a.Fragment, {})
          : (0, a.jsxs)(s.Z, {
              origin: "funnel",
              metadata: {
                title: (
                  null == T
                    ? void 0
                    : null === (t = T.seo) || void 0 === t
                    ? void 0
                    : t.title
                )
                  ? null == T
                    ? void 0
                    : null === (o = T.seo) || void 0 === o
                    ? void 0
                    : o.title
                  : T.title,
                description: (
                  null == T
                    ? void 0
                    : null === (y = T.seo) || void 0 === y
                    ? void 0
                    : y.description
                )
                  ? null == T
                    ? void 0
                    : null === (j = T.seo) || void 0 === j
                    ? void 0
                    : j.description
                  : "",
                favicon: (
                  null == T
                    ? void 0
                    : null === (N = T.seo) || void 0 === N
                    ? void 0
                    : null === (C = N.favicon) || void 0 === C
                    ? void 0
                    : C.src
                )
                  ? null == T
                    ? void 0
                    : null === (F = T.seo) || void 0 === F
                    ? void 0
                    : null === (S = F.favicon) || void 0 === S
                    ? void 0
                    : S.src
                  : "",
              },
              children: [
                P &&
                  (0, a.jsx)("div", {
                    className:
                      "fixed w-full md:max-w-[32rem] z-[100] left-0 md:left-1/2 md:-translate-x-1/2 bottom-0 p-4",
                    children: (0, a.jsxs)("div", {
                      className:
                        "bg-gray-100 flex justify-between text-gray-950 rounded shadow-2xl",
                      children: [
                        (0, a.jsx)("div", {
                          className: "grid gap-2 px-5 py-4",
                          children: (0, a.jsxs)("div", {
                            className: "w-full text-sm",
                            children: [
                              (0, a.jsx)("b", { children: "Aten\xe7\xe3o: " }),
                              "Esta \xe9 uma vers\xe3o de pr\xe9-visualiza\xe7\xe3o. N\xe3o utilize a URL desta p\xe1gina para divulga\xe7\xe3o. Para obter os links corretos, clique no bot\xe3o de compartilhamento no painel.",
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          onClick: () => D(!1),
                          className:
                            "p-3 flex cursor-pointer items-center bg-gray-950 bg-opacity-0 hover:bg-opacity-10",
                          children: (0, a.jsx)(d.Z, { icon: "fa-times" }),
                        }),
                      ],
                    }),
                  }),
                A &&
                  (0, a.jsx)("div", {
                    className: "ease ".concat(X ? "opacity-100" : "opacity-0"),
                    children: (0, a.jsx)("div", {
                      className: "ease ".concat(
                        X ? "opacity-100" : "opacity-0"
                      ),
                      children:
                        !!(null == T
                          ? void 0
                          : null === (q = T.steps) || void 0 === q
                          ? void 0
                          : q.length) &&
                        T.steps
                          .filter((l) => l.id == J)
                          .map((l) => {
                            var t, o, f, d, s, c, u, v;
                            return (0, a.jsxs)(
                              "div",
                              {
                                className:
                                  "main-content flex flex-col gap-4 md:gap-6 ".concat(
                                    null !==
                                      (d =
                                        null === (t = M.funnel.design) ||
                                        void 0 === t
                                          ? void 0
                                          : t.verticalAlign) && void 0 !== d
                                      ? d
                                      : "justify-between",
                                    " p-3 md:p-5 pb-10 min-h-[95svh]"
                                  ),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "hidden",
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        null !== (s = l.script) && void 0 !== s
                                          ? s
                                          : "",
                                    },
                                  }),
                                  (0, a.jsx)(x.Z, {
                                    showBack:
                                      (null == l
                                        ? void 0
                                        : null === (o = l.options) ||
                                          void 0 === o
                                        ? void 0
                                        : o.show_back) !== !1 && !!V.length,
                                    onBack: () => backHistory(),
                                    progress: Y,
                                    step: l,
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-full relative mx-auto ".concat(
                                        null !== (c = $.container) &&
                                          void 0 !== c
                                          ? c
                                          : "max-w-[28rem]"
                                      ),
                                    children: (0, a.jsx)("div", {
                                      style: {
                                        marginLeft: "-".concat(
                                          parseFloat(
                                            null !==
                                              (u =
                                                null == $ ? void 0 : $.gap) &&
                                              void 0 !== u
                                              ? u
                                              : ""
                                          )
                                            ? null == $
                                              ? void 0
                                              : $.gap
                                            : ".2",
                                          "rem"
                                        ),
                                        marginRight: "-".concat(
                                          parseFloat(
                                            null !==
                                              (v =
                                                null == $ ? void 0 : $.gap) &&
                                              void 0 !== v
                                              ? v
                                              : ""
                                          )
                                            ? null == $
                                              ? void 0
                                              : $.gap
                                            : ".2",
                                          "rem"
                                        ),
                                      },
                                      className: "flex flex-row flex-wrap",
                                      children:
                                        !!(null === (f = l.layers) ||
                                        void 0 === f
                                          ? void 0
                                          : f.length) &&
                                        l.layers
                                          .filter((l) => {
                                            var t;
                                            return (0, m.C_)(
                                              null !==
                                                (t =
                                                  null == l
                                                    ? void 0
                                                    : l.roles) && void 0 !== t
                                                ? t
                                                : [],
                                              M.variables
                                            );
                                          })
                                          .map((t, o) => {
                                            var f, d, s, c, u, m, v;
                                            return (0, a.jsx)(
                                              "div",
                                              {
                                                id: "layer_".concat(
                                                  t.content.name
                                                ),
                                                style: {
                                                  padding: "".concat(
                                                    parseFloat(
                                                      null !==
                                                        (c =
                                                          null == $
                                                            ? void 0
                                                            : $.gap) &&
                                                        void 0 !== c
                                                        ? c
                                                        : ""
                                                    )
                                                      ? null == $
                                                        ? void 0
                                                        : $.gap
                                                      : ".2",
                                                    "rem"
                                                  ),
                                                  flexBasis: "".concat(
                                                    ((null !==
                                                      (u =
                                                        null ===
                                                          (f = t.design) ||
                                                        void 0 === f
                                                          ? void 0
                                                          : f.cols) &&
                                                    void 0 !== u
                                                      ? u
                                                      : 12) /
                                                      12) *
                                                      100,
                                                    "%"
                                                  ),
                                                },
                                                className: "relative min-w-0 "
                                                  .concat(
                                                    "quotes" == t.type
                                                      ? "overflow-hidden"
                                                      : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    null !==
                                                      (m =
                                                        null ===
                                                          (d = t.design) ||
                                                        void 0 === d
                                                          ? void 0
                                                          : d.horizontalAlign) &&
                                                      void 0 !== m
                                                      ? m
                                                      : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    null !==
                                                      (v =
                                                        null ===
                                                          (s = t.design) ||
                                                        void 0 === s
                                                          ? void 0
                                                          : s.verticalAlign) &&
                                                      void 0 !== v
                                                      ? v
                                                      : "self-auto"
                                                  ),
                                                children: (0, a.jsx)(
                                                  HandleUI,
                                                  {
                                                    layer: {
                                                      ...(0, p.MN)(t),
                                                      step: l.id,
                                                    },
                                                  },
                                                  t.id
                                                ),
                                              },
                                              o
                                            );
                                          }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", { className: "py-10" }),
                                  (0, a.jsx)(k(), {
                                    src: "/js/script.js",
                                    strategy: "afterInteractive",
                                  }),
                                ],
                              },
                              l.id
                            );
                          }),
                    }),
                  }),
                R &&
                  (0, a.jsx)("div", {
                    className: "fixed z-[100000] w-full h-full top-0 left-0",
                  }),
                (0, a.jsx)(h.Z, {}),
              ],
            });
      }
    },
    4011: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return GlobalStyle;
        },
      });
      var a = o(85893),
        f = o(5379),
        d = o.n(f),
        s = o(23907),
        c = o(12936),
        u = o(51671),
        m = o(67294);
      function GlobalStyle() {
        var l,
          t,
          o,
          f,
          v,
          p,
          h,
          x,
          w,
          y,
          k,
          j,
          C,
          N,
          S,
          F,
          q,
          T,
          I,
          L,
          z,
          M,
          Z,
          E,
          U,
          P,
          D,
          R;
        let { globalContext: B, handleGlobalContext: A } = (0, m.useContext)(
            s.kn
          ),
          [H, X] = (0, m.useState)({}),
          [O, V] = (0, m.useState)({}),
          [G, $] = (0, m.useState)({});
        (0, m.useEffect)(() => {
          var l;
          if (
            null == B
              ? void 0
              : null === (l = B.funnel) || void 0 === l
              ? void 0
              : l.design
          ) {
            let l = B.funnel.design;
            X(l),
              l.featuredFont && V((0, u.q)(l.featuredFont)),
              l.contentFont && $((0, u.q)(l.contentFont));
          }
        }, [B]);
        let W =
          'system-ui, -apple-system,\n  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",\n  "Liberation Sans", sans-serif, "Noto Color Emoji",\n  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n  "Noto Color Emoji"';
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d(), {
              id: "81481c964a8f026e",
              dynamic: [
                G.src ? '@import url("' + G.src + '");' : "",
                O.src ? '@import url("' + O.src + '");' : "",
                null !== (l = null == H ? void 0 : H.elementSize) &&
                void 0 !== l
                  ? l
                  : "60px",
                H.rounded,
                null !== (t = null == H ? void 0 : H.themeColor) && void 0 !== t
                  ? t
                  : "#000",
                null !== (o = null == H ? void 0 : H.themeColor) && void 0 !== o
                  ? o
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.rX)(H.themeColor)
                  : "#ffffff",
                null !==
                  (v =
                    null !== (f = null == H ? void 0 : H.contentColor) &&
                    void 0 !== f
                      ? f
                      : null == H
                      ? void 0
                      : H.titleColor) && void 0 !== v
                  ? v
                  : "#000",
                null !==
                  (h =
                    null !== (p = null == H ? void 0 : H.titleColor) &&
                    void 0 !== p
                      ? p
                      : null == H
                      ? void 0
                      : H.contentColor) && void 0 !== h
                  ? h
                  : "#000",
                null !== (x = null == H ? void 0 : H.backgroundColor) &&
                void 0 !== x
                  ? x
                  : "inherit",
                (null == H ? void 0 : H.backgroundColor)
                  ? (0, c.Ld)(
                      (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                      0.25
                    )
                  : "inherit",
                H.featuredFont,
                null !== (w = null == G ? void 0 : G.title) && void 0 !== w
                  ? w
                  : "Inter",
                null !== (y = null == G ? void 0 : G.type) && void 0 !== y
                  ? y
                  : "sans serif",
                W,
                H.titleSize,
                (null == H ? void 0 : H.contentSize)
                  ? null == H
                    ? void 0
                    : H.contentSize
                  : 16,
                G.src ? '@import url("' + G.src + '");' : "",
                O.src ? '@import url("' + O.src + '");' : "",
                B.devMode ? "" : "body,html,document,",
                B.devMode ? "" : "body,html,document,",
                (null == H ? void 0 : H.backgroundColor)
                  ? (0, c.Ld)(null == H ? void 0 : H.backgroundColor, 0.5)
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.Ld)(null == H ? void 0 : H.themeColor, 0.2)
                  : "inherit",
                (null == H ? void 0 : H.backgroundColor)
                  ? (0, c.Ld)(
                      (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                      0.25
                    )
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.rX)(H.themeColor)
                  : "#ffffff",
                null !== (k = null == O ? void 0 : O.title) && void 0 !== k
                  ? k
                  : "Inter",
                null !== (j = null == O ? void 0 : O.type) && void 0 !== j
                  ? j
                  : "sans serif",
                W,
                (null == H ? void 0 : H.backgroundColor)
                  ? (0, c.Ld)(
                      (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                      0.25
                    )
                  : "inherit",
                (null == H ? void 0 : H.backgroundColor)
                  ? (0, c.Ld)(
                      (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                      0.5
                    )
                  : "inherit",
                null !== (C = null == O ? void 0 : O.title) && void 0 !== C
                  ? C
                  : "Inter",
                null !== (N = null == O ? void 0 : O.type) && void 0 !== N
                  ? N
                  : "sans serif",
                W,
                H.backgroundColor
                  ? (0, c.Ld)((0, c.nF)(H.backgroundColor), 0.9)
                  : "inherit",
                H.backgroundColor
                  ? (0, c.Ld)((0, c.nF)(H.backgroundColor), 0.9)
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.rX)(H.themeColor)
                  : "#ffffff",
                !!(null == H ? void 0 : H.themeColor) &&
                  (0, c.lT)(H.themeColor),
              ],
              children: ""
                .concat(G.src ? '@import url("' + G.src + '");' : "", " ")
                .concat(
                  O.src ? '@import url("' + O.src + '");' : "",
                  " :root{--theme-element-size:"
                )
                .concat(
                  null !== (S = null == H ? void 0 : H.elementSize) &&
                    void 0 !== S
                    ? S
                    : "60px",
                  ";--theme-rounded:"
                )
                .concat(H.rounded, ";--theme-color:")
                .concat(
                  null !== (F = null == H ? void 0 : H.themeColor) &&
                    void 0 !== F
                    ? F
                    : "#000",
                  ";--theme-featured-color:"
                )
                .concat(
                  null !== (q = null == H ? void 0 : H.themeColor) &&
                    void 0 !== q
                    ? q
                    : "inherit",
                  ";--theme-featured-text-color:"
                )
                .concat(
                  (null == H ? void 0 : H.themeColor)
                    ? (0, c.rX)(H.themeColor)
                    : "#ffffff",
                  ";--theme-content-color:"
                )
                .concat(
                  null !==
                    (I =
                      null !== (T = null == H ? void 0 : H.contentColor) &&
                      void 0 !== T
                        ? T
                        : null == H
                        ? void 0
                        : H.titleColor) && void 0 !== I
                    ? I
                    : "#000",
                  ";--theme-title-color:"
                )
                .concat(
                  null !==
                    (z =
                      null !== (L = null == H ? void 0 : H.titleColor) &&
                      void 0 !== L
                        ? L
                        : null == H
                        ? void 0
                        : H.contentColor) && void 0 !== z
                    ? z
                    : "#000",
                  ";--theme-background-color:"
                )
                .concat(
                  null !== (M = null == H ? void 0 : H.backgroundColor) &&
                    void 0 !== M
                    ? M
                    : "inherit",
                  ";--theme-border-color:"
                )
                .concat(
                  (null == H ? void 0 : H.backgroundColor)
                    ? (0, c.Ld)(
                        (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                        0.25
                      )
                    : "inherit",
                  ";--theme-featured-font:"
                )
                .concat(H.featuredFont, ';--theme-content-font:"')
                .concat(
                  null !== (Z = null == G ? void 0 : G.title) && void 0 !== Z
                    ? Z
                    : "Inter",
                  '",\n              '
                )
                .concat(
                  null !== (E = null == G ? void 0 : G.type) && void 0 !== E
                    ? E
                    : "sans serif",
                  ", "
                )
                .concat(W, ";--theme-title-size:")
                .concat(H.titleSize, ";--theme-content-size:")
                .concat(
                  (null == H ? void 0 : H.contentSize)
                    ? null == H
                      ? void 0
                      : H.contentSize
                    : 16,
                  "px}"
                )
                .concat(G.src ? '@import url("' + G.src + '");' : "", " ")
                .concat(O.src ? '@import url("' + O.src + '");' : "", " ")
                .concat(
                  B.devMode ? "" : "body,html,document,",
                  " .main-content{color:var(--theme-content-color);font-size:var(--theme-content-size);font-family:var(--theme-content-font);background-color:var(--theme-background-color)}.main-content .btn,.main-content .form-control-theme{width:100%;min-height:var(--theme-element-size);padding-left:1rem;padding-right:1rem}"
                )
                .concat(
                  B.devMode ? "" : "body,html,document,",
                  " .bg-theme{background-color:var(--theme-background-color)}.bg-theme-opacity{background-color:"
                )
                .concat(
                  (null == H ? void 0 : H.backgroundColor)
                    ? (0, c.Ld)(null == H ? void 0 : H.backgroundColor, 0.5)
                    : "inherit",
                  "}.bg-featured{background-color:var(--theme-featured-color)}.bg-featured-opacity{background-color:"
                )
                .concat(
                  (null == H ? void 0 : H.themeColor)
                    ? (0, c.Ld)(null == H ? void 0 : H.themeColor, 0.2)
                    : "inherit",
                  "}.border-theme{border-color:"
                )
                .concat(
                  (null == H ? void 0 : H.backgroundColor)
                    ? (0, c.Ld)(
                        (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                        0.25
                      )
                    : "inherit",
                  "}.border-featured,.border-featured-hover:hover{border-color:var(--theme-color)}.theme-color-title{color:var(--theme-title-color)}.featured-theme{color:"
                )
                .concat(
                  (null == H ? void 0 : H.themeColor)
                    ? (0, c.rX)(H.themeColor)
                    : "#ffffff",
                  ';background-color:var(--theme-color)}.main-content .btn,.theme-font-title{font-family:"'
                )
                .concat(
                  null !== (U = null == O ? void 0 : O.title) && void 0 !== U
                    ? U
                    : "Inter",
                  '",'
                )
                .concat(
                  null !== (P = null == O ? void 0 : O.type) && void 0 !== P
                    ? P
                    : "sans serif",
                  ","
                )
                .concat(
                  W,
                  "}.form-control-theme{-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;border-color:"
                )
                .concat(
                  (null == H ? void 0 : H.backgroundColor)
                    ? (0, c.Ld)(
                        (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                        0.25
                      )
                    : "inherit",
                  "}.form-control-theme:focus{border-color:"
                )
                .concat(
                  (null == H ? void 0 : H.backgroundColor)
                    ? (0, c.Ld)(
                        (0, c.rX)(null == H ? void 0 : H.backgroundColor),
                        0.5
                      )
                    : "inherit",
                  '}.content p+p{margin-top:.75rem}.content h1{font-size:2em}.content h2{font-size:1.5em}.content h3{font-size:1.17em}.content h1,.content h2,.content h3{line-height:1.15;color:var(--theme-title-color);font-family:"'
                )
                .concat(
                  null !== (D = null == O ? void 0 : O.title) && void 0 !== D
                    ? D
                    : "Inter",
                  '",'
                )
                .concat(
                  null !== (R = null == O ? void 0 : O.type) && void 0 !== R
                    ? R
                    : "sans serif",
                  ","
                )
                .concat(
                  W,
                  "}.content h1+p,.content h2+p,.content h3+p{margin-top:.75rem}.content .ql-size-huge{font-size:2.5em;line-height:1}.content .ql-size-large{font-size:1.5em;line-height:1}.content .ql-size-small{font-size:.75em;line-height:1.1;display:inline-block}.graphic-theme,.argument-theme{color:var(--theme-content-color);border:1px solid "
                )
                .concat(
                  H.backgroundColor
                    ? (0, c.Ld)((0, c.nF)(H.backgroundColor), 0.9)
                    : "inherit",
                  ";background-color:var(--theme-background-color)}.quote-theme{color:var(--theme-content-color);border-color:"
                )
                .concat(
                  H.backgroundColor
                    ? (0, c.Ld)((0, c.nF)(H.backgroundColor), 0.9)
                    : "inherit",
                  ";background-color:var(--theme-background-color)}.btn-theme{color:"
                )
                .concat(
                  (null == H ? void 0 : H.themeColor)
                    ? (0, c.rX)(H.themeColor)
                    : "#ffffff",
                  ";background-color:var(--theme-color)}.effect-bubble:hover .btn-theme,.btn-theme:hover{background-color:"
                )
                .concat(
                  !!(null == H ? void 0 : H.themeColor) &&
                    (0, c.lT)(H.themeColor),
                  "}.hide-volume::-webkit-media-controls-volume-control-container{display:none}.hide-volume::-webkit-media-controls-time-remaining-display{display:none}"
                ),
            }),
            (0, a.jsx)(d(), {
              id: "400e9a61b4513875",
              dynamic: [
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.backgroundColor)
                      ? null == H
                        ? void 0
                        : H.backgroundColor
                      : "#ffffff"
                  ),
                  0.2
                ),
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.backgroundColor)
                      ? null == H
                        ? void 0
                        : H.backgroundColor
                      : "#ffffff"
                  ),
                  0.15
                ),
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.backgroundColor)
                      ? null == H
                        ? void 0
                        : H.backgroundColor
                      : "#ffffff"
                  ),
                  0.25
                ),
                H.themeColor ? H.themeColor : "inherit",
                H.themeColor ? H.themeColor : "inherit",
                (0, c.rX)(
                  (null == H ? void 0 : H.themeColor) ? H.themeColor : "#ffffff"
                ),
                (0, c.rX)(
                  (null == H ? void 0 : H.themeColor) ? H.themeColor : "#ffffff"
                ),
                (0, c.Ld)(
                  (0, c.nF)(
                    (null == H ? void 0 : H.themeColor)
                      ? H.themeColor
                      : "#ffffff"
                  ),
                  0.5
                ),
                (0, c.Ld)(
                  (null == H ? void 0 : H.themeColor)
                    ? H.themeColor
                    : "#ffffff",
                  1
                ),
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.themeColor)
                      ? null == H
                        ? void 0
                        : H.themeColor
                      : "#ffffff"
                  ),
                  0.5
                ),
                H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.rX)(H.themeColor)
                  : "#ffffff",
                H.themeColor ? (0, c.Ld)(H.themeColor, 1) : "inherit",
                (0, c.Ld)(
                  (0, c.nF)(
                    (null == H ? void 0 : H.themeColor)
                      ? H.themeColor
                      : "#ffffff"
                  ),
                  0.5
                ),
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.themeColor)
                      ? H.themeColor
                      : "#ffffff"
                  ),
                  0.1
                ),
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.themeColor)
                      ? null == H
                        ? void 0
                        : H.themeColor
                      : "#ffffff"
                  ),
                  0.5
                ),
                H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.nF)(H.themeColor)
                  : "#ffffff",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.Ld)(H.themeColor, 1)
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.Ld)(H.themeColor, 0.05)
                  : "inherit",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.rX)(H.themeColor)
                  : "#000000",
                (null == H ? void 0 : H.themeColor)
                  ? (0, c.Ld)(H.themeColor, 1)
                  : "inherit",
                H.themeColor ? (0, c.Ld)(H.themeColor, 1) : "inherit",
                H.themeColor ? (0, c.Ld)(H.themeColor, 0.2) : "inherit",
              ],
              children:
                ".plan-background-default,.option-background-default{background-color:var(--theme-background-color);color:var(--theme-title-color);border-style:solid;border-color:"
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.backgroundColor)
                          ? null == H
                            ? void 0
                            : H.backgroundColor
                          : "#ffffff"
                      ),
                      0.2
                    ),
                    ";.option-icon-right{-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;background-color:"
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.backgroundColor)
                          ? null == H
                            ? void 0
                            : H.backgroundColor
                          : "#ffffff"
                      ),
                      0.15
                    ),
                    "}.option-icon-select{-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;color:var(--theme-title-color);background-color:var(--theme-background-color);border:1px solid "
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.backgroundColor)
                          ? null == H
                            ? void 0
                            : H.backgroundColor
                          : "#ffffff"
                      ),
                      0.25
                    ),
                    "}}.active .option-icon-select{border-color:"
                  )
                  .concat(
                    H.themeColor ? H.themeColor : "inherit",
                    "}@media(min-width:768px){.plan-background-default:hover,.option-background-default:hover,.plan-background-default:hover .option-icon-select,.option-background-default:hover .option-icon-select{border-color:"
                  )
                  .concat(
                    H.themeColor ? H.themeColor : "inherit",
                    "}}.plan.option-background-default,.active.option-background-default{color:"
                  )
                  .concat(
                    (0, c.rX)(
                      (null == H ? void 0 : H.themeColor)
                        ? H.themeColor
                        : "#ffffff"
                    ),
                    ";border-color:var(--theme-color);background-color:var(--theme-color)}.option-background-bubble{font-weight:500;color:"
                  )
                  .concat(
                    (0, c.rX)(
                      (null == H ? void 0 : H.themeColor)
                        ? H.themeColor
                        : "#ffffff"
                    ),
                    ";border-color:"
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.nF)(
                        (null == H ? void 0 : H.themeColor)
                          ? H.themeColor
                          : "#ffffff"
                      ),
                      0.5
                    ),
                    ";background-color:"
                  )
                  .concat(
                    (0, c.Ld)(
                      (null == H ? void 0 : H.themeColor)
                        ? H.themeColor
                        : "#ffffff",
                      1
                    ),
                    ";border-bottom-width:8px;.option-icon-select{border:1px solid "
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.themeColor)
                          ? null == H
                            ? void 0
                            : H.themeColor
                          : "#ffffff"
                      ),
                      0.5
                    ),
                    "}}.option-background-bubble:hover{background-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                    "}.active.option-background-bubble{-webkit-transform:scale(1.025);-moz-transform:scale(1.025);-ms-transform:scale(1.025);-o-transform:scale(1.025);transform:scale(1.025);background-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                    "}.plan-background-fetured,.option-background-fetured{font-weight:500;color:"
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.rX)(H.themeColor)
                      : "#ffffff",
                    ";border-color:var(--theme-color);background-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 1) : "inherit",
                    ";.option-icon-right{background-color:"
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.nF)(
                        (null == H ? void 0 : H.themeColor)
                          ? H.themeColor
                          : "#ffffff"
                      ),
                      0.5
                    ),
                    "}.option-icon-select{background-color:"
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.themeColor)
                          ? H.themeColor
                          : "#ffffff"
                      ),
                      0.1
                    ),
                    ";border:1px solid "
                  )
                  .concat(
                    (0, c.Ld)(
                      (0, c.rX)(
                        (null == H ? void 0 : H.themeColor)
                          ? null == H
                            ? void 0
                            : H.themeColor
                          : "#ffffff"
                      ),
                      0.5
                    ),
                    "}}.plan-background-fetured:hover,.option-background-fetured:hover{border-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                    ";background-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 0.9) : "inherit",
                    "}.plan-background-contrast,.option-background-contrast{font-weight:500;color:"
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.nF)(H.themeColor)
                      : "#ffffff",
                    ";border-color:"
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.Ld)(H.themeColor, 1)
                      : "inherit",
                    "!important;background-color:"
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.Ld)(H.themeColor, 0.05)
                      : "inherit",
                    ";.option-icon-right{color:"
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.rX)(H.themeColor)
                      : "#000000",
                    ";background-color:var(--theme-background-color)}.option-icon-select{color:var(--theme-title-color);background-color:var(--theme-background-color);border:1px solid "
                  )
                  .concat(
                    (null == H ? void 0 : H.themeColor)
                      ? (0, c.Ld)(H.themeColor, 1)
                      : "inherit",
                    "!important}}.plan-background-contrast:hover,.option-background-contrast:hover{border-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 1) : "inherit",
                    "!important;background-color:"
                  )
                  .concat(
                    H.themeColor ? (0, c.Ld)(H.themeColor, 0.2) : "inherit",
                    "}"
                  ),
            }),
            (0, a.jsx)(d(), {
              id: "608bdce74ae539f6",
              dynamic: [
                (0, c.Ld)(
                  (0, c.rX)(
                    (null == H ? void 0 : H.backgroundColor)
                      ? null == H
                        ? void 0
                        : H.backgroundColor
                      : "#ffffff"
                  ),
                  0.1
                ),
              ],
              children:
                ".timer-theme{border-width:1px;background-color:var(--theme-background-color);border-style:solid;border-color:".concat(
                  (0, c.Ld)(
                    (0, c.rX)(
                      (null == H ? void 0 : H.backgroundColor)
                        ? null == H
                          ? void 0
                          : H.backgroundColor
                        : "#ffffff"
                    ),
                    0.1
                  ),
                  "}"
                ),
            }),
            (0, a.jsx)(d(), {
              id: "f1951b6a92c65909",
              children:
                ".swiper-pagination-bullet{opacity:.25;background-color:var(--theme-color)!important}.swiper-pagination-bullet-active{opacity:1}",
            }),
          ],
        });
      }
    },
    9490: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return AlertUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(12936),
        s = o(41901),
        c = o(67294);
      function AlertUI(l) {
        var t, o, u, m, v, p, h, x;
        let { globalContext: w, handleGlobalContext: y } = (0, c.useContext)(
            f.kn
          ),
          k = {
            theme: "",
            danger: "bg-red-100 text-red-700",
            info: "bg-blue-100 text-blue-700",
            success: "bg-green-100 text-green-700",
            light: "bg-zinc-100 text-zinc-700",
            warning: "bg-yellow-100 text-yellow-700",
          },
          j = {
            theme: "",
            danger: "bg-red-600 text-red-50",
            info: "bg-blue-600 text-blue-50",
            success: "bg-green-600 text-green-50",
            light: "bg-zinc-600 text-zinc-50",
            warning: "bg-yellow-400 text-yellow-950",
          };
        return (0, a.jsx)("div", {
          className: "grid",
          children: (0, a.jsx)("div", {
            className: ""
              .concat(
                (null === (t = l.design) || void 0 === t ? void 0 : t.contrast)
                  ? j[l.design.style]
                  : k[l.design.style],
                " "
              )
              .concat(
                null !==
                  (p =
                    null === (o = l.design) || void 0 === o
                      ? void 0
                      : o.padding) && void 0 !== p
                  ? p
                  : "p-4",
                " "
              )
              .concat(
                null !==
                  (h =
                    null === (u = w.funnel.design) || void 0 === u
                      ? void 0
                      : u.rounded) && void 0 !== h
                  ? h
                  : "rounded-lg",
                " content"
              ),
            dangerouslySetInnerHTML: {
              __html: (0, s.Fm)(
                l.content.text,
                null !== (x = null == w ? void 0 : w.variables) && void 0 !== x
                  ? x
                  : []
              ),
            },
            style:
              "theme" == l.design.style
                ? {
                    backgroundColor: (
                      null === (m = l.design) || void 0 === m
                        ? void 0
                        : m.contrast
                    )
                      ? w.funnel.design.themeColor
                      : (0, d.rX)(w.funnel.design.themeColor),
                    color: (
                      null === (v = l.design) || void 0 === v
                        ? void 0
                        : v.contrast
                    )
                      ? (0, d.rX)(w.funnel.design.themeColor)
                      : (0, d.nF)(w.funnel.design.themeColor),
                  }
                : {},
          }),
        });
      }
    },
    50081: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ArgumentsUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(23839),
        c = o(41901),
        u = o(67294);
      function ArgumentsUI(l) {
        var t, o;
        let { globalContext: m, handleGlobalContext: v } = (0, u.useContext)(
          f.kn
        );
        return (0, a.jsx)("div", {
          className: "grid ".concat(l.content.cols, " gap-2"),
          children:
            !!(null === (o = l.content) || void 0 === o
              ? void 0
              : null === (t = o.arguments) || void 0 === t
              ? void 0
              : t.length) &&
            l.content.arguments.map((t, o) => {
              var f, u, v, p;
              return (0, a.jsxs)(
                "div",
                {
                  className: ""
                    .concat(
                      null !==
                        (v =
                          null === (f = m.funnel.design) || void 0 === f
                            ? void 0
                            : f.rounded) && void 0 !== v
                        ? v
                        : "rounded-lg",
                      " argument-theme content text relative overflow-hidden flex "
                    )
                    .concat(
                      "reverse" != l.content.order
                        ? "flex-col"
                        : "flex-col-reverse"
                    ),
                  children: [
                    !!(null == t
                      ? void 0
                      : null === (u = t.image) || void 0 === u
                      ? void 0
                      : u.src) &&
                      (0, a.jsx)("div", {
                        className: "text-center",
                        children:
                          "emoji" != t.image.type && (0, d.jv)(t.image.src)
                            ? (0, a.jsx)(s.Z, { src: t.image.src })
                            : (0, a.jsx)("div", {
                                className: "text-6xl py-4",
                                children: t.image.src,
                              }),
                      }),
                    (0, a.jsx)("div", {
                      className: "p-4",
                      dangerouslySetInnerHTML: {
                        __html: (0, c.Fm)(
                          t.text,
                          null !== (p = null == m ? void 0 : m.variables) &&
                            void 0 !== p
                            ? p
                            : []
                        ),
                      },
                    }),
                  ],
                },
                o
              );
            }),
        });
      }
    },
    98385: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return AudioUI;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(5379),
        s = o.n(d);
      let c = {
        "bi-123": "\\f67f",
        "bi-alarm-fill": "\\f101",
        "bi-alarm": "\\f102",
        "bi-align-bottom": "\\f103",
        "bi-align-center": "\\f104",
        "bi-align-end": "\\f105",
        "bi-align-middle": "\\f106",
        "bi-align-start": "\\f107",
        "bi-align-top": "\\f108",
        "bi-alt": "\\f109",
        "bi-app-indicator": "\\f10a",
        "bi-app": "\\f10b",
        "bi-archive-fill": "\\f10c",
        "bi-archive": "\\f10d",
        "bi-arrow-90deg-down": "\\f10e",
        "bi-arrow-90deg-left": "\\f10f",
        "bi-arrow-90deg-right": "\\f110",
        "bi-arrow-90deg-up": "\\f111",
        "bi-arrow-bar-down": "\\f112",
        "bi-arrow-bar-left": "\\f113",
        "bi-arrow-bar-right": "\\f114",
        "bi-arrow-bar-up": "\\f115",
        "bi-arrow-clockwise": "\\f116",
        "bi-arrow-counterclockwise": "\\f117",
        "bi-arrow-down-circle-fill": "\\f118",
        "bi-arrow-down-circle": "\\f119",
        "bi-arrow-down-left-circle-fill": "\\f11a",
        "bi-arrow-down-left-circle": "\\f11b",
        "bi-arrow-down-left-square-fill": "\\f11c",
        "bi-arrow-down-left-square": "\\f11d",
        "bi-arrow-down-left": "\\f11e",
        "bi-arrow-down-right-circle-fill": "\\f11f",
        "bi-arrow-down-right-circle": "\\f120",
        "bi-arrow-down-right-square-fill": "\\f121",
        "bi-arrow-down-right-square": "\\f122",
        "bi-arrow-down-right": "\\f123",
        "bi-arrow-down-short": "\\f124",
        "bi-arrow-down-square-fill": "\\f125",
        "bi-arrow-down-square": "\\f126",
        "bi-arrow-down-up": "\\f127",
        "bi-arrow-down": "\\f128",
        "bi-arrow-left-circle-fill": "\\f129",
        "bi-arrow-left-circle": "\\f12a",
        "bi-arrow-left-right": "\\f12b",
        "bi-arrow-left-short": "\\f12c",
        "bi-arrow-left-square-fill": "\\f12d",
        "bi-arrow-left-square": "\\f12e",
        "bi-arrow-left": "\\f12f",
        "bi-arrow-repeat": "\\f130",
        "bi-arrow-return-left": "\\f131",
        "bi-arrow-return-right": "\\f132",
        "bi-arrow-right-circle-fill": "\\f133",
        "bi-arrow-right-circle": "\\f134",
        "bi-arrow-right-short": "\\f135",
        "bi-arrow-right-square-fill": "\\f136",
        "bi-arrow-right-square": "\\f137",
        "bi-arrow-right": "\\f138",
        "bi-arrow-up-circle-fill": "\\f139",
        "bi-arrow-up-circle": "\\f13a",
        "bi-arrow-up-left-circle-fill": "\\f13b",
        "bi-arrow-up-left-circle": "\\f13c",
        "bi-arrow-up-left-square-fill": "\\f13d",
        "bi-arrow-up-left-square": "\\f13e",
        "bi-arrow-up-left": "\\f13f",
        "bi-arrow-up-right-circle-fill": "\\f140",
        "bi-arrow-up-right-circle": "\\f141",
        "bi-arrow-up-right-square-fill": "\\f142",
        "bi-arrow-up-right-square": "\\f143",
        "bi-arrow-up-right": "\\f144",
        "bi-arrow-up-short": "\\f145",
        "bi-arrow-up-square-fill": "\\f146",
        "bi-arrow-up-square": "\\f147",
        "bi-arrow-up": "\\f148",
        "bi-arrows-angle-contract": "\\f149",
        "bi-arrows-angle-expand": "\\f14a",
        "bi-arrows-collapse": "\\f14b",
        "bi-arrows-expand": "\\f14c",
        "bi-arrows-fullscreen": "\\f14d",
        "bi-arrows-move": "\\f14e",
        "bi-aspect-ratio-fill": "\\f14f",
        "bi-aspect-ratio": "\\f150",
        "bi-asterisk": "\\f151",
        "bi-at": "\\f152",
        "bi-award-fill": "\\f153",
        "bi-award": "\\f154",
        "bi-back": "\\f155",
        "bi-backspace-fill": "\\f156",
        "bi-backspace-reverse-fill": "\\f157",
        "bi-backspace-reverse": "\\f158",
        "bi-backspace": "\\f159",
        "bi-badge-3d-fill": "\\f15a",
        "bi-badge-3d": "\\f15b",
        "bi-badge-4k-fill": "\\f15c",
        "bi-badge-4k": "\\f15d",
        "bi-badge-8k-fill": "\\f15e",
        "bi-badge-8k": "\\f15f",
        "bi-badge-ad-fill": "\\f160",
        "bi-badge-ad": "\\f161",
        "bi-badge-ar-fill": "\\f162",
        "bi-badge-ar": "\\f163",
        "bi-badge-cc-fill": "\\f164",
        "bi-badge-cc": "\\f165",
        "bi-badge-hd-fill": "\\f166",
        "bi-badge-hd": "\\f167",
        "bi-badge-tm-fill": "\\f168",
        "bi-badge-tm": "\\f169",
        "bi-badge-vo-fill": "\\f16a",
        "bi-badge-vo": "\\f16b",
        "bi-badge-vr-fill": "\\f16c",
        "bi-badge-vr": "\\f16d",
        "bi-badge-wc-fill": "\\f16e",
        "bi-badge-wc": "\\f16f",
        "bi-bag-check-fill": "\\f170",
        "bi-bag-check": "\\f171",
        "bi-bag-dash-fill": "\\f172",
        "bi-bag-dash": "\\f173",
        "bi-bag-fill": "\\f174",
        "bi-bag-plus-fill": "\\f175",
        "bi-bag-plus": "\\f176",
        "bi-bag-x-fill": "\\f177",
        "bi-bag-x": "\\f178",
        "bi-bag": "\\f179",
        "bi-bar-chart-fill": "\\f17a",
        "bi-bar-chart-line-fill": "\\f17b",
        "bi-bar-chart-line": "\\f17c",
        "bi-bar-chart-steps": "\\f17d",
        "bi-bar-chart": "\\f17e",
        "bi-basket-fill": "\\f17f",
        "bi-basket": "\\f180",
        "bi-basket2-fill": "\\f181",
        "bi-basket2": "\\f182",
        "bi-basket3-fill": "\\f183",
        "bi-basket3": "\\f184",
        "bi-battery-charging": "\\f185",
        "bi-battery-full": "\\f186",
        "bi-battery-half": "\\f187",
        "bi-battery": "\\f188",
        "bi-bell-fill": "\\f189",
        "bi-bell": "\\f18a",
        "bi-bezier": "\\f18b",
        "bi-bezier2": "\\f18c",
        "bi-bicycle": "\\f18d",
        "bi-binoculars-fill": "\\f18e",
        "bi-binoculars": "\\f18f",
        "bi-blockquote-left": "\\f190",
        "bi-blockquote-right": "\\f191",
        "bi-book-fill": "\\f192",
        "bi-book-half": "\\f193",
        "bi-book": "\\f194",
        "bi-bookmark-check-fill": "\\f195",
        "bi-bookmark-check": "\\f196",
        "bi-bookmark-dash-fill": "\\f197",
        "bi-bookmark-dash": "\\f198",
        "bi-bookmark-fill": "\\f199",
        "bi-bookmark-heart-fill": "\\f19a",
        "bi-bookmark-heart": "\\f19b",
        "bi-bookmark-plus-fill": "\\f19c",
        "bi-bookmark-plus": "\\f19d",
        "bi-bookmark-star-fill": "\\f19e",
        "bi-bookmark-star": "\\f19f",
        "bi-bookmark-x-fill": "\\f1a0",
        "bi-bookmark-x": "\\f1a1",
        "bi-bookmark": "\\f1a2",
        "bi-bookmarks-fill": "\\f1a3",
        "bi-bookmarks": "\\f1a4",
        "bi-bookshelf": "\\f1a5",
        "bi-bootstrap-fill": "\\f1a6",
        "bi-bootstrap-reboot": "\\f1a7",
        "bi-bootstrap": "\\f1a8",
        "bi-border-all": "\\f1a9",
        "bi-border-bottom": "\\f1aa",
        "bi-border-center": "\\f1ab",
        "bi-border-inner": "\\f1ac",
        "bi-border-left": "\\f1ad",
        "bi-border-middle": "\\f1ae",
        "bi-border-outer": "\\f1af",
        "bi-border-right": "\\f1b0",
        "bi-border-style": "\\f1b1",
        "bi-border-top": "\\f1b2",
        "bi-border-width": "\\f1b3",
        "bi-border": "\\f1b4",
        "bi-bounding-box-circles": "\\f1b5",
        "bi-bounding-box": "\\f1b6",
        "bi-box-arrow-down-left": "\\f1b7",
        "bi-box-arrow-down-right": "\\f1b8",
        "bi-box-arrow-down": "\\f1b9",
        "bi-box-arrow-in-down-left": "\\f1ba",
        "bi-box-arrow-in-down-right": "\\f1bb",
        "bi-box-arrow-in-down": "\\f1bc",
        "bi-box-arrow-in-left": "\\f1bd",
        "bi-box-arrow-in-right": "\\f1be",
        "bi-box-arrow-in-up-left": "\\f1bf",
        "bi-box-arrow-in-up-right": "\\f1c0",
        "bi-box-arrow-in-up": "\\f1c1",
        "bi-box-arrow-left": "\\f1c2",
        "bi-box-arrow-right": "\\f1c3",
        "bi-box-arrow-up-left": "\\f1c4",
        "bi-box-arrow-up-right": "\\f1c5",
        "bi-box-arrow-up": "\\f1c6",
        "bi-box-seam": "\\f1c7",
        "bi-box": "\\f1c8",
        "bi-braces": "\\f1c9",
        "bi-bricks": "\\f1ca",
        "bi-briefcase-fill": "\\f1cb",
        "bi-briefcase": "\\f1cc",
        "bi-brightness-alt-high-fill": "\\f1cd",
        "bi-brightness-alt-high": "\\f1ce",
        "bi-brightness-alt-low-fill": "\\f1cf",
        "bi-brightness-alt-low": "\\f1d0",
        "bi-brightness-high-fill": "\\f1d1",
        "bi-brightness-high": "\\f1d2",
        "bi-brightness-low-fill": "\\f1d3",
        "bi-brightness-low": "\\f1d4",
        "bi-broadcast-pin": "\\f1d5",
        "bi-broadcast": "\\f1d6",
        "bi-brush-fill": "\\f1d7",
        "bi-brush": "\\f1d8",
        "bi-bucket-fill": "\\f1d9",
        "bi-bucket": "\\f1da",
        "bi-bug-fill": "\\f1db",
        "bi-bug": "\\f1dc",
        "bi-building": "\\f1dd",
        "bi-bullseye": "\\f1de",
        "bi-calculator-fill": "\\f1df",
        "bi-calculator": "\\f1e0",
        "bi-calendar-check-fill": "\\f1e1",
        "bi-calendar-check": "\\f1e2",
        "bi-calendar-date-fill": "\\f1e3",
        "bi-calendar-date": "\\f1e4",
        "bi-calendar-day-fill": "\\f1e5",
        "bi-calendar-day": "\\f1e6",
        "bi-calendar-event-fill": "\\f1e7",
        "bi-calendar-event": "\\f1e8",
        "bi-calendar-fill": "\\f1e9",
        "bi-calendar-minus-fill": "\\f1ea",
        "bi-calendar-minus": "\\f1eb",
        "bi-calendar-month-fill": "\\f1ec",
        "bi-calendar-month": "\\f1ed",
        "bi-calendar-plus-fill": "\\f1ee",
        "bi-calendar-plus": "\\f1ef",
        "bi-calendar-range-fill": "\\f1f0",
        "bi-calendar-range": "\\f1f1",
        "bi-calendar-week-fill": "\\f1f2",
        "bi-calendar-week": "\\f1f3",
        "bi-calendar-x-fill": "\\f1f4",
        "bi-calendar-x": "\\f1f5",
        "bi-calendar": "\\f1f6",
        "bi-calendar2-check-fill": "\\f1f7",
        "bi-calendar2-check": "\\f1f8",
        "bi-calendar2-date-fill": "\\f1f9",
        "bi-calendar2-date": "\\f1fa",
        "bi-calendar2-day-fill": "\\f1fb",
        "bi-calendar2-day": "\\f1fc",
        "bi-calendar2-event-fill": "\\f1fd",
        "bi-calendar2-event": "\\f1fe",
        "bi-calendar2-fill": "\\f1ff",
        "bi-calendar2-minus-fill": "\\f200",
        "bi-calendar2-minus": "\\f201",
        "bi-calendar2-month-fill": "\\f202",
        "bi-calendar2-month": "\\f203",
        "bi-calendar2-plus-fill": "\\f204",
        "bi-calendar2-plus": "\\f205",
        "bi-calendar2-range-fill": "\\f206",
        "bi-calendar2-range": "\\f207",
        "bi-calendar2-week-fill": "\\f208",
        "bi-calendar2-week": "\\f209",
        "bi-calendar2-x-fill": "\\f20a",
        "bi-calendar2-x": "\\f20b",
        "bi-calendar2": "\\f20c",
        "bi-calendar3-event-fill": "\\f20d",
        "bi-calendar3-event": "\\f20e",
        "bi-calendar3-fill": "\\f20f",
        "bi-calendar3-range-fill": "\\f210",
        "bi-calendar3-range": "\\f211",
        "bi-calendar3-week-fill": "\\f212",
        "bi-calendar3-week": "\\f213",
        "bi-calendar3": "\\f214",
        "bi-calendar4-event": "\\f215",
        "bi-calendar4-range": "\\f216",
        "bi-calendar4-week": "\\f217",
        "bi-calendar4": "\\f218",
        "bi-camera-fill": "\\f219",
        "bi-camera-reels-fill": "\\f21a",
        "bi-camera-reels": "\\f21b",
        "bi-camera-video-fill": "\\f21c",
        "bi-camera-video-off-fill": "\\f21d",
        "bi-camera-video-off": "\\f21e",
        "bi-camera-video": "\\f21f",
        "bi-camera": "\\f220",
        "bi-camera2": "\\f221",
        "bi-capslock-fill": "\\f222",
        "bi-capslock": "\\f223",
        "bi-card-checklist": "\\f224",
        "bi-card-heading": "\\f225",
        "bi-card-image": "\\f226",
        "bi-card-list": "\\f227",
        "bi-card-text": "\\f228",
        "bi-caret-down-fill": "\\f229",
        "bi-caret-down-square-fill": "\\f22a",
        "bi-caret-down-square": "\\f22b",
        "bi-caret-down": "\\f22c",
        "bi-caret-left-fill": "\\f22d",
        "bi-caret-left-square-fill": "\\f22e",
        "bi-caret-left-square": "\\f22f",
        "bi-caret-left": "\\f230",
        "bi-caret-right-fill": "\\f231",
        "bi-caret-right-square-fill": "\\f232",
        "bi-caret-right-square": "\\f233",
        "bi-caret-right": "\\f234",
        "bi-caret-up-fill": "\\f235",
        "bi-caret-up-square-fill": "\\f236",
        "bi-caret-up-square": "\\f237",
        "bi-caret-up": "\\f238",
        "bi-cart-check-fill": "\\f239",
        "bi-cart-check": "\\f23a",
        "bi-cart-dash-fill": "\\f23b",
        "bi-cart-dash": "\\f23c",
        "bi-cart-fill": "\\f23d",
        "bi-cart-plus-fill": "\\f23e",
        "bi-cart-plus": "\\f23f",
        "bi-cart-x-fill": "\\f240",
        "bi-cart-x": "\\f241",
        "bi-cart": "\\f242",
        "bi-cart2": "\\f243",
        "bi-cart3": "\\f244",
        "bi-cart4": "\\f245",
        "bi-cash-stack": "\\f246",
        "bi-cash": "\\f247",
        "bi-cast": "\\f248",
        "bi-chat-dots-fill": "\\f249",
        "bi-chat-dots": "\\f24a",
        "bi-chat-fill": "\\f24b",
        "bi-chat-left-dots-fill": "\\f24c",
        "bi-chat-left-dots": "\\f24d",
        "bi-chat-left-fill": "\\f24e",
        "bi-chat-left-quote-fill": "\\f24f",
        "bi-chat-left-quote": "\\f250",
        "bi-chat-left-text-fill": "\\f251",
        "bi-chat-left-text": "\\f252",
        "bi-chat-left": "\\f253",
        "bi-chat-quote-fill": "\\f254",
        "bi-chat-quote": "\\f255",
        "bi-chat-right-dots-fill": "\\f256",
        "bi-chat-right-dots": "\\f257",
        "bi-chat-right-fill": "\\f258",
        "bi-chat-right-quote-fill": "\\f259",
        "bi-chat-right-quote": "\\f25a",
        "bi-chat-right-text-fill": "\\f25b",
        "bi-chat-right-text": "\\f25c",
        "bi-chat-right": "\\f25d",
        "bi-chat-square-dots-fill": "\\f25e",
        "bi-chat-square-dots": "\\f25f",
        "bi-chat-square-fill": "\\f260",
        "bi-chat-square-quote-fill": "\\f261",
        "bi-chat-square-quote": "\\f262",
        "bi-chat-square-text-fill": "\\f263",
        "bi-chat-square-text": "\\f264",
        "bi-chat-square": "\\f265",
        "bi-chat-text-fill": "\\f266",
        "bi-chat-text": "\\f267",
        "bi-chat": "\\f268",
        "bi-check-all": "\\f269",
        "bi-check-circle-fill": "\\f26a",
        "bi-check-circle": "\\f26b",
        "bi-check-square-fill": "\\f26c",
        "bi-check-square": "\\f26d",
        "bi-check": "\\f26e",
        "bi-check2-all": "\\f26f",
        "bi-check2-circle": "\\f270",
        "bi-check2-square": "\\f271",
        "bi-check2": "\\f272",
        "bi-chevron-bar-contract": "\\f273",
        "bi-chevron-bar-down": "\\f274",
        "bi-chevron-bar-expand": "\\f275",
        "bi-chevron-bar-left": "\\f276",
        "bi-chevron-bar-right": "\\f277",
        "bi-chevron-bar-up": "\\f278",
        "bi-chevron-compact-down": "\\f279",
        "bi-chevron-compact-left": "\\f27a",
        "bi-chevron-compact-right": "\\f27b",
        "bi-chevron-compact-up": "\\f27c",
        "bi-chevron-contract": "\\f27d",
        "bi-chevron-double-down": "\\f27e",
        "bi-chevron-double-left": "\\f27f",
        "bi-chevron-double-right": "\\f280",
        "bi-chevron-double-up": "\\f281",
        "bi-chevron-down": "\\f282",
        "bi-chevron-expand": "\\f283",
        "bi-chevron-left": "\\f284",
        "bi-chevron-right": "\\f285",
        "bi-chevron-up": "\\f286",
        "bi-circle-fill": "\\f287",
        "bi-circle-half": "\\f288",
        "bi-circle-square": "\\f289",
        "bi-circle": "\\f28a",
        "bi-clipboard-check": "\\f28b",
        "bi-clipboard-data": "\\f28c",
        "bi-clipboard-minus": "\\f28d",
        "bi-clipboard-plus": "\\f28e",
        "bi-clipboard-x": "\\f28f",
        "bi-clipboard": "\\f290",
        "bi-clock-fill": "\\f291",
        "bi-clock-history": "\\f292",
        "bi-clock": "\\f293",
        "bi-cloud-arrow-down-fill": "\\f294",
        "bi-cloud-arrow-down": "\\f295",
        "bi-cloud-arrow-up-fill": "\\f296",
        "bi-cloud-arrow-up": "\\f297",
        "bi-cloud-check-fill": "\\f298",
        "bi-cloud-check": "\\f299",
        "bi-cloud-download-fill": "\\f29a",
        "bi-cloud-download": "\\f29b",
        "bi-cloud-drizzle-fill": "\\f29c",
        "bi-cloud-drizzle": "\\f29d",
        "bi-cloud-fill": "\\f29e",
        "bi-cloud-fog-fill": "\\f29f",
        "bi-cloud-fog": "\\f2a0",
        "bi-cloud-fog2-fill": "\\f2a1",
        "bi-cloud-fog2": "\\f2a2",
        "bi-cloud-hail-fill": "\\f2a3",
        "bi-cloud-hail": "\\f2a4",
        "bi-cloud-haze-fill": "\\f2a6",
        "bi-cloud-haze": "\\f2a7",
        "bi-cloud-haze2-fill": "\\f2a8",
        "bi-cloud-lightning-fill": "\\f2a9",
        "bi-cloud-lightning-rain-fill": "\\f2aa",
        "bi-cloud-lightning-rain": "\\f2ab",
        "bi-cloud-lightning": "\\f2ac",
        "bi-cloud-minus-fill": "\\f2ad",
        "bi-cloud-minus": "\\f2ae",
        "bi-cloud-moon-fill": "\\f2af",
        "bi-cloud-moon": "\\f2b0",
        "bi-cloud-plus-fill": "\\f2b1",
        "bi-cloud-plus": "\\f2b2",
        "bi-cloud-rain-fill": "\\f2b3",
        "bi-cloud-rain-heavy-fill": "\\f2b4",
        "bi-cloud-rain-heavy": "\\f2b5",
        "bi-cloud-rain": "\\f2b6",
        "bi-cloud-slash-fill": "\\f2b7",
        "bi-cloud-slash": "\\f2b8",
        "bi-cloud-sleet-fill": "\\f2b9",
        "bi-cloud-sleet": "\\f2ba",
        "bi-cloud-snow-fill": "\\f2bb",
        "bi-cloud-snow": "\\f2bc",
        "bi-cloud-sun-fill": "\\f2bd",
        "bi-cloud-sun": "\\f2be",
        "bi-cloud-upload-fill": "\\f2bf",
        "bi-cloud-upload": "\\f2c0",
        "bi-cloud": "\\f2c1",
        "bi-clouds-fill": "\\f2c2",
        "bi-clouds": "\\f2c3",
        "bi-cloudy-fill": "\\f2c4",
        "bi-cloudy": "\\f2c5",
        "bi-code-slash": "\\f2c6",
        "bi-code-square": "\\f2c7",
        "bi-code": "\\f2c8",
        "bi-collection-fill": "\\f2c9",
        "bi-collection-play-fill": "\\f2ca",
        "bi-collection-play": "\\f2cb",
        "bi-collection": "\\f2cc",
        "bi-columns-gap": "\\f2cd",
        "bi-columns": "\\f2ce",
        "bi-command": "\\f2cf",
        "bi-compass-fill": "\\f2d0",
        "bi-compass": "\\f2d1",
        "bi-cone-striped": "\\f2d2",
        "bi-cone": "\\f2d3",
        "bi-controller": "\\f2d4",
        "bi-cpu-fill": "\\f2d5",
        "bi-cpu": "\\f2d6",
        "bi-credit-card-2-back-fill": "\\f2d7",
        "bi-credit-card-2-back": "\\f2d8",
        "bi-credit-card-2-front-fill": "\\f2d9",
        "bi-credit-card-2-front": "\\f2da",
        "bi-credit-card-fill": "\\f2db",
        "bi-credit-card": "\\f2dc",
        "bi-crop": "\\f2dd",
        "bi-cup-fill": "\\f2de",
        "bi-cup-straw": "\\f2df",
        "bi-cup": "\\f2e0",
        "bi-cursor-fill": "\\f2e1",
        "bi-cursor-text": "\\f2e2",
        "bi-cursor": "\\f2e3",
        "bi-dash-circle-dotted": "\\f2e4",
        "bi-dash-circle-fill": "\\f2e5",
        "bi-dash-circle": "\\f2e6",
        "bi-dash-square-dotted": "\\f2e7",
        "bi-dash-square-fill": "\\f2e8",
        "bi-dash-square": "\\f2e9",
        "bi-dash": "\\f2ea",
        "bi-diagram-2-fill": "\\f2eb",
        "bi-diagram-2": "\\f2ec",
        "bi-diagram-3-fill": "\\f2ed",
        "bi-diagram-3": "\\f2ee",
        "bi-diamond-fill": "\\f2ef",
        "bi-diamond-half": "\\f2f0",
        "bi-diamond": "\\f2f1",
        "bi-dice-1-fill": "\\f2f2",
        "bi-dice-1": "\\f2f3",
        "bi-dice-2-fill": "\\f2f4",
        "bi-dice-2": "\\f2f5",
        "bi-dice-3-fill": "\\f2f6",
        "bi-dice-3": "\\f2f7",
        "bi-dice-4-fill": "\\f2f8",
        "bi-dice-4": "\\f2f9",
        "bi-dice-5-fill": "\\f2fa",
        "bi-dice-5": "\\f2fb",
        "bi-dice-6-fill": "\\f2fc",
        "bi-dice-6": "\\f2fd",
        "bi-disc-fill": "\\f2fe",
        "bi-disc": "\\f2ff",
        "bi-discord": "\\f300",
        "bi-display-fill": "\\f301",
        "bi-display": "\\f302",
        "bi-distribute-horizontal": "\\f303",
        "bi-distribute-vertical": "\\f304",
        "bi-door-closed-fill": "\\f305",
        "bi-door-closed": "\\f306",
        "bi-door-open-fill": "\\f307",
        "bi-door-open": "\\f308",
        "bi-dot": "\\f309",
        "bi-download": "\\f30a",
        "bi-droplet-fill": "\\f30b",
        "bi-droplet-half": "\\f30c",
        "bi-droplet": "\\f30d",
        "bi-earbuds": "\\f30e",
        "bi-easel-fill": "\\f30f",
        "bi-easel": "\\f310",
        "bi-egg-fill": "\\f311",
        "bi-egg-fried": "\\f312",
        "bi-egg": "\\f313",
        "bi-eject-fill": "\\f314",
        "bi-eject": "\\f315",
        "bi-emoji-angry-fill": "\\f316",
        "bi-emoji-angry": "\\f317",
        "bi-emoji-dizzy-fill": "\\f318",
        "bi-emoji-dizzy": "\\f319",
        "bi-emoji-expressionless-fill": "\\f31a",
        "bi-emoji-expressionless": "\\f31b",
        "bi-emoji-frown-fill": "\\f31c",
        "bi-emoji-frown": "\\f31d",
        "bi-emoji-heart-eyes-fill": "\\f31e",
        "bi-emoji-heart-eyes": "\\f31f",
        "bi-emoji-laughing-fill": "\\f320",
        "bi-emoji-laughing": "\\f321",
        "bi-emoji-neutral-fill": "\\f322",
        "bi-emoji-neutral": "\\f323",
        "bi-emoji-smile-fill": "\\f324",
        "bi-emoji-smile-upside-down-fill": "\\f325",
        "bi-emoji-smile-upside-down": "\\f326",
        "bi-emoji-smile": "\\f327",
        "bi-emoji-sunglasses-fill": "\\f328",
        "bi-emoji-sunglasses": "\\f329",
        "bi-emoji-wink-fill": "\\f32a",
        "bi-emoji-wink": "\\f32b",
        "bi-envelope-fill": "\\f32c",
        "bi-envelope-open-fill": "\\f32d",
        "bi-envelope-open": "\\f32e",
        "bi-envelope": "\\f32f",
        "bi-eraser-fill": "\\f330",
        "bi-eraser": "\\f331",
        "bi-exclamation-circle-fill": "\\f332",
        "bi-exclamation-circle": "\\f333",
        "bi-exclamation-diamond-fill": "\\f334",
        "bi-exclamation-diamond": "\\f335",
        "bi-exclamation-octagon-fill": "\\f336",
        "bi-exclamation-octagon": "\\f337",
        "bi-exclamation-square-fill": "\\f338",
        "bi-exclamation-square": "\\f339",
        "bi-exclamation-triangle-fill": "\\f33a",
        "bi-exclamation-triangle": "\\f33b",
        "bi-exclamation": "\\f33c",
        "bi-exclude": "\\f33d",
        "bi-eye-fill": "\\f33e",
        "bi-eye-slash-fill": "\\f33f",
        "bi-eye-slash": "\\f340",
        "bi-eye": "\\f341",
        "bi-eyedropper": "\\f342",
        "bi-eyeglasses": "\\f343",
        "bi-facebook": "\\f344",
        "bi-file-arrow-down-fill": "\\f345",
        "bi-file-arrow-down": "\\f346",
        "bi-file-arrow-up-fill": "\\f347",
        "bi-file-arrow-up": "\\f348",
        "bi-file-bar-graph-fill": "\\f349",
        "bi-file-bar-graph": "\\f34a",
        "bi-file-binary-fill": "\\f34b",
        "bi-file-binary": "\\f34c",
        "bi-file-break-fill": "\\f34d",
        "bi-file-break": "\\f34e",
        "bi-file-check-fill": "\\f34f",
        "bi-file-check": "\\f350",
        "bi-file-code-fill": "\\f351",
        "bi-file-code": "\\f352",
        "bi-file-diff-fill": "\\f353",
        "bi-file-diff": "\\f354",
        "bi-file-earmark-arrow-down-fill": "\\f355",
        "bi-file-earmark-arrow-down": "\\f356",
        "bi-file-earmark-arrow-up-fill": "\\f357",
        "bi-file-earmark-arrow-up": "\\f358",
        "bi-file-earmark-bar-graph-fill": "\\f359",
        "bi-file-earmark-bar-graph": "\\f35a",
        "bi-file-earmark-binary-fill": "\\f35b",
        "bi-file-earmark-binary": "\\f35c",
        "bi-file-earmark-break-fill": "\\f35d",
        "bi-file-earmark-break": "\\f35e",
        "bi-file-earmark-check-fill": "\\f35f",
        "bi-file-earmark-check": "\\f360",
        "bi-file-earmark-code-fill": "\\f361",
        "bi-file-earmark-code": "\\f362",
        "bi-file-earmark-diff-fill": "\\f363",
        "bi-file-earmark-diff": "\\f364",
        "bi-file-earmark-easel-fill": "\\f365",
        "bi-file-earmark-easel": "\\f366",
        "bi-file-earmark-excel-fill": "\\f367",
        "bi-file-earmark-excel": "\\f368",
        "bi-file-earmark-fill": "\\f369",
        "bi-file-earmark-font-fill": "\\f36a",
        "bi-file-earmark-font": "\\f36b",
        "bi-file-earmark-image-fill": "\\f36c",
        "bi-file-earmark-image": "\\f36d",
        "bi-file-earmark-lock-fill": "\\f36e",
        "bi-file-earmark-lock": "\\f36f",
        "bi-file-earmark-lock2-fill": "\\f370",
        "bi-file-earmark-lock2": "\\f371",
        "bi-file-earmark-medical-fill": "\\f372",
        "bi-file-earmark-medical": "\\f373",
        "bi-file-earmark-minus-fill": "\\f374",
        "bi-file-earmark-minus": "\\f375",
        "bi-file-earmark-music-fill": "\\f376",
        "bi-file-earmark-music": "\\f377",
        "bi-file-earmark-person-fill": "\\f378",
        "bi-file-earmark-person": "\\f379",
        "bi-file-earmark-play-fill": "\\f37a",
        "bi-file-earmark-play": "\\f37b",
        "bi-file-earmark-plus-fill": "\\f37c",
        "bi-file-earmark-plus": "\\f37d",
        "bi-file-earmark-post-fill": "\\f37e",
        "bi-file-earmark-post": "\\f37f",
        "bi-file-earmark-ppt-fill": "\\f380",
        "bi-file-earmark-ppt": "\\f381",
        "bi-file-earmark-richtext-fill": "\\f382",
        "bi-file-earmark-richtext": "\\f383",
        "bi-file-earmark-ruled-fill": "\\f384",
        "bi-file-earmark-ruled": "\\f385",
        "bi-file-earmark-slides-fill": "\\f386",
        "bi-file-earmark-slides": "\\f387",
        "bi-file-earmark-spreadsheet-fill": "\\f388",
        "bi-file-earmark-spreadsheet": "\\f389",
        "bi-file-earmark-text-fill": "\\f38a",
        "bi-file-earmark-text": "\\f38b",
        "bi-file-earmark-word-fill": "\\f38c",
        "bi-file-earmark-word": "\\f38d",
        "bi-file-earmark-x-fill": "\\f38e",
        "bi-file-earmark-x": "\\f38f",
        "bi-file-earmark-zip-fill": "\\f390",
        "bi-file-earmark-zip": "\\f391",
        "bi-file-earmark": "\\f392",
        "bi-file-easel-fill": "\\f393",
        "bi-file-easel": "\\f394",
        "bi-file-excel-fill": "\\f395",
        "bi-file-excel": "\\f396",
        "bi-file-fill": "\\f397",
        "bi-file-font-fill": "\\f398",
        "bi-file-font": "\\f399",
        "bi-file-image-fill": "\\f39a",
        "bi-file-image": "\\f39b",
        "bi-file-lock-fill": "\\f39c",
        "bi-file-lock": "\\f39d",
        "bi-file-lock2-fill": "\\f39e",
        "bi-file-lock2": "\\f39f",
        "bi-file-medical-fill": "\\f3a0",
        "bi-file-medical": "\\f3a1",
        "bi-file-minus-fill": "\\f3a2",
        "bi-file-minus": "\\f3a3",
        "bi-file-music-fill": "\\f3a4",
        "bi-file-music": "\\f3a5",
        "bi-file-person-fill": "\\f3a6",
        "bi-file-person": "\\f3a7",
        "bi-file-play-fill": "\\f3a8",
        "bi-file-play": "\\f3a9",
        "bi-file-plus-fill": "\\f3aa",
        "bi-file-plus": "\\f3ab",
        "bi-file-post-fill": "\\f3ac",
        "bi-file-post": "\\f3ad",
        "bi-file-ppt-fill": "\\f3ae",
        "bi-file-ppt": "\\f3af",
        "bi-file-richtext-fill": "\\f3b0",
        "bi-file-richtext": "\\f3b1",
        "bi-file-ruled-fill": "\\f3b2",
        "bi-file-ruled": "\\f3b3",
        "bi-file-slides-fill": "\\f3b4",
        "bi-file-slides": "\\f3b5",
        "bi-file-spreadsheet-fill": "\\f3b6",
        "bi-file-spreadsheet": "\\f3b7",
        "bi-file-text-fill": "\\f3b8",
        "bi-file-text": "\\f3b9",
        "bi-file-word-fill": "\\f3ba",
        "bi-file-word": "\\f3bb",
        "bi-file-x-fill": "\\f3bc",
        "bi-file-x": "\\f3bd",
        "bi-file-zip-fill": "\\f3be",
        "bi-file-zip": "\\f3bf",
        "bi-file": "\\f3c0",
        "bi-files-alt": "\\f3c1",
        "bi-files": "\\f3c2",
        "bi-film": "\\f3c3",
        "bi-filter-circle-fill": "\\f3c4",
        "bi-filter-circle": "\\f3c5",
        "bi-filter-left": "\\f3c6",
        "bi-filter-right": "\\f3c7",
        "bi-filter-square-fill": "\\f3c8",
        "bi-filter-square": "\\f3c9",
        "bi-filter": "\\f3ca",
        "bi-flag-fill": "\\f3cb",
        "bi-flag": "\\f3cc",
        "bi-flower1": "\\f3cd",
        "bi-flower2": "\\f3ce",
        "bi-flower3": "\\f3cf",
        "bi-folder-check": "\\f3d0",
        "bi-folder-fill": "\\f3d1",
        "bi-folder-minus": "\\f3d2",
        "bi-folder-plus": "\\f3d3",
        "bi-folder-symlink-fill": "\\f3d4",
        "bi-folder-symlink": "\\f3d5",
        "bi-folder-x": "\\f3d6",
        "bi-folder": "\\f3d7",
        "bi-folder2-open": "\\f3d8",
        "bi-folder2": "\\f3d9",
        "bi-fonts": "\\f3da",
        "bi-forward-fill": "\\f3db",
        "bi-forward": "\\f3dc",
        "bi-front": "\\f3dd",
        "bi-fullscreen-exit": "\\f3de",
        "bi-fullscreen": "\\f3df",
        "bi-funnel-fill": "\\f3e0",
        "bi-funnel": "\\f3e1",
        "bi-gear-fill": "\\f3e2",
        "bi-gear-wide-connected": "\\f3e3",
        "bi-gear-wide": "\\f3e4",
        "bi-gear": "\\f3e5",
        "bi-gem": "\\f3e6",
        "bi-geo-alt-fill": "\\f3e7",
        "bi-geo-alt": "\\f3e8",
        "bi-geo-fill": "\\f3e9",
        "bi-geo": "\\f3ea",
        "bi-gift-fill": "\\f3eb",
        "bi-gift": "\\f3ec",
        "bi-github": "\\f3ed",
        "bi-globe": "\\f3ee",
        "bi-globe2": "\\f3ef",
        "bi-google": "\\f3f0",
        "bi-graph-down": "\\f3f1",
        "bi-graph-up": "\\f3f2",
        "bi-grid-1x2-fill": "\\f3f3",
        "bi-grid-1x2": "\\f3f4",
        "bi-grid-3x2-gap-fill": "\\f3f5",
        "bi-grid-3x2-gap": "\\f3f6",
        "bi-grid-3x2": "\\f3f7",
        "bi-grid-3x3-gap-fill": "\\f3f8",
        "bi-grid-3x3-gap": "\\f3f9",
        "bi-grid-3x3": "\\f3fa",
        "bi-grid-fill": "\\f3fb",
        "bi-grid": "\\f3fc",
        "bi-grip-horizontal": "\\f3fd",
        "bi-grip-vertical": "\\f3fe",
        "bi-hammer": "\\f3ff",
        "bi-hand-index-fill": "\\f400",
        "bi-hand-index-thumb-fill": "\\f401",
        "bi-hand-index-thumb": "\\f402",
        "bi-hand-index": "\\f403",
        "bi-hand-thumbs-down-fill": "\\f404",
        "bi-hand-thumbs-down": "\\f405",
        "bi-hand-thumbs-up-fill": "\\f406",
        "bi-hand-thumbs-up": "\\f407",
        "bi-handbag-fill": "\\f408",
        "bi-handbag": "\\f409",
        "bi-hash": "\\f40a",
        "bi-hdd-fill": "\\f40b",
        "bi-hdd-network-fill": "\\f40c",
        "bi-hdd-network": "\\f40d",
        "bi-hdd-rack-fill": "\\f40e",
        "bi-hdd-rack": "\\f40f",
        "bi-hdd-stack-fill": "\\f410",
        "bi-hdd-stack": "\\f411",
        "bi-hdd": "\\f412",
        "bi-headphones": "\\f413",
        "bi-headset": "\\f414",
        "bi-heart-fill": "\\f415",
        "bi-heart-half": "\\f416",
        "bi-heart": "\\f417",
        "bi-heptagon-fill": "\\f418",
        "bi-heptagon-half": "\\f419",
        "bi-heptagon": "\\f41a",
        "bi-hexagon-fill": "\\f41b",
        "bi-hexagon-half": "\\f41c",
        "bi-hexagon": "\\f41d",
        "bi-hourglass-bottom": "\\f41e",
        "bi-hourglass-split": "\\f41f",
        "bi-hourglass-top": "\\f420",
        "bi-hourglass": "\\f421",
        "bi-house-door-fill": "\\f422",
        "bi-house-door": "\\f423",
        "bi-house-fill": "\\f424",
        "bi-house": "\\f425",
        "bi-hr": "\\f426",
        "bi-hurricane": "\\f427",
        "bi-image-alt": "\\f428",
        "bi-image-fill": "\\f429",
        "bi-image": "\\f42a",
        "bi-images": "\\f42b",
        "bi-inbox-fill": "\\f42c",
        "bi-inbox": "\\f42d",
        "bi-inboxes-fill": "\\f42e",
        "bi-inboxes": "\\f42f",
        "bi-info-circle-fill": "\\f430",
        "bi-info-circle": "\\f431",
        "bi-info-square-fill": "\\f432",
        "bi-info-square": "\\f433",
        "bi-info": "\\f434",
        "bi-input-cursor-text": "\\f435",
        "bi-input-cursor": "\\f436",
        "bi-instagram": "\\f437",
        "bi-intersect": "\\f438",
        "bi-journal-album": "\\f439",
        "bi-journal-arrow-down": "\\f43a",
        "bi-journal-arrow-up": "\\f43b",
        "bi-journal-bookmark-fill": "\\f43c",
        "bi-journal-bookmark": "\\f43d",
        "bi-journal-check": "\\f43e",
        "bi-journal-code": "\\f43f",
        "bi-journal-medical": "\\f440",
        "bi-journal-minus": "\\f441",
        "bi-journal-plus": "\\f442",
        "bi-journal-richtext": "\\f443",
        "bi-journal-text": "\\f444",
        "bi-journal-x": "\\f445",
        "bi-journal": "\\f446",
        "bi-journals": "\\f447",
        "bi-joystick": "\\f448",
        "bi-justify-left": "\\f449",
        "bi-justify-right": "\\f44a",
        "bi-justify": "\\f44b",
        "bi-kanban-fill": "\\f44c",
        "bi-kanban": "\\f44d",
        "bi-key-fill": "\\f44e",
        "bi-key": "\\f44f",
        "bi-keyboard-fill": "\\f450",
        "bi-keyboard": "\\f451",
        "bi-ladder": "\\f452",
        "bi-lamp-fill": "\\f453",
        "bi-lamp": "\\f454",
        "bi-laptop-fill": "\\f455",
        "bi-laptop": "\\f456",
        "bi-layer-backward": "\\f457",
        "bi-layer-forward": "\\f458",
        "bi-layers-fill": "\\f459",
        "bi-layers-half": "\\f45a",
        "bi-layers": "\\f45b",
        "bi-layout-sidebar-inset-reverse": "\\f45c",
        "bi-layout-sidebar-inset": "\\f45d",
        "bi-layout-sidebar-reverse": "\\f45e",
        "bi-layout-sidebar": "\\f45f",
        "bi-layout-split": "\\f460",
        "bi-layout-text-sidebar-reverse": "\\f461",
        "bi-layout-text-sidebar": "\\f462",
        "bi-layout-text-window-reverse": "\\f463",
        "bi-layout-text-window": "\\f464",
        "bi-layout-three-columns": "\\f465",
        "bi-layout-wtf": "\\f466",
        "bi-life-preserver": "\\f467",
        "bi-lightbulb-fill": "\\f468",
        "bi-lightbulb-off-fill": "\\f469",
        "bi-lightbulb-off": "\\f46a",
        "bi-lightbulb": "\\f46b",
        "bi-lightning-charge-fill": "\\f46c",
        "bi-lightning-charge": "\\f46d",
        "bi-lightning-fill": "\\f46e",
        "bi-lightning": "\\f46f",
        "bi-link-45deg": "\\f470",
        "bi-link": "\\f471",
        "bi-linkedin": "\\f472",
        "bi-list-check": "\\f473",
        "bi-list-nested": "\\f474",
        "bi-list-ol": "\\f475",
        "bi-list-stars": "\\f476",
        "bi-list-task": "\\f477",
        "bi-list-ul": "\\f478",
        "bi-list": "\\f479",
        "bi-lock-fill": "\\f47a",
        "bi-lock": "\\f47b",
        "bi-mailbox": "\\f47c",
        "bi-mailbox2": "\\f47d",
        "bi-map-fill": "\\f47e",
        "bi-map": "\\f47f",
        "bi-markdown-fill": "\\f480",
        "bi-markdown": "\\f481",
        "bi-mask": "\\f482",
        "bi-megaphone-fill": "\\f483",
        "bi-megaphone": "\\f484",
        "bi-menu-app-fill": "\\f485",
        "bi-menu-app": "\\f486",
        "bi-menu-button-fill": "\\f487",
        "bi-menu-button-wide-fill": "\\f488",
        "bi-menu-button-wide": "\\f489",
        "bi-menu-button": "\\f48a",
        "bi-menu-down": "\\f48b",
        "bi-menu-up": "\\f48c",
        "bi-mic-fill": "\\f48d",
        "bi-mic-mute-fill": "\\f48e",
        "bi-mic-mute": "\\f48f",
        "bi-mic": "\\f490",
        "bi-minecart-loaded": "\\f491",
        "bi-minecart": "\\f492",
        "bi-moisture": "\\f493",
        "bi-moon-fill": "\\f494",
        "bi-moon-stars-fill": "\\f495",
        "bi-moon-stars": "\\f496",
        "bi-moon": "\\f497",
        "bi-mouse-fill": "\\f498",
        "bi-mouse": "\\f499",
        "bi-mouse2-fill": "\\f49a",
        "bi-mouse2": "\\f49b",
        "bi-mouse3-fill": "\\f49c",
        "bi-mouse3": "\\f49d",
        "bi-music-note-beamed": "\\f49e",
        "bi-music-note-list": "\\f49f",
        "bi-music-note": "\\f4a0",
        "bi-music-player-fill": "\\f4a1",
        "bi-music-player": "\\f4a2",
        "bi-newspaper": "\\f4a3",
        "bi-node-minus-fill": "\\f4a4",
        "bi-node-minus": "\\f4a5",
        "bi-node-plus-fill": "\\f4a6",
        "bi-node-plus": "\\f4a7",
        "bi-nut-fill": "\\f4a8",
        "bi-nut": "\\f4a9",
        "bi-octagon-fill": "\\f4aa",
        "bi-octagon-half": "\\f4ab",
        "bi-octagon": "\\f4ac",
        "bi-option": "\\f4ad",
        "bi-outlet": "\\f4ae",
        "bi-paint-bucket": "\\f4af",
        "bi-palette-fill": "\\f4b0",
        "bi-palette": "\\f4b1",
        "bi-palette2": "\\f4b2",
        "bi-paperclip": "\\f4b3",
        "bi-paragraph": "\\f4b4",
        "bi-patch-check-fill": "\\f4b5",
        "bi-patch-check": "\\f4b6",
        "bi-patch-exclamation-fill": "\\f4b7",
        "bi-patch-exclamation": "\\f4b8",
        "bi-patch-minus-fill": "\\f4b9",
        "bi-patch-minus": "\\f4ba",
        "bi-patch-plus-fill": "\\f4bb",
        "bi-patch-plus": "\\f4bc",
        "bi-patch-question-fill": "\\f4bd",
        "bi-patch-question": "\\f4be",
        "bi-pause-btn-fill": "\\f4bf",
        "bi-pause-btn": "\\f4c0",
        "bi-pause-circle-fill": "\\f4c1",
        "bi-pause-circle": "\\f4c2",
        "bi-pause-fill": "\\f4c3",
        "bi-pause": "\\f4c4",
        "bi-peace-fill": "\\f4c5",
        "bi-peace": "\\f4c6",
        "bi-pen-fill": "\\f4c7",
        "bi-pen": "\\f4c8",
        "bi-pencil-fill": "\\f4c9",
        "bi-pencil-square": "\\f4ca",
        "bi-pencil": "\\f4cb",
        "bi-pentagon-fill": "\\f4cc",
        "bi-pentagon-half": "\\f4cd",
        "bi-pentagon": "\\f4ce",
        "bi-people-fill": "\\f4cf",
        "bi-people": "\\f4d0",
        "bi-percent": "\\f4d1",
        "bi-person-badge-fill": "\\f4d2",
        "bi-person-badge": "\\f4d3",
        "bi-person-bounding-box": "\\f4d4",
        "bi-person-check-fill": "\\f4d5",
        "bi-person-check": "\\f4d6",
        "bi-person-circle": "\\f4d7",
        "bi-person-dash-fill": "\\f4d8",
        "bi-person-dash": "\\f4d9",
        "bi-person-fill": "\\f4da",
        "bi-person-lines-fill": "\\f4db",
        "bi-person-plus-fill": "\\f4dc",
        "bi-person-plus": "\\f4dd",
        "bi-person-square": "\\f4de",
        "bi-person-x-fill": "\\f4df",
        "bi-person-x": "\\f4e0",
        "bi-person": "\\f4e1",
        "bi-phone-fill": "\\f4e2",
        "bi-phone-landscape-fill": "\\f4e3",
        "bi-phone-landscape": "\\f4e4",
        "bi-phone-vibrate-fill": "\\f4e5",
        "bi-phone-vibrate": "\\f4e6",
        "bi-phone": "\\f4e7",
        "bi-pie-chart-fill": "\\f4e8",
        "bi-pie-chart": "\\f4e9",
        "bi-pin-angle-fill": "\\f4ea",
        "bi-pin-angle": "\\f4eb",
        "bi-pin-fill": "\\f4ec",
        "bi-pin": "\\f4ed",
        "bi-pip-fill": "\\f4ee",
        "bi-pip": "\\f4ef",
        "bi-play-btn-fill": "\\f4f0",
        "bi-play-btn": "\\f4f1",
        "bi-play-circle-fill": "\\f4f2",
        "bi-play-circle": "\\f4f3",
        "bi-play-fill": "\\f4f4",
        "bi-play": "\\f4f5",
        "bi-plug-fill": "\\f4f6",
        "bi-plug": "\\f4f7",
        "bi-plus-circle-dotted": "\\f4f8",
        "bi-plus-circle-fill": "\\f4f9",
        "bi-plus-circle": "\\f4fa",
        "bi-plus-square-dotted": "\\f4fb",
        "bi-plus-square-fill": "\\f4fc",
        "bi-plus-square": "\\f4fd",
        "bi-plus": "\\f4fe",
        "bi-power": "\\f4ff",
        "bi-printer-fill": "\\f500",
        "bi-printer": "\\f501",
        "bi-puzzle-fill": "\\f502",
        "bi-puzzle": "\\f503",
        "bi-question-circle-fill": "\\f504",
        "bi-question-circle": "\\f505",
        "bi-question-diamond-fill": "\\f506",
        "bi-question-diamond": "\\f507",
        "bi-question-octagon-fill": "\\f508",
        "bi-question-octagon": "\\f509",
        "bi-question-square-fill": "\\f50a",
        "bi-question-square": "\\f50b",
        "bi-question": "\\f50c",
        "bi-rainbow": "\\f50d",
        "bi-receipt-cutoff": "\\f50e",
        "bi-receipt": "\\f50f",
        "bi-reception-0": "\\f510",
        "bi-reception-1": "\\f511",
        "bi-reception-2": "\\f512",
        "bi-reception-3": "\\f513",
        "bi-reception-4": "\\f514",
        "bi-record-btn-fill": "\\f515",
        "bi-record-btn": "\\f516",
        "bi-record-circle-fill": "\\f517",
        "bi-record-circle": "\\f518",
        "bi-record-fill": "\\f519",
        "bi-record": "\\f51a",
        "bi-record2-fill": "\\f51b",
        "bi-record2": "\\f51c",
        "bi-reply-all-fill": "\\f51d",
        "bi-reply-all": "\\f51e",
        "bi-reply-fill": "\\f51f",
        "bi-reply": "\\f520",
        "bi-rss-fill": "\\f521",
        "bi-rss": "\\f522",
        "bi-rulers": "\\f523",
        "bi-save-fill": "\\f524",
        "bi-save": "\\f525",
        "bi-save2-fill": "\\f526",
        "bi-save2": "\\f527",
        "bi-scissors": "\\f528",
        "bi-screwdriver": "\\f529",
        "bi-search": "\\f52a",
        "bi-segmented-nav": "\\f52b",
        "bi-server": "\\f52c",
        "bi-share-fill": "\\f52d",
        "bi-share": "\\f52e",
        "bi-shield-check": "\\f52f",
        "bi-shield-exclamation": "\\f530",
        "bi-shield-fill-check": "\\f531",
        "bi-shield-fill-exclamation": "\\f532",
        "bi-shield-fill-minus": "\\f533",
        "bi-shield-fill-plus": "\\f534",
        "bi-shield-fill-x": "\\f535",
        "bi-shield-fill": "\\f536",
        "bi-shield-lock-fill": "\\f537",
        "bi-shield-lock": "\\f538",
        "bi-shield-minus": "\\f539",
        "bi-shield-plus": "\\f53a",
        "bi-shield-shaded": "\\f53b",
        "bi-shield-slash-fill": "\\f53c",
        "bi-shield-slash": "\\f53d",
        "bi-shield-x": "\\f53e",
        "bi-shield": "\\f53f",
        "bi-shift-fill": "\\f540",
        "bi-shift": "\\f541",
        "bi-shop-window": "\\f542",
        "bi-shop": "\\f543",
        "bi-shuffle": "\\f544",
        "bi-signpost-2-fill": "\\f545",
        "bi-signpost-2": "\\f546",
        "bi-signpost-fill": "\\f547",
        "bi-signpost-split-fill": "\\f548",
        "bi-signpost-split": "\\f549",
        "bi-signpost": "\\f54a",
        "bi-sim-fill": "\\f54b",
        "bi-sim": "\\f54c",
        "bi-skip-backward-btn-fill": "\\f54d",
        "bi-skip-backward-btn": "\\f54e",
        "bi-skip-backward-circle-fill": "\\f54f",
        "bi-skip-backward-circle": "\\f550",
        "bi-skip-backward-fill": "\\f551",
        "bi-skip-backward": "\\f552",
        "bi-skip-end-btn-fill": "\\f553",
        "bi-skip-end-btn": "\\f554",
        "bi-skip-end-circle-fill": "\\f555",
        "bi-skip-end-circle": "\\f556",
        "bi-skip-end-fill": "\\f557",
        "bi-skip-end": "\\f558",
        "bi-skip-forward-btn-fill": "\\f559",
        "bi-skip-forward-btn": "\\f55a",
        "bi-skip-forward-circle-fill": "\\f55b",
        "bi-skip-forward-circle": "\\f55c",
        "bi-skip-forward-fill": "\\f55d",
        "bi-skip-forward": "\\f55e",
        "bi-skip-start-btn-fill": "\\f55f",
        "bi-skip-start-btn": "\\f560",
        "bi-skip-start-circle-fill": "\\f561",
        "bi-skip-start-circle": "\\f562",
        "bi-skip-start-fill": "\\f563",
        "bi-skip-start": "\\f564",
        "bi-slack": "\\f565",
        "bi-slash-circle-fill": "\\f566",
        "bi-slash-circle": "\\f567",
        "bi-slash-square-fill": "\\f568",
        "bi-slash-square": "\\f569",
        "bi-slash": "\\f56a",
        "bi-sliders": "\\f56b",
        "bi-smartwatch": "\\f56c",
        "bi-snow": "\\f56d",
        "bi-snow2": "\\f56e",
        "bi-snow3": "\\f56f",
        "bi-sort-alpha-down-alt": "\\f570",
        "bi-sort-alpha-down": "\\f571",
        "bi-sort-alpha-up-alt": "\\f572",
        "bi-sort-alpha-up": "\\f573",
        "bi-sort-down-alt": "\\f574",
        "bi-sort-down": "\\f575",
        "bi-sort-numeric-down-alt": "\\f576",
        "bi-sort-numeric-down": "\\f577",
        "bi-sort-numeric-up-alt": "\\f578",
        "bi-sort-numeric-up": "\\f579",
        "bi-sort-up-alt": "\\f57a",
        "bi-sort-up": "\\f57b",
        "bi-soundwave": "\\f57c",
        "bi-speaker-fill": "\\f57d",
        "bi-speaker": "\\f57e",
        "bi-speedometer": "\\f57f",
        "bi-speedometer2": "\\f580",
        "bi-spellcheck": "\\f581",
        "bi-square-fill": "\\f582",
        "bi-square-half": "\\f583",
        "bi-square": "\\f584",
        "bi-stack": "\\f585",
        "bi-star-fill": "\\f586",
        "bi-star-half": "\\f587",
        "bi-star": "\\f588",
        "bi-stars": "\\f589",
        "bi-stickies-fill": "\\f58a",
        "bi-stickies": "\\f58b",
        "bi-sticky-fill": "\\f58c",
        "bi-sticky": "\\f58d",
        "bi-stop-btn-fill": "\\f58e",
        "bi-stop-btn": "\\f58f",
        "bi-stop-circle-fill": "\\f590",
        "bi-stop-circle": "\\f591",
        "bi-stop-fill": "\\f592",
        "bi-stop": "\\f593",
        "bi-stoplights-fill": "\\f594",
        "bi-stoplights": "\\f595",
        "bi-stopwatch-fill": "\\f596",
        "bi-stopwatch": "\\f597",
        "bi-subtract": "\\f598",
        "bi-suit-club-fill": "\\f599",
        "bi-suit-club": "\\f59a",
        "bi-suit-diamond-fill": "\\f59b",
        "bi-suit-diamond": "\\f59c",
        "bi-suit-heart-fill": "\\f59d",
        "bi-suit-heart": "\\f59e",
        "bi-suit-spade-fill": "\\f59f",
        "bi-suit-spade": "\\f5a0",
        "bi-sun-fill": "\\f5a1",
        "bi-sun": "\\f5a2",
        "bi-sunglasses": "\\f5a3",
        "bi-sunrise-fill": "\\f5a4",
        "bi-sunrise": "\\f5a5",
        "bi-sunset-fill": "\\f5a6",
        "bi-sunset": "\\f5a7",
        "bi-symmetry-horizontal": "\\f5a8",
        "bi-symmetry-vertical": "\\f5a9",
        "bi-table": "\\f5aa",
        "bi-tablet-fill": "\\f5ab",
        "bi-tablet-landscape-fill": "\\f5ac",
        "bi-tablet-landscape": "\\f5ad",
        "bi-tablet": "\\f5ae",
        "bi-tag-fill": "\\f5af",
        "bi-tag": "\\f5b0",
        "bi-tags-fill": "\\f5b1",
        "bi-tags": "\\f5b2",
        "bi-telegram": "\\f5b3",
        "bi-telephone-fill": "\\f5b4",
        "bi-telephone-forward-fill": "\\f5b5",
        "bi-telephone-forward": "\\f5b6",
        "bi-telephone-inbound-fill": "\\f5b7",
        "bi-telephone-inbound": "\\f5b8",
        "bi-telephone-minus-fill": "\\f5b9",
        "bi-telephone-minus": "\\f5ba",
        "bi-telephone-outbound-fill": "\\f5bb",
        "bi-telephone-outbound": "\\f5bc",
        "bi-telephone-plus-fill": "\\f5bd",
        "bi-telephone-plus": "\\f5be",
        "bi-telephone-x-fill": "\\f5bf",
        "bi-telephone-x": "\\f5c0",
        "bi-telephone": "\\f5c1",
        "bi-terminal-fill": "\\f5c2",
        "bi-terminal": "\\f5c3",
        "bi-text-center": "\\f5c4",
        "bi-text-indent-left": "\\f5c5",
        "bi-text-indent-right": "\\f5c6",
        "bi-text-left": "\\f5c7",
        "bi-text-paragraph": "\\f5c8",
        "bi-text-right": "\\f5c9",
        "bi-textarea-resize": "\\f5ca",
        "bi-textarea-t": "\\f5cb",
        "bi-textarea": "\\f5cc",
        "bi-thermometer-half": "\\f5cd",
        "bi-thermometer-high": "\\f5ce",
        "bi-thermometer-low": "\\f5cf",
        "bi-thermometer-snow": "\\f5d0",
        "bi-thermometer-sun": "\\f5d1",
        "bi-thermometer": "\\f5d2",
        "bi-three-dots-vertical": "\\f5d3",
        "bi-three-dots": "\\f5d4",
        "bi-toggle-off": "\\f5d5",
        "bi-toggle-on": "\\f5d6",
        "bi-toggle2-off": "\\f5d7",
        "bi-toggle2-on": "\\f5d8",
        "bi-toggles": "\\f5d9",
        "bi-toggles2": "\\f5da",
        "bi-tools": "\\f5db",
        "bi-tornado": "\\f5dc",
        "bi-trash-fill": "\\f5dd",
        "bi-trash": "\\f5de",
        "bi-trash2-fill": "\\f5df",
        "bi-trash2": "\\f5e0",
        "bi-tree-fill": "\\f5e1",
        "bi-tree": "\\f5e2",
        "bi-triangle-fill": "\\f5e3",
        "bi-triangle-half": "\\f5e4",
        "bi-triangle": "\\f5e5",
        "bi-trophy-fill": "\\f5e6",
        "bi-trophy": "\\f5e7",
        "bi-tropical-storm": "\\f5e8",
        "bi-truck-flatbed": "\\f5e9",
        "bi-truck": "\\f5ea",
        "bi-tsunami": "\\f5eb",
        "bi-tv-fill": "\\f5ec",
        "bi-tv": "\\f5ed",
        "bi-twitch": "\\f5ee",
        "bi-twitter": "\\f5ef",
        "bi-type-bold": "\\f5f0",
        "bi-type-h1": "\\f5f1",
        "bi-type-h2": "\\f5f2",
        "bi-type-h3": "\\f5f3",
        "bi-type-italic": "\\f5f4",
        "bi-type-strikethrough": "\\f5f5",
        "bi-type-underline": "\\f5f6",
        "bi-type": "\\f5f7",
        "bi-ui-checks-grid": "\\f5f8",
        "bi-ui-checks": "\\f5f9",
        "bi-ui-radios-grid": "\\f5fa",
        "bi-ui-radios": "\\f5fb",
        "bi-umbrella-fill": "\\f5fc",
        "bi-umbrella": "\\f5fd",
        "bi-union": "\\f5fe",
        "bi-unlock-fill": "\\f5ff",
        "bi-unlock": "\\f600",
        "bi-upc-scan": "\\f601",
        "bi-upc": "\\f602",
        "bi-upload": "\\f603",
        "bi-vector-pen": "\\f604",
        "bi-view-list": "\\f605",
        "bi-view-stacked": "\\f606",
        "bi-vinyl-fill": "\\f607",
        "bi-vinyl": "\\f608",
        "bi-voicemail": "\\f609",
        "bi-volume-down-fill": "\\f60a",
        "bi-volume-down": "\\f60b",
        "bi-volume-mute-fill": "\\f60c",
        "bi-volume-mute": "\\f60d",
        "bi-volume-off-fill": "\\f60e",
        "bi-volume-off": "\\f60f",
        "bi-volume-up-fill": "\\f610",
        "bi-volume-up": "\\f611",
        "bi-vr": "\\f612",
        "bi-wallet-fill": "\\f613",
        "bi-wallet": "\\f614",
        "bi-wallet2": "\\f615",
        "bi-watch": "\\f616",
        "bi-water": "\\f617",
        "bi-whatsapp": "\\f618",
        "bi-wifi-1": "\\f619",
        "bi-wifi-2": "\\f61a",
        "bi-wifi-off": "\\f61b",
        "bi-wifi": "\\f61c",
        "bi-wind": "\\f61d",
        "bi-window-dock": "\\f61e",
        "bi-window-sidebar": "\\f61f",
        "bi-window": "\\f620",
        "bi-wrench": "\\f621",
        "bi-x-circle-fill": "\\f622",
        "bi-x-circle": "\\f623",
        "bi-x-diamond-fill": "\\f624",
        "bi-x-diamond": "\\f625",
        "bi-x-octagon-fill": "\\f626",
        "bi-x-octagon": "\\f627",
        "bi-x-square-fill": "\\f628",
        "bi-x-square": "\\f629",
        "bi-x": "\\f62a",
        "bi-youtube": "\\f62b",
        "bi-zoom-in": "\\f62c",
        "bi-zoom-out": "\\f62d",
        "bi-bank": "\\f62e",
        "bi-bank2": "\\f62f",
        "bi-bell-slash-fill": "\\f630",
        "bi-bell-slash": "\\f631",
        "bi-cash-coin": "\\f632",
        "bi-check-lg": "\\f633",
        "bi-coin": "\\f634",
        "bi-currency-bitcoin": "\\f635",
        "bi-currency-dollar": "\\f636",
        "bi-currency-euro": "\\f637",
        "bi-currency-exchange": "\\f638",
        "bi-currency-pound": "\\f639",
        "bi-currency-yen": "\\f63a",
        "bi-dash-lg": "\\f63b",
        "bi-exclamation-lg": "\\f63c",
        "bi-file-earmark-pdf-fill": "\\f63d",
        "bi-file-earmark-pdf": "\\f63e",
        "bi-file-pdf-fill": "\\f63f",
        "bi-file-pdf": "\\f640",
        "bi-gender-ambiguous": "\\f641",
        "bi-gender-female": "\\f642",
        "bi-gender-male": "\\f643",
        "bi-gender-trans": "\\f644",
        "bi-headset-vr": "\\f645",
        "bi-info-lg": "\\f646",
        "bi-mastodon": "\\f647",
        "bi-messenger": "\\f648",
        "bi-piggy-bank-fill": "\\f649",
        "bi-piggy-bank": "\\f64a",
        "bi-pin-map-fill": "\\f64b",
        "bi-pin-map": "\\f64c",
        "bi-plus-lg": "\\f64d",
        "bi-question-lg": "\\f64e",
        "bi-recycle": "\\f64f",
        "bi-reddit": "\\f650",
        "bi-safe-fill": "\\f651",
        "bi-safe2-fill": "\\f652",
        "bi-safe2": "\\f653",
        "bi-sd-card-fill": "\\f654",
        "bi-sd-card": "\\f655",
        "bi-skype": "\\f656",
        "bi-slash-lg": "\\f657",
        "bi-translate": "\\f658",
        "bi-x-lg": "\\f659",
        "bi-safe": "\\f65a",
        "bi-apple": "\\f65b",
        "bi-microsoft": "\\f65d",
        "bi-windows": "\\f65e",
        "bi-behance": "\\f65c",
        "bi-dribbble": "\\f65f",
        "bi-line": "\\f660",
        "bi-medium": "\\f661",
        "bi-paypal": "\\f662",
        "bi-pinterest": "\\f663",
        "bi-signal": "\\f664",
        "bi-snapchat": "\\f665",
        "bi-spotify": "\\f666",
        "bi-stack-overflow": "\\f667",
        "bi-strava": "\\f668",
        "bi-wordpress": "\\f669",
        "bi-vimeo": "\\f66a",
        "bi-activity": "\\f66b",
        "bi-easel2-fill": "\\f66c",
        "bi-easel2": "\\f66d",
        "bi-easel3-fill": "\\f66e",
        "bi-easel3": "\\f66f",
        "bi-fan": "\\f670",
        "bi-fingerprint": "\\f671",
        "bi-graph-down-arrow": "\\f672",
        "bi-graph-up-arrow": "\\f673",
        "bi-hypnotize": "\\f674",
        "bi-magic": "\\f675",
        "bi-person-rolodex": "\\f676",
        "bi-person-video": "\\f677",
        "bi-person-video2": "\\f678",
        "bi-person-video3": "\\f679",
        "bi-person-workspace": "\\f67a",
        "bi-radioactive": "\\f67b",
        "bi-webcam-fill": "\\f67c",
        "bi-webcam": "\\f67d",
        "bi-yin-yang": "\\f67e",
        "bi-bandaid-fill": "\\f680",
        "bi-bandaid": "\\f681",
        "bi-bluetooth": "\\f682",
        "bi-body-text": "\\f683",
        "bi-boombox": "\\f684",
        "bi-boxes": "\\f685",
        "bi-dpad-fill": "\\f686",
        "bi-dpad": "\\f687",
        "bi-ear-fill": "\\f688",
        "bi-ear": "\\f689",
        "bi-envelope-check-fill": "\\f68b",
        "bi-envelope-check": "\\f68c",
        "bi-envelope-dash-fill": "\\f68e",
        "bi-envelope-dash": "\\f68f",
        "bi-envelope-exclamation-fill": "\\f691",
        "bi-envelope-exclamation": "\\f692",
        "bi-envelope-plus-fill": "\\f693",
        "bi-envelope-plus": "\\f694",
        "bi-envelope-slash-fill": "\\f696",
        "bi-envelope-slash": "\\f697",
        "bi-envelope-x-fill": "\\f699",
        "bi-envelope-x": "\\f69a",
        "bi-explicit-fill": "\\f69b",
        "bi-explicit": "\\f69c",
        "bi-git": "\\f69d",
        "bi-infinity": "\\f69e",
        "bi-list-columns-reverse": "\\f69f",
        "bi-list-columns": "\\f6a0",
        "bi-meta": "\\f6a1",
        "bi-nintendo-switch": "\\f6a4",
        "bi-pc-display-horizontal": "\\f6a5",
        "bi-pc-display": "\\f6a6",
        "bi-pc-horizontal": "\\f6a7",
        "bi-pc": "\\f6a8",
        "bi-playstation": "\\f6a9",
        "bi-plus-slash-minus": "\\f6aa",
        "bi-projector-fill": "\\f6ab",
        "bi-projector": "\\f6ac",
        "bi-qr-code-scan": "\\f6ad",
        "bi-qr-code": "\\f6ae",
        "bi-quora": "\\f6af",
        "bi-quote": "\\f6b0",
        "bi-robot": "\\f6b1",
        "bi-send-check-fill": "\\f6b2",
        "bi-send-check": "\\f6b3",
        "bi-send-dash-fill": "\\f6b4",
        "bi-send-dash": "\\f6b5",
        "bi-send-exclamation-fill": "\\f6b7",
        "bi-send-exclamation": "\\f6b8",
        "bi-send-fill": "\\f6b9",
        "bi-send-plus-fill": "\\f6ba",
        "bi-send-plus": "\\f6bb",
        "bi-send-slash-fill": "\\f6bc",
        "bi-send-slash": "\\f6bd",
        "bi-send-x-fill": "\\f6be",
        "bi-send-x": "\\f6bf",
        "bi-send": "\\f6c0",
        "bi-steam": "\\f6c1",
        "bi-terminal-dash": "\\f6c3",
        "bi-terminal-plus": "\\f6c4",
        "bi-terminal-split": "\\f6c5",
        "bi-ticket-detailed-fill": "\\f6c6",
        "bi-ticket-detailed": "\\f6c7",
        "bi-ticket-fill": "\\f6c8",
        "bi-ticket-perforated-fill": "\\f6c9",
        "bi-ticket-perforated": "\\f6ca",
        "bi-ticket": "\\f6cb",
        "bi-tiktok": "\\f6cc",
        "bi-window-dash": "\\f6cd",
        "bi-window-desktop": "\\f6ce",
        "bi-window-fullscreen": "\\f6cf",
        "bi-window-plus": "\\f6d0",
        "bi-window-split": "\\f6d1",
        "bi-window-stack": "\\f6d2",
        "bi-window-x": "\\f6d3",
        "bi-xbox": "\\f6d4",
        "bi-ethernet": "\\f6d5",
        "bi-hdmi-fill": "\\f6d6",
        "bi-hdmi": "\\f6d7",
        "bi-usb-c-fill": "\\f6d8",
        "bi-usb-c": "\\f6d9",
        "bi-usb-fill": "\\f6da",
        "bi-usb-plug-fill": "\\f6db",
        "bi-usb-plug": "\\f6dc",
        "bi-usb-symbol": "\\f6dd",
        "bi-usb": "\\f6de",
        "bi-boombox-fill": "\\f6df",
        "bi-displayport": "\\f6e1",
        "bi-gpu-card": "\\f6e2",
        "bi-memory": "\\f6e3",
        "bi-modem-fill": "\\f6e4",
        "bi-modem": "\\f6e5",
        "bi-motherboard-fill": "\\f6e6",
        "bi-motherboard": "\\f6e7",
        "bi-optical-audio-fill": "\\f6e8",
        "bi-optical-audio": "\\f6e9",
        "bi-pci-card": "\\f6ea",
        "bi-router-fill": "\\f6eb",
        "bi-router": "\\f6ec",
        "bi-thunderbolt-fill": "\\f6ef",
        "bi-thunderbolt": "\\f6f0",
        "bi-usb-drive-fill": "\\f6f1",
        "bi-usb-drive": "\\f6f2",
        "bi-usb-micro-fill": "\\f6f3",
        "bi-usb-micro": "\\f6f4",
        "bi-usb-mini-fill": "\\f6f5",
        "bi-usb-mini": "\\f6f6",
        "bi-cloud-haze2": "\\f6f7",
        "bi-device-hdd-fill": "\\f6f8",
        "bi-device-hdd": "\\f6f9",
        "bi-device-ssd-fill": "\\f6fa",
        "bi-device-ssd": "\\f6fb",
        "bi-displayport-fill": "\\f6fc",
        "bi-mortarboard-fill": "\\f6fd",
        "bi-mortarboard": "\\f6fe",
        "bi-terminal-x": "\\f6ff",
        "bi-arrow-through-heart-fill": "\\f700",
        "bi-arrow-through-heart": "\\f701",
        "bi-badge-sd-fill": "\\f702",
        "bi-badge-sd": "\\f703",
        "bi-bag-heart-fill": "\\f704",
        "bi-bag-heart": "\\f705",
        "bi-balloon-fill": "\\f706",
        "bi-balloon-heart-fill": "\\f707",
        "bi-balloon-heart": "\\f708",
        "bi-balloon": "\\f709",
        "bi-box2-fill": "\\f70a",
        "bi-box2-heart-fill": "\\f70b",
        "bi-box2-heart": "\\f70c",
        "bi-box2": "\\f70d",
        "bi-braces-asterisk": "\\f70e",
        "bi-calendar-heart-fill": "\\f70f",
        "bi-calendar-heart": "\\f710",
        "bi-calendar2-heart-fill": "\\f711",
        "bi-calendar2-heart": "\\f712",
        "bi-chat-heart-fill": "\\f713",
        "bi-chat-heart": "\\f714",
        "bi-chat-left-heart-fill": "\\f715",
        "bi-chat-left-heart": "\\f716",
        "bi-chat-right-heart-fill": "\\f717",
        "bi-chat-right-heart": "\\f718",
        "bi-chat-square-heart-fill": "\\f719",
        "bi-chat-square-heart": "\\f71a",
        "bi-clipboard-check-fill": "\\f71b",
        "bi-clipboard-data-fill": "\\f71c",
        "bi-clipboard-fill": "\\f71d",
        "bi-clipboard-heart-fill": "\\f71e",
        "bi-clipboard-heart": "\\f71f",
        "bi-clipboard-minus-fill": "\\f720",
        "bi-clipboard-plus-fill": "\\f721",
        "bi-clipboard-pulse": "\\f722",
        "bi-clipboard-x-fill": "\\f723",
        "bi-clipboard2-check-fill": "\\f724",
        "bi-clipboard2-check": "\\f725",
        "bi-clipboard2-data-fill": "\\f726",
        "bi-clipboard2-data": "\\f727",
        "bi-clipboard2-fill": "\\f728",
        "bi-clipboard2-heart-fill": "\\f729",
        "bi-clipboard2-heart": "\\f72a",
        "bi-clipboard2-minus-fill": "\\f72b",
        "bi-clipboard2-minus": "\\f72c",
        "bi-clipboard2-plus-fill": "\\f72d",
        "bi-clipboard2-plus": "\\f72e",
        "bi-clipboard2-pulse-fill": "\\f72f",
        "bi-clipboard2-pulse": "\\f730",
        "bi-clipboard2-x-fill": "\\f731",
        "bi-clipboard2-x": "\\f732",
        "bi-clipboard2": "\\f733",
        "bi-emoji-kiss-fill": "\\f734",
        "bi-emoji-kiss": "\\f735",
        "bi-envelope-heart-fill": "\\f736",
        "bi-envelope-heart": "\\f737",
        "bi-envelope-open-heart-fill": "\\f738",
        "bi-envelope-open-heart": "\\f739",
        "bi-envelope-paper-fill": "\\f73a",
        "bi-envelope-paper-heart-fill": "\\f73b",
        "bi-envelope-paper-heart": "\\f73c",
        "bi-envelope-paper": "\\f73d",
        "bi-filetype-aac": "\\f73e",
        "bi-filetype-ai": "\\f73f",
        "bi-filetype-bmp": "\\f740",
        "bi-filetype-cs": "\\f741",
        "bi-filetype-css": "\\f742",
        "bi-filetype-csv": "\\f743",
        "bi-filetype-doc": "\\f744",
        "bi-filetype-docx": "\\f745",
        "bi-filetype-exe": "\\f746",
        "bi-filetype-gif": "\\f747",
        "bi-filetype-heic": "\\f748",
        "bi-filetype-html": "\\f749",
        "bi-filetype-java": "\\f74a",
        "bi-filetype-jpg": "\\f74b",
        "bi-filetype-js": "\\f74c",
        "bi-filetype-jsx": "\\f74d",
        "bi-filetype-key": "\\f74e",
        "bi-filetype-m4p": "\\f74f",
        "bi-filetype-md": "\\f750",
        "bi-filetype-mdx": "\\f751",
        "bi-filetype-mov": "\\f752",
        "bi-filetype-mp3": "\\f753",
        "bi-filetype-mp4": "\\f754",
        "bi-filetype-otf": "\\f755",
        "bi-filetype-pdf": "\\f756",
        "bi-filetype-php": "\\f757",
        "bi-filetype-png": "\\f758",
        "bi-filetype-ppt": "\\f75a",
        "bi-filetype-psd": "\\f75b",
        "bi-filetype-py": "\\f75c",
        "bi-filetype-raw": "\\f75d",
        "bi-filetype-rb": "\\f75e",
        "bi-filetype-sass": "\\f75f",
        "bi-filetype-scss": "\\f760",
        "bi-filetype-sh": "\\f761",
        "bi-filetype-svg": "\\f762",
        "bi-filetype-tiff": "\\f763",
        "bi-filetype-tsx": "\\f764",
        "bi-filetype-ttf": "\\f765",
        "bi-filetype-txt": "\\f766",
        "bi-filetype-wav": "\\f767",
        "bi-filetype-woff": "\\f768",
        "bi-filetype-xls": "\\f76a",
        "bi-filetype-xml": "\\f76b",
        "bi-filetype-yml": "\\f76c",
        "bi-heart-arrow": "\\f76d",
        "bi-heart-pulse-fill": "\\f76e",
        "bi-heart-pulse": "\\f76f",
        "bi-heartbreak-fill": "\\f770",
        "bi-heartbreak": "\\f771",
        "bi-hearts": "\\f772",
        "bi-hospital-fill": "\\f773",
        "bi-hospital": "\\f774",
        "bi-house-heart-fill": "\\f775",
        "bi-house-heart": "\\f776",
        "bi-incognito": "\\f777",
        "bi-magnet-fill": "\\f778",
        "bi-magnet": "\\f779",
        "bi-person-heart": "\\f77a",
        "bi-person-hearts": "\\f77b",
        "bi-phone-flip": "\\f77c",
        "bi-plugin": "\\f77d",
        "bi-postage-fill": "\\f77e",
        "bi-postage-heart-fill": "\\f77f",
        "bi-postage-heart": "\\f780",
        "bi-postage": "\\f781",
        "bi-postcard-fill": "\\f782",
        "bi-postcard-heart-fill": "\\f783",
        "bi-postcard-heart": "\\f784",
        "bi-postcard": "\\f785",
        "bi-search-heart-fill": "\\f786",
        "bi-search-heart": "\\f787",
        "bi-sliders2-vertical": "\\f788",
        "bi-sliders2": "\\f789",
        "bi-trash3-fill": "\\f78a",
        "bi-trash3": "\\f78b",
        "bi-valentine": "\\f78c",
        "bi-valentine2": "\\f78d",
        "bi-wrench-adjustable-circle-fill": "\\f78e",
        "bi-wrench-adjustable-circle": "\\f78f",
        "bi-wrench-adjustable": "\\f790",
        "bi-filetype-json": "\\f791",
        "bi-filetype-pptx": "\\f792",
        "bi-filetype-xlsx": "\\f793",
        "bi-1-circle-fill": "\\f796",
        "bi-1-circle": "\\f797",
        "bi-1-square-fill": "\\f798",
        "bi-1-square": "\\f799",
        "bi-2-circle-fill": "\\f79c",
        "bi-2-circle": "\\f79d",
        "bi-2-square-fill": "\\f79e",
        "bi-2-square": "\\f79f",
        "bi-3-circle-fill": "\\f7a2",
        "bi-3-circle": "\\f7a3",
        "bi-3-square-fill": "\\f7a4",
        "bi-3-square": "\\f7a5",
        "bi-4-circle-fill": "\\f7a8",
        "bi-4-circle": "\\f7a9",
        "bi-4-square-fill": "\\f7aa",
        "bi-4-square": "\\f7ab",
        "bi-5-circle-fill": "\\f7ae",
        "bi-5-circle": "\\f7af",
        "bi-5-square-fill": "\\f7b0",
        "bi-5-square": "\\f7b1",
        "bi-6-circle-fill": "\\f7b4",
        "bi-6-circle": "\\f7b5",
        "bi-6-square-fill": "\\f7b6",
        "bi-6-square": "\\f7b7",
        "bi-7-circle-fill": "\\f7ba",
        "bi-7-circle": "\\f7bb",
        "bi-7-square-fill": "\\f7bc",
        "bi-7-square": "\\f7bd",
        "bi-8-circle-fill": "\\f7c0",
        "bi-8-circle": "\\f7c1",
        "bi-8-square-fill": "\\f7c2",
        "bi-8-square": "\\f7c3",
        "bi-9-circle-fill": "\\f7c6",
        "bi-9-circle": "\\f7c7",
        "bi-9-square-fill": "\\f7c8",
        "bi-9-square": "\\f7c9",
        "bi-airplane-engines-fill": "\\f7ca",
        "bi-airplane-engines": "\\f7cb",
        "bi-airplane-fill": "\\f7cc",
        "bi-airplane": "\\f7cd",
        "bi-alexa": "\\f7ce",
        "bi-alipay": "\\f7cf",
        "bi-android": "\\f7d0",
        "bi-android2": "\\f7d1",
        "bi-box-fill": "\\f7d2",
        "bi-box-seam-fill": "\\f7d3",
        "bi-browser-chrome": "\\f7d4",
        "bi-browser-edge": "\\f7d5",
        "bi-browser-firefox": "\\f7d6",
        "bi-browser-safari": "\\f7d7",
        "bi-c-circle-fill": "\\f7da",
        "bi-c-circle": "\\f7db",
        "bi-c-square-fill": "\\f7dc",
        "bi-c-square": "\\f7dd",
        "bi-capsule-pill": "\\f7de",
        "bi-capsule": "\\f7df",
        "bi-car-front-fill": "\\f7e0",
        "bi-car-front": "\\f7e1",
        "bi-cassette-fill": "\\f7e2",
        "bi-cassette": "\\f7e3",
        "bi-cc-circle-fill": "\\f7e6",
        "bi-cc-circle": "\\f7e7",
        "bi-cc-square-fill": "\\f7e8",
        "bi-cc-square": "\\f7e9",
        "bi-cup-hot-fill": "\\f7ea",
        "bi-cup-hot": "\\f7eb",
        "bi-currency-rupee": "\\f7ec",
        "bi-dropbox": "\\f7ed",
        "bi-escape": "\\f7ee",
        "bi-fast-forward-btn-fill": "\\f7ef",
        "bi-fast-forward-btn": "\\f7f0",
        "bi-fast-forward-circle-fill": "\\f7f1",
        "bi-fast-forward-circle": "\\f7f2",
        "bi-fast-forward-fill": "\\f7f3",
        "bi-fast-forward": "\\f7f4",
        "bi-filetype-sql": "\\f7f5",
        "bi-fire": "\\f7f6",
        "bi-google-play": "\\f7f7",
        "bi-h-circle-fill": "\\f7fa",
        "bi-h-circle": "\\f7fb",
        "bi-h-square-fill": "\\f7fc",
        "bi-h-square": "\\f7fd",
        "bi-indent": "\\f7fe",
        "bi-lungs-fill": "\\f7ff",
        "bi-lungs": "\\f800",
        "bi-microsoft-teams": "\\f801",
        "bi-p-circle-fill": "\\f804",
        "bi-p-circle": "\\f805",
        "bi-p-square-fill": "\\f806",
        "bi-p-square": "\\f807",
        "bi-pass-fill": "\\f808",
        "bi-pass": "\\f809",
        "bi-prescription": "\\f80a",
        "bi-prescription2": "\\f80b",
        "bi-r-circle-fill": "\\f80e",
        "bi-r-circle": "\\f80f",
        "bi-r-square-fill": "\\f810",
        "bi-r-square": "\\f811",
        "bi-repeat-1": "\\f812",
        "bi-repeat": "\\f813",
        "bi-rewind-btn-fill": "\\f814",
        "bi-rewind-btn": "\\f815",
        "bi-rewind-circle-fill": "\\f816",
        "bi-rewind-circle": "\\f817",
        "bi-rewind-fill": "\\f818",
        "bi-rewind": "\\f819",
        "bi-train-freight-front-fill": "\\f81a",
        "bi-train-freight-front": "\\f81b",
        "bi-train-front-fill": "\\f81c",
        "bi-train-front": "\\f81d",
        "bi-train-lightrail-front-fill": "\\f81e",
        "bi-train-lightrail-front": "\\f81f",
        "bi-truck-front-fill": "\\f820",
        "bi-truck-front": "\\f821",
        "bi-ubuntu": "\\f822",
        "bi-unindent": "\\f823",
        "bi-unity": "\\f824",
        "bi-universal-access-circle": "\\f825",
        "bi-universal-access": "\\f826",
        "bi-virus": "\\f827",
        "bi-virus2": "\\f828",
        "bi-wechat": "\\f829",
        "bi-yelp": "\\f82a",
        "bi-sign-stop-fill": "\\f82b",
        "bi-sign-stop-lights-fill": "\\f82c",
        "bi-sign-stop-lights": "\\f82d",
        "bi-sign-stop": "\\f82e",
        "bi-sign-turn-left-fill": "\\f82f",
        "bi-sign-turn-left": "\\f830",
        "bi-sign-turn-right-fill": "\\f831",
        "bi-sign-turn-right": "\\f832",
        "bi-sign-turn-slight-left-fill": "\\f833",
        "bi-sign-turn-slight-left": "\\f834",
        "bi-sign-turn-slight-right-fill": "\\f835",
        "bi-sign-turn-slight-right": "\\f836",
        "bi-sign-yield-fill": "\\f837",
        "bi-sign-yield": "\\f838",
        "bi-ev-station-fill": "\\f839",
        "bi-ev-station": "\\f83a",
        "bi-fuel-pump-diesel-fill": "\\f83b",
        "bi-fuel-pump-diesel": "\\f83c",
        "bi-fuel-pump-fill": "\\f83d",
        "bi-fuel-pump": "\\f83e",
        "bi-0-circle-fill": "\\f83f",
        "bi-0-circle": "\\f840",
        "bi-0-square-fill": "\\f841",
        "bi-0-square": "\\f842",
        "bi-rocket-fill": "\\f843",
        "bi-rocket-takeoff-fill": "\\f844",
        "bi-rocket-takeoff": "\\f845",
        "bi-rocket": "\\f846",
        "bi-stripe": "\\f847",
        "bi-subscript": "\\f848",
        "bi-superscript": "\\f849",
        "bi-trello": "\\f84a",
        "bi-envelope-at-fill": "\\f84b",
        "bi-envelope-at": "\\f84c",
        "bi-regex": "\\f84d",
        "bi-text-wrap": "\\f84e",
        "bi-sign-dead-end-fill": "\\f84f",
        "bi-sign-dead-end": "\\f850",
        "bi-sign-do-not-enter-fill": "\\f851",
        "bi-sign-do-not-enter": "\\f852",
        "bi-sign-intersection-fill": "\\f853",
        "bi-sign-intersection-side-fill": "\\f854",
        "bi-sign-intersection-side": "\\f855",
        "bi-sign-intersection-t-fill": "\\f856",
        "bi-sign-intersection-t": "\\f857",
        "bi-sign-intersection-y-fill": "\\f858",
        "bi-sign-intersection-y": "\\f859",
        "bi-sign-intersection": "\\f85a",
        "bi-sign-merge-left-fill": "\\f85b",
        "bi-sign-merge-left": "\\f85c",
        "bi-sign-merge-right-fill": "\\f85d",
        "bi-sign-merge-right": "\\f85e",
        "bi-sign-no-left-turn-fill": "\\f85f",
        "bi-sign-no-left-turn": "\\f860",
        "bi-sign-no-parking-fill": "\\f861",
        "bi-sign-no-parking": "\\f862",
        "bi-sign-no-right-turn-fill": "\\f863",
        "bi-sign-no-right-turn": "\\f864",
        "bi-sign-railroad-fill": "\\f865",
        "bi-sign-railroad": "\\f866",
        "bi-building-add": "\\f867",
        "bi-building-check": "\\f868",
        "bi-building-dash": "\\f869",
        "bi-building-down": "\\f86a",
        "bi-building-exclamation": "\\f86b",
        "bi-building-fill-add": "\\f86c",
        "bi-building-fill-check": "\\f86d",
        "bi-building-fill-dash": "\\f86e",
        "bi-building-fill-down": "\\f86f",
        "bi-building-fill-exclamation": "\\f870",
        "bi-building-fill-gear": "\\f871",
        "bi-building-fill-lock": "\\f872",
        "bi-building-fill-slash": "\\f873",
        "bi-building-fill-up": "\\f874",
        "bi-building-fill-x": "\\f875",
        "bi-building-fill": "\\f876",
        "bi-building-gear": "\\f877",
        "bi-building-lock": "\\f878",
        "bi-building-slash": "\\f879",
        "bi-building-up": "\\f87a",
        "bi-building-x": "\\f87b",
        "bi-buildings-fill": "\\f87c",
        "bi-buildings": "\\f87d",
        "bi-bus-front-fill": "\\f87e",
        "bi-bus-front": "\\f87f",
        "bi-ev-front-fill": "\\f880",
        "bi-ev-front": "\\f881",
        "bi-globe-americas": "\\f882",
        "bi-globe-asia-australia": "\\f883",
        "bi-globe-central-south-asia": "\\f884",
        "bi-globe-europe-africa": "\\f885",
        "bi-house-add-fill": "\\f886",
        "bi-house-add": "\\f887",
        "bi-house-check-fill": "\\f888",
        "bi-house-check": "\\f889",
        "bi-house-dash-fill": "\\f88a",
        "bi-house-dash": "\\f88b",
        "bi-house-down-fill": "\\f88c",
        "bi-house-down": "\\f88d",
        "bi-house-exclamation-fill": "\\f88e",
        "bi-house-exclamation": "\\f88f",
        "bi-house-gear-fill": "\\f890",
        "bi-house-gear": "\\f891",
        "bi-house-lock-fill": "\\f892",
        "bi-house-lock": "\\f893",
        "bi-house-slash-fill": "\\f894",
        "bi-house-slash": "\\f895",
        "bi-house-up-fill": "\\f896",
        "bi-house-up": "\\f897",
        "bi-house-x-fill": "\\f898",
        "bi-house-x": "\\f899",
        "bi-person-add": "\\f89a",
        "bi-person-down": "\\f89b",
        "bi-person-exclamation": "\\f89c",
        "bi-person-fill-add": "\\f89d",
        "bi-person-fill-check": "\\f89e",
        "bi-person-fill-dash": "\\f89f",
        "bi-person-fill-down": "\\f8a0",
        "bi-person-fill-exclamation": "\\f8a1",
        "bi-person-fill-gear": "\\f8a2",
        "bi-person-fill-lock": "\\f8a3",
        "bi-person-fill-slash": "\\f8a4",
        "bi-person-fill-up": "\\f8a5",
        "bi-person-fill-x": "\\f8a6",
        "bi-person-gear": "\\f8a7",
        "bi-person-lock": "\\f8a8",
        "bi-person-slash": "\\f8a9",
        "bi-person-up": "\\f8aa",
        "bi-scooter": "\\f8ab",
        "bi-taxi-front-fill": "\\f8ac",
        "bi-taxi-front": "\\f8ad",
        "bi-amd": "\\f8ae",
        "bi-database-add": "\\f8af",
        "bi-database-check": "\\f8b0",
        "bi-database-dash": "\\f8b1",
        "bi-database-down": "\\f8b2",
        "bi-database-exclamation": "\\f8b3",
        "bi-database-fill-add": "\\f8b4",
        "bi-database-fill-check": "\\f8b5",
        "bi-database-fill-dash": "\\f8b6",
        "bi-database-fill-down": "\\f8b7",
        "bi-database-fill-exclamation": "\\f8b8",
        "bi-database-fill-gear": "\\f8b9",
        "bi-database-fill-lock": "\\f8ba",
        "bi-database-fill-slash": "\\f8bb",
        "bi-database-fill-up": "\\f8bc",
        "bi-database-fill-x": "\\f8bd",
        "bi-database-fill": "\\f8be",
        "bi-database-gear": "\\f8bf",
        "bi-database-lock": "\\f8c0",
        "bi-database-slash": "\\f8c1",
        "bi-database-up": "\\f8c2",
        "bi-database-x": "\\f8c3",
        "bi-database": "\\f8c4",
        "bi-houses-fill": "\\f8c5",
        "bi-houses": "\\f8c6",
        "bi-nvidia": "\\f8c7",
        "bi-person-vcard-fill": "\\f8c8",
        "bi-person-vcard": "\\f8c9",
        "bi-sina-weibo": "\\f8ca",
        "bi-tencent-qq": "\\f8cb",
        "bi-wikipedia": "\\f8cc",
      };
      function bootstrapIcons(l) {
        return c[l];
      }
      function BIcon(l) {
        let { icon: t, className: o, type: f } = l;
        return bootstrapIcons(t)
          ? (0, a.jsx)("i", {
              className:
                s().dynamic([["36b6cec472ea907c", [t, bootstrapIcons(t)]]]) +
                " " +
                "bi "
                  .concat(t, " ")
                  .concat(null != f ? f : "", " ")
                  .concat(null != o ? o : ""),
              children: (0, a.jsx)(s(), {
                id: "36b6cec472ea907c",
                dynamic: [t, bootstrapIcons(t)],
                children: "."
                  .concat(t, '.__jsx-style-dynamic-selector:before{content:"')
                  .concat(bootstrapIcons(t), '"}'),
              }),
            })
          : (0, a.jsx)(a.Fragment, {});
      }
      function AudioProgressBar(l) {
        let { duration: t, currentProgress: o, ...d } = l,
          s = isNaN(o / t) ? 0 : o / t,
          c = { "--progress-width": s },
          u = f.useMemo(
            () =>
              Array.from({ length: 50 }, (l, t) => {
                let o = 20,
                  a = 0.3,
                  f = 0.5 * Math.random();
                return Math.abs(Math.sin(t * a) * o) + f * o;
              }),
            []
          );
        return (0, a.jsxs)("div", {
          className: "relative leading-none flex",
          style: c,
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute top-2 bottom-2 left-0 right-0 overflow-hidden flex items-center gap-1",
              children: u.map((l, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className:
                      "flex-shrink-0 w-1 h-3 max-h-full rounded bg-[#ced0d1] group-[.dark]:bg-current opacity-75 group-[.instagram.dark]:opacity-40 group-[.instagram.light]:bg-[#b2b2b2] group-[.instagram.light]:opacity-100",
                    style: { height: "".concat(l, "px") },
                  },
                  t
                )
              ),
            }),
            (0, a.jsx)("div", {
              className:
                "absolute top-2 bottom-2 left-0 right-0 overflow-hidden flex items-center gap-1 ease",
              style: { width: 100 * s + "%" },
              children: u.map((l, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className:
                      "flex-shrink-0 w-1 h-3 max-h-full rounded bg-[#858a8d] group-[.dark]:bg-[#bcc1c3] group-[.instagram.dark]:bg-white group-[.instagram.light]:bg-black",
                    style: { height: "".concat(l, "px") },
                  },
                  t
                )
              ),
            }),
            (0, a.jsx)("input", {
              type: "range",
              name: "progress",
              min: 0,
              max: t,
              value: o,
              step: 1e-19,
              className:
                "relative min-w-0 -mx-1.5 h-10 grow progress-bar bg-transparent appearance-none cursor-pointer transition-all before:absolute before:inset-0 before:h-full before:w-full [&::-webkit-slider-thumb]:opacity-0",
              ...d,
            }),
            (0, a.jsx)("div", {
              className:
                "absolute top-1/2 -translate-y-1/2 left-[calc(100%_*_var(--progress-width))] -translate-x-1/2 ease w-4 h-4 bg-[#50c2f7] group-[.dark]:bg-[#4badd7] rounded-full pointer-events-none group-[.instagram]:hidden",
            }),
          ],
        });
      }
      var u = { src: "/_next/static/media/bg-whatsapp.0e2e4ccb.png" },
        m = { src: "/_next/static/media/user-instagram.2ba0e841.jpg" },
        v = o(23839);
      function AudioUI(l) {
        var t, o;
        let [d, s] = (0, f.useState)(l.content.audio.src),
          [c, p] = (0, f.useState)(l.content.audio.src);
        (0, f.useEffect)(() => {
          var t, o;
          p(
            null === (o = l.content) || void 0 === o
              ? void 0
              : null === (t = o.image) || void 0 === t
              ? void 0
              : t.src
          );
        }, [l.content]),
          (0, f.useEffect)(() => {
            s(l.content.audio.src);
          }, [l]);
        let [h, x] = (0, f.useState)(0),
          [w, y] = (0, f.useState)(0),
          [k, j] = (0, f.useState)(!1),
          C = (0, f.useRef)(null),
          N = formatDurationDisplay(h),
          S = formatDurationDisplay(w),
          togglePlayPause = async () => {
            var l, t;
            if (k)
              try {
                await (null === (l = C.current) || void 0 === l
                  ? void 0
                  : l.pause()),
                  j(!1);
              } catch (l) {
                console.error("Fail to pause: " + l);
              }
            else
              try {
                await (null === (t = C.current) || void 0 === t
                  ? void 0
                  : t.play()),
                  j(!0);
              } catch (l) {
                console.error("Fail to play: " + l);
              }
          };
        function formatDurationDisplay(l) {
          let t = Math.floor(l / 60),
            o = Math.floor(l - 60 * t),
            a = [t, o].map((l) => (l < 10 ? "0" + l : l)).join(":");
          return a;
        }
        return (0, a.jsxs)("div", {
          className: "group "
            .concat(l.design.theme, " ")
            .concat(l.design.model),
          children: [
            (0, a.jsx)("audio", {
              playsInline: !0,
              ref: C,
              preload: "metadata",
              onDurationChange: (l) => x(l.currentTarget.duration),
              onPlaying: () => j(!0),
              onPause: () => j(!1),
              onTimeUpdate: (l) => {
                y(l.currentTarget.currentTime);
              },
              children: (0, a.jsx)("source", { src: d }),
            }),
            "instagram" === l.design.model
              ? (0, a.jsxs)("div", {
                  className:
                    "relative border border-theme p-8 rounded-xl flex items-end bg-white group-[.dark]:bg-black",
                  children: [
                    (0, a.jsx)(v.Z, {
                      src: c || m.src,
                      className: "w-8 h-8 rounded-full object-cover mr-2",
                    }),
                    (0, a.jsxs)("div", {
                      className: "grow",
                      children: [
                        !!(null === (t = l.content) || void 0 === t
                          ? void 0
                          : t.sender) &&
                          (0, a.jsx)("div", {
                            className:
                              "text-xs -mt-3 pb-1 text-black group-[.dark]:text-white font-medium",
                            children: l.content.sender,
                          }),
                        (0, a.jsxs)("div", {
                          className:
                            "relative bg-[#efefef] text-black group-[.dark]:bg-[#262626] group-[.dark]:text-[#f5f5f5] group-[.dark]:shadow-[0_1px_.5px_rgba(11,20,26,.13)] rounded-2xl flex justify-between items-center gap-4 py-2 px-3",
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: togglePlayPause,
                              "aria-label": k ? "Pause" : "Play",
                              className:
                                "transition group-[.light]:text-white group-[.dark]:hover:text-white leading-none relative",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute inset-1 rounded-full group-[.light]:bg-black",
                                }),
                                k
                                  ? (0, a.jsx)(BIcon, {
                                      icon: "bi-pause-circle-fill",
                                      className:
                                        "text-3xl relative block leading-none",
                                    })
                                  : (0, a.jsx)(BIcon, {
                                      icon: "bi-play-circle-fill",
                                      className:
                                        "text-3xl relative block leading-none",
                                    }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "relative grow",
                              children: (0, a.jsx)(AudioProgressBar, {
                                duration: h,
                                currentProgress: w,
                                onChange: (l) => {
                                  C.current &&
                                    ((C.current.currentTime =
                                      l.currentTarget.valueAsNumber),
                                    y(l.currentTarget.valueAsNumber));
                                },
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "text-xs p-1 min-w-[52px] text-center font-bold rounded-full bg-white group-[.dark]:bg-[#f5f5f5] text-black",
                              children: k || "00:00" !== S ? S : N,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className:
                    "relative p-8 rounded-xl bg-[#efeae2] group-[.dark]:bg-[#0b141a] overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full opacity-50 group-[.dark]:opacity-10",
                      style: { backgroundImage: "url(".concat(u.src, ")") },
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative bg-white text-[#9b8e8d] shadow-[0px_1px_0.5px_rgba(11,20,26,0.13)] group-[.dark]:bg-[#27353e] group-[.dark]:text-[#848488] group-[.dark]:shadow-[0_1px_.5px_rgba(11,20,26,.13)] rounded-r-xl rounded-bl-xl py-2 px-3",
                      children: [
                        !!(null === (o = l.content) || void 0 === o
                          ? void 0
                          : o.sender) &&
                          (0, a.jsx)("div", {
                            className: "text-xs text-green-500 font-medium",
                            children: l.content.sender,
                          }),
                        (0, a.jsxs)("div", {
                          className: "flex justify-between items-center gap-4",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "absolute top-0 right-full block w-2 h-3 text-white group-[.dark]:text-[#27353e]",
                              children: (0, a.jsxs)("svg", {
                                viewBox: "0 0 8 13",
                                height: "13",
                                width: "8",
                                preserveAspectRatio: "xMidYMid meet",
                                version: "1.1",
                                x: "0px",
                                y: "0px",
                                enableBackground: "new 0 0 8 13",
                                children: [
                                  (0, a.jsx)("title", { children: "tail-in" }),
                                  (0, a.jsx)("path", {
                                    opacity: "0.13",
                                    fill: "#0000000",
                                    d: "M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z",
                                  }),
                                  (0, a.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("button", {
                              onClick: togglePlayPause,
                              "aria-label": k ? "Pause" : "Play",
                              className:
                                "transition hover:text-[#8b7e7e] group-[.dark]:hover:text-[#bcc1c3] leading-none",
                              children: k
                                ? (0, a.jsx)(BIcon, {
                                    icon: "bi-pause-fill",
                                    className: "text-4xl",
                                  })
                                : (0, a.jsx)(BIcon, {
                                    icon: "bi-play-fill",
                                    className: "text-4xl",
                                  }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "relative grow shrink min-w-0",
                              children: [
                                (0, a.jsx)(AudioProgressBar, {
                                  duration: h,
                                  currentProgress: w,
                                  onChange: (l) => {
                                    C.current &&
                                      ((C.current.currentTime =
                                        l.currentTarget.valueAsNumber),
                                      y(l.currentTarget.valueAsNumber));
                                  },
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "absolute top-full left-1 -mt-1 text-xs text-[#8696a0] group-[.dark]:text-current ",
                                  children: k || "00:00" !== S ? S : N,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "relative ml-2 shrink-0",
                              children: [
                                c
                                  ? (0, a.jsx)(v.Z, {
                                      src: c,
                                      className:
                                        "w-14 h-14 rounded-full object-cover",
                                    })
                                  : (0, a.jsxs)("svg", {
                                      viewBox: "0 0 212 212",
                                      height: "56",
                                      width: "56",
                                      preserveAspectRatio: "xMidYMid meet",
                                      version: "1.1",
                                      x: "0px",
                                      y: "0px",
                                      "enable-background": "new 0 0 212 212",
                                      children: [
                                        (0, a.jsx)("title", {
                                          children: "default-user",
                                        }),
                                        (0, a.jsx)("path", {
                                          fill: "#DFE5E7",
                                          d: "M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z",
                                        }),
                                        (0, a.jsxs)("g", {
                                          children: [
                                            (0, a.jsx)("path", {
                                              fill: "#FFFFFF",
                                              d: "M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z",
                                            }),
                                            (0, a.jsx)("path", {
                                              fill: "#FFFFFF",
                                              d: "M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                (0, a.jsxs)("svg", {
                                  className:
                                    "absolute -bottom-1 -left-1 w-6 h-[33px] text-[#50c2f7] group-[.dark]:text-[#53bdeb]",
                                  viewBox: "0 0 19 26",
                                  height: "26",
                                  width: "19",
                                  preserveAspectRatio: "xMidYMid meet",
                                  version: "1.1",
                                  x: "0px",
                                  y: "0px",
                                  enableBackground: "new 0 0 19 26",
                                  children: [
                                    (0, a.jsx)("title", {
                                      children: "ptt-status",
                                    }),
                                    (0, a.jsx)("path", {
                                      className:
                                        "fill-white group-[.dark]:fill-[#27353e]",
                                      d: "M9.217,24.401c-1.158,0-2.1-0.941-2.1-2.1v-2.366c-2.646-0.848-4.652-3.146-5.061-5.958L2.004,13.62 l-0.003-0.081c-0.021-0.559,0.182-1.088,0.571-1.492c0.39-0.404,0.939-0.637,1.507-0.637h0.3c0.254,0,0.498,0.044,0.724,0.125v-6.27 C5.103,2.913,7.016,1,9.367,1c2.352,0,4.265,1.913,4.265,4.265v6.271c0.226-0.081,0.469-0.125,0.723-0.125h0.3 c0.564,0,1.112,0.233,1.501,0.64s0.597,0.963,0.571,1.526c0,0.005,0.001,0.124-0.08,0.6c-0.47,2.703-2.459,4.917-5.029,5.748v2.378 c0,1.158-0.942,2.1-2.1,2.1H9.217V24.401z",
                                    }),
                                    (0, a.jsx)("path", {
                                      fill: "currentColor",
                                      d: "M9.367,15.668c1.527,0,2.765-1.238,2.765-2.765V5.265c0-1.527-1.238-2.765-2.765-2.765 S6.603,3.738,6.603,5.265v7.638C6.603,14.43,7.84,15.668,9.367,15.668z M14.655,12.91h-0.3c-0.33,0-0.614,0.269-0.631,0.598 c0,0,0,0-0.059,0.285c-0.41,1.997-2.182,3.505-4.298,3.505c-2.126,0-3.904-1.521-4.304-3.531C5.008,13.49,5.008,13.49,5.008,13.49 c-0.016-0.319-0.299-0.579-0.629-0.579h-0.3c-0.33,0-0.591,0.258-0.579,0.573c0,0,0,0,0.04,0.278 c0.378,2.599,2.464,4.643,5.076,4.978v3.562c0,0.33,0.27,0.6,0.6,0.6h0.3c0.33,0,0.6-0.27,0.6-0.6V18.73 c2.557-0.33,4.613-2.286,5.051-4.809c0.057-0.328,0.061-0.411,0.061-0.411C15.243,13.18,14.985,12.91,14.655,12.91z",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      }
    },
    60981: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ButtonUI;
        },
      });
      var a = o(85893),
        f = o(5379),
        d = o.n(f),
        s = o(25629),
        c = o(23907),
        u = o(41798),
        m = o(12936),
        v = o(41901),
        p = o(67294);
      function ButtonUI(l) {
        var t, o, f, h, x, w, y, k, j, C, N, S, F, q, T, I, L, z, M, Z, E, U, P;
        let { globalContext: D, handleGlobalContext: R } = (0, p.useContext)(
            c.kn
          ),
          [B, A] = (0, p.useState)(!1),
          [H, X] = (0, p.useState)(!1),
          O = {
            theme: "btn-theme",
            danger: "bg-red-600 text-white",
            info: "bg-blue-600 text-white",
            success: "bg-green-600 text-white",
            light: "bg-gray-100 text-gray-950",
            dark: "bg-gray-950 text-white",
            warning: "bg-yellow-400 text-gray-950",
          },
          refTrackUrl = () => {
            if (window) {
              var t, o;
              let a = document.getElementById(
                "".concat(
                  null !== (t = l.content.name) && void 0 !== t
                    ? t
                    : l.content.id,
                  "-ref"
                )
              );
              if (a)
                return null !== (o = a.getAttribute("href")) && void 0 !== o
                  ? o
                  : "";
            }
            return "";
          },
          handleClick = (t) => {
            var o, a, f, d, c, m;
            t.preventDefault(), X(!0);
            let p = null !== (a = D.dataForm) && void 0 !== a ? a : {},
              h =
                null !== (f = null == D ? void 0 : D.variables) && void 0 !== f
                  ? f
                  : {};
            (p[l.content.id] = "clicked"),
              (null === (o = l.content) || void 0 === o ? void 0 : o.name) &&
                (h[l.content.name] = "clicked");
            let x = {
                lastInteract: l.content.name,
                dataForm: p,
                onSubmit: !D.onSubmit,
                variables: h,
                newTab: !!l.content.target,
              },
              w = (0, v.Fm)(
                l.content.destination,
                null !== (d = null == D ? void 0 : D.variables) && void 0 !== d
                  ? d
                  : []
              );
            "redirect" == l.content.type || "next" != w
              ? (x.goTo =
                  "redirect" == l.content.type
                    ? (0, u.gw)(w, refTrackUrl())
                    : w)
              : (null == D ? void 0 : D.goTo)
              ? (x.goTo = (0, v.Fm)(
                  null == D ? void 0 : D.goTo,
                  null !== (c = null == D ? void 0 : D.variables) &&
                    void 0 !== c
                    ? c
                    : []
                ))
              : (x.goTo = D.funnel.navigation[l.content.id]
                  ? D.funnel.navigation[l.content.id]
                  : w),
              x.goTo &&
                (!D.devMode &&
                  B &&
                  (null === (m = l.content) || void 0 === m
                    ? void 0
                    : m.script) &&
                  (0, s.handleScripts)({ header: l.content.script }),
                R(x, "handleClick Button")),
              setTimeout(() => {
                X(!1);
              }, 1e3);
          },
          validateDataForm = () => {
            let t = !0;
            if ("redirect" != l.content.type) {
              var o;
              Object.keys(
                null !== (o = null == D ? void 0 : D.validate) && void 0 !== o
                  ? o
                  : []
              )
                .filter(
                  (t) =>
                    t == l.step &&
                    !!Object.values(null == D ? void 0 : D.validate[t]).length
                )
                .map((l) => {
                  t = t
                    ? !!Object.values(
                        null == D ? void 0 : D.validate[l]
                      ).filter((l) => l).length
                    : t;
                });
            }
            A(t);
          };
        return (
          (0, p.useEffect)(() => {
            validateDataForm();
          }, [D]),
          (0, a.jsx)(
            "div",
            {
              className: "".concat(
                (null === (t = l.design) || void 0 === t ? void 0 : t.fixed)
                  ? D.devMode
                    ? "opacity-50"
                    : "fixed z-[99] bottom-0 w-full left-0 px-2 pt-2 pb-5"
                  : ""
              ),
              style: {
                background: "linear-gradient(to top, ".concat(
                  null === (o = D.funnel.design) || void 0 === o
                    ? void 0
                    : o.backgroundColor,
                  ", transparent)"
                ),
              },
              children: (0, a.jsxs)("div", {
                className: "mx-auto relative ".concat(
                  null !==
                    (L =
                      null === (f = D.funnel.design) || void 0 === f
                        ? void 0
                        : f.container) && void 0 !== L
                    ? L
                    : "max-w-[28rem]"
                ),
                children: [
                  (0, a.jsxs)("div", {
                    className: ""
                      .concat(B ? "" : "opacity-50", " ")
                      .concat(
                        (
                          null === (h = l.design) || void 0 === h
                            ? void 0
                            : h.bubble
                        )
                          ? "effect-bubble mb-2 hover:-mt-1 hover:pb-1 ease"
                          : "",
                        " group/button grid relative"
                      ),
                    children: [
                      !!(null === (x = l.design) || void 0 === x
                        ? void 0
                        : x.pulse) &&
                        B &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", {
                              id: "pulse".concat(l.content.id),
                              className:
                                d().dynamic([
                                  ["bbf648c4544dd5c", [l.content.id]],
                                ]) +
                                " " +
                                "absolute "
                                  .concat(
                                    null !==
                                      (z =
                                        null === (w = D.funnel.design) ||
                                        void 0 === w
                                          ? void 0
                                          : w.rounded) && void 0 !== z
                                      ? z
                                      : "rounded-lg",
                                    " w-full h-full "
                                  )
                                  .concat(
                                    O[
                                      (
                                        null === (y = l.design) || void 0 === y
                                          ? void 0
                                          : y.style
                                      )
                                        ? null === (k = l.design) ||
                                          void 0 === k
                                          ? void 0
                                          : k.style
                                        : "theme"
                                    ]
                                  ),
                            }),
                            (0, a.jsx)(d(), {
                              id: "bbf648c4544dd5c",
                              dynamic: [l.content.id],
                              children: "#pulse".concat(
                                l.content.id,
                                ".__jsx-style-dynamic-selector{-webkit-animation:bounceBtn 1s infinite;-moz-animation:bounceBtn 1s infinite;-o-animation:bounceBtn 1s infinite;animation:bounceBtn 1s infinite}"
                              ),
                            }),
                          ],
                        }),
                      !!(null === (j = l.design) || void 0 === j
                        ? void 0
                        : j.bubble) &&
                        (0, a.jsx)("div", {
                          className: ""
                            .concat(
                              null !==
                                (M =
                                  null === (C = D.funnel.design) || void 0 === C
                                    ? void 0
                                    : C.rounded) && void 0 !== M
                                ? M
                                : "rounded-lg",
                              " absolute "
                            )
                            .concat(
                              O[
                                (
                                  null === (N = l.design) || void 0 === N
                                    ? void 0
                                    : N.style
                                )
                                  ? null === (S = l.design) || void 0 === S
                                    ? void 0
                                    : S.style
                                  : "theme"
                              ],
                              " overflow-hidden w-full h-full top-0 left-0 mt-2 ease"
                            ),
                          children: (0, a.jsx)("div", {
                            className:
                              "absolute ease w-full h-full top-0 left-0 ".concat(
                                (0, m.E$)(D.funnel.design.themeColor) > 7
                                  ? "bg-white opacity-20 group-hover/button:opacity-15"
                                  : "bg-zinc-950 opacity-30 group-hover/button:opacity-35"
                              ),
                          }),
                        }),
                      (0, a.jsx)("button", {
                        id:
                          null !== (Z = l.content.name) && void 0 !== Z
                            ? Z
                            : l.content.id,
                        onClick: (l) => (!H && B ? handleClick(l) : {}),
                        className: "btn relative "
                          .concat(
                            null !==
                              (E =
                                null === (F = D.funnel.design) || void 0 === F
                                  ? void 0
                                  : F.rounded) && void 0 !== E
                              ? E
                              : "rounded-lg",
                            " "
                          )
                          .concat(
                            O[
                              (
                                null === (q = l.design) || void 0 === q
                                  ? void 0
                                  : q.style
                              )
                                ? null === (T = l.design) || void 0 === T
                                  ? void 0
                                  : T.style
                                : "theme"
                            ]
                          ),
                        ...("redirect" == l.content.type
                          ? { "data-href": l.content.destination }
                          : {}),
                        dangerouslySetInnerHTML: {
                          __html: (0, v.Fm)(
                            l.content.label ? l.content.label : "Continuar",
                            null !== (U = null == D ? void 0 : D.variables) &&
                              void 0 !== U
                              ? U
                              : []
                          ),
                        },
                      }),
                    ],
                  }),
                  "redirect" == l.content.type &&
                    (0, a.jsx)("a", {
                      id: "".concat(l.content.name, "-ref"),
                      href: (0, v.Fm)(
                        l.content.destination,
                        null !== (P = null == D ? void 0 : D.variables) &&
                          void 0 !== P
                          ? P
                          : []
                      ),
                      className: "hidden",
                    }),
                  !!(null === (I = l.design) || void 0 === I
                    ? void 0
                    : I.fixed) &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)(d(), {
                        id: "b3e1b6a7c9b96113",
                        children: "",
                      }),
                    }),
                ],
              }),
            },
            l.id
          )
        );
      }
    },
    37196: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return CarouselUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(41901),
        c = o(67294),
        u = o(22546),
        m = o(86523);
      o(92261), o(56735), o(69831);
      var v = o(44276);
      function CarouselUI(l) {
        var t, o, p, h, x, w, y, k, j, C, N;
        let S = (0, c.useRef)(null),
          [F, q] = (0, c.useState)(!1),
          { globalContext: T } = (0, c.useContext)(f.kn),
          [I, L] = (0, c.useState)({}),
          [z, M] = (0, c.useState)([]);
        return (
          (0, c.useEffect)(() => {
            var t, o, a;
            let f = [];
            (null === (t = l.content) || void 0 === t ? void 0 : t.autoplay) &&
              f.push(m.pt),
              (null === (o = l.content) || void 0 === o
                ? void 0
                : o.pagination) && f.push(m.tl),
              (null === (a = l.content) || void 0 === a
                ? void 0
                : a.navigation) && f.push(m.W_),
              M(f),
              setTimeout(() => {
                q(!0);
              }, 10);
          }, [l.content]),
          (0, c.useEffect)(() => {
            S.current && S.current.swiper && S.current.swiper.update();
          }, [l.content, z]),
          (0, c.useEffect)(() => {
            L(T.funnel.design);
          }, [T.funnel.design]),
          F
            ? (0, a.jsx)("div", {
                className:
                  "relative overflow-hidden -mx-3 group-[.screen-mobile]:-mx-3 md:mx-0",
                children: (0, a.jsxs)("div", {
                  className: "",
                  children: [
                    (0, a.jsx)(u.tq, {
                      ref: S,
                      slidesPerView: "auto",
                      centeredSlides: !0,
                      spaceBetween: 8,
                      modules: z,
                      loop: !!(null === (t = l.content) || void 0 === t
                        ? void 0
                        : t.loop),
                      pagination: null !== (o = l.content) &&
                        void 0 !== o &&
                        !!o.pagination && {
                          dynamicBullets: !0,
                          el: ".swiper-pagination",
                          clickable: !0,
                        },
                      autoplay: null !== (p = l.content) &&
                        void 0 !== p &&
                        !!p.autoplay && {
                          delay: (
                            null === (h = l.content) || void 0 === h
                              ? void 0
                              : h.delay
                          )
                            ? (null === (x = l.content) || void 0 === x
                                ? void 0
                                : x.delay) * 1e3
                            : 2500,
                          disableOnInteraction: !1,
                        },
                      navigation: null !== (w = l.content) &&
                        void 0 !== w &&
                        !!w.navigation && {
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        },
                      children:
                        (null === (k = l.content) || void 0 === k
                          ? void 0
                          : null === (y = k.items) || void 0 === y
                          ? void 0
                          : y.length) &&
                        l.content.items.map((t, o) => {
                          var f, c, m, p, h, x, w, y, k, j, C, N, S, F;
                          return (0, a.jsx)(
                            u.o5,
                            {
                              className: "".concat(
                                (
                                  null === (f = l.content) || void 0 === f
                                    ? void 0
                                    : f.spoiler
                                )
                                  ? "max-w-[90%]"
                                  : ""
                              ),
                              children: (0, a.jsxs)("div", {
                                className: ""
                                  .concat(
                                    (null === (c = l.design) || void 0 === c
                                      ? void 0
                                      : c.style) === ""
                                      ? ""
                                      : "border border-theme",
                                    " "
                                  )
                                  .concat(
                                    null !==
                                      (k = null == I ? void 0 : I.rounded) &&
                                      void 0 !== k
                                      ? k
                                      : "rounded-lg",
                                    " content text relative overflow-hidden"
                                  ),
                                children: [
                                  (null !==
                                    (j =
                                      null === (m = l.content) || void 0 === m
                                        ? void 0
                                        : m.layout) && void 0 !== j
                                    ? j
                                    : ""
                                  ).includes("image") &&
                                    (0, a.jsx)(a.Fragment, {
                                      children: (
                                        null == t
                                          ? void 0
                                          : null === (p = t.image) ||
                                            void 0 === p
                                          ? void 0
                                          : p.src
                                      )
                                        ? (0, a.jsx)("div", {
                                            className: "text-center",
                                            children:
                                              "emoji" !== t.image.type &&
                                              (0, d.jv)(t.image.src)
                                                ? (0, a.jsx)(v.Z, {
                                                    ...t.image,
                                                    type: "image",
                                                    rounded:
                                                      (null ===
                                                        (h = l.design) ||
                                                      void 0 === h
                                                        ? void 0
                                                        : h.style) === ""
                                                        ? ""
                                                        : "none",
                                                  })
                                                : (0, a.jsx)("div", {
                                                    className: "text-6xl py-4",
                                                    children: t.image.src,
                                                  }),
                                          })
                                        : (null !==
                                            (C =
                                              null === (x = l.content) ||
                                              void 0 === x
                                                ? void 0
                                                : x.layout) && void 0 !== C
                                            ? C
                                            : ""
                                          ).includes("image")
                                        ? (0, a.jsx)("div", {
                                            className: "aspect-[4/3] ".concat(
                                              (null === (w = l.design) ||
                                              void 0 === w
                                                ? void 0
                                                : w.style) === ""
                                                ? null !==
                                                    (N =
                                                      null == I
                                                        ? void 0
                                                        : I.rounded) &&
                                                  void 0 !== N
                                                  ? N
                                                  : "rounded-lg"
                                                : "border",
                                              " bg-featured-opacity"
                                            ),
                                          })
                                        : null,
                                    }),
                                  (null !==
                                    (S =
                                      null === (y = l.content) || void 0 === y
                                        ? void 0
                                        : y.layout) && void 0 !== S
                                    ? S
                                    : ""
                                  ).includes("text") &&
                                    (0, a.jsx)("div", {
                                      className: "py-4",
                                      dangerouslySetInnerHTML: {
                                        __html: (0, s.Fm)(
                                          t.text,
                                          null !==
                                            (F =
                                              null == T
                                                ? void 0
                                                : T.variables) && void 0 !== F
                                            ? F
                                            : []
                                        ),
                                      },
                                    }),
                                ],
                              }),
                            },
                            o
                          );
                        }),
                    }),
                    (null === (j = l.design) || void 0 === j
                      ? void 0
                      : j.style) && !1,
                    (null === (C = l.content) || void 0 === C
                      ? void 0
                      : C.pagination) &&
                      (0, a.jsx)("div", {
                        className: "relative w-full py-4",
                        children: (0, a.jsx)("div", {
                          className: "relative h-[.5rem]",
                          children: T.devMode
                            ? (0, a.jsxs)("div", {
                                className:
                                  "swiper-pagination -mb-2 w-[80px] swiper-pagination-bullets-dynamic swiper-pagination-bullets swiper-pagination-horizontal",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "swiper-pagination-bullet left-0 swiper-pagination-bullet-active-prev",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "swiper-pagination-bullet left-0 swiper-pagination-bullet-active swiper-pagination-bullet-active-main",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "swiper-pagination-bullet left-0 swiper-pagination-bullet-active-next",
                                  }),
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: "swiper-pagination -mb-2",
                              }),
                        }),
                      }),
                    (null === (N = l.content) || void 0 === N
                      ? void 0
                      : N.navigation) &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className: "swiper-button-next",
                          }),
                          (0, a.jsx)("div", {
                            className: "swiper-button-prev",
                          }),
                        ],
                      }),
                  ],
                }),
              })
            : null
        );
      }
    },
    52124: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ChartUI;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(23907),
        s = o(41901),
        c = o(29009),
        u = o(46888),
        m = o(14195),
        v = o(86108),
        p = o(98687),
        h = o(56880),
        x = o(12936),
        w = o(20684);
      function ChartUI(l) {
        var t, o;
        let { design: y, content: k } = l,
          { globalContext: j } = (0, f.useContext)(d.kn),
          [C, N] = (0, f.useState)(!1),
          S = {
            theme: j.funnel.design.themeColor,
            danger: "#dc2626",
            info: "#2563eb",
            success: "#22c55e",
            light: "#64748b",
            warning: "#fbbf24",
          },
          [F, q] = (0, f.useState)(0),
          [T, I] = (0, f.useState)([]),
          getMathResult = (l, t) => {
            var o;
            return l
              ? parseFloat(
                  (0, s.M_)(
                    (0, s.Fm)(
                      l.toString(),
                      null !== (o = null == j ? void 0 : j.variables) &&
                        void 0 !== o
                        ? o
                        : [],
                      "0"
                    )
                  )
                ) || (null != t ? t : 10)
              : 10;
          },
          getLabel = (l) => {
            var t;
            return (
              (0, s.Fm)(
                l.toString(),
                null !== (t = null == j ? void 0 : j.variables) && void 0 !== t
                  ? t
                  : []
              ) || ""
            );
          };
        (0, f.useEffect)(() => {
          var l;
          let t = null !== (l = k.datas) && void 0 !== l ? l : [];
          q(t.reduce((l, t) => Math.max(l, getMathResult(t.value, 10)), 0)),
            I(t.map((l) => ({ ...l, value: getMathResult(l.value, 10) })));
        }, [k.datas]),
          (0, f.useEffect)(() => {
            window && setTimeout(() => N(!0), 100);
          }, []);
        let CustomizedDot = (l) => {
            var t, o;
            let { cx: f, cy: d, stroke: s, payload: c, value: u } = l,
              m = !!k.datas.filter(
                (l) =>
                  getMathResult(l.value, 10) == parseFloat(u) &&
                  !!(null == l ? void 0 : l.featured)
              ).length;
            return (0, a.jsx)("circle", {
              cx: f,
              cy: d,
              r: m ? 7 : 6,
              fill: "white",
              stroke: m
                ? null === (t = j.funnel.design) || void 0 === t
                  ? void 0
                  : t.themeColor
                : (0, x.nF)(
                    null === (o = j.funnel.design) || void 0 === o
                      ? void 0
                      : o.backgroundColor,
                    1
                  ),
              strokeWidth: 3,
            });
          },
          inTooltip = (l) => {
            var t, o, f, d, s;
            return (0, a.jsx)("div", {
              style: {
                ...((null == l ? void 0 : l.featured)
                  ? {
                      color: (0, x.rX)(
                        null === (t = j.funnel.design) || void 0 === t
                          ? void 0
                          : t.themeColor
                      ),
                      backgroundColor:
                        null === (o = j.funnel.design) || void 0 === o
                          ? void 0
                          : o.themeColor,
                      marginBottom: "8%",
                    }
                  : {
                      color: "#030712",
                      backgroundColor: "#ffffff",
                      border: "1px solid ".concat(
                        (0, x.nF)(
                          null === (f = j.funnel.design) || void 0 === f
                            ? void 0
                            : f.backgroundColor
                        )
                      ),
                    }),
              },
              className:
                "font-semibold text-[1rem] text-nowrap leading-none py-2 px-3 ".concat(
                  null !==
                    (s =
                      null === (d = j.funnel.design) || void 0 === d
                        ? void 0
                        : d.rounded) && void 0 !== s
                    ? s
                    : "rounded-none"
                ),
              children: (0, a.jsx)("span", {
                className: "relative",
                dangerouslySetInnerHTML: { __html: getLabel(l.tooltip) },
              }),
            });
          };
        return (0, a.jsxs)("div", {
          className: "",
          children: [
            !!k.title &&
              (0, a.jsx)("div", {
                className:
                  "px-2 theme-color-title font-semibold theme-font-title",
                children: k.title,
              }),
            (0, a.jsxs)("div", {
              className: "aspect-video relative",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute w-full h-full top-0 left-0",
                  children: (0, a.jsx)(c.h, {
                    width: "100%",
                    height: "100%",
                    children: (0, a.jsxs)(u.T, {
                      width: 500,
                      height: 400,
                      data: T,
                      margin: { right: 8, left: 8, top: 8, bottom: 8 },
                      children: [
                        (0, a.jsx)(m.q, {
                          horizontal: !!(null == y ? void 0 : y.axisX),
                          vertical: !!(null == y ? void 0 : y.axisY),
                          stroke: (0, x.nF)(
                            (
                              null === (t = j.funnel.design) || void 0 === t
                                ? void 0
                                : t.backgroundColor
                            )
                              ? null === (o = j.funnel.design) || void 0 === o
                                ? void 0
                                : o.backgroundColor
                              : "#ffffff",
                            1
                          ),
                          strokeDasharray: "3 3",
                        }),
                        (0, a.jsx)(v.u, {
                          type: "natural",
                          dataKey: "value",
                          strokeWidth: "0",
                          fill: (null == y ? void 0 : y.area)
                            ? S[y.color]
                              ? S[y.color]
                              : "url(#colorUv)"
                            : "transparent",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(c.h, {
                  width: "100%",
                  height: "100%",
                  children: (0, a.jsxs)(p.w, {
                    data: T,
                    margin: { right: 8, left: 8, top: 8, bottom: 8 },
                    children: [
                      !S[y.color] &&
                        (0, a.jsx)("defs", {
                          children: (0, a.jsxs)("linearGradient", {
                            id: "colorUv",
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "0",
                            children: [
                              (0, a.jsx)("stop", {
                                offset: "0%",
                                stopColor:
                                  "gradient" == y.color ? "#14b8a6" : "#dc2626",
                                stopOpacity: 1,
                              }),
                              (0, a.jsx)("stop", {
                                offset: "50%",
                                stopColor: "#facc15",
                                stopOpacity: 1,
                              }),
                              (0, a.jsx)("stop", {
                                offset: "100%",
                                stopColor:
                                  "gradient" == y.color ? "#dc2626" : "#14b8a6",
                                stopOpacity: 1,
                              }),
                            ],
                          }),
                        }),
                      (0, a.jsx)(h.x, {
                        type: "natural",
                        dataKey: "value",
                        strokeWidth: "4",
                        stroke: S[y.color] ? S[y.color] : "url(#colorUv)",
                        dot: (0, a.jsx)(CustomizedDot, {}),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute px-[.5rem] flex items-end justify-between h-full w-full top-0 left-0",
                  children: T.map((l, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "h-full flex flex-col justify-end",
                        children: (0, a.jsxs)("div", {
                          className: "relative flex justify-center",
                          style: {
                            flexBasis: "".concat(
                              (getMathResult(l.value, 10) / F) * 100,
                              "%"
                            ),
                          },
                          children: [
                            (0, a.jsx)("div", {
                              "data-tooltip-id": "tooltip-label-".concat(t),
                              className: "absolute top-0 w-0",
                            }),
                            !!(null == l ? void 0 : l.tooltip) &&
                              (0, a.jsx)(a.Fragment, {
                                children: j.devMode
                                  ? (0, a.jsx)("div", {
                                      className:
                                        "absolute left-1/2 top-0 -mt-10 -translate-x-1/2",
                                      children: inTooltip(l),
                                    })
                                  : (0, a.jsx)(w.u, {
                                      id: "tooltip-label-".concat(t),
                                      isOpen: !0,
                                      style: {
                                        padding: 0,
                                        backgroundColor: "transparent",
                                      },
                                      arrowColor: "transparent",
                                      opacity: 1,
                                      place: "top",
                                      children: inTooltip(l),
                                    }),
                              }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "flex pt-1 pb-3 justify-between",
              children: T.map((l, t) => {
                var o, f;
                return (0, a.jsx)(
                  "div",
                  {
                    className: "relative ".concat(
                      t == T.length - 1
                        ? "justify-end"
                        : t
                        ? "justify-center"
                        : "justify-start",
                      " flex w-0"
                    ),
                    children: (0, a.jsx)("span", {
                      className: "text-[.85rem] text-nowrap leading-none",
                      children: (0, s.Fm)(
                        null !== (o = null == l ? void 0 : l.legend) &&
                          void 0 !== o
                          ? o
                          : "",
                        null !== (f = null == j ? void 0 : j.variables) &&
                          void 0 !== f
                          ? f
                          : []
                      ),
                    }),
                  },
                  t
                );
              }),
            }),
          ],
        });
      }
    },
    40341: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ClearUI;
        },
      });
      var a = o(85893);
      function ClearUI(l) {
        return (0, a.jsx)("div", { className: "".concat(l.content.clear) });
      }
    },
    12550: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return DividerUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(12936),
        s = o(67294);
      function DividerUI(l) {
        var t, o, c;
        let { globalContext: u, handleGlobalContext: m } = (0, s.useContext)(
          f.kn
        );
        return (0, a.jsx)("div", {
          className: "w-full flex justify-center h-full ".concat(
            u.devMode ? "min-h-[2rem]" : ""
          ),
          children: (0, a.jsx)("div", {
            className: "border-l",
            style: {
              borderColor: (0, d.nF)(
                null !==
                  (c =
                    null == u
                      ? void 0
                      : null === (o = u.funnel) || void 0 === o
                      ? void 0
                      : null === (t = o.design) || void 0 === t
                      ? void 0
                      : t.backgroundColor) && void 0 !== c
                  ? c
                  : "#ffffff"
              ),
            },
          }),
        });
      }
    },
    57843: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return FieldUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(41901),
        c = o(31955),
        u = o(67294);
      let m = {
        date: (l) => {
          l = (l = l.replace(/\D/g, "")).substring(0, 8);
          let t = l.length;
          return (
            t > 2 && t <= 4
              ? (l = "".concat(l.substring(0, 2), "/").concat(l.substring(2)))
              : t > 4 &&
                (l = ""
                  .concat(l.substring(0, 2), "/")
                  .concat(l.substring(2, 4), "/")
                  .concat(l.substring(4))),
            l
          );
        },
        decimal: (l) => {
          if (!l) return "";
          l = (l = l.replace(/[^0-9.,]/g, "")).replace(/,/g, ".");
          let t = l.split(".");
          return t.length > 2 && (l = t[0] + "." + t.slice(1).join("")), l;
        },
        phone: (l) =>
          l
            ? ((l = (l = l.replace(/\D/g, "")).substring(0, 11)).length > 10
                ? (l = "("
                    .concat(l.substring(0, 2), ") ")
                    .concat(l.substring(2, 7), "-")
                    .concat(l.substring(7)))
                : l.length > 6
                ? (l = "("
                    .concat(l.substring(0, 2), ") ")
                    .concat(l.substring(2, 6), "-")
                    .concat(l.substring(6)))
                : l.length > 2
                ? (l = "("
                    .concat(l.substring(0, 2), ") ")
                    .concat(l.substring(2)))
                : l.length > 0 && (l = "(".concat(l)),
              l)
            : "",
        real: (l) => {
          l = l.replace(/\D/g, "");
          let t = { minimumFractionDigits: 2, maximumFractionDigits: 2 },
            o = new Intl.NumberFormat("pt-BR", t).format(l / 100);
          return o;
        },
        dollar: (l) => {
          l = l.replace(/\D/g, "");
          let t = { minimumFractionDigits: 2, maximumFractionDigits: 2 },
            o = new Intl.NumberFormat("en-US", t).format(l / 100);
          return o;
        },
        euro: (l) => {
          l = l.replace(/\D/g, "");
          let t = { minimumFractionDigits: 2, maximumFractionDigits: 2 },
            o = new Intl.NumberFormat("de-DE", t).format(l / 100);
          return o;
        },
      };
      function FieldUI(l) {
        var t, o, v, p, h, x, w, y, k, j, C, N, S, F, q, T;
        let { globalContext: I, handleGlobalContext: L } = (0, u.useContext)(
            f.kn
          ),
          [z, M] = (0, u.useState)(""),
          [Z, E] = (0, u.useState)(!1),
          [U, P] = (0, u.useState)(!1),
          handleChange = (t) => {
            var o, a, f, s, u, v, p, h, x, w, y;
            let k =
                null !== (u = null == I ? void 0 : I.validate) && void 0 !== u
                  ? u
                  : {},
              j =
                null !==
                  (p =
                    k[
                      null !== (v = null == l ? void 0 : l.step) && void 0 !== v
                        ? v
                        : l.id
                    ]) && void 0 !== p
                  ? p
                  : {},
              C = null !== (h = I.dataForm) && void 0 !== h ? h : {},
              N =
                (null === (o = l.content) || void 0 === o ? void 0 : o.mask) &&
                m[null === (a = l.content) || void 0 === a ? void 0 : a.mask]
                  ? m[
                      null === (f = l.content) || void 0 === f ? void 0 : f.mask
                    ](t)
                  : t;
            (j[l.content.id] = !!N),
              "email" == l.content.type && (j[l.content.id] = (0, d.oH)(N)),
              "phone" == l.content.type && (j[l.content.id] = (0, d.a$)(N)),
              "number" == l.content.type && (N = (0, d.ve)(N)),
              (C[l.content.id] = N),
              M(N);
            let S =
              null !== (x = null == I ? void 0 : I.variables) && void 0 !== x
                ? x
                : {};
            N ? (S[l.content.name] = N) : delete S[l.content.name];
            let F = { dataForm: C, variables: S };
            if (
              (0, d.gx)(
                null === (s = l.content) || void 0 === s ? void 0 : s.required
              ) &&
              (null == l ? void 0 : l.step) &&
              !I.devMode
            ) {
              (k[
                null !== (y = null == l ? void 0 : l.step) && void 0 !== y
                  ? y
                  : l.id
              ] = j),
                E(j);
              let t = "inlead".concat(
                (0, d.oF)(
                  null == I
                    ? void 0
                    : null === (w = I.funnel) || void 0 === w
                    ? void 0
                    : w.id
                )
              );
              j &&
                "sended" != c.Z.get("".concat(t, "-qualified")) &&
                c.Z.set("".concat(t, "-qualified"), "tosend", { expires: 14 }),
                (F.validate = k);
            }
            L(F, "FieldUI");
          };
        (0, u.useEffect)(() => {
          if (window) {
            var t, o, a, f;
            let s = "";
            if (
              ((null == I ? void 0 : I.dataForm) &&
                (null == I ? void 0 : I.dataForm[l.content.id]) &&
                (s = null == I ? void 0 : I.dataForm[l.content.id]),
              (0, d.gx)(
                null === (t = l.content) || void 0 === t ? void 0 : t.required
              ) &&
                (null == l ? void 0 : l.step) &&
                !I.devMode)
            ) {
              let t =
                  null !== (a = null == I ? void 0 : I.validate) && void 0 !== a
                    ? a
                    : {},
                c =
                  null !== (f = t[null == l ? void 0 : l.step]) && void 0 !== f
                    ? f
                    : {};
              (c[null === (o = l.content) || void 0 === o ? void 0 : o.id] =
                !!s),
                "email" == l.content.type && (c[l.content.id] = (0, d.oH)(s)),
                (t[null == l ? void 0 : l.step] = c),
                L({ validate: t }, "validate FieldUI");
            }
            M(s);
          }
        }, []);
        let D = {
            default: "",
            bold: "font-semibold",
            float: "absolute text-sm ml-[.8rem] px-1 -mt-[10px]",
            inside: "absolute text-xs opacity-90 ml-[.6rem] mt-[.4rem]",
            none: "hidden",
          },
          getTypeField = (l) =>
            "email" == l ? "email" : "phone" == l ? "tel" : "text";
        return (0, a.jsxs)("div", {
          className: "group-field relative ".concat(
            I.devMode ? "" : "hover:z-20"
          ),
          children: [
            ((null === (t = l.design) || void 0 === t ? void 0 : t.label) ==
              "float" ||
              (null === (o = l.design) || void 0 === o ? void 0 : o.label) ==
                "inside") &&
              (0, a.jsx)("div", { className: "pt-3" }),
            (0, a.jsx)("label", {
              style: {
                backgroundColor:
                  (null === (v = l.design) || void 0 === v
                    ? void 0
                    : v.label) == "float"
                    ? null !==
                        (C =
                          null === (p = I.funnel.design) || void 0 === p
                            ? void 0
                            : p.backgroundColor) && void 0 !== C
                      ? C
                      : ""
                    : "transparent",
                color:
                  (null === (h = l.design) || void 0 === h
                    ? void 0
                    : h.label) == "bold"
                    ? null === (x = I.funnel.design) || void 0 === x
                      ? void 0
                      : x.titleColor
                    : (null === (w = l.design) || void 0 === w
                        ? void 0
                        : w.label) == "inside"
                    ? "#7e7e7e"
                    : "inherit",
              },
              className: "".concat(
                D[
                  null !==
                    (N =
                      null === (y = l.design) || void 0 === y
                        ? void 0
                        : y.label) && void 0 !== N
                    ? N
                    : "default"
                ],
                " rounded-md z-[5]"
              ),
              htmlFor: l.content.name,
              dangerouslySetInnerHTML: {
                __html: (0, s.Fm)(
                  l.content.title,
                  null !== (S = null == I ? void 0 : I.variables) &&
                    void 0 !== S
                    ? S
                    : []
                ),
              },
            }),
            (0, a.jsx)(
              "input",
              {
                id: l.content.name,
                required: !0,
                onChange: (l) => handleChange(l.target.value),
                type: getTypeField(l.content.type),
                value: z,
                placeholder: (0, s.Fm)(
                  l.content.placeholder,
                  null !== (F = null == I ? void 0 : I.variables) &&
                    void 0 !== F
                    ? F
                    : []
                ),
                name: l.content.name,
                className: "form-control-theme text-gray-600 appearance-none "
                  .concat(
                    null !==
                      (q =
                        null === (k = I.funnel.design) || void 0 === k
                          ? void 0
                          : k.rounded) && void 0 !== q
                      ? q
                      : "rounded-lg",
                    " "
                  )
                  .concat(
                    (null === (j = l.design) || void 0 === j
                      ? void 0
                      : j.label) == "inside"
                      ? "pt-4"
                      : "",
                    " border placeholder:italic "
                  )
                  .concat(
                    null !== (T = l.content.align) && void 0 !== T ? T : ""
                  ),
              },
              l.content.id
            ),
          ],
        });
      }
    },
    94273: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return GraphicsUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(12936),
        s = o(41901),
        c = o(67294),
        u = o(95774);
      function GraphicsUI(l) {
        var t, o;
        let { globalContext: m } = (0, c.useContext)(f.kn),
          [v, p] = (0, c.useState)({}),
          getMathResult = (l, t) => {
            var o;
            return l
              ? parseFloat(
                  (0, s.M_)(
                    (0, s.Fm)(
                      l.toString(),
                      null !== (o = null == m ? void 0 : m.variables) &&
                        void 0 !== o
                        ? o
                        : [],
                      "0"
                    )
                  )
                ) || (null != t ? t : 10)
              : 10;
          };
        return (
          (0, c.useEffect)(() => {
            setTimeout(() => {
              var t, o;
              let a = {};
              (null === (o = l.content) || void 0 === o
                ? void 0
                : null === (t = o.graphics) || void 0 === t
                ? void 0
                : t.length) &&
                l.content.graphics.map((l) => {
                  a[l.id] = getMathResult(l.percent);
                }),
                p(a);
            }, 1e3);
          }, [l]),
          (0, a.jsx)("div", {
            className: "grid ".concat(l.content.cols, " py-[.125rem] gap-2"),
            children:
              !!(null === (o = l.content) || void 0 === o
                ? void 0
                : null === (t = o.graphics) || void 0 === t
                ? void 0
                : t.length) &&
              l.content.graphics.map((t, o) => {
                var f, c, p, h, x, w, y, k, j, C, N, S, F, q, T, I, L, z;
                return (0, a.jsxs)(
                  "div",
                  {
                    className:
                      "graphic-theme flex gap-4 p-4 items-center ".concat(
                        "default" == l.content.order
                          ? "flex-col"
                          : "flex-col-reverse",
                        " border rounded-xl"
                      ),
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-full min-h-[7rem] text-center",
                        children:
                          "bar" == t.type
                            ? (0, a.jsxs)("div", {
                                className:
                                  "rounded-lg relative overflow-hidden h-full w-[2.5rem] mx-auto flex flex-col items-end justify-end",
                                style: {
                                  backgroundColor: (0, d.Ld)(
                                    (0, d.nF)(
                                      null !==
                                        (T =
                                          null == m
                                            ? void 0
                                            : null === (c = m.funnel) ||
                                              void 0 === c
                                            ? void 0
                                            : null === (f = c.design) ||
                                              void 0 === f
                                            ? void 0
                                            : f.backgroundColor) && void 0 !== T
                                        ? T
                                        : "#ffffff"
                                    ),
                                    0.4
                                  ),
                                },
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "absolute theme-font-title p-1 top-0 left-0 text-center font-bold text-xs w-full",
                                    style: {
                                      color:
                                        88 >= getMathResult(t.percent)
                                          ? "inherit"
                                          : (0, d.rX)(
                                              (null == t ? void 0 : t.style) ==
                                                "theme" &&
                                                (null == m
                                                  ? void 0
                                                  : null === (h = m.funnel) ||
                                                    void 0 === h
                                                  ? void 0
                                                  : null === (p = h.design) ||
                                                    void 0 === p
                                                  ? void 0
                                                  : p.themeColor)
                                                ? null == m
                                                  ? void 0
                                                  : null === (w = m.funnel) ||
                                                    void 0 === w
                                                  ? void 0
                                                  : null === (x = w.design) ||
                                                    void 0 === x
                                                  ? void 0
                                                  : x.themeColor
                                                : null !==
                                                    (I =
                                                      null == m
                                                        ? void 0
                                                        : null ===
                                                            (k = m.funnel) ||
                                                          void 0 === k
                                                        ? void 0
                                                        : null ===
                                                            (y = k.design) ||
                                                          void 0 === y
                                                        ? void 0
                                                        : y.backgroundColor) &&
                                                  void 0 !== I
                                                ? I
                                                : "#ffffff"
                                            ),
                                    },
                                    children: [getMathResult(t.percent), "%"],
                                  }),
                                  (0, a.jsx)("div", {
                                    id: "graphic40",
                                    className: "w-full ease",
                                    style: {
                                      height: "".concat(
                                        v[t.id] ? v[t.id] : 0,
                                        "%"
                                      ),
                                      transition: "all 1.2s ease",
                                      backgroundColor: t.style
                                        ? "theme" == t.style
                                          ? null == m
                                            ? void 0
                                            : null === (C = m.funnel) ||
                                              void 0 === C
                                            ? void 0
                                            : null === (j = C.design) ||
                                              void 0 === j
                                            ? void 0
                                            : j.themeColor
                                          : t.style
                                        : getMathResult(t.percent) > 70
                                        ? "#16a34a"
                                        : 40 > getMathResult(t.percent)
                                        ? "#dc2626"
                                        : "#f97316",
                                    },
                                  }),
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: "".concat(
                                  "grid-cols-2" == l.content.cols ? "px-4" : "",
                                  " max-w-[8rem] flex items-center h-full mx-auto"
                                ),
                                children: (0, a.jsx)(u.Wo, {
                                  value: v[t.id] ? v[t.id] : 0,
                                  strokeWidth: 10,
                                  styles: (0, u.y3)({
                                    pathTransitionDuration: 1.2,
                                    trailColor: (0, d.Ld)(
                                      (0, d.nF)(
                                        null !==
                                          (L =
                                            null == m
                                              ? void 0
                                              : null === (S = m.funnel) ||
                                                void 0 === S
                                              ? void 0
                                              : null === (N = S.design) ||
                                                void 0 === N
                                              ? void 0
                                              : N.backgroundColor) &&
                                          void 0 !== L
                                          ? L
                                          : "#ffffff"
                                      ),
                                      0.4
                                    ),
                                    strokeLinecap: "round",
                                    pathColor: t.style
                                      ? "theme" == t.style
                                        ? null == m
                                          ? void 0
                                          : null === (q = m.funnel) ||
                                            void 0 === q
                                          ? void 0
                                          : null === (F = q.design) ||
                                            void 0 === F
                                          ? void 0
                                          : F.themeColor
                                        : t.style
                                      : getMathResult(t.percent) > 70
                                      ? "#16a34a"
                                      : 40 > getMathResult(t.percent)
                                      ? "#dc2626"
                                      : "#f97316",
                                  }),
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "absolute theme-font-title theme-color-title text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold w-full",
                                    children: [getMathResult(t.percent), "%"],
                                  }),
                                }),
                              }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "w-full layer content text text-[.85rem] leading-tight",
                        dangerouslySetInnerHTML: {
                          __html: (0, s.Fm)(
                            t.legend,
                            null !== (z = null == m ? void 0 : m.variables) &&
                              void 0 !== z
                              ? z
                              : []
                          ),
                        },
                      }),
                    ],
                  },
                  o
                );
              }),
          })
        );
      }
      o(56149);
    },
    4902: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return HeaderUI;
        },
      });
      var a = o(85893),
        f = o(5379),
        d = o.n(f),
        s = o(23839),
        c = o(23907),
        u = o(41798),
        m = o(67294),
        v = o(49252);
      function HeaderUI(l) {
        var t, o, f, p, h, x, w, y, k, j, C, N;
        let { step: S, progress: F, onBack: q, showBack: T } = l,
          { globalContext: I, handleGlobalContext: L } = (0, m.useContext)(
            c.kn
          ),
          [z, M] = (0, m.useState)({}),
          [Z, E] = (0, m.useState)(0),
          [U, P] = (0, m.useState)(0);
        (0, m.useEffect)(() => {
          M(I.funnel.design);
        }, [I.funnel, I.activeStep]);
        let renderBack = () => {
            var l;
            return (0, a.jsxs)("button", {
              type: "button",
              onClick: () => (q ? q() : {}),
              className: "flex text-sm items-center gap-2 ",
              style: { color: z.titleColor },
              children: [
                (0, a.jsx)(v.Z, {
                  icon: "fa-arrow-left",
                  type: "far",
                  className: "text-sm mt-[2px]",
                }),
                (0, a.jsx)("span", {
                  className:
                    "font-semibold theme-font-title hidden group-[.screen-mobile]:hidden md:block",
                  children:
                    null == S
                      ? void 0
                      : null === (l = S.options) || void 0 === l
                      ? void 0
                      : l.text_back,
                }),
              ],
            });
          },
          renderLogo = () => {
            var l, t, o, f, d, c, m, v;
            return (null == S
              ? void 0
              : null === (l = S.options) || void 0 === l
              ? void 0
              : l.show_logo) != !1 &&
              (null == z
                ? void 0
                : null === (t = z.logo) || void 0 === t
                ? void 0
                : t.src)
              ? (0, a.jsx)("div", {
                  className: "min-w-[6rem]  w-full ".concat(
                    (null == z ? void 0 : z.logoSize) == "lg"
                      ? "group-[.screen-mobile]:max-w-[10rem] max-w-[10rem] md:max-w-[14rem]"
                      : "group-[.screen-mobile]:max-w-[6rem] max-w-[6rem] md:max-w-[8rem]"
                  ),
                  children: (0, a.jsx)("div", {
                    className: "w-fit md:max-w-full",
                    children:
                      (0, u.Zq)(
                        null == z
                          ? void 0
                          : null === (o = z.logo) || void 0 === o
                          ? void 0
                          : o.src
                      ) ||
                      (null == z
                        ? void 0
                        : null === (f = z.logo) || void 0 === f
                        ? void 0
                        : f.type) == "emoji"
                        ? (0, u.Zq)(
                            null == z
                              ? void 0
                              : null === (c = z.logo) || void 0 === c
                              ? void 0
                              : c.src
                          ) &&
                          (null == z
                            ? void 0
                            : null === (m = z.logo) || void 0 === m
                            ? void 0
                            : m.type) == "emoji"
                          ? (0, a.jsx)("div", {
                              className: "text-center text-4xl",
                              children: (0, u.Zq)(
                                null == z
                                  ? void 0
                                  : null === (v = z.logo) || void 0 === v
                                  ? void 0
                                  : v.src
                              ),
                            })
                          : (0, a.jsx)(a.Fragment, {})
                        : (0, a.jsx)(s.Z, {
                            src:
                              null == z
                                ? void 0
                                : null === (d = z.logo) || void 0 === d
                                ? void 0
                                : d.src,
                            className: "w-auto h-auto max-w-full",
                            priority: !0,
                          }),
                  }),
                })
              : (0, a.jsx)(a.Fragment, {});
          },
          renderProgress = () => {
            var l, t, o, f;
            return (null == S
              ? void 0
              : null === (l = S.options) || void 0 === l
              ? void 0
              : l.show_progress) != !1
              ? (0, a.jsx)(a.Fragment, {
                  children:
                    (null === (t = z.header) || void 0 === t
                      ? void 0
                      : t.progress) == "fixedTop"
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                d().dynamic([
                                  [
                                    "ca636698c25f6a32",
                                    [
                                      I.devMode
                                        ? ".group.main-content {\n                padding-top: .5rem !important;\n              }"
                                        : "body {\n                padding-top: .5rem !important;\n              }",
                                    ],
                                  ],
                                ]) +
                                " " +
                                "".concat(
                                  I.devMode ? "absolute" : "fixed",
                                  " top-0 left-0 pt-2 z-10 overflow-hidden w-full"
                                ),
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    d().dynamic([
                                      [
                                        "ca636698c25f6a32",
                                        [
                                          I.devMode
                                            ? ".group.main-content {\n                padding-top: .5rem !important;\n              }"
                                            : "body {\n                padding-top: .5rem !important;\n              }",
                                        ],
                                      ],
                                    ]) +
                                    " absolute top-0 left-0 h-full bg-featured w-full opacity-10",
                                }),
                                (0, a.jsx)("div", {
                                  style: {
                                    width: "".concat(null != F ? F : 60, "%"),
                                  },
                                  className:
                                    d().dynamic([
                                      [
                                        "ca636698c25f6a32",
                                        [
                                          I.devMode
                                            ? ".group.main-content {\n                padding-top: .5rem !important;\n              }"
                                            : "body {\n                padding-top: .5rem !important;\n              }",
                                        ],
                                      ],
                                    ]) +
                                    " absolute top-0 left-0 h-full bg-featured ease !duration-700",
                                }),
                              ],
                            }),
                            (0, a.jsx)(d(), {
                              id: "ca636698c25f6a32",
                              dynamic: [
                                I.devMode
                                  ? ".group.main-content {\n                padding-top: .5rem !important;\n              }"
                                  : "body {\n                padding-top: .5rem !important;\n              }",
                              ],
                              children: "".concat(
                                I.devMode
                                  ? ".group.main-content {\n                padding-top: .5rem !important;\n              }"
                                  : "body {\n                padding-top: .5rem !important;\n              }",
                                "\n            "
                              ),
                            }),
                          ],
                        })
                      : (null === (o = z.header) || void 0 === o
                          ? void 0
                          : o.progress) == "flat"
                      ? (0, a.jsx)("div", {
                          className: "relative w-full",
                          children: (0, a.jsxs)("div", {
                            className:
                              "pt-[.3rem] relative rounded-full overflow-hidden w-full",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "absolute top-0 left-0 h-full bg-featured w-full opacity-10",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute top-0 left-0 h-full bg-featured ease !duration-700",
                                style: {
                                  width: "".concat(null != F ? F : 60, "%"),
                                },
                              }),
                            ],
                          }),
                        })
                      : (null === (f = z.header) || void 0 === f
                          ? void 0
                          : f.progress) == "checked"
                      ? (0, a.jsx)(a.Fragment, {})
                      : (0, a.jsxs)("div", {
                          className:
                            "pt-2 relative rounded-full overflow-hidden w-full",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 h-full bg-featured w-full opacity-10",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 h-full bg-featured ease !duration-700",
                              style: {
                                width: "".concat(null != F ? F : 60, "%"),
                              },
                            }),
                          ],
                        }),
                })
              : (0, a.jsx)(a.Fragment, {});
          };
        return (0, a.jsxs)("div", {
          className:
            "w-full group-[.screen-mobile]:grid grid md:flex gap-3 md:gap-4 group-[.screen-mobile]:justify-normal md:justify-between ".concat(
              (null === (t = z.header) || void 0 === t ? void 0 : t.layout) !==
                "between" &&
                (null == S
                  ? void 0
                  : null === (o = S.options) || void 0 === o
                  ? void 0
                  : o.show_logo) != !1
                ? "items-start"
                : "items-center"
            ),
          children: [
            (0, a.jsxs)("div", {
              className: "w-full flex-1 flex items-start ".concat(
                (null === (f = z.header) || void 0 === f ? void 0 : f.layout) !=
                  "between"
                  ? "justify-between group-[.screen-mobile]:justify-between"
                  : "",
                " md:justify-start gap-4"
              ),
              children: [
                !!T &&
                  (null === (p = z.header) || void 0 === p
                    ? void 0
                    : p.layout) != "between" &&
                  renderBack(),
                (0, a.jsx)("div", {
                  className: "".concat(
                    (null === (h = z.header) || void 0 === h
                      ? void 0
                      : h.layout) == "between"
                      ? ""
                      : "group-[.screen-mobile]:block md:hidden mx-auto"
                  ),
                  children: renderLogo(),
                }),
                !!T &&
                  (null === (x = z.header) || void 0 === x
                    ? void 0
                    : x.layout) != "between" &&
                  (0, a.jsx)("div", { className: "px-2" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "w-full grid gap-4 max-w-[28rem]",
              children: [
                (null === (w = z.header) || void 0 === w ? void 0 : w.layout) !=
                  "between" &&
                  (null == S
                    ? void 0
                    : null === (y = S.options) || void 0 === y
                    ? void 0
                    : y.show_logo) != !1 &&
                  (0, a.jsx)("div", {
                    className:
                      "mx-auto hidden group-[.screen-mobile]:hidden md:block",
                    children: renderLogo(),
                  }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    !!T &&
                      (null === (k = z.header) || void 0 === k
                        ? void 0
                        : k.layout) == "between" &&
                      (0, a.jsx)("div", {
                        className:
                          "w-[1rem] group-[.screen-mobile]:w-[1rem] ".concat(
                            (null == S
                              ? void 0
                              : null === (j = S.options) || void 0 === j
                              ? void 0
                              : j.text_back) && "md:w-[4rem]"
                          ),
                        children: renderBack(),
                      }),
                    (0, a.jsx)("div", {
                      className: "w-full",
                      children: renderProgress(),
                    }),
                    !!T &&
                      (null === (C = z.header) || void 0 === C
                        ? void 0
                        : C.layout) == "between" &&
                      (0, a.jsx)("div", {
                        className:
                          "w-[1rem] group-[.screen-mobile]:w-[1rem] ".concat(
                            (null == S
                              ? void 0
                              : null === (N = S.options) || void 0 === N
                              ? void 0
                              : N.text_back) && "md:w-[4rem]"
                          ),
                      }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "w-full hidden group-[.screen-mobile]:hidden md:block flex-1",
            }),
          ],
        });
      }
    },
    75866: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ImageUI;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(44276);
      function ImageUI(l) {
        let [t, o] = (0, f.useState)("");
        return (
          (0, f.useEffect)(() => {
            o(l.content.image.src);
          }, [l.content]),
          (0, a.jsx)("div", {
            className: "grid",
            children: (0, a.jsx)("div", {
              className: "text-lg",
              children: (0, a.jsx)(d.Z, { ...l.content.image }),
            }),
          })
        );
      }
    },
    71332: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return LoadingUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(12936),
        c = o(41901),
        u = o(67294);
      function LoadingUI(l) {
        var t, o, m, v, p, h, x, w, y, k, j, C, N, S, F;
        let { globalContext: q, handleGlobalContext: T } = (0, u.useContext)(
            f.kn
          ),
          [I, L] = (0, u.useState)(0),
          [z, M] = (0, u.useState)(!1);
        return (
          (0, u.useEffect)(() => {
            if (I >= 100) {
              var t, o;
              let a = { ...q.dataForm },
                f =
                  null !== (o = null == q ? void 0 : q.variables) &&
                  void 0 !== o
                    ? o
                    : {};
              (a[l.content.id] = "loaded"),
                (null === (t = l.content) || void 0 === t ? void 0 : t.name) &&
                  (f[l.content.name] = "loaded");
              let d = {
                ...q,
                lastInteract: l.content.name,
                dataForm: a,
                variables: f,
              };
              "none" != l.content.type &&
                ((d.onSubmit = !q.onSubmit),
                "redirect" == l.content.type || "next" != l.content.destination
                  ? (d.goTo = l.content.destination)
                  : (null == q ? void 0 : q.goTo)
                  ? (d.goTo = null == q ? void 0 : q.goTo)
                  : (d.goTo = q.funnel.navigation[l.content.id]
                      ? q.funnel.navigation[l.content.id]
                      : l.content.destination)),
                q.devMode || T(d, "Loader");
            }
          }, [I]),
          (0, u.useEffect)(() => {
            if (z) {
              let t = Date.now(),
                o = 1e3 * l.content.seconds,
                a = setInterval(() => {
                  let l = Date.now(),
                    a = l - t,
                    f = (a / o) * 100;
                  L(Math.min(f, 100));
                }, 10 * l.content.seconds);
              return (
                setTimeout(() => {
                  clearInterval(a), L(100);
                }, o),
                () => {
                  clearInterval(a);
                }
              );
            }
          }, [z]),
          (0, u.useEffect)(() => {
            var t, o;
            setTimeout(() => {
              M(!0);
            }, (null !== (o = null === (t = l.content) || void 0 === t ? void 0 : t.starts) && void 0 !== o ? o : 0) * 1e3);
          }, []),
          (0, a.jsxs)("div", {
            className: "w-full grid gap-2",
            children: [
              (0, a.jsxs)("div", {
                className: "relative py-1",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between pb-1 font-semibold text-sm theme-font-title theme-color-title",
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-full",
                        children:
                          !!(null === (t = l.content) || void 0 === t
                            ? void 0
                            : t.show_title) &&
                          (0, c.Fm)(
                            null !==
                              (k =
                                null === (o = l.content) || void 0 === o
                                  ? void 0
                                  : o.title) && void 0 !== k
                              ? k
                              : "",
                            null !== (j = null == q ? void 0 : q.variables) &&
                              void 0 !== j
                              ? j
                              : []
                          ),
                      }),
                      (0, a.jsx)("div", {
                        className: "opacity-50 w-[2rem]",
                        children:
                          !!(null === (m = l.content) || void 0 === m
                            ? void 0
                            : m.show_percent) && "".concat(I.toFixed(0), "%"),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "flex rounded-lg relative overflow-hidden",
                    style: {
                      backgroundColor: (0, s.Ld)(
                        (0, s.nF)(
                          null !==
                            (C =
                              null == q
                                ? void 0
                                : null === (p = q.funnel) || void 0 === p
                                ? void 0
                                : null === (v = p.design) || void 0 === v
                                ? void 0
                                : v.themeColor) && void 0 !== C
                            ? C
                            : "#ffffff"
                        ),
                        0.1
                      ),
                    },
                    children: (0, a.jsx)("div", {
                      className: "progress rounded-lg h-[.75rem] min-w-[.1rem]",
                      style: {
                        width: "".concat(I.toFixed(0), "%"),
                        backgroundColor:
                          null !==
                            (N =
                              null == q
                                ? void 0
                                : null === (x = q.funnel) || void 0 === x
                                ? void 0
                                : null === (h = x.design) || void 0 === h
                                ? void 0
                                : h.themeColor) && void 0 !== N
                            ? N
                            : "#00000",
                        transitionDuration: ".05s",
                        transitionTimingFunction: "linear",
                      },
                    }),
                  }),
                ],
              }),
              !!(0, d.ZU)(
                null === (w = l.content) || void 0 === w
                  ? void 0
                  : w.description
              ) &&
                (0, a.jsx)("div", {
                  className: "layer content text pb-1",
                  dangerouslySetInnerHTML: {
                    __html: (0, c.Fm)(
                      null !==
                        (S =
                          null === (y = l.content) || void 0 === y
                            ? void 0
                            : y.description) && void 0 !== S
                        ? S
                        : "",
                      null !== (F = null == q ? void 0 : q.variables) &&
                        void 0 !== F
                        ? F
                        : []
                    ),
                  },
                }),
            ],
          })
        );
      }
    },
    93115: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return MetricUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(12936),
        c = o(41901),
        u = o(67294);
      function MetricUI(l) {
        var t,
          o,
          m,
          v,
          p,
          h,
          x,
          w,
          y,
          k,
          j,
          C,
          N,
          S,
          F,
          q,
          T,
          I,
          L,
          z,
          M,
          Z,
          E,
          U,
          P;
        let { globalContext: D, handleGlobalContext: R } = (0, u.useContext)(
            f.kn
          ),
          [B, A] = (0, u.useState)(!1),
          [H, X] = (0, u.useState)(null),
          [O, V] = (0, u.useState)(0);
        return (
          (0, u.useEffect)(() => {
            setTimeout(() => {
              A(!0);
            }, 1e3);
          }, []),
          (0, u.useEffect)(() => {
            var t, o, a;
            X(
              (0, c.M_)(
                (0, c.Fm)(
                  null == l
                    ? void 0
                    : null === (o = l.content) || void 0 === o
                    ? void 0
                    : null === (t = o.percent) || void 0 === t
                    ? void 0
                    : t.toString(),
                  null !== (a = null == D ? void 0 : D.variables) &&
                    void 0 !== a
                    ? a
                    : [],
                  "0"
                )
              )
            );
          }, [l]),
          (0, a.jsx)("div", {
            className: "w-full grid gap-2",
            children: (0, a.jsxs)("div", {
              className: "relative p-1",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-end pb-2 text-sm",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "pl-1",
                      children: [
                        !!(null === (t = l.content) || void 0 === t
                          ? void 0
                          : t.title) &&
                          (0, a.jsx)("div", {
                            className:
                              "font-semibold theme-font-title theme-color-title",
                            children: (0, c.Fm)(
                              null === (o = l.content) || void 0 === o
                                ? void 0
                                : o.title,
                              null !== (L = null == D ? void 0 : D.variables) &&
                                void 0 !== L
                                ? L
                                : []
                            ),
                          }),
                        !!(null === (m = l.content) || void 0 === m
                          ? void 0
                          : m.subtitle) &&
                          (0, a.jsx)("div", {
                            className: "",
                            children: (0, c.Fm)(
                              null === (v = l.content) || void 0 === v
                                ? void 0
                                : v.subtitle,
                              null !== (z = null == D ? void 0 : D.variables) &&
                                void 0 !== z
                                ? z
                                : []
                            ),
                          }),
                      ],
                    }),
                    !!l.content.show_percent &&
                      (0, a.jsx)("div", {
                        className:
                          "opacity-50 font-semibold theme-font-title theme-color-title",
                        children: "".concat(null != H ? H : "x", "%"),
                      }),
                  ],
                }),
                !!(null === (p = l.content) || void 0 === p
                  ? void 0
                  : p.tooltip) &&
                  (0, a.jsx)("div", {
                    className: "w-full pt-5 relative ".concat(
                      B ? "" : "opacity-0",
                      " ease"
                    ),
                    style: { width: "".concat(H, "%") },
                    children: (0, a.jsxs)("div", {
                      className:
                        "absolute text-xs mb-3 px-3 font-semibold bg-gray-800 text-white right-0 bottom-0 translate-x-1/2 p-[.4rem] rounded-lg",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute left-1/2 bottom-0 p-2 rotate-45 -mt-2 -translate-x-1/2 bg-gray-800",
                        }),
                        (0, a.jsx)("span", {
                          className: "relative",
                          dangerouslySetInnerHTML: {
                            __html: (0, c.Fm)(
                              null === (h = l.content) || void 0 === h
                                ? void 0
                                : h.tooltip,
                              null !== (M = null == D ? void 0 : D.variables) &&
                                void 0 !== M
                                ? M
                                : []
                            ),
                          },
                        }),
                      ],
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: "flex relative rounded-lg",
                  style:
                    "gradient" == l.design.color ||
                    "gradient-invert" == l.design.color
                      ? {
                          background: "linear-gradient( to ".concat(
                            "gradient-invert" == l.design.color
                              ? "left"
                              : "right",
                            ", #14b8a6, #facc15, #facc15, #dc2626 )"
                          ),
                        }
                      : {
                          backgroundColor: (0, s.Ld)(
                            (0, s.nF)(
                              null !==
                                (Z =
                                  null == D
                                    ? void 0
                                    : null === (w = D.funnel) || void 0 === w
                                    ? void 0
                                    : null === (x = w.design) || void 0 === x
                                    ? void 0
                                    : x.backgroundColor) && void 0 !== Z
                                ? Z
                                : "#ffffff"
                            ),
                            0.7
                          ),
                        },
                  children: [
                    (0, a.jsx)("div", {
                      className: "progress ".concat(
                        "theme" != l.design.color ? l.design.color : "",
                        " relative rounded-lg h-[.5rem] min-w-[.1rem]"
                      ),
                      style: {
                        width: "".concat(B ? H : 10, "%"),
                        ...("theme" == l.design.color
                          ? {
                              backgroundColor:
                                null !==
                                  (E =
                                    null == D
                                      ? void 0
                                      : null === (k = D.funnel) || void 0 === k
                                      ? void 0
                                      : null === (y = k.design) || void 0 === y
                                      ? void 0
                                      : y.themeColor) && void 0 !== E
                                  ? E
                                  : "#00000",
                            }
                          : "light" == l.design.color
                          ? {
                              backgroundColor: (0, s.Ld)(
                                (0, s.rX)(
                                  null !==
                                    (U =
                                      null == D
                                        ? void 0
                                        : null === (C = D.funnel) ||
                                          void 0 === C
                                        ? void 0
                                        : null === (j = C.design) ||
                                          void 0 === j
                                        ? void 0
                                        : j.backgroundColor) && void 0 !== U
                                    ? U
                                    : "#ffffff"
                                ),
                                0.3
                              ),
                            }
                          : {}),
                        transitionDuration: "1s",
                        transitionTimingFunction: "ease",
                      },
                    }),
                    "dotted" == l.design.type &&
                      (0, a.jsx)("div", {
                        className: "absolute w-full h-full flex items-center",
                        children: Array.from({ length: 5 }).map((l) => {
                          var t, o, f, s, c;
                          return (0, a.jsx)(
                            "div",
                            {
                              className: "w-full border-4 p-1 ".concat(
                                null !==
                                  (s =
                                    null == D
                                      ? void 0
                                      : null === (t = D.funnel) || void 0 === t
                                      ? void 0
                                      : t.design.rounded) && void 0 !== s
                                  ? s
                                  : "rounded-full",
                                "  -mx-[.1rem]"
                              ),
                              style: {
                                borderColor:
                                  null !==
                                    (c =
                                      null == D
                                        ? void 0
                                        : null === (f = D.funnel) ||
                                          void 0 === f
                                        ? void 0
                                        : null === (o = f.design) ||
                                          void 0 === o
                                        ? void 0
                                        : o.backgroundColor) && void 0 !== c
                                    ? c
                                    : "#ffffff",
                              },
                            },
                            (0, d.Ti)()
                          );
                        }),
                      }),
                    !!l.content.show_dot &&
                      (0, a.jsx)("div", {
                        className: "absolute top-0 left-0 h-full",
                        style: {
                          width: "".concat(B ? H : 10, "%"),
                          transitionDuration: "1s",
                          transitionTimingFunction: "ease",
                        },
                        children: (0, a.jsx)("div", {
                          className:
                            "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-[.4rem] border-4 bg-white rounded-full",
                          style: {
                            borderColor:
                              "gradient" == l.design.color ||
                              "gradient-invert" == l.design.color
                                ? null == D
                                  ? void 0
                                  : null === (S = D.funnel) || void 0 === S
                                  ? void 0
                                  : null === (N = S.design) || void 0 === N
                                  ? void 0
                                  : N.themeColor
                                : (0, s.nF)(
                                    null !==
                                      (P =
                                        null == D
                                          ? void 0
                                          : null === (q = D.funnel) ||
                                            void 0 === q
                                          ? void 0
                                          : null === (F = q.design) ||
                                            void 0 === F
                                          ? void 0
                                          : F.backgroundColor) && void 0 !== P
                                      ? P
                                      : "#ffffff"
                                  ),
                          },
                        }),
                      }),
                  ],
                }),
                !!(null === (T = l.content) || void 0 === T
                  ? void 0
                  : T.legends) &&
                  (0, a.jsx)("div", {
                    className:
                      "flex justify-between font-semibold text-sm pt-1",
                    children:
                      null === (I = l.content) || void 0 === I
                        ? void 0
                        : I.legends.split(",").map((l) => {
                            var t;
                            return (0, a.jsx)(
                              "span",
                              {
                                children: (0, c.Fm)(
                                  l,
                                  null !==
                                    (t = null == D ? void 0 : D.variables) &&
                                    void 0 !== t
                                    ? t
                                    : []
                                ),
                              },
                              (0, d.Ti)()
                            );
                          }),
                  }),
              ],
            }),
          })
        );
      }
    },
    90219: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return OptionsUI;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(23839),
        s = o(23907),
        c = o(41798),
        u = o(41901),
        m = o(49252);
      function OptionsUI(l) {
        var t, o;
        let { globalContext: v, handleGlobalContext: p } = (0, f.useContext)(
          s.kn
        );
        (0, f.useRef)(null);
        let [h, x] = (0, f.useState)(0),
          [w, y] = (0, f.useState)(!1),
          [k, j] = (0, f.useState)({}),
          [C, N] = (0, f.useState)([]),
          handleClick = (t, o) => {
            var a, f, d, s, u, m, h, x, w, k;
            let j =
                null !== (s = null == v ? void 0 : v.validate) && void 0 !== s
                  ? s
                  : {},
              S =
                null !==
                  (m =
                    j[
                      null !== (u = null == l ? void 0 : l.step) && void 0 !== u
                        ? u
                        : l.id
                    ]) && void 0 !== m
                  ? m
                  : {},
              F =
                null !== (h = null == v ? void 0 : v.variables) && void 0 !== h
                  ? h
                  : {},
              q = null !== (x = v.dataForm) && void 0 !== x ? x : {},
              T = (0, c.gx)(l.content.multiple)
                ? C.includes(t.id)
                  ? C.filter((l) => l != t.id)
                  : [...C, t.id]
                : [t.id];
            N(T),
              (q[l.content.id] = T),
              (null === (a = l.content) || void 0 === a ? void 0 : a.name) &&
                ((F[l.content.name] = T.map((t) =>
                  l.content.options
                    .filter((l) => t == l.id)
                    .map((l) => {
                      var t;
                      return null !== (t = l.value) && void 0 !== t
                        ? t
                        : (0, c.ZU)(l.label);
                    })
                ).join("|")),
                T.map((t) =>
                  l.content.options
                    .filter((l) => t == l.id)
                    .map((t) => {
                      var o;
                      F["score.".concat(l.content.name)] ||
                        (F["score.".concat(l.content.name)] = 0),
                        (F["score.".concat(l.content.name)] += Number(
                          null !== (o = null == t ? void 0 : t.score) &&
                            void 0 !== o
                            ? o
                            : "0"
                        ));
                    })
                )),
              (S[l.content.id] = !!T.length),
              (j[
                null !== (w = null == l ? void 0 : l.step) && void 0 !== w
                  ? w
                  : l.id
              ] = S);
            let I = {
              lastInteract: l.content.name,
              dataForm: q,
              validate: j,
              variables: F,
            };
            (0, c.gx)(l.content.multiple) ||
              (0, c.gx)(l.content.awaitSubmit) ||
              (I.onSubmit = !v.onSubmit),
              (I.goTo = v.funnel.navigation[t.id]
                ? v.funnel.navigation[t.id]
                : null !== (k = t.destination) && void 0 !== k
                ? k
                : "next"),
              (null === (d = v.funnel) || void 0 === d
                ? void 0
                : null === (f = d.steps) || void 0 === f
                ? void 0
                : f.filter((l) => l.id == t.destination).length) ||
                (I.goTo = "next"),
              I.goTo && p(I, "OptionsUI"),
              setTimeout(() => {
                y(!1);
              }, 1e3);
          };
        return (
          (0, f.useEffect)(() => {
            j(v.funnel.design);
          }, [v.funnel.design]),
          (0, f.useEffect)(() => {
            var t, o, a, f;
            let d = [];
            if (
              ((null == v ? void 0 : v.dataForm) &&
                (null == v ? void 0 : v.dataForm[l.content.id]) &&
                (d = null == v ? void 0 : v.dataForm[l.content.id]),
              N(d),
              (0, c.gx)(
                null === (t = l.content) || void 0 === t ? void 0 : t.required
              ) &&
                (null == l ? void 0 : l.step) &&
                !v.devMode)
            ) {
              let t =
                  null !== (a = null == v ? void 0 : v.validate) && void 0 !== a
                    ? a
                    : {},
                s =
                  null !== (f = t[null == l ? void 0 : l.step]) && void 0 !== f
                    ? f
                    : {};
              (s[null === (o = l.content) || void 0 === o ? void 0 : o.id] =
                !!d.length),
                (t[null == l ? void 0 : l.step] = s),
                p({ validate: t }, "validate OptionsUI");
            }
          }, []),
          (0, a.jsxs)("div", {
            className: "grid gap-4",
            children: [
              (!!l.content.title || !!l.content.description) &&
                (0, a.jsxs)("div", {
                  className: "grid mt-4 gap-3 text-center",
                  children: [
                    !!l.content.title &&
                      (0, a.jsx)("h3", {
                        className:
                          "theme-color-title theme-font-title text-[1.5rem] leading-tight font-semibold",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.hU)(l.content.title),
                        },
                      }),
                    !!l.content.description &&
                      (0, a.jsx)("div", {
                        className: "content text leading-tight mb-2",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.hU)(l.content.description),
                        },
                      }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: "grid "
                  .concat(l.content.cols, " ")
                  .concat(
                    null !==
                      (o =
                        null === (t = l.design) || void 0 === t
                          ? void 0
                          : t.gap) && void 0 !== o
                      ? o
                      : "gap-2"
                  ),
                children: l.content.options.map((t, o) => {
                  var f,
                    s,
                    p,
                    h,
                    x,
                    y,
                    j,
                    N,
                    S,
                    F,
                    q,
                    T,
                    I,
                    L,
                    z,
                    M,
                    Z,
                    E,
                    U,
                    P,
                    D,
                    R,
                    B,
                    A,
                    H,
                    X,
                    O;
                  return (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      onClick: () => (w ? {} : handleClick(t, o)),
                      className: "group "
                        .concat(
                          C.includes(t.id) ? "active" : "",
                          " flex items-center "
                        )
                        .concat(
                          "horizontal" == l.content.orientation
                            ? "default" == l.content.order
                              ? "flex-row text-left"
                              : "flex-row-reverse text-left"
                            : "default" == l.content.order
                            ? "flex-col text-center"
                            : "flex-col-reverse text-center",
                          " cursor-pointer ease option-theme "
                        )
                        .concat(
                          null !==
                            (R =
                              null === (f = l.design) || void 0 === f
                                ? void 0
                                : f.border) && void 0 !== R
                            ? R
                            : "border",
                          " "
                        )
                        .concat(
                          null !==
                            (B =
                              null === (s = l.design) || void 0 === s
                                ? void 0
                                : s.shadow) && void 0 !== B
                            ? B
                            : "shadow-none",
                          " option-background-"
                        )
                        .concat(
                          null !==
                            (A =
                              null === (p = l.design) || void 0 === p
                                ? void 0
                                : p.background) && void 0 !== A
                            ? A
                            : "default",
                          " relative overflow-hidden "
                        )
                        .concat(
                          null !== (H = null == k ? void 0 : k.rounded) &&
                            void 0 !== H
                            ? H
                            : "rounded-lg"
                        ),
                      children: [
                        !!(null == t
                          ? void 0
                          : null === (h = t.image) || void 0 === h
                          ? void 0
                          : h.src) &&
                          (0, a.jsx)("div", {
                            style: {
                              backgroundColor:
                                (null === (x = t.image) || void 0 === x
                                  ? void 0
                                  : x.type) != "emoji"
                                  ? k.backgroundColor
                                  : "transparent",
                            },
                            className: " ".concat(
                              "horizontal" == l.content.orientation
                                ? "max-w-[4rem]"
                                : ""
                            ),
                            children:
                              (null === (y = t.image) || void 0 === y
                                ? void 0
                                : y.type) != "emoji" &&
                              (0, c.jv)(
                                null === (j = t.image) || void 0 === j
                                  ? void 0
                                  : j.src
                              )
                                ? (0, a.jsx)(d.Z, {
                                    src:
                                      null === (N = t.image) || void 0 === N
                                        ? void 0
                                        : N.src,
                                    priority: !0,
                                  })
                                : (0, a.jsx)("div", {
                                    className: "text-4xl p-3",
                                    children:
                                      (null === (S = t.image) || void 0 === S
                                        ? void 0
                                        : S.type) != "emoji"
                                        ? (0, c.S7)(
                                            null === (F = t.image) ||
                                              void 0 === F
                                              ? void 0
                                              : F.src
                                          )
                                        : (0, c.Zq)(
                                            null === (q = t.image) ||
                                              void 0 === q
                                              ? void 0
                                              : q.src
                                          ),
                                  }),
                          }),
                        (0, a.jsxs)("div", {
                          className: "w-full flex justify-between items-center",
                          children: [
                            (0, a.jsx)("div", {
                              style: {
                                minHeight:
                                  (null === (T = t.image) || void 0 === T
                                    ? void 0
                                    : T.type) != "emoji"
                                    ? null !==
                                        (X =
                                          null == k ? void 0 : k.elementSize) &&
                                      void 0 !== X
                                      ? X
                                      : "60px"
                                    : "0",
                              },
                              className: ""
                                .concat(
                                  (null === (I = l.design) || void 0 === I
                                    ? void 0
                                    : I.icon) &&
                                    (null === (L = l.design) || void 0 === L
                                      ? void 0
                                      : L.icon) != "none"
                                    ? "text-left"
                                    : "",
                                  " w-full "
                                )
                                .concat(
                                  (null === (z = t.image) || void 0 === z
                                    ? void 0
                                    : z.type) != "emoji"
                                    ? "p-4"
                                    : "horizontal" == l.content.orientation &&
                                      "default" == l.content.order
                                    ? "py-4 px-2"
                                    : "p-3",
                                  "  flex flex-col justify-center text-[1rem] leading-tight"
                                ),
                              dangerouslySetInnerHTML: {
                                __html: (0, c.hU)(
                                  (0, u.Fm)(
                                    t.label,
                                    null !==
                                      (O = null == v ? void 0 : v.variables) &&
                                      void 0 !== O
                                      ? O
                                      : []
                                  )
                                ),
                              },
                            }),
                            !!(null === (M = l.design) || void 0 === M
                              ? void 0
                              : M.icon) &&
                              (null === (Z = l.design) || void 0 === Z
                                ? void 0
                                : Z.icon) != "none" &&
                              (0, a.jsx)("div", {
                                className: "px-3 py-2",
                                children: (0, a.jsx)("div", {
                                  className: "option-icon-"
                                    .concat(
                                      null === (E = l.design) || void 0 === E
                                        ? void 0
                                        : E.icon,
                                      " "
                                    )
                                    .concat(
                                      (0, c.gx)(
                                        null === (U = l.content) || void 0 === U
                                          ? void 0
                                          : U.multiple
                                      )
                                        ? "rounded-md"
                                        : "rounded-full",
                                      " p-[.75rem] relative"
                                    ),
                                  children: (0, a.jsx)(m.Z, {
                                    icon:
                                      (null === (P = l.design) || void 0 === P
                                        ? void 0
                                        : P.icon) == "select"
                                        ? "fa-check"
                                        : "fa-chevron-right",
                                    className: "".concat(
                                      (null === (D = l.design) || void 0 === D
                                        ? void 0
                                        : D.icon) == "select"
                                        ? "opacity-0 group-[.active]:opacity-100"
                                        : "",
                                      " absolute ml-[.05rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"
                                    ),
                                    type: "far",
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    },
                    (0, c.Ti)()
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    58587: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return PlansUI;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(23907),
        s = o(41798),
        c = o(41901),
        u = o(49252);
      function PlansUI(l) {
        var t, o, m;
        let { globalContext: v, handleGlobalContext: p } = (0, f.useContext)(
            d.kn
          ),
          [h, x] = (0, f.useState)(!1),
          [w, y] = (0, f.useState)({}),
          [k, j] = (0, f.useState)([]),
          handleClick = (t, o) => {
            var a, f, d;
            let c =
                null !== (f = null == v ? void 0 : v.variables) && void 0 !== f
                  ? f
                  : {},
              u = null !== (d = v.dataForm) && void 0 !== d ? d : {},
              m = [t.id];
            j(m),
              (u[l.content.id] = m),
              (null === (a = l.content) || void 0 === a ? void 0 : a.name) &&
                (c[l.content.name] = m
                  .map((t) => {
                    var o;
                    return (
                      null !== (o = l.content.plans) && void 0 !== o ? o : []
                    )
                      .filter((l) => t == l.id)
                      .map((l) => {
                        var t;
                        return null !== (t = l.value) && void 0 !== t
                          ? t
                          : (0, s.ZU)(l.title);
                      });
                  })
                  .join("|"));
            let h = { lastInteract: l.content.name, dataForm: u, variables: c };
            (0, s.gx)(l.content.awaitSubmit) ||
              (x(!0), (h.onSubmit = !v.onSubmit)),
              (h.goTo = t.destination),
              h.goTo && p(h, "PlansUI"),
              setTimeout(() => {
                x(!1);
              }, 1e3);
          };
        return (
          (0, f.useEffect)(() => {
            y(v.funnel.design);
          }, [v.funnel.design]),
          (0, f.useEffect)(() => {
            let t = [];
            (null == v ? void 0 : v.dataForm) &&
              (null == v ? void 0 : v.dataForm[l.content.id]) &&
              (t = null == v ? void 0 : v.dataForm[l.content.id]),
              j(t);
          }, []),
          (0, a.jsx)("div", {
            className: "grid gap-4",
            children: (0, a.jsx)("div", {
              className: "grid "
                .concat(l.content.cols, " ")
                .concat(
                  null !==
                    (o =
                      null === (t = l.design) || void 0 === t
                        ? void 0
                        : t.gap) && void 0 !== o
                    ? o
                    : "gap-2"
                ),
              children: (null !== (m = l.content.plans) && void 0 !== m
                ? m
                : []
              ).map((t, o) => {
                var f, d, m, p, x, y, j, C, N, S, F, q, T;
                return (0, a.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => (h ? {} : handleClick(t, o)),
                    className: "group "
                      .concat(
                        k.includes(t.id) ? "active" : "",
                        " flex items-start "
                      )
                      .concat(
                        "grid-cols-1" == l.content.cols
                          ? "flex-wrap justify-between"
                          : "flex-col  justify-between gap-1",
                        "  items-center cursor-pointer ease plan-theme "
                      )
                      .concat(
                        null !==
                          (y =
                            null === (f = l.design) || void 0 === f
                              ? void 0
                              : f.border) && void 0 !== y
                          ? y
                          : "border",
                        " "
                      )
                      .concat(
                        null !==
                          (j =
                            null === (d = l.design) || void 0 === d
                              ? void 0
                              : d.shadow) && void 0 !== j
                          ? j
                          : "shadow-none",
                        " plan-background-"
                      )
                      .concat(
                        null !==
                          (C =
                            null === (m = l.design) || void 0 === m
                              ? void 0
                              : m.background) && void 0 !== C
                          ? C
                          : "default",
                        " relative overflow-hidden  "
                      )
                      .concat(
                        null !== (N = null == w ? void 0 : w.rounded) &&
                          void 0 !== N
                          ? N
                          : "rounded-lg"
                      ),
                    children: [
                      !!t.featured &&
                        (0, a.jsx)("div", {
                          className:
                            "btn-theme text-center theme-font-title font-semibold py-1 w-full bg-featured text-sm",
                          children: t.featured,
                        }),
                      (0, a.jsxs)("div", {
                        className: "".concat(
                          "grid-cols-1" == l.content.cols
                            ? "gap-3"
                            : "flex-col gap-2 pt-3",
                          " flex px-3 items-center w-fit"
                        ),
                        children: [
                          !!(null === (p = l.design) || void 0 === p
                            ? void 0
                            : p.icon) &&
                            (null === (x = l.design) || void 0 === x
                              ? void 0
                              : x.icon) != "none" &&
                            (0, a.jsx)("div", {
                              className:
                                "option-icon-select rounded-full p-[.55rem] relative",
                              children: (0, a.jsx)(u.Z, {
                                icon: "fa-circle",
                                className:
                                  "opacity-0 group-[.active]:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[.5rem]",
                                type: "fa",
                              }),
                            }),
                          (0, a.jsx)("div", {
                            className:
                              "plan content text w-full flex justify-between items-center",
                            children: (0, a.jsx)("div", {
                              style: {
                                minHeight:
                                  "grid-cols-1" == l.content.cols
                                    ? null == w
                                      ? void 0
                                      : w.elementSize
                                    : 0,
                              },
                              className: "".concat(
                                "grid-cols-1" == l.content.cols
                                  ? "text-left"
                                  : "text-center",
                                " theme-font-title font-bold text-[1rem] leading-tight"
                              ),
                              children: (0, s.hU)(
                                (0, c.Fm)(
                                  t.title,
                                  null !==
                                    (S = null == v ? void 0 : v.variables) &&
                                    void 0 !== S
                                    ? S
                                    : []
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "w-fit grid text-right p-3",
                        children: [
                          !!(null == t ? void 0 : t.before) &&
                            (0, a.jsx)("div", {
                              className: "text-xs text-left opacity-70",
                              children: (0, c.Fm)(
                                t.before,
                                null !==
                                  (F = null == v ? void 0 : v.variables) &&
                                  void 0 !== F
                                  ? F
                                  : []
                              ),
                            }),
                          !!t.value &&
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)("div", {
                                className:
                                  "text-2xl whitespace-nowrap leading-none theme-font-title font-bold",
                                children: (0, c.Fm)(
                                  t.value.replace("R$", "").trim(),
                                  null !==
                                    (q = null == v ? void 0 : v.variables) &&
                                    void 0 !== q
                                    ? q
                                    : []
                                ),
                              }),
                            }),
                          !!t.after &&
                            (0, a.jsx)("div", {
                              className: "text-xs opacity-70",
                              children: (0, c.Fm)(
                                t.after,
                                null !==
                                  (T = null == v ? void 0 : v.variables) &&
                                  void 0 !== T
                                  ? T
                                  : []
                              ),
                            }),
                        ],
                      }),
                    ],
                  },
                  (0, s.Ti)()
                );
              }),
            }),
          })
        );
      }
    },
    49306: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return PriceUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41901),
        s = o(67294),
        c = o(41798),
        u = o(12936);
      function PriceUI(l) {
        var t,
          o,
          m,
          v,
          p,
          h,
          x,
          w,
          y,
          k,
          j,
          C,
          N,
          S,
          F,
          q,
          T,
          I,
          L,
          z,
          M,
          Z,
          E,
          U,
          P,
          D,
          R,
          B,
          A,
          H,
          X,
          O,
          V,
          G,
          $;
        let { globalContext: W, handleGlobalContext: J } = (0, s.useContext)(
            f.kn
          ),
          [Q, Y] = (0, s.useState)({}),
          K = {
            theme: "bg-[var(--theme-featured-color)]",
            danger: "bg-red-700",
            info: "bg-blue-700",
            success: "bg-green-700",
            light: "bg-zinc-700",
            warning: "bg-yellow-700",
          },
          ee = {
            theme: "border-[var(--theme-border-color)] ".concat(
              (null === (t = l.content) || void 0 === t ? void 0 : t.type)
                ? "group-hover/item:border-[var(--theme-featured-color)] bg-[var(--theme-background-color)]"
                : "",
              " text-[var(--theme-title-color)]"
            ),
            danger: "border-red-100 ".concat(
              (null === (o = l.content) || void 0 === o ? void 0 : o.type)
                ? "group-hover/item:border-red-300"
                : "",
              " bg-red-100 text-red-700"
            ),
            info: "border-blue-100 ".concat(
              (null === (m = l.content) || void 0 === m ? void 0 : m.type)
                ? "group-hover/item:border-blue-300"
                : "",
              " bg-blue-100 text-blue-700"
            ),
            success: "border-green-100 ".concat(
              (null === (v = l.content) || void 0 === v ? void 0 : v.type)
                ? "group-hover/item:border-green-300"
                : "",
              " bg-green-100 text-green-700"
            ),
            light: "border-zinc-100 ".concat(
              (null === (p = l.content) || void 0 === p ? void 0 : p.type)
                ? "group-hover/item:border-zinc-300"
                : "",
              " bg-zinc-100 text-zinc-700"
            ),
            warning: "border-yellow-100 ".concat(
              (null === (h = l.content) || void 0 === h ? void 0 : h.type)
                ? "group-hover/item:border-yellow-300"
                : "",
              " bg-yellow-100 text-yellow-700"
            ),
          },
          ei = {
            theme:
              "border-[var(--theme-border-color)] group-hover/item:border-[var(--theme-featured-color)] bg-[var(--theme-background-color)] text-[var(--theme-title-color)]",
            danger:
              "border-red-300 group-hover/item:border-red-400 bg-red-100 text-red-700",
            info: "border-blue-300 group-hover/item:border-blue-400 bg-blue-100 text-blue-700",
            success:
              "border-green-300 group-hover/item:border-green-400 bg-green-100 text-green-700",
            light:
              "border-zinc-300 group-hover/item:border-zinc-400 bg-zinc-100 text-zinc-700",
            warning:
              "border-yellow-300 group-hover/item:border-yellow-400 bg-yellow-100 text-yellow-700",
          },
          handleClick = () => {
            var t, o, a;
            let f = {
              goTo:
                null !==
                  (a =
                    null === (t = l.content) || void 0 === t
                      ? void 0
                      : t.destination) && void 0 !== a
                  ? a
                  : "",
            };
            (null === (o = l.content) || void 0 === o ? void 0 : o.redirect) &&
              l.content.destination &&
              (f.onSubmit = !W.onSubmit),
              f.goTo && J(f, "handleClick Price");
          };
        return (
          (0, s.useEffect)(() => {
            Y(W.funnel.design);
          }, [W]),
          (0, s.useEffect)(() => {
            l.content.featured &&
              l.content.destination &&
              !l.content.redirect &&
              (J({ goTo: l.content.destination }, "PriceUI"),
              console.log(l.content));
          }, []),
          (0, a.jsx)("div", {
            className: "grid group/item",
            children: (0, a.jsxs)("div", {
              onClick: () => {
                var t;
                return (null === (t = l.content) || void 0 === t
                  ? void 0
                  : t.type) == "redirect"
                  ? handleClick()
                  : {};
              },
              className: ""
                .concat(
                  (null === (x = l.content) || void 0 === x ? void 0 : x.type)
                    ? "cursor-pointer"
                    : "",
                  " relative border ease overflow-hidden "
                )
                .concat(
                  ee[
                    (null === (w = l.design) || void 0 === w ? void 0 : w.style)
                      ? null === (y = l.design) || void 0 === y
                        ? void 0
                        : y.style
                      : "theme"
                  ],
                  " "
                )
                .concat(
                  null !== (B = null == Q ? void 0 : Q.rounded) && void 0 !== B
                    ? B
                    : "rounded-lg"
                ),
              children: [
                !!l.content.featured &&
                  (0, a.jsx)("div", {
                    className:
                      "bg-[var(--theme-featured-color)] text-[var(--theme-featured-text-color)] theme-font-title font-semibold text-center py-1 w-full text-sm",
                    children: l.content.featured,
                  }),
                (0, a.jsxs)("div", {
                  className: "".concat(
                    (null === (k = l.design) || void 0 === k
                      ? void 0
                      : k.layout) == "vertical"
                      ? "grid gap-4 pt-4 pb-4 px-2"
                      : "flex gap-1 p-2",
                    " items-center leading-tight"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "items-center px-2 w-full ".concat(
                        (null === (j = l.design) || void 0 === j
                          ? void 0
                          : j.layout) == "vertical"
                          ? "grid text-center"
                          : "flex gap-2"
                      ),
                      children: [
                        (null === (C = l.content) || void 0 === C
                          ? void 0
                          : C.type) == "redirect" &&
                          (null === (N = l.content) || void 0 === N
                            ? void 0
                            : N.radio) &&
                          (0, a.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, a.jsxs)("div", {
                              className:
                                "rounded-full w-[1.5rem] h-[1.5rem] relative border ease ".concat(
                                  ei[
                                    (
                                      null === (S = l.design) || void 0 === S
                                        ? void 0
                                        : S.style
                                    )
                                      ? null === (F = l.design) || void 0 === F
                                        ? void 0
                                        : F.style
                                      : "theme"
                                  ]
                                ),
                              children: [
                                W.goTo ==
                                  (null === (q = l.content) || void 0 === q
                                    ? void 0
                                    : q.destination),
                                !!W.goTo &&
                                  W.goTo ==
                                    (null === (T = l.content) || void 0 === T
                                      ? void 0
                                      : T.destination) &&
                                  (0, a.jsx)("div", {
                                    className: "".concat(
                                      K[
                                        (
                                          null === (I = l.design) ||
                                          void 0 === I
                                            ? void 0
                                            : I.style
                                        )
                                          ? null === (L = l.design) ||
                                            void 0 === L
                                            ? void 0
                                            : L.style
                                          : "theme"
                                      ],
                                      " absolute w-[.8rem] h-[.8rem] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        !!(0, c.ZU)(
                          null === (z = l.content) || void 0 === z
                            ? void 0
                            : z.title
                        ) &&
                          (0, a.jsx)("div", {
                            className: "text-xl theme-font-title",
                            dangerouslySetInnerHTML: {
                              __html: (0, d.Fm)(
                                null !== (A = l.content.title) && void 0 !== A
                                  ? A
                                  : "",
                                null !==
                                  (H = null == W ? void 0 : W.variables) &&
                                  void 0 !== H
                                  ? H
                                  : []
                              ),
                            },
                          }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "".concat(
                        (0, c.ZU)(l.content.title) &&
                          (null === (M = l.design) || void 0 === M
                            ? void 0
                            : M.layout) != "vertical"
                          ? "w-fit text-right"
                          : "w-full text-center"
                      ),
                      children: (0, a.jsxs)("div", {
                        className: "relative mx-auto inline-block p-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "absolute inset-0 rounded-lg",
                            style: {
                              backgroundColor: (
                                null == Q ? void 0 : Q.backgroundColor
                              )
                                ? (0, u.Ld)(
                                    (0, u.rX)(
                                      null == Q ? void 0 : Q.backgroundColor
                                    ),
                                    0.05
                                  )
                                : "inherit",
                            },
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "relative leading-none text-xs opacity-70 text-left",
                            dangerouslySetInnerHTML: {
                              __html: (0, d.Fm)(
                                l.content.before,
                                null !==
                                  (X = null == W ? void 0 : W.variables) &&
                                  void 0 !== X
                                  ? X
                                  : []
                              ),
                            },
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "relative leading-none py-[.2rem] text-2xl whitespace-nowrap theme-font-title font-bold",
                            dangerouslySetInnerHTML: {
                              __html: (0, d.lp)(
                                (0, d.Fm)(
                                  l.content.value,
                                  null !==
                                    (O = null == W ? void 0 : W.variables) &&
                                    void 0 !== O
                                    ? O
                                    : []
                                ),
                                "R$",
                                "span",
                                "font-size: .9rem"
                              ),
                            },
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "relative leading-none text-xs text-right opacity-70",
                            dangerouslySetInnerHTML: {
                              __html: (0, d.Fm)(
                                l.content.after,
                                null !==
                                  (V = null == W ? void 0 : W.variables) &&
                                  void 0 !== V
                                  ? V
                                  : []
                              ),
                            },
                          }),
                        ],
                      }),
                    }),
                    !!l.content.description &&
                      (null === (Z = l.design) || void 0 === Z
                        ? void 0
                        : Z.layout) == "vertical" &&
                      !!(0, c.ZU)(
                        null === (E = l.content) || void 0 === E
                          ? void 0
                          : E.description
                      ) &&
                      (0, a.jsx)("div", {
                        className: "w-full",
                        children: (0, a.jsx)("div", {
                          className: "text-sm content",
                          dangerouslySetInnerHTML: {
                            __html: (0, d.Fm)(
                              null === (U = l.content) || void 0 === U
                                ? void 0
                                : U.description,
                              null !== (G = null == W ? void 0 : W.variables) &&
                                void 0 !== G
                                ? G
                                : []
                            ),
                          },
                        }),
                      }),
                  ],
                }),
                !!l.content.description &&
                  (null === (P = l.design) || void 0 === P
                    ? void 0
                    : P.layout) != "vertical" &&
                  !!(0, c.ZU)(
                    null === (D = l.content) || void 0 === D
                      ? void 0
                      : D.description
                  ) &&
                  (0, a.jsx)("div", {
                    className: "w-full pb-4 pt-2 px-4",
                    children: (0, a.jsx)("div", {
                      className: "text-sm content",
                      dangerouslySetInnerHTML: {
                        __html: (0, d.Fm)(
                          null === (R = l.content) || void 0 === R
                            ? void 0
                            : R.description,
                          null !== ($ = null == W ? void 0 : W.variables) &&
                            void 0 !== $
                            ? $
                            : []
                        ),
                      },
                    }),
                  }),
              ],
            }),
          })
        );
      }
    },
    27830: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return QuotesUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41798),
        s = o(23839),
        c = o(41901),
        u = o(67294),
        m = o(49252),
        v = o(22546),
        p = o(86523);
      function QuotesUI(l) {
        var t, o, h, x, w, y;
        let { globalContext: k, handleGlobalContext: j } = (0, u.useContext)(
            f.kn
          ),
          [C, N] = (0, u.useState)({}),
          getChildren = (t) => {
            var o, f, u, v, p, h, x, w;
            return (0, a.jsx)("div", {
              className: ""
                .concat(
                  null !==
                    (p =
                      null === (o = k.funnel.design) || void 0 === o
                        ? void 0
                        : o.rounded) && void 0 !== p
                    ? p
                    : "rounded-lg",
                  " quote-theme "
                )
                .concat(
                  null !==
                    (h =
                      null === (f = l.design) || void 0 === f
                        ? void 0
                        : f.border) && void 0 !== h
                    ? h
                    : "border",
                  " "
                )
                .concat(
                  null !==
                    (x =
                      null === (u = l.design) || void 0 === u
                        ? void 0
                        : u.shadow) && void 0 !== x
                    ? x
                    : "shadow-none",
                  " ease content text relative grid p-4"
                ),
              children: (0, a.jsxs)("div", {
                className: "".concat(
                  "grid" == l.content.layout ? "" : "flex",
                  " items-start gap-3"
                ),
                children: [
                  !!(null == t
                    ? void 0
                    : null === (v = t.image) || void 0 === v
                    ? void 0
                    : v.src) &&
                    (0, a.jsx)("div", {
                      className: "p-5 inline-block relative",
                      children:
                        "emoji" != t.image.type && (0, d.jv)(t.image.src)
                          ? (0, a.jsx)(s.Z, {
                              src: t.image.src,
                              className:
                                "absolute inset-0 h-full w-full object-cover rounded-full",
                            })
                          : (0, a.jsx)("div", {
                              className: "text-6xl py-4",
                              children: t.image.src,
                            }),
                    }),
                  (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex gap-[.1rem]",
                        children: Array.from({ length: t.rate }).map((l, t) =>
                          (0, a.jsx)(
                            m.Z,
                            {
                              icon: "fa-star",
                              type: "fa",
                              className: "text-xs text-yellow-400",
                            },
                            t
                          )
                        ),
                      }),
                      !!t.name &&
                        (0, a.jsx)("div", {
                          className:
                            "theme-font-title theme-color-title font-semibold",
                          children: t.name,
                        }),
                      !!t.activity &&
                        (0, a.jsx)("div", {
                          className: "text-xs",
                          children: t.activity,
                        }),
                      (0, a.jsx)("div", {
                        className: "pt-2",
                        dangerouslySetInnerHTML: {
                          __html: (0, c.Fm)(
                            t.text,
                            null !== (w = null == k ? void 0 : k.variables) &&
                              void 0 !== w
                              ? w
                              : []
                          ),
                        },
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        return (
          (0, u.useEffect)(() => {
            N(k.funnel.design);
          }, [k.funnel.design]),
          "slide" == l.content.layout
            ? (0, a.jsxs)("div", {
                className: "relative",
                children: [
                  (0, a.jsxs)(v.tq, {
                    loop: !0,
                    slidesPerView: 1.2,
                    centeredSlides: !0,
                    autoplay: { delay: 2500, disableOnInteraction: !1 },
                    spaceBetween: 8,
                    modules: [p.pt],
                    children: [
                      l.content.quotes.map((t, o) => {
                        var f, d, s, c;
                        return (0, a.jsx)(
                          v.o5,
                          {
                            className: "".concat(
                              (null === (f = l.design) || void 0 === f
                                ? void 0
                                : f.shadow) == "shadow-sm"
                                ? "py-2"
                                : (null === (d = l.design) || void 0 === d
                                    ? void 0
                                    : d.shadow) == "shadow-md"
                                ? "py-2"
                                : (null === (s = l.design) || void 0 === s
                                    ? void 0
                                    : s.shadow) == "shadow-lg"
                                ? "py-5"
                                : (null === (c = l.design) || void 0 === c
                                    ? void 0
                                    : c.shadow) == "shadow-xl"
                                ? "py-9"
                                : ""
                            ),
                            children: getChildren(t),
                          },
                          "".concat(t.id).concat(o)
                        );
                      }),
                      l.content.quotes.map((t, o) => {
                        var f, d, s, c;
                        return (0, a.jsx)(
                          v.o5,
                          {
                            className: "".concat(
                              (null === (f = l.design) || void 0 === f
                                ? void 0
                                : f.shadow) == "shadow-sm"
                                ? "py-2"
                                : (null === (d = l.design) || void 0 === d
                                    ? void 0
                                    : d.shadow) == "shadow-md"
                                ? "py-2"
                                : (null === (s = l.design) || void 0 === s
                                    ? void 0
                                    : s.shadow) == "shadow-lg"
                                ? "py-5"
                                : (null === (c = l.design) || void 0 === c
                                    ? void 0
                                    : c.shadow) == "shadow-xl"
                                ? "py-9"
                                : ""
                            ),
                            children: getChildren(t),
                          },
                          "".concat(o).concat(t.id)
                        );
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundImage: "linear-gradient(to right, ".concat(
                        k.funnel.design.backgroundColor,
                        ", transparent)"
                      ),
                    },
                    className: "absolute z-[1] top-0 left-0 h-full px-3",
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundImage:
                        "linear-gradient(to right, transparent, ".concat(
                          k.funnel.design.backgroundColor,
                          ")"
                        ),
                    },
                    className: "absolute z-[1] top-0 right-0 h-full px-3",
                  }),
                ],
              })
            : (0, a.jsx)("div", {
                className: "grid "
                  .concat("grid" == l.content.layout ? "grid-cols-2" : "", " ")
                  .concat(
                    null !==
                      (y =
                        null === (t = l.design) || void 0 === t
                          ? void 0
                          : t.gap) && void 0 !== y
                      ? y
                      : "gap-2",
                    " "
                  )
                  .concat(
                    (null === (o = l.design) || void 0 === o
                      ? void 0
                      : o.gap) == "gap-2"
                      ? "py-2"
                      : (null === (h = l.design) || void 0 === h
                          ? void 0
                          : h.gap) == "gap-4"
                      ? "py-2"
                      : (null === (x = l.design) || void 0 === x
                          ? void 0
                          : x.gap) == "gap-6"
                      ? "py-5"
                      : (null === (w = l.design) || void 0 === w
                          ? void 0
                          : w.gap) == "gap-8"
                      ? "py-9"
                      : ""
                  ),
                children: l.content.quotes.map((l, t) =>
                  (0, a.jsx)(u.Fragment, { children: getChildren(l) }, t)
                ),
              })
        );
      }
      o(92261), o(56735);
    },
    78544: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return ScriptUI;
        },
      });
      var a = o(85893),
        f = o(25629),
        d = o(23907),
        s = o(67294);
      function ScriptUI(l) {
        let { globalContext: t, handleGlobalContext: o } = (0, s.useContext)(
            d.kn
          ),
          c = (0, s.useRef)(!1);
        return (
          (0, s.useEffect)(() => {
            !c.current &&
              window &&
              !t.devMode &&
              (setTimeout(() => {
                (0, f.handleScripts)({ footer: l.content.script });
              }, 100),
              (c.current = !0));
          }, []),
          t.devMode
            ? (0, a.jsx)("div", {
                className:
                  "relative max-w-full bg-gray-800 rounded-md p-2 overflow-auto break-all whitespace-break-spaces text-xs text-green-500 min-h-[10rem]",
                children: !!l.content.script && "".concat(l.content.script),
              })
            : (0, a.jsx)(a.Fragment, {})
        );
      }
    },
    80307: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return TextUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41901),
        s = o(67294);
      function TextUI(l) {
        var t;
        let { globalContext: o, handleGlobalContext: c } = (0, s.useContext)(
          f.kn
        );
        return (0, a.jsx)("div", {
          className: "py-1",
          children: (0, a.jsx)("div", {
            className: "content text break-words bg-theme py-2",
            dangerouslySetInnerHTML: {
              __html: (0, d.Fm)(
                l.content.text,
                null !== (t = null == o ? void 0 : o.variables) && void 0 !== t
                  ? t
                  : []
              ),
            },
            style: { wordBreak: "break-word" },
          }),
        });
      }
    },
    1221: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return TimerUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(41901),
        s = o(67294);
      function TimerUI(l) {
        var t, o, c, u, m;
        let { globalContext: v, handleGlobalContext: p } = (0, s.useContext)(
            f.kn
          ),
          h = {
            theme: "timer-theme",
            danger: "bg-red-100 text-red-700",
            info: "bg-blue-100 text-blue-700",
            success: "bg-green-100 text-green-700",
            light: "bg-zinc-100 text-zinc-700",
            warning: "bg-yellow-100 text-yellow-700",
          },
          [x, w] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
          var t, o;
          w(
            parseInt(
              ((null === (t = l.content) || void 0 === t ? void 0 : t.time)
                ? null === (o = l.content) || void 0 === o
                  ? void 0
                  : o.time
                : 0
              ).toString()
            )
          );
        }, [l.content.time]),
          (0, s.useEffect)(() => {
            if (!v.devMode) {
              let l = setInterval(() => {
                w((t) => (t > 0 ? t - 1 : (clearInterval(l), 0)));
              }, 1e3);
              return () => clearInterval(l);
            }
          }, []);
        let formatTime = (l) => {
          let t = Math.floor(l / 60),
            o = l % 60,
            a = String(t).padStart(2, "0"),
            f = String(o).padStart(2, "0");
          return "".concat(a, ":").concat(f);
        };
        return (0, a.jsx)("div", {
          className: "grid content text-[1rem] leading-tight",
          children: (0, a.jsx)("div", {
            className: ""
              .concat(
                null !==
                  (o =
                    null === (t = v.funnel.design) || void 0 === t
                      ? void 0
                      : t.rounded) && void 0 !== o
                  ? o
                  : "rounded-lg",
                " "
              )
              .concat(
                h[null !== (c = l.design.style) && void 0 !== c ? c : "danger"],
                " py-4 px-5 leading-tight"
              ),
            children: (0, a.jsx)("div", {
              className: "",
              dangerouslySetInnerHTML: {
                __html: (0, d.Fm)(
                  (null !== (u = l.content.text) && void 0 !== u
                    ? u
                    : ""
                  ).replace("[time]", formatTime(x)),
                  null !== (m = null == v ? void 0 : v.variables) &&
                    void 0 !== m
                    ? m
                    : []
                ),
              },
            }),
          }),
        });
      }
    },
    37493: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return VideoUI;
        },
      });
      var a = o(85893),
        f = o(23907),
        d = o(67294);
      function VideoUI(l) {
        var t, o, s, c;
        let { globalContext: u, handleGlobalContext: m } = (0, d.useContext)(
            f.kn
          ),
          v = {
            video: "aspect-video",
            square: "aspect-square",
            wide: "aspect-[21/9]",
            mobile: "aspect-[9/14]",
          };
        return (0, a.jsx)("div", {
          className: ""
            .concat(
              null !==
                (s =
                  null === (t = u.funnel.design) || void 0 === t
                    ? void 0
                    : t.rounded) && void 0 !== s
                ? s
                : "rounded-lg",
              " "
            )
            .concat(
              v[
                null !==
                  (c =
                    null === (o = l.design) || void 0 === o
                      ? void 0
                      : o.ratio) && void 0 !== c
                  ? c
                  : "video"
              ],
              " text-lg relative overflow-hidden bg-gray-100"
            ),
          children:
            !!l.content.video &&
            (0, a.jsx)("div", {
              className:
                "ratio-video-content absolute h-full w-full top-0 left-0",
              dangerouslySetInnerHTML: { __html: l.content.video },
            }),
        });
      }
    },
    44276: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return FilePreviewBase;
        },
      });
      var a = o(85893),
        f = o(67294),
        d = o(23839),
        s = o(49252),
        c = o(41798),
        u = o(23907);
      function FilePreviewBase(l) {
        var t, o, m;
        let { globalContext: v, handleGlobalContext: p } = (0, f.useContext)(
            u.kn
          ),
          [h, x] = (0, f.useState)("");
        return (
          (0, f.useEffect)(() => {
            x(null == l ? void 0 : l.src);
          }, [l]),
          (0, a.jsx)(a.Fragment, {
            children:
              (0, c.Zq)(h) && (null == l ? void 0 : l.type) == "emoji"
                ? (0, a.jsx)("div", {
                    className: "p-5 relative",
                    children: (0, a.jsx)("div", {
                      className:
                        "absolute whitespace-nowrap text-4xl text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      children: (0, c.Zq)(h),
                    }),
                  })
                : h && (0, c.jv)(h) && "emoji" != l.type
                ? (null == l ? void 0 : l.type) === "image" ||
                  (null == l ? void 0 : l.type) === "external"
                  ? (0, a.jsx)(d.Z, {
                      src: h,
                      onError: (l) => x(""),
                      className: "w-full h-auto max-w-full "
                        .concat(
                          null !== (o = null == l ? void 0 : l.className) &&
                            void 0 !== o
                            ? o
                            : "",
                          " "
                        )
                        .concat(
                          (null == l ? void 0 : l.rounded) == "none"
                            ? ""
                            : null !==
                                (m =
                                  null === (t = v.funnel.design) || void 0 === t
                                    ? void 0
                                    : t.rounded) && void 0 !== m
                            ? m
                            : "rounded-lg"
                        ),
                    })
                  : (null == l ? void 0 : l.type) === "audio"
                  ? (0, a.jsx)("audio", {
                      controls: !0,
                      className: "w-full",
                      children: (0, a.jsx)("source", { src: l.src }),
                    })
                  : null
                : (0, a.jsx)("div", {
                    className:
                      "aspect-video w-full rounded-xl bg-gray-100 relative",
                    children: (0, a.jsx)(s.Z, {
                      icon: "audio" === l.type ? "fa-volume" : "fa-image",
                      className:
                        "absolute text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ".concat(
                          (null == l ? void 0 : l.thumb)
                            ? "text-xl"
                            : "text-4xl"
                        ),
                    }),
                  }),
          })
        );
      }
    },
    23839: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return Img;
        },
      });
      var a = o(85893);
      function Img(l) {
        var t, o;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("img", {
            src: l.src,
            ...((null == l ? void 0 : l.id)
              ? { id: null == l ? void 0 : l.id }
              : {}),
            ...((null == l ? void 0 : l.title)
              ? { title: null == l ? void 0 : l.title }
              : {}),
            ...((null == l ? void 0 : l.loading) &&
            (null == l ? void 0 : l.loading) == "lazy"
              ? { loading: l.loading }
              : {}),
            alt:
              null !== (t = null == l ? void 0 : l.alt) && void 0 !== t
                ? t
                : "Imagem",
            className:
              null !== (o = null == l ? void 0 : l.className) && void 0 !== o
                ? o
                : "",
          }),
        });
      }
    },
    12936: function (l, t, o) {
      o.d(t, {
        E$: function () {
          return levelColor;
        },
        Ld: function () {
          return handleOpacityColor;
        },
        NB: function () {
          return a;
        },
        lT: function () {
          return hoverContrastColor;
        },
        nF: function () {
          return minContrastColor;
        },
        rX: function () {
          return maxContrastColor;
        },
      });
      let a = {
          white: [
            "#ffffff",
            "#f3f4f6",
            "#e5e7eb",
            "#d1d5db",
            "#9ca3af",
            "#6b7280",
            "#4b5563",
            "#374151",
            "#fff",
            "#1f2937",
            "#111827",
          ],
          black: [
            "#f4f4f5",
            "#e4e4e7",
            "#000",
            "#d4d4d8",
            "#a1a1aa",
            "#71717a",
            "#52525b",
            "#3f3f46",
            "#27272a",
            "#18181b",
            "#000000",
          ],
          slate: [
            "#f8fafc",
            "#f1f5f9",
            "#e2e8f0",
            "#cbd5e1",
            "#94a3b8",
            "#64748b",
            "#475569",
            "#334155",
            "#1e293b",
            "#0f172a",
            "#020617",
          ],
          gray: [
            "#f9fafb",
            "#f3f4f6",
            "#e5e7eb",
            "#d1d5db",
            "#9ca3af",
            "#6b7280",
            "#4b5563",
            "#374151",
            "#1f2937",
            "#111827",
            "#030712",
          ],
          zinc: [
            "#fafafa",
            "#f4f4f5",
            "#e4e4e7",
            "#d4d4d8",
            "#a1a1aa",
            "#71717a",
            "#52525b",
            "#3f3f46",
            "#27272a",
            "#18181b",
            "#09090b",
          ],
          neutral: [
            "#fafafa",
            "#f5f5f5",
            "#e5e5e5",
            "#d4d4d4",
            "#a3a3a3",
            "#737373",
            "#525252",
            "#404040",
            "#262626",
            "#171717",
            "#0a0a0a",
          ],
          stone: [
            "#fafaf9",
            "#f5f5f4",
            "#e7e5e4",
            "#d6d3d1",
            "#a8a29e",
            "#78716c",
            "#57534e",
            "#44403c",
            "#292524",
            "#1c1917",
            "#0c0a09",
          ],
          red: [
            "#fef2f2",
            "#fee2e2",
            "#fecaca",
            "#fca5a5",
            "#f87171",
            "#ef4444",
            "#dc2626",
            "#b91c1c",
            "#991b1b",
            "#7f1d1d",
            "#450a0a",
          ],
          orange: [
            "#fff7ed",
            "#ffedd5",
            "#fed7aa",
            "#fdba74",
            "#fb923c",
            "#f97316",
            "#ea580c",
            "#c2410c",
            "#9a3412",
            "#7c2d12",
            "#431407",
          ],
          amber: [
            "#fffbeb",
            "#fef3c7",
            "#fde68a",
            "#fcd34d",
            "#fbbf24",
            "#f59e0b",
            "#d97706",
            "#b45309",
            "#92400e",
            "#78350f",
            "#451a03",
          ],
          yellow: [
            "#fefce8",
            "#fef9c3",
            "#fef08a",
            "#fde047",
            "#facc15",
            "#eab308",
            "#ca8a04",
            "#a16207",
            "#854d0e",
            "#713f12",
            "#422006",
          ],
          lime: [
            "#f7fee7",
            "#ecfccb",
            "#d9f99d",
            "#bef264",
            "#a3e635",
            "#84cc16",
            "#65a30d",
            "#4d7c0f",
            "#3f6212",
            "#365314",
            "#1a2e05",
          ],
          green: [
            "#f0fdf4",
            "#dcfce7",
            "#bbf7d0",
            "#86efac",
            "#4ade80",
            "#22c55e",
            "#16a34a",
            "#15803d",
            "#166534",
            "#14532d",
            "#052e16",
          ],
          emerald: [
            "#ecfdf5",
            "#d1fae5",
            "#a7f3d0",
            "#6ee7b7",
            "#34d399",
            "#10b981",
            "#059669",
            "#047857",
            "#065f46",
            "#064e3b",
            "#022c22",
          ],
          teal: [
            "#f0fdfa",
            "#ccfbf1",
            "#99f6e4",
            "#5eead4",
            "#2dd4bf",
            "#14b8a6",
            "#0d9488",
            "#0f766e",
            "#115e59",
            "#134e4a",
            "#042f2e",
          ],
          cyan: [
            "#ecfeff",
            "#cffafe",
            "#a5f3fc",
            "#67e8f9",
            "#22d3ee",
            "#06b6d4",
            "#0891b2",
            "#0e7490",
            "#155e75",
            "#164e63",
            "#083344",
          ],
          sky: [
            "#f0f9ff",
            "#e0f2fe",
            "#bae6fd",
            "#7dd3fc",
            "#38bdf8",
            "#0ea5e9",
            "#0284c7",
            "#0369a1",
            "#075985",
            "#0c4a6e",
            "#082f49",
          ],
          blue: [
            "#eff6ff",
            "#dbeafe",
            "#bfdbfe",
            "#93c5fd",
            "#60a5fa",
            "#3b82f6",
            "#2563eb",
            "#1d4ed8",
            "#1e40af",
            "#1e3a8a",
            "#172554",
          ],
          indigo: [
            "#eef2ff",
            "#e0e7ff",
            "#c7d2fe",
            "#a5b4fc",
            "#818cf8",
            "#6366f1",
            "#4f46e5",
            "#4338ca",
            "#3730a3",
            "#312e81",
            "#1e1b4b",
          ],
          violet: [
            "#f5f3ff",
            "#ede9fe",
            "#ddd6fe",
            "#c4b5fd",
            "#a78bfa",
            "#8b5cf6",
            "#7c3aed",
            "#6d28d9",
            "#5b21b6",
            "#4c1d95",
            "#2e1065",
          ],
          purple: [
            "#faf5ff",
            "#f3e8ff",
            "#e9d5ff",
            "#d8b4fe",
            "#c084fc",
            "#a855f7",
            "#9333ea",
            "#7e22ce",
            "#6b21a8",
            "#581c87",
            "#3b0764",
          ],
          fuchsia: [
            "#fdf4ff",
            "#fae8ff",
            "#f5d0fe",
            "#f0abfc",
            "#e879f9",
            "#d946ef",
            "#c026d3",
            "#a21caf",
            "#86198f",
            "#701a75",
            "#4a044e",
          ],
          pink: [
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ec4899",
            "#db2777",
            "#be185d",
            "#9d174d",
            "#831843",
            "#500724",
          ],
          rose: [
            "#fff1f2",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
            "#ffc800",
          ],
        },
        levelColor = (l) => {
          let t = l || "#ffffff";
          for (let l in a) {
            let o = a[l],
              f = o.indexOf(t.toLowerCase());
            if (-1 !== f) return f;
          }
          return 0;
        },
        isDarkColor = (l) => {
          if (!l) return !1;
          let t = parseInt(l.substr(1, 2), 16),
            o = parseInt(l.substr(3, 2), 16),
            a = parseInt(l.substr(5, 2), 16),
            f = (0.299 * t + 0.587 * o + 0.114 * a) / 255;
          return f <= 0.675;
        },
        findColorPallet = (l) => {
          let t = l || "#ffffff";
          for (let l in a) {
            let o = a[l],
              f = o.indexOf(t.toLowerCase());
            if (-1 !== f) return o;
          }
          return [];
        },
        maxContrastColor = (l) => {
          var t;
          let o = null !== (t = findColorPallet(l)) && void 0 !== t ? t : [];
          return isDarkColor(l) ? o[0] : o[o.length - 1];
        },
        minContrastColor = (l, t) => {
          var o, a;
          let f = 2 + (null != t ? t : 0),
            d = null !== (o = findColorPallet(l)) && void 0 !== o ? o : [],
            s = d.indexOf(l);
          return (
            isDarkColor(l)
              ? (s = s == d.length - 1 ? d.length - f : s + 1)
              : (s += f),
            null !== (a = d[s]) && void 0 !== a ? a : "#e5e7eb"
          );
        },
        handleOpacityColor = (l, t) => {
          let o, a, f;
          if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(l)) return "#ffffff";
          if (
            (3 === (l = l.replace("#", "")).length
              ? ((o = parseInt(l.charAt(0) + l.charAt(0), 16)),
                (a = parseInt(l.charAt(1) + l.charAt(1), 16)),
                (f = parseInt(l.charAt(2) + l.charAt(2), 16)))
              : ((o = parseInt(l.substring(0, 2), 16)),
                (a = parseInt(l.substring(2, 4), 16)),
                (f = parseInt(l.substring(4, 6), 16))),
            t < 0 || t > 1)
          )
            throw Error("A opacidade deve estar entre 0 e 1");
          return "rgba("
            .concat(o, ", ")
            .concat(a, ", ")
            .concat(f, ", ")
            .concat(t, ")");
        },
        hoverContrastColor = (l) => {
          let t = findColorPallet(l),
            o = t.indexOf(l) + 1;
          return (
            (o = o >= t.length ? t[t.length - 2] : t[o]),
            isDarkColor(l) ? o : "#fff"
          );
        };
    },
    41901: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function isValidMathExpression(l) {
        try {
          Function("return (".concat(l, ")"));
          let t = /^[0-9+\-*/().\s]*$/;
          return t.test(l);
        } catch (l) {
          return !1;
        }
      }
      function extractExpression(l) {
        let t = [],
          o = l.indexOf("calc(");
        for (; -1 !== o; ) {
          let a = 0,
            f = -1;
          for (let t = o; t < l.length; t++)
            if ("(" === l[t]) a++;
            else if (")" === l[t] && 0 == --a) {
              f = t;
              break;
            }
          if (-1 === f) {
            console.error("Par\xeanteses n\xe3o balanceados na express\xe3o.");
            break;
          }
          let d = l.substring(o + 5, f);
          isValidMathExpression(d) && t.push(d), (o = l.indexOf("calc(", f));
        }
        return t;
      }
      function executeCalc(input) {
        let expressions = extractExpression(input);
        return (
          expressions.map((expression) => {
            if (isValidMathExpression(expression))
              try {
                let result = eval(expression),
                  formattedResult = Number.isInteger(result)
                    ? result
                    : result.toFixed(2);
                input = input.replace(expression, formattedResult);
              } catch (e) {}
          }),
          input.toString().replace(/calc\(([\d.]+)\)/g, "$1")
        );
      }
      __webpack_require__.d(__webpack_exports__, {
        C_: function () {
          return visibilityRoles;
        },
        Fm: function () {
          return replaceVariable;
        },
        M_: function () {
          return calculateExpression;
        },
        lp: function () {
          return envolveTag;
        },
      });
      let calculateExpression = (expression) => {
        if (!expression) return null;
        let validChars = /^[0-9+\-*/().\s]*$/;
        if (!validChars.test(expression)) return null;
        try {
          let result = eval(expression);
          return result;
        } catch (error) {
          return null;
        }
      };
      function handleVariableValue(l) {
        let t = l,
          o = /^[\d+\-*/().\s]*$/;
        return o.test(t) && (t = Number(t)), t;
      }
      function hasAllVariables(l, t) {
        let o = /\b\w+\b/g,
          a = l.match(o);
        return !!a && a.every((l) => t.hasOwnProperty(l));
      }
      function hasValidVariables(l, t) {
        let o = l.match(/{{\w+}}/g);
        if (!o) return !0;
        for (let l of o) {
          let o = l.replace(/{{|}}/g, "");
          if (t.hasOwnProperty(o)) return !0;
        }
        return !1;
      }
      function envolveTag(l, t, o, a) {
        let f = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          d = RegExp("(".concat(f, ")"), "gi"),
          s = l.replace(
            d,
            "<"
              .concat(o, ' style="')
              .concat(null != a ? a : "", '">$1</')
              .concat(o, ">")
          );
        return s;
      }
      function replaceVariable(l, t, o) {
        if (!l) return "";
        let a = l;
        return (
          Object.keys(t).forEach((l) => {
            let o = RegExp("\\{{".concat(l, "\\}}"), "g");
            a = a.replace(o, handleVariableValue(t[l]));
          }),
          (a = executeCalc(a.replace(/{{\w+}}/g, null != o ? o : "")))
        );
      }
      function visibilityRoles(l, t) {
        if (!l.length) return !0;
        let o = !1;
        return (
          l.forEach((l) => {
            let a = !0;
            l.forEach((l) => {
              if (
                hasValidVariables(l.variable, t) &&
                hasValidVariables(l.value, t)
              ) {
                let o = calculateExpression(replaceVariable(l.variable, t)),
                  f = calculateExpression(replaceVariable(l.value, t));
                switch (l.compare) {
                  case "==":
                    a = a && o === f;
                    break;
                  case "!=":
                    a = a && o !== f;
                    break;
                  case "<":
                    a = a && o < f;
                    break;
                  case ">":
                    a = a && o > f;
                    break;
                  case ">=":
                    a = a && o >= f;
                    break;
                  case "<=":
                    a = a && o <= f;
                    break;
                  case "includes":
                    break;
                  default:
                    a = !1;
                }
              } else a = !1;
            }),
              (o = o || a);
          }),
          o
        );
      }
    },
    51671: function (l, t, o) {
      o.d(t, {
        J: function () {
          return a;
        },
        q: function () {
          return getFont;
        },
      });
      let a = [
          {
            title: "Inter",
            slug: "inter",
            src: "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Roboto",
            slug: "roboto",
            src: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Open Sans",
            slug: "open-sans",
            src: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Montserrat",
            slug: "montserrat",
            src: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Lato",
            slug: "lato",
            src: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap",
            type: "sans serif",
          },
          {
            title: "Roboto Condensed",
            slug: "roboto-condensed",
            src: "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Arial",
            slug: "arial",
            src: "https://fonts.googleapis.com/css?family=Arial:400,700&display=swap",
            type: "sans serif",
          },
          {
            title: "PT Sans",
            slug: "pt-sans",
            src: "https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Nunito",
            slug: "nunito",
            src: "https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Poppins",
            slug: "poppins",
            src: "https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap",
            type: "sans serif",
          },
          {
            title: "Merriweather",
            slug: "merriweather",
            src: "https://fonts.googleapis.com/css?family=Merriweather:300,400,700&display=swap",
            type: "Serif",
          },
          {
            title: "Playfair Display",
            slug: "playfair-display",
            src: "https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap",
            type: "Serif",
          },
          {
            title: "Crimson Text",
            slug: "crimson-text",
            src: "https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700&display=swap",
            type: "Serif",
          },
          {
            title: "Georgia",
            slug: "georgia",
            src: "https://fonts.googleapis.com/css?family=Georgia:400,700&display=swap",
            type: "Serif",
          },
          {
            title: "Roboto Slab",
            slug: "roboto-slab",
            src: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap",
            type: "Serif",
          },
          {
            title: "IBM Plex Serif",
            slug: "ibm-plex-serif",
            src: "https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,500,600,700&display=swap",
            type: "Serif",
          },
          {
            title: "Source Serif Pro",
            slug: "source-serif-pro",
            src: "https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600&display=swap",
            type: "Serif",
          },
          {
            title: "Libre Baskerville",
            slug: "libre-baskerville",
            src: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap",
            type: "Serif",
          },
          {
            title: "Alegreya",
            slug: "alegreya",
            src: "https://fonts.googleapis.com/css?family=Alegreya:400,500,700&display=swap",
            type: "Serif",
          },
          {
            title: "Droid Serif",
            slug: "droid-serif",
            src: "https://fonts.googleapis.com/css?family=Droid+Serif:400,700&display=swap",
            type: "Serif",
          },
          {
            title: "Oswald",
            slug: "oswald",
            src: "https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap",
            type: "sans serif",
          },
        ],
        getFont = (l) => a.filter((t) => t.slug == l)[0];
    },
    65257: function (l, t, o) {
      o.d(t, {
        Z: function () {
          return Template;
        },
      });
      var a = o(85893),
        f = o(9008),
        d = o.n(f),
        s = o(23839),
        c = o(38950),
        u = o(41664),
        m = o.n(u),
        v = o(67294);
      function CleanHeader() {
        let [l, t] = (0, v.useState)({});
        return (
          (0, v.useEffect)(() => {
            window && t((0, c.Zv)());
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("header", {
              className: "group/header p-4 relative z-[10]",
              children: (0, a.jsx)("div", {
                className: "flex items-center justify-between",
                children: (0, a.jsx)(m(), {
                  href: "/",
                  children: (0, a.jsx)("div", {
                    className: "w-full max-w-[6rem]",
                    children: (0, a.jsx)(s.Z, {
                      src: "/images/logo.png",
                      className: "w-full h-auto",
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      }
      var p = o(49252),
        h = o(41798);
      function UserDropdown() {
        let [l, t] = (0, v.useState)({}),
          [o, f] = (0, v.useState)(!1);
        return (
          (0, v.useEffect)(() => {
            t((0, c.Zv)());
          }, []),
          (0, a.jsxs)("div", {
            className: "relative",
            children: [
              (0, a.jsxs)("div", {
                onClick: () => f(!0),
                className: "relative cursor-pointer flex gap-3 items-center",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "whitespace-nowrap",
                        children: [
                          "Ol\xe1",
                          " ",
                          (0, a.jsx)("span", {
                            className: "text-gray-950 font-semibold",
                            children: (0, h.S4)(l.name),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "text-xs whitespace-nowrap",
                        children: l.email,
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.Z, {
                    icon: "fa-chevron-down",
                    type: "far",
                    className: "mt-2",
                  }),
                ],
              }),
              o &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      onClick: () => f(!1),
                      className: "fixed z-10 bg-gray-950 opacity-60 inset-0",
                    }),
                    (0, a.jsx)("div", {
                      className: "absolute z-20 bottom-0 right-0",
                      children: (0, a.jsxs)("div", {
                        className:
                          "absolute grid gap-2 min-w-[12rem] top-0 right-0 bg-white rounded-lg p-4",
                        children: [
                          (0, a.jsx)(m(), {
                            href: "/dashboard",
                            className: "hover:text-gray-950 ease",
                            children: "Dashboard",
                          }),
                          (0, a.jsx)(m(), {
                            href: "/dashboard/account",
                            className: "hover:text-gray-950 ease",
                            children: "Meus dados",
                          }),
                          (0, a.jsx)(m(), {
                            href: "/dashboard/signature",
                            className: "hover:text-gray-950 ease",
                            children: "Minha assinatura",
                          }),
                          (0, a.jsx)("div", {
                            className: "border-t my-2 -mx-4",
                          }),
                          (0, a.jsx)(m(), {
                            href: "/logout",
                            className: "hover:text-gray-950 ease",
                            children: "Sair",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function DashboardHeader() {
        return (0, a.jsx)("header", {
          className: "relative border-b",
          children: (0, a.jsx)("div", {
            className: "container-default",
            children: (0, a.jsxs)("div", {
              className: "flex gap-4 justify-between items-center",
              children: [
                (0, a.jsx)("div", {
                  className: "w-full max-w-[2.5rem]",
                  children: (0, a.jsx)("div", {
                    className: "my-2",
                    children: (0, a.jsx)(m(), {
                      href: "/",
                      children: (0, a.jsx)("div", {
                        className: "aspect-[21/9]",
                        children: (0, a.jsx)(s.Z, {
                          src: "/images/logo-icon.png",
                        }),
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", { className: "w-full flex pl-2" }),
                (0, a.jsx)("div", {
                  className: "w-fit relative border-r pr-4",
                  children: (0, a.jsx)("div", {
                    className: "text-nowrap",
                    children: (0, a.jsxs)(m(), {
                      href: "https://inlead.online/atendimento-inlead/",
                      target: "_blank",
                      children: [
                        (0, a.jsx)(p.Z, {
                          icon: "fa-question-circle",
                          className: "mr-1",
                        }),
                        "Precisa de ajuda?",
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "w-fit relative",
                  children: (0, a.jsx)(UserDropdown, {}),
                }),
              ],
            }),
          }),
        });
      }
      function DefaultHeader() {
        let [l, t] = (0, v.useState)({});
        return (
          (0, v.useEffect)(() => {
            window && t((0, c.Zv)());
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("header", {
              className: " group/header py-4 relative z-[10]",
              children: (0, a.jsx)("div", {
                className: "container-medium",
                children: (0, a.jsxs)("div", {
                  className: "flex gap-2 md:gap-6 items-center justify-between",
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-full max-w-[6rem] md:max-w-[8rem]",
                      children: (0, a.jsx)(m(), {
                        href: "/",
                        className: "block",
                        children: (0, a.jsx)("div", {
                          className: "aspect-[6/3] relative",
                          children: (0, a.jsx)(s.Z, {
                            src: "/images/logo.png",
                            className: "w-full h-full absolute object-contain",
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "hidden md:flex md:justify-center w-full bg-white top-0 left-0 fixed md:relative p-4 md:p-0 gap-1 md:gap-6",
                      children: [
                        (0, a.jsx)("div", {
                          className: "grid gap-2",
                          children: (0, a.jsx)(m(), {
                            href: "/",
                            className:
                              "px-2 py-1 hover:text-gray-950 font-medium ease",
                            children: (0, a.jsx)("span", { children: "Home" }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "grid gap-2",
                          children: (0, a.jsx)(m(), {
                            href: "/#recursos",
                            className:
                              "px-2 py-1 hover:text-gray-950 font-medium ease",
                            children: (0, a.jsx)("span", {
                              children: "Recursos",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "grid gap-2",
                          children: (0, a.jsx)(m(), {
                            href: "/#conheca",
                            className:
                              "px-2 py-1 hover:text-gray-950 font-medium ease",
                            children: (0, a.jsx)("span", {
                              children: "Conhe\xe7a melhor",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "grid gap-2",
                          children: (0, a.jsx)(m(), {
                            href: "/planos",
                            className:
                              "px-2 py-1 hover:text-gray-950 font-medium ease",
                            children: (0, a.jsx)("span", {
                              children: "Planos",
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "grid gap-2",
                          children: (0, a.jsx)(m(), {
                            href: "/#faq",
                            className:
                              "px-2 py-1 hover:text-gray-950 font-medium ease",
                            children: (0, a.jsx)("span", {
                              children: "Como funciona?",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex gap-4 md:gap-6 items-center",
                      children: (null == l ? void 0 : l.email)
                        ? (0, a.jsx)(UserDropdown, {})
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("div", {
                                className: "",
                                children: (0, a.jsx)(m(), {
                                  href: "/login",
                                  className:
                                    "font-bold hover:text-gray-700 whitespace-nowrap text-gray-950",
                                  children: "Login",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "",
                                children: (0, a.jsx)(m(), {
                                  href: "/register",
                                  className:
                                    "btn btn-dark px-5 py-3 whitespace-nowrap",
                                  children: "Cadastre-se",
                                }),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      function Header(l) {
        let { type: t } = l;
        return "dashboard" == t
          ? (0, a.jsx)(DashboardHeader, {})
          : "default" == t
          ? (0, a.jsx)(DefaultHeader, {})
          : "clean" == t
          ? (0, a.jsx)(CleanHeader, {})
          : (0, a.jsx)(a.Fragment, {});
      }
      var x = o(23907);
      function CleanFooter() {
        let [l, t] = (0, v.useState)({});
        return (
          (0, v.useEffect)(() => {
            t((0, c.Zv)());
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("section", {
              className: "mt-10 md:mt-20",
              children: (0, a.jsxs)("div", {
                className: "container-medium",
                children: [
                  (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)(m(), {
                      href: "/",
                      children: (0, a.jsx)(s.Z, {
                        src: "/images/logo-icon.png",
                        className: "max-w-[3rem] mx-auto",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "md:mt-4 py-6 text-center text-sm text-gray-400",
                    children: [
                      "\xa9 2024 - Todos os direitos Reservados. | inlead LTDA |",
                      " ",
                      (0, a.jsx)(m(), {
                        href: "/comunicados/termos-de-uso",
                        className: "text-gray-950 hover:underline",
                        children: "Termos e Condi\xe7\xf5es de Uso",
                      }),
                      " ",
                      "|",
                      " ",
                      (0, a.jsx)(m(), {
                        href: "/comunicados/politica-de-privacidade",
                        className: "text-gray-950 hover:underline",
                        children: "Pol\xedtica de privacidade",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function DefaultFooter() {
        let [l, t] = (0, v.useState)({});
        return (
          (0, v.useEffect)(() => {
            t((0, c.Zv)());
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("section", {
                className: "mt-20 md:mt-32 px-4 relative",
                children: (0, a.jsx)("div", {
                  className: "max-w-[94rem] mx-auto relative",
                  children: (0, a.jsxs)("div", {
                    className:
                      "rounded-3xl bg-gray-950 text-white relative overflow-hidden",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute bg-sky-500 w-[60rem] blur-3xl opacity-50 -translate-y-2/3 right-0 rotate-12 rounded-[100%] h-[30rem]",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bg-teal-500 w-[60rem] blur-3xl opacity-50 bottom-0 -mb-[35%] right-0 rotate-5 rounded-[100%] h-[50rem]",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row items-end relative",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "w-full grid gap-6 p-8 md:p-20",
                            children: [
                              (0, a.jsx)("h4", {
                                className: "text-4xl md:text-6xl font-bold",
                                children:
                                  "Entenda na pr\xe1tica como funciona nossa plataforma!",
                              }),
                              (0, a.jsx)("div", {
                                className: "md:text-base",
                                children: (0, a.jsxs)("p", {
                                  children: [
                                    "Capturar leads de forma eficiente nunca foi t\xe3o f\xe1cil.",
                                    (0, a.jsx)("br", {}),
                                    "Crie quizzes e transforme visitantes em",
                                    " ",
                                    (0, a.jsx)("strong", {
                                      children: "clientes qualificados",
                                    }),
                                    ".",
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "md:mt-4",
                                children: (0, a.jsx)(m(), {
                                  target: "_blank",
                                  className: "btn btn-white py-4 px-6",
                                  href: "https://inlead.online/funil-inlead/",
                                  children: "Veja na pr\xe1tica",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "w-full text-center",
                            children: (0, a.jsx)(s.Z, {
                              src: "/images/mocks/mockup-inlead.png",
                              className: "max-w-full mx-auto",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("section", {
                className: "mt-20",
                children: (0, a.jsxs)("div", {
                  className: "container-medium",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "grid md:flex gap-8 md:gap-20 lg:gap-32 items-start border-t pt-6 md:pt-10",
                      children: [
                        (0, a.jsx)("div", {
                          className: "w-full md:max-w-[24rem]",
                          children: (0, a.jsxs)("div", {
                            className: "grid gap-2",
                            children: [
                              (0, a.jsx)(m(), {
                                href: "/",
                                children: (0, a.jsx)(s.Z, {
                                  src: "/images/logo-icon.png",
                                  className: "max-w-[3rem] inline-block",
                                }),
                              }),
                              (0, a.jsx)("h2", {
                                className: "py-4 text-base md:pb-10 lg:pb-20",
                                children:
                                  "Aumente seu faturamento criando funis de vendas sem depender de VSLs, Typebots ou P\xe1ginas de Vendas.",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "w-full grid md:grid-cols-3 gap-8",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col gap-1 md:gap-2 w-full lg:max-w-[10rem]",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "font-semibold uppercase text-xs opacity-40 pb-2",
                                  children: "MENU",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "/",
                                  title: "home",
                                  children: "Home",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "/register",
                                  title: "cadastre-se",
                                  children: "Cadastre-se",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "/login",
                                  title: "login",
                                  children: "Login",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "/#conheca",
                                  title: "como funciona?",
                                  children: "Conhe\xe7a melhor",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "/blog",
                                  title: "Blog",
                                  children: "Blog",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col gap-1 md:gap-2 w-full lg:max-w-[10rem]",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "font-semibold uppercase text-xs opacity-40 pb-2",
                                  children: "Canais",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "https://api.whatsapp.com/send?phone=5517996482121&text=Ol\xe1! Gostaria de assinar o inlead.",
                                  title: "vendas",
                                  target: "_blank",
                                  children: "Vendas",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "https://api.whatsapp.com/send?phone=5517996482121&text=Ol\xe1, tenho uma d\xfavida que gostaria de tirar com voc\xeas.",
                                  title: "suporte",
                                  target: "_blank",
                                  children: "Suporte",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col gap-1 md:gap-2 w-full lg:max-w-[10rem]",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "font-semibold uppercase text-xs opacity-40 pb-2",
                                  children: "D\xfavidas e sugest\xf5es",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "mail:contato@inlead.online",
                                  title: "contato@inlead.online",
                                  children: "contato@inlead.online",
                                }),
                                (0, a.jsx)(m(), {
                                  className:
                                    "whitespace-nowrap hover:text-gray-950 font-medium ease",
                                  href: "mail:suporte@inlead.online",
                                  title: "suporte@inlead.online",
                                  children: "suporte@inlead.online",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mt-4 py-6 text-center text-sm text-gray-400",
                      children: [
                        "\xa9 2024 - Todos os direitos Reservados. | inlead LTDA |",
                        " ",
                        (0, a.jsx)(m(), {
                          href: "/comunicados/termos-de-uso",
                          className: "text-gray-950 hover:underline",
                          children: "Termos e Condi\xe7\xf5es de Uso",
                        }),
                        " ",
                        "|",
                        " ",
                        (0, a.jsx)(m(), {
                          href: "/comunicados/politica-de-privacidade",
                          className: "text-gray-950 hover:underline",
                          children: "Pol\xedtica de privacidade",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function Footer(l) {
        let { type: t } = l;
        return "default" == t
          ? (0, a.jsx)(DefaultFooter, {})
          : "clean" == t
          ? (0, a.jsx)(CleanFooter, {})
          : (0, a.jsx)(a.Fragment, {});
      }
      var w = o(25629),
        y = o(31955);
      function Behavior() {
        let handle = () => {
          let l = new URLSearchParams(window.location.search),
            t = l.get("af");
          !y.Z.get("inlead.affiliate") &&
            t &&
            y.Z.set("inlead.affiliate", t, { expires: 14 });
        };
        return (
          (0, v.useEffect)(() => {
            window && handle();
          }, []),
          (0, a.jsx)(a.Fragment, {})
        );
      }
      let k = {
          header:
            "<!-- Google Tag Manager -->\n            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-N7VPJJC4');</script>\n            <!-- End Google Tag Manager -->\n            <!-- Meta Pixel Code -->\n            <script>\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '390833810334922');\n            fbq('track', 'PageView');\n            </script>\n            <noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n            src=\"https://www.facebook.com/tr?id=390833810334922&ev=PageView&noscript=1\"\n            /></noscript>\n            <!-- End Meta Pixel Code -->",
          body: '<!-- Google Tag Manager (noscript) -->\n            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7VPJJC4"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n            <!-- End Google Tag Manager (noscript) -->',
          footer:
            "\n        <script>\n            setTimeout(() => {   \n                function getQueryParams(url) {\n                    let params = {};\n                    let parser = new URL(url);\n                    for (let [key, value] of parser.searchParams.entries()) {\n                        params[key] = value;\n                    }\n                    return params;\n                }\n                \n                const currentUrlParams = getQueryParams(window.location.href);\n                \n                const links = document.querySelectorAll('a[href]');\n                \n                links.forEach(link => {\n                    let linkUrl = new URL(link.href);\n                    let linkParams = getQueryParams(link.href);\n                    \n                    for (let key in currentUrlParams) {\n                        if (!linkParams.hasOwnProperty(key)) {\n                            linkUrl.searchParams.append(key, currentUrlParams[key]);\n                        }\n                    }\n                    \n                    link.href = linkUrl.toString();\n                });\n            }, 10)\n        </script>\n    ",
        },
        j = {
          header:
            '<script type="text/javascript">\n                (function(c,l,a,r,i,t,y){\n                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n                })(window, document, "clarity", "script", "ncex5uands");\n            </script>',
        };
      function Template(l) {
        var t, o, f, s, c, u, m, p, h, y, C, N, S, F, q;
        let {
            headerType: T,
            footerType: I,
            className: L,
            metadata: z,
            origin: M,
            scripts: Z,
            children: E,
          } = l,
          { globalContext: U, handleGlobalContext: P } = (0, v.useContext)(
            x.kn
          ),
          [D, R] = (0, v.useState)({});
        return (
          (0, v.useEffect)(() => {
            var l;
            R(null === (l = U.funnel) || void 0 === l ? void 0 : l.design);
          }, [U.funnel]),
          (0, v.useEffect)(() => {
            window && "funnel" != M
              ? (0, w.handleScripts)(k)
              : (0, w.handleScripts)(j);
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(d(), {
                children: [
                  (0, a.jsx)("meta", {
                    httpEquiv: "Content-Type",
                    content: "text/html; charset=utf-8",
                  }),
                  (0, a.jsx)("meta", {
                    httpEquiv: "Cache-Control",
                    content: "public, max-age=3600",
                  }),
                  (0, a.jsx)("meta", {
                    httpEquiv: "X-UA-Compatible",
                    content: "IE=edge,chrome=1",
                  }),
                  (0, a.jsx)("meta", {
                    httpEquiv: "content-language",
                    content: "pt-BR",
                  }),
                  (0, a.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                  }),
                  (0, a.jsx)("meta", { name: "audience", content: "all" }),
                  (0, a.jsx)("meta", {
                    name: "MobileOptimized",
                    content: "320",
                  }),
                  (0, a.jsx)("meta", {
                    name: "HandheldFriendly",
                    content: "True",
                  }),
                  (0, a.jsx)("meta", {
                    name: "referrer",
                    content: "no-referrer-when-downgrade",
                  }),
                  "funnel" == M
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("link", {
                            rel: "shortcut icon",
                            href: null == z ? void 0 : z.favicon,
                          }),
                          (0, a.jsx)("link", {
                            rel: "icon",
                            href: null == z ? void 0 : z.favicon,
                            type: "image/x-icon",
                          }),
                          (0, a.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: null == z ? void 0 : z.favicon,
                          }),
                          (0, a.jsx)("title", {
                            children: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            name: "theme-color",
                            content:
                              null !==
                                (m = null == D ? void 0 : D.backgroundColor) &&
                              void 0 !== m
                                ? m
                                : "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            name: "msapplication-navbutton-color",
                            content:
                              null !==
                                (p = null == D ? void 0 : D.backgroundColor) &&
                              void 0 !== p
                                ? p
                                : "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            name: "apple-mobile-web-app-status-bar-style",
                            content:
                              null !==
                                (h = null == D ? void 0 : D.backgroundColor) &&
                              void 0 !== h
                                ? h
                                : "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "name",
                            content: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "url",
                            content: (
                              null === (t = U.funnel) || void 0 === t
                                ? void 0
                                : t.domain
                            )
                              ? null === (o = U.funnel) || void 0 === o
                                ? void 0
                                : o.domain
                              : "",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:url",
                            content: (
                              null === (f = U.funnel) || void 0 === f
                                ? void 0
                                : f.domain
                            )
                              ? null === (s = U.funnel) || void 0 === s
                                ? void 0
                                : s.domain
                              : "",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:title",
                            content: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:description",
                            content: null == z ? void 0 : z.description,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:locale",
                            content: "pt_BR",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:type",
                            content: "website",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:site_name",
                            content: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image",
                            content: null == z ? void 0 : z.image,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: null == z ? void 0 : z.image,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:alt",
                            content: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/png",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "name",
                            content: null == z ? void 0 : z.title,
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "url",
                            content: (
                              null === (c = U.funnel) || void 0 === c
                                ? void 0
                                : c.domain
                            )
                              ? null === (u = U.funnel) || void 0 === u
                                ? void 0
                                : u.domain
                              : "",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "description",
                            content: null == z ? void 0 : z.description,
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "image",
                            content: null == z ? void 0 : z.image,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("link", {
                            rel: "shortcut icon",
                            href: "/images/logo-icon.png",
                          }),
                          (0, a.jsx)("link", {
                            rel: "icon",
                            href: "/images/logo-icon.png",
                            type: "image/x-icon",
                          }),
                          (0, a.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/images/logo-icon.png",
                          }),
                          (0, a.jsx)("title", {
                            children:
                              null !== (y = null == z ? void 0 : z.title) &&
                              void 0 !== y
                                ? y
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            name: "theme-color",
                            content: "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            name: "msapplication-navbutton-color",
                            content: "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            name: "apple-mobile-web-app-status-bar-style",
                            content: "#ffffff",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "name",
                            content:
                              null !== (C = null == z ? void 0 : z.title) &&
                              void 0 !== C
                                ? C
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "url",
                            content: "https://inlead.online",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:url",
                            content: "https://inlead.online",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:title",
                            content:
                              null !== (N = null == z ? void 0 : z.title) &&
                              void 0 !== N
                                ? N
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:description",
                            content: null == z ? void 0 : z.description,
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:locale",
                            content: "pt_BR",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:type",
                            content: "website",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:site_name",
                            content:
                              null !== (S = null == z ? void 0 : z.title) &&
                              void 0 !== S
                                ? S
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image",
                            content: "/images/site-image.png",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: "/images/site-image.png",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:alt",
                            content:
                              null !== (F = null == z ? void 0 : z.title) &&
                              void 0 !== F
                                ? F
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/png",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "name",
                            content:
                              null !== (q = null == z ? void 0 : z.title) &&
                              void 0 !== q
                                ? q
                                : "inlead | Cria\xe7\xe3o de funis de vendas din\xe2micos e interativos",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "url",
                            content: "https://inlead.online",
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "description",
                            content: null == z ? void 0 : z.description,
                          }),
                          (0, a.jsx)("meta", {
                            itemProp: "image",
                            content: "/images/site-image.png",
                          }),
                        ],
                      }),
                ],
              }),
              (0, a.jsx)(Header, { type: T }),
              (0, a.jsx)("main", {
                className: null != L ? L : "",
                children: E,
              }),
              "funnel" != M && (0, a.jsx)(Behavior, {}),
              (0, a.jsx)(Footer, { type: I }),
            ],
          })
        );
      }
    },
  },
]);