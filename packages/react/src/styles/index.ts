import {
  borderStyles,
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  shadows,
  // transitions, // TODO
  zIndices,
} from '@ebenezer-ui/tokens'
// import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'

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
    borderStyles,
    borderWidths,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    sizes,
    space,
    shadows,
    // transitions, // TODO
    zIndices,
  },

  media: {
    ...breakpoints,
  },

  // TODO Add utils. TypeScript are not working yet.
  // utils: {
  //   // Abbreviated background properties
  //   bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
  //     backgroundColor: value,
  //   }),

  //   // Abbreviated margin properties
  //   m: (value: Stitches.PropertyValue<'margin'>) => ({
  //     margin: value,
  //   }),
  //   mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
  //     marginTop: value,
  //   }),
  //   mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
  //     marginBottom: value,
  //   }),
  //   mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
  //     marginTop: value,
  //   }),
  //   ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
  //     marginTop: value,
  //   }),
  //   mx: (value: Stitches.PropertyValue<'marginLeft' | 'marginRight'>) => ({
  //     marginLeft: value,
  //     marginRight: value,
  //   }),
  //   my: (value: Stitches.PropertyValue<'marginTop' | 'marginBottom'>) => ({
  //     marginTop: value,
  //     marginBottom: value,
  //   }),

  //   // Abbreviated padding properties
  //   p: (value: Stitches.PropertyValue<'padding'>) => ({
  //     padding: value,
  //   }),
  //   pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
  //     paddingTop: value,
  //   }),
  //   pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
  //     paddingBottom: value,
  //   }),
  //   pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
  //     paddingTop: value,
  //   }),
  //   pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
  //     paddingTop: value,
  //   }),
  //   px: (value: Stitches.PropertyValue<'paddingLeft' | 'paddingRight'>) => ({
  //     paddingLeft: value,
  //     paddingRight: value,
  //   }),
  //   py: (value: Stitches.PropertyValue<'paddingTop' | 'paddingBottom'>) => ({
  //     paddingTop: value,
  //     paddingBottom: value,
  //   }),

  //   // Abbreviated width/height properties
  //   w: (value: Stitches.PropertyValue<'width'>) => ({
  //     width: value,
  //   }),
  //   h: (value: Stitches.PropertyValue<'height'>) => ({
  //     height: value,
  //   }),

  //   // A property for applying width/height together
  //   size: (value: Stitches.PropertyValue<'width' | 'height'>) => ({
  //     width: value,
  //     height: value,
  //   }),

  //   // A property to apply linear gradient
  //   linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
  //     backgroundImage: `linear-gradient(${value})`,
  //   }),
  // },
})
