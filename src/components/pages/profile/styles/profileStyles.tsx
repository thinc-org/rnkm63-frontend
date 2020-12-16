import { makeStyles } from '@material-ui/core/styles'

export const profileStyles = makeStyles({
  profile: {
    textAlign: 'center',
    marginBottom: '75px',
    fontFamily: 'Kanit',
  },
  image: {
    display: 'inline-block',
    marginLeft: '8%',
    marginRight: '8%',
    marginBottom: '32px',
    marginTop: '50px',
    alignItems: 'center',
    borderRadius: '24px',
  },
  imageSize: {},
  value: {
    display: 'inline-block',
    width: '471px',
    verticalAlign: 'top',
    marginTop: '50px',
  },
  title: {
    color: '#54D166',
    textAlign: 'left',
    marginTop: '0px',
    marginBottom: '0px',
    lineHeight: '27px',
    fontSize: '18px',
    letterSpacing: '0.007em',
    fontWeight: 'bold',
  },
  valueDetails: {
    color: 'white',
    textAlign: 'left',
    lineHeight: '40px',
    fontSize: '32px',
    marginTop: '0px',
    marginBottom: '28px',
    letterSpacing: '0.007em',
  },
  baanWarning: {
    color: '#F2C94C',
    margin: '-28px 0px',
    textAlign: 'left',
    fontSize: '12px',
    display: 'table',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
  },
  '@media screen and (max-width: 720px)': {
    profile: {
      marginBottom: '40px',
    },
    value: {
      width: '90%',
    },
    image: {
      marginTop: '18px',
      marginBottom: '-14px',
    },
    title: {
      fontSize: '22px',
      lineHeight: '17px',
    },
    valueDetails: {
      fontSize: '25px',
      lineHeight: '27px',
      marginTop: '13px',
      marginBottom: '25px',
    },
    baanWarning: {
      marginTop: '-19px',
      fontSize: '12px',
    },
  },
  '@media screen and (max-width: 320px)': {
    image: {
      width: '150px',
      height: '200px',
    },
    imageSize: {
      width: '150px',
      height: '200px',
    },
    title: {
      fontSize: '18px',
      lineHeight: '17px',
    },
    valueDetails: {
      fontSize: '16px',
      marginBottom: '18px',
      lineHeight: '17px',
    },
    baanWarning: {
      marginTop: '-12px',
      fontSize: '8px',
      wordWrap: 'break-word',
      whiteSpace: 'pre-line',
    },
  },
})
