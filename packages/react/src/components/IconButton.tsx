import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const IconButton = styled('button', {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '$0',
  borderRadius: '$lg',
  lineHeight: '$none',

  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: {},
      secondary: {},
      neutral: {},
    },
    size: {
      sm: {
        padding: '$0 $3',
        minHeight: '$8',

        svg: {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        padding: '$0 $4',
        minHeight: '$12',

        svg: {
          width: '$5',
          height: '$5',
        },
      },
      lg: {
        padding: '$0 $6',
        minHeight: '$16',
        fontSize: '$lg',

        svg: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      css: {
        backgroundColor: '$primary-50',
        color: '$primary-700',

        '&:not(:disabled):hover': {
          backgroundColor: '$primary-100',
        },
      },
    },
    {
      color: 'secondary',
      css: {
        backgroundColor: '$secondary-50',
        color: '$secondary-700',

        '&:not(:disabled):hover': {
          backgroundColor: '$secondary-100',
        },
      },
    },
    {
      color: 'neutral',
      css: {
        backgroundColor: '$gray-50',
        color: '$gray-700',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray-100',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'neutral',
    size: 'md',
  },
})

export interface IconButtonProps extends ComponentProps<typeof IconButton> {}

IconButton.displayName = 'IconButton'
