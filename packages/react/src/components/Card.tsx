import { styled } from '../styles'
import { ComponentProps } from '../types'
import { Box } from './Box'

export const Card = styled(Box, {
  display: 'flex',
  flexDirection: 'column',

  position: 'relative',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  backgroundColor: '$white',
  borderRadius: '$lg',
  border: '1px solid transparent',

  variants: {
    variant: {
      elevated: {
        boxShadow: '$lg',
      },
      outline: {
        borderColor: '$gray200',
      },
    },
  },

  defaultVariants: {
    variant: 'elevated',
  },
})

export interface CardProps extends ComponentProps<typeof Card> {}

Card.displayName = 'Card'
