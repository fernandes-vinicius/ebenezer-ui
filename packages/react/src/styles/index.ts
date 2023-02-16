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

    minHeight: 'space',
    minWidth: 'space',

    maxHeight: 'space',
    maxWidth: 'space',
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
  },
})
