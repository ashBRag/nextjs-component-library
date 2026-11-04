"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CornerBrackets } from "../corner/CornerBrackets.js";
import "./timeline.base.css";
export default function Timeline({ items, className = "", animated = false, selectedId, onSelect, }) {
    const handleCardClick = (item) => {
        if (!item.action)
            return;
        onSelect?.(item.id);
        if (item.action.onClick) {
            item.action.onClick();
        }
        else if (item.action.href && item.action.external) {
            window.open(item.action.href, "_blank", "noopener,noreferrer");
        }
    };
    const getCardMods = (item) => {
        if (!item.action)
            return "";
        if (selectedId === item.id)
            return "timeline__card--selected";
        return "timeline__card--interactive";
    };
    const renderCardContent = (item) => (_jsxs("div", { className: `timeline__card ${getCardMods(item)}`, children: [_jsx(CornerBrackets, { wrapped: true, size: "lg", color: "corner-token" }), _jsxs("div", { className: "timeline__card-inner", children: [_jsxs("div", { className: "timeline__card-header", children: [_jsx("div", { className: "timeline__title-wrapper", children: _jsx("h3", { className: "timeline__title", children: item.title }) }), item.badge && (_jsx("span", { className: `timeline__badge timeline__badge--${item.badge.variant ?? "primary"}`, children: item.badge.text }))] }), _jsx("time", { className: "timeline__date", children: item.date }), item.description && (_jsx("p", { className: "timeline__description", children: item.description }))] })] }));
    const renderCard = (item) => {
        if (!item.action) {
            return renderCardContent(item);
        }
        if (item.action.href && !item.action.external) {
            return (_jsx("a", { href: item.action.href, className: "timeline__card-link", children: renderCardContent(item) }));
        }
        return (_jsx("div", { onClick: () => handleCardClick(item), children: renderCardContent(item) }));
    };
    return (_jsx("div", { className: `timeline ${animated ? "timeline--animated" : ""} ${className}`, children: _jsx("ol", { className: "timeline__list", children: items.map((item) => (_jsxs("li", { className: "timeline__item", children: [_jsx("span", { className: "timeline__node", children: item.icon }), renderCard(item)] }, item.id))) }) }));
}
//# sourceMappingURL=Timeline.js.map