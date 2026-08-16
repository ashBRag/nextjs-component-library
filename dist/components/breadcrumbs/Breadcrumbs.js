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
var Breadcrumbs_exports = {};
__export(Breadcrumbs_exports, {
  Breadcrumbs: () => Breadcrumbs
});
module.exports = __toCommonJS(Breadcrumbs_exports);
var import_react = __toESM(require("react"));
var import_breadcrumbs_base = require("./breadcrumbs.base.css");
function Breadcrumbs({
  items,
  separator = "/",
  ariaLabel = "Breadcrumb",
  className = ""
}) {
  return /* @__PURE__ */ import_react.default.createElement("nav", { className: `breadcrumbs ${className}`.trim(), "aria-label": ariaLabel }, /* @__PURE__ */ import_react.default.createElement("ol", { className: "breadcrumbs__list" }, items.map((item, index) => {
    var _a;
    const isCurrent = (_a = item.current) != null ? _a : index === items.length - 1;
    const content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, item.icon && /* @__PURE__ */ import_react.default.createElement("span", { className: "breadcrumbs__icon", "aria-hidden": "true" }, item.icon), /* @__PURE__ */ import_react.default.createElement("span", { className: "breadcrumbs__label" }, item.label));
    return /* @__PURE__ */ import_react.default.createElement("li", { className: "breadcrumbs__item", key: index }, item.href && !isCurrent ? /* @__PURE__ */ import_react.default.createElement("a", { className: "breadcrumbs__link", href: item.href }, content) : /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: "breadcrumbs__current",
        "aria-current": isCurrent ? "page" : void 0
      },
      content
    ), index < items.length - 1 && /* @__PURE__ */ import_react.default.createElement("span", { className: "breadcrumbs__separator", "aria-hidden": "true" }, separator));
  })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumbs
});
//# sourceMappingURL=Breadcrumbs.js.map