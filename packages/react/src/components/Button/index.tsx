import { Spinner } from 'phosphor-react'
import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  isLoading?: ComponentProps<typeof ButtonContainer>['isLoading']
  loadingText?: string
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  ButtonProps
>(({ isLoading, loadingText, disabled, children, ...props }, ref) => {
  return (
    <ButtonContainer
      ref={ref}
      {...props}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    >
      {isLoading && <Spinner />}

      {isLoading ? loadingText : children}
    </ButtonContainer>
  )
})

Button.displayName = 'Button'
