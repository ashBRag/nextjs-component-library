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
var Chip_exports = {};
__export(Chip_exports, {
  Chip: () => Chip
});
module.exports = __toCommonJS(Chip_exports);
var import_react = __toESM(require("react"));
var import_chip_base = require("./chip.base.css");
function Chip({
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  onRemove,
  className = "",
  children
}) {
  const cls = [
    "chip",
    `chip--${variant}`,
    `chip--${size}`,
    disabled && "chip--disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement("span", { className: cls }, icon && /* @__PURE__ */ import_react.default.createElement("span", { className: "chip__icon" }, icon), /* @__PURE__ */ import_react.default.createElement("span", { className: "chip__label" }, children), onRemove && /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      className: "chip__remove",
      "aria-label": "Remove",
      disabled,
      onClick: onRemove
    },
    /* @__PURE__ */ import_react.default.createElement(
      "svg",
      {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      /* @__PURE__ */ import_react.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ import_react.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    )
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Chip
});
//# sourceMappingURL=Chip.js.map