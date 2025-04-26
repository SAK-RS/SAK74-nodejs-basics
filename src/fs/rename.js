import { chdir, cwd } from "node:process";
import { join } from "node:path";
import { rename as fsRename } from "fs/promises";
import { isExist } from "./utils/isExist.js";
import { FsError } from "./utils/fsError.js";

const rename = async () => {
  const currentPath = import.meta.dirname;
  chdir(join(currentPath, "files"));

  const oldPath = join(cwd(), "wrongFilename.txt");
  const newPath = join(cwd(), "properFilename.md");

  if (!(await isExist(oldPath)) || (await isExist(newPath))) {
    throw new FsError();
  }
  await fsRename(oldPath, newPath);
};

await rename();
