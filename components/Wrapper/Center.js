import { Flex } from "@chakra-ui/react"

export const CenterWrapper = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100%'
            maxW='1200px'
            mx='auto'
            px={[4, 6, 8]}
            as='main'
        >
         {children}
        </Flex>
    )
}
