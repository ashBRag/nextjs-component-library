import React from "react";
import { CornerBrackets } from "../corner/CornerBrackets.tsx";
import {
  Typography,
  type TypographyColor,
  type TypographyVariant,
} from "../typography/Typography.tsx";
import "./card.base.css";

export interface CardProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  titleColor?: TypographyColor;
  subtitleColor?: TypographyColor;
  size?: "sm" | "md" | "lg" | "compact";
  showBorder?: boolean;
  showCorners?: boolean;
  shadow?: "none" | "sm" | "md" | "lg" | "glow";
  glass?: "none" | "sm" | "md" | "lg";
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

const titleVariant: Record<
  NonNullable<CardProps["size"]>,
  TypographyVariant
> = {
  sm: "h4",
  compact: "h4",
  md: "h4",
  lg: "h3",
};

export function Card({
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
  onClick,
}: CardProps) {
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
            <Typography
              variant={titleVariant[size]}
              color={titleColor}
              className={titleClassName}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
          {subtitle && (
            <Typography
              variant="body"
              color={subtitleColor}
              className={subtitleClassName}
            >
              {subtitle}
            </Typography>
          )}
          {showDivider && children && <hr className="card__divider" />}
          {children && <div className="card__children">{children}</div>}
        </div>
      </div>
    </div>
  );
}
