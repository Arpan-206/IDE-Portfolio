"use client";

import { theme } from "@/lib/theme";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useWindowResize } from "@/lib/useWindowResize";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import BreadCrumb from "./BreadCrumb";
import Editor from "./Editor";
import StatusBar from "./StatusBar";
import TabBar from "./TabBar";

export default function IDE() {
  const { sidebarMin, sidebarMax } = useWindowResize();

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
          <Allotment defaultSizes={[0.2, 0.8]} proportionalLayout={true} snap>
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
