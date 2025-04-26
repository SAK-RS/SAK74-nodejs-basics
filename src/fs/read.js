import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { FsError } from "./utils/fsError.js";

const read = async () => {
  const currentDir = import.meta.dirname;
  const path = join(currentDir, "files", "fileToRead.txt");
  try {
    const content = await readFile(path, { encoding: "utf-8" });
    console.log({ content });
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new FsError();
    }
  }
};

await read();
