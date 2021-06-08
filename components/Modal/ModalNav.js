import { Box, Flex } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const ModalNav = ( { children, open, setOpen }) => {
    
    return (
        <AnimatePresence>
            {open && (
                <>
                <Box
                    as={motion.div}
                    position='fixed'
                    top='0'
                    left='0'
                    height='100vh'
                    width='100vw'
                    background='blackAlpha.500'
                    className='modal-backdrop'
                    overflow='hidden'
                    backdropFilter=' saturate(100%) blur(10px)'
                    initial={{ opacity: 0,  }}
                    animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
                    exit={{ opacity: 0, transition: { delay: 0.6 }}}
                    onClick={() => setOpen(false)}
                />
                    <Box
                        as={motion.div}
                        position='fixed'
                        inset='0'
                        margin='auto'
                        width='90%'
                        height='50%'
                        borderRadius='10px'
                        background='whiteAlpha.300'
                        padding='2px'
                        className='modal-content-wrapper'
        
                        initial={{ scale: 1, x: 500,  }}
                        animate={{ scale: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{ x: 500, transition: { duration: 0.4 } }}
                    >
                    <Flex
                        as={motion.div}
                        flexDir='column'
                        width='100%'
                        height='100%'
                        justifyContent='center'
                        alignContent='stretch'
                        gridGap={3}
                        p={10}
                    >
                    {children}
                    </Flex>
                    </Box>
                </>
            )}
        </AnimatePresence>
    )
}

export default ModalNav
