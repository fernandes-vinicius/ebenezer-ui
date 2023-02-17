import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Box = styled('div', {
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
  width: '100%',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
