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
var DividerDemo_exports = {};
__export(DividerDemo_exports, {
  default: () => DividerDemo
});
module.exports = __toCommonJS(DividerDemo_exports);
var import_Divider = require("./Divider");
function DividerDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Divider.Divider, { spacing: "sm" }), /* @__PURE__ */ React.createElement(import_Divider.Divider, { spacing: "md" }), /* @__PURE__ */ React.createElement(import_Divider.Divider, { spacing: "lg" }), /* @__PURE__ */ React.createElement(import_Divider.Divider, { label: "OR" }));
}
//# sourceMappingURL=DividerDemo.js.map