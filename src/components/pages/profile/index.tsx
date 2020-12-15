import React from 'react'
import Countdown from './Countdown'
import Pics from './pics.png'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
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
    marginTop: '20px',
    alignItems: 'center',
    borderRadius: '24px',
  },
  imageSize: {},
  value: {
    display: 'inline-block',
    width: '417px',
    verticalAlign: 'top',
    marginTop: '20px',
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
    lineHeight: '54px',
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
  },
  '@media screen and (max-width: 720px)': {
    profile: {
      marginBottom: '40px',
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
      lineHeight: '17px',
      marginTop: '13px',
      marginBottom: '25px',
    },
    baanWarning: {
      marginTop: '-19px',
      fontSize: '12px',
    },
  },
  '@media screen and (max-width: 320px)': {
    profile: {
      width: '80%',
    },
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
      width: '70%',
    },
  },
})

function Profile(props: any) {
  const classes = useStyles()
  const { t, i18n } = useTranslation('profile')
  return (
    <body className={classes.profile}>
      <div className={classes.image}>
        <img className={classes.imageSize} src={Pics} alt="user profile pic" />
      </div>
      <div className={classes.value}>
        <div>
          <h2 className={classes.title}>{t('Name')}</h2>
          <h3 className={classes.valueDetails}>สมชาย</h3>
        </div>
        <div>
          <h2 className={classes.title}>{t('Faculty')}</h2>
          <h3 className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? 'Faculty of engineering'
              : 'คณะวิศวกรรมศาสตร์'}
          </h3>
        </div>
        <div>
          <h2 className={classes.title}>{t('Baan')}</h2>
          <h3 className={classes.valueDetails}>
            {i18n.language.startsWith('en') ? 'Baan arai' : 'บ้านอะไร'}
          </h3>
          <h4 className={classes.baanWarning}>
            {1 + 2 === 2 ? t('baanWarning') : ''}
          </h4>
        </div>
      </div>
      <Countdown />
    </body>
  )
}

function getBaan(id: number): string {
  return 'hello'
}

export default Profile
