import { Input, styled, View } from "tamagui";

export const TextInput = styled(Input, {
    borderRadius: '$md',
    borderColor: '$lilac_light',
    borderWidth: '$1',

    placeholderTextColor: '$lilac_light',

    hoverStyle: {
        borderWidth: '$1',
        borderColor: '$lilac',
    },
    focusStyle: {
        borderWidth: '$1',
        borderColor: '$lilac',
    },
    focusVisibleStyle: {
        borderWidth: '$1',
        borderColor: '$lilac',
        outlineWidth: '0'
    },
    outlineWidth: '0'
});

export const TextInputFrame = styled(View, {
    borderRadius: '$md',
    borderColor: '$lilac_light',
    borderWidth: '$1',
    flexDirection: 'row',
	alignItems: 'center',
    paddingInline: '$2',

    hoverStyle: {
        borderWidth: '$1',
        borderColor: '$lilac',
    },

    focusStyle: {
        borderWidth: '$1',
        borderColor: '$lilac',
    },
});

export const TextInputComponent = styled(Input, {
    borderWidth: '0',
    placeholderTextColor: '$lilac_light',

    focusVisibleStyle: {
        outlineWidth: '0'
    },
    outlineWidth: '0'
});

