"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Button } from "../button/Button.js";
import "./drawer.base.css";
export function Drawer({ open, onClose, title, footer, side = "right", size = "md", closeOnOverlayClick = true, className = "", children, }) {
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
    const panelCls = [
        "drawer__panel",
        `drawer__panel--${side}`,
        `drawer__panel--${side}-${size}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsx("div", { className: "drawer__overlay", onMouseDown: (e) => {
            if (closeOnOverlayClick && e.target === e.currentTarget)
                onClose();
        }, children: _jsxs("div", { className: panelCls, role: "dialog", "aria-modal": "true", children: [title && (_jsxs("div", { className: "drawer__header", children: [typeof title === "string" ? (_jsx("h3", { className: "drawer__title", children: title })) : (title), _jsx(Button, { variant: "icon", size: "sm", "aria-label": "Close", onClick: onClose, children: _jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] })), _jsx("div", { className: "drawer__body", children: children }), footer && _jsx("div", { className: "drawer__footer", children: footer })] }) }));
}
//# sourceMappingURL=Drawer.js.map