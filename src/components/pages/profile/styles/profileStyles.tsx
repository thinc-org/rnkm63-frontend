import { makeStyles, Theme } from '@material-ui/core/styles'

export const profileStyles = makeStyles((theme: Theme) => ({
  profile: {
    textAlign: 'center',
    marginBottom: '75px',
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  image: {
    display: 'inline-block',
    marginLeft: '8%',
    marginRight: '8%',
    alignItems: 'center',
    borderRadius: '24px',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '200px',
    },
  },
  imageSize: {
    borderRadius: '25px',
    width: '200px',
    height: '250px',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '200px',
    },
  },
  value: {
    display: 'inline-block',
    width: '40%',
    verticalAlign: 'top',
    [theme.breakpoints.down('sm')]: {
      width: '65%',
      marginTop: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  title: {
    color: '#54D166',
    textAlign: 'left',
    marginTop: '0px',
    marginBottom: '0px',
    lineHeight: '27px',
    fontSize: '1.1rem',
    letterSpacing: '0.007em',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '17px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  valueDetails: {
    color: 'white',
    textAlign: 'left',
    lineHeight: '40px',
    fontSize: '2rem',
    marginTop: '0px',
    marginBottom: '28px',
    letterSpacing: '0.007em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '27px',
      marginTop: '13px',
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
      marginBottom: '18px',
      lineHeight: '17px',
    },
  },
  baanWarning: {
    color: '#F2C94C',
    margin: '-28px 0px',
    textAlign: 'left',
    fontSize: '0.75rem',
    display: 'table',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-19px',
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-12px',
      fontSize: '0.7rem',
      wordWrap: 'break-word',
      whiteSpace: 'pre-line',
    },
  },
}))
