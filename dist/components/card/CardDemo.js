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
var CardDemo_exports = {};
__export(CardDemo_exports, {
  default: () => CardDemo
});
module.exports = __toCommonJS(CardDemo_exports);
var import_Card = require("./Card");
function CardDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Basic Card", subtitle: "A subtitle" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Sm Card", size: "sm" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Large Card", size: "lg" }), /* @__PURE__ */ React.createElement(
    import_Card.Card,
    {
      title: "Compact Card, No Border",
      size: "compact",
      showCorners: false
    }
  ), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Shadow: sm", shadow: "sm" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Shadow: md", shadow: "md" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Shadow: lg", shadow: "lg" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "Shadow: glow", shadow: "glow" }), /* @__PURE__ */ React.createElement(import_Card.Card, { title: "With Divider + Children", showDivider: true }, /* @__PURE__ */ React.createElement("p", null, "Children below the divider."))));
}
//# sourceMappingURL=CardDemo.js.map