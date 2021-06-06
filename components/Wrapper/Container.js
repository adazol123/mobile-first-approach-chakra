import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from 'next/link'
import styled from "@emotion/styled";
import { ThemeSwitch } from "../Button/ThemeSwitch";
import { NavbarNew } from "../Header/NavbarNew";
import { CenterWrapper } from "./Center";

export const Container = ({ children }) => {

    const { colorMode } = useColorMode()

    const backgroundColor = {
        light: '#F3F6F9',
        dark: '#262F3D',
    }

    const StickNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blur(10px);
        transition: height 0.5s, line-height 0.5s;
        box-shadow: 0 4px 10px -3px rgba(0,0,0,.1);
    `

    return (
        <>
        <StickNav
                        mt={[2,4,8]}
                        mb={[2,4,8]}
                        py={1}
                        as='header'
        >
        <NavbarNew />
        </StickNav>
        <CenterWrapper>
            { children }
        </CenterWrapper>
        </>
    )
}
