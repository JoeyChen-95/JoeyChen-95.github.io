export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "LawyerDoneDeal Corp.",
    role: "Full-Stack Software Developer",
    location: "Toronto, Ontario",
    period: "Nov 2025 — Present",
    summary: "Building full-stack and AI-powered products for high-volume legal workflows.",
    highlights: [
      "Engineered RenAI, combining Azure OCR, rule-based extraction, and vision LLMs to reduce manual entry by an estimated 75% across 5,000+ monthly requests.",
      "Built a greenfield Family Law application end-to-end with secure authentication, auto-saving forms, matter notes, and JSON-driven legal document generation.",
      "Extended RealiWeb, BrowserApi, and ClientConnect with land-registry imports, browser automation, and secure document workflows.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "SQL Server", "Azure AI"],
  },
  {
    company: "Volante Systems",
    role: "Software Developer Co-op",
    location: "Toronto, Ontario",
    period: "Sep 2024 — Dec 2024",
    summary: "Developed production Point of Sale experiences used in fast-moving retail environments.",
    highlights: [
      "Delivered 10+ React and TypeScript features from 25+ Figma screens with 85% Jest test coverage.",
      "Resolved 50+ frontend issues and improved 20+ workflows, reducing bug rates by 25% and checkout completion time by 15%.",
      "Replaced 200+ hard-coded strings with a maintainable localization system.",
    ],
    technologies: ["React", "TypeScript", "MobX", "Jest", "Figma"],
  },
  {
    company: "YITU Technology",
    role: "Software Developer Intern",
    location: "Fuzhou, Fujian",
    period: "May 2022 — Aug 2022",
    summary: "Designed backend services and data systems for enterprise applications.",
    highlights: [
      "Reduced external advertising API calls by 80% and improved response time fivefold with Redis caching.",
      "Designed MySQL schemas and REST APIs for an HR platform serving 8,000+ employees.",
      "Identified 30+ critical issues before production through unit and integration testing.",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Redis", "JUnit"],
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React", "TypeScript", "Redux Toolkit", "MUI", "MobX", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "Spring Boot", "REST APIs", "OIDC / JWT", "OAuth 2.0"] },
  { title: "Data", skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { title: "Cloud & AI", skills: ["Microsoft Azure", "Azure AI Foundry", "Azure OCR", "AWS ECS / EC2", "Docker", "CI/CD"] },
];

export const projects = [
  {
    eyebrow: "AI workflow",
    title: "RenAI document ingestion",
    description: "A production pipeline that turns unstructured legal documents into validated matter data using OCR, deterministic rules, and vision models.",
    metrics: "5,000+ monthly requests",
    technologies: ["Azure OCR", "Vision LLMs", "TypeScript", "SQL Server"],
  },
  {
    eyebrow: "Full-stack platform",
    title: "University Attendance Tracker",
    description: "A cloud-based MERN application for professors to manage courses and for students to record attendance through secure class codes.",
    metrics: "End-to-end cloud deployment",
    technologies: ["React", "Express", "MongoDB", "AWS", "Docker"],
    href: "https://github.com/JoeyChen-95/Attendance-Tracker",
    image: "/attendance-tracker.png",
  },
  {
    eyebrow: "Distributed systems",
    title: "Minimalist Blockchain",
    description: "A Bitcoin-inspired blockchain implementation built to study consensus, networking, and scalability trade-offs.",
    metrics: "Systems research project",
    technologies: ["C", "CMake", "MySQL", "Socket Programming"],
    href: "https://github.com/IngTian/ECSE458_Minimalist_Blockchain",
  },
];
