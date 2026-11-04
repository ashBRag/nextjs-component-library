"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { CornerBrackets } from "../corner/CornerBrackets.js";
import "./navList.base.css";
export default function NavList({ tabs, defaultActiveTab, className = "", tabsClassName = "", contentClassName = "", animated = true, horizontal = false, }) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab ?? tabs[0]?.id ?? "");
    const handleTabClick = (item) => {
        if (item.disabled)
            return;
        item.onClick?.(item);
        if (!item.href)
            setActiveTab(item.id);
    };
    const getItemMods = (item, isActive) => {
        if (item.disabled)
            return "nav-list__trigger--disabled";
        if (isActive)
            return "nav-list__trigger--active";
        return "";
    };
    const getIconMods = (item, isActive) => {
        if (item.disabled)
            return "nav-list__icon--disabled";
        if (isActive && animated)
            return "nav-list__icon--active";
        return "";
    };
    const renderInner = (item, isActive) => (_jsxs(_Fragment, { children: [isActive && _jsx(CornerBrackets, { wrapped: true, color: "nav-active" }), item.icon && (_jsx("span", { className: `nav-list__icon ${getIconMods(item, isActive)}`, "aria-hidden": "true", children: item.icon })), _jsxs("span", { className: "nav-list__label", children: [_jsx("span", { className: "nav-list__label-prefix", "aria-hidden": "true" }), item.name] }), isActive && _jsx("span", { className: "nav-list__indicator", "aria-hidden": "true" })] }));
    const renderItem = (item) => {
        const isActive = activeTab === item.id;
        const modClass = getItemMods(item, isActive);
        if (item.href && !item.disabled) {
            return (_jsx("a", { href: item.href, className: `nav-list__trigger nav-list__trigger--link ${modClass}`, children: renderInner(item, isActive) }));
        }
        return (_jsx("button", { className: `nav-list__trigger ${modClass}`, onClick: () => handleTabClick(item), disabled: item.disabled, "aria-current": isActive ? "page" : undefined, type: "button", children: renderInner(item, isActive) }));
    };
    const activeContent = tabs.find((t) => t.id === activeTab)?.content ?? null;
    const rootMods = [
        horizontal ? "nav-list--horizontal" : "nav-list--vertical",
        animated ? "nav-list--animated" : "",
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsxs("div", { className: `nav-list ${rootMods} ${className}`, children: [_jsx("ul", { className: `nav-list__list ${tabsClassName}`, children: tabs.map((item) => (_jsx("li", { className: "nav-list__item", children: renderItem(item) }, item.id))) }), _jsx("div", { className: `nav-list__content ${contentClassName}`, children: _jsx("div", { className: "nav-list__content-inner", children: activeContent }) })] }));
}
//# sourceMappingURL=NavList.js.map