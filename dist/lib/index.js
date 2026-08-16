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
var lib_exports = {};
__export(lib_exports, {
  ApiError: () => import_api.ApiError,
  capitalizeFirstLetter: () => import_utils.capitalizeFirstLetter,
  fetchApi: () => import_api.fetchApi,
  scrollToBottom: () => import_utils.scrollToBottom,
  scrollToElement: () => import_utils.scrollToElement
});
module.exports = __toCommonJS(lib_exports);
var import_api = require("./api");
var import_utils = require("./utils");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiError,
  capitalizeFirstLetter,
  fetchApi,
  scrollToBottom,
  scrollToElement
});
//# sourceMappingURL=index.js.map