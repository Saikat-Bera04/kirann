export const bioData = {
  name: "Saikat Bera",
  handle: "work.saikatbera@gmail.com",
  title: "Full Stack Engineer & GenAI Enthusiast",
  tagline: "Building scalable backends and genAI products.",
  about: "Hi I am Saikat and I build scalable backends and genAI products.",
  location: "India",
  email: "work.saikatbera@gmail.com",
  github: "https://github.com/Saikat-Bera04",
  twitter: "https://twitter.com/saikat",
  linkedin: "https://linkedin.com/in/saikat",
  currentlyBuilding: "campuskart",
  currentlyBuildingUrl: "https://www.campuskart.space/",
  internship: "Girlscript foundation",
  internshipUrl: "https://www.girlscript.org/",
  internshipTitle: "Graphics Intern"
};

export const skillsCategories = [
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "Rust", "Typescript / Javascript", "Redis", "Axum", "MongoDB", "Prisma ORM"]
  },
  {
    name: "GenAI / Machine Learning",
    skills: ["HuggingFace", "OpenAI sdk", "Gemini sdk", "n8n", "LangSmith", "LangGraph", "LangChain"]
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Aceternity UI", "ShadCN"]
  },
  {
    name: "Web3",
    skills: ["Solidity", "Ether.js", "Foundry", "Rust (Solana)", "Anchor"]
  },
  {
    name: "Realtime & Infra",
    skills: ["WebSockets", "WebRTC", "BullMQ", "Redis Queue", "Supabase"]
  },
  {
    name: "Tooling & Auth",
    skills: ["NextAuth.js", "Clerk Auth", "Zod", "Vercel", "Render", "GitHub & Git", "Docker"]
  }
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  repoUrl: string;
  liveUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "AI Agent Orchestrator",
    description: "Multi-agent system for automated research and content generation.",
    longDescription: "A comprehensive platform that leverages LLMs to orchestrate complex tasks across multiple AI agents. It features a real-time monitoring dashboard and a flexible plugin architecture for specialized neural tasks.",
    image: "projects-cover",
    tags: ["GenAI", "Node.js", "React", "LangChain"],
    year: "2025",
    repoUrl: "https://github.com/Saikat-Bera04",
    liveUrl: "https://example.com"
  },
  {
    id: "project-2",
    title: "moChak.rs",
    description: "High-performance distributed task queue built with Rust and Redis.",
    longDescription: "A low-latency task processing engine designed for massive scale. Uses Redis for state management and Rust's async runtime for maximum throughput in real-time environments.",
    image: "rust-logo",
    tags: ["Rust", "Redis", "Distributed Systems", "Axum"],
    year: "2024",
    repoUrl: "https://github.com/Saikat-Bera04",
    liveUrl: "https://example.com"
  },
  {
    id: "project-3",
    title: "De-Vote Solana",
    description: "Decentralized voting system on Solana blockchain using Anchor.",
    longDescription: "An immutable and transparent voting platform built on Solana. Implements secure on-chain state transitions and a React-based frontend for seamless user participation.",
    image: "web3-cover",
    tags: ["Solana", "Rust", "Anchor", "Web3"],
    year: "2024",
    repoUrl: "https://github.com/Saikat-Bera04",
    liveUrl: "https://example.com"
  },
  {
    id: "project-4",
    title: "Xpectrum Intelligence",
    description: "AI-driven market analysis and predictive modeling tool.",
    longDescription: "Internal tool developed during internship to analyze market trends using custom-trained models and streaming data pipelines for real-time insights.",
    image: "ai-analysis",
    tags: ["Python", "FastAPI", "ML", "Docker"],
    year: "2024",
    repoUrl: "https://github.com/Saikat-Bera04",
    liveUrl: "https://example.com"
  },
  {
    id: "project-5",
    title: "Real-time Collaboration Engine",
    description: "P2P data synchronization using WebRTC and WebSockets.",
    longDescription: "A robust engine for real-time document editing and multi-user interaction, focusing on low latency and eventual consistency in distributed systems.",
    image: "collab-engine",
    tags: ["WebRTC", "Socket.io", "TypeScript"],
    year: "2023",
    repoUrl: "https://github.com/Saikat-Bera04",
    liveUrl: "https://example.com"
  }
];

export const graphicsData = [
  { id: "g1", title: "Cyberpunk City", url: "https://picsum.photos/seed/cyber-city/800/600", hint: "cyberpunk city" },
  { id: "g2", title: "Neon Samurai", url: "https://picsum.photos/seed/neon-samurai/800/600", hint: "samurai neon" },
  { id: "g3", title: "Vaporwave Sunset", url: "https://picsum.photos/seed/vapor-sunset/800/600", hint: "vaporwave sunset" },
  { id: "g4", title: "Lofi Room", url: "https://picsum.photos/seed/lofi-room/800/600", hint: "lofi room" },
  { id: "g5", title: "Synthwave Car", url: "https://picsum.photos/seed/synth-car/800/600", hint: "synthwave car" },
  { id: "g6", title: "Retro Future", url: "https://picsum.photos/seed/retro-future/800/600", hint: "retro future" },
];
