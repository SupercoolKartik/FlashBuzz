import { resolveConfig } from "./path-to-your-module";

export const resolveConfig = {
  resolve: {
    fallback: {
      os: require.resolve("os-browserify/browser"),
    },
  },
};
