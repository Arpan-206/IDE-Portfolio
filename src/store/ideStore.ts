import { create } from "zustand";

type IDEStore = {
  activeFile: string;
  openTabs: string[];
  terminalVisible: boolean;
  openFile: (file: string) => void;
  closeTab: (file: string) => void;
  toggleTerminal: () => void;
};

export const useIDEStore = create<IDEStore>((set) => ({
  activeFile: "readme.md",
  openTabs: ["readme.md"],
  terminalVisible: true,
  openFile: (file) =>
    set((s) => ({
      openTabs: s.openTabs.includes(file) ? s.openTabs : [...s.openTabs, file],
      activeFile: file,
    })),
  closeTab: (file) =>
    set((s) => {
      const tabs = s.openTabs.filter((t) => t !== file);
      return {
        openTabs: tabs,
        activeFile: s.activeFile === file ? (tabs.at(-1) ?? "") : s.activeFile,
      };
    }),
  toggleTerminal: () =>
    set((s) => ({
      terminalVisible: !s.terminalVisible,
    })),
}));
