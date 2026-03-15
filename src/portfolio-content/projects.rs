struct Project {
    name: &'static str,
    stack: &'static [&'static str],
    description: &'static str,
    url: &'static str,
}

static PROJECTS: &[Project] = &[
    Project {
        name: "ssh portfolio",
        stack: &["Go", "Bubble Tea", "Wish"],
        description: "A portfolio you SSH into. No browser needed.",
        url: "ssh arpanpandey.dev",
    },
    Project {
        name: "BIOMET",
        stack: &["Python", "CV", "Biometrics"],
        description: "Won Conrad Challenge 2024 Power Pitch Award.",
        url: "github.com/Arpan-206/biomet",
    },
    Project {
        name: "CodeCrafters CLI",
        stack: &["Go"],
        description: "Contributed to CLI v43+ and Shell Tester across 73 releases.",
        url: "github.com/codecrafters-io",
    },
    Project {
        name: "PokeDexter",
        stack: &["Python", "TTS", "ASCII"],
        description: "Pokemon CLI with ASCII art and TTS. Featured in CS50 gallery.",
        url: "github.com/Arpan-206/PokeDexter",
    },
];
