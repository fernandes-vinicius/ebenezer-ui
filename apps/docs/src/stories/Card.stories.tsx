import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardProps,
  CardBody as CardBodyUI,
  Box,
  Text,
} from '@ebenezer-ui/react'

export default {
  title: 'Data display/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Cards are used to group and display content in a way that is easily readable.',
      },
    },
  },
  args: {
    variant: 'elevated',
    children: <Text>This is the Card</Text>,
  },
  argTypes: {
    variant: {
      options: ['elevated', 'outline'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box css={{ padding: '$4' }}>{Story()}</Box>
    },
  ],
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const CardBody: StoryObj<CardProps> = {
  args: {
    children: (
      <CardBodyUI>
        <Text>This is the Card</Text>
      </CardBodyUI>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The wrapper that houses the card's main content. Put in some content in the `CardBody` to get a basic card.",
      },
    },
  },
}
