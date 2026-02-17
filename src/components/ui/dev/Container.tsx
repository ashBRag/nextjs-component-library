import React from "react";
import { ScreenCenterWrapper } from "../CenterWrapper";

interface PortfolioContainerProps {
  title?: string;
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
    <ScreenCenterWrapper>
      <div className={`m-[5vw] w-full ${className}`}>
        {/* Header with title centered and dividers on both sides */}
        {title && (
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#C778DD]"></div>
            <h3 className="text-white text-xl font-medium  whitespace-nowrap px-4">
              <span className="text-[#C778DD]">#</span>
              {title}
            </h3>
            <div className="flex-1 h-px bg-[#C778DD]"></div>
          </div>
        )}

        {/* Content area */}
        <div
          className=" text-[#ABB2BF] relative"
          style={{
            height: getContentHeight(),
          }}
        >
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </ScreenCenterWrapper>
  );
}
