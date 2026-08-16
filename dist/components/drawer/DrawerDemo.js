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
var DrawerDemo_exports = {};
__export(DrawerDemo_exports, {
  default: () => DrawerDemo
});
module.exports = __toCommonJS(DrawerDemo_exports);
var import_react = require("react");
var import_Button = require("@/components/button/Button");
var import_Drawer = require("./Drawer");
function DrawerDemo() {
  const [side, setSide] = (0, import_react.useState)(
    null
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", onClick: () => setSide("left") }, "Open Left"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", onClick: () => setSide("right") }, "Open Right"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", onClick: () => setSide("top") }, "Open Top"), /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "outline", onClick: () => setSide("bottom") }, "Open Bottom")), /* @__PURE__ */ React.createElement(
    import_Drawer.Drawer,
    {
      open: side !== null,
      onClose: () => setSide(null),
      side: side != null ? side : "right",
      title: "Drawer title",
      footer: /* @__PURE__ */ React.createElement(import_Button.Button, { variant: "primary", onClick: () => setSide(null) }, "Done")
    },
    /* @__PURE__ */ React.createElement("p", null, "Drawer content slides in from the ", side, " side.")
  ));
}
//# sourceMappingURL=DrawerDemo.js.map