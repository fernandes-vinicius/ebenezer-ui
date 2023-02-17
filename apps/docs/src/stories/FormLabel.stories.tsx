import type { Meta, StoryObj } from '@storybook/react'
import { FormLabel, FormLabelProps, Flex, TextInput } from '@ebenezer-ui/react'

export default {
  title: 'Form/FormLabel',
  component: FormLabel,
  parameters: {
    docs: {
      description: {
        component:
          'The label of a form section. The usage is similar to `html label`. `htmlFor` is set by default for children input.',
      },
    },
  },
  args: {
    htmlFor: 'email',
    children: 'Email address',
  },
  decorators: [
    (Story) => (
      <Flex as="form" direction="column" css={{ color: '$gray500' }}>
        {Story()}
        <TextInput id="email" type="email" placeholder="Email address" />
      </Flex>
    ),
  ],
} as Meta<FormLabelProps>

export const Default: StoryObj<FormLabelProps> = {}
