import React from "react";
import { type TypographyColor } from "../typography/Typography.tsx";
import "./card.base.css";
export interface CardProps {
    id?: string;
    title: string | React.ReactNode;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    titleColor?: TypographyColor;
    subtitleColor?: TypographyColor;
    size?: "sm" | "md" | "lg" | "compact";
    showBorder?: boolean;
    showCorners?: boolean;
    shadow?: "none" | "sm" | "md" | "lg" | "glow";
    glass?: "none" | "sm" | "md" | "lg";
    showDivider?: boolean;
    children?: React.ReactNode;
    clickable?: boolean;
    onClick?: () => void;
}
export declare function Card({ id, title, subtitle, className, titleClassName, subtitleClassName, titleColor, subtitleColor, size, showBorder, showCorners, shadow, glass, showDivider, children, clickable, onClick, }: CardProps): import("react/jsx-runtime").JSX.Element;
