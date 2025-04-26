import { join } from "node:path";
import { rm } from "node:fs/promises";
import { FsError } from "./utils/fsError.js";

const remove = async () => {
  const currentDir = import.meta.dirname;

  const path = join(currentDir, "files", "fileToRemove.txt");
  try {
    await rm(path);
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new FsError();
    }
  }
};

await remove();
