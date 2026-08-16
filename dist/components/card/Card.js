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
var Card_exports = {};
__export(Card_exports, {
  Card: () => Card
});
module.exports = __toCommonJS(Card_exports);
var import_react = __toESM(require("react"));
var import_CornerBrackets = require("../corner/CornerBrackets");
var import_card_base = require("./card.base.css");
function Card({
  id,
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  size = "md",
  showBorder = true,
  showCorners = true,
  shadow = "none",
  showDivider = false,
  children,
  clickable = false,
  onClick
}) {
  const cardCls = [
    "card",
    showBorder && "card--bordered",
    clickable && "card--clickable",
    shadow !== "none" && `card--shadow-${shadow}`,
    className
  ].filter(Boolean).join(" ");
  const bodyCls = `card__body--${size}`;
  const titleCls = `card__title card__title--${size} ${titleClassName}`.trim();
  return /* @__PURE__ */ import_react.default.createElement("div", { className: `card__corner-wrapper ${className}`, id }, showCorners && /* @__PURE__ */ import_react.default.createElement(
    import_CornerBrackets.CornerBrackets,
    {
      corners: ["tl", "br"],
      size: "lg",
      inset: "outside",
      color: "nav-active"
    }
  ), /* @__PURE__ */ import_react.default.createElement("div", { className: cardCls, onClick: clickable ? onClick : void 0 }, /* @__PURE__ */ import_react.default.createElement("div", { className: bodyCls }, typeof title === "string" ? /* @__PURE__ */ import_react.default.createElement("h3", { className: titleCls }, title) : title, subtitle && /* @__PURE__ */ import_react.default.createElement("h4", { className: `card__subtitle ${subtitleClassName}` }, subtitle), showDivider && children && /* @__PURE__ */ import_react.default.createElement("hr", { className: "card__divider" }), children && /* @__PURE__ */ import_react.default.createElement("div", { className: "card__children" }, children))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card
});
//# sourceMappingURL=Card.js.map