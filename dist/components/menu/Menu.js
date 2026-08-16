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
var Menu_exports = {};
__export(Menu_exports, {
  DropdownMenu: () => DropdownMenu
});
module.exports = __toCommonJS(Menu_exports);
var import_react = __toESM(require("react"));
var import_menu_base = require("./menu.base.css");
function DropdownMenu({
  trigger,
  groups,
  align = "right",
  className = ""
}) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const alignCls = align === "right" ? "right-0" : "left-0";
  return /* @__PURE__ */ import_react.default.createElement("div", { ref, className: `relative inline-block ${className}` }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      onClick: () => setOpen((p) => !p),
      className: "dropdown__trigger",
      "aria-haspopup": "true",
      "aria-expanded": open
    },
    trigger
  ), open && /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `dropdown__panel absolute ${alignCls} mt-2 z-50`,
      role: "menu"
    },
    groups.map((group, gi) => /* @__PURE__ */ import_react.default.createElement("div", { key: gi, className: "dropdown__group" }, group.heading && /* @__PURE__ */ import_react.default.createElement("p", { className: "dropdown__heading" }, group.heading), group.items.map((item) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: item.value,
        role: "menuitem",
        className: [
          "dropdown__item",
          item.active && "dropdown__item--active"
        ].filter(Boolean).join(" "),
        onClick: () => {
          item.onClick();
          setOpen(false);
        }
      },
      item.active && /* @__PURE__ */ import_react.default.createElement("span", { className: "dropdown__item-dot", "aria-hidden": true }),
      item.label
    )), gi < groups.length - 1 && /* @__PURE__ */ import_react.default.createElement("hr", { className: "dropdown__divider" })))
  ));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DropdownMenu
});
//# sourceMappingURL=Menu.js.map