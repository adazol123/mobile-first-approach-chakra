import { Box, Icon, Button, Flex, Text, useColorMode } from "@chakra-ui/react"
import { hamburger, hamburger_cancel, logo } from "./icons"
import { CenterWrapper } from "../Wrapper/Center"
import { Container } from "../Wrapper/Container"
import styled from "@emotion/styled";
import { useRef, useEffect } from "react";
import ModalNav from "../Modal/ModalNav";

export const NavMenu = ({ isMenu, setMenu} ) => {
    const { colorMode } = useColorMode()
   return (
    <>
    <ModalNav  open={isMenu} setOpen={setMenu}>
       <Button height='120px' variant='outline' >Home</Button>
       <Button height='120px' variant='outline' >Portfolio</Button>
       <Button height='120px' variant='outline' >Blog</Button>
       <Button height='120px' variant='outline' >About</Button>
    </ModalNav>
    </>
   )
}


