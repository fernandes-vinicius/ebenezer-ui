import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Tag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  maxWidth: '100%',
  minWidth: '$6',
  minHeight: '$6',
  padding: '0 $2',
  borderRadius: '$full',
  border: '1px solid transparent',

  fontSize: '$sm',
  fontFamily: '$heading',
  fontWeight: '$semibold',
  lineHeight: 0,

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$brandPrimary700',
        backgroundColor: '$brandPrimary50',
      },
      secondary: {
        color: '$brandSecondary700',
        backgroundColor: '$brandSecondary50',
      },
      neutral: {
        color: '$gray700',
        backgroundColor: '$gray100',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {}

Tag.displayName = 'Tag'
