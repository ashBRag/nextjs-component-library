"use client";
import "../../chunk-FJBZBVPE.mjs";
import React, { useEffect } from "react";
import { Button } from "../button/Button";
import "./drawer.base.css";
function Drawer({
  open,
  onClose,
  title,
  footer,
  side = "right",
  size = "md",
  closeOnOverlayClick = true,
  className = "",
  children
}) {
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
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
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "drawer__overlay",
      onMouseDown: (e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: panelCls, role: "dialog", "aria-modal": "true" }, title && /* @__PURE__ */ React.createElement("div", { className: "drawer__header" }, typeof title === "string" ? /* @__PURE__ */ React.createElement("h3", { className: "drawer__title" }, title) : title, /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "icon",
        size: "sm",
        "aria-label": "Close",
        onClick: onClose
      },
      /* @__PURE__ */ React.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      )
    )), /* @__PURE__ */ React.createElement("div", { className: "drawer__body" }, children), footer && /* @__PURE__ */ React.createElement("div", { className: "drawer__footer" }, footer))
  );
}
export {
  Drawer
};
//# sourceMappingURL=Drawer.mjs.map