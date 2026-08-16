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
var Table_exports = {};
__export(Table_exports, {
  Table: () => Table
});
module.exports = __toCommonJS(Table_exports);
var import_react = __toESM(require("react"));
var import_table_base = require("./table.base.css");
function Table({
  columns,
  data,
  striped = false,
  bordered = false,
  compact = false,
  className = ""
}) {
  const cls = [
    "table",
    striped && "table--striped",
    bordered && "table--bordered",
    compact && "table--compact",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "table__wrapper" }, /* @__PURE__ */ import_react.default.createElement("table", { className: cls }, /* @__PURE__ */ import_react.default.createElement("thead", { className: "table__head" }, /* @__PURE__ */ import_react.default.createElement("tr", null, columns.map((col) => {
    var _a;
    return /* @__PURE__ */ import_react.default.createElement(
      "th",
      {
        key: col.key,
        className: `table__th table__th--${(_a = col.align) != null ? _a : "left"}`
      },
      col.label
    );
  }))), /* @__PURE__ */ import_react.default.createElement("tbody", { className: "table__body" }, data.map((row, ri) => /* @__PURE__ */ import_react.default.createElement("tr", { key: ri, className: "table__row" }, columns.map((col) => {
    var _a;
    return /* @__PURE__ */ import_react.default.createElement(
      "td",
      {
        key: col.key,
        className: `table__td table__td--${(_a = col.align) != null ? _a : "left"}`
      },
      row[col.key]
    );
  }))))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table
});
//# sourceMappingURL=Table.js.map