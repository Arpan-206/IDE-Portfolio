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

const EDUCATION: EducationEntry[] = [
  {
    institution: "University of Manchester",
    degree: "BSc Computer Science (Hons)",
    dates: "2024–2027",
    gpa: "First Class (Year 1)",
    highlights: [
      "Academic Rep (400 students)",
      "Architecture, Systems, Robotics",
      "Micro-architecture, Algorithms",
    ],
  },
  {
    institution: "Army Public School",
    degree: "CBSE Grade 12 (PCM + CS)",
    dates: "2022–2024",
    gpa: "94%",
    highlights: ["Genesis Tech Club President", "TAPSFest (1,000 attendees)"],
  },
];

const CERTIFICATIONS: Certification[] = [
  { name: "CS50x + Python", issuer: "Harvard", year: 2023 },
  { name: "CS50 Puzzle Day (Top 89)", issuer: "Harvard", year: 2022 },
  { name: "Three.js Journey", issuer: "Bruno Simon", year: 2023 },
  { name: "J.P. Morgan SWE Sim", issuer: "Forage", year: 2023 },
  { name: "PowerPitch Winner", issuer: "NASA Houston", year: 2024 },
];
