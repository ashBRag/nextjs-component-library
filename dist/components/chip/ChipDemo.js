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
var ChipDemo_exports = {};
__export(ChipDemo_exports, {
  default: () => ChipDemo
});
module.exports = __toCommonJS(ChipDemo_exports);
var import_react = require("react");
var import_Chip = require("./Chip");
function ChipDemo() {
  const [chips, setChips] = (0, import_react.useState)(["React", "TypeScript", "Next.js"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Variants"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "primary" }, "Primary"), /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "secondary" }, "Secondary"), /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "outline" }, "Outline"), /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "primary", disabled: true }, "Disabled"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Sizes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "primary", size: "sm" }, "Small"), /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "primary", size: "md" }, "Medium"), /* @__PURE__ */ React.createElement(import_Chip.Chip, { variant: "primary", size: "lg" }, "Large"))), /* @__PURE__ */ React.createElement("section", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Removable"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, chips.map((chip) => /* @__PURE__ */ React.createElement(
    import_Chip.Chip,
    {
      key: chip,
      variant: "outline",
      onRemove: () => setChips((prev) => prev.filter((c) => c !== chip))
    },
    chip
  )))));
}
//# sourceMappingURL=ChipDemo.js.map