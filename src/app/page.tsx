"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { bioData, skillsCategories } from "@/app/lib/data";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Github, Twitter, Linkedin, MapPin, ArrowUpRight, Map, Sparkles } from "lucide-react";

function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right min-w-[100px]">
      <div className="text-2xl font-bold tracking-tighter">
        {time ? time.toLocaleTimeString([], { hour12: false }) : "--:--:--"}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
        {time ? time.toLocaleDateString([], { weekday: 'long' }) : "..."}
      </div>
    </div>
  );
}

export default function Home() {
  const avatar = PlaceHolderImages.find(img => img.id === "profile-pic")!;
  const spidermanImg = PlaceHolderImages.find(img => img.id === "spiderman-hammock")!;
  const animeImg = PlaceHolderImages.find(img => img.id === "anime-character")!;
  const projectsImg = PlaceHolderImages.find(img => img.id === "projects-cover")!;
  const rustLogo = PlaceHolderImages.find(img => img.id === "rust-logo")!;

  return (
    <div className="min-h-screen grid-bg relative">
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Column 1: Profile & Images */}
          <div className="md:col-span-4 space-y-6">
            {/* Profile Card */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-white/20">
                  <Image src={avatar.imageUrl} alt={bioData.name} fill className="object-cover" data-ai-hint={avatar.imageHint} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">{bioData.name}</h1>
                  <p className="text-muted-foreground text-sm">{bioData.handle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <MapPin className="w-3 h-3" />
                  {bioData.location}
                </div>
                <p className="text-sm font-bold leading-relaxed">{bioData.about}</p>
                <div className="space-y-1 text-xs">
                  <p><span className="text-muted-foreground">Currently building:</span> <span className="text-primary hover:underline cursor-pointer">{bioData.currentlyBuilding}</span></p>
                  <p><span className="text-muted-foreground">Full Stack Intern:</span> <span className="text-primary hover:underline cursor-pointer">{bioData.internship}</span></p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <a href={bioData.twitter} className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                  <a href={bioData.github} className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-white transition-all"><Github className="w-4 h-4" /></a>
                  <a href={bioData.linkedin} className="p-2 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                </div>
                <Clock />
              </div>
            </div>

            {/* Feature Image 1 */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 aspect-[4/3]">
              <div className="absolute top-4 left-4 z-10 p-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                <Image src={rustLogo.imageUrl} alt="Rust" width={24} height={24} className="rounded" data-ai-hint={rustLogo.imageHint} />
                <p className="text-[10px] font-bold mt-1 text-center text-white">Rust</p>
              </div>
              <Image src={spidermanImg.imageUrl} alt="Art" fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={spidermanImg.imageHint} />
            </div>

            {/* Feature Image 2: Graphics Card Link */}
            <Link href="/graphics" className="block relative group overflow-hidden rounded-[2.5rem] border border-white/10 aspect-[4/3]">
              <Image src={animeImg.imageUrl} alt="Graphics" fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={animeImg.imageHint} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                <Sparkles className="w-8 h-8 text-primary opacity-80 group-hover:scale-110 transition-transform" />
                <h2 className="text-4xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 transition-opacity">GRAPHICS</h2>
              </div>
              <div className="absolute bottom-4 right-4 z-10 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="md:col-span-5">
            <div className="p-8 h-full space-y-8 border border-white/10 rounded-[2.5rem]">
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 shadow-xl">
                <div>
                  <h2 className="text-3xl font-black italic tracking-tighter text-white">TECH STACK</h2>
                </div>
              </div>

              <div className="space-y-6">
                {skillsCategories.map((category) => (
                  <div key={category.name} className="space-y-3">
                    <h3 className="text-sm font-bold text-white/90 uppercase tracking-widest">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="tech-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Projects Vertical Navigation */}
          <div className="md:col-span-3">
            <Link href="/projects" className="block h-full group">
              <div className="glass-card h-full relative overflow-hidden flex flex-col justify-between group">
                <Image 
                  src={projectsImg.imageUrl} 
                  alt="Projects" 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                  data-ai-hint={projectsImg.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                <div className="relative p-8 self-end">
                   <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                     <ArrowUpRight className="w-8 h-8" />
                   </div>
                </div>

                <div className="relative p-8">
                  <h2 className="text-7xl font-black tracking-tighter vertical-text text-white/90 select-none group-hover:text-primary transition-colors">PROJECTS</h2>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
