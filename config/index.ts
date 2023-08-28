interface Config {
  clientKey: string;
}

const createConfig: () => Config = () => {
  if (!process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY)
    throw new Error("no client key");
  return {
    clientKey: process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY,
  };
};

export default createConfig();
