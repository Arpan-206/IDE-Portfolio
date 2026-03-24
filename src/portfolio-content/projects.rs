#[derive(Debug)]
pub struct Project {
    pub name: &'static str,
    pub description: &'static str,
    pub tech: &'static [&'static str],
    pub url: &'static str,
    pub stars: u32,
}

pub const PROJECTS: [Project; 9] = [
    Project {
        name: "IDE-Portfolio",
        description: "Interactive developer portfolio with a Rust WASM terminal and a Zed-inspired UI.",
        tech: &["Rust", "WASM", "Next.js", "Monaco", "Bun"],
        url: "https://github.com/Arpan-206/IDE-Portfolio",
        stars: 0,
    },
    Project {
        name: "CCBench",
        description: "A benchmark for coding agents, built at CodeCrafters.",
        tech: &["Rust"],
        url: "https://github.com/codecrafters-io/ccbench",
        stars: 25,
    },
    Project {
        name: "risc-v-stopwatch",
        description: "RISC-V assembly LCD stopwatch",
        tech: &["RISC-V", "Assembly", "LCD", "SYS"],
        url: "n/a",
        stars: 0,
    },
    Project {
        name: "EncryptoCLI",
        description: "Encrypto CLI — intuitive cross-platform CLI for file hashing and encryption (SHA-256, Fernet, MD5).",
        tech: &["Python", "CLI", "SHA-256", "GitHub Actions"],
        url: "https://github.com/Arpan-206/EncryptoCLI",
        stars: 7,
    },
    Project {
        name: "Terminal Portfolio",
        description: "Interactive SSH-based portfolio deployed to a remote server for public access.",
        tech: &["Go", "Charm.sh", "Docker"],
        url: "https://github.com/Arpan-206/terminal-portfolio",
        stars: 1,
    },
    Project {
        name: "BIOMET",
        description: "Periocular eye-scan identification system tackling the global ID crisis (850M+ unidentified). NASA PowerPitch Winner.",
        tech: &["Raspberry Pi", "GPIO", "ML", "CAD", "Cryptography"],
        url: "https://biomet.vercel.app/",
        stars: 0,
    },
    Project {
        name: "Formee",
        description: "Easy way to create, edit and manage forms with CLI/GraphQL, schema-backed validation and CI/CD integration.",
        tech: &["Python", "GraphQL", "CLI", "Docker"],
        url: "https://github.com/Arpan-206/Formee",
        stars: 7,
    },
    Project {
        name: "CodeCrafters Frontend",
        description: "Frontend powering app.codecrafters.io — rebuild complex systems from scratch.",
        tech: &["TypeScript", "EmberJS", "Handlebars", "TailwindCSS"],
        url: "https://github.com/codecrafters-io/frontend",
        stars: 114,
    },
    Project {
        name: "CodeCrafters CLI",
        description: "CodeCrafters CLI to run tests.",
        tech: &["Go"],
        url: "https://github.com/codecrafters-io/cli",
        stars: 21,
    },
];
