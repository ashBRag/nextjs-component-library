"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var useForm_exports = {};
__export(useForm_exports, {
  useForm: () => useForm
});
module.exports = __toCommonJS(useForm_exports);
var import_react = require("react");
var import_formValidations = require("../utils/formValidations");
const useForm = (config) => {
  const {
    initialValues,
    validationRules = {},
    onSubmit,
    validateOnChange = false,
    validateOnBlur = true
  } = config;
  const [values, setValuesState] = (0, import_react.useState)(initialValues);
  const [errors, setErrorsState] = (0, import_react.useState)(() => {
    const initialErrors = {};
    Object.keys(initialValues).forEach((key) => {
      initialErrors[key] = "";
    });
    return initialErrors;
  });
  const [touched, setTouchedState] = (0, import_react.useState)({});
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const validator = (0, import_react.useMemo)(
    () => new import_formValidations.FormValidator(validationRules),
    [validationRules]
  );
  const isDirty = (0, import_react.useMemo)(() => {
    return Object.keys(initialValues).some(
      (key) => values[key] !== initialValues[key]
    );
  }, [values, initialValues]);
  const isValid = (0, import_react.useMemo)(() => {
    const validation = validator.validateForm(values);
    return validation.isValid;
  }, [values, validator]);
  const setValue = (0, import_react.useCallback)(
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
  const setValues = (0, import_react.useCallback)((newValues) => {
    setValuesState((prev) => __spreadValues(__spreadValues({}, prev), newValues));
  }, []);
  const setError = (0, import_react.useCallback)((field, error) => {
    setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: error }));
  }, []);
  const setErrors = (0, import_react.useCallback)((newErrors) => {
    setErrorsState((prev) => __spreadValues(__spreadValues({}, prev), newErrors));
  }, []);
  const clearError = (0, import_react.useCallback)((field) => {
    setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: "" }));
  }, []);
  const clearErrors = (0, import_react.useCallback)(() => {
    const clearedErrors = {};
    Object.keys(errors).forEach((key) => {
      clearedErrors[key] = "";
    });
    setErrorsState(clearedErrors);
  }, [errors]);
  const setTouched = (0, import_react.useCallback)(
    (field, isTouched = true) => {
      setTouchedState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: isTouched }));
    },
    []
  );
  const validateField = (0, import_react.useCallback)(
    (field) => {
      const error = validator.validateField(field, values[field], values);
      setErrorsState((prev) => __spreadProps(__spreadValues({}, prev), { [field]: error }));
      return !error;
    },
    [validator, values]
  );
  const validateForm = (0, import_react.useCallback)(() => {
    const validation = validator.validateForm(values);
    setErrorsState(validation.errors);
    return validation;
  }, [validator, values]);
  const handleSubmit = (0, import_react.useCallback)(
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
  const reset = (0, import_react.useCallback)(
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
  const getFieldProps = (0, import_react.useCallback)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useForm
});
//# sourceMappingURL=useForm.js.map