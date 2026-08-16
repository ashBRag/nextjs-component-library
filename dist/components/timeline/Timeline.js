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
var Timeline_exports = {};
__export(Timeline_exports, {
  default: () => Timeline
});
module.exports = __toCommonJS(Timeline_exports);
var import_react = __toESM(require("react"));
var import_CornerBrackets = require("../corner/CornerBrackets");
var import_timeline_base = require("./timeline.base.css");
function Timeline({
  items,
  className = "",
  animated = false,
  selectedId,
  onSelect
}) {
  const handleCardClick = (item) => {
    if (!item.action) return;
    onSelect == null ? void 0 : onSelect(item.id);
    if (item.action.onClick) {
      item.action.onClick();
    } else if (item.action.href && item.action.external) {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
  };
  const getCardMods = (item) => {
    if (!item.action) return "";
    if (selectedId === item.id) return "timeline__card--selected";
    return "timeline__card--interactive";
  };
  const renderCardContent = (item) => {
    var _a;
    return /* @__PURE__ */ import_react.default.createElement("div", { className: `timeline__card ${getCardMods(item)}` }, /* @__PURE__ */ import_react.default.createElement(import_CornerBrackets.CornerBrackets, { wrapped: true, size: "lg", color: "corner-token" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "timeline__card-inner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "timeline__card-header" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "timeline__title-wrapper" }, /* @__PURE__ */ import_react.default.createElement("h3", { className: "timeline__title" }, item.title)), item.badge && /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: `timeline__badge timeline__badge--${(_a = item.badge.variant) != null ? _a : "primary"}`
      },
      item.badge.text
    )), /* @__PURE__ */ import_react.default.createElement("time", { className: "timeline__date" }, item.date), item.description && /* @__PURE__ */ import_react.default.createElement("p", { className: "timeline__description" }, item.description)));
  };
  const renderCard = (item) => {
    if (!item.action) {
      return renderCardContent(item);
    }
    if (item.action.href && !item.action.external) {
      return /* @__PURE__ */ import_react.default.createElement("a", { href: item.action.href, className: "timeline__card-link" }, renderCardContent(item));
    }
    return /* @__PURE__ */ import_react.default.createElement("div", { onClick: () => handleCardClick(item) }, renderCardContent(item));
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `timeline ${animated ? "timeline--animated" : ""} ${className}`
    },
    /* @__PURE__ */ import_react.default.createElement("ol", { className: "timeline__list" }, items.map((item) => /* @__PURE__ */ import_react.default.createElement("li", { key: item.id, className: "timeline__item" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "timeline__node" }, item.icon), renderCard(item))))
  );
}
//# sourceMappingURL=Timeline.js.map