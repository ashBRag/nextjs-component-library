import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import {
  Typography
} from "../typography/Typography.mjs";
import "./button.base.css";
const labelVariant = {
  sm: "body-sm",
  md: "body",
  lg: "body-lg"
};
function Button({
  variant = "outline",
  color = "primary",
  size = "md",
  iconBefore,
  iconAfter,
  disabled = false,
  className = "",
  children,
  onClick,
  "aria-label": ariaLabel
}) {
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    `btn--color-${color}`,
    className
  ].filter(Boolean).join(" ");
  const content = /* @__PURE__ */ React.createElement(React.Fragment, null, iconBefore && /* @__PURE__ */ React.createElement("span", { className: "btn__icon btn__icon--before" }, iconBefore), children && /* @__PURE__ */ React.createElement(
    Typography,
    {
      as: "span",
      variant: labelVariant[size],
      color: "inherit",
      className: "btn__label"
    },
    children
  ), iconAfter && /* @__PURE__ */ React.createElement("span", { className: "btn__icon btn__icon--after" }, iconAfter));
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      disabled,
      className: cls,
      "aria-label": ariaLabel
    },
    content
  );
}
export {
  Button
};
//# sourceMappingURL=Button.mjs.map