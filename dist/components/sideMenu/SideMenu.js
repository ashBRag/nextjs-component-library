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
var SideMenu_exports = {};
__export(SideMenu_exports, {
  SideMenu: () => SideMenu
});
module.exports = __toCommonJS(SideMenu_exports);
var import_react = __toESM(require("react"));
var import_sideMenu_base = require("./sideMenu.base.css");
function SideMenu({
  groups,
  activeId,
  onSelect,
  title,
  variant = "left",
  className = ""
}) {
  return /* @__PURE__ */ import_react.default.createElement("nav", { className: `side-menu side-menu--${variant} ${className}` }, title && /* @__PURE__ */ import_react.default.createElement("p", { className: "side-menu__title" }, title), groups.map((group, gi) => /* @__PURE__ */ import_react.default.createElement("div", { key: group.label, className: "side-menu__group" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "side-menu__group-label" }, group.label), /* @__PURE__ */ import_react.default.createElement("ul", { className: "side-menu__list" }, group.items.map((item) => /* @__PURE__ */ import_react.default.createElement("li", { key: item.id }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      onClick: () => onSelect(item.id),
      className: [
        "side-menu__link",
        `side-menu__link--${variant}`,
        activeId === item.id && "side-menu__link--active"
      ].filter(Boolean).join(" ")
    },
    item.label
  )))), gi < groups.length - 1 && /* @__PURE__ */ import_react.default.createElement("hr", { className: "side-menu__divider" }))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SideMenu
});
//# sourceMappingURL=SideMenu.js.map