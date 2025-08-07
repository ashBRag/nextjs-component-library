"use client"

import React, { useState } from 'react';

interface UndertaleTabItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  character?: 'sans' | 'papyrus' | 'flowey' | 'frisk' | 'toriel' | 'undyne' | 'alphys' | 'mettaton';
}

interface UndertaleVerticalTabsProps {
  tabs: UndertaleTabItem[];
  defaultActiveTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  theme?: 'underground' | 'surface' | 'dark_world';
  animated?: boolean;
}

export default function UndertaleVerticalTabs({ 
  tabs, 
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = "",
  theme = 'underground',
  animated = true
}: UndertaleVerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const getThemeStyles = () => {
    const themes = {
      underground: 'bg-slate-900 border-slate-700',
      surface: 'bg-blue-900 border-blue-700', 
      dark_world: 'bg-purple-900 border-purple-700'
    };
    return themes[theme];
  };

  const getCharacterTabStyles = (tab: UndertaleTabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "relative inline-flex items-center px-4 py-3 text-gray-500 rounded-lg cursor-not-allowed bg-gray-800/50 w-full border border-gray-700 font-mono";
    }

    const characterStyles = {
      sans: isActive 
        ? "bg-cyan-900/80 border-cyan-400 text-cyan-100 shadow-cyan-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-200",
      papyrus: isActive 
        ? "bg-orange-900/80 border-orange-400 text-orange-100 shadow-orange-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-orange-400/50 hover:text-orange-200",
      flowey: isActive 
        ? "bg-yellow-900/80 border-yellow-500 text-yellow-100 shadow-yellow-500/40" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-yellow-500/50 hover:text-yellow-200",
      frisk: isActive 
        ? "bg-red-900/80 border-red-500 text-red-100 shadow-red-500/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-red-500/50 hover:text-red-200",
      toriel: isActive 
        ? "bg-purple-900/80 border-purple-400 text-purple-100 shadow-purple-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-purple-400/50 hover:text-purple-200",
      undyne: isActive 
        ? "bg-green-900/80 border-green-400 text-green-100 shadow-green-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-green-400/50 hover:text-green-200",
      alphys: isActive 
        ? "bg-yellow-900/80 border-yellow-400 text-yellow-100 shadow-yellow-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-yellow-400/50 hover:text-yellow-200",
      mettaton: isActive 
        ? "bg-pink-900/80 border-pink-400 text-pink-100 shadow-pink-400/30" 
        : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-pink-400/50 hover:text-pink-200"
    };

    const characterStyle = tab.character ? characterStyles[tab.character] : characterStyles.sans;
    const animationClass = animated ? "transition-all duration-300 ease-out" : "";
    const hoverEffect = animated && !isActive ? "hover:scale-105 hover:shadow-lg" : "";
    
    return `relative inline-flex items-center px-4 py-3 rounded-lg w-full border-2 font-mono backdrop-blur-sm ${characterStyle} ${animationClass} ${hoverEffect}`;
  };

  const getIconStyles = (tab: UndertaleTabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "w-4 h-4 me-3 text-gray-500";
    }
    
    const iconClass = animated ? "transition-transform duration-300" : "";
    const activeRotate = isActive && animated ? "rotate-12" : "";
    
    return `w-4 h-4 me-3 ${iconClass} ${activeRotate}`;
  };

  const getLabelStyles = (tab: UndertaleTabItem) => {
    const characterLabelStyles = {
      papyrus: "uppercase tracking-wider font-bold",
      flowey: "font-bold",
      undyne: "uppercase font-bold",
      mettaton: "italic font-semibold",
      sans: "",
      frisk: "font-semibold",
      toriel: "font-medium",
      alphys: ""
    };

    return tab.character ? characterLabelStyles[tab.character] : "";
  };

  const getTabPrefix = (tab: UndertaleTabItem, isActive: boolean) => {
    if (tab.character === 'papyrus') return "* ";
    if (tab.character === 'flowey' && isActive) return "* ";
    if (tab.character === 'sans' && isActive) return "> ";
    return "";
  };

  const getTabSuffix = (tab: UndertaleTabItem, isActive: boolean) => {
    if (tab.character === 'sans' && isActive) return "...";
    if (tab.character === 'mettaton' && isActive) return " ♪";
    return "";
  };

  const handleTabClick = (tab: UndertaleTabItem) => {
    if (tab.disabled) return;
    
    if (tab.onClick) {
      tab.onClick();
    }
    
    if (!tab.href) {
      setActiveTab(tab.id);
    }
  };

  const renderTabContent = (tab: UndertaleTabItem) => {
    const isActive = activeTab === tab.id;
    
    const tabElement = (
      <button
        className={getCharacterTabStyles(tab, isActive)}
        onClick={() => handleTabClick(tab)}
        disabled={tab.disabled}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Undertale-style corner decorations for active tab */}
        {isActive && (
          <>
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l border-t border-current opacity-50"></div>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r border-t border-current opacity-50"></div>
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l border-b border-current opacity-50"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-current opacity-50"></div>
          </>
        )}
        
        {tab.icon && (
          <span className={getIconStyles(tab, isActive)} aria-hidden="true">
            {tab.icon}
          </span>
        )}
        
        <span className={getLabelStyles(tab)}>
          {getTabPrefix(tab, isActive)}{tab.name}{getTabSuffix(tab, isActive)}
        </span>
        
        {/* Selection indicator */}
        {isActive && (
          <div className="ml-auto">
            <div className="w-2 h-2 bg-current animate-pulse"></div>
          </div>
        )}
      </button>
    );

    if (tab.href && !tab.disabled) {
      return (
        <a href={tab.href} className={getCharacterTabStyles(tab, isActive)}>
          {tab.icon && (
            <span className={getIconStyles(tab, isActive)} aria-hidden="true">
              {tab.icon}
            </span>
          )}
          <span className={getLabelStyles(tab)}>
            {getTabPrefix(tab, isActive)}{tab.name}{getTabSuffix(tab, isActive)}
          </span>
        </a>
      );
    }

    return tabElement;
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`md:flex ${getThemeStyles()} rounded-lg border-2 p-2 ${className}`}>
      {/* Tabs List */}
      <ul className={`flex-column space-y-3 text-sm font-medium md:me-4 mb-4 md:mb-0 min-w-48 ${tabsClassName}`}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            {renderTabContent(tab)}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className={`
        relative p-6 rounded-lg w-full font-mono backdrop-blur-sm border-2
        ${theme === 'underground' ? 'bg-slate-800/60 border-slate-600 text-slate-200' : ''}
        ${theme === 'surface' ? 'bg-blue-800/60 border-blue-600 text-blue-200' : ''}
        ${theme === 'dark_world' ? 'bg-purple-800/60 border-purple-600 text-purple-200' : ''}
        ${contentClassName}
      `}>
        {/* Content area corner decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-20"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-20"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-20"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-20"></div>
        
        <div className="relative z-10">
          {activeTabContent}
        </div>
        
        {/* Bottom right pulse indicator */}
        <div className="absolute bottom-4 right-4">
          <div className="w-2 h-2 bg-current opacity-40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}