import { jsx as _jsx } from "react/jsx-runtime";
import "./badge.base.css";
export function Badge({ variant = "primary", size = "md", shape = "rounded", children, className = "", }) {
    const cls = ["badge", `badge--${variant}`, `badge--${size}`, `badge--${shape}`, className]
        .filter(Boolean)
        .join(" ");
    return _jsx("span", { className: cls, children: children });
}
//# sourceMappingURL=Badge.js.map