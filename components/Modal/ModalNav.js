import { Box, Flex, Text } from "@chakra-ui/react"
import { AnimatePresence, m, LazyMotion } from "framer-motion"

const loadFeatures = () => 
    import('../features.js').then(res => res.default)

const ModalNav = ( { children, open, setOpen }) => {
    
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
                        top='59px'
                        right='0'
                        left='0'
                        marginX='auto'
                        width='94%'
                        height='390px'
                        borderRadius='10px'
                        background='blackAlpha.200'
                        padding='2px'
                        backdropFilter=' saturate(150%) blur(80px)'
                        className='modal-content-wrapper'
                        zIndex='1'
        
                        initial={{ scale: 1, y: '-150%',  }}
                        animate={{ scale: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{ y: '-150%', transition: { duration: 0.4 } }}
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
