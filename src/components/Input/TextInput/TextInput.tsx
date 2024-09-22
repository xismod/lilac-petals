import { TextInput as Txt, TextInputFrame as TxtFrame, TextInputComponent as TxtComp } from "./TextInput.styles";
import { TextInputProps, TextInputFrameProps, TextInputComponentProps } from "./TextInput.types";

export const TextInput = (props: TextInputProps) => (
	<Txt {...props}>
		{props.children}
	</Txt>
)

export const TextInputFrame = (props: TextInputFrameProps) => (
	<TxtFrame {...props}>
		{props.children}
	</TxtFrame>
)

export const TextInputComponent = (props: TextInputComponentProps) => (
	<TxtComp {...props}>
		{props.children}
	</TxtComp>
)
