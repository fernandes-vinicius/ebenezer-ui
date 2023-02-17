import { screens } from './screens'

export const breakpoints = {
  sm: `(min-width: ${screens.sm})`,
  md: `(min-width: ${screens.md})`,
  lg: `(min-width: ${screens.lg})`,
  xl: `(min-width: ${screens.xl})`,
  '2xl': `(min-width: ${screens['2xl']})`,
} as const
