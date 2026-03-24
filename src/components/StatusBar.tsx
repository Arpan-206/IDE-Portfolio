"use client";

import { getLanguageDisplay } from "@/lib/languageMap";
import { theme } from "@/lib/theme";
import { useIDEStore } from "@/store/ideStore";

export default function StatusBar() {
  const activeFile = useIDEStore((s) => s.activeFile);
  const languageDisplay = getLanguageDisplay(activeFile);

  return (
    <div
      className="flex items-center justify-between px-3 shrink-0"
      style={{
        height: "22px",
        fontSize: "12px",
        background: theme.bgPanel,
        color: theme.textMuted,
        borderTop: `1px solid ${theme.border}`,
      }}
    >
      <span>Arpan Pandey · Manchester, UK</span>
      <span>{languageDisplay} · UTF-8</span>
    </div>
  );
}
