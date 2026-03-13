// src/components/Editor.tsx
"use client";

import { useEffect } from "react";
import MonacoEditor, { useMonaco } from "@monaco-editor/react";
import { useIDEStore } from "@/store/ideStore";
import { theme as appTheme } from "@/lib/theme";

const ZED_DARK_THEME = "zed-dark";

const fileContents: Record<string, string> = {
  "about.ts": `export const about = {
  name: "Arpan Pandey",
  role: "Frontend Engineer",
  location: "Manchester, UK",
  summary:
    "I build crisp, fast UIs with a focus on detail, motion, and developer experience.",
  interests: ["Design systems", "Editor UX", "Performance", "WebAssembly"],
};`,
  "projects.rs": `struct Project {
    name: &'static str,
    stack: &'static [&'static str],
    description: &'static str,
}

static PROJECTS: &[Project] = &[
    Project {
        name: "Zed-inspired Portfolio",
        stack: &["Next.js", "TypeScript", "Monaco"],
        description: "A code-first portfolio with editor-like interactions.",
    },
    Project {
        name: "WASM Playground",
        stack: &["Rust", "WASM", "Vite"],
        description: "Interactive demos powered by Rust and WebAssembly.",
    },
];`,
  "contact.json": `{
  "email": "hello@arpan.dev",
  "github": "https://github.com/arpanpandey",
  "linkedin": "https://linkedin.com/in/arpanpandey",
  "website": "https://arpan.dev"
}`,
  "ssh_portal.md": `# SSH Portal

Welcome to the terminal.

- Status: Online
- Region: eu-west
- Shell: zsh

> Tip: Press \`⌘K\` to open commands.
`,
};

const languageMap: Record<string, string> = {
  "about.ts": "typescript",
  "projects.rs": "rust",
  "contact.json": "json",
  "ssh_portal.md": "markdown",
};

export default function Editor() {
  const activeFile = useIDEStore((s) => s.activeFile);
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme(ZED_DARK_THEME, {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6b737a" },
        { token: "keyword", foreground: "c792ea" },
        { token: "string", foreground: "ecc48d" },
        { token: "number", foreground: "f78c6c" },
        { token: "type.identifier", foreground: "82aaff" },
        { token: "identifier", foreground: "d0d0d0" },
        { token: "delimiter", foreground: "5c6370" },
      ],
      colors: {
        "editor.background": "#1c1c1c",
        "editor.foreground": "#c0c0c0",
        "editor.lineHighlightBackground": "#232323",
        "editorLineNumber.foreground": "#4f4f4f",
        "editorLineNumber.activeForeground": "#8a8a8a",
        "editorCursor.foreground": "#4ec9b0",
        "editor.selectionBackground": "#2d3f3a",
        "editor.inactiveSelectionBackground": "#2a2a2a",
        "editorIndentGuide.background": "#2a2a2a",
        "editorIndentGuide.activeBackground": "#3a3a3a",
        "editorWhitespace.foreground": "#333333",
        "editorGutter.background": "#1c1c1c",
      },
    });

    monaco.editor.setTheme(ZED_DARK_THEME);
  }, [monaco]);

  return (
    <div className="flex-1" style={{ background: appTheme.bg }}>
      <MonacoEditor
        height="100%"
        width="100%"
        theme={ZED_DARK_THEME}
        language={languageMap[activeFile] ?? "plaintext"}
        value={fileContents[activeFile] ?? ""}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          lineNumbers: "on",
          renderLineHighlight: "line",
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: "solid",
          cursorSmoothCaretAnimation: "on",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 13,
          lineHeight: 20,
          padding: { top: 12, bottom: 12 },
          overviewRulerBorder: false,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
      />
    </div>
  );
}
