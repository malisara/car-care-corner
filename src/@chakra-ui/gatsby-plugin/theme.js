/*
main title: gray.800

Color mode combos:

offwhite-gray.600
offwhite-gray.800

gray.800 - white
gray.700-white

*/

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        deepblue: '#1D3557',
        offwhite: '#F1FAEE',
    },

    fonts: {
        heading: `'inter', sans-serif`,
    },

    initialColorMode: 'light',
    useSystemColorMode: false,
});

export default extendTheme(theme)

