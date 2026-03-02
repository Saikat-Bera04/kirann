
"use client";

import { skillsData } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

export function SkillsMatrix() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-grow bg-border"></div>
        <h2 className="font-headline text-3xl font-bold text-center flex items-center gap-3">
          <Layers className="text-primary w-8 h-8" />
          Skills Matrix
        </h2>
        <div className="h-px flex-grow bg-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <Card key={category.name} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:translate-y-[-4px]">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-bold">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="bg-primary/5 border-primary/20 text-foreground py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
