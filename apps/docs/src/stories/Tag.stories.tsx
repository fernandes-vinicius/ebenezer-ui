import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagProps } from '@ebenezer-ui/react'
import { Gear } from 'phosphor-react'

export default {
  title: 'Data display/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component:
          'Tag component is used for items that need to be labeled, categorized, to inform the user of the status of specific data or organized using keywords that describe them.',
      },
    },
  },
  args: {
    variant: 'neutral',
    children: 'Sample Tag',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'neutral'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TagProps>

export const Primary: StoryObj<TagProps> = {}

export const Secondary: StoryObj<TagProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Neutral: StoryObj<TagProps> = {
  args: {
    variant: 'neutral',
  },
}

export const WithIcon: StoryObj<TagProps> = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Gear weight="fill" />
        Sample Tag
      </>
    ),
  },
}
