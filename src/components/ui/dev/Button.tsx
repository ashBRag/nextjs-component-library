/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LuExternalLink } from "react-icons/lu";

interface PortfolioButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  downloadName?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function PortfolioButton({
  href,
  onClick,
  className = "",
  downloadName,
  children,
  variant = 'outline',
  size = 'md',
  disabled = false,
}: PortfolioButtonProps) {
  
  const getVariantStyles = () => {
    const variants = {
      primary: `
        bg-[#C778DD] text-white border-[#C778DD]
        hover:bg-[#C778DD]/80 hover:border-[#C778DD]/80
      `,
      secondary: `
         text-[#C778DD] border-[#C778DD]
        hover:bg-[#C778DD]/10
      `,
      outline: `
        bg-transparent text-white border-[#C778DD]
        hover:bg-[#C778DD]/10 hover:text-[#C778DD]
      `
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    return sizes[size];
  };

  const baseStyles = `
    font-mono border transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-105 active:scale-95
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        download={downloadName}
        onClick={onClick}
        className={baseStyles}
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      {children}
    </button>
  );
}

// Download Resume Button
export function DownloadResumeButton({
  href = "/resume.pdf",
  className = "",
  downloadName = "Resume.pdf",
}: {
  href?: string;
  className?: string;
  downloadName?: string;
}) {
  return (
    <PortfolioButton
      href={href}
      downloadName={downloadName}
      variant="outline"
      size="md"
      className={className}
    >
      <span className="flex items-center gap-2">
        <span>Download Resume</span>
        <span className="text-[#ABB2BF] text-sm">→</span>
      </span>
    </PortfolioButton>
  );
}

// Contact Link Button
export function ContactLinkButton({
  icon: Icon,
  text,
  href,
  variant = "outline",
  size = "md",
  showExternalIcon = true,
  className = "",
  iconColor = "text-[#C778DD]",
}: {
  icon: React.ComponentType<any>;
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showExternalIcon?: boolean;
  className?: string;
  iconColor?: string;
}) {
  
  const getSizeStyles = () => {
    const sizes = {
      sm: "p-2 text-sm",
      md: "p-3 text-base", 
      lg: "p-4 text-lg"
    };
    return sizes[size];
  };

  const getIconSize = () => {
    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24
    };
    return iconSizes[size];
  };

  const getVariantStyles = () => {
    const variants = {
      primary: `
        bg-[#C778DD] text-white border-[#C778DD]
        hover:bg-[#C778DD]/80
      `,
      secondary: `
         text-[#ABB2BF] border-[#ABB2BF]/30
        hover:bg-[#ABB2BF]/10 hover:text-white
      `,
      outline: `
        bg-transparent text-[#ABB2BF] border-[#ABB2BF]/30
        hover:bg-[#ABB2BF]/10 hover:text-white hover:border-[#ABB2BF]
      `
    };
    return variants[variant];
  };

  const Component = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      {...props}
      className={`
        flex items-center gap-3 border font-mono transition-all duration-300 group
        hover:scale-105 active:scale-95
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      <Icon
        className={`${iconColor} group-hover:text-[#C778DD] transition-colors flex-shrink-0`}
        size={getIconSize()}
      />
      <span className="flex-1 text-left">{text}</span>
      {showExternalIcon && href && (
        <LuExternalLink
          className="text-[#ABB2BF] group-hover:text-[#C778DD] transition-colors"
          size={getIconSize() * 0.8}
        />
      )}
    </Component>
  );
}