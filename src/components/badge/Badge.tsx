import React from "react";
import "./badge.base.css";

interface BadgeProps {
  variant?: "primary" | "secondary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "squared";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "primary",
  size = "md",
  shape = "rounded",
  children,
  className = "",
}: BadgeProps) {
  const cls = ["badge", `badge--${variant}`, `badge--${size}`, `badge--${shape}`, className]
    .filter(Boolean)
    .join(" ");

  return <span className={cls}>{children}</span>;
}
