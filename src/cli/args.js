import { argv } from "node:process";
export const parseArgs = () => {
  let argsobj = new Object();

  let newArgv = argv.slice(2);
  for (let i = 0; i < newArgv.length; i++) {
    if (newArgv[i].startsWith("--")) {
      console.log(newArgv[i] + " = " + newArgv[++i]);
    }
  }
};
parseArgs();
