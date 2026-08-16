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
var MenuDemo_exports = {};
__export(MenuDemo_exports, {
  default: () => MenuDemo
});
module.exports = __toCommonJS(MenuDemo_exports);
var import_Menu = require("./Menu");
function MenuDemo() {
  return /* @__PURE__ */ React.createElement(
    import_Menu.DropdownMenu,
    {
      trigger: /* @__PURE__ */ React.createElement("span", null, "Open Menu"),
      groups: [
        {
          heading: "Actions",
          items: [
            { label: "Edit", value: "edit", onClick: () => {
            } },
            {
              label: "Duplicate",
              value: "duplicate",
              onClick: () => {
              }
            }
          ]
        },
        {
          heading: "Danger",
          items: [
            {
              label: "Delete",
              value: "delete",
              active: true,
              onClick: () => {
              }
            }
          ]
        }
      ]
    }
  );
}
//# sourceMappingURL=MenuDemo.js.map