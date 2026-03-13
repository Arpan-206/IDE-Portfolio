"use client";

import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";

const files = [
  { name: "about.ts", icon: "󰛦" },
  { name: "projects.rs", icon: "󱘗" },
  { name: "contact.json", icon: "󰘦" },
  { name: "ssh_portal.md", icon: "󰍔" },
];

export default function Sidebar() {
  const { activeFile, openFile } = useIDEStore();

  return (
    <div
      className="w-52 shrink-0 flex flex-col overflow-y-auto"
      style={{
        background: theme.bgPanel,
        borderRight: `1px solid ${theme.border}`,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-2"
        style={{
          color: theme.textMuted,
          fontSize: "11px",
          letterSpacing: "0.08em",
        }}
      >
        PROJECT
      </div>

      {/* File list */}
      {files.map((file) => (
        <button
          key={file.name}
          onClick={() => openFile(file.name)}
          className="flex items-center gap-2 px-4 py-1.5 w-full text-left transition-colors"
          style={{
            fontSize: "13px",
            background:
              activeFile === file.name ? theme.bgHover : "transparent",
            color: activeFile === file.name ? theme.textActive : theme.text,
            borderLeft:
              activeFile === file.name
                ? `2px solid ${theme.accent}`
                : "2px solid transparent",
          }}
        >
          <span style={{ color: theme.accent, fontSize: "12px" }}>
            {file.icon}
          </span>
          {file.name}
        </button>
      ))}
    </div>
  );
}
