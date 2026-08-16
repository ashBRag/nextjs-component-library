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
var ButtonDemo_exports = {};
__export(ButtonDemo_exports, {
  default: () => ButtonDemo
});
module.exports = __toCommonJS(ButtonDemo_exports);
var import_Button = require("./Button");
function PlusIcon() {
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("line", { x1: 12, y1: 5, x2: 12, y2: 19 }),
    /* @__PURE__ */ React.createElement("line", { x1: 5, y1: 12, x2: 19, y2: 12 })
  );
}
function ButtonDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Variants & sizes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", size: "sm" }, "Primary SM"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "secondary", size: "md" }, "Secondary MD"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "lg" }, "Outline LG"), /* @__PURE__ */ React.createElement(import_Button.Button, { disabled: true }, "Disabled"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Regular with icon"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", size: "md", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "secondary", size: "md", iconAfter: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", size: "md", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Icon variant"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "icon", size: "sm", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "icon", size: "md", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "icon", size: "lg", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "icon", size: "md", "aria-label": "Add", disabled: true, iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }))));
}
//# sourceMappingURL=ButtonDemo.js.map