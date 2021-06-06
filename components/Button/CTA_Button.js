import { mode, createBreakpoints } from "@chakra-ui/theme-tools"

export const Button = {
    
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius:'md'
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
            border: '.1px solid',
            borderColor: 'custom.secondary',
            color: 'custom.secondary',
            _focus: { bg: 'gray.100', boxShadow: 'md'},
        },
        solid: {
            bg: 'custom.secondary',
            color: 'gray.800',
            _hover: { bg: 'gray.100'},
            _focus: { bg: 'gray.100', boxShadow: 'none'},
            _pressed: { bg: 'gray.100'},
            _active: { bg: 'none', color: 'white',  border: '1px solid', borderColor: 'custom.secondary',},
        }
    },
    defaultProps: {
        size: 'sm',
        variant: 'solid',
    }

    
}