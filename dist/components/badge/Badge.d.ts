import React from "react";
import "./badge.base.css";
export interface BadgeProps {
    variant?: "primary" | "accent" | "secondary" | "success" | "warning";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "squared";
    children: React.ReactNode;
    className?: string;
}
export declare function Badge({ variant, size, shape, children, className, }: BadgeProps): React.JSX.Element;
