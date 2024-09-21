import type { Meta, StoryObj } from "@storybook/react";
import { IconNew } from "./Icon";
import { XStack } from "tamagui";

export default {
	component: IconNew,
	title: "Components/Icon",
} satisfies Meta<typeof IconNew>;

type Story = StoryObj<typeof IconNew>;

export const StoryDefault: Story = {
	name: "Default",
	render: (props) => <XStack backgroundColor='$lilac_dark' gap="$2" justifyContent="center"><IconNew  {...props} /></XStack>,
};
