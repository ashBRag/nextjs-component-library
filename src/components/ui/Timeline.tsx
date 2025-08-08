"use client";

import React from "react";
import Link from "next/link";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  badge?: {
    text: string;
    variant?: "primary" | "success" | "warning" | "danger";
  };
  icon?: React.ReactNode;
  action?: {
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  const getBadgeStyles = (variant: string = "primary") => {
    const variants = {
      primary:
        "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      success:
        "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700",
      warning:
        "bg-yellow-50 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700",
      danger:
        "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700",
    };
    return variants[variant as keyof typeof variants] || variants.primary;
  };

  const titleStyles =
    "text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-all duration-200 cursor-pointer underline-offset-2";
  const nonClickableTitleStyles =
    "text-lg font-semibold text-gray-900 dark:text-white";

  const renderTitle = (item: TimelineItem) => {
    if (!item.action) {
      return <h3 className={nonClickableTitleStyles}>{item.title}</h3>;
    }

    if (item.action.href) {
      if (item.action.external) {
        return (
          <a
            href={item.action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={titleStyles}
          >
            {item.title}
          </a>
        );
      } else {
        return (
          <Link href={item.action.href} className={titleStyles}>
            {item.title}
          </Link>
        );
      }
    } else if (item.action.onClick) {
      return (
        <button
          onClick={item.action.onClick}
          className={`${titleStyles} text-left bg-transparent border-none p-0 font-inherit focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm`}
        >
          {item.title}
        </button>
      );
    }

    return <h3 className={nonClickableTitleStyles}>{item.title}</h3>;
  };

  return (
    <ol
      className={`relative border-s-2 border-gray-300 dark:border-gray-600 ${className} p-4 m-4`}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`${index === items.length - 1 ? "ms-8" : "mb-12 ms-8"}`}
        >
          {/* Timeline Icon */}
          <span className="absolute flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-full -start-6.5 dark:bg-gray-700 dark:border-gray-600">
            {item.icon}
          </span>

          {/* Content */}
          <div className="flex items-start mb-2 flex-wrap gap-2">
            <div className="flex-1 min-w-0">{renderTitle(item)}</div>
            {item.badge && (
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getBadgeStyles(item.badge.variant)}`}
              >
                {item.badge.text}
              </span>
            )}
          </div>

          <time className="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
            {item.date}
          </time>

          <p className="mb-6 text-base font-normal text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
