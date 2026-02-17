"use client";
import React from "react";

// Text Field Component
export const UndertaleTextField = ({
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
      <label className="block text-yellow-500  mb-2 text-sm">{label}</label>
      <InputComponent
        type={rows ? undefined : type}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white  text-sm focus:outline-none transition-all ${
          rows ? "resize-none" : ""
        } ${
          error
            ? "border-red-500 shadow-red-500/50 shadow-lg"
            : "border-blue-400 focus:border-yellow-400 focus:shadow-yellow-400/30 focus:shadow-lg"
        }`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-400  mt-2 animate-pulse">{error}</p>}
    </div>
  );
};

// Button Component
export const UndertaleButton = ({
  onClick,
  disabled = false,
  variant = "primary",
  size = "default",
  children,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-green-600 border-green-400 shadow-green-400/30 hover:bg-green-500",
    secondary:
      "bg-purple-600 border-purple-400 shadow-purple-400/30 hover:bg-purple-500",
    "subtle-primary":
      "bg-green-700/40 border-green-500/50 shadow-green-400/10 hover:bg-green-600/50 text-green-100",
    "subtle-secondary":
      "bg-purple-700/40 border-purple-500/50 shadow-purple-400/10 hover:bg-purple-600/50 text-purple-100",
    danger: "bg-red-600 border-red-400 shadow-red-400/30 hover:bg-red-500",
    "subtle-danger":
      "bg-red-600/40 border-red-400/50 shadow-red-400/10 hover:bg-red-500/50 text-red=100",
    disabled: "bg-gray-600 border-gray-500",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-lg",
    large: "px-8 py-4 text-xl",
  };

  const variantClass = disabled ? variants.disabled : variants[variant];
  const sizeClass = sizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` rounded-lg border-4 transition-all transform flex items-center justify-center gap-3 text-white ${variantClass} ${sizeClass} ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:scale-105 active:scale-95 shadow-lg"
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Radio Group Component
export const UndertaleRadioGroup = ({
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
      <label className="block text-yellow-500  mb-2 text-sm">{label}</label>
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
              className={`p-4 border-2 rounded-lg transition-all  ${
                value === option.value
                  ? "border-yellow-400 bg-yellow-400/20 shadow-yellow-400/30 shadow-lg"
                  : "border-blue-400 bg-black/30 hover:border-yellow-400 hover:bg-yellow-400/10"
              }`}
            >
              <div className="text-white text-sm">{option.label}</div>
              {option.description && (
                <div className="text-gray-300 text-sm mt-1">
                  {option.description}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-red-400  mt-2 animate-pulse">{error}</p>}
    </div>
  );
};

// Select Dropdown Component
export const UndertaleSelect = ({
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
      <label className="block text-yellow-500  mb-2 text-sm">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white  text-sm focus:outline-none transition-all ${
          error
            ? "border-red-500 shadow-red-500/50 shadow-lg"
            : "border-blue-400 focus:border-yellow-400 focus:shadow-yellow-400/30 focus:shadow-lg"
        }`}
      >
        <option value="" className="text-gray-800">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-800"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400  mt-2 animate-pulse">{error}</p>}
    </div>
  );
};

// HP/Stats Bar Component
export const UndertaleStatsBar = ({ hp, progress, determination = "MAX" }) => {
  return (
    <div className="bg-black border-4 border-white rounded-lg p-4">
      <div className="text-white  text-sm">
        <div className="flex justify-between items-center">
          <span>❤️ HP: {hp}/100</span>
          <span>📧 Progress: {progress}</span>
          <span>⭐ Determination: {determination}</span>
        </div>
      </div>
    </div>
  );
};

// Dialog Box Component
export const UndertaleDialog = ({ children, hp }) => {
  return (
    <div className="bg-black border-4 border-white rounded-lg p-6 mb-6">
      <div className="text-white ">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-red-500"></div>
          <span className="text-red-400">HP {hp}/100</span>
          <div className="ml-auto text-red-500">❤️</div>
        </div>
        {children}
      </div>
    </div>
  );
};

// Container/Card Component
export const UndertaleCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-b from-blue-900 to-purple-900 border-4 border-blue-300 rounded-lg p-8 shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};
