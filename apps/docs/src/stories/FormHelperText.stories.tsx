import type { Meta, StoryObj } from '@storybook/react'
import {
  FormHelperText,
  FormHelperTextProps,
  TextInput,
  FormControl,
  Box,
} from '@ebenezer-ui/react'

export default {
  title: 'Form/FormHelperText',
  component: FormHelperText,
  parameters: {
    docs: {
      description: {
        component:
          'The message that tells users more details about the form section.',
      },
    },
  },
  args: {
    children: "We'll never share your email.",
  },
  decorators: [
    (Story) => (
      <Box as="form">
        <FormControl>
          <TextInput type="email" placeholder="Email address" />
          {Story()}
        </FormControl>
      </Box>
    ),
  ],
} as Meta<FormHelperTextProps>

export const Default: StoryObj<FormHelperTextProps> = {}
