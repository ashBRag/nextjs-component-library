import React from "react";
import "./typography.base.css";

type Variant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";

const defaultTag: Record<Variant, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  caption: "span",
  label: "span",
};

interface TypographyProps {
  variant?: Variant;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Typography({
  variant = "body",
  as,
  className = "",
  children,
}: TypographyProps) {
  const Tag = as ?? defaultTag[variant];
  const cls = ["typography", `typography--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return React.createElement(Tag, { className: cls }, children);
}
