import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
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

		/* value: */ fileURLToPath(new URL(file, import.meta.url)),
	]);

	return Object.fromEntries(paths);
};

// https://vitejs.dev/config/
export default defineConfig({
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
  }), react()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
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
      ],
			input: computeAllSrcFiles(),
		},
	},
});