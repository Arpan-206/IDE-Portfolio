"use client";

import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";

export default function BreadCrumb() {
  const activeFile = useIDEStore((s) => s.activeFile);

  return (
    <div
      className="flex items-center px-4 shrink-0"
      style={{
        height: "28px",
        fontSize: "12px",
        color: theme.textMuted,
        borderBottom: `1px solid ${theme.border}`,
        background: theme.bg,
      }}
    >
      <span>arpan-portfolio</span>
      <span className="mx-1.5">›</span>
      <span style={{ color: theme.text }}>{activeFile}</span>
    </div>
  );
}
