import type { Meta, StoryObj } from '@storybook/react'
import {
  FormControl,
  FormControlProps,
  FormLabel,
  TextInput,
  FormHelperText,
  Box,
} from '@ebenezer-ui/react'

export default {
  title: 'Form/FormControl',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component:
          'The wrapper that provides context and functionality for all children.',
      },
    },
  },
  args: {
    margin: 'normal',
    children: (
      <>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <TextInput id="email" type="email" placeholder="Email address" />
        <FormHelperText>
          We&apos;ll never share your email with anyone else.
        </FormHelperText>
      </>
    ),
  },
  argTypes: {
    margin: {
      options: ['none', 'dense', 'normal'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: 'null',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box as="form">
        {Story()}
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextInput id="password" type="password" placeholder="Password" />
          <FormHelperText>Enter your password to continue.</FormHelperText>
        </FormControl>
      </Box>
    ),
  ],
} as Meta<FormControlProps>

export const Default: StoryObj<FormControlProps> = {}
