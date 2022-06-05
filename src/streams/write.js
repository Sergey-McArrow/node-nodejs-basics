import { createWriteStream } from "node:fs";
import { stdin, stdout, exit } from "node:process";
import * as path from "path";
import { fileURLToPath } from "url";

const FILE = "fileToWrite.txt";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "files", FILE);

export const write = async filePath => {
  stdout.write("Write your text here:");
  stdin.on("data", data => {
    if (data) {
      console.log(data);
      const writeable = createWriteStream(filePath);
      writeable.write(data);
      stdout.write(`Введенный текст записан в ${FILE}\n`);
    }
    process.on("SIGINT", process.exit);
  });
};
write(pathToFile);
