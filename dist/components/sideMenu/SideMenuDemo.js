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
var SideMenuDemo_exports = {};
__export(SideMenuDemo_exports, {
  default: () => SideMenuDemo
});
module.exports = __toCommonJS(SideMenuDemo_exports);
var import_react = require("react");
var import_SideMenu = require("./SideMenu");
const sampleGroups = [
  {
    label: "Workspace",
    items: [
      { id: "overview", label: "Overview" },
      { id: "members", label: "Members" }
    ]
  },
  {
    label: "Configuration",
    items: [
      { id: "integrations", label: "Integrations" },
      { id: "billing", label: "Billing" }
    ]
  }
];
function SideMenuDemo() {
  const [active, setActive] = (0, import_react.useState)("overview");
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-12 flex-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, 'variant="left" (default)'), /* @__PURE__ */ React.createElement(
    import_SideMenu.SideMenu,
    {
      title: "Project settings",
      variant: "left",
      activeId: active,
      onSelect: setActive,
      className: "w-56",
      groups: sampleGroups
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, 'variant="right"'), /* @__PURE__ */ React.createElement(
    import_SideMenu.SideMenu,
    {
      title: "Project settings",
      variant: "right",
      activeId: active,
      onSelect: setActive,
      className: "w-56",
      groups: sampleGroups
    }
  )));
}
//# sourceMappingURL=SideMenuDemo.js.map