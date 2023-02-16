import type { Meta, StoryObj } from '@storybook/react'
import {
  VisuallyHidden,
  VisuallyHiddenProps,
  Box,
  Heading,
} from '@ebenezer-ui/react'

export default {
  title: 'Disclosure/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          'VisuallyHidden is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.',
      },
    },
  },
  args: {
    children: 'This will be hidden',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box css={{ padding: '$6' }}>
        <Heading>Title and description</Heading>
        {Story()}
      </Box>
    ),
  ],
} as Meta<VisuallyHiddenProps>

export const Default: StoryObj<VisuallyHiddenProps> = {}
