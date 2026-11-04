import React from "react";
import "./typography.base.css";
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "body-sm" | "body-lg" | "caption" | "label";
export type TypographyColor = "default" | "inherit" | "primary" | "accent" | "muted";
export interface TypographyProps {
    variant?: TypographyVariant;
    /**
     * "default" keeps the variant's own color (e.g. caption stays primary).
     * "inherit" takes the parent's color (e.g. a button label).
     */
    color?: TypographyColor;
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}
export declare function Typography({ variant, color, as, className, children, }: TypographyProps): React.ReactElement<{
    className: string;
}, string | React.JSXElementConstructor<any>>;
