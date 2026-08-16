import React__default from 'react';

interface BadgeProps {
    variant?: "primary" | "secondary" | "success" | "warning";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "squared";
    children: React__default.ReactNode;
    className?: string;
}
declare function Badge({ variant, size, shape, children, className, }: BadgeProps): React__default.JSX.Element;

export { Badge };
