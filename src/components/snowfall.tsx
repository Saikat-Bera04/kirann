"use client";

import { useEffect, useState, useMemo } from "react";

export function Snowfall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const snowflakes = useMemo(() => {
    // Increased particle count for a blizzard effect
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // Smaller particles for blizzard
      left: Math.random() * 120 - 20, // Start from wider range for wind
      duration: Math.random() * 2 + 1.5, // Much faster movement
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {snowflakes.map((s) => (
        <div
          key={s.id}
          className="snow-particle"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.left}%`,
            top: `-20px`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
