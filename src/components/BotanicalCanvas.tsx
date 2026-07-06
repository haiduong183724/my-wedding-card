"use client";

import { useEffect, useRef } from "react";

type Props = { flip?: boolean; height?: number; className?: string };

const C = {
  sage:  "#7FA870",
  deep:  "#4E7040",
  light: "#A8C89A",
  pale:  "#C8DEC0",
  champ: "#C9A87A",
};

function leaf(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, len: number, wid: number,
  ang: number, fill: string, alpha = 1
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo( wid * 0.55, -len * 0.22,  wid * 0.42, -len * 0.78, 0, -len);
  ctx.bezierCurveTo(-wid * 0.42, -len * 0.78, -wid * 0.55, -len * 0.22, 0, 0);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.beginPath(); ctx.moveTo(0, -2); ctx.lineTo(0, -len * 0.9);
  ctx.strokeStyle = "rgba(0,0,0,0.1)"; ctx.lineWidth = 0.7; ctx.stroke();
  ctx.restore();
}

function flower(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, r: number, fill: string, alpha = 1
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    ctx.save();
    ctx.translate(x, y); ctx.rotate(a);
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.65, r * 0.32, r * 0.65, 0, 0, Math.PI * 2);
    ctx.fillStyle = fill; ctx.fill();
    ctx.restore();
  }
  ctx.beginPath(); ctx.arc(x, y, r * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = C.champ; ctx.fill();
  ctx.restore();
}

function stem(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, cx1: number, cy1: number,
  cx2: number, cy2: number, x2: number, y2: number,
  col: string, w: number, alpha = 1
) {
  ctx.save(); ctx.globalAlpha = alpha;
  ctx.beginPath(); ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
  ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round"; ctx.stroke();
  ctx.restore();
}

function dot(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fill: string, alpha = 1) {
  ctx.save(); ctx.globalAlpha = alpha;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = fill; ctx.fill();
  ctx.restore();
}

function draw(cv: HTMLCanvasElement, flip: boolean, H: number) {
  const dpr = window.devicePixelRatio || 1;
  const W = cv.offsetWidth;
  if (!W) return;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.height = H + "px";
  const ctx = cv.getContext("2d")!;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  if (flip) { ctx.save(); ctx.scale(1, -1); ctx.translate(0, -H); }

  /* stems */
  stem(ctx, -5, H + 5, 30, H * 0.55, 85, H * 0.28, 142, 22, C.pale, 1.8, 0.6);
  stem(ctx, 52, H * 0.48, 38, H * 0.28, 15, H * 0.12, 4, H * 0.04, C.pale, 1.2, 0.5);
  stem(ctx, W + 5, H + 5, W - 30, H * 0.55, W - 85, H * 0.28, W - 142, 22, C.pale, 1.8, 0.6);
  stem(ctx, W - 52, H * 0.48, W - 38, H * 0.28, W - 15, H * 0.12, W - 4, H * 0.04, C.pale, 1.2, 0.5);
  stem(ctx, W / 2, H + 4, W / 2 - 8, H * 0.5, W / 2 + 6, H * 0.18, W / 2, 0, C.pale, 0.9, 0.32);

  /* left leaves */
  leaf(ctx, 14, H * 0.80, 68, 23,  0.45, C.sage,  0.85);
  leaf(ctx,  2, H * 0.64, 52, 18, -0.40, C.deep,  0.75);
  leaf(ctx, 42, H * 0.52, 60, 21,  0.82, C.light, 0.72);
  leaf(ctx, 68, H * 0.40, 48, 17,  0.10, C.sage,  0.75);
  leaf(ctx,100, H * 0.28, 54, 18, -0.32, C.light, 0.65);
  leaf(ctx,130, H * 0.18, 42, 14,  0.52, C.sage,  0.60);
  leaf(ctx, 19, H * 0.46, 27,  9, -0.90, C.light, 0.55);
  leaf(ctx, 54, H * 0.33, 31, 10, -0.50, C.pale,  0.50);
  leaf(ctx, 80, H * 0.20, 24,  8, -0.18, C.light, 0.48);
  /* right leaves (mirror) */
  leaf(ctx, W - 14, H * 0.80, 68, 23, -0.45, C.sage,  0.85);
  leaf(ctx, W -  2, H * 0.64, 52, 18,  0.40, C.deep,  0.75);
  leaf(ctx, W - 42, H * 0.52, 60, 21, -0.82, C.light, 0.72);
  leaf(ctx, W - 68, H * 0.40, 48, 17, -0.10, C.sage,  0.75);
  leaf(ctx, W -100, H * 0.28, 54, 18,  0.32, C.light, 0.65);
  leaf(ctx, W -130, H * 0.18, 42, 14, -0.52, C.sage,  0.60);
  leaf(ctx, W - 19, H * 0.46, 27,  9,  0.90, C.light, 0.55);
  leaf(ctx, W - 54, H * 0.33, 31, 10,  0.50, C.pale,  0.50);
  leaf(ctx, W - 80, H * 0.20, 24,  8,  0.18, C.light, 0.48);
  /* centre */
  leaf(ctx, W / 2,       H * 0.22, 38, 13,  0.00, C.sage,  0.40);
  leaf(ctx, W / 2 - 22,  H * 0.16, 26,  9, -0.18, C.light, 0.34);
  leaf(ctx, W / 2 + 22,  H * 0.16, 26,  9,  0.18, C.light, 0.34);

  /* flowers */
  flower(ctx, 137, H * 0.22, 14, C.light, 0.80);
  flower(ctx,  92, H * 0.15, 10, C.sage,  0.70);
  flower(ctx, 162, H * 0.14,  9, C.pale,  0.65);
  flower(ctx, W - 137, H * 0.22, 14, C.light, 0.80);
  flower(ctx, W -  92, H * 0.15, 10, C.sage,  0.70);
  flower(ctx, W - 162, H * 0.14,  9, C.pale,  0.65);
  flower(ctx, W / 2,   H * 0.08, 11, C.light, 0.40);

  /* gold dots */
  ([
    [144, H * 0.16], [157, H * 0.21], [130, H * 0.21],
    [W - 144, H * 0.16], [W - 157, H * 0.21], [W - 130, H * 0.21],
  ] as [number, number][]).forEach(([px, py]) => dot(ctx, px, py, 3.2, C.champ, 0.65));

  /* fade toward center */
  const fg = ctx.createLinearGradient(0, H * 0.52, 0, H);
  fg.addColorStop(0, "rgba(253,250,245,0)");
  fg.addColorStop(1, "rgba(253,250,245,1)");
  ctx.fillStyle = fg; ctx.fillRect(0, H * 0.52, W, H * 0.48);

  if (flip) ctx.restore();
}

export default function BotanicalCanvas({ flip = false, height = 170, className = "" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ro = new ResizeObserver(() => draw(cv, flip, height));
    ro.observe(cv.parentElement!);
    draw(cv, flip, height);
    return () => ro.disconnect();
  }, [flip, height]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`block w-full pointer-events-none ${className}`}
      style={{ height }}
    />
  );
}
