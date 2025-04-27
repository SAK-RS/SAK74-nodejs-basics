import { createGunzip } from "node:zlib";
import { join } from "node:path";
import { chdir } from "node:process";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  chdir(join(import.meta.dirname, "files"));
  const gunzip = createGunzip();
  const readStream = createReadStream("archive.gz");
  const writeStream = createWriteStream("fileToCompress.txt");
  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
