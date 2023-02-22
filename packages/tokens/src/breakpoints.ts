import { sizes } from './sizes'

export const breakpoints = {
  sm: `(min-width: ${sizes['container-sm']})`,
  md: `(min-width: ${sizes['container-md']})`,
  lg: `(min-width: ${sizes['container-lg']})`,
  xl: `(min-width: ${sizes['container-xl']})`,
  '2xl': `(min-width: ${sizes['container-2xl']})`,
} as const
