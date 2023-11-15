(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [893],
  {
    6893: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => T });
      var n = a(9835),
        l = a(6970),
        o = a(8867),
        i = a.n(o);
      const u = { class: "version" };
      function r(e, t, a, o, r, s) {
        const p = (0, n.up)("q-btn"),
          c = (0, n.up)("q-toolbar-title"),
          d = (0, n.up)("q-toolbar"),
          m = (0, n.up)("q-header"),
          w = (0, n.up)("q-img"),
          f = (0, n.up)("q-item-label"),
          g = (0, n.up)("EssentialLink"),
          h = (0, n.up)("q-item"),
          k = (0, n.up)("q-list"),
          _ = (0, n.up)("q-drawer"),
          b = (0, n.up)("router-view"),
          Z = (0, n.up)("q-page-container"),
          W = (0, n.up)("q-layout");
        return (
          (0, n.wg)(),
          (0, n.j4)(
            W,
            { view: "lHh Lpr lFf" },
            {
              default: (0, n.w5)(() => [
                (0, n.Wm)(
                  m,
                  { elevated: "" },
                  {
                    default: (0, n.w5)(() => [
                      (0, n.Wm)(
                        d,
                        { class: "radial-gradient" },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Wm)(
                              p,
                              {
                                flat: "",
                                dense: "",
                                round: "",
                                icon: "menu",
                                "aria-label": "Menu",
                                onClick: e.toggleLeftDrawer,
                              },
                              null,
                              8,
                              ["onClick"]
                            ),
                            (0, n.Wm)(c, null, {
                              default: (0, n.w5)(() => [(0, n.Uk)(" Menu ")]),
                              _: 1,
                            }),
                            (0, n._)(
                              "div",
                              u,
                              "Version " + (0, l.zw)(e.version),
                              1
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                (0, n.Wm)(
                  _,
                  {
                    modelValue: e.leftDrawerOpen,
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.leftDrawerOpen = t)),
                    "show-if-above": "",
                    bordered: "",
                  },
                  {
                    default: (0, n.w5)(() => [
                      (0, n.Wm)(k, null, {
                        default: (0, n.w5)(() => [
                          (0, n.Wm)(
                            f,
                            { header: "" },
                            {
                              default: (0, n.w5)(() => [
                                (0, n.Wm)(w, {
                                  src: i(),
                                  "spinner-color": "white",
                                  style: { "max-width": "100px" },
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                          ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            null,
                            (0, n.Ko)(
                              e.essentialLinks,
                              (e) => (
                                (0, n.wg)(),
                                (0, n.j4)(
                                  g,
                                  (0, n.dG)({ key: e.title }, e),
                                  null,
                                  16
                                )
                              )
                            ),
                            128
                          )),
                          (0, n.Wm)(
                            f,
                            { header: "" },
                            {
                              default: (0, n.w5)(() => [
                                (0, n.Uk)("Authed as "),
                                (0, n._)(
                                  "b",
                                  null,
                                  (0, l.zw)(e.auth?.user.name),
                                  1
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          (0, n.Wm)(
                            f,
                            { header: "" },
                            {
                              default: (0, n.w5)(() => [
                                (0, n.Uk)("Key expires at "),
                                (0, n._)(
                                  "b",
                                  null,
                                  (0, l.zw)(e.expirationDate),
                                  1
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          (0, n.Wm)(h, null, {
                            default: (0, n.w5)(() => [
                              (0, n.Wm)(
                                p,
                                {
                                  icon: "logout",
                                  label: "Logout",
                                  onClick: e.logout,
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
                (0, n.Wm)(Z, null, {
                  default: (0, n.w5)(() => [(0, n.Wm)(b)]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      }
      var s = a(3746),
        p = a(4376),
        c = a(499);
      function d(e, t, a, o, i, u) {
        const r = (0, n.up)("q-icon"),
          s = (0, n.up)("q-item-section"),
          p = (0, n.up)("q-item-label"),
          c = (0, n.up)("q-item");
        return (
          (0, n.wg)(),
          (0, n.j4)(
            c,
            { clickable: "", exact: "", to: e.link },
            {
              default: (0, n.w5)(() => [
                e.icon
                  ? ((0, n.wg)(),
                    (0, n.j4)(
                      s,
                      { key: 0, avatar: "" },
                      {
                        default: (0, n.w5)(() => [
                          (0, n.Wm)(r, { name: e.icon }, null, 8, ["name"]),
                        ]),
                        _: 1,
                      }
                    ))
                  : (0, n.kq)("", !0),
                (0, n.Wm)(s, null, {
                  default: (0, n.w5)(() => [
                    (0, n.Wm)(p, null, {
                      default: (0, n.w5)(() => [
                        (0, n.Uk)((0, l.zw)(e.title), 1),
                      ]),
                      _: 1,
                    }),
                    (0, n.Wm)(
                      p,
                      { caption: "" },
                      {
                        default: (0, n.w5)(() => [
                          (0, n.Uk)((0, l.zw)(e.caption), 1),
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
            ["to"]
          )
        );
      }
      const m = (0, n.aZ)({
        name: "EssentialLink",
        props: {
          title: { type: String, required: !0 },
          caption: { type: String, default: "" },
          link: { type: String, default: "#" },
          icon: { type: String, default: "" },
        },
      });
      var w = a(1639),
        f = a(490),
        g = a(1233),
        h = a(2857),
        k = a(3115),
        _ = a(9984),
        b = a.n(_);
      const Z = (0, w.Z)(m, [["render", d]]),
        W = Z;
      b()(m, "components", {
        QItem: f.Z,
        QItemSection: g.Z,
        QIcon: h.Z,
        QItemLabel: k.Z,
      });
      var q = a(4147),
        v = a(5605);
      const L = (0, v.t)(),
        y = [
          {
            title: "Ghost App",
            caption: "Unflag your pc",
            icon: "home",
            link: "",
          },
        ];
      let Q = [];
      const D = (0, n.aZ)({
        name: "MainLayout",
        components: { EssentialLink: W },
        async mounted() {
          this.auth.token ||
            (await this.$router.push({ name: "Login", params: {} }));
        },
        setup() {
          const e = (0, c.iH)(!1),
            t = (0, c.iH)(Q);
          return {
            essentialLinks: y,
            leftDrawerOpen: e,
            toggleLeftDrawer() {
              e.value = !e.value;
            },
            auth: L,
            list: t,
          };
        },
        data() {
          return {
            version: q.i8,
            started: !1,
            expirationDate: L.accessKeyExpiration
              ? p.ZP.formatDate(L?.accessKeyExpiration, "MM/DD/YY HH:MM:SS")
              : "none",
          };
        },
        computed: { ...(0, s.Kc)(v.t) },
        methods: {
          logout() {
            this.auth.logout(),
              this.$router.push({ name: "Login", params: {} });
          },
        },
      });
      var x = a(7605),
        I = a(6602),
        C = a(1663),
        H = a(9379),
        M = a(1973),
        S = a(1300),
        U = a(3246),
        z = a(335),
        E = a(2133);
      const K = (0, w.Z)(D, [
          ["render", r],
          ["__scopeId", "data-v-2ff714e1"],
        ]),
        T = K;
      b()(D, "components", {
        QLayout: x.Z,
        QHeader: I.Z,
        QToolbar: C.Z,
        QBtn: H.Z,
        QToolbarTitle: M.Z,
        QDrawer: S.Z,
        QList: U.Z,
        QItemLabel: k.Z,
        QImg: z.Z,
        QItem: f.Z,
        QPageContainer: E.Z,
      });
    },
    8867: (e, t, a) => {
      e.exports = a.p + "img/ghost-text.2c9dd037.png";
    },
    4147: (e) => {
      "use strict";
      e.exports = { i8: "1.1.0" };
    },
  },
]);
