import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { XStack } from "tamagui";

export default {
	component: Label,
	title: "Components/Label",
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const StoryDefault: Story = {
	name: "Default",
	render: (props) => <XStack gap="$2" justifyContent="center"><Label {...props}>Label</Label></XStack>,
};
