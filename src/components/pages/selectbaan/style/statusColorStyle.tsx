import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const statusColorStyle = makeStyles((theme: Theme) => ({
  container: {
    paddingBottom: theme.spacing(3),
  },
  paperStatus: {
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      width: '20px',
      height: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30px',
      height: '30px',
    },
  },
  statusText: {
    fontSize: '10px',
    paddingRight: '5px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
}))
