import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { XStack } from "tamagui";
import { IconNew } from "../Icons/Icon";

export default {
	component: Button,
	title: "Components/Button",
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const StoryDefault: Story = {
	name: "Default",
	render: (props) => <XStack gap="$2" justifyContent="center"><Button  {...props} ><Button.Text>Button</Button.Text></Button></XStack>,
};

export const StoryDisabled: Story = {
	name: "Disabled",
	render: (props) => <XStack gap="$2" justifyContent="center"><Button disabled {...props} ><Button.Text>Button</Button.Text></Button></XStack>,
};

export const StoryRound: Story = {
	name: "Round with Icon",
	render: (props) => <XStack gap="$2" justifyContent="center"><Button shape='round' {...props} ><IconNew size='$sm' /></Button></XStack>,
};