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
var Dialog_exports = {};
__export(Dialog_exports, {
  Dialog: () => Dialog
});
module.exports = __toCommonJS(Dialog_exports);
var import_react = __toESM(require("react"));
var import_dialog_base = require("./dialog.base.css");
function Dialog({
  open,
  onClose,
  title,
  footer,
  size = "md",
  closeOnOverlayClick = true,
  className = "",
  children
}) {
  const panelRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  const panelCls = ["dialog__panel", `dialog__panel--${size}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "dialog__overlay",
      onMouseDown: (e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        ref: panelRef,
        className: panelCls,
        role: "dialog",
        "aria-modal": "true"
      },
      title && /* @__PURE__ */ import_react.default.createElement("div", { className: "dialog__header" }, typeof title === "string" ? /* @__PURE__ */ import_react.default.createElement("h3", { className: "dialog__title" }, title) : title, /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          type: "button",
          className: "dialog__close",
          "aria-label": "Close",
          onClick: onClose
        },
        /* @__PURE__ */ import_react.default.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          /* @__PURE__ */ import_react.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          /* @__PURE__ */ import_react.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        )
      )),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "dialog__body" }, children),
      footer && /* @__PURE__ */ import_react.default.createElement("div", { className: "dialog__footer" }, footer)
    )
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dialog
});
//# sourceMappingURL=Dialog.js.map