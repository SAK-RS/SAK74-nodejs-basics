import { fork } from "node:child_process";
import { join } from "node:path";

const spawnChildProcess = async (...args) => {
  const childPath = join(import.meta.dirname, "files", "script.js");
  const child = fork(childPath, args);
  child.on("exit", (code) => {
    console.log("Child process has been exited with code ", code);
  });
  child.on("spawn", () => {
    console.log("Child process has been spawned successfully!");
  });
};

spawnChildProcess(1, 2, 3);
