(() => {
  "use strict";
  var e = {};
  (() => {
    e.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    };
  })();
  var o = {};
  e.r(o);
  const r = require("electron");
  r.contextBridge.exposeInMainWorld("executer", {
    run: () => {
      r.ipcRenderer.invoke("executer:run");
    },
  }),
    r.contextBridge.exposeInMainWorld("help", {
      spoof: () => {
        r.ipcRenderer.invoke("help:SpoofMacAddress"), console.log("spoof");
      },
    }),
    r.contextBridge.exposeInMainWorld("binder", {
      setup: (e) => {
        r.ipcRenderer.invoke("binder:setup", { user: e });
      },
    }),
    r.contextBridge.exposeInMainWorld("updater", {
      init: (e, o) => {
        r.ipcRenderer.on("updater:status", (o, r, n) => {
          e && e(r, n);
        }),
          r.ipcRenderer.on("updater:info", (e, r) => {
            o && o(r);
          }),
          r.ipcRenderer.invoke("updater:info");
      },
      closeWindow: () => {
        r.ipcRenderer.invoke("updater:closeWindow");
      },
      download: () => {
        r.ipcRenderer.invoke("updater:download");
      },
      install: () => {
        r.ipcRenderer.invoke("updater:install");
      },
    }),
    r.ipcRenderer.on("console:log", (e, o) => {
      console.log("console:log", o);
    }),
    (module.exports = o);
})();
