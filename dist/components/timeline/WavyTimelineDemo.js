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
var WavyTimelineDemo_exports = {};
__export(WavyTimelineDemo_exports, {
  default: () => WavyTimelineDemo
});
module.exports = __toCommonJS(WavyTimelineDemo_exports);
var import_react = require("react");
var import_WavyTimeline = __toESM(require("./WavyTimeline"));
const wavyTimelinePoints = [
  {
    id: "1998",
    label: "1998",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Founder opens the doors of the company.")
  },
  {
    id: "2000",
    label: "2000",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Added new therapy and service offerings.")
  },
  {
    id: "2001",
    label: "2001",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Introduced a new flagship treatment system.")
  },
  {
    id: "2002",
    label: "2002",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Second clinic and offices open.")
  },
  {
    id: "2013",
    label: "2013",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened a new clinic location.")
  },
  {
    id: "2015",
    label: "2015",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened another chiropractic clinic.")
  },
  {
    id: "2016",
    label: "2016",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened a full-service clinic.")
  }
];
function WavyTimelineDemo() {
  const [selected, setSelected] = (0, import_react.useState)("2001");
  return /* @__PURE__ */ React.createElement(
    import_WavyTimeline.default,
    {
      points: wavyTimelinePoints,
      ascending: true,
      selectedId: selected,
      onSelect: setSelected
    }
  );
}
//# sourceMappingURL=WavyTimelineDemo.js.map