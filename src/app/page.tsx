"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { bioData, skillsCategories } from "@/app/lib/data";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Github, Twitter, Linkedin, MapPin, ArrowUpRight, Layers, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right min-w-[100px]" style={{ fontFamily: "'Bitcount Single', monospace" }}>
      <div className="text-lg font-bold tracking-tighter text-primary">
        {time ? time.toLocaleTimeString([], { hour12: false }) : "--:--:--"}
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
        {time ? time.toLocaleDateString([], { weekday: 'long' }) : "..."}
      </div>
    </div>
  );
}

function FloatingBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            bottom: `-20px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            backgroundColor: "hsl(var(--primary))",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const projectsImg = PlaceHolderImages.find(img => img.id === "projects-cover")!;

  const glowStyles = [
    "hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-primary/10",
    "hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:bg-purple-500/10",
    "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-500/10",
    "hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] hover:bg-pink-500/10",
    "hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:bg-orange-500/10",
    "hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:bg-cyan-400/10",
    "hover:border-yellow-400 hover:text-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] hover:bg-yellow-400/10",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingBackground />
      <div className="container mx-auto px-4 pb-4 mt-[10px] max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Column 1: Profile & Cards */}
          <div className="md:col-span-4 space-y-6">
            {/* Profile Card */}
            <div className="glass-card p-8 space-y-6 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-[2.5rem] overflow-hidden border border-primary/30">
                  <Image src="/B (1).png" alt={bioData.name} fill className="object-cover" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>{bioData.name}</h1>
                  <a 
                    href={`mailto:${bioData.email}`} 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors block underline decoration-primary/30 underline-offset-4"
                  >
                    {bioData.email}
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <MapPin className="w-3 h-3" />
                  {bioData.location}
                </div>
                <p className="text-sm font-bold leading-relaxed">{bioData.about}</p>
                <div className="space-y-1 text-xs">
                  <p>
                    <span className="text-muted-foreground">Currently building:</span>{" "}
                    <a 
                      href={bioData.currentlyBuildingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline decoration-primary/30 underline-offset-4 font-bold"
                    >
                      {bioData.currentlyBuilding}
                    </a>
                  </p>
                  <p>
                    <span className="text-muted-foreground">{bioData.internshipTitle}:</span>{" "}
                    <a 
                      href={bioData.internshipUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline decoration-primary/30 underline-offset-4 font-bold"
                    >
                      {bioData.internship}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  <a href={bioData.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary transition-all"><Twitter className="w-4 h-4" /></a>
                  <a href={bioData.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary transition-all"><Github className="w-4 h-4" /></a>
                  <a href={bioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary transition-all"><Linkedin className="w-4 h-4" /></a>
                  <a href={bioData.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary transition-all"><Instagram className="w-4 h-4" /></a>
                </div>
                <Clock />
              </div>
            </div>

            {/* Graphics Card Link */}
            <Link href="/graphics" className="block relative group overflow-hidden rounded-[2.5rem] border border-primary/20 aspect-[4/3] bg-card/20 backdrop-blur-sm">
              <Image src="/Leo Messi.jpeg" alt="Graphics" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute bottom-6 left-6 z-10">
                <h2 className="text-4xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 group-hover:neon-glow-primary transition-all duration-300 uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>GRAPHICS</h2>
              </div>
              <div className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Certifications Card Link */}
            <Link href="/certifications" className="block relative group overflow-hidden rounded-[2.5rem] border border-primary/20 aspect-[4/3] bg-card/20 backdrop-blur-sm">
              <Image src={projectsImg.imageUrl} alt="Certifications" fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={projectsImg.imageHint} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute bottom-6 left-6 z-10">
                <h2 className="text-2xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 group-hover:neon-glow-primary transition-all duration-300 uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>CERTIFICATIONS</h2>
              </div>
              <div className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="md:col-span-4">
            <div className="p-8 h-full space-y-8 border border-primary/10 rounded-[2.5rem] bg-card/20 backdrop-blur-sm">
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-primary/20 shadow-xl">
                <div>
                  <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase" style={{ fontFamily: "'Open Sans', sans-serif" }}>TECH STACK</h2>
                </div>
                <Layers className="text-primary w-8 h-8" />
              </div>

              <div className="space-y-8">
                {skillsCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="text-sm font-bold text-primary/90 uppercase tracking-[0.2em] border-l-2 border-primary/50 pl-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => {
                        const styleClass = glowStyles[skillIdx % glowStyles.length];
                        return (
                          <span 
                            key={skill} 
                            className={cn(
                              "tech-badge rounded-full px-3 py-1 text-[10px] hover:scale-110 active:scale-95 transition-all duration-300",
                              styleClass
                            )}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Projects Vertical Navigation */}
          <div className="md:col-span-4">
            <Link href="/projects" className="block h-full group">
              <div className="glass-card h-full relative overflow-hidden flex flex-col justify-between group border-primary/10 hover:border-primary/40 transition-all rounded-[2.5rem]">
                <Image 
                  src={projectsImg.imageUrl} 
                  alt="Projects" 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                <div className="relative p-8 h-full flex flex-col justify-between items-start">
                   <div className="self-start">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                   </div>
                   <div className="mt-auto">
                    <h2 
                      className="text-4xl lg:text-7xl font-black tracking-tighter text-white/90 select-none group-hover:text-primary group-hover:synth-glow transition-all uppercase [writing-mode:vertical-lr] rotate-180" 
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      PROJECTS
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
