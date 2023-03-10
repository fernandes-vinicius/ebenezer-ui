import { styled } from '@/styles'
import { ComponentProps } from '@/types'

import { Box } from './Box'

export const FormControl = styled(Box, {
  position: 'relative',
  width: '$full',

  display: 'flex',
  flexDirection: 'column',

  variants: {
    margin: {
      none: {
        marginBottom: '$0',
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
