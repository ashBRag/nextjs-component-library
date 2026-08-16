import "../chunk-FJBZBVPE.mjs";
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
export {
  FormValidator,
  createValidationRules
};
//# sourceMappingURL=formValidations.mjs.map