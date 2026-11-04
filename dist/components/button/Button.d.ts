import React from "react";
import "./button.base.css";
export interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "icon";
    /** Color scheme for background, border, shadow, hover and focus ring. */
    color?: "primary" | "accent";
    size?: "sm" | "md" | "lg";
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    "aria-label"?: string;
}
export declare function Button({ variant, color, size, iconBefore, iconAfter, disabled, className, children, onClick, "aria-label": ariaLabel, }: ButtonProps): React.JSX.Element;
