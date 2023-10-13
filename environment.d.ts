declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ANALYTICS_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
