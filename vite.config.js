import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode, ...rest }) => {
  const defaultOption = {
    plugins: [react()],
    resolve: {
      alias: {
        "#components": path.join(__dirname, "src", "components"),
        "#views": path.join(__dirname, "src", "views"),
        "#assets": path.join(__dirname, "src", "assets"),
        "#theme": path.join(__dirname, "src", "theme"),
        "#variables": path.join(__dirname, "src", "variables"),
        "#routes": path.join(__dirname, "src", "routes"),
      },
    },
  };
  if (command === "build") {
    return {
      base: process.env.BUILD_MODE === "gh-pages" ? "/RVC-Dashboard/" : "/",
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes("node_modules")) {
                return id
                  .toString()
                  .split("node_modules/")[1]
                  .split("/")[0]
                  .toString();
              }
            },
          },
        },
      },
      ...defaultOption,
    };
  } else {
    return defaultOption;
  }
});
