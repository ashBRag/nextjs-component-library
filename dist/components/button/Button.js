import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, } from "../typography/Typography.js";
import "./button.base.css";
const labelVariant = {
    sm: "body-sm",
    md: "body",
    lg: "body-lg",
};
export function Button({ variant = "outline", color = "primary", size = "md", iconBefore, iconAfter, disabled = false, className = "", children, onClick, "aria-label": ariaLabel, }) {
    const cls = [
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        `btn--color-${color}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    const content = (_jsxs(_Fragment, { children: [iconBefore && (_jsx("span", { className: "btn__icon btn__icon--before", children: iconBefore })), children && (_jsx(Typography, { as: "span", variant: labelVariant[size], color: "inherit", className: "btn__label", children: children })), iconAfter && (_jsx("span", { className: "btn__icon btn__icon--after", children: iconAfter }))] }));
    return (_jsx("button", { onClick: onClick, disabled: disabled, className: cls, "aria-label": ariaLabel, children: content }));
}
//# sourceMappingURL=Button.js.map