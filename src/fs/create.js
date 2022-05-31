import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, "files", "fresh.txt"));
export const create = async () => {
  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    "I am fresh and young",
    err => {
      if (err) {
        console.error("FS operation failed");
      }
      console.log("file written to " + path.join(__dirname, "files"));
    }
  );
};

create();
