import React__default from 'react';

interface ChipProps {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React__default.ReactNode;
    disabled?: boolean;
    onRemove?: () => void;
    className?: string;
    children: React__default.ReactNode;
}
declare function Chip({ variant, size, icon, disabled, onRemove, className, children, }: ChipProps): React__default.JSX.Element;

export { Chip };
