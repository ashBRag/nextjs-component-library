import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./chip.base.css";
export function Chip({ variant = "primary", size = "md", icon, disabled = false, onRemove, className = "", children, }) {
    const cls = [
        "chip",
        `chip--${variant}`,
        `chip--${size}`,
        disabled && "chip--disabled",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsxs("span", { className: cls, children: [icon && _jsx("span", { className: "chip__icon", children: icon }), _jsx("span", { className: "chip__label", children: children }), onRemove && (_jsx("button", { type: "button", className: "chip__remove", "aria-label": "Remove", disabled: disabled, onClick: onRemove, children: _jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }))] }));
}
//# sourceMappingURL=Chip.js.map