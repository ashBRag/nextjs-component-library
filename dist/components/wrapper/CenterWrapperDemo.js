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
var CenterWrapperDemo_exports = {};
__export(CenterWrapperDemo_exports, {
  default: () => CenterWrapperDemo
});
module.exports = __toCommonJS(CenterWrapperDemo_exports);
var import_CenterWrapper = require("./CenterWrapper");
function CenterWrapperDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "border border-dashed border-gray-500 h-48" }, /* @__PURE__ */ React.createElement(import_CenterWrapper.ScreenCenterWrapper, { className: "h-48 !min-h-0" }, /* @__PURE__ */ React.createElement("p", null, "Centered content")));
}
//# sourceMappingURL=CenterWrapperDemo.js.map