"use strict";
(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [468],
  {
    2468: (e, t, a) => {
      a.r(t), a.d(t, { default: () => H });
      var s = a(9835);
      const i = (e) => (
          (0, s.dD)("data-v-b9000976"), (e = e()), (0, s.Cn)(), e
        ),
        l = { class: "bg-white Krub-Regular" },
        n = i(() =>
          (0, s._)(
            "div",
            { class: "page-title exo" },
            [
              (0, s.Uk)(" Activation "),
              (0, s._)("div", { class: "logo-wrapper" }),
            ],
            -1
          )
        ),
        o = { class: "q-pa-lg" },
        c = { class: "q-pa-md items-start q-gutter-md" },
        u = { class: "intro-text" },
        d = i(() =>
          (0, s._)("h5", { class: "exo" }, "Enter Activation code", -1)
        ),
        r = i(() =>
          (0, s._)("span", null, "Activation code formart XXXXXXXX", -1)
        ),
        m = { id: "sellix" },
        p = i(() => (0, s._)("br", null, null, -1)),
        h = { class: "outro-text" },
        v = i(() => (0, s._)("br", null, null, -1)),
        y = i(() => (0, s._)("br", null, null, -1)),
        w = { id: "app" };
      function _(e, t, a, i, _, b) {
        const g = (0, s.up)("q-icon"),
          f = (0, s.up)("q-input"),
          Z = (0, s.up)("q-item"),
          k = (0, s.up)("q-btn"),
          K = (0, s.up)("q-list"),
          q = (0, s.up)("q-form"),
          x = (0, s.up)("q-card-section"),
          W = (0, s.up)("q-card"),
          Q = (0, s.up)("q-page");
        return (
          (0, s.wg)(),
          (0, s.j4)(Q, null, {
            default: (0, s.w5)(() => [
              (0, s._)("div", l, [
                n,
                (0, s._)("div", o, [
                  (0, s._)("div", c, [
                    (0, s.Wm)(
                      W,
                      { class: "my-card" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(x, null, {
                            default: (0, s.w5)(() => [
                              (0, s._)("div", u, [
                                d,
                                r,
                                (0, s._)("div", m, [
                                  (0, s._)(
                                    "a",
                                    {
                                      onClick:
                                        t[0] || (t[0] = (t) => e.gotoSellix()),
                                    },
                                    "Where can I find an activation code?"
                                  ),
                                ]),
                              ]),
                              (0, s.Wm)(
                                q,
                                {
                                  class:
                                    "full-width my-width-limit activate-form",
                                  onSubmit: e.submitRedeem,
                                  onValidationSuccess:
                                    t[2] || (t[2] = (t) => (e.validKey = !0)),
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(K, null, {
                                      default: (0, s.w5)(() => [
                                        (0, s.Wm)(
                                          Z,
                                          { class: "full-width" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Wm)(
                                                f,
                                                {
                                                  filled: "",
                                                  outlined: "",
                                                  modelValue: e.accessKey,
                                                  "onUpdate:modelValue":
                                                    t[1] ||
                                                    (t[1] = (t) =>
                                                      (e.accessKey = t)),
                                                  label:
                                                    "Please submit your key here",
                                                  type: "text",
                                                  dense: e.dense,
                                                  class: "full-width",
                                                  rules: [
                                                    (e) =>
                                                      !!e ||
                                                      "Field is required",
                                                  ],
                                                },
                                                {
                                                  prepend: (0, s.w5)(() => [
                                                    (0, s.Wm)(g, {
                                                      name: "key",
                                                    }),
                                                  ]),
                                                  hint: (0, s.w5)(() => [
                                                    (0, s.Uk)(
                                                      " You can copy the entire activation code and paste it into the entry field without typing it manually. "
                                                    ),
                                                    p,
                                                    (0, s.Uk)(
                                                      "The activation code is not case-senstive. "
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ["modelValue", "dense", "rules"]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s.Wm)(
                                          Z,
                                          {
                                            class:
                                              "full-width text-white submit-button",
                                          },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Wm)(k, {
                                                "no-caps": "",
                                                class:
                                                  "blue-button my-login-submit",
                                                label: "Activate",
                                                type: "submit",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["onSubmit"]
                              ),
                              (0, s._)("div", h, [
                                (0, s.Uk)(" No activation code?"),
                                v,
                                (0, s.Uk)(
                                  " If you do not have an activation code you can purchase on in the"
                                ),
                                y,
                                (0, s.Uk)(" Ghost online store. "),
                                (0, s._)("div", w, [
                                  (0, s._)(
                                    "a",
                                    {
                                      onClick:
                                        t[3] || (t[3] = (t) => e.gotoSellix()),
                                    },
                                    "Purchase license"
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
            ]),
            _: 1,
          })
        );
      }
      var b = a(499),
        g = a(3746),
        f = a(6950),
        Z = a(4328),
        k = a(5605),
        K = a(1186);
      const q = (0, k.t)(),
        x = (0, s.aZ)({
          name: "PageKey, app, sellix",
          components: {},
          setup() {
            return { auth: q, dense: (0, b.iH)(!1) };
          },
          data() {
            return { accessKey: "", validKey: !1 };
          },
          computed: {
            ...(0, g.Kc)(k.t),
            getAuthUser() {
              return q.user;
            },
            getAccessKey() {
              return q.accessKey || "";
            },
          },
          methods: {
            async submitRedeem() {
              const e = (0, k.t)();
              this.validKey &&
                (K.BY || f.Z.show(),
                await e.redeem(this.accessKey),
                setTimeout(() => {
                  f.Z.hide(),
                    e.accessKey &&
                      this.$router.push({ name: "Home", params: {} });
                }, K.RJ));
            },
            gotoSellix() {
              window.open("https://overwatchghost.sellix.io");
            },
          },
          watch: {
            getAccessKey: {
              async handler(e) {
                e &&
                  (f.Z.hide(), this.$router.push({ name: "Home", params: {} }));
              },
              immediate: !1,
            },
            getAuthError: {
              handler(e) {
                e &&
                  (f.Z.hide(),
                  Z.Z.create({
                    type: "negative",
                    position: "top",
                    message: e,
                  }));
              },
              immediate: !1,
            },
          },
        });
      var W = a(1639),
        Q = a(9885),
        A = a(4458),
        U = a(3190),
        X = a(8326),
        C = a(3246),
        S = a(490),
        I = a(7471),
        P = a(2857),
        R = a(9379),
        T = a(9984),
        V = a.n(T);
      const G = (0, W.Z)(x, [
          ["render", _],
          ["__scopeId", "data-v-b9000976"],
        ]),
        H = G;
      V()(x, "components", {
        QPage: Q.Z,
        QCard: A.Z,
        QCardSection: U.Z,
        QForm: X.Z,
        QList: C.Z,
        QItem: S.Z,
        QInput: I.Z,
        QIcon: P.Z,
        QBtn: R.Z,
      });
    },
  },
]);
