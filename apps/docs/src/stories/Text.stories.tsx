import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ebenezer-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'Text is the used to render text and paragraphs within an interface. To increase the font size of the text, you can pass the `fontSize` prop.',
      },
    },
  },
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'To override the element that gets rendered, pass the `as` prop. Use Inspect Element to see the element that gets rendered in html.',
      },
    },
  },
}
