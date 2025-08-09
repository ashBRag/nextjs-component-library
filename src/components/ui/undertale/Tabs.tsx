"use client";

import React from "react";

interface UndertaleTab {
  id: string;
  label: string;
  content: React.ReactNode;
  character?:
    | "sans"
    | "papyrus"
    | "flowey"
    | "frisk"
    | "toriel"
    | "undyne"
    | "alphys"
    | "mettaton";
  soulType?:
    | "determination"
    | "kindness"
    | "justice"
    | "bravery"
    | "patience"
    | "integrity"
    | "perseverance";
  icon?: React.ReactNode;
}

interface UndertaleTabsProps {
  tabs: UndertaleTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  theme?: "underground" | "surface" | "dark_world";
  animated?: boolean;
}

export default function UndertaleTabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  theme = "underground",
  animated = true,
}: UndertaleTabsProps) {
  const getThemeStyles = () => {
    const themes = {
      underground: "bg-slate-900/90 border-slate-700",
      surface: "bg-blue-900/90 border-blue-700",
      dark_world: "bg-purple-900/90 border-purple-700",
    };
    return themes[theme];
  };

  const getCharacterTabStyles = (tab: UndertaleTab, isActive: boolean) => {
    const characterColors = {
      sans: isActive
        ? "text-cyan-300 border-cyan-400 bg-cyan-900/40 shadow-cyan-400/30"
        : "text-cyan-500 border-transparent hover:text-cyan-300 hover:border-cyan-400/50",
      papyrus: isActive
        ? "text-orange-300 border-orange-400 bg-orange-900/40 shadow-orange-400/30"
        : "text-orange-500 border-transparent hover:text-orange-300 hover:border-orange-400/50",
      flowey: isActive
        ? "text-yellow-300 border-yellow-500 bg-yellow-900/40 shadow-yellow-500/40"
        : "text-yellow-500 border-transparent hover:text-yellow-300 hover:border-yellow-500/50",
      frisk: isActive
        ? "text-red-300 border-red-500 bg-red-900/40 shadow-red-500/30"
        : "text-red-500 border-transparent hover:text-red-300 hover:border-red-500/50",
      toriel: isActive
        ? "text-purple-300 border-purple-400 bg-purple-900/40 shadow-purple-400/30"
        : "text-purple-500 border-transparent hover:text-purple-300 hover:border-purple-400/50",
      undyne: isActive
        ? "text-green-300 border-green-400 bg-green-900/40 shadow-green-400/30"
        : "text-green-500 border-transparent hover:text-green-300 hover:border-green-400/50",
      alphys: isActive
        ? "text-yellow-300 border-yellow-400 bg-yellow-900/40 shadow-yellow-400/30"
        : "text-yellow-500 border-transparent hover:text-yellow-300 hover:border-yellow-400/50",
      mettaton: isActive
        ? "text-pink-300 border-pink-400 bg-pink-900/40 shadow-pink-400/30"
        : "text-pink-500 border-transparent hover:text-pink-300 hover:border-pink-400/50",
    };

    const defaultColor = isActive
      ? "text-slate-300 border-slate-400 bg-slate-800/40 shadow-slate-400/20"
      : "text-slate-500 border-transparent hover:text-slate-300 hover:border-slate-400/50";

    const colorStyle = tab.character
      ? characterColors[tab.character]
      : defaultColor;
    const animationStyle = animated
      ? "transition-all duration-300 ease-out"
      : "";
    const activeHover = animated && isActive ? "hover:scale-105" : "";
    const shadowStyle = isActive ? "shadow-lg" : "";

    return `inline-block px-6 py-3 border-b-2 rounded-t-lg font-mono relative backdrop-blur-sm ${colorStyle} ${animationStyle} ${activeHover} ${shadowStyle}`;
  };

  const getCharacterLabelStyles = (character?: string) => {
    const characterStyles = {
      papyrus: "uppercase tracking-wider font-bold",
      flowey: "font-bold",
      undyne: "uppercase font-bold",
      mettaton: "italic font-semibold",
      sans: "",
      frisk: "font-semibold",
      toriel: "font-medium",
      alphys: "",
    };

    return character ? characterStyles[character] : "";
  };

  const getCharacterPrefix = (character?: string, isActive?: boolean) => {
    if (!isActive) return "";

    const prefixes = {
      papyrus: "* ",
      flowey: "* ",
      sans: "> ",
      undyne: "! ",
      alphys: "... ",
      mettaton: "♪ ",
    };
    return character ? prefixes[character] || "" : "";
  };

  const getCharacterSuffix = (character?: string, isActive?: boolean) => {
    if (!isActive) return "";

    const suffixes = {
      sans: "...",
      mettaton: " ♪",
      alphys: "...",
      papyrus: "!",
    };
    return character ? suffixes[character] || "" : "";
  };

  const getSoulTypeContentStyles = (soulType?: string) => {
    const soulColors = {
      determination: "bg-red-900/20 border-red-500/30 text-red-100",
      kindness: "bg-green-900/20 border-green-500/30 text-green-100",
      justice: "bg-yellow-900/20 border-yellow-500/30 text-yellow-100",
      bravery: "bg-orange-900/20 border-orange-500/30 text-orange-100",
      patience: "bg-cyan-900/20 border-cyan-500/30 text-cyan-100",
      integrity: "bg-blue-900/20 border-blue-500/30 text-blue-100",
      perseverance: "bg-purple-900/20 border-purple-500/30 text-purple-100",
    };

    return soulType
      ? soulColors[soulType]
      : "bg-slate-800/40 border-slate-600/30 text-slate-200";
  };

  //const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div
      className={`backdrop-blur-sm border-2 rounded-lg ${getThemeStyles()} ${className}`}
    >
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-20"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-20"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-20"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-20"></div>

      {/* Tab Headers */}
      <div className="mb-0 border-b-2 border-slate-700/50 relative">
        <ul
          className="flex flex-wrap text-sm font-medium text-center relative z-10"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li
                key={tab.id}
                className="relative flex-1"
                role="presentation"
              >
                <button
                  className={`w-full ${getCharacterTabStyles(tab, isActive)}`}
                  onClick={() => onTabChange(tab.id)}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={isActive}
                >
                  {/* Tab corner decorations for active tab */}
                  {isActive && (
                    <>
                      <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-current opacity-50"></div>
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-current opacity-50"></div>
                    </>
                  )}

                  <div className="flex items-center gap-2">
                    {tab.icon && (
                      <span
                        className={animated && isActive ? "animate-pulse" : ""}
                      >
                        {tab.icon}
                      </span>
                    )}
                    <span className={getCharacterLabelStyles(tab.character)}>
                      {getCharacterPrefix(tab.character, isActive)}
                      {tab.label}
                      {getCharacterSuffix(tab.character, isActive)}
                    </span>
                  </div>

                  {/* Selection indicator */}
                  {isActive && (
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`${
                isActive ? "block" : "hidden"
              } p-6 rounded-b-lg border-2 border-t-0 backdrop-blur-sm font-mono relative ${getSoulTypeContentStyles(tab.soulType)}`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              {/* Content area decorations */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-current opacity-30"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-current opacity-30"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-current opacity-30"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-current opacity-30"></div>

              <div className="relative z-10">{tab.content}</div>

              {/* Content indicator */}
              <div className="absolute bottom-3 right-3">
                <div className="w-1.5 h-1.5 bg-current opacity-40 animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
