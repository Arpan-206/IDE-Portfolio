export interface FileIcon {
  path: string;
}

const appIconMap: Record<string, FileIcon> = {
  // Languages
  ts: { path: "/icons/app/typescript.svg" },
  tsx: { path: "/icons/app/typescript-react.svg" },
  js: { path: "/icons/app/javascript.svg" },
  jsx: { path: "/icons/app/javascript-react.svg" },
  py: { path: "/icons/app/python.svg" },
  rs: { path: "/icons/app/rust.svg" },
  go: { path: "/icons/app/go.svg" },

  // Markup & Data
  html: { path: "/icons/app/html.svg" },
  css: { path: "/icons/app/css.svg" },
  json: { path: "/icons/app/json.svg" },
  md: { path: "/icons/app/markdown.svg" },
  xml: { path: "/icons/app/xml.svg" },
  yaml: { path: "/icons/app/yaml.svg" },
  yml: { path: "/icons/app/yaml.svg" },
  toml: { path: "/icons/app/toml.svg" },
  txt: { path: "/icons/app/text.svg" },

  // Other
  sh: { path: "/icons/app/bash.svg" },
  bash: { path: "/icons/app/bash.svg" },
  // Calendar / iCal files: map `.cal` and `.ics` to a calendar-style icon.
  // The calendar icon asset should live at /public/icons/app/ical.svg
  cal: { path: "/icons/app/ical.svg" },
  ics: { path: "/icons/app/ical.svg" },
};

const appFileNameMap: Record<string, FileIcon> = {
  "package.json": { path: "/icons/app/package-json.svg" },
  "bun.lock": { path: "/icons/app/bun-lock.svg" },
  "cargo.lock": { path: "/icons/app/cargo-lock.svg" },
  "readme.md": { path: "/icons/app/readme.svg" },
};

export function getIconPath(filename: string): string {
  const lower = filename.toLowerCase();
  if (appFileNameMap[lower]) return appFileNameMap[lower].path;

  const ext = lower.split(".").pop();
  if (!ext) return "/icons/app/_file.svg";

  return appIconMap[ext]?.path ?? "/icons/app/_file.svg";
}
