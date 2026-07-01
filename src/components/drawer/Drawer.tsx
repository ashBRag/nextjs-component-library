"use client";

import React, { useEffect } from "react";
import "./drawer.base.css";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg";
  closeOnOverlayClick?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Drawer({
  open,
  onClose,
  title,
  footer,
  side = "right",
  size = "md",
  closeOnOverlayClick = true,
  className = "",
  children,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const panelCls = [
    "drawer__panel",
    `drawer__panel--${side}`,
    `drawer__panel--${side}-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="drawer__overlay"
      onMouseDown={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }}
    >
      <div className={panelCls} role="dialog" aria-modal="true">
        {title && (
          <div className="drawer__header">
            {typeof title === "string" ? (
              <h3 className="drawer__title">{title}</h3>
            ) : (
              title
            )}
            <button
              type="button"
              className="drawer__close"
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

        <div className="drawer__body">{children}</div>

        {footer && <div className="drawer__footer">{footer}</div>}
      </div>
    </div>
  );
}
