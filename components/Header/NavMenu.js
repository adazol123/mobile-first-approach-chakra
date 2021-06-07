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
        width: ${isMenu?'100%':'0'};
        backdrop-filter: saturate(50%) blur(10px);
        flex-direction: column;
        // transform: translateX(${isMenu?'0':'100'}%);
        opacity: ${isMenu?'1':'0'};
        transition: all 1s ease;
        display: ${isMenu?'Flex':'none'};;


    `
    return (
        <NavMenuContainer
            background='blackAlpha.800'
            alignItems='center'
            justifyContent='center'
            transition='2s'          
            pointerEvents='auto'
            onClick={() => {closed(!isMenu)}}
        >
            <Flex minHeight='50px' justifyContent='center' alignItems='center'>
           
            </Flex>
            <CenterWrapper>
                
            <Box 
                height='80%'
                width='80%'
                mt={1}
                p='30px'
                borderRadius='10px'
                position='absolute'
                background={colorMode === 'dark'? 'whiteAlpha.200':'blackAlpha.300'}
                zIndex='1000'
                
                pointerEvents='none'
            >
                {/* <Flex
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
                    

                    </Button>
                    <Text color={colorMode === 'dark'? 'custom.primary': 'custom.secondary'}>Menu</Text >
                </Flex> */}
                <Flex flexDir='column' width='100%' height='auto' alignContent='center' justifyContent='start'  pointerEvents='auto'>
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


