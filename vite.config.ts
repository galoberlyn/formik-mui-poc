import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

export default ({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    server: {
      port: 5001,
      proxy: {
        "/api": {
          rewrite: (path) => path.replace(/^\/api/, ""),
          changeOrigin: true,
          target: env.VITE_API_SERVER || "http://localhost:5000",
        },
      },
    },
    plugins: [react(), EnvironmentPlugin("all", { prefix: "VITE_" })],
  });
};
