import Image from 'next/image';

interface UndertaleProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  character?: 'sans' | 'papyrus' | 'flowey' | 'frisk' | 'toriel' | 'undyne' | 'alphys' | 'mettaton';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showSoulHeart?: boolean;
  memoryType?: 'save' | 'load' | 'reset' | 'continue';
}

export default function UndertaleProfileImage({ 
  src, 
  alt, 
  className = "",
  character = 'sans',
  size = 'lg',
  animated = true,
  showSoulHeart = false,
  memoryType
}: UndertaleProfileImageProps) {
  
  const getSizeStyles = () => {
    const sizes = {
      sm: { container: 'w-32 h-32', image: 'w-28 h-28', width: 112, height: 112 },
      md: { container: 'w-48 h-48', image: 'w-44 h-44', width: 176, height: 176 },
      lg: { container: 'w-80 h-80', image: 'w-76 h-76', width: 304, height: 304 },
      xl: { container: 'w-96 h-96', image: 'w-92 h-92', width: 368, height: 368 }
    };
    return sizes[size];
  };

  const getCharacterBorderStyles = () => {
    const characterStyles = {
      sans: 'border-cyan-400 shadow-cyan-400/50 bg-cyan-900/20',
      papyrus: 'border-orange-400 shadow-orange-400/50 bg-orange-900/20',
      flowey: 'border-yellow-500 shadow-yellow-500/60 bg-yellow-900/20',
      frisk: 'border-red-500 shadow-red-500/50 bg-red-900/20',
      toriel: 'border-purple-400 shadow-purple-400/50 bg-purple-900/20',
      undyne: 'border-green-400 shadow-green-400/50 bg-green-900/20',
      alphys: 'border-yellow-400 shadow-yellow-400/50 bg-yellow-900/20',
      mettaton: 'border-pink-400 shadow-pink-400/50 bg-pink-900/20'
    };
    return characterStyles[character];
  };

  const getAnimationStyles = () => {
    if (!animated) return '';
    
    const animations = {
      sans: 'hover:scale-105 hover:rotate-1 transition-all duration-500 ease-out',
      papyrus: 'hover:scale-110 hover:-rotate-2 transition-all duration-300',
      flowey: 'hover:scale-110 hover:brightness-110 transition-all duration-200 hover:shadow-yellow-500/70',
      frisk: 'hover:scale-105 transition-all duration-300 hover:shadow-red-500/60',
      toriel: 'hover:scale-105 transition-all duration-400 ease-in-out',
      undyne: 'hover:scale-110 hover:rotate-2 transition-all duration-200',
      alphys: 'hover:scale-105 transition-all duration-300',
      mettaton: 'hover:scale-115 hover:rotate-3 transition-all duration-300 ease-out hover:brightness-110'
    };
    return animations[character];
  };

  const getMemoryTypeIcon = () => {
    const icons = {
      save: "★",
      load: "⟲", 
      reset: "⟳",
      continue: "▶"
    };
    return memoryType ? icons[memoryType] : null;
  };

  const sizeConfig = getSizeStyles();

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main Profile Container */}
      <div className={`
        relative ${sizeConfig.container} 
        rounded-lg border-4 backdrop-blur-sm shadow-2xl
        ${getCharacterBorderStyles()}
        ${getAnimationStyles()}
      `}>
        {/* Pixelated Corner Decorations */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-l-4 border-t-4 border-current bg-current/20"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-r-4 border-t-4 border-current bg-current/20"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-4 border-b-4 border-current bg-current/20"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-4 border-b-4 border-current bg-current/20"></div>

        {/* Additional Pixel Decorations */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-current opacity-40"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-current opacity-40"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-current opacity-40"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-current opacity-40"></div>

        {/* Profile Image */}
        <div className="absolute inset-2 rounded-lg overflow-hidden">
          <Image 
            src={src}
            alt={alt}
            className={`${sizeConfig.image} object-cover rounded-lg`}
            width={sizeConfig.width}
            height={sizeConfig.height}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>


        {/* Memory Type Icon */}
        {memoryType && (
          <div className="absolute -top-3 -right-3">
            <div className={`
              w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-lg font-bold
              ${getCharacterBorderStyles()} backdrop-blur-sm
              ${animated ? 'animate-bounce' : ''}
            `}>
              {getMemoryTypeIcon()}
            </div>
          </div>
        )}

        {/* Soul Heart */}
        {showSoulHeart && (
          <div className="absolute -bottom-3 -right-3">
            <div className={`
              w-6 h-6 transform rotate-45 border-2
              ${character === 'frisk' ? 'bg-red-500 border-red-600' : 'bg-current border-current'}
              ${animated ? 'animate-pulse' : ''}
            `}>
              <div className="absolute inset-1 bg-current opacity-80"></div>
            </div>
          </div>
        )}

        {/* HP Bar Style Border Animation */}
        {animated && (
          <div className="absolute inset-0 rounded-lg border-2 border-current opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-1 border border-current rounded-lg opacity-50"></div>
          </div>
        )}
      </div>
    </div>
  );
}