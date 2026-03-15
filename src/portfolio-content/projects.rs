#[derive(Debug)]
pub struct Project {
    pub name: &'static str,
    pub description: &'static str,
    pub tech: &'static [&'static str],
    pub github: &'static str,
    pub stars: u32,
}

pub const PROJECTS: [Project; 6] = [
    Project {
        name: "IDE-Portfolio",
        description: "Rust WASM terminal + Zed UI + live file tree",
        tech: &["Rust", "WASM", "Next.js", "Monaco", "Bun"],
        github: "https://github.com/Arpan-206/IDE-Portfolio",
        stars: 12,
    },
    Project {
        name: "risc-v-stopwatch",
        description: "RISC-V assembly LCD stopwatch",
        tech: &["RISC-V", "Assembly", "LCD", "SYS"],
        github: "https://github.com/Arpan-206/risc-v-stopwatch",
        stars: 3,
    },
    Project {
        name: "encrypto-cli",
        description: "Cross-platform hashing CLI",
        tech: &["Python", "CLI", "SHA-256", "GitHub Actions"],
        github: "https://github.com/Arpan-206/encrypto-cli",
        stars: 2,
    },
    Project {
        name: "Terminal Portfolio",
        description: "Interactive SSH portfolio",
        tech: &["Go", "Charm.sh", "Docker"],
        github: "https://github.com/Arpan-206/terminal-portfolio",
        stars: 1,
    },
    Project {
        name: "BIOMET",
        description: "RPi biometrics (NASA PowerPitch Winner)",
        tech: &["Raspberry Pi", "GPIO", "CAD"],
        github: "",
        stars: 0,
    },
];
