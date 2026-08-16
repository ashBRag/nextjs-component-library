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
var useScroll_exports = {};
__export(useScroll_exports, {
  useScrollToElement: () => useScrollToElement
});
module.exports = __toCommonJS(useScroll_exports);
var import_react = require("react");
const useScrollToElement = () => {
  const scrollToElement = (0, import_react.useCallback)(
    (elementId, options = {}) => {
      const { behavior = "smooth", block = "start", offset = 150 } = options;
      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let targetPosition = elementRect.top + scrollTop - offset;
      if (block === "center") {
        targetPosition -= window.innerHeight / 2 - elementRect.height / 2;
      } else if (block === "end") {
        targetPosition -= window.innerHeight - elementRect.height;
      }
      window.scrollTo({
        top: targetPosition,
        behavior
      });
    },
    []
  );
  const scrollToTop = (0, import_react.useCallback)(
    (behavior = "smooth") => {
      window.scrollTo({
        top: 0,
        behavior
      });
    },
    []
  );
  const scrollToBottom = (0, import_react.useCallback)(
    (behavior = "smooth") => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior
      });
    },
    []
  );
  const scrollByAmount = (0, import_react.useCallback)(
    (amount, behavior = "smooth") => {
      window.scrollBy({
        top: amount,
        behavior
      });
    },
    []
  );
  const scrollToViewportBottom = (0, import_react.useCallback)(
    (behavior = "smooth") => {
      const currentScrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const bottomOfCurrentView = currentScrollY + viewportHeight;
      window.scrollTo({
        top: bottomOfCurrentView,
        behavior
      });
    },
    []
  );
  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollByAmount,
    scrollToViewportBottom
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useScrollToElement
});
//# sourceMappingURL=useScroll.js.map