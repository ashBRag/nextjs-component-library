"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThemeProvider_exports = {};
__export(ThemeProvider_exports, {
  ThemeCntxt: () => ThemeCntxt,
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(ThemeProvider_exports);
var import_react = __toESM(require("react"));
const ThemeCntxt = (0, import_react.createContext)({
  theme: "dark",
  profile: "dev",
  setTheme: () => {
  },
  switchProfile: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setThemeState] = (0, import_react.useState)("dark");
  const [profile, setProfile] = (0, import_react.useState)("dev");
  (0, import_react.useEffect)(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  (0, import_react.useEffect)(() => {
    document.documentElement.setAttribute("data-profile", profile);
  }, [profile]);
  function setTheme(t) {
    setThemeState(t);
  }
  function switchProfile(p) {
    setProfile(p);
  }
  return /* @__PURE__ */ import_react.default.createElement(ThemeCntxt, { value: { theme, profile, setTheme, switchProfile } }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeCntxt,
  ThemeProvider
});
//# sourceMappingURL=ThemeProvider.js.map