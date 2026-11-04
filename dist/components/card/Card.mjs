import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import {
  Typography
} from "../typography/Typography";
import "./card.base.css";
const titleVariant = {
  sm: "h4",
  compact: "h4",
  md: "h4",
  lg: "h3"
};
function Card({
  id,
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  titleColor = "default",
  subtitleColor = "primary",
  size = "md",
  showBorder = true,
  showCorners = false,
  shadow = "none",
  glass = "none",
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
    glass !== "none" && `card--glass card--glass-${glass}`,
    className
  ].filter(Boolean).join(" ");
  const bodyCls = `card__body card__body--${size}`;
  return /* @__PURE__ */ React.createElement("div", { className: `card__corner-wrapper ${className}`, id }, showCorners && /* @__PURE__ */ React.createElement(
    CornerBrackets,
    {
      corners: ["tl", "br"],
      size: "lg",
      inset: "outside",
      color: "nav-active"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: cardCls, onClick: clickable ? onClick : void 0 }, /* @__PURE__ */ React.createElement("div", { className: bodyCls }, typeof title === "string" ? /* @__PURE__ */ React.createElement(
    Typography,
    {
      variant: titleVariant[size],
      color: titleColor,
      className: titleClassName
    },
    title
  ) : title, subtitle && /* @__PURE__ */ React.createElement(
    Typography,
    {
      variant: "body",
      color: subtitleColor,
      className: subtitleClassName
    },
    subtitle
  ), showDivider && children && /* @__PURE__ */ React.createElement("hr", { className: "card__divider" }), children && /* @__PURE__ */ React.createElement("div", { className: "card__children" }, children))));
}
export {
  Card
};
//# sourceMappingURL=Card.mjs.map