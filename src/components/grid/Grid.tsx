import React from "react";
import "./grid.base.css";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

export interface GridProps {
  children: React.ReactNode;
  columns?: GridColumns;
  columnsSm?: GridColumns;
  columnsMd?: GridColumns;
  columnsLg?: GridColumns;
  gap?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Grid({
  children,
  columns = 1,
  columnsSm,
  columnsMd,
  columnsLg,
  gap = "md",
  className = "",
}: GridProps) {
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

  return <div className={cls}>{children}</div>;
}

export interface GridItemProps {
  children: React.ReactNode;
  span?: GridColumns;
  spanSm?: GridColumns;
  spanMd?: GridColumns;
  spanLg?: GridColumns;
  className?: string;
}

export function GridItem({
  children,
  span,
  spanSm,
  spanMd,
  spanLg,
  className = "",
}: GridItemProps) {
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

  return <div className={cls}>{children}</div>;
}
