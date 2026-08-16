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
var TimelineDemo_exports = {};
__export(TimelineDemo_exports, {
  default: () => TimelineDemo
});
module.exports = __toCommonJS(TimelineDemo_exports);
var import_Timeline = __toESM(require("./Timeline"));
const timelineItems = [
  {
    id: "1",
    title: "Project Started",
    date: "Jan 2024",
    description: "Initial project setup and planning."
  },
  {
    id: "2",
    title: "First Release",
    date: "Mar 2024",
    badge: { text: "v1.0", variant: "success" },
    description: "Launched the first version."
  },
  {
    id: "3",
    title: "Major Update",
    date: "Jun 2024",
    badge: { text: "v2.0", variant: "primary" },
    description: "Added new features and improvements."
  }
];
function TimelineDemo() {
  return /* @__PURE__ */ React.createElement(import_Timeline.default, { items: timelineItems, animated: true });
}
//# sourceMappingURL=TimelineDemo.js.map