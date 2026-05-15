"use client";

import React, { useState, useEffect } from "react";
import "./tabs.css";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  animated?: boolean;
  contentHeight?: string | number;
  mobileBottomMenu?: boolean;
}

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  animated = true,
  contentHeight = "77vh",
  mobileBottomMenu = true,
}: TabsProps) {
  const [computedHeight, setComputedHeight] = useState<string>("77vh");

  useEffect(() => {
    const calculate = () => {
      if (typeof contentHeight === "number") {
        setComputedHeight(`${contentHeight}px`);
      } else if (contentHeight.includes("%")) {
        setComputedHeight(`${parseFloat(contentHeight)}vh`);
      } else {
        setComputedHeight(contentHeight);
      }
    };

    calculate();

    if (typeof contentHeight === "string" && contentHeight.includes("%")) {
      window.addEventListener("resize", calculate);
      return () => window.removeEventListener("resize", calculate);
    }
  }, [contentHeight]);

  const rootMod = animated ? "tabs--animated" : "";

  const TabHeaders = ({ isMobile = false }: { isMobile?: boolean }) => {
    const headerMod = isMobile
      ? "tabs__header--mobile"
      : "tabs__header--desktop";
    return (
      <div className={`tabs__header ${headerMod}`}>
        <ul className="tabs__list" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const itemMod = isActive ? "tabs__item--active" : "";
            const btnMod = [
              isActive ? "tabs__trigger--active" : "",
              isMobile ? "tabs__trigger--mobile" : "tabs__trigger--desktop",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li
                key={tab.id}
                className={`tabs__item ${itemMod} ${tab.className ?? ""}`}
                role="presentation"
              >
                <button
                  className={`tabs__trigger ${btnMod}`}
                  onClick={() => onTabChange(tab.id)}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={isActive}
                >
                  {isActive && (
                    <span
                      className={`tabs__trigger-corners ${
                        isMobile
                          ? "tabs__trigger-corners--mobile"
                          : "tabs__trigger-corners--desktop"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="tabs__corner tabs__corner--tl" />
                      <span className="tabs__corner tabs__corner--tr" />
                    </span>
                  )}

                  <span className="tabs__trigger-inner">
                    {tab.icon && (
                      <span
                        className={`tabs__icon ${
                          isActive ? "tabs__icon--active" : ""
                        }`}
                      >
                        {tab.icon}
                      </span>
                    )}
                    <span className="tabs__label">
                      <span className="tabs__label-prefix" aria-hidden="true" />
                      {tab.label}
                      <span className="tabs__label-suffix" aria-hidden="true" />
                    </span>
                  </span>

                  {isActive && (
                    <span
                      className={`tabs__indicator ${
                        isMobile
                          ? "tabs__indicator--mobile"
                          : "tabs__indicator--desktop"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* Desktop / Tablet */}
      <div
        className={`tabs tabs--desktop ${rootMod} ${className}`}
        style={
          { "--tabs-content-height": computedHeight } as React.CSSProperties
        }
      >
        <span className="tabs__corner tabs__corner--tl" aria-hidden="true" />
        <span className="tabs__corner tabs__corner--tr" aria-hidden="true" />
        <span className="tabs__corner tabs__corner--bl" aria-hidden="true" />
        <span className="tabs__corner tabs__corner--br" aria-hidden="true" />

        <TabHeaders />

        <div className="tabs__panels">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                id={tab.id}
                key={tab.id}
                className={`tabs__panel ${
                  isActive ? "tabs__panel--active" : "tabs__panel--hidden"
                } ${tab.className ?? ""}`}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <span
                  className="tabs__corner tabs__corner--tl"
                  aria-hidden="true"
                />
                <span
                  className="tabs__corner tabs__corner--tr"
                  aria-hidden="true"
                />
                <span
                  className="tabs__corner tabs__corner--bl"
                  aria-hidden="true"
                />
                <span
                  className="tabs__corner tabs__corner--br"
                  aria-hidden="true"
                />

                <div className="tabs__panel-content">{tab.content}</div>

                <span className="tabs__panel-indicator" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      {mobileBottomMenu && (
        <div className="tabs tabs--mobile">
          <div className="tabs__panels tabs__panels--mobile">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  id={tab.id}
                  key={`mobile-${tab.id}`}
                  className={`tabs__panel ${
                    isActive ? "tabs__panel--active" : "tabs__panel--hidden"
                  } ${tab.className ?? ""}`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                >
                  {tab.content}
                </div>
              );
            })}
          </div>

          <div className="tabs__mobile-bar">
            <span
              className="tabs__corner tabs__corner--tl"
              aria-hidden="true"
            />
            <span
              className="tabs__corner tabs__corner--tr"
              aria-hidden="true"
            />
            <TabHeaders isMobile />
          </div>
        </div>
      )}
    </>
  );
}
