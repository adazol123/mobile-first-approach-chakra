import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from 'next/link'
import styled from "@emotion/styled";
import { ThemeSwitch } from "../Button/ThemeSwitch";
import { NavbarNew } from "../Header/NavbarNew";
import { CenterWrapper } from "./Center";
import { useState } from "react";

export const Container = ({ children }) => {

    const { colorMode } = useColorMode()
    const [ isMenu, setMenu] = useState(false)
    const backgroundColor = {
        light: '#F3F6F9',
        dark: '#262F3D',
    }

    const StickNav = styled(Flex)`
        position: sticky;
        z-index: 1000;
        top: 0;
        backdrop-filter: ${isMenu? 'none' : 'saturate(0%) blur(4px)' };
    `

    return (
        <>
        <StickNav
                        mb={[2,4,8]}
                        py={1}
                        as='header'
                        background={colorMode === 'dark'? 'whiteAlpha.700' : 'blackAlpha.700'}
        >
        <NavbarNew isMenu={isMenu} setMenu={setMenu}/>
        </StickNav>
        <CenterWrapper>
            { children }
        </CenterWrapper>
        </>
    )
}
