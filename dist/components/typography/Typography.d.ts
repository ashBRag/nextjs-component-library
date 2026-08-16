import React__default from 'react';

type Variant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";
interface TypographyProps {
    variant?: Variant;
    as?: keyof React__default.JSX.IntrinsicElements;
    className?: string;
    children?: React__default.ReactNode;
}
declare function Typography({ variant, as, className, children, }: TypographyProps): React__default.ReactElement<{
    className: string;
}, string | React__default.JSXElementConstructor<any>>;

export { Typography };
