import type { Meta, StoryObj } from '@storybook/react'
import { Center, CenterProps, Text } from '@ebenezer-ui/react'

export default {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    docs: {
      description: {
        component:
          'Center is a layout component that centers its child within itself.',
      },
    },
  },
  args: {
    children: <Text>This is the Center</Text>,
    css: {
      borderRadius: '$lg',
      backgroundColor: '$red-600',
      color: '$white',
      height: '$32',
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CenterProps>

export const Default: StoryObj<CenterProps> = {}
