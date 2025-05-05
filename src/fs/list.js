import { table } from "node:console";
import { join } from "node:path";
import { readdir } from "node:fs/promises";
import { FsError } from "./utils/fsError.js";

const list = async () => {
  const currentDir = import.meta.dirname;
  const path = join(currentDir, "files");
  try {
    table(await readdir(path));
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new FsError();
    }
  }
};

await list();
