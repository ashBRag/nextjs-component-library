"use strict";
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
var utils_exports = {};
__export(utils_exports, {
  capitalizeFirstLetter: () => capitalizeFirstLetter,
  scrollToBottom: () => scrollToBottom,
  scrollToElement: () => scrollToElement
});
module.exports = __toCommonJS(utils_exports);
function capitalizeFirstLetter(str = "") {
  var _a;
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + ((_a = str.slice(1)) == null ? void 0 : _a.toLowerCase());
}
const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
const scrollToBottom = (gapPercent = 10) => {
  const gapPixels = window.innerHeight * gapPercent / 100;
  window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight - gapPixels,
    behavior: "smooth"
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capitalizeFirstLetter,
  scrollToBottom,
  scrollToElement
});
//# sourceMappingURL=utils.js.map