import { InputLabel } from "./Label.styles";
import { LabelProps } from "./Label.types";

export const Label = (props: LabelProps) => (
	<InputLabel {...props}>
		{props.children}
	</InputLabel>
)
