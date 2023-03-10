import { forwardRef, useState } from 'react'

import { Eye, EyeSlash } from 'phosphor-react'

import { Input } from '@/components/Input'
import { TextInputProps, TextInputRef } from '@/components/TextInput'
import { TextInputContainer } from '@/components/TextInput/styles'

import { Box } from './Box'
import { IconButton } from './IconButton'

export interface PasswordInputProps extends TextInputProps {}

export const PasswordInput = forwardRef<TextInputRef, PasswordInputProps>(
  ({ size, isInvalid, disabled, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    function handleToggleVisibility() {
      setIsVisible((visible) => !visible)
    }

    return (
      <TextInputContainer size={size} isInvalid={isInvalid}>
        <Input
          ref={ref}
          {...rest}
          type={isVisible ? 'text' : 'password'}
          disabled={disabled}
        />

        <Box css={{ paddingRight: '$2' }}>
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleToggleVisibility}
            disabled={disabled}
            type="button"
            size="sm"
          >
            {isVisible ? <EyeSlash weight="fill" /> : <Eye weight="fill" />}
          </IconButton>
        </Box>
      </TextInputContainer>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
