const { createHmac } = await import("node:crypto");
import { readFile } from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const FILE = "fileToCalculateHashFor.txt";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "files", FILE);
export const calculateHash = async filePath => {
  const fileContent = await readFile(filePath, "utf8");
  const hash = createHmac("sha256", fileContent).digest("hex");
  console.log(hash);
};
calculateHash(pathToFile);
