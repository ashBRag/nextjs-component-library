import React, { useState, useEffect, useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

interface MobileCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function MobileCarousel({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Touch/mouse drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = () => {
    if (!isDragging) return;
    // Just track movement, don't trigger slide change here
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;

    const diff = startX - clientX;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged left - next slide
        nextSlide();
      } else {
        // Dragged right - previous slide
        prevSlide();
      }
    }

    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const clientX = e.changedTouches[0]?.clientX || startX;
    handleEnd(clientX);
  };

  return (
    <div
      className={`relative w-full mx-auto bg-slate-900/90 border-2 border-slate-700 rounded-lg overflow-hidden backdrop-blur-sm ${className}`}
    >
      {/* Main carousel container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={(e) => handleEnd(e.clientX)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides container */}
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 h-full flex items-center justify-center p-4"
            >
              <div className="w-full h-full">{item.content}</div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <LuChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <LuChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center space-x-2 p-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-cyan-300 scale-125"
                  : "bg-slate-500 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      <div className="absolute top-2 right-2 bg-slate-800/80 text-cyan-300 px-2 py-1 rounded text-xs font-mono backdrop-blur-sm">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/30"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400/30"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/30"></div>
    </div>
  );
}

// Example usage component
const CarouselExample = () => {
  const carouselItems = [
    {
      id: "1",
      content: (
        <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Slide 1</h3>
          <p className="text-slate-300">
            Your first carousel slide content goes here.
          </p>
        </div>
      ),
    },
    {
      id: "2",
      content: (
        <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold text-blue-300 mb-2">Slide 2</h3>
          <p className="text-slate-300">
            Your second carousel slide content goes here.
          </p>
        </div>
      ),
    },
    {
      id: "3",
      content: (
        <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold text-purple-300 mb-2">Slide 3</h3>
          <p className="text-slate-300">
            Your third carousel slide content goes here.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-cyan-300 mb-6">
          Mobile Carousel
        </h2>
        <MobileCarousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
        />
        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>Swipe left/right or use arrows to navigate</p>
        </div>
      </div>
    </div>
  );
};

export { CarouselExample };
