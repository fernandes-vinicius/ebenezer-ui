import { styled } from '../styles'
import { ComponentProps } from '../types'
import { Text } from './Text'

export const FormHelperText = styled(Text, {
  display: 'block',
  marginTop: '$2',
  color: 'inherit',
  fontSize: '$sm',
})

export interface FormHelperTextProps
  extends ComponentProps<typeof FormHelperText> {}

FormHelperText.displayName = 'FormHelperText'
