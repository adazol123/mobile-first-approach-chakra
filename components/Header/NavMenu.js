import { Box, Icon, Button, Flex, Text, useColorMode } from "@chakra-ui/react"
import { hamburger, hamburger_cancel, logo } from "./icons"
import { CenterWrapper } from "../Wrapper/Center"
import { Container } from "../Wrapper/Container"
import styled from "@emotion/styled";

export const NavMenu = ( { isMenu, closed }) => {
    const { colorMode } = useColorMode()
    const NavMenuContainer = styled(Flex)`
        position: fixed;
        top: 0px;
        height: 100vh;
        z-index: -1;
        width: 100vw;
        backdrop-filter: saturate(50%) blur(10px);
        flex-direction: column;
        transform: translateX(${isMenu?'0':'100'}%);
        opacity: ${isMenu?'1':'1'};
        transition: transform 3s ease;
        display: ${isMenu?'Flex':'none'};;


    `
    return (
        <NavMenuContainer
            background='blackAlpha.800'
            alignItems='center'
            transition='2s'          
            
        >
            <Flex minHeight='50px' justifyContent='center' alignItems='center'>
            <Icon 
                fill='gray.300' 
                _hover={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _focus={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _active={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                _pressed={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                viewBox="0 0 23 25" boxSize={6}>
                {logo}
            </Icon>
            </Flex>
            <CenterWrapper>
                
            <Box 
                height='90%'
                width='90%'
                mt={1}
                p='30px'
                borderRadius='10px'
                position='absolute'
                background={colorMode === 'dark'? 'whiteAlpha.200':'blackAlpha.300'}
                zIndex='1000'
                
            >
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    height='42px'
                    width='100%'
                    mb={4}
                >
                    <Button p={4}
                        variant='outline' color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} borderColor={colorMode === 'dark'? 'custom.primary': 'custom.secondary'}
                        onClick={() => {closed(!isMenu)}}
                    >
                    
                    {/* <Icon >{hamburger_cancel} </Icon> */}
                    Cancel
                    </Button>
                    <Text color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'}>Menu</Text>
                </Flex>
                <Flex flexDir='column' width='100%' height='80%' alignContent='center' justifyContent='center'  >
                    <Button m={2} variant='outline' color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} borderColor={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} >Home</Button>
                    <Button m={2} variant='outline' color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} borderColor={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} >Blog</Button>
                    <Button m={2} variant='outline' color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} borderColor={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} >Portfolio</Button>
                    <Button m={2} variant='outline' color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} borderColor={colorMode === 'dark'? 'custom.primary': 'custom.secondary'} >About</Button>
                </Flex>
            
            </Box>
            </CenterWrapper>
        </NavMenuContainer>
    )
}


