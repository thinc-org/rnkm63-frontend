import { makeStyles, Theme } from '@material-ui/core/styles'

export const countdownStyles = makeStyles((theme: Theme) => ({
  countdownDetail: {
    fontSize: '1.1rem',
    fontWeight: 500,
    marginBottom: '15px',
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '28px',
      marginBottom: '9px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '8px',
      fontSize: '1rem',
      lineHeight: '28px',
    },
  },
  countdownTimer: {
    fontSize: '3rem',
    fontWeight: 500,
    margin: '0px 0px',
    lineHeight: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
      lineHeight: '28px',
      marginTop: '3%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      lineHeight: '22px',
    },
  },
}))
