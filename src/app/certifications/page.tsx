"use client";

import Image from "next/image";
import Link from "next/link";
import { certificationsData } from "@/app/lib/data";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Dashboard
      </Link>

      <div className="space-y-4 mb-16">
        <h1 className="text-5xl font-black tracking-tighter uppercase">
          Technical <span className="text-primary">Credentials</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A collection of verified technical achievements and professional certifications from industry leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative rounded-[2.5rem] overflow-hidden border border-primary/20 aspect-[4/3] bg-card/20 backdrop-blur-sm shadow-xl transition-all hover:border-primary/50"
          >
            <Image 
              src={`https://picsum.photos/seed/${cert.id}/800/600`} 
              alt={cert.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
              data-ai-hint={cert.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-2 text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">
                <Calendar className="w-3 h-3" />
                {cert.date}
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 group-hover:neon-glow-primary transition-all duration-300 uppercase leading-none mb-1">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                {cert.issuer}
              </p>
            </div>

            <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
