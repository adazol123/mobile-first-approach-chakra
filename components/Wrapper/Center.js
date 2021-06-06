import { Flex } from "@chakra-ui/react"

export const CenterWrapper = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            justifySelf='center'
            align='center'
            height='auto'
            maxW='1200px'
            mx='auto'
            px={[4, 6, 8]}
        >
         {children}
        </Flex>
    )
}
