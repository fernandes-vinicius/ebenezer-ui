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
  alignItems: 'center',
  justifyContent: 'center',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray100',
  },

  variants: {
    variant: {
      primary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$brandPrimary600',
            backgroundColor: '$brandPrimary600',
          },
        },

        '&:not(:disabled):focus': {
          border: '2px solid $brandPrimary600',
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          '&:not(:disabled)': {
            borderColor: '$brandSecondary600',
            backgroundColor: '$brandSecondary600',
          },
        },

        '&:not(:disabled):focus': {
          border: '2px solid $brandSecondary600',
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
