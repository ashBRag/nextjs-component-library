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
export declare function Grid({ children, columns, columnsSm, columnsMd, columnsLg, gap, className, }: GridProps): import("react/jsx-runtime").JSX.Element;
export interface GridItemProps {
    children: React.ReactNode;
    span?: GridColumns;
    spanSm?: GridColumns;
    spanMd?: GridColumns;
    spanLg?: GridColumns;
    className?: string;
}
export declare function GridItem({ children, span, spanSm, spanMd, spanLg, className, }: GridItemProps): import("react/jsx-runtime").JSX.Element;
export {};
