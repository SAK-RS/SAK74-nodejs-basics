import { argv } from "node:process";

const parseArgs = () => {
  const result = argv
    .slice(2)
    .map((el, i, argv) => {
      if (el.startsWith("--")) {
        return (
          el.replace(/^--/, "") +
          " is " +
          (argv[i + 1].startsWith("--") ? "'undefined'" : argv[i + 1])
        );
      }
    })
    .filter(Boolean);
  console.log(result.join(", "));
};

parseArgs();
