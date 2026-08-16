import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import "./card.base.css";
function Card({
  id,
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  size = "md",
  showBorder = true,
  showCorners = true,
  shadow = "none",
  showDivider = false,
  children,
  clickable = false,
  onClick
}) {
  const cardCls = [
    "card",
    showBorder && "card--bordered",
    clickable && "card--clickable",
    shadow !== "none" && `card--shadow-${shadow}`,
    className
  ].filter(Boolean).join(" ");
  const bodyCls = `card__body--${size}`;
  const titleCls = `card__title card__title--${size} ${titleClassName}`.trim();
  return /* @__PURE__ */ React.createElement("div", { className: `card__corner-wrapper ${className}`, id }, showCorners && /* @__PURE__ */ React.createElement(
    CornerBrackets,
    {
      corners: ["tl", "br"],
      size: "lg",
      inset: "outside",
      color: "nav-active"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: cardCls, onClick: clickable ? onClick : void 0 }, /* @__PURE__ */ React.createElement("div", { className: bodyCls }, typeof title === "string" ? /* @__PURE__ */ React.createElement("h3", { className: titleCls }, title) : title, subtitle && /* @__PURE__ */ React.createElement("h4", { className: `card__subtitle ${subtitleClassName}` }, subtitle), showDivider && children && /* @__PURE__ */ React.createElement("hr", { className: "card__divider" }), children && /* @__PURE__ */ React.createElement("div", { className: "card__children" }, children))));
}
export {
  Card
};
//# sourceMappingURL=Card.mjs.map