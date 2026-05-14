import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  size?: "sm" | "md" | "lg" | "compact";
  animated?: boolean;
  showBorder?: boolean;
  showCorners?: boolean;
  children?: React.ReactNode;
  /** Cover image src — renders above title when provided */
  coverImage?: string;
  /** Alt text for cover image */
  coverImageAlt?: string;
  /** Height of the cover image in px. Defaults to 200 */
  coverImageHeight?: number;
  clickable?: boolean;
  onClick?: () => void;
}

export default function Card({
  id,
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
  coverImage,
  coverImageAlt = "",
  coverImageHeight = 200,
  clickable = false,
  onClick,
}: PortfolioCardProps) {
  const getSizeStyles = () => {
    const sizes = {
      sm: "p-4 text-sm",
      md: "p-6 text-base",
      lg: "p-8 text-lg",
      compact: "pl-8 pr-8 text-sm",
    };
    return sizes[size];
  };

  const getTitleSizeStyles = () => {
    const titleSizes = {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      compact: "text-lg",
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

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative w-full ${className}`} id={id}>
      {/* Corner brackets */}
      {showCorners && (
        <>
          <div className="absolute -top-2 -left-2 w-6 h-6 z-10">
            <div className="w-full h-0.5 bg-[#ABB2BF]"></div>
            <div className="w-0.5 h-6 bg-[#ABB2BF]"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 z-10">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-[#ABB2BF]"></div>
          </div>
        </>
      )}

      {/* Main card */}
      <div
        className={`
          relative w-full h-full overflow-hidden 
          ${getBorderStyles()}
          ${getAnimationStyles()}
          ${className}
          ${
            clickable
              ? "cursor-pointer hover:border-[#C778DD]/50 hover:text-white hover:/50"
              : ""
          }
        `}
        onClick={handleClick}
      >
        {/* Cover image */}
        {coverImage && (
          <div className="relative w-full aspect-video overflow-hidden rounded-t-lg flex items-center justify-center">
            <Image
              src={coverImage}
              alt={coverImageAlt}
              fill
              className="object-cover object-center opacity-20"
            />
            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <div className={`relative z-10 ${getSizeStyles()}`}>
              <h3
                className={`font-medium mb-2 text-center text-white ${getTitleSizeStyles()} ${titleClassName}`}
              >
                {title}
              </h3>
            </div>
          </div>
        )}

        {/* Text content */}
        <div className={getSizeStyles()}>
          {/* Title */}
          {!coverImage ? (
            typeof title === "string" ? (
              <h3
                className={`font-medium mb-2 ${getTitleSizeStyles()} ${titleClassName}`}
              >
                {title}
              </h3>
            ) : (
              title
            )
          ) : (
            ""
          )}

          {/* Subtitle */}
          {subtitle && (
            <h4
              className={`text-base mb-4 text-[#C778DD] ${subtitleClassName}`}
            >
              {subtitle}
            </h4>
          )}

          {/* Description */}
          {description && (
            <p
              className={`text-[#ABB2BF] leading-relaxed mb-4 ${descriptionClassName}`}
            >
              {description}
            </p>
          )}

          {/* Content */}
          {content && <div className="text-[#ABB2BF] mb-4">{content}</div>}

          {/* Children */}
          {children && <div className="text-[#ABB2BF]">{children}</div>}
        </div>
      </div>
    </div>
  );
}
