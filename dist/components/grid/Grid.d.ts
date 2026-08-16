import React__default from 'react';

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
interface GridProps {
    children: React__default.ReactNode;
    columns?: GridColumns;
    columnsSm?: GridColumns;
    columnsMd?: GridColumns;
    columnsLg?: GridColumns;
    gap?: "none" | "sm" | "md" | "lg";
    className?: string;
}
declare function Grid({ children, columns, columnsSm, columnsMd, columnsLg, gap, className, }: GridProps): React__default.JSX.Element;
interface GridItemProps {
    children: React__default.ReactNode;
    span?: GridColumns;
    spanSm?: GridColumns;
    spanMd?: GridColumns;
    spanLg?: GridColumns;
    className?: string;
}
declare function GridItem({ children, span, spanSm, spanMd, spanLg, className, }: GridItemProps): React__default.JSX.Element;

export { Grid, GridItem, type GridItemProps, type GridProps };
