"use client";
import { useEffect, useState } from "react";

export default function CircuitZap() {
  const [zaps, setZaps] = useState([]);

  useEffect(() => {
    const createZap = () => {
      const id = Date.now() + Math.random();
      const gridSize = 40;

      // Snap to grid positions
      const startX = Math.floor(Math.random() * 30) * gridSize;
      const startY = Math.floor(Math.random() * 20) * gridSize;

      const paths = [
        // Horizontal then vertical
        {
          segments: [
            { x: startX, y: startY, width: gridSize * 4, height: 2, dir: "h" },
            {
              x: startX + gridSize * 4,
              y: startY,
              width: 2,
              height: gridSize * 3,
              dir: "v",
            },
          ],
        },
        // Vertical then horizontal
        {
          segments: [
            { x: startX, y: startY, width: 2, height: gridSize * 3, dir: "v" },
            {
              x: startX,
              y: startY + gridSize * 3,
              width: gridSize * 5,
              height: 2,
              dir: "h",
            },
          ],
        },
        // Long horizontal
        {
          segments: [
            { x: startX, y: startY, width: gridSize * 8, height: 2, dir: "h" },
          ],
        },
        // Long vertical
        {
          segments: [
            { x: startX, y: startY, width: 2, height: gridSize * 6, dir: "v" },
          ],
        },
        // U-shape
        {
          segments: [
            { x: startX, y: startY, width: 2, height: gridSize * 4, dir: "v" },
            {
              x: startX,
              y: startY + gridSize * 4,
              width: gridSize * 3,
              height: 2,
              dir: "h",
            },
            {
              x: startX + gridSize * 3,
              y: startY + gridSize * 2,
              width: 2,
              height: gridSize * 2,
              dir: "v",
            },
          ],
        },
      ];

      const selectedPath = paths[Math.floor(Math.random() * paths.length)];
      const color = ["#00d4ff", "#00ff88", "#a855f7", "#ff0088"][
        Math.floor(Math.random() * 4)
      ];

      setZaps((prev) => [...prev, { id, path: selectedPath, color }]);

      setTimeout(() => {
        setZaps((prev) => prev.filter((z) => z.id !== id));
      }, 2000);
    };

    const interval = setInterval(createZap, Math.random() * 1500 + 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
               linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px),
               linear-gradient(180deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
             `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Zaps */}
      {zaps.map((zap) => (
        <div key={zap.id} className="absolute">
          {zap.path.segments.map((segment, i) => (
            <div
              key={i}
              className={`absolute ${segment.dir === "v" ? "vertical-zap" : ""}`}
              style={{
                top: `${segment.y}px`,
                left: `${segment.x}px`,
                width: `${segment.width}px`,
                height: `${segment.height}px`,
                background: `linear-gradient(${segment.dir === "h" ? "90deg" : "180deg"}, transparent, ${zap.color}, transparent)`,
                boxShadow: `0 0 8px ${zap.color}`,
                animation: `zapPath 2s ease-out ${i * 0.3}s`,
                animationFillMode: "forwards",
                transformOrigin: segment.dir === "h" ? "left" : "top",
              }}
            />
          ))}
        </div>
      ))}

      <style jsx>{`
        @keyframes zapPath {
          0% {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          20% {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
          80% {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
          100% {
            opacity: 0;
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .vertical-zap {
          transform-origin: top !important;
        }
      `}</style>
    </div>
  );
}
