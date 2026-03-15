"use client";

import "xterm/css/xterm.css";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ITerminalOptions, Terminal as XTermTerminal } from "xterm";
import type { FitAddon as FitAddonType } from "@xterm/addon-fit";
import { theme } from "@/lib/theme";
import { fileContents } from "@/lib/portfolioContent";
import { useIDEStore } from "@/store/ideStore";

type XTermTheme = {
  background?: string;
  foreground?: string;
  cursor?: string;
  cursorAccent?: string;
  selectionBackground?: string;
  black?: string;
  red?: string;
  green?: string;
  yellow?: string;
  blue?: string;
  magenta?: string;
  cyan?: string;
  white?: string;
  brightBlack?: string;
  brightRed?: string;
  brightGreen?: string;
  brightYellow?: string;
  brightBlue?: string;
  brightMagenta?: string;
  brightCyan?: string;
  brightWhite?: string;
};

type ShellOutput = {
  lines: string[];
  clear?: boolean;
  open?: string | null;
  pwd?: string;
};

type CompleteOutput = {
  insert: string;
  candidates: string[];
  showList?: boolean;
};

type ShellBackend = {
  process: (input: string) => ShellOutput;
  complete: (input: string) => CompleteOutput;
};

type LoadResult = {
  backend: ShellBackend | null;
  error?: string;
};

type WasmBindings = {
  default?: (
    input?: RequestInfo | URL | Response | BufferSource | WebAssembly.Module,
  ) => Promise<unknown>;
  Shell?: new (initJson: string) => {
    process: (input: string) => string;
    complete: (input: string) => string;
  };
};

function mapThemeToXTerm(): XTermTheme {
  return {
    background: theme.bgPanel,
    foreground: theme.text,
    cursor: theme.accent,
    cursorAccent: theme.textActive,
    selectionBackground: `${theme.accent}40`,
    black: "#101010",
    red: theme.accentRed,
    green: theme.accent,
    yellow: "#f2c94c",
    blue: theme.accentBlue,
    magenta: theme.accentPurple,
    cyan: theme.accentCyan,
    white: theme.text,
    brightBlack: theme.textMuted,
    brightRed: theme.accentRed,
    brightGreen: theme.accent,
    brightYellow: "#f2c94c",
    brightBlue: theme.accentBlue,
    brightMagenta: theme.accentPurple,
    brightCyan: theme.accentCyan,
    brightWhite: theme.textActive,
  };
}

const PROMPT_USER = "arpan@portfolio";
const PROMPT_PATH = "~";
const PROMPT_SYMBOL = "$";
const ANSI_RESET = "\x1b[0m";

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length !== 6) {
    return { r: 205, g: 206, b: 207 };
  }
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function ansiColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return `\x1b[38;2;${r};${g};${b}m`;
}

function colorize(text: string, hex: string) {
  return `${ansiColor(hex)}${text}${ANSI_RESET}`;
}

function writePrompt(term: XTermTerminal) {
  term.write(
    `${colorize(PROMPT_USER, theme.accentCyan)}:${colorize(
      PROMPT_PATH,
      theme.textMuted,
    )}${colorize(PROMPT_SYMBOL, theme.accent)} `,
  );
}

function parseShellOutput(raw: string): ShellOutput {
  try {
    const parsed = JSON.parse(raw) as ShellOutput;
    if (!parsed || !Array.isArray(parsed.lines)) {
      return { lines: [raw] };
    }
    return parsed;
  } catch {
    return { lines: [raw] };
  }
}

function parseCompleteOutput(raw: string): CompleteOutput {
  try {
    const parsed = JSON.parse(raw) as {
      insert?: string;
      candidates?: string[];
      show_list?: boolean;
    };
    if (!parsed || !Array.isArray(parsed.candidates)) {
      return { insert: "", candidates: [] };
    }
    return {
      insert: parsed.insert ?? "",
      candidates: parsed.candidates ?? [],
      showList: parsed.show_list,
    };
  } catch {
    return { insert: "", candidates: [] };
  }
}

