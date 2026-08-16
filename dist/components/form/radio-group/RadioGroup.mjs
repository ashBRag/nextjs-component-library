"use client";
import "../../../chunk-FJBZBVPE.mjs";
import React from "react";
import { CornerBrackets } from "../../corner/CornerBrackets";
import "../form.base.css";
const RadioGroup = ({
  label,
  options,
  value,
  onChange,
  error,
  name = "radio-group",
  className = ""
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: `radio-group ${className}` }, /* @__PURE__ */ React.createElement("span", { className: "radio-group__label" }, /* @__PURE__ */ React.createElement("span", { className: "radio-group__label-prefix", "aria-hidden": "true" }), label), /* @__PURE__ */ React.createElement("div", { className: "radio-group__options" }, options.map((option) => {
    const isSelected = value === option.value;
    return /* @__PURE__ */ React.createElement("label", { key: option.value, className: "radio-group__item" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "radio",
        name,
        value: option.value,
        checked: isSelected,
        onChange: (e) => onChange(e.target.value),
        className: "radio-group__input"
      }
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `radio-group__option ${isSelected ? "radio-group__option--selected" : ""}`
      },
      isSelected && /* @__PURE__ */ React.createElement(CornerBrackets, { wrapped: true, color: "accent" }),
      /* @__PURE__ */ React.createElement("div", { className: "radio-group__option-inner" }, /* @__PURE__ */ React.createElement("div", { className: "radio-group__option-label" }, option.label), option.description && /* @__PURE__ */ React.createElement("div", { className: "radio-group__option-description" }, option.description))
    ));
  })), error && /* @__PURE__ */ React.createElement("p", { className: "radio-group__error" }, error));
};
export {
  RadioGroup
};
//# sourceMappingURL=RadioGroup.mjs.map