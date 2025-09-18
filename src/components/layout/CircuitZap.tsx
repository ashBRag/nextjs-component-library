"use client";
import { useEffect, useState } from "react";

export default function PortfolioGrid() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random dots for a 9x9 grid
    const gridSize = 9;
    const newDots = [];

    // Calculate spacing based on viewport dimensions
    const updateDots = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const spacingX = viewportWidth / (gridSize + 1); // Distribute across full width
      const spacingY = viewportHeight / (gridSize + 1); // Distribute across full height

      const dots = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          // Randomly show only some dots (about 30% chance)
          if (Math.random() > 0.7) {
            dots.push({
              id: `${i}-${j}`,
              x: (j + 1) * spacingX,
              y: (i + 1) * spacingY,
            });
          }
        }
      }
      setDots(dots);
    };

    updateDots();

    // Regenerate dots every few seconds for subtle animation
    const interval = setInterval(updateDots, 5000);

    // Update on window resize
    const handleResize = () => updateDots();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Random white dots in 9x9 grid */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
