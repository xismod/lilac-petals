import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
	component: Text,
	title: "Components/Text",
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const StoryDefault: Story = {
	name: "Default",
	render: (props) => <Text {...props} >penes</Text>,
};