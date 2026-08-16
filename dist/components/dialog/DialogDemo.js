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
var DialogDemo_exports = {};
__export(DialogDemo_exports, {
  default: () => DialogDemo
});
module.exports = __toCommonJS(DialogDemo_exports);
var import_react = require("react");
var import_Button = require("@/components/button/Button");
var import_Dialog = require("./Dialog");
function DialogDemo() {
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", onClick: () => setOpen(true) }, "Open Dialog"), /* @__PURE__ */ React.createElement(
    import_Dialog.Dialog,
    {
      open,
      onClose: () => setOpen(false),
      title: "Confirm action",
      footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", onClick: () => setOpen(false) }, "Cancel"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", onClick: () => setOpen(false) }, "Confirm"))
    },
    /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to proceed with this action?")
  ));
}
//# sourceMappingURL=DialogDemo.js.map