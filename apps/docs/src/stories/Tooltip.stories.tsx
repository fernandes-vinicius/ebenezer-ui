import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ebenezer-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    text: "I'm a tooltip",
    children: <Button>Hover me</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
