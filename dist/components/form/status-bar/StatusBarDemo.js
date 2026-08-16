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
var StatusBarDemo_exports = {};
__export(StatusBarDemo_exports, {
  default: () => StatusBarDemo
});
module.exports = __toCommonJS(StatusBarDemo_exports);
var import_react = require("react");
var import_Button = require("@/components/button/Button");
var import_StatusBar = require("./StatusBar");
function StatusBarDemo() {
  const [progress, setProgress] = (0, import_react.useState)(45);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_StatusBar.StatusBar, { progress, status: "Processing" }), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    import_Button.Button,
    {
      variant: "outline",
      size: "sm",
      onClick: () => setProgress((p) => Math.max(0, p - 10))
    },
    "-10"
  ), /* @__PURE__ */ React.createElement(
    import_Button.Button,
    {
      variant: "outline",
      size: "sm",
      onClick: () => setProgress((p) => Math.min(100, p + 10))
    },
    "+10"
  )));
}
//# sourceMappingURL=StatusBarDemo.js.map