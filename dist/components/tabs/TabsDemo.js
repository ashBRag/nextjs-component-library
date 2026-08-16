"use strict";
"use client";
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
var TabsDemo_exports = {};
__export(TabsDemo_exports, {
  default: () => TabsDemo
});
module.exports = __toCommonJS(TabsDemo_exports);
var import_react = require("react");
var import_Tabs = __toESM(require("./Tabs"));
const sampleTabs = [
  {
    id: "tab1",
    label: "Tab One",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab one.")
  },
  {
    id: "tab2",
    label: "Tab Two",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab two.")
  },
  {
    id: "tab3",
    label: "Tab Three",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab three.")
  }
];
function TabsDemo() {
  const [underlineTab, setUnderlineTab] = (0, import_react.useState)("tab1");
  const [boxedTab, setBoxedTab] = (0, import_react.useState)("tab1");
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, 'variant="underline" (default), bordered=true'), /* @__PURE__ */ React.createElement(
    import_Tabs.default,
    {
      tabs: sampleTabs,
      activeTab: underlineTab,
      onTabChange: setUnderlineTab,
      contentHeight: "200px",
      mobileBottomMenu: false
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, 'variant="boxed", bordered=false'), /* @__PURE__ */ React.createElement(
    import_Tabs.default,
    {
      tabs: sampleTabs,
      activeTab: boxedTab,
      onTabChange: setBoxedTab,
      contentHeight: "200px",
      mobileBottomMenu: false,
      variant: "boxed",
      bordered: false
    }
  )));
}
//# sourceMappingURL=TabsDemo.js.map