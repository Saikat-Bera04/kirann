
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Zap, Terminal, Code2, Mail, LayoutGrid } from "lucide-react";

const navItems = [
  { name: "Bio", href: "/", icon: Zap },
  { name: "Portfolio", href: "/projects", icon: LayoutGrid },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center transition-all group-hover:synth-border-glow">
            <Terminal className="text-primary w-6 h-6" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tighter synth-glow">
            SYNTH<span className="text-primary">FOLIO</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link 
          href="/contact"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold transition-all hover:scale-105 active:scale-95 synth-border-glow"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
