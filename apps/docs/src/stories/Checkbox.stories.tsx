import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps, Flex, Text } from '@ebenezer-ui/react'

export default {
  title: 'Form/Checkbox',
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

          <Text as="span" size="sm" css={{ color: '$gray-500' }}>
            Accept terms of use
          </Text>
        </Flex>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    variant: 'secondary',
    defaultChecked: true,
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
