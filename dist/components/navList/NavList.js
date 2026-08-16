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
var NavList_exports = {};
__export(NavList_exports, {
  default: () => NavList
});
module.exports = __toCommonJS(NavList_exports);
var import_react = __toESM(require("react"));
var import_CornerBrackets = require("../corner/CornerBrackets");
var import_navList_base = require("./navList.base.css");
function NavList({
  tabs,
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = "",
  animated = true,
  horizontal = false
}) {
  var _a, _b, _c, _d;
  const [activeTab, setActiveTab] = (0, import_react.useState)(
    (_b = defaultActiveTab != null ? defaultActiveTab : (_a = tabs[0]) == null ? void 0 : _a.id) != null ? _b : ""
  );
  const handleTabClick = (item) => {
    var _a2;
    if (item.disabled) return;
    (_a2 = item.onClick) == null ? void 0 : _a2.call(item, item);
    if (!item.href) setActiveTab(item.id);
  };
  const getItemMods = (item, isActive) => {
    if (item.disabled) return "nav-list__trigger--disabled";
    if (isActive) return "nav-list__trigger--active";
    return "";
  };
  const getIconMods = (item, isActive) => {
    if (item.disabled) return "nav-list__icon--disabled";
    if (isActive && animated) return "nav-list__icon--active";
    return "";
  };
  const renderInner = (item, isActive) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, isActive && /* @__PURE__ */ import_react.default.createElement(import_CornerBrackets.CornerBrackets, { wrapped: true, color: "nav-active" }), item.icon && /* @__PURE__ */ import_react.default.createElement(
    "span",
    {
      className: `nav-list__icon ${getIconMods(item, isActive)}`,
      "aria-hidden": "true"
    },
    item.icon
  ), /* @__PURE__ */ import_react.default.createElement("span", { className: "nav-list__label" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "nav-list__label-prefix", "aria-hidden": "true" }), item.name), isActive && /* @__PURE__ */ import_react.default.createElement("span", { className: "nav-list__indicator", "aria-hidden": "true" }));
  const renderItem = (item) => {
    const isActive = activeTab === item.id;
    const modClass = getItemMods(item, isActive);
    if (item.href && !item.disabled) {
      return /* @__PURE__ */ import_react.default.createElement(
        "a",
        {
          href: item.href,
          className: `nav-list__trigger nav-list__trigger--link ${modClass}`
        },
        renderInner(item, isActive)
      );
    }
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: `nav-list__trigger ${modClass}`,
        onClick: () => handleTabClick(item),
        disabled: item.disabled,
        "aria-current": isActive ? "page" : void 0,
        type: "button"
      },
      renderInner(item, isActive)
    );
  };
  const activeContent = (_d = (_c = tabs.find((t) => t.id === activeTab)) == null ? void 0 : _c.content) != null ? _d : null;
  const rootMods = [
    horizontal ? "nav-list--horizontal" : "nav-list--vertical",
    animated ? "nav-list--animated" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement("div", { className: `nav-list ${rootMods} ${className}` }, /* @__PURE__ */ import_react.default.createElement("ul", { className: `nav-list__list ${tabsClassName}` }, tabs.map((item) => /* @__PURE__ */ import_react.default.createElement("li", { key: item.id, className: "nav-list__item" }, renderItem(item)))), /* @__PURE__ */ import_react.default.createElement("div", { className: `nav-list__content ${contentClassName}` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "nav-list__content-inner" }, activeContent)));
}
//# sourceMappingURL=NavList.js.map