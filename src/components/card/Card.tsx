import React from "react";
import "./card.base.css";

interface CardProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  size?: "sm" | "md" | "lg" | "compact";
  animated?: boolean;
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
      animated={true}
      showBorder={true}
      showCorners={true}
      clickable={true}
      onClick={() => console.log("Card clicked!")}
    />
  
 */

export default function Card({
  id,
  title,
  subtitle,
  description,
  content,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
  size = "md",
  animated = true,
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
    animated && "card--animated",
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
        <>
          <div className="card__corner--tl">
            <div className="card__corner--tl-h" />
            <div className="card__corner--tl-v" />
          </div>
          <div className="card__corner--br">
            <div className="card__corner--br-h" />
            <div className="card__corner--br-v" />
          </div>
        </>
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
          {description && (
            <p className={`card__description ${descriptionClassName}`}>
              {description}
            </p>
          )}
          {showDivider && (content || children) && (
            <hr className="card__divider" />
          )}
          {content && <div className="card__content">{content}</div>}
          {children && <div className="card__children">{children}</div>}
        </div>
      </div>
    </div>
  );
}
