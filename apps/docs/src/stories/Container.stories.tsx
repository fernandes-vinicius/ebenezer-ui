import type { Meta, StoryObj } from '@storybook/react'
import { Container, ContainerProps, Text } from '@ebenezer-ui/react'

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.",
      },
    },
  },
  args: {
    size: 'md',
    disablePadding: false,
    css: {
      color: '$white',
      backgroundColor: '$brandPrimary600',
    },
    children: <Text>Container</Text>,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
    disablePadding: {
      control: {
        type: 'boolean',
      },
    },
    css: {
      control: {
        type: null,
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ContainerProps>

export const Default: StoryObj<ContainerProps> = {}

export const Small: StoryObj<ContainerProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ContainerProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<ContainerProps> = {
  args: {
    size: 'lg',
  },
}

export const ExtraLarge: StoryObj<ContainerProps> = {
  args: {
    size: 'xl',
  },
}

export const Biggest: StoryObj<ContainerProps> = {
  args: {
    size: '2xl',
  },
}
