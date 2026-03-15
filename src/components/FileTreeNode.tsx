"use client";

import React from "react";
import { FileNode } from "@/types/FileNode";
import { theme } from "@/lib/theme";
import { getIconPath } from "@/lib/fileIcons";

interface FileTreeNodeProps {
  node: FileNode;
  depth: number;
  activeFile: string;
  onSelect: (path: string) => void;
  hovered: string | null;
  setHovered: (path: string | null) => void;
  openFolders: Set<string>;
  toggleFolder: (path: string) => void;
}

function FolderIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <img
      src={isOpen ? "/icons/app/_folder_open.svg" : "/icons/app/_folder.svg"}
      alt=""
      className="h-4 w-4 shrink-0"
    />
  );
}

export default function FileTreeNode({
  node,
  depth,
  activeFile,
  onSelect,
  hovered,
  setHovered,
  openFolders,
  toggleFolder,
}: FileTreeNodeProps) {
  const isFolder = node.type === "folder";
  const isOpen = openFolders.has(node.path);
  const isActive = !isFolder && activeFile === node.path;
  const isHovered = hovered === node.path;

  if (isFolder) {
    const sortedChildren = node.children
      ? [...node.children].sort((a, b) => {
          if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
          return a.name.localeCompare(b.name);
        })
      : [];

    return (
      <div key={node.path}>
        <button
          onClick={() => toggleFolder(node.path)}
          onMouseEnter={() => setHovered(node.path)}
          onMouseLeave={() => setHovered(null)}
          className="group w-full flex items-center gap-1 px-3 py-1 text-left transition-colors"
          style={{
            fontSize: "13px",
            color: theme.text,
            background: isHovered ? `${theme.bgHover}40` : "transparent",
            paddingLeft: `${depth * 16 + 12}px`,
          }}
        >
          <FolderIcon isOpen={isOpen} />
          <span className="truncate text-sm">{node.name}</span>
        </button>

        {isOpen &&
          sortedChildren.map((child) => (
            <FileTreeNode
              key={child.path}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              onSelect={onSelect}
              hovered={hovered}
              setHovered={setHovered}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
            />
          ))}
      </div>
    );
  }

  // File node
  const iconPath = getIconPath(node.name);

  return (
    <button
      key={node.path}
      onClick={() => onSelect(node.path)}
      onMouseEnter={() => setHovered(node.path)}
      onMouseLeave={() => setHovered(null)}
      className="group w-full flex items-center gap-2 px-3 py-1 text-left transition-colors"
      style={{
        fontSize: "13px",
        color: isActive ? theme.textActive : theme.text,
        background: isActive
          ? `${theme.accent}20`
          : isHovered
            ? `${theme.bgHover}40`
            : "transparent",
        borderLeft: isActive
          ? `2px solid ${theme.accent}`
          : "2px solid transparent",
        paddingLeft: `${depth * 16 + 12 + 16}px`,
        marginRight: "2px",
      }}
    >
      <img src={iconPath} alt="" className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{node.name}</span>
    </button>
  );
}
