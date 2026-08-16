import { ValidationRules, FormValidationResult, ValidationRule } from '../types/form.js';

declare class FormValidator<T extends Record<string, any>> {
    private rules;
    constructor(rules?: ValidationRules<T>);
    validateField(field: keyof T, value: T[keyof T], formData?: T): string;
    validateForm(formData: T): FormValidationResult<T>;
    private getFieldLabel;
    setRules(rules: ValidationRules<T>): void;
    getRules(): ValidationRules<T>;
    setRule(field: keyof T, rule: ValidationRule<T[keyof T]>): void;
    removeRule(field: keyof T): void;
}
declare const createValidationRules: <T extends Record<string, any>>() => {
    required: (message?: string) => ValidationRule<T[keyof T]>;
    email: (message?: string) => ValidationRule<string>;
    minLength: (length: number, message?: string) => ValidationRule<string>;
    maxLength: (length: number, message?: string) => ValidationRule<string>;
    pattern: (regex: RegExp, message?: string) => ValidationRule<string>;
    custom: (validator: (value: T[keyof T], formData?: T) => string | null) => ValidationRule<T[keyof T]>;
};

export { FormValidator, createValidationRules };
