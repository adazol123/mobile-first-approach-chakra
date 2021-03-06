import { useColorMode, Button, Flex, Box, Icon, Stack } from "@chakra-ui/react"
import NextLink from 'next/link'
import styled from "@emotion/styled";
import { ThemeSwitch } from "../Button/ThemeSwitch";
import { hamburger, hamburger_cancel, theme, logo, sun, moon } from "./icons";
import { NavMenu } from "./NavMenu";
import { useState } from "react";

export const NavbarNew = ({ children ,isMenu, setMenu }) => {

    const { colorMode } = useColorMode()
    
    const StickNav = styled(Flex)`
        // position: sticky;
        // z-index: 10;
        // top: 0;
        // backdrop-filter: saturate(100%) blur(20px);
        transition: height 0.5s, line-height 0.5s;
        // min-height: 42px;
        
    `

    return (
        <>
        <StickNav
            
            justifyContent={['space-between', 'flex-end']}
            alignItems='center'
            minHeight='42px'
            // height='52px'
            as='nav'
            maxWidth='1200px'
            minWidth='350px'
            width='full'
            px={[4,6,8]}
            mx='auto'
        >
            <Flex justifyContent='space-between' flexDirection={['row','row-reverse']} alignItems='center' width={['55%','full']} mr={5}>
                <Flex display={['flex','none']}>
                <Button padding={1} aria-label='Toggle Dark Mode'variant='ghost'>
                    {isMenu? <Icon 
                        fill='gray.300' 
                        onClick={() =>{setMenu(!isMenu)}}
                        _hover={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _focus={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _active={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _pressed={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        viewBox="0 0 23 22" boxSize={6}>
                        {hamburger_cancel }
                    </Icon>
                    
                    :<Icon 
                        fill='gray.300' 
                        onClick={() =>{setMenu(!isMenu)}}
                        _hover={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _focus={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _active={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        _pressed={{ fill:colorMode === 'dark'? 'custom.primary': 'custom.secondary'}}
                        viewBox="0 0 23 22" boxSize={6}>
                        {hamburger}
                    </Icon>}
                </Button>
                </Flex>
                <Flex display={['none', 'flex']}>
                    {isDesktop()}
                </Flex>
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
            <ThemeSwitch />
        </StickNav>
        
        </>
    )
}

const isDesktop = () => {
    const { colorMode } = useColorMode()
    return (
        <>
            <Flex gridGap={8}>
                
                <Button  variant='link' p={2}> Home </Button>
                <Button  variant='link' p={2}> Portfolio </Button>
                <Button  variant='link' p={2}> Blog </Button>
                <Button  variant='link' p={2}> About </Button>
            </Flex>
        </>
    )
}

const isMobile = () => {
    return (
        <>
        <Flex>
            
        </Flex>
        </>
    )
}


