const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "../src/portfolio-content");
const outputFile = path.join(__dirname, "../src/lib/portfolioContent.ts");

const files = fs.readdirSync(contentDir).filter(file => fs.statSync(path.join(contentDir, file)).isFile()).sort();

const fileContents = {};

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  fileContents[file] = content;
});

const tsContent = `export const fileContents: Record<string, string> = ${JSON.stringify(fileContents, null, 2)};

export const fileNames = ${JSON.stringify(files)};
`;

fs.writeFileSync(outputFile, tsContent);

console.log("Portfolio content generated.");
