import React from "react";

interface PortfolioContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentHeight?: string | number;
}

export default function PortfolioContainer({
  title,
  children,
  className = "",
  contentHeight = "auto",
}: PortfolioContainerProps) {
  const getContentHeight = () => {
    if (typeof contentHeight === "number") {
      return `${contentHeight}px`;
    }
    return contentHeight;
  };

  return (
    <div className={`m-[5vw] ${className}`}>
      {/* Header with title centered and dividers on both sides */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-[#C778DD]"></div>
        <h3 
          className="text-white text-xl font-medium font-mono whitespace-nowrap px-4"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="text-[#C778DD]">#</span>
          {title}
        </h3>
        <div className="flex-1 h-px bg-[#C778DD]"></div>
      </div>

      {/* Content area */}
      <div
        className="font-mono text-[#ABB2BF] relative"
        style={{
          height: getContentHeight(),
          fontFamily: "'Fira Code', monospace"
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}