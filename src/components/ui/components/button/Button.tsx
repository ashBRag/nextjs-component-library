import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  href?: string;
  download?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "outline",
  size = "md",
  iconBefore,
  iconAfter,
  href,
  download,
  disabled = false,
  className = "",
  children,
  onClick,
  target,
  rel,
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

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        target={target}
        rel={rel}
        className={cls}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
