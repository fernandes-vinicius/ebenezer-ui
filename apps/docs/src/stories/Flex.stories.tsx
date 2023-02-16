import type { Meta, StoryObj } from '@storybook/react'
import { Flex, FlexProps, Box, Text } from '@ebenezer-ui/react'

export default {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element.',
      },
    },
  },
  args: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
    css: {
      height: '$72',
      padding: '$6',
      borderRadius: '$lg',
      backgroundColor: '$black',
      '&>div': {
        width: '$24',
        padding: '$4',
        color: '$white',
      },
    },
    children: (
      <>
        <Box css={{ backgroundColor: '$green700' }}>
          <Text>Box 1</Text>
        </Box>

        <Box css={{ backgroundColor: '$indigo600' }}>
          <Text>Box 2</Text>
        </Box>

        <Box css={{ backgroundColor: '$red600' }}>
          <Text>Box 3</Text>
        </Box>
      </>
    ),
  },
  argTypes: {
    direction: {
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
      control: {
        type: 'inline-radio',
      },
    },
    justify: {
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      control: {
        type: 'inline-radio',
      },
    },
    wrap: {
      options: ['noWrap', 'wrap', 'wrapReverse'],
      control: {
        type: 'inline-radio',
      },
    },
    gap: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
} as Meta<FlexProps>

export const Default: StoryObj<FlexProps> = {}
