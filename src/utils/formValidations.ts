/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ValidationRules,
  FormErrors,
  FormValidationResult,
  ValidationRule,
} from "@/types/form";

export class FormValidator<T extends Record<string, any>> {
  private rules: ValidationRules<T>;

  constructor(rules: ValidationRules<T> = {}) {
    this.rules = rules;
  }

  validateField(field: keyof T, value: T[keyof T], formData?: T): string {
    const rule = this.rules[field];
    if (!rule) return "";

    // Convert value to string for length and pattern checks
    const stringValue = String(value || "");

    // Skip validation for optional fields that are empty
    if (!rule.required && !stringValue.trim()) return "";

    // Custom validation takes precedence
    if (rule.custom) {
      const customError = rule.custom(value, formData);
      if (customError) return customError;
    }

    // Required field validation
    if (rule.required && !stringValue.trim()) {
      return `${this.getFieldLabel(field)} is required`;
    }

    // Min length validation
    if (rule.minLength && stringValue.length < rule.minLength) {
      return `${this.getFieldLabel(field)} must be at least ${
        rule.minLength
      } characters`;
    }

    // Max length validation
    if (rule.maxLength && stringValue.length > rule.maxLength) {
      return `${this.getFieldLabel(field)} must be no more than ${
        rule.maxLength
      } characters`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(stringValue)) {
      return `${this.getFieldLabel(field)} format is invalid`;
    }

    return "";
  }

  validateForm(formData: T): FormValidationResult<T> {
    const errors = {} as FormErrors<T>;
    let hasErrors = false;

    // Initialize all error fields
    Object.keys(formData).forEach((key) => {
      errors[key as keyof T] = "";
    });

    // Validate each field
    (Object.keys(formData) as Array<keyof T>).forEach((field) => {
      const error = this.validateField(field, formData[field], formData);
      if (error) {
        errors[field] = error;
        hasErrors = true;
      }
    });

    return {
      isValid: !hasErrors,
      errors,
    };
  }

  private getFieldLabel(field: keyof T): string {
    // Convert camelCase to Title Case
    const fieldStr = String(field);
    return fieldStr
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  }

  // Update rules dynamically
  setRules(rules: ValidationRules<T>): void {
    this.rules = rules;
  }

  // Get current rules
  getRules(): ValidationRules<T> {
    return this.rules;
  }

  // Add or update a single rule
  setRule(field: keyof T, rule: ValidationRule<T[keyof T]>): void {
    this.rules[field] = rule;
  }

  // Remove a rule
  removeRule(field: keyof T): void {
    delete this.rules[field];
  }
}

// Utility function to create common validation rules
export const createValidationRules = <T extends Record<string, any>>(): {
  required: (message?: string) => ValidationRule<T[keyof T]>;
  email: (message?: string) => ValidationRule<string>;
  minLength: (length: number, message?: string) => ValidationRule<string>;
  maxLength: (length: number, message?: string) => ValidationRule<string>;
  pattern: (regex: RegExp, message?: string) => ValidationRule<string>;
  custom: (
    validator: (value: T[keyof T], formData?: T) => string | null
  ) => ValidationRule<T[keyof T]>;
} => ({
  required: (message?: string) => ({
    required: true,
    custom: (value) => {
      const stringValue = String(value || "").trim();
      return !stringValue ? message || "This field is required" : null;
    },
  }),

  email: (message?: string) => ({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value) => {
      const stringValue = String(value || "");
      if (!stringValue) return null;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue)
        ? null
        : message || "Please enter a valid email address";
    },
  }),

  minLength: (length: number, message?: string) => ({
    minLength: length,
    custom: (value) => {
      const stringValue = String(value || "");
      return stringValue.length < length
        ? message || `Must be at least ${length} characters`
        : null;
    },
  }),

  maxLength: (length: number, message?: string) => ({
    maxLength: length,
    custom: (value) => {
      const stringValue = String(value || "");
      return stringValue.length > length
        ? message || `Must be no more than ${length} characters`
        : null;
    },
  }),

  pattern: (regex: RegExp, message?: string) => ({
    pattern: regex,
    custom: (value) => {
      const stringValue = String(value || "");
      if (!stringValue) return null;
      return regex.test(stringValue) ? null : message || "Invalid format";
    },
  }),

  custom: (validator: (value: T[keyof T], formData?: T) => string | null) => ({
    custom: validator,
  }),
});
