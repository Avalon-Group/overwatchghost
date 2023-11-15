(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [294],
  {
    5294: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => A });
      var a = s(9835),
        n = s(6970),
        o = s(9319),
        l = s.n(o),
        i = s(8867),
        r = s.n(i);
      const u = (e) => (
          (0, a.dD)("data-v-005a40ee"), (e = e()), (0, a.Cn)(), e
        ),
        c = { className: "parent-container row" },
        m = u(() => (0, a._)("div", { className: "col-md-2" }, null, -1)),
        d = { className: "col-md-10" },
        h = { className: "content-wrapper" },
        p = { className: "ghost-text-wrapper" },
        g = u(() =>
          (0, a._)(
            "div",
            { className: "text-h5 ghost-description exo" },
            " Click start to allow ghost to seamlessly remove any previous flags that have been left on your machine by blizzard's anti-cheat ",
            -1
          )
        ),
        f = { className: "text-h6 text-log" };
      function w(e, t, s, o, i, u) {
        const w = (0, a.up)("q-img"),
          x = (0, a.up)("q-item"),
          v = (0, a.up)("q-linear-progress"),
          b = (0, a.up)("q-list"),
          T = (0, a.up)("q-form"),
          _ = (0, a.up)("q-btn"),
          y = (0, a.up)("q-page");
        return (
          (0, a.wg)(),
          (0, a.j4)(
            y,
            { class: "row items-center justify-evenly radial-gradient" },
            {
              default: (0, a.w5)(() => [
                (0, a.Wm)(
                  T,
                  { class: "full-width my-width-limit" },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Wm)(b, null, {
                        default: (0, a.w5)(() => [
                          (0, a._)("div", c, [
                            m,
                            (0, a._)("div", d, [
                              (0, a._)("div", h, [
                                (0, a._)("span", p, [
                                  (0, a.Wm)(x, null, {
                                    default: (0, a.w5)(() => [
                                      (0, a.Wm)(w, {
                                        src: l(),
                                        "spinner-color": "white",
                                        style: { "max-width": "70px" },
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  (0, a.Wm)(w, {
                                    src: r(),
                                    "spinner-color": "white",
                                    style: { "max-width": "300px" },
                                  }),
                                ]),
                                (0, a.Wm)(
                                  x,
                                  { class: "full-width justify-center" },
                                  { default: (0, a.w5)(() => [g]), _: 1 }
                                ),
                                (0, a.Wm)(
                                  x,
                                  { class: "full-width" },
                                  {
                                    default: (0, a.w5)(() => [
                                      (0, a._)("div", f, (0, n.zw)(e.text), 1),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, a.Wm)(
                                  x,
                                  { class: "full-width justify-center" },
                                  {
                                    default: (0, a.w5)(() => [
                                      (0, a.Wm)(
                                        v,
                                        {
                                          dark: "",
                                          rounded: "",
                                          size: "30px",
                                          value: e.progress,
                                          buffer: e.buffer,
                                          color: "deep-purple accent-4",
                                          class: "q-mt-sm",
                                        },
                                        null,
                                        8,
                                        ["value", "buffer"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                (0, a.Wm)(
                  x,
                  { class: "full-width button-container" },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Wm)(_, {
                        "no-caps": "",
                        rounded: "",
                        class: "text-white my-login-submit start-btn exo",
                        label: "Start",
                        type: "submit",
                        onClick:
                          t[0] ||
                          (t[0] = (t) => {
                            e.execute(), e.textlogger();
                          }),
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      }
      var x = s(499),
        v = s(5605);
      const b = (0, v.t)();
      let T, _;
      const y = (0, x.iH)(0.01),
        W = (0, x.iH)(0.01),
        k = () => {
          (T = setInterval(() => {
            y.value >= 1 || (y.value = Math.min(1, W.value, y.value + 0.1));
          }, 5e3 + 1e3 * Math.random())),
            (_ = setInterval(() => {
              W.value < 1 &&
                (W.value = Math.min(1, W.value + 0.2 * Math.random()));
            }, 5e3));
        },
        I = (0, a.aZ)({
          name: "IndexPage",
          components: {},
          setup() {
            return (
              window.binder.setup(Object.assign({}, b.user)),
              (0, a.Jd)(() => {
                clearInterval(T), clearInterval(_);
              }),
              { progress: y, buffer: W }
            );
          },
          data() {
            return { text: "" };
          },
          mounted() {},
          methods: {
            execute() {
              window.executer.run(), k();
            },
            cancelProgress() {
              clearInterval(T), clearInterval(_), (this.text = " ");
            },
            textlogger() {
              setTimeout(() => {
                this.text = "Sanitizing Processes...";
              }, 0),
                setTimeout(() => {
                  this.text = "Processes cleaned.";
                }, 5e3),
                setTimeout(() => {
                  this.text = "Scanning pc for probable sources of flags...";
                }, 7e3),
                setTimeout(() => {
                  this.text = "Scan complete.";
                }, 14e3),
                setTimeout(() => {
                  this.text =
                    "Running advanced neural network scan to generate patches to remove flags.";
                }, 16e3),
                setTimeout(() => {
                  this.text = "Neural netwrk scan complete.";
                }, 25e3),
                setTimeout(() => {
                  this.text = "Removing all flags and sources of flags.";
                }, 27e3),
                setTimeout(() => {
                  this.text =
                    "All flags and sources of flags have been removed.";
                }, 36e3),
                setTimeout(() => {
                  this.text = "Redefining Windows....";
                }, 4e4),
                setTimeout(() => {
                  this.text = "Windows has been redined.";
                }, 45e3),
                setTimeout(() => {
                  this.text = "Performing reconsitution of network sockets...";
                }, 47e3),
                setTimeout(() => {
                  this.text = "Reconstitution has been complete.";
                }, 52e3),
                setTimeout(() => {
                  this.text =
                    "Your PC has been unflagged and you have successfully ghosted blizzard.";
                }, 56e3),
                setTimeout(() => {
                  this.text =
                    "You can RESTART your computer now to finish the cleaning process.";
                }, 6e4);
            },
          },
        });
      var Z = s(1639),
        q = s(9885),
        N = s(8326),
        P = s(3246),
        z = s(490),
        Q = s(335),
        C = s(8289),
        R = s(9379),
        j = s(9984),
        S = s.n(j);
      const M = (0, Z.Z)(I, [
          ["render", w],
          ["__scopeId", "data-v-005a40ee"],
        ]),
        A = M;
      S()(I, "components", {
        QPage: q.Z,
        QForm: N.Z,
        QList: P.Z,
        QItem: z.Z,
        QImg: Q.Z,
        QLinearProgress: C.Z,
        QBtn: R.Z,
      });
    },
    9319: (e, t, s) => {
      e.exports = s.p + "img/ghost-app.1844e93c.png";
    },
    8867: (e, t, s) => {
      e.exports = s.p + "img/ghost-text.2c9dd037.png";
    },
  },
]);
