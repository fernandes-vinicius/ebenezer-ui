import type { Meta, StoryObj } from '@storybook/react'
import {
  FormErrorMessage,
  FormErrorMessageProps,
  TextInput,
  FormControl,
  Box,
} from '@ebenezer-ui/react'

export default {
  title: 'Form/FormErrorMessage',
  component: FormErrorMessage,
  parameters: {
    docs: {
      description: {
        component: 'The message that shows up when an error occurs.',
      },
    },
  },
  args: {
    children: 'Email is required.',
  },
  decorators: [
    (Story) => (
      <Box as="form">
        <FormControl>
          <TextInput type="email" placeholder="Email address" isInvalid />
          {Story()}
        </FormControl>
      </Box>
    ),
  ],
} as Meta<FormErrorMessageProps>

export const Default: StoryObj<FormErrorMessageProps> = {}
