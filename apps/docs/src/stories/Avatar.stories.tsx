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
    square: false,
    size: 'md',
    children: 'VF',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Square: StoryObj<AvatarProps> = {
  args: {
    square: true,
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  // parameters: {
  //   backgrounds: {
  //     default: 'light',
  //   },
  // },
  args: {
    src: undefined,
  },
}

export const ExtraSmall: StoryObj<AvatarProps> = {
  args: {
    size: 'xs',
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

export const ExtraLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'xl',
  },
}

export const Biggest: StoryObj<AvatarProps> = {
  args: {
    size: '2xl',
  },
}
