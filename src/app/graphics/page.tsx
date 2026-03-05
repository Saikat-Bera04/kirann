"use client";

import Image from "next/image";
import Link from "next/link";
import { graphicsData } from "@/app/lib/data";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function GraphicsPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Dashboard
      </Link>

      <div className="space-y-4 mb-16">
        <h1 className="text-5xl font-black tracking-tighter flex items-center gap-4">
          <Sparkles className="text-primary w-8 h-8" />
          GRAPHIC <span className="text-primary">GALLERY</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A collection of digital art, UI concepts, and atmospheric renders. Exploration of color, light, and the synthwave aesthetic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {graphicsData.map((graphic) => (
          <div key={graphic.id} className="group relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] bg-card/20 backdrop-blur-sm">
            <Image 
              src={graphic.url} 
              alt={graphic.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              data-ai-hint={graphic.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {graphic.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
