import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ebenezer-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Box is the most abstract component of all. By default it renders a `div` element',
      },
    },
  },
  args: {
    css: {
      backgroundColor: '$red500',
      color: '$white',
      padding: '$4',
      borderRadius: '$lg',
      boxShadow: '$xl',
    },
    children: <Text>This is the Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
