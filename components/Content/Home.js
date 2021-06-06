import { Stack, Heading, Flex, Text, useColorMode, Button } from "@chakra-ui/react"
import Typical from 'react-typical'
import { data } from "./type-data"

export const Home = () => {
    const { colorMode } = useColorMode()
    return (
        <Flex
            flexDirection={['column']}
            alignItems={['start']}
            justifyContent={['flex-end', 'center']}
            height='90vh'
            width={['100%','100%']}
            pb={['100px', '0']}
        >
            <Flex
                flexDirection='column'
                justifyContent='center'
                pr={8}
                width='full'
                
            >

            <Heading
                as='h1'
                fontSize={['3xl', '6xl']}
                fontWeight='bold'
                textTransform='uppercase'
                lineHeight='tall'
                letterSpacing='wide'
                color={colorMode === 'dark'? 'gray.200' : 'gray.500'}
                > Hello, I'm Daniel</Heading>
            <Heading
                as='h2'
                fontSize={['2xl', '5xl']}
                fontWeight='thin'
                textTransform='uppercase'
                lineHeight='shorter'
                letterSpacing='wide'
                display='flex'
                flexWrap='nowrap'
                
                >
                    <Text mr={[2,4]} as='h2' minWidth='62px'>I Am a</Text>
                    <Text color={colorMode === 'dark'? 'custom.primary' : 'custom.secondary' }minWidth='max-content' ><Typical steps={data} loop={Infinity} wrapper='h2'/></Text>
                 </Heading>
            </Flex>
            <Text mt={4} pb={8} fontSize={['md','xl']} maxW='60ch'color={colorMode === 'dark'? 'gray.400' : 'gray.300'} >Wanna be a developer with background in computer hardware. I am currently working and learning with React JS, Next JS, Node JS, Figma Design and Blender for 3D graphics objects.</Text>
            <Button 
                variant='outline'
                borderColor={colorMode === 'dark'? 'custom.primary' : 'custom.secondary'}
                color={colorMode === 'dark'? 'custom.primary' : 'custom.secondary'}
            >Know me more</Button>
        </Flex>
    )
}
