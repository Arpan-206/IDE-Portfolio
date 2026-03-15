/**
 * Maps file extensions to language identifiers
 */
const languageMap: Record<string, string> = {
  "about.ts": "typescript",
  "projects.rs": "rust",
  "contact.json": "json",
  "readme.md": "markdown",
  "hello.py": "python",
};

/**
 * Maps file extensions to display labels
 */
const languageDisplayMap: Record<string, string> = {
  "about.ts": "TypeScript",
  "projects.rs": "Rust",
  "contact.json": "JSON",
  "readme.md": "Markdown",
  "hello.py": "Python",
};

export function getLanguage(filename: string): string {
  return languageMap[filename] ?? "plaintext";
}

export function getLanguageDisplay(filename: string): string {
  return languageDisplayMap[filename] ?? "";
}
