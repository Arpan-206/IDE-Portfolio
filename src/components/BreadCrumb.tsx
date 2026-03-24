"use client";

import { theme } from "@/lib/theme";
import { useIDEStore } from "@/store/ideStore";

export default function BreadCrumb() {
  const activeFile = useIDEStore((s) => s.activeFile);

  return (
    <div
      className="flex items-center px-3 shrink-0"
      style={{
        height: "26px",
        fontSize: "12px",
        letterSpacing: "0.02em",
        color: theme.textMuted,
        borderBottom: `1px solid ${theme.border}`,
        background: theme.bg,
      }}
    >
      <span>arpan-portfolio</span>
      <span className="mx-1.5">›</span>
      <span style={{ color: theme.textActive }}>{activeFile}</span>
    </div>
  );
}
