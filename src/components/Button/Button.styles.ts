import { Text, View, styled } from "tamagui";

export const ButtonFrame = styled(View, {
	name: 'Button',

	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'row',

	backgroundColor: '$background',
	hoverStyle: {
	  backgroundColor: '$backgroundHover',
	},
	pressStyle: {
	  backgroundColor: '$backgroundPress',
	},

	disabledStyle: {
		backgroundColor: '$backgroundDisabled',
	},

	height: '$md',
	width: '100%',
	borderRadius: '$md',

	paddingHorizontal: '$sm',

	variants: {
		shape: {
			round: {
				borderRadius: '$hg',
				height: '$md',
				width: '$md',
				paddingHorizontal: '0',
			}
		}
	} as const
})

export const ButtonText = styled(Text, {
	name: 'ButtonText',
	color: '$color',
	fontFamily: '$body',
	fontSize: '$sm',
	lineHeight: '$sm',
	fontWeight: '$normal',
	userSelect: 'none',
})
