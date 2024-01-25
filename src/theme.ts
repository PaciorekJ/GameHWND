
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({ 
    config,
    colors: {
        gray: {
            50: '#eaf3fe',
            100: '#cdd9e6',
            200: '#aec0d0',
            300: '#8fa7bd',
            400: '#718ea9',
            500: '#57758f',
            600: '#425b70',
            700: '#2f4151',
            800: '#1a2732',
            900: '#010e16',
        }
    }
});

export default theme