"use client";

import { useEffect, useState, useMemo } from "react";

export function Snowfall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 10,
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
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
