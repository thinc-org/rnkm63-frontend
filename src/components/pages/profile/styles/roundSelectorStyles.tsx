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
  select: {
    width: '320px',
    [theme.breakpoints.up('sm')]: {
      width: '433px',
    },
  },
}))
