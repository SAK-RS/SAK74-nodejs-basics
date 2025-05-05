import { env, stdout } from "node:process";

const parseEnv = () => {
  for (const name in env) {
    if (name.startsWith("RSS_")) {
      stdout.write(name + "=" + env[name] + "; ");
    }
  }
  stdout.write("\n");
};

parseEnv();
