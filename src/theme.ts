
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({ 
    config,
    colors: {
        gray: 
        {
          50: '#e2fcfd',
          100: '#bef4f3',
          200: '#97e9ec',
          300: '#70d7e4',
          400: '#4fc3dd',
          500: '#3ba1c3',
          600: '#2c7698',
          700: '#1d4e6c',
          800: '#0b2841',
          900: '#000b17',
        },
        white: {
            50: '#e2fdfc',
            100: '#bef4f3',
            200: '#97ece5',
            300: '#70e4d2',
            400: '#4fddbd',
            500: '#3bc39c',
            600: '#2c9872',
            700: '#1d6c4b',
            800: '#0b4128',
            900: '#00170b',
        }
    }
});

export default theme