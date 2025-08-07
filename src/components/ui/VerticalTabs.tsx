"use client"

import React, { useState } from 'react';

interface TabItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

interface VerticalTabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
}

export default function VerticalTabs({ 
  tabs, 
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = ""
}: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const getTabStyles = (tab: TabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500";
    }
    
    if (isActive) {
      return "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg w-full dark:bg-blue-600";
    }
    
    return "inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white transition-colors";
  };

  const getIconStyles = (tab: TabItem, isActive: boolean) => {
    if (tab.disabled) {
      return "w-4 h-4 me-2 text-gray-400 dark:text-gray-500";
    }
    
    if (isActive) {
      return "w-4 h-4 me-2 text-white";
    }
    
    return "w-4 h-4 me-2 text-gray-500 dark:text-gray-400";
  };

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return;
    
    if (tab.onClick) {
      tab.onClick();
    }
    
    if (!tab.href) {
      setActiveTab(tab.id);
    }
  };

  const renderTabContent = (tab: TabItem) => {
    const isActive = activeTab === tab.id;
    
    const tabElement = (
      <button
        className={getTabStyles(tab, isActive)}
        onClick={() => handleTabClick(tab)}
        disabled={tab.disabled}
        aria-current={isActive ? "page" : undefined}
      >
        {tab.icon && (
          <span className={getIconStyles(tab, isActive)} aria-hidden="true">
            {tab.icon}
          </span>
        )}
        {tab.name}
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
          {tab.name}
        </a>
      );
    }

    return tabElement;
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`md:flex ${className}`}>
      {/* Tabs List */}
      <ul className={`flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 ${tabsClassName}`}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            {renderTabContent(tab)}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className={`p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${contentClassName}`}>
        {activeTabContent}
      </div>
    </div>
  );
}