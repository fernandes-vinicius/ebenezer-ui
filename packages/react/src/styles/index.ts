import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  radii,
  space,
  shadows,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
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
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    radii,
    space,
    shadows,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  },
})
