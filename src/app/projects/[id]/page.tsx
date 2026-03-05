
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Storyteller } from "@/components/portfolio/storyteller";
import { Github, ExternalLink, ArrowLeft, Terminal, Home, Loader2 } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const [repo, setRepo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;
    
    fetch(`https://api.github.com/repos/Saikat-Bera04/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setRepo(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch repo details", err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-40 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="text-muted-foreground font-bold tracking-widest uppercase text-xs">Fetching repository metadata...</p>
      </div>
    );
  }

  if (!repo || repo.message === "Not Found") {
    return (
      <div className="container mx-auto px-4 py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Repository Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested repository could not be located on GitHub.</p>
        <Link href="/projects" className="bg-primary text-white px-8 py-3 rounded-full font-bold">
          Back to Projects
        </Link>
      </div>
    );
  }

  const projectImage = PlaceHolderImages[repo.id % PlaceHolderImages.length] || PlaceHolderImages[0];
  const tags = [...(repo.topics || []), repo.language].filter(Boolean);

  // Adapt repo for Storyteller
  const projectAdaptor = {
    id: repo.id.toString(),
    title: repo.name,
    description: repo.description || "",
    longDescription: repo.description || "A technical repository exploring engineering concepts.",
    image: projectImage.id,
    tags: tags,
    year: new Date(repo.created_at).getFullYear().toString(),
    repoUrl: repo.html_url,
    liveUrl: repo.homepage || ""
  };

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
          Back to Portfolio
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <Home className="w-4 h-4" />
          Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight uppercase">{repo.name}</h1>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Badge key={tag} className="bg-primary/10 border-primary/30 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {repo.description || "Detailed documentation for this repository is available on GitHub. This project represents a key part of my technical journey in software engineering."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href={repo.html_url} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-none font-bold flex items-center gap-2 transition-all hover:scale-105"
            >
              View Repository
              <Github className="w-4 h-4" />
            </a>
            {repo.homepage && (
              <a 
                href={repo.homepage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card border border-border px-6 py-3 rounded-none font-bold flex items-center gap-2 transition-all hover:border-primary"
              >
                Launch Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="pt-8 border-t border-border">
             <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
               <Terminal className="w-4 h-4" /> Repository Statistics
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               <div className="bg-card p-3 rounded-none border border-border flex flex-col items-center justify-center">
                 <span className="text-xs text-muted-foreground uppercase">Stars</span>
                 <span className="font-bold">{repo.stargazers_count}</span>
               </div>
               <div className="bg-card p-3 rounded-none border border-border flex flex-col items-center justify-center">
                 <span className="text-xs text-muted-foreground uppercase">Forks</span>
                 <span className="font-bold">{repo.forks_count}</span>
               </div>
               <div className="bg-card p-3 rounded-none border border-border flex flex-col items-center justify-center">
                 <span className="text-xs text-muted-foreground uppercase">Watchers</span>
                 <span className="font-bold">{repo.watchers_count}</span>
               </div>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-video rounded-none overflow-hidden border border-border group">
            <Image 
              src={projectImage.imageUrl}
              alt={repo.name}
              fill
              className="object-cover"
              data-ai-hint={projectImage.imageHint}
            />
          </div>

          {/* AI Storyteller Component */}
          <Storyteller project={projectAdaptor} />
        </div>
      </div>
    </div>
  );
}
