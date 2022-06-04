import { readdir } from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToDir = path.join(__dirname, "files");

export const list = async path => {
  try {
    const files = await readdir(path);
    for (const file of files) console.log(file);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log(e.message);
    }
  }
};
list(pathToDir);
