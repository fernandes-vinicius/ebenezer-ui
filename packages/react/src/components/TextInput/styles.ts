import { Box } from '@/components/Box'
import { styled } from '@/styles'

export const TextInputContainer = styled(Box, {
  display: 'flex',
  alignItems: 'center',

  overflow: 'hidden',
  textAlign: 'left',
  backgroundColor: '$white',
  borderRadius: '$lg',
  border: '$borderWidths$2 $borderStyles$solid $colors$gray-200',

  '&:has(input:focus)': {
    borderColor: '$primary-600',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        minHeight: '$8',

        '&>input': {
          fontSize: '$sm',
          paddingLeft: '$3',
          paddingRight: '$3',
        },
      },
      md: {
        minHeight: '$12',

        '&>input': {
          fontSize: '$sm',
          paddingLeft: '$4',
          paddingRight: '$4',
        },
      },
      lg: {
        minHeight: '$16',

        '&>input': {
          fontSize: '$lg',
          paddingLeft: '$6',
          paddingRight: '$6',
        },
      },
    },
    isInvalid: {
      true: {
        borderColor: '$red-600',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    isInvalid: false,
  },
})
