"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./dialog.base.css";
export function Dialog({ open, onClose, title, footer, size = "md", closeOnOverlayClick = true, className = "", children, }) {
    const panelRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        function handleKeyDown(e) {
            if (e.key === "Escape")
                onClose();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);
    if (!open)
        return null;
    const panelCls = ["dialog__panel", `dialog__panel--${size}`, className]
        .filter(Boolean)
        .join(" ");
    return (_jsx("div", { className: "dialog__overlay", onMouseDown: (e) => {
            if (closeOnOverlayClick && e.target === e.currentTarget)
                onClose();
        }, children: _jsxs("div", { ref: panelRef, className: panelCls, role: "dialog", "aria-modal": "true", children: [title && (_jsxs("div", { className: "dialog__header", children: [typeof title === "string" ? (_jsx("h3", { className: "dialog__title", children: title })) : (title), _jsx("button", { type: "button", className: "dialog__close", "aria-label": "Close", onClick: onClose, children: _jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] })), _jsx("div", { className: "dialog__body", children: children }), footer && _jsx("div", { className: "dialog__footer", children: footer })] }) }));
}
//# sourceMappingURL=Dialog.js.map