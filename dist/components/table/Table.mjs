import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./table.base.css";
function Table({
  columns,
  data,
  striped = false,
  bordered = false,
  compact = false,
  className = ""
}) {
  const cls = [
    "table",
    striped && "table--striped",
    bordered && "table--bordered",
    compact && "table--compact",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("div", { className: "table__wrapper" }, /* @__PURE__ */ React.createElement("table", { className: cls }, /* @__PURE__ */ React.createElement("thead", { className: "table__head" }, /* @__PURE__ */ React.createElement("tr", null, columns.map((col) => {
    var _a;
    return /* @__PURE__ */ React.createElement(
      "th",
      {
        key: col.key,
        className: `table__th table__th--${(_a = col.align) != null ? _a : "left"}`
      },
      col.label
    );
  }))), /* @__PURE__ */ React.createElement("tbody", { className: "table__body" }, data.map((row, ri) => /* @__PURE__ */ React.createElement("tr", { key: ri, className: "table__row" }, columns.map((col) => {
    var _a;
    return /* @__PURE__ */ React.createElement(
      "td",
      {
        key: col.key,
        className: `table__td table__td--${(_a = col.align) != null ? _a : "left"}`
      },
      row[col.key]
    );
  }))))));
}
export {
  Table
};
//# sourceMappingURL=Table.mjs.map