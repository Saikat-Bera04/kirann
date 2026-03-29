export const bioData = {
  name: "Saikat Bera",
  handle: "work.saikatbera@gmail.com",
  title: "Full Stack Engineer & GenAI Enthusiast",
  tagline: "Building scalable backends and genAI products.",
  about: "Hi I am Saikat and I build scalable backends and genAI products.",
  location: "Kolkata",
  email: "work.saikatbera@gmail.com",
  github: "https://github.com/Saikat-Bera04",
  twitter: "https://x.com/SaikatBera9933",
  linkedin: "https://www.linkedin.com/in/saikat-bera-a62b68274/",
  instagram: "https://www.instagram.com/kiannn_art/",
  currentlyBuilding: "campuskart",
  currentlyBuildingUrl: "https://www.campuskart.space/",
  internship: "Girlscript foundation",
  internshipUrl: "https://www.girlscript.org/",
  internshipTitle: "Graphics Intern"
};

export const skillsCategories = [
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS"]
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI"]
  },
  {
    name: "Database Management",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Cloudflare", "Vercel", "Netlify", "Docker", "Git"]
  },
  {
    name: "Web3 Development",
    skills: ["Solidity", "Hardhat", "Web3.js", "Remix"]
  },
  {
    name: "AI & LLM Engineering",
    skills: ["LangChain", "LangGraph", "Hugging Face", "OpenCV", "Streamlit"]
  },
  {
    name: "Design & Creative Tools",
    skills: ["Figma", "Framer", "Adobe Illustrator", "Blender", "Canva"]
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
  { id: "g1", title: "Beyond Campus", url: "/graphics/Beyond Campus, Into the Future (1) (1).png" },
  { id: "g2", title: "Personal Branding", url: "/graphics/Saikat Logo.png" },
  { id: "g3", title: "Fashion Poster", url: "/graphics/Brown and White Modern New Fashion Poster (3).png" },
  { id: "g4", title: "Zync It", url: "/graphics/Zync It or Risk it. (4).png" },
  { id: "g5", title: "CampusKart", url: "/graphics/campuskart promotion.png" },
  { id: "g6", title: "Lucky Draw", url: "/graphics/To get a chance to win (1).jpg" },
  { id: "g7", title: "Visual Concept 1", url: "/graphics/1 (1).jpg" },
  { id: "g8", title: "Visual Concept 2", url: "/graphics/1.png" },
  { id: "g9", title: "Visual Concept 3", url: "/graphics/2.png" },
  { id: "g10", title: "Visual Concept 4", url: "/graphics/3.png" },
  { id: "g11", title: "Messi & Jesus", url: "/1440P Wallpaper Messi and Jesus.jpeg" },
  { id: "g12", title: "Creative Design", url: "/Untitled design (2).png" },
  { id: "g13", title: "Atmospheric", url: "/sp.jpeg" },
  { id: "g14", title: "Profile Graphic", url: "/B (1).png" },
  { id: "g15", title: "Abstract 37", url: "/_ (37).jpeg" },
  { id: "g16", title: "Abstract 38", url: "/_ (38).jpeg" },
  { id: "g17", title: "Abstract 40", url: "/_ (40).jpeg" },
];


export const certificationsData = [
  {
    id: "cert-1",
    title: "Meta Backend Professional",
    issuer: "Coursera",
    date: "2024",
    link: "https://coursera.org",
    imageHint: "meta developer"
  },
  {
    id: "cert-2",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com",
    imageHint: "cloud computing"
  },
  {
    id: "cert-3",
    title: "Google Data Analytics",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org",
    imageHint: "data analysis"
  }
];

export const PROJECT_IMAGES_MAP: Record<string, string> = {
  "claimr": "/projects/claimr/cover.png",
  "aegis": "/projects/aegis/cover.png",
  "goodmint": "/projects/goodmint/cover.png",
  "kamadojo": "/projects/kamadojo/cover.png",
  "kirann": "/projects/kirann/cover.png",
  "love-calculator": "/projects/love-calculator/cover.png",
  "mediops": "/projects/mediops/cover.png",
  "mimic": "/projects/mimic/cover.png",
  "my-portfolio": "/projects/my-portfolio/cover.png",
  "oryn-finance": "/projects/oryn-finance/cover.png",
  "project-pulse": "/projects/project-pulse/cover.png",
  "qr": "/projects/qr/cover.png",
  "qr-generator": "/projects/qr-generator/cover.png",
  "sui-lm": "/projects/sui-lm/cover.png",
  "tailwind-portfolio": "/projects/tailwind-portfolio/cover.png",
  "zynvo": "/projects/zynvo/cover.png",
  "zynvo-landing": "/projects/zynvo-landing/cover.png",
  "saikat-bera04": "/projects/saikat-bera04/cover.png",
  "portfolio-v2": "/projects/portfolio-v2/cover.png",
};