interface EducationEntry {
  institution: string;
  degree: string;
  dates: string;
  gpa: string;
  highlights: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: number;
}

interface Publication {
  title: string;
  venue: string;
  year: number;
  status: "published" | "forthcoming";
  url: string;
}

const _EDUCATION: EducationEntry[] = [
  {
    institution: "University of Manchester",
    degree: "BSc (Hons) Computer Science",
    dates: "Sep 2024 – Jul 2027",
    gpa: "76% average to date; First Class marks in Years 1 and 2",
    highlights: [
      "Final-year project: spiking neural networks on FPGA for event-camera vision (Supervisor: Dr Davide Bertozzi)",
      "Computer Architecture, Computer Engineering, Implementing System-on-Chip",
      "Chip Multiprocessors, Natural Language Processing, Databases",
      "Elected Academic Representative for 400+ students",
    ],
  },
  {
    institution: "Army Public School, Dhaula Kuan",
    degree: "CBSE Senior Secondary (PCM + CS)",
    dates: "2016–2024",
    gpa: "94%",
    highlights: [
      "Genesis Tech Club President (50+ members)",
      "TAPSFest (3,000+ attendees, 50+ volunteers)",
    ],
  },
];

const _PUBLICATIONS: Publication[] = [
  {
    title:
      "AI-Assisted Software Development, or Vibe Coding: Benefits and Risks of AI-Driven Software Development",
    venue: "ACM TechBrief, Issue 17, ACM Technology Policy Council",
    year: 2026,
    status: "published",
    url: "https://doi.org/10.1145/3807518",
  },
  {
    title: "No Frames Attached: A Spiking Neural Network for Your Webcam",
    venue:
      'XRDS: Crossroads, The ACM Magazine for Students, "Hello World" column',
    year: 2026,
    status: "forthcoming",
    url: "https://github.com/Arpan-206/xrds-snn-hello-world",
  },
];

const _CERTIFICATIONS: Certification[] = [
  { name: "Technical AI Safety course", issuer: "BlueDot Impact", year: 2026 },
  { name: "CS50x + CS50 Python", issuer: "HarvardX", year: 2023 },
  {
    name: "CS50 Puzzle Day (Top score, 8 of 9 puzzles)",
    issuer: "HarvardX",
    year: 2023,
  },
  { name: "Three.js Journey", issuer: "Bruno Simon", year: 2023 },
];
