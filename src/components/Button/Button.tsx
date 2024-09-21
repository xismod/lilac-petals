import type { ButtonProps, ButtonContentProps } from './Button.types';
import { ButtonFrame, ButtonText } from './Button.styles';
import { withStaticProperties } from 'tamagui';

const btnFrame = (props: ButtonProps) => (
	<ButtonFrame {...props}>
		{props.children}
	</ButtonFrame>
)

const btnText = (props: ButtonContentProps) => (
	<ButtonText {...props}>
		{props.children}
	</ButtonText>
)

export const Button = withStaticProperties(btnFrame, {
  Text: btnText,
})