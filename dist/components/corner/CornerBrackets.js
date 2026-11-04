import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const ALL_CORNERS = ["tl", "tr", "bl", "br"];
/**
 * Decorative corner-bracket primarys. Purely visual — renders nothing
 * outside the dev profile (see src/styles/profiles/dev/corner.css).
 */
export function CornerBrackets({ corners = ALL_CORNERS, size = "sm", inset = "inside", color = "primary", wrapped = false, className = "", }) {
    const spans = corners.map((corner) => (_jsx("span", { className: [
            "corner",
            `corner--${corner}`,
            `corner--${size}`,
            `corner--${inset}`,
            `corner--${color}`,
            className,
        ]
            .filter(Boolean)
            .join(" "), "aria-hidden": "true" }, corner)));
    if (!wrapped)
        return _jsx(_Fragment, { children: spans });
    return (_jsx("span", { className: "corners-wrapper", "aria-hidden": "true", children: spans }));
}
//# sourceMappingURL=CornerBrackets.js.map