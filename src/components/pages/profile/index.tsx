import React, { useState } from 'react'
import Countdown from './Countdown'
import Pics from './pics.png'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'

function Profile(props: any) {
  const [userInfo, setUserInfo] = useState<any>([])

  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')

  return (
    <body className={classes.profile}>
      <div className={classes.image}>
        <img className={classes.imageSize} src={Pics} alt="user profile pic" />
      </div>
      <div className={classes.value}>
        <div>
          <h2 className={classes.title}>{t('Name')}</h2>
          <h3 className={classes.valueDetails}>นางสาว ก้อย นุ้ย</h3>
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
            {i18n.language.startsWith('en')
              ? getBaan(20)['name-en']
              : getBaan(20)['name-th']}
          </h3>
          <h4 className={classes.baanWarning}>
            {1 + 1 === 2 ? t('baanWarning') : ''}
          </h4>
        </div>
      </div>
      <Countdown />
    </body>
  )
}

export default Profile
