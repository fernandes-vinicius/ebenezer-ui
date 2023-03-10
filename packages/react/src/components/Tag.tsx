import { styled } from '@/styles'
import { ComponentProps } from '@/types'

export const Tag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  maxWidth: '$full',
  minWidth: '$6',
  minHeight: '$6',
  padding: '0 $2',
  borderRadius: '$full',
  border: '$borderWidths$1 $borderStyles$solid $colors$transparent',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$none',
  textTransform: 'lowercase',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$primary-600',
        backgroundColor: '$primary-50',
      },
      secondary: {
        color: '$secondary-700',
        backgroundColor: '$secondary-50',
      },
      neutral: {
        color: '$gray-700',
        backgroundColor: '$gray-100',
      },
    },
  },

  defaultVariants: {
    variant: 'neutral',
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {}

Tag.displayName = 'Tag'
