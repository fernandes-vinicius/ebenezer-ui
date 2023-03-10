import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const FormHelperText = styled('span', {
  display: 'block',
  marginTop: '$2',
  textAlign: 'start',

  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$xs',
  lineHeight: '$4',

  color: '$gray-500',
})

export interface FormHelperTextProps
  extends ComponentProps<typeof FormHelperText> {}

FormHelperText.displayName = 'FormHelperText'
