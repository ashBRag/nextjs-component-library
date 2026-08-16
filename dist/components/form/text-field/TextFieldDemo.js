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
var TextFieldDemo_exports = {};
__export(TextFieldDemo_exports, {
  default: () => TextFieldDemo
});
module.exports = __toCommonJS(TextFieldDemo_exports);
var import_react = require("react");
var import_TextField = require("./TextField");
function TextFieldDemo() {
  const [textValue, setTextValue] = (0, import_react.useState)("");
  const [textareaValue, setTextareaValue] = (0, import_react.useState)("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    import_TextField.TextField,
    {
      label: "Name",
      value: textValue,
      onChange: setTextValue,
      placeholder: "Enter your name"
    }
  ), /* @__PURE__ */ React.createElement(
    import_TextField.TextField,
    {
      label: "Message",
      value: textareaValue,
      onChange: setTextareaValue,
      placeholder: "Write a message...",
      rows: 3
    }
  ), /* @__PURE__ */ React.createElement(
    import_TextField.TextField,
    {
      label: "With Error",
      value: "",
      onChange: () => {
      },
      error: "This field is required"
    }
  ));
}
//# sourceMappingURL=TextFieldDemo.js.map