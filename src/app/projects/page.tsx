
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Search, Code2, ArrowLeft, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("");
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Saikat-Bera04/repos?sort=updated')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch repos", err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = repos.filter(repo => 
    repo.name.toLowerCase().includes(filter.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(filter.toLowerCase())) ||
    (repo.topics && repo.topics.some((topic: string) => topic.toLowerCase().includes(filter.toLowerCase())))
  );

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-headline font-bold">Project <span className="text-primary">Portfolio</span></h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Automatically synchronized with my GitHub repositories. Exploring the intersection of AI, Backend Systems, and Web3.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search projects or tools..." 
            className="pl-10 bg-card/50 border-border focus:ring-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-muted-foreground font-bold tracking-widest uppercase text-xs">Synchronizing with GitHub...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((repo) => {
              // Use a consistent placeholder based on repo ID or default
              const projectImage = PlaceHolderImages[repo.id % PlaceHolderImages.length] || PlaceHolderImages[0];
              const year = new Date(repo.created_at).getFullYear();
              
              return (
                <Card key={repo.id} className="group bg-card/50 border-border overflow-hidden hover:border-primary/50 transition-all rounded-none">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      src={projectImage.imageUrl}
                      alt={repo.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={projectImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <Link 
                      href={`/projects/${repo.name}`}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </Link>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs text-primary font-bold uppercase tracking-widest">{year}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{repo.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {repo.description || "Technical project exploring software engineering principles."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {repo.topics && repo.topics.slice(0, 3).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] py-0 px-2 bg-secondary/10 border-secondary/30">
                          {tag}
                        </Badge>
                      ))}
                      {repo.language && (
                        <Badge variant="outline" className="text-[10px] py-0 px-2 border-primary/30 text-primary">
                          {repo.language}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-card/20 rounded-xl border border-dashed border-border">
              <Code2 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No repositories found matching your search.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
