"use strict";
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
var Divider_exports = {};
__export(Divider_exports, {
  Divider: () => Divider
});
module.exports = __toCommonJS(Divider_exports);
var import_react = __toESM(require("react"));
var import_divider_base = require("./divider.base.css");
function Divider({ spacing = "md", label, className = "" }) {
  const cls = ["divider", `divider--${spacing}`, className].filter(Boolean).join(" ");
  if (label) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: `${cls} divider--labeled`, role: "separator" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "divider__line" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "divider__label" }, label), /* @__PURE__ */ import_react.default.createElement("span", { className: "divider__line" }));
  }
  return /* @__PURE__ */ import_react.default.createElement("hr", { className: cls, role: "separator" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Divider
});
//# sourceMappingURL=Divider.js.map