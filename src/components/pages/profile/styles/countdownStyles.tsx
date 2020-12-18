import { makeStyles } from '@material-ui/core/styles'

export const countdownStyles = makeStyles((theme: any) => ({
  countdownDetail: {
    fontSize: '2rem',
    fontWeight: 300,
    marginTop: '6%',
    marginBottom: '25px',
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '28px',
      marginTop: '75px',
      marginBottom: '9px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '28px',
      marginTop: '65px',
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
