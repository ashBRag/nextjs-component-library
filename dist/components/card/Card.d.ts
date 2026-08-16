import React__default from 'react';

interface CardProps {
    id?: string;
    title: string | React__default.ReactNode;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    size?: "sm" | "md" | "lg" | "compact";
    showBorder?: boolean;
    showCorners?: boolean;
    shadow?: "none" | "sm" | "md" | "lg" | "glow";
    showDivider?: boolean;
    children?: React__default.ReactNode;
    clickable?: boolean;
    onClick?: () => void;
}
declare function Card({ id, title, subtitle, className, titleClassName, subtitleClassName, size, showBorder, showCorners, shadow, showDivider, children, clickable, onClick, }: CardProps): React__default.JSX.Element;

export { Card, type CardProps };
