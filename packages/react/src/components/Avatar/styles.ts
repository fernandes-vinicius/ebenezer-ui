import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '@/styles'

export const AvatarContainer = styled(Avatar.Root, {
  color: '$white',
  backgroundColor: '$gray-900',

  display: 'inline-block',
  borderRadius: '$full',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$12',
        height: '$12',
      },
      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '$full',
  height: '$full',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$full',
  height: '$full',
  backgroundColor: 'inherit',

  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$none',
})
