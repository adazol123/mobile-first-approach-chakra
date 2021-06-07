import { mode, createBreakpoints } from "@chakra-ui/theme-tools"

export const Button = {
    
    baseStyle: {
        // fontWeight: 'semibold',
        // textTransform: 'uppercase',
        borderRadius:'10px',
        _focus: { boxShadow: 'none'},
        // color: 'white'
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 10,
            py: 6,
        },
        md: {
            fontSize: 'md',
            px: 14,
            py: 8,
        }
    },
    variants: {
        outline: {
            // border: '3px solid',
            // borderColor: 'blackAlpha.700'
            // _focus: { bg: 'blackAlpha.200', boxShadow: 'md'},
        },
        solid: {
            // bg: 'blackAlpha.500',
            // _hover: { bg: 'blackAlpha.400'},
            // _focus: { bg: 'blackAlpha.400', boxShadow: 'none'},
            // _pressed: { bg: 'blackAlpha.300'},
            // _active: { bg: 'blackAlpha.600', color: 'white', },
        }, 
        ghost: {

        }
    },
    defaultProps: {
        size: 'sm',
        variant: 'solid',
    }

    
}