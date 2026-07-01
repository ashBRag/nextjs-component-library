"use client";

import React, { useEffect, useRef } from "react";
import "./dialog.base.css";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  closeOnOverlayClick?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Dialog({
  open,
  onClose,
  title,
  footer,
  size = "md",
  closeOnOverlayClick = true,
  className = "",
  children,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const panelCls = ["dialog__panel", `dialog__panel--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="dialog__overlay"
      onMouseDown={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={panelCls}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="dialog__header">
            {typeof title === "string" ? (
              <h3 className="dialog__title">{title}</h3>
            ) : (
              title
            )}
            <button
              type="button"
              className="dialog__close"
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                width="16"
                height="16"
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
          </div>
        )}

        <div className="dialog__body">{children}</div>

        {footer && <div className="dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
