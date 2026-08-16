import React__default from 'react';

type CornerPosition = "tl" | "tr" | "bl" | "br";
type CornerSize = "sm" | "lg";
type CornerInset = "inside" | "outside";
type CornerColor = "accent" | "nav-active" | "tab-active" | "corner-token";
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
 * Decorative corner-bracket accents. Purely visual — renders nothing
 * outside the dev profile (see src/styles/profiles/dev/corner.css).
 */
declare function CornerBrackets({ corners, size, inset, color, wrapped, className, }: CornerBracketsProps): React__default.JSX.Element;

export { CornerBrackets };
