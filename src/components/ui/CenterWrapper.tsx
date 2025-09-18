import React from "react";

export const ScreenCenterWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`
      min-h-screen 
      flex 
      items-center 
      justify-center 
      md:min-h-screen 
      lg:min-h-screen
      ${className}
    `}
    >
      {children}
    </div>
  );
};
