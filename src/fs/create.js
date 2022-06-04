import * as path from "path";
import { writeFile, access } from "node:fs/promises";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = "fresh.txt";
const filecontent = "I am fresh and young";
const pathToFile = path.join(__dirname, "files", FILE);

const isExist = async filePath => {
  try {
    await access(filePath);
    console.error(`FS operation failed`);
    console.log(`File already exists in folder ${filePath}`);
    return true;
  } catch (e) {
    return false;
  }
};

export const create = async filePath => {
  const exist = await isExist(filePath);
  try {
    if (!exist) {
      await writeFile(filePath, filecontent);
      console.log(`File is  written to ${filePath}`);
    }
  } catch (e) {
    console.error(e);
  }
};

create(pathToFile);

// const isExist = async () => {
//   fs.access(pathToFile, fs.F_OK, err => {
//     if (err) {
//       create();
//       return;
//     } else {
//       console.log(`FS operation failed, file ${FILE}, already exists`);
//     }
//   });
// };
// isExist();
// create();
