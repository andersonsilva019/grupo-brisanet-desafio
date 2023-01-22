import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    borderBox: 'border-box',
  },

  body: {
    backgroundColor: '$gray-800',
    fontFamily: 'Roboto, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    color: '$gray-100'
  }
})