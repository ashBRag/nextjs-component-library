import { jsx as _jsx } from "react/jsx-runtime";
import "./grid.base.css";
export function Grid({ children, columns = 1, columnsSm, columnsMd, columnsLg, gap = "md", className = "", }) {
    const cls = [
        "grid-layout",
        `grid-layout--cols-${columns}`,
        columnsSm && `grid-layout--sm-cols-${columnsSm}`,
        columnsMd && `grid-layout--md-cols-${columnsMd}`,
        columnsLg && `grid-layout--lg-cols-${columnsLg}`,
        `grid-layout--gap-${gap}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return _jsx("div", { className: cls, children: children });
}
export function GridItem({ children, span, spanSm, spanMd, spanLg, className = "", }) {
    const cls = [
        "grid-layout__item",
        span && `grid-layout__item--span-${span}`,
        spanSm && `grid-layout__item--sm-span-${spanSm}`,
        spanMd && `grid-layout__item--md-span-${spanMd}`,
        spanLg && `grid-layout__item--lg-span-${spanLg}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return _jsx("div", { className: cls, children: children });
}
//# sourceMappingURL=Grid.js.map