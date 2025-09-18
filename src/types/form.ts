// Generic form types
export interface ValidationRule<T = any> {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: T, formData?: Record<string, any>) => string | null;
}

export type ValidationRules<T extends Record<string, any>> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

export type FormErrors<T extends Record<string, any>> = {
  [K in keyof T]: string;
};

export interface FormValidationResult<T extends Record<string, any>> {
  isValid: boolean;
  errors: FormErrors<T>;
  warnings?: string[];
}

export interface UseFormConfig<T extends Record<string, any>> {
  initialValues: T;
  validationRules?: ValidationRules<T>;
  onSubmit?: (data: T) => Promise<void> | void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface UseFormReturn<T extends Record<string, any>> {
  values: T;
  errors: FormErrors<T>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
  touched: Partial<Record<keyof T, boolean>>;
  setValue: (field: keyof T, value: T[keyof T]) => void;
  setValues: (values: Partial<T>) => void;
  setError: (field: keyof T, error: string) => void;
  setErrors: (errors: Partial<FormErrors<T>>) => void;
  clearError: (field: keyof T) => void;
  clearErrors: () => void;
  validateField: (field: keyof T) => boolean;
  validateForm: () => FormValidationResult<T>;
  handleSubmit: (e?: React.FormEvent) => Promise<void>;
  reset: (values?: T) => void;
  setTouched: (field: keyof T, touched?: boolean) => void;
  getFieldProps: (field: keyof T) => FieldProps<T[keyof T]>;
}

export interface FieldProps<T = any> {
  value: T;
  onChange: (value: T) => void;
  onBlur?: () => void;
  error?: string;
  name: string;
}

// Form submission types
export interface SubmissionResult {
  success: boolean;
  message?: string;
  data?: any;
  errors?: Record<string, string>;
}

// Toast integration
export interface ToastMethods {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
}

export interface UseFormWithToastConfig<T extends Record<string, any>>
  extends UseFormConfig<T> {
  toast?: ToastMethods;
  successMessage?: string;
  errorMessage?: string;
}
