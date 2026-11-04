import React from "react";
import "./typography.base.css";
type Variant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";
interface TypographyProps {
    variant?: Variant;
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}
export declare function Typography({ variant, as, className, children, }: TypographyProps): React.ReactElement<{
    className: string;
}, string | React.JSXElementConstructor<any>>;
export {};
