import React from "react";
import {
  Typography,
  type TypographyVariant,
} from "../typography/Typography";
import "./button.base.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "icon";
  /** Color scheme for background, border, shadow, hover and focus ring. */
  color?: "primary" | "accent";
  size?: "sm" | "md" | "lg";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}

const labelVariant: Record<NonNullable<ButtonProps["size"]>, TypographyVariant> =
  {
    sm: "body-sm",
    md: "body",
    lg: "body-lg",
  };

export function Button({
  variant = "outline",
  color = "primary",
  size = "md",
  iconBefore,
  iconAfter,
  disabled = false,
  className = "",
  children,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    `btn--color-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconBefore && (
        <span className="btn__icon btn__icon--before">{iconBefore}</span>
      )}
      {children && (
        <Typography
          as="span"
          variant={labelVariant[size]}
          color="inherit"
          className="btn__label"
        >
          {children}
        </Typography>
      )}
      {iconAfter && (
        <span className="btn__icon btn__icon--after">{iconAfter}</span>
      )}
    </>
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
