/**
 * Maps file extensions to language identifiers
 */
const languageMap: Record<string, string> = {
  "contact.json": "json",
  "education.ts": "typescript",
  "experience.py": "python",
  "projects.rs": "rust",
  "readme.md": "markdown",
  "skills.toml": "toml",
  "meet.cal": "markdown",
};

/**
 * Maps file extensions to display labels
 */
const languageDisplayMap: Record<string, string> = {
  "contact.json": "JSON",
  "education.ts": "TypeScript",
  "experience.py": "Python",
  "projects.rs": "Rust",
  "readme.md": "Markdown",
  "skills.toml": "TOML",
  "meet.cal": "Cal.com",
};

export function getLanguage(filename: string): string {
  return languageMap[filename] ?? "plaintext";
}

export function getLanguageDisplay(filename: string): string {
  return languageDisplayMap[filename] ?? "";
}
