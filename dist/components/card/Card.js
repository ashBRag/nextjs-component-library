import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CornerBrackets } from "../corner/CornerBrackets.js";
import { Typography, } from "../typography/Typography.js";
import "./card.base.css";
/*
  A versatile Card component that can be used to display content in a structured and visually appealing way.
   It supports various sizes, optional cover images, and customizable styles.

  @param {CardProps} props - The props for the Card component, including title, subtitle, description, content, and styling options.
  @return {JSX.Element} The rendered Card component.
  @example
    <Card
      title="Card Title"
      subtitle="Card Subtitle"
      description="This is a description of the card."
      content={<p>Additional content can go here.</p>}
      size="lg"
      showBorder={true}
      showCorners={true}
      clickable={true}
      onClick={() => console.log("Card clicked!")}
    />
  
 */
const titleVariant = {
    sm: "h4",
    compact: "h4",
    md: "h4",
    lg: "h3",
};
export function Card({ id, title, subtitle, className = "", titleClassName = "", subtitleClassName = "", titleColor = "default", subtitleColor = "primary", size = "md", showBorder = true, showCorners = false, shadow = "none", glass = "none", showDivider = false, children, clickable = false, onClick, }) {
    const cardCls = [
        "card",
        showBorder && "card--bordered",
        clickable && "card--clickable",
        shadow !== "none" && `card--shadow-${shadow}`,
        glass !== "none" && `card--glass card--glass-${glass}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    const bodyCls = `card__body card__body--${size}`;
    return (_jsxs("div", { className: `card__corner-wrapper ${className}`, id: id, children: [showCorners && (_jsx(CornerBrackets, { corners: ["tl", "br"], size: "lg", inset: "outside", color: "nav-active" })), _jsx("div", { className: cardCls, onClick: clickable ? onClick : undefined, children: _jsxs("div", { className: bodyCls, children: [typeof title === "string" ? (_jsx(Typography, { variant: titleVariant[size], color: titleColor, className: titleClassName, children: title })) : (title), subtitle && (_jsx(Typography, { variant: "body", color: subtitleColor, className: subtitleClassName, children: subtitle })), showDivider && children && _jsx("hr", { className: "card__divider" }), children && _jsx("div", { className: "card__children", children: children })] }) })] }));
}
//# sourceMappingURL=Card.js.map