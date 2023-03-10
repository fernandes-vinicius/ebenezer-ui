import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Heading = styled('h2', {
  margin: '$0',

  fontFamily: '$heading',
  fontWeight: '$bold',
  color: 'inherit',

  variants: {
    size: {
      xs: {
        fontSize: '$sm',
        lineHeight: '$5',
      },
      sm: {
        fontSize: '$md',
        lineHeight: '$6',
      },
      md: {
        fontSize: '$xl',
        lineHeight: '$7',
      },
      lg: {
        fontSize: '$3xl',
        lineHeight: '$9',
      },
      xl: {
        fontSize: '$4xl',
        lineHeight: '$10',
      },
      '2xl': {
        fontSize: '$5xl',
        lineHeight: '$none',
      },
      '3xl': {
        fontSize: '$6xl',
        lineHeight: '$none',
      },
      '4xl': {
        fontSize: '$7xl',
        lineHeight: '$none',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {}

Heading.displayName = 'Heading'
