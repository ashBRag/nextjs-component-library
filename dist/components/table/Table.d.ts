import React__default from 'react';

interface TableColumn {
    key: string;
    label: string;
    align?: "left" | "center" | "right";
}
interface TableProps {
    columns: TableColumn[];
    data: Record<string, React__default.ReactNode>[];
    striped?: boolean;
    bordered?: boolean;
    compact?: boolean;
    className?: string;
}
declare function Table({ columns, data, striped, bordered, compact, className, }: TableProps): React__default.JSX.Element;

export { Table };
