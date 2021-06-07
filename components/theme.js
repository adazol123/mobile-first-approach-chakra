import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools"
import { Button } from "./Button/CTA_Button";

const fonts = {
        heading:'"Poppins", sans-serif',
        body: '"Poppins", sans-serif',
        mono: '"Poppins", sans-serif'
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  lg: '62em',
})

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '30px',
  '5xl': '48px',
  '6xl': '64px',
}

const colors = {
  transparent: 'transparent',
  black: '#0A1931',
  white: '#F3F6F9', //theme light color
  gray: {
    50: '#F3F6F9',
    100: '#F3F6F9',
    200: '#CDCDD1',
    300: '#9A9AA0',
    400: '#6D6D7A',
    500: '#43434D',
    600: '#262F3D',
    700: '#1A1A26',
    800: '#13161D', //theme dark color
    900: '#0A1931',
  },
  custom: {
    primary: '#2ACB9D',
    secondary: '#5A88FD'
  }

}

const radii = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
}


export const overrides = extendTheme({
    components: {
      Button,
    },

    // styles: {
    //   global: (props) => ({
    //     body: {
    //       fontFamily: '"Poppins", sans-serif',
    //       color: mode("gray.800", "whiteAlpha.900")(props),
    //       bg: mode("white", "gray.800")(props),
    //       lineHeight: "base",
    //     },
    //   }),
    // },
    fonts,
    breakpoints,
    fontWeights,
    fontSizes,
    colors,
    radii,
    config: {
      cssVarPrefix: "theme",
    },
    
  })


const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
    config: {
      cssVarPrefix: 'test',
    },
}

export const theme = extendTheme({ config })

