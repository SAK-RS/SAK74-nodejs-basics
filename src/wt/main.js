import { join } from "node:path";
import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const workerPath = join(import.meta.dirname, "worker.js");

  const workers = cpus().map((_, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: 10 + i });
      worker.on("message", (mess) => {
        resolve(mess);
      });
      worker.on("error", () => {
        reject("Worker error...");
      });
    });
  });

  const result = (await Promise.allSettled(workers)).map((res) => ({
    status: res.status === "fulfilled" ? "resolved" : "error",
    data: res.status === "fulfilled" ? res.value : null,
  }));
  console.log(result);
};

await performCalculations();
