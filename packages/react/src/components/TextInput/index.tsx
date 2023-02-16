import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  size?: ComponentProps<typeof TextInputContainer>['size']
  isInvalid?: ComponentProps<typeof TextInputContainer>['isInvalid']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ size, isInvalid, ...props }, ref) => {
    return (
      <TextInputContainer size={size} isInvalid={isInvalid}>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
