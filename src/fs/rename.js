import * as path from "path";
import * as fsPromise from "node:fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE = "wrongFilename.txt";
const RENAMED_FILE = "properFilename.md";
const pathToFile = path.join(__dirname, "files", FILE);
const pathToRenamedFile = path.join(__dirname, "files", RENAMED_FILE);

const isExist = async filepath => {
  try {
    await fsPromise.access(filepath);
    return true;
  } catch (e) {
    console.log(`FS operation failed`);
    console.log(`${FILE} is not exists`);
    return false;
  }
};

const isExistRenamed = async renamedFilePath => {
  try {
    await fsPromise.access(renamedFilePath);
    console.log(`FS operation failed`);
    console.log(`${RENAMED_FILE} already exists`);
    return false;
  } catch (e) {
    return true;
  }
};

export const rename = async (file, renamedFile) => {
  let exist =
    (await isExist(pathToFile)) || (await isExistRenamed(pathToRenamedFile));

  try {
    if (exist) {
      fsPromise.rename(file, renamedFile);
      console.log(`File: ${FILE} renamed to ${RENAMED_FILE}`);
    }
  } catch (e) {
    console.error("FS operation failed");
  }
};

rename(pathToFile, pathToRenamedFile);
