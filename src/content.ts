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
    summary: "Building full-stack products across trust accounting, family law, document processing, conveyancing, and external integrations.",
    highlights: [
      "Built full-stack features for TrustShield, a multi-tenant trust-accounting SaaS, using React, TypeScript, Node.js/Express, Sequelize, and PostgreSQL/SQL Server; rebuilt receipt, cheque, and transfer workflows and added balance validation to prevent trust-account overdrafts.",
      "Developed core modules for a greenfield Family Law platform, including financial workflows, automated calculations, reusable auto-saving forms, matter notes, and legal-document generation with Redux, MUI, and OIDC/JWT.",
      "Contributed to RenAI, using Azure AI Document Intelligence and vision LLMs to extract structured data and populate case files, reducing manual entry by an estimated 75% across 5,000+ monthly requests.",
      "Shipped full-stack enhancements for RealiWeb across property, document, client, and external-registry workflows.",
      "Took ownership as sole maintainer of BrowserApi, restoring a production lookup flow and using Browserless.io/BrowserQL to handle evolving Cloudflare anti-bot challenges.",
      "Delivered ClientConnect features across the client portal, backend API, firm-side interface, and legacy data layer, including secure access, consent tracking, document workflows, and transactional email notifications.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Redux", "MUI", "PostgreSQL", "SQL Server", "Azure AI"],
  },
  {
    company: "Volante Systems",
    role: "Software Developer Co-op",
    location: "Toronto, Ontario",
    period: "Sep 2024 — Dec 2024",
    summary: "Developed production Point of Sale experiences used in fast-moving retail environments.",
    highlights: [
      "Delivered 10+ point-of-sale features from 25+ Figma screens using React, TypeScript, and MobX across eight biweekly sprints, maintaining 85% Jest test coverage.",
      "Resolved 50+ frontend defects and replaced 200+ hard-coded strings with a reusable localization framework, improving workflow reliability and enabling multilingual releases.",
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
      "Built Java and Spring Boot services integrating third-party advertising APIs with Redis caching, reducing external API calls by 80% and improving response time fivefold.",
      "Designed MySQL schemas and REST APIs for an HR system serving 8,000+ employees, with JUnit and integration testing that identified 30+ critical defects before production.",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Redis", "JUnit"],
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Java", "Python", "C/C++"] },
  { title: "Frontend & Backend", skills: ["React", "Redux Toolkit", "MUI", "MobX", "Node.js", "Express", "Spring Boot", "REST APIs", "OIDC/JWT"] },
  { title: "Data & Cloud", skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Microsoft Azure", "AWS", "Docker", "CI/CD"] },
  { title: "AI & Automation", skills: ["Azure AI Document Intelligence", "OpenAI API", "Browserless.io/BrowserQL", "Puppeteer"] },
];

export const projects = [
  {
    eyebrow: "Legal accounting SaaS",
    title: "TrustShield",
    description: "Full-stack receipt, cheque, and transfer workflows for a multi-tenant trust-accounting platform, with client/server balance validation to prevent overdrafts.",
    metrics: "Production financial workflows",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "SQL Server"],
  },
  {
    eyebrow: "Greenfield platform",
    title: "Family Law",
    description: "Core financial workflows, automated calculations, reusable auto-saving forms, matter notes, and legal-document generation for hundreds of submissions each month.",
    metrics: "Hundreds of monthly submissions",
    technologies: ["React", "Redux", "MUI", "Node.js", "OIDC/JWT"],
  },
  {
    eyebrow: "AI document processing",
    title: "RenAI",
    description: "A production system that uses Azure AI Document Intelligence and vision LLMs to extract structured data from legal documents and populate case files.",
    metrics: "75% less manual entry across 5,000+ monthly requests",
    technologies: ["Azure AI Document Intelligence", "Vision LLMs", "TypeScript", "SQL Server"],
  },
];
