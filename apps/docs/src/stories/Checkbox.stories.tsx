import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@ebenezer-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <label style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          {Story()}
          <span>Accept terms of use</span>
        </label>
      )
    },
  ],
  // decorators: [
  //   (Story) => {
  //     return (
  //       <Box
  //         as="label"
  //         css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
  //       >
  //         {Story()}
  //         <Text size="sm">Accept terms of use</Text>
  //       </Box>
  //     )
  //   },
  // ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
