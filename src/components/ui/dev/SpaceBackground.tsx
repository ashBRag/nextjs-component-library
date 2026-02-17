"use client";

import { useEffect, useRef } from "react";

interface SpaceBackgroundProps {
  /** Number of floating cubes. Defaults to 45 */
  cubeCount?: number;
  /** Noise layer opacity 0–1. Defaults to 0.06 */
  noiseOpacity?: number;
  /** How often glitches fire — lower = more frequent (frames). Defaults to [40, 140] */
  glitchInterval?: [min: number, max: number];
}

export default function SpaceBackground({
  cubeCount = 45,
  noiseOpacity = 0.06,
  glitchInterval = [40, 140],
}: SpaceBackgroundProps) {
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const cubeRef = useRef<HTMLCanvasElement>(null);
  const glitchRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const noiseEl = noiseRef.current;
    const cubeEl = cubeRef.current;
    const glitchEl = glitchRef.current;
    if (!noiseEl || !cubeEl || !glitchEl) return;

    const nx = noiseEl.getContext("2d")!;
    const cx = cubeEl.getContext("2d")!;
    const gx = glitchEl.getContext("2d")!;

    // ---- Resize ----
    function resize() {
      [noiseEl!, cubeEl!, glitchEl!].forEach((c) => {
        c.width = innerWidth;
        c.height = innerHeight;
      });
    }
    resize();
    window.addEventListener("resize", resize);

    // ---- Noise ----
    const TILE = 256;
    const tileCv = document.createElement("canvas");
    tileCv.width = tileCv.height = TILE;
    const tc = tileCv.getContext("2d")!;

    function drawNoise() {
      const id = tc.createImageData(TILE, TILE);
      for (let i = 0; i < id.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
        id.data[i + 3] = 255;
      }
      tc.putImageData(id, 0, 0);
      const pat = nx.createPattern(tileCv, "repeat")!;
      nx.fillStyle = pat;
      nx.fillRect(0, 0, noiseEl!.width, noiseEl!.height);
    }

    // ---- Cubes ----
    interface Cube {
      x: number;
      y: number;
      s: number;
      sp: number;
      rot: number;
      rs: number;
      a: number;
      dr: number;
    }

    function rndCube(init: boolean): Cube {
      return {
        x: Math.random() * innerWidth,
        y: init ? Math.random() * innerHeight : innerHeight + 20,
        s: 6 + Math.random() * 18,
        sp: 0.15 + Math.random() * 0.5,
        rot: Math.random() * Math.PI * 2,
        rs: (Math.random() - 0.5) * 0.02,
        a: 0.05 + Math.random() * 0.18,
        dr: (Math.random() - 0.5) * 0.4,
      };
    }

    const cubeList: Cube[] = Array.from({ length: cubeCount }, () =>
      rndCube(true)
    );

    function drawCube(c: Cube) {
      const { x, y, s, rot, a } = c;
      cx.save();
      cx.translate(x, y);
      cx.rotate(rot);
      cx.globalAlpha = a;
      cx.beginPath();
      cx.moveTo(0, -s * 0.6);
      cx.lineTo(s * 0.5, -s * 0.3);
      cx.lineTo(0, 0);
      cx.lineTo(-s * 0.5, -s * 0.3);
      cx.closePath();
      cx.fillStyle = "#a78bfa";
      cx.fill();
      cx.beginPath();
      cx.moveTo(-s * 0.5, -s * 0.3);
      cx.lineTo(0, 0);
      cx.lineTo(0, s * 0.6);
      cx.lineTo(-s * 0.5, s * 0.3);
      cx.closePath();
      cx.fillStyle = "#5b21b6";
      cx.fill();
      cx.beginPath();
      cx.moveTo(s * 0.5, -s * 0.3);
      cx.lineTo(0, 0);
      cx.lineTo(0, s * 0.6);
      cx.lineTo(s * 0.5, s * 0.3);
      cx.closePath();
      cx.fillStyle = "#7c3aed";
      cx.fill();
      cx.restore();
    }

    // ---- Glitch ----
    let glitchTimer = glitchInterval[0];
    let glitchBurst = 0;

    function doGlitch() {
      gx.clearRect(0, 0, glitchEl!.width, glitchEl!.height);
      if (glitchBurst <= 0) return;

      const lines = (2 + Math.random() * 5) | 0;
      for (let i = 0; i < lines; i++) {
        const y = Math.random() * glitchEl!.height;
        const h = 1 + Math.random() * 6;
        const w = 40 + Math.random() * 300;
        const x = Math.random() * (glitchEl!.width - w);
        const shiftX = (Math.random() - 0.5) * 30;

        gx.save();
        gx.globalAlpha = 0.7 + Math.random() * 0.3;

        const r = Math.random();
        if (r < 0.33)
          gx.fillStyle = `rgba(167,139,250,${0.15 + Math.random() * 0.25})`;
        else if (r < 0.66)
          gx.fillStyle = `rgba(91,33,182,${0.2 + Math.random() * 0.3})`;
        else gx.fillStyle = `rgba(200,200,255,${0.08 + Math.random() * 0.12})`;

        gx.fillRect(x + shiftX, y, w, h);

        // Full-width scanline
        if (Math.random() < 0.2) {
          gx.globalAlpha = 0.04 + Math.random() * 0.06;
          gx.fillStyle = "#a78bfa";
          gx.fillRect(0, y, glitchEl!.width, 1 + Math.random() * 2);
        }

        // RGB split
        if (Math.random() < 0.4) {
          gx.globalAlpha = 0.06;
          gx.fillStyle = "rgba(255,0,128,1)";
          gx.fillRect(x + shiftX + 3, y, w, h);
          gx.fillStyle = "rgba(0,200,255,1)";
          gx.fillRect(x + shiftX - 3, y, w, h);
        }

        gx.restore();
      }

      // Full-screen flicker
      if (Math.random() < 0.08) {
        gx.fillStyle = "rgba(124,58,237,0.03)";
        gx.fillRect(0, 0, glitchEl!.width, glitchEl!.height);
      }
    }

    // ---- Loop ----
    function loop() {
      // drawNoise();

      cx.clearRect(0, 0, cubeEl!.width, cubeEl!.height);
      for (const c of cubeList) {
        c.y -= c.sp;
        c.x += c.dr;
        c.rot += c.rs;
        if (c.y < -20) Object.assign(c, rndCube(false));
        drawCube(c);
      }

      glitchTimer--;
      if (glitchTimer <= 0) {
        glitchBurst = (2 + Math.random() * 8) | 0;
        glitchTimer =
          (glitchInterval[0] + Math.random() * glitchInterval[1]) | 0;
      }
      if (glitchBurst > 0) glitchBurst--;
      doGlitch();

      animRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [cubeCount, glitchInterval]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={noiseRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: noiseOpacity }}
      />
      <canvas ref={cubeRef} className="absolute inset-0 w-full h-full" />
      <canvas ref={glitchRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
