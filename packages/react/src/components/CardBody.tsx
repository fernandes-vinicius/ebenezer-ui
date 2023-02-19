import { styled } from '../styles'
import { ComponentProps } from '../types'
import { Box } from './Box'

export const CardBody = styled(Box, {
  padding: '$5',
  flex: '1 1 0%',
})

export interface CardBodyProps extends ComponentProps<typeof CardBody> {}

CardBody.displayName = 'CardBody'
