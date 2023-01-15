import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { ConfigEnv, UserConfigExport } from "vite";
import { viteMockServe } from "vite-plugin-mock";

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "./src/mock",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
