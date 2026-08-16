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
var BreadcrumbsDemo_exports = {};
__export(BreadcrumbsDemo_exports, {
  default: () => BreadcrumbsDemo
});
module.exports = __toCommonJS(BreadcrumbsDemo_exports);
var import_Breadcrumbs = require("./Breadcrumbs");
function BreadcrumbsDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Navigation paths"), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Default separator"), /* @__PURE__ */ React.createElement(
    import_Breadcrumbs.Breadcrumbs,
    {
      items: [
        { label: "Home", href: "#home" },
        { label: "Components", href: "#components" },
        { label: "Breadcrumbs" }
      ]
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Custom separator"), /* @__PURE__ */ React.createElement(
    import_Breadcrumbs.Breadcrumbs,
    {
      separator: ">",
      items: [
        { label: "Home", href: "#home" },
        { label: "Library", href: "#library" },
        { label: "Current page" }
      ]
    }
  ))));
}
//# sourceMappingURL=BreadcrumbsDemo.js.map