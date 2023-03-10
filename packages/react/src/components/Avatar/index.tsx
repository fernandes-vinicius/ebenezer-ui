import { ComponentProps } from 'react'

import { User } from 'phosphor-react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: ComponentProps<typeof AvatarContainer>['size']
  variant?: ComponentProps<typeof AvatarContainer>['variant']
}

export function Avatar({ size, variant, children, css, ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size} variant={variant} css={css}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        {children || <User weight="bold" />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
