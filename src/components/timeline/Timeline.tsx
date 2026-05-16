"use client";

import React from "react";
import Link from "next/link";
import "./timeline.css";

export interface TimelineItem {
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

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  animated?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function Timeline({
  items,
  className = "",
  animated = false,
  selectedId,
  onSelect,
}: TimelineProps) {
  const handleCardClick = (item: TimelineItem) => {
    if (!item.action) return;
    onSelect?.(item.id);
    if (item.action.onClick) {
      item.action.onClick();
    } else if (item.action.href && item.action.external) {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
  };

  const getCardMods = (item: TimelineItem): string => {
    if (!item.action) return "";
    if (selectedId === item.id) return "timeline__card--selected";
    return "timeline__card--interactive";
  };

  const renderCardContent = (item: TimelineItem): React.ReactNode => (
    <div className={`timeline__card ${getCardMods(item)}`}>
      <span className="timeline__corners" aria-hidden="true">
        <span className="timeline__corner timeline__corner--tl" />
        <span className="timeline__corner timeline__corner--tr" />
        <span className="timeline__corner timeline__corner--bl" />
        <span className="timeline__corner timeline__corner--br" />
      </span>

      <div className="timeline__card-inner">
        <div className="timeline__card-header">
          <div className="timeline__title-wrapper">
            <h3 className="timeline__title">{item.title}</h3>
          </div>

          {item.badge && (
            <span
              className={`timeline__badge timeline__badge--${
                item.badge.variant ?? "primary"
              }`}
            >
              {item.badge.text}
            </span>
          )}
        </div>

        <time className="timeline__date">{item.date}</time>

        {item.description && (
          <p className="timeline__description">{item.description}</p>
        )}
      </div>
    </div>
  );

  const renderCard = (item: TimelineItem): React.ReactNode => {
    if (!item.action) {
      return renderCardContent(item);
    }

    if (item.action.href && !item.action.external) {
      return (
        <Link href={item.action.href} className="timeline__card-link">
          {renderCardContent(item)}
        </Link>
      );
    }

    return (
      <div onClick={() => handleCardClick(item)}>{renderCardContent(item)}</div>
    );
  };

  return (
    <div
      className={`timeline ${
        animated ? "timeline--animated" : ""
      } ${className}`}
    >
      <ol className="timeline__list">
        {items.map((item) => (
          <li key={item.id} className="timeline__item">
            <span className="timeline__node">{item.icon}</span>
            {renderCard(item)}
          </li>
        ))}
      </ol>
    </div>
  );
}
