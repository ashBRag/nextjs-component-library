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
var BadgeDemo_exports = {};
__export(BadgeDemo_exports, {
  default: () => BadgeDemo
});
module.exports = __toCommonJS(BadgeDemo_exports);
var import_Badge = require("./Badge");
function BadgeDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Variants"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary" }, "Primary"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "secondary" }, "Secondary"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "success" }, "Success"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "warning" }, "Warning"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Sizes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary", size: "sm" }, "Small"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary", size: "md" }, "Medium"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary", size: "lg" }, "Large"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Shapes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary", shape: "rounded" }, "Rounded"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "primary", shape: "squared" }, "Squared"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "success", shape: "rounded" }, "Rounded"), /* @__PURE__ */ React.createElement(import_Badge.Badge, { variant: "success", shape: "squared" }, "Squared"))));
}
//# sourceMappingURL=BadgeDemo.js.map