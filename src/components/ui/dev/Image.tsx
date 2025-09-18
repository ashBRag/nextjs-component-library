import Image from "next/image";

interface PortfolioProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  statusType?: "available" | "working" | "learning" | "building";
}

export default function PortfolioProfileImage({
  src,
  alt,
  className = "",
  size = "lg",
  animated = true,
  statusType,
}: PortfolioProfileImageProps) {
  const getSizeStyles = () => {
    const sizes = {
      sm: {
        container: "w-32 h-32",
        image: "w-28 h-28",
        width: 112,
        height: 112,
      },
      md: {
        container: "w-48 h-48",
        image: "w-44 h-44",
        width: 176,
        height: 176,
      },
      lg: {
        container: "w-80 h-80",
        image: "w-76 h-76",
        width: 304,
        height: 304,
      },
      xl: {
        container: "w-96 h-96",
        image: "w-92 h-92",
        width: 368,
        height: 368,
      },
    };
    return sizes[size];
  };

  const getBorderStyles = () => {
    return "border-[#C778DD] shadow-[#C778DD]/50 bg-[#282C33]";
  };

  const getStatusIcon = () => {
    const icons = {
      available: "●",
      working: "⚡",
      learning: "📚",
      building: "🔧",
    };
    return statusType ? icons[statusType] : null;
  };

  const getStatusColor = () => {
    const colors = {
      available: "text-green-400 border-green-400 bg-green-400/20",
      working: "text-[#C778DD] border-[#C778DD] bg-[#C778DD]/20",
      learning: "text-blue-400 border-blue-400 bg-blue-400/20",
      building: "text-yellow-400 border-yellow-400 bg-yellow-400/20",
    };
    return statusType
      ? colors[statusType]
      : "text-[#C778DD] border-[#C778DD] bg-[#C778DD]/20";
  };

  const sizeConfig = getSizeStyles();

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main Profile Container */}
      <div
        className={`
        relative ${sizeConfig.container} 
        backdrop-blur-sm
      `}
      >
        {/* Corner Brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4">
          <div className="w-full h-0.5 bg-[#ABB2BF]"></div>
          <div className="w-0.5 h-full bg-[#ABB2BF]"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-[#ABB2BF]"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-[#ABB2BF]"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ABB2BF]"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#ABB2BF]"></div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#ABB2BF]"></div>
        </div>

        {/* Profile Image Container */}
        <div
          className={`absolute inset-2 overflow-hidden border-2 ${getBorderStyles()}`}
        >
          <Image
            src={src}
            alt={alt}
            className={`${sizeConfig.image} object-cover`}
            width={sizeConfig.width}
            height={sizeConfig.height}
            style={{
              fontFamily: "'Fira Code', monospace",
            }}
          />
        </div>

        {/* Status Type Icon */}
        {statusType && (
          <div className="absolute -top-3 -right-3">
            <div
              className={`
              w-8 h-8 border-2 flex items-center justify-center font-mono text-lg font-bold
              ${getStatusColor()} backdrop-blur-sm
              ${animated ? "animate-pulse" : ""}
            `}
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              {getStatusIcon()}
            </div>
          </div>
        )}

        {/* Subtle inner glow effect */}
        <div className="absolute inset-2 border border-[#C778DD]/20 pointer-events-none"></div>
      </div>
    </div>
  );
}
