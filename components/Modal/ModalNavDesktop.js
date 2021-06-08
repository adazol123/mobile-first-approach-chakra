import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, m, LazyMotion } from "framer-motion"

const loadFeatures = () => 
    import('../features.js').then(res => res.default)


const ModalNavDesktop = () => {
    return (
        <LazyMotion features={loadFeatures}>
            
            
        </LazyMotion>
    )
}

export default ModalNavDesktop
