"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../form.base.css";
export const TextField = ({ label = "", type = "text", value = "", onChange, error, placeholder = "", rows, className = "", }) => {
    const isTextarea = Boolean(rows && rows > 0);
    const fieldMod = error ? "text-field--error" : "";
    return (_jsxs("div", { className: `text-field ${className}`, children: [label && (_jsxs("label", { className: "text-field__label", children: [_jsx("span", { className: "text-field__label-prefix", "aria-hidden": "true" }), label] })), isTextarea ? (_jsx("textarea", { rows: rows, value: value, onChange: (e) => onChange(e.target.value), className: `text-field__input text-field__input--textarea ${fieldMod}`, placeholder: placeholder })) : (_jsx("input", { type: type, value: value, onChange: (e) => onChange(e.target.value), className: `text-field__input ${fieldMod}`, placeholder: placeholder })), error && _jsx("p", { className: "text-field__error", children: error })] }));
};
//# sourceMappingURL=TextField.js.map