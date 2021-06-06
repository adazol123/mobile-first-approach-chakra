import { useColorMode, IconButton, Button, Image, Icon } from "@chakra-ui/react"
import { hamburger, hamburger_cancel, theme, logo, sun, moon } from "../Header/icons";
export const ThemeSwitch = (params) => {
    const { colorMode, toggleColorMode } = useColorMode()

    const navHoverBackground = {
        light: '#5A88FD',
        dark: '#2ACB9D'
    }
    return (
        // <Button
        //     w={5}
        //     h={8}
        //     padding={0}
        //     aria-label='Toggle Dark Mode'
        //     onClick={toggleColorMode}
        //     variant='unstyled'
        //     display='flex'
        //     justifyContent='center'
        // >
            <Icon stroke='gray.300'
                onClick={toggleColorMode}
                _hover={{ stroke:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _focus={{ stroke:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _active={{ stroke:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _pressed={{ stroke:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
            fill='none' boxSize={6}>
                {colorMode === 'dark'? sun : moon }
            </Icon>
        // </Button>
    )
}
