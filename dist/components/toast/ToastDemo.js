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
var ToastDemo_exports = {};
__export(ToastDemo_exports, {
  default: () => ToastDemo
});
module.exports = __toCommonJS(ToastDemo_exports);
var import_react = require("react");
var import_Button = require("@/components/button/Button");
var import_Toast = require("./Toast");
function ToastDemo() {
  const [toasts, setToasts] = (0, import_react.useState)([]);
  const addToast = (type, variant) => {
    setToasts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        variant,
        message: `This is a ${variant} ${type} toast`
      }
    ]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, "Outline (default)"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", size: "sm", onClick: () => addToast("success", "outline") }, "Success"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "secondary", size: "sm", onClick: () => addToast("error", "outline") }, "Error"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "sm", onClick: () => addToast("warning", "outline") }, "Warning"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "sm", onClick: () => addToast("info", "outline") }, "Info"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, "Filled"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", size: "sm", onClick: () => addToast("success", "filled") }, "Success"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "secondary", size: "sm", onClick: () => addToast("error", "filled") }, "Error"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "sm", onClick: () => addToast("warning", "filled") }, "Warning"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "sm", onClick: () => addToast("info", "filled") }, "Info"))), /* @__PURE__ */ React.createElement(import_Toast.ToastContainer, { toasts, onRemove: removeToast }));
}
//# sourceMappingURL=ToastDemo.js.map