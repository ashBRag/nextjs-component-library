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
var Toast_exports = {};
__export(Toast_exports, {
  Toast: () => Toast,
  ToastContainer: () => ToastContainer
});
module.exports = __toCommonJS(Toast_exports);
var import_react = __toESM(require("react"));
var import_toast_base = require("./toast.base.css");
const Toast = ({
  type,
  message,
  variant = "outline",
  duration = 4e3,
  onClose
}) => {
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  const [isExiting, setIsExiting] = (0, import_react.useState)(false);
  const handleClose = (0, import_react.useCallback)(() => {
    setIsExiting(true);
    setTimeout(() => onClose == null ? void 0 : onClose(), 300);
  }, [onClose]);
  (0, import_react.useEffect)(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 50);
    const exitTimer = setTimeout(() => handleClose(), duration);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, handleClose]);
  const visibilityMod = isVisible && !isExiting ? "toast--visible" : "toast--hidden";
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `toast toast--${type} toast--${variant} ${visibilityMod}`,
      style: { "--toast-duration": `${duration}ms` }
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: `toast__progress ${isExiting ? "toast__progress--exiting" : ""}`
      }
    ),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "toast__message" }, message),
    /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        className: "toast__close",
        onClick: handleClose,
        type: "button",
        "aria-label": "Dismiss notification"
      },
      "\xD7"
    )
  );
};
const ToastContainer = ({
  toasts,
  onRemove
}) => /* @__PURE__ */ import_react.default.createElement("div", { className: "toast-container" }, toasts.map((t) => /* @__PURE__ */ import_react.default.createElement(
  Toast,
  {
    key: t.id,
    type: t.type,
    message: t.message,
    variant: t.variant,
    duration: t.duration,
    onClose: () => onRemove(t.id)
  }
)));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toast,
  ToastContainer
});
//# sourceMappingURL=Toast.js.map