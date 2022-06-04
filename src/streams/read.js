import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import * as path from "path";
import { fileURLToPath } from "url";

const FILE = "fileToRead.txt";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "files", FILE);

export const read = async filePath => {
  const readable = createReadStream(filePath);
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  stdout.write(data);
};
read(pathToFile);
