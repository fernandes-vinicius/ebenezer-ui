import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput, PasswordInputProps, Box } from '@ebenezer-ui/react'

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          'The PasswordInput component is a `TextInput` component with `type="password"` and input visibility control.',
      },
    },
  },
  args: {
    placeholder: 'Basic usage',
    size: 'md',
    isInvalid: false,
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    isInvalid: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box css={{ padding: '$6', backgroundColor: '$gray-100' }}>{Story()}</Box>
    ),
  ],
} as Meta<PasswordInputProps>

export const Default: StoryObj<PasswordInputProps> = {}
