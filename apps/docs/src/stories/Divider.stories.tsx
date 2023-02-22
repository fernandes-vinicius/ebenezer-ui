import type { Meta, StoryObj } from '@storybook/react'
import { Divider, DividerProps, Box } from '@ebenezer-ui/react'

export default {
  title: 'Data display/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          'Dividers are used to visually separate content in a list or group.',
      },
    },
  },
  args: {
    variant: 'solid',
  },
  decorators: [(Story) => <Box css={{ padding: '$6' }}>{Story()}</Box>],
} as Meta<DividerProps>

export const Solid: StoryObj<DividerProps> = {}

export const Dashed: StoryObj<DividerProps> = {
  args: {
    variant: 'dashed',
  },
}
