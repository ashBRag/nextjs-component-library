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
var RadioGroupDemo_exports = {};
__export(RadioGroupDemo_exports, {
  default: () => RadioGroupDemo
});
module.exports = __toCommonJS(RadioGroupDemo_exports);
var import_react = require("react");
var import_RadioGroup = require("./RadioGroup");
function RadioGroupDemo() {
  const [value, setValue] = (0, import_react.useState)("a");
  return /* @__PURE__ */ React.createElement(
    import_RadioGroup.RadioGroup,
    {
      label: "Pick an option",
      options: [
        { value: "a", label: "Option A", description: "First option" },
        { value: "b", label: "Option B", description: "Second option" },
        { value: "c", label: "Option C" }
      ],
      value,
      onChange: setValue
    }
  );
}
//# sourceMappingURL=RadioGroupDemo.js.map