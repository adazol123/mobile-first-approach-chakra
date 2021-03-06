import { Alert, Button, Flex, Heading, Input, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Header/Navbar'
import styles from '../styles/Home.module.css'
import { Home as Content } from '../components/Content/Home'
import { Container } from '../components/Wrapper/Container'
import { Section } from '../components/Content/Section'
import { useState } from 'react'

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.200', 'gray.700')
  const { isMenu, setMenu} = useState(false)
  return (

    <Container isMenu={isMenu} setMenu={setMenu}>
      <Head>
      <title>Adazolhub</title>
      </Head>
      <Content isMenu={isMenu} setMenu={setMenu}/>
      <Section/>
    </Container>
  )


}
