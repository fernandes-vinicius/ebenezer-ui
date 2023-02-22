import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    square: {
      true: {
        borderRadius: '$lg',
      },
    },
    size: {
      xs: {
        width: '$6',
        height: '$6',
        svg: {
          width: '$3',
          height: '$3',
        },
      },
      sm: {
        width: '$8',
        height: '$8',
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        width: '$12',
        height: '$12',
      },
      lg: {
        width: '$16',
        height: '$16',
        svg: {
          width: '$8',
          height: '$8',
        },
      },
      xl: {
        width: '$24',
        height: '$24',
        svg: {
          width: '$12',
          height: '$12',
        },
      },
      '2xl': {
        width: '$32',
        height: '$32',
        svg: {
          width: '$16',
          height: '$16',
        },
      },
    },
  },

  defaultVariants: {
    square: false,
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
  color: '$gray100',
  backgroundColor: '$gray500',

  svg: {
    width: '$6',
    height: '$6',
  },
})
