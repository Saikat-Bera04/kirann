"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParallaxScrollDemo from "@/components/parallax-scroll-demo";

export default function GraphicsPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Dashboard
      </Link>

      <div className="space-y-4 mb-16">
        <h1 className="text-5xl font-black tracking-tighter uppercase">
          GRAPHIC <span className="text-primary">GALLERY</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A collection of digital art, UI concepts, and atmospheric renders. Exploration of color, light, and the synthwave aesthetic.
        </p>
      </div>

      <ParallaxScrollDemo />
    </div>
  );
}
