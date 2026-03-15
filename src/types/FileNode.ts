export interface FileNode {
  name: string;
  type: "file" | "folder";
  path: string;
  children?: FileNode[];
  isOpen?: boolean;
}

export interface SidebarProps {
  activeFile?: string;
  onSelect?: (filename: string) => void;
}
