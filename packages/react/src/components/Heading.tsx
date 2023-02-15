import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Heading = styled('h2', {
  margin: 0,

  fontFamily: '$heading',
  fontWeight: '$bold',
  lineHeight: '$shorter',
  color: 'inherit',

  variants: {
    size: {
      xs: {
        fontSize: '$sm',
      },
      sm: {
        fontSize: '$md',
      },
      md: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$3xl',
      },
      xl: {
        fontSize: '$4xl',
      },
      '2xl': {
        fontSize: '$5xl',
      },
      '3xl': {
        fontSize: '$6xl',
      },
      '4xl': {
        fontSize: '$7xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {}

Heading.displayName = 'Heading'
