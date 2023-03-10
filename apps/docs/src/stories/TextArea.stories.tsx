import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps, Box } from '@ebenezer-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component:
          'The Textarea component allows you to easily create multi-line text inputs.',
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
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const Small: StoryObj<TextAreaProps> = {
  args: {
    size: 'sm',
    placeholder: 'Small size',
  },
}

export const Medium: StoryObj<TextAreaProps> = {
  args: {
    size: 'md',
    placeholder: 'Medium size',
  },
}

export const Large: StoryObj<TextAreaProps> = {
  args: {
    size: 'lg',
    placeholder: 'Large size',
  },
}

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    isInvalid: true,
    placeholder: 'Invalid textarea',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
}
