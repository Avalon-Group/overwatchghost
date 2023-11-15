"use strict";
(globalThis["webpackChunkGhost"] = globalThis["webpackChunkGhost"] || []).push([
  [505],
  {
    7505: (n, t, e) => {
      e.r(t), e.d(t, { default: () => d });
      var a = e(9835);
      function o(n, t, e, o, u, r) {
        const s = (0, a.up)("router-view"),
          l = (0, a.up)("q-page-container"),
          i = (0, a.up)("q-layout");
        return (
          (0, a.wg)(),
          (0, a.j4)(
            i,
            { view: "lHh Lpr lFf" },
            {
              default: (0, a.w5)(() => [
                (0, a.Wm)(l, null, {
                  default: (0, a.w5)(() => [(0, a.Wm)(s)]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        );
      }
      var u = e(4147);
      const r = (0, a.aZ)({
        name: "BlankLayout",
        components: {},
        data() {
          return { version: u.i8 };
        },
        mounted() {},
      });
      var s = e(1639),
        l = e(7605),
        i = e(2133),
        p = e(9984),
        c = e.n(p);
      const h = (0, s.Z)(r, [["render", o]]),
        d = h;
      c()(r, "components", { QLayout: l.Z, QPageContainer: i.Z });
    },
    4147: (n) => {
      n.exports = { i8: "1.1.0" };
    },
  },
]);
