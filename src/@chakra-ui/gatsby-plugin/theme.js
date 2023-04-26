import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        red: '#E63946',
        deepblue: '#1D3557',
        offwhite: '#F1FAEE',
        blue: '#457B9D',
        lightblue: '#A8DADC'
    },

    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Nunito', sans-serif`,
    }
});

export default extendTheme(theme)

