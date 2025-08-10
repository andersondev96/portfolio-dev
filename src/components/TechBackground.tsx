"use client";
import { useRef, useEffect } from "react";

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const symbols = "01 ∑ π λ ∆ Ω ⇌ ≈ ⊕ ⊗".split(" ");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.5 + Math.random(),
      char: symbols[Math.floor(Math.random() * symbols.length)],
      size: 16 + Math.random() * 24,
      opacity: 0.2 + Math.random() * 0.4,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      chars.forEach((c) => {
        ctx.globalAlpha = c.opacity;
        ctx.font = `${c.size}px monospace`;
        ctx.fillText(c.char, c.x, c.y);
        c.y += c.speed;
        if (c.y > height) {
          c.y = -c.size;
          c.x = Math.random() * width;
        }
      });
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
