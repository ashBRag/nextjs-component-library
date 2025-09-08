import React from "react";

interface PortfolioCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showBorder?: boolean;
  showCorners?: boolean;
  children?: React.ReactNode;
}

export default function Card({
  title,
  subtitle,
  description,
  content,
  className = "",
  titleClassName = "text-white",
  subtitleClassName = "",
  descriptionClassName = "",
  size = "md",
  animated = true,
  showBorder = true,
  showCorners = true,
  children,
}: PortfolioCardProps) {
  const getSizeStyles = () => {
    const sizes = {
      sm: "p-4 text-sm",
      md: "p-6 text-base", 
      lg: "p-8 text-lg",
    };
    return sizes[size];
  };

  const getTitleSizeStyles = () => {
    const titleSizes = {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
    };
    return titleSizes[size];
  };

  const getAnimationStyles = () => {
    if (!animated) return "";
    return "hover:border-[#C778DD]/50 transition-all duration-300 ease-out";
  };

  const getBorderStyles = () => {
    if (!showBorder) return "";
    return "border border-[#ABB2BF]/30";
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Corner brackets */}
      {showCorners && (
        <>
          <div className="absolute -top-2 -left-2 w-6 h-6">
            <div className="w-full h-0.5 bg-[#ABB2BF]"></div>
            <div className="w-0.5 h-6 bg-[#ABB2BF]"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-[#ABB2BF]"></div>
          </div>
        </>
      )}

      {/* Main card */}
      <div
        className={`
          relative  font-mono w-full
          ${getBorderStyles()}
          ${getSizeStyles()}
          ${getAnimationStyles()}
          ${className}
        `}
        style={{
          fontFamily: "'Fira Code', monospace"
        }}
      >
        {/* Title */}
        <h3
          className={`
            font-medium mb-2
            ${getTitleSizeStyles()}
            ${titleClassName}
          `}
        >
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <h4
            className={`
              text-base mb-4 text-[#C778DD]
              ${subtitleClassName}
            `}
          >
            {subtitle}
          </h4>
        )}

        {/* Description */}
        {description && (
          <p
            className={`
              text-[#ABB2BF] leading-relaxed mb-4
              ${descriptionClassName}
            `}
          >
            {description}
          </p>
        )}

        {/* Content */}
        {content && (
          <div className="text-[#ABB2BF] mb-4">
            {content}
          </div>
        )}

        {/* Children */}
        {children && (
          <div className="text-[#ABB2BF]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}