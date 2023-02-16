import { globalCss } from '@ebenezer-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$white',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },
})
