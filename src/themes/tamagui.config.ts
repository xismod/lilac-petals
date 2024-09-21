import { createFont, createTamagui, createTokens } from "@tamagui/core";
import { size } from '@tamagui/themes'

const robotoFont = createFont({
	family: 'Roboto, Inter, Helvetica, Arial, sans-serif',
	size: {
		sm: 12,
		md: 20,
		lg: 34,
	},
	lineHeight: {
		sm: 14,
		md: 22,
		lg: 36
	},
	weight: {
		normal: '400',
		heading: '500',
		bold: '600',
	},
	letterSpacing: {
		1: 0,
		2: -1,
		// 3 will be -1
	},
})


const tokens = createTokens({
	radius: {
		sm: 4,
		md: 8,
		lg: 12,
		hg: 500,
	},
	size: {
		sm: 24,
		md: 42,
		lg: 60,
		...size,
	},
	space: {
		sm: 15,
		md: 20,
		lg: 25,
	},
	color: {
		white: '#fff',
		black: '#000',
		lilac: '#8886D3',
		lilac_light: '#C4C3E3;',
		lilac_dark: '#5A38AE',
	},
	zIndex: {},
})

const config = createTamagui({
	fonts: {
		// for tamagui, heading and body are assumed
		heading: robotoFont,
		body: robotoFont,
		button: robotoFont,
	},
	shorthands: {
		px: 'paddingHorizontal',
		f: 'flex',
		m: 'margin',
		w: 'width',
	} as const,

	themes: {
		light: {
			bg: '#f2f2f2',
			lilac: tokens.color.lilac,
		},
		dark: {
			bg: '#111',
			lilac: tokens.color.lilac,
		},

		light_Button: {
			background: tokens.color.lilac,
			backgroundPress: tokens.color.lilac_dark,
			backgroundHover: tokens.color.lilac,
			backgroundDisabled: tokens.color.lilac_light,
			color: tokens.color.white,
		  },
	},
	tokens,
});

export default config;