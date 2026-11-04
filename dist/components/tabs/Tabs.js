"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { CornerBrackets } from "../corner/CornerBrackets.js";
import "./tabs.base.css";
export default function Tabs({ tabs, activeTab, onTabChange, className = "", animated = true, contentHeight = "77vh", mobileBottomMenu = true, variant = "underline", bordered = true, }) {
    const [computedHeight, setComputedHeight] = useState("77vh");
    useEffect(() => {
        const calculate = () => {
            if (typeof contentHeight === "number") {
                setComputedHeight(`${contentHeight}px`);
            }
            else if (contentHeight.includes("%")) {
                setComputedHeight(`${parseFloat(contentHeight)}vh`);
            }
            else {
                setComputedHeight(contentHeight);
            }
        };
        calculate();
        if (typeof contentHeight === "string" && contentHeight.includes("%")) {
            window.addEventListener("resize", calculate);
            return () => window.removeEventListener("resize", calculate);
        }
    }, [contentHeight]);
    const rootMod = animated ? "tabs--animated" : "";
    const TabHeaders = ({ isMobile = false }) => {
        const headerMod = isMobile
            ? "tabs__header--mobile"
            : "tabs__header--desktop";
        return (_jsx("div", { className: `tabs__header ${headerMod}`, children: _jsx("ul", { className: "tabs__list", role: "tablist", children: tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const itemMod = isActive ? "tabs__item--active" : "";
                    const btnMod = [
                        `tabs__trigger--${variant}`,
                        isActive ? "tabs__trigger--active" : "",
                        isMobile ? "tabs__trigger--mobile" : "tabs__trigger--desktop",
                    ]
                        .filter(Boolean)
                        .join(" ");
                    return (_jsx("li", { className: `tabs__item ${itemMod} ${tab.className ?? ""}`, role: "presentation", children: _jsxs("button", { className: `tabs__trigger ${btnMod}`, onClick: () => {
                                onTabChange?.(tab.id);
                            }, type: "button", role: "tab", "aria-controls": tab.id, "aria-selected": isActive, children: [_jsxs("span", { className: "tabs__trigger-inner", children: [tab.icon && (_jsx("span", { className: `tabs__icon ${isActive ? "tabs__icon--active" : ""}`, children: tab.icon })), _jsxs("span", { className: "tabs__label", children: [_jsx("span", { className: "tabs__label-prefix", "aria-hidden": "true" }), tab.label, _jsx("span", { className: "tabs__label-suffix", "aria-hidden": "true" })] })] }), isActive && (_jsx("span", { className: `tabs__indicator ${isMobile
                                        ? "tabs__indicator--mobile"
                                        : "tabs__indicator--desktop"}`, "aria-hidden": "true" }))] }) }, tab.id));
                }) }) }));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: `tabs tabs--desktop ${bordered ? "tabs--bordered" : ""} ${rootMod} ${className}`, style: { "--tabs-content-height": computedHeight }, children: [bordered && _jsx(CornerBrackets, { color: "tab-active" }), _jsx(TabHeaders, {}), _jsx("div", { className: "tabs__panels", children: tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (_jsxs("div", { id: tab.id, className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${tab.className ?? ""}`, role: "tabpanel", "aria-labelledby": `${tab.id}-tab`, children: [_jsx(CornerBrackets, { color: "tab-active" }), _jsx("div", { className: "tabs__panel-content", children: tab.content }), _jsx("span", { className: "tabs__panel-indicator", "aria-hidden": "true" })] }, tab.id));
                        }) })] }), mobileBottomMenu && (_jsxs("div", { className: "tabs tabs--mobile", children: [_jsx("div", { className: "tabs__panels tabs__panels--mobile", children: tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (_jsx("div", { id: tab.id, className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${tab.className ?? ""}`, role: "tabpanel", "aria-labelledby": `${tab.id}-tab`, children: tab.content }, `mobile-${tab.id}`));
                        }) }), _jsxs("div", { className: "tabs__mobile-bar", children: [_jsx(CornerBrackets, { corners: ["tl", "tr"], color: "tab-active" }), _jsx(TabHeaders, { isMobile: true })] })] }))] }));
}
//# sourceMappingURL=Tabs.js.map