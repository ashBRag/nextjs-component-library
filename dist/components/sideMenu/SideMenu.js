"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./sideMenu.base.css";
export function SideMenu({ groups, activeId, onSelect, title, variant = "left", className = "", }) {
    return (_jsxs("nav", { className: `side-menu side-menu--${variant} ${className}`, children: [title && _jsx("p", { className: "side-menu__title", children: title }), groups.map((group, gi) => (_jsxs("div", { className: "side-menu__group", children: [_jsx("p", { className: "side-menu__group-label", children: group.label }), _jsx("ul", { className: "side-menu__list", children: group.items.map((item) => (_jsx("li", { children: _jsx("button", { type: "button", onClick: () => onSelect(item.id), className: [
                                    "side-menu__link",
                                    `side-menu__link--${variant}`,
                                    activeId === item.id && "side-menu__link--active",
                                ]
                                    .filter(Boolean)
                                    .join(" "), children: item.label }) }, item.id))) }), gi < groups.length - 1 && _jsx("hr", { className: "side-menu__divider" })] }, group.label)))] }));
}
//# sourceMappingURL=SideMenu.js.map