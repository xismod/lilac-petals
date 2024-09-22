import type { IconNewProps, AtIconProps } from './Icon.types';
import { SquarePenIcon, AtSignIcon } from './Icon.styles';

export const IconNew = (props: IconNewProps) => (
	<SquarePenIcon {...props} />
)

export const UserIcon = (props: AtIconProps) => (
	<AtSignIcon {...props} />
)