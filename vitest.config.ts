import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

import { tamaguiPlugin } from "@tamagui/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      components: ["@tamagui/core"],
      config: "src/themes/tamagui.config.ts",
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    server: {
      deps: {
        inline: ["@tamagui"],
      },
    },
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    setupFiles: ["./src/setup-tests.ts"],
  },
});