import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  boxSizing: 'border-box',
  border: '2px solid $gray200',
  overflow: 'hidden',

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

export const Input = styled('input', {
  all: 'unset',

  color: '$gray900',
  fontFamily: '$default',
  fontWeight: '$semibold',
  background: 'transparent',
  width: '100%',
  height: '100%',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$gray500',
  },
})
