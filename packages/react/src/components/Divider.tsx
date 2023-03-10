import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Divider = styled('hr', {
  opacity: 0.6,
  borderBottomWidth: '$1',
  borderColor: '$gray-200',
  width: '$full',
  margin: '$0',
  boxSizing: 'content-box',
  height: '$0',
  overflow: 'visible',

  variants: {
    variant: {
      solid: {
        borderStyle: '$solid',
      },
      dashed: {
        borderStyle: '$dashed',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

export interface DividerProps extends ComponentProps<typeof Divider> {}

Divider.displayName = 'Divider'
