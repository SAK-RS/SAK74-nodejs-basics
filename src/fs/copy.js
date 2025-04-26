import { cp } from "node:fs/promises";
import { chdir } from "node:process";
import { FsError } from "./utils/fsError.js";

const copy = async () => {
  const currentPath = import.meta.dirname;
  chdir(currentPath);

  try {
    await cp("files", "files_copy", {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    if (err?.code === "ENOENT" || err?.code === "ERR_FS_CP_EEXIST") {
      throw new FsError();
    }
  }
};

await copy();
