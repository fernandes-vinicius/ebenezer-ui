import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Input = styled('input', {
  all: 'unset',

  color: '$gray900',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$base',
  background: 'transparent',
  width: '100%',
  height: '100%',
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
