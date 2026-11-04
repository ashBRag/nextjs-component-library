"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CornerBrackets } from "../../corner/CornerBrackets.js";
import "../form.base.css";
export const RadioGroup = ({ label, options, value, onChange, error, name = "radio-group", className = "", }) => {
    return (_jsxs("div", { className: `radio-group ${className}`, children: [_jsxs("span", { className: "radio-group__label", children: [_jsx("span", { className: "radio-group__label-prefix", "aria-hidden": "true" }), label] }), _jsx("div", { className: "radio-group__options", children: options.map((option) => {
                    const isSelected = value === option.value;
                    return (_jsxs("label", { className: "radio-group__item", children: [_jsx("input", { type: "radio", name: name, value: option.value, checked: isSelected, onChange: (e) => onChange(e.target.value), className: "radio-group__input" }), _jsxs("div", { className: `radio-group__option ${isSelected ? "radio-group__option--selected" : ""}`, children: [isSelected && _jsx(CornerBrackets, { wrapped: true, color: "primary" }), _jsxs("div", { className: "radio-group__option-inner", children: [_jsx("div", { className: "radio-group__option-label", children: option.label }), option.description && (_jsx("div", { className: "radio-group__option-description", children: option.description }))] })] })] }, option.value));
                }) }), error && _jsx("p", { className: "radio-group__error", children: error })] }));
};
//# sourceMappingURL=RadioGroup.js.map