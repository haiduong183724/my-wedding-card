"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  color: string;
};

const COLORS = ["#C8DEC0", "#A8C89A", "#7FA870", "#C9A87A", "#D4E8CC"];

export default function FloatingPetals({ count = 12 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left:     Math.random() * 100,
        size:     6 + Math.random() * 10,
        duration: 8 + Math.random() * 12,
        delay:    Math.random() * 10,
        rotate:   Math.random() * 360,
        color:    COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal"
          style={{
            left:  `${p.left}%`,
            top:   "-40px",
            width:  p.size,
            height: p.size * 1.6,
            animationDuration:  `${p.duration}s`,
            animationDelay:     `${p.delay}s`,
            opacity: 0.7,
          }}
        >
          <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${p.rotate}deg)` }}>
            <path
              d="M5 0 C8 2, 9 8, 5 16 C1 8, 2 2, 5 0 Z"
              fill={p.color}
              fillOpacity="0.85"
            />
            <line x1="5" y1="0" x2="5" y2="16" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
          </svg>
        </div>
      ))}
    </div>
  );
}
