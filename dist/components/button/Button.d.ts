import React from "react";
import "./button.base.css";
interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "icon";
    size?: "sm" | "md" | "lg";
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    "aria-label"?: string;
}
export declare function Button({ variant, size, iconBefore, iconAfter, disabled, className, children, onClick, "aria-label": ariaLabel, }: ButtonProps): React.JSX.Element;
export {};
