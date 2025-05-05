import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { join } from "node:path";
import { stdout } from "node:process";

const calculateHash = async () => {
  const path = join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");
  const hash = createHash("SHA256");
  const stream = createReadStream(path);
  stream.pipe(hash).setEncoding("hex").pipe(stdout);
  stream.on("end", () => {
    stdout.write("\n");
  });
};

await calculateHash();
