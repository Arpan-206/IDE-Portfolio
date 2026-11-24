from dataclasses import dataclass
from typing import List


@dataclass
class Experience:
    company: str
    role: str
    period: str
    achievements: List[str]


RESEARCH = [
    Experience(
        company="University of Manchester",
        role="Final-Year Project — Spiking Neural Networks on FPGA for Event-Camera Vision",
        period="2026 – Present",
        achievements=[
            "Building an optimised FPGA implementation (AMD Zynq UltraScale+ ZCU102) of a spiking neural network that selects regions of interest from event-camera output",
            "A smaller downstream ANN then classifies only the crop",
            "Evaluating power, latency and LUT, FF, BRAM and DSP utilisation against an ARM software baseline and SpiNNaker measurements",
            "Supervisor: Dr Davide Bertozzi",
        ],
    ),
    Experience(
        company="Manchester Institute of Innovation Research",
        role="Research Intern",
        period="Jun 2026 – Jul 2026",
        achievements=[
            "Resolved 5.78M Scopus affiliation IDs to 9,603 universities with a five-tier Polars and RapidFuzz pipeline over 141M records",
            "Modelled a 10.19M-edge co-publication network across 170 countries",
            "Classified 1.18M AI papers into four collaboration modes with a BERT classifier",
            "Shipped the results as an interactive Streamlit and Pydeck atlas, containerised and auto-published to GHCR",
        ],
    ),
]

EXPERIENCE = [
    Experience(
        company="CodeCrafters.io (YC S22)",
        role="Software Engineer",
        period="Jun 2025 – Sep 2025",
        achievements=[
            "Wrote Go test harnesses that deterministically verify systems-programming challenges",
            "Built two official extensions for the Build Your Own Shell challenge",
            "Maintained the production Rails and Ember platform behind challenges used by 100,000+ developers: monitoring, dependencies, builds and deployments",
            "Designed and built CCBench, an evaluation of LLM coding agents on real systems challenges, published at ccbench.org",
        ],
    ),
    Experience(
        company="Imago Software",
        role="Software Developer",
        period="Jan 2025 – May 2025",
        achievements=[
            "Built Python and SQL pipelines and dashboards for research teams, cutting manual research workload by 60%",
            "Gathered requirements from a research team and delivered Streamlit dashboards for non-technical users",
            "Tech: Python, SQL, Docker, GitHub Actions",
        ],
    ),
    Experience(
        company="IHFC (Technology Innovation Hub, IIT Delhi)",
        role="Robotics Intern",
        period="Jun 2024 – Aug 2024",
        achievements=[
            "Prototyped and field-tested UAV and glider airframes with IIT Delhi researchers",
            "Assisted with construction, material testing, and iterative field tests",
            "Documented aerodynamic observations for design feedback",
        ],
    ),
]

TEACHING = [
    Experience(
        company="University of Manchester — Digital Design Laboratory (Verilog)",
        role="Volunteer Teaching Assistant",
        period="2026 – Present",
        achievements=[
            "Two hours weekly supporting first-year students through the Verilog laboratories",
            "Explaining concepts left unclear by lectures; triaging and fixing errors in their designs",
        ],
    ),
    Experience(
        company="UniCS, University of Manchester",
        role="Workshop Instructor",
        period="2024 – 2026",
        achievements=[
            "Designed and led an introduction to electronics and PCB design with EasyEDA for about 60 attendees",
            "Panellist, first-year COMP16321 panel: Surviving and Thriving in Computer Science (2026)",
        ],
    ),
    Experience(
        company="Schoolhouse.world",
        role="Volunteer Peer Tutor",
        period="2022 – 2024",
        achievements=[
            "Hosted 15 introductory programming sessions for 23 learners in 12 countries",
        ],
    ),
]

SERVICE = [
    Experience(
        company="XRDS: Crossroads, The ACM Magazine for Students",
        role="Section Editor — Hello World column",
        period="2026 – Present",
        achievements=[
            "Edit the hands-on Hello World column",
            "Wrote the column 'No Frames Attached: A Spiking Neural Network for Your Webcam' (forthcoming)",
        ],
    ),
    Experience(
        company="Association for Computing Machinery",
        role="Member — Europe Technology Policy Committee",
        period="May 2026 – Present",
        achievements=[
            "Member of the ACM US Technology Policy Committee from 2023 to 2026",
            "Served on the subcommittee on federal digital identity legislation (2024)",
            "Co-authored ACM TechBrief on Vibe Coding (Issue 17, 2026) — DOI: 10.1145/3807518",
        ],
    ),
    Experience(
        company="UniCS Manchester",
        role="Chair",
        period="Nov 2024 – Jun 2026",
        achievements=[
            "Youngest elected Chair, representing 1,500+ Computer Science students",
            "Secured £55k+ annual budget and negotiated sponsor contracts",
            "Directed three hackathons (GreatUniHack ×2, StudentHack) with 150+ participants each",
            "Rewrote the society's constitution; operational reforms increased event participation by 40%",
            "Coordinated May Ball with £23k+ budget, attendance exceeding 180 participants",
        ],
    ),
    Experience(
        company="Hack Club",
        role="Director — Special Activities Division & Club Operations",
        period="May 2023 – Jan 2025",
        achievements=[
            "Helped run Hack Club Arcade: 2,000+ global participants and 20+ large-scale online events",
            "Distributed over $100,000 in prizes (MacBooks, Framework laptops, iPads)",
            "Recruited and led a global 15-member remote team, increasing participation by 150%",
            "Co-built a ten-person fraud prevention team: standards of evidence, investigation process and appeals",
            "Built a portal to verify Government of India digitally signed ID documents",
            "Supported onboarding for 200+ APAC/EU club leaders; built 10+ automation tools reducing onboarding time by 30%",
            "Coordinated end-to-end supply chain, shipping 5,000+ items globally",
        ],
    ),
]
