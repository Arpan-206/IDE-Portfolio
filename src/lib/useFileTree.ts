import { useMemo } from "react";
import type { FileNode } from "@/types/FileNode";

/**
 * Build tree structure from flat file names array
 */
function buildFileTree(files: string[]): FileNode {
  const root: FileNode = {
    name: "portfolio-content",
    type: "folder",
    path: ".",
    children: [],
    isOpen: true,
  };

  const folderMap = new Map<string, FileNode>();
  folderMap.set(".", root);

  const sortedFiles = files.sort();

  for (const filePath of sortedFiles) {
    const parts = filePath.split("/");
    let currentPath = ".";

    // Create folder structure
    for (let i = 0; i < parts.length - 1; i++) {
      currentPath =
        currentPath === "." ? parts[i] : `${currentPath}/${parts[i]}`;

      if (!folderMap.has(currentPath)) {
        const folder: FileNode = {
          name: parts[i],
          type: "folder",
          path: currentPath,
          children: [],
          isOpen: false,
        };

        const parentPath =
          currentPath.lastIndexOf("/") > 0
            ? currentPath.substring(0, currentPath.lastIndexOf("/"))
            : ".";
        const parent = folderMap.get(parentPath);
        if (parent?.children) {
          parent.children.push(folder);
        }
        folderMap.set(currentPath, folder);
      }
    }

    // Create file node
    const fileName = parts[parts.length - 1];

    const file: FileNode = {
      name: fileName,
      type: "file",
      path: filePath,
    };

    const parentPath = parts.length > 1 ? parts.slice(0, -1).join("/") : ".";
    const parent = folderMap.get(parentPath);
    if (parent?.children) {
      parent.children.push(file);
    }
  }

  // Sort children recursively
  const sortNode = (node: FileNode) => {
    if (node.children) {
      node.children.sort((a, b) => {
        if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
      node.children.forEach(sortNode);
    }
  };

  sortNode(root);
  return root;
}

/**
 * Custom hook to build and memoize file tree
 */
export function useFileTree(fileNames: string[]): FileNode {
  return useMemo(() => buildFileTree(fileNames), [fileNames]);
}
