import type { Meta, StoryObj } from '@storybook/react'
import {
  FormHelperText,
  FormHelperTextProps,
  Flex,
  TextInput,
  FormControl,
} from '@ebenezer-ui/react'

export default {
  title: 'Forms/FormHelperText',
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
      <Flex as="form" direction="column">
        <FormControl>
          <TextInput type="email" placeholder="Email address" />
          {Story()}
        </FormControl>
      </Flex>
    ),
  ],
} as Meta<FormHelperTextProps>

export const Default: StoryObj<FormHelperTextProps> = {}
