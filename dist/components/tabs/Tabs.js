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
var Tabs_exports = {};
__export(Tabs_exports, {
  default: () => Tabs
});
module.exports = __toCommonJS(Tabs_exports);
var import_react = __toESM(require("react"));
var import_CornerBrackets = require("../corner/CornerBrackets");
var import_tabs_base = require("./tabs.base.css");
function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  animated = true,
  contentHeight = "77vh",
  mobileBottomMenu = true,
  variant = "underline",
  bordered = true
}) {
  const [computedHeight, setComputedHeight] = (0, import_react.useState)("77vh");
  (0, import_react.useEffect)(() => {
    const calculate = () => {
      if (typeof contentHeight === "number") {
        setComputedHeight(`${contentHeight}px`);
      } else if (contentHeight.includes("%")) {
        setComputedHeight(`${parseFloat(contentHeight)}vh`);
      } else {
        setComputedHeight(contentHeight);
      }
    };
    calculate();
    if (typeof contentHeight === "string" && contentHeight.includes("%")) {
      window.addEventListener("resize", calculate);
      return () => window.removeEventListener("resize", calculate);
    }
  }, [contentHeight]);
  const rootMod = animated ? "tabs--animated" : "";
  const TabHeaders = ({ isMobile = false }) => {
    const headerMod = isMobile ? "tabs__header--mobile" : "tabs__header--desktop";
    return /* @__PURE__ */ import_react.default.createElement("div", { className: `tabs__header ${headerMod}` }, /* @__PURE__ */ import_react.default.createElement("ul", { className: "tabs__list", role: "tablist" }, tabs.map((tab) => {
      var _a;
      const isActive = activeTab === tab.id;
      const itemMod = isActive ? "tabs__item--active" : "";
      const btnMod = [
        `tabs__trigger--${variant}`,
        isActive ? "tabs__trigger--active" : "",
        isMobile ? "tabs__trigger--mobile" : "tabs__trigger--desktop"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ import_react.default.createElement(
        "li",
        {
          key: tab.id,
          className: `tabs__item ${itemMod} ${(_a = tab.className) != null ? _a : ""}`,
          role: "presentation"
        },
        /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            className: `tabs__trigger ${btnMod}`,
            onClick: () => {
              onTabChange == null ? void 0 : onTabChange(tab.id);
            },
            type: "button",
            role: "tab",
            "aria-controls": tab.id,
            "aria-selected": isActive
          },
          /* @__PURE__ */ import_react.default.createElement("span", { className: "tabs__trigger-inner" }, tab.icon && /* @__PURE__ */ import_react.default.createElement(
            "span",
            {
              className: `tabs__icon ${isActive ? "tabs__icon--active" : ""}`
            },
            tab.icon
          ), /* @__PURE__ */ import_react.default.createElement("span", { className: "tabs__label" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "tabs__label-prefix", "aria-hidden": "true" }), tab.label, /* @__PURE__ */ import_react.default.createElement("span", { className: "tabs__label-suffix", "aria-hidden": "true" }))),
          isActive && /* @__PURE__ */ import_react.default.createElement(
            "span",
            {
              className: `tabs__indicator ${isMobile ? "tabs__indicator--mobile" : "tabs__indicator--desktop"}`,
              "aria-hidden": "true"
            }
          )
        )
      );
    })));
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `tabs tabs--desktop ${bordered ? "tabs--bordered" : ""} ${rootMod} ${className}`,
      style: { "--tabs-content-height": computedHeight }
    },
    bordered && /* @__PURE__ */ import_react.default.createElement(import_CornerBrackets.CornerBrackets, { color: "tab-active" }),
    /* @__PURE__ */ import_react.default.createElement(TabHeaders, null),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "tabs__panels" }, tabs.map((tab) => {
      var _a;
      const isActive = activeTab === tab.id;
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          id: tab.id,
          key: tab.id,
          className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${(_a = tab.className) != null ? _a : ""}`,
          role: "tabpanel",
          "aria-labelledby": `${tab.id}-tab`
        },
        /* @__PURE__ */ import_react.default.createElement(import_CornerBrackets.CornerBrackets, { color: "tab-active" }),
        /* @__PURE__ */ import_react.default.createElement("div", { className: "tabs__panel-content" }, tab.content),
        /* @__PURE__ */ import_react.default.createElement("span", { className: "tabs__panel-indicator", "aria-hidden": "true" })
      );
    }))
  ), mobileBottomMenu && /* @__PURE__ */ import_react.default.createElement("div", { className: "tabs tabs--mobile" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "tabs__panels tabs__panels--mobile" }, tabs.map((tab) => {
    var _a;
    const isActive = activeTab === tab.id;
    return /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        id: tab.id,
        key: `mobile-${tab.id}`,
        className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${(_a = tab.className) != null ? _a : ""}`,
        role: "tabpanel",
        "aria-labelledby": `${tab.id}-tab`
      },
      tab.content
    );
  })), /* @__PURE__ */ import_react.default.createElement("div", { className: "tabs__mobile-bar" }, /* @__PURE__ */ import_react.default.createElement(import_CornerBrackets.CornerBrackets, { corners: ["tl", "tr"], color: "tab-active" }), /* @__PURE__ */ import_react.default.createElement(TabHeaders, { isMobile: true }))));
}
//# sourceMappingURL=Tabs.js.map