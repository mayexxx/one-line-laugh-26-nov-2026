import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "I'm not saying I'm bad with money, but my credit card company recently sent me a wellness check.";

const characterCount = Array.from(text).length;
if (characterCount < 1 || characterCount > 200 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be a single line of 1 to 200 characters");
}

const expected = `${text}\n`;
const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, expected, "utf8");
if (!readFileSync(outputFile).equals(Buffer.from(expected, "utf8"))) {
  throw new Error("Written entry does not match expected bytes");
}
