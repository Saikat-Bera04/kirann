
"use client";

import { useState } from "react";
import { generateProjectNarrative } from "@/ai/flows/generate-project-narrative";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wand2, Loader2, Sparkles, User, Terminal } from "lucide-react";
import { Project } from "@/app/lib/data";

interface StorytellerProps {
  project: Project;
}

export function Storyteller({ project }: StorytellerProps) {
  const [loading, setLoading] = useState(false);
  const [narrative, setNarrative] = useState("");
  const [audience, setAudience] = useState("technical");
  const [keywords, setKeywords] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateProjectNarrative({
        projectName: project.title,
        projectDescription: project.longDescription,
        technologiesUsed: project.tags,
        targetAudience: audience,
        keywords: keywords ? keywords.split(",").map(k => k.trim()) : []
      });
      setNarrative(result.narrative);
    } catch (error) {
      console.error("Failed to generate narrative", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-card border-secondary/30 overflow-hidden">
      <CardHeader className="bg-secondary/10 border-b border-secondary/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
            <Sparkles className="text-secondary w-5 h-5" />
          </div>
          <div>
            <CardTitle className="text-lg">Project Storyteller</CardTitle>
            <CardDescription className="text-xs">AI-powered narrative generator for different contexts.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <User className="w-3 h-3" /> Target Audience
            </label>
            <Select value={audience} onValueChange={setAudience}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select Audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recruiters">Recruiters</SelectItem>
                <SelectItem value="technical">Technical Developers</SelectItem>
                <SelectItem value="non-technical">Non-Technical Clients</SelectItem>
                <SelectItem value="storytelling">Narrative Storytelling</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-3 h-3" /> Custom Keywords
            </label>
            <Input 
              placeholder="e.g. scalable, creative, fast" 
              className="bg-background border-border"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Magic...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Re-imagine this Project
            </>
          )}
        </Button>

        {narrative && (
          <div className="mt-8 p-6 bg-background rounded-lg border border-primary/20 relative animate-in fade-in slide-in-from-bottom-2">
            <div className="absolute top-[-12px] left-4 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">
              AI Narrative
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-wrap italic text-foreground/90 font-medium">
              "{narrative}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
