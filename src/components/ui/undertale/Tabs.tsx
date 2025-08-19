"use client";

import React, { useState, useEffect } from "react";

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
  className?: string;
}

interface UndertaleTabsProps {
  tabs: UndertaleTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  theme?: "underground" | "surface" | "dark_world";
  animated?: boolean;
  contentHeight?: string | number;
  mobileBottomMenu?: boolean; // New prop for mobile layout
}

export default function UndertaleTabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  theme = "underground",
  animated = true,
  contentHeight = "77vh",
  mobileBottomMenu = true,
}: UndertaleTabsProps) {
  const [computedHeight, setComputedHeight] = useState<string>("77vh");

  useEffect(() => {
    const calculateHeight = () => {
      if (typeof contentHeight === "number") {
        setComputedHeight(`${contentHeight}px`);
      } else if (typeof contentHeight === "string") {
        if (contentHeight.includes("%")) {
          const percentage = parseFloat(contentHeight);
          setComputedHeight(`${percentage}vh`);
        } else {
          setComputedHeight(contentHeight);
        }
      }
    };

    calculateHeight();
    
    if (typeof contentHeight === "string" && contentHeight.includes("%")) {
      window.addEventListener("resize", calculateHeight);
      return () => window.removeEventListener("resize", calculateHeight);
    }
  }, [contentHeight]);

  const getThemeStyles = () => {
    const themes = {
      underground: "bg-slate-900/90 border-slate-700",
      surface: "bg-blue-900/90 border-blue-700",
      dark_world: "bg-purple-900/90 border-purple-700",
    };
    return themes[theme];
  };

  const getCharacterTabStyles = (tab: UndertaleTab, isActive: boolean, isMobile = false) => {
    // Sans style only
    const colorStyle = isActive
      ? "text-cyan-300 border-cyan-400 bg-cyan-900/40 shadow-cyan-400/30"
      : "text-cyan-500 border-transparent hover:text-cyan-300 hover:border-cyan-400/50";
    
    const animationStyle = animated
      ? "transition-all duration-300 ease-out"
      : "";
    
    const activeHover = animated && isActive ? "hover:scale-105" : "";
    const shadowStyle = isActive ? "shadow-lg" : "";
    
    // Different styles for mobile bottom menu
    const borderStyle = isMobile 
      ? (isActive ? "border-t-2" : "border-transparent")
      : (isActive ? "border-b-2" : "border-transparent");
    
    const roundingStyle = isMobile 
      ? "rounded-b-lg" 
      : "rounded-t-lg";

    return `inline-block px-3 py-2 sm:px-6 sm:py-3 ${borderStyle} ${roundingStyle} font-mono relative backdrop-blur-sm ${colorStyle} ${animationStyle} ${activeHover} ${shadowStyle}`;
  };

  const getCharacterPrefix = (character?: string, isActive?: boolean) => {
    // Sans prefix only
    return isActive ? "> " : "";
  };

  const getCharacterSuffix = (character?: string, isActive?: boolean) => {
    // Sans suffix only
    return isActive ? "..." : "";
  };

  const getSoulTypeContentStyles = () => {
    // Default slate colors only
    return "border-slate-600/30 text-slate-200";
  };

  const TabHeaders = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`${isMobile ? "border-t-2" : "border-b-2"} border-slate-700/50 relative`}>
      <ul
        className="flex flex-wrap text-xs sm:text-sm font-medium text-center relative z-10"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id} className={`${tab.className} relative flex-1`} role="presentation">
              <button
                className={`w-full ${getCharacterTabStyles(tab, isActive, isMobile)}`}
                onClick={() => onTabChange(tab.id)}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={isActive}
              >
                {/* Tab corner decorations for active tab */}
                {isActive && (
                  <>
                    {isMobile ? (
                      <>
                        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l border-b border-current opacity-50"></div>
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-current opacity-50"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-current opacity-50"></div>
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-current opacity-50"></div>
                      </>
                    )}
                  </>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  {tab.icon && (
                    <span
                      className={animated && isActive ? "animate-pulse" : ""}
                    >
                      {tab.icon}
                    </span>
                  )}
                  <span className={`text-xs sm:text-sm`}>
                    <span className="hidden sm:inline">
                      {getCharacterPrefix(tab.character, isActive)}
                    </span>
                    {tab.label}
                    <span className="hidden sm:inline">
                      {getCharacterSuffix(tab.character, isActive)}
                    </span>
                  </span>
                </div>

                {/* Selection indicator */}
                {isActive && (
                  <div className={`absolute ${isMobile ? "-top-0.5" : "-bottom-0.5"} left-1/2 transform -translate-x-1/2`}>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      {/* Desktop and Tablet Layout */}
      <div className={`hidden sm:block backdrop-blur-sm border-2 rounded-lg ${getThemeStyles()} ${className}`}>
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-20"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-20"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-20"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-20"></div>

        {/* Tab Headers */}
        <div className="mb-0">
          <TabHeaders />
        </div>

        {/* Tab Content */}
        <div className="relative" style={{ height: computedHeight }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                id={tab.id}
                key={tab.id}
                className={`
                  ${tab.className} 
                  ${
                  isActive ? "block" : "hidden"
                } p-6 rounded-b-lg border-2 border-t-0 backdrop-blur-sm font-mono relative overflow-auto h-full ${getSoulTypeContentStyles()}`}
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

      {/* Mobile Layout */}
      {mobileBottomMenu && (
        <div className="sm:hidden flex flex-col h-screen">
          <div className="flex-1 relative">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div 
                  id={tab.id}
                  key={`mobile-${tab.id}`}
                  className= {`${tab.className} ${
                    isActive ? "block" : "hidden"
                  } font-mono relative overflow-auto z-10`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                  >{tab.content}
                </div>
              );
            })}
          </div>

          {/* Bottom Mobile Menu */}
          <div className={`fixed bottom-0 left-0 right-0 backdrop-blur-sm  border-t-2 z-50 ${getThemeStyles()}`}>
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-20"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-20"></div>
            
            <TabHeaders isMobile={true} />
          </div>
        </div>
      )}
    </>
  );
}