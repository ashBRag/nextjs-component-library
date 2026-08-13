"use client";

import { ScreenCenterWrapper } from "./CenterWrapper";

export default function CenterWrapperDemo() {
  return (
    <div className="border border-dashed border-gray-500 h-48">
      <ScreenCenterWrapper className="h-48 !min-h-0">
        <p>Centered content</p>
      </ScreenCenterWrapper>
    </div>
  );
}
