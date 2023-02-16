import { Spinner } from 'phosphor-react'
import { ComponentProps } from '../../types'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  isLoading?: ComponentProps<typeof ButtonContainer>['isLoading']
  loadingText?: string
}

export function Button(props: ButtonProps) {
  const { isLoading, loadingText, disabled, children, ...rest } = props

  return (
    <ButtonContainer
      {...rest}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    >
      {isLoading && <Spinner />}

      {isLoading ? loadingText : children}
    </ButtonContainer>
  )
}

Button.displayName = 'Button'
