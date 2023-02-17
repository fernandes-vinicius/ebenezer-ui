import { styled } from '../styles'
import { ComponentProps } from '../types'

export const FormHelperText = styled('span', {
  display: 'block',
  textAlign: 'start',
  marginTop: '$2',
  color: '$gray500',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$xs',
  lineHeight: '$base',
})

export interface FormHelperTextProps
  extends ComponentProps<typeof FormHelperText> {}

FormHelperText.displayName = 'FormHelperText'
