import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  shadows,
  zIndices,
  screens,
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
    radii,
    space,
    shadows,
    zIndices,
    sizes: {
      ...space,
      ...screens,
    },
  },

  media: {
    ...breakpoints,
  },
})
