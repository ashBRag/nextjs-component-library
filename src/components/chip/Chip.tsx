import React from "react";
import "./chip.base.css";

interface ChipProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}

export function Chip({
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  onRemove,
  className = "",
  children,
}: ChipProps) {
  const cls = [
    "chip",
    `chip--${variant}`,
    `chip--${size}`,
    disabled && "chip--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls}>
      {icon && <span className="chip__icon">{icon}</span>}
      <span className="chip__label">{children}</span>
      {onRemove && (
        <button
          type="button"
          className="chip__remove"
          aria-label="Remove"
          disabled={disabled}
          onClick={onRemove}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
}
