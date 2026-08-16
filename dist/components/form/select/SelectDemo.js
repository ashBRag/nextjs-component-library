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
var SelectDemo_exports = {};
__export(SelectDemo_exports, {
  default: () => SelectDemo
});
module.exports = __toCommonJS(SelectDemo_exports);
var import_react = require("react");
var import_Select = require("./Select");
function SelectDemo() {
  const [value, setValue] = (0, import_react.useState)("opt1");
  return /* @__PURE__ */ React.createElement(
    import_Select.Select,
    {
      label: "Choose one",
      options: [
        { value: "opt1", label: "Option 1" },
        { value: "opt2", label: "Option 2" },
        { value: "opt3", label: "Option 3" }
      ],
      value,
      onChange: setValue
    }
  );
}
//# sourceMappingURL=SelectDemo.js.map