import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  width: '$6',
  height: '$6',
  backgroundColor: 'transparent',
  borderRadius: '$md',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '2px solid $gray200',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray100',
  },

  variants: {
    variant: {
      primary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$indigo600',
            backgroundColor: '$indigo600',
          },
        },

        '&:not(:disabled):focus': {
          border: '2px solid $indigo600',
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$sky600',
            backgroundColor: '$sky600',
          },
        },

        '&:not(:disabled):focus': {
          border: '2px solid $sky600',
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
