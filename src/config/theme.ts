import { createMuiTheme } from '@material-ui/core'

// TODO: Remove zero breakpoint and move xs to zero.

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    zero: true
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'Kanit', 'sans-serif'].join(','),
  },
  breakpoints: {
    keys: ['zero', 'xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      zero: 0,
      xs: 320,
      sm: 720,
      md: 1024,
      lg: 1440,
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
