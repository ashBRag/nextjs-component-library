"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../form.base.css";
export const Select = ({ label, options, value, onChange, error, className = "", }) => {
    return (_jsxs("div", { className: `select-field ${className}`, children: [_jsxs("label", { className: "select-field__label", children: [_jsx("span", { className: "select-field__label-prefix", "aria-hidden": "true" }), label] }), _jsx("select", { value: value, onChange: (e) => onChange(e.target.value), className: `select-field__input ${error ? "select-field__input--error" : ""}`, children: options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }), error && _jsx("p", { className: "select-field__error", children: error })] }));
};
//# sourceMappingURL=Select.js.map