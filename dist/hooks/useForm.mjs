import {
  __spreadProps,
  __spreadValues
} from "../chunk-FJBZBVPE.mjs";
import { useState, useCallback, useMemo } from "react";
import { FormValidator } from "../utils/formValidations";
const useForm = (config) => {
  const {
    initialValues,
    validationRules = {},
    onSubmit,
    validateOnChange = false,
    validateOnBlur = true
  } = config;
  const [values, setValuesState] = useState(initialValues);
  const [errors, setErrorsState] = useState(() => {
    const initialErrors = {};
    Object.keys(initialValues).forEach((key) => {
      initialErrors[key] = "";
    });
    return initialErrors;
  });
  const [touched, setTouchedState] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validator = useMemo(
    () => new FormValidator(validationRules),
    [validationRules]
  );
  const isDirty = useMemo(() => {
    return Object.keys(initialValues).some(
      (key) => values[key] !== initialValues[key]
    );
  }, [values, initialValues]);
  const isValid = useMemo(() => {
    const validation = validator.validateForm(values);
    return validation.isValid;
  }, [values, validator]);
  const setValue = useCallback(
    (field, value) => {
      setValuesState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
      if (errors[field]) {
        setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: "" }));
      }
      if (validateOnChange) {
        const error = validator.validateField(field, value, values);
        if (error !== errors[field]) {
          setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: error }));
        }
      }
    },
    [errors, validateOnChange, validator, values]
  );
  const setValues = useCallback((newValues) => {
    setValuesState((prev) => __spreadValues(__spreadValues({}, prev), newValues));
  }, []);
  const setError = useCallback((field, error) => {
    setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: error }));
  }, []);
  const setErrors = useCallback((newErrors) => {
    setErrorsState((prev) => __spreadValues(__spreadValues({}, prev), newErrors));
  }, []);
  const clearError = useCallback((field) => {
    setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: "" }));
  }, []);
  const clearErrors = useCallback(() => {
    const clearedErrors = {};
    Object.keys(errors).forEach((key) => {
      clearedErrors[key] = "";
    });
    setErrorsState(clearedErrors);
  }, [errors]);
  const setTouched = useCallback(
    (field, isTouched = true) => {
      setTouchedState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: isTouched }));
    },
    []
  );
  const validateField = useCallback(
    (field) => {
      const error = validator.validateField(field, values[field], values);
      setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: error }));
      return !error;
    },
    [validator, values]
  );
  const validateForm = useCallback(() => {
    const validation = validator.validateForm(values);
    setErrorsState(validation.errors);
    return validation;
  }, [validator, values]);
  const handleSubmit = useCallback(
    async (e) => {
      if (e) {
        e.preventDefault();
      }
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
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateForm, onSubmit, values]
  );
  const reset = useCallback(
    (resetValues) => {
      const valuesToReset = resetValues || initialValues;
      setValuesState(valuesToReset);
      const clearedErrors = {};
      Object.keys(valuesToReset).forEach((key) => {
        clearedErrors[key] = "";
      });
      setErrorsState(clearedErrors);
      setTouchedState({});
      setIsSubmitting(false);
    },
    [initialValues]
  );
  const getFieldProps = useCallback(
    (field) => ({
      value: values[field],
      onChange: (value) => setValue(field, value),
      onBlur: () => {
        setTouched(field, true);
        if (validateOnBlur) {
          validateField(field);
        }
      },
      error: errors[field],
      name: String(field)
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
    getFieldProps
  };
};
export {
  useForm
};
//# sourceMappingURL=useForm.mjs.map