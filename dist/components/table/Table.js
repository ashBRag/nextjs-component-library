import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./table.base.css";
export function Table({ columns, data, striped = false, bordered = false, compact = false, className = "", }) {
    const cls = [
        "table",
        striped && "table--striped",
        bordered && "table--bordered",
        compact && "table--compact",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsx("div", { className: "table__wrapper", children: _jsxs("table", { className: cls, children: [_jsx("thead", { className: "table__head", children: _jsx("tr", { children: columns.map((col) => (_jsx("th", { className: `table__th table__th--${col.align ?? "left"}`, children: col.label }, col.key))) }) }), _jsx("tbody", { className: "table__body", children: data.map((row, ri) => (_jsx("tr", { className: "table__row", children: columns.map((col) => (_jsx("td", { className: `table__td table__td--${col.align ?? "left"}`, children: row[col.key] }, col.key))) }, ri))) })] }) }));
}
//# sourceMappingURL=Table.js.map