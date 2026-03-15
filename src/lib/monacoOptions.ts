const MONACO_CONFIG = {
  FONT_FAMILY: "JetBrains Mono, monospace",
  MIN_FONT_SIZE: 14,
  MAX_FONT_SIZE: 18,
  DEFAULT_FONT_SIZE: 14,
  LINE_HEIGHT: 20,
  PADDING_TOP: 12,
  PADDING_BOTTOM: 12,
  SCROLLBAR_SIZE: 8,
} as const;

export function createMonacoOptions(fontSize: number) {
  return {
    readOnly: true,
    minimap: { enabled: false },
    lineNumbers: "on" as const,
    renderLineHighlight: "line" as const,
    scrollBeyondLastLine: false,
    smoothScrolling: true,
    cursorBlinking: "solid" as const,
    cursorSmoothCaretAnimation: "on" as const,
    fontFamily: MONACO_CONFIG.FONT_FAMILY,
    fontSize: fontSize,
    lineHeight: MONACO_CONFIG.LINE_HEIGHT,
    padding: {
      top: MONACO_CONFIG.PADDING_TOP,
      bottom: MONACO_CONFIG.PADDING_BOTTOM,
    },
    overviewRulerBorder: false,
    scrollbar: {
      verticalScrollbarSize: MONACO_CONFIG.SCROLLBAR_SIZE,
      horizontalScrollbarSize: MONACO_CONFIG.SCROLLBAR_SIZE,
    },
  } as const;
}
