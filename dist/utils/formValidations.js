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
var formValidations_exports = {};
__export(formValidations_exports, {
  FormValidator: () => FormValidator,
  createValidationRules: () => createValidationRules
});
module.exports = __toCommonJS(formValidations_exports);
class FormValidator {
  constructor(rules = {}) {
    this.rules = rules;
  }
  validateField(field, value, formData) {
    const rule = this.rules[field];
    if (!rule) return "";
    const stringValue = String(value || "");
    if (!rule.required && !stringValue.trim()) return "";
    if (rule.custom) {
      const customError = rule.custom(value, formData);
      if (customError) return customError;
    }
    if (rule.required && !stringValue.trim()) {
      return `${this.getFieldLabel(field)} is required`;
    }
    if (rule.minLength && stringValue.length < rule.minLength) {
      return `${this.getFieldLabel(field)} must be at least ${rule.minLength} characters`;
    }
    if (rule.maxLength && stringValue.length > rule.maxLength) {
      return `${this.getFieldLabel(field)} must be no more than ${rule.maxLength} characters`;
    }
    if (rule.pattern && !rule.pattern.test(stringValue)) {
      return `${this.getFieldLabel(field)} format is invalid`;
    }
    return "";
  }
  validateForm(formData) {
    const errors = {};
    let hasErrors = false;
    Object.keys(formData).forEach((key) => {
      errors[key] = "";
    });
    Object.keys(formData).forEach((field) => {
      const error = this.validateField(field, formData[field], formData);
      if (error) {
        errors[field] = error;
        hasErrors = true;
      }
    });
    return {
      isValid: !hasErrors,
      errors
    };
  }
  getFieldLabel(field) {
    const fieldStr = String(field);
    return fieldStr.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
  }
  // Update rules dynamically
  setRules(rules) {
    this.rules = rules;
  }
  // Get current rules
  getRules() {
    return this.rules;
  }
  // Add or update a single rule
  setRule(field, rule) {
    this.rules[field] = rule;
  }
  // Remove a rule
  removeRule(field) {
    delete this.rules[field];
  }
}
const createValidationRules = () => ({
  required: (message) => ({
    required: true,
    custom: (value) => {
      const stringValue = String(value || "").trim();
      return !stringValue ? message || "This field is required" : null;
    }
  }),
  email: (message) => ({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value) => {
      const stringValue = String(value || "");
      if (!stringValue) return null;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue) ? null : message || "Please enter a valid email address";
    }
  }),
  minLength: (length, message) => ({
    minLength: length,
    custom: (value) => {
      const stringValue = String(value || "");
      return stringValue.length < length ? message || `Must be at least ${length} characters` : null;
    }
  }),
  maxLength: (length, message) => ({
    maxLength: length,
    custom: (value) => {
      const stringValue = String(value || "");
      return stringValue.length > length ? message || `Must be no more than ${length} characters` : null;
    }
  }),
  pattern: (regex, message) => ({
    pattern: regex,
    custom: (value) => {
      const stringValue = String(value || "");
      if (!stringValue) return null;
      return regex.test(stringValue) ? null : message || "Invalid format";
    }
  }),
  custom: (validator) => ({
    custom: validator
  })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormValidator,
  createValidationRules
});
//# sourceMappingURL=formValidations.js.map