
import { bioData } from "@/app/lib/data";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="font-headline font-bold text-lg tracking-tighter synth-glow">
            SYNTH<span className="text-primary">FOLIO</span>
          </span>
          <p className="text-muted-foreground text-sm mt-2">
            © {new Date().getFullYear()} - Designed & Built by {bioData.name}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={bioData.github} className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={bioData.twitter} className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={bioData.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> using Next.js
        </div>
      </div>
    </footer>
  );
}
