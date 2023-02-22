import { styled } from '../styles'
import { ComponentProps } from '../types'
import { Box } from './Box'

export const Container = styled(Box, {
  width: '100%',
  margin: '0 auto',
  padding: '0 $4',

  variants: {
    size: {
      sm: {
        maxWidth: '$container-sm',
      },
      md: {
        maxWidth: '$container-md',
      },
      lg: {
        maxWidth: '$container-lg',
      },
      xl: {
        maxWidth: '$container-xl',
      },
      '2xl': {
        maxWidth: '$container-2xl',
      },
    },

    disablePadding: {
      true: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    disablePadding: false,
  },
})

export interface ContainerProps extends ComponentProps<typeof Container> {}

Container.displayName = 'Container'
