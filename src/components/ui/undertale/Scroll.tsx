import React from "react";

interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

interface MobileCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function MobileCarousel({
  items,
  className = "",
}: MobileCarouselProps) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={className}>
          {item.content}
        </div>
      ))}
    </>
  );
}
