/* eslint-disable @typescript-eslint/no-explicit-any */
export class FormValidator {
    constructor(rules = {}) {
        this.rules = rules;
    }
    validateField(field, value, formData) {
        const rule = this.rules[field];
        if (!rule)
            return "";
        // Convert value to string for length and pattern checks
        const stringValue = String(value || "");
        // Skip validation for optional fields that are empty
        if (!rule.required && !stringValue.trim())
            return "";
        // Custom validation takes precedence
        if (rule.custom) {
            const customError = rule.custom(value, formData);
            if (customError)
                return customError;
        }
        // Required field validation
        if (rule.required && !stringValue.trim()) {
            return `${this.getFieldLabel(field)} is required`;
        }
        // Min length validation
        if (rule.minLength && stringValue.length < rule.minLength) {
            return `${this.getFieldLabel(field)} must be at least ${rule.minLength} characters`;
        }
        // Max length validation
        if (rule.maxLength && stringValue.length > rule.maxLength) {
            return `${this.getFieldLabel(field)} must be no more than ${rule.maxLength} characters`;
        }
        // Pattern validation
        if (rule.pattern && !rule.pattern.test(stringValue)) {
            return `${this.getFieldLabel(field)} format is invalid`;
        }
        return "";
    }
    validateForm(formData) {
        const errors = {};
        let hasErrors = false;
        // Initialize all error fields
        Object.keys(formData).forEach((key) => {
            errors[key] = "";
        });
        // Validate each field
        Object.keys(formData).forEach((field) => {
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
    getFieldLabel(field) {
        // Convert camelCase to Title Case
        const fieldStr = String(field);
        return fieldStr
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
            .trim();
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
// Utility function to create common validation rules
export const createValidationRules = () => ({
    required: (message) => ({
        required: true,
        custom: (value) => {
            const stringValue = String(value || "").trim();
            return !stringValue ? message || "This field is required" : null;
        },
    }),
    email: (message) => ({
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        custom: (value) => {
            const stringValue = String(value || "");
            if (!stringValue)
                return null;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue)
                ? null
                : message || "Please enter a valid email address";
        },
    }),
    minLength: (length, message) => ({
        minLength: length,
        custom: (value) => {
            const stringValue = String(value || "");
            return stringValue.length < length
                ? message || `Must be at least ${length} characters`
                : null;
        },
    }),
    maxLength: (length, message) => ({
        maxLength: length,
        custom: (value) => {
            const stringValue = String(value || "");
            return stringValue.length > length
                ? message || `Must be no more than ${length} characters`
                : null;
        },
    }),
    pattern: (regex, message) => ({
        pattern: regex,
        custom: (value) => {
            const stringValue = String(value || "");
            if (!stringValue)
                return null;
            return regex.test(stringValue) ? null : message || "Invalid format";
        },
    }),
    custom: (validator) => ({
        custom: validator,
    }),
});
//# sourceMappingURL=formValidations.js.map