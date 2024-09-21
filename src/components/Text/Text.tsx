import type { TextProps } from './Text.types';
import { StyledText } from './Text.styles';

export const Text = (props: TextProps) => (
   <StyledText {...props}>
     {props.children}
   </StyledText>
)