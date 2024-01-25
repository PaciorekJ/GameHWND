
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({ 
    config,
    colors: {
        gray: {
        50: '#ebeffb',
        100: '#d4d5df',
        200: '#b9bbc5',
        300: '#9ea0ad',
        400: '#828695',
        500: '#696e7c',
        600: '#525561',
        700: '#3a3d46',
        800: '#22242c',
        900: '#0d0b15',
    }
    }
});

export default theme