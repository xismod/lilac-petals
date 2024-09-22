import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { XStack } from "tamagui";
import { Label } from "../Label";

export default {
	component: TextInput,
	title: "Components/TextInput",
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const StoryDefault: Story = {
	name: "Default",
	render: (props) => <XStack gap="$2" flexDirection="column" justifyContent="center"><TextInput placeholder="Text here" {...props} /></XStack>,
};

export const StoryPassword: Story = {
	name: "Password",
	render: (props) => <XStack gap="$2" flexDirection="column" justifyContent="center"><TextInput secureTextEntry={true} placeholder="Password here" value="123456" {...props} /></XStack>,
};

export const StoryDisabled: Story = {
	name: "Disabled",
	render: (props) => <XStack gap="$2" flexDirection="column" justifyContent="center"><TextInput placeholder="Disabled" disabled {...props} /></XStack>,
};

export const StoryWithLabel: Story = {
	name: "With Label",
	render: (props) => <XStack gap="$2" flexDirection="column" justifyContent="center"><Label>Label</Label><TextInput placeholder="Text here" {...props} /></XStack>,
};
