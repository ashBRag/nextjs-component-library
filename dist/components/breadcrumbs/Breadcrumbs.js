import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./breadcrumbs.base.css";
export function Breadcrumbs({ items, separator = "/", ariaLabel = "Breadcrumb", className = "", }) {
    return (_jsx("nav", { className: `breadcrumbs ${className}`.trim(), "aria-label": ariaLabel, children: _jsx("ol", { className: "breadcrumbs__list", children: items.map((item, index) => {
                const isCurrent = item.current ?? index === items.length - 1;
                const content = (_jsxs(_Fragment, { children: [item.icon && (_jsx("span", { className: "breadcrumbs__icon", "aria-hidden": "true", children: item.icon })), _jsx("span", { className: "breadcrumbs__label", children: item.label })] }));
                return (_jsxs("li", { className: "breadcrumbs__item", children: [item.href && !isCurrent ? (_jsx("a", { className: "breadcrumbs__link", href: item.href, children: content })) : (_jsx("span", { className: "breadcrumbs__current", "aria-current": isCurrent ? "page" : undefined, children: content })), index < items.length - 1 && (_jsx("span", { className: "breadcrumbs__separator", "aria-hidden": "true", children: separator }))] }, index));
            }) }) }));
}
//# sourceMappingURL=Breadcrumbs.js.map