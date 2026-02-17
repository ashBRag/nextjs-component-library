"use client";

import React from "react";
import Link from "next/link";

interface UndertaleTimelineItem {
  id: string;
  title: string;
  date: string;
  description?: string;
  badge?: {
    text: string;
    variant?:
      | "determination"
      | "kindness"
      | "justice"
      | "bravery"
      | "patience"
      | "integrity"
      | "perseverance";
  };
  icon?: React.ReactNode;
  action?: {
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
  character?:
    | "sans"
    | "papyrus"
    | "flowey"
    | "frisk"
    | "toriel"
    | "undyne"
    | "alphys"
    | "mettaton";
  memoryType?: "save" | "load" | "reset" | "continue";
}

interface UndertaleTimelineProps {
  items: UndertaleTimelineItem[];
  className?: string;
  theme?: "underground" | "surface" | "dark_world";
  animated?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function UndertaleTimeline({
  items,
  className = "",
  theme = "underground",
  animated = false,
  selectedId,
  onSelect,
}: UndertaleTimelineProps) {
  const getThemeStyles = () => {
    const themes = {
      underground: "border-slate-400 bg-slate-900/20",
      surface: "border-blue-400 bg-blue-900/20",
      dark_world: "border-purple-400 bg-purple-900/20",
    };
    return themes[theme];
  };

  const getBadgeStyles = (variant: string = "perseverance") => {
    const soulColors = {
      determination:
        "bg-red-900/80 text-red-200 border border-red-500 shadow-red-500/30",
      kindness:
        "bg-green-900/80 text-green-200 border border-green-500 shadow-green-500/30",
      justice:
        "bg-yellow-900/80 text-yellow-200 border border-yellow-300 shadow-yellow-300/30",
      bravery:
        "bg-orange-900/80 text-orange-200 border border-orange-500 shadow-orange-500/30",
      patience:
        "bg-cyan-900/80 text-cyan-200 border border-cyan-500 shadow-cyan-500/30",
      integrity:
        "bg-blue-900/80 text-blue-200 border border-blue-500 shadow-blue-500/30",
      perseverance:
        "bg-purple-900/80 text-purple-200 border border-purple-500 shadow-purple-500/30",
    };
    const animationClass = animated ? "animate-pulse" : "";
    return `${
      soulColors[variant as keyof typeof soulColors] || soulColors.determination
    } ${animationClass}`;
  };

  const getCharacterTitleStyles = (character?: string) => {
    const characterStyles = {
      sans: "text-lg font-semibold text-yellow-300 ",
      papyrus: "text-lg font-bold text-orange-400 uppercase tracking-wider ",
      flowey: "text-lg font-bold text-yellow-300 ",
      frisk: "text-lg font-semibold text-red-400 ",
      toriel: "text-lg font-medium text-purple-400 ",
      undyne: "text-lg font-bold text-green-400 uppercase ",
      alphys: "text-lg font-semibold text-yellow-300 ",
      mettaton: "text-lg font-semibold text-pink-400 italic ",
    };

    return character
      ? characterStyles[character as keyof typeof characterStyles]
      : "text-lg font-semibold text-slate-200 ";
  };

  const getTimelineNodeStyles = () => {
    const baseStyles =
      "absolute flex items-center justify-center w-12 h-12 rounded-full border-2  text-lg";
    const positionStyles = "-start-14 backdrop-blur-sm";
    const defaultColor =
      "bg-slate-800/80 border-slate-400 text-slate-200 shadow-slate-400/30";
    const colorStyle = defaultColor;
    const animationStyle = animated
      ? "hover:scale-110 transition-transform duration-300"
      : "";

    return `${baseStyles} ${positionStyles} ${colorStyle} ${animationStyle}`;
  };

  const getCardGlowStyles = (item: UndertaleTimelineItem) => {
    if (!item.action) return "";

    const isSelected = selectedId === item.id;

    const characterGlows = {
      sans: isSelected
        ? "shadow-lg shadow-cyan-400/30 border-cyan-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400/60",
      papyrus: isSelected
        ? "shadow-lg shadow-orange-400/30 border-orange-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-orange-400/20 hover:border-orange-400/60",
      flowey: isSelected
        ? "shadow-lg shadow-yellow-300/30 border-yellow-300/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-yellow-300/20 hover:border-yellow-300/60",
      frisk: isSelected
        ? "shadow-lg shadow-red-400/30 border-red-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-red-400/20 hover:border-red-400/60",
      toriel: isSelected
        ? "shadow-lg shadow-purple-400/30 border-purple-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-purple-400/20 hover:border-purple-400/60",
      undyne: isSelected
        ? "shadow-lg shadow-green-400/30 border-green-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-green-400/20 hover:border-green-400/60",
      alphys: isSelected
        ? "shadow-lg shadow-yellow-300/30 border-yellow-300/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-yellow-300/20 hover:border-yellow-300/60",
      mettaton: isSelected
        ? "shadow-lg shadow-pink-400/30 border-pink-400/80 bg-slate-800/70"
        : "hover:shadow-lg hover:shadow-pink-400/20 hover:border-pink-400/60",
    };

    const defaultGlow = isSelected
      ? "shadow-lg shadow-slate-400/30 border-slate-400/80 bg-slate-800/70"
      : "hover:shadow-lg hover:shadow-slate-400/20 hover:border-slate-400/60";

    const glowStyle = item.character
      ? characterGlows[item.character]
      : defaultGlow;

    const baseStyles = isSelected
      ? "transition-all duration-300 cursor-pointer"
      : "hover:bg-slate-800/60 transition-all duration-300 cursor-pointer";

    return `${glowStyle} ${baseStyles}`;
  };

  const handleCardClick = (item: UndertaleTimelineItem) => {
    if (!item.action) return;

    // Update selection state
    if (onSelect) {
      onSelect(item.id);
    }

    if (item.action.onClick) {
      item.action.onClick();
    } else if (item.action.href && item.action.external) {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
    // Next.js Link navigation is handled by the Link component wrapper
  };

  const renderCardContent = (item: UndertaleTimelineItem) => (
    <div
      className={`relative p-4 rounded-lg bg-slate-800/40 border border-slate-600/50 backdrop-blur-sm ${getCardGlowStyles(
        item
      )}`}
    >
      {/* Content */}
      <div className="flex items-start mb-2 flex-wrap gap-2">
        <div className="flex-1 min-w-0">
          <h3 className={getCharacterTitleStyles(item.character)}>
            {item.title}
          </h3>
        </div>
        {item.badge && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap  ${getBadgeStyles(
              item.badge.variant
            )}`}
          >
            {item.badge.text}
          </span>
        )}
      </div>

      <time className="block mb-3 text-sm font-normal leading-none text-slate-400 ">
        * {item.date}
      </time>

      <p className="text-base font-normal text-slate-300  leading-relaxed">
        {item.description}
      </p>

      {/* Small corner decorations for content boxes */}
      <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-slate-500 opacity-50"></div>
      <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-slate-500 opacity-50"></div>
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l border-b border-slate-500 opacity-50"></div>
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-slate-500 opacity-50"></div>
    </div>
  );

  const renderCard = (item: UndertaleTimelineItem) => {
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
    <div className={`relative ${getThemeStyles()} ${className}`}>
      <ol
        className={`relative border-s-2 ms-6 ${
          theme === "underground"
            ? "border-slate-400"
            : theme === "surface"
            ? "border-blue-400"
            : "border-purple-400"
        }`}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`${
              index === items.length - 1 ? "ms-8" : "mb-12 ms-8"
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
