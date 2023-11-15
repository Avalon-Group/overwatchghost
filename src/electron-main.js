(() => {
  var e = {
      577: () => {
        String.prototype.format = function (...e) {
          let t = this.toString();
          if (e.length) {
            const n = typeof e[0];
            e =
              "string" === n || "number" === n
                ? Array.prototype.slice.call(e)
                : e[0];
            for (const o in e) t = t.replace("{" + o + "}", e[o]);
          }
          return t;
        };
      },
      468: (e, t, n) => {
        "use strict";
        const o = n(282),
          r = n(837),
          s = n(901),
          i = n(502),
          a = n(662),
          l = n(970),
          c = n(31),
          d = n(345),
          u = n(908),
          p = n(542),
          h = n(111),
          f = 1e7;
        function m(e, t, n) {
          let o;
          return (
            n &&
              n.env &&
              !1 !== n.extendEnv &&
              (n.env = Object.assign({}, process.env, n.env)),
            n && !0 === n.__winShell
              ? (delete n.__winShell,
                (o = { command: e, args: t, options: n, file: e, original: e }))
              : (o = s._parse(e, t, n)),
            (n = Object.assign(
              {
                maxBuffer: f,
                stripEof: !0,
                preferLocal: !0,
                localDir: o.options.cwd || process.cwd(),
                encoding: "utf8",
                reject: !0,
                cleanup: !0,
              },
              o.options
            )),
            (n.stdio = h(n)),
            n.preferLocal &&
              (n.env = a.env(Object.assign({}, n, { cwd: n.localDir }))),
            { cmd: o.command, args: o.args, opts: n, parsed: o }
          );
        }
        function g(e, t) {
          const n = t.input;
          null !== n &&
            void 0 !== n &&
            (l(n) ? n.pipe(e.stdin) : e.stdin.end(n));
        }
        function w(e, t) {
          return t && e.stripEof && (t = i(t)), t;
        }
        function b(e, t, n) {
          let o = "/bin/sh",
            r = ["-c", t];
          return (
            (n = Object.assign({}, n)),
            "win32" === process.platform &&
              ((n.__winShell = !0),
              (o = process.env.comspec || "cmd.exe"),
              (r = ["/s", "/c", `"${t}"`]),
              (n.windowsVerbatimArguments = !0)),
            n.shell && ((o = n.shell), delete n.shell),
            e(o, r, n)
          );
        }
        function S(e, t, n, o) {
          if (!e[t]) return null;
          let r;
          return (
            (r = n
              ? c(e[t], { encoding: n, maxBuffer: o })
              : c.buffer(e[t], { maxBuffer: o })),
            r.catch((e) => {
              throw ((e.stream = t), (e.message = `${t} ${e.message}`), e);
            })
          );
        }
        (e.exports = (e, t, n) => {
          let r = e;
          Array.isArray(t) && t.length > 0 && (r += " " + t.join(" "));
          const i = m(e, t, n),
            a = i.opts.encoding,
            l = i.opts.maxBuffer;
          let c, h;
          try {
            c = o.spawn(i.cmd, i.args, i.opts);
          } catch (C) {
            return Promise.reject(C);
          }
          i.opts.cleanup &&
            (h = u(() => {
              c.kill();
            }));
          let f = null,
            b = !1;
          const x = () => {
            f && (clearTimeout(f), (f = null));
          };
          i.opts.timeout > 0 &&
            (f = setTimeout(() => {
              (f = null), (b = !0), c.kill(i.opts.killSignal);
            }, i.opts.timeout));
          const y = new Promise((e) => {
            c.on("exit", (t, n) => {
              x(), e({ code: t, signal: n });
            }),
              c.on("error", (t) => {
                x(), e({ err: t });
              }),
              c.stdin &&
                c.stdin.on("error", (t) => {
                  x(), e({ err: t });
                });
          });
          function v() {
            c.stdout && c.stdout.destroy(), c.stderr && c.stderr.destroy();
          }
          const R = d(
            Promise.all([y, S(c, "stdout", a, l), S(c, "stderr", a, l)]).then(
              (e) => {
                const t = e[0],
                  n = e[1],
                  o = e[2];
                let s = t.err;
                const a = t.code,
                  l = t.signal;
                if ((h && h(), s || 0 !== a || null !== l)) {
                  if (!s) {
                    let e = "";
                    Array.isArray(i.opts.stdio)
                      ? ("inherit" !== i.opts.stdio[2] &&
                          (e += e.length > 0 ? o : `\n${o}`),
                        "inherit" !== i.opts.stdio[1] && (e += `\n${n}`))
                      : "inherit" !== i.opts.stdio && (e = `\n${o}${n}`),
                      (s = new Error(`Command failed: ${r}${e}`)),
                      (s.code = a < 0 ? p(a) : a);
                  }
                  if (
                    ((s.killed = s.killed || c.killed),
                    (s.stdout = n),
                    (s.stderr = o),
                    (s.failed = !0),
                    (s.signal = l || null),
                    (s.cmd = r),
                    (s.timedOut = b),
                    !i.opts.reject)
                  )
                    return s;
                  throw s;
                }
                return {
                  stdout: w(i.opts, n),
                  stderr: w(i.opts, o),
                  code: 0,
                  failed: !1,
                  killed: !1,
                  signal: null,
                  cmd: r,
                  timedOut: !1,
                };
              }
            ),
            v
          );
          return (
            s._enoent.hookChildProcess(c, i.parsed),
            g(c, i.opts),
            (c.then = R.then.bind(R)),
            (c.catch = R.catch.bind(R)),
            c
          );
        }),
          (e.exports.stdout = function () {
            return e.exports.apply(null, arguments).then((e) => e.stdout);
          }),
          (e.exports.stderr = function () {
            return e.exports.apply(null, arguments).then((e) => e.stderr);
          }),
          (e.exports.shell = (t, n) => b(e.exports, t, n)),
          (e.exports.sync = (e, t, n) => {
            const r = m(e, t, n);
            if (l(r.opts.input))
              throw new TypeError(
                "The `input` option cannot be a stream in sync mode"
              );
            const s = o.spawnSync(r.cmd, r.args, r.opts);
            if (s.error || 0 !== s.status)
              throw s.error || new Error("" === s.stderr ? s.stdout : s.stderr);
            return (
              (s.stdout = w(r.opts, s.stdout)),
              (s.stderr = w(r.opts, s.stderr)),
              s
            );
          }),
          (e.exports.shellSync = (t, n) => b(e.exports.sync, t, n)),
          (e.exports.spawn = r.deprecate(
            e.exports,
            "execa.spawn() is deprecated. Use execa() instead."
          ));
      },
      542: (e) => {
        "use strict";
        let t;
        try {
          if (((t = process.binding("uv")), "function" !== typeof t.errname))
            throw new TypeError("uv.errname is not a function");
        } catch (o) {
          console.error(
            "execa/lib/errname: unable to establish process.binding('uv')",
            o
          ),
            (t = null);
        }
        function n(e, t) {
          if (e) return e.errname(t);
          if (!(t < 0)) throw new Error("err >= 0");
          return `Unknown system error ${t}`;
        }
        (e.exports = (e) => n(t, e)), (e.exports.__test__ = n);
      },
      111: (e) => {
        "use strict";
        const t = ["stdin", "stdout", "stderr"],
          n = (e) => t.some((t) => Boolean(e[t]));
        e.exports = (e) => {
          if (!e) return null;
          if (e.stdio && n(e))
            throw new Error(
              `It's not possible to provide \`stdio\` in combination with one of ${t
                .map((e) => `\`${e}\``)
                .join(", ")}`
            );
          if ("string" === typeof e.stdio) return e.stdio;
          const o = e.stdio || [];
          if (!Array.isArray(o))
            throw new TypeError(
              `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof o}\``
            );
          const r = [],
            s = Math.max(o.length, t.length);
          for (let n = 0; n < s; n++) {
            let s = null;
            void 0 !== o[n] ? (s = o[n]) : void 0 !== e[t[n]] && (s = e[t[n]]),
              (r[n] = s);
          }
          return r;
        };
      },
      105: (e, t, n) => {
        "use strict";
        const o = n(781).PassThrough;
        e.exports = (e) => {
          e = Object.assign({}, e);
          const t = e.array;
          let n = e.encoding;
          const r = "buffer" === n;
          let s = !1;
          t ? (s = !(n || r)) : (n = n || "utf8"), r && (n = null);
          let i = 0;
          const a = [],
            l = new o({ objectMode: s });
          return (
            n && l.setEncoding(n),
            l.on("data", (e) => {
              a.push(e), s ? (i = a.length) : (i += e.length);
            }),
            (l.getBufferedValue = () =>
              t ? a : r ? Buffer.concat(a, i) : a.join("")),
            (l.getBufferedLength = () => i),
            l
          );
        };
      },
      31: (e, t, n) => {
        "use strict";
        const o = n(105);
        function r(e, t) {
          if (!e) return Promise.reject(new Error("Expected a stream"));
          t = Object.assign({ maxBuffer: 1 / 0 }, t);
          const n = t.maxBuffer;
          let r, s;
          const i = new Promise((i, a) => {
            const l = (e) => {
              e && (e.bufferedData = r.getBufferedValue()), a(e);
            };
            (r = o(t)),
              e.once("error", l),
              e.pipe(r),
              r.on("data", () => {
                r.getBufferedLength() > n && a(new Error("maxBuffer exceeded"));
              }),
              r.once("error", l),
              r.on("end", i),
              (s = () => {
                e.unpipe && e.unpipe(r);
              });
          });
          return i.then(s, s), i.then(() => r.getBufferedValue());
        }
        (e.exports = r),
          (e.exports.buffer = (e, t) =>
            r(e, Object.assign({}, t, { encoding: "buffer" }))),
          (e.exports.array = (e, t) =>
            r(e, Object.assign({}, t, { array: !0 })));
      },
      970: (e) => {
        "use strict";
        var t = (e.exports = function (e) {
          return (
            null !== e && "object" === typeof e && "function" === typeof e.pipe
          );
        });
        (t.writable = function (e) {
          return (
            t(e) &&
            !1 !== e.writable &&
            "function" === typeof e._write &&
            "object" === typeof e._writableState
          );
        }),
          (t.readable = function (e) {
            return (
              t(e) &&
              !1 !== e.readable &&
              "function" === typeof e._read &&
              "object" === typeof e._readableState
            );
          }),
          (t.duplex = function (e) {
            return t.writable(e) && t.readable(e);
          }),
          (t.transform = function (e) {
            return (
              t.duplex(e) &&
              "function" === typeof e._transform &&
              "object" === typeof e._transformState
            );
          });
      },
      662: (e, t, n) => {
        "use strict";
        const o = n(17),
          r = n(24);
        (e.exports = (e) => {
          let t;
          e = Object.assign({ cwd: process.cwd(), path: process.env[r()] }, e);
          let n = o.resolve(e.cwd);
          const s = [];
          while (t !== n)
            s.push(o.join(n, "node_modules/.bin")),
              (t = n),
              (n = o.resolve(n, ".."));
          return (
            s.push(o.dirname(process.execPath)),
            s.concat(e.path).join(o.delimiter)
          );
        }),
          (e.exports.env = (t) => {
            t = Object.assign({ env: process.env }, t);
            const n = Object.assign({}, t.env),
              o = r({ env: n });
            return (t.path = n[o]), (n[o] = e.exports(t)), n;
          });
      },
      345: (e) => {
        "use strict";
        e.exports = (e, t) => (
          (t = t || (() => {})),
          e.then(
            (e) =>
              new Promise((e) => {
                e(t());
              }).then(() => e),
            (e) =>
              new Promise((e) => {
                e(t());
              }).then(() => {
                throw e;
              })
          )
        );
      },
      24: (e) => {
        "use strict";
        e.exports = (e) => {
          e = e || {};
          const t = e.env || process.env,
            n = e.platform || process.platform;
          return "win32" !== n
            ? "PATH"
            : Object.keys(t).find((e) => "PATH" === e.toUpperCase()) || "Path";
        };
      },
      908: (e, t, n) => {
        var o = global.process;
        const r = function (e) {
          return (
            e &&
            "object" === typeof e &&
            "function" === typeof e.removeListener &&
            "function" === typeof e.emit &&
            "function" === typeof e.reallyExit &&
            "function" === typeof e.listeners &&
            "function" === typeof e.kill &&
            "number" === typeof e.pid &&
            "function" === typeof e.on
          );
        };
        if (r(o)) {
          var s,
            i = n(491),
            a = n(397),
            l = /^win/i.test(o.platform),
            c = n(361);
          "function" !== typeof c && (c = c.EventEmitter),
            o.__signal_exit_emitter__
              ? (s = o.__signal_exit_emitter__)
              : ((s = o.__signal_exit_emitter__ = new c()),
                (s.count = 0),
                (s.emitted = {})),
            s.infinite || (s.setMaxListeners(1 / 0), (s.infinite = !0)),
            (e.exports = function (e, t) {
              if (!r(global.process)) return function () {};
              i.equal(
                typeof e,
                "function",
                "a callback must be provided for exit handler"
              ),
                !1 === h && f();
              var n = "exit";
              t && t.alwaysLast && (n = "afterexit");
              var o = function () {
                s.removeListener(n, e),
                  0 === s.listeners("exit").length &&
                    0 === s.listeners("afterexit").length &&
                    d();
              };
              return s.on(n, e), o;
            });
          var d = function () {
            h &&
              r(global.process) &&
              ((h = !1),
              a.forEach(function (e) {
                try {
                  o.removeListener(e, p[e]);
                } catch (t) {}
              }),
              (o.emit = w),
              (o.reallyExit = m),
              (s.count -= 1));
          };
          e.exports.unload = d;
          var u = function (e, t, n) {
              s.emitted[e] || ((s.emitted[e] = !0), s.emit(e, t, n));
            },
            p = {};
          a.forEach(function (e) {
            p[e] = function () {
              if (r(global.process)) {
                var t = o.listeners(e);
                t.length === s.count &&
                  (d(),
                  u("exit", null, e),
                  u("afterexit", null, e),
                  l && "SIGHUP" === e && (e = "SIGINT"),
                  o.kill(o.pid, e));
              }
            };
          }),
            (e.exports.signals = function () {
              return a;
            });
          var h = !1,
            f = function () {
              !h &&
                r(global.process) &&
                ((h = !0),
                (s.count += 1),
                (a = a.filter(function (e) {
                  try {
                    return o.on(e, p[e]), !0;
                  } catch (t) {
                    return !1;
                  }
                })),
                (o.emit = b),
                (o.reallyExit = g));
            };
          e.exports.load = f;
          var m = o.reallyExit,
            g = function (e) {
              r(global.process) &&
                ((o.exitCode = e || 0),
                u("exit", o.exitCode, null),
                u("afterexit", o.exitCode, null),
                m.call(o, o.exitCode));
            },
            w = o.emit,
            b = function (e, t) {
              if ("exit" === e && r(global.process)) {
                void 0 !== t && (o.exitCode = t);
                var n = w.apply(this, arguments);
                return (
                  u("exit", o.exitCode, null),
                  u("afterexit", o.exitCode, null),
                  n
                );
              }
              return w.apply(this, arguments);
            };
        } else
          e.exports = function () {
            return function () {};
          };
      },
      397: (e) => {
        (e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"]),
          "win32" !== process.platform &&
            e.exports.push(
              "SIGVTALRM",
              "SIGXCPU",
              "SIGXFSZ",
              "SIGUSR2",
              "SIGTRAP",
              "SIGSYS",
              "SIGQUIT",
              "SIGIOT"
            ),
          "linux" === process.platform &&
            e.exports.push(
              "SIGIO",
              "SIGPOLL",
              "SIGPWR",
              "SIGSTKFLT",
              "SIGUNUSED"
            );
      },
      502: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = "string" === typeof e ? "\n" : "\n".charCodeAt(),
            n = "string" === typeof e ? "\r" : "\r".charCodeAt();
          return (
            e[e.length - 1] === t && (e = e.slice(0, e.length - 1)),
            e[e.length - 1] === n && (e = e.slice(0, e.length - 1)),
            e
          );
        };
      },
      282: (e) => {
        "use strict";
        e.exports = require("child_process");
      },
      901: (e) => {
        "use strict";
        e.exports = require("cross-spawn");
      },
      491: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      361: (e) => {
        "use strict";
        e.exports = require("events");
      },
      147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      718: (e) => {
        "use strict";
        e.exports = require("node:child_process");
      },
      17: (e) => {
        "use strict";
        e.exports = require("path");
      },
      781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      837: (e) => {
        "use strict";
        e.exports = require("util");
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var s = (t[o] = { exports: {} });
    return e[o](s, s.exports, n), s.exports;
  }
  (() => {
    n.n = (e) => {
      var t = e && e.__esModule ? () => e["default"] : () => e;
      return n.d(t, { a: t }), t;
    };
  })(),
    (() => {
      n.d = (e, t) => {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (() => {
      n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      n.r = (e) => {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })();
  var o = {};
  (() => {
    "use strict";
    n.r(o);
    const e = require("electron"),
      t = require("electron-updater");
    var r = n(17),
      s = n.n(r);
    const i = require("os");
    var a = n.n(i);
    const l = require("uiohook-napi"),
      c = require("axios");
    var d = n.n(c);
    const u = "https://live-hf-toolkit.pantheonsite.io",
      p = "/user/register",
      h = "/user/login",
      f = "/jsonapi/user/user",
      m = "/session/token",
      g = "/ghost_rest_api/access_key_resource/",
      w = "/node/{0}",
      b = "/rest/type/node/access_keys",
      S = "/rest/type/user/user",
      x = "access_keys",
      y = "[REDEEMED]",
      v = {
        uid: -1,
        uuid: "test-uid",
        email: "test@example.com",
        name: "tester name",
        active: !0,
      },
      R =
        (v.email,
        "Please provide app, mainWindow && updaterWindow for instantiation"),
      C = "New version {0} is available. Download it?",
      _ = "Your version {0} is up to date",
      A = "New version {0} is downloaded. Install it?",
      E = "latest",
      U = !1;
    n(577);
    const D = (e, t, n) => ({
        _links: { type: { href: u + S } },
        name: [{ value: n }],
        mail: [{ value: e }],
        pass: [{ value: t }],
      }),
      W = (e, t) => {
        const n = {
          _links: { type: { href: u + b } },
          type: [{ target_id: x }],
        };
        return (
          e && (n.field_state = [{ value: e }]),
          t && (n.title = [{ value: t }]),
          n
        );
      };
    class T {
      constructor(e) {
        (this.baseUrl = ""),
          (this.token = ""),
          (this.csrf = ""),
          (this.userInfo = {}),
          (this.baseUrl = e);
      }
      static getInstance() {
        return T.instance || (T.instance = new T(u)), T.instance;
      }
      setToken(e) {
        return (this.token = e), (T.instance = this), this;
      }
      setCSRF(e) {
        return (this.csrf = e), (T.instance = this), this;
      }
      async postRegister(e, t, n, o, r) {
        const s = this.config(),
          i = await d().create(s).get(`${this.baseUrl}${m}`);
        return (
          (this.csrf = i.data),
          d()
            .create(s)
            .post(
              `${this.baseUrl}${p}${this.params()}`,
              JSON.stringify(D(e, t, n))
            )
            .then(function (e) {
              o && o(e);
            })
            .catch(function (e) {
              r ? r(e) : console.error(e);
            })
        );
      }
      postLogin(e, t, n, o) {
        d()
          .post(
            `${this.baseUrl}${h}${this.params()}`,
            JSON.stringify({ name: e, pass: t })
          )
          .then(function (e) {
            n && n(e);
          })
          .catch(function (e) {
            o ? o(e) : console.error(e);
          });
      }
      postRedeem(e, t, n) {
        const o = this.config();
        (o.auth = { username: "admin", password: "admin" }),
          d()
            .create(o)
            .get(`${this.baseUrl}${g}${e}`)
            .then(function (e) {
              t && t(e);
            })
            .catch(function (e) {
              n ? n(e) : console.error(e);
            });
      }
      deleteRedeemed(e, t, n) {
        const o = this.config();
        (o.auth = { username: "admin", password: "admin" }),
          d()
            .create(o)
            .delete(
              `${this.baseUrl}${w.format(e)}${this.params("_format=hal_json")}`
            )
            .then(function (e) {
              t && t(e);
            })
            .catch(function (e) {
              n ? n(e) : console.error(e);
            });
      }
      patchRedeemed(e, t, n) {
        const o = this.config();
        (o.auth = { username: "admin", password: "admin" }),
          d()
            .create(o)
            .patch(
              `${this.baseUrl}${w.format(e)}${this.params("_format=hal_json")}`,
              JSON.stringify(W(y))
            )
            .then(function (e) {
              t && t(e);
            })
            .catch(function (e) {
              n ? n(e) : console.error(e);
            });
      }
      async getUsers(e, t) {
        return d()
          .create(this.config())
          .get(`${this.baseUrl}${f}`)
          .then(function (t) {
            e && e(t);
          })
          .catch(function (e) {
            t ? t(e) : console.error(e);
          });
      }
      patchBind(e, t, n) {
        const o = this.config();
        return (
          (o.auth = { username: "admin", password: "admin" }),
          (o.headers["Accept"] = "application/vnd.api+json"),
          (o.headers["Content-type"] = "application/vnd.api+json"),
          d()
            .create(o)
            .patch(`${this.baseUrl}${f}/${e.uuid}`, {
              data: {
                type: "user--user",
                id: e.uuid,
                links: { self: { ref: `${this.baseUrl}${f}/${e.uuid}` } },
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
              n ? n(e) : console.error(e);
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
    const I = T.getInstance();
    class k {
      constructor() {
        (this.timeStart = new Date()), l.uIOhook;
      }
      setup(e, t) {
        e.handle("binder:setup", (e, t) => {
          this.user = t.user;
        });
      }
      async sync(e, t) {
        e &&
          (await I.getUsers((t) => {
            t.data.data.find((t) => t.attributes.display_name == e.name);
          }));
      }
      static getInstance() {
        return k.instance || (k.instance = new k()), k.instance;
      }
    }
    const M = k.getInstance();
    var P = n(147),
      O = n.n(P);
    const $ = require("uuid");
    var G = n(718);
    const N = require("node:process");
    var j = n.n(N);
    const L = require("node:os");
    var B = n.n(L),
      H = n(468),
      F = n.n(H);
    const q = () => {
        const { env: e } = j();
        return (
          e.SUDO_USER ||
          e.C9_USER ||
          e.LOGNAME ||
          e.USER ||
          e.LNAME ||
          e.USERNAME
        );
      },
      z = () => {
        try {
          return B().userInfo().username;
        } catch {}
      },
      V = (e) => e.replace(/^.*\\/, ""),
      K = (e) => `no-username-${e}`,
      Y = () => {
        const e = q();
        if (e) return e;
        const t = z();
        if (t) return t;
        try {
          if ("win32" === j().platform) return V(F().sync("whoami").stdout);
          const { stdout: e } = F().sync("id", ["-u"]);
          try {
            return F().sync("id", ["-un", e]).stdout;
          } catch {}
          return K(e);
        } catch {}
      };
    class J {
      static getGuid() {
        return (0, $.v4)();
      }
      static GuidToString(e) {
        return e.toString();
      }
      static getStringGuid() {
        return this.GuidToString(this.getGuid());
      }
      static getRndInteger(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }
      static random01() {
        return J.getRndInteger(0, J.RAND_MAX);
      }
      static randomAsciiChar() {
        const e =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return e[J.getRndInteger(0, e.length)];
      }
      static randomAsciiString(e) {
        e = e < 1 ? 1 : e;
        let t = "";
        for (let n = 0; n < e; n++) t += J.randomAsciiChar();
        return t;
      }
      static addHex(e, t) {
        let n,
          o,
          r = 4,
          s = 0,
          i = "";
        for (n = r - 1; n >= 0; n--)
          (o = parseInt(e[n], 16) + parseInt(t[n], 16) + s),
            (s = o >> 4),
            (i = (15 & o).toString(16) + i);
        return i;
      }
      static CurUser() {
        return Y();
      }
      static GetDrives() {
        const e = "CDEFGHIJKLMNOPQRSTUVWXYZ";
        let t = Array();
        for (let n = 0; n < e.length; n++) {
          let o = e[n] + ":\\";
          if (!P.existsSync(o)) break;
          t.push(e[n]);
        }
        return t;
      }
      static EnumDrives(e) {
        let t = J.GetDrives();
        for (let n = 0; n < t.length; n++) e(t[n]);
      }
      static RemDir(e) {
        e &&
          (console.log(e),
          P.existsSync(e) &&
            (e.endsWith("\\") && (e = e.substring(0, e.length - 1)),
            console.log(e)));
      }
      static RemFile(e) {
        e && P.existsSync(e) && P.unlinkSync(e);
      }
      static RemReg(e) {
        J.execCommand(`reg delete "${e}" /f`)
          .then((t) => {
            console.log(`Registery deleted successfully with key: ${e}`);
          })
          .catch((e) => {
            e.message.includes("unable to find the specified registry key") ||
              console.log(e);
          });
      }
      static AddReg(e, t, n, o) {
        J.execCommand(`reg add "${e}" -f /v "${t}" /t ${n} /d "${o}"`)
          .then((t) => {
            console.log(`Registery added successfully with key: ${e}`);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      static SpoofMacAddress() {
        J.execCommand("spoof list")
          .then((e) => {
            let t = e.toString(),
              n = t.split(/\r?\n/),
              o = n.map((e) => {
                let t = e.indexOf("device");
                return (
                  !(
                    !t ||
                    ((e = e.slice(t + 7, e.length)),
                    (t = e.lastIndexOf("with")),
                    !t)
                  ) && e.slice(0, t).trim()
                );
              });
            (o = o.filter((e) => "" != e)),
              o.forEach((e) => {
                J.execCommand(`spoof randomize "${e}"`)
                  .then((t) => {
                    console.log(
                      "Successfully updated the macaddress for the device: " + e
                    );
                  })
                  .catch((t) => {
                    console.log(
                      "Can not update mac address of the specified device: " + e
                    ),
                      console.log(t);
                  });
              });
          })
          .catch((e) => {
            console.log("Can not get list of network devices"), console.log(e);
          });
      }
      static GenerateVSN() {
        let e = new Date(),
          t =
            e.getMonth().toString(16).padStart(2, "0") +
            e.getDate().toString(16).padStart(2, "0"),
          n =
            e.getSeconds().toString(16).padStart(2, "0") +
            Math.trunc(e.getMilliseconds() / 10)
              .toString(16)
              .padStart(2, "0"),
          o =
            e.getHours().toString(16).padStart(2, "0") +
            e.getMinutes().toString(16).padStart(2, "0"),
          r = e.getFullYear().toString(16).padStart(4, "0"),
          s = J.addHex(t, n) + "-" + J.addHex(o, r);
        return s;
      }
      static changeHwid() {
        const { spawn: e } = n(718),
          t = e("cmd.exe", [
            "/c",
            ".\\resources\\app\\command_tools\\change-hwid.cmd",
          ]);
        t.stdout.on("data", (e) => {
          console.log("HWID success"), console.log(e.toString());
        }),
          t.stderr.on("data", (e) => {
            console.log("HWID error"), console.error(e.toString());
          }),
          t.on("exit", (e) => {
            console.log(`Child exited with code ${e}`);
          });
      }
      static UpdateDriveSerial(e, t) {
        J.execCommand(
          `.\\resources\\app\\command_tools\\Volumeid.exe /accepteula -nobanner ${e}: ${t}`
        )
          .then((n) => {
            console.log(
              `Successfully updated "${e}" drive serial number to "${t}"`
            );
          })
          .catch((t) => {
            console.log(`Cannot update "${e}" drive serial number`),
              console.log(t);
          });
      }
    }
    (J.RAND_MAX = 32767),
      (J.execCommand = function (e) {
        return new Promise((t, n) => {
          (0, G.exec)(e, (e, o, r) => {
            e ? n(e) : t(o);
          });
        });
      });
    class X {
      static killByName(e) {
        if (!e) return !1;
        0 == e.endsWith(".exe") && (e += ".exe"),
          J.execCommand(`taskkill -f /im ${e} /t`)
            .then((e) => !0)
            .catch((e) => !e || 128 == e.code || (console.log(e), !1));
      }
    }
    class Z {
      DoPatch(e) {
        return !0;
      }
      GetProcesses() {
        return [];
      }
      PatchAll(e) {
        const t = this.GetProcesses();
        return (
          t.forEach((e) => {
            X.killByName(e) && console.log("Killed " + e + "."), console.log(e);
          }),
          this.DoPatch(e)
        );
      }
    }
    class Q extends Z {
      GetID() {
        return "Browser Cookies";
      }
      GetProcesses() {
        return ["msedge", "firefox", "chrome", "brave", "opera"];
      }
      DoPatch(e) {
        const t = J.CurUser();
        J.RemFile(
          e +
            ":\\Users\\" +
            t +
            "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Cookies"
        ),
          J.RemFile(
            e +
              ":\\Users\\" +
              t +
              "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies"
          ),
          J.RemFile(
            e +
              ":\\Users\\" +
              t +
              "\\AppData\\Local\\Opera Software\\Opera Stable\\Cookies"
          );
        {
          const n =
            e +
            ":\\Users\\" +
            t +
            "\\AppData\\Local\\Mozilla\\Firefox\\Profiles\\";
          if (O().existsSync(n)) {
            const e = O().readdirSync(n);
            e.forEach((e) => {
              let t = n + e;
              O().statSync(t).isDirectory &&
                (t.endsWith("\\") || (t += "\\"),
                (t += "cookies.sqlite"),
                J.RemFile(t));
            });
          }
        }
        return !0;
      }
    }
    class ee {
      static Patch(e) {
        "c" == e &&
          (J.execCommand("netsh winsock reset"),
          J.execCommand("netsh winsock reset catalog"),
          J.execCommand("netsh int ip reset"),
          J.execCommand("netsh advfirewall reset"),
          J.execCommand("netsh int reset all"),
          J.execCommand("netsh int ipv4 reset"),
          J.execCommand("netsh int ipv6 reset"),
          J.execCommand("ipconfig / release"),
          J.execCommand("ipconfig / renew"),
          J.execCommand("ipconfig / flushdns"));
      }
    }
    class te extends Z {
      GetID() {
        return "Overwatch";
      }
      GetProcesses() {
        return ["battle.net", "agent", "overwatch"];
      }
      DoPatch(e) {
        const t = J.CurUser();
        J.RemDir(e + ":\\Users\\" + t + "\\AppData\\Local\\Battle.net\\"),
          J.RemDir(e + ":\\Users\\" + t + "\\AppData\\Local\\Blizzard\\"),
          J.RemDir(
            e + ":\\Users\\" + t + "\\AppData\\Local\\Blizzard Entertainment\\"
          ),
          J.RemDir(e + ":\\Users\\" + t + "\\AppData\\Roaming\\Battle.net\\"),
          J.RemDir(e + ":\\Users\\" + t + "\\Documents\\Overwatch\\Logs\\"),
          J.RemDir(e + ":\\ProgramData\\Battle.net\\Setup\\"),
          J.RemDir(e + ":\\ProgramData\\Battle.net\\Agent\\data\\"),
          J.RemDir(e + ":\\ProgramData\\Battle.net\\Agent\\Logs\\"),
          J.RemDir(e + ":\\ProgramData\\Blizzard Entertainment\\"),
          J.RemDir(e + ":\\Program Files (x86)\\Overwatch\\_retail_\\cache\\"),
          J.RemDir(
            e + ":\\Program Files (x86)\\Overwatch\\_retail_\\GPUCache\\"
          );
        {
          const t = e + ":\\ProgramData\\Battle.net\\Agent\\";
          if (O().existsSync(t)) {
            let e = "",
              n = 0;
            const o = O().readdirSync(t);
            o.forEach((o) => {
              const r = t + o;
              if (O().statSync(r).isDirectory() && o.startsWith("Agent")) {
                const t = parseInt(o.split(".")[1]);
                t > n && ((n = t), (e = r));
              }
            }),
              o.forEach((n) => {
                const o = t + n;
                O().statSync(o).isDirectory() &&
                  n.startsWith("Agent") &&
                  o != e &&
                  J.RemDir(o);
              });
          }
        }
        return (
          J.RemReg(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment"
          ),
          J.RemReg("HKEY_CURRENT_USER\\SOFTWARE\\Blizzard Entertainment"),
          J.RemReg("HKEY_CURRENT_USER\\SOFTWARE\\Activision"),
          J.RemReg("HKEY_CLASSES_ROOT\\Applications\\Overwatch.exe"),
          J.RemReg(
            "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\CapabilityAccessManager\\ConsentStore\\microphone\\NonPackaged\\C:#Program Files (x86)#Overwatch#_retail_#Overwatch.exe"
          ),
          J.RemReg(
            "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\RADAR\\HeapLeakDetection\\DiagnosedApplications\\Overwatch.exe"
          ),
          J.RemReg(
            "HKEY_CURRENT_USER\\VirtualStore\\MACHINE\\SOFTWARE\\WOW6432Node\\Activision"
          ),
          J.RemReg(
            "HKEY_CURRENT_USER\\SOFTWARE\\Classes\\VirtualStore\\MACHINE\\SOFTWARE\\WOW6432Node\\Activision"
          ),
          J.RemDir(e + ":\\ProgramData\\Orion\\"),
          J.RemReg("HKLM\\SOFTWARE\\00330-80000-00000-AA302"),
          J.RemDir(e + ":\\Users\\" + t + "\\AppData\\Local\\Temp\\"),
          !0
        );
      }
    }
    class ne {
      static DoRename(e) {
        e || (e = J.randomAsciiString(10)),
          J.execCommand(`powershell.exe Rename-Computer -NewName ${e}`)
            .then((e) => {
              console.log(e);
            })
            .catch((e) => {
              console.log("error occured while renaming pc"), console.log(e);
            }),
          J.AddReg(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography",
            "MachineGuid",
            "REG_SZ",
            J.getStringGuid()
          ),
          J.AddReg(
            "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\IDConfigDBHardware Profiles\\0001",
            "HwProfileGuid",
            "REG_SZ",
            J.getStringGuid()
          ),
          J.SpoofMacAddress();
        const t = J.GetDrives();
        t.forEach((e) => J.UpdateDriveSerial(e, J.GenerateVSN()));
      }
    }
    class oe {
      static run() {
        const e = [new te(), new Q()];
        return (
          console.log("Killing Processes..."),
          e.forEach((e) => {
            const t = e.GetProcesses();
            t.forEach((e) => {
              X.killByName(e) && console.log("Killed '" + e + "'.");
            });
          }),
          console.log("Done killing."),
          console.log("Patching..."),
          e.forEach((e) => {
            J.EnumDrives((t) => {
              console.log(
                "Running Patch: '" + e.GetID() + "' for Drive '" + t + "'"
              ),
                e.DoPatch(t),
                console.log("Finished Patch: " + e.GetID());
            });
          }),
          console.log("Done patching."),
          console.log("Renaming Windows..."),
          ne.DoRename(J.randomAsciiString(10)),
          console.log("Windows has been renamed."),
          console.log("Reseting Network Sockets"),
          ee.Patch("c"),
          console.log("Network Sockets have been reset."),
          console.log("Finished."),
          console.log(
            "You can RESTART your Computer now to finish the cleaning."
          ),
          0
        );
      }
    }
    class re {
      constructor(n, o, r) {
        (this.app = n),
          (this.mainWindow = o),
          (this.updaterWindow = r),
          (t.autoUpdater.autoDownload = !1),
          (t.autoUpdater.autoInstallOnAppQuit = !1),
          E && (t.autoUpdater.channel = E);
        const s = e.Menu.buildFromTemplate(this.appMenuTemplate(""));
        e.Menu.setApplicationMenu(s),
          this.initAutoUpdater(),
          this.initWinHandlers();
      }
      static getInstance(e, t, n) {
        if (!re.instance) {
          if (!e || !t || !n) throw new Error(R);
          re.instance = new re(e, t, n);
        }
        return re.instance;
      }
      updateAvailable(t) {
        this.sendStatusToWindow("updateAvailable(info): " + JSON.stringify(t)),
          this.sendStatusToWindow("app.getVersion: " + this.app.getVersion()),
          (this.updateInfo = Object.assign(
            { currentVersion: this.app.getVersion() },
            t
          )),
          this.updaterWindow &&
            this.updaterWindow.webContents.send("updater:status", "available"),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "available"),
          this.mainWindow && this.mainWindow.hide(),
          this.updaterWindow && this.updaterWindow.show(),
          this.updaterWindow &&
            this.updaterWindow.webContents.send(
              "updater:info",
              this.updateInfo
            ),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:info", this.updateInfo),
          this.sendStatusToWindow(
            "Update available: " + JSON.stringify(this.updateInfo)
          );
        const n = e.Menu.buildFromTemplate(
          this.appMenuTemplate(this.updateInfo.version)
        );
        e.Menu.setApplicationMenu(n),
          this.sendStatusToWindow(
            "Update available 2: " + n.getMenuItemById("UpdateMenuLabel")?.label
          );
      }
      sendStatusToWindow(e) {
        U &&
          (console.info(e),
          this.mainWindow && this.mainWindow.webContents.send("console:log", e),
          this.updaterWindow &&
            this.updaterWindow.webContents.send("console:log", e));
      }
      appMenuTemplate(e, t) {
        const n = [
          {
            label: "File",
            submenu: [
              { role: "about" },
              { type: "separator" },
              {
                label: "Updates",
                submenu: [
                  {
                    id: "UpdateMenuLabel",
                    label: this.UpdateMenuLabel(e, t),
                    click: this.UpdateMenuClick(e, t),
                  },
                ],
              },
              { type: "separator" },
              { role: "quit" },
            ],
          },
          {
            label: "Edit",
            submenu: [
              { role: "undo" },
              { role: "redo" },
              { type: "separator" },
              { role: "cut" },
              { role: "copy" },
              { role: "paste" },
              { role: "delete" },
              { type: "separator" },
              { role: "selectAll" },
            ],
          },
        ];
        return (
          U &&
            n.push({
              label: "Debug",
              submenu: [
                { role: "reload" },
                { role: "forceReload" },
                { role: "toggleDevTools" },
              ],
            }),
          n
        );
      }
      UpdateMenuLabel(e, t) {
        return t
          ? A.format(e)
          : (e && this.updaterWindow.show(),
            e ? C.format(e) : _.format(this.app.getVersion()));
      }
      UpdateMenuClick(e, n) {
        return e
          ? (this.mainWindow.hide(),
            this.updaterWindow.show(),
            n
              ? () => {
                  this.sendStatusToWindow("Install click triggered!"),
                    t.autoUpdater.quitAndInstall();
                }
              : () => {
                  this.sendStatusToWindow("Update download triggered!"),
                    t.autoUpdater.downloadUpdate();
                })
          : () => {
              this.sendStatusToWindow("Updater click triggered!");
            };
      }
      handlerChecking() {
        this.sendStatusToWindow("Checking for update..."),
          this.updaterWindow &&
            this.updaterWindow.webContents.send("updater:status", "checking"),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "checking");
      }
      handlerNotAvailable(e) {
        this.sendStatusToWindow("Update not available."),
          this.updaterWindow &&
            this.updaterWindow.webContents.send(
              "updater:status",
              "not-available"
            ),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "not-available");
      }
      handlerError(e) {
        this.sendStatusToWindow("Error in auto-updater. " + e),
          this.updaterWindow &&
            this.updaterWindow.webContents.send("updater:status", "error", e),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "error", e);
      }
      handlerProgress(e) {
        let t = "Download speed: " + e.bytesPerSecond;
        (t = t + " - Downloaded " + e.percent + "%"),
          (t = t + " (" + e.transferred + "/" + e.total + ")"),
          this.sendStatusToWindow(t),
          this.updaterWindow &&
            this.updaterWindow.webContents.send(
              "updater:status",
              "progress",
              e
            ),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "progress", e);
      }
      handlerDownloaded(t) {
        this.sendStatusToWindow("Update downloaded");
        const n = e.Menu.buildFromTemplate(this.appMenuTemplate(t.version, !0));
        e.Menu.setApplicationMenu(n),
          this.updaterWindow &&
            this.updaterWindow.webContents.send(
              "updater:status",
              "downloaded",
              t
            ),
          this.mainWindow &&
            this.mainWindow.webContents.send("updater:status", "downloaded", t);
      }
      initAutoUpdater() {
        (this.handlerChecking = this.handlerChecking.bind(this)),
          (this.handlerNotAvailable = this.handlerNotAvailable.bind(this)),
          (this.updateAvailable = this.updateAvailable.bind(this)),
          (this.handlerNotAvailable = this.handlerNotAvailable.bind(this)),
          (this.handlerError = this.handlerError.bind(this)),
          (this.handlerProgress = this.handlerProgress.bind(this)),
          (this.handlerDownloaded = this.handlerDownloaded.bind(this)),
          t.autoUpdater.on("checking-for-update", this.handlerChecking),
          t.autoUpdater.on("update-available", this.updateAvailable),
          t.autoUpdater.on("update-not-available", this.handlerNotAvailable),
          t.autoUpdater.on("error", this.handlerError),
          t.autoUpdater.on("download-progress", this.handlerProgress),
          t.autoUpdater.on("update-downloaded", this.handlerDownloaded),
          this.sendStatusToWindow("end of init"),
          U
            ? t.autoUpdater.checkForUpdates()
            : t.autoUpdater.checkForUpdatesAndNotify();
      }
      initWinHandlers() {
        this.updaterWindow &&
          e.ipcMain.handle("updater:info", () => {
            this.updaterWindow.webContents.send(
              "updater:info",
              this.updateInfo
            );
          });
      }
    }
    String.prototype.insert = function (e, t) {
      return e > 0 ? this.substring(0, e) + t + this.substr(e) : t + this;
    };
    const se = process.platform || a().platform();
    try {
      "win32" === se &&
        !0 === e.nativeTheme.shouldUseDarkColors &&
        n(147).unlinkSync(
          s().join(e.app.getPath("userData"), "DevTools Extensions")
        );
    } catch (de) {}
    let ie, ae;
    function le() {
      (ie = new e.BrowserWindow({
        icon: s().resolve(__dirname, "icons/icon.png"),
        width: 1e3,
        height: 600,
        minWidth: 800,
        maxWidth: 1e3,
        minHeight: 600,
        resizable: !1,
        useContentSize: !0,
        webPreferences: {
          contextIsolation: !0,
          preload: s().resolve(__dirname, "electron-preload.js"),
        },
      })),
        ie.loadURL("file://" + __dirname + "/index.html" || 0),
        U
          ? ie.webContents.openDevTools()
          : ie.webContents.on("devtools-opened", () => {
              ie && ie.webContents.closeDevTools();
            });
      try {
        M.setup(e.ipcMain, ie);
      } catch (t) {
        console.error(t);
      }
      ie.on("closed", () => {
        ae && ae.destroy(),
          ie && ie.destroy(),
          e.app.quit(),
          (ie = null),
          (ae = null);
      });
    }
    e.app.whenReady().then(() => {
      le(),
        (ae = ce()),
        setTimeout(() => {
          ie && ae && re.getInstance(e.app, ie, ae);
        }, 1e3);
    }),
      e.ipcMain.handle("help:SpoofMacAddress", () => {
        J.SpoofMacAddress();
      }),
      e.ipcMain.handle("executer:run", () => {
        oe.run();
      }),
      e.app.on("window-all-closed", () => {
        ae && ae.destroy(), ie && ie.destroy(), e.app.quit();
      }),
      e.app.on("activate", () => {
        null === ie && le();
      });
    const ce = () => (
      (ae = new e.BrowserWindow({
        title: "Ghost Update",
        show: !1,
        width: 450,
        minWidth: 450,
        maxWidth: 450,
        height: 300,
        minHeight: 300,
        useContentSize: !0,
        autoHideMenuBar: !0,
        maximizable: !1,
        minimizable: !1,
        webPreferences: {
          contextIsolation: !0,
          nodeIntegration: !0,
          preload: s().resolve(__dirname, "electron-preload.js"),
        },
      })),
      ae.loadURL("file://" + __dirname + "/index.html#updater"),
      U
        ? ae.webContents.openDevTools()
        : ae.webContents.on("devtools-opened", () => {
            ae && ae.webContents.closeDevTools();
          }),
      ae.on("closed", () => {}),
      ae.on("close", async (e) => {
        e.preventDefault(), ie && ie.show(), ae && ae.hide();
      }),
      e.ipcMain.handle("updater:closeWindow", () => {
        ie && ie.show(), ae && ae.hide();
      }),
      e.ipcMain.handle("updater:download", () => {
        t.autoUpdater
          .checkForUpdates()
          .then(() => {
            t.autoUpdater
              .downloadUpdate()
              .then(() => {
                console.log("downloaded");
              })
              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            console.error(e);
          });
      }),
      e.ipcMain.handle("updater:install", () => {
        t.autoUpdater.quitAndInstall();
      }),
      ae
    );
  })(),
    (module.exports = o);
})();
