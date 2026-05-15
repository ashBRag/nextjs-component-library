import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "outline",
  size = "md",
  iconBefore,
  iconAfter,
  disabled = false,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const cls = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconBefore && (
        <span className="btn__icon btn__icon--before">{iconBefore}</span>
      )}
      {children && <span className="btn__label">{children}</span>}
      {iconAfter && (
        <span className="btn__icon btn__icon--after">{iconAfter}</span>
      )}
    </>
  );

  return (
    <button onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
