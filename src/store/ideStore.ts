import { create } from "zustand";
import { persist } from "zustand/middleware";

type IDEStore = {
  activeFile: string;
  openTabs: string[];
  terminalVisible: boolean;
  editorSplitSizes: [number, number];
  markdownSplitSizes: [number, number];
  sidebarSplitSizes: [number, number];
  openFile: (file: string) => void;
  closeTab: (file: string) => void;
  toggleTerminal: () => void;
  setEditorSplitSizes: (sizes: [number, number]) => void;
  setMarkdownSplitSizes: (sizes: [number, number]) => void;
  setSidebarSplitSizes: (sizes: [number, number]) => void;
};

const DEFAULT_EDITOR_SPLIT: [number, number] = [0.7, 0.3];
const DEFAULT_MARKDOWN_SPLIT: [number, number] = [0.5, 0.5];
const DEFAULT_SIDEBAR_SPLIT: [number, number] = [0.2, 0.8];

export const useIDEStore = create<IDEStore>()(
  persist(
    (set) => ({
      activeFile: "readme.md",
      openTabs: ["readme.md"],
      terminalVisible: true,
      editorSplitSizes: DEFAULT_EDITOR_SPLIT,
      markdownSplitSizes: DEFAULT_MARKDOWN_SPLIT,
      sidebarSplitSizes: DEFAULT_SIDEBAR_SPLIT,
      openFile: (file) =>
        set((s) => ({
          openTabs: s.openTabs.includes(file)
            ? s.openTabs
            : [...s.openTabs, file],
          activeFile: file,
        })),
      closeTab: (file) =>
        set((s) => {
          const tabs = s.openTabs.filter((t) => t !== file);
          return {
            openTabs: tabs,
            activeFile:
              s.activeFile === file ? (tabs.at(-1) ?? "") : s.activeFile,
          };
        }),
      toggleTerminal: () =>
        set((s) => ({
          terminalVisible: !s.terminalVisible,
        })),
      setEditorSplitSizes: (sizes) => set({ editorSplitSizes: sizes }),
      setMarkdownSplitSizes: (sizes) => set({ markdownSplitSizes: sizes }),
      setSidebarSplitSizes: (sizes) => set({ sidebarSplitSizes: sizes }),
    }),
    {
      name: "ide-state",
      partialize: (state) => ({
        activeFile: state.activeFile,
        openTabs: state.openTabs,
        terminalVisible: state.terminalVisible,
        editorSplitSizes: state.editorSplitSizes,
        markdownSplitSizes: state.markdownSplitSizes,
        sidebarSplitSizes: state.sidebarSplitSizes,
      }),
    },
  ),
);
