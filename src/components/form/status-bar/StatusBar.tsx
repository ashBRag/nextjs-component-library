"use client";

import React from "react";
import "./status-bar.css";

interface StatusBarProps {
  progress: number;
  status?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  progress,
  status = "Ready",
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className="status-bar">
      <div className="status-bar__inner">
        <span className="status-bar__status">
          <span className="status-bar__status-prefix" aria-hidden="true" />
          Status: {status}
        </span>
        <span className="status-bar__progress-label">Progress: {clamped}%</span>
        <div className="status-bar__track">
          <div
            className="status-bar__fill"
            style={
              { "--status-progress": `${clamped}%` } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};
