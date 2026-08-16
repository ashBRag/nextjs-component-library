import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./grid.base.css";
function Grid({
  children,
  columns = 1,
  columnsSm,
  columnsMd,
  columnsLg,
  gap = "md",
  className = ""
}) {
  const cls = [
    "grid-layout",
    `grid-layout--cols-${columns}`,
    columnsSm && `grid-layout--sm-cols-${columnsSm}`,
    columnsMd && `grid-layout--md-cols-${columnsMd}`,
    columnsLg && `grid-layout--lg-cols-${columnsLg}`,
    `grid-layout--gap-${gap}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("div", { className: cls }, children);
}
function GridItem({
  children,
  span,
  spanSm,
  spanMd,
  spanLg,
  className = ""
}) {
  const cls = [
    "grid-layout__item",
    span && `grid-layout__item--span-${span}`,
    spanSm && `grid-layout__item--sm-span-${spanSm}`,
    spanMd && `grid-layout__item--md-span-${spanMd}`,
    spanLg && `grid-layout__item--lg-span-${spanLg}`,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("div", { className: cls }, children);
}
export {
  Grid,
  GridItem
};
//# sourceMappingURL=Grid.mjs.map