import type { Meta, StoryObj } from '@storybook/react'
import { AppleLogo } from 'phosphor-react'
import { IconButton, IconButtonProps } from '@ebenezer-ui/react'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'Icon button renders an icon within in a button.',
      },
    },
  },
  args: {
    size: 'md',
    disabled: false,
    children: <AppleLogo weight="fill" />,
  },
  argTypes: {
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
  },
} as Meta<IconButtonProps>

export const Default: StoryObj<IconButtonProps> = {}

export const Small: StoryObj<IconButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<IconButtonProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<IconButtonProps> = {
  args: {
    size: 'lg',
  },
}
