import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./divider.base.css";
export function Divider({ spacing = "md", label, className = "" }) {
    const cls = ["divider", `divider--${spacing}`, className]
        .filter(Boolean)
        .join(" ");
    if (label) {
        return (_jsxs("div", { className: `${cls} divider--labeled`, role: "separator", children: [_jsx("span", { className: "divider__line" }), _jsx("span", { className: "divider__label", children: label }), _jsx("span", { className: "divider__line" })] }));
    }
    return _jsx("hr", { className: cls, role: "separator" });
}
//# sourceMappingURL=Divider.js.map