"use client";

import { Allotment } from "allotment";
import { useEffect } from "react";
import { theme } from "@/lib/theme";
import "allotment/dist/style.css";
import { fileContents, fileNamesAll } from "@/lib/portfolioContent";
import { useWindowResize } from "@/lib/useWindowResize";
import { useIDEStore } from "@/store/ideStore";
import BreadCrumb from "./BreadCrumb";
import Editor from "./Editor";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";
import TabBar from "./TabBar";
import Toolbar from "./Toolbar";

export default function IDE() {
  const { sidebarMin, sidebarMax } = useWindowResize();
  const sidebarSplitSizes = useIDEStore((s) => s.sidebarSplitSizes);
  const setSidebarSplitSizes = useIDEStore((s) => s.setSidebarSplitSizes);
  const openFile = useIDEStore((s) => s.openFile);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const param = params.get("open");
      if (!param) return;

      const name = decodeURIComponent(param);

      // Build list of all known file names (including invisible ones like the 404 fallback)
      const knownNames = fileNamesAll;

      if (knownNames.includes(name)) {
        // Requested file exists (visible or not) — open it
        openFile(name);
      } else {
        // Requested file not known — fall back to the 404 file if present.
        // Prefer dotfile `.404*` if present, otherwise fall back to `404*`.
        const fallback =
          Object.keys(fileContents).find((k) => k.startsWith(".404")) ??
          Object.keys(fileContents).find((k) => k.startsWith("404"));
        if (fallback) {
          openFile(fallback);
        }
      }
    } catch (_e) {
      // ignore any parsing errors
    }
    // run once on mount; openFile is stable from zustand but include it to satisfy hooks linter
  }, [openFile]);

  return (
    <div
      className="h-screen w-screen p-4 md:p-6"
      style={{
        background: theme.bgPanel,
      }}
    >
      <div
        className="h-full w-full flex flex-col overflow-hidden rounded-xl"
        style={{
          background: theme.bg,
          color: theme.text,
          fontFamily: "JetBrains Mono, monospace",
          border: `1px solid ${theme.border}`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
        }}
      >
        <Toolbar />

        <div className="flex flex-1 overflow-hidden">
          <Allotment
            sizes={sidebarSplitSizes}
            proportionalLayout={true}
            snap
            onChange={(sizes) => {
              if (sizes.length < 2) return;
              setSidebarSplitSizes([sizes[0], sizes[1]]);
            }}
          >
            <Allotment.Pane minSize={sidebarMin} maxSize={sidebarMax}>
              <Sidebar />
            </Allotment.Pane>
            <Allotment.Pane>
              <div className="flex flex-col h-full overflow-hidden">
                <TabBar />
                <BreadCrumb />
                <Editor />
              </div>
            </Allotment.Pane>
          </Allotment>
        </div>

        <StatusBar />
      </div>
    </div>
  );
}
