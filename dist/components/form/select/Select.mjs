"use client";
import "../../../chunk-FJBZBVPE.mjs";
import React from "react";
import "../form.base.css";
const Select = ({
  label,
  options,
  value,
  onChange,
  error,
  className = ""
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: `select-field ${className}` }, /* @__PURE__ */ React.createElement("label", { className: "select-field__label" }, /* @__PURE__ */ React.createElement("span", { className: "select-field__label-prefix", "aria-hidden": "true" }), label), /* @__PURE__ */ React.createElement(
    "select",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      className: `select-field__input ${error ? "select-field__input--error" : ""}`
    },
    options.map((opt) => /* @__PURE__ */ React.createElement("option", { key: opt.value, value: opt.value }, opt.label))
  ), error && /* @__PURE__ */ React.createElement("p", { className: "select-field__error" }, error));
};
export {
  Select
};
//# sourceMappingURL=Select.mjs.map