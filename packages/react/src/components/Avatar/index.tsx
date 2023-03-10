import { ComponentProps } from 'react'

import { User } from 'phosphor-react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: ComponentProps<typeof AvatarContainer>['size']
}

export function Avatar({ size, children, css, ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size} css={css}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        {children || <User weight="bold" />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
