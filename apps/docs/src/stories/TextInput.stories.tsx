import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, Box } from '@ebenezer-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component:
          'Input component is a component that is used to get user input in a text field.',
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
      <Box css={{ padding: '$6', backgroundColor: '$gray100' }}>{Story()}</Box>
    ),
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const Small: StoryObj<TextInputProps> = {
  args: {
    size: 'sm',
    placeholder: 'Small size',
  },
}

export const Medium: StoryObj<TextInputProps> = {
  args: {
    size: 'md',
    placeholder: 'Medium size',
  },
}

export const Large: StoryObj<TextInputProps> = {
  args: {
    size: 'lg',
    placeholder: 'Large size',
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    isInvalid: true,
    placeholder: 'Invalid input',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}
