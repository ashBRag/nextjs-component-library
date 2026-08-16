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
var Grid_exports = {};
__export(Grid_exports, {
  Grid: () => Grid,
  GridItem: () => GridItem
});
module.exports = __toCommonJS(Grid_exports);
var import_react = __toESM(require("react"));
var import_grid_base = require("./grid.base.css");
function Grid({
  children,
  columns = 1,
  columnsSm,
  columnsMd,
  columnsLg,
  gap = "md",
  className = ""
}) {
  const cls = [
    "grid-layout",
    `grid-layout--cols-${columns}`,
    columnsSm && `grid-layout--sm-cols-${columnsSm}`,
    columnsMd && `grid-layout--md-cols-${columnsMd}`,
    columnsLg && `grid-layout--lg-cols-${columnsLg}`,
    `grid-layout--gap-${gap}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement("div", { className: cls }, children);
}
function GridItem({
  children,
  span,
  spanSm,
  spanMd,
  spanLg,
  className = ""
}) {
  const cls = [
    "grid-layout__item",
    span && `grid-layout__item--span-${span}`,
    spanSm && `grid-layout__item--sm-span-${spanSm}`,
    spanMd && `grid-layout__item--md-span-${spanMd}`,
    spanLg && `grid-layout__item--lg-span-${spanLg}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement("div", { className: cls }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Grid,
  GridItem
});
//# sourceMappingURL=Grid.js.map