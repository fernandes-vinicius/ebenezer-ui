import { styled } from '../styles'
import { ComponentProps } from '../types'

export const TextArea = styled('textarea', {
  all: 'unset',

  backgroundColor: '$white',
  borderRadius: '$lg',
  boxSizing: 'border-box',
  border: '2px solid $gray200',
  width: '$full',

  color: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$semibold',
  minHeight: '$20',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$brandPrimary600',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$gray500',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: '$red600',
      },
    },
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
      lg: {
        fontSize: '$lg',
        padding: '$4 $6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    isInvalid: false,
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
