import React from "react";
import "./chip.base.css";
interface ChipProps {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    disabled?: boolean;
    onRemove?: () => void;
    className?: string;
    children: React.ReactNode;
}
export declare function Chip({ variant, size, icon, disabled, onRemove, className, children, }: ChipProps): React.JSX.Element;
export {};
