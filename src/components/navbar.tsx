"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-6 pointer-events-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image 
              src="/B (1).png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-tighter text-white/90">
            moChak<span className="text-primary">.rs</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          {[
            { name: "home", href: "/" },
            { name: "projects", href: "/projects" },
            { name: "graphics", href: "/graphics" },
            { name: "contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link 
          href="/contact"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
        >
          Let's talk
        </Link>
      </div>
    </nav>
  );
}
