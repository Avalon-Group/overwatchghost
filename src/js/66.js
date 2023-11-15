"use strict";
(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [66],
  {
    1066: (e, t, s) => {
      s.r(t), s.d(t, { default: () => x });
      var r = s(9835),
        n = s(6970),
        o = s(1957);
      const a = {
          class:
            "fullscreen radial-gradient text-white text-center q-pa-md flex flex-center",
        },
        l = { class: "text-h5", style: { opacity: ".4" } },
        i = { key: 0 },
        d = { key: 1 },
        u = { key: 1 },
        c = { class: "text-h5", style: { opacity: ".4" } },
        w = { key: 0 };
      function h(e, t, s, h, p, b) {
        const f = (0, r.up)("q-item-section"),
          v = (0, r.up)("q-item"),
          g = (0, r.up)("q-btn"),
          m = (0, r.up)("q-spinner-ios"),
          k = (0, r.up)("q-list");
        return (
          (0, r.wg)(),
          (0, r.iD)("div", a, [
            e.currentVersion
              ? ((0, r.wg)(),
                (0, r.iD)("div", { key: e.version }, [
                  (0, r._)("div", l, [
                    "downloaded" == e.status
                      ? ((0, r.wg)(),
                        (0, r.iD)(
                          "div",
                          i,
                          " New version " +
                            (0, n.zw)(e.version) +
                            " is downloaded. Install it now? ",
                          1
                        ))
                      : ((0, r.wg)(),
                        (0, r.iD)(
                          "div",
                          d,
                          " New version " +
                            (0, n.zw)(e.version) +
                            " found. Your current version is " +
                            (0, n.zw)(e.currentVersion) +
                            "... ",
                          1
                        )),
                  ]),
                  (0, r.Wm)(
                    k,
                    { class: "full-width" },
                    {
                      default: (0, r.w5)(() => [
                        e.releaseNotes
                          ? ((0, r.wg)(),
                            (0, r.j4)(
                              v,
                              { key: 0, class: "full-width" },
                              {
                                default: (0, r.w5)(() => [
                                  (0, r.Wm)(
                                    f,
                                    { class: "full-width items-start" },
                                    {
                                      default: (0, r.w5)(() => [
                                        (0, r.wy)(
                                          (0, r._)(
                                            "textarea",
                                            {
                                              readonly: "",
                                              class:
                                                "readonly full-width full-height no-border",
                                              rows: "7",
                                              "onUpdate:modelValue":
                                                t[0] ||
                                                (t[0] = (t) =>
                                                  (e.releaseNotes = t)),
                                            },
                                            null,
                                            512
                                          ),
                                          [[o.nr, e.releaseNotes]]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ))
                          : (0, r.kq)("", !0),
                        (0, r.Wm)(
                          v,
                          { class: "q-pt-xs" },
                          {
                            default: (0, r.w5)(() => [
                              (0, r.Wm)(f, null, {
                                default: (0, r.w5)(() => [
                                  "downloaded" == e.status
                                    ? ((0, r.wg)(),
                                      (0, r.j4)(g, {
                                        key: 0,
                                        class: "start-btn",
                                        color: "white",
                                        "text-color": "blue",
                                        unelevated: "",
                                        onClick:
                                          t[1] ||
                                          (t[1] = (t) => e.updaterInstall()),
                                        label: "Install...",
                                        "no-caps": "",
                                      }))
                                    : (0, r.kq)("", !0),
                                  "progress" == e.status
                                    ? ((0, r.wg)(),
                                      (0, r.j4)(
                                        g,
                                        {
                                          key: 1,
                                          class: "",
                                          color: "white",
                                          "text-color": "blue",
                                          unelevated: "",
                                          "no-caps": "",
                                          disable: "",
                                        },
                                        {
                                          default: (0, r.w5)(() => [
                                            (0, r._)("div", null, [
                                              (0, r.Uk)(
                                                (0, n.zw)(e.progressLabel) +
                                                  " ",
                                                1
                                              ),
                                              (0, r.Wm)(m, {
                                                color: "primary",
                                                size: "20px",
                                              }),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ))
                                    : (0, r.kq)("", !0),
                                  "downloaded" != e.status &&
                                  "progress" != e.status
                                    ? ((0, r.wg)(),
                                      (0, r.j4)(
                                        g,
                                        {
                                          key: 2,
                                          class: "start-btn",
                                          color: "white",
                                          "text-color": "blue",
                                          unelevated: "",
                                          onClick:
                                            t[2] ||
                                            (t[2] = (t) => e.updaterDownload()),
                                          label: "Download...",
                                          "no-caps": "",
                                          "v-bind:disabled":
                                            "" !== e.disabledButton,
                                        },
                                        null,
                                        8,
                                        ["v-bind:disabled"]
                                      ))
                                    : (0, r.kq)("", !0),
                                ]),
                                _: 1,
                              }),
                              (0, r.Wm)(f, null, {
                                default: (0, r.w5)(() => [
                                  (0, r.Wm)(g, {
                                    class: "q-ml-lg start-btn",
                                    color: "white",
                                    "text-color": "blue",
                                    unelevated: "",
                                    onClick: t[3] || (t[3] = (t) => e.close()),
                                    label: "May be later...",
                                    "no-caps": "",
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]))
              : (0, r.kq)("", !0),
            "" == e.currentVersion
              ? ((0, r.wg)(),
                (0, r.iD)("div", u, [
                  (0, r._)("div", c, [
                    (0, r._)("div", null, [
                      (0, r.Uk)(
                        " Loading new update information. Please wait a moment... "
                      ),
                      e.refreshCounter
                        ? ((0, r.wg)(),
                          (0, r.iD)("b", w, (0, n.zw)(e.refreshCounter), 1))
                        : ((0, r.wg)(),
                          (0, r.j4)(
                            g,
                            {
                              key: 1,
                              size: "1rem",
                              onClick:
                                t[4] || (t[4] = (t) => e.manualRefresh()),
                            },
                            {
                              default: (0, r.w5)(() => [
                                (0, r.Uk)(" Manual Refresh "),
                              ]),
                              _: 1,
                            }
                          )),
                    ]),
                  ]),
                ]))
              : (0, r.kq)("", !0),
          ])
        );
      }
      var p = s(4328);
      const b = (0, r.aZ)({
        name: "UpdaterPage",
        data() {
          return {
            status: "",
            percent: 0,
            version: "",
            currentVersion: "",
            releaseNotes: "",
            disabledButton: "",
            refreshCounter: 10,
          };
        },
        created() {
          const e = (e, t) => (e, s) => {
              "error" === e &&
                (p.Z.create({
                  message: s.message,
                  type: "warning",
                  color: "red",
                  position: "top",
                }),
                (this.disabledButton = "")),
                this.setStatus(e),
                "progress" === e && t(s);
            },
            t = (e, t, s, r) => (n, o) => {
              n &&
                n.currentVersion &&
                (e(n.status),
                s(n.currentVersion),
                t(n.version),
                n.releaseNotes && r(n.releaseNotes),
                (this.disabledButton = ""));
            };
          if (
            (window.updater.init(
              e(this.setStatus, this.setProgress),
              t(
                this.setStatus,
                this.setVersion,
                this.setCurrentVersion,
                this.setReleaseNotes
              )
            ),
            "" === this.currentVersion)
          ) {
            const e = setInterval(() => {
              this.refreshCounter > 0
                ? this.refreshCounter--
                : clearInterval(e);
            }, 1e3);
          }
        },
        computed: {
          progressLabel() {
            return "Downloading..." + this.percent + "%";
          },
        },
        methods: {
          setStatus(e) {
            this.currentVersion && (this.status = e);
          },
          setProgress(e) {
            e.percent && (this.percent = Math.ceil(e.percent));
          },
          setVersion(e) {
            this.currentVersion && (this.version = e);
          },
          setCurrentVersion(e) {
            this.currentVersion = e;
          },
          setReleaseNotes(e) {
            this.currentVersion && (this.releaseNotes = e);
          },
          close() {
            window.updater.closeWindow();
          },
          updaterDownload() {
            (this.disabledButton = "disabled"), window.updater.download();
          },
          updaterInstall() {
            (this.disabledButton = "disabled"), window.updater.install();
          },
          manualRefresh() {
            window.location.reload();
          },
        },
      });
      var f = s(1639),
        v = s(3246),
        g = s(490),
        m = s(1233),
        k = s(9379),
        y = s(8359),
        V = s(9984),
        _ = s.n(V);
      const q = (0, f.Z)(b, [
          ["render", h],
          ["__scopeId", "data-v-2f442c78"],
        ]),
        x = q;
      _()(b, "components", {
        QList: v.Z,
        QItem: g.Z,
        QItemSection: m.Z,
        QBtn: k.Z,
        QSpinnerIos: y.Z,
      });
    },
  },
]);
