"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useToast_exports = {};
__export(useToast_exports, {
  useToast: () => useToast
});
module.exports = __toCommonJS(useToast_exports);
var import_react = require("react");
const useToast = () => {
  const [, setToasts] = (0, import_react.useState)([]);
  const addToast = (type, message, duration) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return {
    addToast,
    removeToast,
    success: (msg, duration) => addToast("success", msg, duration),
    error: (msg, duration) => addToast("error", msg, duration),
    warning: (msg, duration) => addToast("warning", msg, duration),
    info: (msg, duration) => addToast("info", msg, duration)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useToast
});
//# sourceMappingURL=useToast.js.map