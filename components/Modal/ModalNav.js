import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import { AnimatePresence, m, LazyMotion } from "framer-motion"

const loadFeatures = () => 
    import('../features.js').then(res => res.default)

const ModalNav = ( { children, open, setOpen }) => {
    const { colorMode } = useColorMode()
    return (
        <LazyMotion features={loadFeatures}>
            <AnimatePresence>
            {open && (
                <>
                <Box
                    as={m.div}
                    position='fixed'
                    top='0'
                    left='0'
                    marginX='auto'
                    height='100vh'
                    width='100vw'
                    background='whiteAlpha.200'
                    className='modal-backdrop'
                    overflow='hidden'
                    backdropFilter=' saturate(150%) blur(5px)'
                    initial={{ opacity: 0,  }}
                    animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
                    exit={{ opacity: 0, transition: { delay: 0.4 }}}
                    onClick={() => setOpen(false)}
                />
                    <Box
                        as={m.div}
                        position='fixed'
                        top='0'
                        right='0'
                        left='0'
                        marginX='auto'
                        pt='46px'
                        width='100%'
                        height='390px'
                        borderBottomLeftRadius='20px'
                        borderBottomRightRadius='20px'
                        background={colorMode === 'dark'? 'whiteAlpha.400' : 'blackAlpha.800'}
                        padding='2px'
                        backdropFilter=' saturate(70%) blur(100px)'
                        className='modal-content-wrapper'
                        zIndex='1'
                        mt='50px'
                        initial={{ opacity: 0, y: '-150%',  }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{ opacity: 0 ,y: '-150%', transition: { duration: 0.4 } }}
                    >
                    <Flex
                        as={m.div}
                        flexDir='column'
                        width='100%'
                        height='100%'
                        justifyContent='flex-start'
                        alignContent='stretch'
                        gridGap={5}
                        p={5}
                        zIndex='1'
                    >
                    {children}
                    </Flex>
                    </Box>
                    <Text as={m.p}
                        initial={{ opacity: 0, y: '-150%',  }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{  opacity: 0, y: '-150%', transition: { duration: 0.4 } }}
                    position='fixed' bottom='5%' textAlign='center' width='full' onClick={() => setOpen(false)} > Close </Text>
                </>
            )}
            </AnimatePresence>
        </LazyMotion>
    )
}

export default ModalNav
