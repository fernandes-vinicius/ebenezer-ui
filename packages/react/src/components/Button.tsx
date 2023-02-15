import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Button = styled('button', {
  all: 'unset',

  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  textAlign: 'center',
  textTransform: 'uppercase',
  boxSizing: 'border-box',
  border: '2px solid transparent',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      solid: {
        color: '$white',
        background: '$indigo500',
        borderColor: 'transparent',

        '&:not(:disabled):hover': {
          background: '$indigo600',
        },

        '&:disabled': {
          color: '$gray400',
          backgroundColor: '$gray200',
        },
      },
      outline: {
        color: '$indigo500',
        border: '2px solid $indigo500',

        '&:not(:disabled):hover': {
          background: '$indigo500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray400',
          borderColor: '$gray200',
        },
      },
      ghost: {
        color: '$indigo500',
        // background: '$indigo50',

        '&:not(:disabled):hover': {
          background: '$indigo50',
        },

        '&:disabled': {
          color: '$gray400',
          backgroundColor: '$gray100',
        },
      },
      link: {
        color: '$indigo500',

        '&:not(:disabled):hover': {
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
          textDecorationThickness: '2px',
        },

        '&:disabled': {
          color: '$gray400',
        },
      },
    },
    size: {
      sm: {
        padding: '0 $3',
        height: '$8',
      },
      md: {
        padding: '0 $4',
        height: '$12',
      },
      lg: {
        padding: '0 $6',
        height: '$16',
        fontSize: '$lg',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
