import { TextInput as Txt } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";

export const TextInput = (props: TextInputProps) => (
	<Txt {...props}>
		{props.children}
	</Txt>
)