async function loadWasmBackend(initPayload: string): Promise<LoadResult> {
  const wasmUrl = "/wasm/portfolio-wasm/portfolio_wasm_bg.wasm";

  try {
    const importWasm = new Function(
      "return import('/wasm/portfolio-wasm/portfolio_wasm.js')",
    ) as () => Promise<WasmBindings>;
    const bindings = await importWasm();

    if (!bindings) {
      return { backend: null, error: "wasm module not loaded" };
    }

    if (typeof bindings.default === "function") {
      await bindings.default(wasmUrl);
    }

    if (!bindings.Shell) {
      return { backend: null, error: "Shell constructor missing" };
    }

    const shell = new bindings.Shell(initPayload);
    return {
      backend: {
        process: (input: string) => parseShellOutput(shell.process(input)),
        complete: (input: string) => parseCompleteOutput(shell.complete(input)),
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { backend: null, error: message };
  }
}

export default function TerminalPanel() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const termRef = useRef<XTermTerminal | null>(null);
  const fitAddonRef = useRef<FitAddonType | null>(null);
  const backendRef = useRef<ShellBackend | null>(null);
  const [ready, setReady] = useState(false);
  const openFile = useIDEStore((s) => s.openFile);

  const initPayload = useMemo(
    () =>
      JSON.stringify({
        files: fileContents,
        pwd: "~",
      }),
    [],
  );

  const options = useMemo<ITerminalOptions>(
    () => ({
      fontFamily:
        '"JetBrains Mono", "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: 13,
      cursorBlink: true,
      theme: mapThemeToXTerm(),
      convertEol: true,
      scrollback: 1500,
      allowProposedApi: false,
    }),
    [],
  );

  useEffect(() => {
    let disposed = false;

    async function boot() {
      const [{ Terminal }, { FitAddon }] = await Promise.all([
        import("xterm"),
        import("@xterm/addon-fit"),
      ]);

      if (disposed || !hostRef.current) return;

      const term = new Terminal(options);
      const fitAddon = new FitAddon();

      term.loadAddon(fitAddon);
      term.open(hostRef.current);
      fitAddon.fit();

      const { backend, error } = await loadWasmBackend(initPayload);
      if (!backend) {
        term.writeln(
          colorize(
            `WASM backend not available.${error ? ` ${error}` : ""}`,
            theme.accentRed,
          ),
        );
        writePrompt(term);
        setReady(false);
      } else {
        backendRef.current = backend;
        setReady(true);
      }

      term.writeln(colorize("Welcome to Arpan's shell.", theme.accent));
      term.writeln(
        colorize("Type `help` for available commands.\n", theme.textMuted),
      );
      writePrompt(term);

      let currentLine = "";

      const handleAutocomplete = () => {
        if (!backendRef.current) {
          term.write("\u0007");
          return;
        }

        const { insert, candidates, showList } =
          backendRef.current.complete(currentLine);

        if (insert) {
          currentLine += insert;
          term.write(insert);
          return;
        }

        if (candidates.length === 0) {
          term.write("\u0007");
          return;
        }

        if (showList) {
          term.write("\r\n");
          term.writeln(candidates.join("  "));
          writePrompt(term);
          term.write(currentLine);
        }
      };

      term.onKey((event) => {
        if (event.domEvent.key === "Tab") {
          event.domEvent.preventDefault();
          handleAutocomplete();
        }
      });

      term.onData((data) => {
        const code = data.charCodeAt(0);

        if (data === "\r") {
          term.write("\r\n");
          if (!backendRef.current) {
            term.writeln("WASM backend not available. Build the bundle first.");
            term.writeln("");
            currentLine = "";
            writePrompt(term);
            return;
          }
          const output = backendRef.current.process(currentLine.trim());

          if (output.clear) {
            term.clear();
          } else {
            output.lines.forEach((line) => term.writeln(line));
            if (output.lines.length > 0) {
              term.writeln("");
            }
          }

          if (output.open) {
            openFile(output.open);
          }

          currentLine = "";
          writePrompt(term);
          return;
        }

        if (data === "\u0003") {
          term.write("^C\r\n");
          currentLine = "";
          writePrompt(term);
          return;
        }

        if (code === 127) {
          if (currentLine.length > 0) {
            currentLine = currentLine.slice(0, -1);
            term.write("\b \b");
          }
          return;
        }

        if (data >= " ") {
          currentLine += data;
          term.write(data);
        }
      });

      termRef.current = term;
      fitAddonRef.current = fitAddon;
    }

    boot();

    const handleResize = () => {
      if (fitAddonRef.current) {
        fitAddonRef.current.fit();
      }
    };

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            if (fitAddonRef.current) {
              fitAddonRef.current.fit();
            }
          })
        : null;

    if (resizeObserver && hostRef.current) {
      resizeObserver.observe(hostRef.current);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
      termRef.current?.dispose();
      termRef.current = null;
      fitAddonRef.current = null;
    };
  }, [options, initPayload, openFile]);

  return (
    <div
      className="flex flex-col h-full w-full"
      style={{
        background: theme.bgPanel,
        borderTop: `1px solid ${theme.border}`,
        borderLeft: `1px solid ${theme.border}`,
        borderRight: `1px solid ${theme.border}`,
        boxShadow: `inset 0 1px 0 ${theme.bgHover}`,
      }}
    >
      <div
        className="flex items-center justify-between px-3 shrink-0"
        style={{
          height: "28px",
          fontSize: "12px",
          background: theme.bg,
          color: theme.textMuted,
          borderBottom: `1px solid ${theme.border}`,
          letterSpacing: "0.02em",
        }}
      >
        <span className="text-xs text-[#CDCECF]">terminal</span>
        <span style={{ fontSize: "11px", color: theme.textMuted }}>
          {ready ? "connected" : "loading..."}
        </span>
      </div>
      <div
        ref={hostRef}
        className="flex-1 overflow-hidden"
        style={{
          padding: "12px 14px",
          margin: "8px 10px 10px",
          background: `linear-gradient(180deg, ${theme.bgPanel} 0%, ${theme.bg} 100%)`,
          border: `1px solid ${theme.border}`,
          borderRadius: "8px",
          boxShadow: `inset 0 0 0 1px ${theme.bgHover}`,
        }}
      />
    </div>
  );
}
