"use client";

import { useState } from "react";
import { useIDEStore } from "@/store/ideStore";
import { theme } from "@/lib/theme";
import { visibleFileNames } from "@/lib/portfolioContent";
import { useFileTree } from "@/lib/useFileTree";
import FileTreeNode from "./FileTreeNode";

function RootIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <img
      src={isOpen ? "/icons/app/_root_open.svg" : "/icons/app/_root.svg"}
      alt=""
      className="h-4 w-4 shrink-0"
    />
  );
}

export default function Sidebar() {
  const { activeFile, openFile } = useIDEStore();
  const [hovered, setHovered] = useState<string | null>(null);
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(["."]));
  const fileTree = useFileTree(visibleFileNames);

  const toggleFolder = (path: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const sortedRootChildren = fileTree.children
    ? [...fileTree.children].sort((a, b) => {
        if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
        return a.name.localeCompare(b.name);
      })
    : [];

  return (
    <div
      className="flex flex-col overflow-y-auto select-none h-full"
      style={{
        width: "100%",
        background: theme.bgPanel,
        borderRight: `1px solid ${theme.border}`,
        color: theme.text,
      }}
    >
      <div
        className="px-3 py-3 shrink-0 border-b"
        style={{
          color: theme.textMuted,
          fontSize: "11px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 600,
          borderBottomColor: theme.border,
        }}
      >
        Files
      </div>

      <div className="flex-1 overflow-y-auto px-3">
        <button
          onClick={() => toggleFolder(".")}
          onMouseEnter={() => setHovered(".")}
          onMouseLeave={() => setHovered(null)}
          className="group w-full flex items-center gap-1 pl-3 pr-3 py-1 text-left transition-colors"
          style={{
            fontSize: "13px",
            color: theme.text,
            background: hovered === "." ? `${theme.bgHover}40` : "transparent",
          }}
        >
          <RootIcon isOpen={openFolders.has(".")} />
          <span className="truncate text-sm font-medium">{fileTree.name}</span>
        </button>

        {openFolders.has(".") &&
          sortedRootChildren.map((node) => (
            <FileTreeNode
              key={node.path}
              node={node}
              depth={1}
              activeFile={activeFile}
              onSelect={openFile}
              hovered={hovered}
              setHovered={setHovered}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
            />
          ))}
      </div>
    </div>
  );
}
