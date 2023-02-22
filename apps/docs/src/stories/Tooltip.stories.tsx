import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ebenezer-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    text: 'Eu sou um Tooltip',
    children: <Button>Passe o mouse sobre mim</Button>,
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
