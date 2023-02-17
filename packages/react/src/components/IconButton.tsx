import { styled } from '../styles'
import { ComponentProps } from '../types'

export const IconButton = styled('button', {
  all: 'unset',

  display: 'block',
  margin: 0,
  padding: '$3',
  color: '$gray500',
  backgroundColor: 'transparent',
  borderRadius: '$full',
  cursor: 'pointer',
  lineHeight: 0,

  '&:not(:disabled):hover': {
    backgroundColor: '$gray100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$gray300',
  },

  variants: {
    size: {
      sm: {
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        svg: {
          width: '$6',
          height: '$6',
        },
      },
      lg: {
        svg: {
          width: '$8',
          height: '$8',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface IconButtonProps extends ComponentProps<typeof IconButton> {}

IconButton.displayName = 'IconButton'
