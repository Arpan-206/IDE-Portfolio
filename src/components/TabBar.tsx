"use client";

import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";

export default function TabBar() {
  const { openTabs, activeFile, openFile, closeTab } = useIDEStore();

  if (openTabs.length === 0) return null;

  return (
    <div
      className="flex items-center shrink-0 overflow-x-auto"
      style={{
        background: theme.bgPanel,
        borderBottom: `1px solid ${theme.border}`,
        height: "36px",
      }}
    >
      {openTabs.map((tab) => (
        <div
          key={tab}
          className="flex items-center gap-2 px-4 h-full cursor-pointer shrink-0 transition-colors"
          style={{
            fontSize: "13px",
            background: activeFile === tab ? theme.bg : "transparent",
            color: activeFile === tab ? theme.textActive : theme.textMuted,
            borderRight: `1px solid ${theme.border}`,
            borderTop:
              activeFile === tab
                ? `1px solid ${theme.accent}`
                : "1px solid transparent",
          }}
          onClick={() => openFile(tab)}
        >
          <span>{tab}</span>
          <button
            className="hover:text-white transition-colors ml-1"
            style={{ color: theme.textMuted, fontSize: "12px" }}
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
