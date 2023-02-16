import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  square?: ComponentProps<typeof AvatarContainer>['square']
  size?: ComponentProps<typeof AvatarContainer>['size']
}

export function Avatar({ square, size, children, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size} square={square}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
