import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./chip.base.css";
function Chip({
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  onRemove,
  className = "",
  children
}) {
  const cls = [
    "chip",
    `chip--${variant}`,
    `chip--${size}`,
    disabled && "chip--disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("span", { className: cls }, icon && /* @__PURE__ */ React.createElement("span", { className: "chip__icon" }, icon), /* @__PURE__ */ React.createElement("span", { className: "chip__label" }, children), onRemove && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "chip__remove",
      "aria-label": "Remove",
      disabled,
      onClick: onRemove
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    )
  ));
}
export {
  Chip
};
//# sourceMappingURL=Chip.mjs.map