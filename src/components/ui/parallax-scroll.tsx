"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: { src: string; title: string }[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Removing the container prop makes useScroll target the window scroll
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("w-full relative", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-10 px-10"
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="relative group overflow-hidden rounded-2xl border border-primary/20 shadow-2xl"
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-black tracking-[0.3em] uppercase text-sm border-y border-primary/50 py-2 px-6 bg-background/60 backdrop-blur-md synth-glow">
                  {el.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateSecond }} 
              key={"grid-2" + idx}
              className="relative group overflow-hidden rounded-2xl border border-primary/20 shadow-2xl"
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-black tracking-[0.3em] uppercase text-sm border-y border-primary/50 py-2 px-6 bg-background/60 backdrop-blur-md synth-glow">
                  {el.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateThird }} 
              key={"grid-3" + idx}
              className="relative group overflow-hidden rounded-2xl border border-primary/20 shadow-2xl"
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-black tracking-[0.3em] uppercase text-sm border-y border-primary/50 py-2 px-6 bg-background/60 backdrop-blur-md synth-glow">
                  {el.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
