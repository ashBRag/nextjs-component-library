"use client";

import React, { useState } from "react";

interface PortfolioTabItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: (tab: PortfolioTabItem) => void;
}

interface PortfolioVerticalTabsProps {
  tabs: PortfolioTabItem[];
  defaultActiveTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  animated?: boolean;
  horizontal?: boolean;
}

export default function PortfolioVerticalTabs({
  tabs,
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = "",
  animated = true,
  horizontal = false,
}: PortfolioVerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const getTabStyles = (tab: PortfolioTabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "relative inline-flex items-center px-4 py-3 text-[#ABB2BF]/50 cursor-not-allowed /50 w-full border border-[#ABB2BF]/20 ";
    }

    const baseStyles =
      "relative inline-flex items-center px-4 py-3 w-full border  transition-all duration-300";

    if (isActive) {
      return `${baseStyles}  border-[#C778DD] text-[#C778DD] shadow-lg shadow-[#C778DD]/20`;
    }

    return `${baseStyles} bg-transparent border-[#ABB2BF]/30 text-[#ABB2BF] hover:border-[#C778DD]/50 hover:text-white hover:/50`;
  };

  const getIconStyles = (tab: PortfolioTabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "w-4 h-4 me-3 text-[#ABB2BF]/50";
    }

    const iconClass = animated ? "transition-transform duration-300" : "";
    const activeScale = isActive && animated ? "scale-110" : "";

    return `w-4 h-4 me-3 ${iconClass} ${activeScale}`;
  };

  const handleTabClick = (tab: PortfolioTabItem) => {
    if (tab.disabled) return;

    if (tab.onClick) {
      tab.onClick(tab);
    }

    if (!tab.href) {
      setActiveTab(tab.id);
    }
  };

  const renderTabContent = (tab: PortfolioTabItem) => {
    const isActive = activeTab === tab.id;

    const tabElement = (
      <button
        className={getTabStyles(tab, isActive)}
        onClick={() => handleTabClick(tab)}
        disabled={tab.disabled}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Corner brackets for active tab */}
        {isActive && (
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

        {tab.icon && (
          <span className={getIconStyles(tab, isActive)} aria-hidden="true">
            {tab.icon}
          </span>
        )}

        <span>
          <span className="text-[#C778DD]">#</span>
          {tab.name}
        </span>

        {/* Active indicator */}
        {isActive && (
          <div className="ml-auto">
            <div className="w-2 h-2 bg-[#C778DD] animate-pulse"></div>
          </div>
        )}
      </button>
    );

    if (tab.href && !tab.disabled) {
      return (
        <a href={tab.href} className={getTabStyles(tab, isActive)}>
          {tab.icon && (
            <span className={getIconStyles(tab, isActive)} aria-hidden="true">
              {tab.icon}
            </span>
          )}
          <span>
            <span className="text-[#C778DD]">#</span>
            {tab.name}
          </span>
        </a>
      );
    }

    return tabElement;
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div
      className={`flex ${horizontal ? "flex-col" : "flex-row"}  ${className}`}
    >
      {/* Tabs List */}
      {horizontal ? (
        <ul
          className={`flex space-x-4 text-sm font-medium md:mb-4 mb-2 ${tabsClassName}`}
        >
          {tabs.map((tab) => (
            <li key={tab.id}>{renderTabContent(tab)}</li>
          ))}
        </ul>
      ) : (
        <ul
          className={`flex-column space-y-3 text-sm font-medium md:me-4 mb-4 md:mb-0 min-w-48 ${tabsClassName}`}
        >
          {tabs.map((tab) => (
            <li key={tab.id}>{renderTabContent(tab)}</li>
          ))}
        </ul>
      )}

      {/* Tab Content */}
      <div
        className={`
          relative  p-2 w-full  
          text-[#ABB2BF] ${contentClassName}
        `}
      >
        <div className="relative z-10">{activeTabContent}</div>
      </div>
    </div>
  );
}
