import { open } from "node:fs/promises";
import { join } from "node:path";
import { FsError } from "./utils/fsError.js";

const create = async () => {
  const currentPath = import.meta.dirname;
  const path = join(currentPath, "files/fresh.txt");
  try {
    const file = await open(path, "wx");
    await file.write("I am fresh and young");
  } catch (err) {
    if (err?.code === "EEXIST") {
      throw new FsError();
    }
  }
};

await create();
