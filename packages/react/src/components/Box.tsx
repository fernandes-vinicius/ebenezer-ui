import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Box = styled('div', {
  boxSizing: 'border-box',
  minWidth: '$0',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
