const fs = require("node:fs");
const path = require("node:path");

const contentDir = path.join(__dirname, "../src/portfolio-content");
const outputFile = path.join(__dirname, "../src/lib/portfolioContent.ts");

function listFiles(dir, rootDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(entryPath, rootDir));
    } else if (entry.isFile()) {
      const rel = path.relative(rootDir, entryPath).replace(/\\/g, "/");
      files.push(rel);
    }
  }

  return files;
}

function generateContent() {
  const files = listFiles(contentDir, contentDir).sort();
  const fileContents = {};

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    fileContents[file] = content;
  }

  // Virtual files: these are "files" that don't exist on disk but should
  // be exposed in the generated bundle. Useful for integrations like Cal.com.
  const virtualFiles = {
    // Simple Cal.com virtual file — content is just the URL used as iframe src.
    "meet.cal": "https://cal.com/arpanp/meet-w-arpan",
  };

  // Merge virtual files into the lists that will be serialized.
  for (const [vfName, vfContent] of Object.entries(virtualFiles)) {
    if (!files.includes(vfName)) {
      files.push(vfName);
    }
    fileContents[vfName] = vfContent;
  }

  // Emit fileContents plus derived filename lists:
  // - fileNamesAll: all known filenames (including dotfiles)
  // - visibleFileNames: files to show in the sidebar (filter out dotfiles)
  // - fileNames: backwards-compatible alias equal to visibleFileNames
  const tsContent = `export const fileContents: Record<string, string> = ${JSON.stringify(
    fileContents,
    null,
    2,
  )};

export const fileNamesAll = ${JSON.stringify(files, null, 2)};

export const visibleFileNames = fileNamesAll.filter((n) => !n.startsWith("."));

export const fileNames = visibleFileNames;
`;

  fs.writeFileSync(outputFile, tsContent);
  console.log("Portfolio content generated.");
}

const isWatch = process.argv.includes("--watch");

generateContent();

if (isWatch) {
  console.log("Watching portfolio content for changes...");
  let timer = null;

  const watcher = fs.watch(
    contentDir,
    { recursive: true },
    (_eventType, filename) => {
      if (!filename) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        generateContent();
      }, 50);
    },
  );

  process.on("SIGINT", () => {
    watcher.close();
    process.exit(0);
  });
}
