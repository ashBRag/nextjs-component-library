import React from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import "./card.base.css";

export interface CardProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  size?: "sm" | "md" | "lg" | "compact";
  showBorder?: boolean;
  showCorners?: boolean;
  shadow?: "none" | "sm" | "md" | "lg" | "glow";
  showDivider?: boolean;
  children?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

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

export function Card({
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
  onClick,
}: CardProps) {
  const cardCls = [
    "card",
    showBorder && "card--bordered",
    clickable && "card--clickable",
    shadow !== "none" && `card--shadow-${shadow}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const bodyCls = `card__body--${size}`;
  const titleCls = `card__title card__title--${size} ${titleClassName}`.trim();

  return (
    <div className={`card__corner-wrapper ${className}`} id={id}>
      {showCorners && (
        <CornerBrackets
          corners={["tl", "br"]}
          size="lg"
          inset="outside"
          color="nav-active"
        />
      )}

      <div className={cardCls} onClick={clickable ? onClick : undefined}>
        <div className={bodyCls}>
          {typeof title === "string" ? (
            <h3 className={titleCls}>{title}</h3>
          ) : (
            title
          )}
          {subtitle && (
            <h4 className={`card__subtitle ${subtitleClassName}`}>
              {subtitle}
            </h4>
          )}
          {showDivider && children && <hr className="card__divider" />}
          {children && <div className="card__children">{children}</div>}
        </div>
      </div>
    </div>
  );
}
