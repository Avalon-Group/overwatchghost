(() => {
  var e = {
      8991: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { api: () => o, default: () => i });
        var n = s(3340),
          r = s(9981),
          a = s.n(r);
        const o = a().create({ baseURL: "https://api.example.com" }),
          i = (0, n.xr)(({ app: e }) => {
            (e.config.globalProperties.$axios = a()),
              (e.config.globalProperties.$api = o);
          });
      },
      3285: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        var n = s(3340),
          r = s(7712);
        const a = { failed: "Action failed", success: "Action was successful" },
          o = { "en-US": a },
          i = (0, n.xr)(({ app: e }) => {
            const t = (0, r.o)({ locale: "en-US", messages: o });
            e.use(t);
          });
      },
      1186: (e, t, s) => {
        "use strict";
        s.d(t, {
          xb: () => c,
          QW: () => a,
          tF: () => u,
          wp: () => p,
          g7: () => r,
          RJ: () => f,
          IP: () => i,
          BY: () => y,
          WT: () => g,
          CZ: () => h,
          QF: () => l,
          sT: () => d,
          TK: () => o,
          _n: () => n,
        });
        const n = "https://live-hf-toolkit.pantheonsite.io",
          r = "/user/register",
          a = "/user/login",
          o = "/jsonapi/user/user",
          i = "/session/token",
          c = "/ghost_rest_api/access_key_resource/",
          u = "/node/{0}",
          l = "/rest/type/node/access_keys",
          d = "/rest/type/user/user",
          h = "access_keys",
          p = "[REDEEMED]",
          f = 3e3,
          m = {
            uid: -1,
            uuid: "test-uid",
            email: "test@example.com",
            name: "tester name",
            active: !0,
          },
          g = {
            name: m.email,
            password: "test password",
            token: "test-token",
            logoutToken: "test-logout-token",
            accessKey: "test-access-key",
            user: m,
          },
          y = !1;
      },
      6790: () => {
        String.prototype.format = function (...e) {
          let t = this.toString();
          if (e.length) {
            const s = typeof e[0];
            e =
              "string" === s || "number" === s
                ? Array.prototype.slice.call(e)
                : e[0];
            for (const n in e) t = t.replace("{" + n + "}", e[n]);
          }
          return t;
        };
      },
      5605: (e, t, s) => {
        "use strict";
        s.d(t, { t: () => p });
        var n = s(4376),
          r = s(4328),
          a = s(3746),
          o = s(9981),
          i = s.n(o),
          c = s(1186);
        s(6790);
        const u = (e, t, s) => ({
            _links: { type: { href: c._n + c.sT } },
            name: [{ value: s }],
            mail: [{ value: e }],
            pass: [{ value: t }],
          }),
          l = (e, t) => {
            const s = {
              _links: { type: { href: c._n + c.QF } },
              type: [{ target_id: c.CZ }],
            };
            return (
              e && (s.field_state = [{ value: e }]),
              t && (s.title = [{ value: t }]),
              s
            );
          };
        class d {
          constructor(e) {
            (this.baseUrl = ""),
              (this.token = ""),
              (this.csrf = ""),
              (this.userInfo = {}),
              (this.baseUrl = e);
          }
          static getInstance() {
            return d.instance || (d.instance = new d(c._n)), d.instance;
          }
          setToken(e) {
            return (this.token = e), (d.instance = this), this;
          }
          setCSRF(e) {
            return (this.csrf = e), (d.instance = this), this;
          }
          async postRegister(e, t, s, n, r) {
            const a = this.config(),
              o = await i().create(a).get(`${this.baseUrl}${c.IP}`);
            return (
              (this.csrf = o.data),
              i()
                .create(a)
                .post(
                  `${this.baseUrl}${c.g7}${this.params()}`,
                  JSON.stringify(u(e, t, s))
                )
                .then(function (e) {
                  n && n(e);
                })
                .catch(function (e) {
                  r ? r(e) : console.error(e);
                })
            );
          }
          postLogin(e, t, s, n) {
            i()
              .post(
                `${this.baseUrl}${c.QW}${this.params()}`,
                JSON.stringify({ name: e, pass: t })
              )
              .then(function (e) {
                s && s(e);
              })
              .catch(function (e) {
                n ? n(e) : console.error(e);
              });
          }
          postRedeem(e, t, s) {
            const n = this.config();
            (n.auth = { username: "admin", password: "admin" }),
              i()
                .create(n)
                .get(`${this.baseUrl}${c.xb}${e}`)
                .then(function (e) {
                  t && t(e);
                })
                .catch(function (e) {
                  s ? s(e) : console.error(e);
                });
          }
          deleteRedeemed(e, t, s) {
            const n = this.config();
            (n.auth = { username: "admin", password: "admin" }),
              i()
                .create(n)
                .delete(
                  `${this.baseUrl}${c.tF.format(e)}${this.params(
                    "_format=hal_json"
                  )}`
                )
                .then(function (e) {
                  t && t(e);
                })
                .catch(function (e) {
                  s ? s(e) : console.error(e);
                });
          }
          patchRedeemed(e, t, s) {
            const n = this.config();
            (n.auth = { username: "admin", password: "admin" }),
              i()
                .create(n)
                .patch(
                  `${this.baseUrl}${c.tF.format(e)}${this.params(
                    "_format=hal_json"
                  )}`,
                  JSON.stringify(l(c.wp))
                )
                .then(function (e) {
                  t && t(e);
                })
                .catch(function (e) {
                  s ? s(e) : console.error(e);
                });
          }
          async getUsers(e, t) {
            return i()
              .create(this.config())
              .get(`${this.baseUrl}${c.TK}`)
              .then(function (t) {
                e && e(t);
              })
              .catch(function (e) {
                t ? t(e) : console.error(e);
              });
          }
          patchBind(e, t, s) {
            const n = this.config();
            return (
              (n.auth = { username: "admin", password: "admin" }),
              (n.headers["Accept"] = "application/vnd.api+json"),
              (n.headers["Content-type"] = "application/vnd.api+json"),
              i()
                .create(n)
                .patch(`${this.baseUrl}${c.TK}/${e.uuid}`, {
                  data: {
                    type: "user--user",
                    id: e.uuid,
                    links: {
                      self: { ref: `${this.baseUrl}${c.TK}/${e.uuid}` },
                    },
                    attributes: {
                      display_name: e.name,
                      drupal_internal__uid: e.uid,
                    },
                  },
                })
                .then(function (e) {
                  t && t(e);
                })
                .catch(function (e) {
                  s ? s(e) : console.error(e);
                })
            );
          }
          config() {
            return {
              method: "get",
              url: "",
              headers: {
                API_HEADER_CSRF: this.csrf,
                "Content-type": "application/hal+json",
              },
            };
          }
          params(...e) {
            return "?" + (e && e.length > 0 ? e.join("&") : "_format=json");
          }
        }
        const h = d.getInstance(),
          p = (0, a.Q_)("auth", {
            persist: { key: "key-binder-auth" },
            state: () => ({
              name: "",
              password: "",
              token: "",
              logoutToken: "",
              accessKey: void 0,
              accessKeyExpiration: void 0,
              error: void 0,
              user: void 0,
            }),
            getters: { getUser: (e) => e.user },
            actions: {
              async login(e, t) {
                c.BY
                  ? ((this.name = c.WT.name),
                    (this.password = c.WT.password),
                    (this.token = c.WT.token),
                    (this.logoutToken = c.WT.logoutToken),
                    (this.user = c.WT.user))
                  : await h.postLogin(
                      e,
                      t,
                      async (s) => {
                        h.setToken(s.data.uid),
                          (this.password = t),
                          (this.token = s.data.current_user.uid),
                          (this.logoutToken = s.data.logout_token),
                          h.setCSRF(s.data.csrf_token);
                        const n = {
                          uid: s.data.current_user.uid,
                          name: e,
                          active: !0,
                        };
                        let r;
                        await h.getUsers((e) => {
                          r = e.data.data.find(
                            (e) => e.attributes.display_name == n.name
                          );
                        }),
                          r && ((n.uuid = r.id), (this.user = n));
                      },
                      (e) => {
                        r.Z.create({
                          type: "negative",
                          position: "top",
                          caption: e.message,
                          message: e.response?.data.message,
                        });
                      }
                    );
              },
              async register(e, t, s) {
                c.BY
                  ? ((this.name = s),
                    (this.password = t),
                    (this.token = c.WT.token),
                    (this.logoutToken = c.WT.logoutToken),
                    (this.user = {
                      uid: c.WT.user?.uid,
                      email: e,
                      name: s,
                      active: !0,
                    }))
                  : await h.postRegister(
                      e,
                      t,
                      s,
                      (n) => {
                        h.setToken(n.data.uuid[0].value),
                          (this.name = s),
                          (this.password = t),
                          (this.token = n.data.uuid[0].value),
                          (this.user = {
                            uid: n.data.uid[0].value,
                            uuid: n.data.uuid[0].value,
                            email: e,
                            name: s,
                            active: !0,
                          });
                      },
                      (e) => {
                        r.Z.create({
                          type: "negative",
                          position: "top",
                          caption: e.message,
                          message: e.response?.data.message,
                        });
                      }
                    );
              },
              logout() {
                (this.name = ""),
                  (this.password = ""),
                  (this.token = ""),
                  (this.logoutToken = ""),
                  (this.user = void 0);
              },
              async redeem(e) {
                (this.accessKey = e),
                  c.BY
                    ? (this.accessKey = e)
                    : await h.postRedeem(
                        e,
                        (t) => {
                          if (t.data.subscription) {
                            let s = { days: 1 };
                            switch (t.data.subscription) {
                              case "Month Key":
                                s = { months: 1 };
                                break;
                              case "Week Key":
                                s = { days: 7 };
                                break;
                              case "Day Key":
                                s = { days: 1 };
                                break;
                            }
                            const r = n.ZP.addToDate(
                                new Date(t.data.redeemed),
                                s
                              ),
                              a = new Date();
                            if (
                              n.ZP.isBetweenDates(a, a, r, {
                                inclusiveFrom: !0,
                                inclusiveTo: !1,
                                onlyDate: !1,
                              })
                            )
                              return (
                                (this.accessKey = e),
                                void (this.accessKeyExpiration = r)
                              );
                          }
                        },
                        (e) => {
                          r.Z.create({
                            type: "negative",
                            position: "top",
                            caption: e.message,
                            message: e.response?.data.message,
                          });
                        }
                      );
              },
              validateCurrentAccessKey() {
                return (
                  !(!this.accessKeyExpiration || !this.accessKey) &&
                  n.ZP.getDateDiff(
                    this.accessKeyExpiration.toString(),
                    new Date()
                  ) > 0
                );
              },
            },
          });
      },
      5291: (e, t, s) => {
        "use strict";
        s(8964), s(702);
        var n = s(1957),
          r = s(1947),
          a = s(499),
          o = s(9835);
        function i(e, t, s, n, r, a) {
          const i = (0, o.up)("router-view");
          return (0, o.wg)(), (0, o.j4)(i);
        }
        const c = (0, o.aZ)({ name: "App" });
        var u = s(1639);
        const l = (0, u.Z)(c, [["render", i]]),
          d = l;
        var h = s(3340),
          p = s(3746),
          f = s(1903);
        const m = (0, h.h)(() => {
          const e = (0, p.WB)();
          return e.use(f.ZP), e;
        });
        var g = s(8339),
          y = s(5605);
        const v = (e) => [
            {
              path: "/",
              component: () =>
                Promise.all([s.e(736), s.e(505)]).then(s.bind(s, 7505)),
              children: [
                {
                  path: "login",
                  name: "Login",
                  component: () =>
                    Promise.all([s.e(736), s.e(323)]).then(s.bind(s, 9323)),
                },
                {
                  path: "key",
                  name: "Key",
                  component: () =>
                    Promise.all([s.e(736), s.e(468)]).then(s.bind(s, 2468)),
                },
                {
                  path: "updater",
                  name: "Updater",
                  component: () =>
                    Promise.all([s.e(736), s.e(66)]).then(s.bind(s, 1066)),
                },
              ],
            },
            {
              path: "",
              beforeEnter: (t, s, n) => {
                const r = (0, y.t)(e);
                r.token
                  ? r.accessKey && r.validateCurrentAccessKey()
                    ? n()
                    : n({ path: "/key" })
                  : n({ path: "/login" });
              },
              component: () =>
                Promise.all([s.e(736), s.e(893)]).then(s.bind(s, 6893)),
              children: [
                {
                  path: "",
                  name: "Home",
                  component: () =>
                    Promise.all([s.e(736), s.e(294)]).then(s.bind(s, 5294)),
                },
              ],
            },
            {
              path: "/:catchAll(.*)*",
              component: () =>
                Promise.all([s.e(736), s.e(596)]).then(s.bind(s, 1596)),
            },
          ],
          b = v,
          k = (0, h.BC)(function ({ store: e }) {
            const t = g.r5,
              s = b(e),
              n = (0, g.p7)({
                scrollBehavior: () => ({ left: 0, top: 0 }),
                routes: s,
                history: t(""),
              });
            return n;
          });
        async function w(e, t) {
          const s = e(d);
          s.use(r.Z, t);
          const n = "function" === typeof m ? await m({}) : m;
          s.use(n);
          const o = (0, a.Xl)(
            "function" === typeof k ? await k({ store: n }) : k
          );
          return (
            n.use(({ store: e }) => {
              e.router = o;
            }),
            { app: s, store: n, router: o }
          );
        }
        var T = s(4328),
          _ = s(6950);
        const P = {
            config: { notify: {}, loading: {} },
            plugins: { Notify: T.Z, Loading: _.Z },
          },
          $ = "";
        async function C({ app: e, router: t, store: s }, n) {
          let r = !1;
          const a = (e) => {
              try {
                return t.resolve(e).href;
              } catch (s) {}
              return Object(e) === e ? null : e;
            },
            o = (e) => {
              if (((r = !0), "string" === typeof e && /^https?:\/\//.test(e)))
                return void (window.location.href = e);
              const t = a(e);
              null !== t &&
                ((window.location.href = t), window.location.reload());
            },
            i = window.location.href.replace(window.location.origin, "");
          for (let u = 0; !1 === r && u < n.length; u++)
            try {
              await n[u]({
                app: e,
                router: t,
                store: s,
                ssrContext: null,
                redirect: o,
                urlPath: i,
                publicPath: $,
              });
            } catch (c) {
              return c && c.url
                ? void o(c.url)
                : void console.error("[Quasar] boot error:", c);
            }
          !0 !== r && (e.use(t), e.mount("#q-app"));
        }
        w(n.ri, P).then((e) => {
          const [t, n] =
            void 0 !== Promise.allSettled
              ? [
                  "allSettled",
                  (e) =>
                    e.map((e) => {
                      if ("rejected" !== e.status) return e.value.default;
                      console.error("[Quasar] boot error:", e.reason);
                    }),
                ]
              : ["all", (e) => e.map((e) => e.default)];
          return Promise[t]([
            Promise.resolve().then(s.bind(s, 3285)),
            Promise.resolve().then(s.bind(s, 8991)),
          ]).then((t) => {
            const s = n(t).filter((e) => "function" === typeof e);
            C(e, s);
          });
        });
      },
    },
    t = {};
  function s(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, s), a.exports;
  }
  (s.m = e),
    (() => {
      var e = [];
      s.O = (t, n, r, a) => {
        if (!n) {
          var o = 1 / 0;
          for (l = 0; l < e.length; l++) {
            for (var [n, r, a] = e[l], i = !0, c = 0; c < n.length; c++)
              (!1 & a || o >= a) && Object.keys(s.O).every((e) => s.O[e](n[c]))
                ? n.splice(c--, 1)
                : ((i = !1), a < o && (o = a));
            if (i) {
              e.splice(l--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        a = a || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > a; l--) e[l] = e[l - 1];
        e[l] = [n, r, a];
      };
    })(),
    (() => {
      s.n = (e) => {
        var t = e && e.__esModule ? () => e["default"] : () => e;
        return s.d(t, { a: t }), t;
      };
    })(),
    (() => {
      s.d = (e, t) => {
        for (var n in t)
          s.o(t, n) &&
            !s.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (() => {
      (s.f = {}),
        (s.e = (e) =>
          Promise.all(
            Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), [])
          ));
    })(),
    (() => {
      s.u = (e) => "js/" + e + ".js";
    })(),
    (() => {
      s.miniCssF = (e) =>
        "css/" + ({ 143: "app", 736: "vendor" }[e] || e) + ".css";
    })(),
    (() => {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (() => {
      s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      var e = {},
        t = "Ghost:";
      s.l = (n, r, a, o) => {
        if (e[n]) e[n].push(r);
        else {
          var i, c;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), l = 0;
              l < u.length;
              l++
            ) {
              var d = u[l];
              if (
                d.getAttribute("src") == n ||
                d.getAttribute("data-webpack") == t + a
              ) {
                i = d;
                break;
              }
            }
          i ||
            ((c = !0),
            (i = document.createElement("script")),
            (i.charset = "utf-8"),
            (i.timeout = 120),
            s.nc && i.setAttribute("nonce", s.nc),
            i.setAttribute("data-webpack", t + a),
            (i.src = n)),
            (e[n] = [r]);
          var h = (t, s) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var r = e[n];
              if (
                (delete e[n],
                i.parentNode && i.parentNode.removeChild(i),
                r && r.forEach((e) => e(s)),
                t)
              )
                return t(s);
            },
            p = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = h.bind(null, i.onerror)),
            (i.onload = h.bind(null, i.onload)),
            c && document.head.appendChild(i);
        }
      };
    })(),
    (() => {
      s.r = (e) => {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (() => {
      s.p = "";
    })(),
    (() => {
      var e = (e, t, s, n) => {
          var r = document.createElement("link");
          (r.rel = "stylesheet"), (r.type = "text/css");
          var a = (a) => {
            if (((r.onerror = r.onload = null), "load" === a.type)) s();
            else {
              var o = a && ("load" === a.type ? "missing" : a.type),
                i = (a && a.target && a.target.href) || t,
                c = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                );
              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                (c.type = o),
                (c.request = i),
                r.parentNode.removeChild(r),
                n(c);
            }
          };
          return (
            (r.onerror = r.onload = a),
            (r.href = t),
            document.head.appendChild(r),
            r
          );
        },
        t = (e, t) => {
          for (
            var s = document.getElementsByTagName("link"), n = 0;
            n < s.length;
            n++
          ) {
            var r = s[n],
              a = r.getAttribute("data-href") || r.getAttribute("href");
            if ("stylesheet" === r.rel && (a === e || a === t)) return r;
          }
          var o = document.getElementsByTagName("style");
          for (n = 0; n < o.length; n++) {
            (r = o[n]), (a = r.getAttribute("data-href"));
            if (a === e || a === t) return r;
          }
        },
        n = (n) =>
          new Promise((r, a) => {
            var o = s.miniCssF(n),
              i = s.p + o;
            if (t(o, i)) return r();
            e(n, i, r, a);
          }),
        r = { 143: 0 };
      s.f.miniCss = (e, t) => {
        var s = { 66: 1, 294: 1, 323: 1, 468: 1, 893: 1 };
        r[e]
          ? t.push(r[e])
          : 0 !== r[e] &&
            s[e] &&
            t.push(
              (r[e] = n(e).then(
                () => {
                  r[e] = 0;
                },
                (t) => {
                  throw (delete r[e], t);
                }
              ))
            );
      };
    })(),
    (() => {
      var e = { 143: 0 };
      (s.f.j = (t, n) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var a = new Promise((s, n) => (r = e[t] = [s, n]));
            n.push((r[2] = a));
            var o = s.p + s.u(t),
              i = new Error(),
              c = (n) => {
                if (s.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = o),
                    r[1](i);
                }
              };
            s.l(o, c, "chunk-" + t, t);
          }
      }),
        (s.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var r,
            a,
            [o, i, c] = n,
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in i) s.o(i, r) && (s.m[r] = i[r]);
            if (c) var l = c(s);
          }
          for (t && t(n); u < o.length; u++)
            (a = o[u]), s.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return s.O(l);
        },
        n = (globalThis["webpackChunkGhost"] =
          globalThis["webpackChunkGhost"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = s.O(void 0, [736], () => s(5291));
  n = s.O(n);
})();
