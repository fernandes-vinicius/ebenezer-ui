import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ebenezer-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.',
      },
    },
  },
  args: {
    src: 'https://github.com/fernandes-vinicius.png',
    alt: 'Vinícius Fernandes',
    variant: 'circular',
    size: 'md',
    children: 'VF',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['square', 'rounded', 'circular'],
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
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Square: StoryObj<AvatarProps> = {
  args: {
    variant: 'square',
  },
}
export const Rounded: StoryObj<AvatarProps> = {
  args: {
    variant: 'rounded',
  },
}

export const Circular: StoryObj<AvatarProps> = {
  args: {
    variant: 'circular',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}
