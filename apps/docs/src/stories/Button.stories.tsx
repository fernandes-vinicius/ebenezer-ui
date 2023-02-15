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
    children: 'Button',
    variant: 'solid',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'ghost', 'link'],
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
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Solid: StoryObj<ButtonProps> = {}

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