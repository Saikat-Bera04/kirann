import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/lib/data";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Storyteller } from "@/components/portfolio/storyteller";
import { Github, ExternalLink, ArrowLeft, Terminal, Home } from "lucide-react";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(img => img.id === project.image)!;

  return (
    <div className="container mx-auto px-4 py-20">
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
            <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} className="bg-primary/10 border-primary/30 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all hover:scale-105"
              >
                Launch Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank"
                className="bg-card border border-border px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all hover:border-primary"
              >
                View Source
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="pt-8 border-t border-border">
             <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
               <Terminal className="w-4 h-4" /> Technology Stack
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {project.tags.map(tag => (
                 <div key={tag} className="bg-card p-3 rounded border border-border flex items-center justify-center text-sm font-medium">
                   {tag}
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group">
            <Image 
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={projectImage.imageHint}
            />
          </div>

          {/* AI Storyteller Component */}
          <Storyteller project={project} />
        </div>
      </div>
    </div>
  );
}
