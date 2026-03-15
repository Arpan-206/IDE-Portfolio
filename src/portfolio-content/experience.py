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
        period="Apr–Oct 2025",
        achievements=[
            "Go harnesses for shell/signals (100k devs)",
            "Rails/Ember (50k MAU)",
            "Docker CI/CD (+25% velocity)",
        ],
    ),
    Experience(
        company="UniCS Manchester",
        role="Co-Chair",
        period="Nov 2024–Present",
        achievements=[
            "1,500 students | £55k budget",
            "2 hackathons (150+ participants)",
            "Corporate partnerships",
        ],
    ),
    Experience(
        company="Imago",
        role="Software Developer",
        period="Jan–May 2025",
        achievements=[
            "Python/SQL pipelines (-60% research)",
            "Production dashboards",
            "GitHub Actions CI",
        ],
    ),
    Experience(
        company="Hack Club",
        role="Director SAD",
        period="May 2024–Jan 2025",
        achievements=[
            "Hack Club Arcade (2k participants)",
            "$100k prizes | 15-member team",
            "Fraud team (-90%)",
        ],
    ),
    Experience(
        company="IHFC TIH IIT Delhi",
        role="Robotics Intern",
        period="Jun–Aug 2024",
        achievements=[
            "UAV/glider prototyping",
            "Aerodynamics testing",
            "Drone programming",
        ],
    ),
]
