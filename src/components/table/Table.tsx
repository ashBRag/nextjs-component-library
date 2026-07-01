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

export function Table({
  columns,
  data,
  striped = false,
  bordered = false,
  compact = false,
  className = "",
}: TableProps) {
  const cls = [
    "table",
    striped && "table--striped",
    bordered && "table--bordered",
    compact && "table--compact",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="table__wrapper">
      <table className={cls}>
        <thead className="table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`table__th table__th--${col.align ?? "left"}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((row, ri) => (
            <tr key={ri} className="table__row">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`table__td table__td--${col.align ?? "left"}`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
