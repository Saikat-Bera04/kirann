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
  instagram: "https://www.instagram.com/kirannn_art/",
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