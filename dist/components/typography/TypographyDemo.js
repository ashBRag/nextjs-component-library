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
var TypographyDemo_exports = {};
__export(TypographyDemo_exports, {
  default: () => TypographyDemo
});
module.exports = __toCommonJS(TypographyDemo_exports);
var import_Typography = require("./Typography");
function TypographyDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "h1" }, "Heading 1"), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "h2" }, "Heading 2"), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "h3" }, "Heading 3"), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "h4" }, "Heading 4"), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "body" }, "Body text used for standard paragraph content."), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "caption" }, "Caption text, accent colored."), /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "label" }, "Label text"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_Typography.Typography, { variant: "body", as: "div" }, "Body variant rendered as a div via the `as` prop."), /* @__PURE__ */ React.createElement("p", { className: "text-xs opacity-70 mt-1" }, "Uses the `as` override")));
}
//# sourceMappingURL=TypographyDemo.js.map