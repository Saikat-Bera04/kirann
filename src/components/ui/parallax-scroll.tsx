
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: { src: string; title: string }[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  if (!mounted) return null;

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
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(el)}
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">View Project</span>
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-white font-black tracking-[0.2em] uppercase text-xs">
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
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(el)}
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">View Project</span>
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-white font-black tracking-[0.2em] uppercase text-xs">
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
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(el)}
            >
              <img
                src={el.src}
                className="h-80 w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                height="400"
                width="400"
                alt={el.title}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">View Project</span>
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-white font-black tracking-[0.2em] uppercase text-xs">
                  {el.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
          <DialogTitle className="sr-only">
            {selectedImage?.title || "Image Preview"}
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
             <button 
               onClick={() => setSelectedImage(null)}
               className="absolute top-4 right-4 z-[100] p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors border border-white/10"
             >
               <X className="w-6 h-6" />
             </button>
             {selectedImage && (
               <div className="relative group">
                 <img
                   src={selectedImage.src}
                   alt={selectedImage.title}
                   className="max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-primary/20"
                 />
                 <div className="absolute -bottom-10 left-0 right-0 text-center">
                    <h3 className="text-white font-black tracking-widest uppercase text-lg group-hover:neon-glow-primary transition-all">
                      {selectedImage.title}
                    </h3>
                 </div>
               </div>
             )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

