import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'Kanit', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 720,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#383838', //grey
    },
    error: {
      main: '#D34949', //red
    },
    success: {
      main: '#44AD53', //green
    },
    warning: {
      main: '#F2C94C', //yellow
    },
    secondary: {
      main: '#D34949',
    },
    text: {
      primary: '#FFFFFF', //white
      secondary: '#000000', //black
    },
  },
})
export default theme
