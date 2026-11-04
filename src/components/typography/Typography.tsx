import React from "react";
import "./typography.base.css";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "body-lg"
  | "caption"
  | "label";

export type TypographyColor =
  | "default"
  | "inherit"
  | "primary"
  | "accent"
  | "muted";

const defaultTag: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  "body-lg": "p",
  caption: "span",
  label: "span",
};

export interface TypographyProps {
  variant?: TypographyVariant;
  /**
   * "default" keeps the variant's own color (e.g. caption stays primary).
   * "inherit" takes the parent's color (e.g. a button label).
   */
  color?: TypographyColor;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Typography({
  variant = "body",
  color = "default",
  as,
  className = "",
  children,
}: TypographyProps) {
  const Tag = as ?? defaultTag[variant];
  const cls = [
    "typography",
    `typography--${variant}`,
    color !== "default" && `typography--color-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(Tag, { className: cls }, children);
}
