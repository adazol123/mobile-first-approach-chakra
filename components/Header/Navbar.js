import {
    Box, 
    Flex, 
    Spacer, 
    IconButton, 
    Image as ImageChakra, 
    Button,
    useColorMode

} from '@chakra-ui/react'
import { ThemeSwitch } from '../Button/ThemeSwitch'
import { CenterWrapper } from '../Wrapper/Center'

export const Navbar = (params) => {

    const { toggleColorMode } = useColorMode()
    return (
        <Box 
            
            minHeight='42px'
            width="100%"
            pos='sticky'
            top={0}
            mt={4}

        >
            <CenterWrapper>
            <Flex
                width='100%'
                height='42px'
                alignItems='center'
                justify='space-between'
                pt={1}
                mx='14px'
            >
                <Box>Menu</Box>
                <Flex justify='center' align='center'>
                    <ImageChakra src='./assets/svg/logo-beta.svg' w='100%' h='100%' />
                    
                </Flex>
                <ThemeSwitch/>

            </Flex>
            </CenterWrapper>
        </Box>
    )
}
