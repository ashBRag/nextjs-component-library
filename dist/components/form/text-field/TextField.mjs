"use client";
import "../../../chunk-FJBZBVPE.mjs";
import React from "react";
import "../form.base.css";
const TextField = ({
  label = "",
  type = "text",
  value = "",
  onChange,
  error,
  placeholder = "",
  rows,
  className = ""
}) => {
  const isTextarea = Boolean(rows && rows > 0);
  const fieldMod = error ? "text-field--error" : "";
  return /* @__PURE__ */ React.createElement("div", { className: `text-field ${className}` }, label && /* @__PURE__ */ React.createElement("label", { className: "text-field__label" }, /* @__PURE__ */ React.createElement("span", { className: "text-field__label-prefix", "aria-hidden": "true" }), label), isTextarea ? /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows,
      value,
      onChange: (e) => onChange(e.target.value),
      className: `text-field__input text-field__input--textarea ${fieldMod}`,
      placeholder
    }
  ) : /* @__PURE__ */ React.createElement(
    "input",
    {
      type,
      value,
      onChange: (e) => onChange(e.target.value),
      className: `text-field__input ${fieldMod}`,
      placeholder
    }
  ), error && /* @__PURE__ */ React.createElement("p", { className: "text-field__error" }, error));
};
export {
  TextField
};
//# sourceMappingURL=TextField.mjs.map