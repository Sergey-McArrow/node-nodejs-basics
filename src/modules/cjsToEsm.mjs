import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import * as a from "./files/a.json" assert { type: "json" };
import * as b from "./files/b.json" assert { type: "json" };
import * as c from "./files/c.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
console.log(c);

export { unknownObject, createMyServer };
