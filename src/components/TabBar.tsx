"use client";

import Image from "next/image";
import { useState } from "react";
import { getIconPath } from "@/lib/fileIcons";
import { theme } from "@/lib/theme";
import { useIDEStore } from "@/store/ideStore";

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
            role="button"
            tabIndex={0}
            className="flex items-center justify-between gap-2 pl-4 pr-4 h-full shrink-0 transition-colors first:pl-5"
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={() => openFile(tab)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openFile(tab);
              }
            }}
            aria-pressed={isActive}
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
              cursor: "pointer",
            }}
          >
            <div className="flex items-center gap-2">
              <Image src={iconPath} alt="" width={14} height={14} />
              <span>{tab}</span>
            </div>

            {/* Close button must be a real button and cannot be nested inside another button.
                The outer interactive element is a div with role="button", so nesting a button here is valid. */}
            <button
              type="button"
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
                outline: "none",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  closeTab(tab);
                }
              }}
              aria-label={`Close ${tab}`}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
