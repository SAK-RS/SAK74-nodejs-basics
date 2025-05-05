import { createGzip } from "node:zlib";
import { join } from "node:path";
import { chdir } from "node:process";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  chdir(join(import.meta.dirname, "files"));
  const gzip = createGzip();
  const readStream = createReadStream("fileToCompress.txt");

  const writeStream = createWriteStream("archive.gz");
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
