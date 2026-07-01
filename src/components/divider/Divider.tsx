import React from "react";
import "./divider.base.css";

interface DividerProps {
  spacing?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  className?: string;
}

export function Divider({ spacing = "md", label, className = "" }: DividerProps) {
  const cls = ["divider", `divider--${spacing}`, className]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <div className={`${cls} divider--labeled`} role="separator">
        <span className="divider__line" />
        <span className="divider__label">{label}</span>
        <span className="divider__line" />
      </div>
    );
  }

  return <hr className={cls} role="separator" />;
}
