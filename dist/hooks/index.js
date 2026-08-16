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
var hooks_exports = {};
__export(hooks_exports, {
  useForm: () => import_useForm.useForm,
  useScrollToElement: () => import_useScroll.useScrollToElement,
  useTheme: () => import_useTheme.useTheme,
  useToast: () => import_useToast.useToast
});
module.exports = __toCommonJS(hooks_exports);
var import_useForm = require("./useForm");
var import_useScroll = require("./useScroll");
var import_useTheme = require("./useTheme");
var import_useToast = require("./useToast");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useForm,
  useScrollToElement,
  useTheme,
  useToast
});
//# sourceMappingURL=index.js.map