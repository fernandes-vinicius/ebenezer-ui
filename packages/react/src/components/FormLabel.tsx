import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const FormLabel = styled('label', {
  display: 'block',
  textAlign: 'start',

  marginInlineEnd: '$3',
  marginBottom: '$2',
  wordWrap: 'break-word',

  fontFamily: '$default',
  fontWeight: '$semibold',
  fontSize: '$md',
  lineHeight: '$6',

  color: '$gray-900',
})

export interface FormLabelProps extends ComponentProps<typeof FormLabel> {}

FormLabel.displayName = 'FormLabel'
