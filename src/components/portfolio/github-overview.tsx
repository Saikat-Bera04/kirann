
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Users, BookOpen } from "lucide-react";

export function GithubOverview() {
  // In a real app, this would fetch from Github API
  const stats = {
    repositories: 48,
    stars: 1240,
    forks: 320,
    followers: 850,
  };

  return (
    <section className="py-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-headline text-3xl font-bold flex items-center gap-3 mb-4">
          <Github className="text-primary w-8 h-8" />
          GitHub Overview
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          Automated pulse from my development workflow.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { label: "Public Repos", value: stats.repositories, icon: BookOpen },
          { label: "Total Stars", value: stats.stars, icon: Star },
          { label: "Total Forks", value: stats.forks, icon: GitFork },
          { label: "Followers", value: stats.followers, icon: Users },
        ].map((stat) => (
          <Card key={stat.label} className="bg-card/30 border-muted text-center p-6 transition-all hover:bg-card/50">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="text-secondary w-5 h-5" />
            </div>
            <div className="text-2xl font-bold font-headline">{stat.value.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-card/20 border border-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Want to see the source?</h3>
          <p className="text-muted-foreground text-sm">
            My repositories are open for exploration. From production-grade architectures to experimental sketches.
          </p>
        </div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-foreground text-background font-bold px-6 py-3 rounded-md hover:bg-primary hover:text-foreground transition-all"
        >
          <Github className="w-5 h-5" />
          Follow on GitHub
        </a>
      </div>
    </section>
  );
}
