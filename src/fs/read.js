import { readFile } from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = "fileToRead.txt";
const pathToFile = path.join(__dirname, "files", FILE);

export const read = async path => {
  try {
    const textFromFile = await readFile(
      path,
      { encoding: "utf8" },
      { withFileTypes: true }
    );
    console.log(textFromFile);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log(e.message);
    }
  }
};
read(pathToFile);
