import React from "react";

interface UndertaleCardProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string | React.ReactNode;
  variant?:
    | "papyrus"
    | "sans"
    | "flowey"
    | "frisk"
    | "toriel"
    | "undyne"
    | "alphys"
    | "mettaton";
  size?: "sm" | "md" | "lg";
  noBackground?: boolean;
  animated?: boolean;
  showBorder?: boolean;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description = "",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  variant = "sans",
  size = "md",
  animated = false,
  showBorder = true,
  children,
  noBackground = false,
}: UndertaleCardProps) {
  const getVariantStyles = () => {
    if (noBackground) {
      return "border-cyan-400 text-cyan-100 shadow-cyan-400/20";
    }
    const variants = {
      // Sans - cool blue vibes
      sans: " backdrop-blur-sm bg-slate-900  border-cyan-400 text-cyan-100 shadow-cyan-400/20",

      // Papyrus - orange/warm
      papyrus:
        " backdrop-blur-sm bg-orange-900 border-orange-400 text-orange-100 shadow-orange-400/20",

      // Flowey - dark/sinister
      flowey:
        " backdrop-blur-sm bg-gray-900 border-yellow-500 text-yellow-100 shadow-yellow-500/30",

      // Frisk - determination red
      frisk:
        " backdrop-blur-sm bg-red-950 border-red-500 text-red-100 shadow-red-500/25",

      // Toriel - warm purple/motherly
      toriel:
        " backdrop-blur-sm bg-purple-900 border-purple-400 text-purple-100 shadow-purple-400/20",

      // Undyne - green/heroic
      undyne:
        " backdrop-blur-sm bg-green-900 border-green-400 text-green-100 shadow-green-400/20",

      // Alphys - yellow/scientific
      alphys:
        " backdrop-blur-sm bg-yellow-900 border-yellow-400 text-yellow-100 shadow-yellow-400/20",

      // Mettaton - pink/glamorous
      mettaton:
        " backdrop-blur-sm bg-pink-900 border-pink-400 text-pink-100 shadow-pink-400/20",
    };
    return variants[variant];
  };

  const getTitleVariantStyles = () => {
    const titleVariants = {
      sans: "text-cyan-300",
      papyrus: "text-orange-300 uppercase tracking-wider font-bold",
      flowey: "text-yellow-300 font-bold",
      frisk: "text-red-300 font-semibold",
      toriel: "text-purple-300 font-medium",
      undyne: "text-green-300 font-bold uppercase",
      alphys: "text-yellow-300",
      mettaton: "text-pink-300 italic font-semibold",
    };
    return titleVariants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      sm: "h-fit p-4 text-sm",
      md: "h-fit p-6 text-base",
      lg: "h-fit p-8 text-lg",
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

    const animations = {
      sans: "hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300 ease-out",
      papyrus:
        "hover:scale-105 hover:shadow-orange-400/40 hover:-rotate-1 transition-all duration-300",
      flowey:
        "hover:scale-110 hover:shadow-yellow-500/50 transition-all duration-200 hover:brightness-110",
      frisk:
        "hover:scale-105 hover:shadow-red-500/40 transition-all duration-300",
      toriel:
        "hover:scale-105 hover:shadow-purple-400/40 transition-all duration-300 ease-in-out",
      undyne:
        "hover:scale-105 hover:shadow-green-400/40 hover:rotate-1 transition-all duration-200",
      alphys:
        "hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300",
      mettaton:
        "hover:scale-110 hover:shadow-pink-400/50 hover:rotate-2 transition-all duration-300 ease-out",
    };
    return animations[variant];
  };

  const getBorderStyles = () => {
    if (!showBorder) return "";
    return "border-2";
  };

  const getPixelatedStyles = () => {
    // Add subtle pixelated effect for authentic Undertale feel
    return " selection:bg-white/20";
  };

  return (
    <div
      className={`
      relative block rounded-lg shadow-lg
      ${getVariantStyles()}
      ${getSizeStyles()}
      ${getBorderStyles()}
      ${getAnimationStyles()}
      ${getPixelatedStyles()}
      ${className}

    `}
    >
      {/* Undertale-style corner decorations */}
      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

      <div className="relative z-10">
        <h5
          className={`
          mb-3 font-bold tracking-tight
          ${getTitleSizeStyles()}
          ${getTitleVariantStyles()}
          ${titleClassName}
        `}
        >
          {title}
        </h5>

        {description && (
          <p
            className={`
          font-normal leading-relaxed
          ${descriptionClassName}
        `}
          >
            {description}
          </p>
        )}

        {children}

        {/* Undertale-style footer indicator */}
        <div className="mt-4 flex justify-end">
          <div className="w-2 h-2 bg-current opacity-40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
