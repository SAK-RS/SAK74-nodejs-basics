import { parentPort, workerData } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  //   //   uncomment to test error behavior
  //   if (workerData === 12) {
  //     throw Error("Worker error...");
  //   }

  const calculation = nthFibonacci(workerData);
  parentPort.postMessage(calculation);
};

sendResult();
