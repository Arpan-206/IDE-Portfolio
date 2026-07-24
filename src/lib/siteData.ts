export type Stat = {
  label: string;
  value: string;
  description: string;
};

export type FeaturedProject = {
  name: string;
  description: string;
  tech: string[];
  href: string;
  note?: string;
};

export type Project = FeaturedProject & {
  stars?: number;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Publication = {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  note: string;
  href: string;
};

export type ContactLink = {
  label: string;
  href: string;
  note: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const hero = {
  eyebrow: "Astro-native portfolio",
  title: "Arpan Pandey",
  subtitle:
    "Computer Science student building interactive systems, Rust/WASM tooling, and production software.",
  description:
    "This site pairs a static Astro shell with a React-powered IDE workspace, so the content stays fast, SEO-friendly, and easy to browse.",
};

export const stats: Stat[] = [
  {
    label: "Current focus",
    value: "Rust + WASM",
    description: "Interactive systems, developer tools, and browser-native experiences.",
  },
  {
    label: "Location",
    value: "Manchester ↔ Delhi",
    description: "Based in the UK, with roots and collaborators in India.",
  },
  {
    label: "Portfolio mode",
    value: "Astro + React",
    description: "Static pages for browsing, islands for the real-time workspace.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "IDE-Portfolio",
    description:
      "A Zed-inspired portfolio with Monaco, a Rust WASM terminal, file tree navigation, and live Markdown rendering.",
    tech: ["Astro", "React", "Rust", "WASM", "Monaco"],
    href: "https://github.com/Arpan-206/IDE-Portfolio",
    note: "This site",
  },
  {
    name: "Rust Microcontroller OS",
    description:
      "A small operating system with a custom drawing engine for a RISC-V processor.",
    tech: ["Rust", "Verilog", "RISC-V", "Python"],
    href: "https://github.com/Arpan-206/RustMicroController",
  },
  {
    name: "Terminal Portfolio",
    description:
      "An SSH-based portfolio that runs as a remote terminal experience.",
    tech: ["Go", "Charm.sh", "Docker"],
    href: "https://github.com/Arpan-206/terminal-portfolio",
  },
  {
    name: "BIOMET",
    description:
      "A periocular biometric system that won NASA PowerPitch at the Conrad Challenge.",
    tech: ["Raspberry Pi", "GPIO", "ML", "CAD"],
    href: "https://biomet.vercel.app/",
  },
];

export const projects: Project[] = [
  ...featuredProjects,
  {
    name: "CCBench",
    description: "End-to-end evaluation harness that runs coding agents on small, private codebases to measure genuine reasoning vs. memorisation. Built v0 at CodeCrafters.",
    tech: ["Rust"],
    href: "https://ccbench.org",
    stars: 25,
  },
  {
    name: "Hack Club Clubs Directory & Jams",
    description: "Open-source searchable directory connecting Hack Clubs worldwide, plus Hack Club Jams — collaborative coding workshops across the community.",
    tech: ["FastAPI", "Python", "Web"],
    href: "https://github.com/hackclub/clubsdirectory",
  },
  {
    name: "Mr. Spiky",
    description: "AI code-review tool that encodes senior developer intuition using spiking neural networks — detects structural red flags across 6 interpretable axes, trained on 2,680+ real-world Python functions.",
    tech: ["Python", "snnTorch", "FastAPI", "Docker"],
    href: "https://github.com/Arpan-206/mr-spiky",
  },
  {
    name: "Lox Interpreter (OCaml)",
    description: "Tree-walk interpreter for the Lox scripting language — tokenizer, parser, and AST evaluator built in OCaml following Crafting Interpreters.",
    tech: ["OCaml", "Dune"],
    href: "https://github.com/Arpan-206/interpreter-ocaml",
  },
  {
    name: "Wack OS",
    description: "A bare-metal OS kernel targeting x86-64, written in Rust with a custom target specification.",
    tech: ["Rust", "x86-64"],
    href: "https://github.com/Arpan-206/wack_os",
  },
  {
    name: "CodeCrafters Frontend",
    description:
      "Frontend powering app.codecrafters.io and the challenge experience.",
    tech: ["TypeScript", "Ember", "Handlebars", "TailwindCSS"],
    href: "https://github.com/codecrafters-io/frontend",
    stars: 114,
  },
  {
    name: "CodeCrafters CLI",
    description: "CLI used to run systems-programming challenge tests.",
    tech: ["Go"],
    href: "https://github.com/codecrafters-io/cli",
    stars: 21,
  },
  {
    name: "EncryptoCLI",
    description:
      "Cross-platform CLI for hashing and encryption workflows.",
    tech: ["Python", "CLI", "GitHub Actions"],
    href: "https://github.com/Arpan-206/EncryptoCLI",
    stars: 7,
  },
  {
    name: "Formee",
    description:
      "Form management with CLI/GraphQL validation and CI/CD integration.",
    tech: ["Python", "GraphQL", "CLI", "Docker"],
    href: "https://github.com/Arpan-206/Formee",
    stars: 7,
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "CodeCrafters.io (YC S22)",
    role: "Software Engineer",
    period: "Apr 2025 – Oct 2025",
    highlights: [
      "Created systems programming challenges used by 100,000+ developers worldwide.",
      "Engineered Go-based harnesses for processes, signals, shell execution, and file system behaviour.",
      "Operated and enhanced a Rails/Ember production platform serving 30k+ monthly active users.",
      "Improved CI/CD pipelines (Docker, GitHub Actions), increasing reliability and author tooling velocity.",
    ],
  },
  {
    company: "UniCS Manchester",
    role: "Chair",
    period: "Nov 2024 – Present",
    highlights: [
      "Representing 1,500+ Computer Science students as the youngest elected Chair.",
      "Secured £55k+ annual budget and expanded industry partnerships across major tech organisations.",
      "Directed two flagship Manchester hackathons with 150+ participants each.",
    ],
  },
  {
    company: "Imago Software",
    role: "Software Developer",
    period: "Jan 2025 – May 2025",
    highlights: [
      "Designed Python/SQL data pipelines that reduced research workload by 60%.",
      "Delivered reproducible dashboards used in commercialisation of a research project.",
    ],
  },
  {
    company: "Hack Club",
    role: "Director — Special Activities Division & Club Operations",
    period: "May 2023 – Jan 2025",
    highlights: [
      "During Hack Club Arcade, engaging 2,000+ global participants and executing 20+ large-scale online events.",
      "Distributed over $100,000 in prizes (MacBooks, Framework laptops, iPads).",
      "Recruited and led a global 15-member remote team, increasing participation by 150%.",
      "Supported onboarding for 200+ APAC/EU club leaders and built 10+ automation tools.",
    ],
  },
  {
    company: "IHFC (I-Hub Foundation for Cobotics) IIT Delhi",
    role: "Robotics Intern",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Participated in UAV and glider prototyping focusing on airframe structure and electronics layout.",
      "Assisted with construction, material testing, and iterative field tests.",
      "Documented aerodynamic observations for design feedback with IIT Delhi researchers.",
    ],
  },
  {
    company: "Association for Computing Machinery",
    role: "Student Contributor — US Technical Policy Council",
    period: "Mar 2024 – Present",
    highlights: [
      "Contributed research to identity authentication policy proposals and public education efforts.",
      "Co-authored a TechBrief on VibeCoding published by ACM (Spring 2026, Issue 17).",
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "ACM TechBrief: AI-Assisted Software Development, or Vibe Coding: Benefits and Risks of AI-Driven Software Development",
    authors: "Simson Garfinkel; Arpan Pandey; Mohan Sankaran; Rohan Sharma; Arunachalam Balasubramanian Shrinivass; Aruun Kumar",
    publisher: "Association for Computing Machinery",
    year: 2026,
    note: "TechBrief — Spring 2026, Issue 17. ISBN: 979-8-4007-3219-5. Published 28 April 2026.",
    href: "https://dl.acm.org/doi/book/10.1145/3807518",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Arpan-206",
    note: "Code, experiments, and open-source work.",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arpan-pandey",
    note: "Professional updates and contact.",
  },
  {
    label: "Portfolio",
    href: "https://arpanpandey.dev",
    note: "This site, rebuilt with Astro.",
  },
  {
    label: "Email",
    href: "mailto:hello@arpanpandey.dev",
    note: "Best for roles, collaborations, and project ideas.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Rust", "Go", "TypeScript", "C/C++", "Java", "Ruby", "SQL", "Verilog"],
  },
  {
    title: "Web",
    items: ["Astro", "React", "Rails", "Ember", "FastAPI", "Django", "Flask"],
  },
  {
    title: "Systems",
    items: ["Docker", "GitHub Actions", "Linux", "PostgreSQL", "WASM", "Temporal", "Sentry", "Caddy"],
  },
  {
    title: "Embedded",
    items: ["Raspberry Pi", "Arduino", "ESP32", "OpenCV", "RISC-V"],
  },
];
