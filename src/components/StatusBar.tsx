"use client";

import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";

const languageMap: Record<string, string> = {
  "about.ts": "TypeScript",
  "projects.rs": "Rust",
  "contact.json": "JSON",
  "ssh_portal.md": "Markdown",
};

export default function StatusBar() {
  const activeFile = useIDEStore((s) => s.activeFile);

  return (
    <div
      className="flex items-center justify-between px-4 shrink-0"
      style={{
        height: "24px",
        fontSize: "12px",
        background: theme.accent,
        color: "#1c1c1c",
      }}
    >
      <span>Arpan Pandey · Manchester, UK</span>
      <span>{languageMap[activeFile] ?? ""} · UTF-8</span>
    </div>
  );
}
