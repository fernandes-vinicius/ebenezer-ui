import { styled } from '@/styles'
import { ComponentProps } from '@/types'

import { FormHelperText } from './FormHelperText'

export const FormErrorMessage = styled(FormHelperText, {
  color: '$red-600',
})

export interface FormErrorMessageProps
  extends ComponentProps<typeof FormErrorMessage> {}

FormErrorMessage.displayName = 'FormErrorMessage'
