import React from "react";

interface ScreenCenterWrapperProps {
  children: React.ReactNode;
  className?: string;
}
/*
  This component is a wrapper that centers its children both vertically and horizontally on the screen.
  It uses Tailwind CSS classes to achieve this layout. 
  The `min-h-screen` class ensures that the wrapper takes at least the full height of the viewport, 
  while `flex`, `items-center`, and `justify-center` center the content. 
  The `className` prop allows for additional custom styling to be passed in.    
  @param {React.ReactNode} props.children - The content to be centered within the wrapper.
  @param {string} [props.className] - Optional additional class names for custom styling.
  @returns {JSX.Element} A React component that centers its children on the screen.
*/
export const ScreenCenterWrapper = ({
  children,
  className = "",
}: ScreenCenterWrapperProps) => {
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
