import type { ElementType } from 'react'

import { ComponentProps as CP } from '@stitches/react'

export type ComponentProps<T> = CP<T> & {
  as?: ElementType
}
