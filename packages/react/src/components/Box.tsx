import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Box = styled('div')

export interface BoxProps extends ComponentProps<typeof Box> {
  boxSizing: 'border-box'
  width: '100%'
}

Box.displayName = 'Box'
