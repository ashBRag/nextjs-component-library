/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useMemo } from "react";
import { FormValidator } from "../utils/formValidations.js";
export const useForm = (config) => {
    const { initialValues, validationRules = {}, onSubmit, validateOnChange = false, validateOnBlur = true, } = config;
    // Initialize state
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
    // Create validator instance
    const validator = useMemo(() => new FormValidator(validationRules), [validationRules]);
    // Computed values
    const isDirty = useMemo(() => {
        return Object.keys(initialValues).some((key) => values[key] !== initialValues[key]);
    }, [values, initialValues]);
    const isValid = useMemo(() => {
        const validation = validator.validateForm(values);
        return validation.isValid;
    }, [values, validator]);
    // Field operations
    const setValue = useCallback((field, value) => {
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
    }, [errors, validateOnChange, validator, values]);
    const setValues = useCallback((newValues) => {
        setValuesState((prev) => ({ ...prev, ...newValues }));
    }, []);
    const setError = useCallback((field, error) => {
        setErrorsState((prev) => ({ ...prev, [field]: error }));
    }, []);
    const setErrors = useCallback((newErrors) => {
        setErrorsState((prev) => ({ ...prev, ...newErrors }));
    }, []);
    const clearError = useCallback((field) => {
        setErrorsState((prev) => ({ ...prev, [field]: "" }));
    }, []);
    const clearErrors = useCallback(() => {
        const clearedErrors = {};
        Object.keys(errors).forEach((key) => {
            clearedErrors[key] = "";
        });
        setErrorsState(clearedErrors);
    }, [errors]);
    const setTouched = useCallback((field, isTouched = true) => {
        setTouchedState((prev) => ({ ...prev, [field]: isTouched }));
    }, []);
    // Validation operations
    const validateField = useCallback((field) => {
        const error = validator.validateField(field, values[field], values);
        setErrorsState((prev) => ({ ...prev, [field]: error }));
        return !error;
    }, [validator, values]);
    const validateForm = useCallback(() => {
        const validation = validator.validateForm(values);
        setErrorsState(validation.errors);
        return validation;
    }, [validator, values]);
    // Form submission
    const handleSubmit = useCallback(async (e) => {
        if (e) {
            e.preventDefault();
        }
        // Validate form
        const validation = validateForm();
        if (!validation.isValid) {
            return;
        }
        if (!onSubmit)
            return;
        setIsSubmitting(true);
        try {
            await onSubmit(values);
        }
        catch (error) {
            console.error("Form submission error:", error);
            throw error; // Re-throw to allow parent to handle
        }
        finally {
            setIsSubmitting(false);
        }
    }, [validateForm, onSubmit, values]);
    // Reset form
    const reset = useCallback((resetValues) => {
        const valuesToReset = resetValues || initialValues;
        setValuesState(valuesToReset);
        // Clear errors
        const clearedErrors = {};
        Object.keys(valuesToReset).forEach((key) => {
            clearedErrors[key] = "";
        });
        setErrorsState(clearedErrors);
        // Clear touched
        setTouchedState({});
        setIsSubmitting(false);
    }, [initialValues]);
    // Get field props helper
    const getFieldProps = useCallback((field) => ({
        value: values[field],
        onChange: (value) => setValue(field, value),
        onBlur: () => {
            setTouched(field, true);
            if (validateOnBlur) {
                validateField(field);
            }
        },
        error: errors[field],
        name: String(field),
    }), [values, setValue, setTouched, validateOnBlur, validateField, errors]);
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
//# sourceMappingURL=useForm.js.map