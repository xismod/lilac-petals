import { GetProps } from "@tamagui/core";
import type { ButtonFrame, ButtonText } from "./Button.styles";

export type ButtonProps = GetProps<typeof ButtonFrame>;
export type ButtonContentProps = GetProps<typeof ButtonText>;