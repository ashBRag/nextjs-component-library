"use client";

import React from "react";
import Link from "next/link";

interface PortfolioTimelineItem {
  id: string;
  title: string;
  date: string;
  description?: string;
  badge?: {
    text: string;
    variant?: "primary" | "secondary" | "success" | "warning";
  };
  icon?: React.ReactNode;
  action?: {
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
}

interface PortfolioTimelineProps {
  items: PortfolioTimelineItem[];
  className?: string;
  animated?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function PortfolioTimeline({
  items,
  className = "",
  animated = false,
  selectedId,
  onSelect,
}: PortfolioTimelineProps) {
  const getBadgeStyles = (variant: string = "primary") => {
    const variants = {
      primary: "bg-[#C778DD]/20 text-[#C778DD] border border-[#C778DD]/50",
      secondary: "bg-[#ABB2BF]/20 text-[#ABB2BF] border border-[#ABB2BF]/50",
      success: "bg-green-500/20 text-green-400 border border-green-500/50",
      warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50",
    };
    const animationClass = animated ? "animate-pulse" : "";
    return `${
      variants[variant as keyof typeof variants] || variants.primary
    } ${animationClass}`;
  };

  const getTitleStyles = () => {
    return "text-lg font-medium text-white ";
  };

  const getTimelineNodeStyles = () => {
    const baseStyles =
      "absolute flex items-center justify-center w-10 h-10 rounded-full border-2  text-sm";
    const positionStyles = "-start-12  z-index-12 bg-white";
    const colorStyle = "border-[#C778DD] text-[#C778DD]";
    const animationStyle = animated
      ? "hover:scale-110 transition-transform duration-300"
      : "";

    return `${baseStyles} ${positionStyles} ${colorStyle} ${animationStyle}`;
  };

  const getCardStyles = (item: PortfolioTimelineItem) => {
    if (!item.action) return " border border-[#ABB2BF]/30";

    const isSelected = selectedId === item.id;

    if (isSelected) {
      return " border border-[#C778DD]/50 shadow-lg shadow-[#C778DD]/20";
    }

    return " border border-[#ABB2BF]/30 hover:border-[#C778DD]/50 hover:shadow-lg hover:shadow-[#C778DD]/10 cursor-pointer";
  };

  const handleCardClick = (item: PortfolioTimelineItem) => {
    if (!item.action) return;

    if (onSelect) {
      onSelect(item.id);
    }

    if (item.action.onClick) {
      item.action.onClick();
    } else if (item.action.href && item.action.external) {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
  };

  const renderCardContent = (item: PortfolioTimelineItem) => (
    <div
      className={`relative p-6 rounded  transition-all duration-300 ${getCardStyles(
        item
      )}`}
    >
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3">
        <div className="w-full h-0.5 bg-[#ABB2BF]/50"></div>
        <div className="w-0.5 h-full bg-[#ABB2BF]/50"></div>
      </div>
      <div className="absolute top-2 right-2 w-3 h-3">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-[#ABB2BF]/50"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#ABB2BF]/50"></div>
      </div>
      <div className="absolute bottom-2 left-2 w-3 h-3">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ABB2BF]/50"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#ABB2BF]/50"></div>
      </div>
      <div className="absolute bottom-2 right-2 w-3 h-3">
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]/50"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#ABB2BF]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start mb-3 flex-wrap gap-2">
          <div className="flex-1 min-w-0">
            <h3 className={getTitleStyles()}>{item.title}</h3>
          </div>
          {item.badge && (
            <span
              className={`text-xs font-medium px-3 py-1 rounded whitespace-nowrap  ${getBadgeStyles(
                item.badge.variant
              )}`}
            >
              {item.badge.text}
            </span>
          )}
        </div>

        <time className="block mb-3 text-sm text-[#C778DD] ">{item.date}</time>

        {item.description && (
          <p className="text-base text-[#ABB2BF]  leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );

  const renderCard = (item: PortfolioTimelineItem) => {
    if (!item.action) {
      return renderCardContent(item);
    }

    if (item.action.href && !item.action.external) {
      return (
        <Link href={item.action.href} className="block">
          {renderCardContent(item)}
        </Link>
      );
    }

    return (
      <div onClick={() => handleCardClick(item)}>{renderCardContent(item)}</div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      <ol className="relative border-l-2 border-[#C778DD]/30 ml-6">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`${
              index === items.length - 1 ? "ml-6" : "mb-8 ml-6"
            } relative`}
          >
            {/* Timeline Node */}
            <span className={getTimelineNodeStyles()}>{item.icon}</span>

            {/* Content Container */}
            {renderCard(item)}
          </li>
        ))}
      </ol>
    </div>
  );
}
