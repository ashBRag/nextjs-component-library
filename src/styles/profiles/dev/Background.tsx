"use client";

import { useEffect, useRef } from "react";

interface Cube {
  x: number;
  y: number;
  size: number;
  speed: number;
  rot: number;
  rotSpeed: number;
  alpha: number;
  drift: number;
}

function randomCube(
  canvasWidth: number,
  canvasHeight: number,
  init = false
): Cube {
  return {
    x: Math.random() * canvasWidth,
    y: init ? Math.random() * canvasHeight : canvasHeight + 20,
    size: 6 + Math.random() * 14,
    speed: 0.2 + Math.random() * 0.5,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    alpha: 0.04 + Math.random() * 0.12,
    drift: (Math.random() - 0.5) * 0.3,
  };
}

function drawCube(ctx: CanvasRenderingContext2D, cube: Cube) {
  const { x, y, size: s, rot, alpha } = cube;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;

  // Top face
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.6);
  ctx.lineTo(s * 0.5, -s * 0.3);
  ctx.lineTo(0, 0);
  ctx.lineTo(-s * 0.5, -s * 0.3);
  ctx.closePath();
  ctx.fillStyle = "#a78bfa";
  ctx.fill();

  // Left face
  ctx.beginPath();
  ctx.moveTo(-s * 0.5, -s * 0.3);
  ctx.lineTo(0, 0);
  ctx.lineTo(0, s * 0.6);
  ctx.lineTo(-s * 0.5, s * 0.3);
  ctx.closePath();
  ctx.fillStyle = "#5b21b6";
  ctx.fill();

  // Right face
  ctx.beginPath();
  ctx.moveTo(s * 0.5, -s * 0.3);
  ctx.lineTo(0, 0);
  ctx.lineTo(0, s * 0.6);
  ctx.lineTo(s * 0.5, s * 0.3);
  ctx.closePath();
  ctx.fillStyle = "#7c3aed";
  ctx.fill();

  ctx.restore();
}

export default function FloatingCubes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cubes: Cube[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-init cubes on resize
      cubes = Array.from({ length: 35 }, () =>
        randomCube(canvas.width, canvas.height, true)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cube of cubes) {
        cube.y -= cube.speed;
        cube.x += cube.drift;
        cube.rot += cube.rotSpeed;

        if (cube.y < -20) {
          Object.assign(cube, randomCube(canvas.width, canvas.height, false));
        }

        drawCube(ctx, cube);
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
