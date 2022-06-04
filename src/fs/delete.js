import { unlink } from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE = "fileToRemove.txt";
const pathToFile = path.join(__dirname, "files", FILE);

export const remove = async filePath => {
  try {
    await unlink(filePath);
    console.log(`${FILE} was removed`);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log(e.message);
    }
  }
};
remove(pathToFile);
