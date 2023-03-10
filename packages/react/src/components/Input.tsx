import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Input = styled('input', {
  all: 'unset',

  background: 'transparent',
  width: '$full',
  height: '$full',
  border: 0,

  color: '$gray-900',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$6',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$gray-500',
  },
})

export interface InputProps extends ComponentProps<typeof Input> {}

Input.displayName = 'Input'
