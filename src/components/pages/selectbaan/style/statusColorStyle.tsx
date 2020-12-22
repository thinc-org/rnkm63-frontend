import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const statusColorStyle = makeStyles((theme: Theme) => ({
  container: {
    paddingBottom: theme.spacing(3),
    minWidth: '230px',
  },
  paperStatus: {
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: '30px',
      height: '30px',
    },
  },
  statusText: {
    fontSize: '0.6rem',
    paddingRight: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      paddingRight: theme.spacing(1),
    },
  },
}))
