import React from "react";

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

const ALL_CORNERS: CornerPosition[] = ["tl", "tr", "bl", "br"];

/**
 * Decorative corner-bracket accents. Purely visual — renders nothing
 * outside the dev profile (see src/styles/profiles/dev/corner.css).
 */
export function CornerBrackets({
  corners = ALL_CORNERS,
  size = "sm",
  inset = "inside",
  color = "accent",
  wrapped = false,
  className = "",
}: CornerBracketsProps) {
  const spans = corners.map((corner) => (
    <span
      key={corner}
      className={[
        "corner",
        `corner--${corner}`,
        `corner--${size}`,
        `corner--${inset}`,
        `corner--${color}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    />
  ));

  if (!wrapped) return <>{spans}</>;

  return (
    <span className="corners-wrapper" aria-hidden="true">
      {spans}
    </span>
  );
}
