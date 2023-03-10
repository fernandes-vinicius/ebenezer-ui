import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '@/styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  width: '$6',
  height: '$6',
  backgroundColor: '$transparent',
  borderRadius: '$md',
  lineHeight: '$none',
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '$borderWidths$2 $borderStyles$solid $colors$gray-200',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray-100',
  },

  variants: {
    variant: {
      primary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$primary-600',
            backgroundColor: '$primary-600',
          },
        },

        '&:not(:disabled):focus': {
          borderColor: '$primary-600',
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$secondary-700',
            backgroundColor: '$secondary-700',
          },
        },

        '&:not(:disabled):focus': {
          borderColor: '$secondary-700',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
