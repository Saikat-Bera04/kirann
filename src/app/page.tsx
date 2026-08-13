"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { bioData, skillsCategories } from "@/app/lib/data";
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
    <div className="text-right min-w-[80px]" style={{ fontFamily: "'Bitcount Single', monospace" }}>
      <div className="text-sm font-bold tracking-tighter text-primary">
        {time ? time.toLocaleTimeString([], { hour12: false }) : "--:--:--"}
      </div>
      <div className="text-[8px] text-muted-foreground uppercase tracking-widest font-medium">
        {time ? time.toLocaleDateString([], { weekday: 'long' }) : "..."}
      </div>
    </div>
  );
}

export default function Home() {
  const glowStyles = [
    "hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] hover:bg-primary/10",
    "hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] hover:bg-purple-500/10",
    "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:bg-blue-500/10",
    "hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.4)] hover:bg-pink-500/10",
    "hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_10px_rgba(249,115,22,0.4)] hover:bg-orange-500/10",
    "hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] hover:bg-cyan-400/10",
    "hover:border-yellow-400 hover:text-yellow-300 hover:shadow-[0_0_10px_rgba(250,204,21,0.4)] hover:bg-yellow-400/10",
  ];

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden relative flex items-center justify-center py-8 md:py-4">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 h-full md:max-h-[900px]">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 h-full">
          
          {/* Column 1: Profile & Cards */}
          <div className="md:col-span-4 flex flex-col gap-4 h-full">
            {/* Profile Card */}
            <div className="glass-card p-5 space-y-4 border-primary/20 flex flex-col justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-primary/30 flex-shrink-0">
                  <Image src="/graphics/saikat-logo.png" alt={bioData.name} fill className="object-cover" />
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight text-white uppercase leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>{bioData.name}</h1>
                  <a 
                    href={`mailto:${bioData.email}`} 
                    className="text-muted-foreground text-[10px] hover:text-primary transition-colors block underline decoration-primary/30 underline-offset-2 mt-1"
                  >
                    {bioData.email}
                  </a>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-primary font-medium">
                  <MapPin className="w-3 h-3" />
                  {bioData.location}
                </div>
                <p className="text-xs font-bold leading-relaxed">{bioData.about}</p>
                <div className="space-y-1 text-[10px]">
                  <p>
                    <span className="text-muted-foreground">Currently:</span>{" "}
                    <a 
                      href={bioData.currentlyBuildingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline decoration-primary/30 underline-offset-2 font-bold"
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
                      className="text-primary hover:underline decoration-primary/30 underline-offset-2 font-bold"
                    >
                      {bioData.internship}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex gap-2">
                  <a href={bioData.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary transition-all"><Twitter className="w-3.5 h-3.5" /></a>
                  <a href={bioData.github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary transition-all"><Github className="w-3.5 h-3.5" /></a>
                  <a href={bioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary transition-all"><Linkedin className="w-3.5 h-3.5" /></a>
                  <a href={bioData.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-muted-foreground hover:text-primary transition-all"><Instagram className="w-3.5 h-3.5" /></a>
                </div>
                <Clock />
              </div>
            </div>

            {/* Graphics Card Link */}
            <Link href="/graphics" className="block relative group overflow-hidden rounded-[2rem] border border-primary/20 flex-1 min-h-[160px] md:min-h-0 bg-card/20 backdrop-blur-sm">
              <Image src="/graphics/messi-and-jesus.jpeg" alt="Graphics" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute bottom-4 left-4 z-10">
                <h2 className="text-xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 group-hover:neon-glow-primary transition-all duration-300 uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>GRAPHICS</h2>
              </div>
              <div className="absolute bottom-3 right-3 z-10 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Certifications Card Link */}
            <Link href="/certifications" className="block relative group overflow-hidden rounded-[2rem] border border-primary/20 flex-1 min-h-[160px] md:min-h-0 bg-card/20 backdrop-blur-sm">
              <Image src="/graphics/abstract-37.jpeg" alt="Certifications" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute bottom-4 left-4 z-10">
                <h2 className="text-lg font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 group-hover:neon-glow-primary transition-all duration-300 uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>CERTIFICATIONS</h2>
              </div>
              <div className="absolute bottom-3 right-3 z-10 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="md:col-span-4 h-full md:overflow-hidden">
            <div className="p-5 h-full space-y-4 border border-primary/10 rounded-[2rem] bg-card/20 backdrop-blur-sm flex flex-col min-h-[400px]">
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-primary/20 shadow-lg flex-shrink-0">
                <div>
                  <h2 className="text-xl font-black italic tracking-tighter text-white uppercase leading-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>TECH STACK</h2>
                </div>
                <Layers className="text-primary w-6 h-6" />
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                {skillsCategories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h3 className="text-[10px] font-bold text-primary/90 uppercase tracking-[0.15em] border-l-2 border-primary/50 pl-2">{category.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIdx) => {
                        const styleClass = glowStyles[skillIdx % glowStyles.length];
                        return (
                          <span 
                            key={skill} 
                            className={cn(
                              "tech-badge rounded-full px-2 py-0.5 text-[8px] hover:scale-105 active:scale-95 transition-all duration-300",
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
          <div className="md:col-span-4 h-full mt-2 md:mt-0">
            <Link href="/projects" className="block h-full min-h-[300px] md:min-h-0 group">
              <div className="glass-card h-full relative overflow-hidden flex flex-col justify-between group border-primary/10 hover:border-primary/40 transition-all rounded-[2rem]">
                <Image 
                  src="/graphics/creative-design.png" 
                  alt="Projects" 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                <div className="relative p-6 h-full flex flex-col justify-between items-start">
                   <div className="self-start">
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                   </div>
                   <div className="mt-auto">
                    <h2 
                      className="text-3xl lg:text-5xl font-black tracking-tighter text-white/90 select-none group-hover:text-primary group-hover:synth-glow transition-all uppercase [writing-mode:vertical-lr] rotate-180" 
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
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(var(--primary), 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary), 0.4);
        }
      `}</style>
    </div>
  );
}
