import { Eye, EyeSlash } from 'phosphor-react'
import { ElementRef, forwardRef } from 'react'
import { usePasswordVisibility } from '../../hooks/usePasswordVisibility'
import { Input } from '../Input'
import { TextInputProps } from '../TextInput'
import { TextInputContainer } from '../TextInput/styles'
import { InputRightElement } from './styles'

export interface PasswordInputProps extends TextInputProps {}

export const PasswordInput = forwardRef<
  ElementRef<typeof Input>,
  PasswordInputProps
>(({ size, isInvalid, type, ...props }, ref) => {
  const { isVisible, toggleVisibility } = usePasswordVisibility()

  return (
    <TextInputContainer size={size} isInvalid={isInvalid}>
      <Input ref={ref} {...props} type={isVisible ? 'text' : 'password'} />

      {/* TODO
        ADD INPUT GROUP?
        ADD TOOLTIP
        ADD ICON BUTTON
      */}
      <InputRightElement type="button" onClick={toggleVisibility}>
        {isVisible ? <EyeSlash weight="fill" /> : <Eye weight="fill" />}
      </InputRightElement>
    </TextInputContainer>
  )
})

PasswordInput.displayName = 'PasswordInput'
