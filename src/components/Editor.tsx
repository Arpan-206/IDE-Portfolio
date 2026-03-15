"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Monaco } from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Allotment } from "allotment";
import type { AllotmentHandle } from "allotment";
import "allotment/dist/style.css";
import "github-markdown-css/github-markdown-dark.css";
import { useIDEStore } from "@/store/ideStore";
import { theme as appTheme } from "@/lib/theme";
import { carbonfoxTheme } from "@/lib/monacoTheme";
import { fileContents } from "@/lib/portfolioContent";
import { getLanguage } from "@/lib/languageMap";
import { createMonacoOptions } from "@/lib/monacoOptions";
import { useWindowResize } from "@/lib/useWindowResize";
import TerminalPanel from "@/components/TerminalPanel";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Editor() {
  const activeFile = useIDEStore((s) => s.activeFile);
  const terminalVisible = useIDEStore((s) => s.terminalVisible);

  const isMd = activeFile.endsWith(".md");
  const content = fileContents[activeFile] ?? "";
  const { minSize, fontSize } = useWindowResize();

  const rootRef = useRef<AllotmentHandle | null>(null);
  const mdRef = useRef<AllotmentHandle | null>(null);

  const [rootSizes, setRootSizes] = useState<[number, number]>([0.6, 0.4]);
  const [mdSizes, setMdSizes] = useState<[number, number]>([0.5, 0.5]);

  const handleBeforeMount = useCallback((monaco: Monaco) => {
    monaco.editor.defineTheme("carbonfox", carbonfoxTheme);
  }, []);

  const editorOptions = useMemo(
    () => createMonacoOptions(fontSize),
    [fontSize],
  );

  const language = useMemo(() => getLanguage(activeFile), [activeFile]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      rootRef.current?.reset();
      mdRef.current?.reset();
    }, 0);

    return () => window.clearTimeout(t);
  }, [terminalVisible, isMd, activeFile]);

  return (
    <div className="flex flex-1 overflow-hidden">
      <Allotment
        ref={rootRef}
        vertical
        proportionalLayout={true}
        minSize={minSize}
        snap
        sizes={terminalVisible ? rootSizes : [1, 0]}
        onChange={(sizes) => {
          if (sizes.length < 2) return;
          if (!terminalVisible) return;
          setRootSizes([sizes[0], sizes[1]]);
        }}
      >
        <Allotment.Pane>
          {isMd ? (
            <div className="flex h-full w-full min-h-0 min-w-0">
              <Allotment
                ref={mdRef}
                vertical={false}
                proportionalLayout={true}
                minSize={minSize}
                snap
                sizes={mdSizes}
                onChange={(sizes) => {
                  if (sizes.length < 2) return;
                  setMdSizes([sizes[0], sizes[1]]);
                }}
                className="w-full h-full md-split-horizontal"
              >
                <Allotment.Pane>
                  <MonacoEditor
                    height="100%"
                    width="100%"
                    theme="carbonfox"
                    beforeMount={handleBeforeMount}
                    language={language}
                    value={content}
                    options={editorOptions}
                  />
                </Allotment.Pane>
                <Allotment.Pane>
                  <div
                    className="markdown-body overflow-y-auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: appTheme.bg,
                      padding: "24px 32px",
                    }}
                  >
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                      {content}
                    </ReactMarkdown>
                  </div>
                </Allotment.Pane>
              </Allotment>
            </div>
          ) : (
            <MonacoEditor
              height="100%"
              width="100%"
              theme="carbonfox"
              beforeMount={handleBeforeMount}
              language={language}
              value={content}
              options={editorOptions}
            />
          )}
        </Allotment.Pane>

        <Allotment.Pane minSize={160} visible={terminalVisible}>
          <TerminalPanel />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
