"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExternalLink, Github, X } from "lucide-react";
import { PROJECT_IMAGES_MAP } from "@/app/lib/data";


interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language?: string;
  topics?: string[];
  created_at: string;
}

const DEFAULT_PLACEHOLDERS = [
  "/_ (37).jpeg",
  "/_ (41).jpeg",
  "https://picsum.photos/seed/rust-lang/600/400",
  "https://picsum.photos/seed/web3-tech/600/400",
  "https://picsum.photos/seed/ai-data/600/400",
  "https://picsum.photos/seed/collab-network/600/400"
];

const getProjectImage = (repoName: string, id: number) => {
  // Check exact match or lowercase match
  const image = PROJECT_IMAGES_MAP[repoName] || PROJECT_IMAGES_MAP[repoName.toLowerCase()];
  if (image) return image;
  
  // Fallback to placeholders
  return DEFAULT_PLACEHOLDERS[id % DEFAULT_PLACEHOLDERS.length];
};

export function ExpandableProjects({ repos }: { repos: Repo[] }) {
  const [active, setActive] = useState<Repo | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-6 right-6 lg:top-10 lg:right-10 items-center justify-center bg-white rounded-full h-8 w-8 z-[101] shadow-xl"
              onClick={() => setActive(null)}
            >
              <X className="w-4 h-4 text-black" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-card border border-primary/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  src={getProjectImage(active.name, active.id)}
                  alt={active.name}
                  className="w-full h-64 lg:h-80 object-cover object-center"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-black text-2xl text-white uppercase tracking-tighter"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.name}-${id}`}
                      className="text-primary font-bold text-xs uppercase tracking-widest"
                    >
                      {active.language || "Technical Project"} • {new Date(active.created_at).getFullYear()}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      layoutId={`button-repo-${active.name}-${id}`}
                      href={active.html_url}
                      target="_blank"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {active.homepage && (
                      <motion.a
                        layoutId={`button-demo-${active.name}-${id}`}
                        href={active.homepage}
                        target="_blank"
                        className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-sm lg:text-base h-fit max-h-40 overflow-y-auto custom-scrollbar leading-relaxed"
                  >
                    {active.description || "Detailed documentation for this repository is available on GitHub. This project represents a key part of my technical journey in software engineering."}
                    
                    {active.topics && active.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {active.topics.map(topic => (
                          <span key={topic} className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary rounded-full uppercase font-bold">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 gap-4">
        {repos.map((repo) => (
          <motion.div
            layoutId={`card-${repo.name}-${id}`}
            key={`card-${repo.name}-${id}`}
            onClick={() => setActive(repo)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/40 rounded-2xl cursor-pointer transition-all group"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <motion.div layoutId={`image-${repo.name}-${id}`}>
                <img
                  src={getProjectImage(repo.name, repo.id)}
                  alt={repo.name}
                  className="h-40 w-full md:h-16 md:w-16 rounded-xl object-cover"
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  layoutId={`title-${repo.name}-${id}`}
                  className="font-bold text-white text-lg group-hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {repo.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${repo.name}-${id}`}
                  className="text-muted-foreground text-xs uppercase tracking-widest font-medium"
                >
                  {repo.language || "Unknown Language"} • {new Date(repo.created_at).getFullYear()}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-view-${repo.name}-${id}`}
              className="px-6 py-2 text-xs rounded-full font-black uppercase tracking-widest bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all mt-4 md:mt-0"
            >
              Expand Details
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
