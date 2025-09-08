"use client";
import React from "react";

// Text Field Component
export const PortfolioTextField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  rows = 0,
  className = "",
}) => {
  const InputComponent = rows ? "textarea" : "input";

  return (
    <div className={className}>
      <label 
        className="block text-white font-mono mb-2 text-sm"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <span className="text-[#C778DD]">#</span>
        {label}
      </label>
      <InputComponent
        type={rows ? undefined : type}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-3  border border-[#ABB2BF]/30 
          text-white font-mono text-sm focus:outline-none transition-all
          ${rows ? "resize-none" : ""}
          ${
            error
              ? "border-red-500 focus:border-red-500 shadow-red-500/20 shadow-lg"
              : "focus:border-[#C778DD] focus:shadow-[#C778DD]/20 focus:shadow-lg"
          }
        `}
        style={{ fontFamily: "'Fira Code', monospace" }}
        placeholder={placeholder}
      />
      {error && (
        <p 
          className="text-red-400 font-mono mt-2 text-sm"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

// Button Component
export const PortfolioButton = ({
  onClick,
  disabled = false,
  variant = "primary",
  size = "default",
  children,
  className = "",
}) => {
  const variants = {
    primary: "bg-[#C778DD] border-[#C778DD] text-white hover:bg-[#C778DD]/80",
    secondary: "bg-transparent border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD]/10",
    outline: "bg-transparent border-[#ABB2BF] text-[#ABB2BF] hover:border-[#C778DD] hover:text-[#C778DD]",
    danger: "bg-red-600 border-red-600 text-white hover:bg-red-500",
    disabled: "bg-[#ABB2BF]/20 border-[#ABB2BF]/20 text-[#ABB2BF]/50",
  };

  const sizes = {
    small: "px-3 py-2 text-sm",
    default: "px-4 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  const variantClass = disabled ? variants.disabled : variants[variant];
  const sizeClass = sizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-mono border transition-all duration-300 flex items-center justify-center gap-2
        ${variantClass} ${sizeClass} 
        ${
          disabled
            ? "cursor-not-allowed"
            : "hover:scale-105 active:scale-95"
        } 
        ${className}
      `}
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      {children}
    </button>
  );
};

// Radio Group Component
export const PortfolioRadioGroup = ({
  label,
  options,
  value,
  onChange,
  error,
  name = "radio-group",
  className = "",
}) => {
  return (
    <div className={className}>
      <label 
        className="block text-white font-mono mb-3 text-sm"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <span className="text-[#C778DD]">#</span>
        {label}
      </label>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option.value} className="block cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div
              className={`
                p-4 border transition-all font-mono relative
                ${
                  value === option.value
                    ? "border-[#C778DD] bg-[#C778DD]/10 text-white"
                    : "border-[#ABB2BF]/30  text-[#ABB2BF] hover:border-[#C778DD]/50 hover:text-white"
                }
              `}
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              {/* Corner brackets for selected option */}
              {value === option.value && (
                <>
                  <div className="absolute top-1 left-1 w-2 h-2">
                    <div className="w-full h-0.5 bg-[#C778DD]"></div>
                    <div className="w-0.5 h-full bg-[#C778DD]"></div>
                  </div>
                  <div className="absolute top-1 right-1 w-2 h-2">
                    <div className="absolute top-0 right-0 w-full h-0.5 bg-[#C778DD]"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-[#C778DD]"></div>
                  </div>
                  <div className="absolute bottom-1 left-1 w-2 h-2">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C778DD]"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#C778DD]"></div>
                  </div>
                  <div className="absolute bottom-1 right-1 w-2 h-2">
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#C778DD]"></div>
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#C778DD]"></div>
                  </div>
                </>
              )}
              
              <div className="relative z-10">
                <div className="text-sm font-medium">{option.label}</div>
                {option.description && (
                  <div className="text-xs mt-1 opacity-70">
                    {option.description}
                  </div>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
      {error && (
        <p 
          className="text-red-400 font-mono mt-2 text-sm"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

// Select Dropdown Component
export const PortfolioSelect = ({
  label,
  options,
  value,
  onChange,
  error,
  placeholder = "Select an option...",
  className = "",
}) => {
  return (
    <div className={className}>
      <label 
        className="block text-white font-mono mb-2 text-sm"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <span className="text-[#C778DD]">#</span>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-3  border border-[#ABB2BF]/30 
          text-white font-mono text-sm focus:outline-none transition-all
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "focus:border-[#C778DD]"
          }
        `}
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <option value="" className=" text-[#ABB2BF]">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className=" text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p 
          className="text-red-400 font-mono mt-2 text-sm"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

// Status Bar Component (for forms)
export const PortfolioStatusBar = ({ progress, status = "Ready" }) => {
  return (
    <div className=" border border-[#ABB2BF]/30 p-4 font-mono">
      <div 
        className="text-[#ABB2BF] text-sm flex justify-between items-center"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <span>
          <span className="text-[#C778DD]">></span> Status: {status}
        </span>
        <span>Progress: {progress}%</span>
        <div className="w-20 h-2 bg-[#ABB2BF]/20 relative">
          <div 
            className="h-full bg-[#C778DD] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Container/Form Component
export const PortfolioFormCard = ({ children, title, className = "" }) => {
  return (
    <div className={` border border-[#ABB2BF]/30 p-6 relative ${className}`}>
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4">
        <div className="w-full h-0.5 bg-[#ABB2BF]/30"></div>
        <div className="w-0.5 h-full bg-[#ABB2BF]/30"></div>
      </div>
      <div className="absolute top-2 right-2 w-4 h-4">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
      </div>
      <div className="absolute bottom-2 left-2 w-4 h-4">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
      </div>
      <div className="absolute bottom-2 right-2 w-4 h-4">
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
      </div>

      {title && (
        <h3 
          className="text-white font-mono text-lg mb-6"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="text-[#C778DD]">#</span>
          {title}
        </h3>
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

