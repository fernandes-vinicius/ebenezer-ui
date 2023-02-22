import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Input = styled('input', {
  all: 'unset',

  color: '$gray900',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$base',
  background: 'transparent',
  width: '$full',
  height: '$full',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$gray500',
  },
})

export interface InputProps extends ComponentProps<typeof Input> {}

Input.displayName = 'Input'
