export const parseEnv = () => {
  const envVariable = process.env;

  for (const key in envVariable) {
    if (key.startsWith("RSS_")) console.log(key + "=" + envVariable[key]);
  }
};
parseEnv();
