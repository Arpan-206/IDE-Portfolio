from dataclasses import dataclass
from typing import List


@dataclass
class Experience:
    company: str
    role: str
    period: str
    achievements: List[str]


EXPERIENCE = [
    Experience(
        company="CodeCrafters.io (YC S22)",
        role="Software Engineer",
        period="Jun 2025 – Present",
        achievements=[
            "Designed challenges completed by 10,000+ developers worldwide in 2 months",
            "Built 2 official extensions for Build Your Own Shell, writing Go test harnesses and mastering Bash/Zsh/Ash internals",
            "Negotiated £20k+ in free memberships for hundreds of UoM students",
            "Maintained Rails and Ember platform with 50k+ monthly active users",
            "Implemented CI/CD pipelines with GitHub Actions, enhancing team efficiency by 25%",
        ],
    ),
    Experience(
        company="UniCS Manchester",
        role="Chair",
        period="Nov 2024 – Present",
        achievements=[
            "Elected as youngest Chair at 18, representing 1,500+ Computer Science students",
            "Managed £55k+ annual budget; secured sponsorships from Google, Reply, Bank of America, and 10+ others",
            "Directed GreatUniHacks 2025 (~£20k budget, 200+ participants) and StudentHack 2025 (~£10k budget, 150+ participants)",
            "Implemented operational reforms increasing event participation by 40%",
            "Coordinated May Ball with £23k+ budget, attendance exceeding 180 participants",
        ],
    ),
    Experience(
        company="Imago",
        role="Software Developer",
        period="Jan 2025 – May 2025",
        achievements=[
            "Developed automated market-viability and competitive-mapping tools adopted in 5+ research projects",
            "Reduced manual research workload by 60% via Python pipelines & GitHub Actions CI",
            "Collaborated with 3 multi-disciplinary teams to deliver 2 reproducible dashboards",
            "Tech: Python, SQL, Docker, GitHub Actions",
        ],
    ),
    Experience(
        company="Hack Club",
        role="Director — Special Activities Division",
        period="May 2024 – Jan 2025",
        achievements=[
            "Supported Hack Club Arcade, engaging 2,000+ global users and organising 20+ events with 1,000+ attendees",
            "Distributed £100,000+ in prizes (MacBooks, Framework laptops, iPads)",
            "Recruited and led a global event team of 15 members, achieving 150% increase in virtual-event participation",
            "Investigated 50+ fraud cases, contributing to 90% reduction in fraudulent activities",
            "Onboarded 200+ club leaders across APAC & Europe; built 10+ internal tools improving cross-team workflows by 30%",
        ],
    ),
    Experience(
        company="ACM",
        role="USTPC Member",
        period="Mar 2024 – Present",
        achievements=[
            "Drafted 3 policy proposals for U.S. Congressional Identity Bills within the USTPC Strong Identity Authentication subcommittee",
            "Led digital identity awareness campaigns reaching 5,000+ people",
        ],
    ),
    Experience(
        company="IHFC TIH IIT Delhi",
        role="Robotics Intern",
        period="Jun 2024 – Aug 2024",
        achievements=[
            "Designed & tested 3+ drones and gliders; built flight-control software reducing test-flight errors by 25%",
            "Applied aerodynamic principles and airfoil selection to build performance-tuned UAV prototypes",
            "Collaborated with IIT Delhi researchers on robotics R&D",
        ],
    ),
]
