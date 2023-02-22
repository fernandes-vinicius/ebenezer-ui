import { Eye, EyeSlash } from 'phosphor-react'
import { ElementRef, forwardRef } from 'react'
import { usePasswordVisibility } from '../../hooks/usePasswordVisibility'
import { Input } from '../Input'
import { TextInputProps } from '../TextInput'
import { TextInputContainer } from '../TextInput/styles'
import { Tooltip } from '../Tooltip'
import { InputRightElement } from './styles'

export interface PasswordInputProps extends TextInputProps {}

export const PasswordInput = forwardRef<
  ElementRef<typeof Input>,
  PasswordInputProps
>(({ size, isInvalid, disabled, type, ...rest }, ref) => {
  const { isVisible, toggleVisibility } = usePasswordVisibility()

  return (
    <TextInputContainer size={size} isInvalid={isInvalid}>
      <Input
        ref={ref}
        {...rest}
        disabled={disabled}
        type={isVisible ? 'text' : 'password'}
      />

      {/* TODO ADD INPUT GROUP */}
      <Tooltip text={isVisible ? 'Mostrar senha' : 'Ocultar senha'}>
        <InputRightElement
          size="sm"
          type="button"
          disabled={disabled}
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeSlash weight="fill" /> : <Eye weight="fill" />}
        </InputRightElement>
      </Tooltip>
    </TextInputContainer>
  )
})

PasswordInput.displayName = 'PasswordInput'
