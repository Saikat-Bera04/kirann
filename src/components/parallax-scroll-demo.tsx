"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { graphicsData } from "@/app/lib/data";

export default function ParallaxScrollDemo() {
  const items = graphicsData.map(item => ({
    title: item.title,
    src: item.url
  }));
  
  return <ParallaxScroll images={items} />;
}


