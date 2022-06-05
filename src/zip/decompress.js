import { createUnzip, constants } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = "fileToDecompress.txt";
const ZIP = "archive.gz";
const dest = path.join(__dirname, "files", FILE);
const src = path.join(__dirname, "files", ZIP);

export const decompress = async (from, to) => {
  const pipe = promisify(pipeline);
  const gzip = createUnzip();
  const source = createReadStream(from);
  const destination = createWriteStream(to);
  await pipe(source, gzip, destination);
};
decompress(src, dest);
