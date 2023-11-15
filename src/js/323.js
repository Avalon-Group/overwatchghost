"use strict";
(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [323],
  {
    9323: (e, t, l) => {
      l.r(t), l.d(t, { default: () => C });
      var a = l(9835);
      const s = (e) => (
          (0, a.dD)("data-v-22da9145"), (e = e()), (0, a.Cn)(), e
        ),
        i = { class: "column q-pa-lg" },
        n = { class: "row" },
        o = s(() => (0, a._)("div", { class: "logo-wrapper" }, null, -1)),
        d = s(() =>
          (0, a._)("div", { class: "my-login-title exo" }, "Sign in", -1)
        ),
        u = s(() => (0, a._)("div", { class: "logo-wrapper" }, null, -1)),
        r = s(() =>
          (0, a._)("div", { class: "my-login-title exo" }, "Sign up", -1)
        );
      function m(e, t, l, s, m, c) {
        const p = (0, a.up)("q-tab"),
          w = (0, a.up)("q-tabs"),
          h = (0, a.up)("q-item"),
          b = (0, a.up)("q-icon"),
          g = (0, a.up)("q-input"),
          f = (0, a.up)("q-btn"),
          y = (0, a.up)("q-list"),
          W = (0, a.up)("q-form"),
          _ = (0, a.up)("q-tab-panel"),
          V = (0, a.up)("q-toggle"),
          v = (0, a.up)("q-tab-panels"),
          Z = (0, a.up)("q-page");
        return (
          (0, a.wg)(),
          (0, a.j4)(
            Z,
            {
              class:
                "row items-center justify-center full-width my-logo-bg radial-gradient Krub-Regular",
            },
            {
              default: (0, a.w5)(() => [
                (0, a._)("div", i, [
                  (0, a._)("div", n, [
                    (0, a.Wm)(
                      w,
                      {
                        modelValue: e.tab,
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (t) => (e.tab = t)),
                        dense: "",
                        class: "bg-grey-3 text-grey-7 full-width",
                        "active-color": "primary",
                        "indicator-color": "purple",
                        align: "center",
                      },
                      {
                        default: (0, a.w5)(() => [
                          (0, a.Wm)(p, {
                            name: "tabLogin",
                            label: "Sign in",
                            class: "tab-button",
                          }),
                          (0, a.Wm)(p, {
                            name: "tabRegister",
                            label: "Sign up",
                            class: "tab-button",
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                    (0, a.Wm)(
                      v,
                      {
                        animated: "",
                        modelValue: e.tab,
                        "onUpdate:modelValue":
                          t[11] || (t[11] = (t) => (e.tab = t)),
                        class: "full-width",
                      },
                      {
                        default: (0, a.w5)(() => [
                          (0, a.Wm)(
                            _,
                            {
                              name: "tabLogin",
                              class:
                                "row items-center justify-center full-width",
                            },
                            {
                              default: (0, a.w5)(() => [
                                (0, a.Wm)(
                                  W,
                                  {
                                    class: "full-width my-width-limit",
                                    onSubmit: e.submitAuth,
                                    onValidationSuccess:
                                      t[4] ||
                                      (t[4] = (t) => (e.validLogin = !0)),
                                  },
                                  {
                                    default: (0, a.w5)(() => [
                                      (0, a.Wm)(y, null, {
                                        default: (0, a.w5)(() => [
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [o, d]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(
                                                  g,
                                                  {
                                                    color: "teal",
                                                    filled: "",
                                                    modelValue: e.name,
                                                    "onUpdate:modelValue":
                                                      t[1] ||
                                                      (t[1] = (t) =>
                                                        (e.name = t)),
                                                    label: "Username",
                                                    type: "text",
                                                    dense: e.dense,
                                                    class:
                                                      "full-width my-counter-color",
                                                    rules: [
                                                      (e) =>
                                                        !!e ||
                                                        "Field is required",
                                                    ],
                                                  },
                                                  {
                                                    prepend: (0, a.w5)(() => [
                                                      (0, a.Wm)(b, {
                                                        name: "person",
                                                      }),
                                                    ]),
                                                    hint: (0, a.w5)(() => [
                                                      (0, a.Uk)(
                                                        " Please enter your accout username "
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "dense",
                                                    "rules",
                                                  ]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(
                                                  g,
                                                  {
                                                    filled: "",
                                                    modelValue: e.password,
                                                    "onUpdate:modelValue":
                                                      t[3] ||
                                                      (t[3] = (t) =>
                                                        (e.password = t)),
                                                    type: e.isPwd
                                                      ? "password"
                                                      : "text",
                                                    label: "Password",
                                                    dense: e.dense,
                                                    class:
                                                      "full-width my-counter-color",
                                                    rules: [
                                                      (e) =>
                                                        !!e ||
                                                        "Field is required",
                                                      (e) =>
                                                        e.length >= 8 ||
                                                        "At least 8 letters are required",
                                                    ],
                                                  },
                                                  {
                                                    append: (0, a.w5)(() => [
                                                      (0, a.Wm)(
                                                        b,
                                                        {
                                                          name: e.isPwd
                                                            ? "visibility_off"
                                                            : "visibility",
                                                          class:
                                                            "cursor-pointer",
                                                          onClick:
                                                            t[2] ||
                                                            (t[2] = (t) =>
                                                              (e.isPwd =
                                                                !e.isPwd)),
                                                        },
                                                        null,
                                                        8,
                                                        ["name"]
                                                      ),
                                                    ]),
                                                    prepend: (0, a.w5)(() => [
                                                      (0, a.Wm)(b, {
                                                        name: "lock",
                                                      }),
                                                    ]),
                                                    hint: (0, a.w5)(() => [
                                                      (0, a.Uk)(
                                                        " Please enter your accout password "
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "type",
                                                    "dense",
                                                    "rules",
                                                  ]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(f, {
                                                  "no-caps": "",
                                                  class:
                                                    "blue-button text-white my-login-submit",
                                                  label: "Sign in",
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
                              ]),
                              _: 1,
                            }
                          ),
                          (0, a.Wm)(
                            _,
                            {
                              name: "tabRegister",
                              class:
                                "row items-center justify-center full-width",
                            },
                            {
                              default: (0, a.w5)(() => [
                                (0, a.Wm)(
                                  W,
                                  {
                                    class: "full-width my-width-limit",
                                    onSubmit: e.submitRegister,
                                    onSubmiti: e.onSubmit,
                                    onValidationSuccess:
                                      t[10] ||
                                      (t[10] = (t) => (e.validRegister = !0)),
                                  },
                                  {
                                    default: (0, a.w5)(() => [
                                      (0, a.Wm)(y, null, {
                                        default: (0, a.w5)(() => [
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [u, r]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(
                                                  g,
                                                  {
                                                    filled: "",
                                                    outlined: "",
                                                    modelValue: e.name,
                                                    "onUpdate:modelValue":
                                                      t[5] ||
                                                      (t[5] = (t) =>
                                                        (e.name = t)),
                                                    type: "text",
                                                    label: "Username",
                                                    dense: e.dense,
                                                    class:
                                                      "full-width my-counter-color",
                                                    rules: [
                                                      (e) =>
                                                        !!e ||
                                                        "Field is required",
                                                    ],
                                                  },
                                                  {
                                                    prepend: (0, a.w5)(() => [
                                                      (0, a.Wm)(b, {
                                                        name: "person",
                                                      }),
                                                    ]),
                                                    hint: (0, a.w5)(() => [
                                                      (0, a.Uk)(
                                                        " This will be your username "
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "dense",
                                                    "rules",
                                                  ]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(
                                                  g,
                                                  {
                                                    filled: "",
                                                    modelValue: e.email,
                                                    "onUpdate:modelValue":
                                                      t[6] ||
                                                      (t[6] = (t) =>
                                                        (e.email = t)),
                                                    type: "email",
                                                    label: "Email address",
                                                    dense: e.dense,
                                                    class:
                                                      "full-width my-counter-color",
                                                    rules: [
                                                      (e) =>
                                                        !!e ||
                                                        "Field is required",
                                                    ],
                                                  },
                                                  {
                                                    prepend: (0, a.w5)(() => [
                                                      (0, a.Wm)(b, {
                                                        name: "mail",
                                                      }),
                                                    ]),
                                                    hint: (0, a.w5)(() => [
                                                      (0, a.Uk)(
                                                        " Please enter a valide email address "
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "dense",
                                                    "rules",
                                                  ]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(
                                                  g,
                                                  {
                                                    filled: "",
                                                    outlined: "",
                                                    modelValue: e.password,
                                                    "onUpdate:modelValue":
                                                      t[8] ||
                                                      (t[8] = (t) =>
                                                        (e.password = t)),
                                                    type: e.isPwd
                                                      ? "password"
                                                      : "text",
                                                    label: "Password",
                                                    hint: "Enter a password with atleast 8 (Eight) characters",
                                                    dense: e.dense,
                                                    class:
                                                      "full-width my-counter-color",
                                                    rules: [
                                                      (e) =>
                                                        !!e ||
                                                        "Field is required",
                                                      (e) =>
                                                        e.length >= 8 ||
                                                        "At least 8 letters are required",
                                                    ],
                                                  },
                                                  {
                                                    append: (0, a.w5)(() => [
                                                      (0, a.Wm)(
                                                        b,
                                                        {
                                                          name: e.isPwd
                                                            ? "visibility_off"
                                                            : "visibility",
                                                          class:
                                                            "cursor-pointer",
                                                          onClick:
                                                            t[7] ||
                                                            (t[7] = (t) =>
                                                              (e.isPwd =
                                                                !e.isPwd)),
                                                        },
                                                        null,
                                                        8,
                                                        ["name"]
                                                      ),
                                                    ]),
                                                    prepend: (0, a.w5)(() => [
                                                      (0, a.Wm)(b, {
                                                        name: "lock",
                                                      }),
                                                    ]),
                                                    hint: (0, a.w5)(() => [
                                                      (0, a.Uk)(
                                                        " Please enter your accout password "
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "type",
                                                    "dense",
                                                    "rules",
                                                  ]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, a.Wm)(
                                            V,
                                            {
                                              modelValue: e.accept,
                                              "onUpdate:modelValue":
                                                t[9] ||
                                                (t[9] = (t) => (e.accept = t)),
                                              label:
                                                "I agree with Terms & conditions",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          (0, a.Wm)(
                                            h,
                                            { class: "full-width" },
                                            {
                                              default: (0, a.w5)(() => [
                                                (0, a.Wm)(f, {
                                                  "no-caps": "",
                                                  class:
                                                    "blue-button text-white my-login-submit",
                                                  label: "Sign up",
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
                                  ["onSubmit", "onSubmiti"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            }
          )
        );
      }
      var c = l(499),
        p = l(6950),
        w = l(4328),
        h = l(9302),
        b = l(3746),
        g = l(5605),
        f = l(1186);
      const y = (0, g.t)(),
        W = (0, a.aZ)({
          name: "PageLogin",
          components: {},
          setup() {
            const e = (0, h.Z)(),
              t = (0, g.t)(),
              l = (0, c.iH)(!1);
            return {
              auth: t,
              text: (0, c.iH)(""),
              ph: (0, c.iH)(""),
              dense: (0, c.iH)(!1),
              right: (0, c.iH)(!1),
              accept: l,
              onSubmit() {
                !0 !== l.value
                  ? e.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "You need to accept the license and terms first",
                    })
                  : e.notify({
                      color: "green-4",
                      textColor: "white",
                      icon: "cloud_done",
                      message: "Submitted",
                    });
              },
            };
          },
          data() {
            return {
              email: "",
              password: "",
              name: "",
              accessKey: "",
              isPwd: !0,
              validLogin: !1,
              validRegister: !1,
              tab: "tabLogin",
            };
          },
          computed: {
            ...(0, b.Kc)(g.t),
            getAuthUser() {
              return y.user;
            },
            getAuthToken() {
              return y.token;
            },
            getAccessKey() {
              return y.accessKey || "";
            },
          },
          methods: {
            async submitAuth() {
              const e = (0, g.t)();
              this.validLogin &&
                (f.BY || p.Z.show(),
                await e.login(this.name, this.password),
                setTimeout(() => {
                  p.Z.hide(),
                    e.token &&
                      (e.accessKey
                        ? this.$router.push({ name: "Home", params: {} })
                        : this.$router.push({ name: "Key", params: {} }));
                }, f.RJ));
            },
            async submitRegister() {
              this.validRegister &&
                (f.BY || p.Z.show(),
                await y.register(this.email, this.password, this.name),
                setTimeout(() => {
                  p.Z.hide(),
                    y.token && this.$router.push({ name: "Key", params: {} });
                }, f.RJ));
            },
          },
          watch: {
            getAuthToken: {
              async handler(e) {
                e &&
                  (p.Z.hide(), this.$router.push({ name: "Key", params: {} }));
              },
              immediate: !1,
            },
            getAuthError: {
              handler(e) {
                e &&
                  (p.Z.hide(),
                  w.Z.create({
                    type: "negative",
                    position: "top",
                    message: e,
                  }));
              },
              immediate: !1,
            },
          },
        });
      var _ = l(1639),
        V = l(9885),
        v = l(8450),
        Z = l(900),
        q = l(9800),
        P = l(4106),
        k = l(8326),
        S = l(3246),
        U = l(490),
        T = l(7471),
        x = l(2857),
        Q = l(9379),
        R = l(592),
        A = l(9984),
        K = l.n(A);
      const L = (0, _.Z)(W, [
          ["render", m],
          ["__scopeId", "data-v-22da9145"],
        ]),
        C = L;
      K()(W, "components", {
        QPage: V.Z,
        QTabs: v.Z,
        QTab: Z.Z,
        QTabPanels: q.Z,
        QTabPanel: P.Z,
        QForm: k.Z,
        QList: S.Z,
        QItem: U.Z,
        QInput: T.Z,
        QIcon: x.Z,
        QBtn: Q.Z,
        QToggle: R.Z,
      });
    },
  },
]);
