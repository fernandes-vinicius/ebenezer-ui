import { styled } from '../../styles'
import { Box } from '../Box'

export const TextInputContainer = styled(Box, {
  backgroundColor: '$white',
  borderRadius: '$lg',
  border: '2px solid $gray200',
  overflow: 'hidden',
  textAlign: 'left',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$brandPrimary600',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: '$red600',
      },
    },
    size: {
      sm: {
        height: '$8',

        '&>input': {
          fontSize: '$sm',
          paddingLeft: '$3',
          paddingRight: '$3',
        },
      },
      md: {
        height: '$12',

        '&>input': {
          fontSize: '$sm',
          paddingLeft: '$4',
          paddingRight: '$4',
        },
      },
      lg: {
        height: '$16',

        '&>input': {
          fontSize: '$lg',
          paddingLeft: '$6',
          paddingRight: '$6',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    isInvalid: false,
  },
})
