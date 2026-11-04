import React from "react";
import "./divider.base.css";
interface DividerProps {
    spacing?: "sm" | "md" | "lg";
    label?: React.ReactNode;
    className?: string;
}
export declare function Divider({ spacing, label, className }: DividerProps): React.JSX.Element;
export {};
