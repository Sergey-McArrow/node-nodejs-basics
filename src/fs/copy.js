import { constants } from "fs";
import { copyFile, mkdir, readdir, access } from "node:fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FROM = "files";
const TO = "files_copy";

function errorHandler(msg) {
  console.error(msg);
}

async function createDir(to) {
  await mkdir(to, { recursive: true });
}

async function isExist(to, name) {
  try {
    await access(path.join(to, name));
    console.error(
      `FS operation failed file: ${name} already exists in folder ${to}`
    );
    return false;
  } catch (e) {
    return true;
  }
}

async function copyFiles(from, to) {
  const files = await readdir(from, { withFileTypes: true });

  files.forEach(async ({ name }) => {
    const exist = await isExist(to, name);
    if (exist) {
      await copyFile(
        path.join(from, name),
        path.join(to, name),
        constants.COPYFILE_EXCL
      );
    }
  });
}

async function copy() {
  const from = path.join(__dirname, FROM);
  const to = path.join(__dirname, TO);

  try {
    await createDir(to);
    await copyFiles(from, to);
  } catch (e) {
    errorHandler(e);
  }
}

copy();

// const promise = new Promise((resolve, reject) => {
//   mkdir(destinationPath, { recursive: true }, err => reject(err));
//   resolve();
// });

// export const copy = async () => {
//   promise
//     .then(() => {
//       readdir(sourcePath, { withFileTypes: true }, (err, files) => {
//         if (err) console.log("FS operation failed");
//         files.forEach(file => {
//           fs.access(path.join(destinationPath, file.name), constants.F_OK);

//           console.log(file.name);
//           copyFile(
//             path.join(sourcePath, file.name),
//             path.join(destinationPath, file.name),
//             constants.COPYFILE_EXCL
//           );
//           console.log(
//             "Files copied successfully to " +
//               path.join(destinationPath, file.name)
//           );
//         });
//       });
//     })
//     .catch(err => console.log(err, "FS operation failed"));
// };

// export const copy = async () => {
//   try {
//     readdir(sourcePath, { withFileTypes: true }, (err, files) => {
//       if (err) console.error(err);
//       files.forEach(file => {
//         copyFile(
//           path.join(sourcePath, file.name),
//           path.join(destinationPath, file.name),
//           constants.COPYFILE_EXCL
//         );
//       });
//     });
//   } catch (err) {
//     console.log("FS operation failed");
//   }
// };
// copy();

// export const copy = async () => {
//   try {
//     readdir(sourcePath, { withFileTypes: true }, (err, files) => {
//       if (err) console.error(err);
//       files.forEach(file => {
//         copyFile(
//           path.join(sourcePath, file.name),
//           path.join(destinationPath, file.name),
//           constants.COPYFILE_EXCL
//         );
//       });
//     });
//   } catch (err) {
//     console.log("FS operation failed");
//   }
// };
// copy();
