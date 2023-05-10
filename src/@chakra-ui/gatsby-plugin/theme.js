
/* Dark mode:
lighter bg - darkblue 
darker -darkdarkblue
text- white


Light Mode:
lighter bg - white
darker bg - offwhite
title: darkblue
text gray.700
*/


import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        offwhite: '#f8f9f9',
        darkblue: '#0c2d48',
        darkdarkblue: '#050a30',
    },

    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'PT Sans', sans-serif`,
    },

    initialColorMode: 'light',
    useSystemColorMode: false,
});

export default extendTheme(theme)

