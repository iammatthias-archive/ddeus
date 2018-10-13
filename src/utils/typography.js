import Typography from 'typography'

const typography = new Typography({
  title: 'Ddeus',
  baseFontSize: '16px',
  baseLineHeight: 1.618,
  headerFontFamily: [
    'Lobster',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  googleFonts: [
    {
      name: 'Lobster',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  scaleRatio: 3.998,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
