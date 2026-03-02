
export const bioData = {
  name: "Alex Synth",
  title: "Frontend Architect & Creative Developer",
  tagline: "Building high-performance digital experiences with a neon edge.",
  about: "I am a Full Stack Engineer specializing in modern frontend architectures and interactive user experiences. My work combines technical precision with creative flair, ensuring every pixel serves a purpose.",
  location: "Neo-Tokyo, Digital World",
  email: "hello@synthfolio.dev",
  github: "https://github.com/synthfolio",
  twitter: "https://twitter.com/synthfolio",
  linkedin: "https://linkedin.com/in/synthfolio"
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    name: "Core Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    name: "Backend & Cloud",
    skills: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "AWS", "Docker"]
  },
  {
    name: "Creative & Tools",
    skills: ["Three.js", "Figma", "Webflow", "Git", "VS Code", "GraphQL"]
  }
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  year: string;
};

export const projectsData: Project[] = [
  {
    id: "neo-vibe",
    title: "Neo-Vibe E-commerce",
    description: "A futuristic shopping experience with real-time stock and 3D product previews.",
    longDescription: "Neo-Vibe is a flagship e-commerce solution designed for the next generation of retail. It features a fully responsive 3D product viewer using Three.js, a robust cart system powered by Redux, and lightning-fast search capabilities with Algolia.",
    image: "project-ecommerce",
    tags: ["Next.js", "Three.js", "Stripe", "Supabase"],
    repoUrl: "https://github.com/synthfolio/neo-vibe",
    liveUrl: "https://neo-vibe.synthfolio.dev",
    year: "2024"
  },
  {
    id: "lumina-analytics",
    title: "Lumina Analytics",
    description: "High-performance data visualization dashboard for SaaS metrics.",
    longDescription: "Lumina provides real-time insights for SaaS companies. Built with speed in mind, it utilizes server-side rendering for data-heavy charts and integrates with multiple APIs to aggregate business intelligence in one sleek interface.",
    image: "project-analytics",
    tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/synthfolio/lumina",
    liveUrl: "https://lumina.synthfolio.dev",
    year: "2023"
  },
  {
    id: "quantum-tasks",
    title: "Quantum Task Manager",
    description: "Modular task management with AI-driven prioritization.",
    longDescription: "Quantum Tasks reimagines productivity by using machine learning to suggest task order based on deadlines and historical performance. It features a highly interactive drag-and-drop interface and offline support.",
    image: "project-task-manager",
    tags: ["TypeScript", "Tailwind", "Firebase", "Zustand"],
    repoUrl: "https://github.com/synthfolio/quantum",
    liveUrl: "https://quantum.synthfolio.dev",
    year: "2023"
  }
];
