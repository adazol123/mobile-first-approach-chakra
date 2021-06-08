import { Box, Flex } from "@chakra-ui/react"
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
                    height='100vh'
                    width='100vw'
                    background='whiteAlpha.200'
                    className='modal-backdrop'
                    overflow='hidden'
                    backdropFilter=' saturate(150%) blur(5px)'
                    initial={{ opacity: 0,  }}
                    animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
                    exit={{ opacity: 0, transition: { delay: 0.6 }}}
                    onClick={() => setOpen(false)}
                />
                    <Box
                        as={m.div}
                        position='fixed'
                        inset='0'
                        margin='auto'
                        width='96%'
                        height='78%'
                        borderRadius='10px'
                        background='blackAlpha.200'
                        padding='2px'
                        backdropFilter=' saturate(150%) blur(30px)'
                        className='modal-content-wrapper'
                        zIndex='998'
        
                        initial={{ scale: 1, x: '150%',  }}
                        animate={{ scale: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{ x: '150%', transition: { duration: 0.4 } }}
                    >
                    <Flex
                        as={m.div}
                        flexDir='column's
                        width='100%'
                        height='100%'
                        justifyContent='center'
                        alignContent='stretch'
                        gridGap={5}
                        p={5}
                    >
                    {children}
                    </Flex>
                    </Box>
                </>
            )}
            </AnimatePresence>
        </LazyMotion>
    )
}

export default ModalNav
