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
  const charsRef = useRef<TechChar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initChars();
    };

    const initChars = () => {
      const area = width * height;
      const amount = Math.min(Math.floor(area / 60000), 24);

      charsRef.current = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: 0.2 + Math.random() * 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: 14 + Math.random() * 16,
        opacity: 0.08 + Math.random() * 0.15,
      }));
    };

    resize();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";

    let lastTime = performance.now();
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime < frameInterval) {
        animationIdRef.current = requestAnimationFrame(draw);
        return;
      }

      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, width, height);

      const chars = charsRef.current;

      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];

        ctx.globalAlpha = c.opacity;
        ctx.font = `${c.size}px "JetBrains Mono", ui-monospace, monospace`;
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

      animationIdRef.current = requestAnimationFrame(draw);
    };

    animationIdRef.current = requestAnimationFrame(draw);

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 md:opacity-80"
      style={{
        willChange: "contents",
        display: "block"
      }}
    />
  );
}
