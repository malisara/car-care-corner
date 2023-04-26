/*
main title: gray.800

Color mode combos:

offwhite-gray.600
offwhite-teal.900

gray.800 - white
gray.700-white

*/

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        deepblue: '#1D3557',
        offwhite: '#F1FAEE',
    },

    initialColorMode: 'light',
    useSystemColorMode: false,
});

export default extendTheme(theme)

