"use client";

import { useIDEStore } from "@/store/ideStore";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import BreadCrumb from "./BreadCrumb";
import Editor from "./Editor";
import StatusBar from "./StatusBar";
import TabBar from "./TabBar";

export default function IDE() {
  const activeFile = useIDEStore((s) => s.activeFile);

  return (
    <div
      className="h-screen w-screen flex flex-col overflow-hidden"
      style={{
        background: "#1c1c1c",
        color: "#c0c0c0",
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      {/* Top toolbar */}
      <Toolbar />

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Editor column */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar />
          <BreadCrumb />
          <Editor />
        </div>
      </div>

      {/* Bottom */}
      <StatusBar />
    </div>
  );
}
