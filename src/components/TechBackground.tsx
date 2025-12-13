"use client";

import { useRef, useEffect } from "react";

const SYMBOLS = [
  "{", "}", "<", "/>", ";",
  "0", "1", "A", "F",
  "API", "HTTP", "JS", "TS",
  "∴", "⇒", "⇢", "λ",
];

type TechChar = {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  char: string;
  size: number;
  opacity: number;
};

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const amount = 24;
    const chars: TechChar[] = Array.from({ length: amount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speedY: 0.15 + Math.random() * 0.6,
      speedX: (Math.random() - 0.5) * 0.15,
      char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: 13 + Math.random() * 18,
      opacity: 0.06 + Math.random() * 0.16,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";

      for (const c of chars) {
        ctx.globalAlpha = c.opacity;
        ctx.font = `${c.size}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
        ctx.fillText(c.char, c.x, c.y);

        c.y += c.speedY;
        c.x += c.speedX;

        if (c.y > height + c.size) {
          c.y = -c.size;
          c.x = Math.random() * width;
        }
        if (c.x < -40) c.x = width + 40;
        if (c.x > width + 40) c.x = -40;
      }

      animationIdRef.current = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-60 md:opacity-80"
    />
  );
}
