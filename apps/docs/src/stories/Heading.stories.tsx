import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ebenezer-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'Heading is used to render semantic HTML heading elements.',
      },
    },
  },
  args: {
    children: "I'm a Heading",
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "I'm a Heading as H1 tag",
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`Heading` composes `Box` so you can use all the style props and add responsive styles as well. It renders an `<h2>` tag by default.',
      },
    },
  },
}
