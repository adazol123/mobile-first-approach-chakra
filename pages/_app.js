import '../styles/globals.css'
import {ChakraProvider, ColorModeProvider, useColorMode} from '@chakra-ui/react'
import {theme as themes, overrides} from '../components/theme'
import { Global, css} from '@emotion/react'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
    <Global
      styles={css`
        ::selection {
          background-color: #98CDF4;
          color: #fefefe;
        }
        ::-moz-selection {
          background: #ffb7b7;
          color: #fefefe;
        }
        html {
          min-width: 350px;
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${colorMode === 'light'? 'white' : '#262F3D'};
          scroll-behavior: smooth;
        }
      `}
    />
    {children}
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={overrides}>
        {/* <ColorModeProvider
          options={{
            initialColorMode: 'dark',
            useSystemColorMode: false
          }}
        > */}

        {/* <GlobalStyle> */}
          <Component {...pageProps} />
        {/* </GlobalStyle> */}
        {/* </ColorModeProvider> */}
     
    </ChakraProvider>
  
  )
}

export default MyApp

