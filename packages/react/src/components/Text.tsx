import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Text = styled('p', {
  margin: 0,

  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray900',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$shorter',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$shorter',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$shorter',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$shorter',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$shorter',
      },
      '7xl': {
        fontSize: '$7xl',
        lineHeight: '$shorter',
      },
      '8xl': {
        fontSize: '$8xl',
        lineHeight: '$shorter',
      },
      '9xl': {
        fontSize: '$9xl',
        lineHeight: '$shorter',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {}

Text.displayName = 'Text'
