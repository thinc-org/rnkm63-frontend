import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Kanit', 'Rubik', 'sans-serif'].join(','),
  },
  palette: { primary: { main: '#44AD53' } },
})
export default theme
