"use strict";
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
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);
var import_react = __toESM(require("react"));
var import_button_base = require("./button.base.css");
function Button({
  variant = "outline",
  size = "md",
  iconBefore,
  iconAfter,
  disabled = false,
  className = "",
  children,
  onClick,
  "aria-label": ariaLabel
}) {
  const cls = ["btn", `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(" ");
  const content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, iconBefore && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__icon btn__icon--before" }, iconBefore), children && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__label" }, children), iconAfter && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__icon btn__icon--after" }, iconAfter));
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      onClick,
      disabled,
      className: cls,
      "aria-label": ariaLabel
    },
    content
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=Button.js.map