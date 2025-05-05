import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { stdin } from "node:process";

const write = async () => {
  const path = join(import.meta.dirname, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(path, { encoding: "utf-8" });
  stdin.pipe(writeStream);
};

await write();
