"use client"

import React from 'react';
import Link from 'next/link';

interface UndertaleTimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  badge?: {
    text: string;
    variant?: 'determination' | 'kindness' | 'justice' | 'bravery' | 'patience' | 'integrity' | 'perseverance';
  };
  icon?: React.ReactNode;
  action?: {
    href?: string;
    onClick?: () => void;
    external?: boolean;
  };
  character?: 'sans' | 'papyrus' | 'flowey' | 'frisk' | 'toriel' | 'undyne' | 'alphys' | 'mettaton';
  memoryType?: 'save' | 'load' | 'reset' | 'continue';
}

interface UndertaleTimelineProps {
  items: UndertaleTimelineItem[];
  className?: string;
  theme?: 'underground' | 'surface' | 'dark_world';
  animated?: boolean;
}

export default function UndertaleTimeline({ 
  items, 
  className = "",
  theme = 'underground',
  animated = true
}: UndertaleTimelineProps) {
  
  const getThemeStyles = () => {
    const themes = {
      underground: 'border-slate-400 bg-slate-900/20',
      surface: 'border-blue-400 bg-blue-900/20',
      dark_world: 'border-purple-400 bg-purple-900/20'
    };
    return themes[theme];
  };

  const getBadgeStyles = (variant: string = 'determination') => {
    const soulColors = {
      determination: 'bg-red-900/80 text-red-200 border border-red-500 shadow-red-500/30',
      kindness: 'bg-green-900/80 text-green-200 border border-green-500 shadow-green-500/30',
      justice: 'bg-yellow-900/80 text-yellow-200 border border-yellow-500 shadow-yellow-500/30',
      bravery: 'bg-orange-900/80 text-orange-200 border border-orange-500 shadow-orange-500/30',
      patience: 'bg-cyan-900/80 text-cyan-200 border border-cyan-500 shadow-cyan-500/30',
      integrity: 'bg-blue-900/80 text-blue-200 border border-blue-500 shadow-blue-500/30',
      perseverance: 'bg-purple-900/80 text-purple-200 border border-purple-500 shadow-purple-500/30',
    };
    const animationClass = animated ? 'animate-pulse' : '';
    return `${soulColors[variant as keyof typeof soulColors] || soulColors.determination} ${animationClass}`;
  };

  const getCharacterTitleStyles = (character?: string, hasAction?: boolean) => {
    if (!hasAction) {
      return "text-lg font-semibold text-slate-200 font-mono";
    }

    const characterStyles = {
      sans: "text-lg font-semibold text-cyan-400 hover:text-cyan-300 font-mono",
      papyrus: "text-lg font-bold text-orange-400 hover:text-orange-300 uppercase tracking-wider font-mono",
      flowey: "text-lg font-bold text-yellow-400 hover:text-yellow-300 font-mono",
      frisk: "text-lg font-semibold text-red-400 hover:text-red-300 font-mono",
      toriel: "text-lg font-medium text-purple-400 hover:text-purple-300 font-mono",
      undyne: "text-lg font-bold text-green-400 hover:text-green-300 uppercase font-mono",
      alphys: "text-lg font-semibold text-yellow-400 hover:text-yellow-300 font-mono",
      mettaton: "text-lg font-semibold text-pink-400 hover:text-pink-300 italic font-mono"
    };

    const baseStyle = character ? characterStyles[character as keyof typeof characterStyles] : characterStyles.sans;
    const hoverEffect = animated ? "hover:underline transition-all duration-200 cursor-pointer underline-offset-2" : "cursor-pointer";
    
    return `${baseStyle} ${hoverEffect}`;
  };

  const getMemoryTypeIcon = (memoryType?: string) => {
    const memoryIcons = {
      save: "★",
      load: "⟲",
      reset: "⟳",
      continue: "▶"
    };
    return memoryType ? memoryIcons[memoryType as keyof typeof memoryIcons] || "●" : "●";
  };

  const getCharacterPrefix = (character?: string) => {
    const prefixes = {
      papyrus: "* ",
      flowey: "* ",
      sans: "> ",
      undyne: "! ",
      alphys: "... ",
      mettaton: "♪ "
    };
    return character ? prefixes[character as keyof typeof prefixes] || "" : "";
  };

  const getCharacterSuffix = (character?: string) => {
    const suffixes = {
      sans: "...",
      mettaton: " ♪",
      alphys: "...",
      papyrus: "!"
    };
    return character ? suffixes[character as keyof typeof suffixes] || "" : "";
  };

  const getTimelineNodeStyles = (item: UndertaleTimelineItem) => {
    const baseStyles = "absolute flex items-center justify-center w-12 h-12 rounded-full border-2 font-mono text-lg";
    const positionStyles = "-start-13.5 backdrop-blur-sm";
    
    const characterColors = {
      sans: "bg-cyan-900/80 border-cyan-400 text-cyan-200 shadow-cyan-400/50",
      papyrus: "bg-orange-900/80 border-orange-400 text-orange-200 shadow-orange-400/50",
      flowey: "bg-yellow-900/80 border-yellow-500 text-yellow-200 shadow-yellow-500/60",
      frisk: "bg-red-900/80 border-red-500 text-red-200 shadow-red-500/50",
      toriel: "bg-purple-900/80 border-purple-400 text-purple-200 shadow-purple-400/50",
      undyne: "bg-green-900/80 border-green-400 text-green-200 shadow-green-400/50",
      alphys: "bg-yellow-900/80 border-yellow-400 text-yellow-200 shadow-yellow-400/50",
      mettaton: "bg-pink-900/80 border-pink-400 text-pink-200 shadow-pink-400/50"
    };

    const defaultColor = "bg-slate-800/80 border-slate-400 text-slate-200 shadow-slate-400/30";
    const colorStyle = item.character ? characterColors[item.character] : defaultColor;
    const animationStyle = animated ? "hover:scale-110 transition-transform duration-300" : "";
    
    return `${baseStyles} ${positionStyles} ${colorStyle} ${animationStyle}`;
  };

  const renderTitle = (item: UndertaleTimelineItem) => {
    const titleContent = `${getCharacterPrefix(item.character)}${item.title}${getCharacterSuffix(item.character)}`;
    
    if (!item.action) {
      return (
        <h3 className={getCharacterTitleStyles(item.character, false)}>
          {titleContent}
        </h3>
      );
    }

    if (item.action.href) {
      if (item.action.external) {
        return (
          <a 
            href={item.action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={getCharacterTitleStyles(item.character, true)}
          >
            {titleContent}
          </a>
        );
      } else {
        return (
          <Link 
            href={item.action.href}
            className={getCharacterTitleStyles(item.character, true)}
          >
            {titleContent}
          </Link>
        );
      }
    } else if (item.action.onClick) {
      return (
        <button 
          onClick={item.action.onClick}
          className={`${getCharacterTitleStyles(item.character, true)} text-left bg-transparent border-none p-0 font-inherit focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 rounded-sm`}
        >
          {titleContent}
        </button>
      );
    }

    return (
      <h3 className={getCharacterTitleStyles(item.character, false)}>
        {titleContent}
      </h3>
    );
  };

  return (
    <div className={`relative backdrop-blur-sm ${getThemeStyles()} ${className}`}>
      {/* Corner decorations */}
      {/*<div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-30"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-30"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-30"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-30"></div>
*/}
      <ol className={`relative border-s-2 ms-6 ${theme === 'underground' ? 'border-slate-400' : theme === 'surface' ? 'border-blue-400' : 'border-purple-400'}`}>
        {items.map((item, index) => (
          <li key={item.id} className={`${index === items.length - 1 ? 'ms-8' : 'mb-12 ms-8'} relative`}>
            {/* Timeline Node */}
            <span className={getTimelineNodeStyles(item)}>
              {item.icon || getMemoryTypeIcon(item.memoryType)}
            </span>

            {/* Content Container */}
            <div className="relative p-4 rounded-lg bg-slate-800/40 border border-slate-600/50 backdrop-blur-sm">
              {/* Content */}
              <div className="flex items-start mb-2 flex-wrap gap-2">
                <div className="flex-1 min-w-0">
                  {renderTitle(item)}
                </div>
                {item.badge && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap font-mono ${getBadgeStyles(item.badge.variant)}`}>
                    {item.badge.text}
                  </span>
                )}
              </div>

              <time className="block mb-3 text-sm font-normal leading-none text-slate-400 font-mono">
                * {item.date}
              </time>

              <p className="text-base font-normal text-slate-300 font-mono leading-relaxed">
                {item.description}
              </p>

              {/* Small corner decorations for content boxes */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-slate-500 opacity-50"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-slate-500 opacity-50"></div>
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l border-b border-slate-500 opacity-50"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-slate-500 opacity-50"></div>
            </div>
          </li>
        ))}
      </ol>

      {/* Bottom indicator */}
      <div className="absolute bottom-4 right-4">
        <div className="w-2 h-2 bg-current opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
}