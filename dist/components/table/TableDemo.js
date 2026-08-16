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
var TableDemo_exports = {};
__export(TableDemo_exports, {
  default: () => TableDemo
});
module.exports = __toCommonJS(TableDemo_exports);
var import_Table = require("./Table");
const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" }
];
const data = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Active" },
  { name: "Grace Hopper", role: "Admiral", status: "Retired" }
];
function TableDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Default"), /* @__PURE__ */ React.createElement(import_Table.Table, { columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Striped"), /* @__PURE__ */ React.createElement(import_Table.Table, { striped: true, columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Bordered"), /* @__PURE__ */ React.createElement(import_Table.Table, { bordered: true, columns, data })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Compact"), /* @__PURE__ */ React.createElement(import_Table.Table, { compact: true, columns, data })));
}
//# sourceMappingURL=TableDemo.js.map