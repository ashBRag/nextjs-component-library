"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var GridDemo_exports = {};
__export(GridDemo_exports, {
  default: () => GridDemo
});
module.exports = __toCommonJS(GridDemo_exports);
var import_Grid = require("./Grid");
function Box({ children }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "rounded-md border p-4 text-sm text-center",
      style: { borderColor: "var(--color-border)" }
    },
    children
  );
}
function GridDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Responsive columns"), /* @__PURE__ */ React.createElement(import_Grid.Grid, { columns: 1, columnsSm: 2, columnsMd: 3, gap: "md" }, Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ React.createElement(Box, { key: i }, "Item ", i + 1)))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Item spans"), /* @__PURE__ */ React.createElement(import_Grid.Grid, { columns: 4, gap: "md" }, /* @__PURE__ */ React.createElement(import_Grid.GridItem, { span: 2 }, /* @__PURE__ */ React.createElement(Box, null, "span 2")), /* @__PURE__ */ React.createElement(import_Grid.GridItem, { span: 1 }, /* @__PURE__ */ React.createElement(Box, null, "span 1")), /* @__PURE__ */ React.createElement(import_Grid.GridItem, { span: 1 }, /* @__PURE__ */ React.createElement(Box, null, "span 1")), /* @__PURE__ */ React.createElement(import_Grid.GridItem, { span: 4 }, /* @__PURE__ */ React.createElement(Box, null, "span 4 (full width)")))));
}
//# sourceMappingURL=GridDemo.js.map