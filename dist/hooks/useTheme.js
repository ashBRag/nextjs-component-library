"use strict";
"use client";
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
var useTheme_exports = {};
__export(useTheme_exports, {
  useTheme: () => useTheme
});
module.exports = __toCommonJS(useTheme_exports);
var import_react = require("react");
var import_ThemeProvider = require("../providers/ThemeProvider");
function useTheme() {
  const ctx = (0, import_react.use)(import_ThemeProvider.ThemeCntxt);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useTheme
});
//# sourceMappingURL=useTheme.js.map