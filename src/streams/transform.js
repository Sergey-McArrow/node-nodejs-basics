import { Transform, pipeline } from "stream";

export const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;

  const transform = new Transform({
    transform(chunk) {
      const input = chunk.toString().trim();
      const reverse = input.split("").reverse().join("");
      this.push(reverse);
    },
  });
  pipeline(readable, transform, writable, err => {
    console.log(err);
  });
};
transform();
