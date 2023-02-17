import type { Meta, StoryObj } from '@storybook/react'
import {
  FormHelperText,
  FormHelperTextProps,
  Flex,
  TextInput,
} from '@ebenezer-ui/react'

export default {
  title: 'Form/FormHelperText',
  component: FormHelperText,
  parameters: {
    docs: {
      description: {
        component:
          'The message that tells users more details about the form section.',
      },
    },
  },
  args: {
    children: "We'll never share your email.",
  },
  decorators: [
    (Story) => (
      <Flex as="form" direction="column" css={{ color: '$red600' }}>
        <TextInput type="email" placeholder="Email address" />
        {Story()}
      </Flex>
    ),
  ],
} as Meta<FormHelperTextProps>

export const Default: StoryObj<FormHelperTextProps> = {}
