import { defineConfig, PluginOption, loadEnv } from "vite";
import dtsPlugin from "vite-plugin-dts";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import reactNativeWeb from "vite-plugin-react-native-web";
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url));
const computeAllSrcFiles = (): Record<string, string> => {
	const files = glob.sync(["src/**/*.{ts,tsx}"], {
    ignore: [
    "src/**/*.stories.tsx",
    "src/**/__tests/**",
    "src/**/*.test.{ts,tsx}",
    "src/setup-tests.ts",
    "types.d.ts",
    ],
  });

	const paths = files.map((file) => [
		/* key: */ relative(
			"src",
			file.slice(0, file.length - extname(file).length)
		),

		/* value: */ fileURLToPath(new URL(file, import.meta.url) as never),
	]);

	return Object.fromEntries(paths);
};

const removeEmptyFiles = (): PluginOption => ({
  generateBundle(_, bundle) {
    for (const name in bundle) {
      const file = bundle[name];
      if (file.type !== "chunk") return;

      if (file.code.trim() === "") delete bundle[name];
      if (file.code.trim() === '"use strict";') delete bundle[name];
    }
  },
  name: "remove-empty-files",
});

export default ({ mode }: {mode: string}) => {
  const env = loadEnv(mode, process.cwd(), "");
// https://vitejs.dev/config/
    return defineConfig({
      plugins: [dtsPlugin({
        exclude: [
          "node_modules",
          "src/**/*.stories.tsx",
          "src/**/__tests/**",
          "src/**/*.test.{ts,tsx}",
          "src/setup-tests.ts",
          "types.d.ts"
        ],
        include: ["src"],
      }),
      react(),
      reactNativeWeb(),
      removeEmptyFiles()],
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
      define: {
        "process.env": env,
      },
      build: {
        lib: {
          entry: resolve(__dirname, "src/main.ts"),
          formats: ["cjs", "es"],
          fileName(format, entryName) {
            if (format === "es") return `${entryName}.js`;
            return `${entryName}.${format}`;
          },
        },
        rollupOptions: {
          external: [
            "react",
            "react/jsx-runtime",
            "react-dom",
            "react-native",
            "@tamagui/core",
            "@tamagui/vite-plugin",
            "@tamagui/metro-plugin",
          ],
          input: computeAllSrcFiles(),
        },
      },
    });
}