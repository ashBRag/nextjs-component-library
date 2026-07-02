/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useCallback, useMemo } from "react";
import {
  UseFormConfig,
  UseFormReturn,
  FormErrors,
  FormValidationResult,
  FieldProps,
} from "../types/form";
import { FormValidator } from "../utils/formValidations";

export const useForm = <T extends Record<string, any>>(
  config: UseFormConfig<T>
): UseFormReturn<T> => {
  const {
    initialValues,
    validationRules = {},
    onSubmit,
    validateOnChange = false,
    validateOnBlur = true,
  } = config;

  // Initialize state
  const [values, setValuesState] = useState<T>(initialValues);
  const [errors, setErrorsState] = useState<FormErrors<T>>(() => {
    const initialErrors = {} as FormErrors<T>;
    Object.keys(initialValues).forEach((key) => {
      initialErrors[key as keyof T] = "";
    });
    return initialErrors;
  });
  const [touched, setTouchedState] = useState<
    Partial<Record<keyof T, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Create validator instance
  const validator = useMemo(
    () => new FormValidator<T>(validationRules),
    [validationRules]
  );

  // Computed values
  const isDirty = useMemo(() => {
    return Object.keys(initialValues).some(
      (key) => values[key as keyof T] !== initialValues[key as keyof T]
    );
  }, [values, initialValues]);

  const isValid = useMemo(() => {
    const validation = validator.validateForm(values);
    return validation.isValid;
  }, [values, validator]);

  // Field operations
  const setValue = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setValuesState((prev) => ({ ...prev, [field]: value }));

      // Clear error when value changes
      if (errors[field]) {
        setErrorsState((prev) => ({ ...prev, [field]: "" }));
      }

      // Validate on change if enabled
      if (validateOnChange) {
        const error = validator.validateField(field, value, values);
        if (error !== errors[field]) {
          setErrorsState((prev) => ({ ...prev, [field]: error }));
        }
      }
    },
    [errors, validateOnChange, validator, values]
  );

  const setValues = useCallback((newValues: Partial<T>) => {
    setValuesState((prev) => ({ ...prev, ...newValues }));
  }, []);

  const setError = useCallback((field: keyof T, error: string) => {
    setErrorsState((prev) => ({ ...prev, [field]: error }));
  }, []);

  const setErrors = useCallback((newErrors: Partial<FormErrors<T>>) => {
    setErrorsState((prev) => ({ ...prev, ...newErrors }));
  }, []);

  const clearError = useCallback((field: keyof T) => {
    setErrorsState((prev) => ({ ...prev, [field]: "" }));
  }, []);

  const clearErrors = useCallback(() => {
    const clearedErrors = {} as FormErrors<T>;
    Object.keys(errors).forEach((key) => {
      clearedErrors[key as keyof T] = "";
    });
    setErrorsState(clearedErrors);
  }, [errors]);

  const setTouched = useCallback(
    (field: keyof T, isTouched: boolean = true) => {
      setTouchedState((prev) => ({ ...prev, [field]: isTouched }));
    },
    []
  );

  // Validation operations
  const validateField = useCallback(
    (field: keyof T): boolean => {
      const error = validator.validateField(field, values[field], values);
      setErrorsState((prev) => ({ ...prev, [field]: error }));
      return !error;
    },
    [validator, values]
  );

  const validateForm = useCallback((): FormValidationResult<T> => {
    const validation = validator.validateForm(values);
    setErrorsState(validation.errors);
    return validation;
  }, [validator, values]);

  // Form submission
  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) {
        e.preventDefault();
      }

      // Validate form
      const validation = validateForm();
      if (!validation.isValid) {
        return;
      }

      if (!onSubmit) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Form submission error:", error);
        throw error; // Re-throw to allow parent to handle
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateForm, onSubmit, values]
  );

  // Reset form
  const reset = useCallback(
    (resetValues?: T) => {
      const valuesToReset = resetValues || initialValues;
      setValuesState(valuesToReset);

      // Clear errors
      const clearedErrors = {} as FormErrors<T>;
      Object.keys(valuesToReset).forEach((key) => {
        clearedErrors[key as keyof T] = "";
      });
      setErrorsState(clearedErrors);

      // Clear touched
      setTouchedState({});
      setIsSubmitting(false);
    },
    [initialValues]
  );

  // Get field props helper
  const getFieldProps = useCallback(
    (field: keyof T): FieldProps<T[keyof T]> => ({
      value: values[field],
      onChange: (value: T[keyof T]) => setValue(field, value),
      onBlur: () => {
        setTouched(field, true);
        if (validateOnBlur) {
          validateField(field);
        }
      },
      error: errors[field],
      name: String(field),
    }),
    [values, setValue, setTouched, validateOnBlur, validateField, errors]
  );

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    isDirty,
    touched,
    setValue,
    setValues,
    setError,
    setErrors,
    clearError,
    clearErrors,
    validateField,
    validateForm,
    handleSubmit,
    reset,
    setTouched,
    getFieldProps,
  };
};
