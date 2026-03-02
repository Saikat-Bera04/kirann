
import Image from "next/image";
import Link from "next/link";
import { bioData } from "@/app/lib/data";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { SkillsMatrix } from "@/components/portfolio/skills-matrix";
import { GithubOverview } from "@/components/portfolio/github-overview";
import { ArrowRight, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  const portrait = PlaceHolderImages.find(img => img.id === "hero-portrait")!;

  return (
    <div className="container mx-auto px-4 pt-12">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-[70vh] py-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Available for Hire</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight">
            I'm <span className="text-primary synth-glow">{bioData.name}</span>
          </h1>
          <div className="h-8 overflow-hidden">
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary">
              {bioData.title}
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {bioData.about}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link 
              href="/projects" 
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all hover:scale-105 synth-border-glow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-4">
              <a href={bioData.github} className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href={bioData.linkedin} className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative max-w-md lg:max-w-none">
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/50 synth-border-glow rotate-2 transition-transform hover:rotate-0">
            <Image 
              src={portrait.imageUrl} 
              alt={portrait.description} 
              width={500}
              height={667}
              data-ai-hint={portrait.imageHint}
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
        </div>
      </section>

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Social Hub / Call to Action */}
      <section className="py-20 text-center">
        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl border border-primary/20 p-12 lg:p-24 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-headline font-bold">Let's build the <span className="text-secondary">future</span> together.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open for freelance projects, open-source collaborations, and full-time engineering roles.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link 
                href="/contact" 
                className="bg-foreground text-background font-bold px-10 py-4 rounded-md hover:bg-primary hover:text-foreground transition-all flex items-center gap-2"
              >
                Get in Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Background grid effect for the hub */}
          <div className="absolute inset-0 grid-background opacity-20 pointer-events-none"></div>
        </div>
      </section>

      {/* GitHub Overview */}
      <GithubOverview />
    </div>
  );
}
