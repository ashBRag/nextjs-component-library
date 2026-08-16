import React__default from 'react';

interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "icon";
    size?: "sm" | "md" | "lg";
    iconBefore?: React__default.ReactNode;
    iconAfter?: React__default.ReactNode;
    disabled?: boolean;
    className?: string;
    children?: React__default.ReactNode;
    onClick?: () => void;
    "aria-label"?: string;
}
declare function Button({ variant, size, iconBefore, iconAfter, disabled, className, children, onClick, "aria-label": ariaLabel, }: ButtonProps): React__default.JSX.Element;

export { Button };
