"use client";
import "../../chunk-FJBZBVPE.mjs";
import React, { useEffect, useRef } from "react";
import "./dialog.base.css";
function Dialog({
  open,
  onClose,
  title,
  footer,
  size = "md",
  closeOnOverlayClick = true,
  className = "",
  children
}) {
  const panelRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  const panelCls = ["dialog__panel", `dialog__panel--${size}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "dialog__overlay",
      onMouseDown: (e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: panelRef,
        className: panelCls,
        role: "dialog",
        "aria-modal": "true"
      },
      title && /* @__PURE__ */ React.createElement("div", { className: "dialog__header" }, typeof title === "string" ? /* @__PURE__ */ React.createElement("h3", { className: "dialog__title" }, title) : title, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "dialog__close",
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
      )),
      /* @__PURE__ */ React.createElement("div", { className: "dialog__body" }, children),
      footer && /* @__PURE__ */ React.createElement("div", { className: "dialog__footer" }, footer)
    )
  );
}
export {
  Dialog
};
//# sourceMappingURL=Dialog.mjs.map