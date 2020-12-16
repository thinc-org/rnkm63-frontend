import { makeStyles } from '@material-ui/core/styles'

export const countdownStyles = makeStyles({
  countdownDetail: {
    fontSize: '34px',
    marginTop: '77px',
    marginBottom: '25px',
    lineHeight: '22px',
  },
  countdownTimer: {
    fontSize: '48px',
    margin: '0px 0px',
    lineHeight: '40px',
    fontWeight: 'bold',
  },
  '@media screen and (max-width: 720px)': {
    countdownDetail: {
      fontSize: '22px',
      lineHeight: '28px',
      marginTop: '53px',
      marginBottom: '9px',
    },
    countdownTimer: {
      fontSize: '30px',
      lineHeight: '28px',
      marginTop: '20px',
    },
  },
  '@media screen and (max-width: 320px)': {
    countdownDetail: {
      fontSize: '14px',
      lineHeight: '28px',
      marginTop: '35px',
      marginBottom: '9px',
    },
    countdownTimer: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
})
