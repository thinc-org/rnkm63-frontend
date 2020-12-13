import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Kanit', 'Rubik', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  //#44AD53 is green color.
  palette: {
    type: 'dark',
    primary: {
      main: '#44AD53',
    },
    secondary: {
      main: '#D34949',
    },
    text: {
      primary: '#eee',
    },
  },
})
export default theme
