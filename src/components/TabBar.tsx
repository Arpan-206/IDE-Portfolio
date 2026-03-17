"use client";

import React, { useState } from "react";
import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";
import { getIconPath } from "@/lib/fileIcons";

export default function TabBar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const { openTabs, activeFile, openFile, closeTab } = useIDEStore();

  if (openTabs.length === 0) return null;

  return (
    <div
      className="flex items-center shrink-0 overflow-x-auto pl-0"
      style={{
        background: theme.bgPanel,
        borderBottom: `1px solid ${theme.border}`,
        height: "32px",
      }}
    >
      {openTabs.map((tab) => {
        const iconPath = getIconPath(tab);
        const isActive = activeFile === tab;
        const isHovered = hoveredTab === tab;

        return (
          <div
            key={tab}
            className="flex items-center justify-between gap-2 pl-4 pr-4 h-full cursor-pointer shrink-0 transition-colors first:pl-5"
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
            style={{
              fontSize: "12px",
              minWidth: "140px",
              background: isActive
                ? theme.bgActive
                : isHovered
                  ? theme.bgHover
                  : theme.bgPanel,
              color: isActive ? theme.textActive : theme.textMuted,
              borderRight: `1px solid ${theme.border}`,
              borderTop: isActive
                ? tab.startsWith(".")
                  ? `2px solid ${theme.accentRed}`
                  : `1px solid ${theme.accent}`
                : "1px solid transparent",
            }}
            onClick={() => openFile(tab)}
          >
            <span className="flex items-center gap-2">
              <img src={iconPath} alt="" className="h-3.5 w-3.5" />
              <span>{tab}</span>
            </span>
            <button
              className="transition-colors ml-1"
              style={{
                color: isActive
                  ? theme.textActive
                  : isHovered
                    ? theme.text
                    : theme.textMuted,
                fontSize: "11px",
                background: "transparent",
                border: "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab);
              }}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
