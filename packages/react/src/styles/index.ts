// import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  space,
  shadows,
  zIndices,
  sizes,
  breakpoints,
} from '@ebenezer-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    radii,
    space,
    shadows,
    zIndices,
    sizes,
    // TODO transitions
  },

  media: {
    ...breakpoints,
  },

  // utils: {
  //   // Abbreviated backgroundColor properties
  //   // TODO Type utils using Stitches.PropertyValue<'backgroundColor'>
  //   bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
  //     backgroundColor: value,
  //   }),
  // },
})
