import React from "react";
type CornerPosition = "tl" | "tr" | "bl" | "br";
type CornerSize = "sm" | "lg";
type CornerInset = "inside" | "outside";
type CornerColor = "primary" | "nav-active" | "tab-active" | "corner-token";
interface CornerBracketsProps {
    corners?: CornerPosition[];
    size?: CornerSize;
    inset?: CornerInset;
    color?: CornerColor;
    /** Wrap the corners in an absolutely-positioned, full-bleed wrapper span. */
    wrapped?: boolean;
    className?: string;
}
/**
 * Decorative corner-bracket primarys. Purely visual — renders nothing
 * outside the dev profile (see src/styles/profiles/dev/corner.css).
 */
export declare function CornerBrackets({ corners, size, inset, color, wrapped, className, }: CornerBracketsProps): React.JSX.Element;
export {};
