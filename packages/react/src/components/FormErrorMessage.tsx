import { styled } from '../styles'
import { ComponentProps } from '../types'

export const FormErrorMessage = styled('span', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$2',
  color: '$red600',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$xs',
  lineHeight: '$base',
})

export interface FormErrorMessageProps
  extends ComponentProps<typeof FormErrorMessage> {}

FormErrorMessage.displayName = 'FormErrorMessage'
