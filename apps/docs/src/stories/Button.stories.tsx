import { ArrowRight } from 'phosphor-react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ebenezer-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.',
      },
    },
  },
  args: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    disabled: false,
    children: 'Button',
    fullWidth: false,
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['solid', 'outline', 'ghost', 'text', 'link'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    color: 'secondary',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
  },
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Button With Icon
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
