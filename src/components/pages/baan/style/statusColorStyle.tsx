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
    [theme.breakpoints.between(500, 'sm')]: {
      width: '20px',
      height: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: '30px',
      height: '30px',
    },
  },
  statusText: {
    fontSize: '0.6rem',
    paddingRight: theme.spacing(0.8),
    [theme.breakpoints.between(500, 'sm')]: {
      fontSize: '0.8rem',
      paddingRight: theme.spacing(0.7),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      paddingRight: theme.spacing(1),
    },
  },
}))
