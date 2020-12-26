import { makeStyles, Theme } from '@material-ui/core/styles'

export const roundStyles = makeStyles((theme: Theme) => ({
  round: {
    fontWeight: 500,
    fontSize: '60px',
    lineHeight: '22px',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  exit: {
    color: 'white',
    backgroundColor: theme.palette.error.main,
    width: '320px',
    borderRadius: '20px',
    margin: '20px 10px',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 10px',
      width: '220px',
    },
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
  },
  change: {
    color: 'white',
    backgroundColor: theme.palette.success.main,
    width: '320px',
    borderRadius: '20px',
    margin: '20px 10px',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 10px',
      width: '220px',
    },
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
  select: {
    [theme.breakpoints.up('sm')]: {
      width: '433px',
    },
  },
}))
