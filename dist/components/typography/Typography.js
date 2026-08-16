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
var Typography_exports = {};
__export(Typography_exports, {
  Typography: () => Typography
});
module.exports = __toCommonJS(Typography_exports);
var import_react = __toESM(require("react"));
var import_typography_base = require("./typography.base.css");
const defaultTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  caption: "span",
  label: "span"
};
function Typography({
  variant = "body",
  as,
  className = "",
  children
}) {
  const Tag = as != null ? as : defaultTag[variant];
  const cls = ["typography", `typography--${variant}`, className].filter(Boolean).join(" ");
  return import_react.default.createElement(Tag, { className: cls }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Typography
});
//# sourceMappingURL=Typography.js.map