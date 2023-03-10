import { ElementRef, forwardRef } from 'react'

import { Input } from '@/components/Input'
import { ComponentProps } from '@/types'

import { TextInputContainer } from './styles'

export type TextInputRef = ElementRef<typeof TextInputContainer>

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  size?: ComponentProps<typeof TextInputContainer>['size']
  isInvalid?: ComponentProps<typeof TextInputContainer>['isInvalid']
}

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({ size, isInvalid, ...rest }, ref) => {
    return (
      <TextInputContainer size={size} isInvalid={isInvalid}>
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
