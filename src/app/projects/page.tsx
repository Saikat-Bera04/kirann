"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Code2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ExpandableProjects } from "@/components/expandable-projects";

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
    <div className="container mx-auto px-4 py-20 min-h-screen max-w-5xl">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter">
            Project <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real-time GitHub synchronization. Exploring AI, Backend Architectures, and Web3 Systems.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search repositories..." 
            className="pl-10 bg-card/30 border-primary/20 focus:ring-primary rounded-xl"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-muted-foreground font-bold tracking-widest uppercase text-[10px]">Accessing GitHub API...</p>
        </div>
      ) : (
        <>
          <ExpandableProjects repos={filteredProjects} />

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-card/20 rounded-3xl border border-dashed border-primary/20">
              <Code2 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No repositories found matching your search.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
