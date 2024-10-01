import { tamaguiPlugin } from "@tamagui/vite-plugin";
import type { StorybookConfig } from "@storybook/react-vite";
//import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	docs: {
		autodocs: true,
	},
	env: (config) => ({
		...config,
		TAMAGUI_TARGET: "web",
	}),
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	stories: [
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../src/**/*.mdx",
		"../docs/**/*.mdx",
	],
	previewHead: (head) => `
		${head}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
	`,
core: {
	builder: '@storybook/builder-vite', // 👈 The builder enabled here.
},
viteFinal: (config, { configType }) => {
	config.define = {
		...config.define,
		"import.meta.env.NODE_ENV":
		configType === "PRODUCTION" ? "production" : "development",
		"import.meta.env.STORYBOOK": true,
	};

	config.plugins!.push(
		tamaguiPlugin({
			config: "/src/themes/tamagui.config.ts",
		}),
	);


	return config;
},
};
export default config;