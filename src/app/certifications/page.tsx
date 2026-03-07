"use client";

import Link from "next/link";
import { certificationsData } from "@/app/lib/data";
import { ArrowLeft, Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
        Back to Dashboard
      </Link>

      <div className="space-y-4 mb-16">
        <h1 className="text-5xl font-black tracking-tighter">
          TECHNICAL <span className="text-primary">CREDENTIALS</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A showcase of verified technical achievements and continuous learning milestones in engineering and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert) => (
          <Card key={cert.id} className="bg-card/30 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all group overflow-hidden synth-border-glow">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </div>
              <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">{cert.title}</CardTitle>
              <CardDescription className="text-muted-foreground font-medium">{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group/link"
              >
                Verify Credential
                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
