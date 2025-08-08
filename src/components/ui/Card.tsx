import React from "react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant?: "default" | "bordered" | "elevated";
  size?: "sm" | "md" | "lg";
}

export default function Card({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  variant = "default",
  size = "md",
}: CardProps) {
  const getVariantStyles = () => {
    const variants = {
      default:
        "bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700",
      bordered:
        "bg-white border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600",
      elevated:
        "bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700",
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      sm: "max-w-xs p-4",
      md: "max-w-sm p-6",
      lg: "max-w-md p-8",
    };
    return sizes[size];
  };

  const getTitleSizeStyles = () => {
    const titleSizes = {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-3xl",
    };
    return titleSizes[size];
  };

  const getDescriptionSizeStyles = () => {
    const descSizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };
    return descSizes[size];
  };

  return (
    <div
      className={`
      block rounded-lg
      ${getVariantStyles()}
      ${getSizeStyles()}
      ${className}
    `}
    >
      <h5
        className={`
        mb-2 font-bold tracking-tight text-gray-900 dark:text-white
        ${getTitleSizeStyles()}
        ${titleClassName}
      `}
      >
        {title}
      </h5>
      <p
        className={`
        font-normal text-gray-700 dark:text-gray-400
        ${getDescriptionSizeStyles()}
        ${descriptionClassName}
      `}
      >
        {description}
      </p>
    </div>
  );
}
