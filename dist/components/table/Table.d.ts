import React from "react";
import "./table.base.css";
interface TableColumn {
    key: string;
    label: string;
    align?: "left" | "center" | "right";
}
interface TableProps {
    columns: TableColumn[];
    data: Record<string, React.ReactNode>[];
    striped?: boolean;
    bordered?: boolean;
    compact?: boolean;
    className?: string;
}
export declare function Table({ columns, data, striped, bordered, compact, className, }: TableProps): React.JSX.Element;
export {};
