import { join } from "node:path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
  const path = join(import.meta.dirname, "files", "fileToRead.txt");
  const readStream = createReadStream(path, { encoding: "utf-8" });
  readStream.pipe(stdout);
  readStream.on("end", () => {
    stdout.write("\n");
  });
};

await read();
