import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reversedTransformStream = new Transform({
    transform(chunk, _, cb) {
      const reversed = chunk.toString().split("").reverse().join("");
      this.push(reversed);
      cb();
    },
  });

  stdin.pipe(reversedTransformStream).pipe(stdout);
};

await transform();
