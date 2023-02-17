import { globalCss } from '@ebenezer-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$white',
    fontFamily: '$default',
    '-webkit-font-smoothing': 'antialiased',
  },

  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap')",
  ],

  '@font-face': [
    {
      fontFamily: 'Montserrat, sans-serif',
      src: "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap')",
    },
    {
      fontFamily: "'Source Sans Pro', sans-serif",
      src: "url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap')",
    },
  ],
})
