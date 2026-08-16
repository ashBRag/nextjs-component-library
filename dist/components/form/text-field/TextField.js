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
var TextField_exports = {};
__export(TextField_exports, {
  TextField: () => TextField
});
module.exports = __toCommonJS(TextField_exports);
var import_react = __toESM(require("react"));
var import_form_base = require("../form.base.css");
const TextField = ({
  label = "",
  type = "text",
  value = "",
  onChange,
  error,
  placeholder = "",
  rows,
  className = ""
}) => {
  const isTextarea = Boolean(rows && rows > 0);
  const fieldMod = error ? "text-field--error" : "";
  return /* @__PURE__ */ import_react.default.createElement("div", { className: `text-field ${className}` }, label && /* @__PURE__ */ import_react.default.createElement("label", { className: "text-field__label" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-field__label-prefix", "aria-hidden": "true" }), label), isTextarea ? /* @__PURE__ */ import_react.default.createElement(
    "textarea",
    {
      rows,
      value,
      onChange: (e) => onChange(e.target.value),
      className: `text-field__input text-field__input--textarea ${fieldMod}`,
      placeholder
    }
  ) : /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type,
      value,
      onChange: (e) => onChange(e.target.value),
      className: `text-field__input ${fieldMod}`,
      placeholder
    }
  ), error && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-field__error" }, error));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextField
});
//# sourceMappingURL=TextField.js.map