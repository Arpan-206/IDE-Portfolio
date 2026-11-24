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
    "Final-year Computer Science student working on neuromorphic hardware, systems software, and production engineering.",
  description:
    "Portfolio of Arpan Pandey, a final-year Computer Science student at the University of Manchester. Spiking neural networks on FPGA, systems software, and published ACM work, inside a browser IDE.",
};

export const stats: Stat[] = [
  {
    label: "Current focus",
    value: "SNNs on FPGA",
    description:
      "Hardware-software co-design for event-driven computation, neuromorphic systems, and compilers for novel hardware.",
  },
  {
    label: "Location",
    value: "Manchester ↔ Delhi",
    description: "Based in the UK, with roots and collaborators in India.",
  },
  {
    label: "Portfolio mode",
    value: "Astro + React",
    description:
      "Static pages for browsing, islands for the real-time workspace.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Geppetto",
    description:
      "Teaches hand skills from an expert's hands. An expert records a skill with Rokoko Smartgloves II. A learner trains against a 3D ghost hand with a score for each finger, and a robot hand twin performs the same recording. Includes a self-hosted Gemma coach tuned on our own glove data. Built by two people in one weekend at Junction 2026.",
    tech: ["Python", "FastAPI", "React", "three.js", "Swift", "Gemma", "LoRA"],
    href: "https://the-geppetto-bodega.netlify.app",
    note: "Junction 2026: 3rd place Rokoko Robot Teleoperation, 3rd place Verda Compute Track, winner of Best Use of Gemma (Google DeepMind)",
  },
  {
    name: "IDE-Portfolio",
    description:
      "A Zed-inspired portfolio with Monaco, a Rust WASM terminal, file tree navigation, and live Markdown rendering.",
    tech: ["Astro", "React", "Rust", "WASM", "Monaco"],
    href: "https://github.com/Arpan-206/IDE-Portfolio",
    note: "This site",
  },
  {
    name: "Bare-metal RISC-V SoC",
    description:
      "An RV32IM system on FPGA with a machine-mode OS layer in RISC-V assembly, a user-mode Rust application, a custom Rust toolchain, and a memory-mapped hardware drawing engine. A two-player Pong game runs on top.",
    tech: ["Rust", "RISC-V Assembly", "SystemVerilog"],
    href: "https://github.com/Arpan-206/RustMicroController",
  },
  {
    name: "Terminal Portfolio",
    description:
      "An SSH-based TUI portfolio with keyboard navigation and Glamour-rendered markdown. Run: ssh ssh.arpanpandey.dev",
    tech: ["Go", "Bubble Tea", "Lipgloss", "Glamour", "Wish"],
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
    description:
      "End-to-end evaluation harness that runs coding agents on small, private codebases to measure genuine reasoning vs. memorisation. Built v0 at CodeCrafters.",
    tech: ["Rust"],
    href: "https://ccbench.org",
    stars: 25,
  },
  {
    name: "Hack Club Clubs Directory & Jams",
    description:
      "Open-source searchable directory connecting Hack Clubs worldwide, plus Hack Club Jams — collaborative coding workshops across the community.",
    tech: ["FastAPI", "Python", "Web"],
    href: "https://github.com/hackclub/clubsdirectory",
  },
  {
    name: "Mr. Spiky",
    description:
      "AI code-review tool that encodes senior developer intuition using spiking neural networks. It detects structural red flags across 6 interpretable axes, trained on 2,680+ real-world Python functions. Served as a REST API and a GitHub Actions pull-request bot. Winner, Null Hack 3.0.",
    tech: ["Python", "PyTorch", "snnTorch", "FastAPI", "Docker"],
    href: "https://github.com/Arpan-206/mr-spiky",
  },
  {
    name: "No Frames Attached",
    description:
      "A spiking neural network for your webcam. It turns a five-second webcam capture into an event stream and feeds it to an 8-neuron Brian2 integrator. Companion code for my XRDS Hello World column.",
    tech: ["Python", "Brian2", "eventify-dvs", "OpenCV"],
    href: "https://github.com/Arpan-206/xrds-snn-hello-world",
  },
  {
    name: "Lox Interpreter (OCaml)",
    description:
      "Tree-walk interpreter for the Lox scripting language — tokenizer, parser, and AST evaluator built in OCaml following Crafting Interpreters.",
    tech: ["OCaml", "Dune"],
    href: "https://github.com/Arpan-206/interpreter-ocaml",
  },
  {
    name: "Wack OS",
    description:
      "A bare-metal OS kernel targeting x86-64, written in Rust with a custom target specification.",
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
    description: "Cross-platform CLI for hashing and encryption workflows.",
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
    company: "University of Manchester",
    role: "Final-Year Project — Spiking Neural Networks on FPGA for Event-Camera Vision",
    period: "2026 – Present",
    highlights: [
      "Building an optimised FPGA implementation (AMD Zynq UltraScale+ ZCU102) of a spiking neural network that selects regions of interest from event-camera output.",
      "A smaller downstream ANN then classifies only the crop.",
      "Evaluating power, latency and LUT, FF, BRAM and DSP utilisation against an ARM software baseline and SpiNNaker measurements.",
      "Supervisor: Dr Davide Bertozzi.",
    ],
  },
  {
    company: "University of Manchester — Digital Design Laboratory (Verilog)",
    role: "Volunteer Teaching Assistant",
    period: "2026 – Present",
    highlights: [
      "Two hours weekly supporting first-year students through the Verilog laboratories.",
      "Explaining concepts left unclear by lectures; triaging and fixing errors in their designs.",
    ],
  },
  {
    company: "Association for Computing Machinery",
    role: "Member — Europe Technology Policy Committee",
    period: "May 2026 – Present",
    highlights: [
      "Member of the ACM US Technology Policy Committee from 2023 to 2026.",
      "Served on the subcommittee on federal digital identity legislation (2024).",
      "Co-authored ACM TechBrief on Vibe Coding (Issue 17, 2026).",
    ],
  },
  {
    company: "XRDS: Crossroads, The ACM Magazine for Students",
    role: "Section Editor — Hello World column",
    period: "2026 – Present",
    highlights: [
      "Edit the hands-on Hello World column.",
      "Wrote the column 'No Frames Attached: A Spiking Neural Network for Your Webcam' (forthcoming).",
    ],
  },
  {
    company: "Manchester Institute of Innovation Research",
    role: "Research Intern",
    period: "Jun 2026 – Jul 2026",
    highlights: [
      "Resolved 5.78M Scopus affiliation IDs to 9,603 universities with a five-tier Polars and RapidFuzz pipeline over 141M records.",
      "Modelled a 10.19M-edge co-publication network across 170 countries.",
      "Classified 1.18M AI papers into four collaboration modes with a BERT classifier.",
      "Shipped the results as an interactive Streamlit and Pydeck atlas, containerised and auto-published to GHCR.",
    ],
  },
  {
    company: "UniCS Manchester",
    role: "Chair",
    period: "Nov 2024 – Jun 2026",
    highlights: [
      "Youngest elected Chair, representing 1,500+ Computer Science students.",
      "Secured £55k+ annual budget and negotiated sponsor contracts.",
      "Directed three hackathons (GreatUniHack ×2, StudentHack) with 150+ participants each.",
      "Rewrote the society's constitution; operational reforms increased event participation by 40%.",
      "Coordinated May Ball with £23k+ budget, attendance exceeding 180 participants.",
    ],
  },
  {
    company: "CodeCrafters.io (YC S22)",
    role: "Software Engineer",
    period: "Jun 2025 – Sep 2025",
    highlights: [
      "Wrote Go test harnesses that deterministically verify systems-programming challenges.",
      "Built two official extensions for the Build Your Own Shell challenge.",
      "Maintained the production Rails and Ember platform behind challenges used by 100,000+ developers: monitoring, dependencies, builds and deployments.",
      "Designed and built CCBench, an evaluation of LLM coding agents on real systems challenges, published at ccbench.org.",
    ],
  },
  {
    company: "Imago Software",
    role: "Software Developer",
    period: "Jan 2025 – May 2025",
    highlights: [
      "Built Python and SQL pipelines and dashboards for research teams, cutting manual research workload by 60%.",
      "Gathered requirements from a research team and delivered Streamlit dashboards for non-technical users.",
    ],
  },
  {
    company: "Hack Club",
    role: "Director — Special Activities Division & Club Operations",
    period: "May 2023 – Jan 2025",
    highlights: [
      "Helped run Hack Club Arcade: 2,000+ global participants and 20+ large-scale online events.",
      "Distributed over $100,000 in prizes (MacBooks, Framework laptops, iPads).",
      "Recruited and led a global 15-member remote team, increasing participation by 150%.",
      "Co-built a ten-person fraud prevention team: standards of evidence, investigation process and appeals.",
      "Built a portal to verify Government of India digitally signed ID documents.",
      "Supported onboarding for 200+ APAC/EU club leaders; built 10+ automation tools reducing onboarding time by 30%.",
      "Coordinated end-to-end supply chain, shipping 5,000+ items globally.",
    ],
  },
  {
    company: "IHFC (Technology Innovation Hub, IIT Delhi)",
    role: "Robotics Intern",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Prototyped and field-tested UAV and glider airframes with IIT Delhi researchers.",
      "Assisted with construction, material testing, and iterative field tests.",
      "Documented aerodynamic observations for design feedback.",
    ],
  },
  {
    company: "UniCS, University of Manchester",
    role: "Workshop Instructor",
    period: "2024 – 2026",
    highlights: [
      "Designed and led an introduction to electronics and PCB design with EasyEDA for about 60 attendees.",
      "Panellist, first-year COMP16321 panel: Surviving and Thriving in Computer Science (2026).",
    ],
  },
  {
    company: "Schoolhouse.world",
    role: "Volunteer Peer Tutor",
    period: "2022 – 2024",
    highlights: [
      "Hosted 15 introductory programming sessions for 23 learners in 12 countries.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "ACM TechBrief: AI-Assisted Software Development, or Vibe Coding: Benefits and Risks of AI-Driven Software Development",
    authors:
      "Simson Garfinkel; Mohan Sankaran; Rohan Sharma; Arunachalam Balasubramanian Shrinivass; Arpan Pandey; Aruun Kumar",
    publisher: "Association for Computing Machinery",
    year: 2026,
    note: "TechBrief — Issue 17, ACM Technology Policy Council. ISBN: 979-8-4007-3219-5. Published 28 April 2026.",
    href: "https://doi.org/10.1145/3807518",
  },
  {
    title: "No Frames Attached: A Spiking Neural Network for Your Webcam",
    authors: "Arpan Pandey",
    publisher: "XRDS: Crossroads, The ACM Magazine for Students",
    year: 2026,
    note: "Hello World column. Accepted September 2026, forthcoming.",
    href: "https://github.com/Arpan-206/xrds-snn-hello-world",
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
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=V9eAdjIAAAAJ",
    note: "Publications and citations.",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-1065-2016",
    note: "Researcher identifier.",
  },
  {
    label: "Portfolio",
    href: "https://arpanpandey.dev",
    note: "This site, rebuilt with Astro.",
  },
  {
    label: "Email",
    href: "mailto:hello@arpanpandey.dev",
    note: "Best for graduate roles, research collaborations, and project ideas.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Hardware",
    items: [
      "SystemVerilog",
      "Verilog",
      "Vivado",
      "Vitis HLS",
      "FPGA (ZCU102)",
      "RISC-V",
    ],
  },
  {
    title: "Languages",
    items: [
      "Python",
      "Rust",
      "Go",
      "TypeScript",
      "C/C++",
      "OCaml",
      "Java",
      "Ruby",
      "SQL",
    ],
  },
  {
    title: "ML and data",
    items: ["PyTorch", "snnTorch", "Brian2", "BERT", "Polars", "NetworkX"],
  },
  {
    title: "Web",
    items: ["Astro", "React", "Rails", "Ember", "FastAPI", "Django", "Flask"],
  },
  {
    title: "Systems",
    items: [
      "Docker",
      "GitHub Actions",
      "Linux",
      "PostgreSQL",
      "WASM",
      "Temporal",
      "Sentry",
      "Caddy",
    ],
  },
  {
    title: "Embedded",
    items: ["Raspberry Pi", "Arduino", "ESP32", "OpenCV"],
  },
];
