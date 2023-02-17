import { styled } from '../styles'
import { ComponentProps } from '../types'

export const FormControl = styled('div', {
  position: 'relative',
  width: '100%',

  variants: {
    margin: {
      none: {
        marginBottom: 0,
      },
      dense: {
        marginBottom: '$2',
      },
      normal: {
        marginBottom: '$4',
      },
    },
  },

  defaultVariants: {
    margin: 'normal',
  },
})

export interface FormControlProps extends ComponentProps<typeof FormControl> {}

FormControl.displayName = 'FormControl'
