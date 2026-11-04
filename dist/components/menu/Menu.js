"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./menu.base.css";
export function DropdownMenu({ trigger, groups, align = "right", className = "", }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const alignCls = align === "right" ? "right-0" : "left-0";
    return (_jsxs("div", { ref: ref, className: `relative inline-block ${className}`, children: [_jsx("button", { onClick: () => setOpen((p) => !p), className: "dropdown__trigger", "aria-haspopup": "true", "aria-expanded": open, children: trigger }), open && (_jsx("div", { className: `dropdown__panel absolute ${alignCls} mt-2 z-50`, role: "menu", children: groups.map((group, gi) => (_jsxs("div", { className: "dropdown__group", children: [group.heading && (_jsx("p", { className: "dropdown__heading", children: group.heading })), group.items.map((item) => (_jsxs("button", { role: "menuitem", className: [
                                "dropdown__item",
                                item.active && "dropdown__item--active",
                            ]
                                .filter(Boolean)
                                .join(" "), onClick: () => {
                                item.onClick();
                                setOpen(false);
                            }, children: [item.active && (_jsx("span", { className: "dropdown__item-dot", "aria-hidden": true })), item.label] }, item.value))), gi < groups.length - 1 && _jsx("hr", { className: "dropdown__divider" })] }, gi))) }))] }));
}
//# sourceMappingURL=Menu.js.map