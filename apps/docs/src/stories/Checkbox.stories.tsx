import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps, Flex, Text } from '@ebenezer-ui/react'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox component is used in forms when a user needs to select multiple values from several options. You can set the checkbox to `indeterminate` by taking control of its state.',
      },
    },
  },
  args: {
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Flex as="label" gap="2">
          {Story()}
          <Text size="sm" css={{ color: '$gray500' }}>
            Accept terms of use
          </Text>
        </Flex>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
